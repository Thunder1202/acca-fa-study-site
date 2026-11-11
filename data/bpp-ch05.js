'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 6 (inventory),
// reworded with new figures. bppRef/bppPage point to BPP's own answer. Left out: 6.13 and 6.15 (same skill as
// 6.2 and 6.1/6.8), 6.16 (a change of accounting policy, not in Kaplan's chapter) and 6.17 (Kaplan does not
// cover its point). 6.5 drops BPP's row on the retail method, which Kaplan does not teach.
(function () {
  const TOPIC = 'chapter-05';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp05-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('6.1', 203, 'number', `A company's year ends on 31 March. It counted its inventory on 6 April and got $812,000 at cost. Between 31 March and 6 April it bought goods for $9,400, sold goods for $13,800 at a mark-up of 20% on cost, and returned goods costing $1,250 to a supplier. What is inventory at 31 March? (in $)`,
      amount(815350, '$815,350'),
`# Step 1: Undo each movement since the year end
  Goods bought after the year end were not there on 31 March: take off 9,400.
  Goods sold after the year end WERE there: add back their cost.
  Goods returned after the year end WERE there: add back 1,250.
# Step 2: Cost of the goods sold
  Mark-up 20% on cost, so selling price = 120% of cost
  13,800 x 100/120 = 11,500
# Step 3: Put it together
  812,000 - 9,400 + 11,500 + 1,250 = 815,350
= Answer: $815,350
! Add back goods sold at COST, not at selling price.`,
`# Шаг 1: Отменим каждое движение после конца года
  Купленного после конца года 31 марта ещё не было: вычтем 9 400.
  Проданное после конца года 31 марта БЫЛО: прибавим по себестоимости.
  Возвращённое после конца года БЫЛО: прибавим 1 250.
# Шаг 2: Себестоимость проданного
  Наценка 20% на себестоимость, значит цена = 120% себестоимости
  13 800 x 100/120 = 11 500
# Шаг 3: Соберём
  812 000 - 9 400 + 11 500 + 1 250 = 815 350
= Ответ: $815 350
! Проданное прибавляют по СЕБЕСТОИМОСТИ, а не по цене продажи.`,
`# 1-qadam: Yil oxiridan keyingi har bir harakatni bekor qilamiz
  Yil oxiridan keyin sotib olingan 31 martda yo'q edi: 9 400 ni ayiramiz.
  Yil oxiridan keyin sotilgan 31 martda BOR edi: tannarx bo'yicha qo'shamiz.
  Yil oxiridan keyin qaytarilgan BOR edi: 1 250 ni qo'shamiz.
# 2-qadam: Sotilganning tannarxi
  Tannarxga 20% ustama, demak narx = tannarxning 120%
  13 800 x 100/120 = 11 500
# 3-qadam: Jamlaymiz
  812 000 - 9 400 + 11 500 + 1 250 = 815 350
= Javob: $815 350
! Sotilganni sotish narxida emas, TANNARXDA qo'shing.`),

    q('6.2', 203, 'single', `A manufacturer works out the cost of its finished goods inventory. Which of these costs can be included? (1) Carriage inwards. (2) Carriage outwards. (3) Depreciation of factory plant. (4) Storage of finished goods. (5) Factory supervisors' wages.`,
      pick(['1 and 5 only', '1, 3 and 5 only', '2, 4 and 5 only', '1, 2, 3 and 4 only'], 1),
`Rule (IAS 2): cost = cost of purchase + cost of conversion. Selling and storage costs are left out.
- (1) Carriage inwards: part of the cost of purchase. IN.
- (2) Carriage outwards: a selling cost. OUT.
- (3) Factory plant depreciation: a production overhead. IN.
- (4) Storing finished goods: a storage cost. OUT.
- (5) Factory supervisors: a production overhead. IN.
= Answer: 1, 3 and 5 only`,
`Правило (IAS 2): себестоимость = затраты на покупку + затраты на переработку. Затраты на продажу и хранение не включают.
- (1) Доставка до склада: часть затрат на покупку. ДА.
- (2) Доставка покупателю: затраты на продажу. НЕТ.
- (3) Амортизация заводского оборудования: производственные накладные расходы. ДА.
- (4) Хранение готовой продукции: затраты на хранение. НЕТ.
- (5) Мастера цеха: производственные накладные расходы. ДА.
= Ответ: только 1, 3 и 5`,
`Qoida (IAS 2): tannarx = xarid xarajatlari + qayta ishlash xarajatlari. Sotish va saqlash xarajatlari kiritilmaydi.
- (1) Omborgacha tashish: xarid xarajatining qismi. HA.
- (2) Xaridorga tashish: sotish xarajati. YO'Q.
- (3) Zavod uskunasi amortizatsiyasi: ishlab chiqarish ustama xarajati. HA.
- (4) Tayyor mahsulotni saqlash: saqlash xarajati. YO'Q.
- (5) Sex ustalari: ishlab chiqarish ustama xarajati. HA.
= Javob: faqat 1, 3 va 5`),

    q('6.3', 203, 'single', `Closing inventory at cost is $196,500. It includes: (1) 300 jackets that cost $70 each and normally sell for $130. They were faulty and were sold after the year end at half the normal price, with selling costs of 4% of the proceeds. (2) 500 shirts that cost $16 each. They were also faulty. After the year end, repairs cost $4 a shirt, selling costs for the batch were $600, and they sold for $22 each. What is the correct inventory value?`,
      pick(['$192,220', '$194,220', '$195,000', '$196,500'], 1),
`Rule: each line at the lower of cost and net realisable value (NRV). NRV = selling price - costs to complete and sell.
# Step 1: Jackets
  Selling price: 130 x 50% = 65 each, so 300 x 65 = 19,500
  Less selling costs: 19,500 x 4% = 780
  NRV = 18,720. Cost = 300 x 70 = 21,000
  NRV is lower, so write down by 21,000 - 18,720 = 2,280
# Step 2: Shirts
  Sales 500 x 22 = 11,000
  Less repairs 500 x 4 = 2,000 and selling costs 600
  NRV = 8,400. Cost = 500 x 16 = 8,000
  Cost is lower, so no change
# Step 3: Adjust the total
  196,500 - 2,280 = 194,220
= Answer: $194,220
! Repairs reduce NRV. They are not added to cost.`,
`Правило: каждую позицию по меньшей из себестоимости и чистой цены продажи (NRV). NRV = цена - затраты на доработку и продажу.
# Шаг 1: Куртки
  Цена: 130 x 50% = 65 за штуку, значит 300 x 65 = 19 500
  Минус затраты на продажу: 19 500 x 4% = 780
  NRV = 18 720. Себестоимость = 300 x 70 = 21 000
  NRV меньше, списываем 21 000 - 18 720 = 2 280
# Шаг 2: Рубашки
  Продажи 500 x 22 = 11 000
  Минус ремонт 500 x 4 = 2 000 и затраты на продажу 600
  NRV = 8 400. Себестоимость = 500 x 16 = 8 000
  Себестоимость меньше, ничего не меняем
# Шаг 3: Скорректируем итог
  196 500 - 2 280 = 194 220
= Ответ: $194 220
! Ремонт уменьшает NRV. К себестоимости его не прибавляют.`,
`Qoida: har bir pozitsiya tannarx va sof sotish qiymatining (NRV) kichigida. NRV = narx - yakunlash va sotish xarajatlari.
# 1-qadam: Kurtkalar
  Narx: 130 x 50% = 65 dona uchun, demak 300 x 65 = 19 500
  Minus sotish xarajatlari: 19 500 x 4% = 780
  NRV = 18 720. Tannarx = 300 x 70 = 21 000
  NRV kichik, 21 000 - 18 720 = 2 280 ga kamaytiramiz
# 2-qadam: Ko'ylaklar
  Sotuv 500 x 22 = 11 000
  Minus ta'mir 500 x 4 = 2 000 va sotish xarajatlari 600
  NRV = 8 400. Tannarx = 500 x 16 = 8 000
  Tannarx kichik, o'zgarish yo'q
# 3-qadam: Jamini tuzatamiz
  196 500 - 2 280 = 194 220
= Javob: $194 220
! Ta'mir NRV ni kamaytiradi. U tannarxga qo'shilmaydi.`),

    q('6.4', 204, 'single', `A company uses FIFO. On 1 July it held 600 units at $150 each. During the year: 1 August bought 400 units at $170; 1 October sold 350 units; 1 January bought 200 units at $180; 1 March sold 500 units. What is closing inventory at 30 June?`,
      pick(['$61,500', '$52,500', '$63,000', '$56,583'], 0),
`FIFO: the oldest units are sold first, so the newest units are left.
# Step 1: Units left
  600 + 400 - 350 + 200 - 500 = 350
# Step 2: Which units are they?
  The newest purchase: 200 at $180
  The next newest: 150 of the August units at $170
# Step 3: Value
  200 x 180 = 36,000
  150 x 170 = 25,500
  36,000 + 25,500 = 61,500
= Answer: $61,500`,
`FIFO: первыми продают самые старые единицы, остаются самые новые.
# Шаг 1: Сколько осталось
  600 + 400 - 350 + 200 - 500 = 350
# Шаг 2: Какие это единицы?
  Последняя закупка: 200 по $180
  Предыдущая: 150 единиц августа по $170
# Шаг 3: Стоимость
  200 x 180 = 36 000
  150 x 170 = 25 500
  36 000 + 25 500 = 61 500
= Ответ: $61 500`,
`FIFO: birinchi eng eski birliklar sotiladi, eng yangilari qoladi.
# 1-qadam: Qancha qoldi
  600 + 400 - 350 + 200 - 500 = 350
# 2-qadam: Qaysi birliklar?
  Oxirgi xarid: 200 dona $180 dan
  Oldingisi: avgustdagi 150 dona $170 dan
# 3-qadam: Qiymat
  200 x 180 = 36 000
  150 x 170 = 25 500
  36 000 + 25 500 = 61 500
= Javob: $61 500`),

    q('6.5', 204, 'matrix', `Under IAS 2 Inventories, is each statement correct or incorrect?`,
      grid(['Correct', 'Incorrect'], [
        ['Inventory is normally valued at the higher of cost and net realisable value.', 1],
        ['The cost of goods a business makes includes materials and labour only. Overheads cannot be included.', 1],
        ['LIFO (last in, first out) cannot be used to value inventory.', 0],
      ]),
`Check each one against IAS 2.
- Higher of cost and NRV: wrong. It is the LOWER of the two.
- Materials and labour only: wrong. Production overheads, based on a normal level of production, are part of cost.
- LIFO not allowed: correct. IAS 2 allows FIFO and weighted average cost (and the actual cost of specific items), not LIFO.`,
`Сверим каждое с IAS 2.
- Большая из себестоимости и NRV: неверно. Берут МЕНЬШУЮ из двух.
- Только материалы и труд: неверно. Производственные накладные расходы при нормальном объёме входят в себестоимость.
- LIFO запрещён: верно. IAS 2 разрешает FIFO и средневзвешенную стоимость (и фактическую стоимость конкретных единиц), но не LIFO.`,
`Har birini IAS 2 bilan solishtiramiz.
- Tannarx va NRV ning kattasi: noto'g'ri. Ikkalasining KICHIGI olinadi.
- Faqat material va mehnat: noto'g'ri. Me'yoriy hajmdagi ishlab chiqarish ustama xarajatlari tannarxga kiradi.
- LIFO taqiqlangan: to'g'ri. IAS 2 FIFO va o'rtacha tortilgan tannarxga (va aniq birliklarning haqiqiy tannarxiga) ruxsat beradi, LIFO ga emas.`),

    q('6.6', 204, 'single', `A company's year ends on 30 September. It counted inventory on 3 October and got $512,400 at cost. Between 1 and 3 October: (1) goods costing $27,600 arrived from suppliers; (2) goods costing $11,200 were sold for $15,000; (3) a customer returned, in good condition, goods sold to them in September for $900 that had cost $650; (4) the company returned goods costing $2,100, bought in September, to the supplier. What is inventory at 30 September?`,
      pick(['$497,450', '$501,250', '$494,550', '$530,250'], 0),
`Ask of each item: was it in the warehouse on 30 September?
# Step 1: Undo each movement
  (1) Arrived after the year end, so not there: - 27,600
  (2) Sold after the year end, so it WAS there: + 11,200 at cost
  (3) Returned to us after the year end; on 30 September it was the customer's: - 650 at cost
  (4) Sent back after the year end, so it WAS there: + 2,100
# Step 2: Add up
  512,400 - 27,600 + 11,200 - 650 + 2,100 = 497,450
= Answer: $497,450
! Use cost for item (2), not the $15,000 selling price.`,
`Спросим о каждом: был ли товар на складе 30 сентября?
# Шаг 1: Отменим каждое движение
  (1) Пришёл после конца года, его не было: - 27 600
  (2) Продан после конца года, значит БЫЛ: + 11 200 по себестоимости
  (3) Возвращён нам после конца года; 30 сентября он принадлежал покупателю: - 650 по себестоимости
  (4) Отправлен назад после конца года, значит БЫЛ: + 2 100
# Шаг 2: Сложим
  512 400 - 27 600 + 11 200 - 650 + 2 100 = 497 450
= Ответ: $497 450
! Для пункта (2) берите себестоимость, а не цену продажи $15 000.`,
`Har biri haqida so'raymiz: 30 sentyabrda u omborda bormidi?
# 1-qadam: Har bir harakatni bekor qilamiz
  (1) Yil oxiridan keyin keldi, yo'q edi: - 27 600
  (2) Yil oxiridan keyin sotildi, demak BOR edi: + 11 200 tannarxda
  (3) Yil oxiridan keyin bizga qaytarildi; 30 sentyabrda u xaridorniki edi: - 650 tannarxda
  (4) Yil oxiridan keyin qaytarib yuborildi, demak BOR edi: + 2 100
# 2-qadam: Qo'shamiz
  512 400 - 27 600 + 11 200 - 650 + 2 100 = 497 450
= Javob: $497 450
! (2) uchun $15 000 sotish narxini emas, tannarxni oling.`),

    q('6.7', 204, 'single', `A company's closing inventory this year is OVERSTATED by $80,000. If the error is not corrected, what is the effect?`,
      pick([
        "This year's profit is overstated and next year's profit is understated.",
        "This year's profit is understated and next year's profit is not affected.",
        "This year's profit is understated and next year's profit is overstated.",
        "This year's profit is overstated and next year's profit is not affected.",
      ], 0),
`# Step 1: This year
  Cost of sales = opening inventory + purchases - closing inventory
  Closing inventory too high, so cost of sales too low, so profit too HIGH.
# Step 2: Next year
  This year's closing inventory becomes next year's opening inventory.
  Opening inventory too high, so cost of sales too high, so profit too LOW.
= Answer: this year's profit is overstated and next year's profit is understated
! The error reverses in the next year. Over the two years together, total profit is right.`,
`# Шаг 1: Этот год
  Себестоимость продаж = запасы на начало + закупки - запасы на конец
  Запасы на конец завышены, себестоимость занижена, прибыль ЗАВЫШЕНА.
# Шаг 2: Следующий год
  Запасы на конец этого года — запасы на начало следующего.
  Запасы на начало завышены, себестоимость завышена, прибыль ЗАНИЖЕНА.
= Ответ: прибыль этого года завышена, а следующего — занижена
! Ошибка разворачивается в следующем году. За два года вместе общая прибыль верна.`,
`# 1-qadam: Shu yil
  Sotuv tannarxi = boshlang'ich zaxira + xaridlar - yakuniy zaxira
  Yakuniy zaxira oshirilgan, tannarx kamaygan, foyda OSHGAN.
# 2-qadam: Keyingi yil
  Shu yilning yakuniy zaxirasi keyingi yilning boshlang'ich zaxirasi bo'ladi.
  Boshlang'ich zaxira oshirilgan, tannarx oshgan, foyda KAMAYGAN.
= Javob: shu yil foydasi oshirilgan, keyingi yilniki kamaytirilgan
! Xato keyingi yilda teskari ta'sir qiladi. Ikki yil birga olinganda jami foyda to'g'ri.`),

    q('6.8', 204, 'single', `A company's year ends on 31 December. An inventory count on 5 January gave $438,600. Between 1 and 5 January it bought goods for $6,300, sold goods for $12,500 at a gross profit margin of 35% on sales, and returned goods costing $900 to a supplier. What is inventory at 31 December?`,
      pick(['$441,325', '$445,700', '$439,525', '$437,575'], 0),
`# Step 1: Cost of the goods sold
  Margin 35% on SALES, so cost = 65% of sales
  12,500 x 65% = 8,125
# Step 2: Undo each movement since the year end
  438,600 - 6,300 purchases + 8,125 goods sold + 900 returns
# Step 3: Total
  438,600 - 6,300 + 8,125 + 900 = 441,325
= Answer: $441,325
! A MARGIN is a % of selling price. A MARK-UP is a % of cost. Here 35% is a margin.`,
`# Шаг 1: Себестоимость проданного
  Маржа 35% от ПРОДАЖ, значит себестоимость = 65% продаж
  12 500 x 65% = 8 125
# Шаг 2: Отменим каждое движение после конца года
  438 600 - 6 300 закупки + 8 125 проданное + 900 возвраты
# Шаг 3: Итог
  438 600 - 6 300 + 8 125 + 900 = 441 325
= Ответ: $441 325
! МАРЖА — % от цены продажи. НАЦЕНКА — % от себестоимости. Здесь 35% — маржа.`,
`# 1-qadam: Sotilganning tannarxi
  Marja SOTUVning 35%, demak tannarx = sotuvning 65%
  12 500 x 65% = 8 125
# 2-qadam: Yil oxiridan keyingi har bir harakatni bekor qilamiz
  438 600 - 6 300 xaridlar + 8 125 sotilgan + 900 qaytarishlar
# 3-qadam: Jami
  438 600 - 6 300 + 8 125 + 900 = 441 325
= Javob: $441 325
! MARJA — sotish narxining %. USTAMA — tannarxning %. Bu yerda 35% — marja.`),

    q('6.9', 205, 'single', `Which statement about IAS 2 Inventories is correct?`,
      pick([
        "Production overheads are included in cost based on the company's normal level of activity.",
        'Trade discounts received are deducted from cost, and selling costs are added to it.',
        'FIFO, LIFO and weighted average cost are all acceptable ways to work out cost.',
        'Finished goods may be valued at materials plus labour only, without production overheads.',
      ], 0),
`Check each one.
- Overheads at a normal level of activity: correct. Otherwise inventory would be overvalued in a quiet period.
- Selling costs added: wrong. Trade discounts ARE deducted, but selling costs are never part of cost.
- LIFO acceptable: wrong. IAS 2 does not allow LIFO.
- No production overheads: wrong. They are part of the cost of conversion.
= Answer: production overheads are included based on the normal level of activity`,
`Проверим каждое.
- Накладные расходы при нормальном объёме: верно. Иначе в спокойный период запасы были бы завышены.
- Затраты на продажу прибавляют: неверно. Торговые скидки ВЫЧИТАЮТ, но затраты на продажу никогда не входят в себестоимость.
- LIFO допустим: неверно. IAS 2 не разрешает LIFO.
- Без производственных накладных: неверно. Они входят в затраты на переработку.
= Ответ: производственные накладные расходы включают исходя из нормального объёма`,
`Har birini tekshiramiz.
- Me'yoriy hajmdagi ustama xarajatlar: to'g'ri. Aks holda sokin davrda zaxira oshirib ko'rsatilardi.
- Sotish xarajatlari qo'shiladi: noto'g'ri. Savdo chegirmalari AYIRILADI, sotish xarajatlari esa hech qachon tannarxga kirmaydi.
- LIFO ruxsat: noto'g'ri. IAS 2 LIFO ga ruxsat bermaydi.
- Ishlab chiqarish ustamasisiz: noto'g'ri. Ular qayta ishlash xarajatiga kiradi.
= Javob: ishlab chiqarish ustama xarajatlari me'yoriy hajm asosida kiritiladi`),

    q('6.10', 205, 'single', `Closing inventory at cost is $53,240. This includes items that cost $2,480 and were damaged in transit. Repairs will cost $420, and the items can then be sold for $1,650. What is the correct inventory value?`,
      pick(['$51,990', '$52,410', '$53,240', '$50,760'], 0),
`# Step 1: NRV of the damaged items
  1,650 - 420 repairs = 1,230
# Step 2: Lower of cost and NRV
  Cost 2,480, NRV 1,230, so use 1,230
# Step 3: Adjust the total
  53,240 - 2,480 + 1,230 = 51,990
= Answer: $51,990
! Forgetting the repair cost gives $52,410.`,
`# Шаг 1: NRV повреждённых товаров
  1 650 - 420 ремонт = 1 230
# Шаг 2: Меньшая из себестоимости и NRV
  Себестоимость 2 480, NRV 1 230, берём 1 230
# Шаг 3: Скорректируем итог
  53 240 - 2 480 + 1 230 = 51 990
= Ответ: $51 990
! Если забыть ремонт, выйдет $52 410.`,
`# 1-qadam: Shikastlangan tovarlarning NRV
  1 650 - 420 ta'mir = 1 230
# 2-qadam: Tannarx va NRV ning kichigi
  Tannarx 2 480, NRV 1 230, 1 230 olamiz
# 3-qadam: Jamini tuzatamiz
  53 240 - 2 480 + 1 230 = 51 990
= Javob: $51 990
! Ta'mirni unutsangiz, $52 410 chiqadi.`),

    q('6.11', 205, 'single', `A shop sells three products. Per unit: Product A costs $8, sells for $11 and has selling costs of $2. Product B costs $12, sells for $15 and has selling costs of $5. Product C costs $25, sells for $22 and has selling costs of $4. It holds 300 A, 200 B and 120 C. What is the value of inventory?`,
      pick(['$6,560', '$7,800', '$6,860', '$7,440'], 0),
`Rule: lower of cost and NRV, item by item. NRV = selling price - selling costs.
# Step 1: Each product
  A: NRV 11 - 2 = 9. Cost 8 is lower. 300 x 8 = 2,400
  B: NRV 15 - 5 = 10. Lower than cost 12. 200 x 10 = 2,000
  C: NRV 22 - 4 = 18. Lower than cost 25. 120 x 18 = 2,160
# Step 2: Total
  2,400 + 2,000 + 2,160 = 6,560
= Answer: $6,560
! Compare each product on its own. Do not compare the totals.`,
`Правило: меньшая из себестоимости и NRV, по каждому товару. NRV = цена - затраты на продажу.
# Шаг 1: Каждый товар
  A: NRV 11 - 2 = 9. Себестоимость 8 меньше. 300 x 8 = 2 400
  B: NRV 15 - 5 = 10. Меньше себестоимости 12. 200 x 10 = 2 000
  C: NRV 22 - 4 = 18. Меньше себестоимости 25. 120 x 18 = 2 160
# Шаг 2: Итог
  2 400 + 2 000 + 2 160 = 6 560
= Ответ: $6 560
! Сравнивайте каждый товар отдельно, а не итоги.`,
`Qoida: tannarx va NRV ning kichigi, har bir tovar bo'yicha. NRV = narx - sotish xarajatlari.
# 1-qadam: Har bir tovar
  A: NRV 11 - 2 = 9. Tannarx 8 kichik. 300 x 8 = 2 400
  B: NRV 15 - 5 = 10. Tannarx 12 dan kichik. 200 x 10 = 2 000
  C: NRV 22 - 4 = 18. Tannarx 25 dan kichik. 120 x 18 = 2 160
# 2-qadam: Jami
  2 400 + 2 000 + 2 160 = 6 560
= Javob: $6 560
! Har bir tovarni alohida solishtiring, jamlarni emas.`),

    q('6.12', 205, 'single', `An inventory card shows: 1 March, 40 units held at $30 each; 6 March, bought 120 units at $34; 13 March, sold 90 units; 20 March, bought 60 units at $38; 27 March, sold 50 units. What is inventory at 31 March using FIFO?`,
      pick(['$2,560', '$2,720', '$2,960', '$3,040'], 2),
`# Step 1: Sale on 13 March (oldest first)
  All 40 at $30, then 50 at $34
  Left: 70 at $34
# Step 2: Purchase on 20 March
  Held: 70 at $34 and 60 at $38
# Step 3: Sale on 27 March (oldest first)
  50 at $34
  Left: 20 at $34 and 60 at $38
# Step 4: Value
  20 x 34 = 680
  60 x 38 = 2,280
  680 + 2,280 = 2,960
= Answer: $2,960`,
`# Шаг 1: Продажа 13 марта (сначала старые)
  Все 40 по $30, затем 50 по $34
  Осталось: 70 по $34
# Шаг 2: Закупка 20 марта
  Есть: 70 по $34 и 60 по $38
# Шаг 3: Продажа 27 марта (сначала старые)
  50 по $34
  Осталось: 20 по $34 и 60 по $38
# Шаг 4: Стоимость
  20 x 34 = 680
  60 x 38 = 2 280
  680 + 2 280 = 2 960
= Ответ: $2 960`,
`# 1-qadam: 13 martdagi sotuv (avval eskilari)
  Hammasi 40 dona $30 dan, so'ng 50 dona $34 dan
  Qoldi: 70 dona $34 dan
# 2-qadam: 20 martdagi xarid
  Bor: 70 dona $34 dan va 60 dona $38 dan
# 3-qadam: 27 martdagi sotuv (avval eskilari)
  50 dona $34 dan
  Qoldi: 20 dona $34 dan va 60 dona $38 dan
# 4-qadam: Qiymat
  20 x 34 = 680
  60 x 38 = 2 280
  680 + 2 280 = 2 960
= Javob: $2 960`),

    q('6.14', 205, 'single', `Closing inventory is $142,800 NOT counting two lines: (1) 500 items that cost $6 each, all sold after the year end for $5 each, with selling costs of $350 for the batch; (2) 150 items that cost $40 each and were faulty at the year end. After the year end, repairs cost $900 and they sold for $48 each, with selling costs of $240. What is the total inventory figure?`,
      pick(['$150,950', '$151,010', '$151,800', '$151,300'], 0),
`# Step 1: Line 1
  Cost 500 x 6 = 3,000
  NRV 500 x 5 - 350 = 2,150
  Use the lower: 2,150
# Step 2: Line 2
  Cost 150 x 40 = 6,000
  NRV 150 x 48 - 900 - 240 = 6,060
  Use the lower: 6,000
# Step 3: Add both lines to the total
  142,800 + 2,150 + 6,000 = 150,950
= Answer: $150,950
! These lines are NOT yet in the $142,800, so you add them, not adjust them.`,
`# Шаг 1: Позиция 1
  Себестоимость 500 x 6 = 3 000
  NRV 500 x 5 - 350 = 2 150
  Берём меньшую: 2 150
# Шаг 2: Позиция 2
  Себестоимость 150 x 40 = 6 000
  NRV 150 x 48 - 900 - 240 = 6 060
  Берём меньшую: 6 000
# Шаг 3: Прибавим обе позиции к итогу
  142 800 + 2 150 + 6 000 = 150 950
= Ответ: $150 950
! Этих позиций ещё НЕТ в $142 800, поэтому их прибавляют, а не корректируют.`,
`# 1-qadam: 1-pozitsiya
  Tannarx 500 x 6 = 3 000
  NRV 500 x 5 - 350 = 2 150
  Kichigini olamiz: 2 150
# 2-qadam: 2-pozitsiya
  Tannarx 150 x 40 = 6 000
  NRV 150 x 48 - 900 - 240 = 6 060
  Kichigini olamiz: 6 000
# 3-qadam: Ikkalasini jamiga qo'shamiz
  142 800 + 2 150 + 6 000 = 150 950
= Javob: $150 950
! Bu pozitsiyalar hali $142 800 ga KIRMAGAN, shuning uchun ular qo'shiladi, tuzatilmaydi.`),

    q('6.18', 206, 'single', `Item Z: 1 May, 60 units held at $25 each; 12 May, bought 40 units at $30 each; 30 May, sold 70 units at $55 each. Using continuous weighted average cost (AVCO), what is inventory of item Z at 31 May?`,
      pick(['$810', '$900', '$750', '$1,890'], 0),
`# Step 1: New average after the purchase
  60 x 25 = 1,500
  40 x 30 = 1,200
  (1,500 + 1,200) / 100 units = $27 a unit
# Step 2: Units left after the sale
  100 - 70 = 30
# Step 3: Value
  30 x 27 = 810
= Answer: $810
! The $55 selling price is never used to value inventory.`,
`# Шаг 1: Новая средняя после закупки
  60 x 25 = 1 500
  40 x 30 = 1 200
  (1 500 + 1 200) / 100 единиц = $27 за единицу
# Шаг 2: Осталось после продажи
  100 - 70 = 30
# Шаг 3: Стоимость
  30 x 27 = 810
= Ответ: $810
! Цена продажи $55 для оценки запасов не используется.`,
`# 1-qadam: Xariddan keyingi yangi o'rtacha
  60 x 25 = 1 500
  40 x 30 = 1 200
  (1 500 + 1 200) / 100 dona = dona uchun $27
# 2-qadam: Sotuvdan keyin qoldi
  100 - 70 = 30
# 3-qadam: Qiymat
  30 x 27 = 810
= Javob: $810
! $55 sotish narxi zaxirani baholashda ishlatilmaydi.`),

    q('6.19', 206, 'number', `Product R starts the year with nil inventory. 1 February: buys 20 units at $50. 1 March: buys 30 units at $60. 1 May: sells 15 units. 1 August: buys 25 units at $44. 1 November: sells 40 units. Using CONTINUOUS weighted average cost, what is inventory at the year end? (in $)`,
      amount(1020, '$1,020'),
`Continuous AVCO: work out a new average after EACH purchase. Sales go out at the current average.
# Step 1: After the first two purchases
  20 x 50 = 1,000
  30 x 60 = 1,800
  2,800 / 50 units = $56
# Step 2: Sale of 15
  35 units left x 56 = 1,960
# Step 3: Purchase of 25
  25 x 44 = 1,100
  (1,960 + 1,100) / 60 units = $51
# Step 4: Sale of 40
  20 units left x 51 = 1,020
= Answer: $1,020`,
`Непрерывный AVCO: новая средняя после КАЖДОЙ закупки. Продажи списывают по текущей средней.
# Шаг 1: После первых двух закупок
  20 x 50 = 1 000
  30 x 60 = 1 800
  2 800 / 50 единиц = $56
# Шаг 2: Продажа 15
  Осталось 35 единиц x 56 = 1 960
# Шаг 3: Закупка 25
  25 x 44 = 1 100
  (1 960 + 1 100) / 60 единиц = $51
# Шаг 4: Продажа 40
  Осталось 20 единиц x 51 = 1 020
= Ответ: $1 020`,
`Uzluksiz AVCO: HAR bir xariddan keyin yangi o'rtacha. Sotuvlar joriy o'rtachada chiqadi.
# 1-qadam: Dastlabki ikki xariddan keyin
  20 x 50 = 1 000
  30 x 60 = 1 800
  2 800 / 50 dona = $56
# 2-qadam: 15 dona sotuv
  Qoldi 35 dona x 56 = 1 960
# 3-qadam: 25 dona xarid
  25 x 44 = 1 100
  (1 960 + 1 100) / 60 dona = $51
# 4-qadam: 40 dona sotuv
  Qoldi 20 dona x 51 = 1 020
= Javob: $1 020`),

    q('6.20', 207, 'number', `Use the same transactions as the last question (nil opening inventory; buys 20 at $50, 30 at $60 and 25 at $44; sells 15 and then 40). This time the business uses PERIODIC weighted average cost for the year. What is inventory at the year end? (in $)`,
      amount(1040, '$1,040'),
`Periodic AVCO: one average for the whole period, from all purchases together.
# Step 1: Total cost and units bought
  1,000 + 1,800 + 1,100 = 3,900
  20 + 30 + 25 = 75 units
# Step 2: Average
  3,900 / 75 = $52 a unit
# Step 3: Units left
  75 - 15 - 40 = 20
# Step 4: Value
  20 x 52 = 1,040
= Answer: $1,040
! Same transactions, different method, different answer: continuous AVCO gave $1,020.`,
`Периодический AVCO: одна средняя на весь период по всем закупкам вместе.
# Шаг 1: Общая стоимость и количество закупок
  1 000 + 1 800 + 1 100 = 3 900
  20 + 30 + 25 = 75 единиц
# Шаг 2: Средняя
  3 900 / 75 = $52 за единицу
# Шаг 3: Осталось
  75 - 15 - 40 = 20
# Шаг 4: Стоимость
  20 x 52 = 1 040
= Ответ: $1 040
! Те же операции, другой метод, другой ответ: непрерывный AVCO дал $1 020.`,
`Davriy AVCO: barcha xaridlar bo'yicha butun davr uchun bitta o'rtacha.
# 1-qadam: Umumiy qiymat va xarid soni
  1 000 + 1 800 + 1 100 = 3 900
  20 + 30 + 25 = 75 dona
# 2-qadam: O'rtacha
  3 900 / 75 = dona uchun $52
# 3-qadam: Qoldi
  75 - 15 - 40 = 20
# 4-qadam: Qiymat
  20 x 52 = 1 040
= Javob: $1 040
! Bir xil operatsiyalar, boshqa usul, boshqa javob: uzluksiz AVCO $1 020 bergan edi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
