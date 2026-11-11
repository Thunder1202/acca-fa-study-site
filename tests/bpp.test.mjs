import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
const LANGS = ['en', 'ru', 'uz'];
const shape = (text) => text.trim().split('\n').map((line) => (line.match(/^(# |= |! | {2}|- )/) ?? [''])[0]).join('|');
const files = fs.readdirSync(path.join(root, 'data')).filter((f) => /^bpp-ch\d{2}\.js$/.test(f));

test('every BPP question file is loaded by the page', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const f of files) assert.ok(html.includes(`./data/${f}`), `${f} is not in index.html`);
});

for (const file of files) {
  const questions = require(`../data/${file}`);
  const chapter = file.match(/ch(\d{2})/)[1];

  test(`${file}: every question is well formed, points to BPP's answer page, and lines up in three languages`, () => {
    assert.ok(questions.length > 0);
    assert.equal(new Set(questions.map((q) => q.id)).size, questions.length, 'ids repeat');
    assert.equal(new Set(questions.map((q) => q.bppRef)).size, questions.length, 'BPP refs repeat');
    for (const q of questions) {
      const where = `BPP ${q.bppRef}`;
      assert.equal(q.topicId, `chapter-${chapter}`, `${where} topic`);
      assert.match(q.bppRef, /^\d+\.\d+$/, `${where} ref`);
      assert.ok(Number.isInteger(q.bppPage) && q.bppPage >= 193 && q.bppPage <= 300, `${where} answer page`);
      for (const l of LANGS) assert.ok(q.explanation[l]?.trim(), `${where} ${l} explanation`);
      for (const l of ['ru', 'uz']) assert.equal(shape(q.explanation[l]), shape(q.explanation.en), `${where} ${l} lines differ`);
      if (q.type !== 'matrix') assert.match(q.explanation.en, /^= /m, `${where} has no answer line`);
      if (q.type === 'single') assert.ok(q.correctIndex >= 0 && q.correctIndex < q.options.length, `${where} key`);
      else if (q.type === 'number') assert.ok(Number.isFinite(q.correctValue) && q.answerText.trim(), `${where} key`);
      else if (q.type === 'multi') assert.ok(q.correctIndices.length === 2 && q.correctIndices.every((k) => k >= 0 && k < q.options.length), `${where} key`);
      else if (q.type === 'matrix') {
        assert.ok(q.columns.length >= 2 && q.rows.length >= 1, `${where} grid`);
        for (const r of q.rows) assert.ok(r.correctIndex >= 0 && r.correctIndex < q.columns.length, `${where} row key`);
        assert.equal(q.explanation.en.split('\n').filter((l) => l.startsWith('- ')).length, q.rows.length, `${where} explains every row`);
      }
      else assert.fail(`${where} unknown type ${q.type}`);
    }
  });
}

// Each figure worked out again from the question's own numbers, separately from the written answer.
test('BPP chapter 14: every calculated answer matches a fresh calculation', () => {
  const qs = Object.fromEntries(require('../data/bpp-ch14.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => qs[ref].options[qs[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;

  // 17.2: what each account holds against what it should hold, and the suspense left over.
  const recordedDr = 190 /* purchases returns debited to sales returns */ + 190 /* payables, correct */;
  const recordedCr = 250 /* sales returns credited to purchases returns */ + 250 /* receivables, correct */;
  const suspense = recordedCr - recordedDr;
  const salesReturnsFix = 250 - 190;
  const purchasesReturnsFix = 250 - 190;
  assert.equal(salesReturnsFix + purchasesReturnsFix, suspense);
  assert.equal(chosen('17.2'), `Dr Sales returns ${money(salesReturnsFix)}, Dr Purchases returns ${money(purchasesReturnsFix)}, Cr Suspense ${money(suspense)}`);

  // 17.3: a credit balance shown as a debit moves the totals apart by twice the balance.
  assert.equal(642300 - 637500, 2 * 2400);

  assert.equal(qs['17.8'].correctValue, 64200 + 24000 - 24000 * 0.2);
  assert.equal(chosen('17.10'), money(12600 + 4000 + 1800));

  const grossEffect = 40000 - 6000;
  assert.equal(chosen('17.11'), `Gross profit understated by ${money(grossEffect)}; profit for the year understated by ${money(grossEffect - 6000)}`);

  const debits = 92000 + 8000 + 5000 + 2500;
  const credits = 18000 + 4000 + 20000 + 1500 + 3000;
  assert.equal(chosen('17.14'), money(debits - credits));

  const dr15 = 150000 + 96000 + 29000 + 110000 + 21000;
  const cr15 = 31000 + 70000 + 280000 + 3000;
  assert.equal(qs['17.15'].correctValue, dr15 - cr15);

  assert.equal(chosen('17.16'), `Total assets ${money(720000 - 40000)}; profit ${money(160000 - 40000)}`);

  const paid = 540 + 660 + 780 + 900;
  const accrual = (900 / 3) * 2;
  assert.equal(chosen('17.17'), `Statement of financial position ${money(accrual)}; statement of profit or loss ${money(paid + accrual - 250)}`);
});

test('BPP chapters 3 and 4: every calculated answer matches a fresh calculation', () => {
  const load = (file) => Object.fromEntries(require(file).map((q) => [q.bppRef, q]));
  const c3 = load('../data/bpp-ch03.js');
  const c4 = load('../data/bpp-ch04.js');
  const chosen = (qs, ref) => qs[ref].options[qs[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;

  // 3.2: the chosen formula must give profit for a worked case.
  const [open, introduced, drawings, profit] = [10000, 2000, 3000, 6000];
  const close = open + introduced + profit - drawings;
  assert.equal(close + drawings - introduced - open, profit);
  assert.equal(chosen(c3, '3.2'), 'Closing capital + drawings - capital introduced - opening capital');

  assert.equal(chosen(c3, '3.3'), money(92400 + 64300 + 6000 - 1900));
  assert.equal(c3['3.4'].correctValue, 102900 - (41200 + 7500 - 650 * 12));
  assert.equal(chosen(c3, '3.7'), `${money((176000 - 145000) - 30000 + 41000)} profit`);
  assert.equal(chosen(c3, '3.13'), `${money(132400 + 96300 - 71800)} debit`);
  assert.equal(132400 + 96300, 228700);
  assert.equal(25400 + 14500, 17300 + 22600);
  assert.equal(chosen(c3, '4.3'), `Dr Purchases $380, Dr Trade payables ${money(520 - 380)}, Cr Purchase returns $520`);
  assert.equal(chosen(c3, '4.7'), `${money(213570 + 297180 - 88640)} credit`);
  assert.equal(chosen(c3, '4.8'), money(93000 - 6000 + 10500 - 12000));
  assert.equal(chosen(c3, '4.11'), money((52000 - 3000) - (4000 + 27000 - 1500 - 4000)));
  assert.equal(chosen(c3, '4.12'), `An asset of ${money(68420 - 3960)}`);
  const debits = 11280 + 128470 + 29915 + 58340 + 27605 + 2410;
  assert.equal(debits, 231650 + 15230 + 11140);
  assert.equal(chosen(c3, '4.15'), money(debits));
  assert.equal(chosen(c3, '4.16'), money(6480 + 12935 + 230));

  // 5.2: closing debit balance = input + paid - (opening credit + output).
  const out52 = 92000 * 15 / 115;
  assert.equal(out52, 12000);
  assert.equal(c4['5.2'].correctValue, 3850 + out52 + 1940 - 52000 * 0.15);
  assert.equal(Math.round(640 * 1.15), 736);
  assert.equal(chosen(c4, '5.4'), money((168000 - 24000) * 20 / 120 - 70000 * 0.2));
  const cash = 2000 + 1500 * 1.2, inv = 1200 / 2, liab = 1200 * 1.2 + (1500 * 0.2 - 1200 * 0.2);
  assert.equal(chosen(c4, '5.5'), `Assets ${money(cash + inv)} - liabilities ${money(liab)} = capital ${money(2000 + 1500 - inv)}`);
  assert.equal(cash + inv - liab, 2000 + 1500 - inv);
  assert.equal(chosen(c4, '5.8'), `${money(31320 * 20 / 120 - 21600 * 0.2)} credit`);
});

test('BPP chapters 5 to 7: every calculated answer matches a fresh calculation', () => {
  const load = (file) => Object.fromEntries(require(file).map((q) => [q.bppRef, q]));
  const c5 = load('../data/bpp-ch05.js');
  const c6 = load('../data/bpp-ch06.js');
  const c7 = load('../data/bpp-ch07.js');
  const chosen = (qs, ref) => qs[ref].options[qs[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  const lcnrv = (cost, nrv) => Math.min(cost, nrv);
  // FIFO: buy and sell events in order; returns the value left.
  const fifo = (events) => {
    const layers = [];
    for (const e of events) {
      if (e.buy) { layers.push({ n: e.buy, c: e.at }); continue; }
      let left = e.sell;
      while (left) { const t = Math.min(left, layers[0].n); layers[0].n -= t; left -= t; if (!layers[0].n) layers.shift(); }
    }
    return layers.reduce((s, l) => s + l.n * l.c, 0);
  };

  // Inventory (chapter 5)
  assert.equal(c5['6.1'].correctValue, 812000 - 9400 + 13800 * 100 / 120 + 1250);
  const jackets = lcnrv(300 * 70, 300 * 130 * 0.5 * 0.96);
  const shirts = lcnrv(500 * 16, 500 * 22 - 500 * 4 - 600);
  assert.equal(chosen(c5, '6.3'), money(196500 - 300 * 70 - 500 * 16 + jackets + shirts));
  assert.equal(chosen(c5, '6.4'), money(fifo([{ buy: 600, at: 150 }, { buy: 400, at: 170 }, { sell: 350 }, { buy: 200, at: 180 }, { sell: 500 }])));
  assert.equal(chosen(c5, '6.6'), money(512400 - 27600 + 11200 - 650 + 2100));
  assert.equal(chosen(c5, '6.8'), money(438600 - 6300 + 12500 * 0.65 + 900));
  assert.equal(chosen(c5, '6.10'), money(53240 - 2480 + lcnrv(2480, 1650 - 420)));
  assert.equal(chosen(c5, '6.11'), money(300 * lcnrv(8, 11 - 2) + 200 * lcnrv(12, 15 - 5) + 120 * lcnrv(25, 22 - 4)));
  assert.equal(chosen(c5, '6.12'), money(fifo([{ buy: 40, at: 30 }, { buy: 120, at: 34 }, { sell: 90 }, { buy: 60, at: 38 }, { sell: 50 }])));
  assert.equal(chosen(c5, '6.14'), money(142800 + lcnrv(3000, 500 * 5 - 350) + lcnrv(6000, 150 * 48 - 900 - 240)));
  assert.equal(chosen(c5, '6.18'), money(30 * (60 * 25 + 40 * 30) / 100));
  let units = 50, value = 20 * 50 + 30 * 60;
  value -= 15 * value / units; units -= 15;
  value += 25 * 44; units += 25;
  value -= 40 * value / units; units -= 40;
  assert.equal(c5['6.19'].correctValue, Math.round(value * 100) / 100);
  assert.equal(c5['6.20'].correctValue, 20 * (20 * 50 + 30 * 60 + 25 * 44) / 75);

  // Acquisition and depreciation (chapter 6)
  assert.equal(c6['7.3'].correctValue, 84920 - (5300 + 1700));
  assert.equal(163400 - 151400, 16000 - 4000);
  assert.equal(chosen(c6, '7.8'), `Understated by ${money(24000 - (24000 - 4000) * 0.2 * 3 / 12)}`);
  assert.equal(chosen(c6, '7.9'), money((320000 - 48000) * 0.25 + 48000 * 0.25 * 3 / 12 + 72000 * 0.25 * 4 / 12));
  assert.equal(chosen(c6, '7.11'), money(18000 - 18000 * 0.2 * 4 / 12));
  assert.equal(c6['7.12'].correctValue, 64000 + 1800 + 3500 + 900);
  assert.equal(chosen(c6, '8.3'), `Understated by ${money(45000 - 45000 * 0.2 * 3 / 12)}`);
  assert.equal(chosen(c6, '8.4'), money((43000 - 7000) / 4 * 5 / 12));
  assert.equal(chosen(c6, '8.9'), money(46500 + 1350));
  assert.equal((46500 + 1350 + 4200) * 0.2, 10410);
  assert.ok(chosen(c6, '8.13').endsWith(`depreciation ${money(24000 * 0.2 * 2 / 12)}`));
  const ca3 = 120000 - 2 * 120000 / 6;
  assert.equal(chosen(c6, '8.16'), money(ca3 - ca3 / 5));
  const ca817 = 50000 - 2 * (50000 - 5000) / 5;
  assert.equal(chosen(c6, '8.17'), money((ca817 - 2000) / 3));
  assert.ok(chosen(c6, '8.18').includes(money((90000 - 18000) / 12)));

  // Disposal and revaluation (chapter 7)
  assert.equal(chosen(c7, '7.7'), money(290000 - 240000 * 25 / 30));
  assert.ok(chosen(c7, '7.14').includes(`Dr Loss on disposal ${money(47000 - 39000)}`));
  assert.equal(chosen(c7, '7.16'), money(875000 / 25));
  assert.ok(chosen(c7, '7.17').startsWith(`Dr Revaluation surplus ${money(875000 / 25 - 600000 / 30)}`));
  let rb = 16000;
  for (let y = 0; y < 3; y++) rb -= rb * 0.25;
  assert.equal(chosen(c7, '8.1'), `${money(rb - 6000)} loss`);
  assert.equal(chosen(c7, '8.2'), money(340000 - 38000 - (41000 + 6000)));
  assert.equal(chosen(c7, '8.5'), `Depreciation ${money(1050000 / 35)}; surplus ${money(1050000 - (900000 - 900000 * 0.02 * 15))}`);
  assert.equal(chosen(c7, '8.14'), money(2100000 - 1500000 - (2100000 / 30 - 2000000 / 40)));
  assert.equal(chosen(c7, '8.15'), `A loss on disposal of ${money(22000 - 15500 - 5800)}`);
  assert.equal(c7['8.19'].correctValue, 3060000 - (2400000 - 2400000 * 0.02 * 5) - (3060000 / 45 - 2400000 * 0.02));
  assert.equal(chosen(c7, '8.20'), `Profit of ${money(730000 - (741000 - 741000 / 38 * 9 / 12))}`);
});

test('BPP chapter 8: every calculated answer matches a fresh calculation', () => {
  const c8 = Object.fromEntries(require('../data/bpp-ch08.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c8[ref].options[c8[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  assert.equal(chosen('9.6'), money(84000 - 84000 / 7 * 4 / 12));
  assert.equal(chosen('9.7'), money(31000 + 9000));
  assert.equal(c8['9.9'].correctValue, 180000 / 12);
  assert.ok(chosen('9.10').includes(money(24000 / 4)));
});
