'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025): payables items from
// section 11 and section 12 (provisions and contingencies), reworded with new figures. bppRef/bppPage point to
// BPP's own answer. Left out: 12.11-12.13 (expected values, which Kaplan's chapter does not teach). 12.1 keeps
// only the two rows Kaplan covers.
(function () {
  const TOPIC = 'chapter-11';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp11-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('11.15', 223, 'single', `A trader's trial balance includes: opening inventory $21,400; trade receivables $48,300; trade payables $29,750; bank overdraft $6,420; a loan repayable in three years $18,000. What are current liabilities?`,
      pick(['$36,170', '$54,170', '$29,750', '$84,470'], 0),
`# Step 1: Pick out amounts due within 12 months
  Trade payables 29,750
  Bank overdraft 6,420 (repayable on demand)
# Step 2: Leave out
  The loan is due in three years: a non-current liability.
  Inventory and receivables are assets.
# Step 3: Total
  29,750 + 6,420 = 36,170
= Answer: $36,170`,
`# Шаг 1: Выберем суммы к оплате в течение 12 месяцев
  Кредиторы 29 750
  Овердрафт 6 420 (погашается по требованию)
# Шаг 2: Не включаем
  Кредит на три года: долгосрочное обязательство.
  Запасы и дебиторы — активы.
# Шаг 3: Итог
  29 750 + 6 420 = 36 170
= Ответ: $36 170`,
`# 1-qadam: 12 oy ichida to'lanadiganlarni ajratamiz
  Kreditorlar 29 750
  Overdraft 6 420 (talab bo'yicha qaytariladi)
# 2-qadam: Kiritmaymiz
  Uch yillik qarz: uzoq muddatli majburiyat.
  Zaxira va debitorlar — aktivlar.
# 3-qadam: Jami
  29 750 + 6 420 = 36 170
= Javob: $36 170`),

    q('11.17', 223, 'single', `What is the entry for a settlement discount RECEIVED from a supplier?`,
      pick([
        'Dr Trade payables, Cr Expenses',
        'Dr Expenses, Cr Trade payables',
        'Dr Discounts received (income), Cr Trade payables',
        'Dr Trade payables, Cr Discounts received (income)',
      ], 3),
`# Step 1: Effect on the debt
  We pay less than we owed, so the rest of the debt is cleared: Dr Trade payables.
# Step 2: Effect on profit
  The saving is income: Cr Discounts received.
= Answer: Dr Trade payables, Cr Discounts received (income)`,
`# Шаг 1: Влияние на долг
  Платим меньше долга, остаток долга закрывается: Дт Кредиторы.
# Шаг 2: Влияние на прибыль
  Экономия — доход: Кт Полученные скидки.
= Ответ: Дт Кредиторы, Кт Полученные скидки (доход)`,
`# 1-qadam: Qarzga ta'siri
  Qarzdan kam to'laymiz, qarzning qolgani yopiladi: Dt Kreditorlar.
# 2-qadam: Foydaga ta'siri
  Tejalgan summa daromad: Kt Olingan chegirmalar.
= Javob: Dt Kreditorlar, Kt Olingan chegirmalar (daromad)`),

    q('11.18', 224, 'single', `Which of these are payables of a business? (1) Interest the bank owes the business. (2) Loans the business has made to employees. (3) Money customers owe the business. (4) Tax the business owes to the tax authority.`,
      pick(['1 and 3 only', '2 and 3 only', '2 and 4 only', '4 only'], 3),
`A payable is money the BUSINESS owes to someone else.
- (1), (2) and (3): money owed TO the business. These are receivables.
- (4) Tax owed by the business: a payable. YES.
= Answer: 4 only`,
`Кредиторская задолженность — деньги, которые должен САМ бизнес.
- (1), (2) и (3): деньги, которые должны бизнесу. Это дебиторы.
- (4) Налог, который должен бизнес: кредиторская задолженность. ДА.
= Ответ: только 4`,
`Kreditorlik — BIZNESning o'zi boshqalarga qarzi.
- (1), (2) va (3): biznesga qarz bo'lgan pul. Bular debitorlar.
- (4) Biznes to'lashi kerak bo'lgan soliq: kreditorlik. HA.
= Javob: faqat 4`),

    q('12.1', 224, 'matrix', `Under IAS 37, is each statement true or false?`,
      grid(TF, [
        ['Contingent assets must be recognised in the financial statements, to be prudent.', 1],
        ['If an outflow becomes probable, the item is no longer a contingent liability: it is recognised as a provision.', 0],
      ]),
`- Contingent assets are never recognised. A probable one is only disclosed in a note: FALSE.
- Once an outflow is probable and can be reliably estimated, it meets the definition of a provision and is recognised: TRUE.`,
`- Условные активы не признают. Вероятный только раскрывают в примечании: НЕВЕРНО.
- Если выбытие стало вероятным и его можно надёжно оценить, это уже оценочное обязательство, его признают: ВЕРНО.`,
`- Shartli aktivlar tan olinmaydi. Ehtimoliysi faqat izohda ochiladi: NOTO'G'RI.
- Chiqim ehtimoliy bo'lib, ishonchli baholansa, bu baholangan majburiyat, u tan olinadi: TO'G'RI.`),

    q('12.2', 225, 'single', `Which statements are correct? (1) A contingent asset is disclosed in a note if an inflow is probable. (2) A contingent liability is disclosed in a note, with no provision, if an outflow is probable. (3) No disclosure is needed for a contingent liability if an outflow is not probable. (4) No disclosure is needed for a contingent liability or a contingent asset if it is remote.`,
      pick(['1 and 4 only', '2 and 3 only', '2, 3 and 4', '1, 2 and 4'], 0),
`Use the IAS 37 table.
- (1) Probable contingent asset: disclose. CORRECT.
- (2) Probable outflow: make a PROVISION, not just a note. WRONG.
- (3) A POSSIBLE outflow is still disclosed. Only a remote one is ignored. WRONG.
- (4) Remote: ignore, for both. CORRECT.
= Answer: 1 and 4 only`,
`Используем таблицу IAS 37.
- (1) Вероятный условный актив: раскрыть. ВЕРНО.
- (2) Вероятное выбытие: создать ОЦЕНОЧНОЕ ОБЯЗАТЕЛЬСТВО, а не только примечание. НЕВЕРНО.
- (3) ВОЗМОЖНОЕ выбытие всё равно раскрывают. Игнорируют только маловероятное. НЕВЕРНО.
- (4) Маловероятное: игнорировать, для обоих. ВЕРНО.
= Ответ: только 1 и 4`,
`IAS 37 jadvalidan foydalanamiz.
- (1) Ehtimoliy shartli aktiv: ochib berish. TO'G'RI.
- (2) Ehtimoliy chiqim: faqat izoh emas, BAHOLANGAN MAJBURIYAT. NOTO'G'RI.
- (3) MUMKIN bo'lgan chiqim baribir ochiladi. Faqat juda kam ehtimollisi e'tiborga olinmaydi. NOTO'G'RI.
- (4) Juda kam ehtimolli: ikkalasi uchun ham e'tiborga olinmaydi. TO'G'RI.
= Javob: faqat 1 va 4`),

    q('12.3', 225, 'single', `A former employee is suing a company for wrongful dismissal. Its lawyers say the claim is unlikely to succeed, but the chance of paying is not remote. Legal costs of $40,000 will be paid whatever happens; if the claim succeeds, the settlement would be $380,000. How is this treated?`,
      pick([
        'A provision of $420,000',
        'A contingent liability of $420,000 disclosed in a note',
        'A provision of $40,000 and a contingent liability of $380,000 disclosed in a note',
        'A provision of $380,000 and a contingent liability of $40,000 disclosed in a note',
      ], 2),
`Treat each amount on its own.
# Step 1: Legal costs
  They will be paid whatever happens, so the outflow is probable: a provision of 40,000.
# Step 2: The settlement
  Unlikely, but not remote, so it is possible: disclose a contingent liability of 380,000.
= Answer: provision $40,000; contingent liability $380,000`,
`Рассмотрим каждую сумму отдельно.
# Шаг 1: Судебные расходы
  Их заплатят в любом случае, выбытие вероятно: оценочное обязательство 40 000.
# Шаг 2: Компенсация
  Маловероятна, но не исключена, то есть возможна: раскрыть условное обязательство 380 000.
= Ответ: оценочное обязательство $40 000; условное обязательство $380 000`,
`Har bir summani alohida ko'ramiz.
# 1-qadam: Sud xarajatlari
  Ular har qanday holatda to'lanadi, chiqim ehtimoliy: 40 000 baholangan majburiyat.
# 2-qadam: Kompensatsiya
  Kam ehtimolli, lekin istisno emas, ya'ni mumkin: 380 000 shartli majburiyat ochiladi.
= Javob: baholangan majburiyat $40 000; shartli majburiyat $380 000`),

    q('12.4', 225, 'matrix', `What should be done in the financial statements for each item?`,
      grid(['Create a provision', 'Disclosure note only', 'No action'], [
        ['The company gives free warranties on its products, and its records show that about 5% of sales lead to a warranty claim.', 0],
        ['The company has guaranteed another company\'s overdraft, and a payout under the guarantee is judged possible.', 1],
      ]),
`- Warranties: the sale is the past event, and past records show claims are probable and can be estimated. Create a provision.
- Guarantee: a payout is only possible, not probable. Disclose a contingent liability in a note.`,
`- Гарантии: продажа — прошлое событие, а статистика показывает, что претензии вероятны и их можно оценить. Создать оценочное обязательство.
- Поручительство: выплата лишь возможна, но не вероятна. Раскрыть условное обязательство в примечании.`,
`- Kafolatlar: sotuv — o'tgan voqea, statistika esa da'volar ehtimoliy va baholanishi mumkinligini ko'rsatadi. Baholangan majburiyat yaratiladi.
- Kafillik: to'lov faqat mumkin, ehtimoliy emas. Shartli majburiyat izohda ochiladi.`),

    q('12.5', 225, 'single', `Which statements about IAS 37 are correct? (1) A contingent asset is disclosed in a note if an inflow is probable. (2) No disclosure of a contingent liability is needed if an outflow is remote. (3) Contingent assets are not recognised unless an inflow is virtually certain.`,
      pick(['All three', '1 and 2 only', '1 and 3 only', '2 and 3 only'], 0),
`Check each against the IAS 37 rules.
- (1) Probable contingent asset: disclose. CORRECT.
- (2) Remote contingent liability: ignore. CORRECT.
- (3) Once an inflow is virtually certain it is no longer contingent and is recognised as an asset. Until then it is not recognised. CORRECT.
= Answer: all three`,
`Сверим каждое с правилами IAS 37.
- (1) Вероятный условный актив: раскрыть. ВЕРНО.
- (2) Маловероятное условное обязательство: игнорировать. ВЕРНО.
- (3) Когда поступление практически несомненно, оно уже не условное и признаётся активом. До этого не признают. ВЕРНО.
= Ответ: все три`,
`Har birini IAS 37 qoidalari bilan solishtiramiz.
- (1) Ehtimoliy shartli aktiv: ochiladi. TO'G'RI.
- (2) Juda kam ehtimolli shartli majburiyat: e'tiborga olinmaydi. TO'G'RI.
- (3) Kirim deyarli aniq bo'lganda u shartli emas va aktiv sifatida tan olinadi. Ungacha tan olinmaydi. TO'G'RI.
= Javob: uchalasi ham`),

    q('12.6', 225, 'single', `A shop lets customers return faulty goods within 14 days. At last year end the refund provision was $5,240. At this year end it is recalculated as $6,115. What goes to profit or loss this year for the provision?`,
      pick(['A charge of $6,115', 'A credit of $6,115', 'A charge of $875', 'A credit of $875'], 2),
`# Step 1: Change in the provision
  6,115 - 5,240 = 875 increase
# Step 2: Entry
  Increase in a provision: Dr Expense, Cr Provision
= Answer: a charge of $875
! Only the CHANGE goes to profit or loss, not the whole closing balance.`,
`# Шаг 1: Изменение обязательства
  6 115 - 5 240 = рост 875
# Шаг 2: Проводка
  Рост оценочного обязательства: Дт Расход, Кт Оценочное обязательство
= Ответ: расход $875
! В прибыль идёт только ИЗМЕНЕНИЕ, а не весь остаток на конец.`,
`# 1-qadam: Majburiyat o'zgarishi
  6 115 - 5 240 = 875 o'sish
# 2-qadam: Yozuv
  Baholangan majburiyat o'sishi: Dt Xarajat, Kt Baholangan majburiyat
= Javob: $875 xarajat
! Foydaga butun yakuniy qoldiq emas, faqat O'ZGARISH olinadi.`),

    q('12.7', 225, 'single', `A used-car dealer repairs, free of charge, any car that develops a fault within 30 days of sale. Last year end its repairs provision was $3,200. This year end it should be $2,600. What goes to profit or loss this year?`,
      pick(['A charge of $600', 'A credit of $600', 'A charge of $2,600', 'A credit of $2,600'], 1),
`# Step 1: Change in the provision
  2,600 - 3,200 = 600 decrease
# Step 2: Entry
  Decrease in a provision: Dr Provision, Cr Expense
= Answer: a credit of $600`,
`# Шаг 1: Изменение обязательства
  2 600 - 3 200 = уменьшение 600
# Шаг 2: Проводка
  Уменьшение обязательства: Дт Оценочное обязательство, Кт Расход
= Ответ: кредит $600`,
`# 1-qadam: Majburiyat o'zgarishi
  2 600 - 3 200 = 600 kamayish
# 2-qadam: Yozuv
  Majburiyat kamayishi: Dt Baholangan majburiyat, Kt Xarajat
= Javob: $600 kredit`),

    q('12.8', 225, 'single', `Which best describes a provision under IAS 37?`,
      pick([
        'A liability of uncertain timing or amount',
        'A possible obligation of uncertain timing or amount',
        'A credit balance set up to cancel out a contingent asset',
        'A possible asset arising from past events',
      ], 0),
`IAS 37 defines a provision as a liability of uncertain timing or amount.
- A POSSIBLE obligation is a contingent liability.
- A possible asset is a contingent asset.
= Answer: a liability of uncertain timing or amount`,
`IAS 37 определяет оценочное обязательство как обязательство с неопределённым сроком или суммой.
- ВОЗМОЖНОЕ обязательство — это условное обязательство.
- Возможный актив — условный актив.
= Ответ: обязательство с неопределённым сроком или суммой`,
`IAS 37 baholangan majburiyatni muddati yoki summasi noaniq majburiyat deb ta'riflaydi.
- MUMKIN bo'lgan majburiyat — shartli majburiyat.
- Mumkin bo'lgan aktiv — shartli aktiv.
= Javob: muddati yoki summasi noaniq majburiyat`),

    q('12.9', 225, 'single', `IAS 37 describes "a possible obligation that arises from past events and whose existence will be confirmed only by uncertain future events not wholly within the entity's control". What is this?`,
      pick(['A provision', 'A current liability', 'A contingent liability', 'A contingent asset'], 2),
`The key words are "possible obligation": it may or may not turn into a real debt.
- A provision is an actual liability, just of uncertain timing or amount.
- A contingent asset is a possible ASSET.
= Answer: a contingent liability`,
`Ключевые слова — «возможное обязательство»: оно может стать или не стать реальным долгом.
- Оценочное обязательство — реальное обязательство, лишь с неопределённым сроком или суммой.
- Условный актив — возможный АКТИВ.
= Ответ: условное обязательство`,
`Kalit so'zlar — «mumkin bo'lgan majburiyat»: u haqiqiy qarzga aylanishi yoki aylanmasligi mumkin.
- Baholangan majburiyat — haqiqiy majburiyat, faqat muddati yoki summasi noaniq.
- Shartli aktiv — mumkin bo'lgan AKTIV.
= Javob: shartli majburiyat`),

    q('12.10', 225, 'number', `A customer is suing a paint shop for $8,000, saying a product gave them a skin rash. The shop's lawyer says the most likely outcome is that the shop will have to pay $4,500. What provision should the shop make? (in $)`,
      amount(4500, '$4,500'),
`# Step 1: Is a provision needed?
  A past event, and payment is probable: yes.
# Step 2: How much?
  The best estimate of what will be paid: the most likely outcome, 4,500.
= Answer: $4,500
! The $8,000 is only what the customer claims, not what is expected to be paid.`,
`# Шаг 1: Нужно ли обязательство?
  Прошлое событие, оплата вероятна: да.
# Шаг 2: Сколько?
  Наилучшая оценка выплаты: наиболее вероятный исход, 4 500.
= Ответ: $4 500
! $8 000 — лишь сумма иска, а не ожидаемая выплата.`,
`# 1-qadam: Majburiyat kerakmi?
  O'tgan voqea, to'lov ehtimoliy: ha.
# 2-qadam: Qancha?
  To'lovning eng yaxshi bahosi: eng ehtimoliy natija, 4 500.
= Javob: $4 500
! $8 000 — faqat da'vo summasi, kutilgan to'lov emas.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
