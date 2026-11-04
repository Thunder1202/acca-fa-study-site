'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-12';
  const questions = [
    {
      id: 'ch12-q275',
      kitRef: 275,
      topicId: 'chapter-12',
      type: 'matrix',
      text: 'State whether each statement about a rights issue is true or false.',
      explanation: {
        en: `Both statements mix up rights issues with something else.
- "Capitalises reserves": FALSE. That describes a BONUS issue, which turns reserves into share capital. A rights issue brings in new cash.
- "Price below nominal value": FALSE. A rights issue is priced below the MARKET price, never below nominal value.`,
        ru: `Оба утверждения путают выпуск прав с чем-то другим.
- «Капитализирует резервы»: НЕВЕРНО. Это БОНУСНЫЙ выпуск, он превращает резервы в акционерный капитал. Выпуск прав приносит новые деньги.
- «Цена ниже номинала»: НЕВЕРНО. Цена ниже РЫНОЧНОЙ, но никогда не ниже номинала.`,
        uz: `Ikkala fikr huquqli chiqarishni boshqa narsa bilan adashtiradi.
- «Rezervlarni kapitallashtiradi»: NOTO'G'RI. Bu BONUSLI chiqarish, u rezervlarni aksiya kapitaliga aylantiradi. Huquqli chiqarish yangi pul olib keladi.
- «Nominaldan past narx»: NOTO'G'RI. Narx BOZOR narxidan past, lekin hech qachon nominaldan past emas.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'A rights issue capitalises reserves, which can be a disadvantage because it reduces the amount available for future dividends',
          correctIndex: 1,
        },
        {
          text: 'A rights issue is offered to existing shareholders, usually at a price below the nominal value of a share',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch12-q276',
      kitRef: 276,
      topicId: 'chapter-12',
      type: 'multi',
      text: 'Which TWO items in the statement of financial position change immediately when redeemable preference shares are issued?',
      explanation: {
        en: `Redeemable preference shares must be paid back, so they are debt.
# What changes?
  Cash comes in: BANK goes up
  The company now owes the money back: LONG-TERM DEBT goes up
# What does not change?
  Equity and retained earnings: these shares are not equity
  Interest expense: it is a profit or loss item, not in the statement of financial position, and nothing is charged on the day of issue
= Answer: bank and long-term debt`,
        ru: `Погашаемые привилегированные акции нужно вернуть, значит это долг.
# Что меняется?
  Деньги пришли: БАНК растёт
  Компания должна вернуть деньги: ДОЛГОСРОЧНЫЙ ДОЛГ растёт
# Что не меняется?
  Капитал и нераспределённая прибыль: эти акции не капитал
  Процентный расход: статья прибыли или убытка, а не баланса, и в день выпуска ничего не начисляют
= Ответ: банк и долгосрочный долг`,
        uz: `Qaytariladigan imtiyozli aksiyalar qaytarilishi kerak, demak bu qarz.
# Nima o'zgaradi?
  Pul kirdi: BANK oshadi
  Kompaniya pulni qaytarishi kerak: UZOQ MUDDATLI QARZ oshadi
# Nima o'zgarmaydi?
  Kapital va taqsimlanmagan foyda: bu aksiyalar kapital emas
  Foiz xarajati: foyda yoki zarar moddasi, balans emas, chiqarilgan kuni hech narsa hisoblanmaydi
= Javob: bank va uzoq muddatli qarz`,
      },
      options: ['Bank', 'Retained earnings', 'Interest expense', 'Equity', 'Long-term debt'],
      correctIndices: [0, 4],
    },
    {
      id: 'ch12-q277',
      kitRef: 277,
      topicId: 'chapter-12',
      type: 'single',
      text: 'A company\'s closing retained earnings are $412,640. Its profit for the year was $96,320. It paid last year\'s dividend of $15,400 during the year, and proposed a dividend of $17,000 at the year end, which shareholders had not approved by then. What are opening retained earnings?',
      explanation: {
        en: `Retained earnings: opening + profit - dividends paid = closing. Work backwards to the opening figure.
# Step 1: Which dividends count?
  Paid in the year: $15,400 (last year's dividend, approved and paid this year). COUNTS
  Proposed at the year end, not yet approved: $17,000. NOT a liability yet, IGNORE
# Step 2: Work backwards
  Opening = closing - profit + dividends paid
  $412,640 - $96,320 + $15,400 = $331,720
= Answer: $331,720
! Common trap: also deducting the unapproved $17,000 gives $348,720.`,
        ru: `Нераспределённая прибыль: начало + прибыль - выплаченные дивиденды = конец. Идём назад к началу.
# Шаг 1: Какие дивиденды учитывать?
  Выплачен в году: $15,400 (прошлогодний, одобрен и выплачен в этом году). УЧИТЫВАЕМ
  Предложен на конец года, не одобрен: $17,000. Ещё не обязательство, НЕ УЧИТЫВАЕМ
# Шаг 2: Идём назад
  Начало = конец - прибыль + выплаченные дивиденды
  $412,640 - $96,320 + $15,400 = $331,720
= Ответ: $331,720
! Частая ошибка: учесть и неодобренные $17,000 — выходит $348,720.`,
        uz: `Taqsimlanmagan foyda: boshi + foyda - to'langan dividendlar = oxiri. Boshlang'ich songa orqaga boramiz.
# 1-qadam: Qaysi dividendlar hisobga olinadi?
  Yil davomida to'langan: $15,400 (o'tgan yilniki, bu yil tasdiqlanib to'langan). HISOBGA OLINADI
  Yil oxirida taklif qilingan, tasdiqlanmagan: $17,000. Hali majburiyat emas, OLINMAYDI
# 2-qadam: Orqaga boramiz
  Boshi = oxiri - foyda + to'langan dividendlar
  $412,640 - $96,320 + $15,400 = $331,720
= Javob: $331,720
! Ko'p uchraydigan xato: tasdiqlanmagan $17,000 ni ham hisobga olish $348,720 beradi.`,
      },
      options: ['$316,320', '$331,720', '$348,720', '$493,560'],
      correctIndex: 1,
    },
    {
      id: 'ch12-q278',
      kitRef: 278,
      topicId: 'chapter-12',
      type: 'number',
      text: 'A company had profit before tax of $84,000 and an income tax expense of $37,000. It paid a dividend of $26,000 in the year, and a revaluation of land created a surplus of $22,000. What amount is added to retained earnings for the year?',
      explanation: {
        en: `Retained earnings grow by profit for the year less dividends. A revaluation does not touch them.
# Step 1: Profit for the year
  $84,000 - tax $37,000 = $47,000
# Step 2: Less dividends paid
  $47,000 - $26,000 = $21,000
# The revaluation
  The $22,000 goes to the revaluation surplus, not retained earnings
= Answer: $21,000`,
        ru: `Нераспределённая прибыль растёт на прибыль за год минус дивиденды. Переоценка её не затрагивает.
# Шаг 1: Прибыль за год
  $84,000 - налог $37,000 = $47,000
# Шаг 2: Минус выплаченные дивиденды
  $47,000 - $26,000 = $21,000
# Переоценка
  $22,000 идут в резерв переоценки, а не в нераспределённую прибыль
= Ответ: $21,000`,
        uz: `Taqsimlanmagan foyda yil foydasi minus dividendlarga oshadi. Qayta baholash unga tegmaydi.
# 1-qadam: Yil foydasi
  $84,000 - soliq $37,000 = $47,000
# 2-qadam: Minus to'langan dividendlar
  $47,000 - $26,000 = $21,000
# Qayta baholash
  $22,000 taqsimlanmagan foydaga emas, qayta baholash rezerviga boradi
= Javob: $21,000`,
      },
      correctValue: 21000,
      answerText: '$21,000',
    },
    {
      id: 'ch12-q279',
      kitRef: 279,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which of these would NOT appear in a statement of changes in equity?',
      explanation: {
        en: `The statement of changes in equity only shows equity: share capital, reserves and their movements.
- Revaluation surplus: a reserve in equity. Shown.
- Dividends paid: reduce retained earnings. Shown.
- Bank loans: a LIABILITY, not equity. NOT shown.
- Equity share capital: equity. Shown.
= Answer: bank loans`,
        ru: `Отчёт об изменениях в капитале показывает только капитал: акционерный капитал, резервы и их движение.
- Резерв переоценки: резерв в капитале. Есть.
- Выплаченные дивиденды: уменьшают нераспределённую прибыль. Есть.
- Банковские займы: ОБЯЗАТЕЛЬСТВО, а не капитал. НЕТ.
- Акционерный капитал: капитал. Есть.
= Ответ: банковские займы`,
        uz: `Kapitaldagi o'zgarishlar hisoboti faqat kapitalni ko'rsatadi: aksiya kapitali, rezervlar va ularning harakati.
- Qayta baholash rezervi: kapitaldagi rezerv. Bor.
- To'langan dividendlar: taqsimlanmagan foydani kamaytiradi. Bor.
- Bank qarzlari: MAJBURIYAT, kapital emas. YO'Q.
- Aksiya kapitali: kapital. Bor.
= Javob: bank qarzlari`,
      },
      options: ['Revaluation surplus', 'Dividends paid', 'Bank loans', 'Equity share capital'],
      correctIndex: 2,
    },
    {
      id: 'ch12-q280',
      kitRef: 280,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which statement about preference shares is true?',
      explanation: {
        en: `The test is whether the shares MUST be repaid.
- Redeemable: must be repaid one day, so they are a LIABILITY.
- Irredeemable: never have to be repaid, so they are EQUITY.
= Answer: irredeemable preference shares are equity, and redeemable preference shares are a liability`,
        ru: `Проверка: ОБЯЗАТЕЛЬНО ли возвращать акции?
- Погашаемые: однажды их нужно вернуть, значит ОБЯЗАТЕЛЬСТВО.
- Непогашаемые: возвращать никогда не нужно, значит КАПИТАЛ.
= Ответ: непогашаемые привилегированные акции — капитал, погашаемые — обязательство`,
        uz: `Sinov: aksiyalar QAYTARILISHI SHARTmi?
- Qaytariladigan: bir kun qaytarilishi kerak, demak MAJBURIYAT.
- Qaytarilmaydigan: hech qachon qaytarilmaydi, demak KAPITAL.
= Javob: qaytarilmaydigan imtiyozli aksiyalar — kapital, qaytariladiganlari — majburiyat`,
      },
      options: [
        'All preference shares are liabilities',
        'Irredeemable preference shares are equity, and redeemable preference shares are a liability',
        'All preference shares are equity',
        'Irredeemable preference shares are a liability, and redeemable preference shares are equity',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch12-q281',
      kitRef: 281,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which statement is true of a rights issue of shares?',
      explanation: {
        en: `A rights issue sells new shares to existing shareholders for CASH, at a discount to tempt them to buy.
- No cash received: that is a bonus issue.
- At market price: usually below it.
- Not in the statement of cash flows: it brings in cash, so it IS shown (financing).
- For cash below the market price: correct.
= Answer: shares are issued for cash at a price below the market price`,
        ru: `Выпуск прав продаёт новые акции существующим акционерам за ДЕНЬГИ, со скидкой, чтобы их купили.
- Деньги не поступают: это бонусный выпуск.
- По рыночной цене: обычно ниже.
- Нет в отчёте о движении денег: деньги приходят, значит ЕСТЬ (финансовая деятельность).
- За деньги ниже рыночной цены: верно.
= Ответ: акции выпускаются за деньги по цене ниже рыночной`,
        uz: `Huquqli chiqarish yangi aksiyalarni mavjud aksiyadorlarga PULGA, sotib olishga undash uchun chegirma bilan sotadi.
- Pul kelmaydi: bu bonusli chiqarish.
- Bozor narxida: odatda undan past.
- Pul oqimlari hisobotida yo'q: pul keladi, demak BOR (moliyaviy faoliyat).
- Bozor narxidan past narxda pulga: to'g'ri.
= Javob: aksiyalar bozor narxidan past narxda pulga chiqariladi`,
      },
      options: [
        'No cash is received',
        'Shares are issued for cash at the market price',
        'A rights issue is not shown in a statement of cash flows',
        'Shares are issued for cash at a price below the market price',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch12-q282',
      kitRef: 282,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which statement is true of a bonus issue of shares?',
      explanation: {
        en: `A bonus issue gives free shares. Nothing is paid for them.
- For cash at market price, or below it: no, no cash at all.
- No cash received: correct.
- Shown in the statement of cash flows: no, because no cash moves.
= Answer: no cash is received by the company`,
        ru: `Бонусный выпуск даёт акции бесплатно. За них ничего не платят.
- За деньги по рыночной цене или ниже: нет, денег вообще нет.
- Деньги не поступают: верно.
- Есть в отчёте о движении денег: нет, деньги не движутся.
= Ответ: компания не получает денег`,
        uz: `Bonusli chiqarish bepul aksiya beradi. Ular uchun hech narsa to'lanmaydi.
- Bozor narxida yoki undan past pulga: yo'q, umuman pul yo'q.
- Pul kelmaydi: to'g'ri.
- Pul oqimlari hisobotida: yo'q, pul harakatlanmaydi.
= Javob: kompaniya pul olmaydi`,
      },
      options: [
        'Shares are issued for cash at the market price',
        'No cash is received by the company',
        'Shares are issued for cash below the market price',
        'A bonus issue is shown in the statement of cash flows',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch12-q283',
      kitRef: 283,
      topicId: 'chapter-12',
      type: 'matrix',
      text: 'State whether each statement is true or false.',
      explanation: {
        en: `Dividends PAID go out of the company to its owners, so they change equity. Dividends RECEIVED are income from an investment, so they go to profit or loss.
- Dividends paid are excluded: FALSE.
- Dividends received are included: FALSE.
- Dividends received are excluded: TRUE.
- Dividends paid are included: TRUE.`,
        ru: `ВЫПЛАЧЕННЫЕ дивиденды уходят владельцам, поэтому меняют капитал. ПОЛУЧЕННЫЕ — доход от вложений, поэтому идут в прибыль или убыток.
- Выплаченные не включаются: НЕВЕРНО.
- Полученные включаются: НЕВЕРНО.
- Полученные не включаются: ВЕРНО.
- Выплаченные включаются: ВЕРНО.`,
        uz: `TO'LANGAN dividendlar kompaniyadan egalariga chiqadi, shuning uchun kapitalni o'zgartiradi. OLINGAN dividendlar — sarmoyadan daromad, foyda yoki zararga boradi.
- To'langanlar kiritilmaydi: NOTO'G'RI.
- Olinganlar kiritiladi: NOTO'G'RI.
- Olinganlar kiritilmaydi: TO'G'RI.
- To'langanlar kiritiladi: TO'G'RI.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Dividends paid are excluded from the statement of changes in equity', correctIndex: 1 },
        { text: 'Dividends received are included in the statement of changes in equity', correctIndex: 1 },
        { text: 'Dividends received are excluded from the statement of changes in equity', correctIndex: 0 },
        { text: 'Dividends paid are included in the statement of changes in equity', correctIndex: 0 },
      ],
    },
    {
      id: 'ch12-q284',
      kitRef: 284,
      topicId: 'chapter-12',
      type: 'single',
      text: 'What entries record the payment of a dividend?',
      explanation: {
        en: `A dividend shares out profits already earned and kept. It is not an expense.
# The entry
  The kept profits go down: Dr Retained earnings
  The cash goes out: Cr Bank
= Answer: Dr Retained earnings, Cr Bank
! Common trap: debiting profit or loss. A dividend is not a cost of running the business.`,
        ru: `Дивиденд распределяет уже заработанную и оставленную прибыль. Это не расход.
# Проводка
  Оставленная прибыль уменьшается: Дт Нераспределённая прибыль
  Деньги уходят: Кт Банк
= Ответ: Дт Нераспределённая прибыль, Кт Банк
! Частая ошибка: дебетовать прибыль или убыток. Дивиденд — не затрата на ведение бизнеса.`,
        uz: `Dividend allaqachon topilgan va qoldirilgan foydani taqsimlaydi. Bu xarajat emas.
# Yozuv
  Qoldirilgan foyda kamayadi: Dt Taqsimlanmagan foyda
  Pul chiqadi: Kt Bank
= Javob: Dt Taqsimlanmagan foyda, Kt Bank
! Ko'p uchraydigan xato: foyda yoki zararni debetlash. Dividend biznes yuritish xarajati emas.`,
      },
      options: [
        'Dr Retained earnings, Cr Bank',
        'Dr Profit or loss, Cr Bank',
        'Dr Share premium, Cr Bank',
        'Dr Share capital, Cr Bank',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch12-q285',
      kitRef: 285,
      topicId: 'chapter-12',
      type: 'single',
      text: 'A company issued 30,000 $1 equity shares at $1.60 each. What are the entries?',
      explanation: {
        en: `Split the cash into nominal value and premium.
# Step 1: Cash received
  30,000 × $1.60 = $48,000
# Step 2: Share capital (nominal only)
  30,000 × $1 = $30,000
# Step 3: Share premium
  $48,000 - $30,000 = $18,000
= Answer: Dr Bank $48,000, Cr Share capital $30,000, Cr Share premium $18,000`,
        ru: `Разделим деньги на номинал и премию.
# Шаг 1: Получено денег
  30,000 × $1.60 = $48,000
# Шаг 2: Акционерный капитал (только номинал)
  30,000 × $1 = $30,000
# Шаг 3: Эмиссионный доход
  $48,000 - $30,000 = $18,000
= Ответ: Дт Банк $48,000, Кт Акционерный капитал $30,000, Кт Эмиссионный доход $18,000`,
        uz: `Pulni nominal va mukofotga ajratamiz.
# 1-qadam: Olingan pul
  30,000 × $1.60 = $48,000
# 2-qadam: Aksiya kapitali (faqat nominal)
  30,000 × $1 = $30,000
# 3-qadam: Emissiya daromadi
  $48,000 - $30,000 = $18,000
= Javob: Dt Bank $48,000, Kt Aksiya kapitali $30,000, Kt Emissiya daromadi $18,000`,
      },
      options: [
        'Dr Bank $48,000, Cr Share capital $48,000',
        'Dr Bank $48,000, Cr Share premium $30,000, Cr Share capital $18,000',
        'Dr Bank $48,000, Cr Share capital $30,000, Cr Share premium $18,000',
        'Dr Share capital $30,000, Dr Share premium $18,000, Cr Bank $48,000',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch12-q286',
      kitRef: 286,
      topicId: 'chapter-12',
      type: 'single',
      text: 'A company has 320,000 equity shares of $0.50 each and a share premium balance of $120,000. What entries record a bonus issue of one share for every four held?',
      explanation: {
        en: `A bonus issue moves the nominal value of the new shares from a reserve into share capital.
# Step 1: Number of new shares
  320,000 / 4 = 80,000
# Step 2: Their nominal value
  80,000 × $0.50 = $40,000
# Step 3: The entry
  Share premium goes down: Dr Share premium $40,000
  Share capital goes up: Cr Share capital $40,000
= Answer: Dr Share premium $40,000, Cr Share capital $40,000
! Common trap: using the number of shares ($80,000) instead of their 50c value.`,
        ru: `Бонусный выпуск переносит номинал новых акций из резерва в акционерный капитал.
# Шаг 1: Число новых акций
  320,000 / 4 = 80,000
# Шаг 2: Их номинал
  80,000 × $0.50 = $40,000
# Шаг 3: Проводка
  Эмиссионный доход уменьшается: Дт Эмиссионный доход $40,000
  Акционерный капитал растёт: Кт Акционерный капитал $40,000
= Ответ: Дт Эмиссионный доход $40,000, Кт Акционерный капитал $40,000
! Частая ошибка: взять число акций ($80,000) вместо их номинала 50 центов.`,
        uz: `Bonusli chiqarish yangi aksiyalar nominalini rezervdan aksiya kapitaliga o'tkazadi.
# 1-qadam: Yangi aksiyalar soni
  320,000 / 4 = 80,000
# 2-qadam: Ularning nominali
  80,000 × $0.50 = $40,000
# 3-qadam: Yozuv
  Emissiya daromadi kamayadi: Dt Emissiya daromadi $40,000
  Aksiya kapitali oshadi: Kt Aksiya kapitali $40,000
= Javob: Dt Emissiya daromadi $40,000, Kt Aksiya kapitali $40,000
! Ko'p uchraydigan xato: aksiyalar soni ($80,000) ni 50 sent nominal o'rniga olish.`,
      },
      options: [
        'Dr Share capital $80,000, Cr Share premium $80,000',
        'Dr Share premium $80,000, Cr Share capital $80,000',
        'Dr Share capital $40,000, Cr Share premium $40,000',
        'Dr Share premium $40,000, Cr Share capital $40,000',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch12-q287',
      kitRef: 287,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which statements are correct? (1) A limited company will always have both an equity share capital account and a share premium account. (2) A limited company will always have an equity share capital account, and may also have a share premium account. (3) A limited company will always have either a share premium account or a revaluation surplus account.',
      explanation: {
        en: `Ask which accounts every company is CERTAIN to have.
- (1) Always share capital AND share premium: FALSE. Premium only exists if shares were sold above nominal value.
- (2) Always share capital, MAYBE share premium: TRUE.
- (3) Always share premium OR revaluation surplus: FALSE. A company may have neither.
= Answer: 2 only`,
        ru: `Спросите, какие счета ТОЧНО есть у каждой компании.
- (1) Всегда акционерный капитал И эмиссионный доход: НЕВЕРНО. Эмиссионный доход бывает, только если акции продавали дороже номинала.
- (2) Всегда акционерный капитал, ВОЗМОЖНО эмиссионный доход: ВЕРНО.
- (3) Всегда эмиссионный доход ИЛИ резерв переоценки: НЕВЕРНО. Может не быть ни того, ни другого.
= Ответ: только 2`,
        uz: `Har bir kompaniyada ANIQ qaysi hisoblar borligini so'rang.
- (1) Doim aksiya kapitali VA emissiya daromadi: NOTO'G'RI. Emissiya daromadi faqat aksiyalar nominaldan qimmat sotilganda bo'ladi.
- (2) Doim aksiya kapitali, BALKI emissiya daromadi: TO'G'RI.
- (3) Doim emissiya daromadi YOKI qayta baholash rezervi: NOTO'G'RI. Ikkalasi ham bo'lmasligi mumkin.
= Javob: faqat 2`,
      },
      options: ['1 only', '2 only', '1 and 3', '2 and 3'],
      correctIndex: 1,
    },
    {
      id: 'ch12-q288',
      kitRef: 288,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which of these would NOT be included in a statement of changes in equity?',
      explanation: {
        en: `Only equity items appear in the statement of changes in equity.
- Redeemable preference shares: must be repaid, so a LIABILITY. NOT included.
- Share premium: equity. Included.
- Irredeemable preference shares: equity. Included.
- Revaluation surplus: equity. Included.
= Answer: redeemable preference shares`,
        ru: `В отчёте об изменениях в капитале только статьи капитала.
- Погашаемые привилегированные акции: их нужно вернуть, это ОБЯЗАТЕЛЬСТВО. НЕ включаются.
- Эмиссионный доход: капитал. Включается.
- Непогашаемые привилегированные акции: капитал. Включаются.
- Резерв переоценки: капитал. Включается.
= Ответ: погашаемые привилегированные акции`,
        uz: `Kapitaldagi o'zgarishlar hisobotida faqat kapital moddalari.
- Qaytariladigan imtiyozli aksiyalar: qaytarilishi kerak, MAJBURIYAT. KIRITILMAYDI.
- Emissiya daromadi: kapital. Kiritiladi.
- Qaytarilmaydigan imtiyozli aksiyalar: kapital. Kiritiladi.
- Qayta baholash rezervi: kapital. Kiritiladi.
= Javob: qaytariladigan imtiyozli aksiyalar`,
      },
      options: [
        'Redeemable preference shares',
        'Share premium',
        'Irredeemable preference shares',
        'Revaluation surplus',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch12-q289',
      kitRef: 289,
      topicId: 'chapter-12',
      type: 'single',
      text: 'In its latest year a company made a loss of $64,300. Assets were revalued, increasing the revaluation surplus by $110,000. Interim dividends of $28,000 were paid, and last year\'s final dividend of $19,000 was also paid. What is total comprehensive income for the year?',
      explanation: {
        en: `Total comprehensive income = profit or loss for the year + other comprehensive income. Dividends are not part of it.
# Step 1: Profit or loss
  A loss: - $64,300
# Step 2: Other comprehensive income
  Revaluation gain: + $110,000
# Step 3: Total
  - $64,300 + $110,000 = $45,700 (a credit, a gain overall)
= Answer: $45,700 Cr
! Common trap: taking off the dividends ($28,000 + $19,000) gives $1,300 Dr. Dividends are payments to owners, not part of income.`,
        ru: `Общий совокупный доход = прибыль или убыток за год + прочий совокупный доход. Дивиденды в него не входят.
# Шаг 1: Прибыль или убыток
  Убыток: - $64,300
# Шаг 2: Прочий совокупный доход
  Прирост от переоценки: + $110,000
# Шаг 3: Итого
  - $64,300 + $110,000 = $45,700 (кредит, в целом прирост)
= Ответ: $45,700 Кт
! Частая ошибка: вычесть дивиденды ($28,000 + $19,000) — получится $1,300 Дт. Дивиденды — выплаты владельцам, не часть дохода.`,
        uz: `Jami umumlashgan daromad = yil foydasi yoki zarari + boshqa umumlashgan daromad. Dividendlar unga kirmaydi.
# 1-qadam: Foyda yoki zarar
  Zarar: - $64,300
# 2-qadam: Boshqa umumlashgan daromad
  Qayta baholash o'sishi: + $110,000
# 3-qadam: Jami
  - $64,300 + $110,000 = $45,700 (kredit, umuman o'sish)
= Javob: $45,700 Kt
! Ko'p uchraydigan xato: dividendlarni ($28,000 + $19,000) ayirish $1,300 Dt beradi. Dividendlar egalarga to'lov, daromad qismi emas.`,
      },
      options: ['$110,000 Cr', '$45,700 Cr', '$17,700 Cr', '$1,300 Dr'],
      correctIndex: 1,
    },
    {
      id: 'ch12-q290',
      kitRef: 290,
      topicId: 'chapter-12',
      type: 'single',
      text: 'Which of these would be included in a statement of changes in equity?',
      explanation: {
        en: `Only movements in equity go in the statement of changes in equity.
- A dividend received: income, in profit or loss.
- Redeemable preference shares: a liability.
- A dividend paid: reduces retained earnings. INCLUDED.
- A 10-year bank loan: a liability.
= Answer: a dividend paid in the year`,
        ru: `В отчёт об изменениях в капитале идут только движения капитала.
- Полученный дивиденд: доход, в прибыли или убытке.
- Погашаемые привилегированные акции: обязательство.
- Выплаченный дивиденд: уменьшает нераспределённую прибыль. ВКЛЮЧАЕТСЯ.
- Банковский заём на 10 лет: обязательство.
= Ответ: дивиденд, выплаченный в году`,
        uz: `Kapitaldagi o'zgarishlar hisobotiga faqat kapital harakatlari kiradi.
- Olingan dividend: daromad, foyda yoki zararda.
- Qaytariladigan imtiyozli aksiyalar: majburiyat.
- To'langan dividend: taqsimlanmagan foydani kamaytiradi. KIRITILADI.
- 10 yillik bank qarzi: majburiyat.
= Javob: yil davomida to'langan dividend`,
      },
      options: [
        'A dividend received in the year',
        'Redeemable preference shares',
        'A dividend paid in the year',
        'A bank loan repayable in 10 years',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch12-q291',
      kitRef: 291,
      topicId: 'chapter-12',
      type: 'single',
      text: 'At 1 April 20X8 a company had $400,000 of 6% loan notes in issue. On 1 June 20X8 it issued $600,000 of 9% loan notes. On 1 January 20X9 it repaid the 6% loan notes in full. What is the interest expense for the year ended 31 March 20X9?',
      explanation: {
        en: `Charge each loan only for the months it existed during the year (1 April 20X8 to 31 March 20X9).
# The 6% notes: in issue from 1 April to 31 December = 9 months
  $400,000 × 6% × 9/12 = $18,000
# The 9% notes: in issue from 1 June to 31 March = 10 months
  $600,000 × 9% × 10/12 = $45,000
= Answer: $18,000 + $45,000 = $63,000
! Common trap: charging a full year on either loan.`,
        ru: `Начисляйте по каждому займу только за месяцы его существования в году (1 апреля 20X8 - 31 марта 20X9).
# Ноты 6%: с 1 апреля по 31 декабря = 9 месяцев
  $400,000 × 6% × 9/12 = $18,000
# Ноты 9%: с 1 июня по 31 марта = 10 месяцев
  $600,000 × 9% × 10/12 = $45,000
= Ответ: $18,000 + $45,000 = $63,000
! Частая ошибка: начислить полный год по какому-либо займу.`,
        uz: `Har bir qarzga faqat yil davomida mavjud bo'lgan oylari uchun hisoblang (20X8 yil 1 apreldan 20X9 yil 31 martgacha).
# 6% notalar: 1 apreldan 31 dekabrgacha = 9 oy
  $400,000 × 6% × 9/12 = $18,000
# 9% notalar: 1 iyundan 31 martgacha = 10 oy
  $600,000 × 9% × 10/12 = $45,000
= Javob: $18,000 + $45,000 = $63,000
! Ko'p uchraydigan xato: biror qarzga to'liq yil hisoblash.`,
      },
      options: ['$63,000', '$69,000', '$72,000', '$78,000'],
      correctIndex: 0,
    },
    {
      id: 'ch12-q292',
      kitRef: 292,
      topicId: 'chapter-12',
      type: 'single',
      text: 'A company\'s retained earnings rose from $142,300 to $176,900 during the year. In the year it (1) paid a dividend of $0.40 on each of its 120,000 redeemable preference shares; (2) paid a dividend of $0.20 on each of its 250,000 ordinary shares; (3) made a rights issue of 60,000 shares at $1.20; and (4) made a bonus issue of $30,000 out of retained earnings. What is profit for the year?',
      explanation: {
        en: `Retained earnings: opening + profit - things taken out = closing. Find the profit.
# Step 1: What comes out of retained earnings?
  Ordinary dividend: 250,000 × $0.20 = $50,000. YES
  Bonus issue from retained earnings: $30,000. YES
  Redeemable preference dividend: a finance cost, already deducted inside profit. NO
  Rights issue: goes to share capital and premium. NO
# Step 2: Work backwards
  $142,300 + profit - $50,000 - $30,000 = $176,900
  Profit = $176,900 - $142,300 + $50,000 + $30,000 = $114,600
= Answer: $114,600`,
        ru: `Нераспределённая прибыль: начало + прибыль - изъятое = конец. Найдём прибыль.
# Шаг 1: Что уходит из нераспределённой прибыли?
  Дивиденд по обыкновенным: 250,000 × $0.20 = $50,000. ДА
  Бонусный выпуск из нераспределённой прибыли: $30,000. ДА
  Дивиденд по погашаемым привилегированным: финансовый расход, уже вычтен в прибыли. НЕТ
  Выпуск прав: идёт в капитал и эмиссионный доход. НЕТ
# Шаг 2: Идём назад
  $142,300 + прибыль - $50,000 - $30,000 = $176,900
  Прибыль = $176,900 - $142,300 + $50,000 + $30,000 = $114,600
= Ответ: $114,600`,
        uz: `Taqsimlanmagan foyda: boshi + foyda - chiqarilgan = oxiri. Foydani topamiz.
# 1-qadam: Taqsimlanmagan foydadan nima chiqadi?
  Oddiy aksiya dividendi: 250,000 × $0.20 = $50,000. HA
  Taqsimlanmagan foydadan bonusli chiqarish: $30,000. HA
  Qaytariladigan imtiyozli dividend: moliyaviy xarajat, foyda ichida ayirilgan. YO'Q
  Huquqli chiqarish: kapital va emissiya daromadiga boradi. YO'Q
# 2-qadam: Orqaga boramiz
  $142,300 + foyda - $50,000 - $30,000 = $176,900
  Foyda = $176,900 - $142,300 + $50,000 + $30,000 = $114,600
= Javob: $114,600`,
      },
      options: ['$34,600', '$84,600', '$114,600', '$162,600'],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
