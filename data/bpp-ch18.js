'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 37 (interpretation
// of financial statements), reworded with new figures. bppRef/bppPage point to BPP's own answer. Ratio
// formulas follow Kaplan 2025-26: gearing = long-term debt / (equity + long-term debt) or debt / equity;
// interest cover = PBFIT (profit before financing and income taxes, the IFRS 18 term) / interest payable;
// payables period = trade payables / credit purchases x 365.
(function () {
  const TOPIC = 'chapter-18';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp18-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('37.1', 274, 'single', `Which of these would help a highly geared company reduce its gearing?`,
      pick(['A rights issue of equity shares', 'Issuing more long-term loan notes', 'A bonus issue of shares', 'Paying dividends on its equity shares'], 0),
`Gearing compares debt with equity. To lower it, cut debt or raise equity.
- Rights issue: new equity for cash. Equity goes up, so gearing goes DOWN. YES.
- More loan notes: more debt, so gearing goes up.
- Bonus issue: moves reserves into share capital. Total equity stays the same.
- Dividends: reduce retained earnings, so equity falls and gearing goes up.
= Answer: a rights issue of equity shares`,
`Гиринг сравнивает долг с капиталом. Чтобы снизить, уменьшают долг или увеличивают капитал.
- Выпуск прав: новый капитал за деньги. Капитал растёт, гиринг ПАДАЕТ. ДА.
- Новые облигации: больше долга, гиринг растёт.
- Бонусный выпуск: переносит резервы в акционерный капитал. Общий капитал не меняется.
- Дивиденды: уменьшают нераспределённую прибыль, капитал падает, гиринг растёт.
= Ответ: выпуск прав на акции`,
`Giring qarzni kapital bilan solishtiradi. Uni kamaytirish uchun qarz kamaytiriladi yoki kapital oshiriladi.
- Huquqlar emissiyasi: pulga yangi kapital. Kapital oshadi, giring KAMAYADI. HA.
- Yangi obligatsiyalar: ko'proq qarz, giring oshadi.
- Bonus emissiya: zaxiralarni ustav kapitaliga ko'chiradi. Umumiy kapital o'zgarmaydi.
- Dividendlar: taqsimlanmagan foydani kamaytiradi, kapital kamayadi, giring oshadi.
= Javob: aksiyalar huquqlari emissiyasi`),

    q('37.2', 274, 'single', `A company's gross profit margin rose from 24% last year to 27% this year. Which of these is most likely to have caused the rise?`,
      pick([
        'An increase in sales volume',
        'A purchase made last December recorded as if it happened this January',
        'Last year\'s closing inventory was overstated',
        'Last year\'s closing inventory was understated',
      ], 3),
`# Step 1: Follow last year's closing inventory into this year
  Last year's closing inventory is this year's opening inventory.
# Step 2: If it was understated
  This year's opening inventory is too low, so this year's cost of sales is too low, so this year's gross profit (and margin) is too HIGH.
# Step 3: The other options
  More sales volume alone does not change the margin percentage.
  A December purchase moved into January raises THIS year's cost of sales, lowering the margin.
  Overstated inventory last year raises this year's cost of sales, lowering the margin.
= Answer: last year's closing inventory was understated`,
`# Шаг 1: Проследим запасы на конец прошлого года
  Запасы на конец прошлого года — это запасы на начало этого.
# Шаг 2: Если они занижены
  Запасы на начало этого года занижены, себестоимость занижена, валовая прибыль (и маржа) ЗАВЫШЕНА.
# Шаг 3: Другие варианты
  Рост объёма продаж сам по себе процент маржи не меняет.
  Декабрьская закупка, перенесённая на январь, повышает себестоимость ЭТОГО года и снижает маржу.
  Завышенные запасы прошлого года повышают себестоимость этого года и снижают маржу.
= Ответ: запасы на конец прошлого года были занижены`,
`# 1-qadam: O'tgan yil yakuniy zaxirasini kuzatamiz
  O'tgan yilning yakuniy zaxirasi — shu yilning boshlang'ich zaxirasi.
# 2-qadam: Agar u kamaytirilgan bo'lsa
  Shu yil boshlang'ich zaxira kam, tannarx kam, yalpi foyda (va marja) OSHGAN.
# 3-qadam: Boshqa variantlar
  Faqat sotuv hajmi o'sishi marja foizini o'zgartirmaydi.
  Yanvarga ko'chirilgan dekabr xaridi SHU yil tannarxini oshirib, marjani kamaytiradi.
  O'tgan yil oshirilgan zaxira shu yil tannarxini oshirib, marjani kamaytiradi.
= Javob: o'tgan yil yakuniy zaxirasi kamaytirilgan`),

    q('37.3', 274, 'single', `Capital employed is equity plus long-term debt. Which transaction would INCREASE it?`,
      pick([
        'Selling inventory at a profit',
        'Writing off an irrecoverable debt',
        'Paying a supplier in cash',
        'Increasing the bank overdraft to buy a non-current asset',
      ], 0),
`- Selling at a profit: the profit adds to retained earnings, so equity goes UP. YES.
- Writing off a debt: an expense, so equity falls.
- Paying a supplier: cash and payables both fall. Equity does not change.
- An overdraft is a CURRENT liability, not long-term debt, so capital employed does not change.
= Answer: selling inventory at a profit`,
`- Продажа с прибылью: прибыль увеличивает нераспределённую прибыль, капитал РАСТЁТ. ДА.
- Списание долга: расход, капитал падает.
- Оплата поставщику: уменьшаются и деньги, и кредиторы. Капитал не меняется.
- Овердрафт — КРАТКОСРОЧНОЕ обязательство, а не долгосрочный долг, задействованный капитал не меняется.
= Ответ: продажа запасов с прибылью`,
`- Foyda bilan sotish: foyda taqsimlanmagan foydaga qo'shiladi, kapital OSHADI. HA.
- Qarzni hisobdan chiqarish: xarajat, kapital kamayadi.
- Yetkazib beruvchiga to'lash: pul ham, kreditorlar ham kamayadi. Kapital o'zgarmaydi.
- Overdraft — JORIY majburiyat, uzoq muddatli qarz emas, ishlatilgan kapital o'zgarmaydi.
= Javob: zaxirani foyda bilan sotish`),

    q('37.4', 275, 'single', `For the year: sales $58,000; cost of sales $41,800; opening inventory $7,200; closing inventory $5,100; trade payables at the year end $5,960. What is the payables payment period, using purchases?`,
      pick(['55 days', '52 days', '50 days', '38 days'], 0),
`# Step 1: Purchases
  Cost of sales = opening inventory + purchases - closing inventory
  Purchases = 41,800 - 7,200 + 5,100 = 39,700
# Step 2: Payables period
  5,960 / 39,700 x 365 = 54.8, about 55 days
= Answer: 55 days
! Using cost of sales instead of purchases gives 52 days. The question asks for purchases.`,
`# Шаг 1: Закупки
  Себестоимость = запасы на начало + закупки - запасы на конец
  Закупки = 41 800 - 7 200 + 5 100 = 39 700
# Шаг 2: Срок оплаты кредиторам
  5 960 / 39 700 x 365 = 54,8, около 55 дней
= Ответ: 55 дней
! Если взять себестоимость вместо закупок, выйдет 52 дня. В вопросе — закупки.`,
`# 1-qadam: Xaridlar
  Tannarx = boshlang'ich zaxira + xaridlar - yakuniy zaxira
  Xaridlar = 41 800 - 7 200 + 5 100 = 39 700
# 2-qadam: Kreditorlarga to'lash muddati
  5 960 / 39 700 x 365 = 54,8, taxminan 55 kun
= Javob: 55 kun
! Xaridlar o'rniga tannarx olinsa, 52 kun chiqadi. Savolda xaridlar so'ralgan.`),

    q('37.5', 275, 'single', `A company's statement of financial position: non-current assets 420; inventory 80; receivables 125; prepayments 25 (current assets 230); equity 470; non-current loan 95; payables 40; bank overdraft 45 (current liabilities 85). Using gearing = debt / (debt + equity), what are gearing, the quick ratio and the current ratio?`,
      pick([
        'Gearing 17%; quick ratio 1.76; current ratio 2.71',
        'Gearing 20%; quick ratio 1.76; current ratio 2.71',
        'Gearing 17%; quick ratio 2.71; current ratio 1.76',
        'Gearing 17%; quick ratio 1.47; current ratio 2.71',
      ], 0),
`# Step 1: Gearing
  95 / (95 + 470) = 95 / 565 = 16.8%, about 17%
# Step 2: Quick ratio (current assets less inventory)
  (230 - 80) / 85 = 150 / 85 = 1.76
# Step 3: Current ratio
  230 / 85 = 2.71
= Answer: gearing 17%; quick 1.76; current 2.71
! 95 / 470 = 20% is the debt/equity version. The question asks for debt / (debt + equity).`,
`# Шаг 1: Гиринг
  95 / (95 + 470) = 95 / 565 = 16,8%, около 17%
# Шаг 2: Быстрая ликвидность (оборотные активы без запасов)
  (230 - 80) / 85 = 150 / 85 = 1,76
# Шаг 3: Текущая ликвидность
  230 / 85 = 2,71
= Ответ: гиринг 17%; быстрая 1,76; текущая 2,71
! 95 / 470 = 20% — это вариант «долг / капитал». В вопросе — долг / (долг + капитал).`,
`# 1-qadam: Giring
  95 / (95 + 470) = 95 / 565 = 16,8%, taxminan 17%
# 2-qadam: Tezkor likvidlik (joriy aktivlar minus zaxira)
  (230 - 80) / 85 = 150 / 85 = 1,76
# 3-qadam: Joriy likvidlik
  230 / 85 = 2,71
= Javob: giring 17%; tezkor 1,76; joriy 2,71
! 95 / 470 = 20% — «qarz / kapital» varianti. Savolda qarz / (qarz + kapital).`),

    q('37.6', 275, 'single', `Which ratio measures how much a business owes compared with its size?`,
      pick(['Asset turnover', 'Profit margin', 'Gearing', 'Return on capital employed'], 2),
`- Asset turnover: how well assets generate sales.
- Profit margin: profit as a % of sales.
- Gearing: long-term debt compared with equity or capital employed. YES.
- ROCE: profit as a % of capital employed.
= Answer: gearing`,
`- Оборачиваемость активов: насколько активы приносят продажи.
- Маржа прибыли: прибыль в % от продаж.
- Гиринг: долгосрочный долг в сравнении с капиталом или задействованным капиталом. ДА.
- ROCE: прибыль в % от задействованного капитала.
= Ответ: гиринг`,
`- Aktiv aylanmasi: aktivlar qancha sotuv keltiradi.
- Foyda marjasi: sotuvning % sifatida foyda.
- Giring: uzoq muddatli qarz kapital yoki ishlatilgan kapital bilan solishtiriladi. HA.
- ROCE: ishlatilgan kapitalning % sifatida foyda.
= Javob: giring`),

    q('37.7', 275, 'single', `A business works on a gross profit margin of 25%. Gross profit on a sale was $900 and expenses were $720. What is the net profit margin?`,
      pick(['5%', '6.67%', '20%', '25%'], 0),
`# Step 1: Sales
  Gross profit is 25% of sales: 900 / 0.25 = 3,600
# Step 2: Net profit
  900 - 720 = 180
# Step 3: Net margin
  180 / 3,600 = 5%
= Answer: 5%
! Divide by SALES, not by gross profit (20%) or cost of sales (6.67%).`,
`# Шаг 1: Продажи
  Валовая прибыль = 25% продаж: 900 / 0,25 = 3 600
# Шаг 2: Чистая прибыль
  900 - 720 = 180
# Шаг 3: Чистая маржа
  180 / 3 600 = 5%
= Ответ: 5%
! Делите на ПРОДАЖИ, а не на валовую прибыль (20%) или себестоимость (6,67%).`,
`# 1-qadam: Sotuv
  Yalpi foyda sotuvning 25%: 900 / 0,25 = 3 600
# 2-qadam: Sof foyda
  900 - 720 = 180
# 3-qadam: Sof marja
  180 / 3 600 = 5%
= Javob: 5%
! SOTUVga bo'ling, yalpi foydaga (20%) yoki tannarxga (6,67%) emas.`),

    q('37.8', 275, 'single', `A company has ($000): inventories 1,500; receivables 900; bank overdraft 150; payables 850. In its industry the normal current ratio is 1.6, and companies that manage liquidity well have a current ratio BELOW the norm. Which statement describes its liquidity?`,
      pick([
        'Liquidity looks well managed, because the overdraft is small.',
        'Liquidity looks poorly controlled, as shown by the large payables balance.',
        'Liquidity looks poorly controlled, as shown by the relatively high current ratio.',
        'Liquidity looks poorly controlled, as shown by having an overdraft at all.',
      ], 2),
`# Step 1: Current ratio
  Current assets: 1,500 + 900 = 2,400
  Current liabilities: 150 + 850 = 1,000
  2,400 / 1,000 = 2.4
# Step 2: Compare with the industry
  2.4 is well ABOVE the norm of 1.6. Good managers here run BELOW the norm.
  Too much is tied up in inventory and receivables.
= Answer: poorly controlled, shown by the relatively high current ratio`,
`# Шаг 1: Текущая ликвидность
  Оборотные активы: 1 500 + 900 = 2 400
  Краткосрочные обязательства: 150 + 850 = 1 000
  2 400 / 1 000 = 2,4
# Шаг 2: Сравним с отраслью
  2,4 намного ВЫШЕ нормы 1,6. Хорошие компании здесь держатся НИЖЕ нормы.
  Слишком много связано в запасах и дебиторах.
= Ответ: плохо контролируется, что видно по высокой текущей ликвидности`,
`# 1-qadam: Joriy likvidlik
  Joriy aktivlar: 1 500 + 900 = 2 400
  Joriy majburiyatlar: 150 + 850 = 1 000
  2 400 / 1 000 = 2,4
# 2-qadam: Soha bilan solishtiramiz
  2,4 me'yor 1,6 dan ancha YUQORI. Yaxshi kompaniyalar bu yerda me'yordan PAST turadi.
  Zaxira va debitorlarda juda ko'p pul bog'langan.
= Javob: yomon nazorat qilinadi, bu nisbatan yuqori joriy likvidlikda ko'rinadi`),

    q('37.9', 275, 'single', `Why are financial statements analysed?`,
      pick([
        'So the analyst can find out the company\'s accounting policies',
        'So the figures mean more, by comparing them with past performance and with other companies',
        'To get back to the "real" figures, free of IFRS requirements',
        'To produce a report that replaces the financial statements',
      ], 1),
`A figure on its own says little. Ratios become useful when compared: with earlier years, with other companies and with the industry.
- Accounting policies are disclosed in the notes; no analysis is needed to find them.
- Analysis does not undo IFRS or replace the statements.
= Answer: to understand the figures better by comparing them with past performance and other companies`,
`Отдельная цифра мало что говорит. Коэффициенты полезны при сравнении: с прошлыми годами, с другими компаниями и с отраслью.
- Учётная политика раскрыта в примечаниях; анализ для этого не нужен.
- Анализ не отменяет IFRS и не заменяет отчётность.
= Ответ: лучше понять цифры, сравнивая их с прошлыми результатами и другими компаниями`,
`Alohida raqam kam narsa aytadi. Ko'rsatkichlar solishtirilganda foydali: o'tgan yillar, boshqa kompaniyalar va soha bilan.
- Hisob siyosati izohlarda ochilgan; buning uchun tahlil kerak emas.
- Tahlil IFRS ni bekor qilmaydi va hisobotni almashtirmaydi.
= Javob: raqamlarni o'tgan natijalar va boshqa kompaniyalar bilan solishtirib yaxshiroq tushunish`),

    q('37.10', 275, 'number', `For the year, a company's profit before financing and income taxes (PBFIT) is $63,000. It pays interest of $28,000 and has loans of $350,000. What is its interest cover? (times, to 2 decimal places)`,
      amount(2.25, '2.25 times'),
`# Step 1: The formula
  Interest cover = PBFIT / interest payable
# Step 2: Calculate
  63,000 / 28,000 = 2.25
= Answer: 2.25 times
! The loan balance ($350,000) is not part of this ratio.`,
`# Шаг 1: Формула
  Покрытие процентов = PBFIT / проценты к уплате
# Шаг 2: Расчёт
  63 000 / 28 000 = 2,25
= Ответ: 2,25 раза
! Сумма займа ($350 000) в этот коэффициент не входит.`,
`# 1-qadam: Formula
  Foizni qoplash = PBFIT / to'lanadigan foiz
# 2-qadam: Hisob
  63 000 / 28 000 = 2,25
= Javob: 2,25 marta
! Qarz summasi ($350 000) bu ko'rsatkichga kirmaydi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
