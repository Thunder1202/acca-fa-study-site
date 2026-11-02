'use strict';

const LANG_KEY = 'acca-fa-lang';
const LANGS = ['en', 'ru', 'uz'];

const LABELS = {
  siteName: { en: 'Balanced', ru: 'Balanced', uz: 'Balanced' },
  home: { en: 'Course', ru: 'Курс', uz: 'Kurs' },
  practice: { en: 'Practice', ru: 'Практика', uz: 'Mashq' },
  weakAreas: { en: 'Weak points', ru: 'Слабые места', uz: 'Zaif joylar' },
  mockExam: { en: 'Mock exam', ru: 'Пробный экзамен', uz: 'Sinov imtihoni' },
  themeLabel: { en: 'Theme', ru: 'Тема', uz: 'Mavzu' },
  themeNaruto: { en: 'Naruto', ru: 'Naruto', uz: 'Naruto' },
  themeClean: { en: 'Clean', ru: 'Простая', uz: 'Oddiy' },
  heroEyebrow: { en: 'ACCA Financial Accounting (FA / F3)', ru: 'ACCA Финансовый учёт (FA / F3)', uz: 'ACCA Moliyaviy hisob (FA / F3)' },
  heroTitle: { en: 'Pass ACCA FA', ru: 'Сдай ACCA FA', uz: 'ACCA FA dan o\'t' },
  heroText: { en: 'Short lessons, every Exam Kit question rewritten, and a timed mock exam. In English, Russian and Uzbek.', ru: 'Короткие уроки, все вопросы Exam Kit в новой формулировке и пробный экзамен на время. На английском, русском и узбекском.', uz: 'Qisqa darslar, Exam Kit ning barcha savollari yangi ifodada va vaqtli sinov imtihoni. Ingliz, rus va o\'zbek tillarida.' },
  startHere: { en: 'Start chapter 1', ru: 'Начать главу 1', uz: '1-bobni boshlash' },
  continueWith: { en: 'Continue', ru: 'Продолжить', uz: 'Davom etish' },
  statChapters: { en: 'chapters', ru: 'глав', uz: 'bob' },
  statQuestions: { en: 'practice questions', ru: 'вопросов', uz: 'savol' },
  statCases: { en: 'case questions', ru: 'кейсов', uz: 'keys' },
  statDone: { en: 'chapters practised', ru: 'глав пройдено', uz: 'bob mashq qilingan' },
  group: { en: 'Part', ru: 'Часть', uz: 'Qism' },
  chapter: { en: 'Chapter', ru: 'Глава', uz: 'Bob' },
  explainMore: { en: 'Explain more', ru: 'Подробнее', uz: 'Batafsil' },
  bandBelow: { en: 'Below the pass mark', ru: 'Ниже проходного балла', uz: 'O\'tish balidan past' },
  bandPass: { en: 'Pass', ru: 'Сдано', uz: 'O\'tdi' },
  bandGood: { en: 'Good pass', ru: 'Хороший результат', uz: 'Yaxshi natija' },
  bandStrong: { en: 'Exam ready', ru: 'Готов к экзамену', uz: 'Imtihonga tayyor' },
  comingSoon: { en: 'Coming soon', ru: 'Скоро', uz: 'Tez orada' },
  notStarted: { en: 'Not started', ru: 'Не начато', uz: 'Boshlanmagan' },
  lastScore: { en: 'Last score', ru: 'Последний результат', uz: 'Oxirgi natija' },
  objectives: { en: 'What you will learn', ru: 'Чему вы научитесь', uz: 'Nimani o\'rganasiz' },
  example: { en: 'At Madina\'s Mart', ru: 'В магазине Madina\'s Mart', uz: 'Madina\'s Mart do\'konida' },
  glossary: { en: 'Key terms', ru: 'Ключевые термины', uz: 'Asosiy atamalar' },
  practiseTopic: { en: 'Practise this chapter', ru: 'Практика по главе', uz: 'Bob bo\'yicha mashq' },
  previousChapter: { en: 'Previous chapter', ru: 'Предыдущая глава', uz: 'Oldingi bob' },
  nextChapter: { en: 'Next chapter', ru: 'Следующая глава', uz: 'Keyingi bob' },
  questionsCount: { en: 'questions', ru: 'вопросов', uz: 'savol' },
  question: { en: 'Question', ru: 'Вопрос', uz: 'Savol' },
  of: { en: 'of', ru: 'из', uz: '/' },
  basedOnKit: { en: 'Based on Exam Kit Q', ru: 'По вопросу Exam Kit Q', uz: 'Exam Kit savoli Q' },
  basedOnKitB: { en: 'Based on Exam Kit Section B, question ', ru: 'По Exam Kit, раздел B, вопрос ', uz: 'Exam Kit B bo\'limi, savol ' },
  modeOne: { en: 'One at a time', ru: 'По одному', uz: 'Bittadan' },
  modeAll: { en: 'All at once', ru: 'Все сразу', uz: 'Hammasi birga' },
  modeNote: { en: 'Changing mode restarts this set.', ru: 'Смена режима начинает набор заново.', uz: 'Rejimni o\'zgartirish to\'plamni qaytadan boshlaydi.' },
  checkAnswer: { en: 'Check answer', ru: 'Проверить', uz: 'Tekshirish' },
  next: { en: 'Next', ru: 'Далее', uz: 'Keyingi' },
  finish: { en: 'See results', ru: 'Показать результат', uz: 'Natijani ko\'rish' },
  submitAll: { en: 'Submit all answers', ru: 'Отправить все ответы', uz: 'Barcha javoblarni yuborish' },
  stillToAnswer: { en: 'Still to answer:', ru: 'Осталось ответить:', uz: 'Javob berilmagan:' },
  selectTwo: { en: 'Select two answers', ru: 'Выберите два ответа', uz: 'Ikkita javobni tanlang' },
  correct: { en: 'Correct', ru: 'Верно', uz: 'To\'g\'ri' },
  incorrect: { en: 'Not quite', ru: 'Не совсем', uz: 'Unchalik emas' },
  otherLanguages: { en: 'Read in other languages', ru: 'Читать на других языках', uz: 'Boshqa tillarda o\'qish' },
  resultTitle: { en: 'Your result', ru: 'Ваш результат', uz: 'Natijangiz' },
  passNote: { en: 'The exam pass mark is 50%.', ru: 'Проходной балл экзамена — 50%.', uz: 'Imtihonning o\'tish bali 50%.' },
  practiseAgain: { en: 'Try again', ru: 'Ещё раз', uz: 'Yana urinish' },
  backToLesson: { en: 'Back to the chapter', ru: 'Назад к главе', uz: 'Bobga qaytish' },
  backToPractice: { en: 'Back to practice', ru: 'Назад к практике', uz: 'Mashqqa qaytish' },
  practiceTitle: { en: 'Practice', ru: 'Практика', uz: 'Mashq' },
  chooseTitle: { en: 'Choose a chapter', ru: 'Выберите главу', uz: 'Bobni tanlang' },
  studiedTitle: { en: 'What I have studied', ru: 'Что я уже изучил', uz: 'O\'rganganlarim' },
  studiedText: { en: 'A mixed set from every chapter you have already practised.', ru: 'Смешанный набор из всех глав, которые вы уже практиковали.', uz: 'Mashq qilgan barcha boblardan aralash to\'plam.' },
  studiedEmpty: { en: 'Finish a chapter\'s practice first, then it will appear here.', ru: 'Сначала пройдите практику по главе, и она появится здесь.', uz: 'Avval bob mashqini tugating, shunda u shu yerda chiqadi.' },
  weakTitle: { en: 'Weak points', ru: 'Слабые места', uz: 'Zaif joylar' },
  weakText: { en: 'Weakest first: untried chapters, then your lowest scores.', ru: 'Сначала самые слабые: неначатые главы, затем самые низкие результаты.', uz: 'Avval eng zaiflari: boshlanmagan boblar, keyin eng past natijalar.' },
  start: { en: 'Start', ru: 'Начать', uz: 'Boshlash' },
  notFound: { en: 'That page does not exist yet.', ru: 'Такой страницы пока нет.', uz: 'Bunday sahifa hali yo\'q.' },
  goHome: { en: 'Go to the course', ru: 'К курсу', uz: 'Kursga' },
  footerNote: { en: 'Independent study aid. Not affiliated with ACCA or the Naruto franchise.', ru: 'Независимое учебное пособие. Не связано с ACCA или франшизой Naruto.', uz: 'Mustaqil o\'quv qo\'llanma. ACCA yoki Naruto franshizasi bilan bog\'liq emas.' },
  correctAnswer: { en: 'Correct answer', ru: 'Правильный ответ', uz: 'To\'g\'ri javob' },
  examNotes: { en: 'Also tested in the exam', ru: 'Также бывает на экзамене', uz: 'Imtihonda bu ham so\'raladi' },
  numberOnly: { en: 'Enter a number, such as 1,250 or 4.58', ru: 'Введите число, например 1,250 или 4.58', uz: 'Raqam kiriting, masalan 1,250 yoki 4.58' },
  sectionA: { en: 'Section A: objective test questions', ru: 'Раздел A: тестовые вопросы', uz: 'A bo\'lim: test savollari' },
  sectionB: { en: 'Section B: case questions', ru: 'Раздел B: кейсы', uz: 'B bo\'lim: keyslar' },
  task: { en: 'Task', ru: 'Задание', uz: 'Topshiriq' },
  marks: { en: 'marks', ru: 'баллов', uz: 'ball' },
  mark: { en: 'mark', ru: 'балл', uz: 'ball' },
  caseScenario: { en: 'Scenario', ru: 'Условие', uz: 'Shart' },
  caseSeeAbove: { en: 'Uses the scenario above.', ru: 'Используйте условие выше.', uz: 'Yuqoridagi shartdan foydalaning.' },
  casesTitle: { en: 'Section B case questions', ru: 'Кейсы раздела B', uz: 'B bo\'lim keyslari' },
  casesText: { en: 'Each case has several tasks worth 15 marks, like the real exam.', ru: 'В каждом кейсе несколько заданий на 15 баллов, как на настоящем экзамене.', uz: 'Har bir keysda haqiqiy imtihondagidek 15 ballik bir nechta topshiriq bor.' },
  areaStatements: { en: 'Single company', ru: 'Одна компания', uz: 'Bitta kompaniya' },
  areaCashflows: { en: 'Cash flows', ru: 'Денежные потоки', uz: 'Pul oqimlari' },
  areaGroups: { en: 'Groups', ru: 'Группы', uz: 'Guruhlar' },
  examTitle: { en: 'Mock exam', ru: 'Пробный экзамен', uz: 'Sinov imtihoni' },
  examText: { en: 'Built like the real FA exam: 35 objective test questions worth 2 marks each, and 2 case questions worth 15 marks each. 100 marks, 2 hours, pass mark 50%. Questions are drawn from every chapter, so each paper is different.', ru: 'Как настоящий экзамен FA: 35 тестовых вопросов по 2 балла и 2 кейса по 15 баллов. 100 баллов, 2 часа, проходной балл 50%. Вопросы берутся из всех глав, поэтому каждый вариант разный.', uz: 'Haqiqiy FA imtihoni kabi: 2 ballik 35 test savoli va 15 ballik 2 keys. 100 ball, 2 soat, o\'tish bali 50%. Savollar barcha boblardan olinadi, shuning uchun har bir variant boshqacha.' },
  examRules: { en: 'The timer keeps running if you leave the page. Unanswered questions score zero. Answers and explanations appear after you submit.', ru: 'Таймер идёт, даже если вы уйдёте со страницы. Вопросы без ответа дают ноль. Ответы и объяснения появятся после отправки.', uz: 'Sahifadan chiqsangiz ham taymer ishlaydi. Javobsiz savollar nol ball. Javob va izohlar yuborgandan keyin chiqadi.' },
  examStart: { en: 'Start the mock exam', ru: 'Начать пробный экзамен', uz: 'Sinov imtihonini boshlash' },
  examContinue: { en: 'Continue my paper', ru: 'Продолжить мой вариант', uz: 'Variantimni davom ettirish' },
  examNew: { en: 'Start a new paper', ru: 'Начать новый вариант', uz: 'Yangi variant boshlash' },
  examSubmit: { en: 'Submit the exam', ru: 'Сдать экзамен', uz: 'Imtihonni topshirish' },
  tasksCount: { en: 'tasks', ru: 'заданий', uz: 'topshiriq' },
  timeAllowed: { en: 'hours allowed', ru: 'часа на экзамен', uz: 'soat beriladi' },
  timeLeft: { en: 'Time left', ru: 'Осталось', uz: 'Qolgan vaqt' },
  timeUp: { en: 'Time is up. Your paper has been marked.', ru: 'Время вышло. Ваш вариант проверен.', uz: 'Vaqt tugadi. Variantingiz tekshirildi.' },
  examPassed: { en: 'You passed this mock exam', ru: 'Вы сдали пробный экзамен', uz: 'Sinov imtihonidan o\'tdingiz' },
  examNotPassed: { en: 'Not passed yet', ru: 'Пока не сдано', uz: 'Hali o\'tilmadi' },
  byTopic: { en: 'Score by chapter', ru: 'Результат по главам', uz: 'Boblar bo\'yicha natija' },
  unanswered: { en: 'unanswered', ru: 'без ответа', uz: 'javobsiz' },
  reviewBelow: { en: 'Every question is marked below with an explanation.', ru: 'Ниже каждый вопрос проверен и объяснён.', uz: 'Quyida har bir savol tekshirilgan va izohlangan.' },
  backToExam: { en: 'Back to the mock exam', ru: 'Назад к пробному экзамену', uz: 'Sinov imtihoniga qaytish' },
};

function getLang(storage) {
  try {
    const saved = storage.getItem(LANG_KEY);
    return LANGS.includes(saved) ? saved : 'en';
  } catch {
    return 'en';
  }
}

function setLang(storage, lang) {
  try {
    storage.setItem(LANG_KEY, lang);
  } catch {
    // Without storage the choice simply lasts until the page is closed.
  }
}

function translate(field, lang) {
  return field[lang];
}

function label(key, lang) {
  return LABELS[key][lang];
}

if (typeof module !== 'undefined') module.exports = { getLang, setLang, translate, label, LABELS, LANGS };
else (globalThis.ACCA ??= {}).i18n = { getLang, setLang, translate, label, LABELS, LANGS };
