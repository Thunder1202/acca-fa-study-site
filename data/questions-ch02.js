'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-02';
  const questions = [
    {
      id: 'ch02-q47',
      kitRef: 47,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Which statement is true?',
      explanation: {
        en: `Check each statement against who owns and who runs each type of business.
- Directors personally liable for the company's losses: false. The company is a separate person, so its losses are its own.
- A sole trader owned by shareholders: false. One person owns it, there are no shares.
- Partners liable only in proportion to profit share: false. Each partner is liable for ALL the debts.
- Directors run a company on behalf of its members: true. Members (shareholders) own it, directors run it.
= Answer: directors run a company on behalf of its members`,
        ru: `Сверьте каждое утверждение с тем, кто владеет и кто управляет каждым видом бизнеса.
- Директора лично отвечают за убытки компании: неверно. Компания — отдельное лицо, её убытки — её собственные.
- Индивидуальным предпринимателем владеют акционеры: неверно. Владелец один, акций нет.
- Партнёры отвечают пропорционально доле прибыли: неверно. Каждый партнёр отвечает по ВСЕМ долгам.
- Директора управляют компанией от имени её членов: верно. Члены (акционеры) владеют, директора управляют.
= Ответ: директора управляют компанией от имени её членов`,
        uz: `Har bir fikrni har bir biznes turida kim egalik qilishi va kim boshqarishi bilan solishtiring.
- Direktorlar kompaniya zararlari uchun shaxsan javobgar: noto'g'ri. Kompaniya alohida shaxs, zararlari o'ziniki.
- Yakka tadbirkorga aksiyadorlar egalik qiladi: noto'g'ri. Egasi bitta, aksiya yo'q.
- Sheriklar foyda ulushiga mutanosib javob beradi: noto'g'ri. Har bir sherik BARCHA qarzlar uchun javob beradi.
- Direktorlar kompaniyani a'zolari nomidan boshqaradi: to'g'ri. A'zolar (aksiyadorlar) egalik qiladi, direktorlar boshqaradi.
= Javob: direktorlar kompaniyani a'zolari nomidan boshqaradi`,
      },
      options: [
        'Directors are personally liable for a company\'s losses',
        'A sole trader business is owned by shareholders',
        'Partners are liable for losses only in proportion to their profit share',
        'Directors run a company on behalf of its members',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch02-q48',
      kitRef: 48,
      topicId: 'chapter-02',
      type: 'single',
      text: 'What could encourage executive directors to act in the company\'s best interests?',
      explanation: {
        en: `The question is how to make directors want the same thing as the company. The answer is to pay them more only when the company does well.
- Attending the AGM: does not change what they want.
- A bonus linked to performance: they earn more only if the company does well. This lines up their interests with the company's.
- A large leaving payment: earned whether they did well or not.
- A high fixed salary: also paid regardless of results.
= Answer: bonuses linked to individual and company performance`,
        ru: `Вопрос: как сделать так, чтобы директора хотели того же, что и компания? Платить им больше, только когда у компании всё хорошо.
- Посещение годового собрания: не меняет их интересов.
- Бонус, привязанный к результатам: они зарабатывают больше, только если компания успешна. Интересы совпадают.
- Крупная выплата при уходе: её получают при любых результатах.
- Высокий фиксированный оклад: тоже платят при любых результатах.
= Ответ: бонусы, привязанные к личным результатам и результатам компании`,
        uz: `Savol: direktorlar kompaniya bilan bir narsani xohlashi uchun nima qilish kerak? Kompaniya yaxshi ishlagandagina ularga ko'proq to'lash.
- Yillik yig'ilishga qatnashish: ularning manfaatini o'zgartirmaydi.
- Natijaga bog'liq bonus: kompaniya muvaffaqiyatli bo'lgandagina ko'proq oladi. Manfaatlar mos keladi.
- Ketishda katta to'lov: natijadan qat'i nazar olinadi.
- Yuqori qat'iy maosh: bu ham natijadan qat'i nazar to'lanadi.
= Javob: shaxsiy va kompaniya natijalariga bog'liq bonuslar`,
      },
      options: [
        'Attending Annual General Meetings',
        'Bonuses linked to individual and company performance',
        'A large payment on resignation',
        'A high fixed salary',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch02-q49',
      kitRef: 49,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Statement 1: The IFRS Advisory Council gives advice to the Board or the trustees. Statement 2: It gives the Board advice on agenda decisions. Which is correct?',
      explanation: {
        en: `The IFRS Advisory Council is the formal advisory body. Its whole job is giving advice.
- Statement 1: it advises the Board or the trustees. True.
- Statement 2: it advises the Board on agenda decisions. True.
= Answer: both statements`,
        ru: `Консультативный совет МСФО — официальный консультативный орган. Вся его работа — давать советы.
- Утверждение 1: он советует Совету или попечителям. Верно.
- Утверждение 2: он советует Совету по вопросам повестки. Верно.
= Ответ: оба утверждения`,
        uz: `MSFO Maslahat kengashi — rasmiy maslahat organi. Uning butun ishi maslahat berish.
- 1-fikr: u Kengash yoki vasiylarga maslahat beradi. To'g'ri.
- 2-fikr: u Kengashga kun tartibi qarorlari bo'yicha maslahat beradi. To'g'ri.
= Javob: ikkala fikr`,
      },
      options: ['Statement 1 only', 'Statement 2 only', 'Neither statement', 'Both statements'],
      correctIndex: 3,
    },
    {
      id: 'ch02-q50',
      kitRef: 50,
      topicId: 'chapter-02',
      type: 'matrix',
      text: 'Mark each statement as true or false.',
      explanation: {
        en: `Think about who the IASB is: an international body with no power to make law in any country.
- Standards apply only if a national body adopts them: TRUE. Until a country adopts them, nobody there has to follow them.
- Standards give guidance on every type of transaction: FALSE. No set of rules can cover everything, which is one reason the Conceptual Framework exists.`,
        ru: `Подумайте, что такое IASB: международный орган без права издавать законы в какой-либо стране.
- Стандарты действуют, только если их принял национальный орган: ВЕРНО. Пока страна их не приняла, никто там не обязан им следовать.
- Стандарты охватывают все виды операций: НЕВЕРНО. Никакие правила не охватывают всё, отчасти поэтому и существует Концептуальная основа.`,
        uz: `IASB kimligini o'ylang: hech bir mamlakatda qonun chiqarish huquqi yo'q xalqaro organ.
- Standartlar faqat milliy organ qabul qilsa amal qiladi: TO'G'RI. Mamlakat qabul qilmaguncha u yerda hech kim ularga amal qilishi shart emas.
- Standartlar har qanday operatsiyani qamraydi: NOTO'G'RI. Hech qanday qoidalar hamma narsani qamramaydi, Kontseptual asos qisman shuning uchun bor.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'IFRS Accounting Standards take effect in a country only if a national body adopts them',
          correctIndex: 0,
        },
        { text: 'IFRS Accounting Standards give guidance on every type of transaction', correctIndex: 1 },
      ],
    },
    {
      id: 'ch02-q51',
      kitRef: 51,
      topicId: 'chapter-02',
      type: 'single',
      text: 'What is the most obvious way of achieving public oversight of corporate governance?',
      explanation: {
        en: `"Public oversight" means the whole public can see how the company is run. So look for the route that reaches everyone.
- A company website: the company chooses what to show.
- Press announcements: also chosen by the company, and only about selected events.
- The annual report and accounts: published for everyone, with the governance information required by law.
- The AGM: only shareholders can attend.
= Answer: publication of the annual report and accounts`,
        ru: `«Публичный надзор» — вся общественность может видеть, как управляется компания. Ищите путь, который доходит до всех.
- Сайт компании: компания сама решает, что показать.
- Пресс-релизы: тоже выбирает компания, и только про отдельные события.
- Годовой отчёт и отчётность: публикуются для всех, с обязательной по закону информацией об управлении.
- Годовое собрание: туда приходят только акционеры.
= Ответ: публикация годового отчёта и отчётности`,
        uz: `«Ommaviy nazorat» — butun jamoatchilik kompaniya qanday boshqarilayotganini ko'ra oladi. Hammaga yetib boradigan yo'lni qidiring.
- Kompaniya sayti: nimani ko'rsatishni kompaniya o'zi tanlaydi.
- Press-relizlar: buni ham kompaniya tanlaydi va faqat ayrim voqealar haqida.
- Yillik hisobot va moliyaviy hisobot: qonun talab qilgan boshqaruv ma'lumotlari bilan hamma uchun e'lon qilinadi.
- Yillik yig'ilish: unga faqat aksiyadorlar keladi.
= Javob: yillik hisobot va moliyaviy hisobotni e'lon qilish`,
      },
      options: [
        'A comprehensive company website',
        'Press announcements of major developments',
        'Publication of the annual report and accounts',
        'Shareholder access to the Annual General Meeting',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch02-q52',
      kitRef: 52,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Which body issues IFRS Accounting Standards?',
      explanation: {
        en: `Remember who does what: the Board sets standards, the Interpretations Committee interprets them, the Advisory Council advises.
- The European Union: adopts IFRS for its countries, but does not write them.
- The IASB: writes and issues them.
- The Advisory Council: advises, does not issue.
- The Interpretations Committee: issues interpretations, not standards.
= Answer: the International Accounting Standards Board`,
        ru: `Помните, кто что делает: Совет устанавливает стандарты, Комитет по интерпретациям их толкует, Консультативный совет советует.
- Европейский союз: принимает МСФО для своих стран, но не пишет их.
- IASB: пишет и выпускает их.
- Консультативный совет: советует, не выпускает.
- Комитет по интерпретациям: выпускает интерпретации, а не стандарты.
= Ответ: Совет по международным стандартам финансовой отчётности (IASB)`,
        uz: `Kim nima qilishini eslang: Kengash standart belgilaydi, Talqin qo'mitasi talqin qiladi, Maslahat kengashi maslahat beradi.
- Yevropa Ittifoqi: MSFOni o'z mamlakatlari uchun qabul qiladi, lekin yozmaydi.
- IASB: ularni yozadi va chiqaradi.
- Maslahat kengashi: maslahat beradi, chiqarmaydi.
- Talqin qo'mitasi: standart emas, talqin chiqaradi.
= Javob: Xalqaro buxgalteriya standartlari kengashi (IASB)`,
      },
      options: [
        'The European Union',
        'The International Accounting Standards Board',
        'The IFRS Advisory Council',
        'The IFRS Interpretations Committee',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch02-q53',
      kitRef: 53,
      topicId: 'chapter-02',
      type: 'matrix',
      text: 'Mark each statement about the IASB\'s Conceptual Framework as true or false.',
      explanation: {
        en: `The Conceptual Framework is the "rule behind the rules": a guide, not a standard.
- It is a financial reporting standard: FALSE. It is not a standard, and it does not override one.
- It helps develop standards on consistent concepts: TRUE.
- It helps preparers choose policies when no standard applies: TRUE.
- It helps everyone understand and interpret standards: TRUE.`,
        ru: `Концептуальная основа — «правило за правилами»: руководство, а не стандарт.
- Это стандарт отчётности: НЕВЕРНО. Это не стандарт, и он не отменяет стандарты.
- Помогает разрабатывать стандарты на единых принципах: ВЕРНО.
- Помогает выбирать политику, когда стандарта нет: ВЕРНО.
- Помогает всем понимать и толковать стандарты: ВЕРНО.`,
        uz: `Kontseptual asos — «qoidalar ortidagi qoida»: qo'llanma, standart emas.
- Bu moliyaviy hisobot standarti: NOTO'G'RI. Bu standart emas va standartlarni bekor qilmaydi.
- Izchil tushunchalarga asoslangan standartlar ishlab chiqishga yordam beradi: TO'G'RI.
- Standart bo'lmaganda siyosat tanlashga yordam beradi: TO'G'RI.
- Hammaga standartlarni tushunish va talqin qilishga yordam beradi: TO'G'RI.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'It is a financial reporting standard', correctIndex: 1 },
        { text: 'It helps the development of standards based on consistent concepts', correctIndex: 0 },
        { text: 'It helps preparers develop consistent policies when no standard applies', correctIndex: 0 },
        { text: 'It helps all parties understand and interpret the standards', correctIndex: 0 },
      ],
    },
    {
      id: 'ch02-q54',
      kitRef: 54,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Who is responsible for preparing the annual financial statements of a limited liability company?',
      explanation: {
        en: `The financial statements are the board's statements. The whole board shares the responsibility, even if one person does most of the work.
- The external auditor: only gives an opinion, does not prepare them.
- The finance director alone: may do the work, but responsibility is not theirs alone.
- The chair alone: same problem.
= Answer: the board of directors collectively
! Common trap: choosing the auditor. Directors prepare, auditors give an opinion.`,
        ru: `Финансовая отчётность — отчётность совета. Весь совет разделяет ответственность, даже если основную работу делает один человек.
- Внешний аудитор: только даёт мнение, не готовит её.
- Только финансовый директор: может делать работу, но отвечает не он один.
- Только председатель: та же проблема.
= Ответ: совет директоров коллективно
! Частая ошибка: выбрать аудитора. Директора готовят, аудиторы дают мнение.`,
        uz: `Moliyaviy hisobot — kengash hisoboti. Ishning ko'p qismini bitta odam qilsa ham, javobgarlikni butun kengash bo'lishadi.
- Tashqi auditor: faqat fikr beradi, tayyorlamaydi.
- Faqat moliya direktori: ishni qilishi mumkin, lekin javobgarlik faqat unda emas.
- Faqat rais: xuddi shu muammo.
= Javob: direktorlar kengashi birgalikda
! Ko'p uchraydigan xato: auditorni tanlash. Direktorlar tayyorlaydi, auditorlar fikr beradi.`,
      },
      options: [
        'The external auditor',
        'The finance director alone',
        'The board of directors collectively',
        'The chair of the board alone',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch02-q55',
      kitRef: 55,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Which statement best explains a director\'s responsibility when personal interests conflict with those of the company?',
      explanation: {
        en: `Having a conflict of interest is not a crime in itself. What matters is being open about it, quickly.
- Illegal: no, a conflict can happen to anyone.
- Must resign: no, disclosure is enough in most cases.
- Must disclose as soon as they know: yes, usually to the board.
- May choose whether to disclose: no, disclosure is a duty.
= Answer: the director must disclose the conflict as soon as they become aware of it`,
        ru: `Конфликт интересов сам по себе не преступление. Важно открыто и быстро о нём сообщить.
- Незаконен: нет, конфликт может возникнуть у любого.
- Обязан уйти в отставку: нет, обычно достаточно сообщить.
- Обязан сообщить, как только узнал: да, обычно совету.
- Может сам решить, сообщать ли: нет, сообщить — обязанность.
= Ответ: директор должен сообщить о конфликте, как только узнает о нём`,
        uz: `Manfaatlar to'qnashuvining o'zi jinoyat emas. Muhimi — bu haqda ochiq va tez aytish.
- Noqonuniy: yo'q, to'qnashuv har kimda bo'lishi mumkin.
- Iste'foga chiqishi shart: yo'q, odatda aytish yetarli.
- Bilishi bilan aytishi shart: ha, odatda kengashga.
- Aytish-aytmaslikni o'zi tanlaydi: yo'q, aytish — burch.
= Javob: direktor to'qnashuv haqida bilishi bilanoq aytishi shart`,
      },
      options: [
        'Such a conflict is illegal',
        'The director must resign immediately',
        'The director must disclose the conflict as soon as they become aware of it',
        'The director may choose whether to disclose it',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch02-q56',
      kitRef: 56,
      topicId: 'chapter-02',
      type: 'multi',
      text: 'Select the TWO true statements about directors\' responsibilities.',
      explanation: {
        en: `Directors share their duties as a board. Check each statement.
- Collectively responsible for preparing the financial statements: TRUE.
- Always personally responsible for losses from fraud or error: FALSE. Only if they failed in their duties.
- Must hold an accounting or business qualification by law: FALSE. No law requires this.
- Collectively responsible for keeping adequate accounting records: TRUE.
= Answer: the two "collectively responsible" statements
! Common trap: the word "always". Personal liability depends on whether the director failed in their duties.`,
        ru: `Директора делят обязанности как совет. Проверьте каждое утверждение.
- Коллективно отвечают за подготовку отчётности: ВЕРНО.
- Всегда лично отвечают за убытки от мошенничества или ошибок: НЕВЕРНО. Только если не исполнили обязанности.
- По закону обязаны иметь квалификацию бухгалтера или в бизнесе: НЕВЕРНО. Такого закона нет.
- Коллективно отвечают за ведение надлежащих учётных записей: ВЕРНО.
= Ответ: два утверждения о коллективной ответственности
! Частая ошибка: слово «всегда». Личная ответственность зависит от того, нарушил ли директор обязанности.`,
        uz: `Direktorlar vazifalarini kengash sifatida bo'lishadi. Har bir fikrni tekshiring.
- Hisobot tayyorlash uchun birgalikda javobgar: TO'G'RI.
- Firibgarlik yoki xatodan zarar uchun doim shaxsan javobgar: NOTO'G'RI. Faqat vazifasini bajarmagan bo'lsa.
- Qonun bo'yicha buxgalterlik yoki biznes malakasi shart: NOTO'G'RI. Bunday qonun yo'q.
- Tegishli hisob yozuvlarini yuritish uchun birgalikda javobgar: TO'G'RI.
= Javob: «birgalikda javobgar» degan ikki fikr
! Ko'p uchraydigan xato: «doim» so'zi. Shaxsiy javobgarlik direktor vazifasini bajarmaganiga bog'liq.`,
      },
      options: [
        'Directors are collectively responsible for preparing the annual financial statements',
        'Directors are always personally responsible for losses from fraud or error in the accounting records',
        'All directors must by law hold a professional accounting or business qualification',
        'Directors are collectively responsible for ensuring adequate accounting records are kept',
      ],
      correctIndices: [0, 3],
    },
    {
      id: 'ch02-q57',
      kitRef: 57,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Who is responsible for ensuring the annual financial statements reach shareholders and others entitled to receive them?',
      explanation: {
        en: `Getting the statements to shareholders is one of the board's duties. The board may ask someone else to do the actual sending, but the responsibility stays with the board as a whole.
- The external auditor: does not distribute the statements.
- The chair alone or the finance director alone: responsibility is not one person's.
= Answer: the board of directors collectively`,
        ru: `Доставить отчётность акционерам — одна из обязанностей совета. Совет может поручить саму рассылку кому-то другому, но ответственность остаётся у всего совета.
- Внешний аудитор: отчётность не рассылает.
- Только председатель или только финансовый директор: ответственность не на одном человеке.
= Ответ: совет директоров коллективно`,
        uz: `Hisobotni aksiyadorlarga yetkazish — kengash vazifalaridan biri. Kengash yuborishning o'zini boshqaga topshirishi mumkin, lekin javobgarlik butun kengashda qoladi.
- Tashqi auditor: hisobotni tarqatmaydi.
- Faqat rais yoki faqat moliya direktori: javobgarlik bir kishida emas.
= Javob: direktorlar kengashi birgalikda`,
      },
      options: [
        'The board of directors collectively',
        'The external auditor',
        'The chair of the board alone',
        'The finance director alone',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch02-q58',
      kitRef: 58,
      topicId: 'chapter-02',
      type: 'single',
      text: 'Which statement defines corporate governance?',
      explanation: {
        en: `The Cadbury Report's definition: corporate governance is "the system by which companies are directed and controlled", today usually extended to include shareholders and other stakeholders.
- Objectives and concepts of financial reporting: that is the Conceptual Framework.
- All current IFRS: that is just the set of standards.
- Principles auditors use: those are auditing standards.
= Answer: the system by which companies are directed and controlled in the interests of shareholders and other stakeholders`,
        ru: `Определение из доклада Кэдбери: корпоративное управление — «система, с помощью которой компании направляются и контролируются», сегодня обычно с учётом акционеров и других заинтересованных сторон.
- Цели и понятия отчётности: это Концептуальная основа.
- Все действующие МСФО: это просто набор стандартов.
- Принципы аудиторов: это стандарты аудита.
= Ответ: система, с помощью которой компании направляются и контролируются в интересах акционеров и других заинтересованных сторон`,
        uz: `Kedberi hisobotidagi ta'rif: korporativ boshqaruv — «kompaniyalar yo'naltiriladigan va nazorat qilinadigan tizim», bugun odatda aksiyadorlar va boshqa manfaatdor tomonlarni ham qo'shib.
- Hisobotning maqsad va tushunchalari: bu Kontseptual asos.
- Amaldagi barcha MSFO: bu shunchaki standartlar to'plami.
- Auditorlar tamoyillari: bu audit standartlari.
= Javob: kompaniyalar aksiyadorlar va boshqa manfaatdor tomonlar manfaatida yo'naltiriladigan va nazorat qilinadigan tizim`,
      },
      options: [
        'The system by which companies are directed and controlled in the interests of shareholders and other stakeholders',
        'A framework setting out the objectives and concepts of financial reporting',
        'The collective term for all current IFRS Accounting Standards',
        'The principles external auditors use when auditing company statements',
      ],
      correctIndex: 0,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
