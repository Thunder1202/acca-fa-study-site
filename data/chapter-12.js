'use strict';

const chapter12 = {
  id: 'chapter-12',
  titles: {
    en: 'Capital structure and finance costs',
    ru: 'Структура капитала и финансовые расходы',
    uz: 'Kapital tuzilmasi va moliyaviy xarajatlar',
  },
  objectives: [
    { en: 'Understand how a limited liability company is financed', ru: 'Понимать, как финансируется компания с ограниченной ответственностью', uz: 'Mas\'uliyati cheklangan kompaniya qanday moliyalashtirilishini tushunish' },
    { en: 'Record share issues, share capital and share premium', ru: 'Отражать выпуск акций, акционерный капитал и эмиссионный доход', uz: 'Aksiya chiqarish, aksiya kapitali va emissiya daromadini qayd etish' },
    { en: 'Define and record rights issues and bonus issues', ru: 'Определять и отражать выпуск прав и бонусный выпуск', uz: 'Huquqli va bonusli chiqarishlarni aniqlash va qayd etish' },
    { en: 'Record dividends, loan note interest and reserves', ru: 'Отражать дивиденды, проценты по долговым нотам и резервы', uz: 'Dividendlar, qarz notasi foizi va rezervlarni qayd etish' },
    { en: 'Record income tax in the ledger', ru: 'Отражать налог на прибыль в учёте', uz: 'Foyda solig\'ini hisobda qayd etish' },
  ],
  sections: [
    {
      key: {
        en: `- Debt must be serviced and repaid. Equity shares in what is left when the business ends.
- Ordinary shares are equity. Dividends on them are not compulsory.
- Loan notes are debt: a liability, with interest shown as a finance cost.
- Redeemable preference shares are debt: a liability, with dividends as a finance cost.
- Irredeemable preference shares are equity, with dividends treated like ordinary dividends.`,
        ru: `- Долг нужно обслуживать и возвращать. Капитал даёт долю в остатке при закрытии бизнеса.
- Обыкновенные акции — капитал. Дивиденды по ним необязательны.
- Долговые ноты — долг: обязательство, проценты — финансовый расход.
- Погашаемые привилегированные акции — долг: обязательство, дивиденды — финансовый расход.
- Непогашаемые привилегированные акции — капитал, дивиденды как обыкновенные.`,
        uz: `- Qarz xizmat ko'rsatish va qaytarishni talab qiladi. Kapital biznes yopilganda qoldiqdan ulush beradi.
- Oddiy aksiyalar kapital. Ularga dividend majburiy emas.
- Qarz notalari qarz: majburiyat, foiz moliyaviy xarajat.
- Qaytariladigan imtiyozli aksiyalar qarz: majburiyat, dividend moliyaviy xarajat.
- Qaytarilmaydigan imtiyozli aksiyalar kapital, dividend oddiydek ishlanadi.`,
      },
      exam: {
        en: `- All preference shares are not the same: irredeemable is equity, redeemable is a liability.
- Issuing redeemable preference shares changes bank and long-term debt, not equity.
- Redeemable preference dividends are an interest expense in profit or loss, so they do not go through the statement of changes in equity.
- Bank loans and redeemable preference shares are never in the statement of changes in equity.`,
        ru: `- Привилегированные акции бывают разные: непогашаемые — капитал, погашаемые — обязательство.
- Выпуск погашаемых привилегированных акций меняет банк и долгосрочный долг, а не капитал.
- Дивиденды по погашаемым привилегированным акциям — процентный расход в прибыли или убытке, в отчёт об изменениях капитала они не идут.
- Банковские кредиты и погашаемые привилегированные акции никогда не входят в отчёт об изменениях капитала.`,
        uz: `- Imtiyozli aksiyalar bir xil emas: qaytarilmaydigani kapital, qaytariladigani majburiyat.
- Qaytariladigan imtiyozli aksiya chiqarish bank va uzoq muddatli qarzni o'zgartiradi, kapitalni emas.
- Qaytariladigan imtiyozli dividendlar foyda yoki zarardagi foiz xarajati, kapitaldagi o'zgarishlar hisobotidan o'tmaydi.
- Bank kreditlari va qaytariladigan imtiyozli aksiyalar kapitaldagi o'zgarishlar hisobotida hech qachon bo'lmaydi.`,
      },
      heading: {
        en: 'How a company is financed',
        ru: 'Как финансируется компания',
        uz: 'Kompaniya qanday moliyalashtiriladi',
      },
      body: {
        en: `A company needs capital to start trading: money to buy materials, recruit staff and pay for everything else. Finance falls into two broad groups. Debt requires a mandatory transfer of benefit to the lender, in the form of interest and repayment. Equity gives the provider a right to share in what is left when the business ceases to trade.

Ordinary shares are equity. The directors have no duty to repay shareholders or to pay a dividend. A shareholder owns a share of the company. A dividend is shown in the statement of changes in equity, not in profit or loss, because it is a distribution of profit to its owners rather than a cost of earning it.

Loan notes are debt. Interest must usually be paid every year and the full amount repaid later, so they are a liability, and the interest is a finance cost that reduces profit.

Preference shares can be either. If they must be repaid (redeemable), they are a liability and the dividends are finance charges. If they do not have to be repaid (irredeemable), they are equity and the dividends are treated like ordinary dividends. They still do not give the holder a residual interest in the business.`,
        ru: `Компании нужен капитал, чтобы начать торговлю: деньги на материалы, персонал и всё остальное. Финансирование делится на две большие группы. Долг требует обязательной передачи выгод кредитору в виде процентов и возврата. Капитал даёт право на долю в остатке при прекращении бизнеса.

Обыкновенные акции — капитал. Директора не обязаны возвращать деньги акционерам или платить дивиденд. Акционер владеет долей компании. Дивиденд показывается в отчёте об изменениях капитала, а не в прибыли или убытке, потому что это распределение прибыли владельцам, а не затрата на её получение.

Долговые ноты — долг. Проценты обычно платятся каждый год, а полная сумма возвращается позже, поэтому это обязательство, а проценты — финансовый расход, уменьшающий прибыль.

Привилегированные акции могут быть и тем, и другим. Если их нужно погасить, это обязательство, а дивиденды — финансовые расходы. Если погашать не нужно, это капитал, а дивиденды учитываются как обыкновенные. Права на остаток в бизнесе они всё равно не дают.`,
        uz: `Kompaniyaga savdo boshlash uchun kapital kerak: materiallar, xodimlar va boshqa hamma narsa uchun pul. Moliyalashtirish ikki katta guruhga bo'linadi. Qarz kreditorga foiz va qaytarish ko'rinishida majburiy naf berishni talab qiladi. Kapital biznes to'xtaganda qoldiqdan ulush olish huquqini beradi.

Oddiy aksiyalar kapital. Direktorlar aksiyadorlarga pulni qaytarishga yoki dividend to'lashga majbur emas. Aksiyador kompaniya ulushiga egalik qiladi. Dividend foyda yoki zararda emas, kapitaldagi o'zgarishlar hisobotida ko'rsatiladi, chunki bu foydani topish xarajati emas, egalariga taqsimlash.

Qarz notalari qarz. Foiz odatda har yili to'lanadi, to'liq summa keyin qaytariladi, shuning uchun bu majburiyat, foiz esa foydani kamaytiruvchi moliyaviy xarajat.

Imtiyozli aksiyalar ikkalasi ham bo'lishi mumkin. Qaytarilishi kerak bo'lsa, ular majburiyat, dividendlar moliyaviy xarajat. Qaytarilmasa, kapital, dividendlar oddiydek ishlanadi. Baribir ular biznes qoldig'iga huquq bermaydi.`,
      },
      example: {
        en: `Madina's Mart has become Madina's Mart LLC. It sells ordinary shares to raise money, with no promise to repay. It also borrows from investors with 8% loan notes repayable in ten years, which is a liability with interest in profit or loss. A relative buys 6% redeemable preference shares, which must be repaid in five years. Although they are called shares, they are a liability, and the 6% goes through finance costs.`,
        ru: `Madina's Mart стал компанией Madina's Mart LLC. Она продаёт обыкновенные акции без обещания вернуть деньги. Она также занимает у инвесторов через 8% долговые ноты сроком на десять лет: это обязательство, проценты идут в прибыль или убыток. Родственница покупает 6% погашаемые привилегированные акции, подлежащие погашению через пять лет. Хотя они называются акциями, это обязательство, а 6% идут через финансовые расходы.`,
        uz: `Madina's Mart endi Madina's Mart LLC. U qaytarish va'dasisiz oddiy aksiyalar sotadi. U investorlardan o'n yilga 8% qarz notalari bilan ham qarz oladi: bu majburiyat, foiz foyda yoki zararga o'tadi. Qarindoshi besh yilda qaytariladigan 6% imtiyozli aksiyalar sotib oladi. Aksiya deyilsa ham, bu majburiyat, 6% esa moliyaviy xarajatdan o'tadi.`,
      },
    },
    {
      key: {
        en: `- Nominal (par) value is a fixed value given to a share. Market value changes.
- Issue price is at least nominal value, and usually above it.
- At nominal: Dr Bank, Cr Share capital.
- At a premium: Dr Bank (price), Cr Share capital (nominal), Cr Share premium (excess).
- Share capital and share premium are both part of equity.
- Market value of shares does not appear in the financial statements.`,
        ru: `- Номинал — фиксированная стоимость акции. Рыночная стоимость меняется.
- Цена выпуска не ниже номинала и обычно выше него.
- По номиналу: Дт Банк, Кт Акционерный капитал.
- С премией: Дт Банк (цена), Кт Акционерный капитал (номинал), Кт Эмиссионный доход (разница).
- Акционерный капитал и эмиссионный доход входят в капитал.
- Рыночная стоимость акций в отчётности не показывается.`,
        uz: `- Nominal qiymat — aksiyaning qat'iy qiymati. Bozor qiymati o'zgaradi.
- Chiqarish narxi kamida nominalga teng va odatda undan yuqori.
- Nominalda: Dt Bank, Kt Aksiya kapitali.
- Mukofot bilan: Dt Bank (narx), Kt Aksiya kapitali (nominal), Kt Emissiya daromadi (farq).
- Aksiya kapitali va emissiya daromadi ikkalasi kapital tarkibida.
- Aksiyalarning bozor qiymati hisobotda ko'rsatilmaydi.`,
      },
      exam: {
        en: `- A company always has equity share capital. It may or may not have a share premium account or a revaluation surplus.
- Share premium arises only if shares are issued above nominal value.
- Work out share capital as number of shares x nominal value. Never use the issue price.
- Called-up capital is the nominal value paid plus amounts shareholders have agreed to pay. Paid-up capital is what has been paid so far.`,
        ru: `- Акционерный капитал у компании есть всегда. Эмиссионного дохода или резерва переоценки может и не быть.
- Эмиссионный доход возникает, только если акции выпущены выше номинала.
- Акционерный капитал = число акций x номинал. Никогда не берите цену выпуска.
- Истребованный капитал — оплаченный номинал плюс суммы, которые акционеры согласились внести. Оплаченный — то, что уже внесено.`,
        uz: `- Kompaniyada doim aksiya kapitali bor. Emissiya daromadi yoki qayta baholash rezervi bo'lmasligi mumkin.
- Emissiya daromadi faqat aksiyalar nominaldan yuqori chiqarilganda paydo bo'ladi.
- Aksiya kapitali = aksiyalar soni x nominal. Hech qachon chiqarish narxini olmang.
- Chaqirilgan kapital — to'langan nominal plus aksiyadorlar to'lashga kelishgan summalar. To'langan kapital — hozirgacha to'langani.`,
      },
      heading: {
        en: 'Issuing shares',
        ru: 'Выпуск акций',
        uz: 'Aksiya chiqarish',
      },
      body: {
        en: `Every share has a nominal or par value, often $1, 50c or 25c. It stays fixed and is often used to work out dividends. The company first sells shares at an issue price, which is at least the nominal value. After that, holders may sell to others at the market value, which moves with the fortunes of the company. Market value does not feature in the financial statements.

Issued share capital is the number and nominal value of shares issued to shareholders. The number of issued shares is what dividends are paid on. Called-up share capital is the nominal value already paid plus anything shareholders have agreed to pay later. Paid-up share capital is the nominal value actually paid so far.

If shares are issued at nominal value, the entry is Dr Cash at bank, Cr Share capital. In practice companies usually issue at a premium. The share capital account then takes only the nominal value, and the excess goes to share premium. Both accounts appear in equity.`,
        ru: `У каждой акции есть номинал, часто $1, 50c или 25c. Он фиксирован и часто используется для расчёта дивидендов. Сначала компания продаёт акции по цене выпуска, не ниже номинала. Затем держатели могут продавать их другим по рыночной стоимости, которая зависит от дел компании. В отчётности рыночная стоимость не показывается.

Выпущенный акционерный капитал — количество и номинал акций, выпущенных акционерам. Дивиденды платятся на число выпущенных акций. Истребованный капитал — уже оплаченный номинал плюс то, что акционеры согласились внести позже. Оплаченный капитал — фактически внесённый номинал.

При выпуске по номиналу запись: Дт Банк, Кт Акционерный капитал. На практике компании обычно выпускают с премией. Тогда счёт акционерного капитала получает только номинал, а разница идёт в эмиссионный доход. Оба счёта показываются в капитале.`,
        uz: `Har bir aksiyaning nominal qiymati bor, ko'pincha $1, 50c yoki 25c. U qat'iy va ko'pincha dividendlarni hisoblashda ishlatiladi. Kompaniya avval aksiyalarni kamida nominalga teng chiqarish narxida sotadi. Keyin egalari ularni boshqalarga kompaniya ahvoliga qarab o'zgaradigan bozor qiymatida sotishi mumkin. Bozor qiymati hisobotda ko'rinmaydi.

Chiqarilgan aksiya kapitali — aksiyadorlarga berilgan aksiyalar soni va nominali. Dividendlar chiqarilgan aksiyalar soniga to'lanadi. Chaqirilgan kapital — to'langan nominal plus aksiyadorlar keyin to'lashga kelishgan summa. To'langan kapital — aslida to'langan nominal.

Nominalda chiqarilsa, yozuv: Dt Bank, Kt Aksiya kapitali. Amalda kompaniyalar odatda mukofot bilan chiqaradi. Unda aksiya kapitali hisobi faqat nominalni oladi, farq esa emissiya daromadiga o'tadi. Ikkala hisob kapitalda ko'rsatiladi.`,
      },
      example: {
        en: `Madina's Mart LLC issues 100,000 $1 ordinary shares at $1.50 each. Cash received is $150,000. The nominal value is $100,000 and the premium is 100,000 x $0.50 = $50,000. The entry is Dr Bank $150,000, Cr Share capital $100,000, Cr Share premium $50,000.`,
        ru: `Madina's Mart LLC выпускает 100,000 обыкновенных акций номиналом $1 по $1.50. Получено $150,000. Номинал $100,000, премия 100,000 x $0.50 = $50,000. Запись: Дт Банк $150,000, Кт Акционерный капитал $100,000, Кт Эмиссионный доход $50,000.`,
        uz: `Madina's Mart LLC 100,000 ta $1 lik oddiy aksiyani $1.50 dan chiqaradi. Olingan pul $150,000. Nominal $100,000, mukofot 100,000 x $0.50 = $50,000. Yozuv: Dt Bank $150,000, Kt Aksiya kapitali $100,000, Kt Emissiya daromadi $50,000.`,
      },
    },
    {
      key: {
        en: `- Rights issue: new shares offered to existing shareholders, in proportion, for cash.
- The price is normally below market value, but not below nominal value.
- Record it like any share issue: Dr Bank, Cr Share capital, Cr Share premium.
- Bonus issue: free new shares, in proportion. No cash comes in.
- Record it from a reserve: Dr Share premium (or other reserve), Cr Share capital.
- Use a non-distributable reserve such as share premium first.`,
        ru: `- Выпуск прав: новые акции существующим акционерам, пропорционально, за деньги.
- Цена обычно ниже рыночной, но не ниже номинала.
- Запись как при обычном выпуске: Дт Банк, Кт Акционерный капитал, Кт Эмиссионный доход.
- Бонусный выпуск: бесплатные новые акции, пропорционально. Денег нет.
- Запись из резерва: Дт Эмиссионный доход (или другой резерв), Кт Акционерный капитал.
- Сначала используйте нераспределяемый резерв, например эмиссионный доход.`,
        uz: `- Huquqli chiqarish: mavjud aksiyadorlarga, mutanosib, pulga yangi aksiyalar.
- Narx odatda bozordan past, lekin nominaldan past emas.
- Oddiy chiqarish kabi yoziladi: Dt Bank, Kt Aksiya kapitali, Kt Emissiya daromadi.
- Bonusli chiqarish: bepul yangi aksiyalar, mutanosib. Pul kelmaydi.
- Rezervdan yoziladi: Dt Emissiya daromadi (yoki boshqa rezerv), Kt Aksiya kapitali.
- Avval emissiya daromadi kabi taqsimlanmaydigan rezervni ishlating.`,
      },
      exam: {
        en: `- Capitalising reserves describes a bonus issue, not a rights issue.
- A rights issue is usually at a discount to market value, not to nominal value.
- A rights issue brings in cash, so it appears in the statement of cash flows. A bonus issue does not.
- A 1-for-4 bonus issue on 250,000 50c shares creates 62,500 shares, worth $31,250 at nominal value.
- When an issue follows another, work them in date order. The bonus shares are based on the shares in issue at that time.
- A bonus issue can be made from retained earnings, which then reduces retained earnings.`,
        ru: `- Капитализация резервов — это бонусный выпуск, а не выпуск прав.
- Выпуск прав обычно идёт со скидкой к рыночной цене, а не к номиналу.
- Выпуск прав приносит деньги и попадает в отчёт о движении денег. Бонусный — нет.
- Бонусный выпуск 1 за 4 на 250,000 акций по 50c создаёт 62,500 акций на $31,250 по номиналу.
- Если выпуски идут один за другим, считайте по датам. Бонус рассчитывается от акций на тот момент.
- Бонусный выпуск можно сделать из нераспределённой прибыли, и она тогда уменьшается.`,
        uz: `- Rezervlarni kapitallashtirish bonusli chiqarish, huquqli emas.
- Huquqli chiqarish odatda bozor narxidan chegirma bilan, nominaldan emas.
- Huquqli chiqarish pul olib keladi va pul oqimlari hisobotida ko'rinadi. Bonusli yo'q.
- 250,000 ta 50c aksiyaga 1 ga 4 bonus 62,500 aksiya, nominalda $31,250.
- Chiqarishlar ketma-ket bo'lsa, sana tartibida ishlang. Bonus o'sha paytdagi aksiyalardan hisoblanadi.
- Bonusli chiqarish taqsimlanmagan foydadan ham bo'lishi mumkin, u holda foyda kamayadi.`,
      },
      heading: {
        en: 'Rights issues and bonus issues',
        ru: 'Выпуск прав и бонусный выпуск',
        uz: 'Huquqli va bonusli chiqarishlar',
      },
      body: {
        en: `A rights issue offers new shares to existing shareholders in proportion to what they hold, at a stated price that is normally below market value. It is the cheapest way to raise money through a share issue, and the lower price makes success more likely than a public offer. On the other hand, it costs more than raising debt and may not raise all the money needed. It is recorded in exactly the same way as a normal share issue.

A bonus issue gives new shares to existing shareholders in proportion to what they hold, with no cash coming in. Dividing the capital into more shares lowers the market price per share, making shares easier to trade, and it brings issued capital more into line with the assets employed. The disadvantage is the administrative cost.

Because no cash arrives, the new shares must be paid for out of reserves. Any reserve can be used, but a non-distributable reserve such as share premium is used first, so that reserves available for dividends are kept. The entry moves nominal value from the reserve to share capital, so total equity does not change.`,
        ru: `Выпуск прав предлагает новые акции существующим акционерам пропорционально их доле по цене, обычно ниже рыночной. Это самый дешёвый способ привлечь деньги через акции, а низкая цена повышает шанс успеха по сравнению с публичным предложением. С другой стороны, это дороже займа и может не дать всей нужной суммы. Записывается точно как обычный выпуск.

Бонусный выпуск даёт новые акции существующим акционерам пропорционально их доле, без поступления денег. Деление капитала на большее число акций снижает рыночную цену акции и облегчает торговлю, а выпущенный капитал лучше соответствует используемым активам. Недостаток — административные расходы.

Так как денег нет, новые акции оплачиваются из резервов. Можно использовать любой резерв, но сначала берут нераспределяемый, например эмиссионный доход, чтобы сохранить резервы для дивидендов. Запись переносит номинал из резерва в акционерный капитал, поэтому общий капитал не меняется.`,
        uz: `Huquqli chiqarish mavjud aksiyadorlarga ulushiga mutanosib, odatda bozordan past belgilangan narxda yangi aksiyalar taklif qiladi. Bu aksiya orqali pul jalb qilishning eng arzon yo'li, past narx ommaviy taklifga qaraganda muvaffaqiyat ehtimolini oshiradi. Boshqa tomondan, u qarzdan qimmat va kerakli pulni to'liq bermasligi mumkin. U oddiy chiqarish bilan aynan bir xil yoziladi.

Bonusli chiqarish mavjud aksiyadorlarga ulushiga mutanosib, pulsiz yangi aksiyalar beradi. Kapitalni ko'proq aksiyaga bo'lish bir aksiya bozor narxini pasaytiradi va savdoni osonlashtiradi, chiqarilgan kapital ishlatilayotgan aktivlarga yaqinlashadi. Kamchiligi ma'muriy xarajat.

Pul kelmagani uchun yangi aksiyalar rezervlardan qoplanadi. Istalgan rezervni ishlatish mumkin, lekin dividend uchun rezervlarni saqlash uchun avval emissiya daromadi kabi taqsimlanmaydigan rezerv olinadi. Yozuv nominalni rezervdan aksiya kapitaliga o'tkazadi, shuning uchun jami kapital o'zgarmaydi.`,
      },
      example: {
        en: `Madina's Mart LLC has 100,000 $1 shares and $50,000 of share premium. It makes a 1-for-5 rights issue at $1.20: 20,000 shares bring in $24,000. Dr Bank $24,000, Cr Share capital $20,000, Cr Share premium $4,000. Capital is now $120,000 and premium $54,000. Later a 1-for-10 bonus issue creates 12,000 shares: Dr Share premium $12,000, Cr Share capital $12,000. Capital is $132,000 and premium $42,000. Total equity is unchanged by the bonus.`,
        ru: `У Madina's Mart LLC 100,000 акций по $1 и эмиссионный доход $50,000. Она проводит выпуск прав 1 за 5 по $1.20: 20,000 акций дают $24,000. Дт Банк $24,000, Кт Акционерный капитал $20,000, Кт Эмиссионный доход $4,000. Капитал теперь $120,000, премия $54,000. Позже бонусный выпуск 1 за 10 создаёт 12,000 акций: Дт Эмиссионный доход $12,000, Кт Акционерный капитал $12,000. Капитал $132,000, премия $42,000. Общий капитал от бонуса не меняется.`,
        uz: `Madina's Mart LLC da 100,000 ta $1 lik aksiya va $50,000 emissiya daromadi bor. U $1.20 dan 1 ga 5 huquqli chiqarish qiladi: 20,000 aksiya $24,000 olib keladi. Dt Bank $24,000, Kt Aksiya kapitali $20,000, Kt Emissiya daromadi $4,000. Kapital endi $120,000, mukofot $54,000. Keyin 1 ga 10 bonusli chiqarish 12,000 aksiya yaratadi: Dt Emissiya daromadi $12,000, Kt Aksiya kapitali $12,000. Kapital $132,000, mukofot $42,000. Bonusdan jami kapital o'zgarmaydi.`,
      },
    },
    {
      key: {
        en: `- A dividend is a distribution of profit to shareholders, not an expense.
- Dividends are often per share, or a % of nominal value.
- Paying one: Dr Retained earnings, Cr Cash at bank.
- It is shown in the statement of changes in equity.
- A proposed dividend not yet approved is not a liability at the year end.
- Reserves are retained earnings, revaluation surplus and share premium.`,
        ru: `- Дивиденд — распределение прибыли акционерам, а не расход.
- Дивиденды часто на акцию или в % от номинала.
- Выплата: Дт Нераспределённая прибыль, Кт Банк.
- Показывается в отчёте об изменениях капитала.
- Предложенный, но не утверждённый дивиденд — не обязательство на конец года.
- Резервы: нераспределённая прибыль, резерв переоценки, эмиссионный доход.`,
        uz: `- Dividend foydani aksiyadorlarga taqsimlash, xarajat emas.
- Dividendlar ko'pincha aksiyaga yoki nominalning %.
- To'lash: Dt Taqsimlanmagan foyda, Kt Bank.
- Kapitaldagi o'zgarishlar hisobotida ko'rsatiladi.
- Taklif qilingan, lekin tasdiqlanmagan dividend yil oxirida majburiyat emas.
- Rezervlar: taqsimlanmagan foyda, qayta baholash rezervi, emissiya daromadi.`,
      },
      exam: {
        en: `- Dividends paid are in the statement of changes in equity. Dividends received are income in profit or loss, so they are not.
- Retained earnings move by: opening + profit for the year - dividends paid - any bonus issue from retained earnings = closing.
- A revaluation gain does not touch retained earnings. It goes to other comprehensive income and the revaluation surplus.
- Total comprehensive income = profit or loss + other comprehensive income. Dividends are not deducted.
- A rights issue has no effect on retained earnings.
- Last year's final dividend, approved and paid this year, is deducted this year. This year's unapproved proposal is not.
- Number of shares = share capital / nominal value. A $200,000 capital of 50c shares is 400,000 shares.`,
        ru: `- Выплаченные дивиденды — в отчёте об изменениях капитала. Полученные — доход в прибыли или убытке, поэтому не там.
- Нераспределённая прибыль: на начало + прибыль за год - выплаченные дивиденды - бонусный выпуск из неё = на конец.
- Прирост от переоценки её не затрагивает. Он идёт в прочий совокупный доход и резерв переоценки.
- Общий совокупный доход = прибыль или убыток + прочий совокупный доход. Дивиденды не вычитаются.
- Выпуск прав не влияет на нераспределённую прибыль.
- Итоговый дивиденд прошлого года, утверждённый и выплаченный в этом, вычитается в этом году. Неутверждённое предложение этого года — нет.
- Число акций = акционерный капитал / номинал. Капитал $200,000 из акций по 50c — 400,000 акций.`,
        uz: `- To'langan dividendlar kapitaldagi o'zgarishlar hisobotida. Olingan dividendlar foyda yoki zarardagi daromad, u yerda emas.
- Taqsimlanmagan foyda: boshlang'ich + yil foydasi - to'langan dividendlar - undan bonusli chiqarish = yakuniy.
- Qayta baholash foydasi unga tegmaydi. U boshqa umumlashgan daromad va qayta baholash rezerviga o'tadi.
- Jami umumlashgan daromad = foyda yoki zarar + boshqa umumlashgan daromad. Dividendlar ayirilmaydi.
- Huquqli chiqarish taqsimlanmagan foydaga ta'sir qilmaydi.
- O'tgan yilning shu yil tasdiqlanib to'langan yakuniy dividendi shu yil ayiriladi. Shu yilning tasdiqlanmagan taklifi yo'q.
- Aksiyalar soni = aksiya kapitali / nominal. 50c lik $200,000 kapital 400,000 aksiya.`,
      },
      heading: {
        en: 'Dividends and reserves',
        ru: 'Дивиденды и резервы',
        uz: 'Dividendlar va rezervlar',
      },
      body: {
        en: `Dividends share profits among shareholders and are usually stated as an amount per share or a percentage of nominal value. Preference dividends are usually a fixed percentage of nominal value.

A company may pay an interim dividend during the year: Dr Retained earnings, Cr Cash at bank. At the year end it may propose a final dividend, to be approved by shareholders at the annual general meeting. Until then there is no obligation, so a proposed dividend is not a liability at the year end. It is recorded when approved.

Companies also finance themselves internally. Accumulated profits (retained earnings) and gains on revalued assets (the revaluation surplus) are known as other components of equity, or reserves.

The statement of changes in equity reconciles each equity balance from the start of the year to the end. It has columns for share capital, share premium, revaluation surplus and retained earnings. Profit for the year enters retained earnings, dividends leave it, a revaluation gain enters the revaluation surplus, and a share issue enters share capital and share premium. Its closing balances go into the statement of financial position.`,
        ru: `Дивиденды распределяют прибыль между акционерами и обычно указываются на акцию или в процентах от номинала. Привилегированные дивиденды обычно — фиксированный процент от номинала.

Компания может платить промежуточный дивиденд в течение года: Дт Нераспределённая прибыль, Кт Банк. В конце года она может предложить итоговый дивиденд, который утверждают акционеры на годовом собрании. До этого обязанности нет, поэтому предложенный дивиденд не является обязательством на конец года. Он записывается при утверждении.

Компании также финансируют себя изнутри. Накопленная прибыль (нераспределённая прибыль) и прирост от переоценки (резерв переоценки) называются прочими компонентами капитала, или резервами.

Отчёт об изменениях капитала сверяет каждый остаток капитала от начала года к концу. В нём есть столбцы акционерного капитала, эмиссионного дохода, резерва переоценки и нераспределённой прибыли. Прибыль за год входит в нераспределённую прибыль, дивиденды выходят из неё, прирост от переоценки входит в резерв переоценки, а выпуск акций — в акционерный капитал и эмиссионный доход. Остатки на конец идут в отчёт о финансовом положении.`,
        uz: `Dividendlar foydani aksiyadorlar orasida taqsimlaydi va odatda aksiyaga summa yoki nominalning foizi sifatida beriladi. Imtiyozli dividendlar odatda nominalning qat'iy foizi.

Kompaniya yil davomida oraliq dividend to'lashi mumkin: Dt Taqsimlanmagan foyda, Kt Bank. Yil oxirida u yakuniy dividend taklif qilishi mumkin, uni aksiyadorlar yillik yig'ilishda tasdiqlaydi. Ungacha burch yo'q, shuning uchun taklif qilingan dividend yil oxirida majburiyat emas. U tasdiqlanganda yoziladi.

Kompaniyalar o'zini ichkaridan ham moliyalashtiradi. To'plangan foyda (taqsimlanmagan foyda) va qayta baholash foydasi (qayta baholash rezervi) kapitalning boshqa tarkibiy qismlari yoki rezervlar deyiladi.

Kapitaldagi o'zgarishlar hisoboti har bir kapital qoldig'ini yil boshidan oxirigacha solishtiradi. Unda aksiya kapitali, emissiya daromadi, qayta baholash rezervi va taqsimlanmagan foyda ustunlari bor. Yil foydasi taqsimlanmagan foydaga kiradi, dividendlar undan chiqadi, qayta baholash foydasi rezervga kiradi, aksiya chiqarish esa aksiya kapitali va emissiya daromadiga kiradi. Yakuniy qoldiqlar moliyaviy holat hisobotiga o'tadi.`,
      },
      example: {
        en: `Madina's Mart LLC has 132,000 $1 shares, opening retained earnings of $30,000 and profit for the year of $45,000. It pays an interim dividend of 10c a share: 132,000 x 10c = $13,200. At the year end it proposes a final dividend of $20,000, not yet approved. Closing retained earnings are $30,000 + $45,000 - $13,200 = $61,800. The $20,000 is not a liability and is not deducted. A $20,000 revaluation gain would add to total comprehensive income, making it $65,000, but would not change retained earnings.`,
        ru: `У Madina's Mart LLC 132,000 акций по $1, нераспределённая прибыль на начало $30,000 и прибыль за год $45,000. Она платит промежуточный дивиденд 10c на акцию: 132,000 x 10c = $13,200. В конце года она предлагает итоговый дивиденд $20,000, ещё не утверждённый. Нераспределённая прибыль на конец: $30,000 + $45,000 - $13,200 = $61,800. $20,000 — не обязательство и не вычитаются. Прирост от переоценки $20,000 увеличил бы общий совокупный доход до $65,000, но не изменил бы нераспределённую прибыль.`,
        uz: `Madina's Mart LLC da 132,000 ta $1 lik aksiya, boshlang'ich taqsimlanmagan foyda $30,000 va yil foydasi $45,000 bor. U aksiyaga 10c oraliq dividend to'laydi: 132,000 x 10c = $13,200. Yil oxirida hali tasdiqlanmagan $20,000 yakuniy dividend taklif qiladi. Yakuniy taqsimlanmagan foyda: $30,000 + $45,000 - $13,200 = $61,800. $20,000 majburiyat emas va ayirilmaydi. $20,000 qayta baholash foydasi jami umumlashgan daromadni $65,000 qilardi, lekin taqsimlanmagan foydani o'zgartirmasdi.`,
      },
    },
    {
      key: {
        en: `- Loan notes are fixed-term loans, with a nominal value and an agreed interest rate.
- On issue: Dr Cash at bank, Cr Non-current liability.
- Interest is worked out on nominal value and goes to finance costs.
- Interest: Dr Finance costs, Cr Cash at bank or an accrual if unpaid.
- Charge interest for the months the loan is in issue during the year.`,
        ru: `- Долговые ноты — срочные займы с номиналом и согласованной ставкой.
- При выпуске: Дт Банк, Кт Долгосрочное обязательство.
- Проценты считаются от номинала и идут в финансовые расходы.
- Проценты: Дт Финансовые расходы, Кт Банк или начисление, если не выплачены.
- Начисляйте за месяцы, когда заём действовал в течение года.`,
        uz: `- Qarz notalari nominal va kelishilgan stavkali muddatli qarzlar.
- Chiqarilganda: Dt Bank, Kt Uzoq muddatli majburiyat.
- Foiz nominaldan hisoblanadi va moliyaviy xarajatga o'tadi.
- Foiz: Dt Moliyaviy xarajatlar, Kt Bank yoki to'lanmagan bo'lsa hisoblangan.
- Yil davomida qarz amalda bo'lgan oylar uchun hisoblang.`,
      },
      exam: {
        en: `- Work out each loan separately for the months it existed. A loan repaid part-way through only bears interest up to that date.
- Finance cost is charged on an accruals basis, whether or not the interest has been paid.
- A loan note repayable within 12 months moves to current liabilities.`,
        ru: `- Считайте каждый заём отдельно за месяцы его действия. Заём, погашенный в течение года, несёт проценты только до этой даты.
- Финансовый расход начисляется по принципу начисления, выплачены проценты или нет.
- Нота к погашению в течение 12 месяцев переходит в краткосрочные обязательства.`,
        uz: `- Har bir qarzni amalda bo'lgan oylar uchun alohida hisoblang. Yil davomida to'langan qarzga faqat shu sanagacha foiz hisoblanadi.
- Moliyaviy xarajat foiz to'langan yoki to'lanmaganidan qat'i nazar hisoblash asosida yoziladi.
- 12 oy ichida qaytariladigan nota qisqa muddatli majburiyatga o'tadi.`,
      },
      heading: {
        en: 'Loan notes and finance costs',
        ru: 'Долговые ноты и финансовые расходы',
        uz: 'Qarz notalari va moliyaviy xarajatlar',
      },
      body: {
        en: `A company can raise money by issuing loan notes, which are fixed-term loans. The note itself is the document, often a certificate given to the lender. It has a nominal value, for example $100, and can be bought at an agreed price. The company must repay it at an agreed time.

Interest is calculated on the nominal value, for example 5% a year, and is shown in finance costs in the statement of profit or loss.

When the cash is received, the entry is Dr Cash at bank, Cr Non-current liability. Each year the finance charge is Dr Finance charges, with the credit going to cash at bank if paid, or to current liabilities if not yet paid. This is a simple approach, and later ACCA papers build on it under IFRS 9.`,
        ru: `Компания может привлечь деньги, выпустив долговые ноты — срочные займы. Сама нота — это документ, часто сертификат, выдаваемый кредитору. У неё есть номинал, например $100, и её можно купить по согласованной цене. Компания должна погасить её в согласованный срок.

Проценты считаются от номинала, например 5% в год, и показываются в финансовых расходах в отчёте о прибыли или убытке.

При получении денег запись: Дт Банк, Кт Долгосрочное обязательство. Каждый год финансовый расход: дебет Финансовые расходы, а кредит идёт в банк при оплате или в краткосрочные обязательства, если ещё не оплачено. Это простой подход, и старшие экзамены ACCA развивают его по IFRS 9.`,
        uz: `Kompaniya qarz notalari, ya'ni muddatli qarzlar chiqarib pul jalb qilishi mumkin. Notaning o'zi hujjat, ko'pincha kreditorga beriladigan sertifikat. Uning nominali bor, masalan $100, va uni kelishilgan narxda sotib olish mumkin. Kompaniya uni kelishilgan muddatda qaytarishi kerak.

Foiz nominaldan hisoblanadi, masalan yiliga 5%, va foyda yoki zarar hisobotida moliyaviy xarajatlarda ko'rsatiladi.

Pul olinganda yozuv: Dt Bank, Kt Uzoq muddatli majburiyat. Har yili moliyaviy xarajat debetlanadi, kredit esa to'langan bo'lsa bankka, to'lanmagan bo'lsa qisqa muddatli majburiyatga o'tadi. Bu oddiy yondashuv, keyingi ACCA imtihonlari uni IFRS 9 bo'yicha rivojlantiradi.`,
      },
      example: {
        en: `On 1 April, Madina's Mart LLC issues $50,000 of 8% loan notes, with interest paid half-yearly at the end of September and March. The year ends on 31 December. Annual interest is $4,000, so nine months' charge is $3,000. The six-month payment on 30 September is $2,000: Dr Finance costs, Cr Bank. Three more months are owed at the year end: Dr Finance costs $1,000, Cr Interest accrual $1,000. The statement of financial position shows the $50,000 as non-current and the $1,000 as current.`,
        ru: `1 апреля Madina's Mart LLC выпускает 8% долговые ноты на $50,000 с выплатой процентов раз в полгода в конце сентября и марта. Год заканчивается 31 декабря. Годовые проценты $4,000, значит, за девять месяцев расход $3,000. Выплата за шесть месяцев 30 сентября — $2,000: Дт Финансовые расходы, Кт Банк. Ещё три месяца причитаются на конец года: Дт Финансовые расходы $1,000, Кт Начисленные проценты $1,000. В отчёте о финансовом положении $50,000 долгосрочные, а $1,000 краткосрочные.`,
        uz: `1 aprelda Madina's Mart LLC $50,000 lik 8% qarz notalarini chiqaradi, foiz yarim yilda bir marta sentyabr va mart oxirida to'lanadi. Yil 31 dekabrda tugaydi. Yillik foiz $4,000, demak to'qqiz oylik xarajat $3,000. 30 sentyabrdagi olti oylik to'lov $2,000: Dt Moliyaviy xarajatlar, Kt Bank. Yil oxirida yana uch oy qarz: Dt Moliyaviy xarajatlar $1,000, Kt Hisoblangan foiz $1,000. Moliyaviy holat hisobotida $50,000 uzoq muddatli, $1,000 qisqa muddatli.`,
      },
    },
    {
      key: {
        en: `- A sole trader's tax is personal. Paying it from the business bank is drawings.
- A company is a separate legal entity, so its tax is an expense and a liability.
- Year end estimate: Dr Income tax charge, Cr Income tax liability (current).
- Payment: Dr Income tax liability, Cr Cash at bank.
- Tax charge = this year's estimate + underprovision, or - overprovision, of last year.
- Liability in the statement of financial position = this year's estimate only.`,
        ru: `- Налог предпринимателя личный. Оплата с бизнес-счёта — это изъятия.
- Компания — отдельное юрлицо, её налог — расход и обязательство.
- Оценка на конец года: Дт Расход по налогу, Кт Обязательство по налогу (краткосрочное).
- Оплата: Дт Обязательство по налогу, Кт Банк.
- Расход = оценка этого года + недоначисление или - переначисление прошлого.
- Обязательство в отчёте о финансовом положении = только оценка этого года.`,
        uz: `- Yakka tadbirkor solig'i shaxsiy. Biznes hisobidan to'lash olib qo'yish.
- Kompaniya alohida yuridik shaxs, solig'i xarajat va majburiyat.
- Yil oxiri bahosi: Dt Foyda solig'i xarajati, Kt Foyda solig'i majburiyati (qisqa).
- To'lov: Dt Foyda solig'i majburiyati, Kt Bank.
- Xarajat = shu yil bahosi + kam hisoblangan yoki - ko'p hisoblangan o'tgan yil summasi.
- Moliyaviy holat hisobotidagi majburiyat = faqat shu yil bahosi.`,
      },
      exam: {
        en: `- Overprovision: last year's estimate was too high. It reduces this year's charge.
- Underprovision: last year's estimate was too low. It increases this year's charge.
- Income tax here means tax on the company's profit, not tax paid by employees on their earnings.
- You are not expected to calculate tax. The question gives the figures.`,
        ru: `- Переначисление: прошлая оценка завышена. Это уменьшает расход этого года.
- Недоначисление: прошлая оценка занижена. Это увеличивает расход этого года.
- Налог на прибыль здесь — налог на прибыль компании, а не налог сотрудников с зарплаты.
- Рассчитывать налог не требуется. Суммы даны в задаче.`,
        uz: `- Ko'p hisoblangan: o'tgan baho yuqori edi. Bu shu yil xarajatini kamaytiradi.
- Kam hisoblangan: o'tgan baho past edi. Bu shu yil xarajatini oshiradi.
- Bu yerda foyda solig'i kompaniya foydasidan soliq, xodimlar daromadidan soliq emas.
- Soliqni hisoblash talab qilinmaydi. Summalar masalada beriladi.`,
      },
      heading: {
        en: 'Income tax',
        ru: 'Налог на прибыль',
        uz: 'Foyda solig\'i',
      },
      body: {
        en: `In a sole trader or partnership, tax falls on the individual. If the business bank account pays that personal tax, it is treated as drawings.

A limited liability company is a separate legal entity, so tax on its income is a business cost. It is shown as an expense in the statement of profit or loss, and anything unpaid is a liability in the statement of financial position. The tax is usually called income tax, or corporation tax in older UK usage.

Company year ends rarely match tax year ends, so a company estimates its liability at the end of each period. In step one, it records the estimate: Dr Income tax charge, Cr Income tax liability. In step two, it pays the amount agreed: Dr Income tax liability, Cr Cash at bank.

The estimate is rarely exact, so step three deals with what is left on the account. If it paid less than estimated, there is an overprovision and a credit balance left: Dr Income tax liability, Cr Income tax charge. If it paid more, there is an underprovision and a debit balance left: Dr Income tax charge, Cr Income tax liability. Over the two years the charge is correct.

The liability shown at the year end should only ever equal the estimate for the current year.`,
        ru: `У предпринимателя или партнёрства налог ложится на физическое лицо. Если этот личный налог платится с банковского счёта бизнеса, это изъятия.

Компания с ограниченной ответственностью — отдельное юрлицо, поэтому налог на её доход — расход бизнеса. Он показывается расходом в отчёте о прибыли или убытке, а неоплаченное — обязательством в отчёте о финансовом положении. Его обычно называют налогом на прибыль.

Конец года компании редко совпадает с налоговым, поэтому компания оценивает обязательство в конце каждого периода. На шаге один она записывает оценку: Дт Расход по налогу, Кт Обязательство по налогу. На шаге два платит согласованную сумму: Дт Обязательство по налогу, Кт Банк.

Оценка редко точна, поэтому шаг три закрывает остаток на счёте. Если заплачено меньше оценки, это переначисление, и остаётся кредитовый остаток: Дт Обязательство по налогу, Кт Расход по налогу. Если заплачено больше, это недоначисление, и остаётся дебетовый остаток: Дт Расход по налогу, Кт Обязательство по налогу. За два года расход оказывается верным.

Обязательство на конец года должно равняться только оценке за текущий год.`,
        uz: `Yakka tadbirkor yoki sheriklikda soliq shaxsga tushadi. Bu shaxsiy soliq biznes bank hisobidan to'lansa, olib qo'yish hisoblanadi.

Mas'uliyati cheklangan kompaniya alohida yuridik shaxs, shuning uchun daromadiga soliq biznes xarajati. U foyda yoki zarar hisobotida xarajat, to'lanmagani esa moliyaviy holat hisobotida majburiyat. Uni odatda foyda solig'i deyishadi.

Kompaniya yili soliq yili bilan kamdan-kam mos keladi, shuning uchun kompaniya har davr oxirida majburiyatni baholaydi. Birinchi qadamda bahoni yozadi: Dt Foyda solig'i xarajati, Kt Foyda solig'i majburiyati. Ikkinchi qadamda kelishilgan summani to'laydi: Dt Foyda solig'i majburiyati, Kt Bank.

Baho kamdan-kam aniq, shuning uchun uchinchi qadam hisobdagi qoldiqni hal qiladi. Bahodan kam to'langan bo'lsa, ko'p hisoblangan, kredit qoldiq qoladi: Dt Foyda solig'i majburiyati, Kt Foyda solig'i xarajati. Ko'p to'langan bo'lsa, kam hisoblangan, debet qoldiq qoladi: Dt Foyda solig'i xarajati, Kt Foyda solig'i majburiyati. Ikki yil ichida xarajat to'g'ri bo'ladi.

Yil oxiridagi majburiyat faqat joriy yil bahosiga teng bo'lishi kerak.`,
      },
      example: {
        en: `Madina's Mart LLC estimates tax of $18,000 for its first year: Dr Tax charge $18,000, Cr Tax liability $18,000. It later pays $16,500, leaving a $1,500 credit, an overprovision. In year two it estimates $21,000. The tax charge in profit or loss is $21,000 - $1,500 = $19,500. The liability in the statement of financial position is $21,000.`,
        ru: `Madina's Mart LLC оценивает налог первого года в $18,000: Дт Расход по налогу $18,000, Кт Обязательство $18,000. Позже она платит $16,500, остаётся кредит $1,500, то есть переначисление. На второй год оценка $21,000. Расход в прибыли или убытке: $21,000 - $1,500 = $19,500. Обязательство в отчёте о финансовом положении $21,000.`,
        uz: `Madina's Mart LLC birinchi yil solig'ini $18,000 deb baholaydi: Dt Soliq xarajati $18,000, Kt Soliq majburiyati $18,000. Keyin $16,500 to'laydi, $1,500 kredit qoladi, ya'ni ko'p hisoblangan. Ikkinchi yili baho $21,000. Foyda yoki zarardagi soliq xarajati: $21,000 - $1,500 = $19,500. Moliyaviy holat hisobotidagi majburiyat $21,000.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Ordinary shares', ru: 'Обыкновенные акции', uz: 'Oddiy aksiyalar' }, definition: { en: 'Shares giving ownership of the company and a residual interest in it.', ru: 'Акции, дающие право собственности на компанию и долю в остатке.', uz: 'Kompaniyaga egalik va qoldiqqa ulush beradigan aksiyalar.' } },
    { term: { en: 'Preference shares', ru: 'Привилегированные акции', uz: 'Imtiyozli aksiyalar' }, definition: { en: 'Shares with a usually fixed dividend. Redeemable ones are liabilities, irredeemable ones are equity.', ru: 'Акции с обычно фиксированным дивидендом. Погашаемые — обязательство, непогашаемые — капитал.', uz: 'Odatda qat\'iy dividendli aksiyalar. Qaytariladigani majburiyat, qaytarilmaydigani kapital.' } },
    { term: { en: 'Loan notes', ru: 'Долговые ноты', uz: 'Qarz notalari' }, definition: { en: 'Fixed-term loans to a company, evidenced by a document.', ru: 'Срочные займы компании, подтверждённые документом.', uz: 'Hujjat bilan tasdiqlangan kompaniyaga muddatli qarzlar.' } },
    { term: { en: 'Nominal value', ru: 'Номинальная стоимость', uz: 'Nominal qiymat' }, definition: { en: 'The fixed value assigned to a share. Also called par value.', ru: 'Фиксированная стоимость, присвоенная акции.', uz: 'Aksiyaga berilgan qat\'iy qiymat.' } },
    { term: { en: 'Share premium', ru: 'Эмиссионный доход', uz: 'Emissiya daromadi' }, definition: { en: 'The amount received for a share above its nominal value.', ru: 'Сумма, полученная за акцию сверх номинала.', uz: 'Aksiya uchun nominaldan ortiq olingan summa.' } },
    { term: { en: 'Rights issue', ru: 'Выпуск прав', uz: 'Huquqli chiqarish' }, definition: { en: 'New shares offered to existing shareholders in proportion, for cash, normally below market value.', ru: 'Новые акции существующим акционерам пропорционально, за деньги, обычно ниже рынка.', uz: 'Mavjud aksiyadorlarga mutanosib, pulga, odatda bozordan past yangi aksiyalar.' } },
    { term: { en: 'Bonus issue', ru: 'Бонусный выпуск', uz: 'Bonusli chiqarish' }, definition: { en: 'Free new shares to existing shareholders in proportion, funded from reserves.', ru: 'Бесплатные новые акции существующим акционерам пропорционально, из резервов.', uz: 'Mavjud aksiyadorlarga mutanosib, rezervlardan bepul yangi aksiyalar.' } },
    { term: { en: 'Dividend', ru: 'Дивиденд', uz: 'Dividend' }, definition: { en: 'A distribution of profit to shareholders.', ru: 'Распределение прибыли акционерам.', uz: 'Foydani aksiyadorlarga taqsimlash.' } },
    { term: { en: 'Reserves', ru: 'Резервы', uz: 'Rezervlar' }, definition: { en: 'Components of equity other than share capital, such as retained earnings.', ru: 'Компоненты капитала, кроме акционерного, например нераспределённая прибыль.', uz: 'Aksiya kapitalidan boshqa kapital qismlari, masalan taqsimlanmagan foyda.' } },
    { term: { en: 'Overprovision', ru: 'Переначисление', uz: 'Ko\'p hisoblangan summa' }, definition: { en: 'When the tax estimate was higher than the amount paid.', ru: 'Когда оценка налога выше уплаченной суммы.', uz: 'Soliq bahosi to\'langan summadan yuqori bo\'lganda.' } },
    { term: { en: 'Underprovision', ru: 'Недоначисление', uz: 'Kam hisoblangan summa' }, definition: { en: 'When the tax estimate was lower than the amount paid.', ru: 'Когда оценка налога ниже уплаченной суммы.', uz: 'Soliq bahosi to\'langan summadan past bo\'lganda.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter12;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter12.id] = chapter12;
