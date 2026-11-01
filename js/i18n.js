'use strict';

const LANG_KEY = 'acca-fa-lang';
const LANGS = ['en', 'ru', 'uz'];

const LABELS = {
  home: { en: 'Home', ru: 'Главная', uz: 'Bosh sahifa' },
  practice: { en: 'Practice', ru: 'Практика', uz: 'Mashq' },
  weakAreas: { en: 'Weak areas', ru: 'Слабые места', uz: 'Zaif joylar' },
  heroEyebrow: { en: 'ACCA Financial Accounting (FA / F3)', ru: 'ACCA Финансовый учёт (FA / F3)', uz: 'ACCA Moliyaviy hisob (FA / F3)' },
  heroTitle: { en: 'One chapter at a time, all the way to exam day.', ru: 'Глава за главой — до самого экзамена.', uz: 'Bob ketidan bob, imtihon kunigacha.' },
  heroText: { en: 'Learn each topic in order, follow Madina\'s shop as it grows, then practise straight away.', ru: 'Изучайте темы по порядку, следите за ростом магазина Мадины и сразу практикуйтесь.', uz: 'Mavzularni tartib bilan o\'rganing, Madina do\'koni o\'sishini kuzating va darhol mashq qiling.' },
  startHere: { en: 'Start chapter 1', ru: 'Начать главу 1', uz: '1-bobni boshlash' },
  continueWith: { en: 'Continue', ru: 'Продолжить', uz: 'Davom etish' },
  group: { en: 'Group', ru: 'Группа', uz: 'Guruh' },
  chapter: { en: 'Chapter', ru: 'Глава', uz: 'Bob' },
  comingSoon: { en: 'Coming soon', ru: 'Скоро', uz: 'Tez orada' },
  notStarted: { en: 'Not started', ru: 'Не начато', uz: 'Boshlanmagan' },
  lastScore: { en: 'Last score', ru: 'Последний результат', uz: 'Oxirgi natija' },
  objectives: { en: 'What you will learn', ru: 'Что вы изучите', uz: 'Nimani o\'rganasiz' },
  example: { en: 'At Madina\'s Mart', ru: 'В магазине Madina\'s Mart', uz: 'Madina\'s Mart do\'konida' },
  glossary: { en: 'Key terms', ru: 'Ключевые термины', uz: 'Asosiy atamalar' },
  practiseTopic: { en: 'Practise this topic', ru: 'Практика по теме', uz: 'Shu mavzuni mashq qilish' },
  previousChapter: { en: 'Previous chapter', ru: 'Предыдущая глава', uz: 'Oldingi bob' },
  nextChapter: { en: 'Next chapter', ru: 'Следующая глава', uz: 'Keyingi bob' },
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
  resultTitle: { en: 'Your result', ru: 'Ваш результат', uz: 'Natijangiz' },
  passNote: { en: 'The ACCA FA pass mark is 50%. Aim well above it in practice.', ru: 'Проходной балл ACCA FA — 50%. На практике стремитесь к большему.', uz: 'ACCA FA o\'tish bali 50%. Mashqda undan ancha yuqoriga intiling.' },
  practiseAgain: { en: 'Practise again', ru: 'Ещё раз', uz: 'Yana mashq qilish' },
  backToLesson: { en: 'Back to the lesson', ru: 'Вернуться к уроку', uz: 'Darsga qaytish' },
  backToPractice: { en: 'Back to practice', ru: 'Назад к практике', uz: 'Mashqqa qaytish' },
  practiceTitle: { en: 'Practice', ru: 'Практика', uz: 'Mashq' },
  chooseTitle: { en: 'Choose a topic', ru: 'Выберите тему', uz: 'Mavzuni tanlang' },
  chooseText: { en: 'Drill any topic you want, in any order.', ru: 'Тренируйте любую тему в любом порядке.', uz: 'Istalgan mavzuni istalgan tartibda mashq qiling.' },
  studiedTitle: { en: 'What I have studied', ru: 'Что я уже изучил', uz: 'O\'rganganlarim' },
  studiedText: { en: 'A mixed set from every topic you have already practised.', ru: 'Смешанный набор из всех тем, которые вы уже практиковали.', uz: 'Mashq qilgan barcha mavzulardan aralash to\'plam.' },
  studiedEmpty: { en: 'Finish a topic\'s practice first, then it will appear here.', ru: 'Сначала пройдите практику по теме, и она появится здесь.', uz: 'Avval mavzu mashqini tugating, shunda u shu yerda chiqadi.' },
  weakTitle: { en: 'Weak areas', ru: 'Слабые места', uz: 'Zaif joylar' },
  weakText: { en: 'Your topics, weakest first. Topics you have not tried come first, then your lowest last scores.', ru: 'Ваши темы, начиная с самых слабых: сначала неначатые, затем с самым низким последним результатом.', uz: 'Mavzularingiz, eng zaifidan boshlab: avval boshlanmaganlar, keyin oxirgi natijasi eng pastlari.' },
  start: { en: 'Start', ru: 'Начать', uz: 'Boshlash' },
  notFound: { en: 'That page does not exist yet.', ru: 'Такой страницы пока нет.', uz: 'Bunday sahifa hali yo\'q.' },
  goHome: { en: 'Go to the home page', ru: 'На главную', uz: 'Bosh sahifaga' },
  footerNote: { en: 'Independent study aid. Not affiliated with ACCA or Kaplan.', ru: 'Независимое учебное пособие. Не связано с ACCA или Kaplan.', uz: 'Mustaqil o\'quv qo\'llanma. ACCA yoki Kaplan bilan bog\'liq emas.' },
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
