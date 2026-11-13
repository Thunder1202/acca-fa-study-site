// Chapter 12: facts the Kaplan and BPP questions test that the visible lesson did not state.
module.exports = require('./facts.js')(12, {
  1: [
    ['"At a premium of 40c" means 40c ABOVE nominal value. Issue price = nominal value + premium (a 25c share at a 40c premium is issued at 65c).',
      '«С премией 40c» значит на 40c ВЫШЕ номинала. Цена выпуска = номинал + премия (акция 25c с премией 40c выпускается по 65c).',
      '"40c mukofot bilan" nominaldan 40c YUQORI degani. Chiqarish narxi = nominal + mukofot (25c lik aksiya 40c mukofot bilan 65c ga chiqariladi).'],
    ['If the whole issue price was credited to share capital, move the premium out: Dr Share capital, Cr Share premium.',
      'Если вся цена выпуска ушла в уставный капитал, перенесите премию: Дт Уставный капитал, Кт Эмиссионный доход.',
      'Agar butun chiqarish narxi ustav kapitaliga yozilgan bo\'lsa, mukofotni ko\'chiring: Dt Ustav kapitali, Kt Emissiya daromadi.'],
  ],
  2: [
    ['A rights issue raises assets (cash), share capital and usually share premium. It never lowers retained earnings or share premium, and it is not an investment.',
      'Выпуск прав увеличивает активы (деньги), уставный капитал и обычно эмиссионный доход. Он никогда не уменьшает нераспределённую прибыль или эмиссионный доход и не является инвестицией.',
      'Huquqlar emissiyasi aktivlarni (pul), ustav kapitalini va odatda emissiya daromadini oshiradi. U hech qachon taqsimlanmagan foyda yoki emissiya daromadini kamaytirmaydi va investitsiya emas.'],
  ],
  3: [
    ['Dividends in the statement of changes in equity = ordinary (and irredeemable preference) dividends PAID in the year. Redeemable preference dividends are finance costs, and proposed dividends are left out.',
      'Дивиденды в отчёте об изменениях капитала = ВЫПЛАЧЕННЫЕ за год обыкновенные (и бессрочные привилегированные) дивиденды. Дивиденды по погашаемым привилегированным — финансовые расходы, а предложенные дивиденды не включают.',
      'Kapitaldagi o\'zgarishlar hisobotidagi dividendlar = yil davomida TO\'LANGAN oddiy (va muddatsiz imtiyozli) dividendlar. Qaytariladigan imtiyozli aksiya dividendlari moliyaviy xarajat, taklif qilingan dividendlar kiritilmaydi.'],
    ['Finding profit from retained earnings: profit = closing - opening + ordinary dividends + bonus issue from retained earnings. Redeemable preference dividends are already inside profit, so do not add them.',
      'Найти прибыль по нераспределённой прибыли: прибыль = на конец - на начало + обыкновенные дивиденды + бонусный выпуск из нераспределённой прибыли. Дивиденды по погашаемым привилегированным уже внутри прибыли, их не прибавляют.',
      'Taqsimlanmagan foydadan foydani topish: foyda = oxirgi - boshlang\'ich + oddiy dividendlar + taqsimlanmagan foydadan bonus emissiya. Qaytariladigan imtiyozli dividendlar foydaning ichida, ularni qo\'shmang.'],
  ],
});
