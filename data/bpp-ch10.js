'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 11 (receivables),
// reworded with new figures. bppRef/bppPage point to BPP's own answer. Payables items are in bpp-ch11.js and
// 11.20 (supplier statement) is in bpp-ch13.js. Left out: 11.9 (BPP clears a debt straight against the
// allowance, while Kaplan writes the debt off and then resets the allowance at the year end) and 11.19 (its
// accrual/provision/payable wording is not Kaplan's).
(function () {
  const TOPIC = 'chapter-10';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp10-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const two = (options, correctIndices) => ({ options, correctIndices });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('11.1', 221, 'matrix', `Is each statement true or false?`,
      grid(TF, [
        ['Payables are amounts the business owes to others.', 0],
        ['Payables are an asset.', 1],
        ['Receivables are amounts others owe to the business.', 0],
      ]),
`- Payables: money the business owes. TRUE.
- Payables are a liability, not an asset. FALSE.
- Receivables: money owed to the business. TRUE.`,
`- Кредиторы: деньги, которые должен бизнес. ВЕРНО.
- Кредиторская задолженность — обязательство, а не актив. НЕВЕРНО.
- Дебиторы: деньги, которые должны бизнесу. ВЕРНО.`,
`- Kreditorlar: biznes qarzdor bo'lgan pul. TO'G'RI.
- Kreditorlik — majburiyat, aktiv emas. NOTO'G'RI.
- Debitorlar: biznesga qarzdor bo'lgan pul. TO'G'RI.`),

    q('11.2', 221, 'single', `At the year end receivables are $520,000, before writing off irrecoverable debts of $34,000. The allowance for receivables brought forward is $61,000. The allowance is to be 10% of the receivables left after the write-off. What is the receivables expense for the year?`,
      pick(['$21,600', '$46,400', '$34,000', '$82,600'], 0),
`# Step 1: New allowance
  (520,000 - 34,000) x 10% = 48,600
# Step 2: Change in the allowance
  48,600 - 61,000 = 12,400 decrease. A decrease is a credit to the expense.
# Step 3: Expense
  Write-offs 34,000 - decrease 12,400 = 21,600
= Answer: $21,600
! Work out the allowance AFTER the write-off, and charge only the CHANGE in the allowance.`,
`# Шаг 1: Новый резерв
  (520 000 - 34 000) x 10% = 48 600
# Шаг 2: Изменение резерва
  48 600 - 61 000 = уменьшение 12 400. Уменьшение уменьшает расход.
# Шаг 3: Расход
  Списания 34 000 - уменьшение 12 400 = 21 600
= Ответ: $21 600
! Резерв считают ПОСЛЕ списания, а в расход идёт только ИЗМЕНЕНИЕ резерва.`,
`# 1-qadam: Yangi zaxira
  (520 000 - 34 000) x 10% = 48 600
# 2-qadam: Zaxira o'zgarishi
  48 600 - 61 000 = 12 400 kamayish. Kamayish xarajatni kamaytiradi.
# 3-qadam: Xarajat
  Hisobdan chiqarish 34 000 - kamayish 12 400 = 21 600
= Javob: $21 600
! Zaxira hisobdan chiqarishdan KEYIN hisoblanadi, xarajatga faqat zaxira O'ZGARISHI olinadi.`),

    q('11.3', 221, 'single', `At the start of the year the allowance for receivables was $22,000. During the year irrecoverable debts of $17,300 were written off. The allowance needed at the year end is $19,500. What is the receivables expense for the year?`,
      pick(['$14,800', '$19,800', '$36,800', '$39,300'], 0),
`# Step 1: Change in the allowance
  19,500 - 22,000 = 2,500 decrease
# Step 2: Expense
  Write-offs 17,300 - decrease 2,500 = 14,800
= Answer: $14,800`,
`# Шаг 1: Изменение резерва
  19 500 - 22 000 = уменьшение 2 500
# Шаг 2: Расход
  Списания 17 300 - уменьшение 2 500 = 14 800
= Ответ: $14 800`,
`# 1-qadam: Zaxira o'zgarishi
  19 500 - 22 000 = 2 500 kamayish
# 2-qadam: Xarajat
  Hisobdan chiqarish 17 300 - kamayish 2 500 = 14 800
= Javob: $14 800`),

    q('11.4', 221, 'number', `Last year end the allowance for receivables was $42,000, which was 6% of receivables. This year end receivables are $935,000, and $35,000 of them are to be written off as irrecoverable. The allowance is again to be 6% of receivables. What is the receivables expense for the year? (in $)`,
      amount(47000, '$47,000'),
`# Step 1: Receivables after the write-off
  935,000 - 35,000 = 900,000
# Step 2: New allowance
  900,000 x 6% = 54,000
# Step 3: Increase in the allowance
  54,000 - 42,000 = 12,000
# Step 4: Expense
  35,000 + 12,000 = 47,000
= Answer: $47,000`,
`# Шаг 1: Дебиторы после списания
  935 000 - 35 000 = 900 000
# Шаг 2: Новый резерв
  900 000 x 6% = 54 000
# Шаг 3: Рост резерва
  54 000 - 42 000 = 12 000
# Шаг 4: Расход
  35 000 + 12 000 = 47 000
= Ответ: $47 000`,
`# 1-qadam: Hisobdan chiqarishdan keyingi debitorlar
  935 000 - 35 000 = 900 000
# 2-qadam: Yangi zaxira
  900 000 x 6% = 54 000
# 3-qadam: Zaxira o'sishi
  54 000 - 42 000 = 12 000
# 4-qadam: Xarajat
  35 000 + 12 000 = 47 000
= Javob: $47 000`),

    q('11.5', 221, 'single', `At the start of the year a company's allowance for receivables was $96,000. During the year irrecoverable debts of $158,000 were written off. At the year end an allowance of $231,000 is needed. What is the receivables expense?`,
      pick(['$293,000', '$389,000', '$135,000', '$62,000'], 0),
`# Step 1: Increase in the allowance
  231,000 - 96,000 = 135,000
# Step 2: Expense
  158,000 + 135,000 = 293,000
= Answer: $293,000
! Charge only the increase, not the whole $231,000.`,
`# Шаг 1: Рост резерва
  231 000 - 96 000 = 135 000
# Шаг 2: Расход
  158 000 + 135 000 = 293 000
= Ответ: $293 000
! В расход идёт только рост, а не все $231 000.`,
`# 1-qadam: Zaxira o'sishi
  231 000 - 96 000 = 135 000
# 2-qadam: Xarajat
  158 000 + 135 000 = 293 000
= Javob: $293 000
! Xarajatga butun $231 000 emas, faqat o'sish olinadi.`),

    q('11.6', 222, 'single', `A company receives cash for a debt it had already written off as irrecoverable. Which entry records the cash?`,
      pick([
        'Dr Irrecoverable debts expense, Cr Trade receivables',
        'Dr Cash, Cr Irrecoverable debts expense',
        'Dr Allowance for receivables, Cr Trade receivables',
        'Dr Cash, Cr Allowance for receivables',
      ], 1),
`# Step 1: Why not credit receivables?
  The debt was removed from receivables when it was written off, so there is nothing left to clear.
# Step 2: The entry
  Dr Cash: the money comes in.
  Cr Irrecoverable debts expense: this reverses the expense charged earlier.
= Answer: Dr Cash, Cr Irrecoverable debts expense`,
`# Шаг 1: Почему не кредит дебиторов?
  Долг уже убрали из дебиторов при списании, закрывать нечего.
# Шаг 2: Проводка
  Дт Деньги: деньги поступили.
  Кт Расход по безнадёжным долгам: сторнирует ранее начисленный расход.
= Ответ: Дт Деньги, Кт Расход по безнадёжным долгам`,
`# 1-qadam: Nega debitorlar krediti emas?
  Qarz hisobdan chiqarilganda debitorlardan olib tashlangan, yopiladigan narsa yo'q.
# 2-qadam: Yozuv
  Dt Pul: pul keldi.
  Kt Umidsiz qarzlar xarajati: avvalgi xarajatni qaytaradi.
= Javob: Dt Pul, Kt Umidsiz qarzlar xarajati`),

    q('11.7', 222, 'single', `At the year end trade receivables are $726,000 and the allowance for receivables is $41,000. Debts of $16,000 are to be written off. The allowance is then to be 5% of receivables. What is the receivables expense, and the net receivables in the statement of financial position?`,
      pick([
        'Expense $10,500; net receivables $674,500',
        'Expense $10,500; net receivables $669,000',
        'Expense $21,500; net receivables $674,500',
        'Expense $51,500; net receivables $674,500',
      ], 0),
`# Step 1: Receivables after the write-off
  726,000 - 16,000 = 710,000
# Step 2: New allowance
  710,000 x 5% = 35,500, a decrease of 41,000 - 35,500 = 5,500
# Step 3: Expense
  16,000 - 5,500 = 10,500
# Step 4: Net receivables
  710,000 - 35,500 = 674,500
= Answer: expense $10,500; net receivables $674,500`,
`# Шаг 1: Дебиторы после списания
  726 000 - 16 000 = 710 000
# Шаг 2: Новый резерв
  710 000 x 5% = 35 500, уменьшение 41 000 - 35 500 = 5 500
# Шаг 3: Расход
  16 000 - 5 500 = 10 500
# Шаг 4: Чистая дебиторка
  710 000 - 35 500 = 674 500
= Ответ: расход $10 500; чистая дебиторка $674 500`,
`# 1-qadam: Hisobdan chiqarishdan keyingi debitorlar
  726 000 - 16 000 = 710 000
# 2-qadam: Yangi zaxira
  710 000 x 5% = 35 500, kamayish 41 000 - 35 500 = 5 500
# 3-qadam: Xarajat
  16 000 - 5 500 = 10 500
# 4-qadam: Sof debitorlik
  710 000 - 35 500 = 674 500
= Javob: xarajat $10 500; sof debitorlik $674 500`),

    q('11.8', 222, 'single', `What does a DECREASE in the allowance for receivables lead to?`,
      pick(['An increase in liabilities', 'A decrease in working capital', 'A decrease in profit for the year', 'An increase in profit for the year'], 3),
`# Step 1: The entry
  Dr Allowance for receivables, Cr Receivables expense
# Step 2: Effects
  The credit reduces the expense, so profit goes UP.
  Net receivables go up too, so working capital rises. Liabilities do not change.
= Answer: an increase in profit for the year`,
`# Шаг 1: Проводка
  Дт Резерв по дебиторам, Кт Расход по дебиторам
# Шаг 2: Влияние
  Кредит уменьшает расход, прибыль РАСТЁТ.
  Чистая дебиторка тоже растёт, оборотный капитал увеличивается. Обязательства не меняются.
= Ответ: рост прибыли за год`,
`# 1-qadam: Yozuv
  Dt Debitorlar zaxirasi, Kt Debitorlar xarajati
# 2-qadam: Ta'siri
  Kredit xarajatni kamaytiradi, foyda OSHADI.
  Sof debitorlik ham oshadi, aylanma kapital ko'payadi. Majburiyatlar o'zgarmaydi.
= Javob: yil foydasining oshishi`),

    q('11.10', 222, 'single', `An INCREASE of $6,000 in the allowance for receivables was recorded as a DECREASE of $6,000 by mistake. What is the effect?`,
      pick([
        'Profit overstated by $12,000; receivables overstated by $6,000',
        'Profit understated by $12,000; receivables understated by $12,000',
        'Profit overstated by $12,000; receivables overstated by $12,000',
        'Gross profit overstated by $12,000; receivables overstated by $12,000',
      ], 2),
`# Step 1: The gap
  It should be +6,000 but was booked as -6,000, so the allowance is wrong by 12,000.
# Step 2: Effects
  Expense too low by 12,000: profit overstated by 12,000.
  Allowance too low by 12,000: net receivables overstated by 12,000.
# Step 3: Gross profit?
  The receivables expense sits below gross profit, so gross profit is not affected.
= Answer: profit overstated by $12,000; receivables overstated by $12,000`,
`# Шаг 1: Разрыв
  Нужно было +6 000, а записали -6 000, резерв ошибочен на 12 000.
# Шаг 2: Влияние
  Расход занижен на 12 000: прибыль завышена на 12 000.
  Резерв занижен на 12 000: чистая дебиторка завышена на 12 000.
# Шаг 3: А валовая прибыль?
  Расход по дебиторам ниже валовой прибыли, она не меняется.
= Ответ: прибыль завышена на $12 000; дебиторка завышена на $12 000`,
`# 1-qadam: Farq
  +6 000 bo'lishi kerak edi, -6 000 yozilgan, zaxira 12 000 ga xato.
# 2-qadam: Ta'siri
  Xarajat 12 000 ga kam: foyda 12 000 ga oshirilgan.
  Zaxira 12 000 ga kam: sof debitorlik 12 000 ga oshirilgan.
# 3-qadam: Yalpi foyda-chi?
  Debitorlar xarajati yalpi foydadan pastda, u o'zgarmaydi.
= Javob: foyda $12 000 ga oshirilgan; debitorlik $12 000 ga oshirilgan`),

    q('11.11', 222, 'single', `At the start of the year the allowance for receivables was $4,200. During the year $1,300 of debts were written off, and $900 was received from a debt written off in an earlier year. At the year end receivables are $36,000 and the allowance is set at 5%. What is the net effect on profit or loss for the year?`,
      pick(['$2,000 credit (income)', '$2,000 debit (expense)', '$1,100 credit (income)', '$200 credit (income)'], 0),
`# Step 1: New allowance
  36,000 x 5% = 1,800, a decrease of 4,200 - 1,800 = 2,400 (credit)
# Step 2: Each item
  Decrease in allowance: credit 2,400
  Debts written off: debit 1,300
  Debt recovered: credit 900
# Step 3: Net
  2,400 - 1,300 + 900 = 2,000 credit
= Answer: $2,000 credit (income)
! The recovered debt is a credit to the expense, so it adds to the income here.`,
`# Шаг 1: Новый резерв
  36 000 x 5% = 1 800, уменьшение 4 200 - 1 800 = 2 400 (кредит)
# Шаг 2: Каждая статья
  Уменьшение резерва: кредит 2 400
  Списанные долги: дебет 1 300
  Возвращённый долг: кредит 900
# Шаг 3: Итог
  2 400 - 1 300 + 900 = кредит 2 000
= Ответ: $2 000 кредит (доход)
! Возвращённый долг — кредит расхода, поэтому здесь он увеличивает доход.`,
`# 1-qadam: Yangi zaxira
  36 000 x 5% = 1 800, kamayish 4 200 - 1 800 = 2 400 (kredit)
# 2-qadam: Har bir modda
  Zaxira kamayishi: kredit 2 400
  Hisobdan chiqarilgan qarzlar: debet 1 300
  Qaytarilgan qarz: kredit 900
# 3-qadam: Natija
  2 400 - 1 300 + 900 = 2 000 kredit
= Javob: $2 000 kredit (daromad)
! Qaytarilgan qarz xarajat krediti, shuning uchun bu yerda daromadni oshiradi.`),

    q('11.12', 223, 'single', `A company sets up an allowance for receivables for the first time. Which entry records it?`,
      pick([
        'Dr Irrecoverable debts expense, Cr Allowance for receivables',
        'Dr Allowance for receivables, Cr Trade receivables',
        'Dr Irrecoverable debts expense, Cr Trade receivables',
        'Dr Trade receivables, Cr Allowance for receivables',
      ], 0),
`# Step 1: The expense side
  The likely loss is charged to profit: Dr Irrecoverable debts expense.
# Step 2: The other side
  Receivables stay as they are, because no debt has been written off yet.
  The allowance is a separate credit balance set against receivables: Cr Allowance for receivables.
= Answer: Dr Irrecoverable debts expense, Cr Allowance for receivables
! Crediting receivables directly would be a write-off, not an allowance.`,
`# Шаг 1: Сторона расхода
  Вероятный убыток относят на прибыль: Дт Расход по безнадёжным долгам.
# Шаг 2: Другая сторона
  Дебиторы не меняются, ведь долг ещё не списан.
  Резерв — отдельный кредитовый остаток против дебиторов: Кт Резерв по дебиторам.
= Ответ: Дт Расход по безнадёжным долгам, Кт Резерв по дебиторам
! Кредит дебиторов напрямую — это списание, а не резерв.`,
`# 1-qadam: Xarajat tomoni
  Ehtimoliy zarar foydaga olinadi: Dt Umidsiz qarzlar xarajati.
# 2-qadam: Boshqa tomon
  Debitorlar o'zgarmaydi, chunki qarz hali hisobdan chiqarilmagan.
  Zaxira debitorlarga qarshi alohida kredit qoldiq: Kt Debitorlar zaxirasi.
= Javob: Dt Umidsiz qarzlar xarajati, Kt Debitorlar zaxirasi
! Debitorlarni to'g'ridan-to'g'ri kreditlash — hisobdan chiqarish, zaxira emas.`),

    q('11.13', 223, 'single', `The allowance for receivables was $920 at the start of the year, and $1,150 is needed at the year end. During the year $640 of irrecoverable debts were written off. What is the receivables expense?`,
      pick(['$870', '$1,150', '$1,790', '$410'], 0),
`# Step 1: Increase in the allowance
  1,150 - 920 = 230
# Step 2: Expense
  640 + 230 = 870
= Answer: $870`,
`# Шаг 1: Рост резерва
  1 150 - 920 = 230
# Шаг 2: Расход
  640 + 230 = 870
= Ответ: $870`,
`# 1-qadam: Zaxira o'sishi
  1 150 - 920 = 230
# 2-qadam: Xarajat
  640 + 230 = 870
= Javob: $870`),

    q('11.14', 223, 'multi', `Which TWO statements are correct?`,
      two([
        'An aged receivables analysis shows how long each customer\'s invoices have been unpaid.',
        'A credit limit is used by credit control to make suppliers deliver on time.',
        'Receivables are shown in the statement of financial position net of the allowance for receivables.',
        'Credit limits are set for customers who only ever pay in cash.',
      ], [0, 2]),
`Check each one.
- Aged analysis: lists each customer's balance by how long it has been owed. CORRECT.
- Credit limit: the most credit a CUSTOMER may have. It has nothing to do with suppliers.
- Receivables less the allowance in the statement of financial position: CORRECT.
- Cash-only customers get no credit, so they need no credit limit.
= Answer: the aged analysis and the net receivables statements`,
`Проверим каждое.
- Анализ по срокам: долг каждого покупателя по давности. ВЕРНО.
- Кредитный лимит: максимум кредита ПОКУПАТЕЛЮ. К поставщикам отношения не имеет.
- Дебиторы за вычетом резерва в отчёте о финансовом положении: ВЕРНО.
- Покупателям за наличные кредит не дают, лимит им не нужен.
= Ответ: утверждения об анализе по срокам и о чистой дебиторке`,
`Har birini tekshiramiz.
- Muddat bo'yicha tahlil: har bir xaridor qarzi qancha vaqtdan beri. TO'G'RI.
- Kredit limiti: XARIDORGA beriladigan eng ko'p kredit. Yetkazib beruvchilarga aloqasi yo'q.
- Moliyaviy holat hisobotida zaxira ayirilgan debitorlik: TO'G'RI.
- Naqd to'laydigan xaridorga kredit berilmaydi, limit kerak emas.
= Javob: muddat tahlili va sof debitorlik haqidagi fikrlar`),

    q('11.16', 223, 'single', `Which of these is NOT a benefit of selling on credit?`,
      pick(['Entering new markets', 'The chance of more sales', 'Encouraging customer loyalty', 'Fewer irrecoverable debts'], 3),
`Kaplan lists the benefits of credit as new markets, more sales and customer loyalty.
- Irrecoverable debts are a COST of credit: once you sell on credit, some customers may never pay.
= Answer: fewer irrecoverable debts`,
`Kaplan называет выгоды кредита: новые рынки, рост продаж и лояльность покупателей.
- Безнадёжные долги — это ЗАТРАТА кредита: при продаже в кредит часть покупателей может не заплатить.
= Ответ: меньше безнадёжных долгов`,
`Kaplan kreditning foydalarini sanaydi: yangi bozorlar, ko'proq sotuv va xaridor sodiqligi.
- Umidsiz qarzlar kreditning XARAJATI: kreditga sotilganda ba'zi xaridorlar to'lamasligi mumkin.
= Javob: kamroq umidsiz qarzlar`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
