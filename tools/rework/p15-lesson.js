module.exports = {
  ...require('./p15q.js'),
  sections: [
    {
      simple: [
`The trial balance is not the finish line. First fix any mistakes, then make the year-end adjustments you learned in earlier chapters: closing inventory, depreciation, accruals and prepayments, irrecoverable debts and tax. Only then write the financial statements.

A full set has five parts: the statement of financial position, the statement of profit or loss and other comprehensive income, the statement of changes in equity, the statement of cash flows, and the notes. The statements show short totals (aggregation); the notes break them into detail (disaggregation).`,
`Оборотная ведомость — ещё не финиш. Сначала исправьте ошибки, затем сделайте годовые корректировки из прошлых глав: запасы на конец, амортизация, начисления и предоплаты, безнадёжные долги и налог. Только потом составляйте финансовую отчётность.

Полный комплект состоит из пяти частей: отчёт о финансовом положении, отчёт о прибыли или убытке и прочем совокупном доходе, отчёт об изменениях в капитале, отчёт о движении денежных средств и примечания. В отчётах — краткие итоги (агрегирование); примечания раскладывают их на детали (дезагрегирование).`,
`Sinov balansi hali marra emas. Avval xatolarni tuzating, keyin oldingi boblardagi yil oxiri tuzatishlarini qiling: yakuniy zaxira, amortizatsiya, hisoblangan va oldindan to'langanlar, undirib bo'lmaydigan qarzlar va soliq. Faqat shundan keyin moliyaviy hisobotni tuzing.

To'liq to'plam besh qismdan iborat: moliyaviy holat hisoboti, foyda yoki zarar va boshqa umumlashgan daromad hisoboti, kapitaldagi o'zgarishlar hisoboti, pul oqimlari hisoboti va izohlar. Hisobotlarda qisqa jamlar (agregatsiya); izohlar ularni tafsilotlarga ajratadi (dezagregatsiya).`],
      example: [
`A small bakery has finished its trial balance.
# Year-end adjustments it still makes
  Closing inventory: $1,000
  Depreciation on the oven: $500
  Rent paid in advance: $200 prepayment
  Tax estimate for the year: $900
# Aggregation and disaggregation
  The statement of financial position shows one figure: property, plant and equipment $9,000
  The note splits it: shop $6,000 + oven $2,000 + van $1,000 = $9,000
= Adjust first, then prepare the statements and notes.`,
`Небольшая пекарня закончила оборотную ведомость.
# Годовые корректировки, которые ещё нужны
  Запасы на конец: $1,000
  Амортизация печи: $500
  Аренда, оплаченная вперёд: предоплата $200
  Оценка налога за год: $900
# Агрегирование и дезагрегирование
  В отчёте о финансовом положении одна цифра: основные средства $9,000
  Примечание раскладывает её: магазин $6,000 + печь $2,000 + фургон $1,000 = $9,000
= Сначала корректировки, потом отчёты и примечания.`,
`Kichik novvoyxona sinov balansini tugatdi.
# Hali qilinadigan yil oxiri tuzatishlari
  Yakuniy zaxira: $1,000
  Pech amortizatsiyasi: $500
  Oldindan to'langan ijara: $200 oldindan to'lov
  Yillik soliq bahosi: $900
# Agregatsiya va dezagregatsiya
  Moliyaviy holat hisobotida bitta son: asosiy vositalar $9,000
  Izoh uni ajratadi: do'kon $6,000 + pech $2,000 + furgon $1,000 = $9,000
= Avval tuzatishlar, keyin hisobotlar va izohlar.`],
    },
    {
      simple: [
`This statement is a snapshot of what the business owns and owes on the last day of the year. It follows the accounting equation: assets = equity + liabilities.

Every asset and liability is split into current and non-current. Current means it turns into cash, or must be paid, soon: within 12 months or within the normal trading cycle. Cash, inventory and receivables are current assets. Payables, overdrafts and tax due are current liabilities. A loan is split: the part due within 12 months is current, the rest is non-current.`,
`Этот отчёт — снимок того, чем бизнес владеет и что должен в последний день года. Он следует уравнению: активы = капитал + обязательства.

Каждый актив и обязательство делят на оборотные (краткосрочные) и внеоборотные (долгосрочные). Краткосрочное значит, что оно скоро станет деньгами или его скоро платить: в течение 12 месяцев или обычного торгового цикла. Деньги, запасы и дебиторы — оборотные активы. Кредиторы, овердрафт и налог к уплате — краткосрочные обязательства. Заём делят: часть к оплате в течение 12 месяцев — краткосрочная, остальное — долгосрочное.`,
`Bu hisobot yilning oxirgi kunida biznes nimaga egaligi va nima qarzi borligining surati. U tenglamaga amal qiladi: aktivlar = kapital + majburiyatlar.

Har bir aktiv va majburiyat aylanma (qisqa muddatli) va uzoq muddatliga bo'linadi. Qisqa muddatli — tez orada pulga aylanadi yoki to'lanadi: 12 oy ichida yoki odatiy savdo sikli ichida. Pul, zaxira va debitorlar aylanma aktivlar. Kreditorlar, overdraft va to'lanadigan soliq qisqa muddatli majburiyatlar. Qarz bo'linadi: 12 oy ichida to'lanadigan qismi qisqa muddatli, qolgani uzoq muddatli.`],
      example: [
`The bakery's year-end balances.
# The loan
  $4,000 repaid in four yearly parts of $1,000, the first in 8 months
  Current liability: $1,000
  Non-current liability: $3,000
# The bank
  The bank statement shows a DEBIT of $200: the bakery is overdrawn
  Current liability: $200
# Current assets
  Inventory $1,000 + receivables $800 - allowance $50 = $1,750
= Net current assets = current assets - current liabilities.`,
`Остатки пекарни на конец года.
# Заём
  $4,000 гасится четырьмя годовыми частями по $1,000, первая через 8 месяцев
  Краткосрочное обязательство: $1,000
  Долгосрочное обязательство: $3,000
# Банк
  Выписка показывает ДЕБЕТ $200: у пекарни овердрафт
  Краткосрочное обязательство: $200
# Оборотные активы
  Запасы $1,000 + дебиторы $800 - резерв $50 = $1,750
= Чистые оборотные активы = оборотные активы - краткосрочные обязательства.`,
`Novvoyxonaning yil oxiridagi qoldiqlari.
# Qarz
  $4,000 yiliga $1,000 dan to'rt qismda qaytariladi, birinchisi 8 oydan keyin
  Qisqa muddatli majburiyat: $1,000
  Uzoq muddatli majburiyat: $3,000
# Bank
  Ko'chirmada $200 DEBET: novvoyxonada overdraft
  Qisqa muddatli majburiyat: $200
# Aylanma aktivlar
  Zaxira $1,000 + debitorlar $800 - rezerv $50 = $1,750
= Sof aylanma aktivlar = aylanma aktivlar - qisqa muddatli majburiyatlar.`],
    },
    {
      simple: [
`This statement shows how much profit was made over the year. Under IFRS 18 it has layers, and you work down them:

- Operating: revenue, cost of sales, distribution and admin costs. This gives operating profit.
- Investing: income such as interest received and dividends received.
- Financing: interest paid on loans. This gives profit before income taxes.
- Income tax: tax on the company's profit. This gives profit for the year.

Costs can be grouped by what they are for (function: cost of sales, distribution, admin) or by what they are (nature: wages, materials, depreciation).`,
`Этот отчёт показывает, сколько прибыли получено за год. По IFRS 18 в нём есть уровни, и вы идёте по ним сверху вниз:

- Операционная: выручка, себестоимость, расходы на сбыт и административные. Так получаем операционную прибыль.
- Инвестиционная: доходы вроде полученных процентов и дивидендов.
- Финансовая: проценты по займам. Так получаем прибыль до налога на прибыль.
- Налог на прибыль: налог на прибыль компании. Так получаем прибыль за год.

Расходы можно группировать по назначению (функции: себестоимость, сбыт, администрация) или по характеру (зарплата, материалы, амортизация).`,
`Bu hisobot yil davomida qancha foyda olinganini ko'rsatadi. IFRS 18 bo'yicha unda qatlamlar bor va siz ulardan pastga qarab yurasiz:

- Operatsion: tushum, tannarx, sotish va ma'muriy xarajatlar. Shunday qilib operatsion foyda olinadi.
- Investitsion: olingan foiz va dividendlar kabi daromadlar.
- Moliyaviy: qarzlar bo'yicha to'langan foiz. Shunday qilib foyda solig'igacha foyda olinadi.
- Foyda solig'i: kompaniya foydasiga soliq. Shunday qilib yil foydasi olinadi.

Xarajatlarni maqsadi bo'yicha (funksiya: tannarx, sotish, ma'muriy) yoki tabiati bo'yicha (ish haqi, materiallar, amortizatsiya) guruhlash mumkin.`],
      example: [
`The bakery's year, worked down the layers.
# Operating
  Cost of sales: opening inventory $900 + purchases $12,100 - closing inventory $1,000 = $12,000
  Gross profit: revenue $20,000 - $12,000 = $8,000
  Operating profit: $8,000 - distribution $1,400 - admin $2,600 = $4,000
# Investing
  Interest received $100: $4,000 + $100 = $4,100
# Financing
  Loan interest $400: $4,100 - $400 = $3,700 profit before income taxes
# Income tax
  Tax $900: $3,700 - $900 = $2,800
= Profit for the year: $2,800`,
`Год пекарни по уровням сверху вниз.
# Операционная
  Себестоимость: запасы на начало $900 + закупки $12,100 - запасы на конец $1,000 = $12,000
  Валовая прибыль: выручка $20,000 - $12,000 = $8,000
  Операционная прибыль: $8,000 - сбыт $1,400 - администрация $2,600 = $4,000
# Инвестиционная
  Полученные проценты $100: $4,000 + $100 = $4,100
# Финансовая
  Проценты по займу $400: $4,100 - $400 = $3,700 прибыль до налога на прибыль
# Налог на прибыль
  Налог $900: $3,700 - $900 = $2,800
= Прибыль за год: $2,800`,
`Novvoyxona yili qatlamlar bo'yicha yuqoridan pastga.
# Operatsion
  Tannarx: boshlang'ich zaxira $900 + xaridlar $12,100 - yakuniy zaxira $1,000 = $12,000
  Yalpi foyda: tushum $20,000 - $12,000 = $8,000
  Operatsion foyda: $8,000 - sotish $1,400 - ma'muriy $2,600 = $4,000
# Investitsion
  Olingan foiz $100: $4,000 + $100 = $4,100
# Moliyaviy
  Qarz foizi $400: $4,100 - $400 = $3,700 foyda solig'igacha foyda
# Foyda solig'i
  Soliq $900: $3,700 - $900 = $2,800
= Yil foydasi: $2,800`],
    },
    {
      simple: [
`Some gains are only "on paper". If a building is revalued upwards, the business is richer, but it has not sold the building, so no money was earned. That gain is kept out of profit and added below it, as other comprehensive income.

Profit for the year + other comprehensive income = total comprehensive income.

Big one-off items, such as the cost of closing a branch or a gain on selling equipment, still go in profit or loss, but on their own line so readers can see they will not happen every year.`,
`Некоторые прибыли — только «на бумаге». Если здание переоценили вверх, бизнес стал богаче, но здание не продано, и денег не заработано. Этот прирост не включают в прибыль, а добавляют ниже — как прочий совокупный доход.

Прибыль за год + прочий совокупный доход = общий совокупный доход.

Крупные разовые статьи, например затраты на закрытие филиала или прибыль от продажи оборудования, всё равно идут в прибыль или убыток, но отдельной строкой, чтобы читатель видел, что они не повторяются каждый год.`,
`Ba'zi daromadlar faqat «qog'ozda». Bino qiymati oshirib qayta baholansa, biznes boyroq bo'ladi, lekin bino sotilmagan, pul topilmagan. Bu o'sish foydaga kiritilmaydi, undan pastda boshqa umumlashgan daromad sifatida qo'shiladi.

Yil foydasi + boshqa umumlashgan daromad = jami umumlashgan daromad.

Filialni yopish xarajati yoki uskunani sotishdan foyda kabi katta bir martalik moddalar baribir foyda yoki zararga kiradi, lekin alohida qatorda, o'quvchi ular har yili takrorlanmasligini ko'rishi uchun.`],
      example: [
`The bakery's profit for the year is $2,800.
# The shop is revalued up by $2,000
  Not sold, so not profit: other comprehensive income $2,000
# Total comprehensive income
  $2,800 + $2,000 = $4,800
# A one-off cost
  Closing a market stall cost $500: shown on its own line in profit or loss
= Profit $2,800; total comprehensive income $4,800`,
`Прибыль пекарни за год — $2,800.
# Магазин переоценили вверх на $2,000
  Не продан, значит не прибыль: прочий совокупный доход $2,000
# Общий совокупный доход
  $2,800 + $2,000 = $4,800
# Разовый расход
  Закрытие рыночного прилавка стоило $500: отдельная строка в прибыли или убытке
= Прибыль $2,800; общий совокупный доход $4,800`,
`Novvoyxonaning yil foydasi $2,800.
# Do'kon $2,000 ga oshirib qayta baholandi
  Sotilmagan, demak foyda emas: boshqa umumlashgan daromad $2,000
# Jami umumlashgan daromad
  $2,800 + $2,000 = $4,800
# Bir martalik xarajat
  Bozordagi rastani yopish $500 turdi: foyda yoki zararda alohida qator
= Foyda $2,800; jami umumlashgan daromad $4,800`],
    },
    {
      simple: [
`Equity is what belongs to the owners. The statement of changes in equity shows, for each part of equity, where it started, what changed it, and where it ended.

- Profit goes into retained earnings; dividends paid come out of it.
- A revaluation gain goes into the revaluation surplus.
- New shares go into share capital and share premium.

The closing balances become the equity section of the statement of financial position. For a sole trader it is one line: opening capital + new capital + profit - drawings = closing capital.`,
`Капитал — то, что принадлежит владельцам. Отчёт об изменениях в капитале показывает по каждой части капитала, с чего она начала, что её изменило и чем закончилась.

- Прибыль идёт в нераспределённую прибыль; выплаченные дивиденды уходят из неё.
- Прирост от переоценки идёт в резерв переоценки.
- Новые акции идут в акционерный капитал и эмиссионный доход.

Конечные остатки становятся разделом капитала в отчёте о финансовом положении. У индивидуального предпринимателя это одна строка: начальный капитал + новый капитал + прибыль - изъятия = конечный капитал.`,
`Kapital — egalarga tegishli narsa. Kapitaldagi o'zgarishlar hisoboti kapitalning har bir qismi nimadan boshlangani, uni nima o'zgartirgani va nima bilan tugaganini ko'rsatadi.

- Foyda taqsimlanmagan foydaga kiradi; to'langan dividendlar undan chiqadi.
- Qayta baholash o'sishi qayta baholash rezerviga kiradi.
- Yangi aksiyalar ustav kapitali va emissiya daromadiga kiradi.

Yakuniy qoldiqlar moliyaviy holat hisobotining kapital bo'limiga aylanadi. Yakka tadbirkorda bu bitta qator: boshlang'ich kapital + yangi kapital + foyda - olib qo'yishlar = yakuniy kapital.`],
      example: [
`The bakery's equity for the year.
# Retained earnings
  Opening $3,000 + profit $2,800 - dividends paid $1,300 = $4,500
# Revaluation surplus
  Opening $0 + revaluation $2,000 = $2,000
# These closing figures go straight into the statement of financial position
# A sole trader instead
  Opening capital $8,000 + new capital $2,000 + profit $5,000 - drawings $3,000 = $12,000
= Each line: opening + increases - decreases = closing.`,
`Капитал пекарни за год.
# Нераспределённая прибыль
  Начало $3,000 + прибыль $2,800 - выплаченные дивиденды $1,300 = $4,500
# Резерв переоценки
  Начало $0 + переоценка $2,000 = $2,000
# Эти конечные цифры сразу идут в отчёт о финансовом положении
# Если бы это был индивидуальный предприниматель
  Начальный капитал $8,000 + новый капитал $2,000 + прибыль $5,000 - изъятия $3,000 = $12,000
= Каждая строка: начало + увеличения - уменьшения = конец.`,
`Novvoyxonaning yillik kapitali.
# Taqsimlanmagan foyda
  Boshi $3,000 + foyda $2,800 - to'langan dividendlar $1,300 = $4,500
# Qayta baholash rezervi
  Boshi $0 + qayta baholash $2,000 = $2,000
# Bu yakuniy sonlar to'g'ridan-to'g'ri moliyaviy holat hisobotiga o'tadi
# Agar bu yakka tadbirkor bo'lsa
  Boshlang'ich kapital $8,000 + yangi kapital $2,000 + foyda $5,000 - olib qo'yish $3,000 = $12,000
= Har bir qator: boshi + oshishlar - kamayishlar = oxiri.`],
    },
    {
      simple: [
`The notes are part of the financial statements. They explain the figures: which accounting policies were used, how the big balances moved during the year, and what a total is made of.

For FA you need the notes on inventory, property, plant and equipment, intangible assets, provisions and events after the reporting period. A good policy note is specific: it names the model, the method and the period. Notes can be numbers (a table of movements) or words (a policy), and usually both.`,
`Примечания — часть финансовой отчётности. Они объясняют цифры: какая учётная политика применялась, как крупные остатки менялись за год и из чего состоит итог.

Для FA нужны примечания о запасах, основных средствах, нематериальных активах, резервах и событиях после отчётной даты. Хорошее примечание о политике конкретно: называет модель, метод и срок. Примечания бывают цифрами (таблица движения) или словами (политика), обычно и тем и другим.`,
`Izohlar moliyaviy hisobotning bir qismi. Ular sonlarni tushuntiradi: qaysi hisob siyosati qo'llangan, katta qoldiqlar yil davomida qanday o'zgargan va jami nimadan iborat.

FA uchun zaxira, asosiy vositalar, nomoddiy aktivlar, rezervlar va hisobot sanasidan keyingi voqealar haqidagi izohlar kerak. Yaxshi siyosat izohi aniq: model, usul va muddatni aytadi. Izohlar sonlar (harakat jadvali) yoki so'zlar (siyosat) bo'ladi, odatda ikkalasi ham.`],
      example: [
`Two of the bakery's notes.
# Policy note for land and buildings
  "Land and buildings are at cost. Land is not depreciated."
  "Buildings are depreciated straight line over 50 years."
# Warranty provision note
  Opening $600
  Increase in the provision + $120
  Repairs paid out - $290
  Closing $430
= Only the $120 increase is an expense this year. The $290 repairs used up the provision.`,
`Два примечания пекарни.
# Примечание о политике для земли и зданий
  «Земля и здания учитываются по стоимости. Земля не амортизируется.»
  «Здания амортизируются линейно в течение 50 лет.»
# Примечание о гарантийном резерве
  Начало $600
  Увеличение резерва + $120
  Оплаченный ремонт - $290
  Конец $430
= Расход этого года — только увеличение $120. Ремонт $290 использовал резерв.`,
`Novvoyxonaning ikki izohi.
# Yer va binolar uchun siyosat izohi
  «Yer va binolar tannarxda. Yer amortizatsiya qilinmaydi.»
  «Binolar 50 yil davomida to'g'ri chiziqli amortizatsiya qilinadi.»
# Kafolat rezervi izohi
  Boshi $600
  Rezerv oshishi + $120
  To'langan ta'mir - $290
  Oxiri $430
= Bu yil xarajat faqat $120 oshish. $290 ta'mir rezervdan foydalandi.`],
    },
    {
      simple: [
`Some things happen after the year end but before the directors approve the accounts. Ask one question: was the problem ALREADY there on the last day of the year?

- Yes: an adjusting event. Change the figures. Example: a customer who owed money at the year end goes bankrupt in January.
- No, it started afterwards: a non-adjusting event. Do not change the figures, but write a note if it is big. Example: a fire in February.

A dividend declared after the year end is always non-adjusting.`,
`Некоторые события происходят после конца года, но до утверждения отчётности директорами. Задайте один вопрос: была ли проблема УЖЕ в последний день года?

- Да: корректирующее событие. Меняем цифры. Пример: покупатель, должный на конец года, банкротится в январе.
- Нет, она возникла потом: некорректирующее событие. Цифры не меняем, но пишем примечание, если оно существенное. Пример: пожар в феврале.

Дивиденд, объявленный после конца года, всегда некорректирующий.`,
`Ba'zi voqealar yil tugagandan keyin, lekin direktorlar hisobotni tasdiqlashidan oldin sodir bo'ladi. Bitta savol bering: muammo yilning oxirgi kunida ALLAQACHON bormidi?

- Ha: tuzatuvchi voqea. Sonlarni o'zgartiring. Misol: yil oxirida qarzi bor mijoz yanvarda bankrot bo'ladi.
- Yo'q, keyin boshlangan: tuzatmaydigan voqea. Sonlarni o'zgartirmang, lekin muhim bo'lsa izoh yozing. Misol: fevraldagi yong'in.

Yil tugagandan keyin e'lon qilingan dividend har doim tuzatmaydigan.`],
      example: [
`The bakery's year ends on 31 December; the accounts are approved on 20 March.
# 15 January: a cafe that owed $800 at the year end goes bankrupt
  The debt was already bad on 31 December: ADJUSTING. Write off the $800
# January: some cakes in stock at the year end are sold below cost
  They were worth less on 31 December: ADJUSTING. Write the inventory down
# 10 February: a fire destroys $5,000 of goods bought in January
  New problem after the year end: NON-ADJUSTING. A note if material
# 1 February: a dividend is declared
  NON-ADJUSTING. No liability at 31 December
= Already there at the year end: adjust. Started later: note only.`,
`Год пекарни заканчивается 31 декабря; отчётность утверждают 20 марта.
# 15 января: кафе, должное $800 на конец года, банкротится
  Долг был плохим уже 31 декабря: КОРРЕКТИРУЮЩЕЕ. Списываем $800
# Январь: часть тортов из запасов на конец года продана ниже стоимости
  Они стоили меньше уже 31 декабря: КОРРЕКТИРУЮЩЕЕ. Уценяем запасы
# 10 февраля: пожар уничтожает товар на $5,000, купленный в январе
  Новая проблема после конца года: НЕКОРРЕКТИРУЮЩЕЕ. Примечание, если существенно
# 1 февраля: объявлен дивиденд
  НЕКОРРЕКТИРУЮЩЕЕ. Обязательства на 31 декабря нет
= Было уже на конец года: корректируем. Возникло позже: только примечание.`,
`Novvoyxona yili 31 dekabrda tugaydi; hisobot 20 martda tasdiqlanadi.
# 15 yanvar: yil oxirida $800 qarzi bo'lgan kafe bankrot bo'ladi
  Qarz 31 dekabrdayoq yomon edi: TUZATUVCHI. $800 ni hisobdan chiqaramiz
# Yanvar: yil oxiridagi zaxiradagi tortlarning bir qismi tannarxdan arzon sotiladi
  Ular 31 dekabrdayoq arzon edi: TUZATUVCHI. Zaxirani arzonlashtiramiz
# 10 fevral: yong'in yanvarda olingan $5,000 lik tovarni yo'q qiladi
  Yil oxiridan keyingi yangi muammo: TUZATMAYDIGAN. Muhim bo'lsa izoh
# 1 fevral: dividend e'lon qilinadi
  TUZATMAYDIGAN. 31 dekabrda majburiyat yo'q
= Yil oxirida bor edi: tuzatamiz. Keyin boshlandi: faqat izoh.`],
    },
    {
      simple: [
`Revenue is the money earned from normal trading, without sales tax. It is earned when you DELIVER what you promised, not when the customer pays. IFRS 15 gives five steps:

- 1. Find the contract (it need not be written).
- 2. List the promises in it (performance obligations).
- 3. Find the total price.
- 4. Share the price between the promises.
- 5. Count each promise as revenue when it is done.

Goods usually count at one point in time, when the customer gets control. Services count bit by bit over time. Money received before delivery is deferred income, a liability. An agent counts only its commission.`,
`Выручка — деньги, заработанные обычной торговлей, без налога с продаж. Она заработана, когда вы ВЫПОЛНИЛИ обещанное, а не когда покупатель заплатил. IFRS 15 даёт пять шагов:

- 1. Найти договор (он может быть устным).
- 2. Перечислить обещания в нём (обязанности к исполнению).
- 3. Найти общую цену.
- 4. Распределить цену между обещаниями.
- 5. Признать каждое обещание выручкой, когда оно выполнено.

Товары обычно признают в один момент, когда покупатель получает контроль. Услуги — постепенно, в течение времени. Деньги, полученные до поставки, — доходы будущих периодов, обязательство. Агент признаёт только свою комиссию.`,
`Tushum — odatiy savdodan topilgan pul, sotuv solig'isiz. U mijoz to'laganda emas, va'da qilinganini BAJARGANDA topiladi. IFRS 15 besh qadam beradi:

- 1. Shartnomani toping (u yozma bo'lishi shart emas).
- 2. Undagi va'dalarni sanab chiqing (bajarish majburiyatlari).
- 3. Umumiy narxni toping.
- 4. Narxni va'dalar o'rtasida taqsimlang.
- 5. Har bir va'dani bajarilganda tushum deb tan oling.

Tovarlar odatda bir lahzada, mijoz nazoratni olganda tan olinadi. Xizmatlar vaqt davomida asta-sekin. Yetkazib berishdan oldin olingan pul kelgusi davr daromadi, majburiyat. Agent faqat o'z komissiyasini tan oladi.`],
      example: [
`On 1 October a shop sells a cafe a coffee machine plus 12 months of servicing for $3,600. Year end: 31 December.
# Steps 1-4: the promises and their prices
  Machine alone sells for $3,000; service alone for $600
# Step 5: the machine
  Delivered on 1 October: revenue $3,000 now
# Step 5: the service
  Given over 12 months; October to December is 3 months
  3/12 x $600 = $150
# Revenue for the year
  $3,000 + $150 = $3,150
= The other $450 of service is deferred income, a current liability.`,
`1 октября магазин продаёт кафе кофемашину и 12 месяцев обслуживания за $3,600. Конец года: 31 декабря.
# Шаги 1-4: обещания и их цены
  Машина отдельно стоит $3,000; обслуживание отдельно $600
# Шаг 5: машина
  Доставлена 1 октября: выручка $3,000 сразу
# Шаг 5: обслуживание
  Оказывается 12 месяцев; октябрь–декабрь — 3 месяца
  3/12 x $600 = $150
# Выручка за год
  $3,000 + $150 = $3,150
= Остальные $450 обслуживания — доходы будущих периодов, краткосрочное обязательство.`,
`1 oktyabrda do'kon kafega qahva mashinasi va 12 oylik xizmatni $3,600 ga sotadi. Yil oxiri: 31 dekabr.
# 1-4 qadamlar: va'dalar va ularning narxi
  Mashina alohida $3,000; xizmat alohida $600
# 5-qadam: mashina
  1 oktyabrda yetkazilgan: darhol $3,000 tushum
# 5-qadam: xizmat
  12 oy davomida ko'rsatiladi; oktyabr–dekabr 3 oy
  3/12 x $600 = $150
# Yillik tushum
  $3,000 + $150 = $3,150
= Xizmatning qolgan $450 i kelgusi davr daromadi, qisqa muddatli majburiyat.`],
    },
  ],
  terms: {
    'Aggregation': ['One line "Property, plant and equipment $9,000" instead of listing the shop, oven and van.', 'Одна строка «Основные средства $9,000» вместо перечня магазина, печи и фургона.', 'Do\'kon, pech va furgon o\'rniga bitta qator «Asosiy vositalar $9,000».'],
    'Disaggregation': ['The note splits $9,000 into shop $6,000, oven $2,000 and van $1,000.', 'Примечание делит $9,000 на магазин $6,000, печь $2,000 и фургон $1,000.', 'Izoh $9,000 ni do\'kon $6,000, pech $2,000 va furgon $1,000 ga ajratadi.'],
    'Current asset': ['Flour in stock, money customers owe, cash in the till.', 'Мука на складе, долги покупателей, деньги в кассе.', 'Ombordagi un, mijozlar qarzi, kassadagi pul.'],
    'Current liability': ['A $500 supplier bill due next month, or a bank overdraft.', 'Счёт поставщика $500 к оплате в следующем месяце или овердрафт.', 'Kelasi oy to\'lanadigan $500 lik yetkazib beruvchi hisobi yoki overdraft.'],
    'Total comprehensive income': ['Profit $2,800 + revaluation gain $2,000 = $4,800.', 'Прибыль $2,800 + прирост от переоценки $2,000 = $4,800.', 'Foyda $2,800 + qayta baholash o\'sishi $2,000 = $4,800.'],
    'Adjusting event': ['A customer who owed $800 at the year end goes bankrupt in January.', 'Покупатель, должный $800 на конец года, банкротится в январе.', 'Yil oxirida $800 qarzi bo\'lgan mijoz yanvarda bankrot bo\'ladi.'],
    'Non-adjusting event': ['A fire in February destroys goods bought in January.', 'Пожар в феврале уничтожает товар, купленный в январе.', 'Fevraldagi yong\'in yanvarda olingan tovarni yo\'q qiladi.'],
    'Performance obligation': ['Selling a phone with a year of repairs: two promises, the phone and the repairs.', 'Продажа телефона с годом ремонта: два обещания — телефон и ремонт.', 'Telefonni bir yillik ta\'mir bilan sotish: ikki va\'da — telefon va ta\'mir.'],
    'Deferred income': ['A $50 deposit for a birthday cake to be collected next month.', 'Задаток $50 за торт, который заберут в следующем месяце.', 'Kelasi oy olib ketiladigan tort uchun $50 zaklad.'],
    'Agent': ['A travel agent sells a $1,000 holiday at 10% commission: its revenue is $100.', 'Турагент продаёт тур за $1,000 с комиссией 10%: его выручка $100.', 'Sayohat agenti $1,000 lik turni 10% komissiya bilan sotadi: uning tushumi $100.'],
  },
  add: [
    {
      term: ['Net current assets', 'Чистые оборотные активы', 'Sof aylanma aktivlar'],
      definition: ['Current assets minus current liabilities.', 'Оборотные активы минус краткосрочные обязательства.', 'Aylanma aktivlar minus qisqa muddatli majburiyatlar.'],
      example: ['Current assets $1,750 - current liabilities $1,200 = $550.', 'Оборотные активы $1,750 - краткосрочные обязательства $1,200 = $550.', 'Aylanma aktivlar $1,750 - qisqa muddatli majburiyatlar $1,200 = $550.'],
    },
    {
      term: ['Statement of changes in equity', 'Отчёт об изменениях в капитале', 'Kapitaldagi o\'zgarishlar hisoboti'],
      definition: ['A statement showing the opening balance, the movements and the closing balance of each part of equity.', 'Отчёт, показывающий начальный остаток, движения и конечный остаток каждой части капитала.', 'Kapitalning har bir qismi boshlang\'ich qoldig\'i, harakatlari va yakuniy qoldig\'ini ko\'rsatadigan hisobot.'],
      example: ['Retained earnings: $3,000 + profit $2,800 - dividends $1,300 = $4,500.', 'Нераспределённая прибыль: $3,000 + прибыль $2,800 - дивиденды $1,300 = $4,500.', 'Taqsimlanmagan foyda: $3,000 + foyda $2,800 - dividendlar $1,300 = $4,500.'],
    },
    {
      term: ['Revenue', 'Выручка', 'Tushum'],
      definition: ['Income from a business\'s ordinary activities, excluding sales tax.', 'Доход от обычной деятельности бизнеса без налога с продаж.', 'Biznesning odatiy faoliyatidan daromad, sotuv solig\'isiz.'],
      example: ['A bakery sells $20,000 of bread in the year. Selling its old van is not revenue.', 'Пекарня продала хлеба на $20,000 за год. Продажа старого фургона — не выручка.', 'Novvoyxona yil davomida $20,000 lik non sotdi. Eski furgonni sotish tushum emas.'],
    },
    {
      term: ['Transaction price', 'Цена сделки', 'Bitim narxi'],
      definition: ['The amount the business expects to receive for the goods or services in a contract.', 'Сумма, которую бизнес ожидает получить за товары или услуги по договору.', 'Biznes shartnoma bo\'yicha tovar yoki xizmatlar uchun olishni kutadigan summa.'],
      example: ['A coffee machine with a year of servicing for $3,600 in total.', 'Кофемашина с годом обслуживания всего за $3,600.', 'Bir yillik xizmat bilan qahva mashinasi jami $3,600.'],
    },
  ],
  glossaryOrder: ['Aggregation', 'Disaggregation', 'Current asset', 'Current liability', 'Net current assets', 'Total comprehensive income', 'Statement of changes in equity', 'Adjusting event', 'Non-adjusting event', 'Revenue', 'Performance obligation', 'Transaction price', 'Deferred income', 'Agent'],
};
