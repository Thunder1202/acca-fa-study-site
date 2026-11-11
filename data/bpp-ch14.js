'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 17
// "Correction of errors", rewritten with new figures. bppRef/bppPage point to BPP's own answer.
// Left out: 17.13 (BPP says a transposition shows in the trial balance; the current Kaplan text
// treats it as an error of original entry that does not) and 17.18 (control accounts, no longer
// in the Kaplan 2025-26 syllabus).
(function () {
  const TOPIC = 'chapter-14';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp14-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

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
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
