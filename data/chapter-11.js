'use strict';

const chapter11 = {
  id: 'chapter-11',
  titles: {
    en: 'Payables, provisions and contingent liabilities',
    ru: 'Кредиторская задолженность, резервы и условные обязательства',
    uz: 'Kreditorlik qarzi, rezervlar va shartli majburiyatlar',
  },
  objectives: [
    {
      en: 'Classify liabilities as current or non-current',
      ru: 'Классифицировать обязательства как краткосрочные или долгосрочные',
      uz: 'Majburiyatlarni qisqa va uzoq muddatliga ajratish',
    },
    {
      en: 'Record entries in the trade payables account, including contras',
      ru: 'Отражать записи на счёте кредиторов, включая взаимозачёты',
      uz: 'Kreditorlar hisobidagi yozuvlarni, jumladan o\'zaro hisob-kitobni qayd etish',
    },
    {
      en: 'Define provisions, contingent liabilities and contingent assets',
      ru: 'Определять резервы, условные обязательства и условные активы',
      uz: 'Rezerv, shartli majburiyat va shartli aktivlarga ta\'rif berish',
    },
    {
      en: 'Calculate and record provisions and their movements',
      ru: 'Рассчитывать и отражать резервы и их движение',
      uz: 'Rezervlar va ularning harakatini hisoblash va qayd etish',
    },
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
- Interest charged by a supplier increases the amount owed and increases interest payable.
- Payables are what the BUSINESS owes (tax owed to the tax office, suppliers). Interest the bank owes you, loans you made to staff and money customers owe you are receivables.`,
        ru: `- Взаимозачёт не может превышать меньший остаток, иначе счёт перейдёт на неверную сторону.
- Чтобы оставить заданный остаток, взаимозачёт = дебитор минус оставляемая сумма.
- Полученная скидка и возвраты поставщикам идут через кредиторов. Предоставленная скидка, возвраты покупателей и безнадёжные долги — нет.
- Выписка поставщика — запись продавца об операциях, отправленная покупателю как запрос на оплату.
- Закупки находят по счёту кредиторов: остаток на конец + выплаты + скидки + взаимозачёты + возвраты - остаток на начало. Данные о дебиторах здесь не нужны.
- Проценты поставщика увеличивают долг и расходы по процентам.
- Кредиторка — то, что должен БИЗНЕС (налог налоговой, поставщикам). Проценты, которые должен вам банк, займы сотрудникам и долги покупателей — это дебиторка.`,
        uz: `- O'zaro hisob-kitob kichik qoldiqdan oshmaydi, aks holda hisob noto'g'ri tomonga o'tadi.
- Belgilangan qoldiqni qoldirish uchun: o'zaro hisob-kitob = debitor minus qoladigan summa.
- Olingan chegirma va xarid qaytarishlari kreditorlardan o'tadi. Berilgan chegirma, sotuv qaytarishlari va undirib bo'lmaydigan qarzlar o'tmaydi.
- Yetkazib beruvchi ko'chirmasi sotuvchining operatsiyalar yozuvi, mijozga to'lov so'rovi sifatida yuboriladi.
- Xaridni kreditorlar hisobidan toping: yakuniy qoldiq + to'lovlar + chegirmalar + o'zaro hisob-kitob + qaytarishlar - boshlang'ich qoldiq. Debitorlar ma'lumoti kerak emas.
- Yetkazib beruvchi foizi qarzni va foiz xarajatini oshiradi.
- Kreditorlik BIZNES qarzi (soliq idorasiga soliq, yetkazib beruvchilarga). Bank sizga qarzdor foizlar, xodimlarga bergan qarzlaringiz va xaridorlar qarzi debitorlikdir.`,
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
        en: `A cafe owes a shop $3,000. The shop owes the same cafe $1,200 for paper bags. They agree to set off as much as possible.
# Step 1: The maximum contra
  The smaller balance: $1,200
# Step 2: The entry in the shop's books
  Dr Payables $1,200 (the shop owes the cafe less)
  Cr Receivables $1,200 (the cafe owes the shop less)
# Step 3: After the contra
  The shop owes the cafe: $1,200 - $1,200 = $0
  The cafe owes the shop: $3,000 - $1,200 = $1,800
! Setting off $3,000 would make the shop's payable to the cafe a debit balance of $1,800, which makes no sense. That is why the smaller balance is the limit.`,
        ru: `Кафе должно магазину $3,000. Магазин должен тому же кафе $1,200 за пакеты. Они договариваются зачесть как можно больше.
# Шаг 1: Максимальный зачёт
  Меньший остаток: $1,200
# Шаг 2: Проводка у магазина
  Дт Кредиторы $1,200 (магазин должен кафе меньше)
  Кт Дебиторы $1,200 (кафе должно магазину меньше)
# Шаг 3: После зачёта
  Магазин должен кафе: $1,200 - $1,200 = $0
  Кафе должно магазину: $3,000 - $1,200 = $1,800
! Зачёт на $3,000 сделал бы долг магазина перед кафе дебетовым остатком $1,800, что бессмысленно. Поэтому предел — меньший остаток.`,
        uz: `Kafe do'konga $3,000 qarz. Do'kon o'sha kafega paketlar uchun $1,200 qarz. Ular iloji boricha ko'p hisobga olishga kelishadi.
# 1-qadam: Eng ko'p hisob
  Kichik qoldiq: $1,200
# 2-qadam: Do'kon yozuvi
  Dt Kreditorlar $1,200 (do'kon kafega kamroq qarz)
  Kt Debitorlar $1,200 (kafe do'konga kamroq qarz)
# 3-qadam: Hisobdan keyin
  Do'kon kafega: $1,200 - $1,200 = $0
  Kafe do'konga: $3,000 - $1,200 = $1,800
! $3,000 ni hisobga olish do'konning kafega qarzini $1,800 debet qoldiqqa aylantirardi, bu ma'nosiz. Shuning uchun chegara — kichik qoldiq.`,
      },
      simple: {
        en: `Trade payables are what you owe suppliers for things bought on credit. The payables account is the mirror of the receivables account: buying on credit makes it go UP (credit side), and paying, returning goods or taking a discount makes it go DOWN (debit side).

If you both buy from and sell to the same business, you can cancel part of the two debts against each other (a contra). The most you can contra is the smaller of the two amounts.`,
        ru: `Торговая кредиторская задолженность — то, что вы должны поставщикам за покупки в кредит. Счёт кредиторов — зеркало счёта дебиторов: покупка в кредит его УВЕЛИЧИВАЕТ (кредит), а оплата, возврат товара или скидка — УМЕНЬШАЮТ (дебет).

Если вы и покупаете у одного бизнеса, и продаёте ему, часть двух долгов можно взаимно зачесть (взаимозачёт). Зачесть можно не больше меньшей из двух сумм.`,
        uz: `Savdo kreditorligi — nasiyaga olingan narsalar uchun yetkazib beruvchilarga qarzingiz. Kreditorlar hisobi debitorlar hisobining ko'zgusi: nasiyaga xarid uni OSHIRADI (kredit), to'lov, tovar qaytarish yoki chegirma KAMAYTIRADI (debet).

Bitta biznesdan ham sotib olib, unga ham sotsangiz, ikki qarzning bir qismini o'zaro hisobga olish mumkin (o'zaro hisob-kitob). Ko'pi bilan ikki summadan kichigicha hisobga olinadi.`,
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
- A liability can usually be measured exactly. A provision needs judgement and estimation, but it still meets the definition of a liability.
- For a single claim, provide the MOST LIKELY amount the lawyers expect to pay, not the full amount the other side is asking for.`,
        ru: `- Правовая обязанность вытекает из договора, закона или иной нормы права. Пример — гарантия.
- Обязанность из практики вытекает из прошлой практики или объявленной политики, создающей обоснованное ожидание. Пример — известная политика возвратов и публичное обещание устранять экологический ущерб.
- Событие должно произойти до конца года. На уже нанесённый ущерб резерв создаётся, на ожидаемый в будущем — нет.
- Травма после конца года не даёт обязанности на конец года, даже если иск пришёл до завершения отчётности.
- Резерв долгосрочный, если будет погашен позже 12 месяцев после отчётной даты. Он не всегда краткосрочный.
- Обязательство обычно можно измерить точно. Резерв требует суждений и оценки, но всё же отвечает определению обязательства.
- По одному иску создают резерв на НАИБОЛЕЕ ВЕРОЯТНУЮ сумму, которую ожидают заплатить юристы, а не на полную сумму, которую требует другая сторона.`,
        uz: `- Huquqiy burch shartnoma, qonun yoki boshqa huquq normasidan kelib chiqadi. Masalan kafolat.
- Amaliyotdan kelib chiqqan burch o'tgan amaliyot yoki e'lon qilingan siyosatdan keladi va asosli kutish yaratadi. Masalan mashhur qaytarish siyosati yoki atrof-muhit zararini tuzatish va'dasi.
- Voqea yil oxirigacha yuz bergan bo'lishi kerak. Allaqachon yetkazilgan zarar uchun rezerv tuziladi, kelajakdagi kutilgan zarar uchun emas.
- Yil oxiridan keyingi jarohat yil oxirida burch bermaydi, da'vo hisobot tugashidan oldin kelsa ham.
- 12 oydan keyin to'lansa, rezerv uzoq muddatli. U doim qisqa muddatli emas.
- Majburiyatni odatda aniq o'lchash mumkin. Rezerv mulohaza va baho talab qiladi, lekin baribir majburiyat ta'rifiga mos keladi.
- Bitta da'vo bo'yicha zaxira advokatlar to'lanishini kutgan ENG EHTIMOLLI summaga yaratiladi, boshqa tomon talab qilgan to'liq summaga emas.`,
      },
      heading: { en: 'Provisions', ru: 'Резервы', uz: 'Rezervlar' },
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
        en: `A clothes shop promises: "Return anything within 30 days for a full refund", even though the law only covers faulty goods. Customers rely on this.
# Test 1: An obligation from a past event?
  Yes. The promise is well known (a constructive obligation), and the December sales have already happened
# Test 2: Is paying probable?
  Yes. Every year some customers return things
# Test 3: A reliable estimate?
  Yes. Past records show December returns are about $2,500
= All three pass: Dr Expenses $2,500, Cr Provision for refunds $2,500. It is a current liability, because refunds happen within weeks.`,
        ru: `Магазин одежды обещает: «Вернём деньги за любой товар в течение 30 дней», хотя закон требует этого только для брака. Покупатели на это рассчитывают.
# Условие 1: Обязанность из прошлого события?
  Да. Обещание всем известно (обязанность из практики), а декабрьские продажи уже состоялись
# Условие 2: Выплата вероятна?
  Да. Каждый год часть покупателей возвращает товар
# Условие 3: Надёжная оценка?
  Да. По прошлым данным возвраты за декабрь около $2,500
= Все три выполнены: Дт Расходы $2,500, Кт Резерв на возвраты $2,500. Это краткосрочное обязательство, возвраты бывают в течение недель.`,
        uz: `Kiyim do'koni va'da qiladi: «30 kun ichida istalgan tovar uchun pulni qaytaramiz», holbuki qonun faqat nuqsonli tovar uchun talab qiladi. Xaridorlar bunga ishonadi.
# 1-shart: O'tgan voqeadan kelgan burch?
  Ha. Va'da hammaga ma'lum (amaliyotdan kelib chiqqan burch), dekabr sotuvlari esa allaqachon bo'lgan
# 2-shart: To'lov ehtimoli kattami?
  Ha. Har yili ba'zi xaridorlar tovar qaytaradi
# 3-shart: Ishonchli baho?
  Ha. O'tgan yozuvlar bo'yicha dekabr qaytarishlari taxminan $2,500
= Uchalasi bajarildi: Dt Xarajatlar $2,500, Kt Qaytarish rezervi $2,500. Bu qisqa muddatli majburiyat, qaytarishlar haftalar ichida bo'ladi.`,
      },
      simple: {
        en: `A provision is a liability where you know you will probably have to pay, but you are not sure exactly how much or when, such as refunds you expect to give or a court case you will probably lose.

You record one only if all three tests are passed: something has ALREADY happened that creates an obligation (legal or from your own past behaviour), paying is PROBABLE, and you can make a reasonable ESTIMATE. Entry: Dr Expense, Cr Provision.`,
        ru: `Резерв (оценочное обязательство) — обязательство, по которому вы, вероятно, заплатите, но не знаете точно сколько или когда: например ожидаемые возвраты денег или суд, который вы, скорее всего, проиграете.

Его признают, только если выполнены все три условия: УЖЕ произошло событие, создающее обязанность (по закону или из вашей практики), выплата ВЕРОЯТНА, и сумму можно разумно ОЦЕНИТЬ. Проводка: Дт Расход, Кт Резерв.`,
        uz: `Rezerv — to'lashingiz ehtimoli katta, lekin aniq qancha yoki qachonligi noaniq majburiyat: masalan kutilayotgan pul qaytarishlar yoki ehtimol yutqaziladigan sud.

U faqat uchala shart bajarilsa yoziladi: burch keltirib chiqargan voqea ALLAQACHON bo'lgan (qonun yoki o'z amaliyotingizdan), to'lov EHTIMOLI KATTA va summani oqilona BAHOLASH mumkin. Yozuv: Dt Xarajat, Kt Rezerv.`,
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
      heading: { en: 'Changes in provisions', ru: 'Изменение резервов', uz: 'Rezervlarning o\'zgarishi' },
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
        en: `The clothes shop's refund provision is $2,500. A year later sales have grown and it expects $3,100 of returns.
# Step 1: The change
  $3,100 - $2,500 = $600 increase
# Step 2: The entry
  Dr Expenses $600, Cr Provision for refunds $600
= The liability is now $3,100, and this year's profit bears only the $600 change.
If instead the estimate had fallen to $2,000: Dr Provision $500, Cr Expenses $500.`,
        ru: `Резерв на возвраты в магазине одежды $2,500. Через год продажи выросли, ожидают возвратов на $3,100.
# Шаг 1: Изменение
  $3,100 - $2,500 = рост $600
# Шаг 2: Проводка
  Дт Расходы $600, Кт Резерв на возвраты $600
= Обязательство теперь $3,100, а прибыль этого года несёт только изменение $600.
Если бы оценка упала до $2,000: Дт Резерв $500, Кт Расходы $500.`,
        uz: `Kiyim do'konining qaytarish rezervi $2,500. Bir yildan keyin sotuv o'sdi, $3,100 qaytarish kutiladi.
# 1-qadam: O'zgarish
  $3,100 - $2,500 = $600 o'sish
# 2-qadam: Yozuv
  Dt Xarajatlar $600, Kt Qaytarish rezervi $600
= Majburiyat endi $3,100, bu yil foydasi faqat $600 o'zgarishni ko'taradi.
Agar baho $2,000 ga tushganida: Dt Rezerv $500, Kt Xarajatlar $500.`,
      },
      simple: {
        en: `A provision is only an estimate, so it is checked again at every year end and changed to the best current figure.

Only the CHANGE is recorded, in the year it happens. A bigger estimate is an extra expense. A smaller one is a reduction in expenses. Either way it goes through profit or loss.`,
        ru: `Резерв — лишь оценка, поэтому его проверяют в конце каждого года и меняют на лучшую текущую сумму.

Записывают только ИЗМЕНЕНИЕ, в том году, когда оно произошло. Большая оценка — дополнительный расход. Меньшая — уменьшение расходов. В любом случае через прибыль или убыток.`,
        uz: `Rezerv faqat baho, shuning uchun har yil oxirida qayta tekshirilib, eng yaxshi joriy summaga o'zgartiriladi.

Faqat O'ZGARISH, u bo'lgan yilda yoziladi. Katta baho — qo'shimcha xarajat. Kichigi — xarajatlarning kamayishi. Har ikkala holda foyda yoki zarar orqali.`,
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
        en: `A customer sues a shop for $9,000, saying a faulty heater damaged their home. The shop sues the heater's maker for the same $9,000.
# The customer's claim against the shop
  Lawyers: the shop will PROBABLY lose. A provision of $9,000
# The shop's claim against the maker
  Lawyers: the shop will PROBABLY win. Only probable, not virtually certain: a note, not an asset
# Can they cancel out?
  No. The $9,000 provision stays in full, and the claim against the maker is only described in a note
= If winning became virtually certain, the $9,000 would be shown as a separate asset, still not netted.`,
        ru: `Покупатель подаёт на магазин в суд на $9,000: неисправный обогреватель повредил его дом. Магазин предъявляет иск производителю на те же $9,000.
# Иск покупателя к магазину
  Юристы: магазин ВЕРОЯТНО проиграет. Резерв $9,000
# Иск магазина к производителю
  Юристы: магазин ВЕРОЯТНО выиграет. Только вероятно, не наверняка: примечание, а не актив
# Можно ли их взаимозачесть?
  Нет. Резерв $9,000 остаётся полностью, а иск к производителю только описывают в примечании
= Если выигрыш станет практически несомненным, $9,000 покажут отдельным активом, всё равно без зачёта.`,
        uz: `Xaridor do'konni $9,000 ga sudga beradi: nosoz isitgich uyiga zarar yetkazgan. Do'kon ishlab chiqaruvchiga xuddi $9,000 ga da'vo qiladi.
# Xaridorning do'konga da'vosi
  Huquqshunoslar: do'kon EHTIMOL yutqazadi. $9,000 rezerv
# Do'konning ishlab chiqaruvchiga da'vosi
  Huquqshunoslar: do'kon EHTIMOL yutadi. Faqat ehtimoli katta, deyarli aniq emas: aktiv emas, izoh
# Ular bir-birini yopa oladimi?
  Yo'q. $9,000 rezerv to'liq qoladi, ishlab chiqaruvchiga da'vo faqat izohda tasvirlanadi
= Yutish deyarli aniq bo'lsa, $9,000 alohida aktiv sifatida ko'rsatiladi, baribir o'zaro hisobsiz.`,
      },
      simple: {
        en: `A contingent liability is a POSSIBLE debt that depends on something uncertain, such as a court case you might lose. A contingent asset is a POSSIBLE gain, such as a claim you might win.

Be careful with debts and very careful with gains:
- Liability: probable → provide; possible → note only; remote → ignore.
- Asset: virtually certain → recognise; probable → note only; possible → ignore.
Never net a provision off against a possible gain.`,
        ru: `Условное обязательство — ВОЗМОЖНЫЙ долг, зависящий от неопределённого события, например суда, который вы можете проиграть. Условный актив — ВОЗМОЖНЫЙ выигрыш, например иск, который вы можете выиграть.

С долгами осторожно, с выигрышами — очень осторожно:
- Обязательство: вероятно → резерв; возможно → только примечание; маловероятно → ничего.
- Актив: практически наверняка → признать; вероятно → только примечание; возможно → ничего.
Никогда не взаимозачитывайте резерв с возможным выигрышем.`,
        uz: `Shartli majburiyat — noaniq voqeaga bog'liq MUMKIN bo'lgan qarz, masalan yutqazishingiz mumkin bo'lgan sud. Shartli aktiv — MUMKIN bo'lgan yutuq, masalan yutishingiz mumkin bo'lgan da'vo.

Qarzlarda ehtiyot, yutuqlarda juda ehtiyot bo'ling:
- Majburiyat: ehtimoli katta → rezerv; mumkin → faqat izoh; juda kam → hech narsa.
- Aktiv: deyarli aniq → tan olish; ehtimoli katta → faqat izoh; mumkin → hech narsa.
Rezervni mumkin bo'lgan yutuq bilan hech qachon o'zaro hisoblamang.`,
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
      heading: { en: 'Disclosure under IAS 37', ru: 'Раскрытие по IAS 37', uz: 'IAS 37 bo\'yicha ochib berish' },
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
        en: `The clothes shop's notes at the year end.
# Provision for refunds
  At the start $2,500
  Used during the year (refunds paid) - $2,500
  New provision for this December + $3,100
  At the end $3,100. Refunds are expected within 30 days.
# Contingent liability (note only)
  A customer has claimed $6,000 for a faulty product. Lawyers think the claim could possibly succeed.`,
        ru: `Примечания магазина одежды на конец года.
# Резерв на возвраты
  На начало $2,500
  Использовано за год (выплачены возвраты) - $2,500
  Новый резерв за этот декабрь + $3,100
  На конец $3,100. Возвраты ожидаются в течение 30 дней.
# Условное обязательство (только примечание)
  Покупатель предъявил иск на $6,000 за бракованный товар. Юристы считают, что иск может быть удовлетворён.`,
        uz: `Kiyim do'konining yil oxiridagi izohlari.
# Qaytarish rezervi
  Boshida $2,500
  Yil davomida ishlatilgan (qaytarilgan pul) - $2,500
  Shu dekabr uchun yangi rezerv + $3,100
  Oxirida $3,100. Qaytarishlar 30 kun ichida kutiladi.
# Shartli majburiyat (faqat izoh)
  Xaridor nuqsonli tovar uchun $6,000 da'vo qilgan. Huquqshunoslar da'vo qanoatlantirilishi mumkin deb hisoblaydi.`,
      },
      simple: {
        en: `Provisions appear in the statement of financial position as liabilities, current or non-current depending on when they will be paid.

The notes show, for each type of provision, the amount at the start, new provisions, amounts used, amounts reversed and the amount at the end. For provisions and contingencies the notes also explain what the item is, what is uncertain, and an estimate of the money involved.`,
        ru: `Резервы показывают в отчёте о финансовом положении как обязательства, краткосрочные или долгосрочные в зависимости от срока оплаты.

В примечаниях для каждого вида резерва: сумма на начало, новые резервы, использованные, восстановленные и сумма на конец. Для резервов и условных статей также объясняют, что это, в чём неопределённость, и оценивают сумму.`,
        uz: `Rezervlar moliyaviy holat hisobotida majburiyat sifatida, to'lov muddatiga qarab qisqa yoki uzoq muddatli ko'rsatiladi.

Izohlarda har bir rezerv turi uchun: boshidagi summa, yangi rezervlar, ishlatilgan, qaytarilgan va oxiridagi summa. Rezervlar va shartli moddalar uchun nima ekani, nimasi noaniq va summa bahosi ham tushuntiriladi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Trade payable', ru: 'Торговая кредиторская задолженность', uz: 'Savdo kreditorligi' },
      definition: {
        en: 'An amount owed to a supplier for goods or services bought on credit.',
        ru: 'Сумма, причитающаяся поставщику за товары или услуги в кредит.',
        uz: 'Nasiyaga olingan tovar yoki xizmat uchun yetkazib beruvchiga qarz.',
      },
      example: {
        en: '$1,000 owed to a flour supplier, due in 30 days.',
        ru: '$1,000 долга поставщику муки со сроком 30 дней.',
        uz: 'Un yetkazib beruvchiga 30 kunlik $1,000 qarz.',
      },
    },
    {
      term: { en: 'Contra', ru: 'Взаимозачёт', uz: 'O\'zaro hisob-kitob' },
      definition: {
        en: 'Setting an agreed amount against balances two businesses owe each other.',
        ru: 'Зачёт согласованной суммы между взаимными долгами двух бизнесов.',
        uz: 'Ikki biznesning o\'zaro qarzlaridan kelishilgan summani hisobga olish.',
      },
      example: {
        en: 'You owe a cafe $1,200 and it owes you $3,000: set off $1,200, so it now owes you $1,800.',
        ru: 'Вы должны кафе $1,200, оно вам $3,000: зачли $1,200, теперь оно должно вам $1,800.',
        uz: 'Kafega $1,200 qarzsiz, u sizga $3,000: $1,200 hisobga olindi, endi u sizga $1,800 qarz.',
      },
    },
    {
      term: { en: 'Provision', ru: 'Резерв', uz: 'Rezerv' },
      definition: {
        en: 'A liability of uncertain timing or amount.',
        ru: 'Обязательство с неопределённым сроком или суммой.',
        uz: 'Muddati yoki summasi noaniq majburiyat.',
      },
      example: {
        en: 'Expected refunds of $2,500 for goods sold in December.',
        ru: 'Ожидаемые возвраты на $2,500 за товар, проданный в декабре.',
        uz: 'Dekabrda sotilgan tovar uchun kutilayotgan $2,500 qaytarish.',
      },
    },
    {
      term: { en: 'Legal obligation', ru: 'Правовая обязанность', uz: 'Huquqiy burch' },
      definition: {
        en: 'An obligation arising from a contract, legislation or other operation of law.',
        ru: 'Обязанность из договора, закона или иной нормы права.',
        uz: 'Shartnoma, qonun yoki boshqa huquq normasidan kelib chiqqan burch.',
      },
      example: {
        en: 'A law requiring a 2-year guarantee on every product sold.',
        ru: 'Закон, требующий двухлетней гарантии на каждый проданный товар.',
        uz: 'Har bir sotilgan mahsulotga 2 yillik kafolat talab qiladigan qonun.',
      },
    },
    {
      term: { en: 'Constructive obligation', ru: 'Обязанность из практики', uz: 'Amaliyotdan kelib chiqqan burch' },
      definition: {
        en: 'An obligation arising from an entity\'s own actions, which create a valid expectation in others.',
        ru: 'Обязанность из собственных действий компании, создающих обоснованное ожидание у других.',
        uz: 'Korxonaning o\'z harakatlaridan kelib chiqib, boshqalarda asosli kutish yaratadigan burch.',
      },
      example: {
        en: 'A shop that has always refunded unwanted goods, so customers expect it to keep doing so.',
        ru: 'Магазин, который всегда возвращал деньги за ненужный товар, и покупатели этого ожидают.',
        uz: 'Har doim keraksiz tovar uchun pul qaytargan, xaridorlar buni kutadigan do\'kon.',
      },
    },
    {
      term: { en: 'Contingent liability', ru: 'Условное обязательство', uz: 'Shartli majburiyat' },
      definition: {
        en: 'A possible obligation confirmed only by uncertain future events, or a present one that cannot be recognised.',
        ru: 'Возможная обязанность, подтверждаемая только будущими событиями, или существующая, которую нельзя признать.',
        uz: 'Faqat kelajak voqealari tasdiqlaydigan ehtimoliy burch yoki tan olib bo\'lmaydigan mavjud burch.',
      },
      example: {
        en: 'A $6,000 claim against you that lawyers say could possibly succeed: shown in a note.',
        ru: 'Иск к вам на $6,000, который, по мнению юристов, может быть удовлетворён: в примечании.',
        uz: 'Huquqshunoslar fikricha qanoatlantirilishi mumkin bo\'lgan $6,000 da\'vo: izohda.',
      },
    },
    {
      term: { en: 'Contingent asset', ru: 'Условный актив', uz: 'Shartli aktiv' },
      definition: {
        en: 'A possible asset confirmed only by uncertain future events.',
        ru: 'Возможный актив, подтверждаемый только неопределёнными будущими событиями.',
        uz: 'Faqat noaniq kelajak voqealari tasdiqlaydigan ehtimoliy aktiv.',
      },
      example: {
        en: 'A $9,000 claim you will probably win against a supplier: shown in a note only.',
        ru: 'Иск к поставщику на $9,000, который вы, вероятно, выиграете: только в примечании.',
        uz: 'Yetkazib beruvchiga qarshi ehtimol yutadigan $9,000 da\'vo: faqat izohda.',
      },
    },
    {
      term: { en: 'Probable', ru: 'Вероятно', uz: 'Ehtimoli katta' },
      definition: {
        en: 'More likely than not to happen. A probable liability is provided for; a probable gain is only disclosed.',
        ru: 'Скорее произойдёт, чем нет. Вероятное обязательство — резерв, вероятный выигрыш — только раскрытие.',
        uz: 'Bo\'lishi bo\'lmasligidan ehtimolliroq. Ehtimoli katta majburiyat — rezerv, ehtimoli katta yutuq — faqat izoh.',
      },
      example: {
        en: 'Lawyers say you will probably lose a case: record a provision.',
        ru: 'Юристы говорят, что вы, вероятно, проиграете дело: признаём резерв.',
        uz: 'Huquqshunoslar ish ehtimol yutqaziladi deydi: rezerv yoziladi.',
      },
    },
    {
      term: { en: 'Virtually certain', ru: 'Практически несомненно', uz: 'Deyarli aniq' },
      definition: {
        en: 'So likely that there is almost no doubt. Only then can a contingent asset be recognised.',
        ru: 'Настолько вероятно, что сомнений почти нет. Только тогда условный актив можно признать.',
        uz: 'Shunchalik ehtimolki, deyarli shubha yo\'q. Faqat shunda shartli aktiv tan olinadi.',
      },
      example: {
        en: 'The court has ruled in your favour and the other side has agreed to pay: the asset is recognised.',
        ru: 'Суд решил в вашу пользу, и другая сторона согласилась платить: актив признают.',
        uz: 'Sud sizning foydangizga qaror qildi va boshqa tomon to\'lashga rozi: aktiv tan olinadi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter11;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter11.id] = chapter11;
