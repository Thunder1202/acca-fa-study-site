'use strict';

(function () {
  const TOPIC = 'chapter-17';
  const PREFIX = 'ch17';

  const base = (kitRef, type, text, en, ru, uz) => ({ id: `${PREFIX}-q${kitRef}`, kitRef, topicId: TOPIC, type, text, explanation: { en, ru, uz } });
  const single = (kitRef, text, options, correctIndex, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'single', text, en, ru, uz), options, correctIndex, ...extra });
  const matrix = (kitRef, text, columns, rows, en, ru, uz) => ({ ...base(kitRef, 'matrix', text, en, ru, uz), columns, rows });
  const multi = (kitRef, text, options, correctIndices, en, ru, uz) => ({ ...base(kitRef, 'multi', text, en, ru, uz), options, correctIndices });
  const TF = ['True', 'False'];
  const T = 0;
  const F = 1;

  // Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
  const questions = [
    single(436, 'A company\'s equity shares of $1 stood at $150,000 last year and $400,000 this year, and share premium at $120,000 and $300,000. At the start of the year a bonus issue of 1 share for every 10 was made, and loan notes of $350,000 were issued at par. Interest of $14,000 was paid. What is the net cash inflow from financing activities?',
      ['$416,000', '$430,000', '$766,000', '$780,000'], 2,
      `# Step 1: Cash from issuing shares
  Share capital: $400,000 this year - $150,000 last year = $250,000 rise
  Share premium: $300,000 - $120,000 = $180,000 rise
  Together: $250,000 + $180,000 = $430,000
Why together? The bonus issue (1 for every 10 of 150,000 shares = 15,000 shares, $15,000) only moved money from premium into capital. No cash came in, and adding the two accounts cancels that move out. So all $430,000 is real cash from selling shares.
# Step 2: Add the cash from the new loan notes
  + $350,000 (money borrowed comes in)
# Step 3: Take off the interest paid
  - $14,000 (interest paid is a financing outflow)
= Answer: $430,000 + $350,000 - $14,000 = $766,000 inflow
! Common traps: $780,000 forgets the interest. $430,000 counts only the shares. $416,000 forgets the loan notes.`,
      `# Шаг 1: Деньги от выпуска акций
  Акционерный капитал: $400,000 в этом году - $150,000 в прошлом = рост $250,000
  Эмиссионный доход: $300,000 - $120,000 = рост $180,000
  Вместе: $250,000 + $180,000 = $430,000
Почему вместе? Бонусный выпуск (1 на каждые 10 из 150,000 акций = 15,000 акций, $15,000) лишь перенёс сумму из эмиссионного дохода в капитал. Денег не пришло, а сложение двух счетов убирает этот перенос. Значит, все $430,000 — реальные деньги от продажи акций.
# Шаг 2: Прибавляем деньги от новых долговых нот
  + $350,000 (занятые деньги приходят)
# Шаг 3: Вычитаем уплаченные проценты
  - $14,000 (уплаченные проценты — финансовый отток)
= Ответ: $430,000 + $350,000 - $14,000 = приток $766,000
! Частые ошибки: $780,000 — забыли проценты. $430,000 — учли только акции. $416,000 — забыли ноты.`,
      `# 1-qadam: Aksiya chiqarishdan pul
  Aksiya kapitali: bu yil $400,000 - o'tgan yil $150,000 = $250,000 o'sish
  Emissiya daromadi: $300,000 - $120,000 = $180,000 o'sish
  Birga: $250,000 + $180,000 = $430,000
Nega birga? Bonusli chiqarish (150,000 aksiyaning har 10 tasiga 1 ta = 15,000 aksiya, $15,000) summani emissiya daromadidan kapitalga ko'chirdi, xolos. Pul kelmadi, ikki hisobni qo'shish bu ko'chirishni yo'qotadi. Demak, $430,000 ning hammasi aksiya sotishdan haqiqiy pul.
# 2-qadam: Yangi qarz notalaridan pulni qo'shamiz
  + $350,000 (qarzga olingan pul kiradi)
# 3-qadam: To'langan foizni ayiramiz
  - $14,000 (to'langan foiz moliyaviy chiqim)
= Javob: $430,000 + $350,000 - $14,000 = $766,000 kirim
! Ko'p uchraydigan xatolar: $780,000 — foiz unutilgan. $430,000 — faqat aksiyalar. $416,000 — notalar unutilgan.`),
    single(437, 'A company has identified these cash flows: interest paid $24,000; interest received $15,000; proceeds of share issue $130,000; loan repaid $150,000; dividends paid $70,000. What is the net cash flow from investing activities?',
      ['$15,000 inflow', '$15,000 outflow', '$24,000 outflow', '$9,000 outflow'], 0,
      `# Step 1: Sort each item into its box
  Interest received $15,000: investing (money earned from what you invested)
  Interest paid $24,000: financing (the cost of borrowing)
  Share issue $130,000: financing (money from owners)
  Loan repaid $150,000: financing (money back to a lender)
  Dividends paid $70,000: financing (money back to owners)
# Step 2: Add up the investing box
  Only interest received is there: + $15,000
= Answer: $15,000 inflow
! Common trap: putting interest paid under investing too, which gives $15,000 - $24,000 = $9,000 outflow. Received = investing, paid = financing.`,
      `# Шаг 1: Разложите каждую сумму по разделам
  Полученные проценты $15,000: инвестиционная (доход от вложений)
  Уплаченные проценты $24,000: финансовая (цена займа)
  Выпуск акций $130,000: финансовая (деньги от владельцев)
  Возврат займа $150,000: финансовая (деньги назад кредитору)
  Уплаченные дивиденды $70,000: финансовая (деньги назад владельцам)
# Шаг 2: Сложите инвестиционный раздел
  Там только полученные проценты: + $15,000
= Ответ: приток $15,000
! Частая ошибка: отнести уплаченные проценты тоже к инвестиционной, тогда $15,000 - $24,000 = отток $9,000. Получено — инвестиционная, уплачено — финансовая.`,
      `# 1-qadam: Har bir summani bo'limiga ajrating
  Olingan foiz $15,000: investitsion (sarmoyadan daromad)
  To'langan foiz $24,000: moliyaviy (qarz narxi)
  Aksiya chiqarish $130,000: moliyaviy (egalardan pul)
  Qarz qaytarish $150,000: moliyaviy (qarz beruvchiga qaytgan pul)
  To'langan dividendlar $70,000: moliyaviy (egalarga qaytgan pul)
# 2-qadam: Investitsion bo'limni qo'shing
  U yerda faqat olingan foiz: + $15,000
= Javob: $15,000 kirim
! Ko'p uchraydigan xato: to'langan foizni ham investitsionga qo'yish, unda $15,000 - $24,000 = $9,000 chiqim. Olingan — investitsion, to'langan — moliyaviy.`),
    single(438, 'Which of these could be presented in a statement of cash flows? (1) A bonus issue of shares. (2) A rights issue of shares. (3) The revaluation of non-current assets. (4) Dividends paid.',
      ['1, 2, 3 and 4', '1, 3 and 4 only', '2 and 4 only', '3 only'], 2,
      `Ask one question for each item: did real money move?
- (1) Bonus issue: shareholders get free shares. No money moves. Not shown.
- (2) Rights issue: shareholders pay cash for new shares. Money comes in. Shown under financing.
- (3) Revaluation: the asset is just given a new value on paper. No money moves. Not shown.
- (4) Dividends paid: cash goes out to shareholders. Shown under financing.
= Answer: 2 and 4 only
! Common trap: a bonus issue and a rights issue both create new shares, but only the rights issue brings in cash.`,
      `Для каждой строки задайте вопрос: двигались ли реальные деньги?
- (1) Бонусный выпуск: акционеры получают акции бесплатно. Деньги не двигаются. Не показывается.
- (2) Выпуск прав: акционеры платят деньги за новые акции. Деньги приходят. Финансовая деятельность.
- (3) Переоценка: активу просто дают новую стоимость на бумаге. Деньги не двигаются. Не показывается.
- (4) Уплаченные дивиденды: деньги уходят акционерам. Финансовая деятельность.
= Ответ: только 2 и 4
! Частая ошибка: и бонусный выпуск, и выпуск прав создают новые акции, но деньги приносит только выпуск прав.`,
      `Har bir qator uchun so'rang: haqiqiy pul harakatlandimi?
- (1) Bonusli chiqarish: aksiyadorlar aksiyani bepul oladi. Pul harakatlanmaydi. Ko'rsatilmaydi.
- (2) Huquqli chiqarish: aksiyadorlar yangi aksiya uchun pul to'laydi. Pul kiradi. Moliyaviy faoliyat.
- (3) Qayta baholash: aktivga qog'ozda yangi qiymat beriladi, xolos. Pul harakatlanmaydi. Ko'rsatilmaydi.
- (4) To'langan dividendlar: pul aksiyadorlarga chiqadi. Moliyaviy faoliyat.
= Javob: faqat 2 va 4
! Ko'p uchraydigan xato: bonusli va huquqli chiqarish ikkalasi ham yangi aksiya yaratadi, lekin pulni faqat huquqli chiqarish olib keladi.`),
    multi(439, 'A draft statement shows operating profit $24m, depreciation $9m, increase in inventories ($5m), decrease in receivables ($3m) and increase in payables ($2m), giving cash from operating activities before income taxes of $23m. Which TWO corrections are needed?',
      ['Depreciation should be deducted, not added', 'The increase in inventories should be added, not deducted', 'The decrease in receivables should be added, not deducted', 'The increase in payables should be added, not deducted'], [2, 3],
      `Check each line with one rule: more money stuck in an asset = less cash (deduct); less stuck = more cash (add). More owed to suppliers = cash kept (add).
# Step 1: Check each line
  Depreciation $9m added: correct, it is a cost that used no cash
  Inventories up $5m, deducted: correct, cash went into stock
  Receivables down $3m, deducted: WRONG. Customers paid off more than they ran up, so cash came in. Add it.
  Payables up $2m, deducted: WRONG. You owe suppliers more, so you kept that cash. Add it.
# Step 2: The corrected figure
  $24m + $9m - $5m + $3m + $2m = $33m
= Answer: the receivables and payables lines must both be added
! Common trap: learning only "increase = deduct". That is true for assets (inventory, receivables) but the opposite for liabilities (payables).`,
      `Проверьте каждую строку одним правилом: больше денег застряло в активе — меньше денег (вычесть); меньше застряло — больше денег (прибавить). Больше должны поставщикам — деньги остались (прибавить).
# Шаг 1: Проверяем строки
  Амортизация $9m прибавлена: верно, это расход без денег
  Запасы выросли на $5m, вычтено: верно, деньги ушли в товар
  Дебиторы упали на $3m, вычтено: НЕВЕРНО. Покупатели заплатили больше, деньги пришли. Прибавить.
  Кредиторы выросли на $2m, вычтено: НЕВЕРНО. Вы должны поставщикам больше, деньги остались у вас. Прибавить.
# Шаг 2: Исправленная сумма
  $24m + $9m - $5m + $3m + $2m = $33m
= Ответ: строки дебиторов и кредиторов надо прибавлять
! Частая ошибка: запомнить только «рост = вычесть». Это верно для активов (запасы, дебиторы), но наоборот для обязательств (кредиторы).`,
      `Har bir qatorni bitta qoida bilan tekshiring: aktivda ko'proq pul qotdi — pul kam (ayiring); kamroq qotdi — pul ko'p (qo'shing). Yetkazib beruvchilarga ko'proq qarz — pul sizda qoldi (qo'shing).
# 1-qadam: Qatorlarni tekshiramiz
  Amortizatsiya $9m qo'shilgan: to'g'ri, bu pulsiz xarajat
  Zaxira $5m oshgan, ayirilgan: to'g'ri, pul tovarga ketdi
  Debitorlar $3m kamaygan, ayirilgan: NOTO'G'RI. Mijozlar ko'proq to'ladi, pul keldi. Qo'shish kerak.
  Kreditorlar $2m oshgan, ayirilgan: NOTO'G'RI. Yetkazib beruvchilarga ko'proq qarzsiz, pul sizda qoldi. Qo'shish kerak.
# 2-qadam: To'g'rilangan summa
  $24m + $9m - $5m + $3m + $2m = $33m
= Javob: debitorlar va kreditorlar qatorlari qo'shilishi kerak
! Ko'p uchraydigan xato: faqat «oshish = ayirish» ni yodlash. Bu aktivlar (zaxira, debitorlar) uchun to'g'ri, majburiyatlar (kreditorlar) uchun teskari.`),
    single(440, 'Where should you find the proceeds from the disposal of non-current assets in the year?',
      ['Statement of cash flows only', 'Statement of cash flows and statement of financial position', 'Statement of changes in equity and statement of financial position', 'Statement of profit or loss and statement of cash flows'], 0,
      `Proceeds means the cash you received for the old asset. Think about what each statement holds:
- Statement of cash flows: real cash in and out. The proceeds are here, under investing activities.
- Statement of profit or loss: only the gain or loss on the sale (proceeds minus carrying amount), not the proceeds.
- Statement of financial position: what you own at the year end. The sold asset is gone, and the cash is just part of the bank balance.
- Statement of changes in equity: shares, profit and dividends. No disposals.
= Answer: statement of cash flows only
! Common trap: choosing profit or loss because the sale "shows up" there. Only the gain or loss does, never the cash received.`,
      `Выручка — это деньги, полученные за старый актив. Подумайте, что содержит каждый отчёт:
- Отчёт о движении денежных средств: реальные деньги. Выручка здесь, в инвестиционной деятельности.
- Отчёт о прибыли или убытке: только прибыль или убыток от продажи (выручка минус балансовая стоимость), а не выручка.
- Отчёт о финансовом положении: что у вас есть на конец года. Проданного актива нет, а деньги — просто часть остатка в банке.
- Отчёт об изменениях в капитале: акции, прибыль, дивиденды. Выбытий нет.
= Ответ: только отчёт о движении денежных средств
! Частая ошибка: выбрать прибыль или убыток, потому что продажа там «видна». Там только прибыль или убыток, а не полученные деньги.`,
      `Tushum — eski aktiv uchun olingan pul. Har bir hisobotda nima borligini o'ylang:
- Pul oqimlari to'g'risidagi hisobot: haqiqiy pul. Tushum shu yerda, investitsion faoliyatda.
- Foyda yoki zarar hisoboti: faqat sotuvdan foyda yoki zarar (tushum minus balans qiymati), tushum emas.
- Moliyaviy holat hisoboti: yil oxirida nima borligi. Sotilgan aktiv yo'q, pul esa bank qoldig'ining bir qismi.
- Kapitaldagi o'zgarishlar hisoboti: aksiyalar, foyda, dividendlar. Chiqishlar yo'q.
= Javob: faqat pul oqimlari to'g'risidagi hisobot
! Ko'p uchraydigan xato: sotuv u yerda «ko'rinadi» deb foyda yoki zararni tanlash. U yerda faqat foyda yoki zarar bor, olingan pul emas.`),
    single(441, 'A business\'s bank balance increased by $820,000 in the year. It issued shares raising $1.2 million, repaid a loan of $800,000 and paid income taxes of $110,000. It bought property, plant and equipment for $240,000 and charged depreciation of $120,000. Receivables and inventory increased by $610,000. What was the operating profit?',
      ['$1,260,000', '$1,380,000', '$1,470,000', '$1,500,000'], 0,
      `We know the end result (bank +$820,000) and must work backwards to the start (operating profit).
# Step 1: Write the whole statement with the unknown
  Cash from operations (before tax) = ?
  Tax paid: - $110,000
  Bought equipment: - $240,000
  Shares issued: + $1,200,000
  Loan repaid: - $800,000
  Total change in bank = + $820,000
# Step 2: Find cash from operations
  ? - $110,000 - $240,000 + $1,200,000 - $800,000 = $820,000
  ? + $50,000 = $820,000, so ? = $770,000
# Step 3: Go from cash back to profit
  Normally: profit + depreciation - increase in receivables and inventory = cash
  Profit + $120,000 - $610,000 = $770,000
  Profit = $770,000 - $120,000 + $610,000
= Answer: operating profit $1,260,000
! Common trap: in Step 3 every sign flips because you are going backwards. $1,380,000 comes from adding depreciation instead of taking it off.`,
      `Мы знаем итог (банк +$820,000) и должны дойти назад до начала (операционной прибыли).
# Шаг 1: Запишем весь отчёт с неизвестным
  Деньги от операций (до налога) = ?
  Уплаченный налог: - $110,000
  Покупка оборудования: - $240,000
  Выпуск акций: + $1,200,000
  Возврат займа: - $800,000
  Изменение банка = + $820,000
# Шаг 2: Найдём деньги от операций
  ? - $110,000 - $240,000 + $1,200,000 - $800,000 = $820,000
  ? + $50,000 = $820,000, значит ? = $770,000
# Шаг 3: От денег назад к прибыли
  Обычно: прибыль + амортизация - рост дебиторов и запасов = деньги
  Прибыль + $120,000 - $610,000 = $770,000
  Прибыль = $770,000 - $120,000 + $610,000
= Ответ: операционная прибыль $1,260,000
! Частая ошибка: на шаге 3 все знаки меняются, потому что мы идём назад. $1,380,000 получается, если прибавить амортизацию, а не вычесть.`,
      `Natijani bilamiz (bank +$820,000), boshiga (operatsion foydaga) orqaga borishimiz kerak.
# 1-qadam: Butun hisobotni noma'lum bilan yozamiz
  Operatsiyalardan pul (soliqdan oldin) = ?
  To'langan soliq: - $110,000
  Uskuna xaridi: - $240,000
  Aksiya chiqarish: + $1,200,000
  Qarz qaytarish: - $800,000
  Bankdagi o'zgarish = + $820,000
# 2-qadam: Operatsiyalardan pulni topamiz
  ? - $110,000 - $240,000 + $1,200,000 - $800,000 = $820,000
  ? + $50,000 = $820,000, demak ? = $770,000
# 3-qadam: Puldan foydaga orqaga
  Odatda: foyda + amortizatsiya - debitor va zaxira o'sishi = pul
  Foyda + $120,000 - $610,000 = $770,000
  Foyda = $770,000 - $120,000 + $610,000
= Javob: operatsion foyda $1,260,000
! Ko'p uchraydigan xato: 3-qadamda barcha belgilar teskari bo'ladi, chunki orqaga boramiz. $1,380,000 amortizatsiyani ayirish o'rniga qo'shishdan chiqadi.`),
    single(442, 'A company has these amounts: interest and dividends paid $92,000; increase in payables $14,500; decrease in inventories $9,300; redemption of loans $320,000; increase in receivables $6,900; decrease in cash and cash equivalents $3,400; depreciation $11,200; payments for non-current assets $51,000; proceeds of sale of non-current assets $14,000. What is net cash from operating activities?',
      ['$353,600', '$360,400', '$445,600', '$452,400'], 2,
      `There is no profit figure, so we cannot build operating activities line by line. Instead, find the other two boxes and work back from the total cash change.
# Step 1: Investing activities
  Paid for non-current assets: - $51,000
  Proceeds of sale: + $14,000
  Investing = - $37,000
# Step 2: Financing activities
  Interest and dividends paid: - $92,000
  Loans repaid (redeemed): - $320,000
  Financing = - $412,000
# Step 3: Work back to operating
  Operating - $37,000 - $412,000 = - $3,400 (cash went down)
  Operating = - $3,400 + $37,000 + $412,000
= Answer: $445,600
The payables, inventory, receivables and depreciation figures are already inside operating activities, so they are not used here.
! Common traps: $452,400 treats the cash change as +$3,400 instead of a decrease. $353,600 puts interest and dividends paid under operating.`,
      `Прибыли нет, поэтому операционную деятельность нельзя построить по строкам. Найдём два других раздела и пойдём назад от общего изменения денег.
# Шаг 1: Инвестиционная деятельность
  Оплата внеоборотных активов: - $51,000
  Выручка от продажи: + $14,000
  Инвестиционная = - $37,000
# Шаг 2: Финансовая деятельность
  Уплаченные проценты и дивиденды: - $92,000
  Погашение займов: - $320,000
  Финансовая = - $412,000
# Шаг 3: Назад к операционной
  Операционная - $37,000 - $412,000 = - $3,400 (деньги уменьшились)
  Операционная = - $3,400 + $37,000 + $412,000
= Ответ: $445,600
Кредиторы, запасы, дебиторы и амортизация уже входят в операционную деятельность, поэтому здесь не нужны.
! Частые ошибки: $452,400 — изменение денег взято как +$3,400, а не уменьшение. $353,600 — проценты и дивиденды отнесены к операционной.`,
      `Foyda yo'q, shuning uchun operatsion faoliyatni qatorma-qator tuzib bo'lmaydi. Qolgan ikki bo'limni topib, pulning umumiy o'zgarishidan orqaga boramiz.
# 1-qadam: Investitsion faoliyat
  Uzoq muddatli aktivlar uchun to'lov: - $51,000
  Sotuvdan tushum: + $14,000
  Investitsion = - $37,000
# 2-qadam: Moliyaviy faoliyat
  To'langan foiz va dividendlar: - $92,000
  Qarzlarni qaytarish: - $320,000
  Moliyaviy = - $412,000
# 3-qadam: Operatsionga orqaga
  Operatsion - $37,000 - $412,000 = - $3,400 (pul kamaydi)
  Operatsion = - $3,400 + $37,000 + $412,000
= Javob: $445,600
Kreditorlar, zaxira, debitorlar va amortizatsiya allaqachon operatsion faoliyat ichida, shuning uchun bu yerda kerak emas.
! Ko'p uchraydigan xatolar: $452,400 — pul o'zgarishi kamayish emas, +$3,400 deb olingan. $353,600 — foiz va dividendlar operatsionga qo'yilgan.`),
    single(443, 'A business had non-current assets with a carrying amount of $60,000 at the start of the year. It sold assets that cost $5,000 and had been depreciated by $1,800. Depreciation for the year was $11,000. The carrying amount at the end of the year was $56,000. How much cash was invested in non-current assets?',
      ['$5,000', '$10,200', '$11,000', '$12,000'], 1,
      `The purchases are the missing number. Use the carrying amount "story" of the year: start + bought - sold - depreciation = end.
# Step 1: Carrying amount of the assets sold
  Cost $5,000 - depreciation on them $1,800 = $3,200
# Step 2: Fill in the story
  $60,000 start + bought - $3,200 sold - $11,000 depreciation = $56,000 end
# Step 3: Solve for "bought"
  Bought = $56,000 - $60,000 + $3,200 + $11,000
= Answer: $10,200
! Common trap: taking the sold assets out at cost ($5,000) instead of carrying amount ($3,200) gives $12,000. In a carrying amount account, everything is at carrying amount.`,
      `Покупки — недостающее число. Используйте «историю» балансовой стоимости за год: начало + купили - продали - амортизация = конец.
# Шаг 1: Балансовая стоимость проданного
  Стоимость $5,000 - их амортизация $1,800 = $3,200
# Шаг 2: Заполняем историю
  $60,000 начало + купили - $3,200 продали - $11,000 амортизация = $56,000 конец
# Шаг 3: Находим «купили»
  Купили = $56,000 - $60,000 + $3,200 + $11,000
= Ответ: $10,200
! Частая ошибка: убрать проданное по стоимости ($5,000), а не по балансовой ($3,200), получится $12,000. В счёте балансовой стоимости всё по балансовой стоимости.`,
      `Xaridlar — yetishmayotgan son. Yil uchun balans qiymati «hikoyasi»dan foydalaning: boshlanish + sotib olingan - sotilgan - amortizatsiya = oxiri.
# 1-qadam: Sotilganlarning balans qiymati
  Qiymati $5,000 - ularning amortizatsiyasi $1,800 = $3,200
# 2-qadam: Hikoyani to'ldiramiz
  $60,000 boshlanish + sotib olingan - $3,200 sotilgan - $11,000 amortizatsiya = $56,000 oxiri
# 3-qadam: «Sotib olingan»ni topamiz
  Sotib olingan = $56,000 - $60,000 + $3,200 + $11,000
= Javob: $10,200
! Ko'p uchraydigan xato: sotilganni balans qiymati ($3,200) emas, qiymati ($5,000) bilan olish $12,000 beradi. Balans qiymati hisobida hammasi balans qiymatida.`),
    matrix(444, 'State whether each statement about a statement of cash flows prepared by the direct method is true or false.', TF, [
      { text: 'The direct method gives a different figure for investing activities than the indirect method', correctIndex: F },
      { text: 'A bonus issue of shares does not feature in a statement of cash flows', correctIndex: T },
      { text: 'The year\'s amortisation charge appears as an item under operating activities', correctIndex: F },
      { text: 'A loss on sale of a non-current asset appears under investing activities', correctIndex: F },
    ],
      `- Different investing figure: FALSE. Direct and indirect only change how operating activities are shown. Investing and financing are identical.
- Bonus issue not featured: TRUE. Shareholders get free shares and no money moves.
- Amortisation under operating: FALSE. The direct method lists real cash (from customers, to suppliers and staff). Amortisation is not cash, so it never appears. Only the indirect method adds it back.
- Loss on sale under investing: FALSE. A loss is not cash. Investing shows the cash proceeds only.
! Common trap: mixing the two methods. Adjustments such as amortisation and losses belong only to the indirect method.`,
      `- Другая сумма инвестиционной: НЕВЕРНО. Прямой и косвенный методы меняют только показ операционной деятельности. Инвестиционная и финансовая одинаковы.
- Бонусного выпуска нет: ВЕРНО. Акционеры получают акции бесплатно, деньги не двигаются.
- Амортизация в операционной: НЕВЕРНО. Прямой метод перечисляет реальные деньги (от покупателей, поставщикам и персоналу). Амортизация — не деньги, её там нет. Прибавляет её только косвенный метод.
- Убыток от продажи в инвестиционной: НЕВЕРНО. Убыток — не деньги. В инвестиционной только полученная выручка.
! Частая ошибка: смешивать методы. Корректировки вроде амортизации и убытков есть только в косвенном методе.`,
      `- Investitsion summa boshqacha: NOTO'G'RI. To'g'ridan-to'g'ri va bilvosita usullar faqat operatsion faoliyat ko'rinishini o'zgartiradi. Investitsion va moliyaviy bir xil.
- Bonusli chiqarish yo'q: TO'G'RI. Aksiyadorlar aksiyani bepul oladi, pul harakatlanmaydi.
- Amortizatsiya operatsionda: NOTO'G'RI. To'g'ridan-to'g'ri usul haqiqiy pulni sanaydi (mijozlardan, yetkazib beruvchi va xodimlarga). Amortizatsiya pul emas, u yerda yo'q. Uni faqat bilvosita usul qo'shadi.
- Sotuv zarari investitsionda: NOTO'G'RI. Zarar pul emas. Investitsionda faqat olingan tushum.
! Ko'p uchraydigan xato: usullarni aralashtirish. Amortizatsiya va zarar kabi tuzatishlar faqat bilvosita usulda.`),
    single(445, 'A company made an operating profit of $24,600 after depreciation of $1,500. It bought non-current assets for $9,000 and paid income taxes of $2,400. Receivables rose by $1,200, inventories fell by $2,100 and payables rose by $420. What was the increase in cash and bank balances?',
      ['$11,820', '$15,180', '$16,020', '$18,420'], 2,
      `# Step 1: Start with operating profit
  $24,600
# Step 2: Add back depreciation (a cost that used no cash)
  $24,600 + $1,500 = $26,100
# Step 3: Adjust for working capital
  Receivables rose $1,200: customers owe more, cash not yet in. Deduct: $26,100 - $1,200 = $24,900
  Inventories fell $2,100: you sold stock without replacing it. Add: $24,900 + $2,100 = $27,000
  Payables rose $420: you owe suppliers more, cash kept. Add: $27,000 + $420 = $27,420
# Step 4: Take off the other cash paid out
  Income taxes paid: - $2,400
  Non-current assets bought: - $9,000
= Answer: $27,420 - $2,400 - $9,000 = $16,020 increase
! Common traps: $18,420 forgets the tax. $11,820 deducts the fall in inventories instead of adding it. $15,180 deducts the rise in payables.`,
      `# Шаг 1: Начинаем с операционной прибыли
  $24,600
# Шаг 2: Прибавляем амортизацию (расход без денег)
  $24,600 + $1,500 = $26,100
# Шаг 3: Корректируем оборотный капитал
  Дебиторы выросли на $1,200: покупатели должны больше, денег ещё нет. Вычесть: $26,100 - $1,200 = $24,900
  Запасы упали на $2,100: вы продали товар и не докупили. Прибавить: $24,900 + $2,100 = $27,000
  Кредиторы выросли на $420: вы должны больше, деньги остались. Прибавить: $27,000 + $420 = $27,420
# Шаг 4: Вычитаем другие выплаты
  Уплаченный налог на прибыль: - $2,400
  Покупка внеоборотных активов: - $9,000
= Ответ: $27,420 - $2,400 - $9,000 = рост $16,020
! Частые ошибки: $18,420 — забыли налог. $11,820 — падение запасов вычли, а не прибавили. $15,180 — рост кредиторов вычли.`,
      `# 1-qadam: Operatsion foydadan boshlaymiz
  $24,600
# 2-qadam: Amortizatsiyani qo'shamiz (pulsiz xarajat)
  $24,600 + $1,500 = $26,100
# 3-qadam: Aylanma kapitalni tuzatamiz
  Debitorlar $1,200 oshdi: mijozlar ko'proq qarz, pul hali yo'q. Ayiring: $26,100 - $1,200 = $24,900
  Zaxira $2,100 kamaydi: tovar sotildi, o'rniga olinmadi. Qo'shing: $24,900 + $2,100 = $27,000
  Kreditorlar $420 oshdi: siz ko'proq qarzsiz, pul qoldi. Qo'shing: $27,000 + $420 = $27,420
# 4-qadam: Boshqa to'lovlarni ayiramiz
  To'langan foyda solig'i: - $2,400
  Uzoq muddatli aktivlar xaridi: - $9,000
= Javob: $27,420 - $2,400 - $9,000 = $16,020 o'sish
! Ko'p uchraydigan xatolar: $18,420 — soliq unutilgan. $11,820 — zaxira kamayishi qo'shilmay, ayirilgan. $15,180 — kreditorlar o'sishi ayirilgan.`),
    single(446, 'A statement of cash flows by the indirect method reconciles operating profit to net cash from operating activities. Which list contains items that would ALL be added to operating profit?',
      ['Decrease in inventory, depreciation charge, profit on sale of non-current assets', 'Decrease in receivables, increase in payables, loss on sale of non-current assets', 'Loss on sale of non-current assets, depreciation charge, increase in receivables', 'Increase in payables, decrease in receivables, profit on sale of non-current assets'], 1,
      `Sort each item into "add" or "deduct":
- Added: depreciation, a loss on sale (both lowered profit but used no cash), a decrease in inventory or receivables (cash freed up), an increase in payables (cash kept).
- Deducted: a profit on sale (it raised profit, but the cash is shown under investing), an increase in receivables (cash not yet collected).
Now check each list. Option 1 and option 4 contain a profit on sale, and option 3 contains an increase in receivables, so each has one item that is deducted.
= Answer: decrease in receivables, increase in payables, loss on sale
! Common trap: a loss and a profit on sale go opposite ways. Add back a loss, deduct a profit.`,
      `Разложите строки на «прибавить» и «вычесть»:
- Прибавляются: амортизация, убыток от продажи (оба уменьшили прибыль без денег), падение запасов или дебиторов (деньги освободились), рост кредиторов (деньги остались).
- Вычитаются: прибыль от продажи (она увеличила прибыль, а деньги показаны в инвестиционной), рост дебиторов (деньги ещё не собраны).
Теперь проверьте списки. В вариантах 1 и 4 есть прибыль от продажи, в варианте 3 — рост дебиторов, то есть в каждом есть строка на вычитание.
= Ответ: падение дебиторов, рост кредиторов, убыток от продажи
! Частая ошибка: убыток и прибыль от продажи идут в разные стороны. Убыток прибавить, прибыль вычесть.`,
      `Har bir qatorni «qo'shish» yoki «ayirish»ga ajrating:
- Qo'shiladi: amortizatsiya, sotuv zarari (ikkalasi foydani pulsiz kamaytirdi), zaxira yoki debitorlar kamayishi (pul bo'shadi), kreditorlar oshishi (pul qoldi).
- Ayiriladi: sotuv foydasi (u foydani oshirdi, puli esa investitsionda), debitorlar oshishi (pul hali yig'ilmagan).
Endi ro'yxatlarni tekshiring. 1 va 4-variantlarda sotuv foydasi, 3-variantda debitorlar oshishi bor, ya'ni har birida ayiriladigan qator bor.
= Javob: debitorlar kamayishi, kreditorlar oshishi, sotuv zarari
! Ko'p uchraydigan xato: sotuv zarari va foydasi teskari yo'nalishda. Zararni qo'shing, foydani ayiring.`),
    matrix(447, 'State whether each statement is true or false.', TF, [
      { text: 'The direct method gives a different net cash from operating activities than the indirect method, balanced elsewhere in the statement', correctIndex: F },
      { text: 'A business making high profits must have a net cash inflow from operating activities', correctIndex: F },
      { text: 'Profits and losses on disposals of non-current assets are classified as investing activities', correctIndex: F },
    ],
      `- Different net cash by the direct method: FALSE. Both methods reach exactly the same figure. They only show the working differently.
- High profit means a cash inflow: FALSE. Profit is not cash. If customers have not paid yet, or lots of money went into stock, a profitable business can have cash going out.
- Gains and losses on disposal are investing: FALSE. They are not cash. Under the indirect method they are adjustments inside operating activities. Only the cash proceeds are investing.
! Common trap: remember the rule "investing shows the proceeds, never the gain or loss".`,
      `- Прямой метод даёт другую сумму: НЕВЕРНО. Оба метода дают ровно одну и ту же сумму, только расчёт показан по-разному.
- Высокая прибыль значит приток денег: НЕВЕРНО. Прибыль — не деньги. Если покупатели ещё не заплатили или много денег ушло в запасы, у прибыльного бизнеса деньги могут уходить.
- Прибыль и убыток от выбытия — инвестиционные: НЕВЕРНО. Это не деньги. При косвенном методе это корректировки внутри операционной деятельности. Инвестиционная — только полученная выручка.
! Частая ошибка: запомните правило «в инвестиционной — выручка, никогда не прибыль или убыток».`,
      `- To'g'ridan-to'g'ri usul boshqa summa beradi: NOTO'G'RI. Ikkala usul aynan bir xil summaga keladi, faqat hisob boshqacha ko'rsatiladi.
- Yuqori foyda pul kirimini bildiradi: NOTO'G'RI. Foyda pul emas. Mijozlar hali to'lamagan bo'lsa yoki ko'p pul zaxiraga ketgan bo'lsa, foydali biznesda pul chiqib ketishi mumkin.
- Chiqish foydasi va zarari investitsion: NOTO'G'RI. Ular pul emas. Bilvosita usulda ular operatsion faoliyat ichidagi tuzatishlar. Investitsion — faqat olingan tushum.
! Ko'p uchraydigan xato: qoidani eslang: «investitsionda tushum, hech qachon foyda yoki zarar emas».`),
    single(448, 'A plant account shows: cost b/f $12,000, additions $2,500, disposals ($3,600), cost c/f $10,900; depreciation b/f $2,400, charge $1,200, disposals ($1,800), depreciation c/f $1,800. The profit on sale was $600. What figures are presented as investing activities?',
      ['Purchase of plant $2,500 and proceeds of sale $2,400', 'Purchase of plant $2,500 and profit on disposal $600', 'Movement on plant account $500 and profit on disposal $600', 'Movement on plant account $500 and proceeds of sale $2,400'], 0,
      `Investing shows two separate cash figures: what you paid for new plant, and what you received for old plant.
# Step 1: Cash paid for new plant
  The additions line tells us: $2,500 out
# Step 2: Carrying amount of the plant sold
  Its cost $3,600 - its depreciation $1,800 = $1,800
# Step 3: Cash received for it
  Sold at a profit of $600, so it went for more than its carrying amount
  Proceeds = $1,800 + $600 = $2,400 in
= Answer: purchase of plant $2,500 and proceeds of sale $2,400
! Common traps: the $600 profit is not cash, so it is never an investing line. And the purchase and the sale are shown separately, not as one net "movement".`,
      `В инвестиционной две отдельные денежные суммы: сколько заплатили за новое оборудование и сколько получили за старое.
# Шаг 1: Деньги за новое оборудование
  Строка покупок: $2,500 ушло
# Шаг 2: Балансовая стоимость проданного
  Его стоимость $3,600 - его амортизация $1,800 = $1,800
# Шаг 3: Полученные за него деньги
  Продано с прибылью $600, то есть дороже балансовой стоимости
  Выручка = $1,800 + $600 = $2,400 пришло
= Ответ: покупка $2,500 и выручка от продажи $2,400
! Частые ошибки: прибыль $600 — не деньги, её в инвестиционной нет. Покупка и продажа показываются отдельно, а не одним нетто «движением».`,
      `Investitsionda ikki alohida pul summasi: yangi uskuna uchun qancha to'langani va eskisi uchun qancha olingani.
# 1-qadam: Yangi uskuna uchun pul
  Xaridlar qatori: $2,500 chiqdi
# 2-qadam: Sotilgan uskunaning balans qiymati
  Qiymati $3,600 - amortizatsiyasi $1,800 = $1,800
# 3-qadam: U uchun olingan pul
  $600 foyda bilan sotilgan, ya'ni balans qiymatidan qimmat
  Tushum = $1,800 + $600 = $2,400 kirdi
= Javob: uskuna xaridi $2,500 va sotuvdan tushum $2,400
! Ko'p uchraydigan xatolar: $600 foyda pul emas, u investitsionda yo'q. Xarid va sotuv alohida ko'rsatiladi, bitta sof «harakat» sifatida emas.`),
    single(449, 'Which of these is NOT an advantage of a statement of cash flows?',
      ['It helps users estimate future cash flows', 'It helps assess the liquidity of a business', 'It highlights the effect of non-cash transactions', 'Its figures cannot be manipulated through helpful accounting policies'], 2,
      `Go through each option:
- Helps estimate future cash flows: an advantage. Past cash patterns help predict the future.
- Helps assess liquidity: an advantage. It shows whether the business can pay its bills.
- Highlights non-cash transactions: NOT an advantage. The statement leaves non-cash items (bonus issues, revaluations) out completely, so it cannot highlight them. This is one of its drawbacks.
- Cannot be manipulated by accounting policies: an advantage. Cash is a fact, while profit depends on choices such as depreciation methods.
= Answer: it highlights the effect of non-cash transactions`,
      `Пройдём по вариантам:
- Помогает оценить будущие потоки: преимущество. Прошлые потоки помогают прогнозировать.
- Помогает оценить ликвидность: преимущество. Видно, сможет ли бизнес платить по счетам.
- Выделяет неденежные операции: НЕ преимущество. Отчёт вообще не включает неденежные статьи (бонусный выпуск, переоценку), поэтому не может их выделять. Это один из недостатков.
- Нельзя исказить учётной политикой: преимущество. Деньги — факт, а прибыль зависит от выбора, например метода амортизации.
= Ответ: выделяет влияние неденежных операций`,
      `Variantlarni ko'rib chiqamiz:
- Kelajak oqimlarini baholashga yordam beradi: afzallik. O'tgan oqimlar kelajakni bashorat qilishga yordam beradi.
- Likvidlikni baholashga yordam beradi: afzallik. Biznes hisoblarini to'lay oladimi, ko'rinadi.
- Pulsiz operatsiyalarni ajratib ko'rsatadi: afzallik EMAS. Hisobot pulsiz moddalarni (bonusli chiqarish, qayta baholash) umuman kiritmaydi, ularni ajratib ko'rsata olmaydi. Bu kamchiliklardan biri.
- Hisob siyosati bilan buzib bo'lmaydi: afzallik. Pul — fakt, foyda esa amortizatsiya usuli kabi tanlovlarga bog'liq.
= Javob: pulsiz operatsiyalar ta'sirini ajratib ko'rsatadi`),
    single(450, 'A business makes all sales for cash and uses the direct method. Cash sales were $240,000, cash purchases $5,000 and cash expenses $12,000. Payables were $13,000 at the start and $15,000 at the end, and credit purchases $130,000. Wages due were $1,600 at the start and $2,400 at the end, and the wages expense was $36,000. Inventory was $24,000 at the start and $19,000 at the end. What is cash generated from operations?',
      ['$57,800', '$59,000', '$59,800', '$64,800'], 2,
      `The direct method adds up real cash: money in from customers, minus money out to suppliers, for expenses and to staff.
# Step 1: Cash paid to credit suppliers
  Owed at the start $13,000 + new credit purchases $130,000 = $143,000 to pay in total
  Still owed at the end: $15,000, so paid = $143,000 - $15,000 = $128,000
# Step 2: Wages actually paid
  Owed at the start $1,600 + this year's wages $36,000 - still owed at the end $2,400 = $35,200
# Step 3: Put it all together
  Cash from customers (all cash sales): + $240,000
  Cash purchases: - $5,000
  Cash expenses: - $12,000
  Paid to credit suppliers: - $128,000
  Wages paid: - $35,200
= Answer: $59,800
The inventory figures are not used: purchases are already given, and the direct method only counts money paid.
! Common traps: $59,000 uses the wages expense ($36,000) instead of wages paid. $64,800 adds the fall in inventory, which belongs to the indirect method.`,
      `Прямой метод складывает реальные деньги: от покупателей, минус поставщикам, на расходы и персоналу.
# Шаг 1: Выплаты поставщикам в кредит
  Долг на начало $13,000 + новые закупки в кредит $130,000 = $143,000 всего к оплате
  Долг на конец: $15,000, значит заплачено $143,000 - $15,000 = $128,000
# Шаг 2: Фактически выплаченная зарплата
  Долг на начало $1,600 + зарплата года $36,000 - долг на конец $2,400 = $35,200
# Шаг 3: Собираем всё вместе
  Деньги от покупателей (все продажи за наличные): + $240,000
  Закупки за наличные: - $5,000
  Расходы наличными: - $12,000
  Поставщикам в кредит: - $128,000
  Зарплата: - $35,200
= Ответ: $59,800
Запасы не используются: закупки уже даны, а прямой метод считает только оплаты.
! Частые ошибки: $59,000 — взяли расход на зарплату ($36,000), а не выплату. $64,800 — прибавили падение запасов, это косвенный метод.`,
      `To'g'ridan-to'g'ri usul haqiqiy pulni qo'shadi: mijozlardan kelgan, minus yetkazib beruvchilarga, xarajatlarga va xodimlarga.
# 1-qadam: Nasiya yetkazib beruvchilarga to'lov
  Boshidagi qarz $13,000 + yangi nasiya xaridlar $130,000 = jami to'lanishi kerak $143,000
  Oxirida qolgan qarz: $15,000, demak to'langan $143,000 - $15,000 = $128,000
# 2-qadam: Haqiqatan to'langan ish haqi
  Boshidagi qarz $1,600 + yil ish haqi $36,000 - oxiridagi qarz $2,400 = $35,200
# 3-qadam: Hammasini jamlaymiz
  Mijozlardan pul (hamma sotuv naqd): + $240,000
  Naqd xaridlar: - $5,000
  Naqd xarajatlar: - $12,000
  Nasiya yetkazib beruvchilarga: - $128,000
  Ish haqi: - $35,200
= Javob: $59,800
Zaxira ishlatilmaydi: xaridlar berilgan, to'g'ridan-to'g'ri usul esa faqat to'lovlarni sanaydi.
! Ko'p uchraydigan xatolar: $59,000 — to'langan emas, ish haqi xarajati ($36,000) olingan. $64,800 — zaxira kamayishi qo'shilgan, bu bilvosita usul.`),
    single(451, 'Extracts ($000) for the years ended 31 December show: retained earnings 20X6 $80,000, 20X7 $92,000; 10% loan notes $30,000 and $40,000; income taxes payable $12,000 and $15,000; dividends payable $1,200 and $1,600. Dividends payable were declared before the year end, there was no tax over or underprovision, there were no interim dividends, and the extra loan notes were issued on 1 January 20X7. What is operating profit for 20X7 ($000)?',
      ['$28,600', '$31,600', '$32,600', '$112,600'], 2,
      `Retained earnings grow by what is left of profit after tax, interest and dividends. So start from that growth and add those three back.
# Step 1: How much retained earnings grew
  $92,000 end - $80,000 start = $12,000
# Step 2: Add back this year's dividends
  Dividends declared this year (the closing payable): $1,600
# Step 3: Add back this year's tax
  Tax payable at the end, with no over or underprovision: $15,000
# Step 4: Add back this year's interest
  The extra notes were issued on 1 January, so all $40,000 earned interest for the whole year
  10% × $40,000 = $4,000
= Answer: $12,000 + $1,600 + $15,000 + $4,000 = $32,600
! Common traps: $31,600 charges interest on only $30,000. $28,600 forgets interest. $112,600 starts from the closing balance $92,000 instead of the growth of $12,000.`,
      `Нераспределённая прибыль растёт на то, что осталось от прибыли после налога, процентов и дивидендов. Начнём с этого роста и прибавим эти три суммы назад.
# Шаг 1: На сколько выросла нераспределённая прибыль
  $92,000 конец - $80,000 начало = $12,000
# Шаг 2: Прибавляем дивиденды этого года
  Объявлены в этом году (задолженность на конец): $1,600
# Шаг 3: Прибавляем налог этого года
  Налог к уплате на конец, без пере- или недоначисления: $15,000
# Шаг 4: Прибавляем проценты этого года
  Новые ноты выпущены 1 января, значит все $40,000 приносили проценты весь год
  10% × $40,000 = $4,000
= Ответ: $12,000 + $1,600 + $15,000 + $4,000 = $32,600
! Частые ошибки: $31,600 — проценты только с $30,000. $28,600 — забыли проценты. $112,600 — начали с остатка $92,000, а не с роста $12,000.`,
      `Taqsimlanmagan foyda soliq, foiz va dividendlardan keyin qolgan foyda qadar o'sadi. Shu o'sishdan boshlab, uchalasini qaytarib qo'shamiz.
# 1-qadam: Taqsimlanmagan foyda qancha o'sdi
  $92,000 oxiri - $80,000 boshi = $12,000
# 2-qadam: Shu yil dividendlarini qo'shamiz
  Shu yil e'lon qilingan (oxiridagi qarz): $1,600
# 3-qadam: Shu yil soliqni qo'shamiz
  Oxirida to'lanadigan soliq, ortiqcha yoki kam hisoblash yo'q: $15,000
# 4-qadam: Shu yil foizni qo'shamiz
  Yangi notalar 1 yanvarda chiqarilgan, demak $40,000 ning hammasi butun yil foiz keltirdi
  10% × $40,000 = $4,000
= Javob: $12,000 + $1,600 + $15,000 + $4,000 = $32,600
! Ko'p uchraydigan xatolar: $31,600 — foiz faqat $30,000 dan. $28,600 — foiz unutilgan. $112,600 — $12,000 o'sish emas, $92,000 qoldiqdan boshlangan.`),
    single(452, 'In the year a company bought non-current assets for $160,000, financing them partly with a new loan of $130,000. It disposed of non-current assets with a carrying amount of $60,000 at a loss of $4,000, and received $20,000 from selling investments. What is net cash from investing activities?',
      ['$46,000 inflow', '$84,000 outflow', '$84,000 inflow', '$76,000 outflow'], 1,
      `# Step 1: Assets bought
  - $160,000 (the full price is investing, however it was paid for)
# Step 2: Cash from the assets sold
  Carrying amount $60,000, sold at a $4,000 loss, so for less than that
  Proceeds = $60,000 - $4,000 = + $56,000
# Step 3: Investments sold
  + $20,000
= Answer: - $160,000 + $56,000 + $20,000 = $84,000 outflow
The $130,000 loan is financing (money from a lender), even though it helped pay for the assets.
! Common traps: $46,000 inflow includes the loan here. $76,000 outflow adds the $4,000 loss instead of deducting it.`,
      `# Шаг 1: Купленные активы
  - $160,000 (вся цена — инвестиционная, как бы её ни оплатили)
# Шаг 2: Деньги за проданные активы
  Балансовая стоимость $60,000, продано с убытком $4,000, то есть дешевле
  Выручка = $60,000 - $4,000 = + $56,000
# Шаг 3: Проданные инвестиции
  + $20,000
= Ответ: - $160,000 + $56,000 + $20,000 = отток $84,000
Заём $130,000 — финансовая деятельность (деньги от кредитора), даже если он помог оплатить активы.
! Частые ошибки: приток $46,000 — заём включён сюда. Отток $76,000 — убыток $4,000 прибавлен, а не вычтен.`,
      `# 1-qadam: Sotib olingan aktivlar
  - $160,000 (to'liq narx investitsion, qanday to'langanidan qat'i nazar)
# 2-qadam: Sotilgan aktivlar uchun pul
  Balans qiymati $60,000, $4,000 zarar bilan, ya'ni arzonroq sotilgan
  Tushum = $60,000 - $4,000 = + $56,000
# 3-qadam: Sotilgan investitsiyalar
  + $20,000
= Javob: - $160,000 + $56,000 + $20,000 = $84,000 chiqim
$130,000 qarz moliyaviy faoliyat (qarz beruvchidan pul), aktivlarni to'lashga yordam bergan bo'lsa ham.
! Ko'p uchraydigan xatolar: $46,000 kirim — qarz shu yerga kiritilgan. $76,000 chiqim — $4,000 zarar ayirilmay, qo'shilgan.`),
    single(453, 'Extracts at 31 October ($000) show: share capital 20X7 150, 20X6 100; share premium 70 and 50; retained earnings 95 and 70; bank loan 120 and 170. What is the net cash flow from financing activities for 20X7?',
      ['$20,000 inflow', '$70,000 inflow', '$120,000 inflow', '$20,000 outflow'], 0,
      `The figures are in $000, so 150 means $150,000.
# Step 1: Cash from new shares
  Share capital: $150,000 - $100,000 = $50,000
  Share premium: $70,000 - $50,000 = $20,000
  Together: + $70,000
# Step 2: The bank loan
  It fell from $170,000 to $120,000, so $50,000 was repaid: - $50,000
= Answer: $70,000 - $50,000 = $20,000 inflow
Retained earnings are left out: they grow from profit, not from cash paid in by shareholders or lenders.
! Common traps: $70,000 forgets the loan. $120,000 treats the fall in the loan as money coming in.`,
      `Суммы в $000, то есть 150 — это $150,000.
# Шаг 1: Деньги от новых акций
  Акционерный капитал: $150,000 - $100,000 = $50,000
  Эмиссионный доход: $70,000 - $50,000 = $20,000
  Вместе: + $70,000
# Шаг 2: Банковский заём
  Упал с $170,000 до $120,000, значит возвращено $50,000: - $50,000
= Ответ: $70,000 - $50,000 = приток $20,000
Нераспределённая прибыль не входит: она растёт из прибыли, а не из денег от акционеров или кредиторов.
! Частые ошибки: $70,000 — забыли заём. $120,000 — падение займа приняли за приток денег.`,
      `Summalar $000 da, ya'ni 150 — bu $150,000.
# 1-qadam: Yangi aksiyalardan pul
  Aksiya kapitali: $150,000 - $100,000 = $50,000
  Emissiya daromadi: $70,000 - $50,000 = $20,000
  Birga: + $70,000
# 2-qadam: Bank qarzi
  $170,000 dan $120,000 ga tushdi, demak $50,000 qaytarilgan: - $50,000
= Javob: $70,000 - $50,000 = $20,000 kirim
Taqsimlanmagan foyda kirmaydi: u aksiyadorlar yoki qarz beruvchilar pulidan emas, foydadan o'sadi.
! Ko'p uchraydigan xatolar: $70,000 — qarz unutilgan. $120,000 — qarz kamayishi pul kirimi deb olingan.`),
    single(454, 'A company had non-current assets with a carrying amount of $3,000,000 at the start of the year. In the year, depreciation of $90,000 was charged, land and buildings with a carrying amount of $1,400,000 were revalued to $2,000,000, and an asset with a carrying amount of $140,000 was sold for $170,000. The closing carrying amount was $5,000,000. What was the cash paid to buy non-current assets?',
      ['$1,030,000', '$1,600,000', '$1,630,000', '$2,230,000'], 2,
      `Purchases are the missing number. Tell the carrying amount "story" of the year: start + revaluation + bought - sold - depreciation = end.
# Step 1: The revaluation gain
  $2,000,000 new value - $1,400,000 old carrying amount = $600,000 (raises the assets with no cash)
# Step 2: Fill in the story
  $3,000,000 + $600,000 + bought - $140,000 sold - $90,000 depreciation = $5,000,000
# Step 3: Solve for "bought"
  Bought = $5,000,000 - $3,000,000 - $600,000 + $140,000 + $90,000
= Answer: $1,630,000
! Common traps: $2,230,000 forgets the revaluation. $1,600,000 takes the sold asset out at its price ($170,000) instead of its carrying amount ($140,000).`,
      `Покупки — недостающее число. Расскажите «историю» балансовой стоимости за год: начало + переоценка + купили - продали - амортизация = конец.
# Шаг 1: Прирост от переоценки
  $2,000,000 новая стоимость - $1,400,000 старая балансовая = $600,000 (увеличивает активы без денег)
# Шаг 2: Заполняем историю
  $3,000,000 + $600,000 + купили - $140,000 продали - $90,000 амортизация = $5,000,000
# Шаг 3: Находим «купили»
  Купили = $5,000,000 - $3,000,000 - $600,000 + $140,000 + $90,000
= Ответ: $1,630,000
! Частые ошибки: $2,230,000 — забыли переоценку. $1,600,000 — проданное убрали по цене продажи ($170,000), а не по балансовой ($140,000).`,
      `Xaridlar — yetishmayotgan son. Yil uchun balans qiymati «hikoyasi»ni ayting: boshlanish + qayta baholash + sotib olingan - sotilgan - amortizatsiya = oxiri.
# 1-qadam: Qayta baholash o'sishi
  $2,000,000 yangi qiymat - $1,400,000 eski balans qiymati = $600,000 (aktivlarni pulsiz oshiradi)
# 2-qadam: Hikoyani to'ldiramiz
  $3,000,000 + $600,000 + sotib olingan - $140,000 sotilgan - $90,000 amortizatsiya = $5,000,000
# 3-qadam: «Sotib olingan»ni topamiz
  Sotib olingan = $5,000,000 - $3,000,000 - $600,000 + $140,000 + $90,000
= Javob: $1,630,000
! Ko'p uchraydigan xatolar: $2,230,000 — qayta baholash unutilgan. $1,600,000 — sotilgan aktiv balans qiymati ($140,000) emas, sotuv narxi ($170,000) bilan olingan.`),
    matrix(455, 'Under the DIRECT method, would you expect to see each item in the operating activities section?', ['Included', 'Not included'], [
      { text: 'Payments to suppliers', correctIndex: 0 },
      { text: 'Increase or decrease in receivables', correctIndex: 1 },
      { text: 'Receipts from customers', correctIndex: 0 },
      { text: 'Increase or decrease in inventories', correctIndex: 1 },
      { text: 'Increase or decrease in payables', correctIndex: 1 },
      { text: 'Payments to employees', correctIndex: 0 },
    ],
      `The direct method is like reading your bank statement: it lists real money in and real money out.
- Included: receipts from customers, payments to suppliers, payments to employees. These are actual cash.
- Not included: increases or decreases in receivables, inventories and payables. These are adjustments used to turn profit into cash, which is the indirect method.
! Common trap: if a line says "increase or decrease in...", it is an indirect method adjustment.`,
      `Прямой метод похож на чтение банковской выписки: он перечисляет реальные поступления и выплаты.
- Включаются: поступления от покупателей, выплаты поставщикам, выплаты сотрудникам. Это реальные деньги.
- Не включаются: рост или падение дебиторов, запасов и кредиторов. Это корректировки, превращающие прибыль в деньги, то есть косвенный метод.
! Частая ошибка: если строка звучит как «рост или падение...», это корректировка косвенного метода.`,
      `To'g'ridan-to'g'ri usul bank ko'chirmasini o'qishga o'xshaydi: haqiqiy kirim va chiqimni sanaydi.
- Kiradi: mijozlardan tushum, yetkazib beruvchilarga to'lov, xodimlarga to'lov. Bu haqiqiy pul.
- Kirmaydi: debitorlar, zaxira va kreditorlarning oshishi yoki kamayishi. Bu foydani pulga aylantiruvchi tuzatishlar, ya'ni bilvosita usul.
! Ko'p uchraydigan xato: qatorda «oshishi yoki kamayishi...» bo'lsa, bu bilvosita usul tuzatishi.`),
    matrix(456, 'State whether this statement is true or false.', TF, [
      { text: 'Between statements of cash flows by the direct and indirect methods, the only differences are in the presentation of cash flows from operating activities', correctIndex: T },
    ],
      `TRUE. The two methods are two ways of showing the same operating cash figure: the direct method lists cash received and paid, the indirect method starts from profit and adjusts it. Investing and financing activities are shown in exactly the same way under both.`,
      `ВЕРНО. Два метода — два способа показать одну и ту же операционную сумму: прямой перечисляет полученные и выплаченные деньги, косвенный начинает с прибыли и корректирует её. Инвестиционная и финансовая деятельность в обоих показываются одинаково.`,
      `TO'G'RI. Ikki usul bir xil operatsion summani ko'rsatishning ikki yo'li: to'g'ridan-to'g'ri usul olingan va to'langan pulni sanaydi, bilvosita usul foydadan boshlab uni tuzatadi. Investitsion va moliyaviy faoliyat ikkalasida bir xil ko'rsatiladi.`),
    matrix(457, 'State whether this statement is true or false.', TF, [
      { text: 'Under the direct method, the depreciation charge is an adjustment to operating profit within cash flows from operating activities', correctIndex: F },
    ],
      `FALSE. The direct method does not start from operating profit at all, so there is nothing to adjust. It lists cash received and paid, and depreciation is not cash. Adding back depreciation happens only under the indirect method.`,
      `НЕВЕРНО. Прямой метод вообще не начинается с операционной прибыли, поэтому корректировать нечего. Он перечисляет полученные и выплаченные деньги, а амортизация — не деньги. Амортизацию прибавляют только при косвенном методе.`,
      `NOTO'G'RI. To'g'ridan-to'g'ri usul umuman operatsion foydadan boshlanmaydi, tuzatadigan narsa yo'q. U olingan va to'langan pulni sanaydi, amortizatsiya esa pul emas. Amortizatsiya faqat bilvosita usulda qo'shiladi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
