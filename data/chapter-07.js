'use strict';

const chapter07 = {
  id: 'chapter-07',
  titles: {
    en: 'Non-current assets: disposal and revaluation',
    ru: 'Внеоборотные активы: выбытие и переоценка',
    uz: 'Uzoq muddatli aktivlar: chiqib ketish va qayta baholash',
  },
  objectives: [
    {
      en: 'Record the disposal of assets, including part exchange',
      ru: 'Отражать выбытие активов, включая обмен с доплатой',
      uz: 'Aktivlarning chiqib ketishini, jumladan ayirboshlashni qayd etish',
    },
    {
      en: 'Calculate the profit or loss on disposal',
      ru: 'Рассчитывать прибыль или убыток от выбытия',
      uz: 'Chiqib ketishdan foyda yoki zararni hisoblash',
    },
    {
      en: 'Record the revaluation of a non-current asset',
      ru: 'Отражать переоценку внеоборотного актива',
      uz: 'Uzoq muddatli aktivni qayta baholashni qayd etish',
    },
    {
      en: 'Calculate the profit or loss on disposal of a revalued asset',
      ru: 'Рассчитывать прибыль или убыток от выбытия переоценённого актива',
      uz: 'Qayta baholangan aktiv chiqib ketishidan foyda yoki zararni hisoblash',
    },
    {
      en: 'Show how non-current assets are disclosed',
      ru: 'Показывать, как раскрываются внеоборотные активы',
      uz: 'Uzoq muddatli aktivlar qanday ochib berilishini ko\'rsatish',
    },
  ],
  sections: [
    {
      key: {
        en: `- Profit or loss on disposal = proceeds - carrying amount at the disposal date.
- Proceeds above carrying amount is a profit. Below is a loss.
- Use a disposals account: Dr cost, Cr accumulated depreciation, Cr proceeds.
- The balancing figure in the disposals account is the profit or loss.
- Charge depreciation up to the disposal date if the policy is monthly.`,
        ru: `- Прибыль или убыток от выбытия = выручка - балансовая стоимость на дату выбытия.
- Выручка выше балансовой стоимости — прибыль. Ниже — убыток.
- Используйте счёт выбытия: Дт стоимость, Кт накопленная амортизация, Кт выручка.
- Балансирующая цифра счёта выбытия — прибыль или убыток.
- При помесячной политике начисляйте амортизацию до даты выбытия.`,
        uz: `- Chiqib ketishdan foyda yoki zarar = tushum - chiqib ketish sanasidagi balans qiymati.
- Tushum balans qiymatidan yuqori bo'lsa foyda. Past bo'lsa zarar.
- Chiqib ketish hisobi: Dt qiymat, Kt to'plangan amortizatsiya, Kt tushum.
- Chiqib ketish hisobidagi balanslovchi summa foyda yoki zarar.
- Oylik siyosatda amortizatsiyani chiqib ketish sanasigacha hisoblang.`,
      },
      exam: {
        en: `- The profit or loss on disposal goes to profit or loss for the year. It is not income from sales.
- When an asset is sold, remove its cost from the asset account and its accumulated depreciation from the accumulated depreciation account.
- To find a revised total carrying amount after a disposal, deduct the carrying amount of the asset sold, which is proceeds less profit (or plus loss).
- The same disposal as one journal: Dr Accumulated depreciation, Dr Bank (proceeds), Dr Loss on disposal (or Cr Profit on disposal), Cr Asset cost.
- Carrying amount at the year end = opening carrying amount + additions + revaluation surplus - carrying amount of assets sold - depreciation for the year.`,
        ru: `- Прибыль или убыток от выбытия идёт в прибыль или убыток за год. Это не выручка от продаж.
- При продаже актива уберите его стоимость со счёта актива и его накопленную амортизацию со счёта накопленной амортизации.
- Чтобы найти новую общую балансовую стоимость после выбытия, вычтите балансовую стоимость проданного актива: выручка минус прибыль (или плюс убыток).
- То же выбытие одной проводкой: Дт Накопленная амортизация, Дт Банк (выручка), Дт Убыток от выбытия (или Кт Прибыль от выбытия), Кт Стоимость актива.
- Балансовая стоимость на конец года = на начало + покупки + прирост от переоценки - балансовая стоимость проданного - амортизация за год.`,
        uz: `- Chiqib ketishdan foyda yoki zarar yilning foyda yoki zarariga o'tadi. Bu savdodan tushum emas.
- Aktiv sotilganda uning qiymatini aktiv hisobidan, to'plangan amortizatsiyasini to'plangan amortizatsiya hisobidan olib tashlang.
- Chiqib ketgandan keyingi yangi umumiy balans qiymatini topish uchun sotilgan aktivning balans qiymatini ayiring: tushum minus foyda (yoki plus zarar).
- Xuddi shu chiqish bitta yozuvda: Dt Jamg'arilgan amortizatsiya, Dt Bank (tushum), Dt Chiqishdan zarar (yoki Kt Chiqishdan foyda), Kt Aktiv qiymati.
- Yil oxiridagi balans qiymati = boshidagi + yangi aktivlar + qayta baholash o'sishi - sotilganlarning balans qiymati - yillik amortizatsiya.`,
      },
      heading: {
        en: 'Disposal of a non-current asset',
        ru: 'Выбытие внеоборотного актива',
        uz: 'Uzoq muddatli aktivning chiqib ketishi',
      },
      body: {
        en: `IAS 16 says an item is derecognised when it is disposed of or no future benefits are expected. The asset and its accumulated depreciation are removed, and a profit or loss on disposal is recorded in profit or loss.

For a cash sale there are three steps. First, remove the cost: Dr Disposals, Cr Non-current asset cost. Second, remove the accumulated depreciation: Dr Accumulated depreciation, Cr Disposals. Third, record the proceeds: Dr Bank, Cr Disposals.

The balance on the disposals account is the profit or loss. It can also be found as proceeds less the carrying amount at disposal: proceeds above carrying amount is a profit, below is a loss, and equal is neither.`,
        ru: `IAS 16: объект списывается при выбытии или когда будущих выгод не ожидается. Актив и его накопленная амортизация убираются, а прибыль или убыток от выбытия отражается в прибыли или убытке.

При продаже за деньги три шага. Первый — убрать стоимость: Дт Выбытие, Кт Стоимость внеоборотного актива. Второй — убрать накопленную амортизацию: Дт Накопленная амортизация, Кт Выбытие. Третий — отразить выручку: Дт Банк, Кт Выбытие.

Остаток на счёте выбытия — это прибыль или убыток. Его можно найти и как выручку минус балансовая стоимость на дату выбытия: выше балансовой стоимости — прибыль, ниже — убыток, равна — ни того, ни другого.`,
        uz: `IAS 16: obyekt chiqib ketganda yoki kelajakdagi foyda kutilmaganda hisobdan chiqariladi. Aktiv va uning to'plangan amortizatsiyasi olib tashlanadi, chiqib ketishdan foyda yoki zarar foyda yoki zararda qayd etiladi.

Naqd sotuv uchun uch qadam bor. Birinchi, qiymatni olib tashlash: Dt Chiqib ketish, Kt Uzoq muddatli aktiv qiymati. Ikkinchi, to'plangan amortizatsiyani olib tashlash: Dt To'plangan amortizatsiya, Kt Chiqib ketish. Uchinchi, tushumni yozish: Dt Bank, Kt Chiqib ketish.

Chiqib ketish hisobidagi qoldiq foyda yoki zarar. Uni tushum minus chiqib ketish sanasidagi balans qiymati sifatida ham topish mumkin: balans qiymatidan yuqori bo'lsa foyda, past bo'lsa zarar, teng bo'lsa ikkalasi ham yo'q.`,
      },
      example: {
        en: `A cafe sells an old till for $700. It cost $1,500 and has $900 of accumulated depreciation.
# Step 1: Carrying amount
  $1,500 - $900 = $600
# Step 2: Compare with the proceeds
  $700 - $600 = $100 more than its book value, so a profit
# Step 3: The disposals account
  Dr Disposals $1,500 (remove the cost)
  Cr Disposals $900 (remove the accumulated depreciation)
  Cr Disposals $700 (the cash received)
  Balancing figure: $100 profit on disposal
= Profit on disposal: $100, shown in profit or loss.`,
        ru: `Кафе продаёт старую кассу за $700. Она стоила $1,500, накопленная амортизация $900.
# Шаг 1: Балансовая стоимость
  $1,500 - $900 = $600
# Шаг 2: Сравниваем с выручкой
  $700 - $600 = на $100 больше учётной стоимости, значит прибыль
# Шаг 3: Счёт выбытия
  Дт Выбытие $1,500 (убираем стоимость)
  Кт Выбытие $900 (убираем накопленную амортизацию)
  Кт Выбытие $700 (полученные деньги)
  Балансирующая цифра: прибыль от выбытия $100
= Прибыль от выбытия: $100, в прибыли или убытке.`,
        uz: `Kafe eski kassani $700 ga sotadi. U $1,500 turgan, to'plangan amortizatsiya $900.
# 1-qadam: Balans qiymati
  $1,500 - $900 = $600
# 2-qadam: Tushum bilan solishtiramiz
  $700 - $600 = hisobdagi qiymatdan $100 ko'p, demak foyda
# 3-qadam: Chiqish hisobi
  Dt Chiqish $1,500 (qiymatni olib tashlaymiz)
  Kt Chiqish $900 (to'plangan amortizatsiyani olib tashlaymiz)
  Kt Chiqish $700 (olingan pul)
  Balanslovchi son: $100 chiqishdan foyda
= Chiqishdan foyda: $100, foyda yoki zararda.`,
      },
      simple: {
        en: `When you sell an old asset, compare what you got for it (proceeds) with what it was worth in your books (carrying amount = cost - accumulated depreciation).

More than the carrying amount is a profit on disposal. Less is a loss. A disposals account collects the cost, the accumulated depreciation and the proceeds, and the balancing figure is the profit or loss.`,
        ru: `Продавая старый актив, сравните, сколько за него получили (выручка), с его стоимостью в учёте (балансовая = стоимость - накопленная амортизация).

Больше балансовой — прибыль от выбытия. Меньше — убыток. Счёт выбытия собирает стоимость, накопленную амортизацию и выручку, а балансирующая цифра — прибыль или убыток.`,
        uz: `Eski aktivni sotganda, uning uchun olinganni (tushum) hisobdagi qiymati (balans qiymati = qiymat - to'plangan amortizatsiya) bilan solishtiring.

Balans qiymatidan ko'p — chiqishdan foyda. Kam — zarar. Chiqish hisobi qiymat, to'plangan amortizatsiya va tushumni yig'adi, balanslovchi son — foyda yoki zarar.`,
      },
    },
    {
      key: {
        en: `- Part exchange: an old asset is given in part payment for a new one.
- The allowance for the old asset is treated as sale proceeds.
- Dr Non-current asset cost (new), Cr Disposals (allowance), Cr Bank (cash paid).
- Cost of the new asset = allowance + cash paid.`,
        ru: `- Обмен с доплатой: старый актив отдаётся в счёт оплаты нового.
- Зачётная стоимость старого актива считается выручкой от продажи.
- Дт Стоимость нового актива, Кт Выбытие (зачёт), Кт Банк (доплата).
- Стоимость нового актива = зачёт + доплата деньгами.`,
        uz: `- Ayirboshlash: eski aktiv yangisi uchun to'lovning bir qismi sifatida beriladi.
- Eski aktiv uchun hisobga olingan summa sotuv tushumi hisoblanadi.
- Dt Yangi aktiv qiymati, Kt Chiqib ketish (hisobga olingan summa), Kt Bank (to'langan pul).
- Yangi aktiv qiymati = hisobga olingan summa + to'langan pul.`,
      },
      exam: {
        en: `- A trade-in is a part exchange, so the allowance is the sale proceeds of the old asset.
- Keep depreciation policy rules in mind: if there is no depreciation in the year of sale, do not charge any on the old asset in that year.
- The new asset's cost is the allowance plus the cash paid, not the old asset's carrying amount.
- Before working out the old asset's carrying amount, take insurance, road tax or a maintenance contract out of its cost. They were never part of the asset.`,
        ru: `- Trade-in — это обмен с доплатой, поэтому зачёт — выручка от продажи старого актива.
- Помните правила политики амортизации: если в год продажи амортизация не начисляется, не начисляйте её на старый актив в этом году.
- Стоимость нового актива — это зачёт плюс уплаченные деньги, а не балансовая стоимость старого.
- Прежде чем считать балансовую стоимость старого актива, уберите из его стоимости страховку, дорожный налог или договор на обслуживание. Они никогда не были частью актива.`,
        uz: `- Trade-in ayirboshlash, shuning uchun hisobga olingan summa eski aktivning sotuv tushumi.
- Amortizatsiya siyosatini eslang: sotuv yilida amortizatsiya hisoblanmasa, eski aktivga shu yili hisoblamang.
- Yangi aktiv qiymati — hisobga olingan summa plus to'langan pul, eski aktivning balans qiymati emas.
- Eski aktivning balans qiymatini hisoblashdan oldin uning qiymatidan sug'urta, yo'l solig'i yoki xizmat shartnomasini chiqarib tashlang. Ular hech qachon aktivning qismi bo'lmagan.`,
      },
      heading: {
        en: 'Disposal by part exchange',
        ru: 'Выбытие в обмен с доплатой',
        uz: 'Ayirboshlash orqali chiqib ketish',
      },
      body: {
        en: `A part-exchange agreement is where an old asset is given in part payment for a new one, and the balance of the new asset's cost is paid in cash.

The first two steps are the same as for a cash sale: remove the old asset's cost, and remove its accumulated depreciation. Then record the allowance as the proceeds: Dr Non-current asset cost (part of the new asset's cost), Cr Disposals. Finally record the cash paid: Dr Non-current asset cost, Cr Bank.

The balance on the disposals account is again the profit or loss on disposal.`,
        ru: `Обмен с доплатой — это когда старый актив отдают в счёт оплаты нового, а остаток стоимости нового актива оплачивают деньгами.

Первые два шага те же, что при продаже за деньги: убрать стоимость старого актива и его накопленную амортизацию. Затем отразить зачёт как выручку: Дт Стоимость внеоборотного актива (часть стоимости нового), Кт Выбытие. Наконец, отразить уплаченные деньги: Дт Стоимость внеоборотного актива, Кт Банк.

Остаток на счёте выбытия снова даёт прибыль или убыток от выбытия.`,
        uz: `Ayirboshlash — eski aktiv yangisi uchun to'lovning bir qismi sifatida beriladi, yangi aktiv qiymatining qoldig'i esa naqd to'lanadi.

Dastlabki ikki qadam naqd sotuv bilan bir xil: eski aktiv qiymatini va to'plangan amortizatsiyasini olib tashlash. So'ng hisobga olingan summani tushum sifatida yozing: Dt Uzoq muddatli aktiv qiymati (yangi aktiv qiymatining bir qismi), Kt Chiqib ketish. Nihoyat to'langan pulni yozing: Dt Uzoq muddatli aktiv qiymati, Kt Bank.

Chiqib ketish hisobidagi qoldiq yana chiqib ketishdan foyda yoki zarar.`,
      },
      example: {
        en: `A courier trades in an old van for a new one.
  Old van: cost $10,000, accumulated depreciation $6,000
  The dealer allows $4,500 for it. The new van costs $14,000.
# Step 1: Cash to pay
  $14,000 - $4,500 = $9,500
# Step 2: Profit or loss on the old van
  Carrying amount $10,000 - $6,000 = $4,000
  Allowance $4,500 - $4,000 = $500 profit
# Step 3: The new van's cost
  Allowance $4,500 + cash $9,500 = $14,000
  Dr New van $4,500, Cr Disposals $4,500 (the allowance)
  Dr New van $9,500, Cr Bank $9,500 (the cash)`,
        ru: `Курьер меняет старый фургон на новый.
  Старый фургон: стоимость $10,000, накопленная амортизация $6,000
  Дилер засчитывает за него $4,500. Новый фургон стоит $14,000.
# Шаг 1: Доплата
  $14,000 - $4,500 = $9,500
# Шаг 2: Прибыль или убыток по старому фургону
  Балансовая стоимость $10,000 - $6,000 = $4,000
  Зачёт $4,500 - $4,000 = прибыль $500
# Шаг 3: Стоимость нового фургона
  Зачёт $4,500 + деньги $9,500 = $14,000
  Дт Новый фургон $4,500, Кт Выбытие $4,500 (зачёт)
  Дт Новый фургон $9,500, Кт Банк $9,500 (деньги)`,
        uz: `Kuryer eski furgonni yangisiga almashtiradi.
  Eski furgon: qiymati $10,000, to'plangan amortizatsiya $6,000
  Diler uning uchun $4,500 hisobga oladi. Yangi furgon $14,000.
# 1-qadam: Qo'shimcha to'lov
  $14,000 - $4,500 = $9,500
# 2-qadam: Eski furgon bo'yicha foyda yoki zarar
  Balans qiymati $10,000 - $6,000 = $4,000
  Hisobga olingan $4,500 - $4,000 = $500 foyda
# 3-qadam: Yangi furgon qiymati
  Hisobga olingan $4,500 + pul $9,500 = $14,000
  Dt Yangi furgon $4,500, Kt Chiqish $4,500 (hisobga olingan summa)
  Dt Yangi furgon $9,500, Kt Bank $9,500 (pul)`,
      },
      simple: {
        en: `Part exchange (a trade-in) means giving your old asset to the seller as part of the payment for a new one, and paying the rest in cash.

Treat the trade-in allowance exactly like sale proceeds for the old asset. The new asset's cost is the allowance plus the cash you paid.`,
        ru: `Обмен с доплатой (trade-in) — отдаёте старый актив продавцу как часть оплаты нового, а остальное доплачиваете деньгами.

Зачёт за старый актив учитывайте точно как выручку от его продажи. Стоимость нового актива = зачёт + доплаченные деньги.`,
        uz: `Ayirboshlash (trade-in) — eski aktivni yangisi uchun to'lovning bir qismi sifatida sotuvchiga berish va qolganini naqd to'lash.

Eski aktiv uchun hisobga olingan summani uni sotishdan tushum kabi hisobga oling. Yangi aktiv qiymati = hisobga olingan summa + to'langan pul.`,
      },
    },
    {
      key: {
        en: `- Revaluation model (IAS 16): a company may carry assets at current value, not cost.
- Revaluation surplus = revalued amount - carrying amount.
- The gain is unrealised: it goes in other comprehensive income, then to the revaluation surplus in equity.
- Dr Asset, Dr Accumulated depreciation, Cr Revaluation surplus.`,
        ru: `- Модель переоценки (IAS 16): компания может вести активы по текущей стоимости, а не по первоначальной.
- Прирост от переоценки = переоценённая сумма - балансовая стоимость.
- Прирост нереализованный: он идёт в прочий совокупный доход, затем в резерв переоценки в капитале.
- Дт Актив, Дт Накопленная амортизация, Кт Резерв переоценки.`,
        uz: `- Qayta baholash modeli (IAS 16): kompaniya aktivlarni dastlabki qiymatda emas, joriy qiymatda yuritishi mumkin.
- Qayta baholash rezervi = qayta baholangan summa - balans qiymati.
- Foyda amalga oshmagan: u boshqa umumlashgan daromadga, so'ng kapitaldagi qayta baholash rezerviga o'tadi.
- Dt Aktiv, Dt To'plangan amortizatsiya, Kt Qayta baholash rezervi.`,
      },
      exam: {
        en: `- If one asset is revalued, the whole class it belongs to must be revalued. Other classes may stay at cost.
- Revaluations must be made often enough that carrying amount stays close to fair value.
- Revalue the carrying amount, not the cost. The accumulated depreciation is cleared out.
- A revaluation gain is not recorded in profit or loss because it is not realised. It appears in other comprehensive income.`,
        ru: `- Если переоценивается один актив, переоценивать нужно весь его класс. Другие классы могут оставаться по стоимости.
- Переоценки делаются достаточно часто, чтобы балансовая стоимость была близка к справедливой.
- Переоценивается балансовая стоимость, а не первоначальная. Накопленная амортизация обнуляется.
- Прирост от переоценки не отражается в прибыли или убытке, так как он не реализован. Он показывается в прочем совокупном доходе.`,
        uz: `- Bitta aktiv qayta baholansa, uning butun toifasi baholanishi kerak. Boshqa toifalar qiymatda qolishi mumkin.
- Qayta baholash balans qiymati haqiqiy qiymatga yaqin bo'lishi uchun yetarlicha tez-tez qilinishi kerak.
- Dastlabki qiymat emas, balans qiymati qayta baholanadi. To'plangan amortizatsiya nolga tushiriladi.
- Qayta baholash foydasi foyda yoki zararda yozilmaydi, chunki u amalga oshmagan. U boshqa umumlashgan daromadda ko'rinadi.`,
      },
      heading: {
        en: 'Revaluing a non-current asset',
        ru: 'Переоценка внеоборотного актива',
        uz: 'Uzoq muddatli aktivni qayta baholash',
      },
      body: {
        en: `IAS 16 lets items of property, plant and equipment be measured using the revaluation model. Land and buildings often rise in value over time, and a company may choose to show that in its statement of financial position.

The increase is recognised in other comprehensive income and accumulated in equity under the heading revaluation surplus. It is not recorded in profit or loss because it is unrealised, like a house that has risen in price but has not been sold.

For a non-depreciated asset: Dr Non-current asset, Cr Revaluation surplus. For a depreciated asset the accumulated depreciation to date is cleared: Dr Accumulated depreciation, Dr Non-current asset cost (the balancing amount), Cr Revaluation surplus. The surplus equals the revalued amount less the carrying amount.

The gain for the year is shown in other comprehensive income. It is added to earlier surpluses to give the cumulative revaluation surplus in equity.`,
        ru: `IAS 16 позволяет оценивать основные средства по модели переоценки. Земля и здания часто дорожают со временем, и компания может показать это в отчёте о финансовом положении.

Увеличение признаётся в прочем совокупном доходе и накапливается в капитале под названием резерв переоценки. В прибыли или убытке оно не отражается, потому что нереализовано, как дом, который подорожал, но не продан.

Для неамортизируемого актива: Дт Внеоборотный актив, Кт Резерв переоценки. Для амортизируемого актива накопленная амортизация обнуляется: Дт Накопленная амортизация, Дт Стоимость внеоборотного актива (балансирующая сумма), Кт Резерв переоценки. Резерв равен переоценённой сумме минус балансовая стоимость.

Прирост за год показывается в прочем совокупном доходе. Он добавляется к прежним резервам и даёт накопленный резерв переоценки в капитале.`,
        uz: `IAS 16 asosiy vositalarni qayta baholash modelida o'lchashga ruxsat beradi. Yer va binolar vaqt o'tishi bilan ko'pincha qimmatlashadi va kompaniya buni moliyaviy holat hisobotida ko'rsatishni tanlashi mumkin.

O'sish boshqa umumlashgan daromadda tan olinadi va kapitalda qayta baholash rezervi nomi ostida to'planadi. U foyda yoki zararda yozilmaydi, chunki amalga oshmagan, xuddi narxi oshgan, lekin sotilmagan uy kabi.

Amortizatsiyalanmaydigan aktiv uchun: Dt Uzoq muddatli aktiv, Kt Qayta baholash rezervi. Amortizatsiyalanadigan aktivda to'plangan amortizatsiya nolga tushiriladi: Dt To'plangan amortizatsiya, Dt Uzoq muddatli aktiv qiymati (balanslovchi summa), Kt Qayta baholash rezervi. Rezerv qayta baholangan summa minus balans qiymatiga teng.

Yil uchun foyda boshqa umumlashgan daromadda ko'rsatiladi. U oldingi rezervlarga qo'shilib, kapitaldagi jamlangan qayta baholash rezervini beradi.`,
      },
      example: {
        en: `A company's office building cost $100,000 and is depreciated at 2% a year. After 10 years a valuer says it is worth $150,000.
# Step 1: Carrying amount now
  Accumulated depreciation: 10 × $2,000 = $20,000
  $100,000 - $20,000 = $80,000
# Step 2: Revaluation surplus
  $150,000 - $80,000 = $70,000
# Step 3: The entry
  Dr Building $50,000 (cost goes from $100,000 up to $150,000)
  Dr Accumulated depreciation $20,000 (cleared to zero)
  Cr Revaluation surplus $70,000
= The building now stands at $150,000, and $70,000 appears in other comprehensive income.`,
        ru: `Офисное здание компании стоило $100,000 и амортизируется на 2% в год. Через 10 лет оценщик говорит, что оно стоит $150,000.
# Шаг 1: Балансовая стоимость сейчас
  Накопленная амортизация: 10 × $2,000 = $20,000
  $100,000 - $20,000 = $80,000
# Шаг 2: Резерв переоценки
  $150,000 - $80,000 = $70,000
# Шаг 3: Проводка
  Дт Здание $50,000 (стоимость растёт с $100,000 до $150,000)
  Дт Накопленная амортизация $20,000 (обнуляется)
  Кт Резерв переоценки $70,000
= Здание теперь стоит $150,000, а $70,000 видны в прочем совокупном доходе.`,
        uz: `Kompaniyaning ofis binosi $100,000 turgan va yiliga 2% amortizatsiya qilinadi. 10 yildan keyin baholovchi uni $150,000 deydi.
# 1-qadam: Hozirgi balans qiymati
  To'plangan amortizatsiya: 10 × $2,000 = $20,000
  $100,000 - $20,000 = $80,000
# 2-qadam: Qayta baholash rezervi
  $150,000 - $80,000 = $70,000
# 3-qadam: Yozuv
  Dt Bino $50,000 (qiymat $100,000 dan $150,000 ga oshadi)
  Dt To'plangan amortizatsiya $20,000 (nolga tushadi)
  Kt Qayta baholash rezervi $70,000
= Bino endi $150,000, $70,000 boshqa umumlashgan daromadda ko'rinadi.`,
      },
      simple: {
        en: `Buildings and land often rise in value. A company may choose to show its assets at today's value instead of cost. This is a revaluation.

The gain is not profit yet, because nothing has been sold. So it goes to other comprehensive income and builds up in equity as a revaluation surplus. Surplus = new value - carrying amount.`,
        ru: `Здания и земля часто дорожают. Компания может показывать активы по сегодняшней стоимости вместо первоначальной. Это переоценка.

Прирост — ещё не прибыль, ведь ничего не продано. Поэтому он идёт в прочий совокупный доход и копится в капитале как резерв переоценки. Резерв = новая стоимость - балансовая стоимость.`,
        uz: `Bino va yerlar ko'pincha qimmatlashadi. Kompaniya aktivlarni dastlabki qiymat o'rniga bugungi qiymatda ko'rsatishi mumkin. Bu qayta baholash.

O'sish hali foyda emas, chunki hech narsa sotilmagan. Shuning uchun u boshqa umumlashgan daromadga tushadi va kapitalda qayta baholash rezervi bo'lib to'planadi. Rezerv = yangi qiymat - balans qiymati.`,
      },
    },
    {
      key: {
        en: `- After revaluation, depreciate (revalued amount - residual value) over the remaining useful life.
- This charge is higher than before and goes to profit or loss as normal.
- Excess depreciation = new charge - old charge (based on original cost).
- Optional policy: each year Dr Revaluation surplus, Cr Retained earnings for the excess.
- If chosen, the transfer must be made every year.`,
        ru: `- После переоценки амортизируйте (переоценённая сумма - ликвидационная стоимость) на оставшийся срок.
- Это начисление выше прежнего и идёт в прибыль или убыток как обычно.
- Избыточная амортизация = новое начисление - прежнее (от первоначальной стоимости).
- Необязательная политика: ежегодно Дт Резерв переоценки, Кт Нераспределённая прибыль на эту разницу.
- Если выбрана, перенос нужно делать каждый год.`,
        uz: `- Qayta baholashdan keyin (qayta baholangan summa - tugatish qiymati) ni qolgan muddatga amortizatsiyalang.
- Bu summa avvalgisidan yuqori va odatdagidek foyda yoki zararga o'tadi.
- Ortiqcha amortizatsiya = yangi summa - eski summa (dastlabki qiymatdan).
- Ixtiyoriy siyosat: har yili ortiqcha uchun Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda.
- Tanlansa, o'tkazma har yili qilinishi kerak.`,
      },
      exam: {
        en: `- Work out how old the asset is from accumulated depreciation divided by the original annual charge. Remaining life is the total life less that age.
- The annual transfer of excess depreciation is shown in the statement of changes in equity. It is not an item of profit or loss or other comprehensive income.
- The transfer is an accounting policy. It is optional, but once chosen it is applied every year.
- If a revaluation happens part-way through the year, depreciate the old basis up to that date and the new basis after it.`,
        ru: `- Возраст актива найдите, разделив накопленную амортизацию на первоначальное годовое начисление. Оставшийся срок — общий срок минус возраст.
- Ежегодный перенос избыточной амортизации показывается в отчёте об изменениях капитала. Это не статья прибыли или убытка и не прочий совокупный доход.
- Перенос — учётная политика. Она необязательна, но, раз выбрав, применяйте её каждый год.
- Если переоценка в середине года, до этой даты амортизируйте по старой базе, после — по новой.`,
        uz: `- Aktiv yoshini to'plangan amortizatsiyani dastlabki yillik summaga bo'lib toping. Qolgan muddat — umumiy muddat minus shu yosh.
- Ortiqcha amortizatsiyaning yillik o'tkazmasi kapitaldagi o'zgarishlar hisobotida ko'rsatiladi. U foyda yoki zarar moddasi ham, boshqa umumlashgan daromad ham emas.
- O'tkazma hisob siyosati. U ixtiyoriy, lekin tanlansa har yili qo'llanadi.
- Qayta baholash yil o'rtasida bo'lsa, shu sanagacha eski asosda, undan keyin yangi asosda amortizatsiyalang.`,
      },
      heading: {
        en: 'Depreciating a revalued asset',
        ru: 'Амортизация переоценённого актива',
        uz: 'Qayta baholangan aktivni amortizatsiyalash',
      },
      body: {
        en: `Once an asset is revalued, depreciation is based on the revalued amount, less any residual value, and the remaining useful life at that date. The charge is higher than before and is charged to profit or loss in the normal way.

IAS 16 says that if one item is revalued, the whole class of property, plant and equipment it belongs to must be revalued. A class may be revalued on a rolling basis if valuations are kept up to date and done within a short period.

The excess of the new depreciation charge over the old one (based on original cost) may be transferred each year from revaluation surplus to retained earnings within equity: Dr Revaluation surplus, Cr Retained earnings. This is an optional policy, but once an entity adopts it, it must make the transfer every year, not in some years and not in others.`,
        ru: `После переоценки актива амортизация считается от переоценённой суммы за вычетом ликвидационной стоимости и оставшегося срока использования на эту дату. Начисление выше прежнего и относится на прибыль или убыток обычным образом.

IAS 16: если переоценивается один объект, переоценивать нужно весь класс основных средств, к которому он относится. Класс можно переоценивать поэтапно, если оценки актуальны и проводятся в короткий срок.

Превышение нового начисления амортизации над прежним (рассчитанным от первоначальной стоимости) можно ежегодно переносить из резерва переоценки в нераспределённую прибыль внутри капитала: Дт Резерв переоценки, Кт Нераспределённая прибыль. Это необязательная политика, но, приняв её, организация должна делать перенос каждый год, а не в одни годы да, в другие нет.`,
        uz: `Aktiv qayta baholangach, amortizatsiya qayta baholangan summa minus tugatish qiymatiga va shu sanadagi qolgan foydali muddatga asoslanadi. Summa avvalgisidan yuqori va odatdagidek foyda yoki zararga o'tadi.

IAS 16: agar bitta obyekt qayta baholansa, u tegishli asosiy vositalar toifasi butunlay qayta baholanishi kerak. Baholashlar dolzarb bo'lsa va qisqa muddatda o'tkazilsa, toifa navbatma-navbat baholanishi mumkin.

Yangi amortizatsiya summasining eskisidan (dastlabki qiymatdan) ortig'i har yili qayta baholash rezervidan kapital ichidagi taqsimlanmagan foydaga o'tkazilishi mumkin: Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda. Bu ixtiyoriy siyosat, ammo qabul qilingach, o'tkazma har yili qilinishi kerak, ba'zi yillari qilinib, ba'zilarida qilinmasligi mumkin emas.`,
      },
      example: {
        en: `The revalued building is $150,000 with 40 years of life left.
# Step 1: New depreciation
  $150,000 / 40 = $3,750 a year
# Step 2: Old depreciation (on cost)
  2% × $100,000 = $2,000 a year
# Step 3: Excess depreciation
  $3,750 - $2,000 = $1,750
# Step 4: The yearly transfer (if the company chose this policy)
  Dr Revaluation surplus $1,750, Cr Retained earnings $1,750
= After one year the surplus is $70,000 - $1,750 = $68,250. The full $3,750 is still the expense in profit or loss.`,
        ru: `Переоценённое здание стоит $150,000, осталось 40 лет.
# Шаг 1: Новая амортизация
  $150,000 / 40 = $3,750 в год
# Шаг 2: Старая амортизация (от стоимости)
  2% × $100,000 = $2,000 в год
# Шаг 3: Избыточная амортизация
  $3,750 - $2,000 = $1,750
# Шаг 4: Ежегодный перенос (если компания выбрала такую политику)
  Дт Резерв переоценки $1,750, Кт Нераспределённая прибыль $1,750
= Через год резерв $70,000 - $1,750 = $68,250. Расход в прибыли или убытке по-прежнему все $3,750.`,
        uz: `Qayta baholangan bino $150,000, 40 yil qolgan.
# 1-qadam: Yangi amortizatsiya
  $150,000 / 40 = yiliga $3,750
# 2-qadam: Eski amortizatsiya (qiymatdan)
  2% × $100,000 = yiliga $2,000
# 3-qadam: Ortiqcha amortizatsiya
  $3,750 - $2,000 = $1,750
# 4-qadam: Yillik o'tkazma (kompaniya shu siyosatni tanlagan bo'lsa)
  Dt Qayta baholash rezervi $1,750, Kt Taqsimlanmagan foyda $1,750
= Bir yildan keyin rezerv $70,000 - $1,750 = $68,250. Foyda yoki zarardagi xarajat baribir to'liq $3,750.`,
      },
      simple: {
        en: `After a revaluation, depreciation is worked out on the NEW value over the years still left, so it is bigger than before.

The extra part (new charge minus the old charge on cost) is called excess depreciation. A company may choose to move that amount each year from the revaluation surplus to retained earnings, inside equity. If it chooses to do this, it must do it every year.`,
        ru: `После переоценки амортизацию считают от НОВОЙ стоимости на оставшиеся годы, поэтому она больше прежней.

Лишняя часть (новая сумма минус старая от стоимости) — избыточная амортизация. Компания может каждый год переносить эту сумму из резерва переоценки в нераспределённую прибыль внутри капитала. Если выбрала так делать — делает каждый год.`,
        uz: `Qayta baholashdan keyin amortizatsiya YANGI qiymatdan qolgan yillarga hisoblanadi, shuning uchun avvalgidan katta.

Ortiqcha qism (yangi summa minus qiymatdan eski summa) — ortiqcha amortizatsiya. Kompaniya har yili shu summani qayta baholash rezervidan taqsimlanmagan foydaga, kapital ichida o'tkazishi mumkin. Shunday qilishni tanlasa, har yili qiladi.`,
      },
    },
    {
      key: {
        en: `- Profit or loss on disposal = proceeds - carrying amount. The revaluation surplus is not in this sum.
- On disposal, move the revaluation surplus: Dr Revaluation surplus, Cr Retained earnings.
- The surplus is now realised, so it belongs in retained earnings.
- Show the transfer in the statement of changes in equity.`,
        ru: `- Прибыль или убыток от выбытия = выручка - балансовая стоимость. Резерв переоценки в этот расчёт не входит.
- При выбытии перенесите резерв: Дт Резерв переоценки, Кт Нераспределённая прибыль.
- Теперь прирост реализован, поэтому его место — в нераспределённой прибыли.
- Показывайте перенос в отчёте об изменениях капитала.`,
        uz: `- Chiqib ketishdan foyda yoki zarar = tushum - balans qiymati. Qayta baholash rezervi bu hisobga kirmaydi.
- Chiqib ketganda rezervni o'tkazing: Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda.
- Endi foyda amalga oshgan, shuning uchun taqsimlanmagan foydaga tegishli.
- O'tkazmani kapitaldagi o'zgarishlar hisobotida ko'rsating.`,
      },
      exam: {
        en: `- The revaluation surplus never goes through profit or loss on disposal, and it is never added to or taken from the profit on disposal.
- Use the carrying amount at the disposal date, which already includes the revaluation.
- The balance of the surplus still held for that asset is what is moved, after any annual transfers already made.`,
        ru: `- Резерв переоценки при выбытии никогда не проходит через прибыль или убыток и не прибавляется к прибыли от выбытия и не вычитается из неё.
- Используйте балансовую стоимость на дату выбытия, которая уже учитывает переоценку.
- Переносится остаток резерва по этому активу, после уже сделанных ежегодных переносов.`,
        uz: `- Qayta baholash rezervi chiqib ketishda hech qachon foyda yoki zarar orqali o'tmaydi va chiqib ketishdan foydaga qo'shilmaydi yoki undan ayirilmaydi.
- Chiqib ketish sanasidagi balans qiymatidan foydalaning, u qayta baholashni allaqachon o'z ichiga oladi.
- O'tkaziladigan summa — shu aktiv bo'yicha qolgan rezerv, allaqachon qilingan yillik o'tkazmalardan keyin.`,
      },
      heading: {
        en: 'Disposing of a revalued asset',
        ru: 'Выбытие переоценённого актива',
        uz: 'Qayta baholangan aktivning chiqib ketishi',
      },
      body: {
        en: `IAS 16 says the gain or loss on derecognition is the difference between the net disposal proceeds and the carrying amount. The carrying amount here is the revalued figure, so the revaluation surplus does not form part of the profit or loss calculation.

Once the asset has gone, the surplus held for it has nothing left to relate to, and the gain is now real. IAS 16 therefore lets it move straight to retained earnings, the part of equity for realised gains and losses. This stays inside equity: Dr Revaluation surplus, Cr Retained earnings. You will see it in the statement of changes in equity, not in profit or loss.`,
        ru: `IAS 16: прибыль или убыток при списании — это разница между чистой выручкой от выбытия и балансовой стоимостью. Балансовая стоимость здесь — переоценённая, поэтому резерв переоценки в расчёт прибыли или убытка не входит.

Когда актива больше нет, резерву по нему не к чему относиться, а прирост стал реальным. Поэтому IAS 16 разрешает перенести его прямо в нераспределённую прибыль, часть капитала для реализованных прибылей и убытков. Это остаётся внутри капитала: Дт Резерв переоценки, Кт Нераспределённая прибыль. Вы увидите это в отчёте об изменениях капитала, а не в прибыли или убытке.`,
        uz: `IAS 16: hisobdan chiqarishdagi foyda yoki zarar sof chiqib ketish tushumi va balans qiymati o'rtasidagi farq. Bu yerda balans qiymati qayta baholangan summa, shuning uchun qayta baholash rezervi foyda yoki zarar hisobiga kirmaydi.

Aktiv ketgach, u bo'yicha rezerv hech narsaga tegishli bo'lmay qoladi, foyda esa haqiqiy bo'ladi. Shuning uchun IAS 16 uni to'g'ridan-to'g'ri taqsimlanmagan foydaga, ya'ni kapitalning amalga oshgan foyda va zararlar uchun qismiga o'tkazishga ruxsat beradi. Bu kapital ichida qoladi: Dt Qayta baholash rezervi, Kt Taqsimlanmagan foyda. Buni foyda yoki zararda emas, kapitaldagi o'zgarishlar hisobotida ko'rasiz.`,
      },
      example: {
        en: `One year after the revaluation, the company sells the building for $160,000.
# Step 1: Carrying amount at the sale
  $150,000 - one year's depreciation $3,750 = $146,250
# Step 2: Profit on disposal
  $160,000 - $146,250 = $13,750, shown in profit or loss
# Step 3: The surplus left for this building
  $68,250 (after last year's transfer)
  Dr Revaluation surplus $68,250, Cr Retained earnings $68,250, inside equity
! Common trap: adding the $68,250 to the profit on disposal. It goes straight to retained earnings.`,
        ru: `Через год после переоценки компания продаёт здание за $160,000.
# Шаг 1: Балансовая стоимость при продаже
  $150,000 - амортизация за год $3,750 = $146,250
# Шаг 2: Прибыль от выбытия
  $160,000 - $146,250 = $13,750, в прибыли или убытке
# Шаг 3: Оставшийся резерв по этому зданию
  $68,250 (после прошлогоднего переноса)
  Дт Резерв переоценки $68,250, Кт Нераспределённая прибыль $68,250, внутри капитала
! Частая ошибка: прибавить $68,250 к прибыли от выбытия. Они идут прямо в нераспределённую прибыль.`,
        uz: `Qayta baholashdan bir yil o'tib, kompaniya binoni $160,000 ga sotadi.
# 1-qadam: Sotuv paytidagi balans qiymati
  $150,000 - bir yillik amortizatsiya $3,750 = $146,250
# 2-qadam: Chiqishdan foyda
  $160,000 - $146,250 = $13,750, foyda yoki zararda
# 3-qadam: Shu bino bo'yicha qolgan rezerv
  $68,250 (o'tgan yilgi o'tkazmadan keyin)
  Dt Qayta baholash rezervi $68,250, Kt Taqsimlanmagan foyda $68,250, kapital ichida
! Ko'p uchraydigan xato: $68,250 ni chiqish foydasiga qo'shish. U to'g'ridan-to'g'ri taqsimlanmagan foydaga boradi.`,
      },
      simple: {
        en: `When a revalued asset is sold, the profit or loss is still just proceeds minus carrying amount. The revaluation surplus is NOT part of that sum.

Once the asset is gone, its surplus is now a real gain, so it is moved inside equity from the revaluation surplus to retained earnings. It never passes through profit or loss.`,
        ru: `При продаже переоценённого актива прибыль или убыток — по-прежнему выручка минус балансовая стоимость. Резерв переоценки в этот расчёт НЕ входит.

Когда актива нет, его резерв становится реальным приростом и переносится внутри капитала из резерва переоценки в нераспределённую прибыль. Через прибыль или убыток он никогда не проходит.`,
        uz: `Qayta baholangan aktiv sotilganda foyda yoki zarar baribir tushum minus balans qiymati. Qayta baholash rezervi bu hisobga KIRMAYDI.

Aktiv ketgach, uning rezervi haqiqiy o'sishga aylanadi va kapital ichida qayta baholash rezervidan taqsimlanmagan foydaga o'tkaziladi. U hech qachon foyda yoki zarar orqali o'tmaydi.`,
      },
    },
    {
      key: {
        en: `- IAS 16 notes show the measurement basis, depreciation methods and useful lives.
- Show gross cost and accumulated depreciation at the start and end of the year.
- Show a reconciliation of carrying amount: additions, disposals, revaluations, depreciation.
- If revalued: the date, who valued it, methods used, cost-basis amount and the surplus.
- Show commitments to buy more assets.`,
        ru: `- Примечания по IAS 16 показывают базу оценки, методы амортизации и сроки использования.
- Показывайте общую стоимость и накопленную амортизацию на начало и конец года.
- Показывайте сверку балансовой стоимости: поступления, выбытия, переоценки, амортизация.
- При переоценке: дата, кто оценивал, методы, сумма по первоначальной стоимости и резерв.
- Показывайте обязательства по приобретению активов.`,
        uz: `- IAS 16 izohlari o'lchash asosi, amortizatsiya usullari va foydali muddatlarni ko'rsatadi.
- Yil boshi va oxiridagi umumiy qiymat va to'plangan amortizatsiyani ko'rsating.
- Balans qiymati solishtirishini ko'rsating: kirimlar, chiqishlar, qayta baholash, amortizatsiya.
- Qayta baholangan bo'lsa: sana, kim baholagan, usullar, dastlabki qiymat asosidagi summa va rezerv.
- Ko'proq aktiv sotib olish majburiyatlarini ko'rsating.`,
      },
      exam: {
        en: `- The reconciliation of carrying amount is often called the movements schedule or grid.
- If an employee or director did the valuation, IAS 16 allows it, but the valuer should be disclosed because objectivity may be affected.
- Disclosures are made for each class of asset, such as land and buildings or motor vehicles.`,
        ru: `- Сверку балансовой стоимости часто называют таблицей движения.
- Если оценку выполнил сотрудник или директор, IAS 16 это допускает, но оценщика нужно раскрыть, так как объективность может пострадать.
- Раскрытия делаются по каждому классу активов, например земля и здания или транспорт.`,
        uz: `- Balans qiymati solishtirishini ko'pincha harakat jadvali deb atashadi.
- Baholashni xodim yoki direktor qilgan bo'lsa, IAS 16 bunga ruxsat beradi, lekin xolislikka ta'sir qilishi mumkin bo'lgani uchun baholovchi ochib berilishi kerak.
- Ma'lumotlar har bir aktiv toifasi, masalan yer va binolar yoki transport bo'yicha beriladi.`,
      },
      heading: {
        en: 'Disclosure of non-current assets',
        ru: 'Раскрытие информации о внеоборотных активах',
        uz: 'Uzoq muddatli aktivlar bo\'yicha ma\'lumotlarni ochish',
      },
      body: {
        en: `IFRS 18 requires accounting policies to be disclosed, and IAS 16 adds specific disclosures for property, plant and equipment. The main ones are:

- the measurement bases used for the carrying amount (cost or valuation);
- the depreciation methods used, with the useful lives or rates;
- the gross amount and accumulated depreciation for each class at the start and end of the period;
- a reconciliation of the carrying amount at the start and end of the period, showing additions, assets held for sale, disposals, revaluations and depreciation;
- commitments to acquire property, plant and equipment;
- for revalued assets: the effective date, whether an independent valuer was used, the methods and assumptions, the carrying amount had the assets been held at cost, and the revaluation surplus with its movement.

The reconciliation is often presented as a grid with a column for each class of asset, such as land and buildings, plant and equipment, and motor vehicles.`,
        ru: `IFRS 18 требует раскрывать учётную политику, а IAS 16 добавляет особые раскрытия по основным средствам. Главные из них:

- базы оценки балансовой стоимости (первоначальная стоимость или оценка);
- применяемые методы амортизации со сроками использования или ставками;
- общая стоимость и накопленная амортизация по каждому классу на начало и конец периода;
- сверка балансовой стоимости на начало и конец периода с поступлениями, активами для продажи, выбытиями, переоценками и амортизацией;
- обязательства по приобретению основных средств;
- для переоценённых активов: дата вступления в силу, привлекался ли независимый оценщик, методы и допущения, балансовая стоимость при учёте по первоначальной стоимости и резерв переоценки с его движением.

Сверку часто показывают таблицей со столбцом для каждого класса активов, например земля и здания, оборудование, транспорт.`,
        uz: `IFRS 18 hisob siyosatini ochib berishni talab qiladi, IAS 16 esa asosiy vositalar bo'yicha maxsus ma'lumotlarni qo'shadi. Asosiylari:

- balans qiymati uchun ishlatilgan o'lchash asoslari (qiymat yoki baholash);
- ishlatilgan amortizatsiya usullari, foydali muddatlar yoki stavkalar bilan;
- har bir toifa bo'yicha davr boshi va oxiridagi umumiy qiymat va to'plangan amortizatsiya;
- davr boshi va oxiridagi balans qiymati solishtirishi: kirimlar, sotishga mo'ljallangan aktivlar, chiqishlar, qayta baholash va amortizatsiya;
- asosiy vositalarni sotib olish majburiyatlari;
- qayta baholangan aktivlar uchun: kuchga kirgan sana, mustaqil baholovchi jalb qilinganmi, usullar va faraz, aktivlar qiymatda yuritilganda balans qiymati hamda qayta baholash rezervi va uning harakati.

Solishtirish ko'pincha har bir aktiv toifasi, masalan yer va binolar, uskuna va transport uchun ustun bilan jadval ko'rinishida beriladi.`,
      },
      example: {
        en: `A company's grid for motor vehicles this year.
# Cost
  At the start $30,000
  Plus purchases (a new van): + $14,000
  Less disposals (the old van): - $10,000
  At the end: $34,000
# Accumulated depreciation
  At the start $12,000 + this year's charge $5,000 - on the van sold $6,000 = $11,000 at the end
= Carrying amount at the end: $34,000 - $11,000 = $23,000. There is one such column for each class of asset.`,
        ru: `Сетка компании по транспорту за этот год.
# Стоимость
  На начало $30,000
  Плюс покупки (новый фургон): + $14,000
  Минус выбытия (старый фургон): - $10,000
  На конец: $34,000
# Накопленная амортизация
  На начало $12,000 + начислено за год $5,000 - по проданному фургону $6,000 = $11,000 на конец
= Балансовая стоимость на конец: $34,000 - $11,000 = $23,000. Такая колонка есть для каждого класса активов.`,
        uz: `Kompaniyaning shu yilgi transport bo'yicha to'ri.
# Qiymat
  Boshida $30,000
  Plus xaridlar (yangi furgon): + $14,000
  Minus chiqishlar (eski furgon): - $10,000
  Oxirida: $34,000
# To'plangan amortizatsiya
  Boshida $12,000 + yil xarajati $5,000 - sotilgan furgon bo'yicha $6,000 = oxirida $11,000
= Oxiridagi balans qiymati: $34,000 - $11,000 = $23,000. Bunday ustun har bir aktiv sinfi uchun bor.`,
      },
      simple: {
        en: `The notes to the accounts explain the company's non-current assets: how they are measured (cost or valuation), the depreciation methods and useful lives, and a table showing how each class changed during the year.

The table (often called the "grid") starts with the opening figure, adds purchases and revaluations, takes off disposals and depreciation, and ends with the closing figure. Revalued assets need extra details, such as the valuation date and who did it.`,
        ru: `Примечания к отчётности объясняют внеоборотные активы: как они оценены (по стоимости или переоценке), методы амортизации и сроки, и таблицу изменений каждого класса за год.

Таблица («сетка») начинается с начальной цифры, прибавляет покупки и переоценки, вычитает выбытия и амортизацию и заканчивается конечной цифрой. Для переоценённых активов нужны доп. данные, например дата оценки и кто её делал.`,
        uz: `Hisobot izohlari uzoq muddatli aktivlarni tushuntiradi: qanday baholangan (qiymat yoki qayta baholash), amortizatsiya usullari va muddatlari, va har bir sinfning yil davomidagi o'zgarish jadvali.

Jadval («to'r») boshlang'ich sondan boshlanadi, xaridlar va qayta baholashni qo'shadi, chiqishlar va amortizatsiyani ayiradi va yakuniy son bilan tugaydi. Qayta baholangan aktivlar uchun qo'shimcha ma'lumot kerak, masalan baholash sanasi va kim baholagani.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Disposal', ru: 'Выбытие', uz: 'Chiqib ketish' },
      definition: {
        en: 'Getting rid of a non-current asset, usually by selling it or trading it in.',
        ru: 'Избавление от внеоборотного актива, обычно продажа или обмен.',
        uz: 'Uzoq muddatli aktivdan qutulish, odatda sotish yoki almashtirish orqali.',
      },
      example: {
        en: 'A cafe sells its old till for $700.',
        ru: 'Кафе продаёт старую кассу за $700.',
        uz: 'Kafe eski kassasini $700 ga sotadi.',
      },
    },
    {
      term: { en: 'Derecognition', ru: 'Списание с учёта', uz: 'Hisobdan chiqarish' },
      definition: {
        en: 'Removing an asset from the accounts when it is disposed of.',
        ru: 'Удаление актива из учёта при его выбытии.',
        uz: 'Aktiv chiqib ketganda uni hisobdan olib tashlash.',
      },
      example: {
        en: 'Selling the old van removes its cost and depreciation from the accounts.',
        ru: 'Продажа старого фургона убирает из учёта его стоимость и амортизацию.',
        uz: 'Eski furgonni sotish uning qiymati va amortizatsiyasini hisobdan olib tashlaydi.',
      },
    },
    {
      term: {
        en: 'Profit or loss on disposal',
        ru: 'Прибыль или убыток от выбытия',
        uz: 'Chiqib ketishdan foyda yoki zarar',
      },
      definition: {
        en: 'Proceeds less the carrying amount at the disposal date.',
        ru: 'Выручка минус балансовая стоимость на дату выбытия.',
        uz: 'Tushum minus chiqib ketish sanasidagi balans qiymati.',
      },
      example: {
        en: 'Sold for $700, carrying amount $600: profit on disposal $100.',
        ru: 'Продано за $700, балансовая $600: прибыль от выбытия $100.',
        uz: '$700 ga sotildi, balans qiymati $600: chiqishdan foyda $100.',
      },
    },
    {
      term: { en: 'Part exchange', ru: 'Обмен с доплатой', uz: 'Ayirboshlash' },
      definition: {
        en: 'Giving an old asset in part payment for a new one.',
        ru: 'Передача старого актива в счёт оплаты нового.',
        uz: 'Eski aktivni yangisi uchun to\'lovning bir qismi sifatida berish.',
      },
      example: {
        en: 'The dealer takes your old van as $4,500 off the price of a $14,000 new one.',
        ru: 'Дилер засчитывает ваш старый фургон как $4,500 в цену нового за $14,000.',
        uz: 'Diler eski furgoningizni $14,000 lik yangisi narxidan $4,500 deb hisobga oladi.',
      },
    },
    {
      term: { en: 'Revaluation', ru: 'Переоценка', uz: 'Qayta baholash' },
      definition: {
        en: 'Changing the carrying amount of an asset to its current fair value.',
        ru: 'Изменение балансовой стоимости актива до его текущей справедливой стоимости.',
        uz: 'Aktiv balans qiymatini joriy adolatli qiymatiga o\'zgartirish.',
      },
      example: {
        en: 'A building carried at $80,000 is valued at $150,000 and shown at $150,000.',
        ru: 'Здание с балансовой стоимостью $80,000 оценено в $150,000 и показано по $150,000.',
        uz: 'Balans qiymati $80,000 bo\'lgan bino $150,000 ga baholanib, $150,000 da ko\'rsatiladi.',
      },
    },
    {
      term: { en: 'Revaluation surplus', ru: 'Резерв переоценки', uz: 'Qayta baholash rezervi' },
      definition: {
        en: 'Unrealised gain from revaluing an asset, held in equity.',
        ru: 'Нереализованный прирост от переоценки актива, хранится в капитале.',
        uz: 'Aktivni qayta baholashdan amalga oshmagan foyda, kapitalda saqlanadi.',
      },
      example: {
        en: 'A building with a carrying amount of $80,000 is revalued to $150,000: surplus $70,000.',
        ru: 'Здание с балансовой стоимостью $80,000 переоценили до $150,000: резерв $70,000.',
        uz: 'Balans qiymati $80,000 bo\'lgan bino $150,000 ga qayta baholandi: rezerv $70,000.',
      },
    },
    {
      term: { en: 'Excess depreciation', ru: 'Избыточная амортизация', uz: 'Ortiqcha amortizatsiya' },
      definition: {
        en: 'The extra depreciation caused by a revaluation, compared with depreciation on original cost.',
        ru: 'Дополнительная амортизация из-за переоценки по сравнению с амортизацией от первоначальной стоимости.',
        uz: 'Qayta baholash tufayli dastlabki qiymatdagi amortizatsiyadan ko\'p bo\'lgan qo\'shimcha amortizatsiya.',
      },
      example: {
        en: 'New charge $3,750 - old charge $2,000 = $1,750 excess.',
        ru: 'Новая амортизация $3,750 - старая $2,000 = избыточная $1,750.',
        uz: 'Yangi amortizatsiya $3,750 - eski $2,000 = ortiqcha $1,750.',
      },
    },
    {
      term: { en: 'Retained earnings', ru: 'Нераспределённая прибыль', uz: 'Taqsimlanmagan foyda' },
      definition: {
        en: 'The part of equity that builds up the profits and losses a business has made and kept.',
        ru: 'Часть капитала, в которой копятся прибыли и убытки, заработанные и оставленные в бизнесе.',
        uz: 'Biznes topgan va o\'zida qoldirgan foyda va zararlar yig\'iladigan kapital qismi.',
      },
      example: {
        en: 'Profits kept: $6,000 at the start + $4,000 profit - $3,000 dividends = $7,000.',
        ru: 'Оставленная прибыль: $6,000 на начало + $4,000 прибыль - $3,000 дивиденды = $7,000.',
        uz: 'Qoldirilgan foyda: boshida $6,000 + $4,000 foyda - $3,000 dividend = $7,000.',
      },
    },
    {
      term: { en: 'Other comprehensive income', ru: 'Прочий совокупный доход', uz: 'Boshqa umumlashgan daromad' },
      definition: {
        en: 'Gains not recognised in profit or loss, such as the revaluation gain for the year.',
        ru: 'Доходы, не отражаемые в прибыли или убытке, например прирост от переоценки за год.',
        uz: 'Foyda yoki zararda tan olinmaydigan daromadlar, masalan yil uchun qayta baholash foydasi.',
      },
      example: {
        en: 'The $70,000 revaluation gain on the building this year.',
        ru: 'Прирост $70,000 от переоценки здания в этом году.',
        uz: 'Bu yil binoni qayta baholashdan $70,000 o\'sish.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter07;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter07.id] = chapter07;
