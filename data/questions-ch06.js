'use strict';

(function () {
  const TOPIC = 'chapter-06';
  const PREFIX = 'ch06';

  const base = (kitRef, type, text, en, ru, uz) => ({ id: `${PREFIX}-q${kitRef}`, kitRef, topicId: TOPIC, type, text, explanation: { en, ru, uz } });
  const single = (kitRef, text, options, correctIndex, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'single', text, en, ru, uz), options, correctIndex, ...extra });
  const number = (kitRef, text, correctValue, answerText, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'number', text, en, ru, uz), correctValue, answerText, ...extra });

  const questions = [
    single(171, 'A shop\'s asset register shows a total carrying amount of $62,400. Its general ledger shows asset cost of $140,000 and accumulated depreciation of $40,000. Which explanation accounts for the difference?',
      ['A land purchase of $27,600 was missed from the ledger, and the disposal of an asset (cost $18,000, accumulated depreciation $8,000) was missed from the register', 'An upward revaluation of $15,000 and a depreciation charge of $12,000 were missed from the ledger, and the disposal of an asset with carrying amount $10,000 was missed from the register', 'The disposal of an asset (cost $18,000, accumulated depreciation $8,000) was missed from the ledger, and a land purchase of $27,600 was missed from the register', 'A depreciation charge of $20,000 was missed from the register, and an upward revaluation of $12,000 was missed from the ledger'], 2,
      `The ledger shows a carrying amount of $140,000 - $40,000 = $100,000. Correct it for the missed disposal (carrying amount $18,000 - $8,000 = $10,000): $90,000. Correct the register for the missed land: $62,400 + $27,600 = $90,000. The two now agree. The other options leave the two figures different.`,
      `В книге балансовая стоимость $140,000 - $40,000 = $100,000. Скорректируем на пропущенное выбытие (балансовая стоимость $18,000 - $8,000 = $10,000): $90,000. В реестре добавим пропущенную землю: $62,400 + $27,600 = $90,000. Теперь цифры совпадают. В остальных вариантах они остаются разными.`,
      `Kitobda balans qiymati $140,000 - $40,000 = $100,000. Tushib qolgan chiqishga (balans qiymati $18,000 - $8,000 = $10,000) tuzatamiz: $90,000. Reyestrga tushib qolgan yerni qo'shamiz: $62,400 + $27,600 = $90,000. Endi ikkalasi mos. Boshqa variantlarda raqamlar farq qiladi.`),
    single(173, 'Which statement about the non-current asset register is true?',
      ['It is another name for the non-current asset account in the general ledger', 'It lists the physical assets but not their cost', 'It is a timetable of planned maintenance for engineers', 'It records the cost, date, location, depreciation and carrying amount of each asset'], 3,
      `The register is a detailed schedule about each asset. It is a record separate from the ledger and is reconciled to it, so it is not another name for the ledger account, and it holds financial information, not only a list.`,
      `Реестр — подробная таблица по каждому активу. Это отдельная запись, которую сверяют с книгой, а не другое название счёта в книге, и в нём есть финансовая информация, а не только перечень.`,
      `Reyestr har bir aktiv bo'yicha batafsil jadval. Bu kitobdan alohida yozuv bo'lib, u bilan solishtiriladi, shuning uchun kitob hisobining boshqa nomi emas, unda faqat ro'yxat emas, moliyaviy axborot ham bor.`),
    number(174, 'A company\'s plant and equipment cost account for the year to 31 December: balance b/f $800,000; 1 April purchases $120,000; 30 June disposal of plant that cost $60,000; balance c/f $860,000. Depreciation is 20% straight line, charged monthly on the exact months owned. What is the depreciation charge in profit or loss?', 172000, '$172,000',
      `Plant owned all year: 20% x ($800,000 - $60,000) = $148,000. The disposed plant, owned for 6 months: 20% x $60,000 x 6/12 = $6,000. The new plant, owned for 9 months: 20% x $120,000 x 9/12 = $18,000. Total $172,000.`,
      `Оборудование на весь год: 20% x ($800,000 - $60,000) = $148,000. Проданное оборудование, 6 месяцев: 20% x $60,000 x 6/12 = $6,000. Новое оборудование, 9 месяцев: 20% x $120,000 x 9/12 = $18,000. Всего $172,000.`,
      `Butun yil davomida bo'lgan uskuna: 20% x ($800,000 - $60,000) = $148,000. Sotilgan uskuna, 6 oy: 20% x $60,000 x 6/12 = $6,000. Yangi uskuna, 9 oy: 20% x $120,000 x 9/12 = $18,000. Jami $172,000.`),
    number(175, 'On 1 January a company bought a machine. The invoice shows: price $60,000, delivery $1,500 and a two-year breakdown warranty $900. Alterations costing $3,000 were also needed to the building so the machine could be installed. What amount should be capitalised for the machine?', 64500, '$64,500',
      `Capitalise the price ($60,000), delivery ($1,500) and the alterations needed to install it ($3,000): $64,500. The warranty is a running cost, so it is charged to profit or loss.`,
      `Капитализируются цена ($60,000), доставка ($1,500) и переделки для установки ($3,000): $64,500. Гарантия — текущие затраты, они относятся на прибыль или убыток.`,
      `Narx ($60,000), yetkazish ($1,500) va o'rnatish uchun kerak bo'lgan qayta qurish ($3,000) kapitallashtiriladi: $64,500. Kafolat joriy xarajat, u foyda yoki zararga yoziladi.`),
    number(178, 'A company bought a new press for $120,000. Installation cost $7,500. Training the staff to use it cost $3,000. Safety testing before the first job cost $2,000. What should the press be shown at in the statement of financial position, before any depreciation?', 129500, '$129,500',
      `Cost covers everything needed to bring the asset into working condition: $120,000 + $7,500 installation + $2,000 testing = $129,500. Staff training cannot be capitalised.`,
      `Стоимость включает всё необходимое, чтобы привести актив в рабочее состояние: $120,000 + $7,500 установка + $2,000 испытания = $129,500. Обучение персонала капитализировать нельзя.`,
      `Qiymat aktivni ishchi holatga keltirish uchun kerak bo'lgan hamma narsani o'z ichiga oladi: $120,000 + $7,500 o'rnatish + $2,000 sinov = $129,500. Xodimlarni o'qitishni kapitallashtirib bo'lmaydi.`),
    single(181, 'Which of the following is asset (capital) expenditure?',
      ['Redecorating the offices', 'Repairing a roof damaged in a storm', 'A computer retailer buying laptops to sell', 'Legal fees paid when buying a building'], 3,
      `Legal fees on buying a building are part of its cost. Redecorating and repairs are expenses. Laptops bought by a retailer to sell are inventory, not a non-current asset.`,
      `Юридические расходы при покупке здания входят в его стоимость. Косметический ремонт и починки — расходы. Ноутбуки, купленные магазином для продажи, — запасы, а не внеоборотный актив.`,
      `Bino sotib olishdagi yuridik xarajatlar uning qiymatiga kiradi. Qayta bezash va ta'mir — xarajat. Do'kon sotish uchun olgan noutbuklar zaxira, uzoq muddatli aktiv emas.`),
    single(184, 'Which statement best describes depreciation?',
      ['It spreads the payment for an asset over a period of years', 'It records the fall in the market value of an asset', 'It spreads the cost of an asset over its useful life', 'It builds up the money needed to replace the asset'], 2,
      `Depreciation allocates cost across the periods that benefit from the asset. It does not track market value and it does not set aside cash for a replacement.`,
      `Амортизация распределяет стоимость по периодам, которые получают выгоду от актива. Она не отслеживает рыночную стоимость и не откладывает деньги на замену.`,
      `Amortizatsiya qiymatni aktivdan foyda oladigan davrlarga taqsimlaydi. U bozor qiymatini kuzatmaydi va almashtirish uchun pul ajratmaydi.`),
    single(186, 'When is the reducing balance method more appropriate than straight line?',
      ['When the asset has no residual value', 'When the useful life cannot be estimated', 'When the asset is expected to give more benefit in its early years than later', 'When the asset will be replaced after a short period'], 2,
      `Reducing balance charges more in the early years and less later. It therefore suits assets, such as vehicles, that give most of their service early and less as they age.`,
      `При методе уменьшаемого остатка в первые годы начисляется больше, потом меньше. Он подходит активам, например транспорту, которые дают больше отдачи в начале и меньше с возрастом.`,
      `Kamayuvchi qoldiq usulida dastlabki yillarda ko'proq, keyin kamroq hisoblanadi. U transport kabi dastlab ko'proq, yosh o'tgan sari kamroq xizmat beradigan aktivlarga mos.`),
    number(189, 'A business bought a printing machine for $30,000 on 1 July 20X7, expecting a useful life of ten years and a residual value of $3,000. On 1 July 20X8 it revised the estimates: a remaining useful life of six years and no residual value. What is the depreciation charge for the year ended 30 June 20X9?', 4550, '$4,550',
      `Original charge: ($30,000 - $3,000) / 10 = $2,700 a year. After one year the carrying amount is $30,000 - $2,700 = $27,300. The new charge is $27,300 / 6 years = $4,550. The estimate changes before the year's depreciation is charged.`,
      `Первоначальное начисление: ($30,000 - $3,000) / 10 = $2,700 в год. Через год балансовая стоимость $30,000 - $2,700 = $27,300. Новое начисление: $27,300 / 6 лет = $4,550. Оценка меняется до начисления амортизации за год.`,
      `Dastlabki summa: ($30,000 - $3,000) / 10 = yiliga $2,700. Bir yildan keyin balans qiymati $30,000 - $2,700 = $27,300. Yangi summa: $27,300 / 6 yil = $4,550. Baho yil amortizatsiyasi hisoblanishidan oldin o'zgaradi.`),
    number(201, 'On 1 January 20X8 a company bought a property for $900,000. The same day it paid legal costs of $9,000, architect\'s fees of $12,000, an annual maintenance contract of $7,500 and $30,000 for alterations. The property is depreciated over 25 years on a straight-line basis. What is its carrying amount at 31 December 20X8?', 912960, '$912,960',
      `Capitalise the price and the legal, architect and alteration costs: $900,000 + $9,000 + $12,000 + $30,000 = $951,000. The maintenance contract is an expense. Depreciation is $951,000 / 25 = $38,040. Carrying amount: $951,000 - $38,040 = $912,960.`,
      `Капитализируем цену, юридические расходы, услуги архитектора и переделки: $900,000 + $9,000 + $12,000 + $30,000 = $951,000. Договор обслуживания — расход. Амортизация $951,000 / 25 = $38,040. Балансовая стоимость: $951,000 - $38,040 = $912,960.`,
      `Narx, yuridik xizmat, arxitektor va qayta qurish kapitallashtiriladi: $900,000 + $9,000 + $12,000 + $30,000 = $951,000. Xizmat shartnomasi — xarajat. Amortizatsiya $951,000 / 25 = $38,040. Balans qiymati: $951,000 - $38,040 = $912,960.`),
    single(202, 'Motor expenses of $400 were debited to the motor vehicles cost account and correctly recorded in the cash book. Depreciation at 25% straight line, with a full year in the year of purchase, was charged on the wrongly increased balance. Which journals correct this? 1: Dr Motor expenses $400, Cr Motor vehicles cost $400. 2: Dr Motor vehicles cost $400, Cr Motor expenses $400. 3: Dr Depreciation charge $100, Cr Accumulated depreciation $100. 4: Dr Accumulated depreciation $100, Cr Depreciation charge $100.',
      ['1 and 3', '2 and 4', '1 and 4', '2 and 3'], 2,
      `Journal 1 moves the $400 out of the asset and into expenses. Depreciation of 25% x $400 = $100 was charged on it by mistake, so journal 4 reverses that charge. Journals 2 and 3 would repeat the error.`,
      `Проводка 1 переносит $400 из актива в расходы. Амортизация 25% x $400 = $100 была начислена на них ошибочно, поэтому проводка 4 сторнирует начисление. Проводки 2 и 3 повторили бы ошибку.`,
      `1-yozuv $400 ni aktivdan xarajatga o'tkazadi. Unga xato ravishda 25% x $400 = $100 amortizatsiya hisoblangan, shuning uchun 4-yozuv uni qaytaradi. 2 va 3-yozuvlar xatoni takrorlardi.`),
    single(203, 'A machine costing $36,000 was bought on 1 July 20X2 with a ten-year life, depreciated straight line. On 1 July 20X5 the total useful life was reassessed as 13 years. What is the depreciation charge for the year ended 30 June 20X6?',
      ['$1,938', '$2,520', '$2,769', '$3,600'], 1,
      `After three years of $3,600 the carrying amount is $36,000 - $10,800 = $25,200. The new total life is 13 years, so 10 remain. The charge is $25,200 / 10 = $2,520. Dividing the carrying amount by 13 would give $1,938, and dividing the original cost by 13 gives $2,769.`,
      `После трёх лет по $3,600 балансовая стоимость $36,000 - $10,800 = $25,200. Новый общий срок 13 лет, значит осталось 10. Начисление $25,200 / 10 = $2,520. Деление балансовой стоимости на 13 дало бы $1,938, а деление первоначальной стоимости на 13 — $2,769.`,
      `Uch yil $3,600 dan keyin balans qiymati $36,000 - $10,800 = $25,200. Yangi umumiy muddat 13 yil, demak 10 yil qoldi. Summa $25,200 / 10 = $2,520. Balans qiymatini 13 ga bo'lish $1,938 berardi, dastlabki qiymatni 13 ga bo'lish esa $2,769.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
