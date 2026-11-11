'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), sections 7 and 8
// (disposals and revaluations), reworded with new figures. bppRef/bppPage point to BPP's own answer.
// Left out: 7.19 (same skill as 7.17), 8.21 (its question asks about the wrong year for the sale) and 8.22: BPP's
// key sets a loss on selling a revalued building against the revaluation surplus, but Kaplan (quoting IAS 16
// paras 41 and 71) charges proceeds minus carrying amount to profit or loss and moves the surplus to retained
// earnings. With the two books disagreeing, the item is not used.
(function () {
  const TOPIC = 'chapter-07';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp07-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('7.7', 208, 'single', `A company bought a property five years ago for $240,000, with a useful life of 30 years (straight line). It has now been revalued to $290,000. What is the revaluation surplus?`,
      pick(['$290,000', '$200,000', '$90,000', '$50,000'], 2),
`# Step 1: Carrying amount now
  240,000 / 30 = 8,000 a year
  240,000 - (8,000 x 5) = 200,000
# Step 2: Surplus
  Valuation - carrying amount
  290,000 - 200,000 = 90,000
= Answer: $90,000
! Comparing with the original cost (290,000 - 240,000) forgets the depreciation already charged.`,
`# Шаг 1: Балансовая стоимость сейчас
  240 000 / 30 = 8 000 в год
  240 000 - (8 000 x 5) = 200 000
# Шаг 2: Прирост
  Оценка - балансовая стоимость
  290 000 - 200 000 = 90 000
= Ответ: $90 000
! Сравнение с первоначальной стоимостью (290 000 - 240 000) забывает уже начисленную амортизацию.`,
`# 1-qadam: Hozirgi balans qiymati
  240 000 / 30 = yiliga 8 000
  240 000 - (8 000 x 5) = 200 000
# 2-qadam: O'sish
  Baho - balans qiymati
  290 000 - 200 000 = 90 000
= Javob: $90 000
! Boshlang'ich tannarx bilan solishtirish (290 000 - 240 000) hisoblangan amortizatsiyani unutadi.`),

    q('7.14', 209, 'single', `A company sells a machine for $39,000 cash. The machine cost $80,000 and has a carrying amount of $47,000 at the date of sale. Which entries record the disposal?`,
      pick([
        'Dr Accumulated depreciation $33,000, Dr Loss on disposal $8,000, Dr Cash $39,000, Cr Non-current assets (cost) $80,000',
        'Dr Accumulated depreciation $47,000, Dr Loss on disposal $33,000, Cr Non-current assets (cost) $80,000',
        'Dr Accumulated depreciation $33,000, Dr Cash $39,000, Cr Non-current assets $47,000, Cr Profit on disposal $25,000',
        'Dr Non-current assets $47,000, Dr Accumulated depreciation $33,000, Cr Cash $39,000, Cr Profit on disposal $41,000',
      ], 0),
`# Step 1: Accumulated depreciation
  Cost - carrying amount = 80,000 - 47,000 = 33,000
# Step 2: Profit or loss
  Proceeds - carrying amount = 39,000 - 47,000 = 8,000 LOSS
# Step 3: Take the asset out and record the cash
  Cr Non-current assets (cost) 80,000
  Dr Accumulated depreciation 33,000
  Dr Cash 39,000
  Dr Loss on disposal 8,000
# Step 4: Check
  Debits 33,000 + 39,000 + 8,000 = 80,000 = credits
= Answer: Dr Accumulated depreciation $33,000, Dr Loss $8,000, Dr Cash $39,000, Cr Cost $80,000`,
`# Шаг 1: Накопленная амортизация
  Себестоимость - балансовая стоимость = 80 000 - 47 000 = 33 000
# Шаг 2: Прибыль или убыток
  Выручка - балансовая стоимость = 39 000 - 47 000 = 8 000 УБЫТОК
# Шаг 3: Списываем актив и записываем деньги
  Кт Внеоборотные активы (себестоимость) 80 000
  Дт Накопленная амортизация 33 000
  Дт Деньги 39 000
  Дт Убыток от выбытия 8 000
# Шаг 4: Проверка
  Дебет 33 000 + 39 000 + 8 000 = 80 000 = кредит
= Ответ: Дт Накопленная амортизация $33 000, Дт Убыток $8 000, Дт Деньги $39 000, Кт Себестоимость $80 000`,
`# 1-qadam: Jamg'arilgan amortizatsiya
  Tannarx - balans qiymati = 80 000 - 47 000 = 33 000
# 2-qadam: Foyda yoki zarar
  Tushum - balans qiymati = 39 000 - 47 000 = 8 000 ZARAR
# 3-qadam: Aktivni chiqaramiz va pulni yozamiz
  Kt Uzoq muddatli aktivlar (tannarx) 80 000
  Dt Jamg'arilgan amortizatsiya 33 000
  Dt Pul 39 000
  Dt Chiqib ketishdan zarar 8 000
# 4-qadam: Tekshiruv
  Debet 33 000 + 39 000 + 8 000 = 80 000 = kredit
= Javob: Dt Jamg'arilgan amortizatsiya $33 000, Dt Zarar $8 000, Dt Pul $39 000, Kt Tannarx $80 000`),

    q('7.16', 210, 'single', `A company bought a building on 1 January Year 1 for $600,000, with a useful life of 30 years (straight line). On 31 December Year 5 it was revalued to $875,000. Its policy is to transfer excess depreciation from the revaluation surplus to retained earnings. What is the depreciation charge for Year 6?`,
      pick(['$35,000', '$20,000', '$29,167', '$15,000'], 0),
`# Step 1: Remaining life at the revaluation
  30 - 5 = 25 years
# Step 2: New charge
  Spread the new value over the remaining life
  875,000 / 25 = 35,000
= Answer: $35,000
! Dividing by the original 30 years gives the $29,167 trap. Use the years LEFT.`,
`# Шаг 1: Оставшийся срок на дату переоценки
  30 - 5 = 25 лет
# Шаг 2: Новая амортизация
  Новую стоимость делим на оставшийся срок
  875 000 / 25 = 35 000
= Ответ: $35 000
! Деление на исходные 30 лет даёт ловушку $29 167. Берите ОСТАВШИЕСЯ годы.`,
`# 1-qadam: Qayta baholash sanasidagi qolgan muddat
  30 - 5 = 25 yil
# 2-qadam: Yangi amortizatsiya
  Yangi qiymatni qolgan muddatga bo'lamiz
  875 000 / 25 = 35 000
= Javob: $35 000
! Boshlang'ich 30 yilga bo'lish $29 167 tuzog'ini beradi. QOLGAN yillarni oling.`),

    q('7.17', 210, 'single', `Same building as the last question (cost $600,000, 30-year life, revalued to $875,000 after 5 years). Which entry records the yearly transfer of excess depreciation?`,
      pick([
        'Dr Revaluation surplus $15,000, Cr Retained earnings $15,000',
        'Dr Retained earnings $15,000, Cr Revaluation surplus $15,000',
        'Dr Revaluation surplus $35,000, Cr Retained earnings $35,000',
        'Dr Retained earnings $20,000, Cr Revaluation surplus $20,000',
      ], 0),
`# Step 1: Old and new charges
  Based on cost: 600,000 / 30 = 20,000
  Based on the valuation: 875,000 / 25 = 35,000
# Step 2: Excess depreciation
  35,000 - 20,000 = 15,000
# Step 3: Direction
  The surplus is used up as the extra depreciation is charged, so it goes DOWN (debit) and retained earnings go UP (credit).
= Answer: Dr Revaluation surplus $15,000, Cr Retained earnings $15,000
! This transfer is allowed by IAS 16 but optional. It moves amounts within equity and does not touch profit.`,
`# Шаг 1: Старая и новая амортизация
  От себестоимости: 600 000 / 30 = 20 000
  От оценки: 875 000 / 25 = 35 000
# Шаг 2: Избыточная амортизация
  35 000 - 20 000 = 15 000
# Шаг 3: Направление
  Резерв используется по мере начисления дополнительной амортизации, поэтому он УМЕНЬШАЕТСЯ (дебет), а нераспределённая прибыль РАСТЁТ (кредит).
= Ответ: Дт Резерв переоценки $15 000, Кт Нераспределённая прибыль $15 000
! IAS 16 разрешает этот перенос, но не обязывает. Он перемещает суммы внутри капитала и не затрагивает прибыль.`,
`# 1-qadam: Eski va yangi amortizatsiya
  Tannarxdan: 600 000 / 30 = 20 000
  Bahodan: 875 000 / 25 = 35 000
# 2-qadam: Ortiqcha amortizatsiya
  35 000 - 20 000 = 15 000
# 3-qadam: Yo'nalish
  Qo'shimcha amortizatsiya hisoblangan sari zaxira ishlatiladi, shuning uchun u KAMAYADI (debet), taqsimlanmagan foyda esa OSHADI (kredit).
= Javob: Dt Qayta baholash zaxirasi $15 000, Kt Taqsimlanmagan foyda $15 000
! IAS 16 bu o'tkazishga ruxsat beradi, lekin majburlamaydi. U kapital ichida summalarni ko'chiradi va foydaga tegmaydi.`),

    q('7.18', 210, 'single', `Under IAS 16, which of these must be disclosed for property, plant and equipment? (1) The depreciation methods used and the total depreciation for the period. (2) A reconciliation of the carrying amount at the start and end of the period. (3) For revalued assets, whether an independent valuer was involved. (4) For revalued assets, the effective date of the revaluation.`,
      pick(['2 and 4 only', '1 and 2 only', '1, 2, 3 and 4', '3 and 4 only'], 2),
`All four are on the IAS 16 disclosure list.
- (1) Depreciation methods, useful lives or rates, and the charge for the period: YES.
- (2) Reconciliation of carrying amount from start to end of the period: YES.
- (3) and (4) For revaluations: the effective date and whether an independent valuer was used: YES.
= Answer: 1, 2, 3 and 4`,
`Все четыре есть в списке раскрытий IAS 16.
- (1) Методы амортизации, сроки или нормы и начисление за период: ДА.
- (2) Сверка балансовой стоимости с начала до конца периода: ДА.
- (3) и (4) Для переоценки: дата переоценки и участие независимого оценщика: ДА.
= Ответ: 1, 2, 3 и 4`,
`To'rttalasi ham IAS 16 ochib berish ro'yxatida bor.
- (1) Amortizatsiya usullari, muddatlar yoki stavkalar va davr hisobi: HA.
- (2) Balans qiymatining davr boshidan oxirigacha solishtiruvi: HA.
- (3) va (4) Qayta baholash uchun: kuchga kirish sanasi va mustaqil baholovchi ishtiroki: HA.
= Javob: 1, 2, 3 va 4`),

    q('8.1', 211, 'single', `A business bought a car in March Year 0 for $16,000, plus $200 road tax. The year ends on 31 December. Cars are depreciated at 25% reducing balance, with a full year's charge in the year of purchase and none in the year of sale. In September Year 3 the car was traded in for a new one, with a trade-in value of $6,000. What is the profit or loss on disposal?`,
      pick(['$750 loss', '$750 profit', '$834 loss', '$6,000 profit'], 0),
`# Step 1: Cost
  16,000. Road tax is a running expense, not part of cost.
# Step 2: Reducing balance, Years 0 to 2
  Year 0: 16,000 x 25% = 4,000, leaving 12,000
  Year 1: 12,000 x 25% = 3,000, leaving 9,000
  Year 2: 9,000 x 25% = 2,250, leaving 6,750
  Year 3: no charge in the year of sale
# Step 3: Compare with the trade-in value
  6,000 - 6,750 = 750 loss
= Answer: $750 loss
! Including the road tax in cost gives the $834 trap.`,
`# Шаг 1: Себестоимость
  16 000. Транспортный налог — текущий расход, а не часть стоимости.
# Шаг 2: Уменьшаемый остаток, годы 0-2
  Год 0: 16 000 x 25% = 4 000, остаётся 12 000
  Год 1: 12 000 x 25% = 3 000, остаётся 9 000
  Год 2: 9 000 x 25% = 2 250, остаётся 6 750
  Год 3: в год продажи не начисляют
# Шаг 3: Сравним с зачётной стоимостью
  6 000 - 6 750 = убыток 750
= Ответ: убыток $750
! Если включить налог в стоимость, выйдет ловушка $834.`,
`# 1-qadam: Tannarx
  16 000. Transport solig'i — joriy xarajat, qiymat qismi emas.
# 2-qadam: Kamayuvchi qoldiq, 0-2 yillar
  0-yil: 16 000 x 25% = 4 000, qoladi 12 000
  1-yil: 12 000 x 25% = 3 000, qoladi 9 000
  2-yil: 9 000 x 25% = 2 250, qoladi 6 750
  3-yil: sotilgan yilda hisoblanmaydi
# 3-qadam: Hisobga olingan qiymat bilan solishtiramiz
  6 000 - 6 750 = 750 zarar
= Javob: $750 zarar
! Soliqni tannarxga qo'shsangiz, $834 tuzog'i chiqadi.`),

    q('8.2', 211, 'single', `Non-current assets had a carrying amount of $340,000 at the start of the year. During the year assets were sold for $41,000, at a loss of $6,000. Depreciation for the year was $38,000. What is the carrying amount at the end of the year?`,
      pick(['$255,000', '$261,000', '$302,000', '$293,000'], 0),
`# Step 1: Carrying amount of the assets sold
  Proceeds + loss = 41,000 + 6,000 = 47,000
# Step 2: Roll the total forward
  Opening 340,000
  Less depreciation 38,000
  Less assets sold 47,000
  340,000 - 38,000 - 47,000 = 255,000
= Answer: $255,000
! Taking off the $41,000 proceeds instead of the $47,000 carrying amount gives $261,000.`,
`# Шаг 1: Балансовая стоимость проданного
  Выручка + убыток = 41 000 + 6 000 = 47 000
# Шаг 2: Переносим итог
  Начало 340 000
  Минус амортизация 38 000
  Минус проданное 47 000
  340 000 - 38 000 - 47 000 = 255 000
= Ответ: $255 000
! Если вычесть выручку $41 000 вместо балансовой стоимости $47 000, выйдет $261 000.`,
`# 1-qadam: Sotilganning balans qiymati
  Tushum + zarar = 41 000 + 6 000 = 47 000
# 2-qadam: Jamini o'tkazamiz
  Boshi 340 000
  Minus amortizatsiya 38 000
  Minus sotilgan 47 000
  340 000 - 38 000 - 47 000 = 255 000
= Javob: $255 000
! $47 000 balans qiymati o'rniga $41 000 tushumni ayirsangiz, $261 000 chiqadi.`),

    q('8.5', 212, 'single', `A company bought a building 15 years ago for $900,000 and has depreciated it at 2% a year on cost. Today it is revalued to $1,050,000, with a remaining useful life of 35 years. What is next year's depreciation charge, and the revaluation surplus today?`,
      pick([
        'Depreciation $30,000; surplus $420,000',
        'Depreciation $30,000; surplus $150,000',
        'Depreciation $21,000; surplus $420,000',
        'Depreciation $21,000; surplus $150,000',
      ], 0),
`# Step 1: Carrying amount today
  900,000 x 2% x 15 = 270,000 depreciation so far
  900,000 - 270,000 = 630,000
# Step 2: Surplus
  1,050,000 - 630,000 = 420,000
# Step 3: Next year's depreciation
  1,050,000 / 35 = 30,000
= Answer: depreciation $30,000; surplus $420,000
! 1,050,000 x 2% = 21,000 uses the old rate. After a revaluation, divide by the remaining life.`,
`# Шаг 1: Балансовая стоимость сегодня
  900 000 x 2% x 15 = 270 000 амортизации
  900 000 - 270 000 = 630 000
# Шаг 2: Прирост
  1 050 000 - 630 000 = 420 000
# Шаг 3: Амортизация следующего года
  1 050 000 / 35 = 30 000
= Ответ: амортизация $30 000; прирост $420 000
! 1 050 000 x 2% = 21 000 — это старая норма. После переоценки делите на оставшийся срок.`,
`# 1-qadam: Bugungi balans qiymati
  900 000 x 2% x 15 = 270 000 amortizatsiya
  900 000 - 270 000 = 630 000
# 2-qadam: O'sish
  1 050 000 - 630 000 = 420 000
# 3-qadam: Keyingi yil amortizatsiyasi
  1 050 000 / 35 = 30 000
= Javob: amortizatsiya $30 000; o'sish $420 000
! 1 050 000 x 2% = 21 000 — eski stavka. Qayta baholashdan keyin qolgan muddatga bo'ling.`),

    q('8.14', 212, 'single', `A building was bought for $2,000,000 with a 40-year life (straight line). Ten years later its carrying amount was $1,500,000 and it was revalued to $2,100,000. The company transfers excess depreciation to retained earnings each year. With no further revaluations, what is the revaluation surplus one year after the revaluation?`,
      pick(['$580,000', '$530,000', '$600,000', '$620,000'], 0),
`# Step 1: Surplus on revaluation
  2,100,000 - 1,500,000 = 600,000
# Step 2: Old and new charges
  Old: 2,000,000 / 40 = 50,000
  New: 2,100,000 / 30 remaining years = 70,000
# Step 3: Excess transferred out of the surplus
  70,000 - 50,000 = 20,000
# Step 4: Surplus a year later
  600,000 - 20,000 = 580,000
= Answer: $580,000
! Only the EXCESS (20,000) leaves the surplus, not the whole new charge (70,000).`,
`# Шаг 1: Прирост при переоценке
  2 100 000 - 1 500 000 = 600 000
# Шаг 2: Старая и новая амортизация
  Старая: 2 000 000 / 40 = 50 000
  Новая: 2 100 000 / 30 оставшихся лет = 70 000
# Шаг 3: Избыток переносится из резерва
  70 000 - 50 000 = 20 000
# Шаг 4: Резерв через год
  600 000 - 20 000 = 580 000
= Ответ: $580 000
! Из резерва уходит только ИЗБЫТОК (20 000), а не вся новая амортизация (70 000).`,
`# 1-qadam: Qayta baholashdagi o'sish
  2 100 000 - 1 500 000 = 600 000
# 2-qadam: Eski va yangi amortizatsiya
  Eski: 2 000 000 / 40 = 50 000
  Yangi: 2 100 000 / 30 qolgan yil = 70 000
# 3-qadam: Ortiqcha qism zaxiradan o'tkaziladi
  70 000 - 50 000 = 20 000
# 4-qadam: Bir yildan keyingi zaxira
  600 000 - 20 000 = 580 000
= Javob: $580 000
! Zaxiradan faqat ORTIQCHA qism (20 000) chiqadi, butun yangi amortizatsiya (70 000) emas.`),

    q('8.15', 213, 'single', `An old asset (cost $22,000, accumulated depreciation $15,500) is given in part exchange for a new asset costing $31,000. The agreed trade-in value is $5,800. What goes to the statement of profit or loss?`,
      pick(['A loss on disposal of $700', 'A profit on disposal of $5,800', 'A profit on disposal of $700', 'A loss on disposal of $6,500'], 0),
`# Step 1: Carrying amount of the old asset
  22,000 - 15,500 = 6,500
# Step 2: The trade-in value counts as the sale proceeds
  5,800
# Step 3: Compare
  5,800 - 6,500 = 700 loss
= Answer: a loss on disposal of $700`,
`# Шаг 1: Балансовая стоимость старого актива
  22 000 - 15 500 = 6 500
# Шаг 2: Зачётная стоимость считается выручкой от продажи
  5 800
# Шаг 3: Сравним
  5 800 - 6 500 = убыток 700
= Ответ: убыток от выбытия $700`,
`# 1-qadam: Eski aktivning balans qiymati
  22 000 - 15 500 = 6 500
# 2-qadam: Hisobga olingan qiymat sotish tushumi hisoblanadi
  5 800
# 3-qadam: Solishtiramiz
  5 800 - 6 500 = 700 zarar
= Javob: chiqib ketishdan $700 zarar`),

    q('8.19', 213, 'number', `A company bought an office building on 1 January Year 1 for $2,400,000, depreciated straight line at 2% a year (50-year life, nil residual value). On 1 January Year 6 it was revalued to $3,060,000, with no change to the useful life. Excess depreciation is transferred to retained earnings each year. What is the revaluation surplus at 31 December Year 6? (in $)`,
      amount(880000, '$880,000'),
`# Step 1: Carrying amount on 1 January Year 6
  2,400,000 x 2% x 5 = 240,000 depreciation so far
  2,400,000 - 240,000 = 2,160,000
# Step 2: Surplus on revaluation
  3,060,000 - 2,160,000 = 900,000
# Step 3: Excess depreciation in Year 6
  New: 3,060,000 / 45 remaining years = 68,000
  Old: 2,400,000 x 2% = 48,000
  Excess: 68,000 - 48,000 = 20,000
# Step 4: Surplus at the end of Year 6
  900,000 - 20,000 = 880,000
= Answer: $880,000`,
`# Шаг 1: Балансовая стоимость на 1 января 6-го года
  2 400 000 x 2% x 5 = 240 000 амортизации
  2 400 000 - 240 000 = 2 160 000
# Шаг 2: Прирост при переоценке
  3 060 000 - 2 160 000 = 900 000
# Шаг 3: Избыточная амортизация в 6-м году
  Новая: 3 060 000 / 45 оставшихся лет = 68 000
  Старая: 2 400 000 x 2% = 48 000
  Избыток: 68 000 - 48 000 = 20 000
# Шаг 4: Резерв на конец 6-го года
  900 000 - 20 000 = 880 000
= Ответ: $880 000`,
`# 1-qadam: 6-yil 1 yanvardagi balans qiymati
  2 400 000 x 2% x 5 = 240 000 amortizatsiya
  2 400 000 - 240 000 = 2 160 000
# 2-qadam: Qayta baholashdagi o'sish
  3 060 000 - 2 160 000 = 900 000
# 3-qadam: 6-yildagi ortiqcha amortizatsiya
  Yangi: 3 060 000 / 45 qolgan yil = 68 000
  Eski: 2 400 000 x 2% = 48 000
  Ortiqcha: 68 000 - 48 000 = 20 000
# 4-qadam: 6-yil oxiridagi zaxira
  900 000 - 20 000 = 880 000
= Javob: $880 000`),

    q('8.20', 214, 'single', `An asset was bought on 1 January Year 3 for $600,000 and is depreciated over 40 years straight line (nil residual value), with part-year charges in the years of purchase and sale. On 31 December Year 4 it was revalued to $741,000, with no change to its total useful life. It was sold on 30 September Year 5 for $730,000. What is the profit or loss on disposal?`,
      pick(['Profit of $3,625', 'Profit of $171,250', 'Loss of $11,000', 'Profit of $160,000'], 0),
`# Step 1: Depreciation after the revaluation
  Remaining life: 40 - 2 = 38 years
  741,000 / 38 = 19,500 a year
# Step 2: Charge for Year 5 up to the sale
  1 January to 30 September = 9 months
  19,500 x 9/12 = 14,625
# Step 3: Carrying amount at the sale
  741,000 - 14,625 = 726,375
# Step 4: Profit
  730,000 - 726,375 = 3,625
= Answer: profit of $3,625
! The gain was already recorded in the revaluation surplus. It is not counted again in profit.`,
`# Шаг 1: Амортизация после переоценки
  Оставшийся срок: 40 - 2 = 38 лет
  741 000 / 38 = 19 500 в год
# Шаг 2: Начисление за 5-й год до продажи
  С 1 января по 30 сентября = 9 месяцев
  19 500 x 9/12 = 14 625
# Шаг 3: Балансовая стоимость на дату продажи
  741 000 - 14 625 = 726 375
# Шаг 4: Прибыль
  730 000 - 726 375 = 3 625
= Ответ: прибыль $3 625
! Рост стоимости уже отражён в резерве переоценки. В прибыли его повторно не считают.`,
`# 1-qadam: Qayta baholashdan keyingi amortizatsiya
  Qolgan muddat: 40 - 2 = 38 yil
  741 000 / 38 = yiliga 19 500
# 2-qadam: 5-yilda sotuvgacha hisob
  1 yanvardan 30 sentyabrgacha = 9 oy
  19 500 x 9/12 = 14 625
# 3-qadam: Sotuv sanasidagi balans qiymati
  741 000 - 14 625 = 726 375
# 4-qadam: Foyda
  730 000 - 726 375 = 3 625
= Javob: $3 625 foyda
! Qiymat o'sishi allaqachon qayta baholash zaxirasida. Foydada qayta hisoblanmaydi.`),

  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
