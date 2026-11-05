'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-14';
  const questions = [
    {
      id: 'ch14-q330',
      kitRef: 330,
      topicId: 'chapter-14',
      type: 'single',
      text: 'Which of these are limitations of a trial balance? (1) It does not hold all the final figures for the financial statements. (2) It does not identify all errors of commission. (3) It does not show which accounts contain errors.',
      explanation: {
        en: `A trial balance only checks that debits equal credits. Test each statement.
- (1) TRUE limitation: year-end adjustments (inventory, depreciation, accruals) are added later, so it does not hold all the final figures.
- (2) TRUE limitation: an error of commission has an equal debit and credit, so the trial balance still agrees.
- (3) TRUE limitation: when the columns differ, the trial balance does not say which account is wrong.
= Answer: 1, 2 and 3
! Common trap: choosing two only. All three are real limits.`,
        ru: `Оборотная ведомость проверяет только равенство дебетов и кредитов. Проверим каждое утверждение.
- (1) ВЕРНО, это ограничение: годовые корректировки (запасы, амортизация, начисления) добавляют позже, поэтому в ней не все итоговые цифры.
- (2) ВЕРНО, это ограничение: у ошибки счёта дебет и кредит равны, поэтому ведомость всё равно сходится.
- (3) ВЕРНО, это ограничение: если колонки не равны, ведомость не говорит, какой счёт ошибочен.
= Ответ: 1, 2 и 3
! Частая ошибка: выбрать только два. Все три — настоящие ограничения.`,
        uz: `Sinov balansi faqat debet va kreditlar tengligini tekshiradi. Har bir fikrni tekshiramiz.
- (1) TO'G'RI, bu cheklov: yil oxiri tuzatishlari (zaxira, amortizatsiya, hisoblanganlar) keyin qo'shiladi, shuning uchun unda barcha yakuniy sonlar yo'q.
- (2) TO'G'RI, bu cheklov: noto'g'ri hisob xatosida debet va kredit teng, shuning uchun balans baribir mos keladi.
- (3) TO'G'RI, bu cheklov: ustunlar farq qilsa, sinov balansi qaysi hisob xato ekanini aytmaydi.
= Javob: 1, 2 va 3
! Ko'p uchraydigan xato: faqat ikkitasini tanlash. Uchalasi ham haqiqiy cheklov.`,
      },
      options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 and 3 only'],
      correctIndex: 2,
    },
    {
      id: 'ch14-q331',
      kitRef: 331,
      topicId: 'chapter-14',
      type: 'matrix',
      text: 'State whether each statement is true or false.',
      explanation: {
        en: `Check each statement.
- The trial balance proves no errors exist: FALSE. It only shows equal debits and credits; omissions, wrong accounts and wrong amounts on both sides still slip through.
- The trial balance is one of the annual financial statements: FALSE. It is an internal working document used to prepare them.`,
        ru: `Проверим каждое утверждение.
- Оборотная ведомость доказывает, что ошибок нет: НЕВЕРНО. Она показывает только равенство дебетов и кредитов; пропуски, не те счета и неверные суммы на обеих сторонах всё равно проходят.
- Оборотная ведомость — один из годовых финансовых отчётов: НЕВЕРНО. Это внутренний рабочий документ для их подготовки.`,
        uz: `Har bir fikrni tekshiramiz.
- Sinov balansi xato yo'qligini isbotlaydi: NOTO'G'RI. U faqat debet va kreditlar tengligini ko'rsatadi; tushib qolganlar, noto'g'ri hisoblar va ikkala tomondagi noto'g'ri summalar baribir o'tib ketadi.
- Sinov balansi yillik moliyaviy hisobotlardan biri: NOTO'G'RI. Bu ularni tayyorlash uchun ichki ishchi hujjat.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'The trial balance proves that no errors exist in the accounting records', correctIndex: 1 },
        {
          text: 'The trial balance is one of the financial statements prepared annually for shareholders',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch14-q332',
      kitRef: 332,
      topicId: 'chapter-14',
      type: 'number',
      text: 'A trader extracted the balances below. Discounts received is the only figure missing. What was the balance on the discounts received account?',
      explanation: {
        en: `Put each balance in its column. The missing figure is whatever makes the two columns equal.
# Step 1: Debit column (assets, expenses, drawings)
  PPE $230,000 + inventory $5,100 + receivables $6,400 + drawings $25,000
  + purchases $184,000 + sales returns $7,500 + sundry expenses $80,750 = $538,750
# Step 2: Credit column without the discount (liabilities, capital, income)
  Payables $6,900 + overdraft $850 + loan $55,000 + capital $110,000 + sales $360,000 = $532,750
# Step 3: The gap
  $538,750 - $532,750 = $6,000
  Discounts received is income, so it sits in the credit column and fills the gap
= Answer: $6,000
! Common trap: putting the bank overdraft or sales returns in the wrong column. An overdraft is money owed (credit); sales returns reduce sales (debit).`,
        ru: `Разнесём каждый остаток в свою колонку. Недостающая сумма — та, что уравнивает колонки.
# Шаг 1: Дебет (активы, расходы, изъятия)
  ОС $230,000 + запасы $5,100 + дебиторы $6,400 + изъятия $25,000
  + закупки $184,000 + возвраты покупателей $7,500 + прочие расходы $80,750 = $538,750
# Шаг 2: Кредит без скидки (обязательства, капитал, доходы)
  Кредиторы $6,900 + овердрафт $850 + заём $55,000 + капитал $110,000 + продажи $360,000 = $532,750
# Шаг 3: Разница
  $538,750 - $532,750 = $6,000
  Полученная скидка — доход, она стоит в кредите и закрывает разницу
= Ответ: $6,000
! Частая ошибка: поставить овердрафт или возвраты покупателей не в ту колонку. Овердрафт — долг (кредит); возвраты уменьшают продажи (дебет).`,
        uz: `Har bir qoldiqni o'z ustuniga qo'yamiz. Yetishmayotgan son ustunlarni tenglashtiradigan son.
# 1-qadam: Debet (aktivlar, xarajatlar, olib qo'yishlar)
  AV $230,000 + zaxira $5,100 + debitorlar $6,400 + olib qo'yish $25,000
  + xaridlar $184,000 + sotuv qaytarishlari $7,500 + boshqa xarajatlar $80,750 = $538,750
# 2-qadam: Chegirmasiz kredit (majburiyatlar, kapital, daromad)
  Kreditorlar $6,900 + overdraft $850 + qarz $55,000 + kapital $110,000 + sotuv $360,000 = $532,750
# 3-qadam: Farq
  $538,750 - $532,750 = $6,000
  Olingan chegirma daromad, u kreditda turadi va farqni yopadi
= Javob: $6,000
! Ko'p uchraydigan xato: overdraft yoki sotuv qaytarishlarini noto'g'ri ustunga qo'yish. Overdraft — qarz (kredit); qaytarishlar sotuvni kamaytiradi (debet).`,
      },
      correctValue: 6000,
      answerText: '$6,000',
      table: {
        head: ['Account', '$'],
        rows: [
          ['Property, plant and equipment', '230,000'],
          ['Inventory', '5,100'],
          ['Payables', '6,900'],
          ['Receivables', '6,400'],
          ['Bank overdraft', '850'],
          ['Loan', '55,000'],
          ['Capital', '110,000'],
          ['Drawings', '25,000'],
          ['Sales', '360,000'],
          ['Purchases', '184,000'],
          ['Sales returns', '7,500'],
          ['Sundry expenses', '80,750'],
          ['Discounts received', '?'],
        ],
      },
    },
    {
      id: 'ch14-q333',
      kitRef: 333,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company has these year-end adjustments: closing inventory of $51,300 to record; depreciation at 20% straight line on assets costing $390,000; an irrecoverable debt of $260 to write off; deferred income of $7,400 to record. What is the effect on net assets?',
      explanation: {
        en: `Net assets = assets - liabilities. Ask whether each adjustment raises or lowers that.
# Step 1: Closing inventory
  A new asset: + $51,300
# Step 2: Depreciation
  20% x $390,000 = $78,000, it lowers the assets: - $78,000
# Step 3: Irrecoverable debt
  Receivables fall: - $260
# Step 4: Deferred income
  Money received for work not yet done is a liability: - $7,400
# Step 5: Total
  $51,300 - $78,000 - $260 - $7,400 = -$34,360
= Answer: $34,360 decrease
! Common trap: $19,560 decrease treats the deferred income as an increase. "Increase" options get the sign the wrong way round.`,
        ru: `Чистые активы = активы - обязательства. Спросим, повышает или понижает их каждая корректировка.
# Шаг 1: Запасы на конец
  Новый актив: + $51,300
# Шаг 2: Амортизация
  20% x $390,000 = $78,000, уменьшает активы: - $78,000
# Шаг 3: Безнадёжный долг
  Дебиторы уменьшаются: - $260
# Шаг 4: Доходы будущих периодов
  Деньги за ещё не сделанную работу — обязательство: - $7,400
# Шаг 5: Итого
  $51,300 - $78,000 - $260 - $7,400 = -$34,360
= Ответ: уменьшение на $34,360
! Частая ошибка: уменьшение $19,560 считает доходы будущих периодов увеличением. Варианты «увеличение» путают знак.`,
        uz: `Sof aktivlar = aktivlar - majburiyatlar. Har bir tuzatish ularni oshiradimi yoki kamaytiradimi, so'raymiz.
# 1-qadam: Yil oxiridagi zaxira
  Yangi aktiv: + $51,300
# 2-qadam: Amortizatsiya
  20% x $390,000 = $78,000, aktivlarni kamaytiradi: - $78,000
# 3-qadam: Undirib bo'lmaydigan qarz
  Debitorlar kamayadi: - $260
# 4-qadam: Kelgusi davr daromadi
  Hali bajarilmagan ish uchun olingan pul — majburiyat: - $7,400
# 5-qadam: Jami
  $51,300 - $78,000 - $260 - $7,400 = -$34,360
= Javob: $34,360 kamayish
! Ko'p uchraydigan xato: $19,560 kamayish kelgusi davr daromadini oshish deb hisoblaydi. «Oshish» variantlari ishorani teskari oladi.`,
      },
      options: ['$34,360 increase', '$34,360 decrease', '$19,560 increase', '$19,560 decrease'],
      correctIndex: 1,
    },
    {
      id: 'ch14-q334',
      kitRef: 334,
      topicId: 'chapter-14',
      type: 'single',
      text: 'What is the most important reason for producing a trial balance before preparing financial statements?',
      explanation: {
        en: `The only thing a trial balance can show is that debits equal credits.
- Equal debits and credits: RIGHT. This is exactly what it checks.
- Confirms accuracy: WRONG. Errors of omission, commission, principle and so on still agree.
- Calculates the adjustments: WRONG. Adjustments come from other information, not from the trial balance.
- Provides every figure: WRONG. Year-end adjustments are still to be added.
= Answer: it shows the ledger holds debit and credit entries of equal value`,
        ru: `Оборотная ведомость может показать только равенство дебетов и кредитов.
- Равные дебеты и кредиты: ВЕРНО. Именно это она и проверяет.
- Подтверждает точность: НЕВЕРНО. Ошибки пропуска, счёта, принципа и другие всё равно сходятся.
- Рассчитывает корректировки: НЕВЕРНО. Корректировки берут из другой информации, не из ведомости.
- Даёт все цифры: НЕВЕРНО. Годовые корректировки ещё нужно добавить.
= Ответ: она показывает, что в книге дебетовые и кредитовые записи равны`,
        uz: `Sinov balansi faqat debet va kreditlar tengligini ko'rsata oladi.
- Teng debet va kreditlar: TO'G'RI. Aynan shuni tekshiradi.
- Aniqlikni tasdiqlaydi: NOTO'G'RI. Tushib qolish, noto'g'ri hisob, tamoyil va boshqa xatolar baribir mos keladi.
- Tuzatishlarni hisoblaydi: NOTO'G'RI. Tuzatishlar sinov balansidan emas, boshqa ma'lumotdan olinadi.
- Barcha sonlarni beradi: NOTO'G'RI. Yil oxiri tuzatishlarini hali qo'shish kerak.
= Javob: u kitobdagi debet va kredit yozuvlari teng ekanini ko'rsatadi`,
      },
      options: [
        'It shows that the ledger accounts hold debit and credit entries of equal value',
        'It confirms the accuracy of the ledger accounts',
        'It enables the accountant to calculate the adjustments required',
        'It provides every figure needed for the financial statements',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q335',
      kitRef: 335,
      topicId: 'chapter-14',
      type: 'number',
      text: 'Use the trial balance below. Not yet accounted for: rent of $300 is prepaid; closing inventory is $2,200; and the allowance for receivables should be changed to $250. What is the operating profit for the year?',
      explanation: {
        en: `Build the statement of profit or loss from the trial balance, adding the three adjustments.
# Step 1: Cost of sales
  Opening inventory $3,100 + purchases $86,000 - closing inventory $2,200 = $86,900
# Step 2: Gross profit
  Revenue $134,000 - cost of sales $86,900 = $47,100
# Step 3: Expenses and other income
  Rent $4,000 - $300 prepaid = $3,700 (the prepaid part belongs to next year)
  Sundry expenses: $15,600
  Allowance falls from $400 to $250: $150 is a credit, so it adds to profit
  Bank interest received: + $300
# Step 4: Operating profit
  $47,100 - $3,700 - $15,600 + $150 + $300 = $28,250
= Answer: $28,250
! Common trap: adding the $300 prepayment to rent instead of taking it off, or treating the $150 fall in the allowance as a cost.`,
        ru: `Составим отчёт о прибыли или убытке по ведомости с тремя корректировками.
# Шаг 1: Себестоимость продаж
  Запасы на начало $3,100 + закупки $86,000 - запасы на конец $2,200 = $86,900
# Шаг 2: Валовая прибыль
  Выручка $134,000 - себестоимость $86,900 = $47,100
# Шаг 3: Расходы и прочие доходы
  Аренда $4,000 - предоплата $300 = $3,700 (предоплаченная часть относится к следующему году)
  Прочие расходы: $15,600
  Резерв падает с $400 до $250: $150 — кредит, он увеличивает прибыль
  Полученные банковские проценты: + $300
# Шаг 4: Операционная прибыль
  $47,100 - $3,700 - $15,600 + $150 + $300 = $28,250
= Ответ: $28,250
! Частая ошибка: прибавить предоплату $300 к аренде вместо вычета или считать снижение резерва на $150 расходом.`,
        uz: `Sinov balansidan uchta tuzatish bilan foyda yoki zarar hisobotini tuzamiz.
# 1-qadam: Sotilgan tovar tannarxi
  Boshlang'ich zaxira $3,100 + xaridlar $86,000 - yakuniy zaxira $2,200 = $86,900
# 2-qadam: Yalpi foyda
  Tushum $134,000 - tannarx $86,900 = $47,100
# 3-qadam: Xarajatlar va boshqa daromad
  Ijara $4,000 - oldindan to'lov $300 = $3,700 (oldindan to'langan qism keyingi yilga tegishli)
  Boshqa xarajatlar: $15,600
  Rezerv $400 dan $250 ga tushadi: $150 kredit, u foydani oshiradi
  Olingan bank foizi: + $300
# 4-qadam: Operatsion foyda
  $47,100 - $3,700 - $15,600 + $150 + $300 = $28,250
= Javob: $28,250
! Ko'p uchraydigan xato: $300 oldindan to'lovni ijaradan ayirish o'rniga qo'shish yoki rezervning $150 kamayishini xarajat deb hisoblash.`,
      },
      correctValue: 28250,
      answerText: '$28,250',
      table: {
        head: ['Account', 'Dr $', 'Cr $'],
        rows: [
          ['Non-current assets', '60,000', ''],
          ['Inventory', '3,100', ''],
          ['Capital', '', '33,540'],
          ['Receivables and payables', '5,200', '6,000'],
          ['Allowance for receivables', '', '400'],
          ['Cash', '340', ''],
          ['Purchases and revenue', '86,000', '134,000'],
          ['Rental expense', '4,000', ''],
          ['Sundry expenses', '15,600', ''],
          ['Bank interest received', '', '300'],
          ['Total', '174,240', '174,240'],
        ],
      },
    },
    {
      id: 'ch14-q336',
      kitRef: 336,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A trial balance shows plant and machinery at cost $60,000 and accumulated depreciation $18,000. The policy is 10% a year straight line. What is the depreciation charge for the year and the closing carrying amount?',
      explanation: {
        en: `Straight line means the same charge every year, worked out on COST.
# Step 1: Charge for the year
  10% x cost $60,000 = $6,000
# Step 2: Accumulated depreciation at the year end
  $18,000 + $6,000 = $24,000
# Step 3: Carrying amount
  $60,000 - $24,000 = $36,000
= Answer: charge $6,000; carrying amount $36,000
! Common trap: $4,200 is 10% of the carrying amount $42,000 (that is reducing balance). $54,000 forgets the depreciation from earlier years.`,
        ru: `Линейный метод — одинаковая сумма каждый год, считается от СТОИМОСТИ.
# Шаг 1: Амортизация за год
  10% x стоимость $60,000 = $6,000
# Шаг 2: Накопленная амортизация на конец года
  $18,000 + $6,000 = $24,000
# Шаг 3: Балансовая стоимость
  $60,000 - $24,000 = $36,000
= Ответ: амортизация $6,000; балансовая стоимость $36,000
! Частая ошибка: $4,200 — это 10% от балансовой стоимости $42,000 (это уменьшаемый остаток). $54,000 забывает амортизацию прошлых лет.`,
        uz: `To'g'ri chiziqli usul — har yili bir xil summa, TANNARXdan hisoblanadi.
# 1-qadam: Yillik amortizatsiya
  10% x tannarx $60,000 = $6,000
# 2-qadam: Yil oxiridagi jamg'arilgan amortizatsiya
  $18,000 + $6,000 = $24,000
# 3-qadam: Balans qiymati
  $60,000 - $24,000 = $36,000
= Javob: amortizatsiya $6,000; balans qiymati $36,000
! Ko'p uchraydigan xato: $4,200 — balans qiymati $42,000 ning 10% i (bu kamayuvchi qoldiq). $54,000 oldingi yillar amortizatsiyasini unutadi.`,
      },
      options: [
        'Charge $4,200; carrying amount $37,800',
        'Charge $6,000; carrying amount $36,000',
        'Charge $6,000; carrying amount $54,000',
        'Charge $4,200; carrying amount $36,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch14-q337',
      kitRef: 337,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A trial balance shows rent of $26,000 and insurance of $33,000, the amounts paid. The monthly rent is $2,400 and the annual insurance charge is $30,000. What are the charges and closing balances?',
      explanation: {
        en: `The charge is what is DUE for the year. Compare it with what was PAID.
# Step 1: Rent
  Due: 12 x $2,400 = $28,800
  Paid: $26,000
  $28,800 - $26,000 = $2,800 still owed: an ACCRUAL (a liability)
# Step 2: Insurance
  Due: $30,000
  Paid: $33,000
  $33,000 - $30,000 = $3,000 paid in advance: a PREPAYMENT (an asset)
= Answer: rent $28,800 with a $2,800 accrual; insurance $30,000 with a $3,000 prepayment
! Common trap: using the amount paid as the charge, or swapping accrual and prepayment. Paid less than due = accrual; paid more = prepayment.`,
        ru: `Расход — то, что ПРИЧИТАЕТСЯ за год. Сравним с тем, что ЗАПЛАТИЛИ.
# Шаг 1: Аренда
  Причитается: 12 x $2,400 = $28,800
  Заплачено: $26,000
  $28,800 - $26,000 = $2,800 ещё должны: НАЧИСЛЕНИЕ (обязательство)
# Шаг 2: Страхование
  Причитается: $30,000
  Заплачено: $33,000
  $33,000 - $30,000 = $3,000 заплачено вперёд: ПРЕДОПЛАТА (актив)
= Ответ: аренда $28,800 и начисление $2,800; страхование $30,000 и предоплата $3,000
! Частая ошибка: брать уплаченную сумму как расход или путать начисление и предоплату. Заплатили меньше — начисление; больше — предоплата.`,
        uz: `Xarajat — yil uchun TO'LANISHI KERAK bo'lgan summa. Uni TO'LANGAN summa bilan solishtiramiz.
# 1-qadam: Ijara
  Kerak: 12 x $2,400 = $28,800
  To'langan: $26,000
  $28,800 - $26,000 = $2,800 hali qarz: HISOBLANGAN XARAJAT (majburiyat)
# 2-qadam: Sug'urta
  Kerak: $30,000
  To'langan: $33,000
  $33,000 - $30,000 = $3,000 oldindan to'langan: OLDINDAN TO'LOV (aktiv)
= Javob: ijara $28,800 va $2,800 hisoblangan; sug'urta $30,000 va $3,000 oldindan to'lov
! Ko'p uchraydigan xato: to'langan summani xarajat deb olish yoki hisoblangan va oldindan to'lovni almashtirish. Kam to'langan — hisoblangan; ko'p — oldindan to'lov.`,
      },
      options: [
        'Rent $26,000 with a $2,800 prepayment; insurance $30,000 with a $3,000 accrual',
        'Rent $28,800 with a $2,800 accrual; insurance $33,000 with a $3,000 prepayment',
        'Rent $28,800 with a $2,800 accrual; insurance $30,000 with a $3,000 prepayment',
        'Rent $28,800 with a $2,800 prepayment; insurance $30,000 with a $3,000 accrual',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch14-q338',
      kitRef: 338,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A trial balance shows receivables $34,500, allowance for receivables $3,400 credit and irrecoverable debts $1,900. Further debts of $3,500 are found to be irrecoverable, and the allowance should be $3,100 on the adjusted receivables. What are the irrecoverable debts expense and net receivables?',
      explanation: {
        en: `Two parts make the expense: debts written off, and the change in the allowance.
# Step 1: Debts written off
  Already in the trial balance $1,900 + new $3,500 = $5,400
# Step 2: Change in the allowance
  From $3,400 to $3,100: a fall of $300, which REDUCES the expense
# Step 3: Expense
  $5,400 - $300 = $5,100
# Step 4: Net receivables
  $34,500 - $3,500 written off = $31,000
  $31,000 - allowance $3,100 = $27,900
= Answer: expense $5,100; net receivables $27,900
! Common trap: $5,700 adds the $300 instead of taking it off. $31,000 forgets to deduct the allowance.`,
        ru: `Расход состоит из двух частей: списанные долги и изменение резерва.
# Шаг 1: Списанные долги
  Уже в ведомости $1,900 + новые $3,500 = $5,400
# Шаг 2: Изменение резерва
  С $3,400 до $3,100: снижение на $300, оно УМЕНЬШАЕТ расход
# Шаг 3: Расход
  $5,400 - $300 = $5,100
# Шаг 4: Чистая дебиторская задолженность
  $34,500 - списано $3,500 = $31,000
  $31,000 - резерв $3,100 = $27,900
= Ответ: расход $5,100; чистые дебиторы $27,900
! Частая ошибка: $5,700 прибавляет $300 вместо вычета. $31,000 забывает вычесть резерв.`,
        uz: `Xarajat ikki qismdan iborat: hisobdan chiqarilgan qarzlar va rezerv o'zgarishi.
# 1-qadam: Hisobdan chiqarilgan qarzlar
  Sinov balansida bor $1,900 + yangi $3,500 = $5,400
# 2-qadam: Rezerv o'zgarishi
  $3,400 dan $3,100 ga: $300 kamayish, u xarajatni KAMAYTIRADI
# 3-qadam: Xarajat
  $5,400 - $300 = $5,100
# 4-qadam: Sof debitorlar
  $34,500 - chiqarilgan $3,500 = $31,000
  $31,000 - rezerv $3,100 = $27,900
= Javob: xarajat $5,100; sof debitorlar $27,900
! Ko'p uchraydigan xato: $5,700 $300 ni ayirish o'rniga qo'shadi. $31,000 rezervni ayirishni unutadi.`,
      },
      options: [
        'Expense $5,100; net receivables $27,900',
        'Expense $5,700; net receivables $27,900',
        'Expense $3,200; net receivables $25,400',
        'Expense $5,100; net receivables $31,000',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q339',
      kitRef: 339,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A trial balance shows motor vehicles at cost $40,000 and accumulated depreciation $17,500. The policy is 25% a year reducing balance. What is the charge for the year and the closing carrying amount?',
      explanation: {
        en: `Reducing balance works on the CARRYING AMOUNT, not on cost.
# Step 1: Carrying amount at the start
  Cost $40,000 - accumulated depreciation $17,500 = $22,500
# Step 2: Charge for the year
  25% x $22,500 = $5,625
# Step 3: Closing carrying amount
  $22,500 - $5,625 = $16,875
= Answer: charge $5,625; carrying amount $16,875
! Common trap: $10,000 is 25% of cost (straight line). $34,375 takes the charge off cost and ignores earlier depreciation.`,
        ru: `Уменьшаемый остаток считается от БАЛАНСОВОЙ СТОИМОСТИ, а не от первоначальной.
# Шаг 1: Балансовая стоимость на начало
  Стоимость $40,000 - накопленная амортизация $17,500 = $22,500
# Шаг 2: Амортизация за год
  25% x $22,500 = $5,625
# Шаг 3: Балансовая стоимость на конец
  $22,500 - $5,625 = $16,875
= Ответ: амортизация $5,625; балансовая стоимость $16,875
! Частая ошибка: $10,000 — 25% от стоимости (линейный метод). $34,375 вычитает амортизацию из стоимости и забывает прошлую.`,
        uz: `Kamayuvchi qoldiq tannarxdan emas, BALANS QIYMATIdan hisoblanadi.
# 1-qadam: Boshidagi balans qiymati
  Tannarx $40,000 - jamg'arilgan amortizatsiya $17,500 = $22,500
# 2-qadam: Yillik amortizatsiya
  25% x $22,500 = $5,625
# 3-qadam: Yakuniy balans qiymati
  $22,500 - $5,625 = $16,875
= Javob: amortizatsiya $5,625; balans qiymati $16,875
! Ko'p uchraydigan xato: $10,000 — tannarxning 25% i (to'g'ri chiziqli). $34,375 amortizatsiyani tannarxdan ayiradi va oldingisini unutadi.`,
      },
      options: [
        'Charge $10,000; carrying amount $12,500',
        'Charge $5,625; carrying amount $34,375',
        'Charge $10,000; carrying amount $30,000',
        'Charge $5,625; carrying amount $16,875',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q340',
      kitRef: 340,
      topicId: 'chapter-14',
      type: 'number',
      text: 'A new office junior prepared the trial balance below, placing some balances in the wrong column. Once they are in the correct columns, the trial balance agrees with no difference. What is the total of each column?',
      explanation: {
        en: `Ignore the "Difference" line. Put each balance in its proper column and add up the debits.
# Step 1: Spot the three misplaced balances
  Opening inventory is an asset: DEBIT, not credit
  Share capital is owed to the owners: CREDIT, not debit
  A bank overdraft is owed to the bank: CREDIT, not debit
# Step 2: Debit column
  Premises $560,000 + opening inventory $26,000 + receivables $48,500 + carriage in $1,700
  + purchases $382,000 + sales returns $11,500 + sundry expenses $14,200 = $1,043,900
# Step 3: Check with the credit column
  Accumulated depreciation $130,000 + share capital $220,000 + retained earnings $123,000
  + payables $39,000 + allowance $3,800 + overdraft $1,100 + revenue $527,000 = $1,043,900
= Answer: $1,043,900 in each column`,
        ru: `Не обращайте внимания на строку «Разница». Разнесём остатки по своим колонкам и сложим дебет.
# Шаг 1: Найдём три остатка не на месте
  Запасы на начало — актив: ДЕБЕТ, а не кредит
  Акционерный капитал причитается владельцам: КРЕДИТ, а не дебет
  Овердрафт причитается банку: КРЕДИТ, а не дебет
# Шаг 2: Дебет
  Здания $560,000 + запасы на начало $26,000 + дебиторы $48,500 + доставка от поставщика $1,700
  + закупки $382,000 + возвраты покупателей $11,500 + прочие расходы $14,200 = $1,043,900
# Шаг 3: Проверка по кредиту
  Накопленная амортизация $130,000 + акционерный капитал $220,000 + нераспределённая прибыль $123,000
  + кредиторы $39,000 + резерв $3,800 + овердрафт $1,100 + выручка $527,000 = $1,043,900
= Ответ: $1,043,900 в каждой колонке`,
        uz: `«Farq» qatoriga e'tibor bermang. Har bir qoldiqni o'z ustuniga qo'yib, debetni qo'shamiz.
# 1-qadam: Noto'g'ri joydagi uchta qoldiqni topamiz
  Boshlang'ich zaxira aktiv: DEBET, kredit emas
  Ustav kapitali egalarga tegishli: KREDIT, debet emas
  Overdraft bankka qarz: KREDIT, debet emas
# 2-qadam: Debet
  Binolar $560,000 + boshlang'ich zaxira $26,000 + debitorlar $48,500 + yetkazib beruvchidan tashish $1,700
  + xaridlar $382,000 + sotuv qaytarishlari $11,500 + boshqa xarajatlar $14,200 = $1,043,900
# 3-qadam: Kredit bilan tekshiramiz
  Jamg'arilgan amortizatsiya $130,000 + ustav kapitali $220,000 + taqsimlanmagan foyda $123,000
  + kreditorlar $39,000 + rezerv $3,800 + overdraft $1,100 + tushum $527,000 = $1,043,900
= Javob: har bir ustunda $1,043,900`,
      },
      correctValue: 1043900,
      answerText: '$1,043,900',
      table: {
        head: ['Account', 'Dr $', 'Cr $'],
        rows: [
          ['Premises and accumulated depreciation', '560,000', '130,000'],
          ['Opening inventory', '', '26,000'],
          ['Share capital', '220,000', ''],
          ['Retained earnings', '', '123,000'],
          ['Receivables', '48,500', ''],
          ['Payables', '', '39,000'],
          ['Carriage in', '1,700', ''],
          ['Allowance for receivables', '', '3,800'],
          ['Bank overdraft', '1,100', ''],
          ['Revenue', '', '527,000'],
          ['Purchases', '382,000', ''],
          ['Sales returns', '11,500', ''],
          ['Sundry expenses', '14,200', ''],
          ['Difference', '', '390,200'],
          ['Total', '1,239,000', '1,239,000'],
        ],
      },
    },
    {
      id: 'ch14-q341',
      kitRef: 341,
      topicId: 'chapter-14',
      type: 'number',
      text: 'A draft profit is $84,200. Closing inventories that cost $130,000 had a net realisable value of $121,000, but were shown at cost. A motor vehicle bought for $32,000 was posted to motor expenses. Vehicles are depreciated at 25% a year on cost, with a full year\'s charge in the year of purchase. What is the revised profit?',
      explanation: {
        en: `Start from the draft profit and correct each item.
# Step 1: Inventory
  Inventory must be the lower of cost $130,000 and NRV $121,000
  It is $9,000 too high, so profit falls: - $9,000
# Step 2: The vehicle posted to motor expenses
  It is an asset, not an expense, so take it out of expenses: + $32,000
  A full year's depreciation: 25% x $32,000 = $8,000: - $8,000
# Step 3: Revised profit
  $84,200 - $9,000 + $32,000 - $8,000 = $99,200
= Answer: $99,200
! Common trap: forgetting the depreciation on the vehicle once it becomes an asset.`,
        ru: `Начнём с черновой прибыли и исправим каждую статью.
# Шаг 1: Запасы
  Запасы — по меньшей из стоимости $130,000 и ЧСР $121,000
  Они завышены на $9,000, прибыль падает: - $9,000
# Шаг 2: Автомобиль на транспортных расходах
  Это актив, а не расход, убираем из расходов: + $32,000
  Амортизация за полный год: 25% x $32,000 = $8,000: - $8,000
# Шаг 3: Исправленная прибыль
  $84,200 - $9,000 + $32,000 - $8,000 = $99,200
= Ответ: $99,200
! Частая ошибка: забыть амортизацию автомобиля, когда он становится активом.`,
        uz: `Dastlabki foydadan boshlab, har bir moddani tuzatamiz.
# 1-qadam: Zaxira
  Zaxira tannarx $130,000 va SSQ $121,000 ning kichigida bo'lishi kerak
  U $9,000 ko'p, foyda kamayadi: - $9,000
# 2-qadam: Transport xarajatiga yozilgan avtomobil
  Bu xarajat emas, aktiv, xarajatlardan chiqaramiz: + $32,000
  To'liq yil amortizatsiyasi: 25% x $32,000 = $8,000: - $8,000
# 3-qadam: Tuzatilgan foyda
  $84,200 - $9,000 + $32,000 - $8,000 = $99,200
= Javob: $99,200
! Ko'p uchraydigan xato: avtomobil aktivga aylangach, uning amortizatsiyasini unutish.`,
      },
      correctValue: 99200,
      answerText: '$99,200',
    },
    {
      id: 'ch14-q342',
      kitRef: 342,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A draft profit is $71,400. Later it is found that (1) a $2,500 receipt from a credit customer was omitted; (2) a sales invoice for $9,000 was raised at $10,000; and (3) a $450 supplier invoice for IT services was posted to the depreciation charge. What is the revised profit?',
      explanation: {
        en: `For each item ask: does the correction touch an income or expense account?
# Item 1: $2,500 receipt from a customer left out
  Dr Bank, Cr Receivables: both in the statement of financial position. No change
# Item 2: invoice raised at $10,000 instead of $9,000
  Sales are $1,000 too high: - $1,000
# Item 3: $450 IT invoice posted to depreciation
  Moves a cost from one expense to another. No change to total profit
# Revised profit
  $71,400 - $1,000 = $70,400
= Answer: $70,400
! Common trap: adding the $2,500 receipt to profit, or adding $1,000 instead of taking it off ($72,400).`,
        ru: `По каждой статье спросим: затрагивает ли исправление счёт дохода или расхода?
# Статья 1: пропущено поступление $2,500 от покупателя
  Дт Банк, Кт Дебиторы: оба в отчёте о финансовом положении. Без изменений
# Статья 2: счёт выставлен на $10,000 вместо $9,000
  Продажи завышены на $1,000: - $1,000
# Статья 3: счёт за ИТ $450 проведён на амортизацию
  Перенос между двумя расходами. Общая прибыль не меняется
# Исправленная прибыль
  $71,400 - $1,000 = $70,400
= Ответ: $70,400
! Частая ошибка: прибавить поступление $2,500 к прибыли или прибавить $1,000 вместо вычета ($72,400).`,
        uz: `Har bir modda uchun so'raymiz: tuzatish daromad yoki xarajat hisobiga tegadimi?
# 1-modda: mijozdan $2,500 tushum tushib qolgan
  Dt Bank, Kt Debitorlar: ikkalasi moliyaviy holat hisobotida. O'zgarishsiz
# 2-modda: hisob-faktura $9,000 o'rniga $10,000 ga yozilgan
  Sotuv $1,000 ko'p: - $1,000
# 3-modda: $450 IT hisob-fakturasi amortizatsiyaga yozilgan
  Bir xarajatdan boshqasiga ko'chish. Jami foyda o'zgarmaydi
# Tuzatilgan foyda
  $71,400 - $1,000 = $70,400
= Javob: $70,400
! Ko'p uchraydigan xato: $2,500 tushumni foydaga qo'shish yoki $1,000 ni ayirish o'rniga qo'shish ($72,400).`,
      },
      options: ['$70,400', '$70,850', '$72,400', '$73,850'],
      correctIndex: 0,
    },
    {
      id: 'ch14-q343',
      kitRef: 343,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A draft profit is $61,300, before correcting these: (1) cash drawings of $300 not recorded; (2) debts of $480, fully allowed for during the year, should have been written off; (3) rental income of $350 classified as interest income; (4) $240 cash from a credit customer not recorded. What is the corrected profit?',
      explanation: {
        en: `For each item ask: does the correction touch an income or expense account, with the other side outside profit or loss?
# Item 1: cash drawings $300
  Dr Drawings, Cr Cash: drawings are not an expense. No change
# Item 2: debts of $480 already fully allowed for
  The cost hit profit when the allowance was made. Writing off: Dr Allowance, Cr Receivables. No change
# Item 3: rental income shown as interest income
  Both are income. No change to total profit
# Item 4: $240 from a credit customer
  Dr Cash, Cr Receivables. No change
= Answer: $61,300, the same as the draft
! Common trap: deducting the drawings or the $480 write-off. Drawings are never an expense, and the $480 was charged once already.`,
        ru: `По каждой статье спросим: затрагивает ли исправление доход или расход, а другая сторона вне прибыли или убытка?
# Статья 1: изъятия наличных $300
  Дт Изъятия, Кт Касса: изъятия — не расход. Без изменений
# Статья 2: долги $480, уже полностью покрытые резервом
  Расход попал в прибыль при создании резерва. Списание: Дт Резерв, Кт Дебиторы. Без изменений
# Статья 3: доход от аренды показан как процентный доход
  Оба — доходы. Общая прибыль не меняется
# Статья 4: $240 от покупателя в кредит
  Дт Касса, Кт Дебиторы. Без изменений
= Ответ: $61,300, как в черновике
! Частая ошибка: вычесть изъятия или списание $480. Изъятия — никогда не расход, а $480 уже были учтены один раз.`,
        uz: `Har bir modda uchun so'raymiz: tuzatish daromad yoki xarajatga tegadimi, ikkinchi tomoni esa foyda yoki zarardan tashqaridami?
# 1-modda: naqd olib qo'yish $300
  Dt Olib qo'yish, Kt Kassa: olib qo'yish xarajat emas. O'zgarishsiz
# 2-modda: rezerv bilan to'liq qoplangan $480 qarzlar
  Xarajat rezerv yaratilganda foydaga tushgan. Chiqarish: Dt Rezerv, Kt Debitorlar. O'zgarishsiz
# 3-modda: ijara daromadi foiz daromadi sifatida ko'rsatilgan
  Ikkalasi daromad. Jami foyda o'zgarmaydi
# 4-modda: kredit mijozdan $240
  Dt Kassa, Kt Debitorlar. O'zgarishsiz
= Javob: $61,300, dastlabkidek
! Ko'p uchraydigan xato: olib qo'yish yoki $480 chiqarishni ayirish. Olib qo'yish hech qachon xarajat emas, $480 esa bir marta hisobga olingan.`,
      },
      options: ['$60,520', '$60,820', '$61,300', '$61,540'],
      correctIndex: 2,
    },
    {
      id: 'ch14-q344',
      kitRef: 344,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A bookkeeper was told to make a contra of $310 between payables and receivables, but debited receivables and credited payables. Which statement is correct?',
      explanation: {
        en: `Compare what should have been posted with what was posted.
# Step 1: The right entry for a contra
  Dr Payables $310, Cr Receivables $310 (both go DOWN)
# Step 2: What was posted
  Dr Receivables $310, Cr Payables $310 (both went UP)
  So receivables and payables are each $620 too high
# Step 3: Effect
  Assets and liabilities are both $620 too high: net assets do not change
  No income or expense account was touched: profit does not change
= Answer: the error must be corrected, but neither profit nor net assets are overstated
! Common trap: seeing $620 and assuming net assets or profit are wrong. Both sides moved by the same amount.`,
        ru: `Сравним, что надо было провести, с тем, что провели.
# Шаг 1: Правильная запись взаимозачёта
  Дт Кредиторы $310, Кт Дебиторы $310 (оба УМЕНЬШАЮТСЯ)
# Шаг 2: Что провели
  Дт Дебиторы $310, Кт Кредиторы $310 (оба ВЫРОСЛИ)
  Значит, дебиторы и кредиторы завышены на $620 каждый
# Шаг 3: Влияние
  Активы и обязательства завышены на $620: чистые активы не меняются
  Счета доходов и расходов не затронуты: прибыль не меняется
= Ответ: ошибку нужно исправить, но ни прибыль, ни чистые активы не завышены
! Частая ошибка: увидеть $620 и решить, что чистые активы или прибыль неверны. Обе стороны сдвинулись на одну сумму.`,
        uz: `Nima yozilishi kerak edi va nima yozilganini solishtiramiz.
# 1-qadam: O'zaro hisob-kitobning to'g'ri yozuvi
  Dt Kreditorlar $310, Kt Debitorlar $310 (ikkalasi KAMAYADI)
# 2-qadam: Nima yozilgan
  Dt Debitorlar $310, Kt Kreditorlar $310 (ikkalasi OSHGAN)
  Demak, debitorlar ham, kreditorlar ham $620 dan ko'p
# 3-qadam: Ta'siri
  Aktivlar va majburiyatlar $620 dan ko'p: sof aktivlar o'zgarmaydi
  Daromad yoki xarajat hisobiga tegilmagan: foyda o'zgarmaydi
= Javob: xatoni tuzatish kerak, lekin foyda ham, sof aktivlar ham oshirib ko'rsatilmagan
! Ko'p uchraydigan xato: $620 ni ko'rib, sof aktivlar yoki foyda noto'g'ri deb o'ylash. Ikkala tomon bir xil summaga siljigan.`,
      },
      options: [
        'Unless corrected, profit will be overstated by $620',
        'Unless corrected, net assets will be overstated by $310',
        'Unless corrected, net assets will be overstated by $620',
        'The error should be corrected, but neither profit nor net assets are overstated',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q345',
      kitRef: 345,
      topicId: 'chapter-14',
      type: 'single',
      text: 'At 30 September these items are missing from a company\'s accounts. (1) On 1 September it received a $6,000 deposit for goods despatched on 15 October. (2) On 1 August it paid $6,000 of insurance for the six months from 1 July. (3) On 1 April it raised a five-year $16,000 bank loan, repayable at the end of the term, with 6% interest payable annually in arrears. What is the effect on total current assets and current liabilities?',
      explanation: {
        en: `Take each item and ask: what goes into current assets, and what into current liabilities, at 30 September?
# Item 1: $6,000 deposit received for goods not yet sent
  Cash in: current assets + $6,000
  Goods not yet sent, so it is deferred income: current liabilities + $6,000
# Item 2: $6,000 insurance for 1 July to 31 December
  Cash out: current assets - $6,000
  October to December (3 of 6 months) is still to come: prepayment 3/6 x $6,000 = + $3,000
# Item 3: $16,000 five-year loan from 1 April
  Cash in: current assets + $16,000
  The loan itself is repaid in five years: NON-current, not counted here
  Interest owed for April to September: $16,000 x 6% x 6/12 = $480: current liabilities + $480
# Totals
  Current assets: $6,000 - $6,000 + $3,000 + $16,000 = $19,000
  Current liabilities: $6,000 + $480 = $6,480
= Answer: current assets $19,000; current liabilities $6,480
! Common trap: treating the deposit as revenue (current liabilities only $480) or forgetting the cash paid out for insurance ($25,000).`,
        ru: `Возьмём каждую статью и спросим: что идёт в оборотные активы, а что в краткосрочные обязательства на 30 сентября?
# Статья 1: получен аванс $6,000 за ещё не отгруженный товар
  Деньги пришли: оборотные активы + $6,000
  Товар не отгружен, это доходы будущих периодов: краткосрочные обязательства + $6,000
# Статья 2: страховка $6,000 с 1 июля по 31 декабря
  Деньги ушли: оборотные активы - $6,000
  Октябрь–декабрь (3 из 6 месяцев) ещё впереди: предоплата 3/6 x $6,000 = + $3,000
# Статья 3: пятилетний заём $16,000 с 1 апреля
  Деньги пришли: оборотные активы + $16,000
  Сам заём гасится через пять лет: ДОЛГОСРОЧНЫЙ, здесь не считается
  Проценты за апрель–сентябрь: $16,000 x 6% x 6/12 = $480: краткосрочные обязательства + $480
# Итого
  Оборотные активы: $6,000 - $6,000 + $3,000 + $16,000 = $19,000
  Краткосрочные обязательства: $6,000 + $480 = $6,480
= Ответ: оборотные активы $19,000; краткосрочные обязательства $6,480
! Частая ошибка: считать аванс выручкой (обязательства только $480) или забыть оплату страховки ($25,000).`,
        uz: `Har bir moddani olib, 30 sentyabr holatiga nima aylanma aktivga, nima qisqa muddatli majburiyatga kirishini so'raymiz.
# 1-modda: hali jo'natilmagan tovar uchun $6,000 avans olingan
  Pul kirdi: aylanma aktivlar + $6,000
  Tovar jo'natilmagan, bu kelgusi davr daromadi: qisqa muddatli majburiyatlar + $6,000
# 2-modda: 1 iyuldan 31 dekabrgacha $6,000 sug'urta
  Pul chiqdi: aylanma aktivlar - $6,000
  Oktyabr–dekabr (6 oydan 3 tasi) hali oldinda: oldindan to'lov 3/6 x $6,000 = + $3,000
# 3-modda: 1 apreldan besh yillik $16,000 qarz
  Pul kirdi: aylanma aktivlar + $16,000
  Qarzning o'zi besh yilda qaytariladi: UZOQ muddatli, bu yerda hisoblanmaydi
  Aprel–sentyabr foizi: $16,000 x 6% x 6/12 = $480: qisqa muddatli majburiyatlar + $480
# Jami
  Aylanma aktivlar: $6,000 - $6,000 + $3,000 + $16,000 = $19,000
  Qisqa muddatli majburiyatlar: $6,000 + $480 = $6,480
= Javob: aylanma aktivlar $19,000; qisqa muddatli majburiyatlar $6,480
! Ko'p uchraydigan xato: avansni tushum deb hisoblash (majburiyatlar faqat $480) yoki sug'urta to'lovini unutish ($25,000).`,
      },
      options: [
        'Current assets $19,000; current liabilities $6,480',
        'Current assets $22,000; current liabilities $480',
        'Current assets $25,000; current liabilities $12,480',
        'Current assets $9,000; current liabilities $6,480',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q346',
      kitRef: 346,
      topicId: 'chapter-14',
      type: 'number',
      text: 'An operating profit is $64,300. Office furniture bought on 1 February for $18,600 was charged to office expenses. It has a ten-year life and a residual value of $1,800, and is depreciated monthly from the month of purchase. The year ended on 31 July. What is the corrected operating profit?',
      explanation: {
        en: `Furniture is an asset, so take it out of expenses and charge depreciation instead.
# Step 1: Add back the cost
  $64,300 + $18,600 = $82,900
# Step 2: Annual depreciation
  (Cost $18,600 - residual value $1,800) / 10 years = $1,680 a year
# Step 3: Months owned this year
  February to July: 6 months
  $1,680 x 6/12 = $840
# Step 4: Corrected profit
  $82,900 - $840 = $82,060
= Answer: $82,060
! Common trap: charging a full year ($1,680) or forgetting to take off the residual value first.`,
        ru: `Мебель — актив, поэтому уберём её из расходов и начислим амортизацию.
# Шаг 1: Вернём стоимость
  $64,300 + $18,600 = $82,900
# Шаг 2: Годовая амортизация
  (Стоимость $18,600 - ликвидационная стоимость $1,800) / 10 лет = $1,680 в год
# Шаг 3: Месяцы владения в этом году
  Февраль–июль: 6 месяцев
  $1,680 x 6/12 = $840
# Шаг 4: Исправленная прибыль
  $82,900 - $840 = $82,060
= Ответ: $82,060
! Частая ошибка: начислить за полный год ($1,680) или забыть сначала вычесть ликвидационную стоимость.`,
        uz: `Mebel aktiv, shuning uchun uni xarajatlardan chiqarib, amortizatsiya hisoblaymiz.
# 1-qadam: Tannarxni qaytaramiz
  $64,300 + $18,600 = $82,900
# 2-qadam: Yillik amortizatsiya
  (Tannarx $18,600 - tugatish qiymati $1,800) / 10 yil = yiliga $1,680
# 3-qadam: Bu yil egalik qilingan oylar
  Fevral–iyul: 6 oy
  $1,680 x 6/12 = $840
# 4-qadam: Tuzatilgan foyda
  $82,900 - $840 = $82,060
= Javob: $82,060
! Ko'p uchraydigan xato: to'liq yil ($1,680) hisoblash yoki avval tugatish qiymatini ayirishni unutish.`,
      },
      correctValue: 82060,
      answerText: '$82,060',
    },
    {
      id: 'ch14-q347',
      kitRef: 347,
      topicId: 'chapter-14',
      type: 'single',
      text: 'Which of these is an error of principle?',
      explanation: {
        en: `An error of principle puts an item in the wrong TYPE of account, for example an asset treated as an expense.
- Gas bill credited to gas, debited to bank: right accounts, sides swapped. A REVERSAL.
- Asset purchase debited to purchases: an asset treated as an expense. ERROR OF PRINCIPLE.
- Asset credited, payables debited: right accounts, sides swapped. A REVERSAL.
- Wages at the wrong amount on both sides: ERROR OF ORIGINAL ENTRY.
= Answer: a non-current asset purchase debited to purchases and credited to payables`,
        ru: `Нарушение принципа — статья на счёте не того ТИПА, например актив учтён как расход.
- Счёт за газ: кредит газу, дебет банку: счета верные, стороны перепутаны. ОБРАТНАЯ ЗАПИСЬ.
- Покупка актива в дебет закупок: актив учтён как расход. НАРУШЕНИЕ ПРИНЦИПА.
- Кредит активу, дебет кредиторам: счета верные, стороны перепутаны. ОБРАТНАЯ ЗАПИСЬ.
- Зарплата с неверной суммой на обеих сторонах: ОШИБКА ИСХОДНОЙ ЗАПИСИ.
= Ответ: покупка внеоборотного актива в дебет закупок и кредит кредиторам`,
        uz: `Tamoyil xatosi moddani noto'g'ri TURDAGI hisobga qo'yadi, masalan aktivni xarajat sifatida.
- Gaz hisobi: gazga kredit, bankka debet: hisoblar to'g'ri, tomonlar almashgan. TESKARI YOZUV.
- Aktiv xaridi xaridlarga debetlangan: aktiv xarajat sifatida. TAMOYIL XATOSI.
- Aktivga kredit, kreditorlarga debet: hisoblar to'g'ri, tomonlar almashgan. TESKARI YOZUV.
- Ikkala tomonda noto'g'ri summadagi ish haqi: DASTLABKI YOZUV XATOSI.
= Javob: uzoq muddatli aktiv xaridi xaridlarga debet va kreditorlarga kredit qilingan`,
      },
      options: [
        'A gas bill credited to the gas account and debited to the bank account',
        'A non-current asset purchase debited to purchases and credited to payables',
        'A non-current asset purchase credited to the asset account and debited to payables',
        'Wages debited and credited to the correct accounts, but at the wrong amount',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch14-q348',
      kitRef: 348,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A registered trader received a purchase invoice for $900 including sales tax at 20%. The trader recorded only the invoice total and did not account for the tax. What adjustment is needed?',
      explanation: {
        en: `"$900 including tax" means the tax is INSIDE the $900.
# Step 1: Find the tax
  $900 x 20/120 = $150
  (Net cost $750 + tax $150 = $900)
# Step 2: What was posted
  Dr Purchases $900, Cr Payables $900
# Step 3: What should have been posted
  Dr Purchases $750, Dr Sales tax $150, Cr Payables $900
# Step 4: The fix
  Payables are already right. Move $150 out of purchases into sales tax
= Answer: Dr Sales tax $150, Cr Purchases $150
! Common trap: $180 is 20% of $900, but the tax is already included, so use 20/120. Payables need no change.`,
        ru: `«$900 с налогом» значит, что налог ВНУТРИ $900.
# Шаг 1: Найдём налог
  $900 x 20/120 = $150
  (Чистая стоимость $750 + налог $150 = $900)
# Шаг 2: Что провели
  Дт Закупки $900, Кт Кредиторы $900
# Шаг 3: Что надо было провести
  Дт Закупки $750, Дт Налог с продаж $150, Кт Кредиторы $900
# Шаг 4: Исправление
  Кредиторы уже верны. Переносим $150 из закупок в налог с продаж
= Ответ: Дт Налог с продаж $150, Кт Закупки $150
! Частая ошибка: $180 — это 20% от $900, но налог уже внутри, поэтому берём 20/120. Кредиторов не трогаем.`,
        uz: `«Soliq bilan $900» soliq $900 ICHIDA ekanini bildiradi.
# 1-qadam: Soliqni topamiz
  $900 x 20/120 = $150
  (Sof tannarx $750 + soliq $150 = $900)
# 2-qadam: Nima yozilgan
  Dt Xaridlar $900, Kt Kreditorlar $900
# 3-qadam: Nima yozilishi kerak edi
  Dt Xaridlar $750, Dt Sotuv solig'i $150, Kt Kreditorlar $900
# 4-qadam: Tuzatish
  Kreditorlar allaqachon to'g'ri. $150 ni xaridlardan sotuv solig'iga ko'chiramiz
= Javob: Dt Sotuv solig'i $150, Kt Xaridlar $150
! Ko'p uchraydigan xato: $180 — $900 ning 20% i, lekin soliq ichida, shuning uchun 20/120 olinadi. Kreditorlarga tegilmaydi.`,
      },
      options: [
        'Dr Sales tax $150, Cr Purchases $150',
        'Dr Payables $150, Cr Sales tax $150',
        'Dr Sales tax $180, Cr Purchases $180',
        'Dr Payables $180, Cr Sales tax $180',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q349',
      kitRef: 349,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A registered trader received a purchase invoice for $3,600 plus sales tax at 20%. The trader recorded only the gross amount and did not account for the tax. What adjustment is needed?',
      explanation: {
        en: `"$3,600 PLUS tax" means $3,600 is the net cost and the tax is on top.
# Step 1: Find the tax
  $3,600 x 20% = $720
  Gross: $3,600 + $720 = $4,320
# Step 2: What was posted
  Dr Purchases $4,320, Cr Payables $4,320
# Step 3: What should have been posted
  Dr Purchases $3,600, Dr Sales tax $720, Cr Payables $4,320
# Step 4: The fix
  Payables are already right. Move $720 out of purchases into sales tax
= Answer: Dr Sales tax $720, Cr Purchases $720
! Common trap: $600 uses 20/120, but here the tax is added on top of $3,600, so it is 20% of $3,600.`,
        ru: `«$3,600 ПЛЮС налог» значит, что $3,600 — чистая стоимость, а налог сверху.
# Шаг 1: Найдём налог
  $3,600 x 20% = $720
  Брутто: $3,600 + $720 = $4,320
# Шаг 2: Что провели
  Дт Закупки $4,320, Кт Кредиторы $4,320
# Шаг 3: Что надо было провести
  Дт Закупки $3,600, Дт Налог с продаж $720, Кт Кредиторы $4,320
# Шаг 4: Исправление
  Кредиторы уже верны. Переносим $720 из закупок в налог с продаж
= Ответ: Дт Налог с продаж $720, Кт Закупки $720
! Частая ошибка: $600 считает по 20/120, но здесь налог добавлен сверху к $3,600, значит это 20% от $3,600.`,
        uz: `«$3,600 PLYUS soliq» — $3,600 sof tannarx, soliq ustiga qo'shiladi.
# 1-qadam: Soliqni topamiz
  $3,600 x 20% = $720
  Yalpi: $3,600 + $720 = $4,320
# 2-qadam: Nima yozilgan
  Dt Xaridlar $4,320, Kt Kreditorlar $4,320
# 3-qadam: Nima yozilishi kerak edi
  Dt Xaridlar $3,600, Dt Sotuv solig'i $720, Kt Kreditorlar $4,320
# 4-qadam: Tuzatish
  Kreditorlar allaqachon to'g'ri. $720 ni xaridlardan sotuv solig'iga ko'chiramiz
= Javob: Dt Sotuv solig'i $720, Kt Xaridlar $720
! Ko'p uchraydigan xato: $600 20/120 bilan hisoblaydi, lekin bu yerda soliq $3,600 ustiga qo'shilgan, demak $3,600 ning 20% i.`,
      },
      options: [
        'Dr Payables $720, Cr Sales tax $720',
        'Dr Payables $600, Cr Purchases $600',
        'Dr Sales tax $600, Cr Purchases $600',
        'Dr Sales tax $720, Cr Purchases $720',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q350',
      kitRef: 350,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company revalued its land from $72,000 to $98,000. The asset account was updated correctly, but the other entry went to retained earnings. What is the correction?',
      explanation: {
        en: `A revaluation gain is not profit. It goes to the revaluation surplus.
# Step 1: The gain
  $98,000 - $72,000 = $26,000
# Step 2: What was posted
  Dr Land $26,000, Cr Retained earnings $26,000
# Step 3: What should have been posted
  Dr Land $26,000, Cr Revaluation surplus $26,000
# Step 4: The fix
  The land side is right. Move the credit from retained earnings to the revaluation surplus
= Answer: Dr Retained earnings $26,000, Cr Revaluation surplus $26,000
! Common trap: $98,000 is the new value, but only the $26,000 gain was posted. Share capital and share premium are only for issuing shares.`,
        ru: `Прирост от переоценки — не прибыль. Он идёт в резерв переоценки.
# Шаг 1: Прирост
  $98,000 - $72,000 = $26,000
# Шаг 2: Что провели
  Дт Земля $26,000, Кт Нераспределённая прибыль $26,000
# Шаг 3: Что надо было провести
  Дт Земля $26,000, Кт Резерв переоценки $26,000
# Шаг 4: Исправление
  Сторона земли верна. Переносим кредит из нераспределённой прибыли в резерв переоценки
= Ответ: Дт Нераспределённая прибыль $26,000, Кт Резерв переоценки $26,000
! Частая ошибка: $98,000 — новая стоимость, но провели только прирост $26,000. Акционерный капитал и эмиссионный доход — только для выпуска акций.`,
        uz: `Qayta baholash o'sishi foyda emas. U qayta baholash rezerviga boradi.
# 1-qadam: O'sish
  $98,000 - $72,000 = $26,000
# 2-qadam: Nima yozilgan
  Dt Yer $26,000, Kt Taqsimlanmagan foyda $26,000
# 3-qadam: Nima yozilishi kerak edi
  Dt Yer $26,000, Kt Qayta baholash rezervi $26,000
# 4-qadam: Tuzatish
  Yer tomoni to'g'ri. Kreditni taqsimlanmagan foydadan qayta baholash rezerviga ko'chiramiz
= Javob: Dt Taqsimlanmagan foyda $26,000, Kt Qayta baholash rezervi $26,000
! Ko'p uchraydigan xato: $98,000 yangi qiymat, lekin faqat $26,000 o'sish yozilgan. Ustav kapitali va emissiya daromadi faqat aksiya chiqarish uchun.`,
      },
      options: [
        'Dr Retained earnings $26,000, Cr Share premium $26,000',
        'Dr Retained earnings $98,000, Cr Revaluation surplus $98,000',
        'Dr Retained earnings $26,000, Cr Share capital $26,000',
        'Dr Retained earnings $26,000, Cr Revaluation surplus $26,000',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q351',
      kitRef: 351,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company recorded the gross cost of $1,800 of goods from a credit supplier in purchases and payables. Sales tax is 20%, and both businesses are registered. What journal corrects this?',
      explanation: {
        en: `$1,800 is the GROSS figure, so the tax is inside it.
# Step 1: Find the tax
  $1,800 x 20/120 = $300
  (Net $1,500 + tax $300 = $1,800)
# Step 2: What was posted
  Dr Purchases $1,800, Cr Payables $1,800
# Step 3: What should have been posted
  Dr Purchases $1,500, Dr Sales tax $300, Cr Payables $1,800
# Step 4: The fix
  Payables are right. Move $300 out of purchases into sales tax (it can be claimed back)
= Answer: Dr Sales tax $300, Cr Purchases $300
! Common trap: $360 is 20% of the gross. The swapped options would make purchases even bigger.`,
        ru: `$1,800 — сумма БРУТТО, налог внутри неё.
# Шаг 1: Найдём налог
  $1,800 x 20/120 = $300
  (Нетто $1,500 + налог $300 = $1,800)
# Шаг 2: Что провели
  Дт Закупки $1,800, Кт Кредиторы $1,800
# Шаг 3: Что надо было провести
  Дт Закупки $1,500, Дт Налог с продаж $300, Кт Кредиторы $1,800
# Шаг 4: Исправление
  Кредиторы верны. Переносим $300 из закупок в налог с продаж (его можно вернуть)
= Ответ: Дт Налог с продаж $300, Кт Закупки $300
! Частая ошибка: $360 — это 20% от брутто. Варианты с перевёрнутыми сторонами ещё больше увеличат закупки.`,
        uz: `$1,800 YALPI summa, soliq uning ichida.
# 1-qadam: Soliqni topamiz
  $1,800 x 20/120 = $300
  (Sof $1,500 + soliq $300 = $1,800)
# 2-qadam: Nima yozilgan
  Dt Xaridlar $1,800, Kt Kreditorlar $1,800
# 3-qadam: Nima yozilishi kerak edi
  Dt Xaridlar $1,500, Dt Sotuv solig'i $300, Kt Kreditorlar $1,800
# 4-qadam: Tuzatish
  Kreditorlar to'g'ri. $300 ni xaridlardan sotuv solig'iga ko'chiramiz (uni qaytarib olish mumkin)
= Javob: Dt Sotuv solig'i $300, Kt Xaridlar $300
! Ko'p uchraydigan xato: $360 yalpining 20% i. Tomonlari almashgan variantlar xaridlarni yanada oshiradi.`,
      },
      options: [
        'Dr Sales tax $300, Cr Purchases $300',
        'Dr Purchases $300, Cr Sales tax $300',
        'Dr Sales tax $360, Cr Purchases $360',
        'Dr Purchases $360, Cr Sales tax $360',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q352',
      kitRef: 352,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company returned goods and received a credit note. It posted the gross amount of $1,512 to the returns outwards account. Both businesses are registered for sales tax at 8%. What journal corrects this?',
      explanation: {
        en: `Returning goods reverses part of a purchase, including its tax.
# Step 1: Find the tax in the gross $1,512
  $1,512 x 8/108 = $112
  (Net $1,400 + tax $112 = $1,512)
# Step 2: What was posted
  Dr Payables $1,512, Cr Returns outwards $1,512
# Step 3: What should have been posted
  Dr Payables $1,512, Cr Returns outwards $1,400, Cr Sales tax $112
  (The tax claimed back on the purchase is now given up, so sales tax is credited)
# Step 4: The fix
  Payables are right. Returns outwards is $112 too high: debit it. Credit sales tax $112
= Answer: Dr Returns outwards $112, Cr Sales tax $112
! Common trap: debiting sales tax. For a return of PURCHASES the tax recovery is reversed, which is a credit.`,
        ru: `Возврат товара отменяет часть закупки вместе с налогом.
# Шаг 1: Найдём налог в брутто $1,512
  $1,512 x 8/108 = $112
  (Нетто $1,400 + налог $112 = $1,512)
# Шаг 2: Что провели
  Дт Кредиторы $1,512, Кт Возвраты поставщикам $1,512
# Шаг 3: Что надо было провести
  Дт Кредиторы $1,512, Кт Возвраты поставщикам $1,400, Кт Налог с продаж $112
  (Налог, заявленный к возврату по закупке, теперь отменяется, поэтому налог кредитуем)
# Шаг 4: Исправление
  Кредиторы верны. Возвраты поставщикам завышены на $112: дебетуем их. Кредитуем налог $112
= Ответ: Дт Возвраты поставщикам $112, Кт Налог с продаж $112
! Частая ошибка: дебетовать налог. При возврате ЗАКУПОК возмещение налога отменяется, это кредит.`,
        uz: `Tovarni qaytarish xaridning bir qismini soliq bilan birga bekor qiladi.
# 1-qadam: Yalpi $1,512 ichidagi soliqni topamiz
  $1,512 x 8/108 = $112
  (Sof $1,400 + soliq $112 = $1,512)
# 2-qadam: Nima yozilgan
  Dt Kreditorlar $1,512, Kt Xarid qaytarishlari $1,512
# 3-qadam: Nima yozilishi kerak edi
  Dt Kreditorlar $1,512, Kt Xarid qaytarishlari $1,400, Kt Sotuv solig'i $112
  (Xarid bo'yicha qaytarib olinadigan soliq endi bekor bo'ladi, shuning uchun soliq kreditlanadi)
# 4-qadam: Tuzatish
  Kreditorlar to'g'ri. Xarid qaytarishlari $112 ko'p: uni debetlaymiz. Sotuv solig'ini $112 kreditlaymiz
= Javob: Dt Xarid qaytarishlari $112, Kt Sotuv solig'i $112
! Ko'p uchraydigan xato: sotuv solig'ini debetlash. XARID qaytarilganda soliq qaytarilishi bekor qilinadi, bu kredit.`,
      },
      options: [
        'Dr Returns outwards $112, Cr Payables $112',
        'Dr Returns outwards $112, Cr Sales tax $112',
        'Dr Sales tax $112, Cr Returns outwards $112',
        'Dr Sales tax $112, Cr Payables $112',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch14-q353',
      kitRef: 353,
      topicId: 'chapter-14',
      type: 'single',
      text: 'When recording a contra of $2,500, a company correctly recorded the payables entry but posted the other side to the allowance for receivables account. Both parties are registered for sales tax at 20%. What journal corrects this?',
      explanation: {
        en: `A contra lowers both the customer's and the supplier's balance.
# Step 1: What should have been posted
  Dr Payables $2,500, Cr Receivables $2,500
# Step 2: What was posted
  Dr Payables $2,500, Cr Allowance for receivables $2,500
# Step 3: The fix
  Payables are right. Undo the credit to the allowance with a debit, and credit receivables
= Answer: Dr Allowance for receivables $2,500, Cr Receivables $2,500
! Common trap: $3,000 adds 20% tax. A contra only offsets balances that already include tax, so no new tax arises.`,
        ru: `Взаимозачёт уменьшает и долг покупателя, и долг поставщику.
# Шаг 1: Что надо было провести
  Дт Кредиторы $2,500, Кт Дебиторы $2,500
# Шаг 2: Что провели
  Дт Кредиторы $2,500, Кт Резерв по дебиторской задолженности $2,500
# Шаг 3: Исправление
  Кредиторы верны. Отменим кредит резерва дебетом и кредитуем дебиторов
= Ответ: Дт Резерв по дебиторской задолженности $2,500, Кт Дебиторы $2,500
! Частая ошибка: $3,000 добавляет налог 20%. Взаимозачёт только сводит остатки, в которых налог уже есть, нового налога нет.`,
        uz: `O'zaro hisob-kitob ham mijoz, ham yetkazib beruvchi qoldig'ini kamaytiradi.
# 1-qadam: Nima yozilishi kerak edi
  Dt Kreditorlar $2,500, Kt Debitorlar $2,500
# 2-qadam: Nima yozilgan
  Dt Kreditorlar $2,500, Kt Debitorlik rezervi $2,500
# 3-qadam: Tuzatish
  Kreditorlar to'g'ri. Rezervdagi kreditni debet bilan bekor qilib, debitorlarni kreditlaymiz
= Javob: Dt Debitorlik rezervi $2,500, Kt Debitorlar $2,500
! Ko'p uchraydigan xato: $3,000 20% soliq qo'shadi. O'zaro hisob-kitob soliq allaqachon kirgan qoldiqlarni yopadi, yangi soliq yo'q.`,
      },
      options: [
        'Dr Allowance for receivables $2,500, Cr Receivables $2,500',
        'Dr Receivables $2,500, Cr Allowance for receivables $2,500',
        'Dr Allowance for receivables $3,000, Cr Receivables $3,000',
        'Dr Receivables $3,000, Cr Allowance for receivables $3,000',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q354',
      kitRef: 354,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A purchase invoice for repairing a laptop was recorded as an addition to non-current assets. The repair cost $600, plus sales tax at 15%. The company is registered for sales tax. What journal corrects this?',
      explanation: {
        en: `A repair keeps an asset working; it does not improve it. So it is an expense.
# Step 1: What should have been posted
  Dr Repairs $600, Dr Sales tax $90, Cr Payables $690
# Step 2: What was posted
  Dr Non-current assets $600, Dr Sales tax $90, Cr Payables $690
  (The tax is recoverable, so it went to sales tax either way)
# Step 3: The fix
  Only $600 is in the wrong place. Move it from the asset to repairs
= Answer: Dr Repairs $600, Cr Non-current assets $600
! Common trap: $690 includes the tax, which was never in the asset account. The reversed options would make the error worse.`,
        ru: `Ремонт поддерживает актив в рабочем состоянии, но не улучшает его. Значит, это расход.
# Шаг 1: Что надо было провести
  Дт Ремонт $600, Дт Налог с продаж $90, Кт Кредиторы $690
# Шаг 2: Что провели
  Дт Внеоборотные активы $600, Дт Налог с продаж $90, Кт Кредиторы $690
  (Налог возмещаемый, поэтому в любом случае ушёл на налог с продаж)
# Шаг 3: Исправление
  Не на месте только $600. Переносим их из актива в ремонт
= Ответ: Дт Ремонт $600, Кт Внеоборотные активы $600
! Частая ошибка: $690 включает налог, которого на счёте актива не было. Перевёрнутые варианты усилят ошибку.`,
        uz: `Ta'mir aktivni ishlatib turadi, uni yaxshilamaydi. Demak, bu xarajat.
# 1-qadam: Nima yozilishi kerak edi
  Dt Ta'mir $600, Dt Sotuv solig'i $90, Kt Kreditorlar $690
# 2-qadam: Nima yozilgan
  Dt Uzoq muddatli aktivlar $600, Dt Sotuv solig'i $90, Kt Kreditorlar $690
  (Soliq qaytariladigan, shuning uchun har holda sotuv solig'iga ketgan)
# 3-qadam: Tuzatish
  Faqat $600 noto'g'ri joyda. Uni aktivdan ta'mirga ko'chiramiz
= Javob: Dt Ta'mir $600, Kt Uzoq muddatli aktivlar $600
! Ko'p uchraydigan xato: $690 soliqni o'z ichiga oladi, u aktiv hisobida bo'lmagan. Teskari variantlar xatoni kuchaytiradi.`,
      },
      options: [
        'Dr Non-current assets $690, Cr Repairs $690',
        'Dr Repairs $690, Cr Non-current assets $690',
        'Dr Repairs $600, Cr Non-current assets $600',
        'Dr Non-current assets $600, Cr Repairs $600',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch14-q355',
      kitRef: 355,
      topicId: 'chapter-14',
      type: 'single',
      text: 'When recording a sales invoice, a company entered the net amount as $1,200 instead of $120. It is registered for sales tax at 10%. What journal corrects this?',
      explanation: {
        en: `Work out how much each account is too high, then reduce it.
# Step 1: What was posted (net $1,200)
  Sales $1,200, tax 10% = $120, receivables $1,320
# Step 2: What should have been posted (net $120)
  Sales $120, tax $12, receivables $132
# Step 3: How much too high
  Sales: $1,200 - $120 = $1,080
  Sales tax: $120 - $12 = $108
  Receivables: $1,320 - $132 = $1,188
# Step 4: The fix
  Sales and sales tax are credit balances, so reduce them with debits
  Receivables is a debit balance, so reduce it with a credit
= Answer: Dr Sales $1,080, Dr Sales tax $108, Cr Receivables $1,188
! Common trap: leaving the tax in sales ($1,188 to sales), or making the error bigger with the reversed entry.`,
        ru: `Посчитаем, на сколько завышен каждый счёт, и уменьшим его.
# Шаг 1: Что провели (нетто $1,200)
  Продажи $1,200, налог 10% = $120, дебиторы $1,320
# Шаг 2: Что надо было провести (нетто $120)
  Продажи $120, налог $12, дебиторы $132
# Шаг 3: На сколько завышено
  Продажи: $1,200 - $120 = $1,080
  Налог с продаж: $120 - $12 = $108
  Дебиторы: $1,320 - $132 = $1,188
# Шаг 4: Исправление
  Продажи и налог — кредитовые остатки, уменьшаем их дебетом
  Дебиторы — дебетовый остаток, уменьшаем кредитом
= Ответ: Дт Продажи $1,080, Дт Налог с продаж $108, Кт Дебиторы $1,188
! Частая ошибка: оставить налог в продажах ($1,188 на продажи) или усилить ошибку обратной записью.`,
        uz: `Har bir hisob qanchaga ko'pligini topib, uni kamaytiramiz.
# 1-qadam: Nima yozilgan (sof $1,200)
  Sotuv $1,200, soliq 10% = $120, debitorlar $1,320
# 2-qadam: Nima yozilishi kerak edi (sof $120)
  Sotuv $120, soliq $12, debitorlar $132
# 3-qadam: Qanchaga ko'p
  Sotuv: $1,200 - $120 = $1,080
  Sotuv solig'i: $120 - $12 = $108
  Debitorlar: $1,320 - $132 = $1,188
# 4-qadam: Tuzatish
  Sotuv va soliq kredit qoldiqlar, ularni debet bilan kamaytiramiz
  Debitorlar debet qoldiq, uni kredit bilan kamaytiramiz
= Javob: Dt Sotuv $1,080, Dt Sotuv solig'i $108, Kt Debitorlar $1,188
! Ko'p uchraydigan xato: soliqni sotuvda qoldirish ($1,188 sotuvga) yoki teskari yozuv bilan xatoni kuchaytirish.`,
      },
      options: [
        'Dr Receivables $1,188, Cr Sales $1,188',
        'Dr Sales $1,188, Cr Receivables $1,188',
        'Dr Receivables $1,188, Cr Sales $1,080, Cr Sales tax $108',
        'Dr Sales $1,080, Dr Sales tax $108, Cr Receivables $1,188',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q356',
      kitRef: 356,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company made a credit sale of $600 plus sales tax at 40%, recorded correctly. The customer returned half the goods, and a credit note was issued. The receivables entry was right, but the same amount was posted to returns inwards. What journal corrects this?',
      explanation: {
        en: `Find the gross value of the return, then split it into net and tax.
# Step 1: The original sale
  Net $600 + tax 40% $240 = $840
# Step 2: Half returned
  Net $300 + tax $120 = $420
# Step 3: What should have been posted
  Dr Returns inwards $300, Dr Sales tax $120, Cr Receivables $420
# Step 4: What was posted
  Dr Returns inwards $420, Cr Receivables $420
# Step 5: The fix
  Returns inwards is $120 too high: credit it. The tax no longer owed: debit sales tax $120
= Answer: Dr Sales tax $120, Cr Returns inwards $120
! Common trap: $60 halves the tax a second time. The goods returned are $300 net, and 40% of $300 is $120.`,
        ru: `Найдём сумму возврата брутто и разделим на нетто и налог.
# Шаг 1: Исходная продажа
  Нетто $600 + налог 40% $240 = $840
# Шаг 2: Возвращена половина
  Нетто $300 + налог $120 = $420
# Шаг 3: Что надо было провести
  Дт Возвраты покупателей $300, Дт Налог с продаж $120, Кт Дебиторы $420
# Шаг 4: Что провели
  Дт Возвраты покупателей $420, Кт Дебиторы $420
# Шаг 5: Исправление
  Возвраты покупателей завышены на $120: кредитуем их. Налог больше не причитается: дебет налога $120
= Ответ: Дт Налог с продаж $120, Кт Возвраты покупателей $120
! Частая ошибка: $60 делит налог пополам второй раз. Возвращено товара на $300 нетто, 40% от $300 — это $120.`,
        uz: `Qaytarishning yalpi summasini topib, sof va soliqqa ajratamiz.
# 1-qadam: Dastlabki sotuv
  Sof $600 + soliq 40% $240 = $840
# 2-qadam: Yarmi qaytarilgan
  Sof $300 + soliq $120 = $420
# 3-qadam: Nima yozilishi kerak edi
  Dt Sotuv qaytarishlari $300, Dt Sotuv solig'i $120, Kt Debitorlar $420
# 4-qadam: Nima yozilgan
  Dt Sotuv qaytarishlari $420, Kt Debitorlar $420
# 5-qadam: Tuzatish
  Sotuv qaytarishlari $120 ko'p: kreditlaymiz. Soliq endi to'lanmaydi: sotuv solig'ini $120 debetlaymiz
= Javob: Dt Sotuv solig'i $120, Kt Sotuv qaytarishlari $120
! Ko'p uchraydigan xato: $60 soliqni ikkinchi marta yarmiga bo'ladi. Qaytarilgan tovar sof $300, $300 ning 40% i $120.`,
      },
      options: [
        'Dr Returns inwards $60, Cr Sales tax $60',
        'Dr Sales tax $120, Cr Returns inwards $120',
        'Dr Sales tax $60, Cr Returns inwards $60',
        'Dr Returns inwards $120, Cr Sales tax $120',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch14-q357',
      kitRef: 357,
      topicId: 'chapter-14',
      type: 'matrix',
      text: 'State whether each statement about suspense accounts is true or false.',
      explanation: {
        en: `Check each statement.
- A separate suspense account for each error: FALSE. One suspense account holds any number of items until each is cleared.
- Suspense can hold part of an entry while more information is found: TRUE. That is exactly what it is for.`,
        ru: `Проверим каждое утверждение.
- Отдельный счёт неясных сумм на каждую ошибку: НЕВЕРНО. Один такой счёт держит сколько угодно статей, пока каждую не разберут.
- Счёт неясных сумм может временно держать часть записи, пока уточняют данные: ВЕРНО. Именно для этого он и нужен.`,
        uz: `Har bir fikrni tekshiramiz.
- Har bir xato uchun alohida vaqtinchalik hisob: NOTO'G'RI. Bitta vaqtinchalik hisob har bir modda yopilguncha istalgancha moddani saqlaydi.
- Vaqtinchalik hisob ma'lumot aniqlanguncha yozuvning bir qismini saqlashi mumkin: TO'G'RI. U aynan shu uchun.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'A separate suspense account should be opened for each error in the general ledger',
          correctIndex: 1,
        },
        {
          text: 'A suspense account can be used to complete the recording of a transaction while more information is obtained',
          correctIndex: 0,
        },
      ],
    },
    {
      id: 'ch14-q358',
      kitRef: 358,
      topicId: 'chapter-14',
      type: 'single',
      text: 'An increase of $1,450 in the allowance for receivables was correctly recorded in the allowance account, but the other entry went to suspense. What entry clears suspense?',
      explanation: {
        en: `Ask which side was recorded correctly. The other side is sitting in suspense.
# Step 1: The right entry for an increase in the allowance
  Dr Irrecoverable debts expense $1,450, Cr Allowance for receivables $1,450
# Step 2: What was posted
  Cr Allowance $1,450 (right), Dr Suspense $1,450 (wrong)
# Step 3: Clear suspense
  Suspense holds a $1,450 debit: credit suspense and debit the expense
= Answer: Dr Irrecoverable debts expense $1,450, Cr Suspense $1,450
! Common trap: touching receivables. A change in the allowance never changes the receivables account itself.`,
        ru: `Спросим, какая сторона записана верно. Другая сторона лежит на счёте неясных сумм.
# Шаг 1: Правильная запись при увеличении резерва
  Дт Расход по безнадёжным долгам $1,450, Кт Резерв по дебиторской задолженности $1,450
# Шаг 2: Что провели
  Кт Резерв $1,450 (верно), Дт Неясные суммы $1,450 (неверно)
# Шаг 3: Закрываем неясные суммы
  Там дебет $1,450: кредитуем неясные суммы и дебетуем расход
= Ответ: Дт Расход по безнадёжным долгам $1,450, Кт Неясные суммы $1,450
! Частая ошибка: трогать дебиторов. Изменение резерва никогда не меняет сам счёт дебиторов.`,
        uz: `Qaysi tomon to'g'ri yozilganini so'raymiz. Ikkinchi tomon vaqtinchalik hisobda turibdi.
# 1-qadam: Rezerv oshishining to'g'ri yozuvi
  Dt Undirib bo'lmaydigan qarzlar xarajati $1,450, Kt Debitorlik rezervi $1,450
# 2-qadam: Nima yozilgan
  Kt Rezerv $1,450 (to'g'ri), Dt Vaqtinchalik $1,450 (noto'g'ri)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda $1,450 debet: vaqtinchalikni kreditlab, xarajatni debetlaymiz
= Javob: Dt Undirib bo'lmaydigan qarzlar xarajati $1,450, Kt Vaqtinchalik $1,450
! Ko'p uchraydigan xato: debitorlarga tegish. Rezerv o'zgarishi debitorlar hisobining o'zini hech qachon o'zgartirmaydi.`,
      },
      options: [
        'Dr Irrecoverable debts expense $1,450, Cr Suspense $1,450',
        'Dr Suspense $1,450, Cr Irrecoverable debts expense $1,450',
        'Dr Suspense $1,450, Cr Receivables $1,450',
        'Dr Receivables $1,450, Cr Suspense $1,450',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch14-q359',
      kitRef: 359,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A suspense balance of $6,200 relates to a payment to modify a machine so that it can make 400 units a week rather than 250. The bank entry was correct. What entry clears suspense?',
      explanation: {
        en: `First decide: repair or improvement? Then clear suspense.
# Step 1: What kind of spending
  The machine goes from 250 to 400 units a week: it is IMPROVED
  Improvement = capital expenditure, so it belongs in the asset's cost
# Step 2: What was posted
  Cr Bank $6,200 (right), Dr Suspense $6,200 (waiting)
# Step 3: Clear suspense
  Credit suspense, debit the asset's cost
= Answer: Dr Non-current assets - cost $6,200, Cr Suspense $6,200
! Common trap: calling it a repair. A repair only keeps the old output; more output means a better asset.`,
        ru: `Сначала решим: ремонт или улучшение? Потом закроем неясные суммы.
# Шаг 1: Вид затрат
  Станок делает 400 единиц в неделю вместо 250: он УЛУЧШЕН
  Улучшение = капитальные затраты, они входят в стоимость актива
# Шаг 2: Что провели
  Кт Банк $6,200 (верно), Дт Неясные суммы $6,200 (ожидает)
# Шаг 3: Закрываем неясные суммы
  Кредитуем неясные суммы, дебетуем стоимость актива
= Ответ: Дт Внеоборотные активы - стоимость $6,200, Кт Неясные суммы $6,200
! Частая ошибка: назвать это ремонтом. Ремонт лишь сохраняет прежний выпуск; больший выпуск — улучшенный актив.`,
        uz: `Avval hal qilamiz: ta'mirmi yoki yaxshilashmi? Keyin vaqtinchalik hisobni yopamiz.
# 1-qadam: Xarajat turi
  Dastgoh haftasiga 250 o'rniga 400 dona chiqaradi: u YAXSHILANGAN
  Yaxshilash = kapital xarajat, u aktiv tannarxiga kiradi
# 2-qadam: Nima yozilgan
  Kt Bank $6,200 (to'g'ri), Dt Vaqtinchalik $6,200 (kutmoqda)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Vaqtinchalikni kreditlab, aktiv tannarxini debetlaymiz
= Javob: Dt Uzoq muddatli aktivlar - tannarx $6,200, Kt Vaqtinchalik $6,200
! Ko'p uchraydigan xato: buni ta'mir deyish. Ta'mir faqat eski hajmni saqlaydi; ko'proq hajm — yaxshilangan aktiv.`,
      },
      options: [
        'Dr Suspense $6,200, Cr Machine repairs $6,200',
        'Dr Machine repairs $6,200, Cr Suspense $6,200',
        'Dr Non-current assets - cost $6,200, Cr Suspense $6,200',
        'Dr Suspense $6,200, Cr Non-current assets - cost $6,200',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch14-q360',
      kitRef: 360,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company issued 12,000 $1 equity shares at $3.50 each. The cash and the nominal value were recorded correctly, and the difference went to suspense. What entry clears suspense?',
      explanation: {
        en: `Work out the full entry for the share issue, then see what is missing.
# Step 1: The full entry
  Cash: 12,000 x $3.50 = $42,000 (debit)
  Share capital: 12,000 x $1 = $12,000 (credit)
  Share premium: $42,000 - $12,000 = $30,000 (credit)
# Step 2: What was posted
  Dr Cash $42,000, Cr Share capital $12,000, and the $30,000 credit went to suspense
# Step 3: Clear suspense
  Suspense holds a $30,000 credit: debit suspense, credit share premium
= Answer: Dr Suspense $30,000, Cr Share premium $30,000
! Common trap: $12,000 is the nominal value, already recorded. A revaluation surplus is for asset revaluations, not share issues.`,
        ru: `Составим полную запись выпуска акций и посмотрим, чего не хватает.
# Шаг 1: Полная запись
  Деньги: 12,000 x $3.50 = $42,000 (дебет)
  Акционерный капитал: 12,000 x $1 = $12,000 (кредит)
  Эмиссионный доход: $42,000 - $12,000 = $30,000 (кредит)
# Шаг 2: Что провели
  Дт Деньги $42,000, Кт Акционерный капитал $12,000, а кредит $30,000 ушёл в неясные суммы
# Шаг 3: Закрываем неясные суммы
  Там кредит $30,000: дебетуем неясные суммы, кредитуем эмиссионный доход
= Ответ: Дт Неясные суммы $30,000, Кт Эмиссионный доход $30,000
! Частая ошибка: $12,000 — номинал, он уже записан. Резерв переоценки — для переоценки активов, а не для выпуска акций.`,
        uz: `Aksiya chiqarishning to'liq yozuvini tuzib, nima yetishmasligini ko'ramiz.
# 1-qadam: To'liq yozuv
  Pul: 12,000 x $3.50 = $42,000 (debet)
  Ustav kapitali: 12,000 x $1 = $12,000 (kredit)
  Emissiya daromadi: $42,000 - $12,000 = $30,000 (kredit)
# 2-qadam: Nima yozilgan
  Dt Pul $42,000, Kt Ustav kapitali $12,000, $30,000 kredit esa vaqtinchalikka ketgan
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda $30,000 kredit: vaqtinchalikni debetlab, emissiya daromadini kreditlaymiz
= Javob: Dt Vaqtinchalik $30,000, Kt Emissiya daromadi $30,000
! Ko'p uchraydigan xato: $12,000 nominal, u allaqachon yozilgan. Qayta baholash rezervi aksiya chiqarish uchun emas, aktivlarni qayta baholash uchun.`,
      },
      options: [
        'Dr Share premium $30,000, Cr Suspense $30,000',
        'Dr Suspense $30,000, Cr Share premium $30,000',
        'Dr Suspense $30,000, Cr Revaluation surplus $30,000',
        'Dr Share premium $12,000, Cr Suspense $12,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch14-q361',
      kitRef: 361,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company unexpectedly received $1,650 from a customer whose debt was written off months ago. The cash was recorded correctly, and the other entry went to suspense. What entry clears suspense?',
      explanation: {
        en: `The debt was written off months ago, so it is no longer in receivables.
# Step 1: The right entry
  Dr Cash $1,650, Cr Irrecoverable debts $1,650
  (The money back reduces the irrecoverable debts expense)
# Step 2: What was posted
  Dr Cash $1,650 (right), Cr Suspense $1,650 (waiting)
# Step 3: Clear suspense
  Suspense holds a $1,650 credit: debit suspense, credit irrecoverable debts
= Answer: Dr Suspense $1,650, Cr Irrecoverable debts $1,650
! Common trap: crediting receivables. The customer's balance was removed when the debt was written off, so there is nothing there to reduce.`,
        ru: `Долг списали несколько месяцев назад, его больше нет среди дебиторов.
# Шаг 1: Правильная запись
  Дт Деньги $1,650, Кт Безнадёжные долги $1,650
  (Возврат денег уменьшает расход по безнадёжным долгам)
# Шаг 2: Что провели
  Дт Деньги $1,650 (верно), Кт Неясные суммы $1,650 (ожидает)
# Шаг 3: Закрываем неясные суммы
  Там кредит $1,650: дебетуем неясные суммы, кредитуем безнадёжные долги
= Ответ: Дт Неясные суммы $1,650, Кт Безнадёжные долги $1,650
! Частая ошибка: кредитовать дебиторов. Остаток покупателя убрали при списании долга, уменьшать там нечего.`,
        uz: `Qarz bir necha oy oldin hisobdan chiqarilgan, u endi debitorlarda yo'q.
# 1-qadam: To'g'ri yozuv
  Dt Pul $1,650, Kt Undirib bo'lmaydigan qarzlar $1,650
  (Qaytgan pul undirib bo'lmaydigan qarzlar xarajatini kamaytiradi)
# 2-qadam: Nima yozilgan
  Dt Pul $1,650 (to'g'ri), Kt Vaqtinchalik $1,650 (kutmoqda)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda $1,650 kredit: vaqtinchalikni debetlab, undirib bo'lmaydigan qarzlarni kreditlaymiz
= Javob: Dt Vaqtinchalik $1,650, Kt Undirib bo'lmaydigan qarzlar $1,650
! Ko'p uchraydigan xato: debitorlarni kreditlash. Qarz chiqarilganda mijoz qoldig'i olib tashlangan, u yerda kamaytiradigan narsa yo'q.`,
      },
      options: [
        'Dr Suspense $1,650, Cr Allowance for receivables $1,650',
        'Dr Allowance for receivables $1,650, Cr Suspense $1,650',
        'Dr Suspense $1,650, Cr Receivables $1,650',
        'Dr Suspense $1,650, Cr Irrecoverable debts $1,650',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q362',
      kitRef: 362,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A company transfers excess depreciation of $3,600 each year. The revaluation surplus entry was correct, but the other entry went to suspense. What entry clears suspense?',
      explanation: {
        en: `Excess depreciation is moved each year from the revaluation surplus to retained earnings, inside equity.
# Step 1: The right entry
  Dr Revaluation surplus $3,600, Cr Retained earnings $3,600
# Step 2: What was posted
  Dr Revaluation surplus $3,600 (right), Cr Suspense $3,600 (waiting)
# Step 3: Clear suspense
  Suspense holds a $3,600 credit: debit suspense, credit retained earnings
= Answer: Dr Suspense $3,600, Cr Retained earnings $3,600
! Common trap: crediting the depreciation expense or accumulated depreciation. The transfer does not change depreciation; it only moves an amount between two reserves.`,
        ru: `Избыточная амортизация каждый год переносится из резерва переоценки в нераспределённую прибыль, внутри капитала.
# Шаг 1: Правильная запись
  Дт Резерв переоценки $3,600, Кт Нераспределённая прибыль $3,600
# Шаг 2: Что провели
  Дт Резерв переоценки $3,600 (верно), Кт Неясные суммы $3,600 (ожидает)
# Шаг 3: Закрываем неясные суммы
  Там кредит $3,600: дебетуем неясные суммы, кредитуем нераспределённую прибыль
= Ответ: Дт Неясные суммы $3,600, Кт Нераспределённая прибыль $3,600
! Частая ошибка: кредитовать расход по амортизации или накопленную амортизацию. Перенос не меняет амортизацию, он лишь двигает сумму между двумя резервами.`,
        uz: `Ortiqcha amortizatsiya har yili qayta baholash rezervidan taqsimlanmagan foydaga, kapital ichida ko'chiriladi.
# 1-qadam: To'g'ri yozuv
  Dt Qayta baholash rezervi $3,600, Kt Taqsimlanmagan foyda $3,600
# 2-qadam: Nima yozilgan
  Dt Qayta baholash rezervi $3,600 (to'g'ri), Kt Vaqtinchalik $3,600 (kutmoqda)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda $3,600 kredit: vaqtinchalikni debetlab, taqsimlanmagan foydani kreditlaymiz
= Javob: Dt Vaqtinchalik $3,600, Kt Taqsimlanmagan foyda $3,600
! Ko'p uchraydigan xato: amortizatsiya xarajatini yoki jamg'arilgan amortizatsiyani kreditlash. Ko'chirish amortizatsiyani o'zgartirmaydi, faqat summani ikki rezerv orasida siljitadi.`,
      },
      options: [
        'Dr Suspense $3,600, Cr Depreciation expense $3,600',
        'Dr Suspense $3,600, Cr Accumulated depreciation $3,600',
        'Dr Suspense $3,600, Cr Retained earnings $3,600',
        'Dr Buildings $3,600, Cr Suspense $3,600',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch14-q363',
      kitRef: 363,
      topicId: 'chapter-14',
      type: 'matrix',
      text: 'State whether each statement about suspense accounts is true or false.',
      explanation: {
        en: `A suspense account is only needed when debits and credits do not match.
- Right amount, wrong accounts: FALSE. The debit and credit are still equal, so a normal correcting journal fixes it.
- Removing a duplicated transaction: FALSE. The duplicate has equal debits and credits too, so reverse it with a normal journal.`,
        ru: `Счёт неясных сумм нужен только тогда, когда дебеты и кредиты не сходятся.
- Верная сумма, не те счета: НЕВЕРНО. Дебет и кредит всё равно равны, поэтому хватает обычной исправительной проводки.
- Удаление задвоенной операции: НЕВЕРНО. У дубля дебет и кредит тоже равны, его отменяют обычной проводкой.`,
        uz: `Vaqtinchalik hisob faqat debet va kreditlar mos kelmaganda kerak.
- To'g'ri summa, noto'g'ri hisoblar: NOTO'G'RI. Debet va kredit baribir teng, oddiy tuzatuvchi yozuv yetarli.
- Takrorlangan operatsiyani olib tashlash: NOTO'G'RI. Takrorda ham debet va kredit teng, uni oddiy yozuv bilan bekor qilinadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'A suspense account must be opened to correct a transaction posted at the right amount but to the wrong accounts',
          correctIndex: 1,
        },
        {
          text: 'A suspense account must be opened to remove a duplicated transaction from the general ledger',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch14-q364',
      kitRef: 364,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A suspense balance of $310 relates to a settlement discount on early payment to a supplier. The payables entry was recorded correctly. What entry clears suspense?',
      explanation: {
        en: `Ask which side was recorded correctly. The other side is sitting in suspense.
# Step 1: The right entry for a discount received
  Dr Payables $310, Cr Discount received $310
# Step 2: What was posted
  Dr Payables $310 (right), Cr Suspense $310 (waiting)
# Step 3: Clear suspense
  Suspense holds a credit: debit suspense, credit discount received
= Answer: Dr Suspense, Cr Discount received
! Common trap: using sales. A discount RECEIVED from a supplier is income of its own, not a sale.`,
        ru: `Спросим, какая сторона записана верно. Другая лежит на счёте неясных сумм.
# Шаг 1: Правильная запись полученной скидки
  Дт Кредиторы $310, Кт Полученная скидка $310
# Шаг 2: Что провели
  Дт Кредиторы $310 (верно), Кт Неясные суммы $310 (ожидает)
# Шаг 3: Закрываем неясные суммы
  Там кредит: дебетуем неясные суммы, кредитуем полученную скидку
= Ответ: Дт Неясные суммы, Кт Полученная скидка
! Частая ошибка: использовать продажи. ПОЛУЧЕННАЯ от поставщика скидка — отдельный доход, а не продажа.`,
        uz: `Qaysi tomon to'g'ri yozilganini so'raymiz. Ikkinchisi vaqtinchalik hisobda turibdi.
# 1-qadam: Olingan chegirmaning to'g'ri yozuvi
  Dt Kreditorlar $310, Kt Olingan chegirma $310
# 2-qadam: Nima yozilgan
  Dt Kreditorlar $310 (to'g'ri), Kt Vaqtinchalik $310 (kutmoqda)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda kredit: vaqtinchalikni debetlab, olingan chegirmani kreditlaymiz
= Javob: Dt Vaqtinchalik, Kt Olingan chegirma
! Ko'p uchraydigan xato: sotuvdan foydalanish. Yetkazib beruvchidan OLINGAN chegirma alohida daromad, sotuv emas.`,
      },
      options: [
        'Dr Discount received, Cr Suspense',
        'Dr Suspense, Cr Sales',
        'Dr Sales, Cr Suspense',
        'Dr Suspense, Cr Discount received',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q365',
      kitRef: 365,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A bookkeeper is writing off an irrecoverable debt. The debit has gone to the irrecoverable debts expense, and the credit was posted to suspense for now. Which account should have been credited?',
      explanation: {
        en: `Writing off a debt removes it from what the customer owes.
- Receivables: RIGHT. Dr Irrecoverable debts expense, Cr Receivables takes the debt off the customer's balance.
- Bank: WRONG. No money moves when a debt is written off.
- Sales: WRONG. The sale really happened; the loss is shown as an expense, not by cutting sales.
- Allowance for receivables: WRONG. That account is for debts that MIGHT not be paid; this one is known to be lost.
= Answer: Receivables`,
        ru: `Списание долга убирает его из того, что должен покупатель.
- Дебиторы: ВЕРНО. Дт Расход по безнадёжным долгам, Кт Дебиторы убирает долг с остатка покупателя.
- Банк: НЕВЕРНО. При списании долга деньги не двигаются.
- Продажи: НЕВЕРНО. Продажа действительно была; потеря показывается как расход, а не уменьшением продаж.
- Резерв по дебиторской задолженности: НЕВЕРНО. Он для долгов, которые МОГУТ не вернуть; этот уже точно потерян.
= Ответ: Дебиторы`,
        uz: `Qarzni hisobdan chiqarish uni mijoz qarzidan olib tashlaydi.
- Debitorlar: TO'G'RI. Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Debitorlar qarzni mijoz qoldig'idan olib tashlaydi.
- Bank: NOTO'G'RI. Qarz chiqarilganda pul harakatlanmaydi.
- Sotuv: NOTO'G'RI. Sotuv haqiqatan bo'lgan; yo'qotish sotuvni kamaytirish bilan emas, xarajat sifatida ko'rsatiladi.
- Debitorlik rezervi: NOTO'G'RI. U to'lanMASLIGI MUMKIN bo'lgan qarzlar uchun; bu qarz aniq yo'qolgan.
= Javob: Debitorlar`,
      },
      options: ['Receivables', 'Bank', 'Sales', 'Allowance for receivables'],
      correctIndex: 0,
    },
    {
      id: 'ch14-q366',
      kitRef: 366,
      topicId: 'chapter-14',
      type: 'single',
      text: 'Discount received was properly recorded in the payables account, and the other entry went to suspense. What entries clear suspense and record the transaction correctly?',
      explanation: {
        en: `Ask which side was recorded correctly. The other side is sitting in suspense.
# Step 1: The right entry
  Dr Payables, Cr Discount received
# Step 2: What was posted
  Dr Payables (right), Cr Suspense (waiting)
# Step 3: Clear suspense
  Suspense holds a credit: debit suspense, credit discount received
= Answer: Dr Suspense, Cr Discount received
! Common trap: debiting discount received. That would turn the income into a cost and leave suspense twice as wrong.`,
        ru: `Спросим, какая сторона записана верно. Другая лежит на счёте неясных сумм.
# Шаг 1: Правильная запись
  Дт Кредиторы, Кт Полученная скидка
# Шаг 2: Что провели
  Дт Кредиторы (верно), Кт Неясные суммы (ожидает)
# Шаг 3: Закрываем неясные суммы
  Там кредит: дебетуем неясные суммы, кредитуем полученную скидку
= Ответ: Дт Неясные суммы, Кт Полученная скидка
! Частая ошибка: дебетовать полученную скидку. Это превратит доход в расход, а ошибка в неясных суммах удвоится.`,
        uz: `Qaysi tomon to'g'ri yozilganini so'raymiz. Ikkinchisi vaqtinchalik hisobda turibdi.
# 1-qadam: To'g'ri yozuv
  Dt Kreditorlar, Kt Olingan chegirma
# 2-qadam: Nima yozilgan
  Dt Kreditorlar (to'g'ri), Kt Vaqtinchalik (kutmoqda)
# 3-qadam: Vaqtinchalik hisobni yopamiz
  Unda kredit: vaqtinchalikni debetlab, olingan chegirmani kreditlaymiz
= Javob: Dt Vaqtinchalik, Kt Olingan chegirma
! Ko'p uchraydigan xato: olingan chegirmani debetlash. Bu daromadni xarajatga aylantiradi, vaqtinchalikdagi xato esa ikki baravar bo'ladi.`,
      },
      options: [
        'Dr Discount received, Cr Suspense',
        'Dr Suspense, Cr Purchases',
        'Dr Receivables, Cr Suspense',
        'Dr Suspense, Cr Discount received',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch14-q367',
      kitRef: 367,
      topicId: 'chapter-14',
      type: 'single',
      text: 'A business has a debit balance of $360 on its suspense account. Which TWO errors could, on their own, explain this? (1) Rent paid of $180 credited to the rent account, but correctly recorded in cash. (2) Interest paid of $360 left out of the trial balance. (3) Cash sales of $180 debited to sales, but correctly recorded in cash. (4) A $360 invoice for materials debited to wages, but correctly recorded in payables.',
      explanation: {
        en: `A DEBIT balance on suspense means the credits in the ledger were bigger than the debits, so suspense was debited to fill the gap. Test each error.
# Error 1: rent paid $180 credited to rent, cash credited correctly
  Two credits of $180, no debit: credits are $360 too big
  Suspense needs a $360 DEBIT. Fits
# Error 2: interest paid $360 left out of the trial balance
  A $360 debit balance is missing: credits are $360 bigger
  Suspense needs a $360 DEBIT. Fits
# Error 3: cash sales $180 debited to sales, cash debited correctly
  Two debits of $180: debits are $360 too big
  Suspense needs a $360 CREDIT. Does not fit
# Error 4: materials debited to wages, payables right
  Equal debit and credit, just the wrong account: no suspense at all
= Answer: 1 and 2
! Common trap: choosing error 3. It is the mirror of error 1, so it gives a CREDIT balance on suspense.`,
        ru: `ДЕБЕТОВЫЙ остаток на счёте неясных сумм значит, что кредиты в книге больше дебетов, и разницу закрыли дебетом. Проверим каждую ошибку.
# Ошибка 1: аренда $180 записана в кредит аренды, касса — верно в кредит
  Два кредита по $180 и нет дебета: кредиты больше на $360
  Нужен ДЕБЕТ $360 на неясных суммах. Подходит
# Ошибка 2: уплаченные проценты $360 не попали в ведомость
  Не хватает дебетового остатка $360: кредиты больше на $360
  Нужен ДЕБЕТ $360 на неясных суммах. Подходит
# Ошибка 3: наличные продажи $180 в дебет продаж, касса — верно в дебет
  Два дебета по $180: дебеты больше на $360
  Нужен КРЕДИТ $360 на неясных суммах. Не подходит
# Ошибка 4: материалы в дебет зарплаты, кредиторы верно
  Дебет и кредит равны, просто не тот счёт: неясные суммы не нужны
= Ответ: 1 и 2
! Частая ошибка: выбрать ошибку 3. Это зеркало ошибки 1, она даёт КРЕДИТОВЫЙ остаток.`,
        uz: `Vaqtinchalik hisobdagi DEBET qoldiq kitobda kreditlar debetlardan ko'p ekanini bildiradi, farq debet bilan yopilgan. Har bir xatoni tekshiramiz.
# 1-xato: to'langan $180 ijara ijaraga kredit qilingan, kassa to'g'ri kreditlangan
  $180 dan ikki kredit, debet yo'q: kreditlar $360 ko'p
  Vaqtinchalikda $360 DEBET kerak. Mos
# 2-xato: to'langan $360 foiz sinov balansiga kirmagan
  $360 debet qoldiq yetishmaydi: kreditlar $360 ko'p
  Vaqtinchalikda $360 DEBET kerak. Mos
# 3-xato: $180 naqd sotuv sotuvga debet qilingan, kassa to'g'ri debetlangan
  $180 dan ikki debet: debetlar $360 ko'p
  Vaqtinchalikda $360 KREDIT kerak. Mos emas
# 4-xato: materiallar ish haqiga debetlangan, kreditorlar to'g'ri
  Debet va kredit teng, faqat hisob boshqa: vaqtinchalik kerak emas
= Javob: 1 va 2
! Ko'p uchraydigan xato: 3-xatoni tanlash. U 1-xatoning ko'zgusi, vaqtinchalikda KREDIT qoldiq beradi.`,
      },
      options: ['1 and 2', '1 and 4', '2 and 3', '3 and 4'],
      correctIndex: 0,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
