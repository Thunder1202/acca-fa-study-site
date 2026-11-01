import test from 'node:test';
import assert from 'node:assert/strict';
import { startSession, answer, isCorrect, score } from '../js/quiz.js';

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

test('answer leaves the earlier session unchanged', () => {
  const before = startSession(QUESTIONS);
  answer(before, 'q1', 0);
  assert.deepEqual(score(before), { attempted: 0, correct: 0 });
});
