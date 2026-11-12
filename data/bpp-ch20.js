'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 35 (consolidated
// statement of profit or loss and associates), reworded with new figures. bppRef/bppPage point to BPP's own
// answer. Statement of financial position items are in bpp-ch19.js.
(function () {
  const TOPIC = 'chapter-20';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp20-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });

  const questions = [
    q('35.8', 270, 'single', `P Co owns 30% of the ordinary shares of A Co and has significant influence over it. How are A Co's results shown in the consolidated statement of profit or loss of the P group?`,
      pick([
        'A Co\'s revenues and costs are added to the group\'s, line by line.',
        'The group\'s 30% share of A Co\'s profit for the year is shown as one line, as share of profit of associate.',
        '30% of A Co\'s revenues and costs are added to the group\'s, line by line.',
        'All of A Co\'s revenues and costs are added line by line, then 70% of its profit is taken off.',
      ], 1),
`A Co is an ASSOCIATE (20%-50% with significant influence), so it is equity accounted, not consolidated.
- Line-by-line adding is only for subsidiaries.
- Equity accounting shows the group's share of the associate's profit as a single line.
= Answer: the 30% share of A Co's profit, shown as one line`,
`A Co — АССОЦИИРОВАННАЯ (20%-50% и значительное влияние), её учитывают по методу долевого участия, а не консолидируют.
- Построчное сложение — только для дочерних.
- Метод долевого участия показывает долю группы в прибыли одной строкой.
= Ответ: доля 30% в прибыли A Co одной строкой`,
`A Co — ASSOTSIATSIYALANGAN (20%-50% va sezilarli ta'sir), u konsolidatsiya qilinmaydi, ulushli usulda hisoblanadi.
- Satrma-satr qo'shish faqat sho'balar uchun.
- Ulushli usul guruhning foydadagi ulushini bitta satrda ko'rsatadi.
= Javob: A Co foydasining 30% ulushi bitta satrda`),

    q('35.11', 270, 'single', `P Co owns 60% of S Co. This year P Co sold goods to S Co for $40,000 at a gross margin of 30%; 25% of them are still in S Co's inventory. Revenue and cost of sales ($000): P Co 900 and 490; S Co 500 and 240. What is consolidated gross profit?`,
      pick(['$667,000', '$670,000', '$658,000', '$668,200'], 0),
`# Step 1: Add the two gross profits
  P Co 900 - 490 = 410; S Co 500 - 240 = 260; total 670 ($000)
# Step 2: Cancel the intra-group sale
  It is taken off revenue AND cost of sales, so gross profit does not change.
# Step 3: Unrealised profit in closing inventory
  40,000 x 30% x 25% = 3,000
# Step 4: Group gross profit
  670,000 - 3,000 = 667,000
= Answer: $667,000
! Take off ALL the unrealised profit, not just 60% of it.`,
`# Шаг 1: Сложим валовую прибыль
  P Co 900 - 490 = 410; S Co 500 - 240 = 260; итого 670 ($000)
# Шаг 2: Исключим внутригрупповую продажу
  Её вычитают и из выручки, И из себестоимости, валовая прибыль не меняется.
# Шаг 3: Нереализованная прибыль в запасах на конец
  40 000 x 30% x 25% = 3 000
# Шаг 4: Валовая прибыль группы
  670 000 - 3 000 = 667 000
= Ответ: $667 000
! Вычитают ВСЮ нереализованную прибыль, а не только 60%.`,
`# 1-qadam: Yalpi foydalarni qo'shamiz
  P Co 900 - 490 = 410; S Co 500 - 240 = 260; jami 670 ($000)
# 2-qadam: Guruh ichidagi sotuvni chiqaramiz
  U tushumdan VA tannarxdan ayiriladi, yalpi foyda o'zgarmaydi.
# 3-qadam: Yakuniy zaxiradagi amalga oshmagan foyda
  40 000 x 30% x 25% = 3 000
# 4-qadam: Guruh yalpi foydasi
  670 000 - 3 000 = 667 000
= Javob: $667 000
! Faqat 60% emas, BUTUN amalga oshmagan foyda ayiriladi.`),

    q('35.16', 271, 'single', `Which of these should Company A equity account in its consolidated financial statements? (1) 55% of W Co's ordinary shares. (2) 25% of X Co's non-voting preference shares. (3) 30% of Y Co's ordinary shares. (4) 22% of Z Co's ordinary shares, plus an agreement letting A appoint most of Z Co's board.`,
      pick(['1 and 4 only', '2 only', '3 only', '3 and 4 only'], 2),
`Equity accounting is for ASSOCIATES: significant influence, usually 20%-50% of the VOTES.
- (1) 55%: control, a subsidiary. Consolidated.
- (2) Non-voting shares give no influence. Not an associate.
- (3) 30% of the votes: an associate. YES.
- (4) Appointing most of the board is control, so Z Co is a subsidiary.
= Answer: 3 only`,
`Метод долевого участия — для АССОЦИИРОВАННЫХ: значительное влияние, обычно 20%-50% ГОЛОСОВ.
- (1) 55%: контроль, дочерняя. Консолидируется.
- (2) Акции без голоса не дают влияния. Не ассоциированная.
- (3) 30% голосов: ассоциированная. ДА.
- (4) Назначение большинства совета — контроль, Z Co дочерняя.
= Ответ: только 3`,
`Ulushli usul ASSOTSIATSIYALANGANlar uchun: sezilarli ta'sir, odatda OVOZlarning 20%-50%.
- (1) 55%: nazorat, sho'ba. Konsolidatsiya qilinadi.
- (2) Ovozsiz aksiyalar ta'sir bermaydi. Assotsiatsiyalangan emas.
- (3) 30% ovoz: assotsiatsiyalangan. HA.
- (4) Kengash ko'pchiligini tayinlash — nazorat, Z Co sho'ba.
= Javob: faqat 3`),

    q('35.22', 272, 'single', `P Co bought 80% of S Co on 1 May. For the year to 31 December, P Co's profit was $95,000 and S Co's was $72,000, earned evenly. Neither paid dividends. What profit is attributable to the owners of P Co?`,
      pick(['$133,400', '$152,600', '$143,000', '$124,600'], 0),
`# Step 1: S Co's profit since acquisition
  72,000 x 8/12 (May to December) = 48,000
# Step 2: Group share
  48,000 x 80% = 38,400
# Step 3: Attributable to P Co's owners
  95,000 + 38,400 = 133,400
= Answer: $133,400
! Only profit earned AFTER the acquisition is brought in.`,
`# Шаг 1: Прибыль S Co после покупки
  72 000 x 8/12 (май-декабрь) = 48 000
# Шаг 2: Доля группы
  48 000 x 80% = 38 400
# Шаг 3: Приходится на владельцев P Co
  95 000 + 38 400 = 133 400
= Ответ: $133 400
! Включают только прибыль, заработанную ПОСЛЕ покупки.`,
`# 1-qadam: S Co ning xariddan keyingi foydasi
  72 000 x 8/12 (may-dekabr) = 48 000
# 2-qadam: Guruh ulushi
  48 000 x 80% = 38 400
# 3-qadam: P Co egalariga tegishli
  95 000 + 38 400 = 133 400
= Javob: $133 400
! Faqat xariddan KEYIN topilgan foyda kiritiladi.`),

    q('35.23', 272, 'single', `P Co has owned 75% of S Co for several years. This year P Co's profit was $150,000 and S Co's $48,000. S Co sold goods to P Co for $60,000 at a gross margin of 25%; 20% of them are still in P Co's inventory. What profit is attributable to the owners of P Co?`,
      pick(['$183,750', '$186,000', '$183,000', '$195,000'], 0),
`# Step 1: Unrealised profit
  60,000 x 25% x 20% = 3,000. S Co was the seller, so it reduces S Co's profit.
# Step 2: Group profit
  150,000 + 48,000 - 3,000 = 195,000
# Step 3: NCI share
  25% x (48,000 - 3,000) = 11,250
# Step 4: Owners of P Co
  195,000 - 11,250 = 183,750
= Answer: $183,750`,
`# Шаг 1: Нереализованная прибыль
  60 000 x 25% x 20% = 3 000. Продавала S Co, уменьшается прибыль S Co.
# Шаг 2: Прибыль группы
  150 000 + 48 000 - 3 000 = 195 000
# Шаг 3: Доля NCI
  25% x (48 000 - 3 000) = 11 250
# Шаг 4: Владельцам P Co
  195 000 - 11 250 = 183 750
= Ответ: $183 750`,
`# 1-qadam: Amalga oshmagan foyda
  60 000 x 25% x 20% = 3 000. Sotuvchi S Co, S Co foydasi kamayadi.
# 2-qadam: Guruh foydasi
  150 000 + 48 000 - 3 000 = 195 000
# 3-qadam: NCI ulushi
  25% x (48 000 - 3 000) = 11 250
# 4-qadam: P Co egalariga
  195 000 - 11 250 = 183 750
= Javob: $183 750`),

    q('35.25', 273, 'single', `P Co bought 80% of S Co on 1 October; the year ends on 31 December. For the full year ($000): P Co revenue 4,200 and cost of sales 2,100; S Co revenue 3,000 and cost of sales 2,000, earned evenly. Since the acquisition S Co has sold goods to P Co for $6,000 a month at a 20% mark-up, and half of these goods are still in P Co's inventory. What is group gross profit?`,
      pick(['$2,348,500', '$2,350,000', '$3,098,500', '$2,330,500'], 0),
`# Step 1: Bring in S Co for 3 months only
  Revenue 3,000 x 3/12 = 750; cost of sales 2,000 x 3/12 = 500
# Step 2: Gross profit before adjustments
  (4,200 - 2,100) + (750 - 500) = 2,350 ($000)
# Step 3: Intra-group sales (6,000 x 3 = 18,000)
  Taken off revenue and cost of sales alike: no effect on gross profit.
# Step 4: Unrealised profit
  18,000 x 20/120 = 3,000 profit; half unsold: 1,500
# Step 5: Group gross profit
  2,350,000 - 1,500 = 2,348,500
= Answer: $2,348,500`,
`# Шаг 1: S Co включаем только за 3 месяца
  Выручка 3 000 x 3/12 = 750; себестоимость 2 000 x 3/12 = 500
# Шаг 2: Валовая прибыль до корректировок
  (4 200 - 2 100) + (750 - 500) = 2 350 ($000)
# Шаг 3: Внутригрупповые продажи (6 000 x 3 = 18 000)
  Вычитают из выручки и себестоимости одинаково: на валовую прибыль не влияют.
# Шаг 4: Нереализованная прибыль
  18 000 x 20/120 = 3 000 прибыли; половина не продана: 1 500
# Шаг 5: Валовая прибыль группы
  2 350 000 - 1 500 = 2 348 500
= Ответ: $2 348 500`,
`# 1-qadam: S Co faqat 3 oy uchun kiritiladi
  Tushum 3 000 x 3/12 = 750; tannarx 2 000 x 3/12 = 500
# 2-qadam: Tuzatishlardan oldingi yalpi foyda
  (4 200 - 2 100) + (750 - 500) = 2 350 ($000)
# 3-qadam: Guruh ichidagi sotuvlar (6 000 x 3 = 18 000)
  Tushum va tannarxdan bir xil ayiriladi: yalpi foydaga ta'sir qilmaydi.
# 4-qadam: Amalga oshmagan foyda
  18 000 x 20/120 = 3 000 foyda; yarmi sotilmagan: 1 500
# 5-qadam: Guruh yalpi foydasi
  2 350 000 - 1 500 = 2 348 500
= Javob: $2 348 500`),

    q('35.26', 273, 'single', `P Co has owned 60% of S Co for years. At the year end P Co holds inventory, costing it $48,000, that it bought from S Co at a mark-up of 25%. What is the effect on profit attributable to the NCI and to the owners of P Co?`,
      pick([
        'NCI: no effect. P Co owners: down $9,600',
        'NCI: down $3,840. P Co owners: down $5,760',
        'NCI: down $4,800. P Co owners: down $7,200',
        'NCI: no effect. P Co owners: down $12,000',
      ], 1),
`# Step 1: Unrealised profit
  48,000 x 25/125 = 9,600
# Step 2: Who bears it?
  S Co, the subsidiary, made the sale, so it is shared in ownership proportions.
  NCI 40%: 9,600 x 40% = 3,840
  P Co owners 60%: 9,600 x 60% = 5,760
= Answer: NCI down $3,840; P Co owners down $5,760`,
`# Шаг 1: Нереализованная прибыль
  48 000 x 25/125 = 9 600
# Шаг 2: Кто её несёт?
  Продавала дочерняя S Co, поэтому делится пропорционально долям.
  NCI 40%: 9 600 x 40% = 3 840
  Владельцы P Co 60%: 9 600 x 60% = 5 760
= Ответ: NCI минус $3 840; владельцы P Co минус $5 760`,
`# 1-qadam: Amalga oshmagan foyda
  48 000 x 25/125 = 9 600
# 2-qadam: Kim ko'taradi?
  Sotuvchi sho'ba S Co, shuning uchun ulushlarga mutanosib bo'linadi.
  NCI 40%: 9 600 x 40% = 3 840
  P Co egalari 60%: 9 600 x 60% = 5 760
= Javob: NCI $3 840 kamayadi; P Co egalari $5 760 kamayadi`),

    q('35.27', 273, 'single', `P Co owns 70% of S Co. S Co's profit for the year was $40 million. In the year P Co sold goods to S Co for $5 million at cost plus 25%; 60% are still in S Co's inventory. What is the NCI's share of profit for the year?`,
      pick(['$12 million', '$11.82 million', '$28 million', '$11.4 million'], 0),
`# Step 1: Who made the unrealised profit?
  P Co, the PARENT, was the seller. The adjustment comes off P Co's profit, not S Co's.
# Step 2: NCI share of S Co's profit
  40 million x 30% = 12 million
= Answer: $12 million
! Only when the SUBSIDIARY sells does the unrealised profit reduce the NCI's share.`,
`# Шаг 1: Кто получил нереализованную прибыль?
  Продавала МАТЕРИНСКАЯ P Co. Корректировку вычитают из прибыли P Co, а не S Co.
# Шаг 2: Доля NCI в прибыли S Co
  40 млн x 30% = 12 млн
= Ответ: $12 млн
! Нереализованная прибыль уменьшает долю NCI, только когда продаёт ДОЧЕРНЯЯ.`,
`# 1-qadam: Amalga oshmagan foydani kim olgan?
  Sotuvchi ONA kompaniya P Co. Tuzatish S Co emas, P Co foydasidan ayiriladi.
# 2-qadam: S Co foydasidagi NCI ulushi
  40 mln x 30% = 12 mln
= Javob: $12 mln
! Amalga oshmagan foyda NCI ulushini faqat SHO'BA sotganda kamaytiradi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
