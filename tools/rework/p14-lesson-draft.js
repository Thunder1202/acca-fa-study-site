module.exports = {
  ...require('./p14q.js'),
  sections: [
    {
      simple: [
`A trial balance is a list of every account's balance at the year end, with debits in one column and credits in the other. Because every entry has an equal debit and credit, the two columns should add up to the same total.

If they agree, you know debits and credits were recorded equally, but NOT that everything is right: an amount could be in the wrong account or simply missing. The trial balance is a working document, not one of the financial statements.`,
`Оборотная ведомость — список остатков всех счетов на конец года: дебеты в одной колонке, кредиты в другой. Так как в каждой записи дебет равен кредиту, итоги колонок должны совпасть.

Если совпали, вы знаете, что дебеты и кредиты записаны поровну, но НЕ то, что всё верно: сумма может быть не на том счёте или вовсе пропущена. Оборотная ведомость — рабочий документ, а не финансовый отчёт.`,
`Sinov balansi — yil oxirida har bir hisob qoldig'i ro'yxati: debetlar bir ustunda, kreditlar boshqasida. Har bir yozuvda debet kreditga teng bo'lgani uchun ustunlar jami bir xil bo'lishi kerak.

Mos kelsa, debet va kreditlar teng yozilganini bilasiz, lekin hammasi to'g'riligini EMAS: summa noto'g'ri hisobda yoki umuman tushib qolgan bo'lishi mumkin. Sinov balansi ishchi hujjat, moliyaviy hisobot emas.`],
      example: [
`A new shop's trial balance after its first weeks.
# Debit column (assets, expenses, drawings)
  Bank $3,500 + shelves $3,000 + purchases $5,500 + rent $900 + drawings $600 + receivables $400 = $13,900
# Credit column (capital, liabilities, income)
  Capital $8,000 + loan $3,000 + payables $1,000 + sales $1,900 = $13,900
= Both $13,900: equal debits and credits were recorded. It still does not prove there are no mistakes.`,
`Оборотная ведомость нового магазина после первых недель.
# Дебет (активы, расходы, изъятия)
  Банк $3,500 + полки $3,000 + закупки $5,500 + аренда $900 + изъятия $600 + дебиторы $400 = $13,900
# Кредит (капитал, обязательства, доходы)
  Капитал $8,000 + заём $3,000 + кредиторы $1,000 + продажи $1,900 = $13,900
= Обе $13,900: дебеты и кредиты записаны поровну. Но это не доказывает, что ошибок нет.`,
`Yangi do'konning birinchi haftalardan keyingi sinov balansi.
# Debet (aktivlar, xarajatlar, olib qo'yishlar)
  Bank $3,500 + javonlar $3,000 + xaridlar $5,500 + ijara $900 + olib qo'yish $600 + debitorlar $400 = $13,900
# Kredit (kapital, majburiyatlar, daromad)
  Kapital $8,000 + qarz $3,000 + kreditorlar $1,000 + sotuv $1,900 = $13,900
= Ikkalasi $13,900: debet va kreditlar teng yozilgan. Lekin bu xato yo'qligini isbotlamaydi.`],
    },
    {
      simple: [
`Six kinds of mistake leave the trial balance balancing, because the debit and credit are still equal:
- Omission: the transaction was not recorded at all.
- Commission: right type of account, wrong one (rates posted to wages).
- Principle: wrong TYPE of account (a new machine posted as repairs).
- Compensating: two mistakes that cancel out.
- Original entry: the wrong amount on both sides.
- Reversal: right accounts, but debit and credit swapped.

To fix any mistake: write what SHOULD have been posted, write what WAS posted, and post whatever turns the second into the first.`,
`Шесть видов ошибок не нарушают баланс ведомости, потому что дебет и кредит всё равно равны:
- Пропуск: операцию вообще не записали.
- Ошибка счёта: счёт того же типа, но не тот (налог на имущество на зарплату).
- Нарушение принципа: счёт не того ТИПА (новый станок как ремонт).
- Компенсирующие: две ошибки, гасящие друг друга.
- Исходная запись: неверная сумма на обеих сторонах.
- Обратная запись: верные счета, но дебет и кредит перепутаны.

Чтобы исправить любую: запишите, что НАДО было провести, что ПРОВЕЛИ, и проведите то, что превращает второе в первое.`,
`Olti turdagi xato sinov balansini buzmaydi, chunki debet va kredit baribir teng:
- Tushib qolish: operatsiya umuman yozilmagan.
- Noto'g'ri hisob: bir xil turdagi, lekin boshqa hisob (mol-mulk solig'i ish haqiga).
- Tamoyil xatosi: noto'g'ri TURDAGI hisob (yangi dastgoh ta'mir sifatida).
- Kompensatsiyalovchi: bir-birini yopadigan ikki xato.
- Dastlabki yozuv: ikkala tomonda noto'g'ri summa.
- Teskari yozuv: to'g'ri hisoblar, lekin debet va kredit almashgan.

Har qanday xatoni tuzatish: nima yozilishi KERAK edi, nima YOZILGAN, va ikkinchisini birinchisiga aylantiradigan yozuvni kiriting.`],
      example: [
`Two mistakes in a cafe's books.
# Mistake 1: a new $3,000 freezer posted as Dr Repairs, Cr Bank
  Should be: Dr Freezer $3,000, Cr Bank $3,000
  Was: Dr Repairs $3,000, Cr Bank $3,000
  The bank side is right, so only the debit moves: Dr Freezer $3,000, Cr Repairs $3,000
  Type: error of PRINCIPLE (an asset treated as an expense)
# Mistake 2: $400 of insurance posted to the rent account
  Fix: Dr Insurance $400, Cr Rent $400
  Type: error of COMMISSION (right type of account, wrong one)
= The trial balance agreed before and after both fixes.`,
`Две ошибки в учёте кафе.
# Ошибка 1: новая морозилка $3,000 проведена как Дт Ремонт, Кт Банк
  Надо: Дт Морозилка $3,000, Кт Банк $3,000
  Было: Дт Ремонт $3,000, Кт Банк $3,000
  Банк верен, двигаем только дебет: Дт Морозилка $3,000, Кт Ремонт $3,000
  Вид: НАРУШЕНИЕ ПРИНЦИПА (актив учтён как расход)
# Ошибка 2: страховку $400 провели на счёт аренды
  Исправление: Дт Страхование $400, Кт Аренда $400
  Вид: ОШИБКА СЧЁТА (тип верный, счёт не тот)
= Ведомость сходилась и до, и после обоих исправлений.`,
`Kafe hisobida ikki xato.
# 1-xato: yangi $3,000 lik muzlatgich Dt Ta'mir, Kt Bank deb yozilgan
  Kerak: Dt Muzlatgich $3,000, Kt Bank $3,000
  Bo'lgan: Dt Ta'mir $3,000, Kt Bank $3,000
  Bank to'g'ri, faqat debet ko'chadi: Dt Muzlatgich $3,000, Kt Ta'mir $3,000
  Turi: TAMOYIL xatosi (aktiv xarajat sifatida)
# 2-xato: $400 sug'urta ijara hisobiga yozilgan
  Tuzatish: Dt Sug'urta $400, Kt Ijara $400
  Turi: NOTO'G'RI HISOB xatosi (turi to'g'ri, hisob boshqa)
= Sinov balansi ikkala tuzatishdan oldin ham, keyin ham mos edi.`],
    },
    {
      simple: [
`A suspense account is a temporary "waiting room" for an amount whose proper account is not known yet, or for the difference when debits and credits do not match.

To clear it, ask for each item: which side was recorded correctly? The amount in suspense is the side that went astray, so move it from suspense to the account it belongs in. It must be empty before the financial statements are prepared.`,
`Счёт неясных сумм — временная «приёмная» для суммы, чей правильный счёт пока неизвестен, или для разницы, когда дебеты и кредиты не сходятся.

Чтобы закрыть его, спросите по каждой статье: какая сторона записана верно? В счёте неясных сумм — та сторона, что «потерялась», перенесите её туда, где ей место. До подготовки отчётности счёт должен быть пуст.`,
`Vaqtinchalik hisob — to'g'ri hisobi hali noma'lum summa yoki debet va kreditlar mos kelmaganda farq uchun vaqtinchalik «kutish zali».

Uni yopish uchun har bir modda haqida so'rang: qaysi tomon to'g'ri yozilgan? Vaqtinchalik hisobda «adashgan» tomon turibdi, uni tegishli hisobga ko'chiring. Hisobot tayyorlanishidan oldin u bo'sh bo'lishi kerak.`],
      example: [
`A shop's helper is unsure about two items.
# Item 1: pays $650 for a display stand
  Not sure where it goes: Dr Suspense $650, Cr Bank $650
# Item 2: $200 arrives from an unknown source
  Dr Bank $200, Cr Suspense $200
# Suspense now has a debit balance of $650 - $200 = $450
# Clearing it
  The stand is an asset: Dr Fixtures $650, Cr Suspense $650
  The $200 was a customer paying a debt: Dr Suspense $200, Cr Receivables $200
= Suspense: $450 - $650 + $200 = $0. Cleared.`,
`Помощник магазина не уверен в двух статьях.
# Статья 1: платит $650 за витрину
  Не знает, куда: Дт Неясные суммы $650, Кт Банк $650
# Статья 2: приходят $200 из неизвестного источника
  Дт Банк $200, Кт Неясные суммы $200
# На счёте неясных сумм дебет $650 - $200 = $450
# Закрываем
  Витрина — актив: Дт Оборудование $650, Кт Неясные суммы $650
  $200 — покупатель погасил долг: Дт Неясные суммы $200, Кт Дебиторы $200
= Неясные суммы: $450 - $650 + $200 = $0. Закрыто.`,
`Do'kon yordamchisi ikki moddaga ishonchsiz.
# 1-modda: vitrina uchun $650 to'laydi
  Qayerga yozishni bilmaydi: Dt Vaqtinchalik $650, Kt Bank $650
# 2-modda: noma'lum manbadan $200 keladi
  Dt Bank $200, Kt Vaqtinchalik $200
# Vaqtinchalik hisobda $650 - $200 = $450 debet
# Yopamiz
  Vitrina — aktiv: Dt Jihozlar $650, Kt Vaqtinchalik $650
  $200 — mijoz qarzini to'lagan: Dt Vaqtinchalik $200, Kt Debitorlar $200
= Vaqtinchalik: $450 - $650 + $200 = $0. Yopildi.`],
    },
    {
      simple: [
`Does a correction change profit? Look at the two accounts it touches.

- Both in the statement of financial position (bank, receivables, suspense...): profit does NOT change.
- One in profit or loss: a debit to it LOWERS profit; a credit to it RAISES profit.
- Both in profit or loss (moving a cost from rent to insurance): total profit does NOT change.

Suspense counts as a statement of financial position account.`,
`Меняет ли исправление прибыль? Посмотрите на два затронутых счёта.

- Оба в отчёте о финансовом положении (банк, дебиторы, неясные суммы...): прибыль НЕ меняется.
- Один в прибыли или убытке: дебет ему СНИЖАЕТ прибыль, кредит — ПОВЫШАЕТ.
- Оба в прибыли или убытке (перенос с аренды на страховку): общая прибыль НЕ меняется.

Счёт неясных сумм считается счётом отчёта о финансовом положении.`,
`Tuzatish foydani o'zgartiradimi? U tegadigan ikki hisobga qarang.

- Ikkalasi moliyaviy holat hisobotida (bank, debitorlar, vaqtinchalik...): foyda O'ZGARMAYDI.
- Bittasi foyda yoki zararda: unga debet foydani KAMAYTIRADI, kredit OSHIRADI.
- Ikkalasi foyda yoki zararda (ijaradan sug'urtaga ko'chirish): jami foyda O'ZGARMAYDI.

Vaqtinchalik hisob moliyaviy holat hisoboti hisobi hisoblanadi.`],
      example: [
`The cafe's draft profit is $8,000. Correct it.
# The $3,000 freezer posted to repairs
  Repairs (an expense) go down by $3,000: profit + $3,000
  The freezer now needs a year's depreciation at 20%: $600: profit - $600
# $400 moved from rent to insurance
  Both are expenses: no change
# A $500 customer receipt that was left out
  Bank and receivables only: no change
= Revised profit: $8,000 + $3,000 - $600 = $10,400`,
`Черновая прибыль кафе $8,000. Исправим её.
# Морозилка $3,000 на ремонте
  Ремонт (расход) уменьшается на $3,000: прибыль + $3,000
  Морозилке нужна амортизация за год 20%: $600: прибыль - $600
# $400 перенесены с аренды на страховку
  Оба — расходы: без изменений
# Пропущенное поступление от покупателя $500
  Только банк и дебиторы: без изменений
= Исправленная прибыль: $8,000 + $3,000 - $600 = $10,400`,
`Kafening dastlabki foydasi $8,000. Uni tuzatamiz.
# Ta'mirga yozilgan $3,000 muzlatgich
  Ta'mir (xarajat) $3,000 kamayadi: foyda + $3,000
  Muzlatgichga 20% yillik amortizatsiya kerak: $600: foyda - $600
# Ijaradan sug'urtaga o'tkazilgan $400
  Ikkalasi xarajat: o'zgarishsiz
# Tushib qolgan mijozdan $500 tushum
  Faqat bank va debitorlar: o'zgarishsiz
= Tuzatilgan foyda: $8,000 + $3,000 - $600 = $10,400`],
    },
  ],
  terms: {
    'Trial balance': ['Debit column $13,900 and credit column $13,900: it agrees.', 'Дебет $13,900 и кредит $13,900: ведомость сходится.', 'Debet $13,900 va kredit $13,900: balans mos.'],
    'Error of omission': ['A $200 sales invoice that was never entered at all.', 'Счёт на продажу $200, который вообще не внесли.', 'Umuman kiritilmagan $200 lik sotuv hisob-fakturasi.'],
    'Error of commission': ['Insurance of $400 posted to the rent account.', 'Страховка $400 проведена на счёт аренды.', '$400 sug\'urta ijara hisobiga yozilgan.'],
    'Error of principle': ['A new $3,000 freezer posted to repairs.', 'Новая морозилка за $3,000 проведена как ремонт.', 'Yangi $3,000 lik muzlatgich ta\'mirga yozilgan.'],
    'Compensating error': ['Wages are $90 too high and rent is $90 too low, so the totals still agree.', 'Зарплата завышена на $90, аренда занижена на $90, итоги всё равно сходятся.', 'Ish haqi $90 ko\'p, ijara $90 kam, jamlar baribir mos.'],
    'Error of original entry': ['An invoice for $985 entered as $859 on both sides.', 'Счёт на $985 внесён как $859 на обеих сторонах.', '$985 lik hisob-faktura ikkala tomonga $859 deb kiritilgan.'],
    'Reversal of entries': ['A sale posted as Dr Sales $200, Cr Bank $200 instead of the other way round.', 'Продажа проведена как Дт Продажи $200, Кт Банк $200 вместо наоборот.', 'Sotuv teskarisi o\'rniga Dt Sotuv $200, Kt Bank $200 deb yozilgan.'],
    'Suspense account': ['$650 paid for a stand, parked in suspense until someone decides it is an asset.', '$650 за витрину временно на счёте неясных сумм, пока не решат, что это актив.', 'Vitrina uchun $650, aktiv ekani hal bo\'lguncha vaqtinchalik hisobda.'],
  },
  add: [
    {
      term: ['Correcting journal', 'Исправительная проводка', 'Tuzatuvchi yozuv'],
      definition: ['A journal that turns what was posted into what should have been posted.', 'Проводка, которая превращает проведённое в то, что следовало провести.', 'Yozilganini yozilishi kerak bo\'lganiga aylantiradigan jurnal yozuvi.'],
      example: ['Freezer posted to repairs: Dr Freezer $3,000, Cr Repairs $3,000.', 'Морозилка на ремонте: Дт Морозилка $3,000, Кт Ремонт $3,000.', 'Ta\'mirga yozilgan muzlatgich: Dt Muzlatgich $3,000, Kt Ta\'mir $3,000.'],
    },
  ],
};
