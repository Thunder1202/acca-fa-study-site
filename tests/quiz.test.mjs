import test from 'node:test';
import assert from 'node:assert/strict';
import { startSession, answer, isCorrect, score, isComplete, scoreByTopic, rankFor } from '../js/quiz.js';

const QUESTIONS = [
  { id: 'q1', correctIndex: 0 },
  { id: 'q2', correctIndex: 1 },
  { id: 'q3', correctIndex: 2 },
];

test('score with no answers is 0/0', () => {
  assert.deepEqual(score(startSession(QUESTIONS)), { attempted: 0, correct: 0 });
});

test('answering all questions, 2 correct 1 wrong, scores 2/3 regardless of answer order', () => {
  let s = startSession(QUESTIONS);
  s = answer(s, 'q3', 2);
  s = answer(s, 'q1', 1);
  s = answer(s, 'q2', 1);
  assert.deepEqual(score(s), { attempted: 3, correct: 2 });
});

test('re-answering a question overwrites the previous answer, not double-counted', () => {
  let s = startSession(QUESTIONS);
  s = answer(s, 'q1', 1);
  s = answer(s, 'q1', 0);
  assert.deepEqual(score(s), { attempted: 1, correct: 1 });
  assert.equal(isCorrect(s, 'q1'), true);
});

test('scoring the last question in the set counts correctly', () => {
  let s = startSession(QUESTIONS);
  for (const q of QUESTIONS) s = answer(s, q.id, q.correctIndex);
  assert.deepEqual(score(s), { attempted: 3, correct: 3 });
});

const MULTI = { id: 'm1', type: 'multi', correctIndices: [1, 3] };
const MATRIX = { id: 'x1', type: 'matrix', rows: [{ correctIndex: 0 }, { correctIndex: 1 }] };

test('multi-response is correct regardless of selection order', () => {
  const s = answer(startSession([MULTI]), 'm1', [3, 1]);
  assert.equal(isCorrect(s, 'm1'), true);
});

test('multi-response with one of two right is wrong', () => {
  const s = answer(startSession([MULTI]), 'm1', [1, 2]);
  assert.equal(isCorrect(s, 'm1'), false);
});

test('matrix is correct only when every row is right', () => {
  const session = startSession([MATRIX]);
  assert.equal(isCorrect(answer(session, 'x1', [0, 1]), 'x1'), true);
  assert.equal(isCorrect(answer(session, 'x1', [0, 0]), 'x1'), false);
});

test('isComplete requires a choice for a single-answer question', () => {
  assert.equal(isComplete({ type: 'single', correctIndex: 0 }, undefined), false);
  assert.equal(isComplete({ type: 'single', correctIndex: 0 }, 0), true);
});

test('isComplete requires the exact number of picks for multi-response', () => {
  assert.equal(isComplete(MULTI, [1]), false);
  assert.equal(isComplete(MULTI, [1, 2]), true);
});

test('isComplete requires every matrix row to be answered', () => {
  assert.equal(isComplete(MATRIX, [0]), false);
  assert.equal(isComplete(MATRIX, [0, undefined]), false);
  assert.equal(isComplete(MATRIX, [0, 1]), true);
});

test('scoreByTopic splits a mixed review session by topic', () => {
  const mixed = [
    { id: 'a', topicId: 'chapter-01', correctIndex: 0 },
    { id: 'b', topicId: 'chapter-01', correctIndex: 1 },
    { id: 'c', topicId: 'chapter-02', correctIndex: 2 },
  ];
  let s = startSession(mixed);
  s = answer(s, 'a', 0);
  s = answer(s, 'b', 0);
  s = answer(s, 'c', 2);
  assert.deepEqual(scoreByTopic(s), {
    'chapter-01': { attempted: 2, correct: 1 },
    'chapter-02': { attempted: 1, correct: 1 },
  });
});

test('rankFor follows the 50% exam pass mark and rises with the score', () => {
  assert.equal(rankFor(0), 'rankAcademy');
  assert.equal(rankFor(49), 'rankAcademy');
  assert.equal(rankFor(50), 'rankGenin');
  assert.equal(rankFor(69), 'rankGenin');
  assert.equal(rankFor(70), 'rankChunin');
  assert.equal(rankFor(84), 'rankChunin');
  assert.equal(rankFor(85), 'rankJonin');
  assert.equal(rankFor(100), 'rankJonin');
});

test('answer leaves the earlier session unchanged', () => {
  const before = startSession(QUESTIONS);
  answer(before, 'q1', 0);
  assert.deepEqual(score(before), { attempted: 0, correct: 0 });
});
