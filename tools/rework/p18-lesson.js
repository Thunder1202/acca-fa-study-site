module.exports = {
  ...require('./p18q.js'),
  sections: [
    {
      simple: [
`A number on its own says little. "Profit $2,400" — is that good? You only know once you compare it: with last year, with the budget, with a similar business.

Ratios make that comparison easy by putting two related figures together, such as profit and sales. They fall into four groups: profitability (is it making money?), liquidity (can it pay its bills?), efficiency (how fast does cash go round?) and financial position (how risky is its borrowing?). For each ratio ask: what does it mean, what does a change mean, what is normal, and what are its limits?`,
`Число само по себе говорит мало. «Прибыль $2,400» — это хорошо? Это понятно, только если сравнить: с прошлым годом, с бюджетом, с похожим бизнесом.

Коэффициенты упрощают сравнение, ставя рядом две связанные цифры, например прибыль и продажи. Они делятся на четыре группы: рентабельность (зарабатывает ли?), ликвидность (может ли платить по счетам?), эффективность (как быстро оборачиваются деньги?) и финансовое положение (насколько рискованны займы?). По каждому коэффициенту спросите: что он значит, что значит его изменение, какова норма и каковы ограничения?`,
`Son o'zi kam narsa aytadi. «Foyda $2,400» — bu yaxshimi? Faqat solishtirganda bilasiz: o'tgan yil, byudjet, o'xshash biznes bilan.

Koeffitsientlar ikki bog'liq sonni, masalan foyda va sotuvni yonma-yon qo'yib, solishtirishni osonlashtiradi. Ular to'rt guruhga bo'linadi: rentabellik (pul topyaptimi?), likvidlik (hisoblarni to'lay oladimi?), samaradorlik (pul qanchalik tez aylanadi?) va moliyaviy holat (qarzlari qanchalik xavfli?). Har bir koeffitsient haqida so'rang: nimani anglatadi, o'zgarishi nimani anglatadi, me'yor qanday va cheklovlari nima?`],
      example: [
`A corner shop made an operating profit of $2,400 this year.
# On its own
  $2,400 tells us very little
# Compared with last year
  Last year: $2,700 on LOWER sales. Profit has fallen while sales rose
# Compared with a similar shop
  A similar shop keeps 15% of its sales as operating profit
  Our shop: $2,400 / $20,000 = 12%
= The ratio shows our shop keeps less of each sale than the other shop. Now we can ask why.`,
`Магазин у дома получил операционную прибыль $2,400 в этом году.
# Сама по себе
  $2,400 говорит очень мало
# По сравнению с прошлым годом
  В прошлом году: $2,700 при МЕНЬШИХ продажах. Прибыль упала, хотя продажи выросли
# По сравнению с похожим магазином
  Похожий магазин оставляет 15% продаж как операционную прибыль
  Наш магазин: $2,400 / $20,000 = 12%
= Коэффициент показывает, что наш магазин оставляет себе меньшую часть каждой продажи. Теперь можно спросить почему.`,
`Mahalla do'koni bu yil $2,400 operatsion foyda oldi.
# O'zi
  $2,400 juda kam narsa aytadi
# O'tgan yil bilan solishtirsak
  O'tgan yil: KAMROQ sotuvda $2,700. Sotuv oshgan, foyda esa tushgan
# O'xshash do'kon bilan solishtirsak
  O'xshash do'kon sotuvining 15% ini operatsion foyda sifatida saqlaydi
  Bizning do'kon: $2,400 / $20,000 = 12%
= Koeffitsient bizning do'kon har bir sotuvdan kamroq saqlashini ko'rsatadi. Endi sababini so'rash mumkin.`],
    },
    {
      simple: [
`Profitability ratios ask: how much profit does the business keep?

- Gross profit margin = gross profit / revenue. What is left from each sale after the cost of the goods.
- Operating profit margin = operating profit / revenue. What is left after ALL running costs too.
- ROCE = operating profit / capital employed. How much profit each $1 invested earns. Capital employed = equity + long-term loans.
- Net asset turnover = revenue / capital employed. How many dollars of sales each $1 invested brings in.

Operating margin x asset turnover = ROCE.`,
`Коэффициенты рентабельности спрашивают: сколько прибыли остаётся бизнесу?

- Валовая маржа = валовая прибыль / выручка. Что остаётся с каждой продажи после стоимости товара.
- Операционная маржа = операционная прибыль / выручка. Что остаётся и после ВСЕХ текущих расходов.
- ROCE = операционная прибыль / задействованный капитал. Сколько прибыли приносит каждый вложенный $1. Задействованный капитал = капитал + долгосрочные займы.
- Оборачиваемость чистых активов = выручка / задействованный капитал. Сколько долларов продаж приносит каждый вложенный $1.

Операционная маржа x оборачиваемость = ROCE.`,
`Rentabellik koeffitsientlari so'raydi: biznesga qancha foyda qoladi?

- Yalpi foyda marjasi = yalpi foyda / tushum. Tovar tannarxidan keyin har bir sotuvdan nima qoladi.
- Operatsion foyda marjasi = operatsion foyda / tushum. BARCHA joriy xarajatlardan keyin ham nima qoladi.
- ROCE = operatsion foyda / jalb qilingan kapital. Kiritilgan har $1 qancha foyda keltiradi. Jalb qilingan kapital = kapital + uzoq muddatli qarzlar.
- Sof aktivlar aylanmasi = tushum / jalb qilingan kapital. Kiritilgan har $1 necha dollar sotuv keltiradi.

Operatsion marja x aylanma = ROCE.`],
      example: [
`The corner shop's year.
# Margins
  Revenue $20,000 - cost of sales $14,600 = gross profit $5,400
  Gross margin: $5,400 / $20,000 = 27%
  Gross profit $5,400 - running costs $3,000 = operating profit $2,400
  Operating margin: $2,400 / $20,000 = 12%
# ROCE
  Capital employed: equity $9,000 + bank loan $3,000 = $12,000
  ROCE: $2,400 / $12,000 = 20%
# Asset turnover
  $20,000 / $12,000 = 1.67 times
= Check: 12% x 1.67 = 20%, the same as ROCE.`,
`Год магазина у дома.
# Маржи
  Выручка $20,000 - себестоимость $14,600 = валовая прибыль $5,400
  Валовая маржа: $5,400 / $20,000 = 27%
  Валовая прибыль $5,400 - текущие расходы $3,000 = операционная прибыль $2,400
  Операционная маржа: $2,400 / $20,000 = 12%
# ROCE
  Задействованный капитал: капитал $9,000 + банковский заём $3,000 = $12,000
  ROCE: $2,400 / $12,000 = 20%
# Оборачиваемость активов
  $20,000 / $12,000 = 1.67 раза
= Проверка: 12% x 1.67 = 20%, как и ROCE.`,
`Mahalla do'konining yili.
# Marjalar
  Tushum $20,000 - tannarx $14,600 = yalpi foyda $5,400
  Yalpi marja: $5,400 / $20,000 = 27%
  Yalpi foyda $5,400 - joriy xarajatlar $3,000 = operatsion foyda $2,400
  Operatsion marja: $2,400 / $20,000 = 12%
# ROCE
  Jalb qilingan kapital: kapital $9,000 + bank qarzi $3,000 = $12,000
  ROCE: $2,400 / $12,000 = 20%
# Aktivlar aylanmasi
  $20,000 / $12,000 = 1.67 marta
= Tekshiruv: 12% x 1.67 = 20%, ROCE bilan bir xil.`],
    },
    {
      simple: [
`Liquidity means: can the business pay its bills as they fall due?

- Current ratio = current assets / current liabilities. Around 1.5:1 is normal.
- Quick ratio (acid test) = (current assets - inventory) / current liabilities. Around 0.7:1 to 1:1 is normal. Inventory is left out because it is the slowest to turn into cash.

Remember the overdraft is a current liability. Very high is not always good either: it can mean unsold goods, slow customers or idle cash.`,
`Ликвидность — может ли бизнес платить по счетам в срок?

- Текущая ликвидность = оборотные активы / краткосрочные обязательства. Около 1.5:1 — норма.
- Быстрая ликвидность = (оборотные активы - запасы) / краткосрочные обязательства. Около 0.7:1–1:1 — норма. Запасы исключают, потому что они медленнее всего превращаются в деньги.

Помните: овердрафт — краткосрочное обязательство. Слишком высокое значение тоже не всегда хорошо: это может быть непроданный товар, медленные покупатели или простаивающие деньги.`,
`Likvidlik — biznes hisoblarni muddatida to'lay oladimi?

- Joriy likvidlik = aylanma aktivlar / qisqa muddatli majburiyatlar. Taxminan 1.5:1 me'yor.
- Tezkor likvidlik = (aylanma aktivlar - zaxira) / qisqa muddatli majburiyatlar. Taxminan 0.7:1–1:1 me'yor. Zaxira chiqariladi, chunki u pulga eng sekin aylanadi.

Esda tuting: overdraft qisqa muddatli majburiyat. Juda yuqori ham har doim yaxshi emas: bu sotilmagan tovar, sekin mijozlar yoki bekor turgan pul bo'lishi mumkin.`],
      example: [
`The corner shop at the year end.
# Current assets
  Inventory $2,400 + receivables $1,500 + cash $300 = $4,200
# Current liabilities
  Payables $1,800 + tax $500 + accruals $500 = $2,800
# Current ratio
  $4,200 / $2,800 = 1.5:1
# Quick ratio
  ($4,200 - $2,400) / $2,800 = 0.64:1
= 1.5:1 is fine, but 0.64:1 is a little low: most of its current assets are goods on the shelves.`,
`Магазин у дома на конец года.
# Оборотные активы
  Запасы $2,400 + дебиторы $1,500 + деньги $300 = $4,200
# Краткосрочные обязательства
  Кредиторы $1,800 + налог $500 + начисления $500 = $2,800
# Текущая ликвидность
  $4,200 / $2,800 = 1.5:1
# Быстрая ликвидность
  ($4,200 - $2,400) / $2,800 = 0.64:1
= 1.5:1 — нормально, но 0.64:1 немного низко: большая часть оборотных активов — товар на полках.`,
`Mahalla do'koni yil oxirida.
# Aylanma aktivlar
  Zaxira $2,400 + debitorlar $1,500 + pul $300 = $4,200
# Qisqa muddatli majburiyatlar
  Kreditorlar $1,800 + soliq $500 + hisoblanganlar $500 = $2,800
# Joriy likvidlik
  $4,200 / $2,800 = 1.5:1
# Tezkor likvidlik
  ($4,200 - $2,400) / $2,800 = 0.64:1
= 1.5:1 yaxshi, lekin 0.64:1 biroz past: aylanma aktivlarning ko'pi javondagi tovar.`],
    },
    {
      simple: [
`Efficiency ratios count DAYS: how long money is stuck at each stage.

- Inventory days = inventory / cost of sales x 365. How long goods sit before they sell.
- Receivables days = trade receivables / credit sales x 365. How long customers take to pay.
- Payables days = trade payables / cost of sales (or credit purchases) x 365. How long we take to pay suppliers.

Cash conversion cycle = inventory days + receivables days - payables days. The shorter it is, the less cash is tied up. If only total revenue is given, assume all sales are on credit.`,
`Коэффициенты эффективности считают ДНИ: сколько деньги «застревают» на каждом этапе.

- Дни запасов = запасы / себестоимость x 365. Сколько товар лежит до продажи.
- Дни дебиторов = торговые дебиторы / продажи в кредит x 365. Сколько покупатели тянут с оплатой.
- Дни кредиторов = торговые кредиторы / себестоимость (или закупки в кредит) x 365. Сколько мы тянем с оплатой поставщикам.

Цикл оборота денег = дни запасов + дни дебиторов - дни кредиторов. Чем он короче, тем меньше денег связано. Если дана только общая выручка, считайте все продажи кредитными.`,
`Samaradorlik koeffitsientlari KUNLARNI sanaydi: pul har bosqichda qancha «qotib» turadi.

- Zaxira kunlari = zaxira / tannarx x 365. Tovar sotilguncha qancha yotadi.
- Debitorlar kunlari = savdo debitorlari / kreditga sotuv x 365. Mijozlar qancha vaqtda to'laydi.
- Kreditorlar kunlari = savdo kreditorlari / tannarx (yoki kreditga xarid) x 365. Biz yetkazib beruvchilarga qancha vaqtda to'laymiz.

Pul aylanish sikli = zaxira kunlari + debitorlar kunlari - kreditorlar kunlari. U qancha qisqa bo'lsa, shuncha kam pul bog'lanadi. Faqat jami tushum berilgan bo'lsa, barcha sotuvni kreditga deb hisoblang.`],
      example: [
`The corner shop again. Cost of sales $14,600.
# Inventory days
  $2,400 / $14,600 x 365 = 60 days
# Receivables days
  Only cafes buy on credit: $7,300 a year, and they owe $1,500
  $1,500 / $7,300 x 365 = 75 days
# Payables days
  $1,800 / $14,600 x 365 = 45 days
# Cash conversion cycle
  60 + 75 - 45 = 90 days
= Using total revenue $20,000 for receivables would wrongly give 27 days.`,
`Снова магазин у дома. Себестоимость $14,600.
# Дни запасов
  $2,400 / $14,600 x 365 = 60 дней
# Дни дебиторов
  В кредит покупают только кафе: $7,300 в год, должны $1,500
  $1,500 / $7,300 x 365 = 75 дней
# Дни кредиторов
  $1,800 / $14,600 x 365 = 45 дней
# Цикл оборота денег
  60 + 75 - 45 = 90 дней
= Если взять для дебиторов всю выручку $20,000, ошибочно выйдет 27 дней.`,
`Yana mahalla do'koni. Tannarx $14,600.
# Zaxira kunlari
  $2,400 / $14,600 x 365 = 60 kun
# Debitorlar kunlari
  Kreditga faqat kafelar oladi: yiliga $7,300, qarzi $1,500
  $1,500 / $7,300 x 365 = 75 kun
# Kreditorlar kunlari
  $1,800 / $14,600 x 365 = 45 kun
# Pul aylanish sikli
  60 + 75 - 45 = 90 kun
= Debitorlar uchun jami tushum $20,000 olinsa, xato bilan 27 kun chiqadi.`],
    },
    {
      simple: [
`These ratios ask: how risky is the way the business is funded?

- Gearing = long-term debt / (equity + long-term debt). The share of long-term money that is borrowed.
- Debt/equity = long-term debt / equity.
- Interest cover = operating profit / interest. How many times profit covers the interest bill. Below 2 times is worrying.

Debt must be repaid with interest whatever happens, so more debt means more risk. The overdraft is a current liability, so it stays OUT of gearing. Issuing shares or revaluing assets raises equity, so gearing falls; a bonus issue changes nothing.`,
`Эти коэффициенты спрашивают: насколько рискованно финансируется бизнес?

- Финансовый рычаг = долгосрочный долг / (капитал + долгосрочный долг). Доля заёмных средств в долгосрочных деньгах.
- Долг/капитал = долгосрочный долг / капитал.
- Покрытие процентов = операционная прибыль / проценты. Во сколько раз прибыль покрывает проценты. Меньше 2 раз — тревожно.

Долг нужно вернуть с процентами в любом случае, поэтому больше долга — больше риска. Овердрафт — краткосрочное обязательство, он НЕ входит в рычаг. Выпуск акций или переоценка активов увеличивают капитал, рычаг падает; бонусная эмиссия ничего не меняет.`,
`Bu koeffitsientlar so'raydi: biznes qanchalik xavfli moliyalashtirilgan?

- Moliyaviy leveraj = uzoq muddatli qarz / (kapital + uzoq muddatli qarz). Uzoq muddatli pulning qarz olingan ulushi.
- Qarz/kapital = uzoq muddatli qarz / kapital.
- Foizlarni qoplash = operatsion foyda / foiz. Foyda foizni necha marta qoplaydi. 2 martadan kam — xavotirli.

Qarz har qanday holatda foiz bilan qaytarilishi kerak, shuning uchun ko'proq qarz — ko'proq xavf. Overdraft qisqa muddatli majburiyat, u leverajga KIRMAYDI. Aksiya chiqarish yoki aktivlarni qayta baholash kapitalni oshiradi, leveraj tushadi; bonus emissiya hech narsani o'zgartirmaydi.`],
      example: [
`The corner shop has equity of $9,000 and a $3,000 bank loan.
# Debt/equity
  $3,000 / $9,000 = 33.3%
# Gearing
  $3,000 / ($9,000 + $3,000) = 25%
# Interest cover
  Operating profit $2,400 / loan interest $300 = 8 times
# A busy-season overdraft
  A current liability, so it stays out of both gearing figures
= Low gearing and 8 times cover: comfortably safe.`,
`У магазина у дома капитал $9,000 и банковский заём $3,000.
# Долг/капитал
  $3,000 / $9,000 = 33.3%
# Финансовый рычаг
  $3,000 / ($9,000 + $3,000) = 25%
# Покрытие процентов
  Операционная прибыль $2,400 / проценты по займу $300 = 8 раз
# Овердрафт на сезон
  Краткосрочное обязательство, в рычаг не входит
= Низкий рычаг и покрытие в 8 раз: вполне безопасно.`,
`Mahalla do'konining kapitali $9,000 va bank qarzi $3,000.
# Qarz/kapital
  $3,000 / $9,000 = 33.3%
# Moliyaviy leveraj
  $3,000 / ($9,000 + $3,000) = 25%
# Foizlarni qoplash
  Operatsion foyda $2,400 / qarz foizi $300 = 8 marta
# Mavsumiy overdraft
  Qisqa muddatli majburiyat, leverajga kirmaydi
= Past leveraj va 8 marta qoplash: bemalol xavfsiz.`],
    },
  ],
  terms: {
    'Gross profit margin': ['Sales $20,000, gross profit $5,400: margin 27%.', 'Продажи $20,000, валовая прибыль $5,400: маржа 27%.', 'Sotuv $20,000, yalpi foyda $5,400: marja 27%.'],
    'Operating profit margin': ['Operating profit $2,400 on sales $20,000: 12%.', 'Операционная прибыль $2,400 при продажах $20,000: 12%.', '$20,000 sotuvda $2,400 operatsion foyda: 12%.'],
    'Return on capital employed (ROCE)': ['$2,400 profit on $12,000 invested: ROCE 20%.', 'Прибыль $2,400 на вложенные $12,000: ROCE 20%.', 'Kiritilgan $12,000 ga $2,400 foyda: ROCE 20%.'],
    'Capital employed': ['Equity $9,000 + long-term loan $3,000 = $12,000.', 'Капитал $9,000 + долгосрочный заём $3,000 = $12,000.', 'Kapital $9,000 + uzoq muddatli qarz $3,000 = $12,000.'],
    'Current ratio': ['Current assets $4,200 / current liabilities $2,800 = 1.5:1.', 'Оборотные активы $4,200 / краткосрочные обязательства $2,800 = 1.5:1.', 'Aylanma aktivlar $4,200 / qisqa muddatli majburiyatlar $2,800 = 1.5:1.'],
    'Quick ratio (acid test)': ['($4,200 - inventory $2,400) / $2,800 = 0.64:1.', '($4,200 - запасы $2,400) / $2,800 = 0.64:1.', '($4,200 - zaxira $2,400) / $2,800 = 0.64:1.'],
    'Cash conversion cycle': ['60 inventory days + 75 receivables days - 45 payables days = 90 days.', '60 дней запасов + 75 дней дебиторов - 45 дней кредиторов = 90 дней.', '60 zaxira kuni + 75 debitorlar kuni - 45 kreditorlar kuni = 90 kun.'],
    'Gearing': ['Loan $3,000 out of $12,000 of long-term money: 25%.', 'Заём $3,000 из $12,000 долгосрочных денег: 25%.', '$12,000 uzoq muddatli puldan $3,000 qarz: 25%.'],
    'Interest cover': ['Profit $2,400 covers interest of $300 eight times.', 'Прибыль $2,400 покрывает проценты $300 восемь раз.', '$2,400 foyda $300 foizni sakkiz marta qoplaydi.'],
  },
  add: [
    {
      term: ['Net asset turnover', 'Оборачиваемость чистых активов', 'Sof aktivlar aylanmasi'],
      definition: ['Revenue divided by capital employed: how much revenue each $1 invested brings in.', 'Выручка, делённая на задействованный капитал: сколько выручки приносит каждый вложенный $1.', 'Tushum jalb qilingan kapitalga bo\'linadi: kiritilgan har $1 qancha tushum keltiradi.'],
      example: ['Sales $20,000 / capital employed $12,000 = 1.67 times.', 'Продажи $20,000 / задействованный капитал $12,000 = 1.67 раза.', 'Sotuv $20,000 / jalb qilingan kapital $12,000 = 1.67 marta.'],
    },
    {
      term: ['Inventory days', 'Дни запасов', 'Zaxira kunlari'],
      definition: ['Inventory divided by cost of sales, times 365: how long goods are held before they are sold.', 'Запасы, делённые на себестоимость, умноженные на 365: сколько товар лежит до продажи.', 'Zaxira tannarxga bo\'linib 365 ga ko\'paytiriladi: tovar sotilguncha qancha saqlanadi.'],
      example: ['$2,400 / $14,600 x 365 = 60 days.', '$2,400 / $14,600 x 365 = 60 дней.', '$2,400 / $14,600 x 365 = 60 kun.'],
    },
    {
      term: ['Receivables days', 'Дни дебиторов', 'Debitorlar kunlari'],
      definition: ['Trade receivables divided by credit sales, times 365: how long credit customers take to pay.', 'Торговые дебиторы, делённые на продажи в кредит, умноженные на 365: сколько покупатели в кредит тянут с оплатой.', 'Savdo debitorlari kreditga sotuvga bo\'linib 365 ga ko\'paytiriladi: kredit mijozlar qancha vaqtda to\'laydi.'],
      example: ['$1,500 / $7,300 x 365 = 75 days.', '$1,500 / $7,300 x 365 = 75 дней.', '$1,500 / $7,300 x 365 = 75 kun.'],
    },
    {
      term: ['Payables days', 'Дни кредиторов', 'Kreditorlar kunlari'],
      definition: ['Trade payables divided by credit purchases (or cost of sales), times 365: how long the business takes to pay suppliers.', 'Торговые кредиторы, делённые на закупки в кредит (или себестоимость), умноженные на 365: сколько бизнес тянет с оплатой поставщикам.', 'Savdo kreditorlari kreditga xaridga (yoki tannarxga) bo\'linib 365 ga ko\'paytiriladi: biznes yetkazib beruvchilarga qancha vaqtda to\'laydi.'],
      example: ['$1,800 / $14,600 x 365 = 45 days.', '$1,800 / $14,600 x 365 = 45 дней.', '$1,800 / $14,600 x 365 = 45 kun.'],
    },
  ],
  glossaryOrder: ['Gross profit margin', 'Operating profit margin', 'Return on capital employed (ROCE)', 'Capital employed', 'Net asset turnover', 'Current ratio', 'Quick ratio (acid test)', 'Inventory days', 'Receivables days', 'Payables days', 'Cash conversion cycle', 'Gearing', 'Interest cover'],
};
