'use strict';

// Section B case questions: each is a scenario with several tasks worth 15 marks in total.
(function () {
  const task = (topic, marks, type, text, spec, en, ru, uz) => ({ topic: `chapter-${String(topic).padStart(2, '0')}`, marks, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex, extra = {}) => ({ options, correctIndex, ...extra });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText, extra = {}) => ({ correctValue, answerText, ...extra });
  const DCN = ['Debit', 'Credit', 'No entry'];
  const DC = ['Debit', 'Credit'];
  const AS = ['Add', 'Subtract'];
  const TF = ['True', 'False'];
  const IE = ['Included', 'Excluded'];
  const AE = ['Asset', 'Expense'];
  const RN = ['Relevant', 'Not relevant'];

  const cases = [
    {
      id: 'b01', kitRef: 1, area: 'statements', title: 'Amber Co',
      intro: `Amber Co is preparing its statement of profit or loss for the year ended 31 December 20X3. An extract from its trial balance is shown. Closing inventory at 31 December 20X3 was $36,000.`,
      table: { head: ['Trial balance extract', 'Dr $', 'Cr $'], rows: [['Revenue', '', '720,000'], ['Inventory at 1 January 20X3', '30,000', ''], ['Purchases', '310,000', ''], ['Carriage inwards', '4,000', ''], ['Carriage outwards', '2,500', ''], ['General and administrative expenses', '150,000', ''], ['Selling expenses', '60,000', ''], ['Returns inwards', '1,000', '']] },
      tasks: [
        task(15, 1, 'matrix', `Task 1(a): Where should each item be classified in the statement of profit or loss?`, grid(['Cost of sales', 'Selling expenses', 'Administrative expenses'], [['Carriage inwards', 0], ['Carriage outwards', 1]]),
          `Ask where each cost belongs: getting goods IN, or getting them OUT to customers?
- Carriage inwards: bringing bought goods to us is part of their cost. COST OF SALES.
- Carriage outwards: delivering to customers is part of selling. SELLING EXPENSES.`,
          `Спросим, куда относится расход: доставить товар К НАМ или ОТ НАС покупателям?
- Доставка от поставщика: доставка купленного товара — часть его стоимости. СЕБЕСТОИМОСТЬ.
- Доставка покупателям: доставка клиентам — часть продажи. КОММЕРЧЕСКИЕ РАСХОДЫ.`,
          `Xarajat qayerga tegishli ekanini so'raymiz: tovarni BIZGA olib kelishmi yoki mijozlarga olib BORISHmi?
- Yetkazib beruvchidan tashish: olingan tovarni olib kelish uning tannarxiga kiradi. TANNARX.
- Mijozlarga tashish: mijozlarga yetkazish sotishning qismi. SOTISH XARAJATLARI.`),
        task(15, 2, 'number', `Task 1(b): What is Amber Co's gross profit for the year?`, amount(411000, '$411,000'),
          `Gross profit = net revenue - cost of sales.
# Step 1: Net revenue
  Revenue $720,000 - returns inwards $1,000 = $719,000
# Step 2: Cost of sales
  Opening inventory $30,000 + purchases $310,000 + carriage inwards $4,000 - closing inventory $36,000 = $308,000
# Step 3: Gross profit
  $719,000 - $308,000 = $411,000
= Answer: $411,000
! Common trap: forgetting the returns inwards, or putting carriage outwards into cost of sales.`,
          `Валовая прибыль = чистая выручка - себестоимость.
# Шаг 1: Чистая выручка
  Выручка $720,000 - возвраты покупателей $1,000 = $719,000
# Шаг 2: Себестоимость
  Запасы на начало $30,000 + закупки $310,000 + доставка от поставщика $4,000 - запасы на конец $36,000 = $308,000
# Шаг 3: Валовая прибыль
  $719,000 - $308,000 = $411,000
= Ответ: $411,000
! Частая ошибка: забыть возвраты покупателей или включить доставку покупателям в себестоимость.`,
          `Yalpi foyda = sof tushum - tannarx.
# 1-qadam: Sof tushum
  Tushum $720,000 - sotuv qaytarishlari $1,000 = $719,000
# 2-qadam: Tannarx
  Boshlang'ich zaxira $30,000 + xaridlar $310,000 + yetkazib beruvchidan tashish $4,000 - yakuniy zaxira $36,000 = $308,000
# 3-qadam: Yalpi foyda
  $719,000 - $308,000 = $411,000
= Javob: $411,000
! Ko'p uchraydigan xato: sotuv qaytarishlarini unutish yoki mijozlarga tashishni tannarxga qo'shish.`),
        task(15, 2, 'single', `Task 1(c): Which calculation gives Amber Co's profit before income taxes?`, pick(['Gross profit - $36,000 - $150,000 - $60,000', 'Gross profit - $2,500 - $150,000 - $60,000', 'Gross profit - $4,000 - $150,000 - $60,000'], 1),
          `Below gross profit, take off only the costs that are NOT already in cost of sales.
- Closing inventory $36,000: already used inside cost of sales. WRONG.
- Carriage outwards $2,500 + admin + selling: these come below gross profit. RIGHT.
- Carriage inwards $4,000: already inside cost of sales. WRONG.
= Answer: gross profit - $2,500 - $150,000 - $60,000`,
          `Ниже валовой прибыли вычитаем только то, чего ещё НЕТ в себестоимости.
- Запасы на конец $36,000: уже учтены в себестоимости. НЕВЕРНО.
- Доставка покупателям $2,500 + административные + коммерческие: они ниже валовой прибыли. ВЕРНО.
- Доставка от поставщика $4,000: уже в себестоимости. НЕВЕРНО.
= Ответ: валовая прибыль - $2,500 - $150,000 - $60,000`,
          `Yalpi foydadan pastda faqat tannarxda hali YO'Q xarajatlar ayiriladi.
- Yakuniy zaxira $36,000: tannarx ichida ishlatilgan. NOTO'G'RI.
- Mijozlarga tashish $2,500 + ma'muriy + sotish: ular yalpi foydadan pastda. TO'G'RI.
- Yetkazib beruvchidan tashish $4,000: tannarx ichida. NOTO'G'RI.
= Javob: yalpi foyda - $2,500 - $150,000 - $60,000`),
        task(12, 1, 'number', `Task 2(a): On 1 May 20X3 Amber Co took out a $120,000 loan, repayable in one sum on 30 April 20X8, with interest at 5% a year paid in arrears. What interest expense belongs in the 20X3 statement of profit or loss?`, amount(4000, '$4,000'),
          `Interest is an expense for the months the loan was held, paid or not (accruals).
# Months held in 20X3
  1 May to 31 December: 8 months
# Interest
  $120,000 x 5% x 8/12 = $4,000
= Answer: $4,000
! Common trap: $0 because nothing was paid yet, or $6,000 for a full year.`,
          `Проценты — расход за месяцы пользования займом, оплачены они или нет (начисление).
# Месяцы в 20X3
  1 мая – 31 декабря: 8 месяцев
# Проценты
  $120,000 x 5% x 8/12 = $4,000
= Ответ: $4,000
! Частая ошибка: $0, потому что ещё не оплачено, или $6,000 за полный год.`,
          `Foiz qarz ushlangan oylar uchun xarajat, to'langanmi-yo'qmi (hisoblash).
# 20X3 dagi oylar
  1 may – 31 dekabr: 8 oy
# Foiz
  $120,000 x 5% x 8/12 = $4,000
= Javob: $4,000
! Ko'p uchraydigan xato: hali to'lanmagani uchun $0, yoki to'liq yil uchun $6,000.`),
        task(12, 1, 'single', `Task 2(b): How is the loan classified at 31 December 20X3?`, pick(['Part of equity', 'A non-current liability', 'A current liability'], 1),
          `Ask when the loan must be repaid, compared with the reporting date.
- Part of equity: a loan must be repaid, so it is a liability. WRONG.
- Non-current liability: repayable in 20X8, more than 12 months away. RIGHT.
- Current liability: only if due within 12 months (the unpaid interest would be current). WRONG.
= Answer: a non-current liability`,
          `Спросим, когда заём нужно вернуть, по сравнению с отчётной датой.
- Часть капитала: заём нужно вернуть, это обязательство. НЕВЕРНО.
- Долгосрочное обязательство: погашение в 20X8, более чем через 12 месяцев. ВЕРНО.
- Краткосрочное обязательство: только если срок в течение 12 месяцев (неуплаченные проценты — краткосрочные). НЕВЕРНО.
= Ответ: долгосрочное обязательство`,
          `Qarz qachon qaytarilishini hisobot sanasi bilan solishtiramiz.
- Kapital qismi: qarz qaytarilishi kerak, bu majburiyat. NOTO'G'RI.
- Uzoq muddatli majburiyat: 20X8 da, 12 oydan ko'p vaqt keyin qaytariladi. TO'G'RI.
- Qisqa muddatli majburiyat: faqat 12 oy ichida bo'lsa (to'lanmagan foiz qisqa muddatli). NOTO'G'RI.
= Javob: uzoq muddatli majburiyat`),
        task(11, 2, 'single', `Task 3: On 15 January 20X4 a customer claimed $8,000 for an injury caused by a product sold in November 20X3. Amber Co's lawyers say it is probable that it will have to pay. How should this be treated in the 20X3 financial statements?`, pick(['It should not be recognised or disclosed', 'It should be disclosed in a note only', 'It should be recognised as a provision'], 2),
          `Ask: was the problem already there at the year end?
# When did the cause happen?
  The product was sold in November, BEFORE the 31 December year end
  So the obligation existed at the year end: an ADJUSTING event
# Is a provision needed?
  Payment is probable and the amount ($8,000) can be estimated
= Answer: recognise it as a provision of $8,000
! Common trap: "disclose only" because the claim arrived in January. What matters is when the event behind it happened.`,
          `Спросим: была ли проблема уже на конец года?
# Когда произошла причина?
  Товар продан в ноябре, ДО конца года 31 декабря
  Значит, обязательство существовало на конец года: КОРРЕКТИРУЮЩЕЕ событие
# Нужен ли резерв?
  Оплата вероятна, и сумму ($8,000) можно оценить
= Ответ: признать резерв $8,000
! Частая ошибка: «только раскрыть», потому что иск пришёл в январе. Важно, когда произошло событие за ним.`,
          `So'raymiz: muammo yil oxirida allaqachon bormidi?
# Sabab qachon bo'lgan?
  Mahsulot noyabrda, 31 dekabr yil oxiridan OLDIN sotilgan
  Demak, majburiyat yil oxirida bor edi: TUZATUVCHI voqea
# Rezerv kerakmi?
  To'lov ehtimoli katta va summani ($8,000) baholash mumkin
= Javob: $8,000 rezerv sifatida tan olinadi
! Ko'p uchraydigan xato: da'vo yanvarda kelgani uchun «faqat ochib berish». Muhimi, uning ortidagi voqea qachon bo'lgani.`),
        task(6, 4, 'matrix', `Task 4(a): Amber Co is planning work on its factory. Should each cost be capitalised as an asset or charged as an expense?`, grid(AE, [['Installing new high-capacity wiring so that extra machines can operate', 0], ['Replacing windows broken in a storm', 1], ['Redecorating the staff canteen', 1], ['Widening the loading bay doors so a large new machine can be installed', 0]]),
          `Ask of each cost: does it ADD something new (asset), or only keep what is there (expense)?
- New high-capacity wiring so extra machines can run: adds capacity. ASSET.
- Replacing storm-broken windows: a repair. EXPENSE.
- Redecorating the canteen: upkeep. EXPENSE.
- Widening doors to install a new machine: needed to install a new asset. ASSET.`,
          `Спросим о каждом расходе: он ДОБАВЛЯЕТ новое (актив) или лишь поддерживает существующее (расход)?
- Новая мощная проводка для дополнительных станков: увеличивает мощность. АКТИВ.
- Замена окон, разбитых бурей: ремонт. РАСХОД.
- Покраска столовой: поддержание. РАСХОД.
- Расширение ворот для установки нового станка: нужно для установки нового актива. АКТИВ.`,
          `Har bir xarajat haqida so'raymiz: u yangi narsa QO'SHADImi (aktiv) yoki faqat borini saqlaydimi (xarajat)?
- Qo'shimcha dastgohlar uchun yangi kuchli simlar: quvvatni oshiradi. AKTIV.
- Bo'ronda singan derazalarni almashtirish: ta'mir. XARAJAT.
- Oshxonani bo'yash: saqlash. XARAJAT.
- Yangi dastgohni o'rnatish uchun eshikni kengaytirish: yangi aktivni o'rnatish uchun kerak. AKTIV.`),
        task(6, 1, 'number', `Task 4(b): The land and buildings cost $280,000, of which land is $80,000. Buildings are depreciated straight line over 40 years. What is the depreciation charge on the buildings for 20X3?`, amount(5000, '$5,000'),
          `Land is not depreciated, so take it out first.
# Step 1: Buildings only
  $280,000 - land $80,000 = $200,000
# Step 2: Straight line over 40 years
  $200,000 / 40 = $5,000
= Answer: $5,000
! Common trap: $7,000 depreciates the land too ($280,000 / 40).`,
          `Земля не амортизируется, сначала уберём её.
# Шаг 1: Только здания
  $280,000 - земля $80,000 = $200,000
# Шаг 2: Линейно за 40 лет
  $200,000 / 40 = $5,000
= Ответ: $5,000
! Частая ошибка: $7,000 амортизирует и землю ($280,000 / 40).`,
          `Yer amortizatsiya qilinmaydi, avval uni chiqaramiz.
# 1-qadam: Faqat binolar
  $280,000 - yer $80,000 = $200,000
# 2-qadam: 40 yilda to'g'ri chiziqli
  $200,000 / 40 = $5,000
= Javob: $5,000
! Ko'p uchraydigan xato: $7,000 yerni ham amortizatsiya qiladi ($280,000 / 40).`),
        task(6, 1, 'number', `Task 4(c): Plant cost $150,000 and had accumulated depreciation of $30,000 at 1 January 20X3. It is depreciated at 20% a year on the reducing balance. There were no additions or disposals. What is the plant depreciation charge for 20X3?`, amount(24000, '$24,000'),
          `Reducing balance uses the CARRYING AMOUNT, not cost.
# Step 1: Carrying amount at the start
  $150,000 - $30,000 = $120,000
# Step 2: Charge
  $120,000 x 20% = $24,000
= Answer: $24,000
! Common trap: $30,000 takes 20% of cost (that is straight line).`,
          `Уменьшаемый остаток считают от БАЛАНСОВОЙ СТОИМОСТИ, а не от первоначальной.
# Шаг 1: Балансовая стоимость на начало
  $150,000 - $30,000 = $120,000
# Шаг 2: Амортизация
  $120,000 x 20% = $24,000
= Ответ: $24,000
! Частая ошибка: $30,000 берёт 20% от первоначальной стоимости (это линейный метод).`,
          `Kamayuvchi qoldiq tannarxdan emas, BALANS QIYMATIdan hisoblanadi.
# 1-qadam: Boshidagi balans qiymati
  $150,000 - $30,000 = $120,000
# 2-qadam: Amortizatsiya
  $120,000 x 20% = $24,000
= Javob: $24,000
! Ko'p uchraydigan xato: $30,000 tannarxning 20% ini oladi (bu to'g'ri chiziqli usul).`),
      ],
    },
    {
      id: 'b02', kitRef: 2, area: 'statements', title: 'Birch Co',
      intro: `You are helping to prepare the financial statements of Birch Co for the year ended 30 June 20X1.`,
      tasks: [
        task(4, 1, 'matrix', `Task 1(a): Several purchase invoices on credit, totalling $3,450 including sales tax at 15%, were never recorded. Which accounts are debited or credited to record them?`, grid(DCN, [['Purchases', 0], ['Sales tax', 0], ['Trade payables', 1], ['Bank', 2], ['Suspense', 2]]),
          `Write the full entry for a credit purchase with sales tax.
- Purchases: DEBIT at the net cost.
- Sales tax: DEBIT, because the tax can be claimed back.
- Trade payables: CREDIT with the gross amount owed.
- Bank: NO ENTRY. Nothing has been paid yet.
- Suspense: NO ENTRY. Both sides are known.`,
          `Запишем полную проводку закупки в кредит с налогом.
- Закупки: ДЕБЕТ по нетто-стоимости.
- Налог с продаж: ДЕБЕТ, налог можно вернуть.
- Торговые кредиторы: КРЕДИТ на брутто-сумму долга.
- Банк: НЕТ ЗАПИСИ. Ещё ничего не оплачено.
- Неясные суммы: НЕТ ЗАПИСИ. Обе стороны известны.`,
          `Soliq bilan kreditga xaridning to'liq yozuvini tuzamiz.
- Xaridlar: sof tannarxda DEBET.
- Sotuv solig'i: DEBET, soliqni qaytarib olish mumkin.
- Savdo kreditorlari: yalpi qarz summasiga KREDIT.
- Bank: YOZUV YO'Q. Hali hech narsa to'lanmagan.
- Vaqtinchalik hisob: YOZUV YO'Q. Ikkala tomon ma'lum.`),
        task(4, 1, 'number', `Task 1(b): What amount is debited to the sales tax account?`, amount(450, '$450'),
          `$3,450 INCLUDES the tax, so the tax is inside it: gross = 115% of net.
# Tax
  $3,450 x 15/115 = $450
# Check
  Net $3,000 + tax $450 = $3,450
= Answer: $450
! Common trap: $517.50 takes 15% of the gross figure.`,
          `$3,450 ВКЛЮЧАЕТ налог, он внутри: брутто = 115% от нетто.
# Налог
  $3,450 x 15/115 = $450
# Проверка
  Нетто $3,000 + налог $450 = $3,450
= Ответ: $450
! Частая ошибка: $517.50 — это 15% от брутто.`,
          `$3,450 soliqni O'Z ICHIGA OLADI: yalpi = sofning 115% i.
# Soliq
  $3,450 x 15/115 = $450
# Tekshiruv
  Sof $3,000 + soliq $450 = $3,450
= Javob: $450
! Ko'p uchraydigan xato: $517.50 yalpining 15% ini oladi.`),
        task(14, 1, 'single', `Task 1(c): What effect did leaving out these invoices have on the trial balance?`, pick(['The trial balance still agreed', 'The trial balance failed to agree'], 0),
          `Nothing at all was recorded, on either side.
# Type of error
  An error of OMISSION
# Effect
  Debits and credits are both missing by the same amount, so the totals still match
= Answer: the trial balance still agreed`,
          `Ничего не записано ни с одной стороны.
# Вид ошибки
  Ошибка ПРОПУСКА
# Влияние
  Дебеты и кредиты пропущены на одну сумму, итоги всё равно равны
= Ответ: оборотная ведомость всё равно сходилась`,
          `Hech bir tomonda hech narsa yozilmagan.
# Xato turi
  TUSHIB QOLISH xatosi
# Ta'siri
  Debet ham, kredit ham bir xil summaga yetishmaydi, jamlar baribir teng
= Javob: sinov balansi baribir mos kelgan`),
        task(12, 2, 'matrix', `Task 2(a): Birch Co has 60,000,000 equity shares of $1 and a share premium of $9,000,000. In the year it made a 1 for 4 bonus issue, using share premium as far as possible. Which accounts are debited or credited?`, grid(DCN, [['Equity shares', 1], ['Share premium', 0], ['Retained earnings', 0], ['Bank', 2]]),
          `A bonus issue gives free shares: no cash moves, an amount just moves inside equity.
- Equity shares: share capital goes UP. CREDIT.
- Share premium: used first, so it goes DOWN. DEBIT.
- Retained earnings: covers what premium cannot. DEBIT.
- Bank: NO ENTRY. No cash comes in.`,
          `Бонусная эмиссия — бесплатные акции: денег нет, сумма лишь перемещается внутри капитала.
- Обыкновенные акции: капитал РАСТЁТ. КРЕДИТ.
- Эмиссионный доход: используется первым, УМЕНЬШАЕТСЯ. ДЕБЕТ.
- Нераспределённая прибыль: покрывает остаток. ДЕБЕТ.
- Банк: НЕТ ЗАПИСИ. Денег не поступает.`,
          `Bonus emissiya — bepul aksiyalar: pul harakatlanmaydi, summa faqat kapital ichida ko'chadi.
- Oddiy aksiyalar: kapital OSHADI. KREDIT.
- Emissiya daromadi: birinchi ishlatiladi, KAMAYADI. DEBET.
- Taqsimlanmagan foyda: qolganini qoplaydi. DEBET.
- Bank: YOZUV YO'Q. Pul kirmaydi.`),
        task(12, 2, 'number', `Task 2(b): How much is debited to retained earnings for the bonus issue? Give your answer in $000.`, amount(6000, '$6,000,000 (6,000 in $000)'),
          `Work out the new shares, then use share premium before retained earnings.
# Step 1: New shares (1 for 4)
  60,000,000 / 4 = 15,000,000 shares of $1 = $15,000,000
# Step 2: Take what share premium can cover
  $9,000,000
# Step 3: The rest from retained earnings
  $15,000,000 - $9,000,000 = $6,000,000
= Answer: $6,000,000 (6,000 in $000)
! Common trap: debiting all $15,000,000 to retained earnings and ignoring share premium.`,
          `Найдём новые акции, затем используем эмиссионный доход раньше нераспределённой прибыли.
# Шаг 1: Новые акции (1 на 4)
  60,000,000 / 4 = 15,000,000 акций по $1 = $15,000,000
# Шаг 2: Сколько покрывает эмиссионный доход
  $9,000,000
# Шаг 3: Остаток из нераспределённой прибыли
  $15,000,000 - $9,000,000 = $6,000,000
= Ответ: $6,000,000 (6,000 в $000)
! Частая ошибка: списать все $15,000,000 на нераспределённую прибыль, забыв эмиссионный доход.`,
          `Yangi aksiyalarni topib, taqsimlanmagan foydadan oldin emissiya daromadidan foydalanamiz.
# 1-qadam: Yangi aksiyalar (4 taga 1)
  60,000,000 / 4 = 15,000,000 ta $1 lik aksiya = $15,000,000
# 2-qadam: Emissiya daromadi qoplaydigan qism
  $9,000,000
# 3-qadam: Qolgani taqsimlanmagan foydadan
  $15,000,000 - $9,000,000 = $6,000,000
= Javob: $6,000,000 ($000 da 6,000)
! Ko'p uchraydigan xato: emissiya daromadini unutib, butun $15,000,000 ni taqsimlanmagan foydaga debetlash.`),
        task(5, 1, 'number', `Task 3(a): Inventory was counted at cost at $7,350,000. Three lines need checking (see the table). At what amount should the Plus line be included?`, amount(68000, '$68,000', { table: { head: ['Product', 'Units', 'Cost per unit', 'Selling price per unit', 'Selling costs per unit'], rows: [['Basic', '60', '$1,200', '$1,700', '$150'], ['Plus', '40', '$1,800', '$2,000', '$300'], ['Premium', '30', '$2,500', '$2,900', '$500']] } }),
          `Inventory = the LOWER of cost and NRV, line by line.
# NRV per unit
  Selling price $2,000 - selling costs $300 = $1,700
# Compare with cost
  $1,700 is lower than cost $1,800, so use $1,700
# Value
  40 x $1,700 = $68,000
= Answer: $68,000
! Common trap: $80,000 uses the selling price before selling costs.`,
          `Запасы = МЕНЬШАЯ из себестоимости и ЧСР, по каждой позиции.
# ЧСР за единицу
  Цена $2,000 - затраты на продажу $300 = $1,700
# Сравним с себестоимостью
  $1,700 меньше себестоимости $1,800, берём $1,700
# Стоимость
  40 x $1,700 = $68,000
= Ответ: $68,000
! Частая ошибка: $80,000 берёт цену продажи без вычета затрат на продажу.`,
          `Zaxira = tannarx va SSQ ning KICHIGI, har bir qator bo'yicha.
# Birlik SSQ
  Narx $2,000 - sotish xarajati $300 = $1,700
# Tannarx bilan solishtiramiz
  $1,700 tannarx $1,800 dan kam, $1,700 olinadi
# Qiymat
  40 x $1,700 = $68,000
= Javob: $68,000
! Ko'p uchraydigan xato: $80,000 sotish xarajatini ayirmasdan narxni oladi.`),
        task(5, 1, 'number', `Task 3(b): At what amount should the Premium line be included?`, amount(72000, '$72,000', { table: { head: ['Product', 'Units', 'Cost per unit', 'Selling price per unit', 'Selling costs per unit'], rows: [['Basic', '60', '$1,200', '$1,700', '$150'], ['Plus', '40', '$1,800', '$2,000', '$300'], ['Premium', '30', '$2,500', '$2,900', '$500']] } }),
          `Inventory = the LOWER of cost and NRV.
# NRV per unit
  $2,900 - $500 = $2,400
# Compare with cost
  $2,400 is lower than cost $2,500, so use $2,400
# Value
  30 x $2,400 = $72,000
= Answer: $72,000`,
          `Запасы = МЕНЬШАЯ из себестоимости и ЧСР.
# ЧСР за единицу
  $2,900 - $500 = $2,400
# Сравним с себестоимостью
  $2,400 меньше себестоимости $2,500, берём $2,400
# Стоимость
  30 x $2,400 = $72,000
= Ответ: $72,000`,
          `Zaxira = tannarx va SSQ ning KICHIGI.
# Birlik SSQ
  $2,900 - $500 = $2,400
# Tannarx bilan solishtiramiz
  $2,400 tannarx $2,500 dan kam, $2,400 olinadi
# Qiymat
  30 x $2,400 = $72,000
= Javob: $72,000`),
        task(5, 1, 'number', `Task 3(c): At what amount should the Basic line be included?`, amount(72000, '$72,000', { table: { head: ['Product', 'Units', 'Cost per unit', 'Selling price per unit', 'Selling costs per unit'], rows: [['Basic', '60', '$1,200', '$1,700', '$150'], ['Plus', '40', '$1,800', '$2,000', '$300'], ['Premium', '30', '$2,500', '$2,900', '$500']] } }),
          `Inventory = the LOWER of cost and NRV.
# NRV per unit
  $1,700 - $150 = $1,550
# Compare with cost
  Cost $1,200 is lower, so cost is used
# Value
  60 x $1,200 = $72,000
= Answer: $72,000
! Common trap: $93,000 uses NRV even though it is higher. Inventory is never written UP.`,
          `Запасы = МЕНЬШАЯ из себестоимости и ЧСР.
# ЧСР за единицу
  $1,700 - $150 = $1,550
# Сравним с себестоимостью
  Себестоимость $1,200 меньше, берём её
# Стоимость
  60 x $1,200 = $72,000
= Ответ: $72,000
! Частая ошибка: $93,000 берёт ЧСР, хотя она выше. Запасы никогда не дооценивают.`,
          `Zaxira = tannarx va SSQ ning KICHIGI.
# Birlik SSQ
  $1,700 - $150 = $1,550
# Tannarx bilan solishtiramiz
  Tannarx $1,200 kichik, u olinadi
# Qiymat
  60 x $1,200 = $72,000
= Javob: $72,000
! Ko'p uchraydigan xato: $93,000 SSQ yuqori bo'lsa ham uni oladi. Zaxira hech qachon OSHIRILMAYDI.`),
        task(5, 2, 'number', `Task 3(d): By how much must the inventory figure of $7,350,000 be reduced?`, amount(7000, '$7,000'),
          `The count was at cost. Find how much each line falls when written down to NRV.
# Plus
  At cost: 40 x $1,800 = $72,000; written down to $68,000: - $4,000
# Premium
  At cost: 30 x $2,500 = $75,000; written down to $72,000: - $3,000
# Basic
  Stays at cost: no change
# Total reduction
  $4,000 + $3,000 = $7,000
= Answer: $7,000`,
          `Пересчёт был по себестоимости. Найдём, на сколько падает каждая позиция при уценке до ЧСР.
# Plus
  По себестоимости: 40 x $1,800 = $72,000; уценка до $68,000: - $4,000
# Premium
  По себестоимости: 30 x $2,500 = $75,000; уценка до $72,000: - $3,000
# Basic
  Остаётся по себестоимости: без изменений
# Итого снижение
  $4,000 + $3,000 = $7,000
= Ответ: $7,000`,
          `Sanash tannarxda bo'lgan. SSQ gacha kamaytirilganda har bir qator qancha tushishini topamiz.
# Plus
  Tannarxda: 40 x $1,800 = $72,000; $68,000 ga tushiriladi: - $4,000
# Premium
  Tannarxda: 30 x $2,500 = $75,000; $72,000 ga tushiriladi: - $3,000
# Basic
  Tannarxda qoladi: o'zgarishsiz
# Jami kamayish
  $4,000 + $3,000 = $7,000
= Javob: $7,000`),
        task(8, 1, 'single', `Task 4(a): On 1 July 20X0 Birch Co bought a $1,500,000 licence to sell a new product for six years. It cannot be renewed. What type of asset is the licence?`, pick(['Current', 'Intangible non-current', 'Tangible non-current'], 1),
          `Ask: is it physical, and does it last more than a year?
- Current: it gives benefits for six years, not under one. WRONG.
- Intangible non-current: no physical form, lasts six years. RIGHT.
- Tangible non-current: a licence cannot be touched. WRONG.
= Answer: intangible non-current`,
          `Спросим: он физический и служит ли дольше года?
- Оборотный: выгода шесть лет, а не меньше года. НЕВЕРНО.
- Нематериальный внеоборотный: нет физической формы, служит шесть лет. ВЕРНО.
- Материальный внеоборотный: лицензию нельзя потрогать. НЕВЕРНО.
= Ответ: нематериальный внеоборотный`,
          `So'raymiz: u jismoniymi va bir yildan ko'p xizmat qiladimi?
- Aylanma: olti yil foyda beradi, bir yildan kam emas. NOTO'G'RI.
- Nomoddiy uzoq muddatli: jismoniy shakli yo'q, olti yil xizmat qiladi. TO'G'RI.
- Moddiy uzoq muddatli: litsenziyani ushlab bo'lmaydi. NOTO'G'RI.
= Javob: nomoddiy uzoq muddatli`),
        task(8, 1, 'number', `Task 4(b): What is the amortisation charge for the year ended 30 June 20X1?`, amount(250000, '$250,000'),
          `Spread the cost evenly over the six years of the licence.
# Amortisation
  $1,500,000 / 6 = $250,000
= Answer: $250,000`,
          `Распределим стоимость равномерно на шесть лет лицензии.
# Амортизация
  $1,500,000 / 6 = $250,000
= Ответ: $250,000`,
          `Tannarxni litsenziyaning olti yiliga bir tekis taqsimlaymiz.
# Amortizatsiya
  $1,500,000 / 6 = $250,000
= Javob: $250,000`),
        task(8, 1, 'number', `Task 4(c): What is its carrying amount at 30 June 20X1?`, amount(1250000, '$1,250,000'),
          `Carrying amount = cost - amortisation so far.
# One year used
  $1,500,000 - $250,000 = $1,250,000
= Answer: $1,250,000`,
          `Балансовая стоимость = стоимость - накопленная амортизация.
# Прошёл один год
  $1,500,000 - $250,000 = $1,250,000
= Ответ: $1,250,000`,
          `Balans qiymati = tannarx - shu paytgacha amortizatsiya.
# Bir yil o'tgan
  $1,500,000 - $250,000 = $1,250,000
= Javob: $1,250,000`),
      ],
    },
    {
      id: 'b03', kitRef: 3, area: 'statements', title: 'Cedar Co',
      intro: `You are helping to prepare the financial statements of Cedar Co for the year ended 31 December 20X7, starting with amounts owed to the business.`,
      tasks: [
        task(10, 1, 'matrix', `Task 1(a): A $2,800 debt from one customer is now irrecoverable. Which accounts are debited or credited to write it off?`, grid(DCN, [['Irrecoverable debts expense', 0], ['Trade receivables', 1], ['Allowance for receivables', 2], ['Trade payables', 2]]),
          `Writing off a debt removes it from what the customer owes.
- Irrecoverable debts expense: the loss. DEBIT.
- Trade receivables: the debt goes. CREDIT.
- Allowance for receivables: only changed when the year-end estimate is revised. NO ENTRY.
- Trade payables: nothing to do with customers. NO ENTRY.`,
          `Списание долга убирает его из долга покупателя.
- Расход по безнадёжным долгам: убыток. ДЕБЕТ.
- Торговые дебиторы: долг уходит. КРЕДИТ.
- Резерв по дебиторской задолженности: меняется только при пересмотре оценки на конец года. НЕТ ЗАПИСИ.
- Торговые кредиторы: не связаны с покупателями. НЕТ ЗАПИСИ.`,
          `Qarzni hisobdan chiqarish uni mijoz qarzidan olib tashlaydi.
- Undirib bo'lmaydigan qarzlar xarajati: zarar. DEBET.
- Savdo debitorlari: qarz ketadi. KREDIT.
- Debitorlik rezervi: faqat yil oxiridagi baho qayta ko'rilganda o'zgaradi. YOZUV YO'Q.
- Savdo kreditorlari: mijozlarga aloqasi yo'q. YOZUV YO'Q.`),
        task(13, 2, 'matrix', `Task 1(b): Another customer is also a supplier. They agree to set off $3,900 owed each way. How is the contra recorded?`, grid(DC, [['Trade payables', 0], ['Trade receivables', 1]]),
          `A contra sets off what we owe the business against what it owes us. Both balances fall.
- Trade payables: a liability falls with a DEBIT.
- Trade receivables: an asset falls with a CREDIT.`,
          `Взаимозачёт сводит наш долг этой компании с её долгом нам. Оба остатка уменьшаются.
- Торговые кредиторы: обязательство уменьшается ДЕБЕТОМ.
- Торговые дебиторы: актив уменьшается КРЕДИТОМ.`,
          `O'zaro hisob-kitob bizning u kompaniyaga qarzimizni uning bizga qarzi bilan yopadi. Ikkala qoldiq kamayadi.
- Savdo kreditorlari: majburiyat DEBET bilan kamayadi.
- Savdo debitorlari: aktiv KREDIT bilan kamayadi.`),
        task(4, 1, 'number', `Task 1(c): A credit customer buys goods with a list price of $5,000. It gets a 10% trade discount and is offered 4% for paying within 10 days, which it is expected to take. At what amount is revenue recorded?`, amount(4320, '$4,320'),
          `Take the trade discount off first, then the settlement discount if it is expected to be taken.
# Step 1: Trade discount 10%
  $5,000 x 90% = $4,500
# Step 2: Settlement discount 4%, expected to be taken
  $4,500 x 96% = $4,320
= Answer: $4,320
! Common trap: $4,500 ignores the settlement discount; $4,300 takes 14% off the list price in one go.`,
          `Сначала вычитаем торговую скидку, затем скидку за раннюю оплату, если ею ожидают воспользоваться.
# Шаг 1: Торговая скидка 10%
  $5,000 x 90% = $4,500
# Шаг 2: Скидка за раннюю оплату 4%, ожидается
  $4,500 x 96% = $4,320
= Ответ: $4,320
! Частая ошибка: $4,500 не учитывает скидку за раннюю оплату; $4,300 вычитает 14% от прайса сразу.`,
          `Avval savdo chegirmasini, keyin kutilsa erta to'lov chegirmasini ayiramiz.
# 1-qadam: 10% savdo chegirmasi
  $5,000 x 90% = $4,500
# 2-qadam: 4% erta to'lov chegirmasi, kutilmoqda
  $4,500 x 96% = $4,320
= Javob: $4,320
! Ko'p uchraydigan xato: $4,500 erta to'lov chegirmasini hisobga olmaydi; $4,300 narxdan birdaniga 14% ayiradi.`),
        task(4, 1, 'matrix', `Task 1(d): Which accounts are debited or credited for that sale?`, grid(DCN, [['Trade receivables', 0], ['Revenue', 1], ['Discount received', 2], ['Trade payables', 2]]),
          `A credit sale: the customer owes us, and we have earned revenue.
- Trade receivables: DEBIT.
- Revenue: CREDIT.
- Discount received: that is from SUPPLIERS, not customers. NO ENTRY.
- Trade payables: nothing is owed to anyone. NO ENTRY.`,
          `Продажа в кредит: покупатель нам должен, а мы заработали выручку.
- Торговые дебиторы: ДЕБЕТ.
- Выручка: КРЕДИТ.
- Полученная скидка: это от ПОСТАВЩИКОВ, а не покупателей. НЕТ ЗАПИСИ.
- Торговые кредиторы: мы никому не должны. НЕТ ЗАПИСИ.`,
          `Kreditga sotuv: mijoz bizga qarzdor, biz tushum topdik.
- Savdo debitorlari: DEBET.
- Tushum: KREDIT.
- Olingan chegirma: bu YETKAZIB BERUVCHILARdan, mijozlardan emas. YOZUV YO'Q.
- Savdo kreditorlari: hech kimga qarz yo'q. YOZUV YO'Q.`),
        task(13, 2, 'single', `Task 2(a): The bank statement shows an overdraft of $2,600. Payments of $1,800 have not yet been presented, lodgements of $3,100 have not yet cleared, and a $900 customer payment was returned unpaid by the customer's bank. What is the correct bank balance in Cedar Co's ledger?`, pick(['$1,300 overdrawn', '$1,300 in funds', '$3,900 overdrawn', '$400 overdrawn'], 0, { table: { head: ['Item', '$'], rows: [['Overdraft per bank statement', '2,600'], ['Payments not yet presented', '1,800'], ['Lodgements not yet cleared', '3,100'], ['Customer payment returned unpaid', '900']] } }),
          `Start from the bank statement and adjust for what the bank has not done yet.
# Step 1: The statement
  Overdraft: -$2,600
# Step 2: Timing differences
  Payments not yet presented will still leave: - $1,800
  Lodgements not yet cleared will still arrive: + $3,100
  -$2,600 - $1,800 + $3,100 = -$1,300
# Step 3: The returned payment
  The bank has already taken it off, so it is already in the statement figure
= Answer: $1,300 overdrawn
! Common trap: $3,900 overdrawn applies the two timing items the wrong way round; $400 overdrawn is the ledger before the returned payment is recorded; $1,300 in funds gets the sign wrong.`,
          `Начнём с выписки банка и поправим на то, чего банк ещё не сделал.
# Шаг 1: Выписка
  Овердрафт: -$2,600
# Шаг 2: Временные разницы
  Непредъявленные платежи ещё уйдут: - $1,800
  Незачисленные поступления ещё придут: + $3,100
  -$2,600 - $1,800 + $3,100 = -$1,300
# Шаг 3: Возвращённый платёж
  Банк уже его списал, он уже в цифре выписки
= Ответ: овердрафт $1,300
! Частая ошибка: овердрафт $3,900 применяет две временные разницы наоборот; овердрафт $400 — книга до записи возврата; $1,300 на счёте путает знак.`,
          `Bank ko'chirmasidan boshlab, bank hali qilmaganlarga tuzatamiz.
# 1-qadam: Ko'chirma
  Overdraft: -$2,600
# 2-qadam: Vaqt farqlari
  Taqdim etilmagan to'lovlar hali chiqadi: - $1,800
  O'tmagan tushumlar hali keladi: + $3,100
  -$2,600 - $1,800 + $3,100 = -$1,300
# 3-qadam: Qaytgan to'lov
  Bank uni allaqachon yechgan, u ko'chirma sonida bor
= Javob: $1,300 overdraft
! Ko'p uchraydigan xato: $3,900 overdraft ikki vaqt farqini teskari qo'llaydi; $400 overdraft qaytgan to'lov yozilishidan oldingi kitob; $1,300 hisobda ishorani adashtiradi.`),
        task(13, 2, 'number', `Task 2(b): What was the overdraft in the ledger before the returned customer payment was recorded?`, amount(400, '$400'),
          `Recording the returned payment makes the ledger overdraft $900 BIGGER. Work backwards.
# After the adjustment
  $1,300 overdrawn
# Undo the $900
  $1,300 - $900 = $400
= Answer: $400 overdrawn
! Common trap: $2,200 adds the $900 instead of taking it off.`,
          `Запись возвращённого платежа УВЕЛИЧИВАЕТ овердрафт в книге на $900. Идём назад.
# После корректировки
  Овердрафт $1,300
# Отменим $900
  $1,300 - $900 = $400
= Ответ: овердрафт $400
! Частая ошибка: $2,200 прибавляет $900 вместо вычета.`,
          `Qaytgan to'lovni yozish kitobdagi overdraftni $900 ga KATTALASHTIRADI. Orqaga hisoblaymiz.
# Tuzatishdan keyin
  $1,300 overdraft
# $900 ni bekor qilamiz
  $1,300 - $900 = $400
= Javob: $400 overdraft
! Ko'p uchraydigan xato: $2,200 $900 ni ayirish o'rniga qo'shadi.`),
        task(5, 1, 'number', `Task 3(a): Inventory at cost is $210,450. It includes an item costing $5,000 that no longer meets safety rules. Cedar Co will modify it for $1,800 and then sell it for $6,200. At what amount should inventory be stated?`, amount(209850, '$209,850'),
          `Compare the item's cost with its NRV.
# NRV
  Selling price $6,200 - cost to modify $1,800 = $4,400
# Write-down
  Cost $5,000 - NRV $4,400 = $600
# Inventory
  $210,450 - $600 = $209,850
= Answer: $209,850
! Common trap: comparing cost with the $6,200 price without the $1,800 modification cost.`,
          `Сравним себестоимость позиции с её ЧСР.
# ЧСР
  Цена продажи $6,200 - затраты на доработку $1,800 = $4,400
# Уценка
  Себестоимость $5,000 - ЧСР $4,400 = $600
# Запасы
  $210,450 - $600 = $209,850
= Ответ: $209,850
! Частая ошибка: сравнить себестоимость с ценой $6,200 без затрат на доработку $1,800.`,
          `Mahsulot tannarxini SSQ bilan solishtiramiz.
# SSQ
  Sotish narxi $6,200 - o'zgartirish xarajati $1,800 = $4,400
# Kamaytirish
  Tannarx $5,000 - SSQ $4,400 = $600
# Zaxira
  $210,450 - $600 = $209,850
= Javob: $209,850
! Ko'p uchraydigan xato: tannarxni $1,800 o'zgartirish xarajatisiz $6,200 narx bilan solishtirish.`),
        task(5, 1, 'single', `Task 3(b): Complete the policy note: "Inventory is stated at the ___ of cost and net realisable value."`, pick(['higher', 'lower'], 1),
          `IAS 2: inventory is never shown above what it will bring in.
- Higher: would overstate inventory. WRONG.
- Lower: the rule in IAS 2. RIGHT.
= Answer: lower`,
          `IAS 2: запасы никогда не показывают выше того, что они принесут.
- Большая: завысит запасы. НЕВЕРНО.
- Меньшая: правило IAS 2. ВЕРНО.
= Ответ: меньшая`,
          `IAS 2: zaxira hech qachon keltiradiganidan yuqori ko'rsatilmaydi.
- Kattasi: zaxirani oshirib ko'rsatadi. NOTO'G'RI.
- Kichigi: IAS 2 qoidasi. TO'G'RI.
= Javob: kichigi`),
        task(5, 1, 'single', `Task 3(c): Complete the note: "...cost and ___ for each separate item or product."`, pick(['selling price', 'net realisable value', 'replacement cost'], 1),
          `Cost is compared with net realisable value: selling price less costs to complete and sell.
- Selling price: ignores the costs still to come. WRONG.
- Net realisable value: RIGHT.
- Replacement cost: not used by IAS 2. WRONG.
= Answer: net realisable value`,
          `Себестоимость сравнивают с ЧСР: цена продажи минус затраты на доработку и продажу.
- Цена продажи: не учитывает будущие затраты. НЕВЕРНО.
- Чистая стоимость реализации: ВЕРНО.
- Стоимость замещения: IAS 2 её не использует. НЕВЕРНО.
= Ответ: чистая стоимость реализации`,
          `Tannarx SSQ bilan solishtiriladi: sotish narxi minus tugatish va sotish xarajatlari.
- Sotish narxi: kelgusi xarajatlarni hisobga olmaydi. NOTO'G'RI.
- Sof sotish qiymati: TO'G'RI.
- Almashtirish qiymati: IAS 2 ishlatmaydi. NOTO'G'RI.
= Javob: sof sotish qiymati`),
        task(5, 3, 'matrix', `Task 3(d): Should each item be included in the cost of inventory?`, grid(IE, [['Costs of selling the goods', 1], ['Import duty paid on goods bought', 0], ['Storing finished goods before sale', 1]]),
          `Cost includes what it takes to bring goods to where they are, in the state they are in. Nothing after that.
- Costs of selling: happen after, when selling. EXCLUDED.
- Import duty on goods bought: part of getting them here. INCLUDED.
- Storing finished goods before sale: after the goods are ready. EXCLUDED.`,
          `Себестоимость включает всё, чтобы доставить товар на место в нынешнем состоянии. Ничего после этого.
- Затраты на продажу: возникают позже, при продаже. НЕ ВКЛЮЧАЮТСЯ.
- Импортная пошлина на купленный товар: часть доставки сюда. ВКЛЮЧАЕТСЯ.
- Хранение готовой продукции до продажи: после того как товар готов. НЕ ВКЛЮЧАЕТСЯ.`,
          `Tannarxga tovarni hozirgi joyiga, hozirgi holatida keltirish uchun kerak bo'lganlar kiradi. Undan keyingisi emas.
- Sotish xarajatlari: keyin, sotishda bo'ladi. KIRMAYDI.
- Olingan tovarga bojxona to'lovi: bu yerga keltirishning qismi. KIRADI.
- Tayyor mahsulotni sotguncha saqlash: tovar tayyor bo'lgandan keyin. KIRMAYDI.`),
      ],
    },
    {
      id: 'b04', kitRef: 4, area: 'statements', title: 'Delta Co',
      intro: `You are helping to prepare the financial statements of Delta Co for the year ended 31 December 20X5. On 1 January 20X1 Delta Co bought land and buildings for $5,000,000, of which land was $2,000,000. The buildings have a 40-year useful life. Delta Co now adopts the revaluation model. At 31 December 20X5 the land and buildings are worth $7,500,000, of which land is $3,500,000. Depreciation for 20X5 has already been charged.`,
      tasks: [
        task(7, 3, 'matrix', `Task 1(a): State whether each statement is true or false.`, grid(TF, [['An entity that revalues must transfer the excess depreciation from revaluation surplus to retained earnings every year', 1], ['A revaluation gain is shown as operating income in the statement of profit or loss', 1], ['The revaluation surplus is an adjustment within cash flows from operating activities', 1]]),
          `Check each statement.
- Excess depreciation MUST be transferred every year: FALSE. The transfer is allowed, not required.
- A revaluation gain is operating income in profit or loss: FALSE. It goes to other comprehensive income.
- The revaluation surplus is an adjustment in operating cash flows: FALSE. No cash moves, so it is not in the statement of cash flows at all.`,
          `Проверим каждое утверждение.
- Избыточную амортизацию НУЖНО переносить каждый год: НЕВЕРНО. Перенос разрешён, но не обязателен.
- Доход от переоценки — операционный доход в прибыли или убытке: НЕВЕРНО. Он идёт в прочий совокупный доход.
- Резерв переоценки — корректировка в операционных денежных потоках: НЕВЕРНО. Денег нет, в отчёте о движении денег его нет совсем.`,
          `Har bir fikrni tekshiramiz.
- Ortiqcha amortizatsiya har yili ko'chirilishi SHART: NOTO'G'RI. Ko'chirish ruxsat, majburiy emas.
- Qayta baholash daromadi foyda yoki zarardagi operatsion daromad: NOTO'G'RI. U boshqa umumlashgan daromadga boradi.
- Qayta baholash rezervi operatsion pul oqimlaridagi tuzatish: NOTO'G'RI. Pul harakatlanmaydi, u pul oqimlari hisobotida umuman yo'q.`),
        task(7, 2, 'number', `Task 1(b): What amount is credited to the revaluation surplus? Give your answer in $000.`, amount(2875, '$2,875,000 (2,875 in $000)'),
          `Gain = new value - carrying amount just before.
# Step 1: Depreciation so far (buildings only)
  Buildings $5,000,000 - $2,000,000 = $3,000,000
  $3,000,000 / 40 = $75,000 a year x 5 years (20X1 to 20X5) = $375,000
# Step 2: Carrying amount
  $5,000,000 - $375,000 = $4,625,000
# Step 3: Surplus
  $7,500,000 - $4,625,000 = $2,875,000
= Answer: $2,875,000 (2,875 in $000)
! Common trap: $2,500,000 compares with cost and forgets the depreciation cleared.`,
          `Прирост = новая стоимость - балансовая стоимость перед этим.
# Шаг 1: Накопленная амортизация (только здания)
  Здания $5,000,000 - $2,000,000 = $3,000,000
  $3,000,000 / 40 = $75,000 в год x 5 лет (20X1–20X5) = $375,000
# Шаг 2: Балансовая стоимость
  $5,000,000 - $375,000 = $4,625,000
# Шаг 3: Прирост
  $7,500,000 - $4,625,000 = $2,875,000
= Ответ: $2,875,000 (2,875 в $000)
! Частая ошибка: $2,500,000 сравнивает с первоначальной стоимостью и забывает списанную амортизацию.`,
          `O'sish = yangi qiymat - undan oldingi balans qiymati.
# 1-qadam: Shu paytgacha amortizatsiya (faqat binolar)
  Binolar $5,000,000 - $2,000,000 = $3,000,000
  $3,000,000 / 40 = yiliga $75,000 x 5 yil (20X1–20X5) = $375,000
# 2-qadam: Balans qiymati
  $5,000,000 - $375,000 = $4,625,000
# 3-qadam: O'sish
  $7,500,000 - $4,625,000 = $2,875,000
= Javob: $2,875,000 ($000 da 2,875)
! Ko'p uchraydigan xato: $2,500,000 tannarx bilan solishtiradi va tozalangan amortizatsiyani unutadi.`),
        task(7, 1, 'matrix', `Task 1(c): Which accounts are debited or credited to record the revaluation?`, grid(DCN, [['Land and buildings (cost or valuation)', 0], ['Accumulated depreciation', 0], ['Revaluation surplus', 1], ['Depreciation expense', 2]]),
          `Bring the asset up to its new value and clear its old depreciation.
- Land and buildings: up from $5,000,000 to $7,500,000. DEBIT $2,500,000.
- Accumulated depreciation: cleared. DEBIT $375,000.
- Revaluation surplus: the gain. CREDIT $2,875,000.
- Depreciation expense: already charged for the year. NO ENTRY.`,
          `Доведём актив до новой стоимости и обнулим старую амортизацию.
- Земля и здания: с $5,000,000 до $7,500,000. ДЕБЕТ $2,500,000.
- Накопленная амортизация: обнуляется. ДЕБЕТ $375,000.
- Резерв переоценки: прирост. КРЕДИТ $2,875,000.
- Расход по амортизации: уже начислен за год. НЕТ ЗАПИСИ.`,
          `Aktivni yangi qiymatigacha oshirib, eski amortizatsiyasini tozalaymiz.
- Yer va binolar: $5,000,000 dan $7,500,000 ga. DEBET $2,500,000.
- Jamg'arilgan amortizatsiya: tozalanadi. DEBET $375,000.
- Qayta baholash rezervi: o'sish. KREDIT $2,875,000.
- Amortizatsiya xarajati: yil uchun allaqachon hisoblangan. YOZUV YO'Q.`),
        task(12, 1, 'number', `Task 2: Delta Co owed $1,800,000 of income tax at 1 January 20X5, and settled it during the year for $1,720,000. It estimates tax on 20X5 profits at $2,100,000. What is the income tax expense for 20X5? Give your answer in $000.`, amount(2020, '$2,020,000 (2,020 in $000)'),
          `Tax expense = this year's estimate +/- last year's correction.
# Step 1: Last year
  Owed $1,800,000, paid $1,720,000: over-estimated by $80,000 (an overprovision)
# Step 2: This year's expense
  $2,100,000 - $80,000 = $2,020,000
= Answer: $2,020,000 (2,020 in $000)
! Common trap: adding the $80,000 ($2,180,000). An overprovision makes this year's charge SMALLER.`,
          `Расход по налогу = оценка этого года +/- поправка прошлого года.
# Шаг 1: Прошлый год
  Должны $1,800,000, уплачено $1,720,000: переоценили на $80,000 (переначисление)
# Шаг 2: Расход этого года
  $2,100,000 - $80,000 = $2,020,000
= Ответ: $2,020,000 (2,020 в $000)
! Частая ошибка: прибавить $80,000 ($2,180,000). Переначисление УМЕНЬШАЕТ расход этого года.`,
          `Soliq xarajati = bu yil bahosi +/- o'tgan yil tuzatishi.
# 1-qadam: O'tgan yil
  Qarz $1,800,000, to'langan $1,720,000: $80,000 ortiqcha baholangan (ortiqcha hisoblangan)
# 2-qadam: Bu yil xarajati
  $2,100,000 - $80,000 = $2,020,000
= Javob: $2,020,000 ($000 da 2,020)
! Ko'p uchraydigan xato: $80,000 ni qo'shish ($2,180,000). Ortiqcha hisoblangan bu yil xarajatini KAMAYTIRADI.`),
        task(12, 1, 'number', `Task 3(a): Before a rights issue Delta Co had 12,000,000 equity shares of $1. It made a fully taken-up 1 for 3 rights issue at $2.20 per share. How many shares were issued?`, amount(4000000, '4,000,000 shares'),
          `1 for 3 means one new share for every three already held.
# New shares
  12,000,000 / 3 = 4,000,000
= Answer: 4,000,000 shares
! Common trap: 36,000,000 multiplies instead of dividing.`,
          `1 к 3 — одна новая акция на каждые три имеющиеся.
# Новые акции
  12,000,000 / 3 = 4,000,000
= Ответ: 4,000,000 акций
! Частая ошибка: 36,000,000 умножает вместо деления.`,
          `3 ga 1 — mavjud har uchta aksiyaga bitta yangi.
# Yangi aksiyalar
  12,000,000 / 3 = 4,000,000
= Javob: 4,000,000 aksiya
! Ko'p uchraydigan xato: 36,000,000 bo'lish o'rniga ko'paytiradi.`),
        task(12, 1, 'number', `Task 3(b): What were the total proceeds of the rights issue?`, amount(8800000, '$8,800,000'),
          `Proceeds = number of new shares x issue price.
# Cash raised
  4,000,000 x $2.20 = $8,800,000
= Answer: $8,800,000`,
          `Поступления = число новых акций x цена выпуска.
# Полученные деньги
  4,000,000 x $2.20 = $8,800,000
= Ответ: $8,800,000`,
          `Tushum = yangi aksiyalar soni x chiqarish narxi.
# Olingan pul
  4,000,000 x $2.20 = $8,800,000
= Javob: $8,800,000`),
        task(12, 1, 'number', `Task 3(c): How much was credited to share premium?`, amount(4800000, '$4,800,000'),
          `Share premium = what is paid ABOVE the $1 nominal value.
# Premium per share
  $2.20 - $1.00 = $1.20
# Total
  4,000,000 x $1.20 = $4,800,000
= Answer: $4,800,000
! Common trap: $8,800,000 is the whole proceeds; $4,000,000 of that is share capital.`,
          `Эмиссионный доход = то, что заплачено СВЕРХ номинала $1.
# Доход на акцию
  $2.20 - $1.00 = $1.20
# Итого
  4,000,000 x $1.20 = $4,800,000
= Ответ: $4,800,000
! Частая ошибка: $8,800,000 — все поступления; $4,000,000 из них — акционерный капитал.`,
          `Emissiya daromadi = $1 nominaldan ORTIQ to'langan qism.
# Aksiyaga daromad
  $2.20 - $1.00 = $1.20
# Jami
  4,000,000 x $1.20 = $4,800,000
= Javob: $4,800,000
! Ko'p uchraydigan xato: $8,800,000 butun tushum; uning $4,000,000 i ustav kapitali.`),
        task(15, 3, 'matrix', `Task 4: Is each item included in Delta Co's statement of changes in equity for 20X5?`, grid(IE, [['Depreciation charge for the year', 1], ['The rights issue', 0], ['A dividend declared in February 20X6', 1], ['A dividend paid in October 20X5', 0]]),
          `The statement of changes in equity shows dealings with owners and total comprehensive income.
- Depreciation: an expense line in profit or loss, not shown separately here. EXCLUDED.
- The rights issue: shares issued to owners. INCLUDED.
- Dividend declared in February 20X6: after the year end, so no liability yet. EXCLUDED.
- Dividend paid in October 20X5: paid to owners in the year. INCLUDED.`,
          `Отчёт об изменениях в капитале показывает операции с владельцами и общий совокупный доход.
- Амортизация: строка расходов в прибыли или убытке, здесь отдельно не показывается. НЕ ВКЛЮЧАЕТСЯ.
- Эмиссия прав: акции выпущены владельцам. ВКЛЮЧАЕТСЯ.
- Дивиденд, объявленный в феврале 20X6: после конца года, обязательства ещё нет. НЕ ВКЛЮЧАЕТСЯ.
- Дивиденд, выплаченный в октябре 20X5: выплачен владельцам в году. ВКЛЮЧАЕТСЯ.`,
          `Kapitaldagi o'zgarishlar hisoboti egalar bilan operatsiyalar va jami umumlashgan daromadni ko'rsatadi.
- Amortizatsiya: foyda yoki zarardagi xarajat qatori, bu yerda alohida ko'rsatilmaydi. KIRMAYDI.
- Huquqli emissiya: egalarga aksiya chiqarilgan. KIRADI.
- 20X6 fevralda e'lon qilingan dividend: yil oxiridan keyin, hali majburiyat yo'q. KIRMAYDI.
- 20X5 oktyabrda to'langan dividend: yil ichida egalarga to'langan. KIRADI.`),
        task(18, 2, 'single', `Task 5: Delta Co's gross profit margin rose from 26% to 30%. Which is a plausible reason?`, pick(['Selling expenses fell during the year', 'It sold more units after a successful advertising campaign', 'It sold proportionately fewer of its low-margin products'], 2),
          `Gross margin = gross profit / revenue. Only prices and cost of sales move it.
- Selling expenses fell: they come BELOW gross profit. WRONG.
- More units sold at the same margin: profit and sales grow together, so the % is the same. WRONG.
- Fewer low-margin products in the mix: the average margin rises. RIGHT.
= Answer: it sold proportionately fewer of its low-margin products`,
          `Валовая маржа = валовая прибыль / выручка. Её двигают только цены и себестоимость.
- Коммерческие расходы упали: они НИЖЕ валовой прибыли. НЕВЕРНО.
- Продано больше единиц при той же марже: прибыль и продажи растут вместе, % тот же. НЕВЕРНО.
- Меньше товаров с низкой маржой в ассортименте: средняя маржа растёт. ВЕРНО.
= Ответ: доля товаров с низкой маржой в продажах уменьшилась`,
          `Yalpi marja = yalpi foyda / tushum. Uni faqat narxlar va tannarx o'zgartiradi.
- Sotish xarajatlari kamaydi: ular yalpi foydadan PASTDA. NOTO'G'RI.
- O'sha marjada ko'proq birlik sotildi: foyda va sotuv birga o'sadi, % o'sha. NOTO'G'RI.
- Assortimentda past marjali tovarlar kamroq: o'rtacha marja oshadi. TO'G'RI.
= Javob: past marjali mahsulotlar nisbatan kamroq sotilgan`),
      ],
    },
    {
      id: 'b05', kitRef: 5, area: 'statements', title: 'Erin',
      intro: `You are helping Erin, a sole trader, prepare her financial statements for the year ended 31 March 20X5. Several issues need to be dealt with first.`,
      tasks: [
        task(4, 1, 'matrix', `Task 1(a): Erin returned faulty goods to a supplier. They had cost $360,000 including sales tax at 20%. Which accounts are debited or credited?`, grid(DCN, [['Trade payables', 0], ['Returns outwards', 1], ['Sales tax', 1], ['Trade receivables', 2]]),
          `Returning goods undoes part of a purchase, including the tax on it.
- Trade payables: Erin owes the supplier less. DEBIT the gross amount.
- Returns outwards: CREDIT the net amount.
- Sales tax: the tax she had claimed back is given up. CREDIT.
- Trade receivables: nothing to do with customers. NO ENTRY.`,
          `Возврат товара отменяет часть закупки вместе с налогом.
- Торговые кредиторы: Эрин должна поставщику меньше. ДЕБЕТ на брутто-сумму.
- Возвраты поставщикам: КРЕДИТ на нетто-сумму.
- Налог с продаж: возмещённый налог отменяется. КРЕДИТ.
- Торговые дебиторы: не связаны с покупателями. НЕТ ЗАПИСИ.`,
          `Tovar qaytarish xaridning bir qismini soliq bilan birga bekor qiladi.
- Savdo kreditorlari: Erin yetkazib beruvchiga kamroq qarz. Yalpi summaga DEBET.
- Xarid qaytarishlari: sof summaga KREDIT.
- Sotuv solig'i: qaytarib olgan solig'i bekor bo'ladi. KREDIT.
- Savdo debitorlari: mijozlarga aloqasi yo'q. YOZUV YO'Q.`),
        task(4, 1, 'number', `Task 1(b): What amount is credited to returns outwards? Give your answer in $000.`, amount(300, '$300,000 (300 in $000)'),
          `$360,000 includes 20% tax, so gross = 120% of net.
# Net amount
  $360,000 x 100/120 = $300,000
# Tax
  $360,000 - $300,000 = $60,000
= Answer: $300,000 (300 in $000)
! Common trap: $288,000 takes 20% off the gross figure.`,
          `$360,000 включает налог 20%, брутто = 120% от нетто.
# Нетто-сумма
  $360,000 x 100/120 = $300,000
# Налог
  $360,000 - $300,000 = $60,000
= Ответ: $300,000 (300 в $000)
! Частая ошибка: $288,000 вычитает 20% из брутто.`,
          `$360,000 20% soliqni o'z ichiga oladi, yalpi = sofning 120% i.
# Sof summa
  $360,000 x 100/120 = $300,000
# Soliq
  $360,000 - $300,000 = $60,000
= Javob: $300,000 ($000 da 300)
! Ko'p uchraydigan xato: $288,000 yalpidan 20% ayiradi.`),
        task(4, 2, 'matrix', `Task 2(a): Erin took goods that cost $12,000, and would sell for $18,000, for her own use. Which accounts are debited or credited?`, grid(DCN, [['Drawings', 0], ['Purchases', 1], ['Revenue', 2], ['Trade payables', 2]]),
          `Goods taken by the owner were bought but never sold.
- Drawings: the owner has taken value out. DEBIT.
- Purchases: the goods are taken out of purchases. CREDIT.
- Revenue: nothing was sold. NO ENTRY.
- Trade payables: the supplier is owed the same as before. NO ENTRY.`,
          `Товар, взятый владельцем, куплен, но не продан.
- Изъятия: владелец забрал ценность. ДЕБЕТ.
- Закупки: товар убирают из закупок. КРЕДИТ.
- Выручка: ничего не продано. НЕТ ЗАПИСИ.
- Торговые кредиторы: поставщику должны столько же. НЕТ ЗАПИСИ.`,
          `Egasi olgan tovar sotib olingan, lekin sotilmagan.
- Olib qo'yishlar: egasi qiymatni olib ketgan. DEBET.
- Xaridlar: tovar xaridlardan chiqariladi. KREDIT.
- Tushum: hech narsa sotilmagan. YOZUV YO'Q.
- Savdo kreditorlari: yetkazib beruvchiga qarz o'sha-o'sha. YOZUV YO'Q.`),
        task(4, 1, 'number', `Task 2(b): At what amount are the drawings recorded?`, amount(12000, '$12,000'),
          `Goods taken by the owner are recorded at what they COST the business.
# Amount
  Cost $12,000 (the $18,000 selling price is not used)
= Answer: $12,000
! Common trap: $18,000 would record a profit on a sale that never happened.`,
          `Товар, взятый владельцем, записывают по его СЕБЕСТОИМОСТИ для бизнеса.
# Сумма
  Себестоимость $12,000 (цена продажи $18,000 не используется)
= Ответ: $12,000
! Частая ошибка: $18,000 записало бы прибыль по продаже, которой не было.`,
          `Egasi olgan tovar biznesga TUSHGAN narxda yoziladi.
# Summa
  Tannarx $12,000 ($18,000 sotish narxi ishlatilmaydi)
= Javob: $12,000
! Ko'p uchraydigan xato: $18,000 bo'lmagan sotuvdan foyda yozib qo'yadi.`),
        task(4, 3, 'matrix', `Task 3: State whether each statement is true or false.`, grid(TF, [['A trade discount given to customers is shown as an expense', 1], ['An early settlement discount is deducted at the point of sale when the customer is not expected to take it', 1], ['Early settlement discounts received from suppliers are shown in profit or loss', 0]]),
          `Check each statement.
- A trade discount is shown as an expense: FALSE. It simply lowers the price and is never recorded.
- A settlement discount is deducted at the sale when the customer is NOT expected to take it: FALSE. It is deducted only when they ARE expected to take it.
- Settlement discounts received from suppliers are shown in profit or loss: TRUE. They are income.`,
          `Проверим каждое утверждение.
- Торговая скидка показывается как расход: НЕВЕРНО. Она просто снижает цену и не записывается.
- Скидку за раннюю оплату вычитают при продаже, если покупатель НЕ воспользуется ею: НЕВЕРНО. Её вычитают, только если он, как ожидается, воспользуется.
- Скидки за раннюю оплату от поставщиков показывают в прибыли или убытке: ВЕРНО. Это доход.`,
          `Har bir fikrni tekshiramiz.
- Savdo chegirmasi xarajat sifatida ko'rsatiladi: NOTO'G'RI. U narxni kamaytiradi va yozilmaydi.
- Mijoz olishi KUTILMASA, erta to'lov chegirmasi sotuvda ayiriladi: NOTO'G'RI. Faqat olishi KUTILSA ayiriladi.
- Yetkazib beruvchilardan olingan erta to'lov chegirmalari foyda yoki zararda ko'rsatiladi: TO'G'RI. Ular daromad.`),
        task(9, 1, 'single', `Task 4(a): Erin paid $24,000 on 1 October 20X4 for insurance for the 12 months to 30 September 20X5. How does the year-end adjustment affect profit?`, pick(['It is an accrual that reduces profit', 'It is a prepayment that increases profit', 'It is a prepayment that reduces profit'], 1),
          `Cover paid now for a period that runs past the year end is partly a prepayment.
# Months in this year
  1 October to 31 March: 6 months
# Months for next year
  1 April to 30 September: 6 months = $24,000 x 6/12 = $12,000
# Effect
  $12,000 is taken out of this year's expense: a PREPAYMENT that INCREASES profit
= Answer: it is a prepayment that increases profit`,
          `Покрытие, оплаченное сейчас за период после конца года, частично — предоплата.
# Месяцы этого года
  1 октября – 31 марта: 6 месяцев
# Месяцы следующего года
  1 апреля – 30 сентября: 6 месяцев = $24,000 x 6/12 = $12,000
# Влияние
  $12,000 убирают из расхода этого года: ПРЕДОПЛАТА, которая УВЕЛИЧИВАЕТ прибыль
= Ответ: это предоплата, увеличивающая прибыль`,
          `Hozir to'langan, yil oxiridan keyingi davrga ham tegishli sug'urta qisman oldindan to'lov.
# Bu yildagi oylar
  1 oktyabr – 31 mart: 6 oy
# Keyingi yil oylari
  1 aprel – 30 sentyabr: 6 oy = $24,000 x 6/12 = $12,000
# Ta'siri
  $12,000 bu yil xarajatidan chiqariladi: foydani OSHIRADIGAN OLDINDAN TO'LOV
= Javob: bu foydani oshiradigan oldindan to'lov`),
        task(9, 1, 'single', `Task 4(b): Legal fees of $5,000 for a customer dispute are owed but not yet billed. How does the adjustment affect profit?`, pick(['It is an accrual that reduces profit', 'It is a prepayment that increases profit', 'It is an accrual that increases profit'], 0),
          `The cost belongs to this year but has not been billed or paid.
# Type
  An expense of this year still owed: an ACCRUAL
# Effect
  $5,000 is added to expenses, so profit FALLS
= Answer: it is an accrual that reduces profit`,
          `Расход относится к этому году, но счёт ещё не выставлен и не оплачен.
# Вид
  Расход этого года, ещё не оплаченный: НАЧИСЛЕНИЕ
# Влияние
  $5,000 добавляются к расходам, прибыль ПАДАЕТ
= Ответ: это начисление, уменьшающее прибыль`,
          `Xarajat bu yilga tegishli, lekin hali hisob berilmagan va to'lanmagan.
# Turi
  Hali to'lanmagan bu yil xarajati: HISOBLANGAN XARAJAT
# Ta'siri
  $5,000 xarajatlarga qo'shiladi, foyda KAMAYADI
= Javob: bu foydani kamaytiradigan hisoblangan xarajat`),
        task(9, 1, 'number', `Task 4(c): What is the net increase in profit from the two adjustments?`, amount(7000, '$7,000'),
          `Combine the two adjustments.
# Prepayment
  + $12,000
# Accrual
  - $5,000
# Net
  $12,000 - $5,000 = $7,000
= Answer: $7,000 increase
! Common trap: $17,000 adds both, treating the accrual as if it raised profit.`,
          `Объединим две корректировки.
# Предоплата
  + $12,000
# Начисление
  - $5,000
# Итог
  $12,000 - $5,000 = $7,000
= Ответ: рост на $7,000
! Частая ошибка: $17,000 складывает обе, будто начисление повышает прибыль.`,
          `Ikki tuzatishni birlashtiramiz.
# Oldindan to'lov
  + $12,000
# Hisoblangan xarajat
  - $5,000
# Sof
  $12,000 - $5,000 = $7,000
= Javob: $7,000 oshish
! Ko'p uchraydigan xato: $17,000 ikkalasini qo'shadi, go'yo hisoblangan xarajat foydani oshiradi.`),
        task(14, 4, 'matrix', `Task 5: The trial balance contains a suspense account. Could each error be a reason for it?`, grid(RN, [['A sale of $5,630 was recorded as $5,360 in both receivables and revenue', 1], ['Cash sales of $2,000 were credited to revenue, with the debit posted to suspense', 0], ['A rent payment was debited to bank and credited to rent expense', 1], ['A credit purchase was credited to payables, but the debit was never posted', 0]]),
          `A suspense account only appears when debits and credits do NOT match.
- Same wrong amount ($5,360) on both sides: debits still equal credits. NOT RELEVANT.
- Cash sale credited to revenue, debit put in suspense: suspense holds the missing debit. RELEVANT.
- Rent debited to bank, credited to rent: both sides swapped, still equal. NOT RELEVANT.
- Credit purchase: payables credited, debit never posted: one side missing. RELEVANT.`,
          `Счёт неясных сумм возникает, только когда дебеты и кредиты НЕ равны.
- Одна и та же неверная сумма ($5,360) с обеих сторон: дебет всё равно равен кредиту. НЕ ОТНОСИТСЯ.
- Продажа за наличные в кредит выручки, дебет на неясные суммы: там лежит недостающий дебет. ОТНОСИТСЯ.
- Аренда в дебет банка, в кредит аренды: стороны переставлены, но равны. НЕ ОТНОСИТСЯ.
- Закупка в кредит: кредиторы кредитованы, дебет не проведён: одной стороны нет. ОТНОСИТСЯ.`,
          `Vaqtinchalik hisob faqat debet va kreditlar mos KELMAGANDA paydo bo'ladi.
- Ikkala tomonda bir xil noto'g'ri summa ($5,360): debet baribir kreditga teng. TEGISHLI EMAS.
- Naqd sotuv tushumga kredit, debet vaqtinchalikka: unda yetishmayotgan debet. TEGISHLI.
- Ijara bankka debet, ijaraga kredit: tomonlar almashgan, lekin teng. TEGISHLI EMAS.
- Kreditga xarid: kreditorlar kreditlangan, debet yozilmagan: bir tomon yo'q. TEGISHLI.`),
      ],
    },
    {
      id: 'b06', kitRef: 6, area: 'cashflows', title: 'Falcon Co',
      intro: `Prepare the statement of cash flows of Falcon Co for the year ended 30 June 20X5 by the indirect method, showing interest paid under financing activities. In the year Falcon Co sold plant for $6,000,000 at a loss of $1,500,000, included in cost of sales. Depreciation was $14,000,000. Tax on the year's profit is estimated at $7,000,000. Figures are in $000.`,
      table: { head: ['Falcon Co ($000)', '20X5', '20X4'], rows: [
        ['Revenue', '120,000', ''], ['Cost of sales', '(82,000)', ''], ['Gross profit', '38,000', ''], ['Selling expenses', '(4,000)', ''], ['Administrative expenses', '(2,000)', ''], ['Operating profit', '32,000', ''], ['Interest expense', '(900)', ''], ['Profit before income taxes', '31,100', ''], ['Income tax expense', '(7,000)', ''], ['Profit for the year', '24,100', ''], ['Revaluation gain (other comprehensive income)', '3,000', ''],
        ['Property, plant and equipment', '120,000', '100,000'], ['Inventories', '30,000', '26,000'], ['Trade receivables', '35,000', '31,000'], ['Cash', '-', '8,000'], ['Total assets', '185,000', '165,000'],
        ['Equity shares', '25,000', '20,000'], ['Share premium', '9,000', '4,000'], ['Revaluation surplus', '9,000', '6,000'], ['Retained earnings', '94,000', '81,000'], ['Bank loan', '10,000', '20,000'], ['Trade payables', '28,000', '25,000'], ['Income tax payable', '7,000', '9,000'], ['Bank overdraft', '3,000', '-'], ['Total equity and liabilities', '185,000', '165,000']] },
      tasks: [
        task(17, 1, 'single', `Task 1: With interest paid shown under financing, which figure starts the operating activities section?`, pick(['Operating profit of $32,000,000', 'Profit before income taxes of $31,100,000', 'Profit for the year of $24,100,000'], 0),
          `Interest paid is shown under FINANCING, so it must not be inside the starting profit.
- Operating profit $32,000,000: before interest. RIGHT.
- Profit before income taxes: interest already taken off, so it would need adding back first. WRONG.
- Profit for the year: interest and tax already taken off. WRONG.
= Answer: operating profit of $32,000,000`,
          `Уплаченные проценты показаны в ФИНАНСОВОЙ деятельности, поэтому их не должно быть в начальной прибыли.
- Операционная прибыль $32,000,000: до процентов. ВЕРНО.
- Прибыль до налога на прибыль: проценты уже вычтены, их пришлось бы сначала прибавить. НЕВЕРНО.
- Прибыль за год: проценты и налог уже вычтены. НЕВЕРНО.
= Ответ: операционная прибыль $32,000,000`,
          `To'langan foiz MOLIYAVIY faoliyatda ko'rsatiladi, shuning uchun u boshlang'ich foydada bo'lmasligi kerak.
- Operatsion foyda $32,000,000: foizdan oldin. TO'G'RI.
- Foyda solig'igacha foyda: foiz allaqachon ayirilgan, avval qo'shish kerak bo'lardi. NOTO'G'RI.
- Yil foydasi: foiz va soliq allaqachon ayirilgan. NOTO'G'RI.
= Javob: $32,000,000 operatsion foyda`),
        task(17, 3, 'matrix', `Task 2: Is each adjustment added to or subtracted from operating profit?`, grid(AS, [['Depreciation', 0], ['Loss on sale of plant', 0], ['Increase in inventories', 1], ['Increase in trade receivables', 1], ['Increase in trade payables', 0]]),
          `Ask of each item: did it change profit without moving cash, or tie up / release cash?
- Depreciation: a cost with no cash paid. ADD back.
- Loss on sale of plant: a non-cash loss. ADD back.
- Increase in inventories: cash tied up in stock. SUBTRACT.
- Increase in trade receivables: customers owe more, less cash in. SUBTRACT.
- Increase in trade payables: we owe more, cash kept for now. ADD.`,
          `Спросим о каждой статье: она изменила прибыль без движения денег или связала / высвободила деньги?
- Амортизация: расход без оплаты. ПРИБАВИТЬ.
- Убыток от продажи оборудования: неденежный убыток. ПРИБАВИТЬ.
- Рост запасов: деньги связаны в товаре. ВЫЧЕСТЬ.
- Рост торговых дебиторов: покупатели должны больше, денег пришло меньше. ВЫЧЕСТЬ.
- Рост торговых кредиторов: мы должны больше, деньги пока у нас. ПРИБАВИТЬ.`,
          `Har bir modda haqida so'raymiz: pul harakatlanmasdan foydani o'zgartirdimi yoki pulni bog'ladi / bo'shatdimi?
- Amortizatsiya: pul to'lanmagan xarajat. QO'SHILADI.
- Uskuna sotishdan zarar: pulsiz zarar. QO'SHILADI.
- Zaxira oshishi: pul tovarda bog'langan. AYIRILADI.
- Savdo debitorlari oshishi: mijozlar ko'proq qarz, kamroq pul kirdi. AYIRILADI.
- Savdo kreditorlari oshishi: biz ko'proq qarzmiz, pul hozircha bizda. QO'SHILADI.`),
        task(17, 2, 'number', `Task 3: What is cash generated from operations, before income taxes? Give your answer in $000.`, amount(42500, '$42,500,000 (42,500 in $000)'),
          `Start from operating profit and make the adjustments ($000).
# Non-cash items
  $32,000 + depreciation $14,000 + loss on sale $1,500 = $47,500
# Working capital
  Inventories up $30,000 - $26,000 = $4,000: - $4,000
  Receivables up $35,000 - $31,000 = $4,000: - $4,000
  Payables up $28,000 - $25,000 = $3,000: + $3,000
# Cash generated from operations
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Answer: $42,500,000 (42,500 in $000)
! Common trap: subtracting the loss on sale, or adding the increase in receivables.`,
          `Начнём с операционной прибыли и внесём корректировки ($000).
# Неденежные статьи
  $32,000 + амортизация $14,000 + убыток от продажи $1,500 = $47,500
# Оборотный капитал
  Запасы выросли $30,000 - $26,000 = $4,000: - $4,000
  Дебиторы выросли $35,000 - $31,000 = $4,000: - $4,000
  Кредиторы выросли $28,000 - $25,000 = $3,000: + $3,000
# Денежные средства от операций
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Ответ: $42,500,000 (42,500 в $000)
! Частая ошибка: вычесть убыток от продажи или прибавить рост дебиторов.`,
          `Operatsion foydadan boshlab, tuzatishlarni kiritamiz ($000).
# Pulsiz moddalar
  $32,000 + amortizatsiya $14,000 + sotish zarari $1,500 = $47,500
# Aylanma kapital
  Zaxira oshgan $30,000 - $26,000 = $4,000: - $4,000
  Debitorlar oshgan $35,000 - $31,000 = $4,000: - $4,000
  Kreditorlar oshgan $28,000 - $25,000 = $3,000: + $3,000
# Operatsiyalardan pul
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Javob: $42,500,000 ($000 da 42,500)
! Ko'p uchraydigan xato: sotish zararini ayirish yoki debitorlar oshishini qo'shish.`),
        task(17, 1, 'number', `Task 4: How much income tax was paid in the year? Give your answer in $000.`, amount(9000, '$9,000,000 (9,000 in $000)'),
          `Tax paid = what was owed at the start + this year's charge - what is still owed at the end ($000).
# Working
  Opening liability $9,000 + charge $7,000 - closing liability $7,000 = $9,000
= Answer: $9,000,000 (9,000 in $000)
! Common trap: using the $7,000 charge. This year's tax is still owed; last year's $9,000 was paid.`,
          `Уплаченный налог = долг на начало + расход года - долг на конец ($000).
# Расчёт
  Обязательство на начало $9,000 + расход $7,000 - на конец $7,000 = $9,000
= Ответ: $9,000,000 (9,000 в $000)
! Частая ошибка: взять расход $7,000. Налог этого года ещё не уплачен; уплачены прошлогодние $9,000.`,
          `To'langan soliq = boshidagi qarz + bu yil xarajati - oxirida qolgan qarz ($000).
# Hisob
  Boshlang'ich majburiyat $9,000 + xarajat $7,000 - yakuniy majburiyat $7,000 = $9,000
= Javob: $9,000,000 ($000 da 9,000)
! Ko'p uchraydigan xato: $7,000 xarajatni olish. Bu yil solig'i hali qarz; o'tgan yilgi $9,000 to'langan.`),
        task(17, 2, 'number', `Task 5: How much cash was paid for property, plant and equipment? Give your answer in $000.`, amount(38500, '$38,500,000 (38,500 in $000)'),
          `Rebuild the property, plant and equipment account; purchases are the missing figure ($000).
# Step 1: Carrying amount of the plant sold
  Proceeds $6,000 + loss $1,500 = $7,500
# Step 2: The account
  Opening $100,000 + revaluation $3,000 + purchases ? - depreciation $14,000 - disposal $7,500 = closing $120,000
# Step 3: Purchases
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Answer: $38,500,000 (38,500 in $000)
! Common trap: forgetting to take out the revaluation, which raised the balance without any cash.`,
          `Восстановим счёт основных средств; покупки — недостающая цифра ($000).
# Шаг 1: Балансовая стоимость проданного оборудования
  Выручка $6,000 + убыток $1,500 = $7,500
# Шаг 2: Счёт
  Начало $100,000 + переоценка $3,000 + покупки ? - амортизация $14,000 - выбытие $7,500 = конец $120,000
# Шаг 3: Покупки
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Ответ: $38,500,000 (38,500 в $000)
! Частая ошибка: не убрать переоценку, которая увеличила остаток без денег.`,
          `Asosiy vositalar hisobini tiklaymiz; xaridlar yetishmayotgan son ($000).
# 1-qadam: Sotilgan uskunaning balans qiymati
  Tushum $6,000 + zarar $1,500 = $7,500
# 2-qadam: Hisob
  Boshi $100,000 + qayta baholash $3,000 + xaridlar ? - amortizatsiya $14,000 - chiqish $7,500 = oxiri $120,000
# 3-qadam: Xaridlar
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Javob: $38,500,000 ($000 da 38,500)
! Ko'p uchraydigan xato: pulsiz qoldiqni oshirgan qayta baholashni chiqarmaslik.`),
        task(17, 2, 'number', `Task 6: What dividend was paid in the year? Give your answer in $000.`, amount(11100, '$11,100,000 (11,100 in $000)'),
          `Dividends paid are the missing figure in retained earnings ($000).
# The account
  Opening $81,000 + profit $24,100 - dividends ? = closing $94,000
# Dividends
  $81,000 + $24,100 - $94,000 = $11,100
= Answer: $11,100,000 (11,100 in $000)
! Common trap: also adding the $3,000 revaluation gain. It goes to the revaluation surplus, not retained earnings.`,
          `Выплаченные дивиденды — недостающая цифра в нераспределённой прибыли ($000).
# Счёт
  Начало $81,000 + прибыль $24,100 - дивиденды ? = конец $94,000
# Дивиденды
  $81,000 + $24,100 - $94,000 = $11,100
= Ответ: $11,100,000 (11,100 в $000)
! Частая ошибка: прибавить ещё и доход от переоценки $3,000. Он идёт в резерв переоценки, а не в нераспределённую прибыль.`,
          `To'langan dividendlar taqsimlanmagan foydadagi yetishmayotgan son ($000).
# Hisob
  Boshi $81,000 + foyda $24,100 - dividendlar ? = oxiri $94,000
# Dividendlar
  $81,000 + $24,100 - $94,000 = $11,100
= Javob: $11,100,000 ($000 da 11,100)
! Ko'p uchraydigan xato: $3,000 qayta baholash daromadini ham qo'shish. U taqsimlanmagan foydaga emas, qayta baholash rezerviga boradi.`),
        task(17, 2, 'number', `Task 7: What is the net cash used in financing activities? Give your answer in $000 as a positive number.`, amount(12000, '$12,000,000 used (12,000 in $000)'),
          `List every financing cash flow ($000).
# In
  Shares: share capital up $5,000 + share premium up $5,000 = $10,000
# Out
  Loan repaid: $20,000 - $10,000 = $10,000
  Interest paid: $900
  Dividends paid: $11,100
# Net
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Answer: $12,000,000 used (12,000 in $000)
! Common trap: forgetting the share premium, or leaving interest out (this company shows it under financing).`,
          `Перечислим все финансовые потоки ($000).
# Приток
  Акции: капитал вырос на $5,000 + эмиссионный доход на $5,000 = $10,000
# Отток
  Погашение займа: $20,000 - $10,000 = $10,000
  Уплаченные проценты: $900
  Выплаченные дивиденды: $11,100
# Итог
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Ответ: использовано $12,000,000 (12,000 в $000)
! Частая ошибка: забыть эмиссионный доход или не учесть проценты (компания показывает их в финансовой деятельности).`,
          `Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# Kirim
  Aksiyalar: kapital $5,000 + emissiya daromadi $5,000 oshgan = $10,000
# Chiqim
  Qaytarilgan qarz: $20,000 - $10,000 = $10,000
  To'langan foiz: $900
  To'langan dividendlar: $11,100
# Sof
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Javob: $12,000,000 ishlatilgan ($000 da 12,000)
! Ko'p uchraydigan xato: emissiya daromadini unutish yoki foizni chiqarib qo'yish (bu kompaniya uni moliyaviyda ko'rsatadi).`),
        task(17, 2, 'single', `Task 8: What was the net change in cash and cash equivalents, and the closing position?`, pick(['A decrease of $11,000,000, ending with a net overdraft of $3,000,000', 'An increase of $11,000,000, ending with net cash of $19,000,000', 'A decrease of $5,000,000, ending with net cash of $3,000,000'], 0),
          `Add the three sections, then check against the opening and closing cash ($000).
# Operating
  $42,500 - tax $9,000 = $33,500
# Investing
  Purchases -$38,500 + disposal proceeds $6,000 = -$32,500
# Financing
  -$12,000
# Net change
  $33,500 - $32,500 - $12,000 = -$11,000
# Check
  Opening cash $8,000 - $11,000 = -$3,000: the $3,000 overdraft at the year end
= Answer: a decrease of $11,000,000, ending with a net overdraft of $3,000,000
! Common trap: treating the closing overdraft as cash, which gives the wrong sign.`,
          `Сложим три раздела и сверим с деньгами на начало и конец ($000).
# Операционная
  $42,500 - налог $9,000 = $33,500
# Инвестиционная
  Покупки -$38,500 + выручка от выбытия $6,000 = -$32,500
# Финансовая
  -$12,000
# Изменение
  $33,500 - $32,500 - $12,000 = -$11,000
# Проверка
  Деньги на начало $8,000 - $11,000 = -$3,000: овердрафт $3,000 на конец года
= Ответ: уменьшение на $11,000,000, на конец чистый овердрафт $3,000,000
! Частая ошибка: считать овердрафт на конец деньгами, тогда знак неверный.`,
          `Uch bo'limni qo'shib, boshi va oxiridagi pul bilan tekshiramiz ($000).
# Operatsion
  $42,500 - soliq $9,000 = $33,500
# Investitsion
  Xaridlar -$38,500 + chiqish tushumi $6,000 = -$32,500
# Moliyaviy
  -$12,000
# Sof o'zgarish
  $33,500 - $32,500 - $12,000 = -$11,000
# Tekshiruv
  Boshidagi pul $8,000 - $11,000 = -$3,000: yil oxiridagi $3,000 overdraft
= Javob: $11,000,000 kamayish, oxirida $3,000,000 sof overdraft
! Ko'p uchraydigan xato: yakuniy overdraftni pul deb hisoblash, ishora noto'g'ri chiqadi.`),
      ],
    },
    {
      id: 'b07', kitRef: 7, area: 'cashflows', title: 'Gannet Co',
      intro: `Prepare the statement of cash flows of Gannet Co for the year ended 31 March 20X1 by the indirect method. Plant with a carrying amount of $900,000 was sold at a profit. Depreciation was $3,500,000. Tax on the year's profit is estimated at $3,000,000. There were no dividends. Figures are in $000.`,
      table: { head: ['Gannet Co ($000)', '20X1', '20X0'], rows: [
        ['Revenue', '96,000', ''], ['Cost of sales', '(80,000)', ''], ['Gross profit', '16,000', ''], ['Selling expenses', '(1,400)', ''], ['Administrative expenses', '(800)', ''], ['Profit on disposal of plant', '400', ''], ['Operating profit', '14,200', ''], ['Interest income', '300', ''], ['Profit before financing and income taxes', '14,500', ''], ['Interest expense', '(2,000)', ''], ['Profit before income taxes', '12,500', ''], ['Income tax expense', '(3,000)', ''], ['Profit for the year', '9,500', ''],
        ['Property, plant and equipment', '76,000', '75,200'], ['Inventories', '29,000', '27,000'], ['Trade receivables', '38,000', '35,000'], ['Cash', '5,000', '1,000'], ['Total assets', '148,000', '138,200'],
        ['Equity shares', '12,000', '11,000'], ['Share premium', '800', '-'], ['Retained earnings', '82,200', '72,700'], ['10% debentures', '20,000', '20,000'], ['Trade payables', '30,000', '32,000'], ['Income tax payable', '3,000', '2,500'], ['Total equity and liabilities', '148,000', '138,200']] },
      tasks: [
        task(17, 3, 'matrix', `Task 1: Is each adjustment added to or subtracted from operating profit?`, grid(AS, [['Depreciation', 0], ['Profit on disposal of plant', 1], ['Increase in inventories', 1], ['Increase in trade receivables', 1], ['Decrease in trade payables', 1]]),
          `Ask of each item: non-cash, or does it tie up / release cash?
- Depreciation: non-cash cost. ADD back.
- Profit on disposal: a non-cash gain; the real cash (proceeds) goes under investing. SUBTRACT.
- Increase in inventories: cash tied up. SUBTRACT.
- Increase in trade receivables: less cash collected. SUBTRACT.
- Decrease in trade payables: suppliers were paid down. SUBTRACT.`,
          `Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Амортизация: неденежный расход. ПРИБАВИТЬ.
- Прибыль от выбытия: неденежная прибыль; реальные деньги (выручка) идут в инвестиционный раздел. ВЫЧЕСТЬ.
- Рост запасов: деньги связаны. ВЫЧЕСТЬ.
- Рост торговых дебиторов: собрано меньше денег. ВЫЧЕСТЬ.
- Снижение торговых кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
          `Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Amortizatsiya: pulsiz xarajat. QO'SHILADI.
- Chiqish foydasi: pulsiz daromad; haqiqiy pul (tushum) investitsionga boradi. AYIRILADI.
- Zaxira oshishi: pul bog'langan. AYIRILADI.
- Savdo debitorlari oshishi: kamroq pul yig'ilgan. AYIRILADI.
- Savdo kreditorlari kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`),
        task(17, 2, 'number', `Task 2: What is cash generated from operations, before income taxes? Give your answer in $000.`, amount(10300, '$10,300,000 (10,300 in $000)'),
          `Start from operating profit ($000).
# Non-cash items
  $14,200 + depreciation $3,500 - profit on disposal $400 = $17,300
# Working capital
  Inventories up $2,000: - $2,000
  Receivables up $3,000: - $3,000
  Payables down $2,000: - $2,000
# Cash generated from operations
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Answer: $10,300,000 (10,300 in $000)
! Common trap: adding the profit on disposal, or adding the fall in payables.`,
          `Начнём с операционной прибыли ($000).
# Неденежные статьи
  $14,200 + амортизация $3,500 - прибыль от выбытия $400 = $17,300
# Оборотный капитал
  Запасы выросли на $2,000: - $2,000
  Дебиторы выросли на $3,000: - $3,000
  Кредиторы упали на $2,000: - $2,000
# Денежные средства от операций
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Ответ: $10,300,000 (10,300 в $000)
! Частая ошибка: прибавить прибыль от выбытия или прибавить снижение кредиторов.`,
          `Operatsion foydadan boshlaymiz ($000).
# Pulsiz moddalar
  $14,200 + amortizatsiya $3,500 - chiqish foydasi $400 = $17,300
# Aylanma kapital
  Zaxira $2,000 oshgan: - $2,000
  Debitorlar $3,000 oshgan: - $3,000
  Kreditorlar $2,000 kamaygan: - $2,000
# Operatsiyalardan pul
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Javob: $10,300,000 ($000 da 10,300)
! Ko'p uchraydigan xato: chiqish foydasini qo'shish yoki kreditorlar kamayishini qo'shish.`),
        task(17, 1, 'number', `Task 3: How much income tax was paid? Give your answer in $000.`, amount(2500, '$2,500,000 (2,500 in $000)'),
          `Tax paid = opening liability + charge - closing liability ($000).
# Working
  $2,500 + $3,000 - $3,000 = $2,500
= Answer: $2,500,000 (2,500 in $000)
! Common trap: using the $3,000 charge; that is still owed at the year end.`,
          `Уплаченный налог = обязательство на начало + расход - обязательство на конец ($000).
# Расчёт
  $2,500 + $3,000 - $3,000 = $2,500
= Ответ: $2,500,000 (2,500 в $000)
! Частая ошибка: взять расход $3,000; он ещё не уплачен на конец года.`,
          `To'langan soliq = boshlang'ich majburiyat + xarajat - yakuniy majburiyat ($000).
# Hisob
  $2,500 + $3,000 - $3,000 = $2,500
= Javob: $2,500,000 ($000 da 2,500)
! Ko'p uchraydigan xato: $3,000 xarajatni olish; u yil oxirida hali qarz.`),
        task(17, 2, 'single', `Task 4: Which calculation gives the disposal proceeds ($000)?`, pick(['$900 - $400', '$900 + $400', '$900'], 1),
          `Proceeds = carrying amount sold + profit (or - loss).
- $900 - $400: treats the profit as a loss. WRONG.
- $900 + $400 = $1,300: sold for more than its carrying amount. RIGHT.
- $900: ignores the profit. WRONG.
= Answer: $900 + $400`,
          `Выручка = проданная балансовая стоимость + прибыль (или - убыток).
- $900 - $400: считает прибыль убытком. НЕВЕРНО.
- $900 + $400 = $1,300: продано дороже балансовой стоимости. ВЕРНО.
- $900: не учитывает прибыль. НЕВЕРНО.
= Ответ: $900 + $400`,
          `Tushum = sotilgan balans qiymati + foyda (yoki - zarar).
- $900 - $400: foydani zarar deb oladi. NOTO'G'RI.
- $900 + $400 = $1,300: balans qiymatidan qimmat sotilgan. TO'G'RI.
- $900: foydani hisobga olmaydi. NOTO'G'RI.
= Javob: $900 + $400`),
        task(17, 2, 'number', `Task 5: How much was paid for property, plant and equipment? Give your answer in $000.`, amount(5200, '$5,200,000 (5,200 in $000)'),
          `Rebuild the property, plant and equipment account; purchases are the missing figure ($000).
# The account
  Opening $75,200 + purchases ? - depreciation $3,500 - disposal $900 = closing $76,000
# Purchases
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Answer: $5,200,000 (5,200 in $000)
! Common trap: using the $1,300 proceeds instead of the $900 carrying amount removed.`,
          `Восстановим счёт основных средств; покупки — недостающая цифра ($000).
# Счёт
  Начало $75,200 + покупки ? - амортизация $3,500 - выбытие $900 = конец $76,000
# Покупки
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Ответ: $5,200,000 (5,200 в $000)
! Частая ошибка: взять выручку $1,300 вместо списанной балансовой стоимости $900.`,
          `Asosiy vositalar hisobini tiklaymiz; xaridlar yetishmayotgan son ($000).
# Hisob
  Boshi $75,200 + xaridlar ? - amortizatsiya $3,500 - chiqish $900 = oxiri $76,000
# Xaridlar
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Javob: $5,200,000 ($000 da 5,200)
! Ko'p uchraydigan xato: chiqarilgan $900 balans qiymati o'rniga $1,300 tushumni olish.`),
        task(17, 2, 'single', `Task 6: Which calculation gives the proceeds of the share issue ($000)?`, pick(['$12,000 - $11,000', '$12,000 - $11,000 + $800', '$12,000 - $11,000 - $800'], 1),
          `Cash from a share issue = rise in share capital + rise in share premium.
- $12,000 - $11,000: forgets the premium. WRONG.
- $12,000 - $11,000 + $800 = $1,800: both parts. RIGHT.
- $12,000 - $11,000 - $800: takes the premium off. WRONG.
= Answer: $12,000 - $11,000 + $800`,
          `Деньги от выпуска акций = рост капитала + рост эмиссионного дохода.
- $12,000 - $11,000: забывает эмиссионный доход. НЕВЕРНО.
- $12,000 - $11,000 + $800 = $1,800: обе части. ВЕРНО.
- $12,000 - $11,000 - $800: вычитает эмиссионный доход. НЕВЕРНО.
= Ответ: $12,000 - $11,000 + $800`,
          `Aksiya chiqarishdan pul = kapital o'sishi + emissiya daromadi o'sishi.
- $12,000 - $11,000: emissiya daromadini unutadi. NOTO'G'RI.
- $12,000 - $11,000 + $800 = $1,800: ikkala qism. TO'G'RI.
- $12,000 - $11,000 - $800: emissiya daromadini ayiradi. NOTO'G'RI.
= Javob: $12,000 - $11,000 + $800`),
        task(17, 1, 'single', `Task 7: Under which heading is the interest received of $300,000 shown?`, pick(['Operating activities', 'Investing activities', 'Financing activities'], 1),
          `In FA, interest and dividends RECEIVED are a return on investments.
- Operating: not the FA treatment for interest received. WRONG.
- Investing: RIGHT.
- Financing: that is for interest PAID and money raised. WRONG.
= Answer: investing activities`,
          `В FA ПОЛУЧЕННЫЕ проценты и дивиденды — доход от вложений.
- Операционная: в FA полученные проценты сюда не относят. НЕВЕРНО.
- Инвестиционная: ВЕРНО.
- Финансовая: это для УПЛАЧЕННЫХ процентов и привлечённых денег. НЕВЕРНО.
= Ответ: инвестиционная деятельность`,
          `FA da OLINGAN foiz va dividendlar sarmoyadan daromad.
- Operatsion: FA da olingan foiz bu yerga kiritilmaydi. NOTO'G'RI.
- Investitsion: TO'G'RI.
- Moliyaviy: bu TO'LANGAN foiz va jalb qilingan pul uchun. NOTO'G'RI.
= Javob: investitsion faoliyat`),
        task(17, 2, 'number', `Task 8: What is the net increase in cash and cash equivalents? Give your answer in $000.`, amount(4000, '$4,000,000 (4,000 in $000)'),
          `Add the three sections and check against the cash balances ($000).
# Operating
  $10,300 - tax $2,500 = $7,800
# Investing
  Interest received $300 - purchases $5,200 + proceeds $1,300 = -$3,600
# Financing
  Shares $1,800 - interest paid $2,000 = -$200
  (Interest = 10% x $20,000 debentures; there were no dividends)
# Net change
  $7,800 - $3,600 - $200 = $4,000
# Check
  Cash $1,000 + $4,000 = $5,000, as in the statement of financial position
= Answer: $4,000,000 (4,000 in $000)`,
          `Сложим три раздела и сверим с остатками денег ($000).
# Операционная
  $10,300 - налог $2,500 = $7,800
# Инвестиционная
  Полученные проценты $300 - покупки $5,200 + выручка $1,300 = -$3,600
# Финансовая
  Акции $1,800 - уплаченные проценты $2,000 = -$200
  (Проценты = 10% x облигации $20,000; дивидендов не было)
# Изменение
  $7,800 - $3,600 - $200 = $4,000
# Проверка
  Деньги $1,000 + $4,000 = $5,000, как в балансе
= Ответ: $4,000,000 (4,000 в $000)`,
          `Uch bo'limni qo'shib, pul qoldiqlari bilan tekshiramiz ($000).
# Operatsion
  $10,300 - soliq $2,500 = $7,800
# Investitsion
  Olingan foiz $300 - xaridlar $5,200 + tushum $1,300 = -$3,600
# Moliyaviy
  Aksiyalar $1,800 - to'langan foiz $2,000 = -$200
  (Foiz = 10% x $20,000 obligatsiya; dividend bo'lmagan)
# Sof o'zgarish
  $7,800 - $3,600 - $200 = $4,000
# Tekshiruv
  Pul $1,000 + $4,000 = $5,000, balansdagidek
= Javob: $4,000,000 ($000 da 4,000)`),
      ],
    },
    {
      id: 'b08', kitRef: 8, area: 'cashflows', title: 'Heron Co',
      intro: `Prepare the statement of cash flows of Heron Co for the year ended 30 September 20X9 by the indirect method. Plant with a carrying amount of $1,500,000 was sold for $2,100,000. Property, plant and equipment of $40,000,000 was bought, and land was revalued. Tax on the year's profit is estimated at $3,200,000. Figures are in $000.`,
      table: { head: ['Heron Co ($000)', '20X9', '20X8'], rows: [
        ['Revenue', '80,000', ''], ['Cost of sales', '(60,000)', ''], ['Gross profit', '20,000', ''], ['Selling expenses', '(2,000)', ''], ['Administrative expenses', '(1,200)', ''], ['Profit on disposal of plant', '600', ''], ['Operating profit', '17,400', ''], ['Interest expense', '(2,400)', ''], ['Profit before income taxes', '15,000', ''], ['Income tax expense', '(3,200)', ''], ['Profit for the year', '11,800', ''], ['Revaluation gain (other comprehensive income)', '4,000', ''],
        ['Property, plant and equipment', '90,000', '55,000'], ['Inventories', '26,000', '30,000'], ['Trade receivables', '34,000', '38,000'], ['Cash', '2,500', '-'], ['Total assets', '152,500', '123,000'],
        ['Equity shares', '28,000', '25,000'], ['Share premium', '6,000', '5,000'], ['Revaluation surplus', '4,000', '-'], ['Retained earnings', '56,500', '50,000'], ['10% debentures', '24,000', '-'], ['Bank overdraft', '-', '6,000'], ['Trade payables', '30,000', '33,000'], ['Income tax payable', '3,200', '3,600'], ['Accrued interest', '800', '400'], ['Total equity and liabilities', '152,500', '123,000']] },
      tasks: [
        task(17, 2, 'number', `Task 1: What was the depreciation charge for the year? Give your answer in $000.`, amount(7500, '$7,500,000 (7,500 in $000)'),
          `Depreciation is the missing figure in the property, plant and equipment account ($000).
# The account
  Opening $55,000 + revaluation $4,000 + purchases $40,000 - disposal $1,500 - depreciation ? = closing $90,000
# Depreciation
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Answer: $7,500,000 (7,500 in $000)
! Common trap: forgetting the revaluation, which gives $3,500.`,
          `Амортизация — недостающая цифра в счёте основных средств ($000).
# Счёт
  Начало $55,000 + переоценка $4,000 + покупки $40,000 - выбытие $1,500 - амортизация ? = конец $90,000
# Амортизация
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Ответ: $7,500,000 (7,500 в $000)
! Частая ошибка: забыть переоценку, тогда выйдет $3,500.`,
          `Amortizatsiya asosiy vositalar hisobidagi yetishmayotgan son ($000).
# Hisob
  Boshi $55,000 + qayta baholash $4,000 + xaridlar $40,000 - chiqish $1,500 - amortizatsiya ? = oxiri $90,000
# Amortizatsiya
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Javob: $7,500,000 ($000 da 7,500)
! Ko'p uchraydigan xato: qayta baholashni unutish, $3,500 chiqadi.`),
        task(17, 2, 'matrix', `Task 2: Is each adjustment added to or subtracted from operating profit?`, grid(AS, [['Profit on disposal of plant', 1], ['Decrease in inventories', 0], ['Decrease in trade receivables', 0], ['Decrease in trade payables', 1]]),
          `Ask of each item: non-cash, or does it tie up / release cash?
- Profit on disposal: a non-cash gain. SUBTRACT.
- Decrease in inventories: stock turned into cash. ADD.
- Decrease in trade receivables: customers paid in. ADD.
- Decrease in trade payables: suppliers were paid. SUBTRACT.`,
          `Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Прибыль от выбытия: неденежная прибыль. ВЫЧЕСТЬ.
- Снижение запасов: товар превратился в деньги. ПРИБАВИТЬ.
- Снижение торговых дебиторов: покупатели заплатили. ПРИБАВИТЬ.
- Снижение торговых кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
          `Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Chiqish foydasi: pulsiz daromad. AYIRILADI.
- Zaxira kamayishi: tovar pulga aylangan. QO'SHILADI.
- Savdo debitorlari kamayishi: mijozlar to'lagan. QO'SHILADI.
- Savdo kreditorlari kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`),
        task(17, 2, 'number', `Task 3: What is net cash from operating activities, after income tax paid? Give your answer in $000.`, amount(25700, '$25,700,000 (25,700 in $000)'),
          `Cash from operations first, then take off the tax paid ($000).
# Step 1: Cash generated from operations
  Operating profit $17,400 + depreciation $7,500 - profit on disposal $600 = $24,300
  + inventories down $4,000 + receivables down $4,000 - payables down $3,000 = $29,300
# Step 2: Tax paid
  $3,600 + $3,200 - $3,200 = $3,600
# Step 3: Net cash from operating activities
  $29,300 - $3,600 = $25,700
= Answer: $25,700,000 (25,700 in $000)
! Common trap: stopping at $29,300 without the tax paid.`,
          `Сначала деньги от операций, затем вычтем уплаченный налог ($000).
# Шаг 1: Денежные средства от операций
  Операционная прибыль $17,400 + амортизация $7,500 - прибыль от выбытия $600 = $24,300
  + запасы упали $4,000 + дебиторы упали $4,000 - кредиторы упали $3,000 = $29,300
# Шаг 2: Уплаченный налог
  $3,600 + $3,200 - $3,200 = $3,600
# Шаг 3: Чистые деньги от операционной деятельности
  $29,300 - $3,600 = $25,700
= Ответ: $25,700,000 (25,700 в $000)
! Частая ошибка: остановиться на $29,300 без уплаченного налога.`,
          `Avval operatsiyalardan pul, keyin to'langan soliqni ayiramiz ($000).
# 1-qadam: Operatsiyalardan pul
  Operatsion foyda $17,400 + amortizatsiya $7,500 - chiqish foydasi $600 = $24,300
  + zaxira kamaygan $4,000 + debitorlar kamaygan $4,000 - kreditorlar kamaygan $3,000 = $29,300
# 2-qadam: To'langan soliq
  $3,600 + $3,200 - $3,200 = $3,600
# 3-qadam: Operatsion faoliyatdan sof pul
  $29,300 - $3,600 = $25,700
= Javob: $25,700,000 ($000 da 25,700)
! Ko'p uchraydigan xato: to'langan soliqsiz $29,300 da to'xtash.`),
        task(17, 2, 'single', `Task 4: Which calculation gives the interest paid ($000)?`, pick(['$2,400 - $400 - $800', '$2,400 + $400 + $800', '$2,400 + $400 - $800'], 2),
          `Interest paid = owed at the start + charge - still owed at the end.
- $2,400 - $400 - $800: takes off both accruals. WRONG.
- $2,400 + $400 + $800: adds both accruals. WRONG.
- $2,400 + $400 - $800 = $2,000: RIGHT.
= Answer: $2,400 + $400 - $800`,
          `Уплаченные проценты = долг на начало + расход - долг на конец.
- $2,400 - $400 - $800: вычитает оба начисления. НЕВЕРНО.
- $2,400 + $400 + $800: прибавляет оба начисления. НЕВЕРНО.
- $2,400 + $400 - $800 = $2,000: ВЕРНО.
= Ответ: $2,400 + $400 - $800`,
          `To'langan foiz = boshidagi qarz + xarajat - oxirida qolgan qarz.
- $2,400 - $400 - $800: ikkala hisoblanganni ayiradi. NOTO'G'RI.
- $2,400 + $400 + $800: ikkala hisoblanganni qo'shadi. NOTO'G'RI.
- $2,400 + $400 - $800 = $2,000: TO'G'RI.
= Javob: $2,400 + $400 - $800`),
        task(17, 2, 'single', `Task 5: Which calculation gives the dividend paid?`, pick(['Retained earnings b/f + profit for the year - retained earnings c/f', 'Retained earnings b/f + total comprehensive income - retained earnings c/f', 'Retained earnings b/f - profit for the year + retained earnings c/f'], 0),
          `Dividends come out of retained earnings, and only the PROFIT for the year goes into it.
- B/f + profit for the year - c/f: RIGHT. $50,000 + $11,800 - $56,500 = $5,300.
- B/f + total comprehensive income - c/f: wrongly includes the revaluation gain. WRONG.
- B/f - profit + c/f: signs the wrong way. WRONG.
= Answer: retained earnings b/f + profit for the year - retained earnings c/f`,
          `Дивиденды выплачивают из нераспределённой прибыли, а туда идёт только ПРИБЫЛЬ за год.
- Начало + прибыль за год - конец: ВЕРНО. $50,000 + $11,800 - $56,500 = $5,300.
- Начало + общий совокупный доход - конец: ошибочно включает переоценку. НЕВЕРНО.
- Начало - прибыль + конец: знаки наоборот. НЕВЕРНО.
= Ответ: нераспределённая прибыль на начало + прибыль за год - на конец`,
          `Dividendlar taqsimlanmagan foydadan to'lanadi, unga faqat yil FOYDASI kiradi.
- Boshi + yil foydasi - oxiri: TO'G'RI. $50,000 + $11,800 - $56,500 = $5,300.
- Boshi + jami umumlashgan daromad - oxiri: qayta baholashni xato qo'shadi. NOTO'G'RI.
- Boshi - foyda + oxiri: ishoralar teskari. NOTO'G'RI.
= Javob: boshidagi taqsimlanmagan foyda + yil foydasi - oxiridagi`),
        task(17, 2, 'number', `Task 6: What is net cash from financing activities? Give your answer in $000.`, amount(20700, '$20,700,000 (20,700 in $000)'),
          `List every financing cash flow ($000).
# In
  Debentures issued: $24,000
  Shares: capital up $3,000 + premium up $1,000 = $4,000
# Out
  Interest paid: $2,000
  Dividends paid: $5,300
# Net
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Answer: $20,700,000 (20,700 in $000)
! Common trap: including the overdraft. It is part of cash and cash equivalents, not financing.`,
          `Перечислим все финансовые потоки ($000).
# Приток
  Выпуск облигаций: $24,000
  Акции: капитал +$3,000 + эмиссионный доход +$1,000 = $4,000
# Отток
  Уплаченные проценты: $2,000
  Выплаченные дивиденды: $5,300
# Итог
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Ответ: $20,700,000 (20,700 в $000)
! Частая ошибка: учесть овердрафт. Он часть денежных средств и эквивалентов, а не финансовой деятельности.`,
          `Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# Kirim
  Chiqarilgan obligatsiyalar: $24,000
  Aksiyalar: kapital +$3,000 + emissiya daromadi +$1,000 = $4,000
# Chiqim
  To'langan foiz: $2,000
  To'langan dividendlar: $5,300
# Sof
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Javob: $20,700,000 ($000 da 20,700)
! Ko'p uchraydigan xato: overdraftni qo'shish. U pul va pul ekvivalentlarining qismi, moliyaviy emas.`),
        task(17, 1, 'number', `Task 7: What is net cash used in investing activities? Give your answer in $000 as a positive number.`, amount(37900, '$37,900,000 used (37,900 in $000)'),
          `Investing = what was spent on assets less what came in from selling them ($000).
# Working
  Purchases -$40,000 + disposal proceeds $2,100 = -$37,900
= Answer: $37,900,000 used (37,900 in $000)
! Common trap: using the $1,500 carrying amount instead of the $2,100 actually received.`,
          `Инвестиционная = потрачено на активы минус получено от их продажи ($000).
# Расчёт
  Покупки -$40,000 + выручка от выбытия $2,100 = -$37,900
= Ответ: использовано $37,900,000 (37,900 в $000)
! Частая ошибка: взять балансовую стоимость $1,500 вместо фактически полученных $2,100.`,
          `Investitsion = aktivlarga sarflangan minus ularni sotishdan kelgan ($000).
# Hisob
  Xaridlar -$40,000 + chiqish tushumi $2,100 = -$37,900
= Javob: $37,900,000 ishlatilgan ($000 da 37,900)
! Ko'p uchraydigan xato: haqiqatda olingan $2,100 o'rniga $1,500 balans qiymatini olish.`),
        task(17, 2, 'single', `Task 8: What was the net change in cash and cash equivalents, and the closing position?`, pick(['An increase of $8,500,000, ending with net cash of $2,500,000', 'A decrease of $8,500,000, ending with a net overdraft of $6,000,000', 'An increase of $2,500,000, ending with net cash of $2,500,000'], 0),
          `Add the three sections and check against the opening and closing cash ($000).
# Net change
  Operating $25,700 - investing $37,900 + financing $20,700 = +$8,500
# Check
  Opening overdraft -$6,000 + $8,500 = $2,500 of cash at the year end
= Answer: an increase of $8,500,000, ending with net cash of $2,500,000
! Common trap: "an increase of $2,500,000" ignores the opening overdraft.`,
          `Сложим три раздела и сверим с деньгами на начало и конец ($000).
# Изменение
  Операционная $25,700 - инвестиционная $37,900 + финансовая $20,700 = +$8,500
# Проверка
  Овердрафт на начало -$6,000 + $8,500 = $2,500 денег на конец года
= Ответ: рост на $8,500,000, на конец чистые деньги $2,500,000
! Частая ошибка: «рост на $2,500,000» не учитывает овердрафт на начало.`,
          `Uch bo'limni qo'shib, boshi va oxiridagi pul bilan tekshiramiz ($000).
# Sof o'zgarish
  Operatsion $25,700 - investitsion $37,900 + moliyaviy $20,700 = +$8,500
# Tekshiruv
  Boshidagi overdraft -$6,000 + $8,500 = yil oxirida $2,500 pul
= Javob: $8,500,000 oshish, oxirida $2,500,000 sof pul
! Ko'p uchraydigan xato: «$2,500,000 oshish» boshidagi overdraftni hisobga olmaydi.`),
      ],
    },
    {
      id: 'b09', kitRef: 9, area: 'cashflows', title: 'Ibis Co',
      intro: `Prepare the statement of cash flows of Ibis Co for the year ended 30 April 20X2 by the indirect method. Ibis Co scrapped plant with a carrying amount of $800,000 for no proceeds; the loss is in cost of sales. Depreciation was $9,000,000 and some buildings were revalued. Ibis Co expects a $600,000 tax refund because of its loss. Figures are in $000.`,
      table: { head: ['Ibis Co ($000)', '20X2', '20X1'], rows: [
        ['Revenue', '40,000', ''], ['Cost of sales', '(38,500)', ''], ['Gross profit', '1,500', ''], ['Selling and administrative expenses', '(5,000)', ''], ['Operating loss', '(3,500)', ''], ['Interest expense', '(1,100)', ''], ['Loss before tax', '(4,600)', ''], ['Income tax credit', '600', ''], ['Loss for the year', '(4,000)', ''], ['Revaluation gain (other comprehensive income)', '3,000', ''],
        ['Property, plant and equipment', '120,000', '100,100'], ['Inventories', '30,000', '34,000'], ['Receivables', '45,000', '50,000'], ['Income tax receivable', '600', '-'], ['Cash', '-', '2,000'], ['Total assets', '195,600', '186,100'],
        ['Equity shares of $1', '50,000', '45,000'], ['Share premium', '7,000', '5,000'], ['Revaluation surplus', '26,000', '23,000'], ['Retained earnings', '61,100', '67,100'], ['Long-term bank loan', '20,000', '12,000'], ['Bank overdraft', '3,500', '-'], ['Payables', '28,000', '30,000'], ['Income tax payable', '-', '4,000'], ['Total equity and liabilities', '195,600', '186,100']] },
      tasks: [
        task(17, 2, 'single', `Task 1: How does the operating activities section start?`, pick(['With an operating loss of $3,500,000, shown as negative', 'With a loss before tax of $4,600,000, shown as negative', 'With an operating profit of $3,500,000'], 0),
          `The business made a LOSS, and interest is shown under financing.
- Operating loss of $3,500,000, negative: before interest, with the right sign. RIGHT.
- Loss before tax of $4,600,000: interest is already inside it. WRONG.
- Operating profit of $3,500,000: wrong sign; it was a loss. WRONG.
= Answer: an operating loss of $3,500,000, shown as negative`,
          `Бизнес получил УБЫТОК, а проценты показаны в финансовой деятельности.
- Операционный убыток $3,500,000 со знаком минус: до процентов, с верным знаком. ВЕРНО.
- Убыток до налога $4,600,000: проценты уже внутри. НЕВЕРНО.
- Операционная прибыль $3,500,000: неверный знак, был убыток. НЕВЕРНО.
= Ответ: операционный убыток $3,500,000 со знаком минус`,
          `Biznes ZARAR ko'rgan, foiz esa moliyaviy faoliyatda ko'rsatiladi.
- $3,500,000 operatsion zarar, manfiy: foizdan oldin, to'g'ri ishora bilan. TO'G'RI.
- $4,600,000 soliqdan oldingi zarar: foiz allaqachon ichida. NOTO'G'RI.
- $3,500,000 operatsion foyda: ishora noto'g'ri, zarar bo'lgan. NOTO'G'RI.
= Javob: manfiy ko'rsatilgan $3,500,000 operatsion zarar`),
        task(17, 3, 'matrix', `Task 2: Is each adjustment added to or subtracted from the operating loss?`, grid(AS, [['Depreciation', 0], ['Loss on scrapped plant', 0], ['Decrease in inventories', 0], ['Decrease in receivables', 0], ['Decrease in payables', 1]]),
          `Ask of each item: non-cash, or does it tie up / release cash?
- Depreciation: non-cash. ADD back.
- Loss on scrapped plant: non-cash. ADD back.
- Decrease in inventories: stock turned into cash. ADD.
- Decrease in receivables: customers paid in. ADD.
- Decrease in payables: suppliers were paid. SUBTRACT.`,
          `Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Амортизация: неденежная. ПРИБАВИТЬ.
- Убыток от списания оборудования: неденежный. ПРИБАВИТЬ.
- Снижение запасов: товар превратился в деньги. ПРИБАВИТЬ.
- Снижение дебиторов: покупатели заплатили. ПРИБАВИТЬ.
- Снижение кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
          `Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Amortizatsiya: pulsiz. QO'SHILADI.
- Hisobdan chiqarilgan uskuna zarari: pulsiz. QO'SHILADI.
- Zaxira kamayishi: tovar pulga aylangan. QO'SHILADI.
- Debitorlar kamayishi: mijozlar to'lagan. QO'SHILADI.
- Kreditorlar kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`),
        task(17, 1, 'number', `Task 3: How much income tax was paid in the year? Give your answer in $000.`, amount(4000, '$4,000,000 (4,000 in $000)'),
          `Tax paid = what was owed at the start, paid this year ($000).
# Last year's liability
  $4,000, settled this year, and nothing is owed at the end
# This year's refund
  $600 is due BACK but not yet received: a receivable, not a cash flow yet
= Answer: $4,000,000 (4,000 in $000)
! Common trap: taking off the $600 refund ($3,400). No refund has arrived yet.`,
          `Уплаченный налог = долг на начало, уплаченный в этом году ($000).
# Обязательство прошлого года
  $4,000 уплачено в этом году, на конец ничего не должно
# Возврат этого года
  $600 к возврату, но ещё не получены: дебиторская задолженность, а не денежный поток
= Ответ: $4,000,000 (4,000 в $000)
! Частая ошибка: вычесть возврат $600 ($3,400). Возврат ещё не пришёл.`,
          `To'langan soliq = boshidagi qarz, shu yil to'langan ($000).
# O'tgan yil majburiyati
  $4,000 shu yil to'langan, oxirida qarz yo'q
# Bu yilgi qaytarish
  $600 qaytariladi, lekin hali olinmagan: debitorlik, hali pul oqimi emas
= Javob: $4,000,000 ($000 da 4,000)
! Ko'p uchraydigan xato: $600 qaytarishni ayirish ($3,400). Qaytarish hali kelmagan.`),
        task(17, 2, 'single', `Task 4: Which calculation gives the cash paid for property, plant and equipment ($000)?`, pick(['$120,000 - $100,100 + $9,000', '$120,000 - $100,100 - $3,000 + $9,000 + $800', '$120,000 + $3,000 - $100,100 + $9,000 + $800'], 1),
          `Purchases = closing - opening - revaluation + depreciation + carrying amount removed.
- $120,000 - $100,100 + $9,000: forgets the revaluation and the scrapped plant. WRONG.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: everything included. RIGHT.
- $120,000 + $3,000 - ...: adds the revaluation instead of taking it off. WRONG.
= Answer: $120,000 - $100,100 - $3,000 + $9,000 + $800`,
          `Покупки = конец - начало - переоценка + амортизация + списанная балансовая стоимость.
- $120,000 - $100,100 + $9,000: забывает переоценку и списанное оборудование. НЕВЕРНО.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: всё учтено. ВЕРНО.
- $120,000 + $3,000 - ...: прибавляет переоценку вместо вычета. НЕВЕРНО.
= Ответ: $120,000 - $100,100 - $3,000 + $9,000 + $800`,
          `Xaridlar = oxiri - boshi - qayta baholash + amortizatsiya + chiqarilgan balans qiymati.
- $120,000 - $100,100 + $9,000: qayta baholash va hisobdan chiqarilgan uskunani unutadi. NOTO'G'RI.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: hammasi hisobga olingan. TO'G'RI.
- $120,000 + $3,000 - ...: qayta baholashni ayirish o'rniga qo'shadi. NOTO'G'RI.
= Javob: $120,000 - $100,100 - $3,000 + $9,000 + $800`),
        task(17, 2, 'single', `Task 5: Which calculation gives the proceeds of the share issue ($000)?`, pick(['$50,000 - $45,000', '($50,000 + $7,000) - ($45,000 + $5,000)', '$50,000 + $7,000'], 1),
          `Cash from a share issue = total rise in share capital AND share premium.
- $50,000 - $45,000: forgets the premium. WRONG.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: both parts. RIGHT.
- $50,000 + $7,000: the closing balances, not the change. WRONG.
= Answer: ($50,000 + $7,000) - ($45,000 + $5,000)`,
          `Деньги от выпуска акций = общий рост капитала И эмиссионного дохода.
- $50,000 - $45,000: забывает эмиссионный доход. НЕВЕРНО.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: обе части. ВЕРНО.
- $50,000 + $7,000: остатки на конец, а не изменение. НЕВЕРНО.
= Ответ: ($50,000 + $7,000) - ($45,000 + $5,000)`,
          `Aksiya chiqarishdan pul = kapital VA emissiya daromadining umumiy o'sishi.
- $50,000 - $45,000: emissiya daromadini unutadi. NOTO'G'RI.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: ikkala qism. TO'G'RI.
- $50,000 + $7,000: yakuniy qoldiqlar, o'zgarish emas. NOTO'G'RI.
= Javob: ($50,000 + $7,000) - ($45,000 + $5,000)`),
        task(17, 2, 'number', `Task 6: What is net cash from financing activities? Give your answer in $000.`, amount(11900, '$11,900,000 (11,900 in $000)'),
          `List every financing cash flow ($000).
# Step 1: Dividends paid (from retained earnings)
  $67,100 - loss $4,000 - closing $61,100 = $2,000
# Step 2: In
  New loan: $20,000 - $12,000 = $8,000
  Shares: $7,000
# Step 3: Out
  Interest paid $1,100 + dividends $2,000
# Step 4: Net
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Answer: $11,900,000 (11,900 in $000)
! Common trap: missing the dividend, because the loss makes it easy to assume none was paid.`,
          `Перечислим все финансовые потоки ($000).
# Шаг 1: Выплаченные дивиденды (из нераспределённой прибыли)
  $67,100 - убыток $4,000 - конец $61,100 = $2,000
# Шаг 2: Приток
  Новый заём: $20,000 - $12,000 = $8,000
  Акции: $7,000
# Шаг 3: Отток
  Уплаченные проценты $1,100 + дивиденды $2,000
# Шаг 4: Итог
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Ответ: $11,900,000 (11,900 в $000)
! Частая ошибка: пропустить дивиденд, решив из-за убытка, что его не платили.`,
          `Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# 1-qadam: To'langan dividendlar (taqsimlanmagan foydadan)
  $67,100 - zarar $4,000 - oxiri $61,100 = $2,000
# 2-qadam: Kirim
  Yangi qarz: $20,000 - $12,000 = $8,000
  Aksiyalar: $7,000
# 3-qadam: Chiqim
  To'langan foiz $1,100 + dividendlar $2,000
# 4-qadam: Sof
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Javob: $11,900,000 ($000 da 11,900)
! Ko'p uchraydigan xato: zarar tufayli to'lanmagan deb o'ylab, dividendni tushirib qoldirish.`),
        task(17, 3, 'single', `Task 7: What was the net change in cash and cash equivalents, and the closing position?`, pick(['A decrease of $5,500,000, ending with a net overdraft of $3,500,000', 'An increase of $1,500,000, ending with net cash of $3,500,000', 'A decrease of $3,500,000, ending with a net overdraft of $1,500,000'], 0),
          `Add the three sections and check against the cash balances ($000).
# Operating
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Less tax paid $4,000 = $9,300
# Investing
  -$26,700 (no proceeds from the scrapped plant)
# Financing
  $11,900
# Net change
  $9,300 - $26,700 + $11,900 = -$5,500
# Check
  Opening cash $2,000 - $5,500 = -$3,500: the overdraft at the year end
= Answer: a decrease of $5,500,000, ending with a net overdraft of $3,500,000`,
          `Сложим три раздела и сверим с остатками денег ($000).
# Операционная
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Минус уплаченный налог $4,000 = $9,300
# Инвестиционная
  -$26,700 (за списанное оборудование ничего не получено)
# Финансовая
  $11,900
# Изменение
  $9,300 - $26,700 + $11,900 = -$5,500
# Проверка
  Деньги на начало $2,000 - $5,500 = -$3,500: овердрафт на конец года
= Ответ: уменьшение на $5,500,000, на конец чистый овердрафт $3,500,000`,
          `Uch bo'limni qo'shib, pul qoldiqlari bilan tekshiramiz ($000).
# Operatsion
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Minus to'langan soliq $4,000 = $9,300
# Investitsion
  -$26,700 (hisobdan chiqarilgan uskunadan tushum yo'q)
# Moliyaviy
  $11,900
# Sof o'zgarish
  $9,300 - $26,700 + $11,900 = -$5,500
# Tekshiruv
  Boshidagi pul $2,000 - $5,500 = -$3,500: yil oxiridagi overdraft
= Javob: $5,500,000 kamayish, oxirida $3,500,000 sof overdraft`),
      ],
    },
    {
      id: 'b10', kitRef: 10, area: 'groups', title: 'Jade and Kiwi',
      intro: `Jade bought 80% of the equity shares of Kiwi on 1 April 20X1. After that date Jade sold goods to Kiwi for $90,000, including a mark-up of 25% on cost, and one third of them were still in Kiwi's inventory at 31 December 20X1. Kiwi's income and expenses accrue evenly. Figures are in $000.`,
      table: { head: ['Year ended 31 December 20X1 ($000)', 'Jade', 'Kiwi'], rows: [['Revenue', '1,200', '600'], ['Cost of sales', '(720)', '(320)'], ['Gross profit', '480', '280'], ['General and administrative expenses', '(230)', '(160)'], ['Operating profit', '250', '120'], ['Interest expense', '(60)', '(24)'], ['Profit before income taxes', '190', '96'], ['Income tax expense', '(50)', '(24)'], ['Profit for the year', '140', '72']] },
      tasks: [
        task(20, 2, 'number', `Task 1(a): What is consolidated revenue? Give your answer in $000.`, amount(1560, '$1,560,000 (1,560 in $000)'),
          `Include Kiwi only from 1 April, then cancel the intra-group sales ($000).
# Step 1: Months in the group
  April to December: 9 months
# Step 2: Kiwi's revenue
  $600 x 9/12 = $450
# Step 3: Group revenue
  $1,200 + $450 - intra-group $90 = $1,560
= Answer: $1,560,000 (1,560 in $000)
! Common trap: including Kiwi's whole year ($1,710), or forgetting the $90 ($1,650).`,
          `Включаем Kiwi только с 1 апреля, затем исключаем внутригрупповые продажи ($000).
# Шаг 1: Месяцы в группе
  Апрель–декабрь: 9 месяцев
# Шаг 2: Выручка Kiwi
  $600 x 9/12 = $450
# Шаг 3: Выручка группы
  $1,200 + $450 - внутригрупповые $90 = $1,560
= Ответ: $1,560,000 (1,560 в $000)
! Частая ошибка: включить весь год Kiwi ($1,710) или забыть $90 ($1,650).`,
          `Kiwi ni faqat 1 apreldan kiritib, guruh ichidagi sotuvlarni chiqaramiz ($000).
# 1-qadam: Guruhdagi oylar
  Aprel–dekabr: 9 oy
# 2-qadam: Kiwi tushumi
  $600 x 9/12 = $450
# 3-qadam: Guruh tushumi
  $1,200 + $450 - guruh ichidagi $90 = $1,560
= Javob: $1,560,000 ($000 da 1,560)
! Ko'p uchraydigan xato: Kiwi ning butun yilini kiritish ($1,710) yoki $90 ni unutish ($1,650).`),
        task(20, 2, 'single', `Task 1(b): Which calculation gives consolidated cost of sales ($000)?`, pick(['$720 + ($320 × 9/12) - $90 - $6', '$720 + ($320 × 9/12) - $90 + $6', '$720 + $320 - $90 + $6'], 1),
          `Time-apportion Kiwi, cancel the intra-group purchase, then ADD the unrealised profit ($000).
# PURP
  Profit in the sale: $90 x 25/125 = $18
  One third still held: $18 x 1/3 = $6
# Options
  - $6: takes the PURP off. WRONG.
  + $6 with Kiwi x 9/12: RIGHT. $720 + $240 - $90 + $6 = $876.
  All of Kiwi's $320: ignores the acquisition date. WRONG.
= Answer: $720 + ($320 x 9/12) - $90 + $6`,
          `Распределим Kiwi по времени, исключим внутригрупповую закупку, затем ПРИБАВИМ нереализованную прибыль ($000).
# PURP
  Прибыль в продаже: $90 x 25/125 = $18
  Треть ещё на складе: $18 x 1/3 = $6
# Варианты
  - $6: вычитает PURP. НЕВЕРНО.
  + $6 и Kiwi x 9/12: ВЕРНО. $720 + $240 - $90 + $6 = $876.
  Все $320 Kiwi: не учитывает дату покупки. НЕВЕРНО.
= Ответ: $720 + ($320 x 9/12) - $90 + $6`,
          `Kiwi ni vaqt bo'yicha bo'lib, guruh ichidagi xaridni chiqarib, keyin amalga oshmagan foydani QO'SHAMIZ ($000).
# PURP
  Sotuvdagi foyda: $90 x 25/125 = $18
  Uchdan biri omborda: $18 x 1/3 = $6
# Variantlar
  - $6: PURP ni ayiradi. NOTO'G'RI.
  + $6 va Kiwi x 9/12: TO'G'RI. $720 + $240 - $90 + $6 = $876.
  Kiwi ning butun $320 i: xarid sanasini hisobga olmaydi. NOTO'G'RI.
= Javob: $720 + ($320 x 9/12) - $90 + $6`),
        task(20, 1, 'single', `Task 1(c): Which calculation gives consolidated interest expense ($000)?`, pick(['$60 + $24', '$60 + ($24 × 9/12)', '$60 - ($24 × 9/12)'], 1),
          `Only Kiwi's interest since 1 April belongs to the group.
- $60 + $24: includes Kiwi's interest before the purchase. WRONG.
- $60 + ($24 x 9/12) = $78: RIGHT.
- $60 - (...): interest is an expense to add, not to subtract. WRONG.
= Answer: $60 + ($24 x 9/12)`,
          `В группу входят только проценты Kiwi с 1 апреля.
- $60 + $24: включает проценты Kiwi до покупки. НЕВЕРНО.
- $60 + ($24 x 9/12) = $78: ВЕРНО.
- $60 - (...): проценты — расход, их прибавляют, а не вычитают. НЕВЕРНО.
= Ответ: $60 + ($24 x 9/12)`,
          `Guruhga faqat Kiwi ning 1 apreldan keyingi foizi tegishli.
- $60 + $24: Kiwi ning xariddan oldingi foizini ham kiritadi. NOTO'G'RI.
- $60 + ($24 x 9/12) = $78: TO'G'RI.
- $60 - (...): foiz xarajat, qo'shiladi, ayirilmaydi. NOTO'G'RI.
= Javob: $60 + ($24 x 9/12)`),
        task(20, 2, 'number', `Task 1(d): What is consolidated profit for the year? Give your answer in $000.`, amount(188, '$188,000 (188 in $000)'),
          `Build the group statement of profit or loss line by line ($000).
# Gross profit
  $1,560 - $876 = $684
# Expenses (Kiwi x 9/12)
  $230 + $160 x 9/12 = $230 + $120 = $350
  $684 - $350 = $334
# Interest
  $60 + $18 = $78: $334 - $78 = $256
# Tax (Kiwi x 9/12)
  $50 + $24 x 9/12 = $68: $256 - $68 = $188
= Answer: $188,000 (188 in $000)
! Common trap: using all of Kiwi's expenses or tax; every Kiwi line is cut to 9/12.`,
          `Составим групповой отчёт построчно ($000).
# Валовая прибыль
  $1,560 - $876 = $684
# Расходы (Kiwi x 9/12)
  $230 + $160 x 9/12 = $230 + $120 = $350
  $684 - $350 = $334
# Проценты
  $60 + $18 = $78: $334 - $78 = $256
# Налог (Kiwi x 9/12)
  $50 + $24 x 9/12 = $68: $256 - $68 = $188
= Ответ: $188,000 (188 в $000)
! Частая ошибка: взять все расходы или налог Kiwi; каждую строку Kiwi сокращают до 9/12.`,
          `Guruh hisobotini qatorma-qator tuzamiz ($000).
# Yalpi foyda
  $1,560 - $876 = $684
# Xarajatlar (Kiwi x 9/12)
  $230 + $160 x 9/12 = $230 + $120 = $350
  $684 - $350 = $334
# Foiz
  $60 + $18 = $78: $334 - $78 = $256
# Soliq (Kiwi x 9/12)
  $50 + $24 x 9/12 = $68: $256 - $68 = $188
= Javob: $188,000 ($000 da 188)
! Ko'p uchraydigan xato: Kiwi ning barcha xarajat yoki soliqini olish; Kiwi ning har bir qatori 9/12 ga qisqartiriladi.`),
        task(20, 2, 'single', `Task 1(e): Which calculation gives the profit attributable to the non-controlling interest?`, pick(['NCI % × Kiwi\'s profit for the year × 9/12', '(NCI % × Kiwi\'s profit for the year × 9/12) - NCI share of the unrealised profit', 'NCI % × Kiwi\'s profit before income taxes × 9/12'], 0),
          `NCI share = NCI % x Kiwi's post-acquisition profit AFTER tax. Who sold the goods decides whether PURP comes off.
# Who sold?
  Jade (the parent), so the PURP sits in Jade's profit; the NCI bears none
# Options
  NCI % x profit for the year x 9/12: RIGHT. 20% x $72 x 9/12 = $10.8.
  Less NCI share of PURP: only if KIWI had sold. WRONG.
  Using profit before income taxes: tax must come off first. WRONG.
= Answer: NCI % x Kiwi's profit for the year x 9/12`,
          `Доля NCI = % NCI x прибыль Kiwi после покупки ПОСЛЕ налога. Кто продавал, решает, вычитать ли PURP.
# Кто продавал?
  Jade (материнская), PURP в прибыли Jade; NCI её не несёт
# Варианты
  % NCI x прибыль за год x 9/12: ВЕРНО. 20% x $72 x 9/12 = $10.8.
  Минус доля NCI в PURP: только если бы продавала KIWI. НЕВЕРНО.
  Прибыль до налога на прибыль: сначала нужно вычесть налог. НЕВЕРНО.
= Ответ: % NCI x прибыль Kiwi за год x 9/12`,
          `NCI ulushi = NCI % x Kiwi ning xariddan keyingi soliqDAN KEYINGI foydasi. Kim sotgani PURP ayirilishini hal qiladi.
# Kim sotgan?
  Jade (bosh kompaniya), PURP Jade foydasida; NCI uni ko'tarmaydi
# Variantlar
  NCI % x yil foydasi x 9/12: TO'G'RI. 20% x $72 x 9/12 = $10.8.
  Minus NCI ning PURP ulushi: faqat KIWI sotganda. NOTO'G'RI.
  Foyda solig'igacha foyda: avval soliq ayirilishi kerak. NOTO'G'RI.
= Javob: NCI % x Kiwi yil foydasi x 9/12`),
        task(19, 3, 'matrix', `Task 2: State whether each statement is true or false.`, grid(TF, [['Buying a subsidiary always gives rise to a non-controlling interest', 1], ['A subsidiary can be accounted for using the equity method', 1], ['The subsidiary\'s share capital and share premium are not included in the consolidated statement of financial position', 0]]),
          `Check each statement.
- Buying a subsidiary ALWAYS creates an NCI: FALSE. A 100% subsidiary has no NCI.
- A subsidiary can use the equity method: FALSE. Subsidiaries are consolidated line by line; the equity method is for associates.
- The subsidiary's share capital and premium are left out of the group statement: TRUE. They are cancelled against the parent's investment.`,
          `Проверим каждое утверждение.
- Покупка дочерней ВСЕГДА создаёт NCI: НЕВЕРНО. У дочерней на 100% NCI нет.
- Дочернюю можно учитывать методом долевого участия: НЕВЕРНО. Дочерние консолидируют построчно; метод долевого участия — для ассоциированных.
- Капитал и эмиссионный доход дочерней не входят в групповой отчёт: ВЕРНО. Они исключаются против вложения материнской.`,
          `Har bir fikrni tekshiramiz.
- Sho'ba sotib olish HAR DOIM NCI yaratadi: NOTO'G'RI. 100% li sho'bada NCI yo'q.
- Sho'baga ulushli qatnashish usulini qo'llash mumkin: NOTO'G'RI. Sho'balar qatorma-qator konsolidatsiya qilinadi; usul assotsiatsiyalanganlar uchun.
- Sho'ba kapitali va emissiya daromadi guruh hisobotiga kirmaydi: TO'G'RI. Ular bosh kompaniya sarmoyasi bilan chiqariladi.`),
        task(18, 1, 'number', `Task 3(a): Using Jade's own figures, what is its operating profit margin, to one decimal place?`, amount(20.8, '20.8%', { unit: '%' }),
          `Operating profit margin = operating profit / revenue x 100.
# Jade
  $250 / $1,200 x 100 = 20.8%
= Answer: 20.8%`,
          `Операционная маржа = операционная прибыль / выручка x 100.
# Jade
  $250 / $1,200 x 100 = 20.8%
= Ответ: 20.8%`,
          `Operatsion marja = operatsion foyda / tushum x 100.
# Jade
  $250 / $1,200 x 100 = 20.8%
= Javob: 20.8%`),
        task(18, 2, 'single', `Task 3(b): Another company, Lark, has a higher gross profit margin than Jade but a lower operating profit margin. What can you conclude?`, pick(['Jade is relatively better at controlling its selling and administrative expenses', 'Lark is relatively better at controlling its selling and administrative expenses', 'No conclusion is possible about these expenses'], 0),
          `Gross margin counts only cost of sales; operating margin also counts selling and admin costs.
# What we know
  Lark keeps MORE per $1 after cost of sales, but LESS after all running costs
# So
  Lark's selling and admin costs must take a bigger share of its sales than Jade's
= Answer: Jade is relatively better at controlling its selling and administrative expenses`,
          `Валовая маржа учитывает только себестоимость; операционная — ещё коммерческие и административные расходы.
# Что известно
  Lark оставляет БОЛЬШЕ с $1 после себестоимости, но МЕНЬШЕ после всех текущих расходов
# Значит
  Коммерческие и административные расходы Lark занимают большую долю продаж, чем у Jade
= Ответ: Jade лучше контролирует коммерческие и административные расходы`,
          `Yalpi marja faqat tannarxni hisobga oladi; operatsion marja sotish va ma'muriy xarajatlarni ham.
# Nima ma'lum
  Lark tannarxdan keyin har $1 dan KO'PROQ, barcha joriy xarajatlardan keyin esa KAMROQ saqlaydi
# Demak
  Lark ning sotish va ma'muriy xarajatlari sotuvning Jade nikidan katta qismini oladi
= Javob: Jade sotish va ma'muriy xarajatlarini nisbatan yaxshiroq nazorat qiladi`),
      ],
    },
    {
      id: 'b11', kitRef: 11, area: 'groups', title: 'Lotus and Maple',
      intro: `On 1 January 20X4 Lotus bought 80% of Maple's 50,000 equity shares of $1. It paid $120,000 in cash and issued 3 Lotus shares of $1 for every 4 Maple shares acquired, when a Lotus share was worth $3.00. The share issue has not been recorded. At acquisition Maple had retained earnings of $90,000 and a revaluation surplus of $15,000, and its land was worth $50,000 more than its carrying amount. The NCI was worth $52,000. At 31 December 20X4 Maple's retained earnings were $130,000 and its revaluation surplus was unchanged.`,
      table: { head: ['Extracts at 31 December 20X4', 'Lotus $', 'Maple $'], rows: [['Property, plant and equipment', '240,000', '160,000'], ['Investment in Maple (cash paid)', '120,000', '-'], ['Inventories', '70,000', '45,000'], ['Trade receivables', '55,000', '38,000'], ['Cash', '20,000', '-'], ['Bank overdraft', '-', '15,000'], ['Trade payables', '45,000', '40,000']] },
      tasks: [
        task(19, 1, 'number', `Task 1(a): What is the fair value of the consideration?`, amount(210000, '$210,000'),
          `Consideration = cash + Lotus shares issued, at fair value.
# Step 1: Maple shares acquired
  50,000 x 80% = 40,000
# Step 2: Lotus shares issued (3 for 4)
  40,000 x 3/4 = 30,000 shares x $3.00 = $90,000
# Step 3: Total
  Cash $120,000 + shares $90,000 = $210,000
= Answer: $210,000
! Common trap: valuing the new shares at $1 nominal ($150,000 in total).`,
          `Возмещение = деньги + выпущенные акции Lotus по справедливой стоимости.
# Шаг 1: Куплено акций Maple
  50,000 x 80% = 40,000
# Шаг 2: Выпущено акций Lotus (3 за 4)
  40,000 x 3/4 = 30,000 акций x $3.00 = $90,000
# Шаг 3: Итого
  Деньги $120,000 + акции $90,000 = $210,000
= Ответ: $210,000
! Частая ошибка: оценить новые акции по номиналу $1 (всего $150,000).`,
          `To'lov = pul + adolatli qiymatdagi chiqarilgan Lotus aksiyalari.
# 1-qadam: Olingan Maple aksiyalari
  50,000 x 80% = 40,000
# 2-qadam: Chiqarilgan Lotus aksiyalari (4 taga 3)
  40,000 x 3/4 = 30,000 aksiya x $3.00 = $90,000
# 3-qadam: Jami
  Pul $120,000 + aksiyalar $90,000 = $210,000
= Javob: $210,000
! Ko'p uchraydigan xato: yangi aksiyalarni $1 nominalda baholash (jami $150,000).`),
        task(19, 2, 'matrix', `Task 1(b): Which accounts does Lotus debit or credit to record the share issue?`, grid(DCN, [['Investment in Maple', 0], ['Share capital', 1], ['Share premium', 1], ['Retained earnings', 2]]),
          `Issuing shares above nominal value: capital at nominal, the rest to share premium.
- Investment in Maple: DEBIT $90,000.
- Share capital: 30,000 x $1. CREDIT $30,000.
- Share premium: $90,000 - $30,000. CREDIT $60,000.
- Retained earnings: no profit or loss arises. NO ENTRY.`,
          `Выпуск акций выше номинала: капитал по номиналу, остальное в эмиссионный доход.
- Вложение в Maple: ДЕБЕТ $90,000.
- Акционерный капитал: 30,000 x $1. КРЕДИТ $30,000.
- Эмиссионный доход: $90,000 - $30,000. КРЕДИТ $60,000.
- Нераспределённая прибыль: прибыли или убытка нет. НЕТ ЗАПИСИ.`,
          `Nominaldan yuqori aksiya chiqarish: kapital nominalda, qolgani emissiya daromadiga.
- Maple ga sarmoya: DEBET $90,000.
- Ustav kapitali: 30,000 x $1. KREDIT $30,000.
- Emissiya daromadi: $90,000 - $30,000. KREDIT $60,000.
- Taqsimlanmagan foyda: foyda yoki zarar yo'q. YOZUV YO'Q.`),
        task(19, 1, 'single', `Task 1(c): Which formula gives goodwill?`, pick(['Consideration + fair value of NCI + fair value of net assets', 'Consideration - fair value of NCI + fair value of net assets', 'Consideration + fair value of NCI - fair value of net assets'], 2),
          `Goodwill = what was paid + NCI value - what was bought.
- Consideration + NCI + net assets: adds the net assets. WRONG.
- Consideration - NCI + net assets: signs the wrong way. WRONG.
- Consideration + NCI - net assets: RIGHT.
# Check
  $210,000 + $52,000 - ($50,000 + $90,000 + $15,000 + $50,000) = $57,000
= Answer: consideration + fair value of NCI - fair value of net assets`,
          `Гудвил = заплачено + стоимость NCI - то, что куплено.
- Возмещение + NCI + чистые активы: прибавляет чистые активы. НЕВЕРНО.
- Возмещение - NCI + чистые активы: знаки наоборот. НЕВЕРНО.
- Возмещение + NCI - чистые активы: ВЕРНО.
# Проверка
  $210,000 + $52,000 - ($50,000 + $90,000 + $15,000 + $50,000) = $57,000
= Ответ: возмещение + справедливая стоимость NCI - справедливая стоимость чистых активов`,
          `Gudvil = to'langan + NCI qiymati - sotib olingan narsa.
- To'lov + NCI + sof aktivlar: sof aktivlarni qo'shadi. NOTO'G'RI.
- To'lov - NCI + sof aktivlar: ishoralar teskari. NOTO'G'RI.
- To'lov + NCI - sof aktivlar: TO'G'RI.
# Tekshiruv
  $210,000 + $52,000 - ($50,000 + $90,000 + $15,000 + $50,000) = $57,000
= Javob: to'lov + NCI adolatli qiymati - sof aktivlar adolatli qiymati`),
        task(19, 2, 'number', `Task 2(a): During the year Lotus sold goods to Maple for $36,000 at a gross margin of 25%, and half were still in Maple's inventory at the year end. Maple also owed Lotus $6,000. What is consolidated property, plant and equipment?`, amount(450000, '$450,000'),
          `Add both in full, plus the fair value uplift on Maple's land.
# Working
  Lotus $240,000 + Maple $160,000 + land uplift $50,000 = $450,000
= Answer: $450,000
! Common trap: leaving out the uplift ($400,000), or taking only 80% of Maple's assets.`,
          `Складываем обе полностью плюс дооценка земли Maple.
# Расчёт
  Lotus $240,000 + Maple $160,000 + дооценка земли $50,000 = $450,000
= Ответ: $450,000
! Частая ошибка: забыть дооценку ($400,000) или взять только 80% активов Maple.`,
          `Ikkalasini to'liq qo'shib, Maple yerining adolatli qiymat oshishini qo'shamiz.
# Hisob
  Lotus $240,000 + Maple $160,000 + yer oshishi $50,000 = $450,000
= Javob: $450,000
! Ko'p uchraydigan xato: oshishni unutish ($400,000) yoki Maple aktivlarining faqat 80% ini olish.`),
        task(19, 2, 'number', `Task 2(b): Using the same information, what are consolidated inventories?`, amount(110500, '$110,500'),
          `Add both, then take off the unrealised profit in goods still held.
# PURP (margin 25%, so profit is 25% of the price)
  $36,000 x 25% = $9,000 profit; half still held: $4,500
# Inventories
  $70,000 + $45,000 - $4,500 = $110,500
= Answer: $110,500
! Common trap: using 25/125 (a mark-up) instead of 25% of the price (a margin).`,
          `Складываем обе и вычитаем нереализованную прибыль в непроданном товаре.
# PURP (маржа 25%, прибыль — 25% от цены)
  $36,000 x 25% = $9,000 прибыли; половина на складе: $4,500
# Запасы
  $70,000 + $45,000 - $4,500 = $110,500
= Ответ: $110,500
! Частая ошибка: взять 25/125 (наценка) вместо 25% от цены (маржа).`,
          `Ikkalasini qo'shib, saqlanayotgan tovardagi amalga oshmagan foydani ayiramiz.
# PURP (marja 25%, foyda narxning 25% i)
  $36,000 x 25% = $9,000 foyda; yarmi omborda: $4,500
# Zaxiralar
  $70,000 + $45,000 - $4,500 = $110,500
= Javob: $110,500
! Ko'p uchraydigan xato: narxning 25% i (marja) o'rniga 25/125 (ustama) ni olish.`),
        task(19, 1, 'number', `Task 2(c): What are consolidated trade receivables?`, amount(87000, '$87,000'),
          `Money owed inside the group must go.
# Working
  $55,000 + $38,000 - intra-group $6,000 = $87,000
= Answer: $87,000`,
          `Долг внутри группы исключается.
# Расчёт
  $55,000 + $38,000 - внутригрупповой $6,000 = $87,000
= Ответ: $87,000`,
          `Guruh ichidagi qarz chiqariladi.
# Hisob
  $55,000 + $38,000 - guruh ichidagi $6,000 = $87,000
= Javob: $87,000`),
        task(19, 1, 'number', `Task 2(d): What is consolidated cash, shown as an asset?`, amount(20000, '$20,000'),
          `Cash is an asset; an overdraft is a separate liability.
# Lotus
  Cash $20,000
# Maple
  No cash; its $15,000 overdraft is shown under current liabilities, not netted off
= Answer: $20,000
! Common trap: $5,000 nets the overdraft against Lotus's cash.`,
          `Деньги — актив; овердрафт — отдельное обязательство.
# Lotus
  Деньги $20,000
# Maple
  Денег нет; её овердрафт $15,000 показывают в краткосрочных обязательствах, не взаимозачитывая
= Ответ: $20,000
! Частая ошибка: $5,000 зачитывает овердрафт против денег Lotus.`,
          `Pul aktiv; overdraft alohida majburiyat.
# Lotus
  Pul $20,000
# Maple
  Pul yo'q; uning $15,000 overdrafti qisqa muddatli majburiyatlarda ko'rsatiladi, ayirilmaydi
= Javob: $20,000
! Ko'p uchraydigan xato: $5,000 overdraftni Lotus puliga qarshi ayiradi.`),
        task(19, 2, 'single', `Task 3: Which calculation gives the non-controlling interest at 31 December 20X4?`, pick(['(20% × $52,000) + 20% × ($130,000 - $90,000)', '$52,000 + 20% × ($130,000 + $90,000)', '$52,000 + 20% × ($130,000 - $90,000)'], 2),
          `NCI = NCI fair value at acquisition + NCI % of the post-acquisition rise.
- 20% x $52,000 + ...: $52,000 is already the NCI's own value; do not take 20% of it. WRONG.
- $52,000 + 20% x ($130,000 + $90,000): adds instead of finding the change. WRONG.
- $52,000 + 20% x ($130,000 - $90,000) = $60,000: RIGHT.
= Answer: $52,000 + 20% x ($130,000 - $90,000)`,
          `NCI = справедливая стоимость NCI при покупке + % NCI от роста после покупки.
- 20% x $52,000 + ...: $52,000 — уже стоимость самой NCI, 20% от неё не берут. НЕВЕРНО.
- $52,000 + 20% x ($130,000 + $90,000): складывает вместо поиска изменения. НЕВЕРНО.
- $52,000 + 20% x ($130,000 - $90,000) = $60,000: ВЕРНО.
= Ответ: $52,000 + 20% x ($130,000 - $90,000)`,
          `NCI = xarid paytidagi NCI adolatli qiymati + xariddan keyingi o'sishdan NCI %.
- 20% x $52,000 + ...: $52,000 allaqachon NCI ning o'z qiymati, uning 20% i olinmaydi. NOTO'G'RI.
- $52,000 + 20% x ($130,000 + $90,000): o'zgarish o'rniga qo'shadi. NOTO'G'RI.
- $52,000 + 20% x ($130,000 - $90,000) = $60,000: TO'G'RI.
= Javob: $52,000 + 20% x ($130,000 - $90,000)`),
        task(18, 1, 'number', `Task 4(a): Using Maple's own figures, what is its quick (acid test) ratio, to one decimal place?`, amount(0.7, '0.7:1', { unit: ':1' }),
          `Quick ratio = (current assets - inventory) / current liabilities.
# Quick assets
  Receivables $38,000 (inventory left out; Maple has no cash)
# Current liabilities
  Overdraft $15,000 + payables $40,000 = $55,000
# Ratio
  $38,000 / $55,000 = 0.69, so 0.7:1
= Answer: 0.7:1
! Common trap: leaving out the overdraft ($38,000 / $40,000 = 0.95:1).`,
          `Быстрая ликвидность = (оборотные активы - запасы) / краткосрочные обязательства.
# Быстрые активы
  Дебиторы $38,000 (запасы исключены; денег у Maple нет)
# Краткосрочные обязательства
  Овердрафт $15,000 + кредиторы $40,000 = $55,000
# Коэффициент
  $38,000 / $55,000 = 0.69, то есть 0.7:1
= Ответ: 0.7:1
! Частая ошибка: не учесть овердрафт ($38,000 / $40,000 = 0.95:1).`,
          `Tezkor likvidlik = (aylanma aktivlar - zaxira) / qisqa muddatli majburiyatlar.
# Tezkor aktivlar
  Debitorlar $38,000 (zaxira chiqariladi; Maple da pul yo'q)
# Qisqa muddatli majburiyatlar
  Overdraft $15,000 + kreditorlar $40,000 = $55,000
# Koeffitsient
  $38,000 / $55,000 = 0.69, ya'ni 0.7:1
= Javob: 0.7:1
! Ko'p uchraydigan xato: overdraftni hisobga olmaslik ($38,000 / $40,000 = 0.95:1).`),
        task(18, 1, 'single', `Task 4(b): The quick ratio is a measure of:`, pick(['Gearing', 'Liquidity', 'Profitability'], 1),
          `The quick ratio asks: can liquid assets pay the short-term bills?
- Gearing: about long-term debt and risk. WRONG.
- Liquidity: RIGHT.
- Profitability: about profit. WRONG.
= Answer: liquidity`,
          `Быстрая ликвидность спрашивает: покроют ли ликвидные активы краткосрочные счета?
- Финансовый рычаг: о долгосрочном долге и риске. НЕВЕРНО.
- Ликвидность: ВЕРНО.
- Рентабельность: о прибыли. НЕВЕРНО.
= Ответ: ликвидности`,
          `Tezkor likvidlik so'raydi: likvid aktivlar qisqa muddatli hisoblarni to'lay oladimi?
- Leveraj: uzoq muddatli qarz va xavf haqida. NOTO'G'RI.
- Likvidlik: TO'G'RI.
- Rentabellik: foyda haqida. NOTO'G'RI.
= Javob: likvidlik`),
        task(18, 1, 'single', `Task 4(c): A quick ratio of 0.7:1 means that quick assets are:`, pick(['Higher than current liabilities', 'Lower than current liabilities', 'Equal to current liabilities'], 1),
          `Read the ratio: 0.7:1 means $0.70 of quick assets for every $1 of current liabilities.
- Higher than current liabilities: that would need more than 1:1. WRONG.
- Lower than current liabilities: 0.7 is less than 1. RIGHT.
- Equal: that would be exactly 1:1. WRONG.
= Answer: lower than current liabilities`,
          `Прочтём коэффициент: 0.7:1 — $0.70 быстрых активов на каждый $1 краткосрочных обязательств.
- Больше обязательств: нужно было бы больше 1:1. НЕВЕРНО.
- Меньше обязательств: 0.7 меньше 1. ВЕРНО.
- Равны: было бы ровно 1:1. НЕВЕРНО.
= Ответ: меньше краткосрочных обязательств`,
          `Koeffitsientni o'qiymiz: 0.7:1 — har $1 qisqa muddatli majburiyatga $0.70 tezkor aktiv.
- Majburiyatlardan ko'p: 1:1 dan ko'p bo'lishi kerak edi. NOTO'G'RI.
- Majburiyatlardan kam: 0.7 1 dan kichik. TO'G'RI.
- Teng: aynan 1:1 bo'lardi. NOTO'G'RI.
= Javob: qisqa muddatli majburiyatlardan kam`),
      ],
    },
    {
      id: 'b12', kitRef: 12, area: 'groups', title: 'Nectar and Olive',
      intro: `On 1 October 20X5 Nectar bought 80% of Olive for $9,600,000, and also bought $2,000,000 of Olive's 6% loan notes at par. At acquisition Olive's land was worth $1,200,000 more than its cost, and the NCI was worth $2,300,000. Olive made a profit of $360,000 in the year to 31 December 20X5, earned evenly. After acquisition Olive sold goods to Nectar for $600,000 at a gross margin of 20%. A quarter of them were still in Nectar's inventory at the year end, and Nectar still owed Olive $300,000. Figures are in $000.`,
      table: { head: ['At 31 December 20X5 ($000)', 'Nectar', 'Olive'], rows: [['Non-current assets', '28,000', '12,500'], ['Investments in Olive (shares and loan notes)', '11,600', '-'], ['Current assets', '6,000', '3,800'], ['Total assets', '45,600', '16,300'], ['Share capital', '10,000', '5,000'], ['Retained earnings', '14,000', '1,800'], ['Non-current liabilities', '18,000', '-'], ['6% loan notes', '-', '8,000'], ['Current liabilities', '3,600', '1,500'], ['Total equity and liabilities', '45,600', '16,300']] },
      tasks: [
        task(19, 2, 'single', `Task 1(a): Which calculation gives Olive's retained earnings at acquisition ($000)?`, pick(['$1,800 - (3/12 × $360)', '$1,800 - (9/12 × $360)', '$1,800 - $360'], 0),
          `Year-end reserves are given; take OFF the profit earned after the purchase ($000).
# Months after 1 October
  October to December: 3 months
# Retained earnings at acquisition
  $1,800 - 3/12 x $360 = $1,800 - $90 = $1,710
- 9/12: that is the PRE-acquisition part. WRONG.
- The whole $360: would remove profit earned before the purchase too. WRONG.
= Answer: $1,800 - (3/12 x $360)`,
          `Даны резервы на конец года; ВЫЧИТАЕМ прибыль после покупки ($000).
# Месяцы после 1 октября
  Октябрь–декабрь: 3 месяца
# Нераспределённая прибыль при покупке
  $1,800 - 3/12 x $360 = $1,800 - $90 = $1,710
- 9/12: это часть ДО покупки. НЕВЕРНО.
- Все $360: убрали бы и прибыль до покупки. НЕВЕРНО.
= Ответ: $1,800 - (3/12 x $360)`,
          `Yil oxiridagi rezervlar berilgan; xariddan keyingi foydani AYIRAMIZ ($000).
# 1 oktyabrdan keyingi oylar
  Oktyabr–dekabr: 3 oy
# Xarid paytidagi taqsimlanmagan foyda
  $1,800 - 3/12 x $360 = $1,800 - $90 = $1,710
- 9/12: bu xariddan OLDINGI qism. NOTO'G'RI.
- Butun $360: xariddan oldingi foydani ham olib tashlaydi. NOTO'G'RI.
= Javob: $1,800 - (3/12 x $360)`),
        task(19, 2, 'number', `Task 1(b): What is goodwill on acquisition? Give your answer in $000.`, amount(3990, '$3,990,000 (3,990 in $000)'),
          `Goodwill = consideration + NCI - net assets at fair value ($000).
# Step 1: Net assets at acquisition
  Shares $5,000 + reserves $1,710 + land uplift $1,200 = $7,910
# Step 2: Goodwill
  $9,600 + $2,300 - $7,910 = $3,990
  (The $2,000 loan notes are a loan, not part of the price of the shares)
= Answer: $3,990,000 (3,990 in $000)
! Common trap: using the $11,600 total investment, which includes the loan notes.`,
          `Гудвил = возмещение + NCI - чистые активы по справедливой стоимости ($000).
# Шаг 1: Чистые активы при покупке
  Акции $5,000 + резервы $1,710 + дооценка земли $1,200 = $7,910
# Шаг 2: Гудвил
  $9,600 + $2,300 - $7,910 = $3,990
  (Облигации на $2,000 — заём, а не часть цены акций)
= Ответ: $3,990,000 (3,990 в $000)
! Частая ошибка: взять всё вложение $11,600, включая облигации.`,
          `Gudvil = to'lov + NCI - adolatli qiymatdagi sof aktivlar ($000).
# 1-qadam: Xarid paytidagi sof aktivlar
  Aksiyalar $5,000 + rezervlar $1,710 + yer oshishi $1,200 = $7,910
# 2-qadam: Gudvil
  $9,600 + $2,300 - $7,910 = $3,990
  ($2,000 obligatsiya — qarz, aksiyalar narxining qismi emas)
= Javob: $3,990,000 ($000 da 3,990)
! Ko'p uchraydigan xato: obligatsiyalar bilan birga butun $11,600 sarmoyani olish.`),
        task(19, 2, 'number', `Task 2(a): What are the 6% loan notes in the consolidated statement of financial position? Give your answer in $000.`, amount(6000, '$6,000,000 (6,000 in $000)'),
          `The group cannot owe money to itself, so the loan notes Nectar holds cancel ($000).
# Working
  Olive's loan notes $8,000 - held by Nectar $2,000 = $6,000 owed to outsiders
= Answer: $6,000,000 (6,000 in $000)
! Common trap: showing all $8,000.`,
          `Группа не может быть должна себе, поэтому облигации у Nectar исключаются ($000).
# Расчёт
  Облигации Olive $8,000 - у Nectar $2,000 = $6,000 внешним держателям
= Ответ: $6,000,000 (6,000 в $000)
! Частая ошибка: показать все $8,000.`,
          `Guruh o'ziga qarzdor bo'la olmaydi, Nectar dagi obligatsiyalar chiqariladi ($000).
# Hisob
  Olive obligatsiyalari $8,000 - Nectar dagi $2,000 = tashqi egalarga $6,000
= Javob: $6,000,000 ($000 da 6,000)
! Ko'p uchraydigan xato: butun $8,000 ni ko'rsatish.`),
        task(19, 2, 'number', `Task 2(b): What are consolidated retained earnings? Give your answer in $000.`, amount(14048, '$14,048,000 (14,048 in $000)'),
          `Group retained earnings = Nectar's own + 80% of Olive's post-acquisition profit after PURP ($000).
# Step 1: PURP (margin 20%; Olive sold, so it comes off Olive)
  $600 x 20% x 1/4 = $30
# Step 2: Olive's post-acquisition profit
  $90 - $30 = $60
# Step 3: Group
  $14,000 + 80% x $60 = $14,048
= Answer: $14,048,000 (14,048 in $000)
! Common trap: taking the PURP off Nectar in full; Olive was the seller, so the NCI shares it.`,
          `Нераспределённая прибыль группы = собственная Nectar + 80% прибыли Olive после покупки за вычетом PURP ($000).
# Шаг 1: PURP (маржа 20%; продавала Olive, вычитаем у Olive)
  $600 x 20% x 1/4 = $30
# Шаг 2: Прибыль Olive после покупки
  $90 - $30 = $60
# Шаг 3: Группа
  $14,000 + 80% x $60 = $14,048
= Ответ: $14,048,000 (14,048 в $000)
! Частая ошибка: вычесть PURP целиком у Nectar; продавала Olive, поэтому NCI делит её.`,
          `Guruh taqsimlanmagan foydasi = Nectar ning o'zi + Olive ning PURP dan keyingi xariddan keyingi foydasining 80% i ($000).
# 1-qadam: PURP (marja 20%; Olive sotgan, Olive dan ayiriladi)
  $600 x 20% x 1/4 = $30
# 2-qadam: Olive ning xariddan keyingi foydasi
  $90 - $30 = $60
# 3-qadam: Guruh
  $14,000 + 80% x $60 = $14,048
= Javob: $14,048,000 ($000 da 14,048)
! Ko'p uchraydigan xato: PURP ni to'liq Nectar dan ayirish; Olive sotgan, NCI ham baham ko'radi.`),
        task(19, 2, 'number', `Task 3(a): What are consolidated non-current assets, excluding goodwill? Give your answer in $000.`, amount(41700, '$41,700,000 (41,700 in $000)'),
          `Add both in full plus the land uplift; the investments disappear ($000).
# Working
  $28,000 + $12,500 + land uplift $1,200 = $41,700
  (The share investment becomes goodwill; the loan notes cancel)
= Answer: $41,700,000 (41,700 in $000)
! Common trap: leaving the $11,600 of investments in.`,
          `Складываем обе полностью плюс дооценка земли; вложения исчезают ($000).
# Расчёт
  $28,000 + $12,500 + дооценка земли $1,200 = $41,700
  (Вложение в акции становится гудвилом; облигации исключаются)
= Ответ: $41,700,000 (41,700 в $000)
! Частая ошибка: оставить вложения $11,600.`,
          `Ikkalasini to'liq qo'shib, yer oshishini qo'shamiz; sarmoyalar yo'qoladi ($000).
# Hisob
  $28,000 + $12,500 + yer oshishi $1,200 = $41,700
  (Aksiyalarga sarmoya gudvilga aylanadi; obligatsiyalar chiqariladi)
= Javob: $41,700,000 ($000 da 41,700)
! Ko'p uchraydigan xato: $11,600 sarmoyalarni qoldirish.`),
        task(19, 2, 'number', `Task 3(b): What are consolidated current assets? Give your answer in $000.`, amount(9470, '$9,470,000 (9,470 in $000)'),
          `Add both, then remove the PURP and the money owed inside the group ($000).
# Working
  $6,000 + $3,800 - PURP $30 - Olive's receivable from Nectar $300 = $9,470
= Answer: $9,470,000 (9,470 in $000)`,
          `Складываем обе, затем убираем PURP и долг внутри группы ($000).
# Расчёт
  $6,000 + $3,800 - PURP $30 - долг Nectar перед Olive $300 = $9,470
= Ответ: $9,470,000 (9,470 в $000)`,
          `Ikkalasini qo'shib, PURP va guruh ichidagi qarzni olib tashlaymiz ($000).
# Hisob
  $6,000 + $3,800 - PURP $30 - Nectar ning Olive ga qarzi $300 = $9,470
= Javob: $9,470,000 ($000 da 9,470)`),
        task(19, 1, 'number', `Task 3(c): What are consolidated current liabilities? Give your answer in $000.`, amount(4800, '$4,800,000 (4,800 in $000)'),
          `The same $300 owed inside the group comes off liabilities too ($000).
# Working
  $3,600 + $1,500 - $300 = $4,800
= Answer: $4,800,000 (4,800 in $000)`,
          `Те же $300 внутригруппового долга вычитаем и из обязательств ($000).
# Расчёт
  $3,600 + $1,500 - $300 = $4,800
= Ответ: $4,800,000 (4,800 в $000)`,
          `Guruh ichidagi o'sha $300 qarz majburiyatlardan ham ayiriladi ($000).
# Hisob
  $3,600 + $1,500 - $300 = $4,800
= Javob: $4,800,000 ($000 da 4,800)`),
        task(19, 2, 'number', `Task 3(d): What is the non-controlling interest? Give your answer in $000.`, amount(2312, '$2,312,000 (2,312 in $000)'),
          `NCI = fair value at acquisition + 20% of Olive's post-acquisition profit after PURP ($000).
# Working
  $2,300 + 20% x $60 = $2,300 + $12 = $2,312
= Answer: $2,312,000 (2,312 in $000)
! Common trap: using $90 before the PURP ($2,318).`,
          `NCI = справедливая стоимость при покупке + 20% прибыли Olive после покупки за вычетом PURP ($000).
# Расчёт
  $2,300 + 20% x $60 = $2,300 + $12 = $2,312
= Ответ: $2,312,000 (2,312 в $000)
! Частая ошибка: взять $90 до вычета PURP ($2,318).`,
          `NCI = xarid paytidagi adolatli qiymat + Olive ning PURP dan keyingi xariddan keyingi foydasining 20% i ($000).
# Hisob
  $2,300 + 20% x $60 = $2,300 + $12 = $2,312
= Javob: $2,312,000 ($000 da 2,312)
! Ko'p uchraydigan xato: PURP dan oldingi $90 ni olish ($2,318).`),
      ],
    },
    {
      id: 'b13', kitRef: 13, area: 'groups', title: 'Pearl and Quill',
      intro: `Pearl bought 70% of Quill on 1 January 20X1. In 20X4 Quill sold goods to Pearl for $180,000 at a mark-up of 20% on cost, and one third were still in Pearl's inventory at the year end. On 1 July 20X4 Pearl lent Quill $800,000 at 5% interest a year. Figures are in $000.`,
      table: { head: ['Year ended 31 December 20X4 ($000)', 'Pearl', 'Quill'], rows: [['Revenue', '1,800', '900'], ['Cost of sales', '(1,000)', '(500)'], ['Gross profit', '800', '400'], ['Administrative expenses', '(350)', '(160)'], ['Operating profit', '450', '240'], ['Interest income', '30', '-'], ['Interest expense', '(70)', '(40)'], ['Profit before income taxes', '410', '200'], ['Income tax expense', '(100)', '(50)'], ['Profit for the year', '310', '150']] },
      tasks: [
        task(20, 1, 'number', `Task 1(a): What is consolidated revenue? Give your answer in $000.`, amount(2520, '$2,520,000 (2,520 in $000)'),
          `Quill was owned all year, so add both in full and cancel the intra-group sale ($000).
# Working
  $1,800 + $900 - $180 = $2,520
= Answer: $2,520,000 (2,520 in $000)`,
          `Quill принадлежала группе весь год: складываем полностью и исключаем внутригрупповую продажу ($000).
# Расчёт
  $1,800 + $900 - $180 = $2,520
= Ответ: $2,520,000 (2,520 в $000)`,
          `Quill butun yil guruhda bo'lgan: to'liq qo'shib, guruh ichidagi sotuvni chiqaramiz ($000).
# Hisob
  $1,800 + $900 - $180 = $2,520
= Javob: $2,520,000 ($000 da 2,520)`),
        task(20, 2, 'single', `Task 1(b): Which calculation gives consolidated cost of sales ($000)?`, pick(['$1,000 + $500 + $180 - $10', '$1,000 + $500 - $180 + $10', '$1,000 + $500 - $180 - $10'], 1),
          `Cancel the intra-group purchase, then ADD the unrealised profit ($000).
# PURP (mark-up 20%, so the price is 120% of cost)
  $180 x 20/120 = $30 profit; one third still held: $10
# Options
  + $180 - $10: both signs wrong. WRONG.
  - $180 + $10 = $1,330: RIGHT.
  - $180 - $10: takes the PURP off. WRONG.
= Answer: $1,000 + $500 - $180 + $10`,
          `Исключаем внутригрупповую закупку и ПРИБАВЛЯЕМ нереализованную прибыль ($000).
# PURP (наценка 20%, цена — 120% себестоимости)
  $180 x 20/120 = $30 прибыли; треть на складе: $10
# Варианты
  + $180 - $10: оба знака неверны. НЕВЕРНО.
  - $180 + $10 = $1,330: ВЕРНО.
  - $180 - $10: вычитает PURP. НЕВЕРНО.
= Ответ: $1,000 + $500 - $180 + $10`,
          `Guruh ichidagi xaridni chiqarib, amalga oshmagan foydani QO'SHAMIZ ($000).
# PURP (ustama 20%, narx tannarxning 120% i)
  $180 x 20/120 = $30 foyda; uchdan biri omborda: $10
# Variantlar
  + $180 - $10: ikkala ishora noto'g'ri. NOTO'G'RI.
  - $180 + $10 = $1,330: TO'G'RI.
  - $180 - $10: PURP ni ayiradi. NOTO'G'RI.
= Javob: $1,000 + $500 - $180 + $10`),
        task(20, 2, 'single', `Task 1(c): Which calculation gives consolidated interest expense ($000)?`, pick(['$70 - $40 + ($800 × 5% × 6/12)', '$70 + $40 - ($800 × 5%)', '$70 + $40 - ($800 × 5% × 6/12)'], 2),
          `Interest on the loan between Pearl and Quill is inside the group ($000).
# Intra-group interest
  $800 x 5% x 6/12 = $20 (1 July to 31 December)
# Group interest expense
  $70 + $40 - $20 = $90
# Options
  $70 - $40 + ...: Quill's interest is an expense to add. WRONG.
  - ($800 x 5%): a full year, but the loan ran for 6 months. WRONG.
  - ($800 x 5% x 6/12): RIGHT.
= Answer: $70 + $40 - ($800 x 5% x 6/12)`,
          `Проценты по займу между Pearl и Quill — внутри группы ($000).
# Внутригрупповые проценты
  $800 x 5% x 6/12 = $20 (1 июля – 31 декабря)
# Процентный расход группы
  $70 + $40 - $20 = $90
# Варианты
  $70 - $40 + ...: проценты Quill — расход, его прибавляют. НЕВЕРНО.
  - ($800 x 5%): полный год, а заём действовал 6 месяцев. НЕВЕРНО.
  - ($800 x 5% x 6/12): ВЕРНО.
= Ответ: $70 + $40 - ($800 x 5% x 6/12)`,
          `Pearl va Quill orasidagi qarz foizi guruh ichida ($000).
# Guruh ichidagi foiz
  $800 x 5% x 6/12 = $20 (1 iyul – 31 dekabr)
# Guruh foiz xarajati
  $70 + $40 - $20 = $90
# Variantlar
  $70 - $40 + ...: Quill foizi xarajat, qo'shiladi. NOTO'G'RI.
  - ($800 x 5%): to'liq yil, qarz esa 6 oy amal qilgan. NOTO'G'RI.
  - ($800 x 5% x 6/12): TO'G'RI.
= Javob: $70 + $40 - ($800 x 5% x 6/12)`),
        task(20, 2, 'number', `Task 1(d): What is consolidated profit for the year? Give your answer in $000.`, amount(450, '$450,000 (450 in $000)'),
          `Build the group statement of profit or loss ($000).
# Gross profit
  $2,520 - $1,330 = $1,190
# Operating profit
  $1,190 - admin ($350 + $160) = $680
# Interest
  Income $30 - intra-group $20 = $10; expense $90
  $680 + $10 - $90 = $600
# Tax
  $600 - ($100 + $50) = $450
= Answer: $450,000 (450 in $000)
! Common trap: removing the $20 from interest expense but leaving it in interest income.`,
          `Составим групповой отчёт ($000).
# Валовая прибыль
  $2,520 - $1,330 = $1,190
# Операционная прибыль
  $1,190 - административные ($350 + $160) = $680
# Проценты
  Доход $30 - внутригрупповые $20 = $10; расход $90
  $680 + $10 - $90 = $600
# Налог
  $600 - ($100 + $50) = $450
= Ответ: $450,000 (450 в $000)
! Частая ошибка: убрать $20 из процентного расхода, но оставить в процентном доходе.`,
          `Guruh hisobotini tuzamiz ($000).
# Yalpi foyda
  $2,520 - $1,330 = $1,190
# Operatsion foyda
  $1,190 - ma'muriy ($350 + $160) = $680
# Foiz
  Daromad $30 - guruh ichidagi $20 = $10; xarajat $90
  $680 + $10 - $90 = $600
# Soliq
  $600 - ($100 + $50) = $450
= Javob: $450,000 ($000 da 450)
! Ko'p uchraydigan xato: $20 ni foiz xarajatidan olib tashlab, foiz daromadida qoldirish.`),
        task(20, 2, 'number', `Task 1(e): What profit is attributable to the non-controlling interest? Give your answer in $000.`, amount(42, '$42,000 (42 in $000)'),
          `NCI = 30% of Quill's profit, less the PURP because Quill was the seller ($000).
# Working
  ($150 - $10) x 30% = $42
= Answer: $42,000 (42 in $000)
! Common trap: $45 ignores the PURP.`,
          `NCI = 30% прибыли Quill минус PURP, так как продавала Quill ($000).
# Расчёт
  ($150 - $10) x 30% = $42
= Ответ: $42,000 (42 в $000)
! Частая ошибка: $45 не учитывает PURP.`,
          `NCI = Quill foydasining 30% i, Quill sotgani uchun PURP ayiriladi ($000).
# Hisob
  ($150 - $10) x 30% = $42
= Javob: $42,000 ($000 da 42)
! Ko'p uchraydigan xato: $45 PURP ni hisobga olmaydi.`),
        task(20, 2, 'single', `Task 2: Pearl may buy an associate. How is an associate shown in the consolidated statement of financial position?`, pick(['All its assets and liabilities are added line by line', 'The group share of its assets and liabilities is added line by line', 'As one investment line within non-current assets'], 2),
          `An associate is not consolidated; it uses the equity method.
- All its assets and liabilities line by line: that is a subsidiary. WRONG.
- The group share line by line: never done. WRONG.
- One investment line in non-current assets: RIGHT. Cost + group share of profits since purchase.
= Answer: as one investment line within non-current assets`,
          `Ассоциированную не консолидируют; её учитывают методом долевого участия.
- Все её активы и обязательства построчно: так учитывают дочернюю. НЕВЕРНО.
- Доля группы построчно: так не делают никогда. НЕВЕРНО.
- Одна строка вложения во внеоборотных активах: ВЕРНО. Стоимость + доля группы в прибыли после покупки.
= Ответ: одной строкой вложения во внеоборотных активах`,
          `Assotsiatsiyalangan konsolidatsiya qilinmaydi; ulushli qatnashish usuli qo'llanadi.
- Barcha aktiv va majburiyatlari qatorma-qator: bu sho'ba. NOTO'G'RI.
- Guruh ulushi qatorma-qator: hech qachon qilinmaydi. NOTO'G'RI.
- Uzoq muddatli aktivlarda bitta sarmoya qatori: TO'G'RI. Tannarx + xariddan keyingi foydadagi guruh ulushi.
= Javob: uzoq muddatli aktivlarda bitta sarmoya qatori sifatida`),
        task(18, 2, 'number', `Task 3(a): Using Quill's own figures, what is its operating profit margin, to one decimal place?`, amount(26.7, '26.7%', { unit: '%' }),
          `Operating profit margin = operating profit / revenue x 100 ($000).
# Quill
  $240 / $900 x 100 = 26.7%
= Answer: 26.7%`,
          `Операционная маржа = операционная прибыль / выручка x 100 ($000).
# Quill
  $240 / $900 x 100 = 26.7%
= Ответ: 26.7%`,
          `Operatsion marja = operatsion foyda / tushum x 100 ($000).
# Quill
  $240 / $900 x 100 = 26.7%
= Javob: 26.7%`),
        task(18, 2, 'matrix', `Task 3(b): State whether each statement is true or false.`, grid(TF, [['If nothing else changes, a change in the value of closing inventory affects the operating profit margin', 0], ['Interest expense does not affect the operating profit margin', 0]]),
          `Check each statement.
- A change in closing inventory affects the operating margin: TRUE. It changes cost of sales, and so operating profit.
- Interest expense does not affect the operating margin: TRUE. Interest comes below operating profit.`,
          `Проверим каждое утверждение.
- Изменение запасов на конец влияет на операционную маржу: ВЕРНО. Оно меняет себестоимость, а значит и операционную прибыль.
- Процентный расход не влияет на операционную маржу: ВЕРНО. Проценты ниже операционной прибыли.`,
          `Har bir fikrni tekshiramiz.
- Yakuniy zaxira o'zgarishi operatsion marjaga ta'sir qiladi: TO'G'RI. U tannarxni, demak operatsion foydani o'zgartiradi.
- Foiz xarajati operatsion marjaga ta'sir qilmaydi: TO'G'RI. Foiz operatsion foydadan pastda.`),
      ],
    },
    {
      id: 'b14', kitRef: 14, area: 'groups', title: 'Ridge and Slate',
      intro: `Ridge bought 75% of Slate for $300,000 on 1 January 20X2, when Slate's retained earnings were $120,000 and the NCI was worth $110,000. At acquisition Slate's land, which cost $100,000, was worth $140,000; it is still owned. In 20X6 Ridge sold goods to Slate for $60,000 at a gross margin of 30%, and half were still in Slate's inventory at the year end. Slate also owed Ridge $20,000.`,
      table: { head: ['At 31 December 20X6', 'Ridge $', 'Slate $'], rows: [['Property, plant and equipment', '400,000', '280,000'], ['Investment in Slate', '300,000', '-'], ['Inventories', '120,000', '90,000'], ['Trade receivables', '85,000', '70,000'], ['Cash', '15,000', '30,000'], ['Share capital', '100,000', '80,000'], ['Share premium', '30,000', '20,000'], ['Retained earnings', '340,000', '200,000'], ['6% bank loan', '300,000', '100,000'], ['Trade payables', '150,000', '70,000']] },
      tasks: [
        task(19, 2, 'single', `Task 1(a): Which calculation gives goodwill on acquisition?`, pick(['$300,000 + $110,000 - ($80,000 + $120,000 + $40,000)', '$300,000 + $110,000 - ($80,000 + $20,000 + $120,000 + $40,000)', '$300,000 + $110,000 - ($80,000 + $20,000 + $120,000 - $40,000)'], 1),
          `Net assets at acquisition must include EVERY part of equity, plus the fair value uplift.
# Land uplift
  $140,000 - $100,000 = $40,000
# Net assets
  Share capital $80,000 + share premium $20,000 + retained earnings $120,000 + uplift $40,000 = $260,000
# Options
  Missing share premium: WRONG.
  All four parts: RIGHT. Goodwill = $300,000 + $110,000 - $260,000 = $150,000.
  Uplift subtracted: WRONG.
= Answer: $300,000 + $110,000 - ($80,000 + $20,000 + $120,000 + $40,000)`,
          `Чистые активы при покупке включают ВСЕ части капитала плюс дооценку.
# Дооценка земли
  $140,000 - $100,000 = $40,000
# Чистые активы
  Капитал $80,000 + эмиссионный доход $20,000 + нераспределённая прибыль $120,000 + дооценка $40,000 = $260,000
# Варианты
  Без эмиссионного дохода: НЕВЕРНО.
  Все четыре части: ВЕРНО. Гудвил = $300,000 + $110,000 - $260,000 = $150,000.
  Дооценка вычтена: НЕВЕРНО.
= Ответ: $300,000 + $110,000 - ($80,000 + $20,000 + $120,000 + $40,000)`,
          `Xarid paytidagi sof aktivlar kapitalning BARCHA qismlarini va adolatli qiymat oshishini o'z ichiga oladi.
# Yer oshishi
  $140,000 - $100,000 = $40,000
# Sof aktivlar
  Ustav kapitali $80,000 + emissiya daromadi $20,000 + taqsimlanmagan foyda $120,000 + oshish $40,000 = $260,000
# Variantlar
  Emissiya daromadisiz: NOTO'G'RI.
  To'rt qism: TO'G'RI. Gudvil = $300,000 + $110,000 - $260,000 = $150,000.
  Oshish ayirilgan: NOTO'G'RI.
= Javob: $300,000 + $110,000 - ($80,000 + $20,000 + $120,000 + $40,000)`),
        task(19, 1, 'single', `Task 1(b): How is goodwill classified?`, pick(['A tangible non-current asset', 'A current asset', 'An intangible non-current asset'], 2),
          `Goodwill cannot be touched and lasts for years.
- Tangible non-current: it has no physical form. WRONG.
- Current asset: it is not turned into cash within a year. WRONG.
- Intangible non-current: RIGHT.
= Answer: an intangible non-current asset`,
          `Гудвил нельзя потрогать, и он служит годами.
- Материальный внеоборотный: у него нет физической формы. НЕВЕРНО.
- Оборотный актив: он не превращается в деньги за год. НЕВЕРНО.
- Нематериальный внеоборотный: ВЕРНО.
= Ответ: нематериальный внеоборотный актив`,
          `Gudvilni ushlab bo'lmaydi va u yillab xizmat qiladi.
- Moddiy uzoq muddatli: jismoniy shakli yo'q. NOTO'G'RI.
- Aylanma aktiv: bir yilda pulga aylanmaydi. NOTO'G'RI.
- Nomoddiy uzoq muddatli: TO'G'RI.
= Javob: nomoddiy uzoq muddatli aktiv`),
        task(19, 1, 'number', `Task 2(a): What is consolidated property, plant and equipment?`, amount(720000, '$720,000'),
          `Add both in full, plus the fair value uplift on the land Slate still owns.
# Working
  $400,000 + $280,000 + $40,000 = $720,000
= Answer: $720,000`,
          `Складываем обе полностью плюс дооценка земли, которая всё ещё у Slate.
# Расчёт
  $400,000 + $280,000 + $40,000 = $720,000
= Ответ: $720,000`,
          `Ikkalasini to'liq qo'shib, Slate da hali bor yerning oshishini qo'shamiz.
# Hisob
  $400,000 + $280,000 + $40,000 = $720,000
= Javob: $720,000`),
        task(19, 1, 'number', `Task 2(b): What are consolidated inventories?`, amount(201000, '$201,000'),
          `Add both, then remove the unrealised profit in goods still held.
# PURP (margin 30%, so profit is 30% of the price)
  $60,000 x 30% = $18,000; half still held: $9,000
# Inventories
  $120,000 + $90,000 - $9,000 = $201,000
= Answer: $201,000
! Common trap: using 30/130 (a mark-up) instead of 30% of the price (a margin).`,
          `Складываем обе и убираем нереализованную прибыль в непроданном товаре.
# PURP (маржа 30%, прибыль — 30% от цены)
  $60,000 x 30% = $18,000; половина на складе: $9,000
# Запасы
  $120,000 + $90,000 - $9,000 = $201,000
= Ответ: $201,000
! Частая ошибка: взять 30/130 (наценка) вместо 30% от цены (маржа).`,
          `Ikkalasini qo'shib, saqlanayotgan tovardagi amalga oshmagan foydani olib tashlaymiz.
# PURP (marja 30%, foyda narxning 30% i)
  $60,000 x 30% = $18,000; yarmi omborda: $9,000
# Zaxiralar
  $120,000 + $90,000 - $9,000 = $201,000
= Javob: $201,000
! Ko'p uchraydigan xato: narxning 30% i (marja) o'rniga 30/130 (ustama) ni olish.`),
        task(19, 1, 'number', `Task 2(c): What are consolidated trade receivables?`, amount(135000, '$135,000'),
          `Remove the $20,000 owed inside the group.
# Working
  $85,000 + $70,000 - $20,000 = $135,000
= Answer: $135,000`,
          `Убираем $20,000 внутригруппового долга.
# Расчёт
  $85,000 + $70,000 - $20,000 = $135,000
= Ответ: $135,000`,
          `Guruh ichidagi $20,000 qarzni olib tashlaymiz.
# Hisob
  $85,000 + $70,000 - $20,000 = $135,000
= Javob: $135,000`),
        task(19, 1, 'number', `Task 2(d): What are consolidated trade payables?`, amount(200000, '$200,000'),
          `The same $20,000 comes off payables.
# Working
  $150,000 + $70,000 - $20,000 = $200,000
= Answer: $200,000`,
          `Те же $20,000 вычитаем из кредиторов.
# Расчёт
  $150,000 + $70,000 - $20,000 = $200,000
= Ответ: $200,000`,
          `O'sha $20,000 kreditorlardan ham ayiriladi.
# Hisob
  $150,000 + $70,000 - $20,000 = $200,000
= Javob: $200,000`),
        task(19, 1, 'number', `Task 2(e): What is the consolidated 6% bank loan?`, amount(400000, '$400,000'),
          `Both loans are owed to an outside bank, so nothing cancels.
# Working
  $300,000 + $100,000 = $400,000
= Answer: $400,000
! Common trap: taking only 75% of Slate's loan. Liabilities are added in full.`,
          `Оба займа — внешнему банку, исключать нечего.
# Расчёт
  $300,000 + $100,000 = $400,000
= Ответ: $400,000
! Частая ошибка: взять только 75% займа Slate. Обязательства складываются полностью.`,
          `Ikkala qarz tashqi bankka, chiqariladigan narsa yo'q.
# Hisob
  $300,000 + $100,000 = $400,000
= Javob: $400,000
! Ko'p uchraydigan xato: Slate qarzining faqat 75% ini olish. Majburiyatlar to'liq qo'shiladi.`),
        task(19, 2, 'number', `Task 3(a): What is the non-controlling interest at 31 December 20X6?`, amount(130000, '$130,000'),
          `NCI = fair value at acquisition + 25% of Slate's post-acquisition rise.
# Post-acquisition rise
  $200,000 - $120,000 = $80,000
# NCI
  $110,000 + 25% x $80,000 = $130,000
  (Ridge sold the goods, so the PURP does not touch the NCI)
= Answer: $130,000`,
          `NCI = справедливая стоимость при покупке + 25% роста Slate после покупки.
# Рост после покупки
  $200,000 - $120,000 = $80,000
# NCI
  $110,000 + 25% x $80,000 = $130,000
  (Продавала Ridge, PURP не затрагивает NCI)
= Ответ: $130,000`,
          `NCI = xarid paytidagi adolatli qiymat + Slate ning xariddan keyingi o'sishining 25% i.
# Xariddan keyingi o'sish
  $200,000 - $120,000 = $80,000
# NCI
  $110,000 + 25% x $80,000 = $130,000
  (Ridge sotgan, PURP NCI ga tegmaydi)
= Javob: $130,000`),
        task(19, 2, 'number', `Task 3(b): What are consolidated retained earnings?`, amount(391000, '$391,000'),
          `Group retained earnings = Ridge's own - PURP (Ridge sold) + 75% of Slate's post-acquisition rise.
# Working
  $340,000 - $9,000 + 75% x $80,000 = $340,000 - $9,000 + $60,000 = $391,000
= Answer: $391,000
! Common trap: forgetting the PURP ($400,000). The parent sold the goods, so it bears all of it.`,
          `Нераспределённая прибыль группы = собственная Ridge - PURP (продавала Ridge) + 75% роста Slate после покупки.
# Расчёт
  $340,000 - $9,000 + 75% x $80,000 = $340,000 - $9,000 + $60,000 = $391,000
= Ответ: $391,000
! Частая ошибка: забыть PURP ($400,000). Продавала материнская, она несёт всё.`,
          `Guruh taqsimlanmagan foydasi = Ridge ning o'zi - PURP (Ridge sotgan) + Slate ning xariddan keyingi o'sishining 75% i.
# Hisob
  $340,000 - $9,000 + 75% x $80,000 = $340,000 - $9,000 + $60,000 = $391,000
= Javob: $391,000
! Ko'p uchraydigan xato: PURP ni unutish ($400,000). Bosh kompaniya sotgan, hammasini u ko'taradi.`),
        task(20, 1, 'multi', `Task 4: Ridge plans to invest in Astern as an associate. Which TWO factors are relevant?`, { options: ['Control of Astern', 'Significant influence over Astern', 'Owning a majority of Astern\'s equity shares', 'Owning between 20% and 50% of Astern\'s equity shares'], correctIndices: [1, 3] },
          `An associate = significant influence, usually with 20% to 50% of the votes.
- Control: that makes a subsidiary. NOT relevant.
- Significant influence: the test for an associate. RELEVANT.
- A majority of the shares: normally control. NOT relevant.
- Between 20% and 50%: the usual range. RELEVANT.
= Answer: significant influence, and owning between 20% and 50%`,
          `Ассоциированная = значительное влияние, обычно 20%–50% голосов.
- Контроль: это дочерняя. НЕ относится.
- Значительное влияние: признак ассоциированной. ОТНОСИТСЯ.
- Большинство акций: обычно контроль. НЕ относится.
- От 20% до 50%: обычный диапазон. ОТНОСИТСЯ.
= Ответ: значительное влияние и владение от 20% до 50%`,
          `Assotsiatsiyalangan = sezilarli ta'sir, odatda ovozlarning 20%–50% i.
- Nazorat: bu sho'ba. TEGISHLI EMAS.
- Sezilarli ta'sir: assotsiatsiyalangan belgisi. TEGISHLI.
- Aksiyalarning ko'pchiligi: odatda nazorat. TEGISHLI EMAS.
- 20% dan 50% gacha: odatiy oraliq. TEGISHLI.
= Javob: sezilarli ta'sir va 20% dan 50% gacha egalik`),
        task(18, 2, 'matrix', `Task 5: State whether each statement is true or false.`, grid(TF, [['If the gross profit margin improves, the current ratio will also improve', 1], ['A bonus issue of shares has no effect on the current ratio', 0]]),
          `Check each statement.
- A better gross margin also improves the current ratio: FALSE. The margin is about profit; it does not directly change current assets or liabilities.
- A bonus issue does not affect the current ratio: TRUE. It only moves amounts inside equity.`,
          `Проверим каждое утверждение.
- Лучшая валовая маржа улучшает и текущую ликвидность: НЕВЕРНО. Маржа — о прибыли, она напрямую не меняет оборотные активы или обязательства.
- Бонусная эмиссия не влияет на текущую ликвидность: ВЕРНО. Она лишь перемещает суммы внутри капитала.`,
          `Har bir fikrni tekshiramiz.
- Yaxshiroq yalpi marja joriy likvidlikni ham yaxshilaydi: NOTO'G'RI. Marja foyda haqida, aylanma aktiv yoki majburiyatlarni bevosita o'zgartirmaydi.
- Bonus emissiya joriy likvidlikka ta'sir qilmaydi: TO'G'RI. U faqat kapital ichida summani ko'chiradi.`),
      ],
    },
    {
      id: 'b15', kitRef: 15, area: 'groups', title: 'Tide and Umber',
      intro: `On 1 January 20X6 Tide bought 6 million of Umber's 8 million $1 equity shares, paying $5 per share. The NCI is valued at the Umber share price on that date, $3.50. At 1 July 20X5 Umber's retained earnings were $12 million, and its land was worth $1 million more than its carrying amount. After acquisition Umber sold Tide goods that had cost $8 million, at a mark-up of 25%, and Tide had sold 70% of them by the year end. Umber's income and expenses accrue evenly. Figures are in $000.`,
      table: { head: ['Year ended 30 June 20X6 ($000)', 'Tide', 'Umber'], rows: [['Revenue', '180,000', '90,000'], ['Cost of sales', '(100,000)', '(50,000)'], ['Gross profit', '80,000', '40,000'], ['Selling expenses', '(18,000)', '(8,000)'], ['General and administrative expenses', '(32,000)', '(18,000)'], ['Operating profit', '30,000', '14,000'], ['Income tax expense', '(9,000)', '(4,000)'], ['Profit for the year', '21,000', '10,000']] },
      tasks: [
        task(19, 1, 'number', `Task 1(a): What is the fair value of the non-controlling interest at acquisition? Give your answer in $000.`, amount(7000, '$7,000,000 (7,000 in $000)'),
          `The NCI owns the shares Tide did not buy, valued at Umber's share price ($000).
# NCI shares
  8,000 - 6,000 = 2,000
# Fair value
  2,000 x $3.50 = $7,000
= Answer: $7,000,000 (7,000 in $000)
! Common trap: using Tide's $5 price per share ($10,000).`,
          `NCI владеет акциями, которые Tide не купила, по цене акции Umber ($000).
# Акции NCI
  8,000 - 6,000 = 2,000
# Справедливая стоимость
  2,000 x $3.50 = $7,000
= Ответ: $7,000,000 (7,000 в $000)
! Частая ошибка: взять цену Tide $5 за акцию ($10,000).`,
          `NCI Tide sotib olmagan aksiyalarga ega, Umber aksiya narxida ($000).
# NCI aksiyalari
  8,000 - 6,000 = 2,000
# Adolatli qiymat
  2,000 x $3.50 = $7,000
= Javob: $7,000,000 ($000 da 7,000)
! Ko'p uchraydigan xato: Tide ning aksiyaga $5 narxini olish ($10,000).`),
        task(19, 1, 'single', `Task 1(b): Which calculation gives Umber's retained earnings at acquisition ($000)?`, pick(['$12,000 + $10,000', '$12,000 + (6/12 × $10,000)', '$12,000'], 1),
          `Reserves are given at 1 July; ADD the profit up to the purchase on 1 January ($000).
# Months before the purchase
  July to December: 6 months
# Retained earnings at acquisition
  $12,000 + 6/12 x $10,000 = $17,000
- $12,000 + $10,000: adds the whole year, including months after the purchase. WRONG.
- $12,000: ignores the six months before the purchase. WRONG.
= Answer: $12,000 + (6/12 x $10,000)`,
          `Резервы даны на 1 июля; ПРИБАВЛЯЕМ прибыль до покупки 1 января ($000).
# Месяцы до покупки
  Июль–декабрь: 6 месяцев
# Нераспределённая прибыль при покупке
  $12,000 + 6/12 x $10,000 = $17,000
- $12,000 + $10,000: прибавляет весь год, включая месяцы после покупки. НЕВЕРНО.
- $12,000: не учитывает шесть месяцев до покупки. НЕВЕРНО.
= Ответ: $12,000 + (6/12 x $10,000)`,
          `Rezervlar 1 iyulda berilgan; 1 yanvardagi xaridgacha foydani QO'SHAMIZ ($000).
# Xariddan oldingi oylar
  Iyul–dekabr: 6 oy
# Xarid paytidagi taqsimlanmagan foyda
  $12,000 + 6/12 x $10,000 = $17,000
- $12,000 + $10,000: xariddan keyingi oylar bilan butun yilni qo'shadi. NOTO'G'RI.
- $12,000: xariddan oldingi olti oyni hisobga olmaydi. NOTO'G'RI.
= Javob: $12,000 + (6/12 x $10,000)`),
        task(19, 1, 'number', `Task 1(c): What is goodwill? Give your answer in $000.`, amount(11000, '$11,000,000 (11,000 in $000)'),
          `Goodwill = consideration + NCI - net assets at fair value ($000).
# Consideration
  6,000 x $5 = $30,000
# Net assets at acquisition
  Shares $8,000 + reserves $17,000 + land uplift $1,000 = $26,000
# Goodwill
  $30,000 + $7,000 - $26,000 = $11,000
= Answer: $11,000,000 (11,000 in $000)`,
          `Гудвил = возмещение + NCI - чистые активы по справедливой стоимости ($000).
# Возмещение
  6,000 x $5 = $30,000
# Чистые активы при покупке
  Акции $8,000 + резервы $17,000 + дооценка земли $1,000 = $26,000
# Гудвил
  $30,000 + $7,000 - $26,000 = $11,000
= Ответ: $11,000,000 (11,000 в $000)`,
          `Gudvil = to'lov + NCI - adolatli qiymatdagi sof aktivlar ($000).
# To'lov
  6,000 x $5 = $30,000
# Xarid paytidagi sof aktivlar
  Aksiyalar $8,000 + rezervlar $17,000 + yer oshishi $1,000 = $26,000
# Gudvil
  $30,000 + $7,000 - $26,000 = $11,000
= Javob: $11,000,000 ($000 da 11,000)`),
        task(20, 2, 'number', `Task 2(a): What is consolidated revenue? Give your answer in $000.`, amount(215000, '$215,000,000 (215,000 in $000)'),
          `Include Umber from 1 January only, then cancel the intra-group sales at their SELLING price ($000).
# Step 1: Umber for 6 months
  $90,000 x 6/12 = $45,000
# Step 2: Intra-group sales (cost $8,000, mark-up 25%)
  $8,000 x 125% = $10,000
# Step 3: Group revenue
  $180,000 + $45,000 - $10,000 = $215,000
= Answer: $215,000,000 (215,000 in $000)
! Common trap: cancelling only the $8,000 cost instead of the $10,000 sale price.`,
          `Включаем Umber только с 1 января и исключаем внутригрупповые продажи по ЦЕНЕ продажи ($000).
# Шаг 1: Umber за 6 месяцев
  $90,000 x 6/12 = $45,000
# Шаг 2: Внутригрупповые продажи (себестоимость $8,000, наценка 25%)
  $8,000 x 125% = $10,000
# Шаг 3: Выручка группы
  $180,000 + $45,000 - $10,000 = $215,000
= Ответ: $215,000,000 (215,000 в $000)
! Частая ошибка: исключить только себестоимость $8,000 вместо цены продажи $10,000.`,
          `Umber ni faqat 1 yanvardan kiritib, guruh ichidagi sotuvni SOTISH narxida chiqaramiz ($000).
# 1-qadam: Umber 6 oyga
  $90,000 x 6/12 = $45,000
# 2-qadam: Guruh ichidagi sotuv (tannarx $8,000, ustama 25%)
  $8,000 x 125% = $10,000
# 3-qadam: Guruh tushumi
  $180,000 + $45,000 - $10,000 = $215,000
= Javob: $215,000,000 ($000 da 215,000)
! Ko'p uchraydigan xato: $10,000 sotish narxi o'rniga faqat $8,000 tannarxni chiqarish.`),
        task(20, 2, 'single', `Task 2(b): Which calculation gives consolidated cost of sales ($000)?`, pick(['$100,000 + (6/12 × $50,000) - $10,000 - $600', '$100,000 + (6/12 × $50,000) - $10,000 + $600', '$100,000 + $50,000 - $10,000 + $600'], 1),
          `Time-apportion Umber, cancel the intra-group purchase, then ADD the PURP ($000).
# PURP
  Profit: $10,000 - $8,000 = $2,000
  70% sold on, so 30% still held: $2,000 x 30% = $600
# Options
  - $600: takes the PURP off. WRONG.
  + $600 with Umber x 6/12: RIGHT. $100,000 + $25,000 - $10,000 + $600 = $115,600.
  All of Umber's $50,000: ignores the acquisition date. WRONG.
= Answer: $100,000 + (6/12 x $50,000) - $10,000 + $600`,
          `Распределим Umber по времени, исключим внутригрупповую закупку и ПРИБАВИМ PURP ($000).
# PURP
  Прибыль: $10,000 - $8,000 = $2,000
  70% перепродано, 30% на складе: $2,000 x 30% = $600
# Варианты
  - $600: вычитает PURP. НЕВЕРНО.
  + $600 и Umber x 6/12: ВЕРНО. $100,000 + $25,000 - $10,000 + $600 = $115,600.
  Все $50,000 Umber: не учитывает дату покупки. НЕВЕРНО.
= Ответ: $100,000 + (6/12 x $50,000) - $10,000 + $600`,
          `Umber ni vaqt bo'yicha bo'lib, guruh ichidagi xaridni chiqarib, PURP ni QO'SHAMIZ ($000).
# PURP
  Foyda: $10,000 - $8,000 = $2,000
  70% qayta sotilgan, 30% omborda: $2,000 x 30% = $600
# Variantlar
  - $600: PURP ni ayiradi. NOTO'G'RI.
  + $600 va Umber x 6/12: TO'G'RI. $100,000 + $25,000 - $10,000 + $600 = $115,600.
  Umber ning butun $50,000 i: xarid sanasini hisobga olmaydi. NOTO'G'RI.
= Javob: $100,000 + (6/12 x $50,000) - $10,000 + $600`),
        task(20, 2, 'number', `Task 2(c): What is consolidated operating profit? Give your answer in $000.`, amount(36400, '$36,400,000 (36,400 in $000)'),
          `Gross profit less the running costs, with Umber's lines at 6/12 ($000).
# Gross profit
  $215,000 - $115,600 = $99,400
# Selling expenses
  $18,000 + $8,000 x 6/12 = $22,000
# Admin expenses
  $32,000 + $18,000 x 6/12 = $41,000
# Operating profit
  $99,400 - $22,000 - $41,000 = $36,400
= Answer: $36,400,000 (36,400 in $000)`,
          `Валовая прибыль минус текущие расходы, строки Umber за 6/12 ($000).
# Валовая прибыль
  $215,000 - $115,600 = $99,400
# Коммерческие расходы
  $18,000 + $8,000 x 6/12 = $22,000
# Административные расходы
  $32,000 + $18,000 x 6/12 = $41,000
# Операционная прибыль
  $99,400 - $22,000 - $41,000 = $36,400
= Ответ: $36,400,000 (36,400 в $000)`,
          `Yalpi foyda minus joriy xarajatlar, Umber qatorlari 6/12 da ($000).
# Yalpi foyda
  $215,000 - $115,600 = $99,400
# Sotish xarajatlari
  $18,000 + $8,000 x 6/12 = $22,000
# Ma'muriy xarajatlar
  $32,000 + $18,000 x 6/12 = $41,000
# Operatsion foyda
  $99,400 - $22,000 - $41,000 = $36,400
= Javob: $36,400,000 ($000 da 36,400)`),
        task(20, 2, 'number', `Task 2(d): What is consolidated profit for the year? Give your answer in $000.`, amount(25400, '$25,400,000 (25,400 in $000)'),
          `Take off tax, with Umber's tax at 6/12 ($000).
# Tax
  $9,000 + $4,000 x 6/12 = $11,000
# Profit for the year
  $36,400 - $11,000 = $25,400
= Answer: $25,400,000 (25,400 in $000)
! Common trap: taking all of Umber's $4,000 tax ($23,400).`,
          `Вычтем налог, налог Umber за 6/12 ($000).
# Налог
  $9,000 + $4,000 x 6/12 = $11,000
# Прибыль за год
  $36,400 - $11,000 = $25,400
= Ответ: $25,400,000 (25,400 в $000)
! Частая ошибка: взять весь налог Umber $4,000 ($23,400).`,
          `Soliqni ayiramiz, Umber solig'i 6/12 da ($000).
# Soliq
  $9,000 + $4,000 x 6/12 = $11,000
# Yil foydasi
  $36,400 - $11,000 = $25,400
= Javob: $25,400,000 ($000 da 25,400)
! Ko'p uchraydigan xato: Umber ning butun $4,000 solig'ini olish ($23,400).`),
        task(20, 2, 'single', `Task 2(e): Which describes the profit attributable to the non-controlling interest?`, pick(['NCI share of Umber\'s profit for the whole year, less the unrealised profit', 'NCI share of Umber\'s post-acquisition profit, plus its share of the unrealised profit', 'NCI share of Umber\'s post-acquisition profit, less its share of the unrealised profit'], 2),
          `Umber sold the goods, so the NCI bears its share of the PURP, and only post-acquisition profit counts.
- Whole year less PURP: includes profit from before the purchase. WRONG.
- Post-acquisition plus PURP: the PURP must come off, not be added. WRONG.
- Post-acquisition less PURP: RIGHT. 25% x ($10,000 x 6/12 - $600) = 25% x $4,400 = $1,100.
= Answer: NCI share of Umber's post-acquisition profit, less its share of the unrealised profit`,
          `Продавала Umber, поэтому NCI несёт свою долю PURP, и учитывается только прибыль после покупки.
- Весь год минус PURP: включает прибыль до покупки. НЕВЕРНО.
- После покупки плюс PURP: PURP вычитают, а не прибавляют. НЕВЕРНО.
- После покупки минус PURP: ВЕРНО. 25% x ($10,000 x 6/12 - $600) = 25% x $4,400 = $1,100.
= Ответ: доля NCI в прибыли Umber после покупки минус её доля в нереализованной прибыли`,
          `Umber sotgan, shuning uchun NCI PURP dagi ulushini ko'taradi va faqat xariddan keyingi foyda hisoblanadi.
- Butun yil minus PURP: xariddan oldingi foydani ham kiritadi. NOTO'G'RI.
- Xariddan keyingi plus PURP: PURP ayiriladi, qo'shilmaydi. NOTO'G'RI.
- Xariddan keyingi minus PURP: TO'G'RI. 25% x ($10,000 x 6/12 - $600) = 25% x $4,400 = $1,100.
= Javob: Umber ning xariddan keyingi foydasidagi NCI ulushi minus amalga oshmagan foydadagi ulushi`),
        task(18, 2, 'single', `Task 3: Tide has a lower gross profit margin than Umber. Which is a plausible reason?`, pick(['Umber holds less inventory than Tide', 'Umber buys materials more cheaply and wastes less of them', 'Umber has lower selling and administrative expenses'], 1),
          `Gross margin depends only on selling prices and cost of sales.
- Umber holds less inventory: inventory levels do not by themselves change the margin. WRONG.
- Umber buys more cheaply and wastes less: lower cost of sales, higher margin. RIGHT.
- Umber has lower selling and admin costs: they come below gross profit. WRONG.
= Answer: Umber buys materials more cheaply and wastes less of them`,
          `Валовая маржа зависит только от цен продажи и себестоимости.
- У Umber меньше запасов: уровень запасов сам по себе маржу не меняет. НЕВЕРНО.
- Umber покупает дешевле и меньше теряет: ниже себестоимость, выше маржа. ВЕРНО.
- У Umber ниже коммерческие и административные расходы: они ниже валовой прибыли. НЕВЕРНО.
= Ответ: Umber покупает материалы дешевле и меньше их теряет`,
          `Yalpi marja faqat sotish narxi va tannarxga bog'liq.
- Umber da zaxira kamroq: zaxira darajasi o'zi marjani o'zgartirmaydi. NOTO'G'RI.
- Umber arzonroq oladi va kamroq isrof qiladi: tannarx past, marja yuqori. TO'G'RI.
- Umber ning sotish va ma'muriy xarajatlari past: ular yalpi foydadan pastda. NOTO'G'RI.
= Javob: Umber materiallarni arzonroq oladi va kamroq isrof qiladi`),
      ],
    },
    {
      id: 'b16', kitRef: 16, area: 'groups', title: 'Vale and Wren',
      intro: `On 1 October 20X7 Vale bought 75% of Wren's 6 million $1 shares, issuing 2 Vale shares for every 3 Wren shares acquired. A Vale share was worth $5 and the issue has not been recorded. The NCI is valued at the Wren share price, $2.80. Wren's net assets were at fair value. Wren made a profit of $3 million in the year to 30 September 20X8. In the year Wren sold goods to Vale for $4.8 million at a mark-up of 20% on cost; a quarter were still in Vale's inventory, and Vale owed Wren $700,000 at the year end. Figures are in $000.`,
      table: { head: ['At 30 September 20X8 ($000)', 'Vale', 'Wren'], rows: [['Property, plant and equipment', '38,000', '20,000'], ['Current assets', '14,000', '7,000'], ['Total assets', '52,000', '27,000'], ['Share capital', '12,000', '6,000'], ['Retained earnings', '30,000', '14,000'], ['8% loan notes', '4,000', '3,000'], ['Current liabilities', '6,000', '4,000'], ['Total equity and liabilities', '52,000', '27,000'], ['Revenue for the year', '70,000', '36,000'], ['Cost of sales for the year', '50,000', '27,000']] },
      tasks: [
        task(19, 2, 'matrix', `Task 1(a): Which accounts does Vale debit or credit to record the share issue?`, grid(DCN, [['Investment in Wren', 0], ['Share capital', 1], ['Share premium', 1], ['Retained earnings', 2]]),
          `Issuing shares above nominal value: capital at nominal, the rest to share premium ($000).
# Shares issued
  4,500 Wren shares acquired x 2/3 = 3,000 Vale shares, worth 3,000 x $5 = $15,000
# The entry
- Investment in Wren: DEBIT $15,000.
- Share capital: 3,000 x $1. CREDIT $3,000.
- Share premium: $15,000 - $3,000. CREDIT $12,000.
- Retained earnings: no profit or loss arises. NO ENTRY.`,
          `Выпуск акций выше номинала: капитал по номиналу, остальное в эмиссионный доход ($000).
# Выпущено акций
  Куплено 4,500 акций Wren x 2/3 = 3,000 акций Vale стоимостью 3,000 x $5 = $15,000
# Запись
- Вложение в Wren: ДЕБЕТ $15,000.
- Акционерный капитал: 3,000 x $1. КРЕДИТ $3,000.
- Эмиссионный доход: $15,000 - $3,000. КРЕДИТ $12,000.
- Нераспределённая прибыль: прибыли или убытка нет. НЕТ ЗАПИСИ.`,
          `Nominaldan yuqori aksiya chiqarish: kapital nominalda, qolgani emissiya daromadiga ($000).
# Chiqarilgan aksiyalar
  Olingan 4,500 Wren aksiyasi x 2/3 = 3,000 Vale aksiyasi, qiymati 3,000 x $5 = $15,000
# Yozuv
- Wren ga sarmoya: DEBET $15,000.
- Ustav kapitali: 3,000 x $1. KREDIT $3,000.
- Emissiya daromadi: $15,000 - $3,000. KREDIT $12,000.
- Taqsimlanmagan foyda: foyda yoki zarar yo'q. YOZUV YO'Q.`),
        task(19, 1, 'single', `Task 1(b): Which calculation gives the fair value of the consideration ($000)?`, pick(['6,000 × 75% × $5', '6,000 × 75% × 2/3 × $1', '6,000 × 75% × 2/3 × $5'], 2),
          `Consideration = shares Vale ISSUES x Vale's fair value ($000).
- 6,000 x 75% x $5: forgets the 2-for-3 ratio. WRONG.
- 6,000 x 75% x 2/3 x $1: uses nominal value. WRONG.
- 6,000 x 75% x 2/3 x $5 = $15,000: RIGHT.
= Answer: 6,000 x 75% x 2/3 x $5`,
          `Возмещение = акции, ВЫПУЩЕННЫЕ Vale x справедливая стоимость акции Vale ($000).
- 6,000 x 75% x $5: забывает соотношение 2 за 3. НЕВЕРНО.
- 6,000 x 75% x 2/3 x $1: берёт номинал. НЕВЕРНО.
- 6,000 x 75% x 2/3 x $5 = $15,000: ВЕРНО.
= Ответ: 6,000 x 75% x 2/3 x $5`,
          `To'lov = Vale CHIQARGAN aksiyalar x Vale adolatli qiymati ($000).
- 6,000 x 75% x $5: 3 taga 2 nisbatini unutadi. NOTO'G'RI.
- 6,000 x 75% x 2/3 x $1: nominalni oladi. NOTO'G'RI.
- 6,000 x 75% x 2/3 x $5 = $15,000: TO'G'RI.
= Javob: 6,000 x 75% x 2/3 x $5`),
        task(19, 2, 'number', `Task 1(c): What is goodwill? Give your answer in $000.`, amount(2200, '$2,200,000 (2,200 in $000)'),
          `Wren was bought at the START of the year, so its whole year's profit is post-acquisition ($000).
# Step 1: Retained earnings at acquisition
  $14,000 at the year end - $3,000 profit for the year = $11,000
# Step 2: Net assets at acquisition
  $6,000 + $11,000 = $17,000
# Step 3: NCI fair value
  1,500 shares x $2.80 = $4,200
# Step 4: Goodwill
  $15,000 + $4,200 - $17,000 = $2,200
= Answer: $2,200,000 (2,200 in $000)
! Common trap: using the year-end $14,000 reserves, which gives negative goodwill.`,
          `Wren куплена в НАЧАЛЕ года, поэтому вся прибыль года — после покупки ($000).
# Шаг 1: Нераспределённая прибыль при покупке
  $14,000 на конец года - прибыль за год $3,000 = $11,000
# Шаг 2: Чистые активы при покупке
  $6,000 + $11,000 = $17,000
# Шаг 3: Справедливая стоимость NCI
  1,500 акций x $2.80 = $4,200
# Шаг 4: Гудвил
  $15,000 + $4,200 - $17,000 = $2,200
= Ответ: $2,200,000 (2,200 в $000)
! Частая ошибка: взять резервы на конец $14,000, тогда гудвил отрицательный.`,
          `Wren yil BOSHIDA olingan, shuning uchun butun yil foydasi xariddan keyingi ($000).
# 1-qadam: Xarid paytidagi taqsimlanmagan foyda
  Yil oxiridagi $14,000 - yil foydasi $3,000 = $11,000
# 2-qadam: Xarid paytidagi sof aktivlar
  $6,000 + $11,000 = $17,000
# 3-qadam: NCI adolatli qiymati
  1,500 aksiya x $2.80 = $4,200
# 4-qadam: Gudvil
  $15,000 + $4,200 - $17,000 = $2,200
= Javob: $2,200,000 ($000 da 2,200)
! Ko'p uchraydigan xato: yil oxiridagi $14,000 rezervni olish, gudvil manfiy chiqadi.`),
        task(19, 1, 'number', `Task 2(a): What is consolidated property, plant and equipment? Give your answer in $000.`, amount(58000, '$58,000,000 (58,000 in $000)'),
          `Add both in full; there is no fair value uplift here ($000).
# Working
  $38,000 + $20,000 = $58,000
= Answer: $58,000,000 (58,000 in $000)`,
          `Складываем обе полностью; дооценки здесь нет ($000).
# Расчёт
  $38,000 + $20,000 = $58,000
= Ответ: $58,000,000 (58,000 в $000)`,
          `Ikkalasini to'liq qo'shamiz; bu yerda adolatli qiymat oshishi yo'q ($000).
# Hisob
  $38,000 + $20,000 = $58,000
= Javob: $58,000,000 ($000 da 58,000)`),
        task(19, 1, 'number', `Task 2(b): What are consolidated current assets? Give your answer in $000.`, amount(20100, '$20,100,000 (20,100 in $000)'),
          `Add both, then take off the PURP and the money owed inside the group ($000).
# PURP (mark-up 20%, so the price is 120% of cost)
  $4,800 x 20/120 = $800 profit; a quarter still held: $200
# Current assets
  $14,000 + $7,000 - PURP $200 - intra-group receivable $700 = $20,100
= Answer: $20,100,000 (20,100 in $000)
! Common trap: taking 20% of the price as profit ($960), which treats the mark-up as a margin.`,
          `Складываем обе, затем вычитаем PURP и долг внутри группы ($000).
# PURP (наценка 20%, цена — 120% себестоимости)
  $4,800 x 20/120 = $800 прибыли; четверть на складе: $200
# Оборотные активы
  $14,000 + $7,000 - PURP $200 - внутригрупповой дебитор $700 = $20,100
= Ответ: $20,100,000 (20,100 в $000)
! Частая ошибка: взять 20% от цены как прибыль ($960), считая наценку маржой.`,
          `Ikkalasini qo'shib, PURP va guruh ichidagi qarzni ayiramiz ($000).
# PURP (ustama 20%, narx tannarxning 120% i)
  $4,800 x 20/120 = $800 foyda; to'rtdan biri omborda: $200
# Aylanma aktivlar
  $14,000 + $7,000 - PURP $200 - guruh ichidagi debitor $700 = $20,100
= Javob: $20,100,000 ($000 da 20,100)
! Ko'p uchraydigan xato: narxning 20% ini foyda deb olish ($960), ustamani marja deb hisoblash.`),
        task(19, 1, 'number', `Task 2(c): What are consolidated current liabilities? Give your answer in $000.`, amount(9300, '$9,300,000 (9,300 in $000)'),
          `The same $700 owed inside the group comes off liabilities ($000).
# Working
  $6,000 + $4,000 - $700 = $9,300
= Answer: $9,300,000 (9,300 in $000)`,
          `Те же $700 внутригруппового долга вычитаем из обязательств ($000).
# Расчёт
  $6,000 + $4,000 - $700 = $9,300
= Ответ: $9,300,000 (9,300 в $000)`,
          `Guruh ichidagi o'sha $700 qarz majburiyatlardan ham ayiriladi ($000).
# Hisob
  $6,000 + $4,000 - $700 = $9,300
= Javob: $9,300,000 ($000 da 9,300)`),
        task(19, 2, 'single', `Task 3(a): Which calculation gives the non-controlling interest ($000)?`, pick(['(1,500 × $1) + 25% × ($3,000 + $200)', '(1,500 × $2.80) + 25% × ($3,000 - $200)', '(1,500 × $5) + 25% × ($3,000 + $200)'], 1),
          `NCI = fair value at acquisition + 25% of Wren's profit after the PURP (Wren sold) ($000).
- (1,500 x $1) + 25% x ($3,000 + $200): nominal value, and the PURP added. WRONG.
- (1,500 x $2.80) + 25% x ($3,000 - $200) = $4,200 + $700 = $4,900: RIGHT.
- (1,500 x $5) + ...: Vale's price, not Wren's. WRONG.
= Answer: (1,500 x $2.80) + 25% x ($3,000 - $200)`,
          `NCI = справедливая стоимость при покупке + 25% прибыли Wren за вычетом PURP (продавала Wren) ($000).
- (1,500 x $1) + 25% x ($3,000 + $200): номинал, и PURP прибавлена. НЕВЕРНО.
- (1,500 x $2.80) + 25% x ($3,000 - $200) = $4,200 + $700 = $4,900: ВЕРНО.
- (1,500 x $5) + ...: цена Vale, а не Wren. НЕВЕРНО.
= Ответ: (1,500 x $2.80) + 25% x ($3,000 - $200)`,
          `NCI = xarid paytidagi adolatli qiymat + Wren ning PURP dan keyingi foydasining 25% i (Wren sotgan) ($000).
- (1,500 x $1) + 25% x ($3,000 + $200): nominal va PURP qo'shilgan. NOTO'G'RI.
- (1,500 x $2.80) + 25% x ($3,000 - $200) = $4,200 + $700 = $4,900: TO'G'RI.
- (1,500 x $5) + ...: Vale narxi, Wren niki emas. NOTO'G'RI.
= Javob: (1,500 x $2.80) + 25% x ($3,000 - $200)`),
        task(19, 2, 'single', `Task 3(b): Which calculation gives consolidated retained earnings ($000)?`, pick(['$30,000 - 75% × ($3,000 + $200)', '$30,000 + 75% × ($3,000 - $200)', '$42,000 - 75% × ($3,000 - $200)'], 1),
          `Group retained earnings = Vale's own + 75% of Wren's post-acquisition profit after PURP ($000).
- $30,000 - 75% x (...): the group share is ADDED. WRONG.
- $30,000 + 75% x ($3,000 - $200) = $30,000 + $2,100 = $32,100: RIGHT.
- $42,000 - ...: $42,000 is not Vale's retained earnings, and the group share is subtracted. WRONG.
= Answer: $30,000 + 75% x ($3,000 - $200)`,
          `Нераспределённая прибыль группы = собственная Vale + 75% прибыли Wren после покупки за вычетом PURP ($000).
- $30,000 - 75% x (...): долю группы ПРИБАВЛЯЮТ. НЕВЕРНО.
- $30,000 + 75% x ($3,000 - $200) = $30,000 + $2,100 = $32,100: ВЕРНО.
- $42,000 - ...: $42,000 — не нераспределённая прибыль Vale, и доля группы вычитается. НЕВЕРНО.
= Ответ: $30,000 + 75% x ($3,000 - $200)`,
          `Guruh taqsimlanmagan foydasi = Vale ning o'zi + Wren ning PURP dan keyingi xariddan keyingi foydasining 75% i ($000).
- $30,000 - 75% x (...): guruh ulushi QO'SHILADI. NOTO'G'RI.
- $30,000 + 75% x ($3,000 - $200) = $30,000 + $2,100 = $32,100: TO'G'RI.
- $42,000 - ...: $42,000 Vale ning taqsimlanmagan foydasi emas, guruh ulushi esa ayiriladi. NOTO'G'RI.
= Javob: $30,000 + 75% x ($3,000 - $200)`),
        task(20, 1, 'number', `Task 4(a): What is consolidated revenue for the year? Give your answer in $000.`, amount(101200, '$101,200,000 (101,200 in $000)'),
          `Wren was in the group all year, so add both in full and cancel the intra-group sales ($000).
# Working
  $70,000 + $36,000 - $4,800 = $101,200
= Answer: $101,200,000 (101,200 in $000)`,
          `Wren была в группе весь год: складываем полностью и исключаем внутригрупповые продажи ($000).
# Расчёт
  $70,000 + $36,000 - $4,800 = $101,200
= Ответ: $101,200,000 (101,200 в $000)`,
          `Wren butun yil guruhda bo'lgan: to'liq qo'shib, guruh ichidagi sotuvni chiqaramiz ($000).
# Hisob
  $70,000 + $36,000 - $4,800 = $101,200
= Javob: $101,200,000 ($000 da 101,200)`),
        task(20, 2, 'single', `Task 4(b): Which calculation gives consolidated cost of sales ($000)?`, pick(['$50,000 + $27,000 - $4,800 - $200', '$50,000 + $27,000 - $4,800 + $200', '$50,000 + 25% × ($27,000 - $4,800 + $200)'], 1),
          `Add both in full, cancel the intra-group purchase, then ADD the PURP ($000).
- Ending "- $200": takes the PURP off. WRONG.
- Ending "+ $200": $77,000 - $4,800 + $200 = $72,400. RIGHT.
- $50,000 + 25% x (...): never cut a subsidiary to the NCI or group %. WRONG.
= Answer: $50,000 + $27,000 - $4,800 + $200`,
          `Складываем обе полностью, исключаем внутригрупповую закупку и ПРИБАВЛЯЕМ PURP ($000).
- С «- $200» в конце: вычитает PURP. НЕВЕРНО.
- С «+ $200» в конце: $77,000 - $4,800 + $200 = $72,400. ВЕРНО.
- $50,000 + 25% x (...): дочернюю никогда не сокращают до % NCI или группы. НЕВЕРНО.
= Ответ: $50,000 + $27,000 - $4,800 + $200`,
          `Ikkalasini to'liq qo'shib, guruh ichidagi xaridni chiqarib, PURP ni QO'SHAMIZ ($000).
- Oxirida «- $200»: PURP ni ayiradi. NOTO'G'RI.
- Oxirida «+ $200»: $77,000 - $4,800 + $200 = $72,400. TO'G'RI.
- $50,000 + 25% x (...): sho'ba hech qachon NCI yoki guruh % iga qisqartirilmaydi. NOTO'G'RI.
= Javob: $50,000 + $27,000 - $4,800 + $200`),
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = cases;
  else (globalThis.ACCA ??= {}).sectionB = cases;
})();
