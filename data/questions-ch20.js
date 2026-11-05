'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-20';
  const questions = [
    {
      id: 'ch20-q478',
      kitRef: 478,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Pine bought 75% of Spruce\'s equity shares on 1 April 20X8. During the year Pine sold goods to Spruce for $30 million that had cost Pine $21 million. At the year end Spruce still held one third of them. What is the unrealised profit adjustment?',
      explanation: {
        en: `Find the profit on the whole sale, then keep only the part in goods still held.
# Step 1: Profit on the sale
  $30m - cost $21m = $9m
# Step 2: Part still in inventory
  One third: $9m x 1/3 = $3m
= Answer: $3 million
! Common trap: $9m is the profit on ALL the goods; $6m is the part already sold to outsiders, which is realised.`,
        ru: `Найдём прибыль по всей продаже и оставим только часть в непроданном товаре.
# Шаг 1: Прибыль по продаже
  $30m - себестоимость $21m = $9m
# Шаг 2: Часть, оставшаяся в запасах
  Треть: $9m x 1/3 = $3m
= Ответ: $3 млн
! Частая ошибка: $9m — прибыль по ВСЕМУ товару; $6m — часть, уже проданная внешним покупателям, она реализована.`,
        uz: `Butun sotuvdagi foydani topib, faqat hali saqlanayotgan tovardagi qismini qoldiramiz.
# 1-qadam: Sotuvdagi foyda
  $30m - tannarx $21m = $9m
# 2-qadam: Zaxirada qolgan qism
  Uchdan biri: $9m x 1/3 = $3m
= Javob: $3 mln
! Ko'p uchraydigan xato: $9m BARCHA tovardagi foyda; $6m tashqi mijozlarga sotilgan qism, u amalga oshgan.`,
      },
      options: ['$3 million', '$9 million', '$6 million', '$10 million'],
      correctIndex: 0,
      table: {
        head: ['Year ended 31 March 20X9', 'Pine $000', 'Spruce $000'],
        rows: [
          ['Revenue', '150,000', '60,000'],
          ['Cost of sales', '(105,000)', '(42,000)'],
          ['Gross profit', '45,000', '18,000'],
          ['Operating expenses', '(15,000)', '(6,000)'],
          ['Profit before tax', '30,000', '12,000'],
          ['Income tax', '(7,500)', '(2,400)'],
          ['Profit for the year', '22,500', '9,600'],
        ],
      },
    },
    {
      id: 'ch20-q479',
      kitRef: 479,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Pine bought 75% of Spruce\'s equity shares on 1 April 20X8. During the year Pine sold goods to Spruce for $30 million that had cost Pine $21 million. At the year end Spruce still held one third of them. What profit is attributable to the non-controlling interest?',
      explanation: {
        en: `NCI share = NCI % x the subsidiary's profit AFTER tax. Who made the sale matters.
# Step 1: NCI %
  100% - 75% = 25%
# Step 2: Who sold the goods?
  Pine (the parent). So the PURP sits in Pine's profit, and the NCI bears none of it
# Step 3: NCI share
  25% x Spruce's profit for the year $9.6m = $2.4m
= Answer: $2.4 million
! Common trap: $1.65m deducts the PURP from Spruce's profit (only right if Spruce sold); $3.0m uses profit before tax; $7.2m uses 75%.`,
        ru: `Доля NCI = % NCI x прибыль дочерней ПОСЛЕ налога. Важно, кто продавал.
# Шаг 1: % NCI
  100% - 75% = 25%
# Шаг 2: Кто продавал товар?
  Pine (материнская). PURP сидит в прибыли Pine, NCI её не несёт
# Шаг 3: Доля NCI
  25% x прибыль Spruce за год $9.6m = $2.4m
= Ответ: $2.4 млн
! Частая ошибка: $1.65m вычитает PURP из прибыли Spruce (верно, только если продавала Spruce); $3.0m берёт прибыль до налога; $7.2m берёт 75%.`,
        uz: `NCI ulushi = NCI % x sho'baning soliqDAN KEYINGI foydasi. Kim sotgani muhim.
# 1-qadam: NCI %
  100% - 75% = 25%
# 2-qadam: Tovarni kim sotgan?
  Pine (bosh kompaniya). PURP Pine foydasida, NCI uni ko'tarmaydi
# 3-qadam: NCI ulushi
  25% x Spruce yil foydasi $9.6m = $2.4m
= Javob: $2.4 mln
! Ko'p uchraydigan xato: $1.65m PURP ni Spruce foydasidan ayiradi (faqat Spruce sotganda to'g'ri); $3.0m soliqdan oldingi foydani oladi; $7.2m 75% ni oladi.`,
      },
      options: ['$2.4 million', '$1.65 million', '$7.2 million', '$3.0 million'],
      correctIndex: 0,
      table: {
        head: ['Year ended 31 March 20X9', 'Pine $000', 'Spruce $000'],
        rows: [
          ['Revenue', '150,000', '60,000'],
          ['Cost of sales', '(105,000)', '(42,000)'],
          ['Gross profit', '45,000', '18,000'],
          ['Operating expenses', '(15,000)', '(6,000)'],
          ['Profit before tax', '30,000', '12,000'],
          ['Income tax', '(7,500)', '(2,400)'],
          ['Profit for the year', '22,500', '9,600'],
        ],
      },
    },
    {
      id: 'ch20-q480',
      kitRef: 480,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Pine bought 75% of Spruce\'s equity shares on 1 April 20X8. During the year Pine sold goods to Spruce for $30 million that had cost Pine $21 million. At the year end Spruce still held one third of them. What are consolidated revenue and cost of sales?',
      explanation: {
        en: `Add both in full, cancel the intra-group sale from both lines, then add the PURP to cost of sales.
# Revenue
  $150m + $60m - intra-group $30m = $180m
# Cost of sales
  $105m + $42m - intra-group $30m + PURP $3m = $120m
= Answer: revenue $180m; cost of sales $120m
! Common trap: $114m subtracts the PURP instead of adding it; $147m forgets to cancel the $30m; $210m/$150m cancels nothing.`,
        ru: `Складываем обе полностью, исключаем внутригрупповую продажу из обеих строк, затем прибавляем PURP к себестоимости.
# Выручка
  $150m + $60m - внутригрупповая $30m = $180m
# Себестоимость
  $105m + $42m - внутригрупповая $30m + PURP $3m = $120m
= Ответ: выручка $180m; себестоимость $120m
! Частая ошибка: $114m вычитает PURP вместо прибавления; $147m забывает исключить $30m; $210m/$150m ничего не исключает.`,
        uz: `Ikkalasini to'liq qo'shib, guruh ichidagi sotuvni ikkala qatordan chiqaramiz, keyin PURP ni tannarxga qo'shamiz.
# Tushum
  $150m + $60m - guruh ichidagi $30m = $180m
# Tannarx
  $105m + $42m - guruh ichidagi $30m + PURP $3m = $120m
= Javob: tushum $180m; tannarx $120m
! Ko'p uchraydigan xato: $114m PURP ni qo'shish o'rniga ayiradi; $147m $30m ni chiqarishni unutadi; $210m/$150m hech narsani chiqarmaydi.`,
      },
      options: [
        'Revenue $180m; cost of sales $120m',
        'Revenue $210m; cost of sales $150m',
        'Revenue $180m; cost of sales $114m',
        'Revenue $180m; cost of sales $147m',
      ],
      correctIndex: 0,
      table: {
        head: ['Year ended 31 March 20X9', 'Pine $000', 'Spruce $000'],
        rows: [
          ['Revenue', '150,000', '60,000'],
          ['Cost of sales', '(105,000)', '(42,000)'],
          ['Gross profit', '45,000', '18,000'],
          ['Operating expenses', '(15,000)', '(6,000)'],
          ['Profit before tax', '30,000', '12,000'],
          ['Income tax', '(7,500)', '(2,400)'],
          ['Profit for the year', '22,500', '9,600'],
        ],
      },
    },
    {
      id: 'ch20-q483',
      kitRef: 483,
      topicId: 'chapter-20',
      type: 'single',
      text: 'An associate is an entity over which the investor has:',
      explanation: {
        en: `An associate is defined by SIGNIFICANT INFLUENCE.
- Control: that makes it a SUBSIDIARY. WRONG.
- Significant influence: a say in policy without control. RIGHT.
- No influence at all: that is a trade investment. WRONG.
- At least 50% of the votes: normally control. WRONG.
= Answer: significant influence`,
        ru: `Ассоциированную компанию определяет ЗНАЧИТЕЛЬНОЕ ВЛИЯНИЕ.
- Контроль: это ДОЧЕРНЯЯ. НЕВЕРНО.
- Значительное влияние: голос в политике без контроля. ВЕРНО.
- Никакого влияния: это простое вложение. НЕВЕРНО.
- Не менее 50% голосов: обычно контроль. НЕВЕРНО.
= Ответ: значительное влияние`,
        uz: `Assotsiatsiyalangan kompaniyani SEZILARLI TA'SIR belgilaydi.
- Nazorat: bu SHO'BA. NOTO'G'RI.
- Sezilarli ta'sir: nazoratsiz siyosatda ovoz. TO'G'RI.
- Hech qanday ta'sir yo'q: bu oddiy sarmoya. NOTO'G'RI.
- Ovozlarning kamida 50% i: odatda nazorat. NOTO'G'RI.
= Javob: sezilarli ta'sir`,
      },
      options: [
        'Control',
        'Significant influence',
        'No influence at all',
        'A holding of at least 50% of the voting shares',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch20-q485',
      kitRef: 485,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Which of these would normally indicate that one entity has significant influence over another?',
      explanation: {
        en: `Significant influence = a real say in decisions, but not control.
- Appointing a MAJORITY of the board: that is control. WRONG.
- Appointing at least one board member: a seat at the table, so significant influence. RIGHT.
- Asking for a director: asking is not the same as being able to appoint. WRONG.
- Sending policy requests: no real say. WRONG.
= Answer: the ability to appoint at least one member of its board`,
        ru: `Значительное влияние = реальный голос в решениях, но не контроль.
- Назначение БОЛЬШИНСТВА совета: это контроль. НЕВЕРНО.
- Назначение хотя бы одного члена совета: место за столом, значит значительное влияние. ВЕРНО.
- Просьба назначить директора: просить — не то же, что назначать. НЕВЕРНО.
- Отправка запросов о политике: реального голоса нет. НЕВЕРНО.
= Ответ: возможность назначить хотя бы одного члена совета`,
        uz: `Sezilarli ta'sir = qarorlarda haqiqiy ovoz, lekin nazorat emas.
- Kengashning KO'PCHILIGINI tayinlash: bu nazorat. NOTO'G'RI.
- Kamida bitta kengash a'zosini tayinlash: stolda o'rin, demak sezilarli ta'sir. TO'G'RI.
- Direktor tayinlashni so'rash: so'rash tayinlay olish emas. NOTO'G'RI.
- Siyosat haqida so'rov yuborish: haqiqiy ovoz yo'q. NOTO'G'RI.
= Javob: kengashning kamida bitta a'zosini tayinlash qobiliyati`,
      },
      options: [
        'The ability to appoint a majority of its board of directors',
        'The ability to appoint at least one member of its board of directors',
        'The ability to ask for a director to be appointed to its board',
        'The ability to send requests about policy to its board',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch20-q488',
      kitRef: 488,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Which shareholding would normally indicate that one entity has significant influence over another?',
      explanation: {
        en: `Significant influence is presumed with 20% to 50% of the votes.
- Some shares: too vague. WRONG.
- Up to 20%: usually a trade investment. WRONG.
- More than 50%: normally control. WRONG.
- Between 20% and 50%: significant influence. RIGHT.
= Answer: holding between 20% and 50% of its equity shares`,
        ru: `Значительное влияние предполагается при 20%–50% голосов.
- Часть акций: слишком расплывчато. НЕВЕРНО.
- До 20%: обычно простое вложение. НЕВЕРНО.
- Более 50%: обычно контроль. НЕВЕРНО.
- От 20% до 50%: значительное влияние. ВЕРНО.
= Ответ: владение от 20% до 50% обыкновенных акций`,
        uz: `Sezilarli ta'sir ovozlarning 20%–50% ida taxmin qilinadi.
- Ba'zi aksiyalar: juda noaniq. NOTO'G'RI.
- 20% gacha: odatda oddiy sarmoya. NOTO'G'RI.
- 50% dan ko'p: odatda nazorat. NOTO'G'RI.
- 20% dan 50% gacha: sezilarli ta'sir. TO'G'RI.
= Javob: oddiy aksiyalarning 20% dan 50% gachasiga egalik`,
      },
      options: [
        'Holding some of its equity shares',
        'Holding up to 20% of its equity shares',
        'Holding more than 50% of its equity shares',
        'Holding between 20% and 50% of its equity shares',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch20-q491',
      kitRef: 491,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Entity X bought 70% of entity Z on 1 May 20X3. For the year ended 31 December 20X3, X had revenue of $3 million and Z $2.4 million, earned evenly. After the acquisition X sold goods to Z for $0.2 million. What is group revenue?',
      explanation: {
        en: `Include Z only from 1 May, then cancel the intra-group sale.
# Step 1: Months in the group
  May to December: 8 months
# Step 2: Z's revenue to include
  $2.4m x 8/12 = $1.6m
# Step 3: Group revenue
  $3m + $1.6m - intra-group $0.2m = $4.4m
= Answer: $4.4 million
! Common trap: $5.2m includes all of Z's year; $4.6m forgets to cancel the $0.2m.`,
        ru: `Включаем Z только с 1 мая, затем исключаем внутригрупповую продажу.
# Шаг 1: Месяцы в группе
  Май–декабрь: 8 месяцев
# Шаг 2: Выручка Z к включению
  $2.4m x 8/12 = $1.6m
# Шаг 3: Выручка группы
  $3m + $1.6m - внутригрупповая $0.2m = $4.4m
= Ответ: $4.4 млн
! Частая ошибка: $5.2m включает весь год Z; $4.6m забывает исключить $0.2m.`,
        uz: `Z ni faqat 1 maydan kiritamiz, keyin guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  May–dekabr: 8 oy
# 2-qadam: Kiritiladigan Z tushumi
  $2.4m x 8/12 = $1.6m
# 3-qadam: Guruh tushumi
  $3m + $1.6m - guruh ichidagi $0.2m = $4.4m
= Javob: $4.4 mln
! Ko'p uchraydigan xato: $5.2m Z ning butun yilini kiritadi; $4.6m $0.2m ni chiqarishni unutadi.`,
      },
      options: ['$4.4 million', '$5.2 million', '$3.6 million', '$4.6 million'],
      correctIndex: 0,
    },
    {
      id: 'ch20-q492',
      kitRef: 492,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Entity T bought 80% of entity S on 1 October 20X6. For the year ended 30 June 20X7, T had revenue of $8 million and S $4 million, earned evenly. After the acquisition S sold goods to T for $0.6 million. What is group revenue?',
      explanation: {
        en: `Include S only from 1 October, then cancel the intra-group sale.
# Step 1: Months in the group
  October to June: 9 months
# Step 2: S's revenue to include
  $4m x 9/12 = $3m
# Step 3: Group revenue
  $8m + $3m - intra-group $0.6m = $10.4m
  (It does not matter that S was the seller: the full sale is removed)
= Answer: $10.4 million
! Common trap: $11.4m includes all of S's year; $11.0m forgets to cancel the $0.6m.`,
        ru: `Включаем S только с 1 октября, затем исключаем внутригрупповую продажу.
# Шаг 1: Месяцы в группе
  Октябрь–июнь: 9 месяцев
# Шаг 2: Выручка S к включению
  $4m x 9/12 = $3m
# Шаг 3: Выручка группы
  $8m + $3m - внутригрупповая $0.6m = $10.4m
  (Не важно, что продавала S: исключается вся продажа)
= Ответ: $10.4 млн
! Частая ошибка: $11.4m включает весь год S; $11.0m забывает исключить $0.6m.`,
        uz: `S ni faqat 1 oktyabrdan kiritamiz, keyin guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  Oktyabr–iyun: 9 oy
# 2-qadam: Kiritiladigan S tushumi
  $4m x 9/12 = $3m
# 3-qadam: Guruh tushumi
  $8m + $3m - guruh ichidagi $0.6m = $10.4m
  (S sotgani muhim emas: butun sotuv chiqariladi)
= Javob: $10.4 mln
! Ko'p uchraydigan xato: $11.4m S ning butun yilini kiritadi; $11.0m $0.6m ni chiqarishni unutadi.`,
      },
      options: ['$10.4 million', '$11.4 million', '$8.4 million', '$11.0 million'],
      correctIndex: 0,
    },
    {
      id: 'ch20-q493',
      kitRef: 493,
      topicId: 'chapter-20',
      type: 'single',
      text: 'Entity F bought 80% of entity G on 1 October 20X6. For the year ended 31 March 20X7, cost of sales was $12 million for F and $6 million for G, spread evenly. After the acquisition F sold goods to G for $2.4 million at a mark-up of 20% on cost. Half of them were still in G\'s inventory at the year end. What is group cost of sales?',
      explanation: {
        en: `Time-apportion G, cancel the intra-group sale, then add the PURP.
# Step 1: G's cost of sales since 1 October
  6 months: $6m x 6/12 = $3m
# Step 2: PURP (mark-up 20%, so the price is 120% of cost)
  Profit in the sale: $2.4m x 20/120 = $0.4m
  Half still held: $0.4m x 1/2 = $0.2m
# Step 3: Group cost of sales
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Answer: $12.80 million
! Common trap: $12.84m treats 20% as a margin; $12.40m subtracts the PURP; $15.80m includes all of G's year.`,
        ru: `Распределим G по времени, исключим внутригрупповую продажу, прибавим PURP.
# Шаг 1: Себестоимость G с 1 октября
  6 месяцев: $6m x 6/12 = $3m
# Шаг 2: PURP (наценка 20%, цена — 120% себестоимости)
  Прибыль в продаже: $2.4m x 20/120 = $0.4m
  Половина на складе: $0.4m x 1/2 = $0.2m
# Шаг 3: Себестоимость группы
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Ответ: $12.80 млн
! Частая ошибка: $12.84m считает 20% маржой; $12.40m вычитает PURP; $15.80m включает весь год G.`,
        uz: `G ni vaqt bo'yicha taqsimlab, guruh ichidagi sotuvni chiqarib, PURP ni qo'shamiz.
# 1-qadam: G ning 1 oktyabrdan tannarxi
  6 oy: $6m x 6/12 = $3m
# 2-qadam: PURP (ustama 20%, narx tannarxning 120% i)
  Sotuvdagi foyda: $2.4m x 20/120 = $0.4m
  Yarmi omborda: $0.4m x 1/2 = $0.2m
# 3-qadam: Guruh tannarxi
  $12m + $3m - $2.4m + $0.2m = $12.8m
= Javob: $12.80 mln
! Ko'p uchraydigan xato: $12.84m 20% ni marja deb oladi; $12.40m PURP ni ayiradi; $15.80m G ning butun yilini kiritadi.`,
      },
      options: ['$12.80 million', '$12.40 million', '$15.80 million', '$12.84 million'],
      correctIndex: 0,
    },
    {
      id: 'ch20-q494',
      kitRef: 494,
      topicId: 'chapter-20',
      type: 'number',
      text: 'H gained control of S on 1 March 20X5. For the year ended 31 August 20X5, cost of sales was $8 million for H and $5 million for S, spread evenly. After the acquisition H sold goods to S for $1.5 million at a mark-up of 25% on cost, and two fifths were still in S\'s inventory at the year end. What is group cost of sales? Give your answer in $000.',
      explanation: {
        en: `Time-apportion S, cancel the intra-group sale, then add the PURP.
# Step 1: S's cost of sales since 1 March
  March to August: 6 months: $5m x 6/12 = $2.5m
# Step 2: PURP (mark-up 25%, so the price is 125% of cost)
  Profit in the sale: $1.5m x 25/125 = $0.3m
  Two fifths still held: $0.3m x 2/5 = $0.12m
# Step 3: Group cost of sales
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Answer: $9,120,000 (9,120 in $000)
! Common trap: taking 25% of the price ($0.375m profit), or including all 12 months of S.`,
        ru: `Распределим S по времени, исключим внутригрупповую продажу, прибавим PURP.
# Шаг 1: Себестоимость S с 1 марта
  Март–август: 6 месяцев: $5m x 6/12 = $2.5m
# Шаг 2: PURP (наценка 25%, цена — 125% себестоимости)
  Прибыль в продаже: $1.5m x 25/125 = $0.3m
  Две пятых на складе: $0.3m x 2/5 = $0.12m
# Шаг 3: Себестоимость группы
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Ответ: $9,120,000 (9,120 в $000)
! Частая ошибка: брать 25% от цены (прибыль $0.375m) или включать все 12 месяцев S.`,
        uz: `S ni vaqt bo'yicha taqsimlab, guruh ichidagi sotuvni chiqarib, PURP ni qo'shamiz.
# 1-qadam: S ning 1 martdan tannarxi
  Mart–avgust: 6 oy: $5m x 6/12 = $2.5m
# 2-qadam: PURP (ustama 25%, narx tannarxning 125% i)
  Sotuvdagi foyda: $1.5m x 25/125 = $0.3m
  Beshdan ikkisi omborda: $0.3m x 2/5 = $0.12m
# 3-qadam: Guruh tannarxi
  $8m + $2.5m - $1.5m + $0.12m = $9.12m
= Javob: $9,120,000 ($000 da 9,120)
! Ko'p uchraydigan xato: narxning 25% ini olish ($0.375m foyda) yoki S ning 12 oyini to'liq kiritish.`,
      },
      correctValue: 9120,
      answerText: '$9,120,000 (9,120 in $000)',
    },
    {
      id: 'ch20-q500',
      kitRef: 500,
      topicId: 'chapter-20',
      type: 'single',
      text: 'On 1 April 20X5 a parent bought 70% of a subsidiary. For the year ended 31 December 20X5 the parent made a profit of $900,000 and the subsidiary $480,000, earned evenly. After the acquisition the subsidiary sold goods to the parent with a profit element of $40,000, and half of them were still in the parent\'s inventory at the year end. What is the non-controlling interest share of group profit?',
      explanation: {
        en: `NCI share = NCI % x the subsidiary's post-acquisition profit, less PURP when the subsidiary was the seller.
# Step 1: Post-acquisition profit
  April to December: 9 months: $480,000 x 9/12 = $360,000
# Step 2: PURP (the subsidiary sold, so it comes off its profit)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# Step 3: NCI share
  30% x $340,000 = $102,000
= Answer: $102,000
! Common trap: $108,000 ignores the PURP; $144,000 uses the whole year; $138,000 uses the whole year less PURP.`,
        ru: `Доля NCI = % NCI x прибыль дочерней после покупки, минус PURP, если продавала дочерняя.
# Шаг 1: Прибыль после покупки
  Апрель–декабрь: 9 месяцев: $480,000 x 9/12 = $360,000
# Шаг 2: PURP (продавала дочерняя, вычитаем из её прибыли)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# Шаг 3: Доля NCI
  30% x $340,000 = $102,000
= Ответ: $102,000
! Частая ошибка: $108,000 не учитывает PURP; $144,000 берёт весь год; $138,000 — весь год минус PURP.`,
        uz: `NCI ulushi = NCI % x sho'baning xariddan keyingi foydasi, sho'ba sotgan bo'lsa PURP ayiriladi.
# 1-qadam: Xariddan keyingi foyda
  Aprel–dekabr: 9 oy: $480,000 x 9/12 = $360,000
# 2-qadam: PURP (sho'ba sotgan, uning foydasidan ayiriladi)
  $40,000 x 1/2 = $20,000
  $360,000 - $20,000 = $340,000
# 3-qadam: NCI ulushi
  30% x $340,000 = $102,000
= Javob: $102,000
! Ko'p uchraydigan xato: $108,000 PURP ni hisobga olmaydi; $144,000 butun yilni oladi; $138,000 butun yil minus PURP.`,
      },
      options: ['$102,000', '$108,000', '$144,000', '$138,000'],
      correctIndex: 0,
    },
    {
      id: 'ch20-q502',
      kitRef: 502,
      topicId: 'chapter-20',
      type: 'number',
      text: 'A parent bought 75% of a subsidiary on 30 September 20X2. For the year ended 31 December 20X2 the parent\'s revenue was $140,000 and the subsidiary\'s $84,000, earned evenly. In November the parent sold goods to the subsidiary for $5,000, and none were left in inventory at the year end. What is consolidated revenue?',
      explanation: {
        en: `Include the subsidiary only from 30 September, then cancel the post-acquisition intra-group sale.
# Step 1: Months in the group
  October to December: 3 months
# Step 2: Subsidiary revenue to include
  $84,000 x 3/12 = $21,000
# Step 3: Group revenue
  $140,000 + $21,000 - November sale $5,000 = $156,000
  (No goods are left, so there is no PURP)
= Answer: $156,000
! Common trap: including the whole $84,000, or forgetting the $5,000 sale because the goods were all sold on.`,
        ru: `Включаем дочернюю только с 30 сентября, затем исключаем внутригрупповую продажу после покупки.
# Шаг 1: Месяцы в группе
  Октябрь–декабрь: 3 месяца
# Шаг 2: Выручка дочерней к включению
  $84,000 x 3/12 = $21,000
# Шаг 3: Выручка группы
  $140,000 + $21,000 - ноябрьская продажа $5,000 = $156,000
  (Товара не осталось, PURP нет)
= Ответ: $156,000
! Частая ошибка: включить все $84,000 или забыть продажу $5,000, раз товар весь перепродан.`,
        uz: `Sho'bani faqat 30 sentyabrdan kiritamiz, keyin xariddan keyingi guruh ichidagi sotuvni chiqaramiz.
# 1-qadam: Guruhdagi oylar
  Oktyabr–dekabr: 3 oy
# 2-qadam: Kiritiladigan sho'ba tushumi
  $84,000 x 3/12 = $21,000
# 3-qadam: Guruh tushumi
  $140,000 + $21,000 - noyabr sotuvi $5,000 = $156,000
  (Tovar qolmagan, PURP yo'q)
= Javob: $156,000
! Ko'p uchraydigan xato: butun $84,000 ni kiritish yoki tovar to'liq qayta sotilgani uchun $5,000 sotuvni unutish.`,
      },
      correctValue: 156000,
      answerText: '$156,000',
    },
    {
      id: 'ch20-q503',
      kitRef: 503,
      topicId: 'chapter-20',
      type: 'number',
      text: 'A parent bought 80% of a subsidiary on 1 June 20X2. Extracts for the year ended 30 November 20X2 are in the table. Revenue and costs accrue evenly. What is consolidated gross profit?',
      explanation: {
        en: `Add the parent in full and the subsidiary's post-acquisition months, in full (not 80%).
# Step 1: Months in the group
  June to November: 6 months
# Step 2: Subsidiary gross profit to include
  $11,400 x 6/12 = $5,700
# Step 3: Group gross profit
  $24,500 + $5,700 = $30,200
= Answer: $30,200
! Common trap: also taking 80% of the subsidiary's figure. Results are added in full; the NCI share is shown separately at the bottom.`,
        ru: `Материнскую — полностью, дочернюю — за месяцы после покупки, тоже полностью (не 80%).
# Шаг 1: Месяцы в группе
  Июнь–ноябрь: 6 месяцев
# Шаг 2: Валовая прибыль дочерней к включению
  $11,400 x 6/12 = $5,700
# Шаг 3: Валовая прибыль группы
  $24,500 + $5,700 = $30,200
= Ответ: $30,200
! Частая ошибка: брать ещё и 80% от цифры дочерней. Результаты складываются полностью; доля NCI показывается отдельно внизу.`,
        uz: `Bosh kompaniyani to'liq, sho'bani xariddan keyingi oylar uchun, u ham to'liq (80% emas).
# 1-qadam: Guruhdagi oylar
  Iyun–noyabr: 6 oy
# 2-qadam: Kiritiladigan sho'ba yalpi foydasi
  $11,400 x 6/12 = $5,700
# 3-qadam: Guruh yalpi foydasi
  $24,500 + $5,700 = $30,200
= Javob: $30,200
! Ko'p uchraydigan xato: sho'ba sonining yana 80% ini olish. Natijalar to'liq qo'shiladi; NCI ulushi pastda alohida ko'rsatiladi.`,
      },
      correctValue: 30200,
      answerText: '$30,200',
      table: {
        head: ['', 'Parent $', 'Subsidiary $'],
        rows: [
          ['Revenue', '70,000', '30,000'],
          ['Cost of sales', '(45,500)', '(18,600)'],
          ['Gross profit', '24,500', '11,400'],
        ],
      },
    },
    {
      id: 'ch20-q505',
      kitRef: 505,
      topicId: 'chapter-20',
      type: 'single',
      text: 'A group holds these investments. (i) 35% of the non-voting preference shares of A Co. (ii) 15% of the equity shares of B Co, with two directors on its seven-member board. (iii) 45% of the equity shares of C Co, with the right to appoint five of its eight directors. Which should be equity accounted?',
      explanation: {
        en: `Look at the real power each holding gives, not just the percentage.
- (i) 35% of NON-VOTING preference shares: no votes, so no influence. Not an associate.
- (ii) 15% with two of seven board seats: a real say in decisions, so significant influence. ASSOCIATE: equity account it.
- (iii) 45% with five of eight board seats: a majority of the board, so CONTROL. A subsidiary, consolidated line by line.
= Answer: (ii) only`,
        ru: `Смотрим на реальную власть, а не только на процент.
- (i) 35% НЕголосующих привилегированных акций: нет голосов, нет влияния. Не ассоциированная.
- (ii) 15% и два места из семи в совете: реальный голос в решениях, значит значительное влияние. АССОЦИИРОВАННАЯ: метод долевого участия.
- (iii) 45% и пять мест из восьми: большинство совета, значит КОНТРОЛЬ. Дочерняя, консолидируется построчно.
= Ответ: только (ii)`,
        uz: `Faqat foizga emas, haqiqiy hokimiyatga qaraymiz.
- (i) OVOZSIZ imtiyozli aksiyalarning 35% i: ovoz yo'q, ta'sir yo'q. Assotsiatsiyalangan emas.
- (ii) 15% va kengashdagi yettitadan ikki o'rin: qarorlarda haqiqiy ovoz, demak sezilarli ta'sir. ASSOTSIATSIYALANGAN: ulushli qatnashish usuli.
- (iii) 45% va sakkiztadan besh o'rin: kengash ko'pchiligi, demak NAZORAT. Sho'ba, qatorma-qator konsolidatsiya qilinadi.
= Javob: faqat (ii)`,
      },
      options: ['(i) and (ii)', '(ii) only', '(i) and (iii)', '(ii) and (iii)'],
      correctIndex: 1,
    },
    {
      id: 'ch20-q506',
      kitRef: 506,
      topicId: 'chapter-20',
      type: 'matrix',
      text: 'State whether each statement about associates is true or false.',
      explanation: {
        en: `Check each statement.
- Equity accounting is ALWAYS used for 20% to 50%: FALSE. 20% to 50% only suggests significant influence; it may not exist, and the equity method is only used when the investor prepares group accounts.
- Dividends from an associate are shown as investment income in group accounts: FALSE. The group shows its share of the associate's PROFIT instead; counting dividends too would count them twice.`,
        ru: `Проверим каждое утверждение.
- Метод долевого участия ВСЕГДА применяют при 20%–50%: НЕВЕРНО. 20%–50% лишь предполагает значительное влияние; его может не быть, а метод применяют только при групповой отчётности.
- Дивиденды от ассоциированной показывают как инвестиционный доход в групповой отчётности: НЕВЕРНО. Группа показывает свою долю в ПРИБЫЛИ ассоциированной; учитывать ещё и дивиденды — значит учесть дважды.`,
        uz: `Har bir fikrni tekshiramiz.
- 20%–50% da ulushli qatnashish usuli HAR DOIM qo'llanadi: NOTO'G'RI. 20%–50% faqat sezilarli ta'sirni taxmin qiladi; u bo'lmasligi mumkin, usul esa faqat guruh hisoboti tuzilganda qo'llanadi.
- Assotsiatsiyalangan kompaniyadan dividendlar guruh hisobotida investitsiya daromadi sifatida ko'rsatiladi: NOTO'G'RI. Guruh uning FOYDASIDAGI ulushini ko'rsatadi; dividendlarni ham hisoblash ikki marta hisoblash bo'ladi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Equity accounting is always used when an investor holds between 20% and 50% of another entity\'s equity shares',
          correctIndex: 1,
        },
        {
          text: 'Dividends received from an associate are shown as investment income in the consolidated financial statements',
          correctIndex: 1,
        },
      ],
    },
    {
      id: 'ch20-q507',
      kitRef: 507,
      topicId: 'chapter-20',
      type: 'matrix',
      text: 'A group has invested in an associate for the first time this year. State whether each statement is true or false.',
      explanation: {
        en: `Check each statement about a new associate.
- Goodwill is shown separately: FALSE. It stays inside the single "investment in associate" figure.
- The equity method is used: TRUE.
- The associate's TOTAL profit is shown: FALSE. Only the group's SHARE of it.
- Its assets and liabilities are added line by line: FALSE. That is consolidation, used only for subsidiaries.`,
        ru: `Проверим каждое утверждение о новой ассоциированной.
- Гудвил показывают отдельно: НЕВЕРНО. Он внутри единой цифры «инвестиция в ассоциированную».
- Применяется метод долевого участия: ВЕРНО.
- Показывают ВСЮ прибыль ассоциированной: НЕВЕРНО. Только ДОЛЮ группы.
- Её активы и обязательства складывают построчно: НЕВЕРНО. Это консолидация, только для дочерних.`,
        uz: `Yangi assotsiatsiyalangan kompaniya haqidagi har bir fikrni tekshiramiz.
- Gudvil alohida ko'rsatiladi: NOTO'G'RI. U yagona «assotsiatsiyalangan kompaniyaga investitsiya» soni ichida.
- Ulushli qatnashish usuli qo'llanadi: TO'G'RI.
- Uning BUTUN foydasi ko'rsatiladi: NOTO'G'RI. Faqat guruh ULUSHI.
- Uning aktiv va majburiyatlari qatorma-qator qo'shiladi: NOTO'G'RI. Bu konsolidatsiya, faqat sho'balar uchun.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'Goodwill on the associate is shown separately in the consolidated statement of financial position',
          correctIndex: 1,
        },
        { text: 'The associate is accounted for using the equity method', correctIndex: 0 },
        {
          text: 'The associate\'s total profit for the year is shown in the consolidated statement of profit or loss',
          correctIndex: 1,
        },
        {
          text: 'The group\'s share of the associate\'s assets and liabilities is added line by line',
          correctIndex: 1,
        },
      ],
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
