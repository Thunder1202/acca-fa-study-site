'use strict';

const chapter05 = {
  id: 'chapter-05',
  titles: { en: 'Inventory', ru: 'Запасы', uz: 'Tovar zaxiralari' },
  objectives: [
    { en: 'Record cost of sales and closing inventory', ru: 'Отражать себестоимость продаж и запасы на конец периода', uz: 'Sotilgan tovar tannarxi va yakuniy zaxirani qayd etish' },
    { en: 'Value inventory under IAS 2', ru: 'Оценивать запасы по IAS 2', uz: 'Zaxirani IAS 2 bo\'yicha baholash' },
    { en: 'Identify the costs included in inventory', ru: 'Определять затраты, включаемые в стоимость запасов', uz: 'Zaxira qiymatiga kiradigan xarajatlarni aniqlash' },
    { en: 'Calculate inventory cost using FIFO and AVCO', ru: 'Рассчитывать стоимость запасов методами FIFO и AVCO', uz: 'Zaxira qiymatini FIFO va AVCO usullarida hisoblash' },
    { en: 'Explain how inventory valuation affects profit and assets', ru: 'Объяснять влияние оценки запасов на прибыль и активы', uz: 'Zaxirani baholash foyda va aktivlarga qanday ta\'sir qilishini tushuntirish' },
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
        en: `In its second year Madina's Mart starts with $4,000 of inventory, buys $30,000 more and has $5,000 left at the year end. Cost of sales is $4,000 + $30,000 - $5,000 = $29,000. With revenue of $45,000, gross profit is $16,000. The $5,000 of unsold goods stays on the statement of financial position as an asset.`,
        ru: `Во второй год у Madina's Mart запасы на начало составляют $4,000, закупки $30,000, а на конец года остаётся $5,000. Себестоимость продаж: $4,000 + $30,000 - $5,000 = $29,000. При выручке $45,000 валовая прибыль равна $16,000. Непроданные товары на $5,000 остаются в отчёте о финансовом положении как актив.`,
        uz: `Ikkinchi yilda Madina's Mart $4,000 zaxira bilan boshlaydi, yana $30,000 ga xarid qiladi va yil oxirida $5,000 qoladi. Tannarx: $4,000 + $30,000 - $5,000 = $29,000. $45,000 tushumda yalpi foyda $16,000. Sotilmagan $5,000 tovar moliyaviy holat hisobotida aktiv bo'lib qoladi.`,
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
        en: `At the end of year two Madina posts Dr Cost of sales $4,000, Cr Inventory $4,000 to remove the opening goods. Then she posts Dr Inventory $5,000, Cr Cost of sales $5,000 for the goods still on her shelves. The inventory account now shows $5,000, ready for next year.`,
        ru: `В конце второго года Мадина делает запись Дт Себестоимость $4,000, Кт Запасы $4,000, чтобы списать запасы на начало. Затем Дт Запасы $5,000, Кт Себестоимость $5,000 на товары, оставшиеся на полках. Теперь на счёте запасов $5,000, готовые к следующему году.`,
        uz: `Ikkinchi yil oxirida Madina boshlang'ich tovarni chiqarish uchun Dt Tannarx $4,000, Kt Zaxira $4,000 yozadi. So'ng javondagi tovar uchun Dt Zaxira $5,000, Kt Tannarx $5,000 yozadi. Endi zaxira hisobida keyingi yil uchun $5,000 turibdi.`,
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
- Include: materials, import duty, freight in, direct labour, production overheads.
- Exclude: selling costs, general storage, abnormal waste, administration.
- NRV: selling price less further costs needed to sell.
- Compare item by item, never on the total.`,
        ru: `- IAS 2: запасы оцениваются по меньшей из себестоимости и чистой стоимости реализации (ЧСР).
- Себестоимость: закупка и переработка, чтобы довести товар до места и состояния.
- Включаются: материалы, пошлина, доставка к вам, прямой труд, производственные накладные расходы.
- Не включаются: продажа, обычное хранение, сверхнормативные потери, администрация.
- ЧСР: цена продажи минус дальнейшие затраты на продажу.
- Сравнивать по каждой позиции, а не по итогу.`,
        uz: `- IAS 2: zaxira tannarx va sof sotish qiymatining (SSQ) kichigida baholanadi.
- Tannarx: tovarni joyi va holatiga keltirish uchun xarid va qayta ishlash xarajati.
- Kiradi: materiallar, boj, kelish tashuvi, to'g'ridan-to'g'ri mehnat, ishlab chiqarish ustamalari.
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
        en: `Madina has 40 kettles that cost $18 each. Their boxes got wet. She can still sell them for $25 each, but must spend $9 each on repacking. NRV is $25 - $9 = $16, which is below cost, so she values them at 40 × $16 = $640. Her 50 mugs cost $3 and sell for $7, so they stay at cost: $150. She does not add everything together and compare totals.`,
        ru: `У Мадины 40 чайников по себестоимости $18. Их коробки намокли. Она всё ещё может продать их по $25, но должна потратить $9 на штуку на переупаковку. ЧСР: $25 - $9 = $16, это ниже себестоимости, поэтому оценка 40 × $16 = $640. 50 кружек стоят $3 и продаются по $7, поэтому остаются по себестоимости: $150. Она не складывает всё и не сравнивает итоги.`,
        uz: `Madinada tannarxi $18 dan 40 ta choynak bor. Qutilari ho'l bo'lgan. U ularni hali $25 dan sota oladi, lekin har biriga qayta qadoqlash uchun $9 sarflashi kerak. SSQ: $25 - $9 = $16, bu tannarxdan past, demak baho 40 × $16 = $640. 50 ta krujka $3 turadi va $7 dan sotiladi, shuning uchun tannarxda qoladi: $150. U hammasini qo'shib, jamini solishtirmaydi.`,
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
      heading: {
        en: 'Methods of calculating cost',
        ru: 'Методы расчёта стоимости',
        uz: 'Qiymatni hisoblash usullari',
      },
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
        en: `Madina starts with 10 lamps at $8 ($80). She buys 10 at $10 ($100), sells 12, then buys 5 at $12 ($60). 13 lamps remain.

FIFO: the 8 left from the $10 batch plus the 5 at $12 = $80 + $60 = $140.

Periodic AVCO: $240 / 25 lamps = $9.60, so 13 × $9.60 = $124.80.

Continuous AVCO: after the first purchase the average is $180 / 20 = $9. Selling 12 leaves 8 × $9 = $72. Adding $60 gives $132.`,
        ru: `У Мадины на начало 10 ламп по $8 ($80). Она покупает 10 по $10 ($100), продаёт 12, затем покупает 5 по $12 ($60). Остаётся 13 ламп.

FIFO: 8 из партии по $10 плюс 5 по $12 = $80 + $60 = $140.

Периодический AVCO: $240 / 25 ламп = $9.60, значит 13 × $9.60 = $124.80.

Непрерывный AVCO: после первой закупки средняя $180 / 20 = $9. После продажи 12 остаётся 8 × $9 = $72. С добавлением $60 получаем $132.`,
        uz: `Madinada boshida $8 dan 10 ta chiroq bor ($80). U $10 dan 10 ta sotib oladi ($100), 12 tasini sotadi, keyin $12 dan 5 ta oladi ($60). 13 ta chiroq qoladi.

FIFO: $10 lik partiyadan 8 ta va $12 dan 5 ta = $80 + $60 = $140.

Davriy AVCO: $240 / 25 chiroq = $9.60, demak 13 × $9.60 = $124.80.

Uzluksiz AVCO: birinchi xariddan keyin o'rtacha $180 / 20 = $9. 12 ta sotilgach 8 × $9 = $72 qoladi. $60 qo'shilsa $132 bo'ladi.`,
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
        en: `If Madina wrongly counts $5,500 instead of $5,000 of closing inventory, her assets are $500 too high and cost of sales is $500 too low, so profit is $500 too high. Next year the error reverses, because her opening inventory is $500 too high.`,
        ru: `Если Мадина ошибочно посчитает запасы на конец в $5,500 вместо $5,000, активы будут завышены на $500, а себестоимость занижена на $500, значит, прибыль завышена на $500. В следующем году ошибка развернётся, так как запасы на начало будут завышены на $500.`,
        uz: `Agar Madina yakuniy zaxirani $5,000 o'rniga xato $5,500 deb sanasa, aktivlar $500 ga yuqori, tannarx $500 ga past bo'ladi, demak foyda $500 ga yuqori. Keyingi yili xato teskari ishlaydi, chunki boshlang'ich zaxira $500 ga yuqori bo'ladi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Cost of sales', ru: 'Себестоимость продаж', uz: 'Sotilgan tovar tannarxi' }, definition: { en: 'Opening inventory plus purchases less closing inventory.', ru: 'Запасы на начало плюс закупки минус запасы на конец.', uz: 'Boshlang\'ich zaxira plus xaridlar minus yakuniy zaxira.' } },
    { term: { en: 'Net realisable value (NRV)', ru: 'Чистая стоимость реализации (ЧСР)', uz: 'Sof sotish qiymati (SSQ)' }, definition: { en: 'Selling price less any further costs needed to make the sale.', ru: 'Цена продажи минус дальнейшие затраты, нужные для продажи.', uz: 'Sotish narxi minus sotish uchun kerak bo\'lgan qo\'shimcha xarajatlar.' } },
    { term: { en: 'Work in progress', ru: 'Незавершённое производство', uz: 'Tugallanmagan ishlab chiqarish' }, definition: { en: 'Partly finished goods.', ru: 'Частично готовая продукция.', uz: 'Qisman tayyor mahsulot.' } },
    { term: { en: 'FIFO', ru: 'FIFO', uz: 'FIFO' }, definition: { en: 'First in, first out: the oldest items are treated as sold first.', ru: 'Первым пришёл — первым ушёл: первыми считаются проданными самые старые единицы.', uz: 'Birinchi kirgan birinchi chiqadi: eng eski tovarlar avval sotilgan deb hisoblanadi.' } },
    { term: { en: 'AVCO', ru: 'AVCO', uz: 'AVCO' }, definition: { en: 'Weighted average cost, worked out periodically or continuously.', ru: 'Средневзвешенная стоимость, рассчитываемая периодически или непрерывно.', uz: 'Davriy yoki uzluksiz hisoblanadigan o\'rtacha tortilgan qiymat.' } },
    { term: { en: 'Periodic inventory records', ru: 'Периодический учёт запасов', uz: 'Davriy zaxira yozuvlari' }, definition: { en: 'Inventory is counted and valued at the end of the period.', ru: 'Запасы пересчитываются и оцениваются в конце периода.', uz: 'Zaxira davr oxirida sanaladi va baholanadi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter05;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter05.id] = chapter05;
