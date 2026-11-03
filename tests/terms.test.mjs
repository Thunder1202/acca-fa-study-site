import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { annotate, TERMS } = require('../js/terms.js');

const tags = (segments) => segments.filter((s) => s.term).map((s) => s.term);
const plain = (segments) => segments.map((s) => s.text).join('');

test('a Russian term gets the English exam term from the English text', () => {
  const out = annotate('Дебиторы выросли на $500.', 'Receivables rose by $500.', 'ru');
  assert.deepEqual(tags(out), ['receivables']);
  assert.equal(plain(out), 'Дебиторы выросли на $500.');
  assert.equal(out[0].text, 'Дебиторы');
});

test('the English wording is kept, including the plural and "trade"', () => {
  const out = annotate('Торговая дебиторская задолженность растёт.', 'Trade receivables are rising.', 'ru');
  assert.deepEqual(tags(out), ['trade receivables']);
});

test('Uzbek terms are tagged too', () => {
  const out = annotate('Debitorlar oshdi, zaxira kamaydi.', 'Receivables rose and inventory fell.', 'uz');
  assert.deepEqual(tags(out), ['receivables', 'inventory']);
});

test('nothing is tagged when the English text does not use the term', () => {
  assert.deepEqual(tags(annotate('Дебиторы выросли.', 'Sales rose.', 'ru')), []);
});

test('English text is never changed', () => {
  assert.deepEqual(annotate('Receivables rose.', 'Receivables rose.', 'en'), [{ text: 'Receivables rose.' }]);
});

test('only the first mention of a term in a block is tagged', () => {
  const out = annotate('Дебиторы и снова дебиторы.', 'Receivables and receivables again.', 'ru');
  assert.equal(tags(out).length, 1);
});

test('a term already written in English in the text is not tagged again', () => {
  const out = annotate('Возвраты покупателей (returns inwards) уменьшают выручку.', 'Returns inwards reduce revenue.', 'ru');
  assert.ok(!tags(out).includes('returns inwards'));
  assert.ok(tags(out).includes('revenue'));
});

test('one word for several exam terms is labelled by the English text', () => {
  assert.deepEqual(tags(annotate('Резерв увеличен на $300.', 'The allowance for receivables rose by $300.', 'ru')), ['allowance for receivables']);
  assert.deepEqual(tags(annotate('Резерв увеличен на $300.', 'The provision rose by $300.', 'ru')), ['provision']);
  assert.deepEqual(tags(annotate('Rezerv $300 ga oshdi.', 'The provision rose by $300.', 'uz')), ['provision']);
});

test('an ambiguous word is left alone when the English names two of its meanings', () => {
  const out = annotate('Резерв вырос.', 'The provision and the allowance for receivables rose.', 'ru');
  assert.deepEqual(tags(out), []);
});

test('the longer, more specific match wins', () => {
  const out = annotate('Резерв переоценки вырос.', 'The revaluation surplus rose.', 'ru');
  assert.deepEqual(tags(out), ['revaluation surplus']);
  assert.equal(out[0].text, 'Резерв переоценки');
});

test('acronyms keep their capitals', () => {
  const out = annotate('ЧСР ниже себестоимости.', 'NRV is below cost.', 'ru');
  assert.deepEqual(tags(out), ['NRV']);
});

test('a term already shown earlier in the same field is not shown again', () => {
  const seen = new Set();
  const first = annotate('Дебиторы выросли.', 'Receivables rose.', 'ru', seen);
  const second = annotate('Дебиторы упали.', 'Receivables fell.', 'ru', seen);
  assert.deepEqual(tags(first), ['receivables']);
  assert.deepEqual(tags(second), []);
});

test('the word for non-controlling is not mistaken for control', () => {
  const out = annotate('Nazoratsiz ulush oshdi.', 'The non-controlling interest rose and Pine kept control.', 'uz');
  assert.ok(!tags(out).includes('control'));
});

test('every term in the list has English, Russian and Uzbek patterns', () => {
  for (const term of TERMS) {
    for (const key of ['en', 'ru', 'uz']) assert.ok(Array.isArray(term[key]) && term[key].length > 0, `${term.en} ${key}`);
  }
});
