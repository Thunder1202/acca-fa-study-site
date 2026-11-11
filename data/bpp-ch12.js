'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 13 (capital
// structure and finance costs), reworded with new figures. bppRef/bppPage point to BPP's own answer. Left out:
// 13.11 (its key rests on dilution, which Kaplan's chapter does not discuss) and 13.14 (a dividend quoted as a
// percentage of nominal value, also not in Kaplan's chapter).
(function () {
  const TOPIC = 'chapter-12';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp12-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('13.1', 226, 'number', `A company's issued capital is: ordinary shares of 25c each, $800,000; 7% redeemable preference shares of $1 each, $400,000. During the year it paid the preference dividend and an interim ordinary dividend of 3c a share. A final ordinary dividend of 4c a share was proposed after the year end. What amount is shown as dividends in the statement of changes in equity? (in $)`,
      amount(96000, '$96,000'),
`# Step 1: Number of ordinary shares
  800,000 / 0.25 = 3,200,000 shares
# Step 2: Interim ordinary dividend paid
  3,200,000 x 3c = 96,000
# Step 3: What else?
  Redeemable preference shares are a liability, so their dividend is a finance cost in profit or loss, not in equity.
  The final dividend was proposed after the year end, so it is not recognised this year.
= Answer: $96,000
! Shares of 25c: divide the dollar amount by 0.25 to get the number of shares.`,
`# Шаг 1: Количество обыкновенных акций
  800 000 / 0,25 = 3 200 000 акций
# Шаг 2: Выплаченный промежуточный дивиденд
  3 200 000 x 3c = 96 000
# Шаг 3: А остальное?
  Погашаемые привилегированные акции — обязательство, их дивиденд — финансовый расход в прибыли, а не в капитале.
  Финальный дивиденд объявлен после конца года, в этом году его не признают.
= Ответ: $96 000
! Акции по 25c: делите сумму в долларах на 0,25, чтобы получить число акций.`,
`# 1-qadam: Oddiy aksiyalar soni
  800 000 / 0,25 = 3 200 000 aksiya
# 2-qadam: To'langan oraliq dividend
  3 200 000 x 3c = 96 000
# 3-qadam: Qolganlari-chi?
  Qaytariladigan imtiyozli aksiyalar — majburiyat, ularning dividendi kapitalda emas, foydada moliyaviy xarajat.
  Yakuniy dividend yil oxiridan keyin e'lon qilingan, shu yil tan olinmaydi.
= Javob: $96 000
! 25c lik aksiyalar: aksiyalar sonini topish uchun dollar summasini 0,25 ga bo'ling.`),

    q('13.2', 226, 'single', `When a company makes a rights issue, which of these effects does it have? (1) Assets increase. (2) Retained earnings fall. (3) The share premium account falls. (4) Investments increase.`,
      pick(['1 only', '1 and 2', '3 only', '1 and 4'], 0),
`A rights issue is a share issue for cash to existing shareholders.
- (1) Cash comes in, so assets increase. YES.
- (2) Retained earnings are not touched.
- (3) If the price is above nominal value, share premium goes UP, not down.
- (4) The company receives cash, not investments.
= Answer: 1 only`,
`Выпуск прав — выпуск акций за деньги для нынешних акционеров.
- (1) Поступают деньги, активы растут. ДА.
- (2) Нераспределённая прибыль не затрагивается.
- (3) Если цена выше номинала, эмиссионный доход РАСТЁТ, а не падает.
- (4) Компания получает деньги, а не инвестиции.
= Ответ: только 1`,
`Huquqlar emissiyasi — mavjud aksiyadorlarga pulga aksiya chiqarish.
- (1) Pul keladi, aktivlar oshadi. HA.
- (2) Taqsimlanmagan foyda o'zgarmaydi.
- (3) Narx nominaldan yuqori bo'lsa, emissiya daromadi OSHADI, kamaymaydi.
- (4) Kompaniya investitsiya emas, pul oladi.
= Javob: faqat 1`),

    q('13.3', 226, 'single', `A company issues 800,000 shares of 25c each for cash, at a premium of 40c a share. Which entry records the issue?`,
      pick([
        'Dr Share capital $200,000, Dr Share premium $320,000, Cr Bank $520,000',
        'Dr Bank $520,000, Cr Share capital $200,000, Cr Share premium $320,000',
        'Dr Bank $520,000, Cr Share capital $520,000',
        'Dr Bank $320,000, Cr Share premium $320,000',
      ], 1),
`# Step 1: Cash received
  Price = 25c + 40c = 65c
  800,000 x 65c = 520,000
# Step 2: Split the credit
  Share capital at nominal value: 800,000 x 25c = 200,000
  Share premium for the rest: 800,000 x 40c = 320,000
= Answer: Dr Bank $520,000, Cr Share capital $200,000, Cr Share premium $320,000`,
`# Шаг 1: Полученные деньги
  Цена = 25c + 40c = 65c
  800 000 x 65c = 520 000
# Шаг 2: Разделим кредит
  Акционерный капитал по номиналу: 800 000 x 25c = 200 000
  Эмиссионный доход за остальное: 800 000 x 40c = 320 000
= Ответ: Дт Банк $520 000, Кт Акционерный капитал $200 000, Кт Эмиссионный доход $320 000`,
`# 1-qadam: Olingan pul
  Narx = 25c + 40c = 65c
  800 000 x 65c = 520 000
# 2-qadam: Kreditni bo'lamiz
  Ustav kapitali nominalda: 800 000 x 25c = 200 000
  Qolgani emissiya daromadiga: 800 000 x 40c = 320 000
= Javob: Dt Bank $520 000, Kt Ustav kapitali $200 000, Kt Emissiya daromadi $320 000`),

    q('13.4', 226, 'single', `At the start of the year a company had 200,000 ordinary shares of 25c each ($50,000) and a share premium account of $120,000. During the year it made a 1 for 4 bonus issue using the share premium account, and later issued 80,000 more 25c shares for cash at 60c each. What are share capital and share premium at the year end?`,
      pick([
        'Share capital $82,500; share premium $135,500',
        'Share capital $82,500; share premium $148,000',
        'Share capital $70,000; share premium $148,000',
        'Share capital $62,500; share premium $135,500',
      ], 0),
`# Step 1: Bonus issue
  200,000 / 4 = 50,000 new shares x 25c = 12,500
  Dr Share premium 12,500, Cr Share capital 12,500
# Step 2: Issue for cash
  80,000 x 25c = 20,000 to share capital
  80,000 x (60c - 25c) = 28,000 to share premium
# Step 3: Closing balances
  Share capital: 50,000 + 12,500 + 20,000 = 82,500
  Share premium: 120,000 - 12,500 + 28,000 = 135,500
= Answer: share capital $82,500; share premium $135,500`,
`# Шаг 1: Бонусный выпуск
  200 000 / 4 = 50 000 новых акций x 25c = 12 500
  Дт Эмиссионный доход 12 500, Кт Акционерный капитал 12 500
# Шаг 2: Выпуск за деньги
  80 000 x 25c = 20 000 в акционерный капитал
  80 000 x (60c - 25c) = 28 000 в эмиссионный доход
# Шаг 3: Остатки на конец
  Акционерный капитал: 50 000 + 12 500 + 20 000 = 82 500
  Эмиссионный доход: 120 000 - 12 500 + 28 000 = 135 500
= Ответ: акционерный капитал $82 500; эмиссионный доход $135 500`,
`# 1-qadam: Bonus emissiya
  200 000 / 4 = 50 000 yangi aksiya x 25c = 12 500
  Dt Emissiya daromadi 12 500, Kt Ustav kapitali 12 500
# 2-qadam: Pulga chiqarish
  80 000 x 25c = 20 000 ustav kapitaliga
  80 000 x (60c - 25c) = 28 000 emissiya daromadiga
# 3-qadam: Yakuniy qoldiqlar
  Ustav kapitali: 50 000 + 12 500 + 20 000 = 82 500
  Emissiya daromadi: 120 000 - 12 500 + 28 000 = 135 500
= Javob: ustav kapitali $82 500; emissiya daromadi $135 500`),

    q('13.5', 227, 'single', `A company's year ends on 31 December. On 1 April it took out a loan of $240,000 at 10% a year. Interest is paid quarterly in arrears on 1 July, 1 October, 1 January and 1 April. What is the interest charge for the year, and the accrual at the year end?`,
      pick(['Charge $18,000; accrual $6,000', 'Charge $24,000; accrual $6,000', 'Charge $12,000; accrual $6,000', 'Charge $18,000; no accrual'], 0),
`# Step 1: Interest for the months the loan was held
  1 April to 31 December = 9 months
  240,000 x 10% x 9/12 = 18,000
# Step 2: Interest paid in the year
  Quarterly amount: 240,000 x 10% / 4 = 6,000
  Paid on 1 July and 1 October: 12,000
# Step 3: Accrual
  18,000 - 12,000 = 6,000 (October to December, paid on 1 January)
= Answer: charge $18,000; accrual $6,000`,
`# Шаг 1: Проценты за месяцы пользования кредитом
  С 1 апреля по 31 декабря = 9 месяцев
  240 000 x 10% x 9/12 = 18 000
# Шаг 2: Проценты, выплаченные в году
  За квартал: 240 000 x 10% / 4 = 6 000
  Выплачено 1 июля и 1 октября: 12 000
# Шаг 3: Начисление
  18 000 - 12 000 = 6 000 (октябрь-декабрь, платят 1 января)
= Ответ: расход $18 000; начисление $6 000`,
`# 1-qadam: Qarzdan foydalanilgan oylar uchun foiz
  1 apreldan 31 dekabrgacha = 9 oy
  240 000 x 10% x 9/12 = 18 000
# 2-qadam: Yil davomida to'langan foiz
  Choraklik: 240 000 x 10% / 4 = 6 000
  1 iyul va 1 oktyabrda to'langan: 12 000
# 3-qadam: Hisoblangan qarz
  18 000 - 12 000 = 6 000 (oktyabr-dekabr, 1 yanvarda to'lanadi)
= Javob: xarajat $18 000; hisoblangan qarz $6 000`),

    q('13.6', 227, 'matrix', `Is each statement about company financial statements true or false?`,
      grid(TF, [
        ['Dividends paid on ordinary shares are shown in the statement of profit or loss and other comprehensive income.', 1],
        ['Dividends paid on redeemable preference shares are treated the same way as ordinary dividends.', 1],
        ['A gain on revaluing non-current assets is shown in the statement of profit or loss and other comprehensive income.', 0],
      ]),
`- Ordinary dividends go to the statement of changes in equity, not profit or loss: FALSE.
- Redeemable preference shares are a liability, so their dividends are a finance cost in profit or loss: FALSE.
- A revaluation gain is shown as other comprehensive income: TRUE.`,
`- Дивиденды по обыкновенным акциям — в отчёте об изменениях капитала, а не в прибыли: НЕВЕРНО.
- Погашаемые привилегированные акции — обязательство, их дивиденды — финансовый расход в прибыли: НЕВЕРНО.
- Прирост от переоценки показывают как прочий совокупный доход: ВЕРНО.`,
`- Oddiy aksiya dividendlari foydada emas, kapital o'zgarishlari hisobotida: NOTO'G'RI.
- Qaytariladigan imtiyozli aksiyalar — majburiyat, dividendlari foydadagi moliyaviy xarajat: NOTO'G'RI.
- Qayta baholashdan o'sish boshqa umumlashgan daromad sifatida ko'rsatiladi: TO'G'RI.`),

    q('13.7', 227, 'single', `A company has 400,000 ordinary shares of 50c each ($200,000) and share premium of $60,000. During the year it made a 1 for 4 rights issue at $1.20 a share, fully taken up. Later it made a 1 for 10 bonus issue using the share premium account. What are share capital and share premium at the year end?`,
      pick([
        'Share capital $275,000; share premium $105,000',
        'Share capital $250,000; share premium $130,000',
        'Share capital $275,000; share premium $130,000',
        'Share capital $300,000; share premium $105,000',
      ], 0),
`# Step 1: Rights issue
  400,000 / 4 = 100,000 shares
  Share capital: 100,000 x 50c = 50,000
  Share premium: 100,000 x (1.20 - 0.50) = 70,000
# Step 2: Bonus issue, on the shares in issue at that time
  (400,000 + 100,000) / 10 = 50,000 shares x 50c = 25,000 from share premium
# Step 3: Closing balances
  Share capital: 200,000 + 50,000 + 25,000 = 275,000
  Share premium: 60,000 + 70,000 - 25,000 = 105,000
= Answer: share capital $275,000; share premium $105,000
! The bonus issue counts the rights shares too, because they were already in issue.`,
`# Шаг 1: Выпуск прав
  400 000 / 4 = 100 000 акций
  Капитал: 100 000 x 50c = 50 000
  Эмиссионный доход: 100 000 x (1,20 - 0,50) = 70 000
# Шаг 2: Бонусный выпуск на акции, бывшие в обращении в тот момент
  (400 000 + 100 000) / 10 = 50 000 акций x 50c = 25 000 из эмиссионного дохода
# Шаг 3: Остатки на конец
  Капитал: 200 000 + 50 000 + 25 000 = 275 000
  Эмиссионный доход: 60 000 + 70 000 - 25 000 = 105 000
= Ответ: акционерный капитал $275 000; эмиссионный доход $105 000
! Бонус считают и на акции из выпуска прав, они уже были в обращении.`,
`# 1-qadam: Huquqlar emissiyasi
  400 000 / 4 = 100 000 aksiya
  Kapital: 100 000 x 50c = 50 000
  Emissiya daromadi: 100 000 x (1,20 - 0,50) = 70 000
# 2-qadam: O'sha paytdagi aksiyalarga bonus emissiya
  (400 000 + 100 000) / 10 = 50 000 aksiya x 50c = 25 000 emissiya daromadidan
# 3-qadam: Yakuniy qoldiqlar
  Kapital: 200 000 + 50 000 + 25 000 = 275 000
  Emissiya daromadi: 60 000 + 70 000 - 25 000 = 105 000
= Javob: ustav kapitali $275 000; emissiya daromadi $105 000
! Bonus huquqlar emissiyasi aksiyalariga ham hisoblanadi, ular allaqachon muomalada edi.`),

    q('13.8', 228, 'number', `On 1 January a company had $800,000 of 6% loan notes, with interest paid half-yearly on 30 June and 31 December. On 31 March it repaid $200,000 of them at par, with interest to that date. On 1 October it issued $400,000 of 5% loan notes. What is the interest charge for the year to 31 December? (in $)`,
      amount(44000, '$44,000'),
`Split the year at each change.
# Step 1: January to March, $800,000 at 6%
  800,000 x 6% x 3/12 = 12,000
# Step 2: April to December, $600,000 at 6%
  600,000 x 6% x 9/12 = 27,000
# Step 3: October to December, new $400,000 at 5%
  400,000 x 5% x 3/12 = 5,000
# Step 4: Total
  12,000 + 27,000 + 5,000 = 44,000
= Answer: $44,000
! The charge is interest for the time each loan was held, whether or not it has been paid yet.`,
`Разделим год в каждой точке изменения.
# Шаг 1: Январь-март, $800 000 под 6%
  800 000 x 6% x 3/12 = 12 000
# Шаг 2: Апрель-декабрь, $600 000 под 6%
  600 000 x 6% x 9/12 = 27 000
# Шаг 3: Октябрь-декабрь, новые $400 000 под 5%
  400 000 x 5% x 3/12 = 5 000
# Шаг 4: Итог
  12 000 + 27 000 + 5 000 = 44 000
= Ответ: $44 000
! Расход — проценты за время пользования каждым займом, оплачены они или нет.`,
`Yilni har bir o'zgarish nuqtasida bo'lamiz.
# 1-qadam: Yanvar-mart, $800 000 6% dan
  800 000 x 6% x 3/12 = 12 000
# 2-qadam: Aprel-dekabr, $600 000 6% dan
  600 000 x 6% x 9/12 = 27 000
# 3-qadam: Oktyabr-dekabr, yangi $400 000 5% dan
  400 000 x 5% x 3/12 = 5 000
# 4-qadam: Jami
  12 000 + 27 000 + 5 000 = 44 000
= Javob: $44 000
! Xarajat — har bir qarzdan foydalanilgan vaqt uchun foiz, to'langan-to'lanmaganidan qat'i nazar.`),

    q('13.9', 228, 'single', `A company issued 80,000 ordinary shares of 20c each at a premium of 30c a share. The cash was recorded correctly, but the whole amount was credited to share capital. Which entry corrects this?`,
      pick([
        'Dr Share premium $24,000, Cr Share capital $24,000',
        'Dr Share capital $24,000, Cr Share premium $24,000',
        'Dr Share capital $40,000, Cr Share premium $40,000',
        'Dr Share capital $24,000, Cr Cash $24,000',
      ], 1),
`# Step 1: What was recorded
  80,000 x 50c = 40,000, all credited to share capital
# Step 2: What should be there
  Share capital: 80,000 x 20c = 16,000
  Share premium: 80,000 x 30c = 24,000
# Step 3: Move the premium
  Dr Share capital 24,000, Cr Share premium 24,000
= Answer: Dr Share capital $24,000, Cr Share premium $24,000`,
`# Шаг 1: Что записали
  80 000 x 50c = 40 000, всё в кредит акционерного капитала
# Шаг 2: Как должно быть
  Акционерный капитал: 80 000 x 20c = 16 000
  Эмиссионный доход: 80 000 x 30c = 24 000
# Шаг 3: Перенесём премию
  Дт Акционерный капитал 24 000, Кт Эмиссионный доход 24 000
= Ответ: Дт Акционерный капитал $24 000, Кт Эмиссионный доход $24 000`,
`# 1-qadam: Nima yozilgan
  80 000 x 50c = 40 000, hammasi ustav kapitali kreditiga
# 2-qadam: Qanday bo'lishi kerak
  Ustav kapitali: 80 000 x 20c = 16 000
  Emissiya daromadi: 80 000 x 30c = 24 000
# 3-qadam: Premiyani ko'chiramiz
  Dt Ustav kapitali 24 000, Kt Emissiya daromadi 24 000
= Javob: Dt Ustav kapitali $24 000, Kt Emissiya daromadi $24 000`),

    q('13.10', 228, 'single', `Which entry could correctly record a bonus issue of shares?`,
      pick([
        'Dr Cash $60,000, Cr Ordinary share capital $60,000',
        'Dr Ordinary share capital $60,000, Cr Share premium $60,000',
        'Dr Share premium $60,000, Cr Ordinary share capital $60,000',
        'Dr Investments $60,000, Cr Cash $60,000',
      ], 2),
`A bonus issue brings in no cash. It turns a reserve into share capital.
# The entry
  Dr Share premium (or another reserve), Cr Ordinary share capital, at nominal value
= Answer: Dr Share premium $60,000, Cr Ordinary share capital $60,000
! Any entry with cash is a share issue for cash, not a bonus issue.`,
`Бонусный выпуск не приносит денег. Он превращает резерв в акционерный капитал.
# Проводка
  Дт Эмиссионный доход (или другой резерв), Кт Акционерный капитал, по номиналу
= Ответ: Дт Эмиссионный доход $60 000, Кт Акционерный капитал $60 000
! Любая проводка с деньгами — выпуск за деньги, а не бонусный.`,
`Bonus emissiya pul keltirmaydi. U zaxirani ustav kapitaliga aylantiradi.
# Yozuv
  Dt Emissiya daromadi (yoki boshqa zaxira), Kt Ustav kapitali, nominalda
= Javob: Dt Emissiya daromadi $60 000, Kt Ustav kapitali $60 000
! Pulli har qanday yozuv — bonus emas, pulga emissiya.`),

    q('13.12', 228, 'single', `On 1 January a company had 2,000,000 ordinary shares of 25c each ($500,000) and share premium of $250,000. On 1 March it issued 400,000 more 25c shares at 90c each. On 1 August it made a 1 for 5 bonus issue on all shares then in issue, using the share premium account. What are share capital and share premium at 31 December?`,
      pick([
        'Share capital $720,000; share premium $390,000',
        'Share capital $720,000; share premium $510,000',
        'Share capital $600,000; share premium $510,000',
        'Share capital $720,000; share premium $270,000',
      ], 0),
`# Step 1: Issue on 1 March
  400,000 x 25c = 100,000 share capital
  400,000 x (90c - 25c) = 260,000 share premium
# Step 2: Bonus issue on 1 August
  (2,000,000 + 400,000) / 5 = 480,000 shares x 25c = 120,000 from share premium
# Step 3: Closing balances
  Share capital: 500,000 + 100,000 + 120,000 = 720,000
  Share premium: 250,000 + 260,000 - 120,000 = 390,000
= Answer: share capital $720,000; share premium $390,000`,
`# Шаг 1: Выпуск 1 марта
  400 000 x 25c = 100 000 капитал
  400 000 x (90c - 25c) = 260 000 эмиссионный доход
# Шаг 2: Бонусный выпуск 1 августа
  (2 000 000 + 400 000) / 5 = 480 000 акций x 25c = 120 000 из эмиссионного дохода
# Шаг 3: Остатки на конец
  Капитал: 500 000 + 100 000 + 120 000 = 720 000
  Эмиссионный доход: 250 000 + 260 000 - 120 000 = 390 000
= Ответ: акционерный капитал $720 000; эмиссионный доход $390 000`,
`# 1-qadam: 1 martdagi emissiya
  400 000 x 25c = 100 000 kapital
  400 000 x (90c - 25c) = 260 000 emissiya daromadi
# 2-qadam: 1 avgustdagi bonus emissiya
  (2 000 000 + 400 000) / 5 = 480 000 aksiya x 25c = 120 000 emissiya daromadidan
# 3-qadam: Yakuniy qoldiqlar
  Kapital: 500 000 + 100 000 + 120 000 = 720 000
  Emissiya daromadi: 250 000 + 260 000 - 120 000 = 390 000
= Javob: ustav kapitali $720 000; emissiya daromadi $390 000`),

    q('13.13', 229, 'single', `Where are dividends paid during the year presented?`,
      pick([
        'Statement of profit or loss and other comprehensive income',
        'Statement of changes in equity',
        'Statement of financial position',
        'None of these',
      ], 1),
`Dividends are a payout to the owners, not an expense, so they do not go through profit or loss.
- They reduce retained earnings and are shown in the statement of changes in equity.
= Answer: the statement of changes in equity`,
`Дивиденды — выплата владельцам, а не расход, поэтому через прибыль они не проходят.
- Они уменьшают нераспределённую прибыль и показываются в отчёте об изменениях капитала.
= Ответ: отчёт об изменениях капитала`,
`Dividendlar — egalarga to'lov, xarajat emas, shuning uchun foyda orqali o'tmaydi.
- Ular taqsimlanmagan foydani kamaytiradi va kapital o'zgarishlari hisobotida ko'rsatiladi.
= Javob: kapital o'zgarishlari hisoboti`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
