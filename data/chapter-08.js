'use strict';

const chapter08 = {
  id: 'chapter-08',
  titles: { en: 'Intangible assets', ru: 'Нематериальные активы', uz: 'Nomoddiy aktivlar' },
  objectives: [
    {
      en: 'Tell tangible from intangible non-current assets',
      ru: 'Отличать материальные внеоборотные активы от нематериальных',
      uz: 'Moddiy va nomoddiy uzoq muddatli aktivlarni ajratish',
    },
    {
      en: 'Explain how IAS 38 treats research and development costs',
      ru: 'Объяснять, как IAS 38 учитывает затраты на исследования и разработки',
      uz: 'IAS 38 tadqiqot va ishlanma xarajatlarini qanday hisobga olishini tushuntirish',
    },
    {
      en: 'Calculate what to capitalise and what to expense',
      ru: 'Рассчитывать, что капитализировать, а что списывать на расходы',
      uz: 'Nimani kapitallashtirish va nimani xarajatga yozishni hisoblash',
    },
    {
      en: 'Explain and calculate amortisation of intangible assets',
      ru: 'Объяснять и рассчитывать амортизацию нематериальных активов',
      uz: 'Nomoddiy aktivlar amortizatsiyasini tushuntirish va hisoblash',
    },
  ],
  sections: [
    {
      key: {
        en: `- Intangible asset (IAS 38): identifiable, non-monetary, no physical substance.
- Recognise it only if it meets the definition and the recognition criteria.
- Benefits are probable and cost can be measured reliably.
- Measure initially at cost. Examples: patents, licences, brands, development costs.`,
        ru: `- Нематериальный актив (IAS 38): идентифицируемый, неденежный, без физической формы.
- Признавайте только при соответствии определению и критериям признания.
- Выгоды вероятны, а стоимость можно надёжно оценить.
- Первоначально оценка по стоимости. Примеры: патенты, лицензии, бренды, затраты на разработку.`,
        uz: `- Nomoddiy aktiv (IAS 38): aniqlanadigan, pul bo'lmagan, jismoniy shakli yo'q.
- Faqat ta'rifga va tan olish mezonlariga mos bo'lsa tan oling.
- Foyda ehtimoliy va qiymatni ishonchli o'lchash mumkin.
- Dastlab qiymatda o'lchanadi. Misollar: patentlar, litsenziyalar, brendlar, ishlanma xarajatlari.`,
      },
      exam: {
        en: `- An intangible asset can be bought (a licence, a brand) or generated internally (development costs). It can normally be sold.
- Advertising costs and training costs can never be capitalised as an intangible asset.
- Internally generated goodwill cannot be capitalised. Costs of testing a separately bought intangible so it works are part of its cost.
- Goodwill BOUGHT when buying another business can be shown as an intangible asset. Goodwill a business builds up itself cannot.`,
        ru: `- Нематериальный актив можно купить (лицензия, бренд) или создать внутри (затраты на разработку). Обычно его можно продать.
- Расходы на рекламу и обучение никогда нельзя капитализировать как нематериальный актив.
- Внутренне созданный гудвил капитализировать нельзя. Затраты на проверку работы отдельно купленного нематериального актива входят в его стоимость.
- Гудвил, КУПЛЕННЫЙ при покупке другого бизнеса, можно показать как нематериальный актив. Гудвил, созданный самим бизнесом, — нельзя.`,
        uz: `- Nomoddiy aktivni sotib olish mumkin (litsenziya, brend) yoki ichkarida yaratish mumkin (ishlanma xarajatlari). Odatda uni sotish mumkin.
- Reklama va o'qitish xarajatlarini hech qachon nomoddiy aktiv sifatida kapitallashtirib bo'lmaydi.
- Ichki yaratilgan gudvilni kapitallashtirib bo'lmaydi. Alohida sotib olingan nomoddiy aktivning ishlashini tekshirish xarajati uning qiymatiga kiradi.
- Boshqa biznesni sotib olishda SOTIB OLINGAN gudvil nomoddiy aktiv sifatida ko'rsatilishi mumkin. Biznesning o'zi yaratgan gudvil esa mumkin emas.`,
      },
      heading: { en: 'What an intangible asset is', ru: 'Что такое нематериальный актив', uz: 'Nomoddiy aktiv nima' },
      body: {
        en: `Non-current assets are assets used in the business on an ongoing basis to generate revenue. IAS 38 defines an intangible asset as an identifiable non-monetary asset without physical substance.

The entity controls it as a result of past events and expects future economic benefits from it. It lacks physical form, and it must be identifiable and separately distinguishable from goodwill.

An intangible asset is recognised only if it meets this definition and the recognition criteria: its cost can be measured reliably, and it is probable that its future economic benefits will flow to the entity. It is measured at cost when first recognised. Development costs are internally generated intangible assets, and are capitalised only if specific conditions are met, as shown in the next section.`,
        ru: `Внеоборотные активы — это активы, постоянно используемые в бизнесе для получения выручки. IAS 38 определяет нематериальный актив как идентифицируемый неденежный актив без физической формы.

Организация контролирует его в результате прошлых событий и ожидает от него будущих экономических выгод. У него нет физической формы, и он должен быть идентифицируемым и отделимым от гудвила.

Нематериальный актив признаётся, только если соответствует этому определению и критериям признания: его стоимость можно надёжно оценить, и вероятно, что будущие экономические выгоды поступят организации. При первоначальном признании он оценивается по стоимости. Затраты на разработку — внутренне созданные нематериальные активы, и они капитализируются, только если выполнены особые условия, как показано в следующем разделе.`,
        uz: `Uzoq muddatli aktivlar — daromad olish uchun biznesda doimiy ishlatiladigan aktivlar. IAS 38 nomoddiy aktivni jismoniy shakli yo'q, aniqlanadigan, pul bo'lmagan aktiv deb ta'riflaydi.

Korxona uni o'tgan voqealar natijasida nazorat qiladi va undan kelajakda iqtisodiy foyda kutadi. Uning jismoniy shakli yo'q va u aniqlanadigan hamda gudvildan alohida ajratiladigan bo'lishi kerak.

Nomoddiy aktiv faqat shu ta'rifga va tan olish mezonlariga mos kelsa tan olinadi: uning qiymatini ishonchli o'lchash mumkin va kelajakdagi iqtisodiy foyda korxonaga kelishi ehtimol. Dastlab qiymatda o'lchanadi. Ishlanma xarajatlari ichki yaratilgan nomoddiy aktivlar bo'lib, faqat maxsus shartlar bajarilganda kapitallashtiriladi, buni keyingi bo'limda ko'ramiz.`,
      },
      example: {
        en: `A cafe pays for two things.
# 1. A franchise licence: $12,000 to use a famous coffee brand for 4 years
  No physical form, the cafe controls it, it will bring in sales: an intangible asset at $12,000
# 2. Newspaper adverts: $2,000
  They may bring customers, but advertising is never an asset: an expense of $2,000
= Intangible assets: $12,000. Expenses: $2,000.`,
        ru: `Кафе платит за две вещи.
# 1. Франшизная лицензия: $12,000 за право использовать известный кофейный бренд 4 года
  Нет физической формы, кафе контролирует её, она принесёт продажи: нематериальный актив $12,000
# 2. Реклама в газете: $2,000
  Она может привести клиентов, но реклама никогда не актив: расход $2,000
= Нематериальные активы: $12,000. Расходы: $2,000.`,
        uz: `Kafe ikki narsa uchun to'laydi.
# 1. Franshiza litsenziyasi: mashhur qahva brendidan 4 yil foydalanish uchun $12,000
  Jismoniy shakli yo'q, kafe nazorat qiladi, sotuv keltiradi: $12,000 nomoddiy aktiv
# 2. Gazetadagi reklama: $2,000
  Mijoz olib kelishi mumkin, lekin reklama hech qachon aktiv emas: $2,000 xarajat
= Nomoddiy aktivlar: $12,000. Xarajatlar: $2,000.`,
      },
      simple: {
        en: `An intangible asset is something valuable that you cannot touch: a licence, a patent, a brand, or the cost of developing a new product.

It is recorded as an asset only if it is identifiable (separate from the business as a whole), its cost can be measured, and it will probably bring money in. It starts at cost. Advertising and training can never be intangible assets, however useful they are.`,
        ru: `Нематериальный актив — ценность, которую нельзя потрогать: лицензия, патент, бренд или затраты на разработку нового продукта.

Его записывают как актив, только если он идентифицируем (отделим от бизнеса в целом), его стоимость можно измерить и он, вероятно, принесёт деньги. Начальная оценка — по стоимости. Реклама и обучение никогда не становятся нематериальными активами, как бы полезны они ни были.`,
        uz: `Nomoddiy aktiv — ushlab bo'lmaydigan qimmatli narsa: litsenziya, patent, brend yoki yangi mahsulotni ishlab chiqish xarajatlari.

U faqat identifikatsiya qilinadigan (biznesdan alohida), qiymatini o'lchash mumkin va pul keltirishi ehtimoli katta bo'lsa aktiv sifatida yoziladi. Boshida qiymatda baholanadi. Reklama va o'qitish qanchalik foydali bo'lmasin, hech qachon nomoddiy aktiv bo'lmaydi.`,
      },
    },
    {
      key: {
        en: `- Research: planned investigation to gain new knowledge. Always an expense.
- Development: applying research to a plan or design before commercial production.
- Development costs are capitalised only if all the criteria are met (PIRATE).
- If research cost was expensed, it can never be put back as an asset.`,
        ru: `- Исследования: плановое изучение для получения новых знаний. Всегда расход.
- Разработка: применение результатов исследований к плану или проекту до начала производства.
- Затраты на разработку капитализируются, только если выполнены все критерии (PIRATE).
- Если затраты на исследования списаны в расход, вернуть их в актив нельзя.`,
        uz: `- Tadqiqot: yangi bilim olish uchun rejali o'rganish. Doim xarajat.
- Ishlanma: tadqiqot natijalarini tijorat ishlab chiqarishdan oldin reja yoki loyihaga qo'llash.
- Ishlanma xarajatlari faqat barcha mezonlar bajarilganda kapitallashtiriladi (PIRATE).
- Tadqiqot xarajati yozib yuborilgan bo'lsa, uni aktivga qaytarib bo'lmaydi.`,
      },
      exam: {
        en: `- PIRATE: Probable benefits, Intention to complete, Reliable cost measurement, Adequate resources, Technical feasibility, Expected to be profitable.
- Costs before the criteria are first met stay as expenses and are never reinstated.
- Equipment bought for research is property, plant and equipment, so it is capitalised and depreciated under IAS 16.
- Projects are reviewed each year end. A project that no longer meets the criteria is written off to profit or loss.
- Research (always an expense): experiments, staff costs of research, testing whether a substance or idea could work, looking for uses of a material, market research.
- Development (an asset once PIRATE is met): building a prototype or working model, staff costs on a product expected to bring benefits, new techniques soon to be used in production.
- Capitalising is NOT a choice: if all the conditions are met, development costs MUST be capitalised. They are shown as intangible non-current assets.
- What stops capitalising: benefits expected to be less than the cost, or funds unlikely to be there to finish. What does NOT stop it: the work is not finished yet, or it may lead to more than one product.`,
        ru: `- PIRATE: Probable (вероятные выгоды), Intention (намерение завершить), Reliable (надёжная оценка затрат), Adequate (достаточные ресурсы), Technical (техническая осуществимость), Expected (ожидаемая прибыльность).
- Затраты до первого выполнения критериев остаются расходами и не восстанавливаются.
- Оборудование для исследований — основные средства, поэтому капитализируется и амортизируется по IAS 16.
- Проекты пересматриваются в конце каждого года. Проект, переставший соответствовать критериям, списывается в прибыль или убыток.
- Исследования (всегда расход): эксперименты, зарплата исследователей, проверка, может ли вещество или идея работать, поиск применения материалу, маркетинговые исследования.
- Разработка (актив, когда выполнен PIRATE): создание прототипа или рабочей модели, зарплата на продукт, который принесёт выгоду, новые методы, которые скоро пойдут в производство.
- Капитализация — НЕ выбор: если все условия выполнены, затраты на разработку ОБЯЗАТЕЛЬНО капитализируют. Их показывают как нематериальные внеоборотные активы.
- Что мешает капитализации: ожидаемая выгода меньше затрат или вряд ли хватит денег закончить. Что НЕ мешает: работа ещё не закончена или она может дать больше одного продукта.`,
        uz: `- PIRATE: Probable (ehtimoliy foyda), Intention (tugatish niyati), Reliable (ishonchli xarajat o'lchovi), Adequate (yetarli resurs), Technical (texnik imkoniyat), Expected (foydali bo'lishi kutiladi).
- Mezonlar birinchi marta bajarilguncha bo'lgan xarajatlar xarajat bo'lib qoladi va qaytarilmaydi.
- Tadqiqot uchun uskuna asosiy vosita, shuning uchun kapitallashtiriladi va IAS 16 bo'yicha amortizatsiyalanadi.
- Loyihalar har yil oxirida qayta ko'riladi. Mezonlarga endi mos kelmaydigan loyiha foyda yoki zararga yozib yuboriladi.
- Tadqiqot (har doim xarajat): tajribalar, tadqiqotchilar maoshi, modda yoki g'oya ishlashini tekshirish, materialga qo'llanish topish, bozor tadqiqoti.
- Ishlanma (PIRATE bajarilgach aktiv): prototip yoki ishlaydigan model yaratish, foyda keltiradigan mahsulot uchun xodimlar maoshi, tez orada ishlab chiqarishda qo'llanadigan yangi usullar.
- Kapitallashtirish TANLOV EMAS: barcha shartlar bajarilsa, ishlanma xarajatlari MAJBURIY kapitallashtiriladi. Ular nomoddiy uzoq muddatli aktiv sifatida ko'rsatiladi.
- Kapitallashtirishga nima to'sqinlik qiladi: kutilgan foyda xarajatdan kam yoki tugatishga mablag' yetmasligi mumkin. Nima to'sqinlik QILMAYDI: ish hali tugamagan yoki bir nechta mahsulotga olib kelishi mumkin.`,
      },
      heading: { en: 'Research and development', ru: 'Исследования и разработки', uz: 'Tadqiqot va ishlanma' },
      body: {
        en: `IAS 38 defines research as original and planned investigation undertaken with the prospect of gaining new scientific or technical knowledge and understanding. Development is the application of research findings or other knowledge to a plan or design for new or substantially improved materials, products, processes or services before commercial production or use starts.

All research expenditure is written off to profit or loss as it is incurred. Research does not directly lead to future benefits, so costs cannot be matched with them, and prudence applies.

Development costs must be capitalised as an intangible asset if they meet the definition and recognition criteria. Typically that means all of these are met: a probable inflow of benefits (through sales or internal savings), the intention to complete and use or sell the asset, reliable measurement of the costs, adequate financial and other resources, technical feasibility, and expected profitability, with benefits exceeding the project's costs. If any criterion is not met, the costs are expensed as incurred. A policy of capitalising must be applied to every project that meets the criteria.`,
        ru: `IAS 38 определяет исследования как оригинальное плановое изучение с целью получить новые научные или технические знания. Разработка — это применение результатов исследований или других знаний к плану или проекту новых или существенно улучшенных материалов, продуктов, процессов или услуг до начала коммерческого производства или использования.

Все затраты на исследования списываются на прибыль или убыток по мере возникновения. Исследования напрямую не ведут к будущим выгодам, поэтому затраты нельзя сопоставить с ними, и действует осмотрительность.

Затраты на разработку должны капитализироваться как нематериальный актив, если соответствуют определению и критериям признания. Обычно это значит выполнение всего перечисленного: вероятный приток выгод (через продажи или внутреннюю экономию), намерение завершить и использовать или продать актив, надёжная оценка затрат, достаточные финансовые и иные ресурсы, техническая осуществимость и ожидаемая прибыльность, когда выгоды превышают затраты проекта. Если какой-либо критерий не выполнен, затраты относятся на расходы по мере возникновения. Политика капитализации должна применяться ко всем проектам, отвечающим критериям.`,
        uz: `IAS 38 tadqiqotni yangi ilmiy yoki texnik bilim va tushuncha olish maqsadidagi asl va rejali o'rganish deb ta'riflaydi. Ishlanma — tijorat ishlab chiqarish yoki foydalanish boshlanishidan oldin tadqiqot natijalarini yoki boshqa bilimlarni yangi yoki sezilarli yaxshilangan materiallar, mahsulotlar, jarayonlar yoki xizmatlar rejasi yoki loyihasiga qo'llash.

Barcha tadqiqot xarajatlari yuzaga kelganda foyda yoki zararga yoziladi. Tadqiqot to'g'ridan-to'g'ri kelajak foydasiga olib kelmaydi, shuning uchun xarajatlarni ular bilan moslashtirib bo'lmaydi va ehtiyotkorlik qo'llanadi.

Ishlanma xarajatlari ta'rif va tan olish mezonlariga mos kelsa, nomoddiy aktiv sifatida kapitallashtirilishi kerak. Odatda bu quyidagilarning hammasi bajarilishini anglatadi: foydaning ehtimoliy kirimi (sotuv yoki ichki tejash orqali), aktivni tugatish va ishlatish yoki sotish niyati, xarajatlarni ishonchli o'lchash, yetarli moliyaviy va boshqa resurslar, texnik imkoniyat va kutilayotgan foydalilik, bunda foyda loyiha xarajatlaridan oshadi. Birorta mezon bajarilmasa, xarajatlar yuzaga kelganda xarajatga yoziladi. Kapitallashtirish siyosati mezonlarga mos keladigan har bir loyihaga qo'llanishi kerak.`,
      },
      example: {
        en: `A bakery builds an online ordering app.
# Stage 1: Research, $5,000
  Surveying customers and testing which technology to use
  Not yet sure it will work or pay: an expense
# Stage 2: Development, $20,000
  The plan is clear, the money is there, it can be built and it looks profitable: all six conditions are met
  Capitalised as an intangible asset: $20,000
# What if a rival launches a free app half-way?
  If the bakery stops believing the app will pay, costs after that point are expensed
! The $5,000 of research can never be moved into the asset later, even when the app succeeds.`,
        ru: `Пекарня создаёт приложение для онлайн-заказов.
# Этап 1: Исследования, $5,000
  Опрос клиентов и выбор технологии
  Ещё неясно, сработает ли и окупится ли: расход
# Этап 2: Разработка, $20,000
  План ясен, деньги есть, создать можно, выглядит прибыльно: все шесть условий выполнены
  Капитализируется как нематериальный актив: $20,000
# А если конкурент на полпути выпустит бесплатное приложение?
  Если пекарня перестанет верить, что приложение окупится, затраты после этого — расходы
! $5,000 исследований нельзя потом перенести в актив, даже если приложение будет успешным.`,
        uz: `Novvoyxona onlayn buyurtma ilovasini yaratadi.
# 1-bosqich: Tadqiqot, $5,000
  Mijozlarni so'rash va texnologiyani tanlash
  Ishlashi va o'zini oqlashi hali noaniq: xarajat
# 2-bosqich: Ishlanma, $20,000
  Reja aniq, pul bor, yaratish mumkin, foydali ko'rinadi: oltita shartning hammasi bajarilgan
  Nomoddiy aktiv sifatida kapitallashtiriladi: $20,000
# Raqib yarim yo'lda bepul ilova chiqarsa-chi?
  Novvoyxona ilova o'zini oqlashiga ishonmay qolsa, shundan keyingi xarajatlar — xarajat
! $5,000 tadqiqotni keyin, ilova muvaffaqiyatli bo'lsa ham, aktivga o'tkazib bo'lmaydi.`,
      },
      simple: {
        en: `Research is finding out ("Can this work? What do customers want?"). It is ALWAYS an expense, because you cannot be sure it will ever earn money.

Development is turning that knowledge into a real product. It MUST be made an asset once all six conditions are met (remember PIRATE): Probable benefits, Intention to complete, Reliable cost, Adequate resources, Technical feasibility, Expected profit. Costs spent before the conditions were met stay as expenses forever.`,
        ru: `Исследования — выяснение («Сработает ли? Чего хотят клиенты?»). Это ВСЕГДА расход, ведь нельзя быть уверенным, что они принесут деньги.

Разработка — превращение этих знаний в реальный продукт. Её ОБЯЗАТЕЛЬНО делают активом, когда выполнены все шесть условий (запомните PIRATE): вероятные выгоды, намерение завершить, надёжная оценка затрат, достаточные ресурсы, техническая осуществимость, ожидаемая прибыль. Затраты до выполнения условий навсегда остаются расходами.`,
        uz: `Tadqiqot — aniqlash («Bu ishlaydimi? Mijozlar nima istaydi?»). Bu DOIM xarajat, chunki u pul keltirishiga ishonch yo'q.

Ishlanma — bu bilimni haqiqiy mahsulotga aylantirish. Oltita shart bajarilganda u albatta aktiv qilinadi (PIRATE ni eslang): ehtimoliy naf, tugatish niyati, xarajatni ishonchli o'lchash, yetarli resurslar, texnik amalga oshirish mumkinligi, kutilgan foyda. Shartlar bajarilishidan oldingi xarajatlar abadiy xarajat bo'lib qoladi.`,
      },
    },
    {
      key: {
        en: `- Amortise intangibles with a finite life, as depreciation is done for tangible assets.
- Development costs start to be amortised when commercial production or sales begin.
- Spread the cost over the period of benefits. Use straight line if the pattern is unclear.
- An indefinite life asset is not amortised. It has an annual impairment review.
- Under the cost model, impairment is a charge in profit or loss.`,
        ru: `- Нематериальные активы с конечным сроком амортизируют, как амортизируют материальные активы.
- Амортизация затрат на разработку начинается с началом коммерческого производства или продаж.
- Распределяйте стоимость на период выгод. Если схема неясна, применяйте прямолинейный метод.
- Актив с неопределённым сроком не амортизируется. Его ежегодно проверяют на обесценение.
- При модели стоимости обесценение — расход в прибыли или убытке.`,
        uz: `- Cheklangan muddatli nomoddiy aktivlar moddiy aktivlar kabi amortizatsiyalanadi.
- Ishlanma xarajatlari amortizatsiyasi tijorat ishlab chiqarish yoki sotuv boshlanganda boshlanadi.
- Qiymatni foyda davriga taqsimlang. Naqsh noaniq bo'lsa, to'g'ri chiziqli usulni qo'llang.
- Muddati noaniq aktiv amortizatsiyalanmaydi. Har yili qadrsizlanishga tekshiriladi.
- Qiymat modelida qadrsizlanish foyda yoki zarardagi xarajat.`,
      },
      exam: {
        en: `- To find the original cost, add the accumulated amortisation to the carrying amount, then divide by the useful life for the annual charge.
- A licence is amortised from the date it is available for use, and development costs from the start of production or sales. Apply pro rata for part of a year.
- Amortisation spreads cost over the useful life. It is not a way to spread the payment, estimate replacement money, or show market value.
- There is NO five-year limit on amortising development costs. Use the period the benefits are expected. Amortisation is an expense in profit or loss, not in the statement of changes in equity.
- Amortisation entry: Dr Amortisation expense, Cr Accumulated amortisation. The same amount every year under straight line ($24,000 / 4 years = $6,000 in year 3 too).`,
        ru: `- Чтобы найти первоначальную стоимость, прибавьте накопленную амортизацию к балансовой стоимости, затем разделите на срок использования.
- Лицензия амортизируется с даты, когда доступна для использования, а затраты на разработку — с начала производства или продаж. За часть года начисляйте пропорционально.
- Амортизация распределяет стоимость на срок использования. Это не способ растянуть оплату, оценить деньги на замену или показать рыночную стоимость.
- Пятилетнего предела для амортизации разработки НЕТ. Используйте период, когда ожидается выгода. Амортизация — расход в отчёте о прибылях и убытках, а не в отчёте об изменениях капитала.
- Проводка амортизации: Дт Расход на амортизацию, Кт Накопленная амортизация. При линейном методе каждый год одна сумма ($24,000 / 4 года = $6,000 и в 3-м году).`,
        uz: `- Dastlabki qiymatni topish uchun balans qiymatiga to'plangan amortizatsiyani qo'shing, so'ng foydali muddatga bo'ling.
- Litsenziya foydalanishga tayyor bo'lgan sanadan, ishlanma xarajatlari esa ishlab chiqarish yoki sotuv boshlanishidan amortizatsiyalanadi. Yilning bir qismi uchun nisbatan hisoblang.
- Amortizatsiya qiymatni foydali muddatga taqsimlaydi. U to'lovni taqsimlash, almashtirish pulini baholash yoki bozor qiymatini ko'rsatish usuli emas.
- Ishlanma amortizatsiyasi uchun besh yillik chegara YO'Q. Foyda kutilayotgan davrdan foydalaning. Amortizatsiya foyda yoki zarar hisobotidagi xarajat, kapitaldagi o'zgarishlar hisobotida emas.
- Amortizatsiya yozuvi: Dt Amortizatsiya xarajati, Kt Jamg'arilgan amortizatsiya. To'g'ri chiziqli usulda har yili bir xil summa ($24,000 / 4 yil = 3-yilda ham $6,000).`,
      },
      heading: {
        en: 'Amortisation of intangible assets',
        ru: 'Амортизация нематериальных активов',
        uz: 'Nomoddiy aktivlar amortizatsiyasi',
      },
      body: {
        en: `Amortisation is to intangible assets what depreciation is to tangible ones. It spreads the cost of an asset with a finite life over the period during which it is expected to produce benefits, so that cost is matched to the revenue it helps earn.

For capitalised development costs, amortisation begins when commercial production or sales start. The method should reflect how the benefits are used up. If that pattern cannot be determined reliably, straight line is used.

An intangible asset with an indefinite useful life is not amortised. There is no foreseeable limit to the period it will generate cash inflows, so instead it is subject to an annual impairment review.

The accounting is the same as for depreciation: Dr Amortisation charge (profit or loss), Cr Accumulated amortisation (statement of financial position).`,
        ru: `Амортизация для нематериальных активов — то же, что износ для материальных. Она распределяет стоимость актива с конечным сроком на период, в течение которого он должен приносить выгоды, чтобы затраты сопоставлялись с выручкой, которую он помогает получить.

Для капитализированных затрат на разработку амортизация начинается с началом коммерческого производства или продаж. Метод должен отражать, как расходуются выгоды. Если схему нельзя надёжно определить, применяется прямолинейный метод.

Нематериальный актив с неопределённым сроком полезного использования не амортизируется. Нет предвидимого предела периоду, в течение которого он будет приносить денежные потоки, поэтому вместо этого он ежегодно проверяется на обесценение.

Учёт такой же, как для амортизации основных средств: Дт Расход по амортизации (прибыль или убыток), Кт Накопленная амортизация (отчёт о финансовом положении).`,
        uz: `Amortizatsiya nomoddiy aktivlar uchun moddiy aktivlardagi eskirish kabi. U cheklangan muddatli aktiv qiymatini u foyda keltirishi kutilgan davrga taqsimlaydi, shunda xarajat u topishga yordam bergan tushumga moslashadi.

Kapitallashtirilgan ishlanma xarajatlari uchun amortizatsiya tijorat ishlab chiqarish yoki sotuv boshlanganda boshlanadi. Usul foyda qanday sarflanishini aks ettirishi kerak. Naqsh ishonchli aniqlanmasa, to'g'ri chiziqli usul qo'llanadi.

Foydali muddati noaniq nomoddiy aktiv amortizatsiyalanmaydi. U pul kirimini keltiradigan davrning ko'zga ko'rinadigan chegarasi yo'q, shuning uchun uning o'rniga har yili qadrsizlanishga tekshiriladi.

Hisob moddiy aktivlardagi bilan bir xil: Dt Amortizatsiya xarajati (foyda yoki zarar), Kt To'plangan amortizatsiya (moliyaviy holat hisoboti).`,
      },
      example: {
        en: `The bakery's $20,000 app goes live on 1 October. It should bring benefits for 5 years. The year ends on 31 December.
# Step 1: A full year's amortisation
  $20,000 / 5 = $4,000
# Step 2: This year (only 3 months since launch)
  $4,000 × 3/12 = $1,000
# Step 3: Carrying amount at the year end
  $20,000 - $1,000 = $19,000
# The cafe's $12,000 licence for 4 years
  $12,000 / 4 = $3,000 a year`,
        ru: `Приложение пекарни за $20,000 запускают 1 октября. Оно должно приносить выгоду 5 лет. Год заканчивается 31 декабря.
# Шаг 1: Амортизация за полный год
  $20,000 / 5 = $4,000
# Шаг 2: В этом году (всего 3 месяца после запуска)
  $4,000 × 3/12 = $1,000
# Шаг 3: Балансовая стоимость на конец года
  $20,000 - $1,000 = $19,000
# Лицензия кафе $12,000 на 4 года
  $12,000 / 4 = $3,000 в год`,
        uz: `Novvoyxonaning $20,000 lik ilovasi 1 oktyabrda ishga tushadi. U 5 yil naf keltirishi kerak. Yil 31 dekabrda tugaydi.
# 1-qadam: To'liq yil amortizatsiyasi
  $20,000 / 5 = $4,000
# 2-qadam: Bu yil (ishga tushganidan beri 3 oy)
  $4,000 × 3/12 = $1,000
# 3-qadam: Yil oxiridagi balans qiymati
  $20,000 - $1,000 = $19,000
# Kafening 4 yillik $12,000 lik litsenziyasi
  $12,000 / 4 = yiliga $3,000`,
      },
      simple: {
        en: `Amortisation is depreciation for intangible assets: the cost is spread over the years the asset brings benefits. Use straight-line if you cannot tell the pattern.

Development costs start being amortised only when the product goes on sale. An intangible with no foreseeable end to its life (indefinite) is not amortised; instead it is checked every year for impairment.`,
        ru: `Амортизация нематериальных активов — то же, что амортизация основных средств: стоимость распределяют на годы, когда актив приносит выгоду. Если характер выгод неясен — линейно.

Разработку начинают амортизировать, только когда продукт поступает в продажу. Нематериальный актив без предсказуемого конца срока (неопределённый) не амортизируют, а каждый год проверяют на обесценение.`,
        uz: `Nomoddiy aktivlar amortizatsiyasi — asosiy vositalar amortizatsiyasi bilan bir xil: qiymat aktiv naf keltiradigan yillarga taqsimlanadi. Naf tartibi noaniq bo'lsa — to'g'ri chiziqli.

Ishlanma faqat mahsulot sotuvga chiqqanda amortizatsiya qilina boshlaydi. Muddatining oxiri ko'rinmaydigan (noaniq) nomoddiy aktiv amortizatsiya qilinmaydi, har yili qadrsizlanishga tekshiriladi.`,
      },
    },
    {
      key: {
        en: `- Cost model is almost always used. Cost less amortisation less impairment.
- Valuation model needs an active market. It is very rare, and not for development costs.
- A valuation gain goes to other comprehensive income and a revaluation surplus.
- Disclose methods, lives, the amortisation charge and a reconciliation of carrying amounts.
- Also disclose the total research and development expensed in the year.`,
        ru: `- Почти всегда применяется модель стоимости: стоимость минус амортизация минус обесценение.
- Модель переоценки требует активного рынка. Это очень редко и не для затрат на разработку.
- Прирост от переоценки идёт в прочий совокупный доход и резерв переоценки.
- Раскрывайте методы, сроки, расход по амортизации и сверку балансовой стоимости.
- Раскрывайте также общую сумму исследований и разработок, списанных на расходы за год.`,
        uz: `- Deyarli doim qiymat modeli qo'llanadi: qiymat minus amortizatsiya minus qadrsizlanish.
- Qayta baholash modeli faol bozorni talab qiladi. Bu juda kam, ishlanma xarajatlari uchun emas.
- Baholash foydasi boshqa umumlashgan daromadga va qayta baholash rezerviga o'tadi.
- Usullar, muddatlar, amortizatsiya xarajati va balans qiymati solishtirishini ko'rsating.
- Shuningdek, yilda xarajatga yozilgan tadqiqot va ishlanmaning jami summasini ko'rsating.`,
      },
      exam: {
        en: `- Under the revaluation model, movements in carrying amount go to other comprehensive income and other components of equity.
- Under the cost model, annual impairment charges go to profit or loss only.
- The reconciliation is similar to the property, plant and equipment grid, with columns such as development costs and licences.`,
        ru: `- При модели переоценки изменения балансовой стоимости идут в прочий совокупный доход и прочие компоненты капитала.
- При модели стоимости ежегодные расходы на обесценение идут только в прибыль или убыток.
- Сверка похожа на таблицу основных средств, со столбцами, например, затраты на разработку и лицензии.`,
        uz: `- Qayta baholash modelida balans qiymatidagi o'zgarishlar boshqa umumlashgan daromadga va kapitalning boshqa tarkibiy qismlariga o'tadi.
- Qiymat modelida yillik qadrsizlanish xarajatlari faqat foyda yoki zararga o'tadi.
- Solishtirish asosiy vositalar jadvaliga o'xshaydi, ustunlari masalan ishlanma xarajatlari va litsenziyalar.`,
      },
      heading: {
        en: 'Measurement and disclosure',
        ru: 'Оценка и раскрытие информации',
        uz: 'O\'lchash va ma\'lumotlarni ochish',
      },
      body: {
        en: `IAS 38 says an intangible asset is measured initially at cost. Afterwards either the cost model or the valuation model may be used. Under the cost model it is carried at cost less accumulated amortisation and accumulated impairment losses.

The valuation model needs fair value measured by reference to an active market, which means the assets must be homogeneous. That is very rarely the case, so in practice intangible assets are accounted for at cost, and development costs always use the cost model. In the rare case the valuation model is used, an upward revaluation goes to other comprehensive income and a separate revaluation surplus in equity, in the same way as under IAS 16.

IAS 38 requires disclosure of the amortisation methods and expected periods, a reconciliation of carrying amounts at the start and end of the period (new expenditure, amortisation and amounts written off because a project no longer qualifies), and the amortisation charge. The total of research and development expensed in the period is also disclosed.`,
        ru: `IAS 38: нематериальный актив первоначально оценивается по стоимости. Затем можно применять модель стоимости или модель переоценки. По модели стоимости он учитывается по стоимости за вычетом накопленной амортизации и накопленных убытков от обесценения.

Для модели переоценки нужна справедливая стоимость на основе активного рынка, а значит, активы должны быть однородными. Это бывает очень редко, поэтому на практике нематериальные активы учитываются по стоимости, а затраты на разработку всегда по модели стоимости. В редком случае применения модели переоценки прирост идёт в прочий совокупный доход и отдельный резерв переоценки в капитале, как по IAS 16.

IAS 38 требует раскрывать методы амортизации и ожидаемые сроки, сверку балансовой стоимости на начало и конец периода (новые затраты, амортизация и суммы, списанные из-за потери права на признание проекта) и расход по амортизации. Также раскрывается общая сумма исследований и разработок, списанных на расходы за период.`,
        uz: `IAS 38: nomoddiy aktiv dastlab qiymatda o'lchanadi. Keyin qiymat modeli yoki qayta baholash modeli qo'llanishi mumkin. Qiymat modelida u qiymat minus to'plangan amortizatsiya va to'plangan qadrsizlanish zararlari bilan yuritiladi.

Qayta baholash modeli faol bozorga asoslangan haqiqiy qiymatni talab qiladi, bu aktivlar bir jinsli bo'lishi kerakligini anglatadi. Bu juda kam uchraydi, shuning uchun amalda nomoddiy aktivlar qiymatda yuritiladi, ishlanma xarajatlari esa doim qiymat modelida. Qayta baholash modeli qo'llanadigan kam holatda o'sish IAS 16 dagi kabi boshqa umumlashgan daromadga va kapitaldagi alohida qayta baholash rezerviga o'tadi.

IAS 38 amortizatsiya usullari va kutilayotgan muddatlarni, davr boshi va oxiridagi balans qiymati solishtirishini (yangi xarajat, amortizatsiya va loyiha tan olinish huquqini yo'qotgani uchun yozilgan summalar) hamda amortizatsiya xarajatini ochib berishni talab qiladi. Davrda xarajatga yozilgan tadqiqot va ishlanmaning jami summasi ham ochib beriladi.`,
      },
      example: {
        en: `The bakery's notes at the year end.
# The grid (development costs column)
  Cost added in the year: $20,000
  Amortisation charged: $1,000
  Carrying amount at the end: $19,000
# A separate line
  Research and development expensed in the year: $5,000`,
        ru: `Примечания пекарни на конец года.
# Таблица (колонка «затраты на разработку»)
  Добавлено за год: $20,000
  Начислена амортизация: $1,000
  Балансовая стоимость на конец: $19,000
# Отдельная строка
  Исследования и разработки, списанные в расходы за год: $5,000`,
        uz: `Novvoyxonaning yil oxiridagi izohlari.
# Jadval («ishlanma xarajatlari» ustuni)
  Yil davomida qo'shilgan: $20,000
  Hisoblangan amortizatsiya: $1,000
  Oxiridagi balans qiymati: $19,000
# Alohida qator
  Yil davomida xarajatga chiqarilgan tadqiqot va ishlanmalar: $5,000`,
      },
      simple: {
        en: `In practice intangible assets are almost always kept at cost, less amortisation and any impairment (the cost model). Showing them at a current value needs an active market for identical assets, which is very rare, and development costs can never be revalued.

The notes explain the methods and useful lives, show a table of how the carrying amounts changed, and state how much research and development was expensed in the year.`,
        ru: `На практике нематериальные активы почти всегда учитывают по стоимости минус амортизация и обесценение (модель по стоимости). Для показа по текущей стоимости нужен активный рынок одинаковых активов, что очень редко, а разработки переоценивать нельзя никогда.

В примечаниях объясняют методы и сроки, дают таблицу изменения балансовой стоимости и указывают, сколько исследований и разработок списано в расходы за год.`,
        uz: `Amalda nomoddiy aktivlar deyarli doim qiymat minus amortizatsiya va qadrsizlanishda yuritiladi (qiymat modeli). Ularni joriy qiymatda ko'rsatish uchun bir xil aktivlarning faol bozori kerak, bu juda kam uchraydi, ishlanmalar esa hech qachon qayta baholanmaydi.

Izohlarda usullar va muddatlar tushuntiriladi, balans qiymati o'zgarishi jadvali beriladi va yil davomida xarajatga chiqarilgan tadqiqot va ishlanmalar summasi ko'rsatiladi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Intangible asset', ru: 'Нематериальный актив', uz: 'Nomoddiy aktiv' },
      definition: {
        en: 'An identifiable non-monetary asset without physical substance.',
        ru: 'Идентифицируемый неденежный актив без физической формы.',
        uz: 'Jismoniy shakli yo\'q, aniqlanadigan, pul bo\'lmagan aktiv.',
      },
      example: {
        en: 'A $12,000 licence to use a famous brand for 4 years.',
        ru: 'Лицензия за $12,000 на использование известного бренда 4 года.',
        uz: 'Mashhur brenddan 4 yil foydalanish uchun $12,000 lik litsenziya.',
      },
    },
    {
      term: { en: 'Patent', ru: 'Патент', uz: 'Patent' },
      definition: {
        en: 'A legal right to be the only one allowed to make or sell an invention for a set number of years.',
        ru: 'Законное право быть единственным, кто может производить или продавать изобретение определённое число лет.',
        uz: 'Ixtironi ma\'lum yillar davomida yolg\'iz ishlab chiqarish yoki sotish huquqi.',
      },
      example: {
        en: 'Buying the patent for a new kind of bicycle lock for $50,000.',
        ru: 'Покупка патента на новый велосипедный замок за $50,000.',
        uz: 'Yangi turdagi velosiped qulfi patentini $50,000 ga sotib olish.',
      },
    },
    {
      term: { en: 'Research', ru: 'Исследования', uz: 'Tadqiqot' },
      definition: {
        en: 'Original and planned investigation to gain new knowledge. Always expensed.',
        ru: 'Оригинальное плановое изучение для получения новых знаний. Всегда расход.',
        uz: 'Yangi bilim olish uchun asl va rejali o\'rganish. Doim xarajat.',
      },
      example: {
        en: 'Surveying customers to find out whether they want an app.',
        ru: 'Опрос клиентов, нужно ли им приложение.',
        uz: 'Mijozlarga ilova kerakmi, shuni bilish uchun so\'rov.',
      },
    },
    {
      term: { en: 'Development', ru: 'Разработка', uz: 'Ishlanma' },
      definition: {
        en: 'Applying research to a plan or design before commercial production. Capitalised if criteria are met.',
        ru: 'Применение исследований к плану или проекту до коммерческого производства. Капитализируется при выполнении критериев.',
        uz: 'Tadqiqotni tijorat ishlab chiqarishdan oldin rejaga qo\'llash. Mezonlar bajarilsa kapitallashtiriladi.',
      },
      example: {
        en: 'Writing the code for the app once it is clearly going ahead and will pay.',
        ru: 'Написание кода приложения, когда ясно, что проект пойдёт и окупится.',
        uz: 'Loyiha amalga oshishi va o\'zini oqlashi aniq bo\'lgach, ilova kodini yozish.',
      },
    },
    {
      term: { en: 'Amortisation', ru: 'Амортизация нематериальных активов', uz: 'Nomoddiy aktivlar amortizatsiyasi' },
      definition: {
        en: 'Spreading the cost of an intangible asset over its useful life.',
        ru: 'Распределение стоимости нематериального актива на срок его использования.',
        uz: 'Nomoddiy aktiv qiymatini foydali muddatga taqsimlash.',
      },
      example: {
        en: 'A $20,000 app used for 5 years: $4,000 a year.',
        ru: 'Приложение за $20,000 на 5 лет: $4,000 в год.',
        uz: '5 yil ishlatiladigan $20,000 lik ilova: yiliga $4,000.',
      },
    },
    {
      term: { en: 'Indefinite useful life', ru: 'Неопределённый срок использования', uz: 'Noaniq foydali muddat' },
      definition: {
        en: 'No foreseeable limit to the period of benefits. Not amortised, but reviewed annually for impairment.',
        ru: 'Нет предвидимого предела периода выгод. Не амортизируется, но ежегодно проверяется на обесценение.',
        uz: 'Foyda davrining ko\'zga ko\'rinadigan chegarasi yo\'q. Amortizatsiyalanmaydi, lekin har yili qadrsizlanishga tekshiriladi.',
      },
      example: {
        en: 'A brand that can be renewed for ever at little cost and has no foreseeable end.',
        ru: 'Бренд, который можно продлевать бесконечно за небольшие деньги, без видимого конца.',
        uz: 'Arzonga cheksiz yangilab turiladigan, oxiri ko\'rinmaydigan brend.',
      },
    },
    {
      term: { en: 'Impairment', ru: 'Обесценение', uz: 'Qadrsizlanish' },
      definition: {
        en: 'A fall in an asset\'s recoverable amount below its carrying amount, charged to profit or loss.',
        ru: 'Снижение возмещаемой стоимости актива ниже балансовой, относится на прибыль или убыток.',
        uz: 'Aktivning qoplanadigan qiymatining balans qiymatidan pasayishi, foyda yoki zararga yoziladi.',
      },
      example: {
        en: 'An app carried at $19,000 is now expected to earn only $10,000: a $9,000 impairment.',
        ru: 'Приложение с балансовой стоимостью $19,000 теперь принесёт только $10,000: обесценение $9,000.',
        uz: 'Balans qiymati $19,000 bo\'lgan ilova endi faqat $10,000 keltiradi: $9,000 qadrsizlanish.',
      },
    },
    {
      term: { en: 'Cost model', ru: 'Модель учёта по стоимости', uz: 'Qiymat modeli' },
      definition: {
        en: 'Keeping an asset at cost less accumulated depreciation or amortisation and any impairment.',
        ru: 'Учёт актива по стоимости минус накопленная амортизация и обесценение.',
        uz: 'Aktivni qiymat minus to\'plangan amortizatsiya va qadrsizlanishda yuritish.',
      },
      example: {
        en: 'Licence cost $12,000 - amortisation $3,000 = $9,000 shown after one year.',
        ru: 'Лицензия $12,000 - амортизация $3,000 = через год показывают $9,000.',
        uz: 'Litsenziya $12,000 - amortizatsiya $3,000 = bir yildan keyin $9,000 ko\'rsatiladi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter08;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter08.id] = chapter08;
