import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { buildIndex, candidatesFor, segment, findByLabel } = require('../js/glossary.js');
const terms = require('../js/terms.js');
const course = require('../data/course.js');
const chapters = {};
for (const group of course) for (const c of group.chapters) chapters[c.id] = require(`../data/${c.id}.js`);
const entries = buildIndex(course, chapters, terms);
const linked = (text, lang, chapter) => segment(text, lang, candidatesFor(entries, chapter), new Set()).filter((p) => p.entry).map((p) => p.text);

test('every chapter glossary term is indexed with its chapter', () => {
  const total = Object.values(chapters).reduce((n, c) => n + c.glossary.length, 0);
  assert.equal(entries.length, total);
  assert.ok(entries.some((e) => e.name === 'retained earnings'));
});

test('a term from an earlier chapter is linked, a later one is not', () => {
  assert.deepEqual(linked('Profit goes to retained earnings.', 'en', 17), ['retained earnings']);
  assert.deepEqual(linked('Profit goes to retained earnings.', 'en', 3), []);
});

test('plurals and acronyms are found, and each term is linked once', () => {
  assert.deepEqual(linked('Two provisions, then a provision again.', 'en', 11), ['provisions']);
  assert.deepEqual(linked('Inventory at NRV.', 'en', 5), ['Inventory', 'NRV']);
});

test('Russian and Uzbek terms are found despite their endings', () => {
  assert.deepEqual(linked('Это идёт в нераспределённую прибыль.', 'ru', 17), ['нераспределённую прибыль']);
  assert.deepEqual(linked('Bu taqsimlanmagan foydaga boradi.', 'uz', 17), ['taqsimlanmagan foydaga']);
});

test('an English label finds its glossary entry', () => {
  assert.equal(findByLabel(candidatesFor(entries, 20), 'retained earnings')?.name, 'retained earnings');
  assert.equal(findByLabel(candidatesFor(entries, 20), 'cost of sales')?.chapter, 5);
});

test('a translated word is linked only when the English text means that term', () => {
  const run = (ru, en) => segment(ru, 'ru', candidatesFor(entries, 17), new Set(), en).filter((p) => p.entry).map((p) => p.entry.name);
  assert.ok(!run('Деньги от акционеров и кредиторов.', 'Money from shareholders and lenders.').includes('trade payable'));
  assert.ok(run('Кредиторы выросли.', 'Trade payables rose.').includes('trade payable'));
});
