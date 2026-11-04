'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-09';
  const questions = [
    {
      id: 'ch09-q222',
      kitRef: 222,
      topicId: 'chapter-09',
      type: 'number',
      text: 'A company sublets two stalls. In the year ended 31 December 20X6 it received $60,000 for stall 1 and $36,000 for stall 2. The balances on its accrued and prepaid income accounts were as shown. What amount is credited to profit or loss for rental income?',
      explanation: {
        en: `Start with the cash, then adjust for each opening and closing balance. Accrued income (a debit) = earned but not received. Prepaid income (a credit) = received but not yet earned.
# Step 1: Cash received
  $60,000 + $36,000 = $96,000
# Step 2: Accrued income
  Closing (stall 1, 20X6 debit): earned this year, not received. Add $3,000
  Opening (stall 2, 20X5 debit): earned LAST year, received this year. Take off $1,200
# Step 3: Prepaid income
  Closing (stall 2, 20X6 credit): received this year for next year. Take off $1,500
  Opening (stall 1, 20X5 credit): received last year, earned THIS year. Add $2,500
= Answer: $96,000 + $3,000 - $1,200 - $1,500 + $2,500 = $98,800`,
        ru: `Начните с денег, затем поправьте на каждый остаток на начало и конец. Начисленный доход (дебет) — заработан, не получен. Доход будущих периодов (кредит) — получен, ещё не заработан.
# Шаг 1: Получено денег
  $60,000 + $36,000 = $96,000
# Шаг 2: Начисленный доход
  На конец (место 1, дебет 20X6): заработан в этом году, не получен. Прибавить $3,000
  На начало (место 2, дебет 20X5): заработан в ПРОШЛОМ году, получен в этом. Вычесть $1,200
# Шаг 3: Доход будущих периодов
  На конец (место 2, кредит 20X6): получен в этом году за следующий. Вычесть $1,500
  На начало (место 1, кредит 20X5): получен в прошлом году, заработан в ЭТОМ. Прибавить $2,500
= Ответ: $96,000 + $3,000 - $1,200 - $1,500 + $2,500 = $98,800`,
        uz: `Puldan boshlang, keyin har bir boshlang'ich va yakuniy qoldiqqa tuzating. Hisoblangan daromad (debet) — topilgan, olinmagan. Oldindan olingan daromad (kredit) — olingan, hali topilmagan.
# 1-qadam: Olingan pul
  $60,000 + $36,000 = $96,000
# 2-qadam: Hisoblangan daromad
  Yakuniy (1-joy, 20X6 debet): bu yil topilgan, olinmagan. $3,000 qo'shing
  Boshlang'ich (2-joy, 20X5 debet): O'TGAN yil topilgan, bu yil olingan. $1,200 ayiring
# 3-qadam: Oldindan olingan daromad
  Yakuniy (2-joy, 20X6 kredit): bu yil kelasi yil uchun olingan. $1,500 ayiring
  Boshlang'ich (1-joy, 20X5 kredit): o'tgan yil olingan, BU yil topilgan. $2,500 qo'shing
= Javob: $96,000 + $3,000 - $1,200 - $1,500 + $2,500 = $98,800`,
      },
      correctValue: 98800,
      answerText: '$98,800',
      table: {
        head: ['', '31 December 20X6', '31 December 20X5'],
        rows: [
          ['Stall 1', '$3,000 debit', '$2,500 credit'],
          ['Stall 2', '$1,500 credit', '$1,200 debit'],
        ],
      },
    },
    {
      id: 'ch09-q223',
      kitRef: 223,
      topicId: 'chapter-09',
      type: 'number',
      text: 'A property company received $520,000 in cash from tenants during the year ended 31 December 20X6. Rent in advance (prepaid income) was $34,000 at 31 December 20X5 and $41,500 at 31 December 20X6. Rent in arrears (accrued income, all later received) was $18,000 at 31 December 20X5 and $22,500 at 31 December 20X6. What is rental income in profit or loss?',
      explanation: {
        en: `Same method: start with the cash and adjust for each balance.
# Step 1: Cash received
  $520,000
# Step 2: Rent in advance (prepaid income)
  Opening $34,000: received last year, earned this year. Add
  Closing $41,500: received this year, earned next year. Take off
# Step 3: Rent in arrears (accrued income)
  Closing $22,500: earned this year, not yet received. Add
  Opening $18,000: earned last year, received this year. Take off
= Answer: $520,000 + $34,000 - $41,500 + $22,500 - $18,000 = $517,000`,
        ru: `Тот же способ: начните с денег и поправьте на каждый остаток.
# Шаг 1: Получено денег
  $520,000
# Шаг 2: Аренда, полученная вперёд (доход будущих периодов)
  На начало $34,000: получена в прошлом году, заработана в этом. Прибавить
  На конец $41,500: получена в этом году, заработана в следующем. Вычесть
# Шаг 3: Аренда в долг (начисленный доход)
  На конец $22,500: заработана в этом году, ещё не получена. Прибавить
  На начало $18,000: заработана в прошлом году, получена в этом. Вычесть
= Ответ: $520,000 + $34,000 - $41,500 + $22,500 - $18,000 = $517,000`,
        uz: `Xuddi shu usul: puldan boshlang va har bir qoldiqqa tuzating.
# 1-qadam: Olingan pul
  $520,000
# 2-qadam: Oldindan olingan ijara
  Boshlang'ich $34,000: o'tgan yil olingan, bu yil topilgan. Qo'shing
  Yakuniy $41,500: bu yil olingan, kelasi yil topiladi. Ayiring
# 3-qadam: Qarzdagi ijara (hisoblangan daromad)
  Yakuniy $22,500: bu yil topilgan, hali olinmagan. Qo'shing
  Boshlang'ich $18,000: o'tgan yil topilgan, bu yil olingan. Ayiring
= Javob: $520,000 + $34,000 - $41,500 + $22,500 - $18,000 = $517,000`,
      },
      correctValue: 517000,
      answerText: '$517,000',
    },
    {
      id: 'ch09-q224',
      kitRef: 224,
      topicId: 'chapter-09',
      type: 'single',
      text: 'A company\'s insurance premium for the year ended 30 September 20X5 was $14,400, paid in October 20X4. The premium for the year ending 30 September 20X6 was $16,800, paid in October 20X5. What figures appear in the financial statements for the year ended 31 December 20X5?',
      explanation: {
        en: `Two premiums each cover part of the calendar year 20X5. Split each by months.
# Step 1: First premium ($14,400, October 20X4 to September 20X5)
  January to September 20X5 = 9 months: 9/12 × $14,400 = $10,800
# Step 2: Second premium ($16,800, October 20X5 to September 20X6)
  October to December 20X5 = 3 months: 3/12 × $16,800 = $4,200
# Step 3: Expense for 20X5
  $10,800 + $4,200 = $15,000
# Step 4: Prepayment at 31 December 20X5
  9 months of the second premium are still to come: 9/12 × $16,800 = $12,600
= Answer: profit or loss $15,000; prepayment $12,600
! It is a prepayment (paid in advance, an asset), not an accrual.`,
        ru: `Две премии покрывают части 20X5 года. Делим каждую по месяцам.
# Шаг 1: Первая премия ($14,400, октябрь 20X4 - сентябрь 20X5)
  Январь-сентябрь 20X5 = 9 месяцев: 9/12 × $14,400 = $10,800
# Шаг 2: Вторая премия ($16,800, октябрь 20X5 - сентябрь 20X6)
  Октябрь-декабрь 20X5 = 3 месяца: 3/12 × $16,800 = $4,200
# Шаг 3: Расход за 20X5
  $10,800 + $4,200 = $15,000
# Шаг 4: Предоплата на 31 декабря 20X5
  Ещё впереди 9 месяцев второй премии: 9/12 × $16,800 = $12,600
= Ответ: прибыль или убыток $15,000; предоплата $12,600
! Это предоплата (заплачено вперёд, актив), а не начисление.`,
        uz: `Ikki mukofot 20X5 yilning qismlarini qoplaydi. Har birini oylarga bo'lamiz.
# 1-qadam: Birinchi mukofot ($14,400, 20X4 oktyabr - 20X5 sentyabr)
  20X5 yanvar-sentyabr = 9 oy: 9/12 × $14,400 = $10,800
# 2-qadam: Ikkinchi mukofot ($16,800, 20X5 oktyabr - 20X6 sentyabr)
  20X5 oktyabr-dekabr = 3 oy: 3/12 × $16,800 = $4,200
# 3-qadam: 20X5 xarajati
  $10,800 + $4,200 = $15,000
# 4-qadam: 20X5 yil 31 dekabrdagi oldindan to'lov
  Ikkinchi mukofotning 9 oyi hali oldinda: 9/12 × $16,800 = $12,600
= Javob: foyda yoki zarar $15,000; oldindan to'lov $12,600
! Bu oldindan to'lov (oldindan to'langan, aktiv), hisoblangan xarajat emas.`,
      },
      options: [
        'Profit or loss $15,000; prepayment $12,600',
        'Profit or loss $16,200; prepayment $4,200',
        'Profit or loss $15,000; accrual $12,600',
        'Profit or loss $16,200; accrual $4,200',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch09-q225',
      kitRef: 225,
      topicId: 'chapter-09',
      type: 'single',
      text: 'A company sublets space and receives the rent quarterly in advance on 1 January, 1 April, 1 July and 1 October. The annual rent was $24,000 for some years but rose to $36,000 from 1 July 20X5. What appears in the financial statements for the year ended 31 January 20X6?',
      explanation: {
        en: `The year runs from 1 February 20X5 to 31 January 20X6, and the rent changed on 1 July.
# Step 1: Income earned
  February to June (5 months) at $24,000 / 12 = $2,000: $10,000
  July to January (7 months) at $36,000 / 12 = $3,000: $21,000
  Total: $31,000
# Step 2: What was received on 1 January?
  $9,000 for January, February and March
# Step 3: How much is not yet earned at 31 January?
  February and March: 2 × $3,000 = $6,000, received in advance
= Answer: income $31,000; prepaid income $6,000 (a liability)`,
        ru: `Год с 1 февраля 20X5 по 31 января 20X6, аренда изменилась 1 июля.
# Шаг 1: Заработанный доход
  Февраль-июнь (5 месяцев) по $24,000 / 12 = $2,000: $10,000
  Июль-январь (7 месяцев) по $36,000 / 12 = $3,000: $21,000
  Итого: $31,000
# Шаг 2: Что получили 1 января?
  $9,000 за январь, февраль и март
# Шаг 3: Что ещё не заработано на 31 января?
  Февраль и март: 2 × $3,000 = $6,000, получены вперёд
= Ответ: доход $31,000; доход будущих периодов $6,000 (обязательство)`,
        uz: `Yil 20X5 yil 1 fevraldan 20X6 yil 31 yanvargacha, ijara 1 iyulda o'zgargan.
# 1-qadam: Topilgan daromad
  Fevral-iyun (5 oy) $24,000 / 12 = $2,000 dan: $10,000
  Iyul-yanvar (7 oy) $36,000 / 12 = $3,000 dan: $21,000
  Jami: $31,000
# 2-qadam: 1 yanvarda nima olingan?
  Yanvar, fevral va mart uchun $9,000
# 3-qadam: 31 yanvarda hali nima topilmagan?
  Fevral va mart: 2 × $3,000 = $6,000, oldindan olingan
= Javob: daromad $31,000; oldindan olingan daromad $6,000 (majburiyat)`,
      },
      options: [
        'Income $31,000; accrued income $6,000',
        'Income $31,000; prepaid income $6,000',
        'Income $30,000; prepaid income $6,000',
        'Income $36,000; prepaid income $9,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch09-q226',
      kitRef: 226,
      topicId: 'chapter-09',
      type: 'single',
      text: 'Kai started a business on 1 June 20X0 and paid annual rent of $2,400 for the period to 31 May 20X1. What is the charge to profit or loss and the entry in the statement of financial position for the period ended 31 December 20X0?',
      explanation: {
        en: `The $2,400 covers 12 months, $200 a month.
# Step 1: Used in this period (June to December)
  7 months × $200 = $1,400, the expense
# Step 2: Still to come (January to May)
  5 months × $200 = $1,000, already paid: a prepayment (asset)
= Answer: charge $1,400; prepayment $1,000`,
        ru: `$2,400 покрывают 12 месяцев, по $200 в месяц.
# Шаг 1: Использовано в этом периоде (июнь-декабрь)
  7 месяцев × $200 = $1,400, расход
# Шаг 2: Впереди (январь-май)
  5 месяцев × $200 = $1,000, уже оплачено: предоплата (актив)
= Ответ: расход $1,400; предоплата $1,000`,
        uz: `$2,400 12 oyni qoplaydi, oyiga $200.
# 1-qadam: Shu davrda ishlatilgan (iyun-dekabr)
  7 oy × $200 = $1,400, xarajat
# 2-qadam: Oldinda (yanvar-may)
  5 oy × $200 = $1,000, allaqachon to'langan: oldindan to'lov (aktiv)
= Javob: xarajat $1,400; oldindan to'lov $1,000`,
      },
      options: [
        'Charge $1,000; prepayment $1,400',
        'Charge $1,400; accrual $1,000',
        'Charge $1,400; prepayment $1,000',
        'Charge $2,400; no entry',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch09-q227',
      kitRef: 227,
      topicId: 'chapter-09',
      type: 'number',
      text: 'At 1 September a motor expenses account showed 3 months of insurance prepaid, $90, and fuel accrued of $70. During September the outstanding fuel bill was paid, plus further bills of $260. At 30 September there was a further outstanding fuel bill of $110. What motor expense is charged to profit or loss for September?',
      explanation: {
        en: `September's motor expense = insurance used + fuel used in September.
# Step 1: Insurance
  $90 covered 3 months, so $30 a month. September used $30
  (equivalently: opening prepayment $90 - closing prepayment for 2 months $60 = $30)
# Step 2: Fuel
  Cash paid in September: $70 + $260 = $330
  The $70 was August's bill (opening accrual), so take it off: $330 - $70 = $260
  September's unpaid bill (closing accrual): + $110
  Fuel used in September: $260 + $110 = $370
= Answer: $30 + $370 = $400`,
        ru: `Расход на транспорт за сентябрь = использованная страховка + топливо за сентябрь.
# Шаг 1: Страховка
  $90 на 3 месяца, значит $30 в месяц. Сентябрь — $30
  (то же: предоплата на начало $90 - предоплата на конец за 2 месяца $60 = $30)
# Шаг 2: Топливо
  Оплачено в сентябре: $70 + $260 = $330
  $70 — августовский счёт (начисление на начало), вычитаем: $330 - $70 = $260
  Неоплаченный сентябрьский счёт (начисление на конец): + $110
  Топливо за сентябрь: $260 + $110 = $370
= Ответ: $30 + $370 = $400`,
        uz: `Sentyabr transport xarajati = ishlatilgan sug'urta + sentyabr yoqilg'isi.
# 1-qadam: Sug'urta
  $90 3 oy uchun, demak oyiga $30. Sentyabr — $30
  (xuddi shu: boshlang'ich oldindan to'lov $90 - 2 oylik yakuniy $60 = $30)
# 2-qadam: Yoqilg'i
  Sentyabrda to'langan: $70 + $260 = $330
  $70 — avgust hisobi (boshlang'ich hisoblangan), ayiramiz: $330 - $70 = $260
  To'lanmagan sentyabr hisobi (yakuniy hisoblangan): + $110
  Sentyabr yoqilg'isi: $260 + $110 = $370
= Javob: $30 + $370 = $400`,
      },
      correctValue: 400,
      answerText: '$400',
    },
    {
      id: 'ch09-q228',
      kitRef: 228,
      topicId: 'chapter-09',
      type: 'single',
      text: 'A business\'s electricity account for the year to 30 June 20X3 shows an opening accrual of $200 at 1 July 20X2. It paid $480 on 1 August for three months to 31 July, $540 on 1 November for three months to 31 October, $660 on 1 February for three months to 31 January, and $720 on 30 June for three months to 30 April. What are the accrual at 30 June 20X3 and the expense for the year?',
      explanation: {
        en: `Find the closing accrual first, then the expense.
# Step 1: Cash paid in the year
  $480 + $540 + $660 + $720 = $2,400
# Step 2: Closing accrual at 30 June
  The last bill only covers up to 30 April, so May and June are unpaid
  That bill was $720 for 3 months, $240 a month: 2 × $240 = $480
# Step 3: Expense for the year
  Cash $2,400 + closing accrual $480 - opening accrual $200 = $2,680
= Answer: accrual $480; expense $2,680
! Common trap: forgetting to take off the opening accrual gives $2,880. That $200 belonged to last year.`,
        ru: `Сначала найдём начисление на конец, затем расход.
# Шаг 1: Оплачено за год
  $480 + $540 + $660 + $720 = $2,400
# Шаг 2: Начисление на 30 июня
  Последний счёт только до 30 апреля, май и июнь не оплачены
  Тот счёт $720 за 3 месяца, $240 в месяц: 2 × $240 = $480
# Шаг 3: Расход за год
  Оплачено $2,400 + начисление на конец $480 - начисление на начало $200 = $2,680
= Ответ: начисление $480; расход $2,680
! Частая ошибка: не вычесть начисление на начало — выходит $2,880. Эти $200 относились к прошлому году.`,
        uz: `Avval yakuniy hisoblanganni, keyin xarajatni topamiz.
# 1-qadam: Yil davomida to'langan
  $480 + $540 + $660 + $720 = $2,400
# 2-qadam: 30 iyundagi hisoblangan
  Oxirgi hisob faqat 30 aprelgacha, may va iyun to'lanmagan
  O'sha hisob 3 oyga $720, oyiga $240: 2 × $240 = $480
# 3-qadam: Yil xarajati
  To'langan $2,400 + yakuniy hisoblangan $480 - boshlang'ich hisoblangan $200 = $2,680
= Javob: hisoblangan $480; xarajat $2,680
! Ko'p uchraydigan xato: boshlang'ich hisoblanganni ayirmaslik $2,880 beradi. O'sha $200 o'tgan yilga tegishli edi.`,
      },
      options: [
        'Accrual $480; expense $2,880',
        'Accrual $720; expense $2,920',
        'Accrual $480; expense $2,680',
        'Accrual $240; expense $2,440',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch09-q229',
      kitRef: 229,
      topicId: 'chapter-09',
      type: 'number',
      text: 'A company\'s annual insurance premium for 1 July 20X3 to 30 June 20X4 is $16,800, which is 20% more than the previous year. Premiums are paid on 1 July. What is the profit or loss charge for insurance for the year ended 31 December 20X3?',
      explanation: {
        en: `The calendar year 20X3 is covered half by the old premium and half by the new one.
# Step 1: The old premium
  The new $16,800 is 20% more than the old one, so the old one is $16,800 / 1.2 = $14,000
# Step 2: January to June 20X3 (old premium)
  6/12 × $14,000 = $7,000
# Step 3: July to December 20X3 (new premium)
  6/12 × $16,800 = $8,400
= Answer: $7,000 + $8,400 = $15,400
! Common trap: $16,800 × 80% = $13,440 is wrong. "20% more" means old × 1.2 = new, so divide by 1.2.`,
        ru: `20X3 год наполовину покрыт старой премией и наполовину новой.
# Шаг 1: Старая премия
  Новая $16,800 на 20% больше старой, значит старая $16,800 / 1.2 = $14,000
# Шаг 2: Январь-июнь 20X3 (старая премия)
  6/12 × $14,000 = $7,000
# Шаг 3: Июль-декабрь 20X3 (новая премия)
  6/12 × $16,800 = $8,400
= Ответ: $7,000 + $8,400 = $15,400
! Частая ошибка: $16,800 × 80% = $13,440 неверно. «На 20% больше» значит старая × 1.2 = новая, поэтому делим на 1.2.`,
        uz: `20X3 yilning yarmi eski, yarmi yangi mukofot bilan qoplangan.
# 1-qadam: Eski mukofot
  Yangi $16,800 eskisidan 20% ko'p, demak eskisi $16,800 / 1.2 = $14,000
# 2-qadam: 20X3 yanvar-iyun (eski mukofot)
  6/12 × $14,000 = $7,000
# 3-qadam: 20X3 iyul-dekabr (yangi mukofot)
  6/12 × $16,800 = $8,400
= Javob: $7,000 + $8,400 = $15,400
! Ko'p uchraydigan xato: $16,800 × 80% = $13,440 noto'g'ri. «20% ko'p» eski × 1.2 = yangi demak, shuning uchun 1.2 ga bo'lamiz.`,
      },
      correctValue: 15400,
      answerText: '$15,400',
    },
    {
      id: 'ch09-q230',
      kitRef: 230,
      topicId: 'chapter-09',
      type: 'single',
      text: 'A company with a 31 December year end took out a loan of $200,000 on 1 March 20X6 at 9% a year. Interest is paid in equal instalments in arrears on 1 June, 1 September, 1 December and 1 March. What is the charge to profit or loss for the year ended 31 December 20X6 and what should be accrued?',
      explanation: {
        en: `The expense is the interest for the months the loan existed this year. Then see how much of it was paid.
# Step 1: Interest for the year
  The loan existed from 1 March to 31 December = 10 months
  $200,000 × 9% × 10/12 = $15,000
# Step 2: Interest paid
  Each payment covers 3 months: $200,000 × 9% × 3/12 = $4,500
  Paid on 1 June, 1 September and 1 December: 3 × $4,500 = $13,500 (covering March to November)
# Step 3: Accrual
  December's interest is not yet paid: $15,000 - $13,500 = $1,500
= Answer: charge $15,000; accrual $1,500`,
        ru: `Расход — проценты за месяцы, когда заём существовал в этом году. Затем смотрим, сколько оплачено.
# Шаг 1: Проценты за год
  Заём был с 1 марта по 31 декабря = 10 месяцев
  $200,000 × 9% × 10/12 = $15,000
# Шаг 2: Уплаченные проценты
  Каждый платёж за 3 месяца: $200,000 × 9% × 3/12 = $4,500
  Оплачено 1 июня, 1 сентября и 1 декабря: 3 × $4,500 = $13,500 (за март-ноябрь)
# Шаг 3: Начисление
  Проценты за декабрь не оплачены: $15,000 - $13,500 = $1,500
= Ответ: расход $15,000; начисление $1,500`,
        uz: `Xarajat — shu yil qarz mavjud bo'lgan oylar foizi. Keyin qanchasi to'langanini ko'ramiz.
# 1-qadam: Yil foizi
  Qarz 1 martdan 31 dekabrgacha = 10 oy
  $200,000 × 9% × 10/12 = $15,000
# 2-qadam: To'langan foiz
  Har bir to'lov 3 oy uchun: $200,000 × 9% × 3/12 = $4,500
  1 iyun, 1 sentyabr va 1 dekabrda to'langan: 3 × $4,500 = $13,500 (mart-noyabr)
# 3-qadam: Hisoblangan xarajat
  Dekabr foizi to'lanmagan: $15,000 - $13,500 = $1,500
= Javob: xarajat $15,000; hisoblangan $1,500`,
      },
      options: [
        'Charge $18,000; accrual $1,500',
        'Charge $15,000; accrual $1,500',
        'Charge $15,000; no accrual',
        'Charge $13,500; accrual $1,500',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch09-q231',
      kitRef: 231,
      topicId: 'chapter-09',
      type: 'single',
      text: 'At 1 January 20X3 a business had prepaid insurance of $6,000. On 1 September 20X3 it paid the annual insurance invoice of $24,000 for the 12 months to 31 August 20X4. What is charged to profit or loss, and what is in the statement of financial position, for the year ended 31 December 20X3?',
      explanation: {
        en: `Use: expense = opening prepayment + cash paid - closing prepayment.
# Step 1: Closing prepayment at 31 December
  The $24,000 covers September 20X3 to August 20X4
  January to August 20X4 is still to come: 8/12 × $24,000 = $16,000
# Step 2: Expense for 20X3
  Opening prepayment $6,000 (used up this year) + paid $24,000 - closing prepayment $16,000 = $14,000
= Answer: profit or loss $14,000; prepayment $16,000`,
        ru: `Формула: расход = предоплата на начало + оплачено - предоплата на конец.
# Шаг 1: Предоплата на 31 декабря
  $24,000 покрывают сентябрь 20X3 - август 20X4
  Январь-август 20X4 ещё впереди: 8/12 × $24,000 = $16,000
# Шаг 2: Расход за 20X3
  Предоплата на начало $6,000 (использована в этом году) + оплачено $24,000 - предоплата на конец $16,000 = $14,000
= Ответ: прибыль или убыток $14,000; предоплата $16,000`,
        uz: `Formula: xarajat = boshlang'ich oldindan to'lov + to'langan - yakuniy oldindan to'lov.
# 1-qadam: 31 dekabrdagi oldindan to'lov
  $24,000 20X3 sentyabr - 20X4 avgustni qoplaydi
  20X4 yanvar-avgust hali oldinda: 8/12 × $24,000 = $16,000
# 2-qadam: 20X3 xarajati
  Boshlang'ich oldindan to'lov $6,000 (bu yil ishlatilgan) + to'langan $24,000 - yakuniy oldindan to'lov $16,000 = $14,000
= Javob: foyda yoki zarar $14,000; oldindan to'lov $16,000`,
      },
      options: [
        'Profit or loss $8,000; prepayment $16,000',
        'Profit or loss $14,000; prepayment $16,000',
        'Profit or loss $14,000; prepayment $22,000',
        'Profit or loss $24,000; prepayment $16,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch09-q232',
      kitRef: 232,
      topicId: 'chapter-09',
      type: 'single',
      text: 'Which statement is false?',
      explanation: {
        en: `Check what each one does to profit and where it sits.
- An accrual reduces profit: TRUE. It adds an unpaid expense.
- Accrued income reduces profit: FALSE. It ADDS income earned but not received, so profit goes UP.
- A prepayment is an asset: TRUE. Next period's cost is already paid.
- An accrual is a liability: TRUE. Money is owed.
= Answer: accrued income reduces profit`,
        ru: `Проверьте, как каждое влияет на прибыль и где отражается.
- Начисление уменьшает прибыль: ВЕРНО. Добавляет неоплаченный расход.
- Начисленный доход уменьшает прибыль: НЕВЕРНО. Он ДОБАВЛЯЕТ заработанный, но не полученный доход, прибыль РАСТЁТ.
- Предоплата — актив: ВЕРНО. Расход следующего периода уже оплачен.
- Начисление — обязательство: ВЕРНО. Есть долг.
= Ответ: начисленный доход уменьшает прибыль`,
        uz: `Har biri foydaga qanday ta'sir qilishi va qayerda turishini tekshiring.
- Hisoblangan xarajat foydani kamaytiradi: TO'G'RI. To'lanmagan xarajat qo'shadi.
- Hisoblangan daromad foydani kamaytiradi: NOTO'G'RI. U topilgan, lekin olinmagan daromadni QO'SHADI, foyda OSHADI.
- Oldindan to'lov — aktiv: TO'G'RI. Keyingi davr xarajati to'langan.
- Hisoblangan xarajat — majburiyat: TO'G'RI. Qarz bor.
= Javob: hisoblangan daromad foydani kamaytiradi`,
      },
      options: [
        'An accrual reduces profit',
        'Accrued income reduces profit',
        'A prepayment is an asset',
        'An accrual is a liability',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch09-q233',
      kitRef: 233,
      topicId: 'chapter-09',
      type: 'single',
      text: 'On 12 November a company paid its electricity bill for the three months ended 31 October. The bill included a standing charge of $120 for the three months ending 31 January and a usage charge of $180 for the three months to 31 October. The year end is 30 November. Which adjustments are needed at 30 November?',
      explanation: {
        en: `The bill has two parts, and they point in opposite directions.
# Standing charge: $120 for November to January, paid in advance
  At 30 November only November has passed. December and January (2 of 3 months) are paid in advance
  Prepayment: 2/3 × $120 = $80
# Usage: $180 for August to October, paid in arrears
  November's usage has not been billed yet: one month of the usual quarter
  Accrual: 1/3 × $180 = $60
= Answer: standing charge prepayment $80; usage accrual $60`,
        ru: `В счёте две части, и они направлены в разные стороны.
# Абонентская плата: $120 за ноябрь-январь, заранее
  На 30 ноября прошёл только ноябрь. Декабрь и январь (2 из 3 месяцев) оплачены вперёд
  Предоплата: 2/3 × $120 = $80
# Потребление: $180 за август-октябрь, по факту
  Потребление за ноябрь ещё не выставлено: один месяц обычного квартала
  Начисление: 1/3 × $180 = $60
= Ответ: предоплата абонентской платы $80; начисление за потребление $60`,
        uz: `Hisobning ikki qismi bor va ular qarama-qarshi yo'nalishda.
# Abonent to'lovi: noyabr-yanvar uchun $120, oldindan
  30 noyabrda faqat noyabr o'tgan. Dekabr va yanvar (3 oydan 2 tasi) oldindan to'langan
  Oldindan to'lov: 2/3 × $120 = $80
# Iste'mol: avgust-oktyabr uchun $180, keyin to'lanadi
  Noyabr iste'moli hali hisoblanmagan: odatdagi chorakning bir oyi
  Hisoblangan: 1/3 × $180 = $60
= Javob: abonent to'lovi bo'yicha oldindan to'lov $80; iste'mol bo'yicha hisoblangan $60`,
      },
      options: [
        'Standing charge accrual $80; usage prepayment $60',
        'Standing charge prepayment $60; usage accrual $80',
        'Standing charge prepayment $80; usage accrual $60',
        'Standing charge accrual $60; usage prepayment $80',
      ],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
