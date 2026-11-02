'use strict';

(function () {
  const TOPIC = 'chapter-20';
  const PREFIX = 'ch20';

  const base = (kitRef, type, text, en, ru, uz) => ({ id: `${PREFIX}-q${kitRef}`, kitRef, topicId: TOPIC, type, text, explanation: { en, ru, uz } });
  const single = (kitRef, text, options, correctIndex, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'single', text, en, ru, uz), options, correctIndex, ...extra });
  const number = (kitRef, text, correctValue, answerText, en, ru, uz, extra = {}) => ({ ...base(kitRef, 'number', text, en, ru, uz), correctValue, answerText, ...extra });
  const matrix = (kitRef, text, columns, rows, en, ru, uz) => ({ ...base(kitRef, 'matrix', text, en, ru, uz), columns, rows });
  const TF = ['True', 'False'];
  const T = 0;
  const F = 1;

  const PS = {
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
  };
  const PS_NOTE = 'Pine bought 75% of Spruce\'s equity shares on 1 April 20X8. During the year Pine sold goods to Spruce for $30 million that had cost Pine $21 million. At the year end Spruce still held one third of them.';

  const questions = [
    single(478, `${PS_NOTE} What is the unrealised profit adjustment?`,
      ['$3 million', '$9 million', '$6 million', '$10 million'], 0,
      `The profit on the whole sale is $30m - $21m = $9m. One third is still in inventory, so $9m × 1/3 = $3m is unrealised. The other $6m has been earned from outside customers.`,
      `Прибыль по всей продаже $30m - $21m = $9m. Треть ещё в запасах, нереализовано $9m × 1/3 = $3m. Остальные $6m получены от внешних покупателей.`,
      `Butun sotuvdagi foyda $30m - $21m = $9m. Uchdan biri hali zaxirada, amalga oshmagan $9m × 1/3 = $3m. Qolgan $6m tashqi mijozlardan olingan.`,
      { table: PS }),
    single(479, `${PS_NOTE} What profit is attributable to the non-controlling interest?`,
      ['$2.4 million', '$1.65 million', '$7.2 million', '$3.0 million'], 0,
      `The NCI's share is 25% × Spruce's profit after tax of $9.6m = $2.4m. Pine was the seller, so the unrealised profit is in Pine's profit and the NCI bears none of it. Using profit before tax gives $3.0m.`,
      `Доля NCI: 25% × прибыль Spruce после налога $9.6m = $2.4m. Продавала Pine, поэтому нереализованная прибыль в прибыли Pine, и NCI её не несёт. С прибылью до налога выйдет $3.0m.`,
      `NCI ulushi: 25% × Spruce ning soliqdan keyingi foydasi $9.6m = $2.4m. Sotuvchi Pine, shuning uchun amalga oshmagan foyda Pine foydasida, NCI uni ko'tarmaydi. Soliqdan oldingi foyda bilan $3.0m chiqadi.`,
      { table: PS }),
    single(480, `${PS_NOTE} What are consolidated revenue and cost of sales?`,
      ['Revenue $180m; cost of sales $120m', 'Revenue $210m; cost of sales $150m', 'Revenue $180m; cost of sales $114m', 'Revenue $180m; cost of sales $147m'], 0,
      `Revenue: $150m + $60m - $30m intra-group = $180m. Cost of sales: $105m + $42m - $30m + $3m unrealised profit = $120m. The unrealised profit is added to cost of sales, not deducted.`,
      `Выручка: $150m + $60m - $30m внутригрупповых = $180m. Себестоимость: $105m + $42m - $30m + $3m нереализованной прибыли = $120m. Нереализованная прибыль прибавляется к себестоимости, а не вычитается.`,
      `Tushum: $150m + $60m - $30m guruh ichidagi = $180m. Tannarx: $105m + $42m - $30m + $3m amalga oshmagan foyda = $120m. Amalga oshmagan foyda tannarxga qo'shiladi, ayirilmaydi.`,
      { table: PS }),
    single(483, 'An associate is an entity over which the investor has:',
      ['Control', 'Significant influence', 'No influence at all', 'A holding of at least 50% of the voting shares'], 1,
      `IAS 28 defines an associate by significant influence: the power to take part in policy decisions without controlling them. Control makes it a subsidiary, and a 50% or larger holding normally gives control.`,
      `IAS 28 определяет ассоциированную через значительное влияние: право участвовать в решениях о политике без контроля. Контроль делает компанию дочерней, а доля от 50% обычно даёт контроль.`,
      `IAS 28 assotsiatsiyalangan kompaniyani sezilarli ta'sir orqali ta'riflaydi: siyosat qarorlarida nazoratsiz qatnashish huquqi. Nazorat uni sho'baga aylantiradi, 50% va undan ko'p ulush odatda nazorat beradi.`),
    single(485, 'Which of these would normally indicate that one entity has significant influence over another?',
      ['The ability to appoint a majority of its board of directors', 'The ability to appoint at least one member of its board of directors', 'The ability to ask for a director to be appointed to its board', 'The ability to send requests about policy to its board'], 1,
      `A seat on the board lets the investor take part in policy decisions, which is significant influence. Appointing a majority of the board would be control. Asking or requesting gives no real say.`,
      `Место в совете позволяет участвовать в решениях о политике, это значительное влияние. Назначение большинства совета — контроль. Просьбы не дают реального голоса.`,
      `Kengashdagi o'rin siyosat qarorlarida qatnashish imkonini beradi, bu sezilarli ta'sir. Kengash ko'pchiligini tayinlash nazorat. So'rovlar haqiqiy ovoz bermaydi.`),
    single(488, 'Which shareholding would normally indicate that one entity has significant influence over another?',
      ['Holding some of its equity shares', 'Holding up to 20% of its equity shares', 'Holding more than 50% of its equity shares', 'Holding between 20% and 50% of its equity shares'], 3,
      `Significant influence is presumed with 20% to 50% of the voting shares. More than 50% normally means control, and less than 20% is usually a trade investment.`,
      `Значительное влияние предполагается при 20-50% голосующих акций. Более 50% обычно означает контроль, менее 20% — обычно простое вложение.`,
      `Sezilarli ta'sir ovoz beruvchi aksiyalarning 20-50% ida taxmin qilinadi. 50% dan ko'pi odatda nazorat, 20% dan kami odatda oddiy sarmoya.`),
    single(491, 'Entity X bought 70% of entity Z on 1 May 20X3. For the year ended 31 December 20X3, X had revenue of $3 million and Z $2.4 million, earned evenly. After the acquisition X sold goods to Z for $0.2 million. What is group revenue?',
      ['$4.4 million', '$5.2 million', '$3.6 million', '$4.6 million'], 0,
      `Z has been a subsidiary for 8 months, so include $2.4m × 8/12 = $1.6m. Group revenue = $3m + $1.6m - $0.2m = $4.4m. Including all of Z's revenue gives $5.2m.`,
      `Z — дочерняя 8 месяцев, включаем $2.4m × 8/12 = $1.6m. Выручка группы = $3m + $1.6m - $0.2m = $4.4m. Если включить всю выручку Z, выйдет $5.2m.`,
      `Z 8 oy sho'ba, $2.4m × 8/12 = $1.6m kiritiladi. Guruh tushumi = $3m + $1.6m - $0.2m = $4.4m. Z ning butun tushumini kiritsangiz $5.2m chiqadi.`),
    single(492, 'Entity T bought 80% of entity S on 1 October 20X6. For the year ended 30 June 20X7, T had revenue of $8 million and S $4 million, earned evenly. After the acquisition S sold goods to T for $0.6 million. What is group revenue?',
      ['$10.4 million', '$11.4 million', '$8.4 million', '$11.0 million'], 0,
      `From 1 October to 30 June is 9 months: $4m × 9/12 = $3m. Group revenue = $8m + $3m - $0.6m = $10.4m. It does not matter which company made the intra-group sale: the full amount is removed.`,
      `С 1 октября по 30 июня — 9 месяцев: $4m × 9/12 = $3m. Выручка группы = $8m + $3m - $0.6m = $10.4m. Неважно, кто продавал внутри группы: вычитается вся сумма.`,
      `1 oktyabrdan 30 iyungacha 9 oy: $4m × 9/12 = $3m. Guruh tushumi = $8m + $3m - $0.6m = $10.4m. Guruh ichida kim sotgani muhim emas: butun summa ayiriladi.`),
    single(493, 'Entity F bought 80% of entity G on 1 October 20X6. For the year ended 31 March 20X7, cost of sales was $12 million for F and $6 million for G, spread evenly. After the acquisition F sold goods to G for $2.4 million at a mark-up of 20% on cost. Half of them were still in G\'s inventory at the year end. What is group cost of sales?',
      ['$12.80 million', '$12.40 million', '$15.80 million', '$12.84 million'], 0,
      `G's cost of sales for 6 months: $3m. Unrealised profit: $2.4m × 20/120 × 1/2 = $0.2m. Group cost of sales = $12m + $3m - $2.4m + $0.2m = $12.8m. Treating 20% as a margin gives $12.84m.`,
      `Себестоимость G за 6 месяцев: $3m. Нереализованная прибыль: $2.4m × 20/120 × 1/2 = $0.2m. Себестоимость группы = $12m + $3m - $2.4m + $0.2m = $12.8m. Если считать 20% маржой, выйдет $12.84m.`,
      `G ning 6 oylik tannarxi: $3m. Amalga oshmagan foyda: $2.4m × 20/120 × 1/2 = $0.2m. Guruh tannarxi = $12m + $3m - $2.4m + $0.2m = $12.8m. 20% ni marja deb hisoblasangiz $12.84m chiqadi.`),
    number(494, 'H gained control of S on 1 March 20X5. For the year ended 31 August 20X5, cost of sales was $8 million for H and $5 million for S, spread evenly. After the acquisition H sold goods to S for $1.5 million at a mark-up of 25% on cost, and two fifths were still in S\'s inventory at the year end. What is group cost of sales? Give your answer in $000.', 9120, '$9,120,000 (9,120 in $000)',
      `S has been a subsidiary for 6 months: $5m × 6/12 = $2.5m. Unrealised profit: $1.5m × 25/125 × 2/5 = $0.12m. Group cost of sales = $8m + $2.5m - $1.5m + $0.12m = $9.12m, or 9,120 in $000.`,
      `S — дочерняя 6 месяцев: $5m × 6/12 = $2.5m. Нереализованная прибыль: $1.5m × 25/125 × 2/5 = $0.12m. Себестоимость группы = $8m + $2.5m - $1.5m + $0.12m = $9.12m, то есть 9,120 в $000.`,
      `S 6 oy sho'ba: $5m × 6/12 = $2.5m. Amalga oshmagan foyda: $1.5m × 25/125 × 2/5 = $0.12m. Guruh tannarxi = $8m + $2.5m - $1.5m + $0.12m = $9.12m, ya'ni $000 da 9,120.`),
    single(500, 'On 1 April 20X5 a parent bought 70% of a subsidiary. For the year ended 31 December 20X5 the parent made a profit of $900,000 and the subsidiary $480,000, earned evenly. After the acquisition the subsidiary sold goods to the parent with a profit element of $40,000, and half of them were still in the parent\'s inventory at the year end. What is the non-controlling interest share of group profit?',
      ['$102,000', '$108,000', '$144,000', '$138,000'], 0,
      `Post-acquisition profit: $480,000 × 9/12 = $360,000. The subsidiary was the seller, so deduct the unrealised profit of $40,000 × 1/2 = $20,000. NCI = 30% × ($360,000 - $20,000) = $102,000. Ignoring the unrealised profit gives $108,000.`,
      `Прибыль после покупки: $480,000 × 9/12 = $360,000. Продавала дочерняя, поэтому вычитаем нереализованную прибыль $40,000 × 1/2 = $20,000. NCI = 30% × ($360,000 - $20,000) = $102,000. Без учёта нереализованной прибыли — $108,000.`,
      `Xariddan keyingi foyda: $480,000 × 9/12 = $360,000. Sotuvchi sho'ba, shuning uchun amalga oshmagan foyda $40,000 × 1/2 = $20,000 ayiriladi. NCI = 30% × ($360,000 - $20,000) = $102,000. Amalga oshmagan foydasiz $108,000.`),
    number(502, 'A parent bought 75% of a subsidiary on 30 September 20X2. For the year ended 31 December 20X2 the parent\'s revenue was $140,000 and the subsidiary\'s $84,000, earned evenly. In November the parent sold goods to the subsidiary for $5,000, and none were left in inventory at the year end. What is consolidated revenue?', 156000, '$156,000',
      `The subsidiary is included for 3 months: $84,000 × 3/12 = $21,000. The November sale is after acquisition, so it is removed. $140,000 + $21,000 - $5,000 = $156,000. No goods are left, so there is no unrealised profit.`,
      `Дочерняя включается за 3 месяца: $84,000 × 3/12 = $21,000. Продажа в ноябре после покупки, она исключается. $140,000 + $21,000 - $5,000 = $156,000. Товара не осталось, нереализованной прибыли нет.`,
      `Sho'ba 3 oyga kiritiladi: $84,000 × 3/12 = $21,000. Noyabr sotuvi xariddan keyin, u chiqariladi. $140,000 + $21,000 - $5,000 = $156,000. Tovar qolmagan, amalga oshmagan foyda yo'q.`),
    number(503, 'A parent bought 80% of a subsidiary on 1 June 20X2. Extracts for the year ended 30 November 20X2 are in the table. Revenue and costs accrue evenly. What is consolidated gross profit?', 30200, '$30,200',
      `The subsidiary has been owned for 6 months, so include half its gross profit: $11,400 × 6/12 = $5,700. Group gross profit = $24,500 + $5,700 = $30,200. The 80% holding does not reduce the figure, because results are added in full.`,
      `Дочерняя в собственности 6 месяцев, включаем половину её валовой прибыли: $11,400 × 6/12 = $5,700. Валовая прибыль группы = $24,500 + $5,700 = $30,200. Доля 80% сумму не уменьшает, так как результаты складываются полностью.`,
      `Sho'ba 6 oy egalikda, yalpi foydasining yarmi kiritiladi: $11,400 × 6/12 = $5,700. Guruh yalpi foydasi = $24,500 + $5,700 = $30,200. 80% ulush summani kamaytirmaydi, chunki natijalar to'liq qo'shiladi.`,
      { table: { head: ['', 'Parent $', 'Subsidiary $'], rows: [['Revenue', '70,000', '30,000'], ['Cost of sales', '(45,500)', '(18,600)'], ['Gross profit', '24,500', '11,400']] } }),
    single(505, 'A group holds these investments. (i) 35% of the non-voting preference shares of A Co. (ii) 15% of the equity shares of B Co, with two directors on its seven-member board. (iii) 45% of the equity shares of C Co, with the right to appoint five of its eight directors. Which should be equity accounted?',
      ['(i) and (ii)', '(ii) only', '(i) and (iii)', '(ii) and (iii)'], 1,
      `B Co is an associate: two board seats give significant influence even though the holding is below 20%. Non-voting shares in A Co give no influence. Appointing most of C Co's board gives control, so C Co is a subsidiary.`,
      `B Co — ассоциированная: два места в совете дают значительное влияние, хотя доля меньше 20%. Неголосующие акции A Co влияния не дают. Назначение большинства совета C Co даёт контроль, это дочерняя.`,
      `B Co assotsiatsiyalangan: kengashdagi ikki o'rin ulush 20% dan kam bo'lsa ham sezilarli ta'sir beradi. A Co ovozsiz aksiyalari ta'sir bermaydi. C Co kengashi ko'pchiligini tayinlash nazorat beradi, u sho'ba.`),
    matrix(506, 'State whether each statement about associates is true or false.', TF, [
      { text: 'Equity accounting is always used when an investor holds between 20% and 50% of another entity\'s equity shares', correctIndex: F },
      { text: 'Dividends received from an associate are shown as investment income in the consolidated financial statements', correctIndex: F },
    ],
      `20% to 50% is only a presumption: significant influence may not exist, and equity accounting is only used where the investor prepares group accounts. In group accounts, the share of the associate's profit is shown instead of dividends.`,
      `20-50% — лишь предположение: значительного влияния может не быть, а метод долевого участия применяется только при наличии отчётности группы. В отчётности группы показывается доля в прибыли ассоциированной вместо дивидендов.`,
      `20-50% faqat taxmin: sezilarli ta'sir bo'lmasligi mumkin, ulushli qatnashish faqat guruh hisoboti tuzilganda ishlatiladi. Guruh hisobotida dividendlar o'rniga assotsiatsiyalangan kompaniya foydasidagi ulush ko'rsatiladi.`),
    matrix(507, 'A group has invested in an associate for the first time this year. State whether each statement is true or false.', TF, [
      { text: 'Goodwill on the associate is shown separately in the consolidated statement of financial position', correctIndex: F },
      { text: 'The associate is accounted for using the equity method', correctIndex: T },
      { text: 'The associate\'s total profit for the year is shown in the consolidated statement of profit or loss', correctIndex: F },
      { text: 'The group\'s share of the associate\'s assets and liabilities is added line by line', correctIndex: F },
    ],
      `Associates use the equity method. Any goodwill sits inside the single investment figure. Only the group's share of the associate's profit is shown, and its assets and liabilities are never added line by line.`,
      `Для ассоциированных применяется метод долевого участия. Гудвил находится внутри единой суммы вложения. Показывается только доля группы в прибыли, а активы и обязательства никогда не добавляются построчно.`,
      `Assotsiatsiyalangan kompaniyalar ulushli qatnashish usulida. Gudvil yagona sarmoya summasi ichida. Faqat guruhning foyda ulushi ko'rsatiladi, aktiv va majburiyatlar hech qachon qatorma-qator qo'shilmaydi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
