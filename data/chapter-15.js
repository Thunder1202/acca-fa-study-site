'use strict';

const chapter15 = {
  id: 'chapter-15',
  titles: {
    en: 'Preparing basic financial statements',
    ru: 'Подготовка базовой отчётности',
    uz: 'Asosiy moliyaviy hisobotni tayyorlash',
  },
  objectives: [
    { en: 'Prepare a statement of financial position and a statement of profit or loss', ru: 'Составлять отчёт о финансовом положении и отчёт о прибыли или убытке', uz: 'Moliyaviy holat hisoboti va foyda yoki zarar hisobotini tuzish' },
    { en: 'Show other comprehensive income and changes in equity', ru: 'Показывать прочий совокупный доход и изменения капитала', uz: 'Boshqa umumlashgan daromad va kapital o\'zgarishlarini ko\'rsatish' },
    { en: 'Classify income and expenses under IFRS 18', ru: 'Классифицировать доходы и расходы по IFRS 18', uz: 'IFRS 18 bo\'yicha daromad va xarajatlarni tasniflash' },
    { en: 'Explain the purpose of disclosure notes', ru: 'Объяснять цель примечаний', uz: 'Izohlarning maqsadini tushuntirish' },
    { en: 'Classify events after the reporting period', ru: 'Классифицировать события после отчётной даты', uz: 'Hisobot sanasidan keyingi voqealarni tasniflash' },
    { en: 'Apply the five-step approach to revenue in IFRS 15', ru: 'Применять пятишаговую модель выручки IFRS 15', uz: 'IFRS 15 dagi tushumning besh bosqichli yondashuvini qo\'llash' },
  ],
  sections: [
    {
      key: {
        en: `- Process: trial balance, then year-end adjustments, then financial statements.
- Adjustments include closing inventory, depreciation, accruals, prepayments and tax.
- IFRS 18 requires: financial position, profit or loss, other comprehensive income.
- It also requires: changes in equity, cash flows and notes.
- Aggregation adds together items that share characteristics.
- Disaggregation separates an item into parts that do not share characteristics.`,
        ru: `- Порядок: оборотная ведомость, корректировки на конец года, отчётность.
- Корректировки: запасы на конец, амортизация, начисления, предоплаты, налог.
- IFRS 18 требует: финансовое положение, прибыль или убыток, прочий совокупный доход.
- А также: изменения капитала, движение денег и примечания.
- Агрегирование складывает статьи с общими характеристиками.
- Дезагрегирование разделяет статью на части без общих характеристик.`,
        uz: `- Tartib: sinov balansi, yil oxiri tuzatishlari, moliyaviy hisobot.
- Tuzatishlar: yakuniy zaxira, amortizatsiya, hisoblanganlar, oldindan to'lovlar, soliq.
- IFRS 18 talab qiladi: moliyaviy holat, foyda yoki zarar, boshqa umumlashgan daromad.
- Yana: kapital o'zgarishlari, pul oqimlari va izohlar.
- Agregatsiya umumiy xususiyatli moddalarni qo'shadi.
- Dezagregatsiya moddani umumiy xususiyatsiz qismlarga ajratadi.`,
      },
      exam: {
        en: `- Aggregation covers assets, liabilities, equity, income, expenses or cash flows. A definition that leaves out any of these is incomplete.
- ACCA may use formats and wording that differ slightly from IFRS 18.
- If an income tax debit is in the trial balance, it is last year's underprovision. Add it to this year's charge. A credit is an overprovision, so deduct it.
- The statement of financial position shows only this year's estimate as the tax liability.
- If a loss brings a tax refund, the receivable is a current asset and the refund is tax income.`,
        ru: `- Агрегирование охватывает активы, обязательства, капитал, доходы, расходы или денежные потоки. Определение без любого из них неполно.
- ACCA может использовать форматы и формулировки, немного отличающиеся от IFRS 18.
- Дебет налога на прибыль в ведомости — недоначисление прошлого года. Прибавьте его к расходу этого года. Кредит — переначисление, его вычитают.
- В отчёте о финансовом положении обязательство по налогу — только оценка этого года.
- Если убыток даёт возврат налога, требование — оборотный актив, а возврат — доход по налогу.`,
        uz: `- Agregatsiya aktivlar, majburiyatlar, kapital, daromad, xarajat yoki pul oqimlarini qamraydi. Birortasi tushib qolgan ta'rif to'liq emas.
- ACCA IFRS 18 dan biroz farq qiluvchi shakl va so'zlarni ishlatishi mumkin.
- Sinov balansidagi foyda solig'i debeti o'tgan yil kam hisoblangani. Uni shu yil xarajatiga qo'shing. Kredit ko'p hisoblangani, ayiring.
- Moliyaviy holat hisobotida soliq majburiyati faqat shu yil bahosi.
- Zarar soliq qaytarishiga olib kelsa, talab aylanma aktiv, qaytarish esa soliq daromadi.`,
      },
      heading: {
        en: 'From trial balance to financial statements',
        ru: 'От оборотной ведомости к отчётности',
        uz: 'Sinov balansidan moliyaviy hisobotgacha',
      },
      body: {
        en: `The trial balance is not the end of the work. Errors are corrected first, then the common year-end adjustments are made. These bring together earlier chapters: closing inventory, depreciation, amortisation, accruals and prepayments, irrecoverable debts and the allowance, provisions and income tax, along with events after the reporting period.

The usual entries are worth keeping in mind. Closing inventory is Dr Inventory, Cr Cost of sales. Depreciation is Dr Depreciation charge, Cr Accumulated depreciation. An accrual is Dr Expense, Cr Accrual, and a prepayment is Dr Prepayment, Cr Expense. Income tax is Dr Tax charge, Cr Tax liability, with last year's over or underprovision adjusted through the charge.

IFRS 18 Presentation and Disclosure in Financial Statements sets out the required components. Information in the statements is highly summarised. Similar items are aggregated, for example into one figure for property, plant and equipment, and the notes then disaggregate that figure so users can see the detail.`,
        ru: `Оборотная ведомость — не конец работы. Сначала исправляются ошибки, затем делаются обычные корректировки на конец года. Они объединяют прошлые главы: запасы на конец, амортизация, начисления и предоплаты, безнадёжные долги и резерв, резервы и налог на прибыль, а также события после отчётной даты.

Обычные записи стоит помнить. Запасы на конец: Дт Запасы, Кт Себестоимость продаж. Амортизация: Дт Расход по амортизации, Кт Накопленная амортизация. Начисление: Дт Расход, Кт Начисление, предоплата: Дт Предоплата, Кт Расход. Налог на прибыль: Дт Расход по налогу, Кт Обязательство по налогу, а переначисление или недоначисление прошлого года корректируется через расход.

IFRS 18 «Представление и раскрытие в финансовой отчётности» задаёт обязательные компоненты. Информация в отчётах сильно обобщена. Похожие статьи агрегируются, например в одну сумму основных средств, а примечания дезагрегируют её, чтобы показать подробности.`,
        uz: `Sinov balansi ishning oxiri emas. Avval xatolar tuzatiladi, so'ng odatiy yil oxiri tuzatishlari qilinadi. Ular oldingi boblarni birlashtiradi: yakuniy zaxira, amortizatsiya, hisoblangan va oldindan to'langanlar, undirib bo'lmaydigan qarzlar va rezerv, rezervlar va foyda solig'i, hamda hisobot sanasidan keyingi voqealar.

Odatiy yozuvlarni esda tuting. Yakuniy zaxira: Dt Zaxira, Kt Sotilgan tovar tannarxi. Amortizatsiya: Dt Amortizatsiya xarajati, Kt To'plangan amortizatsiya. Hisoblangan: Dt Xarajat, Kt Hisoblangan; oldindan to'lov: Dt Oldindan to'lov, Kt Xarajat. Foyda solig'i: Dt Soliq xarajati, Kt Soliq majburiyati, o'tgan yilning ko'p yoki kam hisoblangani xarajat orqali tuzatiladi.

IFRS 18 talab qilinadigan qismlarni belgilaydi. Hisobotdagi ma'lumot juda jamlangan. O'xshash moddalar agregatsiya qilinadi, masalan asosiy vositalar bitta summada, izohlar esa uni dezagregatsiya qilib tafsilotni ko'rsatadi.`,
      },
      example: {
        en: `Madina's Mart LLC's trial balance is done. Before the statements she posts closing inventory of $11,000, depreciation, a $500 prepayment, the allowance movement and a tax estimate of $9,000. In the notes, the single property, plant and equipment figure on the statement of financial position is split into land and buildings, fixtures and vehicles.`,
        ru: `Оборотная ведомость Madina's Mart LLC готова. Перед отчётностью она проводит запасы на конец $11,000, амортизацию, предоплату $500, изменение резерва и оценку налога $9,000. В примечаниях единая сумма основных средств из отчёта о финансовом положении разбита на землю и здания, оборудование и транспорт.`,
        uz: `Madina's Mart LLC sinov balansi tayyor. Hisobotdan oldin u $11,000 yakuniy zaxira, amortizatsiya, $500 oldindan to'lov, rezerv o'zgarishi va $9,000 soliq bahosini yozadi. Izohlarda moliyaviy holat hisobotidagi yagona asosiy vositalar summasi yer va binolar, jihozlar va transportga bo'linadi.`,
      },
    },
    {
      key: {
        en: `- The statement of financial position sets out the accounting equation.
- Assets and liabilities must be classified as current or non-current.
- Current asset: in the operating cycle, held for trading, due within 12 months, or cash.
- Current liability: in the operating cycle, or due within 12 months.
- Also current if there is no unconditional right to defer settlement for 12 months.
- The first loan instalment due within 12 months is current. The rest is non-current.`,
        ru: `- Отчёт о финансовом положении раскрывает бухгалтерское уравнение.
- Активы и обязательства делятся на оборотные и внеоборотные, кратко- и долгосрочные.
- Оборотный актив: в операционном цикле, для торговли, в течение 12 месяцев или деньги.
- Краткосрочное обязательство: в операционном цикле или срок до 12 месяцев.
- Также если нет безусловного права отсрочить погашение на 12 месяцев.
- Часть кредита к оплате за 12 месяцев — краткосрочная. Остальное — долгосрочное.`,
        uz: `- Moliyaviy holat hisoboti hisob tenglamasini ko'rsatadi.
- Aktiv va majburiyatlar qisqa va uzoq muddatliga bo'linishi shart.
- Aylanma aktiv: operatsion siklda, savdo uchun, 12 oy ichida yoki pul.
- Qisqa muddatli majburiyat: operatsion siklda yoki 12 oy ichida to'lanadi.
- 12 oyga kechiktirishga shartsiz huquq bo'lmasa ham qisqa muddatli.
- Kreditning 12 oy ichidagi qismi qisqa muddatli. Qolgani uzoq muddatli.`,
      },
      exam: {
        en: `- A debit on a bank statement is an overdraft, so it is a current liability.
- A sale on credit is a current asset even if it takes up to 12 months to collect, because it is part of the operating cycle.
- A bank overdraft is repayable on demand, so it is current even if the facility runs for three years.
- Shares held to trade are a current asset.
- A loan payable after 14 months is non-current. Moving it out of trade payables increases net current assets.
- The allowance for receivables is deducted from receivables. Rent due is a current liability.
- Net current assets = current assets - current liabilities.`,
        ru: `- Дебет в выписке банка — овердрафт, это краткосрочное обязательство.
- Продажа в кредит — оборотный актив, даже если сбор занимает до 12 месяцев, так как это часть операционного цикла.
- Овердрафт погашается по требованию, поэтому он краткосрочный, даже если лимит на три года.
- Акции для торговли — оборотный актив.
- Кредит со сроком 14 месяцев долгосрочный. Перенос его из кредиторов увеличивает чистые оборотные активы.
- Резерв по дебиторам вычитается из дебиторов. Аренда к оплате — краткосрочное обязательство.
- Чистые оборотные активы = оборотные активы - краткосрочные обязательства.`,
        uz: `- Bank ko'chirmasidagi debet overdraft, bu qisqa muddatli majburiyat.
- Nasiya sotuv yig'ish 12 oygacha cho'zilsa ham aylanma aktiv, chunki operatsion sikl qismi.
- Overdraft talab bo'yicha to'lanadi, shuning uchun limit uch yillik bo'lsa ham qisqa muddatli.
- Savdo uchun aksiyalar aylanma aktiv.
- 14 oydan keyin to'lanadigan kredit uzoq muddatli. Uni kreditorlardan ko'chirish sof aylanma aktivlarni oshiradi.
- Debitorlar rezervi debitorlardan ayiriladi. To'lanadigan ijara qisqa muddatli majburiyat.
- Sof aylanma aktivlar = aylanma aktivlar - qisqa muddatli majburiyatlar.`,
      },
      heading: {
        en: 'The statement of financial position',
        ru: 'Отчёт о финансовом положении',
        uz: 'Moliyaviy holat hisoboti',
      },
      body: {
        en: `This statement summarises assets, liabilities and equity at the end of the period. It is a standardised form of the accounting equation, and it shows total assets on one side and total equity and liabilities on the other.

The usual layout starts with non-current assets: property, plant and equipment, investments and intangibles. Current assets follow: inventories, trade and other receivables, prepayments and cash at bank. Equity comes next: ordinary share capital, share premium, revaluation surplus and retained earnings. Then come non-current liabilities, such as loan notes, and current liabilities, such as trade and other payables, overdrafts and tax payable.

IFRS 18 sets the principles for what counts as current. An asset is current if it will be realised, sold or used in the normal operating cycle, is held mainly for trading, is expected to be realised within 12 months of the reporting date, or is cash or a cash equivalent such as a 30-day bond. All other assets are non-current. This means inventory and receivables can be current even if they take over 12 months to turn into cash.

A liability is current if it will be settled in the normal operating cycle, is held mainly for trading, is due within 12 months, or if the business has no unconditional right to defer settlement for at least 12 months. All others are non-current.`,
        ru: `Этот отчёт обобщает активы, обязательства и капитал на конец периода. Это стандартная форма бухгалтерского уравнения: с одной стороны итог активов, с другой итог капитала и обязательств.

Обычно сначала идут внеоборотные активы: основные средства, инвестиции и нематериальные активы. Затем оборотные: запасы, торговая и прочая дебиторская задолженность, предоплаты и деньги в банке. Далее капитал: обыкновенные акции, эмиссионный доход, резерв переоценки и нераспределённая прибыль. Потом долгосрочные обязательства, например долговые ноты, и краткосрочные: торговая и прочая кредиторская задолженность, овердрафты и налог к уплате.

IFRS 18 задаёт принципы для оборотных статей. Актив оборотный, если он будет реализован, продан или использован в обычном операционном цикле, держится в основном для торговли, ожидается к реализации в течение 12 месяцев с отчётной даты или является деньгами или эквивалентом, например 30-дневной облигацией. Остальные внеоборотные. Поэтому запасы и дебиторы могут быть оборотными, даже если превращаются в деньги дольше 12 месяцев.

Обязательство краткосрочное, если будет погашено в обычном операционном цикле, держится в основном для торговли, срок до 12 месяцев или нет безусловного права отсрочить погашение минимум на 12 месяцев. Остальные долгосрочные.`,
        uz: `Bu hisobot davr oxiridagi aktivlar, majburiyatlar va kapitalni jamlaydi. Bu hisob tenglamasining standart shakli: bir tomonda jami aktivlar, ikkinchisida jami kapital va majburiyatlar.

Odatda avval uzoq muddatli aktivlar: asosiy vositalar, investitsiyalar va nomoddiy aktivlar. So'ng aylanma aktivlar: zaxiralar, savdo va boshqa debitorlar, oldindan to'lovlar va bankdagi pul. Keyin kapital: oddiy aksiyalar, emissiya daromadi, qayta baholash rezervi va taqsimlanmagan foyda. So'ng uzoq muddatli majburiyatlar, masalan qarz notalari, va qisqa muddatlilar: savdo va boshqa kreditorlar, overdraftlar va to'lanadigan soliq.

IFRS 18 aylanma modda tamoyillarini belgilaydi. Aktiv odatiy operatsion siklda sotilsa yoki ishlatilsa, asosan savdo uchun saqlansa, hisobot sanasidan 12 oy ichida amalga oshishi kutilsa yoki pul yoxud ekvivalenti bo'lsa, masalan 30 kunlik obligatsiya, aylanma hisoblanadi. Qolganlari uzoq muddatli. Shuning uchun zaxira va debitorlar 12 oydan ko'p vaqtda pulga aylansa ham aylanma bo'lishi mumkin.

Majburiyat odatiy operatsion siklda to'lansa, asosan savdo uchun saqlansa, 12 oy ichida to'lanishi kerak bo'lsa yoki kamida 12 oyga kechiktirishga shartsiz huquq bo'lmasa, qisqa muddatli. Qolganlari uzoq muddatli.`,
      },
      example: {
        en: `Madina's Mart LLC has a $40,000 loan repayable in four equal yearly instalments, the first in eight months. $10,000 is a current liability and $30,000 is non-current. Its bank statement shows a debit of $2,000, which is an overdraft, so that also goes in current liabilities. Inventory of $11,000 and receivables of $8,000 less a $400 allowance go in current assets at $18,600.`,
        ru: `У Madina's Mart LLC кредит $40,000 с погашением четырьмя равными годовыми платежами, первый через восемь месяцев. $10,000 — краткосрочное обязательство, $30,000 — долгосрочное. В выписке дебет $2,000: это овердрафт, он тоже краткосрочный. Запасы $11,000 и дебиторы $8,000 минус резерв $400 дают оборотные активы $18,600.`,
        uz: `Madina's Mart LLC da to'rtta teng yillik to'lovli $40,000 kredit bor, birinchisi sakkiz oydan keyin. $10,000 qisqa, $30,000 uzoq muddatli. Ko'chirmada $2,000 debet: bu overdraft, u ham qisqa muddatli. $11,000 zaxira va $8,000 debitorlar minus $400 rezerv aylanma aktivlarda $18,600.`,
      },
    },
    {
      key: {
        en: `- Profit or loss has four categories here: operating, investing, financing, income tax.
- Operating: revenue, cost of sales, distribution, administration. It is also the default.
- Investing: interest income and dividend income, shown after operating profit.
- Financing: interest expense on borrowings.
- Income tax: tax on company profits. Sales tax and tax on staff pay are not here.
- Operating expenses can be shown by function, by nature, or a mix.`,
        ru: `- В прибыли или убытке здесь четыре категории: операционная, инвестиционная, финансовая, налог.
- Операционная: выручка, себестоимость, сбыт, администрация. Это и категория по умолчанию.
- Инвестиционная: процентный и дивидендный доход, после операционной прибыли.
- Финансовая: процентный расход по займам.
- Налог на прибыль компании. Налог с продаж и налог с зарплаты сюда не входят.
- Операционные расходы показывают по функции, по характеру или смешанно.`,
        uz: `- Foyda yoki zararda bu yerda to'rt toifa: operatsion, investitsion, moliyaviy, soliq.
- Operatsion: tushum, tannarx, tarqatish, boshqaruv. Bu standart toifa ham.
- Investitsion: foiz va dividend daromadi, operatsion foydadan keyin.
- Moliyaviy: qarzlar bo'yicha foiz xarajati.
- Foyda solig'i kompaniya foydasidan. Sotuv solig'i va ish haqi solig'i kirmaydi.
- Operatsion xarajatlar funksiya, tabiat yoki aralash bo'yicha ko'rsatiladi.`,
      },
      exam: {
        en: `- Under IFRS 18, revenue, interest expense and income tax expense must be presented in the statement of profit or loss.
- With expenses by function, depreciation is not shown separately. It sits inside cost of sales, distribution or administration, and is disclosed in the notes.
- Closing inventory belongs in the statement of financial position, and dividends paid in the statement of changes in equity.
- Cost of sales = opening inventory + purchases + carriage in + its share of depreciation - closing inventory.
- Carriage out goes to distribution. An audit fee goes to administration.
- Depreciation is split by where the asset is used. A 70:30 split between factory and office puts 70% in cost of sales.
- Revenue = gross profit + cost of sales.`,
        ru: `- По IFRS 18 выручка, процентный расход и расход по налогу должны быть показаны в отчёте о прибыли или убытке.
- При расходах по функции амортизация отдельно не показывается. Она внутри себестоимости, сбыта или администрации и раскрывается в примечаниях.
- Запасы на конец — в отчёте о финансовом положении, выплаченные дивиденды — в отчёте об изменениях капитала.
- Себестоимость = запасы на начало + закупки + доставка закупок + её доля амортизации - запасы на конец.
- Доставка продаж — сбыт. Аудит — администрация.
- Амортизация делится по месту использования. Разделение 70:30 между заводом и офисом даёт 70% в себестоимость.
- Выручка = валовая прибыль + себестоимость.`,
        uz: `- IFRS 18 bo'yicha tushum, foiz xarajati va soliq xarajati foyda yoki zarar hisobotida ko'rsatilishi shart.
- Funksiya bo'yicha xarajatlarda amortizatsiya alohida ko'rsatilmaydi. U tannarx, tarqatish yoki boshqaruv ichida va izohlarda ochiladi.
- Yakuniy zaxira moliyaviy holat hisobotida, to'langan dividendlar kapital o'zgarishlari hisobotida.
- Tannarx = boshlang'ich zaxira + xaridlar + kelish tashuvi + amortizatsiya ulushi - yakuniy zaxira.
- Ketish tashuvi tarqatishga. Audit boshqaruvga.
- Amortizatsiya ishlatilish joyi bo'yicha bo'linadi. Zavod va ofis 70:30 bo'lsa, 70% tannarxga.
- Tushum = yalpi foyda + tannarx.`,
      },
      heading: {
        en: 'The statement of profit or loss',
        ru: 'Отчёт о прибыли или убытке',
        uz: 'Foyda yoki zarar hisoboti',
      },
      body: {
        en: `This statement summarises income earned and expenses incurred in the period. IFRS 18 classifies income and expenses into five categories, of which four are in the FA syllabus.

The operating category holds items from the main business activities, and anything that fits no other category. Revenue less cost of sales gives gross profit. Less distribution costs and administrative expenses gives operating profit.

The investing category comes next, and holds items such as interest income and dividend income. Rental income belongs here too, if renting is not a main activity. Adding these gives profit before financing and income taxes.

The financing category holds interest on loans and borrowings, giving profit before income taxes. The income tax category then gives profit for the year.

Operating expenses can be presented by function, such as cost of sales, distribution and administration. Here a single cost may be split across headings, for example depreciation on plant in cost of sales and on delivery vans in distribution. They can instead be presented by nature, such as materials, employee costs and depreciation. A mix is allowed, and ACCA may use either.`,
        ru: `Этот отчёт обобщает доходы и расходы периода. IFRS 18 делит их на пять категорий, четыре из которых входят в программу FA.

Операционная категория содержит статьи основной деятельности и всё, что не подходит к другим. Выручка минус себестоимость даёт валовую прибыль. Минус расходы на сбыт и административные — операционную прибыль.

Затем инвестиционная категория: процентный и дивидендный доход. Сюда же идёт доход от аренды, если аренда не основная деятельность. Вместе с ними получается прибыль до финансирования и налогов.

Финансовая категория содержит проценты по займам, что даёт прибыль до налога на прибыль. Категория налога даёт прибыль за год.

Операционные расходы можно показывать по функции: себестоимость, сбыт, администрация. Тогда одна статья может делиться, например амортизация оборудования в себестоимости, а фургонов в сбыте. Либо по характеру: материалы, персонал, амортизация. Допускается смешанный подход, ACCA может использовать любой.`,
        uz: `Bu hisobot davrdagi daromad va xarajatlarni jamlaydi. IFRS 18 ularni besh toifaga ajratadi, to'rttasi FA dasturida.

Operatsion toifada asosiy faoliyat moddalari va boshqa toifaga mos kelmagan hamma narsa bor. Tushum minus tannarx yalpi foyda beradi. Minus tarqatish va boshqaruv xarajatlari operatsion foyda beradi.

Keyin investitsion toifa: foiz va dividend daromadi. Ijara asosiy faoliyat bo'lmasa, ijara daromadi ham shu yerda. Ular bilan moliyalashtirish va soliqlardan oldingi foyda chiqadi.

Moliyaviy toifada qarzlar bo'yicha foizlar bor, bu soliqdan oldingi foydani beradi. Soliq toifasi yil foydasini beradi.

Operatsion xarajatlarni funksiya bo'yicha ko'rsatish mumkin: tannarx, tarqatish, boshqaruv. Unda bitta xarajat bo'linishi mumkin, masalan uskuna amortizatsiyasi tannarxda, furgonlarniki tarqatishda. Yoki tabiati bo'yicha: materiallar, xodimlar, amortizatsiya. Aralash ham mumkin, ACCA istalganini ishlatishi mumkin.`,
      },
      example: {
        en: `Madina's Mart LLC's year: revenue $200,000. Cost of sales is $9,000 + $120,000 - $11,000 = $118,000, so gross profit is $82,000. Distribution costs are $14,000 and administrative expenses $28,000, so operating profit is $40,000. Interest income of $500 gives profit before financing and income taxes of $40,500. Interest on borrowings of $4,000 gives profit before income taxes of $36,500. Tax of $9,000 leaves profit for the year of $27,500.`,
        ru: `Год Madina's Mart LLC: выручка $200,000. Себестоимость $9,000 + $120,000 - $11,000 = $118,000, валовая прибыль $82,000. Расходы на сбыт $14,000 и административные $28,000, операционная прибыль $40,000. Процентный доход $500 даёт прибыль до финансирования и налогов $40,500. Проценты по займам $4,000 дают прибыль до налога $36,500. Налог $9,000 оставляет прибыль за год $27,500.`,
        uz: `Madina's Mart LLC yili: tushum $200,000. Tannarx $9,000 + $120,000 - $11,000 = $118,000, yalpi foyda $82,000. Tarqatish $14,000 va boshqaruv $28,000, operatsion foyda $40,000. $500 foiz daromadi moliyalashtirish va soliqdan oldingi $40,500 foyda beradi. Qarz foizi $4,000 soliqdan oldingi $36,500 foyda beradi. $9,000 soliq yil foydasi $27,500 qoldiradi.`,
      },
    },
    {
      key: {
        en: `- Other comprehensive income holds gains not realised, mainly property revaluations.
- Profit for the year + other comprehensive income = total comprehensive income.
- It may be one combined statement or two separate ones.
- One-off items such as restructuring costs and disposal gains need their own line.
- Excess depreciation transfers go in changes in equity, not in comprehensive income.
- The current year's depreciation charge is in profit or loss, even on a revalued asset.`,
        ru: `- Прочий совокупный доход содержит нереализованные прибыли, в основном переоценку.
- Прибыль за год + прочий совокупный доход = общий совокупный доход.
- Это может быть один общий отчёт или два отдельных.
- Разовые статьи, например реструктуризация и прибыль от выбытия, идут отдельной строкой.
- Перенос избыточной амортизации идёт в изменения капитала, а не в совокупный доход.
- Амортизация года — в прибыли или убытке, даже у переоценённого актива.`,
        uz: `- Boshqa umumlashgan daromadda amalga oshmagan foyda, asosan qayta baholash bor.
- Yil foydasi + boshqa umumlashgan daromad = jami umumlashgan daromad.
- Bu bitta umumiy yoki ikkita alohida hisobot bo'lishi mumkin.
- Bir martalik moddalar, masalan qayta tuzish va sotuv foydasi alohida qatorda.
- Ortiqcha amortizatsiya o'tkazmasi kapital o'zgarishlarida, umumlashgan daromadda emas.
- Yil amortizatsiyasi qayta baholangan aktivda ham foyda yoki zararda.`,
      },
      exam: {
        en: `- A disposal gain and depreciation are in profit or loss. Only the revaluation gain is in other comprehensive income.
- Tax expense and a revaluation gain are both presented in the statement of profit or loss and other comprehensive income. The revaluation surplus is also in the statement of changes in equity and the statement of financial position.
- Disposal of a revalued asset: gain = proceeds - carrying amount, in profit or loss. The surplus moves to retained earnings within changes in equity.
- Excess depreciation = new annual charge - old annual charge.
- Revaluing a depreciated asset: Dr Asset (up to the valuation), Dr Accumulated depreciation, Cr Revaluation surplus for valuation less carrying amount.
- Development costs that meet the criteria are capitalised, so they are not an expense.`,
        ru: `- Прибыль от выбытия и амортизация — в прибыли или убытке. В прочем совокупном доходе только прирост от переоценки.
- Расход по налогу и прирост от переоценки показываются в отчёте о прибыли или убытке и прочем совокупном доходе. Резерв переоценки есть и в отчёте об изменениях капитала, и в отчёте о финансовом положении.
- Выбытие переоценённого актива: прибыль = выручка - балансовая стоимость, в прибыли или убытке. Резерв переносится в нераспределённую прибыль в изменениях капитала.
- Избыточная амортизация = новое годовое начисление - прежнее.
- Переоценка амортизируемого актива: Дт Актив (до оценки), Дт Накопленная амортизация, Кт Резерв переоценки на оценку минус балансовую стоимость.
- Затраты на разработку, отвечающие критериям, капитализируются, поэтому это не расход.`,
        uz: `- Sotuv foydasi va amortizatsiya foyda yoki zararda. Boshqa umumlashgan daromadda faqat qayta baholash foydasi.
- Soliq xarajati va qayta baholash foydasi foyda yoki zarar va boshqa umumlashgan daromad hisobotida. Qayta baholash rezervi kapital o'zgarishlari va moliyaviy holat hisobotida ham bor.
- Qayta baholangan aktiv chiqishi: foyda = tushum - balans qiymati, foyda yoki zararda. Rezerv kapital o'zgarishlarida taqsimlanmagan foydaga o'tadi.
- Ortiqcha amortizatsiya = yangi yillik summa - eski yillik summa.
- Amortizatsiyalangan aktivni qayta baholash: Dt Aktiv (bahogacha), Dt To'plangan amortizatsiya, Kt Qayta baholash rezervi, baho minus balans qiymatiga.
- Mezonlarga mos ishlanma xarajatlari kapitallashtiriladi, xarajat emas.`,
      },
      heading: {
        en: 'Other comprehensive income',
        ru: 'Прочий совокупный доход',
        uz: 'Boshqa umumlashgan daromad',
      },
      body: {
        en: `Some gains made in a period are not realised. The best example is the revaluation of tangible non-current assets. Until the asset is sold and turned into cash, the gain is only what would be made if it were sold. It therefore stays out of profit for the year, which represents realised profit, and is added on at the end as other comprehensive income. This gives total comprehensive income for the year.

A revaluation gain is an item that will not be reclassified to profit or loss in future periods. An entity can present one combined statement, or a statement of profit or loss with a separate statement presenting other comprehensive income.

Some significant one-off items are not part of normal trading and could distort reported results. They need separate disclosure on their own line, or in the notes. Examples are the cost of a restructuring, profits or losses on disposal of property, plant and equipment or investments, and impairments of inventory or property, plant and equipment.`,
        ru: `Некоторые прибыли периода не реализованы. Лучший пример — переоценка материальных внеоборотных активов. Пока актив не продан, прирост — лишь то, что было бы получено при продаже. Поэтому он не входит в прибыль за год, отражающую реализованную прибыль, и добавляется в конце как прочий совокупный доход. Так получается общий совокупный доход за год.

Прирост от переоценки — статья, которая не будет реклассифицирована в прибыль или убыток в будущем. Компания может показать один общий отчёт либо отчёт о прибыли или убытке и отдельный отчёт о прочем совокупном доходе.

Некоторые существенные разовые статьи не относятся к обычной торговле и могут исказить результаты. Им нужна отдельная строка или примечание. Примеры: затраты на реструктуризацию, прибыль или убыток от выбытия основных средств или инвестиций, обесценение запасов или основных средств.`,
        uz: `Davrdagi ba'zi foydalar amalga oshmagan. Eng yaxshi misol moddiy uzoq muddatli aktivlarni qayta baholash. Aktiv sotilmaguncha foyda faqat sotilsa olinadigan summa. Shuning uchun u amalga oshgan foydani ko'rsatuvchi yil foydasiga kirmaydi va oxirida boshqa umumlashgan daromad sifatida qo'shiladi. Bu yilning jami umumlashgan daromadini beradi.

Qayta baholash foydasi kelajakda foyda yoki zararga qayta tasniflanmaydigan modda. Korxona bitta umumiy hisobot yoki foyda yoki zarar hisoboti va alohida boshqa umumlashgan daromad hisobotini berishi mumkin.

Ba'zi muhim bir martalik moddalar oddiy savdoga kirmaydi va natijalarni buzishi mumkin. Ular alohida qator yoki izoh talab qiladi. Misollar: qayta tuzish xarajati, asosiy vositalar yoki investitsiyalar chiqishidan foyda yoki zarar, zaxira yoki asosiy vositalar qadrsizlanishi.`,
      },
      example: {
        en: `Madina's Mart LLC's profit for the year is $27,500. Its shop building is revalued upward by $20,000. That is added below profit, so total comprehensive income is $47,500. Profit stays at $27,500, because the building has not been sold. If it also spent $5,000 closing a branch, that would be on a line of its own, so readers can see it is a one-off cost.`,
        ru: `Прибыль Madina's Mart LLC за год $27,500. Здание магазина переоценено вверх на $20,000. Это добавляется ниже прибыли, и общий совокупный доход равен $47,500. Прибыль остаётся $27,500, потому что здание не продано. Если компания также потратила $5,000 на закрытие филиала, это отдельная строка, чтобы читатели видели разовый расход.`,
        uz: `Madina's Mart LLC yil foydasi $27,500. Do'kon binosi $20,000 ga qayta baholandi. Bu foydadan pastga qo'shiladi, jami umumlashgan daromad $47,500. Foyda $27,500 qoladi, chunki bino sotilmagan. Agar filialni yopishga $5,000 sarflagan bo'lsa, bu alohida qatorda, o'quvchilar bir martalik xarajatni ko'rishi uchun.`,
      },
    },
    {
      key: {
        en: `- Changes in equity shows the opening and closing balance of each equity account.
- Columns: share capital, share premium, revaluation surplus, retained earnings, total.
- Profit adds to retained earnings. Dividends paid come off it.
- Revaluation gains go to the revaluation surplus. Share issues go to capital and premium.
- A sole trader: closing capital = opening capital + capital introduced + profit - drawings.
- Profit = closing capital - opening capital + drawings - capital introduced.`,
        ru: `- Изменения капитала показывают остатки на начало и конец по каждому счёту капитала.
- Столбцы: акции, эмиссионный доход, резерв переоценки, нераспределённая прибыль, итог.
- Прибыль добавляется к нераспределённой прибыли. Выплаченные дивиденды вычитаются.
- Переоценка идёт в резерв переоценки. Выпуск акций — в капитал и эмиссионный доход.
- Предприниматель: капитал на конец = на начало + внесённый + прибыль - изъятия.
- Прибыль = капитал на конец - на начало + изъятия - внесённый капитал.`,
        uz: `- Kapital o'zgarishlari har bir kapital hisobining boshi va oxirini ko'rsatadi.
- Ustunlar: aksiyalar, emissiya daromadi, qayta baholash rezervi, taqsimlanmagan foyda, jami.
- Foyda taqsimlanmagan foydaga qo'shiladi. To'langan dividendlar ayiriladi.
- Qayta baholash rezervga, aksiya chiqarish kapital va emissiya daromadiga o'tadi.
- Yakka tadbirkor: yakuniy kapital = boshlang'ich + kiritilgan + foyda - olib qo'yishlar.
- Foyda = yakuniy kapital - boshlang'ich + olib qo'yishlar - kiritilgan kapital.`,
      },
      exam: {
        en: `- Capital equals net assets. Paying a supplier or buying on credit leaves net assets unchanged. Paying wages reduces them.
- Treating goods taken by the owner as drawings follows the separate entity concept.
- Goods taken as drawings reduce cost of sales.
- Sales for cash and on credit change capital only by the profit made.
- Dividends paid appear in the statement of cash flows and the statement of changes in equity.
- A dividend declared after the year end is not in that year's accounts, and it is never deducted in profit or loss.
- Preference dividends due but unpaid at the year end are accrued. An equity dividend is accrued only if declared before the year end.
- Preference shares generally carry no vote. Their dividend is paid before equity dividends and is a fixed amount.
- Paying a dividend reduces reserves. Transfers within equity leave the total unchanged, and a share issue at a premium increases it.`,
        ru: `- Капитал равен чистым активам. Оплата поставщику и покупка в кредит не меняют чистые активы. Выплата зарплаты уменьшает их.
- Товар, взятый владельцем, считается изъятием по концепции отдельного предприятия.
- Товар, взятый как изъятие, уменьшает себестоимость.
- Продажи меняют капитал только на величину прибыли.
- Выплаченные дивиденды есть в отчёте о движении денег и отчёте об изменениях капитала.
- Дивиденд, объявленный после конца года, не входит в отчётность этого года и никогда не вычитается в прибыли или убытке.
- Неуплаченные привилегированные дивиденды начисляются на конец года. Дивиденд по обыкновенным акциям — только если объявлен до конца года.
- Привилегированные акции обычно без голоса. Их дивиденд платится раньше и фиксирован.
- Выплата дивиденда уменьшает резервы. Переносы внутри капитала итог не меняют, а выпуск с премией увеличивает его.`,
        uz: `- Kapital sof aktivlarga teng. Yetkazib beruvchiga to'lash yoki nasiyaga olish sof aktivlarni o'zgartirmaydi. Ish haqi to'lash kamaytiradi.
- Egasi olgan tovarni olib qo'yish deb hisoblash alohidalik tamoyiliga mos.
- Olib qo'yilgan tovar tannarxni kamaytiradi.
- Sotuvlar kapitalni faqat foyda miqdorida o'zgartiradi.
- To'langan dividendlar pul oqimlari va kapital o'zgarishlari hisobotlarida bor.
- Yil oxiridan keyin e'lon qilingan dividend shu yil hisobotiga kirmaydi va foyda yoki zararda hech qachon ayirilmaydi.
- To'lanmagan imtiyozli dividendlar yil oxirida hisoblanadi. Oddiy aksiya dividendi faqat yil oxiridan oldin e'lon qilingan bo'lsa.
- Imtiyozli aksiyalar odatda ovozsiz. Dividendi oldin to'lanadi va qat'iy.
- Dividend to'lash rezervlarni kamaytiradi. Kapital ichidagi o'tkazmalar jamni o'zgartirmaydi, mukofotli chiqarish oshiradi.`,
      },
      heading: {
        en: 'Changes in equity and how the statements link',
        ru: 'Изменения капитала и связь отчётов',
        uz: 'Kapital o\'zgarishlari va hisobotlar bog\'liqligi',
      },
      body: {
        en: `Equity is the owners' interest: what would be left for them if the assets were sold and the liabilities paid. It is made up of share capital, share premium and reserves, mainly the revaluation surplus and retained earnings.

The revaluation surplus records unrealised gains on revalued assets. Retained earnings are the total of realised profits and losses made since incorporation that have not been paid out as dividends.

Shareholders want to understand movements in these balances, so the statement of changes in equity shows the opening and closing position of every equity account and the reason for each movement.

The statements fit together. Profit or loss for the year goes into retained earnings. Dividends paid come out of them. Closing balances from the statement of changes in equity become the equity section of the statement of financial position. Cash raised from share issues or paid as dividends shows up in the bank balance.

For a sole trader the idea is simpler. Capital rises with profit and new capital, and falls with drawings. Because capital equals net assets, these relationships can be used to find a missing figure.`,
        ru: `Капитал — доля владельцев: то, что останется им, если активы продать, а обязательства погасить. Он состоит из акционерного капитала, эмиссионного дохода и резервов, в основном резерва переоценки и нераспределённой прибыли.

Резерв переоценки отражает нереализованный прирост. Нераспределённая прибыль — сумма реализованных прибылей и убытков с момента регистрации, не выплаченных дивидендами.

Акционеры хотят понимать движение этих остатков, поэтому отчёт об изменениях капитала показывает начало и конец каждого счёта капитала и причину каждого движения.

Отчёты связаны. Прибыль или убыток за год идёт в нераспределённую прибыль. Выплаченные дивиденды выходят из неё. Остатки на конец становятся разделом капитала в отчёте о финансовом положении. Деньги от выпуска акций или выплаченные дивиденды отражаются в остатке банка.

У предпринимателя проще. Капитал растёт от прибыли и нового капитала и падает от изъятий. Так как капитал равен чистым активам, эти связи помогают найти недостающую сумму.`,
        uz: `Kapital egalarning ulushi: aktivlar sotilib, majburiyatlar to'langach ularga qoladigan summa. U aksiya kapitali, emissiya daromadi va rezervlardan, asosan qayta baholash rezervi va taqsimlanmagan foydadan iborat.

Qayta baholash rezervi amalga oshmagan foydani yozadi. Taqsimlanmagan foyda ro'yxatdan o'tgandan beri amalga oshgan, dividend sifatida to'lanmagan foyda va zararlar jami.

Aksiyadorlar bu qoldiqlar harakatini tushunishni xohlaydi, shuning uchun kapital o'zgarishlari hisoboti har bir kapital hisobining boshi va oxirini hamda har bir harakat sababini ko'rsatadi.

Hisobotlar bog'liq. Yil foydasi yoki zarari taqsimlanmagan foydaga kiradi. To'langan dividendlar undan chiqadi. Yakuniy qoldiqlar moliyaviy holat hisobotining kapital bo'limi bo'ladi. Aksiya chiqarishdan pul yoki to'langan dividendlar bank qoldig'ida ko'rinadi.

Yakka tadbirkorda soddaroq. Kapital foyda va yangi kapital bilan oshadi, olib qo'yishlar bilan kamayadi. Kapital sof aktivlarga teng bo'lgani uchun bu bog'lanishlar yetishmagan summani topishga yordam beradi.`,
      },
      example: {
        en: `Madina's Mart LLC starts the year with retained earnings of $30,000. Profit is $27,500 and dividends of $13,200 are paid, so closing retained earnings are $44,300. The revaluation surplus rises by $20,000. These closing balances go straight into the equity section of the statement of financial position. Back when Madina was a sole trader, she started with capital of $8,000, added $2,000, made a profit of $5,000 and drew $3,000, leaving capital of $12,000.`,
        ru: `Madina's Mart LLC начинает год с нераспределённой прибылью $30,000. Прибыль $27,500, дивиденды $13,200, на конец $44,300. Резерв переоценки растёт на $20,000. Эти остатки идут прямо в раздел капитала отчёта о финансовом положении. Когда Мадина была предпринимателем, она начала с капитала $8,000, добавила $2,000, заработала $5,000 и изъяла $3,000, капитал стал $12,000.`,
        uz: `Madina's Mart LLC yilni $30,000 taqsimlanmagan foyda bilan boshlaydi. Foyda $27,500, dividendlar $13,200, yakuniy $44,300. Qayta baholash rezervi $20,000 oshadi. Bu qoldiqlar to'g'ridan-to'g'ri moliyaviy holat hisobotining kapital bo'limiga kiradi. Madina yakka tadbirkor bo'lganda $8,000 kapital bilan boshlagan, $2,000 qo'shgan, $5,000 foyda qilgan va $3,000 olgan, kapital $12,000 bo'lgan.`,
      },
    },
    {
      key: {
        en: `- Notes explain accounting policies and show movements in major balances.
- They show how balances are made up and add detail users need.
- For FA: inventory, tangible and intangible non-current assets, provisions, events after the reporting period.
- Disclosures can be monetary or narrative, and they are part of the financial statements.
- Disclose useful lives or depreciation rates, not necessarily both.
- A provision note reconciles opening to closing, not just the two balances.`,
        ru: `- Примечания объясняют учётную политику и показывают движение крупных остатков.
- Они показывают состав остатков и добавляют нужные детали.
- Для FA: запасы, материальные и нематериальные внеоборотные активы, резервы, события после отчётной даты.
- Раскрытия бывают денежные и описательные, они — часть отчётности.
- Раскрывайте сроки или ставки амортизации, не обязательно то и другое.
- Примечание о резерве сверяет начало с концом, а не только два остатка.`,
        uz: `- Izohlar hisob siyosatini tushuntiradi va yirik qoldiqlar harakatini ko'rsatadi.
- Ular qoldiqlar tarkibini ko'rsatadi va kerakli tafsilot qo'shadi.
- FA uchun: zaxira, moddiy va nomoddiy uzoq muddatli aktivlar, rezervlar, hisobot sanasidan keyingi voqealar.
- Ochib berishlar pulli yoki tavsifiy, ular hisobot qismi.
- Foydali muddat yoki amortizatsiya stavkasini oching, ikkalasi shart emas.
- Rezerv izohi faqat ikki qoldiqni emas, boshidan oxirigacha solishtiradi.`,
      },
      exam: {
        en: `- Intangibles note: accumulated amortisation at the start and end, and a reconciliation of carrying amount. A directors' statement on recoverability is not needed.
- A good policy note for intangibles: cost model, amortised over stated lives on a stated basis.
- A good policy note for land and buildings says land is not depreciated. Buildings are written off over a stated life.
- Inventory policy: lower of cost and NRV for each separate item.
- PPE note: a reconciliation, useful lives or rates, revaluation increases, the depreciation charge.
- Revaluation note: the date, whether the valuer was independent, and the carrying amount at historical cost.
- Non-adjusting event note: nature and estimated financial effect. Names and locations are not needed.
- Provision note: nature, timing, uncertainties. The name of the other party is not needed.
- The warranty expense is the increase in the provision. Payments use the provision up, so they are not an expense.
- Intangibles are presented at cost or valuation, less amortisation and impairment.`,
        ru: `- Примечание о нематериальных активах: накопленная амортизация на начало и конец и сверка балансовой стоимости. Заявление директоров о возмещаемости не нужно.
- Хорошая политика для нематериальных активов: модель по стоимости, амортизация в указанные сроки на указанной основе.
- Хорошая политика для земли и зданий говорит, что земля не амортизируется, а здания списываются за указанный срок.
- Политика запасов: меньшая из стоимости и ЧСР по каждой позиции.
- Примечание об основных средствах: сверка, сроки или ставки, прирост от переоценки, амортизация.
- Примечание о переоценке: дата, независимость оценщика, балансовая стоимость по исторической стоимости.
- Примечание о некорректирующем событии: характер и оценка эффекта. Имена и места не нужны.
- Примечание о резерве: характер, срок, неопределённости. Имя другой стороны не нужно.
- Расход на гарантию — рост резерва. Выплаты используют резерв и расходом не являются.
- Нематериальные активы показываются по стоимости или оценке за вычетом амортизации и обесценения.`,
        uz: `- Nomoddiy aktivlar izohi: boshi va oxiridagi to'plangan amortizatsiya va balans qiymati solishtirishi. Direktorlarning qoplanish bayonoti kerak emas.
- Nomoddiy aktivlar uchun yaxshi siyosat: qiymat modeli, ko'rsatilgan muddat va asosda amortizatsiya.
- Yer va binolar uchun yaxshi siyosat: yer amortizatsiyalanmaydi, binolar ko'rsatilgan muddatda hisobdan chiqariladi.
- Zaxira siyosati: har bir modda bo'yicha qiymat va SSQ ning kichigi.
- Asosiy vositalar izohi: solishtirish, muddat yoki stavkalar, qayta baholash o'sishi, amortizatsiya.
- Qayta baholash izohi: sana, baholovchi mustaqilligi, tarixiy qiymatdagi balans qiymati.
- Tuzatmaydigan voqea izohi: mohiyat va moliyaviy ta'sir bahosi. Ismlar va joylar kerak emas.
- Rezerv izohi: mohiyat, muddat, noaniqliklar. Boshqa tomon nomi kerak emas.
- Kafolat xarajati rezerv o'sishi. To'lovlar rezervni ishlatadi, xarajat emas.
- Nomoddiy aktivlar qiymat yoki baho minus amortizatsiya va qadrsizlanishda ko'rsatiladi.`,
      },
      heading: {
        en: 'Disclosure notes',
        ru: 'Примечания',
        uz: 'Izohlar',
      },
      body: {
        en: `Disclosure notes are part of the financial statements. They explain the accounting policies used, show the movement between opening and closing balances on major items, show how certain balances are made up, and give whatever further detail users need to understand the statements.

For FA you do not need every possible note. The ones to know are those for inventory, tangible and intangible non-current assets, provisions, and events after the reporting period. Earlier chapters explain most of them.

A policy note should be specific and accurate. It should say which measurement model is used, how assets are written off and over what period. A note that merely says the same policy is used for two kinds of asset, or that gives directors unlimited judgement, does not help anyone.

Notes can be figures, such as a table of movements, or words, such as a description of how depreciation is calculated. Most requirements are met by a mix of the two.`,
        ru: `Примечания — часть финансовой отчётности. Они объясняют учётную политику, показывают движение между началом и концом по крупным статьям, показывают состав некоторых остатков и дают то, что нужно пользователям для понимания отчётов.

Для FA не нужны все возможные примечания. Важны: запасы, материальные и нематериальные внеоборотные активы, резервы и события после отчётной даты. Большинство объяснено в прошлых главах.

Примечание о политике должно быть конкретным и точным. Оно говорит, какая модель оценки используется, как и за какой срок списываются активы. Примечание, где просто сказано, что политика одинакова для двух видов активов, или где директорам дана неограниченная свобода, никому не помогает.

Примечания бывают числовыми, например таблица движения, или словесными, например описание расчёта амортизации. Большинство требований выполняется их сочетанием.`,
        uz: `Izohlar moliyaviy hisobot qismi. Ular hisob siyosatini tushuntiradi, yirik moddalar bo'yicha boshi va oxiri orasidagi harakatni ko'rsatadi, ba'zi qoldiqlar tarkibini ko'rsatadi va foydalanuvchilarga kerakli tafsilotni beradi.

FA uchun barcha izohlar kerak emas. Muhimlari: zaxira, moddiy va nomoddiy uzoq muddatli aktivlar, rezervlar va hisobot sanasidan keyingi voqealar. Ko'pchiligi oldingi boblarda tushuntirilgan.

Siyosat izohi aniq bo'lishi kerak. U qaysi o'lchash modeli ishlatilishini, aktivlar qanday va qancha muddatda hisobdan chiqarilishini aytadi. Faqat ikki xil aktiv uchun siyosat bir xil deyilgan yoki direktorlarga cheksiz erkinlik berilgan izoh hech kimga foyda bermaydi.

Izohlar raqamli, masalan harakat jadvali, yoki so'zli, masalan amortizatsiya hisob-kitobi tavsifi bo'lishi mumkin. Ko'p talablar ularning aralashmasi bilan bajariladi.`,
      },
      example: {
        en: `Madina's Mart LLC's policy note reads: "Land and buildings are shown at cost. Land is not depreciated. Buildings are depreciated on a straight-line basis over 50 years." Its warranty note shows: opening $6,000, increase in provision $1,200, payments $2,900, closing $4,300. Only the $1,200 is an expense for the year.`,
        ru: `Примечание о политике Madina's Mart LLC: «Земля и здания показаны по стоимости. Земля не амортизируется. Здания амортизируются прямолинейно в течение 50 лет». Примечание о гарантии: на начало $6,000, рост резерва $1,200, выплаты $2,900, на конец $4,300. Расход года — только $1,200.`,
        uz: `Madina's Mart LLC siyosat izohi: "Yer va binolar qiymatda ko'rsatilgan. Yer amortizatsiyalanmaydi. Binolar 50 yil davomida to'g'ri chiziqli amortizatsiyalanadi." Kafolat izohi: boshida $6,000, rezerv o'sishi $1,200, to'lovlar $2,900, oxirida $4,300. Yil xarajati faqat $1,200.`,
      },
    },
    {
      key: {
        en: `- Events after the reporting period fall between the reporting date and approval.
- Adjusting: evidence of conditions at the reporting date. Change the figures.
- Non-adjusting: conditions arising afterwards. No change, but disclose if material.
- Adjusting examples: a customer's bankruptcy, inventory sold below cost, a court case settled.
- Non-adjusting examples: a fire, a share issue, a major purchase, a new court case.
- A dividend declared after the reporting date is non-adjusting.`,
        ru: `- События после отчётной даты — между этой датой и утверждением отчётности.
- Корректирующие: свидетельство условий на отчётную дату. Цифры меняются.
- Некорректирующие: условия, возникшие позже. Цифры те же, раскрыть, если существенно.
- Примеры корректирующих: банкротство покупателя, продажа ниже стоимости, решение суда.
- Примеры некорректирующих: пожар, выпуск акций, крупная покупка, новый иск.
- Дивиденд, объявленный после отчётной даты, — некорректирующее событие.`,
        uz: `- Hisobot sanasidan keyingi voqealar shu sana va tasdiqlash orasida bo'ladi.
- Tuzatuvchi: hisobot sanasidagi holat dalili. Raqamlar o'zgaradi.
- Tuzatmaydigan: keyin paydo bo'lgan holat. O'zgarish yo'q, muhim bo'lsa ochiladi.
- Tuzatuvchi misollar: mijoz bankrotligi, tannarxdan past sotuv, sud qarori.
- Tuzatmaydigan misollar: yong'in, aksiya chiqarish, yirik xarid, yangi sud ishi.
- Hisobot sanasidan keyin e'lon qilingan dividend tuzatmaydigan.`,
      },
      exam: {
        en: `- The cut-off is the date the directors approve the statements, not the date they go to shareholders.
- Adjusting events change the amounts. They are not written up in the notes.
- A fall in market value of property, plant and equipment after the year end is non-adjusting.
- If a post year-end event means the business is no longer a going concern, the basis of the accounts changes, so the figures do change.
- A small loss of inventory from a flood after the year end is non-adjusting.
- A claim about a faulty product sold before the year end is adjusting. A claim about one sold after the year end is non-adjusting.
- An unfair dismissal in the year, with a claim arriving after the year end, is adjusting.
- A dividend proposed before the year end but paid after is not an adjusting event.
- Receipt of insurance money for a claim made before the year end is adjusting.`,
        ru: `- Граница — дата утверждения директорами, а не дата отправки акционерам.
- Корректирующие события меняют суммы. В примечаниях они не описываются.
- Падение рыночной стоимости основных средств после конца года — некорректирующее.
- Если событие после конца года означает, что бизнес больше не непрерывен, меняется основа отчётности, и цифры меняются.
- Малая потеря запасов от наводнения после конца года — некорректирующая.
- Иск о браке, проданном до конца года, — корректирующий. О проданном после — некорректирующий.
- Незаконное увольнение в течение года с иском после конца года — корректирующее.
- Дивиденд, предложенный до конца года и выплаченный после, — не корректирующее событие.
- Получение страховых денег по требованию, поданному до конца года, — корректирующее.`,
        uz: `- Chegara direktorlar tasdiqlagan sana, aksiyadorlarga yuborilgan sana emas.
- Tuzatuvchi voqealar summalarni o'zgartiradi. Ular izohlarda yozilmaydi.
- Yil oxiridan keyin asosiy vositalar bozor qiymatining pasayishi tuzatmaydigan.
- Yil oxiridan keyingi voqea biznes uzluksiz emasligini bildirsa, hisobot asosi o'zgaradi va raqamlar o'zgaradi.
- Yil oxiridan keyin toshqindan kichik zaxira yo'qotilishi tuzatmaydigan.
- Yil oxirigacha sotilgan nosoz mahsulot da'vosi tuzatuvchi. Keyin sotilgani tuzatmaydigan.
- Yil davomida noqonuniy bo'shatish, da'vo yil oxiridan keyin, tuzatuvchi.
- Yil oxirigacha taklif qilinib, keyin to'langan dividend tuzatuvchi emas.
- Yil oxirigacha qilingan da'vo bo'yicha sug'urta pulini olish tuzatuvchi.`,
      },
      heading: {
        en: 'Events after the reporting period (IAS 10)',
        ru: 'События после отчётной даты (IAS 10)',
        uz: 'Hisobot sanasidan keyingi voqealar (IAS 10)',
      },
      body: {
        en: `IAS 10 defines these as events, favourable or unfavourable, that happen between the end of the reporting period and the date the financial statements are authorised for issue.

Adjusting events give more evidence of conditions that already existed at the reporting date. If material, the statements are amended. Examples are settling a court case that confirms a year-end obligation, information that an asset was impaired, a customer's bankruptcy confirming that a year-end debt is irrecoverable, inventory sold below cost, fixing the cost of assets bought or proceeds of assets sold before the year end, and finding fraud or errors.

Non-adjusting events relate to conditions that arose after the reporting date, so the amounts do not change. If they are material, a note is needed so that the statements are not misleading. Examples are announcing a plan to discontinue an operation, major purchases of assets, destruction of assets by fire or flood, entering into significant commitments, and starting a court case about events after the reporting date.

A note on a material non-adjusting event gives the nature of the event and an estimate of its financial effect, or a statement that no estimate can be made.`,
        ru: `IAS 10 определяет их как события, благоприятные или нет, происходящие между концом отчётного периода и датой утверждения отчётности к выпуску.

Корректирующие события дают дополнительное свидетельство условий, уже существовавших на отчётную дату. Если они существенны, отчётность исправляется. Примеры: решение суда, подтверждающее обязанность на конец года; сведения об обесценении актива; банкротство покупателя, подтверждающее безнадёжность долга; продажа запасов ниже стоимости; определение стоимости активов, купленных или проданных до конца года; обнаружение мошенничества или ошибок.

Некорректирующие события относятся к условиям, возникшим после отчётной даты, поэтому суммы не меняются. Если они существенны, нужно примечание, чтобы отчётность не вводила в заблуждение. Примеры: объявление о прекращении деятельности, крупные покупки активов, уничтожение активов пожаром или наводнением, существенные обязательства и начало судебного дела о событиях после отчётной даты.

Примечание о существенном некорректирующем событии даёт его характер и оценку финансового эффекта или заявление, что оценку сделать нельзя.`,
        uz: `IAS 10 ularni hisobot davri oxiri va hisobotni chiqarishga tasdiqlash sanasi orasida bo'ladigan, ijobiy yoki salbiy voqealar deb ta'riflaydi.

Tuzatuvchi voqealar hisobot sanasida mavjud bo'lgan holat haqida qo'shimcha dalil beradi. Muhim bo'lsa, hisobot o'zgartiriladi. Misollar: yil oxiridagi burchni tasdiqlovchi sud qarori, aktiv qadrsizlangani haqida ma'lumot, qarz undirilmasligini tasdiqlovchi mijoz bankrotligi, tannarxdan past sotuv, yil oxirigacha olingan yoki sotilgan aktivlar qiymatini aniqlash, firibgarlik yoki xatolarni topish.

Tuzatmaydigan voqealar hisobot sanasidan keyin paydo bo'lgan holatlarga tegishli, summalar o'zgarmaydi. Muhim bo'lsa, hisobot chalg'itmasligi uchun izoh kerak. Misollar: faoliyatni to'xtatish rejasi e'loni, yirik aktiv xaridlari, yong'in yoki toshqin bilan aktivlar yo'qolishi, muhim majburiyatlar va hisobot sanasidan keyingi voqealar bo'yicha sud ishi boshlanishi.

Muhim tuzatmaydigan voqea izohi uning mohiyati va moliyaviy ta'sir bahosini yoki baho berib bo'lmasligini aytadi.`,
      },
      example: {
        en: `Madina's Mart LLC's year ends on 31 December and the accounts are approved on 20 March. On 15 January Cafe Aziz, which owed $800 at the year end, goes bankrupt: adjusting, so she writes the debt off. In January some inventory is sold below cost: adjusting. On 10 February a fire destroys $5,000 of goods bought after the year end: non-adjusting, so she only adds a note if it is material. A dividend declared on 1 February is non-adjusting too.`,
        ru: `Год Madina's Mart LLC заканчивается 31 декабря, отчётность утверждается 20 марта. 15 января Cafe Aziz, должное $800 на конец года, банкротится: корректирующее, долг списывается. В январе часть запасов продана ниже стоимости: корректирующее. 10 февраля пожар уничтожает товар на $5,000, купленный после конца года: некорректирующее, только примечание, если существенно. Дивиденд, объявленный 1 февраля, тоже некорректирующий.`,
        uz: `Madina's Mart LLC yili 31 dekabrda tugaydi, hisobot 20 martda tasdiqlanadi. 15 yanvarda yil oxirida $800 qarzdor Cafe Aziz bankrot bo'ladi: tuzatuvchi, qarz yozib yuboriladi. Yanvarda ba'zi zaxira tannarxdan past sotiladi: tuzatuvchi. 10 fevralda yong'in yil oxiridan keyin olingan $5,000 tovarni yo'q qiladi: tuzatmaydigan, muhim bo'lsa faqat izoh. 1 fevralda e'lon qilingan dividend ham tuzatmaydigan.`,
      },
    },
    {
      key: {
        en: `- Revenue is income from an entity's ordinary activities, excluding sales tax.
- Step 1: identify the contract. Step 2: identify the performance obligations.
- Step 3: determine the transaction price. Step 4: allocate it to the obligations.
- Step 5: recognise revenue when, or as, each obligation is satisfied.
- Goods: usually at a point in time, when control transfers. Services: usually over time.
- An agent recognises only its commission as revenue.`,
        ru: `- Выручка — доход от обычной деятельности, без налога с продаж.
- Шаг 1: определить договор. Шаг 2: определить обязанности к исполнению.
- Шаг 3: определить цену сделки. Шаг 4: распределить её по обязанностям.
- Шаг 5: признать выручку при исполнении или по мере исполнения обязанности.
- Товары: обычно в момент передачи контроля. Услуги: обычно в течение времени.
- Агент признаёт выручкой только свою комиссию.`,
        uz: `- Tushum korxonaning odatiy faoliyatidan daromad, sotuv solig'isiz.
- 1-qadam: shartnomani aniqlash. 2-qadam: bajarish majburiyatlarini aniqlash.
- 3-qadam: bitim narxini aniqlash. 4-qadam: uni majburiyatlarga taqsimlash.
- 5-qadam: har bir majburiyat bajarilganda tushumni tan olish.
- Tovarlar: odatda nazorat o'tgan paytda. Xizmatlar: odatda vaqt davomida.
- Agent faqat komissiyasini tushum deb tan oladi.`,
      },
      exam: {
        en: `- Contracts do not have to be in writing.
- Revenue is recognised at a point in time or over a period of time. "Annually" and "on any reasonable basis" are not acceptable.
- Payment timing does not matter. Revenue follows satisfying the obligation, not receiving cash.
- Advance orders and deposits are deferred income, a current liability, until the goods are delivered.
- Selling a business's own van is a disposal, not revenue, unless selling vans is its ordinary activity.
- Trade discounts come off revenue. A settlement discount only comes off at the start if the customer is expected to take it.
- A free sample creates no revenue.
- A subscription or service paid in advance is recognised over the period of supply.
- Indicators of transfer of control: a right to payment, legal title, physical possession, risks and rewards, and acceptance.
- Disclose the revenue policy, the significant judgements made and revenue by main category.`,
        ru: `- Договор не обязан быть письменным.
- Выручка признаётся в момент или в течение времени. «Ежегодно» и «на любой разумной основе» не подходят.
- Срок оплаты не важен. Выручка следует за исполнением обязанности, а не за получением денег.
- Предварительные заказы и депозиты — доходы будущих периодов, краткосрочное обязательство, до поставки.
- Продажа собственного фургона — выбытие, а не выручка, если продажа фургонов не обычная деятельность.
- Торговые скидки уменьшают выручку. Скидка за раннюю оплату вычитается сразу, только если её ожидают.
- Бесплатный образец не создаёт выручки.
- Подписка или услуга, оплаченная заранее, признаётся в течение срока оказания.
- Признаки передачи контроля: право на оплату, юридический титул, физическое владение, риски и выгоды, принятие.
- Раскрывайте политику выручки, существенные суждения и выручку по основным категориям.`,
        uz: `- Shartnoma yozma bo'lishi shart emas.
- Tushum bir paytda yoki vaqt davomida tan olinadi. "Har yili" va "istalgan oqilona asosda" mos emas.
- To'lov vaqti muhim emas. Tushum pul olinishiga emas, majburiyat bajarilishiga ergashadi.
- Oldindan buyurtmalar va depozitlar tovar yetkazilguncha kelgusi davr daromadi, qisqa muddatli majburiyat.
- O'z furgonini sotish chiqish, tushum emas, agar furgon sotish odatiy faoliyat bo'lmasa.
- Savdo chegirmalari tushumni kamaytiradi. To'lov chegirmasi faqat kutilsa boshidan ayiriladi.
- Bepul namuna tushum yaratmaydi.
- Oldindan to'langan obuna yoki xizmat yetkazish davri davomida tan olinadi.
- Nazorat o'tish belgilari: to'lovga huquq, huquqiy egalik, jismoniy egalik, risk va naf, qabul qilish.
- Tushum siyosatini, muhim mulohazalarni va asosiy toifalar bo'yicha tushumni oching.`,
      },
      heading: {
        en: 'Revenue from contracts with customers (IFRS 15)',
        ru: 'Выручка по договорам с покупателями (IFRS 15)',
        uz: 'Mijozlar bilan shartnomalardan tushum (IFRS 15)',
      },
      body: {
        en: `Revenue is often the largest figure in the accounts, and it is not always obvious how much has been earned or when, especially when goods and services are bundled together. IFRS 15 gives a five-step approach.

First identify the contract, which is the agreement to supply. Then identify the separate performance obligations, the promises within it. Determine the transaction price, which may be variable if a settlement discount is offered. Allocate that price to the obligations, based on their individual selling prices. Finally recognise revenue when, or as, each obligation is satisfied.

Revenue is recognised over time if the customer receives and uses the benefit as the entity performs, if the entity's work creates or enhances an asset the customer controls, or if the work creates no asset with another use and the entity has an enforceable right to be paid for work so far. Services usually fit here.

Otherwise it is recognised at a point in time, when control passes. Control is the ability to direct the use of the asset and obtain the benefits from it.

An agent collects money for someone else. Revenue is only the commission: a travel agent taking $3,000 for a holiday at 10% commission has revenue of $300, and the other $2,700 is a liability to the holiday company.`,
        ru: `Выручка часто самая большая цифра в отчётности, и не всегда очевидно, сколько и когда заработано, особенно когда товары и услуги продаются вместе. IFRS 15 даёт пятишаговую модель.

Сначала определите договор — соглашение о поставке. Затем определите обязанности к исполнению — обещания в нём. Определите цену сделки, она может быть переменной при скидке за раннюю оплату. Распределите цену по обязанностям на основе их отдельных цен продажи. Наконец, признайте выручку при исполнении или по мере исполнения каждой обязанности.

Выручка признаётся в течение времени, если покупатель получает и потребляет выгоду по мере исполнения, если работа создаёт или улучшает актив под контролем покупателя или если она не создаёт актива с иным применением и компания имеет право на оплату выполненного. Услуги обычно сюда подходят.

Иначе она признаётся в момент передачи контроля. Контроль — это возможность направлять использование актива и получать выгоды от него.

Агент собирает деньги для другого. Выручка — только комиссия: турагент, получивший $3,000 за тур с комиссией 10%, имеет выручку $300, а остальные $2,700 — обязательство перед туркомпанией.`,
        uz: `Tushum ko'pincha hisobotdagi eng katta raqam va qancha hamda qachon topilgani har doim ham aniq emas, ayniqsa tovar va xizmatlar birga sotilganda. IFRS 15 besh bosqichli yondashuv beradi.

Avval shartnomani, ya'ni yetkazish kelishuvini aniqlang. So'ng alohida bajarish majburiyatlarini, undagi va'dalarni aniqlang. Bitim narxini aniqlang, u to'lov chegirmasi bo'lsa o'zgaruvchan bo'lishi mumkin. Narxni alohida sotuv narxlari asosida majburiyatlarga taqsimlang. Nihoyat har bir majburiyat bajarilganda tushumni tan oling.

Tushum vaqt davomida tan olinadi, agar mijoz naf olib turib iste'mol qilsa, ish mijoz nazoratidagi aktivni yaratsa yoki yaxshilasa, yoki ish boshqa foydalanishga mos aktiv yaratmasa va korxona bajarilgan ish uchun to'lovga huquqli bo'lsa. Xizmatlar odatda shunga mos.

Aks holda u nazorat o'tgan paytda tan olinadi. Nazorat aktivdan foydalanishni boshqarish va undan naf olish imkoniyati.

Agent boshqalar uchun pul yig'adi. Tushum faqat komissiya: $3,000 lik sayohat uchun 10% komissiyali agentning tushumi $300, qolgan $2,700 sayohat kompaniyasiga majburiyat.`,
      },
      example: {
        en: `On 1 October Madina's Mart LLC sells a cafe a coffee machine with 12 months of servicing for $3,600: $3,000 for the machine and $600 for service if bought separately. There are two obligations. The machine is delivered that day, so $3,000 is revenue now. Service runs over time, so by the 31 December year end 3/12 x $600 = $150 is earned. Revenue for the year is $3,150, and $450 stays as deferred income, a current liability.`,
        ru: `1 октября Madina's Mart LLC продаёт кафе кофемашину с обслуживанием на 12 месяцев за $3,600: $3,000 за машину и $600 за обслуживание при отдельной покупке. Две обязанности. Машина доставлена в тот же день, поэтому $3,000 — выручка сейчас. Обслуживание идёт во времени, поэтому к 31 декабря заработано 3/12 x $600 = $150. Выручка года $3,150, а $450 остаются доходами будущих периодов, краткосрочным обязательством.`,
        uz: `1 oktyabrda Madina's Mart LLC kafega 12 oylik xizmat bilan kofe mashinasini $3,600 ga sotadi: alohida olinganda mashina $3,000, xizmat $600. Ikkita majburiyat. Mashina shu kuni yetkaziladi, $3,000 hozir tushum. Xizmat vaqt davomida, 31 dekabrgacha 3/12 x $600 = $150 topilgan. Yil tushumi $3,150, $450 kelgusi davr daromadi, qisqa muddatli majburiyat bo'lib qoladi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Aggregation', ru: 'Агрегирование', uz: 'Agregatsiya' }, definition: { en: 'Adding together items that share characteristics and belong to the same classification.', ru: 'Сложение статей с общими характеристиками одной классификации.', uz: 'Umumiy xususiyatli va bir xil tasnifdagi moddalarni qo\'shish.' } },
    { term: { en: 'Disaggregation', ru: 'Дезагрегирование', uz: 'Dezagregatsiya' }, definition: { en: 'Separating an item into parts that do not share characteristics.', ru: 'Разделение статьи на части без общих характеристик.', uz: 'Moddani umumiy xususiyatsiz qismlarga ajratish.' } },
    { term: { en: 'Current asset', ru: 'Оборотный актив', uz: 'Aylanma aktiv' }, definition: { en: 'An asset used in the operating cycle, held for trading, due within 12 months, or cash.', ru: 'Актив операционного цикла, для торговли, со сроком до 12 месяцев или деньги.', uz: 'Operatsion siklda ishlatiladigan, savdo uchun, 12 oy ichidagi aktiv yoki pul.' } },
    { term: { en: 'Current liability', ru: 'Краткосрочное обязательство', uz: 'Qisqa muddatli majburiyat' }, definition: { en: 'A liability due in the operating cycle or within 12 months, or with no right to defer settlement for 12 months.', ru: 'Обязательство в операционном цикле или до 12 месяцев либо без права отсрочки на 12 месяцев.', uz: 'Operatsion siklda yoki 12 oy ichida to\'lanadigan yoki 12 oyga kechiktirish huquqi yo\'q majburiyat.' } },
    { term: { en: 'Total comprehensive income', ru: 'Общий совокупный доход', uz: 'Jami umumlashgan daromad' }, definition: { en: 'Profit or loss plus other comprehensive income.', ru: 'Прибыль или убыток плюс прочий совокупный доход.', uz: 'Foyda yoki zarar plus boshqa umumlashgan daromad.' } },
    { term: { en: 'Adjusting event', ru: 'Корректирующее событие', uz: 'Tuzatuvchi voqea' }, definition: { en: 'An event after the reporting date giving evidence of conditions at that date.', ru: 'Событие после отчётной даты, свидетельствующее об условиях на эту дату.', uz: 'Hisobot sanasidan keyin shu sanadagi holatni tasdiqlovchi voqea.' } },
    { term: { en: 'Non-adjusting event', ru: 'Некорректирующее событие', uz: 'Tuzatmaydigan voqea' }, definition: { en: 'An event after the reporting date about conditions that arose afterwards.', ru: 'Событие после отчётной даты об условиях, возникших позже.', uz: 'Hisobot sanasidan keyin paydo bo\'lgan holatga oid voqea.' } },
    { term: { en: 'Performance obligation', ru: 'Обязанность к исполнению', uz: 'Bajarish majburiyati' }, definition: { en: 'A promise in a contract to transfer goods or services to a customer.', ru: 'Обещание в договоре передать покупателю товары или услуги.', uz: 'Shartnomadagi mijozga tovar yoki xizmat berish va\'dasi.' } },
    { term: { en: 'Deferred income', ru: 'Доходы будущих периодов', uz: 'Kelgusi davr daromadi' }, definition: { en: 'Money received for goods or services not yet supplied, shown as a liability.', ru: 'Деньги за ещё не поставленные товары или услуги, показываются обязательством.', uz: 'Hali yetkazilmagan tovar yoki xizmat uchun olingan pul, majburiyat sifatida ko\'rsatiladi.' } },
    { term: { en: 'Agent', ru: 'Агент', uz: 'Agent' }, definition: { en: 'A business that arranges a sale for another party and earns a commission.', ru: 'Бизнес, организующий продажу для другой стороны за комиссию.', uz: 'Boshqa tomon uchun sotuvni tashkil qilib, komissiya oladigan biznes.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter15;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter15.id] = chapter15;
