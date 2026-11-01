import test from 'node:test';
import assert from 'node:assert/strict';
import { getLang, setLang, translate, label, LABELS } from '../js/i18n.js';

function fakeStorage(initial = {}) {
  const data = { ...initial };
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; } };
}

test('language defaults to English', () => {
  assert.equal(getLang(fakeStorage()), 'en');
});

test('a saved language is remembered', () => {
  const s = fakeStorage();
  setLang(s, 'uz');
  assert.equal(getLang(s), 'uz');
});

test('an unknown saved language falls back to English', () => {
  assert.equal(getLang(fakeStorage({ 'acca-fa-lang': 'fr' })), 'en');
});

test('blocked storage falls back to English without throwing', () => {
  const blocked = { getItem: () => { throw new Error('x'); }, setItem: () => { throw new Error('x'); } };
  assert.equal(getLang(blocked), 'en');
  assert.doesNotThrow(() => setLang(blocked, 'ru'));
});

test('translate picks the requested language', () => {
  assert.equal(translate({ en: 'a', ru: 'b', uz: 'c' }, 'ru'), 'b');
});

test('every interface label exists in all three languages', () => {
  for (const [key, field] of Object.entries(LABELS)) {
    for (const lang of ['en', 'ru', 'uz']) assert.ok(field[lang], `${key}.${lang}`);
  }
});

test('label returns the text for a key', () => {
  assert.equal(label('home', 'en'), LABELS.home.en);
});
