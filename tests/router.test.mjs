import test from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute } from '../js/router.js';

test('empty hash routes home', () => {
  assert.deepEqual(parseRoute(''), { view: 'home', params: {} });
});

test('chapter route extracts id', () => {
  assert.deepEqual(parseRoute('#/chapter/1'), { view: 'chapter', params: { id: '1' } });
});

test('quiz route extracts topicId', () => {
  assert.deepEqual(parseRoute('#/quiz/chapter-01'), { view: 'quiz', params: { topicId: 'chapter-01' } });
});

test('weak-areas route has no params', () => {
  assert.deepEqual(parseRoute('#/weak-areas'), { view: 'weak-areas', params: {} });
});

test('practice route has no params', () => {
  assert.deepEqual(parseRoute('#/practice'), { view: 'practice', params: {} });
});

test('unknown route falls back to home', () => {
  assert.deepEqual(parseRoute('#/nonsense'), { view: 'home', params: {} });
});

test('chapter route with no id falls back to home', () => {
  assert.deepEqual(parseRoute('#/chapter'), { view: 'home', params: {} });
});
