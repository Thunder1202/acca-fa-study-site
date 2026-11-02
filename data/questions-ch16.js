'use strict';

(function () {
  const TOPIC = 'chapter-16';
  const PREFIX = 'ch16';

  const base = (kitRef, type, text, en, ru, uz) => ({ id: `${PREFIX}-q${kitRef}`, kitRef, topicId: TOPIC, type, text, explanation: { en, ru, uz } });
  const single = (kitRef, text, options, correctIndex, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'single', text, en, ru, uz), options, correctIndex, ...extra });
  const number = (kitRef, text, correctValue, answerText, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'number', text, en, ru, uz), correctValue, answerText, ...extra });

  const questions = [
    single(458, 'A sole trader keeps no proper records. Opening inventory was $81,000, closing inventory $90,000, purchases $800,000, and the gross profit margin is 30%. What was revenue for the year?',
      ['$1,028,300', '$1,130,000', '$1,142,857', '$2,636,667'], 1,
      `Cost of sales is $81,000 + $800,000 - $90,000 = $791,000. With a 30% margin, cost of sales is 70% of sales, so sales = $791,000 / 0.7 = $1,130,000.`,
      `Себестоимость: $81,000 + $800,000 - $90,000 = $791,000. При марже 30% себестоимость — 70% продаж, значит, продажи = $791,000 / 0.7 = $1,130,000.`,
      `Tannarx: $81,000 + $800,000 - $90,000 = $791,000. 30% marjada tannarx sotuvning 70%, demak sotuv = $791,000 / 0.7 = $1,130,000.`),
    single(459, 'A business had inventory of $420,000 at the start of the month. Sales were $700,000 and purchases $500,000. At the month end a fire destroyed some inventory, and the undamaged goods were valued at $230,000. All sales make a gross profit margin of 30%. What was the cost of the inventory destroyed?',
      ['$150,000', '$200,000', '$380,000', '$430,000'], 1,
      `Cost of sales is 70% of $700,000 = $490,000. Inventory should be $420,000 + $500,000 - $490,000 = $430,000. Only $230,000 remains, so $200,000 was lost.`,
      `Себестоимость: 70% от $700,000 = $490,000. Запасов должно быть $420,000 + $500,000 - $490,000 = $430,000. Осталось $230,000, потеряно $200,000.`,
      `Tannarx: $700,000 ning 70% = $490,000. Zaxira $420,000 + $500,000 - $490,000 = $430,000 bo'lishi kerak. Faqat $230,000 qolgan, $200,000 yo'qolgan.`),
    number(460, 'A business trades at a mark-up of 25% on cost. An incomplete statement of profit or loss shows opening inventory of $13,000 and purchases of $143,500, with closing inventory unknown. You find that revenue should be $186,000, and that sales returns of $1,000 and purchase returns of $1,100 were left out. What is closing inventory?', 7400, '$7,400',
      `Net sales are $186,000 - $1,000 = $185,000. Cost of sales is $185,000 x 100/125 = $148,000. Net purchases are $143,500 - $1,100 = $142,400. Closing inventory is $13,000 + $142,400 - $148,000 = $7,400.`,
      `Чистые продажи: $186,000 - $1,000 = $185,000. Себестоимость: $185,000 x 100/125 = $148,000. Чистые закупки: $143,500 - $1,100 = $142,400. Запасы на конец: $13,000 + $142,400 - $148,000 = $7,400.`,
      `Sof sotuv: $186,000 - $1,000 = $185,000. Tannarx: $185,000 x 100/125 = $148,000. Sof xaridlar: $143,500 - $1,100 = $142,400. Yakuniy zaxira: $13,000 + $142,400 - $148,000 = $7,400.`),
    single(461, 'A fire destroyed most of a business\'s records. Sales were $700,000, opening inventory $26,000, closing inventory $34,000, opening payables $31,000 and closing payables $36,000. Gross profit represents a mark-up of 40%. What was the total cash paid to suppliers?',
      ['$423,000', '$433,000', '$503,000', '$513,000'], 2,
      `Cost of sales is $700,000 x 100/140 = $500,000. Purchases are $500,000 + $34,000 - $26,000 = $508,000. Cash paid is $31,000 + $508,000 - $36,000 = $503,000.`,
      `Себестоимость: $700,000 x 100/140 = $500,000. Закупки: $500,000 + $34,000 - $26,000 = $508,000. Выплаты: $31,000 + $508,000 - $36,000 = $503,000.`,
      `Tannarx: $700,000 x 100/140 = $500,000. Xaridlar: $500,000 + $34,000 - $26,000 = $508,000. To'lovlar: $31,000 + $508,000 - $36,000 = $503,000.`),
    single(462, 'A business counted inventory on 6 January, valued at $36,000. Between 31 December and 6 January, sales were $9,000 and purchases $4,500. Inventory at 31 December was $37,800. What is the gross margin?',
      ['70%', '72%', '30%', '43%'], 2,
      `Goods sold at cost are $37,800 + $4,500 - $36,000 = $6,300. Gross profit is $9,000 - $6,300 = $2,700, and $2,700 / $9,000 = 30%.`,
      `Продано по себестоимости: $37,800 + $4,500 - $36,000 = $6,300. Валовая прибыль $9,000 - $6,300 = $2,700, $2,700 / $9,000 = 30%.`,
      `Tannarxda sotilgan: $37,800 + $4,500 - $36,000 = $6,300. Yalpi foyda $9,000 - $6,300 = $2,700, $2,700 / $9,000 = 30%.`),
    single(463, 'A business has a mark-up of 25% on cost of sales. Receivables were $7,000 at the start and $5,800 at the end. Cash was $700 at the start and $560 at the end. Total cash payments were $18,000. The only receipts were from customers. What is gross profit?',
      ['$3,332', '$3,430', '$3,572', '$4,165'], 0,
      `Receipts are $18,000 + $560 - $700 = $17,860. Sales are $17,860 + $5,800 - $7,000 = $16,660. A 25% mark-up means gross profit is 25/125 of sales: $3,332.`,
      `Поступления: $18,000 + $560 - $700 = $17,860. Продажи: $17,860 + $5,800 - $7,000 = $16,660. При наценке 25% валовая прибыль — 25/125 продаж: $3,332.`,
      `Tushumlar: $18,000 + $560 - $700 = $17,860. Sotuv: $17,860 + $5,800 - $7,000 = $16,660. 25% ustamada yalpi foyda sotuvning 25/125 qismi: $3,332.`),
    single(464, 'In a month a business had sales of $162,000 with gross profit of $44,000. Purchases were $110,000 and opening inventory $36,000. What was closing inventory?',
      ['$28,000', '$32,000', '$46,000', '$56,000'], 0,
      `Cost of sales is $162,000 - $44,000 = $118,000. Closing inventory is $36,000 + $110,000 - $118,000 = $28,000.`,
      `Себестоимость: $162,000 - $44,000 = $118,000. Запасы на конец: $36,000 + $110,000 - $118,000 = $28,000.`,
      `Tannarx: $162,000 - $44,000 = $118,000. Yakuniy zaxira: $36,000 + $110,000 - $118,000 = $28,000.`),
    single(465, 'Which of these gives a gross profit mark-up of 40%?',
      ['Sales $120,000 and gross profit $48,000', 'Sales $120,000 and cost of sales $72,000', 'Sales $126,000 and cost of sales $90,000', 'Sales $126,000 and cost of sales $75,600'], 2,
      `Mark-up is gross profit over cost of sales. $36,000 / $90,000 = 40%. The others are 40% margins, which are mark-ups of about 67%.`,
      `Наценка — валовая прибыль к себестоимости. $36,000 / $90,000 = 40%. Остальные — маржа 40%, то есть наценка около 67%.`,
      `Ustama yalpi foyda tannarxga nisbati. $36,000 / $90,000 = 40%. Qolganlari 40% marja, ya'ni taxminan 67% ustama.`),
    single(466, 'Many records were destroyed by fire. Sales were $540,000, opening inventory $40,000, closing inventory $45,000, opening trade payables $32,000 and closing trade payables $36,000. Gross profit is a mark-up of 50% on cost. What was the total cash paid to suppliers?',
      ['$271,000', '$351,000', '$361,000', '$369,000'], 2,
      `Cost of sales is $540,000 x 100/150 = $360,000. Purchases are $360,000 + $45,000 - $40,000 = $365,000. Cash paid is $32,000 + $365,000 - $36,000 = $361,000.`,
      `Себестоимость: $540,000 x 100/150 = $360,000. Закупки: $360,000 + $45,000 - $40,000 = $365,000. Выплаты: $32,000 + $365,000 - $36,000 = $361,000.`,
      `Tannarx: $540,000 x 100/150 = $360,000. Xaridlar: $360,000 + $45,000 - $40,000 = $365,000. To'lovlar: $32,000 + $365,000 - $36,000 = $361,000.`),
    single(467, 'A shop owner kept no records for the year. The owner took out $7,500 in cash and goods that cost the business $300, and put in $22,000 of lottery winnings. At the last year end the assets were $45,000 and liabilities $16,000. At this year end the assets are $62,000 and liabilities $20,500. What was the profit or loss?',
      ['$1,700 profit', '$1,700 loss', '$2,000 profit', '$2,000 loss'], 1,
      `Opening net assets are $29,000 and closing are $41,500. $41,500 = $29,000 + $22,000 + profit - $7,800, so the result is -$1,700, a loss. Drawings include the goods.`,
      `Чистые активы на начало $29,000, на конец $41,500. $41,500 = $29,000 + $22,000 + прибыль - $7,800, результат -$1,700, убыток. Изъятия включают товар.`,
      `Boshlang'ich sof aktivlar $29,000, yakuniy $41,500. $41,500 = $29,000 + $22,000 + foyda - $7,800, natija -$1,700, zarar. Olib qo'yishlar tovarni ham o'z ichiga oladi.`),
    single(468, 'A potter lost goods in a flood that had cost $3,800 and had a retail value of $6,200. The potter was insured for this loss. What entry records it?',
      ['Dr Expense $6,200, Cr Cost of sales $6,200', 'Dr Current asset $6,200, Cr Cost of sales $6,200', 'Dr Expense $3,800, Cr Cost of sales $3,800', 'Dr Current asset $3,800, Cr Cost of sales $3,800'], 3,
      `The insurer pays the cost, not the selling price, so the claim is a $3,800 current asset. Cost of sales is credited, because these goods were not sold.`,
      `Страховщик платит стоимость, а не цену продажи, поэтому требование — оборотный актив $3,800. Себестоимость кредитуется, так как товар не продан.`,
      `Sug'urta sotuv narxini emas, tannarxni to'laydi, da'vo $3,800 aylanma aktiv. Tannarx kreditlanadi, chunki bu tovar sotilmagan.`),
    number(469, 'A fire destroyed various records. For the period, the records show: cash received from credit customers $84,000; contras with credit suppliers $3,700; discounts allowed to credit customers, not expected to be taken when invoiced, $5,500; interest charged on overdue accounts $3,400. Trade receivables were $72,000 at the start and $77,000 at the end. What are credit sales for the period?', 94800, '$94,800',
      `In receivables, the credits are cash $84,000, contra $3,700, discounts $5,500 and closing $77,000, totalling $170,200. The debits known are opening $72,000 and interest $3,400. Credit sales are the difference: $94,800.`,
      `В дебиторах кредит: деньги $84,000, взаимозачёт $3,700, скидки $5,500 и остаток $77,000, всего $170,200. Известный дебет: на начало $72,000 и проценты $3,400. Продажи в кредит — разница: $94,800.`,
      `Debitorlarda kredit: pul $84,000, o'zaro hisob-kitob $3,700, chegirmalar $5,500 va yakuniy $77,000, jami $170,200. Ma'lum debet: boshlang'ich $72,000 va foiz $3,400. Nasiya sotuv farq: $94,800.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
