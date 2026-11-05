'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-18';
  const questions = [
    {
      id: 'ch18-q508',
      kitRef: 508,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the return on capital employed for each year, to two decimal places?',
      explanation: {
        en: `ROCE = PBFIT / capital employed, where capital employed = equity + long-term loans.
# Step 1: Equity
  20X8: shares $150,000 + premium $50,000 + revaluation $40,000 + retained $445,000 = $685,000
  20X7: $100,000 + $30,000 + $0 + $352,000 = $482,000
# Step 2: Capital employed (add the 8% bank loan)
  20X8: $685,000 + $120,000 = $805,000
  20X7: $482,000 + $90,000 = $572,000
# Step 3: ROCE
  20X8: $189,800 / $805,000 = 23.58%
  20X7: $245,280 / $572,000 = 42.88%
= Answer: 20X8 23.58%, 20X7 42.88%
! Common trap: 16.36%/31.37% divide by total assets; 27.71%/50.89% by equity only; 22.09%/41.31% use profit before income taxes.`,
        ru: `ROCE = PBFIT / задействованный капитал, где задействованный капитал = капитал + долгосрочные займы.
# Шаг 1: Капитал
  20X8: акции $150,000 + эмиссионный доход $50,000 + переоценка $40,000 + нераспределённая $445,000 = $685,000
  20X7: $100,000 + $30,000 + $0 + $352,000 = $482,000
# Шаг 2: Задействованный капитал (прибавим 8% банковский заём)
  20X8: $685,000 + $120,000 = $805,000
  20X7: $482,000 + $90,000 = $572,000
# Шаг 3: ROCE
  20X8: $189,800 / $805,000 = 23.58%
  20X7: $245,280 / $572,000 = 42.88%
= Ответ: 20X8 23.58%, 20X7 42.88%
! Частая ошибка: 16.36%/31.37% делят на общие активы; 27.71%/50.89% — только на капитал; 22.09%/41.31% берут прибыль до налога на прибыль.`,
        uz: `ROCE = PBFIT / jalb qilingan kapital, bunda jalb qilingan kapital = kapital + uzoq muddatli qarzlar.
# 1-qadam: Kapital
  20X8: aksiyalar $150,000 + emissiya daromadi $50,000 + qayta baholash $40,000 + taqsimlanmagan $445,000 = $685,000
  20X7: $100,000 + $30,000 + $0 + $352,000 = $482,000
# 2-qadam: Jalb qilingan kapital (8% bank qarzini qo'shamiz)
  20X8: $685,000 + $120,000 = $805,000
  20X7: $482,000 + $90,000 = $572,000
# 3-qadam: ROCE
  20X8: $189,800 / $805,000 = 23.58%
  20X7: $245,280 / $572,000 = 42.88%
= Javob: 20X8 23.58%, 20X7 42.88%
! Ko'p uchraydigan xato: 16.36%/31.37% jami aktivlarga bo'ladi; 27.71%/50.89% faqat kapitalga; 22.09%/41.31% foyda solig'igacha foydani oladi.`,
      },
      options: [
        '20X8: 23.58%, 20X7: 42.88%',
        '20X8: 16.36%, 20X7: 31.37%',
        '20X8: 27.71%, 20X7: 50.89%',
        '20X8: 22.09%, 20X7: 41.31%',
      ],
      correctIndex: 0,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q509',
      kitRef: 509,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the gross profit margin for 20X8, as a percentage?',
      explanation: {
        en: `Gross profit margin = gross profit / revenue x 100.
# 20X8
  $365,000 / $1,460,000 x 100 = 25%
# For comparison, 20X7
  $408,800 / $1,168,000 x 100 = 35%
= Answer: 25%
! Common trap: dividing by cost of sales ($365,000 / $1,095,000 = 33%). That is the mark-up, not the margin.`,
        ru: `Валовая маржа = валовая прибыль / выручка x 100.
# 20X8
  $365,000 / $1,460,000 x 100 = 25%
# Для сравнения, 20X7
  $408,800 / $1,168,000 x 100 = 35%
= Ответ: 25%
! Частая ошибка: делить на себестоимость ($365,000 / $1,095,000 = 33%). Это наценка, а не маржа.`,
        uz: `Yalpi foyda marjasi = yalpi foyda / tushum x 100.
# 20X8
  $365,000 / $1,460,000 x 100 = 25%
# Solishtirish uchun, 20X7
  $408,800 / $1,168,000 x 100 = 35%
= Javob: 25%
! Ko'p uchraydigan xato: tannarxga bo'lish ($365,000 / $1,095,000 = 33%). Bu ustama, marja emas.`,
      },
      correctValue: 25,
      answerText: '25%',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: '%',
    },
    {
      id: 'ch18-q510',
      kitRef: 510,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the operating profit margin for each year?',
      explanation: {
        en: `Operating profit margin = PBFIT / revenue x 100.
# 20X8
  $189,800 / $1,460,000 = 13.00%
# 20X7
  $245,280 / $1,168,000 = 21.00%
= Answer: 20X8 13.00%, 20X7 21.00%
! Common trap: 12.18% uses profit before income taxes; 9.13% uses profit for the year; 17.33% divides by cost of sales.`,
        ru: `Операционная маржа = PBFIT / выручка x 100.
# 20X8
  $189,800 / $1,460,000 = 13.00%
# 20X7
  $245,280 / $1,168,000 = 21.00%
= Ответ: 20X8 13.00%, 20X7 21.00%
! Частая ошибка: 12.18% берёт прибыль до налога на прибыль; 9.13% — прибыль за год; 17.33% делит на себестоимость.`,
        uz: `Operatsion foyda marjasi = PBFIT / tushum x 100.
# 20X8
  $189,800 / $1,460,000 = 13.00%
# 20X7
  $245,280 / $1,168,000 = 21.00%
= Javob: 20X8 13.00%, 20X7 21.00%
! Ko'p uchraydigan xato: 12.18% foyda solig'igacha foydani oladi; 9.13% yil foydasini; 17.33% tannarxga bo'ladi.`,
      },
      options: [
        '20X8: 12.18%, 20X7: 20.23%',
        '20X8: 13.00%, 20X7: 21.00%',
        '20X8: 9.13%, 20X7: 15.17%',
        '20X8: 17.33%, 20X7: 32.31%',
      ],
      correctIndex: 1,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q511',
      kitRef: 511,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the net asset turnover for 20X8, in times, to two decimal places?',
      explanation: {
        en: `Net asset turnover = revenue / capital employed.
# Step 1: Capital employed 20X8
  Equity $685,000 + long-term loan $120,000 = $805,000
# Step 2: Turnover
  $1,460,000 / $805,000 = 1.81 times
# Compare 20X7
  $1,168,000 / $572,000 = 2.04 times. The new assets have not yet brought matching sales
= Answer: 1.81 times
! Common trap: dividing by total assets ($1,160,000), which gives 1.26.`,
        ru: `Оборачиваемость чистых активов = выручка / задействованный капитал.
# Шаг 1: Задействованный капитал 20X8
  Капитал $685,000 + долгосрочный заём $120,000 = $805,000
# Шаг 2: Оборачиваемость
  $1,460,000 / $805,000 = 1.81 раза
# Сравним с 20X7
  $1,168,000 / $572,000 = 2.04 раза. Новые активы ещё не принесли соответствующих продаж
= Ответ: 1.81 раза
! Частая ошибка: делить на общие активы ($1,160,000), получится 1.26.`,
        uz: `Sof aktivlar aylanmasi = tushum / jalb qilingan kapital.
# 1-qadam: 20X8 jalb qilingan kapital
  Kapital $685,000 + uzoq muddatli qarz $120,000 = $805,000
# 2-qadam: Aylanma
  $1,460,000 / $805,000 = 1.81 marta
# 20X7 bilan solishtiramiz
  $1,168,000 / $572,000 = 2.04 marta. Yangi aktivlar hali mos sotuv keltirmagan
= Javob: 1.81 marta
! Ko'p uchraydigan xato: jami aktivlarga ($1,160,000) bo'lish, 1.26 chiqadi.`,
      },
      correctValue: 1.81,
      answerText: '1.81 times',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: 'times',
    },
    {
      id: 'ch18-q512',
      kitRef: 512,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the current ratio for each year?',
      explanation: {
        en: `Current ratio = current assets / current liabilities. The overdraft is a current liability.
# Step 1: Current assets
  20X8: inventory $120,000 + receivables $360,000 = $480,000
  20X7: $90,000 + $192,000 + bank $80,000 = $362,000
# Step 2: Current liabilities
  20X8: payables $240,000 + overdraft $70,000 + tax $45,000 = $355,000
  20X7: $150,000 + $60,000 = $210,000
# Step 3: Ratio
  20X8: $480,000 / $355,000 = 1.35:1
  20X7: $362,000 / $210,000 = 1.72:1
= Answer: 20X8 1.35:1, 20X7 1.72:1
! Common trap: 1.68:1 leaves out the overdraft. 1.01:1 and 1.30:1 are the quick ratios.`,
        ru: `Текущая ликвидность = оборотные активы / краткосрочные обязательства. Овердрафт — краткосрочное обязательство.
# Шаг 1: Оборотные активы
  20X8: запасы $120,000 + дебиторы $360,000 = $480,000
  20X7: $90,000 + $192,000 + банк $80,000 = $362,000
# Шаг 2: Краткосрочные обязательства
  20X8: кредиторы $240,000 + овердрафт $70,000 + налог $45,000 = $355,000
  20X7: $150,000 + $60,000 = $210,000
# Шаг 3: Коэффициент
  20X8: $480,000 / $355,000 = 1.35:1
  20X7: $362,000 / $210,000 = 1.72:1
= Ответ: 20X8 1.35:1, 20X7 1.72:1
! Частая ошибка: 1.68:1 не учитывает овердрафт. 1.01:1 и 1.30:1 — быстрая ликвидность.`,
        uz: `Joriy likvidlik = aylanma aktivlar / qisqa muddatli majburiyatlar. Overdraft qisqa muddatli majburiyat.
# 1-qadam: Aylanma aktivlar
  20X8: zaxira $120,000 + debitorlar $360,000 = $480,000
  20X7: $90,000 + $192,000 + bank $80,000 = $362,000
# 2-qadam: Qisqa muddatli majburiyatlar
  20X8: kreditorlar $240,000 + overdraft $70,000 + soliq $45,000 = $355,000
  20X7: $150,000 + $60,000 = $210,000
# 3-qadam: Koeffitsient
  20X8: $480,000 / $355,000 = 1.35:1
  20X7: $362,000 / $210,000 = 1.72:1
= Javob: 20X8 1.35:1, 20X7 1.72:1
! Ko'p uchraydigan xato: 1.68:1 overdraftni hisobga olmaydi. 1.01:1 va 1.30:1 tezkor likvidlik.`,
      },
      options: [
        '20X8: 1.68:1, 20X7: 1.72:1',
        '20X8: 0.74:1, 20X7: 0.58:1',
        '20X8: 1.35:1, 20X7: 1.72:1',
        '20X8: 1.01:1, 20X7: 1.30:1',
      ],
      correctIndex: 2,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q513',
      kitRef: 513,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the quick (acid test) ratio for 20X8, to two decimal places? Give the first figure of x:1.',
      explanation: {
        en: `Quick ratio = (current assets - inventory) / current liabilities.
# Step 1: Quick assets 20X8
  $480,000 - inventory $120,000 = $360,000
# Step 2: Current liabilities 20X8 (with the overdraft)
  $240,000 + $70,000 + $45,000 = $355,000
# Step 3: Ratio
  $360,000 / $355,000 = 1.01:1
# Compare 20X7
  $272,000 / $210,000 = 1.30:1. Liquidity has weakened
= Answer: 1.01:1
! Common trap: leaving out the overdraft ($360,000 / $285,000 = 1.26:1).`,
        ru: `Быстрая ликвидность = (оборотные активы - запасы) / краткосрочные обязательства.
# Шаг 1: Быстрые активы 20X8
  $480,000 - запасы $120,000 = $360,000
# Шаг 2: Краткосрочные обязательства 20X8 (с овердрафтом)
  $240,000 + $70,000 + $45,000 = $355,000
# Шаг 3: Коэффициент
  $360,000 / $355,000 = 1.01:1
# Сравним с 20X7
  $272,000 / $210,000 = 1.30:1. Ликвидность ослабла
= Ответ: 1.01:1
! Частая ошибка: не учесть овердрафт ($360,000 / $285,000 = 1.26:1).`,
        uz: `Tezkor likvidlik = (aylanma aktivlar - zaxira) / qisqa muddatli majburiyatlar.
# 1-qadam: 20X8 tezkor aktivlar
  $480,000 - zaxira $120,000 = $360,000
# 2-qadam: 20X8 qisqa muddatli majburiyatlar (overdraft bilan)
  $240,000 + $70,000 + $45,000 = $355,000
# 3-qadam: Koeffitsient
  $360,000 / $355,000 = 1.01:1
# 20X7 bilan solishtiramiz
  $272,000 / $210,000 = 1.30:1. Likvidlik zaiflashgan
= Javob: 1.01:1
! Ko'p uchraydigan xato: overdraftni hisobga olmaslik ($360,000 / $285,000 = 1.26:1).`,
      },
      correctValue: 1.01,
      answerText: '1.01:1',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: ':1',
    },
    {
      id: 'ch18-q514',
      kitRef: 514,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the inventory holding period for each year, to the nearest day?',
      explanation: {
        en: `Inventory days = inventory / cost of sales x 365.
# 20X8
  $120,000 / $1,095,000 x 365 = 40 days
# 20X7
  $90,000 / $759,200 x 365 = 43 days
= Answer: 20X8 40 days, 20X7 43 days
! Common trap: 30 and 28 divide by revenue. 9 and 8 are the turnover in TIMES (cost of sales / inventory), not days.`,
        ru: `Дни запасов = запасы / себестоимость x 365.
# 20X8
  $120,000 / $1,095,000 x 365 = 40 дней
# 20X7
  $90,000 / $759,200 x 365 = 43 дня
= Ответ: 20X8 40 дней, 20X7 43 дня
! Частая ошибка: 30 и 28 делят на выручку. 9 и 8 — оборачиваемость в РАЗАХ (себестоимость / запасы), а не дни.`,
        uz: `Zaxira kunlari = zaxira / tannarx x 365.
# 20X8
  $120,000 / $1,095,000 x 365 = 40 kun
# 20X7
  $90,000 / $759,200 x 365 = 43 kun
= Javob: 20X8 40 kun, 20X7 43 kun
! Ko'p uchraydigan xato: 30 va 28 tushumga bo'ladi. 9 va 8 MARTA hisobidagi aylanma (tannarx / zaxira), kun emas.`,
      },
      options: [
        '20X8: 30 days, 20X7: 28 days',
        '20X8: 40 days, 20X7: 43 days',
        '20X8: 43 days, 20X7: 40 days',
        '20X8: 9 days, 20X7: 8 days',
      ],
      correctIndex: 1,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q515',
      kitRef: 515,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the receivables collection period for 20X8, to the nearest day?',
      explanation: {
        en: `Receivables days = trade receivables / credit sales x 365. All sales are on credit here.
# 20X8
  $360,000 / $1,460,000 x 365 = 90 days
# Compare 20X7
  $192,000 / $1,168,000 x 365 = 60 days. Customers now take a month longer
= Answer: 90 days
! Common trap: dividing by cost of sales ($360,000 / $1,095,000 x 365 = 120). Receivables are at selling price, so use sales.`,
        ru: `Дни дебиторов = торговые дебиторы / продажи в кредит x 365. Здесь все продажи в кредит.
# 20X8
  $360,000 / $1,460,000 x 365 = 90 дней
# Сравним с 20X7
  $192,000 / $1,168,000 x 365 = 60 дней. Покупатели теперь платят на месяц позже
= Ответ: 90 дней
! Частая ошибка: делить на себестоимость ($360,000 / $1,095,000 x 365 = 120). Дебиторы — по цене продажи, поэтому берём продажи.`,
        uz: `Debitorlar kunlari = savdo debitorlari / kreditga sotuv x 365. Bu yerda barcha sotuv kreditga.
# 20X8
  $360,000 / $1,460,000 x 365 = 90 kun
# 20X7 bilan solishtiramiz
  $192,000 / $1,168,000 x 365 = 60 kun. Mijozlar endi bir oy kech to'laydi
= Javob: 90 kun
! Ko'p uchraydigan xato: tannarxga bo'lish ($360,000 / $1,095,000 x 365 = 120). Debitorlar sotish narxida, shuning uchun sotuv olinadi.`,
      },
      correctValue: 90,
      answerText: '90 days',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: 'days',
    },
    {
      id: 'ch18-q516',
      kitRef: 516,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the payables payment period for each year, to the nearest day, using cost of sales?',
      explanation: {
        en: `Payables days = trade payables / cost of sales x 365.
# 20X8
  $240,000 / $1,095,000 x 365 = 80 days
# 20X7
  $150,000 / $759,200 x 365 = 72 days
= Answer: 20X8 80 days, 20X7 72 days
! Common trap: 60 and 47 divide by revenue. 103 adds the overdraft, which is not a trade payable. The last option swaps the years.`,
        ru: `Дни кредиторов = торговые кредиторы / себестоимость x 365.
# 20X8
  $240,000 / $1,095,000 x 365 = 80 дней
# 20X7
  $150,000 / $759,200 x 365 = 72 дня
= Ответ: 20X8 80 дней, 20X7 72 дня
! Частая ошибка: 60 и 47 делят на выручку. 103 прибавляет овердрафт, а он не торговый кредитор. Последний вариант путает годы.`,
        uz: `Kreditorlar kunlari = savdo kreditorlari / tannarx x 365.
# 20X8
  $240,000 / $1,095,000 x 365 = 80 kun
# 20X7
  $150,000 / $759,200 x 365 = 72 kun
= Javob: 20X8 80 kun, 20X7 72 kun
! Ko'p uchraydigan xato: 60 va 47 tushumga bo'ladi. 103 overdraftni qo'shadi, u savdo kreditori emas. Oxirgi variant yillarni almashtiradi.`,
      },
      options: [
        '20X8: 80 days, 20X7: 72 days',
        '20X8: 60 days, 20X7: 47 days',
        '20X8: 103 days, 20X7: 72 days',
        '20X8: 72 days, 20X7: 80 days',
      ],
      correctIndex: 0,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q517',
      kitRef: 517,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the debt/equity ratio for 20X8, as a percentage to two decimal places?',
      explanation: {
        en: `Debt/equity = long-term debt / equity x 100.
# Step 1: Equity 20X8
  $150,000 + $50,000 + $40,000 + $445,000 = $685,000
# Step 2: Long-term debt
  The 8% bank loan: $120,000 (the overdraft is current, so it is left out)
# Step 3: Ratio
  $120,000 / $685,000 = 17.52%
= Answer: 17.52%
! Common trap: adding the overdraft ($190,000 / $685,000 = 27.74%), or dividing by equity + debt (that is gearing, 14.91%).`,
        ru: `Долг/капитал = долгосрочный долг / капитал x 100.
# Шаг 1: Капитал 20X8
  $150,000 + $50,000 + $40,000 + $445,000 = $685,000
# Шаг 2: Долгосрочный долг
  8% банковский заём: $120,000 (овердрафт краткосрочный, его не берём)
# Шаг 3: Коэффициент
  $120,000 / $685,000 = 17.52%
= Ответ: 17.52%
! Частая ошибка: прибавить овердрафт ($190,000 / $685,000 = 27.74%) или делить на капитал + долг (это рычаг, 14.91%).`,
        uz: `Qarz/kapital = uzoq muddatli qarz / kapital x 100.
# 1-qadam: 20X8 kapital
  $150,000 + $50,000 + $40,000 + $445,000 = $685,000
# 2-qadam: Uzoq muddatli qarz
  8% bank qarzi: $120,000 (overdraft qisqa muddatli, olinmaydi)
# 3-qadam: Koeffitsient
  $120,000 / $685,000 = 17.52%
= Javob: 17.52%
! Ko'p uchraydigan xato: overdraftni qo'shish ($190,000 / $685,000 = 27.74%) yoki kapital + qarzga bo'lish (bu leveraj, 14.91%).`,
      },
      correctValue: 17.52,
      answerText: '17.52%',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: '%',
    },
    {
      id: 'ch18-q518',
      kitRef: 518,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the gearing ratio, long-term debt / (equity + long-term debt), for each year?',
      explanation: {
        en: `Gearing = long-term debt / (equity + long-term debt) x 100.
# 20X8
  $120,000 / ($685,000 + $120,000) = $120,000 / $805,000 = 14.91%
# 20X7
  $90,000 / ($482,000 + $90,000) = $90,000 / $572,000 = 15.73%
= Answer: 20X8 14.91%, 20X7 15.73%
! Common trap: 21.71% adds the overdraft. 17.52% and 18.67% are the debt/equity ratios.`,
        ru: `Рычаг = долгосрочный долг / (капитал + долгосрочный долг) x 100.
# 20X8
  $120,000 / ($685,000 + $120,000) = $120,000 / $805,000 = 14.91%
# 20X7
  $90,000 / ($482,000 + $90,000) = $90,000 / $572,000 = 15.73%
= Ответ: 20X8 14.91%, 20X7 15.73%
! Частая ошибка: 21.71% прибавляет овердрафт. 17.52% и 18.67% — это долг/капитал.`,
        uz: `Leveraj = uzoq muddatli qarz / (kapital + uzoq muddatli qarz) x 100.
# 20X8
  $120,000 / ($685,000 + $120,000) = $120,000 / $805,000 = 14.91%
# 20X7
  $90,000 / ($482,000 + $90,000) = $90,000 / $572,000 = 15.73%
= Javob: 20X8 14.91%, 20X7 15.73%
! Ko'p uchraydigan xato: 21.71% overdraftni qo'shadi. 17.52% va 18.67% qarz/kapital.`,
      },
      options: [
        '20X8: 21.71%, 20X7: 15.73%',
        '20X8: 17.52%, 20X7: 18.67%',
        '20X8: 15.73%, 20X7: 14.91%',
        '20X8: 14.91%, 20X7: 15.73%',
      ],
      correctIndex: 3,
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
    },
    {
      id: 'ch18-q519',
      kitRef: 519,
      topicId: 'chapter-18',
      type: 'number',
      text: 'Use the Harbour Co figures in the table. All sales and purchases are on credit. What is the interest cover for 20X8, in times, to two decimal places?',
      explanation: {
        en: `Interest cover = PBFIT / interest expense.
# 20X8
  $189,800 / $12,000 = 15.82 times
# Compare 20X7
  $245,280 / $9,000 = 27.25 times. Lower, but still very safe
= Answer: 15.82 times
! Common trap: using profit before income taxes ($177,800 / $12,000 = 14.82). That profit has already had the interest taken off.`,
        ru: `Покрытие процентов = PBFIT / процентный расход.
# 20X8
  $189,800 / $12,000 = 15.82 раза
# Сравним с 20X7
  $245,280 / $9,000 = 27.25 раза. Ниже, но всё ещё очень безопасно
= Ответ: 15.82 раза
! Частая ошибка: брать прибыль до налога на прибыль ($177,800 / $12,000 = 14.82). Из неё проценты уже вычтены.`,
        uz: `Foizlarni qoplash = PBFIT / foiz xarajati.
# 20X8
  $189,800 / $12,000 = 15.82 marta
# 20X7 bilan solishtiramiz
  $245,280 / $9,000 = 27.25 marta. Pastroq, lekin hali juda xavfsiz
= Javob: 15.82 marta
! Ko'p uchraydigan xato: foyda solig'igacha foydani olish ($177,800 / $12,000 = 14.82). Undan foiz allaqachon ayirilgan.`,
      },
      correctValue: 15.82,
      answerText: '15.82 times',
      table: {
        head: ['Harbour Co, years ended 30 June', '20X8 $', '20X7 $'],
        rows: [
          ['Revenue', '1,460,000', '1,168,000'],
          ['Cost of sales', '(1,095,000)', '(759,200)'],
          ['Gross profit', '365,000', '408,800'],
          ['Operating expenses', '(175,200)', '(163,520)'],
          ['Profit before financing and income taxes', '189,800', '245,280'],
          ['Interest expense', '(12,000)', '(9,000)'],
          ['Profit before income taxes', '177,800', '236,280'],
          ['Income tax expense', '(44,450)', '(59,070)'],
          ['Profit for the year', '133,350', '177,210'],
          ['Property, plant and equipment', '680,000', '420,000'],
          ['Inventory', '120,000', '90,000'],
          ['Trade receivables', '360,000', '192,000'],
          ['Bank', '-', '80,000'],
          ['Total assets', '1,160,000', '782,000'],
          ['Equity shares of $1', '150,000', '100,000'],
          ['Share premium', '50,000', '30,000'],
          ['Revaluation surplus', '40,000', '-'],
          ['Retained earnings', '445,000', '352,000'],
          ['8% bank loan (repayable 20Y3)', '120,000', '90,000'],
          ['Trade payables', '240,000', '150,000'],
          ['Bank overdraft', '70,000', '-'],
          ['Income tax payable', '45,000', '60,000'],
          ['Total equity and liabilities', '1,160,000', '782,000'],
        ],
      },
      unit: 'times',
    },
    {
      id: 'ch18-q520',
      kitRef: 520,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A business had sales of $25,000 and cost of sales of $18,500. What is its gross profit margin?',
      explanation: {
        en: `Margin = gross profit out of SALES.
# Step 1: Gross profit
  $25,000 - $18,500 = $6,500
# Step 2: Margin
  $6,500 / $25,000 = 26%
= Answer: 26%
! Common trap: 35% is the mark-up ($6,500 / $18,500). 74% is cost of sales as a share of sales.`,
        ru: `Маржа = валовая прибыль от ПРОДАЖ.
# Шаг 1: Валовая прибыль
  $25,000 - $18,500 = $6,500
# Шаг 2: Маржа
  $6,500 / $25,000 = 26%
= Ответ: 26%
! Частая ошибка: 35% — наценка ($6,500 / $18,500). 74% — доля себестоимости в продажах.`,
        uz: `Marja = SOTUVdan yalpi foyda.
# 1-qadam: Yalpi foyda
  $25,000 - $18,500 = $6,500
# 2-qadam: Marja
  $6,500 / $25,000 = 26%
= Javob: 26%
! Ko'p uchraydigan xato: 35% ustama ($6,500 / $18,500). 74% tannarxning sotuvdagi ulushi.`,
      },
      options: ['74%', '135%', '35%', '26%'],
      correctIndex: 3,
    },
    {
      id: 'ch18-q521',
      kitRef: 521,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Using the extract, what is the operating profit margin for each year?',
      explanation: {
        en: `Operating profit margin = PBFIT / revenue.
# 20X5
  $3,300 / $30,000 = 11.00%
# 20X6
  $3,350 / $36,000 = 9.31%
= Answer: 20X5 11.00%, 20X6 9.31%
! Common trap: the swapped option mixes up the years; 27.33%/24.31% are the gross margins; 15.14%/12.29% divide by cost of sales.`,
        ru: `Операционная маржа = PBFIT / выручка.
# 20X5
  $3,300 / $30,000 = 11.00%
# 20X6
  $3,350 / $36,000 = 9.31%
= Ответ: 20X5 11.00%, 20X6 9.31%
! Частая ошибка: вариант с переставленными цифрами путает годы; 27.33%/24.31% — валовые маржи; 15.14%/12.29% делят на себестоимость.`,
        uz: `Operatsion foyda marjasi = PBFIT / tushum.
# 20X5
  $3,300 / $30,000 = 11.00%
# 20X6
  $3,350 / $36,000 = 9.31%
= Javob: 20X5 11.00%, 20X6 9.31%
! Ko'p uchraydigan xato: almashgan variant yillarni adashtiradi; 27.33%/24.31% yalpi marjalar; 15.14%/12.29% tannarxga bo'ladi.`,
      },
      options: [
        '20X5: 11.00%, 20X6: 9.31%',
        '20X5: 9.31%, 20X6: 11.00%',
        '20X5: 27.33%, 20X6: 24.31%',
        '20X5: 15.14%, 20X6: 12.29%',
      ],
      correctIndex: 0,
      table: {
        head: ['', '20X5 $', '20X6 $'],
        rows: [
          ['Revenue', '30,000', '36,000'],
          ['Cost of sales', '(21,800)', '(27,250)'],
          ['Gross profit', '8,200', '8,750'],
          ['Expenses', '(4,900)', '(5,400)'],
          ['Profit before financing and income taxes', '3,300', '3,350'],
        ],
      },
    },
    {
      id: 'ch18-q522',
      kitRef: 522,
      topicId: 'chapter-18',
      type: 'single',
      text: 'All sales are on credit. What is the receivables collection period for each year, to the nearest day?',
      explanation: {
        en: `Receivables days = trade receivables / credit sales x 365. Cash is not a receivable.
# 20X5
  $5,400 / $24,000 x 365 = 82 days
# 20X6
  $8,100 / $30,000 x 365 = 99 days
= Answer: 20X5 82 days, 20X6 99 days
! Common trap: 87 and 110 add the cash to receivables. The 99/82 option swaps the years.`,
        ru: `Дни дебиторов = торговые дебиторы / продажи в кредит x 365. Деньги — не дебиторы.
# 20X5
  $5,400 / $24,000 x 365 = 82 дня
# 20X6
  $8,100 / $30,000 x 365 = 99 дней
= Ответ: 20X5 82 дня, 20X6 99 дней
! Частая ошибка: 87 и 110 прибавляют деньги к дебиторам. Вариант 99/82 путает годы.`,
        uz: `Debitorlar kunlari = savdo debitorlari / kreditga sotuv x 365. Pul debitor emas.
# 20X5
  $5,400 / $24,000 x 365 = 82 kun
# 20X6
  $8,100 / $30,000 x 365 = 99 kun
= Javob: 20X5 82 kun, 20X6 99 kun
! Ko'p uchraydigan xato: 87 va 110 pulni debitorlarga qo'shadi. 99/82 varianti yillarni almashtiradi.`,
      },
      options: [
        '20X5: 82 days, 20X6: 99 days',
        '20X5: 87 days, 20X6: 110 days',
        '20X5: 99 days, 20X6: 82 days',
        '20X5: 65 days, 20X6: 99 days',
      ],
      correctIndex: 0,
      table: {
        head: ['', '20X5 $', '20X6 $'],
        rows: [
          ['Revenue', '24,000', '30,000'],
          ['Trade receivables', '5,400', '8,100'],
          ['Cash', '300', '900'],
        ],
      },
    },
    {
      id: 'ch18-q523',
      kitRef: 523,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company reports: gross profit $21,000, operating expenses ($5,400), interest expense ($4,800), income tax ($2,200), profit for the year $8,600. What is its interest cover?',
      explanation: {
        en: `Interest cover uses profit BEFORE interest and tax (PBFIT).
# Step 1: PBFIT
  Gross profit $21,000 - operating expenses $5,400 = $15,600
# Step 2: Cover
  $15,600 / interest $4,800 = 3.25 times
= Answer: 3.25 times
! Common trap: 2.25 uses profit after interest ($10,800); 1.79 uses profit for the year; 4.38 uses gross profit.`,
        ru: `Покрытие процентов использует прибыль ДО процентов и налога (PBFIT).
# Шаг 1: PBFIT
  Валовая прибыль $21,000 - операционные расходы $5,400 = $15,600
# Шаг 2: Покрытие
  $15,600 / проценты $4,800 = 3.25 раза
= Ответ: 3.25 раза
! Частая ошибка: 2.25 берёт прибыль после процентов ($10,800); 1.79 — прибыль за год; 4.38 — валовую прибыль.`,
        uz: `Foizlarni qoplash foiz va soliqdan OLDINGI foydani (PBFIT) ishlatadi.
# 1-qadam: PBFIT
  Yalpi foyda $21,000 - operatsion xarajatlar $5,400 = $15,600
# 2-qadam: Qoplash
  $15,600 / foiz $4,800 = 3.25 marta
= Javob: 3.25 marta
! Ko'p uchraydigan xato: 2.25 foizdan keyingi foydani ($10,800) oladi; 1.79 yil foydasini; 4.38 yalpi foydani.`,
      },
      options: ['1.79 times', '2.25 times', '3.25 times', '4.38 times'],
      correctIndex: 2,
    },
    {
      id: 'ch18-q524',
      kitRef: 524,
      topicId: 'chapter-18',
      type: 'single',
      text: 'An item sells for $900, which includes a mark-up of 50% on cost. What did the item cost?',
      explanation: {
        en: `A mark-up is added on top of COST. So cost is 100% and the price is 150%.
# Find the cost
  $900 x 100/150 = $600
# Check
  $600 + 50% of $600 = $600 + $300 = $900
= Answer: $600
! Common trap: $450 takes 50% off the PRICE, treating the mark-up as a margin.`,
        ru: `Наценку добавляют сверху к СЕБЕСТОИМОСТИ. Себестоимость — 100%, цена — 150%.
# Найдём себестоимость
  $900 x 100/150 = $600
# Проверка
  $600 + 50% от $600 = $600 + $300 = $900
= Ответ: $600
! Частая ошибка: $450 вычитает 50% от ЦЕНЫ, считая наценку маржой.`,
        uz: `Ustama TANNARX ustiga qo'shiladi. Demak tannarx 100%, narx 150%.
# Tannarxni topamiz
  $900 x 100/150 = $600
# Tekshiruv
  $600 + $600 ning 50% i = $600 + $300 = $900
= Javob: $600
! Ko'p uchraydigan xato: $450 NARXdan 50% ayiradi, ustamani marja deb hisoblaydi.`,
      },
      options: ['$450', '$600', '$1,350', '$300'],
      correctIndex: 1,
    },
    {
      id: 'ch18-q525',
      kitRef: 525,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A business had sales of $300,000 and purchases of $210,000. Opening inventory was $30,000 and closing inventory $26,000. What is the inventory holding period, based on average inventory?',
      explanation: {
        en: `Inventory days on AVERAGE inventory = average inventory / cost of sales x 365.
# Step 1: Cost of sales
  Opening $30,000 + purchases $210,000 - closing $26,000 = $214,000
# Step 2: Average inventory
  ($30,000 + $26,000) / 2 = $28,000
# Step 3: Days
  $28,000 / $214,000 x 365 = 47.8 days
= Answer: 47.8 days
! Common trap: 48.7 divides by purchases; 34.1 by sales; 44.4 uses only closing inventory.`,
        ru: `Дни запасов по СРЕДНИМ запасам = средние запасы / себестоимость x 365.
# Шаг 1: Себестоимость
  Начало $30,000 + закупки $210,000 - конец $26,000 = $214,000
# Шаг 2: Средние запасы
  ($30,000 + $26,000) / 2 = $28,000
# Шаг 3: Дни
  $28,000 / $214,000 x 365 = 47.8 дня
= Ответ: 47.8 дня
! Частая ошибка: 48.7 делит на закупки; 34.1 — на продажи; 44.4 берёт только запасы на конец.`,
        uz: `O'rtacha zaxira bo'yicha zaxira kunlari = o'rtacha zaxira / tannarx x 365.
# 1-qadam: Tannarx
  Boshi $30,000 + xaridlar $210,000 - oxiri $26,000 = $214,000
# 2-qadam: O'rtacha zaxira
  ($30,000 + $26,000) / 2 = $28,000
# 3-qadam: Kunlar
  $28,000 / $214,000 x 365 = 47.8 kun
= Javob: 47.8 kun
! Ko'p uchraydigan xato: 48.7 xaridlarga bo'ladi; 34.1 sotuvga; 44.4 faqat yakuniy zaxirani oladi.`,
      },
      options: ['44.4 days', '47.8 days', '48.7 days', '34.1 days'],
      correctIndex: 1,
    },
    {
      id: 'ch18-q526',
      kitRef: 526,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Which formula gives the inventory holding period in days?',
      explanation: {
        en: `Days formulas put the balance on TOP and the yearly flow underneath, then x 365. Both at cost.
- Revenue / average inventory x 365: WRONG. Upside down and mixes selling price with cost.
- Average inventory at cost / cost of sales x 365: RIGHT.
- Cost of sales / average inventory x 365: WRONG. Cost of sales / inventory is the turnover in times; multiplying by 365 makes no sense.
- Revenue / inventory at selling price x 365: WRONG. Upside down.
= Answer: average inventory at cost / cost of sales x 365`,
        ru: `В формулах дней остаток стоит СВЕРХУ, годовой поток снизу, затем x 365. Оба по себестоимости.
- Выручка / средние запасы x 365: НЕВЕРНО. Перевёрнуто и смешивает цену продажи с себестоимостью.
- Средние запасы по себестоимости / себестоимость продаж x 365: ВЕРНО.
- Себестоимость / средние запасы x 365: НЕВЕРНО. Себестоимость / запасы — это оборачиваемость в разах; умножать на 365 бессмысленно.
- Выручка / запасы по цене продажи x 365: НЕВЕРНО. Перевёрнуто.
= Ответ: средние запасы по себестоимости / себестоимость продаж x 365`,
        uz: `Kun formulalarida qoldiq YUQORIDA, yillik oqim pastda, keyin x 365. Ikkalasi tannarxda.
- Tushum / o'rtacha zaxira x 365: NOTO'G'RI. Teskari va sotish narxini tannarx bilan aralashtiradi.
- Tannarxdagi o'rtacha zaxira / sotilgan tovar tannarxi x 365: TO'G'RI.
- Tannarx / o'rtacha zaxira x 365: NOTO'G'RI. Tannarx / zaxira marta hisobidagi aylanma; 365 ga ko'paytirish ma'nosiz.
- Tushum / sotish narxidagi zaxira x 365: NOTO'G'RI. Teskari.
= Javob: tannarxdagi o'rtacha zaxira / sotilgan tovar tannarxi x 365`,
      },
      options: [
        'Revenue / average inventory at cost × 365',
        'Average inventory at cost / cost of sales × 365',
        'Cost of sales / average inventory × 365',
        'Revenue / average inventory at selling price × 365',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch18-q527',
      kitRef: 527,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company\'s balances include: inventory $4,500, trade receivables $2,700, bank overdraft $300, trade payables $2,400. What is its current ratio?',
      explanation: {
        en: `Current ratio = current assets / current liabilities, with the overdraft counted.
# Step 1: Current assets
  Inventory $4,500 + receivables $2,700 = $7,200
# Step 2: Current liabilities
  Payables $2,400 + overdraft $300 = $2,700
# Step 3: Ratio
  $7,200 / $2,700 = 2.67:1
= Answer: 2.67:1
! Common trap: 3.00:1 leaves out the overdraft; 1.00:1 is the quick ratio; 0.38:1 is upside down.`,
        ru: `Текущая ликвидность = оборотные активы / краткосрочные обязательства, с учётом овердрафта.
# Шаг 1: Оборотные активы
  Запасы $4,500 + дебиторы $2,700 = $7,200
# Шаг 2: Краткосрочные обязательства
  Кредиторы $2,400 + овердрафт $300 = $2,700
# Шаг 3: Коэффициент
  $7,200 / $2,700 = 2.67:1
= Ответ: 2.67:1
! Частая ошибка: 3.00:1 не учитывает овердрафт; 1.00:1 — быстрая ликвидность; 0.38:1 — перевёрнутая дробь.`,
        uz: `Joriy likvidlik = aylanma aktivlar / qisqa muddatli majburiyatlar, overdraft bilan.
# 1-qadam: Aylanma aktivlar
  Zaxira $4,500 + debitorlar $2,700 = $7,200
# 2-qadam: Qisqa muddatli majburiyatlar
  Kreditorlar $2,400 + overdraft $300 = $2,700
# 3-qadam: Koeffitsient
  $7,200 / $2,700 = 2.67:1
= Javob: 2.67:1
! Ko'p uchraydigan xato: 3.00:1 overdraftni hisobga olmaydi; 1.00:1 tezkor likvidlik; 0.38:1 teskari kasr.`,
      },
      options: ['3.00:1', '2.67:1', '1.00:1', '0.38:1'],
      correctIndex: 1,
    },
    {
      id: 'ch18-q528',
      kitRef: 528,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Which of these would increase a company\'s gearing ratio?',
      explanation: {
        en: `Gearing compares debt with equity. It rises when debt becomes a BIGGER share.
- Loans fall 5%, equity falls 20%: equity shrinks much faster, so debt is a bigger share. RIGHT, gearing rises.
- Loans fall 20%, equity falls 5%: debt shrinks faster, so gearing falls. WRONG.
- Interest rate on a fixed-rate loan: does not change the loan balance or equity. WRONG.
- Interest rates in the economy fall: does not change the balances directly. WRONG.
= Answer: long-term loans fall by 5% while equity falls by 20%`,
        ru: `Рычаг сравнивает долг с капиталом. Он растёт, когда доля долга становится БОЛЬШЕ.
- Займы падают на 5%, капитал на 20%: капитал сокращается намного быстрее, доля долга растёт. ВЕРНО, рычаг растёт.
- Займы падают на 20%, капитал на 5%: долг сокращается быстрее, рычаг падает. НЕВЕРНО.
- Ставка по займу с фиксированной ставкой: не меняет остаток займа или капитал. НЕВЕРНО.
- Ставки в экономике падают: напрямую не меняют остатки. НЕВЕРНО.
= Ответ: долгосрочные займы падают на 5%, а капитал на 20%`,
        uz: `Leveraj qarzni kapital bilan solishtiradi. U qarz ulushi KATTA bo'lganda oshadi.
- Qarzlar 5%, kapital 20% kamayadi: kapital ancha tez qisqaradi, qarz ulushi oshadi. TO'G'RI, leveraj oshadi.
- Qarzlar 20%, kapital 5% kamayadi: qarz tezroq qisqaradi, leveraj tushadi. NOTO'G'RI.
- Qat'iy stavkali qarz foizi: qarz qoldig'i yoki kapitalni o'zgartirmaydi. NOTO'G'RI.
- Iqtisodiyotda foiz stavkalari tushadi: qoldiqlarni bevosita o'zgartirmaydi. NOTO'G'RI.
= Javob: uzoq muddatli qarzlar 5%, kapital esa 20% kamayadi`,
      },
      options: [
        'Long-term loans fall by 5% while equity falls by 20%',
        'Long-term loans fall by 20% while equity falls by 5%',
        'Interest rates on its existing fixed-rate loan rise',
        'Interest rates in the economy fall',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch18-q529',
      kitRef: 529,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company has inventory $6,000, trade receivables $3,150, a bank overdraft $450 and trade payables $3,050. What is its quick (acid test) ratio?',
      explanation: {
        en: `Quick ratio = (current assets - inventory) / current liabilities, with the overdraft counted.
# Step 1: Quick assets
  Receivables $3,150 (inventory is left out)
# Step 2: Current liabilities
  Payables $3,050 + overdraft $450 = $3,500
# Step 3: Ratio
  $3,150 / $3,500 = 0.90:1
= Answer: 0.90:1
! Common trap: 2.61:1 is the current ratio (inventory included); 1.03:1 forgets the overdraft.`,
        ru: `Быстрая ликвидность = (оборотные активы - запасы) / краткосрочные обязательства, с учётом овердрафта.
# Шаг 1: Быстрые активы
  Дебиторы $3,150 (запасы исключены)
# Шаг 2: Краткосрочные обязательства
  Кредиторы $3,050 + овердрафт $450 = $3,500
# Шаг 3: Коэффициент
  $3,150 / $3,500 = 0.90:1
= Ответ: 0.90:1
! Частая ошибка: 2.61:1 — текущая ликвидность (с запасами); 1.03:1 забывает овердрафт.`,
        uz: `Tezkor likvidlik = (aylanma aktivlar - zaxira) / qisqa muddatli majburiyatlar, overdraft bilan.
# 1-qadam: Tezkor aktivlar
  Debitorlar $3,150 (zaxira chiqariladi)
# 2-qadam: Qisqa muddatli majburiyatlar
  Kreditorlar $3,050 + overdraft $450 = $3,500
# 3-qadam: Koeffitsient
  $3,150 / $3,500 = 0.90:1
= Javob: 0.90:1
! Ko'p uchraydigan xato: 2.61:1 joriy likvidlik (zaxira bilan); 1.03:1 overdraftni unutadi.`,
      },
      options: ['2.61:1', '0.90:1', '1.03:1', '1.11:1'],
      correctIndex: 1,
    },
    {
      id: 'ch18-q530',
      kitRef: 530,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Using the extract ($000), what is the interest cover for the year?',
      explanation: {
        en: `PBFIT is not shown, so build it first.
# Step 1: PBFIT
  Gross profit $156,000 - operating expenses $72,000 = $84,000
# Step 2: Interest cover
  $84,000 / interest $30,000 = 2.80 times
= Answer: 2.80 times
! Common trap: 1.80 uses profit before income taxes ($54,000), which is after interest. 5.20 uses gross profit.`,
        ru: `PBFIT не показан, сначала найдём его.
# Шаг 1: PBFIT
  Валовая прибыль $156,000 - операционные расходы $72,000 = $84,000
# Шаг 2: Покрытие процентов
  $84,000 / проценты $30,000 = 2.80 раза
= Ответ: 2.80 раза
! Частая ошибка: 1.80 берёт прибыль до налога на прибыль ($54,000), она уже после процентов. 5.20 берёт валовую прибыль.`,
        uz: `PBFIT ko'rsatilmagan, avval uni topamiz.
# 1-qadam: PBFIT
  Yalpi foyda $156,000 - operatsion xarajatlar $72,000 = $84,000
# 2-qadam: Foizlarni qoplash
  $84,000 / foiz $30,000 = 2.80 marta
= Javob: 2.80 marta
! Ko'p uchraydigan xato: 1.80 foyda solig'igacha foydani ($54,000) oladi, u foizdan keyin. 5.20 yalpi foydani oladi.`,
      },
      options: ['2.80 times', '1.80 times', '5.20 times', '0.36 times'],
      correctIndex: 0,
      table: {
        head: ['', '$000'],
        rows: [
          ['Revenue', '520'],
          ['Cost of sales', '(364)'],
          ['Gross profit', '156'],
          ['Operating expenses', '(72)'],
          ['Interest expense', '(30)'],
          ['Profit before income taxes', '54'],
        ],
      },
    },
    {
      id: 'ch18-q531',
      kitRef: 531,
      topicId: 'chapter-18',
      type: 'single',
      text: 'What is the payables payment period for each year, to the nearest day, using cost of sales?',
      explanation: {
        en: `Payables days = trade payables / cost of sales x 365. The overdraft is not a trade payable.
# 20X6
  $6,000 / $73,000 x 365 = 30 days
# 20X5
  $5,400 / $54,750 x 365 = 36 days
= Answer: 20X6 30 days, 20X5 36 days
! Common trap: 31 and 43 add the overdraft; 36/30 swaps the years; 12 and 10 are turnover in times.`,
        ru: `Дни кредиторов = торговые кредиторы / себестоимость x 365. Овердрафт — не торговый кредитор.
# 20X6
  $6,000 / $73,000 x 365 = 30 дней
# 20X5
  $5,400 / $54,750 x 365 = 36 дней
= Ответ: 20X6 30 дней, 20X5 36 дней
! Частая ошибка: 31 и 43 прибавляют овердрафт; 36/30 путает годы; 12 и 10 — оборачиваемость в разах.`,
        uz: `Kreditorlar kunlari = savdo kreditorlari / tannarx x 365. Overdraft savdo kreditori emas.
# 20X6
  $6,000 / $73,000 x 365 = 30 kun
# 20X5
  $5,400 / $54,750 x 365 = 36 kun
= Javob: 20X6 30 kun, 20X5 36 kun
! Ko'p uchraydigan xato: 31 va 43 overdraftni qo'shadi; 36/30 yillarni almashtiradi; 12 va 10 marta hisobidagi aylanma.`,
      },
      options: [
        '20X6: 31 days, 20X5: 43 days',
        '20X6: 30 days, 20X5: 36 days',
        '20X6: 36 days, 20X5: 30 days',
        '20X6: 12 days, 20X5: 10 days',
      ],
      correctIndex: 1,
      table: {
        head: ['', '20X6 $', '20X5 $'],
        rows: [
          ['Cost of sales', '73,000', '54,750'],
          ['Trade payables', '6,000', '5,400'],
          ['Bank overdraft', '200', '1,100'],
        ],
      },
    },
    {
      id: 'ch18-q532',
      kitRef: 532,
      topicId: 'chapter-18',
      type: 'matrix',
      text: 'State whether this statement is true or false.',
      explanation: {
        en: `Check the statement.
- Issuing shares for cash could make gearing rise: FALSE. Equity goes up and debt stays the same, so debt becomes a SMALLER share. Gearing falls.`,
        ru: `Проверим утверждение.
- Выпуск акций за деньги может поднять рычаг: НЕВЕРНО. Капитал растёт, долг тот же, доля долга становится МЕНЬШЕ. Рычаг падает.`,
        uz: `Fikrni tekshiramiz.
- Pulga aksiya chiqarish leverajni oshirishi mumkin: NOTO'G'RI. Kapital oshadi, qarz o'sha-o'sha, qarz ulushi KICHRAYADI. Leveraj tushadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Issuing equity shares for cash during the year could cause the gearing ratio to rise',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch18-q533',
      kitRef: 533,
      topicId: 'chapter-18',
      type: 'matrix',
      text: 'State whether this statement is true or false.',
      explanation: {
        en: `Check the statement.
- Same selling price, lower purchase cost, so gross margin rises: TRUE. Example: sell for $100; cost falls from $70 to $60; margin rises from 30% to 40%.`,
        ru: `Проверим утверждение.
- Та же цена продажи, ниже закупочная цена, значит валовая маржа растёт: ВЕРНО. Пример: продажа за $100; себестоимость падает с $70 до $60; маржа растёт с 30% до 40%.`,
        uz: `Fikrni tekshiramiz.
- Sotish narxi o'sha, xarid narxi past, demak yalpi marja oshadi: TO'G'RI. Misol: $100 ga sotish; tannarx $70 dan $60 ga tushadi; marja 30% dan 40% ga oshadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'If the unit selling price stays the same and the unit purchase cost falls, the gross profit margin increases',
          correctIndex: 0,
        },
      ],
    },
    {
      id: 'ch18-q534',
      kitRef: 534,
      topicId: 'chapter-18',
      type: 'single',
      text: 'What is the current ratio for each year?',
      explanation: {
        en: `Current ratio = current assets / current liabilities, with any overdraft included.
# 20X3
  Current assets: $21,000 + $19,400 + $2,900 = $43,300
  Current liabilities: $23,500
  $43,300 / $23,500 = 1.84:1
# 20X2
  Current assets: $19,000 + $22,600 = $41,600
  Current liabilities: $21,400 + overdraft $600 = $22,000
  $41,600 / $22,000 = 1.89:1
= Answer: 20X3 1.84:1, 20X2 1.89:1
! Common trap: 1.94:1 forgets the 20X2 overdraft. 0.95:1 and 1.03:1 leave out inventory (quick ratio).`,
        ru: `Текущая ликвидность = оборотные активы / краткосрочные обязательства, с учётом овердрафта.
# 20X3
  Оборотные активы: $21,000 + $19,400 + $2,900 = $43,300
  Краткосрочные обязательства: $23,500
  $43,300 / $23,500 = 1.84:1
# 20X2
  Оборотные активы: $19,000 + $22,600 = $41,600
  Краткосрочные обязательства: $21,400 + овердрафт $600 = $22,000
  $41,600 / $22,000 = 1.89:1
= Ответ: 20X3 1.84:1, 20X2 1.89:1
! Частая ошибка: 1.94:1 забывает овердрафт 20X2. 0.95:1 и 1.03:1 исключают запасы (быстрая ликвидность).`,
        uz: `Joriy likvidlik = aylanma aktivlar / qisqa muddatli majburiyatlar, overdraft bilan.
# 20X3
  Aylanma aktivlar: $21,000 + $19,400 + $2,900 = $43,300
  Qisqa muddatli majburiyatlar: $23,500
  $43,300 / $23,500 = 1.84:1
# 20X2
  Aylanma aktivlar: $19,000 + $22,600 = $41,600
  Qisqa muddatli majburiyatlar: $21,400 + overdraft $600 = $22,000
  $41,600 / $22,000 = 1.89:1
= Javob: 20X3 1.84:1, 20X2 1.89:1
! Ko'p uchraydigan xato: 1.94:1 20X2 overdraftini unutadi. 0.95:1 va 1.03:1 zaxirani chiqaradi (tezkor likvidlik).`,
      },
      options: [
        '20X3: 1.84:1, 20X2: 1.89:1',
        '20X3: 1.84:1, 20X2: 1.94:1',
        '20X3: 0.95:1, 20X2: 1.03:1',
        '20X3: 0.54:1, 20X2: 0.53:1',
      ],
      correctIndex: 0,
      table: {
        head: ['', '20X3 $', '20X2 $'],
        rows: [
          ['Inventory', '21,000', '19,000'],
          ['Trade receivables', '19,400', '22,600'],
          ['Cash', '2,900', '-'],
          ['Trade payables', '23,500', '21,400'],
          ['Bank overdraft', '-', '600'],
        ],
      },
    },
    {
      id: 'ch18-q535',
      kitRef: 535,
      topicId: 'chapter-18',
      type: 'matrix',
      text: 'State whether this statement is true or false.',
      explanation: {
        en: `Check the statement.
- A new long-term loan with profit unchanged raises ROCE: FALSE. The loan adds to capital employed (the bottom of the fraction). Same profit on a bigger base means ROCE FALLS.`,
        ru: `Проверим утверждение.
- Новый долгосрочный заём при той же прибыли повышает ROCE: НЕВЕРНО. Заём увеличивает задействованный капитал (знаменатель). Та же прибыль на большую базу — ROCE ПАДАЕТ.`,
        uz: `Fikrni tekshiramiz.
- Foyda o'zgarmasa, yangi uzoq muddatli qarz ROCE ni oshiradi: NOTO'G'RI. Qarz jalb qilingan kapitalni (maxrajni) oshiradi. Kattaroq asosga o'sha foyda — ROCE TUSHADI.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Taking out a new long-term loan during the year, with profit unchanged, would increase return on capital employed',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch18-q536',
      kitRef: 536,
      topicId: 'chapter-18',
      type: 'single',
      text: 'What is the debt/equity ratio for each year?',
      explanation: {
        en: `Debt/equity = long-term debt / equity. The overdraft is current, so it is left out.
# Step 1: Equity
  20X8: $60,000 + $8,000 + $32,000 = $100,000
  20X7: $60,000 + $8,000 + $42,000 = $110,000
# Step 2: Ratio
  20X8: $6,000 / $100,000 = 6.00%
  20X7: $7,700 / $110,000 = 7.00%
= Answer: 20X8 6.00%, 20X7 7.00%
! Common trap: 8.50%/7.82% add the overdraft; 5.66%/6.54% divide by equity + debt (that is gearing); 7.00%/6.00% swaps the years.`,
        ru: `Долг/капитал = долгосрочный долг / капитал. Овердрафт краткосрочный, его не берём.
# Шаг 1: Капитал
  20X8: $60,000 + $8,000 + $32,000 = $100,000
  20X7: $60,000 + $8,000 + $42,000 = $110,000
# Шаг 2: Коэффициент
  20X8: $6,000 / $100,000 = 6.00%
  20X7: $7,700 / $110,000 = 7.00%
= Ответ: 20X8 6.00%, 20X7 7.00%
! Частая ошибка: 8.50%/7.82% прибавляют овердрафт; 5.66%/6.54% делят на капитал + долг (это рычаг); 7.00%/6.00% путает годы.`,
        uz: `Qarz/kapital = uzoq muddatli qarz / kapital. Overdraft qisqa muddatli, olinmaydi.
# 1-qadam: Kapital
  20X8: $60,000 + $8,000 + $32,000 = $100,000
  20X7: $60,000 + $8,000 + $42,000 = $110,000
# 2-qadam: Koeffitsient
  20X8: $6,000 / $100,000 = 6.00%
  20X7: $7,700 / $110,000 = 7.00%
= Javob: 20X8 6.00%, 20X7 7.00%
! Ko'p uchraydigan xato: 8.50%/7.82% overdraftni qo'shadi; 5.66%/6.54% kapital + qarzga bo'ladi (bu leveraj); 7.00%/6.00% yillarni almashtiradi.`,
      },
      options: [
        '20X8: 8.50%, 20X7: 7.82%',
        '20X8: 5.66%, 20X7: 6.54%',
        '20X8: 6.00%, 20X7: 7.00%',
        '20X8: 7.00%, 20X7: 6.00%',
      ],
      correctIndex: 2,
      table: {
        head: ['', '20X8 $', '20X7 $'],
        rows: [
          ['Equity shares', '60,000', '60,000'],
          ['Share premium', '8,000', '8,000'],
          ['Retained earnings', '32,000', '42,000'],
          ['10% bank loan (non-current)', '6,000', '7,700'],
          ['Bank overdraft', '2,500', '900'],
        ],
      },
    },
    {
      id: 'ch18-q537',
      kitRef: 537,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Which of these is most likely to increase the receivables collection period?',
      explanation: {
        en: `Receivables days rise when customers pay SLOWER.
- 3% discount for paying within 10 days: customers pay faster. Days FALL.
- Stricter credit checks: fewer slow payers. Days FALL.
- Credit control falling behind on chasing: customers pay later. Days RISE. RIGHT.
- More sales on the same terms: receivables and sales rise together, so days stay the same.
= Answer: the credit control team falling behind on chasing overdue invoices`,
        ru: `Дни дебиторов растут, когда покупатели платят МЕДЛЕННЕЕ.
- Скидка 3% за оплату в 10 дней: платят быстрее. Дни ПАДАЮТ.
- Строже проверка кредитоспособности: меньше медленных плательщиков. Дни ПАДАЮТ.
- Отдел контроля отстаёт с напоминаниями: платят позже. Дни РАСТУТ. ВЕРНО.
- Больше продаж на тех же условиях: дебиторы и продажи растут вместе, дни те же.
= Ответ: отдел кредитного контроля отстаёт с напоминаниями о просроченных счетах`,
        uz: `Debitorlar kunlari mijozlar SEKINROQ to'laganda oshadi.
- 10 kun ichida to'lash uchun 3% chegirma: tezroq to'laydi. Kunlar KAMAYADI.
- Qattiqroq kredit tekshiruvi: sekin to'lovchilar kamroq. Kunlar KAMAYADI.
- Kredit nazorati eslatishda orqada qoladi: kechroq to'laydi. Kunlar OSHADI. TO'G'RI.
- O'sha shartlarda ko'proq sotuv: debitorlar va sotuv birga oshadi, kunlar o'sha-o'sha.
= Javob: kredit nazorati jamoasi muddati o'tgan hisoblarni eslatishda orqada qolishi`,
      },
      options: [
        'Offering customers a 3% discount if they pay within 10 days',
        'Running stricter credit checks before accepting new customers',
        'The credit control team falling behind on chasing overdue invoices',
        'Selling a larger volume of goods on the same credit terms',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch18-q538',
      kitRef: 538,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Which of these is most likely to reduce the payables payment period?',
      explanation: {
        en: `Payables days fall when WE pay suppliers FASTER.
- Discount to customers for paying fast: affects receivables, not payables. WRONG.
- Paying suppliers within 10 days for a discount: suppliers are paid sooner. Days FALL. RIGHT.
- Buying more for cash: does not change how fast credit suppliers are paid. WRONG.
- More credit purchases on the same terms: payables and purchases rise together. WRONG.
= Answer: paying suppliers within 10 days to take an early settlement discount`,
        ru: `Дни кредиторов падают, когда МЫ платим поставщикам БЫСТРЕЕ.
- Скидка покупателям за быструю оплату: влияет на дебиторов, а не кредиторов. НЕВЕРНО.
- Оплата поставщикам в 10 дней ради скидки: поставщикам платят раньше. Дни ПАДАЮТ. ВЕРНО.
- Больше покупок за наличные: не меняет скорость оплаты кредитным поставщикам. НЕВЕРНО.
- Больше закупок в кредит на тех же условиях: кредиторы и закупки растут вместе. НЕВЕРНО.
= Ответ: оплата поставщикам в течение 10 дней ради скидки за раннюю оплату`,
        uz: `Kreditorlar kunlari BIZ yetkazib beruvchilarga TEZROQ to'laganda kamayadi.
- Mijozlarga tez to'lash uchun chegirma: debitorlarga ta'sir qiladi, kreditorlarga emas. NOTO'G'RI.
- Chegirma uchun yetkazib beruvchilarga 10 kun ichida to'lash: ularga tezroq to'lanadi. Kunlar KAMAYADI. TO'G'RI.
- Naqdga ko'proq xarid: kredit yetkazib beruvchilarga to'lash tezligini o'zgartirmaydi. NOTO'G'RI.
- O'sha shartlarda ko'proq kreditga xarid: kreditorlar va xaridlar birga oshadi. NOTO'G'RI.
= Javob: muddatidan oldin to'lov chegirmasi uchun yetkazib beruvchilarga 10 kun ichida to'lash`,
      },
      options: [
        'Giving customers a discount for paying within 10 days',
        'Paying suppliers within 10 days to take an early settlement discount',
        'Buying a larger share of goods for cash rather than on credit',
        'Buying more goods on credit on the same terms as before',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch18-q539',
      kitRef: 539,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Which of these is most likely to increase the inventory holding period?',
      explanation: {
        en: `Inventory days rise when MORE goods sit in stock at the year end.
- Scrapping slow-moving lines: less inventory. Days FALL.
- Stocking up before a promotion: more inventory at the year end. Days RISE. RIGHT.
- Ordering only when a customer orders: less inventory. Days FALL.
- Tighter ordering controls: less inventory. Days FALL.
= Answer: stocking up ahead of a big sales promotion`,
        ru: `Дни запасов растут, когда на конец года на складе БОЛЬШЕ товара.
- Списание медленно продающихся позиций: запасов меньше. Дни ПАДАЮТ.
- Закупка впрок перед акцией: запасов на конец года больше. Дни РАСТУТ. ВЕРНО.
- Заказ только под заказ покупателя: запасов меньше. Дни ПАДАЮТ.
- Строже контроль заказов: запасов меньше. Дни ПАДАЮТ.
= Ответ: закупка впрок перед крупной акцией`,
        uz: `Zaxira kunlari yil oxirida omborda KO'PROQ tovar bo'lganda oshadi.
- Sekin sotiladigan mahsulotlarni chiqarib tashlash: zaxira kamroq. Kunlar KAMAYADI.
- Aksiyadan oldin zaxira to'plash: yil oxirida zaxira ko'proq. Kunlar OSHADI. TO'G'RI.
- Faqat mijoz buyurtma berganda buyurtma qilish: zaxira kamroq. Kunlar KAMAYADI.
- Buyurtmani qattiqroq nazorat qilish: zaxira kamroq. Kunlar KAMAYADI.
= Javob: katta aksiyadan oldin zaxira to'plash`,
      },
      options: [
        'Writing off and scrapping slow-moving product lines',
        'Stocking up ahead of a big sales promotion planned for next quarter',
        'Ordering from a dependable supplier only once a customer has ordered',
        'Tightening the process for requesting and ordering goods',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch18-q540',
      kitRef: 540,
      topicId: 'chapter-18',
      type: 'number',
      text: 'A business has an inventory turnover of 7.3 times a year. What is its average inventory holding period, in days?',
      explanation: {
        en: `Turning "times a year" into days: divide the days in a year by the times.
# Days
  365 / 7.3 = 50 days
= Answer: 50 days
! Common trap: multiplying (7.3 x 365). Goods that turn over 7.3 times a year stay about 50 days each time.`,
        ru: `Перевод «раз в год» в дни: делим дни года на число раз.
# Дни
  365 / 7.3 = 50 дней
= Ответ: 50 дней
! Частая ошибка: умножать (7.3 x 365). Товар, оборачивающийся 7.3 раза в год, лежит около 50 дней каждый раз.`,
        uz: `«Yiliga marta»ni kunga aylantirish: yildagi kunlarni martaga bo'lamiz.
# Kunlar
  365 / 7.3 = 50 kun
= Javob: 50 kun
! Ko'p uchraydigan xato: ko'paytirish (7.3 x 365). Yiliga 7.3 marta aylanadigan tovar har safar taxminan 50 kun turadi.`,
      },
      correctValue: 50,
      answerText: '50 days',
      unit: 'days',
    },
    {
      id: 'ch18-q541',
      kitRef: 541,
      topicId: 'chapter-18',
      type: 'single',
      text: 'During the year a company made a bonus issue of shares. What is the effect on its gearing ratio?',
      explanation: {
        en: `A bonus issue moves an amount from reserves into share capital. Both are equity.
# Equity
  Total equity is the SAME (one part up, another down)
# Debt
  Unchanged
= Answer: there is no change
! Common trap: thinking more shares means more equity. No cash comes in, so the total does not change.`,
        ru: `Бонусная эмиссия переносит сумму из резервов в акционерный капитал. Оба — капитал.
# Капитал
  Общий капитал ТОТ ЖЕ (одна часть растёт, другая падает)
# Долг
  Не меняется
= Ответ: без изменений
! Частая ошибка: думать, что больше акций — больше капитала. Денег не поступает, итог не меняется.`,
        uz: `Bonus emissiya summani rezervlardan ustav kapitaliga ko'chiradi. Ikkalasi ham kapital.
# Kapital
  Jami kapital O'SHA (bir qismi oshadi, boshqasi kamayadi)
# Qarz
  O'zgarmaydi
= Javob: o'zgarish yo'q
! Ko'p uchraydigan xato: ko'proq aksiya — ko'proq kapital deb o'ylash. Pul kirmaydi, jami o'zgarmaydi.`,
      },
      options: [
        'It increases',
        'It decreases',
        'There is no change',
        'It cannot be determined from the information given',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch18-q542',
      kitRef: 542,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company\'s ROCE rose from 18% last year to 22% this year. Which of these could explain the rise? (1) It repaid part of its long-term loan. (2) It improved its operating profit margin. (3) It issued shares for cash near the year end to buy new equipment.',
      explanation: {
        en: `ROCE = profit / capital employed. It rises if profit rises OR capital employed falls.
- (1) Repaying part of the loan: capital employed falls. ROCE RISES. Could explain it.
- (2) Better operating margin: more profit from the same sales. ROCE RISES. Could explain it.
- (3) Issuing shares near the year end: capital employed rises before the new equipment earns anything. ROCE FALLS. Cannot explain it.
= Answer: 1 and 2 only`,
        ru: `ROCE = прибыль / задействованный капитал. Он растёт, если растёт прибыль ИЛИ падает капитал.
- (1) Частичное погашение займа: задействованный капитал падает. ROCE РАСТЁТ. Может объяснить.
- (2) Лучше операционная маржа: больше прибыли с тех же продаж. ROCE РАСТЁТ. Может объяснить.
- (3) Выпуск акций перед концом года: капитал растёт, а новое оборудование ещё ничего не принесло. ROCE ПАДАЕТ. Не объясняет.
= Ответ: только 1 и 2`,
        uz: `ROCE = foyda / jalb qilingan kapital. U foyda oshganda YOKI kapital kamayganda oshadi.
- (1) Qarzning bir qismini qaytarish: jalb qilingan kapital kamayadi. ROCE OSHADI. Tushuntira oladi.
- (2) Yaxshiroq operatsion marja: o'sha sotuvdan ko'proq foyda. ROCE OSHADI. Tushuntira oladi.
- (3) Yil oxiriga yaqin aksiya chiqarish: kapital oshadi, yangi uskuna hali hech narsa keltirmagan. ROCE TUSHADI. Tushuntira olmaydi.
= Javob: faqat 1 va 2`,
      },
      options: ['1, 2 and 3', '2 and 3 only', '1 and 3 only', '1 and 2 only'],
      correctIndex: 3,
    },
    {
      id: 'ch18-q543',
      kitRef: 543,
      topicId: 'chapter-18',
      type: 'single',
      text: 'During the year a company made a rights issue of shares, fully taken up. What was the effect on its gearing ratio?',
      explanation: {
        en: `A rights issue sells new shares for CASH.
# Equity
  Rises by the cash received
# Debt
  Unchanged
# Gearing
  Debt is now a smaller share of the total: it DECREASES
= Answer: it decreased
! Common trap: mixing it up with a bonus issue, where no cash comes in and gearing stays the same.`,
        ru: `Эмиссия прав продаёт новые акции за ДЕНЬГИ.
# Капитал
  Растёт на полученные деньги
# Долг
  Не меняется
# Рычаг
  Доля долга в итоге меньше: он УМЕНЬШАЕТСЯ
= Ответ: уменьшился
! Частая ошибка: спутать с бонусной эмиссией, где денег не поступает и рычаг не меняется.`,
        uz: `Huquqli emissiya yangi aksiyalarni PULGA sotadi.
# Kapital
  Olingan pul miqdorida oshadi
# Qarz
  O'zgarmaydi
# Leveraj
  Qarzning jamidagi ulushi kichrayadi: u KAMAYADI
= Javob: kamaydi
! Ko'p uchraydigan xato: bonus emissiya bilan adashtirish, unda pul kirmaydi va leveraj o'zgarmaydi.`,
      },
      options: [
        'It cannot be determined from the information given',
        'It increased',
        'It decreased',
        'It stayed the same',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch18-q544',
      kitRef: 544,
      topicId: 'chapter-18',
      type: 'single',
      text: 'To win more sales, a company offered its major customers longer credit. Many of them used it, but sales volumes did not rise. What was the effect on the current ratio?',
      explanation: {
        en: `Longer credit means customers owe more at the year end.
# Receivables
  Higher, because customers pay later
# Everything else
  Sales did not rise; nothing else is said to change
# Current ratio
  Current assets up, current liabilities the same: the ratio INCREASES
= Answer: it increased
! Common trap: thinking slower customers must make liquidity "worse". The current ratio only sees the bigger receivables balance.`,
        ru: `Более длинный кредит — покупатели должны больше на конец года.
# Дебиторы
  Выше, потому что платят позже
# Всё остальное
  Продажи не выросли; другие изменения не указаны
# Текущая ликвидность
  Оборотные активы выросли, обязательства те же: коэффициент РАСТЁТ
= Ответ: увеличился
! Частая ошибка: думать, что медленные покупатели обязательно «ухудшают» ликвидность. Коэффициент видит только больший остаток дебиторов.`,
        uz: `Uzunroq kredit — yil oxirida mijozlar ko'proq qarz.
# Debitorlar
  Ko'proq, chunki kechroq to'laydi
# Qolgan hammasi
  Sotuv oshmagan; boshqa o'zgarish aytilmagan
# Joriy likvidlik
  Aylanma aktivlar oshdi, majburiyatlar o'sha: koeffitsient OSHADI
= Javob: oshdi
! Ko'p uchraydigan xato: sekin mijozlar likvidlikni albatta «yomonlashtiradi» deb o'ylash. Koeffitsient faqat kattaroq debitorlar qoldig'ini ko'radi.`,
      },
      options: ['No change', 'It cannot be determined from the information given', 'It increased', 'It decreased'],
      correctIndex: 2,
    },
    {
      id: 'ch18-q545',
      kitRef: 545,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company raised $3 million by issuing equity shares and immediately used it to repay a $3 million loan that was not due for another four years. What was the effect on its debt/equity ratio?',
      explanation: {
        en: `Two changes, both pushing the same way.
# Equity
  Up by $3 million (new shares)
# Long-term debt
  Down by $3 million (loan repaid)
# Debt/equity
  Smaller top, bigger bottom: the ratio DECREASES
= Answer: it decreased
! Common trap: "no change" because the amounts are equal. They are equal, but they go in opposite directions on the two sides of the ratio.`,
        ru: `Два изменения, оба в одну сторону.
# Капитал
  Растёт на $3 млн (новые акции)
# Долгосрочный долг
  Падает на $3 млн (заём погашен)
# Долг/капитал
  Числитель меньше, знаменатель больше: коэффициент ПАДАЕТ
= Ответ: уменьшился
! Частая ошибка: «без изменений», потому что суммы равны. Они равны, но двигаются в разные стороны в двух частях дроби.`,
        uz: `Ikki o'zgarish, ikkalasi bir tomonga.
# Kapital
  $3 mln ga oshadi (yangi aksiyalar)
# Uzoq muddatli qarz
  $3 mln ga kamayadi (qarz qaytarildi)
# Qarz/kapital
  Surat kichikroq, maxraj kattaroq: koeffitsient KAMAYADI
= Javob: kamaydi
! Ko'p uchraydigan xato: summalar teng bo'lgani uchun «o'zgarishsiz» deyish. Ular teng, lekin kasrning ikki qismida qarama-qarshi tomonga harakatlanadi.`,
      },
      options: ['It cannot be determined from the information given', 'It increased', 'It decreased', 'No change'],
      correctIndex: 2,
    },
    {
      id: 'ch18-q546',
      kitRef: 546,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Using the ratios in the table, which ONE statement is true?',
      explanation: {
        en: `Read each ratio's direction.
- Payables days 40 → 52: suppliers are paid LATER. TRUE.
- Current ratio 1.1 → 1.4: liquidity IMPROVED, not worsened. FALSE.
- Inventory days 41 → 33: goods sell faster, so inventory was managed MORE efficiently. FALSE.
- Receivables days 48 → 55: customers pay SLOWER, not faster. FALSE.
= Answer: it is taking longer to pay its suppliers in 20X9`,
        ru: `Посмотрим направление каждого коэффициента.
- Дни кредиторов 40 → 52: поставщикам платят ПОЗЖЕ. ВЕРНО.
- Текущая ликвидность 1.1 → 1.4: ликвидность УЛУЧШИЛАСЬ, а не ухудшилась. НЕВЕРНО.
- Дни запасов 41 → 33: товар продаётся быстрее, запасами управляли ЛУЧШЕ. НЕВЕРНО.
- Дни дебиторов 48 → 55: покупатели платят МЕДЛЕННЕЕ, а не быстрее. НЕВЕРНО.
= Ответ: в 20X9 компания дольше расплачивается с поставщиками`,
        uz: `Har bir koeffitsient yo'nalishini o'qiymiz.
- Kreditorlar kunlari 40 → 52: yetkazib beruvchilarga KECHROQ to'lanadi. TO'G'RI.
- Joriy likvidlik 1.1 → 1.4: likvidlik YAXSHILANGAN, yomonlashmagan. NOTO'G'RI.
- Zaxira kunlari 41 → 33: tovar tezroq sotiladi, zaxira YAXSHIROQ boshqarilgan. NOTO'G'RI.
- Debitorlar kunlari 48 → 55: mijozlar SEKINROQ to'laydi, tezroq emas. NOTO'G'RI.
= Javob: 20X9 da yetkazib beruvchilarga to'lash uzoqroq vaqt olmoqda`,
      },
      options: [
        'It is taking longer to pay its suppliers in 20X9 than in 20X8',
        'Its liquidity position worsened in 20X9',
        'It managed inventory less efficiently in 20X9 than in 20X8',
        'It collected cash from customers more quickly in 20X9 than in 20X8',
      ],
      correctIndex: 0,
      table: {
        head: ['', '20X9', '20X8'],
        rows: [
          ['Current ratio', '1.4:1', '1.1:1'],
          ['Receivables collection period', '55 days', '48 days'],
          ['Payables payment period', '52 days', '40 days'],
          ['Inventory holding period', '33 days', '41 days'],
        ],
      },
    },
    {
      id: 'ch18-q547',
      kitRef: 547,
      topicId: 'chapter-18',
      type: 'single',
      text: 'Revenue was $584,000 in 20X6 and $525,600 in 20X5. Trade receivables were $36,500 and $43,800. Which conclusions can be drawn? (1) Credit customers are taking less time to pay. (2) Profitability has improved because revenue rose. (3) Receivables days have worsened. (4) Credit control appears to have become more effective.',
      explanation: {
        en: `Work out receivables days for both years, then test each conclusion.
# Receivables days
  20X5: $43,800 / $525,600 x 365 = 30 days
  20X6: $36,500 / $584,000 x 365 = 23 days
# Test each conclusion
  (1) Customers take less time to pay: TRUE (30 → 23)
  (2) Profitability improved because revenue rose: FALSE. Higher sales say nothing about profit
  (3) Receivables days worsened: FALSE. They fell, which is better
  (4) Credit control seems more effective: TRUE
= Answer: 1 and 4`,
        ru: `Посчитаем дни дебиторов за оба года и проверим каждый вывод.
# Дни дебиторов
  20X5: $43,800 / $525,600 x 365 = 30 дней
  20X6: $36,500 / $584,000 x 365 = 23 дня
# Проверим каждый вывод
  (1) Покупатели платят быстрее: ВЕРНО (30 → 23)
  (2) Рентабельность выросла, потому что выросла выручка: НЕВЕРНО. Рост продаж ничего не говорит о прибыли
  (3) Дни дебиторов ухудшились: НЕВЕРНО. Они упали, это лучше
  (4) Кредитный контроль, похоже, стал эффективнее: ВЕРНО
= Ответ: 1 и 4`,
        uz: `Ikkala yil uchun debitorlar kunlarini hisoblab, har bir xulosani tekshiramiz.
# Debitorlar kunlari
  20X5: $43,800 / $525,600 x 365 = 30 kun
  20X6: $36,500 / $584,000 x 365 = 23 kun
# Har bir xulosani tekshiramiz
  (1) Mijozlar tezroq to'laydi: TO'G'RI (30 → 23)
  (2) Tushum oshgani uchun rentabellik yaxshilangan: NOTO'G'RI. Sotuv oshishi foyda haqida hech narsa aytmaydi
  (3) Debitorlar kunlari yomonlashgan: NOTO'G'RI. Ular kamaygan, bu yaxshiroq
  (4) Kredit nazorati samaraliroq ko'rinadi: TO'G'RI
= Javob: 1 va 4`,
      },
      options: ['1 and 4', '3 and 4', '1, 2 and 3', '1, 2 and 4'],
      correctIndex: 0,
    },
    {
      id: 'ch18-q548',
      kitRef: 548,
      topicId: 'chapter-18',
      type: 'multi',
      text: 'Which TWO statements about accounting ratios are correct?',
      explanation: {
        en: `Ratios are a useful tool, but not the whole story.
- They help users focus on the most important matters: TRUE.
- Only useful for comparing with last year: FALSE. Competitors and industry averages help too.
- Ratios alone give everything needed: FALSE. Notes, loan terms and other facts matter.
- They cover profitability, liquidity, efficiency and financial position: TRUE.
= Answer: they help users focus on significant matters, and they cover all four areas`,
        ru: `Коэффициенты — полезный инструмент, но не вся картина.
- Помогают пользователям сосредоточиться на главном: ВЕРНО.
- Полезны только для сравнения с прошлым годом: НЕВЕРНО. Помогают и конкуренты, и средние по отрасли.
- Одни коэффициенты дают всё нужное: НЕВЕРНО. Важны примечания, условия займов и другие факты.
- Охватывают рентабельность, ликвидность, эффективность и финансовое положение: ВЕРНО.
= Ответ: помогают сосредоточиться на главном и охватывают все четыре области`,
        uz: `Koeffitsientlar foydali vosita, lekin to'liq manzara emas.
- Foydalanuvchilarga eng muhim masalalarga e'tibor qaratishga yordam beradi: TO'G'RI.
- Faqat o'tgan yil bilan solishtirish uchun foydali: NOTO'G'RI. Raqobatchilar va soha o'rtachalari ham yordam beradi.
- Faqat koeffitsientlar kerakli hamma narsani beradi: NOTO'G'RI. Izohlar, qarz shartlari va boshqa faktlar muhim.
- Rentabellik, likvidlik, samaradorlik va moliyaviy holatni qamraydi: TO'G'RI.
= Javob: muhim masalalarga e'tibor qaratishga yordam beradi va to'rt sohani qamraydi`,
      },
      options: [
        'Ratios help users concentrate on the most significant matters',
        'Ratios are only useful for comparing one year with the year before',
        'Ratios alone give everything needed to interpret a company\'s accounts',
        'Ratios can give information about profitability, liquidity, efficiency and financial position',
      ],
      correctIndices: [0, 3],
    },
    {
      id: 'ch18-q549',
      kitRef: 549,
      topicId: 'chapter-18',
      type: 'multi',
      text: 'Which TWO statements about accounting ratios are correct?',
      explanation: {
        en: `Check each statement.
- Any increase in a ratio is good: FALSE. Higher gearing, for example, means more risk.
- Accounting policies can affect ratios: TRUE. Revaluing assets changes capital employed, gearing and ROCE.
- Interest cover tells whether a dividend will be paid: FALSE. It is about paying interest, not dividends.
- Gearing can show how risky a business is: TRUE. More debt means fixed payments that must be made.
= Answer: accounting policies can affect ratios, and gearing can indicate risk`,
        ru: `Проверим каждое утверждение.
- Любой рост коэффициента хорош: НЕВЕРНО. Например, рост рычага означает больший риск.
- Учётная политика может влиять на коэффициенты: ВЕРНО. Переоценка активов меняет задействованный капитал, рычаг и ROCE.
- Покрытие процентов показывает, будет ли выплачен дивиденд: НЕВЕРНО. Оно о процентах, а не о дивидендах.
- Рычаг может показать, насколько рискован бизнес: ВЕРНО. Больше долга — больше обязательных платежей.
= Ответ: учётная политика влияет на коэффициенты, и рычаг может показывать риск`,
        uz: `Har bir fikrni tekshiramiz.
- Koeffitsientning har qanday oshishi yaxshi: NOTO'G'RI. Masalan, leveraj oshishi ko'proq xavfni bildiradi.
- Hisob siyosati koeffitsientlarga ta'sir qilishi mumkin: TO'G'RI. Aktivlarni qayta baholash jalb qilingan kapital, leveraj va ROCE ni o'zgartiradi.
- Foizlarni qoplash dividend to'lanishini ko'rsatadi: NOTO'G'RI. U foiz haqida, dividend haqida emas.
- Leveraj biznes qanchalik xavfli ekanini ko'rsatishi mumkin: TO'G'RI. Ko'proq qarz — ko'proq majburiy to'lovlar.
= Javob: hisob siyosati koeffitsientlarga ta'sir qiladi va leveraj xavfni ko'rsatishi mumkin`,
      },
      options: [
        'An increase in any ratio is a favourable sign',
        'A business\'s choice of accounting policies can affect its ratios',
        'Interest cover tells an investor whether a dividend will be paid',
        'Gearing can indicate how risky a business is',
      ],
      correctIndices: [1, 3],
    },
    {
      id: 'ch18-q550',
      kitRef: 550,
      topicId: 'chapter-18',
      type: 'single',
      text: 'A company has always used the cost model for its land and buildings. It now decides to revalue them upwards. What is the effect on its current ratio and gearing ratio?',
      explanation: {
        en: `Follow where the revaluation entry goes: Dr Land and buildings, Cr Revaluation surplus.
# Current ratio
  Land is a NON-current asset; the surplus is equity. No current item changes
  Current ratio: UNCHANGED
# Gearing
  Equity rises, debt is the same
  Gearing: FALLS
= Answer: the current ratio is unchanged and gearing falls
! Common trap: thinking a revaluation brings in cash. It is only a change in value on paper.`,
        ru: `Посмотрим, куда идёт запись переоценки: Дт Земля и здания, Кт Резерв переоценки.
# Текущая ликвидность
  Земля — ВНЕоборотный актив; резерв — капитал. Ни одна оборотная статья не меняется
  Текущая ликвидность: НЕ МЕНЯЕТСЯ
# Рычаг
  Капитал растёт, долг тот же
  Рычаг: ПАДАЕТ
= Ответ: текущая ликвидность не меняется, рычаг падает
! Частая ошибка: думать, что переоценка приносит деньги. Это лишь изменение стоимости на бумаге.`,
        uz: `Qayta baholash yozuvi qayerga borishini kuzatamiz: Dt Yer va binolar, Kt Qayta baholash rezervi.
# Joriy likvidlik
  Yer UZOQ muddatli aktiv; rezerv kapital. Hech bir aylanma modda o'zgarmaydi
  Joriy likvidlik: O'ZGARMAYDI
# Leveraj
  Kapital oshadi, qarz o'sha
  Leveraj: TUSHADI
= Javob: joriy likvidlik o'zgarmaydi, leveraj tushadi
! Ko'p uchraydigan xato: qayta baholash pul keltiradi deb o'ylash. Bu faqat qog'ozdagi qiymat o'zgarishi.`,
      },
      options: [
        'Both ratios improve',
        'The current ratio worsens and gearing rises',
        'The current ratio is unchanged and gearing falls',
        'The current ratio improves and gearing rises',
      ],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
