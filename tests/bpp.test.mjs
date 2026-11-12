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

test('BPP chapter 9: every calculated answer matches a fresh calculation', () => {
  const c9 = Object.fromEntries(require('../data/bpp-ch09.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c9[ref].options[c9[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  const income101 = 6000 / 3 + 6000 + 7200 + 7200 + 7200 * 2 / 3;
  assert.equal(chosen('10.1'), `Rental income ${money(income101)}; rent received in advance (credit) ${money(7200 / 3)}`);
  assert.equal(chosen('10.2'), `Expense ${money(48000 * 10 / 12 + 60000 * 2 / 12)}; accrual ${money(60000 * 2 / 12)}`);
  assert.equal(c9['10.3'].correctValue, 29800 + 6400 - 2700 - 7100 + 3500);
  assert.equal(chosen('10.5'), money(36000 * 8 / 12 + 42000 * 4 / 12));
  assert.equal(chosen('10.6'), money(14200 + (92600 - 2100 + 1800) - 11300));
  // 10.7 month by month: April from the first bill, then three full bills, then Feb-March accrued.
  const byMonth = 390 / 3 + 480 + 540 + 600 + 720 * 2 / 3;
  assert.equal(byMonth, 390 + 480 + 540 + 600 - 260 + 480);
  assert.equal(chosen('10.7'), `Accrual ${money(720 * 2 / 3)}; charge ${money(byMonth)}`);
  assert.equal(chosen('10.8'), money(1250 + 1500 + 1900 + 1650));
  assert.equal(c9['10.10'].correctValue, 264500 + 21300 - 25800 - 13600 + 15200);
  assert.equal(chosen('10.11'), `Expense ${money(45000 / 18 * 12)}; prepayment ${money(45000 / 18 * 4)}`);
  assert.equal(chosen('10.12'), `Profit ${money(40000 - 27000 / 3)}; net assets ${money(310000 - 27000 / 3)}`);
  assert.equal(chosen('10.13'), `A profit of ${money(2350 - 1980 + 760)}`);
  assert.equal(chosen('10.15'), money((4600 + 800 + 1500) + (7200 - 600 - 900)));
});

test('BPP chapter 10: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch10.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  // Receivables expense = write-offs + (closing allowance - opening allowance) - recoveries.
  const expense = (writeOff, opening, closing, recovered = 0) => writeOff + (closing - opening) - recovered;
  assert.equal(chosen('11.2'), money(expense(34000, 61000, (520000 - 34000) * 0.1)));
  assert.equal(chosen('11.3'), money(expense(17300, 22000, 19500)));
  assert.equal(42000 / 0.06, 700000);
  assert.equal(c['11.4'].correctValue, expense(35000, 42000, (935000 - 35000) * 0.06));
  assert.equal(chosen('11.5'), money(expense(158000, 96000, 231000)));
  const allow7 = (726000 - 16000) * 0.05;
  assert.equal(chosen('11.7'), `Expense ${money(expense(16000, 41000, allow7))}; net receivables ${money(726000 - 16000 - allow7)}`);
  assert.ok(chosen('11.10').startsWith(`Profit overstated by ${money(6000 * 2)}`));
  assert.equal(chosen('11.11'), `${money(-expense(1300, 4200, 36000 * 0.05, 900))} credit (income)`);
  assert.equal(chosen('11.13'), money(expense(640, 920, 1150)));
});

test('BPP chapter 11: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch11.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  assert.equal(chosen('11.15'), money(29750 + 6420));
  assert.equal(chosen('12.6'), `A charge of ${money(6115 - 5240)}`);
  assert.equal(chosen('12.7'), `A credit of ${money(3200 - 2600)}`);
});

test('BPP chapter 14, suspense: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch14.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${Math.abs(n).toLocaleString('en-US')}`;
  // Suspense as a signed number: debit positive, credit negative.
  const open2 = -(652480 - 648170);
  const after2 = open2 + (248000 - 240000) - 2 * 3600 - 650 + (65300 - 56300);
  assert.equal(chosen('18.2'), `${money(after2)} ${after2 > 0 ? 'debit' : 'credit'}`);
  assert.equal(412560 - 405060 - 2 * 3500, 500);
  const open5 = (630 - 360) + 2 * 80 - 90;
  assert.equal(chosen('18.5'), `Debit ${money(open5)}`);
  assert.equal(c['18.7'].correctValue, (745900 - 728300) - 6200 - (21000 - 12000));
  assert.equal(chosen('18.11'), `${money(-640 + 2 * 850)} debit`);
  assert.equal(chosen('18.13'), `${money((600000 / 4) * (1.10 - 0.20))} credit`);
});

test('BPP chapter 15: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch15.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
  assert.ok(chosen('27.3').startsWith(`Receivables and prepayments ${money(15000 + 15000 * 0.03 + 7200 * 9 / 12 + 3000)}`));
  assert.equal(c['27.10'].correctValue, (16200 - 14000) + 23500);
});

