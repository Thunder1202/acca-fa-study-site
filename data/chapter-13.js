'use strict';

const chapter13 = {
  id: 'chapter-13',
  titles: {
    en: 'Reconciliations',
    ru: 'Сверки',
    uz: 'Solishtirishlar',
  },
  objectives: [
    { en: 'Explain the purpose of a bank reconciliation', ru: 'Объяснять цель банковской сверки', uz: 'Bank solishtirishining maqsadini tushuntirish' },
    { en: 'Identify why the ledger and the bank statement differ', ru: 'Определять, почему книга и выписка банка расходятся', uz: 'Kitob va bank ko\'chirmasi nega farq qilishini aniqlash' },
    { en: 'Correct the cash at bank ledger account and prepare a reconciliation', ru: 'Исправлять счёт банка и готовить сверку', uz: 'Bank hisobini tuzatish va solishtirish tayyorlash' },
    { en: 'Work out a missing bank or ledger balance', ru: 'Находить недостающий остаток банка или книги', uz: 'Yetishmagan bank yoki kitob qoldig\'ini topish' },
    { en: 'Reconcile supplier statements to supplier accounts', ru: 'Сверять выписки поставщиков со счетами поставщиков', uz: 'Yetkazib beruvchi ko\'chirmalarini ularning hisoblari bilan solishtirish' },
  ],
  sections: [
    {
      key: {
        en: `- A bank reconciliation explains the gap between the ledger and the bank statement.
- The ledger is your record. The statement is the bank's record.
- Debits and credits are reversed on a bank statement, because you are the bank's liability.
- Money in the bank is a credit on the statement and a debit in your ledger.
- An overdraft is a debit on the statement and a credit in your ledger.
- It is done regularly, usually monthly, to protect cash.`,
        ru: `- Банковская сверка объясняет разрыв между книгой и выпиской банка.
- Книга — ваша запись. Выписка — запись банка.
- В выписке дебет и кредит наоборот, потому что вы — обязательство банка.
- Деньги в банке — кредит в выписке и дебет в вашей книге.
- Овердрафт — дебет в выписке и кредит в вашей книге.
- Делается регулярно, обычно ежемесячно, чтобы защитить деньги.`,
        uz: `- Bank solishtirishi kitob va bank ko'chirmasi orasidagi farqni tushuntiradi.
- Kitob sizning yozuvingiz. Ko'chirma bankning yozuvi.
- Ko'chirmada debet va kredit teskari, chunki siz bankning majburiyatisiz.
- Bankdagi pul ko'chirmada kredit, kitobingizda debet.
- Overdraft ko'chirmada debet, kitobingizda kredit.
- Muntazam, odatda har oy, pulni himoya qilish uchun bajariladi.`,
      },
      exam: {
        en: `- A debit balance on a bank statement means overdrawn. A credit balance means money in the bank.
- A ledger balance described as credit means overdrawn.
- Read each question carefully for "overdrawn", "Dr" and "Cr" before you start.`,
        ru: `- Дебетовый остаток в выписке значит овердрафт. Кредитовый — деньги в банке.
- Кредитовый остаток в книге значит овердрафт.
- Перед началом внимательно ищите в задаче слова «овердрафт», Dr и Cr.`,
        uz: `- Ko'chirmadagi debet qoldiq overdraft degani. Kredit qoldiq bankda pul bor degani.
- Kitobdagi kredit qoldiq overdraft degani.
- Boshlashdan oldin masalada "overdraft", Dr va Cr so'zlariga e'tibor bering.`,
      },
      heading: {
        en: 'Why reconcile the bank',
        ru: 'Зачем сверять банк',
        uz: 'Bankni nega solishtirish kerak',
      },
      body: {
        en: `A business keeps its own record of bank transactions in the cash at bank ledger account. The bank keeps its record of the same account and sends it as a statement. In theory the two should agree, but in practice they rarely do.

There are three reasons. First, the bank sees the account the other way round. Money you hold at the bank is money the bank owes you, so it is a credit balance on the statement. A payment you make is a credit in your ledger and a debit on the statement.

Second, timing differs. You record a payment when you send it, but the bank records it only when it clears, which may be days later.

Third, some items appear on the statement before you know about them, such as interest and bank charges.

Cash is the most vulnerable asset a business has, so the statement is a valuable independent check. Comparing the two regularly is how errors and omissions are found.`,
        ru: `Бизнес ведёт свою запись банковских операций на счёте банка в книге. Банк ведёт свою запись того же счёта и присылает её как выписку. Теоретически они должны совпадать, но на практике совпадают редко.

Причин три. Во-первых, банк видит счёт наоборот. Ваши деньги в банке — это долг банка перед вами, поэтому в выписке это кредитовый остаток. Ваш платёж — кредит в книге и дебет в выписке.

Во-вторых, различаются сроки. Вы записываете платёж при отправке, а банк — только при проведении, что может быть спустя дни.

В-третьих, некоторые статьи появляются в выписке раньше, чем вы о них узнаёте, например проценты и банковские комиссии.

Деньги — самый уязвимый актив бизнеса, поэтому выписка — ценная независимая проверка. Регулярное сравнение помогает находить ошибки и пропуски.`,
        uz: `Biznes bank operatsiyalarining o'z yozuvini kitobdagi bank hisobida yuritadi. Bank xuddi shu hisobning o'z yozuvini yuritadi va ko'chirma sifatida yuboradi. Nazariy jihatdan ular mos kelishi kerak, amalda esa kamdan-kam mos keladi.

Sabablari uchta. Birinchidan, bank hisobni teskari ko'radi. Bankdagi pulingiz bankning sizga qarzi, shuning uchun ko'chirmada kredit qoldiq. Sizning to'lovingiz kitobda kredit, ko'chirmada debet.

Ikkinchidan, vaqt farq qiladi. Siz to'lovni yuborganda yozasiz, bank esa faqat o'tganda, bu bir necha kundan keyin bo'lishi mumkin.

Uchinchidan, ba'zi moddalar siz bilmasdan ko'chirmada paydo bo'ladi, masalan foiz va bank komissiyalari.

Pul biznesning eng zaif aktivi, shuning uchun ko'chirma qimmatli mustaqil tekshiruv. Muntazam solishtirish xato va tushib qolganlarni topishga yordam beradi.`,
      },
      example: {
        en: `Madina's ledger shows $3,200 in the bank, a debit. Her bank statement shows $3,070 credit, which is also money in the bank, seen from the bank's side. The two figures differ by $130. The reconciliation shows exactly why, item by item.`,
        ru: `В книге Мадины в банке $3,200, дебет. В выписке $3,070 кредит: это тоже деньги в банке, но со стороны банка. Разница $130. Сверка показывает точную причину, статья за статьёй.`,
        uz: `Madina kitobida bankda $3,200, debet. Bank ko'chirmasida $3,070 kredit, bu ham bankdagi pul, faqat bank tomonidan. Farq $130. Solishtirish aniq sababni modda-modda ko'rsatadi.`,
      },
    },
    {
      key: {
        en: `- Unrecorded items: on the statement but not yet in your ledger.
- Examples: interest, bank charges, direct debits, standing orders, dishonoured cheques.
- These correct the ledger.
- Timing differences: in your ledger but not yet on the statement.
- Examples: unpresented cheques and uncleared lodgements. These adjust the statement.
- Your own errors correct the ledger. The bank's errors adjust the statement.`,
        ru: `- Незаписанные статьи: в выписке есть, в вашей книге ещё нет.
- Примеры: проценты, комиссии, прямые дебеты, постоянные поручения, возвращённые чеки.
- Они исправляют книгу.
- Временные разницы: в книге есть, в выписке ещё нет.
- Примеры: непредъявленные чеки и незачисленные поступления. Они корректируют выписку.
- Ваши ошибки исправляют книгу. Ошибки банка корректируют выписку.`,
        uz: `- Yozilmagan moddalar: ko'chirmada bor, kitobda hali yo'q.
- Misollar: foiz, komissiya, to'g'ridan-to'g'ri debet, doimiy topshiriq, qaytgan cheklar.
- Ular kitobni tuzatadi.
- Vaqt farqlari: kitobda bor, ko'chirmada hali yo'q.
- Misollar: taqdim etilmagan cheklar va o'tmagan tushumlar. Ular ko'chirmani moslaydi.
- O'z xatolaringiz kitobni tuzatadi. Bank xatolari ko'chirmani moslaydi.`,
      },
      exam: {
        en: `- An uncleared lodgement is a timing difference, not an unrecorded item. So is an unpresented cheque.
- A dishonoured cheque is a credit in the ledger, reversing the original debit.
- Direct credits and interest received are debits in the ledger. Charges, direct debits and standing orders are credits.
- A bank error is never entered in the ledger. It is corrected on the statement side, and the bank is told.
- If an entry was posted to the wrong side of the ledger, the correction is twice the amount.
- A cheque recorded at the wrong amount is corrected by the difference.
- A dishonoured cheque that the bank has not yet told you about still goes through the ledger, not the reconciliation.`,
        ru: `- Незачисленное поступление — временная разница, а не незаписанная статья. Как и непредъявленный чек.
- Возвращённый чек — кредит в книге, отменяющий первоначальный дебет.
- Прямые поступления и полученные проценты — дебет в книге. Комиссии, прямые дебеты и постоянные поручения — кредит.
- Ошибка банка никогда не вносится в книгу. Она исправляется со стороны выписки, и банку сообщают.
- Если запись сделана не на той стороне книги, исправление равно двойной сумме.
- Чек с неверной суммой исправляется на разницу.
- Возвращённый чек, о котором банк ещё не сообщил, всё равно идёт через книгу, а не через сверку.`,
        uz: `- O'tmagan tushum vaqt farqi, yozilmagan modda emas. Taqdim etilmagan chek ham.
- Qaytgan chek kitobda kredit, dastlabki debetni bekor qiladi.
- To'g'ridan-to'g'ri tushumlar va olingan foiz kitobda debet. Komissiya, to'g'ridan-to'g'ri debet va doimiy topshiriq kredit.
- Bank xatosi kitobga hech qachon yozilmaydi. U ko'chirma tomonida tuzatiladi va bankka xabar beriladi.
- Yozuv kitobning noto'g'ri tomoniga yozilgan bo'lsa, tuzatish ikki baravar summa.
- Noto'g'ri summa yozilgan chek farqqa tuzatiladi.
- Bank hali aytmagan qaytgan chek ham solishtirishdan emas, kitobdan o'tadi.`,
      },
      heading: {
        en: 'What causes the differences',
        ru: 'Что вызывает различия',
        uz: 'Farqlarga nima sabab bo\'ladi',
      },
      body: {
        en: `Differences fall into three groups, and each group decides which side of the reconciliation you adjust.

Unrecorded items reach the bank first. The business only learns of them from the statement, for example bank interest, bank charges and dishonoured cheques. The ledger must be updated for these.

Timing differences reach the ledger first. An unpresented cheque is one written and recorded, but not yet cleared by the bank. A cheque posted on 29 March may only reach the statement on 6 April. An uncleared lodgement, also called an outstanding deposit, is money banked and recorded that has not yet appeared on the statement. In both cases the ledger is already right, so the statement balance is adjusted.

Errors can be on either side. If the business made the mistake, correct the ledger. If the bank made the mistake, for example by charging another customer's cheque to the account, adjust the statement balance and tell the bank.`,
        ru: `Различия делятся на три группы, и каждая определяет, какую сторону сверки корректировать.

Незаписанные статьи сначала попадают в банк. Бизнес узнаёт о них только из выписки: проценты, комиссии, возвращённые чеки. По ним нужно обновить книгу.

Временные разницы сначала попадают в книгу. Непредъявленный чек выписан и записан, но ещё не проведён банком. Чек, отправленный 29 марта, может попасть в выписку только 6 апреля. Незачисленное поступление — деньги, сданные и записанные, но ещё не появившиеся в выписке. В обоих случаях книга уже верна, поэтому корректируется остаток выписки.

Ошибки могут быть с любой стороны. Если ошибся бизнес, исправьте книгу. Если ошибся банк, например списал чужой чек, скорректируйте остаток выписки и сообщите банку.`,
        uz: `Farqlar uch guruhga bo'linadi va har bir guruh solishtirishning qaysi tomoni tuzatilishini belgilaydi.

Yozilmagan moddalar avval bankka tushadi. Biznes ular haqida faqat ko'chirmadan biladi: foiz, komissiya, qaytgan cheklar. Bular uchun kitob yangilanadi.

Vaqt farqlari avval kitobga tushadi. Taqdim etilmagan chek yozilgan va qayd etilgan, lekin bank hali o'tkazmagan. 29 martda yuborilgan chek ko'chirmaga faqat 6 aprelda tushishi mumkin. O'tmagan tushum — bankka topshirilgan va yozilgan, lekin ko'chirmada hali ko'rinmagan pul. Ikkala holda kitob allaqachon to'g'ri, shuning uchun ko'chirma qoldig'i moslanadi.

Xato har ikki tomonda bo'lishi mumkin. Biznes xato qilgan bo'lsa, kitobni tuzating. Bank xato qilgan bo'lsa, masalan boshqa mijoz chekini yozgan bo'lsa, ko'chirma qoldig'ini moslang va bankka ayting.`,
      },
      example: {
        en: `Madina compares her records with the bank statement. The statement shows charges of $45, a $200 insurance direct debit, $15 of interest and a customer's $120 cheque that bounced: all unrecorded, so they go in her ledger. A $340 payment was entered as $430, which is her own error, so the ledger needs $90 added back. Her $380 cheque to a supplier has not cleared and her $250 banking from the last day is not on the statement yet: both are timing, so the ledger needs no change for them.`,
        ru: `Мадина сравнивает записи с выпиской. В выписке комиссия $45, прямой дебет страховки $200, проценты $15 и возвращённый чек покупателя $120: всё это не записано и идёт в книгу. Платёж $340 записан как $430, это её ошибка, поэтому в книгу нужно вернуть $90. Её чек поставщику на $380 ещё не проведён, а сдача $250 в последний день ещё не в выписке: это время, и книга по ним не меняется.`,
        uz: `Madina yozuvlarini ko'chirma bilan solishtiradi. Ko'chirmada $45 komissiya, $200 sug'urta to'g'ridan-to'g'ri debeti, $15 foiz va mijozning qaytgan $120 cheki bor: bular yozilmagan, kitobga kiradi. $340 to'lov $430 deb yozilgan, bu uning xatosi, kitobga $90 qaytarish kerak. Yetkazib beruvchiga $380 cheki o'tmagan, oxirgi kundagi $250 topshirish ko'chirmada yo'q: bular vaqt, kitob o'zgarmaydi.`,
      },
    },
    {
      key: {
        en: `- Step 1: correct the ledger for unrecorded items and your own errors.
- Step 2: start with the balance per bank statement.
- Deduct unpresented cheques. Add uncleared lodgements.
- Adjust for any bank errors.
- The result must equal the corrected ledger balance.
- Only the corrected ledger balance goes in the statement of financial position.`,
        ru: `- Шаг 1: исправьте книгу на незаписанные статьи и свои ошибки.
- Шаг 2: начните с остатка по выписке банка.
- Вычтите непредъявленные чеки. Прибавьте незачисленные поступления.
- Скорректируйте на ошибки банка.
- Результат должен равняться исправленному остатку книги.
- В отчёт о финансовом положении идёт только исправленный остаток книги.`,
        uz: `- 1-qadam: kitobni yozilmagan moddalar va o'z xatolaringizga tuzating.
- 2-qadam: bank ko'chirmasidagi qoldiqdan boshlang.
- Taqdim etilmagan cheklarni ayiring. O'tmagan tushumlarni qo'shing.
- Bank xatolariga moslang.
- Natija tuzatilgan kitob qoldig'iga teng bo'lishi kerak.
- Moliyaviy holat hisobotiga faqat tuzatilgan kitob qoldig'i kiradi.`,
      },
      exam: {
        en: `- Treat overdrawn balances as negative numbers. Adding a lodgement makes an overdraft smaller.
- To find the statement balance, start from the corrected ledger and reverse: add back unpresented cheques, take off uncleared lodgements, and undo bank errors.
- To find the original ledger, start from the corrected ledger and undo each correction.
- A bank error crediting your account by mistake is taken off the statement balance. One debiting it by mistake is added back.
- Check the description of each item. A cash discount reduces what is paid to a supplier, and sales tax is part of the cash received.
- A misleading draft reconciliation may add when it should subtract. Rebuild it from the statement balance.`,
        ru: `- Считайте овердрафты отрицательными числами. Поступление уменьшает овердрафт.
- Чтобы найти остаток выписки, идите от исправленной книги обратно: прибавьте непредъявленные чеки, вычтите незачисленные поступления, отмените ошибки банка.
- Чтобы найти исходную книгу, идите от исправленной и отмените каждое исправление.
- Ошибочный кредит банка вычитается из остатка выписки. Ошибочный дебет прибавляется.
- Проверяйте описание каждой статьи. Кассовая скидка уменьшает платёж поставщику, а налог входит в полученные деньги.
- Черновая сверка может складывать вместо вычитания. Постройте её заново от остатка выписки.`,
        uz: `- Overdraftlarni manfiy son deb hisoblang. Tushum overdraftni kamaytiradi.
- Ko'chirma qoldig'ini topish uchun tuzatilgan kitobdan orqaga boring: taqdim etilmagan cheklarni qo'shing, o'tmagan tushumlarni ayiring, bank xatolarini bekor qiling.
- Dastlabki kitobni topish uchun tuzatilgandan boshlab har bir tuzatishni bekor qiling.
- Bankning xato krediti ko'chirma qoldig'idan ayiriladi. Xato debeti qo'shiladi.
- Har bir modda tavsifini tekshiring. Naqd chegirma yetkazib beruvchiga to'lovni kamaytiradi, soliq olingan pulga kiradi.
- Xato qoralama solishtirish ayirish o'rniga qo'shishi mumkin. Uni ko'chirma qoldig'idan qayta tuzing.`,
      },
      heading: {
        en: 'Preparing a bank reconciliation',
        ru: 'Подготовка банковской сверки',
        uz: 'Bank solishtirishini tayyorlash',
      },
      body: {
        en: `The work has two stages.

First, correct the cash at bank ledger account. Start from the balance shown, which may be a debit or a credit. Enter the unrecorded items and correct your own errors. The result is the revised balance.

Second, prepare the reconciliation statement. Start from the balance per the bank statement. Deduct unpresented payments, because the bank has yet to take that money out. Add uncleared lodgements, because the bank has yet to put that money in. Then adjust for any bank errors. The result must equal the revised ledger balance.

Three things need care. Overdrawn balances make the arithmetic easy to get wrong. Debits and credits on a statement are the opposite way round to the ledger. And a single deposit line on a statement may add together several items.

The bank balance in the statement of financial position is always the revised ledger balance, not the figure on the bank statement.`,
        ru: `Работа состоит из двух этапов.

Сначала исправьте счёт банка в книге. Начните с показанного остатка, дебетового или кредитового. Внесите незаписанные статьи и исправьте свои ошибки. Получится исправленный остаток.

Затем подготовьте сверку. Начните с остатка по выписке. Вычтите непредъявленные платежи, потому что банк ещё не снял эти деньги. Прибавьте незачисленные поступления, потому что банк ещё не зачислил их. Затем скорректируйте ошибки банка. Результат должен равняться исправленному остатку книги.

Осторожность нужна в трёх местах. При овердрафте легко ошибиться в расчётах. Дебет и кредит в выписке наоборот по сравнению с книгой. А одна строка поступления в выписке может объединять несколько сумм.

Остаток банка в отчёте о финансовом положении — всегда исправленный остаток книги, а не цифра из выписки.`,
        uz: `Ish ikki bosqichdan iborat.

Avval kitobdagi bank hisobini tuzating. Ko'rsatilgan qoldiqdan boshlang, u debet yoki kredit bo'lishi mumkin. Yozilmagan moddalarni kiriting va o'z xatolaringizni tuzating. Natija tuzatilgan qoldiq.

So'ng solishtirishni tayyorlang. Ko'chirma qoldig'idan boshlang. Taqdim etilmagan to'lovlarni ayiring, chunki bank bu pulni hali olmagan. O'tmagan tushumlarni qo'shing, chunki bank bu pulni hali kiritmagan. So'ng bank xatolariga moslang. Natija tuzatilgan kitob qoldig'iga teng bo'lishi kerak.

Uch narsaga ehtiyot bo'ling. Overdraftda hisob-kitobda xato qilish oson. Ko'chirmadagi debet va kredit kitobga teskari. Ko'chirmadagi bitta tushum qatori bir necha summani birlashtirishi mumkin.

Moliyaviy holat hisobotidagi bank qoldig'i doim tuzatilgan kitob qoldig'i, ko'chirmadagi raqam emas.`,
      },
      example: {
        en: `Ledger first: $3,200 - charges $45 - direct debit $200 + interest $15 - dishonoured cheque $120 + error correction $90 = $2,940. Then the reconciliation: balance per statement $3,070, less unpresented cheque $380, plus uncleared lodgement $250, gives $2,940. The two agree. Madina reports $2,940 in her statement of financial position, not $3,200 and not $3,070.`,
        ru: `Сначала книга: $3,200 - комиссия $45 - прямой дебет $200 + проценты $15 - возвращённый чек $120 + исправление $90 = $2,940. Затем сверка: остаток по выписке $3,070 минус непредъявленный чек $380 плюс незачисленное поступление $250 даёт $2,940. Суммы совпали. Мадина показывает $2,940 в отчёте о финансовом положении, а не $3,200 и не $3,070.`,
        uz: `Avval kitob: $3,200 - komissiya $45 - to'g'ridan-to'g'ri debet $200 + foiz $15 - qaytgan chek $120 + tuzatish $90 = $2,940. So'ng solishtirish: ko'chirma qoldig'i $3,070 minus taqdim etilmagan chek $380 plus o'tmagan tushum $250 = $2,940. Ular mos keldi. Madina moliyaviy holat hisobotida $2,940 ko'rsatadi, $3,200 ham, $3,070 ham emas.`,
      },
    },
    {
      key: {
        en: `- A supplier statement is the supplier's record of what you owe. It lists invoices, credit notes and payments.
- It should be the mirror image of your account for that supplier.
- Reconciling it finds items missing from either record.
- Differences often come from timing: a payment or return not yet on the statement.
- An invoice on the statement may not yet be in your ledger.
- Amounts can differ because one side keyed in a wrong figure.`,
        ru: `- Выписка поставщика — его запись вашего долга. В ней счета, кредит-ноты и платежи.
- Она должна быть зеркалом вашего счёта этого поставщика.
- Сверка находит то, чего нет в той или другой записи.
- Различия часто временные: платёж или возврат ещё не в выписке.
- Счёта из выписки может ещё не быть в вашей книге.
- Суммы могут отличаться из-за неверно введённой цифры.`,
        uz: `- Yetkazib beruvchi ko'chirmasi uning qarzingiz haqidagi yozuvi. Unda hisob-fakturalar, kredit-notalar, to'lovlar.
- U o'sha yetkazib beruvchi hisobingizning oyna aksi bo'lishi kerak.
- Solishtirish biror yozuvda yo'q narsalarni topadi.
- Farqlar ko'pincha vaqtdan: to'lov yoki qaytarish hali ko'chirmada yo'q.
- Ko'chirmadagi hisob-faktura kitobingizda hali bo'lmasligi mumkin.
- Summalar noto'g'ri kiritilgan raqam tufayli farq qilishi mumkin.`,
      },
      exam: {
        en: `- A statement of account is issued by a business to its credit customers, to show how much they owe.
- A statement can be reconciled to the ledger once goods in transit, cash in transit, discounts and returns are identified. It does not always agree.
- Matching a statement to the month's transactions can reveal duplicated invoices, but not wrong calculations on an invoice.
- Your ledger is higher than the statement if the supplier has allowed a discount you have not yet recorded.
- Payments and returns you have recorded, but the supplier has not, make the statement higher, not lower.
- Adjust each record separately: the statement for what the supplier has not recorded, and the ledger for what you have not recorded.
- To find one balance from the other, add or deduct only the items that the question says are missing.
- To find the updated ledger balance, take the statement and deduct items the supplier has not yet recorded.`,
        ru: `- Выписку по счёту бизнес выдаёт своим покупателям в кредит, чтобы показать их долг.
- Выписку можно свести с книгой, определив товар и деньги в пути, скидки и возвраты. Она не всегда совпадает.
- Сравнение выписки с операциями месяца выявляет повторные счета, но не ошибки расчёта в счёте.
- Ваша книга выше выписки, если поставщик дал скидку, которую вы ещё не записали.
- Платежи и возвраты, записанные вами, но не поставщиком, делают выписку выше, а не ниже.
- Корректируйте записи отдельно: выписку на то, что не записал поставщик, а книгу на то, что не записали вы.
- Чтобы найти один остаток из другого, прибавляйте или вычитайте только статьи, названные в задаче.
- Чтобы найти обновлённую книгу, возьмите выписку и вычтите статьи, ещё не записанные поставщиком.`,
        uz: `- Hisob ko'chirmasini biznes nasiya mijozlariga ularning qarzini ko'rsatish uchun beradi.
- Yo'ldagi tovar va pul, chegirmalar va qaytarishlar aniqlangach, ko'chirma kitob bilan solishtiriladi. U doim mos kelmaydi.
- Ko'chirmani oy operatsiyalari bilan solishtirish takroriy hisob-fakturalarni topadi, hisob-fakturadagi hisoblash xatolarini emas.
- Yetkazib beruvchi siz hali yozmagan chegirma bergan bo'lsa, kitobingiz ko'chirmadan yuqori.
- Siz yozgan, lekin yetkazib beruvchi yozmagan to'lov va qaytarishlar ko'chirmani past emas, yuqori qiladi.
- Har bir yozuvni alohida moslang: ko'chirmani yetkazib beruvchi yozmagan narsaga, kitobni siz yozmagan narsaga.
- Bir qoldiqdan ikkinchisini topish uchun faqat masalada aytilgan moddalarni qo'shing yoki ayiring.
- Yangilangan kitob qoldig'ini topish uchun ko'chirmadan yetkazib beruvchi hali yozmagan moddalarni ayiring.`,
      },
      heading: {
        en: 'Supplier statement reconciliations',
        ru: 'Сверка выписок поставщиков',
        uz: 'Yetkazib beruvchi ko\'chirmalarini solishtirish',
      },
      body: {
        en: `The total of the payables ledger should equal the total of the individual supplier accounts, but that does not prove every transaction with every supplier was recorded correctly. Items can be left out or entered wrongly in both.

Many suppliers send a monthly statement showing movements on your account and the amount outstanding. It is in effect the supplier's own memorandum receivable account for you, so it should mirror your account for that supplier. This gives an outside check.

Common differences are a payment made but not yet on the statement, an invoice not yet recorded by you, a discount recorded by one side but not the other, goods returned but not yet on the statement, and a figure entered wrongly, such as $435 for $345.

Work through each item and decide who needs to act. If the supplier's statement is wrong, tell the supplier. If your record is wrong, correct it by journal, remembering that a change to an individual supplier's account usually also needs a change in the payables general ledger account.`,
        ru: `Итог счёта кредиторов должен равняться сумме счетов отдельных поставщиков, но это не доказывает, что каждая операция записана верно. Статьи могут быть пропущены или неверны в обоих местах.

Многие поставщики присылают ежемесячную выписку с движением по вашему счёту и суммой долга. По сути это вспомогательный счёт дебитора у поставщика, поэтому он должен быть зеркалом вашего счёта. Это даёт внешнюю проверку.

Обычные различия: платёж сделан, но не в выписке; счёт не записан вами; скидка записана одной стороной; возврат ещё не в выписке; неверная цифра, например $435 вместо $345.

Разберите каждую статью и решите, кто должен действовать. Если ошибка в выписке, сообщите поставщику. Если в вашей записи, исправьте журналом, помня, что изменение счёта поставщика обычно требует изменения и счёта кредиторов в главной книге.`,
        uz: `Kreditorlar hisobi jami alohida yetkazib beruvchi hisoblari jamiga teng bo'lishi kerak, lekin bu har bir operatsiya to'g'ri yozilganini isbotlamaydi. Moddalar ikkalasida ham tushib qolishi yoki noto'g'ri bo'lishi mumkin.

Ko'p yetkazib beruvchilar hisobingizdagi harakat va qarz summasini ko'rsatuvchi oylik ko'chirma yuboradi. Bu aslida yetkazib beruvchining siz uchun yordamchi debitor hisobi, shuning uchun hisobingizning oyna aksi bo'lishi kerak. Bu tashqi tekshiruv beradi.

Odatiy farqlar: to'lov qilingan, lekin ko'chirmada yo'q; hisob-faktura siz tomondan yozilmagan; chegirma bir tomon yozgan; qaytarish hali ko'chirmada yo'q; noto'g'ri raqam, masalan $345 o'rniga $435.

Har bir moddani ko'rib, kim harakat qilishi kerakligini hal qiling. Ko'chirma xato bo'lsa, yetkazib beruvchiga ayting. Yozuvingiz xato bo'lsa, jurnal bilan tuzating, alohida hisob o'zgarishi odatda bosh kitobdagi kreditorlar hisobini ham o'zgartirishini unutmang.`,
      },
      example: {
        en: `Madina's account for a supplier shows $1,500. The supplier's statement shows $2,110. Three items explain it: her $320 payment sent on the last day, and $90 of returned goods, are not yet on the statement, and an invoice for $200 on the statement has not reached her. She records the invoice, so her account becomes $1,700. The statement less $320 and $90 is also $1,700, and the two agree.`,
        ru: `Счёт Мадины по поставщику показывает $1,500. Выписка показывает $2,110. Объясняют три статьи: её платёж $320 в последний день и возврат на $90 ещё не в выписке, а счёт на $200 из выписки до неё не дошёл. Она записывает счёт, и её запись становится $1,700. Выписка минус $320 и $90 тоже $1,700, суммы совпали.`,
        uz: `Madinaning yetkazib beruvchi hisobi $1,500 ko'rsatadi. Ko'chirma $2,110 ko'rsatadi. Uch modda tushuntiradi: oxirgi kundagi $320 to'lovi va $90 qaytarish hali ko'chirmada yo'q, ko'chirmadagi $200 hisob-faktura esa unga kelmagan. U hisob-fakturani yozadi, hisobi $1,700 bo'ladi. Ko'chirma minus $320 va $90 ham $1,700, ular mos keldi.`,
      },
    },
    {
      key: {
        en: `- Errors found in the general ledger are corrected by a journal.
- Errors between two supplier accounts only need moving within the memorandum accounts.
- The general ledger is untouched if only the wrong supplier was named.
- A disallowed discount: Dr Discount received, Cr Payables.
- The closing payables balance is the current liability in the statement of financial position.`,
        ru: `- Ошибки в главной книге исправляются журналом.
- Ошибки между двумя счетами поставщиков только переносятся во вспомогательных счетах.
- Если неверен только поставщик, главная книга не меняется.
- Отклонённая скидка: Дт Полученная скидка, Кт Кредиторы.
- Остаток кредиторов на конец — краткосрочное обязательство в отчёте о финансовом положении.`,
        uz: `- Bosh kitobdagi xatolar jurnal bilan tuzatiladi.
- Ikki yetkazib beruvchi hisobi orasidagi xato faqat yordamchi hisoblarda ko'chiriladi.
- Faqat yetkazib beruvchi noto'g'ri bo'lsa, bosh kitob o'zgarmaydi.
- Rad etilgan chegirma: Dt Olingan chegirma, Kt Kreditorlar.
- Yakuniy kreditorlar qoldig'i moliyaviy holat hisobotida qisqa muddatli majburiyat.`,
      },
      heading: {
        en: 'Correcting what a reconciliation finds',
        ru: 'Исправление найденного сверкой',
        uz: 'Solishtirish topgan narsani tuzatish',
      },
      body: {
        en: `If a reconciliation shows that an amount in the general ledger is wrong, a journal is needed. For example, if a supplier refuses a discount you recorded, the debt is higher than you thought: Dr Discount received, Cr Payables. Individual supplier accounts are memorandum records, not part of the double entry, so the journal is written in terms of the general ledger accounts.

Sometimes the general ledger is right and only the supplier is wrong. If an invoice from one supplier was coded to another, the total payable is unaffected. The correction is a transfer between the two individual accounts.

The closing balance on the payables account is the figure shown as a liability in the statement of financial position.`,
        ru: `Если сверка показывает, что сумма в главной книге неверна, нужен журнал. Например, если поставщик отказывает в скидке, которую вы записали, долг выше, чем вы думали: Дт Полученная скидка, Кт Кредиторы. Счета поставщиков — вспомогательные записи, не часть двойной записи, поэтому журнал составляется по счетам главной книги.

Иногда главная книга верна, а неверен только поставщик. Если счёт одного поставщика отнесён к другому, общий долг не меняется. Исправление — перенос между двумя отдельными счетами.

Остаток на конец счёта кредиторов — сумма обязательства в отчёте о финансовом положении.`,
        uz: `Solishtirish bosh kitobdagi summa xato ekanini ko'rsatsa, jurnal kerak. Masalan, yetkazib beruvchi siz yozgan chegirmani rad etsa, qarz o'ylaganingizdan yuqori: Dt Olingan chegirma, Kt Kreditorlar. Alohida yetkazib beruvchi hisoblari yordamchi yozuvlar, ikki yoqlama yozuv qismi emas, shuning uchun jurnal bosh kitob hisoblarida yoziladi.

Ba'zan bosh kitob to'g'ri, faqat yetkazib beruvchi noto'g'ri. Bir yetkazib beruvchi hisob-fakturasi boshqasiga kodlangan bo'lsa, jami kreditor o'zgarmaydi. Tuzatish ikki alohida hisob orasida ko'chirish.

Kreditorlar hisobining yakuniy qoldig'i moliyaviy holat hisobotidagi majburiyat summasi.`,
      },
      example: {
        en: `Madina recorded a $25 discount when she paid a supplier, but the payment arrived late and the supplier refused it. She posts Dr Discount received $25, Cr Payables $25, and updates that supplier's account too. Separately, an invoice from Paper Co was entered on Print Co's account. Total payables are correct, so she only moves it between those two individual accounts.`,
        ru: `Мадина записала скидку $25 при оплате, но платёж пришёл поздно, и поставщик отказал. Она проводит Дт Полученная скидка $25, Кт Кредиторы $25 и обновляет счёт этого поставщика. Отдельно счёт от Paper Co был записан на счёт Print Co. Общий долг верен, поэтому она только переносит его между этими двумя счетами.`,
        uz: `Madina to'lovda $25 chegirma yozgan edi, lekin to'lov kech yetdi va yetkazib beruvchi rad etdi. U Dt Olingan chegirma $25, Kt Kreditorlar $25 yozadi va shu yetkazib beruvchi hisobini ham yangilaydi. Alohida, Paper Co hisob-fakturasi Print Co hisobiga yozilgan edi. Jami kreditor to'g'ri, shuning uchun u faqat shu ikki hisob orasida ko'chiradi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Bank reconciliation', ru: 'Банковская сверка', uz: 'Bank solishtirishi' }, definition: { en: 'A statement explaining the difference between the ledger and the bank statement.', ru: 'Отчёт, объясняющий разницу между книгой и выпиской банка.', uz: 'Kitob va bank ko\'chirmasi orasidagi farqni tushuntiruvchi hisobot.' } },
    { term: { en: 'Unpresented cheque', ru: 'Непредъявленный чек', uz: 'Taqdim etilmagan chek' }, definition: { en: 'A payment recorded in the ledger that the bank has not yet cleared.', ru: 'Платёж, записанный в книге, но ещё не проведённый банком.', uz: 'Kitobda yozilgan, lekin bank hali o\'tkazmagan to\'lov.' } },
    { term: { en: 'Uncleared lodgement', ru: 'Незачисленное поступление', uz: 'O\'tmagan tushum' }, definition: { en: 'Money banked and recorded in the ledger but not yet on the statement.', ru: 'Деньги, сданные и записанные в книге, но ещё не в выписке.', uz: 'Bankka topshirilgan va kitobda yozilgan, lekin ko\'chirmada hali yo\'q pul.' } },
    { term: { en: 'Dishonoured cheque', ru: 'Возвращённый чек', uz: 'Qaytgan chek' }, definition: { en: 'A cheque paid in that the bank has refused to honour.', ru: 'Внесённый чек, который банк отказался оплатить.', uz: 'Bank to\'lashni rad etgan topshirilgan chek.' } },
    { term: { en: 'Supplier statement', ru: 'Выписка поставщика', uz: 'Yetkazib beruvchi ko\'chirmasi' }, definition: { en: 'A monthly summary from a supplier of transactions and the amount owed.', ru: 'Ежемесячная сводка поставщика об операциях и сумме долга.', uz: 'Yetkazib beruvchining operatsiyalar va qarz summasi haqidagi oylik jamlanmasi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter13;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter13.id] = chapter13;
