'use strict';

(function () {
  const TOPIC = 'chapter-12';
  const PREFIX = 'ch12';

  const base = (kitRef, type, text, en, ru, uz) => ({ id: `${PREFIX}-q${kitRef}`, kitRef, topicId: TOPIC, type, text, explanation: { en, ru, uz } });
  const single = (kitRef, text, options, correctIndex, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'single', text, en, ru, uz), options, correctIndex, ...extra });
  const number = (kitRef, text, correctValue, answerText, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'number', text, en, ru, uz), correctValue, answerText, ...extra });
  const matrix = (kitRef, text, columns, rows, en, ru, uz) => ({ ...base(kitRef, 'matrix', text, en, ru, uz), columns, rows });
  const multi = (kitRef, text, options, correctIndices, en, ru, uz) => ({ ...base(kitRef, 'multi', text, en, ru, uz), options, correctIndices });
  const TF = ['True', 'False'];
  const T = 0;
  const F = 1;

  const questions = [
    matrix(275, 'State whether each statement about a rights issue is true or false.', TF, [
      { text: 'A rights issue capitalises reserves, which can be a disadvantage because it reduces the amount available for future dividends', correctIndex: F },
      { text: 'A rights issue is offered to existing shareholders, usually at a price below the nominal value of a share', correctIndex: F },
    ],
      `Capitalising reserves describes a bonus issue. A rights issue raises cash at a price below market value, not below nominal value.`,
      `Капитализация резервов — это бонусный выпуск. Выпуск прав привлекает деньги по цене ниже рыночной, а не ниже номинала.`,
      `Rezervlarni kapitallashtirish bonusli chiqarish. Huquqli chiqarish bozordan past narxda pul jalb qiladi, nominaldan past emas.`),
    multi(276, 'Which TWO items in the statement of financial position change immediately when redeemable preference shares are issued?',
      ['Bank', 'Retained earnings', 'Interest expense', 'Equity', 'Long-term debt'], [0, 4],
      `Cash comes in, so bank changes. Redeemable preference shares must be repaid, so they are long-term debt, not equity. Interest expense is not a statement of financial position item.`,
      `Деньги поступают, поэтому меняется банк. Погашаемые привилегированные акции надо вернуть, это долгосрочный долг, а не капитал. Процентный расход — не статья отчёта о финансовом положении.`,
      `Pul keladi, shuning uchun bank o'zgaradi. Qaytariladigan imtiyozli aksiyalar qaytarilishi kerak, demak uzoq muddatli qarz, kapital emas. Foiz xarajati moliyaviy holat hisoboti moddasi emas.`),
    single(277, 'A company\'s closing retained earnings are $412,640. Its profit for the year was $96,320. It paid last year\'s dividend of $15,400 during the year, and proposed a dividend of $17,000 at the year end, which shareholders had not approved by then. What are opening retained earnings?',
      ['$316,320', '$331,720', '$348,720', '$493,560'], 1,
      `Work backwards. Opening + profit - dividends paid = closing, so opening = $412,640 - $96,320 + $15,400 = $331,720. The unapproved proposal is not a liability, so it is ignored.`,
      `Идём назад. На начало + прибыль - выплаченные дивиденды = на конец, значит, на начало = $412,640 - $96,320 + $15,400 = $331,720. Неутверждённое предложение не обязательство, его не учитываем.`,
      `Orqaga hisoblaymiz. Boshlang'ich + foyda - to'langan dividendlar = yakuniy, demak boshlang'ich = $412,640 - $96,320 + $15,400 = $331,720. Tasdiqlanmagan taklif majburiyat emas, e'tiborga olinmaydi.`),
    number(278, 'A company had profit before tax of $84,000 and an income tax expense of $37,000. It paid a dividend of $26,000 in the year, and a revaluation of land created a surplus of $22,000. What amount is added to retained earnings for the year?', 21000, '$21,000',
      `Profit for the year is $84,000 - $37,000 = $47,000. Less the $26,000 dividend leaves $21,000. The revaluation goes to the revaluation surplus, not retained earnings.`,
      `Прибыль за год: $84,000 - $37,000 = $47,000. Минус дивиденд $26,000 — $21,000. Переоценка идёт в резерв переоценки, а не в нераспределённую прибыль.`,
      `Yil foydasi: $84,000 - $37,000 = $47,000. Minus $26,000 dividend — $21,000. Qayta baholash taqsimlanmagan foydaga emas, qayta baholash rezerviga o'tadi.`),
    single(279, 'Which of these would NOT appear in a statement of changes in equity?',
      ['Revaluation surplus', 'Dividends paid', 'Bank loans', 'Equity share capital'], 2,
      `A bank loan is a liability, not part of equity. The other three are equity items or movements in equity.`,
      `Банковский кредит — обязательство, а не часть капитала. Остальные три — статьи капитала или его движения.`,
      `Bank krediti majburiyat, kapital qismi emas. Qolgan uchtasi kapital moddalari yoki harakati.`),
    single(280, 'Which statement about preference shares is true?',
      ['All preference shares are liabilities', 'Irredeemable preference shares are equity, and redeemable preference shares are a liability', 'All preference shares are equity', 'Irredeemable preference shares are a liability, and redeemable preference shares are equity'], 1,
      `Classification depends on whether the shares must be repaid. Having to repay makes redeemable shares a liability. Irredeemable shares need not be repaid, so they are equity.`,
      `Классификация зависит от обязанности вернуть деньги. Погашаемые надо вернуть, это обязательство. Непогашаемые возвращать не нужно, это капитал.`,
      `Tasniflash qaytarish burchiga bog'liq. Qaytariladiganini qaytarish kerak, demak majburiyat. Qaytarilmaydiganini qaytarish shart emas, demak kapital.`),
    single(281, 'Which statement is true of a rights issue of shares?',
      ['No cash is received', 'Shares are issued for cash at the market price', 'A rights issue is not shown in a statement of cash flows', 'Shares are issued for cash at a price below the market price'], 3,
      `A rights issue raises cash from existing shareholders, usually below market price so that they take it up. Because cash comes in, it appears in the statement of cash flows.`,
      `Выпуск прав привлекает деньги от акционеров, обычно ниже рынка, чтобы они согласились. Так как деньги поступают, он виден в отчёте о движении денег.`,
      `Huquqli chiqarish mavjud aksiyadorlardan pul jalb qiladi, odatda ular qabul qilishi uchun bozordan past. Pul kelgani uchun u pul oqimlari hisobotida ko'rinadi.`),
    single(282, 'Which statement is true of a bonus issue of shares?',
      ['Shares are issued for cash at the market price', 'No cash is received by the company', 'Shares are issued for cash below the market price', 'A bonus issue is shown in the statement of cash flows'], 1,
      `A bonus issue gives free shares in proportion to existing holdings. No cash changes hands, so there is nothing to show in the statement of cash flows.`,
      `Бонусный выпуск даёт бесплатные акции пропорционально. Денег нет, поэтому в отчёте о движении денег показывать нечего.`,
      `Bonusli chiqarish mutanosib bepul aksiya beradi. Pul yo'q, shuning uchun pul oqimlari hisobotida ko'rsatiladigan narsa yo'q.`),
    matrix(283, 'State whether each statement is true or false.', TF, [
      { text: 'Dividends paid are excluded from the statement of changes in equity', correctIndex: F },
      { text: 'Dividends received are included in the statement of changes in equity', correctIndex: F },
      { text: 'Dividends received are excluded from the statement of changes in equity', correctIndex: T },
      { text: 'Dividends paid are included in the statement of changes in equity', correctIndex: T },
    ],
      `Dividends paid reduce equity, so they belong in the statement of changes in equity. Dividends received are investment income in profit or loss.`,
      `Выплаченные дивиденды уменьшают капитал, поэтому входят в отчёт об изменениях капитала. Полученные — инвестиционный доход в прибыли или убытке.`,
      `To'langan dividendlar kapitalni kamaytiradi, shuning uchun kapitaldagi o'zgarishlar hisobotiga kiradi. Olingan dividendlar foyda yoki zarardagi investitsiya daromadi.`),
    single(284, 'What entries record the payment of a dividend?',
      ['Dr Retained earnings, Cr Bank', 'Dr Profit or loss, Cr Bank', 'Dr Share premium, Cr Bank', 'Dr Share capital, Cr Bank'], 0,
      `Dividends are paid out of accumulated profits, so debit retained earnings. They are not an expense, so they do not go through profit or loss.`,
      `Дивиденды платятся из накопленной прибыли, поэтому дебет нераспределённой прибыли. Это не расход, поэтому в прибыль или убыток не идут.`,
      `Dividendlar to'plangan foydadan to'lanadi, shuning uchun taqsimlanmagan foyda debetlanadi. Bu xarajat emas, foyda yoki zarardan o'tmaydi.`),
    single(285, 'A company issued 30,000 $1 equity shares at $1.60 each. What are the entries?',
      ['Dr Bank $48,000, Cr Share capital $48,000', 'Dr Bank $48,000, Cr Share premium $30,000, Cr Share capital $18,000', 'Dr Bank $48,000, Cr Share capital $30,000, Cr Share premium $18,000', 'Dr Share capital $30,000, Dr Share premium $18,000, Cr Bank $48,000'], 2,
      `Cash received is 30,000 x $1.60 = $48,000. Share capital takes only the nominal value, $30,000. The other $18,000 is share premium.`,
      `Получено 30,000 x $1.60 = $48,000. Акционерный капитал получает только номинал, $30,000. Остальные $18,000 — эмиссионный доход.`,
      `Olingan pul 30,000 x $1.60 = $48,000. Aksiya kapitali faqat nominalni oladi, $30,000. Qolgan $18,000 emissiya daromadi.`),
    single(286, 'A company has 320,000 equity shares of $0.50 each and a share premium balance of $120,000. What entries record a bonus issue of one share for every four held?',
      ['Dr Share capital $80,000, Cr Share premium $80,000', 'Dr Share premium $80,000, Cr Share capital $80,000', 'Dr Share capital $40,000, Cr Share premium $40,000', 'Dr Share premium $40,000, Cr Share capital $40,000'], 3,
      `New shares: 320,000 / 4 = 80,000. At $0.50 nominal value that is $40,000. The reserve falls with a debit and share capital rises with a credit.`,
      `Новых акций: 320,000 / 4 = 80,000. По номиналу $0.50 это $40,000. Резерв падает дебетом, акционерный капитал растёт кредитом.`,
      `Yangi aksiyalar: 320,000 / 4 = 80,000. $0.50 nominalda bu $40,000. Rezerv debet bilan kamayadi, aksiya kapitali kredit bilan oshadi.`),
    single(287, 'Which statements are correct? (1) A limited company will always have both an equity share capital account and a share premium account. (2) A limited company will always have an equity share capital account, and may also have a share premium account. (3) A limited company will always have either a share premium account or a revaluation surplus account.',
      ['1 only', '2 only', '1 and 3', '2 and 3'], 1,
      `Every company has share capital. Share premium exists only if shares were issued above nominal value, and a revaluation surplus only if assets were revalued, so neither is certain.`,
      `Акционерный капитал есть у каждой компании. Эмиссионный доход есть, только если акции выпущены выше номинала, а резерв переоценки — только если активы переоценены, поэтому ни то, ни другое не гарантировано.`,
      `Aksiya kapitali har bir kompaniyada bor. Emissiya daromadi faqat aksiyalar nominaldan yuqori chiqarilganda, qayta baholash rezervi faqat aktivlar qayta baholanganda bo'ladi, shuning uchun ikkalasi ham shart emas.`),
    single(288, 'Which of these would NOT be included in a statement of changes in equity?',
      ['Redeemable preference shares', 'Share premium', 'Irredeemable preference shares', 'Revaluation surplus'], 0,
      `Redeemable preference shares will be repaid, so they are a liability, not equity. Irredeemable ones are equity, so they do appear.`,
      `Погашаемые привилегированные акции будут возвращены, поэтому это обязательство, а не капитал. Непогашаемые — капитал, они показываются.`,
      `Qaytariladigan imtiyozli aksiyalar qaytariladi, demak majburiyat, kapital emas. Qaytarilmaydiganlari kapital, ular ko'rsatiladi.`),
    single(289, 'In its latest year a company made a loss of $64,300. Assets were revalued, increasing the revaluation surplus by $110,000. Interim dividends of $28,000 were paid, and last year\'s final dividend of $19,000 was also paid. What is total comprehensive income for the year?',
      ['$110,000 Cr', '$45,700 Cr', '$17,700 Cr', '$1,300 Dr'], 1,
      `Total comprehensive income is profit or loss plus other comprehensive income: -$64,300 + $110,000 = $45,700. Dividends are distributions to owners, so they are not deducted.`,
      `Общий совокупный доход — прибыль или убыток плюс прочий совокупный доход: -$64,300 + $110,000 = $45,700. Дивиденды — распределение владельцам, они не вычитаются.`,
      `Jami umumlashgan daromad — foyda yoki zarar plus boshqa umumlashgan daromad: -$64,300 + $110,000 = $45,700. Dividendlar egalariga taqsimlash, ayirilmaydi.`),
    single(290, 'Which of these would be included in a statement of changes in equity?',
      ['A dividend received in the year', 'Redeemable preference shares', 'A dividend paid in the year', 'A bank loan repayable in 10 years'], 2,
      `A dividend paid reduces retained earnings. A dividend received is income in profit or loss. The loan and the redeemable shares are liabilities.`,
      `Выплаченный дивиденд уменьшает нераспределённую прибыль. Полученный — доход в прибыли или убытке. Кредит и погашаемые акции — обязательства.`,
      `To'langan dividend taqsimlanmagan foydani kamaytiradi. Olingan dividend foyda yoki zarardagi daromad. Kredit va qaytariladigan aksiyalar majburiyat.`),
    single(291, 'At 1 April 20X8 a company had $400,000 of 6% loan notes in issue. On 1 June 20X8 it issued $600,000 of 9% loan notes. On 1 January 20X9 it repaid the 6% loan notes in full. What is the interest expense for the year ended 31 March 20X9?',
      ['$63,000', '$69,000', '$72,000', '$78,000'], 0,
      `The 6% notes ran for nine months: $400,000 x 6% x 9/12 = $18,000. The 9% notes ran for ten months: $600,000 x 9% x 10/12 = $45,000. The total is $63,000.`,
      `6% ноты действовали девять месяцев: $400,000 x 6% x 9/12 = $18,000. 9% ноты — десять месяцев: $600,000 x 9% x 10/12 = $45,000. Всего $63,000.`,
      `6% notalar to'qqiz oy amalda bo'lgan: $400,000 x 6% x 9/12 = $18,000. 9% notalar o'n oy: $600,000 x 9% x 10/12 = $45,000. Jami $63,000.`),
    single(292, 'A company\'s retained earnings rose from $142,300 to $176,900 during the year. In the year it (1) paid a dividend of $0.40 on each of its 120,000 redeemable preference shares; (2) paid a dividend of $0.20 on each of its 250,000 ordinary shares; (3) made a rights issue of 60,000 shares at $1.20; and (4) made a bonus issue of $30,000 out of retained earnings. What is profit for the year?',
      ['$34,600', '$84,600', '$114,600', '$162,600'], 2,
      `Opening $142,300 + profit - ordinary dividend $50,000 - bonus $30,000 = closing $176,900, so profit is $114,600. Redeemable preference dividends are finance costs already inside profit, and a rights issue does not touch retained earnings.`,
      `На начало $142,300 + прибыль - обыкновенный дивиденд $50,000 - бонус $30,000 = на конец $176,900, значит, прибыль $114,600. Дивиденды по погашаемым акциям — финансовые расходы, уже учтённые в прибыли, а выпуск прав её не затрагивает.`,
      `Boshlang'ich $142,300 + foyda - oddiy dividend $50,000 - bonus $30,000 = yakuniy $176,900, demak foyda $114,600. Qaytariladigan aksiya dividendlari foydada allaqachon bor moliyaviy xarajat, huquqli chiqarish esa unga tegmaydi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
