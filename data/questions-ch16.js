'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-16';
  const questions = [
    {
      id: 'ch16-q458',
      kitRef: 458,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A sole trader keeps no proper records. Opening inventory was $81,000, closing inventory $90,000, purchases $800,000, and the gross profit margin is 30%. What was revenue for the year?',
      explanation: {
        en: `Find cost of sales, then turn it into sales with the margin.
# Step 1: Cost of sales
  Opening $81,000 + purchases $800,000 - closing $90,000 = $791,000
# Step 2: Margin 30% means sales are 100% and cost is 70%
  Sales = $791,000 / 70% = $1,130,000
= Answer: $1,130,000
! Common trap: $1,028,300 adds 30% to cost (that is a mark-up). $1,142,857 uses purchases instead of cost of sales.`,
        ru: `Найдём себестоимость, затем переведём её в продажи через маржу.
# Шаг 1: Себестоимость
  Начало $81,000 + закупки $800,000 - конец $90,000 = $791,000
# Шаг 2: Маржа 30% — продажи 100%, себестоимость 70%
  Продажи = $791,000 / 70% = $1,130,000
= Ответ: $1,130,000
! Частая ошибка: $1,028,300 прибавляет 30% к себестоимости (это наценка). $1,142,857 берёт закупки вместо себестоимости.`,
        uz: `Tannarxni topib, keyin marja orqali sotuvga aylantiramiz.
# 1-qadam: Tannarx
  Boshi $81,000 + xaridlar $800,000 - oxiri $90,000 = $791,000
# 2-qadam: 30% marja — sotuv 100%, tannarx 70%
  Sotuv = $791,000 / 70% = $1,130,000
= Javob: $1,130,000
! Ko'p uchraydigan xato: $1,028,300 tannarxga 30% qo'shadi (bu ustama). $1,142,857 tannarx o'rniga xaridlarni oladi.`,
      },
      options: ['$1,028,300', '$1,130,000', '$1,142,857', '$2,636,667'],
      correctIndex: 1,
    },
    {
      id: 'ch16-q459',
      kitRef: 459,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A business had inventory of $420,000 at the start of the month. Sales were $700,000 and purchases $500,000. At the month end a fire destroyed some inventory, and the undamaged goods were valued at $230,000. All sales make a gross profit margin of 30%. What was the cost of the inventory destroyed?',
      explanation: {
        en: `Work out what inventory should be, then compare with what survived.
# Step 1: Cost of sales
  Margin 30%, so cost is 70% of sales: $700,000 x 70% = $490,000
# Step 2: What should be there
  Opening $420,000 + purchases $500,000 - cost of sales $490,000 = $430,000
# Step 3: What was lost
  $430,000 - undamaged $230,000 = $200,000
= Answer: $200,000
! Common trap: $430,000 is what should be there, not what was lost; take off the goods that survived.`,
        ru: `Рассчитаем, какими должны быть запасы, и сравним с уцелевшими.
# Шаг 1: Себестоимость
  Маржа 30%, себестоимость — 70% продаж: $700,000 x 70% = $490,000
# Шаг 2: Что должно быть
  Начало $420,000 + закупки $500,000 - себестоимость $490,000 = $430,000
# Шаг 3: Что потеряно
  $430,000 - неповреждённые $230,000 = $200,000
= Ответ: $200,000
! Частая ошибка: $430,000 — это сколько должно быть, а не сколько потеряно; вычтите уцелевший товар.`,
        uz: `Zaxira qancha bo'lishi kerakligini topib, saqlanib qolgani bilan solishtiramiz.
# 1-qadam: Tannarx
  Marja 30%, tannarx sotuvning 70% i: $700,000 x 70% = $490,000
# 2-qadam: Nima bo'lishi kerak
  Boshi $420,000 + xaridlar $500,000 - tannarx $490,000 = $430,000
# 3-qadam: Nima yo'qolgan
  $430,000 - zararlanmagan $230,000 = $200,000
= Javob: $200,000
! Ko'p uchraydigan xato: $430,000 — bo'lishi kerak bo'lgani, yo'qolgani emas; saqlangan tovarni ayiring.`,
      },
      options: ['$150,000', '$200,000', '$380,000', '$430,000'],
      correctIndex: 1,
    },
    {
      id: 'ch16-q460',
      kitRef: 460,
      topicId: 'chapter-16',
      type: 'number',
      text: 'A business trades at a mark-up of 25% on cost. An incomplete statement of profit or loss shows opening inventory of $13,000 and purchases of $143,500, with closing inventory unknown. You find that revenue should be $186,000, and that sales returns of $1,000 and purchase returns of $1,100 were left out. What is closing inventory?',
      explanation: {
        en: `Fix sales and purchases for the returns first, then use the mark-up.
# Step 1: Net sales
  $186,000 - sales returns $1,000 = $185,000
# Step 2: Cost of sales (mark-up 25%, so sales are 125% of cost)
  $185,000 x 100/125 = $148,000
# Step 3: Net purchases
  $143,500 - purchase returns $1,100 = $142,400
# Step 4: Closing inventory
  Opening $13,000 + net purchases $142,400 - cost of sales $148,000 = $7,400
= Answer: $7,400
! Common trap: forgetting a return, or using 75% of sales (a margin) instead of 100/125.`,
        ru: `Сначала поправим продажи и закупки на возвраты, затем используем наценку.
# Шаг 1: Чистые продажи
  $186,000 - возвраты покупателей $1,000 = $185,000
# Шаг 2: Себестоимость (наценка 25%, продажи — 125% себестоимости)
  $185,000 x 100/125 = $148,000
# Шаг 3: Чистые закупки
  $143,500 - возвраты поставщикам $1,100 = $142,400
# Шаг 4: Запасы на конец
  Начало $13,000 + чистые закупки $142,400 - себестоимость $148,000 = $7,400
= Ответ: $7,400
! Частая ошибка: забыть возврат или взять 75% продаж (маржу) вместо 100/125.`,
        uz: `Avval sotuv va xaridlarni qaytarishlarga tuzatamiz, keyin ustamadan foydalanamiz.
# 1-qadam: Sof sotuv
  $186,000 - sotuv qaytarishlari $1,000 = $185,000
# 2-qadam: Tannarx (ustama 25%, sotuv tannarxning 125% i)
  $185,000 x 100/125 = $148,000
# 3-qadam: Sof xaridlar
  $143,500 - xarid qaytarishlari $1,100 = $142,400
# 4-qadam: Yakuniy zaxira
  Boshi $13,000 + sof xaridlar $142,400 - tannarx $148,000 = $7,400
= Javob: $7,400
! Ko'p uchraydigan xato: qaytarishni unutish yoki 100/125 o'rniga sotuvning 75% ini (marja) olish.`,
      },
      correctValue: 7400,
      answerText: '$7,400',
    },
    {
      id: 'ch16-q461',
      kitRef: 461,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A fire destroyed most of a business\'s records. Sales were $700,000, opening inventory $26,000, closing inventory $34,000, opening payables $31,000 and closing payables $36,000. Gross profit represents a mark-up of 40%. What was the total cash paid to suppliers?',
      explanation: {
        en: `Sales → cost of sales → purchases → cash paid.
# Step 1: Cost of sales (mark-up 40%, so sales are 140% of cost)
  $700,000 x 100/140 = $500,000
# Step 2: Purchases
  Cost of sales $500,000 + closing inventory $34,000 - opening inventory $26,000 = $508,000
# Step 3: Cash paid to suppliers (payables account)
  Opening payables $31,000 + purchases $508,000 - closing payables $36,000 = $503,000
= Answer: $503,000
! Common trap: $513,000 swaps the opening and closing payables. $423,000 treats 40% as a margin.`,
        ru: `Продажи → себестоимость → закупки → оплата.
# Шаг 1: Себестоимость (наценка 40%, продажи — 140% себестоимости)
  $700,000 x 100/140 = $500,000
# Шаг 2: Закупки
  Себестоимость $500,000 + запасы на конец $34,000 - запасы на начало $26,000 = $508,000
# Шаг 3: Оплата поставщикам (счёт кредиторов)
  Кредиторы на начало $31,000 + закупки $508,000 - кредиторы на конец $36,000 = $503,000
= Ответ: $503,000
! Частая ошибка: $513,000 путает начальных и конечных кредиторов. $423,000 считает 40% маржой.`,
        uz: `Sotuv → tannarx → xaridlar → to'langan pul.
# 1-qadam: Tannarx (ustama 40%, sotuv tannarxning 140% i)
  $700,000 x 100/140 = $500,000
# 2-qadam: Xaridlar
  Tannarx $500,000 + yakuniy zaxira $34,000 - boshlang'ich zaxira $26,000 = $508,000
# 3-qadam: Yetkazib beruvchilarga to'lov (kreditorlar hisobi)
  Boshidagi kreditorlar $31,000 + xaridlar $508,000 - oxiridagi kreditorlar $36,000 = $503,000
= Javob: $503,000
! Ko'p uchraydigan xato: $513,000 boshi va oxiridagi kreditorlarni almashtiradi. $423,000 40% ni marja deb oladi.`,
      },
      options: ['$423,000', '$433,000', '$503,000', '$513,000'],
      correctIndex: 2,
    },
    {
      id: 'ch16-q462',
      kitRef: 462,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A business counted inventory on 6 January, valued at $36,000. Between 31 December and 6 January, sales were $9,000 and purchases $4,500. Inventory at 31 December was $37,800. What is the gross margin?',
      explanation: {
        en: `Use the days between the year end and the count to see what the goods sold cost.
# Step 1: Cost of goods sold in those days
  Inventory at 31 December $37,800 + purchases $4,500 - inventory counted $36,000 = $6,300
# Step 2: Gross profit
  Sales $9,000 - cost $6,300 = $2,700
# Step 3: Margin (profit out of sales)
  $2,700 / $9,000 = 30%
= Answer: 30%
! Common trap: 70% is the cost share of sales, not the margin. 43% is the mark-up ($2,700 / $6,300).`,
        ru: `Используем дни между концом года и пересчётом, чтобы найти себестоимость проданного.
# Шаг 1: Себестоимость проданного за эти дни
  Запасы на 31 декабря $37,800 + закупки $4,500 - пересчитано $36,000 = $6,300
# Шаг 2: Валовая прибыль
  Продажи $9,000 - себестоимость $6,300 = $2,700
# Шаг 3: Маржа (прибыль от продаж)
  $2,700 / $9,000 = 30%
= Ответ: 30%
! Частая ошибка: 70% — доля себестоимости в продажах, а не маржа. 43% — наценка ($2,700 / $6,300).`,
        uz: `Yil oxiri va sanash orasidagi kunlardan sotilgan tovar tannarxini topamiz.
# 1-qadam: Shu kunlarda sotilgan tovar tannarxi
  31 dekabrdagi zaxira $37,800 + xaridlar $4,500 - sanalgan $36,000 = $6,300
# 2-qadam: Yalpi foyda
  Sotuv $9,000 - tannarx $6,300 = $2,700
# 3-qadam: Marja (sotuvdan foyda)
  $2,700 / $9,000 = 30%
= Javob: 30%
! Ko'p uchraydigan xato: 70% tannarxning sotuvdagi ulushi, marja emas. 43% ustama ($2,700 / $6,300).`,
      },
      options: ['70%', '72%', '30%', '43%'],
      correctIndex: 2,
    },
    {
      id: 'ch16-q463',
      kitRef: 463,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A business has a mark-up of 25% on cost of sales. Receivables were $7,000 at the start and $5,800 at the end. Cash was $700 at the start and $560 at the end. Total cash payments were $18,000. The only receipts were from customers. What is gross profit?',
      explanation: {
        en: `Cash → receipts → sales → gross profit.
# Step 1: Receipts (cash account)
  Payments $18,000 + closing cash $560 - opening cash $700 = $17,860
# Step 2: Sales (receivables account)
  Receipts $17,860 + closing receivables $5,800 - opening receivables $7,000 = $16,660
# Step 3: Gross profit (mark-up 25%: cost 100, profit 25, sales 125)
  $16,660 x 25/125 = $3,332
= Answer: $3,332
! Common trap: $4,165 takes 25% of sales, treating the mark-up as a margin.`,
        ru: `Деньги → поступления → продажи → валовая прибыль.
# Шаг 1: Поступления (счёт денег)
  Платежи $18,000 + деньги на конец $560 - деньги на начало $700 = $17,860
# Шаг 2: Продажи (счёт дебиторов)
  Поступления $17,860 + дебиторы на конец $5,800 - дебиторы на начало $7,000 = $16,660
# Шаг 3: Валовая прибыль (наценка 25%: себестоимость 100, прибыль 25, продажи 125)
  $16,660 x 25/125 = $3,332
= Ответ: $3,332
! Частая ошибка: $4,165 берёт 25% от продаж, считая наценку маржой.`,
        uz: `Pul → tushumlar → sotuv → yalpi foyda.
# 1-qadam: Tushumlar (pul hisobi)
  To'lovlar $18,000 + oxiridagi pul $560 - boshidagi pul $700 = $17,860
# 2-qadam: Sotuv (debitorlar hisobi)
  Tushumlar $17,860 + oxiridagi debitorlar $5,800 - boshidagi debitorlar $7,000 = $16,660
# 3-qadam: Yalpi foyda (ustama 25%: tannarx 100, foyda 25, sotuv 125)
  $16,660 x 25/125 = $3,332
= Javob: $3,332
! Ko'p uchraydigan xato: $4,165 sotuvning 25% ini oladi, ustamani marja deb hisoblaydi.`,
      },
      options: ['$3,332', '$3,430', '$3,572', '$4,165'],
      correctIndex: 0,
    },
    {
      id: 'ch16-q464',
      kitRef: 464,
      topicId: 'chapter-16',
      type: 'single',
      text: 'In a month a business had sales of $162,000 with gross profit of $44,000. Purchases were $110,000 and opening inventory $36,000. What was closing inventory?',
      explanation: {
        en: `Gross profit gives cost of sales; cost of sales gives closing inventory.
# Step 1: Cost of sales
  Sales $162,000 - gross profit $44,000 = $118,000
# Step 2: Closing inventory
  Opening $36,000 + purchases $110,000 - cost of sales $118,000 = $28,000
= Answer: $28,000
! Common trap: using sales or gross profit in the inventory line. Inventory moves at COST, so only cost of sales belongs there.`,
        ru: `Валовая прибыль даёт себестоимость; себестоимость даёт запасы на конец.
# Шаг 1: Себестоимость
  Продажи $162,000 - валовая прибыль $44,000 = $118,000
# Шаг 2: Запасы на конец
  Начало $36,000 + закупки $110,000 - себестоимость $118,000 = $28,000
= Ответ: $28,000
! Частая ошибка: подставить в строку запасов продажи или валовую прибыль. Запасы движутся по СТОИМОСТИ, туда идёт только себестоимость.`,
        uz: `Yalpi foyda tannarxni beradi; tannarx yakuniy zaxirani beradi.
# 1-qadam: Tannarx
  Sotuv $162,000 - yalpi foyda $44,000 = $118,000
# 2-qadam: Yakuniy zaxira
  Boshi $36,000 + xaridlar $110,000 - tannarx $118,000 = $28,000
= Javob: $28,000
! Ko'p uchraydigan xato: zaxira qatoriga sotuv yoki yalpi foydani qo'yish. Zaxira TANNARXda harakatlanadi, u yerga faqat tannarx kiradi.`,
      },
      options: ['$28,000', '$32,000', '$46,000', '$56,000'],
      correctIndex: 0,
    },
    {
      id: 'ch16-q465',
      kitRef: 465,
      topicId: 'chapter-16',
      type: 'single',
      text: 'Which of these gives a gross profit mark-up of 40%?',
      explanation: {
        en: `Mark-up = gross profit / COST of sales. Test each option.
- Sales $120,000, profit $48,000: cost $72,000; $48,000 / $72,000 = 67%. WRONG (a 40% margin).
- Sales $120,000, cost $72,000: same figures, 67%. WRONG.
- Sales $126,000, cost $90,000: profit $36,000; $36,000 / $90,000 = 40%. RIGHT.
- Sales $126,000, cost $75,600: profit $50,400; $50,400 / $75,600 = 67%. WRONG (a 40% margin).
= Answer: sales $126,000 and cost of sales $90,000`,
        ru: `Наценка = валовая прибыль / СЕБЕСТОИМОСТЬ. Проверим каждый вариант.
- Продажи $120,000, прибыль $48,000: себестоимость $72,000; $48,000 / $72,000 = 67%. НЕВЕРНО (это маржа 40%).
- Продажи $120,000, себестоимость $72,000: те же цифры, 67%. НЕВЕРНО.
- Продажи $126,000, себестоимость $90,000: прибыль $36,000; $36,000 / $90,000 = 40%. ВЕРНО.
- Продажи $126,000, себестоимость $75,600: прибыль $50,400; $50,400 / $75,600 = 67%. НЕВЕРНО (это маржа 40%).
= Ответ: продажи $126,000 и себестоимость $90,000`,
        uz: `Ustama = yalpi foyda / TANNARX. Har bir variantni tekshiramiz.
- Sotuv $120,000, foyda $48,000: tannarx $72,000; $48,000 / $72,000 = 67%. NOTO'G'RI (bu 40% marja).
- Sotuv $120,000, tannarx $72,000: o'sha sonlar, 67%. NOTO'G'RI.
- Sotuv $126,000, tannarx $90,000: foyda $36,000; $36,000 / $90,000 = 40%. TO'G'RI.
- Sotuv $126,000, tannarx $75,600: foyda $50,400; $50,400 / $75,600 = 67%. NOTO'G'RI (bu 40% marja).
= Javob: sotuv $126,000 va tannarx $90,000`,
      },
      options: [
        'Sales $120,000 and gross profit $48,000',
        'Sales $120,000 and cost of sales $72,000',
        'Sales $126,000 and cost of sales $90,000',
        'Sales $126,000 and cost of sales $75,600',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch16-q466',
      kitRef: 466,
      topicId: 'chapter-16',
      type: 'single',
      text: 'Many records were destroyed by fire. Sales were $540,000, opening inventory $40,000, closing inventory $45,000, opening trade payables $32,000 and closing trade payables $36,000. Gross profit is a mark-up of 50% on cost. What was the total cash paid to suppliers?',
      explanation: {
        en: `Sales → cost of sales → purchases → cash paid.
# Step 1: Cost of sales (mark-up 50%, so sales are 150% of cost)
  $540,000 x 100/150 = $360,000
# Step 2: Purchases
  $360,000 + closing inventory $45,000 - opening inventory $40,000 = $365,000
# Step 3: Cash paid to suppliers
  Opening payables $32,000 + purchases $365,000 - closing payables $36,000 = $361,000
= Answer: $361,000
! Common trap: $369,000 swaps the payables. $271,000 treats 50% as a margin.`,
        ru: `Продажи → себестоимость → закупки → оплата.
# Шаг 1: Себестоимость (наценка 50%, продажи — 150% себестоимости)
  $540,000 x 100/150 = $360,000
# Шаг 2: Закупки
  $360,000 + запасы на конец $45,000 - запасы на начало $40,000 = $365,000
# Шаг 3: Оплата поставщикам
  Кредиторы на начало $32,000 + закупки $365,000 - кредиторы на конец $36,000 = $361,000
= Ответ: $361,000
! Частая ошибка: $369,000 путает кредиторов. $271,000 считает 50% маржой.`,
        uz: `Sotuv → tannarx → xaridlar → to'langan pul.
# 1-qadam: Tannarx (ustama 50%, sotuv tannarxning 150% i)
  $540,000 x 100/150 = $360,000
# 2-qadam: Xaridlar
  $360,000 + yakuniy zaxira $45,000 - boshlang'ich zaxira $40,000 = $365,000
# 3-qadam: Yetkazib beruvchilarga to'lov
  Boshidagi kreditorlar $32,000 + xaridlar $365,000 - oxiridagi kreditorlar $36,000 = $361,000
= Javob: $361,000
! Ko'p uchraydigan xato: $369,000 kreditorlarni almashtiradi. $271,000 50% ni marja deb oladi.`,
      },
      options: ['$271,000', '$351,000', '$361,000', '$369,000'],
      correctIndex: 2,
    },
    {
      id: 'ch16-q467',
      kitRef: 467,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A shop owner kept no records for the year. The owner took out $7,500 in cash and goods that cost the business $300, and put in $22,000 of lottery winnings. At the last year end the assets were $45,000 and liabilities $16,000. At this year end the assets are $62,000 and liabilities $20,500. What was the profit or loss?',
      explanation: {
        en: `Capital = net assets. Use the capital line and solve for profit.
# Step 1: Net assets
  Start: $45,000 - $16,000 = $29,000
  End: $62,000 - $20,500 = $41,500
# Step 2: Drawings (cash AND goods)
  $7,500 + $300 = $7,800
# Step 3: The capital line
  $29,000 + lottery money paid in $22,000 + profit - $7,800 = $41,500
  Profit = $41,500 - $29,000 - $22,000 + $7,800 = -$1,700
= Answer: $1,700 loss
! Common trap: $2,000 loss forgets the $300 of goods. Treating the lottery money as profit turns the loss into a big profit.`,
        ru: `Капитал = чистые активы. Используем строку капитала и найдём прибыль.
# Шаг 1: Чистые активы
  Начало: $45,000 - $16,000 = $29,000
  Конец: $62,000 - $20,500 = $41,500
# Шаг 2: Изъятия (деньги И товар)
  $7,500 + $300 = $7,800
# Шаг 3: Строка капитала
  $29,000 + внесённый лотерейный выигрыш $22,000 + прибыль - $7,800 = $41,500
  Прибыль = $41,500 - $29,000 - $22,000 + $7,800 = -$1,700
= Ответ: убыток $1,700
! Частая ошибка: убыток $2,000 забывает товар на $300. Если считать выигрыш прибылью, убыток станет большой прибылью.`,
        uz: `Kapital = sof aktivlar. Kapital qatoridan foydani topamiz.
# 1-qadam: Sof aktivlar
  Boshi: $45,000 - $16,000 = $29,000
  Oxiri: $62,000 - $20,500 = $41,500
# 2-qadam: Olib qo'yishlar (pul VA tovar)
  $7,500 + $300 = $7,800
# 3-qadam: Kapital qatori
  $29,000 + kiritilgan lotereya yutug'i $22,000 + foyda - $7,800 = $41,500
  Foyda = $41,500 - $29,000 - $22,000 + $7,800 = -$1,700
= Javob: $1,700 zarar
! Ko'p uchraydigan xato: $2,000 zarar $300 lik tovarni unutadi. Lotereya pulini foyda desangiz, zarar katta foydaga aylanadi.`,
      },
      options: ['$1,700 profit', '$1,700 loss', '$2,000 profit', '$2,000 loss'],
      correctIndex: 1,
    },
    {
      id: 'ch16-q468',
      kitRef: 468,
      topicId: 'chapter-16',
      type: 'single',
      text: 'A potter lost goods in a flood that had cost $3,800 and had a retail value of $6,200. The potter was insured for this loss. What entry records it?',
      explanation: {
        en: `Lost goods are valued at COST, and the insurer pays the cost.
# Step 1: The amount
  Cost $3,800 (the $6,200 retail value is never used)
# Step 2: Take the goods out of cost of sales
  They were not sold: Cr Cost of sales $3,800
# Step 3: The other side
  Insured, so money will come back from the insurer: Dr Current asset (insurance claim) $3,800
= Answer: Dr Current asset $3,800, Cr Cost of sales $3,800
! Common trap: using $6,200, or debiting an expense. An expense is only for UNINSURED losses.`,
        ru: `Потерянный товар оценивают по СТОИМОСТИ, и страховщик возмещает стоимость.
# Шаг 1: Сумма
  Стоимость $3,800 (розничная цена $6,200 не используется)
# Шаг 2: Убираем товар из себестоимости
  Он не продан: Кт Себестоимость $3,800
# Шаг 3: Другая сторона
  Застраховано, деньги вернёт страховщик: Дт Оборотный актив (требование к страховщику) $3,800
= Ответ: Дт Оборотный актив $3,800, Кт Себестоимость $3,800
! Частая ошибка: брать $6,200 или дебетовать расход. Расход — только для НЕзастрахованных потерь.`,
        uz: `Yo'qolgan tovar TANNARXda baholanadi va sug'urtachi tannarxni to'laydi.
# 1-qadam: Summa
  Tannarx $3,800 ($6,200 chakana narx ishlatilmaydi)
# 2-qadam: Tovarni tannarxdan chiqaramiz
  U sotilmagan: Kt Tannarx $3,800
# 3-qadam: Ikkinchi tomon
  Sug'urtalangan, pulni sug'urtachi qaytaradi: Dt Aylanma aktiv (sug'urta talabi) $3,800
= Javob: Dt Aylanma aktiv $3,800, Kt Tannarx $3,800
! Ko'p uchraydigan xato: $6,200 ni olish yoki xarajatni debetlash. Xarajat faqat sug'urtaLANMAGAN yo'qotishlar uchun.`,
      },
      options: [
        'Dr Expense $6,200, Cr Cost of sales $6,200',
        'Dr Current asset $6,200, Cr Cost of sales $6,200',
        'Dr Expense $3,800, Cr Cost of sales $3,800',
        'Dr Current asset $3,800, Cr Cost of sales $3,800',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch16-q469',
      kitRef: 469,
      topicId: 'chapter-16',
      type: 'number',
      text: 'A fire destroyed various records. For the period, the records show: cash received from credit customers $84,000; contras with credit suppliers $3,700; discounts allowed to credit customers, not expected to be taken when invoiced, $5,500; interest charged on overdue accounts $3,400. Trade receivables were $72,000 at the start and $77,000 at the end. What are credit sales for the period?',
      explanation: {
        en: `Draw the receivables T-account. Credit sales are the balancing figure.
# Debit side (what raises receivables)
  Opening $72,000
  Interest charged on overdue accounts $3,400
  Credit sales: ?
# Credit side (what lowers receivables)
  Cash received $84,000
  Contras with suppliers $3,700
  Discounts allowed $5,500 (sales were recorded at the full price, so the discount reduces the debt)
  Closing $77,000
  Total: $170,200
# Balance
  $170,200 - $72,000 - $3,400 = $94,800
= Answer: $94,800
! Common trap: leaving out the interest, the contra or the discounts. Interest is a debit, but it is not a sale.`,
        ru: `Нарисуем T-счёт дебиторов. Продажи в кредит — балансирующая цифра.
# Дебет (что увеличивает дебиторов)
  Начало $72,000
  Проценты по просроченным счетам $3,400
  Продажи в кредит: ?
# Кредит (что уменьшает дебиторов)
  Получено денег $84,000
  Взаимозачёты с поставщиками $3,700
  Предоставленные скидки $5,500 (продажи записаны по полной цене, скидка уменьшает долг)
  Конец $77,000
  Итого: $170,200
# Баланс
  $170,200 - $72,000 - $3,400 = $94,800
= Ответ: $94,800
! Частая ошибка: пропустить проценты, взаимозачёт или скидки. Проценты — дебет, но не продажа.`,
        uz: `Debitorlar T-hisobini chizamiz. Kreditga sotuv balanslovchi summa.
# Debet (debitorlarni oshiradigan)
  Boshi $72,000
  Muddati o'tgan hisoblarga foiz $3,400
  Kreditga sotuv: ?
# Kredit (debitorlarni kamaytiradigan)
  Olingan pul $84,000
  Yetkazib beruvchilar bilan o'zaro hisob-kitob $3,700
  Berilgan chegirmalar $5,500 (sotuv to'liq narxda yozilgan, chegirma qarzni kamaytiradi)
  Oxiri $77,000
  Jami: $170,200
# Balans
  $170,200 - $72,000 - $3,400 = $94,800
= Javob: $94,800
! Ko'p uchraydigan xato: foiz, o'zaro hisob-kitob yoki chegirmalarni tushirib qoldirish. Foiz debet, lekin sotuv emas.`,
      },
      correctValue: 94800,
      answerText: '$94,800',
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
