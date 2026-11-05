module.exports = {
  sections: [
    {
      simple: [
`The group statement of profit or loss shows the whole group's year as if it were one business.

- Add the parent's and subsidiary's income and costs line by line, in FULL.
- Sales between group companies are just goods moving between the group's own shops: take the whole amount out of revenue AND out of cost of sales.
- If some of those goods are still unsold at the year end, add the unrealised profit (PURP) to cost of sales.

After profit for the year, split it: the NCI gets its % of the subsidiary's profit (less its % of any PURP, if the subsidiary was the seller); the rest belongs to the parent's owners.`,
`Групповой отчёт о прибыли или убытке показывает год всей группы, как будто это один бизнес.

- Складываем доходы и расходы материнской и дочерней построчно, ПОЛНОСТЬЮ.
- Продажи между компаниями группы — это просто перемещение товара между своими магазинами: убираем всю сумму из выручки И из себестоимости.
- Если часть этого товара не продана на конец года, прибавляем нереализованную прибыль (PURP) к себестоимости.

После прибыли за год делим её: NCI получает свой % прибыли дочерней (минус свой % PURP, если продавала дочерняя); остальное принадлежит владельцам материнской.`,
`Guruh foyda yoki zarar hisoboti butun guruh yilini go'yo u bitta biznes kabi ko'rsatadi.

- Bosh va sho'ba kompaniyalarning daromad va xarajatlarini qatorma-qator, TO'LIQ qo'shamiz.
- Guruh kompaniyalari orasidagi sotuv — tovarning o'z do'konlari orasida ko'chishi: butun summani tushumdan HAM, tannarxdan HAM chiqaramiz.
- Bu tovarning bir qismi yil oxirida sotilmagan bo'lsa, amalga oshmagan foydani (PURP) tannarxga qo'shamiz.

Yil foydasidan keyin uni bo'lamiz: NCI sho'ba foydasidan o'z % ini oladi (sho'ba sotgan bo'lsa, PURP dan o'z % i ayiriladi); qolgani bosh kompaniya egalariga.`],
      example: [
`Shop Co owns 80% of Bake Co from 1 April. Year end 31 December.
# Revenue
  Shop Co $20,000 + Bake Co (since 1 April) $6,000 - bread sold to Shop Co $600 = $25,400
# Cost of sales
  $14,600 + $3,600 - $600 + unrealised profit $100 = $17,700
# NCI share of profit
  Bake Co's profit since 1 April: $600
  Bake Co was the seller, so take off the PURP: $600 - $100 = $500
  20% x $500 = $100
= Group revenue $25,400; cost of sales $17,700; NCI $100.`,
`Shop Co владеет 80% Bake Co с 1 апреля. Конец года 31 декабря.
# Выручка
  Shop Co $20,000 + Bake Co (с 1 апреля) $6,000 - хлеб, проданный Shop Co, $600 = $25,400
# Себестоимость
  $14,600 + $3,600 - $600 + нереализованная прибыль $100 = $17,700
# Доля NCI в прибыли
  Прибыль Bake Co с 1 апреля: $600
  Продавала Bake Co, вычитаем PURP: $600 - $100 = $500
  20% x $500 = $100
= Выручка группы $25,400; себестоимость $17,700; NCI $100.`,
`Shop Co 1 apreldan Bake Co ning 80% iga ega. Yil oxiri 31 dekabr.
# Tushum
  Shop Co $20,000 + Bake Co (1 apreldan) $6,000 - Shop Co ga sotilgan non $600 = $25,400
# Tannarx
  $14,600 + $3,600 - $600 + amalga oshmagan foyda $100 = $17,700
# NCI ning foydadagi ulushi
  Bake Co ning 1 apreldan foydasi: $600
  Sotuvchi Bake Co, PURP ni ayiramiz: $600 - $100 = $500
  20% x $500 = $100
= Guruh tushumi $25,400; tannarx $17,700; NCI $100.`],
    },
    {
      simple: [
`A subsidiary's results count only from the day the parent took control. What it earned before belonged to the old owners (and was part of the net assets used for goodwill).

So if it was bought part-way through the year, include only the months since: take that fraction of EVERY line (revenue, cost of sales, expenses, tax), assuming they happen evenly.

Count whole months. Bought 1 October, year end 31 December: 3/12. Then cancel only the intra-group sales made after the purchase.`,
`Результаты дочерней учитываются только со дня получения контроля. Заработанное раньше принадлежало старым владельцам (и вошло в чистые активы для расчёта гудвила).

Поэтому при покупке в середине года включаем только месяцы после неё: берём эту долю от КАЖДОЙ строки (выручка, себестоимость, расходы, налог), считая, что всё происходит равномерно.

Считайте целые месяцы. Покупка 1 октября, конец года 31 декабря: 3/12. Затем исключаем только внутригрупповые продажи после покупки.`,
`Sho'ba natijalari faqat bosh kompaniya nazoratni olgan kundan hisoblanadi. Undan oldin topilgani eski egalarga tegishli edi (va gudvil uchun sof aktivlarga kirgan).

Shuning uchun yil o'rtasida sotib olinsa, faqat undan keyingi oylarni olamiz: HAR BIR qatorning (tushum, tannarx, xarajatlar, soliq) shu ulushini, hammasi bir tekis bo'ladi deb.

To'liq oylarni sanang. 1 oktyabrda olingan, yil oxiri 31 dekabr: 3/12. Keyin faqat xariddan keyingi guruh ichidagi sotuvlarni chiqaramiz.`],
      example: [
`Bake Co's whole year 20X6: revenue $8,000, cost of sales $4,800, profit $800. Shop Co took control on 1 April.
# Months in the group
  April to December: 9 months
# Time-apportion each line
  Revenue: $8,000 x 9/12 = $6,000
  Cost of sales: $4,800 x 9/12 = $3,600
  Profit: $800 x 9/12 = $600
# The other 3 months
  $800 - $600 = $200 earned January to March: pre-acquisition, part of goodwill
= Only $6,000 of Bake Co's revenue enters the group statement.`,
`Весь 20X6 год Bake Co: выручка $8,000, себестоимость $4,800, прибыль $800. Shop Co получила контроль 1 апреля.
# Месяцы в группе
  Апрель–декабрь: 9 месяцев
# Распределяем каждую строку по времени
  Выручка: $8,000 x 9/12 = $6,000
  Себестоимость: $4,800 x 9/12 = $3,600
  Прибыль: $800 x 9/12 = $600
# Остальные 3 месяца
  $800 - $600 = $200 заработаны в январе–марте: до покупки, часть гудвила
= В отчёт группы входит только $6,000 выручки Bake Co.`,
`Bake Co ning butun 20X6 yili: tushum $8,000, tannarx $4,800, foyda $800. Shop Co 1 aprelda nazoratni oldi.
# Guruhdagi oylar
  Aprel–dekabr: 9 oy
# Har bir qatorni vaqt bo'yicha taqsimlaymiz
  Tushum: $8,000 x 9/12 = $6,000
  Tannarx: $4,800 x 9/12 = $3,600
  Foyda: $800 x 9/12 = $600
# Qolgan 3 oy
  $800 - $600 = $200 yanvar–martda topilgan: xariddan oldingi, gudvil qismi
= Guruh hisobotiga Bake Co tushumining faqat $6,000 i kiradi.`],
    },
    {
      simple: [
`An associate is a company the investor can INFLUENCE but not control, usually with 20% to 50% of the votes and a seat on the board. (Over 50%, or most of the board, is control: a subsidiary.)

An associate is NOT added line by line. It is shown on just one line in each statement (the equity method):
- Statement of financial position: cost + group share of its profits since purchase.
- Profit or loss: group share of its profit after tax.

Dividends from the associate are not shown as income (they are already inside that share), and sales with it are not cancelled.`,
`Ассоциированная компания — та, на которую инвестор может ВЛИЯТЬ, но не контролирует: обычно 20%–50% голосов и место в совете. (Больше 50% или большинство совета — это контроль: дочерняя.)

Ассоциированную НЕ складывают построчно. Её показывают одной строкой в каждом отчёте (метод долевого участия):
- Отчёт о финансовом положении: стоимость + доля группы в её прибыли после покупки.
- Прибыль или убыток: доля группы в её прибыли после налога.

Дивиденды от ассоциированной не показывают как доход (они уже внутри этой доли), а продажи с ней не исключают.`,
`Assotsiatsiyalangan kompaniya — investor TA'SIR qila oladigan, lekin nazorat qilmaydigan kompaniya: odatda ovozlarning 20%–50% i va kengashda o'rin. (50% dan ko'p yoki kengash ko'pchiligi — nazorat: sho'ba.)

Assotsiatsiyalangan kompaniya qatorma-qator QO'SHILMAYDI. U har bir hisobotda bitta qatorda ko'rsatiladi (ulushli qatnashish usuli):
- Moliyaviy holat hisoboti: tannarx + xariddan keyingi foydasidan guruh ulushi.
- Foyda yoki zarar: soliqdan keyingi foydasidan guruh ulushi.

Assotsiatsiyalangan kompaniyadan dividendlar daromad sifatida ko'rsatilmaydi (ular shu ulush ichida), u bilan sotuvlar esa chiqarilmaydi.`],
      example: [
`On 1 January 20X6 Shop Co buys 30% of a tea house for $1,200 and gets one seat on its board.
# What kind of investment
  30% and a board seat: significant influence, so an ASSOCIATE
# The tea house's year
  Profit after tax: $500
# Group profit or loss
  Share of profit of associates: 30% x $500 = $150
# Group statement of financial position
  Investment in associate: $1,200 + $150 = $1,350
= One line in each statement. None of the tea house's assets are added line by line.`,
`1 января 20X6 Shop Co покупает 30% чайханы за $1,200 и получает одно место в совете.
# Что это за вложение
  30% и место в совете: значительное влияние, значит АССОЦИИРОВАННАЯ
# Год чайханы
  Прибыль после налога: $500
# Прибыль или убыток группы
  Доля в прибыли ассоциированных: 30% x $500 = $150
# Отчёт о финансовом положении группы
  Инвестиция в ассоциированную: $1,200 + $150 = $1,350
= Одна строка в каждом отчёте. Активы чайханы построчно не складывают.`,
`20X6 yil 1 yanvarda Shop Co choyxonaning 30% ini $1,200 ga sotib oladi va kengashda bitta o'rin oladi.
# Bu qanday sarmoya
  30% va kengashda o'rin: sezilarli ta'sir, demak ASSOTSIATSIYALANGAN
# Choyxona yili
  Soliqdan keyingi foyda: $500
# Guruh foyda yoki zarari
  Assotsiatsiyalanganlar foydasidagi ulush: 30% x $500 = $150
# Guruh moliyaviy holat hisoboti
  Assotsiatsiyalangan kompaniyaga investitsiya: $1,200 + $150 = $1,350
= Har bir hisobotda bitta qator. Choyxona aktivlari qatorma-qator qo'shilmaydi.`],
    },
  ],
  terms: {
    'Intra-group trading': ['Bake Co sells $600 of bread to Shop Co: removed from group revenue and cost of sales.', 'Bake Co продаёт хлеб на $600 Shop Co: исключается из выручки и себестоимости группы.', 'Bake Co Shop Co ga $600 lik non sotadi: guruh tushumi va tannarxidan chiqariladi.'],
    'Time-apportionment': ['Bought on 1 April: 9/12 of Bake Co\'s $8,000 revenue = $6,000.', 'Куплена 1 апреля: 9/12 от выручки Bake Co $8,000 = $6,000.', '1 aprelda olingan: Bake Co ning $8,000 tushumining 9/12 i = $6,000.'],
    'Associate': ['A tea house in which Shop Co holds 30% and one board seat.', 'Чайхана, где Shop Co владеет 30% и одним местом в совете.', 'Shop Co 30% va kengashda bitta o\'ringa ega bo\'lgan choyxona.'],
    'Significant influence': ['One seat on a seven-person board: a say in decisions, but not the final word.', 'Одно место в совете из семи человек: голос в решениях, но не последнее слово.', 'Yetti kishilik kengashda bitta o\'rin: qarorlarda ovoz bor, lekin oxirgi so\'z emas.'],
    'Equity method': ['Investment $1,200 + 30% of $500 profit = $1,350 on one line.', 'Инвестиция $1,200 + 30% от прибыли $500 = $1,350 одной строкой.', 'Investitsiya $1,200 + $500 foydaning 30% i = bitta qatorda $1,350.'],
  },
  answers: {
    478: [
`Find the profit on the whole sale, then keep only the part in goods still held.
# Step 1: Profit on the sale
  $30m - cost $21m = $9m
# Step 2: Part still in inventory
  One third: $9m x 1/3 = $3m
= Answer: $3 million
! Common trap: $9m is the profit on ALL the goods; $6m is the part already sold to outsiders, which is realised.`,
`Найдём прибыль по всей продаже и оставим только часть в непроданном товаре.
# Шаг 1: Прибыль по продаже
  $30m - себестоимость $21m = $9m
# Шаг 2: Часть, оставшаяся в запасах
  Треть: $9m x 1/3 = $3m
= Ответ: $3 млн
! Частая ошибка: $9m — прибыль по ВСЕМУ товару; $6m — часть, уже проданная внешним покупателям, она реализована.`,
`Butun sotuvdagi foydani topib, faqat hali saqlanayotgan tovardagi qismini qoldiramiz.
# 1-qadam: Sotuvdagi foyda
  $30m - tannarx $21m = $9m
# 2-qadam: Zaxirada qolgan qism
  Uchdan biri: $9m x 1/3 = $3m
= Javob: $3 mln
! Ko'p uchraydigan xato: $9m BARCHA tovardagi foyda; $6m tashqi mijozlarga sotilgan qism, u amalga oshgan.`],
    479: [
`NCI share = NCI % x the subsidiary's profit AFTER tax. Who made the sale matters.
# Step 1: NCI %
  100% - 75% = 25%
# Step 2: Who sold the goods?
  Pine (the parent). So the PURP sits in Pine's profit, and the NCI bears none of it
# Step 3: NCI share
  25% x Spruce's profit for the year $9.6m = $2.4m
= Answer: $2.4 million
! Common trap: $1.65m deducts the PURP from Spruce's profit (only right if Spruce sold); $3.0m uses profit before tax; $7.2m uses 75%.`,
`Доля NCI = % NCI x прибыль дочерней ПОСЛЕ налога. Важно, кто продавал.
# Шаг 1: % NCI
  100% - 75% = 25%
# Шаг 2: Кто продавал товар?
  Pine (материнская). PURP сидит в прибыли Pine, NCI её не несёт
# Шаг 3: Доля NCI
  25% x прибыль Spruce за год $9.6m = $2.4m
= Ответ: $2.4 млн
! Частая ошибка: $1.65m вычитает PURP из прибыли Spruce (верно, только если продавала Spruce); $3.0m берёт прибыль до налога; $7.2m берёт 75%.`,
`NCI ulushi = NCI % x sho'baning soliqDAN KEYINGI foydasi. Kim sotgani muhim.
# 1-qadam: NCI %
  100% - 75% = 25%
# 2-qadam: Tovarni kim sotgan?
  Pine (bosh kompaniya). PURP Pine foydasida, NCI uni ko'tarmaydi
# 3-qadam: NCI ulushi
  25% x Spruce yil foydasi $9.6m = $2.4m
= Javob: $2.4 mln
! Ko'p uchraydigan xato: $1.65m PURP ni Spruce foydasidan ayiradi (faqat Spruce sotganda to'g'ri); $3.0m soliqdan oldingi foydani oladi; $7.2m 75% ni oladi.`],
    480: [
`Add both in full, cancel the intra-group sale from both lines, then add the PURP to cost of sales.
# Revenue
  $150m + $60m - intra-group $30m = $180m
# Cost of sales
  $105m + $42m - intra-group $30m + PURP $3m = $120m
= Answer: revenue $180m; cost of sales $120m
! Common trap: $114m subtracts the PURP instead of adding it; $147m forgets to cancel the $30m; $210m/$150m cancels nothing.`,
`Складываем обе полностью, исключаем внутригрупповую продажу из обеих строк, затем прибавляем PURP к себестоимости.
# Выручка
  $150m + $60m - внутригрупповая $30m = $180m
# Себестоимость
  $105m + $42m - внутригрупповая $30m + PURP $3m = $120m
= Ответ: выручка $180m; себестоимость $120m
! Частая ошибка: $114m вычитает PURP вместо прибавления; $147m забывает исключить $30m; $210m/$150m ничего не исключает.`,
`Ikkalasini to'liq qo'shib, guruh ichidagi sotuvni ikkala qatordan chiqaramiz, keyin PURP ni tannarxga qo'shamiz.
# Tushum
  $150m + $60m - guruh ichidagi $30m = $180m
# Tannarx
  $105m + $42m - guruh ichidagi $30m + PURP $3m = $120m
= Javob: tushum $180m; tannarx $120m
! Ko'p uchraydigan xato: $114m PURP ni qo'shish o'rniga ayiradi; $147m $30m ni chiqarishni unutadi; $210m/$150m hech narsani chiqarmaydi.`],
    483: [
`An associate is defined by SIGNIFICANT INFLUENCE.
- Control: that makes it a SUBSIDIARY. WRONG.
- Significant influence: a say in policy without control. RIGHT.
- No influence at all: that is a trade investment. WRONG.
- At least 50% of the votes: normally control. WRONG.
= Answer: significant influence`,
`Ассоциированную компанию определяет ЗНАЧИТЕЛЬНОЕ ВЛИЯНИЕ.
- Контроль: это ДОЧЕРНЯЯ. НЕВЕРНО.
- Значительное влияние: голос в политике без контроля. ВЕРНО.
- Никакого влияния: это простое вложение. НЕВЕРНО.
- Не менее 50% голосов: обычно контроль. НЕВЕРНО.
= Ответ: значительное влияние`,
`Assotsiatsiyalangan kompaniyani SEZILARLI TA'SIR belgilaydi.
- Nazorat: bu SHO'BA. NOTO'G'RI.
- Sezilarli ta'sir: nazoratsiz siyosatda ovoz. TO'G'RI.
- Hech qanday ta'sir yo'q: bu oddiy sarmoya. NOTO'G'RI.
- Ovozlarning kamida 50% i: odatda nazorat. NOTO'G'RI.
= Javob: sezilarli ta'sir`],
    485: [
`Significant influence = a real say in decisions, but not control.
- Appointing a MAJORITY of the board: that is control. WRONG.
- Appointing at least one board member: a seat at the table, so significant influence. RIGHT.
- Asking for a director: asking is not the same as being able to appoint. WRONG.
- Sending policy requests: no real say. WRONG.
= Answer: the ability to appoint at least one member of its board`,
`Значительное влияние = реальный голос в решениях, но не контроль.
- Назначение БОЛЬШИНСТВА совета: это контроль. НЕВЕРНО.
- Назначение хотя бы одного члена совета: место за столом, значит значительное влияние. ВЕРНО.
- Просьба назначить директора: просить — не то же, что назначать. НЕВЕРНО.
- Отправка запросов о политике: реального голоса нет. НЕВЕРНО.
= Ответ: возможность назначить хотя бы одного члена совета`,
`Sezilarli ta'sir = qarorlarda haqiqiy ovoz, lekin nazorat emas.
- Kengashning KO'PCHILIGINI tayinlash: bu nazorat. NOTO'G'RI.
- Kamida bitta kengash a'zosini tayinlash: stolda o'rin, demak sezilarli ta'sir. TO'G'RI.
- Direktor tayinlashni so'rash: so'rash tayinlay olish emas. NOTO'G'RI.
- Siyosat haqida so'rov yuborish: haqiqiy ovoz yo'q. NOTO'G'RI.
= Javob: kengashning kamida bitta a'zosini tayinlash qobiliyati`],
    488: [
`Significant influence is presumed with 20% to 50% of the votes.
- Some shares: too vague. WRONG.
- Up to 20%: usually a trade investment. WRONG.
- More than 50%: normally control. WRONG.
- Between 20% and 50%: significant influence. RIGHT.
= Answer: holding between 20% and 50% of its equity shares`,
`Значительное влияние предполагается при 20%–50% голосов.
- Часть акций: слишком расплывчато. НЕВЕРНО.
- До 20%: обычно простое вложение. НЕВЕРНО.
- Более 50%: обычно контроль. НЕВЕРНО.
- От 20% до 50%: значительное влияние. ВЕРНО.
= Ответ: владение от 20% до 50% обыкновенных акций`,
`Sezilarli ta'sir ovozlarning 20%–50% ida taxmin qilinadi.
- Ba'zi aksiyalar: juda noaniq. NOTO'G'RI.
- 20% gacha: odatda oddiy sarmoya. NOTO'G'RI.
- 50% dan ko'p: odatda nazorat. NOTO'G'RI.
- 20% dan 50% gacha: sezilarli ta'sir. TO'G'RI.
= Javob: oddiy aksiyalarning 20% dan 50% gachasiga egalik`],
    491: [
`Include Z only from 1 May, then cancel the intra-group sale.
# Step 1: Months in the group
  May to December: 8 months
# Step 2: Z's revenue to include
  $2.4m x 8/12 = $1.6m
# Step 3: Group revenue
  $3m + $1.6m - intra-group $0.2m = $4.4m
= Answer: $4.4 million
! Common trap: $5.2m includes all of Z's year; $4.6m forgets to cancel the $0.2m.`,
`Включаем Z только с 1 мая, затем исключаем внутригрупповую продажу.
# Шаг 1: Месяцы в группе
  Май–декабрь: 8 месяцев
# Шаг 2: Выручка Z к включению
  $2.4m x 8/12 = $1.6m
# Шаг 3: Выручка группы
  $3m + $1.6m - внутригрупповая $0.2m = $4.4m
= Ответ: $4.4 млн
! Частая ошибка: $5.2m включает весь год Z; $4.6m забывает исключить $0.2m.`,
`Z ni faqat 1 maydan kiritamiz, keyin guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  May–dekabr: 8 oy
# 2-qadam: Kiritiladigan Z tushumi
  $2.4m x 8/12 = $1.6m
# 3-qadam: Guruh tushumi
  $3m + $1.6m - guruh ichidagi $0.2m = $4.4m
= Javob: $4.4 mln
! Ko'p uchraydigan xato: $5.2m Z ning butun yilini kiritadi; $4.6m $0.2m ni chiqarishni unutadi.`],
    492: [
`Include S only from 1 October, then cancel the intra-group sale.
# Step 1: Months in the group
  October to June: 9 months
# Step 2: S's revenue to include
  $4m x 9/12 = $3m
# Step 3: Group revenue
  $8m + $3m - intra-group $0.6m = $10.4m
  (It does not matter that S was the seller: the full sale is removed)
= Answer: $10.4 million
! Common trap: $11.4m includes all of S's year; $11.0m forgets to cancel the $0.6m.`,
`Включаем S только с 1 октября, затем исключаем внутригрупповую продажу.
# Шаг 1: Месяцы в группе
  Октябрь–июнь: 9 месяцев
# Шаг 2: Выручка S к включению
  $4m x 9/12 = $3m
# Шаг 3: Выручка группы
  $8m + $3m - внутригрупповая $0.6m = $10.4m
  (Не важно, что продавала S: исключается вся продажа)
= Ответ: $10.4 млн
! Частая ошибка: $11.4m включает весь год S; $11.0m забывает исключить $0.6m.`,
`S ni faqat 1 oktyabrdan kiritamiz, keyin guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  Oktyabr–iyun: 9 oy
# 2-qadam: Kiritiladigan S tushumi
  $4m x 9/12 = $3m
# 3-qadam: Guruh tushumi
  $8m + $3m - guruh ichidagi $0.6m = $10.4m
  (S sotgani muhim emas: butun sotuv chiqariladi)
= Javob: $10.4 mln
! Ko'p uchraydigan xato: $11.4m S ning butun yilini kiritadi; $11.0m $0.6m ni chiqarishni unutadi.`],
    493: [
`Time-apportion G, cancel the intra-group sale, then add the PURP.
# Step 1: G's cost of sales since 1 October
  6 months: $6m x 6/12 = $3m
# Step 2: PURP (mark-up 20%, so the price is 120% of cost)
  Profit in the sale: $2.4m x 20/120 = $0.4m
  Half still held: $0.4m x 1/2 = $0.2m
# Step 3: Group cost of sales
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Answer: $12.80 million
! Common trap: $12.84m treats 20% as a margin; $12.40m subtracts the PURP; $15.80m includes all of G's year.`,
`Распределим G по времени, исключим внутригрупповую продажу, прибавим PURP.
# Шаг 1: Себестоимость G с 1 октября
  6 месяцев: $6m x 6/12 = $3m
# Шаг 2: PURP (наценка 20%, цена — 120% себестоимости)
  Прибыль в продаже: $2.4m x 20/120 = $0.4m
  Половина на складе: $0.4m x 1/2 = $0.2m
# Шаг 3: Себестоимость группы
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Ответ: $12.80 млн
! Частая ошибка: $12.84m считает 20% маржой; $12.40m вычитает PURP; $15.80m включает весь год G.`,
`G ni vaqt bo'yicha taqsimlab, guruh ichidagi sotuvni chiqarib, PURP ni qo'shamiz.
# 1-qadam: G ning 1 oktyabrdan tannarxi
  6 oy: $6m x 6/12 = $3m
# 2-qadam: PURP (ustama 20%, narx tannarxning 120% i)
  Sotuvdagi foyda: $2.4m x 20/120 = $0.4m
  Yarmi omborda: $0.4m x 1/2 = $0.2m
# 3-qadam: Guruh tannarxi
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Javob: $12.80 mln
! Ko'p uchraydigan xato: $12.84m 20% ni marja deb oladi; $12.40m PURP ni ayiradi; $15.80m G ning butun yilini kiritadi.`],
    494: [
`Time-apportion S, cancel the intra-group sale, then add the PURP.
# Step 1: S's cost of sales since 1 March
  March to August: 6 months: $5m x 6/12 = $2.5m
# Step 2: PURP (mark-up 25%, so the price is 125% of cost)
  Profit in the sale: $1.5m x 25/125 = $0.3m
  Two fifths still held: $0.3m x 2/5 = $0.12m
# Step 3: Group cost of sales
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Answer: $9,120,000 (9,120 in $000)
! Common trap: taking 25% of the price ($0.375m profit), or including all 12 months of S.`,
`Распределим S по времени, исключим внутригрупповую продажу, прибавим PURP.
# Шаг 1: Себестоимость S с 1 марта
  Март–август: 6 месяцев: $5m x 6/12 = $2.5m
# Шаг 2: PURP (наценка 25%, цена — 125% себестоимости)
  Прибыль в продаже: $1.5m x 25/125 = $0.3m
  Две пятых на складе: $0.3m x 2/5 = $0.12m
# Шаг 3: Себестоимость группы
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Ответ: $9,120,000 (9,120 в $000)
! Частая ошибка: брать 25% от цены (прибыль $0.375m) или включать все 12 месяцев S.`,
`S ni vaqt bo'yicha taqsimlab, guruh ichidagi sotuvni chiqarib, PURP ni qo'shamiz.
# 1-qadam: S ning 1 martdan tannarxi
  Mart–avgust: 6 oy: $5m x 6/12 = $2.5m
# 2-qadam: PURP (ustama 25%, narx tannarxning 125% i)
  Sotuvdagi foyda: $1.5m x 25/125 = $0.3m
  Beshdan ikkisi omborda: $0.3m x 2/5 = $0.12m
# 3-qadam: Guruh tannarxi
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Javob: $9,120,000 ($000 da 9,120)
! Ko'p uchraydigan xato: narxning 25% ini olish ($0.375m foyda) yoki S ning 12 oyini to'liq kiritish.`],
    500: [
`NCI share = NCI % x the subsidiary's post-acquisition profit, less PURP when the subsidiary was the seller.
# Step 1: Post-acquisition profit
  April to December: 9 months: $480,000 x 9/12 = $360,000
# Step 2: PURP (the subsidiary sold, so it comes off its profit)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# Step 3: NCI share
  30% x $340,000 = $102,000
= Answer: $102,000
! Common trap: $108,000 ignores the PURP; $144,000 uses the whole year; $138,000 uses the whole year less PURP.`,
`Доля NCI = % NCI x прибыль дочерней после покупки, минус PURP, если продавала дочерняя.
# Шаг 1: Прибыль после покупки
  Апрель–декабрь: 9 месяцев: $480,000 x 9/12 = $360,000
# Шаг 2: PURP (продавала дочерняя, вычитаем из её прибыли)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# Шаг 3: Доля NCI
  30% x $340,000 = $102,000
= Ответ: $102,000
! Частая ошибка: $108,000 не учитывает PURP; $144,000 берёт весь год; $138,000 — весь год минус PURP.`,
`NCI ulushi = NCI % x sho'baning xariddan keyingi foydasi, sho'ba sotgan bo'lsa PURP ayiriladi.
# 1-qadam: Xariddan keyingi foyda
  Aprel–dekabr: 9 oy: $480,000 x 9/12 = $360,000
# 2-qadam: PURP (sho'ba sotgan, uning foydasidan ayiriladi)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# 3-qadam: NCI ulushi
  30% x $340,000 = $102,000
= Javob: $102,000
! Ko'p uchraydigan xato: $108,000 PURP ni hisobga olmaydi; $144,000 butun yilni oladi; $138,000 butun yil minus PURP.`],
    502: [
`Include the subsidiary only from 30 September, then cancel the post-acquisition intra-group sale.
# Step 1: Months in the group
  October to December: 3 months
# Step 2: Subsidiary revenue to include
  $84,000 x 3/12 = $21,000
# Step 3: Group revenue
  $140,000 + $21,000 - November sale $5,000 = $156,000
  (No goods are left, so there is no PURP)
= Answer: $156,000
! Common trap: including the whole $84,000, or forgetting the $5,000 sale because the goods were all sold on.`,
`Включаем дочернюю только с 30 сентября, затем исключаем внутригрупповую продажу после покупки.
# Шаг 1: Месяцы в группе
  Октябрь–декабрь: 3 месяца
# Шаг 2: Выручка дочерней к включению
  $84,000 x 3/12 = $21,000
# Шаг 3: Выручка группы
  $140,000 + $21,000 - ноябрьская продажа $5,000 = $156,000
  (Товара не осталось, PURP нет)
= Ответ: $156,000
! Частая ошибка: включить все $84,000 или забыть продажу $5,000, раз товар весь перепродан.`,
`Sho'bani faqat 30 sentyabrdan kiritamiz, keyin xariddan keyingi guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  Oktyabr–dekabr: 3 oy
# 2-qadam: Kiritiladigan sho'ba tushumi
  $84,000 x 3/12 = $21,000
# 3-qadam: Guruh tushumi
  $140,000 + $21,000 - noyabr sotuvi $5,000 = $156,000
  (Tovar qolmagan, PURP yo'q)
= Javob: $156,000
! Ko'p uchraydigan xato: butun $84,000 ni kiritish yoki tovar to'liq qayta sotilgani uchun $5,000 sotuvni unutish.`],
    503: [
`Add the parent in full and the subsidiary's post-acquisition months, in full (not 80%).
# Step 1: Months in the group
  June to November: 6 months
# Step 2: Subsidiary gross profit to include
  $11,400 x 6/12 = $5,700
# Step 3: Group gross profit
  $24,500 + $5,700 = $30,200
= Answer: $30,200
! Common trap: also taking 80% of the subsidiary's figure. Results are added in full; the NCI share is shown separately at the bottom.`,
`Материнскую — полностью, дочернюю — за месяцы после покупки, тоже полностью (не 80%).
# Шаг 1: Месяцы в группе
  Июнь–ноябрь: 6 месяцев
# Шаг 2: Валовая прибыль дочерней к включению
  $11,400 x 6/12 = $5,700
# Шаг 3: Валовая прибыль группы
  $24,500 + $5,700 = $30,200
= Ответ: $30,200
! Частая ошибка: брать ещё и 80% от цифры дочерней. Результаты складываются полностью; доля NCI показывается отдельно внизу.`,
`Bosh kompaniyani to'liq, sho'bani xariddan keyingi oylar uchun, u ham to'liq (80% emas).
# 1-qadam: Guruhdagi oylar
  Iyun–noyabr: 6 oy
# 2-qadam: Kiritiladigan sho'ba yalpi foydasi
  $11,400 x 6/12 = $5,700
# 3-qadam: Guruh yalpi foydasi
  $24,500 + $5,700 = $30,200
= Javob: $30,200
! Ko'p uchraydigan xato: sho'ba sonining yana 80% ini olish. Natijalar to'liq qo'shiladi; NCI ulushi pastda alohida ko'rsatiladi.`],
    505: [
`Look at the real power each holding gives, not just the percentage.
- (i) 35% of NON-VOTING preference shares: no votes, so no influence. Not an associate.
- (ii) 15% with two of seven board seats: a real say in decisions, so significant influence. ASSOCIATE: equity account it.
- (iii) 45% with five of eight board seats: a majority of the board, so CONTROL. A subsidiary, consolidated line by line.
= Answer: (ii) only`,
`Смотрим на реальную власть, а не только на процент.
- (i) 35% НЕголосующих привилегированных акций: нет голосов, нет влияния. Не ассоциированная.
- (ii) 15% и два места из семи в совете: реальный голос в решениях, значит значительное влияние. АССОЦИИРОВАННАЯ: метод долевого участия.
- (iii) 45% и пять мест из восьми: большинство совета, значит КОНТРОЛЬ. Дочерняя, консолидируется построчно.
= Ответ: только (ii)`,
`Faqat foizga emas, haqiqiy hokimiyatga qaraymiz.
- (i) OVOZSIZ imtiyozli aksiyalarning 35% i: ovoz yo'q, ta'sir yo'q. Assotsiatsiyalangan emas.
- (ii) 15% va kengashdagi yettitadan ikki o'rin: qarorlarda haqiqiy ovoz, demak sezilarli ta'sir. ASSOTSIATSIYALANGAN: ulushli qatnashish usuli.
- (iii) 45% va sakkiztadan besh o'rin: kengash ko'pchiligi, demak NAZORAT. Sho'ba, qatorma-qator konsolidatsiya qilinadi.
= Javob: faqat (ii)`],
    506: [
`Check each statement.
- Equity accounting is ALWAYS used for 20% to 50%: FALSE. 20% to 50% only suggests significant influence; it may not exist, and the equity method is only used when the investor prepares group accounts.
- Dividends from an associate are shown as investment income in group accounts: FALSE. The group shows its share of the associate's PROFIT instead; counting dividends too would count them twice.`,
`Проверим каждое утверждение.
- Метод долевого участия ВСЕГДА применяют при 20%–50%: НЕВЕРНО. 20%–50% лишь предполагает значительное влияние; его может не быть, а метод применяют только при групповой отчётности.
- Дивиденды от ассоциированной показывают как инвестиционный доход в групповой отчётности: НЕВЕРНО. Группа показывает свою долю в ПРИБЫЛИ ассоциированной; учитывать ещё и дивиденды — значит учесть дважды.`,
`Har bir fikrni tekshiramiz.
- 20%–50% da ulushli qatnashish usuli HAR DOIM qo'llanadi: NOTO'G'RI. 20%–50% faqat sezilarli ta'sirni taxmin qiladi; u bo'lmasligi mumkin, usul esa faqat guruh hisoboti tuzilganda qo'llanadi.
- Assotsiatsiyalangan kompaniyadan dividendlar guruh hisobotida investitsiya daromadi sifatida ko'rsatiladi: NOTO'G'RI. Guruh uning FOYDASIDAGI ulushini ko'rsatadi; dividendlarni ham hisoblash ikki marta hisoblash bo'ladi.`],
    507: [
`Check each statement about a new associate.
- Goodwill is shown separately: FALSE. It stays inside the single "investment in associate" figure.
- The equity method is used: TRUE.
- The associate's TOTAL profit is shown: FALSE. Only the group's SHARE of it.
- Its assets and liabilities are added line by line: FALSE. That is consolidation, used only for subsidiaries.`,
`Проверим каждое утверждение о новой ассоциированной.
- Гудвил показывают отдельно: НЕВЕРНО. Он внутри единой цифры «инвестиция в ассоциированную».
- Применяется метод долевого участия: ВЕРНО.
- Показывают ВСЮ прибыль ассоциированной: НЕВЕРНО. Только ДОЛЮ группы.
- Её активы и обязательства складывают построчно: НЕВЕРНО. Это консолидация, только для дочерних.`,
`Yangi assotsiatsiyalangan kompaniya haqidagi har bir fikrni tekshiramiz.
- Gudvil alohida ko'rsatiladi: NOTO'G'RI. U yagona «assotsiatsiyalangan kompaniyaga investitsiya» soni ichida.
- Ulushli qatnashish usuli qo'llanadi: TO'G'RI.
- Uning BUTUN foydasi ko'rsatiladi: NOTO'G'RI. Faqat guruh ULUSHI.
- Uning aktiv va majburiyatlari qatorma-qator qo'shiladi: NOTO'G'RI. Bu konsolidatsiya, faqat sho'balar uchun.`],
  },
};
