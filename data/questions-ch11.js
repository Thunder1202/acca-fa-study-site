'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-11';
  const questions = [
    {
      id: 'ch11-q257',
      kitRef: 257,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Rayhon Co both buys goods from and sells goods to Sadaf Co on credit. They agree to contra $1,800 off the balances due to each other. What entries does Rayhon Co make?',
      explanation: {
        en: `A contra lowers BOTH balances: you owe them less, and they owe you less.
# Payables go down
  A liability goes down with a debit: Dr Trade payables $1,800
# Receivables go down
  An asset goes down with a credit: Cr Trade receivables $1,800
= Answer: Dr Trade payables $1,800, Cr Trade receivables $1,800
! Common trap: changing sales or purchases. Those were recorded when the goods moved and stay as they are.`,
        ru: `Взаимозачёт уменьшает ОБА остатка: вы должны им меньше, и они вам меньше.
# Кредиторы уменьшаются
  Обязательство уменьшается дебетом: Дт Торговые кредиторы $1,800
# Дебиторы уменьшаются
  Актив уменьшается кредитом: Кт Торговые дебиторы $1,800
= Ответ: Дт Торговые кредиторы $1,800, Кт Торговые дебиторы $1,800
! Частая ошибка: менять продажи или закупки. Их записали при движении товара, они не меняются.`,
        uz: `O'zaro hisob IKKALA qoldiqni kamaytiradi: siz ularga kamroq, ular sizga kamroq qarz.
# Kreditorlar kamayadi
  Majburiyat debet bilan kamayadi: Dt Savdo kreditorlari $1,800
# Debitorlar kamayadi
  Aktiv kredit bilan kamayadi: Kt Savdo debitorlari $1,800
= Javob: Dt Savdo kreditorlari $1,800, Kt Savdo debitorlari $1,800
! Ko'p uchraydigan xato: sotuv yoki xaridni o'zgartirish. Ular tovar harakatlanganda yozilgan va o'zgarmaydi.`,
      },
      options: [
        'Dr Trade receivables $1,800, Cr Trade payables $1,800',
        'Dr Sales $1,800, Cr Purchases $1,800',
        'Dr Trade payables $1,800, Cr Trade receivables $1,800',
        'Dr Purchases $1,800, Cr Sales $1,800',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch11-q258',
      kitRef: 258,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Yulduz Co agreed with a business it both buys from and sells to, to contra the maximum possible amount. At that date it had a customer balance of $740 and a supplier balance of $610 for that business. What entries does Yulduz Co make?',
      explanation: {
        en: `The largest contra possible is the SMALLER of the two balances.
# Step 1: Compare
  Customer balance $740, supplier balance $610. The smaller is $610.
# Step 2: The entry (a contra is always this way round)
  Dr Trade payables $610, Cr Trade receivables $610
= Answer: Dr Trade payables $610, Cr Trade receivables $610
! Common trap: $740. That would make the supplier account a debit balance of $130.`,
        ru: `Наибольший возможный зачёт — МЕНЬШИЙ из двух остатков.
# Шаг 1: Сравниваем
  Дебитор $740, кредитор $610. Меньший — $610.
# Шаг 2: Проводка (зачёт всегда в эту сторону)
  Дт Торговые кредиторы $610, Кт Торговые дебиторы $610
= Ответ: Дт Торговые кредиторы $610, Кт Торговые дебиторы $610
! Частая ошибка: $740. Тогда счёт поставщика станет дебетовым на $130.`,
        uz: `Eng katta mumkin bo'lgan hisob — ikki qoldiqdan KICHIGI.
# 1-qadam: Solishtiramiz
  Mijoz qoldig'i $740, yetkazib beruvchi $610. Kichigi $610.
# 2-qadam: Yozuv (o'zaro hisob doim shu tomonga)
  Dt Savdo kreditorlari $610, Kt Savdo debitorlari $610
= Javob: Dt Savdo kreditorlari $610, Kt Savdo debitorlari $610
! Ko'p uchraydigan xato: $740. Unda yetkazib beruvchi hisobi $130 debet qoldiq bo'lardi.`,
      },
      options: [
        'Dr Trade payables $610, Cr Trade receivables $610',
        'Dr Trade payables $740, Cr Trade receivables $740',
        'Dr Trade receivables $610, Cr Trade payables $610',
        'Dr Trade receivables $740, Cr Trade payables $740',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch11-q259',
      kitRef: 259,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Bahor Co had a customer balance of $2,940 and a supplier balance of $2,810 for the same business. They agreed a contra that left $800 still due to Bahor Co from that business. What entries does Bahor Co make?',
      explanation: {
        en: `The question says how much should be LEFT owing, so work back from that.
# Step 1: Which balance is left?
  $800 still due TO Bahor Co, so it is the receivable that is left at $800
# Step 2: The contra amount
  $2,940 - $800 = $2,140
# Step 3: Check it is possible
  The supplier balance is $2,810, which is more than $2,140, so the payable stays positive ($670)
# Step 4: The entry
  Dr Trade payables $2,140, Cr Trade receivables $2,140
= Answer: Dr Trade payables $2,140, Cr Trade receivables $2,140`,
        ru: `В вопросе сказано, сколько должно ОСТАТЬСЯ, идём от этого.
# Шаг 1: Какой остаток остаётся?
  $800 ещё должны БАХОР, значит дебиторка остаётся $800
# Шаг 2: Сумма зачёта
  $2,940 - $800 = $2,140
# Шаг 3: Проверим, возможно ли
  Кредиторка $2,810 больше $2,140, остаётся положительной ($670)
# Шаг 4: Проводка
  Дт Торговые кредиторы $2,140, Кт Торговые дебиторы $2,140
= Ответ: Дт Торговые кредиторы $2,140, Кт Торговые дебиторы $2,140`,
        uz: `Savolda qancha QOLISHI kerakligi aytilgan, shundan orqaga boramiz.
# 1-qadam: Qaysi qoldiq qoladi?
  Bahor Co ga hali $800 qarz, demak debitorlik $800 da qoladi
# 2-qadam: Hisob summasi
  $2,940 - $800 = $2,140
# 3-qadam: Mumkinligini tekshiramiz
  Kreditorlik $2,810, bu $2,140 dan ko'p, musbat qoladi ($670)
# 4-qadam: Yozuv
  Dt Savdo kreditorlari $2,140, Kt Savdo debitorlari $2,140
= Javob: Dt Savdo kreditorlari $2,140, Kt Savdo debitorlari $2,140`,
      },
      options: [
        'Dr Trade payables $2,010, Cr Trade receivables $2,010',
        'Dr Trade receivables $2,140, Cr Trade payables $2,140',
        'Dr Trade receivables $2,010, Cr Trade payables $2,010',
        'Dr Trade payables $2,140, Cr Trade receivables $2,140',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch11-q260',
      kitRef: 260,
      topicId: 'chapter-11',
      type: 'single',
      text: 'At 31 May, Nur Co had a customer balance of $2,800 and a supplier balance of $930 for the same business. They agree to contra the maximum possible amount. What entries does Nur Co make?',
      explanation: {
        en: `Maximum contra = the smaller balance.
# Step 1: Compare
  Customer $2,800, supplier $930. The smaller is $930.
# Step 2: The entry
  Dr Payables $930, Cr Receivables $930
= Answer: Dr Payables $930, Cr Receivables $930
After it, Nur Co owes nothing to that business, and the business still owes Nur Co $1,870.`,
        ru: `Максимальный зачёт — меньший остаток.
# Шаг 1: Сравниваем
  Дебитор $2,800, кредитор $930. Меньший — $930.
# Шаг 2: Проводка
  Дт Кредиторы $930, Кт Дебиторы $930
= Ответ: Дт Кредиторы $930, Кт Дебиторы $930
После этого Nur Co ничего не должна этому бизнесу, а он ещё должен Nur Co $1,870.`,
        uz: `Eng ko'p hisob — kichik qoldiq.
# 1-qadam: Solishtiramiz
  Mijoz $2,800, yetkazib beruvchi $930. Kichigi $930.
# 2-qadam: Yozuv
  Dt Kreditorlar $930, Kt Debitorlar $930
= Javob: Dt Kreditorlar $930, Kt Debitorlar $930
Shundan keyin Nur Co u biznesga hech narsa qarz emas, biznes esa Nur Co ga hali $1,870 qarz.`,
      },
      options: [
        'Dr Receivables $930, Cr Payables $930',
        'Dr Payables $930, Cr Receivables $930',
        'Dr Payables $2,800, Cr Receivables $2,800',
        'Dr Receivables $2,800, Cr Payables $2,800',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch11-q261',
      kitRef: 261,
      topicId: 'chapter-11',
      type: 'multi',
      text: 'Which TWO items can appear in the payables account in a general ledger?',
      explanation: {
        en: `The payables account is about SUPPLIERS. Keep only items that change what you owe them.
- Discount allowed: given to customers. Receivables.
- Returns inwards: goods coming back from customers. Receivables.
- Discount received: taken from a supplier, you owe less. PAYABLES.
- Irrecoverable debts: customers not paying. Receivables.
- Returns outwards: goods you send back to a supplier, you owe less. PAYABLES.
= Answer: discount received and returns outwards`,
        ru: `Счёт кредиторов — о ПОСТАВЩИКАХ. Оставьте только то, что меняет ваш долг им.
- Предоставленная скидка: покупателям. Дебиторы.
- Возвраты покупателей: товар от покупателей. Дебиторы.
- Полученная скидка: от поставщика, вы должны меньше. КРЕДИТОРЫ.
- Безнадёжные долги: покупатели не платят. Дебиторы.
- Возвраты поставщикам: вы вернули товар, должны меньше. КРЕДИТОРЫ.
= Ответ: полученная скидка и возвраты поставщикам`,
        uz: `Kreditorlar hisobi YETKAZIB BERUVCHILAR haqida. Faqat ularga qarzingizni o'zgartiradiganlarni qoldiring.
- Berilgan chegirma: mijozlarga. Debitorlar.
- Sotuv qaytarishlari: mijozlardan qaytgan tovar. Debitorlar.
- Olingan chegirma: yetkazib beruvchidan, kamroq qarzsiz. KREDITORLAR.
- Umidsiz qarzlar: to'lamaydigan mijozlar. Debitorlar.
- Xarid qaytarishlari: yetkazib beruvchiga qaytargan tovar, kamroq qarzsiz. KREDITORLAR.
= Javob: olingan chegirma va xarid qaytarishlari`,
      },
      options: [
        'Discount allowed',
        'Returns inwards',
        'Discount received',
        'Irrecoverable debts',
        'Returns outwards',
      ],
      correctIndices: [2, 4],
    },
    {
      id: 'ch11-q262',
      kitRef: 262,
      topicId: 'chapter-11',
      type: 'single',
      text: 'What is the purpose of a supplier statement?',
      explanation: {
        en: `A supplier statement comes FROM the seller, listing what the customer has bought and paid, and what is still due.
- The buyer's record sent to the supplier: wrong direction.
- The seller's record sent to the customer as a request to settle: correct.
- An immediate demand for full payment: too strong, it reminds of the normal amount due.
- A demand to reconcile: the customer may choose to reconcile it, but that is not its purpose.
= Answer: it is the seller's record of transactions, sent to the customer as a request to settle amounts due`,
        ru: `Выписка поставщика идёт ОТ продавца: что покупатель купил, оплатил и сколько ещё должен.
- Запись покупателя, отправленная поставщику: не то направление.
- Запись продавца, отправленная покупателю как просьба оплатить: верно.
- Немедленное требование полной оплаты: слишком сильно, это напоминание об обычном долге.
- Требование сверки: покупатель может сверить, но не в этом цель.
= Ответ: это запись операций продавца, отправленная покупателю как просьба оплатить долг`,
        uz: `Yetkazib beruvchi ko'chirmasi sotuvchiDAN keladi: xaridor nima olgani, nima to'lagani va hali qancha qarzligi.
- Xaridorning yetkazib beruvchiga yuborilgan yozuvi: noto'g'ri yo'nalish.
- Sotuvchining xaridorga to'lov so'rab yuborgan yozuvi: to'g'ri.
- Zudlik bilan to'liq to'lash talabi: juda kuchli, bu oddiy qarz eslatmasi.
- Solishtirish talabi: xaridor solishtirishi mumkin, lekin maqsad bu emas.
= Javob: bu sotuvchining operatsiyalar yozuvi, xaridorga qarzni to'lashni so'rab yuboriladi`,
      },
      options: [
        'It is the buyer\'s record of transactions, sent to the supplier as a request to settle',
        'It is the seller\'s record of transactions, sent to the customer as a request to settle amounts due',
        'It is an immediate demand for full payment',
        'It is a demand that the customer reconciles it and reports any differences',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch11-q263',
      kitRef: 263,
      topicId: 'chapter-11',
      type: 'number',
      text: 'Use the details below for a sole trader for the year ended 30 April 20X5. What was the cost of purchases for the year?',
      explanation: {
        en: `Purchases are the missing figure in the payables account. Use ONLY the payables figures.
# Debit side (what you owe shrinks, plus the closing balance)
  Cash paid $372,000 + discount received $4,200 + contra $3,900 + closing payables $162,000 = $542,100
# Credit side
  Opening payables $145,000 + purchases (?)
# The missing figure
  $542,100 - $145,000 = $397,100
= Answer: $397,100
The receivables figures are only there to distract you.`,
        ru: `Закупки — недостающая цифра в счёте кредиторов. Используйте ТОЛЬКО цифры кредиторов.
# Дебет (долг уменьшается, плюс остаток на конец)
  Оплачено $372,000 + полученная скидка $4,200 + взаимозачёт $3,900 + кредиторы на конец $162,000 = $542,100
# Кредит
  Кредиторы на начало $145,000 + закупки (?)
# Недостающая цифра
  $542,100 - $145,000 = $397,100
= Ответ: $397,100
Цифры дебиторов здесь только для отвлечения.`,
        uz: `Xaridlar — kreditorlar hisobidagi yetishmayotgan son. FAQAT kreditorlar sonlaridan foydalaning.
# Debet (qarz kamayadi, plus yakuniy qoldiq)
  To'langan $372,000 + olingan chegirma $4,200 + o'zaro hisob $3,900 + yakuniy kreditorlar $162,000 = $542,100
# Kredit
  Boshlang'ich kreditorlar $145,000 + xaridlar (?)
# Yetishmayotgan son
  $542,100 - $145,000 = $397,100
= Javob: $397,100
Debitorlar sonlari bu yerda chalg'itish uchun.`,
      },
      correctValue: 397100,
      answerText: '$397,100',
      table: {
        head: ['Item', '$'],
        rows: [
          ['Trade receivables at 1 May 20X4', '210,000'],
          ['Trade payables at 1 May 20X4', '145,000'],
          ['Cash received from customers', '590,000'],
          ['Cash paid to suppliers', '372,000'],
          ['Discount received', '4,200'],
          ['Contra between payables and receivables', '3,900'],
          ['Trade receivables at 30 April 20X5', '250,000'],
          ['Trade payables at 30 April 20X5', '162,000'],
        ],
      },
    },
    {
      id: 'ch11-q264',
      kitRef: 264,
      topicId: 'chapter-11',
      type: 'matrix',
      text: 'For each item, is a provision required under IAS 37?',
      explanation: {
        en: `Apply the provision tests to each item.
- The refund policy: a constructive obligation (customers expect it), refunds are probable, and past data gives an estimate. PROVISION REQUIRED.
- The legal claim: only POSSIBLE, not probable. NO PROVISION. It is a contingent liability, shown in a note.`,
        ru: `Примените условия резерва к каждому случаю.
- Политика возвратов: обязанность из практики (покупатели ожидают), возвраты вероятны, прошлые данные дают оценку. РЕЗЕРВ НУЖЕН.
- Судебный иск: лишь ВОЗМОЖЕН, не вероятен. РЕЗЕРВ НЕ НУЖЕН. Это условное обязательство в примечании.`,
        uz: `Har biriga rezerv shartlarini qo'llang.
- Qaytarish siyosati: amaliyotdan burch (xaridorlar kutadi), qaytarishlar ehtimoli katta, o'tgan ma'lumot baho beradi. REZERV KERAK.
- Sud da'vosi: faqat MUMKIN, ehtimoli katta emas. REZERV KERAK EMAS. Bu izohdagi shartli majburiyat.`,
      },
      columns: ['Provision required', 'Provision not required'],
      rows: [
        {
          text: 'A shop has a well-publicised policy of giving refunds beyond what the law requires, and customers have used it in the past',
          correctIndex: 0,
        },
        {
          text: 'A customer claims that faulty goods damaged their home. Lawyers say the claim will possibly succeed, in which case $12,000 is payable',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch11-q265',
      kitRef: 265,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Which statements about IAS 37 are correct? (1) A contingent asset is disclosed in the notes if an inflow of benefits is probable. (2) No disclosure of a contingent liability is needed if an outflow is remote. (3) A contingent asset is not presented in the financial statements unless an inflow is virtually certain.',
      explanation: {
        en: `Use the two ladders (liabilities and assets).
- (1) Contingent asset, probable: disclose in a note. TRUE.
- (2) Contingent liability, remote: ignore, no note. TRUE.
- (3) Contingent asset: recognised only when virtually certain. TRUE.
= Answer: 1, 2 and 3`,
        ru: `Используйте две «лестницы» (обязательства и активы).
- (1) Условный актив, вероятно: раскрыть в примечании. ВЕРНО.
- (2) Условное обязательство, маловероятно: ничего, без примечания. ВЕРНО.
- (3) Условный актив: признают только при практической несомненности. ВЕРНО.
= Ответ: 1, 2 и 3`,
        uz: `Ikki «zinapoya»dan (majburiyatlar va aktivlar) foydalaning.
- (1) Shartli aktiv, ehtimoli katta: izohda ochiladi. TO'G'RI.
- (2) Shartli majburiyat, juda kam ehtimol: hech narsa, izohsiz. TO'G'RI.
- (3) Shartli aktiv: faqat deyarli aniq bo'lganda tan olinadi. TO'G'RI.
= Javob: 1, 2 va 3`,
      },
      options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
      correctIndex: 3,
    },
    {
      id: 'ch11-q266',
      kitRef: 266,
      topicId: 'chapter-11',
      type: 'single',
      text: 'A company is finalising its accounts. (1) It gives warranties on its products, and about 4% of sales lead to a claim. (2) It has guaranteed the overdraft of another entity, and a liability under the guarantee is assessed as possible. What is the correct treatment?',
      explanation: {
        en: `Test each item.
# (1) Warranties
  A present obligation from past sales, and claims are probable (4% of sales claim). PROVIDE.
# (2) Guarantee of another entity's overdraft
  Paying is only POSSIBLE. A contingent liability: NOTE only.
= Answer: provide for 1; disclose 2 in the notes`,
        ru: `Проверим каждый случай.
# (1) Гарантии
  Существующая обязанность из прошлых продаж, претензии вероятны (4% продаж). РЕЗЕРВ.
# (2) Поручительство по овердрафту другой компании
  Платить лишь ВОЗМОЖНО. Условное обязательство: только ПРИМЕЧАНИЕ.
= Ответ: резерв по 1; раскрыть 2 в примечаниях`,
        uz: `Har birini tekshiramiz.
# (1) Kafolatlar
  O'tgan sotuvlardan mavjud burch, da'volar ehtimoli katta (sotuvning 4%). REZERV.
# (2) Boshqa korxona overdrafti kafilligi
  To'lash faqat MUMKIN. Shartli majburiyat: faqat IZOH.
= Javob: 1 ga rezerv; 2 izohda ochiladi`,
      },
      options: [
        'Provide for 1; disclose 2 in the notes',
        'Disclose 1 in the notes; no action for 2',
        'Provide for both 1 and 2',
        'Disclose both 1 and 2 in the notes',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch11-q267',
      kitRef: 267,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Which statement about IAS 37 is correct?',
      explanation: {
        en: `Check each "always" carefully.
- A contingent asset is always recognised: FALSE. Only when virtually certain.
- A possible contingent liability is always disclosed: TRUE. Possible = a note.
- A contingent asset is always disclosed: FALSE. A possible one is ignored.
- A probable contingent liability is disclosed: FALSE. Probable means a PROVISION, not just a note.
= Answer: a contingent liability must always be disclosed in the notes if it is possible`,
        ru: `Проверьте каждое «всегда».
- Условный актив признают всегда: НЕВЕРНО. Только при практической несомненности.
- Возможное условное обязательство всегда раскрывают: ВЕРНО. Возможно = примечание.
- Условный актив раскрывают всегда: НЕВЕРНО. Возможный игнорируют.
- Вероятное условное обязательство раскрывают: НЕВЕРНО. Вероятно — значит РЕЗЕРВ, а не только примечание.
= Ответ: возможное условное обязательство всегда раскрывают в примечаниях`,
        uz: `Har bir «doim»ni diqqat bilan tekshiring.
- Shartli aktiv doim tan olinadi: NOTO'G'RI. Faqat deyarli aniq bo'lganda.
- Mumkin bo'lgan shartli majburiyat doim ochiladi: TO'G'RI. Mumkin = izoh.
- Shartli aktiv doim ochiladi: NOTO'G'RI. Mumkin bo'lgani e'tiborsiz qoldiriladi.
- Ehtimoli katta shartli majburiyat ochiladi: NOTO'G'RI. Ehtimoli katta — REZERV, faqat izoh emas.
= Javob: mumkin bo'lgan shartli majburiyat doim izohda ochilishi kerak`,
      },
      options: [
        'A contingent asset must always be recognised',
        'A contingent liability must always be disclosed in the notes if it is possible',
        'A contingent asset must always be disclosed in the notes',
        'A contingent liability must always be disclosed in the notes if it is probable',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch11-q268',
      kitRef: 268,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Which statement about IAS 37 is correct?',
      explanation: {
        en: `Check each statement.
- A contingent liability may need neither recognition nor disclosure: TRUE. A REMOTE one is simply ignored.
- A contingent asset must never be recognised: FALSE. When virtually certain it is recognised.
- A contingent liability must always be recognised or disclosed: FALSE, because of the remote case.
- A probable contingent asset is recognised: FALSE. Probable only earns a note.
= Answer: a contingent liability may need neither recognition nor disclosure in some circumstances`,
        ru: `Проверим каждое утверждение.
- Условное обязательство может не требовать ни признания, ни раскрытия: ВЕРНО. МАЛОВЕРОЯТНОЕ просто игнорируют.
- Условный актив никогда не признают: НЕВЕРНО. При практической несомненности признают.
- Условное обязательство всегда признают или раскрывают: НЕВЕРНО из-за маловероятного случая.
- Вероятный условный актив признают: НЕВЕРНО. Вероятный — только примечание.
= Ответ: условное обязательство в некоторых случаях может не требовать ни признания, ни раскрытия`,
        uz: `Har bir fikrni tekshiramiz.
- Shartli majburiyat na tan olishni, na ochishni talab qilmasligi mumkin: TO'G'RI. JUDA KAM ehtimolligi e'tiborsiz qoldiriladi.
- Shartli aktiv hech qachon tan olinmaydi: NOTO'G'RI. Deyarli aniq bo'lsa tan olinadi.
- Shartli majburiyat doim tan olinadi yoki ochiladi: NOTO'G'RI, juda kam ehtimol holati tufayli.
- Ehtimoli katta shartli aktiv tan olinadi: NOTO'G'RI. Ehtimoli katta — faqat izoh.
= Javob: shartli majburiyat ba'zi hollarda na tan olishni, na ochishni talab qilmasligi mumkin`,
      },
      options: [
        'A contingent liability may need neither recognition nor disclosure in some circumstances',
        'A contingent asset must never be recognised',
        'A contingent liability must be either recognised or disclosed',
        'A contingent asset must be recognised if it is probable',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch11-q269',
      kitRef: 269,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Which statements are correct? (1) A provision always falls due within 12 months, whereas a liability may be current or non-current. (2) A provision needs judgement to quantify the amount or date, whereas a liability can normally be calculated precisely. (3) A provision meets the definition of a liability, but with uncertainty about the amount or date.',
      explanation: {
        en: `Check each statement.
- (1) A provision always falls due within 12 months: FALSE. Restoring a site in 5 years is a non-current provision.
- (2) A provision needs judgement, a normal liability is usually exact: TRUE.
- (3) A provision IS a liability, just with uncertain amount or timing: TRUE.
= Answer: 2 and 3`,
        ru: `Проверим каждое утверждение.
- (1) Резерв всегда погашается в течение 12 месяцев: НЕВЕРНО. Восстановление участка через 5 лет — долгосрочный резерв.
- (2) Резерв требует суждения, обычное обязательство обычно точное: ВЕРНО.
- (3) Резерв — ЭТО обязательство, просто с неясной суммой или сроком: ВЕРНО.
= Ответ: 2 и 3`,
        uz: `Har bir fikrni tekshiramiz.
- (1) Rezerv doim 12 oy ichida to'lanadi: NOTO'G'RI. 5 yildan keyin hududni tiklash — uzoq muddatli rezerv.
- (2) Rezerv mulohaza talab qiladi, oddiy majburiyat odatda aniq: TO'G'RI.
- (3) Rezerv — bu majburiyat, faqat summasi yoki muddati noaniq: TO'G'RI.
= Javob: 2 va 3`,
      },
      options: ['1 and 2', '1 and 3', '2 and 3', '1, 2 and 3'],
      correctIndex: 2,
    },
    {
      id: 'ch11-q270',
      kitRef: 270,
      topicId: 'chapter-11',
      type: 'single',
      text: 'A mining company must, under its licence, make good any damage it causes. At the year end, damage already caused will cost $4 million to rectify. Expected future damage at current sites will cost a further $16 million. All sites will operate for at least three more years. How is this reported at the year end?',
      explanation: {
        en: `Only an obligation from an event that has ALREADY happened can be provided for.
# Damage already caused: $4 million
  A past event creates the obligation: PROVIDE
# Damage expected in future: $16 million
  Not happened yet, the company could still change its plans: no obligation, no provision
# Current or non-current?
  The sites operate for at least 3 more years, so the work is more than 12 months away: NON-CURRENT
= Answer: a non-current provision of $4 million`,
        ru: `Резерв можно создать только по обязанности от события, которое УЖЕ произошло.
# Уже причинённый ущерб: $4 миллиона
  Прошлое событие создаёт обязанность: РЕЗЕРВ
# Ожидаемый в будущем ущерб: $16 миллионов
  Ещё не случился, компания может изменить планы: обязанности нет, резерва нет
# Краткосрочный или долгосрочный?
  Участки работают ещё минимум 3 года, работы больше чем через 12 месяцев: ДОЛГОСРОЧНЫЙ
= Ответ: долгосрочный резерв $4 миллиона`,
        uz: `Faqat ALLAQACHON bo'lgan voqeadan kelgan burch uchun rezerv tuzish mumkin.
# Allaqachon yetkazilgan zarar: $4 million
  O'tgan voqea burch yaratadi: REZERV
# Kelajakda kutilgan zarar: $16 million
  Hali bo'lmagan, kompaniya rejasini o'zgartirishi mumkin: burch yo'q, rezerv yo'q
# Qisqa yoki uzoq muddatli?
  Hududlar yana kamida 3 yil ishlaydi, ishlar 12 oydan keyin: UZOQ MUDDATLI
= Javob: $4 million uzoq muddatli rezerv`,
      },
      options: [
        'A current provision of $4 million',
        'A non-current provision of $4 million',
        'A current provision of $20 million',
        'A non-current provision of $20 million',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch11-q271',
      kitRef: 271,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Customers of a cosmetics maker have been harmed by a contaminated product. Lawyers advise that valid claims of $2 million are probable, and that a counter-claim for the same amount against the bottling contractor will probably succeed. How is this reported?',
      explanation: {
        en: `Treat the claim against the company and the counter-claim separately. They are never netted.
# Customers' claims against the company
  Probable: a PROVISION of $2 million
# The company's counter-claim against the contractor
  Probable, but not virtually certain: a NOTE (contingent asset), not an asset
= Answer: a provision of $2 million, with a disclosure note for the contingent asset
! Common trap: "they cancel out, so show nothing". Netting is never allowed.`,
        ru: `Иск к компании и встречный иск учитываются отдельно и никогда не взаимозачитываются.
# Иски покупателей к компании
  Вероятны: РЕЗЕРВ $2 миллиона
# Встречный иск компании к подрядчику
  Вероятен, но не практически несомненен: ПРИМЕЧАНИЕ (условный актив), не актив
= Ответ: резерв $2 миллиона и примечание об условном активе
! Частая ошибка: «они гасят друг друга, ничего не показываем». Зачёт никогда не допускается.`,
        uz: `Kompaniyaga da'vo va qarshi da'vo alohida hisobga olinadi va hech qachon o'zaro hisoblanmaydi.
# Xaridorlarning kompaniyaga da'volari
  Ehtimoli katta: $2 million REZERV
# Kompaniyaning pudratchiga qarshi da'vosi
  Ehtimoli katta, lekin deyarli aniq emas: aktiv emas, IZOH (shartli aktiv)
= Javob: $2 million rezerv va shartli aktiv haqida izoh
! Ko'p uchraydigan xato: «ular bir-birini yopadi, hech narsa ko'rsatmaymiz». O'zaro hisobga hech qachon ruxsat yo'q.`,
      },
      options: [
        'A provision of $2 million only, with no mention of the counter-claim',
        'A provision and an asset of $2 million each in the statement of financial position',
        'Nothing in the statement of financial position, because the two amounts cancel',
        'A provision of $2 million, with a disclosure note for the contingent asset',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch11-q272',
      kitRef: 272,
      topicId: 'chapter-11',
      type: 'single',
      text: 'A manufacturer lets customers return goods within three months. Its provision for returns was $12,000 last year, and this year it should be $15,500. How is this recorded?',
      explanation: {
        en: `Only the change in the provision is recorded, and it goes through profit or loss.
# Step 1: The change
  $15,500 - $12,000 = $3,500 increase
# Step 2: The entry
  A bigger provision is an extra expense: Dr Profit or loss $3,500
  The liability goes up: Cr Provision $3,500
= Answer: Dr Profit or loss $3,500, Cr Provision $3,500
! Provisions never go through other comprehensive income.`,
        ru: `Записывают только изменение резерва, и оно идёт через прибыль или убыток.
# Шаг 1: Изменение
  $15,500 - $12,000 = рост $3,500
# Шаг 2: Проводка
  Больший резерв — дополнительный расход: Дт Прибыль или убыток $3,500
  Обязательство растёт: Кт Резерв $3,500
= Ответ: Дт Прибыль или убыток $3,500, Кт Резерв $3,500
! Резервы никогда не проходят через прочий совокупный доход.`,
        uz: `Faqat rezerv o'zgarishi yoziladi va u foyda yoki zarar orqali o'tadi.
# 1-qadam: O'zgarish
  $15,500 - $12,000 = $3,500 o'sish
# 2-qadam: Yozuv
  Katta rezerv — qo'shimcha xarajat: Dt Foyda yoki zarar $3,500
  Majburiyat oshadi: Kt Rezerv $3,500
= Javob: Dt Foyda yoki zarar $3,500, Kt Rezerv $3,500
! Rezervlar hech qachon boshqa umumlashgan daromad orqali o'tmaydi.`,
      },
      options: [
        'Dr Profit or loss $3,500, Cr Provision $3,500',
        'Dr Other comprehensive income $3,500, Cr Provision $3,500',
        'Dr Provision $3,500, Cr Profit or loss $3,500',
        'Dr Provision $3,500, Cr Other comprehensive income $3,500',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch11-q273',
      kitRef: 273,
      topicId: 'chapter-11',
      type: 'single',
      text: 'Two claims arise before the year end of 30 April. A dismissed employee\'s claim for $40,000 will probably succeed. An employee injured at work claims $90,000, and lawyers say payment is possible but not probable. How are they accounted for?',
      explanation: {
        en: `Treat each claim separately.
# The dismissed employee: $40,000, probable
  PROVISION
# The injured employee: $90,000, possible but not probable
  A contingent liability: NOTE only
= Answer: a provision of $40,000 and a note about the injury claim
! Common trap: adding both into one $130,000 provision.`,
        ru: `Рассмотрим каждый иск отдельно.
# Уволенный сотрудник: $40,000, вероятно
  РЕЗЕРВ
# Травмированный сотрудник: $90,000, возможно, но не вероятно
  Условное обязательство: только ПРИМЕЧАНИЕ
= Ответ: резерв $40,000 и примечание об иске за травму
! Частая ошибка: сложить оба в один резерв $130,000.`,
        uz: `Har bir da'voni alohida ko'ramiz.
# Ishdan bo'shatilgan xodim: $40,000, ehtimoli katta
  REZERV
# Jarohatlangan xodim: $90,000, mumkin, lekin ehtimoli katta emas
  Shartli majburiyat: faqat IZOH
= Javob: $40,000 rezerv va jarohat da'vosi haqida izoh
! Ko'p uchraydigan xato: ikkalasini bitta $130,000 rezervga qo'shish.`,
      },
      options: [
        'A provision of $40,000 only',
        'A provision of $40,000 and a note about the injury claim',
        'A provision of $130,000 only',
        'A provision of $130,000 and a note about the injury claim',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch11-q274',
      kitRef: 274,
      topicId: 'chapter-11',
      type: 'matrix',
      text: 'Under IAS 37, should each situation result in a provision?',
      explanation: {
        en: `Both situations create an obligation, just from different sources.
- Two-year defect repairs: a LEGAL obligation from the sales contract, and claims are probable (3%). YES, a provision.
- Publicised clean-up policy with no law: a CONSTRUCTIVE obligation, because people now expect the company to repair the damage. YES, a provision.`,
        ru: `Оба случая создают обязанность, просто из разных источников.
- Ремонт дефектов в течение двух лет: ПРАВОВАЯ обязанность по договору продажи, претензии вероятны (3%). ДА, резерв.
- Публичная политика восстановления без закона: обязанность ИЗ ПРАКТИКИ, люди ждут, что компания устранит ущерб. ДА, резерв.`,
        uz: `Ikkala holat ham burch yaratadi, faqat turli manbalardan.
- Ikki yillik nuqson ta'miri: sotuv shartnomasidan HUQUQIY burch, da'volar ehtimoli katta (3%). HA, rezerv.
- Qonunsiz e'lon qilingan tiklash siyosati: AMALIYOTDAN burch, odamlar kompaniya zararni tuzatishini kutadi. HA, rezerv.`,
      },
      columns: ['Yes', 'No'],
      rows: [
        {
          text: 'A manufacturer must repair defects arising within two years of sale, and about 3% of sales lead to a claim',
          correctIndex: 0,
        },
        {
          text: 'A mining company in a country with no clean-up law causes environmental damage, and has a widely publicised policy of repairing it',
          correctIndex: 0,
        },
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
