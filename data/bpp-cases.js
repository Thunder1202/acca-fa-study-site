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
  const TF = ['True', 'False'];
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

    {
      id: 'bppc21', bppRef: '21', bppPage: 247, area: 'statements', title: 'Teal Co',
      intro: `Teal Co's trial balance at 31 October is shown ($000). Buildings are depreciated at 5% of cost; at 31 October, after this year's charge, they were valued at $1,900,000 and the directors want the valuation in the accounts. Motor vehicles are depreciated at 20% of carrying amount and furniture at 20% of cost. Closing inventory at cost is $310,000, but $50,000 of it is old stock that will be sold in November for $30,000. Administrative expenses include $6,000 for November. The allowance for receivables is to be 5% of receivables. Wages of $40,000 are owed for October. In October a 1 for 10 bonus issue was made from the share premium account, but it has not been recorded.`,
      table: { head: ['Trial balance', 'Dr $000', 'Cr $000'], rows: [
        ['Inventory at 1 November', '380', ''], ['Administrative expenses', '1,150', ''], ['Share premium', '', '250'],
        ['Retained earnings at 1 November', '', '90'], ['Allowance for receivables at 1 November', '', '45'], ['Revenue', '', '6,100'],
        ['Bank overdraft', '', '90'], ['Returns inward', '110', ''], ['Trade payables', '', '360'], ['Loan note interest', '35', ''],
        ['Trade receivables', '950', ''], ['Purchases', '3,800', ''], ['7% loan notes', '', '500'], ['Irrecoverable debts', '160', ''],
        ['$1 ordinary shares', '', '2,000'], ['Land at cost', '800', ''], ['Buildings at cost', '1,600', ''], ['Motor vehicles at cost', '300', ''],
        ['Furniture at cost', '1,000', ''], ['Accumulated depreciation: buildings', '', '400'], ['Accumulated depreciation: vehicles', '', '100'],
        ['Accumulated depreciation: furniture', '', '350'], ['Totals', '10,285', '10,285'],
      ] },
      tasks: [
        task(15, 4, 'matrix', `Task 1: Does each item go into the statement of profit or loss?`,
          grid(['In profit or loss', 'Not in profit or loss'], [['Administrative expenses', 0], ['Share premium', 1], ['Returns inward', 0], ['Loan note interest', 0], ['Trade receivables', 1], ['Irrecoverable debts', 0]]),
`Profit or loss holds income and expenses. Assets, liabilities and equity go to the statement of financial position.
- Administrative expenses: an expense. IN.
- Share premium: equity. NOT IN.
- Returns inward: reduce revenue. IN.
- Loan note interest: a finance cost. IN.
- Trade receivables: an asset. NOT IN.
- Irrecoverable debts: an expense. IN.`,
`В отчёт о прибылях входят доходы и расходы. Активы, обязательства и капитал — в отчёт о финансовом положении.
- Административные расходы: расход. ДА.
- Эмиссионный доход: капитал. НЕТ.
- Возвраты от покупателей: уменьшают выручку. ДА.
- Проценты по облигациям: финансовый расход. ДА.
- Дебиторы: актив. НЕТ.
- Безнадёжные долги: расход. ДА.`,
`Foyda hisobotiga daromad va xarajatlar kiradi. Aktiv, majburiyat va kapital moliyaviy holat hisobotiga boradi.
- Ma'muriy xarajatlar: xarajat. HA.
- Emissiya daromadi: kapital. YO'Q.
- Xaridorlar qaytargan tovar: tushumni kamaytiradi. HA.
- Obligatsiya foizi: moliyaviy xarajat. HA.
- Debitorlar: aktiv. YO'Q.
- Umidsiz qarzlar: xarajat. HA.`),
        task(7, 2, 'number', `Task 2: What is the carrying amount of buildings at 31 October? (in $)`,
          amount(1900000, '$1,900,000'),
`# Step 1: Charge this year's depreciation first
  1,600,000 x 5% = 80,000
  Carrying amount before revaluation: 1,600,000 - 400,000 - 80,000 = 1,120,000
# Step 2: Revalue
  The directors put the valuation in the accounts, so buildings are shown at 1,900,000.
= Answer: $1,900,000
! BPP's printed answer gives the carrying amount before revaluation, although its own question says the valuation is put in the accounts.`,
`# Шаг 1: Сначала амортизация года
  1 600 000 x 5% = 80 000
  Балансовая стоимость до переоценки: 1 600 000 - 400 000 - 80 000 = 1 120 000
# Шаг 2: Переоценка
  Директора отражают оценку в отчётности, здания показывают по 1 900 000.
= Ответ: $1 900 000
! В напечатанном ответе BPP дана стоимость до переоценки, хотя в его же вопросе оценку отражают в отчётности.`,
`# 1-qadam: Avval yil amortizatsiyasi
  1 600 000 x 5% = 80 000
  Qayta baholashdan oldingi balans qiymati: 1 600 000 - 400 000 - 80 000 = 1 120 000
# 2-qadam: Qayta baholash
  Direktorlar bahoni hisobotga kiritadi, binolar 1 900 000 da ko'rsatiladi.
= Javob: $1 900 000
! BPP chop etgan javobda qayta baholashdan oldingi qiymat berilgan, garchi uning o'z savolida baho hisobotga kiritiladi.`),
        task(7, 1, 'number', `Task 3: What is the revaluation surplus on the buildings? (in $)`,
          amount(780000, '$780,000'),
`# Step 1: Valuation less carrying amount before revaluation
  1,900,000 - 1,120,000 = 780,000
= Answer: $780,000`,
`# Шаг 1: Оценка минус балансовая стоимость до переоценки
  1 900 000 - 1 120 000 = 780 000
= Ответ: $780 000`,
`# 1-qadam: Baho minus qayta baholashdan oldingi balans qiymati
  1 900 000 - 1 120 000 = 780 000
= Javob: $780 000`),
        task(6, 1, 'number', `Task 4: What is the carrying amount of motor vehicles at 31 October? (in $)`,
          amount(160000, '$160,000'),
`# Step 1: Carrying amount at the start
  300,000 - 100,000 = 200,000
# Step 2: Depreciation at 20% of carrying amount
  200,000 x 20% = 40,000
# Step 3: Carrying amount at the end
  200,000 - 40,000 = 160,000
= Answer: $160,000`,
`# Шаг 1: Балансовая стоимость на начало
  300 000 - 100 000 = 200 000
# Шаг 2: Амортизация 20% от балансовой стоимости
  200 000 x 20% = 40 000
# Шаг 3: Балансовая стоимость на конец
  200 000 - 40 000 = 160 000
= Ответ: $160 000`,
`# 1-qadam: Boshlang'ich balans qiymati
  300 000 - 100 000 = 200 000
# 2-qadam: Balans qiymatining 20% amortizatsiya
  200 000 x 20% = 40 000
# 3-qadam: Yakuniy balans qiymati
  200 000 - 40 000 = 160 000
= Javob: $160 000`),
        task(6, 1, 'number', `Task 5: What is the carrying amount of furniture at 31 October? (in $)`,
          amount(450000, '$450,000'),
`# Step 1: Depreciation at 20% of cost
  1,000,000 x 20% = 200,000
# Step 2: Carrying amount
  1,000,000 - 350,000 - 200,000 = 450,000
= Answer: $450,000`,
`# Шаг 1: Амортизация 20% от себестоимости
  1 000 000 x 20% = 200 000
# Шаг 2: Балансовая стоимость
  1 000 000 - 350 000 - 200 000 = 450 000
= Ответ: $450 000`,
`# 1-qadam: Tannarxning 20% amortizatsiya
  1 000 000 x 20% = 200 000
# 2-qadam: Balans qiymati
  1 000 000 - 350 000 - 200 000 = 450 000
= Javob: $450 000`),
        task(9, 3, 'matrix', `Task 6: Is each year-end adjustment a debit or a credit to profit for the year?`,
          grid(DC, [['Inventory write-down', 0], ['Administrative expenses for November', 1], ['Increase in the allowance for receivables', 0], ['Wages owed for October', 0]]),
`A debit to profit is an extra expense; a credit reduces an expense.
- Inventory: NRV 30,000 is below cost 50,000, so cost of sales rises by 20,000. DEBIT.
- November's expense is a prepayment, taken out of this year. CREDIT.
- Allowance up from 45,000 to 47,500: an extra expense. DEBIT.
- Wages owed: an accrual, an extra expense. DEBIT.`,
`Дебет прибыли — дополнительный расход, кредит — уменьшение расхода.
- Запасы: NRV 30 000 ниже себестоимости 50 000, себестоимость продаж растёт на 20 000. ДЕБЕТ.
- Расход за ноябрь — предоплата, его убирают из этого года. КРЕДИТ.
- Резерв растёт с 45 000 до 47 500: дополнительный расход. ДЕБЕТ.
- Невыплаченная зарплата: начисление, дополнительный расход. ДЕБЕТ.`,
`Foydaning debeti — qo'shimcha xarajat, krediti — xarajatning kamayishi.
- Zaxira: NRV 30 000 tannarx 50 000 dan past, sotuv tannarxi 20 000 ga oshadi. DEBET.
- Noyabr xarajati — oldindan to'lov, shu yildan chiqariladi. KREDIT.
- Zaxira 45 000 dan 47 500 gacha oshadi: qo'shimcha xarajat. DEBET.
- To'lanmagan ish haqi: hisoblangan qarz, qo'shimcha xarajat. DEBET.`),
        task(12, 1, 'single', `Task 7: How does the bonus issue affect Teal Co's cash?`,
          pick(['It increases cash', 'It decreases cash', 'It does not affect cash'], 2),
`# Step 1: What a bonus issue is
  New shares are given to existing shareholders free, paid for out of a reserve.
# Step 2: Cash
  No money comes in or goes out.
= Answer: it does not affect cash`,
`# Шаг 1: Что такое бонусный выпуск
  Новые акции бесплатно дают нынешним акционерам за счёт резерва.
# Шаг 2: Деньги
  Деньги не поступают и не уходят.
= Ответ: на деньги не влияет`,
`# 1-qadam: Bonus emissiya nima
  Yangi aksiyalar mavjud aksiyadorlarga zaxira hisobidan bepul beriladi.
# 2-qadam: Pul
  Pul kelmaydi ham, ketmaydi ham.
= Javob: pulga ta'sir qilmaydi`),
        task(12, 2, 'number', `Task 8: What is the balance on share premium after the bonus issue? (in $)`,
          amount(50000, '$50,000'),
`# Step 1: New shares
  2,000,000 shares / 10 = 200,000 shares of $1 = 200,000
# Step 2: Paid for from share premium
  250,000 - 200,000 = 50,000
  (Share capital becomes 2,000,000 + 200,000 = 2,200,000.)
= Answer: $50,000`,
`# Шаг 1: Новые акции
  2 000 000 акций / 10 = 200 000 акций по $1 = 200 000
# Шаг 2: За счёт эмиссионного дохода
  250 000 - 200 000 = 50 000
  (Акционерный капитал становится 2 000 000 + 200 000 = 2 200 000.)
= Ответ: $50 000`,
`# 1-qadam: Yangi aksiyalar
  2 000 000 aksiya / 10 = $1 dan 200 000 aksiya = 200 000
# 2-qadam: Emissiya daromadi hisobidan
  250 000 - 200 000 = 50 000
  (Ustav kapitali 2 000 000 + 200 000 = 2 200 000 bo'ladi.)
= Javob: $50 000`),
      ],
    },

    {
      id: 'bppc22', bppRef: '22', bppPage: 248, area: 'cashflows', title: 'Linnet Co',
      intro: `Linnet Co is preparing its statement of cash flows for the year to 31 December ($000), using Kaplan's layout: the indirect method starts from operating profit, and interest paid is a financing cash flow. Profit or loss: operating profit 450; finance costs 50; profit before tax 400; income tax 260; profit for the year 140. Investments (carrying amount 30) were sold for 36. Fixtures that cost 90, carrying amount 50, were sold for 38. Property, plant and equipment at cost or valuation was 780 this year and 650 last year, with accumulated depreciation of 360 and 310; part of it was revalued during the year. 60,000 $1 shares were issued at $1.20 each.`,
      table: { head: ['Statement of financial position ($000)', 'This year', 'Last year'], rows: [
        ['Property, plant and equipment', '420', '340'], ['Intangible assets', '270', '220'], ['Investments', '0', '30'],
        ['Inventories', '170', '120'], ['Receivables', '410', '330'], ['Cash', '60', '5'],
        ['Share capital ($1 shares)', '240', '180'], ['Share premium', '192', '180'], ['Revaluation surplus', '110', '100'], ['Retained earnings', '205', '120'],
        ['Long-term loan', '120', '0'], ['Trade payables', '163', '130'], ['Bank overdraft', '0', '85'], ['Income tax payable', '300', '250'],
      ] },
      tasks: [
        task(17, 2, 'single', `Task 1: Using Kaplan's indirect method, what figure starts the cash flows from operating activities?`,
          pick(['$450,000 operating profit', '$400,000 profit before tax', '$140,000 profit for the year', '$510,000 operating profit plus finance costs'], 0),
`Kaplan's layout starts from operating profit, which is before finance costs and tax.
- Interest paid is then shown under financing, and tax paid under operating.
= Answer: $450,000 operating profit
! BPP's printed answer starts from profit before tax. That was the older presentation.`,
`В схеме Kaplan начинают с операционной прибыли, то есть до финансовых расходов и налога.
- Уплаченные проценты затем показывают в финансовой, а налог — в операционной.
= Ответ: операционная прибыль $450 000
! В напечатанном ответе BPP начинают с прибыли до налога. Это прежнее представление.`,
`Kaplan tuzilishida operatsion foydadan, ya'ni moliyaviy xarajat va soliqdan oldin boshlanadi.
- To'langan foiz keyin moliyaviyda, soliq esa operatsionda ko'rsatiladi.
= Javob: $450 000 operatsion foyda
! BPP chop etgan javobda soliqdan oldingi foydadan boshlanadi. Bu eski ko'rinish.`),
        task(17, 2, 'number', `Task 2: What is the depreciation charge to add back? (in $)`,
          amount(90000, '$90,000'),
`# Step 1: Depreciation on the fixtures sold
  Cost 90 - carrying amount 50 = 40
# Step 2: Rebuild accumulated depreciation
  Opening 310 - removed on disposal 40 + charge = closing 360
# Step 3: Charge
  360 - 310 + 40 = 90 ($000)
= Answer: $90,000`,
`# Шаг 1: Амортизация проданной мебели
  Себестоимость 90 - балансовая стоимость 50 = 40
# Шаг 2: Восстановим накопленную амортизацию
  Начало 310 - списано при выбытии 40 + начисление = конец 360
# Шаг 3: Начисление
  360 - 310 + 40 = 90 ($000)
= Ответ: $90 000`,
`# 1-qadam: Sotilgan jihozlar amortizatsiyasi
  Tannarx 90 - balans qiymati 50 = 40
# 2-qadam: Jamg'arilgan amortizatsiyani tiklaymiz
  Boshi 310 - chiqib ketishda olib tashlangan 40 + hisob = oxiri 360
# 3-qadam: Hisob
  360 - 310 + 40 = 90 ($000)
= Javob: $90 000`),
        task(17, 3, 'matrix', `Task 3: In the operating section, is each item added to or subtracted from operating profit?`,
          grid(['Add', 'Subtract'], [['Loss on sale of fixtures', 0], ['Profit on sale of investments', 1], ['Increase in inventories', 1], ['Increase in receivables', 1], ['Increase in trade payables', 0]]),
`- Loss on sale (50 - 38 = 12): reduced profit but cost no cash. ADD.
- Profit on investments (36 - 30 = 6): the cash is in investing, so take it out here. SUBTRACT.
- Inventories up 50: cash tied up. SUBTRACT.
- Receivables up 80: cash not yet collected. SUBTRACT.
- Payables up 33: cash not yet paid out. ADD.`,
`- Убыток от продажи (50 - 38 = 12): уменьшил прибыль без затрат денег. ПРИБАВИТЬ.
- Прибыль от инвестиций (36 - 30 = 6): деньги в инвестиционной, здесь её убирают. ВЫЧЕСТЬ.
- Запасы выросли на 50: деньги связаны. ВЫЧЕСТЬ.
- Дебиторы выросли на 80: деньги ещё не получены. ВЫЧЕСТЬ.
- Кредиторы выросли на 33: деньги ещё не уплачены. ПРИБАВИТЬ.`,
`- Sotuvdan zarar (50 - 38 = 12): foydani pulsiz kamaytirgan. QO'SHILADI.
- Investitsiyadan foyda (36 - 30 = 6): pul investitsiyada, bu yerdan olinadi. AYIRILADI.
- Zaxira 50 ga oshgan: pul bog'langan. AYIRILADI.
- Debitorlar 80 ga oshgan: pul hali olinmagan. AYIRILADI.
- Kreditorlar 33 ga oshgan: pul hali to'lanmagan. QO'SHILADI.`),
        task(17, 2, 'number', `Task 4: How much income tax was paid? (in $)`,
          amount(210000, '$210,000'),
`# Step 1: Tax account
  Opening liability 250 + charge 260 - closing liability 300 = paid
# Step 2: Calculate
  250 + 260 - 300 = 210 ($000)
= Answer: $210,000`,
`# Шаг 1: Счёт налога
  Обязательство на начало 250 + начислено 260 - обязательство на конец 300 = уплачено
# Шаг 2: Расчёт
  250 + 260 - 300 = 210 ($000)
= Ответ: $210 000`,
`# 1-qadam: Soliq hisobi
  Boshidagi majburiyat 250 + hisoblangan 260 - oxiridagi majburiyat 300 = to'langan
# 2-qadam: Hisob
  250 + 260 - 300 = 210 ($000)
= Javob: $210 000`),
        task(17, 2, 'number', `Task 5: How much was paid for property, plant and equipment? (in $)`,
          amount(210000, '$210,000'),
`# Step 1: Rebuild cost or valuation
  Opening 650 + revaluation (110 - 100 = 10) + purchases - disposals at cost 90 = closing 780
# Step 2: Solve
  Purchases = 780 - 650 - 10 + 90 = 210 ($000)
= Answer: $210,000
! The revaluation raised the asset without any cash, so take it out.`,
`# Шаг 1: Восстановим себестоимость или оценку
  Начало 650 + переоценка (110 - 100 = 10) + покупки - выбытия по себестоимости 90 = конец 780
# Шаг 2: Решим
  Покупки = 780 - 650 - 10 + 90 = 210 ($000)
= Ответ: $210 000
! Переоценка увеличила актив без денег, её исключают.`,
`# 1-qadam: Tannarx yoki bahoni tiklaymiz
  Boshi 650 + qayta baholash (110 - 100 = 10) + xaridlar - tannarxdagi chiqib ketish 90 = oxiri 780
# 2-qadam: Yechamiz
  Xaridlar = 780 - 650 - 10 + 90 = 210 ($000)
= Javob: $210 000
! Qayta baholash aktivni pulsiz oshirgan, u chiqariladi.`),
        task(17, 1, 'number', `Task 6: What are the total receipts from selling non-current assets? (in $)`,
          amount(74000, '$74,000'),
`# Step 1: Add both sales
  Fixtures 38 + investments 36 = 74 ($000)
= Answer: $74,000`,
`# Шаг 1: Сложим обе продажи
  Мебель 38 + инвестиции 36 = 74 ($000)
= Ответ: $74 000`,
`# 1-qadam: Ikkala sotuvni qo'shamiz
  Jihozlar 38 + investitsiyalar 36 = 74 ($000)
= Javob: $74 000`),
        task(17, 2, 'number', `Task 7: How much was paid in dividends? (in $)`,
          amount(55000, '$55,000'),
`# Step 1: Retained earnings account
  Opening 120 + profit 140 - dividends = closing 205
# Step 2: Solve
  Dividends = 120 + 140 - 205 = 55 ($000)
= Answer: $55,000`,
`# Шаг 1: Счёт нераспределённой прибыли
  Начало 120 + прибыль 140 - дивиденды = конец 205
# Шаг 2: Решим
  Дивиденды = 120 + 140 - 205 = 55 ($000)
= Ответ: $55 000`,
`# 1-qadam: Taqsimlanmagan foyda hisobi
  Boshi 120 + foyda 140 - dividendlar = oxiri 205
# 2-qadam: Yechamiz
  Dividendlar = 120 + 140 - 205 = 55 ($000)
= Javob: $55 000`),
        task(17, 1, 'number', `Task 8: What are the proceeds from the share issue? (in $)`,
          amount(72000, '$72,000'),
`# Step 1: Share capital and premium together
  (240 + 192) - (180 + 180) = 72 ($000)
# Step 2: Check
  60,000 shares x $1.20 = 72,000
= Answer: $72,000`,
`# Шаг 1: Капитал и эмиссионный доход вместе
  (240 + 192) - (180 + 180) = 72 ($000)
# Шаг 2: Проверка
  60 000 акций x $1,20 = 72 000
= Ответ: $72 000`,
`# 1-qadam: Kapital va emissiya daromadi birga
  (240 + 192) - (180 + 180) = 72 ($000)
# 2-qadam: Tekshiruv
  60 000 aksiya x $1,20 = 72 000
= Javob: $72 000`),
      ],
    },

    {
      id: 'bppc23', bppRef: '23', bppPage: 250, area: 'cashflows', title: 'Avocet Co',
      intro: `Avocet Co's figures for the year to 31 December are shown ($000). Profit or loss: operating profit 3,000; finance costs 350; profit before tax 2,650; income tax 800; profit for the year 1,850. During the year non-current assets that cost 1,000, with a carrying amount of 400, were sold for 650. The revaluation surplus came from revaluing land, which is not depreciated. Last year's tax was paid at the amount provided. The extra 10% loan notes were issued on 1 January and all their interest was paid in the year. Dividends paid were 900. Use Kaplan's layout: start from operating profit; interest paid goes under financing.`,
      table: { head: ['Statement of financial position ($000)', 'This year', 'Last year'], rows: [
        ['Non-current assets at cost or valuation', '12,500', '9,000'], ['Accumulated depreciation', '(6,200)', '(5,300)'],
        ['Inventories', '3,100', '3,500'], ['Receivables', '4,100', '3,300'], ['Cash at bank', '400', '200'],
        ['Share capital', '1,200', '1,200'], ['Revaluation surplus', '1,900', '1,300'], ['Retained earnings', '2,600', '1,650'],
        ['10% loan notes', '3,500', '2,500'], ['Trade payables', '3,900', '3,400'], ['Income tax payable', '800', '650'],
      ] },
      tasks: [
        task(17, 2, 'number', `Task 1: What is the depreciation charge for the year? (in $)`,
          amount(1500000, '$1,500,000'),
`# Step 1: Depreciation removed on the disposal
  1,000 - 400 = 600
# Step 2: Rebuild accumulated depreciation
  5,300 - 600 + charge = 6,200
# Step 3: Charge
  6,200 - 5,300 + 600 = 1,500 ($000)
= Answer: $1,500,000`,
`# Шаг 1: Амортизация, списанная при выбытии
  1 000 - 400 = 600
# Шаг 2: Восстановим накопленную амортизацию
  5 300 - 600 + начисление = 6 200
# Шаг 3: Начисление
  6 200 - 5 300 + 600 = 1 500 ($000)
= Ответ: $1 500 000`,
`# 1-qadam: Chiqib ketishda olib tashlangan amortizatsiya
  1 000 - 400 = 600
# 2-qadam: Jamg'arilgan amortizatsiyani tiklaymiz
  5 300 - 600 + hisob = 6 200
# 3-qadam: Hisob
  6 200 - 5 300 + 600 = 1 500 ($000)
= Javob: $1 500 000`),
        task(17, 1, 'number', `Task 2: What profit on disposal is subtracted in the operating section? (in $)`,
          amount(250000, '$250,000'),
`# Step 1: Proceeds less carrying amount
  650 - 400 = 250 ($000)
= Answer: $250,000 (the 650 cash goes under investing)`,
`# Шаг 1: Выручка минус балансовая стоимость
  650 - 400 = 250 ($000)
= Ответ: $250 000 (деньги 650 идут в инвестиционную)`,
`# 1-qadam: Tushum minus balans qiymati
  650 - 400 = 250 ($000)
= Javob: $250 000 (650 pul investitsiyaga boradi)`),
        task(17, 3, 'number', `Task 3: How much was paid for new non-current assets? (in $)`,
          amount(3900000, '$3,900,000'),
`# Step 1: Rebuild cost or valuation
  Opening 9,000 + revaluation (1,900 - 1,300 = 600) + additions - disposals 1,000 = closing 12,500
# Step 2: Solve
  Additions = 12,500 - 9,000 - 600 + 1,000 = 3,900 ($000)
= Answer: $3,900,000`,
`# Шаг 1: Восстановим себестоимость или оценку
  Начало 9 000 + переоценка (1 900 - 1 300 = 600) + покупки - выбытия 1 000 = конец 12 500
# Шаг 2: Решим
  Покупки = 12 500 - 9 000 - 600 + 1 000 = 3 900 ($000)
= Ответ: $3 900 000`,
`# 1-qadam: Tannarx yoki bahoni tiklaymiz
  Boshi 9 000 + qayta baholash (1 900 - 1 300 = 600) + xaridlar - chiqib ketish 1 000 = oxiri 12 500
# 2-qadam: Yechamiz
  Xaridlar = 12 500 - 9 000 - 600 + 1 000 = 3 900 ($000)
= Javob: $3 900 000`),
        task(17, 2, 'number', `Task 4: How much income tax was paid? (in $)`,
          amount(650000, '$650,000'),
`# Step 1: Tax account
  650 + 800 - 800 = 650 ($000)
= Answer: $650,000 (last year's liability, paid in full)`,
`# Шаг 1: Счёт налога
  650 + 800 - 800 = 650 ($000)
= Ответ: $650 000 (обязательство прошлого года, уплачено полностью)`,
`# 1-qadam: Soliq hisobi
  650 + 800 - 800 = 650 ($000)
= Javob: $650 000 (o'tgan yil majburiyati, to'liq to'langan)`),
        task(17, 2, 'matrix', `Task 5: Is each working capital change added or subtracted?`,
          grid(['Add', 'Subtract'], [['Inventories (down 400)', 0], ['Receivables (up 800)', 1], ['Trade payables (up 500)', 0]]),
`- Inventories fell: cash released. ADD.
- Receivables rose: cash not yet collected. SUBTRACT.
- Payables rose: cash not yet paid out. ADD.`,
`- Запасы снизились: деньги высвободились. ПРИБАВИТЬ.
- Дебиторы выросли: деньги ещё не получены. ВЫЧЕСТЬ.
- Кредиторы выросли: деньги ещё не уплачены. ПРИБАВИТЬ.`,
`- Zaxira kamaygan: pul bo'shagan. QO'SHILADI.
- Debitorlar oshgan: pul hali olinmagan. AYIRILADI.
- Kreditorlar oshgan: pul hali to'lanmagan. QO'SHILADI.`),
        task(17, 2, 'number', `Task 6: What is net cash from operating activities? (in $)`,
          amount(3700000, '$3,700,000'),
`# Step 1: Cash generated from operations
  3,000 + 1,500 - 250 + 400 - 800 + 500 = 4,350
# Step 2: Less tax paid
  4,350 - 650 = 3,700 ($000)
= Answer: $3,700,000`,
`# Шаг 1: Денежные средства от операций
  3 000 + 1 500 - 250 + 400 - 800 + 500 = 4 350
# Шаг 2: Минус уплаченный налог
  4 350 - 650 = 3 700 ($000)
= Ответ: $3 700 000`,
`# 1-qadam: Operatsiyalardan pul
  3 000 + 1 500 - 250 + 400 - 800 + 500 = 4 350
# 2-qadam: Minus to'langan soliq
  4 350 - 650 = 3 700 ($000)
= Javob: $3 700 000`),
        task(17, 2, 'single', `Task 7: What is the net cash flow from financing activities?`,
          pick(['$250,000 outflow', '$100,000 inflow', '$1,000,000 inflow', '$1,250,000 outflow'], 0),
`# Step 1: Each financing item
  New loan notes: 3,500 - 2,500 = +1,000
  Interest paid: 350 (all paid), so -350
  Dividends paid: -900
# Step 2: Net
  1,000 - 350 - 900 = -250 ($000)
= Answer: $250,000 outflow`,
`# Шаг 1: Каждая финансовая статья
  Новые облигации: 3 500 - 2 500 = +1 000
  Уплаченные проценты: 350 (уплачены полностью), значит -350
  Уплаченные дивиденды: -900
# Шаг 2: Итог
  1 000 - 350 - 900 = -250 ($000)
= Ответ: отток $250 000`,
`# 1-qadam: Har bir moliyaviy modda
  Yangi obligatsiyalar: 3 500 - 2 500 = +1 000
  To'langan foiz: 350 (to'liq to'langan), demak -350
  To'langan dividendlar: -900
# 2-qadam: Natija
  1 000 - 350 - 900 = -250 ($000)
= Javob: $250 000 chiqim`),
        task(17, 1, 'number', `Task 8: What is the net increase in cash for the year? (in $)`,
          amount(200000, '$200,000'),
`# Step 1: Add the three sections
  Operating 3,700 + investing (-3,900 + 650 = -3,250) + financing -250 = 200
# Step 2: Check
  Cash 200 at the start + 200 = 400 at the end. It agrees.
= Answer: $200,000`,
`# Шаг 1: Сложим три раздела
  Операционная 3 700 + инвестиционная (-3 900 + 650 = -3 250) + финансовая -250 = 200
# Шаг 2: Проверка
  Деньги 200 на начало + 200 = 400 на конец. Сходится.
= Ответ: $200 000`,
`# 1-qadam: Uch bo'limni qo'shamiz
  Operatsion 3 700 + investitsiya (-3 900 + 650 = -3 250) + moliyaviy -250 = 200
# 2-qadam: Tekshiruv
  Boshida 200 pul + 200 = oxirida 400. Mos keldi.
= Javob: $200 000`),
      ],
    },

    {
      id: 'bppc24', bppRef: '24', bppPage: 251, area: 'cashflows', title: 'Swift Co',
      intro: `Swift Co's figures for the year to 31 May are shown ($000). Profit or loss: operating profit 1,150 (after depreciation of 760); interest payable 12 (all paid); profit before tax 1,138; tax 210; profit for the year 928. Dividends paid were 300. Non-current assets with a carrying amount of 240 were sold for 210. The 10% loan was repaid on 31 May. Use Kaplan's layout: start from operating profit; interest and dividends paid go under financing.`,
      table: { head: ['Statement of financial position ($000)', 'This year', 'Last year'], rows: [
        ['Non-current assets (carrying amount)', '5,100', '3,000'], ['Inventory', '640', '560'], ['Trade receivables', '410', '260'], ['Bank', '0', '150'],
        ['Share capital', '3,800', '2,600'], ['Share premium', '340', '180'], ['Retained earnings', '1,138', '510'],
        ['10% loan', '0', '120'], ['Trade payables', '500', '400'], ['Taxation', '210', '160'], ['Bank overdraft', '162', '0'],
      ] },
      tasks: [
        task(17, 1, 'number', `Task 1: What loss on disposal is added back in the operating section? (in $)`,
          amount(30000, '$30,000'),
`# Step 1: Carrying amount less proceeds
  240 - 210 = 30 ($000)
= Answer: $30,000 (add it back: it reduced profit but cost no cash)`,
`# Шаг 1: Балансовая стоимость минус выручка
  240 - 210 = 30 ($000)
= Ответ: $30 000 (прибавляют: уменьшил прибыль без затрат денег)`,
`# 1-qadam: Balans qiymati minus tushum
  240 - 210 = 30 ($000)
= Javob: $30 000 (qo'shiladi: foydani pulsiz kamaytirgan)`),
        task(17, 3, 'number', `Task 2: How much was paid for non-current assets? (in $)`,
          amount(3100000, '$3,100,000'),
`# Step 1: Rebuild the carrying amount
  Opening 3,000 - depreciation 760 - disposals 240 + purchases = closing 5,100
# Step 2: Solve
  Purchases = 5,100 - 3,000 + 760 + 240 = 3,100 ($000)
= Answer: $3,100,000`,
`# Шаг 1: Восстановим балансовую стоимость
  Начало 3 000 - амортизация 760 - выбытия 240 + покупки = конец 5 100
# Шаг 2: Решим
  Покупки = 5 100 - 3 000 + 760 + 240 = 3 100 ($000)
= Ответ: $3 100 000`,
`# 1-qadam: Balans qiymatini tiklaymiz
  Boshi 3 000 - amortizatsiya 760 - chiqib ketish 240 + xaridlar = oxiri 5 100
# 2-qadam: Yechamiz
  Xaridlar = 5 100 - 3 000 + 760 + 240 = 3 100 ($000)
= Javob: $3 100 000`),
        task(17, 2, 'number', `Task 3: How much tax was paid? (in $)`,
          amount(160000, '$160,000'),
`# Step 1: Tax account
  160 + 210 - 210 = 160 ($000)
= Answer: $160,000`,
`# Шаг 1: Счёт налога
  160 + 210 - 210 = 160 ($000)
= Ответ: $160 000`,
`# 1-qadam: Soliq hisobi
  160 + 210 - 210 = 160 ($000)
= Javob: $160 000`),
        task(17, 2, 'matrix', `Task 4: Is each working capital change added or subtracted?`,
          grid(['Add', 'Subtract'], [['Inventory (up 80)', 1], ['Receivables (up 150)', 1], ['Trade payables (up 100)', 0]]),
`- Inventory rose: cash tied up. SUBTRACT.
- Receivables rose: cash not yet collected. SUBTRACT.
- Payables rose: cash not yet paid out. ADD.`,
`- Запасы выросли: деньги связаны. ВЫЧЕСТЬ.
- Дебиторы выросли: деньги ещё не получены. ВЫЧЕСТЬ.
- Кредиторы выросли: деньги ещё не уплачены. ПРИБАВИТЬ.`,
`- Zaxira oshgan: pul bog'langan. AYIRILADI.
- Debitorlar oshgan: pul hali olinmagan. AYIRILADI.
- Kreditorlar oshgan: pul hali to'lanmagan. QO'SHILADI.`),
        task(17, 2, 'number', `Task 5: What is net cash from operating activities? (in $)`,
          amount(1650000, '$1,650,000'),
`# Step 1: Cash generated from operations
  1,150 + 760 + 30 - 80 - 150 + 100 = 1,810
# Step 2: Less tax paid
  1,810 - 160 = 1,650 ($000)
= Answer: $1,650,000`,
`# Шаг 1: Денежные средства от операций
  1 150 + 760 + 30 - 80 - 150 + 100 = 1 810
# Шаг 2: Минус уплаченный налог
  1 810 - 160 = 1 650 ($000)
= Ответ: $1 650 000`,
`# 1-qadam: Operatsiyalardan pul
  1 150 + 760 + 30 - 80 - 150 + 100 = 1 810
# 2-qadam: Minus to'langan soliq
  1 810 - 160 = 1 650 ($000)
= Javob: $1 650 000`),
        task(17, 2, 'number', `Task 6: What were the proceeds from issuing shares? (in $)`,
          amount(1360000, '$1,360,000'),
`# Step 1: Share capital and premium together
  (3,800 + 340) - (2,600 + 180) = 1,360 ($000)
= Answer: $1,360,000`,
`# Шаг 1: Капитал и эмиссионный доход вместе
  (3 800 + 340) - (2 600 + 180) = 1 360 ($000)
= Ответ: $1 360 000`,
`# 1-qadam: Kapital va emissiya daromadi birga
  (3 800 + 340) - (2 600 + 180) = 1 360 ($000)
= Javob: $1 360 000`),
        task(17, 2, 'number', `Task 7: By how much did cash and cash equivalents DECREASE in the year? (in $)`,
          amount(312000, '$312,000'),
`# Step 1: Each section
  Operating 1,650
  Investing -3,100 + 210 = -2,890
  Financing 1,360 - 120 loan - 12 interest - 300 dividends = 928
# Step 2: Net
  1,650 - 2,890 + 928 = -312 ($000)
= Answer: a decrease of $312,000`,
`# Шаг 1: Каждый раздел
  Операционная 1 650
  Инвестиционная -3 100 + 210 = -2 890
  Финансовая 1 360 - 120 заём - 12 проценты - 300 дивиденды = 928
# Шаг 2: Итог
  1 650 - 2 890 + 928 = -312 ($000)
= Ответ: уменьшение на $312 000`,
`# 1-qadam: Har bir bo'lim
  Operatsion 1 650
  Investitsiya -3 100 + 210 = -2 890
  Moliyaviy 1 360 - 120 qarz - 12 foiz - 300 dividend = 928
# 2-qadam: Natija
  1 650 - 2 890 + 928 = -312 ($000)
= Javob: $312 000 kamayish`),
        task(17, 1, 'single', `Task 8: What are cash and cash equivalents at the end of the year?`,
          pick(['An overdraft of $162,000', 'Cash of $162,000', 'Nil', 'Cash of $150,000'], 0),
`# Step 1: Start of the year
  Bank 150 (no overdraft)
# Step 2: End of the year
  150 - 312 = -162: an overdraft, which is shown in the statement of financial position.
= Answer: an overdraft of $162,000`,
`# Шаг 1: Начало года
  Банк 150 (без овердрафта)
# Шаг 2: Конец года
  150 - 312 = -162: овердрафт, он и показан в отчёте о финансовом положении.
= Ответ: овердрафт $162 000`,
`# 1-qadam: Yil boshi
  Bank 150 (overdraftsiz)
# 2-qadam: Yil oxiri
  150 - 312 = -162: overdraft, u moliyaviy holat hisobotida ko'rsatilgan.
= Javob: $162 000 overdraft`),
      ],
    },

    {
      id: 'bppc25', bppRef: '25', bppPage: 252, area: 'cashflows', title: 'Osprey Co',
      intro: `Osprey Co's figures for the year to 31 October are shown ($000). Profit or loss: operating profit 14,200; interest paid 800; profit before tax 13,400; tax 4,000; profit for the year 9,400. No dividends were paid. Depreciation was 4,200. Assets with a carrying amount of 1,800 were sold at a profit of 600. Use Kaplan's layout: start from operating profit; interest paid goes under financing; overdrafts count as negative cash and cash equivalents.`,
      table: { head: ['Statement of financial position ($000)', 'This year', 'Last year'], rows: [
        ['Non-current assets (carrying amount)', '40,000', '25,000'], ['Inventory', '4,000', '8,500'], ['Trade receivables', '6,000', '4,400'], ['Cash', '2,200', '1,100'],
        ['Share capital', '18,000', '16,500'], ['Retained earnings', '15,700', '6,300'], ['9% loan notes', '7,000', '9,000'],
        ['Bank overdraft', '1,100', '500'], ['Trade payables', '7,500', '4,200'], ['Taxation', '2,900', '2,500'],
      ] },
      tasks: [
        task(17, 2, 'number', `Task 1: What are the proceeds from selling non-current assets? (in $)`,
          amount(2400000, '$2,400,000'),
`# Step 1: Proceeds = carrying amount + profit
  1,800 + 600 = 2,400 ($000)
= Answer: $2,400,000 (and the 600 profit is subtracted in the operating section)`,
`# Шаг 1: Выручка = балансовая стоимость + прибыль
  1 800 + 600 = 2 400 ($000)
= Ответ: $2 400 000 (а прибыль 600 вычитают в операционной)`,
`# 1-qadam: Tushum = balans qiymati + foyda
  1 800 + 600 = 2 400 ($000)
= Javob: $2 400 000 (600 foyda esa operatsionda ayiriladi)`),
        task(17, 3, 'number', `Task 2: How much was paid for non-current assets? (in $)`,
          amount(21000000, '$21,000,000'),
`# Step 1: Rebuild the carrying amount
  Opening 25,000 - depreciation 4,200 - disposals 1,800 + purchases = closing 40,000
# Step 2: Solve
  Purchases = 40,000 - 25,000 + 4,200 + 1,800 = 21,000 ($000)
= Answer: $21,000,000`,
`# Шаг 1: Восстановим балансовую стоимость
  Начало 25 000 - амортизация 4 200 - выбытия 1 800 + покупки = конец 40 000
# Шаг 2: Решим
  Покупки = 40 000 - 25 000 + 4 200 + 1 800 = 21 000 ($000)
= Ответ: $21 000 000`,
`# 1-qadam: Balans qiymatini tiklaymiz
  Boshi 25 000 - amortizatsiya 4 200 - chiqib ketish 1 800 + xaridlar = oxiri 40 000
# 2-qadam: Yechamiz
  Xaridlar = 40 000 - 25 000 + 4 200 + 1 800 = 21 000 ($000)
= Javob: $21 000 000`),
        task(17, 2, 'matrix', `Task 3: Is each working capital change added or subtracted?`,
          grid(['Add', 'Subtract'], [['Inventory (down 4,500)', 0], ['Receivables (up 1,600)', 1], ['Trade payables (up 3,300)', 0]]),
`- Inventory fell: cash released. ADD.
- Receivables rose: cash not yet collected. SUBTRACT.
- Payables rose: cash not yet paid out. ADD.`,
`- Запасы снизились: деньги высвободились. ПРИБАВИТЬ.
- Дебиторы выросли: деньги ещё не получены. ВЫЧЕСТЬ.
- Кредиторы выросли: деньги ещё не уплачены. ПРИБАВИТЬ.`,
`- Zaxira kamaygan: pul bo'shagan. QO'SHILADI.
- Debitorlar oshgan: pul hali olinmagan. AYIRILADI.
- Kreditorlar oshgan: pul hali to'lanmagan. QO'SHILADI.`),
        task(17, 2, 'number', `Task 4: How much tax was paid? (in $)`,
          amount(3600000, '$3,600,000'),
`# Step 1: Tax account
  2,500 + 4,000 - 2,900 = 3,600 ($000)
= Answer: $3,600,000`,
`# Шаг 1: Счёт налога
  2 500 + 4 000 - 2 900 = 3 600 ($000)
= Ответ: $3 600 000`,
`# 1-qadam: Soliq hisobi
  2 500 + 4 000 - 2 900 = 3 600 ($000)
= Javob: $3 600 000`),
        task(17, 2, 'number', `Task 5: What is net cash from operating activities? (in $)`,
          amount(20400000, '$20,400,000'),
`# Step 1: Cash generated from operations
  14,200 + 4,200 - 600 + 4,500 - 1,600 + 3,300 = 24,000
# Step 2: Less tax paid
  24,000 - 3,600 = 20,400 ($000)
= Answer: $20,400,000`,
`# Шаг 1: Денежные средства от операций
  14 200 + 4 200 - 600 + 4 500 - 1 600 + 3 300 = 24 000
# Шаг 2: Минус уплаченный налог
  24 000 - 3 600 = 20 400 ($000)
= Ответ: $20 400 000`,
`# 1-qadam: Operatsiyalardan pul
  14 200 + 4 200 - 600 + 4 500 - 1 600 + 3 300 = 24 000
# 2-qadam: Minus to'langan soliq
  24 000 - 3 600 = 20 400 ($000)
= Javob: $20 400 000`),
        task(17, 2, 'single', `Task 6: What is the net cash flow from financing activities?`,
          pick(['$1,300,000 outflow', '$500,000 outflow', '$3,500,000 inflow', '$2,100,000 outflow'], 0),
`# Step 1: Each financing item
  Shares issued: 18,000 - 16,500 = +1,500
  Loan notes repaid: 9,000 - 7,000 = -2,000
  Interest paid: -800
# Step 2: Net
  1,500 - 2,000 - 800 = -1,300 ($000)
= Answer: $1,300,000 outflow`,
`# Шаг 1: Каждая финансовая статья
  Выпуск акций: 18 000 - 16 500 = +1 500
  Погашение облигаций: 9 000 - 7 000 = -2 000
  Уплаченные проценты: -800
# Шаг 2: Итог
  1 500 - 2 000 - 800 = -1 300 ($000)
= Ответ: отток $1 300 000`,
`# 1-qadam: Har bir moliyaviy modda
  Aksiya chiqarish: 18 000 - 16 500 = +1 500
  Obligatsiyalarni qaytarish: 9 000 - 7 000 = -2 000
  To'langan foiz: -800
# 2-qadam: Natija
  1 500 - 2 000 - 800 = -1 300 ($000)
= Javob: $1 300 000 chiqim`),
        task(17, 2, 'number', `Task 7: What were cash and cash equivalents at the START of the year? (in $)`,
          amount(600000, '$600,000'),
`# Step 1: Cash less overdraft
  1,100 - 500 = 600 ($000)
# Step 2: Check the year's movement
  Operating 20,400 + investing (-21,000 + 2,400) + financing -1,300 = +500
  600 + 500 = 1,100, and at the end 2,200 - 1,100 = 1,100. It agrees.
= Answer: $600,000`,
`# Шаг 1: Деньги минус овердрафт
  1 100 - 500 = 600 ($000)
# Шаг 2: Проверим движение за год
  Операционная 20 400 + инвестиционная (-21 000 + 2 400) + финансовая -1 300 = +500
  600 + 500 = 1 100, а на конец 2 200 - 1 100 = 1 100. Сходится.
= Ответ: $600 000`,
`# 1-qadam: Pul minus overdraft
  1 100 - 500 = 600 ($000)
# 2-qadam: Yil harakatini tekshiramiz
  Operatsion 20 400 + investitsiya (-21 000 + 2 400) + moliyaviy -1 300 = +500
  600 + 500 = 1 100, oxirida esa 2 200 - 1 100 = 1 100. Mos keldi.
= Javob: $600 000`),
      ],
    },

    {
      id: 'bppc31', bppRef: '31', bppPage: 264, area: 'groups', title: 'Robin and Lark',
      intro: `Robin bought 75% of Lark's equity on 1 January last year for $160,000, when Lark's retained earnings were $60,000. The fair value of the non-controlling interest (NCI) at that date was $50,000. Lark's share capital is $120,000. This year Robin sold goods that cost $90,000 to Lark for $120,000; 40% of them are still in Lark's inventory. At 31 December this year: Robin's cost of sales $3,200,000 and Lark's $700,000; retained earnings: Robin $520,000, Lark $180,000.`,
      tasks: [
        task(19, 3, 'number', `Task 1: What is goodwill on acquisition? (in $)`,
          amount(30000, '$30,000'),
`# Step 1: Consideration plus NCI
  160,000 + 50,000 = 210,000
# Step 2: Lark's net assets at acquisition
  Share capital 120,000 + retained earnings 60,000 = 180,000
# Step 3: Goodwill
  210,000 - 180,000 = 30,000
= Answer: $30,000`,
`# Шаг 1: Возмещение плюс NCI
  160 000 + 50 000 = 210 000
# Шаг 2: Чистые активы Lark на дату покупки
  Капитал 120 000 + нераспределённая прибыль 60 000 = 180 000
# Шаг 3: Гудвил
  210 000 - 180 000 = 30 000
= Ответ: $30 000`,
`# 1-qadam: To'lov plyus NCI
  160 000 + 50 000 = 210 000
# 2-qadam: Lark ning xarid sanasidagi sof aktivlari
  Kapital 120 000 + taqsimlanmagan foyda 60 000 = 180 000
# 3-qadam: Gudvill
  210 000 - 180 000 = 30 000
= Javob: $30 000`),
        task(20, 2, 'number', `Task 2: What is the unrealised profit in inventory? (in $)`,
          amount(12000, '$12,000'),
`# Step 1: Profit on the intra-group sale
  120,000 - 90,000 = 30,000
# Step 2: Part still unsold
  30,000 x 40% = 12,000
= Answer: $12,000`,
`# Шаг 1: Прибыль от внутригрупповой продажи
  120 000 - 90 000 = 30 000
# Шаг 2: Часть, ещё не проданная
  30 000 x 40% = 12 000
= Ответ: $12 000`,
`# 1-qadam: Guruh ichidagi sotuvdan foyda
  120 000 - 90 000 = 30 000
# 2-qadam: Hali sotilmagan qism
  30 000 x 40% = 12 000
= Javob: $12 000`),
        task(20, 2, 'number', `Task 3: What is consolidated cost of sales? (in $)`,
          amount(3792000, '$3,792,000'),
`# Step 1: Add both companies
  3,200,000 + 700,000 = 3,900,000
# Step 2: Take out the intra-group purchase
  3,900,000 - 120,000 = 3,780,000
# Step 3: Add the unrealised profit
  3,780,000 + 12,000 = 3,792,000
= Answer: $3,792,000
! Unrealised profit INCREASES cost of sales, because it reduces closing inventory.`,
`# Шаг 1: Сложим обе компании
  3 200 000 + 700 000 = 3 900 000
# Шаг 2: Уберём внутригрупповую закупку
  3 900 000 - 120 000 = 3 780 000
# Шаг 3: Прибавим нереализованную прибыль
  3 780 000 + 12 000 = 3 792 000
= Ответ: $3 792 000
! Нереализованная прибыль УВЕЛИЧИВАЕТ себестоимость, ведь она уменьшает запасы на конец.`,
`# 1-qadam: Ikkala kompaniyani qo'shamiz
  3 200 000 + 700 000 = 3 900 000
# 2-qadam: Guruh ichidagi xaridni chiqaramiz
  3 900 000 - 120 000 = 3 780 000
# 3-qadam: Amalga oshmagan foydani qo'shamiz
  3 780 000 + 12 000 = 3 792 000
= Javob: $3 792 000
! Amalga oshmagan foyda tannarxni OSHIRADI, chunki yakuniy zaxirani kamaytiradi.`),
        task(19, 2, 'multi', `Task 4: Which TWO statements about the non-controlling interest are correct?`,
          { options: [
            'The NCI is the shares in the whole group not held by the parent.',
            'The NCI is the shares in the subsidiary not held by the parent.',
            '25% of Robin\'s consolidated retained earnings goes to the NCI.',
            '25% of Lark\'s profit for the year goes to the NCI.',
          ], correctIndices: [1, 3] },
`- The NCI owns part of the SUBSIDIARY only, not of the parent or the whole group. The second statement is CORRECT.
- So the NCI shares in Lark's profit, 25% of it. The fourth statement is CORRECT.
- It has no share of Robin's own retained earnings.
= Answer: shares in the subsidiary not held by the parent; 25% of Lark's profit`,
`- NCI владеет частью только ДОЧЕРНЕЙ, а не материнской или всей группы. Второе утверждение ВЕРНО.
- Значит, NCI получает 25% прибыли Lark. Четвёртое утверждение ВЕРНО.
- В собственной нераспределённой прибыли Robin у NCI доли нет.
= Ответ: акции дочерней, не принадлежащие материнской; 25% прибыли Lark`,
`- NCI faqat SHO'BAning bir qismiga egalik qiladi, ona yoki butun guruhga emas. Ikkinchi fikr TO'G'RI.
- Demak, NCI Lark foydasining 25% ini oladi. To'rtinchi fikr TO'G'RI.
- Robin ning o'z taqsimlanmagan foydasida NCI ulushi yo'q.
= Javob: sho'badagi ona kompaniyaga tegishli bo'lmagan aksiyalar; Lark foydasining 25%`),
        task(19, 6, 'number', `Task 5: What are consolidated retained earnings? (in $)`,
          amount(598000, '$598,000'),
`# Step 1: Robin's retained earnings, less the unrealised profit (Robin made the sale)
  520,000 - 12,000 = 508,000
# Step 2: Lark's profit since acquisition
  180,000 - 60,000 = 120,000
# Step 3: Group share of it
  120,000 x 75% = 90,000
# Step 4: Total
  508,000 + 90,000 = 598,000
= Answer: $598,000
! The PARENT sold the goods, so the whole unrealised profit comes off the parent's retained earnings.`,
`# Шаг 1: Нераспределённая прибыль Robin минус нереализованная прибыль (продавал Robin)
  520 000 - 12 000 = 508 000
# Шаг 2: Прибыль Lark после покупки
  180 000 - 60 000 = 120 000
# Шаг 3: Доля группы
  120 000 x 75% = 90 000
# Шаг 4: Итог
  508 000 + 90 000 = 598 000
= Ответ: $598 000
! Продавала МАТЕРИНСКАЯ, поэтому вся нереализованная прибыль вычитается из её прибыли.`,
`# 1-qadam: Robin taqsimlanmagan foydasi minus amalga oshmagan foyda (Robin sotgan)
  520 000 - 12 000 = 508 000
# 2-qadam: Lark ning xariddan keyingi foydasi
  180 000 - 60 000 = 120 000
# 3-qadam: Guruh ulushi
  120 000 x 75% = 90 000
# 4-qadam: Jami
  508 000 + 90 000 = 598 000
= Javob: $598 000
! ONA kompaniya sotgan, shuning uchun butun amalga oshmagan foyda uning foydasidan ayiriladi.`),
      ],
    },

    {
      id: 'bppc32', bppRef: '32', bppPage: 265, area: 'groups', title: 'Heath and Moss',
      intro: `Heath bought 75% of Moss's $1 ordinary shares when Moss's retained earnings were $4,000,000. Moss's share capital is $40,000,000. The fair value of the NCI at acquisition was $12,500,000 and goodwill was $1,500,000. This year Heath sold goods that cost $10,000,000 to Moss at cost plus 25%; Moss still holds 40% of them. At the year end Moss owes Heath $2,000,000 for these goods. Moss has declared a dividend, part of it due to Heath, and Heath has declared a dividend to its own shareholders. Moss's retained earnings are now $12,000,000.`,
      tasks: [
        task(19, 3, 'number', `Task 1: What did Heath pay for its shares in Moss? (in $)`,
          amount(33000000, '$33,000,000'),
`# Step 1: The goodwill formula
  Goodwill = consideration + NCI - net assets at acquisition
# Step 2: Net assets at acquisition
  40,000,000 + 4,000,000 = 44,000,000
# Step 3: Solve
  Consideration = 1,500,000 + 44,000,000 - 12,500,000 = 33,000,000
= Answer: $33,000,000`,
`# Шаг 1: Формула гудвила
  Гудвил = возмещение + NCI - чистые активы на дату покупки
# Шаг 2: Чистые активы на дату покупки
  40 000 000 + 4 000 000 = 44 000 000
# Шаг 3: Решим
  Возмещение = 1 500 000 + 44 000 000 - 12 500 000 = 33 000 000
= Ответ: $33 000 000`,
`# 1-qadam: Gudvill formulasi
  Gudvill = to'lov + NCI - xarid sanasidagi sof aktivlar
# 2-qadam: Xarid sanasidagi sof aktivlar
  40 000 000 + 4 000 000 = 44 000 000
# 3-qadam: Yechamiz
  To'lov = 1 500 000 + 44 000 000 - 12 500 000 = 33 000 000
= Javob: $33 000 000`),
        task(19, 2, 'single', `Task 2: How is the dividend due to Heath from Moss treated in the consolidated statements?`,
          pick(['Included in consolidated profit for the year', 'Added to the NCI', 'Included in consolidated current liabilities', 'Cancelled on consolidation'], 3),
`One group company owes it and another is owed it, so to the group as a whole the net effect is nil.
- Moss's payable and Heath's receivable cancel, and so do Moss's payout and Heath's income.
= Answer: cancelled on consolidation`,
`Одна компания группы должна, другая получает, поэтому для группы в целом эффект нулевой.
- Кредиторка Moss и дебиторка Heath взаимно исключаются, как и выплата Moss и доход Heath.
= Ответ: исключается при консолидации`,
`Guruhning bir kompaniyasi qarzdor, boshqasi oladi, shuning uchun butun guruh uchun ta'sir nol.
- Moss kreditorligi va Heath debitorligi, Moss to'lovi va Heath daromadi bir-birini yo'qqa chiqaradi.
= Javob: konsolidatsiyada chiqariladi`),
        task(19, 2, 'single', `Task 3: How is the dividend Heath has declared to its own shareholders treated?`,
          pick(['Deducted from consolidated profit for the year', 'Deducted from consolidated current assets', 'Included in consolidated current liabilities', 'Cancelled on consolidation'], 2),
`This dividend is owed to people OUTSIDE the group, so it is a real liability of the group.
- It is not an expense, so it never goes through profit.
- Declared before the year end and unpaid, it is a current liability.
= Answer: included in consolidated current liabilities`,
`Этот дивиденд причитается тем, кто ВНЕ группы, поэтому это реальное обязательство группы.
- Это не расход, через прибыль он не проходит.
- Объявлен до конца года и не выплачен — краткосрочное обязательство.
= Ответ: включается в консолидированные краткосрочные обязательства`,
`Bu dividend guruhdan TASHQARIDAGILARGA tegishli, demak bu guruhning haqiqiy majburiyati.
- Bu xarajat emas, foyda orqali o'tmaydi.
- Yil oxirigacha e'lon qilingan va to'lanmagan — joriy majburiyat.
= Javob: konsolidatsiyalangan joriy majburiyatlarga kiritiladi`),
        task(20, 2, 'number', `Task 4: What is the unrealised profit on the intra-group sale? (in $)`,
          amount(1000000, '$1,000,000'),
`# Step 1: Profit on the sale
  10,000,000 x 25% = 2,500,000
# Step 2: Part still unsold
  2,500,000 x 40% = 1,000,000
= Answer: $1,000,000`,
`# Шаг 1: Прибыль от продажи
  10 000 000 x 25% = 2 500 000
# Шаг 2: Часть, ещё не проданная
  2 500 000 x 40% = 1 000 000
= Ответ: $1 000 000`,
`# 1-qadam: Sotuvdan foyda
  10 000 000 x 25% = 2 500 000
# 2-qadam: Hali sotilmagan qism
  2 500 000 x 40% = 1 000 000
= Javob: $1 000 000`),
        task(20, 1, 'matrix', `Task 5: How is the unrealised profit adjustment posted?`,
          grid(DC, [['Inventory', 1], ['Retained earnings', 0]]),
`The profit is not yet earned by the group, so take it out of both inventory and profit.
- Inventory is reduced. CREDIT.
- Heath's retained earnings are reduced (Heath was the seller). DEBIT.`,
`Группа ещё не заработала эту прибыль, её убирают из запасов и из прибыли.
- Запасы уменьшаются. КРЕДИТ.
- Нераспределённая прибыль Heath уменьшается (продавал Heath). ДЕБЕТ.`,
`Guruh bu foydani hali topmagan, u zaxiradan ham, foydadan ham chiqariladi.
- Zaxira kamayadi. KREDIT.
- Heath taqsimlanmagan foydasi kamayadi (Heath sotgan). DEBET.`),
        task(19, 1, 'matrix', `Task 6: How is the $2,000,000 Moss owes Heath dealt with on consolidation?`,
          grid(DC, [['Payables', 0], ['Receivables', 1]]),
`The group cannot owe money to itself, so both balances are removed.
- Moss's payable to Heath is cancelled. DEBIT payables.
- Heath's receivable from Moss is cancelled. CREDIT receivables.`,
`Группа не может быть должна сама себе, оба остатка убирают.
- Долг Moss перед Heath исключается. ДЕБЕТ кредиторов.
- Дебиторка Heath к Moss исключается. КРЕДИТ дебиторов.`,
`Guruh o'ziga qarzdor bo'lolmaydi, ikkala qoldiq chiqariladi.
- Moss ning Heath oldidagi qarzi chiqariladi. Kreditorlar DEBETi.
- Heath ning Moss dan debitorligi chiqariladi. Debitorlar KREDITi.`),
        task(19, 4, 'number', `Task 7: What is the NCI in the consolidated statement of financial position? (in $)`,
          amount(14500000, '$14,500,000'),
`# Step 1: Fair value of the NCI at acquisition
  12,500,000
# Step 2: NCI share of Moss's post-acquisition profit
  (12,000,000 - 4,000,000) x 25% = 2,000,000
# Step 3: Total
  12,500,000 + 2,000,000 = 14,500,000
= Answer: $14,500,000
! The unrealised profit does not touch the NCI here, because the PARENT made the sale.`,
`# Шаг 1: Справедливая стоимость NCI на дату покупки
  12 500 000
# Шаг 2: Доля NCI в прибыли Moss после покупки
  (12 000 000 - 4 000 000) x 25% = 2 000 000
# Шаг 3: Итог
  12 500 000 + 2 000 000 = 14 500 000
= Ответ: $14 500 000
! Нереализованная прибыль здесь не касается NCI, ведь продавала МАТЕРИНСКАЯ.`,
`# 1-qadam: Xarid sanasidagi NCI adolatli qiymati
  12 500 000
# 2-qadam: Moss ning xariddan keyingi foydasidagi NCI ulushi
  (12 000 000 - 4 000 000) x 25% = 2 000 000
# 3-qadam: Jami
  12 500 000 + 2 000 000 = 14 500 000
= Javob: $14 500 000
! Amalga oshmagan foyda bu yerda NCI ga tegmaydi, chunki ONA kompaniya sotgan.`),
      ],
    },

    {
      id: 'bppc33', bppRef: '33', bppPage: 266, area: 'groups', title: 'Fern and Holly',
      intro: `A year ago Fern bought 3,000,000 of Holly's 5,000,000 $1 shares for $3,600,000, when Holly's retained earnings were $100,000. The fair value of the NCI at acquisition was $2,200,000. This year Fern sold goods to Holly invoiced at $300,000, at cost plus 25%; half of them are still in Holly's inventory. Holly owes Fern $40,000 at the year end. Retained earnings at the year end: Fern $900,000, Holly $400,000.`,
      tasks: [
        task(19, 3, 'number', `Task 1: What is goodwill on acquisition? (in $)`,
          amount(700000, '$700,000'),
`# Step 1: Total A, consideration plus NCI
  3,600,000 + 2,200,000 = 5,800,000
# Step 2: Total B, net assets at acquisition
  5,000,000 + 100,000 = 5,100,000
# Step 3: Goodwill
  5,800,000 - 5,100,000 = 700,000
= Answer: $700,000`,
`# Шаг 1: Итог A, возмещение плюс NCI
  3 600 000 + 2 200 000 = 5 800 000
# Шаг 2: Итог B, чистые активы на дату покупки
  5 000 000 + 100 000 = 5 100 000
# Шаг 3: Гудвил
  5 800 000 - 5 100 000 = 700 000
= Ответ: $700 000`,
`# 1-qadam: A jami, to'lov plyus NCI
  3 600 000 + 2 200 000 = 5 800 000
# 2-qadam: B jami, xarid sanasidagi sof aktivlar
  5 000 000 + 100 000 = 5 100 000
# 3-qadam: Gudvill
  5 800 000 - 5 100 000 = 700 000
= Javob: $700 000`),
        task(19, 2, 'single', `Task 2: If A is consideration plus the NCI's fair value, and B is the net assets acquired, what is the goodwill formula?`,
          pick(['A minus 100% of B', 'A minus 60% of B', 'A plus 100% of B', 'A plus 60% of B'], 0),
`A already includes the NCI at fair value, so it covers 100% of the subsidiary.
- So it is compared with 100% of the net assets.
= Answer: A minus 100% of B
! Taking only 60% of B would count the NCI's share of net assets twice.`,
`A уже включает NCI по справедливой стоимости, то есть охватывает 100% дочерней.
- Поэтому его сравнивают со 100% чистых активов.
= Ответ: A минус 100% B
! Если взять только 60% B, доля NCI в чистых активах будет учтена дважды.`,
`A NCI ni adolatli qiymatda o'z ichiga oladi, ya'ni sho'baning 100% ini qamraydi.
- Shuning uchun u sof aktivlarning 100% i bilan solishtiriladi.
= Javob: A minus B ning 100%
! B ning faqat 60% olinsa, NCI ning sof aktivlardagi ulushi ikki marta hisoblanadi.`),
        task(20, 2, 'single', `Task 3: What is the unrealised profit on the intra-group sale?`,
          pick(['$30,000', '$60,000', '$37,500', '$75,000'], 0),
`# Step 1: Profit in the $300,000 price (cost plus 25%)
  300,000 x 25/125 = 60,000
# Step 2: Half is still unsold
  60,000 x 50% = 30,000
= Answer: $30,000
! 300,000 x 25% = 75,000 treats the mark-up as a margin. Use 25/125.`,
`# Шаг 1: Прибыль в цене $300 000 (себестоимость плюс 25%)
  300 000 x 25/125 = 60 000
# Шаг 2: Половина ещё не продана
  60 000 x 50% = 30 000
= Ответ: $30 000
! 300 000 x 25% = 75 000 — это маржа, а не наценка. Берите 25/125.`,
`# 1-qadam: $300 000 narxdagi foyda (tannarx plyus 25%)
  300 000 x 25/125 = 60 000
# 2-qadam: Yarmi hali sotilmagan
  60 000 x 50% = 30 000
= Javob: $30 000
! 300 000 x 25% = 75 000 — bu marja, ustama emas. 25/125 oling.`),
        task(19, 2, 'multi', `Task 4: Control makes a parent-subsidiary relationship. Which TWO of these show that one company controls another?`,
          { options: [
            'Owning more than 50% of the voting shares',
            'Owning 40% of the ordinary shares and 80% of the non-voting preference shares',
            'Having significant influence over its policies',
            'Having the power to appoint or remove most of the board',
          ], correctIndices: [0, 3] },
`- More than 50% of the votes: control. YES.
- 40% of the votes: not control; non-voting shares add no votes.
- Significant influence: that makes an ASSOCIATE, not a subsidiary.
- Power over most of the board: control. YES.
= Answer: over 50% of the voting shares; power to appoint most of the board`,
`- Более 50% голосов: контроль. ДА.
- 40% голосов: не контроль; акции без голоса голосов не добавляют.
- Значительное влияние: это АССОЦИИРОВАННАЯ, а не дочерняя.
- Власть над большинством совета: контроль. ДА.
= Ответ: более 50% голосующих акций; право назначать большинство совета`,
`- Ovozlarning 50% dan ko'pi: nazorat. HA.
- 40% ovoz: nazorat emas; ovozsiz aksiyalar ovoz qo'shmaydi.
- Sezilarli ta'sir: bu ASSOTSIATSIYALANGAN, sho'ba emas.
- Kengash ko'pchiligi ustidan hokimiyat: nazorat. HA.
= Javob: ovozli aksiyalarning 50% dan ko'pi; kengash ko'pchiligini tayinlash huquqi`),
        task(19, 6, 'number', `Task 5: What are consolidated retained earnings? (in $)`,
          amount(1050000, '$1,050,000'),
`# Step 1: Fern's retained earnings, less the unrealised profit (Fern made the sale)
  900,000 - 30,000 = 870,000
# Step 2: Holly's profit since acquisition
  400,000 - 100,000 = 300,000
# Step 3: Group share (60%)
  300,000 x 60% = 180,000
# Step 4: Total
  870,000 + 180,000 = 1,050,000
= Answer: $1,050,000`,
`# Шаг 1: Нераспределённая прибыль Fern минус нереализованная прибыль (продавал Fern)
  900 000 - 30 000 = 870 000
# Шаг 2: Прибыль Holly после покупки
  400 000 - 100 000 = 300 000
# Шаг 3: Доля группы (60%)
  300 000 x 60% = 180 000
# Шаг 4: Итог
  870 000 + 180 000 = 1 050 000
= Ответ: $1 050 000`,
`# 1-qadam: Fern taqsimlanmagan foydasi minus amalga oshmagan foyda (Fern sotgan)
  900 000 - 30 000 = 870 000
# 2-qadam: Holly ning xariddan keyingi foydasi
  400 000 - 100 000 = 300 000
# 3-qadam: Guruh ulushi (60%)
  300 000 x 60% = 180 000
# 4-qadam: Jami
  870 000 + 180 000 = 1 050 000
= Javob: $1 050 000`),
      ],
    },

    {
      id: 'bppc34', bppRef: '34', bppPage: 268, area: 'groups', title: 'Ash and Rowan',
      intro: `Ash bought 2,400,000 of Rowan's 3,000,000 $1 shares two years ago. For the year ($000): Ash: revenue 7,200; cost of sales 4,100; distribution 1,200; administration 800; dividend received from Rowan 160; tax 450. Rowan: revenue 3,000; cost of sales 1,700; distribution 550; administration 350; tax 90. During the year Ash sold goods that cost $150,000 to Rowan for $250,000; 40% of them are still in Rowan's inventory.`,
      tasks: [
        task(20, 2, 'number', `Task 1: What is consolidated revenue? (in $)`,
          amount(9950000, '$9,950,000'),
`# Step 1: Add both companies in full
  7,200 + 3,000 = 10,200
# Step 2: Take out the intra-group sale
  10,200 - 250 = 9,950 ($000)
= Answer: $9,950,000`,
`# Шаг 1: Сложим обе компании полностью
  7 200 + 3 000 = 10 200
# Шаг 2: Уберём внутригрупповую продажу
  10 200 - 250 = 9 950 ($000)
= Ответ: $9 950 000`,
`# 1-qadam: Ikkala kompaniyani to'liq qo'shamiz
  7 200 + 3 000 = 10 200
# 2-qadam: Guruh ichidagi sotuvni chiqaramiz
  10 200 - 250 = 9 950 ($000)
= Javob: $9 950 000`),
        task(20, 2, 'number', `Task 2: What is the unrealised profit in inventory? (in $)`,
          amount(40000, '$40,000'),
`# Step 1: Profit on the sale
  250,000 - 150,000 = 100,000
# Step 2: Part still unsold
  100,000 x 40% = 40,000
= Answer: $40,000`,
`# Шаг 1: Прибыль от продажи
  250 000 - 150 000 = 100 000
# Шаг 2: Часть, ещё не проданная
  100 000 x 40% = 40 000
= Ответ: $40 000`,
`# 1-qadam: Sotuvdan foyda
  250 000 - 150 000 = 100 000
# 2-qadam: Hali sotilmagan qism
  100 000 x 40% = 40 000
= Javob: $40 000`),
        task(20, 3, 'number', `Task 3: What is consolidated cost of sales? (in $)`,
          amount(5590000, '$5,590,000'),
`# Step 1: Add both companies
  4,100 + 1,700 = 5,800
# Step 2: Take out the intra-group purchase
  5,800 - 250 = 5,550
# Step 3: Add the unrealised profit
  5,550 + 40 = 5,590 ($000)
= Answer: $5,590,000`,
`# Шаг 1: Сложим обе компании
  4 100 + 1 700 = 5 800
# Шаг 2: Уберём внутригрупповую закупку
  5 800 - 250 = 5 550
# Шаг 3: Прибавим нереализованную прибыль
  5 550 + 40 = 5 590 ($000)
= Ответ: $5 590 000`,
`# 1-qadam: Ikkala kompaniyani qo'shamiz
  4 100 + 1 700 = 5 800
# 2-qadam: Guruh ichidagi xaridni chiqaramiz
  5 800 - 250 = 5 550
# 3-qadam: Amalga oshmagan foydani qo'shamiz
  5 550 + 40 = 5 590 ($000)
= Javob: $5 590 000`),
        task(20, 2, 'single', `Task 4: How is the $160,000 dividend Ash received from Rowan treated in the consolidated statement of profit or loss?`,
          pick(['Added to group profit as investment income', 'Cancelled on consolidation', 'Shown as part of revenue', 'Deducted from the NCI'], 1),
`It is money moving inside the group: Rowan pays it and Ash receives it.
- Rowan's profits are already added in line by line, so counting the dividend too would double count.
= Answer: cancelled on consolidation`,
`Это движение денег внутри группы: Rowan платит, Ash получает.
- Прибыль Rowan уже сложена построчно, учесть ещё и дивиденд — двойной счёт.
= Ответ: исключается при консолидации`,
`Bu guruh ichidagi pul harakati: Rowan to'laydi, Ash oladi.
- Rowan foydasi allaqachon satrma-satr qo'shilgan, dividendni ham qo'shish — ikki marta hisoblash.
= Javob: konsolidatsiyada chiqariladi`),
        task(20, 3, 'number', `Task 5: What is the profit attributable to the NCI? (in $)`,
          amount(62000, '$62,000'),
`# Step 1: Rowan's profit for the year
  3,000 - 1,700 - 550 - 350 - 90 = 310
# Step 2: NCI share (20%)
  310 x 20% = 62 ($000)
= Answer: $62,000
! Ash, the parent, made the sale, so the unrealised profit does not reduce the NCI's share.`,
`# Шаг 1: Прибыль Rowan за год
  3 000 - 1 700 - 550 - 350 - 90 = 310
# Шаг 2: Доля NCI (20%)
  310 x 20% = 62 ($000)
= Ответ: $62 000
! Продавала материнская Ash, поэтому нереализованная прибыль долю NCI не уменьшает.`,
`# 1-qadam: Rowan ning yillik foydasi
  3 000 - 1 700 - 550 - 350 - 90 = 310
# 2-qadam: NCI ulushi (20%)
  310 x 20% = 62 ($000)
= Javob: $62 000
! Ona kompaniya Ash sotgan, shuning uchun amalga oshmagan foyda NCI ulushini kamaytirmaydi.`),
        task(20, 3, 'number', `Task 6: What is the profit attributable to the owners of Ash? (in $)`,
          amount(858000, '$858,000'),
`# Step 1: Group profit for the year
  Gross profit 9,950 - 5,590 = 4,360
  Less expenses (1,200 + 550) + (800 + 350) = 2,900
  Less tax 450 + 90 = 540
  4,360 - 2,900 - 540 = 920
# Step 2: Less the NCI
  920 - 62 = 858 ($000)
= Answer: $858,000
! Check: Ash 810 + Rowan 310 - dividend 160 - unrealised profit 40 = 920.`,
`# Шаг 1: Прибыль группы за год
  Валовая прибыль 9 950 - 5 590 = 4 360
  Минус расходы (1 200 + 550) + (800 + 350) = 2 900
  Минус налог 450 + 90 = 540
  4 360 - 2 900 - 540 = 920
# Шаг 2: Минус NCI
  920 - 62 = 858 ($000)
= Ответ: $858 000
! Проверка: Ash 810 + Rowan 310 - дивиденд 160 - нереализованная прибыль 40 = 920.`,
`# 1-qadam: Guruhning yillik foydasi
  Yalpi foyda 9 950 - 5 590 = 4 360
  Minus xarajatlar (1 200 + 550) + (800 + 350) = 2 900
  Minus soliq 450 + 90 = 540
  4 360 - 2 900 - 540 = 920
# 2-qadam: Minus NCI
  920 - 62 = 858 ($000)
= Javob: $858 000
! Tekshiruv: Ash 810 + Rowan 310 - dividend 160 - amalga oshmagan foyda 40 = 920.`),
      ],
    },

    {
      id: 'bppc36', bppRef: '36', bppPage: 274, area: 'statements', title: 'Poppy and Thistle (ratios)',
      intro: `Two companies in the same trade are compared ($000). Poppy: revenue 300; gross profit 135; operating profit 60; capital employed 250; current assets 210, of which inventory 95 and receivables 50; current liabilities 175. Thistle: revenue 400; gross profit 196; operating profit 52; capital employed 500; current assets 360, of which inventory 290 and receivables 96; current liabilities 300. All sales are on credit. Use Kaplan's formulas.`,
      tasks: [
        task(18, 2, 'number', `Task 1: What is Poppy's gross profit margin? (in %)`,
          amount(45, '45%'),
`# Step 1: Gross profit / revenue x 100
  135 / 300 x 100 = 45
= Answer: 45%`,
`# Шаг 1: Валовая прибыль / выручка x 100
  135 / 300 x 100 = 45
= Ответ: 45%`,
`# 1-qadam: Yalpi foyda / tushum x 100
  135 / 300 x 100 = 45
= Javob: 45%`),
        task(18, 2, 'number', `Task 2: What is Thistle's operating profit margin? (in %)`,
          amount(13, '13%'),
`# Step 1: Operating profit / revenue x 100
  52 / 400 x 100 = 13
= Answer: 13% (Poppy's is 60 / 300 = 20%)`,
`# Шаг 1: Операционная прибыль / выручка x 100
  52 / 400 x 100 = 13
= Ответ: 13% (у Poppy 60 / 300 = 20%)`,
`# 1-qadam: Operatsion foyda / tushum x 100
  52 / 400 x 100 = 13
= Javob: 13% (Poppy da 60 / 300 = 20%)`),
        task(18, 2, 'single', `Task 3: What is each company's net asset turnover (revenue / capital employed)?`,
          pick(['Poppy 1.2 times; Thistle 0.8 times', 'Poppy 0.8 times; Thistle 1.2 times', 'Poppy 1.2 times; Thistle 1.25 times', 'Poppy 0.83 times; Thistle 1.25 times'], 0),
`# Step 1: Poppy
  300 / 250 = 1.2 times
# Step 2: Thistle
  400 / 500 = 0.8 times
= Answer: Poppy 1.2 times; Thistle 0.8 times
! The last option turns the ratio upside down (capital employed / revenue).`,
`# Шаг 1: Poppy
  300 / 250 = 1,2 раза
# Шаг 2: Thistle
  400 / 500 = 0,8 раза
= Ответ: Poppy 1,2 раза; Thistle 0,8 раза
! Последний вариант переворачивает дробь (задействованный капитал / выручка).`,
`# 1-qadam: Poppy
  300 / 250 = 1,2 marta
# 2-qadam: Thistle
  400 / 500 = 0,8 marta
= Javob: Poppy 1,2 marta; Thistle 0,8 marta
! Oxirgi variant kasrni teskari qiladi (ishlatilgan kapital / tushum).`),
        task(18, 3, 'single', `Task 4: What is each company's quick ratio?`,
          pick(['Poppy 0.7:1; Thistle 0.2:1', 'Poppy 1.2:1; Thistle 1.2:1', 'Poppy 0.3:1; Thistle 0.3:1', 'Poppy 0.7:1; Thistle 1.2:1'], 0),
`# Step 1: Poppy
  (210 - 95) / 175 = 115 / 175 = 0.66, about 0.7:1
# Step 2: Thistle
  (360 - 290) / 300 = 70 / 300 = 0.23, about 0.2:1
= Answer: Poppy 0.7:1; Thistle 0.2:1
! Both have a current ratio of 1.2:1. Only the quick ratio shows how much Thistle relies on inventory.`,
`# Шаг 1: Poppy
  (210 - 95) / 175 = 115 / 175 = 0,66, около 0,7:1
# Шаг 2: Thistle
  (360 - 290) / 300 = 70 / 300 = 0,23, около 0,2:1
= Ответ: Poppy 0,7:1; Thistle 0,2:1
! Текущая ликвидность у обеих 1,2:1. Только быстрая показывает, насколько Thistle зависит от запасов.`,
`# 1-qadam: Poppy
  (210 - 95) / 175 = 115 / 175 = 0,66, taxminan 0,7:1
# 2-qadam: Thistle
  (360 - 290) / 300 = 70 / 300 = 0,23, taxminan 0,2:1
= Javob: Poppy 0,7:1; Thistle 0,2:1
! Ikkalasining joriy likvidligi 1,2:1. Faqat tezkor likvidlik Thistle zaxiraga qanchalik bog'liqligini ko'rsatadi.`),
        task(18, 2, 'number', `Task 5: What is Thistle's receivables collection period, to the nearest day?`,
          amount(88, '88 days'),
`# Step 1: Receivables / credit sales x 365
  96 / 400 x 365 = 87.6
# Step 2: Round
  88 days (Poppy: 50 / 300 x 365 = 61 days)
= Answer: 88 days`,
`# Шаг 1: Дебиторы / продажи в кредит x 365
  96 / 400 x 365 = 87,6
# Шаг 2: Округлим
  88 дней (Poppy: 50 / 300 x 365 = 61 день)
= Ответ: 88 дней`,
`# 1-qadam: Debitorlar / kreditga sotuv x 365
  96 / 400 x 365 = 87,6
# 2-qadam: Yaxlitlaymiz
  88 kun (Poppy: 50 / 300 x 365 = 61 kun)
= Javob: 88 kun`),
        task(18, 4, 'matrix', `Task 6: Is each conclusion true or false?`,
          grid(TF, [['Thistle has the higher gross profit margin.', 0], ['Poppy uses its capital more efficiently to generate sales.', 0], ['Thistle\'s low quick ratio is mainly due to its large inventory.', 0], ['Thistle collects cash from customers faster than Poppy.', 1]]),
`Use the ratios worked out above.
- Thistle 49% (196 / 400) against Poppy 45%. TRUE.
- Asset turnover: Poppy 1.2 times against Thistle 0.8. TRUE.
- Inventory is 290 of Thistle's 360 current assets. TRUE.
- Thistle takes 88 days to collect, Poppy 61 days: Thistle is SLOWER. FALSE.`,
`Используем рассчитанные выше коэффициенты.
- Thistle 49% (196 / 400) против 45% у Poppy. ВЕРНО.
- Оборачиваемость: Poppy 1,2 раза против 0,8 у Thistle. ВЕРНО.
- Запасы — 290 из 360 оборотных активов Thistle. ВЕРНО.
- Thistle собирает долги за 88 дней, Poppy за 61: Thistle МЕДЛЕННЕЕ. НЕВЕРНО.`,
`Yuqorida hisoblangan ko'rsatkichlardan foydalanamiz.
- Thistle 49% (196 / 400), Poppy 45%. TO'G'RI.
- Aylanma: Poppy 1,2 marta, Thistle 0,8. TO'G'RI.
- Zaxira Thistle ning 360 joriy aktividan 290. TO'G'RI.
- Thistle qarzni 88 kunda, Poppy 61 kunda yig'adi: Thistle SEKINROQ. NOTO'G'RI.`),
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = cases;
  else (globalThis.ACCA ??= {}).bppCases = cases;
})();
