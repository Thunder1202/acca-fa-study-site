'use strict';

const chapter09 = {
  id: 'chapter-09',
  titles: {
    en: 'Accruals and prepayments',
    ru: 'Начисления и предоплаты',
    uz: 'Hisoblangan va oldindan to\'langan xarajatlar',
  },
  objectives: [
    {
      en: 'Understand how matching applies to accruals and prepayments',
      ru: 'Понимать, как принцип соответствия применяется к начислениям и предоплатам',
      uz: 'Moslik tamoyili hisoblangan va oldindan to\'langan xarajatlarga qanday qo\'llanishini tushunish',
    },
    {
      en: 'Identify and calculate accrual and prepayment adjustments',
      ru: 'Определять и рассчитывать корректировки на начисления и предоплаты',
      uz: 'Hisoblangan va oldindan to\'langan xarajat tuzatishlarini aniqlash va hisoblash',
    },
    {
      en: 'Record them in the general ledger accounts',
      ru: 'Отражать их на счетах главной книги',
      uz: 'Ularni bosh kitob hisoblarida qayd etish',
    },
    {
      en: 'Understand the effect on profit and net assets',
      ru: 'Понимать влияние на прибыль и чистые активы',
      uz: 'Foyda va sof aktivlarga ta\'sirini tushunish',
    },
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
        en: `A flower shop delivers $900 of flowers to a hotel on 20 December. The hotel pays on 10 February.
# When is the $900 income?
  Earned in December, when the flowers were delivered
  Dr Receivables $900, Cr Sales revenue $900 in December
# What if we only counted cash?
  December would look $900 poorer and February $900 richer, which does not show what really happened.`,
        ru: `Цветочный магазин 20 декабря доставляет отелю цветы на $900. Отель платит 10 февраля.
# Когда $900 — доход?
  Заработаны в декабре, при доставке цветов
  Дт Дебиторы $900, Кт Выручка $900 в декабре
# А если считать только деньги?
  Декабрь выглядел бы на $900 беднее, а февраль на $900 богаче, что не отражает реальность.`,
        uz: `Gul do'koni 20 dekabrda mehmonxonaga $900 lik gul yetkazadi. Mehmonxona 10 fevralda to'laydi.
# $900 qachon daromad?
  Dekabrda, gullar yetkazilganda topilgan
  Dekabrda Dt Debitorlar $900, Kt Sotuv tushumi $900
# Faqat pulni hisoblasak-chi?
  Dekabr $900 kambag'alroq, fevral $900 boyroq ko'rinardi, bu haqiqatni aks ettirmaydi.`,
      },
      simple: {
        en: `The accrual basis means: count income in the period you EARN it, and costs in the period you USE them, no matter when the money actually moves.

So a sale in December belongs to December, even if the customer pays in February. And December's electricity belongs to December, even if the bill comes in January.`,
        ru: `Метод начисления: доход учитывают в периоде, когда его ЗАРАБОТАЛИ, а затраты — когда их ИСПОЛЬЗОВАЛИ, неважно, когда двигаются деньги.

Поэтому продажа в декабре относится к декабрю, даже если покупатель заплатит в феврале. И декабрьское электричество относится к декабрю, даже если счёт придёт в январе.`,
        uz: `Hisoblash usuli: daromad TOPILGAN davrda, xarajat ISHLATILGAN davrda hisobga olinadi, pul qachon harakatlanishidan qat'i nazar.

Shuning uchun dekabrdagi sotuv, mijoz fevralda to'lasa ham, dekabrga tegishli. Dekabr elektri ham, hisob yanvarda kelsa ham, dekabrga tegishli.`,
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
      heading: { en: 'Accrued expenditure', ru: 'Начисленные расходы', uz: 'Hisoblangan xarajatlar' },
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
        en: `A hair salon's electricity is billed after each quarter. The year ends on 31 December.
# Step 1: Bills paid during the year
  Quarters 1, 2 and 3: $3,600
# Step 2: The last quarter
  October to December was used, but its $1,200 bill arrives in January
  Dr Electricity $1,200, Cr Accruals $1,200
# Step 3: Expense for the year
  $3,600 + $1,200 = $4,800, the cost of all four quarters used
= Profit falls by $1,200 and a $1,200 current liability appears.`,
        ru: `Электричество парикмахерской выставляют после каждого квартала. Год заканчивается 31 декабря.
# Шаг 1: Оплачено за год
  Кварталы 1, 2 и 3: $3,600
# Шаг 2: Последний квартал
  Октябрь-декабрь использованы, но счёт $1,200 придёт в январе
  Дт Электричество $1,200, Кт Начисления $1,200
# Шаг 3: Расход за год
  $3,600 + $1,200 = $4,800, стоимость всех четырёх использованных кварталов
= Прибыль падает на $1,200, появляется краткосрочное обязательство $1,200.`,
        uz: `Sartaroshxona elektri har chorakdan keyin hisoblanadi. Yil 31 dekabrda tugaydi.
# 1-qadam: Yil davomida to'langan
  1, 2 va 3-choraklar: $3,600
# 2-qadam: Oxirgi chorak
  Oktyabr-dekabr ishlatilgan, lekin $1,200 hisob yanvarda keladi
  Dt Elektr $1,200, Kt Hisoblangan xarajatlar $1,200
# 3-qadam: Yil xarajati
  $3,600 + $1,200 = $4,800, ishlatilgan to'rt chorak qiymati
= Foyda $1,200 kamayadi, $1,200 qisqa muddatli majburiyat paydo bo'ladi.`,
      },
      simple: {
        en: `An accrual is a cost you have USED this year but not yet PAID for, like a bill that arrives after the year end.

You add it to this year's expense (so profit goes down) and show it as money owed (a current liability). Expense for the year = cash paid + closing accrual - opening accrual.`,
        ru: `Начисление — затрата, которую вы ИСПОЛЬЗОВАЛИ в этом году, но ещё не ОПЛАТИЛИ, например счёт, пришедший после конца года.

Его прибавляют к расходу этого года (прибыль падает) и показывают как долг (краткосрочное обязательство). Расход года = оплачено + начисление на конец - начисление на начало.`,
        uz: `Hisoblangan xarajat — bu yil ISHLATILGAN, lekin hali TO'LANMAGAN xarajat, masalan yil oxiridan keyin keladigan hisob.

U shu yil xarajatiga qo'shiladi (foyda kamayadi) va qarz sifatida ko'rsatiladi (qisqa muddatli majburiyat). Yil xarajati = to'langan + yakuniy hisoblangan - boshlang'ich hisoblangan.`,
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
      heading: { en: 'Prepaid expenditure', ru: 'Расходы будущих периодов', uz: 'Oldindan to\'langan xarajatlar' },
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
        en: `On 1 October a gym pays $2,400 for insurance covering 12 months, to 30 September next year. Its year ends on 31 December.
# Step 1: Cost per month
  $2,400 / 12 = $200
# Step 2: Used this year
  October, November, December = 3 months × $200 = $600
# Step 3: Belongs to next year
  9 months × $200 = $1,800
  Dr Prepayments $1,800, Cr Insurance $1,800
= Insurance expense $600. Prepayment (a current asset) $1,800.`,
        ru: `1 октября спортзал платит $2,400 за страховку на 12 месяцев, до 30 сентября следующего года. Год заканчивается 31 декабря.
# Шаг 1: Стоимость в месяц
  $2,400 / 12 = $200
# Шаг 2: Использовано в этом году
  Октябрь, ноябрь, декабрь = 3 месяца × $200 = $600
# Шаг 3: Относится к следующему году
  9 месяцев × $200 = $1,800
  Дт Предоплаты $1,800, Кт Страхование $1,800
= Расход на страховку $600. Предоплата (оборотный актив) $1,800.`,
        uz: `1 oktyabrda sport zali kelasi yil 30 sentyabrgacha 12 oylik sug'urta uchun $2,400 to'laydi. Yili 31 dekabrda tugaydi.
# 1-qadam: Oylik qiymat
  $2,400 / 12 = $200
# 2-qadam: Bu yil ishlatilgan
  Oktyabr, noyabr, dekabr = 3 oy × $200 = $600
# 3-qadam: Kelasi yilga tegishli
  9 oy × $200 = $1,800
  Dt Oldindan to'lovlar $1,800, Kt Sug'urta $1,800
= Sug'urta xarajati $600. Oldindan to'lov (aylanma aktiv) $1,800.`,
      },
      simple: {
        en: `A prepayment is the opposite: you PAID this year for something you will USE next year, like insurance paid in advance.

You take that part out of this year's expense (so profit goes up) and show it as an asset, because next year's cover is already paid for. Expense for the year = opening prepayment + cash paid - closing prepayment.`,
        ru: `Предоплата — наоборот: вы ЗАПЛАТИЛИ в этом году за то, чем будете ПОЛЬЗОВАТЬСЯ в следующем, например страховку вперёд.

Эту часть убирают из расхода года (прибыль растёт) и показывают как актив, ведь следующий год уже оплачен. Расход года = предоплата на начало + оплачено - предоплата на конец.`,
        uz: `Oldindan to'lov — teskarisi: bu yil kelasi yil FOYDALANADIGAN narsa uchun TO'LADINGIZ, masalan oldindan to'langan sug'urta.

O'sha qism bu yil xarajatidan chiqariladi (foyda oshadi) va aktiv sifatida ko'rsatiladi, chunki kelasi yil allaqachon to'langan. Yil xarajati = boshlang'ich oldindan to'lov + to'langan - yakuniy oldindan to'lov.`,
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
        en: `A shop rents out two small stalls at $500 a month each.
# Stall A: the tenant has paid only 11 months
  Earned: 12 × $500 = $6,000. Received: $5,500
  Missing $500 is accrued income: Dr Accrued income $500, Cr Rental income $500
# Stall B: the tenant paid $7,000 during the year
  Earned this year: 12 × $500 = $6,000
  The extra $1,000 is for next year: Dr Rental income $1,000, Cr Prepaid income $1,000
= Rental income: $6,000 + $6,000 = $12,000. Asset $500 (accrued income), liability $1,000 (prepaid income).`,
        ru: `Магазин сдаёт два небольших места по $500 в месяц каждое.
# Место A: арендатор заплатил только за 11 месяцев
  Заработано: 12 × $500 = $6,000. Получено: $5,500
  Недостающие $500 — начисленный доход: Дт Начисленный доход $500, Кт Доход от аренды $500
# Место B: арендатор заплатил за год $7,000
  Заработано в этом году: 12 × $500 = $6,000
  Лишние $1,000 — за следующий год: Дт Доход от аренды $1,000, Кт Доход будущих периодов $1,000
= Доход от аренды: $6,000 + $6,000 = $12,000. Актив $500 (начисленный доход), обязательство $1,000 (доход будущих периодов).`,
        uz: `Do'kon ikkita kichik joyni har birini oyiga $500 dan ijaraga beradi.
# A joy: ijarachi faqat 11 oy to'lagan
  Topilgan: 12 × $500 = $6,000. Olingan: $5,500
  Yetishmagan $500 — hisoblangan daromad: Dt Hisoblangan daromad $500, Kt Ijara daromadi $500
# B joy: ijarachi yil davomida $7,000 to'lagan
  Bu yil topilgan: 12 × $500 = $6,000
  Ortiqcha $1,000 kelasi yil uchun: Dt Ijara daromadi $1,000, Kt Oldindan olingan daromad $1,000
= Ijara daromadi: $6,000 + $6,000 = $12,000. Aktiv $500 (hisoblangan daromad), majburiyat $1,000 (oldindan olingan daromad).`,
      },
      simple: {
        en: `The same idea works for income.

- Accrued income: you EARNED it this year but have not been paid yet. Add it to income and show it as an asset (someone owes you).
- Prepaid income: you were PAID this year for something you will provide next year. Take it out of income and show it as a liability (you still owe the service).`,
        ru: `Та же идея работает для доходов.

- Начисленный доход: вы его ЗАРАБОТАЛИ в этом году, но вам ещё не заплатили. Прибавьте к доходу и покажите как актив (вам должны).
- Доход будущих периодов: вам ЗАПЛАТИЛИ в этом году за то, что вы дадите в следующем. Уберите из дохода и покажите как обязательство (вы ещё должны услугу).`,
        uz: `Xuddi shu g'oya daromadga ham tegishli.

- Hisoblangan daromad: uni bu yil TOPDINGIZ, lekin hali to'lanmagan. Daromadga qo'shing va aktiv sifatida ko'rsating (sizga qarz).
- Oldindan olingan daromad: kelasi yil beradigan narsa uchun bu yil sizga TO'LANDI. Daromaddan chiqaring va majburiyat sifatida ko'rsating (siz hali xizmat qarzsiz).`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Accrual basis', ru: 'Метод начисления', uz: 'Hisoblash usuli' },
      definition: {
        en: 'Recording income and expenses when they are earned or incurred, not when cash moves.',
        ru: 'Отражение доходов и расходов, когда они заработаны или понесены, а не при движении денег.',
        uz: 'Daromad va xarajatlarni pul harakatlanganda emas, topilganda yoki qilinganda yozish.',
      },
      example: {
        en: 'Flowers delivered on 20 December and paid for in February are December income.',
        ru: 'Цветы, доставленные 20 декабря и оплаченные в феврале, — доход декабря.',
        uz: '20 dekabrda yetkazilib, fevralda to\'langan gullar — dekabr daromadi.',
      },
    },
    {
      term: { en: 'Matching concept', ru: 'Принцип соответствия', uz: 'Moslik tamoyili' },
      definition: {
        en: 'Recording costs in the same period as the income they help to earn.',
        ru: 'Отражение затрат в том же периоде, что и доходы, которые они помогают получить.',
        uz: 'Xarajatlarni ular topishga yordam bergan daromad bilan bir davrda yozish.',
      },
      example: {
        en: 'The cost of the flowers sold in December is a December expense, matched with December\'s sales.',
        ru: 'Стоимость цветов, проданных в декабре, — расход декабря, сопоставленный с продажами декабря.',
        uz: 'Dekabrda sotilgan gullar tannarxi — dekabr sotuvlari bilan moslangan dekabr xarajati.',
      },
    },
    {
      term: { en: 'Accrual', ru: 'Начисление', uz: 'Hisoblangan xarajat' },
      definition: {
        en: 'An expense of the period not yet paid. A current liability.',
        ru: 'Расход периода, ещё не оплаченный. Краткосрочное обязательство.',
        uz: 'Davrning hali to\'lanmagan xarajati. Joriy majburiyat.',
      },
      example: {
        en: 'December electricity of $1,200 billed in January: Dr Electricity, Cr Accruals.',
        ru: 'Электричество за декабрь $1,200, счёт в январе: Дт Электричество, Кт Начисления.',
        uz: 'Yanvarda hisoblangan $1,200 dekabr elektri: Dt Elektr, Kt Hisoblangan xarajatlar.',
      },
    },
    {
      term: { en: 'Prepayment', ru: 'Предоплата', uz: 'Oldindan to\'lov' },
      definition: {
        en: 'Part of next period\'s expense paid in advance. A current asset.',
        ru: 'Часть расхода следующего периода, оплаченная заранее. Оборотный актив.',
        uz: 'Keyingi davr xarajatining oldindan to\'langan qismi. Joriy aktiv.',
      },
      example: {
        en: '$1,800 of insurance paid now that covers next year.',
        ru: '$1,800 страховки, оплаченной сейчас за следующий год.',
        uz: 'Hozir to\'langan, kelasi yilni qoplaydigan $1,800 sug\'urta.',
      },
    },
    {
      term: { en: 'Accrued income', ru: 'Начисленный доход', uz: 'Hisoblangan daromad' },
      definition: {
        en: 'Income earned in the period but not yet received. A current asset.',
        ru: 'Доход, заработанный в периоде, но ещё не полученный. Оборотный актив.',
        uz: 'Davrda topilgan, lekin hali olinmagan daromad. Joriy aktiv.',
      },
      example: {
        en: 'A tenant still owes December\'s $500 rent at the year end.',
        ru: 'Арендатор на конец года ещё должен $500 аренды за декабрь.',
        uz: 'Ijarachi yil oxirida dekabrning $500 ijarasini hali qarz.',
      },
    },
    {
      term: { en: 'Prepaid income', ru: 'Доход будущих периодов', uz: 'Oldindan olingan daromad' },
      definition: {
        en: 'Income received in advance for the next period. A current liability.',
        ru: 'Доход, полученный заранее за следующий период. Краткосрочное обязательство.',
        uz: 'Keyingi davr uchun oldindan olingan daromad. Joriy majburiyat.',
      },
      example: {
        en: 'A tenant pays $1,000 now for January and February next year.',
        ru: 'Арендатор платит сейчас $1,000 за январь и февраль следующего года.',
        uz: 'Ijarachi kelasi yilning yanvar va fevrali uchun hozir $1,000 to\'laydi.',
      },
    },
    {
      term: { en: 'In arrears', ru: 'По факту (в конце периода)', uz: 'Keyin (davr oxirida)' },
      definition: {
        en: 'Paid after the period it relates to.',
        ru: 'Оплачивается после периода, к которому относится.',
        uz: 'Tegishli davrdan keyin to\'lanadi.',
      },
      example: {
        en: 'An electricity bill for October to December that arrives in January.',
        ru: 'Счёт за электричество за октябрь-декабрь, пришедший в январе.',
        uz: 'Yanvarda kelgan oktyabr-dekabr elektr hisobi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter09;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter09.id] = chapter09;
