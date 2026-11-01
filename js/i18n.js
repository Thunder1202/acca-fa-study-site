'use strict';

const LANG_KEY = 'acca-fa-lang';
const LANGS = ['en', 'ru', 'uz'];

const LABELS = {
  home: { en: 'Home', ru: 'Главная', uz: 'Bosh sahifa' },
  practice: { en: 'Training', ru: 'Тренировка', uz: 'Mashg\'ulot' },
  weakAreas: { en: 'Weak points', ru: 'Слабые места', uz: 'Zaif joylar' },
  heroEyebrow: { en: 'ACCA Financial Accounting (FA / F3)', ru: 'ACCA Финансовый учёт (FA / F3)', uz: 'ACCA Moliyaviy hisob (FA / F3)' },
  heroTitle: { en: 'Pass the exam, one mission at a time.', ru: 'Сдай экзамен, миссия за миссией.', uz: 'Imtihondan o\'t, missiya ketidan missiya.' },
  heroText: { en: 'Learn a topic. Train on it. Rank up.', ru: 'Изучи тему. Потренируйся. Повысь ранг.', uz: 'Mavzuni o\'rgan. Mashq qil. Darajangni oshir.' },
  startHere: { en: 'Start mission 1', ru: 'Начать миссию 1', uz: '1-missiyani boshlash' },
  continueWith: { en: 'Continue', ru: 'Продолжить', uz: 'Davom etish' },
  group: { en: 'Group', ru: 'Группа', uz: 'Guruh' },
  chapter: { en: 'Mission', ru: 'Миссия', uz: 'Missiya' },
  explainMore: { en: 'Explain more', ru: 'Подробнее', uz: 'Batafsil' },
  rankAcademy: { en: 'Academy student', ru: 'Ученик академии', uz: 'Akademiya o\'quvchisi' },
  rankGenin: { en: 'Genin', ru: 'Генин', uz: 'Genin' },
  rankChunin: { en: 'Chunin', ru: 'Чунин', uz: 'Chunin' },
  rankJonin: { en: 'Jonin', ru: 'Джонин', uz: 'Jonin' },
  comingSoon: { en: 'Coming soon', ru: 'Скоро', uz: 'Tez orada' },
  notStarted: { en: 'Not started', ru: 'Не начато', uz: 'Boshlanmagan' },
  lastScore: { en: 'Last score', ru: 'Последний результат', uz: 'Oxirgi natija' },
  objectives: { en: 'Mission goals', ru: 'Цели миссии', uz: 'Missiya maqsadlari' },
  example: { en: 'At Madina\'s Mart', ru: 'В магазине Madina\'s Mart', uz: 'Madina\'s Mart do\'konida' },
  glossary: { en: 'Key terms', ru: 'Ключевые термины', uz: 'Asosiy atamalar' },
  practiseTopic: { en: 'Start training', ru: 'Начать тренировку', uz: 'Mashg\'ulotni boshlash' },
  previousChapter: { en: 'Previous mission', ru: 'Предыдущая миссия', uz: 'Oldingi missiya' },
  nextChapter: { en: 'Next mission', ru: 'Следующая миссия', uz: 'Keyingi missiya' },
  questionsCount: { en: 'questions', ru: 'вопросов', uz: 'savol' },
  question: { en: 'Question', ru: 'Вопрос', uz: 'Savol' },
  of: { en: 'of', ru: 'из', uz: '/' },
  basedOnKit: { en: 'Based on Exam Kit Q', ru: 'По вопросу Exam Kit Q', uz: 'Exam Kit savoli Q' },
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
  resultTitle: { en: 'Mission report', ru: 'Отчёт о миссии', uz: 'Missiya hisoboti' },
  passNote: { en: 'Genin starts at 50%, the exam pass mark. Chunin 70%. Jonin 85%.', ru: 'Генин — от 50%, это проходной балл экзамена. Чунин — 70%. Джонин — 85%.', uz: 'Genin 50% dan, bu imtihon o\'tish bali. Chunin 70%. Jonin 85%.' },
  practiseAgain: { en: 'Train again', ru: 'Ещё раз', uz: 'Yana mashq qilish' },
  backToLesson: { en: 'Back to the mission', ru: 'Назад к миссии', uz: 'Missiyaga qaytish' },
  backToPractice: { en: 'Back to training', ru: 'Назад к тренировке', uz: 'Mashg\'ulotga qaytish' },
  practiceTitle: { en: 'Training ground', ru: 'Тренировочная площадка', uz: 'Mashg\'ulot maydoni' },
  chooseTitle: { en: 'Choose a topic', ru: 'Выберите тему', uz: 'Mavzuni tanlang' },
  chooseText: { en: 'Drill any topic you want, in any order.', ru: 'Тренируйте любую тему в любом порядке.', uz: 'Istalgan mavzuni istalgan tartibda mashq qiling.' },
  studiedTitle: { en: 'What I have studied', ru: 'Что я уже изучил', uz: 'O\'rganganlarim' },
  studiedText: { en: 'A mixed set from every topic you have already practised.', ru: 'Смешанный набор из всех тем, которые вы уже практиковали.', uz: 'Mashq qilgan barcha mavzulardan aralash to\'plam.' },
  studiedEmpty: { en: 'Finish a topic\'s practice first, then it will appear here.', ru: 'Сначала пройдите практику по теме, и она появится здесь.', uz: 'Avval mavzu mashqini tugating, shunda u shu yerda chiqadi.' },
  weakTitle: { en: 'Weak points', ru: 'Слабые места', uz: 'Zaif joylar' },
  weakText: { en: 'Weakest first: untried topics, then your lowest scores.', ru: 'Сначала самые слабые: неначатые темы, затем самые низкие результаты.', uz: 'Avval eng zaiflari: boshlanmagan mavzular, keyin eng past natijalar.' },
  start: { en: 'Start', ru: 'Начать', uz: 'Boshlash' },
  notFound: { en: 'That page does not exist yet.', ru: 'Такой страницы пока нет.', uz: 'Bunday sahifa hali yo\'q.' },
  goHome: { en: 'Go to the home page', ru: 'На главную', uz: 'Bosh sahifaga' },
  footerNote: { en: 'Independent study aid. Not affiliated with ACCA, Kaplan or Naruto.', ru: 'Независимое учебное пособие. Не связано с ACCA, Kaplan или Naruto.', uz: 'Mustaqil o\'quv qo\'llanma. ACCA, Kaplan yoki Naruto bilan bog\'liq emas.' },
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
