'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025): petty cash (3.18, 3.19)
// and section 5, sales tax, reworded with new figures. bppRef/bppPage point to BPP's own answer.
// 5.1 is left out: it needs zero-rated and exempt rules, which Kaplan says are not examined in detail.
(function () {
  const TOPIC = 'chapter-04';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp04-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('3.18', 199, 'single', `Which statement about the imprest system for petty cash is correct?`,
      pick([
        'It controls spending because the same fixed amount is paid into petty cash at the start of every period.',
        'It controls spending because the cash held must always equal the value of the vouchers for the period.',
        'It can work without vouchers or receipts for the spending.',
        'It helps manage small cash spending and reduces the risk of fraud.',
      ], 3),
`Recall how imprest works: cash in the tin + vouchers = the fixed float, at any time. At the end of the period the float is topped up by the amount spent.
- The same amount every period: no. The top-up equals what was spent, so it changes.
- Cash = vouchers: no. Cash PLUS vouchers equals the float.
- No vouchers needed: no. Vouchers are what make the check possible.
- Helps manage small spending and reduces fraud: yes. Any shortage shows up at once.
= Answer: it helps manage small cash spending and reduces the risk of fraud`,
`Вспомним, как работает импрест: наличные в кассе + ваучеры = фиксированный аванс, в любой момент. В конце периода аванс пополняют на потраченную сумму.
- Одна и та же сумма каждый период: нет. Пополнение равно потраченному, поэтому меняется.
- Наличные = ваучеры: нет. Наличные ПЛЮС ваучеры равны авансу.
- Ваучеры не нужны: нет. Именно ваучеры позволяют проверку.
- Помогает управлять мелкими расходами и снижает риск мошенничества: да. Недостача видна сразу.
= Ответ: помогает управлять мелкими расходами и снижает риск мошенничества`,
`Imprest qanday ishlashini eslaymiz: kassadagi naqd + vaucherlar = belgilangan avans, istalgan paytda. Davr oxirida avans sarflangan summaga to'ldiriladi.
- Har davr bir xil summa: yo'q. To'ldirish sarflanganga teng, shuning uchun o'zgaradi.
- Naqd = vaucherlar: yo'q. Naqd PLYUS vaucherlar avansga teng.
- Vaucher kerak emas: yo'q. Tekshiruvni aynan vaucherlar ta'minlaydi.
- Mayda xarajatlarni boshqarishga yordam beradi va firibgarlik xavfini kamaytiradi: ha. Kamomad darhol ko'rinadi.
= Javob: mayda naqd xarajatlarni boshqarishga yordam beradi va firibgarlik xavfini kamaytiradi`),

    q('3.19', 199, 'single', `Which of these shows that a petty cash payment was approved?`,
      pick([
        'The petty cash voucher',
        'The entry in the petty cash record',
        'The receipt for the expense',
        'The transfer from the bank into petty cash',
      ], 0),
`Ask what each item proves.
- Petty cash voucher: the signed slip that authorises the payment. YES.
- The petty cash record: shows the payment was written down, not that it was approved.
- The receipt: proves how much was spent, not who approved it.
- The bank transfer: just tops up the float.
= Answer: the petty cash voucher`,
`Спросим, что доказывает каждый документ.
- Кассовый ваучер: подписанный листок, разрешающий выплату. ДА.
- Запись в журнале кассы: показывает, что выплату записали, а не одобрили.
- Чек: доказывает, сколько потратили, а не кто одобрил.
- Перевод из банка: просто пополняет аванс.
= Ответ: кассовый ваучер`,
`Har biri nimani isbotlashini so'raymiz.
- Kassa vaucheri: to'lovga ruxsat beruvchi imzolangan varaqa. HA.
- Kichik kassa yozuvi: to'lov yozilganini ko'rsatadi, tasdiqlanganini emas.
- Chek: qancha sarflanganini isbotlaydi, kim tasdiqlaganini emas.
- Bankdan o'tkazma: shunchaki avansni to'ldiradi.
= Javob: kassa vaucheri`),

    q('5.2', 202, 'number', `For June, a company's sales were $92,000 including sales tax, and its purchases were $52,000 excluding sales tax. Sales tax is 15%. The sales tax account had a credit balance of $3,850 at the start of June and a debit balance of $1,940 at the end. How much sales tax was paid to the tax authority in June? (in $)`,
      amount(9990, '$9,990'),
`# Step 1: Output tax on sales (price includes tax)
  92,000 x 15/115 = 12,000
# Step 2: Input tax on purchases (price excludes tax)
  52,000 x 15% = 7,800
# Step 3: Fill in the sales tax account
  Credit side: opening 3,850 + output tax 12,000 = 15,850
  Debit side: input tax 7,800 + cash paid
  The closing DEBIT balance of 1,940 means debits are 1,940 more than credits.
  7,800 + cash paid = 15,850 + 1,940 = 17,790
# Step 4: Solve
  Cash paid = 17,790 - 7,800 = 9,990
= Answer: $9,990
! For a tax-inclusive price use 15/115, not 15%.`,
`# Шаг 1: Налог с продаж (цена включает налог)
  92 000 x 15/115 = 12 000
# Шаг 2: Входящий налог по закупкам (цена без налога)
  52 000 x 15% = 7 800
# Шаг 3: Заполним счёт налога с продаж
  Кредит: начало 3 850 + налог с продаж 12 000 = 15 850
  Дебет: входящий налог 7 800 + уплачено
  Конечный ДЕБЕТОВЫЙ остаток 1 940 значит, что дебет больше кредита на 1 940.
  7 800 + уплачено = 15 850 + 1 940 = 17 790
# Шаг 4: Решим
  Уплачено = 17 790 - 7 800 = 9 990
= Ответ: $9 990
! Для цены с налогом берите 15/115, а не 15%.`,
`# 1-qadam: Sotuvdan soliq (narx soliqni o'z ichiga oladi)
  92 000 x 15/115 = 12 000
# 2-qadam: Xaridlar bo'yicha kiruvchi soliq (narx soliqsiz)
  52 000 x 15% = 7 800
# 3-qadam: Sotuv solig'i hisobini to'ldiramiz
  Kredit: boshi 3 850 + sotuv solig'i 12 000 = 15 850
  Debet: kiruvchi soliq 7 800 + to'langan
  Yakuniy DEBET qoldiq 1 940 debet kreditdan 1 940 ga ko'pligini bildiradi.
  7 800 + to'langan = 15 850 + 1 940 = 17 790
# 4-qadam: Yechamiz
  To'langan = 17 790 - 7 800 = 9 990
= Javob: $9 990
! Soliq kiritilgan narx uchun 15% emas, 15/115 oling.`),

    q('5.3', 202, 'single', `Dilnoza runs a shop that is NOT registered for sales tax. She receives an invoice for goods for resale: $640 plus sales tax at 15%, so $736 in total. What does she record in her general ledger?`,
      pick([
        'Dr Purchases $640, Dr Sales tax $96, Cr Payables $736',
        'Dr Purchases $736, Cr Sales tax $96, Cr Payables $640',
        'Dr Purchases $640, Cr Payables $640',
        'Dr Purchases $736, Cr Payables $736',
      ], 3),
`# Step 1: Can she get the tax back?
  Only a business registered for sales tax recovers the tax it pays on purchases. She is not registered, so the $96 is simply part of her cost.
# Step 2: The entry
  Dr Purchases $736, Cr Payables $736
= Answer: Dr Purchases $736, Cr Payables $736
! She still owes the supplier the full $736, so payables cannot be $640.`,
`# Шаг 1: Может ли она вернуть налог?
  Возмещает налог по закупкам только бизнес, зарегистрированный по налогу с продаж. Она не зарегистрирована, поэтому $96 — просто часть её затрат.
# Шаг 2: Проводка
  Дт Закупки $736, Кт Кредиторы $736
= Ответ: Дт Закупки $736, Кт Кредиторы $736
! Поставщику она всё равно должна полные $736, поэтому кредиторы не могут быть $640.`,
`# 1-qadam: U soliqni qaytarib ola oladimi?
  Xarid solig'ini faqat sotuv solig'i bo'yicha ro'yxatdan o'tgan biznes qaytaradi. U ro'yxatdan o'tmagan, shuning uchun $96 shunchaki uning xarajati.
# 2-qadam: Yozuv
  Dt Xaridlar $736, Kt Kreditorlar $736
= Javob: Dt Xaridlar $736, Kt Kreditorlar $736
! U yetkazib beruvchiga baribir to'liq $736 qarzdor, shuning uchun kreditorlar $640 bo'lolmaydi.`),

    q('5.4', 202, 'single', `For May, a company's sales were $168,000 including sales tax. Of this, $24,000 was sales exempt from sales tax. Purchases were $70,000 excluding sales tax. Sales tax is 20%. The sales tax account had a nil balance at both the start and the end of May. How much tax was paid to the tax authority?`,
      pick(['$10,000', '$14,000', '$24,000', '$14,800'], 0),
`# Step 1: Sales that carry tax
  168,000 - 24,000 exempt = 144,000 (this figure includes tax)
# Step 2: Output tax
  144,000 x 20/120 = 24,000
# Step 3: Input tax
  70,000 x 20% = 14,000
# Step 4: The balance started and ended at nil, so the whole difference was paid
  24,000 - 14,000 = 10,000
= Answer: $10,000
! Using 20% instead of 20/120 on a tax-inclusive figure gives $14,800.`,
`# Шаг 1: Продажи с налогом
  168 000 - 24 000 освобождённых = 144 000 (сумма включает налог)
# Шаг 2: Налог с продаж
  144 000 x 20/120 = 24 000
# Шаг 3: Входящий налог
  70 000 x 20% = 14 000
# Шаг 4: Остаток был нулевым в начале и в конце, значит уплачена вся разница
  24 000 - 14 000 = 10 000
= Ответ: $10 000
! Если взять 20%, а не 20/120, от суммы с налогом, выйдет $14 800.`,
`# 1-qadam: Soliqli sotuvlar
  168 000 - 24 000 ozod qilingan = 144 000 (summa soliqni o'z ichiga oladi)
# 2-qadam: Sotuv solig'i
  144 000 x 20/120 = 24 000
# 3-qadam: Kiruvchi soliq
  70 000 x 20% = 14 000
# 4-qadam: Qoldiq boshida va oxirida nol, demak butun farq to'langan
  24 000 - 14 000 = 10 000
= Javob: $10 000
! Soliqli summaga 20/120 o'rniga 20% olsangiz, $14 800 chiqadi.`),

    q('5.5', 202, 'single', `A business starts with $2,000 cash from the owner. It buys inventory for $1,200 plus sales tax on credit. It then sells half of that inventory for $1,500 plus sales tax, and the customer pays cash at once. Sales tax is 20%. What does the accounting equation show afterwards?`,
      pick([
        'Assets $4,400 - liabilities $1,500 = capital $2,900',
        'Assets $3,800 - liabilities $1,500 = capital $2,300',
        'Assets $4,400 - liabilities $1,200 = capital $3,200',
        'Assets $3,200 - liabilities $300 = capital $2,900',
      ], 0),
`# Step 1: Assets
  Cash: 2,000 + (1,500 + 300 tax) = 3,800
  Inventory left: 1,200 / 2 = 600
  Total assets: 3,800 + 600 = 4,400
# Step 2: Liabilities
  Owed to the supplier: 1,200 + 240 tax = 1,440
  Sales tax owed: output 300 - input 240 = 60
  Total liabilities: 1,440 + 60 = 1,500
# Step 3: Capital
  2,000 + profit (1,500 - cost 600) = 2,900
# Step 4: Check
  4,400 - 1,500 = 2,900
= Answer: assets $4,400 - liabilities $1,500 = capital $2,900
! Sales tax is never profit. Only the $1,500 net sale counts as income.`,
`# Шаг 1: Активы
  Деньги: 2 000 + (1 500 + 300 налог) = 3 800
  Остаток запасов: 1 200 / 2 = 600
  Итого активы: 3 800 + 600 = 4 400
# Шаг 2: Обязательства
  Долг поставщику: 1 200 + 240 налог = 1 440
  Налог к уплате: с продаж 300 - входящий 240 = 60
  Итого обязательства: 1 440 + 60 = 1 500
# Шаг 3: Капитал
  2 000 + прибыль (1 500 - себестоимость 600) = 2 900
# Шаг 4: Проверка
  4 400 - 1 500 = 2 900
= Ответ: активы $4 400 - обязательства $1 500 = капитал $2 900
! Налог с продаж никогда не прибыль. Доход — только чистая продажа $1 500.`,
`# 1-qadam: Aktivlar
  Pul: 2 000 + (1 500 + 300 soliq) = 3 800
  Qolgan zaxira: 1 200 / 2 = 600
  Jami aktivlar: 3 800 + 600 = 4 400
# 2-qadam: Majburiyatlar
  Yetkazib beruvchiga qarz: 1 200 + 240 soliq = 1 440
  To'lanadigan soliq: sotuvdan 300 - kiruvchi 240 = 60
  Jami majburiyatlar: 1 440 + 60 = 1 500
# 3-qadam: Kapital
  2 000 + foyda (1 500 - tannarx 600) = 2 900
# 4-qadam: Tekshiruv
  4 400 - 1 500 = 2 900
= Javob: aktivlar $4 400 - majburiyatlar $1 500 = kapital $2 900
! Sotuv solig'i hech qachon foyda emas. Daromad faqat sof sotuv $1 500.`),

    q('5.6', 203, 'single', `For a business registered for sales tax, how are trade receivables and trade payables shown in the statement of financial position?`,
      pick([
        'Including sales tax',
        'Excluding sales tax',
        'With the tax taken out and added to the sales tax account',
        'Without any sales tax, because the business only collects it for the authorities',
      ], 0),
`# Step 1: What the customer owes
  The customer must pay the full invoice, tax included.
# Step 2: What the business owes its supplier
  The business must pay the supplier the full invoice too.
= Answer: including sales tax
! Sales and purchases are shown WITHOUT tax. Receivables and payables are shown WITH it.`,
`# Шаг 1: Что должен покупатель
  Покупатель платит весь счёт, включая налог.
# Шаг 2: Что бизнес должен поставщику
  Бизнес тоже платит поставщику весь счёт.
= Ответ: включая налог с продаж
! Продажи и закупки показывают БЕЗ налога. Дебиторов и кредиторов — С налогом.`,
`# 1-qadam: Xaridor nima qarz
  Xaridor butun hisobni, soliq bilan birga to'laydi.
# 2-qadam: Biznes yetkazib beruvchiga nima qarz
  Biznes ham yetkazib beruvchiga butun hisobni to'laydi.
= Javob: sotuv solig'i bilan
! Sotuv va xaridlar soliqSIZ ko'rsatiladi. Debitor va kreditorlar soliq BILAN.`),

    q('5.7', 203, 'single', `For a business registered for sales tax, which describes the entry in the sales account for a sale?`,
      pick([
        'Credited with the sale including sales tax',
        'Credited with the sale excluding sales tax',
        'Debited with the sale including sales tax',
        'Debited with the sale excluding sales tax',
      ], 1),
`# Step 1: Which side?
  Sales is income, so it is credited.
# Step 2: Which amount?
  The tax belongs to the tax authority, so it goes to the sales tax account. Sales gets the net amount.
= Answer: credited with the sale excluding sales tax`,
`# Шаг 1: Какая сторона?
  Продажи — доход, поэтому кредит.
# Шаг 2: Какая сумма?
  Налог принадлежит налоговой, он идёт на счёт налога с продаж. На продажи — сумма без налога.
= Ответ: кредит на сумму продажи без налога`,
`# 1-qadam: Qaysi tomon?
  Sotuv — daromad, shuning uchun kredit.
# 2-qadam: Qaysi summa?
  Soliq soliq organiga tegishli, u sotuv solig'i hisobiga boradi. Sotuvga soliqsiz summa.
= Javob: soliqsiz sotuv summasiga kredit`),

    q('5.8', 203, 'single', `Sales including sales tax were $31,320 and purchases excluding sales tax were $21,600. All items carry sales tax at 20%. What is the balance on the sales tax account?`,
      pick(['$900 debit', '$900 credit', '$1,944 credit', '$1,944 debit'], 1),
`# Step 1: Output tax (price includes tax)
  31,320 x 20/120 = 5,220
# Step 2: Input tax (price excludes tax)
  21,600 x 20% = 4,320
# Step 3: Net balance
  5,220 - 4,320 = 900. Output is bigger, so the business owes the tax: a credit balance.
= Answer: $900 credit
! 31,320 x 20% = 6,264 is wrong because that price already includes tax. It leads to $1,944.`,
`# Шаг 1: Налог с продаж (цена включает налог)
  31 320 x 20/120 = 5 220
# Шаг 2: Входящий налог (цена без налога)
  21 600 x 20% = 4 320
# Шаг 3: Остаток
  5 220 - 4 320 = 900. Налог с продаж больше, бизнес должен налоговой: кредитовый остаток.
= Ответ: $900 кредит
! 31 320 x 20% = 6 264 — ошибка, ведь цена уже включает налог. Так выходит $1 944.`,
`# 1-qadam: Sotuv solig'i (narx soliqni o'z ichiga oladi)
  31 320 x 20/120 = 5 220
# 2-qadam: Kiruvchi soliq (narx soliqsiz)
  21 600 x 20% = 4 320
# 3-qadam: Qoldiq
  5 220 - 4 320 = 900. Sotuv solig'i katta, biznes soliq organiga qarzdor: kredit qoldiq.
= Javob: $900 kredit
! 31 320 x 20% = 6 264 xato, chunki narx allaqachon soliqni o'z ichiga oladi. Shunda $1 944 chiqadi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
