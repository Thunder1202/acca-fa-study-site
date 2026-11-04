'use strict';

const chapter06 = {
  id: 'chapter-06',
  titles: {
    en: 'Non-current assets: acquisition and depreciation',
    ru: 'Внеоборотные активы: приобретение и амортизация',
    uz: 'Uzoq muddatli aktivlar: sotib olish va amortizatsiya',
  },
  objectives: [
    {
      en: 'Define non-current assets',
      ru: 'Дать определение внеоборотным активам',
      uz: 'Uzoq muddatli aktivlarga ta\'rif berish',
    },
    {
      en: 'Tell asset (capitalised) items from expense items',
      ru: 'Отличать капитализируемые затраты от расходов',
      uz: 'Aktivga kiritiladigan xarajatlarni oddiy xarajatlardan ajratish',
    },
    {
      en: 'Explain the purpose of an asset register',
      ru: 'Объяснить назначение реестра активов',
      uz: 'Aktivlar reyestrining maqsadini tushuntirish',
    },
    {
      en: 'Record the acquisition of non-current assets',
      ru: 'Отражать приобретение внеоборотных активов',
      uz: 'Uzoq muddatli aktivlarni sotib olishni qayd etish',
    },
    {
      en: 'Calculate and record depreciation',
      ru: 'Рассчитывать и отражать амортизацию',
      uz: 'Amortizatsiyani hisoblash va qayd etish',
    },
  ],
  sections: [
    {
      key: {
        en: `- Non-current assets: long-term, not bought for resale, used to earn income.
- They are not easy to turn into cash quickly without losing value.
- Capital expenditure: buys or improves an asset. It goes in the statement of financial position.
- Revenue expenditure: day-to-day running and repairs. It is an expense.`,
        ru: `- Внеоборотные активы: долгосрочные, не для перепродажи, используются для получения дохода.
- Их нелегко быстро превратить в деньги без потери стоимости.
- Капитальные затраты: покупка или улучшение актива. Идут в отчёт о финансовом положении.
- Текущие затраты: повседневная работа и ремонт. Это расход.`,
        uz: `- Uzoq muddatli aktivlar: uzoq muddatli, qayta sotish uchun emas, daromad olish uchun ishlatiladi.
- Ularni qiymatini yo'qotmasdan tez pulga aylantirish oson emas.
- Kapital xarajat: aktiv sotib olish yoki yaxshilash. Moliyaviy holat hisobotiga kiradi.
- Joriy xarajat: kundalik ish va ta'mir. Bu xarajat.`,
      },
      exam: {
        en: `- Painting a building and replacing broken windows are repairs, so they are expenses.
- A car bought by a car dealer for resale is inventory, not a non-current asset.
- Legal fees on buying a building are part of its cost, so they are asset expenditure.`,
        ru: `- Покраска здания и замена разбитых окон — ремонт, значит, расход.
- Автомобиль, купленный автодилером для перепродажи, — это запасы, а не внеоборотный актив.
- Юридические расходы при покупке здания входят в его стоимость, то есть это капитальные затраты.`,
        uz: `- Binoni bo'yash va singan oynalarni almashtirish ta'mir, demak xarajat.
- Avtosalon qayta sotish uchun olgan mashina zaxira, uzoq muddatli aktiv emas.
- Bino sotib olishdagi yuridik xizmat uning qiymatiga kiradi, ya'ni kapital xarajat.`,
      },
      heading: { en: 'What a non-current asset is', ru: 'Что такое внеоборотный актив', uz: 'Uzoq muddatli aktiv nima' },
      body: {
        en: `A non-current asset is long-term in nature, is not normally bought to be resold, may be tangible or intangible, and is used directly or indirectly to earn income for the business. It is not liquid: it cannot normally be turned into cash quickly without a significant loss of value.

Because of this, spending falls into two types. Asset (capitalised) expenditure buys or improves a non-current asset, so it appears in the statement of financial position. Revenue expenditure keeps the business running day to day, such as repairs, redecorating, administration and general overheads, so it is charged straight to profit or loss as an expense.`,
        ru: `Внеоборотный актив — долгосрочный по своей природе, обычно покупается не для перепродажи, может быть материальным или нематериальным и прямо или косвенно используется для получения дохода. Он не ликвиден: его обычно нельзя быстро превратить в деньги без значительной потери стоимости.

Поэтому затраты делятся на два вида. Капитальные (капитализируемые) затраты покупают или улучшают внеоборотный актив, поэтому отражаются в отчёте о финансовом положении. Текущие затраты поддерживают повседневную работу бизнеса: ремонт, косметический ремонт, администрирование и общие накладные расходы. Они сразу относятся на прибыль или убыток как расход.`,
        uz: `Uzoq muddatli aktiv tabiatan uzoq muddatli, odatda qayta sotish uchun sotib olinmaydi, moddiy yoki nomoddiy bo'lishi mumkin va to'g'ridan-to'g'ri yoki bilvosita biznesga daromad keltirish uchun ishlatiladi. U likvid emas: uni qiymatini sezilarli yo'qotmasdan tez pulga aylantirib bo'lmaydi.

Shu sababli xarajatlar ikki turga bo'linadi. Aktivga kiritiladigan (kapital) xarajat uzoq muddatli aktivni sotib oladi yoki yaxshilaydi, shuning uchun moliyaviy holat hisobotida ko'rinadi. Joriy xarajat biznesni kundalik ishlatadi: ta'mir, qayta bezash, boshqaruv va umumiy ustama xarajatlar. U to'g'ridan-to'g'ri foyda yoki zararga xarajat sifatida yoziladi.`,
      },
      example: {
        en: `Three payments by a bakery. Ask: does it buy or improve something used for years?
- New oven, $3,000: used for many years. Capital expenditure, added to the assets.
- Repainting the shop, $400: only freshens it up. Revenue expenditure, an expense.
- Building an extra room that adds selling space, $5,000: improves what the bakery can earn. Capital expenditure.`,
        ru: `Три платежа пекарни. Спросите: покупает или улучшает ли он то, чем пользуются годами?
- Новая печь, $3,000: служит много лет. Капитальные затраты, прибавляются к активам.
- Покраска магазина, $400: лишь освежает. Текущие затраты, расход.
- Пристройка, добавляющая торговую площадь, $5,000: увеличивает, сколько пекарня может заработать. Капитальные затраты.`,
        uz: `Novvoyxonaning uchta to'lovi. So'rang: u yillar ishlatiladigan narsani sotib oladimi yoki yaxshilaydimi?
- Yangi pech, $3,000: ko'p yil ishlaydi. Kapital xarajat, aktivlarga qo'shiladi.
- Do'konni bo'yash, $400: faqat yangilaydi. Joriy xarajat.
- Savdo maydonini oshiruvchi qo'shimcha xona, $5,000: novvoyxona topadigan pulni oshiradi. Kapital xarajat.`,
      },
      simple: {
        en: `A non-current asset is something a business keeps and uses for more than a year to help it earn money, such as a van, a machine or a building. It is not bought to be sold.

So every payment is one of two kinds. Capital expenditure buys or improves such an asset, and it is added to the asset. Revenue expenditure keeps things running day to day, such as repairs and repainting, and it is an expense.`,
        ru: `Внеоборотный актив — то, что бизнес держит и использует больше года, чтобы зарабатывать: фургон, станок, здание. Его покупают не для продажи.

Поэтому любой платёж бывает двух видов. Капитальные затраты покупают или улучшают такой актив и прибавляются к нему. Текущие затраты поддерживают ежедневную работу, например ремонт и покраска, и это расход.`,
        uz: `Uzoq muddatli aktiv — biznes bir yildan ortiq saqlab, pul topish uchun ishlatadigan narsa: furgon, dastgoh, bino. U sotish uchun olinmaydi.

Shuning uchun har bir to'lov ikki turdan biri. Kapital xarajat bunday aktivni sotib oladi yoki yaxshilaydi va aktivga qo'shiladi. Joriy xarajat kundalik ishni ta'minlaydi, masalan ta'mir va bo'yash, va bu xarajat.`,
      },
    },
    {
      key: {
        en: `- Asset register: a record of each asset, kept as part of internal control.
- It holds cost, date, description, reference, location, depreciation method, life and carrying amount.
- Reconcile the register to the ledger regularly.
- Cost includes price, delivery, installation, site preparation, testing, legal and professional fees.
- Cost excludes repairs, training, running costs and administration.`,
        ru: `- Реестр активов: запись по каждому активу, часть внутреннего контроля.
- В нём стоимость, дата, описание, номер, место, метод амортизации, срок и балансовая стоимость.
- Регулярно сверяйте реестр с главной книгой.
- В стоимость входят цена, доставка, установка, подготовка места, испытания, юридические и проф. услуги.
- Не входят ремонт, обучение, текущие расходы и администрирование.`,
        uz: `- Aktivlar reyestri: har bir aktiv bo'yicha yozuv, ichki nazoratning bir qismi.
- Unda qiymat, sana, tavsif, raqam, joy, amortizatsiya usuli, muddat va balans qiymati bor.
- Reyestrni bosh kitob bilan muntazam solishtiring.
- Qiymatga narx, yetkazish, o'rnatish, joyni tayyorlash, sinov, yuridik va professional xizmatlar kiradi.
- Ta'mir, o'qitish, joriy va ma'muriy xarajatlar kirmaydi.`,
      },
      exam: {
        en: `- If the register and the ledger show different carrying amounts, look for a missed disposal, a missed addition or a missed depreciation charge in either one.
- Staff training is never capitalised. A breakdown warranty of any length, insurance and vehicle tax are expenses.
- Testing to check the asset works is part of cost. A maintenance contract is not.
- Subsequent spending is capitalised only if it increases the benefits the asset can bring.`,
        ru: `- Если в реестре и в книге разная балансовая стоимость, ищите пропущенное выбытие, поступление или амортизацию в одном из них.
- Обучение персонала никогда не капитализируется. Гарантия на поломки любой длительности, страховка и транспортный налог — расходы.
- Испытание для проверки работы актива входит в стоимость. Договор обслуживания — нет.
- Последующие затраты капитализируются, только если увеличивают выгоды от актива.`,
        uz: `- Reyestr va kitobda balans qiymati har xil bo'lsa, birortasida tushib qolgan chiqish, kirim yoki amortizatsiyani qidiring.
- Xodimlarni o'qitish hech qachon kapitallashtirilmaydi. Har qanday muddatli buzilish kafolati, sug'urta va transport solig'i xarajat.
- Aktivning ishlashini tekshirish sinovi qiymatga kiradi. Xizmat shartnomasi kirmaydi.
- Keyingi xarajat faqat aktiv beradigan foydani oshirsa kapitallashtiriladi.`,
      },
      heading: {
        en: 'The asset register and recording an acquisition',
        ru: 'Реестр активов и отражение приобретения',
        uz: 'Aktivlar reyestri va sotib olishni qayd etish',
      },
      body: {
        en: `A non-current asset register is a detailed record of the assets held. It forms part of internal control, tracks what is owned and where it is, and should be reconciled regularly to the asset accounts in the general ledger. A separate cost account is kept for each category, such as motor vehicles or fixtures and fittings.

Under IAS 16, cost is any amount spent to buy the asset and bring it into working condition. It includes the purchase price, delivery, installation, site preparation or alterations needed to install it, legal fees, professional fees such as architects' fees, the cost of testing, and later spending that enhances the asset. It excludes repairs and renewals, redecorating, administration, general overheads, training and wastage.

The entry is Dr Non-current asset, Cr Bank or Payables. Spending after the purchase is added to the asset only if it increases the revenue the asset can generate, for example an extension giving more selling space. Repairs are always expenses.`,
        ru: `Реестр внеоборотных активов — подробная запись об имеющихся активах. Он входит во внутренний контроль, показывает, что принадлежит компании и где находится, и должен регулярно сверяться со счетами активов в главной книге. Для каждой категории, например транспорта или оборудования, ведётся отдельный счёт стоимости.

По IAS 16 стоимость — это любые затраты на покупку актива и приведение его в рабочее состояние. В неё входят цена покупки, доставка, установка, подготовка места или переделки, нужные для установки, юридические расходы, профессиональные услуги, например архитекторов, испытания и последующие затраты, улучшающие актив. Не входят ремонт и обновление, косметический ремонт, администрирование, общие накладные расходы, обучение и потери.

Проводка: Дт Внеоборотный актив, Кт Банк или Кредиторы. Последующие затраты добавляются к активу, только если увеличивают доход, который он может приносить, например пристройка с дополнительной торговой площадью. Ремонт — всегда расход.`,
        uz: `Uzoq muddatli aktivlar reyestri mavjud aktivlar haqida batafsil yozuv. U ichki nazoratning bir qismi, nima egalikda ekanini va qayerdaligini kuzatadi va bosh kitobdagi aktiv hisoblari bilan muntazam solishtirilishi kerak. Har bir toifa uchun, masalan transport yoki jihozlar, alohida qiymat hisobi yuritiladi.

IAS 16 ga ko'ra qiymat — aktivni sotib olish va ishchi holatga keltirish uchun sarflangan har qanday summa. Unga xarid narxi, yetkazish, o'rnatish, o'rnatish uchun zarur joyni tayyorlash yoki o'zgartirish, yuridik xizmat, arxitektorlar kabi professional xizmatlar, sinov va aktivni yaxshilaydigan keyingi xarajatlar kiradi. Ta'mir va yangilash, qayta bezash, boshqaruv, umumiy ustamalar, o'qitish va yo'qotishlar kirmaydi.

Yozuv: Dt Uzoq muddatli aktiv, Kt Bank yoki Kreditorlar. Xariddan keyingi xarajat aktivga faqat u keltiradigan daromadni oshirsa qo'shiladi, masalan savdo maydonini kengaytiradigan qurilish. Ta'mir doim xarajat.`,
      },
      example: {
        en: `A bakery buys a delivery van and pays:
  Van price $10,000
  Number plates $100
  One year of insurance $480
  Road tax $120
# Step 1: What is part of the van's cost?
  Price $10,000 + plates $100 = $10,100 (needed to get the van on the road)
# Step 2: What is a running cost?
  Insurance $480 + road tax $120 = $600 (these repeat every year)
# Step 3: The entries
  Dr Van $10,100, Dr Motor expenses $600, Cr Bank $10,700
= The van is added to the asset register at $10,100.`,
        ru: `Пекарня покупает фургон и платит:
  Цена фургона $10,000
  Номера $100
  Страховка на год $480
  Дорожный налог $120
# Шаг 1: Что входит в стоимость фургона?
  Цена $10,000 + номера $100 = $10,100 (нужно, чтобы выехать на дорогу)
# Шаг 2: Что текущие расходы?
  Страховка $480 + налог $120 = $600 (повторяются каждый год)
# Шаг 3: Проводки
  Дт Фургон $10,100, Дт Расходы на транспорт $600, Кт Банк $10,700
= Фургон вносят в реестр активов по $10,100.`,
        uz: `Novvoyxona yetkazish furgonini olib, to'laydi:
  Furgon narxi $10,000
  Raqamlar $100
  Bir yillik sug'urta $480
  Yo'l solig'i $120
# 1-qadam: Furgon qiymatiga nima kiradi?
  Narx $10,000 + raqamlar $100 = $10,100 (yo'lga chiqish uchun kerak)
# 2-qadam: Nima joriy xarajat?
  Sug'urta $480 + soliq $120 = $600 (har yili takrorlanadi)
# 3-qadam: Yozuvlar
  Dt Furgon $10,100, Dt Transport xarajatlari $600, Kt Bank $10,700
= Furgon aktivlar reyestriga $10,100 da yoziladi.`,
      },
      simple: {
        en: `The cost of an asset is everything you pay to get it AND make it ready to work: the price, delivery, installation, preparing the site, testing, and legal or professional fees.

Running costs are not part of the cost: insurance, tax, repairs, warranties and staff training are expenses. Each asset is also listed in an asset register, which is checked against the ledger.`,
        ru: `Стоимость актива — всё, что вы платите, чтобы получить его И подготовить к работе: цена, доставка, установка, подготовка места, проверка, юридические и профессиональные услуги.

Текущие расходы в стоимость не входят: страховка, налог, ремонт, гарантия и обучение персонала — это расходы. Каждый актив вносят в реестр активов, который сверяют с главной книгой.`,
        uz: `Aktiv qiymati — uni olish VA ishga tayyorlash uchun to'lagan hamma narsa: narx, yetkazish, o'rnatish, joyni tayyorlash, sinov, yuridik va professional xizmatlar.

Joriy xarajatlar qiymatga kirmaydi: sug'urta, soliq, ta'mir, kafolat va xodimlarni o'qitish — xarajatlar. Har bir aktiv aktivlar reyestriga yoziladi, u bosh kitob bilan solishtiriladi.`,
      },
    },
    {
      key: {
        en: `- Depreciation: spreading the cost of an asset over its useful life.
- It matches the cost of using the asset to the income it helps earn.
- It does not show current market value, and it does not save up to replace the asset.
- Land is not depreciated. Buildings are. It starts when the asset is ready for use.`,
        ru: `- Амортизация: распределение стоимости актива на срок его полезного использования.
- Она сопоставляет затраты на использование актива с доходом, который он помогает получить.
- Она не показывает рыночную стоимость и не накапливает деньги на замену актива.
- Землю не амортизируют, здания — да. Начинается, когда актив готов к использованию.`,
        uz: `- Amortizatsiya: aktiv qiymatini foydali xizmat muddatiga taqsimlash.
- U aktivdan foydalanish xarajatini u olib kelgan daromadga moslashtiradi.
- U bozor qiymatini ko'rsatmaydi va aktivni almashtirish uchun jamg'arma emas.
- Yer amortizatsiyalanmaydi, binolar amortizatsiyalanadi. Aktiv foydalanishga tayyor bo'lganda boshlanadi.`,
      },
      exam: {
        en: `- Useful life is not the same as physical life: a computer may last longer than the three years a business plans to use it.
- Causes of depreciation include use, wear and tear, passing of time, obsolescence and depletion.
- Depreciation is not a way of spreading the payment for an asset, or of showing its market value.`,
        ru: `- Срок полезного использования не равен физическому сроку службы: компьютер может работать дольше трёх лет, на которые его планируют использовать.
- Причины амортизации: использование, износ, течение времени, моральное устаревание и истощение.
- Амортизация — это не способ растянуть оплату актива и не показ его рыночной стоимости.`,
        uz: `- Foydali muddat jismoniy muddatga teng emas: kompyuter biznes rejalashtirgan uch yildan ko'proq ishlashi mumkin.
- Amortizatsiya sabablari: foydalanish, eskirish, vaqt o'tishi, texnik eskirish va tugab borish.
- Amortizatsiya aktiv uchun to'lovni taqsimlash yoki uning bozor qiymatini ko'rsatish usuli emas.`,
      },
      heading: { en: 'Why we depreciate', ru: 'Зачем нужна амортизация', uz: 'Nega amortizatsiya kerak' },
      body: {
        en: `IAS 16 defines depreciation as the systematic allocation of the depreciable amount of an asset over its useful life. In simple terms it spreads the cost over the years the asset is used, so each year's profit carries a fair share of the cost of using it.

Each year the effect is twofold: the carrying amount of the asset in the statement of financial position falls by accumulated depreciation, and the charge is shown as an expense in profit or loss.

Depreciation can come from use, wear and tear, the passing of time (such as a ten-year lease), obsolescence from technology or market change, and depletion (such as extracting minerals). Its purpose is not to show the asset at current value and not to build a fund to replace it. Land normally has an unlimited life and is not depreciated, but buildings are. Depreciation starts when the asset is available for use.`,
        ru: `IAS 16 определяет амортизацию как систематическое распределение амортизируемой суммы актива на срок его полезного использования. Проще говоря, она распределяет стоимость на годы использования, чтобы прибыль каждого года несла справедливую долю затрат.

Каждый год эффект двойной: балансовая стоимость актива в отчёте о финансовом положении уменьшается на накопленную амортизацию, а начисление показывается расходом в прибыли или убытке.

Амортизация может возникать из-за использования, износа, течения времени (например, десятилетняя аренда), морального устаревания из-за технологий или рынка и истощения (например, добыча полезных ископаемых). Её цель — не показать актив по текущей стоимости и не накопить фонд на замену. Земля обычно имеет неограниченный срок и не амортизируется, а здания амортизируются. Амортизация начинается, когда актив доступен для использования.`,
        uz: `IAS 16 amortizatsiyani aktivning amortizatsiya qilinadigan summasini foydali xizmat muddatiga tizimli taqsimlash deb ta'riflaydi. Oddiy so'z bilan, u qiymatni aktiv ishlatiladigan yillarga taqsimlaydi, shunda har yilgi foyda undan foydalanish xarajatining adolatli ulushini ko'taradi.

Har yili ta'sir ikki xil: moliyaviy holat hisobotida aktivning balans qiymati to'plangan amortizatsiyaga kamayadi va hisoblangan summa foyda yoki zararda xarajat sifatida ko'rsatiladi.

Amortizatsiya foydalanish, eskirish, vaqt o'tishi (masalan o'n yillik ijara), texnologiya yoki bozor o'zgarishidan texnik eskirish va tugab borish (masalan foydali qazilma qazib olish) tufayli paydo bo'lishi mumkin. Uning maqsadi aktivni joriy qiymatda ko'rsatish yoki almashtirish uchun jamg'arma yaratish emas. Yer odatda cheksiz muddatli va amortizatsiyalanmaydi, binolar esa amortizatsiyalanadi. Amortizatsiya aktiv foydalanishga tayyor bo'lganda boshlanadi.`,
      },
      example: {
        en: `A $10,000 van will be used for 5 years.
# Without depreciation
  Year 1 expense: $10,000. Years 2 to 5: $0
  Year 1 looks terrible and the other years look too good, although the van worked equally hard every year.
# With depreciation (straight-line, no residual value)
  $10,000 / 5 = $2,000 each year for 5 years
= Each year now carries a fair $2,000 share of the cost of the van.`,
        ru: `Фургон за $10,000 будут использовать 5 лет.
# Без амортизации
  Расход 1-го года: $10,000. Годы 2-5: $0
  1-й год выглядит ужасно, остальные слишком хорошо, хотя фургон работал одинаково каждый год.
# С амортизацией (линейно, без ликвидационной стоимости)
  $10,000 / 5 = $2,000 каждый год 5 лет
= Теперь каждый год несёт честную долю $2,000 стоимости фургона.`,
        uz: `$10,000 lik furgon 5 yil ishlatiladi.
# Amortizatsiyasiz
  1-yil xarajati: $10,000. 2-5 yillar: $0
  1-yil juda yomon, qolganlari juda yaxshi ko'rinadi, holbuki furgon har yili bir xil ishlagan.
# Amortizatsiya bilan (to'g'ri chiziqli, tugatish qiymatisiz)
  $10,000 / 5 = 5 yil davomida har yili $2,000
= Endi har bir yil furgon qiymatidan adolatli $2,000 ulush oladi.`,
      },
      simple: {
        en: `A van wears out over the years it is used. Depreciation spreads its cost over those years, so each year carries a fair share of the cost of using it.

It is not the van's market value, and it is not money saved for a new van. Land is not depreciated, because it does not wear out. Buildings are.`,
        ru: `Фургон изнашивается за годы использования. Амортизация распределяет его стоимость по этим годам, и каждый год несёт свою честную долю.

Это не рыночная цена фургона и не деньги, отложенные на новый. Землю не амортизируют, она не изнашивается. Здания — амортизируют.`,
        uz: `Furgon ishlatilgan yillar davomida eskiradi. Amortizatsiya uning qiymatini shu yillarga taqsimlaydi va har bir yil o'z adolatli ulushini oladi.

Bu furgonning bozor narxi ham, yangi furgonga yig'ilgan pul ham emas. Yer amortizatsiya qilinmaydi, u eskirmaydi. Binolar qilinadi.`,
      },
    },
    {
      key: {
        en: `- Straight-line: (cost - residual value) / useful life. Same charge every year.
- Reducing balance: a % of the carrying amount, so the charge falls each year.
- Straight-line suits steady use, such as buildings. Reducing balance suits vehicles.
- Part-year: either a full year in the year of purchase and none in the year of sale, or monthly.`,
        ru: `- Прямолинейный: (стоимость - ликвидационная) / срок использования. Одинаково каждый год.
- Уменьшаемого остатка: процент от балансовой стоимости, поэтому начисление падает.
- Прямолинейный подходит для равномерного использования, например зданий. Уменьшаемого остатка — транспорту.
- Неполный год: полный год при покупке и ноль при продаже, либо помесячно.`,
        uz: `- To'g'ri chiziqli: (qiymat - tugatish qiymati) / foydali muddat. Har yili bir xil.
- Kamayuvchi qoldiq: balans qiymatining foizi, shuning uchun hisoblash kamayadi.
- To'g'ri chiziqli bir tekis foydalanishga, masalan binolarga mos. Kamayuvchi qoldiq transportga mos.
- Qisman yil: sotib olingan yili to'liq va sotilgan yili nol, yoki oylar bo'yicha.`,
      },
      exam: {
        en: `- Reducing balance suits assets that give more benefit early on, such as vehicles.
- Residual value is the estimated disposal value at the end of the life. Reducing balance ignores it in the calculation.
- Monthly or pro-rata depreciation counts the exact number of months owned in the year.
- If a policy says full year in the year of purchase and none in the year of sale, apply it exactly.`,
        ru: `- Метод уменьшаемого остатка подходит активам, дающим больше пользы в начале, например транспорту.
- Ликвидационная стоимость — оценка выручки от выбытия в конце срока. При методе уменьшаемого остатка в расчёте она не участвует.
- Помесячная амортизация считает точное число месяцев владения в году.
- Если политика предусматривает полный год при покупке и ноль при продаже, применяйте её точно.`,
        uz: `- Kamayuvchi qoldiq dastlab ko'proq naf beradigan aktivlarga, masalan transportga mos.
- Tugatish qiymati — muddat oxiridagi taxminiy sotuv qiymati. Kamayuvchi qoldiqda hisobda ishlatilmaydi.
- Oylik yoki nisbiy amortizatsiya yilda egalik qilingan aniq oylar sonini hisoblaydi.
- Siyosatda xarid yilida to'liq, sotuv yilida nol deyilsa, uni aniq qo'llang.`,
      },
      heading: {
        en: 'Methods of calculating depreciation',
        ru: 'Методы расчёта амортизации',
        uz: 'Amortizatsiyani hisoblash usullari',
      },
      body: {
        en: `IAS 16 says the method should reflect the pattern in which the asset's future benefits are used up.

Straight-line gives the same charge every year: (cost - residual value) / useful life, or a percentage of cost. It suits assets used evenly, such as buildings.

Reducing balance charges a percentage of the carrying amount, which is cost less accumulated depreciation to date. The charge falls each year, which suits assets that give less service as they age, such as vehicles.

Useful life is the number of years the business expects to use the asset, which is not always its physical life. Residual value is the estimated disposal value at the end of that life.

For assets bought or sold part-way through the year there are two approaches: charge a full year in the year of purchase and none in the year of disposal, or charge monthly based on the exact months of ownership. The question always states which one to use.`,
        ru: `IAS 16 говорит, что метод должен отражать схему, по которой используются будущие выгоды актива.

Прямолинейный метод даёт одинаковое начисление каждый год: (стоимость - ликвидационная стоимость) / срок использования, либо процент от стоимости. Он подходит для активов с равномерным использованием, например зданий.

Метод уменьшаемого остатка начисляет процент от балансовой стоимости, то есть стоимости за вычетом накопленной амортизации. Начисление уменьшается каждый год, что подходит активам, дающим меньше отдачи с возрастом, например транспорту.

Срок использования — число лет, в течение которых бизнес планирует использовать актив, и он не всегда равен физическому сроку. Ликвидационная стоимость — оценка выручки от выбытия в конце этого срока.

Для активов, купленных или проданных в середине года, есть два подхода: полный год в год покупки и ноль в год выбытия либо помесячное начисление по точному числу месяцев владения. В задаче всегда указано, какой применять.`,
        uz: `IAS 16 usul aktivning kelajakdagi foydalari qanday sarflanishini aks ettirishi kerak, deydi.

To'g'ri chiziqli usul har yili bir xil summa beradi: (qiymat - tugatish qiymati) / foydali muddat yoki qiymatning foizi. U bir tekis ishlatiladigan aktivlarga, masalan binolarga mos.

Kamayuvchi qoldiq usuli balans qiymatining, ya'ni qiymat minus hozirgacha to'plangan amortizatsiyaning foizini hisoblaydi. Hisoblanadigan summa har yili kamayadi, bu yosh o'tgan sari kamroq xizmat beradigan aktivlarga, masalan transportga mos.

Foydali muddat — biznes aktivdan foydalanishni kutayotgan yillar soni, u doim jismoniy muddatga teng emas. Tugatish qiymati — shu muddat oxiridagi taxminiy sotuv qiymati.

Yil o'rtasida sotib olingan yoki sotilgan aktivlar uchun ikki yondashuv bor: xarid yilida to'liq yil va sotuv yilida nol hisoblash, yoki egalik qilingan aniq oylar bo'yicha oylik hisoblash. Masalada doim qaysi biri ekani aytiladi.`,
      },
      example: {
        en: `Two assets.
# Shelves: $3,000, 10-year life, no residual value, straight-line
  $3,000 / 10 = $300 every year
# Van: $10,100, 25% reducing balance
  Year 1: 25% × $10,100 = $2,525. Carrying amount left: $10,100 - $2,525 = $7,575
  Year 2: 25% × $7,575 = $1,893.75. The charge is smaller because less is left.
# Van bought on 1 July, year ends 31 December, monthly basis
  Owned for 6 months: $2,525 × 6/12 = $1,262.50
! Reducing balance uses the carrying amount (what is left), never the original cost after year 1.`,
        ru: `Два актива.
# Полки: $3,000, срок 10 лет, без ликвидационной стоимости, линейно
  $3,000 / 10 = $300 каждый год
# Фургон: $10,100, уменьшаемый остаток 25%
  Год 1: 25% × $10,100 = $2,525. Осталось: $10,100 - $2,525 = $7,575
  Год 2: 25% × $7,575 = $1,893.75. Сумма меньше, потому что осталось меньше.
# Фургон куплен 1 июля, год заканчивается 31 декабря, помесячно
  Владели 6 месяцев: $2,525 × 6/12 = $1,262.50
! Метод уменьшаемого остатка берёт балансовую стоимость (остаток), а не первоначальную стоимость после 1-го года.`,
        uz: `Ikki aktiv.
# Javonlar: $3,000, muddat 10 yil, tugatish qiymatisiz, to'g'ri chiziqli
  $3,000 / 10 = har yili $300
# Furgon: $10,100, 25% kamayuvchi qoldiq
  1-yil: 25% × $10,100 = $2,525. Qolgan balans qiymati: $10,100 - $2,525 = $7,575
  2-yil: 25% × $7,575 = $1,893.75. Summa kichik, chunki kamroq qolgan.
# Furgon 1 iyulda olingan, yil 31 dekabrda tugaydi, oylik
  6 oy egalik qilingan: $2,525 × 6/12 = $1,262.50
! Kamayuvchi qoldiq 1-yildan keyin dastlabki qiymatni emas, balans qiymatini (qolganini) oladi.`,
      },
      simple: {
        en: `Two methods.

- Straight-line: the same amount every year. (Cost - residual value) / useful life.
- Reducing balance: a fixed % of what is LEFT (the carrying amount) each year, so the charge gets smaller every year.

If an asset is bought part-way through the year, the question tells you whether to charge a full year or only the months it was owned.`,
        ru: `Два метода.

- Линейный: одинаковая сумма каждый год. (Стоимость - ликвидационная стоимость) / срок полезного использования.
- Уменьшаемого остатка: фиксированный % от того, что ОСТАЛОСЬ (балансовой стоимости), каждый год, поэтому сумма с каждым годом меньше.

Если актив куплен в середине года, в задаче сказано, начислять ли полный год или только месяцы владения.`,
        uz: `Ikki usul.

- To'g'ri chiziqli: har yili bir xil summa. (Qiymat - tugatish qiymati) / foydali muddat.
- Kamayuvchi qoldiq: har yili QOLGAN qismning (balans qiymatining) qat'iy %, shuning uchun summa har yili kichrayadi.

Aktiv yil o'rtasida olinsa, masalada to'liq yilmi yoki faqat egalik oylarimi, aytiladi.`,
      },
    },
    {
      key: {
        en: `- Dr Depreciation charge (profit or loss), Cr Accumulated depreciation (financial position).
- The charge is an expense and is not accumulated. Accumulated depreciation is.
- Show cost, less accumulated depreciation, equals carrying amount.
- Keep one accumulated depreciation account for each category of asset.`,
        ru: `- Дт Расход по амортизации (прибыль или убыток), Кт Накопленная амортизация (финансовое положение).
- Начисление — расход и не накапливается. Накопленная амортизация накапливается.
- Показывайте: стоимость минус накопленная амортизация равна балансовой стоимости.
- Ведите отдельный счёт накопленной амортизации на каждую категорию активов.`,
        uz: `- Dt Amortizatsiya xarajati (foyda yoki zarar), Kt To'plangan amortizatsiya (moliyaviy holat).
- Hisoblangan summa xarajat va to'planmaydi. To'plangan amortizatsiya to'planadi.
- Qiymat minus to'plangan amortizatsiya balans qiymatiga teng ekanini ko'rsating.
- Har bir aktiv toifasi uchun alohida to'plangan amortizatsiya hisobini yuriting.`,
      },
      exam: {
        en: `- If an expense such as repairs was wrongly debited to the asset account, reverse it (Dr Expense, Cr Asset) and also reverse the extra depreciation charged on it (Dr Accumulated depreciation, Cr Depreciation charge).
- The depreciation charge account is cleared to profit or loss each year, so it starts the next year at nil.`,
        ru: `- Если расход, например ремонт, по ошибке отнесён в дебет счёта актива, сторнируйте его (Дт Расход, Кт Актив) и сторнируйте лишнюю амортизацию на него (Дт Накопленная амортизация, Кт Расход по амортизации).
- Счёт расхода по амортизации каждый год закрывается на прибыль или убыток, поэтому на следующий год начинается с нуля.`,
        uz: `- Agar ta'mir kabi xarajat xato aktiv hisobiga debetlangan bo'lsa, uni qaytaring (Dt Xarajat, Kt Aktiv) va unga ortiqcha hisoblangan amortizatsiyani ham qaytaring (Dt To'plangan amortizatsiya, Kt Amortizatsiya xarajati).
- Amortizatsiya xarajati hisobi har yili foyda yoki zararga yopiladi, shuning uchun keyingi yilni noldan boshlaydi.`,
      },
      heading: { en: 'Accounting for depreciation', ru: 'Учёт амортизации', uz: 'Amortizatsiyani hisobda yuritish' },
      body: {
        en: `Whichever method is used, the accounting is the same. Each year: Dr Depreciation charge (an expense in profit or loss), Cr Accumulated depreciation (a statement of financial position account).

The depreciation charge account is an expense account, so it is cleared to profit or loss each year and is not accumulated. The accumulated depreciation account is a statement of financial position account, so it keeps growing and holds all depreciation to date.

In the statement of financial position it is shown as a deduction from cost: cost, less accumulated depreciation, equals carrying amount.`,
        ru: `Каким бы ни был метод, учёт одинаков. Каждый год: Дт Расход по амортизации (расход в прибыли или убытке), Кт Накопленная амортизация (счёт отчёта о финансовом положении).

Счёт расхода по амортизации — расходный, поэтому он каждый год закрывается на прибыль или убыток и не накапливается. Счёт накопленной амортизации — балансовый, поэтому он продолжает расти и содержит всю амортизацию на сегодня.

В отчёте о финансовом положении она показывается вычетом из стоимости: стоимость минус накопленная амортизация равна балансовой стоимости.`,
        uz: `Qaysi usul ishlatilishidan qat'i nazar, hisob bir xil. Har yili: Dt Amortizatsiya xarajati (foyda yoki zarardagi xarajat), Kt To'plangan amortizatsiya (moliyaviy holat hisobotidagi hisob).

Amortizatsiya xarajati hisobi xarajat hisobi, shuning uchun har yili foyda yoki zararga yopiladi va to'planmaydi. To'plangan amortizatsiya hisobi moliyaviy holat hisobotiga tegishli hisob, shuning uchun u o'sib boradi va hozirgacha bo'lgan barcha amortizatsiyani saqlaydi.

Moliyaviy holat hisobotida u qiymatdan ayirma sifatida ko'rsatiladi: qiymat minus to'plangan amortizatsiya balans qiymatiga teng.`,
      },
      example: {
        en: `The bakery's van ($10,100, 6 months' depreciation of $1,262.50) and shelves ($3,000, $300 a year) at the year end.
# The entries
  Dr Depreciation charge $1,262.50, Cr Accumulated depreciation (van) $1,262.50
  Dr Depreciation charge $300, Cr Accumulated depreciation (shelves) $300
# Statement of financial position (van)
  Cost $10,100 - accumulated depreciation $1,262.50 = carrying amount $8,837.50
# Statement of profit or loss
  Total depreciation expense: $1,262.50 + $300 = $1,562.50`,
        ru: `Фургон пекарни ($10,100, амортизация за 6 месяцев $1,262.50) и полки ($3,000, $300 в год) на конец года.
# Проводки
  Дт Начисленная амортизация $1,262.50, Кт Накопленная амортизация (фургон) $1,262.50
  Дт Начисленная амортизация $300, Кт Накопленная амортизация (полки) $300
# Отчёт о финансовом положении (фургон)
  Стоимость $10,100 - накопленная амортизация $1,262.50 = балансовая стоимость $8,837.50
# Отчёт о прибыли или убытке
  Весь расход на амортизацию: $1,262.50 + $300 = $1,562.50`,
        uz: `Novvoyxona furgoni ($10,100, 6 oylik amortizatsiya $1,262.50) va javonlar ($3,000, yiliga $300) yil oxirida.
# Yozuvlar
  Dt Amortizatsiya xarajati $1,262.50, Kt To'plangan amortizatsiya (furgon) $1,262.50
  Dt Amortizatsiya xarajati $300, Kt To'plangan amortizatsiya (javonlar) $300
# Moliyaviy holat hisoboti (furgon)
  Qiymat $10,100 - to'plangan amortizatsiya $1,262.50 = balans qiymati $8,837.50
# Foyda yoki zarar hisoboti
  Jami amortizatsiya xarajati: $1,262.50 + $300 = $1,562.50`,
      },
      simple: {
        en: `The entry is always the same: Dr Depreciation charge (an expense this year), Cr Accumulated depreciation (all depreciation so far).

The charge starts again at zero each year. Accumulated depreciation keeps growing. In the statement of financial position: cost - accumulated depreciation = carrying amount.`,
        ru: `Проводка всегда одна: Дт Начисленная амортизация (расход года), Кт Накопленная амортизация (вся амортизация до сих пор).

Начисление каждый год начинается с нуля. Накопленная амортизация продолжает расти. В отчёте о финансовом положении: стоимость - накопленная амортизация = балансовая стоимость.`,
        uz: `Yozuv doim bir xil: Dt Amortizatsiya xarajati (shu yil xarajati), Kt To'plangan amortizatsiya (shu paytgacha barcha amortizatsiya).

Xarajat har yili noldan boshlanadi. To'plangan amortizatsiya o'sib boradi. Moliyaviy holat hisobotida: qiymat - to'plangan amortizatsiya = balans qiymati.`,
      },
    },
    {
      key: {
        en: `- You may change the useful life or residual value if the old estimate is no longer right.
- Do not restate the past. Work out the new charge from now on.
- New charge = (carrying amount now - new residual value) / remaining useful life.
- Use the same rates and methods consistently otherwise.`,
        ru: `- Срок использования или ликвидационную стоимость можно изменить, если прежняя оценка уже неверна.
- Прошлое не пересчитывается. Новое начисление считается с этого момента.
- Новое начисление = (балансовая стоимость сейчас - новая ликвидационная) / оставшийся срок.
- В остальном применяйте одни и те же ставки и методы последовательно.`,
        uz: `- Eski baho noto'g'ri bo'lsa, foydali muddat yoki tugatish qiymatini o'zgartirish mumkin.
- O'tmishni qayta hisoblamang. Yangi summani hozirdan boshlab hisoblang.
- Yangi summa = (hozirgi balans qiymati - yangi tugatish qiymati) / qolgan foydali muddat.
- Boshqa hollarda bir xil stavka va usullarni izchil qo'llang.`,
      },
      exam: {
        en: `- Count the years already used first. Remaining life is the new total life less the years already charged.
- A change in estimate takes effect in the period it is made, before that period's depreciation is charged.
- Accumulated depreciation to date and the old residual value drop out of the new calculation. Only the carrying amount matters.`,
        ru: `- Сначала посчитайте уже использованные годы. Оставшийся срок — это новый общий срок минус годы, за которые уже начислено.
- Изменение оценки действует в периоде, когда оно сделано, до начисления амортизации за этот период.
- Накопленная амортизация и прежняя ликвидационная стоимость в новом расчёте не участвуют. Важна только балансовая стоимость.`,
        uz: `- Avval ishlatilgan yillarni sanang. Qolgan muddat — yangi umumiy muddat minus allaqachon hisoblangan yillar.
- Bahoning o'zgarishi u kiritilgan davrda, shu davr amortizatsiyasi hisoblanishidan oldin kuchga kiradi.
- To'plangan amortizatsiya va eski tugatish qiymati yangi hisobda qatnashmaydi. Faqat balans qiymati muhim.`,
      },
      heading: { en: 'Changing estimates', ru: 'Изменение оценок', uz: 'Baholarni o\'zgartirish' },
      body: {
        en: `A business should apply the same rates and methods consistently, but it may change its estimate of useful life or residual value if the old one is no longer appropriate. No past figures are restated. You simply work out the new annual charge from that point on.

Take the carrying amount at the date of the change, deduct any new residual value, and divide by the new remaining useful life.`,
        ru: `Бизнес должен последовательно применять одни и те же ставки и методы, но может изменить оценку срока использования или ликвидационной стоимости, если прежняя уже не подходит. Прошлые данные не пересчитываются. Вы просто считаете новое годовое начисление с этого момента.

Возьмите балансовую стоимость на дату изменения, вычтите новую ликвидационную стоимость и разделите на новый оставшийся срок использования.`,
        uz: `Biznes bir xil stavka va usullarni izchil qo'llashi kerak, lekin eski baho endi mos kelmasa, foydali muddat yoki tugatish qiymati bahosini o'zgartirishi mumkin. O'tgan raqamlar qayta hisoblanmaydi. Siz shunchaki shu paytdan boshlab yangi yillik summani hisoblaysiz.

O'zgarish sanasidagi balans qiymatini oling, yangi tugatish qiymatini ayiring va yangi qolgan foydali muddatga bo'ling.`,
      },
      example: {
        en: `Shelves cost $3,000, with a 10-year life and no residual value.
# Step 1: The old charge
  $3,000 / 10 = $300 a year
# Step 2: After 2 years
  Carrying amount: $3,000 - 2 × $300 = $2,400
# Step 3: New information
  They will now last only 6 more years
# Step 4: The new charge
  $2,400 / 6 = $400 a year from now on
= The $600 already charged is left as it is. Only the future changes.`,
        ru: `Полки стоят $3,000, срок 10 лет, без ликвидационной стоимости.
# Шаг 1: Старая сумма
  $3,000 / 10 = $300 в год
# Шаг 2: Через 2 года
  Балансовая стоимость: $3,000 - 2 × $300 = $2,400
# Шаг 3: Новая информация
  Они прослужат ещё только 6 лет
# Шаг 4: Новая сумма
  $2,400 / 6 = $400 в год с этого момента
= Уже начисленные $600 не трогают. Меняется только будущее.`,
        uz: `Javonlar $3,000, muddat 10 yil, tugatish qiymatisiz.
# 1-qadam: Eski summa
  $3,000 / 10 = yiliga $300
# 2-qadam: 2 yildan keyin
  Balans qiymati: $3,000 - 2 × $300 = $2,400
# 3-qadam: Yangi ma'lumot
  Ular yana faqat 6 yil xizmat qiladi
# 4-qadam: Yangi summa
  $2,400 / 6 = hozirdan boshlab yiliga $400
= Hisoblangan $600 ga tegilmaydi. Faqat kelajak o'zgaradi.`,
      },
      simple: {
        en: `Sometimes you learn that an asset will last longer or shorter than you thought. You do not go back and fix earlier years.

Instead, from now on: take what is left (the carrying amount today), take off any new residual value, and divide by the years still to go.`,
        ru: `Иногда выясняется, что актив прослужит дольше или меньше, чем думали. Прошлые годы не исправляют.

Вместо этого с этого момента: возьмите остаток (балансовую стоимость сегодня), вычтите новую ликвидационную стоимость, если есть, и разделите на оставшиеся годы.`,
        uz: `Ba'zan aktiv o'ylagandan uzoqroq yoki qisqaroq xizmat qilishi ma'lum bo'ladi. O'tgan yillar tuzatilmaydi.

Buning o'rniga hozirdan boshlab: qolganini (bugungi balans qiymatini) oling, yangi tugatish qiymati bo'lsa ayiring va qolgan yillarga bo'ling.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Non-current asset', ru: 'Внеоборотный актив', uz: 'Uzoq muddatli aktiv' },
      definition: {
        en: 'An asset kept and used for more than a year to help earn income, not bought to be resold.',
        ru: 'Актив, который держат и используют больше года для получения дохода, а не для перепродажи.',
        uz: 'Qayta sotish uchun emas, daromad olish uchun bir yildan ortiq saqlanadigan va ishlatiladigan aktiv.',
      },
      example: {
        en: 'A bakery\'s oven, delivery van and building.',
        ru: 'Печь, фургон и здание пекарни.',
        uz: 'Novvoyxonaning pechi, furgoni va binosi.',
      },
    },
    {
      term: { en: 'Capital expenditure', ru: 'Капитальные затраты', uz: 'Kapital xarajat' },
      definition: {
        en: 'Spending that buys or improves a non-current asset. It is shown in the statement of financial position.',
        ru: 'Затраты на покупку или улучшение внеоборотного актива. Отражаются в отчёте о финансовом положении.',
        uz: 'Uzoq muddatli aktivni sotib olish yoki yaxshilash xarajati. Moliyaviy holat hisobotida ko\'rsatiladi.',
      },
      example: {
        en: 'Buying a $3,000 oven, or building an extra room.',
        ru: 'Покупка печи за $3,000 или пристройка комнаты.',
        uz: '$3,000 lik pech olish yoki qo\'shimcha xona qurish.',
      },
    },
    {
      term: { en: 'Revenue expenditure', ru: 'Текущие затраты', uz: 'Joriy xarajat' },
      definition: {
        en: 'Spending on running the business day to day, charged to profit or loss.',
        ru: 'Затраты на повседневную работу бизнеса, относятся на прибыль или убыток.',
        uz: 'Biznesning kundalik ishi uchun xarajat, foyda yoki zararga yoziladi.',
      },
      example: {
        en: 'Repainting the shop for $400, or repairing a broken window.',
        ru: 'Покраска магазина за $400 или ремонт разбитого окна.',
        uz: 'Do\'konni $400 ga bo\'yash yoki singan oynani ta\'mirlash.',
      },
    },
    {
      term: { en: 'Asset register', ru: 'Реестр активов', uz: 'Aktivlar reyestri' },
      definition: {
        en: 'A detailed record of each non-current asset, reconciled to the ledger.',
        ru: 'Подробная запись по каждому внеоборотному активу, сверяемая с книгой.',
        uz: 'Har bir uzoq muddatli aktiv bo\'yicha batafsil yozuv, kitob bilan solishtiriladi.',
      },
      example: {
        en: 'A list showing: "Van, plate 01A123, bought 1 July, cost $10,100, 25% reducing balance".',
        ru: 'Список: «Фургон, номер 01A123, куплен 1 июля, стоимость $10,100, уменьшаемый остаток 25%».',
        uz: 'Ro\'yxat: «Furgon, raqam 01A123, 1 iyulda olingan, qiymati $10,100, 25% kamayuvchi qoldiq».',
      },
    },
    {
      term: { en: 'Depreciation', ru: 'Амортизация', uz: 'Amortizatsiya' },
      definition: {
        en: 'The systematic allocation of an asset\'s depreciable amount over its useful life.',
        ru: 'Систематическое распределение амортизируемой суммы актива на срок его использования.',
        uz: 'Aktivning amortizatsiya qilinadigan summasini foydali muddatga tizimli taqsimlash.',
      },
      example: {
        en: 'A $10,000 van used for 5 years: $2,000 of its cost is charged each year.',
        ru: 'Фургон за $10,000 на 5 лет: каждый год списывают $2,000 его стоимости.',
        uz: '5 yil ishlatiladigan $10,000 lik furgon: har yili qiymatidan $2,000 hisobdan chiqariladi.',
      },
    },
    {
      term: { en: 'Accumulated depreciation', ru: 'Накопленная амортизация', uz: 'To\'plangan amortizatsiya' },
      definition: {
        en: 'All the depreciation charged on an asset since it was bought. It is deducted from cost.',
        ru: 'Вся амортизация по активу с момента покупки. Вычитается из стоимости.',
        uz: 'Aktiv sotib olingandan beri hisoblangan barcha amortizatsiya. Qiymatdan ayiriladi.',
      },
      example: {
        en: '$300 a year for 3 years on shelves = $900 of accumulated depreciation.',
        ru: '$300 в год за 3 года по полкам = $900 накопленной амортизации.',
        uz: 'Javonlar bo\'yicha 3 yil davomida yiliga $300 = $900 to\'plangan amortizatsiya.',
      },
    },
    {
      term: { en: 'Carrying amount', ru: 'Балансовая стоимость', uz: 'Balans qiymati' },
      definition: {
        en: 'Cost less accumulated depreciation.',
        ru: 'Стоимость минус накопленная амортизация.',
        uz: 'Qiymat minus to\'plangan amortizatsiya.',
      },
      example: {
        en: 'Cost $10,100 - accumulated depreciation $1,262.50 = $8,837.50.',
        ru: 'Стоимость $10,100 - накопленная амортизация $1,262.50 = $8,837.50.',
        uz: 'Qiymat $10,100 - to\'plangan amortizatsiya $1,262.50 = $8,837.50.',
      },
    },
    {
      term: { en: 'Useful life', ru: 'Срок полезного использования', uz: 'Foydali muddat' },
      definition: {
        en: 'The number of years the business expects to use the asset.',
        ru: 'Число лет, в течение которых бизнес планирует использовать актив.',
        uz: 'Biznes aktivdan foydalanishni kutayotgan yillar soni.',
      },
      example: {
        en: 'A laptop that could physically last 6 years, but the business plans to replace it after 3. Useful life: 3 years.',
        ru: 'Ноутбук мог бы прослужить 6 лет, но бизнес заменит его через 3. Срок полезного использования: 3 года.',
        uz: 'Noutbuk 6 yil ishlashi mumkin, lekin biznes uni 3 yildan keyin almashtiradi. Foydali muddat: 3 yil.',
      },
    },
    {
      term: { en: 'Residual value', ru: 'Ликвидационная стоимость', uz: 'Tugatish qiymati' },
      definition: {
        en: 'The estimated disposal value of the asset at the end of its useful life.',
        ru: 'Оценка выручки от выбытия актива в конце срока использования.',
        uz: 'Aktivning foydali muddat oxiridagi taxminiy sotuv qiymati.',
      },
      example: {
        en: 'A van bought for $10,000 that you expect to sell for $2,000 after 5 years.',
        ru: 'Фургон за $10,000, который вы рассчитываете продать за $2,000 через 5 лет.',
        uz: '$10,000 ga olingan va 5 yildan keyin $2,000 ga sotishni kutayotgan furgon.',
      },
    },
    {
      term: { en: 'Straight-line method', ru: 'Линейный метод', uz: 'To\'g\'ri chiziqli usul' },
      definition: {
        en: 'Depreciation that charges the same amount every year: (cost - residual value) / useful life.',
        ru: 'Амортизация одинаковой суммой каждый год: (стоимость - ликвидационная стоимость) / срок.',
        uz: 'Har yili bir xil summa hisoblanadigan amortizatsiya: (qiymat - tugatish qiymati) / muddat.',
      },
      example: {
        en: '($10,000 - $2,000) / 4 years = $2,000 a year.',
        ru: '($10,000 - $2,000) / 4 года = $2,000 в год.',
        uz: '($10,000 - $2,000) / 4 yil = yiliga $2,000.',
      },
    },
    {
      term: { en: 'Reducing balance', ru: 'Уменьшаемый остаток', uz: 'Kamayuvchi qoldiq' },
      definition: {
        en: 'A method charging a fixed percentage of the carrying amount each year.',
        ru: 'Метод, при котором каждый год начисляется фиксированный процент от балансовой стоимости.',
        uz: 'Har yili balans qiymatining qat\'iy foizi hisoblanadigan usul.',
      },
      example: {
        en: '25% of $10,100 = $2,525 in year 1, then 25% of $7,575 = $1,893.75 in year 2.',
        ru: '25% от $10,100 = $2,525 в 1-й год, затем 25% от $7,575 = $1,893.75 во 2-й.',
        uz: '1-yil $10,100 ning 25% = $2,525, keyin 2-yil $7,575 ning 25% = $1,893.75.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter06;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter06.id] = chapter06;
