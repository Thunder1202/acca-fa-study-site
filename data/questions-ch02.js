'use strict';

const TOPIC_02 = 'chapter-02';
const TRUE_FALSE_02 = ['True', 'False'];

function base02(kitRef, type, text, explanation) {
  return { id: `ch02-q${kitRef}`, kitRef, topicId: TOPIC_02, type, text, explanation };
}
function single02(kitRef, text, options, correctIndex, en, ru, uz) {
  return { ...base02(kitRef, 'single', text, { en, ru, uz }), options, correctIndex };
}
function multi02(kitRef, text, options, correctIndices, en, ru, uz) {
  return { ...base02(kitRef, 'multi', text, { en, ru, uz }), options, correctIndices };
}
function matrix02(kitRef, text, columns, rows, en, ru, uz) {
  return { ...base02(kitRef, 'matrix', text, { en, ru, uz }), columns, rows };
}

const questionsCh02 = [
  single02(47, 'Which statement is true?',
    ["Directors are personally liable for a company's losses", 'A sole trader business is owned by shareholders', 'Partners are liable for losses only in proportion to their profit share', 'Directors run a company on behalf of its members'], 3,
    `This tests who owns and who runs each business form. Members own a company and directors run it. Directors are not personally liable for its losses, and partners are jointly and severally liable, not in proportion.`,
    `Вопрос о том, кто владеет бизнесом и кто им управляет. Компанией владеют участники, а управляют директора. Директора лично не отвечают за её убытки, а партнёры отвечают солидарно, а не пропорционально.`,
    `Savol har bir biznes shaklida kim egalik qilishi va kim boshqarishi haqida. Kompaniyaga ishtirokchilar egalik qiladi, direktorlar boshqaradi. Direktorlar uning zarari uchun shaxsan javob bermaydi, sheriklar esa ulushga qarab emas, birgalikda va alohida javob beradi.`),
  single02(48, "What could encourage executive directors to act in the company's best interests?",
    ['Attending Annual General Meetings', 'Bonuses linked to individual and company performance', 'A large payment on resignation', 'A high fixed salary'], 1,
    `This asks what aligns directors with the company. A performance-linked bonus rewards them when the company does well. A high salary or leaving payment is earned regardless of results.`,
    `Вопрос о том, что сближает интересы директоров и компании. Премия за результаты вознаграждает их, когда компания работает хорошо. Высокий оклад или выплату при уходе они получат независимо от итогов.`,
    `Savol direktorlar manfaatini kompaniya bilan nima birlashtirishi haqida. Natijaga bog'liq mukofot kompaniya yaxshi ishlaganda beriladi. Yuqori maosh yoki ketishdagi to'lov natijadan qat'i nazar olinadi.`),
  single02(49, 'Statement 1: The IFRS Advisory Council gives advice to the Board or the trustees. Statement 2: It gives the Board advice on agenda decisions. Which is correct?',
    ['Statement 1 only', 'Statement 2 only', 'Neither statement', 'Both statements'], 3,
    `This tests the role of the Advisory Council. It is the formal advisory body, so both statements describe its work.`,
    `Вопрос о роли Консультативного совета. Это официальный совещательный орган, поэтому оба утверждения описывают его работу.`,
    `Savol Maslahat kengashining roli haqida. Bu rasmiy maslahat organi, shuning uchun ikkala gap ham uning ishini tasvirlaydi.`),
  matrix02(50, 'Mark each statement as true or false.', TRUE_FALSE_02,
    [{ text: 'IFRS Accounting Standards take effect in a country only if a national body adopts them', correctIndex: 0 }, { text: 'IFRS Accounting Standards give guidance on every type of transaction', correctIndex: 1 }],
    `This tests the limits of the standards. The IASB has no international authority, so national adoption is needed. No set of standards can cover every transaction, which is one reason the Conceptual Framework exists.`,
    `Вопрос о границах стандартов. У IASB нет международной власти, поэтому нужно национальное принятие. Никакие стандарты не охватят все операции: это одна из причин существования Концептуальных основ.`,
    `Savol standartlar chegaralari haqida. IASB xalqaro vakolatga ega emas, shuning uchun milliy qabul qilish kerak. Hech bir standart barcha operatsiyalarni qamrab ololmaydi, Konseptual asoslar mavjudligining sabablaridan biri shu.`),
  single02(51, 'What is the most obvious way of achieving public oversight of corporate governance?',
    ['A comprehensive company website', 'Press announcements of major developments', 'Publication of the annual report and accounts', 'Shareholder access to the Annual General Meeting'], 2,
    `This asks which route reaches the public. The annual report is published for everyone. Only shareholders attend the AGM, and websites or press releases are chosen by the company.`,
    `Вопрос о том, что доступно обществу. Годовой отчёт публикуется для всех. На общее собрание приходят только акционеры, а сайт и пресс-релизы компания составляет по своему выбору.`,
    `Savol jamoatchilik nimadan foydalana olishi haqida. Yillik hisobot hamma uchun e'lon qilinadi. Umumiy yig'ilishga faqat aksiyadorlar keladi, sayt va press-relizlarni esa kompaniya o'zi tanlaydi.`),
  single02(52, 'Which body issues IFRS Accounting Standards?',
    ['The European Union', 'The International Accounting Standards Board', 'The IFRS Advisory Council', 'The IFRS Interpretations Committee'], 1,
    `This tests who does what. The Board sets standards, the Interpretations Committee interprets them, and the Advisory Council advises.`,
    `Вопрос о том, кто чем занимается. Совет выпускает стандарты, Комитет разъясняет их, а Консультативный совет советует.`,
    `Savol kim nima qilishi haqida. Kengash standart chiqaradi, Qo'mita ularni talqin qiladi, Maslahat kengashi maslahat beradi.`),
  matrix02(53, "Mark each statement about the IASB's Conceptual Framework as true or false.", TRUE_FALSE_02,
    [{ text: 'It is a financial reporting standard', correctIndex: 1 }, { text: 'It helps the development of standards based on consistent concepts', correctIndex: 0 }, { text: 'It helps preparers develop consistent policies when no standard applies', correctIndex: 0 }, { text: 'It helps all parties understand and interpret the standards', correctIndex: 0 }],
    `This tests the status of the Framework. It is not a standard. It is a reference document that supports the development and understanding of standards.`,
    `Вопрос о статусе Основ. Это не стандарт, а справочный документ, помогающий разрабатывать и понимать стандарты.`,
    `Savol Asoslar maqomi haqida. Bu standart emas, standartlarni ishlab chiqish va tushunishga yordam beradigan ma'lumotnoma hujjat.`),
  single02(54, 'Who is responsible for preparing the annual financial statements of a limited liability company?',
    ['The external auditor', 'The finance director alone', 'The board of directors collectively', 'The chair of the board alone'], 2,
    `This tests where responsibility lies. It sits with the whole board together, not one person. The auditor only gives an opinion on the statements.`,
    `Вопрос о том, на ком ответственность. Она лежит на всём совете директоров вместе, а не на одном человеке. Аудитор только высказывает мнение об отчётности.`,
    `Savol javobgarlik kimda ekani haqida. U bir kishida emas, butun direktorlar kengashida. Auditor faqat hisobot haqida fikr beradi.`),
  single02(55, "Which statement best explains a director's responsibility when personal interests conflict with those of the company?",
    ['Such a conflict is illegal', 'The director must resign immediately', 'The director must disclose the conflict as soon as they become aware of it', 'The director may choose whether to disclose it'], 2,
    `This tests the duty on conflicts of interest. A conflict is not illegal in itself, but it must be disclosed promptly, normally to the board. Some countries also require disclosure to shareholders.`,
    `Вопрос об обязанности при конфликте интересов. Конфликт сам по себе не незаконен, но его нужно сразу раскрыть, обычно совету директоров. В некоторых странах также нужно сообщить акционерам.`,
    `Savol manfaatlar to'qnashuvidagi burch haqida. To'qnashuvning o'zi noqonuniy emas, lekin uni darhol, odatda direktorlar kengashiga oshkor qilish kerak. Ba'zi mamlakatlarda aksiyadorlarga ham xabar berish talab qilinadi.`),
  multi02(56, "Select the TWO true statements about directors' responsibilities.",
    ['Directors are collectively responsible for preparing the annual financial statements', 'Directors are always personally responsible for losses from fraud or error in the accounting records', 'All directors must by law hold a professional accounting or business qualification', 'Directors are collectively responsible for ensuring adequate accounting records are kept'], [0, 3],
    `This is a pick-two question. Directors share responsibility for the statements and the records. Personal liability arises only if they fail in their duties, not always, and no qualification is legally required.`,
    `Здесь нужно выбрать два ответа. Директора совместно отвечают за отчётность и учётные записи. Личная ответственность возникает только при неисполнении обязанностей, а не всегда, и квалификация по закону не требуется.`,
    `Bu yerda ikki javob tanlanadi. Direktorlar hisobot va hisob yozuvlari uchun birgalikda javob beradi. Shaxsiy javobgarlik doim emas, faqat burchlar bajarilmaganda yuzaga keladi, malaka esa qonunan talab qilinmaydi.`),
  single02(57, 'Who is responsible for ensuring the annual financial statements reach shareholders and others entitled to receive them?',
    ['The board of directors collectively', 'The external auditor', 'The chair of the board alone', 'The finance director alone'], 0,
    `This tests a board responsibility. The directors may delegate the task, but the responsibility stays with the board as a whole.`,
    `Вопрос об обязанности совета директоров. Директора могут поручить эту работу другим, но ответственность остаётся на всём совете.`,
    `Savol direktorlar kengashi burchi haqida. Direktorlar bu ishni boshqaga topshirishi mumkin, lekin javobgarlik butun kengashda qoladi.`),
  single02(58, 'Which statement defines corporate governance?',
    ['The system by which companies are directed and controlled in the interests of shareholders and other stakeholders', 'A framework setting out the objectives and concepts of financial reporting', 'The collective term for all current IFRS Accounting Standards', 'The principles external auditors use when auditing company statements'], 0,
    `This asks for the Cadbury-style definition. The second option describes the Conceptual Framework, not governance.`,
    `Вопрос об определении в духе доклада Кэдбери. Второй вариант описывает Концептуальные основы, а не корпоративное управление.`,
    `Savol Cadbury ta'rifi haqida. Ikkinchi variant korporativ boshqaruvni emas, Konseptual asoslarni tasvirlaydi.`),
];

if (typeof module !== 'undefined') module.exports = questionsCh02;
else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC_02] = questionsCh02;
