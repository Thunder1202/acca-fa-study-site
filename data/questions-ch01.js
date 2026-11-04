'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-01';
  const questions = [
    {
      id: 'ch01-q1',
      kitRef: 1,
      topicId: 'chapter-01',
      type: 'single',
      text: 'What does a statement of financial position show?',
      explanation: {
        en: `A statement of financial position is a photo of one day: what the business has (assets), what it owes (liabilities) and what is left for the owners (equity).
- Cash paid and received: that is the statement of cash flows.
- Income and expenses over a period: that is the statement of profit or loss.
- Assets and expenses on one date: expenses never appear in the statement of financial position.
= Answer: assets, liabilities and equity at one point in time
! Common trap: "at one date" means financial position. "Over a period" means profit or loss, or cash flows.`,
        ru: `Отчёт о финансовом положении — это фото одного дня: что у бизнеса есть (активы), что он должен (обязательства) и что остаётся владельцам (капитал).
- Полученные и выплаченные деньги: это отчёт о движении денежных средств.
- Доходы и расходы за период: это отчёт о прибыли или убытке.
- Активы и расходы на одну дату: расходов в отчёте о финансовом положении не бывает.
= Ответ: активы, обязательства и капитал на один момент времени
! Частая ошибка: «на одну дату» — это финансовое положение. «За период» — прибыль или убыток либо движение денег.`,
        uz: `Moliyaviy holat hisoboti — bir kunning surati: biznesda nima bor (aktivlar), nima qarz (majburiyatlar) va egalarga nima qoladi (kapital).
- Olingan va to'langan pul: bu pul oqimlari to'g'risidagi hisobot.
- Davr uchun daromad va xarajatlar: bu foyda yoki zarar hisoboti.
- Bir sanadagi aktivlar va xarajatlar: xarajatlar moliyaviy holat hisobotida bo'lmaydi.
= Javob: bir vaqt nuqtasidagi aktivlar, majburiyatlar va kapital
! Ko'p uchraydigan xato: «bir sanada» — moliyaviy holat. «Davr uchun» — foyda yoki zarar, yoki pul oqimlari.`,
      },
      options: [
        'Cash paid and received during a period',
        'Assets, liabilities and equity at one point in time',
        'Income and expenses over a period',
        'Assets and expenses on one date',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q2',
      kitRef: 2,
      topicId: 'chapter-01',
      type: 'single',
      text: 'What does a statement of profit or loss show?',
      explanation: {
        en: `A statement of profit or loss is a film of a whole period: everything earned (income) and everything used up to earn it (expenses). The difference is the profit or loss.
- Assets, liabilities and equity at one date: that is the statement of financial position.
- Cash movements: that is the statement of cash flows.
- Assets and expenses on one date: assets do not belong here at all.
= Answer: income earned and expenses incurred over a period`,
        ru: `Отчёт о прибыли или убытке — это фильм за весь период: всё заработанное (доходы) и всё потраченное ради этого (расходы). Разница — прибыль или убыток.
- Активы, обязательства и капитал на одну дату: это отчёт о финансовом положении.
- Движение денег: это отчёт о движении денежных средств.
- Активы и расходы на одну дату: активам здесь вообще не место.
= Ответ: доходы и расходы за период`,
        uz: `Foyda yoki zarar hisoboti — butun davr filmi: topilgan hamma narsa (daromadlar) va buning uchun sarflangan hamma narsa (xarajatlar). Farqi — foyda yoki zarar.
- Bir sanadagi aktivlar, majburiyatlar va kapital: bu moliyaviy holat hisoboti.
- Pul harakati: bu pul oqimlari to'g'risidagi hisobot.
- Bir sanadagi aktivlar va xarajatlar: aktivlar bu yerga umuman tegishli emas.
= Javob: davr uchun topilgan daromad va qilingan xarajatlar`,
      },
      options: [
        'Income earned and expenses incurred over a period',
        'Assets, liabilities and equity at one date',
        'Cash movements during a period',
        'Assets and expenses on one date',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch01-q3',
      kitRef: 3,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which group normally needs the most detailed financial information about a business?',
      explanation: {
        en: `Think about who makes decisions every day. Managers decide which products to drop, which supplier to use and what to charge, so they need far more detail than anyone outside.
- Employees, government and investors only see the published, summarised statements.
= Answer: the entity's management
! Common trap: investors are the main users of the published statements, but they do not need the most detail.`,
        ru: `Подумайте, кто принимает решения каждый день. Руководство решает, какой товар убрать, какого поставщика выбрать и какую цену назначить, поэтому ему нужно гораздо больше деталей, чем кому-либо снаружи.
- Сотрудники, государство и инвесторы видят только опубликованную, сводную отчётность.
= Ответ: руководство организации
! Частая ошибка: инвесторы — главные пользователи опубликованной отчётности, но больше всего деталей нужно не им.`,
        uz: `Har kuni kim qaror qabul qilishini o'ylang. Rahbariyat qaysi tovarni olib tashlash, qaysi yetkazib beruvchini tanlash va qanday narx qo'yishni hal qiladi, shuning uchun unga tashqaridagilardan ancha ko'p tafsilot kerak.
- Xodimlar, davlat va investorlar faqat e'lon qilingan, jamlangan hisobotni ko'radi.
= Javob: korxona rahbariyati
! Ko'p uchraydigan xato: investorlar e'lon qilingan hisobotning asosiy foydalanuvchilari, lekin eng ko'p tafsilot ularga kerak emas.`,
      },
      options: ['Employees', 'Government agencies', 'The entity\'s management', 'Current and potential investors'],
      correctIndex: 2,
    },
    {
      id: 'ch01-q4',
      kitRef: 4,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Statement 1: Accounting involves recording transactions and summarising them. Statement 2: Financial accounting means preparing the main statements for internal use. Which is true?',
      explanation: {
        en: `Check each statement on its own.
- Statement 1: accounting does mean recording transactions and then summarising them. True.
- Statement 2: financial accounting prepares statements for people OUTSIDE the business (lenders, investors). Internal reports are management accounting. False.
= Answer: statement 1 only`,
        ru: `Проверьте каждое утверждение отдельно.
- Утверждение 1: учёт действительно означает запись операций и их обобщение. Верно.
- Утверждение 2: финансовый учёт готовит отчётность для людей ВНЕ бизнеса (кредиторов, инвесторов). Внутренние отчёты — это управленческий учёт. Неверно.
= Ответ: только утверждение 1`,
        uz: `Har bir fikrni alohida tekshiring.
- 1-fikr: hisob haqiqatan operatsiyalarni yozish va jamlash demak. To'g'ri.
- 2-fikr: moliyaviy hisob biznesdan TASHQARIDAGILAR (qarz beruvchilar, investorlar) uchun hisobot tayyorlaydi. Ichki hisobotlar — boshqaruv hisobi. Noto'g'ri.
= Javob: faqat 1-fikr`,
      },
      options: ['Statement 1 only', 'Statement 2 only', 'Both statements', 'Neither statement'],
      correctIndex: 0,
    },
    {
      id: 'ch01-q5',
      kitRef: 5,
      topicId: 'chapter-01',
      type: 'single',
      text: 'What is financial accounting mainly for?',
      explanation: {
        en: `The question asks for the main purpose, not one step along the way.
- Detailed cost analysis for managers: that is management accounting.
- Recording every transaction: only the first step of the work.
- Working out profit: one part of the result, not the whole aim.
- Producing statements that tell users about performance and position: this is the overall aim.
= Answer: enabling financial statements that inform users about performance and position`,
        ru: `Вопрос о главной цели, а не об одном шаге на пути к ней.
- Подробный анализ затрат для руководства: это управленческий учёт.
- Запись каждой операции: только первый шаг работы.
- Расчёт прибыли: одна часть результата, а не вся цель.
- Отчётность, которая сообщает пользователям о результатах и положении: это и есть общая цель.
= Ответ: подготовка отчётности, информирующей пользователей о результатах и положении`,
        uz: `Savol asosiy maqsad haqida, yo'ldagi bitta qadam haqida emas.
- Rahbariyat uchun batafsil xarajat tahlili: bu boshqaruv hisobi.
- Har bir operatsiyani yozish: ishning faqat birinchi qadami.
- Foydani hisoblash: natijaning bir qismi, butun maqsad emas.
- Foydalanuvchilarga natija va holat haqida xabar beruvchi hisobot: umumiy maqsad shu.
= Javob: foydalanuvchilarga natija va holat haqida ma'lumot beruvchi moliyaviy hisobotni tayyorlash`,
      },
      options: [
        'Giving managers detailed cost analysis',
        'Recording every transaction in the ledgers',
        'Working out the profit or loss figure for a period',
        'Enabling financial statements that inform users about performance and position',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q6',
      kitRef: 6,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement is NOT a real difference between financial statements and management accounts?',
      explanation: {
        en: `Look for the word NOT: three options are real differences and one is false.
- Outside users vs insiders: a real difference.
- Yearly vs more often: a real difference.
- Usually audited vs not audited: a real difference.
- "More accurate": false. Management accounts must be just as accurate, because managers base decisions on them.
= Answer: financial statements are more accurate than management accounts`,
        ru: `Обратите внимание на слово NOT: три варианта — реальные различия, один ложный.
- Внешние пользователи против внутренних: реальное различие.
- Раз в год против чаще: реальное различие.
- Обычно с аудитом против без аудита: реальное различие.
- «Точнее»: неверно. Управленческая отчётность должна быть такой же точной, ведь по ней принимают решения.
= Ответ: финансовая отчётность точнее управленческой`,
        uz: `NOT so'ziga e'tibor bering: uchta variant haqiqiy farq, bittasi yolg'on.
- Tashqi va ichki foydalanuvchilar: haqiqiy farq.
- Yiliga bir marta va tez-tez: haqiqiy farq.
- Odatda auditli va auditsiz: haqiqiy farq.
- «Aniqroq»: noto'g'ri. Boshqaruv hisoboti ham shunchalik aniq bo'lishi kerak, chunki unga qarab qaror qabul qilinadi.
= Javob: moliyaviy hisobot boshqaruv hisobotidan aniqroq`,
      },
      options: [
        'Financial statements mainly serve outside users, management accounts serve insiders',
        'Financial statements are usually annual, management accounts are more frequent',
        'Financial statements are usually externally audited, management accounts are not',
        'Financial statements are more accurate than management accounts',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q7',
      kitRef: 7,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which is the best definition of a liability?',
      explanation: {
        en: `The Conceptual Framework definition has three parts, and only one option has all three.
# The three parts of a liability
  It is a present obligation (it exists now)
  to transfer an economic resource (usually cash)
  as a result of past events (something already happened)
- "Any amount legally owed": too narrow, because obligations can be constructive, not only legal.
- "An obligation from a past transaction": missing the transfer of a resource.
- "Anything that causes benefits to leave": too wide, it would include expenses.
= Answer: a present obligation of the entity to transfer an economic resource as a result of past events`,
        ru: `В определении Концептуальной основы три части, и все три есть только в одном варианте.
# Три части обязательства
  Это существующая обязанность (она есть сейчас)
  передать экономический ресурс (обычно деньги)
  в результате прошлых событий (что-то уже произошло)
- «Любая сумма, которую должны по закону»: слишком узко, обязанности бывают не только правовые.
- «Обязанность из прошлой операции»: нет передачи ресурса.
- «Всё, из-за чего уходят выгоды»: слишком широко, сюда попадут и расходы.
= Ответ: существующая обязанность организации передать экономический ресурс в результате прошлых событий`,
        uz: `Kontseptual asos ta'rifi uch qismdan iborat va uchalasi faqat bitta variantda bor.
# Majburiyatning uch qismi
  Bu mavjud burch (hozir bor)
  iqtisodiy resursni berish (odatda pul)
  o'tgan voqealar natijasida (nimadir allaqachon bo'lgan)
- «Qonun bo'yicha qarz bo'lgan har qanday summa»: juda tor, burch faqat huquqiy bo'lmaydi.
- «O'tgan operatsiyadan kelgan burch»: resurs berish yo'q.
- «Naf chiqib ketishiga sabab bo'ladigan hamma narsa»: juda keng, xarajatlar ham kirib qoladi.
= Javob: o'tgan voqealar natijasida korxonaning iqtisodiy resursni berish bo'yicha mavjud burchi`,
      },
      options: [
        'Any amount legally owed to a third party',
        'An obligation from a past transaction',
        'Anything that causes economic benefits to leave the entity',
        'A present obligation of the entity to transfer an economic resource as a result of past events',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q8',
      kitRef: 8,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which is the best definition of an expense?',
      explanation: {
        en: `An expense is about its effect on equity: it makes the owners' share smaller, through assets going down or liabilities going up. Payments to the owners themselves are left out.
- "Any outflow": too wide. Repaying a loan is an outflow but not an expense.
- "An outflow caused by a third-party claim": too narrow and not the definition.
- "An outflow from buying resources": buying a van is not an expense, it gives you an asset.
= Answer: a decrease in assets or increase in liabilities that reduces equity, other than distributions to holders of equity claims
! Common trap: paying a dividend reduces equity, but it is a payment to owners, so it is not an expense.`,
        ru: `Расход определяется через влияние на капитал: он уменьшает долю владельцев, когда активы падают или обязательства растут. Выплаты самим владельцам исключаются.
- «Любой отток»: слишком широко. Возврат займа — отток, но не расход.
- «Отток из-за требования третьей стороны»: слишком узко и это не определение.
- «Отток на покупку ресурсов»: покупка фургона не расход, она даёт актив.
= Ответ: уменьшение активов или увеличение обязательств, снижающее капитал, кроме распределений держателям капитала
! Частая ошибка: выплата дивидендов уменьшает капитал, но это выплата владельцам, поэтому не расход.`,
        uz: `Xarajat kapitalga ta'siri orqali aniqlanadi: aktivlar kamayib yoki majburiyatlar oshib, egalar ulushi kamayadi. Egalarning o'ziga to'lovlar chiqarib tashlanadi.
- «Har qanday chiqim»: juda keng. Qarzni qaytarish chiqim, lekin xarajat emas.
- «Uchinchi shaxs talabidan chiqim»: juda tor va bu ta'rif emas.
- «Resurs sotib olishga chiqim»: furgon sotib olish xarajat emas, u aktiv beradi.
= Javob: kapitalni kamaytiradigan aktivlar kamayishi yoki majburiyatlar oshishi, kapital egalariga taqsimlashdan tashqari
! Ko'p uchraydigan xato: dividend to'lash kapitalni kamaytiradi, lekin bu egalarga to'lov, shuning uchun xarajat emas.`,
      },
      options: [
        'Any outflow of economic benefits in a period',
        'A decrease in assets or increase in liabilities that reduces equity, other than distributions to holders of equity claims',
        'An outflow caused by a claim from a third party',
        'An outflow from buying resources in a period',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q9',
      kitRef: 9,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement about a partnership is true?',
      explanation: {
        en: `A partnership is NOT a separate legal person. In law, the partners are the business.
- Jointly owned and managed by the partners: true.
- A separate legal entity: false, only a company is.
- Can sell shares to the public: false, it has no shares.
- Owns property in its own name: false, the property belongs to the partners.
= Answer: the partners jointly own and manage it`,
        ru: `Товарищество — НЕ отдельное юридическое лицо. По закону партнёры и есть бизнес.
- Совместно владеют и управляют партнёры: верно.
- Отдельное юридическое лицо: неверно, это только компания.
- Может продавать акции публике: неверно, акций нет.
- Владеет имуществом от своего имени: неверно, имущество принадлежит партнёрам.
= Ответ: партнёры совместно владеют им и управляют`,
        uz: `Sheriklik alohida yuridik shaxs EMAS. Qonun bo'yicha sheriklarning o'zi biznes.
- Sheriklar birga egalik qiladi va boshqaradi: to'g'ri.
- Alohida yuridik shaxs: noto'g'ri, bu faqat kompaniya.
- Aksiyalarni ommaga sota oladi: noto'g'ri, aksiyalari yo'q.
- Mulkka o'z nomidan egalik qiladi: noto'g'ri, mulk sheriklarniki.
= Javob: sheriklar unga birga egalik qiladi va boshqaradi`,
      },
      options: [
        'The partners jointly own and manage it',
        'It is a separate legal entity',
        'It can sell shares to the public',
        'It owns property in its own name',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch01-q10',
      kitRef: 10,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement about a sole trader is true?',
      explanation: {
        en: `A sole trader is free to run the business as they like, but carries all the risk.
- May not employ staff: false, a sole trader can employ any number of people.
- Limited liability: false, liability is unlimited.
- Can put in or take out capital at any time: true, nobody else needs to agree.
- Only one location: false, they can trade from as many places as they want.
= Answer: they can put in or take out capital whenever they choose`,
        ru: `Индивидуальный предприниматель свободно ведёт бизнес, но несёт весь риск.
- Не может нанимать сотрудников: неверно, может нанять сколько угодно.
- Ограниченная ответственность: неверно, ответственность неограниченная.
- Может вносить или забирать капитал когда угодно: верно, ничьё согласие не нужно.
- Только одно место работы: неверно, мест может быть сколько угодно.
= Ответ: может вносить или забирать капитал, когда захочет`,
        uz: `Yakka tadbirkor biznesni xohlagancha yuritadi, lekin butun xavfni o'zi ko'taradi.
- Xodim yollay olmaydi: noto'g'ri, istalgancha yollay oladi.
- Cheklangan javobgarlik: noto'g'ri, javobgarlik cheklanmagan.
- Kapitalni istalgan vaqt qo'yishi yoki olishi mumkin: to'g'ri, hech kimning roziligi kerak emas.
- Faqat bitta joy: noto'g'ri, xohlagancha joyda ishlashi mumkin.
= Javob: kapitalni xohlagan vaqtda qo'yishi yoki olishi mumkin`,
      },
      options: [
        'They may not employ staff',
        'They have limited liability for business debts',
        'They can put in or take out capital whenever they choose',
        'They can trade from only one location',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q11',
      kitRef: 11,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement about a limited liability company is true?',
      explanation: {
        en: `A company is its own legal person, separate from its shareholders. So it can do things in its own name.
- Cannot buy assets in its own name: false, it can.
- Can take on liabilities in its own name: true, for example a bank loan in the company's name.
- Has no liabilities of its own: false.
- Set up informally: false, a company must be formally registered (incorporated).
= Answer: it can take on liabilities in its own name`,
        ru: `Компания — самостоятельное юридическое лицо, отдельное от акционеров. Поэтому она действует от своего имени.
- Не может покупать активы на своё имя: неверно, может.
- Может брать обязательства на своё имя: верно, например банковский заём на имя компании.
- Своих обязательств у неё нет: неверно.
- Создаётся неформально: неверно, компанию нужно официально зарегистрировать.
= Ответ: она может брать на себя обязательства от своего имени`,
        uz: `Kompaniya aksiyadorlaridan alohida, o'z yuridik shaxsiga ega. Shuning uchun o'z nomidan ish qiladi.
- O'z nomiga aktiv ola olmaydi: noto'g'ri, oladi.
- O'z nomidan majburiyat ola oladi: to'g'ri, masalan kompaniya nomiga bank qarzi.
- O'z majburiyatlari yo'q: noto'g'ri.
- Norasmiy tuziladi: noto'g'ri, kompaniya rasman ro'yxatdan o'tishi kerak.
= Javob: o'z nomidan majburiyat ola oladi`,
      },
      options: [
        'It cannot buy assets in its own name',
        'It can take on liabilities in its own name',
        'It has no liabilities of its own',
        'It can be set up informally by agreement among its first shareholders',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q12',
      kitRef: 12,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Compare a partnership of twenty people with a company that has twenty equal shareholders. Which statement is true?',
      explanation: {
        en: `Compare the rights of the owners in each case.
- Both own assets in their own name: false, only the company can. A partnership's assets belong to the partners.
- Shareholders have a right to manage: false, they manage only if they are also directors.
- Partners have a right to manage, shareholders do not: true.
- Same capital rules: false, companies have strict rules on putting in and taking out capital.
= Answer: partners have a right to join in management, but company members do not`,
        ru: `Сравните права владельцев в каждом случае.
- Оба владеют активами от своего имени: неверно, только компания. Активы товарищества принадлежат партнёрам.
- Акционеры вправе управлять: неверно, только если они ещё и директора.
- Партнёры вправе управлять, акционеры нет: верно.
- Одинаковые правила о капитале: неверно, у компаний строгие правила внесения и изъятия капитала.
= Ответ: партнёры вправе участвовать в управлении, а члены компании — нет`,
        uz: `Har holatda egalarning huquqlarini solishtiring.
- Ikkalasi o'z nomidan aktivga ega: noto'g'ri, faqat kompaniya. Sheriklik aktivlari sheriklarniki.
- Aksiyadorlar boshqarish huquqiga ega: noto'g'ri, faqat direktor ham bo'lsa.
- Sheriklar boshqarishi mumkin, aksiyadorlar yo'q: to'g'ri.
- Kapital qoidalari bir xil: noto'g'ri, kompaniyalarda kapital qo'yish va olishning qat'iy qoidalari bor.
= Javob: sheriklar boshqaruvda qatnashish huquqiga ega, kompaniya a'zolari esa yo'q`,
      },
      options: [
        'Both can own assets in their own name',
        'Company members have a right to join in management, but partners do not',
        'Partners have a right to join in management, but company members do not',
        'Both follow the same rules on introducing and withdrawing capital',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q13',
      kitRef: 13,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which item would NOT appear in a sole trader\'s capital?',
      explanation: {
        en: `Note the word NOT. A sole trader is not a company, so think about what only companies have.
- Capital account: yes, this is the sole trader's equity.
- Drawings: yes, they reduce the capital account.
- Equity share capital: no. Only companies issue shares.
- Revaluation surplus: yes, a sole trader can revalue an asset, and the gain goes into capital.
= Answer: equity share capital`,
        ru: `Обратите внимание на слово NOT. Индивидуальный предприниматель — не компания, подумайте, что есть только у компаний.
- Счёт капитала: да, это капитал предпринимателя.
- Изъятия: да, они уменьшают капитал.
- Акционерный капитал: нет. Акции выпускают только компании.
- Резерв переоценки: да, предприниматель может переоценить актив, прирост идёт в капитал.
= Ответ: акционерный капитал`,
        uz: `NOT so'ziga e'tibor bering. Yakka tadbirkor kompaniya emas, faqat kompaniyalarda nima borligini o'ylang.
- Kapital hisobi: ha, bu tadbirkor kapitali.
- Olib qo'yishlar: ha, ular kapitalni kamaytiradi.
- Aksiya kapitali: yo'q. Aksiyani faqat kompaniyalar chiqaradi.
- Qayta baholash rezervi: ha, tadbirkor aktivni qayta baholashi mumkin, o'sish kapitalga tushadi.
= Javob: aksiya kapitali`,
      },
      options: ['Capital account', 'Personal drawings', 'Equity share capital', 'Revaluation surplus'],
      correctIndex: 2,
    },
    {
      id: 'ch01-q14',
      kitRef: 14,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which pair would you expect to see in a partnership\'s financial statements?',
      explanation: {
        en: `Sort the items: which belong to companies and which to partnerships?
- Dividends paid and share premium: company items only, because only companies have shares.
- Capital accounts: each partner has one.
- Profit appropriation account: shows how a partnership's profit is shared between the partners.
= Answer: capital accounts and profit appropriation account`,
        ru: `Разложите статьи: что относится к компаниям, а что к товариществам?
- Дивиденды и эмиссионный доход: только у компаний, потому что акции есть только у них.
- Счета капитала: у каждого партнёра свой.
- Счёт распределения прибыли: показывает, как прибыль товарищества делится между партнёрами.
= Ответ: счета капитала и счёт распределения прибыли`,
        uz: `Moddalarni ajrating: qaysi biri kompaniyaga, qaysi biri sheriklikka tegishli?
- Dividendlar va emissiya daromadi: faqat kompaniyada, chunki aksiya faqat ularda bor.
- Kapital hisoblari: har bir sherikda bittadan.
- Foydani taqsimlash hisobi: sheriklik foydasi sheriklar o'rtasida qanday bo'linishini ko'rsatadi.
= Javob: kapital hisoblari va foydani taqsimlash hisobi`,
      },
      options: [
        'Dividends paid and share premium',
        'Profit appropriation account and dividends paid',
        'Capital accounts and profit appropriation account',
        'Share premium and capital accounts',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q15',
      kitRef: 15,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which is the best definition of an asset?',
      explanation: {
        en: `The full Framework definition has three parts, and only one option has all three.
# The three parts of an asset
  A present economic resource (a right that can bring benefits)
  controlled by the entity (control, not legal ownership)
  as a result of past events
- "Owned and has financial value": says owned, not controlled, and misses past events.
- "Controlled as a result of past events": misses "present economic resource".
- "Controlled and expected to bring future benefits": the old wording, missing past events.
= Answer: a present economic resource controlled by the entity as a result of past events
! Common trap: an asset is what you control, not only what you own. A machine on a long lease can be an asset.`,
        ru: `В полном определении три части, и все три есть только в одном варианте.
# Три части актива
  Существующий экономический ресурс (право, способное приносить выгоды)
  контролируемый организацией (контроль, а не юридическая собственность)
  в результате прошлых событий
- «Принадлежит и имеет стоимость»: сказано «принадлежит», а не «контролируется», и нет прошлых событий.
- «Контролируется в результате прошлых событий»: нет «существующего экономического ресурса».
- «Контролируется и принесёт выгоды в будущем»: старая формулировка без прошлых событий.
= Ответ: существующий экономический ресурс, контролируемый организацией в результате прошлых событий
! Частая ошибка: актив — то, что вы контролируете, а не только то, чем владеете. Станок в долгосрочной аренде может быть активом.`,
        uz: `To'liq ta'rif uch qismdan iborat va uchalasi faqat bitta variantda bor.
# Aktivning uch qismi
  Mavjud iqtisodiy resurs (naf keltira oladigan huquq)
  korxona nazoratida (nazorat, huquqiy mulk emas)
  o'tgan voqealar natijasida
- «Tegishli va qiymatga ega»: «nazoratda» emas «tegishli» deyilgan, o'tgan voqealar yo'q.
- «O'tgan voqealar natijasida nazoratda»: «mavjud iqtisodiy resurs» yo'q.
- «Nazoratda va kelajakda naf keltiradi»: eski ifoda, o'tgan voqealar yo'q.
= Javob: o'tgan voqealar natijasida korxona nazorat qiladigan mavjud iqtisodiy resurs
! Ko'p uchraydigan xato: aktiv — faqat egaligingizdagi emas, nazoratingizdagi narsa. Uzoq muddatli ijaradagi dastgoh aktiv bo'lishi mumkin.`,
      },
      options: [
        'A resource owned by the entity that has a financial value',
        'A present economic resource controlled by the entity as a result of past events',
        'A resource controlled by the entity as a result of past events',
        'A resource controlled by the entity that is expected to bring future benefits',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q16',
      kitRef: 16,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best describes the equity or capital of a business?',
      explanation: {
        en: `Equity is what would be left for the owners if all the debts were paid out of the assets.
# The accounting equation
  Assets = liabilities + equity
  So equity = assets - liabilities, which is called net assets
- Total assets: forgets the liabilities.
- Market value of the business: what someone would pay for it, which can be very different.
- Value of the assets: the same mistake as total assets.
= Answer: the net assets of the business`,
        ru: `Капитал — это то, что осталось бы владельцам, если бы все долги оплатили из активов.
# Основное уравнение учёта
  Активы = обязательства + капитал
  Значит капитал = активы - обязательства, это и есть чистые активы
- Все активы: забыты обязательства.
- Рыночная стоимость бизнеса: сколько за него заплатили бы, а это может сильно отличаться.
- Стоимость активов: та же ошибка, что и «все активы».
= Ответ: чистые активы бизнеса`,
        uz: `Kapital — barcha qarzlar aktivlardan to'langanda egalarga qoladigan qism.
# Hisob tenglamasi
  Aktivlar = majburiyatlar + kapital
  Demak kapital = aktivlar - majburiyatlar, bu sof aktivlar deyiladi
- Jami aktivlar: majburiyatlar unutilgan.
- Biznesning bozor qiymati: uning uchun qancha to'lashlari, bu juda farq qilishi mumkin.
- Aktivlar qiymati: «jami aktivlar» bilan bir xil xato.
= Javob: biznesning sof aktivlari`,
      },
      options: [
        'The total assets of the business',
        'The market value of the business',
        'The net assets of the business',
        'The value of the assets of the business',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q17',
      kitRef: 17,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'Mark each statement about a partnership as true or false.',
      explanation: {
        en: `Go through the partnership facts one by one.
- Limited liability for partners: FALSE. Partners have unlimited liability for all the debts.
- A partner is an employee: FALSE. A partner is an owner.
- Each partner may take part in management: TRUE, unless the partners agree otherwise.
- A formal written agreement is compulsory: FALSE. It is a good idea, but not required by law.`,
        ru: `Пройдём по фактам о товариществе по одному.
- Ограниченная ответственность партнёров: НЕВЕРНО. Партнёры неограниченно отвечают по всем долгам.
- Партнёр — сотрудник: НЕВЕРНО. Партнёр — владелец.
- Каждый партнёр может участвовать в управлении: ВЕРНО, если партнёры не договорились иначе.
- Письменный договор обязателен: НЕВЕРНО. Он полезен, но закон его не требует.`,
        uz: `Sheriklik haqidagi faktlarni birma-bir ko'rib chiqamiz.
- Sheriklarning cheklangan javobgarligi: NOTO'G'RI. Sheriklar barcha qarzlar uchun cheklanmagan javob beradi.
- Sherik — xodim: NOTO'G'RI. Sherik — ega.
- Har bir sherik boshqaruvda qatnasha oladi: TO'G'RI, sheriklar boshqacha kelishmagan bo'lsa.
- Yozma shartnoma majburiy: NOTO'G'RI. U foydali, lekin qonun talab qilmaydi.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Each partner has limited liability for partnership debts', correctIndex: 1 },
        { text: 'A partner is an employee of the partnership', correctIndex: 1 },
        { text: 'Each partner may take part in managing the business', correctIndex: 0 },
        { text: 'All partners must sign a formal written partnership agreement', correctIndex: 1 },
      ],
    },
    {
      id: 'ch01-q18',
      kitRef: 18,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'Decide whether each statement applies to a limited liability company or a partnership.',
      explanation: {
        en: `Ask of each statement: does it need a separate legal person or shares?
- Owners earn a dividend: COMPANY. Dividends are paid on shares.
- The business does not own assets or owe liabilities in its own name: PARTNERSHIP, because it is not a separate legal person.
- No external audit needed: PARTNERSHIP. Companies usually must be audited.
- Borrowing secured by a floating charge: COMPANY. Floating charges are generally not available to partnerships.`,
        ru: `Спросите про каждое утверждение: нужно ли отдельное юрлицо или акции?
- Владельцы получают дивиденды: КОМПАНИЯ. Дивиденды платят по акциям.
- Бизнес не владеет активами и не имеет обязательств от своего имени: ТОВАРИЩЕСТВО, оно не отдельное юрлицо.
- Внешний аудит не нужен: ТОВАРИЩЕСТВО. Компании обычно обязаны проходить аудит.
- Заём под плавающий залог: КОМПАНИЯ. Товариществам плавающий залог обычно недоступен.`,
        uz: `Har bir fikr haqida so'rang: alohida yuridik shaxs yoki aksiya kerakmi?
- Egalar dividend oladi: KOMPANIYA. Dividend aksiyalar bo'yicha to'lanadi.
- Biznes o'z nomidan aktivga ega emas va majburiyati yo'q: SHERIKLIK, u alohida yuridik shaxs emas.
- Tashqi audit kerak emas: SHERIKLIK. Kompaniyalar odatda auditdan o'tishi shart.
- Suzuvchi garov ostidagi qarz: KOMPANIYA. Sherikliklarga suzuvchi garov odatda berilmaydi.`,
      },
      columns: ['Limited liability company', 'Partnership'],
      rows: [
        { text: 'Owners can earn a dividend on their investment', correctIndex: 0 },
        { text: 'The business does not own assets or owe liabilities in its own name', correctIndex: 1 },
        { text: 'Annual statements do not need an external audit', correctIndex: 1 },
        { text: 'Borrowing can be secured by a floating charge', correctIndex: 0 },
      ],
    },
    {
      id: 'ch01-q19',
      kitRef: 19,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which aspect of a company\'s annual statements is likely to matter most to a bank considering a long-term loan?',
      explanation: {
        en: `Put yourself in the bank's place. A long-term loan is repaid over many years, so the bank's question is: will this company still be able to pay its debts for years to come? That is solvency.
- Issued share capital: says little about repaying a loan.
- Short-term profitability: one good year does not prove long-term repayment.
- Changes in senior management: not the main financial question.
= Answer: solvency`,
        ru: `Представьте себя на месте банка. Долгосрочный заём возвращают много лет, поэтому вопрос банка: сможет ли компания платить по долгам ещё много лет? Это платёжеспособность.
- Выпущенный акционерный капитал: мало говорит о возврате займа.
- Краткосрочная прибыльность: один хороший год не доказывает возврат в долгосрочной перспективе.
- Смена руководства: не главный финансовый вопрос.
= Ответ: платёжеспособность`,
        uz: `O'zingizni bank o'rnida tasavvur qiling. Uzoq muddatli qarz ko'p yil davomida qaytariladi, shuning uchun bank savoli: kompaniya yana ko'p yil qarzlarini to'lay oladimi? Bu to'lov qobiliyati.
- Chiqarilgan aksiya kapitali: qarz qaytarilishi haqida kam narsa aytadi.
- Qisqa muddatli rentabellik: bitta yaxshi yil uzoq muddatda qaytarishni isbotlamaydi.
- Rahbariyat almashuvi: asosiy moliyaviy savol emas.
= Javob: to'lov qobiliyati`,
      },
      options: [
        'Solvency',
        'The total of issued share capital',
        'Short-term profitability',
        'Changes in senior management',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch01-q20',
      kitRef: 20,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which aspect of a company\'s annual statements is likely to matter most to a potential investor?',
      explanation: {
        en: `Put yourself in the investor's place. An investor buys shares to earn a return, through dividends and a rising share price, and both depend on profit now and in the future.
- Carrying amount of property: does not show the return.
- Solvency: matters most to lenders.
- New products: may help profit later, but profit itself is what the investor looks at.
= Answer: current and future profitability`,
        ru: `Представьте себя на месте инвестора. Инвестор покупает акции ради дохода: дивидендов и роста цены акций, а оба зависят от прибыли сейчас и в будущем.
- Балансовая стоимость имущества: доход не показывает.
- Платёжеспособность: важнее всего кредиторам.
- Новые продукты: могут помочь прибыли позже, но смотрит инвестор на саму прибыль.
= Ответ: текущая и будущая прибыльность`,
        uz: `O'zingizni investor o'rnida tasavvur qiling. Investor daromad uchun aksiya oladi: dividendlar va aksiya narxi o'sishi, ikkalasi ham hozirgi va kelajakdagi foydaga bog'liq.
- Mulkning balans qiymati: daromadni ko'rsatmaydi.
- To'lov qobiliyati: qarz beruvchilar uchun eng muhim.
- Yangi mahsulotlar: keyinroq foydaga yordam berishi mumkin, lekin investor foydaning o'ziga qaraydi.
= Javob: hozirgi va kelajakdagi rentabellik`,
      },
      options: [
        'The carrying amount of property, plant and equipment',
        'Current and future profitability',
        'Solvency',
        'Whether new products have been developed',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q21',
      kitRef: 21,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best explains consistency in preparing annual financial statements?',
      explanation: {
        en: `Consistency means doing things the same way, everywhere and every time.
- Same language each year: not what consistency is about.
- Profit or loss and financial position only: too narrow, it leaves out the notes.
- All items, including the notes, both during the year and from year to year: the complete meaning.
- Applying IFRS each year: required anyway, but that is not consistency.
= Answer: presenting and classifying all items, including the notes, the same way during the year and from year to year`,
        ru: `Последовательность — делать всё одинаково, везде и каждый раз.
- Один язык каждый год: последовательность не об этом.
- Только прибыль или убыток и финансовое положение: слишком узко, забыты примечания.
- Все статьи, включая примечания, в течение года и из года в год: полное значение.
- Применять МСФО каждый год: это и так требуется, но это не последовательность.
= Ответ: одинаковое представление и классификация всех статей, включая примечания, в течение года и из года в год`,
        uz: `Izchillik — hamma joyda va har safar bir xil qilish.
- Har yili bir xil til: izchillik bu haqda emas.
- Faqat foyda yoki zarar va moliyaviy holat: juda tor, izohlar unutilgan.
- Barcha moddalar, izohlar bilan, yil davomida va yildan yilga: to'liq ma'no.
- Har yili MSFOni qo'llash: bu baribir talab qilinadi, lekin bu izchillik emas.
= Javob: barcha moddalarni, izohlar bilan birga, yil davomida va yildan yilga bir xil ko'rsatish va tasniflash`,
      },
      options: [
        'Using the same language and terminology each year',
        'Presenting and classifying items the same way in profit or loss and financial position only',
        'Presenting and classifying all items, including the notes, the same way during the year and from year to year',
        'Applying IFRS Accounting Standards from one year to the next',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q22',
      kitRef: 22,
      topicId: 'chapter-01',
      type: 'single',
      text: 'An "entity-specific aspect of relevance" depends on the nature or size of items in that entity\'s report. Which principle is this?',
      explanation: {
        en: `"Depends on the nature or size of items in that entity" describes materiality: whether something is big enough, or important enough, to change a user's decision.
# Example
  A $500 error matters to a small shop with a $5,000 profit
  The same $500 means nothing to a group with a $50 million profit
- Going concern, business entity and prudence do not depend on the size of an item.
= Answer: materiality`,
        ru: `«Зависит от характера или размера статей этой организации» — это существенность: достаточно ли что-то велико или важно, чтобы изменить решение пользователя.
# Пример
  Ошибка $500 важна для небольшого магазина с прибылью $5,000
  Те же $500 ничего не значат для группы с прибылью $50 миллионов
- Непрерывность, обособленность бизнеса и осмотрительность не зависят от размера статьи.
= Ответ: существенность`,
        uz: `«Shu korxonadagi moddalarning tabiati yoki hajmiga bog'liq» — bu muhimlik: biror narsa foydalanuvchi qarorini o'zgartirishga yetarlicha katta yoki muhimmi.
# Misol
  $500 xato foydasi $5,000 bo'lgan kichik do'kon uchun muhim
  Xuddi shu $500 foydasi $50 million bo'lgan guruh uchun hech narsa emas
- Uzluksizlik, biznesning alohidaligi va ehtiyotkorlik modda hajmiga bog'liq emas.
= Javob: muhimlik`,
      },
      options: ['Going concern', 'Business entity', 'Materiality', 'Prudence'],
      correctIndex: 2,
    },
    {
      id: 'ch01-q23',
      kitRef: 23,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best describes the principle of consistency?',
      explanation: {
        en: `Consistency works in two directions: the same treatment within a period, and the same treatment from one period to the next.
- Within a period only: half of it.
- From period to period only: the other half.
- Financial position items only: too narrow, it covers everything.
= Answer: treat transactions consistently both within a period and from one period to another`,
        ru: `Последовательность действует в двух направлениях: одинаковый учёт внутри периода и одинаковый учёт от периода к периоду.
- Только внутри периода: половина правила.
- Только от периода к периоду: другая половина.
- Только статьи финансового положения: слишком узко, правило охватывает всё.
= Ответ: учитывать операции последовательно и внутри периода, и от периода к периоду`,
        uz: `Izchillik ikki yo'nalishda ishlaydi: davr ichida bir xil hisob va davrdan davrga bir xil hisob.
- Faqat davr ichida: qoidaning yarmi.
- Faqat davrdan davrga: ikkinchi yarmi.
- Faqat moliyaviy holat moddalari: juda tor, qoida hamma narsani qamraydi.
= Javob: operatsiyalarni davr ichida ham, davrdan davrga ham izchil hisobga olish`,
      },
      options: [
        'Treat transactions consistently within a period only',
        'Treat transactions consistently from one period to the next only',
        'Treat only items in the statement of financial position consistently',
        'Treat transactions consistently both within a period and from one period to another',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q24',
      kitRef: 24,
      topicId: 'chapter-01',
      type: 'single',
      text: 'A shop owner pays for a family holiday from personal savings and keeps it out of the shop\'s records. Which principle is being applied?',
      explanation: {
        en: `The holiday is the owner's private life, not the shop's business. The business entity principle says the accounts show only the business, so private spending stays out.
- Prudence: about caution under uncertainty.
- Going concern: about whether the business will continue.
- Materiality: about whether an amount is big enough to matter.
= Answer: business entity`,
        ru: `Отпуск — личная жизнь владельца, а не дело магазина. Принцип обособленности бизнеса говорит: в учёте только бизнес, личные траты не попадают.
- Осмотрительность: про осторожность при неопределённости.
- Непрерывность: про то, продолжит ли бизнес работать.
- Существенность: про то, достаточно ли велика сумма, чтобы иметь значение.
= Ответ: обособленность бизнеса`,
        uz: `Ta'til — egasining shaxsiy hayoti, do'kon ishi emas. Biznesning alohidaligi tamoyili: hisobda faqat biznes, shaxsiy xarajatlar kirmaydi.
- Ehtiyotkorlik: noaniqlikda ehtiyot bo'lish haqida.
- Uzluksizlik: biznes davom etadimi, shu haqida.
- Muhimlik: summa ahamiyatli bo'lishga yetarlicha kattami, shu haqida.
= Javob: biznesning alohidaligi`,
      },
      options: ['Prudence', 'Business entity', 'Going concern', 'Materiality'],
      correctIndex: 1,
    },
    {
      id: 'ch01-q25',
      kitRef: 25,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'In which financial statement does each item belong?',
      explanation: {
        en: `Ask: is the item about the year's performance, or about the position on one day?
- Expenses: performance over the year, so the statement of profit or loss.
- Equity: what belongs to the owners on the last day, so the statement of financial position.`,
        ru: `Спросите: статья о результатах за год или о положении на один день?
- Расходы: результаты за год, значит отчёт о прибыли или убытке.
- Капитал: что принадлежит владельцам в последний день, значит отчёт о финансовом положении.`,
        uz: `So'rang: modda yil natijasi haqidami yoki bir kundagi holat haqidami?
- Xarajatlar: yil natijasi, demak foyda yoki zarar hisoboti.
- Kapital: oxirgi kunda egalarga tegishli narsa, demak moliyaviy holat hisoboti.`,
      },
      columns: ['Statement of profit or loss', 'Statement of financial position'],
      rows: [
        { text: 'Expenses', correctIndex: 0 },
        { text: 'Equity', correctIndex: 1 },
      ],
    },
    {
      id: 'ch01-q26',
      kitRef: 26,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best explains the going concern principle?',
      explanation: {
        en: `Going concern is an assumption: we reasonably expect the business to keep operating, so we prepare the accounts on that basis. Nobody can promise it.
- "Guaranteed to continue": no business is guaranteed. Healthy-looking firms can still fail.
- "Will end its operations": the opposite of going concern.
- "Not expected to continue": also the opposite.
= Answer: there is a reasonable expectation that the business will continue operating for the foreseeable future
! Common trap: watch for "guaranteed". Going concern is an expectation, never a guarantee.`,
        ru: `Непрерывность — это допущение: мы обоснованно ожидаем, что бизнес продолжит работу, и готовим отчётность на этой основе. Гарантировать это никто не может.
- «Гарантированно продолжит»: гарантий не бывает. Даже здоровые на вид фирмы прогорают.
- «Прекратит деятельность»: противоположность непрерывности.
- «Не ожидается, что продолжит»: тоже противоположность.
= Ответ: есть обоснованное ожидание, что бизнес продолжит работать в обозримом будущем
! Частая ошибка: следите за словом «гарантированно». Непрерывность — ожидание, а не гарантия.`,
        uz: `Uzluksizlik — bu taxmin: biznes ishlashda davom etishini asosli kutamiz va hisobotni shunga ko'ra tuzamiz. Buni hech kim kafolatlay olmaydi.
- «Albatta davom etadi»: kafolat yo'q. Sog'lom ko'ringan firmalar ham kuyadi.
- «Faoliyatini to'xtatadi»: uzluksizlikning teskarisi.
- «Davom etishi kutilmaydi»: bu ham teskarisi.
= Javob: biznes yaqin kelajakda ishlashda davom etishiga asosli umid bor
! Ko'p uchraydigan xato: «kafolatlangan» so'ziga e'tibor bering. Uzluksizlik — umid, kafolat emas.`,
      },
      options: [
        'The business is guaranteed to continue for the foreseeable future',
        'The business will end its operations within the foreseeable future',
        'There is a reasonable expectation that the business will continue operating for the foreseeable future',
        'The business is not expected to continue for the foreseeable future',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q27',
      kitRef: 27,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best explains historical cost?',
      explanation: {
        en: `Historical cost is the price actually paid on the day the asset was bought. It does not change when prices change.
- Current market value: today's price, not the original one.
- Replacement cost: what a new one would cost now.
- Net realisable value: what it would sell for, less selling costs.
= Answer: the amount paid for an asset when it was bought
! Example: shelves bought for $3,000 stay at $3,000 in the records even if new ones now cost $3,500.`,
        ru: `Историческая стоимость — цена, фактически уплаченная в день покупки актива. Она не меняется, когда меняются цены.
- Текущая рыночная стоимость: сегодняшняя цена, а не первоначальная.
- Стоимость замещения: сколько стоил бы новый сейчас.
- Чистая стоимость реализации: за сколько можно продать, минус расходы на продажу.
= Ответ: сумма, уплаченная за актив при покупке
! Пример: полки, купленные за $3,000, остаются в учёте по $3,000, даже если новые теперь стоят $3,500.`,
        uz: `Tarixiy qiymat — aktiv sotib olingan kuni haqiqatda to'langan narx. Narxlar o'zgarganda u o'zgarmaydi.
- Joriy bozor qiymati: bugungi narx, dastlabkisi emas.
- Almashtirish qiymati: hozir yangisi qancha turishi.
- Sof sotish qiymati: qanchaga sotish mumkinligi, minus sotish xarajatlari.
= Javob: aktiv sotib olinganda u uchun to'langan summa
! Misol: $3,000 ga olingan javonlar yangilari endi $3,500 tursa ham, hisobda $3,000 da qoladi.`,
      },
      options: [
        'The current market value of an asset',
        'The cost of replacing an asset',
        'The net realisable value of an asset',
        'The amount paid for an asset when it was bought',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q28',
      kitRef: 28,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Goods reached a shop before the year end and are in closing inventory. Their invoice came after the year end, but a liability was recorded for it. Which concept is applied?',
      explanation: {
        en: `The shop already has the goods, so it already owes the supplier, even though the invoice has not arrived. Under accruals, the cost and the liability are recorded when the goods are received, not when the paperwork comes.
- Consistency: about treating things the same way each time.
- Materiality: about size.
- Historical cost: about the value used, not the timing.
= Answer: accruals
! Why it matters: if purchases waited for invoices, a business could make its year-end figures look better just by delaying paperwork.`,
        ru: `Товар уже у магазина, значит магазин уже должен поставщику, хотя счёт ещё не пришёл. По методу начисления расход и обязательство записывают при получении товара, а не при получении документов.
- Последовательность: про одинаковый подход каждый раз.
- Существенность: про размер.
- Историческая стоимость: про то, по какой стоимости, а не когда.
= Ответ: начисление
! Почему это важно: если ждать счетов, бизнес мог бы улучшить цифры на конец года, просто задерживая документы.`,
        uz: `Tovar allaqachon do'konda, demak do'kon yetkazib beruvchiga allaqachon qarz, hisob-faktura hali kelmagan bo'lsa ham. Hisoblash usuli bo'yicha xarajat va majburiyat hujjat kelganda emas, tovar olinganda yoziladi.
- Izchillik: har safar bir xil yondashuv haqida.
- Muhimlik: hajm haqida.
- Tarixiy qiymat: qaysi qiymatda ekani haqida, qachonligi haqida emas.
= Javob: hisoblash
! Nega muhim: hisob-fakturani kutsa, biznes hujjatlarni kechiktirib, yil oxiri raqamlarini yaxshiroq ko'rsatishi mumkin edi.`,
      },
      options: ['Consistency', 'Accruals', 'Materiality', 'Historical cost'],
      correctIndex: 1,
    },
    {
      id: 'ch01-q29',
      kitRef: 29,
      topicId: 'chapter-01',
      type: 'single',
      text: 'A shop owner takes care never to show the shop\'s assets and income as too high, or its liabilities and expenses as too low. Which principle is this?',
      explanation: {
        en: `Not showing things as better than they really are, by being careful with assets, income, liabilities and expenses, is the description of prudence.
- Materiality: about size, not caution.
- Going concern: about the business continuing.
- Business entity: about keeping private affairs out.
= Answer: prudence`,
        ru: `Не показывать дела лучше, чем они есть, осторожно оценивая активы, доходы, обязательства и расходы, — это описание осмотрительности.
- Существенность: про размер, а не осторожность.
- Непрерывность: про продолжение работы бизнеса.
- Обособленность бизнеса: про отделение личных дел.
= Ответ: осмотрительность`,
        uz: `Ishlarni bor holidan yaxshiroq ko'rsatmaslik, aktivlar, daromadlar, majburiyatlar va xarajatlarga ehtiyotkorlik bilan baho berish — bu ehtiyotkorlik ta'rifi.
- Muhimlik: hajm haqida, ehtiyotkorlik haqida emas.
- Uzluksizlik: biznes davom etishi haqida.
- Biznesning alohidaligi: shaxsiy ishlarni ajratish haqida.
= Javob: ehtiyotkorlik`,
      },
      options: ['Materiality', 'Going concern', 'Prudence', 'Business entity'],
      correctIndex: 2,
    },
    {
      id: 'ch01-q30',
      kitRef: 30,
      topicId: 'chapter-01',
      type: 'single',
      text: 'A shop buys a laptop by debit card, so one balance rises and another falls. Which concept does this show?',
      explanation: {
        en: `Every transaction has two effects. Here: the shop gains a laptop (an asset goes up) and its bank balance falls (another asset goes down). That two-sided effect is duality, the basis of double entry.
- Materiality, historical cost and going concern do not describe "one goes up, another goes down".
= Answer: duality`,
        ru: `У каждой операции два эффекта. Здесь у магазина появляется ноутбук (актив растёт), а остаток в банке падает (другой актив уменьшается). Этот двусторонний эффект — двойственность, основа двойной записи.
- Существенность, историческая стоимость и непрерывность не описывают «одно растёт, другое падает».
= Ответ: двойственность`,
        uz: `Har bir operatsiyaning ikki ta'siri bor. Bu yerda do'konda noutbuk paydo bo'ladi (aktiv oshadi), bankdagi qoldiq kamayadi (boshqa aktiv kamayadi). Bu ikki tomonlama ta'sir — ikki yoqlamalik, ikki yoqlama yozuv asosi.
- Muhimlik, tarixiy qiymat va uzluksizlik «biri oshadi, boshqasi kamayadi»ni tasvirlamaydi.
= Javob: ikki yoqlamalik`,
      },
      options: ['Duality', 'Materiality', 'Historical cost', 'Going concern'],
      correctIndex: 0,
    },
    {
      id: 'ch01-q31',
      kitRef: 31,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Transactions are recorded according to their commercial reality rather than their strict legal form. Which concept is this?',
      explanation: {
        en: `"Commercial reality rather than legal form" is the definition of substance over form: show what the deal really is, not just what the contract calls it.
- Offsetting: about netting amounts together.
- Going concern and business entity: not about legal form at all.
= Answer: substance over form`,
        ru: `«Экономическая суть, а не юридическая форма» — это определение приоритета содержания над формой: показывать, что сделка значит на деле, а не только как её называет договор.
- Взаимозачёт: про сворачивание сумм.
- Непрерывность и обособленность бизнеса: вообще не про юридическую форму.
= Ответ: приоритет содержания над формой`,
        uz: `«Huquqiy shakl emas, iqtisodiy mohiyat» — shakldan mazmunning ustunligi ta'rifi: bitim shartnomada qanday atalganini emas, aslida nima ekanini ko'rsatish.
- O'zaro hisob-kitob: summalarni bir-biridan ayirish haqida.
- Uzluksizlik va biznesning alohidaligi: huquqiy shakl haqida umuman emas.
= Javob: shakldan mazmunning ustunligi`,
      },
      options: ['Offsetting', 'Substance over form', 'Going concern', 'Business entity'],
      correctIndex: 1,
    },
    {
      id: 'ch01-q32',
      kitRef: 32,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement about prudence is correct?',
      explanation: {
        en: `Prudence is caution when you are not sure. It is not permission to make things look worse.
- Caution when judging under uncertainty: correct.
- "Assets and income must not be understated": the opposite way round. Prudence stops them being overstated.
- "Allows liabilities or expenses to be overstated": no, deliberate overstatement is bias.
- "Asymmetric recognition": prudence does not require this.
= Answer: it requires caution when making judgements under uncertainty`,
        ru: `Осмотрительность — осторожность, когда вы не уверены. Это не разрешение ухудшать картину.
- Осторожность в суждениях при неопределённости: верно.
- «Активы и доходы нельзя занижать»: наоборот. Осмотрительность не даёт их завышать.
- «Разрешает завышать обязательства или расходы»: нет, нарочное завышение — предвзятость.
- «Асимметричное признание»: осмотрительность этого не требует.
= Ответ: она требует осторожности в суждениях в условиях неопределённости`,
        uz: `Ehtiyotkorlik — ishonchingiz komil bo'lmaganda ehtiyot bo'lish. Bu vaziyatni yomonlashtirib ko'rsatishga ruxsat emas.
- Noaniqlikda ehtiyotkor baho berish: to'g'ri.
- «Aktiv va daromadni kamaytirib bo'lmaydi»: aksincha. Ehtiyotkorlik ularni oshirib yuborishga yo'l qo'ymaydi.
- «Majburiyat yoki xarajatni oshirishga ruxsat beradi»: yo'q, ataylab oshirish — xolislikning yo'qligi.
- «Assimetrik tan olish»: ehtiyotkorlik buni talab qilmaydi.
= Javob: noaniqlikda baho berishda ehtiyotkorlikni talab qiladi`,
      },
      options: [
        'It requires caution when making judgements under uncertainty',
        'It means assets and income must not be understated',
        'It allows liabilities or expenses to be overstated',
        'It requires assets and liabilities to be recognised asymmetrically',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch01-q33',
      kitRef: 33,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement is correct?',
      explanation: {
        en: `Test each statement.
- Going concern guarantees 12 months: false, it is an expectation, not a guarantee.
- The law requires legal form always: false, substance over form wins.
- Rising prices: historical cost keeps assets at old, lower prices, so assets look too small. Goods sold are charged at old, lower costs, so profit looks too big. True.
- Revaluation surplus credited in the statement of cash flows: false, a revaluation involves no cash. It goes to other comprehensive income.
= Answer: when prices are rising, historical cost tends to understate assets and overstate profits`,
        ru: `Проверим каждое утверждение.
- Непрерывность гарантирует 12 месяцев: неверно, это ожидание, а не гарантия.
- Закон всегда требует юридической формы: неверно, побеждает содержание.
- Рост цен: по исторической стоимости активы остаются по старым низким ценам, и выглядят слишком маленькими. Проданный товар списывается по старой низкой цене, и прибыль выглядит слишком большой. Верно.
- Резерв переоценки в отчёте о движении денег: неверно, в переоценке нет денег. Она идёт в прочий совокупный доход.
= Ответ: при росте цен историческая стоимость обычно занижает активы и завышает прибыль`,
        uz: `Har bir fikrni tekshiramiz.
- Uzluksizlik 12 oyni kafolatlaydi: noto'g'ri, bu umid, kafolat emas.
- Qonun doim huquqiy shaklni talab qiladi: noto'g'ri, mazmun ustun.
- Narxlar oshganda: tarixiy qiymatda aktivlar eski past narxda qoladi va juda kichik ko'rinadi. Sotilgan tovar eski past tannarxda hisoblanadi va foyda juda katta ko'rinadi. To'g'ri.
- Qayta baholash rezervi pul oqimlari hisobotida: noto'g'ri, qayta baholashda pul yo'q. U boshqa umumlashgan daromadga tushadi.
= Javob: narxlar oshganda tarixiy qiymat odatda aktivlarni kamaytirib, foydani oshirib ko'rsatadi`,
      },
      options: [
        'Going concern guarantees that a business will survive for at least 12 months after the reporting date',
        'The law requires the legal form of a transaction always to be reflected',
        'When prices are rising, historical cost tends to understate assets and overstate profits',
        'A revaluation surplus is credited in the statement of cash flows',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q34',
      kitRef: 34,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement best explains faithful representation in annual financial statements?',
      explanation: {
        en: `Faithful representation means the figures show what really happened, the commercial substance, not just the legal form and not whatever looks best.
- "Any way considered appropriate": that allows bias.
- "To maximise profit" and "to maximise asset values": that is bias, the opposite of neutral.
= Answer: transactions are shown to reflect their commercial substance rather than their legal form`,
        ru: `Правдивое представление — цифры показывают, что произошло на самом деле, экономическую суть, а не только юридическую форму и не то, что выглядит лучше.
- «Как сочтут нужным»: это открывает дорогу предвзятости.
- «Максимизировать прибыль» и «максимизировать стоимость активов»: это предвзятость, противоположность нейтральности.
= Ответ: операции показываются по их экономической сути, а не юридической форме`,
        uz: `Haqqoniy aks ettirish — raqamlar haqiqatda nima bo'lganini, iqtisodiy mohiyatni ko'rsatadi, faqat huquqiy shaklni yoki yaxshi ko'rinadiganini emas.
- «Qanday maqbul ko'rilsa»: bu xolislikning yo'qligiga yo'l ochadi.
- «Foydani oshirish» va «aktivlar qiymatini oshirish»: bu xolislikning teskarisi.
= Javob: operatsiyalar huquqiy shakli emas, iqtisodiy mohiyati bo'yicha ko'rsatiladi`,
      },
      options: [
        'Transactions are shown in any way considered appropriate',
        'Transactions are shown so as to maximise profit',
        'Transactions are shown to reflect their commercial substance rather than their legal form',
        'Transactions are shown so as to maximise asset values',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q35',
      kitRef: 35,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which concept supports carrying non-current assets at cost less accumulated depreciation, rather than at their forced sale value?',
      explanation: {
        en: `If the business is going to keep going, it will keep using its assets for their whole useful lives. So we show them at cost less depreciation. Forced sale values only matter if the business is closing down.
- Comparability, prudence and relevance do not explain why we ignore forced sale values.
= Answer: going concern`,
        ru: `Если бизнес продолжит работать, он будет пользоваться активами весь срок службы. Поэтому мы показываем их по стоимости минус амортизация. Цены срочной продажи важны, только если бизнес закрывается.
- Сопоставимость, осмотрительность и уместность не объясняют, почему мы не берём цену срочной продажи.
= Ответ: непрерывность деятельности`,
        uz: `Biznes ishlashda davom etsa, aktivlardan butun foydali muddati davomida foydalanadi. Shuning uchun ularni qiymat minus amortizatsiyada ko'rsatamiz. Majburiy sotuv narxi faqat biznes yopilayotgan bo'lsa muhim.
- Taqqoslanuvchanlik, ehtiyotkorlik va tegishlilik nega majburiy sotuv narxini olmasligimizni tushuntirmaydi.
= Javob: uzluksizlik`,
      },
      options: ['Going concern', 'Comparability', 'Prudence', 'Relevance'],
      correctIndex: 0,
    },
    {
      id: 'ch01-q36',
      kitRef: 36,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'Classify each characteristic according to the Conceptual Framework.',
      explanation: {
        en: `Learn the two lists by heart.
# Fundamental (2)
  Relevance, faithful representation
# Enhancing (4)
  Comparability, verifiability, timeliness, understandability
- Comparability: enhancing.
- Timeliness: enhancing.
- Faithful representation: fundamental.
- Understandability: enhancing.`,
        ru: `Выучите два списка наизусть.
# Фундаментальные (2)
  Уместность, правдивое представление
# Улучшающие (4)
  Сопоставимость, проверяемость, своевременность, понятность
- Сопоставимость: улучшающая.
- Своевременность: улучшающая.
- Правдивое представление: фундаментальная.
- Понятность: улучшающая.`,
        uz: `Ikki ro'yxatni yod oling.
# Asosiy (2)
  Tegishlilik, haqqoniy aks ettirish
# Kuchaytiruvchi (4)
  Taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik
- Taqqoslanuvchanlik: kuchaytiruvchi.
- O'z vaqtidalik: kuchaytiruvchi.
- Haqqoniy aks ettirish: asosiy.
- Tushunarlilik: kuchaytiruvchi.`,
      },
      columns: ['Fundamental', 'Enhancing'],
      rows: [
        { text: 'Comparability', correctIndex: 1 },
        { text: 'Timeliness', correctIndex: 1 },
        { text: 'Faithful representation', correctIndex: 0 },
        { text: 'Understandability', correctIndex: 1 },
      ],
    },
    {
      id: 'ch01-q37',
      kitRef: 37,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'According to the Conceptual Framework, is each characteristic an enhancing characteristic?',
      explanation: {
        en: `Same two lists, asked the other way round.
# Fundamental (2): relevance, faithful representation
# Enhancing (4): comparability, verifiability, timeliness, understandability
- Relevance: fundamental, so NOT enhancing.
- Comparability: enhancing.
- Faithful representation: fundamental, so NOT enhancing.
- Verifiability: enhancing.`,
        ru: `Те же два списка, вопрос наоборот.
# Фундаментальные (2): уместность, правдивое представление
# Улучшающие (4): сопоставимость, проверяемость, своевременность, понятность
- Уместность: фундаментальная, значит НЕ улучшающая.
- Сопоставимость: улучшающая.
- Правдивое представление: фундаментальная, значит НЕ улучшающая.
- Проверяемость: улучшающая.`,
        uz: `Xuddi shu ikki ro'yxat, savol teskari.
# Asosiy (2): tegishlilik, haqqoniy aks ettirish
# Kuchaytiruvchi (4): taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik
- Tegishlilik: asosiy, demak kuchaytiruvchi EMAS.
- Taqqoslanuvchanlik: kuchaytiruvchi.
- Haqqoniy aks ettirish: asosiy, demak kuchaytiruvchi EMAS.
- Tekshiriluvchanlik: kuchaytiruvchi.`,
      },
      columns: ['Enhancing', 'Not enhancing'],
      rows: [
        { text: 'Relevance', correctIndex: 1 },
        { text: 'Comparability', correctIndex: 0 },
        { text: 'Faithful representation', correctIndex: 1 },
        { text: 'Verifiability', correctIndex: 0 },
      ],
    },
    {
      id: 'ch01-q38',
      kitRef: 38,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which pair are the two fundamental qualitative characteristics?',
      explanation: {
        en: `The two fundamental characteristics are relevance and faithful representation. Learn this pair.
- Prudence: a concept, not a qualitative characteristic.
- Materiality: part of relevance, not a separate characteristic.
- Comparability: enhancing, not fundamental.
= Answer: relevance and faithful representation`,
        ru: `Две фундаментальные характеристики — уместность и правдивое представление. Выучите эту пару.
- Осмотрительность: принцип, а не качественная характеристика.
- Существенность: часть уместности, а не отдельная характеристика.
- Сопоставимость: улучшающая, а не фундаментальная.
= Ответ: уместность и правдивое представление`,
        uz: `Ikki asosiy xususiyat — tegishlilik va haqqoniy aks ettirish. Bu juftlikni yod oling.
- Ehtiyotkorlik: tamoyil, sifat xususiyati emas.
- Muhimlik: tegishlilikning qismi, alohida xususiyat emas.
- Taqqoslanuvchanlik: kuchaytiruvchi, asosiy emas.
= Javob: tegishlilik va haqqoniy aks ettirish`,
      },
      options: [
        'Relevance and prudence',
        'Faithful representation and materiality',
        'Relevance and faithful representation',
        'Faithful representation and comparability',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch01-q39',
      kitRef: 39,
      topicId: 'chapter-01',
      type: 'matrix',
      text: 'Classify each characteristic according to the Conceptual Framework.',
      explanation: {
        en: `Use the two lists.
- Understandability: makes useful information even more useful, so enhancing.
- Faithful representation: one of the two essentials, so fundamental.`,
        ru: `Используйте два списка.
- Понятность: делает полезную информацию ещё полезнее, значит улучшающая.
- Правдивое представление: одна из двух обязательных, значит фундаментальная.`,
        uz: `Ikki ro'yxatdan foydalaning.
- Tushunarlilik: foydali ma'lumotni yanada foydali qiladi, demak kuchaytiruvchi.
- Haqqoniy aks ettirish: ikki asosiydan biri, demak asosiy.`,
      },
      columns: ['Fundamental', 'Enhancing'],
      rows: [
        { text: 'Understandability', correctIndex: 1 },
        { text: 'Faithful representation', correctIndex: 0 },
      ],
    },
    {
      id: 'ch01-q40',
      kitRef: 40,
      topicId: 'chapter-01',
      type: 'multi',
      text: 'Select the TWO enhancing qualitative characteristics.',
      explanation: {
        en: `Pick the two that are on the enhancing list (comparability, verifiability, timeliness, understandability).
- Relevance: fundamental, not enhancing.
- Timeliness: enhancing.
- Going concern: an underlying assumption, not a qualitative characteristic at all.
- Comparability: enhancing.
= Answer: timeliness and comparability`,
        ru: `Выберите две из улучшающего списка (сопоставимость, проверяемость, своевременность, понятность).
- Уместность: фундаментальная, не улучшающая.
- Своевременность: улучшающая.
- Непрерывность: базовое допущение, вообще не качественная характеристика.
- Сопоставимость: улучшающая.
= Ответ: своевременность и сопоставимость`,
        uz: `Kuchaytiruvchi ro'yxatdagi ikkitasini tanlang (taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik).
- Tegishlilik: asosiy, kuchaytiruvchi emas.
- O'z vaqtidalik: kuchaytiruvchi.
- Uzluksizlik: asosiy taxmin, umuman sifat xususiyati emas.
- Taqqoslanuvchanlik: kuchaytiruvchi.
= Javob: o'z vaqtidalik va taqqoslanuvchanlik`,
      },
      options: ['Relevance', 'Timeliness', 'Going concern', 'Comparability'],
      correctIndices: [1, 3],
    },
    {
      id: 'ch01-q41',
      kitRef: 41,
      topicId: 'chapter-01',
      type: 'multi',
      text: 'Select the TWO fundamental qualitative characteristics.',
      explanation: {
        en: `The two fundamental characteristics are relevance and faithful representation.
- Faithful representation: fundamental.
- Verifiability: enhancing.
- Relevance: fundamental.
- Reliability: the trap. It is the old name, replaced by faithful representation, and it is not on the current list.
= Answer: faithful representation and relevance`,
        ru: `Две фундаментальные характеристики — уместность и правдивое представление.
- Правдивое представление: фундаментальная.
- Проверяемость: улучшающая.
- Уместность: фундаментальная.
- Надёжность: ловушка. Это старое название, его заменило правдивое представление, в текущем списке его нет.
= Ответ: правдивое представление и уместность`,
        uz: `Ikki asosiy xususiyat — tegishlilik va haqqoniy aks ettirish.
- Haqqoniy aks ettirish: asosiy.
- Tekshiriluvchanlik: kuchaytiruvchi.
- Tegishlilik: asosiy.
- Ishonchlilik: tuzoq. Bu eski nom, uning o'rniga haqqoniy aks ettirish kelgan, hozirgi ro'yxatda yo'q.
= Javob: haqqoniy aks ettirish va tegishlilik`,
      },
      options: ['Faithful representation', 'Verifiability', 'Relevance', 'Reliability'],
      correctIndices: [0, 2],
    },
    {
      id: 'ch01-q42',
      kitRef: 42,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Statement 1: Relevance is a fundamental qualitative characteristic. Statement 2: Reliability is a fundamental qualitative characteristic. Which is correct?',
      explanation: {
        en: `Check each statement against the list of two: relevance and faithful representation.
- Statement 1: relevance is fundamental. True.
- Statement 2: reliability is not on the list (faithful representation replaced it). False.
= Answer: statement 1 only`,
        ru: `Сверьте каждое утверждение со списком из двух: уместность и правдивое представление.
- Утверждение 1: уместность фундаментальная. Верно.
- Утверждение 2: надёжности в списке нет (её заменило правдивое представление). Неверно.
= Ответ: только утверждение 1`,
        uz: `Har bir fikrni ikki xususiyatli ro'yxat bilan solishtiring: tegishlilik va haqqoniy aks ettirish.
- 1-fikr: tegishlilik asosiy. To'g'ri.
- 2-fikr: ishonchlilik ro'yxatda yo'q (uning o'rniga haqqoniy aks ettirish kelgan). Noto'g'ri.
= Javob: faqat 1-fikr`,
      },
      options: ['Both statements', 'Statement 1 only', 'Neither statement', 'Statement 2 only'],
      correctIndex: 1,
    },
    {
      id: 'ch01-q43',
      kitRef: 43,
      topicId: 'chapter-01',
      type: 'multi',
      text: 'Select the TWO enhancing qualitative characteristics.',
      explanation: {
        en: `Pick the two on the enhancing list (comparability, verifiability, timeliness, understandability).
- Materiality: part of relevance, not enhancing.
- Understandability: enhancing.
- Historical cost: a way of measuring, not a characteristic.
- Verifiability: enhancing.
= Answer: understandability and verifiability`,
        ru: `Выберите две из улучшающего списка (сопоставимость, проверяемость, своевременность, понятность).
- Существенность: часть уместности, не улучшающая.
- Понятность: улучшающая.
- Историческая стоимость: способ оценки, а не характеристика.
- Проверяемость: улучшающая.
= Ответ: понятность и проверяемость`,
        uz: `Kuchaytiruvchi ro'yxatdagi ikkitasini tanlang (taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik).
- Muhimlik: tegishlilikning qismi, kuchaytiruvchi emas.
- Tushunarlilik: kuchaytiruvchi.
- Tarixiy qiymat: o'lchash usuli, xususiyat emas.
- Tekshiriluvchanlik: kuchaytiruvchi.
= Javob: tushunarlilik va tekshiriluvchanlik`,
      },
      options: ['Materiality', 'Understandability', 'Historical cost', 'Verifiability'],
      correctIndices: [1, 3],
    },
    {
      id: 'ch01-q44',
      kitRef: 44,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement defines relevance?',
      explanation: {
        en: `The test of relevance is simple: could this information change someone's decision?
- Available immediately: being fast is timeliness, not relevance.
- Available for use: being available does not make it matter.
- "Would have influenced users had it been available": the test is whether it CAN influence decisions now, not a guess about the past.
= Answer: information is relevant if it can influence users' decisions`,
        ru: `Проверка уместности проста: может ли эта информация изменить чьё-то решение?
- Доступна сразу: скорость — это своевременность, а не уместность.
- Доступна для использования: доступность не делает её важной.
- «Повлияла бы, если бы была доступна»: проверка в том, МОЖЕТ ли она влиять на решения сейчас, а не догадка о прошлом.
= Ответ: информация уместна, если может повлиять на решения пользователей`,
        uz: `Tegishlilik sinovi oddiy: bu ma'lumot kimningdir qarorini o'zgartira oladimi?
- Darhol mavjud: tezlik — o'z vaqtidalik, tegishlilik emas.
- Foydalanish uchun mavjud: mavjudlik uni muhim qilmaydi.
- «Mavjud bo'lganda ta'sir qilgan bo'lardi»: sinov hozir qarorga ta'sir qila OLADIMI, o'tmish haqidagi taxmin emas.
= Javob: ma'lumot foydalanuvchilar qaroriga ta'sir qila olsa, tegishli hisoblanadi`,
      },
      options: [
        'Information is relevant if it is available immediately',
        'Information is relevant if it can influence users\' decisions',
        'Information is relevant if it is available for use',
        'Information is relevant if it would have influenced users had it been available',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch01-q45',
      kitRef: 45,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Financial information should be presented so that it is easy to understand by whom?',
      explanation: {
        en: `The Framework assumes a reader who knows a reasonable amount about business and economics and is willing to study the information carefully.
- Any person at all: too low, accounts cannot be written for someone with no knowledge.
- A qualified accountant: too high, ordinary investors must be able to follow them.
- Business owners only: too narrow, many other users read them.
= Answer: a person with reasonable knowledge of business and economics`,
        ru: `Концептуальная основа предполагает читателя с разумными знаниями бизнеса и экономики, готового внимательно изучить информацию.
- Любой человек: слишком низко, отчётность нельзя писать для того, кто ничего не знает.
- Квалифицированный бухгалтер: слишком высоко, обычные инвесторы тоже должны разобраться.
- Только владельцы бизнеса: слишком узко, её читают многие другие.
= Ответ: человек с разумными знаниями бизнеса и экономики`,
        uz: `Kontseptual asos biznes va iqtisoddan yetarli bilimga ega, ma'lumotni diqqat bilan o'rganishga tayyor o'quvchini nazarda tutadi.
- Istalgan odam: juda past, hisobotni hech narsa bilmaydiganlar uchun yozib bo'lmaydi.
- Malakali buxgalter: juda yuqori, oddiy investorlar ham tushunishi kerak.
- Faqat biznes egalari: juda tor, uni boshqa ko'plar ham o'qiydi.
= Javob: biznes va iqtisoddan yetarli bilimga ega odam`,
      },
      options: [
        'Any person at all',
        'A professionally qualified accountant',
        'Business owners only',
        'A person with reasonable knowledge of business and economics',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch01-q46',
      kitRef: 46,
      topicId: 'chapter-01',
      type: 'single',
      text: 'Which statement defines faithful representation?',
      explanation: {
        en: `Faithful representation has two key ideas: neutral (no bias) and showing the commercial substance.
- Strict legal form: the opposite, substance beats form.
- No errors or omissions at all: too strict. It means free from material error, not perfect.
- Complete and accurate in every respect: also too strict, estimates are allowed if described as estimates.
= Answer: information is shown without bias and in line with its commercial substance`,
        ru: `У правдивого представления две ключевые идеи: нейтральность (без предвзятости) и показ экономической сути.
- Строгая юридическая форма: наоборот, суть важнее формы.
- Совсем без ошибок и пропусков: слишком строго. Имеется в виду без существенных ошибок, а не идеально.
- Полная и точная во всём: тоже слишком строго, оценки допустимы, если названы оценками.
= Ответ: информация показана без предвзятости и в соответствии с экономической сутью`,
        uz: `Haqqoniy aks ettirishning ikki asosiy g'oyasi: xolislik va iqtisodiy mohiyatni ko'rsatish.
- Qat'iy huquqiy shakl: aksincha, mohiyat shakldan ustun.
- Umuman xatosiz va kamchiliksiz: juda qat'iy. Muhim xatolarsiz degani, mukammal emas.
- Har jihatdan to'liq va aniq: bu ham juda qat'iy, taxminlar taxmin deb aytilsa ruxsat.
= Javob: ma'lumot xolis va iqtisodiy mohiyatiga mos ko'rsatilgan`,
      },
      options: [
        'Information is shown according to its strict legal form',
        'Information is shown with no errors or omissions at all',
        'Information is shown without bias and in line with its commercial substance',
        'Information must be complete and accurate in every respect',
      ],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
