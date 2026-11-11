'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 10 (accruals and
// prepayments), reworded with new figures. bppRef/bppPage point to BPP's own answer. Left out as repeats of
// the same skill: 10.4 (as 10.1), 10.9 (as 10.5) and 10.14 (as 10.12).
(function () {
  const TOPIC = 'chapter-09';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp09-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('10.1', 217, 'single', `A company sublets part of its building. Rent is received quarterly in advance: 1 September Year 1, $6,000 for September to November; 1 December Year 1, $6,000 for December to February; 1 March Year 2, $7,200 for March to May; 1 June Year 2, $7,200 for June to August; 1 September Year 2, $7,200 for September to November. The year ends on 31 October Year 2. What goes into the financial statements?`,
      pick([
        'Rental income $27,200; rent received in advance (credit) $2,400',
        'Rental income $27,200; rent owing from the tenant (debit) $2,400',
        'Rental income $29,600; rent received in advance (credit) $2,400',
        'Rental income $26,000; rent received in advance (credit) $4,800',
      ], 0),
`Count the rent EARNED from 1 November Year 1 to 31 October Year 2, whenever it was received.
# Step 1: Month by month
  November Year 1: 6,000 x 1/3 = 2,000
  December to February: 6,000
  March to May: 7,200
  June to August: 7,200
  September to October Year 2: 7,200 x 2/3 = 4,800
# Step 2: Income for the year
  2,000 + 6,000 + 7,200 + 7,200 + 4,800 = 27,200
# Step 3: Received but not yet earned
  November Year 2: 7,200 x 1/3 = 2,400. The tenant has paid it early, so it is a liability (credit).
= Answer: income $27,200; rent received in advance $2,400
! Cash received in advance is owed back to the tenant in service, so it is a credit, not a receivable.`,
`Считаем аренду, ЗАРАБОТАННУЮ с 1 ноября 1-го года по 31 октября 2-го года, когда бы её ни получили.
# Шаг 1: По месяцам
  Ноябрь 1-го года: 6 000 x 1/3 = 2 000
  Декабрь-февраль: 6 000
  Март-май: 7 200
  Июнь-август: 7 200
  Сентябрь-октябрь 2-го года: 7 200 x 2/3 = 4 800
# Шаг 2: Доход за год
  2 000 + 6 000 + 7 200 + 7 200 + 4 800 = 27 200
# Шаг 3: Получено, но ещё не заработано
  Ноябрь 2-го года: 7 200 x 1/3 = 2 400. Арендатор заплатил заранее, это обязательство (кредит).
= Ответ: доход $27 200; аренда, полученная авансом, $2 400
! Деньги, полученные авансом, бизнес «должен» арендатору услугой, поэтому это кредит, а не дебиторка.`,
`1-yil 1 noyabrdan 2-yil 31 oktyabrgacha ISHLAB TOPILGAN ijarani sanaymiz, qachon olinganidan qat'i nazar.
# 1-qadam: Oyma-oy
  1-yil noyabr: 6 000 x 1/3 = 2 000
  Dekabr-fevral: 6 000
  Mart-may: 7 200
  Iyun-avgust: 7 200
  2-yil sentyabr-oktyabr: 7 200 x 2/3 = 4 800
# 2-qadam: Yillik daromad
  2 000 + 6 000 + 7 200 + 7 200 + 4 800 = 27 200
# 3-qadam: Olingan, lekin hali ishlab topilmagan
  2-yil noyabr: 7 200 x 1/3 = 2 400. Ijarachi oldindan to'lagan, bu majburiyat (kredit).
= Javob: daromad $27 200; oldindan olingan ijara $2 400
! Oldindan olingan pul uchun biznes ijarachiga xizmat qarzdor, shuning uchun bu kredit, debitorlik emas.`),

    q('10.2', 217, 'single', `A company pays rent quarterly in ARREARS on 1 January, 1 April, 1 July and 1 October. The yearly rent rose from $48,000 to $60,000 from 1 July Year 2. The year ends on 31 August Year 2. What are the rent expense and the accrual?`,
      pick(['Expense $50,000; accrual $10,000', 'Expense $50,000; accrual $5,000', 'Expense $52,000; accrual $10,000', 'Expense $48,000; accrual $15,000'], 0),
`# Step 1: Expense for September Year 1 to August Year 2
  September to June (10 months) at 48,000: 48,000 x 10/12 = 40,000
  July and August (2 months) at 60,000: 60,000 x 2/12 = 10,000
  Total: 50,000
# Step 2: What is unpaid at 31 August?
  The 1 July payment covered April to June. July and August are paid on 1 October.
  60,000 x 2/12 = 10,000
= Answer: expense $50,000; accrual $10,000`,
`# Шаг 1: Расход с сентября 1-го года по август 2-го года
  Сентябрь-июнь (10 месяцев) по 48 000: 48 000 x 10/12 = 40 000
  Июль и август (2 месяца) по 60 000: 60 000 x 2/12 = 10 000
  Итого: 50 000
# Шаг 2: Что не оплачено на 31 августа?
  Платёж 1 июля покрыл апрель-июнь. Июль и август платят 1 октября.
  60 000 x 2/12 = 10 000
= Ответ: расход $50 000; начисление $10 000`,
`# 1-qadam: 1-yil sentyabrdan 2-yil avgustgacha xarajat
  Sentyabr-iyun (10 oy) 48 000 dan: 48 000 x 10/12 = 40 000
  Iyul va avgust (2 oy) 60 000 dan: 60 000 x 2/12 = 10 000
  Jami: 50 000
# 2-qadam: 31 avgustda nima to'lanmagan?
  1 iyuldagi to'lov aprel-iyunni qopladi. Iyul va avgust 1 oktyabrda to'lanadi.
  60 000 x 2/12 = 10 000
= Javob: xarajat $50 000; hisoblangan qarz $10 000`),

    q('10.3', 217, 'number', `At the start of the year a company held heating oil costing $6,400 and owed $2,700 for oil. At the end of the year it held oil costing $7,100 and owed $3,500. It paid $29,800 for heating oil during the year. What is the heating oil expense for the year? (in $)`,
      amount(29900, '$29,900'),
`# Step 1: Start with the cash paid
  29,800
# Step 2: Adjust for the start of the year
  + 6,400 oil held at the start (used this year)
  - 2,700 owed at the start (that oil was last year's cost)
# Step 3: Adjust for the end of the year
  - 7,100 oil still held (not used yet)
  + 3,500 owed at the end (this year's cost, not yet paid)
# Step 4: Total
  29,800 + 6,400 - 2,700 - 7,100 + 3,500 = 29,900
= Answer: $29,900`,
`# Шаг 1: Начнём с оплаченного
  29 800
# Шаг 2: Корректировка на начало года
  + 6 400 мазут в наличии на начало (использован в этом году)
  - 2 700 долг на начало (это затраты прошлого года)
# Шаг 3: Корректировка на конец года
  - 7 100 мазут в наличии (ещё не использован)
  + 3 500 долг на конец (затраты этого года, не оплачены)
# Шаг 4: Итог
  29 800 + 6 400 - 2 700 - 7 100 + 3 500 = 29 900
= Ответ: $29 900`,
`# 1-qadam: To'langandan boshlaymiz
  29 800
# 2-qadam: Yil boshi uchun tuzatish
  + 6 400 boshidagi yoqilg'i (shu yil ishlatilgan)
  - 2 700 boshidagi qarz (o'tgan yil xarajati)
# 3-qadam: Yil oxiri uchun tuzatish
  - 7 100 qolgan yoqilg'i (hali ishlatilmagan)
  + 3 500 oxiridagi qarz (shu yil xarajati, to'lanmagan)
# 4-qadam: Jami
  29 800 + 6 400 - 2 700 - 7 100 + 3 500 = 29 900
= Javob: $29 900`),

    q('10.5', 218, 'single', `A business's year ends on 30 April. It pays rent quarterly in advance. The yearly rent rose from $36,000 to $42,000 from 1 January Year 2. What is the rent expense for the year to 30 April Year 2?`,
      pick(['$38,000', '$40,000', '$39,500', '$42,000'], 0),
`Paying in advance does not change the expense. The expense is the rent for the months in the year.
# Step 1: May to December Year 1 (8 months) at the old rate
  36,000 x 8/12 = 24,000
# Step 2: January to April Year 2 (4 months) at the new rate
  42,000 x 4/12 = 14,000
# Step 3: Total
  24,000 + 14,000 = 38,000
= Answer: $38,000`,
`Оплата авансом не меняет расход. Расход — это аренда за месяцы года.
# Шаг 1: Май-декабрь 1-го года (8 месяцев) по старой ставке
  36 000 x 8/12 = 24 000
# Шаг 2: Январь-апрель 2-го года (4 месяца) по новой ставке
  42 000 x 4/12 = 14 000
# Шаг 3: Итог
  24 000 + 14 000 = 38 000
= Ответ: $38 000`,
`Oldindan to'lash xarajatni o'zgartirmaydi. Xarajat — yil oylari uchun ijara.
# 1-qadam: 1-yil may-dekabr (8 oy) eski stavkada
  36 000 x 8/12 = 24 000
# 2-qadam: 2-yil yanvar-aprel (4 oy) yangi stavkada
  42 000 x 4/12 = 14 000
# 3-qadam: Jami
  24 000 + 14 000 = 38 000
= Javob: $38 000`),

    q('10.6', 218, 'single', `A garage sells fuel. At the start of the year fuel inventory was $14,200 and invoices of $2,100 were awaited for fuel already received. During the year fuel invoices of $92,600 were paid. At the year end a delivery of $1,800 had not been invoiced (the only balance owed) and fuel inventory was $11,300. What is the cost of fuel charged to profit or loss?`,
      pick(['$95,200', '$95,500', '$99,400', '$91,600'], 0),
`# Step 1: Purchases for the year
  Paid 92,600
  - 2,100 owed at the start (last year's purchases)
  + 1,800 owed at the end (this year's purchases)
  = 92,300
# Step 2: Cost of fuel used
  Opening inventory 14,200 + purchases 92,300 - closing inventory 11,300 = 95,200
= Answer: $95,200`,
`# Шаг 1: Закупки за год
  Оплачено 92 600
  - 2 100 долг на начало (закупки прошлого года)
  + 1 800 долг на конец (закупки этого года)
  = 92 300
# Шаг 2: Стоимость израсходованного топлива
  Запасы на начало 14 200 + закупки 92 300 - запасы на конец 11 300 = 95 200
= Ответ: $95 200`,
`# 1-qadam: Yillik xaridlar
  To'langan 92 600
  - 2 100 boshidagi qarz (o'tgan yil xaridlari)
  + 1 800 oxiridagi qarz (shu yil xaridlari)
  = 92 300
# 2-qadam: Sarflangan yoqilg'i tannarxi
  Boshlang'ich zaxira 14 200 + xaridlar 92 300 - yakuniy zaxira 11 300 = 95 200
= Javob: $95 200`),

    q('10.7', 218, 'single', `The year ends on 31 March Year 2. At 1 April Year 1, $260 of electricity was accrued. Electricity bills paid in the year: 1 May Year 1, $390 for the 3 months to 30 April Year 1; 1 August Year 1, $480 for the 3 months to 31 July; 1 November Year 1, $540 for the 3 months to 31 October; 31 March Year 2, $600 for the 3 months to 31 January Year 2. On 1 May Year 2, $720 was paid for the 3 months to 30 April Year 2. What is the accrual at 31 March Year 2 and the charge for the year?`,
      pick(['Accrual $480; charge $2,230', 'Accrual nil; charge $2,010', 'Accrual $480; charge $2,490', 'Accrual $240; charge $1,990'], 0),
`# Step 1: Accrual at the year end
  February and March Year 2 are not yet paid. They are part of the $720 bill for February to April.
  720 x 2/3 = 480
# Step 2: Charge for the year
  Payments in the year: 390 + 480 + 540 + 600 = 2,010
  - 260 opening accrual (last year's cost, paid this year)
  + 480 closing accrual
  2,010 - 260 + 480 = 2,230
= Answer: accrual $480; charge $2,230
! The $720 paid on 1 May falls after the year end. Only the part for February and March is accrued.`,
`# Шаг 1: Начисление на конец года
  Февраль и март 2-го года ещё не оплачены. Они входят в счёт $720 за февраль-апрель.
  720 x 2/3 = 480
# Шаг 2: Расход за год
  Платежи за год: 390 + 480 + 540 + 600 = 2 010
  - 260 начисление на начало (затраты прошлого года, оплачены в этом)
  + 480 начисление на конец
  2 010 - 260 + 480 = 2 230
= Ответ: начисление $480; расход $2 230
! $720 заплатили 1 мая, уже после конца года. Начисляют только часть за февраль и март.`,
`# 1-qadam: Yil oxiridagi hisoblangan qarz
  2-yil fevral va mart hali to'lanmagan. Ular fevral-aprel uchun $720 hisobga kiradi.
  720 x 2/3 = 480
# 2-qadam: Yillik xarajat
  Yil davomidagi to'lovlar: 390 + 480 + 540 + 600 = 2 010
  - 260 boshidagi hisoblangan qarz (o'tgan yil xarajati, shu yil to'langan)
  + 480 oxiridagi hisoblangan qarz
  2 010 - 260 + 480 = 2 230
= Javob: hisoblangan qarz $480; xarajat $2 230
! $720 1 mayda, yil oxiridan keyin to'langan. Faqat fevral va mart qismi hisoblanadi.`),

    q('10.8', 219, 'single', `A company pays for gas by a standing order of $500 a month. At the start of the year it had overpaid the supplier by $150. Gas bills for the four quarters of the year were $1,250, $1,500, $1,900 and $1,650. What is the gas expense for the year?`,
      pick(['$6,300', '$6,000', '$6,150', '$6,450'], 0),
`The expense is the gas USED in the year, which is what the four bills show. How it was paid does not matter.
# Step 1: Add the bills
  1,250 + 1,500 + 1,900 + 1,650 = 6,300
# Step 2: What happens to the payments?
  Payments 500 x 12 = 6,000, plus the 150 overpaid at the start = 6,150 paid towards bills of 6,300.
  The 150 difference is owed to the supplier at the year end. It does not change the expense.
= Answer: $6,300`,
`Расход — это газ, ИСПОЛЬЗОВАННЫЙ за год, то есть сумма четырёх счетов. Способ оплаты не важен.
# Шаг 1: Сложим счета
  1 250 + 1 500 + 1 900 + 1 650 = 6 300
# Шаг 2: Что с платежами?
  Платежи 500 x 12 = 6 000 плюс переплата 150 на начало = 6 150 в счёт счетов на 6 300.
  Разница 150 — долг поставщику на конец года. На расход она не влияет.
= Ответ: $6 300`,
`Xarajat — yil davomida ISHLATILGAN gaz, ya'ni to'rtta hisob summasi. To'lov usuli muhim emas.
# 1-qadam: Hisoblarni qo'shamiz
  1 250 + 1 500 + 1 900 + 1 650 = 6 300
# 2-qadam: To'lovlar-chi?
  To'lovlar 500 x 12 = 6 000, plyus boshidagi 150 ortiqcha to'lov = 6 300 lik hisoblarga 6 150.
  150 farq yil oxirida yetkazib beruvchiga qarz. U xarajatni o'zgartirmaydi.
= Javob: $6 300`),

    q('10.10', 219, 'number', `A company received $264,500 cash from tenants this year. Rent received in advance was $21,300 at the start of the year and $25,800 at the end. Rent owed by tenants was $13,600 at the start and $15,200 at the end. All rent owed is later collected. What is rental income for the year? (in $)`,
      amount(261600, '$261,600'),
`# Step 1: Start with the cash received
  264,500
# Step 2: Rent paid in advance
  + 21,300 received last year, earned this year
  - 25,800 received this year, earned next year
# Step 3: Rent owed by tenants
  - 13,600 earned last year, collected this year
  + 15,200 earned this year, not yet collected
# Step 4: Total
  264,500 + 21,300 - 25,800 - 13,600 + 15,200 = 261,600
= Answer: $261,600`,
`# Шаг 1: Начнём с полученных денег
  264 500
# Шаг 2: Аренда, полученная авансом
  + 21 300 получено в прошлом году, заработано в этом
  - 25 800 получено в этом году, будет заработано в следующем
# Шаг 3: Долг арендаторов
  - 13 600 заработано в прошлом году, получено в этом
  + 15 200 заработано в этом году, ещё не получено
# Шаг 4: Итог
  264 500 + 21 300 - 25 800 - 13 600 + 15 200 = 261 600
= Ответ: $261 600`,
`# 1-qadam: Olingan puldan boshlaymiz
  264 500
# 2-qadam: Oldindan olingan ijara
  + 21 300 o'tgan yil olingan, shu yil ishlab topilgan
  - 25 800 shu yil olingan, keyingi yil ishlab topiladi
# 3-qadam: Ijarachilar qarzi
  - 13 600 o'tgan yil ishlab topilgan, shu yil olingan
  + 15 200 shu yil ishlab topilgan, hali olinmagan
# 4-qadam: Jami
  264 500 + 21 300 - 25 800 - 13 600 + 15 200 = 261 600
= Javob: $261 600`),

    q('10.11', 220, 'single', `During Year 1 a company paid $45,000 for rent covering 1 November Year 0 to 30 April Year 2. The year ends on 31 December Year 1. What goes into the financial statements for Year 1?`,
      pick([
        'Expense $30,000; prepayment $10,000',
        'Expense $30,000; prepayment $15,000',
        'Expense $35,000; accrual $10,000',
        'Expense $45,000; no prepayment',
      ], 0),
`# Step 1: Rent per month
  The payment covers 18 months, so 45,000 / 18 = 2,500 a month.
# Step 2: Split the 18 months
  November and December Year 0 (2 months): last year's cost, 5,000
  January to December Year 1 (12 months): this year's expense, 30,000
  January to April Year 2 (4 months): paid early, a prepayment of 10,000
= Answer: expense $30,000; prepayment $10,000`,
`# Шаг 1: Аренда в месяц
  Платёж покрывает 18 месяцев: 45 000 / 18 = 2 500 в месяц.
# Шаг 2: Разделим 18 месяцев
  Ноябрь и декабрь 0-го года (2 месяца): затраты прошлого года, 5 000
  Январь-декабрь 1-го года (12 месяцев): расход этого года, 30 000
  Январь-апрель 2-го года (4 месяца): оплачено заранее, предоплата 10 000
= Ответ: расход $30 000; предоплата $10 000`,
`# 1-qadam: Oylik ijara
  To'lov 18 oyni qoplaydi: 45 000 / 18 = oyiga 2 500.
# 2-qadam: 18 oyni bo'lamiz
  0-yil noyabr va dekabr (2 oy): o'tgan yil xarajati, 5 000
  1-yil yanvar-dekabr (12 oy): shu yil xarajati, 30 000
  2-yil yanvar-aprel (4 oy): oldindan to'langan, 10 000 oldindan to'lov
= Javob: xarajat $30 000; oldindan to'lov $10 000`),

    q('10.12', 220, 'single', `An accrual for December's rent was missed in the accounts for the year to 31 December. Rent is billed in arrears at the end of February, May, August and November, and the February bill is expected to be $27,000. Draft profit is $40,000 and draft net assets are $310,000. What are profit and net assets after the accrual is made?`,
      pick([
        'Profit $31,000; net assets $301,000',
        'Profit $31,000; net assets $319,000',
        'Profit $49,000; net assets $301,000',
        'Profit $13,000; net assets $283,000',
      ], 0),
`# Step 1: How much to accrue
  The February bill covers December, January and February.
  December only: 27,000 / 3 = 9,000
# Step 2: The entry
  Dr Rent expense 9,000, Cr Accruals 9,000
# Step 3: Effects
  Profit: 40,000 - 9,000 = 31,000
  An accrual is a liability, so net assets fall: 310,000 - 9,000 = 301,000
= Answer: profit $31,000; net assets $301,000
! Accruing the whole $27,000 gives the $13,000 trap. Only December belongs to this year.`,
`# Шаг 1: Сколько начислить
  Февральский счёт покрывает декабрь, январь и февраль.
  Только декабрь: 27 000 / 3 = 9 000
# Шаг 2: Проводка
  Дт Расход на аренду 9 000, Кт Начисленные обязательства 9 000
# Шаг 3: Влияние
  Прибыль: 40 000 - 9 000 = 31 000
  Начисление — обязательство, чистые активы падают: 310 000 - 9 000 = 301 000
= Ответ: прибыль $31 000; чистые активы $301 000
! Начисление всех $27 000 даёт ловушку $13 000. К этому году относится только декабрь.`,
`# 1-qadam: Qancha hisoblash kerak
  Fevral hisobi dekabr, yanvar va fevralni qoplaydi.
  Faqat dekabr: 27 000 / 3 = 9 000
# 2-qadam: Yozuv
  Dt Ijara xarajati 9 000, Kt Hisoblangan majburiyatlar 9 000
# 3-qadam: Ta'siri
  Foyda: 40 000 - 9 000 = 31 000
  Hisoblangan qarz majburiyat, sof aktivlar kamayadi: 310 000 - 9 000 = 301 000
= Javob: foyda $31 000; sof aktivlar $301 000
! Butun $27 000 ni hisoblash $13 000 tuzog'ini beradi. Shu yilga faqat dekabr tegishli.`),

    q('10.13', 220, 'single', `A trader's draft accounts show a profit of $2,350. An accrual of $1,980 and a prepayment of $760 were left out. What is the corrected profit or loss?`,
      pick(['A profit of $1,130', 'A loss of $390', 'A profit of $3,570', 'A profit of $5,090'], 0),
`# Step 1: The accrual
  An extra expense: profit goes DOWN by 1,980.
# Step 2: The prepayment
  Part of an expense moves to next year: profit goes UP by 760.
# Step 3: Corrected figure
  2,350 - 1,980 + 760 = 1,130 profit
= Answer: a profit of $1,130`,
`# Шаг 1: Начисление
  Дополнительный расход: прибыль УМЕНЬШАЕТСЯ на 1 980.
# Шаг 2: Предоплата
  Часть расхода переходит на следующий год: прибыль РАСТЁТ на 760.
# Шаг 3: Исправленная сумма
  2 350 - 1 980 + 760 = прибыль 1 130
= Ответ: прибыль $1 130`,
`# 1-qadam: Hisoblangan qarz
  Qo'shimcha xarajat: foyda 1 980 ga KAMAYADI.
# 2-qadam: Oldindan to'lov
  Xarajat qismi keyingi yilga o'tadi: foyda 760 ga OSHADI.
# 3-qadam: Tuzatilgan summa
  2 350 - 1 980 + 760 = 1 130 foyda
= Javob: $1 130 foyda`),

    q('10.15', 220, 'single', `A shop's heat and light for the year: gas had a prepayment of $800 at the start and an accrual of $1,500 at the end; electricity had an accrual of $600 at the start and a prepayment of $900 at the end. During the year it paid $4,600 for gas and $7,200 for electricity. What is the total heat and light expense?`,
      pick(['$12,600', '$11,000', '$11,800', '$15,600'], 0),
`# Step 1: Gas
  Paid 4,600
  + 800 prepaid last year, used this year
  + 1,500 used this year, not yet paid
  = 6,900
# Step 2: Electricity
  Paid 7,200
  - 600 owed at the start (last year's cost)
  - 900 paid for next year
  = 5,700
# Step 3: Total
  6,900 + 5,700 = 12,600
= Answer: $12,600
! Opening prepayment and closing accrual ADD to the expense. Opening accrual and closing prepayment take AWAY.`,
`# Шаг 1: Газ
  Оплачено 4 600
  + 800 оплачено в прошлом году, использовано в этом
  + 1 500 использовано в этом году, не оплачено
  = 6 900
# Шаг 2: Электричество
  Оплачено 7 200
  - 600 долг на начало (затраты прошлого года)
  - 900 оплачено за следующий год
  = 5 700
# Шаг 3: Итог
  6 900 + 5 700 = 12 600
= Ответ: $12 600
! Предоплата на начало и начисление на конец ПРИБАВЛЯЮТСЯ к расходу. Начисление на начало и предоплата на конец — ВЫЧИТАЮТСЯ.`,
`# 1-qadam: Gaz
  To'langan 4 600
  + 800 o'tgan yil to'langan, shu yil ishlatilgan
  + 1 500 shu yil ishlatilgan, to'lanmagan
  = 6 900
# 2-qadam: Elektr
  To'langan 7 200
  - 600 boshidagi qarz (o'tgan yil xarajati)
  - 900 keyingi yil uchun to'langan
  = 5 700
# 3-qadam: Jami
  6 900 + 5 700 = 12 600
= Javob: $12 600
! Boshidagi oldindan to'lov va oxiridagi hisoblangan qarz xarajatga QO'SHILADI. Boshidagi hisoblangan qarz va oxiridagi oldindan to'lov AYIRILADI.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
