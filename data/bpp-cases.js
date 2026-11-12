'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025): its 15-mark case questions,
// reworded with new figures. bppRef is BPP's question number and bppPage its answer page. Kept apart from the
// Kaplan Section B cases, so the mock exam stays Kaplan only.
(function () {
  const task = (topic, marks, type, text, spec, en, ru, uz) => ({ topic: `chapter-${String(topic).padStart(2, '0')}`, marks, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const DC = ['Debit', 'Credit'];
  const DCN = ['Debit', 'Credit', 'No entry'];

  const cases = [
    {
      id: 'bppc14', bppRef: '14', bppPage: 230, area: 'statements', title: 'Ms Karimova (trial balance)',
      intro: `Ms Karimova is a sole trader. These balances are taken from her ledger at 30 June. She is not overdrawn at the bank. At 30 June: rent of $260 is to be accrued; insurance of $940 has been prepaid; $2,450 of the carriage is carriage inwards (the rest is carriage outwards); equipment is depreciated at 15% a year straight line; closing inventory is $14,050.`,
      table: { head: ['Ledger balance', '$'], rows: [
        ['Sales', '152,400'], ['Purchases', '91,300'], ['Carriage', '6,200'], ['Drawings', '9,600'],
        ['Rent and insurance', '7,450'], ['Postage and stationery', '3,200'], ['Advertising', '1,500'],
        ['Wages', '28,900'], ['Irrecoverable debts', '950'], ['Allowance for receivables', '180'],
        ['Receivables', '13,400'], ['Payables', '7,250'], ['Cash at bank', '1,240'],
        ['Inventory at 1 July', '12,600'], ['Equipment at cost', '64,000'], ['Accumulated depreciation', '22,400'],
        ['Capital at 1 July', '?'],
      ] },
      tasks: [
        task(3, 4, 'matrix', `Task 1: Is each balance a debit or a credit?`,
          grid(DC, [['Allowance for receivables', 1], ['Drawings', 0], ['Accumulated depreciation', 1], ['Carriage', 0], ['Payables', 1], ['Irrecoverable debts', 0]]),
`Assets, expenses and drawings are debits. Liabilities, income, capital and amounts that reduce an asset are credits.
- Allowance for receivables: reduces an asset. CREDIT.
- Drawings: reduce capital. DEBIT.
- Accumulated depreciation: reduces an asset. CREDIT.
- Carriage: an expense. DEBIT.
- Payables: a liability. CREDIT.
- Irrecoverable debts: an expense. DEBIT.`,
`Активы, расходы и изъятия — дебет. Обязательства, доходы, капитал и суммы, уменьшающие актив, — кредит.
- Резерв по дебиторам: уменьшает актив. КРЕДИТ.
- Изъятия: уменьшают капитал. ДЕБЕТ.
- Накопленная амортизация: уменьшает актив. КРЕДИТ.
- Доставка: расход. ДЕБЕТ.
- Кредиторы: обязательство. КРЕДИТ.
- Безнадёжные долги: расход. ДЕБЕТ.`,
`Aktivlar, xarajatlar va olib qo'yishlar — debet. Majburiyatlar, daromadlar, kapital va aktivni kamaytiruvchi summalar — kredit.
- Debitorlar zaxirasi: aktivni kamaytiradi. KREDIT.
- Olib qo'yishlar: kapitalni kamaytiradi. DEBET.
- Jamg'arilgan amortizatsiya: aktivni kamaytiradi. KREDIT.
- Tashish: xarajat. DEBET.
- Kreditorlar: majburiyat. KREDIT.
- Umidsiz qarzlar: xarajat. DEBET.`),
        task(3, 2, 'number', `Task 2: The trial balance balances. What is Ms Karimova's capital at 1 July? (in $)`,
          amount(58110, '$58,110'),
`Capital is the figure that makes the credits equal the debits.
# Step 1: Total debits
  91,300 + 6,200 + 9,600 + 7,450 + 3,200 + 1,500 + 28,900 + 950 + 13,400 + 1,240 + 12,600 + 64,000 = 240,340
# Step 2: Credits other than capital
  152,400 + 180 + 7,250 + 22,400 = 182,230
# Step 3: Capital
  240,340 - 182,230 = 58,110
= Answer: $58,110`,
`Капитал — сумма, при которой кредит равен дебету.
# Шаг 1: Итого дебет
  91 300 + 6 200 + 9 600 + 7 450 + 3 200 + 1 500 + 28 900 + 950 + 13 400 + 1 240 + 12 600 + 64 000 = 240 340
# Шаг 2: Кредит без капитала
  152 400 + 180 + 7 250 + 22 400 = 182 230
# Шаг 3: Капитал
  240 340 - 182 230 = 58 110
= Ответ: $58 110`,
`Kapital — kreditni debetga tenglashtiradigan summa.
# 1-qadam: Jami debet
  91 300 + 6 200 + 9 600 + 7 450 + 3 200 + 1 500 + 28 900 + 950 + 13 400 + 1 240 + 12 600 + 64 000 = 240 340
# 2-qadam: Kapitaldan tashqari kredit
  152 400 + 180 + 7 250 + 22 400 = 182 230
# 3-qadam: Kapital
  240 340 - 182 230 = 58 110
= Javob: $58 110`),
        task(5, 3, 'number', `Task 3: What is cost of sales for the year? (in $)`,
          amount(92300, '$92,300'),
`# Step 1: The parts of cost of sales
  Opening inventory 12,600 + purchases 91,300 + carriage inwards 2,450 - closing inventory 14,050
# Step 2: Total
  12,600 + 91,300 + 2,450 - 14,050 = 92,300
= Answer: $92,300
! Only carriage INWARDS is part of cost of sales. Carriage outwards is a selling expense.`,
`# Шаг 1: Части себестоимости
  Запасы на начало 12 600 + закупки 91 300 + доставка от поставщика 2 450 - запасы на конец 14 050
# Шаг 2: Итог
  12 600 + 91 300 + 2 450 - 14 050 = 92 300
= Ответ: $92 300
! В себестоимость входит только доставка ОТ поставщика. Доставка покупателям — коммерческий расход.`,
`# 1-qadam: Tannarx qismlari
  Boshlang'ich zaxira 12 600 + xaridlar 91 300 + yetkazib beruvchidan tashish 2 450 - yakuniy zaxira 14 050
# 2-qadam: Jami
  12 600 + 91 300 + 2 450 - 14 050 = 92 300
= Javob: $92 300
! Tannarxga faqat yetkazib beruvchiDAN tashish kiradi. Mijozlarga tashish — sotish xarajati.`),
        task(9, 2, 'matrix', `Task 4: How does each adjustment change profit for the year?`,
          grid(['Increases profit', 'Decreases profit'], [['The rent accrual', 1], ['The insurance prepayment', 0]]),
`- Rent accrual: an extra expense for the year. DECREASES profit.
- Insurance prepayment: part of the cost belongs to next year, so this year's expense falls. INCREASES profit.`,
`- Начисление аренды: дополнительный расход года. УМЕНЬШАЕТ прибыль.
- Предоплата страховки: часть затрат относится к следующему году, расход года падает. УВЕЛИЧИВАЕТ прибыль.`,
`- Ijara hisoblanishi: yil uchun qo'shimcha xarajat. Foydani KAMAYTIRADI.
- Sug'urta oldindan to'lovi: xarajatning bir qismi keyingi yilga tegishli, yil xarajati kamayadi. Foydani OSHIRADI.`),
        task(3, 2, 'number', `Task 5: If profit for the year is $6,350, what is Ms Karimova's capital at 30 June? (in $)`,
          amount(54860, '$54,860'),
`# Step 1: The capital formula
  Closing capital = opening capital + profit - drawings
# Step 2: Put in the figures
  58,110 + 6,350 - 9,600 = 54,860
= Answer: $54,860`,
`# Шаг 1: Формула капитала
  Капитал на конец = капитал на начало + прибыль - изъятия
# Шаг 2: Подставим
  58 110 + 6 350 - 9 600 = 54 860
= Ответ: $54 860`,
`# 1-qadam: Kapital formulasi
  Yakuniy kapital = boshlang'ich kapital + foyda - olib qo'yishlar
# 2-qadam: Raqamlarni qo'yamiz
  58 110 + 6 350 - 9 600 = 54 860
= Javob: $54 860`),
        task(6, 2, 'number', `Task 6: What is the carrying amount of equipment at 30 June? (in $)`,
          amount(32000, '$32,000'),
`# Step 1: This year's depreciation
  64,000 x 15% = 9,600
# Step 2: Carrying amount
  Cost 64,000 - accumulated depreciation (22,400 + 9,600) = 32,000
= Answer: $32,000
! Straight line is on COST, not on carrying amount.`,
`# Шаг 1: Амортизация года
  64 000 x 15% = 9 600
# Шаг 2: Балансовая стоимость
  Себестоимость 64 000 - накопленная амортизация (22 400 + 9 600) = 32 000
= Ответ: $32 000
! Линейный метод считают от СЕБЕСТОИМОСТИ, а не от балансовой стоимости.`,
`# 1-qadam: Yil amortizatsiyasi
  64 000 x 15% = 9 600
# 2-qadam: Balans qiymati
  Tannarx 64 000 - jamg'arilgan amortizatsiya (22 400 + 9 600) = 32 000
= Javob: $32 000
! To'g'ri chiziqli usul balans qiymatidan emas, TANNARXdan hisoblanadi.`),
      ],
    },

    {
      id: 'bppc19', bppRef: '19', bppPage: 245, area: 'statements', title: 'Kestrel Co',
      intro: `Kestrel Co's draft statement of financial position at 31 December ($000) has a suspense account of $4,200,000 (credit). The suspense account holds two items: (1) the proceeds of issuing 3,000,000 shares of 50c each at $1.20 a share, credited to suspense from the cash book; (2) the rest is the proceeds of plant sold on 1 January, which cost $1,600,000 and had a carrying amount of $800,000 when sold. No other entries have been made for the sale. Plant is depreciated at 25% a year straight line, and this year's charge was worked out without allowing for the sale.`,
      table: { head: ['Draft statement of financial position', '$000'], rows: [
        ['Land and buildings (cost 9,500, depreciation 1,200)', '8,300'], ['Plant (cost 18,000, depreciation 7,500)', '10,500'],
        ['Inventories', '3,400'], ['Receivables', '2,800'], ['Cash at bank', '2,100'], ['Total assets', '27,100'],
        ['Share capital (50c shares)', '7,000'], ['Retained earnings', '11,600'], ['Loan notes', '2,500'], ['Trade payables', '1,800'],
        ['Suspense account', '4,200'], ['Total equity and liabilities', '27,100'],
      ] },
      tasks: [
        task(15, 2, 'single', `Task 1: Inventory that cost $600,000 was sold after the year end for $520,000, with selling costs of $30,000. What is the correct treatment at 31 December?`,
          pick([
            'Debit inventory with $110,000',
            'Credit inventory with $110,000',
            'Credit cash with $110,000',
            'No adjustment, because the sale happened after the year end',
          ], 1),
`The sale is an adjusting event: it shows the inventory was worth less than cost at the year end.
# Step 1: Net realisable value
  520,000 - 30,000 = 490,000
# Step 2: Write-down
  600,000 - 490,000 = 110,000
# Step 3: Direction
  Inventory is reduced, so it is CREDITED.
= Answer: credit inventory with $110,000`,
`Продажа — корректирующее событие: она показывает, что на конец года запасы стоили меньше себестоимости.
# Шаг 1: Чистая стоимость реализации
  520 000 - 30 000 = 490 000
# Шаг 2: Списание
  600 000 - 490 000 = 110 000
# Шаг 3: Направление
  Запасы уменьшаются, их КРЕДИТУЮТ.
= Ответ: кредит запасов на $110 000`,
`Sotuv — tuzatuvchi voqea: u yil oxirida zaxira tannarxdan arzon ekanini ko'rsatadi.
# 1-qadam: Sof sotish qiymati
  520 000 - 30 000 = 490 000
# 2-qadam: Kamaytirish
  600 000 - 490 000 = 110 000
# 3-qadam: Yo'nalish
  Zaxira kamayadi, u KREDITlanadi.
= Javob: zaxira $110 000 ga kreditlanadi`),
        task(7, 2, 'single', `Task 2: What is the profit or loss on the plant sold?`,
          pick(['$200,000 loss', '$200,000 profit', '$1,000,000 loss', '$600,000 profit'], 0),
`# Step 1: Sale proceeds
  Suspense 4,200,000 - share issue (3,000,000 x $1.20 = 3,600,000) = 600,000
# Step 2: Compare with the carrying amount
  600,000 - 800,000 = 200,000 loss
= Answer: $200,000 loss`,
`# Шаг 1: Выручка от продажи
  Счёт ошибок 4 200 000 - выпуск акций (3 000 000 x $1,20 = 3 600 000) = 600 000
# Шаг 2: Сравним с балансовой стоимостью
  600 000 - 800 000 = убыток 200 000
= Ответ: убыток $200 000`,
`# 1-qadam: Sotuv tushumi
  Vaqtinchalik hisob 4 200 000 - aksiya chiqarish (3 000 000 x $1,20 = 3 600 000) = 600 000
# 2-qadam: Balans qiymati bilan solishtiramiz
  600 000 - 800 000 = 200 000 zarar
= Javob: $200 000 zarar`),
        task(6, 2, 'number', `Task 3: By how much must this year's depreciation be reduced for the plant sold? (in $)`,
          amount(400000, '$400,000'),
`The plant was sold on 1 January, so none of this year's charge belongs to it.
# Step 1: Charge wrongly made on it
  1,600,000 x 25% = 400,000
= Answer: $400,000`,
`Оборудование продано 1 января, поэтому никакая часть амортизации года к нему не относится.
# Шаг 1: Ошибочно начисленная сумма
  1 600 000 x 25% = 400 000
= Ответ: $400 000`,
`Uskuna 1 yanvarda sotilgan, shuning uchun yil amortizatsiyasining hech bir qismi unga tegishli emas.
# 1-qadam: Xato hisoblangan summa
  1 600 000 x 25% = 400 000
= Javob: $400 000`),
        task(14, 4, 'matrix', `Task 4: Which side is each account on in the journal that clears the suspense account?`,
          grid(DCN, [['Share capital', 1], ['Share premium', 1], ['Cash', 2], ['Plant at cost', 2], ['Plant disposal account', 1], ['Suspense account', 0]]),
`Suspense holds two CREDITS that belong elsewhere, so it is DEBITED to clear it and the right accounts are credited.
- Share capital: 3,000,000 x 50c = 1,500,000. CREDIT.
- Share premium: 3,000,000 x 70c = 2,100,000. CREDIT.
- Cash: already recorded correctly. NO ENTRY.
- Plant at cost: not part of clearing suspense. NO ENTRY.
- Disposal account: the 600,000 proceeds. CREDIT.
- Suspense account: 4,200,000. DEBIT.
! BPP's printed answer shows these sides the wrong way round, though its own explanation says suspense is debited and share capital and premium are credited.`,
`На счёте ошибок два КРЕДИТА, которые относятся к другим счетам, поэтому его ДЕБЕТУЮТ, а нужные счета кредитуют.
- Акционерный капитал: 3 000 000 x 50c = 1 500 000. КРЕДИТ.
- Эмиссионный доход: 3 000 000 x 70c = 2 100 000. КРЕДИТ.
- Деньги: уже записаны верно. БЕЗ ЗАПИСИ.
- Оборудование по себестоимости: не участвует в закрытии счёта ошибок. БЕЗ ЗАПИСИ.
- Счёт выбытия: выручка 600 000. КРЕДИТ.
- Счёт ошибок: 4 200 000. ДЕБЕТ.
! В напечатанном ответе BPP стороны перепутаны, хотя в его же пояснении счёт ошибок дебетуется, а капитал и эмиссионный доход кредитуются.`,
`Vaqtinchalik hisobda boshqa hisoblarga tegishli ikki KREDIT bor, shuning uchun u DEBETlanadi, kerakli hisoblar kreditlanadi.
- Ustav kapitali: 3 000 000 x 50c = 1 500 000. KREDIT.
- Emissiya daromadi: 3 000 000 x 70c = 2 100 000. KREDIT.
- Pul: allaqachon to'g'ri yozilgan. YOZUV YO'Q.
- Uskuna tannarxi: vaqtinchalik hisobni yopishda qatnashmaydi. YOZUV YO'Q.
- Chiqib ketish hisobi: 600 000 tushum. KREDIT.
- Vaqtinchalik hisob: 4 200 000. DEBET.
! BPP chop etgan javobda tomonlar teskari, garchi uning o'z tushuntirishida vaqtinchalik hisob debetlanib, kapital va emissiya daromadi kreditlanadi.`),
        task(12, 3, 'number', `Task 5: After clearing the suspense account, what is the balance on share premium? (in $)`,
          amount(2100000, '$2,100,000'),
`# Step 1: Premium per share
  $1.20 - 50c nominal = 70c
# Step 2: Share premium
  3,000,000 x 70c = 2,100,000
  (Share capital becomes 7,000,000 + 1,500,000 = 8,500,000.)
= Answer: $2,100,000`,
`# Шаг 1: Премия на акцию
  $1,20 - номинал 50c = 70c
# Шаг 2: Эмиссионный доход
  3 000 000 x 70c = 2 100 000
  (Акционерный капитал становится 7 000 000 + 1 500 000 = 8 500 000.)
= Ответ: $2 100 000`,
`# 1-qadam: Bir aksiyaga premiya
  $1,20 - nominal 50c = 70c
# 2-qadam: Emissiya daromadi
  3 000 000 x 70c = 2 100 000
  (Ustav kapitali 7 000 000 + 1 500 000 = 8 500 000 bo'ladi.)
= Javob: $2 100 000`),
        task(15, 2, 'matrix', `Task 6: Irrecoverable debts of $150,000 are also to be written off. Is each adjustment a debit or a credit to retained earnings (through profit)?`,
          grid(DC, [['Irrecoverable debts written off', 0], ['Depreciation reduction (Task 3)', 1], ['Inventory write-down (Task 1)', 0]]),
`A debit to retained earnings lowers profit; a credit raises it.
- Writing off debts: an extra expense. DEBIT.
- Reducing depreciation: less expense. CREDIT.
- Writing inventory down: cost of sales goes up. DEBIT.`,
`Дебет нераспределённой прибыли уменьшает прибыль, кредит — увеличивает.
- Списание долгов: дополнительный расход. ДЕБЕТ.
- Уменьшение амортизации: меньше расход. КРЕДИТ.
- Списание запасов: себестоимость растёт. ДЕБЕТ.`,
`Taqsimlanmagan foyda debeti foydani kamaytiradi, krediti oshiradi.
- Qarzlarni hisobdan chiqarish: qo'shimcha xarajat. DEBET.
- Amortizatsiyani kamaytirish: xarajat kamayadi. KREDIT.
- Zaxirani kamaytirish: tannarx oshadi. DEBET.`),
      ],
    },

    {
      id: 'bppc20', bppRef: '20', bppPage: 246, area: 'statements', title: 'Plover Co',
      intro: `Plover Co's trial balance at 31 March is shown ($000). Plant is depreciated at 25% a year reducing balance and buildings at 4% a year on cost; depreciation is part of cost of sales. Closing inventory is $95,000.`,
      table: { head: ['Trial balance', 'Dr $000', 'Cr $000'], rows: [
        ['Buildings at cost', '820', ''], ['Buildings accumulated depreciation at 1 April', '', '90'],
        ['Plant at cost', '260', ''], ['Plant accumulated depreciation at 1 April', '', '120'],
        ['Bank overdraft', '', '60'], ['Revenue', '', '1,950'], ['Purchases', '1,230', ''], ['Inventory at 1 April', '180', ''],
        ['Cash', '25', ''], ['Trade payables', '', '270'], ['Trade receivables', '360', ''], ['Administrative expenses', '340', ''],
        ['Allowance for receivables at 1 April', '', '12'], ['Retained earnings at 1 April', '', '163'],
        ['$1 ordinary shares', '', '450'], ['Share premium', '', '100'], ['Totals', '3,215', '3,215'],
      ] },
      tasks: [
        task(15, 4, 'matrix', `Task 1: Does each item appear in the statement of financial position at 31 March?`,
          grid(['On the SOFP', 'Not on the SOFP'], [['Buildings at cost', 0], ['Revenue', 1], ['Inventory at 1 April', 1], ['Bank overdraft', 0], ['Retained earnings at 1 April', 1], ['Share premium', 0]]),
`The SOFP shows assets, liabilities and equity at the year end.
- Buildings at cost: an asset. ON.
- Revenue: income, in profit or loss. NOT ON.
- Opening inventory: goes into cost of sales. The SOFP shows CLOSING inventory. NOT ON.
- Bank overdraft: a liability. ON.
- Opening retained earnings: the SOFP shows the CLOSING figure, after this year's profit. NOT ON.
- Share premium: equity. ON.`,
`Отчёт о финансовом положении показывает активы, обязательства и капитал на конец года.
- Здания по себестоимости: актив. ДА.
- Выручка: доход, в отчёте о прибылях. НЕТ.
- Запасы на начало: идут в себестоимость. В отчёте — запасы на КОНЕЦ. НЕТ.
- Овердрафт: обязательство. ДА.
- Нераспределённая прибыль на начало: в отчёте — сумма на КОНЕЦ, после прибыли года. НЕТ.
- Эмиссионный доход: капитал. ДА.`,
`Moliyaviy holat hisoboti yil oxiridagi aktiv, majburiyat va kapitalni ko'rsatadi.
- Bino tannarxi: aktiv. HA.
- Tushum: daromad, foyda hisobotida. YO'Q.
- Boshlang'ich zaxira: tannarxga kiradi. Hisobotda YAKUNIY zaxira. YO'Q.
- Overdraft: majburiyat. HA.
- Boshlang'ich taqsimlanmagan foyda: hisobotda yil foydasidan keyingi YAKUNIY summa. YO'Q.
- Emissiya daromadi: kapital. HA.`),
        task(10, 2, 'matrix', `Task 2: The allowance for receivables is to be 4% of trade receivables, and is part of administrative expenses. Which side is each account on in the journal?`,
          grid(DCN, [['Trade receivables', 2], ['Administrative expenses', 0], ['Allowance for receivables', 1], ['Revenue', 2]]),
`New allowance: 360,000 x 4% = 14,400, up from 12,000, so it rises by 2,400.
- Receivables: an allowance does not change the debts themselves. NO ENTRY.
- Administrative expenses: the increase is an expense. DEBIT.
- Allowance: goes up. CREDIT.
- Revenue: not affected. NO ENTRY.`,
`Новый резерв: 360 000 x 4% = 14 400, было 12 000, рост 2 400.
- Дебиторы: резерв не меняет сами долги. БЕЗ ЗАПИСИ.
- Административные расходы: рост резерва — расход. ДЕБЕТ.
- Резерв: растёт. КРЕДИТ.
- Выручка: не затрагивается. БЕЗ ЗАПИСИ.`,
`Yangi zaxira: 360 000 x 4% = 14 400, avval 12 000, o'sish 2 400.
- Debitorlar: zaxira qarzlarning o'zini o'zgartirmaydi. YOZUV YO'Q.
- Ma'muriy xarajatlar: o'sish — xarajat. DEBET.
- Zaxira: oshadi. KREDIT.
- Tushum: o'zgarmaydi. YOZUV YO'Q.`),
        task(10, 1, 'number', `Task 3: What amount goes to profit or loss for the change in the allowance? (in $)`,
          amount(2400, '$2,400'),
`# Step 1: New allowance
  360,000 x 4% = 14,400
# Step 2: Change
  14,400 - 12,000 = 2,400
= Answer: $2,400`,
`# Шаг 1: Новый резерв
  360 000 x 4% = 14 400
# Шаг 2: Изменение
  14 400 - 12 000 = 2 400
= Ответ: $2 400`,
`# 1-qadam: Yangi zaxira
  360 000 x 4% = 14 400
# 2-qadam: O'zgarish
  14 400 - 12 000 = 2 400
= Javob: $2 400`),
        task(6, 2, 'number', `Task 4: What is the depreciation charge on buildings for the year? (in $)`,
          amount(32800, '$32,800'),
`# Step 1: 4% of cost
  820,000 x 4% = 32,800
= Answer: $32,800`,
`# Шаг 1: 4% от себестоимости
  820 000 x 4% = 32 800
= Ответ: $32 800`,
`# 1-qadam: Tannarxning 4%
  820 000 x 4% = 32 800
= Javob: $32 800`),
        task(6, 2, 'number', `Task 5: What is the depreciation charge on plant for the year? (in $)`,
          amount(35000, '$35,000'),
`# Step 1: Reducing balance starts from the carrying amount
  260,000 - 120,000 = 140,000
# Step 2: 25% of that
  140,000 x 25% = 35,000
= Answer: $35,000
! 25% of cost (65,000) would be straight line, not reducing balance.`,
`# Шаг 1: Уменьшаемый остаток считают от балансовой стоимости
  260 000 - 120 000 = 140 000
# Шаг 2: 25% от неё
  140 000 x 25% = 35 000
= Ответ: $35 000
! 25% от себестоимости (65 000) — это линейный метод, а не уменьшаемый остаток.`,
`# 1-qadam: Kamayuvchi qoldiq balans qiymatidan hisoblanadi
  260 000 - 120 000 = 140 000
# 2-qadam: Uning 25%
  140 000 x 25% = 35 000
= Javob: $35 000
! Tannarxning 25% (65 000) — to'g'ri chiziqli usul, kamayuvchi qoldiq emas.`),
        task(15, 2, 'number', `Task 6: Ignoring depreciation, what is cost of sales for the year? (in $)`,
          amount(1315000, '$1,315,000'),
`# Step 1: Cost of sales
  Opening inventory 180,000 + purchases 1,230,000 - closing inventory 95,000
# Step 2: Total
  180,000 + 1,230,000 - 95,000 = 1,315,000
= Answer: $1,315,000`,
`# Шаг 1: Себестоимость
  Запасы на начало 180 000 + закупки 1 230 000 - запасы на конец 95 000
# Шаг 2: Итог
  180 000 + 1 230 000 - 95 000 = 1 315 000
= Ответ: $1 315 000`,
`# 1-qadam: Tannarx
  Boshlang'ich zaxira 180 000 + xaridlar 1 230 000 - yakuniy zaxira 95 000
# 2-qadam: Jami
  180 000 + 1 230 000 - 95 000 = 1 315 000
= Javob: $1 315 000`),
        task(9, 2, 'number', `Task 7: An $18,000 invoice for energy for the three months to 30 April arrived on 5 May. What accrual is needed at 31 March? (in $)`,
          amount(12000, '$12,000'),
`# Step 1: Which months does the invoice cover?
  February, March and April
# Step 2: Which of them belong to this year?
  February and March, which is 2 of the 3 months
# Step 3: Accrual
  18,000 x 2/3 = 12,000 (Dr Administrative expenses, Cr Accruals)
= Answer: $12,000`,
`# Шаг 1: За какие месяцы счёт?
  Февраль, март и апрель
# Шаг 2: Какие относятся к этому году?
  Февраль и март, то есть 2 из 3 месяцев
# Шаг 3: Начисление
  18 000 x 2/3 = 12 000 (Дт Административные расходы, Кт Начисленные обязательства)
= Ответ: $12 000`,
`# 1-qadam: Hisob qaysi oylar uchun?
  Fevral, mart va aprel
# 2-qadam: Qaysilari shu yilga tegishli?
  Fevral va mart, ya'ni 3 oydan 2 tasi
# 3-qadam: Hisoblangan qarz
  18 000 x 2/3 = 12 000 (Dt Ma'muriy xarajatlar, Kt Hisoblangan majburiyatlar)
= Javob: $12 000`),
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = cases;
  else (globalThis.ACCA ??= {}).bppCases = cases;
})();
