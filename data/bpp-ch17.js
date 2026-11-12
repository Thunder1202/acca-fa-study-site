'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 30 (statements of
// cash flows), reworded with new figures. bppRef/bppPage point to BPP's own answer.
// Kaplan 2025-26 follows IAS 7 as amended by IFRS 18: interest paid and dividends paid are FINANCING; interest
// and dividends received are INVESTING; tax paid is OPERATING. BPP 30.17 puts interest paid in operating, so the
// version here follows Kaplan and says so. Left out: 30.8, 30.11 and 30.14 (repeats) and 30.20 (Kaplan does not
// cover its point).
(function () {
  const TOPIC = 'chapter-17';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp17-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const two = (options, correctIndices) => ({ options, correctIndices });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('30.1', 260, 'single', `Which of these appear in a company's statement of cash flows? (1) Surplus on revaluation of non-current assets. (2) Proceeds from issuing shares. (3) A dividend proposed after the year end. (4) Irrecoverable debts written off. (5) Dividends received.`,
      pick(['1, 2 and 5 only', '2, 3, 4 and 5 only', '2 and 5 only', '3 and 4 only'], 2),
`Only real movements of cash appear.
- (1) Revaluation: no cash moves.
- (2) Share issue: cash comes in. YES.
- (3) Proposed dividend: not paid yet, no cash moves.
- (4) Write-off: no cash moves.
- (5) Dividends received: cash comes in. YES.
= Answer: 2 and 5 only`,
`В отчёт попадает только реальное движение денег.
- (1) Переоценка: деньги не движутся.
- (2) Выпуск акций: деньги поступают. ДА.
- (3) Объявленный дивиденд: ещё не выплачен, денег нет.
- (4) Списание долга: деньги не движутся.
- (5) Полученные дивиденды: деньги поступают. ДА.
= Ответ: только 2 и 5`,
`Hisobotga faqat pulning haqiqiy harakati kiradi.
- (1) Qayta baholash: pul harakatlanmaydi.
- (2) Aksiya chiqarish: pul keladi. HA.
- (3) E'lon qilingan dividend: hali to'lanmagan, pul yo'q.
- (4) Qarzni hisobdan chiqarish: pul harakatlanmaydi.
- (5) Olingan dividendlar: pul keladi. HA.
= Javob: faqat 2 va 5`),

    q('30.2', 260, 'single', `Using the indirect method to work out cash from operating activities, which statements are correct? (1) A loss on sale of non-current assets is deducted from profit before tax. (2) An increase in inventory is deducted. (3) An increase in payables is added. (4) Depreciation is added.`,
      pick(['1, 2 and 3', '1, 2 and 4', '1, 3 and 4', '2, 3 and 4'], 3),
`- (1) A loss reduced profit but cost no cash, so it is ADDED back. WRONG.
- (2) More inventory ties up cash: deduct. CORRECT.
- (3) Owing suppliers more means cash not yet paid out: add. CORRECT.
- (4) Depreciation reduced profit but cost no cash: add back. CORRECT.
= Answer: 2, 3 and 4`,
`- (1) Убыток уменьшил прибыль без затраты денег, его ПРИБАВЛЯЮТ. НЕВЕРНО.
- (2) Больше запасов — деньги связаны: вычесть. ВЕРНО.
- (3) Больше долг поставщикам — деньги ещё не ушли: прибавить. ВЕРНО.
- (4) Амортизация уменьшила прибыль без затраты денег: прибавить. ВЕРНО.
= Ответ: 2, 3 и 4`,
`- (1) Zarar foydani pulsiz kamaytirgan, u QO'SHILADI. NOTO'G'RI.
- (2) Zaxira ko'paysa pul bog'lanadi: ayiriladi. TO'G'RI.
- (3) Yetkazib beruvchilarga qarz ko'paysa pul hali chiqmagan: qo'shiladi. TO'G'RI.
- (4) Amortizatsiya foydani pulsiz kamaytirgan: qo'shiladi. TO'G'RI.
= Javob: 2, 3 va 4`),

    q('30.3', 260, 'single', `These figures go into the calculation of net cash from operating activities: depreciation $760,000; profit on sale of non-current assets $30,000; increase in inventories $95,000; decrease in receivables $70,000; increase in payables $55,000. What is their net effect?`,
      pick(['Add $760,000 to profit', 'Deduct $760,000 from profit', 'Add $1,010,000 to profit', 'Add $820,000 to profit'], 0),
`# Step 1: Sign of each item
  Depreciation: + 760,000 (no cash)
  Profit on sale: - 30,000 (the cash is in investing)
  Inventories up: - 95,000
  Receivables down: + 70,000
  Payables up: + 55,000
# Step 2: Net
  760,000 - 30,000 - 95,000 + 70,000 + 55,000 = 760,000
= Answer: add $760,000`,
`# Шаг 1: Знак каждой статьи
  Амортизация: + 760 000 (без денег)
  Прибыль от продажи: - 30 000 (деньги — в инвестиционной)
  Рост запасов: - 95 000
  Снижение дебиторов: + 70 000
  Рост кредиторов: + 55 000
# Шаг 2: Итог
  760 000 - 30 000 - 95 000 + 70 000 + 55 000 = 760 000
= Ответ: прибавить $760 000`,
`# 1-qadam: Har bir moddaning ishorasi
  Amortizatsiya: + 760 000 (pulsiz)
  Sotuvdan foyda: - 30 000 (pul investitsiyada)
  Zaxira o'sishi: - 95 000
  Debitorlar kamayishi: + 70 000
  Kreditorlar o'sishi: + 55 000
# 2-qadam: Natija
  760 000 - 30 000 - 95 000 + 70 000 + 55 000 = 760 000
= Javob: $760 000 qo'shiladi`),

    q('30.4', 261, 'single', `Part of a draft statement of cash flows ($000): profit before tax 6,480; depreciation (1,750); proceeds of sale of non-current assets 290; increase in inventory (260); increase in payables 380. Criticisms: (1) depreciation should be added, not deducted; (2) the inventory increase should be added, not deducted; (3) the payables increase should be deducted, not added; (4) sale proceeds do not belong in this part of the statement. Which criticisms are valid?`,
      pick(['2 and 3 only', '1 and 4 only', '1 and 3 only', '2 and 4 only'], 1),
`- (1) Depreciation is a non-cash expense: add it back. VALID.
- (2) More inventory uses cash: deducting it was right.
- (3) More payables saves cash: adding it was right.
- (4) Sale proceeds are an investing cash flow, not operating. VALID.
= Answer: 1 and 4 only`,
`- (1) Амортизация — неденежный расход: её прибавляют. ВЕРНО.
- (2) Рост запасов тратит деньги: вычитание было верным.
- (3) Рост кредиторов экономит деньги: прибавление было верным.
- (4) Выручка от продажи — инвестиционный поток, а не операционный. ВЕРНО.
= Ответ: только 1 и 4`,
`- (1) Amortizatsiya — pulsiz xarajat: u qo'shiladi. TO'G'RI.
- (2) Zaxira o'sishi pul sarflaydi: ayirish to'g'ri edi.
- (3) Kreditorlar o'sishi pulni tejaydi: qo'shish to'g'ri edi.
- (4) Sotuv tushumi operatsion emas, investitsiya oqimi. TO'G'RI.
= Javob: faqat 1 va 4`),

    q('30.5', 261, 'single', `Which of these could be part of cash flows from FINANCING activities? (1) Proceeds of sale of premises. (2) Dividends received. (3) A bonus issue of shares.`,
      pick(['1 only', '2 only', '3 only', 'None of them'], 3),
`- (1) Selling premises: investing.
- (2) Dividends received: investing (Kaplan, IAS 7).
- (3) A bonus issue brings in no cash, so it is not in the statement at all.
= Answer: none of them`,
`- (1) Продажа помещений: инвестиционная деятельность.
- (2) Полученные дивиденды: инвестиционная (Kaplan, IAS 7).
- (3) Бонусный выпуск не приносит денег, его в отчёте нет вовсе.
= Ответ: ни одно`,
`- (1) Binoni sotish: investitsiya faoliyati.
- (2) Olingan dividendlar: investitsiya (Kaplan, IAS 7).
- (3) Bonus emissiya pul keltirmaydi, u hisobotda umuman yo'q.
= Javob: hech biri`),

    q('30.6', 261, 'single', `Which statements about statements of cash flows are correct? (1) The direct method gives a different operating cash flow from the indirect method. (2) Rights issues of shares do not appear in statements of cash flows. (3) A surplus on revaluing a non-current asset does not appear in a statement of cash flows. (4) A profit on selling a non-current asset appears under investing activities.`,
      pick(['1 and 4', '2 and 3', '3 only', '2 and 4'], 2),
`- (1) FALSE. Both methods reach the same operating cash figure; they just show it differently.
- (2) FALSE. A rights issue brings in cash, so it is a financing inflow.
- (3) TRUE. A revaluation moves no cash.
- (4) FALSE. The PROCEEDS go under investing. The profit is only an adjustment in the operating section.
= Answer: 3 only`,
`- (1) НЕВЕРНО. Оба метода дают одну сумму операционного потока, лишь показывают по-разному.
- (2) НЕВЕРНО. Выпуск прав приносит деньги — это финансовый приток.
- (3) ВЕРНО. Переоценка не двигает деньги.
- (4) НЕВЕРНО. ВЫРУЧКА идёт в инвестиционную. Прибыль — лишь корректировка в операционной.
= Ответ: только 3`,
`- (1) NOTO'G'RI. Ikkala usul bir xil operatsion oqimga keladi, faqat boshqacha ko'rsatadi.
- (2) NOTO'G'RI. Huquqlar emissiyasi pul keltiradi — bu moliyaviy kirim.
- (3) TO'G'RI. Qayta baholash pulni harakatlantirmaydi.
- (4) NOTO'G'RI. TUSHUM investitsiyaga boradi. Foyda faqat operatsion bo'limdagi tuzatish.
= Javob: faqat 3`),

    q('30.7', 261, 'multi', `A trainee's extract ($m): profit before tax 34; depreciation (11); decrease in inventories 9; increase in receivables (6); increase in payables (5); cash generated from operations 21. Which TWO criticisms are correct?`,
      two([
        'Depreciation should have been added, not deducted.',
        'The decrease in inventories should have been deducted, not added.',
        'The increase in receivables should have been added, not deducted.',
        'The increase in payables should have been added, not deducted.',
      ], [0, 3]),
`- Depreciation: a non-cash expense, so add it back. The trainee deducted it. WRONG.
- Inventories fell: cash was released, so adding is right.
- Receivables rose: cash is tied up, so deducting is right.
- Payables rose: cash was kept, so it should be ADDED. The trainee deducted it. WRONG.
= Answer: depreciation and payables`,
`- Амортизация: неденежный расход, её прибавляют. Стажёр вычел. ОШИБКА.
- Запасы снизились: деньги высвободились, прибавление верно.
- Дебиторы выросли: деньги связаны, вычитание верно.
- Кредиторы выросли: деньги сохранились, их нужно ПРИБАВИТЬ. Стажёр вычел. ОШИБКА.
= Ответ: амортизация и кредиторы`,
`- Amortizatsiya: pulsiz xarajat, u qo'shiladi. Stajyor ayirgan. XATO.
- Zaxira kamaygan: pul bo'shagan, qo'shish to'g'ri.
- Debitorlar oshgan: pul bog'langan, ayirish to'g'ri.
- Kreditorlar oshgan: pul saqlangan, QO'SHILISHI kerak. Stajyor ayirgan. XATO.
= Javob: amortizatsiya va kreditorlar`),

    q('30.9', 261, 'single', `The statement of cash flows starts by adjusting profit before tax to reach net cash from operating activities. Which list contains ONLY items that could appear in that calculation?`,
      pick([
        'Depreciation, increase in receivables, decrease in payables, proceeds from sale of equipment, increase in inventories',
        'Increase in payables, decrease in inventories, profit on sale of plant, depreciation, decrease in receivables',
        'Increase in payables, proceeds from sale of equipment, depreciation, decrease in receivables, increase in inventories',
        'Depreciation, interest paid, proceeds from sale of equipment, decrease in inventories',
      ], 1),
`Look for items that do NOT belong in the operating adjustments.
- Proceeds from selling equipment: investing. That rules out lists 1, 3 and 4.
- Interest paid: financing under Kaplan's IAS 7. Another reason list 4 is wrong.
- List 2 has only working-capital changes, depreciation and a profit on sale (deducted). All belong.
= Answer: increase in payables, decrease in inventories, profit on sale of plant, depreciation, decrease in receivables`,
`Ищем статьи, которым НЕ место в операционных корректировках.
- Выручка от продажи оборудования: инвестиционная. Это исключает списки 1, 3 и 4.
- Уплаченные проценты: финансовая деятельность по IAS 7 у Kaplan. Ещё одна причина против списка 4.
- В списке 2 только изменения оборотного капитала, амортизация и прибыль от продажи (вычитается). Всё уместно.
= Ответ: рост кредиторов, снижение запасов, прибыль от продажи оборудования, амортизация, снижение дебиторов`,
`Operatsion tuzatishlarga TEGISHLI BO'LMAGAN moddalarni izlaymiz.
- Uskunani sotish tushumi: investitsiya. Bu 1, 3 va 4-ro'yxatlarni chiqaradi.
- To'langan foiz: Kaplan bo'yicha IAS 7 da moliyaviy faoliyat. 4-ro'yxatga qarshi yana bir sabab.
- 2-ro'yxatda faqat aylanma kapital o'zgarishlari, amortizatsiya va sotuvdan foyda (ayiriladi). Hammasi o'rinli.
= Javob: kreditorlar o'sishi, zaxira kamayishi, uskuna sotuvidan foyda, amortizatsiya, debitorlar kamayishi`),

    q('30.10', 261, 'single', `Extract from a company's statement of financial position ($000), this year then last year: share capital 210 and 150; share premium 80 and 50; bank loan (non-current) 120 and 180. No dividends were paid. What is the net cash flow from financing activities?`,
      pick(['$30,000 inflow', '$90,000 inflow', '$150,000 inflow', '$60,000 outflow'], 0),
`# Step 1: Shares issued for cash
  Share capital + premium: (210 + 80) - (150 + 50) = 90 inflow
# Step 2: Loan
  120 - 180 = 60 repaid, an outflow
# Step 3: Net
  90 - 60 = 30 inflow
= Answer: $30,000 inflow
! Look at share capital AND share premium together: both came from the same cash.`,
`# Шаг 1: Акции, выпущенные за деньги
  Капитал + эмиссионный доход: (210 + 80) - (150 + 50) = 90 приток
# Шаг 2: Заём
  120 - 180 = 60 погашено, отток
# Шаг 3: Итог
  90 - 60 = 30 приток
= Ответ: приток $30 000
! Смотрите на капитал И эмиссионный доход вместе: это одни и те же деньги.`,
`# 1-qadam: Pulga chiqarilgan aksiyalar
  Kapital + emissiya daromadi: (210 + 80) - (150 + 50) = 90 kirim
# 2-qadam: Qarz
  120 - 180 = 60 qaytarilgan, chiqim
# 3-qadam: Natija
  90 - 60 = 30 kirim
= Javob: $30 000 kirim
! Kapital VA emissiya daromadini birga ko'ring: ikkalasi bir pul.`),

    q('30.12', 261, 'single', `A trainee's extract ($000): profit before tax 512; depreciation 296; profit on sale of PPE 28 (added); increase in inventories (63); decrease in receivables (37); increase in payables 31; cash generated from operations 767. Possible mistakes: (1) the profit on sale should be subtracted, not added; (2) the inventory increase should be added, not subtracted; (3) the receivables decrease should be added, not subtracted; (4) the payables increase should be subtracted, not added. Which mistakes did the trainee make?`,
      pick(['1 and 2 only', '1 and 3 only', '2 and 4 only', '3 and 4 only'], 1),
`- (1) A profit on sale is not operating cash, so it is SUBTRACTED. Mistake made.
- (2) Inventory up uses cash: subtracting was right.
- (3) Receivables down releases cash, so it should be ADDED. Mistake made.
- (4) Payables up keeps cash: adding was right.
# Corrected figure
  512 + 296 - 28 - 63 + 37 + 31 = 785
= Answer: 1 and 3 only`,
`- (1) Прибыль от продажи — не операционные деньги, её ВЫЧИТАЮТ. Ошибка.
- (2) Рост запасов тратит деньги: вычитание верно.
- (3) Снижение дебиторов высвобождает деньги, его нужно ПРИБАВИТЬ. Ошибка.
- (4) Рост кредиторов сохраняет деньги: прибавление верно.
# Исправленная сумма
  512 + 296 - 28 - 63 + 37 + 31 = 785
= Ответ: только 1 и 3`,
`- (1) Sotuvdan foyda operatsion pul emas, u AYIRILADI. Xato qilingan.
- (2) Zaxira o'sishi pul sarflaydi: ayirish to'g'ri.
- (3) Debitorlar kamayishi pul bo'shatadi, u QO'SHILISHI kerak. Xato qilingan.
- (4) Kreditorlar o'sishi pulni saqlaydi: qo'shish to'g'ri.
# Tuzatilgan summa
  512 + 296 - 28 - 63 + 37 + 31 = 785
= Javob: faqat 1 va 3`),

    q('30.13', 262, 'single', `Which of these could be included in cash flows from FINANCING activities under IAS 7? (1) Interest received. (2) Tax paid. (3) Proceeds from selling property.`,
      pick(['1 only', '2 only', '3 only', 'None of them'], 3),
`Kaplan's IAS 7 layout:
- (1) Interest received: investing.
- (2) Tax paid: operating.
- (3) Proceeds from selling property: investing.
= Answer: none of them`,
`Схема IAS 7 у Kaplan:
- (1) Полученные проценты: инвестиционная.
- (2) Уплаченный налог: операционная.
- (3) Выручка от продажи недвижимости: инвестиционная.
= Ответ: ни одно`,
`Kaplan bo'yicha IAS 7 tuzilishi:
- (1) Olingan foiz: investitsiya.
- (2) To'langan soliq: operatsion.
- (3) Mulk sotuvi tushumi: investitsiya.
= Javob: hech biri`),

    q('30.15', 262, 'number', `Property, plant and equipment for the year ($000): carrying amount at the start 518; at the end 701; increase in revaluation surplus 60; disposals at cost 130, with accumulated depreciation of 72 on them; depreciation charge 47. What figure goes into the statement of cash flows for purchases of PPE? (in $)`,
      amount(228000, '$228,000'),
`Rebuild the movement in carrying amount. Purchases is the missing figure.
# Step 1: Start and add the non-cash increases
  Opening 518 + revaluation 60 = 578
# Step 2: Take off what left
  Disposals at carrying amount: 130 - 72 = 58
  Depreciation: 47
  578 - 58 - 47 = 473
# Step 3: The gap to the closing figure is purchases
  701 - 473 = 228
= Answer: $228,000
! Remove disposals at CARRYING AMOUNT (cost less depreciation), not at cost.`,
`Восстановим движение балансовой стоимости. Покупки — недостающая сумма.
# Шаг 1: Начало плюс неденежный рост
  Начало 518 + переоценка 60 = 578
# Шаг 2: Вычтем выбывшее
  Выбытия по балансовой стоимости: 130 - 72 = 58
  Амортизация: 47
  578 - 58 - 47 = 473
# Шаг 3: Разница до конца года — покупки
  701 - 473 = 228
= Ответ: $228 000
! Выбытия убирают по БАЛАНСОВОЙ стоимости (себестоимость минус амортизация), а не по себестоимости.`,
`Balans qiymati harakatini tiklaymiz. Xaridlar — yetishmayotgan summa.
# 1-qadam: Boshi va pulsiz o'sish
  Boshi 518 + qayta baholash 60 = 578
# 2-qadam: Chiqib ketganini ayiramiz
  Chiqib ketish balans qiymatida: 130 - 72 = 58
  Amortizatsiya: 47
  578 - 58 - 47 = 473
# 3-qadam: Yil oxirigacha farq — xaridlar
  701 - 473 = 228
= Javob: $228 000
! Chiqib ketishlar tannarxda emas, BALANS QIYMATIDA (tannarx minus amortizatsiya) ayiriladi.`),

    q('30.16', 262, 'single', `A company sold a warehouse at a LOSS. Using the indirect method, how does this appear in the statement of cash flows?`,
      pick([
        'Loss: deducted in operating activities. Proceeds: investing activities',
        'Loss: deducted in operating activities. Proceeds: operating activities',
        'Loss: added back in operating activities. Proceeds: investing activities',
        'Loss: added back in operating activities. Proceeds: operating activities',
      ], 2),
`# Step 1: The loss
  It reduced profit but is not a cash payment, so it is ADDED back in operating activities.
# Step 2: The proceeds
  Cash from selling a non-current asset: investing activities.
= Answer: add back the loss; proceeds in investing`,
`# Шаг 1: Убыток
  Он уменьшил прибыль, но это не платёж, его ПРИБАВЛЯЮТ в операционной деятельности.
# Шаг 2: Выручка
  Деньги от продажи внеоборотного актива: инвестиционная деятельность.
= Ответ: убыток прибавить; выручка — в инвестиционной`,
`# 1-qadam: Zarar
  U foydani kamaytirgan, lekin to'lov emas, operatsion faoliyatda QO'SHILADI.
# 2-qadam: Tushum
  Uzoq muddatli aktivni sotishdan pul: investitsiya faoliyati.
= Javob: zarar qo'shiladi; tushum investitsiyada`),

    q('30.17', 262, 'number', `Using the direct method, work out net cash from OPERATING activities. Purchases were $21,600, with $2,900 unpaid at the year end; opening payables were $1,200. Wages were $11,000, with $800 unpaid at the year end; last year's accrual for wages was $1,400. Interest of $2,400 on a long-term loan was paid. Sales were $38,500, with $1,100 owed by customers at the year end; opening receivables were $600. (in $)`,
      amount(6500, '$6,500'),
`# Step 1: Cash from customers
  600 + 38,500 - 1,100 = 38,000
# Step 2: Cash paid to suppliers
  1,200 + 21,600 - 2,900 = 19,900
# Step 3: Cash paid to employees
  1,400 + 11,000 - 800 = 11,600
# Step 4: Operating cash flow
  38,000 - 19,900 - 11,600 = 6,500
# Step 5: Interest paid
  Kaplan's IAS 7 puts interest paid in FINANCING, so it is left out here.
= Answer: $6,500
! BPP's printed answer deducts the interest in operating activities. That follows the older IAS 7 choice. Under Kaplan's 2025-26 rules the interest goes in financing.`,
`# Шаг 1: Деньги от покупателей
  600 + 38 500 - 1 100 = 38 000
# Шаг 2: Оплачено поставщикам
  1 200 + 21 600 - 2 900 = 19 900
# Шаг 3: Оплачено сотрудникам
  1 400 + 11 000 - 800 = 11 600
# Шаг 4: Операционный поток
  38 000 - 19 900 - 11 600 = 6 500
# Шаг 5: Уплаченные проценты
  По IAS 7 у Kaplan уплаченные проценты — ФИНАНСОВАЯ деятельность, здесь их нет.
= Ответ: $6 500
! В напечатанном ответе BPP проценты вычтены в операционной деятельности — это прежний выбор по IAS 7. По правилам Kaplan 2025-26 проценты идут в финансовую.`,
`# 1-qadam: Xaridorlardan pul
  600 + 38 500 - 1 100 = 38 000
# 2-qadam: Yetkazib beruvchilarga to'langan
  1 200 + 21 600 - 2 900 = 19 900
# 3-qadam: Xodimlarga to'langan
  1 400 + 11 000 - 800 = 11 600
# 4-qadam: Operatsion oqim
  38 000 - 19 900 - 11 600 = 6 500
# 5-qadam: To'langan foiz
  Kaplan bo'yicha IAS 7 da to'langan foiz MOLIYAVIY faoliyat, bu yerga kirmaydi.
= Javob: $6 500
! BPP chop etgan javobda foiz operatsion faoliyatda ayirilgan — bu eski IAS 7 tanlovi. Kaplan 2025-26 qoidalariga ko'ra foiz moliyaviyga boradi.`),

    q('30.18', 262, 'single', `Which statement is correct?`,
      pick([
        'If a business makes a profit, it has a positive cash flow.',
        'If a business makes a loss, it has a negative cash flow.',
        'A business may make a profit but have a negative cash flow.',
        'A business that breaks even has cash inflows equal to cash outflows.',
      ], 2),
`Profit and cash differ because of timing and non-cash items.
- A profitable business can still run short of cash, for example by buying assets, building up inventory or waiting for customers to pay.
- A loss-making business can have positive cash flow, for example from a large loan or share issue.
= Answer: a business may make a profit but have a negative cash flow`,
`Прибыль и деньги различаются из-за сроков и неденежных статей.
- Прибыльный бизнес может остаться без денег, например покупая активы, наращивая запасы или ожидая оплаты покупателей.
- Убыточный бизнес может иметь положительный поток, например от крупного займа или выпуска акций.
= Ответ: бизнес может получать прибыль, но иметь отрицательный денежный поток`,
`Foyda va pul muddat va pulsiz moddalar tufayli farq qiladi.
- Foydali biznesda pul tugashi mumkin, masalan aktiv sotib olish, zaxira ko'paytirish yoki xaridor to'lovini kutish tufayli.
- Zararli biznesda musbat oqim bo'lishi mumkin, masalan katta qarz yoki aksiya chiqarishdan.
= Javob: biznes foyda qilib, manfiy pul oqimiga ega bo'lishi mumkin`),

    q('30.19', 263, 'single', `A company has been profitable this year but has nearly run out of cash several times. Its accountant thinks the cash shortage does not matter because the company is profitable. The financial controller says "profit is fine on paper, but cash is king". Who is right, and why?`,
      pick([
        'The accountant: a profitable business should not waste time on cash flow.',
        'The accountant: a profitable business will always survive.',
        'The controller: IAS 7 requires active cash flow management.',
        'The controller: a business without cash to fund its operations is likely to fail.',
      ], 3),
`A business pays its staff, suppliers and loans with cash, not with profit. Without cash it can fail even while it is profitable.
- IAS 7 sets out how to PRESENT cash flows. It does not tell managers how to manage cash.
= Answer: the controller, because a business without cash to fund its operations is likely to fail`,
`Бизнес платит сотрудникам, поставщикам и по займам деньгами, а не прибылью. Без денег он может рухнуть даже при прибыли.
- IAS 7 определяет, как ПРЕДСТАВЛЯТЬ денежные потоки. Он не говорит, как управлять деньгами.
= Ответ: контролёр, потому что бизнес без денег на текущую работу, скорее всего, обанкротится`,
`Biznes xodimlarga, yetkazib beruvchilarga va qarzlarga foyda bilan emas, pul bilan to'laydi. Pulsiz u foydali bo'lsa ham qulashi mumkin.
- IAS 7 pul oqimlarini qanday KO'RSATISHni belgilaydi. U pulni qanday boshqarishni aytmaydi.
= Javob: nazoratchi, chunki faoliyatini moliyalashga puli bo'lmagan biznes, ehtimol, inqirozga uchraydi`),

    q('30.21', 263, 'single', `A company uses the direct method. Sales for the year were $820,000. Receivables were $174,000 at the start of the year and $196,000 at the end. What are cash receipts from customers?`,
      pick(['$798,000', '$842,000', '$820,000', '$22,000'], 0),
`# Step 1: Everything customers could have paid
  Owed at the start 174,000 + sales 820,000 = 994,000
# Step 2: Less what they still owe
  994,000 - 196,000 = 798,000
= Answer: $798,000
! Receivables rose, so customers paid LESS than the sales figure.`,
`# Шаг 1: Всё, что могли заплатить покупатели
  Долг на начало 174 000 + продажи 820 000 = 994 000
# Шаг 2: Минус то, что они ещё должны
  994 000 - 196 000 = 798 000
= Ответ: $798 000
! Дебиторка выросла, значит покупатели заплатили МЕНЬШЕ суммы продаж.`,
`# 1-qadam: Xaridorlar to'lashi mumkin bo'lgan hammasi
  Boshidagi qarz 174 000 + sotuv 820 000 = 994 000
# 2-qadam: Hali qarzdor bo'lganini ayiramiz
  994 000 - 196 000 = 798 000
= Javob: $798 000
! Debitorlik oshgan, demak xaridorlar sotuv summasidan KAM to'lagan.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
