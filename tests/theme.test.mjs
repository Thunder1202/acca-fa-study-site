import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { getTheme, setTheme, THEMES } = require('../js/theme.js');

function memory(initial = {}) {
  const data = { ...initial };
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; }, data };
}

test('the Naruto theme is the default', () => {
  assert.equal(getTheme(memory()), 'naruto');
  assert.deepEqual(THEMES, ['naruto', 'clean']);
});

test('a saved theme is remembered', () => {
  const storage = memory();
  setTheme(storage, 'clean');
  assert.equal(getTheme(storage), 'clean');
});

test('an unknown saved value falls back to the default', () => {
  assert.equal(getTheme(memory({ 'acca-fa-theme': 'neon' })), 'naruto');
});

test('blocked storage does not break theme choice', () => {
  const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  assert.equal(getTheme(blocked), 'naruto');
  assert.doesNotThrow(() => setTheme(blocked, 'clean'));
});
