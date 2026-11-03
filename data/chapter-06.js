'use strict';

const chapter06 = {
  id: 'chapter-06',
  titles: {
    en: 'Non-current assets: acquisition and depreciation',
    ru: 'Внеоборотные активы: приобретение и амортизация',
    uz: 'Uzoq muddatli aktivlar: sotib olish va amortizatsiya',
  },
  objectives: [
    { en: 'Define non-current assets', ru: 'Дать определение внеоборотным активам', uz: 'Uzoq muddatli aktivlarga ta\'rif berish' },
    { en: 'Tell asset (capitalised) items from expense items', ru: 'Отличать капитализируемые затраты от расходов', uz: 'Aktivga kiritiladigan xarajatlarni oddiy xarajatlardan ajratish' },
    { en: 'Explain the purpose of an asset register', ru: 'Объяснить назначение реестра активов', uz: 'Aktivlar reyestrining maqsadini tushuntirish' },
    { en: 'Record the acquisition of non-current assets', ru: 'Отражать приобретение внеоборотных активов', uz: 'Uzoq muddatli aktivlarni sotib olishni qayd etish' },
    { en: 'Calculate and record depreciation', ru: 'Рассчитывать и отражать амортизацию', uz: 'Amortizatsiyani hisoblash va qayd etish' },
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
      heading: {
        en: 'What a non-current asset is',
        ru: 'Что такое внеоборотный актив',
        uz: 'Uzoq muddatli aktiv nima',
      },
      body: {
        en: `A non-current asset is long-term in nature, is not normally bought to be resold, may be tangible or intangible, and is used directly or indirectly to earn income for the business. It is not liquid: it cannot normally be turned into cash quickly without a significant loss of value.

Because of this, spending falls into two types. Asset (capitalised) expenditure buys or improves a non-current asset, so it appears in the statement of financial position. Revenue expenditure keeps the business running day to day, such as repairs, redecorating, administration and general overheads, so it is charged straight to profit or loss as an expense.`,
        ru: `Внеоборотный актив — долгосрочный по своей природе, обычно покупается не для перепродажи, может быть материальным или нематериальным и прямо или косвенно используется для получения дохода. Он не ликвиден: его обычно нельзя быстро превратить в деньги без значительной потери стоимости.

Поэтому затраты делятся на два вида. Капитальные (капитализируемые) затраты покупают или улучшают внеоборотный актив, поэтому отражаются в отчёте о финансовом положении. Текущие затраты поддерживают повседневную работу бизнеса: ремонт, косметический ремонт, администрирование и общие накладные расходы. Они сразу относятся на прибыль или убыток как расход.`,
        uz: `Uzoq muddatli aktiv tabiatan uzoq muddatli, odatda qayta sotish uchun sotib olinmaydi, moddiy yoki nomoddiy bo'lishi mumkin va to'g'ridan-to'g'ri yoki bilvosita biznesga daromad keltirish uchun ishlatiladi. U likvid emas: uni qiymatini sezilarli yo'qotmasdan tez pulga aylantirib bo'lmaydi.

Shu sababli xarajatlar ikki turga bo'linadi. Aktivga kiritiladigan (kapital) xarajat uzoq muddatli aktivni sotib oladi yoki yaxshilaydi, shuning uchun moliyaviy holat hisobotida ko'rinadi. Joriy xarajat biznesni kundalik ishlatadi: ta'mir, qayta bezash, boshqaruv va umumiy ustama xarajatlar. U to'g'ridan-to'g'ri foyda yoki zararga xarajat sifatida yoziladi.`,
      },
      example: {
        en: `Madina's Mart buys new shelves for $3,000. They will be used for years, so they are a non-current asset. Repainting the shop for $400 only freshens it up, so that is an expense. Building an extra room that adds $5,000 of selling space improves what the shop can earn, so that is added to the asset.`,
        ru: `Madina's Mart покупает новые стеллажи за $3,000. Они прослужат годы, поэтому это внеоборотный актив. Покраска магазина за $400 лишь освежает его, поэтому это расход. Пристройка комнаты за $5,000, которая добавляет торговую площадь, повышает доходность магазина, поэтому её добавляют к активу.`,
        uz: `Madina's Mart $3,000 ga yangi javonlar sotib oladi. Ular yillar davomida ishlatiladi, demak uzoq muddatli aktiv. Do'konni $400 ga qayta bo'yash uni faqat yangilaydi, bu xarajat. Savdo maydonini kengaytiradigan $5,000 lik xona qurish do'kon daromadini oshiradi, shuning uchun aktivga qo'shiladi.`,
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
        en: `Madina buys a delivery van. The dealer's price is $10,000 and the number plates cost $100. She also pays $480 for one year of insurance and $120 for road tax. The van costs $10,100: Dr Van $10,100. The insurance and road tax are running costs, so $600 goes to expenses. Total paid is $10,700: Cr Bank $10,700. She then adds the van to the asset register with its date, plate number and cost.`,
        ru: `Мадина покупает фургон для доставки. Цена у дилера $10,000, номерные знаки $100. Также она платит $480 за год страховки и $120 дорожного налога. Стоимость фургона $10,100: Дт Фургон $10,100. Страховка и налог — текущие расходы, поэтому $600 идёт в расходы. Всего заплачено $10,700: Кт Банк $10,700. Затем она вносит фургон в реестр активов с датой, номером и стоимостью.`,
        uz: `Madina yetkazib berish furgonini sotib oladi. Dilerning narxi $10,000, davlat raqami $100. U yana bir yillik sug'urta uchun $480 va yo'l solig'i uchun $120 to'laydi. Furgon qiymati $10,100: Dt Furgon $10,100. Sug'urta va soliq joriy xarajat, shuning uchun $600 xarajatga o'tadi. Jami to'langan $10,700: Kt Bank $10,700. So'ng u furgonni sanasi, raqami va qiymati bilan aktivlar reyestriga yozadi.`,
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
      heading: {
        en: 'Why we depreciate',
        ru: 'Зачем нужна амортизация',
        uz: 'Nega amortizatsiya kerak',
      },
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
        en: `The $10,100 van will not last forever and will help earn sales for several years. If Madina charged the whole $10,100 against the year she bought it, that year would look terrible and the next years too good. Depreciation spreads the cost over the years the van is used. The shelves are used the same way, but the land under the shop is not depreciated.`,
        ru: `Фургон за $10,100 прослужит не вечно и будет помогать зарабатывать выручку несколько лет. Если Мадина списала бы всё $10,100 на год покупки, тот год выглядел бы ужасно, а следующие — слишком хорошо. Амортизация распределяет стоимость на годы использования фургона. Так же используются стеллажи, а земля под магазином не амортизируется.`,
        uz: `$10,100 lik furgon abadiy xizmat qilmaydi va bir necha yil davomida sotuvga yordam beradi. Agar Madina butun $10,100 ni sotib olgan yiliga xarajat qilsa, o'sha yil juda yomon, keyingi yillar esa juda yaxshi ko'rinardi. Amortizatsiya qiymatni furgon ishlatiladigan yillarga taqsimlaydi. Javonlar ham xuddi shunday ishlatiladi, lekin do'kon ostidagi yer amortizatsiyalanmaydi.`,
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
        en: `The $3,000 shelves have no residual value and a ten-year life: straight-line gives $300 a year. The van, at 25% reducing balance, is charged $2,525 in year one (25% of $10,100). Its carrying amount falls to $7,575, so year two is $1,893.75 (25% of $7,575). If Madina bought the van on 1 July and her year ends on 31 December, year one is charged monthly for 6 months: $2,525 x 6/12 = $1,262.50.`,
        ru: `Стеллажи за $3,000 без ликвидационной стоимости и со сроком 10 лет: прямолинейный метод даёт $300 в год. Фургон при 25% уменьшаемого остатка получает $2,525 в первый год (25% от $10,100). Его балансовая стоимость падает до $7,575, поэтому второй год: $1,893.75 (25% от $7,575). Если Мадина купила фургон 1 июля, а год заканчивается 31 декабря, первый год начисляется помесячно за 6 месяцев: $2,525 x 6/12 = $1,262.50.`,
        uz: `$3,000 lik javonlar tugatish qiymatisiz va 10 yillik muddatli: to'g'ri chiziqli usul yiliga $300 beradi. Furgon 25% kamayuvchi qoldiqda birinchi yili $2,525 hisoblanadi ($10,100 ning 25%). Uning balans qiymati $7,575 ga tushadi, shuning uchun ikkinchi yil $1,893.75 ($7,575 ning 25%). Agar Madina furgonni 1 iyulda sotib olgan bo'lsa va yili 31 dekabrda tugasa, birinchi yil 6 oy uchun oylik hisoblanadi: $2,525 x 6/12 = $1,262.50.`,
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
      heading: {
        en: 'Accounting for depreciation',
        ru: 'Учёт амортизации',
        uz: 'Amortizatsiyani hisobda yuritish',
      },
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
        en: `For the year to 31 December, Madina's year-end entries are: Dr Depreciation charge $1,262.50, Cr Accumulated depreciation - van $1,262.50 for the van, and Dr Depreciation charge $300, Cr Accumulated depreciation - shelves $300. The statement of financial position shows the van at cost $10,100, less $1,262.50, giving a carrying amount of $8,837.50. The total $1,562.50 is also in her profit or loss.`,
        ru: `За год по 31 декабря проводки Мадины на конец года: Дт Расход по амортизации $1,262.50, Кт Накопленная амортизация - фургон $1,262.50 по фургону и Дт Расход по амортизации $300, Кт Накопленная амортизация - стеллажи $300. В отчёте о финансовом положении фургон показан по стоимости $10,100 минус $1,262.50, балансовая стоимость $8,837.50. Общая сумма $1,562.50 отражена и в её прибыли или убытке.`,
        uz: `31 dekabrgacha bo'lgan yil uchun Madinaning yil oxiri yozuvlari: furgon uchun Dt Amortizatsiya xarajati $1,262.50, Kt To'plangan amortizatsiya - furgon $1,262.50 va Dt Amortizatsiya xarajati $300, Kt To'plangan amortizatsiya - javonlar $300. Moliyaviy holat hisobotida furgon $10,100 qiymatda minus $1,262.50, balans qiymati $8,837.50. Umumiy $1,562.50 uning foyda yoki zararida ham bor.`,
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
      heading: {
        en: 'Changing estimates',
        ru: 'Изменение оценок',
        uz: 'Baholarni o\'zgartirish',
      },
      body: {
        en: `A business should apply the same rates and methods consistently, but it may change its estimate of useful life or residual value if the old one is no longer appropriate. No past figures are restated. You simply work out the new annual charge from that point on.

Take the carrying amount at the date of the change, deduct any new residual value, and divide by the new remaining useful life.`,
        ru: `Бизнес должен последовательно применять одни и те же ставки и методы, но может изменить оценку срока использования или ликвидационной стоимости, если прежняя уже не подходит. Прошлые данные не пересчитываются. Вы просто считаете новое годовое начисление с этого момента.

Возьмите балансовую стоимость на дату изменения, вычтите новую ликвидационную стоимость и разделите на новый оставшийся срок использования.`,
        uz: `Biznes bir xil stavka va usullarni izchil qo'llashi kerak, lekin eski baho endi mos kelmasa, foydali muddat yoki tugatish qiymati bahosini o'zgartirishi mumkin. O'tgan raqamlar qayta hisoblanmaydi. Siz shunchaki shu paytdan boshlab yangi yillik summani hisoblaysiz.

O'zgarish sanasidagi balans qiymatini oling, yangi tugatish qiymatini ayiring va yangi qolgan foydali muddatga bo'ling.`,
      },
      example: {
        en: `After two years Madina's shelves ($3,000, ten-year life, no residual value) have a carrying amount of $3,000 - 2 x $300 = $2,400. A supplier tells her they will wear out sooner, and she now expects only six more years of use. The new charge is $2,400 / 6 = $400 a year from now on. The $600 already charged is left alone.`,
        ru: `Через два года стеллажи Мадины ($3,000, срок 10 лет, без ликвидационной стоимости) имеют балансовую стоимость $3,000 - 2 x $300 = $2,400. Поставщик говорит, что они износятся быстрее, и теперь она ожидает ещё лишь шесть лет использования. Новое начисление: $2,400 / 6 = $400 в год с этого момента. Уже начисленные $600 не меняются.`,
        uz: `Ikki yildan keyin Madinaning javonlari ($3,000, 10 yillik muddat, tugatish qiymatisiz) balans qiymati $3,000 - 2 x $300 = $2,400. Yetkazib beruvchi ular tezroq eskirishini aytadi va u endi yana faqat olti yil foydalanishni kutadi. Yangi summa: hozirdan boshlab yiliga $2,400 / 6 = $400. Allaqachon hisoblangan $600 o'zgarmaydi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Capital expenditure', ru: 'Капитальные затраты', uz: 'Kapital xarajat' }, definition: { en: 'Spending that buys or improves a non-current asset. It is shown in the statement of financial position.', ru: 'Затраты на покупку или улучшение внеоборотного актива. Отражаются в отчёте о финансовом положении.', uz: 'Uzoq muddatli aktivni sotib olish yoki yaxshilash xarajati. Moliyaviy holat hisobotida ko\'rsatiladi.' } },
    { term: { en: 'Revenue expenditure', ru: 'Текущие затраты', uz: 'Joriy xarajat' }, definition: { en: 'Spending on running the business day to day, charged to profit or loss.', ru: 'Затраты на повседневную работу бизнеса, относятся на прибыль или убыток.', uz: 'Biznesning kundalik ishi uchun xarajat, foyda yoki zararga yoziladi.' } },
    { term: { en: 'Asset register', ru: 'Реестр активов', uz: 'Aktivlar reyestri' }, definition: { en: 'A detailed record of each non-current asset, reconciled to the ledger.', ru: 'Подробная запись по каждому внеоборотному активу, сверяемая с книгой.', uz: 'Har bir uzoq muddatli aktiv bo\'yicha batafsil yozuv, kitob bilan solishtiriladi.' } },
    { term: { en: 'Depreciation', ru: 'Амортизация', uz: 'Amortizatsiya' }, definition: { en: 'The systematic allocation of an asset\'s depreciable amount over its useful life.', ru: 'Систематическое распределение амортизируемой суммы актива на срок его использования.', uz: 'Aktivning amortizatsiya qilinadigan summasini foydali muddatga tizimli taqsimlash.' } },
    { term: { en: 'Useful life', ru: 'Срок полезного использования', uz: 'Foydali muddat' }, definition: { en: 'The number of years the business expects to use the asset.', ru: 'Число лет, в течение которых бизнес планирует использовать актив.', uz: 'Biznes aktivdan foydalanishni kutayotgan yillar soni.' } },
    { term: { en: 'Residual value', ru: 'Ликвидационная стоимость', uz: 'Tugatish qiymati' }, definition: { en: 'The estimated disposal value of the asset at the end of its useful life.', ru: 'Оценка выручки от выбытия актива в конце срока использования.', uz: 'Aktivning foydali muddat oxiridagi taxminiy sotuv qiymati.' } },
    { term: { en: 'Carrying amount', ru: 'Балансовая стоимость', uz: 'Balans qiymati' }, definition: { en: 'Cost less accumulated depreciation.', ru: 'Стоимость минус накопленная амортизация.', uz: 'Qiymat minus to\'plangan amortizatsiya.' } },
    { term: { en: 'Reducing balance', ru: 'Уменьшаемый остаток', uz: 'Kamayuvchi qoldiq' }, definition: { en: 'A method charging a fixed percentage of the carrying amount each year.', ru: 'Метод, при котором каждый год начисляется фиксированный процент от балансовой стоимости.', uz: 'Har yili balans qiymatining qat\'iy foizi hisoblanadigan usul.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter06;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter06.id] = chapter06;
