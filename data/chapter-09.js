'use strict';

const chapter09 = {
  id: 'chapter-09',
  titles: { en: 'Accruals and prepayments', ru: 'Начисления и предоплаты', uz: 'Hisoblangan va oldindan to\'langan xarajatlar' },
  objectives: [
    { en: 'Understand how matching applies to accruals and prepayments', ru: 'Понимать, как принцип соответствия применяется к начислениям и предоплатам', uz: 'Moslik tamoyili hisoblangan va oldindan to\'langan xarajatlarga qanday qo\'llanishini tushunish' },
    { en: 'Identify and calculate accrual and prepayment adjustments', ru: 'Определять и рассчитывать корректировки на начисления и предоплаты', uz: 'Hisoblangan va oldindan to\'langan xarajat tuzatishlarini aniqlash va hisoblash' },
    { en: 'Record them in the general ledger accounts', ru: 'Отражать их на счетах главной книги', uz: 'Ularni bosh kitob hisoblarida qayd etish' },
    { en: 'Understand the effect on profit and net assets', ru: 'Понимать влияние на прибыль и чистые активы', uz: 'Foyda va sof aktivlarga ta\'sirini tushunish' },
  ],
  sections: [
    {
      key: {
        en: `- Accrual basis: include income earned and expenses incurred in the period, whether or not cash moved.
- Profit = income earned - expenditure incurred.
- Credit sales are recognised when goods or services are supplied.
- Credit purchases are recognised when they occur. Expenses are matched to the sales they help make.`,
        ru: `- Метод начисления: учитывайте доходы и расходы периода независимо от движения денег.
- Прибыль = заработанный доход - понесённые расходы.
- Продажи в кредит признаются при поставке товаров или услуг.
- Закупки в кредит признаются, когда они произошли. Расходы сопоставляются с продажами, которым они помогают.`,
        uz: `- Hisoblash usuli: pul harakatidan qat'i nazar, davrda topilgan daromad va qilingan xarajatlarni kiriting.
- Foyda = topilgan daromad - qilingan xarajat.
- Nasiya sotuvlar tovar yoki xizmat yetkazilganda tan olinadi.
- Nasiya xaridlar sodir bo'lganda tan olinadi. Xarajatlar ular yordam bergan sotuvlarga moslashtiriladi.`,
      },
      exam: {
        en: `- A credit sale is recorded as Dr Receivables, Cr Sales revenue when goods are supplied, not when the cash arrives.
- The expense for the period is the cost actually incurred in it, not just the cash paid.
- Accruals and prepayments are both ways of applying the accruals concept to expenses and income.`,
        ru: `- Продажа в кредит отражается как Дт Дебиторы, Кт Выручка при поставке товара, а не при получении денег.
- Расход периода — это затраты, фактически понесённые в нём, а не только уплаченные деньги.
- Начисления и предоплаты — это способы применить принцип начисления к расходам и доходам.`,
        uz: `- Nasiya sotuv tovar yetkazilganda Dt Debitorlar, Kt Sotuv tushumi sifatida yoziladi, pul kelganda emas.
- Davr xarajati — unda haqiqatda qilingan xarajat, faqat to'langan pul emas.
- Hisoblangan va oldindan to'langan xarajatlar — hisoblash tamoyilini xarajat va daromadga qo'llash usullari.`,
      },
      heading: {
        en: 'The accrual basis of accounting',
        ru: 'Метод начисления в учёте',
        uz: 'Buxgalteriyada hisoblash usuli',
      },
      body: {
        en: `The accrual basis means that to find the profit for a period we include all the income and expenditure that relates to that period, whether or not the cash has been received or paid, or an invoice has arrived. Profit is therefore income earned less expenditure incurred.

The Conceptual Framework describes it as depicting the effects of transactions in the period in which those effects occur, even if the cash moves in a different period. IFRS 18 treats it as an important concept because it gives a better basis for assessing performance than cash receipts and payments alone.

Sales revenue is recognised when the sale is made. For a credit sale that is when the goods or services are supplied, by setting up a receivable: Dr Receivables, Cr Sales revenue. Purchases are recognised when they occur: Dr Purchases, Cr Payables. Cost of sales needs opening and closing inventory so that the goods sold are matched to the sales. Expenses such as rent, electricity and telephone are matched to the period, so the profit or loss shows the expense actually incurred and not just the cash paid.`,
        ru: `Метод начисления означает, что для определения прибыли за период мы включаем все доходы и расходы, относящиеся к этому периоду, независимо от того, получены ли деньги, уплачены ли они или пришёл ли счёт. Поэтому прибыль — это заработанный доход минус понесённые расходы.

Концептуальные основы описывают это как отражение последствий операций в периоде, когда они происходят, даже если деньги движутся в другом периоде. IFRS 18 считает это важным понятием, так как оно даёт лучшую основу для оценки результатов, чем одни поступления и платежи.

Выручка признаётся при продаже. Для продажи в кредит это момент поставки товаров или услуг, с созданием дебиторской задолженности: Дт Дебиторы, Кт Выручка. Закупки признаются, когда они происходят: Дт Закупки, Кт Кредиторы. Для себестоимости продаж нужны запасы на начало и конец, чтобы проданные товары сопоставлялись с продажами. Расходы вроде аренды, электричества и телефона сопоставляются с периодом, поэтому в прибыли или убытке показан фактически понесённый расход, а не только уплаченные деньги.`,
        uz: `Hisoblash usuli davr foydasini topish uchun pul olingan yoki to'langanidan yoki hisob-faktura kelganidan qat'i nazar, shu davrga tegishli barcha daromad va xarajatlarni kiritishni anglatadi. Demak foyda — topilgan daromad minus qilingan xarajat.

Konseptual asoslar buni operatsiyalar ta'sirini ular sodir bo'lgan davrda, pul boshqa davrda harakatlansa ham, aks ettirish deb ta'riflaydi. IFRS 18 buni muhim tushuncha deb hisoblaydi, chunki u natijani baholash uchun faqat pul kirimi va chiqimiga qaraganda yaxshiroq asos beradi.

Tushum sotuv amalga oshganda tan olinadi. Nasiya sotuvda bu tovar yoki xizmat yetkazilgan payt, debitorlik qarzini yaratish bilan: Dt Debitorlar, Kt Sotuv tushumi. Xaridlar sodir bo'lganda tan olinadi: Dt Xaridlar, Kt Kreditorlar. Sotilgan tovar tannarxi uchun boshlang'ich va yakuniy zaxira kerak, shunda sotilgan tovarlar sotuvlarga moslashadi. Ijara, elektr va telefon kabi xarajatlar davrga moslashtiriladi, shuning uchun foyda yoki zararda faqat to'langan pul emas, haqiqatda qilingan xarajat ko'rsatiladi.`,
      },
      example: {
        en: `In December Madina delivers goods to a cafe on credit for $900. The cafe will not pay until February. Under the accrual basis the $900 is December income, because that is when she earned it: Dr Receivables $900, Cr Sales revenue $900. If she only counted cash, December would look $900 poorer than it was.`,
        ru: `В декабре Мадина поставляет в кафе товары в кредит на $900. Кафе заплатит только в феврале. По методу начисления $900 — доход декабря, потому что тогда она его заработала: Дт Дебиторы $900, Кт Выручка $900. Если бы она считала только деньги, декабрь выглядел бы на $900 беднее, чем был.`,
        uz: `Dekabrda Madina kafega $900 lik tovarni nasiyaga yetkazadi. Kafe faqat fevralda to'laydi. Hisoblash usuliga ko'ra $900 dekabr daromadi, chunki u shu paytda topilgan: Dt Debitorlar $900, Kt Sotuv tushumi $900. Agar u faqat pulni hisoblasa, dekabr aslidan $900 kambag'alroq ko'rinardi.`,
      },
    },
    {
      key: {
        en: `- Accrual: an expense of this year not yet paid. Dr Expense, Cr Accruals.
- It adds to the expense, so it reduces profit.
- The accrual is a current liability.
- Expense for the year = cash paid + closing accrual - opening accrual.`,
        ru: `- Начисление: расход этого года, который ещё не оплачен. Дт Расход, Кт Начисления.
- Оно увеличивает расход, поэтому уменьшает прибыль.
- Начисление — краткосрочное обязательство.
- Расход года = уплаченные деньги + начисление на конец - начисление на начало.`,
        uz: `- Hisoblangan xarajat: shu yilgi, hali to'lanmagan xarajat. Dt Xarajat, Kt Hisoblangan xarajatlar.
- U xarajatni oshiradi, shuning uchun foydani kamaytiradi.
- U joriy majburiyat.
- Yil xarajati = to'langan pul + yakuniy hisoblangan - boshlang'ich hisoblangan.`,
      },
      exam: {
        en: `- A bill paid in arrears is accrued for the part of the period not yet billed, using months as fractions (for example 2/3 of a quarterly bill).
- Interest on a loan is accrued for the days or months it has built up but not been paid.
- An accrued expense at the start of the year must be taken out of this year's expense, as it belongs to the last year.`,
        ru: `- Счёт, оплачиваемый по факту, начисляется за часть периода, ещё не выставленную, с долями по месяцам (например, 2/3 квартального счёта).
- Проценты по займу начисляются за дни или месяцы, которые накопились, но не оплачены.
- Начисленный расход на начало года нужно убрать из расхода этого года, так как он относится к прошлому году.`,
        uz: `- Keyin to'lanadigan hisob hali hisob-faktura qilinmagan davr qismi uchun oylarni kasr sifatida ishlatib hisoblanadi (masalan choraklik hisobning 2/3 qismi).
- Qarz bo'yicha foiz yig'ilgan, lekin to'lanmagan kunlar yoki oylar uchun hisoblanadi.
- Yil boshidagi hisoblangan xarajat shu yil xarajatidan chiqarilishi kerak, chunki u o'tgan yilga tegishli.`,
      },
      heading: {
        en: 'Accrued expenditure',
        ru: 'Начисленные расходы',
        uz: 'Hisoblangan xarajatlar',
      },
      body: {
        en: `An accrual arises where expenses of the year have not been paid by the year end. The extra expense is recorded and a liability is created: Dr Expense account, Cr Accruals. This reduces profit and creates a current liability.

There are two ways to see the same thing in the expense account. If you know the accrual, it is the closing balance carried forward, and the expense is the balancing figure. If you know the expense, the accrual is the balancing figure.

An expense account normally has more debits than credits. Payments in the year are debited. A closing accrual is also debited, to raise the charge, and is carried forward as a credit balance. An opening accrual is a credit balance brought forward, which reduces the charge because that part belonged to last year. When the account is balanced, the net debit goes to profit or loss.`,
        ru: `Начисление возникает, когда расходы года не оплачены к концу года. Дополнительный расход отражается и создаётся обязательство: Дт Счёт расхода, Кт Начисления. Это уменьшает прибыль и создаёт краткосрочное обязательство.

Есть два способа увидеть одно и то же на счёте расхода. Если известно начисление, оно — остаток, переносимый на конец, а расход — балансирующая цифра. Если известен расход, балансирующая цифра — начисление.

На счёте расхода обычно больше дебетов, чем кредитов. Платежи года дебетуются. Начисление на конец тоже дебетуется, увеличивая расход, и переносится как кредитовое сальдо. Начисление на начало — кредитовое сальдо, перенесённое с прошлого года, оно уменьшает расход, так как эта часть относилась к прошлому году. При закрытии счёта итоговый дебет идёт в прибыль или убыток.`,
        uz: `Hisoblangan xarajat yil xarajatlari yil oxirigacha to'lanmagan bo'lsa paydo bo'ladi. Qo'shimcha xarajat yoziladi va majburiyat yaratiladi: Dt Xarajat hisobi, Kt Hisoblangan xarajatlar. Bu foydani kamaytiradi va joriy majburiyat yaratadi.

Xarajat hisobida bir narsani ko'rishning ikki yo'li bor. Hisoblangan summa ma'lum bo'lsa, u o'tkaziladigan yakuniy qoldiq, xarajat esa balanslovchi summa. Xarajat ma'lum bo'lsa, balanslovchi summa hisoblangan xarajat.

Xarajat hisobida odatda debet kreditdan ko'p. Yil to'lovlari debetlanadi. Yakuniy hisoblangan xarajat ham xarajatni oshirish uchun debetlanadi va kredit qoldiq sifatida o'tkaziladi. Boshlang'ich hisoblangan xarajat — o'tgan yildan kelgan kredit qoldiq, u xarajatni kamaytiradi, chunki bu qism o'tgan yilga tegishli edi. Hisob yopilganda sof debet foyda yoki zararga o'tadi.`,
      },
      example: {
        en: `Madina's electricity is $4,800 a year, billed after each quarter. In the year she paid $3,600. The last quarter's bill of $1,200 arrives in January. At the year end she records Dr Electricity $1,200, Cr Accruals $1,200. The electricity expense is $3,600 + $1,200 = $4,800, and there is a $1,200 current liability.`,
        ru: `Электричество Мадины стоит $4,800 в год, счёт выставляется после каждого квартала. За год она заплатила $3,600. Счёт за последний квартал $1,200 придёт в январе. На конец года она делает проводку Дт Электричество $1,200, Кт Начисления $1,200. Расход на электричество $3,600 + $1,200 = $4,800, и есть краткосрочное обязательство $1,200.`,
        uz: `Madinaning elektr xarajati yiliga $4,800, har chorakdan keyin hisob-faktura qilinadi. Yilda u $3,600 to'ladi. So'nggi chorak $1,200 lik hisobi yanvarda keladi. Yil oxirida u Dt Elektr $1,200, Kt Hisoblangan xarajatlar $1,200 yozadi. Elektr xarajati $3,600 + $1,200 = $4,800 va $1,200 lik joriy majburiyat bor.`,
      },
    },
    {
      key: {
        en: `- Prepayment: paid this year but relates to next year. Dr Prepayment, Cr Expense.
- It removes part of the expense, so it increases profit.
- The prepayment is a current asset, shown within trade and other receivables.
- Expense for the year = opening prepayment + cash paid - closing prepayment.`,
        ru: `- Предоплата: оплачено в этом году, но относится к следующему. Дт Предоплата, Кт Расход.
- Она убирает часть расхода, поэтому увеличивает прибыль.
- Предоплата — оборотный актив, показывается в составе торговой и прочей дебиторской задолженности.
- Расход года = предоплата на начало + уплаченные деньги - предоплата на конец.`,
        uz: `- Oldindan to'lov: shu yil to'langan, lekin keyingi yilga tegishli. Dt Oldindan to'lov, Kt Xarajat.
- U xarajatning bir qismini olib tashlaydi, shuning uchun foydani oshiradi.
- Oldindan to'lov joriy aktiv, savdo va boshqa debitorlik qarzi tarkibida ko'rsatiladi.
- Yil xarajati = boshlang'ich oldindan to'lov + to'langan pul - yakuniy oldindan to'lov.`,
      },
      exam: {
        en: `- When a payment covers a period that spans the year end, split it by months: the part used is an expense and the rest is a prepayment.
- If a premium rises part way through, apply each premium to the months it covers.
- A prepayment is an asset. An accrual is a liability.`,
        ru: `- Если платёж охватывает период, пересекающий конец года, разделите его по месяцам: использованная часть — расход, остальное — предоплата.
- Если взнос вырос в середине, применяйте каждый взнос к месяцам, которые он покрывает.
- Предоплата — актив. Начисление — обязательство.`,
        uz: `- To'lov yil oxirini kesib o'tadigan davrni qamrasa, uni oylar bo'yicha bo'ling: ishlatilgan qism xarajat, qolgani oldindan to'lov.
- Mukofot yil o'rtasida oshsa, har bir mukofotni u qamragan oylarga qo'llang.
- Oldindan to'lov — aktiv. Hisoblangan xarajat — majburiyat.`,
      },
      heading: {
        en: 'Prepaid expenditure',
        ru: 'Расходы будущих периодов',
        uz: 'Oldindan to\'langan xarajatlar',
      },
      body: {
        en: `A prepayment arises where some of next year's expense has already been paid this year. The part that does not belong to this year is removed from the expense and set up as an asset: Dr Prepayment, Cr Expense account. This increases profit and creates a current asset.

In the expense account, an opening prepayment is a debit balance brought forward, which adds to the charge because it is used up this year. Payments in the year are debited. A closing prepayment is credited to reduce the charge and carried forward as a debit balance.

Prepayments are classified within trade and other receivables, which are current assets. Accruals are within trade and other payables, which are current liabilities. If they are material they can be shown separately in the notes.`,
        ru: `Предоплата возникает, когда часть расхода следующего года уже оплачена в этом году. Часть, не относящаяся к этому году, убирается из расхода и отражается как актив: Дт Предоплата, Кт Счёт расхода. Это увеличивает прибыль и создаёт оборотный актив.

На счёте расхода предоплата на начало — дебетовое сальдо, перенесённое с прошлого года, оно увеличивает расход, так как расходуется в этом году. Платежи года дебетуются. Предоплата на конец кредитуется, уменьшая расход, и переносится как дебетовое сальдо.

Предоплаты входят в торговую и прочую дебиторскую задолженность, то есть в оборотные активы. Начисления входят в торговую и прочую кредиторскую задолженность, то есть в краткосрочные обязательства. Если они существенны, их можно показать отдельно в примечаниях.`,
        uz: `Oldindan to'lov keyingi yil xarajatining bir qismi shu yil allaqachon to'langanda paydo bo'ladi. Shu yilga tegishli bo'lmagan qism xarajatdan chiqariladi va aktiv sifatida yoziladi: Dt Oldindan to'lov, Kt Xarajat hisobi. Bu foydani oshiradi va joriy aktiv yaratadi.

Xarajat hisobida boshlang'ich oldindan to'lov — o'tgan yildan kelgan debet qoldiq, u shu yil sarflangani uchun xarajatni oshiradi. Yil to'lovlari debetlanadi. Yakuniy oldindan to'lov xarajatni kamaytirish uchun kreditlanadi va debet qoldiq sifatida o'tkaziladi.

Oldindan to'lovlar joriy aktivlar bo'lgan savdo va boshqa debitorlik qarzlari tarkibiga kiradi. Hisoblangan xarajatlar joriy majburiyatlar bo'lgan savdo va boshqa kreditorlik qarzlari tarkibida. Ular muhim bo'lsa, izohlarda alohida ko'rsatilishi mumkin.`,
      },
      example: {
        en: `On 1 October Madina pays $2,400 for insurance covering the 12 months to 30 September. At the 31 December year end only 3 months have been used: $600. The other 9 months, $1,800, belong to next year. She records Dr Prepayments $1,800, Cr Insurance $1,800. The insurance expense is $600 and a $1,800 current asset appears.`,
        ru: `1 октября Мадина платит $2,400 за страховку на 12 месяцев по 30 сентября. К концу года, 31 декабря, использовано только 3 месяца: $600. Остальные 9 месяцев, $1,800, относятся к следующему году. Она делает проводку Дт Предоплаты $1,800, Кт Страховка $1,800. Расход на страховку $600, и появляется оборотный актив $1,800.`,
        uz: `1 oktabrda Madina 30 sentabrgacha 12 oylik sug'urta uchun $2,400 to'laydi. 31 dekabr yil oxirida faqat 3 oy ishlatilgan: $600. Qolgan 9 oy, $1,800, keyingi yilga tegishli. U Dt Oldindan to'lovlar $1,800, Kt Sug'urta $1,800 yozadi. Sug'urta xarajati $600 va $1,800 lik joriy aktiv paydo bo'ladi.`,
      },
    },
    {
      key: {
        en: `- Accrued income: earned this year, not yet received. Dr Accrued income, Cr Income.
- It increases income and profit, and creates a current asset.
- Prepaid income: received this year for next year. Dr Income, Cr Prepaid income.
- It reduces income and profit, and creates a current liability.`,
        ru: `- Начисленный доход: заработан в этом году, ещё не получен. Дт Начисленный доход, Кт Доход.
- Он увеличивает доход и прибыль и создаёт оборотный актив.
- Доход будущих периодов: получен в этом году за следующий. Дт Доход, Кт Доход будущих периодов.
- Он уменьшает доход и прибыль и создаёт краткосрочное обязательство.`,
        uz: `- Hisoblangan daromad: shu yil topilgan, hali olinmagan. Dt Hisoblangan daromad, Kt Daromad.
- U daromad va foydani oshiradi va joriy aktiv yaratadi.
- Oldindan olingan daromad: keyingi yil uchun shu yil olingan. Dt Daromad, Kt Oldindan olingan daromad.
- U daromad va foydani kamaytiradi va joriy majburiyat yaratadi.`,
      },
      exam: {
        en: `- Accrued income is income earned but not yet received, so it increases profit. The statement that accrued income decreases profit is false.
- Income received in advance is a liability, because it has been received but not yet earned.
- In an income account, the cash received is credited, and opening and closing accrued or prepaid balances adjust the figure sent to profit or loss.`,
        ru: `- Начисленный доход — заработанный, но ещё не полученный, поэтому он увеличивает прибыль. Утверждение, что он уменьшает прибыль, ложно.
- Доход, полученный авансом, — обязательство, так как он получен, но ещё не заработан.
- На счёте дохода полученные деньги кредитуются, а остатки начисленного или полученного авансом дохода на начало и конец корректируют сумму, идущую в прибыль или убыток.`,
        uz: `- Hisoblangan daromad topilgan, lekin hali olinmagan daromad, shuning uchun foydani oshiradi. Uni kamaytiradi degan gap noto'g'ri.
- Oldindan olingan daromad majburiyat, chunki u olingan, lekin hali topilmagan.
- Daromad hisobida olingan pul kreditlanadi, boshlang'ich va yakuniy hisoblangan yoki oldindan olingan qoldiqlar foyda yoki zararga o'tadigan summani to'g'rilaydi.`,
      },
      heading: {
        en: 'Accrued income and prepaid income',
        ru: 'Начисленный доход и доход будущих периодов',
        uz: 'Hisoblangan va oldindan olingan daromad',
      },
      body: {
        en: `The same logic works for income. Accrued income arises where income has been earned in the period but not yet received: Dr Accrued income (statement of financial position), Cr Income (profit or loss). It creates a current asset and increases profit.

Prepaid income arises where income has been received in the period but relates to the next one. The part that is not earned yet is removed from income and set up as a liability: Dr Income, Cr Prepaid income. It reduces income and profit for the current period, and creates a current liability, because the business has received money it has not yet earned.

In the income account, cash received is credited. An opening accrued income balance (debit) is taken off, an opening prepaid income balance (credit) is added, a closing accrued income is credited to raise income, and a closing prepaid income is debited to lower it. The net credit goes to profit or loss.`,
        ru: `Та же логика работает для доходов. Начисленный доход возникает, когда доход заработан в периоде, но ещё не получен: Дт Начисленный доход (отчёт о финансовом положении), Кт Доход (прибыль или убыток). Он создаёт оборотный актив и увеличивает прибыль.

Доход будущих периодов возникает, когда доход получен в периоде, но относится к следующему. Ещё не заработанная часть убирается из дохода и отражается как обязательство: Дт Доход, Кт Доход будущих периодов. Он уменьшает доход и прибыль текущего периода и создаёт краткосрочное обязательство, так как бизнес получил деньги, которые ещё не заработал.

На счёте дохода полученные деньги кредитуются. Начисленный доход на начало (дебет) вычитается, доход будущих периодов на начало (кредит) добавляется, начисленный доход на конец кредитуется, увеличивая доход, а доход будущих периодов на конец дебетуется, уменьшая его. Итоговый кредит идёт в прибыль или убыток.`,
        uz: `Xuddi shu mantiq daromadda ham ishlaydi. Hisoblangan daromad davrda topilgan, lekin hali olinmagan daromad bo'lsa paydo bo'ladi: Dt Hisoblangan daromad (moliyaviy holat hisoboti), Kt Daromad (foyda yoki zarar). U joriy aktiv yaratadi va foydani oshiradi.

Oldindan olingan daromad davrda olingan, lekin keyingi davrga tegishli daromad bo'lsa paydo bo'ladi. Hali topilmagan qism daromaddan chiqariladi va majburiyat sifatida yoziladi: Dt Daromad, Kt Oldindan olingan daromad. U joriy davr daromadi va foydasini kamaytiradi va joriy majburiyat yaratadi, chunki biznes hali topmagan pulni olgan.

Daromad hisobida olingan pul kreditlanadi. Boshlang'ich hisoblangan daromad (debet) ayiriladi, boshlang'ich oldindan olingan daromad (kredit) qo'shiladi, yakuniy hisoblangan daromad daromadni oshirish uchun kreditlanadi, yakuniy oldindan olingan daromad uni kamaytirish uchun debetlanadi. Sof kredit foyda yoki zararga o'tadi.`,
      },
      example: {
        en: `Madina sublets a stall for $500 a month. She received $5,500 in the year, so $500 is accrued income: Dr Accrued income $500, Cr Rental income $500, making income $6,000. Another tenant paid $7,000 in advance for a stall that earns $500 a month, so only $6,000 is this year's income. She records Dr Rental income $1,000, Cr Prepaid income $1,000, which is a liability.`,
        ru: `Мадина сдаёт в субаренду лоток за $500 в месяц. За год она получила $5,500, поэтому $500 — начисленный доход: Дт Начисленный доход $500, Кт Доход от аренды $500, итого доход $6,000. Другой арендатор заплатил $7,000 вперёд за лоток, приносящий $500 в месяц, поэтому доходом этого года считаются только $6,000. Она делает проводку Дт Доход от аренды $1,000, Кт Доход будущих периодов $1,000, это обязательство.`,
        uz: `Madina bir peshtaxtani oyiga $500 ga sub-ijaraga beradi. Yilda u $5,500 oldi, demak $500 hisoblangan daromad: Dt Hisoblangan daromad $500, Kt Ijara daromadi $500, daromad $6,000 bo'ladi. Boshqa ijarachi oyiga $500 topadigan peshtaxta uchun $7,000 oldindan to'ladi, shuning uchun shu yil daromadi faqat $6,000. U Dt Ijara daromadi $1,000, Kt Oldindan olingan daromad $1,000 yozadi, bu majburiyat.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Accrual basis', ru: 'Метод начисления', uz: 'Hisoblash usuli' }, definition: { en: 'Recording income and expenses when they are earned or incurred, not when cash moves.', ru: 'Отражение доходов и расходов, когда они заработаны или понесены, а не при движении денег.', uz: 'Daromad va xarajatlarni pul harakatlanganda emas, topilganda yoki qilinganda yozish.' } },
    { term: { en: 'Accrual', ru: 'Начисление', uz: 'Hisoblangan xarajat' }, definition: { en: 'An expense of the period not yet paid. A current liability.', ru: 'Расход периода, ещё не оплаченный. Краткосрочное обязательство.', uz: 'Davrning hali to\'lanmagan xarajati. Joriy majburiyat.' } },
    { term: { en: 'Prepayment', ru: 'Предоплата', uz: 'Oldindan to\'lov' }, definition: { en: 'Part of next period\'s expense paid in advance. A current asset.', ru: 'Часть расхода следующего периода, оплаченная заранее. Оборотный актив.', uz: 'Keyingi davr xarajatining oldindan to\'langan qismi. Joriy aktiv.' } },
    { term: { en: 'Accrued income', ru: 'Начисленный доход', uz: 'Hisoblangan daromad' }, definition: { en: 'Income earned in the period but not yet received. A current asset.', ru: 'Доход, заработанный в периоде, но ещё не полученный. Оборотный актив.', uz: 'Davrda topilgan, lekin hali olinmagan daromad. Joriy aktiv.' } },
    { term: { en: 'Prepaid income', ru: 'Доход будущих периодов', uz: 'Oldindan olingan daromad' }, definition: { en: 'Income received in advance for the next period. A current liability.', ru: 'Доход, полученный заранее за следующий период. Краткосрочное обязательство.', uz: 'Keyingi davr uchun oldindan olingan daromad. Joriy majburiyat.' } },
    { term: { en: 'In arrears', ru: 'По факту (в конце периода)', uz: 'Keyin (davr oxirida)' }, definition: { en: 'Paid after the period it relates to.', ru: 'Оплачивается после периода, к которому относится.', uz: 'Tegishli davrdan keyin to\'lanadi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter09;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter09.id] = chapter09;
