// Chapter 14: a section on errors that DO stop the trial balance agreeing, needed for BPP 17.1, 17.3, 17.4,
// 17.9 and 17.12 and Kaplan Kit Q367. Content follows Kaplan Study Text ch 14, section 4 (p. 266).
module.exports = {
  insert: [{
    at: 2,
    section: {
      heading: ['Errors that DO stop the trial balance agreeing', 'Ошибки, из-за которых ведомость НЕ сходится', 'Sinov balansini buzadigan xatolar'],
      simple: [
`Some errors leave the two columns of the trial balance unequal. They happen when the debits and credits of an entry are NOT the same amount.

Ask two questions: which side got too much, and by how much? If one side of an entry is simply missing, the difference is the amount. If something landed on the WRONG side, the difference is TWICE the amount, because one side lost it and the other side gained it.`,
`Некоторые ошибки делают колонки ведомости неравными. Это бывает, когда дебет и кредит записи НЕ равны.

Задайте два вопроса: какая сторона получила лишнее и на сколько? Если одной стороны записи просто нет, разница равна сумме. Если сумма попала НЕ на ту сторону, разница ДВОЙНАЯ: одна сторона её потеряла, а другая получила.`,
`Ba'zi xatolar sinov balansi ustunlarini teng emas qilib qo'yadi. Bu yozuvning debeti va krediti bir xil summa BO'LMAGANDA yuz beradi.

Ikki savol bering: qaysi tomon ortiqcha oldi va qanchaga? Agar yozuvning bir tomoni shunchaki yo'q bo'lsa, farq summaga teng. Agar summa NOTO'G'RI tomonga tushgan bo'lsa, farq IKKI BARAVAR: bir tomon uni yo'qotgan, ikkinchisi olgan.`],
      key: [
`- One side of an entry missing: out by the amount.
- One side posted to the wrong side of an account: out by twice the amount.
- A balance left out of the trial balance: out by that balance.
- A balance on the wrong side of the trial balance: out by twice the balance.
- Wrong amount on both sides (error of original entry): still agrees.
- The difference sits in suspense until the error is found.`,
`- Нет одной стороны записи: разница равна сумме.
- Одна сторона не на той стороне счёта: разница в две суммы.
- Остаток не попал в ведомость: разница равна этому остатку.
- Остаток не на той стороне ведомости: разница в два остатка.
- Неверная сумма с обеих сторон (ошибка исходной записи): всё сходится.
- Разница стоит на неясных суммах, пока ошибку не найдут.`,
`- Yozuvning bir tomoni yo'q: farq summaga teng.
- Bir tomon hisobning noto'g'ri tomoniga yozilgan: farq ikki summa.
- Qoldiq sinov balansiga kirmagan: farq shu qoldiqqa teng.
- Qoldiq sinov balansining noto'g'ri tomonida: farq ikki qoldiq.
- Ikkala tomonda noto'g'ri summa (dastlabki yozuv xatosi): baribir mos keladi.
- Xato topilguncha farq vaqtinchalik hisobda turadi.`],
      exam: [
`- To test an option, write the entry that should have been made and the entry that was made, then compare the two sides.
- Kaplan notes that in a computerised system these errors mostly appear as an entry to suspense, because the software will not accept unequal debits and credits.
- A transposition ($985 entered as $859) on BOTH sides is an error of original entry and does not affect the trial balance.`,
`- Чтобы проверить вариант, запишите правильную проводку и сделанную, затем сравните стороны.
- Kaplan отмечает: в компьютерной системе такие ошибки обычно видны как запись на неясные суммы, потому что программа не примет неравные дебет и кредит.
- Перестановка цифр ($985 записано как $859) с ОБЕИХ сторон — ошибка исходной записи, на ведомость не влияет.`,
`- Variantni tekshirish uchun to'g'ri yozuvni va qilingan yozuvni yozib, tomonlarni solishtiring.
- Kaplan qayd etadi: kompyuter tizimida bu xatolar odatda vaqtinchalik hisobga yozuv sifatida ko'rinadi, chunki dastur teng bo'lmagan debet va kreditni qabul qilmaydi.
- Raqamlar almashuvi ($985 o'rniga $859) IKKALA tomonda — dastlabki yozuv xatosi, sinov balansiga ta'sir qilmaydi.`],
      body: [
`Kaplan describes the errors that stop a trial balance agreeing as those where an entry is single-sided, where the debits and credits are of different values, where an account balance is miscast, where a balance is omitted when the trial balance is extracted, or where the wrong balance is recorded in the trial balance.

To find the size of the difference, compare what should have been posted with what was posted, side by side. An amount that is missing from one side causes a difference equal to that amount. An amount moved from one side to the other is counted twice: once by its absence from the right side, and once by its presence on the wrong side.

In a computerised system the software will not accept an entry whose debits and credits differ, so the difference is usually posted to a suspense account by the bookkeeper. The suspense balance then shows the size and side of the error, and it must be cleared before the financial statements are prepared.`,
`Kaplan относит к ошибкам, из-за которых ведомость не сходится, одностороннюю запись, запись с разными суммами дебета и кредита, неверный подсчёт остатка счёта, пропуск остатка при составлении ведомости и запись в ведомость неверного остатка.

Чтобы найти размер разницы, сравните рядом, что надо было провести и что провели. Сумма, которой нет на одной стороне, даёт разницу на эту сумму. Сумма, перенесённая с одной стороны на другую, считается дважды: один раз как отсутствующая на верной стороне и один раз как лишняя на неверной.

В компьютерной системе программа не примет запись с разными дебетом и кредитом, поэтому бухгалтер обычно относит разницу на счёт неясных сумм. Его остаток показывает размер и сторону ошибки, и его нужно закрыть до подготовки отчётности.`,
`Kaplan sinov balansini buzadigan xatolarga bir tomonlama yozuvni, debet va kredit summalari farq qiladigan yozuvni, hisob qoldig'ini noto'g'ri hisoblashni, sinov balansini tuzishda qoldiqni tushirib qoldirishni va sinov balansiga noto'g'ri qoldiq yozishni kiritadi.

Farq hajmini topish uchun nima yozilishi kerak edi va nima yozilganini yonma-yon solishtiring. Bir tomonda yo'q summa shu summaga teng farq beradi. Bir tomondan ikkinchisiga o'tgan summa ikki marta hisoblanadi: to'g'ri tomonda yo'qligi uchun bir marta va noto'g'ri tomonda borligi uchun bir marta.

Kompyuter tizimida dastur debet va krediti farq qiladigan yozuvni qabul qilmaydi, shuning uchun hisobchi farqni odatda vaqtinchalik hisobga yozadi. Uning qoldig'i xatoning hajmi va tomonini ko'rsatadi va hisobot tayyorlanishidan oldin yopilishi kerak.`],
      example: [
`A cafe's trial balance shows debits $40 bigger than credits. Which error fits?
# Error A: a $20 customer refund credited to bank and also credited to sales
  Two credits of $20, no debit: credits are $40 bigger. Wrong side.
# Error B: a $20 credit note debited to receivables instead of credited
  A $20 debit where a $20 credit should be: debits are 2 x $20 = $40 bigger. FITS
# Error C: the $40 petty cash balance left out of the trial balance
  A $40 debit is missing: credits are $40 bigger. Wrong side.
= Error B explains the difference: something on the wrong side counts twice.`,
`В ведомости кафе дебет больше кредита на $40. Какая ошибка подходит?
# Ошибка A: возврат клиенту $20 в кредит банка и тоже в кредит продаж
  Два кредита по $20, дебета нет: кредит больше на $40. Не та сторона.
# Ошибка B: кредит-нота $20 в дебет дебиторов вместо кредита
  $20 в дебете там, где должен быть кредит $20: дебет больше на 2 x $20 = $40. ПОДХОДИТ
# Ошибка C: остаток мелкой кассы $40 не попал в ведомость
  Нет дебета $40: кредит больше на $40. Не та сторона.
= Разницу объясняет ошибка B: сумма не на той стороне считается дважды.`,
`Kafe sinov balansida debet kreditdan $40 ko'p. Qaysi xato mos keladi?
# A xato: mijozga $20 qaytarish bankka va sotuvga ham kreditlangan
  Ikkita $20 kredit, debet yo'q: kredit $40 ko'p. Noto'g'ri tomon.
# B xato: $20 kredit-nota kredit o'rniga debitorlarga debetlangan
  $20 kredit bo'lishi kerak joyda $20 debet: debet 2 x $20 = $40 ko'p. MOS
# C xato: $40 kichik kassa qoldig'i sinov balansiga kirmagan
  $40 debet yo'q: kredit $40 ko'p. Noto'g'ri tomon.
= Farqni B xato tushuntiradi: noto'g'ri tomondagi summa ikki marta hisoblanadi.`],
      source: [
        'Kaplan Study Text (exams Sept 2025 – Aug 2026), chapter 14, "Errors where the trial balance does not balance", p. 266. Practised in Kaplan Exam Kit Q367 and BPP Kit 17.1, 17.3, 17.4, 17.9, 17.12.',
        'Kaplan Study Text (экзамены сент. 2025 – авг. 2026), глава 14, «Errors where the trial balance does not balance», с. 266. Практика: Kaplan Exam Kit Q367 и BPP Kit 17.1, 17.3, 17.4, 17.9, 17.12.',
        'Kaplan Study Text (imtihonlar 2025-yil sent. – 2026-yil avg.), 14-bob, «Errors where the trial balance does not balance», 266-bet. Mashq: Kaplan Exam Kit Q367 va BPP Kit 17.1, 17.3, 17.4, 17.9, 17.12.',
      ],
    },
  }],
  add: [{
    term: ['Transposition error', 'Ошибка перестановки цифр', 'Raqamlar almashuvi xatosi'],
    definition: ['Two digits written the wrong way round. When the same wrong amount is used on both sides, Kaplan treats it as an error of original entry, so the trial balance still agrees.', 'Две цифры записаны в обратном порядке. Если одна и та же неверная сумма стоит с обеих сторон, Kaplan считает это ошибкой исходной записи, и ведомость сходится.', 'Ikki raqam teskari tartibda yozilgan. Ikkala tomonda bir xil noto\'g\'ri summa bo\'lsa, Kaplan buni dastlabki yozuv xatosi deb hisoblaydi va sinov balansi mos keladi.'],
    example: ['A $985 invoice entered as $859 on both sides.', 'Счёт на $985 записан как $859 с обеих сторон.', '$985 lik hisob-faktura ikkala tomonda $859 deb yozilgan.'],
  }],
};
