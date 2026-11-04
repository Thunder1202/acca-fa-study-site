'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-13';
  const questions = [
    {
      id: 'ch13-q293',
      kitRef: 293,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A business\'s bank ledger account shows a credit balance of $1,480. Cheques of $64 written to suppliers have not cleared, and lodgements of $142 are uncleared. The bank has accidentally credited the account with $18 of interest due to another customer. A standing order of $260 has not been recorded. What is the balance on the bank statement?',
      explanation: {
        en: `Write overdrafts as negative numbers. First correct the ledger, then work back to the statement.
# Step 1: Correct the ledger
  A ledger credit balance means overdrawn: -$1,480
  The unrecorded standing order takes more money out: -$1,480 - $260 = -$1,740
# Step 2: Work back to the statement
  Cheques not yet cleared: the bank has not taken them out yet, so its balance is $64 higher: + $64
  Lodgements not yet cleared: the bank has not added them yet, so its balance is $142 lower: - $142
  The bank wrongly added $18 of someone else's interest, so its balance is $18 higher: + $18
  -$1,740 + $64 - $142 + $18 = -$1,800
= Answer: $1,800 overdrawn, which a bank statement shows as a DEBIT ($1,800 Dr)`,
        ru: `Записывайте овердрафт отрицательным числом. Сначала исправьте книгу, затем идите назад к выписке.
# Шаг 1: Исправляем книгу
  Кредитовый остаток в книге — это овердрафт: -$1,480
  Незаписанное постоянное поручение забирает ещё деньги: -$1,480 - $260 = -$1,740
# Шаг 2: Назад к выписке
  Непрошедшие чеки: банк их ещё не списал, его остаток на $64 больше: + $64
  Незачисленные поступления: банк их ещё не добавил, его остаток на $142 меньше: - $142
  Банк ошибочно зачислил $18 чужих процентов, его остаток на $18 больше: + $18
  -$1,740 + $64 - $142 + $18 = -$1,800
= Ответ: овердрафт $1,800, в банковской выписке это ДЕБЕТ ($1,800 Дт)`,
        uz: `Overdraftni manfiy son qilib yozing. Avval kitobni tuzating, keyin ko'chirmaga orqaga boring.
# 1-qadam: Kitobni tuzatamiz
  Kitobdagi kredit qoldiq — overdraft: -$1,480
  Yozilmagan doimiy topshiriq yana pul oladi: -$1,480 - $260 = -$1,740
# 2-qadam: Ko'chirmaga orqaga
  O'tmagan cheklar: bank ularni hali yechmagan, qoldig'i $64 ko'p: + $64
  O'tmagan tushumlar: bank ularni hali qo'shmagan, qoldig'i $142 kam: - $142
  Bank xato bilan boshqaning $18 foizini qo'shgan, qoldig'i $18 ko'p: + $18
  -$1,740 + $64 - $142 + $18 = -$1,800
= Javob: $1,800 overdraft, bank ko'chirmasida bu DEBET ($1,800 Dt)`,
      },
      options: ['$1,280 Cr', '$1,280 Dr', '$1,800 Cr', '$1,800 Dr'],
      correctIndex: 3,
    },
    {
      id: 'ch13-q294',
      kitRef: 294,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A business\'s bank ledger account shows $240 credit, and its bank statement shows $310 credit. Which of these fully explains the difference?',
      explanation: {
        en: `Test each option: does it bring the ledger and the statement to the same figure?
# The starting points
  Ledger $240 credit = overdrawn: -$240
  Statement $310 credit = money in the bank: +$310
# Option B
  Correct the ledger: a $155 receipt was posted on the wrong side, so add it back twice (+$310), and add unrecorded interest (+$30)
  -$240 + $310 + $30 = $100
  Adjust the statement: take off unpresented cheques $210
  $310 - $210 = $100
= Both are $100, so option B fully explains the difference.`,
        ru: `Проверьте каждый вариант: приводит ли он книгу и выписку к одной цифре?
# Исходные данные
  Книга $240 кредит = овердрафт: -$240
  Выписка $310 кредит = деньги в банке: +$310
# Вариант B
  Исправляем книгу: поступление $155 проведено не на ту сторону, прибавляем дважды (+$310), плюс незаписанные проценты (+$30)
  -$240 + $310 + $30 = $100
  Поправляем выписку: вычитаем непрошедшие чеки $210
  $310 - $210 = $100
= Обе $100, значит вариант B полностью объясняет разницу.`,
        uz: `Har bir variantni tekshiring: kitob va ko'chirmani bir songa keltiradimi?
# Boshlang'ich ma'lumot
  Kitob $240 kredit = overdraft: -$240
  Ko'chirma $310 kredit = bankda pul: +$310
# B variant
  Kitobni tuzatamiz: $155 tushum noto'g'ri tomonga yozilgan, ikki marta qo'shamiz (+$310), plus yozilmagan foiz (+$30)
  -$240 + $310 + $30 = $100
  Ko'chirmani tuzatamiz: o'tmagan cheklar $210 ni ayiramiz
  $310 - $210 = $100
= Ikkalasi $100, demak B variant farqni to'liq tushuntiradi.`,
      },
      options: [
        'Unpresented cheques of $120 and an uncleared lodgement of $40',
        'Unpresented cheques of $210, a cash receipt of $155 posted to the wrong side of the ledger, and unrecorded bank interest received of $30',
        'An unrecorded direct debit of $40, a dishonoured cheque of $90 and an uncleared lodgement of $50',
        'An unrecorded standing order of $70, an unpresented cheque of $130, and a bank error crediting the account with $130',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch13-q295',
      kitRef: 295,
      topicId: 'chapter-13',
      type: 'matrix',
      text: 'State whether each statement is true or false.',
      explanation: {
        en: `Check each statement.
- Unpresented cheques are deducted from the statement balance: TRUE. The bank will still take that money out.
- A dishonoured cheque is a debit in the ledger: FALSE. The cheque was first debited (money in); bouncing reverses that with a CREDIT.
- A bank error is corrected in the ledger: FALSE. It is corrected on the statement side, and the bank is told.
- An overdraft is a debit on the bank statement: TRUE. To the bank, an overdraft is money you owe it.`,
        ru: `Проверим каждое утверждение.
- Непрошедшие чеки вычитают из остатка выписки: ВЕРНО. Банк ещё спишет эти деньги.
- Вернувшийся чек — дебет в книге: НЕВЕРНО. Чек сначала дебетовали (деньги пришли), возврат отменяет это КРЕДИТОМ.
- Ошибку банка исправляют в книге: НЕВЕРНО. Её поправляют на стороне выписки и сообщают банку.
- Овердрафт — дебет в выписке: ВЕРНО. Для банка овердрафт — ваш долг ему.`,
        uz: `Har bir fikrni tekshiramiz.
- O'tmagan cheklar ko'chirma qoldig'idan ayiriladi: TO'G'RI. Bank bu pulni hali yechadi.
- Qaytgan chek kitobda debet: NOTO'G'RI. Chek avval debetlangan (pul kirdi), qaytish buni KREDIT bilan bekor qiladi.
- Bank xatosi kitobda tuzatiladi: NOTO'G'RI. U ko'chirma tomonida tuzatiladi va bankka xabar beriladi.
- Overdraft ko'chirmada debet: TO'G'RI. Bank uchun overdraft — sizning unga qarzingiz.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'When preparing a bank reconciliation, unpresented cheques are deducted from a cash balance shown on the bank statement',
          correctIndex: 0,
        },
        {
          text: 'A customer\'s cheque that is dishonoured is corrected by a debit entry in the bank ledger account',
          correctIndex: 1,
        },
        { text: 'An error by the bank is corrected by an entry in the bank ledger account', correctIndex: 1 },
        { text: 'An overdraft is a debit balance on the bank statement', correctIndex: 0 },
      ],
    },
    {
      id: 'ch13-q296',
      kitRef: 296,
      topicId: 'chapter-13',
      type: 'single',
      text: 'An inexperienced bookkeeper prepared this reconciliation at 31 December. Balance per bank statement (overdrawn) $42,300; add lodgements not credited $21,500, giving $63,800; less unpresented cheques $16,400, giving a balance per the ledger of $47,400. What should the bank ledger balance be?',
      explanation: {
        en: `The bookkeeper treated the overdraft as if it were money in the bank. Redo it with the overdraft as a negative number.
# Step 1: Start from the statement
  $42,300 overdrawn: -$42,300
# Step 2: Lodgements not yet credited (the bank will add these)
  -$42,300 + $21,500 = -$20,800
# Step 3: Unpresented cheques (the bank will take these out)
  -$20,800 - $16,400 = -$37,200
= Answer: $37,200 overdrawn
! Adding money to an overdraft makes it SMALLER, not bigger.`,
        ru: `Бухгалтер считал овердрафт деньгами в банке. Переделаем с овердрафтом как отрицательным числом.
# Шаг 1: Начинаем с выписки
  Овердрафт $42,300: -$42,300
# Шаг 2: Незачисленные поступления (банк их добавит)
  -$42,300 + $21,500 = -$20,800
# Шаг 3: Непрошедшие чеки (банк их спишет)
  -$20,800 - $16,400 = -$37,200
= Ответ: овердрафт $37,200
! Добавление денег к овердрафту его УМЕНЬШАЕТ, а не увеличивает.`,
        uz: `Buxgalter overdraftni bankdagi pul deb hisoblagan. Overdraftni manfiy son qilib qayta hisoblaymiz.
# 1-qadam: Ko'chirmadan boshlaymiz
  $42,300 overdraft: -$42,300
# 2-qadam: O'tmagan tushumlar (bank ularni qo'shadi)
  -$42,300 + $21,500 = -$20,800
# 3-qadam: O'tmagan cheklar (bank ularni yechadi)
  -$20,800 - $16,400 = -$37,200
= Javob: $37,200 overdraft
! Overdraftga pul qo'shish uni KICHRAYTIRADI, kattalashtirmaydi.`,
      },
      options: ['$47,400 overdrawn', '$37,200 overdrawn', '$4,400 overdrawn', '$80,200 overdrawn'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q297',
      kitRef: 297,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank reconciliation is being prepared. Bank charges of $420 and a direct debit of $310 are not in the ledger. The bank statement shows a debit balance of $240. Unpresented cheques are $1,380. A bank error debited a $105 cheque meant for another customer. Cheques received but not yet banked are $970. What is the ledger balance after all adjustments?',
      explanation: {
        en: `The question asks for the corrected ledger, so start from the statement and adjust for what the bank has not done yet.
# Step 1: The statement
  A debit balance means overdrawn: -$240
  (The charges and direct debit are already in this figure, because the bank made them.)
# Step 2: Adjust it
  Unpresented cheques still to leave: - $1,380
  The bank wrongly took $105 out for another customer, so put it back: + $105
  Cheques received but not yet banked will go in: + $970
  -$240 - $1,380 + $105 + $970 = -$545
= Answer: $545 overdrawn, which is a CREDIT in the ledger ($545 Cr)`,
        ru: `Нужен исправленный остаток книги, поэтому начнём с выписки и поправим на то, чего банк ещё не сделал.
# Шаг 1: Выписка
  Дебетовый остаток — овердрафт: -$240
  (Комиссия и прямое списание уже в этой цифре, их провёл банк.)
# Шаг 2: Поправляем
  Непрошедшие чеки ещё спишут: - $1,380
  Банк ошибочно списал $105 за другого клиента, возвращаем: + $105
  Полученные, но не внесённые чеки поступят: + $970
  -$240 - $1,380 + $105 + $970 = -$545
= Ответ: овердрафт $545, в книге это КРЕДИТ ($545 Кт)`,
        uz: `Tuzatilgan kitob qoldig'i so'ralmoqda, shuning uchun ko'chirmadan boshlab, bank hali qilmaganlarni tuzatamiz.
# 1-qadam: Ko'chirma
  Debet qoldiq — overdraft: -$240
  (Komissiya va yechish bu sonda allaqachon bor, ularni bank qilgan.)
# 2-qadam: Tuzatamiz
  O'tmagan cheklar hali yechiladi: - $1,380
  Bank xato bilan boshqa mijoz uchun $105 yechgan, qaytaramiz: + $105
  Olingan, lekin topshirilmagan cheklar kiradi: + $970
  -$240 - $1,380 + $105 + $970 = -$545
= Javob: $545 overdraft, kitobda bu KREDIT ($545 Kt)`,
      },
      options: ['$755 Cr', '$545 Dr', '$545 Cr', '$755 Dr'],
      correctIndex: 2,
    },
    {
      id: 'ch13-q298',
      kitRef: 298,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A ledger shows the bank $9,640 overdrawn. Bank charges of $620 on the statement are not in the ledger. The bank credited the account in error with $480 belonging to another customer. Cheques of $3,540 have not been presented, and $5,760 entered on the debit side of the ledger has not been paid in. What is the balance on the bank statement?',
      explanation: {
        en: `Correct the ledger first, then work back to the statement.
# Step 1: Correct the ledger
  -$9,640 overdrawn, less unrecorded bank charges $620 = -$10,260
# Step 2: Work back to the statement
  Cheques not yet presented: the bank still holds that money: + $3,540
  Money recorded but not yet paid in: the bank does not have it yet: - $5,760
  The bank wrongly added $480: its balance is higher: + $480
  -$10,260 + $3,540 - $5,760 + $480 = -$12,000
= Answer: $12,000 overdrawn`,
        ru: `Сначала исправим книгу, затем пойдём назад к выписке.
# Шаг 1: Исправляем книгу
  Овердрафт -$9,640, минус незаписанная комиссия $620 = -$10,260
# Шаг 2: Назад к выписке
  Непредъявленные чеки: деньги ещё в банке: + $3,540
  Записанные, но не внесённые деньги: у банка их ещё нет: - $5,760
  Банк ошибочно зачислил $480: его остаток больше: + $480
  -$10,260 + $3,540 - $5,760 + $480 = -$12,000
= Ответ: овердрафт $12,000`,
        uz: `Avval kitobni tuzatib, keyin ko'chirmaga orqaga boramiz.
# 1-qadam: Kitobni tuzatamiz
  -$9,640 overdraft, minus yozilmagan komissiya $620 = -$10,260
# 2-qadam: Ko'chirmaga orqaga
  Taqdim etilmagan cheklar: pul hali bankda: + $3,540
  Yozilgan, lekin topshirilmagan pul: bankda hali yo'q: - $5,760
  Bank xato bilan $480 qo'shgan: qoldig'i ko'p: + $480
  -$10,260 + $3,540 - $5,760 + $480 = -$12,000
= Javob: $12,000 overdraft`,
      },
      options: ['$9,640 overdrawn', '$12,000 overdrawn', '$12,960 overdrawn', '$19,080 overdrawn'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q299',
      kitRef: 299,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank statement shows $14,600. The bank has dishonoured a customer\'s cheque of $350 and charged $60, neither of which is in the ledger. Unpresented cheques total $1,600, and an automatic receipt of $210 from a customer was recorded as a credit in the ledger. What was the ledger balance BEFORE any corrections?',
      explanation: {
        en: `Find the CORRECT balance first, then undo the corrections to get back to the original ledger.
# Step 1: Correct balance (from the statement)
  $14,600 - unpresented cheques $1,600 = $13,000
# Step 2: Undo the ledger corrections
  The bounced cheque ($350) and charges ($60) were taken OFF the ledger, so add them back: + $410
  The $210 receipt was posted as a credit instead of a debit, so the original ledger was $420 LOWER: - $420
  $13,000 + $350 + $60 - $420 = $12,990
= Answer: $12,990
! A receipt on the wrong side is out by twice the amount.`,
        ru: `Сначала найдём ВЕРНЫЙ остаток, затем отменим исправления, чтобы вернуться к исходной книге.
# Шаг 1: Верный остаток (от выписки)
  $14,600 - непрошедшие чеки $1,600 = $13,000
# Шаг 2: Отменяем исправления книги
  Вернувшийся чек ($350) и комиссию ($60) из книги ВЫЧЛИ, значит прибавляем: + $410
  Поступление $210 провели кредитом вместо дебета, исходная книга была на $420 МЕНЬШЕ: - $420
  $13,000 + $350 + $60 - $420 = $12,990
= Ответ: $12,990
! Поступление не на той стороне даёт ошибку в двойную сумму.`,
        uz: `Avval TO'G'RI qoldiqni topamiz, keyin tuzatishlarni bekor qilib dastlabki kitobga qaytamiz.
# 1-qadam: To'g'ri qoldiq (ko'chirmadan)
  $14,600 - o'tmagan cheklar $1,600 = $13,000
# 2-qadam: Kitob tuzatishlarini bekor qilamiz
  Qaytgan chek ($350) va komissiya ($60) kitobdan AYIRILGAN, qo'shamiz: + $410
  $210 tushum debet o'rniga kredit qilib yozilgan, dastlabki kitob $420 KAM edi: - $420
  $13,000 + $350 + $60 - $420 = $12,990
= Javob: $12,990
! Noto'g'ri tomondagi tushum ikki baravar xato beradi.`,
      },
      options: ['$13,200', '$12,990', '$13,000', '$12,570'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q300',
      kitRef: 300,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank statement shows $830 overdrawn, including bank charges of $85 not recorded in the ledger. Unpresented cheques are $910 and lodgements not yet credited are $410. The statement also wrongly includes a dividend receipt of $30 belonging to another customer. What is the overdraft in the statement of financial position?',
      explanation: {
        en: `Start from the statement and work to the correct ledger figure.
# Step 1: The statement
  $830 overdrawn: -$830 (the $85 charges are already included)
# Step 2: Timing differences
  Unpresented cheques: - $910
  Lodgements not yet credited: + $410
  -$830 - $910 + $410 = -$1,330
# Step 3: The bank error
  The $30 dividend belongs to another customer, so it is not the business's money: - $30
  -$1,330 - $30 = -$1,360
= Answer: an overdraft of $1,360`,
        ru: `Начнём с выписки и придём к верной цифре книги.
# Шаг 1: Выписка
  Овердрафт $830: -$830 (комиссия $85 уже включена)
# Шаг 2: Временные разницы
  Непрошедшие чеки: - $910
  Незачисленные поступления: + $410
  -$830 - $910 + $410 = -$1,330
# Шаг 3: Ошибка банка
  Дивиденд $30 принадлежит другому клиенту, это не деньги бизнеса: - $30
  -$1,330 - $30 = -$1,360
= Ответ: овердрафт $1,360`,
        uz: `Ko'chirmadan boshlab to'g'ri kitob soniga boramiz.
# 1-qadam: Ko'chirma
  $830 overdraft: -$830 ($85 komissiya allaqachon kiritilgan)
# 2-qadam: Vaqt farqlari
  O'tmagan cheklar: - $910
  O'tmagan tushumlar: + $410
  -$830 - $910 + $410 = -$1,330
# 3-qadam: Bank xatosi
  $30 dividend boshqa mijozniki, biznes puli emas: - $30
  -$1,330 - $30 = -$1,360
= Javob: $1,360 overdraft`,
      },
      options: ['$1,300', '$1,330', '$1,360', '$1,245'],
      correctIndex: 2,
    },
    {
      id: 'ch13-q301',
      kitRef: 301,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank ledger shows $6,240 overdrawn. A standing order of $140 was entered twice, and a dishonoured cheque of $520 was debited instead of credited. What is the correct balance?',
      explanation: {
        en: `Fix each ledger mistake.
# Start
  $6,240 overdrawn: -$6,240
# Standing order entered twice
  One entry too many took $140 out, so put it back: + $140
# Dishonoured cheque debited instead of credited
  It should have taken $520 OUT, but it put $520 IN. Correct by twice: - $1,040
= Answer: -$6,240 + $140 - $1,040 = -$7,140, so $7,140 overdrawn`,
        ru: `Исправим каждую ошибку книги.
# Начало
  Овердрафт $6,240: -$6,240
# Постоянное поручение записано дважды
  Лишняя запись забрала $140, возвращаем: + $140
# Вернувшийся чек дебетован вместо кредита
  Он должен был ЗАБРАТЬ $520, а ДОБАВИЛ $520. Исправляем дважды: - $1,040
= Ответ: -$6,240 + $140 - $1,040 = -$7,140, овердрафт $7,140`,
        uz: `Kitobdagi har bir xatoni tuzatamiz.
# Boshi
  $6,240 overdraft: -$6,240
# Doimiy topshiriq ikki marta yozilgan
  Ortiqcha yozuv $140 olgan, qaytaramiz: + $140
# Qaytgan chek kredit o'rniga debetlangan
  U $520 OLISHI kerak edi, lekin $520 QO'SHGAN. Ikki baravar tuzatamiz: - $1,040
= Javob: -$6,240 + $140 - $1,040 = -$7,140, ya'ni $7,140 overdraft`,
      },
      options: ['$5,580 overdrawn', '$6,620 overdrawn', '$6,900 overdrawn', '$7,140 overdrawn'],
      correctIndex: 3,
    },
    {
      id: 'ch13-q302',
      kitRef: 302,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank ledger opened at $530 credit. In the week: cash sales were $1,610 including sales tax of $140; receipts from credit customers were $2,700; suppliers owed $2,000 were paid less a 5% cash discount; and customers\' cheques of $280 were dishonoured. What is the closing balance?',
      explanation: {
        en: `Build the bank account for the week. Start overdrawn.
# Start
  $530 credit = overdrawn: -$530
# Money in
  Cash sales: the whole $1,610 is received (the tax is collected in the cash too): + $1,610
  Credit customers: + $2,700
# Money out
  Suppliers: $2,000 less 5% discount = $1,900: - $1,900
  Dishonoured cheques (the money did not really arrive): - $280
= Answer: -$530 + $1,610 + $2,700 - $1,900 - $280 = $1,600, a debit (money in the bank)`,
        ru: `Построим банковский счёт за неделю. Начало — овердрафт.
# Начало
  $530 кредит = овердрафт: -$530
# Поступления
  Продажи за наличные: приходят все $1,610 (налог тоже в деньгах): + $1,610
  Покупатели в кредит: + $2,700
# Выплаты
  Поставщикам: $2,000 минус скидка 5% = $1,900: - $1,900
  Вернувшиеся чеки (денег на самом деле не было): - $280
= Ответ: -$530 + $1,610 + $2,700 - $1,900 - $280 = $1,600, дебет (деньги в банке)`,
        uz: `Hafta uchun bank hisobini tuzamiz. Boshi — overdraft.
# Boshi
  $530 kredit = overdraft: -$530
# Kirim
  Naqd sotuv: butun $1,610 keladi (soliq ham pul ichida): + $1,610
  Nasiya mijozlar: + $2,700
# Chiqim
  Yetkazib beruvchilarga: $2,000 minus 5% chegirma = $1,900: - $1,900
  Qaytgan cheklar (pul aslida kelmagan): - $280
= Javob: -$530 + $1,610 + $2,700 - $1,900 - $280 = $1,600, debet (bankda pul)`,
      },
      options: ['$1,500 debit', '$1,600 debit', '$2,100 credit', '$2,660 credit'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q303',
      kitRef: 303,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank statement shows an overdraft of $900. A cheque for $90 has not been presented, and a customer\'s $140 cheque was dishonoured on the same day but the bank has not yet told the business. What bank balance goes in the statement of financial position?',
      explanation: {
        en: `Start from the statement and adjust only for what the bank still has to do.
# The unpresented cheque
  The bank will still take $90 out: -$900 - $90 = -$990
# The dishonoured cheque
  The BANK has already processed it, so it is already in the -$900. The business must fix its ledger, but the statement figure needs no adjustment.
= Answer: $990 overdrawn`,
        ru: `Начнём с выписки и поправим только то, что банку ещё предстоит сделать.
# Непрошедший чек
  Банк ещё спишет $90: -$900 - $90 = -$990
# Вернувшийся чек
  БАНК его уже провёл, он уже в -$900. Бизнес должен исправить книгу, но цифру выписки поправлять не надо.
= Ответ: овердрафт $990`,
        uz: `Ko'chirmadan boshlab, faqat bank hali qilishi kerak bo'lganini tuzatamiz.
# O'tmagan chek
  Bank hali $90 yechadi: -$900 - $90 = -$990
# Qaytgan chek
  BANK uni allaqachon o'tkazgan, u -$900 ichida. Biznes kitobini tuzatishi kerak, lekin ko'chirma soniga tuzatish kerak emas.
= Javob: $990 overdraft`,
      },
      options: ['$1,130 overdrawn', '$990 overdrawn', '$850 overdrawn', '$810 overdrawn'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q304',
      kitRef: 304,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank ledger shows $2,760. Comparison with the statement reveals unpresented cheques $920, bank charges not in the ledger $60, receipts not yet credited $510, and a dishonoured cheque not in the ledger $150. What is the correct ledger balance?',
      explanation: {
        en: `Only items the bank knew about first change the LEDGER.
# Changes the ledger
  Bank charges: - $60
  Dishonoured cheque: - $150
# Does not change the ledger (timing, statement side only)
  Unpresented cheques $920 and receipts not yet credited $510
= Answer: $2,760 - $60 - $150 = $2,550`,
        ru: `Книгу меняют только то, о чём банк узнал первым.
# Меняет книгу
  Комиссия банка: - $60
  Вернувшийся чек: - $150
# Не меняет книгу (сроки, только сторона выписки)
  Непрошедшие чеки $920 и незачисленные поступления $510
= Ответ: $2,760 - $60 - $150 = $2,550`,
        uz: `Kitobni faqat bank birinchi bilgan narsalar o'zgartiradi.
# Kitobni o'zgartiradi
  Bank komissiyasi: - $60
  Qaytgan chek: - $150
# Kitobni o'zgartirmaydi (vaqt, faqat ko'chirma tomoni)
  O'tmagan cheklar $920 va o'tmagan tushumlar $510
= Javob: $2,760 - $60 - $150 = $2,550`,
      },
      options: ['$1,630', '$2,550', '$2,970', '$3,470'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q305',
      kitRef: 305,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A bank ledger shows a credit balance of $1,360. Unpresented cheques total $490, a receipt of $150 has not yet passed through the bank, and bank charges of $85 on the statement are not in the ledger. What is the balance on the bank statement?',
      explanation: {
        en: `Correct the ledger, then work back to the statement.
# Step 1: Corrected ledger
  $1,360 credit = overdrawn: -$1,360
  Less unrecorded charges $85: -$1,445
# Step 2: Back to the statement
  Unpresented cheques (the bank still holds that money): + $490
  Receipt not yet through the bank: - $150
  -$1,445 + $490 - $150 = -$1,105
= Answer: $1,105 overdrawn`,
        ru: `Исправим книгу, затем пойдём назад к выписке.
# Шаг 1: Исправленная книга
  $1,360 кредит = овердрафт: -$1,360
  Минус незаписанная комиссия $85: -$1,445
# Шаг 2: Назад к выписке
  Непредъявленные чеки (деньги ещё в банке): + $490
  Поступление, ещё не прошедшее банк: - $150
  -$1,445 + $490 - $150 = -$1,105
= Ответ: овердрафт $1,105`,
        uz: `Kitobni tuzatib, ko'chirmaga orqaga boramiz.
# 1-qadam: Tuzatilgan kitob
  $1,360 kredit = overdraft: -$1,360
  Minus yozilmagan komissiya $85: -$1,445
# 2-qadam: Ko'chirmaga orqaga
  Taqdim etilmagan cheklar (pul hali bankda): + $490
  Bankdan hali o'tmagan tushum: - $150
  -$1,445 + $490 - $150 = -$1,105
= Javob: $1,105 overdraft`,
      },
      options: ['$1,105 overdrawn', '$1,020 overdrawn', '$1,615 in credit', '$1,700 in credit'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q306',
      kitRef: 306,
      topicId: 'chapter-13',
      type: 'single',
      text: 'Which of these is NOT an unrecorded difference when reconciling the ledger to the bank statement?',
      explanation: {
        en: `"Unrecorded" means on the bank statement but not yet in YOUR ledger.
- Bank interest: the bank adds it first. Unrecorded.
- A BACS receipt: arrives in the bank before you know. Unrecorded.
- A standing order: the bank pays it automatically. Unrecorded.
- An uncleared lodgement: already in your ledger, not yet at the bank. A TIMING difference, not unrecorded.
= Answer: an uncleared lodgement`,
        ru: `«Незаписанное» — есть в выписке, но ещё нет в ВАШЕЙ книге.
- Банковские проценты: банк добавляет первым. Незаписанное.
- Поступление BACS: приходит в банк раньше, чем вы узнаете. Незаписанное.
- Постоянное поручение: банк платит автоматически. Незаписанное.
- Незачисленное поступление: уже в вашей книге, ещё не в банке. ВРЕМЕННАЯ разница, а не незаписанное.
= Ответ: незачисленное поступление`,
        uz: `«Yozilmagan» — ko'chirmada bor, lekin SIZNING kitobingizda hali yo'q.
- Bank foizi: bank birinchi qo'shadi. Yozilmagan.
- BACS tushumi: siz bilmasdan bankka keladi. Yozilmagan.
- Doimiy topshiriq: bank avtomatik to'laydi. Yozilmagan.
- O'tmagan tushum: kitobingizda bor, bankda hali yo'q. VAQT farqi, yozilmagan emas.
= Javob: o'tmagan tushum`,
      },
      options: ['An uncleared lodgement', 'Bank interest', 'A BACS receipt', 'A standing order'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q307',
      kitRef: 307,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A reconciliation at 31 March shows outstanding lodgements of $5,600 and unpresented cheques of $3,100. Bank charges of $140 on the statement were not in the ledger. The adjusted ledger balance was a debit of $1,240. What balance is shown on the bank statement?',
      explanation: {
        en: `Start from the adjusted ledger and work back to the statement.
# Start
  Adjusted ledger: $1,240 (the charges are already in it)
# Back to the statement
  Lodgements the bank has not added yet: - $5,600
  Cheques the bank has not paid yet: + $3,100
  $1,240 - $5,600 + $3,100 = -$1,260
= Answer: $1,260 overdrawn, which a bank statement shows as a DEBIT ($1,260 Dr)`,
        ru: `Начнём с исправленной книги и пойдём назад к выписке.
# Начало
  Исправленная книга: $1,240 (комиссия уже в ней)
# Назад к выписке
  Поступления, которые банк ещё не добавил: - $5,600
  Чеки, которые банк ещё не оплатил: + $3,100
  $1,240 - $5,600 + $3,100 = -$1,260
= Ответ: овердрафт $1,260, в выписке это ДЕБЕТ ($1,260 Дт)`,
        uz: `Tuzatilgan kitobdan boshlab ko'chirmaga orqaga boramiz.
# Boshi
  Tuzatilgan kitob: $1,240 (komissiya allaqachon unda)
# Ko'chirmaga orqaga
  Bank hali qo'shmagan tushumlar: - $5,600
  Bank hali to'lamagan cheklar: + $3,100
  $1,240 - $5,600 + $3,100 = -$1,260
= Javob: $1,260 overdraft, ko'chirmada bu DEBET ($1,260 Dt)`,
      },
      options: ['$1,260 debit', '$1,260 credit', '$1,120 debit', '$1,120 credit'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q308',
      kitRef: 308,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $4,150 due. The buyer\'s ledger shows only $260. The differences found are: a $290 cheque not on the statement; $190 of returns not recorded by the supplier; and a $3,350 contra made by the buyer but not by the supplier. What difference remains?',
      explanation: {
        en: `All three items are things the SUPPLIER has not recorded yet, so adjust the supplier's statement.
# The statement, corrected
  $4,150
  - cheque not on the statement $290
  - returns not recorded by the supplier $190
  - contra not recorded by the supplier $3,350
  = $320
# The ledger
  $260 (nothing to correct on the buyer's side)
= Answer: $320 - $260 = $60 still unexplained`,
        ru: `Все три статьи поставщик ещё НЕ записал, поэтому поправляем его выписку.
# Выписка, исправленная
  $4,150
  - чек, которого нет в выписке, $290
  - возвраты, не записанные поставщиком, $190
  - взаимозачёт, не записанный поставщиком, $3,350
  = $320
# Книга
  $260 (у покупателя исправлять нечего)
= Ответ: $320 - $260 = $60 остаются необъяснёнными`,
        uz: `Uchala moddani YETKAZIB BERUVCHI hali yozmagan, shuning uchun uning ko'chirmasini tuzatamiz.
# Tuzatilgan ko'chirma
  $4,150
  - ko'chirmada yo'q chek $290
  - yetkazib beruvchi yozmagan qaytarishlar $190
  - yetkazib beruvchi yozmagan o'zaro hisob $3,350
  = $320
# Kitob
  $260 (xaridor tomonida tuzatish yo'q)
= Javob: $320 - $260 = $60 tushuntirilmagan qoladi`,
      },
      options: ['$60', '$320', '$640', '$7,720'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q309',
      kitRef: 309,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $15,180 outstanding. The buyer\'s records show $15,360. What could explain the difference?',
      explanation: {
        en: `The buyer thinks it owes $180 MORE than the supplier says. What would lower the supplier's figure without changing the buyer's?
- The supplier allowed a $180 discount the buyer has not recorded: the supplier's figure is lower. YES.
- The buyer paid $180 the supplier has not recorded: the supplier's figure would be HIGHER. No.
- The buyer returned $180 the supplier has not recorded: also HIGHER. No.
- A $180 invoice the buyer has not received: also HIGHER. No.
= Answer: the supplier allowed a $180 settlement discount that the buyer has not yet recorded`,
        ru: `Покупатель считает, что должен на $180 БОЛЬШЕ, чем говорит поставщик. Что уменьшило бы цифру поставщика, не меняя цифру покупателя?
- Поставщик дал скидку $180, которую покупатель не записал: цифра поставщика ниже. ДА.
- Покупатель заплатил $180, а поставщик не записал: цифра поставщика была бы ВЫШЕ. Нет.
- Покупатель вернул товар на $180, поставщик не записал: тоже ВЫШЕ. Нет.
- Счёт на $180, который покупатель не получил: тоже ВЫШЕ. Нет.
= Ответ: поставщик дал скидку $180, которую покупатель ещё не записал`,
        uz: `Xaridor yetkazib beruvchi aytganidan $180 KO'P qarz deb hisoblaydi. Xaridor sonini o'zgartirmay, yetkazib beruvchi sonini nima kamaytiradi?
- Yetkazib beruvchi xaridor yozmagan $180 chegirma bergan: yetkazib beruvchi soni past. HA.
- Xaridor $180 to'lagan, yetkazib beruvchi yozmagan: yetkazib beruvchi soni YUQORI bo'lardi. Yo'q.
- Xaridor $180 lik tovar qaytargan, yetkazib beruvchi yozmagan: bu ham YUQORI. Yo'q.
- Xaridor olmagan $180 lik hisob-faktura: bu ham YUQORI. Yo'q.
= Javob: yetkazib beruvchi xaridor hali yozmagan $180 chegirma bergan`,
      },
      options: [
        'The supplier allowed a $180 settlement discount that the buyer has not yet recorded',
        'The buyer paid $180 that the supplier has not yet recorded',
        'The buyer returned $180 of goods that the supplier has not yet recorded',
        'The supplier sent a $180 invoice that the buyer has not yet received',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch13-q310',
      kitRef: 310,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $1,480 due. The buyer\'s ledger shows a credit balance of $290. The supplier has disallowed a $90 cash discount for late payment, has not yet allowed for $300 of goods returned, and has not yet received $860 of cash in transit. What is the unreconciled difference?',
      explanation: {
        en: `Sort each item by WHO has not recorded it.
# The buyer must change its ledger
  The supplier refused the $90 discount, so the buyer owes more: $290 + $90 = $380
# The supplier has not recorded these (adjust the statement)
  Returns $300 and cash in transit $860
  $1,480 - $300 - $860 = $320
= Answer: $380 - $320 = $60 still unexplained`,
        ru: `Разберите каждую статью по тому, КТО её не записал.
# Покупатель меняет книгу
  Поставщик отказал в скидке $90, покупатель должен больше: $290 + $90 = $380
# Поставщик не записал (поправить выписку)
  Возвраты $300 и деньги в пути $860
  $1,480 - $300 - $860 = $320
= Ответ: $380 - $320 = $60 необъяснённой разницы`,
        uz: `Har bir moddani uni KIM yozmaganiga qarab ajrating.
# Xaridor kitobini o'zgartiradi
  Yetkazib beruvchi $90 chegirmani rad etgan, xaridor ko'proq qarz: $290 + $90 = $380
# Yetkazib beruvchi yozmagan (ko'chirmani tuzatish)
  Qaytarishlar $300 va yo'ldagi pul $860
  $1,480 - $300 - $860 = $320
= Javob: $380 - $320 = $60 tushuntirilmagan farq`,
      },
      options: ['$60', '$100', '$470', '$620'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q311',
      kitRef: 311,
      topicId: 'chapter-13',
      type: 'single',
      text: 'Who issues a statement of account, and why?',
      explanation: {
        en: `A statement of account reminds CREDIT customers how much they owe.
- To cash customers: they already paid, they owe nothing.
- To credit customers, showing what they owe: correct.
- To its own suppliers: a business does not send statements to people it owes; it receives them.
- To customers and suppliers: wrong for the same reason.
= Answer: a business, to its credit customers, to show how much they owe`,
        ru: `Выписка по счёту напоминает покупателям В КРЕДИТ, сколько они должны.
- Покупателям за наличные: они уже заплатили, ничего не должны.
- Покупателям в кредит, с их долгом: верно.
- Своим поставщикам: бизнес не шлёт выписки тем, кому должен; он их получает.
- Покупателям и поставщикам: неверно по той же причине.
= Ответ: бизнес — своим покупателям в кредит, чтобы показать их долг`,
        uz: `Hisob ko'chirmasi NASIYA mijozlarga qancha qarzligini eslatadi.
- Naqd mijozlarga: ular to'lagan, qarzi yo'q.
- Nasiya mijozlarga, qarzini ko'rsatib: to'g'ri.
- O'z yetkazib beruvchilariga: biznes qarzi bor kishilarga ko'chirma yubormaydi, balki oladi.
- Mijoz va yetkazib beruvchilarga: xuddi shu sabab bilan noto'g'ri.
= Javob: biznes nasiya mijozlariga ularning qarzini ko'rsatish uchun yuboradi`,
      },
      options: [
        'A business, to its cash customers, to show what they bought last month',
        'A business, to its credit customers, to show how much they owe',
        'A business, to suppliers it owes money to, to show the amount outstanding',
        'A business, to all its credit customers and suppliers, to show amounts owed or due',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch13-q312',
      kitRef: 312,
      topicId: 'chapter-13',
      type: 'single',
      text: 'Which statement about a supplier\'s statement of account is true?',
      explanation: {
        en: `The two records often differ, but only for reasons that can be found: goods or cash in transit, discounts, returns.
- Can be reconciled once those items are identified: TRUE.
- Always agrees: too strong.
- Never agrees: too strong.
- Always higher: not necessarily.
= Answer: it can be agreed or reconciled with the customer's ledger once goods in transit, cash in transit, discounts or returns are identified`,
        ru: `Две записи часто различаются, но по причинам, которые можно найти: товар или деньги в пути, скидки, возвраты.
- Можно сверить, когда эти статьи найдены: ВЕРНО.
- Всегда совпадает: слишком сильно.
- Никогда не совпадает: слишком сильно.
- Всегда больше: не обязательно.
= Ответ: её можно сверить с книгой покупателя, когда найдены товар и деньги в пути, скидки и возвраты`,
        uz: `Ikki yozuv ko'pincha farq qiladi, lekin topsa bo'ladigan sabablar bilan: yo'ldagi tovar yoki pul, chegirmalar, qaytarishlar.
- Bu moddalar topilgach solishtirish mumkin: TO'G'RI.
- Doim mos keladi: juda kuchli.
- Hech qachon mos kelmaydi: juda kuchli.
- Doim katta: shart emas.
= Javob: yo'ldagi tovar, yo'ldagi pul, chegirmalar yoki qaytarishlar aniqlangach, uni xaridor kitobi bilan solishtirish mumkin`,
      },
      options: [
        'It can be agreed or reconciled with the customer\'s ledger once goods in transit, cash in transit, discounts or returns are identified',
        'Its balance will always agree with the customer\'s ledger',
        'Its balance will never agree with the customer\'s ledger',
        'Its balance will always be higher than the customer\'s ledger',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch13-q313',
      kitRef: 313,
      topicId: 'chapter-13',
      type: 'single',
      text: 'What would be identified by matching a supplier statement against the transactions of the month?',
      explanation: {
        en: `A statement is a LIST of invoices, credit notes and payments. What can you spot just by comparing two lists?
- Wrong trade discounts: the statement shows totals, not the workings.
- Duplicated invoices: the same invoice appearing twice is easy to see. YES.
- Goods charged but not delivered: you need your goods received notes for that.
- Calculation errors on invoices: the statement does not show the calculations.
= Answer: duplicated invoices`,
        ru: `Выписка — это СПИСОК счетов, кредит-нот и платежей. Что видно, просто сравнив два списка?
- Неверные торговые скидки: в выписке итоги, а не расчёты.
- Задвоенные счета: один и тот же счёт дважды легко заметить. ДА.
- Оплачен, но не поставлен товар: для этого нужны акты приёмки.
- Ошибки в расчётах счетов: в выписке расчётов нет.
= Ответ: задвоенные счета`,
        uz: `Ko'chirma — hisob-fakturalar, kredit-notalar va to'lovlar RO'YXATI. Ikki ro'yxatni solishtirib nimani ko'rish mumkin?
- Noto'g'ri savdo chegirmalari: ko'chirmada hisob-kitob emas, jamlar bor.
- Takrorlangan hisob-fakturalar: bir hisob-faktura ikki marta ko'rinadi. HA.
- Hisoblangan, lekin yetkazilmagan tovar: buning uchun qabul qilish xatlari kerak.
- Hisob-fakturadagi hisob xatolari: ko'chirmada hisob-kitob yo'q.
= Javob: takrorlangan hisob-fakturalar`,
      },
      options: [
        'Wrong trade discounts',
        'Duplicated invoices',
        'Goods charged for but not delivered',
        'Calculation errors on invoices',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch13-q314',
      kitRef: 314,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $3,040 outstanding at the month end. The buyer\'s account for that supplier shows $3,125. What could explain the difference?',
      explanation: {
        en: `The buyer's figure ($3,125) is $85 HIGHER than the supplier's ($3,040). Something has reduced the debt on the supplier's side only.
- Returns or a payment the supplier has not recorded: would make the SUPPLIER'S figure higher. No.
- A discount the supplier gave but the buyer has not recorded: the supplier's figure is lower. YES.
- An invoice the buyer has not received: would make the supplier's figure higher. No.
= Answer: the supplier allowed a settlement discount of $85 that the buyer has not yet recorded`,
        ru: `Цифра покупателя ($3,125) на $85 БОЛЬШЕ цифры поставщика ($3,040). Что-то уменьшило долг только на стороне поставщика.
- Возвраты или платёж, не записанные поставщиком: сделали бы цифру ПОСТАВЩИКА больше. Нет.
- Скидка, данная поставщиком, но не записанная покупателем: цифра поставщика ниже. ДА.
- Счёт, который покупатель не получил: сделал бы цифру поставщика больше. Нет.
= Ответ: поставщик дал скидку $85, которую покупатель ещё не записал`,
        uz: `Xaridor soni ($3,125) yetkazib beruvchinikidan ($3,040) $85 KO'P. Nimadir qarzni faqat yetkazib beruvchi tomonida kamaytirgan.
- Yetkazib beruvchi yozmagan qaytarish yoki to'lov: YETKAZIB BERUVCHI sonini oshirardi. Yo'q.
- Yetkazib beruvchi bergan, xaridor yozmagan chegirma: yetkazib beruvchi soni past. HA.
- Xaridor olmagan hisob-faktura: yetkazib beruvchi sonini oshirardi. Yo'q.
= Javob: yetkazib beruvchi xaridor hali yozmagan $85 chegirma bergan`,
      },
      options: [
        'The buyer returned $85 of goods that the supplier has not yet recorded',
        'The buyer paid $85 that the supplier has not yet received',
        'The supplier allowed a settlement discount of $85 that the buyer has not yet recorded',
        'The supplier issued an $85 invoice that the buyer has not yet received',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch13-q315',
      kitRef: 315,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $3,720 due at 30 April. An automated payment of $740 is not on the statement, and the buyer has not recorded a $310 invoice dated 29 April. What is the buyer\'s ledger balance for this supplier at 30 April?',
      explanation: {
        en: `Start from the statement and ask who has not recorded each item. The question asks for the buyer's ledger AS IT STANDS.
# The $740 payment
  The buyer recorded it, the supplier has not. The buyer's ledger is $740 lower
# The $310 invoice
  The supplier recorded it, the buyer has not. The buyer's ledger is $310 lower
= Answer: $3,720 - $740 - $310 = $2,670`,
        ru: `Начнём с выписки и спросим, кто не записал каждую статью. Нужна книга покупателя В ТЕКУЩЕМ виде.
# Платёж $740
  Покупатель записал, поставщик нет. Книга покупателя на $740 меньше
# Счёт $310
  Поставщик записал, покупатель нет. Книга покупателя на $310 меньше
= Ответ: $3,720 - $740 - $310 = $2,670`,
        uz: `Ko'chirmadan boshlab, har bir moddani kim yozmaganini so'raymiz. Xaridor kitobi HOZIRGI holatida so'ralmoqda.
# $740 to'lov
  Xaridor yozgan, yetkazib beruvchi yo'q. Xaridor kitobi $740 kam
# $310 hisob-faktura
  Yetkazib beruvchi yozgan, xaridor yo'q. Xaridor kitobi $310 kam
= Javob: $3,720 - $740 - $310 = $2,670`,
      },
      options: ['$4,770', '$4,150', '$2,670', '$3,290'],
      correctIndex: 2,
    },
    {
      id: 'ch13-q316',
      kitRef: 316,
      topicId: 'chapter-13',
      type: 'single',
      text: 'After reconciling a statement from Sadaf Traders, a business finds that an invoice from Bahor Traders was allocated to Sadaf Traders\' payable ledger account. What entries correct this?',
      explanation: {
        en: `Total payables are right: the invoice is real and is owed. Only the NAME on the individual account is wrong.
# The fix
  Take the invoice off Sadaf Traders' account: Dr Sadaf Traders
  Put it on Bahor Traders' account: Cr Bahor Traders
= Answer: Dr Payable ledger Sadaf Traders, Cr Payable ledger Bahor Traders
No general ledger entry is needed, because the payables total does not change.`,
        ru: `Общие кредиторы верны: счёт реальный и долг есть. Неверно лишь ИМЯ на личном счёте.
# Исправление
  Убираем счёт с Sadaf Traders: Дт Sadaf Traders
  Ставим на Bahor Traders: Кт Bahor Traders
= Ответ: Дт личный счёт Sadaf Traders, Кт личный счёт Bahor Traders
Проводка в главной книге не нужна, общая сумма кредиторов не меняется.`,
        uz: `Jami kreditorlar to'g'ri: hisob-faktura haqiqiy va qarz bor. Faqat shaxsiy hisobdagi NOM noto'g'ri.
# Tuzatish
  Hisob-fakturani Sadaf Traders hisobidan olamiz: Dt Sadaf Traders
  Bahor Traders hisobiga qo'yamiz: Kt Bahor Traders
= Javob: Dt Sadaf Traders shaxsiy hisobi, Kt Bahor Traders shaxsiy hisobi
Bosh kitobda yozuv kerak emas, jami kreditorlar o'zgarmaydi.`,
      },
      options: [
        'Dr Payable ledger Sadaf Traders, Cr Payable ledger Bahor Traders',
        'Dr Payable ledger Bahor Traders, Cr Payable ledger Sadaf Traders',
        'Dr Payables, Cr Purchases',
        'Dr Purchases, Cr Payables',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch13-q317',
      kitRef: 317,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement dated 30 November shows $4,560 due. A contra of $830 agreed with the supplier is not on the statement, and the buyer has not recorded an invoice of $590 dated 29 November. Once everything is recorded, what is the updated ledger balance?',
      explanation: {
        en: `"Once everything is recorded" means after the buyer has recorded its missing invoice. Then the only difference left is what the supplier has not recorded.
# What the supplier has not recorded
  The $830 contra
# The updated ledger
  $4,560 - $830 = $3,730
= Answer: $3,730`,
        ru: `«Когда всё записано» — после того, как покупатель записал свой недостающий счёт. Тогда остаётся только то, что не записал поставщик.
# Что не записал поставщик
  Взаимозачёт $830
# Обновлённая книга
  $4,560 - $830 = $3,730
= Ответ: $3,730`,
        uz: `«Hammasi yozilgach» — xaridor yetishmagan hisob-fakturasini yozgandan keyin. Unda faqat yetkazib beruvchi yozmagani qoladi.
# Yetkazib beruvchi nima yozmagan
  $830 o'zaro hisob
# Yangilangan kitob
  $4,560 - $830 = $3,730
= Javob: $3,730`,
      },
      options: ['$5,980', '$4,320', '$3,140', '$3,730'],
      correctIndex: 3,
    },
    {
      id: 'ch13-q318',
      kitRef: 318,
      topicId: 'chapter-13',
      type: 'single',
      text: 'At 31 January a buyer\'s ledger shows $6,480 for a supplier. The buyer recorded a $410 payment and a $30 discount received, neither of which is on the statement. It also returned goods costing $115, which are not on the statement. What is the balance on the statement?',
      explanation: {
        en: `All three items reduced the debt in the BUYER'S records only. The supplier has not recorded any of them, so its figure is higher by all three.
# The statement
  $6,480 + payment $410 + discount $30 + returns $115 = $7,035
= Answer: $7,035`,
        ru: `Все три статьи уменьшили долг только в записях ПОКУПАТЕЛЯ. Поставщик ни одну не записал, его цифра больше на все три.
# Выписка
  $6,480 + платёж $410 + скидка $30 + возвраты $115 = $7,035
= Ответ: $7,035`,
        uz: `Uchala modda qarzni faqat XARIDOR yozuvlarida kamaytirgan. Yetkazib beruvchi hech birini yozmagan, uning soni uchalasiga ko'p.
# Ko'chirma
  $6,480 + to'lov $410 + chegirma $30 + qaytarishlar $115 = $7,035
= Javob: $7,035`,
      },
      options: ['$7,005', '$7,035', '$6,890', '$5,925'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q319',
      kitRef: 319,
      topicId: 'chapter-13',
      type: 'single',
      text: 'After reconciling a supplier statement, a business finds that a $26 discount received that it recorded was not allowed by the supplier. What general ledger entry corrects this?',
      explanation: {
        en: `The buyer took a $26 discount that the supplier did not allow. So the buyer owes $26 more.
# The entry
  Reverse the discount: Dr Discount received $26
  Increase the debt: Cr Payables $26
= Answer: Dr Discount received $26, Cr Payables $26
The general ledger uses the payables control account; the supplier's individual memorandum account is updated alongside.`,
        ru: `Покупатель взял скидку $26, которую поставщик не дал. Значит, покупатель должен на $26 больше.
# Проводка
  Отменяем скидку: Дт Полученные скидки $26
  Увеличиваем долг: Кт Кредиторы $26
= Ответ: Дт Полученные скидки $26, Кт Кредиторы $26
В главной книге — общий счёт кредиторов; личный счёт поставщика обновляют параллельно.`,
        uz: `Xaridor yetkazib beruvchi bermagan $26 chegirmani olgan. Demak xaridor $26 ko'proq qarz.
# Yozuv
  Chegirmani bekor qilamiz: Dt Olingan chegirmalar $26
  Qarzni oshiramiz: Kt Kreditorlar $26
= Javob: Dt Olingan chegirmalar $26, Kt Kreditorlar $26
Bosh kitobda umumiy kreditorlar hisobi; yetkazib beruvchining shaxsiy hisobi ham yangilanadi.`,
      },
      options: [
        'Dr Payables $26, Cr Discount received $26',
        'Dr Discount received $26, Cr Payable ledger of the supplier $26',
        'Dr Discount received $26, Cr Payables $26',
        'Dr Payable ledger of the supplier $26, Cr Payables $26',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch13-q320',
      kitRef: 320,
      topicId: 'chapter-13',
      type: 'single',
      text: 'At 31 July a buyer\'s ledger shows $8,140 for a supplier. It has not recorded a purchase invoice of $470, and an automated payment of $1,620 on 30 July is not on the statement. What is the balance on the statement?',
      explanation: {
        en: `Start from the buyer's ledger and ask how the supplier's figure differs.
# The $470 invoice
  On the statement, not in the ledger: the statement is $470 higher
# The $1,620 payment
  In the ledger, not on the statement: the statement is $1,620 higher
= Answer: $8,140 + $470 + $1,620 = $10,230`,
        ru: `Начнём с книги покупателя и спросим, чем отличается цифра поставщика.
# Счёт $470
  В выписке есть, в книге нет: выписка на $470 больше
# Платёж $1,620
  В книге есть, в выписке нет: выписка на $1,620 больше
= Ответ: $8,140 + $470 + $1,620 = $10,230`,
        uz: `Xaridor kitobidan boshlab, yetkazib beruvchi soni qanday farq qilishini so'raymiz.
# $470 hisob-faktura
  Ko'chirmada bor, kitobda yo'q: ko'chirma $470 ko'p
# $1,620 to'lov
  Kitobda bor, ko'chirmada yo'q: ko'chirma $1,620 ko'p
= Javob: $8,140 + $470 + $1,620 = $10,230`,
      },
      options: ['$9,760', '$6,050', '$10,230', '$6,990'],
      correctIndex: 2,
    },
    {
      id: 'ch13-q321',
      kitRef: 321,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement at 30 April shows $5,120 due. A contra of $870 is not on the statement, and the buyer has not recorded a $610 invoice from this supplier. What is the balance on the buyer\'s ledger at 30 April, as it stands?',
      explanation: {
        en: `The question asks for the buyer's ledger as it stands, BEFORE recording the missing invoice.
# The $870 contra
  The buyer has recorded it, the supplier has not: the ledger is $870 lower
# The $610 invoice
  The supplier has recorded it, the buyer has not: the ledger is $610 lower
= Answer: $5,120 - $870 - $610 = $3,640`,
        ru: `Нужна книга покупателя в текущем виде, ДО записи недостающего счёта.
# Взаимозачёт $870
  Покупатель записал, поставщик нет: книга на $870 меньше
# Счёт $610
  Поставщик записал, покупатель нет: книга на $610 меньше
= Ответ: $5,120 - $870 - $610 = $3,640`,
        uz: `Xaridor kitobi hozirgi holatida, yetishmagan hisob-faktura yozilishidan OLDIN so'ralmoqda.
# $870 o'zaro hisob
  Xaridor yozgan, yetkazib beruvchi yo'q: kitob $870 kam
# $610 hisob-faktura
  Yetkazib beruvchi yozgan, xaridor yo'q: kitob $610 kam
= Javob: $5,120 - $870 - $610 = $3,640`,
      },
      options: ['$5,380', '$6,600', '$4,250', '$3,640'],
      correctIndex: 3,
    },
    {
      id: 'ch13-q322',
      kitRef: 322,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A buyer\'s ledger shows $4,720 for a supplier. The buyer recorded a $24 discount with a payment, but the supplier recorded only the payment, because it arrived late and no discount is allowed. The buyer also returned goods costing $560, which are not on the statement. What is the balance on the statement?',
      explanation: {
        en: `The supplier has not reduced the debt for either item, so its figure is higher than the buyer's by both.
# The $24 discount
  The buyer deducted it; the supplier refused it: + $24
# The $560 returns
  The buyer recorded them; the supplier has not: + $560
= Answer: $4,720 + $24 + $560 = $5,304`,
        ru: `Поставщик не уменьшил долг ни по одной статье, его цифра больше на обе.
# Скидка $24
  Покупатель вычел, поставщик отказал: + $24
# Возвраты $560
  Покупатель записал, поставщик нет: + $560
= Ответ: $4,720 + $24 + $560 = $5,304`,
        uz: `Yetkazib beruvchi hech bir modda bo'yicha qarzni kamaytirmagan, uning soni ikkalasiga ko'p.
# $24 chegirma
  Xaridor ayirgan, yetkazib beruvchi rad etgan: + $24
# $560 qaytarishlar
  Xaridor yozgan, yetkazib beruvchi yo'q: + $560
= Javob: $4,720 + $24 + $560 = $5,304`,
      },
      options: ['$5,304', '$5,256', '$4,184', '$4,136'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q323',
      kitRef: 323,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement dated 30 September shows $7,940 due. A contra of $2,690 is not on the statement, and the buyer has not recorded a credit note of $900 dated 29 September. What is the buyer\'s ledger balance as it stands?',
      explanation: {
        en: `Work from the statement to the buyer's ledger as it stands.
# The $2,690 contra
  The buyer has recorded it, the supplier has not: the buyer's figure is lower: $7,940 - $2,690 = $5,250
# The $900 credit note
  The supplier has recorded it (so its figure is lower), but the buyer has not yet deducted it: the buyer's figure is $900 HIGHER: $5,250 + $900 = $6,150
= Answer: $6,150`,
        ru: `Идём от выписки к книге покупателя в текущем виде.
# Взаимозачёт $2,690
  Покупатель записал, поставщик нет: цифра покупателя меньше: $7,940 - $2,690 = $5,250
# Кредит-нота $900
  Поставщик записал (его цифра меньше), а покупатель ещё не вычел: цифра покупателя на $900 БОЛЬШЕ: $5,250 + $900 = $6,150
= Ответ: $6,150`,
        uz: `Ko'chirmadan xaridor kitobining hozirgi holatiga boramiz.
# $2,690 o'zaro hisob
  Xaridor yozgan, yetkazib beruvchi yo'q: xaridor soni kam: $7,940 - $2,690 = $5,250
# $900 kredit-nota
  Yetkazib beruvchi yozgan (soni kam), xaridor hali ayirmagan: xaridor soni $900 KO'P: $5,250 + $900 = $6,150
= Javob: $6,150`,
      },
      options: ['$7,040', '$5,250', '$6,150', '$4,350'],
      correctIndex: 2,
    },
    {
      id: 'ch13-q324',
      kitRef: 324,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows $5,040 due. The buyer has not recorded a $620 invoice or a $290 credit note from this supplier. A bank payment of $1,460 is not on the statement. Once everything is recorded, what is the updated ledger balance?',
      explanation: {
        en: `"Once everything is recorded": the buyer will record the invoice and the credit note. After that, the only difference left is what the supplier has not recorded.
# What the supplier has not recorded
  The $1,460 bank payment
# The updated ledger
  $5,040 - $1,460 = $3,580
= Answer: $3,580`,
        ru: `«Когда всё записано»: покупатель запишет счёт и кредит-ноту. После этого остаётся только то, что не записал поставщик.
# Что не записал поставщик
  Банковский платёж $1,460
# Обновлённая книга
  $5,040 - $1,460 = $3,580
= Ответ: $3,580`,
        uz: `«Hammasi yozilgach»: xaridor hisob-faktura va kredit-notani yozadi. Shundan keyin faqat yetkazib beruvchi yozmagani qoladi.
# Yetkazib beruvchi nima yozmagan
  $1,460 bank to'lovi
# Yangilangan kitob
  $5,040 - $1,460 = $3,580
= Javob: $3,580`,
      },
      options: ['$3,250', '$3,580', '$3,910', '$2,700'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q325',
      kitRef: 325,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A buyer\'s ledger shows $1,340 for a supplier. It has not recorded a $260 invoice or a $98 credit note. It agreed a contra of $450, which is not on the statement. What is the balance on the statement?',
      explanation: {
        en: `First bring the buyer's ledger up to date, then add what the supplier has not recorded.
# Step 1: Buyer records its missing items
  $1,340 + invoice $260 - credit note $98 = $1,502
# Step 2: The supplier has not recorded the contra
  Its figure is higher by $450: $1,502 + $450 = $1,952
= Answer: $1,952`,
        ru: `Сначала обновим книгу покупателя, затем добавим то, что не записал поставщик.
# Шаг 1: Покупатель записывает недостающее
  $1,340 + счёт $260 - кредит-нота $98 = $1,502
# Шаг 2: Поставщик не записал взаимозачёт
  Его цифра больше на $450: $1,502 + $450 = $1,952
= Ответ: $1,952`,
        uz: `Avval xaridor kitobini yangilab, keyin yetkazib beruvchi yozmaganini qo'shamiz.
# 1-qadam: Xaridor yetishmaganlarni yozadi
  $1,340 + hisob-faktura $260 - kredit-nota $98 = $1,502
# 2-qadam: Yetkazib beruvchi o'zaro hisobni yozmagan
  Uning soni $450 ko'p: $1,502 + $450 = $1,952
= Javob: $1,952`,
      },
      options: ['$1,052', '$1,502', '$1,628', '$1,952'],
      correctIndex: 3,
    },
    {
      id: 'ch13-q326',
      kitRef: 326,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A buyer\'s ledger shows $4,960 for a supplier. It has not recorded a $20 credit note. An invoice of $910 on the supplier\'s statement relates to another customer. What was the original balance on the statement?',
      explanation: {
        en: `Find the correct balance first, then add back the supplier's mistake.
# Step 1: Correct the buyer's ledger
  $4,960 - credit note $20 = $4,940 (the true amount owed)
# Step 2: The supplier's statement also includes a wrong invoice
  It belongs to another customer, so the statement is $910 too high: $4,940 + $910 = $5,850
= Answer: $5,850`,
        ru: `Сначала найдём верный остаток, затем добавим ошибку поставщика.
# Шаг 1: Исправляем книгу покупателя
  $4,960 - кредит-нота $20 = $4,940 (реальный долг)
# Шаг 2: В выписке поставщика ещё и чужой счёт
  Он другого клиента, выписка завышена на $910: $4,940 + $910 = $5,850
= Ответ: $5,850`,
        uz: `Avval to'g'ri qoldiqni topib, keyin yetkazib beruvchi xatosini qo'shamiz.
# 1-qadam: Xaridor kitobini tuzatamiz
  $4,960 - kredit-nota $20 = $4,940 (haqiqiy qarz)
# 2-qadam: Ko'chirmada boshqa mijozning hisob-fakturasi ham bor
  U boshqa mijozniki, ko'chirma $910 ko'p: $4,940 + $910 = $5,850
= Javob: $5,850`,
      },
      options: ['$4,940', '$5,850', '$4,980', '$4,030'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q327',
      kitRef: 327,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A supplier\'s statement shows a closing balance of $9,020. An automated payment of $2,700 by the buyer is not on the statement. An invoice for $1,540 in the buyer\'s account for this supplier actually relates to another supplier. What was the buyer\'s balance before any correction?',
      explanation: {
        en: `Find the correct balance from the statement, then undo the buyer's mistake.
# Step 1: Correct balance
  The supplier has not recorded the $2,700 payment: $9,020 - $2,700 = $6,320
# Step 2: The buyer's account also holds another supplier's invoice
  So before correction it was $1,540 higher: $6,320 + $1,540 = $7,860
= Answer: $7,860`,
        ru: `Найдём верный остаток по выписке, затем отменим ошибку покупателя.
# Шаг 1: Верный остаток
  Поставщик не записал платёж $2,700: $9,020 - $2,700 = $6,320
# Шаг 2: На счёте покупателя ещё и счёт другого поставщика
  До исправления он был на $1,540 больше: $6,320 + $1,540 = $7,860
= Ответ: $7,860`,
        uz: `Ko'chirmadan to'g'ri qoldiqni topib, keyin xaridor xatosini bekor qilamiz.
# 1-qadam: To'g'ri qoldiq
  Yetkazib beruvchi $2,700 to'lovni yozmagan: $9,020 - $2,700 = $6,320
# 2-qadam: Xaridor hisobida boshqa yetkazib beruvchi hisob-fakturasi ham bor
  Tuzatishdan oldin u $1,540 ko'p edi: $6,320 + $1,540 = $7,860
= Javob: $7,860`,
      },
      options: ['$7,860', '$6,320', '$4,780', '$9,020'],
      correctIndex: 0,
    },
    {
      id: 'ch13-q328',
      kitRef: 328,
      topicId: 'chapter-13',
      type: 'single',
      text: 'A payables account shows these debits: contra with receivables $4,210, bank $362,400, discount received $1,480, returns outwards $12,090 and balance c/f $40,220. Credits are balance b/f $39,800 and purchases $380,600. What figure appears within liabilities in the statement of financial position?',
      explanation: {
        en: `The liability at the year end is the closing balance of the payables account.
- $39,800: last year's closing balance (brought forward). No.
- $40,220: this year's closing balance (carried forward). YES.
- $380,600: the purchases for the year. No.
- $420,400: just the total of each side. No.
= Answer: $40,220`,
        ru: `Обязательство на конец года — остаток счёта кредиторов на конец.
- $39,800: остаток прошлого года (b/f). Нет.
- $40,220: остаток этого года (c/f). ДА.
- $380,600: закупки за год. Нет.
- $420,400: просто итог каждой стороны. Нет.
= Ответ: $40,220`,
        uz: `Yil oxiridagi majburiyat — kreditorlar hisobining yakuniy qoldig'i.
- $39,800: o'tgan yil qoldig'i (b/f). Yo'q.
- $40,220: shu yil qoldig'i (c/f). HA.
- $380,600: yil xaridlari. Yo'q.
- $420,400: har bir tomon jami, xolos. Yo'q.
= Javob: $40,220`,
      },
      options: ['$39,800', '$40,220', '$380,600', '$420,400'],
      correctIndex: 1,
    },
    {
      id: 'ch13-q329',
      kitRef: 329,
      topicId: 'chapter-13',
      type: 'single',
      text: 'At 31 August a buyer\'s ledger shows $7,190 for a supplier. It has not recorded a purchase invoice of $570, and an automated payment of $1,710 is not on the statement. What is the closing balance on the statement?',
      explanation: {
        en: `Same pattern as question 320.
# The $570 invoice
  On the statement, not in the ledger: statement $570 higher
# The $1,710 payment
  In the ledger, not on the statement: statement $1,710 higher
= Answer: $7,190 + $570 + $1,710 = $9,470`,
        ru: `Та же схема, что в вопросе 320.
# Счёт $570
  В выписке есть, в книге нет: выписка на $570 больше
# Платёж $1,710
  В книге есть, в выписке нет: выписка на $1,710 больше
= Ответ: $7,190 + $570 + $1,710 = $9,470`,
        uz: `320-savoldagi sxema.
# $570 hisob-faktura
  Ko'chirmada bor, kitobda yo'q: ko'chirma $570 ko'p
# $1,710 to'lov
  Kitobda bor, ko'chirmada yo'q: ko'chirma $1,710 ko'p
= Javob: $7,190 + $570 + $1,710 = $9,470`,
      },
      options: ['$8,900', '$9,470', '$4,910', '$6,050'],
      correctIndex: 1,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
