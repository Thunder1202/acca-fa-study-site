'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-08';
  const questions = [
    {
      id: 'ch08-q205',
      kitRef: 205,
      topicId: 'chapter-08',
      type: 'single',
      text: 'Which statement about development costs is correct?',
      explanation: {
        en: `Check each statement.
- Capitalised development costs are non-current assets: TRUE. They are an intangible asset used for more than a year.
- Directors may choose not to capitalise when all conditions are met: FALSE. Capitalising is then required.
- Amortisation in the statement of changes in equity: FALSE. It is an expense in profit or loss.
- Must be amortised over 5 years or less: FALSE. There is no such limit; use the period of expected benefits.
= Answer: capitalised development costs appear in the statement of financial position as non-current assets`,
        ru: `Проверим каждое утверждение.
- Капитализированная разработка — внеоборотный актив: ВЕРНО. Это нематериальный актив, используемый больше года.
- Директора могут не капитализировать при выполнении всех условий: НЕВЕРНО. Тогда капитализация обязательна.
- Амортизация в отчёте об изменениях в капитале: НЕВЕРНО. Это расход в прибыли или убытке.
- Амортизировать не дольше 5 лет: НЕВЕРНО. Такого ограничения нет, берут период ожидаемых выгод.
= Ответ: капитализированная разработка показывается в отчёте о финансовом положении как внеоборотный актив`,
        uz: `Har bir fikrni tekshiramiz.
- Kapitallashtirilgan ishlanma — uzoq muddatli aktiv: TO'G'RI. Bu bir yildan ortiq ishlatiladigan nomoddiy aktiv.
- Barcha shartlar bajarilganda direktorlar kapitallashtirmaslikni tanlashi mumkin: NOTO'G'RI. Unda kapitallashtirish majburiy.
- Amortizatsiya kapitaldagi o'zgarishlar hisobotida: NOTO'G'RI. Bu foyda yoki zarardagi xarajat.
- 5 yildan oshmagan muddatda amortizatsiya: NOTO'G'RI. Bunday chegara yo'q, kutilgan naf davri olinadi.
= Javob: kapitallashtirilgan ishlanma moliyaviy holat hisobotida uzoq muddatli aktiv sifatida ko'rsatiladi`,
      },
      options: [
        'Capitalised development costs appear in the statement of financial position as non-current assets',
        'Directors may choose whether to capitalise development costs even if every IAS 38 condition is met',
        'Amortisation of development costs is shown in the statement of changes in equity',
        'Development costs must be amortised over no more than five years',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch08-q206',
      kitRef: 206,
      topicId: 'chapter-08',
      type: 'single',
      text: 'For an intangible asset accounted for under the revaluation model, where are movements in the carrying amount reported?',
      explanation: {
        en: `The revaluation model works the same way for intangible assets as for buildings.
# Where does a revaluation gain go?
  It is unrealised, so not in profit or loss
  It is shown in other comprehensive income for the year
  It then builds up in a revaluation surplus, a component of equity
= Answer: in other comprehensive income and other components of equity`,
        ru: `Модель переоценки для нематериальных активов работает так же, как для зданий.
# Куда идёт прирост от переоценки?
  Он не реализован, значит не в прибыль или убыток
  Его показывают в прочем совокупном доходе за год
  Затем он копится в резерве переоценки — компоненте капитала
= Ответ: в прочем совокупном доходе и других компонентах капитала`,
        uz: `Qayta baholash modeli nomoddiy aktivlar uchun binolardagi kabi ishlaydi.
# Qayta baholash o'sishi qayerga boradi?
  U amalga oshmagan, demak foyda yoki zararga emas
  U yil uchun boshqa umumlashgan daromadda ko'rsatiladi
  Keyin qayta baholash rezervida — kapital tarkibiy qismida to'planadi
= Javob: boshqa umumlashgan daromad va kapitalning boshqa tarkibiy qismlarida`,
      },
      options: [
        'In profit or loss only',
        'In other comprehensive income and other components of equity',
        'In other comprehensive income only',
        'In other components of equity only',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch08-q207',
      kitRef: 207,
      topicId: 'chapter-08',
      type: 'single',
      text: 'How should an intangible asset with an indefinite useful life be accounted for?',
      explanation: {
        en: `"Indefinite" means there is no foreseeable end to the benefits, so there is no life to spread the cost over.
- Held at cost unchanged: not quite. It must also be checked every year.
- At cost with an annual impairment review: correct.
- Amortised over an estimated life: no, there is no life to estimate.
- Cannot be recognised: no, it is still an asset.
= Answer: at cost, with an annual impairment review`,
        ru: `«Неопределённый» — у выгод нет видимого конца, значит не на что распределять стоимость.
- По стоимости без изменений: не совсем. Его ещё нужно проверять каждый год.
- По стоимости с ежегодной проверкой на обесценение: верно.
- Амортизировать на оценочный срок: нет, срока нет.
- Нельзя признать: нет, это всё равно актив.
= Ответ: по стоимости, с ежегодной проверкой на обесценение`,
        uz: `«Noaniq» — naflarning oxiri ko'rinmaydi, demak qiymatni taqsimlaydigan muddat yo'q.
- O'zgarmas qiymatda: to'liq emas. U har yili tekshirilishi ham kerak.
- Qiymatda, har yili qadrsizlanishga tekshirish bilan: to'g'ri.
- Taxminiy muddatga amortizatsiya: yo'q, muddat yo'q.
- Tan olib bo'lmaydi: yo'q, u baribir aktiv.
= Javob: qiymatda, har yili qadrsizlanishga tekshirish bilan`,
      },
      options: [
        'At cost, held unchanged for as long as the entity owns it',
        'At cost, with an annual impairment review',
        'At cost, amortised over an estimated life',
        'It cannot be recognised, because it cannot be amortised',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch08-q208',
      kitRef: 208,
      topicId: 'chapter-08',
      type: 'matrix',
      text: 'Decide whether each item should be capitalised as an intangible asset.',
      explanation: {
        en: `Ask of each cost: is it finding out (research), building the real product (development), or buying a right?
- Staff doing research: research, always an expense.
- Building a working model of a new product: development, capitalised once the criteria are met.
- Materials for experiments: research, an expense.
- A 10-year licence bought to make and sell a product: a purchased intangible, capitalised at cost.`,
        ru: `Спросите о каждой затрате: это выяснение (исследования), создание продукта (разработка) или покупка права?
- Зарплата исследователей: исследования, всегда расход.
- Создание рабочей модели нового продукта: разработка, капитализируется при выполнении условий.
- Материалы для экспериментов: исследования, расход.
- Лицензия на 10 лет на производство и продажу: купленный нематериальный актив, капитализируется по стоимости.`,
        uz: `Har bir xarajat haqida so'rang: bu aniqlashmi (tadqiqot), haqiqiy mahsulot yaratishmi (ishlanma) yoki huquq sotib olishmi?
- Tadqiqotchilar maoshi: tadqiqot, doim xarajat.
- Yangi mahsulotning ishlaydigan modelini yaratish: ishlanma, shartlar bajarilganda kapitallashtiriladi.
- Tajribalar uchun materiallar: tadqiqot, xarajat.
- Ishlab chiqarish va sotish uchun 10 yillik litsenziya: sotib olingan nomoddiy aktiv, qiymatda kapitallashtiriladi.`,
      },
      columns: ['Capitalised', 'Not capitalised'],
      rows: [
        { text: 'Salaries of staff carrying out research', correctIndex: 1 },
        { text: 'The cost of building a working model of a new product', correctIndex: 0 },
        { text: 'Materials used in scientific experiments', correctIndex: 1 },
        { text: 'A licence bought to allow production and sale of a product for ten years', correctIndex: 0 },
      ],
    },
    {
      id: 'ch08-q209',
      kitRef: 209,
      topicId: 'chapter-08',
      type: 'single',
      text: 'For an intangible asset accounted for under the cost model, where are annual impairment charges reported?',
      explanation: {
        en: `Under the cost model there is no revaluation surplus to absorb a fall in value. So an impairment is simply a loss.
= Answer: in profit or loss only
Compare question 206: other comprehensive income is used only under the revaluation model.`,
        ru: `В модели по стоимости нет резерва переоценки, который мог бы поглотить падение стоимости. Поэтому обесценение — просто убыток.
= Ответ: только в прибыли или убытке
Сравните с вопросом 206: прочий совокупный доход используют только в модели переоценки.`,
        uz: `Qiymat modelida qiymat tushishini yutadigan qayta baholash rezervi yo'q. Shuning uchun qadrsizlanish shunchaki zarar.
= Javob: faqat foyda yoki zararda
206-savol bilan solishtiring: boshqa umumlashgan daromad faqat qayta baholash modelida ishlatiladi.`,
      },
      options: [
        'In other comprehensive income and other components of equity',
        'In profit or loss only',
        'In other comprehensive income only',
        'In other components of equity only',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch08-q210',
      kitRef: 210,
      topicId: 'chapter-08',
      type: 'matrix',
      text: 'Classify each cost as written off as an expense or capitalised as an intangible asset.',
      explanation: {
        en: `Sort each cost.
- Market research: research, so written off as an expense.
- A patented product design: an identifiable right you can protect and sell, so capitalised.
- Advertising: never an asset, written off.
- Training employees: never an asset, written off. Staff can leave, so the business does not control the benefit.`,
        ru: `Разберём каждую затрату.
- Маркетинговые исследования: исследования, списываются в расходы.
- Запатентованный дизайн продукта: идентифицируемое право, которое можно защитить и продать, капитализируется.
- Реклама: никогда не актив, списывается.
- Обучение сотрудников: никогда не актив, списывается. Сотрудники могут уйти, бизнес не контролирует выгоду.`,
        uz: `Har bir xarajatni ajratamiz.
- Bozor tadqiqoti: tadqiqot, xarajatga chiqariladi.
- Patentlangan mahsulot dizayni: himoya qilish va sotish mumkin bo'lgan identifikatsiyalanadigan huquq, kapitallashtiriladi.
- Reklama: hech qachon aktiv emas, xarajatga chiqariladi.
- Xodimlarni o'qitish: hech qachon aktiv emas, xarajatga chiqariladi. Xodimlar ketishi mumkin, biznes nafni nazorat qilmaydi.`,
      },
      columns: ['Written off as an expense', 'Capitalised as an intangible asset'],
      rows: [
        { text: 'Market research costs', correctIndex: 0 },
        { text: 'Costs of a patented product design', correctIndex: 1 },
        { text: 'Advertising a product', correctIndex: 0 },
        { text: 'Training employees', correctIndex: 0 },
      ],
    },
    {
      id: 'ch08-q211',
      kitRef: 211,
      topicId: 'chapter-08',
      type: 'single',
      text: 'Which statement best defines an intangible asset?',
      explanation: {
        en: `The IAS 38 definition has three parts: identifiable, non-monetary, without physical substance.
- Always generated internally: no, a licence can be bought.
- A purchased asset with no physical substance: no, development costs are built internally.
- Identifiable non-monetary asset without physical substance: the definition.
- Cannot be sold: no, intangibles can usually be sold.
= Answer: an identifiable non-monetary asset without physical substance`,
        ru: `Определение IAS 38 из трёх частей: идентифицируемый, немонетарный, без физической формы.
- Всегда создан внутри: нет, лицензию можно купить.
- Купленный актив без физической формы: нет, разработку создают внутри.
- Идентифицируемый немонетарный актив без физической формы: определение.
- Нельзя продать: нет, их обычно можно продать.
= Ответ: идентифицируемый немонетарный актив без физической формы`,
        uz: `IAS 38 ta'rifi uch qismli: identifikatsiyalanadigan, nomonetar, jismoniy shaklsiz.
- Doim ichkarida yaratiladi: yo'q, litsenziyani sotib olish mumkin.
- Jismoniy shaklsiz sotib olingan aktiv: yo'q, ishlanma ichkarida yaratiladi.
- Jismoniy shaklsiz identifikatsiyalanadigan nomonetar aktiv: ta'rif.
- Sotib bo'lmaydi: yo'q, ularni odatda sotish mumkin.
= Javob: jismoniy shaklsiz identifikatsiyalanadigan nomonetar aktiv`,
      },
      options: [
        'An asset that is always generated internally by the business',
        'A purchased asset that has no physical substance',
        'An identifiable non-monetary asset without physical substance',
        'An asset that cannot be sold',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch08-q212',
      kitRef: 212,
      topicId: 'chapter-08',
      type: 'matrix',
      text: 'Decide how each project\'s costs should be accounted for.',
      explanation: {
        en: `Ask of each project: is it still finding out (research), or building a product that meets every condition (development)?
- Project 1: applying known technology, with resources and intention to complete. Development that meets the conditions: CAPITALISED.
- Project 2: still testing whether the substance works at all. Research: EXPENSED.
- Project 3: the company is unsure it will finish. The "intention and ability to complete" condition fails: EXPENSED.`,
        ru: `Спросите о каждом проекте: это ещё выяснение (исследования) или создание продукта при всех условиях (разработка)?
- Проект 1: применение известной технологии, есть ресурсы и намерение завершить. Разработка при выполнении условий: КАПИТАЛИЗИРУЕТСЯ.
- Проект 2: ещё проверяют, работает ли вещество вообще. Исследования: РАСХОД.
- Проект 3: компания не уверена, что завершит. Условие «намерение и способность завершить» не выполнено: РАСХОД.`,
        uz: `Har bir loyiha haqida so'rang: bu hali aniqlashmi (tadqiqot) yoki barcha shartlar bilan mahsulot yaratishmi (ishlanma)?
- 1-loyiha: ma'lum texnologiyani qo'llash, resurs va tugatish niyati bor. Shartlarga mos ishlanma: KAPITALLASHTIRILADI.
- 2-loyiha: modda umuman ishlaydimi, hali tekshirilmoqda. Tadqiqot: XARAJAT.
- 3-loyiha: kompaniya tugatishiga ishonmaydi. «Tugatish niyati va qobiliyati» sharti bajarilmagan: XARAJAT.`,
      },
      columns: ['Written off as an expense', 'Capitalised as an asset'],
      rows: [
        {
          text: 'Project 1 applies new technology to make heat-resistant fabric for emergency-service uniforms. The company has the resources and the intention to complete it.',
          correctIndex: 1,
        },
        {
          text: 'Project 2 is testing whether a substance can work as an appetite suppressant that would then be sold in pharmacies.',
          correctIndex: 0,
        },
        {
          text: 'Project 3 is developing a self-cleaning kitchen surface, but a rival is building a similar one and the company is unsure it will finish.',
          correctIndex: 0,
        },
      ],
    },
    {
      id: 'ch08-q213',
      kitRef: 213,
      topicId: 'chapter-08',
      type: 'number',
      text: 'A company is investigating the properties of a chemical compound. Costs incurred on the project during the year were $41,000. What amount is expensed to profit or loss for this project?',
      explanation: {
        en: `"Investigating the properties" of a chemical is finding out, so this is research.
# The rule
  All research is an expense when it is incurred
= Answer: the whole $41,000 is expensed`,
        ru: `«Изучение свойств» вещества — это выяснение, значит исследования.
# Правило
  Все исследования списываются в расходы сразу
= Ответ: все $41,000 списываются в расходы`,
        uz: `Kimyoviy birikma «xususiyatlarini o'rganish» — aniqlash, demak tadqiqot.
# Qoida
  Barcha tadqiqot darhol xarajatga chiqariladi
= Javob: butun $41,000 xarajatga chiqariladi`,
      },
      correctValue: 41000,
      answerText: '$41,000',
    },
    {
      id: 'ch08-q214',
      kitRef: 214,
      topicId: 'chapter-08',
      type: 'single',
      text: 'A company amortises a brand straight line over 10 years from purchase with no residual value. At 1 May 20X5 the brand\'s carrying amount was $48,000 and accumulated amortisation was $32,000. What are the amortisation charge for the year to 30 April 20X6 and the accumulated amortisation at that date?',
      explanation: {
        en: `The charge is based on the ORIGINAL cost, so rebuild it first.
# Step 1: Original cost
  Carrying amount $48,000 + accumulated amortisation $32,000 = $80,000
# Step 2: Annual charge
  $80,000 / 10 years = $8,000
# Step 3: Accumulated amortisation at 30 April 20X6
  $32,000 + $8,000 = $40,000
= Answer: charge $8,000, accumulated $40,000
! Common trap: $48,000 / 10 = $4,800 uses the carrying amount instead of the cost.`,
        ru: `Сумма считается от ПЕРВОНАЧАЛЬНОЙ стоимости, сначала восстановим её.
# Шаг 1: Первоначальная стоимость
  Балансовая $48,000 + накопленная амортизация $32,000 = $80,000
# Шаг 2: Годовая сумма
  $80,000 / 10 лет = $8,000
# Шаг 3: Накопленная амортизация на 30 апреля 20X6
  $32,000 + $8,000 = $40,000
= Ответ: начислено $8,000, накоплено $40,000
! Частая ошибка: $48,000 / 10 = $4,800 — взята балансовая вместо стоимости.`,
        uz: `Summa DASTLABKI qiymatdan hisoblanadi, avval uni tiklaymiz.
# 1-qadam: Dastlabki qiymat
  Balans qiymati $48,000 + to'plangan amortizatsiya $32,000 = $80,000
# 2-qadam: Yillik summa
  $80,000 / 10 yil = $8,000
# 3-qadam: 20X6 yil 30 apreldagi to'plangan amortizatsiya
  $32,000 + $8,000 = $40,000
= Javob: hisoblangan $8,000, to'plangan $40,000
! Ko'p uchraydigan xato: $48,000 / 10 = $4,800 — qiymat o'rniga balans qiymati olingan.`,
      },
      options: [
        'Charge $4,800, accumulated $36,800',
        'Charge $8,000, accumulated $48,000',
        'Charge $8,000, accumulated $40,000',
        'Charge $4,800, accumulated $40,000',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch08-q215',
      kitRef: 215,
      topicId: 'chapter-08',
      type: 'number',
      text: 'On 1 October 20X3 a company bought a licence for $2,400,000 to sell a product for a four-year term starting that day. After that the licence expires and cannot be renewed. Its policy is to write off the cost over the term from the date of purchase. What is the amortisation charge for the year ended 31 March 20X4?',
      explanation: {
        en: `Spread the cost over the 4-year term, then charge only the months owned this year.
# Step 1: A full year
  $2,400,000 / 4 = $600,000
# Step 2: Months owned in the year to 31 March 20X4
  1 October to 31 March = 6 months
# Step 3: This year's charge
  $600,000 × 6/12 = $300,000
= Answer: $300,000`,
        ru: `Распределяем стоимость на 4 года, затем начисляем только за месяцы владения в этом году.
# Шаг 1: Полный год
  $2,400,000 / 4 = $600,000
# Шаг 2: Месяцы владения в году до 31 марта 20X4
  С 1 октября по 31 марта = 6 месяцев
# Шаг 3: Сумма этого года
  $600,000 × 6/12 = $300,000
= Ответ: $300,000`,
        uz: `Qiymatni 4 yilga taqsimlab, faqat shu yildagi egalik oylari uchun hisoblaymiz.
# 1-qadam: To'liq yil
  $2,400,000 / 4 = $600,000
# 2-qadam: 20X4 yil 31 martgacha bo'lgan yildagi egalik oylari
  1 oktyabrdan 31 martgacha = 6 oy
# 3-qadam: Shu yil summasi
  $600,000 × 6/12 = $300,000
= Javob: $300,000`,
      },
      correctValue: 300000,
      answerText: '$300,000',
    },
    {
      id: 'ch08-q216',
      kitRef: 216,
      topicId: 'chapter-08',
      type: 'single',
      text: 'A company amortises a licence straight line over five years from purchase with no residual value. At 1 January 20X6 the licence\'s carrying amount was $20,000 and accumulated amortisation was $15,000. What are the amortisation charge for the year ended 31 December 20X6 and the accumulated amortisation at that date?',
      explanation: {
        en: `Same method as question 214: rebuild the cost first.
# Step 1: Original cost
  $20,000 + $15,000 = $35,000
# Step 2: Annual charge
  $35,000 / 5 = $7,000
# Step 3: Accumulated amortisation at 31 December 20X6
  $15,000 + $7,000 = $22,000
= Answer: charge $7,000, accumulated $22,000
! Common trap: $20,000 / 5 = $4,000 uses the carrying amount.`,
        ru: `Тот же способ, что в вопросе 214: сначала восстановим стоимость.
# Шаг 1: Первоначальная стоимость
  $20,000 + $15,000 = $35,000
# Шаг 2: Годовая сумма
  $35,000 / 5 = $7,000
# Шаг 3: Накопленная амортизация на 31 декабря 20X6
  $15,000 + $7,000 = $22,000
= Ответ: начислено $7,000, накоплено $22,000
! Частая ошибка: $20,000 / 5 = $4,000 — взята балансовая стоимость.`,
        uz: `214-savol bilan bir xil usul: avval qiymatni tiklaymiz.
# 1-qadam: Dastlabki qiymat
  $20,000 + $15,000 = $35,000
# 2-qadam: Yillik summa
  $35,000 / 5 = $7,000
# 3-qadam: 20X6 yil 31 dekabrdagi to'plangan amortizatsiya
  $15,000 + $7,000 = $22,000
= Javob: hisoblangan $7,000, to'plangan $22,000
! Ko'p uchraydigan xato: $20,000 / 5 = $4,000 — balans qiymati olingan.`,
      },
      options: [
        'Charge $4,000, accumulated $19,000',
        'Charge $4,000, accumulated $22,000',
        'Charge $7,000, accumulated $19,000',
        'Charge $7,000, accumulated $22,000',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch08-q217',
      kitRef: 217,
      topicId: 'chapter-08',
      type: 'matrix',
      text: 'Mark each statement about IAS 38 Intangible Assets as true or false.',
      explanation: {
        en: `Check each statement against IAS 38.
- Research is expensed: TRUE.
- Every kind of goodwill can be capitalised: FALSE. Goodwill a business builds itself cannot be.
- Development that stops meeting the criteria is written off: TRUE.
- Development is amortised from when it is available for use or sale: TRUE.
- Expensed research can be capitalised later: FALSE. Once expensed, never reinstated.
- Only purchased intangibles can be capitalised: FALSE. Development costs are built internally and can be capitalised.`,
        ru: `Сверим каждое утверждение с IAS 38.
- Исследования списываются в расходы: ВЕРНО.
- Любой гудвил можно капитализировать: НЕВЕРНО. Гудвил, созданный самим бизнесом, нельзя.
- Разработку, переставшую отвечать условиям, списывают: ВЕРНО.
- Разработку амортизируют с момента готовности к использованию или продаже: ВЕРНО.
- Списанные исследования можно позже капитализировать: НЕВЕРНО. Списанное не восстанавливают.
- Капитализировать можно только купленные: НЕВЕРНО. Разработку создают внутри, и её капитализируют.`,
        uz: `Har bir fikrni IAS 38 bilan solishtiramiz.
- Tadqiqot xarajatga chiqariladi: TO'G'RI.
- Har qanday gudvilni kapitallashtirish mumkin: NOTO'G'RI. Biznes o'zi yaratgan gudvilni mumkin emas.
- Shartlarga javob bermay qolgan ishlanma hisobdan chiqariladi: TO'G'RI.
- Ishlanma foydalanish yoki sotishga tayyor bo'lgandan amortizatsiya qilinadi: TO'G'RI.
- Xarajatga chiqarilgan tadqiqotni keyin kapitallashtirish mumkin: NOTO'G'RI. Chiqarilgani qaytarilmaydi.
- Faqat sotib olinganlarni kapitallashtirish mumkin: NOTO'G'RI. Ishlanma ichkarida yaratiladi va kapitallashtiriladi.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Research costs are expensed to profit or loss', correctIndex: 0 },
        { text: 'Every kind of goodwill can be capitalised', correctIndex: 1 },
        {
          text: 'Capitalised development costs that stop meeting the criteria are written off to profit or loss',
          correctIndex: 0,
        },
        {
          text: 'Capitalised development costs are amortised from the date the asset is available to use or sell',
          correctIndex: 0,
        },
        {
          text: 'Research costs already written off can be capitalised again once the product looks feasible',
          correctIndex: 1,
        },
        { text: 'Only purchased intangibles can be capitalised', correctIndex: 1 },
      ],
    },
    {
      id: 'ch08-q218',
      kitRef: 218,
      topicId: 'chapter-08',
      type: 'number',
      text: 'A company is developing a new process to save production time. The project started on 1 January 20X5 and met the capitalisation criteria on 31 August 20X5. Costs were $92,400 to 31 August and $31,600 from 1 September. What amount is expensed to profit or loss for this project in the year ended 31 December 20X5?',
      explanation: {
        en: `Split the costs at the date the criteria were met.
# Before 31 August (criteria not yet met)
  $92,400: an expense, and it stays an expense forever
# From 1 September (criteria met)
  $31,600: capitalised as development costs
= Answer: $92,400 is expensed
! Common trap: moving the earlier $92,400 into the asset once the project succeeds. That is never allowed.`,
        ru: `Делим затраты по дате выполнения условий.
# До 31 августа (условия ещё не выполнены)
  $92,400: расход, и навсегда остаётся расходом
# С 1 сентября (условия выполнены)
  $31,600: капитализируются как разработка
= Ответ: в расходы списываются $92,400
! Частая ошибка: перенести прежние $92,400 в актив, когда проект удался. Так никогда нельзя.`,
        uz: `Xarajatlarni shartlar bajarilgan sana bo'yicha ajratamiz.
# 31 avgustgacha (shartlar hali bajarilmagan)
  $92,400: xarajat va abadiy xarajat bo'lib qoladi
# 1 sentyabrdan (shartlar bajarilgan)
  $31,600: ishlanma sifatida kapitallashtiriladi
= Javob: $92,400 xarajatga chiqariladi
! Ko'p uchraydigan xato: loyiha muvaffaqiyatli bo'lgach avvalgi $92,400 ni aktivga o'tkazish. Bunga hech qachon ruxsat yo'q.`,
      },
      correctValue: 92400,
      answerText: '$92,400',
    },
    {
      id: 'ch08-q219',
      kitRef: 219,
      topicId: 'chapter-08',
      type: 'number',
      text: 'A development project was completed on 30 June 20X5. Costs were $420,000 up to 31 December 20X4 and a further $30,000 between January and June 20X5. Production and sales began on 1 September 20X5 and are expected to last 30 months. What amount is expensed to profit or loss for the year ended 31 December 20X5?',
      explanation: {
        en: `All the costs are development and are capitalised. The expense this year is only the amortisation.
# Step 1: Total capitalised
  $420,000 + $30,000 = $450,000
# Step 2: Amortisation period
  From when sales begin, 1 September 20X5, over 30 months
# Step 3: Months in this year
  September to December = 4 months
# Step 4: This year's expense
  $450,000 × 4/30 = $60,000
= Answer: $60,000
! Amortisation starts when sales start (1 September), not when the project was finished (30 June).`,
        ru: `Все затраты — разработка и капитализируются. Расход этого года — только амортизация.
# Шаг 1: Всего капитализировано
  $420,000 + $30,000 = $450,000
# Шаг 2: Период амортизации
  С начала продаж, 1 сентября 20X5, на 30 месяцев
# Шаг 3: Месяцы в этом году
  Сентябрь-декабрь = 4 месяца
# Шаг 4: Расход этого года
  $450,000 × 4/30 = $60,000
= Ответ: $60,000
! Амортизация начинается с начала продаж (1 сентября), а не с окончания проекта (30 июня).`,
        uz: `Barcha xarajatlar ishlanma va kapitallashtiriladi. Bu yilgi xarajat faqat amortizatsiya.
# 1-qadam: Jami kapitallashtirilgan
  $420,000 + $30,000 = $450,000
# 2-qadam: Amortizatsiya davri
  Sotuv boshlangan 20X5 yil 1 sentyabrdan, 30 oy
# 3-qadam: Bu yildagi oylar
  Sentyabr-dekabr = 4 oy
# 4-qadam: Bu yilgi xarajat
  $450,000 × 4/30 = $60,000
= Javob: $60,000
! Amortizatsiya loyiha tugagan kundan (30 iyun) emas, sotuv boshlangan kundan (1 sentyabr) boshlanadi.`,
      },
      correctValue: 60000,
      answerText: '$60,000',
    },
    {
      id: 'ch08-q220',
      kitRef: 220,
      topicId: 'chapter-08',
      type: 'single',
      text: 'Which statement best describes amortisation?',
      explanation: {
        en: `Amortisation does for intangible assets what depreciation does for tangible ones.
- Measures the fall in market value: no.
- Spreads the payment: no, the licence may have been paid in full.
- Spreads the cost over the useful life: yes.
- Estimates money needed to replace it: no.
= Answer: it spreads the cost of an intangible asset over its estimated useful life`,
        ru: `Амортизация делает для нематериальных активов то же, что для основных средств.
- Измеряет падение рыночной цены: нет.
- Распределяет оплату: нет, лицензию могли оплатить сразу.
- Распределяет стоимость на срок использования: да.
- Оценивает деньги на замену: нет.
= Ответ: она распределяет стоимость нематериального актива на ожидаемый срок использования`,
        uz: `Amortizatsiya nomoddiy aktivlar uchun asosiy vositalardagi kabi ishlaydi.
- Bozor qiymati tushishini o'lchaydi: yo'q.
- To'lovni taqsimlaydi: yo'q, litsenziya darhol to'langan bo'lishi mumkin.
- Qiymatni foydali muddatga taqsimlaydi: ha.
- Almashtirish uchun pulni baholaydi: yo'q.
= Javob: u nomoddiy aktiv qiymatini kutilgan foydali muddatiga taqsimlaydi`,
      },
      options: [
        'It measures the fall in the market value of an intangible asset',
        'It spreads the payment for an intangible asset over several years',
        'It spreads the cost of an intangible asset over its estimated useful life',
        'It estimates the money needed to replace the intangible asset',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch08-q221',
      kitRef: 221,
      topicId: 'chapter-08',
      type: 'matrix',
      text: 'Decide whether each cost should be capitalised as an intangible asset.',
      explanation: {
        en: `Sort each cost.
- $48,000 staff costs developing a product that will bring benefits: development, CAPITALISED.
- $35,000 advertising: never capitalised.
- $180,000 laboratory equipment: you can touch it, so it is property, plant and equipment, NOT an intangible asset (it is capitalised as PPE instead).
- $22,000 testing that a bought intangible works: needed to get it ready for use, so part of its cost, CAPITALISED.`,
        ru: `Разберём каждую затрату.
- $48,000 зарплаты на разработку продукта, который принесёт выгоду: разработка, КАПИТАЛИЗИРУЕТСЯ.
- $35,000 реклама: никогда не капитализируется.
- $180,000 лабораторное оборудование: его можно потрогать, это основные средства, НЕ нематериальный актив (капитализируется как основное средство).
- $22,000 проверка работы купленного нематериального актива: нужна для подготовки к использованию, часть стоимости, КАПИТАЛИЗИРУЕТСЯ.`,
        uz: `Har bir xarajatni ajratamiz.
- Naf keltiradigan mahsulotni ishlab chiqishdagi $48,000 maosh: ishlanma, KAPITALLASHTIRILADI.
- $35,000 reklama: hech qachon kapitallashtirilmaydi.
- $180,000 laboratoriya uskunasi: uni ushlash mumkin, bu asosiy vosita, nomoddiy aktiv EMAS (asosiy vosita sifatida kapitallashtiriladi).
- Sotib olingan nomoddiy aktiv ishlashini tekshirish $22,000: foydalanishga tayyorlash uchun kerak, qiymat qismi, KAPITALLASHTIRILADI.`,
      },
      columns: ['Capitalised as an intangible asset', 'Not capitalised as an intangible asset'],
      rows: [
        {
          text: '$48,000 of staff costs developing a new product that is expected to bring future benefits',
          correctIndex: 0,
        },
        { text: '$35,000 advertising a newly developed product', correctIndex: 1 },
        { text: '$180,000 of laboratory equipment used to build prototypes', correctIndex: 1 },
        { text: '$22,000 testing whether a separately bought intangible asset works properly', correctIndex: 0 },
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
