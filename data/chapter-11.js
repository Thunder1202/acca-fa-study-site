'use strict';

const chapter11 = {
  id: 'chapter-11',
  titles: {
    en: 'Payables, provisions and contingent liabilities',
    ru: 'Кредиторская задолженность, резервы и условные обязательства',
    uz: 'Kreditorlik qarzi, rezervlar va shartli majburiyatlar',
  },
  objectives: [
    { en: 'Classify liabilities as current or non-current', ru: 'Классифицировать обязательства как краткосрочные или долгосрочные', uz: 'Majburiyatlarni qisqa va uzoq muddatliga ajratish' },
    { en: 'Record entries in the trade payables account, including contras', ru: 'Отражать записи на счёте кредиторов, включая взаимозачёты', uz: 'Kreditorlar hisobidagi yozuvlarni, jumladan o\'zaro hisob-kitobni qayd etish' },
    { en: 'Define provisions, contingent liabilities and contingent assets', ru: 'Определять резервы, условные обязательства и условные активы', uz: 'Rezerv, shartli majburiyat va shartli aktivlarga ta\'rif berish' },
    { en: 'Calculate and record provisions and their movements', ru: 'Рассчитывать и отражать резервы и их движение', uz: 'Rezervlar va ularning harakatini hisoblash va qayd etish' },
  ],
  sections: [
    {
      key: {
        en: `- Trade payables are amounts owed to suppliers for credit purchases.
- Credit side: opening balance, credit purchases, interest charged on overdue amounts.
- Debit side: cash paid, purchase returns, discounts received, contras, closing balance.
- Contra: Dr Payables, Cr Receivables, for the amount agreed.
- The most you can contra is the smaller of the two balances.
- Current means due within 12 months. Trade payables, overdrafts and accruals are current.`,
        ru: `- Торговые кредиторы — долг поставщикам за закупки в кредит.
- Кредит: остаток на начало, закупки в кредит, проценты за просрочку.
- Дебет: выплаты, возвраты закупок, полученные скидки, взаимозачёты, остаток на конец.
- Взаимозачёт: Дт Кредиторы, Кт Дебиторы, на согласованную сумму.
- Максимальный взаимозачёт — меньший из двух остатков.
- Краткосрочные: срок до 12 месяцев. Это кредиторы, овердрафты и начисления.`,
        uz: `- Savdo kreditorlari — nasiya xarid uchun yetkazib beruvchilarga qarz.
- Kredit: boshlang'ich qoldiq, nasiya xarid, kechikkan summaga foiz.
- Debet: to'lovlar, xarid qaytarishlari, olingan chegirmalar, o'zaro hisob-kitob, yakuniy qoldiq.
- O'zaro hisob-kitob: Dt Kreditorlar, Kt Debitorlar, kelishilgan summaga.
- Eng ko'p o'zaro hisob-kitob ikki qoldiqning kichigiga teng.
- Qisqa muddatli: 12 oy ichida to'lanadi. Kreditorlar, overdraft va hisoblanganlar.`,
      },
      exam: {
        en: `- A contra can go no higher than the smaller balance, or an account would flip to the wrong side.
- To leave a stated balance, the contra is the receivable less the amount to be left.
- Discount received and returns outwards go through the payables account. Discount allowed, returns inwards and irrecoverable debts do not.
- A supplier statement is the seller's record of transactions, sent to the customer as a request to settle.
- Purchases can be found from the payables account: closing balance + payments + discounts + contras + returns - opening balance. Receivables figures in the question are not needed.
- Interest charged by a supplier increases the amount owed and increases interest payable.`,
        ru: `- Взаимозачёт не может превышать меньший остаток, иначе счёт перейдёт на неверную сторону.
- Чтобы оставить заданный остаток, взаимозачёт = дебитор минус оставляемая сумма.
- Полученная скидка и возвраты поставщикам идут через кредиторов. Предоставленная скидка, возвраты покупателей и безнадёжные долги — нет.
- Выписка поставщика — запись продавца об операциях, отправленная покупателю как запрос на оплату.
- Закупки находят по счёту кредиторов: остаток на конец + выплаты + скидки + взаимозачёты + возвраты - остаток на начало. Данные о дебиторах здесь не нужны.
- Проценты поставщика увеличивают долг и расходы по процентам.`,
        uz: `- O'zaro hisob-kitob kichik qoldiqdan oshmaydi, aks holda hisob noto'g'ri tomonga o'tadi.
- Belgilangan qoldiqni qoldirish uchun: o'zaro hisob-kitob = debitor minus qoladigan summa.
- Olingan chegirma va xarid qaytarishlari kreditorlardan o'tadi. Berilgan chegirma, sotuv qaytarishlari va undirib bo'lmaydigan qarzlar o'tmaydi.
- Yetkazib beruvchi ko'chirmasi sotuvchining operatsiyalar yozuvi, mijozga to'lov so'rovi sifatida yuboriladi.
- Xaridni kreditorlar hisobidan toping: yakuniy qoldiq + to'lovlar + chegirmalar + o'zaro hisob-kitob + qaytarishlar - boshlang'ich qoldiq. Debitorlar ma'lumoti kerak emas.
- Yetkazib beruvchi foizi qarzni va foiz xarajatini oshiradi.`,
      },
      heading: {
        en: 'Trade payables and classifying liabilities',
        ru: 'Торговые кредиторы и классификация обязательств',
        uz: 'Savdo kreditorlari va majburiyatlarni tasniflash',
      },
      body: {
        en: `Under the accruals concept a credit purchase is recorded when the goods or services are received, with a matching liability to the supplier: Dr Purchases or expenses, Cr Trade payables. When the supplier is paid: Dr Trade payables, Cr Cash at bank. Terms of 30 to 60 days are common.

A supplier may charge interest on an overdue amount. This raises the amount owed and is an interest expense. A settlement discount taken is Dr Trade payables, Cr Cash at bank, Cr Discount received.

If two businesses buy from and sell to each other, they may agree to set an amount against the balances they owe, known as a contra. The entry reduces both balances: Dr Payables, Cr Receivables. Individual supplier accounts are memorandum records updated at the same time, so in principle they agree with the ledger.

Timing decides how a liability is classified. Trade payables, bank overdrafts and accruals are the main current liabilities. Loans are the main non-current liabilities. A liability is a present obligation to transfer an economic resource as a result of past events.`,
        ru: `По принципу начисления закупка в кредит записывается при получении товара или услуги, с обязательством перед поставщиком: Дт Закупки или расходы, Кт Торговые кредиторы. При оплате: Дт Торговые кредиторы, Кт Банк. Обычный срок — от 30 до 60 дней.

Поставщик может начислять проценты за просрочку. Это увеличивает долг и является процентным расходом. Полученная скидка за раннюю оплату: Дт Торговые кредиторы, Кт Банк, Кт Полученная скидка.

Если два бизнеса покупают и продают друг другу, они могут договориться зачесть сумму между взаимными долгами. Это взаимозачёт. Запись уменьшает оба остатка: Дт Кредиторы, Кт Дебиторы. Счета отдельных поставщиков — вспомогательные записи, обновляемые одновременно, поэтому в принципе они сходятся с книгой.

Классификация обязательства зависит от срока. Торговые кредиторы, овердрафты и начисления — основные краткосрочные обязательства. Кредиты — основные долгосрочные. Обязательство — это существующая обязанность передать экономический ресурс в результате прошлых событий.`,
        uz: `Hisoblash tamoyiliga ko'ra nasiya xarid tovar yoki xizmat olinganda, yetkazib beruvchi oldidagi majburiyat bilan yoziladi: Dt Xaridlar yoki xarajatlar, Kt Savdo kreditorlari. To'langanda: Dt Savdo kreditorlari, Kt Bank. Odatiy muddat 30 dan 60 kungacha.

Yetkazib beruvchi kechikkan summaga foiz hisoblashi mumkin. Bu qarzni oshiradi va foiz xarajati bo'ladi. Olingan muddatidan oldingi to'lov chegirmasi: Dt Savdo kreditorlari, Kt Bank, Kt Olingan chegirma.

Ikki biznes bir-biridan sotib olsa va sotsa, o'zaro qarzlardan summani hisobga olishga kelishishi mumkin. Bu o'zaro hisob-kitob. Yozuv ikkala qoldiqni kamaytiradi: Dt Kreditorlar, Kt Debitorlar. Alohida yetkazib beruvchi hisoblari bir vaqtda yangilanadigan yordamchi yozuvlar, shuning uchun aslida kitob bilan mos keladi.

Majburiyat muddati bo'yicha tasniflanadi. Savdo kreditorlari, overdraftlar va hisoblanganlar asosiy qisqa muddatli majburiyatlar. Kreditlar asosiy uzoq muddatli majburiyatlar. Majburiyat — o'tgan voqealar natijasida iqtisodiy resursni berish bo'yicha mavjud burch.`,
      },
      example: {
        en: `Cafe Zamin owes Madina $3,000 and she owes the cafe $1,200 for paper bags. They agree to set off as much as they can. The most is the smaller balance, $1,200: Dr Payables $1,200, Cr Receivables $1,200. Her payable to the cafe is now nil, and the cafe owes her $1,800. If she had set off $3,000, her supplier account would have swung into a debit balance, which is why $1,200 is the limit.`,
        ru: `Cafe Zamin должно Мадине $3,000, а она должна кафе $1,200 за бумажные пакеты. Они договариваются зачесть максимум. Это меньший остаток, $1,200: Дт Кредиторы $1,200, Кт Дебиторы $1,200. Её долг кафе теперь нулевой, а кафе должно ей $1,800. Если бы она зачла $3,000, счёт поставщика стал бы дебетовым, поэтому предел — $1,200.`,
        uz: `Cafe Zamin Madinaga $3,000 qarz, u esa kafega qog'oz paketlar uchun $1,200 qarz. Ular eng ko'p summani hisobga olishga kelishadi. Bu kichik qoldiq, $1,200: Dt Kreditorlar $1,200, Kt Debitorlar $1,200. Uning kafega qarzi endi nol, kafe esa unga $1,800 qarz. Agar $3,000 hisobga olganida, yetkazib beruvchi hisobi debetga o'tardi, shuning uchun chegara $1,200.`,
      },
    },
    {
      key: {
        en: `- A provision is a liability of uncertain timing or amount (IAS 37).
- Recognise one only if all three tests are met.
- 1: a present obligation, legal or constructive, from a past event.
- 2: an outflow of economic benefits is probable.
- 3: a reliable estimate can be made.
- Entry: Dr Expense, Cr Provision.`,
        ru: `- Резерв — обязательство с неопределённым сроком или суммой (IAS 37).
- Признавайте его, только если выполнены все три условия.
- 1: существующая обязанность, правовая или вытекающая из практики, от прошлого события.
- 2: отток экономических выгод вероятен.
- 3: сумму можно надёжно оценить.
- Запись: Дт Расход, Кт Резерв.`,
        uz: `- Rezerv — muddati yoki summasi noaniq majburiyat (IAS 37).
- Uni faqat uchta shart bajarilsa tan oling.
- 1: o'tgan voqeadan kelib chiqqan mavjud burch, huquqiy yoki amaliyotdan kelib chiqqan.
- 2: iqtisodiy naf chiqib ketishi ehtimoli yuqori.
- 3: summani ishonchli baholash mumkin.
- Yozuv: Dt Xarajat, Kt Rezerv.`,
      },
      exam: {
        en: `- A legal obligation comes from a contract, legislation or other operation of law. A warranty is an example.
- A constructive obligation comes from past practice or published policies that create a valid expectation. A well-known refund policy is an example, and so is a publicised promise to repair environmental damage.
- The event must have happened by the year end. Damage already caused is provided for. Damage expected in future is not.
- An injury after the year end gives no obligation at the year end, even if the claim arrives before the accounts are finished.
- A provision is non-current if it will be settled more than 12 months after the reporting date. It is not always current.
- A liability can usually be measured exactly. A provision needs judgement and estimation, but it still meets the definition of a liability.`,
        ru: `- Правовая обязанность вытекает из договора, закона или иной нормы права. Пример — гарантия.
- Обязанность из практики вытекает из прошлой практики или объявленной политики, создающей обоснованное ожидание. Пример — известная политика возвратов и публичное обещание устранять экологический ущерб.
- Событие должно произойти до конца года. На уже нанесённый ущерб резерв создаётся, на ожидаемый в будущем — нет.
- Травма после конца года не даёт обязанности на конец года, даже если иск пришёл до завершения отчётности.
- Резерв долгосрочный, если будет погашен позже 12 месяцев после отчётной даты. Он не всегда краткосрочный.
- Обязательство обычно можно измерить точно. Резерв требует суждений и оценки, но всё же отвечает определению обязательства.`,
        uz: `- Huquqiy burch shartnoma, qonun yoki boshqa huquq normasidan kelib chiqadi. Masalan kafolat.
- Amaliyotdan kelib chiqqan burch o'tgan amaliyot yoki e'lon qilingan siyosatdan keladi va asosli kutish yaratadi. Masalan mashhur qaytarish siyosati yoki atrof-muhit zararini tuzatish va'dasi.
- Voqea yil oxirigacha yuz bergan bo'lishi kerak. Allaqachon yetkazilgan zarar uchun rezerv tuziladi, kelajakdagi kutilgan zarar uchun emas.
- Yil oxiridan keyingi jarohat yil oxirida burch bermaydi, da'vo hisobot tugashidan oldin kelsa ham.
- 12 oydan keyin to'lansa, rezerv uzoq muddatli. U doim qisqa muddatli emas.
- Majburiyatni odatda aniq o'lchash mumkin. Rezerv mulohaza va baho talab qiladi, lekin baribir majburiyat ta'rifiga mos keladi.`,
      },
      heading: {
        en: 'Provisions',
        ru: 'Резервы',
        uz: 'Rezervlar',
      },
      body: {
        en: `A court case, a warranty promise or a clean-up duty can all mean money will leave the business in future, but nobody knows exactly when or how much. IAS 37 sets three tests so that provisions cannot be used to move profit between years.

The three tests must all be met. There must be a present obligation from a past event. An outflow of benefits must be probable. And a reliable estimate must be possible.

The obligation can be legal or constructive. A legal obligation comes from a contract or the law. A constructive obligation comes from the business's own actions: an established practice, a published policy or a specific current statement that has led others to expect it to act in a certain way.

Timing matters. A worker dismissed in November can give rise to a provision at a 31 December year end, because the event came first. A customer who slips in February cannot, even if the case is known by March.

The provision is classified by when it is expected to be settled. Compensation for a minor accident is likely to be current. Removing equipment at the end of a long life is likely to be non-current.`,
        ru: `Судебное дело, гарантия или обязанность по уборке могут означать будущий отток денег, но никто точно не знает, когда и сколько. IAS 37 задаёт три условия, чтобы резервами нельзя было переносить прибыль между годами.

Должны выполняться все три условия. Должна быть существующая обязанность от прошлого события. Отток выгод должен быть вероятен. И сумму должно быть можно надёжно оценить.

Обязанность может быть правовой или вытекающей из практики. Правовая идёт из договора или закона. Вторая идёт из действий самого бизнеса: устоявшаяся практика, объявленная политика или конкретное заявление, из-за которых другие ожидают от него определённых действий.

Важно время. Работник, уволенный в ноябре, может дать резерв на 31 декабря, так как событие произошло раньше. Покупатель, поскользнувшийся в феврале, не может, даже если дело известно к марту.

Резерв классифицируется по ожидаемому сроку погашения. Компенсация за мелкую травму, вероятно, краткосрочная. Демонтаж оборудования в конце долгого срока, вероятно, долгосрочный.`,
        uz: `Sud ishi, kafolat va'dasi yoki tozalash burchi kelajakda pul chiqishini anglatishi mumkin, lekin qachon va qancha ekanini hech kim aniq bilmaydi. IAS 37 rezervlar orqali foydani yillar orasida ko'chirib bo'lmasligi uchun uchta shart qo'yadi.

Uchala shart bajarilishi kerak. O'tgan voqeadan mavjud burch bo'lishi kerak. Naf chiqib ketishi ehtimoli yuqori bo'lishi kerak. Va ishonchli baho mumkin bo'lishi kerak.

Burch huquqiy yoki amaliyotdan kelib chiqqan bo'lishi mumkin. Huquqiy burch shartnoma yoki qonundan keladi. Ikkinchisi biznesning o'z harakatlaridan: o'rnashgan amaliyot, e'lon qilingan siyosat yoki aniq bayonotdan kelib chiqadi va boshqalar undan shunday harakat kutadi.

Vaqt muhim. Noyabrda ishdan bo'shatilgan xodim 31 dekabrda rezerv berishi mumkin, chunki voqea oldin yuz bergan. Fevralda yiqilgan mijoz bermaydi, ish martgacha ma'lum bo'lsa ham.

Rezerv kutilgan to'lov muddati bo'yicha tasniflanadi. Kichik jarohat uchun kompensatsiya odatda qisqa muddatli. Uzoq xizmat oxirida uskunani olib tashlash odatda uzoq muddatli.`,
      },
      example: {
        en: `Madina's Mart promises in every shop that unwanted goods can be returned within 30 days, even though the law only covers faulty goods. Customers rely on this, so there is a constructive obligation. Past records show that returns of goods sold in December usually come to about $2,500. All three tests are met, so at the year end she records Dr Expenses $2,500, Cr Provision for refunds $2,500. It is a current liability, because refunds happen within weeks.`,
        ru: `Madina's Mart обещает в каждом магазине принимать ненужный товар в течение 30 дней, хотя закон покрывает только брак. Покупатели на это рассчитывают, значит, есть обязанность из практики. По прошлым данным возвраты по декабрьским продажам обычно около $2,500. Все три условия выполнены, поэтому на конец года она записывает Дт Расходы $2,500, Кт Резерв на возвраты $2,500. Это краткосрочное обязательство, так как возвраты идут в течение недель.`,
        uz: `Madina's Mart har bir do'konda keraksiz tovarni 30 kun ichida qaytarish mumkinligini va'da qiladi, qonun faqat nosoz tovarni qamrasa ham. Mijozlar bunga ishonadi, demak amaliyotdan kelib chiqqan burch bor. O'tgan ma'lumotlarga ko'ra dekabr sotuvlari qaytarishlari odatda $2,500 atrofida. Uchala shart bajarilgan, shuning uchun yil oxirida Dt Xarajatlar $2,500, Kt Qaytarishlar rezervi $2,500 yozadi. Bu qisqa muddatli majburiyat, chunki qaytarishlar haftalar ichida bo'ladi.`,
      },
    },
    {
      key: {
        en: `- Review provisions at every year end and adjust to the best current estimate.
- Increase: Dr Expense, Cr Provision, for the movement only.
- Decrease: Dr Provision, Cr Expense.
- Movements go to profit or loss, never to other comprehensive income.
- The closing provision is a liability in the statement of financial position.`,
        ru: `- Пересматривайте резервы на каждый конец года до лучшей текущей оценки.
- Увеличение: Дт Расход, Кт Резерв, только на изменение.
- Уменьшение: Дт Резерв, Кт Расход.
- Изменения идут в прибыль или убыток, а не в прочий совокупный доход.
- Резерв на конец — обязательство в отчёте о финансовом положении.`,
        uz: `- Rezervlarni har yil oxirida ko'rib chiqing va eng yaxshi joriy bahoga moslang.
- Oshish: Dt Xarajat, Kt Rezerv, faqat o'zgarishga.
- Kamayish: Dt Rezerv, Kt Xarajat.
- O'zgarishlar foyda yoki zararga o'tadi, boshqa umumlashgan daromadga emas.
- Yakuniy rezerv moliyaviy holat hisobotida majburiyat.`,
      },
      heading: {
        en: 'Changes in provisions',
        ru: 'Изменение резервов',
        uz: 'Rezervlarning o\'zgarishi',
      },
      body: {
        en: `A provision is an estimate, so it is reviewed at each reporting date. If the best estimate has changed, only the difference is recorded, in the year it changes.

When the whole estimated cost is known from the start, the full amount is recognised at once. For example, an obligation to restore a site after eight years of operation, estimated at $80,000 at the start, is provided in full in year one. If in year five the estimate rises to $85,000, only the extra $5,000 is charged that year, and the provision becomes $85,000.

The treatment is the same in both directions. A higher estimate is a further expense. A lower one reverses part of the earlier expense.`,
        ru: `Резерв — это оценка, поэтому он пересматривается на каждую отчётную дату. Если лучшая оценка изменилась, записывается только разница, в год изменения.

Если вся расчётная стоимость известна с начала, полная сумма признаётся сразу. Например, обязанность восстановить участок после восьми лет работы с начальной оценкой $80,000 резервируется полностью в первый год. Если на пятый год оценка растёт до $85,000, в этом году начисляются только лишние $5,000, и резерв становится $85,000.

Подход одинаков в обе стороны. Более высокая оценка — дополнительный расход. Более низкая сторнирует часть прежнего расхода.`,
        uz: `Rezerv baho, shuning uchun har hisobot sanasida ko'rib chiqiladi. Eng yaxshi baho o'zgarsa, faqat farq, o'zgargan yilda yoziladi.

Butun taxminiy xarajat boshidan ma'lum bo'lsa, to'liq summa darhol tan olinadi. Masalan, sakkiz yillik ishdan keyin joyni tiklash burchi boshida $80,000 baholansa, birinchi yili to'liq rezerv qilinadi. Beshinchi yilda baho $85,000 ga ko'tarilsa, shu yili faqat qo'shimcha $5,000 hisoblanadi va rezerv $85,000 bo'ladi.

Ikkala yo'nalishda ham usul bir xil. Yuqori baho qo'shimcha xarajat. Past baho oldingi xarajatning bir qismini qaytaradi.`,
      },
      example: {
        en: `Madina's refund provision stands at $2,500. A year later, sales have grown and she estimates $3,100. She records only the $600 increase: Dr Expenses $600, Cr Provision for refunds $600. The liability is now $3,100, and this year's profit bears $600. If the estimate had fallen to $2,000, she would record Dr Provision $500, Cr Expenses $500.`,
        ru: `Резерв Мадины на возвраты равен $2,500. Через год продажи выросли, и она оценивает его в $3,100. Она записывает только рост на $600: Дт Расходы $600, Кт Резерв на возвраты $600. Обязательство теперь $3,100, а прибыль этого года несёт $600. Если бы оценка упала до $2,000, она записала бы Дт Резерв $500, Кт Расходы $500.`,
        uz: `Madinaning qaytarishlar rezervi $2,500. Bir yildan keyin sotuv o'sdi va u $3,100 deb baholaydi. U faqat $600 oshishni yozadi: Dt Xarajatlar $600, Kt Qaytarishlar rezervi $600. Majburiyat endi $3,100, bu yil foydasi $600 ko'taradi. Baho $2,000 ga tushganida, Dt Rezerv $500, Kt Xarajatlar $500 yozardi.`,
      },
    },
    {
      key: {
        en: `- Contingent liability: a possible obligation, or one that fails the provision tests.
- Contingent asset: a possible asset whose existence depends on uncertain future events.
- Liability: probable = provide, possible = disclose in a note, remote = ignore.
- Asset: virtually certain = recognise, probable = disclose, possible or remote = ignore.
- Never net a provision against a contingent asset.
- Probabilities are a matter of judgement. IAS 37 gives no percentages.`,
        ru: `- Условное обязательство: возможная обязанность или не прошедшая условия резерва.
- Условный актив: возможный актив, зависящий от неопределённых будущих событий.
- Обязательство: вероятно = резерв, возможно = примечание, маловероятно = ничего.
- Актив: почти точно = признать, вероятно = примечание, возможно или мало = ничего.
- Никогда не зачитывайте резерв против условного актива.
- Вероятность — вопрос суждения. IAS 37 не даёт процентов.`,
        uz: `- Shartli majburiyat: ehtimoliy burch yoki rezerv shartlaridan o'tmagan burch.
- Shartli aktiv: noaniq kelajak voqealariga bog'liq ehtimoliy aktiv.
- Majburiyat: ehtimoli yuqori = rezerv, mumkin = izoh, juda kam = e'tiborsiz.
- Aktiv: deyarli aniq = tan olish, ehtimoli yuqori = izoh, mumkin yoki kam = e'tiborsiz.
- Rezervni shartli aktivga hech qachon qarshi qo'ymang.
- Ehtimollik mulohaza masalasi. IAS 37 foiz bermaydi.`,
      },
      exam: {
        en: `- A contingent asset is never always recognised or always disclosed. It depends on the probability.
- A contingent liability regarded as probable is not just disclosed. It becomes a provision.
- A remote contingent liability needs neither a provision nor a note.
- A counter-claim that is only probable stays in a note, while the provision for the main claim goes in the statement of financial position.
- Legal costs payable whatever the outcome are provided for, even if the claim itself is unlikely to succeed.
- Guaranteeing another entity's overdraft with a possible loss is a note only.
- One common guide: virtually certain over 95%, probable 51-95%, possible 5-50%, remote under 5%.`,
        ru: `- Условный актив не всегда признаётся и не всегда раскрывается. Всё зависит от вероятности.
- Вероятное условное обязательство не просто раскрывается. Оно становится резервом.
- Маловероятное условное обязательство не требует ни резерва, ни примечания.
- Встречный иск, который лишь вероятен, остаётся в примечании, а резерв по основному иску идёт в отчёт о финансовом положении.
- Судебные издержки, платимые при любом исходе, резервируются, даже если сам иск вряд ли будет удовлетворён.
- Гарантия по овердрафту другой компании с возможным убытком — только примечание.
- Частый ориентир: почти точно более 95%, вероятно 51-95%, возможно 5-50%, маловероятно менее 5%.`,
        uz: `- Shartli aktiv har doim tan olinmaydi va doim ochilmaydi. Hammasi ehtimollikka bog'liq.
- Ehtimoli yuqori shartli majburiyat shunchaki ochilmaydi. U rezervga aylanadi.
- Juda kam ehtimolli shartli majburiyat rezerv ham, izoh ham talab qilmaydi.
- Faqat ehtimoli yuqori qarshi da'vo izohda qoladi, asosiy da'vo rezervi esa moliyaviy holat hisobotiga kiradi.
- Natijadan qat'i nazar to'lanadigan sud xarajatlari rezerv qilinadi, da'vo yutishi kam bo'lsa ham.
- Boshqa korxona overdrafti kafolati mumkin zarar bilan faqat izoh.
- Keng tarqalgan mo'ljal: deyarli aniq 95% dan yuqori, ehtimoli yuqori 51-95%, mumkin 5-50%, juda kam 5% dan past.`,
      },
      heading: {
        en: 'Contingent liabilities and contingent assets',
        ru: 'Условные обязательства и условные активы',
        uz: 'Shartli majburiyatlar va shartli aktivlar',
      },
      body: {
        en: `A contingent liability is a possible obligation from past events, confirmed only by uncertain future events outside the entity's full control. It can also be a present obligation that is not recognised, because an outflow is not probable or the amount cannot be measured reliably. An example is a court case where the outcome is only possible, or where the costs cannot be estimated.

A contingent asset is a possible asset from past events, confirmed only by uncertain future events outside the entity's full control. An example is a compensation claim against another party whose outcome is still uncertain.

The basic rule is that neither is recognised in the financial statements. An item that becomes virtually certain is no longer contingent, so it is recognised as a liability or asset.

Liabilities and assets are treated differently on purpose, because the standard is cautious. A liability is provided for at probable, but an asset is only recognised at virtually certain. A probable asset gets a note, and a possible one gets nothing.

A disclosure note explains the nature of the item and estimates its financial effect.`,
        ru: `Условное обязательство — возможная обязанность от прошлых событий, подтверждаемая только неопределёнными будущими событиями вне полного контроля компании. Это может быть и существующая обязанность, не признаваемая, так как отток маловероятен или сумму нельзя надёжно оценить. Пример — судебное дело с лишь возможным исходом или неоценимыми затратами.

Условный актив — возможный актив от прошлых событий, подтверждаемый только неопределёнными будущими событиями вне полного контроля компании. Пример — иск о компенсации к другой стороне с неясным исходом.

Основное правило: ни то, ни другое не признаётся в отчётности. Статья, ставшая почти точной, больше не условная и признаётся обязательством или активом.

Обязательства и активы намеренно учитываются по-разному, так как стандарт осторожен. Резерв создаётся при вероятности, а актив признаётся лишь при почти полной точности. Вероятный актив раскрывается в примечании, а возможный не раскрывается.

Примечание объясняет характер статьи и оценивает её финансовый эффект.`,
        uz: `Shartli majburiyat — o'tgan voqealardan kelib chiqqan ehtimoliy burch, u faqat korxona to'liq nazorat qilmaydigan noaniq kelajak voqealari bilan tasdiqlanadi. U tan olinmagan mavjud burch ham bo'lishi mumkin, chunki chiqim ehtimoli yuqori emas yoki summani ishonchli o'lchab bo'lmaydi. Masalan natijasi faqat mumkin bo'lgan yoki xarajati baholanmaydigan sud ishi.

Shartli aktiv — o'tgan voqealardan kelib chiqqan ehtimoliy aktiv, u faqat korxona to'liq nazorat qilmaydigan noaniq kelajak voqealari bilan tasdiqlanadi. Masalan boshqa tomonga natijasi noaniq kompensatsiya da'vosi.

Asosiy qoida: ikkalasi ham moliyaviy hisobotda tan olinmaydi. Deyarli aniq bo'lib qolgan modda endi shartli emas va majburiyat yoki aktiv sifatida tan olinadi.

Majburiyat va aktivlar ataylab turlicha ishlanadi, chunki standart ehtiyotkor. Rezerv ehtimoli yuqori bo'lganda tuziladi, aktiv esa faqat deyarli aniq bo'lganda tan olinadi. Ehtimoli yuqori aktiv izohda beriladi, mumkin bo'lgani esa berilmaydi.

Izoh moddaning mohiyatini tushuntiradi va moliyaviy ta'sirini baholaydi.`,
      },
      example: {
        en: `A customer sues Madina's Mart for $9,000, saying a faulty heater damaged their home. Her lawyers say she will probably lose. She recognises a $9,000 provision. She has counter-claimed $9,000 from the heater's maker and her lawyers say she will probably win that. She may not net them off: the $9,000 provision stays in full, and the claim against the maker goes in a note as a contingent asset. Only if recovery became virtually certain could she show it as an asset, and even then separately.`,
        ru: `Покупатель подаёт иск к Madina's Mart на $9,000, утверждая, что неисправный обогреватель повредил его дом. Юристы говорят, что она, вероятно, проиграет. Она признаёт резерв $9,000. Она подала встречный иск на $9,000 к производителю, и юристы считают, что, вероятно, выиграет. Зачитывать их нельзя: резерв $9,000 остаётся полностью, а требование к производителю идёт в примечание как условный актив. Только если возмещение станет почти точным, она сможет показать его как актив, и то отдельно.`,
        uz: `Mijoz nosoz isitgich uyiga zarar yetkazdi deb Madina's Martga $9,000 da'vo qiladi. Advokatlari u yutqazishi ehtimoli yuqori deydi. U $9,000 rezerv tan oladi. U ishlab chiqaruvchiga $9,000 qarshi da'vo qilgan va advokatlari yutishi ehtimoli yuqori deydi. Ularni qarshi qo'yib bo'lmaydi: $9,000 rezerv to'liq qoladi, ishlab chiqaruvchiga da'vo esa shartli aktiv sifatida izohga kiradi. Faqat qoplash deyarli aniq bo'lsa, uni aktiv sifatida ko'rsatishi mumkin, u ham alohida.`,
      },
    },
    {
      key: {
        en: `- Provisions are reported as current or non-current liabilities.
- For each class: show the carrying amount at the start and end of the period.
- Also show new provisions, amounts used and amounts reversed.
- For provisions and contingencies: describe the nature and the uncertainties.
- Give an estimate of the financial effect, or say that one cannot be made.`,
        ru: `- Резервы показываются как краткосрочные или долгосрочные обязательства.
- По каждому классу: балансовая сумма на начало и конец периода.
- Также новые резервы, использованные и сторнированные суммы.
- По резервам и условным статьям: характер и неопределённости.
- Дайте оценку финансового эффекта или укажите, что её сделать нельзя.`,
        uz: `- Rezervlar qisqa yoki uzoq muddatli majburiyat sifatida ko'rsatiladi.
- Har bir sinf bo'yicha: davr boshi va oxiridagi summa.
- Yangi rezervlar, ishlatilgan va qaytarilgan summalar ham.
- Rezerv va shartli moddalar uchun: mohiyat va noaniqliklar.
- Moliyaviy ta'sir bahosini bering yoki uni berib bo'lmasligini ayting.`,
      },
      heading: {
        en: 'Disclosure under IAS 37',
        ru: 'Раскрытие по IAS 37',
        uz: 'IAS 37 bo\'yicha ochib berish',
      },
      body: {
        en: `Provisions appear on the face of the statement of financial position as liabilities, classified by when they will be settled. A contingent liability that does not qualify as a provision stays out of the statements and goes in the notes.

IFRS 18 requires accounting policies to be disclosed, and IAS 37 adds specific points. For every class of provision, the notes show the carrying amount at the start and end of the period and the movements in between, such as new provisions.

For provisions, contingent liabilities and contingent assets, a note gives the nature of the item, the uncertain factors that may affect the outcome, and an estimate of the financial effect, or a statement that no estimate can be made.`,
        ru: `Резервы показываются в отчёте о финансовом положении как обязательства, по сроку погашения. Условное обязательство, не ставшее резервом, в отчётность не входит и раскрывается в примечаниях.

IFRS 18 требует раскрывать учётную политику, а IAS 37 добавляет особые пункты. По каждому классу резервов примечания показывают балансовую сумму на начало и конец периода и движение между ними, например новые резервы.

По резервам, условным обязательствам и условным активам примечание указывает характер статьи, неопределённые факторы и оценку финансового эффекта или заявление, что оценку сделать нельзя.`,
        uz: `Rezervlar moliyaviy holat hisobotida majburiyat sifatida, to'lov muddati bo'yicha ko'rsatiladi. Rezervga o'tmagan shartli majburiyat hisobotga kirmaydi va izohlarda beriladi.

IFRS 18 hisob siyosatini ochib berishni talab qiladi, IAS 37 esa maxsus bandlar qo'shadi. Rezervlarning har bir sinfi bo'yicha izohlar davr boshi va oxiridagi summani va ular orasidagi harakatni, masalan yangi rezervlarni ko'rsatadi.

Rezerv, shartli majburiyat va shartli aktivlar bo'yicha izoh moddaning mohiyatini, noaniq omillarni va moliyaviy ta'sir bahosini yoki baho berib bo'lmasligini aytadi.`,
      },
      example: {
        en: `Madina's Mart's note for refunds reads: opening $2,500, new provision $3,100, used in the year $2,500, closing $3,100, with a line saying refunds are expected within 30 days. A separate note says a customer has a $6,000 claim that lawyers rate as possible, explains that it concerns a faulty product, and gives that estimate.`,
        ru: `Примечание Madina's Mart о возвратах: на начало $2,500, новый резерв $3,100, использовано за год $2,500, на конец $3,100, и строка о том, что возвраты ожидаются в течение 30 дней. Отдельное примечание сообщает об иске покупателя на $6,000, который юристы считают возможным, объясняет, что речь о бракованном товаре, и даёт эту оценку.`,
        uz: `Madina's Mart qaytarishlar izohi: boshida $2,500, yangi rezerv $3,100, yil davomida ishlatilgan $2,500, oxirida $3,100 va qaytarishlar 30 kun ichida kutilishi haqida qator. Alohida izoh mijozning $6,000 lik da'vosini aytadi, advokatlar uni mumkin deb baholaydi, u nosoz mahsulotga tegishli ekanini tushuntiradi va shu bahoni beradi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Trade payable', ru: 'Торговая кредиторская задолженность', uz: 'Savdo kreditorligi' }, definition: { en: 'An amount owed to a supplier for goods or services bought on credit.', ru: 'Сумма, причитающаяся поставщику за товары или услуги в кредит.', uz: 'Nasiyaga olingan tovar yoki xizmat uchun yetkazib beruvchiga qarz.' } },
    { term: { en: 'Contra', ru: 'Взаимозачёт', uz: 'O\'zaro hisob-kitob' }, definition: { en: 'Setting an agreed amount against balances two businesses owe each other.', ru: 'Зачёт согласованной суммы между взаимными долгами двух бизнесов.', uz: 'Ikki biznesning o\'zaro qarzlaridan kelishilgan summani hisobga olish.' } },
    { term: { en: 'Provision', ru: 'Резерв', uz: 'Rezerv' }, definition: { en: 'A liability of uncertain timing or amount.', ru: 'Обязательство с неопределённым сроком или суммой.', uz: 'Muddati yoki summasi noaniq majburiyat.' } },
    { term: { en: 'Legal obligation', ru: 'Правовая обязанность', uz: 'Huquqiy burch' }, definition: { en: 'An obligation arising from a contract, legislation or other operation of law.', ru: 'Обязанность из договора, закона или иной нормы права.', uz: 'Shartnoma, qonun yoki boshqa huquq normasidan kelib chiqqan burch.' } },
    { term: { en: 'Constructive obligation', ru: 'Обязанность из практики', uz: 'Amaliyotdan kelib chiqqan burch' }, definition: { en: 'An obligation arising from an entity\'s own actions, which create a valid expectation in others.', ru: 'Обязанность из собственных действий компании, создающих обоснованное ожидание у других.', uz: 'Korxonaning o\'z harakatlaridan kelib chiqib, boshqalarda asosli kutish yaratadigan burch.' } },
    { term: { en: 'Contingent liability', ru: 'Условное обязательство', uz: 'Shartli majburiyat' }, definition: { en: 'A possible obligation confirmed only by uncertain future events, or a present one that cannot be recognised.', ru: 'Возможная обязанность, подтверждаемая только будущими событиями, или существующая, которую нельзя признать.', uz: 'Faqat kelajak voqealari tasdiqlaydigan ehtimoliy burch yoki tan olib bo\'lmaydigan mavjud burch.' } },
    { term: { en: 'Contingent asset', ru: 'Условный актив', uz: 'Shartli aktiv' }, definition: { en: 'A possible asset confirmed only by uncertain future events.', ru: 'Возможный актив, подтверждаемый только неопределёнными будущими событиями.', uz: 'Faqat noaniq kelajak voqealari tasdiqlaydigan ehtimoliy aktiv.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter11;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter11.id] = chapter11;
