import test from 'node:test';
import assert from 'node:assert/strict';
import { startSession, answer, isCorrect, score, isComplete, scoreByTopic, bandFor, packAnswers, restoreSession, parseAmount } from '../js/quiz.js';

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

const NUMBER = { id: 'n1', type: 'number', correctValue: 176.4 };

test('number entry accepts the exact amount', () => {
  assert.equal(isCorrect(answer(startSession([NUMBER]), 'n1', 176.4), 'n1'), true);
});

test('number entry rejects a different amount', () => {
  assert.equal(isCorrect(answer(startSession([NUMBER]), 'n1', 176.41), 'n1'), false);
});

test('number entry is complete only with a real number', () => {
  assert.equal(isComplete(NUMBER, undefined), false);
  assert.equal(isComplete(NUMBER, 0), true);
});

test('parseAmount accepts how people type money', () => {
  assert.equal(parseAmount('1,250'), 1250);
  assert.equal(parseAmount(' $1,250.50 '), 1250.5);
  assert.equal(parseAmount('85'), 85);
});

test('parseAmount reads a comma before one or two final digits as a decimal point', () => {
  assert.equal(parseAmount('4,58'), 4.58);
  assert.equal(parseAmount('176,40'), 176.4);
  assert.equal(parseAmount('176,4'), 176.4);
  assert.equal(parseAmount('1 250,50'), 1250.5);
  assert.equal(parseAmount('$1 250,50'), 1250.5);
});

test('parseAmount keeps commas as thousands separators otherwise', () => {
  assert.equal(parseAmount('1,250'), 1250);
  assert.equal(parseAmount('1,250,000'), 1250000);
  assert.equal(parseAmount('1,250,50'), 125050);
});

test('parseAmount accepts ratio answers typed with their unit', () => {
  assert.equal(parseAmount('23.58%'), 23.58);
  assert.equal(parseAmount('23,58 %'), 23.58);
  assert.equal(parseAmount('1.35:1'), 1.35);
  assert.equal(parseAmount('90 days'), 90);
  assert.equal(parseAmount('15.82 times'), 15.82);
  assert.equal(parseAmount('15.82x'), 15.82);
});

test('parseAmount treats blank or non-numeric text as no answer', () => {
  assert.equal(parseAmount(''), undefined);
  assert.equal(parseAmount('abc'), undefined);
  assert.equal(parseAmount('$'), undefined);
});

test('answers survive being packed for storage and restored', () => {
  const session = answer(answer(startSession(QUESTIONS), 'q1', 0), 'q2', 2);
  const packed = JSON.parse(JSON.stringify(packAnswers(session)));
  assert.deepEqual(score(restoreSession(QUESTIONS, packed)), { attempted: 2, correct: 1 });
});

test('restoring drops answers to questions no longer in the set', () => {
  const restored = restoreSession(QUESTIONS, [['q1', 0], ['gone', 1]]);
  assert.deepEqual(score(restored), { attempted: 1, correct: 1 });
});

test('bandFor follows the 50% exam pass mark and rises with the score', () => {
  assert.equal(bandFor(0), 'bandBelow');
  assert.equal(bandFor(49), 'bandBelow');
  assert.equal(bandFor(50), 'bandPass');
  assert.equal(bandFor(69), 'bandPass');
  assert.equal(bandFor(70), 'bandGood');
  assert.equal(bandFor(84), 'bandGood');
  assert.equal(bandFor(85), 'bandStrong');
  assert.equal(bandFor(100), 'bandStrong');
});

test('answer leaves the earlier session unchanged', () => {
  const before = startSession(QUESTIONS);
  answer(before, 'q1', 0);
  assert.deepEqual(score(before), { attempted: 0, correct: 0 });
});

test('Kit numbers are shown as short ranges', async () => {
  const { kitRange } = await import('../js/quiz.js');
  assert.equal(kitRange([436, 437, 438]), 'Q436–438');
  assert.equal(kitRange([171, 173, 174, 175, 178]), 'Q171, Q173–175, Q178');
  assert.equal(kitRange([5]), 'Q5');
});

test('the answer key can be written out for every question type', async () => {
  const { answerText } = await import('../js/quiz.js');
  assert.equal(answerText({ type: 'single', options: ['a', 'b'], correctIndex: 1 }), 'b');
  assert.equal(answerText({ type: 'multi', options: ['a', 'b', 'c'], correctIndices: [0, 2] }), 'a; c');
  assert.equal(answerText({ type: 'number', answerText: '$1,200' }), '$1,200');
  assert.equal(answerText({ type: 'matrix', columns: ['True', 'False'], rows: [{ text: 'x', correctIndex: 1 }] }), 'x: False');
});
