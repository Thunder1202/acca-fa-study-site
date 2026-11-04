'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-06';
  const questions = [
    {
      id: 'ch06-q171',
      kitRef: 171,
      topicId: 'chapter-06',
      type: 'single',
      text: 'A shop\'s asset register shows a total carrying amount of $62,400. Its general ledger shows asset cost of $140,000 and accumulated depreciation of $40,000. Which explanation accounts for the difference?',
      explanation: {
        en: `Bring both records to the same correct figure. Whichever option makes them agree is the answer.
# Step 1: Carrying amount in the ledger
  Cost $140,000 - accumulated depreciation $40,000 = $100,000
# Step 2: Try option C
  The ledger missed a disposal: carrying amount $18,000 - $8,000 = $10,000. Ledger: $100,000 - $10,000 = $90,000
  The register missed a land purchase: $62,400 + $27,600 = $90,000
= Both now show $90,000, so option C explains the difference.
! Tip: in reconciliation questions, correct each record with only the items it missed, then check they meet.`,
        ru: `Приведите обе записи к одной верной цифре. Вариант, при котором они совпадут, и есть ответ.
# Шаг 1: Балансовая стоимость в главной книге
  Стоимость $140,000 - накопленная амортизация $40,000 = $100,000
# Шаг 2: Пробуем вариант C
  В книге пропущено выбытие: балансовая $18,000 - $8,000 = $10,000. Книга: $100,000 - $10,000 = $90,000
  В реестре пропущена покупка земли: $62,400 + $27,600 = $90,000
= Обе теперь $90,000, значит вариант C объясняет разницу.
! Совет: в задачах на сверку исправляйте каждую запись только на то, что в ней пропущено, и проверяйте, сошлись ли они.`,
        uz: `Ikkala yozuvni bir xil to'g'ri songa keltiring. Ularni mos keltiradigan variant javob.
# 1-qadam: Bosh kitobdagi balans qiymati
  Qiymat $140,000 - to'plangan amortizatsiya $40,000 = $100,000
# 2-qadam: C variantni sinaymiz
  Kitobda chiqish tushib qolgan: balans qiymati $18,000 - $8,000 = $10,000. Kitob: $100,000 - $10,000 = $90,000
  Reyestrda yer xaridi tushib qolgan: $62,400 + $27,600 = $90,000
= Ikkalasi endi $90,000, demak C variant farqni tushuntiradi.
! Maslahat: solishtirish masalalarida har bir yozuvni faqat unda tushib qolgani bilan tuzating va mos kelishini tekshiring.`,
      },
      options: [
        'A land purchase of $27,600 was missed from the ledger, and the disposal of an asset (cost $18,000, accumulated depreciation $8,000) was missed from the register',
        'An upward revaluation of $15,000 and a depreciation charge of $12,000 were missed from the ledger, and the disposal of an asset with carrying amount $10,000 was missed from the register',
        'The disposal of an asset (cost $18,000, accumulated depreciation $8,000) was missed from the ledger, and a land purchase of $27,600 was missed from the register',
        'A depreciation charge of $20,000 was missed from the register, and an upward revaluation of $12,000 was missed from the ledger',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch06-q173',
      kitRef: 173,
      topicId: 'chapter-06',
      type: 'single',
      text: 'Which statement about the non-current asset register is true?',
      explanation: {
        en: `The asset register is a detailed list about each asset, kept separately from the ledger and checked against it.
- Another name for the ledger account: no, it is a separate record.
- Lists assets but not their cost: no, cost is one of the main details.
- A maintenance timetable: no.
- Records cost, date, location, depreciation and carrying amount: yes.
= Answer: it records the cost, date, location, depreciation and carrying amount of each asset`,
        ru: `Реестр активов — подробный список по каждому активу, отдельный от главной книги и сверяемый с ней.
- Другое название счёта книги: нет, это отдельная запись.
- Перечисляет активы без стоимости: нет, стоимость — одна из главных данных.
- График обслуживания: нет.
- Хранит стоимость, дату, место, амортизацию и балансовую стоимость: да.
= Ответ: он хранит стоимость, дату, местонахождение, амортизацию и балансовую стоимость каждого актива`,
        uz: `Aktivlar reyestri — har bir aktiv haqida batafsil ro'yxat, bosh kitobdan alohida va u bilan solishtiriladi.
- Kitob hisobining boshqa nomi: yo'q, bu alohida yozuv.
- Aktivlarni qiymatsiz sanaydi: yo'q, qiymat asosiy ma'lumotlardan biri.
- Texnik xizmat jadvali: yo'q.
- Qiymat, sana, joy, amortizatsiya va balans qiymatini saqlaydi: ha.
= Javob: u har bir aktivning qiymati, sanasi, joyi, amortizatsiyasi va balans qiymatini yozadi`,
      },
      options: [
        'It is another name for the non-current asset account in the general ledger',
        'It lists the physical assets but not their cost',
        'It is a timetable of planned maintenance for engineers',
        'It records the cost, date, location, depreciation and carrying amount of each asset',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch06-q174',
      kitRef: 174,
      topicId: 'chapter-06',
      type: 'number',
      text: 'A company\'s plant and equipment cost account for the year to 31 December: balance b/f $800,000; 1 April purchases $120,000; 30 June disposal of plant that cost $60,000; balance c/f $860,000. Depreciation is 20% straight line, charged monthly on the exact months owned. What is the depreciation charge in profit or loss?',
      explanation: {
        en: `Monthly basis: each asset is charged only for the months it was owned this year.
# Step 1: Plant owned all year
  Opening $800,000 less the $60,000 sold = $740,000
  20% × $740,000 = $148,000
# Step 2: Plant sold on 30 June (owned 6 months)
  20% × $60,000 × 6/12 = $6,000
# Step 3: Plant bought on 1 April (owned 9 months)
  20% × $120,000 × 9/12 = $18,000
= Answer: $148,000 + $6,000 + $18,000 = $172,000
! Common trap: charging a full year on the closing balance ($860,000 × 20% = $172,000 only by coincidence here). Always split by months owned.`,
        ru: `Помесячно: каждый актив амортизируют только за месяцы владения в этом году.
# Шаг 1: Оборудование, которым владели весь год
  На начало $800,000 минус проданные $60,000 = $740,000
  20% × $740,000 = $148,000
# Шаг 2: Продано 30 июня (6 месяцев)
  20% × $60,000 × 6/12 = $6,000
# Шаг 3: Куплено 1 апреля (9 месяцев)
  20% × $120,000 × 9/12 = $18,000
= Ответ: $148,000 + $6,000 + $18,000 = $172,000
! Частая ошибка: начислить полный год на остаток на конец ($860,000 × 20% = $172,000 здесь лишь совпадение). Всегда делите по месяцам владения.`,
        uz: `Oylik usul: har bir aktiv faqat shu yilda egalik qilingan oylar uchun amortizatsiya qilinadi.
# 1-qadam: Butun yil egalik qilingan uskuna
  Boshida $800,000 minus sotilgan $60,000 = $740,000
  20% × $740,000 = $148,000
# 2-qadam: 30 iyunda sotilgan (6 oy)
  20% × $60,000 × 6/12 = $6,000
# 3-qadam: 1 aprelda olingan (9 oy)
  20% × $120,000 × 9/12 = $18,000
= Javob: $148,000 + $6,000 + $18,000 = $172,000
! Ko'p uchraydigan xato: yakuniy qoldiqqa to'liq yil hisoblash ($860,000 × 20% = $172,000 bu yerda tasodifan mos). Doim egalik oylariga bo'ling.`,
      },
      correctValue: 172000,
      answerText: '$172,000',
    },
    {
      id: 'ch06-q175',
      kitRef: 175,
      topicId: 'chapter-06',
      type: 'number',
      text: 'On 1 January a company bought a machine. The invoice shows: price $60,000, delivery $1,500 and a two-year breakdown warranty $900. Alterations costing $3,000 were also needed to the building so the machine could be installed. What amount should be capitalised for the machine?',
      explanation: {
        en: `Capitalise what is needed to get the machine working. Leave out running costs.
# Part of cost
  Price $60,000
  Delivery $1,500
  Building alterations needed to install it $3,000
# Not part of cost
  Breakdown warranty $900: a running cost, charged to profit or loss
= Answer: $60,000 + $1,500 + $3,000 = $64,500`,
        ru: `Капитализируем то, что нужно, чтобы станок заработал. Текущие расходы — нет.
# Входит в стоимость
  Цена $60,000
  Доставка $1,500
  Переделка здания для установки $3,000
# Не входит
  Гарантия от поломок $900: текущий расход, в прибыль или убыток
= Ответ: $60,000 + $1,500 + $3,000 = $64,500`,
        uz: `Dastgohni ishga tushirish uchun kerak bo'lganini kapitallashtiramiz. Joriy xarajatlar — yo'q.
# Qiymatga kiradi
  Narx $60,000
  Yetkazish $1,500
  O'rnatish uchun binoni o'zgartirish $3,000
# Kirmaydi
  Buzilish kafolati $900: joriy xarajat, foyda yoki zararga
= Javob: $60,000 + $1,500 + $3,000 = $64,500`,
      },
      correctValue: 64500,
      answerText: '$64,500',
    },
    {
      id: 'ch06-q178',
      kitRef: 178,
      topicId: 'chapter-06',
      type: 'number',
      text: 'A company bought a new press for $120,000. Installation cost $7,500. Training the staff to use it cost $3,000. Safety testing before the first job cost $2,000. What should the press be shown at in the statement of financial position, before any depreciation?',
      explanation: {
        en: `Include everything needed to bring the press into working condition.
# Part of cost
  Price $120,000 + installation $7,500 + safety testing $2,000
# Not part of cost
  Staff training $3,000: never capitalised, it is an expense
= Answer: $120,000 + $7,500 + $2,000 = $129,500`,
        ru: `Включаем всё, что нужно, чтобы пресс заработал.
# Входит в стоимость
  Цена $120,000 + установка $7,500 + проверка безопасности $2,000
# Не входит
  Обучение персонала $3,000: никогда не капитализируется, это расход
= Ответ: $120,000 + $7,500 + $2,000 = $129,500`,
        uz: `Pressni ish holatiga keltirish uchun kerak bo'lgan hamma narsani qo'shamiz.
# Qiymatga kiradi
  Narx $120,000 + o'rnatish $7,500 + xavfsizlik sinovi $2,000
# Kirmaydi
  Xodimlarni o'qitish $3,000: hech qachon kapitallashtirilmaydi, bu xarajat
= Javob: $120,000 + $7,500 + $2,000 = $129,500`,
      },
      correctValue: 129500,
      answerText: '$129,500',
    },
    {
      id: 'ch06-q181',
      kitRef: 181,
      topicId: 'chapter-06',
      type: 'single',
      text: 'Which of the following is asset (capital) expenditure?',
      explanation: {
        en: `Capital expenditure buys or improves an asset used for years.
- Redecorating: keeps things tidy, an expense.
- Repairing a storm-damaged roof: puts things back as they were, an expense.
- A retailer buying laptops to sell: these are inventory, not assets it keeps.
- Legal fees when buying a building: part of the building's cost, so capital.
= Answer: legal fees paid when buying a building`,
        ru: `Капитальные затраты покупают или улучшают актив, которым пользуются годами.
- Ремонт офиса (отделка): поддержание, расход.
- Ремонт крыши после бури: возвращает как было, расход.
- Магазин покупает ноутбуки для продажи: это запасы, а не активы для пользования.
- Юридические расходы при покупке здания: часть стоимости здания, капитальные.
= Ответ: юридические расходы при покупке здания`,
        uz: `Kapital xarajat yillar ishlatiladigan aktivni sotib oladi yoki yaxshilaydi.
- Ofisni bezatish: tartibni saqlash, xarajat.
- Bo'ronda shikastlangan tomni ta'mirlash: avvalgi holatga qaytaradi, xarajat.
- Do'kon sotish uchun noutbuk oladi: bu zaxira, foydalaniladigan aktiv emas.
- Bino sotib olishdagi yuridik xarajatlar: bino qiymatining qismi, kapital.
= Javob: bino sotib olishda to'langan yuridik xarajatlar`,
      },
      options: [
        'Redecorating the offices',
        'Repairing a roof damaged in a storm',
        'A computer retailer buying laptops to sell',
        'Legal fees paid when buying a building',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch06-q184',
      kitRef: 184,
      topicId: 'chapter-06',
      type: 'single',
      text: 'Which statement best describes depreciation?',
      explanation: {
        en: `Depreciation spreads the COST of an asset over the years it is used.
- Spreading the payment: no, the asset may have been paid for in full on day one.
- Tracking market value: no, the carrying amount is not what it would sell for.
- Spreading the cost over its useful life: yes.
- Saving up to replace it: no, no cash is set aside.
= Answer: it spreads the cost of an asset over its useful life`,
        ru: `Амортизация распределяет СТОИМОСТЬ актива по годам использования.
- Распределяет оплату: нет, актив могли оплатить целиком в первый день.
- Отслеживает рыночную цену: нет, балансовая стоимость — не цена продажи.
- Распределяет стоимость по сроку использования: да.
- Копит на замену: нет, деньги не откладываются.
= Ответ: она распределяет стоимость актива по сроку его полезного использования`,
        uz: `Amortizatsiya aktiv QIYMATINI foydalanish yillariga taqsimlaydi.
- To'lovni taqsimlaydi: yo'q, aktiv birinchi kuni to'liq to'langan bo'lishi mumkin.
- Bozor narxini kuzatadi: yo'q, balans qiymati sotish narxi emas.
- Qiymatni foydali muddatga taqsimlaydi: ha.
- Almashtirish uchun pul yig'adi: yo'q, pul ajratilmaydi.
= Javob: u aktiv qiymatini foydali muddatiga taqsimlaydi`,
      },
      options: [
        'It spreads the payment for an asset over a period of years',
        'It records the fall in the market value of an asset',
        'It spreads the cost of an asset over its useful life',
        'It builds up the money needed to replace the asset',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch06-q186',
      kitRef: 186,
      topicId: 'chapter-06',
      type: 'single',
      text: 'When is the reducing balance method more appropriate than straight line?',
      explanation: {
        en: `Reducing balance charges a lot early on and less later. So it suits assets that give most of their benefit when they are new.
# Example
  A new van is used heavily and rarely breaks down. After a few years it is used less and repaired more.
- No residual value, uncertain life, or quick replacement do not decide the method.
= Answer: when the asset is expected to give more benefit in its early years than later`,
        ru: `Метод уменьшаемого остатка начисляет много вначале и меньше потом. Он подходит активам, которые приносят больше пользы, пока новые.
# Пример
  Новый фургон много ездит и редко ломается. Через несколько лет им пользуются меньше и чаще чинят.
- Отсутствие ликвидационной стоимости, неясный срок или скорая замена метод не определяют.
= Ответ: когда актив, как ожидается, приносит больше пользы в первые годы`,
        uz: `Kamayuvchi qoldiq boshida ko'p, keyin kam hisoblaydi. U yangi paytida ko'proq naf beradigan aktivlarga mos.
# Misol
  Yangi furgon ko'p yuradi va kam buziladi. Bir necha yildan keyin kamroq ishlatiladi va ko'proq ta'mirlanadi.
- Tugatish qiymati yo'qligi, muddat noaniqligi yoki tez almashtirish usulni belgilamaydi.
= Javob: aktiv dastlabki yillarda ko'proq naf berishi kutilganda`,
      },
      options: [
        'When the asset has no residual value',
        'When the useful life cannot be estimated',
        'When the asset is expected to give more benefit in its early years than later',
        'When the asset will be replaced after a short period',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch06-q189',
      kitRef: 189,
      topicId: 'chapter-06',
      type: 'number',
      text: 'A business bought a printing machine for $30,000 on 1 July 20X7, expecting a useful life of ten years and a residual value of $3,000. On 1 July 20X8 it revised the estimates: a remaining useful life of six years and no residual value. What is the depreciation charge for the year ended 30 June 20X9?',
      explanation: {
        en: `When estimates change: carrying amount now, less new residual value, over remaining life.
# Step 1: The first year's charge (old estimates)
  ($30,000 - $3,000) / 10 years = $2,700
# Step 2: Carrying amount on 1 July 20X8
  $30,000 - $2,700 = $27,300
# Step 3: The new charge from 1 July 20X8
  New residual value: $0. Remaining life: 6 years
  $27,300 / 6 = $4,550
= Answer: $4,550
! The new estimates apply from the start of the year, before that year's depreciation is charged.`,
        ru: `При изменении оценок: балансовая стоимость сейчас минус новая ликвидационная, делённое на оставшийся срок.
# Шаг 1: Амортизация первого года (старые оценки)
  ($30,000 - $3,000) / 10 лет = $2,700
# Шаг 2: Балансовая стоимость на 1 июля 20X8
  $30,000 - $2,700 = $27,300
# Шаг 3: Новая сумма с 1 июля 20X8
  Новая ликвидационная стоимость: $0. Оставшийся срок: 6 лет
  $27,300 / 6 = $4,550
= Ответ: $4,550
! Новые оценки действуют с начала года, до начисления амортизации за этот год.`,
        uz: `Baholar o'zgarganda: hozirgi balans qiymati minus yangi tugatish qiymati, qolgan muddatga bo'linadi.
# 1-qadam: Birinchi yil amortizatsiyasi (eski baholar)
  ($30,000 - $3,000) / 10 yil = $2,700
# 2-qadam: 20X8 yil 1 iyuldagi balans qiymati
  $30,000 - $2,700 = $27,300
# 3-qadam: 20X8 yil 1 iyuldan yangi summa
  Yangi tugatish qiymati: $0. Qolgan muddat: 6 yil
  $27,300 / 6 = $4,550
= Javob: $4,550
! Yangi baholar yil boshidan, shu yil amortizatsiyasi hisoblanishidan oldin qo'llanadi.`,
      },
      correctValue: 4550,
      answerText: '$4,550',
    },
    {
      id: 'ch06-q201',
      kitRef: 201,
      topicId: 'chapter-06',
      type: 'number',
      text: 'On 1 January 20X8 a company bought a property for $900,000. The same day it paid legal costs of $9,000, architect\'s fees of $12,000, an annual maintenance contract of $7,500 and $30,000 for alterations. The property is depreciated over 25 years on a straight-line basis. What is its carrying amount at 31 December 20X8?',
      explanation: {
        en: `First find the full cost, then take off one year's depreciation.
# Step 1: What is part of the cost?
  Price $900,000 + legal costs $9,000 + architect's fees $12,000 + alterations $30,000 = $951,000
  The maintenance contract ($7,500) is a running cost, so it is an expense
# Step 2: One year's depreciation
  $951,000 / 25 years = $38,040
# Step 3: Carrying amount at the year end
  $951,000 - $38,040 = $912,960
= Answer: $912,960`,
        ru: `Сначала найдём полную стоимость, затем вычтем амортизацию за год.
# Шаг 1: Что входит в стоимость?
  Цена $900,000 + юридические $9,000 + архитектор $12,000 + переделки $30,000 = $951,000
  Договор обслуживания ($7,500) — текущий расход
# Шаг 2: Амортизация за год
  $951,000 / 25 лет = $38,040
# Шаг 3: Балансовая стоимость на конец года
  $951,000 - $38,040 = $912,960
= Ответ: $912,960`,
        uz: `Avval to'liq qiymatni topamiz, keyin bir yillik amortizatsiyani ayiramiz.
# 1-qadam: Qiymatga nima kiradi?
  Narx $900,000 + yuridik $9,000 + arxitektor $12,000 + o'zgartirishlar $30,000 = $951,000
  Xizmat shartnomasi ($7,500) — joriy xarajat
# 2-qadam: Bir yillik amortizatsiya
  $951,000 / 25 yil = $38,040
# 3-qadam: Yil oxiridagi balans qiymati
  $951,000 - $38,040 = $912,960
= Javob: $912,960`,
      },
      correctValue: 912960,
      answerText: '$912,960',
    },
    {
      id: 'ch06-q202',
      kitRef: 202,
      topicId: 'chapter-06',
      type: 'single',
      text: 'Motor expenses of $400 were debited to the motor vehicles cost account and correctly recorded in the cash book. Depreciation at 25% straight line, with a full year in the year of purchase, was charged on the wrongly increased balance. Which journals correct this? 1: Dr Motor expenses $400, Cr Motor vehicles cost $400. 2: Dr Motor vehicles cost $400, Cr Motor expenses $400. 3: Dr Depreciation charge $100, Cr Accumulated depreciation $100. 4: Dr Accumulated depreciation $100, Cr Depreciation charge $100.',
      explanation: {
        en: `Two things went wrong, so two journals are needed.
# Error 1: $400 of expenses was put into the asset account
  Fix: move it out of the asset and into expenses
  Dr Motor expenses $400, Cr Motor vehicles cost $400 (journal 1)
# Error 2: depreciation was charged on that $400 too
  Extra depreciation: 25% × $400 = $100
  Fix: reverse it. Dr Accumulated depreciation $100, Cr Depreciation charge $100 (journal 4)
= Answer: 1 and 4
! Journals 2 and 3 would make each error worse instead of fixing it.`,
        ru: `Ошибок две, значит нужны две проводки.
# Ошибка 1: расходы $400 записали на счёт актива
  Исправление: убрать из актива и перенести в расходы
  Дт Расходы на транспорт $400, Кт Транспорт (стоимость) $400 (проводка 1)
# Ошибка 2: на эти $400 начислили и амортизацию
  Лишняя амортизация: 25% × $400 = $100
  Исправление: сторнируем. Дт Накопленная амортизация $100, Кт Начисленная амортизация $100 (проводка 4)
= Ответ: 1 и 4
! Проводки 2 и 3 усугубили бы каждую ошибку, а не исправили.`,
        uz: `Xato ikkita, demak ikki yozuv kerak.
# 1-xato: $400 xarajat aktiv hisobiga yozilgan
  Tuzatish: aktivdan chiqarib, xarajatga o'tkazish
  Dt Transport xarajatlari $400, Kt Transport (qiymat) $400 (1-yozuv)
# 2-xato: o'sha $400 ga amortizatsiya ham hisoblangan
  Ortiqcha amortizatsiya: 25% × $400 = $100
  Tuzatish: qaytaramiz. Dt To'plangan amortizatsiya $100, Kt Amortizatsiya xarajati $100 (4-yozuv)
= Javob: 1 va 4
! 2 va 3-yozuvlar har bir xatoni tuzatish o'rniga kuchaytirardi.`,
      },
      options: ['1 and 3', '2 and 4', '1 and 4', '2 and 3'],
      correctIndex: 2,
    },
    {
      id: 'ch06-q203',
      kitRef: 203,
      topicId: 'chapter-06',
      type: 'single',
      text: 'A machine costing $36,000 was bought on 1 July 20X2 with a ten-year life, depreciated straight line. On 1 July 20X5 the total useful life was reassessed as 13 years. What is the depreciation charge for the year ended 30 June 20X6?',
      explanation: {
        en: `Count the years already used, then spread what is left over the years still to go.
# Step 1: The old charge
  $36,000 / 10 = $3,600 a year
# Step 2: Carrying amount on 1 July 20X5 (after 3 years)
  $36,000 - 3 × $3,600 = $25,200
# Step 3: Remaining life
  New total life 13 years - 3 years used = 10 years left
# Step 4: The new charge
  $25,200 / 10 = $2,520
= Answer: $2,520
! Common traps: $1,938 divides by 13 (the total, not what is left). $2,769 divides the original cost by 13.`,
        ru: `Посчитайте использованные годы, затем распределите остаток на оставшиеся.
# Шаг 1: Старая сумма
  $36,000 / 10 = $3,600 в год
# Шаг 2: Балансовая стоимость на 1 июля 20X5 (через 3 года)
  $36,000 - 3 × $3,600 = $25,200
# Шаг 3: Оставшийся срок
  Новый общий срок 13 лет - 3 использованных = 10 лет
# Шаг 4: Новая сумма
  $25,200 / 10 = $2,520
= Ответ: $2,520
! Частые ошибки: $1,938 — деление на 13 (весь срок, а не остаток). $2,769 — первоначальная стоимость делённая на 13.`,
        uz: `Ishlatilgan yillarni sanang, keyin qolganini qolgan yillarga taqsimlang.
# 1-qadam: Eski summa
  $36,000 / 10 = yiliga $3,600
# 2-qadam: 20X5 yil 1 iyuldagi balans qiymati (3 yildan keyin)
  $36,000 - 3 × $3,600 = $25,200
# 3-qadam: Qolgan muddat
  Yangi umumiy muddat 13 yil - ishlatilgan 3 yil = 10 yil
# 4-qadam: Yangi summa
  $25,200 / 10 = $2,520
= Javob: $2,520
! Ko'p uchraydigan xatolar: $1,938 — 13 ga bo'lish (qolgan emas, umumiy muddat). $2,769 — dastlabki qiymatni 13 ga bo'lish.`,
      },
      options: ['$1,938', '$2,520', '$2,769', '$3,600'],
      correctIndex: 1,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
