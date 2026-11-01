'use strict';

const chapter08 = {
  id: 'chapter-08',
  titles: { en: 'Intangible assets', ru: 'Нематериальные активы', uz: 'Nomoddiy aktivlar' },
  objectives: [
    { en: 'Tell tangible from intangible non-current assets', ru: 'Отличать материальные внеоборотные активы от нематериальных', uz: 'Moddiy va nomoddiy uzoq muddatli aktivlarni ajratish' },
    { en: 'Explain how IAS 38 treats research and development costs', ru: 'Объяснять, как IAS 38 учитывает затраты на исследования и разработки', uz: 'IAS 38 tadqiqot va ishlanma xarajatlarini qanday hisobga olishini tushuntirish' },
    { en: 'Calculate what to capitalise and what to expense', ru: 'Рассчитывать, что капитализировать, а что списывать на расходы', uz: 'Nimani kapitallashtirish va nimani xarajatga yozishni hisoblash' },
    { en: 'Explain and calculate amortisation of intangible assets', ru: 'Объяснять и рассчитывать амортизацию нематериальных активов', uz: 'Nomoddiy aktivlar amortizatsiyasini tushuntirish va hisoblash' },
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
- Internally generated goodwill cannot be capitalised. Costs of testing a separately bought intangible so it works are part of its cost.`,
        ru: `- Нематериальный актив можно купить (лицензия, бренд) или создать внутри (затраты на разработку). Обычно его можно продать.
- Расходы на рекламу и обучение никогда нельзя капитализировать как нематериальный актив.
- Внутренне созданный гудвил капитализировать нельзя. Затраты на проверку работы отдельно купленного нематериального актива входят в его стоимость.`,
        uz: `- Nomoddiy aktivni sotib olish mumkin (litsenziya, brend) yoki ichkarida yaratish mumkin (ishlanma xarajatlari). Odatda uni sotish mumkin.
- Reklama va o'qitish xarajatlarini hech qachon nomoddiy aktiv sifatida kapitallashtirib bo'lmaydi.
- Ichki yaratilgan gudvilni kapitallashtirib bo'lmaydi. Alohida sotib olingan nomoddiy aktivning ishlashini tekshirish xarajati uning qiymatiga kiradi.`,
      },
      heading: {
        en: 'What an intangible asset is',
        ru: 'Что такое нематериальный актив',
        uz: 'Nomoddiy aktiv nima',
      },
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
        en: `Madina's Mart buys a franchise licence for $12,000, allowing it to use a well-known brand name for four years. It has no physical form, belongs to the shop and will earn income, so it is an intangible asset recorded at its cost of $12,000. The $2,000 she spent on newspaper adverts cannot be added to it. Advertising is always an expense.`,
        ru: `Madina's Mart покупает лицензию франшизы за $12,000, позволяющую четыре года пользоваться известным брендом. У неё нет физической формы, она принадлежит магазину и будет приносить доход, поэтому это нематериальный актив по стоимости $12,000. $2,000, потраченные на газетную рекламу, к ней добавить нельзя. Реклама — всегда расход.`,
        uz: `Madina's Mart to'rt yil mashhur brend nomidan foydalanishga imkon beradigan franshiza litsenziyasini $12,000 ga sotib oladi. Uning jismoniy shakli yo'q, do'konga tegishli va daromad keltiradi, shuning uchun $12,000 qiymatda yoziladigan nomoddiy aktiv. Gazeta reklamasiga sarflangan $2,000 ni unga qo'shib bo'lmaydi. Reklama doim xarajat.`,
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
- Projects are reviewed each year end. A project that no longer meets the criteria is written off to profit or loss.`,
        ru: `- PIRATE: Probable (вероятные выгоды), Intention (намерение завершить), Reliable (надёжная оценка затрат), Adequate (достаточные ресурсы), Technical (техническая осуществимость), Expected (ожидаемая прибыльность).
- Затраты до первого выполнения критериев остаются расходами и не восстанавливаются.
- Оборудование для исследований — основные средства, поэтому капитализируется и амортизируется по IAS 16.
- Проекты пересматриваются в конце каждого года. Проект, переставший соответствовать критериям, списывается в прибыль или убыток.`,
        uz: `- PIRATE: Probable (ehtimoliy foyda), Intention (tugatish niyati), Reliable (ishonchli xarajat o'lchovi), Adequate (yetarli resurs), Technical (texnik imkoniyat), Expected (foydali bo'lishi kutiladi).
- Mezonlar birinchi marta bajarilguncha bo'lgan xarajatlar xarajat bo'lib qoladi va qaytarilmaydi.
- Tadqiqot uchun uskuna asosiy vosita, shuning uchun kapitallashtiriladi va IAS 16 bo'yicha amortizatsiyalanadi.
- Loyihalar har yil oxirida qayta ko'riladi. Mezonlarga endi mos kelmaydigan loyiha foyda yoki zararga yozib yuboriladi.`,
      },
      heading: {
        en: 'Research and development',
        ru: 'Исследования и разработки',
        uz: 'Tadqiqot va ishlanma',
      },
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
        en: `Madina's Mart builds an online ordering app. The first $5,000 goes on investigating what customers want and which technology to use, so that is research and is expensed. Once the plan is clear, the money is available, it can be built and it looks profitable, the next $20,000 on writing the app meets every criterion and is capitalised as development cost. If a rival launched a free app halfway through and Madina stopped believing it would pay, the costs after that would be expensed.`,
        ru: `Madina's Mart создаёт приложение для онлайн-заказов. Первые $5,000 уходят на выяснение, чего хотят клиенты и какую технологию применить, это исследование и расход. Когда план ясен, деньги есть, приложение можно создать и оно выглядит прибыльным, следующие $20,000 на разработку соответствуют всем критериям и капитализируются как затраты на разработку. Если бы конкурент выпустил бесплатное приложение на полпути и Мадина перестала бы верить в окупаемость, последующие затраты ушли бы в расходы.`,
        uz: `Madina's Mart onlayn buyurtma ilovasini yaratadi. Dastlabki $5,000 mijozlar nimani xohlashini va qaysi texnologiyani tanlashni o'rganishga ketadi, bu tadqiqot va xarajat. Reja aniq bo'lib, pul bor, ilovani yaratish mumkin va foydali ko'rinsa, ilovani yozishga ketadigan keyingi $20,000 barcha mezonlarga mos keladi va ishlanma xarajati sifatida kapitallashtiriladi. Agar raqib yarim yo'lda bepul ilova chiqarsa va Madina uning o'zini oqlashiga ishonmay qo'ysa, keyingi xarajatlar xarajatga yozilardi.`,
      },
    },
    {
      key: {
        en: `- Amortise intangibles with a finite life, as depreciation is done for tangible assets.
- Development costs start to be amortised when commercial production begins.
- Spread the cost over the period of benefits. Use straight line if the pattern is unclear.
- An indefinite life asset is not amortised. It has an annual impairment review.
- Under the cost model, impairment is a charge in profit or loss.`,
        ru: `- Нематериальные активы с конечным сроком амортизируют, как амортизируют материальные активы.
- Амортизация затрат на разработку начинается с началом коммерческого производства.
- Распределяйте стоимость на период выгод. Если схема неясна, применяйте прямолинейный метод.
- Актив с неопределённым сроком не амортизируется. Его ежегодно проверяют на обесценение.
- При модели стоимости обесценение — расход в прибыли или убытке.`,
        uz: `- Cheklangan muddatli nomoddiy aktivlar moddiy aktivlar kabi amortizatsiyalanadi.
- Ishlanma xarajatlari amortizatsiyasi tijorat ishlab chiqarish boshlanganda boshlanadi.
- Qiymatni foyda davriga taqsimlang. Naqsh noaniq bo'lsa, to'g'ri chiziqli usulni qo'llang.
- Muddati noaniq aktiv amortizatsiyalanmaydi. Har yili qadrsizlanishga tekshiriladi.
- Qiymat modelida qadrsizlanish foyda yoki zarardagi xarajat.`,
      },
      exam: {
        en: `- To find the original cost, add the accumulated amortisation to the carrying amount, then divide by the useful life for the annual charge.
- A licence or development asset is amortised from the date it is available to use or sell, pro rata for part of a year.
- Amortisation spreads cost over the useful life. It is not a way to spread the payment, estimate replacement money, or show market value.`,
        ru: `- Чтобы найти первоначальную стоимость, прибавьте накопленную амортизацию к балансовой стоимости, затем разделите на срок использования.
- Лицензия или актив разработки амортизируется с даты, когда доступен для использования или продажи, пропорционально для части года.
- Амортизация распределяет стоимость на срок использования. Это не способ растянуть оплату, оценить деньги на замену или показать рыночную стоимость.`,
        uz: `- Dastlabki qiymatni topish uchun balans qiymatiga to'plangan amortizatsiyani qo'shing, so'ng foydali muddatga bo'ling.
- Litsenziya yoki ishlanma aktivi foydalanish yoki sotish uchun tayyor bo'lgan sanadan, yilning bir qismi uchun nisbatan amortizatsiyalanadi.
- Amortizatsiya qiymatni foydali muddatga taqsimlaydi. U to'lovni taqsimlash, almashtirish pulini baholash yoki bozor qiymatini ko'rsatish usuli emas.`,
      },
      heading: {
        en: 'Amortisation of intangible assets',
        ru: 'Амортизация нематериальных активов',
        uz: 'Nomoddiy aktivlar amortizatsiyasi',
      },
      body: {
        en: `Amortisation is to intangible assets what depreciation is to tangible ones. It spreads the cost of an asset with a finite life over the period during which it is expected to produce benefits, so that cost is matched to the revenue it helps earn.

For capitalised development costs, amortisation begins when commercial production starts. The method should reflect how the benefits are used up. If that pattern cannot be determined reliably, straight line is used.

An intangible asset with an indefinite useful life is not amortised. There is no foreseeable limit to the period it will generate cash inflows, so instead it is subject to an annual impairment review.

The accounting is the same as for depreciation: Dr Amortisation charge (profit or loss), Cr Accumulated amortisation (statement of financial position).`,
        ru: `Амортизация для нематериальных активов — то же, что износ для материальных. Она распределяет стоимость актива с конечным сроком на период, в течение которого он должен приносить выгоды, чтобы затраты сопоставлялись с выручкой, которую он помогает получить.

Для капитализированных затрат на разработку амортизация начинается с началом коммерческого производства. Метод должен отражать, как расходуются выгоды. Если схему нельзя надёжно определить, применяется прямолинейный метод.

Нематериальный актив с неопределённым сроком полезного использования не амортизируется. Нет предвидимого предела периоду, в течение которого он будет приносить денежные потоки, поэтому вместо этого он ежегодно проверяется на обесценение.

Учёт такой же, как для амортизации основных средств: Дт Расход по амортизации (прибыль или убыток), Кт Накопленная амортизация (отчёт о финансовом положении).`,
        uz: `Amortizatsiya nomoddiy aktivlar uchun moddiy aktivlardagi eskirish kabi. U cheklangan muddatli aktiv qiymatini u foyda keltirishi kutilgan davrga taqsimlaydi, shunda xarajat u topishga yordam bergan tushumga moslashadi.

Kapitallashtirilgan ishlanma xarajatlari uchun amortizatsiya tijorat ishlab chiqarish boshlanganda boshlanadi. Usul foyda qanday sarflanishini aks ettirishi kerak. Naqsh ishonchli aniqlanmasa, to'g'ri chiziqli usul qo'llanadi.

Foydali muddati noaniq nomoddiy aktiv amortizatsiyalanmaydi. U pul kirimini keltiradigan davrning ko'zga ko'rinadigan chegarasi yo'q, shuning uchun uning o'rniga har yili qadrsizlanishga tekshiriladi.

Hisob moddiy aktivlardagi bilan bir xil: Dt Amortizatsiya xarajati (foyda yoki zarar), Kt To'plangan amortizatsiya (moliyaviy holat hisoboti).`,
      },
      example: {
        en: `The $20,000 app is launched on 1 October and Madina expects it to earn benefits for five years. Straight-line amortisation is $20,000 / 5 = $4,000 a year. For the year to 31 December only three months have passed: $4,000 x 3/12 = $1,000. The licence for $12,000 over four years gives $3,000 a year. Her statement of financial position shows the app at $20,000 - $1,000 = $19,000.`,
        ru: `Приложение за $20,000 запущено 1 октября, и Мадина ожидает выгод от него пять лет. Прямолинейная амортизация: $20,000 / 5 = $4,000 в год. За год по 31 декабря прошло всего три месяца: $4,000 x 3/12 = $1,000. Лицензия за $12,000 на четыре года даёт $3,000 в год. В отчёте о финансовом положении приложение значится по $20,000 - $1,000 = $19,000.`,
        uz: `$20,000 lik ilova 1 oktabrda ishga tushadi va Madina undan besh yil foyda kutadi. To'g'ri chiziqli amortizatsiya: $20,000 / 5 = yiliga $4,000. 31 dekabrgacha yilda faqat uch oy o'tgan: $4,000 x 3/12 = $1,000. To'rt yillik $12,000 lik litsenziya yiliga $3,000 beradi. Moliyaviy holat hisobotida ilova $20,000 - $1,000 = $19,000 da turadi.`,
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
- Baholash foydasi boshqa umumlashgan daromadga va qayta baholash zaxirasiga o'tadi.
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

Qayta baholash modeli faol bozorga asoslangan haqiqiy qiymatni talab qiladi, bu aktivlar bir jinsli bo'lishi kerakligini anglatadi. Bu juda kam uchraydi, shuning uchun amalda nomoddiy aktivlar qiymatda yuritiladi, ishlanma xarajatlari esa doim qiymat modelida. Qayta baholash modeli qo'llanadigan kam holatda o'sish IAS 16 dagi kabi boshqa umumlashgan daromadga va kapitaldagi alohida qayta baholash zaxirasiga o'tadi.

IAS 38 amortizatsiya usullari va kutilayotgan muddatlarni, davr boshi va oxiridagi balans qiymati solishtirishini (yangi xarajat, amortizatsiya va loyiha tan olinish huquqini yo'qotgani uchun yozilgan summalar) hamda amortizatsiya xarajatini ochib berishni talab qiladi. Davrda xarajatga yozilgan tadqiqot va ishlanmaning jami summasi ham ochib beriladi.`,
      },
      example: {
        en: `In Madina's Mart's notes, a grid has a column for development costs and one for licences. For the app it shows cost $20,000 added in the year, amortisation of $1,000 and a carrying amount of $19,000. A separate line states that $5,000 of research spending was expensed during the year.`,
        ru: `В примечаниях Madina's Mart в таблице есть столбец для затрат на разработку и столбец для лицензий. По приложению показаны стоимость $20,000, добавленная за год, амортизация $1,000 и балансовая стоимость $19,000. Отдельной строкой указано, что $5,000 расходов на исследования списаны в расход за год.`,
        uz: `Madina's Mart izohlarida jadvalda ishlanma xarajatlari va litsenziyalar uchun ustunlar bor. Ilova uchun yilda qo'shilgan $20,000 qiymat, $1,000 amortizatsiya va $19,000 balans qiymati ko'rsatilgan. Alohida qatorda yilda $5,000 tadqiqot xarajati xarajatga yozilgani aytilgan.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Intangible asset', ru: 'Нематериальный актив', uz: 'Nomoddiy aktiv' }, definition: { en: 'An identifiable non-monetary asset without physical substance.', ru: 'Идентифицируемый неденежный актив без физической формы.', uz: 'Jismoniy shakli yo\'q, aniqlanadigan, pul bo\'lmagan aktiv.' } },
    { term: { en: 'Research', ru: 'Исследования', uz: 'Tadqiqot' }, definition: { en: 'Original and planned investigation to gain new knowledge. Always expensed.', ru: 'Оригинальное плановое изучение для получения новых знаний. Всегда расход.', uz: 'Yangi bilim olish uchun asl va rejali o\'rganish. Doim xarajat.' } },
    { term: { en: 'Development', ru: 'Разработка', uz: 'Ishlanma' }, definition: { en: 'Applying research to a plan or design before commercial production. Capitalised if criteria are met.', ru: 'Применение исследований к плану или проекту до коммерческого производства. Капитализируется при выполнении критериев.', uz: 'Tadqiqotni tijorat ishlab chiqarishdan oldin rejaga qo\'llash. Mezonlar bajarilsa kapitallashtiriladi.' } },
    { term: { en: 'Amortisation', ru: 'Амортизация нематериальных активов', uz: 'Nomoddiy aktivlar amortizatsiyasi' }, definition: { en: 'Spreading the cost of an intangible asset over its useful life.', ru: 'Распределение стоимости нематериального актива на срок его использования.', uz: 'Nomoddiy aktiv qiymatini foydali muddatga taqsimlash.' } },
    { term: { en: 'Indefinite useful life', ru: 'Неопределённый срок использования', uz: 'Noaniq foydali muddat' }, definition: { en: 'No foreseeable limit to the period of benefits. Not amortised, but reviewed annually for impairment.', ru: 'Нет предвидимого предела периода выгод. Не амортизируется, но ежегодно проверяется на обесценение.', uz: 'Foyda davrining ko\'zga ko\'rinadigan chegarasi yo\'q. Amortizatsiyalanmaydi, lekin har yili qadrsizlanishga tekshiriladi.' } },
    { term: { en: 'Impairment', ru: 'Обесценение', uz: 'Qadrsizlanish' }, definition: { en: 'A fall in an asset\'s recoverable value below its carrying amount, charged to profit or loss.', ru: 'Снижение возмещаемой стоимости актива ниже балансовой, относится на прибыль или убыток.', uz: 'Aktivning qoplanadigan qiymatining balans qiymatidan pasayishi, foyda yoki zararga yoziladi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter08;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter08.id] = chapter08;
