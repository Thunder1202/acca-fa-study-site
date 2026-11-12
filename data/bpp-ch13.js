'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025): section 16 (bank
// reconciliations) and 11.20 (supplier statement), reworded with new figures. bppRef/bppPage point to BPP's own
// answer. Section 15 (control accounts) is left out: Kaplan's 2025-26 text does not teach control accounts.
// Left out as repeats: 16.11 (same as 16.5) and 16.14 (same as 16.6).
(function () {
  const TOPIC = 'chapter-13';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp13-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const two = (options, correctIndices) => ({ options, correctIndices });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('11.20', 224, 'single', `A business started trading on 1 January. Its payables ledger account for Supplier A shows: purchase on 1 January $80 (1); purchase on 1 February $520 (2); payment on 30 March $450 (3); balance on 31 March $150. On 31 March the supplier's statement shows: invoice on 1 January $80 (4); invoice on 1 February $520 (5); invoice on 31 March $60 (6); balance $660. Which items are reconciling items?`,
      pick(['3 only', '6 only', '3 and 6 only', '1 to 6'], 2),
`Look for items that appear on only ONE side.
# Step 1: Match the items
  The $80 and $520 purchases are in both records (1 with 4, 2 with 5).
  The $450 payment (3) is in our ledger but not yet on the supplier's statement.
  The $60 invoice (6) is on the statement but not in our ledger.
# Step 2: Check the figures
  Statement 660 - payment 450 - invoice 60 = 150 = our ledger
= Answer: 3 and 6 only
! Check invoice 6 with the supplier. If it is valid, record it in the ledger.`,
`Ищем статьи, которые есть только с ОДНОЙ стороны.
# Шаг 1: Сопоставим статьи
  Закупки $80 и $520 есть в обоих документах (1 с 4, 2 с 5).
  Платёж $450 (3) есть в нашей книге, но ещё не в выписке поставщика.
  Счёт $60 (6) есть в выписке, но не в нашей книге.
# Шаг 2: Проверим суммы
  Выписка 660 - платёж 450 - счёт 60 = 150 = наша книга
= Ответ: только 3 и 6
! Счёт 6 проверьте у поставщика. Если он верный, запишите его в книгу.`,
`Faqat BITTA tomonda bor moddalarni izlaymiz.
# 1-qadam: Moddalarni solishtiramiz
  $80 va $520 xaridlar ikkala hujjatda bor (1 va 4, 2 va 5).
  $450 to'lov (3) bizning daftarda bor, yetkazib beruvchi ko'chirmasida hali yo'q.
  $60 hisob (6) ko'chirmada bor, bizning daftarda yo'q.
# 2-qadam: Summalarni tekshiramiz
  Ko'chirma 660 - to'lov 450 - hisob 60 = 150 = bizning daftar
= Javob: faqat 3 va 6
! 6-hisobni yetkazib beruvchi bilan tekshiring. To'g'ri bo'lsa, daftarga yozing.`),

    q('16.1', 235, 'single', `The cash book shows a bank OVERDRAFT of $740 at the year end. Comparing it with the bank statement shows: (1) a cheque for $64 written by the business on the last day of the year has not yet been presented; (2) a customer's cheque for $118, paid in a week ago, was dishonoured on the last day. What bank balance goes in the statement of financial position?`,
      pick(['$922 overdrawn', '$858 overdrawn', '$622 overdrawn', '$794 overdrawn'], 1),
`Only items the business has not yet recorded change the cash book.
# Step 1: The unpresented cheque
  Already in the cash book. It is just a timing difference on the bank's side. No change.
# Step 2: The dishonoured cheque
  The money never really arrived, so take it back out: the overdraft grows by 118.
# Step 3: Corrected balance
  740 + 118 = 858 overdrawn
= Answer: $858 overdrawn`,
`Кассовую книгу меняют только статьи, которые бизнес ещё не записал.
# Шаг 1: Непредъявленный чек
  Уже в кассовой книге. Это лишь разница во времени на стороне банка. Без изменений.
# Шаг 2: Возвращённый чек
  Деньги фактически не поступили, убираем их: овердрафт растёт на 118.
# Шаг 3: Исправленный остаток
  740 + 118 = 858 овердрафт
= Ответ: овердрафт $858`,
`Kassa kitobini faqat biznes hali yozmagan moddalar o'zgartiradi.
# 1-qadam: Taqdim etilmagan chek
  Kassa kitobida allaqachon bor. Bu bank tomonidagi vaqt farqi xolos. O'zgarish yo'q.
# 2-qadam: Qaytarilgan chek
  Pul aslida kelmagan, uni chiqaramiz: overdraft 118 ga oshadi.
# 3-qadam: Tuzatilgan qoldiq
  740 + 118 = 858 overdraft
= Javob: $858 overdraft`),

    q('16.2', 236, 'number', `The cash book shows a bank overdraft of $4,820. It is then found that a standing order for $160 was entered twice, and a dishonoured cheque for $375 was entered on the debit side of the cash book instead of the credit side. What is the correct overdraft? (in $)`,
      amount(5410, '$5,410 overdrawn'),
`# Step 1: Standing order entered twice
  One payment too many was taken off, so add 160 back: the overdraft falls by 160.
# Step 2: Dishonoured cheque on the wrong side
  It was added as money in (375) instead of taken out (375). Fix it with twice the amount: the overdraft grows by 750.
# Step 3: Corrected overdraft
  4,820 - 160 + 750 = 5,410
= Answer: $5,410 overdrawn
! An entry on the wrong side is out by TWICE its amount.`,
`# Шаг 1: Постоянное поручение записано дважды
  Один платёж вычли лишний раз, вернём 160: овердрафт уменьшается на 160.
# Шаг 2: Возвращённый чек не на той стороне
  Его добавили как поступление (375), а не вычли (375). Исправляем двойной суммой: овердрафт растёт на 750.
# Шаг 3: Исправленный овердрафт
  4 820 - 160 + 750 = 5 410
= Ответ: овердрафт $5 410
! Запись не на той стороне ошибается на ДВОЙНУЮ сумму.`,
`# 1-qadam: Doimiy topshiriq ikki marta yozilgan
  Bitta to'lov ortiqcha ayirilgan, 160 ni qaytaramiz: overdraft 160 ga kamayadi.
# 2-qadam: Qaytarilgan chek noto'g'ri tomonda
  U kirim sifatida qo'shilgan (375), ayirilmagan (375). Ikki baravar summa bilan tuzatamiz: overdraft 750 ga oshadi.
# 3-qadam: Tuzatilgan overdraft
  4 820 - 160 + 750 = 5 410
= Javob: $5 410 overdraft
! Noto'g'ri tomondagi yozuv IKKI baravar summaga xato qiladi.`),

    q('16.3', 236, 'single', `A business had $3,200 in the bank at the start of the month. During the month it paid for goods invoiced at $2,000 less a 20% trade discount and a 5% settlement discount, which it took. It received payment from a customer for a $400 invoice, less a 2.5% settlement discount the customer took. What is the bank balance at the end of the month?`,
      pick(['$2,070', '$1,990', '$2,080', '$1,670'], 0),
`# Step 1: Cash paid to the supplier
  After trade discount: 2,000 x 80% = 1,600
  After settlement discount: 1,600 x 95% = 1,520
# Step 2: Cash received from the customer
  400 x 97.5% = 390
# Step 3: Closing balance
  3,200 - 1,520 + 390 = 2,070
= Answer: $2,070
! The bank only sees the cash that actually moved, after all discounts.`,
`# Шаг 1: Оплачено поставщику
  После торговой скидки: 2 000 x 80% = 1 600
  После скидки за досрочную оплату: 1 600 x 95% = 1 520
# Шаг 2: Получено от покупателя
  400 x 97,5% = 390
# Шаг 3: Остаток на конец
  3 200 - 1 520 + 390 = 2 070
= Ответ: $2 070
! Банк видит только реально движущиеся деньги, после всех скидок.`,
`# 1-qadam: Yetkazib beruvchiga to'langan
  Savdo chegirmasidan keyin: 2 000 x 80% = 1 600
  Muddatidan oldin to'lov chegirmasidan keyin: 1 600 x 95% = 1 520
# 2-qadam: Xaridordan olingan
  400 x 97,5% = 390
# 3-qadam: Yakuniy qoldiq
  3 200 - 1 520 + 390 = 2 070
= Javob: $2 070
! Bank faqat haqiqatda harakatlangan pulni, barcha chegirmalardan keyin ko'radi.`),

    q('16.4', 236, 'single', `The bank statement at the year end shows an overdraft of $1,250. A cheque for $140 written by the business has not yet been presented. A customer's cheque for $210 was dishonoured by the bank on the last day of the year, but the business has not yet been told. What is the correct bank balance for the statement of financial position?`,
      pick(['$1,600 overdrawn', '$1,390 overdrawn', '$1,180 overdrawn', '$1,110 overdrawn'], 1),
`Start from the bank statement and adjust for items the bank has not yet processed.
# Step 1: Unpresented cheque
  The bank will still take out 140: 1,250 + 140 = 1,390 overdrawn
# Step 2: Dishonoured cheque
  The bank has already reversed it, so the statement already shows it. No adjustment here: only the cash book needs fixing.
= Answer: $1,390 overdrawn`,
`Начнём с выписки банка и учтём то, что банк ещё не провёл.
# Шаг 1: Непредъявленный чек
  Банк ещё спишет 140: 1 250 + 140 = 1 390 овердрафт
# Шаг 2: Возвращённый чек
  Банк уже сторнировал его, выписка это показывает. Здесь корректировки нет: исправить нужно только кассовую книгу.
= Ответ: овердрафт $1 390`,
`Bank ko'chirmasidan boshlaymiz va bank hali o'tkazmaganlarni hisobga olamiz.
# 1-qadam: Taqdim etilmagan chek
  Bank hali 140 ni yechadi: 1 250 + 140 = 1 390 overdraft
# 2-qadam: Qaytarilgan chek
  Bank uni allaqachon qaytargan, ko'chirma buni ko'rsatadi. Bu yerda tuzatish yo'q: faqat kassa kitobini tuzatish kerak.
= Javob: $1 390 overdraft`),

    q('16.5', 236, 'single', `Bank reconciliation facts: (1) the cash book shows an overdraft of $7,640 before the items below; (2) bank charges of $480 on the statement are not in the cash book; (3) the bank wrongly credited the account with $360 belonging to another customer; (4) cheque payments of $2,950 in the cash book have not been presented; (5) receipts of $4,710 in the cash book have not yet been credited by the bank. What did the bank statement show BEFORE these items?`,
      pick(['$9,520 overdrawn', '$9,040 overdrawn', '$9,520 in credit', '$6,720 overdrawn'], 0),
`# Step 1: Correct the cash book
  -7,640 - 480 bank charges = -8,120 (overdrawn 8,120)
# Step 2: Work back to the bank statement
  Correct balance -8,120
  The bank wrongly added 360, so the statement shows 360 more: -8,120 + 360
  The bank has not yet taken out 2,950 of cheques, so the statement shows 2,950 more: + 2,950
  The bank has not yet added 4,710 of receipts, so the statement shows 4,710 less: - 4,710
  -8,120 + 360 + 2,950 - 4,710 = -9,520
= Answer: $9,520 overdrawn
! Check by going forward: -9,520 - 360 - 2,950 + 4,710 = -8,120, the corrected cash book.`,
`# Шаг 1: Исправим кассовую книгу
  -7 640 - 480 комиссия банка = -8 120 (овердрафт 8 120)
# Шаг 2: Вернёмся к выписке банка
  Верный остаток -8 120
  Банк ошибочно зачислил 360, в выписке на 360 больше: -8 120 + 360
  Банк ещё не списал чеки на 2 950, в выписке на 2 950 больше: + 2 950
  Банк ещё не зачислил поступления на 4 710, в выписке на 4 710 меньше: - 4 710
  -8 120 + 360 + 2 950 - 4 710 = -9 520
= Ответ: овердрафт $9 520
! Проверка в обратную сторону: -9 520 - 360 - 2 950 + 4 710 = -8 120, исправленная кассовая книга.`,
`# 1-qadam: Kassa kitobini tuzatamiz
  -7 640 - 480 bank komissiyasi = -8 120 (overdraft 8 120)
# 2-qadam: Bank ko'chirmasiga qaytamiz
  To'g'ri qoldiq -8 120
  Bank xato 360 qo'shgan, ko'chirmada 360 ko'p: -8 120 + 360
  Bank hali 2 950 lik cheklarni yechmagan, ko'chirmada 2 950 ko'p: + 2 950
  Bank hali 4 710 kirimni qo'shmagan, ko'chirmada 4 710 kam: - 4 710
  -8 120 + 360 + 2 950 - 4 710 = -9 520
= Javob: $9 520 overdraft
! Oldinga tekshiruv: -9 520 - 360 - 2 950 + 4 710 = -8 120, tuzatilgan kassa kitobi.`),

    q('16.6', 236, 'single', `A trainee prepared this reconciliation: overdraft per bank statement $28,450; add lodgements credited after the date $39,600 (total $68,050); less unpresented cheques $31,280; balance per cash book $36,770 credit. The other amounts are correct. What should the cash book balance be?`,
      pick(['$36,770 credit, as stated', '$20,130 credit', '$20,130 debit', '$99,330 credit'], 1),
`The trainee treated the overdraft as if it were money in the bank.
# Step 1: Start from the bank statement, with the right sign
  Overdraft: -28,450
# Step 2: Adjust
  Lodgements not yet credited by the bank: + 39,600
  Cheques not yet presented: - 31,280
  -28,450 + 39,600 - 31,280 = -20,130
# Step 3: Which side?
  A negative bank balance is an overdraft: a CREDIT balance in the cash book.
= Answer: $20,130 credit
! Write an overdraft as a minus before you start, then add and subtract.`,
`Стажёр посчитал овердрафт так, будто это деньги на счёте.
# Шаг 1: Начнём с выписки, с верным знаком
  Овердрафт: -28 450
# Шаг 2: Корректировки
  Поступления, ещё не зачисленные банком: + 39 600
  Непредъявленные чеки: - 31 280
  -28 450 + 39 600 - 31 280 = -20 130
# Шаг 3: Какая сторона?
  Отрицательный остаток — овердрафт: КРЕДИТОВЫЙ остаток в кассовой книге.
= Ответ: $20 130 кредит
! Запишите овердрафт со знаком минус перед началом, потом прибавляйте и вычитайте.`,
`Stajyor overdraftni hisobdagi pul kabi hisoblagan.
# 1-qadam: Bank ko'chirmasidan, to'g'ri ishora bilan boshlaymiz
  Overdraft: -28 450
# 2-qadam: Tuzatishlar
  Bank hali qo'shmagan kirimlar: + 39 600
  Taqdim etilmagan cheklar: - 31 280
  -28 450 + 39 600 - 31 280 = -20 130
# 3-qadam: Qaysi tomon?
  Manfiy qoldiq — overdraft: kassa kitobida KREDIT qoldiq.
= Javob: $20 130 kredit
! Boshlashdan oldin overdraftni minus bilan yozing, so'ng qo'shing va ayiring.`),

    q('16.7', 236, 'multi', `Which TWO of these differences between the cash book and the bank statement need an entry in the CASH BOOK?`,
      two([
        'A customer\'s cheque paid in and later dishonoured',
        'An error made by the bank',
        'Bank charges',
        'Lodgements not yet credited by the bank',
        'Cheques not yet presented',
      ], [0, 2]),
`Ask: is this something the BUSINESS has not yet recorded?
- Dishonoured cheque: the business recorded money that never arrived. Cash book entry. YES.
- Bank error: the bank fixes it. Reconciliation only.
- Bank charges: the business learns of them from the statement. Cash book entry. YES.
- Lodgements not credited and cheques not presented: timing differences already in the cash book. Reconciliation only.
= Answer: the dishonoured cheque and the bank charges`,
`Спросим: БИЗНЕС ещё не записал это?
- Возвращённый чек: бизнес записал деньги, которые не пришли. Запись в кассовой книге. ДА.
- Ошибка банка: её исправляет банк. Только в сверке.
- Комиссия банка: бизнес узнаёт о ней из выписки. Запись в кассовой книге. ДА.
- Незачисленные поступления и непредъявленные чеки: разница во времени, уже в кассовой книге. Только в сверке.
= Ответ: возвращённый чек и комиссия банка`,
`So'raymiz: buni BIZNES hali yozmaganmi?
- Qaytarilgan chek: biznes kelmagan pulni yozgan. Kassa kitobiga yozuv. HA.
- Bank xatosi: uni bank tuzatadi. Faqat solishtiruvda.
- Bank komissiyasi: biznes u haqda ko'chirmadan biladi. Kassa kitobiga yozuv. HA.
- Qo'shilmagan kirimlar va taqdim etilmagan cheklar: vaqt farqi, kassa kitobida bor. Faqat solishtiruvda.
= Javob: qaytarilgan chek va bank komissiyasi`),

    q('16.8', 237, 'single', `These items explain the difference between a company's cash book and its bank statement: (1) bank charges $290; (2) a bank error: a cheque wrongly taken from the account, $800; (3) lodgements not yet credited $3,940; (4) unpresented cheques $1,260; (5) a direct debit $410; (6) a customer's cheque paid in and dishonoured $530. Which need an entry in the cash book?`,
      pick(['2, 4 and 6', '1, 5 and 6', '3 and 4', '3 and 5'], 1),
`Cash book entries: items the business first learns about from the bank statement.
- (1) Bank charges, (5) direct debit and (6) dishonoured cheque: YES.
- (2) Bank error: the bank corrects it. Reconciliation only.
- (3) and (4): timing differences already in the cash book. Reconciliation only.
= Answer: 1, 5 and 6`,
`Записи в кассовой книге — то, о чём бизнес впервые узнаёт из выписки.
- (1) Комиссия, (5) прямое списание и (6) возвращённый чек: ДА.
- (2) Ошибка банка: исправляет банк. Только в сверке.
- (3) и (4): разница во времени, уже в кассовой книге. Только в сверке.
= Ответ: 1, 5 и 6`,
`Kassa kitobi yozuvlari — biznes ilk bor bank ko'chirmasidan biladigan narsalar.
- (1) Komissiya, (5) to'g'ridan-to'g'ri yechish va (6) qaytarilgan chek: HA.
- (2) Bank xatosi: bank tuzatadi. Faqat solishtiruvda.
- (3) va (4): vaqt farqi, kassa kitobida bor. Faqat solishtiruvda.
= Javob: 1, 5 va 6`),

    q('16.9', 237, 'single', `A trainee prepared this reconciliation: overdraft per bank statement $4,520; less unpresented cheques $7,340 (giving $2,820); add deposits credited after the date $15,180; cash at bank $18,000. What should the cash book balance be?`,
      pick(['$18,000 at bank, as stated', '$3,320 at bank', '$10,660 at bank', '$3,320 overdrawn'], 1),
`# Step 1: Start from the bank statement, with the right sign
  Overdraft: -4,520
# Step 2: Adjust
  Cheques not yet presented will still be taken out: - 7,340, giving -11,860
  Deposits not yet credited will still be added: + 15,180
  -11,860 + 15,180 = 3,320
# Step 3: Which side?
  Positive, so money in the bank.
= Answer: $3,320 at bank`,
`# Шаг 1: Начнём с выписки, с верным знаком
  Овердрафт: -4 520
# Шаг 2: Корректировки
  Непредъявленные чеки ещё спишут: - 7 340, получаем -11 860
  Незачисленные поступления ещё зачислят: + 15 180
  -11 860 + 15 180 = 3 320
# Шаг 3: Какая сторона?
  Положительный, значит деньги на счёте.
= Ответ: $3 320 на счёте`,
`# 1-qadam: Bank ko'chirmasidan, to'g'ri ishora bilan boshlaymiz
  Overdraft: -4 520
# 2-qadam: Tuzatishlar
  Taqdim etilmagan cheklar hali yechiladi: - 7 340, natija -11 860
  Qo'shilmagan kirimlar hali qo'shiladi: + 15 180
  -11 860 + 15 180 = 3 320
# 3-qadam: Qaysi tomon?
  Musbat, demak bankda pul bor.
= Javob: bankda $3 320`),

    q('16.10', 237, 'single', `Which statements about bank reconciliations are correct? (1) Any difference between the cash book and the bank statement must be corrected by a journal entry. (2) Lodgements recorded in the cash book before the date but credited by the bank after it should reduce an overdraft on the bank statement in the reconciliation. (3) Bank charges not yet in the cash book are dealt with only as an adjustment in the reconciliation. (4) If a customer's cheque is dishonoured, a credit entry is needed in the cash book.`,
      pick(['2 and 4', '1 and 4', '2 and 3', '1 and 3'], 0),
`- (1) FALSE. Timing differences and bank errors are explained in the reconciliation, not journalled.
- (2) TRUE. The deposit is money in, so adding it to the bank figure reduces the overdraft.
- (3) FALSE. Bank charges are entered in the cash book, which is then corrected.
- (4) TRUE. The money never arrived, so it is taken back out: a credit.
= Answer: 2 and 4`,
`- (1) НЕВЕРНО. Разницы во времени и ошибки банка объясняют в сверке, а не проводкой.
- (2) ВЕРНО. Это поступление денег, прибавление к сумме банка уменьшает овердрафт.
- (3) НЕВЕРНО. Комиссию банка записывают в кассовую книгу и исправляют её.
- (4) ВЕРНО. Деньги не пришли, их убирают: кредит.
= Ответ: 2 и 4`,
`- (1) NOTO'G'RI. Vaqt farqlari va bank xatolari yozuv bilan emas, solishtiruvda tushuntiriladi.
- (2) TO'G'RI. Bu pul kirimi, bank summasiga qo'shish overdraftni kamaytiradi.
- (3) NOTO'G'RI. Bank komissiyasi kassa kitobiga yoziladi va u tuzatiladi.
- (4) TO'G'RI. Pul kelmagan, u chiqariladi: kredit.
= Javob: 2 va 4`),

    q('16.12', 237, 'single', `A company's attempt at a bank reconciliation: overdraft per bank statement $26,900; add deposits not credited $29,300 (total $56,200); less unpresented cheques $4,100; overdraft per cash book $52,100. If the bank statement figure is correct, what should the cash book show?`,
      pick(['$52,100 overdrawn, as stated', '$1,700 overdrawn', '$6,500 cash at bank', '$2,400 cash at bank'], 1),
`# Step 1: Start from the bank statement, with the right sign
  Overdraft: -26,900
# Step 2: Adjust
  Deposits not yet credited: + 29,300, giving 2,400
  Cheques not yet presented: - 4,100, giving -1,700
# Step 3: Which side?
  Negative, so overdrawn.
= Answer: $1,700 overdrawn`,
`# Шаг 1: Начнём с выписки, с верным знаком
  Овердрафт: -26 900
# Шаг 2: Корректировки
  Незачисленные поступления: + 29 300, получаем 2 400
  Непредъявленные чеки: - 4 100, получаем -1 700
# Шаг 3: Какая сторона?
  Отрицательный, значит овердрафт.
= Ответ: овердрафт $1 700`,
`# 1-qadam: Bank ko'chirmasidan, to'g'ri ishora bilan boshlaymiz
  Overdraft: -26 900
# 2-qadam: Tuzatishlar
  Qo'shilmagan kirimlar: + 29 300, natija 2 400
  Taqdim etilmagan cheklar: - 4 100, natija -1 700
# 3-qadam: Qaysi tomon?
  Manfiy, demak overdraft.
= Javob: $1 700 overdraft`),

    q('16.13', 237, 'single', `After checking the cash book against the bank statement, which items could need an entry in the cash book? (1) Bank charges. (2) A customer's cheque that was dishonoured. (3) A cheque not yet presented. (4) A deposit not yet credited. (5) A credit transfer shown on the bank statement. (6) A standing order shown on the bank statement.`,
      pick(['1, 2, 5 and 6', '3 and 4', '1, 3, 4 and 6', '3, 4, 5 and 6'], 0),
`The cash book needs items that the bank has processed but the business has not yet recorded.
- (1), (2), (5) and (6): all first seen on the bank statement. YES.
- (3) and (4): already in the cash book, just not yet through the bank. Reconciliation only.
= Answer: 1, 2, 5 and 6`,
`В кассовую книгу вносят то, что банк провёл, а бизнес ещё не записал.
- (1), (2), (5) и (6): всё это впервые видно в выписке. ДА.
- (3) и (4): уже в кассовой книге, просто ещё не прошли через банк. Только в сверке.
= Ответ: 1, 2, 5 и 6`,
`Kassa kitobiga bank o'tkazgan, biznes esa hali yozmagan narsalar kiritiladi.
- (1), (2), (5) va (6): hammasi ilk bor ko'chirmada ko'rinadi. HA.
- (3) va (4): kassa kitobida bor, faqat bankdan hali o'tmagan. Faqat solishtiruvda.
= Javob: 1, 2, 5 va 6`),

    q('16.15', 238, 'single', `Possible causes of a difference at the month end: (1) cheques sent to suppliers but not yet presented; (2) a bank error crediting the company's deposit to another customer's account; (3) bank charges; (4) cheques paid in before the month end but credited by the bank three days later; (5) a cheque recorded and paid in but dishonoured by the bank. Which split is correct?`,
      pick([
        'Cash book entry: 1, 2, 4. Reconciliation: 3, 5',
        'Cash book entry: 3, 5. Reconciliation: 1, 2, 4',
        'Cash book entry: 3, 4. Reconciliation: 1, 2, 5',
        'Cash book entry: 2, 3, 5. Reconciliation: 1, 4',
      ], 1),
`- Cash book entries, things the business did not know about: (3) bank charges and (5) the dishonoured cheque.
- Reconciliation items: (1) unpresented cheques and (4) late lodgements are timing differences; (2) is the bank's error for the bank to correct.
= Answer: cash book 3, 5; reconciliation 1, 2, 4`,
`- Записи в кассовой книге, о чём бизнес не знал: (3) комиссия и (5) возвращённый чек.
- Статьи сверки: (1) непредъявленные чеки и (4) поздние поступления — разница во времени; (2) — ошибка банка, её исправляет банк.
= Ответ: кассовая книга 3, 5; сверка 1, 2, 4`,
`- Kassa kitobi yozuvlari, biznes bilmagan narsalar: (3) komissiya va (5) qaytarilgan chek.
- Solishtiruv moddalari: (1) taqdim etilmagan cheklar va (4) kech kirimlar — vaqt farqi; (2) — bank xatosi, uni bank tuzatadi.
= Javob: kassa kitobi 3, 5; solishtiruv 1, 2, 4`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
