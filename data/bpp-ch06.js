'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), sections 7 and 8
// (acquisition, depreciation and classification), reworded with new figures. bppRef/bppPage point to BPP's own
// answer. Disposal and revaluation items are in bpp-ch07.js. Left out: 7.2 (BPP's key is worded differently
// from Kaplan's purpose of an asset register), 7.10 and 8.11 (same skill as 7.9 and 8.12). 7.1 replaces BPP's
// "wearing out" distractor, because Kaplan does link depreciation to use and wear. 7.15 keeps only the two rows
// Kaplan covers.
(function () {
  const TOPIC = 'chapter-06';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp06-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('7.1', 207, 'single', `What is the purpose of charging depreciation?`,
      pick([
        'To spread the cost of a non-current asset over the periods expected to benefit from its use',
        'To set money aside to replace the asset later',
        'To bring the asset down to its market value in the statement of financial position',
        'To show the asset at what it would cost to replace today',
      ], 0),
`IAS 16 defines depreciation as spreading the depreciable amount of an asset over its useful life. It matches the cost of using the asset to the income it helps earn.
- Setting money aside: no cash moves when depreciation is charged.
- Market value or replacement cost: depreciation is not a valuation. Showing current value is what a revaluation does.
= Answer: to spread the cost over the periods that benefit from the asset`,
`IAS 16 определяет амортизацию как распределение амортизируемой стоимости актива на срок полезного использования. Она связывает затраты на использование актива с доходом, который он помогает получить.
- Отложить деньги: при начислении амортизации деньги не движутся.
- Рыночная или восстановительная стоимость: амортизация — не оценка. Текущую стоимость показывает переоценка.
= Ответ: распределить стоимость на периоды, получающие выгоду от актива`,
`IAS 16 amortizatsiyani aktivning amortizatsiyalanadigan qiymatini foydali xizmat muddatiga taqsimlash deb ta'riflaydi. U aktivdan foydalanish xarajatini u yordam bergan daromad bilan moslaydi.
- Pul ajratib qo'yish: amortizatsiya hisoblanganda pul harakatlanmaydi.
- Bozor yoki almashtirish qiymati: amortizatsiya baholash emas. Joriy qiymatni qayta baholash ko'rsatadi.
= Javob: qiymatni aktivdan foyda oladigan davrlarga taqsimlash`),

    q('7.3', 207, 'number', `The non-current asset register shows a total carrying amount of $84,920. An asset that cost $18,000 has been sold for $5,300, at a loss on disposal of $1,700. The register has not been updated for the sale. What should the register total be after the sale is removed? (in $)`,
      amount(77920, '$77,920'),
`# Step 1: Carrying amount of the asset sold
  Proceeds + loss = carrying amount
  5,300 + 1,700 = 7,000
# Step 2: Take it out of the register
  84,920 - 7,000 = 77,920
= Answer: $77,920
! The register holds carrying amounts, so remove 7,000, not the $18,000 cost.`,
`# Шаг 1: Балансовая стоимость проданного актива
  Выручка + убыток = балансовая стоимость
  5 300 + 1 700 = 7 000
# Шаг 2: Уберём её из реестра
  84 920 - 7 000 = 77 920
= Ответ: $77 920
! В реестре балансовые стоимости, поэтому убираем 7 000, а не себестоимость $18 000.`,
`# 1-qadam: Sotilgan aktivning balans qiymati
  Tushum + zarar = balans qiymati
  5 300 + 1 700 = 7 000
# 2-qadam: Uni reyestrdan chiqaramiz
  84 920 - 7 000 = 77 920
= Javob: $77 920
! Reyestrda balans qiymatlari turadi, shuning uchun $18 000 tannarxni emas, 7 000 ni chiqaramiz.`),

    q('7.4', 207, 'single', `The asset register shows a carrying amount of $163,400, but the non-current asset account in the ledger shows $151,400. The difference could be an asset that was sold but not removed from the register. Which asset could it be?`,
      pick([
        'Proceeds of $16,000 and a loss on disposal of $4,000',
        'Proceeds of $16,000 and a carrying amount of $4,000',
        'Proceeds of $16,000 and a profit on disposal of $4,000',
        'Proceeds of $4,000 and a carrying amount of $4,000',
      ], 2),
`# Step 1: Size of the difference
  163,400 - 151,400 = 12,000. The missing asset had a carrying amount of 12,000.
# Step 2: Test each option
  Proceeds 16,000 with a LOSS of 4,000: carrying amount 20,000. No.
  Carrying amount 4,000: no.
  Proceeds 16,000 with a PROFIT of 4,000: carrying amount 16,000 - 4,000 = 12,000. YES.
= Answer: proceeds of $16,000 and a profit on disposal of $4,000`,
`# Шаг 1: Размер разницы
  163 400 - 151 400 = 12 000. Балансовая стоимость пропавшего актива — 12 000.
# Шаг 2: Проверим варианты
  Выручка 16 000 и УБЫТОК 4 000: балансовая стоимость 20 000. Нет.
  Балансовая стоимость 4 000: нет.
  Выручка 16 000 и ПРИБЫЛЬ 4 000: балансовая стоимость 16 000 - 4 000 = 12 000. ДА.
= Ответ: выручка $16 000 и прибыль от выбытия $4 000`,
`# 1-qadam: Farq hajmi
  163 400 - 151 400 = 12 000. Yo'qolgan aktivning balans qiymati 12 000.
# 2-qadam: Variantlarni tekshiramiz
  Tushum 16 000 va ZARAR 4 000: balans qiymati 20 000. Yo'q.
  Balans qiymati 4 000: yo'q.
  Tushum 16 000 va FOYDA 4 000: balans qiymati 16 000 - 4 000 = 12 000. HA.
= Javob: tushum $16 000 va chiqib ketishdan $4 000 foyda`),

    q('7.5', 208, 'single', `Cleaning materials bought for the office were debited to the office equipment (cost) account by mistake. Ignoring depreciation, what is the effect?`,
      pick([
        'Profit overstated and non-current assets overstated',
        'Profit understated and non-current assets overstated',
        'Profit overstated and non-current assets understated',
        'Profit understated and non-current assets understated',
      ], 0),
`# Step 1: What should have happened
  Cleaning materials are an expense, charged to profit or loss.
# Step 2: What did happen
  They were recorded as an asset instead.
  So an expense is missing: profit is too HIGH.
  And an asset is added that should not be there: non-current assets are too HIGH.
= Answer: profit overstated and non-current assets overstated`,
`# Шаг 1: Как должно быть
  Чистящие средства — расход, его относят на прибыль или убыток.
# Шаг 2: Что сделали
  Их записали как актив.
  Значит, расхода не хватает: прибыль ЗАВЫШЕНА.
  И добавлен лишний актив: внеоборотные активы ЗАВЫШЕНЫ.
= Ответ: прибыль завышена и внеоборотные активы завышены`,
`# 1-qadam: Qanday bo'lishi kerak
  Tozalash vositalari — xarajat, foyda yoki zararga olinadi.
# 2-qadam: Nima qilindi
  Ular aktiv sifatida yozildi.
  Demak, xarajat yetishmaydi: foyda OSHIRILGAN.
  Va ortiqcha aktiv qo'shilgan: uzoq muddatli aktivlar OSHIRILGAN.
= Javob: foyda oshirilgan va uzoq muddatli aktivlar oshirilgan`),

    q('7.6', 208, 'single', `Which statement correctly describes non-current assets?`,
      pick([
        'Assets that form part of the working capital of the business',
        'Assets meant for continuing use in the business, tangible or intangible, that do not meet the definition of a current asset',
        'Assets with no physical substance that the entity controls and expects future benefits from',
        'Materials or supplies to be used up in the production process',
      ], 1),
`Match each description to what it really is.
- Working capital: that is current assets.
- Continuing use, tangible or intangible, not current: the definition of non-current assets. YES.
- No physical substance: that is only intangible assets.
- Materials used in production: that is inventory.
= Answer: assets meant for continuing use that are not current assets`,
`Сопоставим каждое описание с тем, что оно описывает.
- Оборотный капитал: это оборотные активы.
- Длительное использование, материальные или нематериальные, не оборотные: определение внеоборотных активов. ДА.
- Без физической формы: только нематериальные активы.
- Материалы для производства: это запасы.
= Ответ: активы для длительного использования, не являющиеся оборотными`,
`Har bir tavsifni nimani bildirishiga moslaymiz.
- Aylanma kapital: bu joriy aktivlar.
- Uzoq foydalanish, moddiy yoki nomoddiy, joriy emas: uzoq muddatli aktivlar ta'rifi. HA.
- Jismoniy shaklsiz: faqat nomoddiy aktivlar.
- Ishlab chiqarish materiallari: bu zaxira.
= Javob: uzoq foydalanish uchun, joriy bo'lmagan aktivlar`),

    q('7.8', 208, 'single', `On 1 October a business bought a van for $24,000. It is depreciated at 20% a year straight line on cost less a residual value of $4,000, with a part-year charge in the year of purchase. The year ends on 31 December. The payment was correctly recorded in cash but debited to the vehicle repairs account. How is profit for the year affected?`,
      pick(['Understated by $23,000', 'Understated by $22,800', 'Overstated by $23,000', 'Understated by $24,000'], 0),
`# Step 1: The wrong expense
  Repairs were charged with 24,000 that should not be there. Profit is 24,000 too LOW.
# Step 2: The missing depreciation
  (24,000 - 4,000) x 20% x 3/12 = 1,000
  This should have been charged, so profit is 1,000 too HIGH.
# Step 3: Net effect
  24,000 - 1,000 = 23,000 understated
= Answer: understated by $23,000
! Depreciation is on cost LESS residual value: 24,000 x 20% x 3/12 = 1,200 gives the $22,800 trap.`,
`# Шаг 1: Лишний расход
  На ремонт списали 24 000, которых там быть не должно. Прибыль на 24 000 НИЖЕ.
# Шаг 2: Недостающая амортизация
  (24 000 - 4 000) x 20% x 3/12 = 1 000
  Её нужно было начислить, значит прибыль на 1 000 ВЫШЕ.
# Шаг 3: Итог
  24 000 - 1 000 = занижена на 23 000
= Ответ: занижена на $23 000
! Амортизацию считают от себестоимости МИНУС ликвидационная стоимость: 24 000 x 20% x 3/12 = 1 200 даёт ловушку $22 800.`,
`# 1-qadam: Ortiqcha xarajat
  Ta'mirga 24 000 yozilgan, u u yerda bo'lmasligi kerak. Foyda 24 000 ga PAST.
# 2-qadam: Yetishmayotgan amortizatsiya
  (24 000 - 4 000) x 20% x 3/12 = 1 000
  Uni hisoblash kerak edi, demak foyda 1 000 ga YUQORI.
# 3-qadam: Natija
  24 000 - 1 000 = 23 000 ga kamaytirilgan
= Javob: $23 000 ga kamaytirilgan
! Amortizatsiya tannarx MINUS qoldiq qiymatdan: 24 000 x 20% x 3/12 = 1 200 $22 800 tuzog'ini beradi.`),

    q('7.9', 208, 'single', `A company depreciates plant at 25% a year on cost, with a part-year charge for items bought or sold in the year. The year ends on 31 December. Plant at cost was $320,000 on 1 January. On 1 April plant that cost $48,000 was sold. On 1 September new plant costing $72,000 was bought. What is the depreciation charge for the year?`,
      pick(['$77,000', '$74,000', '$86,000', '$80,000'], 0),
`Split the plant into three groups and charge each for the months it was held.
# Step 1: Plant held all year
  (320,000 - 48,000) x 25% = 68,000
# Step 2: Plant sold on 1 April (held 3 months)
  48,000 x 25% x 3/12 = 3,000
# Step 3: Plant bought on 1 September (held 4 months)
  72,000 x 25% x 4/12 = 6,000
# Step 4: Total
  68,000 + 3,000 + 6,000 = 77,000
= Answer: $77,000
! Forgetting the 3 months on the plant sold gives $74,000.`,
`Разделим оборудование на три группы и начислим за месяцы владения.
# Шаг 1: Оборудование весь год
  (320 000 - 48 000) x 25% = 68 000
# Шаг 2: Продано 1 апреля (3 месяца)
  48 000 x 25% x 3/12 = 3 000
# Шаг 3: Куплено 1 сентября (4 месяца)
  72 000 x 25% x 4/12 = 6 000
# Шаг 4: Итог
  68 000 + 3 000 + 6 000 = 77 000
= Ответ: $77 000
! Если забыть 3 месяца по проданному, выйдет $74 000.`,
`Uskunani uch guruhga bo'lib, egalik oylari uchun hisoblaymiz.
# 1-qadam: Butun yil bo'lgan uskuna
  (320 000 - 48 000) x 25% = 68 000
# 2-qadam: 1 aprelda sotilgan (3 oy)
  48 000 x 25% x 3/12 = 3 000
# 3-qadam: 1 sentyabrda sotib olingan (4 oy)
  72 000 x 25% x 4/12 = 6 000
# 4-qadam: Jami
  68 000 + 3 000 + 6 000 = 77 000
= Javob: $77 000
! Sotilgan uskunaning 3 oyini unutsangiz, $74 000 chiqadi.`),

    q('7.11', 208, 'single', `On 1 December a manufacturer received an invoice of $18,000 for upgrading a machine to make it more efficient. The whole amount was charged to repairs. Machinery is depreciated at 20% a year straight line, with a part-year charge in the year of purchase. The year ends on 31 March. By how much is profit understated?`,
      pick(['$16,800', '$18,000', '$15,600', '$14,400'], 0),
`# Step 1: The upgrade improves the machine
  So it is asset expenditure, not a repair. Charging it as an expense makes profit 18,000 too LOW.
# Step 2: Depreciation that should have been charged
  1 December to 31 March = 4 months
  18,000 x 20% x 4/12 = 1,200
# Step 3: Net effect
  18,000 - 1,200 = 16,800
= Answer: $16,800`,
`# Шаг 1: Модернизация улучшает станок
  Значит, это капитальные затраты, а не ремонт. Списание в расход занижает прибыль на 18 000.
# Шаг 2: Амортизация, которую нужно было начислить
  С 1 декабря по 31 марта = 4 месяца
  18 000 x 20% x 4/12 = 1 200
# Шаг 3: Итог
  18 000 - 1 200 = 16 800
= Ответ: $16 800`,
`# 1-qadam: Modernizatsiya dastgohni yaxshilaydi
  Demak, bu kapital xarajat, ta'mir emas. Xarajatga yozish foydani 18 000 ga kamaytiradi.
# 2-qadam: Hisoblanishi kerak bo'lgan amortizatsiya
  1 dekabrdan 31 martgacha = 4 oy
  18 000 x 20% x 4/12 = 1 200
# 3-qadam: Natija
  18 000 - 1 200 = 16 800
= Javob: $16 800`),

    q('7.12', 209, 'number', `A company buys a new machine. Costs: purchase price $64,000; delivery $1,800; installation $3,500; staff training $2,400; materials used in a test run before production started $900. At what cost should the machine be recorded? (in $)`,
      amount(70200, '$70,200'),
`Rule: cost includes everything needed to get the asset to where it will be used and ready to work. Training is not included.
# Step 1: Include
  Price 64,000 + delivery 1,800 + installation 3,500 + testing 900
# Step 2: Leave out
  Staff training 2,400 goes to profit or loss
# Step 3: Total
  64,000 + 1,800 + 3,500 + 900 = 70,200
= Answer: $70,200`,
`Правило: в себестоимость входит всё, что нужно, чтобы доставить актив на место и подготовить к работе. Обучение не входит.
# Шаг 1: Включаем
  Цена 64 000 + доставка 1 800 + установка 3 500 + тестирование 900
# Шаг 2: Не включаем
  Обучение персонала 2 400 — в расходы
# Шаг 3: Итог
  64 000 + 1 800 + 3 500 + 900 = 70 200
= Ответ: $70 200`,
`Qoida: tannarxga aktivni joyiga yetkazish va ishga tayyorlash uchun kerak bo'lgan hamma narsa kiradi. O'qitish kirmaydi.
# 1-qadam: Kiritamiz
  Narx 64 000 + yetkazish 1 800 + o'rnatish 3 500 + sinov 900
# 2-qadam: Kiritmaymiz
  Xodimlarni o'qitish 2 400 — xarajatga
# 3-qadam: Jami
  64 000 + 1 800 + 3 500 + 900 = 70 200
= Javob: $70 200`),

    q('7.13', 209, 'single', `Which entry records buying a non-current asset on credit?`,
      pick([
        'Dr Non-current assets (cost), Cr Receivables',
        'Dr Payables, Cr Non-current assets (cost)',
        'Dr Non-current assets (cost), Cr Payables',
        'Dr Non-current assets (cost), Cr Revaluation surplus',
      ], 2),
`# Step 1: The asset arrives
  Dr Non-current assets (cost): an asset goes up.
# Step 2: It is not paid for yet
  Cr Payables: the business owes the supplier.
= Answer: Dr Non-current assets (cost), Cr Payables
! Receivables would mean someone owes US money. The revaluation surplus is only for revaluations.`,
`# Шаг 1: Актив поступил
  Дт Внеоборотные активы (себестоимость): актив растёт.
# Шаг 2: Ещё не оплачен
  Кт Кредиторы: бизнес должен поставщику.
= Ответ: Дт Внеоборотные активы (себестоимость), Кт Кредиторы
! Дебиторы — это когда должны НАМ. Резерв переоценки — только для переоценок.`,
`# 1-qadam: Aktiv keldi
  Dt Uzoq muddatli aktivlar (tannarx): aktiv oshadi.
# 2-qadam: Hali to'lanmagan
  Kt Kreditorlar: biznes yetkazib beruvchiga qarzdor.
= Javob: Dt Uzoq muddatli aktivlar (tannarx), Kt Kreditorlar
! Debitorlar — BIZGA qarzdorlar. Qayta baholash zaxirasi faqat qayta baholash uchun.`),

    q('7.15', 210, 'matrix', `Is each statement true or false?`,
      grid(TF, [
        ['The carrying amount of a non-current asset is its cost or valuation less accumulated depreciation.', 0],
        ['Once the useful life of a non-current asset has been set, it can never be changed.', 1],
      ]),
`Check each against IAS 16.
- Carrying amount = cost (or valuation) - accumulated depreciation: TRUE.
- Useful life fixed for ever: FALSE. IAS 16 says it must be reviewed regularly and changed if expectations change.`,
`Сверим с IAS 16.
- Балансовая стоимость = себестоимость (или оценка) - накопленная амортизация: ВЕРНО.
- Срок службы нельзя менять: НЕВЕРНО. IAS 16 требует регулярно его пересматривать и менять, если ожидания изменились.`,
`IAS 16 bilan solishtiramiz.
- Balans qiymati = tannarx (yoki baho) - jamg'arilgan amortizatsiya: TO'G'RI.
- Xizmat muddatini o'zgartirib bo'lmaydi: NOTO'G'RI. IAS 16 uni muntazam qayta ko'rib chiqishni va kutilganlar o'zgarsa o'zgartirishni talab qiladi.`),

    q('8.3', 211, 'single', `On 1 February a business bought plant for $45,000. The payment was correctly recorded in cash but debited to the plant repairs account. Plant is depreciated at 20% a year straight line, nil residual value, with a part-year charge in the year of purchase. The year ends on 30 April. How is profit affected?`,
      pick(['Understated by $42,750', 'Understated by $45,000', 'Understated by $36,000', 'Overstated by $2,250'], 0),
`# Step 1: The wrong expense
  45,000 charged to repairs, so profit is 45,000 too LOW.
# Step 2: The missing depreciation
  1 February to 30 April = 3 months
  45,000 x 20% x 3/12 = 2,250, so profit is 2,250 too HIGH.
# Step 3: Net
  45,000 - 2,250 = 42,750 understated
= Answer: understated by $42,750
! A full year's depreciation (9,000) gives the $36,000 trap.`,
`# Шаг 1: Лишний расход
  45 000 списали на ремонт, прибыль на 45 000 НИЖЕ.
# Шаг 2: Недостающая амортизация
  С 1 февраля по 30 апреля = 3 месяца
  45 000 x 20% x 3/12 = 2 250, прибыль на 2 250 ВЫШЕ.
# Шаг 3: Итог
  45 000 - 2 250 = занижена на 42 750
= Ответ: занижена на $42 750
! Амортизация за полный год (9 000) даёт ловушку $36 000.`,
`# 1-qadam: Ortiqcha xarajat
  45 000 ta'mirga yozildi, foyda 45 000 ga PAST.
# 2-qadam: Yetishmayotgan amortizatsiya
  1 fevraldan 30 aprelgacha = 3 oy
  45 000 x 20% x 3/12 = 2 250, foyda 2 250 ga YUQORI.
# 3-qadam: Natija
  45 000 - 2 250 = 42 750 ga kamaytirilgan
= Javob: $42 750 ga kamaytirilgan
! To'liq yil amortizatsiyasi (9 000) $36 000 tuzog'ini beradi.`),

    q('8.4', 211, 'single', `A business bought a lorry on 1 August for $43,000. It has a useful life of four years and a residual value of $7,000. Depreciation is straight line, with a part-year charge in the year of purchase. The year ends on 31 December. What is the depreciation charge for this year?`,
      pick(['$3,750', '$9,000', '$3,000', '$4,500'], 0),
`# Step 1: Full-year charge
  (43,000 - 7,000) / 4 = 9,000
# Step 2: Months held this year
  1 August to 31 December = 5 months
# Step 3: Part-year charge
  9,000 x 5/12 = 3,750
= Answer: $3,750`,
`# Шаг 1: Амортизация за полный год
  (43 000 - 7 000) / 4 = 9 000
# Шаг 2: Месяцы владения в этом году
  С 1 августа по 31 декабря = 5 месяцев
# Шаг 3: За часть года
  9 000 x 5/12 = 3 750
= Ответ: $3 750`,
`# 1-qadam: To'liq yil amortizatsiyasi
  (43 000 - 7 000) / 4 = 9 000
# 2-qadam: Shu yilgi egalik oylari
  1 avgustdan 31 dekabrgacha = 5 oy
# 3-qadam: Yil qismi uchun
  9 000 x 5/12 = 3 750
= Javob: $3 750`),

    q('8.6', 212, 'single', `Which best explains "asset expenditure" (capital expenditure)?`,
      pick([
        'Spending on non-current assets, including repairs and maintenance',
        'Spending on expensive items',
        'Spending on issuing shares',
        'Spending on buying or improving non-current assets',
      ], 3),
`Asset expenditure buys a non-current asset or improves one.
- Repairs and maintenance keep an asset as it was, so they are expenses, not asset expenditure.
- Price alone does not decide it: a costly repair is still a repair.
- Issuing shares is about finance, not assets.
= Answer: spending on buying or improving non-current assets`,
`Капитальные затраты — это покупка или улучшение внеоборотного актива.
- Ремонт и обслуживание сохраняют актив в прежнем виде, поэтому это расходы.
- Цена сама по себе не решает: дорогой ремонт — всё равно ремонт.
- Выпуск акций — это финансирование, а не активы.
= Ответ: затраты на покупку или улучшение внеоборотных активов`,
`Kapital xarajat — uzoq muddatli aktivni sotib olish yoki yaxshilash.
- Ta'mir va xizmat aktivni avvalgi holatda saqlaydi, shuning uchun ular xarajat.
- Faqat narx hal qilmaydi: qimmat ta'mir ham ta'mir.
- Aksiya chiqarish — moliyalash, aktiv emas.
= Javob: uzoq muddatli aktivlarni sotib olish yoki yaxshilash xarajatlari`),

    q('8.7', 212, 'single', `Which of these is asset expenditure for a hair salon?`,
      pick([
        'Replacing a broken mirror',
        'Repainting the salon',
        'A new illuminated sign over the door showing the salon name',
        'Cleaning the floors',
      ], 2),
`Ask: does it buy something new that will help for years, or just keep things as they were?
- Broken mirror, repainting, cleaning: they restore or maintain, so they are expenses.
- The new sign: a new item that will benefit the salon for years. YES.
= Answer: the new illuminated sign`,
`Спросим: покупается ли что-то новое на годы, или просто поддерживается прежнее состояние?
- Разбитое зеркало, покраска, уборка: восстановление или поддержание, это расходы.
- Новая вывеска: новый предмет, полезный салону годами. ДА.
= Ответ: новая световая вывеска`,
`So'raymiz: yillar davomida foyda beradigan yangi narsa olinyaptimi yoki shunchaki avvalgi holat saqlanyaptimi?
- Singan oyna, bo'yash, tozalash: tiklash yoki saqlash, bular xarajat.
- Yangi lavha: salonga yillar davomida foyda beradigan yangi narsa. HA.
= Javob: yangi yoritilgan lavha`),

    q('8.8', 212, 'single', `The invoice for a new company car includes these items. Which is an expense in the statement of profit or loss?`,
      pick(['Road tax', 'Number plates', 'A fitted sound system', 'Delivery'], 0),
`Rule: costs needed to get the car ready for use are part of its cost. Running costs are expenses.
- Number plates, a fitted sound system, delivery: part of the car's cost.
- Road tax: a yearly running cost of using the car. It is an expense.
= Answer: road tax`,
`Правило: затраты, нужные, чтобы подготовить машину к работе, входят в её стоимость. Текущие затраты — расходы.
- Номера, установленная аудиосистема, доставка: входят в стоимость машины.
- Транспортный налог: ежегодные затраты на эксплуатацию. Это расход.
= Ответ: транспортный налог`,
`Qoida: mashinani ishga tayyorlash xarajatlari uning qiymatiga kiradi. Joriy xarajatlar — xarajat.
- Raqamlar, o'rnatilgan audio tizim, yetkazish: mashina qiymatiga kiradi.
- Transport solig'i: foydalanishning yillik xarajati. Bu xarajat.
= Javob: transport solig'i`),

    q('8.9', 212, 'single', `A business registered for sales tax receives this invoice for new equipment: equipment $46,500; delivery $1,350; one-year maintenance contract $4,200; sales tax $10,410; total $62,460. What is the asset expenditure on the invoice?`,
      pick(['$46,500', '$47,850', '$52,050', '$62,460'], 1),
`# Step 1: Include
  Equipment 46,500 + delivery 1,350 = 47,850
# Step 2: Leave out
  Maintenance 4,200: a running cost, so an expense.
  Sales tax 10,410: the business is registered, so it gets the tax back.
= Answer: $47,850`,
`# Шаг 1: Включаем
  Оборудование 46 500 + доставка 1 350 = 47 850
# Шаг 2: Не включаем
  Обслуживание 4 200: текущие затраты, это расход.
  Налог 10 410: бизнес зарегистрирован, налог ему возмещают.
= Ответ: $47 850`,
`# 1-qadam: Kiritamiz
  Uskuna 46 500 + yetkazish 1 350 = 47 850
# 2-qadam: Kiritmaymiz
  Xizmat 4 200: joriy xarajat, bu xarajat.
  Soliq 10 410: biznes ro'yxatdan o'tgan, soliq unga qaytariladi.
= Javob: $47 850`),

    q('8.10', 212, 'single', `Which of these could be a non-current asset?`,
      pick([
        'A tax refund due next year',
        'A car held for resale by a car dealer',
        'A computer used in the office',
        'Cleaning products for the office floors',
      ], 2),
`Ask: is it kept for use over several years?
- Tax refund due: an amount receivable, a current asset.
- Car held for resale: inventory.
- Office computer: used for years. YES.
- Cleaning products: used up quickly, an expense or inventory.
= Answer: a computer used in the office`,
`Спросим: держат ли его для использования несколько лет?
- Возврат налога: дебиторская задолженность, оборотный актив.
- Машина для перепродажи: запасы.
- Офисный компьютер: используется годами. ДА.
- Чистящие средства: быстро расходуются, расход или запасы.
= Ответ: компьютер, используемый в офисе`,
`So'raymiz: u bir necha yil foydalanish uchun saqlanadimi?
- Soliq qaytarilishi: debitorlik, joriy aktiv.
- Qayta sotish uchun mashina: zaxira.
- Ofis kompyuteri: yillar davomida ishlatiladi. HA.
- Tozalash vositalari: tez sarflanadi, xarajat yoki zaxira.
= Javob: ofisda ishlatiladigan kompyuter`),

    q('8.12', 212, 'single', `Which statement describes current assets?`,
      pick([
        "Assets currently on the business's premises",
        "Assets used to run the business's current activities",
        'Assets expected to be turned into cash in the short term',
        'Assets not expected to be turned into cash in the short term',
      ], 2),
`Current assets are cash, and items expected to become cash soon, usually within 12 months: inventory and receivables, for example.
- Where an asset sits, or what it is used for, does not decide it.
- Not turning into cash soon: that describes non-current assets.
= Answer: assets expected to be turned into cash in the short term`,
`Оборотные активы — это деньги и то, что скоро станет деньгами, обычно в течение 12 месяцев: например, запасы и дебиторы.
- Где лежит актив или для чего используется — не решает.
- Не превращаются в деньги скоро: так описывают внеоборотные активы.
= Ответ: активы, которые ожидается превратить в деньги в краткосрочной перспективе`,
`Joriy aktivlar — pul va tez orada pulga aylanadigan narsalar, odatda 12 oy ichida: masalan, zaxira va debitorlar.
- Aktiv qayerda turishi yoki nima uchun ishlatilishi hal qilmaydi.
- Tez pulga aylanmaydi: bu uzoq muddatli aktivlar tavsifi.
= Javob: qisqa muddatda pulga aylanishi kutilgan aktivlar`),

    q('8.13', 212, 'single', `A business buys a van on credit for $24,000 on 31 August. Vans are depreciated at 20% a year reducing balance, with a part-year charge. The year ends on 31 October. What is the entry for the purchase, and the depreciation charge for the year?`,
      pick([
        'Dr Non-current assets $24,000, Cr Payables $24,000; depreciation $800',
        'Dr Payables $24,000, Cr Non-current assets $24,000; depreciation $800',
        'Dr Non-current assets $24,000, Cr Payables $24,000; depreciation $4,800',
        'Dr Payables $24,000, Cr Non-current assets $24,000; depreciation $4,800',
      ], 0),
`# Step 1: The purchase
  An asset bought on credit: Dr Non-current assets, Cr Payables.
# Step 2: Months held this year
  31 August to 31 October = 2 months
# Step 3: Depreciation
  First year, so the reducing balance starts from cost.
  24,000 x 20% x 2/12 = 800
= Answer: Dr Non-current assets, Cr Payables $24,000; depreciation $800`,
`# Шаг 1: Покупка
  Актив в кредит: Дт Внеоборотные активы, Кт Кредиторы.
# Шаг 2: Месяцы владения в этом году
  С 31 августа по 31 октября = 2 месяца
# Шаг 3: Амортизация
  Первый год, поэтому уменьшаемый остаток начинается с себестоимости.
  24 000 x 20% x 2/12 = 800
= Ответ: Дт Внеоборотные активы, Кт Кредиторы $24 000; амортизация $800`,
`# 1-qadam: Xarid
  Kreditga aktiv: Dt Uzoq muddatli aktivlar, Kt Kreditorlar.
# 2-qadam: Shu yilgi egalik oylari
  31 avgustdan 31 oktyabrgacha = 2 oy
# 3-qadam: Amortizatsiya
  Birinchi yil, shuning uchun kamayuvchi qoldiq tannarxdan boshlanadi.
  24 000 x 20% x 2/12 = 800
= Javob: Dt Uzoq muddatli aktivlar, Kt Kreditorlar $24 000; amortizatsiya $800`),

    q('8.16', 213, 'single', `An asset was bought for $120,000 at the start of Year 1. It had a useful life of six years, depreciated straight line. At the start of Year 3 the REMAINING useful life was revised to five years. What is the carrying amount at the end of Year 3?`,
      pick(['$64,000', '$60,000', '$80,000', '$56,000'], 0),
`# Step 1: Carrying amount at the start of Year 3
  120,000 / 6 = 20,000 a year
  120,000 - (20,000 x 2) = 80,000
# Step 2: New charge from Year 3
  Spread what is left over the new remaining life
  80,000 / 5 = 16,000
# Step 3: Carrying amount at the end of Year 3
  80,000 - 16,000 = 64,000
= Answer: $64,000
! A change in useful life is not a correction of the past. Only future charges change.`,
`# Шаг 1: Балансовая стоимость на начало 3-го года
  120 000 / 6 = 20 000 в год
  120 000 - (20 000 x 2) = 80 000
# Шаг 2: Новая амортизация с 3-го года
  Остаток делим на новый оставшийся срок
  80 000 / 5 = 16 000
# Шаг 3: Балансовая стоимость на конец 3-го года
  80 000 - 16 000 = 64 000
= Ответ: $64 000
! Изменение срока службы — не исправление прошлого. Меняются только будущие начисления.`,
`# 1-qadam: 3-yil boshidagi balans qiymati
  120 000 / 6 = yiliga 20 000
  120 000 - (20 000 x 2) = 80 000
# 2-qadam: 3-yildan yangi amortizatsiya
  Qolganini yangi qolgan muddatga bo'lamiz
  80 000 / 5 = 16 000
# 3-qadam: 3-yil oxiridagi balans qiymati
  80 000 - 16 000 = 64 000
= Javob: $64 000
! Xizmat muddatini o'zgartirish o'tmishni tuzatish emas. Faqat kelgusi hisoblar o'zgaradi.`),

    q('8.17', 213, 'single', `A machine was bought on 1 October Year 1 for $50,000. Useful life five years, residual value $5,000, straight line. On 1 October Year 3 the residual value was revised to $2,000. What is the depreciation charge for the year to 30 September Year 4?`,
      pick(['$10,000', '$9,000', '$9,600', '$10,667'], 0),
`# Step 1: Carrying amount on 1 October Year 3
  (50,000 - 5,000) / 5 = 9,000 a year
  50,000 - (9,000 x 2) = 32,000
# Step 2: Remaining life
  5 - 2 = 3 years
# Step 3: New charge
  (32,000 - 2,000) / 3 = 10,000
= Answer: $10,000
! Take the NEW residual value off before dividing. 32,000 / 3 gives the $10,667 trap.`,
`# Шаг 1: Балансовая стоимость на 1 октября 3-го года
  (50 000 - 5 000) / 5 = 9 000 в год
  50 000 - (9 000 x 2) = 32 000
# Шаг 2: Оставшийся срок
  5 - 2 = 3 года
# Шаг 3: Новая амортизация
  (32 000 - 2 000) / 3 = 10 000
= Ответ: $10 000
! Перед делением вычтите НОВУЮ ликвидационную стоимость. 32 000 / 3 даёт ловушку $10 667.`,
`# 1-qadam: 3-yil 1 oktyabrdagi balans qiymati
  (50 000 - 5 000) / 5 = yiliga 9 000
  50 000 - (9 000 x 2) = 32 000
# 2-qadam: Qolgan muddat
  5 - 2 = 3 yil
# 3-qadam: Yangi amortizatsiya
  (32 000 - 2 000) / 3 = 10 000
= Javob: $10 000
! Bo'lishdan oldin YANGI qoldiq qiymatni ayiring. 32 000 / 3 $10 667 tuzog'ini beradi.`),

    q('8.18', 213, 'single', `A machine was bought for $90,000. It has a useful life of 12 years and a residual value of $18,000, depreciated straight line. What entry records the depreciation for its third year?`,
      pick([
        'Dr Depreciation expense $6,000, Cr Accumulated depreciation $6,000',
        'Dr Depreciation expense $6,000, Dr Non-current assets $12,000, Cr Accumulated depreciation $18,000',
        'Dr Accumulated depreciation $6,000, Cr Depreciation expense $6,000',
        'Dr Accumulated depreciation $18,000, Cr Non-current assets $18,000',
      ], 0),
`# Step 1: Yearly charge
  (90,000 - 18,000) / 12 = 6,000
# Step 2: The entry, the same every year
  Dr Depreciation expense (profit or loss)
  Cr Accumulated depreciation (reduces the asset)
= Answer: Dr Depreciation expense $6,000, Cr Accumulated depreciation $6,000
! Each year records only that year's charge. The $18,000 built up over three years is not posted again.`,
`# Шаг 1: Годовая амортизация
  (90 000 - 18 000) / 12 = 6 000
# Шаг 2: Проводка, каждый год одинаковая
  Дт Расход на амортизацию (прибыль или убыток)
  Кт Накопленная амортизация (уменьшает актив)
= Ответ: Дт Расход на амортизацию $6 000, Кт Накопленная амортизация $6 000
! Каждый год записывают только начисление за этот год. Накопленные за три года $18 000 повторно не проводят.`,
`# 1-qadam: Yillik amortizatsiya
  (90 000 - 18 000) / 12 = 6 000
# 2-qadam: Yozuv, har yili bir xil
  Dt Amortizatsiya xarajati (foyda yoki zarar)
  Kt Jamg'arilgan amortizatsiya (aktivni kamaytiradi)
= Javob: Dt Amortizatsiya xarajati $6 000, Kt Jamg'arilgan amortizatsiya $6 000
! Har yili faqat shu yilgi hisob yoziladi. Uch yilda yig'ilgan $18 000 qayta yozilmaydi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
