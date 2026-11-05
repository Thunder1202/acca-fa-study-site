module.exports = {
  b06: [
[`Interest paid is shown under FINANCING, so it must not be inside the starting profit.
- Operating profit $32,000,000: before interest. RIGHT.
- Profit before income taxes: interest already taken off, so it would need adding back first. WRONG.
- Profit for the year: interest and tax already taken off. WRONG.
= Answer: operating profit of $32,000,000`,
`Уплаченные проценты показаны в ФИНАНСОВОЙ деятельности, поэтому их не должно быть в начальной прибыли.
- Операционная прибыль $32,000,000: до процентов. ВЕРНО.
- Прибыль до налога на прибыль: проценты уже вычтены, их пришлось бы сначала прибавить. НЕВЕРНО.
- Прибыль за год: проценты и налог уже вычтены. НЕВЕРНО.
= Ответ: операционная прибыль $32,000,000`,
`To'langan foiz MOLIYAVIY faoliyatda ko'rsatiladi, shuning uchun u boshlang'ich foydada bo'lmasligi kerak.
- Operatsion foyda $32,000,000: foizdan oldin. TO'G'RI.
- Foyda solig'igacha foyda: foiz allaqachon ayirilgan, avval qo'shish kerak bo'lardi. NOTO'G'RI.
- Yil foydasi: foiz va soliq allaqachon ayirilgan. NOTO'G'RI.
= Javob: $32,000,000 operatsion foyda`],
[`Ask of each item: did it change profit without moving cash, or tie up / release cash?
- Depreciation: a cost with no cash paid. ADD back.
- Loss on sale of plant: a non-cash loss. ADD back.
- Increase in inventories: cash tied up in stock. SUBTRACT.
- Increase in trade receivables: customers owe more, less cash in. SUBTRACT.
- Increase in trade payables: we owe more, cash kept for now. ADD.`,
`Спросим о каждой статье: она изменила прибыль без движения денег или связала / высвободила деньги?
- Амортизация: расход без оплаты. ПРИБАВИТЬ.
- Убыток от продажи оборудования: неденежный убыток. ПРИБАВИТЬ.
- Рост запасов: деньги связаны в товаре. ВЫЧЕСТЬ.
- Рост торговых дебиторов: покупатели должны больше, денег пришло меньше. ВЫЧЕСТЬ.
- Рост торговых кредиторов: мы должны больше, деньги пока у нас. ПРИБАВИТЬ.`,
`Har bir modda haqida so'raymiz: pul harakatlanmasdan foydani o'zgartirdimi yoki pulni bog'ladi / bo'shatdimi?
- Amortizatsiya: pul to'lanmagan xarajat. QO'SHILADI.
- Uskuna sotishdan zarar: pulsiz zarar. QO'SHILADI.
- Zaxira oshishi: pul tovarda bog'langan. AYIRILADI.
- Savdo debitorlari oshishi: mijozlar ko'proq qarz, kamroq pul kirdi. AYIRILADI.
- Savdo kreditorlari oshishi: biz ko'proq qarzmiz, pul hozircha bizda. QO'SHILADI.`],
[`Start from operating profit and make the adjustments ($000).
# Non-cash items
  $32,000 + depreciation $14,000 + loss on sale $1,500 = $47,500
# Working capital
  Inventories up $30,000 - $26,000 = $4,000: - $4,000
  Receivables up $35,000 - $31,000 = $4,000: - $4,000
  Payables up $28,000 - $25,000 = $3,000: + $3,000
# Cash generated from operations
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Answer: $42,500,000 (42,500 in $000)
! Common trap: subtracting the loss on sale, or adding the increase in receivables.`,
`Начнём с операционной прибыли и внесём корректировки ($000).
# Неденежные статьи
  $32,000 + амортизация $14,000 + убыток от продажи $1,500 = $47,500
# Оборотный капитал
  Запасы выросли $30,000 - $26,000 = $4,000: - $4,000
  Дебиторы выросли $35,000 - $31,000 = $4,000: - $4,000
  Кредиторы выросли $28,000 - $25,000 = $3,000: + $3,000
# Денежные средства от операций
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Ответ: $42,500,000 (42,500 в $000)
! Частая ошибка: вычесть убыток от продажи или прибавить рост дебиторов.`,
`Operatsion foydadan boshlab, tuzatishlarni kiritamiz ($000).
# Pulsiz moddalar
  $32,000 + amortizatsiya $14,000 + sotish zarari $1,500 = $47,500
# Aylanma kapital
  Zaxira oshgan $30,000 - $26,000 = $4,000: - $4,000
  Debitorlar oshgan $35,000 - $31,000 = $4,000: - $4,000
  Kreditorlar oshgan $28,000 - $25,000 = $3,000: + $3,000
# Operatsiyalardan pul
  $47,500 - $4,000 - $4,000 + $3,000 = $42,500
= Javob: $42,500,000 ($000 da 42,500)
! Ko'p uchraydigan xato: sotish zararini ayirish yoki debitorlar oshishini qo'shish.`],
[`Tax paid = what was owed at the start + this year's charge - what is still owed at the end ($000).
# Working
  Opening liability $9,000 + charge $7,000 - closing liability $7,000 = $9,000
= Answer: $9,000,000 (9,000 in $000)
! Common trap: using the $7,000 charge. This year's tax is still owed; last year's $9,000 was paid.`,
`Уплаченный налог = долг на начало + расход года - долг на конец ($000).
# Расчёт
  Обязательство на начало $9,000 + расход $7,000 - на конец $7,000 = $9,000
= Ответ: $9,000,000 (9,000 в $000)
! Частая ошибка: взять расход $7,000. Налог этого года ещё не уплачен; уплачены прошлогодние $9,000.`,
`To'langan soliq = boshidagi qarz + bu yil xarajati - oxirida qolgan qarz ($000).
# Hisob
  Boshlang'ich majburiyat $9,000 + xarajat $7,000 - yakuniy majburiyat $7,000 = $9,000
= Javob: $9,000,000 ($000 da 9,000)
! Ko'p uchraydigan xato: $7,000 xarajatni olish. Bu yil solig'i hali qarz; o'tgan yilgi $9,000 to'langan.`],
[`Rebuild the property, plant and equipment account; purchases are the missing figure ($000).
# Step 1: Carrying amount of the plant sold
  Proceeds $6,000 + loss $1,500 = $7,500
# Step 2: The account
  Opening $100,000 + revaluation $3,000 + purchases ? - depreciation $14,000 - disposal $7,500 = closing $120,000
# Step 3: Purchases
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Answer: $38,500,000 (38,500 in $000)
! Common trap: forgetting to take out the revaluation, which raised the balance without any cash.`,
`Восстановим счёт основных средств; покупки — недостающая цифра ($000).
# Шаг 1: Балансовая стоимость проданного оборудования
  Выручка $6,000 + убыток $1,500 = $7,500
# Шаг 2: Счёт
  Начало $100,000 + переоценка $3,000 + покупки ? - амортизация $14,000 - выбытие $7,500 = конец $120,000
# Шаг 3: Покупки
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Ответ: $38,500,000 (38,500 в $000)
! Частая ошибка: не убрать переоценку, которая увеличила остаток без денег.`,
`Asosiy vositalar hisobini tiklaymiz; xaridlar yetishmayotgan son ($000).
# 1-qadam: Sotilgan uskunaning balans qiymati
  Tushum $6,000 + zarar $1,500 = $7,500
# 2-qadam: Hisob
  Boshi $100,000 + qayta baholash $3,000 + xaridlar ? - amortizatsiya $14,000 - chiqish $7,500 = oxiri $120,000
# 3-qadam: Xaridlar
  $120,000 - $100,000 - $3,000 + $14,000 + $7,500 = $38,500
= Javob: $38,500,000 ($000 da 38,500)
! Ko'p uchraydigan xato: pulsiz qoldiqni oshirgan qayta baholashni chiqarmaslik.`],
[`Dividends paid are the missing figure in retained earnings ($000).
# The account
  Opening $81,000 + profit $24,100 - dividends ? = closing $94,000
# Dividends
  $81,000 + $24,100 - $94,000 = $11,100
= Answer: $11,100,000 (11,100 in $000)
! Common trap: also adding the $3,000 revaluation gain. It goes to the revaluation surplus, not retained earnings.`,
`Выплаченные дивиденды — недостающая цифра в нераспределённой прибыли ($000).
# Счёт
  Начало $81,000 + прибыль $24,100 - дивиденды ? = конец $94,000
# Дивиденды
  $81,000 + $24,100 - $94,000 = $11,100
= Ответ: $11,100,000 (11,100 в $000)
! Частая ошибка: прибавить ещё и доход от переоценки $3,000. Он идёт в резерв переоценки, а не в нераспределённую прибыль.`,
`To'langan dividendlar taqsimlanmagan foydadagi yetishmayotgan son ($000).
# Hisob
  Boshi $81,000 + foyda $24,100 - dividendlar ? = oxiri $94,000
# Dividendlar
  $81,000 + $24,100 - $94,000 = $11,100
= Javob: $11,100,000 ($000 da 11,100)
! Ko'p uchraydigan xato: $3,000 qayta baholash daromadini ham qo'shish. U taqsimlanmagan foydaga emas, qayta baholash rezerviga boradi.`],
[`List every financing cash flow ($000).
# In
  Shares: share capital up $5,000 + share premium up $5,000 = $10,000
# Out
  Loan repaid: $20,000 - $10,000 = $10,000
  Interest paid: $900
  Dividends paid: $11,100
# Net
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Answer: $12,000,000 used (12,000 in $000)
! Common trap: forgetting the share premium, or leaving interest out (this company shows it under financing).`,
`Перечислим все финансовые потоки ($000).
# Приток
  Акции: капитал вырос на $5,000 + эмиссионный доход на $5,000 = $10,000
# Отток
  Погашение займа: $20,000 - $10,000 = $10,000
  Уплаченные проценты: $900
  Выплаченные дивиденды: $11,100
# Итог
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Ответ: использовано $12,000,000 (12,000 в $000)
! Частая ошибка: забыть эмиссионный доход или не учесть проценты (компания показывает их в финансовой деятельности).`,
`Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# Kirim
  Aksiyalar: kapital $5,000 + emissiya daromadi $5,000 oshgan = $10,000
# Chiqim
  Qaytarilgan qarz: $20,000 - $10,000 = $10,000
  To'langan foiz: $900
  To'langan dividendlar: $11,100
# Sof
  $10,000 - $10,000 - $900 - $11,100 = -$12,000
= Javob: $12,000,000 ishlatilgan ($000 da 12,000)
! Ko'p uchraydigan xato: emissiya daromadini unutish yoki foizni chiqarib qo'yish (bu kompaniya uni moliyaviyda ko'rsatadi).`],
[`Add the three sections, then check against the opening and closing cash ($000).
# Operating
  $42,500 - tax $9,000 = $33,500
# Investing
  Purchases -$38,500 + disposal proceeds $6,000 = -$32,500
# Financing
  -$12,000
# Net change
  $33,500 - $32,500 - $12,000 = -$11,000
# Check
  Opening cash $8,000 - $11,000 = -$3,000: the $3,000 overdraft at the year end
= Answer: a decrease of $11,000,000, ending with a net overdraft of $3,000,000
! Common trap: treating the closing overdraft as cash, which gives the wrong sign.`,
`Сложим три раздела и сверим с деньгами на начало и конец ($000).
# Операционная
  $42,500 - налог $9,000 = $33,500
# Инвестиционная
  Покупки -$38,500 + выручка от выбытия $6,000 = -$32,500
# Финансовая
  -$12,000
# Изменение
  $33,500 - $32,500 - $12,000 = -$11,000
# Проверка
  Деньги на начало $8,000 - $11,000 = -$3,000: овердрафт $3,000 на конец года
= Ответ: уменьшение на $11,000,000, на конец чистый овердрафт $3,000,000
! Частая ошибка: считать овердрафт на конец деньгами, тогда знак неверный.`,
`Uch bo'limni qo'shib, boshi va oxiridagi pul bilan tekshiramiz ($000).
# Operatsion
  $42,500 - soliq $9,000 = $33,500
# Investitsion
  Xaridlar -$38,500 + chiqish tushumi $6,000 = -$32,500
# Moliyaviy
  -$12,000
# Sof o'zgarish
  $33,500 - $32,500 - $12,000 = -$11,000
# Tekshiruv
  Boshidagi pul $8,000 - $11,000 = -$3,000: yil oxiridagi $3,000 overdraft
= Javob: $11,000,000 kamayish, oxirida $3,000,000 sof overdraft
! Ko'p uchraydigan xato: yakuniy overdraftni pul deb hisoblash, ishora noto'g'ri chiqadi.`],
  ],
  b07: [
[`Ask of each item: non-cash, or does it tie up / release cash?
- Depreciation: non-cash cost. ADD back.
- Profit on disposal: a non-cash gain; the real cash (proceeds) goes under investing. SUBTRACT.
- Increase in inventories: cash tied up. SUBTRACT.
- Increase in trade receivables: less cash collected. SUBTRACT.
- Decrease in trade payables: suppliers were paid down. SUBTRACT.`,
`Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Амортизация: неденежный расход. ПРИБАВИТЬ.
- Прибыль от выбытия: неденежная прибыль; реальные деньги (выручка) идут в инвестиционный раздел. ВЫЧЕСТЬ.
- Рост запасов: деньги связаны. ВЫЧЕСТЬ.
- Рост торговых дебиторов: собрано меньше денег. ВЫЧЕСТЬ.
- Снижение торговых кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
`Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Amortizatsiya: pulsiz xarajat. QO'SHILADI.
- Chiqish foydasi: pulsiz daromad; haqiqiy pul (tushum) investitsionga boradi. AYIRILADI.
- Zaxira oshishi: pul bog'langan. AYIRILADI.
- Savdo debitorlari oshishi: kamroq pul yig'ilgan. AYIRILADI.
- Savdo kreditorlari kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`],
[`Start from operating profit ($000).
# Non-cash items
  $14,200 + depreciation $3,500 - profit on disposal $400 = $17,300
# Working capital
  Inventories up $2,000: - $2,000
  Receivables up $3,000: - $3,000
  Payables down $2,000: - $2,000
# Cash generated from operations
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Answer: $10,300,000 (10,300 in $000)
! Common trap: adding the profit on disposal, or adding the fall in payables.`,
`Начнём с операционной прибыли ($000).
# Неденежные статьи
  $14,200 + амортизация $3,500 - прибыль от выбытия $400 = $17,300
# Оборотный капитал
  Запасы выросли на $2,000: - $2,000
  Дебиторы выросли на $3,000: - $3,000
  Кредиторы упали на $2,000: - $2,000
# Денежные средства от операций
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Ответ: $10,300,000 (10,300 в $000)
! Частая ошибка: прибавить прибыль от выбытия или прибавить снижение кредиторов.`,
`Operatsion foydadan boshlaymiz ($000).
# Pulsiz moddalar
  $14,200 + amortizatsiya $3,500 - chiqish foydasi $400 = $17,300
# Aylanma kapital
  Zaxira $2,000 oshgan: - $2,000
  Debitorlar $3,000 oshgan: - $3,000
  Kreditorlar $2,000 kamaygan: - $2,000
# Operatsiyalardan pul
  $17,300 - $2,000 - $3,000 - $2,000 = $10,300
= Javob: $10,300,000 ($000 da 10,300)
! Ko'p uchraydigan xato: chiqish foydasini qo'shish yoki kreditorlar kamayishini qo'shish.`],
[`Tax paid = opening liability + charge - closing liability ($000).
# Working
  $2,500 + $3,000 - $3,000 = $2,500
= Answer: $2,500,000 (2,500 in $000)
! Common trap: using the $3,000 charge; that is still owed at the year end.`,
`Уплаченный налог = обязательство на начало + расход - обязательство на конец ($000).
# Расчёт
  $2,500 + $3,000 - $3,000 = $2,500
= Ответ: $2,500,000 (2,500 в $000)
! Частая ошибка: взять расход $3,000; он ещё не уплачен на конец года.`,
`To'langan soliq = boshlang'ich majburiyat + xarajat - yakuniy majburiyat ($000).
# Hisob
  $2,500 + $3,000 - $3,000 = $2,500
= Javob: $2,500,000 ($000 da 2,500)
! Ko'p uchraydigan xato: $3,000 xarajatni olish; u yil oxirida hali qarz.`],
[`Proceeds = carrying amount sold + profit (or - loss).
- $900 - $400: treats the profit as a loss. WRONG.
- $900 + $400 = $1,300: sold for more than its carrying amount. RIGHT.
- $900: ignores the profit. WRONG.
= Answer: $900 + $400`,
`Выручка = проданная балансовая стоимость + прибыль (или - убыток).
- $900 - $400: считает прибыль убытком. НЕВЕРНО.
- $900 + $400 = $1,300: продано дороже балансовой стоимости. ВЕРНО.
- $900: не учитывает прибыль. НЕВЕРНО.
= Ответ: $900 + $400`,
`Tushum = sotilgan balans qiymati + foyda (yoki - zarar).
- $900 - $400: foydani zarar deb oladi. NOTO'G'RI.
- $900 + $400 = $1,300: balans qiymatidan qimmat sotilgan. TO'G'RI.
- $900: foydani hisobga olmaydi. NOTO'G'RI.
= Javob: $900 + $400`],
[`Rebuild the property, plant and equipment account; purchases are the missing figure ($000).
# The account
  Opening $75,200 + purchases ? - depreciation $3,500 - disposal $900 = closing $76,000
# Purchases
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Answer: $5,200,000 (5,200 in $000)
! Common trap: using the $1,300 proceeds instead of the $900 carrying amount removed.`,
`Восстановим счёт основных средств; покупки — недостающая цифра ($000).
# Счёт
  Начало $75,200 + покупки ? - амортизация $3,500 - выбытие $900 = конец $76,000
# Покупки
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Ответ: $5,200,000 (5,200 в $000)
! Частая ошибка: взять выручку $1,300 вместо списанной балансовой стоимости $900.`,
`Asosiy vositalar hisobini tiklaymiz; xaridlar yetishmayotgan son ($000).
# Hisob
  Boshi $75,200 + xaridlar ? - amortizatsiya $3,500 - chiqish $900 = oxiri $76,000
# Xaridlar
  $76,000 - $75,200 + $3,500 + $900 = $5,200
= Javob: $5,200,000 ($000 da 5,200)
! Ko'p uchraydigan xato: chiqarilgan $900 balans qiymati o'rniga $1,300 tushumni olish.`],
[`Cash from a share issue = rise in share capital + rise in share premium.
- $12,000 - $11,000: forgets the premium. WRONG.
- $12,000 - $11,000 + $800 = $1,800: both parts. RIGHT.
- $12,000 - $11,000 - $800: takes the premium off. WRONG.
= Answer: $12,000 - $11,000 + $800`,
`Деньги от выпуска акций = рост капитала + рост эмиссионного дохода.
- $12,000 - $11,000: забывает эмиссионный доход. НЕВЕРНО.
- $12,000 - $11,000 + $800 = $1,800: обе части. ВЕРНО.
- $12,000 - $11,000 - $800: вычитает эмиссионный доход. НЕВЕРНО.
= Ответ: $12,000 - $11,000 + $800`,
`Aksiya chiqarishdan pul = kapital o'sishi + emissiya daromadi o'sishi.
- $12,000 - $11,000: emissiya daromadini unutadi. NOTO'G'RI.
- $12,000 - $11,000 + $800 = $1,800: ikkala qism. TO'G'RI.
- $12,000 - $11,000 - $800: emissiya daromadini ayiradi. NOTO'G'RI.
= Javob: $12,000 - $11,000 + $800`],
[`In FA, interest and dividends RECEIVED are a return on investments.
- Operating: not the FA treatment for interest received. WRONG.
- Investing: RIGHT.
- Financing: that is for interest PAID and money raised. WRONG.
= Answer: investing activities`,
`В FA ПОЛУЧЕННЫЕ проценты и дивиденды — доход от вложений.
- Операционная: в FA полученные проценты сюда не относят. НЕВЕРНО.
- Инвестиционная: ВЕРНО.
- Финансовая: это для УПЛАЧЕННЫХ процентов и привлечённых денег. НЕВЕРНО.
= Ответ: инвестиционная деятельность`,
`FA da OLINGAN foiz va dividendlar sarmoyadan daromad.
- Operatsion: FA da olingan foiz bu yerga kiritilmaydi. NOTO'G'RI.
- Investitsion: TO'G'RI.
- Moliyaviy: bu TO'LANGAN foiz va jalb qilingan pul uchun. NOTO'G'RI.
= Javob: investitsion faoliyat`],
[`Add the three sections and check against the cash balances ($000).
# Operating
  $10,300 - tax $2,500 = $7,800
# Investing
  Interest received $300 - purchases $5,200 + proceeds $1,300 = -$3,600
# Financing
  Shares $1,800 - interest paid $2,000 = -$200
  (Interest = 10% x $20,000 debentures; there were no dividends)
# Net change
  $7,800 - $3,600 - $200 = $4,000
# Check
  Cash $1,000 + $4,000 = $5,000, as in the statement of financial position
= Answer: $4,000,000 (4,000 in $000)`,
`Сложим три раздела и сверим с остатками денег ($000).
# Операционная
  $10,300 - налог $2,500 = $7,800
# Инвестиционная
  Полученные проценты $300 - покупки $5,200 + выручка $1,300 = -$3,600
# Финансовая
  Акции $1,800 - уплаченные проценты $2,000 = -$200
  (Проценты = 10% x облигации $20,000; дивидендов не было)
# Изменение
  $7,800 - $3,600 - $200 = $4,000
# Проверка
  Деньги $1,000 + $4,000 = $5,000, как в балансе
= Ответ: $4,000,000 (4,000 в $000)`,
`Uch bo'limni qo'shib, pul qoldiqlari bilan tekshiramiz ($000).
# Operatsion
  $10,300 - soliq $2,500 = $7,800
# Investitsion
  Olingan foiz $300 - xaridlar $5,200 + tushum $1,300 = -$3,600
# Moliyaviy
  Aksiyalar $1,800 - to'langan foiz $2,000 = -$200
  (Foiz = 10% x $20,000 obligatsiya; dividend bo'lmagan)
# Sof o'zgarish
  $7,800 - $3,600 - $200 = $4,000
# Tekshiruv
  Pul $1,000 + $4,000 = $5,000, balansdagidek
= Javob: $4,000,000 ($000 da 4,000)`],
  ],
  b08: [
[`Depreciation is the missing figure in the property, plant and equipment account ($000).
# The account
  Opening $55,000 + revaluation $4,000 + purchases $40,000 - disposal $1,500 - depreciation ? = closing $90,000
# Depreciation
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Answer: $7,500,000 (7,500 in $000)
! Common trap: forgetting the revaluation, which gives $3,500.`,
`Амортизация — недостающая цифра в счёте основных средств ($000).
# Счёт
  Начало $55,000 + переоценка $4,000 + покупки $40,000 - выбытие $1,500 - амортизация ? = конец $90,000
# Амортизация
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Ответ: $7,500,000 (7,500 в $000)
! Частая ошибка: забыть переоценку, тогда выйдет $3,500.`,
`Amortizatsiya asosiy vositalar hisobidagi yetishmayotgan son ($000).
# Hisob
  Boshi $55,000 + qayta baholash $4,000 + xaridlar $40,000 - chiqish $1,500 - amortizatsiya ? = oxiri $90,000
# Amortizatsiya
  $55,000 + $4,000 + $40,000 - $1,500 - $90,000 = $7,500
= Javob: $7,500,000 ($000 da 7,500)
! Ko'p uchraydigan xato: qayta baholashni unutish, $3,500 chiqadi.`],
[`Ask of each item: non-cash, or does it tie up / release cash?
- Profit on disposal: a non-cash gain. SUBTRACT.
- Decrease in inventories: stock turned into cash. ADD.
- Decrease in trade receivables: customers paid in. ADD.
- Decrease in trade payables: suppliers were paid. SUBTRACT.`,
`Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Прибыль от выбытия: неденежная прибыль. ВЫЧЕСТЬ.
- Снижение запасов: товар превратился в деньги. ПРИБАВИТЬ.
- Снижение торговых дебиторов: покупатели заплатили. ПРИБАВИТЬ.
- Снижение торговых кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
`Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Chiqish foydasi: pulsiz daromad. AYIRILADI.
- Zaxira kamayishi: tovar pulga aylangan. QO'SHILADI.
- Savdo debitorlari kamayishi: mijozlar to'lagan. QO'SHILADI.
- Savdo kreditorlari kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`],
[`Cash from operations first, then take off the tax paid ($000).
# Step 1: Cash generated from operations
  Operating profit $17,400 + depreciation $7,500 - profit on disposal $600 = $24,300
  + inventories down $4,000 + receivables down $4,000 - payables down $3,000 = $29,300
# Step 2: Tax paid
  $3,600 + $3,200 - $3,200 = $3,600
# Step 3: Net cash from operating activities
  $29,300 - $3,600 = $25,700
= Answer: $25,700,000 (25,700 in $000)
! Common trap: stopping at $29,300 without the tax paid.`,
`Сначала деньги от операций, затем вычтем уплаченный налог ($000).
# Шаг 1: Денежные средства от операций
  Операционная прибыль $17,400 + амортизация $7,500 - прибыль от выбытия $600 = $24,300
  + запасы упали $4,000 + дебиторы упали $4,000 - кредиторы упали $3,000 = $29,300
# Шаг 2: Уплаченный налог
  $3,600 + $3,200 - $3,200 = $3,600
# Шаг 3: Чистые деньги от операционной деятельности
  $29,300 - $3,600 = $25,700
= Ответ: $25,700,000 (25,700 в $000)
! Частая ошибка: остановиться на $29,300 без уплаченного налога.`,
`Avval operatsiyalardan pul, keyin to'langan soliqni ayiramiz ($000).
# 1-qadam: Operatsiyalardan pul
  Operatsion foyda $17,400 + amortizatsiya $7,500 - chiqish foydasi $600 = $24,300
  + zaxira kamaygan $4,000 + debitorlar kamaygan $4,000 - kreditorlar kamaygan $3,000 = $29,300
# 2-qadam: To'langan soliq
  $3,600 + $3,200 - $3,200 = $3,600
# 3-qadam: Operatsion faoliyatdan sof pul
  $29,300 - $3,600 = $25,700
= Javob: $25,700,000 ($000 da 25,700)
! Ko'p uchraydigan xato: to'langan soliqsiz $29,300 da to'xtash.`],
[`Interest paid = owed at the start + charge - still owed at the end.
- $2,400 - $400 - $800: takes off both accruals. WRONG.
- $2,400 + $400 + $800: adds both accruals. WRONG.
- $2,400 + $400 - $800 = $2,000: RIGHT.
= Answer: $2,400 + $400 - $800`,
`Уплаченные проценты = долг на начало + расход - долг на конец.
- $2,400 - $400 - $800: вычитает оба начисления. НЕВЕРНО.
- $2,400 + $400 + $800: прибавляет оба начисления. НЕВЕРНО.
- $2,400 + $400 - $800 = $2,000: ВЕРНО.
= Ответ: $2,400 + $400 - $800`,
`To'langan foiz = boshidagi qarz + xarajat - oxirida qolgan qarz.
- $2,400 - $400 - $800: ikkala hisoblanganni ayiradi. NOTO'G'RI.
- $2,400 + $400 + $800: ikkala hisoblanganni qo'shadi. NOTO'G'RI.
- $2,400 + $400 - $800 = $2,000: TO'G'RI.
= Javob: $2,400 + $400 - $800`],
[`Dividends come out of retained earnings, and only the PROFIT for the year goes into it.
- B/f + profit for the year - c/f: RIGHT. $50,000 + $11,800 - $56,500 = $5,300.
- B/f + total comprehensive income - c/f: wrongly includes the revaluation gain. WRONG.
- B/f - profit + c/f: signs the wrong way. WRONG.
= Answer: retained earnings b/f + profit for the year - retained earnings c/f`,
`Дивиденды выплачивают из нераспределённой прибыли, а туда идёт только ПРИБЫЛЬ за год.
- Начало + прибыль за год - конец: ВЕРНО. $50,000 + $11,800 - $56,500 = $5,300.
- Начало + общий совокупный доход - конец: ошибочно включает переоценку. НЕВЕРНО.
- Начало - прибыль + конец: знаки наоборот. НЕВЕРНО.
= Ответ: нераспределённая прибыль на начало + прибыль за год - на конец`,
`Dividendlar taqsimlanmagan foydadan to'lanadi, unga faqat yil FOYDASI kiradi.
- Boshi + yil foydasi - oxiri: TO'G'RI. $50,000 + $11,800 - $56,500 = $5,300.
- Boshi + jami umumlashgan daromad - oxiri: qayta baholashni xato qo'shadi. NOTO'G'RI.
- Boshi - foyda + oxiri: ishoralar teskari. NOTO'G'RI.
= Javob: boshidagi taqsimlanmagan foyda + yil foydasi - oxiridagi`],
[`List every financing cash flow ($000).
# In
  Debentures issued: $24,000
  Shares: capital up $3,000 + premium up $1,000 = $4,000
# Out
  Interest paid: $2,000
  Dividends paid: $5,300
# Net
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Answer: $20,700,000 (20,700 in $000)
! Common trap: including the overdraft. It is part of cash and cash equivalents, not financing.`,
`Перечислим все финансовые потоки ($000).
# Приток
  Выпуск облигаций: $24,000
  Акции: капитал +$3,000 + эмиссионный доход +$1,000 = $4,000
# Отток
  Уплаченные проценты: $2,000
  Выплаченные дивиденды: $5,300
# Итог
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Ответ: $20,700,000 (20,700 в $000)
! Частая ошибка: учесть овердрафт. Он часть денежных средств и эквивалентов, а не финансовой деятельности.`,
`Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# Kirim
  Chiqarilgan obligatsiyalar: $24,000
  Aksiyalar: kapital +$3,000 + emissiya daromadi +$1,000 = $4,000
# Chiqim
  To'langan foiz: $2,000
  To'langan dividendlar: $5,300
# Sof
  $24,000 + $4,000 - $2,000 - $5,300 = $20,700
= Javob: $20,700,000 ($000 da 20,700)
! Ko'p uchraydigan xato: overdraftni qo'shish. U pul va pul ekvivalentlarining qismi, moliyaviy emas.`],
[`Investing = what was spent on assets less what came in from selling them ($000).
# Working
  Purchases -$40,000 + disposal proceeds $2,100 = -$37,900
= Answer: $37,900,000 used (37,900 in $000)
! Common trap: using the $1,500 carrying amount instead of the $2,100 actually received.`,
`Инвестиционная = потрачено на активы минус получено от их продажи ($000).
# Расчёт
  Покупки -$40,000 + выручка от выбытия $2,100 = -$37,900
= Ответ: использовано $37,900,000 (37,900 в $000)
! Частая ошибка: взять балансовую стоимость $1,500 вместо фактически полученных $2,100.`,
`Investitsion = aktivlarga sarflangan minus ularni sotishdan kelgan ($000).
# Hisob
  Xaridlar -$40,000 + chiqish tushumi $2,100 = -$37,900
= Javob: $37,900,000 ishlatilgan ($000 da 37,900)
! Ko'p uchraydigan xato: haqiqatda olingan $2,100 o'rniga $1,500 balans qiymatini olish.`],
[`Add the three sections and check against the opening and closing cash ($000).
# Net change
  Operating $25,700 - investing $37,900 + financing $20,700 = +$8,500
# Check
  Opening overdraft -$6,000 + $8,500 = $2,500 of cash at the year end
= Answer: an increase of $8,500,000, ending with net cash of $2,500,000
! Common trap: "an increase of $2,500,000" ignores the opening overdraft.`,
`Сложим три раздела и сверим с деньгами на начало и конец ($000).
# Изменение
  Операционная $25,700 - инвестиционная $37,900 + финансовая $20,700 = +$8,500
# Проверка
  Овердрафт на начало -$6,000 + $8,500 = $2,500 денег на конец года
= Ответ: рост на $8,500,000, на конец чистые деньги $2,500,000
! Частая ошибка: «рост на $2,500,000» не учитывает овердрафт на начало.`,
`Uch bo'limni qo'shib, boshi va oxiridagi pul bilan tekshiramiz ($000).
# Sof o'zgarish
  Operatsion $25,700 - investitsion $37,900 + moliyaviy $20,700 = +$8,500
# Tekshiruv
  Boshidagi overdraft -$6,000 + $8,500 = yil oxirida $2,500 pul
= Javob: $8,500,000 oshish, oxirida $2,500,000 sof pul
! Ko'p uchraydigan xato: «$2,500,000 oshish» boshidagi overdraftni hisobga olmaydi.`],
  ],
  b09: [
[`The business made a LOSS, and interest is shown under financing.
- Operating loss of $3,500,000, negative: before interest, with the right sign. RIGHT.
- Loss before tax of $4,600,000: interest is already inside it. WRONG.
- Operating profit of $3,500,000: wrong sign; it was a loss. WRONG.
= Answer: an operating loss of $3,500,000, shown as negative`,
`Бизнес получил УБЫТОК, а проценты показаны в финансовой деятельности.
- Операционный убыток $3,500,000 со знаком минус: до процентов, с верным знаком. ВЕРНО.
- Убыток до налога $4,600,000: проценты уже внутри. НЕВЕРНО.
- Операционная прибыль $3,500,000: неверный знак, был убыток. НЕВЕРНО.
= Ответ: операционный убыток $3,500,000 со знаком минус`,
`Biznes ZARAR ko'rgan, foiz esa moliyaviy faoliyatda ko'rsatiladi.
- $3,500,000 operatsion zarar, manfiy: foizdan oldin, to'g'ri ishora bilan. TO'G'RI.
- $4,600,000 soliqdan oldingi zarar: foiz allaqachon ichida. NOTO'G'RI.
- $3,500,000 operatsion foyda: ishora noto'g'ri, zarar bo'lgan. NOTO'G'RI.
= Javob: manfiy ko'rsatilgan $3,500,000 operatsion zarar`],
[`Ask of each item: non-cash, or does it tie up / release cash?
- Depreciation: non-cash. ADD back.
- Loss on scrapped plant: non-cash. ADD back.
- Decrease in inventories: stock turned into cash. ADD.
- Decrease in receivables: customers paid in. ADD.
- Decrease in payables: suppliers were paid. SUBTRACT.`,
`Спросим о каждой статье: неденежная или связывает / высвобождает деньги?
- Амортизация: неденежная. ПРИБАВИТЬ.
- Убыток от списания оборудования: неденежный. ПРИБАВИТЬ.
- Снижение запасов: товар превратился в деньги. ПРИБАВИТЬ.
- Снижение дебиторов: покупатели заплатили. ПРИБАВИТЬ.
- Снижение кредиторов: поставщикам заплатили. ВЫЧЕСТЬ.`,
`Har bir modda haqida so'raymiz: pulsizmi yoki pulni bog'laydi / bo'shatadimi?
- Amortizatsiya: pulsiz. QO'SHILADI.
- Hisobdan chiqarilgan uskuna zarari: pulsiz. QO'SHILADI.
- Zaxira kamayishi: tovar pulga aylangan. QO'SHILADI.
- Debitorlar kamayishi: mijozlar to'lagan. QO'SHILADI.
- Kreditorlar kamayishi: yetkazib beruvchilarga to'langan. AYIRILADI.`],
[`Tax paid = what was owed at the start, paid this year ($000).
# Last year's liability
  $4,000, settled this year, and nothing is owed at the end
# This year's refund
  $600 is due BACK but not yet received: a receivable, not a cash flow yet
= Answer: $4,000,000 (4,000 in $000)
! Common trap: taking off the $600 refund ($3,400). No refund has arrived yet.`,
`Уплаченный налог = долг на начало, уплаченный в этом году ($000).
# Обязательство прошлого года
  $4,000 уплачено в этом году, на конец ничего не должно
# Возврат этого года
  $600 к возврату, но ещё не получены: дебиторская задолженность, а не денежный поток
= Ответ: $4,000,000 (4,000 в $000)
! Частая ошибка: вычесть возврат $600 ($3,400). Возврат ещё не пришёл.`,
`To'langan soliq = boshidagi qarz, shu yil to'langan ($000).
# O'tgan yil majburiyati
  $4,000 shu yil to'langan, oxirida qarz yo'q
# Bu yilgi qaytarish
  $600 qaytariladi, lekin hali olinmagan: debitorlik, hali pul oqimi emas
= Javob: $4,000,000 ($000 da 4,000)
! Ko'p uchraydigan xato: $600 qaytarishni ayirish ($3,400). Qaytarish hali kelmagan.`],
[`Purchases = closing - opening - revaluation + depreciation + carrying amount removed.
- $120,000 - $100,100 + $9,000: forgets the revaluation and the scrapped plant. WRONG.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: everything included. RIGHT.
- $120,000 + $3,000 - ...: adds the revaluation instead of taking it off. WRONG.
= Answer: $120,000 - $100,100 - $3,000 + $9,000 + $800`,
`Покупки = конец - начало - переоценка + амортизация + списанная балансовая стоимость.
- $120,000 - $100,100 + $9,000: забывает переоценку и списанное оборудование. НЕВЕРНО.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: всё учтено. ВЕРНО.
- $120,000 + $3,000 - ...: прибавляет переоценку вместо вычета. НЕВЕРНО.
= Ответ: $120,000 - $100,100 - $3,000 + $9,000 + $800`,
`Xaridlar = oxiri - boshi - qayta baholash + amortizatsiya + chiqarilgan balans qiymati.
- $120,000 - $100,100 + $9,000: qayta baholash va hisobdan chiqarilgan uskunani unutadi. NOTO'G'RI.
- $120,000 - $100,100 - $3,000 + $9,000 + $800 = $26,700: hammasi hisobga olingan. TO'G'RI.
- $120,000 + $3,000 - ...: qayta baholashni ayirish o'rniga qo'shadi. NOTO'G'RI.
= Javob: $120,000 - $100,100 - $3,000 + $9,000 + $800`],
[`Cash from a share issue = total rise in share capital AND share premium.
- $50,000 - $45,000: forgets the premium. WRONG.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: both parts. RIGHT.
- $50,000 + $7,000: the closing balances, not the change. WRONG.
= Answer: ($50,000 + $7,000) - ($45,000 + $5,000)`,
`Деньги от выпуска акций = общий рост капитала И эмиссионного дохода.
- $50,000 - $45,000: забывает эмиссионный доход. НЕВЕРНО.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: обе части. ВЕРНО.
- $50,000 + $7,000: остатки на конец, а не изменение. НЕВЕРНО.
= Ответ: ($50,000 + $7,000) - ($45,000 + $5,000)`,
`Aksiya chiqarishdan pul = kapital VA emissiya daromadining umumiy o'sishi.
- $50,000 - $45,000: emissiya daromadini unutadi. NOTO'G'RI.
- ($50,000 + $7,000) - ($45,000 + $5,000) = $7,000: ikkala qism. TO'G'RI.
- $50,000 + $7,000: yakuniy qoldiqlar, o'zgarish emas. NOTO'G'RI.
= Javob: ($50,000 + $7,000) - ($45,000 + $5,000)`],
[`List every financing cash flow ($000).
# Step 1: Dividends paid (from retained earnings)
  $67,100 - loss $4,000 - closing $61,100 = $2,000
# Step 2: In
  New loan: $20,000 - $12,000 = $8,000
  Shares: $7,000
# Step 3: Out
  Interest paid $1,100 + dividends $2,000
# Step 4: Net
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Answer: $11,900,000 (11,900 in $000)
! Common trap: missing the dividend, because the loss makes it easy to assume none was paid.`,
`Перечислим все финансовые потоки ($000).
# Шаг 1: Выплаченные дивиденды (из нераспределённой прибыли)
  $67,100 - убыток $4,000 - конец $61,100 = $2,000
# Шаг 2: Приток
  Новый заём: $20,000 - $12,000 = $8,000
  Акции: $7,000
# Шаг 3: Отток
  Уплаченные проценты $1,100 + дивиденды $2,000
# Шаг 4: Итог
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Ответ: $11,900,000 (11,900 в $000)
! Частая ошибка: пропустить дивиденд, решив из-за убытка, что его не платили.`,
`Barcha moliyaviy pul oqimlarini sanaymiz ($000).
# 1-qadam: To'langan dividendlar (taqsimlanmagan foydadan)
  $67,100 - zarar $4,000 - oxiri $61,100 = $2,000
# 2-qadam: Kirim
  Yangi qarz: $20,000 - $12,000 = $8,000
  Aksiyalar: $7,000
# 3-qadam: Chiqim
  To'langan foiz $1,100 + dividendlar $2,000
# 4-qadam: Sof
  $8,000 + $7,000 - $1,100 - $2,000 = $11,900
= Javob: $11,900,000 ($000 da 11,900)
! Ko'p uchraydigan xato: zarar tufayli to'lanmagan deb o'ylab, dividendni tushirib qoldirish.`],
[`Add the three sections and check against the cash balances ($000).
# Operating
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Less tax paid $4,000 = $9,300
# Investing
  -$26,700 (no proceeds from the scrapped plant)
# Financing
  $11,900
# Net change
  $9,300 - $26,700 + $11,900 = -$5,500
# Check
  Opening cash $2,000 - $5,500 = -$3,500: the overdraft at the year end
= Answer: a decrease of $5,500,000, ending with a net overdraft of $3,500,000`,
`Сложим три раздела и сверим с остатками денег ($000).
# Операционная
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Минус уплаченный налог $4,000 = $9,300
# Инвестиционная
  -$26,700 (за списанное оборудование ничего не получено)
# Финансовая
  $11,900
# Изменение
  $9,300 - $26,700 + $11,900 = -$5,500
# Проверка
  Деньги на начало $2,000 - $5,500 = -$3,500: овердрафт на конец года
= Ответ: уменьшение на $5,500,000, на конец чистый овердрафт $3,500,000`,
`Uch bo'limni qo'shib, pul qoldiqlari bilan tekshiramiz ($000).
# Operatsion
  -$3,500 + $9,000 + $800 + $4,000 + $5,000 - $2,000 = $13,300
  Minus to'langan soliq $4,000 = $9,300
# Investitsion
  -$26,700 (hisobdan chiqarilgan uskunadan tushum yo'q)
# Moliyaviy
  $11,900
# Sof o'zgarish
  $9,300 - $26,700 + $11,900 = -$5,500
# Tekshiruv
  Boshidagi pul $2,000 - $5,500 = -$3,500: yil oxiridagi overdraft
= Javob: $5,500,000 kamayish, oxirida $3,500,000 sof overdraft`],
  ],
};
