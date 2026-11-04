'use strict';

const chapter05 = {
  id: 'chapter-05',
  titles: { en: 'Inventory', ru: 'Запасы', uz: 'Tovar zaxiralari' },
  objectives: [
    {
      en: 'Record cost of sales and closing inventory',
      ru: 'Отражать себестоимость продаж и запасы на конец периода',
      uz: 'Sotilgan tovar tannarxi va yakuniy zaxirani qayd etish',
    },
    {
      en: 'Value inventory under IAS 2',
      ru: 'Оценивать запасы по IAS 2',
      uz: 'Zaxirani IAS 2 bo\'yicha baholash',
    },
    {
      en: 'Identify the costs included in inventory',
      ru: 'Определять затраты, включаемые в стоимость запасов',
      uz: 'Zaxira qiymatiga kiradigan xarajatlarni aniqlash',
    },
    {
      en: 'Calculate inventory cost using FIFO and AVCO',
      ru: 'Рассчитывать стоимость запасов методами FIFO и AVCO',
      uz: 'Zaxira qiymatini FIFO va AVCO usullarida hisoblash',
    },
    {
      en: 'Explain how inventory valuation affects profit and assets',
      ru: 'Объяснять влияние оценки запасов на прибыль и активы',
      uz: 'Zaxirani baholash foyda va aktivlarga qanday ta\'sir qilishini tushuntirish',
    },
  ],
  sections: [
    {
      key: {
        en: `- Cost of sales: opening inventory + purchases - closing inventory.
- Gross profit: revenue - cost of sales.
- Closing inventory is unsold goods. It is an asset, carried into next year.
- Matching: costs of unsold goods are kept out of this year's cost of sales.`,
        ru: `- Себестоимость продаж: запасы на начало + закупки - запасы на конец.
- Валовая прибыль: выручка - себестоимость продаж.
- Запасы на конец: непроданные товары. Это актив, переходящий на следующий год.
- Соответствие: затраты на непроданные товары не входят в себестоимость этого года.`,
        uz: `- Sotilgan tovar tannarxi: boshlang'ich zaxira + xaridlar - yakuniy zaxira.
- Yalpi foyda: tushum - sotilgan tovar tannarxi.
- Yakuniy zaxira: sotilmagan tovarlar. Bu keyingi yilga o'tadigan aktiv.
- Moslik: sotilmagan tovar xarajatlari shu yilgi tannarxga kirmaydi.`,
      },
      heading: {
        en: 'Inventory and cost of sales',
        ru: 'Запасы и себестоимость продаж',
        uz: 'Zaxira va sotilgan tovar tannarxi',
      },
      body: {
        en: `Many entities record inventory in the ledger only at the end of the period. During the year they record sales and purchases, then an annual count and valuation show what remains. This is called periodic inventory recording.

To work out gross profit, revenue is matched with the cost of the goods actually sold. The opening inventory and purchases made up everything available to sell. Whatever remains unsold is removed and carried forward as an asset.

This is the matching concept, an extension of accruals: inventory costs are matched to the revenue they help to earn.`,
        ru: `Многие предприятия отражают запасы в учёте только в конце периода. В течение года они записывают продажи и закупки, а затем годовая инвентаризация и оценка показывают остаток. Это называется периодическим учётом запасов.

Чтобы рассчитать валовую прибыль, выручку сопоставляют со стоимостью фактически проданных товаров. Запасы на начало и закупки — это всё, что было доступно для продажи. Непроданный остаток исключается и переносится как актив.

Это принцип соответствия, продолжение метода начисления: затраты на запасы сопоставляются с выручкой, которую они помогают получить.`,
        uz: `Ko'p korxonalar zaxirani hisobda faqat davr oxirida qayd etadi. Yil davomida sotuv va xaridlar yoziladi, so'ng yillik sanash va baholash qoldiqni ko'rsatadi. Bu davriy zaxira hisobi deyiladi.

Yalpi foydani topish uchun tushum haqiqatda sotilgan tovarlar qiymati bilan solishtiriladi. Boshlang'ich zaxira va xaridlar sotish uchun mavjud bo'lgan hamma narsa. Sotilmagan qoldiq chiqarilib, aktiv sifatida keyingi davrga o'tkaziladi.

Bu moslik tamoyili, hisoblash usulining davomi: zaxira xarajatlari ular topishga yordam bergan tushum bilan solishtiriladi.`,
      },
      example: {
        en: `A toy shop's year.
# Step 1: Goods available to sell
  Toys at the start $4,000 + toys bought $30,000 = $34,000
# Step 2: Take away what is still on the shelves
  $34,000 - $5,000 = $29,000
= Cost of sales: $29,000
# Step 3: Gross profit
  Revenue $45,000 - cost of sales $29,000 = $16,000
The $5,000 of unsold toys stays as an asset and becomes next year's opening inventory.`,
        ru: `Год магазина игрушек.
# Шаг 1: Товар, доступный для продажи
  Игрушки на начало $4,000 + куплено $30,000 = $34,000
# Шаг 2: Вычтем то, что осталось на полках
  $34,000 - $5,000 = $29,000
= Себестоимость продаж: $29,000
# Шаг 3: Валовая прибыль
  Выручка $45,000 - себестоимость $29,000 = $16,000
Непроданные игрушки на $5,000 остаются активом и становятся начальными запасами следующего года.`,
        uz: `O'yinchoq do'konining yili.
# 1-qadam: Sotishga mavjud tovar
  Boshidagi o'yinchoqlar $4,000 + sotib olingan $30,000 = $34,000
# 2-qadam: Javonda qolganini ayiramiz
  $34,000 - $5,000 = $29,000
= Sotilgan tovar tannarxi: $29,000
# 3-qadam: Yalpi foyda
  Tushum $45,000 - tannarx $29,000 = $16,000
Sotilmagan $5,000 lik o'yinchoqlar aktiv bo'lib qoladi va kelasi yilning boshlang'ich zaxirasiga aylanadi.`,
      },
      simple: {
        en: `Cost of sales is the cost of the goods you actually SOLD this year, not everything you bought.

Take what you had at the start (opening inventory), add what you bought (purchases), and take away what is still on the shelves at the end (closing inventory). What is left must have been sold. Gross profit is then revenue minus cost of sales.`,
        ru: `Себестоимость продаж — стоимость товара, который вы действительно ПРОДАЛИ за год, а не всего купленного.

Возьмите то, что было на начало (начальные запасы), прибавьте купленное (закупки) и вычтите то, что ещё лежит на полках в конце (конечные запасы). Остальное, значит, продано. Валовая прибыль — выручка минус себестоимость.`,
        uz: `Sotilgan tovar tannarxi — butun xarid emas, shu yili haqiqatda SOTILGAN tovar qiymati.

Boshidagi bor narsani (boshlang'ich zaxira) oling, sotib olinganni (xaridlar) qo'shing va oxirida javonda qolganini (yakuniy zaxira) ayiring. Qolgani sotilgan bo'ladi. Yalpi foyda — tushum minus tannarx.`,
      },
    },
    {
      exam: {
        en: `- Goods taken by the owner for personal use: Dr Drawings, Cr Purchases.
- A count on a different date must be adjusted back to the year end. Add goods sold since, at cost, and deduct goods bought since.
- Goods received and in closing inventory but with no invoice recorded overstate profit. The inventory figure itself is right.`,
        ru: `- Товары, взятые владельцем для личных нужд: Дт Изъятия, Кт Закупки.
- Инвентаризацию в другой день нужно привести к концу года: прибавить проданное после неё по себестоимости и вычесть закупленное.
- Если товар получен и входит в запасы, а счёт не отражён, прибыль завышена. Сама сумма запасов верна.`,
        uz: `- Egasi shaxsiy ehtiyoj uchun olgan tovar: Dt Olib qo'yishlar, Kt Xaridlar.
- Boshqa kunda o'tkazilgan sanash yil oxiriga keltiriladi: keyin sotilgani tannarxda qo'shiladi, keyin xarid qilingani ayiriladi.
- Tovar olingan va zaxiraga kirgan, ammo hisob-faktura yozilmagan bo'lsa, foyda oshib ketadi. Zaxira summasi esa to'g'ri.`,
      },
      key: {
        en: `- Remove opening inventory: Dr Cost of sales, Cr Inventory.
- Record closing inventory: Dr Inventory, Cr Cost of sales.
- After both entries, the inventory account shows only closing inventory.
- Inventory has a debit balance because it is an asset.`,
        ru: `- Списать запасы на начало: Дт Себестоимость продаж, Кт Запасы.
- Отразить запасы на конец: Дт Запасы, Кт Себестоимость продаж.
- После обеих записей на счёте запасов остаются только запасы на конец.
- Счёт запасов имеет дебетовое сальдо, так как это актив.`,
        uz: `- Boshlang'ich zaxirani chiqarish: Dt Sotilgan tovar tannarxi, Kt Zaxira.
- Yakuniy zaxirani yozish: Dt Zaxira, Kt Sotilgan tovar tannarxi.
- Ikkala yozuvdan keyin zaxira hisobida faqat yakuniy zaxira qoladi.
- Zaxira aktiv bo'lgani uchun debet qoldiqqa ega.`,
      },
      heading: {
        en: 'Year-end inventory adjustments',
        ru: 'Корректировки запасов на конец года',
        uz: 'Yil oxiridagi zaxira tuzatishlari',
      },
      body: {
        en: `Two adjustments recognise cost of sales and closing inventory at the year end.

First, inventory brought forward is assumed to have been sold or used, so it leaves assets and becomes an expense in cost of sales.

Second, the goods still unsold are taken out of cost of sales and recorded as an asset to carry into next year.

When both are done, the cost of sales account holds purchases, opening inventory and closing inventory, and its balance goes to profit or loss.`,
        ru: `Две корректировки отражают себестоимость продаж и запасы на конец года.

Во-первых, запасы, перешедшие с прошлого года, считаются проданными или использованными, поэтому они выходят из активов и становятся расходом в себестоимости продаж.

Во-вторых, непроданные товары исключаются из себестоимости продаж и отражаются как актив, переходящий на следующий год.

После этого на счёте себестоимости продаж находятся закупки, запасы на начало и запасы на конец, а его сальдо переносится в прибыль или убыток.`,
        uz: `Ikki tuzatish yil oxirida tannarx va yakuniy zaxirani tan oladi.

Birinchidan, o'tgan yildan kelgan zaxira sotilgan yoki ishlatilgan deb hisoblanadi, shuning uchun u aktivlardan chiqib, tannarxda xarajatga aylanadi.

Ikkinchidan, sotilmagan tovarlar tannarxdan chiqarilib, keyingi yilga o'tadigan aktiv sifatida yoziladi.

Shundan so'ng tannarx hisobida xaridlar, boshlang'ich va yakuniy zaxira bo'ladi, uning qoldig'i esa foyda yoki zararga o'tkaziladi.`,
      },
      example: {
        en: `The toy shop at the end of the year.
# Step 1: Remove the opening stock (assumed sold)
  Dr Cost of sales $4,000, Cr Inventory $4,000
# Step 2: Record the closing stock (still unsold)
  Dr Inventory $5,000, Cr Cost of sales $5,000
= The inventory account now shows $5,000, a debit balance, ready for next year.`,
        ru: `Магазин игрушек в конце года.
# Шаг 1: Убираем начальные запасы (считаем проданными)
  Дт Себестоимость $4,000, Кт Запасы $4,000
# Шаг 2: Записываем конечные запасы (ещё не проданы)
  Дт Запасы $5,000, Кт Себестоимость $5,000
= На счёте запасов теперь $5,000, дебетовый остаток, к следующему году.`,
        uz: `O'yinchoq do'koni yil oxirida.
# 1-qadam: Boshlang'ich zaxirani olib tashlaymiz (sotilgan deb)
  Dt Tannarx $4,000, Kt Zaxira $4,000
# 2-qadam: Yakuniy zaxirani yozamiz (hali sotilmagan)
  Dt Zaxira $5,000, Kt Tannarx $5,000
= Zaxira hisobida endi $5,000, debet qoldiq, kelasi yil uchun tayyor.`,
      },
      simple: {
        en: `At the year end two entries update the inventory account.

First, last year's stock is assumed sold, so it moves into cost of sales. Second, the stock still unsold is taken out of cost of sales and shown as an asset. After both, the inventory account shows only this year's closing stock.`,
        ru: `В конце года две проводки обновляют счёт запасов.

Сначала считаем, что прошлогодний товар продан, и переносим его в себестоимость. Затем товар, который ещё не продан, убираем из себестоимости и показываем как актив. После обеих проводок на счёте запасов только конечные запасы этого года.`,
        uz: `Yil oxirida ikki yozuv zaxira hisobini yangilaydi.

Avval o'tgan yilgi tovar sotilgan deb hisoblanadi va tannarxga o'tadi. Keyin hali sotilmagan tovar tannarxdan chiqarilib, aktiv sifatida ko'rsatiladi. Ikkalasidan keyin zaxira hisobida faqat shu yilning yakuniy zaxirasi qoladi.`,
      },
    },
    {
      exam: {
        en: `- Replacement cost is irrelevant. The test is only cost against NRV.
- Sales just after the count can prove NRV: a sale below cost means units are valued at that price.
- Disclose the accounting policy, inventory by category, and the amount carried at NRV.
- Selling commission or expenses reduce NRV.`,
        ru: `- Стоимость замещения не имеет значения. Сравниваются только себестоимость и ЧСР.
- Продажа сразу после инвентаризации может доказать ЧСР: продажа ниже себестоимости означает оценку по этой цене.
- Раскрываются учётная политика, запасы по категориям и сумма, учтённая по ЧСР.
- Комиссия и расходы на продажу уменьшают ЧСР.`,
        uz: `- Almashtirish qiymati ahamiyatsiz. Faqat tannarx va SSQ solishtiriladi.
- Sanashdan keyingi sotuv SSQ ni isbotlashi mumkin: tannarxdan past sotuv shu narxda baholashni bildiradi.
- Hisob siyosati, toifalar bo'yicha zaxira va SSQ da hisobga olingan summa ochib beriladi.
- Komissiya va sotish xarajatlari SSQ ni kamaytiradi.`,
      },
      key: {
        en: `- IAS 2: inventory is valued at the lower of cost and net realisable value (NRV).
- Cost: purchase cost plus conversion cost, to bring goods to their location and condition.
- Include: materials, import duty, freight in, direct labour, fixed and variable production overheads.
- Exclude: selling costs, general storage, abnormal waste, administration.
- NRV: selling price less further costs needed to sell.
- Compare item by item, never on the total.`,
        ru: `- IAS 2: запасы оцениваются по меньшей из себестоимости и чистой стоимости реализации (ЧСР).
- Себестоимость: закупка и переработка, чтобы довести товар до места и состояния.
- Включаются: материалы, пошлина, доставка, прямой труд, постоянные и переменные производственные накладные.
- Не включаются: продажа, обычное хранение, сверхнормативные потери, администрация.
- ЧСР: цена продажи минус дальнейшие затраты на продажу.
- Сравнивать по каждой позиции, а не по итогу.`,
        uz: `- IAS 2: zaxira tannarx va sof sotish qiymatining (SSQ) kichigida baholanadi.
- Tannarx: tovarni joyi va holatiga keltirish uchun xarid va qayta ishlash xarajati.
- Kiradi: materiallar, boj, tashuv, to'g'ridan-to'g'ri mehnat, doimiy va o'zgaruvchan ishlab chiqarish ustamalari.
- Kirmaydi: sotish, oddiy saqlash, g'ayritabiiy yo'qotish, ma'muriy xarajat.
- SSQ: sotish narxi minus sotish uchun qo'shimcha xarajatlar.
- Har bir tovar bo'yicha solishtiring, jami bo'yicha emas.`,
      },
      heading: {
        en: 'Valuing inventory under IAS 2',
        ru: 'Оценка запасов по IAS 2',
        uz: 'Zaxirani IAS 2 bo\'yicha baholash',
      },
      body: {
        en: `Inventory means goods for resale, consumable stores, raw materials and components, work in progress and finished goods.

Cost covers everything spent to bring inventory to its present location and condition. Purchase cost includes materials, import duties and freight. Conversion cost includes direct costs and production overheads, including depreciation of production machinery. Overheads are spread using the normal level of production, so that a quiet period does not overvalue each item.

Storage counts as cost only when it is a necessary part of production, for example a product that must mature before the next stage.

NRV is what would be received after any further costs of making the sale, such as finishing work. Old, damaged or obsolete goods are the usual cases where NRV falls below cost.

The comparison is made for each separate item. Similar groups may be considered together only if all are worth less than cost.`,
        ru: `Запасы — это товары для перепродажи, расходные материалы, сырьё и комплектующие, незавершённое производство и готовая продукция.

Себестоимость охватывает все затраты на доведение запасов до нынешнего места и состояния. Закупочная стоимость включает материалы, пошлины и доставку. Затраты на переработку включают прямые затраты и производственные накладные расходы, в том числе амортизацию производственного оборудования. Накладные расходы распределяются исходя из нормального объёма производства, чтобы в спокойный период единица не завышалась.

Хранение входит в себестоимость, только если оно необходимо для производства, например когда продукт должен созреть перед следующим этапом.

ЧСР — это сумма, которую получат после дальнейших затрат на продажу, например доработки. Обычно ЧСР падает ниже себестоимости у старых, повреждённых или устаревших товаров.

Сравнение делается по каждой позиции. Группы схожих товаров можно рассматривать вместе, только если все они стоят меньше себестоимости.`,
        uz: `Zaxira — qayta sotish uchun tovarlar, sarf materiallari, xomashyo va butlovchilar, tugallanmagan ishlab chiqarish va tayyor mahsulot.

Tannarx zaxirani hozirgi joyi va holatiga keltirish uchun sarflangan hamma narsani qamrab oladi. Xarid qiymati materiallar, boj va tashishni o'z ichiga oladi. Qayta ishlash xarajati to'g'ridan-to'g'ri xarajatlar va ishlab chiqarish ustamalarini, jumladan ishlab chiqarish uskunalari amortizatsiyasini o'z ichiga oladi. Ustamalar me'yoriy ishlab chiqarish hajmi bo'yicha taqsimlanadi, shunda sokin davrda birlik qimmatlashmaydi.

Saqlash faqat ishlab chiqarishning zarur qismi bo'lsa tannarxga kiradi, masalan mahsulot keyingi bosqichdan oldin yetilishi kerak bo'lsa.

SSQ — sotish uchun qo'shimcha xarajatlardan keyin olinadigan summa, masalan tugatish ishlari. Odatda eski, shikastlangan yoki eskirgan tovarlarda SSQ tannarxdan past bo'ladi.

Solishtirish har bir tovar bo'yicha qilinadi. O'xshash guruhlar birga ko'rilishi mumkin, faqat hammasi tannarxdan arzon bo'lsa.`,
      },
      example: {
        en: `A shop checks two items at the year end.
# Item 1: 40 kettles with water-damaged boxes
  Cost: $18 each
  NRV: sell for $25 but must spend $9 on new boxes, so $25 - $9 = $16
  Lower of $18 and $16 is $16: 40 × $16 = $640
# Item 2: 50 mugs
  Cost $3, NRV $7. Lower is cost: 50 × $3 = $150
= Inventory: $640 + $150 = $790
! Common trap: comparing totals. Each line is tested on its own, so a profitable item cannot hide a loss on another.`,
        ru: `Магазин проверяет два товара на конец года.
# Товар 1: 40 чайников с намокшими коробками
  Стоимость: $18 за штуку
  ЧСР: продать за $25, но нужно $9 на новые коробки, значит $25 - $9 = $16
  Меньшее из $18 и $16 — $16: 40 × $16 = $640
# Товар 2: 50 кружек
  Стоимость $3, ЧСР $7. Меньшее — стоимость: 50 × $3 = $150
= Запасы: $640 + $150 = $790
! Частая ошибка: сравнивать итоги. Каждую строку проверяют отдельно, чтобы прибыльный товар не скрыл убыток другого.`,
        uz: `Do'kon yil oxirida ikki tovarni tekshiradi.
# 1-tovar: qutilari ho'l bo'lgan 40 ta choynak
  Qiymati: har biri $18
  SSQ: $25 ga sotiladi, lekin yangi qutiga $9 kerak, demak $25 - $9 = $16
  $18 va $16 dan kichigi $16: 40 × $16 = $640
# 2-tovar: 50 ta krujka
  Qiymati $3, SSQ $7. Kichigi qiymat: 50 × $3 = $150
= Zaxira: $640 + $150 = $790
! Ko'p uchraydigan xato: jamlarni solishtirish. Har bir qator alohida tekshiriladi, foydali tovar boshqasining zararini yashirmasligi uchun.`,
      },
      simple: {
        en: `Never show stock at more than you can get for it. IAS 2 says: use the LOWER of what it cost and what you can sell it for (net realisable value, NRV).

Cost = everything spent to get it ready and on the shelf (price, import duty, delivery in, production costs). NRV = selling price minus any costs still needed to sell it. Check each item separately, not the totals.`,
        ru: `Никогда не показывайте запасы дороже, чем можно за них получить. IAS 2: берите МЕНЬШЕЕ из того, сколько они стоили, и за сколько их можно продать (чистая стоимость реализации, ЧСР).

Стоимость = всё, что потрачено, чтобы товар был готов и на полке (цена, пошлина, доставка к вам, затраты на производство). ЧСР = цена продажи минус затраты, ещё нужные для продажи. Проверяйте каждый товар отдельно, а не итоги.`,
        uz: `Zaxirani hech qachon undan oladigan pulingizdan qimmatroq ko'rsatmang. IAS 2: qiymati va sotish mumkin bo'lgan narxidan (sof sotish qiymati, SSQ) KICHIGINI oling.

Qiymat = tovarni tayyorlash va javonga qo'yish uchun sarflangan hamma narsa (narx, boj, sizga yetkazish, ishlab chiqarish xarajatlari). SSQ = sotish narxi minus sotish uchun hali kerak bo'lgan xarajatlar. Jamlarni emas, har bir tovarni alohida tekshiring.`,
      },
    },
    {
      exam: {
        en: `- Rounding differences in AVCO are normal and can be ignored.
- With no sales before the last purchase, periodic and continuous AVCO give the same result.`,
        ru: `- Небольшие округления в AVCO нормальны, и их можно не учитывать.
- Если до последней закупки не было продаж, периодический и непрерывный AVCO дают одинаковый результат.`,
        uz: `- AVCO da kichik yaxlitlash farqlari odatiy va e'tiborsiz qoldirilishi mumkin.
- Oxirgi xaridgacha sotuv bo'lmasa, davriy va uzluksiz AVCO bir xil natija beradi.`,
      },
      key: {
        en: `- Unit cost: the actual cost of identifiable, high-value items.
- FIFO: oldest goods are sold first, so closing inventory is at the latest prices.
- Periodic AVCO: one average per unit, worked out at the end of the period.
- Continuous AVCO: a new average after each purchase. Sales use the latest average.`,
        ru: `- Фактическая стоимость: для различимых дорогих единиц.
- FIFO: первыми продаются старые товары, поэтому запасы на конец — по последним ценам.
- Периодический AVCO: одна средняя цена, рассчитанная в конце периода.
- Непрерывный AVCO: новая средняя после каждой закупки. Продажи идут по последней средней.`,
        uz: `- Birlik qiymati: aniqlanadigan qimmat tovarlarning haqiqiy qiymati.
- FIFO: avval eski tovar sotiladi, shuning uchun yakuniy zaxira eng so'nggi narxlarda.
- Davriy AVCO: davr oxirida hisoblanadigan bitta o'rtacha narx.
- Uzluksiz AVCO: har xariddan keyin yangi o'rtacha. Sotuvlar oxirgi o'rtachada ketadi.`,
      },
      heading: { en: 'Methods of calculating cost', ru: 'Методы расчёта стоимости', uz: 'Qiymatni hisoblash usullari' },
      body: {
        en: `Unit cost is used only where items are individually identifiable and valuable, such as cars or jewellery.

FIFO, first in first out, assumes the first items received are the first sold. Closing inventory is therefore the most recent purchases, which gives an up-to-date value.

Periodic weighted average cost adds the cost of opening inventory to all purchases in the period, divides by total units, and values both closing inventory and cost of sales at that single average.

Continuous weighted average cost updates the average after every purchase. Each sale is costed at the average at that moment. A schedule in date order is the safest way to work it.`,
        ru: `Фактическая стоимость применяется, только если единицы индивидуально различимы и дороги, например автомобили или ювелирные изделия.

FIFO (первым пришёл — первым ушёл) предполагает, что первыми продаются первые поступившие единицы. Поэтому запасы на конец — это последние закупки, что даёт актуальную оценку.

Периодический средневзвешенный метод складывает стоимость запасов на начало и все закупки периода, делит на общее количество единиц и оценивает запасы и себестоимость продаж по этой одной средней.

Непрерывный средневзвешенный метод обновляет среднюю после каждой закупки. Каждая продажа оценивается по средней на этот момент. Надёжнее всего составить таблицу в порядке дат.`,
        uz: `Birlik qiymati faqat buyumlar alohida aniqlanadigan va qimmat bo'lsa ishlatiladi, masalan avtomobil yoki zargarlik.

FIFO (birinchi kirgan birinchi chiqadi) avval kelgan tovar avval sotiladi deb faraz qiladi. Shuning uchun yakuniy zaxira eng so'nggi xaridlar bo'lib, yangi bahoni beradi.

Davriy o'rtacha tortilgan usul boshlang'ich zaxira va barcha xaridlar qiymatini qo'shadi, jami birlikka bo'ladi va zaxira hamda tannarxni shu bitta o'rtachada baholaydi.

Uzluksiz o'rtacha tortilgan usul har xariddan keyin o'rtachani yangilaydi. Har bir sotuv shu paytdagi o'rtachada baholanadi. Eng ishonchli yo'l — sana tartibida jadval tuzish.`,
      },
      example: {
        en: `A shop has 10 lamps at $8 ($80). It buys 10 more at $10 ($100), sells 12, then buys 5 at $12 ($60). 13 lamps are left.
# FIFO
  The 12 sold are the 10 oldest at $8 and 2 at $10
  Left: 8 at $10 = $80, plus 5 at $12 = $60
  Closing inventory: $80 + $60 = $140
# Periodic AVCO
  Total cost $80 + $100 + $60 = $240 for 25 lamps = $9.60 each
  Closing inventory: 13 × $9.60 = $124.80
# Continuous AVCO
  After the first purchase: $180 / 20 lamps = $9 each
  Sell 12, leaving 8 × $9 = $72
  Buy 5 for $60: closing inventory $72 + $60 = $132
= Same lamps, three different answers. That is why a business must pick one method and stick to it.`,
        ru: `В магазине 10 ламп по $8 ($80). Он покупает ещё 10 по $10 ($100), продаёт 12, затем покупает 5 по $12 ($60). Остаётся 13 ламп.
# FIFO
  Проданы 12: 10 самых старых по $8 и 2 по $10
  Осталось: 8 по $10 = $80, плюс 5 по $12 = $60
  Конечные запасы: $80 + $60 = $140
# Периодическое AVCO
  Вся стоимость $80 + $100 + $60 = $240 за 25 ламп = $9.60 за штуку
  Конечные запасы: 13 × $9.60 = $124.80
# Непрерывное AVCO
  После первой покупки: $180 / 20 ламп = $9 за штуку
  Продаём 12, остаётся 8 × $9 = $72
  Покупаем 5 за $60: конечные запасы $72 + $60 = $132
= Одни и те же лампы, три разных ответа. Поэтому бизнес выбирает один метод и придерживается его.`,
        uz: `Do'konda $8 dan 10 ta chiroq bor ($80). U yana $10 dan 10 ta oladi ($100), 12 tasini sotadi, keyin $12 dan 5 ta oladi ($60). 13 ta chiroq qoladi.
# FIFO
  Sotilgan 12 ta: $8 dan eng eski 10 ta va $10 dan 2 ta
  Qoldi: $10 dan 8 ta = $80, plus $12 dan 5 ta = $60
  Yakuniy zaxira: $80 + $60 = $140
# Davriy AVCO
  Jami qiymat $80 + $100 + $60 = $240, 25 ta chiroq uchun = har biri $9.60
  Yakuniy zaxira: 13 × $9.60 = $124.80
# Uzluksiz AVCO
  Birinchi xariddan keyin: $180 / 20 ta = har biri $9
  12 tasi sotiladi, 8 × $9 = $72 qoladi
  $60 ga 5 ta olinadi: yakuniy zaxira $72 + $60 = $132
= Bir xil chiroqlar, uch xil javob. Shuning uchun biznes bitta usulni tanlab, unga amal qiladi.`,
      },
      simple: {
        en: `When identical items were bought at different prices, you need a rule for which price the sold ones carry.

- FIFO (first in, first out): the oldest are sold first, so what is left is at the newest prices.
- Periodic AVCO: at the end of the period, one average price for everything.
- Continuous AVCO: a new average after every purchase; each sale uses the average at that moment.`,
        ru: `Когда одинаковые товары куплены по разным ценам, нужно правило, по какой цене списывать проданное.

- FIFO (первым пришёл — первым ушёл): сначала продаются самые старые, поэтому остаток — по самым новым ценам.
- Периодическое AVCO: в конце периода одна средняя цена на всё.
- Непрерывное AVCO: новая средняя после каждой покупки; каждая продажа идёт по средней на тот момент.`,
        uz: `Bir xil tovarlar turli narxda olinganda, sotilganlari qaysi narxda hisobdan chiqishi uchun qoida kerak.

- FIFO (birinchi kelgan — birinchi ketadi): eng eskisi avval sotiladi, qolgani eng yangi narxlarda.
- Davriy AVCO: davr oxirida hamma narsa uchun bitta o'rtacha narx.
- Uzluksiz AVCO: har bir xariddan keyin yangi o'rtacha; har bir sotuv o'sha paytdagi o'rtacha bilan.`,
      },
    },
    {
      exam: {
        en: `- Prices rising: FIFO gives higher closing inventory and profit than AVCO, and lower cost of sales.
- Prices falling: FIFO gives lower closing inventory and profit than AVCO.
- Inventory left out of a count is added at the lower of cost and NRV, which raises profit by that amount.
- Inventory records exist for financial reporting because they give the quantity and cost for the statements.`,
        ru: `- Цены растут: при FIFO запасы и прибыль выше, чем при AVCO, а себестоимость продаж ниже.
- Цены падают: при FIFO запасы и прибыль ниже, чем при AVCO.
- Запасы, пропущенные при подсчёте, добавляются по меньшей из себестоимости и ЧСР, и прибыль растёт на эту сумму.
- Для отчётности записи о запасах дают количество и стоимость для финансовых отчётов.`,
        uz: `- Narxlar oshganda: FIFO da zaxira va foyda AVCO dan yuqori, tannarx esa past.
- Narxlar tushganda: FIFO da zaxira va foyda AVCO dan past.
- Sanashda tushib qolgan zaxira tannarx va SSQ ning kichigida qo'shiladi va foyda shu summaga oshadi.
- Hisobot uchun zaxira yozuvlari moliyaviy hisobotga miqdor va qiymatni beradi.`,
      },
      key: {
        en: `- Overvalued inventory: assets too high, cost of sales too low, profit too high.
- Undervalued inventory: assets too low, cost of sales too high, profit too low.
- Choose a method and apply it consistently. Do not switch to manage profit.
- Period-end records: one count at the year end, cheaper to run.
- Continuous records: count lines in turn, better control, less year-end work.`,
        ru: `- Завышенные запасы: активы выше, себестоимость ниже, прибыль выше.
- Заниженные запасы: активы ниже, себестоимость выше, прибыль ниже.
- Выбрав метод, применяйте его последовательно. Нельзя менять его ради прибыли.
- Учёт на конец периода: один подсчёт в конце года, дешевле.
- Непрерывный учёт: позиции считаются по очереди, лучше контроль, меньше работы в конце года.`,
        uz: `- Oshirilgan zaxira: aktiv yuqori, tannarx past, foyda yuqori.
- Kamaytirilgan zaxira: aktiv past, tannarx yuqori, foyda past.
- Usulni tanlab, izchil qo'llang. Foydani boshqarish uchun almashtirmang.
- Davr oxiri yozuvlari: yil oxirida bir marta sanash, arzonroq.
- Uzluksiz yozuvlar: tovarlar navbat bilan sanaladi, nazorat yaxshi, yil oxirida ish kam.`,
      },
      heading: {
        en: 'Effect on profit, and inventory records',
        ru: 'Влияние на прибыль и учёт запасов',
        uz: 'Foydaga ta\'siri va zaxira yozuvlari',
      },
      body: {
        en: `Different methods give different closing inventory figures, which change both profit and assets. That is why a method must be applied consistently.

Closing inventory is deducted in cost of sales, so each extra dollar of closing inventory adds a dollar to profit.

With period-end records, inventory is counted and compared with records at the year end. Even a business with continuous records still needs some physical counting to check its figures.

With continuous records, a sample of lines is counted each week or month until every line has been covered. This gives better information, avoids too much of some lines and too little of others, and reduces year-end work.`,
        ru: `Разные методы дают разные суммы запасов на конец, что меняет и прибыль, и активы. Поэтому метод должен применяться последовательно.

Запасы на конец вычитаются в себестоимости продаж, поэтому каждый лишний доллар запасов добавляет доллар к прибыли.

При учёте на конец периода запасы пересчитываются и сверяются с записями в конце года. Даже при непрерывном учёте нужен выборочный физический подсчёт для проверки цифр.

При непрерывном учёте каждую неделю или месяц пересчитывается часть позиций, пока не будут охвачены все. Это даёт лучшую информацию, избавляет от излишков и нехватки отдельных позиций и сокращает работу в конце года.`,
        uz: `Turli usullar yakuniy zaxiraning turli summalarini beradi, bu foyda va aktivlarni o'zgartiradi. Shuning uchun usul izchil qo'llanishi kerak.

Yakuniy zaxira tannarxdan ayiriladi, shuning uchun zaxiraning har bir ortiqcha dollari foydaga bir dollar qo'shadi.

Davr oxiri yozuvlarida zaxira yil oxirida sanaladi va yozuvlar bilan solishtiriladi. Uzluksiz yozuvlar bo'lsa ham, raqamlarni tekshirish uchun qisman jismoniy sanash kerak.

Uzluksiz yozuvlarda har hafta yoki oyda tovarlarning bir qismi sanaladi, toki hammasi qamrab olinguncha. Bu yaxshiroq axborot beradi, ba'zi tovarlarning ortiqchasi va boshqalarining kamligini oldini oladi va yil oxiri ishini kamaytiradi.`,
      },
      example: {
        en: `A shop counts its stock as $5,500, but it is really $5,000.
# Effect this year
  Assets: $500 too high
  Cost of sales: $500 too low
  Profit: $500 too high
# Effect next year
  Opening inventory is $500 too high, so next year's cost of sales is $500 too high and profit $500 too low
= Over the two years the error cancels out, but each year on its own is wrong.`,
        ru: `Магазин насчитал запасы на $5,500, а на самом деле их $5,000.
# Влияние в этом году
  Активы: завышены на $500
  Себестоимость: занижена на $500
  Прибыль: завышена на $500
# Влияние в следующем году
  Начальные запасы завышены на $500, поэтому себестоимость следующего года завышена на $500, а прибыль занижена на $500
= За два года ошибка гасится, но каждый год по отдельности неверен.`,
        uz: `Do'kon zaxirasini $5,500 deb sanadi, aslida $5,000.
# Bu yilgi ta'sir
  Aktivlar: $500 ko'p
  Tannarx: $500 kam
  Foyda: $500 ko'p
# Kelasi yilgi ta'sir
  Boshlang'ich zaxira $500 ko'p, shuning uchun kelasi yil tannarxi $500 ko'p, foyda $500 kam
= Ikki yilda xato bir-birini yopadi, lekin har bir yil alohida noto'g'ri.`,
      },
      simple: {
        en: `Closing inventory is taken away inside cost of sales. So if closing inventory is too HIGH, cost of sales is too low and profit is too high, dollar for dollar. Too low works the other way.

That is why a method must be used consistently. Businesses either count everything once at the year end (period-end records) or count a few lines every week until all are covered (continuous records).`,
        ru: `Конечные запасы вычитаются внутри себестоимости. Поэтому если конечные запасы ЗАВЫШЕНЫ, себестоимость занижена, а прибыль завышена, доллар в доллар. Заниженные запасы — наоборот.

Поэтому метод нужно применять последовательно. Бизнес либо считает всё один раз в конце года (периодический учёт), либо каждую неделю считает несколько позиций, пока не охватит все (непрерывный учёт).`,
        uz: `Yakuniy zaxira tannarx ichida ayiriladi. Shuning uchun yakuniy zaxira juda KATTA bo'lsa, tannarx kam, foyda esa ko'p bo'ladi, dollarga dollar. Kam bo'lsa — aksincha.

Shuning uchun usul izchil qo'llanishi kerak. Biznes hamma narsani yil oxirida bir marta sanaydi (davriy hisob) yoki har hafta bir nechta qatorni hammasi qamralguncha sanaydi (uzluksiz hisob).`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Inventory', ru: 'Запасы', uz: 'Tovar zaxiralari' },
      definition: {
        en: 'Goods held for sale, materials and parts for making them, and partly finished goods.',
        ru: 'Товары для продажи, материалы и детали для их изготовления и незавершённая продукция.',
        uz: 'Sotish uchun tovarlar, ularni tayyorlash uchun materiallar va qismlar hamda tugallanmagan mahsulot.',
      },
      example: {
        en: 'The phones on a phone shop\'s shelves, waiting to be sold.',
        ru: 'Телефоны на полках магазина, которые ждут продажи.',
        uz: 'Do\'kon javonida sotilishni kutayotgan telefonlar.',
      },
    },
    {
      term: { en: 'Cost of sales', ru: 'Себестоимость продаж', uz: 'Sotilgan tovar tannarxi' },
      definition: {
        en: 'Opening inventory plus purchases less closing inventory.',
        ru: 'Запасы на начало плюс закупки минус запасы на конец.',
        uz: 'Boshlang\'ich zaxira plus xaridlar minus yakuniy zaxira.',
      },
      example: {
        en: 'Start $4,000 + bought $30,000 - left at the end $5,000 = $29,000.',
        ru: 'Начало $4,000 + куплено $30,000 - осталось на конец $5,000 = $29,000.',
        uz: 'Boshi $4,000 + olingan $30,000 - oxirida qolgan $5,000 = $29,000.',
      },
    },
    {
      term: { en: 'Gross profit', ru: 'Валовая прибыль', uz: 'Yalpi foyda' },
      definition: {
        en: 'Revenue less cost of sales.',
        ru: 'Выручка минус себестоимость продаж.',
        uz: 'Tushum minus sotilgan tovar tannarxi.',
      },
      example: {
        en: 'Revenue $45,000 - cost of sales $29,000 = gross profit $16,000.',
        ru: 'Выручка $45,000 - себестоимость $29,000 = валовая прибыль $16,000.',
        uz: 'Tushum $45,000 - tannarx $29,000 = yalpi foyda $16,000.',
      },
    },
    {
      term: { en: 'Net realisable value (NRV)', ru: 'Чистая стоимость реализации (ЧСР)', uz: 'Sof sotish qiymati (SSQ)' },
      definition: {
        en: 'Selling price less any further costs needed to make the sale.',
        ru: 'Цена продажи минус дальнейшие затраты, нужные для продажи.',
        uz: 'Sotish narxi minus sotish uchun kerak bo\'lgan qo\'shimcha xarajatlar.',
      },
      example: {
        en: 'A damaged kettle sells for $25 after $9 of repairs: NRV = $16.',
        ru: 'Повреждённый чайник продаётся за $25 после ремонта за $9: ЧСР = $16.',
        uz: 'Shikastlangan choynak $9 ta\'mirdan keyin $25 ga sotiladi: SSQ = $16.',
      },
    },
    {
      term: { en: 'Work in progress', ru: 'Незавершённое производство', uz: 'Tugallanmagan ishlab chiqarish' },
      definition: { en: 'Partly finished goods.', ru: 'Частично готовая продукция.', uz: 'Qisman tayyor mahsulot.' },
      example: {
        en: 'A tailor\'s half-sewn suits at the year end.',
        ru: 'Наполовину сшитые костюмы портного на конец года.',
        uz: 'Tikuvchining yil oxiridagi yarim tikilgan kostyumlari.',
      },
    },
    {
      term: { en: 'FIFO', ru: 'FIFO', uz: 'FIFO' },
      definition: {
        en: 'First in, first out: the oldest items are treated as sold first.',
        ru: 'Первым пришёл — первым ушёл: первыми считаются проданными самые старые единицы.',
        uz: 'Birinchi kirgan birinchi chiqadi: eng eski tovarlar avval sotilgan deb hisoblanadi.',
      },
      example: {
        en: 'Bread baked on Monday is sold before bread baked on Tuesday.',
        ru: 'Хлеб, испечённый в понедельник, продают раньше вторничного.',
        uz: 'Dushanba kuni pishirilgan non seshanbadagidan oldin sotiladi.',
      },
    },
    {
      term: { en: 'AVCO', ru: 'AVCO', uz: 'AVCO' },
      definition: {
        en: 'Weighted average cost, worked out periodically or continuously.',
        ru: 'Средневзвешенная стоимость, рассчитываемая периодически или непрерывно.',
        uz: 'Davriy yoki uzluksiz hisoblanadigan o\'rtacha tortilgan qiymat.',
      },
      example: {
        en: '10 units at $8 and 10 at $10 give an average of $9 each.',
        ru: '10 штук по $8 и 10 по $10 дают среднюю $9 за штуку.',
        uz: '$8 dan 10 ta va $10 dan 10 ta o\'rtacha $9 beradi.',
      },
    },
    {
      term: { en: 'Periodic inventory records', ru: 'Периодический учёт запасов', uz: 'Davriy zaxira yozuvlari' },
      definition: {
        en: 'Inventory is counted and valued at the end of the period.',
        ru: 'Запасы пересчитываются и оцениваются в конце периода.',
        uz: 'Zaxira davr oxirida sanaladi va baholanadi.',
      },
      example: {
        en: 'A shop closes on 31 December and counts every item on its shelves.',
        ru: 'Магазин закрывается 31 декабря и пересчитывает каждый товар на полках.',
        uz: 'Do\'kon 31 dekabrda yopilib, javondagi har bir tovarni sanaydi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter05;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter05.id] = chapter05;
