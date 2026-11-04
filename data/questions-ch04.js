'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-04';
  const questions = [
    {
      id: 'ch04-q101',
      kitRef: 101,
      topicId: 'chapter-04',
      type: 'matrix',
      text: 'State whether each statement is true or false.',
      explanation: {
        en: `Check each statement one by one.
- Unequal debits and credits allowed: FALSE. Every transaction must have equal debits and credits, and software will refuse anything else.
- The journal is part of the general ledger: FALSE. It is a separate diary; its entries are posted TO the ledger.
- Equity accounts normally have credit balances: TRUE. CLIC: credits increase capital.
- Payables include irrecoverable debts: FALSE. Irrecoverable debts are customers who will not pay, so they belong to receivables.`,
        ru: `Проверьте утверждения по одному.
- Допускаются неравные дебет и кредит: НЕВЕРНО. В каждой операции дебет равен кредиту, программа иначе не примет.
- Журнал — часть главной книги: НЕВЕРНО. Это отдельный дневник, его записи переносят В главную книгу.
- У счетов капитала обычно кредитовый остаток: ВЕРНО. CLIC: кредит увеличивает капитал.
- В кредиторах есть безнадёжные долги: НЕВЕРНО. Безнадёжные долги — покупатели, которые не заплатят, это дебиторы.`,
        uz: `Fikrlarni birma-bir tekshiring.
- Teng bo'lmagan debet va kredit mumkin: NOTO'G'RI. Har bir operatsiyada debet kreditga teng, dastur boshqasini qabul qilmaydi.
- Jurnal bosh kitobning qismi: NOTO'G'RI. Bu alohida kundalik, yozuvlari bosh kitobGA o'tkaziladi.
- Kapital hisoblarida odatda kredit qoldiq: TO'G'RI. CLIC: kredit kapitalni oshiradi.
- Kreditorlarda umidsiz qarzlar bor: NOTO'G'RI. Umidsiz qarzlar — to'lamaydigan mijozlar, ular debitorlarga tegishli.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'A computerised general ledger will allow unequal debits and credits to be posted for one transaction',
          correctIndex: 1,
        },
        { text: 'The journal is an integral part of the general ledger', correctIndex: 1 },
        { text: 'Equity accounts in the general ledger normally have credit balances', correctIndex: 0 },
        { text: 'The payables account includes entries for irrecoverable debts written off', correctIndex: 1 },
      ],
    },
    {
      id: 'ch04-q102',
      kitRef: 102,
      topicId: 'chapter-04',
      type: 'single',
      text: 'The petty cash balance at 30 November was $40. During November the cashier paid $9.50 for refreshments, $14.50 of staff travel and $20 to the cleaner. What was the float at 1 November?',
      explanation: {
        en: `With the imprest system, cash in the tin + what was spent always equals the float.
# Step 1: What was spent in November
  Refreshments $9.50 + travel $14.50 + cleaner $20 = $44
# Step 2: Add the cash still in the tin
  $40 + $44 = $84
= Answer: the float at 1 November was $84
! Common trap: choosing $44 (only the spending) or $40 (only the cash left).`,
        ru: `При системе имприст деньги в коробке + потраченное всегда равны авансу.
# Шаг 1: Что потрачено в ноябре
  Напитки $9.50 + проезд $14.50 + уборщица $20 = $44
# Шаг 2: Прибавим деньги, оставшиеся в коробке
  $40 + $44 = $84
= Ответ: аванс на 1 ноября был $84
! Частая ошибка: выбрать $44 (только расходы) или $40 (только остаток).`,
        uz: `Imprest tizimida qutidagi pul + sarflangan doim avansga teng.
# 1-qadam: Noyabrda nima sarflangan
  Ichimliklar $9.50 + yo'l $14.50 + farrosh $20 = $44
# 2-qadam: Qutida qolgan pulni qo'shamiz
  $40 + $44 = $84
= Javob: 1 noyabrdagi avans $84
! Ko'p uchraydigan xato: $44 (faqat xarajat) yoki $40 (faqat qoldiq) ni tanlash.`,
      },
      options: ['$40', '$44', '$60', '$84'],
      correctIndex: 3,
    },
    {
      id: 'ch04-q103',
      kitRef: 103,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Use the figures below. What was the value of sales returns in 20X7?',
      explanation: {
        en: `Rebuild the receivables account. The missing figure is the sales returns.
# Debit side (what makes customers owe more)
  Opening receivables $58,210 + revenue $604,500 = $662,710
# Credit side (what makes them owe less)
  Cash received $595,600 + irrecoverable debts written off $1,240 + closing receivables $63,480 = $660,320
# The gap is the returns
  $662,710 - $660,320 = $2,390
= Answer: sales returns $2,390
! Common trap: using the allowance for receivables. It is a separate account and never touches this one.`,
        ru: `Восстановим счёт дебиторов. Недостающая цифра — возвраты покупателей.
# Дебет (что увеличивает долг покупателей)
  Дебиторы на начало $58,210 + выручка $604,500 = $662,710
# Кредит (что уменьшает долг)
  Получено денег $595,600 + списано безнадёжных долгов $1,240 + дебиторы на конец $63,480 = $660,320
# Разница — возвраты
  $662,710 - $660,320 = $2,390
= Ответ: возвраты покупателей $2,390
! Частая ошибка: использовать резерв по дебиторам. Это отдельный счёт, сюда он не входит.`,
        uz: `Debitorlar hisobini tiklaymiz. Yetishmayotgan son — sotuv qaytarishlari.
# Debet (mijoz qarzini oshiradigan)
  Boshlang'ich debitorlar $58,210 + tushum $604,500 = $662,710
# Kredit (qarzni kamaytiradigan)
  Olingan pul $595,600 + hisobdan chiqarilgan umidsiz qarz $1,240 + yakuniy debitorlar $63,480 = $660,320
# Farq — qaytarishlar
  $662,710 - $660,320 = $2,390
= Javob: sotuv qaytarishlari $2,390
! Ko'p uchraydigan xato: debitorlik rezervini ishlatish. Bu alohida hisob, bu yerga kirmaydi.`,
      },
      correctValue: 2390,
      answerText: '$2,390',
      table: {
        head: ['Item', '20X7 $', '20X6 $'],
        rows: [
          ['Receivables at year end', '63,480', '58,210'],
          ['Revenue', '604,500', ''],
          ['Total cash received from customers', '595,600', ''],
          ['Specific allowance for receivables', '1,700', '1,320'],
          ['Irrecoverable debts written off', '1,240', ''],
        ],
      },
    },
    {
      id: 'ch04-q104',
      kitRef: 104,
      topicId: 'chapter-04',
      type: 'single',
      text: 'What could explain a debit balance on the account of an individual credit supplier?',
      explanation: {
        en: `A supplier's account normally has a CREDIT balance: you owe them. A DEBIT balance means they owe YOU, so you must have paid too much.
- A payment not posted: you would show MORE owed, a bigger credit balance.
- A contra not entered: also too much owed.
- An unearned discount: the balance is a little too low, but it does not mean they owe you money.
- Paying an invoice twice: you paid more than you owed, so the supplier now owes you. A debit balance.
= Answer: the business paid an invoice twice by mistake`,
        ru: `На счёте поставщика обычно КРЕДИТОВЫЙ остаток: вы ему должны. ДЕБЕТОВЫЙ остаток значит, что он должен ВАМ, то есть вы переплатили.
- Не записан платёж: долг казался бы БОЛЬШЕ, кредит больше.
- Не записан взаимозачёт: тоже слишком большой долг.
- Незаслуженная скидка: остаток немного занижен, но это не значит, что вам должны.
- Счёт оплачен дважды: вы заплатили больше долга, теперь поставщик должен вам. Дебетовый остаток.
= Ответ: бизнес по ошибке оплатил счёт дважды`,
        uz: `Yetkazib beruvchi hisobida odatda KREDIT qoldiq: siz unga qarzsiz. DEBET qoldiq u SIZGA qarz degani, ya'ni ortiqcha to'lagansiz.
- To'lov yozilmagan: qarz KO'PROQ ko'rinardi, kredit kattaroq.
- O'zaro hisob-kitob yozilmagan: bu ham ortiqcha qarz.
- Asossiz chegirma: qoldiq biroz kam, lekin bu sizga qarz degani emas.
- Hisob ikki marta to'langan: qarzdan ko'p to'lagansiz, endi yetkazib beruvchi sizga qarz. Debet qoldiq.
= Javob: biznes xato bilan hisobni ikki marta to'lagan`,
      },
      options: [
        'A cheque paid to the supplier was not posted to the account',
        'A contra with the customer account was not entered',
        'The business took a settlement discount it was not entitled to',
        'The business paid an invoice twice by mistake',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q105',
      kitRef: 105,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Oybek\'s payables account had a credit balance of $41,200 on 1 October. In October, credit purchases were $85,600 and cash purchases were $3,100. Payments to suppliers, excluding cash purchases and after deducting settlement discounts of $1,500, were $72,300. Purchase returns were $5,200. What is the closing balance on the payables account?',
      explanation: {
        en: `Rebuild the payables account. Cash purchases are paid at once, so they never go through payables.
# Credit side (what you owe grows)
  Opening $41,200 + credit purchases $85,600 = $126,800
# Debit side (what you owe shrinks)
  Payments $72,300 + discounts received $1,500 + purchase returns $5,200 = $79,000
# Closing balance
  $126,800 - $79,000 = $47,800
= Answer: $47,800
! Common trap: adding the $3,100 of cash purchases. They never sat in payables.`,
        ru: `Восстановим счёт кредиторов. Покупки за наличные оплачены сразу, через кредиторов они не проходят.
# Кредит (долг растёт)
  На начало $41,200 + покупки в кредит $85,600 = $126,800
# Дебет (долг уменьшается)
  Платежи $72,300 + полученные скидки $1,500 + возвраты поставщикам $5,200 = $79,000
# Остаток на конец
  $126,800 - $79,000 = $47,800
= Ответ: $47,800
! Частая ошибка: прибавить $3,100 покупок за наличные. Их никогда не было в кредиторах.`,
        uz: `Kreditorlar hisobini tiklaymiz. Naqd xaridlar darhol to'lanadi, kreditorlar orqali o'tmaydi.
# Kredit (qarz oshadi)
  Boshida $41,200 + nasiya xaridlar $85,600 = $126,800
# Debet (qarz kamayadi)
  To'lovlar $72,300 + olingan chegirmalar $1,500 + xarid qaytarishlari $5,200 = $79,000
# Yakuniy qoldiq
  $126,800 - $79,000 = $47,800
= Javob: $47,800
! Ko'p uchraydigan xato: $3,100 naqd xaridni qo'shish. Ular kreditorlarda hech qachon bo'lmagan.`,
      },
      correctValue: 47800,
      answerText: '$47,800',
    },
    {
      id: 'ch04-q106',
      kitRef: 106,
      topicId: 'chapter-04',
      type: 'number',
      text: 'The entries in a receivables account for the first period of a business were: revenue $310,000; bank $279,000; returns $3,200; irrecoverable debts $3,600; returned unpaid cheque $4,100; contra with payables $4,800. What is the closing balance?',
      explanation: {
        en: `Sort each entry: does it make customers owe more (debit) or less (credit)?
# Debit side: customers owe more
  Revenue (credit sales) $310,000
  Returned unpaid cheque $4,100 (the money never really arrived, so they owe it again)
  Total: $314,100
# Credit side: customers owe less
  Bank $279,000 + returns $3,200 + irrecoverable debts $3,600 + contra $4,800 = $290,600
= Answer: closing balance $314,100 - $290,600 = $23,500
! Common trap: putting the returned cheque on the credit side. A bounced cheque puts the debt back.`,
        ru: `Разберите каждую запись: долг покупателей растёт (дебет) или падает (кредит)?
# Дебет: долг растёт
  Выручка (продажи в кредит) $310,000
  Возвращённый неоплаченный чек $4,100 (денег на самом деле нет, долг вернулся)
  Итого: $314,100
# Кредит: долг падает
  Банк $279,000 + возвраты $3,200 + безнадёжные долги $3,600 + взаимозачёт $4,800 = $290,600
= Ответ: остаток на конец $314,100 - $290,600 = $23,500
! Частая ошибка: поставить возвращённый чек в кредит. Неоплаченный чек возвращает долг.`,
        uz: `Har bir yozuvni ajrating: mijoz qarzi oshadimi (debet) yoki kamayadimi (kredit)?
# Debet: qarz oshadi
  Tushum (nasiya sotuv) $310,000
  Qaytgan to'lanmagan chek $4,100 (pul aslida kelmagan, qarz qaytdi)
  Jami: $314,100
# Kredit: qarz kamayadi
  Bank $279,000 + qaytarishlar $3,200 + umidsiz qarzlar $3,600 + o'zaro hisob $4,800 = $290,600
= Javob: yakuniy qoldiq $314,100 - $290,600 = $23,500
! Ko'p uchraydigan xato: qaytgan chekni kreditga qo'yish. Qaytgan chek qarzni qaytaradi.`,
      },
      correctValue: 23500,
      answerText: '$23,500',
    },
    {
      id: 'ch04-q107',
      kitRef: 107,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Malika wrongly paid a supplier $300 twice for goods bought on credit. The supplier then refunded the extra $300. How should Malika record the refund?',
      explanation: {
        en: `Follow the money and the supplier's account.
# What happened
  The second $300 payment was recorded as Dr Payables $300, Cr Bank $300 (wrongly)
  Now the supplier sends the $300 back
# The entry for the refund
  Cash comes in: Dr Bank $300
  Cancel the extra debit on the supplier's account: Cr Payables $300
= Answer: Dr Bank, Cr Payables
! Common trap: crediting revenue or discount received. Getting your own money back is not income.`,
        ru: `Следите за деньгами и счётом поставщика.
# Что произошло
  Второй платёж $300 записали как Дт Кредиторы $300, Кт Банк $300 (ошибочно)
  Теперь поставщик возвращает $300
# Проводка возврата
  Деньги пришли: Дт Банк $300
  Отменяем лишний дебет на счёте поставщика: Кт Кредиторы $300
= Ответ: Дт Банк, Кт Кредиторы
! Частая ошибка: кредитовать выручку или полученные скидки. Возврат своих же денег — не доход.`,
        uz: `Pulni va yetkazib beruvchi hisobini kuzating.
# Nima bo'ldi
  Ikkinchi $300 to'lov Dt Kreditorlar $300, Kt Bank $300 deb yozilgan (xato)
  Endi yetkazib beruvchi $300 ni qaytaradi
# Qaytarish yozuvi
  Pul kirdi: Dt Bank $300
  Yetkazib beruvchi hisobidagi ortiqcha debetni bekor qilamiz: Kt Kreditorlar $300
= Javob: Dt Bank, Kt Kreditorlar
! Ko'p uchraydigan xato: tushum yoki olingan chegirmani kreditlash. O'z pulingizni qaytarib olish daromad emas.`,
      },
      options: [
        'Dr Bank, Cr Discount received',
        'Dr Bank, Cr Revenue',
        'Dr Bank, Cr Payables',
        'Dr Bank, Cr Receivables',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q108',
      kitRef: 108,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Which entries record credit sales of $12,000 on which sales tax is added at 20%?',
      explanation: {
        en: `The $12,000 is the net price, and tax is ADDED on top.
# Step 1: The tax
  $12,000 × 20% = $2,400
# Step 2: What the customer owes (gross)
  $12,000 + $2,400 = $14,400: Dr Receivables $14,400
# Step 3: Split the credit
  Revenue gets the net price: Cr Revenue $12,000
  The tax belongs to the government: Cr Sales tax $2,400
= Answer: Dr Receivables $14,400, Cr Revenue $12,000, Cr Sales tax $2,400`,
        ru: `$12,000 — цена без налога, налог ДОБАВЛЯЕТСЯ сверху.
# Шаг 1: Налог
  $12,000 × 20% = $2,400
# Шаг 2: Что должен покупатель (с налогом)
  $12,000 + $2,400 = $14,400: Дт Дебиторы $14,400
# Шаг 3: Делим кредит
  Выручка — цена без налога: Кт Выручка $12,000
  Налог принадлежит государству: Кт Налог с продаж $2,400
= Ответ: Дт Дебиторы $14,400, Кт Выручка $12,000, Кт Налог с продаж $2,400`,
        uz: `$12,000 — soliqsiz narx, soliq ustiga QO'SHILADI.
# 1-qadam: Soliq
  $12,000 × 20% = $2,400
# 2-qadam: Mijoz qarzi (soliqli)
  $12,000 + $2,400 = $14,400: Dt Debitorlar $14,400
# 3-qadam: Kreditni bo'lamiz
  Tushum — soliqsiz narx: Kt Tushum $12,000
  Soliq davlatniki: Kt Sotuv solig'i $2,400
= Javob: Dt Debitorlar $14,400, Kt Tushum $12,000, Kt Sotuv solig'i $2,400`,
      },
      options: [
        'Dr Receivables $14,400, Cr Revenue $12,000, Cr Sales tax $2,400',
        'Dr Receivables $12,000, Cr Revenue $9,600, Cr Sales tax $2,400',
        'Dr Revenue $12,000, Dr Sales tax $2,400, Cr Suspense $14,400',
        'Dr Revenue $9,600, Dr Sales tax $2,400, Cr Suspense $12,000',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q109',
      kitRef: 109,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A business registered for sales tax buys goods for resale on credit. The invoice total is $1,932, which includes sales tax at 15%. Which entry is correct?',
      explanation: {
        en: `The $1,932 already INCLUDES tax at 15%, so the gross price is 115%.
# Step 1: The tax inside the gross price
  $1,932 × 15/115 = $252
# Step 2: The net cost
  $1,932 - $252 = $1,680
# Step 3: The entries
  Purchases at net cost: Dr Purchases $1,680
  Tax you can claim back: Dr Sales tax $252
  The supplier is owed the gross: Cr Payables $1,932
= Answer: Dr Purchases $1,680, Dr Sales tax $252, Cr Payables $1,932
! Common trap: $1,932 × 15% = $289.80. That would be tax on a price that already includes tax.`,
        ru: `$1,932 уже ВКЛЮЧАЮТ налог 15%, значит цена с налогом — 115%.
# Шаг 1: Налог внутри цены
  $1,932 × 15/115 = $252
# Шаг 2: Стоимость без налога
  $1,932 - $252 = $1,680
# Шаг 3: Проводки
  Закупки без налога: Дт Закупки $1,680
  Налог к возмещению: Дт Налог с продаж $252
  Поставщику должны с налогом: Кт Кредиторы $1,932
= Ответ: Дт Закупки $1,680, Дт Налог с продаж $252, Кт Кредиторы $1,932
! Частая ошибка: $1,932 × 15% = $289.80. Это налог с цены, в которой налог уже есть.`,
        uz: `$1,932 da 15% soliq allaqachon BOR, demak soliqli narx — 115%.
# 1-qadam: Narx ichidagi soliq
  $1,932 × 15/115 = $252
# 2-qadam: Soliqsiz qiymat
  $1,932 - $252 = $1,680
# 3-qadam: Yozuvlar
  Soliqsiz xaridlar: Dt Xaridlar $1,680
  Qaytariladigan soliq: Dt Sotuv solig'i $252
  Yetkazib beruvchiga soliqli qarz: Kt Kreditorlar $1,932
= Javob: Dt Xaridlar $1,680, Dt Sotuv solig'i $252, Kt Kreditorlar $1,932
! Ko'p uchraydigan xato: $1,932 × 15% = $289.80. Bu soliq allaqachon bor narxdan soliq bo'lardi.`,
      },
      options: [
        'Dr Purchases $1,932, Dr Sales tax $289.80, Cr Payables $2,221.80',
        'Dr Purchases $1,642.20, Dr Sales tax $289.80, Cr Payables $1,932',
        'Dr Purchases $1,680, Dr Sales tax $252, Cr Payables $1,932',
        'Dr Purchases $2,221.80, Cr Sales tax $289.80, Cr Payables $1,932',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q110',
      kitRef: 110,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Which statement best describes a purchase invoice?',
      explanation: {
        en: `A purchase invoice is the SUPPLIER asking YOU to pay.
- Issued by the supplier to request payment: correct.
- Sent to a supplier to say you have paid: that is a remittance advice.
- Sent to a supplier to ask for goods: that is a purchase order.
- Issued by the supplier to list recent transactions: that is a supplier statement.
= Answer: the supplier issues it to request payment`,
        ru: `Счёт на покупку — ПОСТАВЩИК просит ВАС заплатить.
- Выставляет поставщик, чтобы получить оплату: верно.
- Отправляется поставщику, что вы заплатили: это извещение об оплате.
- Отправляется поставщику с просьбой о товаре: это заказ на покупку.
- Выставляет поставщик со списком операций: это выписка поставщика.
= Ответ: его выставляет поставщик, чтобы получить оплату`,
        uz: `Xarid hisob-fakturasi — YETKAZIB BERUVCHI SIZDAN to'lovni so'raydi.
- Yetkazib beruvchi to'lov so'rab chiqaradi: to'g'ri.
- To'laganingiz haqida yetkazib beruvchiga yuboriladi: bu to'lov xabarnomasi.
- Tovar so'rab yetkazib beruvchiga yuboriladi: bu xarid buyurtmasi.
- Yetkazib beruvchi operatsiyalar ro'yxatini chiqaradi: bu ko'chirma.
= Javob: uni yetkazib beruvchi to'lov so'rab chiqaradi`,
      },
      options: [
        'The supplier issues it to request payment',
        'It is sent to a supplier to tell them a payment has been made',
        'It is sent to a supplier to ask for goods',
        'The supplier issues it to list recent transactions',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q111',
      kitRef: 111,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Which entries record $6,300 cash received from the disposal of a non-current asset?',
      explanation: {
        en: `Money came in from selling an old asset.
# Step 1: The money
  Cash in: Dr Bank $6,300
# Step 2: Where the credit goes
  Proceeds go to the disposal account, where they are compared with the asset's carrying amount to find the profit or loss on sale
  Cr Non-current asset disposal $6,300
= Answer: Dr Bank, Cr Non-current asset disposal
! Common trap: crediting the asset account itself or depreciation. Those are cleared through the disposal account too, not with the cash.`,
        ru: `Пришли деньги от продажи старого актива.
# Шаг 1: Деньги
  Приход: Дт Банк $6,300
# Шаг 2: Куда кредит
  Выручку записывают на счёт выбытия, где её сравнивают с балансовой стоимостью, чтобы найти прибыль или убыток от продажи
  Кт Выбытие внеоборотных активов $6,300
= Ответ: Дт Банк, Кт Выбытие внеоборотных активов
! Частая ошибка: кредитовать сам счёт актива или амортизацию. Они тоже закрываются через счёт выбытия, но не деньгами.`,
        uz: `Eski aktivni sotishdan pul keldi.
# 1-qadam: Pul
  Kirim: Dt Bank $6,300
# 2-qadam: Kredit qayerga
  Tushum chiqish hisobiga yoziladi, u yerda sotuv foydasi yoki zararini topish uchun balans qiymati bilan solishtiriladi
  Kt Uzoq muddatli aktiv chiqishi $6,300
= Javob: Dt Bank, Kt Uzoq muddatli aktiv chiqishi
! Ko'p uchraydigan xato: aktiv hisobining o'zini yoki amortizatsiyani kreditlash. Ular ham chiqish hisobi orqali yopiladi, lekin pul bilan emas.`,
      },
      options: [
        'Dr Bank, Cr Accumulated depreciation',
        'Dr Bank, Cr Non-current asset disposal',
        'Dr Bank, Cr Non-current asset',
        'Dr Bank, Cr Depreciation expense',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q112',
      kitRef: 112,
      topicId: 'chapter-04',
      type: 'single',
      text: 'What is a ledger account?',
      explanation: {
        en: `A ledger account is one page for ONE item, such as rent or the bank.
- All transactions affecting profit or loss: too narrow, and many accounts are not in profit or loss.
- Every transaction in a period: that would be all accounts together.
- All transactions for one asset, liability, equity, revenue or expense item: correct.
- Transactions first entered in the bank: only describes the bank account.
= Answer: a record of all the transactions for one asset, liability, equity, revenue or expense item`,
        ru: `Счёт главной книги — одна страница для ОДНОЙ статьи, например аренды или банка.
- Все операции, влияющие на прибыль: слишком узко, и многие счета не в прибыли или убытке.
- Все операции за период: это все счета вместе.
- Все операции по одному активу, обязательству, капиталу, доходу или расходу: верно.
- Операции, сначала записанные в банк: описывает только банковский счёт.
= Ответ: запись всех операций по одной статье актива, обязательства, капитала, дохода или расхода`,
        uz: `Hisob — BITTA modda uchun bitta sahifa, masalan ijara yoki bank.
- Foyda yoki zararga ta'sir qiluvchi barcha operatsiyalar: juda tor, ko'p hisoblar foyda yoki zararda emas.
- Davrdagi barcha operatsiyalar: bu barcha hisoblar birga.
- Bitta aktiv, majburiyat, kapital, daromad yoki xarajat bo'yicha barcha operatsiyalar: to'g'ri.
- Avval bankka yozilgan operatsiyalar: faqat bank hisobini tasvirlaydi.
= Javob: bitta aktiv, majburiyat, kapital, daromad yoki xarajat moddasi bo'yicha barcha operatsiyalar yozuvi`,
      },
      options: [
        'A record of all the transactions that affect profit or loss',
        'A record of every transaction made in a period',
        'A record of all the transactions for one asset, liability, equity, revenue or expense item',
        'A record of all the transactions first entered in the bank account',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q113',
      kitRef: 113,
      topicId: 'chapter-04',
      type: 'single',
      text: 'What is the general ledger?',
      explanation: {
        en: `The general ledger is the whole BOOK of accounts.
- Assets and liabilities only: too narrow, it also has income, expenses and capital.
- The set of all the ledger accounts: correct.
- The financial statements: these are prepared FROM the ledger.
- What each customer and supplier owes: those are memorandum records.
= Answer: the set of all the individual ledger accounts of a business`,
        ru: `Главная книга — вся КНИГА счетов.
- Только активы и обязательства: слишком узко, там ещё доходы, расходы и капитал.
- Совокупность всех счетов: верно.
- Финансовая отчётность: её готовят ИЗ главной книги.
- Долги каждого покупателя и поставщика: это вспомогательные записи.
= Ответ: совокупность всех отдельных счетов бизнеса`,
        uz: `Bosh kitob — hisoblarning butun KITOBI.
- Faqat aktivlar va majburiyatlar: juda tor, unda daromad, xarajat va kapital ham bor.
- Barcha hisoblar to'plami: to'g'ri.
- Moliyaviy hisobot: u bosh kitobDAN tayyorlanadi.
- Har bir mijoz va yetkazib beruvchi qarzi: bular yordamchi yozuvlar.
= Javob: biznesning barcha alohida hisoblari to'plami`,
      },
      options: [
        'A record of the business\'s assets and liabilities only',
        'The set of all the individual ledger accounts of a business',
        'The statement of profit or loss and statement of financial position',
        'A record of what each supplier and customer owes',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q114',
      kitRef: 114,
      topicId: 'chapter-04',
      type: 'single',
      text: 'What is the purpose of a ledger account?',
      explanation: {
        en: `The right answer must be true for EVERY ledger account, not just some.
- Shows profit or loss: only income and expense accounts help with that.
- Classifies, records and summarises transactions: true for every account.
- Shows the owner's capital: only the capital account.
- Shows assets and liabilities: only those accounts.
= Answer: to classify, record and summarise transactions in an orderly and consistent way`,
        ru: `Верный ответ должен подходить КАЖДОМУ счёту, а не некоторым.
- Показывает прибыль или убыток: этому помогают только счета доходов и расходов.
- Классифицирует, записывает и обобщает операции: верно для любого счёта.
- Показывает капитал владельца: только счёт капитала.
- Показывает активы и обязательства: только эти счета.
= Ответ: упорядоченно и последовательно классифицировать, записывать и обобщать операции`,
        uz: `To'g'ri javob ba'zi emas, HAR BIR hisobga mos kelishi kerak.
- Foyda yoki zararni ko'rsatadi: bunga faqat daromad va xarajat hisoblari yordam beradi.
- Operatsiyalarni tasniflaydi, yozadi va jamlaydi: har bir hisob uchun to'g'ri.
- Egasi kapitalini ko'rsatadi: faqat kapital hisobi.
- Aktiv va majburiyatlarni ko'rsatadi: faqat o'sha hisoblar.
= Javob: operatsiyalarni tartibli va izchil tasniflash, yozish va jamlash`,
      },
      options: [
        'To show whether a profit or loss was made in a period',
        'To classify, record and summarise transactions in an orderly and consistent way',
        'To show the owner\'s capital at any time',
        'To show the value of assets and liabilities at any time',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q115',
      kitRef: 115,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A purchases account shows debits of $5,200 (January), $3,640 (February) and $6,120 (March), and a credit of $1,480 (Journal 25). When it is balanced, how much is the balance carried down, and on which side is it entered?',
      explanation: {
        en: `Balance the account step by step.
# Step 1: Add each side
  Debits: $5,200 + $3,640 + $6,120 = $14,960
  Credit: $1,480
# Step 2: Write the bigger total ($14,960) on both sides
  The credit side is short by $14,960 - $1,480 = $13,480
# Step 3: Where "balance carried down" goes
  On the SMALLER side, so the credit side: $13,480
= Answer: $13,480 on the credit side
It is then brought down on the debit side, so purchases have a normal debit balance of $13,480.
! Common trap: "carried down" sits on the smaller side, "brought down" shows the true balance.`,
        ru: `Закроем счёт по шагам.
# Шаг 1: Сложим каждую сторону
  Дебет: $5,200 + $3,640 + $6,120 = $14,960
  Кредит: $1,480
# Шаг 2: Пишем большую сумму ($14,960) на обеих сторонах
  Кредиту не хватает $14,960 - $1,480 = $13,480
# Шаг 3: Куда идёт «остаток c/d»
  На МЕНЬШУЮ сторону, то есть в кредит: $13,480
= Ответ: $13,480 на кредитовой стороне
Затем его переносят вниз в дебет, и у закупок обычный дебетовый остаток $13,480.
! Частая ошибка: «c/d» стоит на меньшей стороне, а «b/d» показывает настоящий остаток.`,
        uz: `Hisobni bosqichma-bosqich balanslaymiz.
# 1-qadam: Har bir tomonni qo'shamiz
  Debet: $5,200 + $3,640 + $6,120 = $14,960
  Kredit: $1,480
# 2-qadam: Kattaroq jamini ($14,960) ikkala tomonga yozamiz
  Kreditga $14,960 - $1,480 = $13,480 yetmaydi
# 3-qadam: «c/d qoldiq» qayerga yoziladi
  KICHIK tomonga, ya'ni kreditga: $13,480
= Javob: kredit tomonida $13,480
Keyin u debetga tushiriladi, xaridlarda odatiy $13,480 debet qoldiq.
! Ko'p uchraydigan xato: «c/d» kichik tomonda, «b/d» esa haqiqiy qoldiqni ko'rsatadi.`,
      },
      options: [
        '$13,480 on the debit side',
        '$13,480 on the credit side',
        '$16,440 on the debit side',
        '$16,440 on the credit side',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q116',
      kitRef: 116,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A revenue account shows a debit of $960 (Journal), and credits of $20,300 (balance brought forward), $4,700 (June), $6,150 (July) and $8,420 (August). What is the balance brought down?',
      explanation: {
        en: `Here the question asks for the balance BROUGHT down, which shows the true balance.
# Step 1: Add each side
  Credits: $20,300 + $4,700 + $6,150 + $8,420 = $39,570
  Debit: $960
# Step 2: The difference
  $39,570 - $960 = $38,610
# Step 3: Which side?
  The credit side is bigger, so the balance brought down is a CREDIT, which is normal for revenue
= Answer: $38,610 credit`,
        ru: `Здесь спрашивают остаток b/d (принесённый), он показывает настоящий остаток.
# Шаг 1: Сложим каждую сторону
  Кредит: $20,300 + $4,700 + $6,150 + $8,420 = $39,570
  Дебет: $960
# Шаг 2: Разница
  $39,570 - $960 = $38,610
# Шаг 3: Какая сторона?
  Кредит больше, значит остаток b/d кредитовый — обычный для выручки
= Ответ: $38,610 кредит`,
        uz: `Bu yerda b/d (olib kelingan) qoldiq so'ralmoqda, u haqiqiy qoldiqni ko'rsatadi.
# 1-qadam: Har bir tomonni qo'shamiz
  Kredit: $20,300 + $4,700 + $6,150 + $8,420 = $39,570
  Debet: $960
# 2-qadam: Farq
  $39,570 - $960 = $38,610
# 3-qadam: Qaysi tomon?
  Kredit katta, demak b/d qoldiq KREDIT, tushum uchun odatiy
= Javob: $38,610 kredit`,
      },
      options: ['$39,570 credit', '$38,610 debit', '$38,610 credit', '$39,570 debit'],
      correctIndex: 2,
    },
    {
      id: 'ch04-q117',
      kitRef: 117,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Goods sold on credit are returned by a customer. Which entry records the return?',
      explanation: {
        en: `A customer gives back goods they bought on credit.
# Step 1: The return
  Returns inwards act like negative sales, so they are a debit: Dr Returns inwards
# Step 2: The customer
  The customer now owes less, so receivables go down, a credit: Cr Trade receivables
= Answer: Dr Returns inwards, Cr Trade receivables
! Common trap: payables. Payables are about suppliers, not customers.`,
        ru: `Покупатель возвращает товар, купленный в кредит.
# Шаг 1: Возврат
  Возвраты покупателей — как отрицательные продажи, поэтому дебет: Дт Возвраты покупателей
# Шаг 2: Покупатель
  Покупатель теперь должен меньше, дебиторы уменьшаются — кредит: Кт Торговые дебиторы
= Ответ: Дт Возвраты покупателей, Кт Торговые дебиторы
! Частая ошибка: кредиторы. Кредиторы — это поставщики, а не покупатели.`,
        uz: `Mijoz nasiyaga olgan tovarni qaytaradi.
# 1-qadam: Qaytarish
  Sotuv qaytarishlari manfiy sotuv kabi, shuning uchun debet: Dt Sotuv qaytarishlari
# 2-qadam: Mijoz
  Mijoz endi kamroq qarz, debitorlar kamayadi — kredit: Kt Savdo debitorlari
= Javob: Dt Sotuv qaytarishlari, Kt Savdo debitorlari
! Ko'p uchraydigan xato: kreditorlar. Kreditorlar — yetkazib beruvchilar, mijozlar emas.`,
      },
      options: [
        'Dr Revenue, Cr Trade payables',
        'Dr Returns inwards, Cr Trade receivables',
        'Dr Trade receivables, Cr Returns inwards',
        'Dr Returns inwards, Cr Trade payables',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q118',
      kitRef: 118,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Goods bought on credit are returned to the supplier. Which entry records the return?',
      explanation: {
        en: `You send goods back to a supplier you bought from on credit.
# Step 1: The supplier
  You now owe less, so payables go down, a debit: Dr Payables
# Step 2: The return
  Returns outwards act like negative purchases, so they are a credit: Cr Returns outwards
= Answer: Dr Payables, Cr Returns outwards`,
        ru: `Вы возвращаете товар поставщику, у которого купили в кредит.
# Шаг 1: Поставщик
  Вы теперь должны меньше, кредиторы уменьшаются — дебет: Дт Кредиторы
# Шаг 2: Возврат
  Возвраты поставщикам — как отрицательные закупки, поэтому кредит: Кт Возвраты поставщикам
= Ответ: Дт Кредиторы, Кт Возвраты поставщикам`,
        uz: `Nasiyaga olgan tovarni yetkazib beruvchiga qaytarasiz.
# 1-qadam: Yetkazib beruvchi
  Endi kamroq qarzsiz, kreditorlar kamayadi — debet: Dt Kreditorlar
# 2-qadam: Qaytarish
  Xarid qaytarishlari manfiy xarid kabi, shuning uchun kredit: Kt Xarid qaytarishlari
= Javob: Dt Kreditorlar, Kt Xarid qaytarishlari`,
      },
      options: [
        'Dr Payables, Cr Returns outwards',
        'Dr Returns outwards, Cr Payables',
        'Dr Returns outwards, Cr Receivables',
        'Dr Receivables, Cr Returns outwards',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q119',
      kitRef: 119,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A bookkeeper prepared this journal: Dr Payables $95, Cr Discount $95. What is the correct narrative?',
      explanation: {
        en: `Read the journal like a detective.
# Clue 1: Dr Payables
  Payables are suppliers, so the discount came FROM a supplier. It is a discount received.
# Clue 2: It is in the ledger at all
  A trade discount is taken off before anything is recorded, so it never appears in a journal. This must be a settlement discount.
= Answer: settlement discount received from a supplier`,
        ru: `Читайте проводку как детектив.
# Подсказка 1: Дт Кредиторы
  Кредиторы — поставщики, значит скидка ОТ поставщика. Это полученная скидка.
# Подсказка 2: Она вообще есть в учёте
  Торговую скидку вычитают до записи, в журнале её не бывает. Значит, это скидка за раннюю оплату.
= Ответ: скидка за раннюю оплату, полученная от поставщика`,
        uz: `Yozuvni tergovchi kabi o'qing.
# 1-dalil: Dt Kreditorlar
  Kreditorlar — yetkazib beruvchilar, demak chegirma yetkazib beruvchiDAN. Bu olingan chegirma.
# 2-dalil: U umuman hisobda bor
  Savdo chegirmasi yozuvdan oldin ayiriladi, jurnalda bo'lmaydi. Demak bu muddatidan oldingi to'lov chegirmasi.
= Javob: yetkazib beruvchidan olingan muddatidan oldingi to'lov chegirmasi`,
      },
      options: [
        'Trade discount received from a supplier',
        'Settlement discount allowed to a customer',
        'Trade discount allowed to a customer',
        'Settlement discount received from a supplier',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q120',
      kitRef: 120,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Nodira starts a courier business by transferring her own motorbike, valued at $3,500, into the business. Which entry is correct?',
      explanation: {
        en: `No money moves, but the business gets a motorbike and the owner has invested more.
# Step 1: The business gains an asset
  Dr Motor vehicle $3,500
# Step 2: The owner's investment grows
  Cr Capital $3,500
= Answer: Dr Motor vehicle, Cr Capital
! Common traps: Bank is wrong (no cash moved) and Drawings is wrong (drawings are what the owner takes OUT).`,
        ru: `Деньги не движутся, но у бизнеса появляется мотоцикл, а владелец вложил больше.
# Шаг 1: У бизнеса новый актив
  Дт Транспорт $3,500
# Шаг 2: Вложения владельца растут
  Кт Капитал $3,500
= Ответ: Дт Транспорт, Кт Капитал
! Частые ошибки: Банк неверно (денег не было), Изъятия неверно (изъятия — то, что владелец ЗАБИРАЕТ).`,
        uz: `Pul harakatlanmaydi, lekin biznesda mototsikl paydo bo'ladi va egasi ko'proq qo'ygan.
# 1-qadam: Biznesda yangi aktiv
  Dt Transport $3,500
# 2-qadam: Egasi qo'yilmasi oshadi
  Kt Kapital $3,500
= Javob: Dt Transport, Kt Kapital
! Ko'p uchraydigan xatolar: Bank noto'g'ri (pul harakatlanmadi), Olib qo'yish noto'g'ri (u egasi CHIQARADIGAN narsa).`,
      },
      options: [
        'Dr Motor vehicle, Cr Drawings',
        'Dr Motor vehicle, Cr Bank',
        'Dr Motor vehicle, Cr Capital',
        'Dr Capital, Cr Motor vehicle',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q121',
      kitRef: 121,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Which journal writes off an irrecoverable debt?',
      explanation: {
        en: `A customer will never pay. Remove the debt and record the loss.
# Step 1: The loss
  It is an expense: Dr Irrecoverable debts
# Step 2: Remove the debt
  The customer no longer counts as owing anything: Cr Receivables
= Answer: Dr Irrecoverable debts, Cr Receivables
! Common trap: crediting the bank. No money moves when a debt is written off.`,
        ru: `Покупатель никогда не заплатит. Убираем долг и записываем убыток.
# Шаг 1: Убыток
  Это расход: Дт Безнадёжные долги
# Шаг 2: Убираем долг
  Покупатель больше не считается должником: Кт Дебиторы
= Ответ: Дт Безнадёжные долги, Кт Дебиторы
! Частая ошибка: кредитовать банк. При списании долга деньги не движутся.`,
        uz: `Mijoz hech qachon to'lamaydi. Qarzni olib tashlab, zararni yozamiz.
# 1-qadam: Zarar
  Bu xarajat: Dt Umidsiz qarzlar
# 2-qadam: Qarzni olib tashlaymiz
  Mijoz endi qarzdor hisoblanmaydi: Kt Debitorlar
= Javob: Dt Umidsiz qarzlar, Kt Debitorlar
! Ko'p uchraydigan xato: bankni kreditlash. Qarz hisobdan chiqarilganda pul harakatlanmaydi.`,
      },
      options: [
        'Dr Irrecoverable debts, Cr Bank',
        'Dr Revenue, Cr Irrecoverable debts',
        'Dr Receivables, Cr Irrecoverable debts',
        'Dr Irrecoverable debts, Cr Receivables',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q122',
      kitRef: 122,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Temur is registered for sales tax. He sold goods with a list price of $720, excluding tax, on credit, and deducted a 5% trade discount because of the large order. Sales tax is 15%. What is the gross value of the invoice?',
      explanation: {
        en: `Order matters: trade discount first, then tax on what is left.
# Step 1: Trade discount
  $720 × 95% = $684 (the 5% comes off first)
# Step 2: Tax on the discounted price
  $684 × 15% = $102.60
# Step 3: The invoice total
  $684 + $102.60 = $786.60
= Answer: $786.60
! Common trap: charging tax on $720. Tax is always charged on the price actually charged, after trade discount.`,
        ru: `Порядок важен: сначала торговая скидка, затем налог с остатка.
# Шаг 1: Торговая скидка
  $720 × 95% = $684 (5% вычитаются сначала)
# Шаг 2: Налог с цены после скидки
  $684 × 15% = $102.60
# Шаг 3: Итог счёта
  $684 + $102.60 = $786.60
= Ответ: $786.60
! Частая ошибка: считать налог с $720. Налог всегда считают с фактической цены после торговой скидки.`,
        uz: `Tartib muhim: avval savdo chegirmasi, keyin qolganiga soliq.
# 1-qadam: Savdo chegirmasi
  $720 × 95% = $684 (5% avval ayiriladi)
# 2-qadam: Chegirmadan keyingi narxga soliq
  $684 × 15% = $102.60
# 3-qadam: Hisob jami
  $684 + $102.60 = $786.60
= Javob: $786.60
! Ko'p uchraydigan xato: soliqni $720 dan hisoblash. Soliq doim savdo chegirmasidan keyingi haqiqiy narxdan olinadi.`,
      },
      correctValue: 786.6,
      answerText: '$786.60',
    },
    {
      id: 'ch04-q123',
      kitRef: 123,
      topicId: 'chapter-04',
      type: 'number',
      text: 'At 1 December a business owed the tax authority $31,250. In December it had sales of $720,000 excluding 17.5% sales tax, and purchases of $423,000 including 17.5% sales tax. What is the balance on the sales tax account at 31 December?',
      explanation: {
        en: `Check each figure: is it before tax (net) or including tax (gross)?
# Step 1: Output tax on sales (given net)
  $720,000 × 17.5% = $126,000
# Step 2: Input tax on purchases (given gross)
  $423,000 × 17.5/117.5 = $63,000
# Step 3: The account
  Owed at the start $31,250 + output $126,000 - input $63,000 = $94,250
= Answer: $94,250 (a credit balance: owed to the authority)
! Common trap: using 17.5% on the purchases, which already include tax.`,
        ru: `Проверьте каждую цифру: без налога или с налогом?
# Шаг 1: Выходной налог с продаж (даны без налога)
  $720,000 × 17.5% = $126,000
# Шаг 2: Входной налог с закупок (даны с налогом)
  $423,000 × 17.5/117.5 = $63,000
# Шаг 3: Счёт
  Долг на начало $31,250 + выходной $126,000 - входной $63,000 = $94,250
= Ответ: $94,250 (кредитовый остаток: долг государству)
! Частая ошибка: брать 17.5% от закупок, в которых налог уже есть.`,
        uz: `Har bir sonni tekshiring: soliqsizmi yoki soliqlimi?
# 1-qadam: Sotuvdan chiqish solig'i (soliqsiz berilgan)
  $720,000 × 17.5% = $126,000
# 2-qadam: Xariddan kirish solig'i (soliqli berilgan)
  $423,000 × 17.5/117.5 = $63,000
# 3-qadam: Hisob
  Boshidagi qarz $31,250 + chiqish $126,000 - kirish $63,000 = $94,250
= Javob: $94,250 (kredit qoldiq: davlatga qarz)
! Ko'p uchraydigan xato: soliq allaqachon bor xaridlarga 17.5% qo'llash.`,
      },
      correctValue: 94250,
      answerText: '$94,250',
    },
    {
      id: 'ch04-q124',
      kitRef: 124,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Sales including sales tax were $32,900, and purchases excluding sales tax were $24,000. All are taxed at 17.5%. What is the balance on the sales tax account?',
      explanation: {
        en: `One figure includes tax and the other does not, so each needs a different method.
# Step 1: Output tax (sales INCLUDE tax)
  $32,900 × 17.5/117.5 = $4,900
# Step 2: Input tax (purchases EXCLUDE tax)
  $24,000 × 17.5% = $4,200
# Step 3: The balance
  $4,900 - $4,200 = $700
= Answer: $700, a credit balance owed to the authority`,
        ru: `Одна цифра с налогом, другая без, поэтому способы разные.
# Шаг 1: Выходной налог (продажи С налогом)
  $32,900 × 17.5/117.5 = $4,900
# Шаг 2: Входной налог (закупки БЕЗ налога)
  $24,000 × 17.5% = $4,200
# Шаг 3: Остаток
  $4,900 - $4,200 = $700
= Ответ: $700, кредитовый остаток — долг государству`,
        uz: `Bir son soliqli, ikkinchisi soliqsiz, shuning uchun usullar turlicha.
# 1-qadam: Chiqish solig'i (sotuv soliq BILAN)
  $32,900 × 17.5/117.5 = $4,900
# 2-qadam: Kirish solig'i (xarid soliqSIZ)
  $24,000 × 17.5% = $4,200
# 3-qadam: Qoldiq
  $4,900 - $4,200 = $700
= Javob: $700, kredit qoldiq — davlatga qarz`,
      },
      correctValue: 700,
      answerText: '$700',
    },
    {
      id: 'ch04-q125',
      kitRef: 125,
      topicId: 'chapter-04',
      type: 'single',
      text: 'In a quarter a business had taxable sales of $120,000 and taxable purchases of $95,000, both net of sales tax. The rate is 10%. What is the position with the tax authority?',
      explanation: {
        en: `Both figures are net (before tax), so just apply 10%.
# Step 1: Output tax on sales
  $120,000 × 10% = $12,000
# Step 2: Input tax on purchases
  $95,000 × 10% = $9,500
# Step 3: Compare
  Output is bigger, so you owe the difference: $12,000 - $9,500 = $2,500
= Answer: $2,500 payable
! Common trap: $2,273 comes from using 10/110, which is only for figures that already include tax.`,
        ru: `Обе цифры без налога, просто берём 10%.
# Шаг 1: Выходной налог с продаж
  $120,000 × 10% = $12,000
# Шаг 2: Входной налог с закупок
  $95,000 × 10% = $9,500
# Шаг 3: Сравниваем
  Выходной больше, значит вы должны разницу: $12,000 - $9,500 = $2,500
= Ответ: $2,500 к уплате
! Частая ошибка: $2,273 получается при 10/110, а это только для сумм, уже включающих налог.`,
        uz: `Ikkala son soliqsiz, shunchaki 10% olamiz.
# 1-qadam: Sotuvdan chiqish solig'i
  $120,000 × 10% = $12,000
# 2-qadam: Xariddan kirish solig'i
  $95,000 × 10% = $9,500
# 3-qadam: Solishtiramiz
  Chiqish kattaroq, demak farqni to'laysiz: $12,000 - $9,500 = $2,500
= Javob: $2,500 to'lanadi
! Ko'p uchraydigan xato: $2,273 10/110 dan chiqadi, bu faqat soliq allaqachon bor summalar uchun.`,
      },
      options: ['$2,273 payable', '$2,500 payable', '$2,273 receivable', '$2,500 receivable'],
      correctIndex: 1,
    },
    {
      id: 'ch04-q126',
      kitRef: 126,
      topicId: 'chapter-04',
      type: 'number',
      text: 'A company is registered for sales tax at 17.5%. For August it shows outputs of $72,000 excluding tax and inputs of $49,350 including tax. At the start of the month it owed the authority $4,100, and during the month it paid $3,200. How much does it owe at the end of the month?',
      explanation: {
        en: `Build the sales tax account for August.
# Step 1: Output tax (outputs exclude tax)
  $72,000 × 17.5% = $12,600
# Step 2: Input tax (inputs include tax)
  $49,350 × 17.5/117.5 = $7,350
# Step 3: The account
  Owed at the start: $4,100
  Plus output tax: + $12,600
  Less input tax: - $7,350
  Less paid to the authority: - $3,200
= Answer: $4,100 + $12,600 - $7,350 - $3,200 = $6,150 owed`,
        ru: `Построим счёт налога за август.
# Шаг 1: Выходной налог (выходы без налога)
  $72,000 × 17.5% = $12,600
# Шаг 2: Входной налог (входы с налогом)
  $49,350 × 17.5/117.5 = $7,350
# Шаг 3: Счёт
  Долг на начало: $4,100
  Плюс выходной налог: + $12,600
  Минус входной налог: - $7,350
  Минус уплачено государству: - $3,200
= Ответ: $4,100 + $12,600 - $7,350 - $3,200 = долг $6,150`,
        uz: `Avgust uchun sotuv solig'i hisobini tuzamiz.
# 1-qadam: Chiqish solig'i (soliqsiz)
  $72,000 × 17.5% = $12,600
# 2-qadam: Kirish solig'i (soliqli)
  $49,350 × 17.5/117.5 = $7,350
# 3-qadam: Hisob
  Boshidagi qarz: $4,100
  Plus chiqish solig'i: + $12,600
  Minus kirish solig'i: - $7,350
  Minus davlatga to'langan: - $3,200
= Javob: $4,100 + $12,600 - $7,350 - $3,200 = $6,150 qarz`,
      },
      correctValue: 6150,
      answerText: '$6,150',
    },
    {
      id: 'ch04-q127',
      kitRef: 127,
      topicId: 'chapter-04',
      type: 'single',
      text: 'For a business registered for sales tax, which statement best describes the revenue account?',
      explanation: {
        en: `Revenue is what the business earns for ITSELF. The sales tax belongs to the government, so it is left out.
- Purchases including tax: purchases are not revenue.
- Revenue including tax: the tax part is not the business's.
- Revenue excluding tax: correct.
- Expenses: not revenue at all.
= Answer: it is credited with total revenue excluding sales tax`,
        ru: `Выручка — то, что бизнес зарабатывает для СЕБЯ. Налог с продаж принадлежит государству, поэтому его не включают.
- Закупки с налогом: закупки — не выручка.
- Выручка с налогом: налог не принадлежит бизнесу.
- Выручка без налога: верно.
- Расходы: вообще не выручка.
= Ответ: он кредитуется на всю выручку без налога с продаж`,
        uz: `Tushum — biznes O'ZI uchun topgan narsa. Sotuv solig'i davlatniki, shuning uchun kiritilmaydi.
- Soliqli xaridlar: xarid tushum emas.
- Soliqli tushum: soliq qismi biznesniki emas.
- Soliqsiz tushum: to'g'ri.
- Xarajatlar: umuman tushum emas.
= Javob: u sotuv solig'isiz jami tushum bilan kreditlanadi`,
      },
      options: [
        'It is credited with total purchases including sales tax',
        'It is credited with total revenue including sales tax',
        'It is credited with total revenue excluding sales tax',
        'It is credited with total expenses excluding sales tax',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q128',
      kitRef: 128,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A business sells goods with a net value of $800 to a customer on credit. Sales tax is 17.5%. What are the entries?',
      explanation: {
        en: `The $800 is net, so tax is added on top.
# Step 1: The tax
  $800 × 17.5% = $140
# Step 2: What the customer owes
  $800 + $140 = $940: Dr Receivables $940
# Step 3: The credits
  Cr Sales $800 (net) and Cr Sales tax $140 (owed to the authority)
= Answer: Dr Receivables $940, Cr Sales tax $140, Cr Sales $800`,
        ru: `$800 — без налога, налог добавляется сверху.
# Шаг 1: Налог
  $800 × 17.5% = $140
# Шаг 2: Что должен покупатель
  $800 + $140 = $940: Дт Дебиторы $940
# Шаг 3: Кредиты
  Кт Продажи $800 (без налога) и Кт Налог с продаж $140 (долг государству)
= Ответ: Дт Дебиторы $940, Кт Налог с продаж $140, Кт Продажи $800`,
        uz: `$800 — soliqsiz, soliq ustiga qo'shiladi.
# 1-qadam: Soliq
  $800 × 17.5% = $140
# 2-qadam: Mijoz qarzi
  $800 + $140 = $940: Dt Debitorlar $940
# 3-qadam: Kreditlar
  Kt Sotuv $800 (soliqsiz) va Kt Sotuv solig'i $140 (davlatga qarz)
= Javob: Dt Debitorlar $940, Kt Sotuv solig'i $140, Kt Sotuv $800`,
      },
      options: [
        'Dr Receivables $800, Cr Sales tax $140, Cr Sales $800',
        'Dr Sales $800, Dr Sales tax $140, Cr Receivables $940',
        'Dr Receivables $800, Dr Sales tax $140, Cr Sales $940',
        'Dr Receivables $940, Cr Sales tax $140, Cr Sales $800',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q129',
      kitRef: 129,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A credit customer returns goods with a net value of $240. Sales tax is 17.5%. What entries does the seller make?',
      explanation: {
        en: `A return reverses the original sale, tax included.
# Step 1: The tax on the returned goods
  $240 × 17.5% = $42
# Step 2: Reverse each part of the sale
  Returns inwards (negative sales) at net: Dr Returns inwards $240
  The tax is no longer owed to the authority: Dr Sales tax $42
  The customer owes the gross amount less: Cr Receivables $282
= Answer: Dr Returns inwards $240, Dr Sales tax $42, Cr Receivables $282`,
        ru: `Возврат отменяет исходную продажу вместе с налогом.
# Шаг 1: Налог на возвращённый товар
  $240 × 17.5% = $42
# Шаг 2: Отменяем каждую часть продажи
  Возвраты покупателей (отрицательные продажи) без налога: Дт Возвраты покупателей $240
  Налог больше не должен государству: Дт Налог с продаж $42
  Покупатель должен на сумму с налогом меньше: Кт Дебиторы $282
= Ответ: Дт Возвраты покупателей $240, Дт Налог с продаж $42, Кт Дебиторы $282`,
        uz: `Qaytarish dastlabki sotuvni soliq bilan birga bekor qiladi.
# 1-qadam: Qaytgan tovar solig'i
  $240 × 17.5% = $42
# 2-qadam: Sotuvning har bir qismini bekor qilamiz
  Sotuv qaytarishlari (manfiy sotuv) soliqsiz: Dt Sotuv qaytarishlari $240
  Soliq endi davlatga qarz emas: Dt Sotuv solig'i $42
  Mijoz soliqli summaga kamroq qarz: Kt Debitorlar $282
= Javob: Dt Sotuv qaytarishlari $240, Dt Sotuv solig'i $42, Kt Debitorlar $282`,
      },
      options: [
        'Dr Returns inwards $240, Dr Sales tax $42, Cr Receivables $282',
        'Dr Purchases $240, Dr Sales tax $42, Cr Receivables $282',
        'Dr Receivables $282, Cr Returns inwards $240, Cr Sales tax $42',
        'Dr Returns inwards $282, Cr Sales tax $42, Cr Receivables $240',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q130',
      kitRef: 130,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company registered for sales tax buys furniture on credit for $9,000 plus sales tax of $1,350. What are the correct entries?',
      explanation: {
        en: `The same rule as purchases of goods: the asset is recorded net, because the tax can be claimed back.
# The entries
  The furniture at net cost: Dr Furniture $9,000
  The tax you can claim back: Dr Sales tax $1,350
  The supplier must be paid in full: Cr Payables $10,350
= Answer: Dr Furniture $9,000, Dr Sales tax $1,350, Cr Payables $10,350
! Common trap: recording the furniture at $10,350. Recoverable tax is never part of an asset's cost.`,
        ru: `То же правило, что и для товаров: актив записывают без налога, ведь налог можно вернуть.
# Проводки
  Мебель по стоимости без налога: Дт Мебель $9,000
  Налог к возмещению: Дт Налог с продаж $1,350
  Поставщику платят полностью: Кт Кредиторы $10,350
= Ответ: Дт Мебель $9,000, Дт Налог с продаж $1,350, Кт Кредиторы $10,350
! Частая ошибка: записать мебель за $10,350. Возмещаемый налог никогда не входит в стоимость актива.`,
        uz: `Tovar xaridi bilan bir xil qoida: aktiv soliqsiz yoziladi, chunki soliqni qaytarib olish mumkin.
# Yozuvlar
  Mebel soliqsiz qiymatda: Dt Mebel $9,000
  Qaytariladigan soliq: Dt Sotuv solig'i $1,350
  Yetkazib beruvchiga to'liq to'lanadi: Kt Kreditorlar $10,350
= Javob: Dt Mebel $9,000, Dt Sotuv solig'i $1,350, Kt Kreditorlar $10,350
! Ko'p uchraydigan xato: mebelni $10,350 da yozish. Qaytariladigan soliq hech qachon aktiv qiymatiga kirmaydi.`,
      },
      options: [
        'Dr Furniture $10,350, Cr Payables $10,350',
        'Dr Furniture $9,000, Dr Sales tax $1,350, Cr Payables $10,350',
        'Dr Furniture $9,000, Cr Payables $9,000',
        'Dr Furniture $9,000, Cr Sales tax $1,350, Cr Payables $7,650',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q131',
      kitRef: 131,
      topicId: 'chapter-04',
      type: 'matrix',
      text: 'State whether each statement about sales tax is true or false.',
      explanation: {
        en: `Check each statement.
- Sales tax is an indirect tax: TRUE. The final customer bears it; businesses only collect it.
- If input is more than output, the difference is paid: FALSE. You get a REFUND.
- Reported sales and purchases include tax: FALSE. They are reported net.
- Some purchases have unrecoverable tax: TRUE, for example client entertaining and cars.`,
        ru: `Проверим каждое утверждение.
- Налог с продаж — косвенный: ВЕРНО. Его несёт конечный покупатель, бизнес только собирает.
- Если входной больше выходного, разницу платят: НЕВЕРНО. Вы получаете ВОЗВРАТ.
- Продажи и закупки показывают с налогом: НЕВЕРНО. Их показывают без налога.
- По некоторым покупкам налог не возмещается: ВЕРНО, например представительские расходы и автомобили.`,
        uz: `Har bir fikrni tekshiramiz.
- Sotuv solig'i bilvosita soliq: TO'G'RI. Uni oxirgi xaridor ko'taradi, biznes faqat yig'adi.
- Kirish chiqishdan ko'p bo'lsa, farq to'lanadi: NOTO'G'RI. Siz QAYTARIB olasiz.
- Sotuv va xaridlar soliq bilan ko'rsatiladi: NOTO'G'RI. Ular soliqsiz ko'rsatiladi.
- Ba'zi xaridlarda soliq qaytarilmaydi: TO'G'RI, masalan mijozlarni mehmon qilish va avtomobillar.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Sales tax is a form of indirect taxation', correctIndex: 0 },
        {
          text: 'If input tax is more than output tax, the difference is paid to the tax authority',
          correctIndex: 1,
        },
        {
          text: 'Sales tax is included in the reported sales and purchases of a registered business',
          correctIndex: 1,
        },
        { text: 'Sales tax cannot be recovered on some purchases', correctIndex: 0 },
      ],
    },
    {
      id: 'ch04-q132',
      kitRef: 132,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Opening payables were $156,400, cash paid was $498,700, discounts received were $11,900, goods returned were $24,300 and closing payables were $149,500. What were purchases?',
      explanation: {
        en: `Rebuild the payables account. Purchases are the missing figure.
# Debit side (what you owe shrinks, plus the closing balance)
  Cash paid $498,700 + discounts $11,900 + returns $24,300 + closing $149,500 = $684,400
# Credit side
  Opening payables $156,400 + purchases (?)
# Make both sides equal
  Purchases = $684,400 - $156,400 = $528,000
= Answer: $528,000`,
        ru: `Восстановим счёт кредиторов. Закупки — недостающая цифра.
# Дебет (долг уменьшается, плюс остаток на конец)
  Оплачено $498,700 + скидки $11,900 + возвраты $24,300 + на конец $149,500 = $684,400
# Кредит
  На начало $156,400 + закупки (?)
# Уравниваем стороны
  Закупки = $684,400 - $156,400 = $528,000
= Ответ: $528,000`,
        uz: `Kreditorlar hisobini tiklaymiz. Xaridlar — yetishmayotgan son.
# Debet (qarz kamayadi, plus yakuniy qoldiq)
  To'langan $498,700 + chegirmalar $11,900 + qaytarishlar $24,300 + yakuniy $149,500 = $684,400
# Kredit
  Boshlang'ich $156,400 + xaridlar (?)
# Tomonlarni tenglashtiramiz
  Xaridlar = $684,400 - $156,400 = $528,000
= Javob: $528,000`,
      },
      correctValue: 528000,
      answerText: '$528,000',
    },
    {
      id: 'ch04-q133',
      kitRef: 133,
      topicId: 'chapter-04',
      type: 'number',
      text: 'Receivables were $12,000 at 1 January and $10,500 at 31 December. Total receipts in the year were $96,000, including cash sales of $6,000. What is revenue for the year?',
      explanation: {
        en: `Revenue = credit sales + cash sales. Find the credit sales from the receivables account.
# Step 1: Separate the cash sales
  Total receipts $96,000 - cash sales $6,000 = $90,000 from credit customers
# Step 2: Credit sales from receivables
  Opening $12,000 + credit sales (?) - received $90,000 = closing $10,500
  Credit sales = $90,000 + $10,500 - $12,000 = $88,500
# Step 3: Total revenue
  $88,500 + $6,000 = $94,500
= Answer: $94,500
! Common trap: putting all $96,000 through receivables. Cash sales never go through receivables.`,
        ru: `Выручка = продажи в кредит + продажи за наличные. Продажи в кредит найдём через счёт дебиторов.
# Шаг 1: Отделим продажи за наличные
  Все поступления $96,000 - наличные продажи $6,000 = $90,000 от покупателей в кредит
# Шаг 2: Продажи в кредит через дебиторов
  На начало $12,000 + продажи в кредит (?) - получено $90,000 = на конец $10,500
  Продажи в кредит = $90,000 + $10,500 - $12,000 = $88,500
# Шаг 3: Вся выручка
  $88,500 + $6,000 = $94,500
= Ответ: $94,500
! Частая ошибка: провести все $96,000 через дебиторов. Продажи за наличные через дебиторов не идут.`,
        uz: `Tushum = nasiya sotuv + naqd sotuv. Nasiya sotuvni debitorlar hisobidan topamiz.
# 1-qadam: Naqd sotuvni ajratamiz
  Jami tushum $96,000 - naqd sotuv $6,000 = nasiya mijozlardan $90,000
# 2-qadam: Debitorlar orqali nasiya sotuv
  Boshida $12,000 + nasiya sotuv (?) - olingan $90,000 = oxirida $10,500
  Nasiya sotuv = $90,000 + $10,500 - $12,000 = $88,500
# 3-qadam: Jami tushum
  $88,500 + $6,000 = $94,500
= Javob: $94,500
! Ko'p uchraydigan xato: butun $96,000 ni debitorlar orqali o'tkazish. Naqd sotuv debitorlar orqali o'tmaydi.`,
      },
      correctValue: 94500,
      answerText: '$94,500',
    },
    {
      id: 'ch04-q134',
      kitRef: 134,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A sole trader makes only cash sales. During the year $62,000 was banked, including $7,000 from selling a business car. Wages of $14,400 were paid in cash from the till, and the owner took $2,500 a month as drawings. Cash in the till was $350 at the start of the year and $500 at the end. What was revenue?',
      explanation: {
        en: `Treat the till like an account: everything that went OUT must have come IN from somewhere.
# Step 1: Cash that left the till (or was there at the end)
  Banked $62,000 + wages paid from the till $14,400 + drawings ($2,500 × 12 = $30,000) + cash left at the end $500 = $106,900
# Step 2: Cash that came in from things other than sales
  Cash in the till at the start: $350
  Money from selling the car: $7,000 (not a sale of goods)
# Step 3: The rest must be sales
  $106,900 - $350 - $7,000 = $99,550
= Answer: $99,550
! Common trap: forgetting to take out the car. Selling a business asset is not revenue.`,
        ru: `Считайте кассу счётом: всё, что УШЛО, откуда-то ПРИШЛО.
# Шаг 1: Деньги, которые ушли из кассы (или остались на конец)
  Сдано в банк $62,000 + зарплата из кассы $14,400 + изъятия ($2,500 × 12 = $30,000) + остаток на конец $500 = $106,900
# Шаг 2: Деньги, пришедшие не от продаж
  Деньги в кассе на начало: $350
  Деньги от продажи машины: $7,000 (не продажа товара)
# Шаг 3: Остальное — продажи
  $106,900 - $350 - $7,000 = $99,550
= Ответ: $99,550
! Частая ошибка: не убрать машину. Продажа актива бизнеса — не выручка.`,
        uz: `Kassani hisob deb hisoblang: CHIQQAN hamma narsa qayerdandir KIRGAN.
# 1-qadam: Kassadan chiqqan (yoki oxirida qolgan) pul
  Bankka topshirilgan $62,000 + kassadan ish haqi $14,400 + olib qo'yish ($2,500 × 12 = $30,000) + oxiridagi qoldiq $500 = $106,900
# 2-qadam: Sotuvdan bo'lmagan kirim
  Boshida kassadagi pul: $350
  Mashina sotishdan pul: $7,000 (tovar sotuvi emas)
# 3-qadam: Qolgani — sotuv
  $106,900 - $350 - $7,000 = $99,550
= Javob: $99,550
! Ko'p uchraydigan xato: mashinani ayirmaslik. Biznes aktivini sotish tushum emas.`,
      },
      options: ['$99,250', '$99,400', '$99,550', '$106,550'],
      correctIndex: 2,
    },
    {
      id: 'ch04-q135',
      kitRef: 135,
      topicId: 'chapter-04',
      type: 'single',
      text: 'In its first month a business made credit sales of $130,000 excluding sales tax and credit purchases of $170,400 including sales tax. It paid credit suppliers $90,000 including sales tax. All items are taxed at 20%. What is the balance on the sales tax account?',
      explanation: {
        en: `Work out the output and input tax. Paying suppliers is irrelevant: the tax was recorded when the invoices arrived.
# Step 1: Output tax (sales given net)
  $130,000 × 20% = $26,000
# Step 2: Input tax (purchases given gross)
  $170,400 × 20/120 = $28,400
# Step 3: Compare
  Input is bigger by $28,400 - $26,000 = $2,400, so the authority owes YOU
= Answer: $2,400 Dr (an asset: a refund due)
! Common trap: using the $90,000 payment. Paying a supplier does not change the sales tax account.`,
        ru: `Найдём выходной и входной налог. Оплата поставщикам не важна: налог записали при получении счетов.
# Шаг 1: Выходной налог (продажи без налога)
  $130,000 × 20% = $26,000
# Шаг 2: Входной налог (закупки с налогом)
  $170,400 × 20/120 = $28,400
# Шаг 3: Сравниваем
  Входной больше на $28,400 - $26,000 = $2,400, значит государство должно ВАМ
= Ответ: $2,400 Дт (актив: положен возврат)
! Частая ошибка: использовать платёж $90,000. Оплата поставщику не меняет счёт налога.`,
        uz: `Chiqish va kirish solig'ini topamiz. Yetkazib beruvchilarga to'lov ahamiyatsiz: soliq hisob-fakturalar kelganda yozilgan.
# 1-qadam: Chiqish solig'i (sotuv soliqsiz)
  $130,000 × 20% = $26,000
# 2-qadam: Kirish solig'i (xarid soliqli)
  $170,400 × 20/120 = $28,400
# 3-qadam: Solishtiramiz
  Kirish $28,400 - $26,000 = $2,400 ga ko'p, demak davlat SIZGA qarz
= Javob: $2,400 Dt (aktiv: qaytarish kerak)
! Ko'p uchraydigan xato: $90,000 to'lovni ishlatish. Yetkazib beruvchiga to'lov soliq hisobini o'zgartirmaydi.`,
      },
      options: ['$2,400 Dr', '$2,400 Cr', '$17,400 Dr', '$17,400 Cr'],
      correctIndex: 0,
    },
    {
      id: 'ch04-q136',
      kitRef: 136,
      topicId: 'chapter-04',
      type: 'single',
      text: 'Which statement is correct?',
      explanation: {
        en: `"Carriage" means transport. Both directions cost the business money.
- Carriage inwards: bringing goods IN from suppliers. An expense, shown in cost of sales.
- Carriage outwards: delivering goods OUT to customers. An expense, shown with other expenses.
= Answer: carriage inwards and carriage outwards are both expenses
! Common trap: thinking "outwards" is income because goods go out. You pay for the delivery, so it is a cost.`,
        ru: `«Carriage» — перевозка. В обе стороны она стоит бизнесу денег.
- Доставка от поставщика: товар ВХОДИТ в бизнес. Расход, показывается в себестоимости.
- Доставка покупателям: товар ВЫХОДИТ к покупателям. Расход, показывается среди прочих расходов.
= Ответ: и доставка от поставщика, и доставка покупателям — расходы
! Частая ошибка: считать доставку покупателям доходом, раз товар уходит. Вы платите за доставку, это затрата.`,
        uz: `«Carriage» — tashish. Ikkala yo'nalishda ham biznesga pul turadi.
- Yetkazib beruvchidan tashish: tovar biznesga KIRADI. Xarajat, tannarxda ko'rsatiladi.
- Mijozlarga tashish: tovar mijozlarga CHIQADI. Xarajat, boshqa xarajatlar bilan ko'rsatiladi.
= Javob: ikkalasi ham xarajat
! Ko'p uchraydigan xato: tovar chiqgani uchun mijozlarga tashishni daromad deb o'ylash. Yetkazish uchun siz to'laysiz, bu xarajat.`,
      },
      options: [
        'Carriage inwards and carriage outwards are both expenses',
        'Carriage inwards is income and carriage outwards is an expense',
        'Carriage inwards and carriage outwards are both income',
        'Carriage inwards is an expense and carriage outwards is income',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q137',
      kitRef: 137,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A customer returned unsatisfactory goods that had been sold on credit at $150 plus sales tax of $30. What entries does the seller make?',
      explanation: {
        en: `The SELLER takes goods back, so this is returns INWARD (goods coming back in).
# The entries
  Reverse the sale at net: Dr Returns inward $150
  The tax is no longer owed: Dr Sales tax $30
  The customer owes less, gross: Cr Receivables $180
= Answer: Dr Returns inward $150, Dr Sales tax $30, Cr Receivables $180
! Common trap: returns outward. That is for goods YOU send back to YOUR supplier.`,
        ru: `ПРОДАВЕЦ забирает товар обратно, значит это возвраты покупателей (товар приходит обратно).
# Проводки
  Отменяем продажу без налога: Дт Возвраты покупателей $150
  Налог больше не должен: Дт Налог с продаж $30
  Покупатель должен меньше, с налогом: Кт Дебиторы $180
= Ответ: Дт Возвраты покупателей $150, Дт Налог с продаж $30, Кт Дебиторы $180
! Частая ошибка: возвраты поставщикам. Это для товара, который ВЫ возвращаете СВОЕМУ поставщику.`,
        uz: `SOTUVCHI tovarni qaytarib oladi, demak bu sotuv qaytarishlari (tovar qaytib kiradi).
# Yozuvlar
  Sotuvni soliqsiz bekor qilamiz: Dt Sotuv qaytarishlari $150
  Soliq endi qarz emas: Dt Sotuv solig'i $30
  Mijoz soliqli summaga kam qarz: Kt Debitorlar $180
= Javob: Dt Sotuv qaytarishlari $150, Dt Sotuv solig'i $30, Kt Debitorlar $180
! Ko'p uchraydigan xato: xarid qaytarishlari. Bu SIZ O'Z yetkazib beruvchingizga qaytargan tovar uchun.`,
      },
      options: [
        'Dr Returns outward $150, Dr Sales tax $30, Cr Receivables $180',
        'Dr Returns inward $150, Dr Sales tax $30, Cr Receivables $180',
        'Dr Purchases $150, Dr Sales tax $30, Cr Receivables $180',
        'Dr Receivables $180, Cr Returns outward $150, Cr Sales tax $30',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q138',
      kitRef: 138,
      topicId: 'chapter-04',
      type: 'number',
      text: 'A registered business sold goods with a tax-exclusive price of $900 on credit, and reduced the price by 8% because of the large order. It charges sales tax at 25%. What is the gross value of the invoice?',
      explanation: {
        en: `The 8% reduction for a large order is a trade discount, so it comes off before tax.
# Step 1: Trade discount
  $900 × 92% = $828
# Step 2: Tax on the discounted price
  $828 × 25% = $207
# Step 3: The invoice total
  $828 + $207 = $1,035
= Answer: $1,035`,
        ru: `Скидка 8% за крупный заказ — торговая, её вычитают до налога.
# Шаг 1: Торговая скидка
  $900 × 92% = $828
# Шаг 2: Налог с цены после скидки
  $828 × 25% = $207
# Шаг 3: Итог счёта
  $828 + $207 = $1,035
= Ответ: $1,035`,
        uz: `Katta buyurtma uchun 8% chegirma — savdo chegirmasi, u soliqdan oldin ayiriladi.
# 1-qadam: Savdo chegirmasi
  $900 × 92% = $828
# 2-qadam: Chegirmadan keyingi narxga soliq
  $828 × 25% = $207
# 3-qadam: Hisob jami
  $828 + $207 = $1,035
= Javob: $1,035`,
      },
      correctValue: 1035,
      answerText: '$1,035',
    },
    {
      id: 'ch04-q139',
      kitRef: 139,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company sold goods with a list price of $1,200, with a 5% trade discount and a 4% settlement discount for paying within 7 days. The customer was not expected to take the settlement discount, but paid within 7 days and was entitled to it. Which entries record the settlement?',
      explanation: {
        en: `Not expected to pay early, but did. So the invoice was bigger than what arrived.
# Step 1: What was invoiced (no early payment expected)
  Trade discount only: $1,200 × 95% = $1,140
# Step 2: What the customer paid (took the 4%)
  $1,140 × 96% = $1,094.40
# Step 3: The entry
  Cash received: Dr Bank $1,094.40
  The shortfall $1,140 - $1,094.40 = $45.60 reduces revenue: Dr Revenue $45.60
  Clear the whole receivable: Cr Receivables $1,140
= Answer: Dr Bank $1,094.40, Dr Revenue $45.60, Cr Receivables $1,140`,
        ru: `Ранней оплаты не ожидали, а она случилась. Значит счёт был больше, чем пришло денег.
# Шаг 1: Что выставили (ранней оплаты не ждали)
  Только торговая скидка: $1,200 × 95% = $1,140
# Шаг 2: Что заплатил покупатель (взял 4%)
  $1,140 × 96% = $1,094.40
# Шаг 3: Проводка
  Получены деньги: Дт Банк $1,094.40
  Недостача $1,140 - $1,094.40 = $45.60 уменьшает выручку: Дт Выручка $45.60
  Закрываем всю дебиторку: Кт Дебиторы $1,140
= Ответ: Дт Банк $1,094.40, Дт Выручка $45.60, Кт Дебиторы $1,140`,
        uz: `Erta to'lov kutilmagan, lekin bo'ldi. Demak hisob kelgan puldan katta edi.
# 1-qadam: Nima yozilgan (erta to'lov kutilmagan)
  Faqat savdo chegirmasi: $1,200 × 95% = $1,140
# 2-qadam: Mijoz nima to'ladi (4% ni oldi)
  $1,140 × 96% = $1,094.40
# 3-qadam: Yozuv
  Pul olindi: Dt Bank $1,094.40
  Kamomad $1,140 - $1,094.40 = $45.60 tushumni kamaytiradi: Dt Tushum $45.60
  Butun debitorlikni yopamiz: Kt Debitorlar $1,140
= Javob: Dt Bank $1,094.40, Dt Tushum $45.60, Kt Debitorlar $1,140`,
      },
      options: [
        'Dr Bank $1,094.40, Cr Receivables $1,094.40',
        'Dr Bank $1,140, Dr Revenue $60, Cr Receivables $1,200',
        'Dr Bank $1,140, Cr Revenue $45.60, Cr Receivables $1,094.40',
        'Dr Bank $1,094.40, Dr Revenue $45.60, Cr Receivables $1,140',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q140',
      kitRef: 140,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company sold goods with a list price of $3,000, with a 5% trade discount and a 4% settlement discount for paying within 7 days. The customer was expected to take the settlement discount, and paid within 7 days. Which entries record the settlement?',
      explanation: {
        en: `Expected to pay early, and did. So the invoice and the payment are the same.
# Step 1: What was invoiced (early payment expected, both discounts off)
  $3,000 × 95% = $2,850, then × 96% = $2,736
# Step 2: What the customer paid
  Exactly $2,736
= Answer: Dr Bank $2,736, Cr Receivables $2,736
Everything happened as expected, so revenue does not change.`,
        ru: `Раннюю оплату ожидали, и она была. Значит счёт и оплата совпадают.
# Шаг 1: Что выставили (ждали раннюю оплату, обе скидки)
  $3,000 × 95% = $2,850, затем × 96% = $2,736
# Шаг 2: Что заплатил покупатель
  Ровно $2,736
= Ответ: Дт Банк $2,736, Кт Дебиторы $2,736
Всё прошло как ожидалось, поэтому выручка не меняется.`,
        uz: `Erta to'lov kutilgan va bo'ldi. Demak hisob va to'lov bir xil.
# 1-qadam: Nima yozilgan (erta to'lov kutilgan, ikkala chegirma)
  $3,000 × 95% = $2,850, keyin × 96% = $2,736
# 2-qadam: Mijoz nima to'ladi
  Aynan $2,736
= Javob: Dt Bank $2,736, Kt Debitorlar $2,736
Hammasi kutilgandek bo'ldi, shuning uchun tushum o'zgarmaydi.`,
      },
      options: [
        'Dr Bank $2,736, Dr Revenue $114, Cr Receivables $2,850',
        'Dr Bank $2,736, Cr Receivables $2,736',
        'Dr Bank $2,850, Dr Revenue $150, Cr Receivables $3,000',
        'Dr Bank $3,000, Cr Receivables $3,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch04-q141',
      kitRef: 141,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company sold goods with a list price of $5,000, with a 5% trade discount and a 4% settlement discount for paying within 7 days. The customer was expected to take the settlement discount, but did not pay within 7 days. Which entries record the settlement?',
      explanation: {
        en: `Expected to pay early, but paid late. So more money arrived than was invoiced.
# Step 1: What was invoiced (both discounts off)
  $5,000 × 95% = $4,750, then × 96% = $4,560
# Step 2: What the customer must pay when late
  Trade discount only: $4,750
# Step 3: The entry
  Cash received: Dr Bank $4,750
  Clear the receivable: Cr Receivables $4,560
  The extra $4,750 - $4,560 = $190 is more revenue: Cr Revenue $190
= Answer: Dr Bank $4,750, Cr Receivables $4,560, Cr Revenue $190
! Common trap: "discount received". That account is only for a BUYER.`,
        ru: `Раннюю оплату ожидали, а заплатили поздно. Значит денег пришло больше, чем выставили.
# Шаг 1: Что выставили (обе скидки)
  $5,000 × 95% = $4,750, затем × 96% = $4,560
# Шаг 2: Сколько надо заплатить при опоздании
  Только с торговой скидкой: $4,750
# Шаг 3: Проводка
  Получены деньги: Дт Банк $4,750
  Закрываем дебиторку: Кт Дебиторы $4,560
  Лишние $4,750 - $4,560 = $190 — дополнительная выручка: Кт Выручка $190
= Ответ: Дт Банк $4,750, Кт Дебиторы $4,560, Кт Выручка $190
! Частая ошибка: «полученные скидки». Этот счёт только для ПОКУПАТЕЛЯ.`,
        uz: `Erta to'lov kutilgan, lekin kech to'landi. Demak yozilganidan ko'p pul keldi.
# 1-qadam: Nima yozilgan (ikkala chegirma)
  $5,000 × 95% = $4,750, keyin × 96% = $4,560
# 2-qadam: Kechikkanda qancha to'lash kerak
  Faqat savdo chegirmasi bilan: $4,750
# 3-qadam: Yozuv
  Pul olindi: Dt Bank $4,750
  Debitorlikni yopamiz: Kt Debitorlar $4,560
  Ortiqcha $4,750 - $4,560 = $190 — qo'shimcha tushum: Kt Tushum $190
= Javob: Dt Bank $4,750, Kt Debitorlar $4,560, Kt Tushum $190
! Ko'p uchraydigan xato: «olingan chegirma». Bu hisob faqat XARIDOR uchun.`,
      },
      options: [
        'Dr Bank $4,750, Cr Receivables $4,560, Cr Revenue $190',
        'Dr Bank $4,560, Dr Revenue $440, Cr Receivables $5,000',
        'Dr Bank $4,750, Dr Discount received $190, Cr Receivables $4,560',
        'Dr Bank $4,750, Cr Receivables $4,750',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch04-q142',
      kitRef: 142,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company sold goods with a list price of $3,200, with a 5% trade discount and a 4% settlement discount for paying within 7 days. The customer was not expected to pay early and, as expected, did not. Which entries record the settlement?',
      explanation: {
        en: `Not expected to pay early, and did not. Everything as expected.
# Step 1: What was invoiced (trade discount only)
  $3,200 × 95% = $3,040
# Step 2: What the customer paid (late, so no settlement discount)
  $3,040
= Answer: Dr Bank $3,040, Cr Receivables $3,040
Invoice and payment match, so revenue does not change.`,
        ru: `Ранней оплаты не ждали, и её не было. Всё как ожидалось.
# Шаг 1: Что выставили (только торговая скидка)
  $3,200 × 95% = $3,040
# Шаг 2: Что заплатил покупатель (поздно, без скидки за оплату)
  $3,040
= Ответ: Дт Банк $3,040, Кт Дебиторы $3,040
Счёт и оплата совпадают, выручка не меняется.`,
        uz: `Erta to'lov kutilmagan va bo'lmadi. Hammasi kutilgandek.
# 1-qadam: Nima yozilgan (faqat savdo chegirmasi)
  $3,200 × 95% = $3,040
# 2-qadam: Mijoz nima to'ladi (kech, to'lov chegirmasisiz)
  $3,040
= Javob: Dt Bank $3,040, Kt Debitorlar $3,040
Hisob va to'lov mos, tushum o'zgarmaydi.`,
      },
      options: [
        'Dr Bank $2,918.40, Cr Receivables $2,918.40',
        'Dr Bank $3,040, Cr Discount received $121.60, Cr Receivables $2,918.40',
        'Dr Bank $3,040, Cr Receivables $3,040',
        'Dr Bank $3,040, Dr Revenue $160, Cr Receivables $3,200',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q143',
      kitRef: 143,
      topicId: 'chapter-04',
      type: 'single',
      text: 'A company sold goods with a list price of $1,600, with a 4% trade discount and a 5% settlement discount for paying within 7 days. The customer was expected to take the settlement discount, but did not pay in time. Which entries record the settlement?',
      explanation: {
        en: `Expected to pay early, but paid late: the same pattern as before, with different numbers.
# Step 1: What was invoiced (both discounts off)
  $1,600 × 96% = $1,536 (trade discount), then × 95% = $1,459.20
# Step 2: What is due when paid late
  Trade discount only: $1,536
# Step 3: The entry
  Dr Bank $1,536
  Cr Receivables $1,459.20
  The extra $1,536 - $1,459.20 = $76.80: Cr Revenue $76.80
= Answer: Dr Bank $1,536, Cr Receivables $1,459.20, Cr Revenue $76.80
! Watch the numbers: here the trade discount is 4% and the settlement discount 5%.`,
        ru: `Ожидали раннюю оплату, а заплатили поздно: та же схема, другие цифры.
# Шаг 1: Что выставили (обе скидки)
  $1,600 × 96% = $1,536 (торговая скидка), затем × 95% = $1,459.20
# Шаг 2: Что положено при опоздании
  Только с торговой скидкой: $1,536
# Шаг 3: Проводка
  Дт Банк $1,536
  Кт Дебиторы $1,459.20
  Лишние $1,536 - $1,459.20 = $76.80: Кт Выручка $76.80
= Ответ: Дт Банк $1,536, Кт Дебиторы $1,459.20, Кт Выручка $76.80
! Следите за цифрами: здесь торговая скидка 4%, а за раннюю оплату 5%.`,
        uz: `Erta to'lov kutilgan, lekin kech to'landi: xuddi shu sxema, boshqa sonlar.
# 1-qadam: Nima yozilgan (ikkala chegirma)
  $1,600 × 96% = $1,536 (savdo chegirmasi), keyin × 95% = $1,459.20
# 2-qadam: Kechikkanda nima to'lanadi
  Faqat savdo chegirmasi bilan: $1,536
# 3-qadam: Yozuv
  Dt Bank $1,536
  Kt Debitorlar $1,459.20
  Ortiqcha $1,536 - $1,459.20 = $76.80: Kt Tushum $76.80
= Javob: Dt Bank $1,536, Kt Debitorlar $1,459.20, Kt Tushum $76.80
! Sonlarga e'tibor bering: bu yerda savdo chegirmasi 4%, to'lov chegirmasi 5%.`,
      },
      options: [
        'Dr Bank $1,600, Cr Receivables $1,600',
        'Dr Bank $1,459.20, Cr Receivables $1,459.20',
        'Dr Bank $1,536, Cr Receivables $1,536',
        'Dr Bank $1,536, Cr Receivables $1,459.20, Cr Revenue $76.80',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch04-q144',
      kitRef: 144,
      topicId: 'chapter-04',
      type: 'single',
      text: 'What does the imprest system of petty cash mean?',
      explanation: {
        en: `"Imprest" means one thing: keep a FIXED float by putting back EXACTLY what was spent.
- Equal amounts at regular intervals: no, the top-up changes with the spending.
- All spending authorised: good practice, but not what "imprest" means.
- Put back the exact amount spent to keep a fixed float: correct.
- A weekly spending limit: not what it means.
= Answer: the exact amount spent is put back at intervals to keep a fixed float`,
        ru: `«Имприст» означает одно: держать ФИКСИРОВАННЫЙ аванс, возвращая РОВНО потраченное.
- Равные суммы через равные промежутки: нет, пополнение зависит от расходов.
- Все расходы утверждаются: хорошая практика, но не смысл «имприст».
- Возвращают ровно потраченное, чтобы аванс был фиксированным: верно.
- Недельный лимит расходов: не это значение.
= Ответ: через промежутки возвращают ровно потраченную сумму, сохраняя фиксированный аванс`,
        uz: `«Imprest» bitta narsani bildiradi: sarflanganini AYNAN qaytarib, QAT'IY avansni saqlash.
- Muntazam teng summalar: yo'q, to'ldirish xarajatga bog'liq.
- Barcha xarajat tasdiqlanadi: yaxshi amaliyot, lekin «imprest» ma'nosi emas.
- Qat'iy avansni saqlash uchun aynan sarflangani qaytariladi: to'g'ri.
- Haftalik xarajat chegarasi: bu ma'no emas.
= Javob: qat'iy avansni saqlash uchun vaqti-vaqti bilan aynan sarflangan summa qaytariladi`,
      },
      options: [
        'Equal amounts are moved into petty cash at regular intervals',
        'All spending from petty cash must be properly authorised',
        'The exact amount spent is put back at intervals to keep a fixed float',
        'Weekly spending cannot be more than a set amount',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch04-q145',
      kitRef: 145,
      topicId: 'chapter-04',
      type: 'number',
      text: 'A business uses the imprest system. On 1 July the float was $200, and it was decided to raise it to $300 from 31 July. In July the cashier received $30 from staff for using the photocopier, and cashed a cheque of $110 for an employee. Cheques of $600 were drawn for petty cash. How much was paid out as cash expenses in July?',
      explanation: {
        en: `Follow all the cash that went into petty cash, then take away everything that is not an expense.
# Step 1: All money available in July
  Opening float $200 + photocopier money $30 + cheques drawn $600 = $830
# Step 2: Take away money that was not an expense
  Cheque cashed for an employee: - $110
  Cash left at the end (the new float): - $300
# Step 3: What remains was spent on expenses
  $830 - $110 - $300 = $420
= Answer: $420
! Common trap: using the old float of $200 at the end. The float was raised, so $300 must remain.`,
        ru: `Проследите все деньги, пришедшие в мелкую кассу, и уберите всё, что не расход.
# Шаг 1: Все доступные деньги за июль
  Аванс на начало $200 + деньги за ксерокс $30 + полученные чеки $600 = $830
# Шаг 2: Убираем то, что не расход
  Чек, обналиченный для сотрудника: - $110
  Остаток на конец (новый аванс): - $300
# Шаг 3: Остальное потрачено на расходы
  $830 - $110 - $300 = $420
= Ответ: $420
! Частая ошибка: взять старый аванс $200 на конец. Аванс увеличили, должно остаться $300.`,
        uz: `Mayda kassaga kirgan barcha pulni kuzatib, xarajat bo'lmaganlarni ayiring.
# 1-qadam: Iyuldagi barcha mavjud pul
  Boshlang'ich avans $200 + nusxa ko'chirish puli $30 + olingan cheklar $600 = $830
# 2-qadam: Xarajat bo'lmaganini ayiramiz
  Xodim uchun naqdlashtirilgan chek: - $110
  Oxiridagi qoldiq (yangi avans): - $300
# 3-qadam: Qolgani xarajatga ketgan
  $830 - $110 - $300 = $420
= Javob: $420
! Ko'p uchraydigan xato: oxirida eski $200 avansni olish. Avans oshirilgan, $300 qolishi kerak.`,
      },
      correctValue: 420,
      answerText: '$420',
    },
    {
      id: 'ch04-q146',
      kitRef: 146,
      topicId: 'chapter-04',
      type: 'number',
      text: 'A business uses the imprest method for petty cash. It counted $84.00 in hand. There were also these vouchers: sundry purchases $28.00, loan to a sales manager $15.00, staff drinks $23.00 and sundry sales receipts $55.00. What is the imprest amount?',
      explanation: {
        en: `The float = cash in hand + everything paid out - anything that came in.
# Step 1: Cash still in hand
  $84
# Step 2: Add back everything paid out
  Sundry purchases $28 + loan to the sales manager $15 + staff drinks $23 = $66
  $84 + $66 = $150
# Step 3: Take off money that came IN
  Sundry sales receipts put $55 into the tin: $150 - $55 = $95
= Answer: $95
! Common trap: adding the $55 receipts. They increased the cash, so they must come off.`,
        ru: `Аванс = деньги в наличии + всё выплаченное - всё поступившее.
# Шаг 1: Деньги в наличии
  $84
# Шаг 2: Прибавим всё выплаченное
  Прочие покупки $28 + заём менеджеру $15 + напитки персоналу $23 = $66
  $84 + $66 = $150
# Шаг 3: Вычтем поступившее
  Прочие поступления от продаж добавили в кассу $55: $150 - $55 = $95
= Ответ: $95
! Частая ошибка: прибавить поступления $55. Они увеличили деньги, их надо вычесть.`,
        uz: `Avans = qo'ldagi pul + barcha to'langan - barcha kirgan.
# 1-qadam: Qo'ldagi pul
  $84
# 2-qadam: Barcha to'langanni qo'shamiz
  Turli xaridlar $28 + menejerga qarz $15 + xodimlar ichimligi $23 = $66
  $84 + $66 = $150
# 3-qadam: Kirganini ayiramiz
  Turli sotuv tushumlari qutiga $55 qo'shgan: $150 - $55 = $95
= Javob: $95
! Ko'p uchraydigan xato: $55 tushumni qo'shish. Ular pulni oshirgan, ayirish kerak.`,
      },
      correctValue: 95,
      answerText: '$95.00',
    },
    {
      id: 'ch04-q147',
      kitRef: 147,
      topicId: 'chapter-04',
      type: 'number',
      text: 'A business runs an imprest petty cash system with a float of $300. This month it paid postage $18, newspapers $7 and a window cleaner $12, and an employee repaid $4 for a personal expense. How much cash must be paid into petty cash at the end of the month?',
      explanation: {
        en: `The top-up is whatever brings the tin back to the $300 float.
# Step 1: Paid out
  Postage $18 + newspapers $7 + window cleaner $12 = $37
# Step 2: Paid in
  The employee repaid $4
# Step 3: How short the tin is
  $37 - $4 = $33
= Answer: $33 must be paid in`,
        ru: `Пополнение — то, что возвращает коробку к авансу $300.
# Шаг 1: Выплачено
  Почта $18 + газеты $7 + мойщик окон $12 = $37
# Шаг 2: Поступило
  Сотрудник вернул $4
# Шаг 3: Сколько не хватает
  $37 - $4 = $33
= Ответ: нужно внести $33`,
        uz: `To'ldirish — qutini $300 avansga qaytaradigan summa.
# 1-qadam: To'langan
  Pochta $18 + gazetalar $7 + deraza tozalovchi $12 = $37
# 2-qadam: Kirgan
  Xodim $4 qaytardi
# 3-qadam: Qancha yetishmaydi
  $37 - $4 = $33
= Javob: $33 qo'shish kerak`,
      },
      correctValue: 33,
      answerText: '$33',
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
