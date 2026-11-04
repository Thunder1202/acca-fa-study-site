'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-05';
  const questions = [
    {
      id: 'ch05-q148',
      kitRef: 148,
      topicId: 'chapter-05',
      type: 'number',
      text: 'A shop bought an item for $400. It should sell for $1,000 after $200 is spent on it. Replacing it would cost $550. At what value should it be included in the financial statements?',
      explanation: {
        en: `Inventory goes in at the LOWER of cost and NRV.
# Step 1: Cost
  $400
# Step 2: NRV (what you will get, less what you must still spend)
  $1,000 - $200 = $800
# Step 3: Pick the lower
  $400 is lower than $800
= Answer: $400
! Common trap: replacement cost ($550). It plays no part in IAS 2.`,
        ru: `Запасы записывают по МЕНЬШЕЙ из стоимости и ЧСР.
# Шаг 1: Стоимость
  $400
# Шаг 2: ЧСР (что получите минус что ещё нужно потратить)
  $1,000 - $200 = $800
# Шаг 3: Выбираем меньшее
  $400 меньше $800
= Ответ: $400
! Частая ошибка: стоимость замещения ($550). В IAS 2 она не участвует.`,
        uz: `Zaxira qiymat va SSQ dan KICHIGIDA yoziladi.
# 1-qadam: Qiymat
  $400
# 2-qadam: SSQ (oladiganingiz minus hali sarflashingiz kerak bo'lgani)
  $1,000 - $200 = $800
# 3-qadam: Kichigini tanlaymiz
  $400 $800 dan kichik
= Javob: $400
! Ko'p uchraydigan xato: almashtirish qiymati ($550). IAS 2 da u qatnashmaydi.`,
      },
      correctValue: 400,
      answerText: '$400',
    },
    {
      id: 'ch05-q149',
      kitRef: 149,
      topicId: 'chapter-05',
      type: 'single',
      text: 'Prices have fallen throughout the year. How does FIFO compare with AVCO?',
      explanation: {
        en: `FIFO leaves the NEWEST goods in inventory. When prices are falling, the newest goods are the cheapest.
# Step 1: Closing inventory
  FIFO keeps the cheapest, newest goods, so closing inventory is LOWER than under AVCO
# Step 2: Profit
  Lower closing inventory means higher cost of sales, so profit is LOWER
= Answer: closing inventory and profit are both lower under FIFO
! Remember: closing inventory and profit always move in the same direction.`,
        ru: `FIFO оставляет в запасах САМЫЕ НОВЫЕ товары. При падении цен самые новые — самые дешёвые.
# Шаг 1: Конечные запасы
  FIFO оставляет дешёвые новые товары, конечные запасы НИЖЕ, чем при AVCO
# Шаг 2: Прибыль
  Ниже конечные запасы — выше себестоимость, прибыль НИЖЕ
= Ответ: при FIFO и конечные запасы, и прибыль ниже
! Запомните: конечные запасы и прибыль всегда двигаются в одну сторону.`,
        uz: `FIFO zaxirada ENG YANGI tovarlarni qoldiradi. Narxlar tushganda eng yangisi eng arzon.
# 1-qadam: Yakuniy zaxira
  FIFO arzon yangi tovarni qoldiradi, yakuniy zaxira AVCO dagidan PAST
# 2-qadam: Foyda
  Yakuniy zaxira past — tannarx yuqori, foyda PAST
= Javob: FIFO da yakuniy zaxira ham, foyda ham past
! Eslang: yakuniy zaxira va foyda doim bir yo'nalishda harakatlanadi.`,
      },
      options: [
        'Closing inventory and profit are both lower under FIFO',
        'Closing inventory and profit are both higher under FIFO',
        'Closing inventory is higher and profit lower under FIFO',
        'Closing inventory is lower and profit higher under FIFO',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch05-q150',
      kitRef: 150,
      topicId: 'chapter-05',
      type: 'single',
      text: 'A trader has the following movements in March. Which statement about closing inventory is true?',
      explanation: {
        en: `First count the units left, then value them both ways.
# Step 1: Units left
  200 - 50 + 300 - 150 + 100 - 200 = 200 units
# Step 2: FIFO (the newest 200 are left)
  100 from 22 March at $2.60 = $260
  100 from 9 March at $2.20 = $220
  Total: $480
# Step 3: Periodic weighted average
  Total cost: 200 × $2 + 300 × $2.20 + 100 × $2.60 = $400 + $660 + $260 = $1,320
  Total units: 200 + 300 + 100 = 600, so average $1,320 / 600 = $2.20
  200 × $2.20 = $440
= Answer: FIFO $480 is $40 higher than average $440`,
        ru: `Сначала посчитаем остаток, затем оценим двумя способами.
# Шаг 1: Сколько осталось
  200 - 50 + 300 - 150 + 100 - 200 = 200 штук
# Шаг 2: FIFO (остались самые новые 200)
  100 от 22 марта по $2.60 = $260
  100 от 9 марта по $2.20 = $220
  Итого: $480
# Шаг 3: Периодическое средневзвешенное
  Вся стоимость: 200 × $2 + 300 × $2.20 + 100 × $2.60 = $400 + $660 + $260 = $1,320
  Всего штук: 200 + 300 + 100 = 600, средняя $1,320 / 600 = $2.20
  200 × $2.20 = $440
= Ответ: FIFO $480 на $40 выше средней $440`,
        uz: `Avval qolgan sonni sanaymiz, keyin ikki usulda baholaymiz.
# 1-qadam: Qancha qoldi
  200 - 50 + 300 - 150 + 100 - 200 = 200 dona
# 2-qadam: FIFO (eng yangi 200 tasi qoldi)
  22 martdagi $2.60 dan 100 ta = $260
  9 martdagi $2.20 dan 100 ta = $220
  Jami: $480
# 3-qadam: Davriy o'rtacha tortilgan
  Jami qiymat: 200 × $2 + 300 × $2.20 + 100 × $2.60 = $400 + $660 + $260 = $1,320
  Jami dona: 200 + 300 + 100 = 600, o'rtacha $1,320 / 600 = $2.20
  200 × $2.20 = $440
= Javob: FIFO $480 o'rtachadagi $440 dan $40 yuqori`,
      },
      options: [
        'It is $40 higher under FIFO than under periodic weighted average',
        'It is $40 lower under FIFO than under periodic weighted average',
        'It is $20 higher under FIFO than under periodic weighted average',
        'It is $20 lower under FIFO than under periodic weighted average',
      ],
      correctIndex: 0,
      table: {
        head: ['Date', 'Movement', 'Units', 'Unit cost'],
        rows: [
          ['1 Mar', 'Opening inventory', '200', '$2.00'],
          ['3 Mar', 'Sales', '50', ''],
          ['9 Mar', 'Purchases', '300', '$2.20'],
          ['15 Mar', 'Sales', '150', ''],
          ['22 Mar', 'Purchases', '100', '$2.60'],
          ['29 Mar', 'Sales', '200', ''],
        ],
      },
    },
    {
      id: 'ch05-q151',
      kitRef: 151,
      topicId: 'chapter-05',
      type: 'number',
      text: 'A trader counts 900 identical units on 30 December, each costing $40. On 31 December, the year end, 30 of them are sold for $37 each. What figure goes in the statement of financial position for inventory?',
      explanation: {
        en: `The sale on 31 December shows what the units are really worth.
# Step 1: Units left at the year end
  900 - 30 = 870
# Step 2: Cost or NRV?
  Cost $40 each, but they sell for only $37. NRV $37 is lower.
# Step 3: Value
  870 × $37 = $32,190
= Answer: $32,190
! Common trap: valuing all 900 units. The 30 sold on 31 December are no longer inventory.`,
        ru: `Продажа 31 декабря показывает реальную цену единиц.
# Шаг 1: Остаток на конец года
  900 - 30 = 870
# Шаг 2: Стоимость или ЧСР?
  Стоимость $40, но продаются только за $37. ЧСР $37 меньше.
# Шаг 3: Оценка
  870 × $37 = $32,190
= Ответ: $32,190
! Частая ошибка: оценить все 900 штук. 30 проданных 31 декабря уже не запасы.`,
        uz: `31 dekabrdagi sotuv donalarning haqiqiy qiymatini ko'rsatadi.
# 1-qadam: Yil oxiridagi qoldiq
  900 - 30 = 870
# 2-qadam: Qiymat yoki SSQ?
  Qiymati $40, lekin faqat $37 ga sotiladi. SSQ $37 kichik.
# 3-qadam: Baho
  870 × $37 = $32,190
= Javob: $32,190
! Ko'p uchraydigan xato: 900 tasini baholash. 31 dekabrda sotilgan 30 tasi endi zaxira emas.`,
      },
      correctValue: 32190,
      answerText: '$32,190',
    },
    {
      id: 'ch05-q152',
      kitRef: 152,
      topicId: 'chapter-05',
      type: 'matrix',
      text: 'Mark each statement about accounting for inventory as true or false.',
      explanation: {
        en: `Check each statement against IAS 2.
- The lowest of cost, NRV and replacement cost: FALSE. IAS 2 compares only cost and NRV.
- Work in progress includes materials, labour and production overheads: TRUE.
- FIFO or weighted average may be used: TRUE.
- Accounting policies for inventory must be disclosed: TRUE.`,
        ru: `Сверим каждое утверждение с IAS 2.
- Наименьшее из стоимости, ЧСР и стоимости замещения: НЕВЕРНО. IAS 2 сравнивает только стоимость и ЧСР.
- Незавершённое производство включает материалы, труд и производственные накладные: ВЕРНО.
- Можно применять FIFO или средневзвешенную: ВЕРНО.
- Учётную политику по запасам нужно раскрыть: ВЕРНО.`,
        uz: `Har bir fikrni IAS 2 bilan solishtiramiz.
- Qiymat, SSQ va almashtirish qiymatidan eng kichigi: NOTO'G'RI. IAS 2 faqat qiymat va SSQ ni solishtiradi.
- Tugallanmagan ishlab chiqarishga materiallar, mehnat va ishlab chiqarish ustama xarajatlari kiradi: TO'G'RI.
- FIFO yoki o'rtacha tortilgan qo'llanishi mumkin: TO'G'RI.
- Zaxira bo'yicha hisob siyosati ochib berilishi shart: TO'G'RI.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Inventory is valued at the lowest of cost, NRV and replacement cost', correctIndex: 1 },
        {
          text: 'Work in progress includes materials, labour, and variable and fixed production overheads',
          correctIndex: 0,
        },
        { text: 'Items may be valued using FIFO or weighted average cost', correctIndex: 0 },
        { text: 'The accounting policies for inventory must be disclosed', correctIndex: 0 },
      ],
    },
    {
      id: 'ch05-q153',
      kitRef: 153,
      topicId: 'chapter-05',
      type: 'single',
      text: 'Tiles were delivered to a business on 29 June and included in closing inventory at 30 June, the year end. The invoice has not been recorded. What is the effect? 1: Profit for this year is overstated. 2: Closing inventory is understated. 3: Next year\'s profit is overstated. 4: Closing inventory is overstated.',
      explanation: {
        en: `Look at each side of the missing entry.
# The tiles are in closing inventory
  So closing inventory is CORRECT. Statements 2 and 4 are wrong.
# The purchase invoice is missing
  Purchases are too low, so cost of sales is too low and THIS year's profit is too high. Statement 1 is right.
# Next year
  Next year's opening inventory is correct, so next year is not affected. Statement 3 is wrong.
= Answer: 1 only`,
        ru: `Посмотрим на обе стороны пропущенной записи.
# Плитка входит в конечные запасы
  Значит конечные запасы ВЕРНЫ. Утверждения 2 и 4 неверны.
# Счёт за покупку не записан
  Закупки занижены, себестоимость занижена, прибыль ЭТОГО года завышена. Утверждение 1 верно.
# Следующий год
  Начальные запасы следующего года верны, на него это не влияет. Утверждение 3 неверно.
= Ответ: только 1`,
        uz: `Tushib qolgan yozuvning ikkala tomonini ko'raylik.
# Plitkalar yakuniy zaxirada
  Demak yakuniy zaxira TO'G'RI. 2 va 4-fikrlar noto'g'ri.
# Xarid hisob-fakturasi yozilmagan
  Xaridlar kam, tannarx kam, SHU yil foydasi ko'p. 1-fikr to'g'ri.
# Kelasi yil
  Kelasi yilning boshlang'ich zaxirasi to'g'ri, unga ta'sir yo'q. 3-fikr noto'g'ri.
= Javob: faqat 1`,
      },
      options: ['1 only', '1 and 2', '2 and 3', '1 and 4'],
      correctIndex: 0,
    },
    {
      id: 'ch05-q154',
      kitRef: 154,
      topicId: 'chapter-05',
      type: 'single',
      text: 'Which entry records goods taken from inventory by the owner for personal use?',
      explanation: {
        en: `The owner takes goods home. They were bought but never sold.
# Step 1: Take them out of the cost of goods sold
  They will not be sold, so remove them from purchases: Cr Purchases
# Step 2: The owner's capital goes down
  Goods taken for private use are drawings: Dr Drawings
= Answer: Dr Drawings, Cr Purchases
! Common trap: crediting inventory. The inventory account is only updated at the year end; during the year goods move through purchases.`,
        ru: `Владелец забирает товар домой. Его купили, но не продали.
# Шаг 1: Убираем из себестоимости
  Он не будет продан, убираем из закупок: Кт Закупки
# Шаг 2: Капитал владельца уменьшается
  Товар для личных нужд — изъятия: Дт Изъятия
= Ответ: Дт Изъятия, Кт Закупки
! Частая ошибка: кредитовать запасы. Счёт запасов обновляют только в конце года, в течение года товар идёт через закупки.`,
        uz: `Egasi tovarni uyiga olib ketadi. U sotib olingan, lekin sotilmagan.
# 1-qadam: Tannarxdan chiqaramiz
  U sotilmaydi, xaridlardan chiqaramiz: Kt Xaridlar
# 2-qadam: Egasi kapitali kamayadi
  Shaxsiy ehtiyoj uchun olingan tovar — olib qo'yish: Dt Olib qo'yish
= Javob: Dt Olib qo'yish, Kt Xaridlar
! Ko'p uchraydigan xato: zaxirani kreditlash. Zaxira hisobi faqat yil oxirida yangilanadi, yil davomida tovar xaridlar orqali o'tadi.`,
      },
      options: [
        'Dr Sales, Cr Drawings',
        'Dr Drawings, Cr Inventory',
        'Dr Drawings, Cr Purchases',
        'Dr Inventory, Cr Drawings',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch05-q155',
      kitRef: 155,
      topicId: 'chapter-05',
      type: 'single',
      text: 'A business had opening inventory of $150,000 and closing inventory of $190,000. Which entries are needed?',
      explanation: {
        en: `Two separate entries, one for each inventory figure.
# Step 1: Opening inventory ($150,000) is assumed sold
  It leaves assets and becomes part of cost of sales
  Dr Profit or loss $150,000, Cr Inventory $150,000
# Step 2: Closing inventory ($190,000) is still unsold
  It becomes an asset and comes out of cost of sales
  Dr Inventory $190,000, Cr Profit or loss $190,000
= Answer: the pair of entries in option B
! Common trap: posting only the $40,000 difference. Both figures must be recorded in full.`,
        ru: `Две отдельные проводки, по одной на каждую цифру запасов.
# Шаг 1: Начальные запасы ($150,000) считаем проданными
  Они уходят из активов в себестоимость
  Дт Прибыль или убыток $150,000, Кт Запасы $150,000
# Шаг 2: Конечные запасы ($190,000) ещё не проданы
  Они становятся активом и уходят из себестоимости
  Дт Запасы $190,000, Кт Прибыль или убыток $190,000
= Ответ: пара проводок в варианте B
! Частая ошибка: провести только разницу $40,000. Обе суммы записывают полностью.`,
        uz: `Ikki alohida yozuv, har bir zaxira soni uchun bittadan.
# 1-qadam: Boshlang'ich zaxira ($150,000) sotilgan deb hisoblanadi
  U aktivdan chiqib, tannarxga o'tadi
  Dt Foyda yoki zarar $150,000, Kt Zaxira $150,000
# 2-qadam: Yakuniy zaxira ($190,000) hali sotilmagan
  U aktivga aylanadi va tannarxdan chiqadi
  Dt Zaxira $190,000, Kt Foyda yoki zarar $190,000
= Javob: B variantdagi yozuvlar juftligi
! Ko'p uchraydigan xato: faqat $40,000 farqni yozish. Ikkala summa to'liq yoziladi.`,
      },
      options: [
        'Dr Inventory $150,000, Cr Profit or loss $150,000; Dr Profit or loss $190,000, Cr Inventory $190,000',
        'Dr Profit or loss $150,000, Cr Inventory $150,000; Dr Inventory $190,000, Cr Profit or loss $190,000',
        'Dr Inventory $40,000, Cr Purchases $40,000',
        'Dr Purchases $40,000, Cr Inventory $40,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch05-q156',
      kitRef: 156,
      topicId: 'chapter-05',
      type: 'number',
      text: 'An inventory count on 8 July shows $42,000. The year end was 30 June. Between those dates sales were $7,500 and purchases were $3,000. Mark-up is 25% on cost. What was inventory at 30 June?',
      explanation: {
        en: `The count was done 8 days AFTER the year end, so work backwards to 30 June.
# Step 1: Goods sold after 30 June were still there on 30 June
  They were sold at $7,500, but inventory is at cost. Mark-up 25% means cost = 100%, price = 125%
  Cost = $7,500 × 100/125 = $6,000. Add it back.
# Step 2: Goods bought after 30 June were NOT there on 30 June
  Take them off: $3,000
# Step 3: Inventory at 30 June
  $42,000 + $6,000 - $3,000 = $45,000
= Answer: $45,000
! Common trap: adding back $7,500. Inventory is valued at cost, so remove the profit first.`,
        ru: `Подсчёт был через 8 дней ПОСЛЕ конца года, поэтому идём назад к 30 июня.
# Шаг 1: Проданное после 30 июня на 30 июня ещё было
  Продано за $7,500, а запасы — по стоимости. Наценка 25%: стоимость = 100%, цена = 125%
  Стоимость = $7,500 × 100/125 = $6,000. Прибавляем.
# Шаг 2: Купленного после 30 июня на 30 июня НЕ было
  Вычитаем: $3,000
# Шаг 3: Запасы на 30 июня
  $42,000 + $6,000 - $3,000 = $45,000
= Ответ: $45,000
! Частая ошибка: прибавить $7,500. Запасы оцениваются по стоимости, сначала убираем прибыль.`,
        uz: `Sanash yil oxiridan 8 kun KEYIN bo'lgan, shuning uchun 30 iyunga orqaga boramiz.
# 1-qadam: 30 iyundan keyin sotilgan tovar 30 iyunda hali bor edi
  $7,500 ga sotilgan, zaxira esa qiymatda. 25% ustama: qiymat = 100%, narx = 125%
  Qiymat = $7,500 × 100/125 = $6,000. Qo'shamiz.
# 2-qadam: 30 iyundan keyin olingan tovar 30 iyunda YO'Q edi
  Ayiramiz: $3,000
# 3-qadam: 30 iyundagi zaxira
  $42,000 + $6,000 - $3,000 = $45,000
= Javob: $45,000
! Ko'p uchraydigan xato: $7,500 ni qo'shish. Zaxira qiymatda baholanadi, avval foydani olib tashlang.`,
      },
      correctValue: 45000,
      answerText: '$45,000',
    },
    {
      id: 'ch05-q157',
      kitRef: 157,
      topicId: 'chapter-05',
      type: 'number',
      text: 'What is gross profit for the quarter using continuous weighted average cost?',
      explanation: {
        en: `Continuous AVCO: work out a new average after each purchase and cost each sale at the average at that time.
# Step 1: January purchase
  5 × $14 = $70 + 15 × $18 = $270, total $340 for 20 units
  Average: $340 / 20 = $17
# Step 2: February sale of 12
  Cost: 12 × $17 = $204. Left: 8 units worth $136
# Step 3: March purchase
  $136 + 12 × $23 ($276) = $412 for 20 units
  New average: $412 / 20 = $20.60
# Step 4: March sale of 6
  Cost: 6 × $20.60 = $123.60
# Step 5: Gross profit
  Revenue: 18 units × $28 = $504
  Cost of sales: $204 + $123.60 = $327.60
= Answer: $504 - $327.60 = $176.40`,
        ru: `Непрерывное AVCO: после каждой покупки новая средняя, каждая продажа — по средней на тот момент.
# Шаг 1: Покупка в январе
  5 × $14 = $70 + 15 × $18 = $270, всего $340 за 20 штук
  Средняя: $340 / 20 = $17
# Шаг 2: Продажа 12 в феврале
  Себестоимость: 12 × $17 = $204. Осталось 8 штук на $136
# Шаг 3: Покупка в марте
  $136 + 12 × $23 ($276) = $412 за 20 штук
  Новая средняя: $412 / 20 = $20.60
# Шаг 4: Продажа 6 в марте
  Себестоимость: 6 × $20.60 = $123.60
# Шаг 5: Валовая прибыль
  Выручка: 18 штук × $28 = $504
  Себестоимость: $204 + $123.60 = $327.60
= Ответ: $504 - $327.60 = $176.40`,
        uz: `Uzluksiz AVCO: har bir xariddan keyin yangi o'rtacha, har bir sotuv o'sha paytdagi o'rtacha bilan.
# 1-qadam: Yanvar xaridi
  5 × $14 = $70 + 15 × $18 = $270, 20 dona uchun jami $340
  O'rtacha: $340 / 20 = $17
# 2-qadam: Fevralda 12 ta sotuv
  Tannarx: 12 × $17 = $204. $136 lik 8 dona qoldi
# 3-qadam: Mart xaridi
  $136 + 12 × $23 ($276) = 20 dona uchun $412
  Yangi o'rtacha: $412 / 20 = $20.60
# 4-qadam: Martda 6 ta sotuv
  Tannarx: 6 × $20.60 = $123.60
# 5-qadam: Yalpi foyda
  Tushum: 18 dona × $28 = $504
  Tannarx: $204 + $123.60 = $327.60
= Javob: $504 - $327.60 = $176.40`,
      },
      correctValue: 176.4,
      answerText: '$176.40',
      table: {
        head: ['When', 'Movement', 'Units', 'Per unit'],
        rows: [
          ['Start', 'Opening inventory', '5', '$14.00'],
          ['January', 'Purchases', '15', '$18.00'],
          ['February', 'Sales', '12', '$28.00'],
          ['March', 'Purchases', '12', '$23.00'],
          ['March (after purchase)', 'Sales', '6', '$28.00'],
        ],
      },
    },
    {
      id: 'ch05-q158',
      kitRef: 158,
      topicId: 'chapter-05',
      type: 'number',
      text: 'A business uses periodic weighted average cost. It opened with 50 units at $10, bought 30 at $14, then 20 at $16, and sold 60 for $1,000. What is closing inventory?',
      explanation: {
        en: `Periodic AVCO: one average for the whole period.
# Step 1: Total cost and units
  50 × $10 = $500, 30 × $14 = $420, 20 × $16 = $320
  $1,240 for 100 units
# Step 2: Average
  $1,240 / 100 = $12.40 each
# Step 3: Closing inventory
  100 - 60 sold = 40 left: 40 × $12.40 = $496
= Answer: $496
! Common trap: using the $1,000 selling price. Inventory is always valued at cost.`,
        ru: `Периодическое AVCO: одна средняя на весь период.
# Шаг 1: Вся стоимость и количество
  50 × $10 = $500, 30 × $14 = $420, 20 × $16 = $320
  $1,240 за 100 штук
# Шаг 2: Средняя
  $1,240 / 100 = $12.40 за штуку
# Шаг 3: Конечные запасы
  100 - 60 проданных = 40: 40 × $12.40 = $496
= Ответ: $496
! Частая ошибка: использовать цену продажи $1,000. Запасы всегда по стоимости.`,
        uz: `Davriy AVCO: butun davr uchun bitta o'rtacha.
# 1-qadam: Jami qiymat va son
  50 × $10 = $500, 30 × $14 = $420, 20 × $16 = $320
  100 dona uchun $1,240
# 2-qadam: O'rtacha
  $1,240 / 100 = har biri $12.40
# 3-qadam: Yakuniy zaxira
  100 - 60 sotilgan = 40 qoldi: 40 × $12.40 = $496
= Javob: $496
! Ko'p uchraydigan xato: $1,000 sotish narxini ishlatish. Zaxira doim qiymatda baholanadi.`,
      },
      correctValue: 496,
      answerText: '$496',
    },
    {
      id: 'ch05-q159',
      kitRef: 159,
      topicId: 'chapter-05',
      type: 'single',
      text: 'A wholesaler pays 5% commission on every sale. At what total should these three lines appear in inventory?',
      explanation: {
        en: `Test each line separately. NRV = selling price less the 5% commission.
# Line A
  NRV $3,600 × 95% = $3,420. Cost $3,000 is lower: $3,000
# Line B
  NRV $5,000 × 95% = $4,750. NRV is lower than cost $5,000: $4,750
# Line C
  NRV $1,600 × 95% = $1,520. Cost $1,500 is lower: $1,500
= Answer: $3,000 + $4,750 + $1,500 = $9,250
! Common trap: forgetting the commission ($9,500) or comparing totals.`,
        ru: `Проверяем каждую строку отдельно. ЧСР = цена продажи минус комиссия 5%.
# Строка A
  ЧСР $3,600 × 95% = $3,420. Стоимость $3,000 меньше: $3,000
# Строка B
  ЧСР $5,000 × 95% = $4,750. ЧСР меньше стоимости $5,000: $4,750
# Строка C
  ЧСР $1,600 × 95% = $1,520. Стоимость $1,500 меньше: $1,500
= Ответ: $3,000 + $4,750 + $1,500 = $9,250
! Частая ошибка: забыть комиссию ($9,500) или сравнивать итоги.`,
        uz: `Har bir qatorni alohida tekshiramiz. SSQ = sotish narxi minus 5% komissiya.
# A qator
  SSQ $3,600 × 95% = $3,420. Qiymat $3,000 kichik: $3,000
# B qator
  SSQ $5,000 × 95% = $4,750. SSQ $5,000 qiymatdan kichik: $4,750
# C qator
  SSQ $1,600 × 95% = $1,520. Qiymat $1,500 kichik: $1,500
= Javob: $3,000 + $4,750 + $1,500 = $9,250
! Ko'p uchraydigan xato: komissiyani unutish ($9,500) yoki jamlarni solishtirish.`,
      },
      options: ['$9,000', '$9,250', '$9,500', '$9,690'],
      correctIndex: 1,
      table: {
        head: ['Line', 'Cost', 'Selling price'],
        rows: [
          ['Line A', '$3,000', '$3,600'],
          ['Line B', '$5,000', '$5,000'],
          ['Line C', '$1,500', '$1,600'],
        ],
      },
    },
    {
      id: 'ch05-q160',
      kitRef: 160,
      topicId: 'chapter-05',
      type: 'single',
      text: 'Opening inventory is 20 units at $4.00. In May, 6 units are sold, 10 are bought at $4.50, and then 10 are sold. What is closing inventory using FIFO?',
      explanation: {
        en: `FIFO: the oldest units go first, the newest stay.
# Step 1: Units left
  20 - 6 + 10 - 10 = 14
# Step 2: Which 14 are left?
  The newest: all 10 bought at $4.50 = $45
  Plus 4 of the old ones at $4.00 = $16
= Answer: $45 + $16 = $61.00`,
        ru: `FIFO: самые старые уходят первыми, новые остаются.
# Шаг 1: Сколько осталось
  20 - 6 + 10 - 10 = 14
# Шаг 2: Какие 14 остались?
  Самые новые: все 10 по $4.50 = $45
  Плюс 4 старых по $4.00 = $16
= Ответ: $45 + $16 = $61.00`,
        uz: `FIFO: eng eskilari birinchi ketadi, yangilari qoladi.
# 1-qadam: Qancha qoldi
  20 - 6 + 10 - 10 = 14
# 2-qadam: Qaysi 14 tasi qoldi?
  Eng yangilari: $4.50 dan olingan 10 tasi = $45
  Plus $4.00 lik eskilardan 4 tasi = $16
= Javob: $45 + $16 = $61.00`,
      },
      options: ['$56.00', '$59.50', '$61.00', '$63.00'],
      correctIndex: 2,
    },
    {
      id: 'ch05-q161',
      kitRef: 161,
      topicId: 'chapter-05',
      type: 'single',
      text: 'Inventory costing $1,500 with an NRV of $1,100 was left out of the closing inventory count. What is the effect on profit of correcting this?',
      explanation: {
        en: `The missing goods must be added to closing inventory, at the lower of cost and NRV.
# Step 1: Value of the goods
  Cost $1,500, NRV $1,100. Lower: $1,100
# Step 2: Effect on profit
  Closing inventory up $1,100, so cost of sales down $1,100, so profit UP $1,100
= Answer: an increase of $1,100
! Common trap: $1,500. These goods must be written down to NRV before they are added.`,
        ru: `Пропущенный товар нужно добавить в конечные запасы по меньшей из стоимости и ЧСР.
# Шаг 1: Оценка товара
  Стоимость $1,500, ЧСР $1,100. Меньшее: $1,100
# Шаг 2: Влияние на прибыль
  Конечные запасы +$1,100, себестоимость -$1,100, прибыль РАСТЁТ на $1,100
= Ответ: рост на $1,100
! Частая ошибка: $1,500. Товар сначала уценивают до ЧСР, потом добавляют.`,
        uz: `Tushib qolgan tovar yakuniy zaxiraga qiymat va SSQ dan kichigida qo'shiladi.
# 1-qadam: Tovar bahosi
  Qiymat $1,500, SSQ $1,100. Kichigi: $1,100
# 2-qadam: Foydaga ta'sir
  Yakuniy zaxira +$1,100, tannarx -$1,100, foyda $1,100 ga OSHADI
= Javob: $1,100 ga oshish
! Ko'p uchraydigan xato: $1,500. Tovar avval SSQ gacha arzonlashtiriladi, keyin qo'shiladi.`,
      },
      options: ['An increase of $1,100', 'An increase of $1,500', 'A decrease of $400', 'No effect'],
      correctIndex: 0,
    },
    {
      id: 'ch05-q162',
      kitRef: 162,
      topicId: 'chapter-05',
      type: 'number',
      text: 'A company sells three products. What is the value of inventory at the year end?',
      explanation: {
        en: `For each product: NRV = selling price - selling expenses. Then take the lower of cost and NRV.
# Standard
  NRV $8 - $1 = $7. Cost $5 is lower. 100 × $5 = $500
# Deluxe
  NRV $13 - $5 = $8. Lower than cost $10. 300 × $8 = $2,400
# Premium
  NRV $17 - $4 = $13. Lower than cost $20. 100 × $13 = $1,300
= Answer: $500 + $2,400 + $1,300 = $4,200`,
        ru: `Для каждого товара: ЧСР = цена продажи - расходы на продажу. Затем меньшее из стоимости и ЧСР.
# Standard
  ЧСР $8 - $1 = $7. Стоимость $5 меньше. 100 × $5 = $500
# Deluxe
  ЧСР $13 - $5 = $8. Меньше стоимости $10. 300 × $8 = $2,400
# Premium
  ЧСР $17 - $4 = $13. Меньше стоимости $20. 100 × $13 = $1,300
= Ответ: $500 + $2,400 + $1,300 = $4,200`,
        uz: `Har bir mahsulot uchun: SSQ = sotish narxi - sotish xarajatlari. Keyin qiymat va SSQ dan kichigi.
# Standard
  SSQ $8 - $1 = $7. Qiymat $5 kichik. 100 × $5 = $500
# Deluxe
  SSQ $13 - $5 = $8. Qiymat $10 dan kichik. 300 × $8 = $2,400
# Premium
  SSQ $17 - $4 = $13. Qiymat $20 dan kichik. 100 × $13 = $1,300
= Javob: $500 + $2,400 + $1,300 = $4,200`,
      },
      correctValue: 4200,
      answerText: '$4,200',
      table: {
        head: ['', 'Standard', 'Deluxe', 'Premium'],
        rows: [
          ['Original cost per unit', '$5', '$10', '$20'],
          ['Selling price per unit', '$8', '$13', '$17'],
          ['Selling expenses per unit', '$1', '$5', '$4'],
          ['Units in inventory', '100', '300', '100'],
        ],
      },
    },
    {
      id: 'ch05-q163',
      kitRef: 163,
      topicId: 'chapter-05',
      type: 'single',
      text: 'When prices are rising, how does FIFO compare with weighted average cost?',
      explanation: {
        en: `When prices rise, the newest goods are the most expensive. FIFO leaves those newest goods in inventory.
# Closing inventory
  Made of the dearest goods, so HIGHER
# Cost of sales
  Made of the older, cheaper goods, so LOWER
# Profit
  Lower cost of sales, so HIGHER
= Answer: lower cost of sales, higher profit, higher closing inventory`,
        ru: `При росте цен самые новые товары самые дорогие. FIFO оставляет в запасах именно их.
# Конечные запасы
  Из самых дорогих товаров, значит ВЫШЕ
# Себестоимость
  Из старых, дешёвых товаров, значит НИЖЕ
# Прибыль
  Себестоимость ниже, значит прибыль ВЫШЕ
= Ответ: ниже себестоимость, выше прибыль, выше конечные запасы`,
        uz: `Narxlar oshganda eng yangi tovarlar eng qimmat. FIFO aynan ularni zaxirada qoldiradi.
# Yakuniy zaxira
  Eng qimmat tovarlardan, demak YUQORI
# Tannarx
  Eski, arzon tovarlardan, demak PAST
# Foyda
  Tannarx past, demak foyda YUQORI
= Javob: past tannarx, yuqori foyda, yuqori yakuniy zaxira`,
      },
      options: [
        'Lower cost of sales, higher profit, higher closing inventory',
        'Lower cost of sales, higher profit, lower closing inventory',
        'Higher cost of sales, lower profit, higher closing inventory',
        'Higher cost of sales, higher profit, lower closing inventory',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch05-q164',
      kitRef: 164,
      topicId: 'chapter-05',
      type: 'single',
      text: 'A business uses periodic weighted average cost. When is the unit average cost worked out?',
      explanation: {
        en: `"Periodic" means once per period.
= Answer: once, at the end of the accounting period
Only then are all the purchases for the period known, so one average can be worked out for everything.
- After each purchase: that is continuous AVCO.`,
        ru: `«Периодический» — раз в период.
= Ответ: один раз, в конце отчётного периода
Только тогда известны все закупки периода, и можно найти одну среднюю на всё.
- После каждой покупки: это непрерывное AVCO.`,
        uz: `«Davriy» — davrda bir marta.
= Javob: bir marta, hisobot davri oxirida
Faqat shunda davrning barcha xaridlari ma'lum bo'ladi va hamma narsa uchun bitta o'rtacha topiladi.
- Har bir xariddan keyin: bu uzluksiz AVCO.`,
      },
      options: [
        'After each purchase',
        'After each sale',
        'Once, at the end of the accounting period',
        'After each purchase or sale',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch05-q165',
      kitRef: 165,
      topicId: 'chapter-05',
      type: 'single',
      text: 'A business uses continuous weighted average cost. When is the unit average cost worked out?',
      explanation: {
        en: `Only a PURCHASE changes the average, because it adds units at a new price.
# Why not after a sale?
  A sale takes units out at the current average, so the average of what is left stays the same
= Answer: after each purchase`,
        ru: `Среднюю меняет только ПОКУПКА: она добавляет единицы по новой цене.
# Почему не после продажи?
  Продажа забирает единицы по текущей средней, поэтому средняя остатка не меняется
= Ответ: после каждой покупки`,
        uz: `O'rtachani faqat XARID o'zgartiradi: u yangi narxda dona qo'shadi.
# Nega sotuvdan keyin emas?
  Sotuv donalarni joriy o'rtachada olib chiqadi, qolganining o'rtachasi o'zgarmaydi
= Javob: har bir xariddan keyin`,
      },
      options: [
        'After each sale',
        'After each purchase',
        'Once, at the end of the accounting period',
        'After each purchase or sale',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch05-q166',
      kitRef: 166,
      topicId: 'chapter-05',
      type: 'number',
      text: 'Using continuous weighted average cost, what is closing inventory? 3 Feb: bought 20 units at $4.00. 6 Feb: sold 8 units at $7.00. 9 Feb: bought 8 units at $5.00.',
      explanation: {
        en: `Continuous AVCO, in date order.
# 3 Feb: buy 20 at $4.00
  20 units, $80, average $4.00
# 6 Feb: sell 8
  At the current average $4.00. Left: 12 units, 12 × $4 = $48
# 9 Feb: buy 8 at $5.00
  $48 + $40 = $88 for 20 units
= Answer: closing inventory $88.00`,
        ru: `Непрерывное AVCO по датам.
# 3 февраля: купили 20 по $4.00
  20 штук, $80, средняя $4.00
# 6 февраля: продали 8
  По текущей средней $4.00. Осталось 12 штук, 12 × $4 = $48
# 9 февраля: купили 8 по $5.00
  $48 + $40 = $88 за 20 штук
= Ответ: конечные запасы $88.00`,
        uz: `Uzluksiz AVCO, sana tartibida.
# 3 fevral: $4.00 dan 20 ta olindi
  20 dona, $80, o'rtacha $4.00
# 6 fevral: 8 tasi sotildi
  Joriy o'rtacha $4.00 da. Qoldi 12 dona, 12 × $4 = $48
# 9 fevral: $5.00 dan 8 ta olindi
  $48 + $40 = 20 dona uchun $88
= Javob: yakuniy zaxira $88.00`,
      },
      correctValue: 88,
      answerText: '$88.00',
    },
    {
      id: 'ch05-q167',
      kitRef: 167,
      topicId: 'chapter-05',
      type: 'number',
      text: 'Using periodic weighted average cost, what is closing inventory? 10 Apr: bought 20 units at $4.00. 13 Apr: sold 8 units at $7.00. 16 Apr: bought 10 units at $5.50.',
      explanation: {
        en: `Periodic AVCO: one average for all purchases in the period.
# Step 1: Total cost and units
  20 × $4.00 = $80 + 10 × $5.50 = $55, so $135 for 30 units
# Step 2: Average
  $135 / 30 = $4.50
# Step 3: Closing inventory
  30 - 8 sold = 22 left: 22 × $4.50 = $99
= Answer: $99.00
Compare question 166: the timing of the sale does not matter here, because the average is worked out once at the end.`,
        ru: `Периодическое AVCO: одна средняя на все закупки периода.
# Шаг 1: Вся стоимость и количество
  20 × $4.00 = $80 + 10 × $5.50 = $55, значит $135 за 30 штук
# Шаг 2: Средняя
  $135 / 30 = $4.50
# Шаг 3: Конечные запасы
  30 - 8 проданных = 22: 22 × $4.50 = $99
= Ответ: $99.00
Сравните с вопросом 166: здесь неважно, когда была продажа, потому что средняя считается один раз в конце.`,
        uz: `Davriy AVCO: davrdagi barcha xaridlar uchun bitta o'rtacha.
# 1-qadam: Jami qiymat va son
  20 × $4.00 = $80 + 10 × $5.50 = $55, demak 30 dona uchun $135
# 2-qadam: O'rtacha
  $135 / 30 = $4.50
# 3-qadam: Yakuniy zaxira
  30 - 8 sotilgan = 22: 22 × $4.50 = $99
= Javob: $99.00
166-savol bilan solishtiring: bu yerda sotuv qachon bo'lgani ahamiyatsiz, chunki o'rtacha oxirida bir marta hisoblanadi.`,
      },
      correctValue: 99,
      answerText: '$99.00',
    },
    {
      id: 'ch05-q168',
      kitRef: 168,
      topicId: 'chapter-05',
      type: 'number',
      text: 'Using periodic weighted average cost, what is cost of sales for April?',
      explanation: {
        en: `Periodic AVCO: one average for everything in April.
# Step 1: Total cost and units
  5 × $3 = $15 + 10 × $4 = $40 + 5 × $5 = $25, so $80 for 20 units
# Step 2: Average
  $80 / 20 = $4.00
# Step 3: Cost of sales
  Units sold: 5 + 7 = 12. 12 × $4.00 = $48
= Answer: $48.00
! Common trap: using the selling prices ($7.00, $7.50). Cost of sales is at cost.`,
        ru: `Периодическое AVCO: одна средняя на весь апрель.
# Шаг 1: Вся стоимость и количество
  5 × $3 = $15 + 10 × $4 = $40 + 5 × $5 = $25, значит $80 за 20 штук
# Шаг 2: Средняя
  $80 / 20 = $4.00
# Шаг 3: Себестоимость
  Продано: 5 + 7 = 12. 12 × $4.00 = $48
= Ответ: $48.00
! Частая ошибка: взять цены продажи ($7.00, $7.50). Себестоимость — по стоимости.`,
        uz: `Davriy AVCO: butun aprel uchun bitta o'rtacha.
# 1-qadam: Jami qiymat va son
  5 × $3 = $15 + 10 × $4 = $40 + 5 × $5 = $25, demak 20 dona uchun $80
# 2-qadam: O'rtacha
  $80 / 20 = $4.00
# 3-qadam: Tannarx
  Sotilgan: 5 + 7 = 12. 12 × $4.00 = $48
= Javob: $48.00
! Ko'p uchraydigan xato: sotish narxlarini ($7.00, $7.50) olish. Tannarx — qiymatda.`,
      },
      correctValue: 48,
      answerText: '$48.00',
      table: {
        head: ['Date', 'Movement', 'Units', 'Per unit'],
        rows: [
          ['1 Apr', 'Opening inventory', '5', '$3.00'],
          ['9 Apr', 'Purchases', '10', '$4.00'],
          ['14 Apr', 'Sales', '5', '$7.00'],
          ['19 Apr', 'Purchases', '5', '$5.00'],
          ['26 Apr', 'Sales', '7', '$7.50'],
        ],
      },
    },
    {
      id: 'ch05-q169',
      kitRef: 169,
      topicId: 'chapter-05',
      type: 'number',
      text: 'Using continuous weighted average cost, what is cost of sales for April?',
      explanation: {
        en: `Continuous AVCO: a new average after each purchase.
# Step 1: After the 8 April purchase
  6 × $3 = $18 + 10 × $5 = $50, so $68 for 16 units. Average $68 / 16 = $4.25
# Step 2: 12 April sale of 8
  8 × $4.25 = $34. Left: 8 units worth $34
# Step 3: After the 20 April purchase
  $34 + 8 × $6 ($48) = $82 for 16 units. Average $82 / 16 = $5.125
# Step 4: 27 April sale of 4
  4 × $5.125 = $20.50
= Answer: cost of sales $34 + $20.50 = $54.50`,
        ru: `Непрерывное AVCO: новая средняя после каждой покупки.
# Шаг 1: После покупки 8 апреля
  6 × $3 = $18 + 10 × $5 = $50, значит $68 за 16 штук. Средняя $68 / 16 = $4.25
# Шаг 2: Продажа 8 штук 12 апреля
  8 × $4.25 = $34. Осталось 8 штук на $34
# Шаг 3: После покупки 20 апреля
  $34 + 8 × $6 ($48) = $82 за 16 штук. Средняя $82 / 16 = $5.125
# Шаг 4: Продажа 4 штук 27 апреля
  4 × $5.125 = $20.50
= Ответ: себестоимость $34 + $20.50 = $54.50`,
        uz: `Uzluksiz AVCO: har bir xariddan keyin yangi o'rtacha.
# 1-qadam: 8 apreldagi xariddan keyin
  6 × $3 = $18 + 10 × $5 = $50, demak 16 dona uchun $68. O'rtacha $68 / 16 = $4.25
# 2-qadam: 12 aprelda 8 dona sotuv
  8 × $4.25 = $34. $34 lik 8 dona qoldi
# 3-qadam: 20 apreldagi xariddan keyin
  $34 + 8 × $6 ($48) = 16 dona uchun $82. O'rtacha $82 / 16 = $5.125
# 4-qadam: 27 aprelda 4 dona sotuv
  4 × $5.125 = $20.50
= Javob: tannarx $34 + $20.50 = $54.50`,
      },
      correctValue: 54.5,
      answerText: '$54.50',
      table: {
        head: ['Date', 'Movement', 'Units', 'Per unit'],
        rows: [
          ['1 Apr', 'Opening inventory', '6', '$3.00'],
          ['8 Apr', 'Purchases', '10', '$5.00'],
          ['12 Apr', 'Sales', '8', '$8.00'],
          ['20 Apr', 'Purchases', '8', '$6.00'],
          ['27 Apr', 'Sales', '4', '$8.50'],
        ],
      },
    },
    {
      id: 'ch05-q170',
      kitRef: 170,
      topicId: 'chapter-05',
      type: 'single',
      text: 'From a financial reporting point of view, why keep continuous and period-end inventory records?',
      explanation: {
        en: `The key words are "financial reporting". What does the financial statement need from inventory records?
- Variances between expected and actual use: a management accounting use.
- Help setting selling prices: also management.
- The average cost of a unit: only part of the job.
- The quantity and cost of inventory for the statements: exactly what financial reporting needs.
= Answer: they give the quantity and cost of inventory for the financial statements`,
        ru: `Ключевые слова — «финансовая отчётность». Что отчётности нужно от учёта запасов?
- Отклонения между ожидаемым и фактическим расходом: управленческий учёт.
- Помощь в установлении цен: тоже управленческий.
- Средняя стоимость единицы: лишь часть задачи.
- Количество и стоимость запасов для отчётности: именно то, что нужно отчётности.
= Ответ: они дают количество и стоимость запасов для финансовой отчётности`,
        uz: `Kalit so'zlar — «moliyaviy hisobot». Hisobotga zaxira yozuvlaridan nima kerak?
- Kutilgan va haqiqiy sarf farqlari: boshqaruv hisobi.
- Narx belgilashga yordam: bu ham boshqaruv.
- Bir dona o'rtacha qiymati: vazifaning bir qismi, xolos.
- Hisobot uchun zaxira soni va qiymati: aynan moliyaviy hisobotga kerak narsa.
= Javob: ular moliyaviy hisobot uchun zaxira soni va qiymatini beradi`,
      },
      options: [
        'They show variances between expected and actual usage',
        'They help management set selling prices',
        'They give the average cost of a unit',
        'They give the quantity and cost of inventory for the financial statements',
      ],
      correctIndex: 3,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
