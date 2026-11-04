'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-10';
  const questions = [
    {
      id: 'ch10-q234',
      kitRef: 234,
      topicId: 'chapter-10',
      type: 'single',
      text: 'At 31 December 20X5 a business had net receivables of $20,000. During 20X6 it made credit sales of $180,000 and received $170,000 from credit customers. At 31 December 20X6 it wrote off debts of $4,200 and increased its specific allowance for receivables by $600 to $1,500. What are net receivables at 31 December 20X6?',
      explanation: {
        en: `"Net receivables" means receivables AFTER taking off the allowance. Work with the gross figure, then take the allowance off at the end.
# Step 1: Opening allowance and gross receivables
  Allowance went up by $600 to $1,500, so it started at $1,500 - $600 = $900
  Gross receivables at the start: net $20,000 + allowance $900 = $20,900
# Step 2: Gross receivables at the end
  $20,900 + credit sales $180,000 - cash received $170,000 - written off $4,200 = $26,700
# Step 3: Net receivables at the end
  $26,700 - allowance $1,500 = $25,200
= Answer: $25,200
! Common trap: starting from the net $20,000 gives $24,300.`,
        ru: `«Чистая дебиторка» — дебиторы ПОСЛЕ вычета резерва. Работайте с валовой цифрой и вычтите резерв в конце.
# Шаг 1: Резерв на начало и валовые дебиторы
  Резерв вырос на $600 до $1,500, значит был $1,500 - $600 = $900
  Валовые дебиторы на начало: чистые $20,000 + резерв $900 = $20,900
# Шаг 2: Валовые дебиторы на конец
  $20,900 + продажи в кредит $180,000 - получено $170,000 - списано $4,200 = $26,700
# Шаг 3: Чистые дебиторы на конец
  $26,700 - резерв $1,500 = $25,200
= Ответ: $25,200
! Частая ошибка: начать с чистых $20,000 — выйдет $24,300.`,
        uz: `«Sof debitorlar» — rezerv ayirilgandan KEYINGI debitorlar. Yalpi son bilan ishlab, rezervni oxirida ayiring.
# 1-qadam: Boshlang'ich rezerv va yalpi debitorlar
  Rezerv $600 oshib $1,500 bo'ldi, demak $1,500 - $600 = $900 edi
  Boshidagi yalpi debitorlar: sof $20,000 + rezerv $900 = $20,900
# 2-qadam: Oxiridagi yalpi debitorlar
  $20,900 + nasiya sotuv $180,000 - olingan $170,000 - hisobdan chiqarilgan $4,200 = $26,700
# 3-qadam: Oxiridagi sof debitorlar
  $26,700 - rezerv $1,500 = $25,200
= Javob: $25,200
! Ko'p uchraydigan xato: sof $20,000 dan boshlash $24,300 beradi.`,
      },
      options: ['$24,300', '$25,200', '$26,700', '$29,400'],
      correctIndex: 1,
    },
    {
      id: 'ch10-q235',
      kitRef: 235,
      topicId: 'chapter-10',
      type: 'single',
      text: 'The following relates to a company for the year ended 31 December 20X8. What is its revenue for the year?',
      explanation: {
        en: `Revenue = credit sales + cash sales. Credit sales are the missing figure in the receivables account.
# Step 1: Rebuild the receivables account
  Debit: opening $40,000 + credit sales (?)
  Credit: cash received $210,000 + contra $1,500 + irrecoverable debts $2,000 + closing $52,000 = $265,500
  Credit sales = $265,500 - $40,000 = $225,500
# Step 2: Add the cash sales
  $225,500 + $30,000 = $255,500
= Answer: $255,500
Ignore discounts received (they are about suppliers) and the allowance (a separate account).`,
        ru: `Выручка = продажи в кредит + за наличные. Продажи в кредит — недостающая цифра в счёте дебиторов.
# Шаг 1: Восстановим счёт дебиторов
  Дебет: на начало $40,000 + продажи в кредит (?)
  Кредит: получено $210,000 + взаимозачёт $1,500 + безнадёжные долги $2,000 + на конец $52,000 = $265,500
  Продажи в кредит = $265,500 - $40,000 = $225,500
# Шаг 2: Прибавим продажи за наличные
  $225,500 + $30,000 = $255,500
= Ответ: $255,500
Не учитывайте полученные скидки (это поставщики) и резерв (отдельный счёт).`,
        uz: `Tushum = nasiya sotuv + naqd sotuv. Nasiya sotuv — debitorlar hisobidagi yetishmayotgan son.
# 1-qadam: Debitorlar hisobini tiklaymiz
  Debet: boshida $40,000 + nasiya sotuv (?)
  Kredit: olingan $210,000 + o'zaro hisob $1,500 + umidsiz qarzlar $2,000 + oxirida $52,000 = $265,500
  Nasiya sotuv = $265,500 - $40,000 = $225,500
# 2-qadam: Naqd sotuvni qo'shamiz
  $225,500 + $30,000 = $255,500
= Javob: $255,500
Olingan chegirmalar (yetkazib beruvchilar) va rezervni (alohida hisob) hisobga olmang.`,
      },
      options: ['$225,500', '$255,500', '$264,500', '$267,500'],
      correctIndex: 1,
      table: {
        head: ['Item', '$'],
        rows: [
          ['Receivables at 1 January 20X8', '40,000'],
          ['Cash received from credit customers', '210,000'],
          ['Contra with payables', '1,500'],
          ['Cash sales', '30,000'],
          ['Irrecoverable debts', '2,000'],
          ['Increase in allowance for receivables', '9,000'],
          ['Discounts received', '12,000'],
          ['Receivables at 31 December 20X8', '52,000'],
        ],
      },
    },
    {
      id: 'ch10-q236',
      kitRef: 236,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company\'s receivables account contains some wrong entries, as shown. After correcting it, what is the receivables balance carried forward?',
      explanation: {
        en: `Rebuild the account using only the items that belong in it.
# Belongs: makes customers owe more (debit)
  Opening $60,000 + credit sales $500,000
# Belongs: makes customers owe less (credit)
  Irrecoverable debts $3,000 + cash from credit customers $470,000 + contra $4,000
  (the contra was wrongly put on the debit side; it reduces receivables)
# Does not belong
  Cash sales (never on credit), discounts received (suppliers), allowance (separate account)
= Answer: $60,000 + $500,000 - $3,000 - $470,000 - $4,000 = $83,000`,
        ru: `Восстановим счёт только по статьям, которые ему принадлежат.
# Принадлежат: долг растёт (дебет)
  На начало $60,000 + продажи в кредит $500,000
# Принадлежат: долг падает (кредит)
  Безнадёжные долги $3,000 + деньги от покупателей в кредит $470,000 + взаимозачёт $4,000
  (взаимозачёт ошибочно стоял в дебете, он уменьшает дебиторов)
# Не принадлежат
  Продажи за наличные (не в кредит), полученные скидки (поставщики), резерв (отдельный счёт)
= Ответ: $60,000 + $500,000 - $3,000 - $470,000 - $4,000 = $83,000`,
        uz: `Hisobni faqat unga tegishli moddalar bilan tiklaymiz.
# Tegishli: qarz oshadi (debet)
  Boshida $60,000 + nasiya sotuv $500,000
# Tegishli: qarz kamayadi (kredit)
  Umidsiz qarzlar $3,000 + nasiya mijozlardan pul $470,000 + o'zaro hisob $4,000
  (o'zaro hisob xato debetda turgan, u debitorlarni kamaytiradi)
# Tegishli emas
  Naqd sotuv (nasiya emas), olingan chegirmalar (yetkazib beruvchilar), rezerv (alohida hisob)
= Javob: $60,000 + $500,000 - $3,000 - $470,000 - $4,000 = $83,000`,
      },
      options: ['$74,000', '$83,000', '$89,000', '$104,000'],
      correctIndex: 1,
      table: {
        head: ['Side', 'Entry', '$'],
        rows: [
          ['Debit', 'Balance b/f', '60,000'],
          ['Debit', 'Credit sales', '500,000'],
          ['Debit', 'Cash sales', '12,000'],
          ['Debit', 'Discounts received', '6,000'],
          ['Debit', 'Contra with payables', '4,000'],
          ['Credit', 'Irrecoverable debts', '3,000'],
          ['Credit', 'Increase in allowance for receivables', '5,000'],
          ['Credit', 'Cash received from credit customers', '470,000'],
          ['Credit', 'Balance c/f', '104,000'],
        ],
      },
    },
    {
      id: 'ch10-q237',
      kitRef: 237,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company\'s receivables balance is $40,000 before two adjustments. (i) Debts of $5,000 are written off as irrecoverable. (ii) A specific allowance is made for three customers owing $900, $600 and $1,250. The allowance at the previous year end was $3,200. What is the total charge to profit or loss for these items?',
      explanation: {
        en: `Two parts to the charge: the write-off, and the CHANGE in the allowance.
# Step 1: Write-off
  $5,000, an expense
# Step 2: New allowance
  $900 + $600 + $1,250 = $2,750
# Step 3: Change in the allowance
  Old $3,200 → new $2,750: it goes DOWN by $450, which reduces the expense
# Step 4: Total charge
  $5,000 - $450 = $4,550
= Answer: $4,550
! Common trap: adding the whole $2,750 instead of the change.`,
        ru: `Расход из двух частей: списание и ИЗМЕНЕНИЕ резерва.
# Шаг 1: Списание
  $5,000, расход
# Шаг 2: Новый резерв
  $900 + $600 + $1,250 = $2,750
# Шаг 3: Изменение резерва
  Старый $3,200 → новый $2,750: УМЕНЬШИЛСЯ на $450, это снижает расход
# Шаг 4: Весь расход
  $5,000 - $450 = $4,550
= Ответ: $4,550
! Частая ошибка: прибавить весь резерв $2,750 вместо изменения.`,
        uz: `Xarajat ikki qismdan: hisobdan chiqarish va rezerv O'ZGARISHI.
# 1-qadam: Hisobdan chiqarish
  $5,000, xarajat
# 2-qadam: Yangi rezerv
  $900 + $600 + $1,250 = $2,750
# 3-qadam: Rezerv o'zgarishi
  Eski $3,200 → yangi $2,750: $450 ga KAMAYDI, bu xarajatni kamaytiradi
# 4-qadam: Jami xarajat
  $5,000 - $450 = $4,550
= Javob: $4,550
! Ko'p uchraydigan xato: o'zgarish o'rniga butun $2,750 ni qo'shish.`,
      },
      options: ['$2,750', '$4,550', '$5,450', '$7,750'],
      correctIndex: 1,
    },
    {
      id: 'ch10-q238',
      kitRef: 238,
      topicId: 'chapter-10',
      type: 'single',
      text: 'At 1 July 20X5 a company\'s allowance for receivables was $30,000. At 30 June 20X6 trade receivables were $520,000. It writes off $40,000 of these debts and adjusts the specific allowance to $24,000. What are the figures in the statement of financial position at 30 June 20X6?',
      explanation: {
        en: `Do the write-off first, then set the allowance to the new figure.
# Step 1: Gross receivables after the write-off
  $520,000 - $40,000 = $480,000
# Step 2: The allowance
  It is SET to $24,000 (not added to the old $30,000)
# Step 3: Net receivables
  $480,000 - $24,000 = $456,000
= Answer: receivables $480,000; allowance $24,000; net $456,000
! Common trap: adding the old and new allowances ($54,000).`,
        ru: `Сначала списание, затем резерв устанавливают на новую сумму.
# Шаг 1: Валовые дебиторы после списания
  $520,000 - $40,000 = $480,000
# Шаг 2: Резерв
  Его УСТАНАВЛИВАЮТ на $24,000 (не прибавляют к старым $30,000)
# Шаг 3: Чистые дебиторы
  $480,000 - $24,000 = $456,000
= Ответ: дебиторы $480,000; резерв $24,000; чистые $456,000
! Частая ошибка: сложить старый и новый резерв ($54,000).`,
        uz: `Avval hisobdan chiqarish, keyin rezerv yangi summaga o'rnatiladi.
# 1-qadam: Hisobdan chiqarishdan keyingi yalpi debitorlar
  $520,000 - $40,000 = $480,000
# 2-qadam: Rezerv
  U $24,000 ga O'RNATILADI (eski $30,000 ga qo'shilmaydi)
# 3-qadam: Sof debitorlar
  $480,000 - $24,000 = $456,000
= Javob: debitorlar $480,000; rezerv $24,000; sof $456,000
! Ko'p uchraydigan xato: eski va yangi rezervni qo'shish ($54,000).`,
      },
      options: [
        'Receivables $520,000; allowance $24,000; net $496,000',
        'Receivables $520,000; allowance $54,000; net $466,000',
        'Receivables $480,000; allowance $24,000; net $456,000',
        'Receivables $480,000; allowance $54,000; net $426,000',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch10-q239',
      kitRef: 239,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company had sales of $4,000,000 in the year. Year-end receivables were 6% of annual sales, and the specific allowance at the year end was 5% of receivables, which was 25% higher than at the previous year end. During the year $2,800 of debts were written off and $350 of debts previously written off were recovered. What is the irrecoverable debts expense?',
      explanation: {
        en: `Build the expense from its three parts: write-offs, the allowance change, and any recovery.
# Step 1: Year-end receivables and allowance
  Receivables: 6% × $4,000,000 = $240,000
  Allowance: 5% × $240,000 = $12,000
# Step 2: Opening allowance
  $12,000 is 25% higher than last year, so last year = $12,000 / 1.25 = $9,600
  Increase: $12,000 - $9,600 = $2,400
# Step 3: The expense
  Write-offs $2,800 + allowance increase $2,400 - recovery $350 = $4,850
= Answer: $4,850
! Common traps: forgetting the recovery gives $5,200; $12,000 × 75% = $9,000 is the wrong way to undo "25% higher".`,
        ru: `Соберём расход из трёх частей: списания, изменение резерва и возвраты.
# Шаг 1: Дебиторы и резерв на конец
  Дебиторы: 6% × $4,000,000 = $240,000
  Резерв: 5% × $240,000 = $12,000
# Шаг 2: Резерв на начало
  $12,000 на 25% больше прошлогоднего, значит прошлый = $12,000 / 1.25 = $9,600
  Рост: $12,000 - $9,600 = $2,400
# Шаг 3: Расход
  Списания $2,800 + рост резерва $2,400 - возврат $350 = $4,850
= Ответ: $4,850
! Частые ошибки: без возврата — $5,200; $12,000 × 75% = $9,000 — неверный способ «отменить» 25%.`,
        uz: `Xarajatni uch qismdan yig'amiz: hisobdan chiqarishlar, rezerv o'zgarishi va qaytarilgan qarz.
# 1-qadam: Yil oxiridagi debitorlar va rezerv
  Debitorlar: 6% × $4,000,000 = $240,000
  Rezerv: 5% × $240,000 = $12,000
# 2-qadam: Boshlang'ich rezerv
  $12,000 o'tgan yildan 25% ko'p, demak o'tgan yil = $12,000 / 1.25 = $9,600
  O'sish: $12,000 - $9,600 = $2,400
# 3-qadam: Xarajat
  Hisobdan chiqarishlar $2,800 + rezerv o'sishi $2,400 - qaytarilgan $350 = $4,850
= Javob: $4,850
! Ko'p uchraydigan xatolar: qaytarilganni unutish $5,200 beradi; $12,000 × 75% = $9,000 «25% ko'p»ni bekor qilishning noto'g'ri usuli.`,
      },
      options: ['$5,200', '$5,550', '$4,850', '$14,450'],
      correctIndex: 2,
    },
    {
      id: 'ch10-q240',
      kitRef: 240,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company\'s trade receivables were $16,000 at 1 January 20X3. During the year: credit sales $150,000, cash receipts $140,000, a contra with payables $1,200 and discounts received $900. The cash receipts include $1,500 for a receivable previously written off. What were receivables at 31 December 20X3?',
      explanation: {
        en: `The $1,500 recovered is inside the $140,000 of receipts, and those receipts are all credited to receivables. So the old debt must first be put back.
# Step 1: Put the recovered debt back into receivables
  Dr Receivables $1,500 (and Cr Irrecoverable debts expense)
# Step 2: Rebuild the account
  Opening $16,000 + credit sales $150,000 + reinstated $1,500 = $167,500
  Less cash received $140,000 and contra $1,200
= Answer: $167,500 - $140,000 - $1,200 = $26,300
Discounts received are about suppliers, so they are ignored.`,
        ru: `Возвращённые $1,500 входят в $140,000 поступлений, а все поступления кредитуются на дебиторов. Значит, старый долг надо сначала восстановить.
# Шаг 1: Восстановим возвращённый долг в дебиторах
  Дт Дебиторы $1,500 (и Кт Расход по безнадёжным долгам)
# Шаг 2: Восстановим счёт
  На начало $16,000 + продажи в кредит $150,000 + восстановлено $1,500 = $167,500
  Минус получено $140,000 и взаимозачёт $1,200
= Ответ: $167,500 - $140,000 - $1,200 = $26,300
Полученные скидки относятся к поставщикам, их не учитываем.`,
        uz: `Qaytarilgan $1,500 $140,000 tushum ichida, barcha tushumlar esa debitorlarga kreditlanadi. Demak eski qarz avval tiklanishi kerak.
# 1-qadam: Qaytarilgan qarzni debitorlarga tiklaymiz
  Dt Debitorlar $1,500 (va Kt Umidsiz qarzlar xarajati)
# 2-qadam: Hisobni tiklaymiz
  Boshida $16,000 + nasiya sotuv $150,000 + tiklangan $1,500 = $167,500
  Minus olingan $140,000 va o'zaro hisob $1,200
= Javob: $167,500 - $140,000 - $1,200 = $26,300
Olingan chegirmalar yetkazib beruvchilarga tegishli, hisobga olinmaydi.`,
      },
      options: ['$24,800', '$26,300', '$27,500', '$25,400'],
      correctIndex: 1,
    },
    {
      id: 'ch10-q241',
      kitRef: 241,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A customer is declared bankrupt. The company had already made an allowance for this receivable. What is the correct double entry to write off the debt?',
      explanation: {
        en: `A write-off is ALWAYS the same entry, whether or not there was an allowance.
# The entry
  The loss is an expense: Dr Irrecoverable debts expense
  The debt is removed: Cr Receivables
= Answer: Dr Irrecoverable debts expense, Cr Receivables
The allowance is reviewed separately at the year end. If this customer no longer needs one, the allowance falls then.`,
        ru: `Списание — ВСЕГДА одна и та же проводка, был резерв или нет.
# Проводка
  Убыток — расход: Дт Расход по безнадёжным долгам
  Долг убираем: Кт Дебиторы
= Ответ: Дт Расход по безнадёжным долгам, Кт Дебиторы
Резерв пересматривают отдельно в конце года. Если для этого покупателя он больше не нужен, резерв тогда и уменьшат.`,
        uz: `Hisobdan chiqarish DOIM bir xil yozuv, rezerv bo'lgan-bo'lmaganidan qat'i nazar.
# Yozuv
  Zarar — xarajat: Dt Umidsiz qarzlar xarajati
  Qarz olib tashlanadi: Kt Debitorlar
= Javob: Dt Umidsiz qarzlar xarajati, Kt Debitorlar
Rezerv yil oxirida alohida qayta ko'riladi. Bu mijoz uchun endi kerak bo'lmasa, rezerv o'shanda kamaytiriladi.`,
      },
      options: [
        'Dr Irrecoverable debts expense, Cr Receivables',
        'Dr Allowance for receivables, Cr Receivables',
        'Dr Receivables, Cr Irrecoverable debts expense',
        'Dr Receivables, Cr Allowance for receivables',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch10-q242',
      kitRef: 242,
      topicId: 'chapter-10',
      type: 'number',
      text: 'A company was owed $25,000 by customers at the start and $27,500 at the end of the year ended 31 December 20X8. During the year, cash sales were $120,000, credit sales $240,000, contras with payables $6,000, discounts received $9,000 and irrecoverable debts written off $4,000. The increase in the allowance for receivables was $3,000. How much cash was received from credit customers?',
      explanation: {
        en: `Cash received from credit customers is the missing figure in the receivables account.
# Step 1: Debit side
  Opening $25,000 + credit sales $240,000 = $265,000
# Step 2: Credit side, apart from cash
  Contra $6,000 + written off $4,000 + closing $27,500 = $37,500
# Step 3: The missing cash
  $265,000 - $37,500 = $227,500
= Answer: $227,500
Not used: cash sales, discounts received and the allowance, none of which pass through receivables.`,
        ru: `Деньги от покупателей в кредит — недостающая цифра счёта дебиторов.
# Шаг 1: Дебет
  На начало $25,000 + продажи в кредит $240,000 = $265,000
# Шаг 2: Кредит, кроме денег
  Взаимозачёт $6,000 + списано $4,000 + на конец $27,500 = $37,500
# Шаг 3: Недостающие деньги
  $265,000 - $37,500 = $227,500
= Ответ: $227,500
Не используются: продажи за наличные, полученные скидки и резерв — через дебиторов они не проходят.`,
        uz: `Nasiya mijozlardan olingan pul — debitorlar hisobidagi yetishmayotgan son.
# 1-qadam: Debet
  Boshida $25,000 + nasiya sotuv $240,000 = $265,000
# 2-qadam: Puldan tashqari kredit
  O'zaro hisob $6,000 + hisobdan chiqarilgan $4,000 + oxirida $27,500 = $37,500
# 3-qadam: Yetishmayotgan pul
  $265,000 - $37,500 = $227,500
= Javob: $227,500
Ishlatilmaydi: naqd sotuv, olingan chegirmalar va rezerv — ular debitorlar orqali o'tmaydi.`,
      },
      correctValue: 227500,
      answerText: '$227,500',
    },
    {
      id: 'ch10-q243',
      kitRef: 243,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company\'s revenue was $3 million and its receivables were 4% of sales. It wishes to have a specific allowance of $6,000, which would be one quarter higher than the current allowance. How will profit be affected by the change in the allowance?',
      explanation: {
        en: `Only the change in the allowance affects profit.
# Step 1: The current allowance
  $6,000 is one quarter (25%) higher, so current = $6,000 / 1.25 = $4,800
# Step 2: The change
  $6,000 - $4,800 = $1,200 increase
# Step 3: Effect on profit
  A bigger allowance is an extra expense, so profit goes DOWN
= Answer: profit reduced by $1,200
The revenue and receivables figures are not needed.`,
        ru: `На прибыль влияет только изменение резерва.
# Шаг 1: Текущий резерв
  $6,000 на четверть (25%) больше, значит текущий = $6,000 / 1.25 = $4,800
# Шаг 2: Изменение
  $6,000 - $4,800 = рост $1,200
# Шаг 3: Влияние на прибыль
  Больший резерв — дополнительный расход, прибыль ПАДАЕТ
= Ответ: прибыль уменьшится на $1,200
Выручка и дебиторы для ответа не нужны.`,
        uz: `Foydaga faqat rezerv o'zgarishi ta'sir qiladi.
# 1-qadam: Joriy rezerv
  $6,000 chorakka (25%) ko'p, demak joriy = $6,000 / 1.25 = $4,800
# 2-qadam: O'zgarish
  $6,000 - $4,800 = $1,200 o'sish
# 3-qadam: Foydaga ta'sir
  Katta rezerv — qo'shimcha xarajat, foyda KAMAYADI
= Javob: foyda $1,200 ga kamayadi
Tushum va debitorlar kerak emas.`,
      },
      options: [
        'Profit increased by $1,200',
        'Profit reduced by $1,500',
        'Profit reduced by $1,200',
        'Profit increased by $1,500',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch10-q244',
      kitRef: 244,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A company began the year with total receivables of $64,000 and an allowance of $1,800. During the year two debts of $600 and $400 were written off. A debt of $250 written off in the previous year was paid. At the year end total receivables were $70,000 and the allowance was $2,200. What is the charge to profit or loss for irrecoverable debts and the allowance?',
      explanation: {
        en: `Add up the three parts of the expense.
# Write-offs
  $600 + $400 = $1,000
# Recovery of last year's write-off
  - $250 (reduces the expense)
# Change in the allowance
  $2,200 - $1,800 = $400 increase (adds to the expense)
= Answer: $1,000 - $250 + $400 = $1,150`,
        ru: `Сложим три части расхода.
# Списания
  $600 + $400 = $1,000
# Возврат прошлогоднего списания
  - $250 (снижает расход)
# Изменение резерва
  $2,200 - $1,800 = рост $400 (увеличивает расход)
= Ответ: $1,000 - $250 + $400 = $1,150`,
        uz: `Xarajatning uch qismini qo'shamiz.
# Hisobdan chiqarishlar
  $600 + $400 = $1,000
# O'tgan yil chiqarilganining qaytarilishi
  - $250 (xarajatni kamaytiradi)
# Rezerv o'zgarishi
  $2,200 - $1,800 = $400 o'sish (xarajatni oshiradi)
= Javob: $1,000 - $250 + $400 = $1,150`,
      },
      options: ['$750', '$1,400', '$1,650', '$1,150'],
      correctIndex: 3,
    },
    {
      id: 'ch10-q245',
      kitRef: 245,
      topicId: 'chapter-10',
      type: 'single',
      text: 'What is the effect of increasing the allowance for receivables?',
      explanation: {
        en: `The allowance is taken OFF receivables, a current asset.
# Effect of a bigger allowance
  Net receivables go down, so net current assets go DOWN
  The other side is an expense, so profit goes down too
- Sales and drawings are not touched.
= Answer: net current assets fall`,
        ru: `Резерв ВЫЧИТАЮТ из дебиторов — оборотного актива.
# Эффект большего резерва
  Чистые дебиторы уменьшаются, значит чистые оборотные активы ПАДАЮТ
  Вторая сторона — расход, прибыль тоже падает
- Продажи и изъятия не затрагиваются.
= Ответ: чистые оборотные активы уменьшаются`,
        uz: `Rezerv aylanma aktiv — debitorlardan AYIRILADI.
# Katta rezerv ta'siri
  Sof debitorlar kamayadi, demak sof aylanma aktivlar KAMAYADI
  Ikkinchi tomon — xarajat, foyda ham kamayadi
- Sotuv va olib qo'yishlarga tegilmaydi.
= Javob: sof aylanma aktivlar kamayadi`,
      },
      options: ['Sales rise', 'Drawings fall', 'Net current assets fall', 'Net current assets rise'],
      correctIndex: 2,
    },
    {
      id: 'ch10-q246',
      kitRef: 246,
      topicId: 'chapter-10',
      type: 'single',
      text: 'At the end of the year a company\'s receivables balance was $180,000 and the allowance for receivables was $9,400. Irrecoverable debts of $8,500 should be written off. The company wishes to make a specific allowance only for two customers, owing $420 and $800. What is the net charge or credit to profit or loss for irrecoverable debts and the allowance?',
      explanation: {
        en: `Combine the write-off with the change in the allowance.
# Step 1: Write-off
  $8,500 charged
# Step 2: New allowance
  $420 + $800 = $1,220
# Step 3: Change in the allowance
  $9,400 → $1,220: down by $8,180, a credit to the expense
# Step 4: Net effect
  $8,500 - $8,180 = $320 charge
= Answer: $320 charge`,
        ru: `Совместим списание с изменением резерва.
# Шаг 1: Списание
  $8,500 в расход
# Шаг 2: Новый резерв
  $420 + $800 = $1,220
# Шаг 3: Изменение резерва
  $9,400 → $1,220: уменьшение на $8,180, кредит расхода
# Шаг 4: Итог
  $8,500 - $8,180 = расход $320
= Ответ: расход $320`,
        uz: `Hisobdan chiqarishni rezerv o'zgarishi bilan birlashtiramiz.
# 1-qadam: Hisobdan chiqarish
  $8,500 xarajat
# 2-qadam: Yangi rezerv
  $420 + $800 = $1,220
# 3-qadam: Rezerv o'zgarishi
  $9,400 → $1,220: $8,180 ga kamayish, xarajat krediti
# 4-qadam: Sof ta'sir
  $8,500 - $8,180 = $320 xarajat
= Javob: $320 xarajat`,
      },
      options: ['$9,720 charge', '$320 charge', '$320 credit', '$17,900 charge'],
      correctIndex: 1,
    },
    {
      id: 'ch10-q247',
      kitRef: 247,
      topicId: 'chapter-10',
      type: 'single',
      text: 'Which of the following is NOT a benefit of offering credit to customers?',
      explanation: {
        en: `Look for the NOT benefit.
- More sales: a real benefit.
- Customer loyalty: a real benefit.
- New customers: a real benefit.
- Better cash flow: NOT a benefit. Compared with cash sales you wait longer for your money, and some customers never pay.
= Answer: it may improve the business's cash flow`,
        ru: `Ищите то, что НЕ преимущество.
- Больше продаж: реальное преимущество.
- Лояльность клиентов: реальное преимущество.
- Новые клиенты: реальное преимущество.
- Лучший денежный поток: НЕ преимущество. По сравнению с продажами за наличные деньги приходят позже, а некоторые клиенты не платят.
= Ответ: может улучшить денежный поток бизнеса`,
        uz: `Afzallik BO'LMAGANini qidiring.
- Ko'proq sotuv: haqiqiy afzallik.
- Mijozlar sodiqligi: haqiqiy afzallik.
- Yangi mijozlar: haqiqiy afzallik.
- Yaxshiroq pul oqimi: afzallik EMAS. Naqd sotuvga nisbatan pulni uzoqroq kutasiz, ba'zi mijozlar to'lamaydi.
= Javob: biznesning pul oqimini yaxshilashi mumkin`,
      },
      options: [
        'It may increase sales',
        'It may encourage customer loyalty',
        'It may attract new customers',
        'It may improve the business\'s cash flow',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch10-q248',
      kitRef: 248,
      topicId: 'chapter-10',
      type: 'single',
      text: 'Which best explains the purpose of an aged receivables analysis?',
      explanation: {
        en: `"Aged" means sorted by how OLD each debt is.
- Customers' addresses: just contact details.
- Track debts and find overdue amounts to chase: yes, that is what sorting by age is for.
- Checking regular buying: not about debts.
- Approving credit: kept in separate credit records.
= Answer: to track outstanding debts and identify overdue amounts to follow up`,
        ru: `«По срокам» — отсортировано по ВОЗРАСТУ каждого долга.
- Адреса клиентов: просто контакты.
- Отслеживать долги и находить просроченные для взыскания: да, для этого и сортируют по возрасту.
- Проверка регулярности покупок: не про долги.
- Одобрение кредита: хранится в отдельных записях.
= Ответ: отслеживать долги и выявлять просроченные суммы для взыскания`,
        uz: `«Muddatlar bo'yicha» — har bir qarz QANCHA ESKI ekaniga ko'ra saralangan.
- Mijozlar manzillari: shunchaki aloqa ma'lumotlari.
- Qarzlarni kuzatish va undirish uchun muddati o'tganlarini topish: ha, yosh bo'yicha saralash shuning uchun.
- Muntazam xaridni tekshirish: qarzlar haqida emas.
- Kredit tasdiqlash: alohida yozuvlarda saqlanadi.
= Javob: qarzlarni kuzatish va undirish uchun muddati o'tgan summalarni aniqlash`,
      },
      options: [
        'To record customers\' addresses',
        'To track outstanding debts and identify overdue amounts to follow up',
        'To check that customers buy regularly',
        'To check that credit is given only to approved customers',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch10-q249',
      kitRef: 249,
      topicId: 'chapter-10',
      type: 'number',
      text: 'At 31 March 20X4 a company\'s receivables balance was $310,000. An irrecoverable debt of $1,500 was recovered during the year. Amounts totalling $6,200 are to be written off as irrecoverable, and a specific allowance of $1,800 is required. The allowance at 1 April 20X3 was $1,300. What is the expense for irrecoverable debts and the allowance for the year ended 31 March 20X4?',
      explanation: {
        en: `Add up the three parts of the expense.
# Write-offs
  $6,200
# Change in the allowance
  $1,300 → $1,800: up $500, an extra expense
# Recovery
  - $1,500 (reverses part of the expense)
= Answer: $6,200 + $500 - $1,500 = $5,200
The $310,000 receivables balance is not needed.`,
        ru: `Сложим три части расхода.
# Списания
  $6,200
# Изменение резерва
  $1,300 → $1,800: рост $500, дополнительный расход
# Возврат
  - $1,500 (сторнирует часть расхода)
= Ответ: $6,200 + $500 - $1,500 = $5,200
Остаток дебиторов $310,000 не нужен.`,
        uz: `Xarajatning uch qismini qo'shamiz.
# Hisobdan chiqarishlar
  $6,200
# Rezerv o'zgarishi
  $1,300 → $1,800: $500 o'sish, qo'shimcha xarajat
# Qaytarilgan qarz
  - $1,500 (xarajatning bir qismini qaytaradi)
= Javob: $6,200 + $500 - $1,500 = $5,200
$310,000 debitorlar qoldig'i kerak emas.`,
      },
      correctValue: 5200,
      answerText: '$5,200',
    },
    {
      id: 'ch10-q250',
      kitRef: 250,
      topicId: 'chapter-10',
      type: 'single',
      text: 'What is the purpose of customer credit limits?',
      explanation: {
        en: `A credit limit caps how much a customer can owe you. So if they cannot pay, the most you can lose is the limit.
- Risk from credit customers who cannot pay: yes.
- Cash customers: they pay on the spot, there is no risk to limit.
- Settlement discounts: a separate decision.
- Inventory shortages: unrelated.
= Answer: to manage the risk of loss to the business from credit customers who cannot pay`,
        ru: `Кредитный лимит ограничивает, сколько покупатель может быть должен. Если он не заплатит, вы потеряете не больше лимита.
- Риск от покупателей в кредит, которые не могут заплатить: да.
- Покупатели за наличные: платят сразу, ограничивать нечего.
- Скидки за раннюю оплату: отдельное решение.
- Нехватка запасов: не связано.
= Ответ: управлять риском потерь от покупателей в кредит, которые не могут заплатить`,
        uz: `Kredit limiti mijoz qancha qarz bo'lishi mumkinligini cheklaydi. U to'lamasa, limitdan ko'p yo'qotmaysiz.
- To'lay olmaydigan nasiya mijozlardan xavf: ha.
- Naqd mijozlar: darhol to'laydi, cheklaydigan narsa yo'q.
- Muddatidan oldingi to'lov chegirmalari: alohida qaror.
- Zaxira yetishmovchiligi: aloqasi yo'q.
= Javob: to'lay olmaydigan nasiya mijozlardan zarar xavfini boshqarish`,
      },
      options: [
        'To manage the risk of loss to the business from credit customers who cannot pay',
        'To manage the risk of cash customers not being able to pay',
        'To decide whether early settlement discounts are offered',
        'To manage the risk of inventory shortages',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch10-q251',
      kitRef: 251,
      topicId: 'chapter-10',
      type: 'single',
      text: 'How should a recovery of a debt previously written off as irrecoverable be recorded?',
      explanation: {
        en: `The debt was taken out of receivables when it was written off. So the cash cannot be credited to receivables: there is nothing there.
# The entry
  Cash comes in: Dr Bank
  Reverse the loss recorded earlier: Cr Irrecoverable debts expense
= Answer: Dr Bank, Cr Irrecoverable debts expense`,
        ru: `Долг убрали из дебиторов при списании. Поэтому деньги нельзя кредитовать на дебиторов: там ничего нет.
# Проводка
  Деньги пришли: Дт Банк
  Сторнируем ранее записанный убыток: Кт Расход по безнадёжным долгам
= Ответ: Дт Банк, Кт Расход по безнадёжным долгам`,
        uz: `Qarz hisobdan chiqarilganda debitorlardan olib tashlangan. Shuning uchun pulni debitorlarga kreditlab bo'lmaydi: u yerda hech narsa yo'q.
# Yozuv
  Pul keldi: Dt Bank
  Avval yozilgan zararni qaytaramiz: Kt Umidsiz qarzlar xarajati
= Javob: Dt Bank, Kt Umidsiz qarzlar xarajati`,
      },
      options: [
        'Dr Bank, Cr Receivables',
        'Dr Bank, Cr Irrecoverable debts expense',
        'Dr Bank, Cr Revenue',
        'Dr Bank, Cr Allowance for receivables',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch10-q252',
      kitRef: 252,
      topicId: 'chapter-10',
      type: 'single',
      text: 'A mid-year review identified three irrecoverable debts totalling $860, one of $200 which was already covered by the allowance for receivables. What entry writes off the debts?',
      explanation: {
        en: `All three debts are irrecoverable, so all $860 is written off in the normal way.
# The entry
  Dr Irrecoverable debts expense $860, Cr Trade receivables $860
# What about the $200 already covered?
  Do not touch the allowance now. At the year end the allowance is reassessed, and since this debt has gone, the allowance needed will fall then.
= Answer: Dr Irrecoverable debts expense $860, Cr Trade receivables $860`,
        ru: `Все три долга безнадёжны, поэтому все $860 списывают обычным образом.
# Проводка
  Дт Расход по безнадёжным долгам $860, Кт Торговые дебиторы $860
# А как же $200 уже в резерве?
  Резерв сейчас не трогают. В конце года его пересмотрят, и раз этого долга нет, нужный резерв тогда уменьшится.
= Ответ: Дт Расход по безнадёжным долгам $860, Кт Торговые дебиторы $860`,
        uz: `Uchala qarz ham umidsiz, shuning uchun butun $860 odatdagidek hisobdan chiqariladi.
# Yozuv
  Dt Umidsiz qarzlar xarajati $860, Kt Savdo debitorlari $860
# Rezervdagi $200 nima bo'ladi?
  Rezervga hozir tegilmaydi. Yil oxirida u qayta ko'riladi va bu qarz yo'qligi sababli kerakli rezerv o'shanda kamayadi.
= Javob: Dt Umidsiz qarzlar xarajati $860, Kt Savdo debitorlari $860`,
      },
      options: [
        'Dr Irrecoverable debts expense $660, Cr Trade receivables $660',
        'Dr Irrecoverable debts expense $660 and Dr Allowance for receivables $200, Cr Trade receivables $860',
        'Dr Irrecoverable debts expense $860, Cr Allowance for receivables $200 and Cr Trade receivables $660',
        'Dr Irrecoverable debts expense $860, Cr Trade receivables $860',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch10-q253',
      kitRef: 253,
      topicId: 'chapter-10',
      type: 'single',
      text: 'At its year end a company writes off irrecoverable debts of $700 and also increases its allowance for receivables by $250. Which entries update the ledger?',
      explanation: {
        en: `Both items are costs, so the expense account gets both.
# Write-off of $700
  Dr Irrecoverable debts $700, Cr Trade receivables $700
# Allowance up by $250
  Dr Irrecoverable debts $250, Cr Allowance for receivables $250
# Combined
  Dr Irrecoverable debts $950, Cr Trade receivables $700, Cr Allowance for receivables $250
= Answer: option C`,
        ru: `Обе статьи — затраты, поэтому на счёт расхода идут обе.
# Списание $700
  Дт Безнадёжные долги $700, Кт Торговые дебиторы $700
# Рост резерва на $250
  Дт Безнадёжные долги $250, Кт Резерв по дебиторам $250
# Вместе
  Дт Безнадёжные долги $950, Кт Торговые дебиторы $700, Кт Резерв по дебиторам $250
= Ответ: вариант C`,
        uz: `Ikkala modda ham xarajat, shuning uchun xarajat hisobiga ikkalasi boradi.
# $700 hisobdan chiqarish
  Dt Umidsiz qarzlar $700, Kt Savdo debitorlari $700
# Rezervning $250 ga oshishi
  Dt Umidsiz qarzlar $250, Kt Debitorlik rezervi $250
# Birga
  Dt Umidsiz qarzlar $950, Kt Savdo debitorlari $700, Kt Debitorlik rezervi $250
= Javob: C variant`,
      },
      options: [
        'Dr Trade receivables $950, Cr Irrecoverable debts $700 and Cr Allowance for receivables $250',
        'Dr Irrecoverable debts $700 and Dr Allowance for receivables $250, Cr Trade receivables $950',
        'Dr Irrecoverable debts $950, Cr Trade receivables $700 and Cr Allowance for receivables $250',
        'Dr Irrecoverable debts $950, Cr Allowance for receivables $950',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch10-q254',
      kitRef: 254,
      topicId: 'chapter-10',
      type: 'single',
      text: 'At its year end a company writes off irrecoverable debts of $900 and also reduces its allowance for receivables by $300. Which entries update the ledger?',
      explanation: {
        en: `This time the allowance goes DOWN, which works against the write-off.
# Write-off of $900
  Dr Irrecoverable debts $900, Cr Trade receivables $900
# Allowance down by $300
  Dr Allowance for receivables $300, Cr Irrecoverable debts $300
# Combined
  The expense nets to $900 - $300 = $600
  Dr Irrecoverable debts $600, Dr Allowance for receivables $300, Cr Trade receivables $900
= Answer: option D`,
        ru: `На этот раз резерв УМЕНЬШАЕТСЯ, это работает против списания.
# Списание $900
  Дт Безнадёжные долги $900, Кт Торговые дебиторы $900
# Резерв уменьшается на $300
  Дт Резерв по дебиторам $300, Кт Безнадёжные долги $300
# Вместе
  Расход в итоге $900 - $300 = $600
  Дт Безнадёжные долги $600, Дт Резерв по дебиторам $300, Кт Торговые дебиторы $900
= Ответ: вариант D`,
        uz: `Bu safar rezerv KAMAYADI, bu hisobdan chiqarishga qarshi ishlaydi.
# $900 hisobdan chiqarish
  Dt Umidsiz qarzlar $900, Kt Savdo debitorlari $900
# Rezerv $300 ga kamayadi
  Dt Debitorlik rezervi $300, Kt Umidsiz qarzlar $300
# Birga
  Xarajat sof $900 - $300 = $600
  Dt Umidsiz qarzlar $600, Dt Debitorlik rezervi $300, Kt Savdo debitorlari $900
= Javob: D variant`,
      },
      options: [
        'Dr Trade receivables $900, Cr Irrecoverable debts $600 and Cr Allowance for receivables $300',
        'Dr Irrecoverable debts $300 and Dr Allowance for receivables $600, Cr Trade receivables $900',
        'Dr Irrecoverable debts $1,200, Cr Trade receivables $900 and Cr Allowance for receivables $300',
        'Dr Irrecoverable debts $600 and Dr Allowance for receivables $300, Cr Trade receivables $900',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch10-q255',
      kitRef: 255,
      topicId: 'chapter-10',
      type: 'single',
      text: 'During the year a company unexpectedly received $520 for a debt which it had written off earlier in the same year. Which entry is correct?',
      explanation: {
        en: `Same rule as question 251: a written-off debt is no longer in receivables, so reverse the expense.
# The entry
  Dr Bank $520, Cr Irrecoverable debts expense $520
= Answer: option C
- Sundry income: the recovery cancels an expense; it is not new income.
- Receivables: the debt is no longer there.
- Allowance: unrelated.`,
        ru: `То же правило, что в вопросе 251: списанного долга нет в дебиторах, поэтому сторнируем расход.
# Проводка
  Дт Банк $520, Кт Расход по безнадёжным долгам $520
= Ответ: вариант C
- Прочий доход: возврат отменяет расход, это не новый доход.
- Дебиторы: долга там уже нет.
- Резерв: не связан.`,
        uz: `251-savoldagi qoida: hisobdan chiqarilgan qarz debitorlarda yo'q, shuning uchun xarajat qaytariladi.
# Yozuv
  Dt Bank $520, Kt Umidsiz qarzlar xarajati $520
= Javob: C variant
- Turli daromad: qaytarish xarajatni bekor qiladi, yangi daromad emas.
- Debitorlar: qarz u yerda yo'q.
- Rezerv: aloqasi yo'q.`,
      },
      options: [
        'Dr Bank $520, Cr Sundry income $520',
        'Dr Bank $520, Cr Receivables $520',
        'Dr Bank $520, Cr Irrecoverable debts expense $520',
        'Dr Bank $520, Cr Allowance for receivables $520',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch10-q256',
      kitRef: 256,
      topicId: 'chapter-10',
      type: 'number',
      text: 'A business has one credit customer. During the year its personal account showed: opening balance $31,000 (debit); cash received $110,000; discounts allowed $2,500 (not expected to be taken when the invoice was issued); interest on overdue payments $1,200; contra agreement $7,500; credit sales $150,000; returns inwards $4,000. The customer disputes $8,000 of items, and the business writes this off as irrecoverable. How much is owed by the customer at the year end?',
      explanation: {
        en: `Go through the customer's account line by line: does each item make them owe more or less?
# Owe more (+)
  Opening $31,000
  Credit sales $150,000
  Interest charged on overdue payments $1,200
# Owe less (-)
  Cash received $110,000
  Discount allowed $2,500 (not expected, so the sale was recorded at the full price)
  Contra $7,500
  Returns inwards $4,000
  Disputed items written off $8,000
= Answer: $31,000 + $150,000 + $1,200 - $110,000 - $2,500 - $7,500 - $4,000 - $8,000 = $50,200`,
        ru: `Пройдём по счёту покупателя: каждая строка увеличивает или уменьшает долг?
# Долг больше (+)
  На начало $31,000
  Продажи в кредит $150,000
  Проценты за просрочку $1,200
# Долг меньше (-)
  Получено денег $110,000
  Скидка $2,500 (не ожидалась, продажу записали по полной цене)
  Взаимозачёт $7,500
  Возвраты покупателя $4,000
  Списаны оспоренные суммы $8,000
= Ответ: $31,000 + $150,000 + $1,200 - $110,000 - $2,500 - $7,500 - $4,000 - $8,000 = $50,200`,
        uz: `Mijoz hisobini qatorma-qator ko'ramiz: har bir modda qarzni oshiradimi yoki kamaytiradimi?
# Qarz ko'payadi (+)
  Boshida $31,000
  Nasiya sotuv $150,000
  Kechikkan to'lovlar uchun foiz $1,200
# Qarz kamayadi (-)
  Olingan pul $110,000
  Chegirma $2,500 (kutilmagan, sotuv to'liq narxda yozilgan)
  O'zaro hisob $7,500
  Sotuv qaytarishlari $4,000
  E'tirozli summalar hisobdan chiqarilgan $8,000
= Javob: $31,000 + $150,000 + $1,200 - $110,000 - $2,500 - $7,500 - $4,000 - $8,000 = $50,200`,
      },
      correctValue: 50200,
      answerText: '$50,200',
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
