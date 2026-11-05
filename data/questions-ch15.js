'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-15';
  const questions = [
    {
      id: 'ch15-q368',
      kitRef: 368,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A sole trader had net assets of $22,000 at 30 April 20X7. In the year to that date the trader introduced $11,200 of capital, made a profit of $9,500 and withdrew $4,700. What was the capital balance at 1 May 20X6?',
      explanation: {
        en: `Capital = net assets. Work backwards from the closing figure.
# Step 1: The capital line
  Opening capital + capital introduced + profit - drawings = closing capital
# Step 2: Undo each movement from the closing $22,000
  Take off the capital introduced: - $11,200
  Take off the profit: - $9,500
  Put back the drawings: + $4,700
# Step 3: Opening capital
  $22,000 - $11,200 - $9,500 + $4,700 = $6,000
= Answer: $6,000
! Common trap: getting a sign wrong. $15,500 forgets the profit; $17,200 forgets the new capital; $38,000 works forwards instead of backwards.`,
        ru: `Капитал = чистые активы. Идём назад от конечной цифры.
# Шаг 1: Строка капитала
  Начальный капитал + внесённый капитал + прибыль - изъятия = конечный капитал
# Шаг 2: Отменяем каждое движение от конечных $22,000
  Убираем внесённый капитал: - $11,200
  Убираем прибыль: - $9,500
  Возвращаем изъятия: + $4,700
# Шаг 3: Начальный капитал
  $22,000 - $11,200 - $9,500 + $4,700 = $6,000
= Ответ: $6,000
! Частая ошибка: перепутать знак. $15,500 забывает прибыль; $17,200 забывает новый капитал; $38,000 считает вперёд, а не назад.`,
        uz: `Kapital = sof aktivlar. Yakuniy sondan orqaga yuramiz.
# 1-qadam: Kapital qatori
  Boshlang'ich kapital + kiritilgan kapital + foyda - olib qo'yishlar = yakuniy kapital
# 2-qadam: Yakuniy $22,000 dan har bir harakatni bekor qilamiz
  Kiritilgan kapitalni olib tashlaymiz: - $11,200
  Foydani olib tashlaymiz: - $9,500
  Olib qo'yishlarni qaytaramiz: + $4,700
# 3-qadam: Boshlang'ich kapital
  $22,000 - $11,200 - $9,500 + $4,700 = $6,000
= Javob: $6,000
! Ko'p uchraydigan xato: ishorani adashtirish. $15,500 foydani unutadi; $17,200 yangi kapitalni unutadi; $38,000 orqaga emas, oldinga hisoblaydi.`,
      },
      options: ['$6,000', '$15,500', '$17,200', '$38,000'],
      correctIndex: 0,
    },
    {
      id: 'ch15-q369',
      kitRef: 369,
      topicId: 'chapter-15',
      type: 'multi',
      text: 'Which TWO of these are advantages of a bonus issue of shares?',
      explanation: {
        en: `A bonus issue gives existing shareholders free new shares, paid for out of reserves. No cash comes in.
- Cheapest way to raise finance: WRONG. It raises no finance at all.
- Makes the shares more marketable: RIGHT. More shares means a lower price per share, which is easier to trade.
- Retained earnings and other equity increase: WRONG. Reserves are used up, so they fall.
- Brings share capital more into line with assets employed: RIGHT. Reserves become share capital.
= Answer: more marketable shares, and share capital closer to the assets employed`,
        ru: `Бонусная эмиссия даёт акционерам бесплатные новые акции за счёт резервов. Денег не поступает.
- Самый дешёвый способ привлечь финансирование: НЕВЕРНО. Она вообще не привлекает денег.
- Делает акции более ликвидными: ВЕРНО. Больше акций — ниже цена одной, её легче продать.
- Нераспределённая прибыль и прочий капитал растут: НЕВЕРНО. Резервы расходуются, значит уменьшаются.
- Приближает акционерный капитал к используемым активам: ВЕРНО. Резервы превращаются в акционерный капитал.
= Ответ: акции ликвиднее, и акционерный капитал ближе к используемым активам`,
        uz: `Bonus emissiya aksiyadorlarga zaxiralar hisobidan bepul yangi aksiyalar beradi. Pul kirmaydi.
- Moliya jalb qilishning eng arzon yo'li: NOTO'G'RI. U umuman pul jalb qilmaydi.
- Aksiyalarni sotishga qulayroq qiladi: TO'G'RI. Aksiya ko'p bo'lsa, bittasining narxi past, uni sotish oson.
- Taqsimlanmagan foyda va boshqa kapital oshadi: NOTO'G'RI. Rezervlar ishlatiladi, demak kamayadi.
- Ustav kapitalini ishlatilayotgan aktivlarga yaqinlashtiradi: TO'G'RI. Rezervlar ustav kapitaliga aylanadi.
= Javob: aksiyalar sotishga qulayroq va ustav kapitali ishlatilayotgan aktivlarga yaqinroq`,
      },
      options: [
        'It is the cheapest way to raise finance through issuing shares',
        'It makes the company\'s shares more marketable',
        'The total of retained earnings and other components of equity will increase',
        'Share capital is brought more into line with the assets employed',
      ],
      correctIndices: [1, 3],
    },
    {
      id: 'ch15-q370',
      kitRef: 370,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A hairdresser\'s records for the year show: expenses $8,300; opening inventory $1,800; closing inventory $1,100; purchases $14,200; gross profit $13,000; inventory taken as drawings $90. What was revenue?',
      explanation: {
        en: `Revenue = cost of sales + gross profit. So find cost of sales first.
# Step 1: Cost of sales
  Opening inventory $1,800 + purchases $14,200
  - goods the owner took $90 (they were not sold, so they are not a cost of sales)
  - closing inventory $1,100
  = $14,810
# Step 2: Revenue
  $14,810 + gross profit $13,000 = $27,810
  (Expenses of $8,300 come after gross profit, so they are not used)
= Answer: $27,810
! Common trap: $27,900 ignores the drawings; $27,990 adds them instead; $36,110 wrongly adds the expenses.`,
        ru: `Выручка = себестоимость + валовая прибыль. Сначала найдём себестоимость.
# Шаг 1: Себестоимость
  Запасы на начало $1,800 + закупки $14,200
  - товар, взятый владельцем $90 (он не продан, значит не себестоимость)
  - запасы на конец $1,100
  = $14,810
# Шаг 2: Выручка
  $14,810 + валовая прибыль $13,000 = $27,810
  (Расходы $8,300 идут после валовой прибыли, их не используем)
= Ответ: $27,810
! Частая ошибка: $27,900 не учитывает изъятия; $27,990 прибавляет их; $36,110 ошибочно прибавляет расходы.`,
        uz: `Tushum = tannarx + yalpi foyda. Avval tannarxni topamiz.
# 1-qadam: Tannarx
  Boshlang'ich zaxira $1,800 + xaridlar $14,200
  - egasi olgan tovar $90 (u sotilmagan, demak tannarx emas)
  - yakuniy zaxira $1,100
  = $14,810
# 2-qadam: Tushum
  $14,810 + yalpi foyda $13,000 = $27,810
  ($8,300 xarajatlar yalpi foydadan keyin keladi, ular ishlatilmaydi)
= Javob: $27,810
! Ko'p uchraydigan xato: $27,900 olib qo'yishni hisobga olmaydi; $27,990 ularni qo'shadi; $36,110 xarajatlarni xato qo'shadi.`,
      },
      options: ['$27,810', '$27,900', '$27,990', '$36,110'],
      correctIndex: 0,
    },
    {
      id: 'ch15-q371',
      kitRef: 371,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company\'s trial balance includes a debit balance of $600 on income tax. It estimates income tax payable for the year at $9,000. What amounts go in the financial statements?',
      explanation: {
        en: `A DEBIT left on the tax account means last year's tax was underestimated (an underprovision).
# Step 1: Tax expense in profit or loss
  This year's estimate $9,000 + last year's shortfall $600 = $9,600
# Step 2: Tax liability in the statement of financial position
  Only what is owed for THIS year: $9,000
= Answer: profit or loss $9,600; financial position $9,000
! Common trap: subtracting the $600 ($8,400), or adding it to the liability. Last year's tax has already been settled.`,
        ru: `ДЕБЕТ на счёте налога значит, что налог прошлого года недооценили (недоначисление).
# Шаг 1: Расход по налогу в прибыли или убытке
  Оценка этого года $9,000 + недостача прошлого года $600 = $9,600
# Шаг 2: Обязательство по налогу в отчёте о финансовом положении
  Только долг за ЭТОТ год: $9,000
= Ответ: прибыль или убыток $9,600; финансовое положение $9,000
! Частая ошибка: вычесть $600 ($8,400) или прибавить их к обязательству. Налог прошлого года уже уплачен.`,
        uz: `Soliq hisobidagi DEBET o'tgan yil solig'i kam baholanganini bildiradi (kam hisoblangan).
# 1-qadam: Foyda yoki zarardagi soliq xarajati
  Bu yil bahosi $9,000 + o'tgan yil kamomadi $600 = $9,600
# 2-qadam: Moliyaviy holat hisobotidagi soliq majburiyati
  Faqat SHU yil uchun qarz: $9,000
= Javob: foyda yoki zarar $9,600; moliyaviy holat $9,000
! Ko'p uchraydigan xato: $600 ni ayirish ($8,400) yoki majburiyatga qo'shish. O'tgan yil solig'i allaqachon to'langan.`,
      },
      options: [
        'Profit or loss $9,000; financial position $9,000',
        'Profit or loss $9,600; financial position $9,000',
        'Profit or loss $8,400; financial position $9,600',
        'Profit or loss $9,000; financial position $8,400',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q372',
      kitRef: 372,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which of these would change the capital of a business?',
      explanation: {
        en: `Capital = net assets (assets - liabilities). Capital only changes if net assets change.
- Raw materials on credit: inventory up, payables up by the same. No change.
- Wages paid in cash: cash down, nothing received in return. Capital FALLS.
- Non-current assets on credit: asset up, payables up by the same. No change.
- Bank payment to a supplier: bank down, payables down by the same. No change.
= Answer: paying wages in cash`,
        ru: `Капитал = чистые активы (активы - обязательства). Капитал меняется, только если меняются чистые активы.
- Сырьё в кредит: запасы растут, кредиторы растут на ту же сумму. Без изменений.
- Зарплата наличными: деньги уходят, взамен ничего. Капитал ПАДАЕТ.
- Внеоборотные активы в кредит: актив растёт, кредиторы растут на ту же сумму. Без изменений.
- Оплата поставщику через банк: банк уменьшается, кредиторы уменьшаются на ту же сумму. Без изменений.
= Ответ: выплата зарплаты наличными`,
        uz: `Kapital = sof aktivlar (aktivlar - majburiyatlar). Kapital faqat sof aktivlar o'zgarganda o'zgaradi.
- Kreditga xom ashyo: zaxira oshadi, kreditorlar ham shuncha oshadi. O'zgarishsiz.
- Naqd ish haqi: pul chiqadi, evaziga hech narsa yo'q. Kapital KAMAYADI.
- Kreditga uzoq muddatli aktivlar: aktiv oshadi, kreditorlar ham shuncha oshadi. O'zgarishsiz.
- Yetkazib beruvchiga bank to'lovi: bank kamayadi, kreditorlar ham shuncha kamayadi. O'zgarishsiz.
= Javob: ish haqini naqd to'lash`,
      },
      options: [
        'Buying raw materials on credit',
        'Paying wages in cash',
        'Buying non-current assets on credit',
        'Making a bank payment to a supplier',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q373',
      kitRef: 373,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A draft statement of financial position shows a loan repayable 14 months after the reporting date within trade payables. What will the correction do?',
      explanation: {
        en: `Net current assets = current assets - current liabilities.
# Step 1: Where the loan belongs
  Due in 14 months, which is more than 12: NON-current liability
# Step 2: Effect of moving it out of trade payables
  Current liabilities go DOWN
  Current assets do not change
# Step 3: Net current assets
  Less is taken off current assets, so net current assets go UP
= Answer: increase net current assets
! Common trap: thinking current assets change. Only the liability side moves.`,
        ru: `Чистые оборотные активы = оборотные активы - краткосрочные обязательства.
# Шаг 1: Куда относится заём
  Срок через 14 месяцев, больше 12: ДОЛГОСРОЧНОЕ обязательство
# Шаг 2: Эффект переноса из торговых кредиторов
  Краткосрочные обязательства УМЕНЬШАЮТСЯ
  Оборотные активы не меняются
# Шаг 3: Чистые оборотные активы
  Из оборотных активов вычитаем меньше, значит чистые оборотные активы РАСТУТ
= Ответ: увеличит чистые оборотные активы
! Частая ошибка: думать, что меняются оборотные активы. Движется только сторона обязательств.`,
        uz: `Sof aylanma aktivlar = aylanma aktivlar - qisqa muddatli majburiyatlar.
# 1-qadam: Qarz qayerga tegishli
  14 oydan keyin, 12 dan ko'p: UZOQ muddatli majburiyat
# 2-qadam: Savdo kreditorlaridan ko'chirish ta'siri
  Qisqa muddatli majburiyatlar KAMAYADI
  Aylanma aktivlar o'zgarmaydi
# 3-qadam: Sof aylanma aktivlar
  Aylanma aktivlardan kamroq ayiriladi, demak sof aylanma aktivlar OSHADI
= Javob: sof aylanma aktivlarni oshiradi
! Ko'p uchraydigan xato: aylanma aktivlar o'zgaradi deb o'ylash. Faqat majburiyat tomoni siljiydi.`,
      },
      options: [
        'Have no effect on net current assets',
        'Increase net current assets',
        'Reduce net current assets',
        'Increase current assets but reduce net current assets',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q374',
      kitRef: 374,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which formula gives the profit of a business?',
      explanation: {
        en: `Profit is the growth in capital that came from trading, not from the owner.
# Step 1: How much capital grew
  Closing capital - opening capital
# Step 2: Put back what the owner took out
  + drawings (they lowered capital but were not a loss)
# Step 3: Remove what the owner put in
  - capital introduced (it raised capital but was not profit)
= Answer: closing capital + drawings - capital introduced - opening capital
! Common trap: the option with "- drawings + capital introduced" has both signs the wrong way round.`,
        ru: `Прибыль — рост капитала за счёт торговли, а не за счёт владельца.
# Шаг 1: Насколько вырос капитал
  Конечный капитал - начальный капитал
# Шаг 2: Вернём то, что владелец забрал
  + изъятия (они уменьшили капитал, но это не убыток)
# Шаг 3: Уберём то, что владелец вложил
  - внесённый капитал (он увеличил капитал, но это не прибыль)
= Ответ: конечный капитал + изъятия - внесённый капитал - начальный капитал
! Частая ошибка: вариант с «- изъятия + внесённый капитал» путает оба знака.`,
        uz: `Foyda — kapitalning egasi hisobidan emas, savdo hisobidan o'sishi.
# 1-qadam: Kapital qancha o'sgan
  Yakuniy kapital - boshlang'ich kapital
# 2-qadam: Egasi olganini qaytaramiz
  + olib qo'yishlar (ular kapitalni kamaytirgan, lekin zarar emas)
# 3-qadam: Egasi kiritganini olib tashlaymiz
  - kiritilgan kapital (u kapitalni oshirgan, lekin foyda emas)
= Javob: yakuniy kapital + olib qo'yishlar - kiritilgan kapital - boshlang'ich kapital
! Ko'p uchraydigan xato: «- olib qo'yishlar + kiritilgan kapital» varianti ikkala ishorani teskari oladi.`,
      },
      options: [
        'Opening capital - drawings + capital introduced - closing capital',
        'Opening capital + drawings - capital introduced - closing capital',
        'Closing capital - drawings + capital introduced - opening capital',
        'Closing capital + drawings - capital introduced - opening capital',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q375',
      kitRef: 375,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which concept requires goods taken from inventory by the owner to be treated as drawings?',
      explanation: {
        en: `The accounts are about the BUSINESS, not the owner as a person.
- Prudence: WRONG. That is about not overstating assets or profit.
- Separate entity: RIGHT. Goods the owner takes home have left the business, so they are drawings.
- Accruals: WRONG. That is about matching income and costs to the right period.
- Substance over form: WRONG. That is about recording the real economic effect over the legal form.
= Answer: separate entity`,
        ru: `Отчётность — о БИЗНЕСЕ, а не о владельце как человеке.
- Осмотрительность: НЕВЕРНО. Это о том, чтобы не завышать активы или прибыль.
- Обособленность бизнеса: ВЕРНО. Товар, который владелец унёс домой, покинул бизнес, значит это изъятия.
- Начисление: НЕВЕРНО. Это об отнесении доходов и расходов к правильному периоду.
- Приоритет содержания над формой: НЕВЕРНО. Это о записи реального экономического эффекта, а не юридической формы.
= Ответ: обособленность бизнеса`,
        uz: `Hisobot egasi haqida emas, BIZNES haqida.
- Ehtiyotkorlik: NOTO'G'RI. Bu aktiv yoki foydani oshirib ko'rsatmaslik haqida.
- Biznesning alohidaligi: TO'G'RI. Egasi uyga olib ketgan tovar biznesdan chiqqan, demak bu olib qo'yish.
- Hisoblash: NOTO'G'RI. Bu daromad va xarajatlarni to'g'ri davrga bog'lash haqida.
- Mazmunning shakldan ustunligi: NOTO'G'RI. Bu huquqiy shakl emas, haqiqiy iqtisodiy ta'sirni yozish haqida.
= Javob: biznesning alohidaligi`,
      },
      options: ['Prudence', 'Separate entity', 'Accruals', 'Substance over form'],
      correctIndex: 1,
    },
    {
      id: 'ch15-q376',
      kitRef: 376,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A company had a revaluation surplus of $85,000 on land and buildings in the year. Depreciation on buildings was $24,000, and it does not transfer excess depreciation. There was also a $1,200 gain on disposal of vehicles. What is included in other comprehensive income?',
      explanation: {
        en: `Other comprehensive income holds only gains that are "on paper", mainly revaluations.
# Sort each item
  Revaluation surplus $85,000: not realised, OTHER COMPREHENSIVE INCOME
  Depreciation $24,000: an expense, PROFIT OR LOSS
  Gain on selling vehicles $1,200: realised, PROFIT OR LOSS
= Answer: $85,000
! Common trap: deducting depreciation ($61,000) or adding the disposal gain ($86,200). Both belong in profit or loss.`,
        ru: `Прочий совокупный доход содержит только доходы «на бумаге», в основном переоценку.
# Распределим статьи
  Резерв переоценки $85,000: не реализован, ПРОЧИЙ СОВОКУПНЫЙ ДОХОД
  Амортизация $24,000: расход, ПРИБЫЛЬ ИЛИ УБЫТОК
  Прибыль от продажи автомобилей $1,200: реализована, ПРИБЫЛЬ ИЛИ УБЫТОК
= Ответ: $85,000
! Частая ошибка: вычесть амортизацию ($61,000) или прибавить прибыль от выбытия ($86,200). Обе идут в прибыль или убыток.`,
        uz: `Boshqa umumlashgan daromad faqat «qog'ozdagi» daromadlarni, asosan qayta baholashni saqlaydi.
# Har bir moddani ajratamiz
  Qayta baholash rezervi $85,000: amalga oshmagan, BOSHQA UMUMLASHGAN DAROMAD
  Amortizatsiya $24,000: xarajat, FOYDA YOKI ZARAR
  Transport sotishdan foyda $1,200: amalga oshgan, FOYDA YOKI ZARAR
= Javob: $85,000
! Ko'p uchraydigan xato: amortizatsiyani ayirish ($61,000) yoki chiqib ketish foydasini qo'shish ($86,200). Ikkalasi foyda yoki zararga tegishli.`,
      },
      correctValue: 85000,
      answerText: '$85,000',
    },
    {
      id: 'ch15-q377',
      kitRef: 377,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Use the details below at 30 September 20X6. The loan is repayable in four equal annual instalments starting on 1 January 20X7. What are current assets and current liabilities?',
      explanation: {
        en: `Sort every balance, then add up each group.
# Step 1: Current assets
  Receivables $26,400 - allowance $1,700 = $24,700
  + inventory $13,900 + petty cash $170
  = $38,770
  (The van and its depreciation are non-current.)
# Step 2: Current liabilities
  A DEBIT on the BANK'S statement means the business owes the bank: overdraft $3,600
  Payables $34,200 + rent due $1,300
  First loan instalment due 1 January: $120,000 / 4 = $30,000
  $3,600 + $34,200 + $1,300 + $30,000 = $69,100
= Answer: current assets $38,770; current liabilities $69,100
! Common trap: treating the $3,600 as cash ($42,370 of assets) or leaving out the loan instalment ($39,100).`,
        ru: `Распределим все остатки и сложим каждую группу.
# Шаг 1: Оборотные активы
  Дебиторы $26,400 - резерв $1,700 = $24,700
  + запасы $13,900 + мелкая касса $170
  = $38,770
  (Фургон и его амортизация — внеоборотные.)
# Шаг 2: Краткосрочные обязательства
  ДЕБЕТ в выписке БАНКА значит, что бизнес должен банку: овердрафт $3,600
  Кредиторы $34,200 + аренда к оплате $1,300
  Первый платёж по займу 1 января: $120,000 / 4 = $30,000
  $3,600 + $34,200 + $1,300 + $30,000 = $69,100
= Ответ: оборотные активы $38,770; краткосрочные обязательства $69,100
! Частая ошибка: считать $3,600 деньгами (активы $42,370) или забыть платёж по займу ($39,100).`,
        uz: `Har bir qoldiqni ajratib, har bir guruhni qo'shamiz.
# 1-qadam: Aylanma aktivlar
  Debitorlar $26,400 - rezerv $1,700 = $24,700
  + zaxira $13,900 + kichik kassa $170
  = $38,770
  (Furgon va uning amortizatsiyasi uzoq muddatli.)
# 2-qadam: Qisqa muddatli majburiyatlar
  BANK ko'chirmasidagi DEBET biznes bankka qarzligini bildiradi: overdraft $3,600
  Kreditorlar $34,200 + to'lanadigan ijara $1,300
  1 yanvardagi birinchi qarz to'lovi: $120,000 / 4 = $30,000
  $3,600 + $34,200 + $1,300 + $30,000 = $69,100
= Javob: aylanma aktivlar $38,770; qisqa muddatli majburiyatlar $69,100
! Ko'p uchraydigan xato: $3,600 ni pul deb hisoblash ($42,370 aktiv) yoki qarz to'lovini unutish ($39,100).`,
      },
      options: [
        'Current assets $38,770; current liabilities $39,100',
        'Current assets $42,370; current liabilities $35,500',
        'Current assets $42,370; current liabilities $65,500',
        'Current assets $38,770; current liabilities $69,100',
      ],
      correctIndex: 3,
      table: {
        head: ['Item', '$'],
        rows: [
          ['Motor van', '16,000'],
          ['Loan', '120,000'],
          ['Receivables', '26,400'],
          ['Bank balance (a debit on the bank statement)', '3,600'],
          ['Accumulated depreciation', '8,000'],
          ['Payables', '34,200'],
          ['Inventory', '13,900'],
          ['Petty cash', '170'],
          ['Rent due', '1,300'],
          ['Allowance for receivables', '1,700'],
        ],
      },
    },
    {
      id: 'ch15-q378',
      kitRef: 378,
      topicId: 'chapter-15',
      type: 'single',
      text: 'At the start of a week a business had assets of $18,400 and liabilities of $12,900. In the week: goods for resale were bought on credit for $350; the owner put in $1,600 of long-term capital; rent of $800 was paid; the owner withdrew $450 in cash; and goods that cost $700 were sold on credit for $1,300. What is capital at the end of the week?',
      explanation: {
        en: `Capital = assets - liabilities. Start there, then ask which events change it.
# Step 1: Opening capital
  $18,400 - $12,900 = $5,500
# Step 2: Each event
  Goods bought on credit $350: inventory and payables both up. No change
  Owner puts in $1,600: + $1,600
  Rent paid $800: an expense. - $800
  Owner takes $450: drawings. - $450
  Goods costing $700 sold for $1,300: profit of $600. + $600
# Step 3: Closing capital
  $5,500 + $1,600 - $800 - $450 + $600 = $6,450
= Answer: $6,450
! Common trap: counting the credit purchase, or adding the full $1,300 sale instead of the $600 profit.`,
        ru: `Капитал = активы - обязательства. Начнём с этого и спросим, какие события его меняют.
# Шаг 1: Начальный капитал
  $18,400 - $12,900 = $5,500
# Шаг 2: Каждое событие
  Товар в кредит $350: запасы и кредиторы растут. Без изменений
  Владелец вносит $1,600: + $1,600
  Оплата аренды $800: расход. - $800
  Владелец забирает $450: изъятия. - $450
  Товар за $700 продан за $1,300: прибыль $600. + $600
# Шаг 3: Конечный капитал
  $5,500 + $1,600 - $800 - $450 + $600 = $6,450
= Ответ: $6,450
! Частая ошибка: учесть покупку в кредит или прибавить всю продажу $1,300 вместо прибыли $600.`,
        uz: `Kapital = aktivlar - majburiyatlar. Shundan boshlab, qaysi voqealar uni o'zgartirishini so'raymiz.
# 1-qadam: Boshlang'ich kapital
  $18,400 - $12,900 = $5,500
# 2-qadam: Har bir voqea
  Kreditga $350 lik tovar: zaxira va kreditorlar oshadi. O'zgarishsiz
  Egasi $1,600 kiritadi: + $1,600
  $800 ijara to'landi: xarajat. - $800
  Egasi $450 oladi: olib qo'yish. - $450
  $700 lik tovar $1,300 ga sotildi: $600 foyda. + $600
# 3-qadam: Yakuniy kapital
  $5,500 + $1,600 - $800 - $450 + $600 = $6,450
= Javob: $6,450
! Ko'p uchraydigan xato: kreditga xaridni hisoblash yoki $600 foyda o'rniga butun $1,300 sotuvni qo'shish.`,
      },
      options: ['$6,450', '$5,850', '$1,600', '$950'],
      correctIndex: 0,
    },
    {
      id: 'ch15-q379',
      kitRef: 379,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A company incurred development expenditure of $60,000, which meets the capitalisation criteria. Amortisation of intangibles was $18,000, and there was a loss on disposal of plant of $3,500. What is the total expense in profit or loss?',
      explanation: {
        en: `Ask of each item: is it an expense this year?
# Development spending $60,000
  It meets the criteria, so it is capitalised as an intangible asset. NOT an expense
# Amortisation $18,000
  An expense
# Loss on disposal of plant $3,500
  An expense
# Total expense
  $18,000 + $3,500 = $21,500
= Answer: $21,500
! Common trap: including the $60,000 ($81,500). Capitalised development goes to the statement of financial position.`,
        ru: `Спросим о каждой статье: это расход этого года?
# Затраты на разработку $60,000
  Отвечают критериям, значит капитализируются как нематериальный актив. НЕ расход
# Амортизация $18,000
  Расход
# Убыток от выбытия оборудования $3,500
  Расход
# Итого расход
  $18,000 + $3,500 = $21,500
= Ответ: $21,500
! Частая ошибка: включить $60,000 ($81,500). Капитализированная разработка идёт в отчёт о финансовом положении.`,
        uz: `Har bir modda haqida so'raymiz: bu shu yil xarajatimi?
# Ishlab chiqish xarajati $60,000
  Mezonlarga javob beradi, demak nomoddiy aktiv sifatida kapitallashtiriladi. Xarajat EMAS
# Amortizatsiya $18,000
  Xarajat
# Uskuna chiqib ketishidan zarar $3,500
  Xarajat
# Jami xarajat
  $18,000 + $3,500 = $21,500
= Javob: $21,500
! Ko'p uchraydigan xato: $60,000 ni qo'shish ($81,500). Kapitallashtirilgan ishlab chiqish moliyaviy holat hisobotiga boradi.`,
      },
      correctValue: 21500,
      answerText: '$21,500',
    },
    {
      id: 'ch15-q380',
      kitRef: 380,
      topicId: 'chapter-15',
      type: 'number',
      text: 'On 1 January a company revalued a property to $120,000. It had cost $90,000 and had accumulated depreciation of $18,000. Its useful life was 50 years from purchase, with no residual value. What excess depreciation could be transferred at 31 December?',
      explanation: {
        en: `Excess depreciation = new yearly charge - old yearly charge.
# Step 1: Old charge
  $90,000 / 50 years = $1,800 a year
# Step 2: How old the property is
  $18,000 / $1,800 = 10 years used, so 50 - 10 = 40 years left
# Step 3: New charge
  $120,000 / 40 years = $3,000 a year
# Step 4: Excess
  $3,000 - $1,800 = $1,200
= Answer: $1,200
! Common trap: dividing the new value by 50 years. After revaluation, spread it over the REMAINING life.`,
        ru: `Избыточная амортизация = новая годовая сумма - старая годовая сумма.
# Шаг 1: Старая амортизация
  $90,000 / 50 лет = $1,800 в год
# Шаг 2: Возраст здания
  $18,000 / $1,800 = прошло 10 лет, значит осталось 50 - 10 = 40 лет
# Шаг 3: Новая амортизация
  $120,000 / 40 лет = $3,000 в год
# Шаг 4: Избыток
  $3,000 - $1,800 = $1,200
= Ответ: $1,200
! Частая ошибка: делить новую стоимость на 50 лет. После переоценки её распределяют на ОСТАВШИЙСЯ срок.`,
        uz: `Ortiqcha amortizatsiya = yangi yillik summa - eski yillik summa.
# 1-qadam: Eski amortizatsiya
  $90,000 / 50 yil = yiliga $1,800
# 2-qadam: Bino necha yoshda
  $18,000 / $1,800 = 10 yil o'tgan, demak 50 - 10 = 40 yil qolgan
# 3-qadam: Yangi amortizatsiya
  $120,000 / 40 yil = yiliga $3,000
# 4-qadam: Ortiqcha
  $3,000 - $1,800 = $1,200
= Javob: $1,200
! Ko'p uchraydigan xato: yangi qiymatni 50 yilga bo'lish. Qayta baholashdan keyin u QOLGAN muddatga taqsimlanadi.`,
      },
      correctValue: 1200,
      answerText: '$1,200',
    },
    {
      id: 'ch15-q381',
      kitRef: 381,
      topicId: 'chapter-15',
      type: 'multi',
      text: 'In which TWO financial statements would you expect to find dividends paid?',
      explanation: {
        en: `A dividend paid is cash going to the owners. It is not an expense.
- Profit or loss and other comprehensive income: WRONG. Dividends are never an expense.
- Financial position: WRONG. A PAID dividend has gone; only an unpaid declared one would be a liability.
- Cash flows: RIGHT. Cash left the business.
- Changes in equity: RIGHT. It reduces retained earnings.
= Answer: statement of cash flows and statement of changes in equity`,
        ru: `Выплаченный дивиденд — деньги, ушедшие владельцам. Это не расход.
- Прибыль или убыток и прочий совокупный доход: НЕВЕРНО. Дивиденды никогда не расход.
- Финансовое положение: НЕВЕРНО. ВЫПЛАЧЕННЫЙ дивиденд уже ушёл; обязательством был бы только объявленный, но не выплаченный.
- Движение денежных средств: ВЕРНО. Деньги ушли из бизнеса.
- Изменения в капитале: ВЕРНО. Он уменьшает нераспределённую прибыль.
= Ответ: отчёт о движении денежных средств и отчёт об изменениях в капитале`,
        uz: `To'langan dividend — egalarga ketgan pul. Bu xarajat emas.
- Foyda yoki zarar va boshqa umumlashgan daromad: NOTO'G'RI. Dividendlar hech qachon xarajat emas.
- Moliyaviy holat: NOTO'G'RI. TO'LANGAN dividend ketgan; faqat e'lon qilingan, lekin to'lanmagani majburiyat bo'lardi.
- Pul oqimlari: TO'G'RI. Pul biznesdan chiqdi.
- Kapitaldagi o'zgarishlar: TO'G'RI. U taqsimlanmagan foydani kamaytiradi.
= Javob: pul oqimlari hisoboti va kapitaldagi o'zgarishlar hisoboti`,
      },
      options: [
        'Statement of profit or loss and other comprehensive income',
        'Statement of financial position',
        'Statement of cash flows',
        'Statement of changes in equity',
      ],
      correctIndices: [2, 3],
    },
    {
      id: 'ch15-q382',
      kitRef: 382,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company revalued a property to $240,000. It had cost $190,000 and had accumulated depreciation of $50,000. What entries record the revaluation?',
      explanation: {
        en: `The revaluation gain = new value - carrying amount.
# Step 1: Carrying amount before
  Cost $190,000 - accumulated depreciation $50,000 = $140,000
# Step 2: Gain
  $240,000 - $140,000 = $100,000 to the revaluation surplus
# Step 3: Bring the asset to $240,000
  Raise the cost from $190,000 to $240,000: Dr Property $50,000
  Clear the old depreciation: Dr Accumulated depreciation $50,000
  Cr Revaluation surplus $100,000
= Answer: Dr Property $50,000, Dr Accumulated depreciation $50,000, Cr Revaluation surplus $100,000
! Common trap: crediting $240,000 (the whole value is not a gain) or only $50,000 (that ignores the depreciation cleared).`,
        ru: `Прирост от переоценки = новая стоимость - балансовая стоимость.
# Шаг 1: Балансовая стоимость до
  Стоимость $190,000 - накопленная амортизация $50,000 = $140,000
# Шаг 2: Прирост
  $240,000 - $140,000 = $100,000 в резерв переоценки
# Шаг 3: Доводим актив до $240,000
  Поднимаем стоимость с $190,000 до $240,000: Дт Недвижимость $50,000
  Списываем старую амортизацию: Дт Накопленная амортизация $50,000
  Кт Резерв переоценки $100,000
= Ответ: Дт Недвижимость $50,000, Дт Накопленная амортизация $50,000, Кт Резерв переоценки $100,000
! Частая ошибка: кредит $240,000 (вся стоимость — не прирост) или только $50,000 (без списанной амортизации).`,
        uz: `Qayta baholash o'sishi = yangi qiymat - balans qiymati.
# 1-qadam: Oldingi balans qiymati
  Tannarx $190,000 - jamg'arilgan amortizatsiya $50,000 = $140,000
# 2-qadam: O'sish
  $240,000 - $140,000 = $100,000 qayta baholash rezerviga
# 3-qadam: Aktivni $240,000 ga yetkazamiz
  Tannarxni $190,000 dan $240,000 ga ko'taramiz: Dt Ko'chmas mulk $50,000
  Eski amortizatsiyani tozalaymiz: Dt Jamg'arilgan amortizatsiya $50,000
  Kt Qayta baholash rezervi $100,000
= Javob: Dt Ko'chmas mulk $50,000, Dt Jamg'arilgan amortizatsiya $50,000, Kt Qayta baholash rezervi $100,000
! Ko'p uchraydigan xato: $240,000 kreditlash (butun qiymat o'sish emas) yoki faqat $50,000 (tozalangan amortizatsiyasiz).`,
      },
      options: [
        'Dr Property $240,000, Cr Revaluation surplus $240,000',
        'Dr Revaluation surplus $100,000, Cr Property $50,000, Cr Accumulated depreciation $50,000',
        'Dr Property $50,000, Cr Revaluation surplus $50,000',
        'Dr Property $50,000, Dr Accumulated depreciation $50,000, Cr Revaluation surplus $100,000',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q383',
      kitRef: 383,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company has $120,000 of $0.50 equity shares and $500,000 of 6% irredeemable preference shares in issue. In the year it paid a dividend of 4 cents per equity share and half of the preference dividend. Which statements are true? (1) An equity dividend of $4,800 was paid. (2) A preference dividend of $15,000 was accrued at the year end.',
      explanation: {
        en: `Check each statement with the numbers.
# Statement 1: equity dividend
  Number of shares: $120,000 / $0.50 = 240,000
  Dividend: 240,000 x $0.04 = $9,600
  Not $4,800, so statement 1 is FALSE
  ($4,800 wrongly uses $120,000 as the number of shares.)
# Statement 2: preference dividend
  Full year: $500,000 x 6% = $30,000
  Half paid, so $15,000 is still owed at the year end and is accrued
  Statement 2 is TRUE
= Answer: 2 only`,
        ru: `Проверим каждое утверждение цифрами.
# Утверждение 1: дивиденд по обыкновенным акциям
  Число акций: $120,000 / $0.50 = 240,000
  Дивиденд: 240,000 x $0.04 = $9,600
  Не $4,800, значит утверждение 1 НЕВЕРНО
  ($4,800 ошибочно берёт $120,000 как число акций.)
# Утверждение 2: дивиденд по привилегированным акциям
  За полный год: $500,000 x 6% = $30,000
  Выплачена половина, значит $15,000 ещё должны и начисляют
  Утверждение 2 ВЕРНО
= Ответ: только 2`,
        uz: `Har bir fikrni sonlar bilan tekshiramiz.
# 1-fikr: oddiy aksiya dividendi
  Aksiyalar soni: $120,000 / $0.50 = 240,000
  Dividend: 240,000 x $0.04 = $9,600
  $4,800 emas, demak 1-fikr NOTO'G'RI
  ($4,800 xato bilan $120,000 ni aksiya soni deb oladi.)
# 2-fikr: imtiyozli aksiya dividendi
  To'liq yil: $500,000 x 6% = $30,000
  Yarmi to'langan, demak $15,000 hali qarz va hisoblanadi
  2-fikr TO'G'RI
= Javob: faqat 2`,
      },
      options: ['1 only', '2 only', 'Neither 1 nor 2', 'Both 1 and 2'],
      correctIndex: 1,
    },
    {
      id: 'ch15-q384',
      kitRef: 384,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Where should income tax expense for the period and a gain on revaluation of a non-current asset be presented?',
      explanation: {
        en: `One statement has two parts: profit or loss, then other comprehensive income.
# Income tax expense
  An expense of the year: PROFIT OR LOSS part
# Revaluation gain
  Not realised: OTHER COMPREHENSIVE INCOME part
# Both parts are the same statement
= Answer: both in the statement of profit or loss and other comprehensive income
! Common trap: the statement of cash flows. A revaluation moves no cash, and tax EXPENSE is not the same as tax paid.`,
        ru: `Один отчёт из двух частей: прибыль или убыток, затем прочий совокупный доход.
# Расход по налогу на прибыль
  Расход года: часть ПРИБЫЛЬ ИЛИ УБЫТОК
# Прирост от переоценки
  Не реализован: часть ПРОЧИЙ СОВОКУПНЫЙ ДОХОД
# Обе части — один и тот же отчёт
= Ответ: оба в отчёте о прибыли или убытке и прочем совокупном доходе
! Частая ошибка: отчёт о движении денежных средств. Переоценка не двигает деньги, а РАСХОД по налогу — не то же, что уплаченный налог.`,
        uz: `Bitta hisobot ikki qismdan: foyda yoki zarar, keyin boshqa umumlashgan daromad.
# Foyda solig'i xarajati
  Yil xarajati: FOYDA YOKI ZARAR qismi
# Qayta baholash o'sishi
  Amalga oshmagan: BOSHQA UMUMLASHGAN DAROMAD qismi
# Ikkala qism bitta hisobot
= Javob: ikkalasi foyda yoki zarar va boshqa umumlashgan daromad hisobotida
! Ko'p uchraydigan xato: pul oqimlari hisoboti. Qayta baholash pul harakatlantirmaydi, soliq XARAJATI esa to'langan soliq bilan bir xil emas.`,
      },
      options: [
        'Tax: statement of changes in equity. Gain: statement of profit or loss and other comprehensive income',
        'Tax: statement of profit or loss and other comprehensive income. Gain: statement of cash flows',
        'Both in the statement of profit or loss and other comprehensive income',
        'Both in the statement of cash flows',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q385',
      kitRef: 385,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Use the figures below. Depreciation is split 70:30 between the factory and the office, and office costs are general and administrative expenses. What is cost of sales?',
      explanation: {
        en: `Cost of sales = everything it cost to get the goods ready to sell, less what is still unsold.
# Step 1: Factory share of depreciation
  70% x $50,000 = $35,000 (the office 30% goes to admin)
# Step 2: Cost of sales
  Opening inventory $13,400
  + purchases $210,000
  + carriage in $3,900 (bringing goods IN is part of their cost)
  + factory depreciation $35,000
  - closing inventory $18,600
  = $243,700
# Step 3: What is left out
  Carriage out goes to distribution; the audit fee and selling costs are not cost of sales
= Answer: $243,700
! Common trap: forgetting carriage in ($239,800), or using carriage out instead.`,
        ru: `Себестоимость = всё, во что обошлась подготовка товара к продаже, минус то, что ещё не продано.
# Шаг 1: Доля амортизации завода
  70% x $50,000 = $35,000 (30% офиса идут в администрацию)
# Шаг 2: Себестоимость
  Запасы на начало $13,400
  + закупки $210,000
  + доставка от поставщика $3,900 (доставка товара К НАМ — часть его стоимости)
  + амортизация завода $35,000
  - запасы на конец $18,600
  = $243,700
# Шаг 3: Что не включаем
  Доставка покупателям идёт в сбыт; аудит и расходы на продажу — не себестоимость
= Ответ: $243,700
! Частая ошибка: забыть доставку от поставщика ($239,800) или взять вместо неё доставку покупателям.`,
        uz: `Tannarx = tovarni sotishga tayyorlash qanchaga tushgani, minus hali sotilmagani.
# 1-qadam: Zavod amortizatsiyasi ulushi
  70% x $50,000 = $35,000 (ofisning 30% i ma'muriyga ketadi)
# 2-qadam: Tannarx
  Boshlang'ich zaxira $13,400
  + xaridlar $210,000
  + yetkazib beruvchidan tashish $3,900 (tovarni BIZGA olib kelish uning tannarxiga kiradi)
  + zavod amortizatsiyasi $35,000
  - yakuniy zaxira $18,600
  = $243,700
# 3-qadam: Nima kiritilmaydi
  Mijozlarga tashish sotishga ketadi; audit va sotish xarajatlari tannarx emas
= Javob: $243,700
! Ko'p uchraydigan xato: yetkazib beruvchidan tashishni unutish ($239,800) yoki o'rniga mijozlarga tashishni olish.`,
      },
      options: ['$239,800', '$243,700', '$251,800', '$258,700'],
      correctIndex: 1,
      table: {
        head: ['Item', '$'],
        rows: [
          ['Opening inventory', '13,400'],
          ['Closing inventory', '18,600'],
          ['Purchases', '210,000'],
          ['Selling expenses', '38,000'],
          ['General and administrative expenses', '82,000'],
          ['Audit fee', '16,000'],
          ['Carriage in', '3,900'],
          ['Carriage out', '8,100'],
          ['Depreciation', '50,000'],
        ],
      },
    },
    {
      id: 'ch15-q386',
      kitRef: 386,
      topicId: 'chapter-15',
      type: 'single',
      text: 'At the start of the year a company had equity shares of $0.25 with a total nominal value of $120,000, and share premium of $40,000. It made a 1-for-4 rights issue at $1.25, fully taken up, followed by a 1-for-10 bonus issue. What is the balance on share premium after these?',
      explanation: {
        en: `Track the number of shares, then the premium.
# Step 1: Shares at the start
  $120,000 / $0.25 = 480,000 shares
# Step 2: Rights issue, 1 for 4 at $1.25
  New shares: 480,000 / 4 = 120,000
  Premium on each: $1.25 - $0.25 = $1.00
  Premium added: 120,000 x $1.00 = $120,000
  Share premium: $40,000 + $120,000 = $160,000
# Step 3: Bonus issue, 1 for 10
  Shares now: 480,000 + 120,000 = 600,000
  New shares: 600,000 / 10 = 60,000
  Paid from premium: 60,000 x $0.25 = $15,000
# Step 4: Closing share premium
  $160,000 - $15,000 = $145,000
= Answer: $145,000
! Common trap: stopping after the rights issue ($160,000), or using $1.25 instead of $0.25 for the bonus shares.`,
        ru: `Следим за числом акций, затем за эмиссионным доходом.
# Шаг 1: Акций на начало
  $120,000 / $0.25 = 480,000 акций
# Шаг 2: Эмиссия прав, 1 к 4 по $1.25
  Новых акций: 480,000 / 4 = 120,000
  Эмиссионный доход на каждую: $1.25 - $0.25 = $1.00
  Прибавка: 120,000 x $1.00 = $120,000
  Эмиссионный доход: $40,000 + $120,000 = $160,000
# Шаг 3: Бонусная эмиссия, 1 к 10
  Акций теперь: 480,000 + 120,000 = 600,000
  Новых акций: 600,000 / 10 = 60,000
  Из эмиссионного дохода: 60,000 x $0.25 = $15,000
# Шаг 4: Эмиссионный доход на конец
  $160,000 - $15,000 = $145,000
= Ответ: $145,000
! Частая ошибка: остановиться после эмиссии прав ($160,000) или брать $1.25 вместо $0.25 для бонусных акций.`,
        uz: `Avval aksiyalar sonini, keyin emissiya daromadini kuzatamiz.
# 1-qadam: Boshidagi aksiyalar
  $120,000 / $0.25 = 480,000 aksiya
# 2-qadam: Huquqli emissiya, 4 ga 1, $1.25 dan
  Yangi aksiyalar: 480,000 / 4 = 120,000
  Har biriga emissiya daromadi: $1.25 - $0.25 = $1.00
  Qo'shiladi: 120,000 x $1.00 = $120,000
  Emissiya daromadi: $40,000 + $120,000 = $160,000
# 3-qadam: Bonus emissiya, 10 ga 1
  Endi aksiyalar: 480,000 + 120,000 = 600,000
  Yangi aksiyalar: 600,000 / 10 = 60,000
  Emissiya daromadidan: 60,000 x $0.25 = $15,000
# 4-qadam: Yakuniy emissiya daromadi
  $160,000 - $15,000 = $145,000
= Javob: $145,000
! Ko'p uchraydigan xato: huquqli emissiyadan keyin to'xtash ($160,000) yoki bonus aksiyalar uchun $0.25 o'rniga $1.25 olish.`,
      },
      options: ['$25,000', '$28,000', '$145,000', '$160,000'],
      correctIndex: 2,
    },
    {
      id: 'ch15-q387',
      kitRef: 387,
      topicId: 'chapter-15',
      type: 'single',
      text: 'In September 20X5 a company paid the final dividend of $110,000 for the year ended 30 June 20X5, declared in August 20X5. In March 20X6 it paid an interim dividend of $45,000. In September 20X6 it paid the final dividend of $130,000 for the year ended 30 June 20X6, declared in August 20X6. What figures appear for the year ended 30 June 20X6?',
      explanation: {
        en: `Two rules: dividends are never an expense, and a dividend is a liability only once it is declared.
# Profit or loss
  Dividends come out of retained earnings, never out of profit: $0
# Financial position at 30 June 20X6
  The $130,000 final dividend was declared in August, AFTER the year end
  No obligation at 30 June: $0
  (The interim and last year's final were already paid, so nothing is owed.)
= Answer: profit or loss $0; financial position $0
! Common trap: deducting dividends in profit or loss, or showing the $130,000 as a liability before it was declared.`,
        ru: `Два правила: дивиденды никогда не расход, а обязательство возникает только после объявления.
# Прибыль или убыток
  Дивиденды уменьшают нераспределённую прибыль, а не прибыль: $0
# Финансовое положение на 30 июня 20X6
  Окончательный дивиденд $130,000 объявлен в августе, ПОСЛЕ конца года
  На 30 июня обязательства нет: $0
  (Промежуточный и прошлогодний окончательный уже выплачены, долга нет.)
= Ответ: прибыль или убыток $0; финансовое положение $0
! Частая ошибка: вычитать дивиденды в прибыли или убытке или показать $130,000 как обязательство до объявления.`,
        uz: `Ikki qoida: dividendlar hech qachon xarajat emas va dividend faqat e'lon qilingandan keyin majburiyat bo'ladi.
# Foyda yoki zarar
  Dividendlar foydadan emas, taqsimlanmagan foydadan chiqadi: $0
# 30 iyun 20X6 dagi moliyaviy holat
  $130,000 yakuniy dividend avgustda, yil tugagandan KEYIN e'lon qilingan
  30 iyunda majburiyat yo'q: $0
  (Oraliq va o'tgan yilgi yakuniy dividend allaqachon to'langan, qarz yo'q.)
= Javob: foyda yoki zarar $0; moliyaviy holat $0
! Ko'p uchraydigan xato: dividendlarni foyda yoki zararda ayirish yoki $130,000 ni e'lon qilinmasdan majburiyat deb ko'rsatish.`,
      },
      options: [
        'Profit or loss: $175,000 deduction. Financial position: $130,000',
        'Profit or loss: $155,000 deduction. Financial position: $0',
        'Profit or loss: $0. Financial position: $130,000',
        'Profit or loss: $0. Financial position: $0',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q388',
      kitRef: 388,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'State whether each statement is true or false.',
      explanation: {
        en: `Check each statement.
- A rights issue can raise more equity: TRUE. Shareholders pay cash for the new shares.
- A rights issue may raise share premium; a bonus issue usually uses it up: TRUE. Rights shares are sold above nominal value; bonus shares are often paid for out of premium.
- A rights issue always adds shareholders: FALSE. The shares are offered to existing shareholders, so the number of holders need not change.
- A bonus issue raises the value of each share: FALSE. The company is worth the same, split into more shares, so each is worth less.`,
        ru: `Проверим каждое утверждение.
- Эмиссия прав может привлечь больше капитала: ВЕРНО. Акционеры платят деньги за новые акции.
- Эмиссия прав может увеличить эмиссионный доход, а бонусная обычно его расходует: ВЕРНО. Акции по правам продают выше номинала; бонусные часто оплачивают из эмиссионного дохода.
- Эмиссия прав всегда добавляет акционеров: НЕВЕРНО. Акции предлагают существующим акционерам, их число может не измениться.
- Бонусная эмиссия повышает стоимость каждой акции: НЕВЕРНО. Компания стоит столько же, но делится на большее число акций, каждая стоит меньше.`,
        uz: `Har bir fikrni tekshiramiz.
- Huquqli emissiya ko'proq kapital jalb qilishi mumkin: TO'G'RI. Aksiyadorlar yangi aksiyalar uchun pul to'laydi.
- Huquqli emissiya emissiya daromadini oshirishi, bonus esa odatda uni ishlatishi mumkin: TO'G'RI. Huquqli aksiyalar nominaldan qimmat sotiladi; bonus aksiyalar ko'pincha emissiya daromadidan to'lanadi.
- Huquqli emissiya har doim aksiyadorlar sonini oshiradi: NOTO'G'RI. Aksiyalar mavjud aksiyadorlarga taklif qilinadi, ularning soni o'zgarmasligi mumkin.
- Bonus emissiya har bir aksiya qiymatini oshiradi: NOTO'G'RI. Kompaniya qiymati bir xil, lekin ko'proq aksiyaga bo'linadi, har biri arzonroq.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'A company may make a rights issue to raise more equity capital', correctIndex: 0 },
        {
          text: 'A rights issue might increase share premium, whereas a bonus issue is likely to reduce it',
          correctIndex: 0,
        },
        {
          text: 'A rights issue will always increase the number of shareholders, whereas a bonus issue will not',
          correctIndex: 1,
        },
        { text: 'A bonus issue will increase the market value of each share', correctIndex: 1 },
      ],
    },
    {
      id: 'ch15-q389',
      kitRef: 389,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A trial balance includes a credit balance of $4,100 on income tax, after last year\'s liability was settled. Tax on this year\'s profits is estimated at $72,500. What amounts go in the financial statements?',
      explanation: {
        en: `A CREDIT left on the tax account means last year's tax was overestimated (an overprovision).
# Step 1: Tax expense
  This year's estimate $72,500 - last year's over-estimate $4,100 = $68,400
# Step 2: Tax payable
  The full estimate for THIS year: $72,500
= Answer: expense $68,400; payable $72,500
! Common trap: adding the $4,100 ($76,600), or also cutting the liability ($68,400). The liability is only this year's tax.`,
        ru: `КРЕДИТ на счёте налога значит, что налог прошлого года переоценили (переначисление).
# Шаг 1: Расход по налогу
  Оценка этого года $72,500 - прошлогодний избыток $4,100 = $68,400
# Шаг 2: Налог к уплате
  Полная оценка за ЭТОТ год: $72,500
= Ответ: расход $68,400; к уплате $72,500
! Частая ошибка: прибавить $4,100 ($76,600) или уменьшить и обязательство ($68,400). Обязательство — только налог этого года.`,
        uz: `Soliq hisobidagi KREDIT o'tgan yil solig'i ortiqcha baholanganini bildiradi (ortiqcha hisoblangan).
# 1-qadam: Soliq xarajati
  Bu yil bahosi $72,500 - o'tgan yil ortiqchasi $4,100 = $68,400
# 2-qadam: To'lanadigan soliq
  SHU yil uchun to'liq baho: $72,500
= Javob: xarajat $68,400; to'lanadigan $72,500
! Ko'p uchraydigan xato: $4,100 ni qo'shish ($76,600) yoki majburiyatni ham kamaytirish ($68,400). Majburiyat faqat shu yil solig'i.`,
      },
      options: [
        'Expense $72,500; payable $72,500',
        'Expense $68,400; payable $68,400',
        'Expense $68,400; payable $72,500',
        'Expense $76,600; payable $72,500',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q390',
      kitRef: 390,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'Classify each item as current or non-current.',
      explanation: {
        en: `Classify each item.
- A credit sale to be paid in 12 months: CURRENT. It is part of the normal trading cycle.
- An overdraft facility for three years: CURRENT. The bank can demand an overdraft back at any time.
- Shares bought to trade: CURRENT. Assets held for trading are current.
- A bank loan repayable in five years: NON-CURRENT. It is not due within 12 months.`,
        ru: `Распределим каждую статью.
- Продажа в кредит с оплатой через 12 месяцев: КРАТКОСРОЧНОЕ. Это часть обычного торгового цикла.
- Лимит овердрафта на три года: КРАТКОСРОЧНОЕ. Банк может потребовать овердрафт назад в любой момент.
- Акции, купленные для торговли: КРАТКОСРОЧНОЕ. Активы для торговли — оборотные.
- Банковский заём с погашением через пять лет: ДОЛГОСРОЧНОЕ. Срок не в течение 12 месяцев.`,
        uz: `Har bir moddani ajratamiz.
- 12 oydan keyin to'lanadigan kreditga sotuv: QISQA MUDDATLI. Bu odatiy savdo siklining qismi.
- Uch yillik overdraft limiti: QISQA MUDDATLI. Bank overdraftni istalgan vaqtda qaytarishni talab qilishi mumkin.
- Savdo uchun olingan aksiyalar: QISQA MUDDATLI. Savdo uchun aktivlar aylanma.
- Besh yilda qaytariladigan bank qarzi: UZOQ MUDDATLI. 12 oy ichida emas.`,
      },
      columns: ['Current', 'Non-current'],
      rows: [
        { text: 'A credit sale to a customer who has agreed to pay in 12 months', correctIndex: 0 },
        { text: 'A bank overdraft facility of $30,000 available for the next three years', correctIndex: 0 },
        { text: 'A small number of shares in another entity bought in order to trade them', correctIndex: 0 },
        { text: 'A bank loan with a repayment date five years away', correctIndex: 1 },
      ],
    },
    {
      id: 'ch15-q391',
      kitRef: 391,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company\'s records for the year show: revaluation gain in the year $240,000; equity interim dividend paid $14,000; profit before income taxes $190,000; estimated income tax $48,000; 8% $1 redeemable preference shares $120,000; underprovision for tax in the previous year $6,000; proceeds of an issue of 3,000 $1 equity shares $7,500; final equity dividend proposed $28,000. What is the total increase in equity for the year in the statement of changes in equity?',
      explanation: {
        en: `Equity grows with profit after tax, share issues and revaluations, and falls with dividends PAID.
# Step 1: Profit after tax
  $190,000 - tax $48,000 - last year's underprovision $6,000 = $136,000
# Step 2: Other movements
  Share issue: + $7,500
  Revaluation gain: + $240,000
  Interim dividend paid: - $14,000
# Step 3: Total increase
  $136,000 + $7,500 + $240,000 - $14,000 = $369,500
# Step 4: What is left out
  Redeemable preference shares must be repaid, so they are a LIABILITY, not equity
  The final dividend is only proposed, so it is not recorded yet
= Answer: $369,500
! Common trap: deducting the proposed $28,000 ($341,500) or forgetting the $6,000 underprovision ($375,500).`,
        ru: `Капитал растёт на прибыль после налога, выпуск акций и переоценку и уменьшается на ВЫПЛАЧЕННЫЕ дивиденды.
# Шаг 1: Прибыль после налога
  $190,000 - налог $48,000 - недоначисление прошлого года $6,000 = $136,000
# Шаг 2: Прочие движения
  Выпуск акций: + $7,500
  Прирост от переоценки: + $240,000
  Выплаченный промежуточный дивиденд: - $14,000
# Шаг 3: Общее увеличение
  $136,000 + $7,500 + $240,000 - $14,000 = $369,500
# Шаг 4: Что не включаем
  Погашаемые привилегированные акции нужно вернуть, это ОБЯЗАТЕЛЬСТВО, а не капитал
  Окончательный дивиденд только предложен, его ещё не записывают
= Ответ: $369,500
! Частая ошибка: вычесть предложенные $28,000 ($341,500) или забыть недоначисление $6,000 ($375,500).`,
        uz: `Kapital soliqdan keyingi foyda, aksiya chiqarish va qayta baholash bilan oshadi, TO'LANGAN dividendlar bilan kamayadi.
# 1-qadam: Soliqdan keyingi foyda
  $190,000 - soliq $48,000 - o'tgan yil kam hisoblangani $6,000 = $136,000
# 2-qadam: Boshqa harakatlar
  Aksiya chiqarish: + $7,500
  Qayta baholash o'sishi: + $240,000
  To'langan oraliq dividend: - $14,000
# 3-qadam: Jami oshish
  $136,000 + $7,500 + $240,000 - $14,000 = $369,500
# 4-qadam: Nima kiritilmaydi
  Qaytariladigan imtiyozli aksiyalar qaytarilishi kerak, demak ular MAJBURIYAT, kapital emas
  Yakuniy dividend faqat taklif qilingan, u hali yozilmaydi
= Javob: $369,500
! Ko'p uchraydigan xato: taklif qilingan $28,000 ni ayirish ($341,500) yoki $6,000 kam hisoblanganini unutish ($375,500).`,
      },
      options: ['$341,500', '$362,000', '$369,500', '$375,500'],
      correctIndex: 2,
    },
    {
      id: 'ch15-q392',
      kitRef: 392,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which statements about a preference share are true? (1) They carry voting rights. (2) Their dividend is paid in priority to an equity dividend. (3) Their dividend is related to profits.',
      explanation: {
        en: `A preference share gets a FIXED dividend, paid FIRST, and usually no vote.
- (1) Voting rights: FALSE. Preference shares generally carry no vote.
- (2) Paid before equity dividends: TRUE. That is the "preference".
- (3) Dividend linked to profits: FALSE. It is a fixed percentage of nominal value.
= Answer: 2 only`,
        ru: `Привилегированная акция получает ФИКСИРОВАННЫЙ дивиденд, выплачиваемый ПЕРВЫМ, и обычно без голоса.
- (1) Право голоса: НЕВЕРНО. Привилегированные акции обычно не голосуют.
- (2) Выплата раньше обыкновенных дивидендов: ВЕРНО. В этом и есть «привилегия».
- (3) Дивиденд зависит от прибыли: НЕВЕРНО. Это фиксированный процент от номинала.
= Ответ: только 2`,
        uz: `Imtiyozli aksiya BIRINCHI to'lanadigan QAT'IY dividend oladi va odatda ovozsiz bo'ladi.
- (1) Ovoz huquqi: NOTO'G'RI. Imtiyozli aksiyalar odatda ovoz bermaydi.
- (2) Oddiy dividendlardan oldin to'lanadi: TO'G'RI. «Imtiyoz» shu.
- (3) Dividend foydaga bog'liq: NOTO'G'RI. Bu nominalning qat'iy foizi.
= Javob: faqat 2`,
      },
      options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '2 only'],
      correctIndex: 3,
    },
    {
      id: 'ch15-q393',
      kitRef: 393,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company issues 120,000 4% $1 redeemable preference shares at 97 cents each. What are the correct entries?',
      explanation: {
        en: `REDEEMABLE preference shares must be paid back, so in substance they are a loan.
# Step 1: Cash received
  120,000 x $0.97 = $116,400
# Step 2: Where the credit goes
  A debt, so a LIABILITY, not share capital
= Answer: Dr Cash $116,400, Cr Liability $116,400
! Common trap: crediting share capital or share premium. Those are for equity shares; redeemable shares are debt.`,
        ru: `ПОГАШАЕМЫЕ привилегированные акции нужно вернуть, по сути это заём.
# Шаг 1: Полученные деньги
  120,000 x $0.97 = $116,400
# Шаг 2: Куда идёт кредит
  Это долг, значит ОБЯЗАТЕЛЬСТВО, а не акционерный капитал
= Ответ: Дт Деньги $116,400, Кт Обязательство $116,400
! Частая ошибка: кредитовать акционерный капитал или эмиссионный доход. Они для обыкновенных акций; погашаемые — это долг.`,
        uz: `QAYTARILADIGAN imtiyozli aksiyalar qaytarilishi kerak, mohiyatan bu qarz.
# 1-qadam: Olingan pul
  120,000 x $0.97 = $116,400
# 2-qadam: Kredit qayerga boradi
  Bu qarz, demak MAJBURIYAT, ustav kapitali emas
= Javob: Dt Pul $116,400, Kt Majburiyat $116,400
! Ko'p uchraydigan xato: ustav kapitali yoki emissiya daromadini kreditlash. Ular oddiy aksiyalar uchun; qaytariladiganlar qarz.`,
      },
      options: [
        'Dr Cash $116,400, Cr Liability $116,400',
        'Dr Cash $116,400, Cr Share capital $120,000, Cr Share premium $3,600',
        'Dr Cash $116,400, Cr Share capital $116,400',
        'Dr Cash $116,400, Dr Profit or loss $3,600, Cr Share capital $120,000',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch15-q394',
      kitRef: 394,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which items in the statement of financial position change immediately after a bonus issue funded from retained earnings?',
      explanation: {
        en: `A bonus issue gives free shares. No cash moves; an amount just moves inside equity.
# The entry
  Dr Retained earnings, Cr Share capital
# So two lines change
  Retained earnings go down
  Share capital goes up
= Answer: share capital and retained earnings
! Common trap: choosing cash. A bonus issue brings in no money.`,
        ru: `Бонусная эмиссия даёт бесплатные акции. Деньги не двигаются; сумма лишь перемещается внутри капитала.
# Запись
  Дт Нераспределённая прибыль, Кт Акционерный капитал
# Значит меняются две строки
  Нераспределённая прибыль уменьшается
  Акционерный капитал растёт
= Ответ: акционерный капитал и нераспределённая прибыль
! Частая ошибка: выбрать деньги. Бонусная эмиссия не приносит денег.`,
        uz: `Bonus emissiya bepul aksiyalar beradi. Pul harakatlanmaydi; summa faqat kapital ichida ko'chadi.
# Yozuv
  Dt Taqsimlanmagan foyda, Kt Ustav kapitali
# Demak ikki qator o'zgaradi
  Taqsimlanmagan foyda kamayadi
  Ustav kapitali oshadi
= Javob: ustav kapitali va taqsimlanmagan foyda
! Ko'p uchraydigan xato: pulni tanlash. Bonus emissiya pul keltirmaydi.`,
      },
      options: [
        'Share capital and cash',
        'Share capital and retained earnings',
        'Share premium and cash',
        'Share premium and retained earnings',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q395',
      kitRef: 395,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company issued $500,000 of 12% loan notes for $475,000 on 1 August. What entries are needed in the year ended 30 September?',
      explanation: {
        en: `Record the cash actually received, but work interest out on the nominal (face) value.
# Step 1: The loan
  Cash received $475,000: Dr Bank, Cr Non-current liabilities $475,000
# Step 2: Interest for 1 August to 30 September
  $500,000 x 12% x 2/12 = $10,000
  Not yet paid, so accrue it: Dr Interest, Cr Current liabilities $10,000
= Answer: Dr Bank $475,000, Cr Non-current liabilities $475,000; Dr Interest $10,000, Cr Current liabilities $10,000
! Common trap: recording $500,000 of cash (only $475,000 came in), or working interest on $475,000 ($9,500).`,
        ru: `Записываем фактически полученные деньги, а проценты считаем от номинала.
# Шаг 1: Заём
  Получено $475,000: Дт Банк, Кт Долгосрочные обязательства $475,000
# Шаг 2: Проценты за 1 августа – 30 сентября
  $500,000 x 12% x 2/12 = $10,000
  Ещё не уплачены, начисляем: Дт Проценты, Кт Краткосрочные обязательства $10,000
= Ответ: Дт Банк $475,000, Кт Долгосрочные обязательства $475,000; Дт Проценты $10,000, Кт Краткосрочные обязательства $10,000
! Частая ошибка: записать $500,000 денег (пришло только $475,000) или считать проценты от $475,000 ($9,500).`,
        uz: `Haqiqatda olingan pulni yozamiz, foizni esa nominaldan hisoblaymiz.
# 1-qadam: Qarz
  Olingan $475,000: Dt Bank, Kt Uzoq muddatli majburiyatlar $475,000
# 2-qadam: 1 avgust – 30 sentyabr foizi
  $500,000 x 12% x 2/12 = $10,000
  Hali to'lanmagan, hisoblaymiz: Dt Foiz, Kt Qisqa muddatli majburiyatlar $10,000
= Javob: Dt Bank $475,000, Kt Uzoq muddatli majburiyatlar $475,000; Dt Foiz $10,000, Kt Qisqa muddatli majburiyatlar $10,000
! Ko'p uchraydigan xato: $500,000 pul yozish (faqat $475,000 kelgan) yoki foizni $475,000 dan hisoblash ($9,500).`,
      },
      options: [
        'Dr Bank $500,000, Cr Non-current liabilities $500,000; Dr Interest $9,500, Cr Current liabilities $9,500',
        'Dr Bank $475,000, Cr Non-current liabilities $475,000; Dr Interest $10,000, Cr Current liabilities $10,000',
        'Dr Bank $500,000, Cr Non-current liabilities $500,000; Dr Interest $10,000, Cr Current liabilities $10,000',
        'Dr Bank $475,000, Cr Non-current liabilities $475,000; Dr Interest $9,500, Cr Current liabilities $9,500',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q396',
      kitRef: 396,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company\'s reserves would decrease if it did which of these?',
      explanation: {
        en: `Reserves fall only when something leaves equity altogether.
- Paid a dividend: RIGHT. Cash goes to the owners and retained earnings fall.
- Issued shares at a premium: WRONG. Share premium RISES.
- Set aside profits for future dividends: WRONG. A move from one reserve to another; the total stays the same.
- Transferred to a general reserve: WRONG. Also a move between reserves.
= Answer: paid a dividend`,
        ru: `Резервы уменьшаются, только когда что-то совсем уходит из капитала.
- Выплачен дивиденд: ВЕРНО. Деньги уходят владельцам, нераспределённая прибыль уменьшается.
- Выпуск акций с премией: НЕВЕРНО. Эмиссионный доход РАСТЁТ.
- Отложить прибыль на будущие дивиденды: НЕВЕРНО. Перенос из одного резерва в другой, итог тот же.
- Перевод в общий резерв: НЕВЕРНО. Тоже перенос между резервами.
= Ответ: выплачен дивиденд`,
        uz: `Rezervlar faqat biror narsa kapitaldan butunlay chiqqanda kamayadi.
- Dividend to'landi: TO'G'RI. Pul egalarga ketadi, taqsimlanmagan foyda kamayadi.
- Aksiyalar mukofot bilan chiqarildi: NOTO'G'RI. Emissiya daromadi OSHADI.
- Kelgusi dividendlar uchun foyda ajratildi: NOTO'G'RI. Bir rezervdan boshqasiga ko'chish, jami o'zgarmaydi.
- Umumiy rezervga o'tkazildi: NOTO'G'RI. Bu ham rezervlar orasida ko'chish.
= Javob: dividend to'landi`,
      },
      options: [
        'Paid a dividend',
        'Issued shares at a premium',
        'Set aside profits to pay future dividends',
        'Transferred an amount into a general reserve',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch15-q397',
      kitRef: 397,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'A company revalued a building in the year. For each item, say where it goes in the statement of profit or loss and other comprehensive income.',
      explanation: {
        en: `Sort each item.
- Excess depreciation $2,500: OMITTED from this statement. It is a transfer from revaluation surplus to retained earnings, shown only in changes in equity.
- Revaluation increase $60,000: OTHER COMPREHENSIVE INCOME. A gain not yet realised.
- Depreciation charge $15,000: PROFIT OR LOSS. An ordinary expense, even on a revalued building.`,
        ru: `Распределим каждую статью.
- Избыточная амортизация $2,500: НЕ ВКЛЮЧАЕТСЯ в этот отчёт. Это перенос из резерва переоценки в нераспределённую прибыль, только в изменениях капитала.
- Прирост от переоценки $60,000: ПРОЧИЙ СОВОКУПНЫЙ ДОХОД. Доход ещё не реализован.
- Амортизация $15,000: ПРИБЫЛЬ ИЛИ УБЫТОК. Обычный расход, даже по переоценённому зданию.`,
        uz: `Har bir moddani ajratamiz.
- Ortiqcha amortizatsiya $2,500: bu hisobotga KIRITILMAYDI. Bu qayta baholash rezervidan taqsimlanmagan foydaga o'tkazma, faqat kapital o'zgarishlarida.
- Qayta baholash o'sishi $60,000: BOSHQA UMUMLASHGAN DAROMAD. Hali amalga oshmagan daromad.
- Amortizatsiya $15,000: FOYDA YOKI ZARAR. Qayta baholangan binoda ham oddiy xarajat.`,
      },
      columns: ['Profit or loss', 'Other comprehensive income', 'Omitted from this statement'],
      rows: [
        { text: 'Excess depreciation on revaluation of $2,500', correctIndex: 2 },
        { text: 'Increase in the carrying amount of the property of $60,000', correctIndex: 1 },
        { text: 'Depreciation charge of $15,000', correctIndex: 0 },
      ],
    },
    {
      id: 'ch15-q398',
      kitRef: 398,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company disposed of a revalued property. Its carrying amount was $180,000, the proceeds were $200,000, and the revaluation surplus at that date was $20,000. How is the disposal accounted for?',
      explanation: {
        en: `Two separate things happen on disposal of a revalued asset.
# Step 1: Gain on disposal
  Proceeds $200,000 - carrying amount $180,000 = $20,000
  A real gain: PROFIT OR LOSS
# Step 2: The old revaluation surplus
  The asset is sold, so the $20,000 surplus is now realised
  Move it inside equity: Dr Revaluation surplus, Cr Retained earnings $20,000
  It never goes through profit or loss
= Answer: a $20,000 gain in profit or loss, and $20,000 transferred from revaluation surplus to retained earnings
! Common trap: a $40,000 gain counts the surplus twice; it was already in equity.`,
        ru: `При выбытии переоценённого актива происходят две отдельные вещи.
# Шаг 1: Прибыль от выбытия
  Выручка $200,000 - балансовая стоимость $180,000 = $20,000
  Реальная прибыль: ПРИБЫЛЬ ИЛИ УБЫТОК
# Шаг 2: Старый резерв переоценки
  Актив продан, значит резерв $20,000 теперь реализован
  Переносим внутри капитала: Дт Резерв переоценки, Кт Нераспределённая прибыль $20,000
  Через прибыль или убыток он никогда не проходит
= Ответ: прибыль $20,000 в прибыли или убытке и перенос $20,000 из резерва переоценки в нераспределённую прибыль
! Частая ошибка: прибыль $40,000 считает резерв дважды; он уже был в капитале.`,
        uz: `Qayta baholangan aktiv chiqib ketganda ikki alohida narsa bo'ladi.
# 1-qadam: Chiqib ketishdan foyda
  Tushum $200,000 - balans qiymati $180,000 = $20,000
  Haqiqiy foyda: FOYDA YOKI ZARAR
# 2-qadam: Eski qayta baholash rezervi
  Aktiv sotildi, demak $20,000 rezerv endi amalga oshdi
  Kapital ichida ko'chiramiz: Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda $20,000
  U hech qachon foyda yoki zarardan o'tmaydi
= Javob: foyda yoki zararda $20,000 foyda va qayta baholash rezervidan taqsimlanmagan foydaga $20,000 o'tkazma
! Ko'p uchraydigan xato: $40,000 foyda rezervni ikki marta hisoblaydi; u allaqachon kapitalda edi.`,
      },
      options: [
        'A gain of $20,000 in profit or loss, and $20,000 transferred from revaluation surplus to retained earnings',
        'A gain of $40,000 in profit or loss only',
        'A gain of $20,000 in profit or loss and a revaluation gain of $20,000 in other comprehensive income',
        'A gain of $20,000 in profit or loss only',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch15-q399',
      kitRef: 399,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A business year ended on 31 August. (1) It sold a machine to a customer on 28 August, and the customer handles installation and operation after delivery. (2) It sold food mixers on credit to a customer who collected them on 26 August and has not yet paid. For which transactions is revenue recognised?',
      explanation: {
        en: `Revenue is earned when CONTROL of the goods passes, not when cash arrives.
- (1) Machine sold and delivered on 28 August: control passed before the year end, and the customer does its own installation, so nothing more is owed. REVENUE.
- (2) Mixers collected on 26 August, not yet paid: control passed. REVENUE, plus a receivable for the money.
= Answer: both 1 and 2`,
        ru: `Выручка возникает, когда переходит КОНТРОЛЬ над товаром, а не когда приходят деньги.
- (1) Станок продан и доставлен 28 августа: контроль перешёл до конца года, монтаж делает сам покупатель, больше ничего не должны. ВЫРУЧКА.
- (2) Миксеры забраны 26 августа, ещё не оплачены: контроль перешёл. ВЫРУЧКА плюс дебиторская задолженность.
= Ответ: и 1, и 2`,
        uz: `Tushum pul kelganda emas, tovar ustidan NAZORAT o'tganda topiladi.
- (1) Dastgoh 28 avgustda sotilib yetkazilgan: nazorat yil oxiridan oldin o'tgan, o'rnatishni mijozning o'zi qiladi, boshqa qarz yo'q. TUSHUM.
- (2) Mikserlar 26 avgustda olib ketilgan, hali to'lanmagan: nazorat o'tgan. TUSHUM va pul uchun debitorlik.
= Javob: 1 ham, 2 ham`,
      },
      options: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
      correctIndex: 2,
    },
    {
      id: 'ch15-q400',
      kitRef: 400,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company estimated income tax payable for the year at $18,000. The tax expense in the statement of profit or loss is $17,100. Which statement is true?',
      explanation: {
        en: `Expense = this year's estimate +/- last year's under or overprovision.
# Compare
  This year's estimate: $18,000
  Expense: $17,100, which is $900 LOWER
# What lowers the expense?
  Last year's tax was overestimated, and the extra $900 is given back through this year's charge
= Answer: an overprovision in the prior year
! Common trap: an underprovision would make the expense HIGHER than $18,000, not lower.`,
        ru: `Расход = оценка этого года +/- недо- или переначисление прошлого года.
# Сравним
  Оценка этого года: $18,000
  Расход: $17,100, на $900 МЕНЬШЕ
# Что уменьшает расход?
  Налог прошлого года переоценили, и лишние $900 возвращаются через расход этого года
= Ответ: переначисление прошлого года
! Частая ошибка: недоначисление сделало бы расход БОЛЬШЕ $18,000, а не меньше.`,
        uz: `Xarajat = bu yil bahosi +/- o'tgan yil kam yoki ortiqcha hisoblangani.
# Solishtiramiz
  Bu yil bahosi: $18,000
  Xarajat: $17,100, $900 KAM
# Xarajatni nima kamaytiradi?
  O'tgan yil solig'i ortiqcha baholangan, ortiqcha $900 bu yil xarajati orqali qaytadi
= Javob: o'tgan yilgi ortiqcha hisoblangan
! Ko'p uchraydigan xato: kam hisoblangan bo'lsa, xarajat $18,000 dan kam emas, KO'P bo'lardi.`,
      },
      options: [
        'The difference comes from an underprovision in the prior year',
        'The difference comes from an overprovision in the prior year',
        'It is not possible to tell which it is',
        'There is no relationship between the two amounts',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q401',
      kitRef: 401,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A training firm has a 31 December year end. In December: (1) twelve students paid $1,200 each in advance for a course that starts in January, made up of materials worth $240 and lectures worth $960, with materials given out on the first day; (2) it sold and delivered study materials to 50 self-study students at $300 each, with no further support. What revenue is recognised for the year?',
      explanation: {
        en: `Revenue counts only for what has been DELIVERED by 31 December.
# Course students: 12 x $1,200 = $14,400 paid in December
  The course and materials start in January: nothing supplied yet
  All $14,400 is deferred income, a liability
# Self-study students
  Materials sold and delivered, no more support: done
  50 x $300 = $15,000 revenue
= Answer: $15,000
! Common trap: counting the course materials ($240 x 12 = $2,880). They are handed out on the first day in January.`,
        ru: `Выручка — только за то, что ПОСТАВЛЕНО до 31 декабря.
# Студенты курса: 12 x $1,200 = $14,400 оплачено в декабре
  Курс и материалы начинаются в январе: ещё ничего не поставлено
  Все $14,400 — доходы будущих периодов, обязательство
# Студенты самоподготовки
  Материалы проданы и доставлены, поддержки больше нет: выполнено
  50 x $300 = $15,000 выручки
= Ответ: $15,000
! Частая ошибка: учесть материалы курса ($240 x 12 = $2,880). Их выдают в первый день в январе.`,
        uz: `Tushum faqat 31 dekabrgacha YETKAZILGAN narsa uchun.
# Kurs talabalari: dekabrda 12 x $1,200 = $14,400 to'langan
  Kurs va materiallar yanvarda boshlanadi: hali hech narsa berilmagan
  Hamma $14,400 kelgusi davr daromadi, majburiyat
# Mustaqil o'qiydigan talabalar
  Materiallar sotilib yetkazilgan, boshqa yordam yo'q: bajarilgan
  50 x $300 = $15,000 tushum
= Javob: $15,000
! Ko'p uchraydigan xato: kurs materiallarini hisoblash ($240 x 12 = $2,880). Ular yanvarda birinchi kuni beriladi.`,
      },
      correctValue: 15000,
      answerText: '$15,000',
    },
    {
      id: 'ch15-q402',
      kitRef: 402,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A retailer is the sole distributor of a new game. At its 31 July year end it held customer orders and deposits of $600,000. All orders will be despatched by 1 December. What revenue is recognised for the year ended 31 July?',
      explanation: {
        en: `Revenue needs the promise to be fulfilled, which here means the games being despatched.
# At 31 July
  Orders and deposits $600,000, but no games sent yet
  No performance obligation is satisfied
# The deposits
  Deferred income: a current liability until the games are despatched
= Answer: $0
! Common trap: recognising the deposits as revenue because cash was received.`,
        ru: `Для выручки обещание должно быть выполнено, здесь — игры отгружены.
# На 31 июля
  Заказы и задатки $600,000, но игры ещё не отправлены
  Ни одна обязанность не выполнена
# Задатки
  Доходы будущих периодов: краткосрочное обязательство до отгрузки
= Ответ: $0
! Частая ошибка: признать задатки выручкой, потому что деньги получены.`,
        uz: `Tushum uchun va'da bajarilishi kerak, bu yerda o'yinlar jo'natilishi.
# 31 iyulda
  Buyurtmalar va zakladlar $600,000, lekin o'yinlar hali jo'natilmagan
  Hech bir majburiyat bajarilmagan
# Zakladlar
  Kelgusi davr daromadi: jo'natilguncha qisqa muddatli majburiyat
= Javob: $0
! Ko'p uchraydigan xato: pul olingani uchun zakladlarni tushum deb tan olish.`,
      },
      correctValue: 0,
      answerText: '$0',
    },
    {
      id: 'ch15-q403',
      kitRef: 403,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A cleaning firm charges each business $1,440 a year, and service is provided evenly over time. It serves 15 businesses in one block. One customer ended its agreement with effect from 31 August, and two new contracts began on 1 December. Some customers pay a month in advance and some are a month behind, the same at the start and end of the year. What revenue is recognised for the year ended 31 March?',
      explanation: {
        en: `Service is given evenly, so revenue = $1,440 a year = $120 a month for each customer served.
# Step 1: Customers there all year
  15 - 1 that left = 14
  14 x $1,440 = $20,160
# Step 2: The customer that left on 31 August
  April to August = 5 months: 5 x $120 = $600
# Step 3: Two new customers from 1 December
  December to March = 4 months each: 2 x 4 x $120 = $960
# Step 4: Total
  $20,160 + $600 + $960 = $21,720
= Answer: $21,720
! Common trap: worrying about who pays in advance or behind. Revenue follows the service, and the timing is the same at both ends of the year anyway.`,
        ru: `Услуга оказывается равномерно, поэтому выручка = $1,440 в год = $120 в месяц за каждого клиента.
# Шаг 1: Клиенты, бывшие весь год
  15 - 1 ушедший = 14
  14 x $1,440 = $20,160
# Шаг 2: Клиент, ушедший 31 августа
  Апрель–август = 5 месяцев: 5 x $120 = $600
# Шаг 3: Два новых клиента с 1 декабря
  Декабрь–март = по 4 месяца: 2 x 4 x $120 = $960
# Шаг 4: Итого
  $20,160 + $600 + $960 = $21,720
= Ответ: $21,720
! Частая ошибка: беспокоиться, кто платит вперёд или с опозданием. Выручка следует за услугой, а сдвиг одинаков в начале и конце года.`,
        uz: `Xizmat bir tekis ko'rsatiladi, demak tushum = yiliga $1,440 = har bir mijoz uchun oyiga $120.
# 1-qadam: Yil bo'yi bo'lgan mijozlar
  15 - 1 ketgan = 14
  14 x $1,440 = $20,160
# 2-qadam: 31 avgustda ketgan mijoz
  Aprel–avgust = 5 oy: 5 x $120 = $600
# 3-qadam: 1 dekabrdan ikki yangi mijoz
  Dekabr–mart = har biri 4 oy: 2 x 4 x $120 = $960
# 4-qadam: Jami
  $20,160 + $600 + $960 = $21,720
= Javob: $21,720
! Ko'p uchraydigan xato: kim oldindan yoki kech to'lashi haqida qayg'urish. Tushum xizmatga ergashadi, siljish esa yil boshida ham, oxirida ham bir xil.`,
      },
      correctValue: 21720,
      answerText: '$21,720',
    },
    {
      id: 'ch15-q404',
      kitRef: 404,
      topicId: 'chapter-15',
      type: 'single',
      text: 'At 1 January a company had an estimated tax liability of $2,800, settled by a payment of $2,450. Because of a loss for the year it expects a tax repayment of $2,500. What amounts are included in the financial statements?',
      explanation: {
        en: `Two pieces make this year's tax figure: last year's correction and this year's refund.
# Step 1: Last year
  Estimated $2,800, paid $2,450: $350 was over-estimated (overprovision)
  That $350 reduces tax: income
# Step 2: This year
  A loss brings a refund of $2,500: tax income
# Step 3: Total in profit or loss
  $350 + $2,500 = $2,850 tax INCOME
# Step 4: Statement of financial position
  The $2,500 due back is a RECEIVABLE (a current asset)
= Answer: $2,850 tax income; $2,500 receivable
! Common trap: calling it an expense, or showing the refund as a payable. Money coming back is an asset.`,
        ru: `Две части дают налоговую цифру года: поправка прошлого года и возврат этого года.
# Шаг 1: Прошлый год
  Оценка $2,800, уплачено $2,450: $350 переоценили (переначисление)
  Эти $350 уменьшают налог: доход
# Шаг 2: Этот год
  Убыток даёт возврат $2,500: налоговый доход
# Шаг 3: Итого в прибыли или убытке
  $350 + $2,500 = $2,850 налоговый ДОХОД
# Шаг 4: Отчёт о финансовом положении
  $2,500 к возврату — ДЕБИТОРСКАЯ задолженность (оборотный актив)
= Ответ: налоговый доход $2,850; к получению $2,500
! Частая ошибка: назвать это расходом или показать возврат как кредиторскую задолженность. Возвращаемые деньги — актив.`,
        uz: `Yilning soliq sonini ikki qism beradi: o'tgan yil tuzatishi va bu yil qaytarilishi.
# 1-qadam: O'tgan yil
  Baho $2,800, to'langan $2,450: $350 ortiqcha baholangan (ortiqcha hisoblangan)
  Bu $350 soliqni kamaytiradi: daromad
# 2-qadam: Bu yil
  Zarar $2,500 qaytarishni beradi: soliq daromadi
# 3-qadam: Foyda yoki zararda jami
  $350 + $2,500 = $2,850 soliq DAROMADI
# 4-qadam: Moliyaviy holat hisoboti
  Qaytariladigan $2,500 — DEBITORLIK (aylanma aktiv)
= Javob: $2,850 soliq daromadi; $2,500 debitorlik
! Ko'p uchraydigan xato: buni xarajat deyish yoki qaytarishni kreditorlik deb ko'rsatish. Qaytadigan pul aktiv.`,
      },
      options: [
        '$2,850 tax expense; $2,150 receivable',
        '$2,500 tax income; $2,500 payable',
        '$2,850 tax income; $2,500 receivable',
        '$2,150 tax expense; $2,500 receivable',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q405',
      kitRef: 405,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company estimated its tax liability at $18,200 and settled it by paying $18,800. Having made a loss this year it expects a $5,000 repayment. What amounts are included in the financial statements?',
      explanation: {
        en: `Two pieces again: last year's correction and this year's refund.
# Step 1: Last year
  Estimated $18,200, paid $18,800: $600 short (underprovision)
  That $600 is an extra expense
# Step 2: This year
  A loss brings a refund of $5,000: tax income
# Step 3: Net in profit or loss
  $5,000 - $600 = $4,400 tax INCOME
# Step 4: Statement of financial position
  The $5,000 due back is a RECEIVABLE
= Answer: $4,400 tax income; $5,000 receivable
! Common trap: adding the $600 to the income ($5,600). An underprovision is a cost, so it reduces the income.`,
        ru: `Снова две части: поправка прошлого года и возврат этого года.
# Шаг 1: Прошлый год
  Оценка $18,200, уплачено $18,800: не хватило $600 (недоначисление)
  Эти $600 — дополнительный расход
# Шаг 2: Этот год
  Убыток даёт возврат $5,000: налоговый доход
# Шаг 3: Итого в прибыли или убытке
  $5,000 - $600 = $4,400 налоговый ДОХОД
# Шаг 4: Отчёт о финансовом положении
  $5,000 к возврату — ДЕБИТОРСКАЯ задолженность
= Ответ: налоговый доход $4,400; к получению $5,000
! Частая ошибка: прибавить $600 к доходу ($5,600). Недоначисление — расход, оно уменьшает доход.`,
        uz: `Yana ikki qism: o'tgan yil tuzatishi va bu yil qaytarilishi.
# 1-qadam: O'tgan yil
  Baho $18,200, to'langan $18,800: $600 yetmagan (kam hisoblangan)
  Bu $600 qo'shimcha xarajat
# 2-qadam: Bu yil
  Zarar $5,000 qaytarishni beradi: soliq daromadi
# 3-qadam: Foyda yoki zararda sof
  $5,000 - $600 = $4,400 soliq DAROMADI
# 4-qadam: Moliyaviy holat hisoboti
  Qaytariladigan $5,000 — DEBITORLIK
= Javob: $4,400 soliq daromadi; $5,000 debitorlik
! Ko'p uchraydigan xato: $600 ni daromadga qo'shish ($5,600). Kam hisoblangan xarajat, u daromadni kamaytiradi.`,
      },
      options: [
        '$5,000 tax income; $5,000 payable',
        '$4,400 tax expense; $5,000 payable',
        '$5,600 tax income; $5,000 receivable',
        '$4,400 tax income; $5,000 receivable',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q406',
      kitRef: 406,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which statement gives the full definition of aggregation?',
      explanation: {
        en: `The full definition names ALL the elements: assets, liabilities, equity, income, expenses and cash flows.
- First option: leaves out income and expenses.
- Second option: includes every element. RIGHT.
- Third option: leaves out equity.
- Fourth option: leaves out cash flows.
= Answer: assets, liabilities, equity, income and expenses, or cash flows, that share characteristics and are in the same classification`,
        ru: `Полное определение называет ВСЕ элементы: активы, обязательства, капитал, доходы, расходы и денежные потоки.
- Первый вариант: пропущены доходы и расходы.
- Второй вариант: есть все элементы. ВЕРНО.
- Третий вариант: пропущен капитал.
- Четвёртый вариант: пропущены денежные потоки.
= Ответ: активы, обязательства, капитал, доходы и расходы или денежные потоки, имеющие общие характеристики и одну классификацию`,
        uz: `To'liq ta'rif BARCHA elementlarni aytadi: aktivlar, majburiyatlar, kapital, daromadlar, xarajatlar va pul oqimlari.
- Birinchi variant: daromad va xarajatlar tushib qolgan.
- Ikkinchi variant: hamma element bor. TO'G'RI.
- Uchinchi variant: kapital tushib qolgan.
- To'rtinchi variant: pul oqimlari tushib qolgan.
= Javob: umumiy xususiyatga ega va bir tasnifdagi aktivlar, majburiyatlar, kapital, daromad va xarajatlar yoki pul oqimlari`,
      },
      options: [
        'Adding together assets, liabilities, equity or cash flows that share characteristics and are in the same classification',
        'Adding together assets, liabilities, equity, income and expenses, or cash flows, that share characteristics and are in the same classification',
        'Adding together assets, liabilities, income and expenses or cash flows that share characteristics and are in the same classification',
        'Adding together assets, liabilities, equity, income and expenses that share characteristics and are in the same classification',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q407',
      kitRef: 407,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which of these should be disclosed in the notes about intangible assets? (1) Accumulated amortisation at the start and end of the period. (2) A reconciliation of the movement in carrying amount. (3) A directors\' statement on whether capitalised development costs will be recovered.',
      explanation: {
        en: `Check each item against what the intangibles note needs.
- (1) Accumulated amortisation at the start and end: REQUIRED.
- (2) A reconciliation of the carrying amount: REQUIRED.
- (3) A directors' statement on recovering development costs: NOT required. Directors must already be sure of recovery before they capitalise, so no extra statement is needed.
= Answer: 1 and 2`,
        ru: `Сверим каждую статью с тем, что нужно в примечании о нематериальных активах.
- (1) Накопленная амортизация на начало и конец: ТРЕБУЕТСЯ.
- (2) Сверка балансовой стоимости: ТРЕБУЕТСЯ.
- (3) Заявление директоров о возмещении затрат на разработку: НЕ требуется. Директора должны быть уверены в возмещении ещё до капитализации, отдельное заявление не нужно.
= Ответ: 1 и 2`,
        uz: `Har bir moddani nomoddiy aktivlar izohiga nima kerakligi bilan solishtiramiz.
- (1) Boshi va oxiridagi jamg'arilgan amortizatsiya: TALAB QILINADI.
- (2) Balans qiymati solishtirmasi: TALAB QILINADI.
- (3) Ishlab chiqish xarajatlari qoplanishi haqida direktorlar bayonoti: talab QILINMAYDI. Direktorlar kapitallashtirishdan oldin qoplanishiga ishonch hosil qilishi kerak, alohida bayonot kerak emas.
= Javob: 1 va 2`,
      },
      options: ['1 only', '2 only', '1 and 2', '2 and 3'],
      correctIndex: 2,
    },
    {
      id: 'ch15-q408',
      kitRef: 408,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which is a suitable accounting policy note for intangible assets?',
      explanation: {
        en: `A good policy note is SPECIFIC: it names the model, the method and the period.
- Mixed cost and valuation at the directors' choice: WRONG. Too vague; directors cannot just pick as they like.
- Valuation by directors' estimate, gains to profit or loss: WRONG. Valuation needs an active market, and gains go to other comprehensive income.
- Cost model, straight line over 5 to 15 years: RIGHT. Model, method and period are all stated.
- Same policy as tangible assets: WRONG. Says nothing useful.
= Answer: the cost model, amortised straight line over useful lives of five to fifteen years`,
        ru: `Хорошее примечание о политике КОНКРЕТНО: называет модель, метод и срок.
- Смесь стоимости и оценки по выбору директоров: НЕВЕРНО. Слишком расплывчато; директора не могут выбирать как хотят.
- Оценка по мнению директоров, прирост в прибыль или убыток: НЕВЕРНО. Для оценки нужен активный рынок, а прирост идёт в прочий совокупный доход.
- Модель стоимости, линейно за 5–15 лет: ВЕРНО. Названы модель, метод и срок.
- Та же политика, что для материальных активов: НЕВЕРНО. Ничего полезного не говорит.
= Ответ: модель стоимости, линейная амортизация за срок полезного использования от пяти до пятнадцати лет`,
        uz: `Yaxshi siyosat izohi ANIQ: model, usul va muddatni aytadi.
- Direktorlar tanlovi bo'yicha tannarx va baholash aralashmasi: NOTO'G'RI. Juda noaniq; direktorlar xohlaganicha tanlay olmaydi.
- Direktorlar bahosi bo'yicha baholash, o'sish foyda yoki zararga: NOTO'G'RI. Baholash uchun faol bozor kerak, o'sish esa boshqa umumlashgan daromadga boradi.
- Tannarx modeli, 5–15 yil davomida to'g'ri chiziqli: TO'G'RI. Model, usul va muddat aytilgan.
- Moddiy aktivlar bilan bir xil siyosat: NOTO'G'RI. Foydali hech narsa aytmaydi.
= Javob: tannarx modeli, besh–o'n besh yillik foydali muddat davomida to'g'ri chiziqli amortizatsiya`,
      },
      options: [
        'Some intangibles use the cost model and others the valuation model, as the directors judge best, and all are written off over their useful lives',
        'Intangibles use the valuation model, based on the directors\' estimate, with all changes in value taken to profit or loss',
        'The entity uses the cost model. All intangibles are amortised on a straight-line basis over their useful lives of between five and fifteen years',
        'The entity uses the same policy for tangible and intangible assets',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q409',
      kitRef: 409,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which is a suitable accounting policy note for land and buildings?',
      explanation: {
        en: `Two facts to remember: land is NOT depreciated; buildings ARE, because they wear out.
- Land and buildings written off over 50 years: WRONG. Land must not be depreciated.
- Not depreciated because market value will rise: WRONG. Buildings still wear out, whatever the market does.
- At cost, with only the buildings written off over 50 years: RIGHT.
- Same policy as intangible assets: WRONG. Says nothing useful.
= Answer: land and buildings at cost, with buildings written off over 50 years on a straight-line basis`,
        ru: `Два факта: земля НЕ амортизируется; здания амортизируются, потому что изнашиваются.
- Земля и здания списываются за 50 лет: НЕВЕРНО. Землю амортизировать нельзя.
- Не амортизируются, так как рыночная цена вырастет: НЕВЕРНО. Здания всё равно изнашиваются, что бы ни делал рынок.
- По стоимости, и только здания списываются за 50 лет: ВЕРНО.
- Та же политика, что для нематериальных активов: НЕВЕРНО. Ничего полезного не говорит.
= Ответ: земля и здания по стоимости, здания списываются линейно за 50 лет`,
        uz: `Ikki fakt: yer amortizatsiya QILINMAYDI; binolar QILINADI, chunki ular eskiradi.
- Yer va binolar 50 yilda hisobdan chiqariladi: NOTO'G'RI. Yerni amortizatsiya qilib bo'lmaydi.
- Bozor narxi oshgani uchun amortizatsiya qilinmaydi: NOTO'G'RI. Bozor nima qilmasin, binolar baribir eskiradi.
- Tannarxda, faqat binolar 50 yilda chiqariladi: TO'G'RI.
- Nomoddiy aktivlar bilan bir xil siyosat: NOTO'G'RI. Foydali hech narsa aytmaydi.
= Javob: yer va binolar tannarxda, binolar 50 yil davomida to'g'ri chiziqli chiqariladi`,
      },
      options: [
        'Land and buildings are at cost and are written off over 50 years on a straight-line basis',
        'Land and buildings are at cost and are not depreciated, as the directors expect their market value to rise',
        'Land and buildings are at cost, and the buildings are written off over 50 years on a straight-line basis',
        'The entity uses the same policy for land and buildings as for intangible assets',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q410',
      kitRef: 410,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which is a suitable accounting policy note for inventory?',
      explanation: {
        en: `IAS 2: the LOWER of cost and NRV, compared ITEM BY ITEM.
- Lower of TOTAL cost and TOTAL NRV: WRONG. A loss on one item could hide behind a gain on another.
- Lower of cost and NRV for each item: RIGHT.
- HIGHER of cost and NRV: WRONG. That would overstate inventory.
- Cost only: WRONG. It ignores items worth less than they cost.
= Answer: the lower of cost and net realisable value for each separate item`,
        ru: `IAS 2: МЕНЬШАЯ из стоимости и ЧСР, сравнивают ПО КАЖДОЙ ПОЗИЦИИ.
- Меньшая из ОБЩЕЙ стоимости и ОБЩЕЙ ЧСР: НЕВЕРНО. Убыток по одной позиции спрячется за доходом по другой.
- Меньшая из стоимости и ЧСР по каждой позиции: ВЕРНО.
- БОЛЬШАЯ из стоимости и ЧСР: НЕВЕРНО. Это завысит запасы.
- Только стоимость: НЕВЕРНО. Не учитывает позиции, стоящие меньше своей стоимости.
= Ответ: меньшая из стоимости и чистой стоимости реализации по каждой отдельной позиции`,
        uz: `IAS 2: tannarx va SSQ ning KICHIGI, HAR BIR MODDA bo'yicha solishtiriladi.
- JAMI tannarx va JAMI SSQ ning kichigi: NOTO'G'RI. Bir moddadagi zarar boshqasidagi foyda ortiga yashirinadi.
- Har bir modda bo'yicha tannarx va SSQ ning kichigi: TO'G'RI.
- Tannarx va SSQ ning KATTASI: NOTO'G'RI. Bu zaxirani oshirib ko'rsatadi.
- Faqat tannarx: NOTO'G'RI. Tannarxidan arzon moddalarni hisobga olmaydi.
= Javob: har bir alohida modda bo'yicha tannarx va sof sotish qiymatining kichigi`,
      },
      options: [
        'Inventory is valued at the lower of total cost and total net realisable value',
        'Inventory is valued at the lower of cost and net realisable value for each separate item',
        'Inventory is valued at the higher of cost and net realisable value for each separate item',
        'Inventory is valued at cost for each separate item',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q411',
      kitRef: 411,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'State whether this statement is true or false.',
      explanation: {
        en: `Check the statement.
- Non-adjusting events can be ignored: FALSE. They do not change the figures, but if they are material a note must explain them, or readers would be misled.`,
        ru: `Проверим утверждение.
- Некорректирующие события можно игнорировать: НЕВЕРНО. Они не меняют цифры, но если существенны, их нужно раскрыть в примечании, иначе читатель будет введён в заблуждение.`,
        uz: `Fikrni tekshiramiz.
- Tuzatmaydigan voqealarni e'tiborsiz qoldirish mumkin: NOTO'G'RI. Ular sonlarni o'zgartirmaydi, lekin muhim bo'lsa izohda ochib berilishi kerak, aks holda o'quvchi adashadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Non-adjusting events can be ignored when preparing the annual financial statements and supporting notes',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch15-q412',
      kitRef: 412,
      topicId: 'chapter-15',
      type: 'single',
      text: 'What should be disclosed in the notes about a non-adjusting event? (1) The nature of the event. (2) The names of those responsible. (3) The geographical location. (4) An estimate of the financial effect.',
      explanation: {
        en: `IAS 10 asks for just two things in the note.
- (1) The nature of the event: REQUIRED.
- (2) Names of those responsible: NOT required.
- (3) The location: NOT required.
- (4) An estimate of the financial effect (or a statement that it cannot be estimated): REQUIRED.
= Answer: 1 and 4 only`,
        ru: `IAS 10 требует в примечании только две вещи.
- (1) Характер события: ТРЕБУЕТСЯ.
- (2) Имена виновных: НЕ требуется.
- (3) Место: НЕ требуется.
- (4) Оценка финансового эффекта (или заявление, что оценить нельзя): ТРЕБУЕТСЯ.
= Ответ: только 1 и 4`,
        uz: `IAS 10 izohda faqat ikki narsani talab qiladi.
- (1) Voqea mohiyati: TALAB QILINADI.
- (2) Aybdorlar ismlari: talab QILINMAYDI.
- (3) Joy: talab QILINMAYDI.
- (4) Moliyaviy ta'sir bahosi (yoki baholab bo'lmasligi haqida bayonot): TALAB QILINADI.
= Javob: faqat 1 va 4`,
      },
      options: ['1 and 2', '1, 3 and 4', '2, 3 and 4', '1 and 4 only'],
      correctIndex: 3,
    },
    {
      id: 'ch15-q413',
      kitRef: 413,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'For non-current assets, say whether each item should be disclosed in the notes.',
      explanation: {
        en: `All four are required in the non-current assets note.
- Reconciliation of carrying amounts, start to end: DISCLOSED. It is the movements table.
- Useful lives or depreciation rates: DISCLOSED. One of the two, in words.
- Increases from revaluations: DISCLOSED. A line in the movements table.
- Depreciation expense for the period: DISCLOSED. A line in the movements table.`,
        ru: `В примечании о внеоборотных активах нужны все четыре.
- Сверка балансовой стоимости с начала до конца: РАСКРЫВАЕТСЯ. Это таблица движения.
- Сроки полезного использования или нормы амортизации: РАСКРЫВАЕТСЯ. Одно из двух, словами.
- Увеличения от переоценки: РАСКРЫВАЕТСЯ. Строка таблицы движения.
- Амортизация за период: РАСКРЫВАЕТСЯ. Строка таблицы движения.`,
        uz: `Uzoq muddatli aktivlar izohida to'rttasi ham kerak.
- Boshidan oxirigacha balans qiymati solishtirmasi: OCHIB BERILADI. Bu harakat jadvali.
- Foydali muddatlar yoki amortizatsiya stavkalari: OCHIB BERILADI. Ikkalasidan biri, so'z bilan.
- Qayta baholashdan oshishlar: OCHIB BERILADI. Harakat jadvalidagi qator.
- Davr amortizatsiyasi: OCHIB BERILADI. Harakat jadvalidagi qator.`,
      },
      columns: ['Disclosed', 'Not disclosed'],
      rows: [
        { text: 'A reconciliation of carrying amounts at the start and end of the period', correctIndex: 0 },
        { text: 'Useful lives of assets or depreciation rates used', correctIndex: 0 },
        { text: 'Increases in asset values from revaluations in the period', correctIndex: 0 },
        { text: 'Depreciation expense for the period', correctIndex: 0 },
      ],
    },
    {
      id: 'ch15-q414',
      kitRef: 414,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'IFRS 18 requires certain items in the statement of profit or loss. With expenses classified by function, is each item presented there?',
      explanation: {
        en: `With expenses by function, ask of each item: does IFRS 18 require its own line in profit or loss?
- Revenue: PRESENTED. Always a required line.
- Closing inventory: NOT presented. It is an asset in the statement of financial position (it is used inside cost of sales, not shown as a line).
- Interest expense: PRESENTED. A required line in the financing category.
- Dividends paid: NOT presented. They go in the statement of changes in equity.
- Income tax expense: PRESENTED. A required line.
- Depreciation: NOT presented. By function, it sits inside cost of sales, distribution or admin, and is disclosed in the notes.`,
        ru: `При расходах по функциям спросим о каждой статье: требует ли IFRS 18 отдельной строки в прибыли или убытке?
- Выручка: ПРЕДСТАВЛЯЕТСЯ. Всегда обязательная строка.
- Запасы на конец: НЕ представляются. Это актив в отчёте о финансовом положении (используются внутри себестоимости, отдельной строкой не показываются).
- Процентный расход: ПРЕДСТАВЛЯЕТСЯ. Обязательная строка в финансовой категории.
- Выплаченные дивиденды: НЕ представляются. Они в отчёте об изменениях в капитале.
- Расход по налогу на прибыль: ПРЕДСТАВЛЯЕТСЯ. Обязательная строка.
- Амортизация: НЕ представляется. По функциям она внутри себестоимости, сбыта или администрации и раскрывается в примечаниях.`,
        uz: `Xarajatlar funksiya bo'yicha bo'lsa, har bir modda haqida so'raymiz: IFRS 18 foyda yoki zararda alohida qator talab qiladimi?
- Tushum: KO'RSATILADI. Har doim majburiy qator.
- Yakuniy zaxira: KO'RSATILMAYDI. Bu moliyaviy holat hisobotidagi aktiv (tannarx ichida ishlatiladi, qator sifatida ko'rsatilmaydi).
- Foiz xarajati: KO'RSATILADI. Moliyaviy toifadagi majburiy qator.
- To'langan dividendlar: KO'RSATILMAYDI. Ular kapitaldagi o'zgarishlar hisobotida.
- Foyda solig'i xarajati: KO'RSATILADI. Majburiy qator.
- Amortizatsiya: KO'RSATILMAYDI. Funksiya bo'yicha u tannarx, sotish yoki ma'muriy ichida va izohlarda ochib beriladi.`,
      },
      columns: ['Presented', 'Not presented'],
      rows: [
        { text: 'Revenue', correctIndex: 0 },
        { text: 'Closing inventory', correctIndex: 1 },
        { text: 'Interest expense', correctIndex: 0 },
        { text: 'Dividends paid', correctIndex: 1 },
        { text: 'Income tax expense', correctIndex: 0 },
        { text: 'Depreciation expense for the year', correctIndex: 1 },
      ],
    },
    {
      id: 'ch15-q415',
      kitRef: 415,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which statement about disclosure requirements is true?',
      explanation: {
        en: `Notes are part of the financial statements, and they use both numbers and words.
- Only monetary: WRONG. Policies are written in words.
- Only narrative: WRONG. Movement tables are numbers.
- Both monetary and narrative: RIGHT.
- Notes are not part of the statements: WRONG. They are part of the full set.
= Answer: they are both monetary and narrative`,
        ru: `Примечания — часть финансовой отчётности, в них есть и цифры, и слова.
- Только денежные: НЕВЕРНО. Политика описывается словами.
- Только описательные: НЕВЕРНО. Таблицы движения — это цифры.
- И денежные, и описательные: ВЕРНО.
- Примечания не входят в отчётность: НЕВЕРНО. Они часть полного комплекта.
= Ответ: и денежные, и описательные`,
        uz: `Izohlar moliyaviy hisobotning qismi va ularda ham sonlar, ham so'zlar bor.
- Faqat pul ko'rinishida: NOTO'G'RI. Siyosat so'z bilan yoziladi.
- Faqat tavsifiy: NOTO'G'RI. Harakat jadvallari — sonlar.
- Ham pul, ham tavsifiy: TO'G'RI.
- Izohlar hisobotga kirmaydi: NOTO'G'RI. Ular to'liq to'plamning qismi.
= Javob: ham pul, ham tavsifiy`,
      },
      options: [
        'They are only monetary',
        'They are only narrative',
        'They are both monetary and narrative',
        'Disclosure notes are not part of the annual financial statements',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q416',
      kitRef: 416,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'State whether this statement about property, plant and equipment disclosures is true or false.',
      explanation: {
        en: `Check the statement.
- Useful lives AND depreciation rates must both be disclosed: FALSE. Either one is enough: a 10% straight-line rate already tells you the life is 10 years.`,
        ru: `Проверим утверждение.
- Нужно раскрыть И сроки полезного использования, И нормы амортизации: НЕВЕРНО. Достаточно одного: линейная норма 10% уже говорит, что срок 10 лет.`,
        uz: `Fikrni tekshiramiz.
- Foydali muddatlar HAM, amortizatsiya stavkalari HAM ochib berilishi kerak: NOTO'G'RI. Bittasi yetarli: 10% to'g'ri chiziqli stavka muddat 10 yil ekanini aytadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'The estimated useful lives AND the depreciation rates used must both be disclosed',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch15-q417',
      kitRef: 417,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which of these is NOT required to be disclosed for a provision?',
      explanation: {
        en: `IAS 37 asks for the nature, the timing and the uncertainties of a provision.
- Nature of the obligation: required.
- Expected timing of payment: required.
- Name of the party owed: NOT required. It could also hurt the business, for example in a legal dispute.
- Uncertainties about the amount: required.
= Answer: the name of the party owed`,
        ru: `IAS 37 требует характер, сроки и неопределённости резерва.
- Характер обязательства: требуется.
- Ожидаемые сроки оплаты: требуется.
- Имя того, кому должны: НЕ требуется. Это могло бы и навредить бизнесу, например в судебном споре.
- Неопределённости по сумме: требуется.
= Ответ: имя того, кому должны`,
        uz: `IAS 37 rezervning mohiyati, muddati va noaniqliklarini talab qiladi.
- Majburiyat mohiyati: talab qilinadi.
- To'lovning kutilgan muddati: talab qilinadi.
- Qarz berilgan tomon nomi: talab QILINMAYDI. Bu biznesga zarar ham yetkazishi mumkin, masalan sud nizosida.
- Summa bo'yicha noaniqliklar: talab qilinadi.
= Javob: qarz berilgan tomon nomi`,
      },
      options: [
        'The nature of the obligation',
        'The expected timing of any payment',
        'The name of the party owed',
        'The uncertainties that may affect the amount',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q418',
      kitRef: 418,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'State whether this statement about provision disclosures is true or false.',
      explanation: {
        en: `Check the statement.
- Only the opening and closing amounts, with no reconciliation: FALSE. The note must show HOW it moved: increases, amounts used and amounts released, as well as the two balances.`,
        ru: `Проверим утверждение.
- Только начальная и конечная суммы без сверки: НЕВЕРНО. Примечание должно показать, КАК резерв двигался: увеличения, использование и восстановление, а не только два остатка.`,
        uz: `Fikrni tekshiramiz.
- Faqat boshlang'ich va yakuniy summa, solishtirmasiz: NOTO'G'RI. Izoh rezerv QANDAY o'zgarganini ko'rsatishi kerak: oshishlar, ishlatilgani va qaytarilgani, faqat ikki qoldiq emas.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'An entity need only state the carrying amount at the start and end of the period, with no reconciliation of the movement',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch15-q419',
      kitRef: 419,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which of these must be disclosed for non-current assets? (1) The depreciation charge for the year. (2) The amortisation charge for the year. (3) The date of any revaluation. (4) Whether an independent valuer was used.',
      explanation: {
        en: `Check each item for the non-current assets notes.
- (1) Depreciation charge: REQUIRED. A line in the PPE movements table.
- (2) Amortisation charge: REQUIRED. A line in the intangibles movements table.
- (3) Date of revaluation: REQUIRED for revalued assets.
- (4) Whether the valuer was independent: REQUIRED for revalued assets.
= Answer: 1, 2, 3 and 4`,
        ru: `Проверим каждую статью для примечаний о внеоборотных активах.
- (1) Амортизация основных средств: ТРЕБУЕТСЯ. Строка таблицы движения ОС.
- (2) Амортизация нематериальных активов: ТРЕБУЕТСЯ. Строка таблицы движения НМА.
- (3) Дата переоценки: ТРЕБУЕТСЯ для переоценённых активов.
- (4) Был ли оценщик независимым: ТРЕБУЕТСЯ для переоценённых активов.
= Ответ: 1, 2, 3 и 4`,
        uz: `Uzoq muddatli aktivlar izohlari uchun har bir moddani tekshiramiz.
- (1) Asosiy vositalar amortizatsiyasi: TALAB QILINADI. AV harakat jadvalidagi qator.
- (2) Nomoddiy aktivlar amortizatsiyasi: TALAB QILINADI. NA harakat jadvalidagi qator.
- (3) Qayta baholash sanasi: qayta baholangan aktivlar uchun TALAB QILINADI.
- (4) Baholovchi mustaqil bo'lganmi: qayta baholangan aktivlar uchun TALAB QILINADI.
= Javob: 1, 2, 3 va 4`,
      },
      options: ['1, 2 and 3 only', '2, 3 and 4 only', '1, 3 and 4 only', '1, 2, 3 and 4'],
      correctIndex: 3,
    },
    {
      id: 'ch15-q420',
      kitRef: 420,
      topicId: 'chapter-15',
      type: 'single',
      text: 'How are intangible assets presented in the statement of financial position?',
      explanation: {
        en: `An intangible is shown like a tangible asset: what it cost (or its valuation), less what has been used up.
- Disposal proceeds: WRONG. It has not been sold.
- Cost or valuation, less amortisation and impairment: RIGHT.
- Cost only: WRONG. It ignores the wearing out and any fall in value.
- Amortisation only: WRONG. That is the used-up part, not what is left.
= Answer: at cost or valuation, less amortisation and impairment`,
        ru: `Нематериальный актив показывают как материальный: стоимость (или оценка) минус то, что уже израсходовано.
- Выручка от продажи: НЕВЕРНО. Он не продан.
- Стоимость или оценка минус амортизация и обесценение: ВЕРНО.
- Только стоимость: НЕВЕРНО. Не учитывает износ и падение стоимости.
- Только амортизация: НЕВЕРНО. Это израсходованная часть, а не остаток.
= Ответ: по стоимости или оценке минус амортизация и обесценение`,
        uz: `Nomoddiy aktiv moddiy kabi ko'rsatiladi: tannarx (yoki baho) minus ishlatib bo'lingan qism.
- Sotish tushumi: NOTO'G'RI. U sotilmagan.
- Tannarx yoki baho minus amortizatsiya va qadrsizlanish: TO'G'RI.
- Faqat tannarx: NOTO'G'RI. Eskirish va qiymat tushishini hisobga olmaydi.
- Faqat amortizatsiya: NOTO'G'RI. Bu ishlatilgan qism, qolgani emas.
= Javob: tannarx yoki bahoda, minus amortizatsiya va qadrsizlanish`,
      },
      options: [
        'At the disposal proceeds value',
        'At cost or valuation, less amortisation and impairment',
        'At cost only, ignoring amortisation or impairment',
        'At the amortisation amount only',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q421',
      kitRef: 421,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A warranty provision note shows: brought forward $6,000; increase in provision $1,200; payments for warranty repairs ($2,900); carried forward $4,300. What is the warranty expense in the statement of profit or loss?',
      explanation: {
        en: `The expense is the amount ADDED to the provision this year.
# Read the note
  Opening $6,000
  Increase in provision + $1,200: Dr Warranty expense, Cr Provision. This is the expense
  Repairs paid - $2,900: Dr Provision, Cr Cash. The provision is used up; not a new expense
  Closing $4,300
= Answer: a debit (expense) of $1,200
! Common trap: $1,700 is the fall in the balance ($6,000 - $4,300). The payments were already covered by earlier expenses.`,
        ru: `Расход — сумма, ДОБАВЛЕННАЯ к резерву в этом году.
# Читаем примечание
  Начало $6,000
  Увеличение резерва + $1,200: Дт Расход по гарантиям, Кт Резерв. Это и есть расход
  Оплаченный ремонт - $2,900: Дт Резерв, Кт Деньги. Резерв использован; это не новый расход
  Конец $4,300
= Ответ: дебет (расход) $1,200
! Частая ошибка: $1,700 — снижение остатка ($6,000 - $4,300). Платежи уже были покрыты прошлыми расходами.`,
        uz: `Xarajat — bu yil rezervga QO'SHILGAN summa.
# Izohni o'qiymiz
  Boshi $6,000
  Rezerv oshishi + $1,200: Dt Kafolat xarajati, Kt Rezerv. Bu xarajat
  To'langan ta'mir - $2,900: Dt Rezerv, Kt Pul. Rezerv ishlatildi; yangi xarajat emas
  Oxiri $4,300
= Javob: $1,200 debet (xarajat)
! Ko'p uchraydigan xato: $1,700 qoldiq kamayishi ($6,000 - $4,300). To'lovlar oldingi xarajatlar bilan qoplangan.`,
      },
      options: ['Debit of $1,200', 'Credit of $1,200', 'Credit of $1,700', 'Debit of $1,700'],
      correctIndex: 0,
    },
    {
      id: 'ch15-q422',
      kitRef: 422,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A draft note for property, plant and equipment shows cost, a revaluation of land and buildings, accumulated depreciation and additions, with no disposals. Which should be added to complete it? (1) The date of the revaluation. (2) Whether an independent valuer was used. (3) The carrying amount of land and buildings had they not been revalued. (4) The total carrying amount of each class at the start and end of the period.',
      explanation: {
        en: `Check each item against what a PPE note with a revaluation needs.
- (1) Date of the revaluation: REQUIRED.
- (2) Whether the valuer was independent: REQUIRED.
- (3) Carrying amount had the assets not been revalued: REQUIRED.
- (4) Total carrying amount of each class at the start and end: REQUIRED. It completes the movements table.
= Answer: 1, 2, 3 and 4`,
        ru: `Сверим каждую статью с тем, что нужно в примечании об ОС с переоценкой.
- (1) Дата переоценки: ТРЕБУЕТСЯ.
- (2) Был ли оценщик независимым: ТРЕБУЕТСЯ.
- (3) Балансовая стоимость без переоценки: ТРЕБУЕТСЯ.
- (4) Общая балансовая стоимость каждого класса на начало и конец: ТРЕБУЕТСЯ. Она завершает таблицу движения.
= Ответ: 1, 2, 3 и 4`,
        uz: `Har bir moddani qayta baholangan AV izohiga nima kerakligi bilan solishtiramiz.
- (1) Qayta baholash sanasi: TALAB QILINADI.
- (2) Baholovchi mustaqil bo'lganmi: TALAB QILINADI.
- (3) Qayta baholanmaganda balans qiymati: TALAB QILINADI.
- (4) Har bir sinfning boshi va oxiridagi jami balans qiymati: TALAB QILINADI. U harakat jadvalini to'ldiradi.
= Javob: 1, 2, 3 va 4`,
      },
      options: ['1 and 4 only', '1, 2 and 3 only', '4 only', '1, 2, 3 and 4'],
      correctIndex: 3,
    },
    {
      id: 'ch15-q423',
      kitRef: 423,
      topicId: 'chapter-15',
      type: 'single',
      text: 'What should be disclosed in the notes for a material non-adjusting event?',
      explanation: {
        en: `IAS 10 asks for two things about a material non-adjusting event.
- Where it happened: WRONG. Not required.
- A lawyer's letter: WRONG. Not required.
- Nothing: WRONG. A material event must be disclosed, or readers would be misled.
- The nature of the event and its estimated financial effect: RIGHT.
= Answer: the nature of the event and its estimated financial effect`,
        ru: `IAS 10 требует две вещи о существенном некорректирующем событии.
- Где оно произошло: НЕВЕРНО. Не требуется.
- Письмо юриста: НЕВЕРНО. Не требуется.
- Ничего: НЕВЕРНО. Существенное событие нужно раскрыть, иначе читатель будет введён в заблуждение.
- Характер события и оценка его финансового эффекта: ВЕРНО.
= Ответ: характер события и оценка его финансового эффекта`,
        uz: `IAS 10 muhim tuzatmaydigan voqea haqida ikki narsani talab qiladi.
- Qayerda sodir bo'lgani: NOTO'G'RI. Talab qilinmaydi.
- Yurist xati: NOTO'G'RI. Talab qilinmaydi.
- Hech narsa: NOTO'G'RI. Muhim voqea ochib berilishi kerak, aks holda o'quvchi adashadi.
- Voqea mohiyati va uning moliyaviy ta'siri bahosi: TO'G'RI.
= Javob: voqea mohiyati va uning moliyaviy ta'siri bahosi`,
      },
      options: [
        'Where the event took place',
        'A letter from the company\'s lawyer',
        'Nothing',
        'The nature of the event and its estimated financial effect',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q424',
      kitRef: 424,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'A company\'s year ended on 30 September. Its statements were approved on 12 January and issued on 20 February. Is each event adjusting or non-adjusting?',
      explanation: {
        en: `For each event ask: was the problem already there on 30 September?
- Flood on 3 October: NON-ADJUSTING. A new event after the year end.
- Customer insolvent on 20 December: ADJUSTING. The debt was already doubtful at 30 September; this confirms it.
- Inventory costing $900 sold for $720 in November: ADJUSTING. It shows the goods were worth less than cost at the year end.
- Dividend declared on 1 December: NON-ADJUSTING. There was no obligation at the year end.`,
        ru: `По каждому событию спросим: была ли проблема уже 30 сентября?
- Наводнение 3 октября: НЕКОРРЕКТИРУЮЩЕЕ. Новое событие после конца года.
- Покупатель неплатёжеспособен 20 декабря: КОРРЕКТИРУЮЩЕЕ. Долг был сомнительным уже 30 сентября; это подтверждение.
- Запасы стоимостью $900 проданы за $720 в ноябре: КОРРЕКТИРУЮЩЕЕ. Показывает, что на конец года товар стоил меньше стоимости.
- Дивиденд объявлен 1 декабря: НЕКОРРЕКТИРУЮЩЕЕ. На конец года обязательства не было.`,
        uz: `Har bir voqea uchun so'raymiz: muammo 30 sentyabrda allaqachon bormidi?
- 3 oktyabrdagi suv toshqini: TUZATMAYDIGAN. Yil oxiridan keyingi yangi voqea.
- 20 dekabrda mijoz to'lovga qobiliyatsiz: TUZATUVCHI. Qarz 30 sentyabrdayoq shubhali edi; bu tasdiq.
- $900 lik zaxira noyabrda $720 ga sotildi: TUZATUVCHI. Yil oxirida tovar tannarxidan arzon bo'lganini ko'rsatadi.
- 1 dekabrda dividend e'lon qilindi: TUZATMAYDIGAN. Yil oxirida majburiyat yo'q edi.`,
      },
      columns: ['Adjusting', 'Non-adjusting'],
      rows: [
        { text: 'A flood on 3 October destroyed a small amount of inventory costing $1,900', correctIndex: 1 },
        {
          text: 'A customer with a balance owing at 30 September was declared insolvent on 20 December',
          correctIndex: 0,
        },
        {
          text: 'Inventory valued at cost of $900 at 30 September was sold for $720 on 11 November',
          correctIndex: 0,
        },
        { text: 'An equity dividend of 5 cents per share was declared on 1 December', correctIndex: 1 },
      ],
    },
    {
      id: 'ch15-q425',
      kitRef: 425,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which statements are correct under IAS 10? (1) Details of all adjusting events must be disclosed in the notes. (2) A material loss on selling, after the reporting date, inventory held at cost must be reflected in the statements. (3) If the market value of property, plant and equipment falls materially after the reporting date, details must be disclosed. (4) Events after the reporting period are those between the reporting date and the date the statements are approved.',
      explanation: {
        en: `Test each statement.
- (1) All adjusting events must be described in the notes: FALSE. Adjusting events change the FIGURES; they are not written up as notes.
- (2) A material loss on selling year-end inventory below cost must be reflected: TRUE. It is adjusting.
- (3) A material fall in PPE market value after the year end must be disclosed: TRUE. It is non-adjusting but material, so it needs a note.
- (4) The period runs from the reporting date to the approval date: TRUE.
= Answer: 2, 3 and 4`,
        ru: `Проверим каждое утверждение.
- (1) Все корректирующие события описывают в примечаниях: НЕВЕРНО. Корректирующие события меняют ЦИФРЫ; примечаниями их не описывают.
- (2) Существенный убыток от продажи запасов ниже стоимости нужно отразить: ВЕРНО. Это корректирующее.
- (3) О существенном падении рыночной стоимости ОС после конца года нужно сообщить: ВЕРНО. Оно некорректирующее, но существенное, нужно примечание.
- (4) Период — от отчётной даты до даты утверждения: ВЕРНО.
= Ответ: 2, 3 и 4`,
        uz: `Har bir fikrni tekshiramiz.
- (1) Barcha tuzatuvchi voqealar izohlarda yoziladi: NOTO'G'RI. Tuzatuvchi voqealar SONLARNI o'zgartiradi; izoh sifatida yozilmaydi.
- (2) Zaxirani tannarxdan arzon sotishdagi muhim zarar aks ettirilishi kerak: TO'G'RI. Bu tuzatuvchi.
- (3) Yil oxiridan keyin AV bozor qiymatining muhim tushishi ochib berilishi kerak: TO'G'RI. Tuzatmaydigan, lekin muhim, izoh kerak.
- (4) Davr hisobot sanasidan tasdiqlash sanasigacha: TO'G'RI.
= Javob: 2, 3 va 4`,
      },
      options: ['1 and 2', '1, 3 and 4', '2 and 3 only', '2, 3 and 4'],
      correctIndex: 3,
    },
    {
      id: 'ch15-q426',
      kitRef: 426,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company\'s year ended on 30 September, and its statements were approved on 14 December. (1) On 13 December a fire destroyed all inventory, and the directors consider the business no longer a going concern. (2) A customer owing a balance at 30 September was declared bankrupt on 12 December. (3) An equity dividend of 6 cents per share was declared on 1 December. (4) Inventory valued at cost of $900 was sold for $720 on 11 November. Which would NOT result in amounts being adjusted?',
      explanation: {
        en: `Ask which items change the amounts.
- (1) Fire on 13 December, business no longer a going concern: the fire is new, BUT the whole basis of the accounts changes, so the figures ARE changed.
- (2) Customer bankrupt on 12 December: ADJUSTING. Amounts change.
- (3) Dividend declared on 1 December: NON-ADJUSTING. Amounts do NOT change.
- (4) Inventory sold below cost on 11 November: ADJUSTING. Amounts change.
= Answer: 3 only
! Common trap: choosing the fire. A non-adjusting event that destroys going concern still changes the figures.`,
        ru: `Спросим, какие статьи меняют суммы.
- (1) Пожар 13 декабря, бизнес больше не непрерывен: пожар новый, НО меняется вся основа отчётности, значит цифры МЕНЯЮТСЯ.
- (2) Покупатель обанкротился 12 декабря: КОРРЕКТИРУЮЩЕЕ. Суммы меняются.
- (3) Дивиденд объявлен 1 декабря: НЕКОРРЕКТИРУЮЩЕЕ. Суммы НЕ меняются.
- (4) Запасы проданы ниже стоимости 11 ноября: КОРРЕКТИРУЮЩЕЕ. Суммы меняются.
= Ответ: только 3
! Частая ошибка: выбрать пожар. Некорректирующее событие, разрушающее непрерывность, всё равно меняет цифры.`,
        uz: `Qaysi moddalar summalarni o'zgartirishini so'raymiz.
- (1) 13 dekabrdagi yong'in, biznes endi uzluksiz emas: yong'in yangi, LEKIN hisobotning butun asosi o'zgaradi, demak sonlar O'ZGARADI.
- (2) 12 dekabrda mijoz bankrot: TUZATUVCHI. Summalar o'zgaradi.
- (3) 1 dekabrda dividend e'lon qilindi: TUZATMAYDIGAN. Summalar O'ZGARMAYDI.
- (4) 11 noyabrda zaxira tannarxdan arzon sotildi: TUZATUVCHI. Summalar o'zgaradi.
= Javob: faqat 3
! Ko'p uchraydigan xato: yong'inni tanlash. Uzluksizlikni buzadigan tuzatmaydigan voqea baribir sonlarni o'zgartiradi.`,
      },
      options: ['2 and 3', '3 only', '3 and 4', '1 and 3'],
      correctIndex: 1,
    },
    {
      id: 'ch15-q427',
      kitRef: 427,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A company has a year end of 31 January. Which of these, happening before the statements are approved, are adjusting events? (1) It paid an equity dividend of $12,000 on 28 February, proposed on 20 January. (2) On 15 February it was notified of a claim about a faulty product sold in January. (3) On 5 February it learned that a major credit customer was insolvent.',
      explanation: {
        en: `For each item ask: does it give evidence about conditions on 31 January?
- (1) Dividend proposed 20 January, paid 28 February: NOT adjusting. IAS 10 does not allow a dividend to be treated as adjusting.
- (2) Claim about a faulty product sold in January: ADJUSTING. The fault existed at the year end.
- (3) Major customer found insolvent on 5 February: ADJUSTING. The debt was already doubtful at the year end.
= Answer: 2 and 3`,
        ru: `По каждой статье спросим: даёт ли она сведения о положении на 31 января?
- (1) Дивиденд предложен 20 января, выплачен 28 февраля: НЕ корректирующее. IAS 10 не позволяет считать дивиденд корректирующим.
- (2) Претензия о бракованном товаре, проданном в январе: КОРРЕКТИРУЮЩЕЕ. Брак был на конец года.
- (3) Крупный покупатель признан неплатёжеспособным 5 февраля: КОРРЕКТИРУЮЩЕЕ. Долг был сомнительным уже на конец года.
= Ответ: 2 и 3`,
        uz: `Har bir modda uchun so'raymiz: u 31 yanvardagi holat haqida dalil beradimi?
- (1) Dividend 20 yanvarda taklif qilingan, 28 fevralda to'langan: tuzatuvchi EMAS. IAS 10 dividendni tuzatuvchi deb hisoblashga yo'l qo'ymaydi.
- (2) Yanvarda sotilgan nuqsonli mahsulot bo'yicha da'vo: TUZATUVCHI. Nuqson yil oxirida bor edi.
- (3) 5 fevralda yirik mijoz to'lovga qobiliyatsiz deb topildi: TUZATUVCHI. Qarz yil oxiridayoq shubhali edi.
= Javob: 2 va 3`,
      },
      options: ['1, 2 and 3', '2 and 3', '1 and 3', '2 only'],
      correctIndex: 1,
    },
    {
      id: 'ch15-q428',
      kitRef: 428,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Between the year end of 30 November and approval on 31 January a company learned that (1) a customer has started legal action over faulty products supplied in December, and (2) a former employee is suing for unfair dismissal in November. Both claims are likely to succeed and are material. How are they reported?',
      explanation: {
        en: `Ask when the cause of each claim happened, compared with the 30 November year end.
# Claim 1: faulty products supplied in December
  The cause is AFTER the year end: non-adjusting
  It is material, so DISCLOSE it in a note
# Claim 2: unfair dismissal in November
  The cause is BEFORE the year end: adjusting
  Likely to succeed, so PROVIDE for it
= Answer: disclose claim 1; provide for claim 2
! Common trap: looking at when the claim ARRIVED. Both arrived after the year end; what matters is when the event behind it happened.`,
        ru: `Спросим, когда возникла причина каждой претензии, по сравнению с концом года 30 ноября.
# Претензия 1: бракованный товар, поставленный в декабре
  Причина ПОСЛЕ конца года: некорректирующее
  Существенно, значит РАСКРЫТЬ в примечании
# Претензия 2: незаконное увольнение в ноябре
  Причина ДО конца года: корректирующее
  Вероятно будет удовлетворена, значит СОЗДАТЬ резерв
= Ответ: раскрыть претензию 1; создать резерв по претензии 2
! Частая ошибка: смотреть, когда претензия ПОСТУПИЛА. Обе пришли после конца года; важно, когда произошло событие за ними.`,
        uz: `Har bir da'vo sababi 30 noyabr yil oxiriga nisbatan qachon bo'lganini so'raymiz.
# 1-da'vo: dekabrda yetkazilgan nuqsonli mahsulot
  Sabab yil oxiridan KEYIN: tuzatmaydigan
  Muhim, demak izohda OCHIB BERISH
# 2-da'vo: noyabrda noqonuniy ishdan bo'shatish
  Sabab yil oxiridan OLDIN: tuzatuvchi
  Qanoatlantirilishi ehtimoli katta, demak REZERV yaratish
= Javob: 1-da'voni ochib berish; 2-da'vo uchun rezerv yaratish
! Ko'p uchraydigan xato: da'vo qachon KELGANIGA qarash. Ikkalasi yil oxiridan keyin kelgan; muhimi, uning ortidagi voqea qachon bo'lgani.`,
      },
      options: [
        'Provide for claim 1; nothing for claim 2',
        'Provide for both claims',
        'Neither provided for nor disclosed',
        'Disclose claim 1; provide for claim 2',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch15-q429',
      kitRef: 429,
      topicId: 'chapter-15',
      type: 'single',
      text: 'A trader sells computers to individuals. Which of these is recognised as revenue?',
      explanation: {
        en: `Revenue = income from ordinary activities, earned by delivering goods.
- Payment for computers delivered two weeks ago: WRONG. The revenue was recorded on delivery; the cash only settles a receivable.
- Selling the delivery van: WRONG. Not ordinary activity; it is a disposal.
- Fulfilling a competitor's order and delivering the goods: RIGHT. Goods delivered under a contract.
- A refundable deposit for a possible order: WRONG. Nothing delivered; it is a liability.
= Answer: fulfilling the competitor's sale and delivering the goods`,
        ru: `Выручка = доход от обычной деятельности, заработанный поставкой товара.
- Оплата за компьютеры, доставленные две недели назад: НЕВЕРНО. Выручка записана при доставке; деньги лишь гасят дебиторскую задолженность.
- Продажа фургона доставки: НЕВЕРНО. Не обычная деятельность, это выбытие.
- Выполнение заказа конкурента с доставкой товара: ВЕРНО. Товар поставлен по договору.
- Возвратный задаток за возможный заказ: НЕВЕРНО. Ничего не поставлено; это обязательство.
= Ответ: выполнение продажи для конкурента с доставкой товара`,
        uz: `Tushum = tovar yetkazib topilgan odatiy faoliyat daromadi.
- Ikki hafta oldin yetkazilgan kompyuterlar uchun to'lov: NOTO'G'RI. Tushum yetkazilganda yozilgan; pul faqat debitorlikni yopadi.
- Yetkazib berish furgonini sotish: NOTO'G'RI. Odatiy faoliyat emas, bu chiqib ketish.
- Raqobatchining buyurtmasini bajarib, tovarni yetkazish: TO'G'RI. Tovar shartnoma bo'yicha yetkazilgan.
- Ehtimoliy buyurtma uchun qaytariladigan zaklad: NOTO'G'RI. Hech narsa yetkazilmagan; bu majburiyat.
= Javob: raqobatchi uchun sotuvni bajarib, tovarni yetkazish`,
      },
      options: [
        'Payment received from a customer for computers delivered two weeks ago',
        'The sale of the trader\'s delivery van to a relative for cash',
        'A competitor that ran out of an item asked the trader to fulfil a sale, and the trader delivered the goods',
        'A refundable $100 deposit for a computer the customer may order next week',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q430',
      kitRef: 430,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A company acts as an agent for another business and arranged a sale at $90,000 on 1 August. It is entitled to 10% commission on receipt of cash, and the customer paid on 28 September. What revenue is recognised for the year ended 30 September?',
      explanation: {
        en: `An agent's revenue is only its commission, not the full sale.
# Commission
  $90,000 x 10% = $9,000
# The rest
  $90,000 - $9,000 = $81,000 belongs to the principal: a liability until paid over
= Answer: $9,000
! Common trap: recognising the full $90,000. The agent only arranged the sale.`,
        ru: `Выручка агента — только его комиссия, а не вся продажа.
# Комиссия
  $90,000 x 10% = $9,000
# Остальное
  $90,000 - $9,000 = $81,000 принадлежат принципалу: обязательство до перечисления
= Ответ: $9,000
! Частая ошибка: признать все $90,000. Агент лишь организовал продажу.`,
        uz: `Agent tushumi faqat uning komissiyasi, butun sotuv emas.
# Komissiya
  $90,000 x 10% = $9,000
# Qolgani
  $90,000 - $9,000 = $81,000 asosiy tomonga tegishli: o'tkazilguncha majburiyat
= Javob: $9,000
! Ko'p uchraydigan xato: butun $90,000 ni tan olish. Agent faqat sotuvni tashkil qilgan.`,
      },
      correctValue: 9000,
      answerText: '$9,000',
    },
    {
      id: 'ch15-q431',
      kitRef: 431,
      topicId: 'chapter-15',
      type: 'number',
      text: 'A company sells machines at $800, installation at $120 and a one-year support agreement at $180. A customer bought all three on 1 October. The machine was delivered and installed that day, and support began. How much revenue is recognised for the year ended 31 December?',
      explanation: {
        en: `Three promises, each counted when it is done.
# Machine: delivered on 1 October
  Done: $800
# Installation: done on 1 October
  Done: $120
# Support: one year from 1 October
  Given over time; October to December is 3 months
  3/12 x $180 = $45
# Revenue for the year
  $800 + $120 + $45 = $965
= Answer: $965
! Common trap: counting the whole $180 of support ($1,100). Nine months are still to be given.`,
        ru: `Три обещания, каждое признаётся, когда выполнено.
# Станок: доставлен 1 октября
  Выполнено: $800
# Установка: сделана 1 октября
  Выполнено: $120
# Поддержка: год с 1 октября
  Оказывается со временем; октябрь–декабрь — 3 месяца
  3/12 x $180 = $45
# Выручка за год
  $800 + $120 + $45 = $965
= Ответ: $965
! Частая ошибка: учесть всю поддержку $180 ($1,100). Ещё девять месяцев впереди.`,
        uz: `Uchta va'da, har biri bajarilganda tan olinadi.
# Dastgoh: 1 oktyabrda yetkazilgan
  Bajarildi: $800
# O'rnatish: 1 oktyabrda qilingan
  Bajarildi: $120
# Qo'llab-quvvatlash: 1 oktyabrdan bir yil
  Vaqt davomida ko'rsatiladi; oktyabr–dekabr 3 oy
  3/12 x $180 = $45
# Yillik tushum
  $800 + $120 + $45 = $965
= Javob: $965
! Ko'p uchraydigan xato: butun $180 qo'llab-quvvatlashni hisoblash ($1,100). Hali to'qqiz oy bor.`,
      },
      correctValue: 965,
      answerText: '$965',
    },
    {
      id: 'ch15-q432',
      kitRef: 432,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which item has been correctly included in a company\'s revenue for the year ended 31 March?',
      explanation: {
        en: `Check each item's figure.
- Agent sale of $240,000 at 10%: should be commission $24,000, not $240,000. WRONG.
- Three-year consultancy of $360,000 from 1 July: 9 months to 31 March = 9/36 x $360,000 = $90,000, not $120,000. WRONG.
- Goods bought for $60,000, sold for $90,000 in January: revenue is the selling price, $90,000. RIGHT.
- Goods sold for $60,000 in January: revenue is $60,000, not the $30,000 profit. WRONG.
= Answer: the goods sold for $90,000, recognised at $90,000`,
        ru: `Проверим цифру по каждой статье.
- Агентская продажа $240,000 под 10%: должна быть комиссия $24,000, а не $240,000. НЕВЕРНО.
- Трёхлетний консалтинг $360,000 с 1 июля: 9 месяцев до 31 марта = 9/36 x $360,000 = $90,000, а не $120,000. НЕВЕРНО.
- Товар куплен за $60,000, продан за $90,000 в январе: выручка — цена продажи $90,000. ВЕРНО.
- Товар продан за $60,000 в январе: выручка $60,000, а не прибыль $30,000. НЕВЕРНО.
= Ответ: товар, проданный за $90,000, признан на $90,000`,
        uz: `Har bir moddaning sonini tekshiramiz.
- 10% bilan $240,000 lik agent sotuvi: $240,000 emas, $24,000 komissiya bo'lishi kerak. NOTO'G'RI.
- 1 iyuldan uch yillik $360,000 konsalting: 31 martgacha 9 oy = 9/36 x $360,000 = $90,000, $120,000 emas. NOTO'G'RI.
- $60,000 ga olingan, yanvarda $90,000 ga sotilgan tovar: tushum sotish narxi $90,000. TO'G'RI.
- Yanvarda $60,000 ga sotilgan tovar: tushum $60,000, $30,000 foyda emas. NOTO'G'RI.
= Javob: $90,000 ga sotilgan va $90,000 da tan olingan tovar`,
      },
      options: [
        'It negotiated a $240,000 sale for a client at 10% commission, and recognised $240,000',
        'It began a three-year consultancy contract for $360,000 on 1 July, and recognised $120,000',
        'It bought goods for $60,000 on 1 November and sold them for $90,000 on 20 January, and recognised $90,000',
        'It bought goods for $30,000 on 1 December and sold them for $60,000 on 10 January, and recognised $30,000',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch15-q433',
      kitRef: 433,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which of these is NOT part of the five-step approach in IFRS 15?',
      explanation: {
        en: `The five steps are: identify the contract, identify the obligations, find the price, allocate it, recognise revenue.
- Identify the contract: step 1.
- All contracts must be in writing: NOT a step, and not true. A contract can be spoken or implied.
- Recognise revenue when an obligation is satisfied: step 5.
- Allocate the price between the obligations: step 4.
= Answer: all contracts must be in writing`,
        ru: `Пять шагов: найти договор, найти обязанности, определить цену, распределить её, признать выручку.
- Найти договор: шаг 1.
- Все договоры должны быть письменными: НЕ шаг и неправда. Договор может быть устным или подразумеваемым.
- Признать выручку при выполнении обязанности: шаг 5.
- Распределить цену между обязанностями: шаг 4.
= Ответ: все договоры должны быть письменными`,
        uz: `Besh qadam: shartnomani topish, majburiyatlarni topish, narxni aniqlash, uni taqsimlash, tushumni tan olish.
- Shartnomani topish: 1-qadam.
- Barcha shartnomalar yozma bo'lishi kerak: qadam EMAS va noto'g'ri. Shartnoma og'zaki yoki nazarda tutilgan bo'lishi mumkin.
- Majburiyat bajarilganda tushumni tan olish: 5-qadam.
- Narxni majburiyatlar o'rtasida taqsimlash: 4-qadam.
= Javob: barcha shartnomalar yozma bo'lishi kerak`,
      },
      options: [
        'Identify the contract',
        'All contracts must be in writing',
        'Recognise revenue when a performance obligation is satisfied',
        'Allocate the total price between the performance obligations',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch15-q434',
      kitRef: 434,
      topicId: 'chapter-15',
      type: 'matrix',
      text: 'Is each of these an acceptable basis for recognising revenue?',
      explanation: {
        en: `IFRS 15 allows only two bases.
- On any reasonable basis: FALSE. Too vague; the standard is specific.
- At a point in time: TRUE. Usually goods, when control passes.
- Annually: FALSE. Revenue follows the performance, not the calendar.
- Over a period of time: TRUE. Usually services, as they are given.`,
        ru: `IFRS 15 допускает только две основы.
- На любой разумной основе: НЕВЕРНО. Слишком расплывчато; стандарт конкретен.
- В момент времени: ВЕРНО. Обычно товары, при переходе контроля.
- Ежегодно: НЕВЕРНО. Выручка следует за исполнением, а не за календарём.
- В течение периода: ВЕРНО. Обычно услуги, по мере оказания.`,
        uz: `IFRS 15 faqat ikki asosga ruxsat beradi.
- Har qanday oqilona asosda: NOTO'G'RI. Juda noaniq; standart aniq.
- Bir lahzada: TO'G'RI. Odatda tovarlar, nazorat o'tganda.
- Har yili: NOTO'G'RI. Tushum kalendarga emas, bajarishga ergashadi.
- Vaqt davomida: TO'G'RI. Odatda xizmatlar, ko'rsatilishiga qarab.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'On any reasonable basis', correctIndex: 1 },
        { text: 'At a point in time', correctIndex: 0 },
        { text: 'Annually', correctIndex: 1 },
        { text: 'Over a period of time', correctIndex: 0 },
      ],
    },
    {
      id: 'ch15-q435',
      kitRef: 435,
      topicId: 'chapter-15',
      type: 'single',
      text: 'Which item complies with IFRS 15 for inclusion in a company\'s revenue for the year ended 30 September?',
      explanation: {
        en: `Check each item against IFRS 15.
- Free sample worth $1,200 recorded as revenue: WRONG. Nothing is charged, so there is no revenue.
- Subscription $3,600 recorded in full: WRONG. Issues run from 1 November, so by 30 September only 11 of 12 months are delivered: $3,300.
- Goods listed at $6,000 with a 10% trade discount recorded at $5,400: RIGHT. Trade discount always comes off: $6,000 - $600 = $5,400.
- Settlement discount deducted although not expected to be taken: WRONG. Revenue should be the full $12,000.
= Answer: the goods recorded at $5,400 after the trade discount`,
        ru: `Сверим каждую статью с IFRS 15.
- Бесплатный образец за $1,200 записан как выручка: НЕВЕРНО. Ничего не взимается, выручки нет.
- Подписка $3,600 записана полностью: НЕВЕРНО. Выпуски идут с 1 ноября, к 30 сентября поставлено только 11 из 12 месяцев: $3,300.
- Товар по прайсу $6,000 со скидкой 10% записан на $5,400: ВЕРНО. Торговая скидка всегда вычитается: $6,000 - $600 = $5,400.
- Скидка за раннюю оплату вычтена, хотя её не ожидают: НЕВЕРНО. Выручка должна быть полные $12,000.
= Ответ: товар, записанный на $5,400 после торговой скидки`,
        uz: `Har bir moddani IFRS 15 bilan solishtiramiz.
- $1,200 lik bepul namuna tushum deb yozilgan: NOTO'G'RI. Hech narsa olinmaydi, tushum yo'q.
- $3,600 obuna to'liq yozilgan: NOTO'G'RI. Sonlar 1 noyabrdan, 30 sentyabrgacha faqat 12 oydan 11 tasi yetkazilgan: $3,300.
- 10% savdo chegirmasi bilan $6,000 lik tovar $5,400 da yozilgan: TO'G'RI. Savdo chegirmasi har doim ayiriladi: $6,000 - $600 = $5,400.
- Kutilmagan bo'lsa ham, muddatidan oldingi to'lov chegirmasi ayirilgan: NOTO'G'RI. Tushum to'liq $12,000 bo'lishi kerak.
= Javob: savdo chegirmasidan keyin $5,400 da yozilgan tovar`,
      },
      options: [
        'A free sample with a normal price of $1,200 was given to a new customer, and $1,200 was included',
        'An annual magazine subscription for $3,600 was sold, with the first monthly issue sent on 1 November of that financial year, and $3,600 was included',
        'Goods with a list price of $6,000 were supplied on 1 December with a trade discount of 10%, and $5,400 was included',
        'Goods with a list price of $12,000 were sold on 1 February with a 2% settlement discount that the customer was not expected to take, and $11,760 was recorded',
      ],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
