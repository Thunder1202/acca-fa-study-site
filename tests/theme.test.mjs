import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { getTheme, setTheme, THEMES } = require('../js/theme.js');

function memory(initial = {}) {
  const data = { ...initial };
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; }, data };
}

test('with nothing saved, the theme follows the device', () => {
  assert.deepEqual(THEMES, ['light', 'dark']);
  assert.equal(getTheme(memory(), false), 'light');
  assert.equal(getTheme(memory(), true), 'dark');
});

test('a saved theme wins over the device setting', () => {
  const storage = memory();
  setTheme(storage, 'dark');
  assert.equal(getTheme(storage, false), 'dark');
});

test('choices saved under the old theme names still work', () => {
  assert.equal(getTheme(memory({ 'acca-fa-theme': 'clean' }), true), 'light');
  assert.equal(getTheme(memory({ 'acca-fa-theme': 'naruto' }), false), 'dark');
});

test('an unknown saved value falls back to the device setting', () => {
  assert.equal(getTheme(memory({ 'acca-fa-theme': 'neon' }), true), 'dark');
});

test('blocked storage does not break theme choice', () => {
  const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  assert.equal(getTheme(blocked, false), 'light');
  assert.doesNotThrow(() => setTheme(blocked, 'dark'));
});
