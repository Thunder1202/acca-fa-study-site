'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-07';
  const questions = [
    {
      id: 'ch07-q172',
      kitRef: 172,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A company bought an asset for $200,000 on 1 January 20X4 and depreciated it at 20% on the reducing balance. On 1 January 20X7 it revalued the asset to $250,000. Which entries record the revaluation?',
      explanation: {
        en: `Find the carrying amount on the revaluation date, then the surplus, then split the entry.
# Step 1: Depreciation so far (20% reducing balance)
  Year 1: 20% × $200,000 = $40,000 (left $160,000)
  Year 2: 20% × $160,000 = $32,000 (left $128,000)
  Year 3: 20% × $128,000 = $25,600 (left $102,400)
  Total: $40,000 + $32,000 + $25,600 = $97,600
# Step 2: Revaluation surplus
  $250,000 - $102,400 = $147,600
# Step 3: The entry
  The asset goes from $200,000 to $250,000: Dr Asset $50,000
  Accumulated depreciation is cleared: Dr Accumulated depreciation $97,600
  Cr Revaluation surplus $147,600
= Answer: Dr Asset $50,000, Dr Accumulated depreciation $97,600, Cr Revaluation surplus $147,600`,
        ru: `Найдём балансовую стоимость на дату переоценки, затем резерв, затем разложим проводку.
# Шаг 1: Амортизация до сих пор (уменьшаемый остаток 20%)
  Год 1: 20% × $200,000 = $40,000 (осталось $160,000)
  Год 2: 20% × $160,000 = $32,000 (осталось $128,000)
  Год 3: 20% × $128,000 = $25,600 (осталось $102,400)
  Всего: $40,000 + $32,000 + $25,600 = $97,600
# Шаг 2: Резерв переоценки
  $250,000 - $102,400 = $147,600
# Шаг 3: Проводка
  Актив растёт с $200,000 до $250,000: Дт Актив $50,000
  Накопленная амортизация обнуляется: Дт Накопленная амортизация $97,600
  Кт Резерв переоценки $147,600
= Ответ: Дт Актив $50,000, Дт Накопленная амортизация $97,600, Кт Резерв переоценки $147,600`,
        uz: `Qayta baholash sanasidagi balans qiymatini, keyin rezervni topib, yozuvni ajratamiz.
# 1-qadam: Shu paytgacha amortizatsiya (20% kamayuvchi qoldiq)
  1-yil: 20% × $200,000 = $40,000 (qoldi $160,000)
  2-yil: 20% × $160,000 = $32,000 (qoldi $128,000)
  3-yil: 20% × $128,000 = $25,600 (qoldi $102,400)
  Jami: $40,000 + $32,000 + $25,600 = $97,600
# 2-qadam: Qayta baholash rezervi
  $250,000 - $102,400 = $147,600
# 3-qadam: Yozuv
  Aktiv $200,000 dan $250,000 ga: Dt Aktiv $50,000
  To'plangan amortizatsiya nolga: Dt To'plangan amortizatsiya $97,600
  Kt Qayta baholash rezervi $147,600
= Javob: Dt Aktiv $50,000, Dt To'plangan amortizatsiya $97,600, Kt Qayta baholash rezervi $147,600`,
      },
      options: [
        'Dr Asset $50,000, Cr Revaluation surplus $50,000',
        'Dr Asset $50,000, Dr Accumulated depreciation $97,600, Cr Revaluation surplus $147,600',
        'Dr Revaluation surplus $147,600, Cr Asset $50,000, Cr Accumulated depreciation $97,600',
        'Dr Asset $250,000, Cr Revaluation surplus $250,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch07-q176',
      kitRef: 176,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A non-current asset bought at the start of year 1 for $3,000 was depreciated at 20% a year on the reducing balance. At the start of year 4 it was sold for $1,500. What was the profit or loss on disposal?',
      explanation: {
        en: `Find the carrying amount after three years of 20% reducing balance.
# Step 1: Carrying amount at the start of year 4
  $3,000 × 0.8 = $2,400 (after year 1)
  $2,400 × 0.8 = $1,920 (after year 2)
  $1,920 × 0.8 = $1,536 (after year 3)
# Step 2: Compare with the proceeds
  $1,500 - $1,536 = -$36
= Answer: a loss of $36
! Common trap: a profit of $300 comes from using straight-line (20% of $3,000 each year).`,
        ru: `Найдём балансовую стоимость после трёх лет уменьшаемого остатка 20%.
# Шаг 1: Балансовая стоимость на начало 4-го года
  $3,000 × 0.8 = $2,400 (после 1-го года)
  $2,400 × 0.8 = $1,920 (после 2-го года)
  $1,920 × 0.8 = $1,536 (после 3-го года)
# Шаг 2: Сравниваем с выручкой
  $1,500 - $1,536 = -$36
= Ответ: убыток $36
! Частая ошибка: прибыль $300 получается при линейном методе (20% от $3,000 каждый год).`,
        uz: `20% kamayuvchi qoldiqning uch yilidan keyingi balans qiymatini topamiz.
# 1-qadam: 4-yil boshidagi balans qiymati
  $3,000 × 0.8 = $2,400 (1-yildan keyin)
  $2,400 × 0.8 = $1,920 (2-yildan keyin)
  $1,920 × 0.8 = $1,536 (3-yildan keyin)
# 2-qadam: Tushum bilan solishtiramiz
  $1,500 - $1,536 = -$36
= Javob: $36 zarar
! Ko'p uchraydigan xato: $300 foyda to'g'ri chiziqli usuldan chiqadi (har yili $3,000 ning 20%).`,
      },
      options: ['A profit of $36', 'A profit of $300', 'A loss of $36', 'A loss of $300'],
      correctIndex: 2,
    },
    {
      id: 'ch07-q177',
      kitRef: 177,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A business\'s non-current assets had a carrying amount of $150,000. An asset that cost $15,000 was sold for $11,000, giving a profit of $2,500. What is the carrying amount of the non-current assets after the sale?',
      explanation: {
        en: `Only the carrying amount of the asset sold leaves the total.
# Step 1: Carrying amount of the asset sold
  Profit = proceeds - carrying amount, so carrying amount = proceeds - profit
  $11,000 - $2,500 = $8,500
# Step 2: The new total
  $150,000 - $8,500 = $141,500
= Answer: $141,500
! Common traps: deducting the proceeds ($139,000) or the cost ($135,000).`,
        ru: `Из общей суммы уходит только балансовая стоимость проданного актива.
# Шаг 1: Балансовая стоимость проданного
  Прибыль = выручка - балансовая, значит балансовая = выручка - прибыль
  $11,000 - $2,500 = $8,500
# Шаг 2: Новая общая сумма
  $150,000 - $8,500 = $141,500
= Ответ: $141,500
! Частые ошибки: вычесть выручку ($139,000) или стоимость ($135,000).`,
        uz: `Jamidan faqat sotilgan aktivning balans qiymati chiqadi.
# 1-qadam: Sotilgan aktiv balans qiymati
  Foyda = tushum - balans qiymati, demak balans qiymati = tushum - foyda
  $11,000 - $2,500 = $8,500
# 2-qadam: Yangi jami
  $150,000 - $8,500 = $141,500
= Javob: $141,500
! Ko'p uchraydigan xatolar: tushumni ($139,000) yoki qiymatni ($135,000) ayirish.`,
      },
      options: ['$135,000', '$139,000', '$141,500', '$150,000'],
      correctIndex: 2,
    },
    {
      id: 'ch07-q179',
      kitRef: 179,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A non-current asset was sold for $3,300. It was bought exactly three years earlier for $8,000, with an estimated residual value of $800, and depreciated at 25% a year on the reducing balance. What was the profit or loss on disposal?',
      explanation: {
        en: `Reducing balance takes the % of what is left each year. It ignores the residual value in the calculation.
# Step 1: Carrying amount after 3 years
  $8,000 × 0.75 = $6,000
  $6,000 × 0.75 = $4,500
  $4,500 × 0.75 = $3,375
# Step 2: Compare with the proceeds
  $3,300 - $3,375 = -$75
= Answer: a loss of $75
! Common trap: taking the $800 residual value off first. Reducing balance does not use it.`,
        ru: `Уменьшаемый остаток берёт % от остатка каждый год. Ликвидационную стоимость в расчёте не используют.
# Шаг 1: Балансовая стоимость через 3 года
  $8,000 × 0.75 = $6,000
  $6,000 × 0.75 = $4,500
  $4,500 × 0.75 = $3,375
# Шаг 2: Сравниваем с выручкой
  $3,300 - $3,375 = -$75
= Ответ: убыток $75
! Частая ошибка: сначала вычесть ликвидационную стоимость $800. Метод уменьшаемого остатка её не использует.`,
        uz: `Kamayuvchi qoldiq har yili qolganining % ini oladi. Tugatish qiymati hisobda ishlatilmaydi.
# 1-qadam: 3 yildan keyingi balans qiymati
  $8,000 × 0.75 = $6,000
  $6,000 × 0.75 = $4,500
  $4,500 × 0.75 = $3,375
# 2-qadam: Tushum bilan solishtiramiz
  $3,300 - $3,375 = -$75
= Javob: $75 zarar
! Ko'p uchraydigan xato: avval $800 tugatish qiymatini ayirish. Kamayuvchi qoldiq uni ishlatmaydi.`,
      },
      options: ['A profit of $75', 'A loss of $825', 'A loss of $75', 'A loss of $1,200'],
      correctIndex: 2,
    },
    {
      id: 'ch07-q180',
      kitRef: 180,
      topicId: 'chapter-07',
      type: 'number',
      text: 'A company holds land and buildings at a cost of $12.6 million with accumulated depreciation of $0.18 million. At the year end it revalues them to $17 million. What is the revaluation surplus? Give your answer in $ million.',
      explanation: {
        en: `Surplus = revalued amount - carrying amount.
# Step 1: Carrying amount
  Cost $12.6m - accumulated depreciation $0.18m = $12.42m
# Step 2: Surplus
  $17m - $12.42m = $4.58m
= Answer: $4.58 million
! Common trap: $17m - $12.6m = $4.4m forgets the accumulated depreciation.`,
        ru: `Резерв = переоценённая стоимость - балансовая стоимость.
# Шаг 1: Балансовая стоимость
  Стоимость $12.6m - накопленная амортизация $0.18m = $12.42m
# Шаг 2: Резерв
  $17m - $12.42m = $4.58m
= Ответ: $4.58 миллиона
! Частая ошибка: $17m - $12.6m = $4.4m — забыта накопленная амортизация.`,
        uz: `Rezerv = qayta baholangan qiymat - balans qiymati.
# 1-qadam: Balans qiymati
  Qiymat $12.6m - to'plangan amortizatsiya $0.18m = $12.42m
# 2-qadam: Rezerv
  $17m - $12.42m = $4.58m
= Javob: $4.58 million
! Ko'p uchraydigan xato: $17m - $12.6m = $4.4m — to'plangan amortizatsiya unutilgan.`,
      },
      correctValue: 4.58,
      answerText: '$4.58 million',
    },
    {
      id: 'ch07-q182',
      kitRef: 182,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A company bought a car for $15,000 on 1 April 20X1. It depreciates cars at 20% straight line with no residual value, charging a full year in the year of purchase and none in the year of sale. On 1 August 20X4 the car was traded in for a new one at an agreed allowance of $5,500. What was the profit or loss on disposal in the year ended 31 December 20X4?',
      explanation: {
        en: `Follow the policy exactly: full year when bought, nothing in the year it is sold.
# Step 1: Which years get depreciation?
  20X1, 20X2, 20X3 yes. 20X4 (year of sale) no.
# Step 2: Accumulated depreciation
  20% × $15,000 = $3,000 a year × 3 = $9,000
# Step 3: Carrying amount
  $15,000 - $9,000 = $6,000
# Step 4: Compare with the trade-in allowance (the proceeds)
  $5,500 - $6,000 = -$500
= Answer: a loss of $500
! Common trap: charging 20X4 too gives a carrying amount of $3,000 and a wrong profit of $2,500.`,
        ru: `Следуйте политике точно: полный год при покупке, ничего в год продажи.
# Шаг 1: За какие годы амортизация?
  20X1, 20X2, 20X3 — да. 20X4 (год продажи) — нет.
# Шаг 2: Накопленная амортизация
  20% × $15,000 = $3,000 в год × 3 = $9,000
# Шаг 3: Балансовая стоимость
  $15,000 - $9,000 = $6,000
# Шаг 4: Сравниваем с зачётом (выручкой)
  $5,500 - $6,000 = -$500
= Ответ: убыток $500
! Частая ошибка: начислить и за 20X4 — балансовая станет $3,000 и выйдет неверная прибыль $2,500.`,
        uz: `Siyosatga aniq amal qiling: olingan yili to'liq yil, sotilgan yili hech narsa.
# 1-qadam: Qaysi yillarga amortizatsiya?
  20X1, 20X2, 20X3 — ha. 20X4 (sotilgan yil) — yo'q.
# 2-qadam: To'plangan amortizatsiya
  20% × $15,000 = yiliga $3,000 × 3 = $9,000
# 3-qadam: Balans qiymati
  $15,000 - $9,000 = $6,000
# 4-qadam: Hisobga olingan summa (tushum) bilan solishtiramiz
  $5,500 - $6,000 = -$500
= Javob: $500 zarar
! Ko'p uchraydigan xato: 20X4 ni ham hisoblash balans qiymatini $3,000 qiladi va noto'g'ri $2,500 foyda beradi.`,
      },
      options: ['A loss of $1,000', 'A loss of $500', 'A profit of $500', 'A profit of $2,500'],
      correctIndex: 1,
    },
    {
      id: 'ch07-q183',
      kitRef: 183,
      topicId: 'chapter-07',
      type: 'number',
      text: 'A company\'s plant cost $500,000 with accumulated depreciation of $200,000 at 30 September 20X2. During the year, plant that cost $50,000 and had a carrying amount of $20,000 was sold for $26,000, and new plant costing $100,000 was bought. Depreciation is 10% straight line, a full year in the year of purchase and none in the year of sale. What is the carrying amount of plant at 30 September 20X3?',
      explanation: {
        en: `Work out the closing cost and the closing accumulated depreciation separately.
# Step 1: Closing cost
  $500,000 - $50,000 (sold) + $100,000 (bought) = $550,000
# Step 2: Accumulated depreciation on the plant sold
  Its cost $50,000 - its carrying amount $20,000 = $30,000
# Step 3: This year's charge (full year on plant held at the year end)
  10% × $550,000 = $55,000
# Step 4: Closing accumulated depreciation
  $200,000 - $30,000 + $55,000 = $225,000
= Answer: carrying amount $550,000 - $225,000 = $325,000
The sale proceeds of $26,000 are not needed for this question.`,
        ru: `Посчитаем отдельно стоимость на конец и накопленную амортизацию на конец.
# Шаг 1: Стоимость на конец
  $500,000 - $50,000 (продано) + $100,000 (куплено) = $550,000
# Шаг 2: Накопленная амортизация по проданному
  Его стоимость $50,000 - балансовая $20,000 = $30,000
# Шаг 3: Амортизация года (полный год на оборудование на конец года)
  10% × $550,000 = $55,000
# Шаг 4: Накопленная амортизация на конец
  $200,000 - $30,000 + $55,000 = $225,000
= Ответ: балансовая стоимость $550,000 - $225,000 = $325,000
Выручка от продажи $26,000 для этого вопроса не нужна.`,
        uz: `Yakuniy qiymat va yakuniy to'plangan amortizatsiyani alohida hisoblaymiz.
# 1-qadam: Yakuniy qiymat
  $500,000 - $50,000 (sotilgan) + $100,000 (olingan) = $550,000
# 2-qadam: Sotilgan uskuna to'plangan amortizatsiyasi
  Qiymati $50,000 - balans qiymati $20,000 = $30,000
# 3-qadam: Yil amortizatsiyasi (yil oxiridagi uskunaga to'liq yil)
  10% × $550,000 = $55,000
# 4-qadam: Yakuniy to'plangan amortizatsiya
  $200,000 - $30,000 + $55,000 = $225,000
= Javob: balans qiymati $550,000 - $225,000 = $325,000
$26,000 sotuv tushumi bu savol uchun kerak emas.`,
      },
      correctValue: 325000,
      answerText: '$325,000',
    },
    {
      id: 'ch07-q185',
      kitRef: 185,
      topicId: 'chapter-07',
      type: 'number',
      text: 'At 1 January 20X8 a company had a building that cost $400,000 with a carrying amount of $324,000. On 1 July 20X8 it was valued at $600,000 and the company included this valuation in its books. Buildings are depreciated at 2% straight line. What is the depreciation charge for the year ended 31 December 20X8?',
      explanation: {
        en: `The revaluation happens half-way through the year, so split the year in two.
# Step 1: First six months (old basis, on cost)
  2% × $400,000 × 6/12 = $4,000
# Step 2: How old is the building on 1 July?
  Accumulated depreciation: $400,000 - $324,000 = $76,000 at 1 January, + $4,000 = $80,000
  Annual charge $8,000, so $80,000 / $8,000 = 10 years used. A 2% rate means a 50-year life, so 40 years remain.
# Step 3: Second six months (new basis)
  $600,000 / 40 × 6/12 = $7,500
= Answer: $4,000 + $7,500 = $11,500`,
        ru: `Переоценка в середине года, поэтому делим год на две части.
# Шаг 1: Первые шесть месяцев (старая база, от стоимости)
  2% × $400,000 × 6/12 = $4,000
# Шаг 2: Сколько лет зданию на 1 июля?
  Накопленная амортизация: $400,000 - $324,000 = $76,000 на 1 января, + $4,000 = $80,000
  В год $8,000, значит $80,000 / $8,000 = 10 лет. Ставка 2% — срок 50 лет, осталось 40.
# Шаг 3: Вторые шесть месяцев (новая база)
  $600,000 / 40 × 6/12 = $7,500
= Ответ: $4,000 + $7,500 = $11,500`,
        uz: `Qayta baholash yil o'rtasida, shuning uchun yilni ikkiga bo'lamiz.
# 1-qadam: Birinchi olti oy (eski asos, qiymatdan)
  2% × $400,000 × 6/12 = $4,000
# 2-qadam: 1 iyulda bino necha yoshda?
  To'plangan amortizatsiya: $400,000 - $324,000 = 1 yanvarda $76,000, + $4,000 = $80,000
  Yiliga $8,000, demak $80,000 / $8,000 = 10 yil. 2% stavka 50 yil muddat demak, 40 yil qoldi.
# 3-qadam: Ikkinchi olti oy (yangi asos)
  $600,000 / 40 × 6/12 = $7,500
= Javob: $4,000 + $7,500 = $11,500`,
      },
      correctValue: 11500,
      answerText: '$11,500',
    },
    {
      id: 'ch07-q187',
      kitRef: 187,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A machine bought on 1 January 20X1 for $50,000 had a useful life of eight years and a residual value of $10,000. It was depreciated straight line on a monthly basis. On 31 December 20X4 it was sold for $26,000. What was the profit or loss on disposal?',
      explanation: {
        en: `Straight-line with a residual value.
# Step 1: Annual charge
  ($50,000 - $10,000) / 8 years = $5,000
# Step 2: After 4 full years (20X1 to 20X4)
  Accumulated depreciation: 4 × $5,000 = $20,000
  Carrying amount: $50,000 - $20,000 = $30,000
# Step 3: Compare with the proceeds
  $26,000 - $30,000 = -$4,000
= Answer: a loss of $4,000
! Common trap: ignoring the residual value gives $6,250 a year and a wrong profit of $1,000.`,
        ru: `Линейный метод с ликвидационной стоимостью.
# Шаг 1: Годовая сумма
  ($50,000 - $10,000) / 8 лет = $5,000
# Шаг 2: Через 4 полных года (20X1-20X4)
  Накопленная амортизация: 4 × $5,000 = $20,000
  Балансовая стоимость: $50,000 - $20,000 = $30,000
# Шаг 3: Сравниваем с выручкой
  $26,000 - $30,000 = -$4,000
= Ответ: убыток $4,000
! Частая ошибка: без ликвидационной стоимости выходит $6,250 в год и неверная прибыль $1,000.`,
        uz: `Tugatish qiymati bilan to'g'ri chiziqli usul.
# 1-qadam: Yillik summa
  ($50,000 - $10,000) / 8 yil = $5,000
# 2-qadam: 4 to'liq yildan keyin (20X1-20X4)
  To'plangan amortizatsiya: 4 × $5,000 = $20,000
  Balans qiymati: $50,000 - $20,000 = $30,000
# 3-qadam: Tushum bilan solishtiramiz
  $26,000 - $30,000 = -$4,000
= Javob: $4,000 zarar
! Ko'p uchraydigan xato: tugatish qiymatini e'tiborsiz qoldirish yiliga $6,250 va noto'g'ri $1,000 foyda beradi.`,
      },
      options: ['A profit of $4,000', 'A profit of $1,000', 'A loss of $1,000', 'A loss of $4,000'],
      correctIndex: 3,
    },
    {
      id: 'ch07-q188',
      kitRef: 188,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A newsagent bought a car in May 20X1 for $12,000, plus $200 for one year of vehicle tax. The year end is 31 December. The car was depreciated at 20% a year on the reducing balance, a full year in the year of purchase and none in the year of sale. In August 20X5 it was traded in at an agreed value of $6,000. What was the profit or loss on disposal for the year ended 31 December 20X5?',
      explanation: {
        en: `Three rules to apply: tax is not part of cost, full year in the year bought, nothing in the year sold.
# Step 1: Cost
  $12,000 (the $200 vehicle tax is an expense)
# Step 2: Depreciation 20X1 to 20X4 (20% reducing balance)
  20X1: $2,400 (left $9,600)
  20X2: $1,920 (left $7,680)
  20X3: $1,536 (left $6,144)
  20X4: $1,228.80 (left $4,915.20)
  None in 20X5, the year of sale
# Step 3: Compare with the trade-in value
  $6,000 - $4,915.20 = $1,084.80
= Answer: a profit of about $1,085
! Common traps: adding the tax to cost gives $1,003; charging 20X5 too gives $2,068.`,
        ru: `Три правила: налог не входит в стоимость, полный год в год покупки, ничего в год продажи.
# Шаг 1: Стоимость
  $12,000 (налог на транспорт $200 — расход)
# Шаг 2: Амортизация 20X1-20X4 (уменьшаемый остаток 20%)
  20X1: $2,400 (осталось $9,600)
  20X2: $1,920 (осталось $7,680)
  20X3: $1,536 (осталось $6,144)
  20X4: $1,228.80 (осталось $4,915.20)
  В 20X5, год продажи, ничего
# Шаг 3: Сравниваем с зачётом
  $6,000 - $4,915.20 = $1,084.80
= Ответ: прибыль около $1,085
! Частые ошибки: налог в стоимости даёт $1,003; амортизация и за 20X5 даёт $2,068.`,
        uz: `Uch qoida: soliq qiymatga kirmaydi, olingan yili to'liq yil, sotilgan yili hech narsa.
# 1-qadam: Qiymat
  $12,000 ($200 transport solig'i — xarajat)
# 2-qadam: 20X1-20X4 amortizatsiyasi (20% kamayuvchi qoldiq)
  20X1: $2,400 (qoldi $9,600)
  20X2: $1,920 (qoldi $7,680)
  20X3: $1,536 (qoldi $6,144)
  20X4: $1,228.80 (qoldi $4,915.20)
  20X5, sotilgan yilda hech narsa
# 3-qadam: Hisobga olingan qiymat bilan solishtiramiz
  $6,000 - $4,915.20 = $1,084.80
= Javob: taxminan $1,085 foyda
! Ko'p uchraydigan xatolar: soliqni qiymatga qo'shish $1,003 beradi; 20X5 ni ham hisoblash $2,068 beradi.`,
      },
      options: ['A profit of $1,003', 'A profit of $2,068', 'A profit of $1,085', 'A loss of $1,085'],
      correctIndex: 2,
    },
    {
      id: 'ch07-q190',
      kitRef: 190,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A business with a 31 March year end bought a truck on 1 April 20X3 for $30,000 in total, including $1,200 for one year of insurance. It had a useful life of six years and a residual value of $3,000, and was depreciated straight line, with a pro-rata charge in the years of purchase and disposal. On 31 March 20X8 the truck was traded in at an agreed value of $9,000. What was the profit or loss on disposal?',
      explanation: {
        en: `Take out the insurance, then use straight-line with the residual value.
# Step 1: Cost
  $30,000 - $1,200 insurance (an expense) = $28,800
# Step 2: Annual depreciation
  ($28,800 - $3,000) / 6 years = $4,300
# Step 3: Owned from 1 April 20X3 to 31 March 20X8 = 5 years
  Accumulated depreciation: 5 × $4,300 = $21,500
  Carrying amount: $28,800 - $21,500 = $7,300
# Step 4: Compare with the trade-in value
  $9,000 - $7,300 = $1,700
= Answer: a profit of $1,700
! Common traps: leaving the insurance in gives $1,500; ignoring the residual value gives $4,200.`,
        ru: `Уберите страховку, затем линейный метод с ликвидационной стоимостью.
# Шаг 1: Стоимость
  $30,000 - $1,200 страховка (расход) = $28,800
# Шаг 2: Годовая амортизация
  ($28,800 - $3,000) / 6 лет = $4,300
# Шаг 3: Владели с 1 апреля 20X3 по 31 марта 20X8 = 5 лет
  Накопленная амортизация: 5 × $4,300 = $21,500
  Балансовая стоимость: $28,800 - $21,500 = $7,300
# Шаг 4: Сравниваем с зачётом
  $9,000 - $7,300 = $1,700
= Ответ: прибыль $1,700
! Частые ошибки: со страховкой выходит $1,500; без ликвидационной стоимости — $4,200.`,
        uz: `Sug'urtani chiqaring, keyin tugatish qiymati bilan to'g'ri chiziqli usul.
# 1-qadam: Qiymat
  $30,000 - $1,200 sug'urta (xarajat) = $28,800
# 2-qadam: Yillik amortizatsiya
  ($28,800 - $3,000) / 6 yil = $4,300
# 3-qadam: 20X3 yil 1 apreldan 20X8 yil 31 martgacha = 5 yil
  To'plangan amortizatsiya: 5 × $4,300 = $21,500
  Balans qiymati: $28,800 - $21,500 = $7,300
# 4-qadam: Hisobga olingan qiymat bilan solishtiramiz
  $9,000 - $7,300 = $1,700
= Javob: $1,700 foyda
! Ko'p uchraydigan xatolar: sug'urta qolsa $1,500; tugatish qiymatisiz $4,200.`,
      },
      options: ['A profit of $1,500', 'A profit of $1,700', 'A profit of $4,200', 'A loss of $1,700'],
      correctIndex: 1,
    },
    {
      id: 'ch07-q191',
      kitRef: 191,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A company\'s property had a cost of $204,000 and accumulated depreciation of $40,800 at 1 November 20X1, when it was revalued to $300,000. Depreciation is straight line over 50 years and the total life did not change on revaluation. The company chose not to make the annual transfer of excess depreciation. What are the depreciation charge and the revaluation surplus at 31 October 20X2?',
      explanation: {
        en: `Find the surplus and the new charge. No transfer is made, so the surplus stays whole.
# Step 1: Surplus on 1 November 20X1
  Carrying amount: $204,000 - $40,800 = $163,200
  Surplus: $300,000 - $163,200 = $136,800
# Step 2: How many years are left?
  Old charge: $204,000 / 50 = $4,080 a year
  Years used: $40,800 / $4,080 = 10, so 50 - 10 = 40 years left
# Step 3: New charge
  $300,000 / 40 = $7,500
= Answer: depreciation $7,500, surplus $136,800
! Common traps: $96,000 uses cost instead of carrying amount; $6,000 divides by 50 instead of the 40 years left.`,
        ru: `Найдём резерв и новую амортизацию. Переноса нет, резерв остаётся целым.
# Шаг 1: Резерв на 1 ноября 20X1
  Балансовая стоимость: $204,000 - $40,800 = $163,200
  Резерв: $300,000 - $163,200 = $136,800
# Шаг 2: Сколько лет осталось?
  Старая амортизация: $204,000 / 50 = $4,080 в год
  Прошло лет: $40,800 / $4,080 = 10, осталось 50 - 10 = 40
# Шаг 3: Новая амортизация
  $300,000 / 40 = $7,500
= Ответ: амортизация $7,500, резерв $136,800
! Частые ошибки: $96,000 — от стоимости вместо балансовой; $6,000 — деление на 50 вместо оставшихся 40.`,
        uz: `Rezerv va yangi amortizatsiyani topamiz. O'tkazma yo'q, rezerv butun qoladi.
# 1-qadam: 20X1 yil 1 noyabrdagi rezerv
  Balans qiymati: $204,000 - $40,800 = $163,200
  Rezerv: $300,000 - $163,200 = $136,800
# 2-qadam: Necha yil qoldi?
  Eski amortizatsiya: $204,000 / 50 = yiliga $4,080
  O'tgan yillar: $40,800 / $4,080 = 10, qoldi 50 - 10 = 40
# 3-qadam: Yangi amortizatsiya
  $300,000 / 40 = $7,500
= Javob: amortizatsiya $7,500, rezerv $136,800
! Ko'p uchraydigan xatolar: $96,000 — balans qiymati o'rniga qiymatdan; $6,000 — qolgan 40 o'rniga 50 ga bo'lish.`,
      },
      options: [
        'Depreciation $6,000, surplus $96,000',
        'Depreciation $7,500, surplus $96,000',
        'Depreciation $6,000, surplus $136,800',
        'Depreciation $7,500, surplus $136,800',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch07-q192',
      kitRef: 192,
      topicId: 'chapter-07',
      type: 'matrix',
      text: 'Mark each statement about excess depreciation after a revaluation as true or false.',
      explanation: {
        en: `Check each statement about the yearly transfer of excess depreciation.
- It is an optional policy: TRUE.
- Once chosen, it is made every year: TRUE. A company cannot pick and choose the years.
- It is reported in profit or loss: FALSE. It moves money between two parts of equity.
- It is reported in the statement of changes in equity: TRUE. That is where movements within equity are shown.`,
        ru: `Проверьте каждое утверждение о ежегодном переносе избыточной амортизации.
- Это необязательная политика: ВЕРНО.
- Выбрав, её применяют каждый год: ВЕРНО. Выбирать годы нельзя.
- Отражается в прибыли или убытке: НЕВЕРНО. Это перенос между двумя частями капитала.
- Отражается в отчёте об изменениях в капитале: ВЕРНО. Там показывают движения внутри капитала.`,
        uz: `Ortiqcha amortizatsiyani yillik o'tkazish haqidagi har bir fikrni tekshiring.
- Bu ixtiyoriy siyosat: TO'G'RI.
- Tanlangach, har yili qilinadi: TO'G'RI. Yillarni tanlab bo'lmaydi.
- Foyda yoki zararda ko'rsatiladi: NOTO'G'RI. Bu kapitalning ikki qismi orasidagi o'tkazma.
- Kapitaldagi o'zgarishlar hisobotida ko'rsatiladi: TO'G'RI. Kapital ichidagi harakatlar o'sha yerda ko'rsatiladi.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Transferring excess depreciation is an optional accounting policy', correctIndex: 0 },
        { text: 'Once the policy is chosen, the transfer must be made every year', correctIndex: 0 },
        { text: 'The transfer is reported in profit or loss', correctIndex: 1 },
        { text: 'The transfer is reported in the statement of changes in equity', correctIndex: 0 },
      ],
    },
    {
      id: 'ch07-q193',
      kitRef: 193,
      topicId: 'chapter-07',
      type: 'number',
      text: 'At 1 January 20X8 a company owned a building that cost $600,000 and had a carrying amount of $480,000. That day it was valued at $750,000 and the valuation was included in the statements. Buildings are depreciated at 2% straight line, and the company makes the annual transfer of excess depreciation. What amount is transferred each year?',
      explanation: {
        en: `Excess depreciation = new charge - old charge.
# Step 1: Old charge (on cost)
  2% × $600,000 = $12,000 a year
# Step 2: Years left
  Accumulated depreciation: $600,000 - $480,000 = $120,000 = 10 years of $12,000
  A 2% rate means 50 years in total, so 40 remain
# Step 3: New charge
  $750,000 / 40 = $18,750
# Step 4: Excess
  $18,750 - $12,000 = $6,750
= Answer: $6,750 is transferred each year`,
        ru: `Избыточная амортизация = новая - старая.
# Шаг 1: Старая амортизация (от стоимости)
  2% × $600,000 = $12,000 в год
# Шаг 2: Оставшиеся годы
  Накопленная амортизация: $600,000 - $480,000 = $120,000 = 10 лет по $12,000
  Ставка 2% — всего 50 лет, осталось 40
# Шаг 3: Новая амортизация
  $750,000 / 40 = $18,750
# Шаг 4: Избыточная
  $18,750 - $12,000 = $6,750
= Ответ: ежегодно переносится $6,750`,
        uz: `Ortiqcha amortizatsiya = yangi - eski.
# 1-qadam: Eski amortizatsiya (qiymatdan)
  2% × $600,000 = yiliga $12,000
# 2-qadam: Qolgan yillar
  To'plangan amortizatsiya: $600,000 - $480,000 = $120,000 = $12,000 dan 10 yil
  2% stavka jami 50 yil demak, 40 yil qoldi
# 3-qadam: Yangi amortizatsiya
  $750,000 / 40 = $18,750
# 4-qadam: Ortiqcha
  $18,750 - $12,000 = $6,750
= Javob: har yili $6,750 o'tkaziladi`,
      },
      correctValue: 6750,
      answerText: '$6,750',
    },
    {
      id: 'ch07-q194',
      kitRef: 194,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A company uses the revaluation model and makes the annual transfer of excess depreciation, which is $12,000 this year. Which entry makes the transfer?',
      explanation: {
        en: `Each year a bit of the surplus has been "used up" through the extra depreciation, so that bit becomes a realised gain.
# The entry
  Take it out of the revaluation surplus: Dr Revaluation surplus $12,000
  Put it into retained earnings: Cr Retained earnings $12,000
= Answer: Dr Revaluation surplus $12,000, Cr Retained earnings $12,000
Both accounts are inside equity, so profit or loss is not touched.`,
        ru: `Каждый год часть резерва «использована» через лишнюю амортизацию и становится реализованным приростом.
# Проводка
  Убираем из резерва переоценки: Дт Резерв переоценки $12,000
  Переносим в нераспределённую прибыль: Кт Нераспределённая прибыль $12,000
= Ответ: Дт Резерв переоценки $12,000, Кт Нераспределённая прибыль $12,000
Оба счёта внутри капитала, прибыль или убыток не затрагивается.`,
        uz: `Har yili rezervning bir qismi ortiqcha amortizatsiya orqali «ishlatiladi» va amalga oshgan o'sishga aylanadi.
# Yozuv
  Qayta baholash rezervidan chiqaramiz: Dt Qayta baholash rezervi $12,000
  Taqsimlanmagan foydaga o'tkazamiz: Kt Taqsimlanmagan foyda $12,000
= Javob: Dt Qayta baholash rezervi $12,000, Kt Taqsimlanmagan foyda $12,000
Ikkala hisob ham kapital ichida, foyda yoki zararga tegilmaydi.`,
      },
      options: [
        'Dr Retained earnings $12,000, Cr Revaluation surplus $12,000',
        'Dr Revaluation surplus $12,000, Cr Retained earnings $12,000',
        'Dr Non-current assets $12,000, Cr Profit or loss $12,000',
        'Dr Non-current assets $12,000, Cr Revaluation surplus $12,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch07-q195',
      kitRef: 195,
      topicId: 'chapter-07',
      type: 'matrix',
      text: 'Mark each statement about the revaluation model as true or false.',
      explanation: {
        en: `Two rules of the revaluation model.
- Revalue often enough that the carrying amount stays close to fair value: TRUE.
- Other assets in the same class need not be revalued: FALSE. If one asset is revalued, its whole class must be, so the figures are not a mix of old and new values.`,
        ru: `Два правила модели переоценки.
- Переоценивать достаточно часто, чтобы балансовая стоимость оставалась близкой к справедливой: ВЕРНО.
- Другие активы того же класса переоценивать не нужно: НЕВЕРНО. Если переоценён один актив, переоценивают весь класс, чтобы цифры не были смесью старых и новых.`,
        uz: `Qayta baholash modelining ikki qoidasi.
- Balans qiymati adolatli qiymatga yaqin qolishi uchun yetarlicha tez-tez qayta baholash: TO'G'RI.
- Shu sinfdagi boshqa aktivlarni qayta baholash shart emas: NOTO'G'RI. Bitta aktiv qayta baholansa, butun sinf qayta baholanadi, raqamlar eski va yangi qiymatlar aralashmasi bo'lmasligi uchun.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Revaluations must be made often enough that the carrying amount does not differ materially from fair value',
          correctIndex: 0,
        },
        { text: 'When one asset is revalued, the other assets in the same class do not have to be', correctIndex: 1 },
      ],
    },
    {
      id: 'ch07-q196',
      kitRef: 196,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A company\'s property had a cost of $204,000 and accumulated depreciation of $40,800 at 1 November 20X1, when it was revalued to $240,000. Depreciation is straight line over 50 years and the total life did not change. The company makes the annual transfer of excess depreciation. What are the depreciation charge and the revaluation surplus at 31 October 20X2?',
      explanation: {
        en: `Like question 191, but now the company DOES make the yearly transfer, so the surplus goes down by the excess.
# Step 1: Surplus on revaluation
  Carrying amount $204,000 - $40,800 = $163,200
  $240,000 - $163,200 = $76,800
# Step 2: New charge
  The asset is 10 years old ($40,800 / $4,080), so 40 years remain
  $240,000 / 40 = $6,000
# Step 3: Excess transferred
  $6,000 - old charge $4,080 = $1,920
# Step 4: Surplus at the year end
  $76,800 - $1,920 = $74,880
= Answer: depreciation $6,000, surplus $74,880`,
        ru: `Как вопрос 191, но теперь компания ДЕЛАЕТ ежегодный перенос, поэтому резерв уменьшается на избыточную часть.
# Шаг 1: Резерв при переоценке
  Балансовая $204,000 - $40,800 = $163,200
  $240,000 - $163,200 = $76,800
# Шаг 2: Новая амортизация
  Активу 10 лет ($40,800 / $4,080), осталось 40
  $240,000 / 40 = $6,000
# Шаг 3: Перенесённая избыточная часть
  $6,000 - старая $4,080 = $1,920
# Шаг 4: Резерв на конец года
  $76,800 - $1,920 = $74,880
= Ответ: амортизация $6,000, резерв $74,880`,
        uz: `191-savolga o'xshash, lekin endi kompaniya yillik o'tkazmani QILADI, shuning uchun rezerv ortiqcha qismga kamayadi.
# 1-qadam: Qayta baholashdagi rezerv
  Balans qiymati $204,000 - $40,800 = $163,200
  $240,000 - $163,200 = $76,800
# 2-qadam: Yangi amortizatsiya
  Aktiv 10 yoshda ($40,800 / $4,080), 40 yil qoldi
  $240,000 / 40 = $6,000
# 3-qadam: O'tkazilgan ortiqcha qism
  $6,000 - eski $4,080 = $1,920
# 4-qadam: Yil oxiridagi rezerv
  $76,800 - $1,920 = $74,880
= Javob: amortizatsiya $6,000, rezerv $74,880`,
      },
      options: [
        'Depreciation $4,800, surplus $76,800',
        'Depreciation $6,000, surplus $76,800',
        'Depreciation $6,000, surplus $74,880',
        'Depreciation $4,800, surplus $74,880',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch07-q197',
      kitRef: 197,
      topicId: 'chapter-07',
      type: 'matrix',
      text: 'Mark each statement about revalued property, plant and equipment as true or false.',
      explanation: {
        en: `Two common misunderstandings.
- All property, plant and equipment must be revalued: FALSE. Only the whole CLASS of the revalued asset. Land and buildings can be revalued while machines stay at cost.
- The yearly transfer of excess depreciation is compulsory: FALSE. It is a choice, but once chosen it is made every year.`,
        ru: `Два частых заблуждения.
- Переоценивать надо все основные средства: НЕВЕРНО. Только весь КЛАСС переоценённого актива. Землю и здания можно переоценить, а станки оставить по стоимости.
- Ежегодный перенос избыточной амортизации обязателен: НЕВЕРНО. Это выбор, но выбрав, его делают каждый год.`,
        uz: `Ikki keng tarqalgan noto'g'ri tushuncha.
- Barcha asosiy vositalar qayta baholanishi shart: NOTO'G'RI. Faqat qayta baholangan aktivning butun SINFI. Yer va binolar qayta baholanib, dastgohlar qiymatda qolishi mumkin.
- Ortiqcha amortizatsiyani yillik o'tkazish majburiy: NOTO'G'RI. Bu tanlov, lekin tanlangach har yili qilinadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'If the revaluation model is used, all property, plant and equipment must be revalued',
          correctIndex: 1,
        },
        { text: 'Making the annual transfer of excess depreciation is compulsory', correctIndex: 1 },
      ],
    },
    {
      id: 'ch07-q198',
      kitRef: 198,
      topicId: 'chapter-07',
      type: 'number',
      text: 'A company sold a building for $600,000. The building had been accounted for using the revaluation model. At the date of sale its carrying amount was $455,000, after accumulated depreciation of $105,000, and there was a revaluation surplus of $40,000 in equity. What profit on disposal goes to profit or loss?',
      explanation: {
        en: `Profit on disposal is always proceeds minus carrying amount. The surplus is dealt with separately.
# Step 1: Profit on disposal
  $600,000 - $455,000 = $145,000, in profit or loss
# Step 2: The revaluation surplus
  The $40,000 moves inside equity: Dr Revaluation surplus, Cr Retained earnings
= Answer: $145,000
! Common trap: adding the $40,000 to make $185,000. The surplus never goes through profit or loss.`,
        ru: `Прибыль от выбытия — всегда выручка минус балансовая стоимость. Резерв учитывают отдельно.
# Шаг 1: Прибыль от выбытия
  $600,000 - $455,000 = $145,000, в прибыли или убытке
# Шаг 2: Резерв переоценки
  $40,000 переходят внутри капитала: Дт Резерв переоценки, Кт Нераспределённая прибыль
= Ответ: $145,000
! Частая ошибка: прибавить $40,000 и получить $185,000. Резерв никогда не проходит через прибыль или убыток.`,
        uz: `Chiqishdan foyda doim tushum minus balans qiymati. Rezerv alohida hisobga olinadi.
# 1-qadam: Chiqishdan foyda
  $600,000 - $455,000 = $145,000, foyda yoki zararda
# 2-qadam: Qayta baholash rezervi
  $40,000 kapital ichida o'tadi: Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda
= Javob: $145,000
! Ko'p uchraydigan xato: $40,000 ni qo'shib $185,000 qilish. Rezerv hech qachon foyda yoki zarar orqali o'tmaydi.`,
      },
      correctValue: 145000,
      answerText: '$145,000',
    },
    {
      id: 'ch07-q199',
      kitRef: 199,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A revalued building is sold. How is the revaluation surplus relating to that building dealt with at the date of sale?',
      explanation: {
        en: `The building is gone, so the gain held in the surplus is now real (realised). It moves within equity.
- To accumulated depreciation: no.
- To retained earnings within equity: yes.
- Credited to profit or loss: no, it never goes through profit or loss.
- To property, plant and equipment: no, the asset has been sold.
= Answer: it is moved to retained earnings within equity`,
        ru: `Здания больше нет, поэтому прирост в резерве теперь реальный (реализованный). Он переходит внутри капитала.
- В накопленную амортизацию: нет.
- В нераспределённую прибыль внутри капитала: да.
- В прибыль или убыток: нет, он никогда туда не идёт.
- В основные средства: нет, актив продан.
= Ответ: он переносится в нераспределённую прибыль внутри капитала`,
        uz: `Bino yo'q, shuning uchun rezervdagi o'sish endi haqiqiy (amalga oshgan). U kapital ichida o'tadi.
- To'plangan amortizatsiyaga: yo'q.
- Kapital ichida taqsimlanmagan foydaga: ha.
- Foyda yoki zararga: yo'q, u hech qachon u yerga bormaydi.
- Asosiy vositalarga: yo'q, aktiv sotilgan.
= Javob: u kapital ichida taqsimlanmagan foydaga o'tkaziladi`,
      },
      options: [
        'It is moved to accumulated depreciation',
        'It is moved to retained earnings within equity',
        'It is credited to profit or loss',
        'It is moved to property, plant and equipment',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch07-q200',
      kitRef: 200,
      topicId: 'chapter-07',
      type: 'single',
      text: 'A business with a 30 June year end bought plant on 1 April 20X5 for $24,000, plus $900 for a three-year maintenance agreement. The plant had a useful life of five years and a residual value of $3,000. It was depreciated straight line with a pro-rata charge in the years of purchase and disposal. On 30 September 20X8 it was traded in for a replacement at an agreed value of $8,000. What was the profit or loss on disposal?',
      explanation: {
        en: `Leave out the maintenance agreement, then count the exact time owned.
# Step 1: Cost
  $24,000 (the $900 maintenance agreement is an expense)
# Step 2: Annual depreciation
  ($24,000 - $3,000) / 5 = $4,200
# Step 3: Time owned
  1 April 20X5 to 30 September 20X8 = 3 years and 6 months = 3.5 years
  Accumulated depreciation: 3.5 × $4,200 = $14,700
  Carrying amount: $24,000 - $14,700 = $9,300
# Step 4: Compare with the trade-in value
  $8,000 - $9,300 = -$1,300
= Answer: a loss of $1,300
! Common traps: including the maintenance gives $1,570; ignoring the residual value gives a profit of $800.`,
        ru: `Уберите договор обслуживания, затем посчитайте точный срок владения.
# Шаг 1: Стоимость
  $24,000 (договор обслуживания $900 — расход)
# Шаг 2: Годовая амортизация
  ($24,000 - $3,000) / 5 = $4,200
# Шаг 3: Срок владения
  С 1 апреля 20X5 по 30 сентября 20X8 = 3 года 6 месяцев = 3.5 года
  Накопленная амортизация: 3.5 × $4,200 = $14,700
  Балансовая стоимость: $24,000 - $14,700 = $9,300
# Шаг 4: Сравниваем с зачётом
  $8,000 - $9,300 = -$1,300
= Ответ: убыток $1,300
! Частые ошибки: с договором обслуживания — $1,570; без ликвидационной стоимости — прибыль $800.`,
        uz: `Xizmat shartnomasini chiqaring, keyin aniq egalik muddatini sanang.
# 1-qadam: Qiymat
  $24,000 ($900 xizmat shartnomasi — xarajat)
# 2-qadam: Yillik amortizatsiya
  ($24,000 - $3,000) / 5 = $4,200
# 3-qadam: Egalik muddati
  20X5 yil 1 apreldan 20X8 yil 30 sentyabrgacha = 3 yil 6 oy = 3.5 yil
  To'plangan amortizatsiya: 3.5 × $4,200 = $14,700
  Balans qiymati: $24,000 - $14,700 = $9,300
# 4-qadam: Hisobga olingan qiymat bilan solishtiramiz
  $8,000 - $9,300 = -$1,300
= Javob: $1,300 zarar
! Ko'p uchraydigan xatolar: xizmat shartnomasi bilan $1,570; tugatish qiymatisiz $800 foyda.`,
      },
      options: ['A profit of $800', 'A loss of $1,570', 'A loss of $1,300', 'A profit of $1,300'],
      correctIndex: 2,
    },
    {
      id: 'ch07-q204',
      kitRef: 204,
      topicId: 'chapter-07',
      type: 'number',
      text: 'A machine was bought on 31 August 20X5 for $64,000, with a useful life of eight years and a residual value of $4,000. On 1 January 20X8 it was revalued to $52,000, with no change to residual value or useful life. The policy is straight line, with a full year in both the year of purchase and the year of sale. What is the depreciation charge for the year ended 31 December 20X8?',
      explanation: {
        en: `After a revaluation: (revalued amount - residual value) / remaining life.
# Step 1: Years already depreciated
  Full year in the year of purchase: 20X5, 20X6, 20X7 = 3 years
# Step 2: Remaining life
  8 - 3 = 5 years
# Step 3: New charge
  ($52,000 - $4,000) / 5 = $9,600
= Answer: $9,600`,
        ru: `После переоценки: (переоценённая стоимость - ликвидационная) / оставшийся срок.
# Шаг 1: Сколько лет уже амортизировали
  Полный год в год покупки: 20X5, 20X6, 20X7 = 3 года
# Шаг 2: Оставшийся срок
  8 - 3 = 5 лет
# Шаг 3: Новая сумма
  ($52,000 - $4,000) / 5 = $9,600
= Ответ: $9,600`,
        uz: `Qayta baholashdan keyin: (qayta baholangan qiymat - tugatish qiymati) / qolgan muddat.
# 1-qadam: Necha yil amortizatsiya qilingan
  Olingan yili to'liq yil: 20X5, 20X6, 20X7 = 3 yil
# 2-qadam: Qolgan muddat
  8 - 3 = 5 yil
# 3-qadam: Yangi summa
  ($52,000 - $4,000) / 5 = $9,600
= Javob: $9,600`,
      },
      correctValue: 9600,
      answerText: '$9,600',
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
