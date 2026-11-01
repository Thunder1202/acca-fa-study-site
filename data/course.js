'use strict';

const course = [
  {
    title: { en: 'Foundations of financial reporting', ru: 'Основы финансовой отчётности', uz: 'Moliyaviy hisobot asoslari' },
    chapters: [
      { number: 1, id: 'chapter-01', title: { en: 'Introduction to financial reporting', ru: 'Введение в финансовую отчётность', uz: 'Moliyaviy hisobotga kirish' } },
      { number: 2, id: 'chapter-02', title: { en: 'The regulatory framework', ru: 'Нормативная база', uz: 'Tartibga solish tizimi' } },
    ],
  },
  {
    title: { en: 'Double-entry and accounting systems', ru: 'Двойная запись и системы учёта', uz: 'Ikki yoqlama yozuv va hisob tizimlari' },
    chapters: [
      { number: 3, id: 'chapter-03', title: { en: 'Double-entry bookkeeping', ru: 'Двойная запись', uz: 'Ikki yoqlama yozuv' } },
    ],
  },
  {
    title: { en: 'Recording transactions and events', ru: 'Учёт операций и событий', uz: 'Operatsiya va voqealarni qayd etish' },
    chapters: [
      { number: 4, id: 'chapter-04', title: { en: 'Recording transactions and events', ru: 'Учёт операций и событий', uz: 'Operatsiya va voqealarni qayd etish' } },
      { number: 5, id: 'chapter-05', title: { en: 'Inventory', ru: 'Запасы', uz: 'Tovar zaxiralari' } },
      { number: 6, id: 'chapter-06', title: { en: 'Non-current assets: acquisition and depreciation', ru: 'Внеоборотные активы: приобретение и амортизация', uz: 'Uzoq muddatli aktivlar: sotib olish va amortizatsiya' } },
      { number: 7, id: 'chapter-07', title: { en: 'Non-current assets: disposal and revaluation', ru: 'Внеоборотные активы: выбытие и переоценка', uz: 'Uzoq muddatli aktivlar: chiqib ketish va qayta baholash' } },
      { number: 8, id: 'chapter-08', title: { en: 'Intangible assets', ru: 'Нематериальные активы', uz: 'Nomoddiy aktivlar' } },
      { number: 9, id: 'chapter-09', title: { en: 'Accruals and prepayments', ru: 'Начисления и предоплаты', uz: 'Hisoblangan va oldindan to\'langan xarajatlar' } },
      { number: 10, id: 'chapter-10', title: { en: 'Receivables', ru: 'Дебиторская задолженность', uz: 'Debitorlik qarzi' } },
      { number: 11, id: 'chapter-11', title: { en: 'Payables, provisions and contingent liabilities', ru: 'Кредиторская задолженность, резервы и условные обязательства', uz: 'Kreditorlik qarzi, zaxiralar va shartli majburiyatlar' } },
      { number: 12, id: 'chapter-12', title: { en: 'Capital structure and finance costs', ru: 'Структура капитала и финансовые расходы', uz: 'Kapital tuzilmasi va moliyaviy xarajatlar' } },
    ],
  },
  {
    title: { en: 'Reconciliations', ru: 'Сверки', uz: 'Solishtirishlar' },
    chapters: [
      { number: 13, id: 'chapter-13', title: { en: 'Reconciliations', ru: 'Сверки', uz: 'Solishtirishlar' } },
    ],
  },
  {
    title: { en: 'Preparing a trial balance', ru: 'Подготовка оборотной ведомости', uz: 'Sinov balansini tayyorlash' },
    chapters: [
      { number: 14, id: 'chapter-14', title: { en: 'The trial balance, errors and suspense accounts', ru: 'Оборотная ведомость, ошибки и счета неясных сумм', uz: 'Sinov balansi, xatolar va vaqtinchalik hisoblar' } },
    ],
  },
  {
    title: { en: 'Preparing financial statements', ru: 'Подготовка финансовой отчётности', uz: 'Moliyaviy hisobotni tayyorlash' },
    chapters: [
      { number: 15, id: 'chapter-15', title: { en: 'Preparing basic financial statements', ru: 'Подготовка базовой отчётности', uz: 'Asosiy moliyaviy hisobotni tayyorlash' } },
      { number: 16, id: 'chapter-16', title: { en: 'Incomplete records', ru: 'Неполные записи', uz: 'To\'liq bo\'lmagan yozuvlar' } },
      { number: 17, id: 'chapter-17', title: { en: 'Statement of cash flows', ru: 'Отчёт о движении денежных средств', uz: 'Pul oqimlari to\'g\'risidagi hisobot' } },
    ],
  },
  {
    title: { en: 'Interpretation of financial statements', ru: 'Анализ финансовой отчётности', uz: 'Moliyaviy hisobotni tahlil qilish' },
    chapters: [
      { number: 18, id: 'chapter-18', title: { en: 'Interpretation of financial statements', ru: 'Анализ финансовой отчётности', uz: 'Moliyaviy hisobotni tahlil qilish' } },
    ],
  },
  {
    title: { en: 'Consolidated financial statements', ru: 'Консолидированная отчётность', uz: 'Konsolidatsiyalangan hisobot' },
    chapters: [
      { number: 19, id: 'chapter-19', title: { en: 'Consolidated statement of financial position', ru: 'Консолидированный отчёт о финансовом положении', uz: 'Konsolidatsiyalangan moliyaviy holat hisoboti' } },
      { number: 20, id: 'chapter-20', title: { en: 'Consolidated statement of profit or loss and associates', ru: 'Консолидированный отчёт о прибыли или убытке и ассоциированные компании', uz: 'Konsolidatsiyalangan foyda yoki zarar hisoboti va assotsiatsiyalangan kompaniyalar' } },
    ],
  },
];

if (typeof module !== 'undefined') module.exports = course;
else (globalThis.ACCA ??= {}).course = course;
