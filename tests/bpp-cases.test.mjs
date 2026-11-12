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

  // Teal Co: the trial balance balances; buildings shown at valuation.
  const tealDr = [380, 1150, 110, 35, 950, 3800, 160, 800, 1600, 300, 1000].reduce((a, b) => a + b);
  const tealCr = [250, 90, 45, 6100, 90, 360, 500, 2000, 400, 100, 350].reduce((a, b) => a + b);
  assert.equal(tealDr, tealCr);
  assert.equal(tealDr, 10285);
  const beforeReval = 1600000 - 400000 - 1600000 * 0.05;
  assert.equal(value('bppc21', 2), 1900000);
  assert.equal(value('bppc21', 3), 1900000 - beforeReval);
  assert.equal(value('bppc21', 4), (300000 - 100000) * 0.8);
  assert.equal(value('bppc21', 5), 1000000 - 350000 - 1000000 * 0.2);
  assert.ok(950000 * 0.05 > 45000);
  assert.equal(value('bppc21', 8), 250000 - 2000000 / 10);

  // Linnet Co ($000): both statements of financial position balance.
  assert.equal(420 + 270 + 0 + 170 + 410 + 60, 240 + 192 + 110 + 205 + 120 + 163 + 0 + 300);
  assert.equal(340 + 220 + 30 + 120 + 330 + 5, 180 + 180 + 100 + 120 + 0 + 130 + 85 + 250);
  assert.equal(780 - 360, 420);
  assert.equal(650 - 310, 340);
  assert.equal(value('bppc22', 2), (360 - 310 + (90 - 50)) * 1000);
  assert.equal(value('bppc22', 4), (250 + 260 - 300) * 1000);
  assert.equal(value('bppc22', 5), (780 - 650 - (110 - 100) + 90) * 1000);
  assert.equal(value('bppc22', 6), (38 + 36) * 1000);
  assert.equal(value('bppc22', 7), (120 + 140 - 205) * 1000);
  assert.equal(value('bppc22', 8), ((240 + 192) - (180 + 180)) * 1000);
  assert.equal(60000 * 1.2, 72000);

  // Avocet Co ($000): balances, and the cash flow reconciles to the cash change.
  assert.equal(12500 - 6200 + 3100 + 4100 + 400, 1200 + 1900 + 2600 + 3500 + 3900 + 800);
  assert.equal(9000 - 5300 + 3500 + 3300 + 200, 1200 + 1300 + 1650 + 2500 + 3400 + 650);
  assert.equal(1650 + 1850 - 900, 2600);
  const dep23 = 6200 - 5300 + (1000 - 400);
  const add23 = 12500 - 9000 - (1900 - 1300) + 1000;
  const op23 = 3000 + dep23 - (650 - 400) + (3500 - 3100) - (4100 - 3300) + (3900 - 3400) - (650 + 800 - 800);
  const fin23 = (3500 - 2500) - 350 - 900;
  assert.equal(value('bppc23', 1), dep23 * 1000);
  assert.equal(value('bppc23', 3), add23 * 1000);
  assert.equal(value('bppc23', 6), op23 * 1000);
  assert.equal(chosen('bppc23', 7), `$${(-fin23 * 1000).toLocaleString('en-US')} outflow`);
  assert.equal(value('bppc23', 8), (op23 - add23 + 650 + fin23) * 1000);
  assert.equal(op23 - add23 + 650 + fin23, 400 - 200);

  // Swift Co ($000): balances, and the cash flow reconciles to the cash change.
  assert.equal(5100 + 640 + 410 + 0, 3800 + 340 + 1138 + 0 + 500 + 210 + 162);
  assert.equal(3000 + 560 + 260 + 150, 2600 + 180 + 510 + 120 + 400 + 160 + 0);
  assert.equal(510 + 928 - 300, 1138);
  const buy24 = 5100 - 3000 + 760 + 240;
  const op24 = 1150 + 760 + (240 - 210) - (640 - 560) - (410 - 260) + (500 - 400) - (160 + 210 - 210);
  const net24 = op24 - buy24 + 210 + ((3800 + 340) - (2600 + 180)) - 120 - 12 - 300;
  assert.equal(value('bppc24', 2), buy24 * 1000);
  assert.equal(value('bppc24', 5), op24 * 1000);
  assert.equal(value('bppc24', 7), -net24 * 1000);
  assert.equal(150 + net24, 0 - 162);

  // Osprey Co ($000): balances, and the cash flow reconciles to cash and cash equivalents.
  assert.equal(40000 + 4000 + 6000 + 2200, 18000 + 15700 + 7000 + 1100 + 7500 + 2900);
  assert.equal(25000 + 8500 + 4400 + 1100, 16500 + 6300 + 9000 + 500 + 4200 + 2500);
  assert.equal(6300 + 9400, 15700);
  const buy25 = 40000 - 25000 + 4200 + 1800;
  const op25 = 14200 + 4200 - 600 + (8500 - 4000) - (6000 - 4400) + (7500 - 4200) - (2500 + 4000 - 2900);
  const fin25 = (18000 - 16500) - (9000 - 7000) - 800;
  assert.equal(value('bppc25', 2), buy25 * 1000);
  assert.equal(value('bppc25', 5), op25 * 1000);
  assert.equal(chosen('bppc25', 6), `$${(-fin25 * 1000).toLocaleString('en-US')} outflow`);
  assert.equal(value('bppc25', 7), (1100 - 500) * 1000);
  assert.equal((1100 - 500) + op25 - buy25 + 2400 + fin25, 2200 - 1100);
});
