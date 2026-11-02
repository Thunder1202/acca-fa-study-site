import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { getMode, setMode, nextMode, getTheme, MODES, THEMES } = require('../js/theme.js');

function memory(initial = {}) {
  const data = { ...initial };
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; }, data };
}

test('Clean is the only theme for now, with light and dark modes', () => {
  assert.deepEqual(THEMES, ['clean']);
  assert.deepEqual(MODES, ['light', 'dark']);
  assert.equal(getTheme(memory()), 'clean');
});

test('with nothing saved, the mode follows the device', () => {
  assert.equal(getMode(memory(), false), 'light');
  assert.equal(getMode(memory(), true), 'dark');
});

test('a saved mode wins over the device setting', () => {
  const storage = memory();
  setMode(storage, 'dark');
  assert.equal(getMode(storage, false), 'dark');
});

test('one tap flips between light and dark', () => {
  assert.equal(nextMode('light'), 'dark');
  assert.equal(nextMode('dark'), 'light');
});

test('choices saved under the old theme names still work', () => {
  assert.equal(getMode(memory({ 'acca-fa-theme': 'clean' }), true), 'light');
  assert.equal(getMode(memory({ 'acca-fa-theme': 'naruto' }), false), 'dark');
  assert.equal(getMode(memory({ 'acca-fa-theme': 'dark' }), false), 'dark');
  assert.equal(getTheme(memory({ 'acca-fa-theme': 'naruto' })), 'clean');
});

test('blocked storage does not break the mode', () => {
  const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
  assert.equal(getMode(blocked, true), 'dark');
  assert.doesNotThrow(() => setMode(blocked, 'light'));
});
