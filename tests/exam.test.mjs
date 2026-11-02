import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { caseQuestions, apportion, buildPaper, paperFromIds, scoreMarks, formatClock, EXAM } = require('../js/exam.js');
const { startSession, answer } = require('../js/quiz.js');
const cases = require('../data/section-b.js');

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
}

const bank = {
  'chapter-01': Array.from({ length: 40 }, (_, i) => ({ id: `a${i}`, topicId: 'chapter-01', type: 'single', correctIndex: 0 })),
  'chapter-02': Array.from({ length: 10 }, (_, i) => ({ id: `b${i}`, topicId: 'chapter-02', type: 'single', correctIndex: 0 })),
  'chapter-03': Array.from({ length: 20 }, (_, i) => ({ id: `c${i}`, topicId: 'chapter-03', type: 'single', correctIndex: 0 })),
};

test('a case becomes one question per task, each carrying the case and its marks', () => {
  const questions = caseQuestions(cases[0]);
  assert.equal(questions.length, cases[0].tasks.length);
  assert.equal(questions[0].id, 'b01-t1');
  assert.equal(questions[0].case.title, 'Amber Co');
  assert.equal(questions.reduce((sum, q) => sum + q.marks, 0), 15);
  assert.ok(questions.every((q) => q.topicId.startsWith('chapter-')));
});

test('apportion shares a total across groups by size, summing exactly', () => {
  assert.deepEqual(apportion({ x: 40, y: 10, z: 20 }, 7), { x: 4, y: 1, z: 2 });
  const shares = apportion({ x: 1, y: 1, z: 1 }, 2);
  assert.equal(Object.values(shares).reduce((a, b) => a + b, 0), 2);
});

test('a paper has the exam shape: 35 two-mark questions and two 15-mark cases', () => {
  const big = Object.fromEntries(Object.entries(bank).map(([k, v]) => [k, [...v, ...v.map((q) => ({ ...q, id: `${q.id}x` }))]]));
  const paper = buildPaper(big, cases, seeded(7));
  const a = paper.questions.filter((q) => !q.case);
  const b = paper.questions.filter((q) => q.case);
  assert.equal(a.length, EXAM.sectionA);
  assert.ok(a.every((q) => q.marks === 2));
  assert.equal(new Set(b.map((q) => q.case.id)).size, 2);
  assert.equal(b.reduce((sum, q) => sum + q.marks, 0), 30);
  assert.equal(new Set(paper.questions.map((q) => q.id)).size, paper.questions.length);
});

test('section B pairs a single-entity case with a group case', () => {
  for (let seed = 1; seed < 20; seed += 1) {
    const paper = buildPaper(bank, cases, seeded(seed));
    const areas = [...new Set(paper.questions.filter((q) => q.case).map((q) => q.case.area))];
    assert.equal(areas.length, 2);
    assert.ok(areas.includes('groups'));
  }
});

test('a saved paper can be rebuilt from its ids in the same order', () => {
  const paper = buildPaper(bank, cases, seeded(3));
  const rebuilt = paperFromIds(paper.ids, bank, cases);
  assert.deepEqual(rebuilt.questions.map((q) => q.id), paper.questions.map((q) => q.id));
});

test('rebuilding skips ids that no longer exist', () => {
  const rebuilt = paperFromIds(['a1', 'missing', 'b01-t1'], bank, cases);
  assert.deepEqual(rebuilt.questions.map((q) => q.id), ['a1', 'b01-t1']);
});

test('scoreMarks counts marks, not questions', () => {
  const questions = [
    { id: 'q1', type: 'single', correctIndex: 0, marks: 2 },
    { id: 'q2', type: 'single', correctIndex: 0, marks: 4 },
    { id: 'q3', type: 'single', correctIndex: 0 },
  ];
  let session = startSession(questions);
  session = answer(session, 'q1', 0);
  session = answer(session, 'q2', 1);
  assert.deepEqual(scoreMarks(session), { marks: 2, total: 8 });
});

test('formatClock shows hours, minutes and seconds', () => {
  assert.equal(formatClock(2 * 60 * 60 * 1000), '2:00:00');
  assert.equal(formatClock(61 * 1000 + 400), '0:01:02');
  assert.equal(formatClock(-5), '0:00:00');
});
