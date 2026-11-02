import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const cases = require('../data/section-b.js');
const course = require('../data/course.js');
const LANGS = ['en', 'ru', 'uz'];
const chapterIds = new Set(course.flatMap((g) => g.chapters.map((c) => c.id)));

test('there is one case per Kit Section B question, 1 to 16', () => {
  assert.deepEqual(cases.map((c) => c.kitRef), Array.from({ length: 16 }, (_, i) => i + 1));
  assert.equal(new Set(cases.map((c) => c.id)).size, 16);
});

test('cases are single-entity statements, cash flows or groups', () => {
  const areas = cases.map((c) => c.area);
  assert.deepEqual([...new Set(areas)].sort(), ['cashflows', 'groups', 'statements']);
  assert.ok(areas.filter((a) => a === 'groups').length >= 1);
});

for (const c of cases) {
  test(`${c.id} ${c.title} totals 15 marks and every task is well formed`, () => {
    assert.ok(c.intro.trim().length > 0);
    assert.equal(c.tasks.reduce((sum, t) => sum + t.marks, 0), 15);
    for (const [i, t] of c.tasks.entries()) {
      const where = `${c.id} task ${i + 1}`;
      assert.ok(Number.isInteger(t.marks) && t.marks > 0, `${where} marks`);
      assert.ok(chapterIds.has(t.topic), `${where} topic ${t.topic}`);
      assert.ok(t.text.trim().length > 0, `${where} text`);
      for (const lang of LANGS) assert.ok(t.explanation[lang]?.trim().length > 0, `${where} explanation ${lang}`);
      if (t.type === 'single') {
        assert.ok(t.options.length >= 2 && t.options.length <= 4, `${where} options`);
        assert.ok(t.correctIndex >= 0 && t.correctIndex < t.options.length, `${where} key`);
      } else if (t.type === 'multi') {
        assert.equal(t.correctIndices.length, 2, `${where} key`);
        for (const k of t.correctIndices) assert.ok(k >= 0 && k < t.options.length, `${where} key`);
      } else if (t.type === 'matrix') {
        assert.ok(t.columns.length >= 2, `${where} columns`);
        for (const r of t.rows) assert.ok(r.correctIndex >= 0 && r.correctIndex < t.columns.length, `${where} row key`);
      } else if (t.type === 'number') {
        assert.ok(Number.isFinite(t.correctValue), `${where} key`);
        assert.ok(t.answerText.trim().length > 0, `${where} answer text`);
      } else {
        assert.fail(`${where} unknown type ${t.type}`);
      }
    }
  });
}
