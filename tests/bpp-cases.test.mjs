import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const cases = require('../data/bpp-cases.js');
const kaplan = require('../data/section-b.js');
const LANGS = ['en', 'ru', 'uz'];
const shape = (t) => t.trim().split('\n').map((line) => (line.match(/^(# |= |! | {2}|- )/) ?? [''])[0]).join('|');
const chapterIds = new Set(Array.from({ length: 20 }, (_, i) => `chapter-${String(i + 1).padStart(2, '0')}`));

test('BPP cases are loaded by the page and kept apart from the Kaplan cases', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(html.includes('./data/bpp-cases.js'));
  const kaplanIds = new Set(kaplan.map((c) => c.id));
  assert.equal(new Set(cases.map((c) => c.id)).size, cases.length, 'ids repeat');
  for (const c of cases) assert.ok(!kaplanIds.has(c.id), `${c.id} clashes with a Kaplan case`);
});

for (const c of cases) {
  test(`${c.id} ${c.title} totals 15 marks, points to BPP, and lines up in three languages`, () => {
    assert.match(c.bppRef, /^\d+$/);
    assert.ok(Number.isInteger(c.bppPage) && c.bppPage >= 193 && c.bppPage <= 300);
    assert.ok(['statements', 'cashflows', 'groups'].includes(c.area));
    assert.ok(c.intro.trim().length > 0);
    assert.equal(c.tasks.reduce((sum, t) => sum + t.marks, 0), 15);
    for (const [i, t] of c.tasks.entries()) {
      const where = `${c.id} task ${i + 1}`;
      assert.ok(chapterIds.has(t.topic), `${where} topic`);
      for (const l of LANGS) assert.ok(t.explanation[l]?.trim().length > 20, `${where} ${l}`);
      for (const l of ['ru', 'uz']) assert.equal(shape(t.explanation[l]), shape(t.explanation.en), `${where} ${l} lines differ`);
      if (t.type === 'single') assert.ok(t.correctIndex >= 0 && t.correctIndex < t.options.length, `${where} key`);
      else if (t.type === 'number') assert.ok(Number.isFinite(t.correctValue) && t.answerText.trim(), `${where} key`);
      else if (t.type === 'matrix') {
        for (const r of t.rows) assert.ok(r.correctIndex >= 0 && r.correctIndex < t.columns.length, `${where} row key`);
        assert.equal(t.explanation.en.split('\n').filter((l) => l.startsWith('- ')).length, t.rows.length, `${where} explains every row`);
      } else assert.fail(`${where} unknown type ${t.type}`);
    }
  });
}

test('BPP cases: every calculated answer matches a fresh calculation', () => {
  const byId = Object.fromEntries(cases.map((c) => [c.id, c.tasks]));
  const value = (id, n) => byId[id][n - 1].correctValue;
  const chosen = (id, n) => { const t = byId[id][n - 1]; return t.options[t.correctIndex]; };

  // Ms Karimova: capital balances the trial balance.
  const debits = [91300, 6200, 9600, 7450, 3200, 1500, 28900, 950, 13400, 1240, 12600, 64000].reduce((a, b) => a + b);
  const credits = [152400, 180, 7250, 22400].reduce((a, b) => a + b);
  assert.equal(value('bppc14', 2), debits - credits);
  assert.equal(value('bppc14', 3), 12600 + 91300 + 2450 - 14050);
  assert.equal(value('bppc14', 5), (debits - credits) + 6350 - 9600);
  assert.equal(value('bppc14', 6), 64000 - 22400 - 64000 * 0.15);

  // Kestrel Co: the draft balances, and the suspense items explain it.
  assert.equal(8300 + 10500 + 3400 + 2800 + 2100, 7000 + 11600 + 2500 + 1800 + 4200);
  assert.ok(chosen('bppc19', 1).includes(`$${(600000 - (520000 - 30000)).toLocaleString('en-US')}`));
  const proceeds = 4200000 - 3000000 * 1.2;
  assert.equal(chosen('bppc19', 2), `$${(800000 - proceeds).toLocaleString('en-US')} loss`);
  assert.equal(value('bppc19', 3), 1600000 * 0.25);
  assert.equal(value('bppc19', 5), Math.round(3000000 * (1.2 - 0.5)));
  assert.equal(3000000 * 0.5 + Math.round(3000000 * 0.7) + proceeds, 4200000);

  // Plover Co: the trial balance balances.
  assert.equal(820 + 260 + 1230 + 180 + 25 + 360 + 340, 90 + 120 + 60 + 1950 + 270 + 12 + 163 + 450 + 100);
  assert.equal(value('bppc20', 3), 360000 * 0.04 - 12000);
  assert.equal(value('bppc20', 4), 820000 * 0.04);
  assert.equal(value('bppc20', 5), (260000 - 120000) * 0.25);
  assert.equal(value('bppc20', 6), 180000 + 1230000 - 95000);
  assert.equal(value('bppc20', 7), 18000 * 2 / 3);
});
