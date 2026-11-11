'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 9 (intangible
// assets), reworded with new figures. bppRef/bppPage point to BPP's own answer. Left out: 9.3 (same points as
// 9.1 and 9.2) and 9.12 (it turns on software that runs hardware, which Kaplan does not cover).
(function () {
  const TOPIC = 'chapter-08';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp08-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('9.1', 215, 'matrix', `Under IAS 38 Intangible Assets, is each statement about research and development true or false?`,
      grid(TF, [
        ['Research spending, other than on assets such as research buildings and equipment, is an expense when it is incurred.', 0],
        ['To decide whether development spending can be an asset, you must consider whether there is enough finance to finish the project.', 0],
        ['Development costs recognised as an asset must be amortised over no more than five years.', 1],
      ]),
`- Research is always an expense (buildings and equipment used for research are still non-current assets): TRUE.
- Adequate financial and other resources to complete the project is one of the conditions: TRUE.
- There is no five-year limit. The asset is amortised over the period expected to produce benefits: FALSE.`,
`- Исследования всегда расход (здания и оборудование для исследований остаются внеоборотными активами): ВЕРНО.
- Достаточные финансовые и другие ресурсы для завершения проекта — одно из условий: ВЕРНО.
- Предела в пять лет нет. Актив амортизируют за период, когда ожидаются выгоды: НЕВЕРНО.`,
`- Tadqiqot har doim xarajat (tadqiqot uchun bino va uskunalar uzoq muddatli aktiv bo'lib qoladi): TO'G'RI.
- Loyihani tugatish uchun yetarli moliya va boshqa resurslar — shartlardan biri: TO'G'RI.
- Besh yillik chegara yo'q. Aktiv foyda kutilgan davr davomida amortizatsiya qilinadi: NOTO'G'RI.`),

    q('9.2', 215, 'single', `Under IAS 38, which statements are correct? (1) If certain conditions are met, a business MAY choose to capitalise development costs. (2) Research spending, other than on research buildings and equipment, must be written off as incurred. (3) Capitalised development costs must be amortised over no more than five years. (4) Capitalised development costs are shown under intangible non-current assets.`,
      pick(['1, 2 and 4 only', '1 and 3 only', '2 and 4 only', '3 and 4 only'], 2),
`- (1) FALSE. If the conditions are met, development costs MUST be capitalised. It is not a choice.
- (2) TRUE. Research is always written off.
- (3) FALSE. There is no five-year limit.
- (4) TRUE. Development costs are an intangible non-current asset.
= Answer: 2 and 4 only`,
`- (1) НЕВЕРНО. Если условия выполнены, затраты на разработку НУЖНО капитализировать. Это не выбор.
- (2) ВЕРНО. Исследования всегда списывают.
- (3) НЕВЕРНО. Предела в пять лет нет.
- (4) ВЕРНО. Затраты на разработку — нематериальный внеоборотный актив.
= Ответ: только 2 и 4`,
`- (1) NOTO'G'RI. Shartlar bajarilsa, ishlanma xarajatlari kapitallashtirilishi SHART. Bu tanlov emas.
- (2) TO'G'RI. Tadqiqot har doim hisobdan chiqariladi.
- (3) NOTO'G'RI. Besh yillik chegara yo'q.
- (4) TO'G'RI. Ishlanma xarajatlari — nomoddiy uzoq muddatli aktiv.
= Javob: faqat 2 va 4`),

    q('9.4', 215, 'single', `Which of these CANNOT be shown as an intangible non-current asset at the year end?`,
      pick([
        '$18,000 spent researching a new material, expected to lead to a new product line in four years',
        'Goodwill of $22,000 arising when the company bought another business during the year',
        'A brand name bought from a competitor for $70,000',
        '$26,000 spent developing a new product that launches next month and is expected to be profitable',
      ], 0),
`- Research: always an expense, however promising. It can never be an asset. YES, this one cannot.
- Goodwill from buying a business: purchased goodwill is an intangible asset.
- A brand bought from someone else: an intangible asset.
- Development of a product about to launch and expected to profit: meets the conditions, so it is capitalised.
= Answer: the $18,000 research`,
`- Исследования: всегда расход, как бы ни были многообещающими. Активом стать не могут. ДА, это нельзя.
- Гудвил от покупки бизнеса: купленный гудвил — нематериальный актив.
- Бренд, купленный у другого: нематериальный актив.
- Разработка продукта к скорому запуску с ожидаемой прибылью: условия выполнены, капитализируют.
= Ответ: исследования на $18 000`,
`- Tadqiqot: qanchalik istiqbolli bo'lmasin, har doim xarajat. Aktiv bo'lolmaydi. HA, bu mumkin emas.
- Biznes sotib olishdan gudvill: sotib olingan gudvill — nomoddiy aktiv.
- Boshqadan sotib olingan brend: nomoddiy aktiv.
- Tez orada chiqariladigan, foyda kutilgan mahsulot ishlanmasi: shartlar bajarilgan, kapitallashtiriladi.
= Javob: $18 000 tadqiqot`),

    q('9.5', 215, 'single', `Which of these are intangible non-current assets? (1) A patent for a new adhesive, bought for $30,000. (2) Development costs capitalised under IAS 38. (3) A licence to broadcast football matches, bought for $200,000. (4) A new factory bought for $2 million.`,
      pick(['1 and 3 only', '1, 2 and 3 only', '2 and 4 only', '2, 3 and 4 only'], 1),
`Intangible means no physical form.
- (1) Patent: a legal right, no physical form. YES.
- (2) Capitalised development costs: YES.
- (3) Broadcasting licence: a right, no physical form. YES.
- (4) A factory: has physical form, so it is a tangible asset.
= Answer: 1, 2 and 3 only`,
`Нематериальный — значит без физической формы.
- (1) Патент: юридическое право без физической формы. ДА.
- (2) Капитализированные затраты на разработку: ДА.
- (3) Лицензия на трансляцию: право без физической формы. ДА.
- (4) Завод: имеет физическую форму, это материальный актив.
= Ответ: только 1, 2 и 3`,
`Nomoddiy — jismoniy shakli yo'q degani.
- (1) Patent: jismoniy shaklsiz huquqiy huquq. HA.
- (2) Kapitallashtirilgan ishlanma xarajatlari: HA.
- (3) Translyatsiya litsenziyasi: jismoniy shaklsiz huquq. HA.
- (4) Zavod: jismoniy shakli bor, bu moddiy aktiv.
= Javob: faqat 1, 2 va 3`),

    q('9.6', 215, 'single', `In its first year to 31 December a company spent $15,000 working out how to turn plant waste into chemicals A, B and C, and $84,000 developing a cleaning product based on chemical C. No use has yet been found for A and B. Sales of the cleaning product began on 1 September and are expected to be steadily profitable for seven years, and the company has the resources to do this. What amount of development costs is carried forward at 31 December?`,
      pick(['$80,000', '$84,000', '$99,000', '$95,000'], 0),
`# Step 1: Sort the spending
  15,000 on the chemicals: no use found, so it is research. Expense.
  84,000 on the cleaning product: meets the conditions. Capitalise.
# Step 2: Amortisation starts with commercial production
  84,000 / 7 years = 12,000 a year = 1,000 a month
  1 September to 31 December = 4 months, so 4,000
# Step 3: Carried forward
  84,000 - 4,000 = 80,000
= Answer: $80,000
! Amortisation starts when sales start, not at the start of the year.`,
`# Шаг 1: Разделим затраты
  15 000 на химикаты: применения нет, это исследования. Расход.
  84 000 на чистящее средство: условия выполнены. Капитализируем.
# Шаг 2: Амортизация начинается с коммерческого производства
  84 000 / 7 лет = 12 000 в год = 1 000 в месяц
  С 1 сентября по 31 декабря = 4 месяца, значит 4 000
# Шаг 3: Остаток на конец
  84 000 - 4 000 = 80 000
= Ответ: $80 000
! Амортизация начинается с начала продаж, а не с начала года.`,
`# 1-qadam: Xarajatlarni ajratamiz
  Kimyoviy moddalarga 15 000: qo'llanish topilmagan, bu tadqiqot. Xarajat.
  Tozalash vositasiga 84 000: shartlar bajarilgan. Kapitallashtiramiz.
# 2-qadam: Amortizatsiya tijoriy ishlab chiqarishdan boshlanadi
  84 000 / 7 yil = yiliga 12 000 = oyiga 1 000
  1 sentyabrdan 31 dekabrgacha = 4 oy, demak 4 000
# 3-qadam: Keyingi davrga o'tadi
  84 000 - 4 000 = 80 000
= Javob: $80 000
! Amortizatsiya yil boshidan emas, sotuv boshlanganda boshlanadi.`),

    q('9.7', 215, 'single', `A manufacturer spends $46,000 developing new techniques that will soon be used to cut production costs, $31,000 researching a new process to improve the quality of its standard product, and $9,000 on market research into whether a new product could sell. It capitalises costs whenever IAS 38 allows. How much is charged to profit or loss as research and development? (Ignore amortisation.)`,
      pick(['$86,000', '$40,000', '$31,000', '$46,000'], 1),
`# Step 1: Sort each cost
  46,000 new techniques, soon in use, saving costs: development that meets the conditions. Capitalise.
  31,000 researching a new process: research. Expense.
  9,000 market research: the product is not yet shown to be viable, so the conditions are not met. Expense.
# Step 2: Total expense
  31,000 + 9,000 = 40,000
= Answer: $40,000
! Benefits can come from cost savings as well as sales.`,
`# Шаг 1: Разберём каждую затрату
  46 000 новые методы, скоро в работе, экономия затрат: разработка, условия выполнены. Капитализируем.
  31 000 исследование нового процесса: исследования. Расход.
  9 000 маркетинговое исследование: жизнеспособность продукта не доказана, условия не выполнены. Расход.
# Шаг 2: Итого расход
  31 000 + 9 000 = 40 000
= Ответ: $40 000
! Выгода может быть и в экономии затрат, а не только в продажах.`,
`# 1-qadam: Har bir xarajatni ajratamiz
  46 000 yangi usullar, tez orada ishlatiladi, xarajatni tejaydi: shartlarga mos ishlanma. Kapitallashtiramiz.
  31 000 yangi jarayon tadqiqoti: tadqiqot. Xarajat.
  9 000 bozor tadqiqoti: mahsulot hayotiyligi isbotlanmagan, shartlar bajarilmagan. Xarajat.
# 2-qadam: Jami xarajat
  31 000 + 9 000 = 40 000
= Javob: $40 000
! Foyda nafaqat sotuvdan, balki xarajatni tejashdan ham kelishi mumkin.`),

    q('9.8', 215, 'single', `Which TWO of these would stop development costs from being capitalised? (1) The development is not yet finished. (2) The benefits from the finished development are expected to be less than its cost. (3) Funds are unlikely to be available to finish the development. (4) The development is expected to lead to more than one product.`,
      pick(['1 and 2', '2 and 3', '3 and 4', '1 and 4'], 1),
`Check each against the conditions for capitalising.
- (1) Not finished: normal. Costs are capitalised while the work goes on, if the conditions are met.
- (2) Benefits below cost: fails the "expected to be profitable" condition. STOPS it.
- (3) No funds to finish: fails the "adequate resources" condition. STOPS it.
- (4) More than one product: no rule against that.
= Answer: 2 and 3`,
`Сверим каждое с условиями капитализации.
- (1) Не завершена: это нормально. Затраты капитализируют по ходу работ, если условия выполнены.
- (2) Выгоды меньше затрат: не выполнено условие «ожидается прибыльность». МЕШАЕТ.
- (3) Нет средств на завершение: не выполнено условие «достаточные ресурсы». МЕШАЕТ.
- (4) Больше одного продукта: такого запрета нет.
= Ответ: 2 и 3`,
`Har birini kapitallashtirish shartlari bilan solishtiramiz.
- (1) Tugallanmagan: bu odatiy. Shartlar bajarilsa, ish davomida xarajatlar kapitallashtiriladi.
- (2) Foyda xarajatdan kam: «foydali bo'lishi kutiladi» sharti bajarilmagan. TO'SADI.
- (3) Tugatishga mablag' yo'q: «yetarli resurslar» sharti bajarilmagan. TO'SADI.
- (4) Bir nechta mahsulot: bunday taqiq yo'q.
= Javob: 2 va 3`),

    q('9.9', 215, 'number', `A company bought a patent on 31 December Year 0 for $180,000. It expects to use the patent for 12 years, after which it will be worth nothing. What is the amortisation charge for Year 1? (in $)`,
      amount(15000, '$15,000'),
`# Step 1: Amortise over the useful life
  180,000 / 12 = 15,000
= Answer: $15,000`,
`# Шаг 1: Амортизируем за срок полезного использования
  180 000 / 12 = 15 000
= Ответ: $15 000`,
`# 1-qadam: Foydali muddat davomida amortizatsiya qilamiz
  180 000 / 12 = 15 000
= Javob: $15 000`),

    q('9.10', 215, 'single', `A company bought a four-year licence to run a bus route for $24,000 and capitalised it as an intangible asset. What entry records the amortisation in its third year?`,
      pick([
        'Dr Expenses $24,000, Cr Accumulated amortisation $24,000',
        'Dr Expenses $6,000, Cr Accumulated amortisation $6,000',
        'Dr Intangible assets $6,000, Cr Accumulated amortisation $6,000',
        'Dr Accumulated amortisation $24,000, Cr Intangible assets $24,000',
      ], 1),
`# Step 1: Yearly charge
  24,000 / 4 = 6,000
# Step 2: The entry, like depreciation
  Dr Expenses (amortisation charge)
  Cr Accumulated amortisation
= Answer: Dr Expenses $6,000, Cr Accumulated amortisation $6,000`,
`# Шаг 1: Годовая амортизация
  24 000 / 4 = 6 000
# Шаг 2: Проводка, как при амортизации ОС
  Дт Расходы (амортизация)
  Кт Накопленная амортизация
= Ответ: Дт Расходы $6 000, Кт Накопленная амортизация $6 000`,
`# 1-qadam: Yillik amortizatsiya
  24 000 / 4 = 6 000
# 2-qadam: Yozuv, asosiy vositalar amortizatsiyasi kabi
  Dt Xarajatlar (amortizatsiya)
  Kt Jamg'arilgan amortizatsiya
= Javob: Dt Xarajatlar $6 000, Kt Jamg'arilgan amortizatsiya $6 000`),

    q('9.11', 215, 'single', `What is the purpose of amortisation?`,
      pick([
        'To spread the cost of an intangible asset over its useful life',
        'To set money aside to buy a replacement asset',
        'To bring an intangible asset down to its market value',
        'To allow for the risk that comes with intangible assets',
      ], 0),
`Amortisation is depreciation for intangible assets. It matches the cost of the asset to the periods that benefit from it.
- It does not set money aside, and it is not a valuation.
= Answer: to spread the cost of an intangible asset over its useful life`,
`Амортизация нематериальных активов — то же, что амортизация основных средств. Она относит стоимость актива на периоды, получающие выгоду.
- Она не откладывает деньги и не является оценкой.
= Ответ: распределить стоимость нематериального актива на срок его полезного использования`,
`Nomoddiy aktivlar amortizatsiyasi asosiy vositalar amortizatsiyasi bilan bir xil. U aktiv qiymatini foyda oladigan davrlarga taqsimlaydi.
- U pul ajratmaydi va baholash emas.
= Javob: nomoddiy aktiv qiymatini foydali muddatga taqsimlash`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
