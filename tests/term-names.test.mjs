import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const names = require('../data/term-names.js');

test('every entry has an official term, its alternative names and both translations', () => {
  assert.ok(names.length >= 40);
  for (const entry of names) {
    assert.ok(entry.en.trim().length > 0);
    assert.ok(Array.isArray(entry.also));
    assert.ok(entry.ru.trim().length > 0, `${entry.en} ru`);
    assert.ok(entry.uz.trim().length > 0, `${entry.en} uz`);
    if (entry.formula !== undefined) assert.ok(entry.formula.includes('÷') || entry.formula.includes('−'), `${entry.en} formula`);
  }
});

test('official terms are unique and no alias repeats its own official term', () => {
  assert.equal(new Set(names.map((n) => n.en.toLowerCase())).size, names.length);
  for (const entry of names) {
    for (const alias of entry.also) assert.notEqual(alias.replace(/\*$/, '').toLowerCase(), entry.en.toLowerCase());
  }
});

test('a name belongs to one official term only', () => {
  const owner = new Map();
  for (const entry of names) {
    for (const alias of entry.also.map((a) => a.replace(/\*$/, '').toLowerCase())) {
      assert.ok(!owner.has(alias) || owner.get(alias) === entry.en, `"${alias}" is listed under both "${owner.get(alias)}" and "${entry.en}"`);
      owner.set(alias, entry.en);
    }
  }
});

test('translations match the glossary wording used in the lessons', () => {
  const glossary = new Map();
  for (let i = 1; i <= 20; i += 1) {
    const chapter = require(`../data/chapter-${String(i).padStart(2, '0')}.js`);
    for (const g of chapter.glossary) glossary.set(g.term.en.toLowerCase().replace(/s$/, ''), g.term);
  }
  const clean = (text) => text.toLowerCase().replace(/\s*\(.*\)$/, '');
  const sameStem = (a, b) => {
    let n = 0;
    while (n < a.length && n < b.length && a[n] === b[n]) n += 1;
    return n >= Math.min(8, a.length, b.length);
  };
  for (const entry of names) {
    const term = glossary.get(entry.en.toLowerCase().replace(/s$/, ''));
    if (!term) continue;
    assert.ok(sameStem(clean(entry.ru), clean(term.ru)), `${entry.en} ru: ${entry.ru} vs ${term.ru}`);
    assert.ok(sameStem(clean(entry.uz), clean(term.uz)), `${entry.en} uz: ${entry.uz} vs ${term.uz}`);
  }
});
