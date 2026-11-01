import test from 'node:test';
import assert from 'node:assert/strict';
import { loadProgress, recordSession, getWeakestFirst } from '../js/progress.js';

function fakeStorage() {
  const data = {};
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; } };
}

test('loadProgress on empty storage returns {}', () => {
  assert.deepEqual(loadProgress(fakeStorage()), {});
});

test('recordSession writes attempted/correct/lastScore', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5);
  assert.deepEqual(loadProgress(s), { 'chapter-01': { attempted: 5, correct: 4, lastScore: 0.8 } });
});

test('recordSession accumulates attempted/correct across sessions, lastScore is latest only', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5);
  recordSession(s, 'chapter-01', 1, 5);
  assert.deepEqual(loadProgress(s), { 'chapter-01': { attempted: 10, correct: 5, lastScore: 0.2 } });
});

test('getWeakestFirst puts never-attempted topics before any attempted topic', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 5, 5);
  assert.deepEqual(getWeakestFirst(s, ['chapter-01', 'chapter-02']), ['chapter-02', 'chapter-01']);
});

test('getWeakestFirst orders attempted topics by ascending lastScore', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5);
  recordSession(s, 'chapter-02', 1, 5);
  assert.deepEqual(getWeakestFirst(s, ['chapter-01', 'chapter-02']), ['chapter-02', 'chapter-01']);
});

test('getWeakestFirst keeps book order among equally weak topics', () => {
  assert.deepEqual(getWeakestFirst(fakeStorage(), ['chapter-01', 'chapter-02']), ['chapter-01', 'chapter-02']);
});

test('recordSession does not throw when storage.setItem throws', () => {
  const s = { getItem: () => null, setItem: () => { throw new Error('disabled'); } };
  assert.doesNotThrow(() => recordSession(s, 'chapter-01', 1, 1));
});

test('loadProgress returns {} when storage.getItem throws', () => {
  const s = { getItem: () => { throw new Error('disabled'); }, setItem: () => {} };
  assert.deepEqual(loadProgress(s), {});
});

test('loadProgress returns {} for corrupted saved data', () => {
  const s = fakeStorage();
  s.setItem('acca-fa-progress', '{not json');
  assert.deepEqual(loadProgress(s), {});
});

test('an array saved as progress counts as empty, so sessions still save', () => {
  const s = fakeStorage();
  s.setItem('acca-fa-progress', '[]');
  recordSession(s, 'chapter-01', 1, 2);
  assert.deepEqual(loadProgress(s), { 'chapter-01': { attempted: 2, correct: 1, lastScore: 0.5 } });
});

test('entries with missing or non-numeric fields are dropped', () => {
  const s = fakeStorage();
  s.setItem('acca-fa-progress', JSON.stringify({
    good: { attempted: 2, correct: 1, lastScore: 0.5 },
    noScore: { attempted: 2, correct: 1 },
    text: { attempted: '10', correct: 1, lastScore: 0.5 },
    empty: null,
  }));
  assert.deepEqual(loadProgress(s), { good: { attempted: 2, correct: 1, lastScore: 0.5 } });
});

test('recordSession ignores a session with nothing attempted', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 0, 0);
  assert.deepEqual(loadProgress(s), {});
});
