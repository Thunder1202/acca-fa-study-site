'use strict';

const chapter12 = {
  id: 'chapter-12',
  titles: {
    en: 'Capital structure and finance costs',
    ru: 'Структура капитала и финансовые расходы',
    uz: 'Kapital tuzilmasi va moliyaviy xarajatlar',
  },
  objectives: [
    {
      en: 'Understand how a limited liability company is financed',
      ru: 'Понимать, как финансируется компания с ограниченной ответственностью',
      uz: 'Mas\'uliyati cheklangan kompaniya qanday moliyalashtirilishini tushunish',
    },
    {
      en: 'Record share issues, share capital and share premium',
      ru: 'Отражать выпуск акций, акционерный капитал и эмиссионный доход',
      uz: 'Aksiya chiqarish, aksiya kapitali va emissiya daromadini qayd etish',
    },
    {
      en: 'Define and record rights issues and bonus issues',
      ru: 'Определять и отражать выпуск прав и бонусный выпуск',
      uz: 'Huquqli va bonusli chiqarishlarni aniqlash va qayd etish',
    },
    {
      en: 'Record dividends, loan note interest and reserves',
      ru: 'Отражать дивиденды, проценты по долговым нотам и резервы',
      uz: 'Dividendlar, qarz notasi foizi va rezervlarni qayd etish',
    },
    {
      en: 'Record income tax in the ledger',
      ru: 'Отражать налог на прибыль в учёте',
      uz: 'Foyda solig\'ini hisobda qayd etish',
    },
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
        en: `A new company raises money three ways. Ask for each: must it be paid back?
- Ordinary shares: no promise to repay, dividends only if the directors choose. EQUITY.
- 8% loan notes repayable in 10 years: must be repaid, interest every year. A LIABILITY; the interest is a finance cost.
- 6% redeemable preference shares repayable in 5 years: must be repaid. A LIABILITY, even though they are called shares; the 6% goes to finance costs.`,
        ru: `Новая компания привлекает деньги тремя способами. Спросите о каждом: нужно ли возвращать?
- Обыкновенные акции: возвращать не обещают, дивиденды — по решению директоров. КАПИТАЛ.
- Долговые ноты под 8% на 10 лет: вернуть обязаны, проценты каждый год. ОБЯЗАТЕЛЬСТВО; проценты — финансовые расходы.
- Погашаемые привилегированные акции под 6% на 5 лет: вернуть обязаны. ОБЯЗАТЕЛЬСТВО, хоть и называются акциями; 6% идут в финансовые расходы.`,
        uz: `Yangi kompaniya pulni uch yo'l bilan jalb qiladi. Har biri haqida so'rang: qaytarish kerakmi?
- Oddiy aksiyalar: qaytarish va'da qilinmaydi, dividend — direktorlar xohlasa. KAPITAL.
- 10 yilga 8% li qarz notalari: qaytarilishi shart, har yili foiz. MAJBURIYAT; foiz — moliyaviy xarajat.
- 5 yilga 6% li qaytariladigan imtiyozli aksiyalar: qaytarilishi shart. Aksiya deb atalsa ham MAJBURIYAT; 6% moliyaviy xarajatga boradi.`,
      },
      simple: {
        en: `A company raises money in two ways. Debt (loans) must be paid back, with interest. Equity (ordinary shares) never has to be paid back, and dividends are optional.

The test is: MUST the company pay it back? If yes, it is a liability, and its interest or dividend is a finance cost. That is why redeemable preference shares count as debt, even though they are called "shares", while irredeemable ones are equity.`,
        ru: `Компания привлекает деньги двумя способами. Долг (займы) нужно вернуть с процентами. Капитал (обыкновенные акции) возвращать не нужно, а дивиденды необязательны.

Проверка: ОБЯЗАНА ли компания вернуть деньги? Если да — это обязательство, а проценты или дивиденды — финансовые расходы. Поэтому погашаемые привилегированные акции — долг, хоть и называются «акциями», а непогашаемые — капитал.`,
        uz: `Kompaniya pulni ikki yo'l bilan jalb qiladi. Qarz (qarzlar) foiz bilan qaytarilishi kerak. Kapital (oddiy aksiyalar) hech qachon qaytarilmaydi, dividend esa ixtiyoriy.

Sinov: kompaniya pulni qaytarishi SHARTmi? Ha bo'lsa — majburiyat, foizi yoki dividendi — moliyaviy xarajat. Shuning uchun qaytariladigan imtiyozli aksiyalar «aksiya» deb atalsa ham qarz, qaytarilmaydiganlari esa kapital.`,
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
- Called-up capital is the nominal value paid plus amounts shareholders have agreed to pay. Paid-up capital is what has been paid so far.
- "At a premium of 40c" means 40c ABOVE nominal value. Issue price = nominal value + premium (a 25c share at a 40c premium is issued at 65c).
- If the whole issue price was credited to share capital, move the premium out: Dr Share capital, Cr Share premium.`,
        ru: `- Акционерный капитал у компании есть всегда. Эмиссионного дохода или резерва переоценки может и не быть.
- Эмиссионный доход возникает, только если акции выпущены выше номинала.
- Акционерный капитал = число акций x номинал. Никогда не берите цену выпуска.
- Истребованный капитал — оплаченный номинал плюс суммы, которые акционеры согласились внести. Оплаченный — то, что уже внесено.
- «С премией 40c» значит на 40c ВЫШЕ номинала. Цена выпуска = номинал + премия (акция 25c с премией 40c выпускается по 65c).
- Если вся цена выпуска ушла в уставный капитал, перенесите премию: Дт Уставный капитал, Кт Эмиссионный доход.`,
        uz: `- Kompaniyada doim aksiya kapitali bor. Emissiya daromadi yoki qayta baholash rezervi bo'lmasligi mumkin.
- Emissiya daromadi faqat aksiyalar nominaldan yuqori chiqarilganda paydo bo'ladi.
- Aksiya kapitali = aksiyalar soni x nominal. Hech qachon chiqarish narxini olmang.
- Chaqirilgan kapital — to'langan nominal plus aksiyadorlar to'lashga kelishgan summalar. To'langan kapital — hozirgacha to'langani.
- "40c mukofot bilan" nominaldan 40c YUQORI degani. Chiqarish narxi = nominal + mukofot (25c lik aksiya 40c mukofot bilan 65c ga chiqariladi).
- Agar butun chiqarish narxi ustav kapitaliga yozilgan bo'lsa, mukofotni ko'chiring: Dt Ustav kapitali, Kt Emissiya daromadi.`,
      },
      heading: { en: 'Issuing shares', ru: 'Выпуск акций', uz: 'Aksiya chiqarish' },
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
        en: `A company sells 100,000 $1 shares at $1.50 each.
# Step 1: Cash received
  100,000 × $1.50 = $150,000
# Step 2: Share capital (nominal value only)
  100,000 × $1 = $100,000
# Step 3: Share premium (the extra)
  100,000 × $0.50 = $50,000
= Dr Bank $150,000, Cr Share capital $100,000, Cr Share premium $50,000`,
        ru: `Компания продаёт 100,000 акций номиналом $1 по $1.50.
# Шаг 1: Получено денег
  100,000 × $1.50 = $150,000
# Шаг 2: Акционерный капитал (только номинал)
  100,000 × $1 = $100,000
# Шаг 3: Эмиссионный доход (превышение)
  100,000 × $0.50 = $50,000
= Дт Банк $150,000, Кт Акционерный капитал $100,000, Кт Эмиссионный доход $50,000`,
        uz: `Kompaniya $1 nominalli 100,000 aksiyani $1.50 dan sotadi.
# 1-qadam: Olingan pul
  100,000 × $1.50 = $150,000
# 2-qadam: Aksiya kapitali (faqat nominal)
  100,000 × $1 = $100,000
# 3-qadam: Emissiya daromadi (ortiqcha)
  100,000 × $0.50 = $50,000
= Dt Bank $150,000, Kt Aksiya kapitali $100,000, Kt Emissiya daromadi $50,000`,
      },
      simple: {
        en: `Every share has a fixed "label" value called its nominal (par) value, for example $1. Companies usually sell new shares for more than that.

Share capital always records only the nominal value. Anything paid above it goes to share premium. Both are part of equity. The share's market value on the stock market never appears in the accounts.`,
        ru: `У каждой акции есть фиксированная «этикеточная» стоимость — номинал, например $1. Новые акции обычно продают дороже.

В акционерный капитал всегда записывают только номинал. Всё, что заплачено сверх него, идёт в эмиссионный доход. Оба — часть капитала. Рыночная цена акции на бирже в отчётности не появляется.`,
        uz: `Har bir aksiyaning nominal deb ataluvchi qat'iy «yorliq» qiymati bor, masalan $1. Kompaniyalar yangi aksiyalarni odatda qimmatroq sotadi.

Aksiya kapitaliga doim faqat nominal yoziladi. Undan ortiq to'langani emissiya daromadiga boradi. Ikkalasi ham kapital qismi. Aksiyaning birjadagi bozor narxi hisobotda ko'rinmaydi.`,
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
- A bonus issue can be made from retained earnings, which then reduces retained earnings.
- A rights issue raises assets (cash), share capital and usually share premium. It never lowers retained earnings or share premium, and it is not an investment.`,
        ru: `- Капитализация резервов — это бонусный выпуск, а не выпуск прав.
- Выпуск прав обычно идёт со скидкой к рыночной цене, а не к номиналу.
- Выпуск прав приносит деньги и попадает в отчёт о движении денег. Бонусный — нет.
- Бонусный выпуск 1 за 4 на 250,000 акций по 50c создаёт 62,500 акций на $31,250 по номиналу.
- Если выпуски идут один за другим, считайте по датам. Бонус рассчитывается от акций на тот момент.
- Бонусный выпуск можно сделать из нераспределённой прибыли, и она тогда уменьшается.
- Выпуск прав увеличивает активы (деньги), уставный капитал и обычно эмиссионный доход. Он никогда не уменьшает нераспределённую прибыль или эмиссионный доход и не является инвестицией.`,
        uz: `- Rezervlarni kapitallashtirish bonusli chiqarish, huquqli emas.
- Huquqli chiqarish odatda bozor narxidan chegirma bilan, nominaldan emas.
- Huquqli chiqarish pul olib keladi va pul oqimlari hisobotida ko'rinadi. Bonusli yo'q.
- 250,000 ta 50c aksiyaga 1 ga 4 bonus 62,500 aksiya, nominalda $31,250.
- Chiqarishlar ketma-ket bo'lsa, sana tartibida ishlang. Bonus o'sha paytdagi aksiyalardan hisoblanadi.
- Bonusli chiqarish taqsimlanmagan foydadan ham bo'lishi mumkin, u holda foyda kamayadi.
- Huquqlar emissiyasi aktivlarni (pul), ustav kapitalini va odatda emissiya daromadini oshiradi. U hech qachon taqsimlanmagan foyda yoki emissiya daromadini kamaytirmaydi va investitsiya emas.`,
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
        en: `The company has 100,000 $1 shares and $50,000 of share premium.
# Rights issue: 1 new share for every 5 held, at $1.20
  New shares: 100,000 / 5 = 20,000. Cash: 20,000 × $1.20 = $24,000
  Dr Bank $24,000, Cr Share capital $20,000, Cr Share premium $4,000
  Now: capital $120,000, premium $54,000
# Bonus issue: 1 free share for every 10 held
  New shares: 120,000 / 10 = 12,000 × $1 = $12,000
  Dr Share premium $12,000, Cr Share capital $12,000
  Now: capital $132,000, premium $42,000
= The bonus issue moved $12,000 inside equity; total equity did not change and no cash moved.`,
        ru: `У компании 100,000 акций по $1 и эмиссионный доход $50,000.
# Выпуск прав: 1 новая акция на каждые 5, по $1.20
  Новых акций: 100,000 / 5 = 20,000. Деньги: 20,000 × $1.20 = $24,000
  Дт Банк $24,000, Кт Акционерный капитал $20,000, Кт Эмиссионный доход $4,000
  Теперь: капитал $120,000, эмиссионный доход $54,000
# Бонусный выпуск: 1 бесплатная акция на каждые 10
  Новых акций: 120,000 / 10 = 12,000 × $1 = $12,000
  Дт Эмиссионный доход $12,000, Кт Акционерный капитал $12,000
  Теперь: капитал $132,000, эмиссионный доход $42,000
= Бонусный выпуск перенёс $12,000 внутри капитала; общий капитал не изменился, денег не было.`,
        uz: `Kompaniyada $1 lik 100,000 aksiya va $50,000 emissiya daromadi bor.
# Huquqli chiqarish: har 5 taga 1 ta yangi, $1.20 dan
  Yangi aksiyalar: 100,000 / 5 = 20,000. Pul: 20,000 × $1.20 = $24,000
  Dt Bank $24,000, Kt Aksiya kapitali $20,000, Kt Emissiya daromadi $4,000
  Endi: kapital $120,000, emissiya daromadi $54,000
# Bonusli chiqarish: har 10 taga 1 ta bepul
  Yangi aksiyalar: 120,000 / 10 = 12,000 × $1 = $12,000
  Dt Emissiya daromadi $12,000, Kt Aksiya kapitali $12,000
  Endi: kapital $132,000, emissiya daromadi $42,000
= Bonusli chiqarish kapital ichida $12,000 ni ko'chirdi; jami kapital o'zgarmadi, pul harakatlanmadi.`,
      },
      simple: {
        en: `A rights issue: existing shareholders are offered new shares, in proportion to what they own, for CASH, usually at a price below the market price. It is recorded like any share issue.

A bonus issue: existing shareholders get FREE new shares in proportion. No cash comes in, so the new shares are "paid for" by moving money from a reserve (share premium first) into share capital. Total equity does not change.`,
        ru: `Выпуск прав: акционерам предлагают новые акции пропорционально их доле за ДЕНЬГИ, обычно ниже рыночной цены. Записывается как любой выпуск акций.

Бонусный выпуск: акционеры получают БЕСПЛАТНЫЕ новые акции пропорционально. Денег нет, поэтому новые акции «оплачивают» переносом суммы из резерва (сначала эмиссионного дохода) в акционерный капитал. Общий капитал не меняется.`,
        uz: `Huquqli chiqarish: mavjud aksiyadorlarga ulushiga mutanosib ravishda yangi aksiyalar PULGA, odatda bozor narxidan arzonroq taklif qilinadi. Oddiy aksiya chiqarish kabi yoziladi.

Bonusli chiqarish: aksiyadorlar mutanosib ravishda BEPUL yangi aksiyalar oladi. Pul kelmaydi, shuning uchun yangi aksiyalar rezervdan (avval emissiya daromadidan) aksiya kapitaliga summa o'tkazib «to'lanadi». Jami kapital o'zgarmaydi.`,
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
- Number of shares = share capital / nominal value. A $200,000 capital of 50c shares is 400,000 shares.
- Dividends in the statement of changes in equity = ordinary (and irredeemable preference) dividends PAID in the year. Redeemable preference dividends are finance costs, and proposed dividends are left out.
- Finding profit from retained earnings: profit = closing - opening + ordinary dividends + bonus issue from retained earnings. Redeemable preference dividends are already inside profit, so do not add them.`,
        ru: `- Выплаченные дивиденды — в отчёте об изменениях капитала. Полученные — доход в прибыли или убытке, поэтому не там.
- Нераспределённая прибыль: на начало + прибыль за год - выплаченные дивиденды - бонусный выпуск из неё = на конец.
- Прирост от переоценки её не затрагивает. Он идёт в прочий совокупный доход и резерв переоценки.
- Общий совокупный доход = прибыль или убыток + прочий совокупный доход. Дивиденды не вычитаются.
- Выпуск прав не влияет на нераспределённую прибыль.
- Итоговый дивиденд прошлого года, утверждённый и выплаченный в этом, вычитается в этом году. Неутверждённое предложение этого года — нет.
- Число акций = акционерный капитал / номинал. Капитал $200,000 из акций по 50c — 400,000 акций.
- Дивиденды в отчёте об изменениях капитала = ВЫПЛАЧЕННЫЕ за год обыкновенные (и бессрочные привилегированные) дивиденды. Дивиденды по погашаемым привилегированным — финансовые расходы, а предложенные дивиденды не включают.
- Найти прибыль по нераспределённой прибыли: прибыль = на конец - на начало + обыкновенные дивиденды + бонусный выпуск из нераспределённой прибыли. Дивиденды по погашаемым привилегированным уже внутри прибыли, их не прибавляют.`,
        uz: `- To'langan dividendlar kapitaldagi o'zgarishlar hisobotida. Olingan dividendlar foyda yoki zarardagi daromad, u yerda emas.
- Taqsimlanmagan foyda: boshlang'ich + yil foydasi - to'langan dividendlar - undan bonusli chiqarish = yakuniy.
- Qayta baholash foydasi unga tegmaydi. U boshqa umumlashgan daromad va qayta baholash rezerviga o'tadi.
- Jami umumlashgan daromad = foyda yoki zarar + boshqa umumlashgan daromad. Dividendlar ayirilmaydi.
- Huquqli chiqarish taqsimlanmagan foydaga ta'sir qilmaydi.
- O'tgan yilning shu yil tasdiqlanib to'langan yakuniy dividendi shu yil ayiriladi. Shu yilning tasdiqlanmagan taklifi yo'q.
- Aksiyalar soni = aksiya kapitali / nominal. 50c lik $200,000 kapital 400,000 aksiya.
- Kapitaldagi o'zgarishlar hisobotidagi dividendlar = yil davomida TO'LANGAN oddiy (va muddatsiz imtiyozli) dividendlar. Qaytariladigan imtiyozli aksiya dividendlari moliyaviy xarajat, taklif qilingan dividendlar kiritilmaydi.
- Taqsimlanmagan foydadan foydani topish: foyda = oxirgi - boshlang'ich + oddiy dividendlar + taqsimlanmagan foydadan bonus emissiya. Qaytariladigan imtiyozli dividendlar foydaning ichida, ularni qo'shmang.`,
      },
      heading: { en: 'Dividends and reserves', ru: 'Дивиденды и резервы', uz: 'Dividendlar va rezervlar' },
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
        en: `The company has 132,000 shares, opening retained earnings of $30,000 and profit for the year of $45,000.
# Step 1: Interim dividend paid during the year
  132,000 × 10c = $13,200: Dr Retained earnings, Cr Bank
# Step 2: Final dividend proposed at the year end ($20,000)
  Not yet approved by shareholders, so it is NOT recorded
# Step 3: Closing retained earnings
  $30,000 + $45,000 - $13,200 = $61,800
# What if land was also revalued up by $20,000?
  Total comprehensive income = $45,000 + $20,000 = $65,000, but retained earnings stay $61,800 (the $20,000 goes to the revaluation surplus)`,
        ru: `У компании 132,000 акций, нераспределённая прибыль на начало $30,000 и прибыль за год $45,000.
# Шаг 1: Промежуточный дивиденд, выплаченный за год
  132,000 × 10 центов = $13,200: Дт Нераспределённая прибыль, Кт Банк
# Шаг 2: Предложенный на конец года итоговый дивиденд ($20,000)
  Акционеры ещё не одобрили, поэтому его НЕ записывают
# Шаг 3: Нераспределённая прибыль на конец
  $30,000 + $45,000 - $13,200 = $61,800
# А если землю ещё и переоценили на +$20,000?
  Общий совокупный доход = $45,000 + $20,000 = $65,000, но нераспределённая прибыль остаётся $61,800 ($20,000 идут в резерв переоценки)`,
        uz: `Kompaniyada 132,000 aksiya, boshlang'ich taqsimlanmagan foyda $30,000 va yil foydasi $45,000.
# 1-qadam: Yil davomida to'langan oraliq dividend
  132,000 × 10 sent = $13,200: Dt Taqsimlanmagan foyda, Kt Bank
# 2-qadam: Yil oxirida taklif qilingan yakuniy dividend ($20,000)
  Aksiyadorlar hali tasdiqlamagan, shuning uchun YOZILMAYDI
# 3-qadam: Yakuniy taqsimlanmagan foyda
  $30,000 + $45,000 - $13,200 = $61,800
# Agar yer ham $20,000 ga qayta baholansa-chi?
  Jami umumlashgan daromad = $45,000 + $20,000 = $65,000, lekin taqsimlanmagan foyda $61,800 qoladi ($20,000 qayta baholash rezerviga boradi)`,
      },
      simple: {
        en: `A dividend is a share of the profit paid to shareholders. It is NOT an expense, so it never goes through profit or loss: it comes out of retained earnings and is shown in the statement of changes in equity.

A dividend only becomes a debt once shareholders approve it. So a dividend merely proposed at the year end is not recorded yet. Reserves are the parts of equity apart from share capital: retained earnings, share premium and revaluation surplus.`,
        ru: `Дивиденд — доля прибыли, выплачиваемая акционерам. Это НЕ расход, поэтому через прибыль или убыток он не проходит: он уменьшает нераспределённую прибыль и показывается в отчёте об изменениях в капитале.

Дивиденд становится долгом только после одобрения акционерами. Поэтому лишь предложенный на конец года дивиденд пока не записывают. Резервы — части капитала, кроме акционерного: нераспределённая прибыль, эмиссионный доход и резерв переоценки.`,
        uz: `Dividend — aksiyadorlarga to'lanadigan foyda ulushi. U xarajat EMAS, shuning uchun foyda yoki zarar orqali o'tmaydi: u taqsimlanmagan foydadan chiqadi va kapitaldagi o'zgarishlar hisobotida ko'rsatiladi.

Dividend aksiyadorlar tasdiqlagandan keyingina qarzga aylanadi. Shuning uchun yil oxirida faqat taklif qilingan dividend hali yozilmaydi. Rezervlar — aksiya kapitalidan boshqa kapital qismlari: taqsimlanmagan foyda, emissiya daromadi va qayta baholash rezervi.`,
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
        en: `On 1 April a company borrows $50,000 with 8% loan notes. Interest is paid every 30 September and 31 March. Its year ends on 31 December.
# Step 1: Interest for a full year
  $50,000 × 8% = $4,000
# Step 2: This year's charge (April to December = 9 months)
  $4,000 × 9/12 = $3,000
# Step 3: Paid on 30 September (April to September)
  $4,000 × 6/12 = $2,000: Dr Finance costs, Cr Bank
# Step 4: October to December, unpaid at the year end
  $3,000 - $2,000 = $1,000: Dr Finance costs, Cr Interest accrual
= The $50,000 is a non-current liability; the $1,000 accrual is current.`,
        ru: `1 апреля компания занимает $50,000 под 8% долговыми нотами. Проценты платят 30 сентября и 31 марта. Год заканчивается 31 декабря.
# Шаг 1: Проценты за полный год
  $50,000 × 8% = $4,000
# Шаг 2: Расход этого года (апрель-декабрь = 9 месяцев)
  $4,000 × 9/12 = $3,000
# Шаг 3: Оплачено 30 сентября (апрель-сентябрь)
  $4,000 × 6/12 = $2,000: Дт Финансовые расходы, Кт Банк
# Шаг 4: Октябрь-декабрь, не оплачено на конец года
  $3,000 - $2,000 = $1,000: Дт Финансовые расходы, Кт Начисленные проценты
= $50,000 — долгосрочное обязательство; начисление $1,000 — краткосрочное.`,
        uz: `1 aprelda kompaniya 8% li qarz notalari bilan $50,000 qarz oladi. Foiz 30 sentyabr va 31 martda to'lanadi. Yili 31 dekabrda tugaydi.
# 1-qadam: To'liq yil foizi
  $50,000 × 8% = $4,000
# 2-qadam: Bu yil xarajati (aprel-dekabr = 9 oy)
  $4,000 × 9/12 = $3,000
# 3-qadam: 30 sentyabrda to'langan (aprel-sentyabr)
  $4,000 × 6/12 = $2,000: Dt Moliyaviy xarajatlar, Kt Bank
# 4-qadam: Oktyabr-dekabr, yil oxirida to'lanmagan
  $3,000 - $2,000 = $1,000: Dt Moliyaviy xarajatlar, Kt Hisoblangan foiz
= $50,000 — uzoq muddatli majburiyat; $1,000 hisoblangan — qisqa muddatli.`,
      },
      simple: {
        en: `Loan notes are fixed-term loans to the company. The money received is a non-current liability until it is due within a year.

Interest is worked out on the nominal value, for the months the loan existed during the year, and is a finance cost. Interest for months not yet paid at the year end is accrued.`,
        ru: `Долговые ноты — займы компании на фиксированный срок. Полученные деньги — долгосрочное обязательство, пока срок погашения не наступит в течение года.

Проценты считают от номинала за месяцы, когда заём существовал в течение года, это финансовые расходы. Проценты за месяцы, ещё не оплаченные на конец года, начисляют.`,
        uz: `Qarz notalari — kompaniyaga qat'iy muddatli qarzlar. Olingan pul to'lov muddati bir yil ichida kelmaguncha uzoq muddatli majburiyat.

Foiz nominaldan, yil davomida qarz mavjud bo'lgan oylar uchun hisoblanadi va moliyaviy xarajat bo'ladi. Yil oxirida hali to'lanmagan oylar foizi hisoblanadi (accrual).`,
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
      heading: { en: 'Income tax', ru: 'Налог на прибыль', uz: 'Foyda solig\'i' },
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
        en: `A company's tax over two years.
# Year 1: the estimate
  Estimated tax $18,000: Dr Tax charge $18,000, Cr Tax liability $18,000
# Year 2: the real bill for year 1
  Only $16,500 is paid. $1,500 is left over: the estimate was too high (an overprovision)
# Year 2: the new estimate
  This year's tax is estimated at $21,000
# Year 2 figures
  Tax charge in profit or loss: $21,000 - $1,500 overprovision = $19,500
  Liability in the statement of financial position: $21,000 (this year's estimate only)`,
        ru: `Налог компании за два года.
# Год 1: оценка
  Оценка налога $18,000: Дт Расход по налогу $18,000, Кт Обязательство по налогу $18,000
# Год 2: реальная сумма за год 1
  Заплатили только $16,500. Осталось $1,500: оценка была завышена (переначисление)
# Год 2: новая оценка
  Налог этого года оценён в $21,000
# Цифры года 2
  Расход по налогу в прибыли или убытке: $21,000 - $1,500 переначисления = $19,500
  Обязательство в отчёте о финансовом положении: $21,000 (только оценка этого года)`,
        uz: `Kompaniyaning ikki yillik solig'i.
# 1-yil: baho
  Baholangan soliq $18,000: Dt Soliq xarajati $18,000, Kt Soliq majburiyati $18,000
# 2-yil: 1-yil uchun haqiqiy summa
  Faqat $16,500 to'landi. $1,500 qoldi: baho ko'p bo'lgan (ortiqcha hisoblangan)
# 2-yil: yangi baho
  Shu yil solig'i $21,000 deb baholanadi
# 2-yil raqamlari
  Foyda yoki zarardagi soliq xarajati: $21,000 - $1,500 ortiqcha = $19,500
  Moliyaviy holat hisobotidagi majburiyat: $21,000 (faqat shu yil bahosi)`,
      },
      simple: {
        en: `A company pays tax on its own profit, so the tax is a business expense and, if unpaid, a liability. (A sole trader's tax is personal, so paying it from the business is drawings.)

At the year end the company only ESTIMATES its tax. When the real bill is settled the next year, any difference is fixed then: if last year's estimate was too high (overprovision), this year's tax charge goes down; if too low (underprovision), it goes up. The liability shown is just this year's estimate.`,
        ru: `Компания платит налог со своей прибыли, поэтому налог — расход бизнеса, а неоплаченный — обязательство. (Налог индивидуального предпринимателя — личный, его оплата из бизнеса — изъятие.)

На конец года компания лишь ОЦЕНИВАЕТ налог. Когда в следующем году платят реальную сумму, разницу исправляют тогда: если прошлогодняя оценка была завышена (переначисление), налог этого года уменьшают; если занижена (недоначисление) — увеличивают. Обязательство показывают только в сумме оценки этого года.`,
        uz: `Kompaniya o'z foydasidan soliq to'laydi, shuning uchun soliq biznes xarajati, to'lanmagani esa majburiyat. (Yakka tadbirkor solig'i shaxsiy, uni biznesdan to'lash — olib qo'yish.)

Yil oxirida kompaniya soliqni faqat BAHOLAYDI. Kelasi yil haqiqiy summa to'langanda farq o'shanda tuzatiladi: o'tgan yil bahosi ko'p bo'lsa (ortiqcha hisoblangan), bu yil soliq xarajati kamayadi; kam bo'lsa (kam hisoblangan) — oshadi. Majburiyat faqat shu yil bahosi miqdorida ko'rsatiladi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Ordinary shares', ru: 'Обыкновенные акции', uz: 'Oddiy aksiyalar' },
      definition: {
        en: 'Shares giving ownership of the company and a residual interest in it.',
        ru: 'Акции, дающие право собственности на компанию и долю в остатке.',
        uz: 'Kompaniyaga egalik va qoldiqqa ulush beradigan aksiyalar.',
      },
      example: {
        en: 'You buy 1,000 ordinary shares and own a small part of the company, with a vote and a share of any dividends.',
        ru: 'Вы покупаете 1,000 обыкновенных акций и владеете частью компании, с голосом и долей в дивидендах.',
        uz: '1,000 oddiy aksiya olib, kompaniyaning kichik qismiga, ovoz va dividend ulushiga egalik qilasiz.',
      },
    },
    {
      term: { en: 'Preference shares', ru: 'Привилегированные акции', uz: 'Imtiyozli aksiyalar' },
      definition: {
        en: 'Shares with a usually fixed dividend. Redeemable ones are liabilities, irredeemable ones are equity.',
        ru: 'Акции с обычно фиксированным дивидендом. Погашаемые — обязательство, непогашаемые — капитал.',
        uz: 'Odatda qat\'iy dividendli aksiyalar. Qaytariladigani majburiyat, qaytarilmaydigani kapital.',
      },
      example: {
        en: '6% preference shares of $1 receive 6c a year each before ordinary shareholders get anything.',
        ru: 'Привилегированные акции 6% по $1 получают по 6 центов в год до выплат по обыкновенным.',
        uz: '$1 lik 6% imtiyozli aksiyalar oddiy aksiyadorlardan oldin har biri yiliga 6 sent oladi.',
      },
    },
    {
      term: { en: 'Loan notes', ru: 'Долговые ноты', uz: 'Qarz notalari' },
      definition: {
        en: 'Fixed-term loans to a company, evidenced by a document.',
        ru: 'Срочные займы компании, подтверждённые документом.',
        uz: 'Hujjat bilan tasdiqlangan kompaniyaga muddatli qarzlar.',
      },
      example: {
        en: '$50,000 of 8% loan notes: $4,000 of interest a year, repaid in 10 years.',
        ru: 'Долговые ноты на $50,000 под 8%: $4,000 процентов в год, погашение через 10 лет.',
        uz: '8% li $50,000 qarz notalari: yiliga $4,000 foiz, 10 yilda qaytariladi.',
      },
    },
    {
      term: { en: 'Finance costs', ru: 'Финансовые расходы', uz: 'Moliyaviy xarajatlar' },
      definition: {
        en: 'The cost of borrowing: interest on loans and dividends on redeemable preference shares.',
        ru: 'Стоимость заимствований: проценты по займам и дивиденды по погашаемым привилегированным акциям.',
        uz: 'Qarz olish narxi: qarzlar foizi va qaytariladigan imtiyozli aksiyalar dividendlari.',
      },
      example: {
        en: '$4,000 a year of interest on $50,000 of 8% loan notes.',
        ru: '$4,000 процентов в год по долговым нотам $50,000 под 8%.',
        uz: '8% li $50,000 qarz notalari bo\'yicha yiliga $4,000 foiz.',
      },
    },
    {
      term: { en: 'Nominal value', ru: 'Номинальная стоимость', uz: 'Nominal qiymat' },
      definition: {
        en: 'The fixed value assigned to a share. Also called par value.',
        ru: 'Фиксированная стоимость, присвоенная акции.',
        uz: 'Aksiyaga berilgan qat\'iy qiymat.',
      },
      example: {
        en: 'A share labelled $1, even if it trades on the stock market for $3.',
        ru: 'Акция с номиналом $1, даже если на бирже она стоит $3.',
        uz: 'Birjada $3 tursa ham, nominali $1 bo\'lgan aksiya.',
      },
    },
    {
      term: { en: 'Share premium', ru: 'Эмиссионный доход', uz: 'Emissiya daromadi' },
      definition: {
        en: 'The amount received for a share above its nominal value.',
        ru: 'Сумма, полученная за акцию сверх номинала.',
        uz: 'Aksiya uchun nominaldan ortiq olingan summa.',
      },
      example: {
        en: 'A $1 share sold for $1.50 creates $0.50 of share premium.',
        ru: 'Акция номиналом $1, проданная за $1.50, даёт $0.50 эмиссионного дохода.',
        uz: '$1 lik aksiya $1.50 ga sotilsa, $0.50 emissiya daromadi hosil bo\'ladi.',
      },
    },
    {
      term: { en: 'Rights issue', ru: 'Выпуск прав', uz: 'Huquqli chiqarish' },
      definition: {
        en: 'New shares offered to existing shareholders in proportion, for cash, normally below market value.',
        ru: 'Новые акции существующим акционерам пропорционально, за деньги, обычно ниже рынка.',
        uz: 'Mavjud aksiyadorlarga mutanosib, pulga, odatda bozordan past yangi aksiyalar.',
      },
      example: {
        en: '"Buy 1 new share for every 5 you own, at $1.20" when the market price is $1.60.',
        ru: '«Купите 1 новую акцию на каждые 5 по $1.20» при рыночной цене $1.60.',
        uz: 'Bozor narxi $1.60 bo\'lganda «har 5 taga 1 ta yangi aksiyani $1.20 dan oling».',
      },
    },
    {
      term: { en: 'Bonus issue', ru: 'Бонусный выпуск', uz: 'Bonusli chiqarish' },
      definition: {
        en: 'Free new shares to existing shareholders in proportion, funded from reserves.',
        ru: 'Бесплатные новые акции существующим акционерам пропорционально, из резервов.',
        uz: 'Mavjud aksiyadorlarga mutanosib, rezervlardan bepul yangi aksiyalar.',
      },
      example: {
        en: '"1 free share for every 10 you own": 1,000 shares become 1,100, and no cash moves.',
        ru: '«1 бесплатная акция на каждые 10»: 1,000 акций превращаются в 1,100, денег нет.',
        uz: '«Har 10 taga 1 ta bepul aksiya»: 1,000 aksiya 1,100 bo\'ladi, pul harakatlanmaydi.',
      },
    },
    {
      term: { en: 'Dividend', ru: 'Дивиденд', uz: 'Dividend' },
      definition: {
        en: 'A distribution of profit to shareholders.',
        ru: 'Распределение прибыли акционерам.',
        uz: 'Foydani aksiyadorlarga taqsimlash.',
      },
      example: {
        en: '10c per share on 132,000 shares = $13,200 paid to shareholders.',
        ru: '10 центов на акцию × 132,000 акций = $13,200 акционерам.',
        uz: '132,000 aksiyaga har biriga 10 sent = aksiyadorlarga $13,200.',
      },
    },
    {
      term: { en: 'Reserves', ru: 'Резервы', uz: 'Rezervlar' },
      definition: {
        en: 'Components of equity other than share capital, such as retained earnings.',
        ru: 'Компоненты капитала, кроме акционерного, например нераспределённая прибыль.',
        uz: 'Aksiya kapitalidan boshqa kapital qismlari, masalan taqsimlanmagan foyda.',
      },
      example: {
        en: 'Retained earnings $61,800 + share premium $42,000 + revaluation surplus $20,000.',
        ru: 'Нераспределённая прибыль $61,800 + эмиссионный доход $42,000 + резерв переоценки $20,000.',
        uz: 'Taqsimlanmagan foyda $61,800 + emissiya daromadi $42,000 + qayta baholash rezervi $20,000.',
      },
    },
    {
      term: { en: 'Income tax', ru: 'Налог на прибыль', uz: 'Foyda solig\'i' },
      definition: {
        en: 'Tax charged on a company\'s profit. It is an expense in profit or loss and, if unpaid, a current liability.',
        ru: 'Налог на прибыль компании. Расход в прибыли или убытке, а неоплаченный — краткосрочное обязательство.',
        uz: 'Kompaniya foydasiga soliq. Foyda yoki zarardagi xarajat, to\'lanmagani esa qisqa muddatli majburiyat.',
      },
      example: {
        en: 'Profit before tax $84,000, income tax $37,000, profit for the year $47,000.',
        ru: 'Прибыль до налога $84,000, налог $37,000, прибыль за год $47,000.',
        uz: 'Soliqdan oldingi foyda $84,000, soliq $37,000, yil foydasi $47,000.',
      },
    },
    {
      term: { en: 'Overprovision', ru: 'Переначисление', uz: 'Ko\'p hisoblangan summa' },
      definition: {
        en: 'When the tax estimate was higher than the amount paid.',
        ru: 'Когда оценка налога выше уплаченной суммы.',
        uz: 'Soliq bahosi to\'langan summadan yuqori bo\'lganda.',
      },
      example: {
        en: 'Tax estimated at $18,000 but only $16,500 paid: a $1,500 overprovision.',
        ru: 'Налог оценён в $18,000, а заплачено $16,500: переначисление $1,500.',
        uz: 'Soliq $18,000 deb baholangan, lekin $16,500 to\'langan: $1,500 ortiqcha hisoblangan.',
      },
    },
    {
      term: { en: 'Underprovision', ru: 'Недоначисление', uz: 'Kam hisoblangan summa' },
      definition: {
        en: 'When the tax estimate was lower than the amount paid.',
        ru: 'Когда оценка налога ниже уплаченной суммы.',
        uz: 'Soliq bahosi to\'langan summadan past bo\'lganda.',
      },
      example: {
        en: 'Tax estimated at $10,000 but $11,000 paid: a $1,000 underprovision, added to next year\'s charge.',
        ru: 'Налог оценён в $10,000, а заплачено $11,000: недоначисление $1,000, добавляется к расходу следующего года.',
        uz: 'Soliq $10,000 deb baholangan, $11,000 to\'langan: $1,000 kam hisoblangan, kelasi yil xarajatiga qo\'shiladi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter12;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter12.id] = chapter12;
