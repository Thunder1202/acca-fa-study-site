'use strict';

const chapter20 = {
  id: 'chapter-20',
  titles: {
    en: 'Consolidated statement of profit or loss and associates',
    ru: 'Консолидированный отчёт о прибыли или убытке и ассоциированные компании',
    uz: 'Konsolidatsiyalangan foyda yoki zarar hisoboti va assotsiatsiyalangan kompaniyalar',
  },
  objectives: [
    {
      en: 'Prepare a consolidated statement of profit or loss or extracts from it',
      ru: 'Составлять консолидированный отчёт о прибыли или убытке или его части',
      uz: 'Konsolidatsiyalangan foyda yoki zarar hisoboti yoki uning qismlarini tuzish',
    },
    {
      en: 'Adjust for intra-group trading, unrealised profit and mid-year acquisitions',
      ru: 'Корректировать внутригрупповую торговлю, нереализованную прибыль и покупку в середине года',
      uz: 'Guruh ichidagi savdo, amalga oshmagan foyda va yil o\'rtasidagi xaridni tuzatish',
    },
    {
      en: 'Calculate the profit attributable to the non-controlling interest',
      ru: 'Рассчитывать прибыль, относящуюся к неконтролирующей доле',
      uz: 'Nazoratsiz ulushga tegishli foydani hisoblash',
    },
    {
      en: 'Define and identify an associate',
      ru: 'Определять и распознавать ассоциированную компанию',
      uz: 'Assotsiatsiyalangan kompaniyani ta\'riflash va aniqlash',
    },
    {
      en: 'Describe the principle of equity accounting',
      ru: 'Описывать принцип метода долевого участия',
      uz: 'Ulushli qatnashish usuli tamoyilini tavsiflash',
    },
  ],
  sections: [
    {
      key: {
        en: `- Add the parent's and subsidiary's income and expenses in full, line by line.
- Take intra-group sales out of revenue and the same amount out of cost of sales.
- Add any unrealised profit in closing inventory to cost of sales.
- Show profit for the year, then split it: owners of the parent and non-controlling interest.
- NCI share = NCI % × subsidiary's profit after tax, less NCI % of any PURP if the subsidiary sold the goods.
- Dividends from a subsidiary to the parent cancel out. They are not group income.`,
        ru: `- Доходы и расходы материнской и дочерней складываются полностью построчно.
- Внутригрупповые продажи вычитаются из выручки, та же сумма — из себестоимости.
- Нереализованная прибыль в запасах на конец прибавляется к себестоимости.
- Покажите прибыль за год и разделите её: собственникам материнской и неконтролирующей доле.
- Доля NCI = доля NCI × прибыль дочерней после налога минус доля NCI в PURP, если продавала дочерняя.
- Дивиденды дочерней материнской взаимно исключаются. Это не доход группы.`,
        uz: `- Bosh va sho'baning daromad va xarajatlari to'liq, qatorma-qator qo'shiladi.
- Guruh ichidagi sotuv tushumdan, o'sha summa tannarxdan ayiriladi.
- Yakuniy zaxiradagi amalga oshmagan foyda tannarxga qo'shiladi.
- Yil foydasini ko'rsating va bo'ling: bosh kompaniya egalariga va nazoratsiz ulushga.
- NCI ulushi = NCI ulushi × sho'baning soliqdan keyingi foydasi, sho'ba sotgan bo'lsa PURP ning NCI ulushi ayiriladi.
- Sho'badan boshga dividendlar o'zaro chiqariladi. Ular guruh daromadi emas.`,
      },
      exam: {
        en: `- If the parent sold the goods, the PURP does not affect the NCI. The parent bears it all.
- Cancel the full intra-group sale, whether or not the goods are still held. The PURP is only on goods still held.
- Unrealised profit increases cost of sales, which reduces gross profit.
- Group revenue = P revenue + S revenue - intra-group sales. Group cost of sales = P + S - intra-group purchases + PURP.
- Profit attributable to the owners of the parent = group profit for the year - NCI share. Group profit = parent's profit + subsidiary's post-acquisition profit - PURP.
- "Inventory costing the parent $48,000, bought from the subsidiary at a 25% mark-up": the buyer's cost IS the seller's selling price, so the profit inside it is $48,000 x 25/125 = $9,600.`,
        ru: `- Если продавала материнская, PURP не влияет на NCI. Её полностью несёт материнская.
- Внутригрупповая продажа исключается полностью, независимо от того, остался ли товар. PURP — только на оставшийся товар.
- Нереализованная прибыль увеличивает себестоимость и уменьшает валовую прибыль.
- Выручка группы = выручка P + выручка S - внутригрупповые продажи. Себестоимость = P + S - внутригрупповые закупки + PURP.
- Прибыль, приходящаяся на владельцев материнской компании = прибыль группы за год - доля NCI. Прибыль группы = прибыль материнской + прибыль дочерней после покупки - PURP.
- «Запасы стоимостью $48,000 для материнской, купленные у дочерней с наценкой 25%»: себестоимость покупателя И ЕСТЬ цена продажи продавца, поэтому прибыль в ней $48,000 x 25/125 = $9,600.`,
        uz: `- Bosh sotgan bo'lsa, PURP NCI ga ta'sir qilmaydi. Uni to'liq bosh ko'taradi.
- Guruh ichidagi sotuv tovar qolgan-qolmaganidan qat'i nazar to'liq chiqariladi. PURP faqat qolgan tovarga.
- Amalga oshmagan foyda tannarxni oshiradi va yalpi foydani kamaytiradi.
- Guruh tushumi = P tushumi + S tushumi - guruh ichidagi sotuv. Tannarx = P + S - guruh ichidagi xarid + PURP.
- Ona kompaniya egalariga tegishli foyda = guruhning yillik foydasi - NCI ulushi. Guruh foydasi = ona kompaniya foydasi + sho'ba korxonaning sotib olingandan keyingi foydasi - PURP.
- "Ona kompaniyaga $48,000 ga tushgan, sho'ba korxonadan 25% ustama bilan olingan zaxira": xaridor tannarxi sotuvchining sotuv narxining O'ZI, shuning uchun undagi foyda $48,000 x 25/125 = $9,600.`,
      },
      heading: {
        en: 'The consolidated statement of profit or loss',
        ru: 'Консолидированный отчёт о прибыли или убытке',
        uz: 'Konsolidatsiyalangan foyda yoki zarar hisoboti',
      },
      body: {
        en: `The consolidated statement of profit or loss shows the performance of the whole group as if it were one entity. It follows the same principles as the consolidated statement of financial position, and many of its adjustments are the profit or loss side of ones you already know.

Start by adding together the revenue and expenses of the parent and the subsidiary, line by line and in full. As with assets and liabilities, nothing is cut down to the parent's percentage at this stage.

Next remove intra-group trading. A sale from one group company to another appears in the seller's revenue and the buyer's cost of sales. To the group it is just goods moving from one shop to another, so the full amount is taken out of both revenue and cost of sales. Then deal with unrealised profit on any of those goods still in inventory at the year end. Adding it to cost of sales reduces closing inventory to its cost to the group and removes the profit that has not yet been earned from outsiders.

Finally, after profit for the year, show how the profit is shared. The non-controlling interest is its percentage of the subsidiary's profit after tax. If the subsidiary made the sale that created unrealised profit, the NCI bears its share of that adjustment as well. The rest is attributable to the owners of the parent.`,
        ru: `Консолидированный отчёт о прибыли или убытке показывает результаты всей группы так, как если бы это было одно предприятие. Он строится по тем же принципам, что и консолидированный отчёт о финансовом положении, и многие корректировки — это сторона прибыли или убытка тех, что вы уже знаете.

Сначала сложите выручку и расходы материнской и дочерней построчно и полностью. Как и с активами и обязательствами, на этом этапе ничего не уменьшается до доли материнской.

Затем исключите внутригрупповую торговлю. Продажа одной компании группы другой есть в выручке продавца и в себестоимости покупателя. Для группы это лишь перемещение товара из одного магазина в другой, поэтому вся сумма вычитается и из выручки, и из себестоимости. Затем учтите нереализованную прибыль на товаре, оставшемся в запасах на конец года. Прибавление её к себестоимости уменьшает запасы до их стоимости для группы и убирает прибыль, ещё не полученную от внешних покупателей.

Наконец, после прибыли за год покажите, как она делится. Неконтролирующей доле принадлежит её процент прибыли дочерней после налога. Если продажу, создавшую нереализованную прибыль, сделала дочерняя, NCI несёт и свою долю этой корректировки. Остальное относится к собственникам материнской.`,
        uz: `Konsolidatsiyalangan foyda yoki zarar hisoboti butun guruh natijasini bitta korxona kabi ko'rsatadi. U konsolidatsiyalangan moliyaviy holat hisoboti bilan bir xil tamoyillarga asoslanadi, ko'p tuzatishlar siz bilganlarining foyda yoki zarar tomoni.

Avval bosh va sho'baning tushum va xarajatlarini qatorma-qator, to'liq qo'shing. Aktiv va majburiyatlardagi kabi bu bosqichda hech narsa bosh ulushigacha kamaytirilmaydi.

So'ng guruh ichidagi savdoni chiqaring. Bir guruh kompaniyasining boshqasiga sotuvi sotuvchi tushumida va xaridor tannarxida bor. Guruh uchun bu tovarning bir do'kondan boshqasiga ko'chishi, shuning uchun butun summa tushumdan ham, tannarxdan ham ayiriladi. So'ng yil oxirida zaxirada qolgan tovardagi amalga oshmagan foydani hisobga oling. Uni tannarxga qo'shish zaxirani guruh uchun tannarxiga tushiradi va tashqaridan hali olinmagan foydani olib tashlaydi.

Nihoyat, yil foydasidan keyin u qanday bo'linishini ko'rsating. Nazoratsiz ulushga sho'baning soliqdan keyingi foydasidagi foizi tegishli. Amalga oshmagan foydani yaratgan sotuvni sho'ba qilgan bo'lsa, NCI bu tuzatishdan ham o'z ulushini ko'taradi. Qolgani bosh kompaniya egalariga tegishli.`,
      },
      example: {
        en: `Shop Co owns 80% of Bake Co from 1 April. Year end 31 December.
# Revenue
  Shop Co $20,000 + Bake Co (since 1 April) $6,000 - bread sold to Shop Co $600 = $25,400
# Cost of sales
  $14,600 + $3,600 - $600 + unrealised profit $100 = $17,700
# NCI share of profit
  Bake Co's profit since 1 April: $600
  Bake Co was the seller, so take off the PURP: $600 - $100 = $500
  20% x $500 = $100
= Group revenue $25,400; cost of sales $17,700; NCI $100.`,
        ru: `Shop Co владеет 80% Bake Co с 1 апреля. Конец года 31 декабря.
# Выручка
  Shop Co $20,000 + Bake Co (с 1 апреля) $6,000 - хлеб, проданный Shop Co, $600 = $25,400
# Себестоимость
  $14,600 + $3,600 - $600 + нереализованная прибыль $100 = $17,700
# Доля NCI в прибыли
  Прибыль Bake Co с 1 апреля: $600
  Продавала Bake Co, вычитаем PURP: $600 - $100 = $500
  20% x $500 = $100
= Выручка группы $25,400; себестоимость $17,700; NCI $100.`,
        uz: `Shop Co 1 apreldan Bake Co ning 80% iga ega. Yil oxiri 31 dekabr.
# Tushum
  Shop Co $20,000 + Bake Co (1 apreldan) $6,000 - Shop Co ga sotilgan non $600 = $25,400
# Tannarx
  $14,600 + $3,600 - $600 + amalga oshmagan foyda $100 = $17,700
# NCI ning foydadagi ulushi
  Bake Co ning 1 apreldan foydasi: $600
  Sotuvchi Bake Co, PURP ni ayiramiz: $600 - $100 = $500
  20% x $500 = $100
= Guruh tushumi $25,400; tannarx $17,700; NCI $100.`,
      },
      simple: {
        en: `The group statement of profit or loss shows the whole group's year as if it were one business.

- Add the parent's and subsidiary's income and costs line by line, in FULL.
- Sales between group companies are just goods moving between the group's own shops: take the whole amount out of revenue AND out of cost of sales.
- If some of those goods are still unsold at the year end, add the unrealised profit (PURP) to cost of sales.

After profit for the year, split it: the NCI gets its % of the subsidiary's profit (less its % of any PURP, if the subsidiary was the seller); the rest belongs to the parent's owners.`,
        ru: `Групповой отчёт о прибыли или убытке показывает год всей группы, как будто это один бизнес.

- Складываем доходы и расходы материнской и дочерней построчно, ПОЛНОСТЬЮ.
- Продажи между компаниями группы — это просто перемещение товара между своими магазинами: убираем всю сумму из выручки И из себестоимости.
- Если часть этого товара не продана на конец года, прибавляем нереализованную прибыль (PURP) к себестоимости.

После прибыли за год делим её: NCI получает свой % прибыли дочерней (минус свой % PURP, если продавала дочерняя); остальное принадлежит владельцам материнской.`,
        uz: `Guruh foyda yoki zarar hisoboti butun guruh yilini go'yo u bitta biznes kabi ko'rsatadi.

- Bosh va sho'ba kompaniyalarning daromad va xarajatlarini qatorma-qator, TO'LIQ qo'shamiz.
- Guruh kompaniyalari orasidagi sotuv — tovarning o'z do'konlari orasida ko'chishi: butun summani tushumdan HAM, tannarxdan HAM chiqaramiz.
- Bu tovarning bir qismi yil oxirida sotilmagan bo'lsa, amalga oshmagan foydani (PURP) tannarxga qo'shamiz.

Yil foydasidan keyin uni bo'lamiz: NCI sho'ba foydasidan o'z % ini oladi (sho'ba sotgan bo'lsa, PURP dan o'z % i ayiriladi); qolgani bosh kompaniya egalariga.`,
      },
    },
    {
      key: {
        en: `- Include the subsidiary's results only from the date control was gained.
- Time-apportion each line of the subsidiary, assuming income and expenses accrue evenly.
- Count whole months from the acquisition date to the year end.
- Then cancel only the intra-group sales made after acquisition.
- The NCI share is based on the subsidiary's post-acquisition profit only.`,
        ru: `- Результаты дочерней включаются только с даты получения контроля.
- Каждая строка дочерней распределяется по времени, доходы и расходы считаются равномерными.
- Считайте целые месяцы от даты покупки до конца года.
- Затем исключите только внутригрупповые продажи после покупки.
- Доля NCI считается только от прибыли дочерней после покупки.`,
        uz: `- Sho'ba natijalari faqat nazorat olingan sanadan kiritiladi.
- Sho'baning har bir qatori vaqt bo'yicha bo'linadi, daromad va xarajatlar bir tekis deb hisoblanadi.
- Xarid sanasidan yil oxirigacha butun oylarni sanang.
- So'ng faqat xariddan keyingi guruh ichidagi sotuvlarni chiqaring.
- NCI ulushi faqat sho'baning xariddan keyingi foydasidan hisoblanadi.`,
      },
      exam: {
        en: `- Bought on 1 October with a 31 December year end: 3 months. Bought on 1 July with a 31 March year end: 9 months.
- Bought on the last day of the year: none of that year's profit is included.
- Time-apportion first, then deduct the post-acquisition intra-group sales in full.
- Pre-acquisition profit belongs in the goodwill working, never in the group statement of profit or loss.`,
        ru: `- Куплена 1 октября, год заканчивается 31 декабря: 3 месяца. Куплена 1 июля, год до 31 марта: 9 месяцев.
- Куплена в последний день года: прибыль этого года не включается.
- Сначала распределите по времени, затем полностью вычтите внутригрупповые продажи после покупки.
- Прибыль до покупки идёт в расчёт гудвила и никогда в отчёт группы о прибыли или убытке.`,
        uz: `- 1 oktyabrda olingan, yil 31 dekabrda tugaydi: 3 oy. 1 iyulda olingan, yil 31 martda tugaydi: 9 oy.
- Yilning oxirgi kunida olingan: o'sha yil foydasi kiritilmaydi.
- Avval vaqt bo'yicha bo'ling, so'ng xariddan keyingi guruh ichidagi sotuvni to'liq ayiring.
- Xariddan oldingi foyda gudvil hisobiga kiradi, hech qachon guruh foyda yoki zarar hisobotiga emas.`,
      },
      heading: { en: 'Mid-year acquisitions', ru: 'Покупка в середине года', uz: 'Yil o\'rtasidagi xarid' },
      body: {
        en: `A subsidiary's results are consolidated only from the date the parent gained control. Profit earned before that date was earned for the old owners. It is pre-acquisition and is part of the net assets that the parent bought.

When a subsidiary is bought part-way through the year, its revenue and every expense line are time-apportioned. Unless told otherwise, assume income and expenses accrue evenly over the year. Use whole months: if control is gained on 1 October and the year ends on 31 December, include 3/12 of each figure.

After time-apportioning, cancel intra-group sales and unrealised profit as usual. Only trading after the acquisition date is intra-group, because before then the two companies were not in the same group. Sales made before acquisition are already left out by the time-apportionment.`,
        ru: `Результаты дочерней консолидируются только с даты получения контроля материнской. Прибыль до этой даты заработана для прежних владельцев. Это прибыль до покупки, она входит в купленные материнской чистые активы.

Если дочерняя куплена в середине года, её выручка и каждая строка расходов распределяются по времени. Если не сказано иное, считается, что доходы и расходы возникают равномерно в течение года. Используйте целые месяцы: если контроль получен 1 октября, а год заканчивается 31 декабря, включите 3/12 каждой суммы.

После распределения по времени исключите внутригрупповые продажи и нереализованную прибыль как обычно. Внутригрупповой является только торговля после даты покупки, так как до неё компании не были в одной группе. Продажи до покупки уже исключены распределением по времени.`,
        uz: `Sho'ba natijalari faqat bosh nazorat olgan sanadan konsolidatsiya qilinadi. Undan oldingi foyda eski egalar uchun topilgan. U xariddan oldingi va bosh sotib olgan sof aktivlar tarkibida.

Sho'ba yil o'rtasida olinsa, uning tushumi va har bir xarajat qatori vaqt bo'yicha bo'linadi. Boshqacha aytilmasa, daromad va xarajatlar yil davomida bir tekis deb hisoblang. Butun oylarni ishlating: nazorat 1 oktyabrda olinib, yil 31 dekabrda tugasa, har bir summaning 3/12 qismini kiriting.

Vaqt bo'yicha bo'lgach, guruh ichidagi sotuv va amalga oshmagan foydani odatdagidek chiqaring. Faqat xarid sanasidan keyingi savdo guruh ichidagi, chunki undan oldin kompaniyalar bir guruhda emas edi. Xariddan oldingi sotuvlar vaqt bo'yicha bo'lishda allaqachon chiqarilgan.`,
      },
      example: {
        en: `Bake Co's whole year 20X6: revenue $8,000, cost of sales $4,800, profit $800. Shop Co took control on 1 April.
# Months in the group
  April to December: 9 months
# Time-apportion each line
  Revenue: $8,000 x 9/12 = $6,000
  Cost of sales: $4,800 x 9/12 = $3,600
  Profit: $800 x 9/12 = $600
# The other 3 months
  $800 - $600 = $200 earned January to March: pre-acquisition, part of goodwill
= Only $6,000 of Bake Co's revenue enters the group statement.`,
        ru: `Весь 20X6 год Bake Co: выручка $8,000, себестоимость $4,800, прибыль $800. Shop Co получила контроль 1 апреля.
# Месяцы в группе
  Апрель–декабрь: 9 месяцев
# Распределяем каждую строку по времени
  Выручка: $8,000 x 9/12 = $6,000
  Себестоимость: $4,800 x 9/12 = $3,600
  Прибыль: $800 x 9/12 = $600
# Остальные 3 месяца
  $800 - $600 = $200 заработаны в январе–марте: до покупки, часть гудвила
= В отчёт группы входит только $6,000 выручки Bake Co.`,
        uz: `Bake Co ning butun 20X6 yili: tushum $8,000, tannarx $4,800, foyda $800. Shop Co 1 aprelda nazoratni oldi.
# Guruhdagi oylar
  Aprel–dekabr: 9 oy
# Har bir qatorni vaqt bo'yicha taqsimlaymiz
  Tushum: $8,000 x 9/12 = $6,000
  Tannarx: $4,800 x 9/12 = $3,600
  Foyda: $800 x 9/12 = $600
# Qolgan 3 oy
  $800 - $600 = $200 yanvar–martda topilgan: xariddan oldingi, gudvil qismi
= Guruh hisobotiga Bake Co tushumining faqat $6,000 i kiradi.`,
      },
      simple: {
        en: `A subsidiary's results count only from the day the parent took control. What it earned before belonged to the old owners (and was part of the net assets used for goodwill).

So if it was bought part-way through the year, include only the months since: take that fraction of EVERY line (revenue, cost of sales, expenses, tax), assuming they happen evenly.

Count whole months. Bought 1 October, year end 31 December: 3/12. Then cancel only the intra-group sales made after the purchase.`,
        ru: `Результаты дочерней учитываются только со дня получения контроля. Заработанное раньше принадлежало старым владельцам (и вошло в чистые активы для расчёта гудвила).

Поэтому при покупке в середине года включаем только месяцы после неё: берём эту долю от КАЖДОЙ строки (выручка, себестоимость, расходы, налог), считая, что всё происходит равномерно.

Считайте целые месяцы. Покупка 1 октября, конец года 31 декабря: 3/12. Затем исключаем только внутригрупповые продажи после покупки.`,
        uz: `Sho'ba natijalari faqat bosh kompaniya nazoratni olgan kundan hisoblanadi. Undan oldin topilgani eski egalarga tegishli edi (va gudvil uchun sof aktivlarga kirgan).

Shuning uchun yil o'rtasida sotib olinsa, faqat undan keyingi oylarni olamiz: HAR BIR qatorning (tushum, tannarx, xarajatlar, soliq) shu ulushini, hammasi bir tekis bo'ladi deb.

To'liq oylarni sanang. 1 oktyabrda olingan, yil oxiri 31 dekabr: 3/12. Keyin faqat xariddan keyingi guruh ichidagi sotuvlarni chiqaramiz.`,
      },
    },
    {
      key: {
        en: `- An associate is an entity over which the investor has significant influence (IAS 28).
- Significant influence: power to take part in policy decisions, without control or joint control.
- It is presumed with 20% to 50% of the voting shares, usually with a seat on the board.
- Use the equity method: one line in each statement, never line by line.
- Statement of financial position: cost + share of post-acquisition profit - impairment.
- Profit or loss: group share of the associate's profit after tax, not its dividends.`,
        ru: `- Ассоциированная компания — та, на которую инвестор имеет значительное влияние (IAS 28).
- Значительное влияние: право участвовать в решениях о политике без контроля и совместного контроля.
- Предполагается при 20-50% голосующих акций, обычно с местом в совете директоров.
- Метод долевого участия: одна строка в каждом отчёте, никогда построчно.
- Отчёт о финансовом положении: стоимость + доля прибыли после покупки - обесценение.
- Прибыль или убыток: доля группы в прибыли ассоциированной после налога, а не её дивиденды.`,
        uz: `- Assotsiatsiyalangan kompaniya — investor sezilarli ta'sirga ega korxona (IAS 28).
- Sezilarli ta'sir: nazorat yoki birgalikdagi nazoratsiz siyosat qarorlarida qatnashish huquqi.
- Ovoz beruvchi aksiyalarning 20-50% ida, odatda kengashda o'rin bilan taxmin qilinadi.
- Ulushli qatnashish usuli: har bir hisobotda bitta qator, hech qachon qatorma-qator emas.
- Moliyaviy holat hisoboti: qiymat + xariddan keyingi foyda ulushi - qadrsizlanish.
- Foyda yoki zarar: assotsiatsiyalangan kompaniyaning soliqdan keyingi foydasidagi guruh ulushi, dividendlari emas.`,
      },
      exam: {
        en: `- The percentage is only a guide. A 15% holding with directors on the board can be an associate. Appointing most of the board means control.
- Non-voting shares give no influence, whatever the percentage.
- Equity accounting is used only in group accounts, so the investor must already have a subsidiary.
- Goodwill on an associate is not shown separately. It is inside the investment figure.
- Sales to and from an associate are not cancelled. Only the group share of any unrealised profit is removed.
- A trade investment is held at fair value, and dividends received are shown as income.`,
        ru: `- Процент лишь ориентир. Доля 15% с директорами в совете может дать ассоциированную. Назначение большинства совета — это контроль.
- Неголосующие акции не дают влияния, каким бы ни был процент.
- Метод долевого участия применяется только в отчётности группы, у инвестора уже должна быть дочерняя.
- Гудвил ассоциированной не показывается отдельно. Он внутри суммы вложения.
- Продажи ассоциированной и от неё не исключаются. Убирается только доля группы в нереализованной прибыли.
- Простое вложение учитывается по справедливой стоимости, полученные дивиденды — доход.`,
        uz: `- Foiz faqat mo'ljal. Kengashda direktorlari bor 15% ulush assotsiatsiyalangan bo'lishi mumkin. Kengash ko'pchiligini tayinlash nazorat.
- Ovozsiz aksiyalar foizidan qat'i nazar ta'sir bermaydi.
- Ulushli qatnashish faqat guruh hisobotida, investorda allaqachon sho'ba bo'lishi kerak.
- Assotsiatsiyalangan kompaniya gudvili alohida ko'rsatilmaydi. U sarmoya summasi ichida.
- Assotsiatsiyalangan kompaniya bilan sotuvlar chiqarilmaydi. Faqat amalga oshmagan foydaning guruh ulushi olib tashlanadi.
- Oddiy sarmoya adolatli qiymatda, olingan dividendlar daromad sifatida.`,
      },
      heading: {
        en: 'Associates and equity accounting',
        ru: 'Ассоциированные компании и метод долевого участия',
        uz: 'Assotsiatsiyalangan kompaniyalar va ulushli qatnashish',
      },
      body: {
        en: `IAS 28 Investments in Associates and Joint Ventures defines an associate as an entity over which the investor has significant influence. Significant influence is the power to take part in the investee's financial and operating policy decisions, but not to control them, alone or jointly. It is presumed when the investor holds between 20% and 50% of the voting shares and can take part in management, for example through a seat on the board. Joint ventures are not in the FA syllabus.

An associate is not part of the group, so it is not consolidated line by line. Instead the equity method is used. The investment is first recorded at cost and then adjusted for the investor's share of the associate's post-acquisition change in net assets.

In the consolidated statement of financial position, the associate appears as one line within non-current assets, investments in associates. It is cost plus the group share of post-acquisition profits, less any impairment and the group share of any unrealised profit on sales by the parent to the associate. The group share of post-acquisition profits and any impairment also go into group retained earnings.

In the consolidated statement of profit or loss, the associate appears as one line, share of profit of associates, after operating profit. It is the group share of the associate's profit after tax, less any impairment for the year. Dividends from the associate are not shown as income, because the share of its profit already includes them. Trading with the associate is not cancelled, since it is outside the group.

The equity method is used only in consolidated financial statements, so an investor with no subsidiaries does not use it. When an investment gives neither control nor significant influence, it is a simple trade investment: a non-current asset in the statement of financial position, with any dividends received shown as income.`,
        ru: `IAS 28 «Инвестиции в ассоциированные и совместные предприятия» определяет ассоциированную компанию как предприятие, на которое инвестор имеет значительное влияние. Значительное влияние — это право участвовать в решениях о финансовой и операционной политике объекта, но не контролировать их, самостоятельно или совместно. Оно предполагается, если инвестор владеет 20-50% голосующих акций и может участвовать в управлении, например через место в совете директоров. Совместные предприятия не входят в программу FA.

Ассоциированная компания не входит в группу, поэтому не консолидируется построчно. Вместо этого применяется метод долевого участия. Вложение сначала учитывается по стоимости, а затем корректируется на долю инвестора в изменении чистых активов ассоциированной после покупки.

В консолидированном отчёте о финансовом положении ассоциированная показывается одной строкой во внеоборотных активах — вложения в ассоциированные компании. Это стоимость плюс доля группы в прибыли после покупки минус обесценение и доля группы в нереализованной прибыли от продаж материнской ассоциированной. Доля группы в прибыли после покупки и обесценение также входят в нераспределённую прибыль группы.

В консолидированном отчёте о прибыли или убытке ассоциированная показывается одной строкой — доля в прибыли ассоциированных компаний — после операционной прибыли. Это доля группы в прибыли ассоциированной после налога минус обесценение за год. Дивиденды ассоциированной не показываются как доход, так как доля в прибыли уже их включает. Торговля с ассоциированной не исключается, так как она вне группы.

Метод долевого участия применяется только в консолидированной отчётности, поэтому инвестор без дочерних компаний его не использует. Если вложение не даёт ни контроля, ни значительного влияния, это простое вложение: внеоборотный актив в отчёте о финансовом положении, а полученные дивиденды показываются как доход.`,
        uz: `IAS 28 «Assotsiatsiyalangan va qo'shma korxonalarga investitsiyalar» assotsiatsiyalangan kompaniyani investor sezilarli ta'sirga ega korxona deb ta'riflaydi. Sezilarli ta'sir — obyektning moliyaviy va operatsion siyosati qarorlarida qatnashish huquqi, lekin ularni yolg'iz yoki birgalikda nazorat qilish emas. Investor ovoz beruvchi aksiyalarning 20-50% iga ega bo'lib, boshqaruvda, masalan kengashdagi o'rin orqali qatnasha olsa, u taxmin qilinadi. Qo'shma korxonalar FA dasturida yo'q.

Assotsiatsiyalangan kompaniya guruh tarkibida emas, shuning uchun qatorma-qator konsolidatsiya qilinmaydi. Buning o'rniga ulushli qatnashish usuli ishlatiladi. Sarmoya avval qiymatda yoziladi, so'ng assotsiatsiyalangan kompaniya sof aktivlarining xariddan keyingi o'zgarishidagi investor ulushiga tuzatiladi.

Konsolidatsiyalangan moliyaviy holat hisobotida u uzoq muddatli aktivlarda bitta qator — assotsiatsiyalangan kompaniyalardagi sarmoyalar. Bu qiymat plus xariddan keyingi foydaning guruh ulushi, minus qadrsizlanish va boshning unga sotuvlaridagi amalga oshmagan foydaning guruh ulushi. Xariddan keyingi foydaning guruh ulushi va qadrsizlanish guruhning taqsimlanmagan foydasiga ham kiradi.

Konsolidatsiyalangan foyda yoki zarar hisobotida u operatsion foydadan keyin bitta qator — assotsiatsiyalangan kompaniyalar foydasidagi ulush. Bu ularning soliqdan keyingi foydasidagi guruh ulushi, minus yil qadrsizlanishi. Dividendlar daromad sifatida ko'rsatilmaydi, chunki foyda ulushi ularni allaqachon o'z ichiga oladi. Assotsiatsiyalangan kompaniya bilan savdo chiqarilmaydi, chunki u guruhdan tashqarida.

Ulushli qatnashish faqat konsolidatsiyalangan hisobotda ishlatiladi, shuning uchun sho'basi yo'q investor uni qo'llamaydi. Sarmoya na nazorat, na sezilarli ta'sir bermasa, u oddiy sarmoya: moliyaviy holat hisobotida uzoq muddatli aktiv, olingan dividendlar daromad sifatida.`,
      },
      example: {
        en: `On 1 January 20X6 Shop Co buys 30% of a tea house for $1,200 and gets one seat on its board.
# What kind of investment
  30% and a board seat: significant influence, so an ASSOCIATE
# The tea house's year
  Profit after tax: $500
# Group profit or loss
  Share of profit of associates: 30% x $500 = $150
# Group statement of financial position
  Investment in associate: $1,200 + $150 = $1,350
= One line in each statement. None of the tea house's assets are added line by line.`,
        ru: `1 января 20X6 Shop Co покупает 30% чайханы за $1,200 и получает одно место в совете.
# Что это за вложение
  30% и место в совете: значительное влияние, значит АССОЦИИРОВАННАЯ
# Год чайханы
  Прибыль после налога: $500
# Прибыль или убыток группы
  Доля в прибыли ассоциированных: 30% x $500 = $150
# Отчёт о финансовом положении группы
  Инвестиция в ассоциированную: $1,200 + $150 = $1,350
= Одна строка в каждом отчёте. Активы чайханы построчно не складывают.`,
        uz: `20X6 yil 1 yanvarda Shop Co choyxonaning 30% ini $1,200 ga sotib oladi va kengashda bitta o'rin oladi.
# Bu qanday sarmoya
  30% va kengashda o'rin: sezilarli ta'sir, demak ASSOTSIATSIYALANGAN
# Choyxona yili
  Soliqdan keyingi foyda: $500
# Guruh foyda yoki zarari
  Assotsiatsiyalanganlar foydasidagi ulush: 30% x $500 = $150
# Guruh moliyaviy holat hisoboti
  Assotsiatsiyalangan kompaniyaga investitsiya: $1,200 + $150 = $1,350
= Har bir hisobotda bitta qator. Choyxona aktivlari qatorma-qator qo'shilmaydi.`,
      },
      simple: {
        en: `An associate is a company the investor can INFLUENCE but not control, usually with 20% to 50% of the votes and a seat on the board. (Over 50%, or most of the board, is control: a subsidiary.)

An associate is NOT added line by line. It is shown on just one line in each statement (the equity method):
- Statement of financial position: cost + group share of its profits since purchase.
- Profit or loss: group share of its profit after tax.

Dividends from the associate are not shown as income (they are already inside that share), and sales with it are not cancelled.`,
        ru: `Ассоциированная компания — та, на которую инвестор может ВЛИЯТЬ, но не контролирует: обычно 20%–50% голосов и место в совете. (Больше 50% или большинство совета — это контроль: дочерняя.)

Ассоциированную НЕ складывают построчно. Её показывают одной строкой в каждом отчёте (метод долевого участия):
- Отчёт о финансовом положении: стоимость + доля группы в её прибыли после покупки.
- Прибыль или убыток: доля группы в её прибыли после налога.

Дивиденды от ассоциированной не показывают как доход (они уже внутри этой доли), а продажи с ней не исключают.`,
        uz: `Assotsiatsiyalangan kompaniya — investor TA'SIR qila oladigan, lekin nazorat qilmaydigan kompaniya: odatda ovozlarning 20%–50% i va kengashda o'rin. (50% dan ko'p yoki kengash ko'pchiligi — nazorat: sho'ba.)

Assotsiatsiyalangan kompaniya qatorma-qator QO'SHILMAYDI. U har bir hisobotda bitta qatorda ko'rsatiladi (ulushli qatnashish usuli):
- Moliyaviy holat hisoboti: tannarx + xariddan keyingi foydasidan guruh ulushi.
- Foyda yoki zarar: soliqdan keyingi foydasidan guruh ulushi.

Assotsiatsiyalangan kompaniyadan dividendlar daromad sifatida ko'rsatilmaydi (ular shu ulush ichida), u bilan sotuvlar esa chiqarilmaydi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Intra-group trading', ru: 'Внутригрупповая торговля', uz: 'Guruh ichidagi savdo' },
      definition: {
        en: 'Sales and purchases between companies in the same group, cancelled on consolidation.',
        ru: 'Продажи и покупки между компаниями одной группы, исключаемые при консолидации.',
        uz: 'Bir guruh kompaniyalari o\'rtasidagi oldi-sotdi, konsolidatsiyada chiqariladi.',
      },
      example: {
        en: 'Bake Co sells $600 of bread to Shop Co: removed from group revenue and cost of sales.',
        ru: 'Bake Co продаёт хлеб на $600 Shop Co: исключается из выручки и себестоимости группы.',
        uz: 'Bake Co Shop Co ga $600 lik non sotadi: guruh tushumi va tannarxidan chiqariladi.',
      },
    },
    {
      term: { en: 'Time-apportionment', ru: 'Распределение по времени', uz: 'Vaqt bo\'yicha taqsimlash' },
      definition: {
        en: 'Including only the part of a subsidiary\'s results earned after the acquisition date.',
        ru: 'Включение только той части результатов дочерней, что получена после даты покупки.',
        uz: 'Sho\'ba natijalarining faqat xarid sanasidan keyin topilgan qismini kiritish.',
      },
      example: {
        en: 'Bought on 1 April: 9/12 of Bake Co\'s $8,000 revenue = $6,000.',
        ru: 'Куплена 1 апреля: 9/12 от выручки Bake Co $8,000 = $6,000.',
        uz: '1 aprelda olingan: Bake Co ning $8,000 tushumining 9/12 i = $6,000.',
      },
    },
    {
      term: { en: 'Associate', ru: 'Ассоциированная компания', uz: 'Assotsiatsiyalangan kompaniya' },
      definition: {
        en: 'An entity over which the investor has significant influence.',
        ru: 'Предприятие, на которое инвестор имеет значительное влияние.',
        uz: 'Investor sezilarli ta\'sirga ega korxona.',
      },
      example: {
        en: 'A tea house in which Shop Co holds 30% and one board seat.',
        ru: 'Чайхана, где Shop Co владеет 30% и одним местом в совете.',
        uz: 'Shop Co 30% va kengashda bitta o\'ringa ega bo\'lgan choyxona.',
      },
    },
    {
      term: { en: 'Significant influence', ru: 'Значительное влияние', uz: 'Sezilarli ta\'sir' },
      definition: {
        en: 'The power to take part in an investee\'s policy decisions without controlling them.',
        ru: 'Право участвовать в решениях о политике объекта, не контролируя их.',
        uz: 'Obyekt siyosati qarorlarida ularni nazorat qilmay qatnashish huquqi.',
      },
      example: {
        en: 'One seat on a seven-person board: a say in decisions, but not the final word.',
        ru: 'Одно место в совете из семи человек: голос в решениях, но не последнее слово.',
        uz: 'Yetti kishilik kengashda bitta o\'rin: qarorlarda ovoz bor, lekin oxirgi so\'z emas.',
      },
    },
    {
      term: { en: 'Equity method', ru: 'Метод долевого участия', uz: 'Ulushli qatnashish usuli' },
      definition: {
        en: 'Recording an investment at cost, then adjusting it for the investor\'s share of post-acquisition changes in net assets.',
        ru: 'Учёт вложения по стоимости с последующей корректировкой на долю инвестора в изменении чистых активов после покупки.',
        uz: 'Sarmoyani qiymatda yozib, so\'ng xariddan keyingi sof aktivlar o\'zgarishidagi investor ulushiga tuzatish.',
      },
      example: {
        en: 'Investment $1,200 + 30% of $500 profit = $1,350 on one line.',
        ru: 'Инвестиция $1,200 + 30% от прибыли $500 = $1,350 одной строкой.',
        uz: 'Investitsiya $1,200 + $500 foydaning 30% i = bitta qatorda $1,350.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter20;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter20.id] = chapter20;
