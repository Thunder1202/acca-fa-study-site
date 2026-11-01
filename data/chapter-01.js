'use strict';

const chapter01 = {
  id: 'chapter-01',
  titles: {
    en: 'Introduction to financial reporting',
    ru: 'Введение в финансовую отчётность',
    uz: 'Moliyaviy hisobotga kirish',
  },
  objectives: [
    { en: 'Define financial reporting', ru: 'Дать определение финансовой отчётности', uz: 'Moliyaviy hisobotga ta\'rif berish' },
    { en: 'Identify and define the types of business entity', ru: 'Назвать и описать виды предприятий', uz: 'Biznes subyektlari turlarini aniqlash va ta\'riflash' },
    { en: 'Identify users of financial statements and their information needs', ru: 'Назвать пользователей отчётности и их информационные потребности', uz: 'Hisobot foydalanuvchilari va ularning axborot ehtiyojlarini aniqlash' },
    { en: 'Identify the purpose of the main financial statements', ru: 'Объяснить назначение основных финансовых отчётов', uz: 'Asosiy moliyaviy hisobotlarning maqsadini tushuntirish' },
    { en: 'Define the elements of the financial statements', ru: 'Дать определение элементам финансовой отчётности', uz: 'Moliyaviy hisobot elementlariga ta\'rif berish' },
    { en: 'Define and explain accounting concepts and characteristics', ru: 'Объяснить принципы бухгалтерского учёта и качественные характеристики информации', uz: 'Buxgalteriya tamoyillari va axborotning sifat xususiyatlarini tushuntirish' },
  ],
  sections: [
    {
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
        en: `Meet Madina, who has just opened Madina's Mart, a household goods shop in Tashkent. Every evening she checks which products sold best so she can decide what to reorder. That is management accounting. Once a year she prepares a summary of the whole shop's results for her bank. That is financial accounting.`,
        ru: `Познакомьтесь с Мадиной: она только что открыла магазин товаров для дома Madina's Mart в Ташкенте. Каждый вечер она смотрит, какие товары продавались лучше всего, чтобы решить, что заказать снова. Это управленческий учёт. Раз в год она готовит для банка сводку результатов всего магазина. Это финансовый учёт.`,
        uz: `Madina bilan tanishing: u yaqinda Toshkentda Madina's Mart nomli uy-ro'zg'or buyumlari do'konini ochdi. Har kuni kechqurun qaysi mahsulotlar yaxshi sotilganini ko'rib, nimani qayta buyurtma qilishni hal qiladi. Bu boshqaruv hisobi. Yiliga bir marta esa bank uchun butun do'kon natijalarining qisqacha hisobotini tayyorlaydi. Bu moliyaviy hisob.`,
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

All users want information that is relevant and reliable, so they can assess how well management has looked after resources and decide whether to invest or provide more.`,
        ru: `Каждая группа пользователей (заинтересованных сторон) читает отчётность по своей причине:

- Инвесторы и потенциальные инвесторы: прибыль, доходность и надёжность вложений. Крупнейшая группа — институциональные инвесторы, например пенсионные фонды.
- Работники и профсоюзы: надёжность занятости, повышение зарплаты, вознаграждение высшего руководства и прибыльность подразделений, если есть риск закрытия.
- Кредиторы: будет ли возвращён заём? Они смотрят на платёжеспособность и стоимость активов, переданных в залог.
- Государственные органы: как развивается экономика. Налоговые органы используют отчётность для начисления налога.
- Поставщики: заплатят ли им? Новые поставщики хотят убедиться в надёжности до начала поставок.
- Покупатели: сможет ли бизнес продолжать поставки, особенно если они зависят от специальных товаров?
- Общественность: влияние на экономику, окружающую среду и местное сообщество.

Руководство и конкуренты также используют отчётность. Руководство опирается в основном на данные управленческого учёта, поэтому ему нужна самая подробная информация.

Всем пользователям нужна уместная и надёжная информация, чтобы оценить, как руководство распорядилось ресурсами, и решить, стоит ли вкладывать или предоставлять новые средства.`,
        uz: `Har bir foydalanuvchi guruhi (manfaatdor tomonlar) hisobotni o'z sababi bilan o'qiydi:

- Investorlar va potensial investorlar: foyda, daromadlilik va sarmoya xavfsizligi. Eng yirik guruh — pensiya jamg'armalari kabi institutsional investorlar.
- Xodimlar va kasaba uyushmalari: ish joyi barqarorligi, oylik oshishi, yuqori rahbariyat maoshi va yopilish xavfi bo'lsa bo'linmalar foydaliligi.
- Kreditorlar: qarz qaytariladimi? Ular to'lov qobiliyati va garovga qo'yilgan aktivlar qiymatiga qaraydi.
- Davlat idoralari: iqtisodiyot qanday rivojlanayotgani. Soliq organlari hisobotdan soliqni aniqlashda foydalanadi.
- Yetkazib beruvchilar: ularga to'lanadimi? Yangi yetkazib beruvchilar ishlashdan oldin ishonch hosil qilishni xohlaydi.
- Xaridorlar: biznes yetkazib berishni davom ettira oladimi, ayniqsa ular maxsus tovarlarga bog'liq bo'lsa?
- Jamoatchilik: iqtisodiyot, atrof-muhit va mahalliy jamiyatga ta'sir.

Rahbariyat va raqobatchilar ham hisobotdan foydalanadi. Rahbariyat asosan boshqaruv hisobi ma'lumotlariga tayanadi, shuning uchun unga eng batafsil axborot kerak.

Barcha foydalanuvchilarga rahbariyat resurslarni qanday boshqarganini baholash va sarmoya kiritish yoki yangi mablag' berish haqida qaror qilish uchun tegishli va ishonchli axborot kerak.`,
      },
      example: {
        en: `Madina's bank wants to know the shop can repay its loan. Her main supplier checks she can pay on credit. Her shop assistant wonders whether the job is secure. The tax office wants to assess tax on her profit. One set of numbers, four very different questions.`,
        ru: `Банк Мадины хочет знать, сможет ли магазин вернуть кредит. Главный поставщик проверяет, сможет ли она платить в рассрочку. Продавец думает, надёжно ли его рабочее место. Налоговая хочет рассчитать налог с её прибыли. Одни и те же цифры, но четыре совершенно разных вопроса.`,
        uz: `Madinaning banki do'kon kreditni qaytara olishini bilmoqchi. Asosiy yetkazib beruvchi u nasiyaga to'lay olishini tekshiradi. Sotuvchi ish joyi barqarormi, deb o'ylaydi. Soliq idorasi uning foydasidan soliqni hisoblamoqchi. Raqamlar bitta, lekin savollar to'rt xil.`,
      },
    },
    {
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
      heading: {
        en: 'Types of business entity',
        ru: 'Виды предприятий',
        uz: 'Biznes subyektlari turlari',
      },
      body: {
        en: `A sole trader is owned and run by one person, who may employ any number of staff. In law, the owner and the business are the same, so the owner keeps all profits but has unlimited liability for losses and debts, even from personal assets such as a house. The capital account rises with new capital and profits, and falls with drawings and losses. Advantages are flexibility and independence. Sole traders are usually small because they rely on the owner's own resources.

A partnership has at least two owners who share all profits and have unlimited liability. Partners are jointly and severally liable, meaning each is fully liable for all business debts. Each partner has a capital account, normally a fixed amount that changes only when a partner joins or leaves, and a current account holding their profit share less drawings. Advantages are more capital, skills and ideas, lower administrative costs through economies of scale, and partners who can cover for each other.

A limited liability company is a separate legal entity from its owners, created by incorporation. Shareholders invest in return for a share of residual assets. They can lose their investment, but they are not personally liable for company debts, and a shareholder's death or insolvency does not affect the company. Directors elected by the shareholders manage it. Shareholders cannot take drawings. They receive dividends paid from accumulated profits.

Because a company is a separate legal person: it owns its own property; shares can usually be transferred without other shareholders' consent; it can sue and be sued in its own name; it can raise loans more easily, including with a floating charge (security over fluctuating assets such as inventory, which the company can keep using); and it is taxed separately from its shareholders, while sole traders and partners pay income tax personally on their profit share.

Disadvantages of incorporation: registration and legal costs; annual financial statements must be filed and usually audited, which can be expensive; accounts are open to public inspection; strict rules apply to introducing and withdrawing capital and profits; and members cannot join in management unless they are also directors.`,
        ru: `Индивидуальный предприниматель (sole trader) — владелец, который сам ведёт бизнес и может нанимать сколько угодно работников. По закону владелец и бизнес — одно лицо, поэтому он получает всю прибыль, но несёт неограниченную ответственность (unlimited liability) за убытки и долги, даже личным имуществом, например домом. Счёт капитала растёт за счёт новых вложений и прибыли и уменьшается из-за изъятий (drawings) и убытков. Преимущества — гибкость и независимость. Такие предприятия обычно небольшие, так как зависят от ресурсов владельца.

Партнёрство (partnership) имеет минимум двух владельцев, которые делят всю прибыль и несут неограниченную ответственность. Партнёры отвечают солидарно (jointly and severally), то есть каждый полностью отвечает за все долги бизнеса. У каждого партнёра есть счёт капитала — обычно фиксированная сумма, меняющаяся только при входе или выходе партнёра, и текущий счёт (current account), где отражаются его доля прибыли за вычетом изъятий. Преимущества — больше капитала, навыков и идей, более низкие административные расходы за счёт экономии от масштаба и возможность подменять друг друга.

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
        en: `Madina's Mart starts as a sole trader business. If the shop cannot pay a $5,000 debt, Madina may have to sell her own car. If she later brings in her cousin Jasur as a partner, each of them could be pursued for all of the shop's debts. If they incorporate as Madina's Mart LLC, their risk is limited to what they invested, but they take on filing and audit costs and their accounts become public.`,
        ru: `Madina's Mart начинается как бизнес индивидуального предпринимателя. Если магазин не сможет выплатить долг в $5,000, Мадине, возможно, придётся продать личный автомобиль. Если позже она примет в партнёры двоюродного брата Жасура, с каждого из них можно будет требовать все долги магазина. Если они зарегистрируют Madina's Mart LLC, риск ограничится их вложениями, но появятся расходы на подачу отчётности и аудит, а отчётность станет публичной.`,
        uz: `Madina's Mart yakka tartibdagi tadbirkorlik sifatida boshlanadi. Agar do'kon $5,000 qarzni to'lay olmasa, Madina shaxsiy mashinasini sotishiga to'g'ri kelishi mumkin. Keyinroq amakivachchasi Jasurni sherik qilib olsa, ikkalasidan ham do'konning barcha qarzlari talab qilinishi mumkin. Agar ular Madina's Mart LLC ni ro'yxatdan o'tkazsa, xavf faqat kiritgan mablag'i bilan cheklanadi, ammo hisobot topshirish va audit xarajatlari paydo bo'ladi va hisobotlari ochiq bo'ladi.`,
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
      heading: {
        en: 'The Conceptual Framework',
        ru: 'Концептуальные основы',
        uz: 'Konseptual asoslar',
      },
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
        en: `A customer owes Madina's Mart $300 but has stopped answering calls. Prudence means Madina should not simply assume the full $300 will arrive. Prudence does not allow her to invent extra losses either, because deliberately understating profit would be bias.`,
        ru: `Покупатель должен Madina's Mart $300, но перестал отвечать на звонки. Осмотрительность означает, что Мадина не должна просто считать, что все $300 поступят. Но и придумывать лишние убытки она не может: намеренное занижение прибыли было бы предвзятостью.`,
        uz: `Xaridor Madina's Mart ga $300 qarzdor, lekin qo'ng'iroqlarga javob bermay qo'ydi. Ehtiyotkorlik Madina $300 ning hammasi keladi deb oddiygina hisoblamasligi kerakligini bildiradi. Lekin u ortiqcha zararlarni ham o'ylab topa olmaydi, chunki foydani ataylab kamaytirish xolislikka zid.`,
      },
    },
    {
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
        en: `A $2 mistake in Madina's stationery costs changes nobody's decision, so it is not material. Failing to mention a $6,000 bank loan would change her supplier's decision, so that is material. She also rents her fridge unit on a long agreement that gives her full use of it. Substance over form asks what the deal really is in economic terms, not just what the paper calls it.`,
        ru: `Ошибка в $2 в расходах Мадины на канцелярию ничьего решения не изменит, поэтому она несущественна. А если не указать банковский кредит в $6,000, решение поставщика изменится, значит, это существенно. Мадина также арендует холодильное оборудование по длительному договору с полным правом пользования. Приоритет содержания спрашивает, чем эта сделка является экономически, а не только как она названа в документе.`,
        uz: `Madinaning kantselyariya xarajatidagi $2 xato hech kimning qarorini o'zgartirmaydi, shuning uchun u muhim emas. $6,000 bank kreditini ko'rsatmaslik esa yetkazib beruvchi qarorini o'zgartiradi, demak bu muhim. Madina muzlatkich uskunasini ham undan to'liq foydalanish huquqi bilan uzoq muddatli shartnoma asosida ijaraga olgan. Mazmun ustunligi hujjatda nima deb yozilganini emas, bitim iqtisodiy jihatdan nima ekanini so'raydi.`,
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
        en: `Madina can count her cash drawer, which is direct verification. She can recalculate her year-end stock value from the supplier prices, which is indirect verification. If her bank asks for results and she delivers them nine months late, the figures may be accurate but they have lost their timeliness.`,
        ru: `Мадина может пересчитать деньги в кассе — это прямая проверка. Она может заново рассчитать стоимость запасов на конец года по ценам поставщиков — это косвенная проверка. Если банк запросит результаты, а она предоставит их на девять месяцев позже, цифры могут быть точными, но своевременность потеряна.`,
        uz: `Madina kassadagi pulni sanashi mumkin, bu to'g'ridan-to'g'ri tekshirish. U yil oxiridagi tovar zaxirasi qiymatini yetkazib beruvchi narxlari bo'yicha qayta hisoblashi mumkin, bu bilvosita tekshirish. Agar bank natijalarni so'rasa-yu, u ularni to'qqiz oy kechikib bersa, raqamlar aniq bo'lsa ham, o'z vaqtidalik yo'qolgan bo'ladi.`,
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
- Оборотные и краткосрочные: до 12 месяцев с отчётной даты. Иначе — долгосрочные.`,
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
        en: `On day one Madina invests $8,000 of her own money and borrows $3,000 from the bank, repayable in two years. She buys shelves for $3,000, and $5,500 of stock with $1,000 of that on credit.

Assets: shelves $3,000 (non-current), stock $5,500 and cash $3,500 (current), total $12,000.

Liabilities: bank loan $3,000 (non-current), supplier $1,000 (current).

Equity: Madina's capital $8,000.

Check: $12,000 assets = $8,000 equity + $4,000 liabilities.`,
        ru: `В первый день Мадина вкладывает $8,000 собственных денег и берёт в банке $3,000 на два года. Она покупает полки за $3,000 и товар на $5,500, из которых $1,000 в кредит у поставщика.

Активы: полки $3,000 (внеоборотные), товар $5,500 и деньги $3,500 (оборотные), всего $12,000.

Обязательства: банковский кредит $3,000 (долгосрочное), поставщик $1,000 (краткосрочное).

Капитал: капитал Мадины $8,000.

Проверка: активы $12,000 = капитал $8,000 + обязательства $4,000.`,
        uz: `Birinchi kuni Madina o'zining $8,000 pulini kiritadi va bankdan ikki yilga $3,000 oladi. U $3,000 ga javonlar va $5,500 ga tovar sotib oladi, shundan $1,000 yetkazib beruvchiga nasiya.

Aktivlar: javonlar $3,000 (uzoq muddatli), tovar $5,500 va pul $3,500 (joriy), jami $12,000.

Majburiyatlar: bank krediti $3,000 (uzoq muddatli), yetkazib beruvchi $1,000 (joriy).

Kapital: Madinaning kapitali $8,000.

Tekshirish: aktivlar $12,000 = kapital $8,000 + majburiyatlar $4,000.`,
      },
    },
    {
      key: {
        en: `- Five parts: financial position, profit or loss, changes in equity, cash flows, notes.
- Financial position is one date. Profit or loss covers a period.
- Changes in equity applies only to companies. Cash flows is normally companies too.
- Other comprehensive income: unrealised gains, such as a revaluation surplus.
- IFRS 18 subtotals: operating profit, profit before financing and taxes, profit for the year.`,
        ru: `- Пять частей: финансовое положение, прибыль или убыток, изменения капитала, движение денег, примечания.
- Финансовое положение — на одну дату. Прибыль или убыток — за период.
- Изменения капитала — только компании. Движение денег обычно тоже.
- Прочий совокупный доход: нереализованные прибыли, например резерв переоценки.
- Итоги IFRS 18: операционная прибыль, прибыль до финансирования и налогов, прибыль за год.`,
        uz: `- Besh qism: moliyaviy holat, foyda yoki zarar, kapital o'zgarishi, pul oqimlari, izohlar.
- Moliyaviy holat bir sana uchun. Foyda yoki zarar butun davr uchun.
- Kapital o'zgarishi faqat kompaniyalarda. Pul oqimlari ham odatda shunday.
- Boshqa umumlashgan daromad: amalga oshmagan foyda, masalan qayta baholash zaxirasi.
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
- Kapitaldagi o'zgarishlar to'g'risidagi hisobot (statement of changes in equity): aksiya kapitali, emissiya daromadi, qayta baholash zaxirasi va taqsimlanmagan foyda harakati. Faqat mas'uliyati cheklangan kompaniyalarga tegishli.
- Pul oqimlari to'g'risidagi hisobot (statement of cash flows): davrda to'langan va olingan pul, odatda faqat mas'uliyati cheklangan kompaniyalar uchun.
- Izohlar (notes): hisob siyosati va foydalanuvchilarga asosli xulosa chiqarishga yordam beradigan boshqa ma'lumotlar.

Xarajatlar funksiyasi (sotilgan tovar tannarxi, tarqatish xarajatlari, ma'muriy xarajatlar) yoki tabiati (materiallar, xodimlar xarajati, amortizatsiya) bo'yicha tasniflanishi mumkin. Tanlov izchil qo'llanishi kerak.

IFRS 18 uchta oraliq yakunni talab qiladi: operatsion foyda, moliyalashtirish va foyda solig'igacha bo'lgan foyda, yillik foyda.

Boshqa umumlashgan daromad amalga oshmagan foyda va zararlarni o'z ichiga oladi. FA dagi asosiy misol — yer va binolarni qayta baholash zaxirasi. Foyda va boshqa umumlashgan daromad birgalikda jami umumlashgan daromadni beradi. Ikkalasi ham moliyaviy holat hisobotiga va kapitaldagi o'zgarishlar hisobotiga o'tadi.`,
      },
      example: {
        en: `In its first year Madina's Mart sells goods for $40,000 that cost $26,000, and pays $9,000 of expenses. Gross profit is $14,000 and profit for the year is $5,000. As a sole trader she adds that $5,000 to her capital account. She has no statement of changes in equity, because that statement is only for limited companies.`,
        ru: `За первый год Madina's Mart продаёт товары на $40,000 при себестоимости $26,000 и платит $9,000 расходов. Валовая прибыль составляет $14,000, прибыль за год — $5,000. Как индивидуальный предприниматель, Мадина прибавляет эти $5,000 к счёту капитала. Отчёта об изменениях в капитале у неё нет: он только для компаний с ограниченной ответственностью.`,
        uz: `Birinchi yilda Madina's Mart tannarxi $26,000 bo'lgan tovarlarni $40,000 ga sotadi va $9,000 xarajat qiladi. Yalpi foyda $14,000, yillik foyda $5,000. Yakka tartibdagi tadbirkor sifatida u shu $5,000 ni kapital hisobiga qo'shadi. Unda kapitaldagi o'zgarishlar hisoboti yo'q, chunki u faqat mas'uliyati cheklangan kompaniyalar uchun.`,
      },
    },
    {
      key: {
        en: `- Going concern: expected to keep operating. Expected, never guaranteed.
- Accruals: record when earned or incurred, not when cash moves.
- Business entity: keep the owner's private affairs out of the accounts.
- Consistency: same treatment within a period and between periods.
- Offsetting is not allowed. Duality: every transaction has two effects.
- Historical cost: the original amount. Rising prices understate assets and overstate profit.`,
        ru: `- Непрерывность: ожидается, что бизнес продолжит работу. Ожидается, но не гарантируется.
- Начисление: отражать при получении дохода или возникновении расхода, а не при движении денег.
- Обособленность: личные дела владельца не входят в учёт.
- Последовательность: одинаковый учёт внутри периода и между периодами.
- Взаимозачёт запрещён. Двойственность: у каждой операции два эффекта.
- Первоначальная стоимость: исходная сумма. Рост цен занижает активы и завышает прибыль.`,
        uz: `- Uzluksizlik: biznes davom etishi kutiladi. Kutiladi, lekin kafolatlanmaydi.
- Hisoblash: pul harakatlanganda emas, daromad topilganda yoki xarajat qilinganda qayd etish.
- Alohidalik: egasining shaxsiy ishlari hisobga kirmaydi.
- Izchillik: davr ichida va davrlar orasida bir xil yuritish.
- O'zaro hisobga olish taqiqlangan. Ikki yoqlamalik: har operatsiyada ikki ta'sir bor.
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
        en: `Business entity: Madina pays her home electricity from the shop till. That is drawings, not a shop expense.

Accruals: she sells goods to a local cafe in June and is paid in July, so the sale belongs in June.

Offsetting: the cafe also supplies her lunches and she owes it $40, while it owes her $200. She shows both, not a net $160.

Duality: she buys a laptop by debit card, so she gains an asset and her bank balance falls.

Historical cost: the shelves stay at the $3,000 she paid, even if similar shelves now cost more.`,
        ru: `Обособленность: Мадина оплачивает домашнее электричество из кассы магазина. Это изъятие, а не расход магазина.

Начисление: она продаёт товар местному кафе в июне, а деньги получает в июле, поэтому продажа относится к июню.

Взаимозачёт: кафе также поставляет ей обеды, и она должна ему $40, а оно ей $200. Она показывает обе суммы, а не чистые $160.

Двойственность: она покупает ноутбук по дебетовой карте, поэтому появляется актив и уменьшается остаток в банке.

Первоначальная стоимость: полки остаются по уплаченным $3,000, даже если сейчас такие стоят дороже.`,
        uz: `Alohidalik: Madina uyining elektr to'lovini do'kon kassasidan to'laydi. Bu do'kon xarajati emas, olib qo'yish.

Hisoblash: u mahalliy kafega iyunda tovar sotadi, pulni iyulda oladi, demak sotuv iyunga tegishli.

O'zaro hisobga olish: kafe unga tushlik ham yetkazib beradi va u kafega $40 qarzdor, kafe esa unga $200 qarzdor. U sof $160 emas, ikkala summani ko'rsatadi.

Ikki yoqlamalik: u debet karta bilan noutbuk sotib oladi, shunda aktiv paydo bo'ladi va bankdagi qoldiq kamayadi.

Tarixiy qiymat: javonlar u to'lagan $3,000 da qoladi, hatto hozir shunaqasi qimmatroq bo'lsa ham.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Stewardship', ru: 'Управление ресурсами (stewardship)', uz: 'Ishonchli boshqaruv (stewardship)' }, definition: { en: 'How well management has looked after the resources entrusted to it.', ru: 'Насколько хорошо руководство распорядилось доверенными ресурсами.', uz: 'Rahbariyat ishonib topshirilgan resurslarni qanchalik yaxshi boshqargani.' } },
    { term: { en: 'Unlimited liability', ru: 'Неограниченная ответственность', uz: 'Cheklanmagan javobgarlik' }, definition: { en: 'The owner must meet business debts from personal assets if needed.', ru: 'Владелец при необходимости отвечает по долгам бизнеса личным имуществом.', uz: 'Egasi zarur bo\'lsa biznes qarzlarini shaxsiy mol-mulki bilan to\'laydi.' } },
    { term: { en: 'Drawings', ru: 'Изъятия', uz: 'Olib qo\'yishlar' }, definition: { en: 'Cash or goods taken from the business by a sole trader or partner.', ru: 'Деньги или товары, взятые из бизнеса предпринимателем или партнёром.', uz: 'Tadbirkor yoki sherik biznesdan olgan pul yoki tovar.' } },
    { term: { en: 'Incorporation', ru: 'Регистрация компании', uz: 'Kompaniya tuzish' }, definition: { en: 'The legal process that creates a company as a separate legal entity.', ru: 'Юридическая процедура создания компании как отдельного юридического лица.', uz: 'Kompaniyani alohida yuridik shaxs sifatida yaratuvchi huquqiy jarayon.' } },
    { term: { en: 'Floating charge', ru: 'Плавающий залог', uz: 'Suzuvchi garov' }, definition: { en: 'Loan security over fluctuating assets that the company can keep using.', ru: 'Обеспечение кредита меняющимися активами, которые компания продолжает использовать.', uz: 'Kompaniya foydalanishda davom etadigan o\'zgaruvchan aktivlar bilan kredit ta\'minoti.' } },
    { term: { en: 'Materiality', ru: 'Существенность', uz: 'Muhimlik' }, definition: { en: 'Information that could reasonably influence primary users\' decisions if omitted, misstated or obscured.', ru: 'Информация, пропуск, искажение или сокрытие которой может обоснованно повлиять на решения основных пользователей.', uz: 'Tushirib qoldirilsa, noto\'g\'ri ko\'rsatilsa yoki yashirilsa, asosiy foydalanuvchilar qaroriga asosli ta\'sir qilishi mumkin bo\'lgan axborot.' } },
    { term: { en: 'Substance over form', ru: 'Приоритет содержания над формой', uz: 'Shakldan mazmunning ustunligi' }, definition: { en: 'Recording the economic reality of a transaction, not only its legal form.', ru: 'Отражение экономической реальности операции, а не только её юридической формы.', uz: 'Operatsiyaning faqat yuridik shaklini emas, iqtisodiy haqiqatini qayd etish.' } },
    { term: { en: 'Going concern', ru: 'Непрерывность деятельности', uz: 'Uzluksizlik' }, definition: { en: 'The assumption that the entity will keep operating for the foreseeable future.', ru: 'Допущение, что предприятие будет работать в обозримом будущем.', uz: 'Korxona yaqin kelajakda ishlashda davom etadi degan faraz.' } },
    { term: { en: 'Accrual accounting', ru: 'Метод начисления', uz: 'Hisoblash usuli' }, definition: { en: 'Recording revenue when earned and expenses when incurred, not when cash moves.', ru: 'Отражение выручки при её получении и расходов при их возникновении, а не при движении денег.', uz: 'Daromadni topilganda, xarajatni qilinganda qayd etish, pul harakatlanganda emas.' } },
    { term: { en: 'Other comprehensive income', ru: 'Прочий совокупный доход', uz: 'Boshqa umumlashgan daromad' }, definition: { en: 'Unrealised gains and losses, such as a revaluation surplus.', ru: 'Нереализованные прибыли и убытки, например резерв переоценки.', uz: 'Amalga oshmagan foyda va zararlar, masalan qayta baholash zaxirasi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter01;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter01.id] = chapter01;