test('BPP chapter 17: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch17.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
  assert.equal(chosen('30.3'), `Add ${money(760000 - 30000 - 95000 + 70000 + 55000)} to profit`);
  assert.equal(chosen('30.10'), `${money(((210 + 80) - (150 + 50) - (180 - 120)) * 1000)} inflow`);
  assert.equal(512 + 296 - 28 - 63 + 37 + 31, 785);
  assert.equal(c['30.15'].correctValue, (701 - (518 + 60 - (130 - 72) - 47)) * 1000);
  // 30.17: operating cash only; interest paid is financing under Kaplan's IAS 7.
  assert.equal(c['30.17'].correctValue, (600 + 38500 - 1100) - (1200 + 21600 - 2900) - (1400 + 11000 - 800));
  assert.equal(chosen('30.21'), money(174000 + 820000 - 196000));
});

test('BPP chapter 16: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch16.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
  assert.equal(chosen('26.1'), money((294600 + 812000 - 318400) / 0.7));
  assert.equal(chosen('26.3'), money(96200 / 0.65 - 142800));
  assert.equal(c['26.4'].correctValue, 512400 + 3700 + 1800 + 128000 - 95000);
  assert.equal(chosen('26.5'), money(236500 + 2300 + 1800 + 61500 - 48000));
  assert.equal(chosen('26.6'), money(150000 + 210000 - 240000 / 1.25 - 120000));
  assert.equal(chosen('26.7'), money(264000 + 348000 - 520000 * 0.8 - 175000));
  assert.equal(chosen('26.8'), money(420000 - 90000 - 800000 + 500000 + 260000 + 310000));
  assert.equal(chosen('26.9'), money(9200 + (41800 + 150 * 52 + 500) - (150 * 52 + 500 * 1.2)));
  assert.equal(c['26.10'].correctValue, 913700 + 12400 + 158300 - 142600 - 3100 - 1500);
  assert.equal(chosen('26.11'), money((186000 + 642300 - 38800 - 201500) / 0.75));
  assert.equal(chosen('26.12'), money(296400 + 5200 + 4900 + 84700));
  assert.equal(chosen('26.14'), money(31500 + 52800 - 70500 * 0.6));
  assert.equal(chosen('26.16'), money(352000 - 185000 + 41000 - 90000));
});

test('BPP chapter 13: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch13.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${Math.abs(n).toLocaleString('en-US')}`;
  // Balances: positive = money in the bank, negative = overdraft.
  assert.equal(80 + 520 - 450, 660 - 450 - 60);
  assert.equal(chosen('16.1'), `${money(-740 - 118)} overdrawn`);
  assert.equal(c['16.2'].correctValue, -(-4820 + 160 - 2 * 375));
  assert.equal(chosen('16.3'), money(3200 - 2000 * 0.8 * 0.95 + 400 * 0.975));
  assert.equal(chosen('16.4'), `${money(-1250 - 140)} overdrawn`);
  const book5 = -7640 - 480, statement5 = book5 + 360 + 2950 - 4710;
  assert.equal(statement5 - 360 - 2950 + 4710, book5);
  assert.equal(chosen('16.5'), `${money(statement5)} overdrawn`);
  assert.equal(chosen('16.6'), `${money(-28450 + 39600 - 31280)} credit`);
  assert.equal(chosen('16.9'), `${money(-4520 - 7340 + 15180)} at bank`);
  assert.equal(chosen('16.12'), `${money(-26900 + 29300 - 4100)} overdrawn`);
});

test('BPP chapter 12: every calculated answer matches a fresh calculation', () => {
  const c = Object.fromEntries(require('../data/bpp-ch12.js').map((q) => [q.bppRef, q]));
  const chosen = (ref) => c[ref].options[c[ref].correctIndex];
  const money = (n) => `$${n.toLocaleString('en-US')}`;
  const r = (n) => Math.round(n * 100) / 100;
  assert.equal(c['13.1'].correctValue, r((800000 / 0.25) * 0.03));
  assert.ok(chosen('13.3').includes(`Dr Bank ${money(r(800000 * 0.65))}, Cr Share capital ${money(r(800000 * 0.25))}, Cr Share premium ${money(r(800000 * 0.40))}`));
  const bonus4 = (200000 / 4) * 0.25;
  assert.equal(chosen('13.4'), `Share capital ${money(r(50000 + bonus4 + 80000 * 0.25))}; share premium ${money(r(120000 - bonus4 + 80000 * 0.35))}`);
  assert.equal(chosen('13.5'), `Charge ${money(240000 * 0.1 * 9 / 12)}; accrual ${money(240000 * 0.1 * 9 / 12 - 2 * 240000 * 0.1 / 4)}`);
  const rights = 400000 / 4, bonus7 = (400000 + rights) / 10 * 0.5;
  assert.equal(chosen('13.7'), `Share capital ${money(200000 + rights * 0.5 + bonus7)}; share premium ${money(r(60000 + rights * 0.7 - bonus7))}`);
  assert.equal(c['13.8'].correctValue, r(800000 * 0.06 * 3 / 12 + 600000 * 0.06 * 9 / 12 + 400000 * 0.05 * 3 / 12));
  assert.ok(chosen('13.9').includes(money(r(80000 * 0.3))));
  const bonus12 = (2000000 + 400000) / 5 * 0.25;
  assert.equal(chosen('13.12'), `Share capital ${money(500000 + 100000 + bonus12)}; share premium ${money(r(250000 + 400000 * 0.65 - bonus12))}`);
});
