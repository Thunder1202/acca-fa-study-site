'use strict';

const chapter01 = {
  id: 'chapter-01',
  titles: {
    en: 'Introduction to financial reporting',
    ru: 'Введение в финансовую отчётность',
    uz: 'Moliyaviy hisobotga kirish',
  },
  objectives: [
    {
      en: 'Define financial reporting',
      ru: 'Дать определение финансовой отчётности',
      uz: 'Moliyaviy hisobotga ta\'rif berish',
    },
    {
      en: 'Identify and define the types of business entity',
      ru: 'Назвать и описать виды предприятий',
      uz: 'Biznes subyektlari turlarini aniqlash va ta\'riflash',
    },
    {
      en: 'Identify users of financial statements and their information needs',
      ru: 'Назвать пользователей отчётности и их информационные потребности',
      uz: 'Hisobot foydalanuvchilari va ularning axborot ehtiyojlarini aniqlash',
    },
    {
      en: 'Identify the purpose of the main financial statements',
      ru: 'Объяснить назначение основных финансовых отчётов',
      uz: 'Asosiy moliyaviy hisobotlarning maqsadini tushuntirish',
    },
    {
      en: 'Define the elements of the financial statements',
      ru: 'Дать определение элементам финансовой отчётности',
      uz: 'Moliyaviy hisobot elementlariga ta\'rif berish',
    },
    {
      en: 'Define and explain accounting concepts and characteristics',
      ru: 'Объяснить принципы бухгалтерского учёта и качественные характеристики информации',
      uz: 'Buxgalteriya tamoyillari va axborotning sifat xususiyatlarini tushuntirish',
    },
  ],
  sections: [
    {
      exam: {
        en: '- Management accounts are normally not audited, but should be just as accurate as financial statements.',
        ru: '- Управленческая отчётность обычно не проходит аудит, но должна быть такой же точной, как финансовая.',
        uz: '- Boshqaruv hisobotlari odatda auditdan o\'tmaydi, lekin moliyaviy hisobot kabi aniq bo\'lishi kerak.',
      },
      key: {
        en: `- Financial accounting: annual statements for outside users such as lenders and investors.
- Management accounting: detailed, frequent reports for the people running the business.
- Stewardship: how well directors looked after shareholders' money.
- Published statements are public but do not show profit per product.`,
        ru: `- Финансовый учёт: годовая отчётность для внешних пользователей, например кредиторов и инвесторов.
- Управленческий учёт: подробные и частые отчёты для тех, кто руководит бизнесом.
- Stewardship: насколько хорошо директора распорядились деньгами акционеров.
- Опубликованная отчётность открыта, но не показывает прибыль по товарам.`,
        uz: `- Moliyaviy hisob: kreditor va investorlar kabi tashqi foydalanuvchilar uchun yillik hisobot.
- Boshqaruv hisobi: biznesni boshqaruvchilar uchun batafsil va tez-tez hisobotlar.
- Stewardship: direktorlar aksiyadorlar pulini qanchalik yaxshi boshqargani.
- E'lon qilingan hisobot ochiq, lekin mahsulot bo'yicha foydani ko'rsatmaydi.`,
      },
      heading: {
        en: 'Financial accounting and management accounting',
        ru: 'Финансовый и управленческий учёт',
        uz: 'Moliyaviy hisob va boshqaruv hisobi',
      },
      body: {
        en: `Financial reporting records and summarises how a business performed and where it stands financially, so that people outside and inside it can make economic decisions. The FA syllabus focuses on commercial businesses, but the same ideas apply to charities and public bodies.

Financial accounting records, classifies and summarises individual transactions, then produces annual financial statements for external stakeholders such as lenders and investors. These statements report on how the directors looked after the funds shareholders entrusted to them, which is called stewardship. IFRS Accounting Standards reduce the differences between countries, so companies can be compared.

Management accounting serves the people running the business. It is more detailed, more up to date, and can be presented in any useful way, for example by product line. It supports strategy, planning and control, decision making, and making the best use of resources.

Key exam point: the published statements of a limited company are public documents, but they do not reveal details such as the profitability of individual products.`,
        ru: `Финансовая отчётность фиксирует и обобщает результаты деятельности бизнеса и его финансовое положение, чтобы люди внутри и вне компании могли принимать экономические решения. Программа FA сосредоточена на коммерческих предприятиях, но те же идеи применимы к благотворительным и государственным организациям.

Финансовый учёт (financial accounting) регистрирует, классифицирует и обобщает отдельные операции, а затем формирует годовую отчётность для внешних заинтересованных сторон, например кредиторов и инвесторов. Эта отчётность показывает, как директора распорядились средствами, доверенными им акционерами. Это называется управлением доверенными ресурсами (stewardship). Стандарты IFRS уменьшают различия между странами, поэтому компании можно сравнивать.

Управленческий учёт (management accounting) нужен тем, кто руководит бизнесом. Он более подробный и актуальный, а данные можно представить в любом удобном виде, например по товарным группам. Он помогает в разработке стратегии, планировании и контроле, принятии решений и наилучшем использовании ресурсов.

Важно для экзамена: опубликованная отчётность компании с ограниченной ответственностью является публичным документом, но не раскрывает таких деталей, как прибыльность отдельных товаров.`,
        uz: `Moliyaviy hisobot biznes faoliyati natijalari va moliyaviy holatini qayd etib umumlashtiradi, shunda korxona ichidagi va tashqarisidagi odamlar iqtisodiy qarorlar qabul qila oladi. FA dasturi tijorat korxonalariga qaratilgan, ammo shu g'oyalar xayriya va davlat tashkilotlariga ham tegishli.

Moliyaviy hisob (financial accounting) alohida operatsiyalarni qayd etadi, tasniflaydi va umumlashtiradi, so'ng kreditorlar va investorlar kabi tashqi manfaatdor tomonlar uchun yillik moliyaviy hisobot tayyorlaydi. Bu hisobot direktorlar aksiyadorlar ishonib topshirgan mablag'larni qanday boshqarganini ko'rsatadi, bu ishonchli boshqaruv (stewardship) deyiladi. IFRS standartlari mamlakatlar o'rtasidagi farqlarni kamaytiradi, shuning uchun kompaniyalarni solishtirish mumkin.

Boshqaruv hisobi (management accounting) biznesni boshqarayotganlar uchun kerak. U batafsilroq va yangiroq bo'ladi, ma'lumotlar istalgan qulay shaklda, masalan mahsulot turlari bo'yicha berilishi mumkin. U strategiya tuzish, rejalashtirish va nazorat, qaror qabul qilish hamda resurslardan eng yaxshi foydalanishga yordam beradi.

Imtihon uchun muhim: mas'uliyati cheklangan kompaniyaning e'lon qilingan hisoboti ochiq hujjat hisoblanadi, lekin unda alohida mahsulotlar foydaliligi kabi tafsilotlar ko'rsatilmaydi.`,
      },
      example: {
        en: `You run a small phone-repair stall.

- Every Friday you check which repairs earned the most, so you know which parts to order. That is management accounting: detailed, frequent, for you.
- Once a year you send your bank a one-page summary of the year's income and of what you own and owe. That is financial accounting: a summary, for outsiders.`,
        ru: `Вы держите небольшую мастерскую по ремонту телефонов.

- Каждую пятницу вы смотрите, какой ремонт принёс больше всего, чтобы знать, какие детали заказать. Это управленческий учёт: подробно, часто, для вас.
- Раз в год вы отправляете в банк одностраничную сводку о доходах за год и о том, что у вас есть и что вы должны. Это финансовый учёт: сводка для посторонних.`,
        uz: `Siz kichik telefon ta'mirlash ustaxonasini yuritasiz.

- Har juma qaysi ta'mir eng ko'p daromad berganini ko'rasiz, shunda qaysi ehtiyot qismni buyurtma qilishni bilasiz. Bu boshqaruv hisobi: batafsil, tez-tez, o'zingiz uchun.
- Yiliga bir marta bankka yillik daromad va nima borligi hamda nima qarzligingiz haqida bir sahifalik xulosa yuborasiz. Bu moliyaviy hisob: tashqaridagilar uchun xulosa.`,
      },
      simple: {
        en: `Accounting means keeping a record of a business's money and then summarising it.

Financial accounting makes a yearly summary for people outside the business, such as the bank or investors. Management accounting makes detailed, frequent reports for the people running the business, to help them decide what to do next.`,
        ru: `Учёт — это запись всех денежных операций бизнеса и их обобщение.

Финансовый учёт готовит годовую сводку для людей вне бизнеса, например банка или инвесторов. Управленческий учёт готовит подробные и частые отчёты для тех, кто управляет бизнесом, чтобы им было легче решать, что делать дальше.`,
        uz: `Hisob — biznesning barcha pul operatsiyalarini yozib borish va ularni jamlash.

Moliyaviy hisob biznesdan tashqaridagi odamlar, masalan bank yoki investorlar uchun yillik xulosa tayyorlaydi. Boshqaruv hisobi biznesni boshqaruvchilar uchun batafsil va tez-tez hisobotlar tayyorlaydi, keyin nima qilishni hal qilishga yordam beradi.`,
      },
    },
    {
      key: {
        en: `- Investors: profit, returns and security of investment.
- Lenders: repayment and solvency.
- Employees: job security and pay.
- Suppliers: will they be paid? Customers: will supply continue?
- Government: tax and the economy. Public: effect on the community.
- Management needs the most detail of all.`,
        ru: `- Инвесторы: прибыль, доходность и надёжность вложений.
- Кредиторы: возврат займа и платёжеспособность.
- Работники: надёжность занятости и зарплата.
- Поставщики: заплатят ли им? Покупатели: продолжатся ли поставки?
- Государство: налоги и экономика. Общество: влияние на сообщество.
- Руководству нужно больше всего деталей.`,
        uz: `- Investorlar: foyda, daromadlilik va sarmoya xavfsizligi.
- Kreditorlar: qarz qaytishi va to'lov qobiliyati.
- Xodimlar: ish joyi barqarorligi va maosh.
- Yetkazib beruvchilar: to'lanadimi? Xaridorlar: yetkazib berish davom etadimi?
- Davlat: soliq va iqtisodiyot. Jamoatchilik: jamiyatga ta'sir.
- Rahbariyatga eng ko'p tafsilot kerak.`,
      },
      heading: {
        en: 'Users of financial statements',
        ru: 'Пользователи финансовой отчётности',
        uz: 'Moliyaviy hisobot foydalanuvchilari',
      },
      body: {
        en: `Each group of users (stakeholders) reads the statements for a different reason:

- Investors and potential investors: profit, returns and the security of their investment. Institutional investors such as pension funds are the largest group.
- Employees and trade unions: job security, pay rises, senior management pay, and divisional profitability if closure is a risk.
- Lenders: will the loan be repaid? They look at solvency and the value of assets given as security.
- Government agencies: how the economy is performing. Tax authorities use the statements to assess tax.
- Suppliers: will they be paid? New suppliers want reassurance before supplying.
- Customers: can the business keep supplying them, especially if they depend on specialist goods?
- The public: the effect on the economy, environment and community.

Management and competitors also use the statements. Management relies mainly on management accounting information, so it needs the most detailed information of all.

All users want information that is relevant and faithfully represented, so they can assess how well management has looked after resources and decide whether to invest or provide more.`,
        ru: `Каждая группа пользователей (заинтересованных сторон) читает отчётность по своей причине:

- Инвесторы и потенциальные инвесторы: прибыль, доходность и надёжность вложений. Крупнейшая группа — институциональные инвесторы, например пенсионные фонды.
- Работники и профсоюзы: надёжность занятости, повышение зарплаты, вознаграждение высшего руководства и прибыльность подразделений, если есть риск закрытия.
- Кредиторы: будет ли возвращён заём? Они смотрят на платёжеспособность и стоимость активов, переданных в залог.
- Государственные органы: как развивается экономика. Налоговые органы используют отчётность для начисления налога.
- Поставщики: заплатят ли им? Новые поставщики хотят убедиться в надёжности до начала поставок.
- Покупатели: сможет ли бизнес продолжать поставки, особенно если они зависят от специальных товаров?
- Общественность: влияние на экономику, окружающую среду и местное сообщество.

Руководство и конкуренты также используют отчётность. Руководство опирается в основном на данные управленческого учёта, поэтому ему нужна самая подробная информация.

Всем пользователям нужна уместная и правдиво представленная информация, чтобы оценить, как руководство распорядилось ресурсами, и решить, стоит ли вкладывать или предоставлять новые средства.`,
        uz: `Har bir foydalanuvchi guruhi (manfaatdor tomonlar) hisobotni o'z sababi bilan o'qiydi:

- Investorlar va potensial investorlar: foyda, daromadlilik va sarmoya xavfsizligi. Eng yirik guruh — pensiya jamg'armalari kabi institutsional investorlar.
- Xodimlar va kasaba uyushmalari: ish joyi barqarorligi, oylik oshishi, yuqori rahbariyat maoshi va yopilish xavfi bo'lsa bo'linmalar foydaliligi.
- Kreditorlar: qarz qaytariladimi? Ular to'lov qobiliyati va garovga qo'yilgan aktivlar qiymatiga qaraydi.
- Davlat idoralari: iqtisodiyot qanday rivojlanayotgani. Soliq organlari hisobotdan soliqni aniqlashda foydalanadi.
- Yetkazib beruvchilar: ularga to'lanadimi? Yangi yetkazib beruvchilar ishlashdan oldin ishonch hosil qilishni xohlaydi.
- Xaridorlar: biznes yetkazib berishni davom ettira oladimi, ayniqsa ular maxsus tovarlarga bog'liq bo'lsa?
- Jamoatchilik: iqtisodiyot, atrof-muhit va mahalliy jamiyatga ta'sir.

Rahbariyat va raqobatchilar ham hisobotdan foydalanadi. Rahbariyat asosan boshqaruv hisobi ma'lumotlariga tayanadi, shuning uchun unga eng batafsil axborot kerak.

Barcha foydalanuvchilarga rahbariyat resurslarni qanday boshqarganini baholash va sarmoya kiritish yoki yangi mablag' berish haqida qaror qilish uchun tegishli va haqqoniy axborot kerak.`,
      },
      example: {
        en: `A small bakery's accounts show a profit of $20,000 and a bank loan of $5,000.

- The bank asks: can it repay the $5,000?
- The flour supplier asks: will my bills be paid?
- The baker's assistant asks: is my job safe?
- The tax office asks: how much tax is due on the $20,000?

One set of numbers, four different questions.`,
        ru: `В отчётности небольшой пекарни прибыль $20,000 и банковский заём $5,000.

- Банк спрашивает: сможет ли она вернуть $5,000?
- Поставщик муки: оплатят ли мои счета?
- Помощник пекаря: сохранится ли моя работа?
- Налоговая: сколько налога с $20,000?

Одни и те же цифры, четыре разных вопроса.`,
        uz: `Kichik novvoyxona hisobotida $20,000 foyda va $5,000 bank qarzi bor.

- Bank so'raydi: $5,000 ni qaytara oladimi?
- Un yetkazib beruvchi: hisoblarim to'lanadimi?
- Novvoy yordamchisi: ishim saqlanadimi?
- Soliq idorasi: $20,000 dan qancha soliq?

Bitta raqamlar to'plami, to'rt xil savol.`,
      },
      simple: {
        en: `Many different people read a business's accounts, and each looks for something different.

Investors want to know if it makes money. Lenders want to know if they will be paid back. Staff want to know if their jobs are safe. Suppliers want to know if their bills will be paid, and the tax office wants to know how much tax is due.`,
        ru: `Отчётность бизнеса читают очень разные люди, и каждый ищет своё.

Инвесторы хотят знать, приносит ли бизнес деньги. Кредиторы — вернут ли им долг. Сотрудники — сохранится ли их работа. Поставщики — оплатят ли их счета, а налоговая — сколько налога нужно заплатить.`,
        uz: `Biznes hisobotini juda turli odamlar o'qiydi va har biri o'zinikini qidiradi.

Investorlar biznes pul topadimi, shuni bilmoqchi. Qarz beruvchilar qarz qaytarilishini. Xodimlar ishi saqlanib qolishini. Yetkazib beruvchilar hisoblari to'lanishini, soliq idorasi esa qancha soliq to'lanishini bilmoqchi.`,
      },
    },
    {
      exam: {
        en: `- A partnership is not a separate legal entity: its property belongs to the partners.
- All partners may share in management unless their agreement says otherwise.
- A partner is an owner, not an employee. A written partnership agreement is useful but not compulsory.
- A sole trader can move capital at any time. Partners need all partners to agree.
- Sole traders and partnerships normally have no filing, audit or public inspection rules.
- Floating charges are generally not available to partnerships or individuals.
- A profit appropriation account shows how a partnership's profit is shared.
- A sole trader's revaluation surplus goes into the capital account.`,
        ru: `- Партнёрство не является отдельным юрлицом: его имущество принадлежит партнёрам.
- Все партнёры могут участвовать в управлении, если их договор не говорит иное.
- Партнёр — владелец, а не работник. Письменный договор полезен, но не обязателен.
- Предприниматель может двигать капитал в любое время. Партнёрам нужно согласие всех партнёров.
- У предпринимателей и партнёрств обычно нет требований о подаче отчётности, аудите и открытости.
- Плавающий залог обычно недоступен партнёрствам и физическим лицам.
- Счёт распределения прибыли показывает, как делится прибыль партнёрства.
- Резерв переоценки предпринимателя входит в счёт капитала.`,
        uz: `- Sheriklik alohida yuridik shaxs emas: uning mol-mulki sheriklarga tegishli.
- Barcha sheriklar boshqaruvda qatnasha oladi, agar shartnomada boshqacha yozilmagan bo'lsa.
- Sherik xodim emas, egadir. Yozma shartnoma foydali, ammo majburiy emas.
- Yakka tadbirkor kapitalni istalgan vaqtda harakatlantira oladi. Sheriklarga hammaning roziligi kerak.
- Yakka tadbirkor va sherikliklarda odatda hisobot topshirish, audit va ochiqlik talablari yo'q.
- Suzuvchi garov odatda sheriklik va jismoniy shaxslarga berilmaydi.
- Foydani taqsimlash hisobi sheriklik foydasi qanday bo'linishini ko'rsatadi.
- Yakka tadbirkorning qayta baholash rezervi kapital hisobiga kiradi.`,
      },
      key: {
        en: `- Sole trader: one owner, unlimited liability, capital account and drawings.
- Partnership: two or more owners, jointly and severally liable, capital and current accounts.
- Company: separate legal entity, limited liability, shares and dividends.
- Partners may all manage. Shareholders manage only if they are directors.
- Company downsides: registration costs, filing, audit, public accounts, strict capital rules.`,
        ru: `- Предприниматель: один владелец, неограниченная ответственность, счёт капитала и изъятия.
- Партнёрство: от двух владельцев, солидарная ответственность, счета капитала и текущие счета.
- Компания: отдельное юрлицо, ограниченная ответственность, акции и дивиденды.
- Управлять могут все партнёры. Акционеры — только если они директора.
- Минусы компании: расходы на регистрацию, подача отчётности, аудит, открытость, строгие правила капитала.`,
        uz: `- Yakka tadbirkor: bitta ega, cheklanmagan javobgarlik, kapital hisobi va olib qo'yishlar.
- Sheriklik: ikki va undan ko'p ega, birgalikda va alohida javobgarlik, kapital va joriy hisoblar.
- Kompaniya: alohida yuridik shaxs, cheklangan javobgarlik, aksiya va dividendlar.
- Barcha sheriklar boshqara oladi. Aksiyadorlar faqat direktor bo'lsa.
- Kompaniya kamchiliklari: ro'yxat xarajati, hisobot topshirish, audit, ochiqlik, qat'iy kapital qoidalari.`,
      },
      heading: { en: 'Types of business entity', ru: 'Виды предприятий', uz: 'Biznes subyektlari turlari' },
      body: {
        en: `A sole trader is owned and run by one person, who may employ any number of staff. In law, the owner and the business are the same, so the owner keeps all profits but has unlimited liability for losses and debts, even from personal assets such as a house. The capital account rises with new capital and profits, and falls with drawings and losses. Advantages are flexibility and independence. Sole traders are usually small because they rely on the owner's own resources.

A partnership has at least two owners who share all profits and have unlimited liability. Partners are jointly and severally liable, meaning each is fully liable for all business debts. Each partner has a capital account, normally a fixed amount that changes only when a partner joins or leaves, and a current account holding their profit share less drawings. Advantages are more capital, skills and ideas, lower administrative costs through economies of scale, and partners who can cover for each other.

A limited liability company is a separate legal entity from its owners, created by incorporation. Shareholders invest in return for a share of residual assets. They can lose their investment, but they are not personally liable for company debts, and a shareholder's death or insolvency does not affect the company. Directors elected by the shareholders manage it. Shareholders cannot take drawings. They receive dividends paid from accumulated profits.

Because a company is a separate legal person: it owns its own property; shares can usually be transferred without other shareholders' consent; it can sue and be sued in its own name; it can raise loans more easily, including with a floating charge (security over fluctuating assets such as inventory, which the company can keep using); and it is taxed separately from its shareholders, while sole traders and partners pay income tax personally on their profit share.

Disadvantages of incorporation: registration and legal costs; annual financial statements must be filed and usually audited, which can be expensive; accounts are open to public inspection; strict rules apply to introducing and withdrawing capital and profits; and members cannot join in management unless they are also directors.`,
        ru: `Индивидуальный предприниматель (sole trader) — владелец, который сам ведёт бизнес и может нанимать сколько угодно работников. По закону владелец и бизнес — одно лицо, поэтому он получает всю прибыль, но несёт неограниченную ответственность (unlimited liability) за убытки и долги, даже личным имуществом, например домом. Счёт капитала растёт за счёт новых вложений и прибыли и уменьшается из-за изъятий (drawings) и убытков. Преимущества — гибкость и независимость. Такие предприятия обычно небольшие, так как зависят от ресурсов владельца.

Партнёрство (partnership) имеет минимум двух владельцев, которые делят всю прибыль и несут неограниченную ответственность. Партнёры отвечают солидарно (jointly and severally), то есть каждый полностью отвечает за все долги бизнеса. У каждого партнёра есть счёт капитала — обычно фиксированная сумма, меняющаяся только при входе или выходе партнёра, и текущий счёт (current account), где отражается его доля прибыли за вычетом изъятий. Преимущества — больше капитала, навыков и идей, более низкие административные расходы за счёт экономии от масштаба и возможность подменять друг друга.

Компания с ограниченной ответственностью (limited liability company) — отдельное от владельцев юридическое лицо, созданное путём регистрации (incorporation). Акционеры вкладывают средства в обмен на долю в остаточных активах. Они могут потерять вложения, но лично не отвечают по долгам компании, а смерть или банкротство акционера не влияет на компанию. Управляют ею директора, избранные акционерами. Акционеры не могут делать изъятия. Они получают дивиденды из накопленной прибыли.

Поскольку компания — отдельное юридическое лицо: она сама владеет своим имуществом; акции обычно можно передавать без согласия других акционеров; она может подавать иски и быть ответчиком от своего имени; ей легче получать займы, в том числе под плавающий залог (floating charge) — обеспечение меняющимися активами, например запасами, которые компания продолжает использовать; она платит налоги отдельно от акционеров, тогда как предприниматели и партнёры лично платят подоходный налог со своей доли прибыли.

Недостатки регистрации компании: расходы на регистрацию и юристов; годовую отчётность нужно подавать и обычно проводить её аудит, что может быть дорого; отчётность открыта для всех; действуют строгие правила внесения и изъятия капитала и прибыли; участники не могут участвовать в управлении, если не являются директорами.`,
        uz: `Yakka tartibdagi tadbirkor (sole trader) biznesga bir o'zi egalik qiladi va uni yuritadi, istalgancha xodim yollashi mumkin. Qonun bo'yicha egasi va biznes bitta shaxs, shuning uchun u barcha foydani oladi, lekin zarar va qarzlar uchun cheklanmagan javobgarlik (unlimited liability) oladi, hatto uy kabi shaxsiy mol-mulki bilan ham. Kapital hisobi yangi mablag' va foyda hisobiga oshadi, olib qo'yishlar (drawings) va zarar hisobiga kamayadi. Afzalliklari — moslashuvchanlik va mustaqillik. Bunday bizneslar odatda kichik bo'ladi, chunki egasining resurslariga tayanadi.

Sheriklik (partnership) kamida ikki egaga ega, ular barcha foydani bo'lishadi va cheklanmagan javobgarlik oladi. Sheriklar birgalikda va alohida javob beradi (jointly and severally), ya'ni har biri biznesning barcha qarzlari uchun to'liq javobgar. Har bir sherikning kapital hisobi bor, u odatda qat'iy summa bo'lib, faqat sherik qo'shilganda yoki ketganda o'zgaradi, hamda joriy hisobi (current account) bor, unda foyda ulushidan olib qo'yishlar ayirib ko'rsatiladi. Afzalliklari — ko'proq kapital, ko'nikma va g'oyalar, ko'lam tejamkorligi hisobiga kamroq ma'muriy xarajat va bir-birining o'rnini bosa olish.

Mas'uliyati cheklangan kompaniya (limited liability company) egalaridan alohida yuridik shaxs bo'lib, ro'yxatdan o'tish (incorporation) orqali tuziladi. Aksiyadorlar qoldiq aktivlardagi ulush evaziga mablag' kiritadi. Ular sarmoyasini yo'qotishi mumkin, ammo kompaniya qarzlari uchun shaxsan javob bermaydi, aksiyadorning vafoti yoki bankrotligi esa kompaniyaga ta'sir qilmaydi. Uni aksiyadorlar saylagan direktorlar boshqaradi. Aksiyadorlar olib qo'yish qila olmaydi. Ular to'plangan foydadan dividend oladi.

Kompaniya alohida yuridik shaxs bo'lgani uchun: o'z mol-mulkiga o'zi egalik qiladi; aksiyalarni odatda boshqa aksiyadorlar roziligisiz o'tkazish mumkin; o'z nomidan da'vo qila oladi va unga da'vo qilinishi mumkin; kredit olishi osonroq, jumladan suzuvchi garov (floating charge) bilan, ya'ni kompaniya foydalanishda davom etadigan tovar zaxiralari kabi o'zgaruvchan aktivlar garovi; aksiyadorlardan alohida soliq to'laydi, tadbirkor va sheriklar esa foyda ulushidan daromad solig'ini shaxsan to'laydi.

Kompaniya tuzishning kamchiliklari: ro'yxatdan o'tish va yuridik xarajatlar; yillik hisobotni topshirish va odatda auditdan o'tkazish kerak, bu qimmat bo'lishi mumkin; hisobot hamma uchun ochiq; kapital va foydani kiritish va olish bo'yicha qat'iy qoidalar mavjud; ishtirokchilar direktor bo'lmasa, boshqaruvda qatnasha olmaydi.`,
      },
      example: {
        en: `A business owes $5,000 that it cannot pay.

- Sole trader: the owner must pay it, even if that means selling their own car.
- Partnership of two friends: the lender can ask either friend for the whole $5,000.
- Company: the owners lose only the money they paid for their shares. Their own cars are safe.`,
        ru: `Бизнес должен $5,000 и не может заплатить.

- Индивидуальный предприниматель: владелец обязан заплатить, даже если придётся продать свою машину.
- Товарищество двух друзей: кредитор может потребовать все $5,000 с любого из них.
- Компания: владельцы теряют только деньги, заплаченные за акции. Их машины в безопасности.`,
        uz: `Biznes $5,000 qarz va to'lay olmaydi.

- Yakka tadbirkor: egasi to'lashi shart, hatto o'z mashinasini sotishga to'g'ri kelsa ham.
- Ikki do'stning sherikligi: qarz beruvchi butun $5,000 ni istalgan biridan talab qilishi mumkin.
- Kompaniya: egalar faqat aksiyalar uchun to'lagan pulini yo'qotadi. Ularning mashinalari xavfsiz.`,
      },
      simple: {
        en: `There are three main ways to own a business.

- Sole trader: one person owns it alone. If it fails, they can lose their own house or car.
- Partnership: two or more owners share the profits, and each is fully responsible for all the debts.
- Company: a separate "person" in law. The owners hold shares and can lose only what they put in.`,
        ru: `Есть три основных способа владеть бизнесом.

- Индивидуальный предприниматель: один владелец. Если бизнес прогорит, он может потерять свой дом или машину.
- Товарищество: двое или больше владельцев делят прибыль, и каждый полностью отвечает по всем долгам.
- Компания: отдельное «лицо» по закону. Владельцы держат акции и могут потерять только то, что вложили.`,
        uz: `Biznesga egalik qilishning uchta asosiy yo'li bor.

- Yakka tadbirkor: bitta egasi bor. Biznes kuysa, u o'z uyi yoki mashinasini yo'qotishi mumkin.
- Sheriklik: ikki yoki undan ko'p egalar foydani bo'lishadi va har biri barcha qarzlar uchun to'liq javob beradi.
- Kompaniya: qonun bo'yicha alohida «shaxs». Egalar aksiyalarga ega va faqat qo'yganini yo'qotishi mumkin.`,
      },
    },
    {
      key: {
        en: `- Written by the IASB. It is not itself a standard.
- It helps develop standards, and helps choose policies when no standard applies.
- Objective of reporting: useful information for decisions about providing resources.
- Prudence: caution under uncertainty, without deliberate bias.`,
        ru: `- Написаны IASB. Сами по себе это не стандарт.
- Помогают разрабатывать стандарты и выбирать политику, если стандарта нет.
- Цель отчётности: полезная информация для решений о предоставлении ресурсов.
- Осмотрительность: осторожность при неопределённости, без намеренной предвзятости.`,
        uz: `- IASB tomonidan yozilgan. O'zi standart emas.
- Standartlar ishlab chiqishga va standart bo'lmaganda siyosat tanlashga yordam beradi.
- Hisobot maqsadi: resurs berish qarorlari uchun foydali axborot.
- Ehtiyotkorlik: noaniqlikda ehtiyot bo'lish, ataylab xolislikni buzmasdan.`,
      },
      heading: { en: 'The Conceptual Framework', ru: 'Концептуальные основы', uz: 'Konseptual asoslar' },
      body: {
        en: `The Conceptual Framework for Financial Reporting, written by the International Accounting Standards Board (IASB), sets out the main ideas behind IFRS Accounting Standards and therefore behind financial statements.

Its purpose is to help the IASB develop standards, to help preparers choose accounting policies when a standard gives no guidance or allows a choice, and to help everyone understand and apply the standards.

The objective of financial reporting is to provide financial information about the entity that is useful to users when deciding whether to provide economic resources to it, and for other financial decisions.

It covers the objective of reporting, the qualitative characteristics of useful information, the definition, recognition and measurement of the elements, and the accruals and going concern concepts. Concepts of capital and capital maintenance are not in the FA syllabus.

Prudence means being cautious when making judgements under uncertainty, so that assets and income are not overstated and liabilities and expenses are not understated.`,
        ru: `Концептуальные основы финансовой отчётности (Conceptual Framework), разработанные Советом по международным стандартам финансовой отчётности (IASB), излагают главные идеи, на которых строятся стандарты IFRS, а значит, и сама отчётность.

Их цель — помогать IASB разрабатывать стандарты, помогать составителям выбирать учётную политику, если стандарт не даёт указаний или допускает выбор, и помогать всем понимать и применять стандарты.

Цель финансовой отчётности — предоставлять о предприятии финансовую информацию, полезную пользователям при решении о предоставлении ему экономических ресурсов и при других финансовых решениях.

Документ охватывает цель отчётности, качественные характеристики полезной информации, определение, признание и оценку элементов, а также принципы начисления и непрерывности деятельности. Концепции капитала и поддержания капитала не входят в программу FA.

Осмотрительность (prudence) означает осторожность при суждениях в условиях неопределённости, чтобы активы и доходы не завышались, а обязательства и расходы не занижались.`,
        uz: `Moliyaviy hisobotning konseptual asoslari (Conceptual Framework) Xalqaro buxgalteriya standartlari kengashi (IASB) tomonidan yozilgan bo'lib, IFRS standartlari va demak moliyaviy hisobotning asosiy g'oyalarini belgilaydi.

Uning maqsadi — IASBga standartlar ishlab chiqishda yordam berish, standartda ko'rsatma bo'lmaganda yoki tanlov imkoni bo'lganda hisobot tuzuvchilarga hisob siyosatini tanlashda yordam berish va hammaga standartlarni tushunish va qo'llashda yordam berish.

Moliyaviy hisobotning maqsadi — foydalanuvchilarga korxonaga iqtisodiy resurslar berish to'g'risida va boshqa moliyaviy qarorlar qabul qilishda foydali bo'lgan moliyaviy axborotni taqdim etish.

Hujjat hisobot maqsadini, foydali axborotning sifat xususiyatlarini, elementlarning ta'rifi, tan olinishi va baholanishini, shuningdek hisoblash va uzluksizlik tamoyillarini qamrab oladi. Kapital va kapitalni saqlash konsepsiyalari FA dasturiga kirmaydi.

Ehtiyotkorlik (prudence) noaniqlik sharoitida mulohaza yuritganda ehtiyot bo'lishni bildiradi, shunda aktivlar va daromadlar oshirib ko'rsatilmaydi, majburiyatlar va xarajatlar esa kamaytirib ko'rsatilmaydi.`,
      },
      example: {
        en: `A customer owes you $300 but has stopped answering your calls.

- Prudence: do not just assume the whole $300 will arrive.
- But do not pretend you will lose $1,000 either. Making profit look smaller on purpose is bias, and that is not allowed.`,
        ru: `Покупатель должен вам $300, но перестал отвечать на звонки.

- Осмотрительность: не стоит просто считать, что все $300 придут.
- Но и не делайте вид, что потеряете $1,000. Нарочно уменьшать прибыль — это предвзятость, так нельзя.`,
        uz: `Mijoz sizga $300 qarz, lekin qo'ng'iroqlarga javob bermay qo'ydi.

- Ehtiyotkorlik: $300 ning hammasi albatta keladi deb hisoblamang.
- Lekin $1,000 yo'qotaman deb ham ko'rsatmang. Foydani ataylab kamaytirish — xolislikning yo'qligi, bunga yo'l qo'yilmaydi.`,
      },
      simple: {
        en: `The Conceptual Framework is the "rule behind the rules". It is not a standard itself.

It explains what financial statements are for and gives the basic ideas the IASB uses when it writes standards. When no standard covers a situation, accountants use it to decide what to do. One of its ideas is prudence: be careful when you are unsure, but never make the figures worse on purpose.`,
        ru: `Концептуальная основа — это «правило за правилами». Сама она не стандарт.

Она объясняет, зачем нужна отчётность, и даёт основные идеи, которыми IASB пользуется при написании стандартов. Когда ни один стандарт не подходит, бухгалтеры решают по ней. Одна из её идей — осмотрительность: будьте осторожны, когда не уверены, но никогда не ухудшайте цифры нарочно.`,
        uz: `Kontseptual asos — «qoidalar ortidagi qoida». Uning o'zi standart emas.

U hisobot nima uchun kerakligini tushuntiradi va IASB standart yozishda foydalanadigan asosiy g'oyalarni beradi. Hech bir standart to'g'ri kelmasa, buxgalterlar shunga qarab hal qiladi. G'oyalaridan biri ehtiyotkorlik: ishonchingiz komil bo'lmasa ehtiyot bo'ling, lekin raqamlarni ataylab yomonlashtirmang.`,
      },
    },
    {
      exam: {
        en: '- Materiality is an entity-specific aspect of relevance, based on the nature or size of an item.',
        ru: '- Существенность — аспект уместности, зависящий от предприятия: от характера или размера статьи.',
        uz: '- Muhimlik tegishlilikning korxonaga xos jihati bo\'lib, moddaning tabiati yoki hajmiga bog\'liq.',
      },
      key: {
        en: `- There are two: relevance and faithful representation.
- Relevant: can influence decisions, with predictive or confirmatory value.
- Material: leaving it out or misstating it could influence primary users.
- Faithful: complete, neutral and free from material error.
- Substance over form: show economic reality, not just legal form.`,
        ru: `- Их две: уместность и правдивое представление.
- Уместная: может повлиять на решения, имеет прогнозную или подтверждающую ценность.
- Существенная: пропуск или искажение может повлиять на основных пользователей.
- Правдивая: полная, нейтральная, без существенных ошибок.
- Приоритет содержания: показывать экономическую суть, а не только юридическую форму.`,
        uz: `- Ular ikkita: tegishlilik va haqqoniy aks ettirish.
- Tegishli: qarorlarga ta'sir qila oladi, bashorat yoki tasdiqlash qiymatiga ega.
- Muhim: tushirib qoldirish yoki buzish asosiy foydalanuvchilarga ta'sir qilishi mumkin.
- Haqqoniy: to'liq, betaraf va muhim xatosiz.
- Mazmun ustunligi: faqat yuridik shaklni emas, iqtisodiy haqiqatni ko'rsatish.`,
      },
      heading: {
        en: 'Fundamental qualitative characteristics',
        ru: 'Фундаментальные качественные характеристики',
        uz: 'Asosiy sifat xususiyatlari',
      },
      body: {
        en: `Qualitative characteristics are what make financial information useful. There are two fundamental ones: relevance and faithful representation.

Information is relevant if it can influence users' economic decisions and arrives in time to do so. Relevant information has predictive value (helping users assess past, present or future events) or confirmatory value (helping them confirm or correct earlier assessments).

Materiality directly affects relevance. It is a threshold, or cut-off point: information is material if omitting, misstating or obscuring it could reasonably be expected to influence the decisions of primary users.

Faithful representation means transactions are shown according to their substance and economic reality, not merely their legal form. This is called substance over form. Perfectly faithful information has three qualities:

- Complete: all necessary descriptions and explanations are included, which may include estimates.
- Neutral: free from bias, not presented to steer readers to a particular conclusion.
- Free from error: within the bounds of materiality. This does not mean perfectly accurate, and an estimate must be clearly described as an estimate.`,
        ru: `Качественные характеристики делают финансовую информацию полезной. Фундаментальных две: уместность и правдивое представление.

Информация уместна (relevance), если она может повлиять на экономические решения пользователей и поступает вовремя. Уместная информация имеет прогнозную ценность (predictive value: помогает оценивать прошлые, текущие или будущие события) или подтверждающую ценность (confirmatory value: помогает подтвердить или исправить прежние оценки).

Существенность (materiality) напрямую влияет на уместность. Это порог, или точка отсечения: информация существенна, если её пропуск, искажение или сокрытие может обоснованно повлиять на решения основных пользователей.

Правдивое представление (faithful representation) означает, что операции отражаются по их сути и экономической реальности, а не только по юридической форме. Это называется приоритетом содержания над формой (substance over form). Полностью правдивая информация обладает тремя качествами:

- Полнота: включены все нужные описания и пояснения, в том числе могут быть оценки.
- Нейтральность: отсутствие предвзятости, информация не подаётся так, чтобы подвести читателя к нужному выводу.
- Отсутствие ошибок: в пределах существенности. Это не означает абсолютную точность, а оценка должна быть чётко обозначена как оценка.`,
        uz: `Sifat xususiyatlari moliyaviy axborotni foydali qiladi. Asosiylari ikkita: tegishlilik va haqqoniy aks ettirish.

Axborot tegishli (relevance) hisoblanadi, agar u foydalanuvchilarning iqtisodiy qarorlariga ta'sir qila olsa va vaqtida yetib kelsa. Tegishli axborot bashorat qiymatiga (predictive value: o'tgan, hozirgi yoki kelajakdagi voqealarni baholashga yordam beradi) yoki tasdiqlash qiymatiga (confirmatory value: oldingi baholarni tasdiqlash yoki tuzatishga yordam beradi) ega.

Muhimlik (materiality) tegishlilikka bevosita ta'sir qiladi. Bu chegara hisoblanadi: agar axborotni tushirib qoldirish, noto'g'ri ko'rsatish yoki yashirish asosiy foydalanuvchilar qaroriga asosli ravishda ta'sir qilishi mumkin bo'lsa, u muhim hisoblanadi.

Haqqoniy aks ettirish (faithful representation) operatsiyalar faqat yuridik shakli bo'yicha emas, balki mazmuni va iqtisodiy haqiqati bo'yicha ko'rsatilishini bildiradi. Bu shakldan mazmunning ustunligi (substance over form) deyiladi. To'liq haqqoniy axborot uchta sifatga ega:

- To'liqlik: barcha zarur tavsif va izohlar kiritilgan, ular orasida taxminlar ham bo'lishi mumkin.
- Betaraflik: xolis, o'quvchini ma'lum xulosaga undamaydigan tarzda taqdim etilgan.
- Xatosizlik: muhimlik doirasida. Bu mutlaq aniqlikni anglatmaydi, taxmin esa aniq taxmin sifatida ko'rsatilishi kerak.`,
      },
      example: {
        en: `A shop's accounts.

- A $2 mistake in stationery costs changes nobody's decision. It is not material.
- Leaving out a $3,000 bank loan would change a lender's decision. It is material.
- The shop rents a fridge on a 5-year deal that gives it full use of the fridge. Substance over form asks what the deal really is, not just what the paper calls it.`,
        ru: `Отчётность магазина.

- Ошибка в $2 в расходах на канцтовары ничьего решения не изменит. Это несущественно.
- Пропуск банковского займа $3,000 изменил бы решение кредитора. Это существенно.
- Магазин арендует холодильник на 5 лет с полным правом пользования. Приоритет содержания над формой спрашивает, что это за сделка на деле, а не как она названа на бумаге.`,
        uz: `Do'kon hisoboti.

- Kanselyariya xarajatidagi $2 xato hech kimning qarorini o'zgartirmaydi. Bu muhim emas.
- $3,000 bank qarzini tushirib qoldirish qarz beruvchining qarorini o'zgartiradi. Bu muhim.
- Do'kon muzlatgichni 5 yilga to'liq foydalanish huquqi bilan ijaraga olgan. Shakldan mazmunning ustunligi bitim qog'ozda qanday atalganini emas, aslida nima ekanini so'raydi.`,
      },
      simple: {
        en: `For accounting information to be useful, it needs two things.

- Relevant: it could change someone's decision.
- Faithful representation: it shows what really happened, completely, without bias and without important mistakes.

Something is material if getting it wrong or leaving it out could change a user's decision.`,
        ru: `Чтобы учётная информация была полезной, ей нужны две вещи.

- Уместность: она может изменить чьё-то решение.
- Правдивое представление: она показывает, что произошло на самом деле, полностью, без предвзятости и без важных ошибок.

Информация существенна, если ошибка в ней или её отсутствие может изменить решение пользователя.`,
        uz: `Hisob ma'lumoti foydali bo'lishi uchun ikki narsa kerak.

- Tegishlilik: u kimningdir qarorini o'zgartira oladi.
- Haqqoniy aks ettirish: u haqiqatda nima bo'lganini to'liq, xolis va muhim xatolarsiz ko'rsatadi.

Ma'lumotdagi xato yoki uning yo'qligi foydalanuvchi qarorini o'zgartirishi mumkin bo'lsa, u muhim (material) hisoblanadi.`,
      },
    },
    {
      key: {
        en: `- There are four: comparability, verifiability, timeliness, understandability.
- Comparability needs consistency and disclosure of accounting policies.
- Verifiability: direct (count the cash) or indirect (recalculate).
- Understandability assumes a reader with reasonable business knowledge.
- Exam trap: reliability is not on either list.`,
        ru: `- Их четыре: сопоставимость, проверяемость, своевременность, понятность.
- Для сопоставимости нужны последовательность и раскрытие учётной политики.
- Проверяемость: прямая (пересчитать деньги) или косвенная (пересчитать расчёт).
- Понятность предполагает читателя с разумными знаниями о бизнесе.
- Ловушка на экзамене: надёжности (reliability) нет ни в одном списке.`,
        uz: `- Ular to'rtta: taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik.
- Taqqoslanuvchanlik izchillik va hisob siyosatini ochib berishni talab qiladi.
- Tekshiriluvchanlik: to'g'ridan-to'g'ri (pulni sanash) yoki bilvosita (qayta hisoblash).
- Tushunarlilik biznesni yetarlicha biladigan o'quvchini faraz qiladi.
- Imtihon tuzog'i: ishonchlilik (reliability) hech bir ro'yxatda yo'q.`,
      },
      heading: {
        en: 'Enhancing qualitative characteristics',
        ru: 'Дополнительные качественные характеристики',
        uz: 'Kuchaytiruvchi sifat xususiyatlari',
      },
      body: {
        en: `Four characteristics make relevant, faithfully represented information more useful:

- Comparability: users can compare an entity over time and against other entities. This needs consistency and disclosure of accounting policies, changes to them, and their effects, plus corresponding figures for the previous period.
- Verifiability: can the figure be checked? Direct verification means observing it, for example counting cash. Indirect verification means checking the inputs to a model and recalculating the output.
- Timeliness: information reaches decision makers in time to influence them. Generally, the older it is, the less useful it becomes.
- Understandability: depends on how information is presented and on users' abilities. Users are assumed to have reasonable knowledge of business and to study the information with reasonable diligence.

Memory aid: the two fundamental characteristics make information useful, and the four enhancing ones make it more useful. A common exam trap is listing an enhancing characteristic as fundamental.`,
        ru: `Четыре характеристики делают уместную и правдиво представленную информацию ещё полезнее:

- Сопоставимость (comparability): пользователи могут сравнивать предприятие во времени и с другими предприятиями. Для этого нужны последовательность и раскрытие учётной политики, её изменений и их влияния, а также сравнительные данные за прошлый период.
- Проверяемость (verifiability): можно ли проверить цифру? Прямая проверка — непосредственное наблюдение, например пересчёт денег. Косвенная проверка — контроль исходных данных модели и пересчёт результата.
- Своевременность (timeliness): информация поступает к принимающим решения вовремя, чтобы повлиять на них. Как правило, чем она старше, тем менее полезна.
- Понятность (understandability): зависит от способа подачи информации и возможностей пользователей. Предполагается, что пользователи разумно разбираются в бизнесе и изучают информацию с должным усердием.

Как запомнить: две фундаментальные характеристики делают информацию полезной, а четыре дополнительные — ещё полезнее. Частая ловушка на экзамене — дополнительная характеристика, названная фундаментальной.`,
        uz: `To'rtta xususiyat tegishli va haqqoniy aks ettirilgan axborotni yanada foydali qiladi:

- Taqqoslanuvchanlik (comparability): foydalanuvchilar korxonani vaqt bo'yicha va boshqa korxonalar bilan solishtira oladi. Buning uchun izchillik hamda hisob siyosati, uning o'zgarishlari va ta'sirini ochib berish, shuningdek o'tgan davr raqamlari kerak.
- Tekshiriluvchanlik (verifiability): raqamni tekshirish mumkinmi? To'g'ridan-to'g'ri tekshirish — kuzatish, masalan naqd pulni sanash. Bilvosita tekshirish — model kiritmalarini tekshirish va natijani qayta hisoblash.
- O'z vaqtidalik (timeliness): axborot qaror qabul qiluvchilarga ularga ta'sir qila oladigan vaqtda yetib boradi. Odatda axborot qancha eski bo'lsa, shuncha kam foydali.
- Tushunarlilik (understandability): axborot qanday taqdim etilgani va foydalanuvchilar imkoniyatiga bog'liq. Foydalanuvchilar biznesni yetarlicha biladi va axborotni tegishli sinchkovlik bilan o'rganadi deb faraz qilinadi.

Eslab qolish uchun: ikkita asosiy xususiyat axborotni foydali qiladi, to'rtta kuchaytiruvchi esa yanada foydali qiladi. Imtihondagi keng tarqalgan tuzoq — kuchaytiruvchi xususiyatni asosiy deb ko'rsatish.`,
      },
      example: {
        en: `Your shop's figures.

- Verifiability: you count the cash in the till and get $250. That checks the figure directly.
- Comparability: you count stock the same way this year as last year, so the two years can be compared.
- Timeliness: your bank asks for last year's figures. If you send them nine months late, they are less useful even if they are correct.`,
        ru: `Цифры вашего магазина.

- Проверяемость: вы пересчитываете деньги в кассе и получаете $250. Это прямая проверка.
- Сопоставимость: вы считаете запасы так же, как в прошлом году, поэтому два года можно сравнить.
- Своевременность: банк просит цифры за прошлый год. Если вы пришлёте их через девять месяцев, они менее полезны, даже если верны.`,
        uz: `Do'koningiz raqamlari.

- Tekshiriluvchanlik: kassadagi pulni sanab $250 chiqarasiz. Bu bevosita tekshirish.
- Taqqoslanuvchanlik: zaxirani o'tgan yilgidek sanaysiz, shuning uchun ikki yilni solishtirish mumkin.
- O'z vaqtidalik: bank o'tgan yil raqamlarini so'raydi. To'qqiz oy kechikib yuborsangiz, to'g'ri bo'lsa ham foydasi kamroq.`,
      },
      simple: {
        en: `Four more qualities make useful information even better.

- Comparability: you can compare it with last year or with another business.
- Verifiability: someone else can check it.
- Timeliness: it arrives in time to be used.
- Understandability: a reader with some business knowledge can follow it.

Reliability is NOT on the list. That is a common exam trap.`,
        ru: `Ещё четыре качества делают полезную информацию ещё лучше.

- Сопоставимость: её можно сравнить с прошлым годом или с другим бизнесом.
- Проверяемость: кто-то другой может её проверить.
- Своевременность: она приходит вовремя, чтобы ею воспользоваться.
- Понятность: читатель с базовыми знаниями бизнеса может в ней разобраться.

Надёжности (reliability) в списке НЕТ. Это частая ловушка на экзамене.`,
        uz: `Yana to'rt sifat foydali ma'lumotni yanada yaxshilaydi.

- Taqqoslanuvchanlik: uni o'tgan yil yoki boshqa biznes bilan solishtirish mumkin.
- Tekshiriluvchanlik: boshqa odam uni tekshira oladi.
- O'z vaqtidalik: u foydalanish uchun o'z vaqtida keladi.
- Tushunarlilik: biznesdan biroz xabardor o'quvchi uni tushuna oladi.

Ishonchlilik (reliability) ro'yxatda YO'Q. Bu imtihondagi keng tarqalgan tuzoq.`,
      },
    },
    {
      key: {
        en: `- Asset: present economic resource controlled as a result of past events.
- Liability: present obligation to transfer an economic resource from past events.
- Equity: assets minus liabilities.
- Income raises equity, expenses lower it. Dealings with owners do not count.
- Current: within 12 months of the reporting date. Non-current: longer.`,
        ru: `- Актив: существующий экономический ресурс, контролируемый в результате прошлых событий.
- Обязательство: существующая обязанность передать экономический ресурс из-за прошлых событий.
- Капитал: активы минус обязательства.
- Доходы увеличивают капитал, расходы уменьшают. Операции с владельцами не считаются.
- Оборотные и краткосрочные: до 12 месяцев с отчётной даты. Иначе — внеоборотные и долгосрочные.`,
        uz: `- Aktiv: o'tgan voqealar natijasida nazorat qilinadigan mavjud iqtisodiy resurs.
- Majburiyat: o'tgan voqealar natijasida iqtisodiy resursni berish bo'yicha mavjud burch.
- Kapital: aktivlar minus majburiyatlar.
- Daromad kapitalni oshiradi, xarajat kamaytiradi. Egalar bilan operatsiyalar hisobga kirmaydi.
- Joriy: hisobot sanasidan 12 oy ichida. Uzoq muddatli: undan keyin.`,
      },
      heading: {
        en: 'The elements of the financial statements',
        ru: 'Элементы финансовой отчётности',
        uz: 'Moliyaviy hisobot elementlari',
      },
      body: {
        en: `The Conceptual Framework defines five elements:

- Asset: a present economic resource controlled by the entity as a result of past events. An economic resource is a right that has the potential to produce economic benefits.
- Liability: a present obligation of the entity to transfer an economic resource as a result of past events.
- Equity: the residual interest in the assets of the entity after deducting all its liabilities.
- Income: increases in assets or decreases in liabilities that increase equity, other than contributions from holders of equity claims.
- Expense: decreases in assets or increases in liabilities that decrease equity, other than distributions to holders of equity claims.

Note the exclusions. Money the owner pays in is not income, and drawings or dividends are not expenses. These are transactions with the owners, not business performance.

Assets and liabilities are also split by time. Current assets are expected to be converted into cash within twelve months of the reporting date, such as inventory, receivables and cash. Non-current assets are used in the business over several years to generate revenue and profit, such as land, buildings and vans.

Current liabilities will be settled within twelve months of the reporting date, such as trade payables. Non-current liabilities will be settled after more than twelve months, such as a loan repayable in two years.`,
        ru: `Концептуальные основы определяют пять элементов:

- Актив (asset): существующий экономический ресурс, контролируемый предприятием в результате прошлых событий. Экономический ресурс — это право, способное принести экономические выгоды.
- Обязательство (liability): существующая обязанность предприятия передать экономический ресурс в результате прошлых событий.
- Капитал (equity): остаточная доля в активах предприятия после вычета всех его обязательств.
- Доход (income): увеличение активов или уменьшение обязательств, ведущее к росту капитала, кроме вкладов держателей прав на капитал.
- Расход (expense): уменьшение активов или увеличение обязательств, ведущее к снижению капитала, кроме выплат держателям прав на капитал.

Обратите внимание на исключения. Деньги, внесённые владельцем, — не доход, а изъятия или дивиденды — не расход. Это операции с владельцами, а не результат деятельности бизнеса.

Активы и обязательства также делятся по сроку. Оборотные активы (current assets) предполагается превратить в деньги в течение двенадцати месяцев с отчётной даты: запасы, дебиторская задолженность, денежные средства. Внеоборотные активы (non-current assets) используются в бизнесе несколько лет, принося выручку и прибыль: земля, здания, фургоны.

Краткосрочные обязательства (current liabilities) будут погашены в течение двенадцати месяцев с отчётной даты, например задолженность перед поставщиками. Долгосрочные обязательства (non-current liabilities) будут погашены более чем через двенадцать месяцев, например заём со сроком два года.`,
        uz: `Konseptual asoslar beshta elementni belgilaydi:

- Aktiv (asset): o'tgan voqealar natijasida korxona nazorat qiladigan mavjud iqtisodiy resurs. Iqtisodiy resurs — iqtisodiy naf keltirish imkoniyatiga ega huquq.
- Majburiyat (liability): o'tgan voqealar natijasida korxonaning iqtisodiy resursni berish bo'yicha mavjud burchi.
- Kapital (equity): barcha majburiyatlar ayirilgandan keyin korxona aktivlaridagi qoldiq ulush.
- Daromad (income): kapitalni oshiradigan aktivlar o'sishi yoki majburiyatlar kamayishi, kapital egalarining qo'yilmalaridan tashqari.
- Xarajat (expense): kapitalni kamaytiradigan aktivlar kamayishi yoki majburiyatlar o'sishi, kapital egalariga to'lovlardan tashqari.

Istisnolarga e'tibor bering. Egasi kiritgan pul daromad emas, olib qo'yishlar yoki dividendlar esa xarajat emas. Bular biznes natijasi emas, balki egalar bilan operatsiyalar.

Aktiv va majburiyatlar muddat bo'yicha ham bo'linadi. Joriy aktivlar (current assets) hisobot sanasidan o'n ikki oy ichida pulga aylanishi kutiladi: tovar zaxiralari, debitorlik qarzi, pul. Uzoq muddatli aktivlar (non-current assets) biznesda bir necha yil davomida daromad va foyda olish uchun ishlatiladi: yer, binolar, furgonlar.

Joriy majburiyatlar (current liabilities) hisobot sanasidan o'n ikki oy ichida to'lanadi, masalan yetkazib beruvchilarga qarz. Uzoq muddatli majburiyatlar (non-current liabilities) o'n ikki oydan keyin to'lanadi, masalan ikki yildan keyin qaytariladigan kredit.`,
      },
      example: {
        en: `On day one you start a shop:
  You put in $8,000 of your own money
  You borrow $3,000 from the bank, to repay in two years
  You buy shelves for $3,000, and goods for $5,500, still owing the supplier $1,000 of that
# Assets (what the shop has)
  Shelves $3,000 (non-current: used for years)
  Goods $5,500 and cash $3,500 (current: used up within a year)
  Total: $3,000 + $5,500 + $3,500 = $12,000
# Liabilities (what the shop owes)
  Bank loan $3,000 (non-current) + supplier $1,000 (current) = $4,000
# Equity (what is left for you)
  $12,000 - $4,000 = $8,000, exactly the money you put in
= Check: assets $12,000 = equity $8,000 + liabilities $4,000`,
        ru: `В первый день вы открываете магазин:
  Вы вкладываете $8,000 своих денег
  Берёте в банке заём $3,000 на два года
  Покупаете полки за $3,000 и товар за $5,500, из которых $1,000 ещё должны поставщику
# Активы (что есть у магазина)
  Полки $3,000 (внеоборотные: служат годами)
  Товар $5,500 и деньги $3,500 (оборотные: расходуются в течение года)
  Всего: $3,000 + $5,500 + $3,500 = $12,000
# Обязательства (что магазин должен)
  Банковский заём $3,000 (долгосрочный) + поставщику $1,000 (краткосрочный) = $4,000
# Капитал (что остаётся вам)
  $12,000 - $4,000 = $8,000, ровно столько, сколько вы вложили
= Проверка: активы $12,000 = капитал $8,000 + обязательства $4,000`,
        uz: `Birinchi kuni siz do'kon ochasiz:
  O'z pulingizdan $8,000 qo'yasiz
  Bankdan ikki yilga $3,000 qarz olasiz
  Javonlarni $3,000 ga va tovarni $5,500 ga olasiz, shundan $1,000 ni hali yetkazib beruvchiga qarzsiz
# Aktivlar (do'konda nima bor)
  Javonlar $3,000 (uzoq muddatli: yillar xizmat qiladi)
  Tovar $5,500 va pul $3,500 (aylanma: bir yil ichida ishlatiladi)
  Jami: $3,000 + $5,500 + $3,500 = $12,000
# Majburiyatlar (do'kon nima qarz)
  Bank qarzi $3,000 (uzoq muddatli) + yetkazib beruvchiga $1,000 (qisqa muddatli) = $4,000
# Kapital (sizga nima qoladi)
  $12,000 - $4,000 = $8,000, aynan siz qo'ygan pul
= Tekshiruv: aktivlar $12,000 = kapital $8,000 + majburiyatlar $4,000`,
      },
      simple: {
        en: `There are five building blocks.

- Asset: something the business controls that will bring it money, such as cash or a van.
- Liability: something it owes, such as a loan.
- Equity: what is left for the owner, assets minus liabilities.
- Income makes equity bigger and expenses make it smaller.

Money the owner puts in or takes out is not income or an expense.`,
        ru: `Есть пять основных элементов.

- Актив: то, что контролирует бизнес и что принесёт ему деньги, например деньги в кассе или фургон.
- Обязательство: то, что бизнес должен, например заём.
- Капитал: то, что остаётся владельцу, активы минус обязательства.
- Доход увеличивает капитал, а расходы уменьшают его.

Деньги, которые владелец вносит или забирает, — не доход и не расход.`,
        uz: `Beshta asosiy element bor.

- Aktiv: biznes nazorat qiladigan va unga pul keltiradigan narsa, masalan pul yoki furgon.
- Majburiyat: biznes qarz bo'lgan narsa, masalan qarz.
- Kapital: egasiga qoladigan qism, aktivlar minus majburiyatlar.
- Daromad kapitalni oshiradi, xarajatlar kamaytiradi.

Egasi qo'ygan yoki olgan pul daromad ham, xarajat ham emas.`,
      },
    },
    {
      key: {
        en: `- Five parts: financial position, profit or loss, changes in equity, cash flows, notes.
- Financial position is one date. Profit or loss covers a period.
- Changes in equity applies only to companies. Cash flows is normally companies too.
- Other comprehensive income: unrealised gains and losses, such as a revaluation surplus.
- IFRS 18 subtotals: operating profit, profit before financing and taxes, profit for the year.`,
        ru: `- Пять частей: финансовое положение, прибыль или убыток, изменения капитала, движение денег, примечания.
- Финансовое положение — на одну дату. Прибыль или убыток — за период.
- Изменения капитала — только компании. Движение денег обычно тоже.
- Прочий совокупный доход: нереализованные прибыли и убытки, например резерв переоценки.
- Итоги IFRS 18: операционная прибыль, прибыль до финансирования и налогов, прибыль за год.`,
        uz: `- Besh qism: moliyaviy holat, foyda yoki zarar, kapital o'zgarishi, pul oqimlari, izohlar.
- Moliyaviy holat bir sana uchun. Foyda yoki zarar butun davr uchun.
- Kapital o'zgarishi faqat kompaniyalarda. Pul oqimlari ham odatda shunday.
- Boshqa umumlashgan daromad: amalga oshmagan foyda va zararlar, masalan qayta baholash rezervi.
- IFRS 18 yakunlari: operatsion foyda, moliyalashtirish va soliqqacha foyda, yillik foyda.`,
      },
      heading: {
        en: 'The components of a set of financial statements',
        ru: 'Состав финансовой отчётности',
        uz: 'Moliyaviy hisobot tarkibi',
      },
      body: {
        en: `Under IFRS 18 Presentation and Disclosure in Financial Statements, a complete set contains five parts:

- Statement of financial position: assets, liabilities and equity at the end of the reporting period. Assets and liabilities are classified as current or non-current. For a sole trader, a simple capital account replaces the equity section.
- Statement of profit or loss and other comprehensive income: revenue earned and expenses incurred during the period. Items in profit for the year are realised.
- Statement of changes in equity: movements in share capital, share premium, revaluation surplus and retained earnings. It applies only to limited liability companies.
- Statement of cash flows: cash paid and received in the period, normally relevant only to limited liability companies.
- Notes: accounting policies and other disclosures that help users make informed judgements.

Expenses can be classified by function (cost of sales, distribution costs, administrative expenses) or by nature (materials, employee costs, depreciation). The choice must be applied consistently.

IFRS 18 requires three subtotals: operating profit, profit before financing and income taxes, and profit for the year.

Other comprehensive income contains unrealised gains and losses. The main FA example is a revaluation surplus on land and buildings. Profit plus other comprehensive income gives total comprehensive income. Both flow into the statement of financial position and the statement of changes in equity.`,
        ru: `По IFRS 18 «Представление и раскрытие информации в финансовой отчётности» полный комплект состоит из пяти частей:

- Отчёт о финансовом положении (statement of financial position): активы, обязательства и капитал на конец отчётного периода. Активы и обязательства делятся на оборотные/краткосрочные и внеоборотные/долгосрочные. У индивидуального предпринимателя вместо раздела капитала — простой счёт капитала.
- Отчёт о прибыли или убытке и прочем совокупном доходе: выручка и расходы за период. Статьи, входящие в прибыль за год, считаются реализованными.
- Отчёт об изменениях в капитале (statement of changes in equity): движение акционерного капитала, эмиссионного дохода, резерва переоценки и нераспределённой прибыли. Применяется только к компаниям с ограниченной ответственностью.
- Отчёт о движении денежных средств (statement of cash flows): деньги, уплаченные и полученные за период, обычно только для компаний с ограниченной ответственностью.
- Примечания (notes): учётная политика и другие раскрытия, помогающие пользователям делать обоснованные выводы.

Расходы можно классифицировать по функции (себестоимость продаж, расходы на сбыт, административные расходы) или по характеру (материалы, расходы на персонал, амортизация). Выбор должен применяться последовательно.

IFRS 18 требует трёх промежуточных итогов: операционная прибыль, прибыль до финансирования и налога на прибыль, прибыль за год.

Прочий совокупный доход включает нереализованные прибыли и убытки. Главный пример в FA — резерв переоценки земли и зданий. Прибыль плюс прочий совокупный доход дают общий совокупный доход. Обе суммы попадают в отчёт о финансовом положении и отчёт об изменениях в капитале.`,
        uz: `IFRS 18 "Moliyaviy hisobotda taqdim etish va ochib berish" bo'yicha to'liq to'plam besh qismdan iborat:

- Moliyaviy holat to'g'risidagi hisobot (statement of financial position): hisobot davri oxiridagi aktivlar, majburiyatlar va kapital. Aktiv va majburiyatlar joriy va uzoq muddatliga bo'linadi. Yakka tartibdagi tadbirkorda kapital bo'limi o'rniga oddiy kapital hisobi bo'ladi.
- Foyda yoki zarar va boshqa umumlashgan daromad to'g'risidagi hisobot: davr davomidagi tushum va xarajatlar. Yillik foydaga kiritilgan moddalar amalga oshgan hisoblanadi.
- Kapitaldagi o'zgarishlar to'g'risidagi hisobot (statement of changes in equity): aksiya kapitali, emissiya daromadi, qayta baholash rezervi va taqsimlanmagan foyda harakati. Faqat mas'uliyati cheklangan kompaniyalarga tegishli.
- Pul oqimlari to'g'risidagi hisobot (statement of cash flows): davrda to'langan va olingan pul, odatda faqat mas'uliyati cheklangan kompaniyalar uchun.
- Izohlar (notes): hisob siyosati va foydalanuvchilarga asosli xulosa chiqarishga yordam beradigan boshqa ma'lumotlar.

Xarajatlar funksiyasi (sotilgan tovar tannarxi, tarqatish xarajatlari, ma'muriy xarajatlar) yoki tabiati (materiallar, xodimlar xarajati, amortizatsiya) bo'yicha tasniflanishi mumkin. Tanlov izchil qo'llanishi kerak.

IFRS 18 uchta oraliq yakunni talab qiladi: operatsion foyda, moliyalashtirish va foyda solig'igacha bo'lgan foyda, yillik foyda.

Boshqa umumlashgan daromad amalga oshmagan foyda va zararlarni o'z ichiga oladi. FA dagi asosiy misol — yer va binolarni qayta baholash rezervi. Foyda va boshqa umumlashgan daromad birgalikda jami umumlashgan daromadni beradi. Ikkalasi ham moliyaviy holat hisobotiga va kapitaldagi o'zgarishlar hisobotiga o'tadi.`,
      },
      example: {
        en: `In its first year a shop sells goods for $40,000 that cost it $26,000, and pays $9,000 of other expenses.
# Statement of profit or loss (the whole year)
  Sales $40,000 - cost of the goods sold $26,000 = gross profit $14,000
  Gross profit $14,000 - other expenses $9,000 = profit for the year $5,000
# Statement of financial position (the last day of the year)
  The owner is a sole trader, so the $5,000 profit is added to the owner's capital
= A sole trader has no statement of changes in equity. That statement is only for limited liability companies.`,
        ru: `За первый год магазин продаёт товар на $40,000, который обошёлся ему в $26,000, и платит $9,000 прочих расходов.
# Отчёт о прибыли или убытке (весь год)
  Продажи $40,000 - себестоимость проданного $26,000 = валовая прибыль $14,000
  Валовая прибыль $14,000 - прочие расходы $9,000 = прибыль за год $5,000
# Отчёт о финансовом положении (последний день года)
  Владелец — индивидуальный предприниматель, поэтому прибыль $5,000 прибавляется к его капиталу
= У индивидуального предпринимателя нет отчёта об изменениях в капитале. Он только для компаний с ограниченной ответственностью.`,
        uz: `Birinchi yili do'kon tannarxi $26,000 bo'lgan tovarni $40,000 ga sotadi va $9,000 boshqa xarajat to'laydi.
# Foyda yoki zarar hisoboti (butun yil)
  Sotuv $40,000 - sotilgan tovar tannarxi $26,000 = yalpi foyda $14,000
  Yalpi foyda $14,000 - boshqa xarajatlar $9,000 = yil foydasi $5,000
# Moliyaviy holat hisoboti (yilning oxirgi kuni)
  Egasi yakka tadbirkor, shuning uchun $5,000 foyda egasining kapitaliga qo'shiladi
= Yakka tadbirkorda kapitaldagi o'zgarishlar hisoboti yo'q. U faqat mas'uliyati cheklangan kompaniyalar uchun.`,
      },
      simple: {
        en: `A full set of financial statements has five parts.

The statement of financial position is a photo of one day: what you own and what you owe. The statement of profit or loss is a film of the year: what you earned and what you spent. Companies also prepare a statement of changes in equity and a statement of cash flows, and every set has notes that explain the numbers.`,
        ru: `Полный комплект финансовой отчётности состоит из пяти частей.

Отчёт о финансовом положении — это фото одного дня: что у вас есть и что вы должны. Отчёт о прибыли или убытке — это фильм за год: что вы заработали и что потратили. Компании также готовят отчёт об изменениях в капитале и отчёт о движении денежных средств, и в каждом комплекте есть примечания с пояснениями к цифрам.`,
        uz: `To'liq moliyaviy hisobot besh qismdan iborat.

Moliyaviy holat hisoboti — bir kunning surati: nima borligi va nima qarzligingiz. Foyda yoki zarar hisoboti — yil davomidagi film: nima topganingiz va nima sarflaganingiz. Kompaniyalar kapitaldagi o'zgarishlar hisoboti va pul oqimlari hisobotini ham tayyorlaydi, har bir to'plamda raqamlarni tushuntiruvchi izohlar bor.`,
      },
    },
    {
      exam: {
        en: `- Consistency covers how items are presented and classified, including in the notes.
- Going concern is why non-current assets stay at cost less depreciation, not forced sale value.`,
        ru: `- Последовательность касается представления и классификации статей, включая примечания.
- Благодаря непрерывности внеоборотные активы учитываются по первоначальной стоимости за вычетом амортизации, а не по цене вынужденной продажи.`,
        uz: `- Izchillik moddalarning taqdim etilishi va tasniflanishiga, jumladan izohlarga ham tegishli.
- Uzluksizlik sababli uzoq muddatli aktivlar majburiy sotuv narxida emas, tarixiy qiymat minus amortizatsiyada ko'rsatiladi.`,
      },
      key: {
        en: `- Going concern: expected to keep operating. Expected, never guaranteed.
- Accruals: record when earned or incurred, not when cash moves.
- Business entity: keep the owner's private affairs out of the accounts.
- Consistency: same treatment within a period and between periods.
- Offsetting is generally not allowed. Duality: every transaction has two effects.
- Historical cost: the original amount. Rising prices understate assets and overstate profit.`,
        ru: `- Непрерывность: ожидается, что бизнес продолжит работу. Ожидается, но не гарантируется.
- Начисление: отражать, когда доход заработан, а расход понесён, а не при движении денег.
- Обособленность: личные дела владельца не входят в учёт.
- Последовательность: одинаковый учёт внутри периода и между периодами.
- Взаимозачёт, как правило, запрещён. Двойственность: у каждой операции два эффекта.
- Первоначальная стоимость: исходная сумма. Рост цен занижает активы и завышает прибыль.`,
        uz: `- Uzluksizlik: biznes davom etishi kutiladi. Kutiladi, lekin kafolatlanmaydi.
- Hisoblash: pul harakatlanganda emas, daromad topilganda yoki xarajat qilinganda qayd etish.
- Alohidalik: egasining shaxsiy ishlari hisobga kirmaydi.
- Izchillik: davr ichida va davrlar orasida bir xil yuritish.
- O'zaro hisobga olish odatda taqiqlangan. Ikki yoqlamalik: har operatsiyada ikki ta'sir bor.
- Tarixiy qiymat: dastlabki summa. Narx oshishi aktivni kamaytirib, foydani oshirib ko'rsatadi.`,
      },
      heading: {
        en: 'Important accounting principles and concepts',
        ru: 'Важные принципы бухгалтерского учёта',
        uz: 'Muhim buxgalteriya tamoyillari',
      },
      body: {
        en: `These principles underpin the preparation of financial statements, and all of them are examinable:

- Materiality: an item is material if leaving it out or misstating it would change users' understanding. It is a subjective judgement, and aggregation of similar items is allowed, for example showing total trade receivables.
- Substance over form: record the economic reality, not just the legal form. Redeemable preference shares are legally shares, but they must be repaid, so they are treated as a liability.
- Going concern: statements assume the entity will continue for the foreseeable future, with no need or intention to close or significantly reduce operations. The normal expectation is at least twelve months.
- Business entity: the accounts cover only the business, not the owner's private affairs. In accounting, the business is separate from its owners even when, in law, a sole trader's business is not.
- Accrual accounting: record revenue when earned and expenses when incurred, regardless of when cash moves.
- Prudence: do not overstate assets and income or understate liabilities and expenses, but do not deliberately misstate either, because that creates bias.
- Consistency: treat similar items the same way within a period and between periods, unless circumstances or a new standard require a change. This supports comparability.
- Offsetting: netting amounts off is not permitted, with few exceptions. Show cash in bank and a bank loan separately.
- Duality: every transaction has two effects, which is the basis of double-entry bookkeeping.
- Historical cost and current value: historical cost is the original amount at the transaction date. Current value can be much higher or lower because of inflation, wear and tear, or technology.`,
        ru: `Эти принципы лежат в основе подготовки отчётности, и все они могут быть на экзамене:

- Существенность (materiality): статья существенна, если её пропуск или искажение изменит понимание пользователей. Это субъективное суждение; допускается объединение схожих статей, например общая дебиторская задолженность.
- Приоритет содержания над формой (substance over form): отражается экономическая реальность, а не только юридическая форма. Погашаемые привилегированные акции юридически являются акциями, но их нужно вернуть, поэтому они учитываются как обязательство.
- Непрерывность деятельности (going concern): предполагается, что предприятие будет работать в обозримом будущем, без необходимости или намерения закрыться либо существенно сократить деятельность. Обычно это минимум двенадцать месяцев.
- Обособленность предприятия (business entity): учёт охватывает только бизнес, а не личные дела владельца. В учёте бизнес отделён от владельцев, даже если по закону бизнес индивидуального предпринимателя от него не отделён.
- Метод начисления (accrual accounting): выручка отражается, когда заработана, а расходы — когда понесены, независимо от движения денег.
- Осмотрительность (prudence): не завышать активы и доходы и не занижать обязательства и расходы, но и не искажать их намеренно, так как это создаёт предвзятость.
- Последовательность (consistency): схожие статьи учитываются одинаково внутри периода и между периодами, если обстоятельства или новый стандарт не требуют изменений. Это обеспечивает сопоставимость.
- Взаимозачёт (offsetting): сворачивание сумм запрещено, за редкими исключениями. Деньги в банке и банковский кредит показываются отдельно.
- Двойственность (duality): каждая операция имеет два эффекта; это основа двойной записи.
- Первоначальная и текущая стоимость: первоначальная стоимость (historical cost) — исходная сумма на дату операции. Текущая стоимость может быть намного выше или ниже из-за инфляции, износа или технологий.`,
        uz: `Bu tamoyillar moliyaviy hisobot tayyorlash asosida turadi va hammasi imtihonda chiqishi mumkin:

- Muhimlik (materiality): moddani tushirib qoldirish yoki noto'g'ri ko'rsatish foydalanuvchilar tushunchasini o'zgartirsa, u muhim hisoblanadi. Bu subyektiv baho; o'xshash moddalarni birlashtirishga ruxsat beriladi, masalan jami debitorlik qarzi.
- Shakldan mazmunning ustunligi (substance over form): faqat yuridik shakl emas, iqtisodiy haqiqat aks ettiriladi. Qaytariladigan imtiyozli aksiyalar yuridik jihatdan aksiya, ammo ular qaytarilishi kerak, shuning uchun majburiyat sifatida hisobga olinadi.
- Uzluksizlik (going concern): korxona yaqin kelajakda ishlashda davom etadi, yopilish yoki faoliyatni jiddiy qisqartirish zarurati yoki niyati yo'q deb faraz qilinadi. Odatda bu kamida o'n ikki oy.
- Biznes alohidaligi (business entity): hisob faqat biznesni qamrab oladi, egasining shaxsiy ishlarini emas. Hisobda biznes egalaridan alohida, hatto qonunda yakka tadbirkorning biznesi undan ajratilmagan bo'lsa ham.
- Hisoblash usuli (accrual accounting): daromad topilganda, xarajat esa qilinganda qayd etiladi, pul qachon harakatlanganidan qat'i nazar.
- Ehtiyotkorlik (prudence): aktiv va daromadlarni oshirib, majburiyat va xarajatlarni kamaytirib ko'rsatmaslik, lekin ataylab buzib ko'rsatmaslik ham kerak, chunki bu xolislikni buzadi.
- Izchillik (consistency): o'xshash moddalar davr ichida va davrlar orasida bir xil yuritiladi, agar sharoit yoki yangi standart o'zgarishni talab qilmasa. Bu taqqoslanuvchanlikni ta'minlaydi.
- O'zaro hisobga olish (offsetting): summalarni qisqartirish taqiqlanadi, kam sonli istisnolar bundan mustasno. Bankdagi pul va bank krediti alohida ko'rsatiladi.
- Ikki yoqlamalik (duality): har bir operatsiya ikki ta'sirga ega, bu ikki yoqlama yozuvning asosi.
- Tarixiy va joriy qiymat: tarixiy qiymat (historical cost) operatsiya sanasidagi dastlabki summa. Joriy qiymat inflyatsiya, eskirish yoki texnologiya sababli ancha yuqori yoki past bo'lishi mumkin.`,
      },
      example: {
        en: `Five everyday cases from one shop.

- Business entity: the owner pays their home electricity bill from the shop till. That is drawings, not a shop expense.
- Accruals: you sell to a cafe in June and are paid in July. The sale belongs in June.
- No offsetting: the cafe owes you $200 and you owe it $40. Show both, not a net $160.
- Duality: you buy a laptop for the shop by card. The shop gains an asset and its bank balance falls.
- Historical cost: shelves stay at the $3,000 you paid, even if new ones now cost $3,500.`,
        ru: `Пять повседневных случаев из одного магазина.

- Обособленность бизнеса: владелец оплачивает домашнее электричество из кассы магазина. Это изъятие, а не расход магазина.
- Начисление: вы продаёте кафе товар в июне, а деньги получаете в июле. Продажа относится к июню.
- Без взаимозачёта: кафе должно вам $200, а вы ему $40. Показываем обе суммы, а не нетто $160.
- Двойственность: вы покупаете ноутбук для магазина картой. У магазина появляется актив, а остаток в банке уменьшается.
- Историческая стоимость: полки остаются по $3,000, которые вы заплатили, даже если новые теперь стоят $3,500.`,
        uz: `Bitta do'kondan beshta kundalik holat.

- Biznesning alohidaligi: egasi uyining elektr haqini do'kon kassasidan to'laydi. Bu olib qo'yish, do'kon xarajati emas.
- Hisoblash: kafega iyunda sotasiz, pul iyulda keladi. Sotuv iyunga tegishli.
- O'zaro hisob-kitobsiz: kafe sizga $200, siz unga $40 qarzsiz. Ikkalasini ko'rsatamiz, sof $160 ni emas.
- Ikki yoqlamalik: do'kon uchun noutbukni karta bilan olasiz. Do'konda aktiv paydo bo'ladi, bankdagi qoldiq kamayadi.
- Tarixiy qiymat: javonlar siz to'lagan $3,000 da qoladi, yangilari endi $3,500 tursa ham.`,
      },
      simple: {
        en: `These are the basic rules every set of accounts follows.

- Going concern: assume the business will keep going.
- Accruals: record income when you earn it and costs when you incur them, not when the money moves.
- Business entity: keep the owner's private life out of the business accounts.
- Consistency: do things the same way each time.
- No offsetting: show what you owe and what you are owed separately.
- Historical cost: record things at what you paid for them.`,
        ru: `Это основные правила, которым следует любая отчётность.

- Непрерывность деятельности: считаем, что бизнес продолжит работать.
- Начисление: доход записываем, когда заработали, а расходы — когда понесли, а не когда двигаются деньги.
- Обособленность бизнеса: личная жизнь владельца не попадает в учёт бизнеса.
- Последовательность: всё делаем каждый раз одинаково.
- Без взаимозачёта: что вы должны и что должны вам, показываем отдельно.
- Историческая стоимость: записываем вещи по цене, которую заплатили.`,
        uz: `Bu har qanday hisobot amal qiladigan asosiy qoidalar.

- Uzluksizlik: biznes ishlashda davom etadi deb hisoblaymiz.
- Hisoblash: daromadni topganda, xarajatni qilganda yozamiz, pul harakatlanganda emas.
- Biznesning alohidaligi: egasining shaxsiy hayoti biznes hisobiga kirmaydi.
- Izchillik: har safar bir xil usulda qilamiz.
- O'zaro hisob-kitobsiz: siz qarz bo'lgan va sizga qarz bo'lganlarni alohida ko'rsatamiz.
- Tarixiy qiymat: narsalarni to'langan narxda yozamiz.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Financial accounting', ru: 'Финансовый учёт', uz: 'Moliyaviy hisob' },
      definition: {
        en: 'Recording and summarising transactions to produce annual financial statements for people outside the business.',
        ru: 'Запись и обобщение операций для годовой финансовой отчётности для людей вне бизнеса.',
        uz: 'Biznesdan tashqaridagilar uchun yillik moliyaviy hisobot tuzish maqsadida operatsiyalarni yozish va jamlash.',
      },
      example: {
        en: 'Sending your bank a summary of the year\'s results once a year.',
        ru: 'Раз в год отправить банку сводку результатов года.',
        uz: 'Yiliga bir marta bankka yil natijalari xulosasini yuborish.',
      },
    },
    {
      term: { en: 'Management accounting', ru: 'Управленческий учёт', uz: 'Boshqaruv hisobi' },
      definition: {
        en: 'Detailed, frequent reports for the people who run the business, to help them plan and decide.',
        ru: 'Подробные и частые отчёты для руководителей бизнеса, помогающие планировать и принимать решения.',
        uz: 'Biznesni boshqaruvchilar uchun reja tuzish va qaror qabul qilishga yordam beradigan batafsil va tez-tez hisobotlar.',
      },
      example: {
        en: 'Checking every Friday which products sold best, to decide what to reorder.',
        ru: 'Каждую пятницу смотреть, какие товары продавались лучше, чтобы решить, что дозаказать.',
        uz: 'Har juma qaysi tovar yaxshi sotilganini ko\'rib, nimani qayta buyurtma qilishni hal qilish.',
      },
    },
    {
      term: { en: 'Stewardship', ru: 'Управление ресурсами (stewardship)', uz: 'Ishonchli boshqaruv (stewardship)' },
      definition: {
        en: 'How well management has looked after the resources entrusted to it.',
        ru: 'Насколько хорошо руководство распорядилось доверенными ресурсами.',
        uz: 'Rahbariyat ishonib topshirilgan resurslarni qanchalik yaxshi boshqargani.',
      },
      example: {
        en: 'Shareholders give directors $100,000 to run a company. The accounts show how well the directors looked after that money.',
        ru: 'Акционеры дают директорам $100,000 на управление компанией. Отчётность показывает, насколько хорошо директора распорядились этими деньгами.',
        uz: 'Aksiyadorlar direktorlarga kompaniyani boshqarish uchun $100,000 beradi. Hisobot direktorlar bu pulni qanchalik yaxshi asraganini ko\'rsatadi.',
      },
    },
    {
      term: { en: 'Sole trader', ru: 'Индивидуальный предприниматель', uz: 'Yakka tadbirkor' },
      definition: {
        en: 'A business owned by one person, who keeps all the profit and is personally liable for all its debts.',
        ru: 'Бизнес одного владельца, который получает всю прибыль и лично отвечает по всем долгам.',
        uz: 'Bitta odamga tegishli biznes, u butun foydani oladi va barcha qarzlar uchun shaxsan javob beradi.',
      },
      example: {
        en: 'A hairdresser who runs her own salon alone.',
        ru: 'Парикмахер, которая одна держит свой салон.',
        uz: 'O\'z salonini yolg\'iz yurituvchi sartarosh.',
      },
    },
    {
      term: { en: 'Unlimited liability', ru: 'Неограниченная ответственность', uz: 'Cheklanmagan javobgarlik' },
      definition: {
        en: 'The owner must meet business debts from personal assets if needed.',
        ru: 'Владелец при необходимости отвечает по долгам бизнеса личным имуществом.',
        uz: 'Egasi zarur bo\'lsa biznes qarzlarini shaxsiy mol-mulki bilan to\'laydi.',
      },
      example: {
        en: 'A sole trader\'s shop owes $5,000 it cannot pay, so the owner has to sell their own car to pay it.',
        ru: 'Магазин индивидуального предпринимателя должен $5,000 и не может заплатить, поэтому владелец продаёт свою машину.',
        uz: 'Yakka tadbirkor do\'koni $5,000 qarz va to\'lay olmaydi, shuning uchun egasi o\'z mashinasini sotib to\'laydi.',
      },
    },
    {
      term: { en: 'Drawings', ru: 'Изъятия', uz: 'Olib qo\'yishlar' },
      definition: {
        en: 'Cash or goods taken from the business by a sole trader or partner.',
        ru: 'Деньги или товары, взятые из бизнеса предпринимателем или партнёром.',
        uz: 'Tadbirkor yoki sherik biznesdan olgan pul yoki tovar.',
      },
      example: {
        en: 'The owner takes $200 from the till to buy groceries for home.',
        ru: 'Владелец берёт из кассы $200 на продукты для дома.',
        uz: 'Egasi uy uchun oziq-ovqatga kassadan $200 oladi.',
      },
    },
    {
      term: { en: 'Partnership', ru: 'Товарищество', uz: 'Sheriklik' },
      definition: {
        en: 'A business owned by two or more people who share the profits and are each fully liable for its debts.',
        ru: 'Бизнес двух или более владельцев, которые делят прибыль и каждый полностью отвечает по долгам.',
        uz: 'Ikki yoki undan ko\'p odamga tegishli biznes, ular foydani bo\'lishadi va har biri qarzlar uchun to\'liq javob beradi.',
      },
      example: {
        en: 'Two dentists who share one clinic and split its profit 50:50.',
        ru: 'Два стоматолога, которые делят одну клинику и её прибыль пополам.',
        uz: 'Bitta klinikani bo\'lishib, foydani teng taqsimlaydigan ikki stomatolog.',
      },
    },
    {
      term: {
        en: 'Limited liability company',
        ru: 'Компания с ограниченной ответственностью',
        uz: 'Mas\'uliyati cheklangan kompaniya',
      },
      definition: {
        en: 'A business that is a separate legal person, owned by shareholders who can lose only what they invested.',
        ru: 'Бизнес, являющийся отдельным юридическим лицом; акционеры рискуют только вложенным.',
        uz: 'Alohida yuridik shaxs bo\'lgan biznes; aksiyadorlar faqat qo\'yganini yo\'qotishi mumkin.',
      },
      example: {
        en: 'You buy $1,000 of shares in a company that later fails. You lose the $1,000, but nobody can claim your house.',
        ru: 'Вы купили акции компании на $1,000, а она прогорела. Вы теряете $1,000, но ваш дом никто не заберёт.',
        uz: 'Kompaniyaning $1,000 lik aksiyasini oldingiz, keyin u kuydi. $1,000 ni yo\'qotasiz, lekin uyingizga hech kim da\'vo qila olmaydi.',
      },
    },
    {
      term: { en: 'Incorporation', ru: 'Регистрация компании', uz: 'Kompaniya tuzish' },
      definition: {
        en: 'The legal process that creates a company as a separate legal entity.',
        ru: 'Юридическая процедура создания компании как отдельного юридического лица.',
        uz: 'Kompaniyani alohida yuridik shaxs sifatida yaratuvchi huquqiy jarayon.',
      },
      example: {
        en: 'Two friends register their shop as a company, so it becomes a legal person separate from them.',
        ru: 'Два друга регистрируют свой магазин как компанию, и он становится юридическим лицом, отдельным от них.',
        uz: 'Ikki do\'st do\'konini kompaniya sifatida ro\'yxatdan o\'tkazadi va u ulardan alohida yuridik shaxsga aylanadi.',
      },
    },
    {
      term: { en: 'Floating charge', ru: 'Плавающий залог', uz: 'Suzuvchi garov' },
      definition: {
        en: 'Loan security over fluctuating assets that the company can keep using.',
        ru: 'Обеспечение кредита меняющимися активами, которые компания продолжает использовать.',
        uz: 'Kompaniya foydalanishda davom etadigan o\'zgaruvchan aktivlar bilan kredit ta\'minoti.',
      },
      example: {
        en: 'A bank lends $10,000 secured on the shop\'s stock. The shop can keep buying and selling that stock while the loan is unpaid.',
        ru: 'Банк даёт $10,000 под залог товара магазина. Магазин продолжает покупать и продавать этот товар, пока заём не погашен.',
        uz: 'Bank do\'kon tovari garovi ostida $10,000 qarz beradi. Qarz to\'lanmaguncha do\'kon bu tovarni sotib olish va sotishni davom ettiradi.',
      },
    },
    {
      term: { en: 'Conceptual Framework', ru: 'Концептуальная основа', uz: 'Kontseptual asos' },
      definition: {
        en: 'The IASB\'s set of basic ideas behind financial reporting. It guides new standards but is not a standard itself.',
        ru: 'Набор основных идей IASB, лежащих в основе отчётности. Направляет новые стандарты, но сам стандартом не является.',
        uz: 'IASB ning moliyaviy hisobot asosidagi g\'oyalar to\'plami. Yangi standartlarga yo\'l ko\'rsatadi, lekin o\'zi standart emas.',
      },
      example: {
        en: 'No standard covers a new kind of deal, so the accountant uses the Framework\'s definition of an asset to decide.',
        ru: 'Ни один стандарт не описывает новый вид сделки, поэтому бухгалтер решает по определению актива из Концептуальной основы.',
        uz: 'Yangi turdagi bitimni hech bir standart qamramaydi, shuning uchun buxgalter Kontseptual asosdagi aktiv ta\'rifiga qarab hal qiladi.',
      },
    },
    {
      term: { en: 'Prudence', ru: 'Осмотрительность', uz: 'Ehtiyotkorlik' },
      definition: {
        en: 'Being careful when judging under uncertainty, so assets and income are not overstated, without deliberately understating anything.',
        ru: 'Осторожность в суждениях при неопределённости, чтобы не завышать активы и доходы, но и не занижать ничего нарочно.',
        uz: 'Noaniqlikda ehtiyot bo\'lish, aktiv va daromadni oshirib yubormaslik, lekin hech narsani ataylab kamaytirmaslik.',
      },
      example: {
        en: 'Not counting on the full $300 from a customer who has stopped answering calls.',
        ru: 'Не рассчитывать на все $300 от покупателя, который перестал отвечать на звонки.',
        uz: 'Qo\'ng\'iroqlarga javob bermay qo\'ygan mijozdan to\'liq $300 ga umid qilmaslik.',
      },
    },
    {
      term: { en: 'Relevance', ru: 'Уместность', uz: 'Tegishlilik' },
      definition: {
        en: 'Information is relevant if it can change users\' decisions, by helping them predict or confirm.',
        ru: 'Информация уместна, если может изменить решения пользователей, помогая прогнозировать или подтверждать.',
        uz: 'Ma\'lumot foydalanuvchilar qarorini o\'zgartira olsa, bashorat yoki tasdiqlashga yordam bersa, tegishli hisoblanadi.',
      },
      example: {
        en: 'This year\'s sales help an investor guess next year\'s sales.',
        ru: 'Продажи этого года помогают инвестору предположить продажи следующего года.',
        uz: 'Bu yilgi sotuv investorga kelasi yil sotuvini taxmin qilishga yordam beradi.',
      },
    },
    {
      term: { en: 'Materiality', ru: 'Существенность', uz: 'Muhimlik' },
      definition: {
        en: 'Information that could reasonably influence primary users\' decisions if omitted, misstated or obscured.',
        ru: 'Информация, пропуск, искажение или сокрытие которой может обоснованно повлиять на решения основных пользователей.',
        uz: 'Tushirib qoldirilsa, noto\'g\'ri ko\'rsatilsa yoki yashirilsa, asosiy foydalanuvchilar qaroriga asosli ta\'sir qilishi mumkin bo\'lgan axborot.',
      },
      example: {
        en: 'A $2 mistake does not matter to anyone. Leaving out a $3,000 loan does.',
        ru: 'Ошибка в $2 ни на что не влияет. А пропущенный заём в $3,000 — влияет.',
        uz: '$2 xato hech narsaga ta\'sir qilmaydi. Tushirib qoldirilgan $3,000 qarz esa ta\'sir qiladi.',
      },
    },
    {
      term: { en: 'Faithful representation', ru: 'Правдивое представление', uz: 'Haqqoniy aks ettirish' },
      definition: {
        en: 'Information that shows what really happened: complete, neutral and free from material error.',
        ru: 'Информация, показывающая, что произошло на самом деле: полная, нейтральная и без существенных ошибок.',
        uz: 'Haqiqatda nima bo\'lganini ko\'rsatuvchi ma\'lumot: to\'liq, xolis va muhim xatolarsiz.',
      },
      example: {
        en: 'Showing all three bank loans, not only the smallest one.',
        ru: 'Показать все три банковских займа, а не только самый маленький.',
        uz: 'Faqat eng kichigini emas, uchala bank qarzini ham ko\'rsatish.',
      },
    },
    {
      term: { en: 'Substance over form', ru: 'Приоритет содержания над формой', uz: 'Shakldan mazmunning ustunligi' },
      definition: {
        en: 'Recording the economic reality of a transaction, not only its legal form.',
        ru: 'Отражение экономической реальности операции, а не только её юридической формы.',
        uz: 'Operatsiyaning faqat yuridik shaklini emas, iqtisodiy haqiqatini qayd etish.',
      },
      example: {
        en: 'Shares that the company must buy back for cash later are legally shares, but they are shown as a liability, because the money must be paid back.',
        ru: 'Акции, которые компания обязана потом выкупить за деньги, юридически акции, но показываются как обязательство, ведь деньги придётся вернуть.',
        uz: 'Kompaniya keyin pulga qaytarib sotib olishi shart bo\'lgan aksiyalar huquqan aksiya, lekin majburiyat sifatida ko\'rsatiladi, chunki pulni qaytarish kerak.',
      },
    },
    {
      term: { en: 'Asset', ru: 'Актив', uz: 'Aktiv' },
      definition: {
        en: 'A present economic resource controlled by the entity as a result of past events.',
        ru: 'Существующий экономический ресурс, контролируемый организацией в результате прошлых событий.',
        uz: 'O\'tgan voqealar natijasida korxona nazorat qiladigan mavjud iqtisodiy resurs.',
      },
      example: {
        en: 'Cash in the bank, a delivery van, goods on the shelf, money a customer owes you.',
        ru: 'Деньги в банке, фургон для доставки, товар на полке, долг покупателя перед вами.',
        uz: 'Bankdagi pul, yetkazish furgoni, javondagi tovar, mijozning sizga qarzi.',
      },
    },
    {
      term: { en: 'Liability', ru: 'Обязательство', uz: 'Majburiyat' },
      definition: {
        en: 'A present obligation to transfer an economic resource as a result of past events.',
        ru: 'Существующая обязанность передать экономический ресурс в результате прошлых событий.',
        uz: 'O\'tgan voqealar natijasida iqtisodiy resursni berish bo\'yicha mavjud burch.',
      },
      example: {
        en: 'A bank loan, or $1,000 you still owe a supplier for goods.',
        ru: 'Банковский заём или $1,000, которые вы ещё должны поставщику за товар.',
        uz: 'Bank qarzi yoki tovar uchun yetkazib beruvchiga hali qarz bo\'lgan $1,000.',
      },
    },
    {
      term: { en: 'Equity', ru: 'Капитал', uz: 'Kapital' },
      definition: {
        en: 'What is left for the owners: assets minus liabilities.',
        ru: 'То, что остаётся владельцам: активы минус обязательства.',
        uz: 'Egalarga qoladigan qism: aktivlar minus majburiyatlar.',
      },
      example: {
        en: 'Assets $12,000 - liabilities $4,000 = equity $8,000.',
        ru: 'Активы $12,000 - обязательства $4,000 = капитал $8,000.',
        uz: 'Aktivlar $12,000 - majburiyatlar $4,000 = kapital $8,000.',
      },
    },
    {
      term: { en: 'Income', ru: 'Доход', uz: 'Daromad' },
      definition: {
        en: 'Increases in assets or decreases in liabilities that increase equity, other than money put in by the owners.',
        ru: 'Увеличение активов или уменьшение обязательств, увеличивающее капитал, кроме вкладов владельцев.',
        uz: 'Kapitalni oshiradigan aktivlar oshishi yoki majburiyatlar kamayishi, egalar qo\'ygan puldan tashqari.',
      },
      example: {
        en: 'Selling a cake for $10 is income. The owner putting $1,000 into the business is not.',
        ru: 'Продажа торта за $10 — доход. Взнос владельца $1,000 в бизнес — нет.',
        uz: 'Tortni $10 ga sotish daromad. Egasining biznesga $1,000 qo\'yishi esa daromad emas.',
      },
    },
    {
      term: { en: 'Expense', ru: 'Расход', uz: 'Xarajat' },
      definition: {
        en: 'Decreases in assets or increases in liabilities that decrease equity, other than payments to the owners.',
        ru: 'Уменьшение активов или увеличение обязательств, уменьшающее капитал, кроме выплат владельцам.',
        uz: 'Kapitalni kamaytiradigan aktivlar kamayishi yoki majburiyatlar oshishi, egalarga to\'lovlardan tashqari.',
      },
      example: {
        en: 'Paying $500 of rent is an expense. The owner taking $500 for themselves is drawings, not an expense.',
        ru: 'Аренда $500 — расход. А $500, взятые владельцем себе, — изъятие, а не расход.',
        uz: '$500 ijara to\'lash xarajat. Egasining o\'ziga $500 olishi esa olib qo\'yish, xarajat emas.',
      },
    },
    {
      term: { en: 'Other comprehensive income', ru: 'Прочий совокупный доход', uz: 'Boshqa umumlashgan daromad' },
      definition: {
        en: 'Unrealised gains and losses, such as a revaluation surplus.',
        ru: 'Нереализованные прибыли и убытки, например резерв переоценки.',
        uz: 'Amalga oshmagan foyda va zararlar, masalan qayta baholash rezervi.',
      },
      example: {
        en: 'Land bought for $50,000 is revalued to $70,000. The $20,000 gain is other comprehensive income, not profit.',
        ru: 'Земля, купленная за $50,000, переоценена до $70,000. Прирост $20,000 — прочий совокупный доход, а не прибыль.',
        uz: '$50,000 ga olingan yer $70,000 ga qayta baholandi. $20,000 o\'sish — boshqa umumlashgan daromad, foyda emas.',
      },
    },
    {
      term: { en: 'Going concern', ru: 'Непрерывность деятельности', uz: 'Uzluksizlik' },
      definition: {
        en: 'The assumption that the entity will keep operating for the foreseeable future.',
        ru: 'Допущение, что предприятие будет работать в обозримом будущем.',
        uz: 'Korxona yaqin kelajakda ishlashda davom etadi degan faraz.',
      },
      example: {
        en: 'A busy cafe expects to stay open next year, so its oven is shown at cost less depreciation, not at a quick-sale price.',
        ru: 'Загруженное кафе рассчитывает работать и в следующем году, поэтому его печь показана по стоимости минус амортизация, а не по цене срочной продажи.',
        uz: 'Gavjum kafe kelasi yil ham ishlashni kutadi, shuning uchun pechi tez sotish narxida emas, qiymat minus amortizatsiyada ko\'rsatiladi.',
      },
    },
    {
      term: {
        en: 'Business entity concept',
        ru: 'Принцип обособленности бизнеса',
        uz: 'Biznesning alohidaligi tamoyili',
      },
      definition: {
        en: 'The business is accounted for separately from its owner\'s private affairs.',
        ru: 'Учёт бизнеса ведётся отдельно от личных дел владельца.',
        uz: 'Biznes hisobi egasining shaxsiy ishlaridan alohida yuritiladi.',
      },
      example: {
        en: 'The owner\'s family holiday is not a business expense, even if it was paid from the shop\'s bank account.',
        ru: 'Семейный отпуск владельца — не расход бизнеса, даже если оплачен со счёта магазина.',
        uz: 'Egasining oilaviy ta\'tili do\'kon hisobidan to\'langan bo\'lsa ham, biznes xarajati emas.',
      },
    },
    {
      term: { en: 'Accrual accounting', ru: 'Метод начисления', uz: 'Hisoblash usuli' },
      definition: {
        en: 'Recording revenue when earned and expenses when incurred, not when cash moves.',
        ru: 'Отражение выручки, когда она заработана, а расходов, когда они понесены, а не при движении денег.',
        uz: 'Daromadni topilganda, xarajatni qilinganda qayd etish, pul harakatlanganda emas.',
      },
      example: {
        en: 'Electricity used in December but billed in January is a December expense.',
        ru: 'Электричество, потраченное в декабре, но выставленное к оплате в январе, — расход декабря.',
        uz: 'Dekabrda ishlatilgan, lekin yanvarda hisob yuborilgan elektr — dekabr xarajati.',
      },
    },
    {
      term: { en: 'Consistency', ru: 'Последовательность', uz: 'Izchillik' },
      definition: {
        en: 'Treating and presenting similar items in the same way within a period and from one period to the next.',
        ru: 'Одинаковый учёт и представление похожих статей в течение периода и от периода к периоду.',
        uz: 'O\'xshash moddalarni davr ichida va davrdan davrga bir xil hisobga olish va ko\'rsatish.',
      },
      example: {
        en: 'Using the same depreciation method for vans every year.',
        ru: 'Каждый год использовать один и тот же метод амортизации фургонов.',
        uz: 'Har yili furgonlar uchun bir xil amortizatsiya usulini qo\'llash.',
      },
    },
    {
      term: { en: 'Historical cost', ru: 'Историческая стоимость', uz: 'Tarixiy qiymat' },
      definition: {
        en: 'The amount actually paid for an item on the day it was bought.',
        ru: 'Сумма, фактически уплаченная за объект в день покупки.',
        uz: 'Ob\'ekt uchun sotib olingan kuni haqiqatda to\'langan summa.',
      },
      example: {
        en: 'Shelves bought for $3,000 stay at $3,000 in the records, even if they would cost $3,500 today.',
        ru: 'Полки, купленные за $3,000, остаются в учёте по $3,000, даже если сегодня стоили бы $3,500.',
        uz: '$3,000 ga olingan javonlar bugun $3,500 tursa ham, hisobda $3,000 da qoladi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter01;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter01.id] = chapter01;
