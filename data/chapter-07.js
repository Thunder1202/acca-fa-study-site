'use strict';

const chapter07 = {
  id: 'chapter-07',
  titles: {
    en: 'Non-current assets: disposal and revaluation',
    ru: 'Внеоборотные активы: выбытие и переоценка',
    uz: 'Uzoq muddatli aktivlar: chiqib ketish va qayta baholash',
  },
  objectives: [
    { en: 'Record the disposal of assets, including part exchange', ru: 'Отражать выбытие активов, включая обмен с доплатой', uz: 'Aktivlarning chiqib ketishini, jumladan ayirboshlashni qayd etish' },
    { en: 'Calculate the profit or loss on disposal', ru: 'Рассчитывать прибыль или убыток от выбытия', uz: 'Chiqib ketishdan foyda yoki zararni hisoblash' },
    { en: 'Record the revaluation of a non-current asset', ru: 'Отражать переоценку внеоборотного актива', uz: 'Uzoq muddatli aktivni qayta baholashni qayd etish' },
    { en: 'Calculate the profit or loss on disposal of a revalued asset', ru: 'Рассчитывать прибыль или убыток от выбытия переоценённого актива', uz: 'Qayta baholangan aktiv chiqib ketishidan foyda yoki zararni hisoblash' },
    { en: 'Show how non-current assets are disclosed', ru: 'Показывать, как раскрываются внеоборотные активы', uz: 'Uzoq muddatli aktivlar qanday ochib berilishini ko\'rsatish' },
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
- To find a revised total carrying amount after a disposal, deduct the carrying amount of the asset sold, which is proceeds less profit (or plus loss).`,
        ru: `- Прибыль или убыток от выбытия идёт в прибыль или убыток за год. Это не выручка от продаж.
- При продаже актива уберите его стоимость со счёта актива и его накопленную амортизацию со счёта накопленной амортизации.
- Чтобы найти новую общую балансовую стоимость после выбытия, вычтите балансовую стоимость проданного актива: выручка минус прибыль (или плюс убыток).`,
        uz: `- Chiqib ketishdan foyda yoki zarar yilning foyda yoki zarariga o'tadi. Bu savdodan tushum emas.
- Aktiv sotilganda uning qiymatini aktiv hisobidan, to'plangan amortizatsiyasini to'plangan amortizatsiya hisobidan olib tashlang.
- Chiqib ketgandan keyingi yangi umumiy balans qiymatini topish uchun sotilgan aktivning balans qiymatini ayiring: tushum minus foyda (yoki plus zarar).`,
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
        en: `Madina sells an old till for $700. It cost $1,500 and has accumulated depreciation of $900, so its carrying amount is $600. The disposals account shows: Dr Cost $1,500; Cr Accumulated depreciation $900; Cr Bank $700; the balancing figure is a $100 profit on disposal. The same result comes from $700 proceeds less $600 carrying amount.`,
        ru: `Мадина продаёт старую кассу за $700. Она стоила $1,500, накопленная амортизация $900, значит, балансовая стоимость $600. Счёт выбытия: Дт Стоимость $1,500; Кт Накопленная амортизация $900; Кт Банк $700; балансирующая цифра — прибыль $100. Тот же результат даёт выручка $700 минус балансовая стоимость $600.`,
        uz: `Madina eski kassani $700 ga sotadi. U $1,500 turgan va to'plangan amortizatsiyasi $900, demak balans qiymati $600. Chiqib ketish hisobi: Dt Qiymat $1,500; Kt To'plangan amortizatsiya $900; Kt Bank $700; balanslovchi summa — $100 foyda. Xuddi shu natijani $700 tushum minus $600 balans qiymati beradi.`,
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
- The new asset's cost is the allowance plus the cash paid, not the old asset's carrying amount.`,
        ru: `- Trade-in — это обмен с доплатой, поэтому зачёт — выручка от продажи старого актива.
- Помните правила политики амортизации: если в год продажи амортизация не начисляется, не начисляйте её на старый актив в этом году.
- Стоимость нового актива — это зачёт плюс уплаченные деньги, а не балансовая стоимость старого.`,
        uz: `- Trade-in ayirboshlash, shuning uchun hisobga olingan summa eski aktivning sotuv tushumi.
- Amortizatsiya siyosatini eslang: sotuv yilida amortizatsiya hisoblanmasa, eski aktivga shu yili hisoblamang.
- Yangi aktiv qiymati — hisobga olingan summa plus to'langan pul, eski aktivning balans qiymati emas.`,
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
        en: `Madina trades in her old van. It cost $10,000 and has accumulated depreciation of $6,000, so its carrying amount is $4,000. The dealer allows $4,500 and the new van costs $14,000, so she pays $9,500 in cash. Dr New van $4,500 and Cr Disposals $4,500 for the allowance; Dr New van $9,500 and Cr Bank $9,500 for the cash. The disposals account shows a $500 profit ($4,500 - $4,000).`,
        ru: `Мадина сдаёт старый фургон в зачёт. Он стоил $10,000, накопленная амортизация $6,000, значит, балансовая стоимость $4,000. Дилер зачитывает $4,500, а новый фургон стоит $14,000, поэтому она доплачивает $9,500. Дт Новый фургон $4,500 и Кт Выбытие $4,500 за зачёт; Дт Новый фургон $9,500 и Кт Банк $9,500 за деньги. Счёт выбытия показывает прибыль $500 ($4,500 - $4,000).`,
        uz: `Madina eski furgonini ayirboshlaydi. U $10,000 turgan, to'plangan amortizatsiyasi $6,000, demak balans qiymati $4,000. Diler $4,500 hisobga oladi, yangi furgon $14,000 turadi, shuning uchun u $9,500 naqd to'laydi. Hisobga olingan summa uchun Dt Yangi furgon $4,500 va Kt Chiqib ketish $4,500; pul uchun Dt Yangi furgon $9,500 va Kt Bank $9,500. Chiqib ketish hisobi $500 foydani ko'rsatadi ($4,500 - $4,000).`,
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
        en: `Once Madina's Mart is a company it owns its shop building, bought for $100,000 and depreciated at 2% a year. After ten years the accumulated depreciation is $20,000, so the carrying amount is $80,000. A valuer says the building is now worth $150,000. The surplus is $150,000 - $80,000 = $70,000. Dr Building $50,000, Dr Accumulated depreciation $20,000, Cr Revaluation surplus $70,000. The building now stands at $150,000.`,
        ru: `Когда Madina's Mart становится компанией, ей принадлежит здание магазина, купленное за $100,000 с амортизацией 2% в год. Через десять лет накопленная амортизация $20,000, значит, балансовая стоимость $80,000. Оценщик говорит, что здание теперь стоит $150,000. Резерв: $150,000 - $80,000 = $70,000. Дт Здание $50,000, Дт Накопленная амортизация $20,000, Кт Резерв переоценки $70,000. Теперь здание числится по $150,000.`,
        uz: `Madina's Mart kompaniyaga aylangach, $100,000 ga sotib olingan va yiliga 2% amortizatsiyalanadigan do'kon binosiga egalik qiladi. O'n yildan keyin to'plangan amortizatsiya $20,000, demak balans qiymati $80,000. Baholovchi bino endi $150,000 turishini aytadi. Rezerv: $150,000 - $80,000 = $70,000. Dt Bino $50,000, Dt To'plangan amortizatsiya $20,000, Kt Qayta baholash rezervi $70,000. Bino endi $150,000 da turibdi.`,
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
        en: `The revalued building is $150,000 with 40 years of life remaining. New depreciation is $150,000 / 40 = $3,750 a year, against $2,000 before. The excess is $1,750. Under Madina's Mart's policy it makes the transfer every year: Dr Revaluation surplus $1,750, Cr Retained earnings $1,750. After the first year the surplus is $70,000 - $1,750 = $68,250.`,
        ru: `Переоценённое здание стоит $150,000, оставшийся срок 40 лет. Новая амортизация: $150,000 / 40 = $3,750 в год против $2,000 раньше. Превышение $1,750. По политике Madina's Mart она делает перенос каждый год: Дт Резерв переоценки $1,750, Кт Нераспределённая прибыль $1,750. После первого года резерв: $70,000 - $1,750 = $68,250.`,
        uz: `Qayta baholangan bino $150,000, 40 yil qolgan. Yangi amortizatsiya: $150,000 / 40 = yiliga $3,750, avval $2,000 edi. Ortiqcha $1,750. Madina's Mart siyosatiga ko'ra u o'tkazmani har yili qiladi: Dt Qayta baholash rezervi $1,750, Kt Taqsimlanmagan foyda $1,750. Birinchi yildan keyin rezerv: $70,000 - $1,750 = $68,250.`,
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
        en: `A year later Madina's Mart sells the building for $160,000. After the first year its carrying amount is $150,000 - $3,750 = $146,250, and the surplus is $68,250. Profit on disposal is $160,000 - $146,250 = $13,750, which goes to profit or loss. Separately, Dr Revaluation surplus $68,250, Cr Retained earnings $68,250 within equity.`,
        ru: `Через год Madina's Mart продаёт здание за $160,000. После первого года его балансовая стоимость $150,000 - $3,750 = $146,250, резерв $68,250. Прибыль от выбытия: $160,000 - $146,250 = $13,750, она идёт в прибыль или убыток. Отдельно внутри капитала: Дт Резерв переоценки $68,250, Кт Нераспределённая прибыль $68,250.`,
        uz: `Bir yildan keyin Madina's Mart binoni $160,000 ga sotadi. Birinchi yildan keyin uning balans qiymati $150,000 - $3,750 = $146,250, rezerv $68,250. Chiqib ketishdan foyda: $160,000 - $146,250 = $13,750, u foyda yoki zararga o'tadi. Alohida, kapital ichida: Dt Qayta baholash rezervi $68,250, Kt Taqsimlanmagan foyda $68,250.`,
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
        en: `In Madina's Mart's notes, the grid has a column for land and buildings, one for fixtures and fittings, and one for motor vehicles. Each column starts with the cost at the start of the year, adds purchases such as the new van, deducts disposals such as the old van, and ends with the cost at the end. A second block does the same for accumulated depreciation, so that the carrying amounts at each end can be read off.`,
        ru: `В примечаниях Madina's Mart в таблице есть столбец для земли и зданий, для оборудования и для транспорта. Каждый столбец начинается со стоимости на начало года, добавляет покупки, например новый фургон, вычитает выбытия, например старый фургон, и заканчивается стоимостью на конец. Второй блок делает то же для накопленной амортизации, чтобы можно было считать балансовую стоимость на обоих концах.`,
        uz: `Madina's Mart izohlarida jadvalda yer va binolar, jihozlar va transport uchun ustunlar bor. Har bir ustun yil boshidagi qiymatdan boshlanadi, yangi furgon kabi xaridlarni qo'shadi, eski furgon kabi chiqishlarni ayiradi va oxirgi qiymat bilan tugaydi. Ikkinchi blok to'plangan amortizatsiya uchun xuddi shuni qiladi, shunda ikki chetdagi balans qiymatlarini o'qish mumkin.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Derecognition', ru: 'Списание с учёта', uz: 'Hisobdan chiqarish' }, definition: { en: 'Removing an asset from the accounts when it is disposed of.', ru: 'Удаление актива из учёта при его выбытии.', uz: 'Aktiv chiqib ketganda uni hisobdan olib tashlash.' } },
    { term: { en: 'Profit or loss on disposal', ru: 'Прибыль или убыток от выбытия', uz: 'Chiqib ketishdan foyda yoki zarar' }, definition: { en: 'Proceeds less the carrying amount at the disposal date.', ru: 'Выручка минус балансовая стоимость на дату выбытия.', uz: 'Tushum minus chiqib ketish sanasidagi balans qiymati.' } },
    { term: { en: 'Part exchange', ru: 'Обмен с доплатой', uz: 'Ayirboshlash' }, definition: { en: 'Giving an old asset in part payment for a new one.', ru: 'Передача старого актива в счёт оплаты нового.', uz: 'Eski aktivni yangisi uchun to\'lovning bir qismi sifatida berish.' } },
    { term: { en: 'Revaluation surplus', ru: 'Резерв переоценки', uz: 'Qayta baholash rezervi' }, definition: { en: 'Unrealised gain from revaluing an asset, held in equity.', ru: 'Нереализованный прирост от переоценки актива, хранится в капитале.', uz: 'Aktivni qayta baholashdan amalga oshmagan foyda, kapitalda saqlanadi.' } },
    { term: { en: 'Excess depreciation', ru: 'Избыточная амортизация', uz: 'Ortiqcha amortizatsiya' }, definition: { en: 'The extra depreciation caused by a revaluation, compared with depreciation on original cost.', ru: 'Дополнительная амортизация из-за переоценки по сравнению с амортизацией от первоначальной стоимости.', uz: 'Qayta baholash tufayli dastlabki qiymatdagi amortizatsiyadan ko\'p bo\'lgan qo\'shimcha amortizatsiya.' } },
    { term: { en: 'Retained earnings', ru: 'Нераспределённая прибыль', uz: 'Taqsimlanmagan foyda' }, definition: { en: 'The part of equity that builds up the profits and losses a business has made and kept.', ru: 'Часть капитала, в которой копятся прибыли и убытки, заработанные и оставленные в бизнесе.', uz: 'Biznes topgan va o\'zida qoldirgan foyda va zararlar yig\'iladigan kapital qismi.' } },
    { term: { en: 'Other comprehensive income', ru: 'Прочий совокупный доход', uz: 'Boshqa umumlashgan daromad' }, definition: { en: 'Gains not recognised in profit or loss, such as the revaluation gain for the year.', ru: 'Доходы, не отражаемые в прибыли или убытке, например прирост от переоценки за год.', uz: 'Foyda yoki zararda tan olinmaydigan daromadlar, masalan yil uchun qayta baholash foydasi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter07;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter07.id] = chapter07;
