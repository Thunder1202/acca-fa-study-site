'use strict';

const chapter18 = {
  id: 'chapter-18',
  titles: {
    en: 'Interpretation of financial statements',
    ru: 'Анализ финансовой отчётности',
    uz: 'Moliyaviy hisobotni tahlil qilish',
  },
  objectives: [
    { en: 'Explain why financial statements are interpreted and who uses the results', ru: 'Объяснять, зачем анализируют отчётность и кто использует результаты', uz: 'Hisobot nega tahlil qilinishini va natijadan kim foydalanishini tushuntirish' },
    { en: 'Calculate and interpret profitability ratios', ru: 'Рассчитывать и толковать показатели рентабельности', uz: 'Rentabellik koeffitsientlarini hisoblash va izohlash' },
    { en: 'Calculate and interpret liquidity and efficiency ratios', ru: 'Рассчитывать и толковать показатели ликвидности и эффективности', uz: 'Likvidlik va samaradorlik koeffitsientlarini hisoblash va izohlash' },
    { en: 'Calculate and interpret gearing and interest cover', ru: 'Рассчитывать и толковать финансовый рычаг и покрытие процентов', uz: 'Moliyaviy leveraj va foizlarni qoplashni hisoblash va izohlash' },
    { en: 'Explain how ratios link together and draw valid conclusions', ru: 'Объяснять связь показателей и делать обоснованные выводы', uz: 'Koeffitsientlar bog\'liqligini tushuntirish va asosli xulosa chiqarish' },
  ],
  sections: [
    {
      key: {
        en: `- Figures alone say little. Compare them with last year, the budget, competitors and the industry.
- Ratios are a tool built from the same figures, so the raw numbers matter too.
- Investors want a good return and stability. Lenders and suppliers want to be paid.
- For each ratio ask: what it means, what a change means, what is normal, and its limits.
- Ratios fall into four groups: profitability, liquidity, efficiency and financial position.`,
        ru: `- Сами цифры мало говорят. Сравнивайте с прошлым годом, бюджетом, конкурентами и отраслью.
- Показатели — инструмент из тех же цифр, поэтому исходные суммы тоже важны.
- Инвесторам нужны доходность и стабильность. Кредиторам и поставщикам — оплата.
- Для каждого показателя: что он значит, что значит изменение, какова норма, каковы ограничения.
- Четыре группы: рентабельность, ликвидность, эффективность и финансовое положение.`,
        uz: `- Raqamlarning o'zi kam narsa aytadi. O'tgan yil, byudjet, raqobatchilar va soha bilan solishtiring.
- Koeffitsientlar o'sha raqamlardan tuzilgan vosita, shuning uchun asl summalar ham muhim.
- Investorlarga daromad va barqarorlik kerak. Kreditor va yetkazib beruvchilarga to'lov.
- Har biri uchun: nimani bildiradi, o'zgarish nimani bildiradi, me'yor qanday, cheklovlari nima.
- To'rt guruh: rentabellik, likvidlik, samaradorlik va moliyaviy holat.`,
      },
      exam: {
        en: `- Ratios help users focus on significant issues and show profitability, liquidity, efficiency and position.
- They are not only for comparing one year with the next. Competitor and industry figures help too.
- Ratios do not give all the information needed. Notes to the accounts and loan terms also matter.
- The choice of accounting policies, such as revaluing assets, changes ratios.
- A higher ratio is not always better. Higher gearing, for example, means more risk.
- Interest cover says nothing about whether a dividend will be paid.`,
        ru: `- Показатели помогают сосредоточиться на важном и показывают рентабельность, ликвидность, эффективность и положение.
- Они полезны не только для сравнения год к году. Данные конкурентов и отрасли тоже помогают.
- Показатели не дают всей нужной информации. Важны примечания к отчётности и условия займов.
- Выбор учётной политики, например переоценка активов, меняет показатели.
- Рост показателя не всегда хорош. Например, рост финансового рычага означает больший риск.
- Покрытие процентов ничего не говорит о том, будут ли выплачены дивиденды.`,
        uz: `- Koeffitsientlar muhim masalalarga e'tibor qaratishga yordam beradi va rentabellik, likvidlik, samaradorlik va holatni ko'rsatadi.
- Ular faqat yilma-yil solishtirish uchun emas. Raqobatchi va soha ma'lumotlari ham yordam beradi.
- Koeffitsientlar kerakli barcha ma'lumotni bermaydi. Hisobot izohlari va qarz shartlari ham muhim.
- Hisob siyosati tanlovi, masalan aktivlarni qayta baholash, koeffitsientlarni o'zgartiradi.
- Koeffitsient oshishi har doim yaxshi emas. Masalan, leveraj oshishi ko'proq xavf degani.
- Foizlarni qoplash dividend to'lanishi haqida hech narsa demaydi.`,
      },
      heading: {
        en: 'Why we interpret financial statements',
        ru: 'Зачем анализировать отчётность',
        uz: 'Hisobot nega tahlil qilinadi',
      },
      body: {
        en: `A profit before tax of $1 million tells you little on its own. If the business made $50 million last year and its main competitor made $60 million, the picture is very different. Interpretation means comparing figures with prior years, forecasts and competitors, so that users can draw valid conclusions.

Ratio analysis supports this. A ratio shows how two related figures move together. For example, cost of sales moves with sales activity, and so do wages, receivables and inventory. Ratios put these links in a simple form that can be compared. But they are calculated from the figures already in the statements, so the raw data is just as useful.

Different users want different things. Shareholders and potential investors care about the return on their investment, and also about stability and liquidity. Suppliers and lenders care about whether they will be paid. Others include financial institutions, employees, advisers and journalists.

For every ratio, ask four questions. What does it mean? What does a change in it mean? Is there a norm or benchmark? What are its limits? Ratios can be distorted by accounting policies, by year-end figures that are not typical, and by comparing businesses in different sectors.`,
        ru: `Прибыль до налога $1 млн сама по себе мало что говорит. Если в прошлом году бизнес заработал $50 млн, а главный конкурент — $60 млн, картина совсем другая. Анализ — это сравнение цифр с прошлыми годами, прогнозами и конкурентами, чтобы пользователи могли сделать обоснованные выводы.

Этому помогает анализ показателей. Показатель показывает, как связаны две суммы. Например, себестоимость меняется вместе с продажами, как и зарплата, дебиторы и запасы. Показатели дают эти связи в простой форме, удобной для сравнения. Но они считаются из тех же цифр отчётности, поэтому исходные данные не менее полезны.

Разным пользователям нужно разное. Акционерам и потенциальным инвесторам важна доходность вложений, а также стабильность и ликвидность. Поставщикам и кредиторам важно, получат ли они оплату. Среди других пользователей — финансовые учреждения, сотрудники, консультанты и журналисты.

Для каждого показателя задайте четыре вопроса. Что он значит? Что значит его изменение? Есть ли норма или ориентир? Каковы его ограничения? Показатели искажаются учётной политикой, нетипичными цифрами на конец года и сравнением компаний из разных отраслей.`,
        uz: `Soliqdan oldingi $1 mln foyda o'zi kam narsa aytadi. Agar biznes o'tgan yili $50 mln, asosiy raqobatchisi esa $60 mln topgan bo'lsa, manzara boshqacha. Tahlil raqamlarni o'tgan yillar, prognozlar va raqobatchilar bilan solishtirish, shunda foydalanuvchilar asosli xulosa chiqaradi.

Bunga koeffitsient tahlili yordam beradi. Koeffitsient ikki bog'liq summa qanday harakatlanishini ko'rsatadi. Masalan, tannarx sotuv bilan birga o'zgaradi, ish haqi, debitorlar va zaxira ham. Koeffitsientlar bu bog'liqlikni solishtirish oson shaklda beradi. Lekin ular hisobotdagi o'sha raqamlardan hisoblanadi, shuning uchun asl ma'lumotlar ham foydali.

Har xil foydalanuvchiga har xil narsa kerak. Aksiyadorlar va bo'lajak investorlarga sarmoya daromadi, shuningdek barqarorlik va likvidlik muhim. Yetkazib beruvchilar va kreditorlarga to'lov olishi muhim. Boshqalar: moliya muassasalari, xodimlar, maslahatchilar va jurnalistlar.

Har bir koeffitsient uchun to'rt savol bering. U nimani bildiradi? Uning o'zgarishi nimani bildiradi? Me'yor yoki mezon bormi? Cheklovlari nima? Koeffitsientlarni hisob siyosati, yil oxiridagi odatiy bo'lmagan raqamlar va turli sohadagi kompaniyalarni solishtirish buzishi mumkin.`,
      },
      example: {
        en: `Madina's Mart LLC made an operating profit of $24,000 this year. Is that good? Last year it made $27,000 on lower sales, and a similar shop nearby earns 15% of its revenue as operating profit. Ratios turn these figures into something Madina can compare and act on.`,
        ru: `Операционная прибыль Madina's Mart LLC в этом году $24,000. Это хорошо? В прошлом году было $27,000 при меньших продажах, а похожий магазин рядом получает 15% выручки в виде операционной прибыли. Показатели превращают эти цифры в то, что Мадина может сравнить и использовать.`,
        uz: `Madina's Mart LLC bu yil $24,000 operatsion foyda ko'rdi. Bu yaxshimi? O'tgan yili kamroq sotuvda $27,000 bo'lgan, yaqindagi o'xshash do'kon esa tushumining 15% ini operatsion foyda sifatida oladi. Koeffitsientlar bu raqamlarni Madina solishtirib, harakat qila oladigan narsaga aylantiradi.`,
      },
    },
    {
      key: {
        en: `- Gross profit margin = gross profit / revenue × 100%.
- Operating profit margin = operating profit (PBFIT) / revenue × 100%.
- ROCE = PBFIT / capital employed × 100%.
- Capital employed = equity + non-current loans = total assets - current liabilities.
- Net asset turnover = revenue / capital employed, in times.
- Operating profit margin × net asset turnover = ROCE.`,
        ru: `- Валовая маржа = валовая прибыль / выручка × 100%.
- Операционная маржа = операционная прибыль (PBFIT) / выручка × 100%.
- ROCE = PBFIT / задействованный капитал × 100%.
- Задействованный капитал = капитал + долгосрочные займы = все активы - краткосрочные обязательства.
- Оборачиваемость чистых активов = выручка / задействованный капитал, в разах.
- Операционная маржа × оборачиваемость чистых активов = ROCE.`,
        uz: `- Yalpi foyda marjasi = yalpi foyda / tushum × 100%.
- Operatsion foyda marjasi = operatsion foyda (PBFIT) / tushum × 100%.
- ROCE = PBFIT / jalb qilingan kapital × 100%.
- Jalb qilingan kapital = kapital + uzoq muddatli qarzlar = jami aktivlar - joriy majburiyatlar.
- Sof aktivlar aylanmasi = tushum / jalb qilingan kapital, marta.
- Operatsion foyda marjasi × sof aktivlar aylanmasi = ROCE.`,
      },
      exam: {
        en: `- PBFIT is profit before financing and income taxes. In FA it is normally the same as operating profit.
- If PBFIT is not given, work it out: gross profit - operating expenses. Do not use profit before tax.
- Lower purchase costs with the same selling price raise the gross profit margin.
- New loans or a share issue raise capital employed, so ROCE falls unless profit rises with it.
- Repaying loans lowers capital employed, which raises ROCE. A better profit margin raises it too.
- A revaluation raises capital employed and the depreciation charge, so ROCE falls.
- Margin is profit / selling price. Mark-up is profit / cost. With a 25% mark-up, cost = price × 100/125.`,
        ru: `- PBFIT — прибыль до финансирования и налога на прибыль. В FA она обычно равна операционной прибыли.
- Если PBFIT не дана, рассчитайте: валовая прибыль - операционные расходы. Не берите прибыль до налога.
- Снижение закупочной цены при той же цене продажи повышает валовую маржу.
- Новые займы или выпуск акций увеличивают задействованный капитал, и ROCE падает, если прибыль не растёт.
- Возврат займов уменьшает задействованный капитал и повышает ROCE. Рост маржи тоже повышает его.
- Переоценка увеличивает задействованный капитал и амортизацию, поэтому ROCE падает.
- Маржа — прибыль / цена продажи. Наценка — прибыль / себестоимость. При наценке 25% себестоимость = цена × 100/125.`,
        uz: `- PBFIT — moliyalashtirish va foyda solig'idan oldingi foyda. FA da odatda operatsion foydaga teng.
- PBFIT berilmasa, hisoblang: yalpi foyda - operatsion xarajatlar. Soliqdan oldingi foydani olmang.
- Sotish narxi o'zgarmay xarid narxi tushsa, yalpi foyda marjasi oshadi.
- Yangi qarz yoki aksiya chiqarish jalb qilingan kapitalni oshiradi, foyda oshmasa ROCE tushadi.
- Qarzni qaytarish jalb qilingan kapitalni kamaytirib, ROCE ni oshiradi. Marja yaxshilanishi ham oshiradi.
- Qayta baholash jalb qilingan kapital va amortizatsiyani oshiradi, shuning uchun ROCE tushadi.
- Marja — foyda / sotish narxi. Ustama — foyda / tannarx. 25% ustamada tannarx = narx × 100/125.`,
      },
      heading: {
        en: 'Profitability',
        ru: 'Рентабельность',
        uz: 'Rentabellik',
      },
      body: {
        en: `Gross profit margin shows the average profit on each sale after the direct cost of the goods. It changes with selling prices, the mix of products sold, purchase or production costs, and inventory values. If gross profit has not grown in line with revenue, ask why: higher purchase costs, inventory write-offs, or other costs put into cost of sales. Food retailers live on low margins and high volume. Jewellers need higher margins to make up for fewer sales.

Operating profit margin goes further down the statement of profit or loss. It includes selling, distribution and administrative costs, so it shows how well the business is run as well as how profitably it trades. If the gross margin is steady but the operating margin moves, look at staff numbers, depreciation after big asset purchases or sales, irrecoverable debts, rent, advertising and fuel. Some of these costs are fixed and do not move with revenue.

Return on capital employed (ROCE) measures how much profit is made for every $1 invested in the business. Compare it with previous years, with the target set by management, and with other entities. Old, heavily depreciated assets make capital employed small and ROCE high. A big purchase of new assets makes ROCE fall at once, because the extra profit takes years to arrive. That is not necessarily poor performance.

Net asset turnover shows how much revenue each $1 of capital employed generates, which measures how hard the assets are worked. Multiply operating margin by asset turnover and you get ROCE. So two businesses can earn the same ROCE in different ways: a supermarket with thin margins and high turnover, or a jeweller with high margins and low turnover.`,
        ru: `Валовая маржа показывает среднюю прибыль с каждой продажи после прямой стоимости товара. Она меняется с ценами продажи, ассортиментом, закупочной или производственной стоимостью и оценкой запасов. Если валовая прибыль не растёт вместе с выручкой, спросите почему: дороже закупки, списание запасов или другие расходы в себестоимости. Продуктовые магазины живут на низкой марже и большом объёме. Ювелирам нужна высокая маржа, чтобы покрыть меньшие продажи.

Операционная маржа идёт ниже по отчёту о прибыли или убытке. Она включает коммерческие и административные расходы, поэтому показывает и качество управления, и доходность торговли. Если валовая маржа стабильна, а операционная меняется, смотрите на численность персонала, амортизацию после крупных покупок или продаж активов, безнадёжные долги, аренду, рекламу и топливо. Часть этих расходов постоянна и не меняется с выручкой.

Рентабельность задействованного капитала (ROCE) показывает, сколько прибыли приносит каждый вложенный $1. Сравнивайте её с прошлыми годами, с целью руководства и с другими компаниями. Старые, сильно амортизированные активы делают капитал маленьким, а ROCE высоким. Крупная покупка новых активов сразу снижает ROCE, так как дополнительная прибыль приходит годами. Это не обязательно плохой результат.

Оборачиваемость чистых активов показывает, сколько выручки даёт каждый $1 задействованного капитала, то есть насколько интенсивно используются активы. Операционная маржа, умноженная на оборачиваемость, даёт ROCE. Поэтому две компании могут иметь одинаковый ROCE разными путями: супермаркет с низкой маржой и высокой оборачиваемостью или ювелир с высокой маржой и низкой оборачиваемостью.`,
        uz: `Yalpi foyda marjasi tovarning to'g'ridan-to'g'ri qiymatidan keyin har bir sotuvdan o'rtacha foydani ko'rsatadi. U sotish narxi, sotilgan mahsulot tarkibi, xarid yoki ishlab chiqarish qiymati va zaxira bahosi bilan o'zgaradi. Yalpi foyda tushum bilan birga o'smasa, sababini so'rang: qimmat xarid, zaxirani hisobdan chiqarish yoki tannarxga qo'shilgan boshqa xarajatlar. Oziq-ovqat do'konlari past marja va katta hajm bilan yashaydi. Zargarlarga kam sotuvni qoplash uchun yuqori marja kerak.

Operatsion foyda marjasi foyda yoki zarar hisobotida pastroq turadi. U sotish, tarqatish va ma'muriy xarajatlarni o'z ichiga oladi, shuning uchun savdo daromadi bilan birga boshqaruv sifatini ham ko'rsatadi. Yalpi marja barqaror bo'lib, operatsion marja o'zgarsa, xodimlar soni, katta aktiv xaridi yoki sotuvidan keyingi amortizatsiya, umidsiz qarzlar, ijara, reklama va yoqilg'iga qarang. Bu xarajatlarning bir qismi doimiy va tushum bilan o'zgarmaydi.

Jalb qilingan kapital rentabelligi (ROCE) biznesga qo'yilgan har $1 qancha foyda keltirishini o'lchaydi. Uni o'tgan yillar, rahbariyat maqsadi va boshqa korxonalar bilan solishtiring. Eski, ko'p amortizatsiya qilingan aktivlar kapitalni kichik, ROCE ni yuqori qiladi. Katta yangi aktiv xaridi ROCE ni darhol tushiradi, chunki qo'shimcha foyda yillar davomida keladi. Bu albatta yomon natija emas.

Sof aktivlar aylanmasi jalb qilingan kapitalning har $1 qancha tushum berishini, ya'ni aktivlar qanchalik faol ishlatilishini ko'rsatadi. Operatsion marjani aylanmaga ko'paytirsangiz, ROCE chiqadi. Shuning uchun ikki biznes bir xil ROCE ga turli yo'l bilan erishishi mumkin: past marja va yuqori aylanmali supermarket yoki yuqori marja va past aylanmali zargar.`,
      },
      example: {
        en: `Madina's Mart LLC: revenue $200,000, cost of sales $146,000, operating expenses $30,000. Gross profit is $54,000, a margin of 27%. Operating profit is $24,000, a margin of 12%. Equity is $90,000 and the bank loan $30,000, so capital employed is $120,000. ROCE is $24,000 / $120,000 = 20%. Asset turnover is $200,000 / $120,000 = 1.67 times, and 12% × 1.67 ≈ 20%.`,
        ru: `Madina's Mart LLC: выручка $200,000, себестоимость $146,000, операционные расходы $30,000. Валовая прибыль $54,000, маржа 27%. Операционная прибыль $24,000, маржа 12%. Капитал $90,000 и банковский заём $30,000, задействованный капитал $120,000. ROCE: $24,000 / $120,000 = 20%. Оборачиваемость: $200,000 / $120,000 = 1.67 раза, и 12% × 1.67 ≈ 20%.`,
        uz: `Madina's Mart LLC: tushum $200,000, tannarx $146,000, operatsion xarajatlar $30,000. Yalpi foyda $54,000, marja 27%. Operatsion foyda $24,000, marja 12%. Kapital $90,000 va bank qarzi $30,000, jalb qilingan kapital $120,000. ROCE: $24,000 / $120,000 = 20%. Aylanma: $200,000 / $120,000 = 1.67 marta, va 12% × 1.67 ≈ 20%.`,
      },
    },
    {
      key: {
        en: `- Liquidity is the ability to pay liabilities as they fall due.
- Current ratio = current assets / current liabilities, shown as x:1.
- Quick (acid test) ratio = (current assets - inventory) / current liabilities.
- Inventory is left out of the quick ratio because it is the slowest to turn into cash.
- Rough norms: about 1.5:1 for the current ratio, 0.7:1 to 1:1 for the quick ratio.
- Too high is not always good: it can mean idle cash, unsold goods or slow customers.`,
        ru: `- Ликвидность — способность платить по обязательствам в срок.
- Текущая ликвидность = оборотные активы / краткосрочные обязательства, в виде x:1.
- Быстрая ликвидность = (оборотные активы - запасы) / краткосрочные обязательства.
- Запасы исключаются из быстрой ликвидности, так как медленнее всего превращаются в деньги.
- Примерные нормы: около 1.5:1 для текущей, от 0.7:1 до 1:1 для быстрой.
- Слишком высокий уровень не всегда хорош: лишние деньги, непроданный товар или медленные клиенты.`,
        uz: `- Likvidlik — majburiyatlarni o'z vaqtida to'lash qobiliyati.
- Joriy koeffitsient = aylanma aktivlar / joriy majburiyatlar, x:1 shaklida.
- Tezkor koeffitsient = (aylanma aktivlar - zaxira) / joriy majburiyatlar.
- Zaxira tezkor koeffitsientga kirmaydi, chunki u pulga eng sekin aylanadi.
- Taxminiy me'yor: joriy uchun 1.5:1 atrofida, tezkor uchun 0.7:1 dan 1:1 gacha.
- Juda yuqori har doim yaxshi emas: bo'sh pul, sotilmagan tovar yoki sekin mijozlar.`,
      },
      exam: {
        en: `- Current liabilities include a bank overdraft. Count it in both ratios.
- Giving customers longer credit raises receivables, so the current ratio rises if nothing else changes.
- Revaluing non-current assets does not affect current assets or liabilities, so the current ratio is unchanged.
- Supermarkets often show low ratios: few receivables, high payables and tight cash control.`,
        ru: `- В краткосрочные обязательства входит банковский овердрафт. Учитывайте его в обоих показателях.
- Более долгий кредит покупателям увеличивает дебиторов, и текущая ликвидность растёт, если остальное не меняется.
- Переоценка внеоборотных активов не влияет на оборотные активы и обязательства, текущая ликвидность не меняется.
- У супермаркетов показатели часто низкие: мало дебиторов, много кредиторов и жёсткий контроль денег.`,
        uz: `- Joriy majburiyatlarga bank overdrafti kiradi. Uni ikkala koeffitsientda hisoblang.
- Mijozlarga uzoqroq muddat berish debitorlarni oshiradi, boshqa narsa o'zgarmasa joriy koeffitsient oshadi.
- Uzoq muddatli aktivlarni qayta baholash aylanma aktiv va majburiyatlarga ta'sir qilmaydi, joriy koeffitsient o'zgarmaydi.
- Supermarketlarda koeffitsientlar ko'pincha past: debitorlar kam, kreditorlar ko'p, pul qattiq nazoratda.`,
      },
      heading: {
        en: 'Liquidity',
        ru: 'Ликвидность',
        uz: 'Likvidlik',
      },
      body: {
        en: `The current ratio measures whether current assets are enough to meet current liabilities. Traditionally 2:1 was seen as safe, but today about 1.5:1 is treated as normal, with wide variation between industries. Judge it against what is normal for that business and its sector.

A high or rising current ratio is not automatically good. It can mean inventory that will not sell, customers who are slow to pay, or cash sitting idle that could be invested to earn a better return.

The quick ratio, or acid test, leaves out inventory, because inventory is the current asset that takes longest to turn into cash. It asks whether receivables and cash alone could settle current liabilities. A normal range is about 1:1 down to 0.7:1. A low quick ratio is less worrying if the business has an agreed overdraft facility it can draw on.`,
        ru: `Текущая ликвидность показывает, хватает ли оборотных активов для оплаты краткосрочных обязательств. Раньше безопасным считалось 2:1, сейчас нормой считается около 1.5:1, но в разных отраслях она сильно отличается. Оценивайте её относительно нормы для этого бизнеса и отрасли.

Высокая или растущая текущая ликвидность не всегда хороша. Она может означать неходовой товар, клиентов, которые медленно платят, или лишние деньги, которые можно вложить с большей отдачей.

Быстрая ликвидность исключает запасы, так как они дольше всего превращаются в деньги. Она показывает, хватит ли одних дебиторов и денег для оплаты краткосрочных обязательств. Обычный диапазон — от 1:1 до 0.7:1. Низкая быстрая ликвидность менее опасна, если у бизнеса есть согласованный лимит овердрафта.`,
        uz: `Joriy koeffitsient aylanma aktivlar joriy majburiyatlarni qoplashga yetadimi, shuni o'lchaydi. Avval 2:1 xavfsiz hisoblangan, hozir 1.5:1 atrofi me'yor, lekin sohalar orasida farq katta. Uni shu biznes va soha uchun me'yorga qarab baholang.

Yuqori yoki o'sayotgan joriy koeffitsient avtomatik yaxshi emas. U sotilmaydigan tovar, sekin to'laydigan mijozlar yoki yaxshiroq daromad uchun sarmoya qilish mumkin bo'lgan bo'sh pulni bildirishi mumkin.

Tezkor koeffitsient zaxirani chiqarib tashlaydi, chunki zaxira pulga eng uzoq aylanadi. U faqat debitorlar va pul joriy majburiyatlarni yopa oladimi, shuni so'raydi. Odatiy oraliq 1:1 dan 0.7:1 gacha. Biznesda kelishilgan overdraft limiti bo'lsa, past tezkor koeffitsient unchalik xavfli emas.`,
      },
      example: {
        en: `Madina's Mart LLC has inventory $24,000, receivables $15,000 and cash $3,000, so current assets are $42,000. Current liabilities are payables $18,000, tax $5,000 and accruals $5,000, a total of $28,000. The current ratio is $42,000 / $28,000 = 1.5:1. The quick ratio is ($42,000 - $24,000) / $28,000 = 0.64:1, a little low, because most of its current assets are goods on the shelves.`,
        ru: `У Madina's Mart LLC запасы $24,000, дебиторы $15,000 и деньги $3,000, оборотные активы $42,000. Краткосрочные обязательства: кредиторы $18,000, налог $5,000 и начисления $5,000, всего $28,000. Текущая ликвидность: $42,000 / $28,000 = 1.5:1. Быстрая: ($42,000 - $24,000) / $28,000 = 0.64:1, немного низко, так как большая часть оборотных активов — товар на полках.`,
        uz: `Madina's Mart LLC da zaxira $24,000, debitorlar $15,000 va pul $3,000, aylanma aktivlar $42,000. Joriy majburiyatlar: kreditorlar $18,000, soliq $5,000 va hisoblanganlar $5,000, jami $28,000. Joriy koeffitsient: $42,000 / $28,000 = 1.5:1. Tezkor: ($42,000 - $24,000) / $28,000 = 0.64:1, biroz past, chunki aylanma aktivlarning ko'pi javondagi tovar.`,
      },
    },
    {
      key: {
        en: `- Inventory days = inventory / cost of sales × 365.
- Receivables days = trade receivables / credit sales × 365.
- Payables days = trade payables / credit purchases × 365. Use cost of sales if purchases are not given.
- Inventory turnover = cost of sales / inventory, in times a year. Days = 365 / times.
- Cash conversion cycle = inventory days + receivables days - payables days.
- The shorter the cycle, the less cash is tied up in working capital.`,
        ru: `- Оборот запасов в днях = запасы / себестоимость × 365.
- Период погашения дебиторов = торговые дебиторы / продажи в кредит × 365.
- Период оплаты кредиторов = торговые кредиторы / закупки в кредит × 365. Без закупок берите себестоимость.
- Оборачиваемость запасов = себестоимость / запасы, раз в год. Дни = 365 / разы.
- Цикл оборота денег = дни запасов + дни дебиторов - дни кредиторов.
- Чем короче цикл, тем меньше денег заморожено в оборотном капитале.`,
        uz: `- Zaxira kunlari = zaxira / tannarx × 365.
- Debitorlik muddati = savdo debitorlari / nasiya sotuv × 365.
- Kreditorlik muddati = savdo kreditorlari / nasiya xarid × 365. Xarid berilmasa tannarxni oling.
- Zaxira aylanmasi = tannarx / zaxira, yiliga marta. Kunlar = 365 / marta.
- Pul aylanish sikli = zaxira kunlari + debitorlik kunlari - kreditorlik kunlari.
- Sikl qancha qisqa bo'lsa, aylanma kapitalda shuncha kam pul turadi.`,
      },
      exam: {
        en: `- Average inventory = (opening + closing) / 2. Find cost of sales first: opening + purchases - closing.
- If only total revenue is given, assume all sales are on credit.
- Poor credit control or longer credit terms raise receivables days. A discount for paying early cuts them.
- A rise in the volume of credit sales does not, on its own, change receivables days.
- Paying suppliers early to get a discount reduces payables days.
- Building up inventory ahead of a sales campaign raises inventory days. Scrapping old items lowers them.
- Longer payables days are free finance, but suppliers may stop supplying and discounts are lost.`,
        ru: `- Средние запасы = (на начало + на конец) / 2. Сначала найдите себестоимость: на начало + закупки - на конец.
- Если дана только общая выручка, считайте все продажи кредитными.
- Слабый кредитный контроль или длинные сроки увеличивают дни дебиторов. Скидка за раннюю оплату сокращает их.
- Рост объёма кредитных продаж сам по себе не меняет дни дебиторов.
- Ранняя оплата поставщикам ради скидки сокращает дни кредиторов.
- Накопление запасов перед рекламной кампанией увеличивает дни запасов. Списание старого товара уменьшает их.
- Долгая оплата кредиторам — бесплатное финансирование, но поставщики могут прекратить поставки, а скидки теряются.`,
        uz: `- O'rtacha zaxira = (boshlang'ich + yakuniy) / 2. Avval tannarxni toping: boshlang'ich + xarid - yakuniy.
- Faqat umumiy tushum berilsa, barcha sotuvni nasiya deb oling.
- Zaif kredit nazorati yoki uzoq muddat debitorlik kunlarini oshiradi. Erta to'lov chegirmasi ularni qisqartiradi.
- Nasiya sotuv hajmi oshishi o'zi debitorlik kunlarini o'zgartirmaydi.
- Chegirma uchun yetkazib beruvchiga erta to'lash kreditorlik kunlarini qisqartiradi.
- Reklama kampaniyasi oldidan zaxira to'plash zaxira kunlarini oshiradi. Eski tovarni chiqarish kamaytiradi.
- Uzoq kreditorlik muddati bepul moliya, lekin yetkazib beruvchilar to'xtatishi va chegirmalar yo'qolishi mumkin.`,
      },
      heading: {
        en: 'Efficiency and working capital',
        ru: 'Эффективность и оборотный капитал',
        uz: 'Samaradorlik va aylanma kapital',
      },
      body: {
        en: `Inventory days show how long goods sit before they are sold. A rising figure can mean weak demand or poor inventory control, which brings higher storage and insurance costs and a greater risk of damage and obsolescence. It can also be deliberate: buying in bulk for discounts, avoiding stock-outs, or preparing for a busy season. Norms vary hugely, from a day or two for fresh fish to months for a builder. Year-end inventory is normally used, but an average of opening and closing smooths the figure.

Receivables days show how long credit customers take to pay. Compare them with the stated credit terms, with last year and with the industry. A rising figure usually means weak credit control and a risk of irrecoverable debts, though it may be a deliberate policy to win customers. A falling figure is usually good, but could also be a sign that the business is short of cash and pressing customers. Use credit sales only. For a business that sells mainly for cash, total revenue would make the figure meaningless.

Payables days show how long the business takes to pay its suppliers. Credit purchases are rarely given, so cost of sales is used instead. Taking longer is a source of free finance, but it may also mean the business cannot pay sooner. It risks a poor reputation, suppliers refusing to deliver, and lost early settlement discounts.

The cash conversion cycle combines the three. Cash leaves when suppliers are paid and comes back when customers pay, so the cycle is inventory days plus receivables days less payables days. A cash retailer can have a very short or even negative cycle. A manufacturer selling on credit has a long one and needs more working capital.`,
        ru: `Дни запасов показывают, сколько товар лежит до продажи. Рост может означать слабый спрос или плохой контроль запасов, а значит больше расходов на хранение и страховку и выше риск порчи и устаревания. Но это может быть и намеренно: оптовые закупки ради скидок, защита от дефицита или подготовка к сезону. Нормы очень разные: от дня-двух для свежей рыбы до месяцев у строителя. Обычно берут запасы на конец года, но среднее за год сглаживает цифру.

Дни дебиторов показывают, как долго платят покупатели в кредит. Сравнивайте их с условиями кредита, прошлым годом и отраслью. Рост обычно означает слабый кредитный контроль и риск безнадёжных долгов, хотя может быть политикой привлечения клиентов. Снижение обычно хорошо, но может говорить и о нехватке денег и давлении на клиентов. Берите только кредитные продажи. Для бизнеса, который в основном продаёт за наличные, общая выручка сделает показатель бессмысленным.

Дни кредиторов показывают, как долго бизнес платит поставщикам. Закупки в кредит редко даны, поэтому берут себестоимость. Долгая оплата — бесплатное финансирование, но может значить, что бизнес не может заплатить раньше. Это грозит плохой репутацией, отказом поставщиков и потерей скидок за раннюю оплату.

Цикл оборота денег объединяет все три. Деньги уходят при оплате поставщикам и возвращаются, когда платят покупатели, поэтому цикл — это дни запасов плюс дни дебиторов минус дни кредиторов. У розничного магазина за наличные цикл может быть очень коротким или даже отрицательным. У производителя, продающего в кредит, он длинный, и ему нужно больше оборотного капитала.`,
        uz: `Zaxira kunlari tovar sotilguncha qancha turishini ko'rsatadi. Oshish talab sustligi yoki zaxira nazorati yomonligini bildirishi mumkin, bu esa saqlash va sug'urta xarajatlarini hamda buzilish va eskirish xavfini oshiradi. Lekin bu ataylab ham bo'lishi mumkin: chegirma uchun ulgurji xarid, tanqislikdan saqlanish yoki mavsumga tayyorgarlik. Me'yorlar juda farq qiladi: yangi baliq uchun bir-ikki kundan quruvchida oylargacha. Odatda yil oxiridagi zaxira olinadi, lekin boshlang'ich va yakuniy o'rtachasi raqamni tekislaydi.

Debitorlik kunlari nasiya mijozlar qancha vaqtda to'lashini ko'rsatadi. Ularni kredit shartlari, o'tgan yil va soha bilan solishtiring. Oshish odatda zaif kredit nazorati va umidsiz qarz xavfini bildiradi, garchi mijoz jalb qilish siyosati bo'lishi ham mumkin. Kamayish odatda yaxshi, lekin pul tanqisligi va mijozlarga bosimni ham bildirishi mumkin. Faqat nasiya sotuvni oling. Asosan naqdga sotadigan biznesda umumiy tushum raqamni ma'nosiz qiladi.

Kreditorlik kunlari biznes yetkazib beruvchilarga qancha vaqtda to'lashini ko'rsatadi. Nasiya xaridlar kamdan-kam beriladi, shuning uchun tannarx olinadi. Kechroq to'lash bepul moliya manbai, lekin biznes erta to'lay olmasligini ham bildirishi mumkin. Bu yomon obro', yetkazib beruvchilar rad etishi va erta to'lov chegirmalarini yo'qotish xavfini tug'diradi.

Pul aylanish sikli uchalasini birlashtiradi. Pul yetkazib beruvchiga to'langanda chiqadi va mijoz to'laganda qaytadi, shuning uchun sikl zaxira kunlari plus debitorlik kunlari minus kreditorlik kunlari. Naqd savdo qiladigan do'konda sikl juda qisqa yoki hatto manfiy bo'lishi mumkin. Nasiyaga sotadigan ishlab chiqaruvchida u uzun va ko'proq aylanma kapital kerak.`,
      },
      example: {
        en: `Madina's Mart LLC: inventory $24,000 and cost of sales $146,000 give $24,000 / $146,000 × 365 = 60 days. Only the cafe customers buy on credit, $73,000 a year, and they owe $15,000: 75 days. Payables of $18,000 give 45 days. The cycle is 60 + 75 - 45 = 90 days. Using total revenue of $200,000 would wrongly show receivables days of only 27.`,
        ru: `Madina's Mart LLC: запасы $24,000 и себестоимость $146,000 дают $24,000 / $146,000 × 365 = 60 дней. В кредит покупают только кафе, $73,000 в год, и они должны $15,000: 75 дней. Кредиторы $18,000 дают 45 дней. Цикл: 60 + 75 - 45 = 90 дней. Если взять всю выручку $200,000, дни дебиторов ошибочно составят лишь 27.`,
        uz: `Madina's Mart LLC: zaxira $24,000 va tannarx $146,000: $24,000 / $146,000 × 365 = 60 kun. Nasiyaga faqat kafelar oladi, yiliga $73,000, ular $15,000 qarzdor: 75 kun. $18,000 kreditorlar 45 kun beradi. Sikl: 60 + 75 - 45 = 90 kun. Umumiy tushum $200,000 olinsa, debitorlik kunlari xato ravishda atigi 27 bo'ladi.`,
      },
    },
    {
      key: {
        en: `- Gearing shows how much of the long-term finance comes from debt.
- Debt/equity = long-term debt / equity × 100%.
- Gearing = long-term debt / (equity + long-term debt) × 100%.
- Interest cover = PBFIT / interest payable. Below 2 times is a concern.
- Debt must be repaid with interest, so high gearing means higher risk.
- Redeemable preference shares are debt. Irredeemable preference shares are equity.`,
        ru: `- Финансовый рычаг показывает, какая часть долгосрочного финансирования — долг.
- Долг/капитал = долгосрочный долг / капитал × 100%.
- Рычаг = долгосрочный долг / (капитал + долгосрочный долг) × 100%.
- Покрытие процентов = PBFIT / проценты к уплате. Ниже 2 раз — повод для беспокойства.
- Долг надо вернуть с процентами, поэтому высокий рычаг — выше риск.
- Погашаемые привилегированные акции — долг. Непогашаемые — капитал.`,
        uz: `- Leveraj uzoq muddatli moliyaning qancha qismi qarzdan kelishini ko'rsatadi.
- Qarz/kapital = uzoq muddatli qarz / kapital × 100%.
- Leveraj = uzoq muddatli qarz / (kapital + uzoq muddatli qarz) × 100%.
- Foizlarni qoplash = PBFIT / to'lanadigan foiz. 2 martadan past tashvishli.
- Qarz foizi bilan qaytarilishi kerak, shuning uchun yuqori leveraj yuqori xavf.
- Qaytariladigan imtiyozli aksiyalar qarz. Qaytarilmaydiganlari kapital.`,
      },
      exam: {
        en: `- Long-term debt leaves out the overdraft and other current liabilities.
- Issuing shares for cash, including a rights issue, raises equity, so gearing falls.
- A bonus issue only moves amounts within equity, so gearing does not change.
- A revaluation raises equity with no new debt, so gearing falls.
- Issuing shares to repay a loan raises equity and cuts debt, so gearing falls on both counts.
- Gearing rises if equity falls proportionately more than debt falls.
- Interest cover uses PBFIT, not profit before tax and not profit for the year.`,
        ru: `- В долгосрочный долг не входят овердрафт и другие краткосрочные обязательства.
- Выпуск акций за деньги, включая выпуск прав, увеличивает капитал, и рычаг падает.
- Бонусный выпуск лишь переносит суммы внутри капитала, рычаг не меняется.
- Переоценка увеличивает капитал без нового долга, рычаг падает.
- Выпуск акций для погашения займа увеличивает капитал и уменьшает долг, рычаг падает по обеим причинам.
- Рычаг растёт, если капитал падает пропорционально сильнее долга.
- Покрытие процентов считается по PBFIT, а не по прибыли до налога или прибыли за год.`,
        uz: `- Uzoq muddatli qarzga overdraft va boshqa joriy majburiyatlar kirmaydi.
- Pulga aksiya chiqarish, jumladan huquqli chiqarish, kapitalni oshiradi, leveraj tushadi.
- Bonusli chiqarish summalarni kapital ichida ko'chiradi, leveraj o'zgarmaydi.
- Qayta baholash yangi qarzsiz kapitalni oshiradi, leveraj tushadi.
- Qarzni yopish uchun aksiya chiqarish kapitalni oshirib, qarzni kamaytiradi, leveraj ikki sabab bilan tushadi.
- Kapital qarzdan nisbatan ko'proq kamaysa, leveraj oshadi.
- Foizlarni qoplash soliqdan oldingi foyda yoki yil foydasi bilan emas, PBFIT bilan hisoblanadi.`,
      },
      heading: {
        en: 'Financial position: gearing and interest cover',
        ru: 'Финансовое положение: рычаг и покрытие процентов',
        uz: 'Moliyaviy holat: leveraj va foizlarni qoplash',
      },
      body: {
        en: `Financial position is about stability and risk, which depend on how the business is financed. Gearing compares long-term debt, such as loans and redeemable preference shares, with equity, which is share capital, share premium and reserves. It can be expressed as debt to equity, or as debt as a share of debt plus equity.

Debt is risky for the business because repayments and interest are fixed and must be paid. Failing to pay can lead to insolvency. Equity carries no such obligation, since a missed dividend cannot make the business insolvent. On the other hand, shareholders take more risk and expect a higher return, so equity tends to cost more to service. Highly geared entities are riskier but cheaper to finance. Low-geared entities find it easier to borrow more when a good project appears.

Interest cover shows how many times the profit before financing and income taxes covers the interest charge. Below about 2 times is usually unsatisfactory. Most of the profit is then used up by interest, dividends are at risk, and a fall in profit could leave the business unable to service its debt.

Finance should also suit its purpose. A permanent expansion should be funded by long-term capital, not by a short-term overdraft, while a short seasonal peak can sensibly be funded by an overdraft.`,
        ru: `Финансовое положение — это стабильность и риск, которые зависят от того, как финансируется бизнес. Рычаг сравнивает долгосрочный долг, например займы и погашаемые привилегированные акции, с капиталом: акционерным капиталом, эмиссионным доходом и резервами. Его выражают как долг к капиталу или как долю долга в сумме долга и капитала.

Долг рискован для бизнеса, потому что выплаты и проценты фиксированы и обязательны. Неуплата может привести к банкротству. У капитала такой обязанности нет: невыплата дивиденда не делает компанию неплатёжеспособной. С другой стороны, акционеры рискуют больше и ждут более высокой отдачи, поэтому обслуживать капитал обычно дороже. Компании с высоким рычагом рискованнее, но финансируются дешевле. Компаниям с низким рычагом легче занять ещё, когда появляется хороший проект.

Покрытие процентов показывает, сколько раз прибыль до финансирования и налога на прибыль покрывает процентный расход. Меньше примерно 2 раз обычно неудовлетворительно. Тогда большая часть прибыли уходит на проценты, дивиденды под угрозой, а падение прибыли может лишить бизнес возможности обслуживать долг.

Финансирование должно соответствовать цели. Постоянное расширение нужно финансировать долгосрочным капиталом, а не краткосрочным овердрафтом, а короткий сезонный пик разумно покрыть овердрафтом.`,
        uz: `Moliyaviy holat barqarorlik va xavf haqida, ular biznes qanday moliyalashtirilishiga bog'liq. Leveraj uzoq muddatli qarzni, masalan qarzlar va qaytariladigan imtiyozli aksiyalarni, kapital bilan solishtiradi: aksiya kapitali, emissiya daromadi va rezervlar. U qarzning kapitalga nisbati yoki qarzning qarz va kapital yig'indisidagi ulushi sifatida ifodalanadi.

Qarz biznes uchun xavfli, chunki to'lovlar va foiz qat'iy va majburiy. To'lamaslik bankrotlikka olib kelishi mumkin. Kapitalda bunday majburiyat yo'q: dividend to'lanmasligi kompaniyani bankrot qilmaydi. Boshqa tomondan, aksiyadorlar ko'proq xavf oladi va yuqoriroq daromad kutadi, shuning uchun kapitalga xizmat ko'rsatish odatda qimmatroq. Leveraji yuqori korxonalar xavfliroq, lekin arzonroq moliyalashtiriladi. Leveraji past korxonalarga yaxshi loyiha chiqqanda qo'shimcha qarz olish osonroq.

Foizlarni qoplash moliyalashtirish va foyda solig'idan oldingi foyda foiz xarajatini necha marta qoplashini ko'rsatadi. Taxminan 2 martadan kam odatda qoniqarsiz. Unda foydaning ko'pi foizga ketadi, dividendlar xavf ostida, foyda tushsa biznes qarzga xizmat qila olmasligi mumkin.

Moliya maqsadga mos bo'lishi kerak. Doimiy kengayish qisqa muddatli overdraft bilan emas, uzoq muddatli kapital bilan moliyalashtirilishi kerak, qisqa mavsumiy cho'qqini esa overdraft bilan qoplash o'rinli.`,
      },
      example: {
        en: `Madina's Mart LLC has equity of $90,000 and a $30,000 bank loan. Debt/equity is $30,000 / $90,000 = 33.3%. Gearing is $30,000 / $120,000 = 25%. Interest on the loan is $3,000 and operating profit is $24,000, so interest cover is 8 times, comfortably safe. If Madina used an overdraft over the busy season, it would be a current liability and stay out of both gearing figures.`,
        ru: `У Madina's Mart LLC капитал $90,000 и банковский заём $30,000. Долг/капитал: $30,000 / $90,000 = 33.3%. Рычаг: $30,000 / $120,000 = 25%. Проценты по займу $3,000, операционная прибыль $24,000, покрытие процентов 8 раз, вполне надёжно. Если Мадина возьмёт овердрафт на горячий сезон, это будет краткосрочное обязательство, и оно не войдёт ни в один показатель рычага.`,
        uz: `Madina's Mart LLC da kapital $90,000 va $30,000 bank qarzi bor. Qarz/kapital: $30,000 / $90,000 = 33.3%. Leveraj: $30,000 / $120,000 = 25%. Qarz foizi $3,000, operatsion foyda $24,000, foizlarni qoplash 8 marta, yetarlicha xavfsiz. Madina qizg'in mavsumda overdraft olsa, u joriy majburiyat bo'ladi va leverajning hech biriga kirmaydi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Gross profit margin', ru: 'Валовая маржа', uz: 'Yalpi foyda marjasi' }, definition: { en: 'Gross profit as a percentage of revenue.', ru: 'Валовая прибыль в процентах от выручки.', uz: 'Yalpi foydaning tushumga foiz nisbati.' } },
    { term: { en: 'Operating profit margin', ru: 'Операционная маржа', uz: 'Operatsion foyda marjasi' }, definition: { en: 'Profit before financing and income taxes as a percentage of revenue.', ru: 'Прибыль до финансирования и налога на прибыль в процентах от выручки.', uz: 'Moliyalashtirish va foyda solig\'idan oldingi foydaning tushumga foiz nisbati.' } },
    { term: { en: 'Return on capital employed (ROCE)', ru: 'Рентабельность задействованного капитала (ROCE)', uz: 'Jalb qilingan kapital rentabelligi (ROCE)' }, definition: { en: 'Profit before financing and income taxes as a percentage of capital employed.', ru: 'Прибыль до финансирования и налога в процентах от задействованного капитала.', uz: 'Moliyalashtirish va soliqdan oldingi foydaning jalb qilingan kapitalga foiz nisbati.' } },
    { term: { en: 'Capital employed', ru: 'Задействованный капитал', uz: 'Jalb qilingan kapital' }, definition: { en: 'Equity plus non-current loans, which equals total assets less current liabilities.', ru: 'Капитал плюс долгосрочные займы, что равно всем активам минус краткосрочные обязательства.', uz: 'Kapital plus uzoq muddatli qarzlar, bu jami aktivlar minus joriy majburiyatlarga teng.' } },
    { term: { en: 'Current ratio', ru: 'Коэффициент текущей ликвидности', uz: 'Joriy likvidlik koeffitsienti' }, definition: { en: 'Current assets divided by current liabilities.', ru: 'Оборотные активы, делённые на краткосрочные обязательства.', uz: 'Aylanma aktivlar joriy majburiyatlarga bo\'lingan.' } },
    { term: { en: 'Quick ratio (acid test)', ru: 'Коэффициент быстрой ликвидности', uz: 'Tezkor likvidlik koeffitsienti' }, definition: { en: 'Current assets less inventory, divided by current liabilities.', ru: 'Оборотные активы без запасов, делённые на краткосрочные обязательства.', uz: 'Zaxirasiz aylanma aktivlar joriy majburiyatlarga bo\'lingan.' } },
    { term: { en: 'Cash conversion cycle', ru: 'Цикл оборота денег', uz: 'Pul aylanish sikli' }, definition: { en: 'Inventory days plus receivables days less payables days.', ru: 'Дни запасов плюс дни дебиторов минус дни кредиторов.', uz: 'Zaxira kunlari plus debitorlik kunlari minus kreditorlik kunlari.' } },
    { term: { en: 'Gearing', ru: 'Финансовый рычаг', uz: 'Moliyaviy leveraj' }, definition: { en: 'The proportion of long-term finance that comes from debt rather than equity.', ru: 'Доля долгосрочного финансирования, которая приходится на долг, а не на капитал.', uz: 'Uzoq muddatli moliyaning kapital emas, qarzdan keladigan ulushi.' } },
    { term: { en: 'Interest cover', ru: 'Покрытие процентов', uz: 'Foizlarni qoplash' }, definition: { en: 'How many times profit before financing and income taxes covers the interest charge.', ru: 'Сколько раз прибыль до финансирования и налога покрывает процентный расход.', uz: 'Moliyalashtirish va soliqdan oldingi foyda foiz xarajatini necha marta qoplashi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter18;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter18.id] = chapter18;
