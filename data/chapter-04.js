'use strict';

const chapter04 = {
  id: 'chapter-04',
  titles: {
    en: 'Recording transactions and events',
    ru: 'Учёт операций и событий',
    uz: 'Operatsiya va voqealarni qayd etish',
  },
  objectives: [
    {
      en: 'Record cash and credit transactions',
      ru: 'Отражать операции за наличные и в кредит',
      uz: 'Naqd va nasiya operatsiyalarini qayd etish',
    },
    {
      en: 'Record petty cash under the imprest system',
      ru: 'Отражать мелкую кассу по системе имприст',
      uz: 'Kichik kassani imprest tizimida qayd etish',
    },
    {
      en: 'Record sales, purchases and returns',
      ru: 'Отражать продажи, закупки и возвраты',
      uz: 'Sotuv, xarid va qaytarishlarni qayd etish',
    },
    {
      en: 'Calculate and record sales tax',
      ru: 'Рассчитывать и отражать налог с продаж',
      uz: 'Sotuv solig\'ini hisoblash va qayd etish',
    },
    {
      en: 'Record trade and settlement discounts',
      ru: 'Отражать торговые скидки и скидки за раннюю оплату',
      uz: 'Savdo va muddatidan oldingi to\'lov chegirmalarini qayd etish',
    },
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
        en: `One day's bank report for a small shop.
# Money out: $2,000
  Paid a supplier $700: Dr Payables $700
  Paid wages $400: Dr Wages $400
  Paid rent $900: Dr Rent $900
  One total credit: Cr Cash at bank $2,000
# Money in: $950
  A credit customer paid $350: Cr Receivables $350
  Card takings for today's sales $600: Cr Sales $600
  One total debit: Dr Cash at bank $950
= The $700 is also entered on that supplier's own account, and the $350 on that customer's.`,
        ru: `Банковский отчёт небольшого магазина за один день.
# Деньги ушли: $2,000
  Оплата поставщику $700: Дт Кредиторы $700
  Зарплата $400: Дт Зарплата $400
  Аренда $900: Дт Аренда $900
  Один общий кредит: Кт Деньги в банке $2,000
# Деньги пришли: $950
  Покупатель в кредит заплатил $350: Кт Дебиторы $350
  Оплата картами за сегодняшние продажи $600: Кт Продажи $600
  Один общий дебет: Дт Деньги в банке $950
= $700 также записывают на личный счёт этого поставщика, а $350 — на счёт покупателя.`,
        uz: `Kichik do'konning bir kunlik bank hisoboti.
# Pul chiqdi: $2,000
  Yetkazib beruvchiga $700: Dt Kreditorlar $700
  Ish haqi $400: Dt Ish haqi $400
  Ijara $900: Dt Ijara $900
  Bitta umumiy kredit: Kt Bankdagi pul $2,000
# Pul kirdi: $950
  Nasiya mijoz $350 to'ladi: Kt Debitorlar $350
  Bugungi sotuv uchun karta to'lovlari $600: Kt Sotuv $600
  Bitta umumiy debet: Dt Bankdagi pul $950
= $700 o'sha yetkazib beruvchining shaxsiy hisobiga, $350 esa mijoz hisobiga ham yoziladi.`,
      },
      simple: {
        en: `A cash transaction is paid straight away (cash, card or instant transfer). A credit transaction is "buy now, pay later": what customers owe you is a receivable, what you owe suppliers is a payable.

For the bank account, remember: money IN is a debit to Cash at bank, money OUT is a credit.`,
        ru: `Операция за наличные оплачивается сразу (наличными, картой или мгновенным переводом). Операция в кредит — «купи сейчас, плати потом»: долг покупателей вам — дебиторская задолженность, ваш долг поставщикам — кредиторская.

Для банковского счёта запомните: деньги ПРИШЛИ — дебет «Денег в банке», деньги УШЛИ — кредит.`,
        uz: `Naqd operatsiya darhol to'lanadi (naqd, karta yoki tezkor o'tkazma). Nasiya operatsiya — «hozir ol, keyin to'la»: mijozlarning sizga qarzi — debitorlik, sizning yetkazib beruvchilarga qarzingiz — kreditorlik qarzi.

Bank hisobi uchun eslang: pul KIRDI — «Bankdagi pul» debeti, pul CHIQDI — kredit.`,
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
- The top-up equals the money paid out less any money received into petty cash.
- Why imprest: it keeps small cash spending under control and lowers the risk of fraud. Cash + vouchers (not cash alone) must equal the float, and every payment needs a voucher.
- The signed petty cash voucher is the evidence that a payment was approved. The till receipt only shows what was bought.`,
        ru: `- Имприст — это не лимит трат, не равные пополнения и не утверждение расходов. Это пополнение на точную потраченную сумму.
- Найти лимит: наличные + ваучеры на выплаты - ваучеры на поступления. Заём сотруднику считается выплатой.
- Найти расходы: лимит на начало + поступления - деньги, обналиченные для сотрудников - лимит на конец. Чеки на мелкую кассу считаются поступлениями.
- Если лимит повышен, лимит на конец — новая, большая сумма.
- Пополнение равно выплатам минус поступления в мелкую кассу.
- Зачем имприст: он держит мелкие траты под контролем и снижает риск мошенничества. Наличные + ваучеры (а не одни наличные) должны равняться фонду, и на каждый платёж нужен ваучер.
- Подписанный ваучер мелкой кассы — доказательство, что платёж одобрен. Чек из магазина только показывает, что купили.`,
        uz: `- Imprest sarf chegarasi, teng to'ldirish yoki tasdiqlangan sarf emas. Bu aniq sarflangan summani to'ldirish.
- Doimiy summani topish: naqd pul + chiqim vaucherlari - kirim vaucherlari. Xodimga qarz chiqim hisoblanadi.
- Sarfni topish: boshlang'ich summa + kirimlar - xodim uchun naqdlashtirilgan pul - yakuniy summa. Kichik kassa uchun yozilgan cheklar kirim hisoblanadi.
- Doimiy summa oshirilsa, yakuniy summa yangi, kattaroq raqam.
- To'ldirish chiqimlar minus kichik kassaga kirimlarga teng.
- Imprest nima uchun: u mayda naqd xarajatlarni nazoratda ushlaydi va firibgarlik xavfini kamaytiradi. Naqd pul + vaucherlar (faqat naqd emas) fondga teng bo'lishi kerak, har bir to'lovga vaucher kerak.
- Imzolangan mayda kassa vaucheri to'lov tasdiqlanganining dalili. Do'kon cheki faqat nima sotib olinganini ko'rsatadi.`,
      },
      heading: { en: 'Petty cash', ru: 'Мелкая касса', uz: 'Kichik kassa' },
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
        en: `An office keeps a petty cash float of $100.
# During the month (vouchers)
  Tea $14 + stamps $11 + taxi $6 + cleaning $19 = $50 spent
# Check
  Cash counted in the tin: $50. Cash $50 + vouchers $50 = $100. It agrees.
# Record the spending
  Dr Tea $14, Dr Postage $11, Dr Travel $6, Dr Cleaning $19, Cr Petty cash $50
# Top up from the bank
  Dr Petty cash $50, Cr Cash at bank $50
= The float is back to $100.`,
        ru: `Офис держит аванс мелкой кассы $100.
# За месяц (ордера)
  Чай $14 + марки $11 + такси $6 + уборка $19 = потрачено $50
# Проверка
  В коробке пересчитали $50. Деньги $50 + ордера $50 = $100. Сходится.
# Записываем расходы
  Дт Чай $14, Дт Почта $11, Дт Проезд $6, Дт Уборка $19, Кт Мелкая касса $50
# Пополняем из банка
  Дт Мелкая касса $50, Кт Деньги в банке $50
= Аванс снова $100.`,
        uz: `Ofis mayda kassada $100 avans saqlaydi.
# Oy davomida (orderlar)
  Choy $14 + marka $11 + taksi $6 + tozalash $19 = $50 sarflandi
# Tekshiruv
  Qutidagi pul sanaldi: $50. Pul $50 + orderlar $50 = $100. Mos.
# Xarajatlarni yozamiz
  Dt Choy $14, Dt Pochta $11, Dt Yo'l $6, Dt Tozalash $19, Kt Mayda kassa $50
# Bankdan to'ldiramiz
  Dt Mayda kassa $50, Kt Bankdagi pul $50
= Avans yana $100.`,
      },
      simple: {
        en: `Petty cash is a small tin of notes and coins for little expenses like tea, stamps or a taxi.

With the imprest system you keep a fixed amount (the float), say $100. At any moment, cash in the tin + receipts for what was spent = $100. At the end of the month you top it up by exactly what was spent, so it is back to $100.`,
        ru: `Мелкая касса — небольшая коробка с купюрами и монетами на мелкие расходы: чай, марки, такси.

При системе имприст вы держите фиксированную сумму (аванс), например $100. В любой момент деньги в коробке + чеки на потраченное = $100. В конце месяца вы пополняете её ровно на потраченное, и снова $100.`,
        uz: `Mayda kassa — choy, marka yoki taksi kabi kichik xarajatlar uchun pul solingan kichik quti.

Imprest tizimida qat'iy summa (avans), masalan $100 saqlanadi. Istalgan paytda qutidagi pul + sarflanganlar uchun cheklar = $100. Oy oxirida sarflangan aynan summa qo'shiladi va yana $100 bo'ladi.`,
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
      heading: { en: 'Sales, purchases and returns', ru: 'Продажи, закупки и возвраты', uz: 'Sotuv, xarid va qaytarishlar' },
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
        en: `Three everyday cases, then a missing figure.
# 1. A customer returns a $40 lamp bought for cash
  Dr Sales returns $40, Cr Cash at bank $40 (you give the money back)
# 2. You send $120 of cracked mugs back to a credit supplier
  Dr Payables $120, Cr Purchase returns $120 (you now owe less)
# 3. How much do credit customers owe at the month end?
  Owed at the start: $1,400
  Plus new credit sales: + $9,000
  Less cash received: - $8,200
  Less goods returned: - $300
= Receivables at the month end: $1,400 + $9,000 - $8,200 - $300 = $1,900`,
        ru: `Три обычных случая, затем недостающая цифра.
# 1. Покупатель возвращает лампу за $40, купленную за наличные
  Дт Возвраты покупателей $40, Кт Деньги в банке $40 (вы возвращаете деньги)
# 2. Вы возвращаете поставщику в кредит треснувшие кружки на $120
  Дт Кредиторы $120, Кт Возвраты поставщикам $120 (теперь вы должны меньше)
# 3. Сколько должны покупатели в кредит на конец месяца?
  Долг на начало: $1,400
  Плюс новые продажи в кредит: + $9,000
  Минус полученные деньги: - $8,200
  Минус возвраты: - $300
= Дебиторы на конец месяца: $1,400 + $9,000 - $8,200 - $300 = $1,900`,
        uz: `Uchta oddiy holat, keyin yetishmayotgan son.
# 1. Mijoz naqdga olingan $40 lik chiroqni qaytaradi
  Dt Sotuv qaytarishlari $40, Kt Bankdagi pul $40 (pulni qaytarasiz)
# 2. Nasiya yetkazib beruvchiga $120 lik yoriq krujkalarni qaytarasiz
  Dt Kreditorlar $120, Kt Xarid qaytarishlari $120 (endi kamroq qarzsiz)
# 3. Oy oxirida nasiya mijozlar qancha qarz?
  Boshidagi qarz: $1,400
  Plus yangi nasiya sotuv: + $9,000
  Minus olingan pul: - $8,200
  Minus qaytarilgan tovar: - $300
= Oy oxiridagi debitorlar: $1,400 + $9,000 - $8,200 - $300 = $1,900`,
      },
      simple: {
        en: `A sale always credits Sales, and a purchase always debits Purchases. The other side shows how it was paid: Cash at bank if paid now, Receivables or Payables if paid later.

Returns get their own accounts. Goods a customer brings back are sales returns (returns inwards), which work like negative sales. Goods you send back to a supplier are purchase returns (returns outwards), which work like negative purchases.`,
        ru: `Продажа всегда кредитует Продажи, а покупка всегда дебетует Закупки. Вторая сторона показывает, как платили: Деньги в банке, если сразу, или Дебиторы/Кредиторы, если позже.

Для возвратов свои счета. Товар, который вернул покупатель, — возвраты покупателей (returns inwards), они как отрицательные продажи. Товар, который вы вернули поставщику, — возвраты поставщикам (returns outwards), как отрицательные закупки.`,
        uz: `Sotuv doim Sotuvni kreditlaydi, xarid doim Xaridlarni debetlaydi. Ikkinchi tomon qanday to'langanini ko'rsatadi: darhol bo'lsa Bankdagi pul, keyin bo'lsa Debitorlar yoki Kreditorlar.

Qaytarishlar uchun alohida hisoblar bor. Mijoz qaytargan tovar — sotuv qaytarishlari (returns inwards), manfiy sotuv kabi. Yetkazib beruvchiga qaytargan tovaringiz — xarid qaytarishlari (returns outwards), manfiy xarid kabi.`,
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
- Check whether each figure in a question is inclusive or exclusive of tax before calculating.
- A business NOT registered for sales tax cannot claim input tax back. It records purchases at the GROSS amount (tax included) and has no sales tax account.
- Exempt sales carry no sales tax. Take them out of total sales before working out output tax.`,
        ru: `- Налог с продаж начисляется на цену после торговой скидки. Прайс $800 минус 5% при 20%: налог 20% x $760.
- Если входной налог больше выходного, разница возмещается, а не платится.
- Налог нельзя вернуть по некоторым статьям, например представительским расходам и автомобилям.
- Обычные ставки: 20%, 17.5%, 15% и 10%. Метод один для любой ставки.
- Перед расчётом проверьте, включён ли налог в каждую цифру задачи.
- Бизнес, НЕ зарегистрированный по налогу с продаж, не может вернуть входной налог. Он отражает закупки по ВАЛОВОЙ сумме (с налогом) и не ведёт счёт налога с продаж.
- Освобождённые продажи не облагаются налогом. Уберите их из общей суммы продаж, прежде чем считать выходной налог.`,
        uz: `- Sotuv solig'i savdo chegirmasidan keyingi narxga hisoblanadi. Ro'yxat $800 minus 5%, 20% da: soliq 20% x $760.
- Kirish solig'i chiqishdan ko'p bo'lsa, farq to'lanmaydi, qaytariladi.
- Ba'zi moddalarda, masalan mijozlarni mehmon qilish va mashinalarda soliq qaytarilmaydi.
- Odatiy stavkalar 20%, 17.5%, 15% va 10%. Har qanday stavka uchun usul bir xil.
- Hisoblashdan oldin har bir raqam soliqni o'z ichiga oladimi, tekshiring.
- Savdo solig'i bo'yicha ro'yxatdan O'TMAGAN biznes kirish solig'ini qaytarib ololmaydi. U xaridlarni YALPI summada (soliq bilan) yozadi va savdo solig'i hisobini yuritmaydi.
- Soliqdan ozod sotuvlarga savdo solig'i qo'shilmaydi. Chiqish solig'ini hisoblashdan oldin ularni umumiy sotuvdan chiqarib tashlang.`,
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
        en: `Sales tax is 20%.
# 1. You sell a rice cooker for $500 before tax
  Tax on a net price: $500 × 20% = $100
  The customer pays $500 + $100 = $600
# 2. You buy goods for $360 including tax
  Tax inside a gross price: $360 × 20/120 = $60
  The goods really cost you $360 - $60 = $300
# 3. What you pay the government
  Output tax $100 - input tax $60 = $40
= Your profit is $500 - $300 = $200. The tax does not change it.`,
        ru: `Налог с продаж 20%.
# 1. Вы продаёте рисоварку за $500 без налога
  Налог с цены без налога: $500 × 20% = $100
  Покупатель платит $500 + $100 = $600
# 2. Вы покупаете товар за $360 с налогом
  Налог внутри цены с налогом: $360 × 20/120 = $60
  Товар на самом деле стоит вам $360 - $60 = $300
# 3. Что вы платите государству
  Выходной налог $100 - входной налог $60 = $40
= Ваша прибыль $500 - $300 = $200. Налог её не меняет.`,
        uz: `Sotuv solig'i 20%.
# 1. Guruch pishirgichni soliqsiz $500 ga sotasiz
  Soliqsiz narxdan soliq: $500 × 20% = $100
  Mijoz $500 + $100 = $600 to'laydi
# 2. Tovarni soliq bilan $360 ga olasiz
  Soliqli narx ichidagi soliq: $360 × 20/120 = $60
  Tovar sizga aslida $360 - $60 = $300 turadi
# 3. Davlatga to'lovingiz
  Chiqish solig'i $100 - kirish solig'i $60 = $40
= Foydangiz $500 - $300 = $200. Soliq uni o'zgartirmaydi.`,
      },
      simple: {
        en: `Sales tax is a tax paid by the final customer. A business just collects it for the government.

You add tax to your sales (output tax) and you pay tax on your purchases (input tax). You pay the government the difference: output minus input. Because the tax is not yours, it is not income or an expense, and your profit does not change.

At 20%: net price = 100%, tax = 20%, gross price = 120%. To find the tax inside a gross price, use gross × 20/120.`,
        ru: `Налог с продаж платит конечный покупатель. Бизнес лишь собирает его для государства.

Вы добавляете налог к продажам (выходной налог) и платите налог при покупках (входной налог). Государству платите разницу: выходной минус входной. Налог не ваш, поэтому это не доход и не расход, и прибыль от него не меняется.

При 20%: цена без налога = 100%, налог = 20%, цена с налогом = 120%. Чтобы найти налог внутри цены с налогом: цена × 20/120.`,
        uz: `Sotuv solig'ini oxirgi xaridor to'laydi. Biznes uni davlat uchun yig'adi, xolos.

Sotuvingizga soliq qo'shasiz (chiqish solig'i) va xaridlaringizda soliq to'laysiz (kirish solig'i). Davlatga farqni to'laysiz: chiqish minus kirish. Soliq sizniki emas, shuning uchun daromad ham, xarajat ham emas va foydangiz o'zgarmaydi.

20% da: soliqsiz narx = 100%, soliq = 20%, soliqli narx = 120%. Soliqli narx ichidagi soliqni topish: narx × 20/120.`,
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
- The revenue account is credited with sales excluding tax.
- Tax paid to the authority in a period = amount owed at the start + output tax - input tax - amount owed at the end. A closing DEBIT balance means the authority owes you, so it counts as a negative amount owed.
- In the accounting equation, sales tax owed is a liability and is never profit. Cash and receivables include the tax; profit uses net figures only.`,
        ru: `- Возврат продажи с налогом: Дт Возвраты (без налога), Дт Налог, Кт Дебиторы (с налогом).
- Внеоборотный актив тоже записывается без налога: Дт Актив (без налога), Дт Налог, Кт Кредиторы (с налогом).
- Счёт налога: кредит — долг на начало и налог с продаж; дебет — налог на закупки и уплата органу.
- Налог записывается вместе со счётом-фактурой. Последующая оплата поставщику на счёт налога не влияет.
- Счёт выручки кредитуется продажами без налога.
- Налог, уплаченный за период = долг на начало + выходной налог - входной налог - долг на конец. ДЕБЕТОВОЕ сальдо на конец значит, что должны вам, поэтому это отрицательный долг.
- В уравнении баланса налог к уплате — обязательство и никогда не прибыль. Деньги и дебиторка включают налог; прибыль считают только по чистым суммам.`,
        uz: `- Soliqli sotuv qaytarishi: Dt Qaytarishlar (soliqsiz), Dt Soliq, Kt Debitorlar (soliqli).
- Uzoq muddatli aktiv ham soliqsiz yoziladi: Dt Aktiv (soliqsiz), Dt Soliq, Kt Kreditorlar (soliqli).
- Soliq hisobi: kredit — boshlang'ich qarz va sotuv solig'i; debet — xarid solig'i va organga to'lov.
- Soliq hisob-faktura bilan yoziladi. Yetkazib beruvchiga keyingi to'lov soliq hisobiga ta'sir qilmaydi.
- Tushum hisobi soliqsiz sotuv bilan kreditlanadi.
- Davr ichida to'langan soliq = boshidagi qarz + chiqish solig'i - kirish solig'i - oxiridagi qarz. Oxirida DEBET qoldig'i bo'lsa, idora sizga qarzdor, demak bu manfiy qarz.
- Buxgalteriya tenglamasida to'lanadigan soliq majburiyat, hech qachon foyda emas. Pul va debitorlik soliqni o'z ichiga oladi; foyda faqat sof summalardan hisoblanadi.`,
      },
      heading: { en: 'Sales tax: the entries', ru: 'Налог с продаж: проводки', uz: 'Sotuv solig\'i: yozuvlar' },
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
        en: `The same two deals as before, both on credit, tax at 20%.
# 1. Sale of the rice cooker
  Dr Receivables $600 (gross: what the customer owes)
  Cr Sales $500 (net: what you earned)
  Cr Sales tax $100 (owed to the government)
# 2. Purchase of goods
  Dr Purchases $300 (net)
  Dr Sales tax $60 (you can claim it back)
  Cr Payables $360 (gross: what the supplier is owed)
# 3. The Sales tax account
  Credit $100 - debit $60 = credit balance $40, a liability
# 4. Paying the government
  Dr Sales tax $40, Cr Cash at bank $40. The account is now clear.`,
        ru: `Те же две сделки, обе в кредит, налог 20%.
# 1. Продажа рисоварки
  Дт Дебиторы $600 (с налогом: что должен покупатель)
  Кт Продажи $500 (без налога: что вы заработали)
  Кт Налог с продаж $100 (долг государству)
# 2. Покупка товара
  Дт Закупки $300 (без налога)
  Дт Налог с продаж $60 (его можно вернуть)
  Кт Кредиторы $360 (с налогом: что должны поставщику)
# 3. Счёт налога с продаж
  Кредит $100 - дебет $60 = кредитовый остаток $40, обязательство
# 4. Оплата государству
  Дт Налог с продаж $40, Кт Деньги в банке $40. Счёт закрыт.`,
        uz: `Xuddi shu ikki bitim, ikkalasi nasiya, soliq 20%.
# 1. Guruch pishirgich sotuvi
  Dt Debitorlar $600 (soliqli: mijoz qarzi)
  Kt Sotuv $500 (soliqsiz: siz topgan)
  Kt Sotuv solig'i $100 (davlatga qarz)
# 2. Tovar xaridi
  Dt Xaridlar $300 (soliqsiz)
  Dt Sotuv solig'i $60 (uni qaytarib olish mumkin)
  Kt Kreditorlar $360 (soliqli: yetkazib beruvchiga qarz)
# 3. Sotuv solig'i hisobi
  Kredit $100 - debet $60 = $40 kredit qoldiq, majburiyat
# 4. Davlatga to'lash
  Dt Sotuv solig'i $40, Kt Bankdagi pul $40. Hisob yopildi.`,
      },
      simple: {
        en: `The rule for the entries: Sales and Purchases always use the NET amount (without tax). Receivables, Payables and Cash use the GROSS amount (what is really paid). The tax goes to a Sales tax account.

If the Sales tax account ends with a credit balance, you owe the government (a liability). A debit balance means the government owes you a refund (an asset).`,
        ru: `Правило проводок: Продажи и Закупки всегда по сумме БЕЗ налога. Дебиторы, Кредиторы и Деньги — по сумме С налогом (что реально платят). Налог идёт на счёт «Налог с продаж».

Если у счёта налога кредитовый остаток, вы должны государству (обязательство). Дебетовый остаток — государство должно вам возврат (актив).`,
        uz: `Yozuvlar qoidasi: Sotuv va Xaridlar doim SOLIQSIZ summada. Debitorlar, Kreditorlar va Pul — SOLIQLI summada (haqiqatda to'lanadigani). Soliq «Sotuv solig'i» hisobiga boradi.

Soliq hisobida kredit qoldiq bo'lsa, davlatga qarzsiz (majburiyat). Debet qoldiq — davlat sizga qaytarish qarz (aktiv).`,
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
      heading: { en: 'Discounts for the buyer', ru: 'Скидки у покупателя', uz: 'Xaridor uchun chegirmalar' },
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
        en: `You order goods with a list price of $400.
# 1. Trade discount of 10%
  $400 × 10% = $40 off, so the price is $360
  Record only $360: Dr Purchases $360, Cr Payables $360. The $40 never appears.
# 2. Settlement discount of 2% for paying within 10 days
  You pay on day 8, so you take it: $360 × 2% = $7.20
  You pay $360 - $7.20 = $352.80
# 3. The entry when you pay
  Dr Payables $360 (the whole debt is cleared)
  Cr Cash at bank $352.80 (what actually left the bank)
  Cr Discount received $7.20 (your saving)
! Order matters: trade discount first, then settlement discount on what is left.`,
        ru: `Вы заказываете товар по прайсу $400.
# 1. Торговая скидка 10%
  $400 × 10% = $40 скидки, цена $360
  Записываем только $360: Дт Закупки $360, Кт Кредиторы $360. $40 нигде нет.
# 2. Скидка 2% за оплату в течение 10 дней
  Вы платите на 8-й день и берёте её: $360 × 2% = $7.20
  Платите $360 - $7.20 = $352.80
# 3. Проводка при оплате
  Дт Кредиторы $360 (весь долг закрыт)
  Кт Деньги в банке $352.80 (что ушло из банка)
  Кт Полученные скидки $7.20 (ваша экономия)
! Порядок важен: сначала торговая скидка, затем скидка за раннюю оплату с остатка.`,
        uz: `Narxi $400 bo'lgan tovar buyurtma qilasiz.
# 1. 10% savdo chegirmasi
  $400 × 10% = $40 chegirma, narx $360
  Faqat $360 yoziladi: Dt Xaridlar $360, Kt Kreditorlar $360. $40 hech qayerda yo'q.
# 2. 10 kun ichida to'lash uchun 2% chegirma
  8-kuni to'laysiz va uni olasiz: $360 × 2% = $7.20
  $360 - $7.20 = $352.80 to'laysiz
# 3. To'lashdagi yozuv
  Dt Kreditorlar $360 (butun qarz yopildi)
  Kt Bankdagi pul $352.80 (bankdan chiqqani)
  Kt Olingan chegirmalar $7.20 (tejaganingiz)
! Tartib muhim: avval savdo chegirmasi, keyin qolganiga muddatidan oldingi to'lov chegirmasi.`,
      },
      simple: {
        en: `There are two kinds of discount.

- Trade discount: a fixed price cut, for example for a big order. It is taken off BEFORE anything is recorded, so it never appears in the accounts.
- Settlement discount: a reward for paying EARLY. The buyer can choose to take it. The buyer records the full price first, and if they pay early, the saving is "discount received", which reduces cost of sales.`,
        ru: `Есть два вида скидок.

- Торговая скидка: фиксированное снижение цены, например за крупный заказ. Её вычитают ДО записи, поэтому в учёте её нет.
- Скидка за раннюю оплату: награда за то, что заплатили РАНЬШЕ. Покупатель сам решает, брать ли её. Покупатель сначала записывает полную цену, а если платит рано, экономия — «полученная скидка», она уменьшает себестоимость.`,
        uz: `Chegirmaning ikki turi bor.

- Savdo chegirmasi: narxning qat'iy kamayishi, masalan katta buyurtma uchun. U hech narsa yozilishidan OLDIN ayiriladi, shuning uchun hisobda ko'rinmaydi.
- Muddatidan oldingi to'lov chegirmasi: ERTA to'lagani uchun mukofot. Xaridor uni olish-olmaslikni o'zi tanlaydi. Xaridor avval to'liq narxni yozadi, erta to'lasa tejalgan summa — «olingan chegirma», u tannarxni kamaytiradi.`,
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
        en: `You sell goods for $1,000 and offer 2% off for paying within 10 days.
# Case A: you EXPECT the customer to pay early
  Invoice the reduced amount: $1,000 × 98% = $980
  Dr Receivables $980, Cr Revenue $980
  They pay late instead and send $1,000:
  Dr Cash at bank $1,000, Cr Receivables $980, Cr Revenue $20 (extra money = extra revenue)
# Case B: you DO NOT expect early payment
  Invoice the full $1,000: Dr Receivables $1,000, Cr Revenue $1,000
  They pay early instead and send $980:
  Dr Cash at bank $980, Dr Revenue $20, Cr Receivables $1,000 (less money = less revenue)
= Either way, the receivable is cleared in full and only revenue changes.`,
        ru: `Вы продаёте товар за $1,000 и предлагаете 2% скидки за оплату в течение 10 дней.
# Случай A: вы ОЖИДАЕТЕ раннюю оплату
  Выставляете уменьшенную сумму: $1,000 × 98% = $980
  Дт Дебиторы $980, Кт Выручка $980
  А покупатель платит поздно и присылает $1,000:
  Дт Деньги в банке $1,000, Кт Дебиторы $980, Кт Выручка $20 (больше денег = больше выручки)
# Случай B: вы НЕ ожидаете ранней оплаты
  Выставляете полные $1,000: Дт Дебиторы $1,000, Кт Выручка $1,000
  А покупатель платит рано и присылает $980:
  Дт Деньги в банке $980, Дт Выручка $20, Кт Дебиторы $1,000 (меньше денег = меньше выручки)
= В обоих случаях дебиторка закрывается полностью и меняется только выручка.`,
        uz: `Tovarni $1,000 ga sotib, 10 kun ichida to'lash uchun 2% chegirma taklif qilasiz.
# A holat: erta to'lovni KUTASIZ
  Kamaytirilgan summa yoziladi: $1,000 × 98% = $980
  Dt Debitorlar $980, Kt Tushum $980
  Mijoz esa kech to'lab, $1,000 yuboradi:
  Dt Bankdagi pul $1,000, Kt Debitorlar $980, Kt Tushum $20 (ko'p pul = ko'p tushum)
# B holat: erta to'lovni KUTMAYSIZ
  To'liq $1,000 yoziladi: Dt Debitorlar $1,000, Kt Tushum $1,000
  Mijoz esa erta to'lab, $980 yuboradi:
  Dt Bankdagi pul $980, Dt Tushum $20, Kt Debitorlar $1,000 (kam pul = kam tushum)
= Ikkala holatda ham debitorlik to'liq yopiladi va faqat tushum o'zgaradi.`,
      },
      simple: {
        en: `When YOU offer an early-payment discount, you do not know yet if the customer will take it. So you record the sale at the amount you EXPECT to get (the question always tells you what is expected).

If the customer then pays a different amount than expected, the difference simply goes to revenue: less money means less revenue, more money means more revenue. A seller never records "discount allowed" as an expense.`,
        ru: `Когда ВЫ предлагаете скидку за раннюю оплату, вы ещё не знаете, возьмёт ли её покупатель. Поэтому продажу записывают по сумме, которую вы ОЖИДАЕТЕ получить (в задаче всегда сказано, чего ожидают).

Если покупатель потом платит не так, как ожидалось, разница просто идёт в выручку: меньше денег — меньше выручка, больше денег — больше выручка. Продавец никогда не записывает предоставленную скидку как расход.`,
        uz: `SIZ erta to'lov chegirmasini taklif qilganingizda, mijoz uni olishini hali bilmaysiz. Shuning uchun sotuv siz OLISHNI KUTGAN summada yoziladi (masalada nima kutilishi doim aytiladi).

Mijoz keyin kutilganidan boshqacha to'lasa, farq shunchaki tushumga boradi: kam pul — kam tushum, ko'p pul — ko'p tushum. Sotuvchi berilgan chegirmani hech qachon xarajat sifatida yozmaydi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Cash transaction', ru: 'Операция за наличные', uz: 'Naqd operatsiya' },
      definition: {
        en: 'A deal settled at once, including by cheque or immediate transfer.',
        ru: 'Сделка с немедленным расчётом, в том числе чеком или мгновенным переводом.',
        uz: 'Darhol, jumladan chek yoki tezkor o\'tkazma bilan yopiladigan bitim.',
      },
      example: {
        en: 'Paying for a coffee by card at the till.',
        ru: 'Оплата кофе картой на кассе.',
        uz: 'Kassada qahvani karta bilan to\'lash.',
      },
    },
    {
      term: { en: 'Credit transaction', ru: 'Операция в кредит', uz: 'Nasiya operatsiya' },
      definition: {
        en: 'A deal where goods or services move now and payment follows later.',
        ru: 'Сделка, где товар передаётся сейчас, а оплата позже.',
        uz: 'Tovar yoki xizmat hozir, to\'lov keyin bo\'ladigan bitim.',
      },
      example: {
        en: 'A cafe buys $500 of cups now and pays in 30 days.',
        ru: 'Кафе покупает стаканы на $500 сейчас и платит через 30 дней.',
        uz: 'Kafe $500 lik stakanlarni hozir olib, 30 kundan keyin to\'laydi.',
      },
    },
    {
      term: { en: 'Petty cash', ru: 'Мелкая касса', uz: 'Mayda kassa' },
      definition: {
        en: 'A small amount of notes and coins kept for small everyday expenses.',
        ru: 'Небольшая сумма купюр и монет на мелкие повседневные расходы.',
        uz: 'Kichik kundalik xarajatlar uchun saqlanadigan oz miqdordagi naqd pul.',
      },
      example: {
        en: 'A $100 tin in the office for tea, stamps and taxis.',
        ru: 'Коробка с $100 в офисе на чай, марки и такси.',
        uz: 'Ofisdagi choy, marka va taksi uchun $100 li quti.',
      },
    },
    {
      term: { en: 'Imprest system', ru: 'Система имприст', uz: 'Imprest tizimi' },
      definition: {
        en: 'Topping up petty cash by the exact amount spent to restore a fixed float.',
        ru: 'Пополнение мелкой кассы на потраченную сумму для возврата постоянного лимита.',
        uz: 'Kichik kassani sarflangan summaga to\'ldirib, doimiy summani tiklash.',
      },
      example: {
        en: 'Float $100, spent $50, so $50 is put back to restore $100.',
        ru: 'Аванс $100, потрачено $50, значит добавляют $50, чтобы снова было $100.',
        uz: 'Avans $100, $50 sarflandi, $100 ni tiklash uchun $50 qo\'shiladi.',
      },
    },
    {
      term: { en: 'Petty cash voucher', ru: 'Кассовый ваучер', uz: 'Kassa vaucheri' },
      definition: {
        en: 'The signed record of a petty cash payment.',
        ru: 'Подписанная запись о выплате из мелкой кассы.',
        uz: 'Kichik kassa to\'lovining imzolangan yozuvi.',
      },
      example: {
        en: 'A signed slip: "Taxi to the bank, $6", with the taxi receipt stapled to it.',
        ru: 'Подписанный листок: «Такси до банка, $6», к нему прикреплён чек такси.',
        uz: 'Imzolangan varaqa: «Bankka taksi, $6», taksi cheki biriktirilgan.',
      },
    },
    {
      term: { en: 'Returns inwards', ru: 'Возвраты покупателей', uz: 'Sotuv qaytarishlari' },
      definition: {
        en: 'Goods sent back by customers. Also called sales returns.',
        ru: 'Товар, возвращённый покупателями.',
        uz: 'Mijozlar qaytargan tovar.',
      },
      example: {
        en: 'A customer brings back a $40 lamp: Dr Sales returns $40.',
        ru: 'Покупатель возвращает лампу за $40: Дт Возвраты покупателей $40.',
        uz: 'Mijoz $40 lik chiroqni qaytaradi: Dt Sotuv qaytarishlari $40.',
      },
    },
    {
      term: { en: 'Returns outwards', ru: 'Возвраты поставщикам', uz: 'Xarid qaytarishlari' },
      definition: {
        en: 'Goods sent back to suppliers. Also called purchase returns.',
        ru: 'Товар, возвращённый поставщикам.',
        uz: 'Yetkazib beruvchilarga qaytarilgan tovar.',
      },
      example: {
        en: 'You send $120 of cracked mugs back: Cr Purchase returns $120.',
        ru: 'Вы возвращаете треснувшие кружки на $120: Кт Возвраты поставщикам $120.',
        uz: '$120 lik yoriq krujkalarni qaytarasiz: Kt Xarid qaytarishlari $120.',
      },
    },
    {
      term: { en: 'Sales tax', ru: 'Налог с продаж', uz: 'Sotuv solig\'i' },
      definition: {
        en: 'An indirect tax paid by the final customer and collected by businesses for the government.',
        ru: 'Косвенный налог, который платит конечный покупатель, а бизнес собирает для государства.',
        uz: 'Oxirgi xaridor to\'laydigan va biznes davlat uchun yig\'adigan bilvosita soliq.',
      },
      example: {
        en: 'A $500 item plus 20% tax costs the customer $600. The $100 goes to the government.',
        ru: 'Товар за $500 плюс 20% налога обходится покупателю в $600. $100 уходят государству.',
        uz: '$500 lik tovar plus 20% soliq mijozga $600 turadi. $100 davlatga boradi.',
      },
    },
    {
      term: { en: 'Output tax', ru: 'Выходной налог', uz: 'Chiqish solig\'i' },
      definition: {
        en: 'Sales tax charged on sales.',
        ru: 'Налог с продаж, начисленный на продажи.',
        uz: 'Sotuvga hisoblangan sotuv solig\'i.',
      },
      example: {
        en: 'Selling a $500 cooker at 20% tax: output tax $100.',
        ru: 'Продажа плиты за $500 при налоге 20%: выходной налог $100.',
        uz: '$500 lik plitani 20% soliq bilan sotish: chiqish solig\'i $100.',
      },
    },
    {
      term: { en: 'Input tax', ru: 'Входной налог', uz: 'Kirish solig\'i' },
      definition: {
        en: 'Sales tax paid on purchases.',
        ru: 'Налог с продаж, уплаченный при закупках.',
        uz: 'Xaridlarda to\'langan sotuv solig\'i.',
      },
      example: {
        en: 'Buying goods for $360 including 20% tax: input tax $60.',
        ru: 'Покупка товара за $360 с налогом 20%: входной налог $60.',
        uz: 'Tovarni 20% soliq bilan $360 ga olish: kirish solig\'i $60.',
      },
    },
    {
      term: { en: 'Trade discount', ru: 'Торговая скидка', uz: 'Savdo chegirmasi' },
      definition: {
        en: 'A definite price reduction taken off before anything is recorded.',
        ru: 'Определённое снижение цены, вычитаемое до записи.',
        uz: 'Yozuvdan oldin ayiriladigan aniq narx pasayishi.',
      },
      example: {
        en: 'List price $400 less 10% for a big order: you record $360.',
        ru: 'Прайс $400 минус 10% за крупный заказ: записываете $360.',
        uz: 'Narx $400 minus katta buyurtma uchun 10%: $360 yoziladi.',
      },
    },
    {
      term: { en: 'Settlement discount', ru: 'Скидка за раннюю оплату', uz: 'Muddatidan oldingi to\'lov chegirmasi' },
      definition: {
        en: 'An optional discount for paying early.',
        ru: 'Необязательная скидка за раннюю оплату.',
        uz: 'Erta to\'lash uchun ixtiyoriy chegirma.',
      },
      example: {
        en: '"2% off if you pay within 10 days."',
        ru: '«Скидка 2%, если оплатите в течение 10 дней.»',
        uz: '«10 kun ichida to\'lasangiz, 2% chegirma.»',
      },
    },
    {
      term: { en: 'Discount received', ru: 'Полученная скидка', uz: 'Olingan chegirma' },
      definition: {
        en: 'A settlement discount taken by the buyer, netted off purchases.',
        ru: 'Скидка за раннюю оплату, полученная покупателем, вычитается из закупок.',
        uz: 'Xaridor olgan muddatidan oldingi to\'lov chegirmasi, xariddan ayiriladi.',
      },
      example: {
        en: 'You pay a $360 bill early and only $352.80 leaves the bank. The $7.20 saved is discount received.',
        ru: 'Вы оплатили счёт $360 рано, и из банка ушло только $352.80. Сэкономленные $7.20 — полученная скидка.',
        uz: '$360 lik hisobni erta to\'ladingiz va bankdan faqat $352.80 chiqdi. Tejalgan $7.20 — olingan chegirma.',
      },
    },
    {
      term: { en: 'Variable consideration', ru: 'Переменное возмещение', uz: 'O\'zgaruvchan to\'lov' },
      definition: {
        en: 'Revenue whose final amount is unknown at the time of sale.',
        ru: 'Выручка, итоговая сумма которой неизвестна при продаже.',
        uz: 'Yakuniy summasi sotuv paytida noma\'lum bo\'lgan tushum.',
      },
      example: {
        en: 'You sell for $1,000 with 2% off for early payment, so you might receive $1,000 or $980.',
        ru: 'Вы продаёте за $1,000 со скидкой 2% за раннюю оплату, поэтому можете получить $1,000 или $980.',
        uz: '$1,000 ga erta to\'lov uchun 2% chegirma bilan sotasiz, $1,000 yoki $980 olishingiz mumkin.',
      },
    },
    {
      term: { en: 'Carriage inwards', ru: 'Доставка от поставщика', uz: 'Yetkazib beruvchidan tashish' },
      definition: {
        en: 'The cost of bringing purchased goods into the business. It is part of cost of sales.',
        ru: 'Расходы на доставку купленного товара в бизнес. Входят в себестоимость.',
        uz: 'Sotib olingan tovarni biznesga olib kelish xarajati. Tannarxga kiradi.',
      },
      example: {
        en: '$50 paid to a lorry that brings your new stock from the supplier.',
        ru: '$50 за грузовик, который привозит новый товар от поставщика.',
        uz: 'Yangi tovarni yetkazib beruvchidan olib kelgan yuk mashinasiga $50.',
      },
    },
    {
      term: { en: 'Carriage outwards', ru: 'Доставка покупателям', uz: 'Mijozlarga tashish' },
      definition: {
        en: 'The cost of delivering goods to customers. It is an expense, not part of cost of sales.',
        ru: 'Расходы на доставку товара покупателям. Это расход, а не часть себестоимости.',
        uz: 'Tovarni mijozlarga yetkazish xarajati. Bu xarajat, tannarxning qismi emas.',
      },
      example: {
        en: '$15 courier fee to send a parcel to a customer.',
        ru: '$15 курьеру за отправку посылки покупателю.',
        uz: 'Mijozga posilka yuborish uchun kuryerga $15.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter04;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter04.id] = chapter04;
