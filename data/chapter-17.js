'use strict';

const chapter17 = {
  id: 'chapter-17',
  titles: {
    en: 'Statement of cash flows',
    ru: 'Отчёт о движении денежных средств',
    uz: 'Pul oqimlari to\'g\'risidagi hisobot',
  },
  objectives: [
    { en: 'Explain why profit and cash differ', ru: 'Объяснять, почему прибыль и деньги различаются', uz: 'Foyda va pul nega farq qilishini tushuntirish' },
    { en: 'Describe the benefits and drawbacks of a statement of cash flows', ru: 'Описывать преимущества и недостатки отчёта о движении денег', uz: 'Pul oqimlari hisobotining afzallik va kamchiliklarini tavsiflash' },
    { en: 'Calculate cash from operations by the indirect and direct methods', ru: 'Рассчитывать деньги от операций косвенным и прямым методом', uz: 'Operatsiyalardan pulni bilvosita va to\'g\'ridan-to\'g\'ri usulda hisoblash' },
    { en: 'Calculate investing and financing cash flows', ru: 'Рассчитывать инвестиционные и финансовые потоки', uz: 'Investitsiya va moliyalashtirish oqimlarini hisoblash' },
    { en: 'Prepare a statement of cash flows or extracts from it', ru: 'Составлять отчёт о движении денег или его части', uz: 'Pul oqimlari hisoboti yoki uning qismlarini tuzish' },
  ],
  sections: [
    {
      key: {
        en: `- Profit is not cash. A profitable business can still run out of cash and fail.
- Profit uses the accrual basis, and non-cash costs such as depreciation.
- IAS 7 requires a statement of cash flows from limited liability companies.
- It helps assess liquidity, solvency, financial adaptability and future cash flows.
- Cash flows are facts, so they are harder to manipulate than profit.
- Drawbacks: it is historic, it gives no interpretation, and it leaves out non-cash items.`,
        ru: `- Прибыль — не деньги. Прибыльный бизнес может остаться без денег и закрыться.
- Прибыль считается по начислению и с неденежными расходами, например амортизацией.
- IAS 7 требует отчёт о движении денег от компаний с ограниченной ответственностью.
- Он помогает оценить ликвидность, платёжеспособность, гибкость и будущие потоки.
- Денежные потоки — факты, ими труднее манипулировать, чем прибылью.
- Недостатки: он исторический, не даёт толкования, не показывает неденежные статьи.`,
        uz: `- Foyda pul emas. Foydali biznes pulsiz qolib, yopilishi mumkin.
- Foyda hisoblash usulida va amortizatsiya kabi pulsiz xarajatlar bilan hisoblanadi.
- IAS 7 mas'uliyati cheklangan kompaniyalardan pul oqimlari hisobotini talab qiladi.
- U likvidlik, to'lov qobiliyati, moslashuvchanlik va kelajak oqimlarini baholashga yordam beradi.
- Pul oqimlari fakt, ularni foydaga qaraganda manipulyatsiya qilish qiyin.
- Kamchiliklari: tarixiy, izoh bermaydi, pulsiz moddalarni ko'rsatmaydi.`,
      },
      exam: {
        en: `- A high profit does not mean a net cash inflow from operations. Spending on assets or building up working capital can use the cash.
- Highlighting non-cash transactions is not an advantage of this statement. It leaves them out.
- The figures cannot be changed by choosing helpful accounting policies, which is an advantage.`,
        ru: `- Высокая прибыль не значит чистый приток денег от операций. Покупка активов или рост оборотного капитала могут забрать деньги.
- Выделение неденежных операций — не преимущество этого отчёта. Он их не показывает.
- Цифры нельзя изменить выбором удобной учётной политики, это преимущество.`,
        uz: `- Yuqori foyda operatsiyalardan sof pul kirimini bildirmaydi. Aktivlar xarajati yoki aylanma kapital o'sishi pulni ishlatishi mumkin.
- Pulsiz operatsiyalarni ko'rsatish bu hisobotning afzalligi emas. U ularni ko'rsatmaydi.
- Raqamlarni qulay hisob siyosati bilan o'zgartirib bo'lmaydi, bu afzallik.`,
      },
      heading: {
        en: 'Why cash matters',
        ru: 'Почему важны деньги',
        uz: 'Pul nega muhim',
      },
      body: {
        en: `An entity may be profitable and still not survive, because it needs cash to pay its debts. Profit is worked out on the accrual basis. Most goods are sold on credit, so revenue is recognised before cash arrives, and purchases work in the same way. Expenses such as depreciation involve no cash at all. So a business can report a profit and have too little cash for its short-term liabilities.

If liabilities cannot be paid, suppliers lose goodwill, fines may follow, and in the worst case a lender or supplier may have the entity declared insolvent. Management therefore keeps enough current assets to meet current liabilities as they fall due.

IAS 7 requires a statement of cash flows, with very few exceptions, for limited liability companies. Its aim is to show how the entity generated and used cash, in a form that can be compared between entities, and to help assess liquidity, solvency and financial adaptability.

It also shows where cash came from. In the long run a business must generate cash from operations. If it does not, it relies on selling assets or raising finance.`,
        ru: `Компания может быть прибыльной и всё же не выжить, потому что для оплаты долгов нужны деньги. Прибыль считается по начислению. Большинство товаров продаётся в кредит, поэтому выручка признаётся до поступления денег, как и закупки. Расходы вроде амортизации вообще не связаны с деньгами. Поэтому бизнес может показать прибыль и не иметь денег для краткосрочных обязательств.

Если обязательства не оплачиваются, поставщики теряют доверие, возможны штрафы, а в худшем случае кредитор или поставщик может добиться признания компании неплатёжеспособной. Поэтому руководство держит достаточно оборотных активов для оплаты обязательств в срок.

IAS 7 требует отчёт о движении денег, с очень малыми исключениями, от компаний с ограниченной ответственностью. Его цель — показать, как компания получала и тратила деньги, в сопоставимой форме и помочь оценить ликвидность, платёжеспособность и гибкость.

Он также показывает источник денег. В долгосрочной перспективе бизнес должен получать деньги от операций. Иначе он зависит от продажи активов или привлечения финансирования.`,
        uz: `Korxona foydali bo'lib ham omon qolmasligi mumkin, chunki qarzlarni to'lash uchun pul kerak. Foyda hisoblash usulida topiladi. Ko'p tovarlar nasiyaga sotiladi, tushum pul kelishidan oldin tan olinadi, xaridlar ham shunday. Amortizatsiya kabi xarajatlar pul bilan bog'liq emas. Shuning uchun biznes foyda ko'rsatib, qisqa muddatli majburiyatlar uchun pulsiz qolishi mumkin.

Majburiyatlar to'lanmasa, yetkazib beruvchilar ishonchi yo'qoladi, jarimalar bo'lishi mumkin, eng yomon holda kreditor yoki yetkazib beruvchi korxonani bankrot deb e'lon qildirishi mumkin. Shuning uchun rahbariyat majburiyatlarni o'z vaqtida to'lash uchun yetarli aylanma aktiv saqlaydi.

IAS 7 mas'uliyati cheklangan kompaniyalardan, juda oz istisnolar bilan, pul oqimlari hisobotini talab qiladi. Maqsad korxona pulni qanday topgani va ishlatganini solishtiriladigan shaklda ko'rsatish va likvidlik, to'lov qobiliyati va moslashuvchanlikni baholashga yordam berish.

U pul qayerdan kelganini ham ko'rsatadi. Uzoq muddatda biznes operatsiyalardan pul topishi kerak. Aks holda u aktiv sotish yoki moliya jalb qilishga bog'liq.`,
      },
      simple: {
        en: `Profit is what you earned on paper. Cash is the money really in the bank. They differ because customers often pay later, and some costs, such as depreciation, never use any money.

So a business can show a profit and still be unable to pay its bills. The statement of cash flows shows where the real money came from and where it went.`,
        ru: `Прибыль — это сколько вы заработали на бумаге. Деньги — это то, что реально лежит в банке. Они различаются, потому что покупатели часто платят позже, а некоторые расходы, например амортизация, вообще не тратят денег.

Поэтому бизнес может показывать прибыль и всё равно не суметь оплатить счета. Отчёт о движении денежных средств показывает, откуда пришли настоящие деньги и куда они ушли.`,
        uz: `Foyda — qog'ozda qancha ishlaganingiz. Pul — bankda haqiqatan bor narsa. Ular farq qiladi, chunki mijozlar ko'pincha keyinroq to'laydi, amortizatsiya kabi ba'zi xarajatlar esa umuman pul sarflamaydi.

Shuning uchun biznes foyda ko'rsatib, hisoblarini to'lay olmasligi mumkin. Pul oqimlari to'g'risidagi hisobot haqiqiy pul qayerdan kelgani va qayerga ketganini ko'rsatadi.`,
      },
      example: {
        en: `You buy 10 phones for $60 each and pay the supplier straight away. In December you sell them all for $100 each, and the customer will pay in February.

# Profit for December
  Sales: 10 × $100 = $1,000
  Cost of the phones: 10 × $60 = $600
= Profit: $1,000 - $600 = $400
# Cash in December
  Paid to the supplier: $600 out
  Received from the customer: $0
= Cash: down by $600

On paper you made $400. In real life you have $600 less until February, and January's rent still has to be paid. The statement of cash flows shows this problem. The statement of profit or loss does not.`,
        ru: `Вы покупаете 10 телефонов по $60 и сразу платите поставщику. В декабре вы продаёте их все по $100, а покупатель заплатит в феврале.

# Прибыль за декабрь
  Продажи: 10 × $100 = $1,000
  Себестоимость телефонов: 10 × $60 = $600
= Прибыль: $1,000 - $600 = $400
# Деньги в декабре
  Заплачено поставщику: $600 ушло
  Получено от покупателя: $0
= Деньги: уменьшились на $600

На бумаге вы заработали $400. В реальности до февраля у вас на $600 меньше, а аренду за январь всё равно надо платить. Отчёт о движении денежных средств показывает эту проблему. Отчёт о прибыли или убытке — нет.`,
        uz: `Siz 10 ta telefonni $60 dan sotib olib, yetkazib beruvchiga darhol to'laysiz. Dekabrda hammasini $100 dan sotasiz, mijoz esa fevralda to'laydi.

# Dekabr foydasi
  Sotuv: 10 × $100 = $1,000
  Telefonlar tannarxi: 10 × $60 = $600
= Foyda: $1,000 - $600 = $400
# Dekabrdagi pul
  Yetkazib beruvchiga to'langan: $600 chiqdi
  Mijozdan olingan: $0
= Pul: $600 ga kamaydi

Qog'ozda siz $400 ishladingiz. Haqiqatda fevralgacha pulingiz $600 kam, yanvar ijarasini esa baribir to'lash kerak. Pul oqimlari to'g'risidagi hisobot bu muammoni ko'rsatadi. Foyda yoki zarar hisoboti esa ko'rsatmaydi.`,
      },
    },
    {
      key: {
        en: `- Three headings: operating, investing and financing activities.
- Operating: the main revenue-producing activities, including income tax paid.
- Investing: buying and selling non-current assets, interest and dividends received.
- Financing: issuing shares, raising and repaying loans, interest and dividends paid.
- Cash is cash on hand and demand deposits, less overdrafts.
- Cash equivalents are short-term, highly liquid investments, such as a 30-day bond.`,
        ru: `- Три раздела: операционная, инвестиционная и финансовая деятельность.
- Операционная: основная деятельность, включая уплаченный налог на прибыль.
- Инвестиционная: покупка и продажа внеоборотных активов, полученные проценты и дивиденды.
- Финансовая: выпуск акций, получение и возврат займов, уплаченные проценты и дивиденды.
- Деньги: наличные и депозиты до востребования минус овердрафты.
- Эквиваленты: краткосрочные высоколиквидные вложения, например 30-дневная облигация.`,
        uz: `- Uch bo'lim: operatsion, investitsion va moliyaviy faoliyat.
- Operatsion: asosiy daromad faoliyati, to'langan foyda solig'i bilan.
- Investitsion: uzoq muddatli aktivlar oldi-sotdisi, olingan foiz va dividendlar.
- Moliyaviy: aksiya chiqarish, qarz olish va qaytarish, to'langan foiz va dividendlar.
- Pul: naqd va talab bo'yicha depozitlar minus overdraftlar.
- Ekvivalentlar: qisqa muddatli likvid sarmoyalar, masalan 30 kunlik obligatsiya.`,
      },
      exam: {
        en: `- Interest paid and dividends paid are financing. Interest received and dividends received are investing.
- A bonus issue and a revaluation involve no cash, so they are not in this statement.
- A proposed dividend is not a cash flow either. A rights issue and dividends paid are.
- Disposal proceeds are only in the statement of cash flows. The carrying amount and any gain or loss are elsewhere.
- Depreciation, amortisation and a loss on sale are not cash flows, so they never appear under investing.
- Work out the movement in total cash: closing cash and cash equivalents - opening.`,
        ru: `- Уплаченные проценты и дивиденды — финансовые. Полученные проценты и дивиденды — инвестиционные.
- Бонусный выпуск и переоценка не связаны с деньгами, в этом отчёте их нет.
- Предложенный дивиденд тоже не денежный поток. Выпуск прав и выплаченные дивиденды — да.
- Выручка от выбытия есть только в этом отчёте. Балансовая стоимость и прибыль или убыток — в других.
- Амортизация и убыток от продажи — не денежные потоки, в инвестиционном разделе их нет.
- Изменение денег: деньги и эквиваленты на конец - на начало.`,
        uz: `- To'langan foiz va dividendlar moliyaviy. Olingan foiz va dividendlar investitsion.
- Bonusli chiqarish va qayta baholash pulsiz, bu hisobotda yo'q.
- Taklif qilingan dividend ham pul oqimi emas. Huquqli chiqarish va to'langan dividendlar ha.
- Chiqish tushumi faqat bu hisobotda. Balans qiymati va foyda yoki zarar boshqa joyda.
- Amortizatsiya va sotuv zarari pul oqimi emas, investitsionda yo'q.
- Pul o'zgarishi: yakuniy pul va ekvivalentlar - boshlang'ich.`,
      },
      heading: {
        en: 'The format of the statement',
        ru: 'Формат отчёта',
        uz: 'Hisobot shakli',
      },
      body: {
        en: `IAS 7 requires cash flows to be shown under standard headings.

Operating activities start from cash generated from operations, less income taxes paid, to give net cash from operating activities. Investing activities cover buying property, plant and equipment, proceeds of selling equipment, interest received and dividends received. Financing activities cover proceeds of share issues, receipt and repayment of loans, interest paid and dividends paid.

The three totals give the net increase or decrease in cash and cash equivalents. Add the opening cash and cash equivalents and the result is the closing figure, which should agree with the statement of financial position.

Cash means cash on hand and demand deposits, less overdrafts. Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and are subject to an insignificant risk of changes in value.`,
        ru: `IAS 7 требует показывать потоки по стандартным разделам.

Операционная деятельность начинается с денег от операций, минус уплаченный налог, что даёт чистые деньги от операционной деятельности. Инвестиционная включает покупку основных средств, выручку от продажи оборудования, полученные проценты и дивиденды. Финансовая включает выпуск акций, получение и возврат займов, уплаченные проценты и дивиденды.

Три итога дают чистое увеличение или уменьшение денег и эквивалентов. Прибавьте деньги и эквиваленты на начало, и результат — сумма на конец, которая должна совпасть с отчётом о финансовом положении.

Деньги — наличные и депозиты до востребования минус овердрафты. Эквиваленты — краткосрочные высоколиквидные вложения, легко обратимые в известную сумму денег с незначительным риском изменения стоимости.`,
        uz: `IAS 7 oqimlarni standart bo'limlarda ko'rsatishni talab qiladi.

Operatsion faoliyat operatsiyalardan pul, minus to'langan soliqdan boshlanadi va operatsion faoliyatdan sof pulni beradi. Investitsion faoliyat asosiy vositalarni olish, uskuna sotishdan tushum, olingan foiz va dividendlarni qamraydi. Moliyaviy faoliyat aksiya chiqarish, qarz olish va qaytarish, to'langan foiz va dividendlarni qamraydi.

Uch jam pul va ekvivalentlarning sof o'sishi yoki kamayishini beradi. Boshlang'ich pul va ekvivalentlarni qo'shing, natija yakuniy summa, u moliyaviy holat hisoboti bilan mos kelishi kerak.

Pul — naqd va talab bo'yicha depozitlar minus overdraftlar. Ekvivalentlar — ma'lum summaga oson aylanadigan, qiymat o'zgarish xavfi kichik qisqa muddatli likvid sarmoyalar.`,
      },
      simple: {
        en: `Every dollar that comes in or goes out is put into one of three boxes.

- Operating: the normal day-to-day business, such as selling, and paying suppliers, staff and tax.
- Investing: buying or selling long-term things like machines, plus interest and dividends you receive.
- Financing: money from or back to the owners and lenders, such as shares and loans, plus the interest and dividends you pay.

Add the three boxes together and you get how much the cash went up or down in the year.`,
        ru: `Каждый доллар, который пришёл или ушёл, попадает в одну из трёх «коробок».

- Операционная: обычная ежедневная работа — продажи, оплата поставщикам, персоналу и налог.
- Инвестиционная: покупка или продажа долгосрочных вещей, например оборудования, плюс полученные проценты и дивиденды.
- Финансовая: деньги от владельцев и кредиторов или обратно им — акции и займы, плюс уплаченные проценты и дивиденды.

Сложите три коробки — и получите, на сколько деньги выросли или уменьшились за год.`,
        uz: `Kirgan yoki chiqqan har bir dollar uchta «quti»dan biriga tushadi.

- Operatsion: kundalik oddiy ish — sotuv, yetkazib beruvchilar, xodimlar va soliq uchun to'lov.
- Investitsion: mashina kabi uzoq muddatli narsalarni sotib olish yoki sotish, hamda olingan foiz va dividendlar.
- Moliyaviy: egalar va qarz beruvchilardan kelgan yoki ularga qaytgan pul — aksiyalar va qarzlar, hamda to'langan foiz va dividendlar.

Uch qutini qo'shsangiz, yil davomida pul qanchaga oshgani yoki kamaygani chiqadi.`,
      },
      example: {
        en: `A small coffee shop company, one year.

# Operating: selling coffee, paying for beans, staff and tax
  Net cash from operating activities: + $9,000
# Investing: bought a new coffee machine
  Net cash from investing activities: - $5,000
# Financing: sold new shares for $2,000, repaid $1,000 of a bank loan
  $2,000 - $1,000 = + $1,000
= Change in cash: $9,000 - $5,000 + $1,000 = + $5,000

Cash was $3,000 at the start of the year, so it is $3,000 + $5,000 = $8,000 at the end. That $8,000 must match the cash on the statement of financial position.`,
        ru: `Небольшая компания-кофейня, один год.

# Операционная: продажа кофе, оплата зёрен, персонала и налога
  Чистые деньги от операционной деятельности: + $9,000
# Инвестиционная: купили новую кофемашину
  Чистые деньги от инвестиционной деятельности: - $5,000
# Финансовая: продали новые акции за $2,000, вернули $1,000 банковского займа
  $2,000 - $1,000 = + $1,000
= Изменение денег: $9,000 - $5,000 + $1,000 = + $5,000

На начало года было $3,000, значит на конец $3,000 + $5,000 = $8,000. Эти $8,000 должны совпасть с деньгами в отчёте о финансовом положении.`,
        uz: `Kichik qahvaxona kompaniyasi, bir yil.

# Operatsion: qahva sotish, don, xodimlar va soliq uchun to'lov
  Operatsion faoliyatdan sof pul: + $9,000
# Investitsion: yangi qahva mashinasi sotib olindi
  Investitsion faoliyatdan sof pul: - $5,000
# Moliyaviy: yangi aksiyalar $2,000 ga sotildi, bank qarzidan $1,000 qaytarildi
  $2,000 - $1,000 = + $1,000
= Puldagi o'zgarish: $9,000 - $5,000 + $1,000 = + $5,000

Yil boshida $3,000 bor edi, demak oxirida $3,000 + $5,000 = $8,000. Bu $8,000 moliyaviy holat hisobotidagi pul bilan mos kelishi kerak.`,
      },
    },
    {
      key: {
        en: `- Indirect method: start with operating profit and adjust for non-cash items.
- Add back depreciation, amortisation and a loss on disposal. Deduct a gain on disposal.
- Inventory or receivables up: deduct. Down: add.
- Payables up: add. Down: deduct.
- Direct method: cash from customers less cash to suppliers and employees.
- Both methods give the same net cash from operating activities.`,
        ru: `- Косвенный метод: начните с операционной прибыли и скорректируйте неденежные статьи.
- Прибавьте амортизацию и убыток от выбытия. Вычтите прибыль от выбытия.
- Запасы или дебиторы выросли: вычесть. Упали: прибавить.
- Кредиторы выросли: прибавить. Упали: вычесть.
- Прямой метод: деньги от покупателей минус деньги поставщикам и сотрудникам.
- Оба метода дают одинаковые чистые деньги от операционной деятельности.`,
        uz: `- Bilvosita usul: operatsion foydadan boshlang va pulsiz moddalarni tuzating.
- Amortizatsiya va chiqish zararini qo'shing. Chiqish foydasini ayiring.
- Zaxira yoki debitorlar oshdi: ayiring. Kamaydi: qo'shing.
- Kreditorlar oshdi: qo'shing. Kamaydi: ayiring.
- To'g'ridan-to'g'ri usul: mijozlardan pul minus yetkazib beruvchi va xodimlarga pul.
- Ikkala usul operatsion faoliyatdan bir xil sof pulni beradi.`,
      },
      exam: {
        en: `- If the question starts from profit before tax, add back finance costs first to reach operating profit.
- Added to operating profit: depreciation, a loss on sale, a fall in inventory or receivables, a rise in payables.
- A profit on sale is deducted, not added.
- The direct method shows receipts from customers and payments to suppliers and employees. Movements in inventory, receivables and payables belong to the indirect method.
- Depreciation is never a line under the direct method, because no cash moves.
- The only difference between the two methods is the presentation within operating activities. Investing and financing are the same.
- Cash from customers = opening receivables + sales - closing receivables.
- Cash paid to suppliers = opening payables + purchases - closing payables. Inventory movements are ignored if purchases are given.
- Wages paid = opening accrual + expense - closing accrual.`,
        ru: `- Если задача начинается с прибыли до налога, сначала прибавьте финансовые расходы, чтобы получить операционную прибыль.
- К операционной прибыли прибавляются: амортизация, убыток от продажи, падение запасов или дебиторов, рост кредиторов.
- Прибыль от продажи вычитается, а не прибавляется.
- Прямой метод показывает поступления от покупателей и выплаты поставщикам и сотрудникам. Изменения запасов, дебиторов и кредиторов — косвенный метод.
- Амортизации нет в прямом методе, так как деньги не двигаются.
- Методы различаются только показом операционной деятельности. Инвестиционная и финансовая одинаковы.
- Деньги от покупателей = дебиторы на начало + продажи - дебиторы на конец.
- Выплаты поставщикам = кредиторы на начало + закупки - кредиторы на конец. Если закупки даны, изменение запасов игнорируется.
- Выплаченная зарплата = начисление на начало + расход - начисление на конец.`,
        uz: `- Masala soliqdan oldingi foydadan boshlansa, avval moliyaviy xarajatlarni qo'shib operatsion foydani toping.
- Operatsion foydaga qo'shiladi: amortizatsiya, sotuv zarari, zaxira yoki debitorlar kamayishi, kreditorlar oshishi.
- Sotuv foydasi qo'shilmaydi, ayiriladi.
- To'g'ridan-to'g'ri usul mijozlardan tushum va yetkazib beruvchi hamda xodimlarga to'lovni ko'rsatadi. Zaxira, debitor va kreditor o'zgarishlari bilvosita usulga tegishli.
- To'g'ridan-to'g'ri usulda amortizatsiya yo'q, chunki pul harakatlanmaydi.
- Usullar faqat operatsion faoliyat ko'rinishida farq qiladi. Investitsion va moliyaviy bir xil.
- Mijozlardan pul = boshlang'ich debitorlar + sotuv - yakuniy debitorlar.
- Yetkazib beruvchilarga to'lov = boshlang'ich kreditorlar + xaridlar - yakuniy kreditorlar. Xaridlar berilgan bo'lsa, zaxira o'zgarishi e'tiborsiz.
- To'langan ish haqi = boshlang'ich hisoblangan + xarajat - yakuniy hisoblangan.`,
      },
      heading: {
        en: 'Cash from operating activities',
        ru: 'Деньги от операционной деятельности',
        uz: 'Operatsion faoliyatdan pul',
      },
      body: {
        en: `There are two ways to present this section, and you need to be able to use both.

The indirect method starts with operating profit and adjusts it for items that did not involve cash. Depreciation is added back, because it is a non-cash expense. A loss on disposal is added back and a gain is deducted, because the actual proceeds appear under investing.

Working capital movements are adjusted too. An increase in inventory means cash has gone into goods not yet sold, so it is deducted. An increase in receivables means sales have been recorded but not collected, so it is deducted. An increase in payables means goods have been received but not paid for, which preserves cash, so it is added. A decrease in each works the opposite way.

The direct method uses cash figures taken directly from the records, or worked out from summary accounts. It lists cash received from customers, then cash paid to suppliers and to employees. It gives more detail, but most entities prefer the indirect method, partly because the direct method reveals information they would rather keep confidential.

Income taxes paid are then deducted to give net cash from operating activities. Use a T-account: opening liability + charge for the year - closing liability = tax paid.`,
        ru: `Этот раздел можно показать двумя способами, и нужно уметь оба.

Косвенный метод начинается с операционной прибыли и корректирует её на статьи без движения денег. Амортизация прибавляется, так как это неденежный расход. Убыток от выбытия прибавляется, а прибыль вычитается, так как фактическая выручка идёт в инвестиционный раздел.

Корректируется и движение оборотного капитала. Рост запасов значит, что деньги вложены в непроданный товар, поэтому вычитается. Рост дебиторов значит, что продажи записаны, но деньги не собраны, поэтому вычитается. Рост кредиторов значит, что товар получен, но не оплачен, это сохраняет деньги, поэтому прибавляется. Снижение работает наоборот.

Прямой метод использует денежные суммы прямо из записей или рассчитанные по сводным счетам. Он показывает деньги от покупателей, затем деньги поставщикам и сотрудникам. Он подробнее, но большинство компаний предпочитает косвенный, в том числе потому, что прямой раскрывает то, что они хотели бы не показывать.

Затем вычитается уплаченный налог, что даёт чистые деньги от операционной деятельности. Используйте Т-счёт: обязательство на начало + расход за год - обязательство на конец = уплаченный налог.`,
        uz: `Bu bo'limni ikki usulda ko'rsatish mumkin va ikkalasini ham bilish kerak.

Bilvosita usul operatsion foydadan boshlanadi va uni pul bilan bog'liq bo'lmagan moddalarga tuzatadi. Amortizatsiya qo'shiladi, chunki pulsiz xarajat. Chiqish zarari qo'shiladi, foydasi ayiriladi, chunki haqiqiy tushum investitsion bo'limda.

Aylanma kapital harakati ham tuzatiladi. Zaxira oshishi pul sotilmagan tovarga ketganini bildiradi, ayiriladi. Debitorlar oshishi sotuv yozilgan, pul yig'ilmaganini bildiradi, ayiriladi. Kreditorlar oshishi tovar olingan, to'lanmaganini bildiradi, bu pulni saqlaydi, qo'shiladi. Kamayish teskari ishlaydi.

To'g'ridan-to'g'ri usul yozuvlardan olingan yoki jamlovchi hisoblardan topilgan pul summalaridan foydalanadi. U mijozlardan pulni, so'ng yetkazib beruvchilar va xodimlarga pulni ko'rsatadi. U batafsilroq, lekin ko'pchilik bilvosita usulni afzal ko'radi, qisman chunki to'g'ridan-to'g'ri usul ular yashirmoqchi bo'lgan ma'lumotni ochadi.

So'ng to'langan soliq ayirilib, operatsion faoliyatdan sof pul chiqadi. T-hisob ishlating: boshlang'ich majburiyat + yil xarajati - yakuniy majburiyat = to'langan soliq.`,
      },
      simple: {
        en: `The indirect method starts with operating profit and turns it into cash.

- Add back costs that used no money, such as depreciation. Add back a loss on selling an asset and deduct a gain, because the sale money is shown under investing.
- Money stuck in more stock, or in customers' unpaid bills, is money you do not have. Deduct those increases.
- If you owe suppliers more than before, you still have that cash. Add the increase.

Then take off the tax you actually paid. The direct method simply lists the real cash from customers and the real cash paid to suppliers and staff. Both methods give the same answer.`,
        ru: `Косвенный метод начинается с операционной прибыли и превращает её в деньги.

- Прибавьте расходы, которые не тратили денег, например амортизацию. Прибавьте убыток от продажи актива и вычтите прибыль, потому что деньги от продажи показаны в инвестиционной.
- Деньги, застрявшие в большем запасе товара или в неоплаченных счетах покупателей, — это деньги, которых у вас нет. Вычтите этот рост.
- Если вы должны поставщикам больше, чем раньше, эти деньги ещё у вас. Прибавьте рост.

Затем вычтите фактически уплаченный налог. Прямой метод просто перечисляет реальные деньги от покупателей и реальные выплаты поставщикам и персоналу. Оба метода дают один ответ.`,
        uz: `Bilvosita usul operatsion foydadan boshlanadi va uni pulga aylantiradi.

- Pul sarflamagan xarajatlarni, masalan amortizatsiyani, qaytarib qo'shing. Aktiv sotuvidan zararni qo'shing, foydani ayiring, chunki sotuv puli investitsionda ko'rsatiladi.
- Ko'proq zaxirada yoki mijozlarning to'lanmagan hisoblarida qotgan pul — sizda yo'q pul. Bu o'sishlarni ayiring.
- Yetkazib beruvchilarga avvalgidan ko'proq qarz bo'lsangiz, o'sha pul hali sizda. O'sishni qo'shing.

So'ng haqiqatan to'langan soliqni ayiring. To'g'ridan-to'g'ri usul esa mijozlardan kelgan haqiqiy pulni va yetkazib beruvchi hamda xodimlarga to'langan haqiqiy pulni sanaydi. Ikkala usul bir xil javob beradi.`,
      },
      example: {
        en: `A shop's operating profit is $10,000. Here is how it becomes cash.

# Step 1: Add back depreciation (a cost that used no cash)
  $10,000 + $2,000 = $12,000
# Step 2: Inventory went up from $3,000 to $4,000
  You spent $1,000 more on stock still on the shelf. Deduct it: $12,000 - $1,000 = $11,000
# Step 3: Receivables went up from $1,500 to $2,000
  Customers owe you $500 more that you have not collected. Deduct it: $11,000 - $500 = $10,500
# Step 4: Payables went up from $2,000 to $2,800
  You owe suppliers $800 more, so that cash is still in your bank. Add it: $10,500 + $800 = $11,300
= Cash generated from operations: $11,300
# Step 5: Tax actually paid
  Tax owed at the start $1,000 + this year's tax $1,500 - tax still owed at the end $1,200 = $1,300
= Net cash from operating activities: $11,300 - $1,300 = $10,000
! Remember: an increase in an asset (inventory, receivables) is deducted. An increase in a liability (payables) is added.`,
        ru: `Операционная прибыль магазина $10,000. Вот как она превращается в деньги.

# Шаг 1: Прибавляем амортизацию (расход без денег)
  $10,000 + $2,000 = $12,000
# Шаг 2: Запасы выросли с $3,000 до $4,000
  Вы потратили на $1,000 больше на товар, который ещё на полке. Вычитаем: $12,000 - $1,000 = $11,000
# Шаг 3: Дебиторы выросли с $1,500 до $2,000
  Покупатели должны вам на $500 больше, и вы их не получили. Вычитаем: $11,000 - $500 = $10,500
# Шаг 4: Кредиторы выросли с $2,000 до $2,800
  Вы должны поставщикам на $800 больше, эти деньги ещё в банке. Прибавляем: $10,500 + $800 = $11,300
= Деньги от операций: $11,300
# Шаг 5: Фактически уплаченный налог
  Долг по налогу на начало $1,000 + налог года $1,500 - долг на конец $1,200 = $1,300
= Чистые деньги от операционной деятельности: $11,300 - $1,300 = $10,000
! Запомните: рост актива (запасы, дебиторы) вычитается. Рост обязательства (кредиторы) прибавляется.`,
        uz: `Do'konning operatsion foydasi $10,000. Mana u qanday pulga aylanadi.

# 1-qadam: Amortizatsiyani qo'shamiz (pulsiz xarajat)
  $10,000 + $2,000 = $12,000
# 2-qadam: Zaxira $3,000 dan $4,000 ga oshdi
  Hali javonda turgan tovarga $1,000 ko'proq sarfladingiz. Ayiramiz: $12,000 - $1,000 = $11,000
# 3-qadam: Debitorlar $1,500 dan $2,000 ga oshdi
  Mijozlar sizga $500 ko'proq qarz, siz uni olmadingiz. Ayiramiz: $11,000 - $500 = $10,500
# 4-qadam: Kreditorlar $2,000 dan $2,800 ga oshdi
  Yetkazib beruvchilarga $800 ko'proq qarzsiz, bu pul hali bankda. Qo'shamiz: $10,500 + $800 = $11,300
= Operatsiyalardan pul: $11,300
# 5-qadam: Haqiqatan to'langan soliq
  Boshidagi soliq qarzi $1,000 + yil solig'i $1,500 - oxiridagi qarz $1,200 = $1,300
= Operatsion faoliyatdan sof pul: $11,300 - $1,300 = $10,000
! Eslang: aktiv oshishi (zaxira, debitorlar) ayiriladi. Majburiyat oshishi (kreditorlar) qo'shiladi.`,
      },
    },
    {
      key: {
        en: `- Purchases of property, plant and equipment are an outflow. Sale proceeds are an inflow.
- Use a T-account for carrying amount, cost or accumulated depreciation.
- Carrying amount: opening + revaluation + additions - disposals - depreciation = closing.
- Proceeds = carrying amount sold + gain, or - loss.
- Interest and dividends received go here.
- Investments bought or sold go here too.`,
        ru: `- Покупка основных средств — отток. Выручка от продажи — приток.
- Используйте Т-счёт для балансовой стоимости, стоимости или накопленной амортизации.
- Балансовая: на начало + переоценка + покупки - выбытия - амортизация = на конец.
- Выручка = проданная балансовая стоимость + прибыль или - убыток.
- Полученные проценты и дивиденды идут сюда.
- Купленные или проданные инвестиции — тоже.`,
        uz: `- Asosiy vositalarni olish chiqim. Sotish tushumi kirim.
- Balans qiymati, qiymat yoki to'plangan amortizatsiya uchun T-hisob ishlating.
- Balans qiymati: boshlang'ich + qayta baholash + xaridlar - chiqishlar - amortizatsiya = yakuniy.
- Tushum = sotilgan balans qiymati + foyda yoki - zarar.
- Olingan foiz va dividendlar shu yerda.
- Sotib olingan yoki sotilgan investitsiyalar ham.`,
      },
      exam: {
        en: `- Remember a revaluation when finding additions. It raises the carrying amount with no cash.
- A new loan to help buy assets is financing, not investing, even if it paid for the purchase.
- If an interest or dividend receivable exists, use: opening + income - closing = cash received.
- Show the purchase and the proceeds as two separate lines, not a net movement.
- A loss or profit on disposal is not an investing cash flow. Only the proceeds are.`,
        ru: `- При поиске покупок помните о переоценке. Она поднимает балансовую стоимость без денег.
- Новый заём на покупку активов — финансовый, а не инвестиционный поток.
- Если есть дебитор по процентам или дивидендам: на начало + доход - на конец = получено.
- Покупку и выручку показывайте двумя строками, а не нетто.
- Прибыль или убыток от выбытия — не инвестиционный поток. Им является только выручка.`,
        uz: `- Xaridlarni topishda qayta baholashni eslang. U balans qiymatini pulsiz oshiradi.
- Aktiv olish uchun yangi qarz investitsion emas, moliyaviy oqim.
- Foiz yoki dividend debitori bo'lsa: boshlang'ich + daromad - yakuniy = olingan.
- Xarid va tushumni ikki alohida qatorda ko'rsating, sof harakat emas.
- Chiqish foydasi yoki zarari investitsion oqim emas. Faqat tushum.`,
      },
      heading: {
        en: 'Investing cash flows',
        ru: 'Инвестиционные потоки',
        uz: 'Investitsion oqimlar',
      },
      body: {
        en: `Investing inflows include interest income, dividends received and proceeds of disposing of non-current assets. Outflows include buying property, plant and equipment. IAS 7 requires interest and dividends received to be classified here.

Interest and dividends are found from the income in profit or loss, adjusted for any receivable at the start and end of the year. If there is no receivable, the cash equals the income.

Purchases and sale proceeds are often the hardest figures to find, so T-accounts are recommended. Use one for cost, one for accumulated depreciation and one for disposals for each class of asset, and let the required cash flow be the balancing figure.

If there is too little detail for that, use a single carrying amount account. Remember that if assets have been revalued, the increase goes on the debit side.`,
        ru: `Притоки включают процентный доход, полученные дивиденды и выручку от выбытия внеоборотных активов. Оттоки — покупку основных средств. IAS 7 требует относить полученные проценты и дивиденды сюда.

Проценты и дивиденды находят из дохода в прибыли или убытке с учётом дебитора на начало и конец года. Если дебитора нет, деньги равны доходу.

Покупки и выручку часто найти сложнее всего, поэтому рекомендуются Т-счета. Для каждого класса активов используйте счёт стоимости, накопленной амортизации и выбытия, и нужный поток будет балансирующей цифрой.

Если данных мало, используйте один счёт балансовой стоимости. Помните: если активы переоценены, прирост идёт в дебет.`,
        uz: `Kirimlarga foiz daromadi, olingan dividendlar va uzoq muddatli aktivlar chiqishidan tushum kiradi. Chiqimlarga asosiy vositalarni olish kiradi. IAS 7 olingan foiz va dividendlarni shu yerda tasniflashni talab qiladi.

Foiz va dividendlar foyda yoki zarardagi daromaddan, yil boshi va oxiridagi debitorni hisobga olib topiladi. Debitor bo'lmasa, pul daromadga teng.

Xarid va sotuv tushumini topish ko'pincha eng qiyin, shuning uchun T-hisoblar tavsiya etiladi. Har bir aktiv sinfi uchun qiymat, to'plangan amortizatsiya va chiqish hisoblarini ishlating, kerakli oqim balanslovchi summa bo'ladi.

Ma'lumot kam bo'lsa, bitta balans qiymati hisobini ishlating. Aktivlar qayta baholangan bo'lsa, o'sish debetga yozilishini unutmang.`,
      },
      simple: {
        en: `Investing cash flows are about long-term things. Buying machines, vans or buildings is money out. Selling them is money in. Interest and dividends you receive go here too.

Questions rarely tell you how much was spent, so you find it as the missing number. Start with what you had, add what was bought, take away what was sold and the depreciation, and the result must equal what you have at the end.`,
        ru: `Инвестиционные потоки — это про долгосрочные вещи. Покупка оборудования, машин или зданий — деньги уходят. Их продажа — деньги приходят. Полученные проценты и дивиденды тоже здесь.

В задачах редко прямо пишут, сколько потратили, поэтому это находят как недостающее число. Начните с того, что было, прибавьте купленное, вычтите проданное и амортизацию — результат должен равняться тому, что есть на конец.`,
        uz: `Investitsion oqimlar uzoq muddatli narsalar haqida. Mashina, furgon yoki bino sotib olish — pul chiqadi. Ularni sotish — pul kiradi. Olingan foiz va dividendlar ham shu yerda.

Masalalarda qancha sarflangani kamdan-kam yoziladi, shuning uchun u yetishmayotgan son sifatida topiladi. Bor narsadan boshlang, sotib olinganni qo'shing, sotilgan va amortizatsiyani ayiring — natija oxiridagiga teng bo'lishi kerak.`,
      },
      example: {
        en: `A bakery's ovens had a carrying amount of $20,000 at the start of the year and $26,000 at the end. In the year, depreciation was $3,000, and an old oven with a carrying amount of $1,000 was sold for $1,500.

# Step 1: Find what was bought (the missing number)
  $20,000 start + bought - $1,000 sold - $3,000 depreciation = $26,000 end
  Bought = $26,000 - $20,000 + $1,000 + $3,000 = $10,000
# Step 2: Cash from the old oven
  The bakery received $1,500. That is the cash, so it goes in investing.
  The $500 profit on the sale is not a separate cash amount.
= Investing: - $10,000 bought + $1,500 sold = - $8,500 (cash out)
! Common trap: show the sale proceeds ($1,500) here, not the carrying amount ($1,000) or the profit ($500).`,
        ru: `Балансовая стоимость печей пекарни была $20,000 на начало года и $26,000 на конец. За год амортизация $3,000, а старая печь с балансовой стоимостью $1,000 продана за $1,500.

# Шаг 1: Находим, что купили (недостающее число)
  $20,000 начало + купили - $1,000 продали - $3,000 амортизация = $26,000 конец
  Купили = $26,000 - $20,000 + $1,000 + $3,000 = $10,000
# Шаг 2: Деньги за старую печь
  Пекарня получила $1,500. Это деньги, они идут в инвестиционную.
  Прибыль от продажи $500 — не отдельная сумма денег.
= Инвестиционная: - $10,000 купили + $1,500 продали = - $8,500 (деньги ушли)
! Частая ошибка: здесь показывают выручку ($1,500), а не балансовую стоимость ($1,000) и не прибыль ($500).`,
        uz: `Novvoyxona pechlarining balans qiymati yil boshida $20,000, oxirida $26,000 edi. Yil davomida amortizatsiya $3,000, balans qiymati $1,000 bo'lgan eski pech $1,500 ga sotildi.

# 1-qadam: Nima sotib olinganini topamiz (yetishmayotgan son)
  $20,000 boshi + sotib olingan - $1,000 sotilgan - $3,000 amortizatsiya = $26,000 oxiri
  Sotib olingan = $26,000 - $20,000 + $1,000 + $3,000 = $10,000
# 2-qadam: Eski pech uchun pul
  Novvoyxona $1,500 oldi. Bu pul, u investitsionga tushadi.
  Sotuvdan $500 foyda alohida pul summasi emas.
= Investitsion: - $10,000 sotib olingan + $1,500 sotilgan = - $8,500 (pul chiqdi)
! Ko'p uchraydigan xato: bu yerda balans qiymati ($1,000) yoki foyda ($500) emas, tushum ($1,500) ko'rsatiladi.`,
      },
    },
    {
      key: {
        en: `- Inflows: proceeds of issuing shares and new loans.
- Outflows: repaying loans, interest paid and dividends paid.
- Share proceeds = movement on share capital + movement on share premium.
- A bonus issue moves amounts between equity accounts, with no cash.
- A rise in loans is an inflow. A fall is an outflow.
- Dividends paid: use retained earnings. Opening + profit - dividends = closing.`,
        ru: `- Притоки: выпуск акций и новые займы.
- Оттоки: возврат займов, уплаченные проценты и дивиденды.
- Выручка от акций = движение капитала + движение эмиссионного дохода.
- Бонусный выпуск переносит суммы внутри капитала без денег.
- Рост займов — приток. Падение — отток.
- Дивиденды: через нераспределённую прибыль. На начало + прибыль - дивиденды = на конец.`,
        uz: `- Kirimlar: aksiya chiqarish va yangi qarzlar.
- Chiqimlar: qarz qaytarish, to'langan foiz va dividendlar.
- Aksiya tushumi = aksiya kapitali harakati + emissiya daromadi harakati.
- Bonusli chiqarish summalarni kapital ichida pulsiz ko'chiradi.
- Qarz oshishi kirim. Kamayishi chiqim.
- Dividendlar: taqsimlanmagan foyda orqali. Boshlang'ich + foyda - dividendlar = yakuniy.`,
      },
      exam: {
        en: `- A bonus issue from share premium cancels out across capital and premium, so total movement in the two is the cash raised.
- A revaluation in the surplus is not a cash flow.
- Interest paid: opening accrual + finance charge - closing accrual.
- To work backwards to profit: start from the movement in retained earnings, add back dividends, tax and interest.
- If the bank balance change is known, a missing operating figure is found by working back through the other sections.`,
        ru: `- Бонусный выпуск из эмиссионного дохода взаимно гасится между капиталом и премией, поэтому их общее движение — полученные деньги.
- Переоценка в резерве — не денежный поток.
- Уплаченные проценты: начисление на начало + финансовый расход - начисление на конец.
- Чтобы найти прибыль в обратном порядке, начните с движения нераспределённой прибыли и прибавьте дивиденды, налог и проценты.
- Если известно изменение банка, недостающая операционная цифра находится через остальные разделы.`,
        uz: `- Emissiya daromadidan bonus kapital va mukofot orasida qoplanadi, ularning jami harakati olingan pul.
- Rezervdagi qayta baholash pul oqimi emas.
- To'langan foiz: boshlang'ich hisoblangan + moliyaviy xarajat - yakuniy hisoblangan.
- Foydani orqaga topish uchun taqsimlanmagan foyda harakatidan boshlab dividend, soliq va foizni qo'shing.
- Bank o'zgarishi ma'lum bo'lsa, yetishmagan operatsion raqam boshqa bo'limlar orqali topiladi.`,
      },
      heading: {
        en: 'Financing cash flows',
        ru: 'Финансовые потоки',
        uz: 'Moliyaviy oqimlar',
      },
      body: {
        en: `Financing inflows are the proceeds of issuing shares and of receiving loans. Outflows are repaying loans, dividends paid and interest paid. IAS 7 requires interest and dividends paid to be classified here.

Proceeds of a share issue come from comparing share capital and share premium at the start and end of the year. If a bonus issue took place, include it in the working, so that the capital movement is stated correctly. It gives no cash.

A loan movement comes from comparing the balances. A fall means part or all was repaid, and a rise means more was borrowed. It is one of the few flows that can go either way.

Dividends are recorded on a cash basis. Because they are paid out of retained earnings, you usually reconcile opening and closing retained earnings, with the dividend as the balancing figure.

Interest paid comes from the finance charge in profit or loss, adjusted for any accrual at the start and end of the year.`,
        ru: `Финансовые притоки — выпуск акций и получение займов. Оттоки — возврат займов, выплаченные дивиденды и проценты. IAS 7 требует относить уплаченные проценты и дивиденды сюда.

Выручка от выпуска определяется сравнением акционерного капитала и эмиссионного дохода на начало и конец года. Если был бонусный выпуск, включите его в расчёт для верного движения капитала. Денег он не даёт.

Движение займа определяется сравнением остатков. Падение значит возврат части или всего, рост значит новый заём. Это один из немногих потоков, идущих в обе стороны.

Дивиденды записываются по факту оплаты. Так как они выплачиваются из нераспределённой прибыли, обычно сверяют её на начало и конец, и дивиденд — балансирующая цифра.

Уплаченные проценты берутся из финансового расхода с учётом начисления на начало и конец года.`,
        uz: `Moliyaviy kirimlar aksiya chiqarish va qarz olishdan tushum. Chiqimlar qarz qaytarish, to'langan dividend va foizlar. IAS 7 to'langan foiz va dividendlarni shu yerda tasniflashni talab qiladi.

Aksiya chiqarish tushumi yil boshi va oxiridagi aksiya kapitali va emissiya daromadini solishtirishdan topiladi. Bonusli chiqarish bo'lgan bo'lsa, kapital harakati to'g'ri bo'lishi uchun hisobga kiriting. U pul bermaydi.

Qarz harakati qoldiqlarni solishtirishdan topiladi. Kamayish qisman yoki to'liq qaytarilganini, oshish yana olinganini bildiradi. Bu ikki tomonga ham bo'ladigan kam oqimlardan biri.

Dividendlar pul asosida yoziladi. Ular taqsimlanmagan foydadan to'langani uchun odatda boshlang'ich va yakuniy qoldiq solishtiriladi, dividend balanslovchi summa.

To'langan foiz foyda yoki zarardagi moliyaviy xarajatdan, yil boshi va oxiridagi hisoblanganni hisobga olib topiladi.`,
      },
      simple: {
        en: `Financing is the money between the business and the people who fund it: shareholders and lenders.

- Money in: selling new shares, taking a new loan.
- Money out: repaying a loan, paying dividends, paying interest.

A bonus issue gives shareholders free shares and no money changes hands, so it is never here. To find dividends paid, use retained earnings: what you had at the start, plus this year's profit, minus what is left at the end, was paid out.`,
        ru: `Финансовая деятельность — это деньги между бизнесом и теми, кто его финансирует: акционерами и кредиторами.

- Деньги приходят: продажа новых акций, новый заём.
- Деньги уходят: возврат займа, выплата дивидендов, выплата процентов.

Бонусный выпуск даёт акционерам бесплатные акции, деньги не переходят, поэтому его здесь никогда нет. Чтобы найти выплаченные дивиденды, используйте нераспределённую прибыль: что было на начало, плюс прибыль года, минус что осталось на конец — это и выплачено.`,
        uz: `Moliyaviy faoliyat — biznes va uni moliyalashtiruvchilar, ya'ni aksiyadorlar va qarz beruvchilar o'rtasidagi pul.

- Pul kiradi: yangi aksiya sotish, yangi qarz olish.
- Pul chiqadi: qarz qaytarish, dividend to'lash, foiz to'lash.

Bonusli chiqarish aksiyadorlarga bepul aksiya beradi, pul o'tmaydi, shuning uchun u bu yerda hech qachon bo'lmaydi. To'langan dividendni topish uchun taqsimlanmagan foydadan foydalaning: boshida bor bo'lgan, plus yil foydasi, minus oxirida qolgani — shu to'langan.`,
      },
      example: {
        en: `A company's figures this year:
  Share capital: $10,000 at the start, $14,000 at the end
  Share premium: $2,000 at the start, $3,000 at the end
  Bank loan: $8,000 at the start, $5,000 at the end
  Retained earnings: $6,000 at the start, profit for the year $4,000, $7,000 at the end
# Step 1: Cash from new shares
  Capital up $4,000 + premium up $1,000 = $5,000 in
# Step 2: The loan
  It fell from $8,000 to $5,000, so $3,000 was repaid: $3,000 out
# Step 3: Dividends paid
  $6,000 start + $4,000 profit - $7,000 left at the end = $3,000 out
= Financing: + $5,000 - $3,000 - $3,000 = - $1,000 (cash out)
! Common trap: count share capital and share premium together, because a bonus issue only moves amounts between them and brings in no cash.`,
        ru: `Цифры компании за этот год:
  Акционерный капитал: $10,000 на начало, $14,000 на конец
  Эмиссионный доход: $2,000 на начало, $3,000 на конец
  Банковский заём: $8,000 на начало, $5,000 на конец
  Нераспределённая прибыль: $6,000 на начало, прибыль года $4,000, $7,000 на конец
# Шаг 1: Деньги от новых акций
  Капитал вырос на $4,000 + эмиссионный доход на $1,000 = $5,000 пришло
# Шаг 2: Заём
  Упал с $8,000 до $5,000, значит $3,000 возвращено: $3,000 ушло
# Шаг 3: Выплаченные дивиденды
  $6,000 начало + $4,000 прибыль - $7,000 осталось = $3,000 ушло
= Финансовая: + $5,000 - $3,000 - $3,000 = - $1,000 (деньги ушли)
! Частая ошибка: считайте капитал и эмиссионный доход вместе, потому что бонусный выпуск лишь переносит суммы между ними и денег не приносит.`,
        uz: `Kompaniyaning shu yilgi raqamlari:
  Aksiya kapitali: boshida $10,000, oxirida $14,000
  Emissiya daromadi: boshida $2,000, oxirida $3,000
  Bank qarzi: boshida $8,000, oxirida $5,000
  Taqsimlanmagan foyda: boshida $6,000, yil foydasi $4,000, oxirida $7,000
# 1-qadam: Yangi aksiyalardan pul
  Kapital $4,000 + emissiya daromadi $1,000 oshdi = $5,000 kirdi
# 2-qadam: Qarz
  $8,000 dan $5,000 ga tushdi, demak $3,000 qaytarilgan: $3,000 chiqdi
# 3-qadam: To'langan dividendlar
  $6,000 boshi + $4,000 foyda - oxirida qolgan $7,000 = $3,000 chiqdi
= Moliyaviy: + $5,000 - $3,000 - $3,000 = - $1,000 (pul chiqdi)
! Ko'p uchraydigan xato: aksiya kapitali va emissiya daromadini birga hisoblang, chunki bonusli chiqarish summani ular orasida ko'chiradi, xolos, pul olib kelmaydi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Liquidity', ru: 'Ликвидность', uz: 'Likvidlik' },
      definition: { en: 'Having enough cash, or things that quickly become cash, to pay the bills due soon.', ru: 'Наличие достаточных денег или того, что быстро станет деньгами, чтобы оплатить ближайшие счета.', uz: 'Yaqinda to\'lanadigan hisoblar uchun yetarli pul yoki tez pulga aylanadigan narsalar borligi.' },
      example: { en: 'Rent of $1,000 is due next week and you have $1,500 in the bank: you are liquid.', ru: 'Аренда $1,000 к оплате через неделю, а в банке $1,500: вы ликвидны.', uz: 'Keyingi hafta $1,000 ijara to\'lanadi, bankda $1,500 bor: siz likvidsiz.' },
    },
    {
      term: { en: 'Solvency', ru: 'Платёжеспособность', uz: 'To\'lov qobiliyati' },
      definition: { en: 'Being able to pay all debts in the longer term, because what you own is worth more than what you owe.', ru: 'Способность в долгосрочной перспективе оплатить все долги, потому что имущество стоит больше, чем долги.', uz: 'Uzoq muddatda barcha qarzlarni to\'lay olish, chunki mol-mulk qarzlardan qimmatroq.' },
      example: { en: 'A shop owes $50,000 and owns assets worth $80,000: it is solvent.', ru: 'Магазин должен $50,000, а его активы стоят $80,000: он платёжеспособен.', uz: 'Do\'kon $50,000 qarz, aktivlari $80,000 turadi: u to\'lovga qodir.' },
    },
    {
      term: { en: 'Cash', ru: 'Денежные средства', uz: 'Pul' },
      definition: { en: 'Cash on hand and demand deposits, less overdrafts.', ru: 'Наличные и депозиты до востребования минус овердрафты.', uz: 'Naqd va talab bo\'yicha depozitlar minus overdraftlar.' },
      example: { en: '$200 in the till + $5,000 in the current account - a $1,000 overdraft = $4,200 of cash.', ru: '$200 в кассе + $5,000 на текущем счёте - овердрафт $1,000 = $4,200 денег.', uz: 'Kassada $200 + joriy hisobda $5,000 - $1,000 overdraft = $4,200 pul.' },
    },
    {
      term: { en: 'Cash equivalents', ru: 'Денежные эквиваленты', uz: 'Pul ekvivalentlari' },
      definition: { en: 'Short-term, highly liquid investments readily convertible to known amounts of cash.', ru: 'Краткосрочные высоколиквидные вложения, легко обратимые в известную сумму денег.', uz: 'Ma\'lum summaga oson aylanadigan qisqa muddatli likvid sarmoyalar.' },
      example: { en: 'A 30-day bank deposit of $2,000 that will turn into exactly $2,000 of cash next month.', ru: '30-дневный депозит $2,000, который через месяц станет ровно $2,000 денег.', uz: 'Keyingi oy aynan $2,000 pulga aylanadigan 30 kunlik $2,000 bank depoziti.' },
    },
    {
      term: { en: 'Operating activities', ru: 'Операционная деятельность', uz: 'Operatsion faoliyat' },
      definition: { en: 'The main revenue-producing activities of the entity.', ru: 'Основная деятельность компании, приносящая выручку.', uz: 'Korxonaning asosiy daromad keltiruvchi faoliyati.' },
      example: { en: 'A café selling coffee, paying for milk and beans, paying its staff and paying its tax.', ru: 'Кафе продаёт кофе, платит за молоко и зёрна, персоналу и налог.', uz: 'Kafe qahva sotadi, sut va don, xodimlar va soliq uchun to\'laydi.' },
    },
    {
      term: { en: 'Investing activities', ru: 'Инвестиционная деятельность', uz: 'Investitsion faoliyat' },
      definition: { en: 'Buying and selling long-term assets and investments, and receiving interest and dividends.', ru: 'Покупка и продажа долгосрочных активов и вложений, получение процентов и дивидендов.', uz: 'Uzoq muddatli aktiv va sarmoyalar oldi-sotdisi, foiz va dividend olish.' },
      example: { en: 'Buying a new $5,000 coffee machine (out) and selling the old one for $500 (in).', ru: 'Покупка новой кофемашины за $5,000 (отток) и продажа старой за $500 (приток).', uz: 'Yangi $5,000 lik qahva mashinasini olish (chiqim) va eskisini $500 ga sotish (kirim).' },
    },
    {
      term: { en: 'Financing activities', ru: 'Финансовая деятельность', uz: 'Moliyaviy faoliyat' },
      definition: { en: 'Share issues, borrowing and repaying loans, and paying interest and dividends.', ru: 'Выпуск акций, получение и возврат займов, выплата процентов и дивидендов.', uz: 'Aksiya chiqarish, qarz olish va qaytarish, foiz va dividend to\'lash.' },
      example: { en: 'Taking a $10,000 bank loan (in), then paying $800 of interest and $1,000 of dividends (out).', ru: 'Банковский заём $10,000 (приток), затем проценты $800 и дивиденды $1,000 (отток).', uz: '$10,000 bank qarzi (kirim), so\'ng $800 foiz va $1,000 dividend to\'lash (chiqim).' },
    },
    {
      term: { en: 'Working capital', ru: 'Оборотный капитал', uz: 'Aylanma kapital' },
      definition: { en: 'Current assets less current liabilities: the money tied up in day-to-day trading, such as inventory, receivables and payables.', ru: 'Оборотные активы минус краткосрочные обязательства: деньги в ежедневной торговле — запасы, дебиторы, кредиторы.', uz: 'Aylanma aktivlar minus qisqa muddatli majburiyatlar: kundalik savdoga bog\'langan pul — zaxira, debitorlar, kreditorlar.' },
      example: { en: 'Stock $3,000 + customers owe you $2,000 - you owe suppliers $1,500 = $3,500 of working capital.', ru: 'Товар $3,000 + покупатели должны $2,000 - вы должны поставщикам $1,500 = оборотный капитал $3,500.', uz: 'Tovar $3,000 + mijozlar qarzi $2,000 - yetkazib beruvchilarga qarzingiz $1,500 = $3,500 aylanma kapital.' },
    },
    {
      term: { en: 'Non-cash item', ru: 'Неденежная статья', uz: 'Pulsiz modda' },
      definition: { en: 'An income or expense in profit that moved no money, such as depreciation, or a gain or loss on disposal.', ru: 'Доход или расход в прибыли без движения денег, например амортизация или прибыль либо убыток от выбытия.', uz: 'Foydadagi pul harakatlanmagan daromad yoki xarajat, masalan amortizatsiya yoki chiqish foydasi yoki zarari.' },
      example: { en: 'Depreciation of $2,000 lowers profit, but nobody is paid $2,000.', ru: 'Амортизация $2,000 уменьшает прибыль, но никому не платят $2,000.', uz: '$2,000 amortizatsiya foydani kamaytiradi, lekin hech kimga $2,000 to\'lanmaydi.' },
    },
    {
      term: { en: 'Cash generated from operations', ru: 'Деньги от операций', uz: 'Operatsiyalardan pul' },
      definition: { en: 'Operating profit adjusted for non-cash items and working capital, before tax paid is taken off.', ru: 'Операционная прибыль, скорректированная на неденежные статьи и оборотный капитал, до вычета уплаченного налога.', uz: 'Pulsiz moddalar va aylanma kapitalga tuzatilgan operatsion foyda, to\'langan soliq ayirilishidan oldin.' },
      example: { en: 'Profit $10,000 + depreciation $2,000 - extra stock $1,000 = $11,000.', ru: 'Прибыль $10,000 + амортизация $2,000 - прирост запасов $1,000 = $11,000.', uz: 'Foyda $10,000 + amortizatsiya $2,000 - qo\'shimcha zaxira $1,000 = $11,000.' },
    },
    {
      term: { en: 'Indirect method', ru: 'Косвенный метод', uz: 'Bilvosita usul' },
      definition: { en: 'Finding operating cash flow by adjusting operating profit for non-cash items.', ru: 'Нахождение операционного потока корректировкой прибыли на неденежные статьи.', uz: 'Operatsion oqimni foydani pulsiz moddalarga tuzatib topish.' },
      example: { en: 'Start from profit $10,000, add back depreciation $2,000, deduct the $1,000 rise in stock: $11,000.', ru: 'Начинаем с прибыли $10,000, прибавляем амортизацию $2,000, вычитаем рост запасов $1,000: $11,000.', uz: '$10,000 foydadan boshlab, $2,000 amortizatsiyani qo\'shamiz, $1,000 zaxira o\'sishini ayiramiz: $11,000.' },
    },
    {
      term: { en: 'Direct method', ru: 'Прямой метод', uz: 'To\'g\'ridan-to\'g\'ri usul' },
      definition: { en: 'Listing actual cash received from customers and paid to suppliers and employees.', ru: 'Перечисление фактических денег от покупателей и выплат поставщикам и сотрудникам.', uz: 'Mijozlardan olingan va yetkazib beruvchi hamda xodimlarga to\'langan haqiqiy pulni sanash.' },
      example: { en: 'Cash from customers $30,000 - paid to suppliers $15,000 - wages paid $5,000 = $10,000.', ru: 'От покупателей $30,000 - поставщикам $15,000 - зарплата $5,000 = $10,000.', uz: 'Mijozlardan $30,000 - yetkazib beruvchilarga $15,000 - ish haqi $5,000 = $10,000.' },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter17;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter17.id] = chapter17;
