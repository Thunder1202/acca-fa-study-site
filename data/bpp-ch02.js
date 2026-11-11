'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 1 (regulation and
// governance items), reworded. bppRef/bppPage point to BPP's own answer.
(function () {
  const TOPIC = 'chapter-02';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp02-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });

  const questions = [
    q('1.1', 193, 'single', `Who issues IFRS Accounting Standards?`,
      pick(['The IFRS Advisory Council', 'The stock exchange', 'The International Accounting Standards Board (the Board)', 'The government'], 2),
`Each body has one job: the Board writes and publishes the standards.
- The Advisory Council: gives advice.
- A stock exchange: may require listed companies to use IFRS, but does not write them.
- A government: may adopt IFRS into law, but does not write them.
= Answer: the International Accounting Standards Board`,
`У каждого органа одна задача: Совет пишет и публикует стандарты.
- Консультативный совет: даёт советы.
- Фондовая биржа: может требовать IFRS от компаний, но не пишет их.
- Правительство: может ввести IFRS законом, но не пишет их.
= Ответ: Совет по международным стандартам финансовой отчётности (IASB)`,
`Har bir organning bitta vazifasi bor: Kengash standartlarni yozadi va e'lon qiladi.
- Maslahat kengashi: maslahat beradi.
- Fond birjasi: kompaniyalardan IFRS talab qilishi mumkin, lekin ularni yozmaydi.
- Hukumat: IFRS ni qonunga kiritishi mumkin, lekin yozmaydi.
= Javob: Xalqaro moliyaviy hisobot standartlari kengashi (IASB)`),

    q('1.5', 193, 'single', `Which statement best describes corporate governance?`,
      pick([
        'The set of rules and regulations about financial reporting',
        'The system by which companies and other entities are directed and controlled',
        'Work done by the finance department in preparing the financial statements',
        'The system by which an entity monitors its effect on the natural environment',
      ], 1),
`The standard definition: corporate governance is the system by which companies are directed and controlled.
- Rules on financial reporting: that is the regulatory framework.
- The finance department's work: just preparing the accounts.
- Monitoring the environment: sustainability reporting.
= Answer: the system by which companies and other entities are directed and controlled`,
`Стандартное определение: корпоративное управление — система, с помощью которой компании направляются и контролируются.
- Правила отчётности: это регулятивная основа.
- Работа финансового отдела: лишь подготовка отчётности.
- Контроль влияния на природу: отчётность об устойчивом развитии.
= Ответ: система, с помощью которой компании и другие организации направляются и контролируются`,
`Standart ta'rif: korporativ boshqaruv — kompaniyalar yo'naltiriladigan va nazorat qilinadigan tizim.
- Hisobot qoidalari: bu tartibga solish asosi.
- Moliya bo'limi ishi: faqat hisobot tayyorlash.
- Tabiatga ta'sirni kuzatish: barqaror rivojlanish hisoboti.
= Javob: kompaniyalar va boshqa tashkilotlar yo'naltiriladigan va nazorat qilinadigan tizim`),

    q('1.6', 193, 'single', `Which statements are true? (1) The directors are ultimately responsible for preparing the financial statements, even if the finance department does most of the work. (2) If the financial statements are audited, responsibility for them passes from the directors to the auditors. (3) There are generally no laws about directors' duties in running a company.`,
      pick(['1 only', '2 only', '2 and 3 only', '1 and 3 only'], 0),
`Check each statement.
- (1) The directors stay responsible, whoever does the work: TRUE.
- (2) An audit does not move responsibility. Auditors only give an opinion. FALSE.
- (3) Many directors' duties are set by law, such as acting within their powers and using reasonable skill and care. FALSE.
= Answer: 1 only`,
`Проверим каждое утверждение.
- (1) Директора отвечают, кто бы ни делал работу: ВЕРНО.
- (2) Аудит не переносит ответственность. Аудитор лишь выражает мнение. НЕВЕРНО.
- (3) Многие обязанности директоров установлены законом, например действовать в рамках полномочий и проявлять разумную заботу. НЕВЕРНО.
= Ответ: только 1`,
`Har bir fikrni tekshiramiz.
- (1) Ishni kim qilmasin, direktorlar javobgar: TO'G'RI.
- (2) Audit javobgarlikni o'tkazmaydi. Auditor faqat fikr bildiradi. NOTO'G'RI.
- (3) Direktorlarning ko'p vazifalari qonunda belgilangan, masalan vakolat doirasida harakat qilish va oqilona g'amxo'rlik. NOTO'G'RI.
= Javob: faqat 1`),

    q('1.10', 194, 'single', `Which statements are true? (1) Directors have a duty of care to manage the company's affairs with reasonable competence. (2) Directors must act honestly in what they believe is the company's best interest. (3) A director's main aim should be to create wealth for the company's shareholders.`,
      pick(['1 and 2 only', '2 only', '1, 2 and 3', '1 and 3 only'], 2),
`All three describe what directors owe the company and its owners.
- (1) Reasonable competence: a legal duty of care. TRUE.
- (2) Acting honestly in the company's best interest: TRUE.
- (3) Creating wealth for the shareholders, who own the company: TRUE.
= Answer: 1, 2 and 3`,
`Все три описывают обязанности директоров перед компанией и её владельцами.
- (1) Разумная компетентность: законная обязанность заботы. ВЕРНО.
- (2) Честно действовать в интересах компании: ВЕРНО.
- (3) Создавать богатство для акционеров, владельцев компании: ВЕРНО.
= Ответ: 1, 2 и 3`,
`Uchalasi direktorlarning kompaniya va uning egalari oldidagi vazifalarini tasvirlaydi.
- (1) Oqilona malaka: qonuniy g'amxo'rlik vazifasi. TO'G'RI.
- (2) Kompaniya manfaatida halol harakat qilish: TO'G'RI.
- (3) Kompaniya egalari — aksiyadorlar uchun boylik yaratish: TO'G'RI.
= Javob: 1, 2 va 3`),

    q('1.11', 194, 'single', `Which statements are true? (1) The IFRS Interpretations Committee is the forum the Board uses to consult the outside world. (2) The IFRS Foundation writes IFRS Accounting Standards and is overseen by the Board. (3) One objective of the IFRS Foundation is to bring national accounting standards and IFRS closer together.`,
      pick(['1 and 3 only', '2 only', '2 and 3 only', '3 only'], 3),
`Match each body to its real job.
- (1) The forum for consulting the outside world is the Advisory Council, not the Interpretations Committee. FALSE.
- (2) It is the other way round: the BOARD writes the standards and the FOUNDATION oversees the Board. FALSE.
- (3) Convergence of national standards with IFRS is a Foundation objective. TRUE.
= Answer: 3 only`,
`Сопоставим каждый орган с его задачей.
- (1) Форум для консультаций с внешним миром — Консультативный совет, а не Комитет по интерпретациям. НЕВЕРНО.
- (2) Наоборот: СОВЕТ пишет стандарты, а ФОНД контролирует Совет. НЕВЕРНО.
- (3) Сближение национальных стандартов с IFRS — цель Фонда. ВЕРНО.
= Ответ: только 3`,
`Har bir organni haqiqiy vazifasiga moslaymiz.
- (1) Tashqi dunyo bilan maslahat forumi — Maslahat kengashi, Talqinlar qo'mitasi emas. NOTO'G'RI.
- (2) Teskarisi: standartlarni KENGASH yozadi, FOND esa Kengashni nazorat qiladi. NOTO'G'RI.
- (3) Milliy standartlarni IFRS ga yaqinlashtirish — Fond maqsadi. TO'G'RI.
= Javob: faqat 3`),

    q('1.12', 194, 'single', `What is the role of the International Accounting Standards Board (the Board)?`,
      pick(['To oversee the whole standard-setting process', 'To develop IFRS Accounting Standards', 'To review faulty accounts', 'To control the accountancy profession'], 1),
`The Board's job is to develop and publish the standards.
- Overseeing the process: the IFRS Foundation.
- Reviewing faulty accounts or controlling the profession: national regulators and professional bodies.
= Answer: to develop IFRS Accounting Standards`,
`Задача Совета — разрабатывать и публиковать стандарты.
- Надзор за процессом: Фонд IFRS.
- Проверка ошибочной отчётности и контроль профессии: национальные регуляторы и профессиональные органы.
= Ответ: разрабатывать стандарты IFRS`,
`Kengash vazifasi — standartlarni ishlab chiqish va e'lon qilish.
- Jarayonni nazorat qilish: IFRS Fondi.
- Xato hisobotlarni tekshirish va kasbni nazorat qilish: milliy regulyatorlar va kasbiy tashkilotlar.
= Javob: IFRS standartlarini ishlab chiqish`),

    q('1.13', 194, 'single', `Which of these is NOT an objective of the IFRS Foundation?`,
      pick([
        'Through the Board, to develop one set of globally accepted IFRS Accounting Standards',
        'To promote the use and careful application of IFRS',
        'To make sure IFRS focuses mainly on the needs of large multinational groups',
        'To bring national accounting standards and IFRS closer together',
      ], 2),
`Look for the one that is NOT an objective.
- One global set of standards, wider use of IFRS, and convergence: all Foundation objectives.
- Focusing mainly on multinationals: wrong. The Foundation also takes account of emerging economies and small and medium-sized entities. RIGHT.
= Answer: making IFRS focus mainly on large multinational groups`,
`Ищем то, что НЕ является целью.
- Единые мировые стандарты, распространение IFRS и сближение: всё это цели Фонда.
- Ориентация в основном на транснациональные группы: неверно. Фонд учитывает и развивающиеся экономики, и малый и средний бизнес. ВЕРНО.
= Ответ: ориентировать IFRS в основном на крупные транснациональные группы`,
`Maqsad BO'LMAGANINI izlaymiz.
- Yagona global standartlar, IFRS ni keng qo'llash va yaqinlashtirish: hammasi Fond maqsadi.
- Asosan xalqaro guruhlarga yo'naltirish: noto'g'ri. Fond rivojlanayotgan iqtisodiyotlar va kichik-o'rta biznesni ham hisobga oladi. TO'G'RI.
= Javob: IFRS ni asosan yirik xalqaro guruhlarga yo'naltirish`),

    q('1.14', 194, 'single', `Which statement correctly describes one way IFRS Accounting Standards are used?`,
      pick([
        'As a benchmark of best practice for national bodies that develop their own rules',
        'To make sure financial reporting professionals keep high ethical standards',
        'To enforce one set of global standards on every country',
        'To stop national bodies from developing their own standards',
      ], 0),
`IFRS only applies in a country once it is adopted there. Countries that keep their own rules can still use IFRS as an example of good practice.
- Ethics: covered by professional codes, not by IFRS.
- Enforcing or stopping national rules: the IASB has no power to force any country.
= Answer: as a benchmark of best practice for national bodies`,
`IFRS действует в стране, только если она их приняла. Страны со своими правилами могут использовать IFRS как образец лучшей практики.
- Этика: регулируется профессиональными кодексами, а не IFRS.
- Навязать или запретить национальные правила: у IASB нет власти над странами.
= Ответ: как образец лучшей практики для национальных органов`,
`IFRS mamlakatda faqat qabul qilinganda amal qiladi. O'z qoidalari bor mamlakatlar IFRS dan eng yaxshi amaliyot namunasi sifatida foydalanishi mumkin.
- Etika: IFRS emas, kasbiy kodekslar tartibga soladi.
- Milliy qoidalarni majburlash yoki taqiqlash: IASB ning mamlakatlar ustidan hokimiyati yo'q.
= Javob: milliy organlar uchun eng yaxshi amaliyot namunasi sifatida`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
