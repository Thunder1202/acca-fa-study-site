'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), sections 27 (company
// financial statements), 28 (disclosure notes) and 29 (events after the reporting period), reworded with new
// figures. bppRef/bppPage point to BPP's own answer. Left out: 27.6 and 27.8 (repeats of 27.2 and 13.3), 28.6,
// 28.8 and 29.7 (their keys rest on disclosure details or examples Kaplan's text does not list), 29.9 (repeat).
(function () {
  const TOPIC = 'chapter-15';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp15-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const two = (options, correctIndices) => ({ options, correctIndices });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('27.1', 256, 'single', `Which of these may appear as current liabilities in a company's statement of financial position? (1) Revaluation surplus. (2) A loan due for repayment within one year. (3) Tax payable. (4) A dividend payable on redeemable preference shares.`,
      pick(['1, 2 and 3', '1, 2 and 4', '1, 3 and 4', '2, 3 and 4'], 3),
`- (1) The revaluation surplus is part of EQUITY, not a liability.
- (2) A loan due within a year: current liability. YES.
- (3) Tax owed for the year: current liability. YES.
- (4) Redeemable preference shares are a liability, so the dividend owed on them is a finance cost accrued as a liability. YES.
= Answer: 2, 3 and 4`,
`- (1) Резерв переоценки — часть КАПИТАЛА, а не обязательство.
- (2) Кредит к погашению в течение года: краткосрочное обязательство. ДА.
- (3) Налог к уплате за год: краткосрочное обязательство. ДА.
- (4) Погашаемые привилегированные акции — обязательство, дивиденд по ним начисляется как финансовый расход и обязательство. ДА.
= Ответ: 2, 3 и 4`,
`- (1) Qayta baholash zaxirasi — KAPITAL qismi, majburiyat emas.
- (2) Bir yil ichida qaytariladigan qarz: joriy majburiyat. HA.
- (3) Yil uchun to'lanadigan soliq: joriy majburiyat. HA.
- (4) Qaytariladigan imtiyozli aksiyalar — majburiyat, ularning dividendi moliyaviy xarajat sifatida majburiyatga hisoblanadi. HA.
= Javob: 2, 3 va 4`),

    q('27.2', 256, 'multi', `Which TWO of these might appear as items in a company's statement of changes in equity?`,
      two([
        'Profit on disposal of properties',
        'Surplus on revaluation of properties',
        'Equity dividends proposed after the reporting date',
        'Issue of share capital',
      ], [1, 3]),
`The statement of changes in equity shows movements in share capital and reserves.
- Profit on disposal: part of profit for the year, shown in profit or loss.
- Revaluation surplus: a movement in a reserve. YES.
- Dividends proposed after the year end: not recognised this year, only disclosed in a note.
- Share issue: a movement in share capital. YES.
= Answer: the revaluation surplus and the share issue`,
`Отчёт об изменениях капитала показывает движение акционерного капитала и резервов.
- Прибыль от выбытия: часть прибыли за год, в отчёте о прибылях.
- Прирост от переоценки: движение резерва. ДА.
- Дивиденды, объявленные после конца года: в этом году не признают, только раскрывают в примечании.
- Выпуск акций: движение акционерного капитала. ДА.
= Ответ: прирост от переоценки и выпуск акций`,
`Kapital o'zgarishlari hisoboti ustav kapitali va zaxiralar harakatini ko'rsatadi.
- Chiqib ketishdan foyda: yillik foyda qismi, foyda hisobotida.
- Qayta baholashdan o'sish: zaxira harakati. HA.
- Yil oxiridan keyin e'lon qilingan dividendlar: shu yil tan olinmaydi, faqat izohda.
- Aksiya chiqarish: ustav kapitali harakati. HA.
= Javob: qayta baholashdan o'sish va aksiya chiqarish`),

    q('27.3', 256, 'single', `At 31 December a company has these items: (1) on 1 January it lent an employee $15,000 at 3% a year, to be repaid with all the interest on 31 May next year; (2) it paid $7,200 this year for insurance covering the year to 30 September next year; (3) in January next year it received $3,000 rent from a tenant for the six months to 31 December this year. What totals go into the statement of financial position at 31 December?`,
      pick([
        'Receivables and prepayments $23,850; payables and accruals nil',
        'Receivables and prepayments $23,400; payables and accruals $450',
        'Receivables and prepayments $8,850; payables and accruals nil',
        'Receivables and prepayments $20,850; payables and accruals $3,000',
      ], 0),
`All three items are amounts owed TO the company or paid in advance.
# Step 1: The employee loan
  The loan itself: 15,000
  Interest earned this year, not yet received: 15,000 x 3% = 450
# Step 2: Insurance
  Paid for October to September; 9 months (January to September) are next year's.
  7,200 x 9/12 = 5,400 prepaid
# Step 3: Rent
  Earned this year, received next year: 3,000 receivable
# Step 4: Totals
  15,000 + 450 + 5,400 + 3,000 = 23,850
  Nothing is owed BY the company, so payables and accruals are nil.
= Answer: receivables and prepayments $23,850; payables nil`,
`Все три статьи — суммы, которые должны компании, или оплата авансом.
# Шаг 1: Заём сотруднику
  Сам заём: 15 000
  Проценты за год, ещё не полученные: 15 000 x 3% = 450
# Шаг 2: Страховка
  Оплачено с октября по сентябрь; 9 месяцев (январь-сентябрь) — следующий год.
  7 200 x 9/12 = 5 400 предоплата
# Шаг 3: Аренда
  Заработана в этом году, получена в следующем: 3 000 дебиторка
# Шаг 4: Итоги
  15 000 + 450 + 5 400 + 3 000 = 23 850
  Компания никому не должна, кредиторка и начисления — ноль.
= Ответ: дебиторка и предоплаты $23 850; кредиторка ноль`,
`Uchala modda — kompaniyaga qarzdor summalar yoki oldindan to'lov.
# 1-qadam: Xodimga qarz
  Qarzning o'zi: 15 000
  Shu yil topilgan, hali olinmagan foiz: 15 000 x 3% = 450
# 2-qadam: Sug'urta
  Oktyabrdan sentyabrgacha to'langan; 9 oy (yanvar-sentyabr) — keyingi yil.
  7 200 x 9/12 = 5 400 oldindan to'lov
# 3-qadam: Ijara
  Shu yil topilgan, keyingi yil olingan: 3 000 debitorlik
# 4-qadam: Jamlar
  15 000 + 450 + 5 400 + 3 000 = 23 850
  Kompaniya hech kimga qarzdor emas, kreditorlik va hisoblanganlar nol.
= Javob: debitorlik va oldindan to'lovlar $23 850; kreditorlik nol`),

    q('27.4', 257, 'single', `Which of these must a limited liability company disclose, either in the main financial statements or in the notes? (1) Share capital. (2) Dividends proposed after the year end. (3) Depreciation and amortisation.`,
      pick(['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], 3),
`- (1) Share capital is shown in the statement of financial position.
- (2) Proposed dividends are not recognised, but they ARE disclosed in a note.
- (3) The depreciation and amortisation charges are disclosed.
= Answer: 1, 2 and 3`,
`- (1) Акционерный капитал показан в отчёте о финансовом положении.
- (2) Объявленные дивиденды не признают, но РАСКРЫВАЮТ в примечании.
- (3) Амортизацию раскрывают.
= Ответ: 1, 2 и 3`,
`- (1) Ustav kapitali moliyaviy holat hisobotida ko'rsatiladi.
- (2) E'lon qilingan dividendlar tan olinmaydi, lekin izohda OCHILADI.
- (3) Amortizatsiya ochib beriladi.
= Javob: 1, 2 va 3`),

    q('27.5', 257, 'matrix', `Is each statement about a limited company's financial statements true or false?`,
      grid(TF, [
        ['A statement of cash flows may use the direct or the indirect method, and both give the same net cash from operating activities.', 0],
        ['Loan notes can be classified as current or non-current liabilities.', 0],
        ['The financial statements must disclose the total depreciation expense, if material.', 0],
        ['A company must disclose, in a note, details of every adjusting event it has allowed for.', 1],
      ]),
`- Direct and indirect methods differ only in how they show operating cash, not in the total: TRUE.
- Loan notes due within a year are current; the rest are non-current: TRUE.
- Depreciation for the period is disclosed: TRUE.
- Adjusting events are put right IN the figures. There is no rule to list them in a note: FALSE.`,
`- Прямой и косвенный методы различаются только подачей, итог одинаков: ВЕРНО.
- Облигации к погашению в течение года — краткосрочные, остальные — долгосрочные: ВЕРНО.
- Амортизацию за период раскрывают: ВЕРНО.
- Корректирующие события исправляют В цифрах. Правила перечислять их в примечании нет: НЕВЕРНО.`,
`- To'g'ridan-to'g'ri va bilvosita usullar faqat ko'rinishda farq qiladi, natija bir xil: TO'G'RI.
- Bir yil ichida to'lanadigan obligatsiyalar — joriy, qolgani — uzoq muddatli: TO'G'RI.
- Davr amortizatsiyasi ochiladi: TO'G'RI.
- Tuzatuvchi voqealar raqamlarning O'ZIDA tuzatiladi. Ularni izohda sanash qoidasi yo'q: NOTO'G'RI.`),

    q('27.7', 257, 'single', `Which of these is NOT shown under "equity" in a company's statement of financial position?`,
      pick(['Share premium account', 'Retained earnings', 'Revaluation surplus', 'Loan notes'], 3),
`Equity is share capital plus reserves.
- Share premium, retained earnings and the revaluation surplus are all reserves.
- Loan notes are borrowing: a liability.
= Answer: loan notes`,
`Капитал — это акционерный капитал плюс резервы.
- Эмиссионный доход, нераспределённая прибыль и резерв переоценки — резервы.
- Облигации — заёмные средства: обязательство.
= Ответ: облигации`,
`Kapital — ustav kapitali plyus zaxiralar.
- Emissiya daromadi, taqsimlanmagan foyda va qayta baholash zaxirasi — zaxiralar.
- Obligatsiyalar — qarz: majburiyat.
= Javob: obligatsiyalar`),

    q('27.9', 257, 'single', `Which statements are correct? (1) A revaluation surplus arises when a non-current asset is sold at a profit. (2) Authorised share capital is the most a company may issue in shares and loan notes together. (3) IAS 10 requires material non-adjusting events after the reporting period to be disclosed in the notes.`,
      pick(['1 and 2', '2 only', '3 only', 'None of them'], 2),
`- (1) FALSE. A revaluation surplus arises when an asset is REVALUED. A profit on sale goes to profit or loss.
- (2) FALSE. Loan notes are borrowing, not share capital.
- (3) TRUE. Material non-adjusting events are disclosed with their nature and estimated effect.
= Answer: 3 only`,
`- (1) НЕВЕРНО. Резерв переоценки возникает при ПЕРЕОЦЕНКЕ. Прибыль от продажи идёт в прибыль.
- (2) НЕВЕРНО. Облигации — заём, а не акционерный капитал.
- (3) ВЕРНО. Существенные некорректирующие события раскрывают с характером и оценкой влияния.
= Ответ: только 3`,
`- (1) NOTO'G'RI. Qayta baholash zaxirasi aktiv QAYTA BAHOLANGANDA paydo bo'ladi. Sotuvdan foyda foydaga boradi.
- (2) NOTO'G'RI. Obligatsiyalar — qarz, ustav kapitali emas.
- (3) TO'G'RI. Muhim tuzatilmaydigan voqealar mohiyati va taxminiy ta'siri bilan ochiladi.
= Javob: faqat 3`),

    q('27.10', 257, 'number', `Last year's tax liability of $14,000 was brought forward. It was finally agreed and paid at $16,200. The estimated tax on this year's profit is $23,500. What is the tax charge in this year's statement of profit or loss? (in $)`,
      amount(25700, '$25,700'),
`# Step 1: Last year's under-provision
  Paid 16,200 against 14,000 provided: 2,200 too little was charged last year.
  That shortfall is charged this year.
# Step 2: This year's estimate
  23,500
# Step 3: Total charge
  2,200 + 23,500 = 25,700
= Answer: $25,700
! Last year's figure is not restated. Any under- or over-provision goes into this year's charge.`,
`# Шаг 1: Недоначисление прошлого года
  Заплачено 16 200 против начисленных 14 000: в прошлом году не хватило 2 200.
  Недостачу относят на этот год.
# Шаг 2: Оценка этого года
  23 500
# Шаг 3: Итоговый расход
  2 200 + 23 500 = 25 700
= Ответ: $25 700
! Прошлый год не пересчитывают. Недо- или переначисление входит в расход этого года.`,
`# 1-qadam: O'tgan yil kam hisoblangani
  14 000 hisoblanganiga qarshi 16 200 to'langan: o'tgan yil 2 200 kam hisoblangan.
  Bu kamomad shu yilga olinadi.
# 2-qadam: Shu yil bahosi
  23 500
# 3-qadam: Jami xarajat
  2 200 + 23 500 = 25 700
= Javob: $25 700
! O'tgan yil qayta hisoblanmaydi. Kam yoki ortiqcha hisoblangan qism shu yil xarajatiga kiradi.`),

    q('28.1', 259, 'single', `Which best describes the purpose of disclosure notes in the financial statements?`,
      pick([
        'To give users more detail about the figures in the statement of financial position and the statement of profit or loss and other comprehensive income',
        'To let companies look better by putting some items only in the notes',
        'To give the detail of every transaction in the period, because the main statements are only a summary',
        'To explain the treatment used where management chose not to follow IFRS',
      ], 0),
`Notes explain and break down the main statements: accounting policies, and more detail behind the figures.
- They are not a way to hide or flatter results.
- They do not list every transaction.
- They do not excuse breaking IFRS.
= Answer: to give users more detail about the figures in the main statements`,
`Примечания объясняют и раскрывают основные отчёты: учётную политику и детали цифр.
- Это не способ скрыть или приукрасить результаты.
- Они не перечисляют каждую операцию.
- Они не оправдывают отступление от IFRS.
= Ответ: дать пользователям больше подробностей о цифрах основных отчётов`,
`Izohlar asosiy hisobotlarni tushuntiradi va ochadi: hisob siyosati va raqamlar tafsiloti.
- Ular natijalarni yashirish yoki bezash usuli emas.
- Ular har bir operatsiyani sanamaydi.
- Ular IFRS dan chetga chiqishni oqlamaydi.
= Javob: foydalanuvchilarga asosiy hisobot raqamlari haqida ko'proq tafsilot berish`),

    q('28.2', 259, 'single', `For which classes of assets must a company disclose a reconciliation of the opening and closing carrying amount, showing the movements? (1) Cash. (2) Intangible assets. (3) Tangible non-current assets. (4) Trade receivables.`,
      pick(['3 only', '2 and 3 only', '1 and 4 only', '1 only'], 1),
`- IAS 16 requires a carrying-amount reconciliation for property, plant and equipment.
- IAS 38 requires the same for intangible assets.
- There is no such reconciliation note for cash or trade receivables.
= Answer: 2 and 3 only`,
`- IAS 16 требует сверку балансовой стоимости для основных средств.
- IAS 38 требует того же для нематериальных активов.
- Для денег и дебиторов такой сверки нет.
= Ответ: только 2 и 3`,
`- IAS 16 asosiy vositalar uchun balans qiymati solishtiruvini talab qiladi.
- IAS 38 nomoddiy aktivlar uchun ham shuni talab qiladi.
- Pul va debitorlar uchun bunday solishtiruv yo'q.
= Javob: faqat 2 va 3`),

    q('28.3', 259, 'single', `Which of these should be disclosed in the note on inventories? (1) When the inventories were bought or made, or how long they have been held. (2) The amount of inventories carried at net realisable value. (3) The accounting policies used to measure inventories. (4) The useful life of the inventories.`,
      pick(['3 only', '2 and 3 only', '1 and 4 only', '1 only'], 1),
`Kaplan's list for IAS 2: the accounting policies, the carrying amount split into suitable classes, and the amount carried at net realisable value.
- (1) and (4): not required. Inventory does not have a "useful life".
= Answer: 2 and 3 only`,
`Список Kaplan по IAS 2: учётная политика, балансовая стоимость по классам и сумма по чистой стоимости реализации.
- (1) и (4): не требуются. У запасов нет «срока полезного использования».
= Ответ: только 2 и 3`,
`Kaplan bo'yicha IAS 2 ro'yxati: hisob siyosati, sinflarga bo'lingan balans qiymati va sof sotish qiymatidagi summa.
- (1) va (4): talab qilinmaydi. Zaxiraning «foydali xizmat muddati» yo'q.
= Javob: faqat 2 va 3`),

    q('28.4', 259, 'single', `Which of these should be disclosed in the note on intangible assets? (1) The amortisation method used. (2) A reconciliation of the carrying amount at the start and end of the period. (3) The useful lives or amortisation periods. (4) The net realisable value of capitalised development costs.`,
      pick(['1, 2 and 3 only', '2 and 3 only', '3 and 4 only', '2 only'], 0),
`Kaplan's list for IAS 38: amortisation methods and periods, a carrying-amount reconciliation, the amortisation charge, and research and development expensed.
- (4) Net realisable value is an inventory idea. It is not an IAS 38 disclosure.
= Answer: 1, 2 and 3 only`,
`Список Kaplan по IAS 38: методы и сроки амортизации, сверка балансовой стоимости, сумма амортизации, исследования и разработки в расходах.
- (4) Чистая стоимость реализации — понятие для запасов. В IAS 38 её не раскрывают.
= Ответ: только 1, 2 и 3`,
`Kaplan bo'yicha IAS 38 ro'yxati: amortizatsiya usullari va muddatlari, balans qiymati solishtiruvi, amortizatsiya summasi, xarajatga olingan tadqiqot va ishlanmalar.
- (4) Sof sotish qiymati — zaxira tushunchasi. IAS 38 da ochilmaydi.
= Javob: faqat 1, 2 va 3`),

    q('28.5', 259, 'single', `Which statements are correct? (1) IAS 37 requires disclosure in the notes of the uncertainties affecting the outcome of a provision. (2) IAS 10 requires disclosure in the notes of the nature and financial effect of a material non-adjusting event after the reporting period.`,
      pick(['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2),
`- (1) For provisions, the notes give the nature, the uncertain factors that may affect the outcome, and an estimate of the effect. TRUE.
- (2) For material non-adjusting events, the notes give the nature and an estimate of the financial effect (or say it cannot be estimated). TRUE.
= Answer: both 1 and 2`,
`- (1) По оценочным обязательствам раскрывают характер, факторы неопределённости и оценку влияния. ВЕРНО.
- (2) По существенным некорректирующим событиям раскрывают характер и оценку влияния (или что её нельзя сделать). ВЕРНО.
= Ответ: и 1, и 2`,
`- (1) Baholangan majburiyatlar bo'yicha mohiyat, noaniqlik omillari va ta'sir bahosi ochiladi. TO'G'RI.
- (2) Muhim tuzatilmaydigan voqealar bo'yicha mohiyat va moliyaviy ta'sir bahosi (yoki baholab bo'lmasligi) ochiladi. TO'G'RI.
= Javob: 1 ham, 2 ham`),

    q('28.7', 259, 'single', `Which of these should be disclosed in the note on tangible non-current assets? (1) The market value of every tangible non-current asset, revalued or not. (2) A reconciliation of the carrying amount at the start and end of the period. (3) For revalued assets, the methods and assumptions used to estimate fair value. (4) For revalued assets, the carrying amount there would have been under the cost model.`,
      pick(['1, 2 and 3 only', '2 and 3 only', '2, 3 and 4 only', '1 and 4 only'], 2),
`- (1) Not required. Assets under the cost model do not need a market value.
- (2) The carrying-amount reconciliation: required.
- (3) and (4) For revalued assets, the valuation methods and assumptions, and the cost-model carrying amount: required.
= Answer: 2, 3 and 4 only`,
`- (1) Не требуется. Для активов по модели себестоимости рыночная стоимость не нужна.
- (2) Сверка балансовой стоимости: требуется.
- (3) и (4) Для переоценённых активов: методы и допущения оценки и балансовая стоимость по модели себестоимости: требуются.
= Ответ: только 2, 3 и 4`,
`- (1) Talab qilinmaydi. Tannarx modelidagi aktivlar uchun bozor qiymati kerak emas.
- (2) Balans qiymati solishtiruvi: talab qilinadi.
- (3) va (4) Qayta baholangan aktivlar uchun: baholash usullari va farazlari hamda tannarx modelidagi balans qiymati: talab qilinadi.
= Javob: faqat 2, 3 va 4`),

    q('28.9', 259, 'single', `Which of these is a disclosure IAS 10 requires for a material non-adjusting event after the reporting period?`,
      pick([
        'Dividends declared before the year end and paid after it',
        'The nature of every non-adjusting event, material or not',
        'The date the event happened',
        'An estimate of the event\'s financial effect, or a statement that one cannot be made',
      ], 3),
`For each MATERIAL non-adjusting event, IAS 10 asks for two things: its nature, and an estimate of its financial effect (or a statement that an estimate cannot be made).
- Immaterial events need no disclosure.
- The date on its own is not the requirement.
= Answer: an estimate of the financial effect, or a statement that one cannot be made`,
`Для каждого СУЩЕСТВЕННОГО некорректирующего события IAS 10 требует две вещи: характер и оценку финансового влияния (или указание, что её нельзя сделать).
- Несущественные события раскрывать не нужно.
- Одна лишь дата — не требование.
= Ответ: оценка финансового влияния или указание, что её нельзя сделать`,
`Har bir MUHIM tuzatilmaydigan voqea uchun IAS 10 ikkita narsani so'raydi: mohiyati va moliyaviy ta'sir bahosi (yoki baholab bo'lmasligi).
- Muhim bo'lmagan voqealarni ochish shart emas.
- Faqat sana — talab emas.
= Javob: moliyaviy ta'sir bahosi yoki uni baholab bo'lmasligi haqida bayonot`),

    q('29.1', 259, 'single', `Which of these material events, after the year end but before the directors approve the financial statements, should be ADJUSTED for? (1) A property valuation showing the property was impaired at the year end. (2) Inventory held at the year end sold for less than cost. (3) Discovery of a fraud or error affecting the financial statements. (4) Insolvency of a customer whose year-end debt is still unpaid.`,
      pick(['All of them', '1, 2 and 4 only', '3 and 4 only', '1, 2 and 3 only'], 0),
`Adjusting events give more evidence about conditions that ALREADY existed at the year end.
- (1) The property was already impaired at the year end. ADJUST.
- (2) The inventory was already worth less than cost. ADJUST.
- (3) The statements were already wrong. ADJUST.
- (4) The debt was already doubtful. ADJUST.
= Answer: all of them`,
`Корректирующие события дают доп. свидетельства об условиях, УЖЕ существовавших на конец года.
- (1) Объект уже был обесценен на конец года. КОРРЕКТИРОВАТЬ.
- (2) Запасы уже стоили меньше себестоимости. КОРРЕКТИРОВАТЬ.
- (3) Отчётность уже была ошибочной. КОРРЕКТИРОВАТЬ.
- (4) Долг уже был сомнительным. КОРРЕКТИРОВАТЬ.
= Ответ: все`,
`Tuzatuvchi voqealar yil oxirida ALLAQACHON mavjud bo'lgan holatlar haqida qo'shimcha dalil beradi.
- (1) Mulk yil oxirida allaqachon qadrsizlangan. TUZATILADI.
- (2) Zaxira allaqachon tannarxdan arzon edi. TUZATILADI.
- (3) Hisobot allaqachon xato edi. TUZATILADI.
- (4) Qarz allaqachon shubhali edi. TUZATILADI.
= Javob: hammasi`),

    q('29.2', 259, 'multi', `Under IAS 10, which TWO of these material events after the year end require the figures to be ADJUSTED?`,
      two([
        'The bankruptcy of a major customer who owed a large balance at the year end',
        'A fire destroying some inventory (the company can still continue as a going concern)',
        'An issue of shares to finance expansion',
        'Sale, for less than cost, of some inventory held at the year end',
      ], [0, 3]),
`- Customer bankruptcy: confirms the year-end debt was irrecoverable. ADJUST.
- Fire after the year end: a new condition. Disclose if material, but do not adjust.
- Share issue after the year end: a new event. Disclose if material.
- Sale below cost: shows the year-end inventory was worth less than cost. ADJUST.
= Answer: the customer bankruptcy and the sale below cost`,
`- Банкротство покупателя: подтверждает, что долг на конец года безнадёжен. КОРРЕКТИРОВАТЬ.
- Пожар после конца года: новое условие. Раскрыть, если существенно, но не корректировать.
- Выпуск акций после конца года: новое событие. Раскрыть, если существенно.
- Продажа ниже себестоимости: показывает, что запасы на конец года стоили меньше себестоимости. КОРРЕКТИРОВАТЬ.
= Ответ: банкротство покупателя и продажа ниже себестоимости`,
`- Xaridor bankrotligi: yil oxiridagi qarz umidsiz ekanini tasdiqlaydi. TUZATILADI.
- Yil oxiridan keyingi yong'in: yangi holat. Muhim bo'lsa ochiladi, tuzatilmaydi.
- Yil oxiridan keyin aksiya chiqarish: yangi voqea. Muhim bo'lsa ochiladi.
- Tannarxdan arzon sotish: yil oxiridagi zaxira tannarxdan arzon ekanini ko'rsatadi. TUZATILADI.
= Javob: xaridor bankrotligi va tannarxdan arzon sotish`),

    q('29.3', 260, 'single', `A company's year ends on 30 June. Which of these material matters should be adjusted for? (1) A customer who owed $150,000 at the year end went bankrupt in July. (2) In August, inventory valued at $420,000 in the statement of financial position was sold for $350,000. (3) A factory with a carrying amount of $2,800,000 was badly damaged by fire in July; it was working again by August but is now worth $1,900,000. (4) The company issued 800,000 ordinary shares in August.`,
      pick(['All four', '1 and 2 only', '1 and 4 only', '2 and 3 only'], 1),
`- (1) Confirms a year-end debt was bad. ADJUST.
- (2) Shows year-end inventory was worth less than its carrying amount. ADJUST.
- (3) The fire happened after the year end. Non-adjusting: disclose if material.
- (4) A share issue after the year end. Non-adjusting.
= Answer: 1 and 2 only`,
`- (1) Подтверждает безнадёжный долг на конец года. КОРРЕКТИРОВАТЬ.
- (2) Показывает, что запасы на конец года стоили меньше балансовой стоимости. КОРРЕКТИРОВАТЬ.
- (3) Пожар случился после конца года. Некорректирующее: раскрыть, если существенно.
- (4) Выпуск акций после конца года. Некорректирующее.
= Ответ: только 1 и 2`,
`- (1) Yil oxiridagi qarz yomon ekanini tasdiqlaydi. TUZATILADI.
- (2) Yil oxiridagi zaxira balans qiymatidan arzon ekanini ko'rsatadi. TUZATILADI.
- (3) Yong'in yil oxiridan keyin bo'lgan. Tuzatilmaydigan: muhim bo'lsa ochiladi.
- (4) Yil oxiridan keyin aksiya chiqarish. Tuzatilmaydigan.
= Javob: faqat 1 va 2`),

    q('29.4', 260, 'single', `Which list contains ONLY events that are normally non-adjusting under IAS 10?`,
      pick([
        'Insolvency of a customer who owed money at the year end; an issue of shares or loan notes; buying another company',
        'An issue of shares or loan notes; changes in foreign exchange rates; major purchases of non-current assets',
        'Buying another company; destruction of a major non-current asset by fire; discovery of a fraud showing the statements are wrong',
        'Sale of inventory giving evidence of its year-end value; an issue of shares or loan notes; destruction of a major asset by fire',
      ], 1),
`Spot the adjusting item in each list. A list is right only if it has none.
- List 1: customer insolvency is adjusting.
- List 3: discovery of fraud is adjusting.
- List 4: the inventory sale is adjusting.
- List 2: share issues, exchange-rate changes and big asset purchases all happen after the year end and say nothing about year-end conditions. All non-adjusting.
= Answer: shares or loan notes, exchange rates, major asset purchases`,
`Найдём в каждом списке корректирующее событие. Верен только список без них.
- Список 1: неплатёжеспособность покупателя — корректирующее.
- Список 3: обнаружение мошенничества — корректирующее.
- Список 4: продажа запасов — корректирующее.
- Список 2: выпуск акций, изменение курсов и крупные покупки активов — после конца года и ничего не говорят об условиях на эту дату. Все некорректирующие.
= Ответ: акции или облигации, курсы валют, крупные покупки активов`,
`Har bir ro'yxatda tuzatuvchi voqeani topamiz. Faqat ularsiz ro'yxat to'g'ri.
- 1-ro'yxat: xaridor to'lovga qodir emasligi — tuzatuvchi.
- 3-ro'yxat: firibgarlik aniqlanishi — tuzatuvchi.
- 4-ro'yxat: zaxira sotilishi — tuzatuvchi.
- 2-ro'yxat: aksiya chiqarish, valyuta kursi o'zgarishi va yirik aktiv xaridi yil oxiridan keyin va yil oxiri holati haqida hech narsa demaydi. Hammasi tuzatilmaydigan.
= Javob: aksiya yoki obligatsiyalar, valyuta kurslari, yirik aktiv xaridlari`),

    q('29.5', 260, 'single', `Which of these events after the year end are ADJUSTING, if material? (1) Sale of inventories, held at cost at the year end, for more than cost. (2) A valuation of land and buildings showing they were impaired at the year end. (3) An issue of shares and loan notes. (4) Insolvency of a customer with a balance owing at the year end.`,
      pick(['1 and 3', '2 and 4', '2 and 3', '1 and 4'], 1),
`- (1) Selling ABOVE cost confirms the cost value was fine. Nothing to change.
- (2) Evidence of impairment at the year end. ADJUSTING.
- (3) A new event after the year end. Non-adjusting.
- (4) Confirms a year-end debt is bad. ADJUSTING.
= Answer: 2 and 4`,
`- (1) Продажа ВЫШЕ себестоимости подтверждает, что оценка верна. Менять нечего.
- (2) Свидетельство обесценения на конец года. КОРРЕКТИРУЮЩЕЕ.
- (3) Новое событие после конца года. Некорректирующее.
- (4) Подтверждает безнадёжный долг на конец года. КОРРЕКТИРУЮЩЕЕ.
= Ответ: 2 и 4`,
`- (1) Tannarxdan QIMMAT sotish baho to'g'ri ekanini tasdiqlaydi. O'zgartiradigan narsa yo'q.
- (2) Yil oxiridagi qadrsizlanish dalili. TUZATUVCHI.
- (3) Yil oxiridan keyingi yangi voqea. Tuzatilmaydigan.
- (4) Yil oxiridagi qarz yomon ekanini tasdiqlaydi. TUZATUVCHI.
= Javob: 2 va 4`),

    q('29.6', 260, 'single', `A company's year ends on 31 December and the financial statements will be approved on 31 March. Before then: (1) on 10 February the directors decide to sell a major investment that earns material revenue; (2) on 12 March a fire destroys a material amount of inventory and will cost $480,000 to repair; (3) on 20 March a customer goes into liquidation and the company will not be paid any of the balance owed at the year end. How should these be reflected at 31 December?`,
      pick([
        'Adjust 3; disclose 2 and 3; do nothing about 1',
        'Adjust 2 and 3; disclose 1',
        'Adjust 3; disclose 1 and 2',
        'Adjust 2; disclose 3 and 1',
      ], 2),
`- (1) A decision made after the year end, material: non-adjusting, so DISCLOSE.
- (2) A fire after the year end, material: non-adjusting, so DISCLOSE.
- (3) Confirms a year-end debt is irrecoverable: ADJUST.
= Answer: adjust 3; disclose 1 and 2`,
`- (1) Решение после конца года, существенное: некорректирующее, РАСКРЫТЬ.
- (2) Пожар после конца года, существенный: некорректирующее, РАСКРЫТЬ.
- (3) Подтверждает безнадёжный долг на конец года: КОРРЕКТИРОВАТЬ.
= Ответ: корректировать 3; раскрыть 1 и 2`,
`- (1) Yil oxiridan keyingi qaror, muhim: tuzatilmaydigan, OCHILADI.
- (2) Yil oxiridan keyingi yong'in, muhim: tuzatilmaydigan, OCHILADI.
- (3) Yil oxiridagi qarz umidsiz ekanini tasdiqlaydi: TUZATILADI.
= Javob: 3 tuzatiladi; 1 va 2 ochiladi`),

    q('29.8', 260, 'single', `Which is the correct IAS 10 definition of an adjusting event after the reporting period?`,
      pick([
        'An event between the reporting date and the date the statements are authorised for issue, giving further evidence of conditions that existed at the reporting date',
        'An event between the reporting date and the date the statements are authorised for issue, giving evidence of conditions that arose after the reporting date',
        'An event after the statements are authorised for issue, giving further evidence of conditions that existed at the reporting date',
        'An event after the statements are authorised for issue, giving evidence of conditions that arose after the reporting date',
      ], 0),
`Two tests:
# Step 1: When?
  Between the year end and the date the statements are authorised. After authorisation, IAS 10 no longer applies.
# Step 2: About what?
  Conditions that ALREADY existed at the year end. Conditions that arose later make an event non-adjusting.
= Answer: between the reporting date and authorisation, about conditions existing at the reporting date`,
`Две проверки:
# Шаг 1: Когда?
  Между концом года и датой утверждения отчётности. После утверждения IAS 10 не применяется.
# Шаг 2: О чём?
  Об условиях, УЖЕ существовавших на конец года. Возникшие позже условия делают событие некорректирующим.
= Ответ: между отчётной датой и утверждением, об условиях на отчётную дату`,
`Ikki tekshiruv:
# 1-qadam: Qachon?
  Yil oxiri va hisobot tasdiqlanish sanasi orasida. Tasdiqlangandan keyin IAS 10 qo'llanilmaydi.
# 2-qadam: Nima haqida?
  Yil oxirida ALLAQACHON mavjud holatlar haqida. Keyin paydo bo'lgan holatlar voqeani tuzatilmaydigan qiladi.
= Javob: hisobot sanasi va tasdiqlash orasida, hisobot sanasidagi holatlar haqida`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
