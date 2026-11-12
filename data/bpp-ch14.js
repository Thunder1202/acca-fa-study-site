'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 17
// "Correction of errors" and section 18 "Suspense accounts", rewritten with new figures. bppRef/bppPage point to BPP's own answer.
// Left out: 17.13 (BPP says a transposition shows in the trial balance; the current Kaplan text
// treats it as an error of original entry that does not) and 17.18 (control accounts, no longer
// in the Kaplan 2025-26 syllabus).
(function () {
  const TOPIC = 'chapter-14';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp14-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const two = (options, correctIndices) => ({ options, correctIndices });

  const questions = [
    q('17.1', 239, 'single', `The debit side of a trial balance totals $600 more than the credit side. Which ONE error would fully explain the difference?`,
      pick([
        `$300 paid for van repairs was correctly recorded in the bank account and credited to the van (asset) account`,
        `A $300 credit note issued to a customer was debited to trade receivables`,
        `A $600 receipt of commission was left out of the records completely`,
        `The petty cash balance of $600 was left out of the trial balance`,
      ], 1),
`Ask of each error: which side of the trial balance gets too much, and by how much?
- Repairs credited to the van account: bank was credited too, so there are two credits. The CREDIT side is $600 too big. Wrong side.
- Credit note debited to receivables: it should have been a credit. A $300 debit instead of a $300 credit puts the debit side 2 x $300 = $600 ahead. RIGHT.
- Commission left out completely: no debit and no credit, so the totals still agree.
- Petty cash ($600 debit) left out: the debit side is $600 too SMALL.
= Answer: the credit note debited to trade receivables
! Common trap: an entry on the wrong side is out by TWICE the amount, not once.`,
`Спросим о каждой ошибке: какая сторона ведомости получила лишнее и сколько?
- Ремонт кредитован на счёт фургона: банк тоже кредитован, получилось два кредита. КРЕДИТ больше на $600. Не та сторона.
- Кредит-нота в дебет дебиторов: нужен был кредит. $300 в дебет вместо $300 в кредит дают перевес дебета 2 x $300 = $600. ВЕРНО.
- Комиссия пропущена полностью: нет ни дебета, ни кредита, итоги совпадают.
- Мелкая касса ($600 дебет) не попала в ведомость: дебет МЕНЬШЕ на $600.
= Ответ: кредит-нота записана в дебет торговых дебиторов
! Частая ошибка: запись не на той стороне даёт разницу в ДВОЙНОМ размере, а не в одинарном.`,
`Har bir xato haqida so'raymiz: sinov balansining qaysi tomoni ortiqcha oldi va qanchaga?
- Ta'mir furgon hisobiga kreditlangan: bank ham kreditlangan, ikkita kredit bo'ldi. KREDIT $600 ko'p. Noto'g'ri tomon.
- Kredit-nota debitorlarga debetlangan: kredit bo'lishi kerak edi. $300 kredit o'rniga $300 debet debetni 2 x $300 = $600 oshiradi. TO'G'RI.
- Komissiya umuman yozilmagan: debet ham, kredit ham yo'q, jamlar mos.
- Kichik kassa ($600 debet) sinov balansiga kirmagan: debet $600 KAM.
= Javob: kredit-nota savdo debitorlariga debetlangan
! Ko'p uchraydigan xato: noto'g'ri tomondagi yozuv farqni IKKI BARAVAR beradi, bir marta emas.`),

    q('17.2', 239, 'single', `A bookkeeper made two mistakes. Sales returns of $250 should have been debited to sales returns, but were credited to purchases returns. Purchases returns of $190 should have been credited to purchases returns, but were debited to sales returns. The other side of each entry was correct, and the difference went to suspense. Which journal corrects the errors?`,
      pick([
        `Dr Sales returns $500, Cr Purchases returns $380, Cr Suspense $120`,
        `Dr Sales returns $60, Dr Purchases returns $60, Cr Suspense $120`,
        `Dr Sales returns $440, Cr Purchases returns $440`,
        `Dr Suspense $120, Cr Sales returns $60, Cr Purchases returns $60`,
      ], 1),
`Fix each account: what does it hold now, and what should it hold?
# Step 1: Sales returns
  Should hold: debit $250
  Holds now: debit $190 (the purchases returns put there by mistake)
  Needs: + $250 debit and - $190 debit = net DEBIT $60
# Step 2: Purchases returns
  Should hold: credit $190
  Holds now: credit $250 (the sales returns put there by mistake)
  Needs: - $250 credit and + $190 credit = net DEBIT $60
# Step 3: Balance the journal
  Debits $60 + $60 = $120, so credit suspense $120 to clear it
= Answer: Dr Sales returns $60, Dr Purchases returns $60, Cr Suspense $120
! Common trap: doubling the amounts ($500, $380). Each account only needs the gap between what it holds and what it should hold.`,
`Исправим каждый счёт: что в нём сейчас и что должно быть?
# Шаг 1: Возвраты покупателей
  Должно быть: дебет $250
  Сейчас: дебет $190 (ошибочно записанные возвраты поставщикам)
  Нужно: + $250 дебет и - $190 дебет = чистый ДЕБЕТ $60
# Шаг 2: Возвраты поставщикам
  Должно быть: кредит $190
  Сейчас: кредит $250 (ошибочно записанные возвраты покупателей)
  Нужно: - $250 кредит и + $190 кредит = чистый ДЕБЕТ $60
# Шаг 3: Уравняем проводку
  Дебет $60 + $60 = $120, значит кредитуем неясные суммы на $120
= Ответ: Дт Возвраты покупателей $60, Дт Возвраты поставщикам $60, Кт Неясные суммы $120
! Частая ошибка: удваивать суммы ($500, $380). Каждому счёту нужна только разница между тем, что есть, и тем, что должно быть.`,
`Har bir hisobni tuzatamiz: hozir nima bor va nima bo'lishi kerak?
# 1-qadam: Sotuv qaytarishlari
  Bo'lishi kerak: debet $250
  Hozir: debet $190 (xato yozilgan xarid qaytarishlari)
  Kerak: + $250 debet va - $190 debet = sof DEBET $60
# 2-qadam: Xarid qaytarishlari
  Bo'lishi kerak: kredit $190
  Hozir: kredit $250 (xato yozilgan sotuv qaytarishlari)
  Kerak: - $250 kredit va + $190 kredit = sof DEBET $60
# 3-qadam: Yozuvni tenglaymiz
  Debet $60 + $60 = $120, demak vaqtinchalik hisobni $120 kreditlaymiz
= Javob: Dt Sotuv qaytarishlari $60, Dt Xarid qaytarishlari $60, Kt Vaqtinchalik $120
! Ko'p uchraydigan xato: summalarni ikki baravar olish ($500, $380). Har bir hisobga faqat bor va bo'lishi kerak orasidagi farq kerak.`),

    q('17.3', 239, 'single', `A company's trial balance does not agree: debits total $642,300 and credits total $637,500. Which ONE error could fully explain the difference?`,
      pick([
        `The insurance expense balance of $4,800 (debit) was left out of the trial balance`,
        `Settlement discounts received of $2,400 were credited to purchases instead of discounts received`,
        `Cash sales of $4,800 were not recorded at all`,
        `The purchases returns balance of $2,400 was shown in the trial balance as a debit`,
      ], 3),
`# Step 1: The difference
  $642,300 - $637,500 = $4,800, with the DEBIT side bigger
# Step 2: Test each error
- Insurance debit left out: the debit side would be SMALLER. Wrong direction.
- Discount credited to purchases: credit is still a credit, so the totals agree (an error of commission).
- Cash sales not recorded: nothing on either side, so the totals agree.
- Purchases returns ($2,400 credit) shown as a debit: debits go up $2,400 and credits go down $2,400, a gap of $4,800 on the debit side. RIGHT.
= Answer: the purchases returns balance shown as a debit
! Common trap: a balance on the wrong side of the trial balance is out by TWICE the balance.`,
`# Шаг 1: Разница
  $642,300 - $637,500 = $4,800, больше ДЕБЕТ
# Шаг 2: Проверим каждую ошибку
- Дебет страхования пропущен: дебет был бы МЕНЬШЕ. Не то направление.
- Скидка в кредит закупок: кредит остаётся кредитом, итоги совпадают (ошибка счёта).
- Наличные продажи не записаны: ничего ни с одной стороны, итоги совпадают.
- Возвраты поставщикам ($2,400 кредит) показаны как дебет: дебет растёт на $2,400, кредит падает на $2,400, разрыв $4,800 в пользу дебета. ВЕРНО.
= Ответ: остаток возвратов поставщикам показан как дебет
! Частая ошибка: остаток не на той стороне ведомости даёт разницу в ДВОЙНОМ размере.`,
`# 1-qadam: Farq
  $642,300 - $637,500 = $4,800, DEBET ko'p
# 2-qadam: Har bir xatoni tekshiramiz
- Sug'urta debeti tushib qolgan: debet KAM bo'lardi. Teskari yo'nalish.
- Chegirma xaridlarga kreditlangan: kredit baribir kredit, jamlar mos (noto'g'ri hisob xatosi).
- Naqd sotuv umuman yozilmagan: hech bir tomonda hech narsa yo'q, jamlar mos.
- Xarid qaytarishlari ($2,400 kredit) debet sifatida ko'rsatilgan: debet $2,400 oshadi, kredit $2,400 kamayadi, debet foydasiga $4,800 farq. TO'G'RI.
= Javob: xarid qaytarishlari qoldig'i debet sifatida ko'rsatilgan
! Ko'p uchraydigan xato: sinov balansida noto'g'ri tomondagi qoldiq farqni IKKI BARAVAR beradi.`),

    q('17.4', 239, 'single', `The debit side of a trial balance totals $70 more than the credit side. Which ONE error could explain this?`,
      pick([
        `A credit purchase of goods for $70 was debited to purchases, but the credit to payables was never posted`,
        `A credit sale of $70 was credited to sales, but the debit to receivables was never posted`,
        `An electricity invoice of $35 was credited to the electricity account instead of debited (payables were correct)`,
        `A $70 receipt from a customer was left out of both the bank and receivables accounts`,
      ], 0),
`Ask of each error: which side ends up bigger?
- Purchase debited, payables credit missing: one debit with no credit. Debits are $70 bigger. RIGHT.
- Sale credited, receivables debit missing: one credit with no debit. Credits are $70 bigger.
- Electricity credited instead of debited: two credits ($35 to electricity and $35 to payables). Credits are $70 bigger.
- Receipt left out of both accounts: nothing recorded on either side. No difference.
= Answer: the purchase with the payables credit never posted
! Common trap: the electricity error also makes a $70 gap, but on the CREDIT side.`,
`Спросим о каждой ошибке: какая сторона станет больше?
- Закупка в дебет, кредита кредиторов нет: один дебет без кредита. Дебет больше на $70. ВЕРНО.
- Продажа в кредит, дебета дебиторов нет: один кредит без дебета. Кредит больше на $70.
- Электричество в кредит вместо дебета: два кредита ($35 электричеству и $35 кредиторам). Кредит больше на $70.
- Поступление не записано ни на одном счёте: ничего ни с одной стороны. Разницы нет.
= Ответ: закупка, у которой не проведён кредит кредиторов
! Частая ошибка: ошибка с электричеством тоже даёт разрыв $70, но в пользу КРЕДИТА.`,
`Har bir xato haqida so'raymiz: qaysi tomon ko'p bo'lib qoladi?
- Xarid debetlangan, kreditorlar krediti yo'q: kreditsiz bitta debet. Debet $70 ko'p. TO'G'RI.
- Sotuv kreditlangan, debitorlar debeti yo'q: debetsiz bitta kredit. Kredit $70 ko'p.
- Elektr debet o'rniga kreditlangan: ikkita kredit (elektrga $35 va kreditorlarga $35). Kredit $70 ko'p.
- Tushum ikkala hisobdan ham tushib qolgan: hech bir tomonda hech narsa yo'q. Farq yo'q.
= Javob: kreditorlar krediti yozilmagan xarid
! Ko'p uchraydigan xato: elektr xatosi ham $70 farq beradi, lekin KREDIT tomonida.`),

    q('17.5', 239, 'single', `Which ONE of the following is an error of principle?`,
      pick([
        `A new machine was credited to a non-current asset account`,
        `A new machine was debited to the purchases account`,
        `A new machine was debited to the equipment account`,
        `A new machine was credited to the equipment account`,
      ], 1),
`An error of principle puts an item in the wrong TYPE of account, for example an asset treated as an expense.
- Credited to a non-current asset account: the right type of account, but the wrong side. Not principle.
- Debited to purchases: a long-term asset treated as goods for resale, an expense. ERROR OF PRINCIPLE.
- Debited to equipment: this is correct.
- Credited to equipment: right account, wrong side. Not principle.
= Answer: the new machine debited to the purchases account`,
`Нарушение принципа — статья на счёте не того ТИПА, например актив учтён как расход.
- Кредит внеоборотного актива: тип счёта верный, но сторона неверная. Не принцип.
- Дебет закупок: долгосрочный актив учтён как товар для перепродажи, то есть расход. НАРУШЕНИЕ ПРИНЦИПА.
- Дебет оборудования: это правильно.
- Кредит оборудования: счёт верный, сторона неверная. Не принцип.
= Ответ: новый станок записан в дебет закупок`,
`Tamoyil xatosi moddani noto'g'ri TURDAGI hisobga qo'yadi, masalan aktivni xarajat sifatida.
- Uzoq muddatli aktivga kredit: hisob turi to'g'ri, tomoni noto'g'ri. Tamoyil emas.
- Xaridlarga debet: uzoq muddatli aktiv qayta sotiladigan tovar, ya'ni xarajat sifatida. TAMOYIL XATOSI.
- Uskunaga debet: bu to'g'ri.
- Uskunaga kredit: hisob to'g'ri, tomoni noto'g'ri. Tamoyil emas.
= Javob: yangi dastgoh xaridlarga debetlangan`),

    q('17.6', 239, 'single', `What is an error of commission?`,
      pick([
        `A transaction that has not been recorded at all`,
        `One side of a transaction recorded in the wrong account, of a different type from the correct one`,
        `One side of a transaction recorded in the wrong account, of the same type as the correct one`,
        `A transaction recorded with two digits swapped round`,
      ], 2),
`Commission = the right TYPE of account, but the wrong one. Example: insurance posted to rent (both expenses).
- Not recorded at all: an error of omission.
- Wrong account of a DIFFERENT type: an error of principle.
- Wrong account of the SAME type: an error of commission. RIGHT.
- Digits swapped: a transposition, which Kaplan treats as an error of original entry.
= Answer: one side recorded in the wrong account, of the same type as the correct one`,
`Ошибка счёта = тип счёта верный, но счёт не тот. Пример: страховка записана на аренду (оба расходы).
- Не записано вовсе: ошибка пропуска.
- Не тот счёт ДРУГОГО типа: нарушение принципа.
- Не тот счёт ТОГО ЖЕ типа: ошибка счёта. ВЕРНО.
- Цифры переставлены: транспозиция, Kaplan считает её ошибкой исходной записи.
= Ответ: одна сторона записана не на тот счёт того же типа`,
`Noto'g'ri hisob xatosi = hisob turi to'g'ri, lekin hisob boshqa. Misol: sug'urta ijaraga yozilgan (ikkalasi xarajat).
- Umuman yozilmagan: tushib qolish xatosi.
- BOSHQA turdagi noto'g'ri hisob: tamoyil xatosi.
- BIR XIL turdagi noto'g'ri hisob: noto'g'ri hisob xatosi. TO'G'RI.
- Raqamlar almashgan: transpozitsiya, Kaplan uni dastlabki yozuv xatosi deb hisoblaydi.
= Javob: bir tomon bir xil turdagi noto'g'ri hisobga yozilgan`),

    q('17.7', 239, 'single', `A transaction is recorded in the correct accounts, but the wrong amount is used on both sides. What is this error called?`,
      pick([`An error of omission`, `An error of original entry`, `An error of commission`, `An error of principle`], 1),
`The accounts are right; only the AMOUNT is wrong, and it is wrong on both sides.
- Omission: nothing recorded at all.
- Original entry: right accounts, wrong amount throughout. RIGHT.
- Commission: wrong account of the right type.
- Principle: wrong type of account.
= Answer: an error of original entry
! Because both sides use the same wrong amount, the trial balance still agrees.`,
`Счета верные, неверна только СУММА, и неверна с обеих сторон.
- Пропуск: ничего не записано.
- Исходная запись: счета верные, сумма неверная везде. ВЕРНО.
- Ошибка счёта: не тот счёт того же типа.
- Принцип: счёт не того типа.
= Ответ: ошибка исходной записи
! Так как обе стороны используют одну и ту же неверную сумму, ведомость всё равно сходится.`,
`Hisoblar to'g'ri; faqat SUMMA noto'g'ri va ikkala tomonda ham noto'g'ri.
- Tushib qolish: hech narsa yozilmagan.
- Dastlabki yozuv: hisoblar to'g'ri, summa hamma joyda noto'g'ri. TO'G'RI.
- Noto'g'ri hisob: to'g'ri turdagi boshqa hisob.
- Tamoyil: noto'g'ri turdagi hisob.
= Javob: dastlabki yozuv xatosi
! Ikkala tomon bir xil noto'g'ri summani ishlatgani uchun sinov balansi baribir mos keladi.`),

    q('17.8', 239, 'number', `A company's draft profit for the year is $64,200. It is then found that $24,000 paid for a new delivery van was debited to motor expenses. The company depreciates vans at 20% a year, with a full year's charge in the year of purchase. What is the profit after correcting this error?`,
      amount(83400, '$83,400'),
`The van is an asset, not an expense. Take it out of expenses, then charge a year's depreciation on it.
# Step 1: Remove the van from expenses
  $64,200 + $24,000 = $88,200
# Step 2: Charge depreciation on the van
  $24,000 x 20% = $4,800
  $88,200 - $4,800 = $83,400
= Answer: $83,400
! Common trap: forgetting the depreciation ($88,200). Once the van is an asset, it must be depreciated.`,
`Фургон — актив, а не расход. Уберём его из расходов и начислим амортизацию за год.
# Шаг 1: Убираем фургон из расходов
  $64,200 + $24,000 = $88,200
# Шаг 2: Начисляем амортизацию
  $24,000 x 20% = $4,800
  $88,200 - $4,800 = $83,400
= Ответ: $83,400
! Частая ошибка: забыть амортизацию ($88,200). Раз фургон стал активом, его нужно амортизировать.`,
`Furgon aktiv, xarajat emas. Uni xarajatlardan chiqarib, bir yillik amortizatsiya hisoblaymiz.
# 1-qadam: Furgonni xarajatlardan chiqaramiz
  $64,200 + $24,000 = $88,200
# 2-qadam: Amortizatsiya hisoblaymiz
  $24,000 x 20% = $4,800
  $88,200 - $4,800 = $83,400
= Javob: $83,400
! Ko'p uchraydigan xato: amortizatsiyani unutish ($88,200). Furgon aktivga aylangach, amortizatsiya qilinishi kerak.`),

    q('17.9', 240, 'single', `A business keeps a petty cash float of $300. At the end of October the month's vouchers totalled $260, so $260 was transferred from the bank to petty cash and the bank account was credited with $260. However, the expense accounts were debited with only $240. What will this error cause?`,
      pick([
        `The trial balance being $20 higher on the debit side`,
        `The trial balance being $20 higher on the credit side`,
        `No imbalance in the trial balance`,
        `The petty cash balance being $20 lower than it should be`,
      ], 1),
`Follow the money that was spent.
# Step 1: The credit side
  The bank was credited with $260
# Step 2: The debit side
  The expenses were debited with only $240
# Step 3: The gap
  $260 - $240 = $20 more on the CREDIT side
  The petty cash tin is still back to $300, so its balance is correct
= Answer: the trial balance is $20 higher on the credit side
! Common trap: thinking petty cash is short. The tin was topped up in full; only the expense posting is too small.`,
`Проследим потраченные деньги.
# Шаг 1: Кредит
  Банк кредитован на $260
# Шаг 2: Дебет
  Расходы дебетованы только на $240
# Шаг 3: Разрыв
  $260 - $240 = на $20 больше КРЕДИТ
  Касса пополнена до $300, её остаток верный
= Ответ: в ведомости кредит больше на $20
! Частая ошибка: думать, что в кассе недостача. Касса пополнена полностью; мала только запись расходов.`,
`Sarflangan pulni kuzatamiz.
# 1-qadam: Kredit tomoni
  Bank $260 ga kreditlangan
# 2-qadam: Debet tomoni
  Xarajatlar faqat $240 ga debetlangan
# 3-qadam: Farq
  $260 - $240 = KREDIT $20 ko'p
  Kassa $300 gacha to'ldirilgan, qoldig'i to'g'ri
= Javob: sinov balansida kredit $20 ko'p
! Ko'p uchraydigan xato: kassada kamomad bor deb o'ylash. Kassa to'liq to'ldirilgan; faqat xarajat yozuvi kam.`),

    q('17.10', 240, 'single', `Profit for the year was calculated as $12,600. It was later found that $4,000 spent on a new asset had been treated as an expense, and $1,800 of rent income received had been credited to a non-current asset account instead of to income. What is the corrected profit for the year?`,
      pick([`$6,800`, `$10,400`, `$14,800`, `$18,400`], 3),
`Ask of each error: was profit made too small or too big?
# Step 1: Asset spending charged as an expense
  Expenses were $4,000 too high, so profit was $4,000 too LOW: + $4,000
# Step 2: Income credited to an asset account
  Income was $1,800 too low, so profit was $1,800 too LOW: + $1,800
# Step 3: Corrected profit
  $12,600 + $4,000 + $1,800 = $18,400
= Answer: $18,400
! Common trap: taking one or both corrections off ($6,800, $10,400, $14,800). Both errors made profit too small.`,
`Спросим о каждой ошибке: прибыль занижена или завышена?
# Шаг 1: Затраты на актив списаны в расходы
  Расходы завышены на $4,000, значит прибыль ЗАНИЖЕНА на $4,000: + $4,000
# Шаг 2: Доход кредитован на счёт актива
  Доход занижен на $1,800, значит прибыль ЗАНИЖЕНА на $1,800: + $1,800
# Шаг 3: Исправленная прибыль
  $12,600 + $4,000 + $1,800 = $18,400
= Ответ: $18,400
! Частая ошибка: вычесть одну или обе поправки ($6,800, $10,400, $14,800). Обе ошибки занизили прибыль.`,
`Har bir xato haqida so'raymiz: foyda kam yoki ko'p ko'rsatilganmi?
# 1-qadam: Aktivga sarflangan pul xarajatga yozilgan
  Xarajatlar $4,000 ko'p, demak foyda $4,000 KAM: + $4,000
# 2-qadam: Daromad aktiv hisobiga kreditlangan
  Daromad $1,800 kam, demak foyda $1,800 KAM: + $1,800
# 3-qadam: Tuzatilgan foyda
  $12,600 + $4,000 + $1,800 = $18,400
= Javob: $18,400
! Ko'p uchraydigan xato: bitta yoki ikkala tuzatishni ayirish ($6,800, $10,400, $14,800). Ikkala xato ham foydani kamaytirgan.`),

    q('17.11', 240, 'single', `After calculating its profit, a company finds two errors: (1) a machine costing $40,000 was included in the purchases account; (2) office stationery costing $6,000 was included in closing inventory of raw materials instead of being charged as a stationery expense. What is the effect of these errors on gross profit and on profit for the year? (Ignore depreciation.)`,
      pick([
        `Gross profit understated by $34,000; profit for the year understated by $28,000`,
        `Gross profit and profit for the year both understated by $34,000`,
        `Gross profit understated by $46,000; profit for the year understated by $40,000`,
        `Gross profit and profit for the year both overstated by $46,000`,
      ], 0),
`Both errors pass through cost of sales; the stationery also belongs in expenses.
# Step 1: The machine in purchases
  Cost of sales is $40,000 too high, so gross profit is $40,000 too LOW
# Step 2: Stationery in closing inventory
  Closing inventory is $6,000 too high, so cost of sales is $6,000 too low and gross profit $6,000 too HIGH
# Step 3: Net effect on gross profit
  $40,000 - $6,000 = understated by $34,000
# Step 4: Profit for the year
  The $6,000 stationery expense is also missing, so profit is $6,000 too high on top
  $34,000 - $6,000 = understated by $28,000
= Answer: gross profit understated by $34,000; profit for the year understated by $28,000
! Common trap: adding the two errors ($46,000). They push gross profit in opposite directions.`,
`Обе ошибки проходят через себестоимость; канцтовары также должны быть в расходах.
# Шаг 1: Станок в закупках
  Себестоимость завышена на $40,000, валовая прибыль ЗАНИЖЕНА на $40,000
# Шаг 2: Канцтовары в запасах на конец
  Запасы на конец завышены на $6,000, себестоимость занижена на $6,000, валовая прибыль ЗАВЫШЕНА на $6,000
# Шаг 3: Итог по валовой прибыли
  $40,000 - $6,000 = занижена на $34,000
# Шаг 4: Прибыль за год
  Расхода на канцтовары $6,000 тоже нет, прибыль дополнительно завышена на $6,000
  $34,000 - $6,000 = занижена на $28,000
= Ответ: валовая прибыль занижена на $34,000; прибыль за год занижена на $28,000
! Частая ошибка: сложить две ошибки ($46,000). Они двигают валовую прибыль в разные стороны.`,
`Ikkala xato tannarx orqali o'tadi; kanselyariya xarajatlarga ham tegishli.
# 1-qadam: Xaridlardagi dastgoh
  Tannarx $40,000 ko'p, yalpi foyda $40,000 KAM
# 2-qadam: Yakuniy zaxiradagi kanselyariya
  Yakuniy zaxira $6,000 ko'p, tannarx $6,000 kam, yalpi foyda $6,000 KO'P
# 3-qadam: Yalpi foydaga sof ta'sir
  $40,000 - $6,000 = $34,000 kam ko'rsatilgan
# 4-qadam: Yil foydasi
  $6,000 kanselyariya xarajati ham yo'q, foyda yana $6,000 ko'p
  $34,000 - $6,000 = $28,000 kam ko'rsatilgan
= Javob: yalpi foyda $34,000 kam; yil foydasi $28,000 kam ko'rsatilgan
! Ko'p uchraydigan xato: ikki xatoni qo'shish ($46,000). Ular yalpi foydani qarama-qarshi tomonga suradi.`),

    q('17.12', 240, 'single', `A purchase return of $65 was debited to the sales returns account by mistake, but was correctly recorded in the supplier's account. What will the trial balance show?`,
      pick([
        `The credit side $65 more than the debit side`,
        `The debit side $65 more than the credit side`,
        `The credit side $130 more than the debit side`,
        `The debit side $130 more than the credit side`,
      ], 3),
`# Step 1: The correct entry
  Dr Payables $65, Cr Purchases returns $65
# Step 2: What was done
  Dr Payables $65 (correct), Dr Sales returns $65 (a debit instead of a credit)
# Step 3: The effect
  There are two debits of $65 and no credit: debits are $65 + $65 = $130 more than credits
= Answer: the debit side $130 more than the credit side
! Common trap: $65. A credit turned into a debit is out by TWICE the amount.`,
`# Шаг 1: Правильная запись
  Дт Кредиторы $65, Кт Возвраты поставщикам $65
# Шаг 2: Что сделано
  Дт Кредиторы $65 (верно), Дт Возвраты покупателей $65 (дебет вместо кредита)
# Шаг 3: Эффект
  Два дебета по $65 и ни одного кредита: дебет больше на $65 + $65 = $130
= Ответ: дебет больше кредита на $130
! Частая ошибка: $65. Кредит, ставший дебетом, даёт разницу в ДВОЙНОМ размере.`,
`# 1-qadam: To'g'ri yozuv
  Dt Kreditorlar $65, Kt Xarid qaytarishlari $65
# 2-qadam: Nima qilingan
  Dt Kreditorlar $65 (to'g'ri), Dt Sotuv qaytarishlari $65 (kredit o'rniga debet)
# 3-qadam: Ta'sir
  Ikkita $65 debet, kredit yo'q: debet $65 + $65 = $130 ko'p
= Javob: debet kreditdan $130 ko'p
! Ko'p uchraydigan xato: $65. Debetga aylangan kredit farqni IKKI BARAVAR beradi.`),

    q('17.14', 240, 'single', `These are the balances of a sole trader at the year end, after all entries have been processed and profit calculated. What is the balance on the capital account?`,
      { table: { head: ['Account', '$'], rows: [['Non-current assets (cost)', '92,000'], ['Accumulated depreciation, non-current assets', '18,000'], ['Receivables', '8,000'], ['Inventory', '5,000'], ['Prepayments', '2,500'], ['Trade payables', '4,000'], ['Bank loan', '20,000'], ['Accruals', '1,500'], ['Bank overdraft', '3,000']] }, ...pick([`$59,000`, `$61,000`, `$67,000`, `$79,000`], 1) },
`Capital is the missing figure that makes the trial balance agree.
# Step 1: Debit balances (assets)
  Non-current assets $92,000 + receivables $8,000 + inventory $5,000 + prepayments $2,500 = $107,500
# Step 2: Credit balances (deductions and liabilities)
  Accumulated depreciation $18,000 + payables $4,000 + loan $20,000 + accruals $1,500 + overdraft $3,000 = $46,500
# Step 3: Capital (the balancing credit)
  $107,500 - $46,500 = $61,000
= Answer: $61,000
! Common traps: $67,000 treats the overdraft as cash; $59,000 swaps accruals and prepayments; $79,000 forgets accumulated depreciation.`,
`Капитал — недостающая цифра, при которой ведомость сходится.
# Шаг 1: Дебетовые остатки (активы)
  Внеоборотные активы $92,000 + дебиторы $8,000 + запасы $5,000 + предоплаты $2,500 = $107,500
# Шаг 2: Кредитовые остатки (вычеты и обязательства)
  Накопленная амортизация $18,000 + кредиторы $4,000 + заём $20,000 + начисления $1,500 + овердрафт $3,000 = $46,500
# Шаг 3: Капитал (балансирующий кредит)
  $107,500 - $46,500 = $61,000
= Ответ: $61,000
! Частые ошибки: $67,000 считает овердрафт деньгами; $59,000 путает начисления и предоплаты; $79,000 забывает накопленную амортизацию.`,
`Kapital — sinov balansini tenglashtiruvchi yetishmayotgan son.
# 1-qadam: Debet qoldiqlar (aktivlar)
  Uzoq muddatli aktivlar $92,000 + debitorlar $8,000 + zaxira $5,000 + oldindan to'lovlar $2,500 = $107,500
# 2-qadam: Kredit qoldiqlar (ayirmalar va majburiyatlar)
  Jamg'arilgan amortizatsiya $18,000 + kreditorlar $4,000 + qarz $20,000 + hisoblanganlar $1,500 + overdraft $3,000 = $46,500
# 3-qadam: Kapital (balanslovchi kredit)
  $107,500 - $46,500 = $61,000
= Javob: $61,000
! Ko'p uchraydigan xatolar: $67,000 overdraftni pul deb oladi; $59,000 hisoblangan va oldindan to'lovlarni almashtiradi; $79,000 jamg'arilgan amortizatsiyani unutadi.`),

    q('17.15', 240, 'number', `These balances were taken from a trader's ledger, but the bank loan figure is unknown. There are no other accounts. What is the credit balance on the bank loan account?`,
      { table: { head: ['Account', '$'], rows: [['Trade payables', '31,000'], ['Capital', '70,000'], ['Purchases', '150,000'], ['Sales', '280,000'], ['Other expenses', '96,000'], ['Trade receivables', '29,000'], ['Purchase returns', '3,000'], ['Non-current assets', '110,000'], ['Cash at bank', '21,000'], ['Bank loan', '?']] }, ...amount(22000, '$22,000') },
`Put each balance on its side; the loan is whatever makes the two sides equal.
# Step 1: Debit balances (assets and expenses)
  Purchases $150,000 + other expenses $96,000 + receivables $29,000 + non-current assets $110,000 + cash $21,000 = $406,000
# Step 2: Credit balances without the loan
  Payables $31,000 + capital $70,000 + sales $280,000 + purchase returns $3,000 = $384,000
# Step 3: The loan
  $406,000 - $384,000 = $22,000
= Answer: $22,000
! Common trap: putting purchase returns on the debit side. Returns to suppliers reduce purchases, so they are a credit.`,
`Разнесём остатки по сторонам; заём — то, что уравнивает стороны.
# Шаг 1: Дебетовые остатки (активы и расходы)
  Закупки $150,000 + прочие расходы $96,000 + дебиторы $29,000 + внеоборотные активы $110,000 + деньги $21,000 = $406,000
# Шаг 2: Кредитовые остатки без займа
  Кредиторы $31,000 + капитал $70,000 + продажи $280,000 + возвраты поставщикам $3,000 = $384,000
# Шаг 3: Заём
  $406,000 - $384,000 = $22,000
= Ответ: $22,000
! Частая ошибка: поставить возвраты поставщикам в дебет. Они уменьшают закупки, значит это кредит.`,
`Qoldiqlarni tomonlarga joylaymiz; qarz — tomonlarni tenglashtiradigan son.
# 1-qadam: Debet qoldiqlar (aktivlar va xarajatlar)
  Xaridlar $150,000 + boshqa xarajatlar $96,000 + debitorlar $29,000 + uzoq muddatli aktivlar $110,000 + pul $21,000 = $406,000
# 2-qadam: Qarzsiz kredit qoldiqlar
  Kreditorlar $31,000 + kapital $70,000 + sotuv $280,000 + xarid qaytarishlari $3,000 = $384,000
# 3-qadam: Qarz
  $406,000 - $384,000 = $22,000
= Javob: $22,000
! Ko'p uchraydigan xato: xarid qaytarishlarini debetga qo'yish. Ular xaridlarni kamaytiradi, demak kredit.`),

    q('17.16', 241, 'single', `A company's draft statements for the year ended 31 December 20X5 show total assets of $720,000 and profit for the year of $160,000. Goods costing $40,000, with a resale value of $60,000, arrived in the warehouse on 3 January 20X6 but were included in the inventory figure at 31 December 20X5. What are total assets and profit after correcting this error?`,
      pick([
        `Total assets $760,000; profit $200,000`,
        `Total assets $680,000; profit $120,000`,
        `Total assets $780,000; profit $220,000`,
        `Total assets $680,000; profit $100,000`,
      ], 1),
`The goods arrived AFTER the year end, so they were not owned on 31 December.
# Step 1: Inventory is overstated
  By their cost, $40,000 (inventory is never counted at resale value)
# Step 2: Total assets
  $720,000 - $40,000 = $680,000
# Step 3: Profit
  Closing inventory too high made cost of sales too low and profit too high
  $160,000 - $40,000 = $120,000
= Answer: total assets $680,000; profit $120,000
! Common traps: adding instead of removing ($760,000 / $200,000), or using the $60,000 resale value.`,
`Товар пришёл ПОСЛЕ конца года, значит 31 декабря он не принадлежал компании.
# Шаг 1: Запасы завышены
  На его себестоимость, $40,000 (запасы никогда не учитывают по цене продажи)
# Шаг 2: Итого активы
  $720,000 - $40,000 = $680,000
# Шаг 3: Прибыль
  Завышенные запасы на конец занизили себестоимость и завысили прибыль
  $160,000 - $40,000 = $120,000
= Ответ: активы $680,000; прибыль $120,000
! Частые ошибки: прибавить вместо вычета ($760,000 / $200,000) или взять цену продажи $60,000.`,
`Tovar yil tugagandan KEYIN kelgan, demak 31 dekabrda kompaniyaga tegishli emas edi.
# 1-qadam: Zaxira oshirib ko'rsatilgan
  Tannarxi, $40,000 ga (zaxira hech qachon sotish narxida hisoblanmaydi)
# 2-qadam: Jami aktivlar
  $720,000 - $40,000 = $680,000
# 3-qadam: Foyda
  Ortiqcha yakuniy zaxira tannarxni kamaytirib, foydani oshirgan
  $160,000 - $40,000 = $120,000
= Javob: aktivlar $680,000; foyda $120,000
! Ko'p uchraydigan xatolar: ayirish o'rniga qo'shish ($760,000 / $200,000) yoki $60,000 sotish narxini olish.`),

    q('17.17', 241, 'single', `A company's year ends on 30 June 20X2. At 1 July 20X1 it had an electricity accrual of $250. During the year it paid: $540 on 1 August 20X1 for the three months to 31 July 20X1; $660 on 1 November 20X1 for the three months to 31 October 20X1; $780 on 1 February 20X2 for the three months to 31 January 20X2; and $900 on 30 June 20X2 for the three months to 30 April 20X2. It expects the next bill to be the same as the June bill. What amounts go in the financial statements for the year ended 30 June 20X2?`,
      pick([
        `Statement of financial position $600; statement of profit or loss $3,230`,
        `Statement of financial position $600; statement of profit or loss $2,880`,
        `Statement of financial position $900; statement of profit or loss $3,230`,
        `Statement of financial position $900; statement of profit or loss $3,530`,
      ], 0),
`Expense = cash paid + closing accrual - opening accrual.
# Step 1: Cash paid in the year
  $540 + $660 + $780 + $900 = $2,880
# Step 2: Closing accrual
  The last bill covers up to 30 April, so May and June are unbilled
  The June bill was $900 for three months, $300 a month: 2 x $300 = $600
# Step 3: Expense for the year
  $2,880 + $600 - opening accrual $250 = $3,230
= Answer: statement of financial position $600; statement of profit or loss $3,230
! Common traps: $2,880 is only the cash paid; $900 accrues a full quarter instead of two months.`,
`Расход = оплачено + начисление на конец - начисление на начало.
# Шаг 1: Оплачено за год
  $540 + $660 + $780 + $900 = $2,880
# Шаг 2: Начисление на конец
  Последний счёт покрывает период до 30 апреля, май и июнь не выставлены
  Июньский счёт — $900 за три месяца, $300 в месяц: 2 x $300 = $600
# Шаг 3: Расход за год
  $2,880 + $600 - начисление на начало $250 = $3,230
= Ответ: отчёт о финансовом положении $600; отчёт о прибыли или убытке $3,230
! Частые ошибки: $2,880 — лишь оплата; $900 начисляет целый квартал вместо двух месяцев.`,
`Xarajat = to'langan + yakuniy hisoblangan - boshlang'ich hisoblangan.
# 1-qadam: Yil davomida to'langan
  $540 + $660 + $780 + $900 = $2,880
# 2-qadam: Yakuniy hisoblangan
  Oxirgi hisob 30 aprelgacha, may va iyun hali hisoblanmagan
  Iyun hisobi uch oyga $900, oyiga $300: 2 x $300 = $600
# 3-qadam: Yillik xarajat
  $2,880 + $600 - boshlang'ich hisoblangan $250 = $3,230
= Javob: moliyaviy holat hisoboti $600; foyda yoki zarar hisoboti $3,230
! Ko'p uchraydigan xatolar: $2,880 faqat to'lov; $900 ikki oy o'rniga butun chorakni hisoblaydi.`),

    // Section 18: suspense accounts. Personal customer and supplier accounts are memorandum only (Kaplan).
    q('18.1', 242, 'single', `A company's trial balance shows debits of $652,480 and credits of $648,170, and the difference goes to a suspense account. Errors found: (1) cash of $248,000 from a share issue at par was credited to share capital as $240,000; (2) $3,600 paid for vehicle repairs was correct in the cash book but credited to the vehicles asset account; (3) the petty cash balance of $650 was left out of the trial balance; (4) a cheque for $56,300 for a machine was debited to machinery as $65,300; (5) a payment of $1,400 from one customer was credited to the account of another customer. Which errors need a suspense account entry to correct?`,
      pick(['All five', '3 and 5 only', '2, 4 and 5 only', '1, 2, 3 and 4 only'], 3),
`Ask of each: did it make debits and credits unequal?
- (1) Cash debited 248,000, share capital credited 240,000: unequal. YES.
- (2) Cash credited and the vehicles account credited too: two credits. YES.
- (3) A balance left out of the trial balance: one side short. YES.
- (4) Debit 65,300 against a credit of 56,300: unequal. YES.
- (5) The right amount on the right side, just the wrong customer: still balanced. NO.
= Answer: 1, 2, 3 and 4 only`,
`Спросим о каждой: нарушила ли она равенство дебета и кредита?
- (1) Деньги в дебет 248 000, капитал в кредит 240 000: не равны. ДА.
- (2) Деньги в кредит и счёт транспорта тоже в кредит: два кредита. ДА.
- (3) Остаток пропущен в оборотно-сальдовой ведомости: одной стороне не хватает. ДА.
- (4) Дебет 65 300 против кредита 56 300: не равны. ДА.
- (5) Верная сумма на верной стороне, просто не тот покупатель: баланс сохраняется. НЕТ.
= Ответ: только 1, 2, 3 и 4`,
`Har biri haqida so'raymiz: debet va kredit tengligini buzganmi?
- (1) Pul debetga 248 000, kapital kreditga 240 000: teng emas. HA.
- (2) Pul kreditga va transport hisobi ham kreditga: ikki kredit. HA.
- (3) Qoldiq aylanma qaydnomadan tushib qolgan: bir tomon kam. HA.
- (4) 65 300 debet 56 300 kreditga qarshi: teng emas. HA.
- (5) To'g'ri summa to'g'ri tomonda, faqat boshqa xaridor: muvozanat saqlanadi. YO'Q.
= Javob: faqat 1, 2, 3 va 4`),

    q('18.2', 242, 'single', `Same company as the last question. After correcting the errors that affect the suspense account, what balance is left on it?`,
      pick(['$4,840 debit', '$8,440 debit', '$4,840 credit', '$12,160 credit'], 0),
`# Step 1: Opening suspense balance
  Debits are bigger by 652,480 - 648,170 = 4,310, so suspense starts with a CREDIT of 4,310.
# Step 2: Each correction
  (1) Cr Share capital 8,000, Dr Suspense 8,000
  (2) Dr Repairs 3,600, Dr Vehicles 3,600, Cr Suspense 7,200
  (3) Dr Petty cash 650, Cr Suspense 650
  (4) Cr Machinery 9,000, Dr Suspense 9,000
# Step 3: Balance it
  Debits: 8,000 + 9,000 = 17,000
  Credits: 4,310 + 7,200 + 650 = 12,160
  17,000 - 12,160 = 4,840 debit
= Answer: $4,840 debit
! Error (2) needs TWICE 3,600: once to cancel the wrong credit and once for the missing debit.`,
`# Шаг 1: Начальный остаток счёта ошибок
  Дебет больше на 652 480 - 648 170 = 4 310, значит счёт ошибок начинается с КРЕДИТА 4 310.
# Шаг 2: Каждое исправление
  (1) Кт Капитал 8 000, Дт Счёт ошибок 8 000
  (2) Дт Ремонт 3 600, Дт Транспорт 3 600, Кт Счёт ошибок 7 200
  (3) Дт Мелкая касса 650, Кт Счёт ошибок 650
  (4) Кт Оборудование 9 000, Дт Счёт ошибок 9 000
# Шаг 3: Выведем остаток
  Дебет: 8 000 + 9 000 = 17 000
  Кредит: 4 310 + 7 200 + 650 = 12 160
  17 000 - 12 160 = 4 840 дебет
= Ответ: $4 840 дебет
! Ошибка (2) требует ДВОЙНЫХ 3 600: раз — убрать неверный кредит, раз — добавить недостающий дебет.`,
`# 1-qadam: Vaqtinchalik hisobning boshlang'ich qoldig'i
  Debet 652 480 - 648 170 = 4 310 ga katta, demak hisob 4 310 KREDIT bilan boshlanadi.
# 2-qadam: Har bir tuzatish
  (1) Kt Kapital 8 000, Dt Vaqtinchalik hisob 8 000
  (2) Dt Ta'mir 3 600, Dt Transport 3 600, Kt Vaqtinchalik hisob 7 200
  (3) Dt Kichik kassa 650, Kt Vaqtinchalik hisob 650
  (4) Kt Uskuna 9 000, Dt Vaqtinchalik hisob 9 000
# 3-qadam: Qoldiqni chiqaramiz
  Debet: 8 000 + 9 000 = 17 000
  Kredit: 4 310 + 7 200 + 650 = 12 160
  17 000 - 12 160 = 4 840 debet
= Javob: $4 840 debet
! (2)-xato IKKI baravar 3 600 talab qiladi: noto'g'ri kreditni bekor qilish va yetishmagan debet uchun.`),

    q('18.3', 242, 'single', `A trial balance shows debits of $412,560 and credits of $405,060, and the difference goes to suspense. Which error, when corrected, would REDUCE the difference?`,
      pick([
        'The petty cash balance of $400 was left out of the trial balance.',
        '$3,500 received for subletting part of the office was correct in the cash book but debited to the rent account.',
        '$2,800 paid for plant repairs was debited to the plant asset account.',
        'An invoice for one customer was posted to the account of another customer.',
      ], 1),
`Debits are 7,500 too big, so suspense has a CREDIT of 7,500. A correction that DEBITS suspense makes it smaller.
- Petty cash left out: Dr Petty cash, Cr Suspense. The difference grows.
- Rent received debited to rent: two debits of 3,500. Fix: Cr Rent 7,000, Dr Suspense 7,000. The difference falls to 500. YES.
- Repairs debited to plant: debits and credits still equal. No suspense entry.
- Wrong customer: still balanced. No suspense entry.
= Answer: the $3,500 rent received that was debited to rent`,
`Дебет больше на 7 500, счёт ошибок с КРЕДИТОМ 7 500. Исправление с ДЕБЕТОМ счёта ошибок его уменьшает.
- Пропущена мелкая касса: Дт Мелкая касса, Кт Счёт ошибок. Разница растёт.
- Полученная аренда в дебет аренды: два дебета по 3 500. Исправление: Кт Аренда 7 000, Дт Счёт ошибок 7 000. Разница падает до 500. ДА.
- Ремонт в дебет оборудования: дебет и кредит всё ещё равны. Без счёта ошибок.
- Не тот покупатель: баланс сохраняется. Без счёта ошибок.
= Ответ: полученная аренда $3 500, записанная в дебет аренды`,
`Debet 7 500 ga katta, vaqtinchalik hisobda 7 500 KREDIT. Vaqtinchalik hisobni DEBETlaydigan tuzatish uni kamaytiradi.
- Kichik kassa tushib qolgan: Dt Kichik kassa, Kt Vaqtinchalik hisob. Farq oshadi.
- Olingan ijara ijara debetiga: 3 500 dan ikki debet. Tuzatish: Kt Ijara 7 000, Dt Vaqtinchalik hisob 7 000. Farq 500 gacha tushadi. HA.
- Ta'mir uskuna debetiga: debet va kredit hali teng. Vaqtinchalik hisob yozuvi yo'q.
- Boshqa xaridor: muvozanat saqlanadi. Vaqtinchalik hisob yozuvi yo'q.
= Javob: ijara debetiga yozilgan $3 500 olingan ijara`),

    q('18.4', 242, 'single', `A sole trader's trial balance did not agree. Which errors need a suspense account entry to correct? (1) Sales returns were debited to purchases returns by mistake. (2) Cash from selling a non-current asset was correct in the cash book but DEBITED to the disposal account. (3) The rent account balance was left out of the trial balance. (4) Goods taken by the owner were recorded by crediting drawings and debiting purchases.`,
      pick(['All four', '2 and 3 only', '2 and 4 only', '1 and 3 only'], 1),
`- (1) A debit to the wrong account: debits and credits still equal. NO.
- (2) Cash debited AND disposal debited: two debits. YES.
- (3) A balance left out: one side short. YES.
- (4) Both entries reversed: still one debit and one credit of the same amount. NO.
= Answer: 2 and 3 only`,
`- (1) Дебет не того счёта: дебет и кредит всё ещё равны. НЕТ.
- (2) Деньги в дебет И выбытие в дебет: два дебета. ДА.
- (3) Пропущен остаток: одной стороне не хватает. ДА.
- (4) Обе записи наоборот: всё равно один дебет и один кредит одной суммы. НЕТ.
= Ответ: только 2 и 3`,
`- (1) Noto'g'ri hisob debeti: debet va kredit hali teng. YO'Q.
- (2) Pul debetga VA chiqib ketish debetga: ikki debet. HA.
- (3) Qoldiq tushib qolgan: bir tomon kam. HA.
- (4) Ikkala yozuv teskari: baribir bir xil summada bitta debet va bitta kredit. YO'Q.
= Javob: faqat 2 va 3`),

    q('18.5', 242, 'single', `A suspense account was opened when a trial balance did not agree. These errors were later found: a gas bill of $630 was recorded in the gas account as $360; a sales invoice of $80 was CREDITED to receivables; interest received of $90 was entered in the bank account only. What was the original suspense balance?`,
      pick(['Debit $340', 'Credit $340', 'Debit $180', 'Credit $180'], 0),
`# Step 1: The correction for each error
  Gas: Dr Gas 270, Cr Suspense 270
  Invoice credited instead of debited: Dr Receivables 160, Cr Suspense 160
  Interest missing its credit: Cr Interest received 90, Dr Suspense 90
# Step 2: The corrections must clear the suspense account
  Credits to suspense 270 + 160 = 430; debits 90
  Net credit of 340, so suspense must have started with a DEBIT of 340
= Answer: debit $340`,
`# Шаг 1: Исправление каждой ошибки
  Газ: Дт Газ 270, Кт Счёт ошибок 270
  Счёт в кредит вместо дебета: Дт Дебиторы 160, Кт Счёт ошибок 160
  У процентов нет кредита: Кт Полученные проценты 90, Дт Счёт ошибок 90
# Шаг 2: Исправления должны закрыть счёт ошибок
  Кредит счёта ошибок 270 + 160 = 430; дебет 90
  Чистый кредит 340, значит счёт ошибок начинался с ДЕБЕТА 340
= Ответ: дебет $340`,
`# 1-qadam: Har bir xato uchun tuzatish
  Gaz: Dt Gaz 270, Kt Vaqtinchalik hisob 270
  Hisob debet o'rniga kreditga: Dt Debitorlar 160, Kt Vaqtinchalik hisob 160
  Foizning krediti yo'q: Kt Olingan foiz 90, Dt Vaqtinchalik hisob 90
# 2-qadam: Tuzatishlar vaqtinchalik hisobni yopishi kerak
  Vaqtinchalik hisob krediti 270 + 160 = 430; debet 90
  Sof kredit 340, demak hisob 340 DEBET bilan boshlangan
= Javob: debet $340`),

    q('18.6', 242, 'single', `A trial balance difference of $31,000 went to suspense. It turns out that, for machinery bought for $31,000 by cheque, the debit to the machinery account was never posted. Which journal corrects this?`,
      pick([
        'Dr Machinery $31,000, Cr Bank $31,000',
        'Dr Suspense $31,000, Cr Machinery $31,000',
        'Dr Machinery $31,000, Cr Suspense $31,000',
        'Dr Bank $31,000, Cr Suspense $31,000',
      ], 2),
`# Step 1: What is missing?
  The bank credit was posted. Only the debit to machinery is missing.
# Step 2: Where is the other side now?
  The 31,000 is sitting in suspense as a debit.
# Step 3: The journal
  Dr Machinery 31,000, Cr Suspense 31,000
= Answer: Dr Machinery $31,000, Cr Suspense $31,000
! Do not credit the bank again: it was already done.`,
`# Шаг 1: Чего не хватает?
  Кредит банка проведён. Не хватает только дебета оборудования.
# Шаг 2: Где сейчас другая сторона?
  31 000 стоит на счёте ошибок как дебет.
# Шаг 3: Проводка
  Дт Оборудование 31 000, Кт Счёт ошибок 31 000
= Ответ: Дт Оборудование $31 000, Кт Счёт ошибок $31 000
! Банк повторно не кредитуйте: это уже сделано.`,
`# 1-qadam: Nima yetishmaydi?
  Bank krediti yozilgan. Faqat uskuna debeti yetishmaydi.
# 2-qadam: Boshqa tomon hozir qayerda?
  31 000 vaqtinchalik hisobda debet sifatida turibdi.
# 3-qadam: Yozuv
  Dt Uskuna 31 000, Kt Vaqtinchalik hisob 31 000
= Javob: Dt Uskuna $31 000, Kt Vaqtinchalik hisob $31 000
! Bankni qayta kreditlamang: bu allaqachon qilingan.`),

    q('18.7', 243, 'number', `A trial balance shows debits of $745,900 and credits of $728,300, and the difference goes to suspense. These errors are then corrected: (1) discounts received of $6,200 were never posted to the discounts received account; (2) a cheque for $21,000 from a customer was correct in the cash book but posted to the receivables account as $12,000. What credit balance is left on the suspense account? (in $)`,
      amount(2400, '$2,400 credit'),
`# Step 1: Opening suspense balance
  745,900 - 728,300 = 17,600 more debits, so suspense starts with a CREDIT of 17,600.
# Step 2: Corrections
  (1) Cr Discounts received 6,200, Dr Suspense 6,200
  (2) Receivables were credited 9,000 too little: Cr Receivables 9,000, Dr Suspense 9,000
# Step 3: What is left
  17,600 - 6,200 - 9,000 = 2,400 credit
= Answer: $2,400 credit (a difference still to be found)`,
`# Шаг 1: Начальный остаток счёта ошибок
  745 900 - 728 300 = на 17 600 больше дебета, счёт ошибок начинается с КРЕДИТА 17 600.
# Шаг 2: Исправления
  (1) Кт Полученные скидки 6 200, Дт Счёт ошибок 6 200
  (2) Дебиторы недокредитованы на 9 000: Кт Дебиторы 9 000, Дт Счёт ошибок 9 000
# Шаг 3: Что осталось
  17 600 - 6 200 - 9 000 = 2 400 кредит
= Ответ: $2 400 кредит (разница, которую ещё нужно найти)`,
`# 1-qadam: Vaqtinchalik hisobning boshlang'ich qoldig'i
  745 900 - 728 300 = debet 17 600 ga ko'p, hisob 17 600 KREDIT bilan boshlanadi.
# 2-qadam: Tuzatishlar
  (1) Kt Olingan chegirmalar 6 200, Dt Vaqtinchalik hisob 6 200
  (2) Debitorlar 9 000 ga kam kreditlangan: Kt Debitorlar 9 000, Dt Vaqtinchalik hisob 9 000
# 3-qadam: Nima qoldi
  17 600 - 6 200 - 9 000 = 2 400 kredit
= Javob: $2 400 kredit (hali topilishi kerak bo'lgan farq)`),

    q('18.8', 243, 'multi', `A company's trial balance did not agree. Which TWO of these errors need a suspense account entry to correct?`,
      two([
        '$5,200 paid for van repairs was correct in the cash book but credited to the vans asset account.',
        '$420 received from customer C was credited to the account of customer CC.',
        '$8,700 paid for rent was debited to the rent account as $7,800.',
        'Sales returns were debited to the purchases returns account by mistake.',
        'A cash sale of $150 was not recorded at all.',
      ], [0, 2]),
`Ask of each: are debits and credits now unequal?
- Van repairs credited to the vans account: cash credited too, so two credits. YES.
- Wrong customer: right amount, right side. NO.
- Rent debited as 7,800 while cash was credited 8,700: unequal by 900. YES.
- Sales returns debited to the wrong account: still a debit. NO.
- A sale left out entirely: nothing recorded on either side. NO.
= Answer: the van repairs and the rent
! BPP's printed answer ticks the van repairs and the sales returns, but its own working says the first and third errors. The first and third are right.`,
`Спросим о каждой: стали ли дебет и кредит неравны?
- Ремонт фургона в кредит счёта фургонов: деньги тоже в кредит, два кредита. ДА.
- Не тот покупатель: верная сумма, верная сторона. НЕТ.
- Аренда в дебет как 7 800, а деньги в кредит 8 700: разница 900. ДА.
- Возврат продаж в дебет не того счёта: всё равно дебет. НЕТ.
- Продажа не записана вовсе: ни одной стороны. НЕТ.
= Ответ: ремонт фургона и аренда
! В напечатанном ответе BPP отмечены ремонт фургона и возврат продаж, но в его же пояснении — первая и третья ошибки. Верны первая и третья.`,
`Har biri haqida so'raymiz: debet va kredit endi teng emasmi?
- Furgon ta'miri furgonlar hisobi kreditiga: pul ham kreditga, ikki kredit. HA.
- Boshqa xaridor: to'g'ri summa, to'g'ri tomon. YO'Q.
- Ijara debetga 7 800, pul esa kreditga 8 700: 900 farq. HA.
- Sotuv qaytarishlari noto'g'ri hisob debetiga: baribir debet. YO'Q.
- Sotuv umuman yozilmagan: hech bir tomon yo'q. YO'Q.
= Javob: furgon ta'miri va ijara
! BPP chop etilgan javobida furgon ta'miri va sotuv qaytarishlari belgilangan, lekin o'z tushuntirishida birinchi va uchinchi xato deyilgan. Birinchi va uchinchisi to'g'ri.`),

    q('18.9', 243, 'single', `A suspense account has a DEBIT balance of $200. What could cause it?`,
      pick([
        'Entering $100 received from customer J on the debit side of J\'s personal account',
        'Entering $100 received from customer J on the credit side of J\'s personal account',
        'Undercasting (adding up too low) the sales account by $200',
        'Undercasting the purchases account by $200',
      ], 3),
`A DEBIT in suspense means the debits in the trial balance were $200 too SMALL.
- Personal customer accounts are memorandum records. They are not part of the double entry, so they cannot affect the trial balance.
- Sales undercast: CREDITS too small, which gives a CREDIT in suspense.
- Purchases undercast: DEBITS too small by 200, which gives a DEBIT in suspense. YES.
= Answer: undercasting the purchases account by $200`,
`ДЕБЕТ счёта ошибок значит, что дебет ведомости МЕНЬШЕ на $200.
- Личные счета покупателей — справочные записи. Они не входят в двойную запись и не влияют на ведомость.
- Продажи занижены: МЕНЬШЕ кредит, это даёт КРЕДИТ счёта ошибок.
- Закупки занижены: МЕНЬШЕ дебет на 200, это даёт ДЕБЕТ счёта ошибок. ДА.
= Ответ: занижение итога счёта закупок на $200`,
`Vaqtinchalik hisobdagi DEBET qaydnoma debeti $200 ga KAM ekanini bildiradi.
- Xaridorlarning shaxsiy hisoblari — ma'lumot yozuvlari. Ular ikki yoqlama yozuvga kirmaydi va qaydnomaga ta'sir qilmaydi.
- Sotuv kam jamlangan: KREDIT kam, bu vaqtinchalik hisobda KREDIT beradi.
- Xaridlar kam jamlangan: DEBET 200 ga kam, bu vaqtinchalik hisobda DEBET beradi. HA.
= Javob: xaridlar hisobini $200 ga kam jamlash`),

    q('18.10', 243, 'single', `A suspense account has a CREDIT balance of $150. What could cause it?`,
      pick([
        'Recording a purchase of $150 twice in the purchases account',
        'Leaving a credit sale of $150 out of the records completely',
        'Failing to write off an irrecoverable debt of $150',
        'Recording a $75 electricity bill paid by debiting bank and crediting electricity',
      ], 0),
`A CREDIT in suspense means debits were $150 too BIG.
- A purchase posted twice to purchases: one extra debit of 150. YES.
- A sale left out completely: nothing on either side, still balanced.
- A write-off not made: nothing recorded, still balanced.
- Bank and electricity the wrong way round: one debit and one credit of 75, still balanced.
= Answer: recording a $150 purchase twice in purchases`,
`КРЕДИТ счёта ошибок значит, что дебет БОЛЬШЕ на $150.
- Закупка дважды на счёте закупок: лишний дебет 150. ДА.
- Продажа не записана совсем: ни одной стороны, баланс сохраняется.
- Не списан долг: ничего не записано, баланс сохраняется.
- Банк и электричество наоборот: один дебет и один кредит по 75, баланс сохраняется.
= Ответ: закупка $150 записана дважды на счёте закупок`,
`Vaqtinchalik hisobdagi KREDIT debet $150 ga KO'P ekanini bildiradi.
- Xarid xaridlar hisobiga ikki marta: 150 ortiqcha debet. HA.
- Sotuv umuman yozilmagan: hech bir tomon yo'q, muvozanat saqlanadi.
- Qarz hisobdan chiqarilmagan: hech narsa yozilmagan, muvozanat saqlanadi.
- Bank va elektr teskari: 75 dan bitta debet va bitta kredit, muvozanat saqlanadi.
= Javob: $150 xarid xaridlar hisobiga ikki marta yozilgan`),

    q('18.11', 243, 'single', `A company's trial balance includes a suspense account with a CREDIT balance of $640. It is found that discounts allowed of $850 were DEBITED to the receivables account instead of credited. What is left on the suspense account after this is corrected?`,
      pick(['$1,060 debit', '$210 debit', '$2,340 credit', '$1,490 credit'], 0),
`# Step 1: Size of the error
  850 debited instead of credited: receivables are 1,700 too high.
# Step 2: The correction
  Cr Receivables 1,700, Dr Suspense 1,700
# Step 3: New suspense balance
  Credit 640, then debit 1,700: 1,700 - 640 = 1,060 debit
= Answer: $1,060 debit
! An amount on the wrong side is out by TWICE the amount: 2 x 850.`,
`# Шаг 1: Размер ошибки
  850 в дебет вместо кредита: дебиторы завышены на 1 700.
# Шаг 2: Исправление
  Кт Дебиторы 1 700, Дт Счёт ошибок 1 700
# Шаг 3: Новый остаток счёта ошибок
  Кредит 640, затем дебет 1 700: 1 700 - 640 = 1 060 дебет
= Ответ: $1 060 дебет
! Сумма не на той стороне ошибается на ДВОЙНУЮ величину: 2 x 850.`,
`# 1-qadam: Xato hajmi
  850 kredit o'rniga debetga: debitorlar 1 700 ga oshgan.
# 2-qadam: Tuzatish
  Kt Debitorlar 1 700, Dt Vaqtinchalik hisob 1 700
# 3-qadam: Yangi qoldiq
  Kredit 640, so'ng debet 1 700: 1 700 - 640 = 1 060 debet
= Javob: $1 060 debet
! Noto'g'ri tomondagi summa IKKI baravar xato qiladi: 2 x 850.`),

    q('18.12', 244, 'single', `A company's suspense account has a DEBIT balance of $4,000. Which error could explain it?`,
      pick([
        'A receipt of $4,000 from a credit customer was credited to payables instead of receivables.',
        'The interest received account of $2,000 was left out of the trial balance.',
        'Equipment repairs of $4,000 were capitalised as part of plant and equipment.',
        'A bank balance of $2,000 was shown in the trial balance as an overdraft of $2,000.',
      ], 3),
`A DEBIT in suspense means debits were $4,000 too SMALL (or credits too big).
- Receipt credited to the wrong account: still a credit. Balanced.
- Interest received left out: a CREDIT balance is missing, which gives a CREDIT in suspense, not a debit.
- Repairs capitalised: a debit to the wrong account. Balanced.
- A debit of 2,000 shown as a credit of 2,000: debits 2,000 short AND credits 2,000 too big. Suspense debit 4,000. YES.
= Answer: the bank balance shown as an overdraft`,
`ДЕБЕТ счёта ошибок значит, что дебет МЕНЬШЕ на $4 000 (или кредит больше).
- Поступление в кредит не того счёта: всё равно кредит. Баланс сохраняется.
- Пропущены полученные проценты: не хватает КРЕДИТОВОГО остатка, это даёт КРЕДИТ счёта ошибок, а не дебет.
- Ремонт капитализирован: дебет не того счёта. Баланс сохраняется.
- Дебет 2 000 показан как кредит 2 000: дебет меньше на 2 000 И кредит больше на 2 000. Дебет счёта ошибок 4 000. ДА.
= Ответ: остаток в банке показан как овердрафт`,
`Vaqtinchalik hisobdagi DEBET debet $4 000 ga KAM (yoki kredit ko'p) ekanini bildiradi.
- Kirim noto'g'ri hisob kreditiga: baribir kredit. Muvozanat saqlanadi.
- Olingan foiz tushib qolgan: KREDIT qoldiq yetishmaydi, bu vaqtinchalik hisobda debet emas, KREDIT beradi.
- Ta'mir kapitallashtirilgan: noto'g'ri hisob debeti. Muvozanat saqlanadi.
- 2 000 debet 2 000 kredit sifatida ko'rsatilgan: debet 2 000 ga kam VA kredit 2 000 ga ko'p. Vaqtinchalik hisob debeti 4 000. HA.
= Javob: bankdagi qoldiq overdraft sifatida ko'rsatilgan`),

    q('18.13', 244, 'single', `A company had 600,000 ordinary shares of 20c each. It then made a 1 for 4 rights issue at $1.10 a share, fully taken up. The share premium entry was left out by mistake, so the trial balance did not agree. What balance went into the suspense account?`,
      pick(['$165,000 debit', '$165,000 credit', '$135,000 debit', '$135,000 credit'], 3),
`# Step 1: The full entry that should have been made
  New shares: 600,000 / 4 = 150,000
  Dr Bank 150,000 x 1.10 = 165,000
  Cr Share capital 150,000 x 0.20 = 30,000
  Cr Share premium 150,000 x 0.90 = 135,000
# Step 2: What went missing
  The 135,000 credit to share premium. Credits are 135,000 short.
# Step 3: Suspense makes up the short side
  A CREDIT of 135,000
= Answer: $135,000 credit`,
`# Шаг 1: Полная проводка, которая должна была быть
  Новые акции: 600 000 / 4 = 150 000
  Дт Банк 150 000 x 1,10 = 165 000
  Кт Капитал 150 000 x 0,20 = 30 000
  Кт Эмиссионный доход 150 000 x 0,90 = 135 000
# Шаг 2: Что пропало
  Кредит эмиссионного дохода 135 000. Кредита не хватает на 135 000.
# Шаг 3: Счёт ошибок восполняет недостающую сторону
  КРЕДИТ 135 000
= Ответ: $135 000 кредит`,
`# 1-qadam: Bo'lishi kerak bo'lgan to'liq yozuv
  Yangi aksiyalar: 600 000 / 4 = 150 000
  Dt Bank 150 000 x 1,10 = 165 000
  Kt Kapital 150 000 x 0,20 = 30 000
  Kt Emissiya daromadi 150 000 x 0,90 = 135 000
# 2-qadam: Nima tushib qolgan
  Emissiya daromadining 135 000 krediti. Kredit 135 000 ga kam.
# 3-qadam: Vaqtinchalik hisob kam tomonni to'ldiradi
  135 000 KREDIT
= Javob: $135 000 kredit`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
