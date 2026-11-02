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
      example: {
        en: `Madina's Mart LLC sells $20,000 of goods to cafes in December on 60-day terms, and makes a healthy profit. But rent and wages fall due in January, and the money does not arrive until February. On paper it is doing well. In practice it has to borrow to pay its staff. The statement of cash flows shows this, while the statement of profit or loss cannot.`,
        ru: `Madina's Mart LLC продаёт кафе товар на $20,000 в декабре с оплатой через 60 дней и получает хорошую прибыль. Но аренда и зарплата приходятся на январь, а деньги поступят только в феврале. На бумаге всё хорошо. На деле приходится занимать, чтобы заплатить персоналу. Это показывает отчёт о движении денег, а отчёт о прибыли или убытке не может.`,
        uz: `Madina's Mart LLC dekabrda kafelarga 60 kunlik muddat bilan $20,000 tovar sotadi va yaxshi foyda ko'radi. Lekin ijara va ish haqi yanvarda to'lanadi, pul esa fevralda keladi. Qog'ozda hammasi yaxshi. Amalda xodimlarga to'lash uchun qarz olish kerak. Buni pul oqimlari hisoboti ko'rsatadi, foyda yoki zarar hisoboti ko'rsata olmaydi.`,
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
      example: {
        en: `Madina's Mart LLC's year in summary: net cash from operating activities $39,000, investing activities -$14,500, financing activities -$3,200. The net increase in cash is $21,300. Opening cash of $3,000 becomes closing cash of $24,300, which matches the statement of financial position.`,
        ru: `Итоги года Madina's Mart LLC: чистые деньги от операционной деятельности $39,000, инвестиционная -$14,500, финансовая -$3,200. Чистый рост денег $21,300. Деньги на начало $3,000 становятся $24,300 на конец, что совпадает с отчётом о финансовом положении.`,
        uz: `Madina's Mart LLC yili qisqacha: operatsion faoliyatdan sof pul $39,000, investitsion -$14,500, moliyaviy -$3,200. Pulning sof o'sishi $21,300. Boshlang'ich $3,000 yakuniy $24,300 bo'ladi, bu moliyaviy holat hisoboti bilan mos.`,
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
      example: {
        en: `Madina's Mart LLC's operating profit is $40,000. Add back depreciation of $6,000 and a $1,000 loss on disposal. Inventory rose by $2,000 and receivables by $1,500, so deduct both. Payables rose by $2,500, so add that. Cash generated from operations is $46,000. The tax liability was $7,000 at the start and $9,000 at the end, and the charge was $9,000, so tax paid is $7,000. Net cash from operating activities is $39,000.`,
        ru: `Операционная прибыль Madina's Mart LLC $40,000. Прибавляем амортизацию $6,000 и убыток от выбытия $1,000. Запасы выросли на $2,000, дебиторы на $1,500, вычитаем оба. Кредиторы выросли на $2,500, прибавляем. Деньги от операций $46,000. Обязательство по налогу $7,000 на начало и $9,000 на конец, расход $9,000, уплачено $7,000. Чистые деньги от операционной деятельности $39,000.`,
        uz: `Madina's Mart LLC operatsion foydasi $40,000. $6,000 amortizatsiya va $1,000 chiqish zararini qo'shamiz. Zaxira $2,000, debitorlar $1,500 oshdi, ikkalasini ayiramiz. Kreditorlar $2,500 oshdi, qo'shamiz. Operatsiyalardan pul $46,000. Soliq majburiyati boshida $7,000, oxirida $9,000, xarajat $9,000, to'langan $7,000. Operatsion faoliyatdan sof pul $39,000.`,
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
      example: {
        en: `Madina's Mart LLC's carrying amount was $50,000 at the start and $78,000 at the end. In the year it revalued by $20,000, charged $6,000 of depreciation and sold an asset with a carrying amount of $3,000 at a $1,000 loss. Additions are $78,000 - $50,000 - $20,000 + $6,000 + $3,000 = $17,000. Proceeds are $3,000 - $1,000 = $2,000. With interest received of $500, net cash used in investing is $14,500.`,
        ru: `Балансовая стоимость Madina's Mart LLC $50,000 на начало и $78,000 на конец. За год переоценка $20,000, амортизация $6,000 и продажа актива с балансовой стоимостью $3,000 с убытком $1,000. Покупки: $78,000 - $50,000 - $20,000 + $6,000 + $3,000 = $17,000. Выручка: $3,000 - $1,000 = $2,000. С полученными процентами $500 инвестиционный отток $14,500.`,
        uz: `Madina's Mart LLC balans qiymati boshida $50,000, oxirida $78,000. Yilda $20,000 qayta baholash, $6,000 amortizatsiya va $3,000 balans qiymatli aktiv $1,000 zarar bilan sotildi. Xaridlar: $78,000 - $50,000 - $20,000 + $6,000 + $3,000 = $17,000. Tushum: $3,000 - $1,000 = $2,000. $500 olingan foiz bilan investitsion chiqim $14,500.`,
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
      example: {
        en: `Madina's Mart LLC raised $24,000 from its rights issue, repaid $10,000 of its loan, paid $4,000 of interest and paid dividends of $13,200. Net cash used in financing is $3,200. The later bonus issue adds nothing here, because no money changed hands, even though it raised share capital.`,
        ru: `Madina's Mart LLC получила $24,000 от выпуска прав, вернула $10,000 займа, заплатила $4,000 процентов и $13,200 дивидендов. Чистый финансовый отток $3,200. Более поздний бонусный выпуск здесь ничего не добавляет, так как денег не было, хотя акционерный капитал вырос.`,
        uz: `Madina's Mart LLC huquqli chiqarishdan $24,000 oldi, $10,000 qarz qaytardi, $4,000 foiz va $13,200 dividend to'ladi. Moliyaviy sof chiqim $3,200. Keyingi bonusli chiqarish bu yerga hech narsa qo'shmaydi, chunki pul o'tmagan, aksiya kapitali oshgan bo'lsa ham.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Cash', ru: 'Денежные средства', uz: 'Pul' }, definition: { en: 'Cash on hand and demand deposits, less overdrafts.', ru: 'Наличные и депозиты до востребования минус овердрафты.', uz: 'Naqd va talab bo\'yicha depozitlar minus overdraftlar.' } },
    { term: { en: 'Cash equivalents', ru: 'Денежные эквиваленты', uz: 'Pul ekvivalentlari' }, definition: { en: 'Short-term, highly liquid investments readily convertible to known amounts of cash.', ru: 'Краткосрочные высоколиквидные вложения, легко обратимые в известную сумму денег.', uz: 'Ma\'lum summaga oson aylanadigan qisqa muddatli likvid sarmoyalar.' } },
    { term: { en: 'Operating activities', ru: 'Операционная деятельность', uz: 'Operatsion faoliyat' }, definition: { en: 'The main revenue-producing activities of the entity.', ru: 'Основная деятельность компании, приносящая выручку.', uz: 'Korxonaning asosiy daromad keltiruvchi faoliyati.' } },
    { term: { en: 'Investing activities', ru: 'Инвестиционная деятельность', uz: 'Investitsion faoliyat' }, definition: { en: 'Buying and selling long-term assets and investments, and receiving interest and dividends.', ru: 'Покупка и продажа долгосрочных активов и вложений, получение процентов и дивидендов.', uz: 'Uzoq muddatli aktiv va sarmoyalar oldi-sotdisi, foiz va dividend olish.' } },
    { term: { en: 'Financing activities', ru: 'Финансовая деятельность', uz: 'Moliyaviy faoliyat' }, definition: { en: 'Share issues, borrowing and repaying loans, and paying interest and dividends.', ru: 'Выпуск акций, получение и возврат займов, выплата процентов и дивидендов.', uz: 'Aksiya chiqarish, qarz olish va qaytarish, foiz va dividend to\'lash.' } },
    { term: { en: 'Indirect method', ru: 'Косвенный метод', uz: 'Bilvosita usul' }, definition: { en: 'Finding operating cash flow by adjusting operating profit for non-cash items.', ru: 'Нахождение операционного потока корректировкой прибыли на неденежные статьи.', uz: 'Operatsion oqimni foydani pulsiz moddalarga tuzatib topish.' } },
    { term: { en: 'Direct method', ru: 'Прямой метод', uz: 'To\'g\'ridan-to\'g\'ri usul' }, definition: { en: 'Listing actual cash received from customers and paid to suppliers and employees.', ru: 'Перечисление фактических денег от покупателей и выплат поставщикам и сотрудникам.', uz: 'Mijozlardan olingan va yetkazib beruvchi hamda xodimlarga to\'langan haqiqiy pulni sanash.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter17;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter17.id] = chapter17;
