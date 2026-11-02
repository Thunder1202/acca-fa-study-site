'use strict';

const chapter04 = {
  id: 'chapter-04',
  titles: {
    en: 'Recording transactions and events',
    ru: 'Учёт операций и событий',
    uz: 'Operatsiya va voqealarni qayd etish',
  },
  objectives: [
    { en: 'Record cash and credit transactions', ru: 'Отражать операции за наличные и в кредит', uz: 'Naqd va nasiya operatsiyalarini qayd etish' },
    { en: 'Record petty cash under the imprest system', ru: 'Отражать мелкую кассу по системе имприст', uz: 'Kichik kassani imprest tizimida qayd etish' },
    { en: 'Record sales, purchases and returns', ru: 'Отражать продажи, закупки и возвраты', uz: 'Sotuv, xarid va qaytarishlarni qayd etish' },
    { en: 'Calculate and record sales tax', ru: 'Рассчитывать и отражать налог с продаж', uz: 'Sotuv solig\'ini hisoblash va qayd etish' },
    { en: 'Record trade and settlement discounts', ru: 'Отражать торговые скидки и скидки за раннюю оплату', uz: 'Savdo va muddatidan oldingi to\'lov chegirmalarini qayd etish' },
  ],
  sections: [
    {
      key: {
        en: `- Cash transaction: paid at once, including by cheque or immediate transfer.
- Credit transaction: goods change hands now, payment comes later.
- Money in: Dr Cash at bank. Money out: Cr Cash at bank.
- Bank reports are source documents. Each item is coded to its ledger account.
- Receipts and payments for credit customers and suppliers also update their own accounts.
- The FA exam assumes the bank account is not integrated into the system.`,
        ru: `- Операция за наличные: оплата сразу, в том числе чеком или мгновенным переводом.
- Операция в кредит: товар передан сейчас, оплата позже.
- Деньги пришли: Дт Банк. Деньги ушли: Кт Банк.
- Банковские отчёты — первичные документы. Каждая позиция кодируется на свой счёт.
- Платежи покупателей и поставщикам обновляют и их собственные счета.
- На экзамене FA считается, что банковский счёт не интегрирован в систему.`,
        uz: `- Naqd operatsiya: darhol to'lanadi, chek yoki tezkor o'tkazma bilan ham.
- Nasiya operatsiya: tovar hozir beriladi, to'lov keyin.
- Pul keldi: Dt Bank. Pul ketdi: Kt Bank.
- Bank hisobotlari birlamchi hujjat. Har bir summa o'z hisobiga kodlanadi.
- Mijoz va yetkazib beruvchilar to'lovlari ularning shaxsiy hisoblarini ham yangilaydi.
- FA imtihonida bank hisobi tizimga integratsiyalanmagan deb olinadi.`,
      },
      exam: {
        en: `- A computerised general ledger will not accept unequal debits and credits for a transaction.
- The journal is not an integral part of the general ledger.
- Equity accounts normally have credit balances.
- Irrecoverable debts relate to receivables, so they never appear in the payables account.
- An irrecoverable debt written off: Dr Irrecoverable debts, Cr Receivables.
- Items on the bank statement that are not yet in the ledger, such as bank interest, need adjusting. A bank error is reported to the bank, not recorded.`,
        ru: `- Компьютерная главная книга не примет неравные дебет и кредит по операции.
- Журнал не является неотъемлемой частью главной книги.
- Счета капитала обычно имеют кредитовый остаток.
- Безнадёжные долги относятся к дебиторам, поэтому их нет на счёте кредиторов.
- Списание безнадёжного долга: Дт Безнадёжные долги, Кт Дебиторы.
- Статьи выписки банка, ещё не внесённые в книгу, например проценты, нужно отразить. Об ошибке банка сообщают банку, а не записывают.`,
        uz: `- Kompyuterli bosh kitob operatsiya uchun teng bo'lmagan debet va kreditni qabul qilmaydi.
- Jurnal bosh kitobning ajralmas qismi emas.
- Kapital hisoblari odatda kredit qoldiqqa ega.
- Undirib bo'lmaydigan qarzlar debitorlarga tegishli, shuning uchun kreditorlar hisobida bo'lmaydi.
- Undirib bo'lmaydigan qarzni yozib yuborish: Dt Undirib bo'lmaydigan qarzlar, Kt Debitorlar.
- Bank ko'chirmasidagi, hali kitobga kirmagan summalar, masalan foiz, qayd etiladi. Bank xatosi yozilmaydi, bankka xabar qilinadi.`,
      },
      heading: {
        en: 'Cash and credit transactions',
        ru: 'Операции за наличные и в кредит',
        uz: 'Naqd va nasiya operatsiyalari',
      },
      body: {
        en: `A cash transaction is settled at the moment of sale or purchase. A sale paid by cheque or instant transfer still counts as a cash transaction, because the money changes hands right then. A credit transaction is one where the goods or services move now and the money follows later. What customers owe is a receivable, an asset. What the business owes suppliers is a payable, a liability.

This chapter uses one cash at bank account for simplicity. Money received is a debit to it, because an asset is rising. Money paid out is a credit, because an asset is falling.

The bank report for a day lists each receipt and payment. The business analyses each line under a heading such as payables, wages, rent or petty cash. The totals are then posted: for payments, a debit to each heading and one credit to cash at bank; for receipts, one debit to cash at bank and a credit to each heading.

Lines for credit customers and suppliers also carry an individual account code, so that each person's memorandum account is updated at the same time as the general ledger.`,
        ru: `Операция за наличные расчитывается в момент продажи или покупки. Продажа с оплатой чеком или мгновенным переводом тоже считается наличной, потому что деньги передаются сразу. В операции в кредит товар или услуга передаются сейчас, а деньги позже. Долг покупателей — это дебиторская задолженность, актив. Долг бизнеса поставщикам — кредиторская, обязательство.

Для простоты в этой главе один счёт банка. Полученные деньги — его дебет, так как актив растёт. Выплаченные — кредит, так как актив падает.

Банковский отчёт за день перечисляет каждое поступление и выплату. Бизнес относит каждую строку к статье: кредиторы, зарплата, аренда, мелкая касса. Затем итоги проводятся: по выплатам — дебет каждой статьи и один кредит банка; по поступлениям — один дебет банка и кредит каждой статьи.

Строки покупателей и поставщиков имеют также индивидуальный код, чтобы вспомогательный счёт каждого обновлялся вместе с главной книгой.`,
        uz: `Naqd operatsiya sotish yoki sotib olish paytida yopiladi. Chek yoki tezkor o'tkazma bilan to'langan sotuv ham naqd hisoblanadi, chunki pul darhol o'tadi. Nasiya operatsiyasida tovar yoki xizmat hozir, pul esa keyin keladi. Mijozlar qarzi debitorlik, ya'ni aktiv. Biznesning yetkazib beruvchilarga qarzi kreditorlik, ya'ni majburiyat.

Bu bobda soddalik uchun bitta bank hisobi ishlatiladi. Kelgan pul uning debeti, chunki aktiv oshadi. Chiqqan pul kredit, chunki aktiv kamayadi.

Kunlik bank hisoboti har bir tushum va to'lovni sanab beradi. Biznes har bir qatorni kreditorlar, ish haqi, ijara yoki kichik kassa kabi moddaga ajratadi. So'ng jamlar yoziladi: to'lovlar uchun har bir moddaga debet va bankka bitta kredit; tushumlar uchun bankka bitta debet va har bir moddaga kredit.

Mijoz va yetkazib beruvchilar qatorlarida shaxsiy hisob kodi ham bor, shunda har birining yordamchi hisobi bosh kitob bilan birga yangilanadi.`,
      },
      example: {
        en: `Monday's bank report for Madina's Mart shows $700 paid to a supplier, $400 of wages and $900 of rent. She posts Dr Payables $700, Dr Wages $400, Dr Rent $900 and Cr Cash at bank $2,000, and enters the $700 on that supplier's own account. The same day a cafe pays $350 and $600 of card takings arrive. She posts Dr Cash at bank $950, Cr Receivables $350, Cr Sales $600.`,
        ru: `Банковский отчёт Madina's Mart за понедельник показывает $700 поставщику, $400 зарплаты и $900 аренды. Она проводит Дт Кредиторы $700, Дт Зарплата $400, Дт Аренда $900 и Кт Банк $2,000 и записывает $700 на счёт этого поставщика. В тот же день кафе платит $350 и приходят $600 выручки по картам. Она проводит Дт Банк $950, Кт Дебиторы $350, Кт Продажи $600.`,
        uz: `Madina's Mart dushanba bank hisobotida yetkazib beruvchiga $700, ish haqi $400 va ijara $900 ko'rsatilgan. U Dt Kreditorlar $700, Dt Ish haqi $400, Dt Ijara $900 va Kt Bank $2,000 yozadi va $700 ni shu yetkazib beruvchi hisobiga kiritadi. Shu kuni kafe $350 to'laydi va kartadan $600 tushum keladi. U Dt Bank $950, Kt Debitorlar $350, Kt Sotuv $600 yozadi.`,
      },
    },
    {
      key: {
        en: `- Petty cash: small sums of notes and coins for small expenses.
- Imprest system: the exact amount spent is topped up at intervals to restore a fixed float.
- Cash in hand + vouchers = the float, at any time.
- Top-up: Dr Petty cash, Cr Cash at bank.
- Spending: Dr each expense, Cr Petty cash.`,
        ru: `- Мелкая касса: небольшие суммы наличных на мелкие расходы.
- Система имприст: потраченная сумма пополняется, чтобы вернуть постоянный лимит.
- Наличные + ваучеры = лимит, в любой момент.
- Пополнение: Дт Мелкая касса, Кт Банк.
- Расходы: Дт каждый расход, Кт Мелкая касса.`,
        uz: `- Kichik kassa: mayda xarajatlar uchun oz miqdordagi naqd pul.
- Imprest tizimi: sarflangan summa to'ldirilib, doimiy summa tiklanadi.
- Naqd pul + vaucherlar = doimiy summa, istalgan paytda.
- To'ldirish: Dt Kichik kassa, Kt Bank.
- Sarflar: Dt har bir xarajat, Kt Kichik kassa.`,
      },
      exam: {
        en: `- Imprest does not mean a spending limit, equal top-ups or authorised spending. It means topping up the exact amount spent.
- Finding the float: cash in hand + vouchers for money paid out - vouchers for money received. A loan to staff counts as paid out.
- Finding the spending: opening float + money received - money banked or cashed for staff - closing float. Cheques drawn for petty cash count as money received.
- If the float is raised, the closing float is the new, higher figure.
- The top-up equals the money paid out less any money received into petty cash.`,
        ru: `- Имприст — это не лимит трат, не равные пополнения и не утверждение расходов. Это пополнение на точную потраченную сумму.
- Найти лимит: наличные + ваучеры на выплаты - ваучеры на поступления. Заём сотруднику считается выплатой.
- Найти расходы: лимит на начало + поступления - деньги, обналиченные для сотрудников - лимит на конец. Чеки на мелкую кассу считаются поступлениями.
- Если лимит повышен, лимит на конец — новая, большая сумма.
- Пополнение равно выплатам минус поступления в мелкую кассу.`,
        uz: `- Imprest sarf chegarasi, teng to'ldirish yoki tasdiqlangan sarf emas. Bu aniq sarflangan summani to'ldirish.
- Doimiy summani topish: naqd pul + chiqim vaucherlari - kirim vaucherlari. Xodimga qarz chiqim hisoblanadi.
- Sarfni topish: boshlang'ich summa + kirimlar - xodim uchun naqdlashtirilgan pul - yakuniy summa. Kichik kassa uchun yozilgan cheklar kirim hisoblanadi.
- Doimiy summa oshirilsa, yakuniy summa yangi, kattaroq raqam.
- To'ldirish chiqimlar minus kichik kassaga kirimlarga teng.`,
      },
      heading: {
        en: 'Petty cash',
        ru: 'Мелкая касса',
        uz: 'Kichik kassa',
      },
      body: {
        en: `Petty cash is a small amount of notes and coins kept to repay small out-of-pocket costs, such as cleaning materials, refreshments or a taxi fare to a meeting. The general ledger has a petty cash account that works like any other, and the cashier keeps a simple record with payments analysed under standard headings.

An amount is drawn from the bank to start the float. Each payment is backed by a voucher. At any moment the notes and coins, together with the vouchers, should add up to the float.

At the end of the period the float is topped up from the bank by the amount needed to bring it back to its normal level. This is the imprest method. It makes shortages easy to spot, because cash and vouchers must always agree with the fixed amount.

Two postings are needed. The money coming from the bank is Dr Petty cash, Cr Cash at bank. The money spent is a debit to each expense and a credit to petty cash.`,
        ru: `Мелкая касса — небольшая сумма наличных для возмещения мелких расходов: моющие средства, напитки, такси на встречу. В главной книге есть счёт мелкой кассы, работающий как любой другой, а кассир ведёт простую запись с разбивкой выплат по стандартным статьям.

Со счёта банка снимается сумма для начального лимита. Каждая выплата подтверждается ваучером. В любой момент наличные вместе с ваучерами должны давать в сумме лимит.

В конце периода лимит пополняется из банка на сумму, нужную для возврата к обычному уровню. Это метод имприст. Он помогает легко заметить недостачу, так как наличные и ваучеры всегда должны сходиться с постоянной суммой.

Нужны две проводки. Деньги из банка: Дт Мелкая касса, Кт Банк. Потраченные деньги: дебет каждого расхода и кредит мелкой кассы.`,
        uz: `Kichik kassa — tozalash vositalari, ichimliklar yoki uchrashuvga taksi kabi mayda xarajatlarni qoplash uchun saqlanadigan oz miqdordagi naqd pul. Bosh kitobda boshqalar kabi ishlaydigan kichik kassa hisobi bor, kassir esa to'lovlarni standart moddalarga ajratib oddiy yozuv yuritadi.

Boshlang'ich doimiy summa uchun bankdan pul olinadi. Har bir to'lov vaucher bilan tasdiqlanadi. Istalgan paytda naqd pul va vaucherlar birga doimiy summaga teng bo'lishi kerak.

Davr oxirida doimiy summa odatdagi darajaga qaytishi uchun kerakli miqdorda bankdan to'ldiriladi. Bu imprest usuli. U kamomadni oson topishga yordam beradi, chunki naqd pul va vaucherlar doim doimiy summaga mos kelishi kerak.

Ikki yozuv kerak. Bankdan kelgan pul: Dt Kichik kassa, Kt Bank. Sarflangan pul: har bir xarajatga debet va kichik kassaga kredit.`,
      },
      example: {
        en: `Madina keeps a petty cash float of $100. This month's vouchers are tea $14, stamps $11, a taxi $6 and cleaning materials $19, a total of $50. She counts $50 of cash, which agrees: $50 + $50 = $100. She posts a debit to each expense and Cr Petty cash $50. Then she tops up with Dr Petty cash $50, Cr Cash at bank $50, and the float is back to $100.`,
        ru: `Мадина держит лимит мелкой кассы $100. Ваучеры за месяц: чай $14, марки $11, такси $6 и моющие средства $19, всего $50. Она считает $50 наличными, это сходится: $50 + $50 = $100. Она проводит дебет каждого расхода и Кт Мелкая касса $50. Затем пополняет: Дт Мелкая касса $50, Кт Банк $50, и лимит снова $100.`,
        uz: `Madina $100 doimiy kichik kassa saqlaydi. Bu oy vaucherlari: choy $14, marka $11, taksi $6 va tozalash vositalari $19, jami $50. U $50 naqd sanaydi, bu mos keladi: $50 + $50 = $100. U har bir xarajatga debet va Kt Kichik kassa $50 yozadi. So'ng to'ldiradi: Dt Kichik kassa $50, Kt Bank $50, va doimiy summa yana $100.`,
      },
    },
    {
      key: {
        en: `- Credit sale: Dr Receivables, Cr Sales. Cash sale: Dr Cash at bank, Cr Sales.
- Credit purchase: Dr Purchases, Cr Payables. Cash purchase: Dr Purchases, Cr Cash at bank.
- Sales returns (returns inwards), credit: Dr Sales returns, Cr Receivables.
- Purchase returns (returns outwards), credit: Dr Payables, Cr Purchase returns.
- If the original deal was for cash, use Cash at bank in place of receivables or payables.
- Find a missing figure by balancing the receivables or payables T-account.`,
        ru: `- Продажа в кредит: Дт Дебиторы, Кт Продажи. За наличные: Дт Банк, Кт Продажи.
- Закупка в кредит: Дт Закупки, Кт Кредиторы. За наличные: Дт Закупки, Кт Банк.
- Возврат покупателя (returns inwards), кредит: Дт Возвраты продаж, Кт Дебиторы.
- Возврат поставщику (returns outwards), кредит: Дт Кредиторы, Кт Возвраты закупок.
- Если сделка была за наличные, вместо дебиторов или кредиторов используйте Банк.
- Недостающую сумму находят, балансируя Т-счёт дебиторов или кредиторов.`,
        uz: `- Nasiya sotuv: Dt Debitorlar, Kt Sotuv. Naqd sotuv: Dt Bank, Kt Sotuv.
- Nasiya xarid: Dt Xaridlar, Kt Kreditorlar. Naqd xarid: Dt Xaridlar, Kt Bank.
- Sotuv qaytarishi (returns inwards), nasiya: Dt Sotuv qaytarishlari, Kt Debitorlar.
- Xarid qaytarishi (returns outwards), nasiya: Dt Kreditorlar, Kt Xarid qaytarishlari.
- Asl bitim naqd bo'lsa, debitorlar yoki kreditorlar o'rniga Bankni ishlating.
- Yetishmagan summani debitorlar yoki kreditorlar T-hisobini balanslab toping.`,
      },
      exam: {
        en: `- Receivables, debit side: opening balance, credit sales, returned unpaid cheques.
- Receivables, credit side: cash received, sales returns, irrecoverable debts, contras, closing balance.
- Payables, debit side: cash paid, discounts received, purchase returns, contras, closing balance.
- Payables, credit side: opening balance, credit purchases. Cash purchases never go through payables.
- The specific allowance for receivables does not affect the receivables account.
- Take cash sales out of total receipts first. Revenue is credit sales plus cash sales.
- For cash sales from a till: sales = bankings + cash spent from the till + closing till - opening till - non-sales receipts.
- A debit balance on a supplier's account means the supplier owes you, for example after paying an invoice twice.
- When a supplier refunds an overpayment: Dr Bank, Cr Payables.
- Balance c/d sits on the smaller side, so a debit balance has its c/d on the credit side. The b/d shows the true balance.`,
        ru: `- Дебиторы, дебет: остаток на начало, продажи в кредит, возвращённые чеки.
- Дебиторы, кредит: полученные деньги, возвраты, безнадёжные долги, взаимозачёты, остаток на конец.
- Кредиторы, дебет: уплаченные деньги, полученные скидки, возвраты закупок, взаимозачёты, остаток на конец.
- Кредиторы, кредит: остаток на начало, закупки в кредит. Закупки за наличные никогда не идут через кредиторов.
- Конкретный резерв по дебиторам не влияет на счёт дебиторов.
- Сначала вычтите продажи за наличные из всех поступлений. Выручка — продажи в кредит плюс за наличные.
- Продажи из кассы: продажи = сданное в банк + потраченное из кассы + касса на конец - касса на начало - поступления не от продаж.
- Дебетовый остаток на счёте поставщика значит, что он должен вам, например счёт оплачен дважды.
- Когда поставщик возвращает переплату: Дт Банк, Кт Кредиторы.
- Balance c/d стоит на меньшей стороне, поэтому при дебетовом остатке c/d находится в кредите. Настоящий остаток показывает b/d.`,
        uz: `- Debitorlar, debet: boshlang'ich qoldiq, nasiya sotuv, qaytgan to'lanmagan cheklar.
- Debitorlar, kredit: olingan pul, qaytarishlar, undirib bo'lmaydigan qarzlar, o'zaro hisob-kitob, yakuniy qoldiq.
- Kreditorlar, debet: to'langan pul, olingan chegirmalar, xarid qaytarishlari, o'zaro hisob-kitob, yakuniy qoldiq.
- Kreditorlar, kredit: boshlang'ich qoldiq, nasiya xarid. Naqd xarid hech qachon kreditorlardan o'tmaydi.
- Debitorlar bo'yicha aniq rezerv debitorlar hisobiga ta'sir qilmaydi.
- Avval naqd sotuvni jami tushumdan ayiring. Tushum — nasiya plus naqd sotuv.
- Kassadan naqd sotuv: sotuv = bankka topshirilgan + kassadan sarflangan + yakuniy kassa - boshlang'ich kassa - sotuvdan bo'lmagan tushumlar.
- Yetkazib beruvchi hisobidagi debet qoldiq u sizga qarzdor degani, masalan hisob-faktura ikki marta to'langan.
- Yetkazib beruvchi ortiqcha to'lovni qaytarganda: Dt Bank, Kt Kreditorlar.
- Balance c/d kichik tomonda turadi, shuning uchun debet qoldiqda c/d kredit tomonda. Haqiqiy qoldiqni b/d ko'rsatadi.`,
      },
      heading: {
        en: 'Sales, purchases and returns',
        ru: 'Продажи, закупки и возвраты',
        uz: 'Sotuv, xarid va qaytarishlar',
      },
      body: {
        en: `The entries for sales and purchases depend on whether the deal was for cash or on credit. A sale always credits sales, and a purchase always debits purchases. The other side shows how it is settled: cash at bank straight away, or receivables or payables until the money moves.

Goods sometimes come back. Customers return unwanted goods, and a business returns damaged or wrong goods to its suppliers. Each kind of return gets its own account rather than reducing sales or purchases directly.

Sales returns are also called returns inwards. They behave like negative sales, so the account is debited. If the sale was on credit, the receivable falls. If it was a cash sale, cash at bank falls because the customer gets a refund.

Purchase returns are also called returns outwards. They behave like negative purchases, so the account is credited. If the purchase was on credit, the payable falls. If it was for cash, the supplier refunds the money, so cash at bank rises.

The same logic works backwards in questions that hide a figure. Write out the receivables or payables account with everything you know. The missing figure is what makes both sides agree.`,
        ru: `Проводки по продажам и закупкам зависят от того, была сделка за наличные или в кредит. Продажа всегда кредитует продажи, закупка всегда дебетует закупки. Другая сторона показывает расчёт: банк сразу или дебиторы и кредиторы, пока деньги не перейдут.

Иногда товар возвращается. Покупатели возвращают ненужный товар, а бизнес возвращает поставщикам повреждённый или неверный. Для каждого вида возврата есть свой счёт, а продажи и закупки напрямую не уменьшаются.

Возвраты продаж называют также returns inwards. Они ведут себя как отрицательные продажи, поэтому счёт дебетуется. Если продажа была в кредит, падают дебиторы. Если за наличные, падает банк, потому что покупателю возвращают деньги.

Возвраты закупок называют также returns outwards. Они ведут себя как отрицательные закупки, поэтому счёт кредитуется. Если закупка была в кредит, падают кредиторы. Если за наличные, поставщик возвращает деньги, и банк растёт.

Та же логика работает в обратную сторону, когда в задаче скрыта цифра. Запишите счёт дебиторов или кредиторов со всем, что известно. Недостающая сумма — та, что уравнивает стороны.`,
        uz: `Sotuv va xarid yozuvlari bitim naqdmi yoki nasiyami, shunga bog'liq. Sotuv doim sotuvni kreditlaydi, xarid doim xaridlarni debetlaydi. Ikkinchi tomon hisob-kitobni ko'rsatadi: darhol bank yoki pul o'tguncha debitorlar yo kreditorlar.

Ba'zan tovar qaytadi. Mijozlar keraksiz tovarni qaytaradi, biznes esa shikastlangan yoki noto'g'ri tovarni yetkazib beruvchiga qaytaradi. Har bir qaytarish turi uchun o'z hisobi bor, sotuv va xaridlar to'g'ridan-to'g'ri kamaytirilmaydi.

Sotuv qaytarishlari returns inwards deb ham ataladi. Ular manfiy sotuvdek ishlaydi, shuning uchun hisob debetlanadi. Sotuv nasiya bo'lsa, debitorlar kamayadi. Naqd bo'lsa, bank kamayadi, chunki mijozga pul qaytariladi.

Xarid qaytarishlari returns outwards deb ham ataladi. Ular manfiy xariddek ishlaydi, shuning uchun hisob kreditlanadi. Xarid nasiya bo'lsa, kreditorlar kamayadi. Naqd bo'lsa, yetkazib beruvchi pulni qaytaradi va bank oshadi.

Xuddi shu mantiq yashirilgan raqamli masalalarda teskari ishlaydi. Debitorlar yoki kreditorlar hisobini ma'lum narsalar bilan yozing. Yetishmagan summa ikki tomonni tenglashtiradigan raqamdir.`,
      },
      example: {
        en: `A customer brings back a $40 lamp bought for cash: Dr Sales returns $40, Cr Cash at bank $40. Madina sends $120 of cracked mugs back to a credit supplier: Dr Payables $120, Cr Purchase returns $120. Her credit customers owed $1,400 at the start of the month. She sold them $9,000 of goods, received $8,200 and accepted $300 of returns. Receivables at the month end are $1,400 + $9,000 - $8,200 - $300 = $1,900.`,
        ru: `Покупатель приносит лампу за $40, купленную за наличные: Дт Возвраты продаж $40, Кт Банк $40. Мадина отправляет кредитному поставщику треснувшие кружки на $120: Дт Кредиторы $120, Кт Возвраты закупок $120. Покупатели в кредит должны были $1,400 на начало месяца. Она продала им на $9,000, получила $8,200 и приняла возвраты на $300. Дебиторы на конец месяца: $1,400 + $9,000 - $8,200 - $300 = $1,900.`,
        uz: `Mijoz naqdga olingan $40 lik chiroqni qaytaradi: Dt Sotuv qaytarishlari $40, Kt Bank $40. Madina nasiya yetkazib beruvchiga $120 lik yorilgan krujkalarni qaytaradi: Dt Kreditorlar $120, Kt Xarid qaytarishlari $120. Nasiya mijozlari oy boshida $1,400 qarz edi. U ularga $9,000 sotdi, $8,200 oldi va $300 qaytarishni qabul qildi. Oy oxiridagi debitorlar: $1,400 + $9,000 - $8,200 - $300 = $1,900.`,
      },
    },
    {
      key: {
        en: `- Sales tax is an indirect tax paid by the final consumer. Businesses collect it.
- Output tax is on sales. Input tax is on purchases.
- Pay output less input to the tax authority. If input is higher, get a refund.
- Net price + tax = gross price. At 20%, net is 100% and gross is 120%.
- Tax from a gross figure: gross x 20/120. From a net figure: net x 20%.
- The rate is always given in the question.`,
        ru: `- Налог с продаж — косвенный, его платит конечный потребитель, а бизнес собирает.
- Выходной налог — на продажи. Входной — на закупки.
- Платите выходной минус входной. Если входной больше, получите возврат.
- Цена без налога + налог = цена с налогом. При 20% без налога 100%, с налогом 120%.
- Налог из суммы с налогом: сумма x 20/120. Из суммы без налога: сумма x 20%.
- Ставка всегда дана в задаче.`,
        uz: `- Sotuv solig'i bilvosita soliq, uni oxirgi iste'molchi to'laydi, biznes yig'adi.
- Chiqish solig'i sotuvda. Kirish solig'i xaridda.
- Chiqish minus kirishni to'lang. Kirish yuqori bo'lsa, qaytarib olasiz.
- Soliqsiz narx + soliq = soliqli narx. 20% da soliqsiz 100%, soliqli 120%.
- Soliqli summadan: summa x 20/120. Soliqsiz summadan: summa x 20%.
- Stavka doim masalada beriladi.`,
      },
      exam: {
        en: `- Sales tax is charged on the price after trade discount. List $800 less 5% at 20%: tax is 20% x $760.
- If input tax exceeds output tax, the difference is recoverable, not payable.
- Sales tax cannot be recovered on some items, such as client entertaining and cars.
- Common rates are 20%, 17.5%, 15% and 10%. The same method works for any rate.
- Check whether each figure in a question is inclusive or exclusive of tax before calculating.`,
        ru: `- Налог с продаж начисляется на цену после торговой скидки. Прайс $800 минус 5% при 20%: налог 20% x $760.
- Если входной налог больше выходного, разница возмещается, а не платится.
- Налог нельзя вернуть по некоторым статьям, например представительским расходам и автомобилям.
- Обычные ставки: 20%, 17.5%, 15% и 10%. Метод один для любой ставки.
- Перед расчётом проверьте, включён ли налог в каждую цифру задачи.`,
        uz: `- Sotuv solig'i savdo chegirmasidan keyingi narxga hisoblanadi. Ro'yxat $800 minus 5%, 20% da: soliq 20% x $760.
- Kirish solig'i chiqishdan ko'p bo'lsa, farq to'lanmaydi, qaytariladi.
- Ba'zi moddalarda, masalan mijozlarni mehmon qilish va mashinalarda soliq qaytarilmaydi.
- Odatiy stavkalar 20%, 17.5%, 15% va 10%. Har qanday stavka uchun usul bir xil.
- Hisoblashdan oldin har bir raqam soliqni o'z ichiga oladimi, tekshiring.`,
      },
      heading: {
        en: 'Sales tax: how it works',
        ru: 'Налог с продаж: как он работает',
        uz: 'Sotuv solig\'i: qanday ishlaydi',
      },
      body: {
        en: `Sales tax falls on the final consumer. A registered business is in effect a collection agent for the tax authority. It adds tax to its sales, known as output tax, and pays tax on what it buys, known as input tax. It hands over the difference. The tax is therefore neither income nor an expense for the business, and sales and purchases are reported without it. The tax may also be called value added tax (VAT) or goods and services tax.

Prices follow a simple structure. The net price is 100%, and the tax is added on top. At 20% the gross price is 120%, at 17.5% it is 117.5%, at 15% it is 115% and at 10% it is 110%.

The net selling price is what the business recognises as sales. The gross selling price is what the customer is charged. The difference belongs to the tax authority.

To find the tax in a gross price, use the tax rate over the gross percentage. At 17.5% that is 17.5/117.5 of the gross price. To find the tax on a net price, multiply by the rate.`,
        ru: `Налог с продаж ложится на конечного потребителя. Зарегистрированный бизнес по сути собирает его для налогового органа. Он добавляет налог к продажам (выходной налог) и платит налог на покупки (входной налог). Разницу он передаёт. Поэтому налог не доход и не расход бизнеса, и продажи с закупками показываются без него. Его могут называть налогом на добавленную стоимость (НДС).

Цены строятся просто. Цена без налога — 100%, налог добавляется сверху. При 20% цена с налогом 120%, при 17.5% — 117.5%, при 15% — 115%, при 10% — 110%.

Цена продажи без налога — это то, что бизнес признаёт продажами. Цена с налогом — то, что платит покупатель. Разница принадлежит налоговому органу.

Чтобы найти налог в цене с налогом, возьмите ставку к проценту цены с налогом. При 17.5% это 17.5/117.5 цены. Чтобы найти налог на цену без налога, умножьте на ставку.`,
        uz: `Sotuv solig'i oxirgi iste'molchiga tushadi. Ro'yxatdan o'tgan biznes aslida soliq organi uchun yig'uvchi. U sotuvga soliq qo'shadi (chiqish solig'i) va xarididan soliq to'laydi (kirish solig'i). Farqni topshiradi. Shuning uchun soliq biznes uchun daromad ham, xarajat ham emas, sotuv va xaridlar usiz ko'rsatiladi. Uni qo'shilgan qiymat solig'i (QQS) deb ham atashadi.

Narxlar oddiy tuzilgan. Soliqsiz narx 100%, soliq ustiga qo'shiladi. 20% da soliqli narx 120%, 17.5% da 117.5%, 15% da 115%, 10% da 110%.

Soliqsiz sotuv narxi biznes sotuv deb tan oladigan summa. Soliqli narx mijozdan olinadigan summa. Farq soliq organiga tegishli.

Soliqli narxdagi soliqni topish uchun stavkani soliqli foizga bo'ling. 17.5% da bu narxning 17.5/117.5 qismi. Soliqsiz narxdagi soliqni topish uchun stavkaga ko'paytiring.`,
      },
      example: {
        en: `Sales tax in Madina's country is 20%. She sells a rice cooker for $500 before tax. The tax is $500 x 20% = $100, so the customer pays $600. She buys goods from a supplier for $360 including tax. The tax in that price is $360 x 20/120 = $60, so the goods cost her $300. She owes the tax authority $100 - $60 = $40. Her profit is unaffected by the tax.`,
        ru: `Налог с продаж в стране Мадины 20%. Она продаёт рисоварку за $500 без налога. Налог: $500 x 20% = $100, покупатель платит $600. Она покупает товар за $360 с налогом. Налог в этой цене: $360 x 20/120 = $60, значит, товар стоит ей $300. Она должна налоговому органу $100 - $60 = $40. На её прибыль налог не влияет.`,
        uz: `Madina mamlakatida sotuv solig'i 20%. U guruch pishirgichni soliqsiz $500 ga sotadi. Soliq: $500 x 20% = $100, mijoz $600 to'laydi. U yetkazib beruvchidan soliq bilan $360 ga tovar oladi. Bu narxdagi soliq: $360 x 20/120 = $60, demak tovar unga $300 ga tushadi. U soliq organiga $100 - $60 = $40 qarz. Soliq uning foydasiga ta'sir qilmaydi.`,
      },
    },
    {
      key: {
        en: `- Purchase: Dr Purchases (net), Dr Sales tax, Cr Payables or Bank (gross).
- Sale: Dr Receivables or Bank (gross), Cr Sales (net), Cr Sales tax.
- Sales and purchases are net. Receivables and payables are gross.
- Paying the authority: Dr Sales tax, Cr Bank. A refund: Dr Bank, Cr Sales tax.
- A credit balance is a liability. A debit balance is an asset.
- Returns reverse the tax too.`,
        ru: `- Закупка: Дт Закупки (без налога), Дт Налог, Кт Кредиторы или Банк (с налогом).
- Продажа: Дт Дебиторы или Банк (с налогом), Кт Продажи (без налога), Кт Налог.
- Продажи и закупки без налога. Дебиторы и кредиторы с налогом.
- Уплата органу: Дт Налог, Кт Банк. Возврат: Дт Банк, Кт Налог.
- Кредитовый остаток — обязательство. Дебетовый — актив.
- При возвратах налог тоже сторнируется.`,
        uz: `- Xarid: Dt Xaridlar (soliqsiz), Dt Soliq, Kt Kreditorlar yoki Bank (soliqli).
- Sotuv: Dt Debitorlar yoki Bank (soliqli), Kt Sotuv (soliqsiz), Kt Soliq.
- Sotuv va xaridlar soliqsiz. Debitorlar va kreditorlar soliqli.
- Organga to'lov: Dt Soliq, Kt Bank. Qaytarish: Dt Bank, Kt Soliq.
- Kredit qoldiq majburiyat. Debet qoldiq aktiv.
- Qaytarishlarda soliq ham teskari qilinadi.`,
      },
      exam: {
        en: `- A sales return with tax: Dr Returns inwards (net), Dr Sales tax, Cr Receivables (gross).
- A non-current asset is recorded net as well: Dr Asset (net), Dr Sales tax, Cr Payables (gross).
- Sales tax account: credit with opening amount owed and tax on sales; debit with tax on purchases and money paid to the authority.
- Tax is recorded when the invoice is recorded. Paying a supplier later has no effect on the sales tax account.
- The revenue account is credited with sales excluding tax.`,
        ru: `- Возврат продажи с налогом: Дт Возвраты (без налога), Дт Налог, Кт Дебиторы (с налогом).
- Внеоборотный актив тоже записывается без налога: Дт Актив (без налога), Дт Налог, Кт Кредиторы (с налогом).
- Счёт налога: кредит — долг на начало и налог с продаж; дебет — налог на закупки и уплата органу.
- Налог записывается вместе со счётом-фактурой. Последующая оплата поставщику на счёт налога не влияет.
- Счёт выручки кредитуется продажами без налога.`,
        uz: `- Soliqli sotuv qaytarishi: Dt Qaytarishlar (soliqsiz), Dt Soliq, Kt Debitorlar (soliqli).
- Uzoq muddatli aktiv ham soliqsiz yoziladi: Dt Aktiv (soliqsiz), Dt Soliq, Kt Kreditorlar (soliqli).
- Soliq hisobi: kredit — boshlang'ich qarz va sotuv solig'i; debet — xarid solig'i va organga to'lov.
- Soliq hisob-faktura bilan yoziladi. Yetkazib beruvchiga keyingi to'lov soliq hisobiga ta'sir qilmaydi.
- Tushum hisobi soliqsiz sotuv bilan kreditlanadi.`,
      },
      heading: {
        en: 'Sales tax: the entries',
        ru: 'Налог с продаж: проводки',
        uz: 'Sotuv solig\'i: yozuvlar',
      },
      body: {
        en: `A sales tax ledger account collects the tax. It can be a payable or a receivable, depending on which way the balance falls.

On a purchase, the net cost goes to purchases, because that is the true cost. The tax goes to the sales tax account, because it can be recovered. The full gross amount goes to payables, or to cash at bank if paid at once, because that is what the supplier receives.

On a sale, the gross amount goes to receivables or cash at bank, because that is what the customer pays. The net amount goes to sales. The tax goes to the sales tax account, because it is owed to the authority.

If the business charges more tax on sales than it pays on purchases, there is a credit balance, which is a liability. Paying it is Dr Sales tax, Cr Cash at bank. If it has paid more, for example after buying expensive equipment, there is a debit balance, which is an asset. The refund is Dr Cash at bank, Cr Sales tax.`,
        ru: `Счёт налога с продаж собирает налог. Это может быть кредиторская или дебиторская задолженность, в зависимости от остатка.

При закупке сумма без налога идёт в закупки, это настоящая стоимость. Налог идёт на счёт налога, потому что возмещается. Полная сумма с налогом идёт в кредиторы или в банк при немедленной оплате, потому что её получает поставщик.

При продаже сумма с налогом идёт в дебиторы или банк, потому что её платит покупатель. Сумма без налога идёт в продажи. Налог идёт на счёт налога, потому что он причитается органу.

Если бизнес начисляет на продажи больше налога, чем платит на закупках, образуется кредитовый остаток, то есть обязательство. Уплата: Дт Налог, Кт Банк. Если заплачено больше, например после покупки дорогого оборудования, образуется дебетовый остаток, то есть актив. Возврат: Дт Банк, Кт Налог.`,
        uz: `Sotuv solig'i hisobi soliqni to'playdi. U qoldiqqa qarab kreditorlik yoki debitorlik bo'lishi mumkin.

Xaridda soliqsiz summa xaridlarga yoziladi, chunki bu haqiqiy qiymat. Soliq soliq hisobiga yoziladi, chunki u qaytariladi. To'liq soliqli summa kreditorlarga yoki darhol to'lansa bankka yoziladi, chunki yetkazib beruvchi shuni oladi.

Sotuvda soliqli summa debitorlar yoki bankka yoziladi, chunki mijoz shuni to'laydi. Soliqsiz summa sotuvga yoziladi. Soliq soliq hisobiga yoziladi, chunki u organga tegishli.

Biznes sotuvga xaridlarda to'laganidan ko'p soliq hisoblasa, kredit qoldiq, ya'ni majburiyat paydo bo'ladi. To'lash: Dt Soliq, Kt Bank. Ko'proq to'lagan bo'lsa, masalan qimmat uskuna olgandan keyin, debet qoldiq, ya'ni aktiv paydo bo'ladi. Qaytarish: Dt Bank, Kt Soliq.`,
      },
      example: {
        en: `The rice cooker is sold on credit: Dr Receivables $600, Cr Sales $500, Cr Sales tax $100. The goods bought for $360 including tax are on credit: Dr Purchases $300, Dr Sales tax $60, Cr Payables $360. The sales tax account now shows a credit balance of $40, a liability. When Madina pays, she posts Dr Sales tax $40, Cr Cash at bank $40, and the account is clear.`,
        ru: `Рисоварка продана в кредит: Дт Дебиторы $600, Кт Продажи $500, Кт Налог $100. Товар за $360 с налогом куплен в кредит: Дт Закупки $300, Дт Налог $60, Кт Кредиторы $360. Счёт налога показывает кредитовый остаток $40, обязательство. Когда Мадина платит, она проводит Дт Налог $40, Кт Банк $40, и счёт закрыт.`,
        uz: `Guruch pishirgich nasiyaga sotildi: Dt Debitorlar $600, Kt Sotuv $500, Kt Soliq $100. Soliq bilan $360 lik tovar nasiyaga olindi: Dt Xaridlar $300, Dt Soliq $60, Kt Kreditorlar $360. Soliq hisobi $40 kredit qoldiq ko'rsatadi, bu majburiyat. Madina to'laganda Dt Soliq $40, Kt Bank $40 yozadi va hisob yopiladi.`,
      },
    },
    {
      key: {
        en: `- Trade discount: a price cut for bulk or loyalty, taken off before recording.
- Only the net amount is recorded. The discount itself never appears in the ledger.
- Settlement discount: a reward for paying early. The customer chooses whether to take it.
- Buyer: record the full cost first, then record any discount when paying.
- Buyer taking the discount: Dr Payables, Cr Cash at bank, Cr Discount received.
- Discount received is netted against purchases, so it reduces cost of sales.`,
        ru: `- Торговая скидка: снижение цены за объём или лояльность, вычитается до записи.
- Записывается только сумма после скидки. Сама скидка в учёте не появляется.
- Скидка за раннюю оплату: поощрение. Покупатель сам решает, брать ли её.
- Покупатель: сначала запишите полную стоимость, скидку отразите при оплате.
- Покупатель со скидкой: Дт Кредиторы, Кт Банк, Кт Полученная скидка.
- Полученная скидка вычитается из закупок, то есть снижает себестоимость.`,
        uz: `- Savdo chegirmasi: hajm yoki sodiqlik uchun narx pasayishi, yozuvdan oldin ayiriladi.
- Faqat chegirmadan keyingi summa yoziladi. Chegirmaning o'zi hisobda ko'rinmaydi.
- Muddatidan oldingi to'lov chegirmasi: erta to'lov uchun. Mijoz o'zi tanlaydi.
- Xaridor: avval to'liq qiymatni yozing, chegirmani to'lovda qayd eting.
- Chegirma olgan xaridor: Dt Kreditorlar, Kt Bank, Kt Olingan chegirma.
- Olingan chegirma xariddan ayiriladi, ya'ni tannarxni kamaytiradi.`,
      },
      exam: {
        en: `- Dr Payables, Cr Discount received is a settlement discount received. A trade discount would never be journalled.
- A settlement discount is also called a cash or prompt payment discount.
- The net cost to the buyer is the amount paid. A $200 purchase less a 3% discount costs $194.
- Apply the trade discount first, then the settlement discount to what remains.`,
        ru: `- Дт Кредиторы, Кт Полученная скидка — это полученная скидка за раннюю оплату. Торговая скидка в журнал никогда не записывается.
- Скидку за раннюю оплату называют также кассовой скидкой.
- Чистая стоимость для покупателя — уплаченная сумма. Закупка $200 минус 3% стоит $194.
- Сначала примените торговую скидку, затем скидку за раннюю оплату к остатку.`,
        uz: `- Dt Kreditorlar, Kt Olingan chegirma — olingan muddatidan oldingi to'lov chegirmasi. Savdo chegirmasi jurnalga hech qachon yozilmaydi.
- Bu chegirma naqd yoki tezkor to'lov chegirmasi deb ham ataladi.
- Xaridor uchun sof qiymat to'langan summa. $200 xarid minus 3% chegirma $194 turadi.
- Avval savdo chegirmasini, so'ng qolganiga muddatidan oldingi to'lov chegirmasini qo'llang.`,
      },
      heading: {
        en: 'Discounts for the buyer',
        ru: 'Скидки у покупателя',
        uz: 'Xaridor uchun chegirmalar',
      },
      body: {
        en: `A trade discount is a definite reduction in price. Suppliers offer it to encourage bulk orders and loyalty. Because the discount is certain, it is simply deducted, and both seller and buyer record only the net amount.

A settlement discount works differently. It is an offer to reduce the price if the invoice is paid within a short time, such as 3% for paying within ten days when normal terms are thirty days. The customer decides whether to accept.

The buyer records the purchase at the full invoice cost: Dr Purchases, Cr Payables. If the invoice is paid late, the full amount goes out: Dr Payables, Cr Cash at bank. If it is paid early and the discount is taken, the whole payable is cleared, less cash leaves the bank, and the difference is discount received.

In the final accounts, discount received is normally netted off the purchases expense, which reduces cost of sales.`,
        ru: `Торговая скидка — определённое снижение цены. Поставщики предлагают её, чтобы поощрить крупные заказы и лояльность. Так как скидка определена, её просто вычитают, и продавец и покупатель записывают только сумму после скидки.

Скидка за раннюю оплату работает иначе. Это предложение снизить цену, если счёт оплачен быстро, например 3% при оплате за десять дней, когда обычный срок тридцать дней. Покупатель сам решает, принять ли её.

Покупатель записывает закупку по полной сумме счёта: Дт Закупки, Кт Кредиторы. Если счёт оплачен поздно, уходит полная сумма: Дт Кредиторы, Кт Банк. Если оплачен рано со скидкой, весь долг закрывается, из банка уходит меньше, а разница — полученная скидка.

В итоговой отчётности полученная скидка обычно вычитается из закупок, что снижает себестоимость.`,
        uz: `Savdo chegirmasi — narxning aniq pasayishi. Yetkazib beruvchilar uni katta buyurtma va sodiqlikni rag'batlantirish uchun beradi. Chegirma aniq bo'lgani uchun shunchaki ayiriladi, sotuvchi ham, xaridor ham faqat chegirmadan keyingi summani yozadi.

Muddatidan oldingi to'lov chegirmasi boshqacha ishlaydi. Bu hisob-faktura tez to'lansa narxni pasaytirish taklifi, masalan oddiy muddat o'ttiz kun bo'lganda o'n kunda to'lash uchun 3%. Mijoz qabul qilish-qilmasligini o'zi hal qiladi.

Xaridor xaridni to'liq summada yozadi: Dt Xaridlar, Kt Kreditorlar. Kech to'lansa, to'liq summa chiqadi: Dt Kreditorlar, Kt Bank. Erta to'lanib chegirma olinsa, butun qarz yopiladi, bankdan kamroq chiqadi, farq esa olingan chegirma.

Yakuniy hisobotda olingan chegirma odatda xaridlardan ayiriladi, bu tannarxni kamaytiradi.`,
      },
      example: {
        en: `Madina orders goods with a list price of $400 and gets 10% trade discount, so she records Dr Purchases $360, Cr Payables $360. The $40 never appears in her books. The supplier offers 2% for payment within ten days and she pays in time. The discount is 2% x $360 = $7.20, so she pays $352.80: Dr Payables $360, Cr Cash at bank $352.80, Cr Discount received $7.20.`,
        ru: `Мадина заказывает товар по прайсу $400 и получает торговую скидку 10%, поэтому записывает Дт Закупки $360, Кт Кредиторы $360. $40 в её учёте не появляются. Поставщик предлагает 2% за оплату в течение десяти дней, и она успевает. Скидка: 2% x $360 = $7.20, она платит $352.80: Дт Кредиторы $360, Кт Банк $352.80, Кт Полученная скидка $7.20.`,
        uz: `Madina ro'yxat narxi $400 bo'lgan tovar buyurtma qiladi va 10% savdo chegirmasi oladi, shuning uchun Dt Xaridlar $360, Kt Kreditorlar $360 yozadi. $40 uning kitobida ko'rinmaydi. Yetkazib beruvchi o'n kunda to'lash uchun 2% taklif qiladi va u ulguradi. Chegirma: 2% x $360 = $7.20, u $352.80 to'laydi: Dt Kreditorlar $360, Kt Bank $352.80, Kt Olingan chegirma $7.20.`,
      },
    },
    {
      key: {
        en: `- A seller cannot know if the customer will pay early. This is variable consideration.
- The question states whether the customer is expected to take the discount.
- Expected to take it: invoice the reduced amount. Not expected: invoice after trade discount only.
- Pays as expected: Dr Cash at bank, Cr Receivables, for the invoiced amount.
- Takes it unexpectedly: Dr Cash at bank, Dr Revenue, Cr Receivables.
- Misses it unexpectedly: Dr Cash at bank, Cr Receivables, Cr Revenue.`,
        ru: `- Продавец не знает, заплатит ли покупатель рано. Это переменное возмещение.
- В задаче указано, ожидается ли, что покупатель возьмёт скидку.
- Ожидается: счёт на сниженную сумму. Не ожидается: счёт только после торговой скидки.
- Платит как ожидалось: Дт Банк, Кт Дебиторы, на сумму счёта.
- Неожиданно берёт скидку: Дт Банк, Дт Выручка, Кт Дебиторы.
- Неожиданно не берёт: Дт Банк, Кт Дебиторы, Кт Выручка.`,
        uz: `- Sotuvchi mijoz erta to'lashini bilmaydi. Bu o'zgaruvchan to'lov.
- Masalada mijoz chegirmani olishi kutilyaptimi, aytiladi.
- Kutilsa: pasaytirilgan summaga hisob-faktura. Kutilmasa: faqat savdo chegirmasidan keyin.
- Kutilgandek to'lasa: Dt Bank, Kt Debitorlar, hisob-faktura summasiga.
- Kutilmaganda chegirma olsa: Dt Bank, Dt Tushum, Kt Debitorlar.
- Kutilmaganda olmasa: Dt Bank, Kt Debitorlar, Kt Tushum.`,
      },
      exam: {
        en: `- Trade discount is always deducted first. The settlement discount then applies to the amount after trade discount.
- Expected discount: the receivable is list x (1 - trade %) x (1 - settlement %).
- Not expected: the receivable is list x (1 - trade %).
- The full amount due, if the customer pays late, is always the amount after trade discount.
- Settlement discount allowed is no longer shown as an expense. It reduces revenue.
- Discount received is for the buyer. A seller never uses that account.`,
        ru: `- Торговая скидка всегда вычитается первой. Скидка за раннюю оплату применяется к сумме после неё.
- Скидка ожидается: дебитор = прайс x (1 - торговая %) x (1 - за оплату %).
- Не ожидается: дебитор = прайс x (1 - торговая %).
- Полная сумма при поздней оплате — всегда сумма после торговой скидки.
- Предоставленная скидка больше не показывается расходом. Она уменьшает выручку.
- Полученная скидка — для покупателя. Продавец этот счёт не использует.`,
        uz: `- Savdo chegirmasi doim birinchi ayiriladi. Muddatidan oldingi to'lov chegirmasi undan keyingi summaga qo'llanadi.
- Chegirma kutilsa: debitor = ro'yxat narxi x (1 - savdo %) x (1 - to'lov %).
- Kutilmasa: debitor = ro'yxat narxi x (1 - savdo %).
- Kech to'lansa, to'liq summa doim savdo chegirmasidan keyingi summa.
- Berilgan chegirma endi xarajat sifatida ko'rsatilmaydi. U tushumni kamaytiradi.
- Olingan chegirma xaridor uchun. Sotuvchi bu hisobni ishlatmaydi.`,
      },
      heading: {
        en: 'Settlement discounts for the seller',
        ru: 'Скидки за раннюю оплату у продавца',
        uz: 'Sotuvchi uchun muddatidan oldingi to\'lov chegirmalari',
      },
      body: {
        en: `When a seller offers a settlement discount, it does not know at the time of sale how much it will receive. IFRS 15 calls this variable consideration, and chapter 15 returns to it. The seller records revenue at the amount it expects to receive, and exam questions always say whether the customer is expected to take the discount.

If the customer is not expected to pay early, the invoice is for the full amount after any trade discount. If they then pay late as expected, the receipt clears the receivable. If they surprise the seller and pay early, the receivable must still be cleared, so the shortfall is debited to revenue.

If the customer is expected to pay early, the invoice is prepared for the reduced amount, so the discount never appears in the records, like a trade discount. If they do pay early, the receipt clears the receivable. If they pay late, they owe the full amount, and the extra cash is credited to revenue, as if it were a cash sale.

Either way, settlement discount allowed is not recorded as an expense. It only ever changes revenue.`,
        ru: `Когда продавец предлагает скидку за раннюю оплату, он не знает при продаже, сколько получит. IFRS 15 называет это переменным возмещением, к нему вернётся глава 15. Продавец признаёт выручку в ожидаемой сумме, а в задачах всегда сказано, ожидается ли, что покупатель возьмёт скидку.

Если раннюю оплату не ожидают, счёт выписывается на полную сумму после торговой скидки. Если покупатель платит поздно, как ожидалось, поступление закрывает дебитора. Если он неожиданно платит рано, дебитора всё равно нужно закрыть, и недостающая сумма дебетует выручку.

Если раннюю оплату ожидают, счёт выписывается на сниженную сумму, поэтому скидка не появляется в учёте, как и торговая. Если покупатель платит рано, поступление закрывает дебитора. Если поздно, он должен полную сумму, а лишние деньги кредитуют выручку, как при продаже за наличные.

В любом случае предоставленная скидка не записывается как расход. Она меняет только выручку.`,
        uz: `Sotuvchi muddatidan oldingi to'lov chegirmasini taklif qilganda, sotuv paytida qancha olishini bilmaydi. IFRS 15 buni o'zgaruvchan to'lov deydi, 15-bobda bunga qaytamiz. Sotuvchi tushumni kutilgan summada tan oladi, imtihon savollarida esa mijoz chegirmani olishi kutilyaptimi, doim aytiladi.

Mijoz erta to'lashi kutilmasa, hisob-faktura savdo chegirmasidan keyingi to'liq summaga yoziladi. Agar u kutilgandek kech to'lasa, tushum debitorni yopadi. Kutilmaganda erta to'lasa, debitorni baribir yopish kerak, yetishmagan summa tushumga debetlanadi.

Mijoz erta to'lashi kutilsa, hisob-faktura pasaytirilgan summaga yoziladi, shuning uchun chegirma savdo chegirmasi kabi hisobda ko'rinmaydi. Erta to'lasa, tushum debitorni yopadi. Kech to'lasa, u to'liq summani to'laydi, ortiqcha pul esa naqd sotuvdek tushumga kreditlanadi.

Har ikki holda ham berilgan chegirma xarajat sifatida yozilmaydi. U faqat tushumni o'zgartiradi.`,
      },
      example: {
        en: `Madina sells goods for $1,000 to a cafe and offers 2% for paying within ten days. If she expects the cafe to take it, she invoices $980: Dr Receivables $980, Cr Revenue $980. If the cafe pays late, she receives $1,000: Dr Cash at bank $1,000, Cr Receivables $980, Cr Revenue $20. If instead she expects no early payment, she invoices $1,000. If the cafe then pays early, she receives $980: Dr Cash at bank $980, Dr Revenue $20, Cr Receivables $1,000.`,
        ru: `Мадина продаёт кафе товар за $1,000 и предлагает 2% за оплату в течение десяти дней. Если она ожидает, что кафе возьмёт скидку, счёт на $980: Дт Дебиторы $980, Кт Выручка $980. Если кафе платит поздно, она получает $1,000: Дт Банк $1,000, Кт Дебиторы $980, Кт Выручка $20. Если же она не ожидает ранней оплаты, счёт на $1,000. Если затем кафе платит рано, она получает $980: Дт Банк $980, Дт Выручка $20, Кт Дебиторы $1,000.`,
        uz: `Madina kafega $1,000 ga tovar sotadi va o'n kunda to'lash uchun 2% taklif qiladi. Kafe chegirmani olishini kutsa, $980 hisob-faktura yozadi: Dt Debitorlar $980, Kt Tushum $980. Kafe kech to'lasa, $1,000 oladi: Dt Bank $1,000, Kt Debitorlar $980, Kt Tushum $20. Agar erta to'lovni kutmasa, $1,000 hisob-faktura yozadi. So'ng kafe erta to'lasa, $980 oladi: Dt Bank $980, Dt Tushum $20, Kt Debitorlar $1,000.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Cash transaction', ru: 'Операция за наличные', uz: 'Naqd operatsiya' }, definition: { en: 'A deal settled at once, including by cheque or immediate transfer.', ru: 'Сделка с немедленным расчётом, в том числе чеком или мгновенным переводом.', uz: 'Darhol, jumladan chek yoki tezkor o\'tkazma bilan yopiladigan bitim.' } },
    { term: { en: 'Credit transaction', ru: 'Операция в кредит', uz: 'Nasiya operatsiya' }, definition: { en: 'A deal where goods or services move now and payment follows later.', ru: 'Сделка, где товар передаётся сейчас, а оплата позже.', uz: 'Tovar yoki xizmat hozir, to\'lov keyin bo\'ladigan bitim.' } },
    { term: { en: 'Imprest system', ru: 'Система имприст', uz: 'Imprest tizimi' }, definition: { en: 'Topping up petty cash by the exact amount spent to restore a fixed float.', ru: 'Пополнение мелкой кассы на потраченную сумму для возврата постоянного лимита.', uz: 'Kichik kassani sarflangan summaga to\'ldirib, doimiy summani tiklash.' } },
    { term: { en: 'Petty cash voucher', ru: 'Кассовый ваучер', uz: 'Kassa vaucheri' }, definition: { en: 'The signed record of a petty cash payment.', ru: 'Подписанная запись о выплате из мелкой кассы.', uz: 'Kichik kassa to\'lovining imzolangan yozuvi.' } },
    { term: { en: 'Returns inwards', ru: 'Возвраты покупателей', uz: 'Sotuv qaytarishlari' }, definition: { en: 'Goods sent back by customers. Also called sales returns.', ru: 'Товар, возвращённый покупателями.', uz: 'Mijozlar qaytargan tovar.' } },
    { term: { en: 'Returns outwards', ru: 'Возвраты поставщикам', uz: 'Xarid qaytarishlari' }, definition: { en: 'Goods sent back to suppliers. Also called purchase returns.', ru: 'Товар, возвращённый поставщикам.', uz: 'Yetkazib beruvchilarga qaytarilgan tovar.' } },
    { term: { en: 'Output tax', ru: 'Выходной налог', uz: 'Chiqish solig\'i' }, definition: { en: 'Sales tax charged on sales.', ru: 'Налог с продаж, начисленный на продажи.', uz: 'Sotuvga hisoblangan sotuv solig\'i.' } },
    { term: { en: 'Input tax', ru: 'Входной налог', uz: 'Kirish solig\'i' }, definition: { en: 'Sales tax paid on purchases.', ru: 'Налог с продаж, уплаченный при закупках.', uz: 'Xaridlarda to\'langan sotuv solig\'i.' } },
    { term: { en: 'Trade discount', ru: 'Торговая скидка', uz: 'Savdo chegirmasi' }, definition: { en: 'A definite price reduction taken off before anything is recorded.', ru: 'Определённое снижение цены, вычитаемое до записи.', uz: 'Yozuvdan oldin ayiriladigan aniq narx pasayishi.' } },
    { term: { en: 'Settlement discount', ru: 'Скидка за раннюю оплату', uz: 'Muddatidan oldingi to\'lov chegirmasi' }, definition: { en: 'An optional discount for paying early.', ru: 'Необязательная скидка за раннюю оплату.', uz: 'Erta to\'lash uchun ixtiyoriy chegirma.' } },
    { term: { en: 'Discount received', ru: 'Полученная скидка', uz: 'Olingan chegirma' }, definition: { en: 'A settlement discount taken by the buyer, netted off purchases.', ru: 'Скидка за раннюю оплату, полученная покупателем, вычитается из закупок.', uz: 'Xaridor olgan muddatidan oldingi to\'lov chegirmasi, xariddan ayiriladi.' } },
    { term: { en: 'Variable consideration', ru: 'Переменное возмещение', uz: 'O\'zgaruvchan to\'lov' }, definition: { en: 'Revenue whose final amount is unknown at the time of sale.', ru: 'Выручка, итоговая сумма которой неизвестна при продаже.', uz: 'Yakuniy summasi sotuv paytida noma\'lum bo\'lgan tushum.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter04;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter04.id] = chapter04;
