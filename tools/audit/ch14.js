// Chapter 14: facts the Kaplan and BPP questions test that the visible lesson did not state.
module.exports = require('./facts.js')(14, {
  2: [
    ['A transposition on ONE side only ($630 in the bank but $360 in the gas account) DOES stop the trial balance agreeing, by the difference ($270).',
      'Перестановка цифр только на ОДНОЙ стороне ($630 в банке, но $360 на счёте газа) НАРУШАЕТ равенство пробного баланса на разницу ($270).',
      'Raqamlar faqat BITTA tomonda almashsa ($630 bankda, gaz hisobida esa $360), sinov balansi farq ($270) qadar MUVOZANATDAN chiqadi.'],
    ['Undercasting means adding an account up too LOW. Undercasting a debit account (purchases) leaves debits short, so suspense has a DEBIT balance. Undercasting a credit account (sales) gives a CREDIT suspense balance.',
      'Недосчёт (undercasting) — сумма счёта посчитана слишком НИЗКОЙ. Недосчёт дебетового счёта (закупки) — дебета не хватает, поэтому на счёте suspense ДЕБЕТОВОЕ сальдо. Недосчёт кредитового счёта (выручка) даёт КРЕДИТОВОЕ сальдо.',
      'Kam hisoblash (undercasting) — hisob jami juda PAST qo\'shilgan. Debet hisobini (xaridlar) kam hisoblash debetni kamaytiradi, shuning uchun suspense DEBET qoldig\'iga ega. Kredit hisobini (sotuv) kam hisoblash KREDIT qoldig\'ini beradi.'],
  ],
  4: [
    ['An error in cost of sales (purchases, closing inventory) changes gross profit AND profit for the year. An error in an expense below gross profit (stationery, depreciation) changes only profit for the year.',
      'Ошибка в себестоимости (закупки, запасы на конец) меняет валовую прибыль И прибыль за год. Ошибка в расходе ниже валовой прибыли (канцтовары, амортизация) меняет только прибыль за год.',
      'Tannarxdagi xato (xaridlar, yakuniy zaxira) yalpi foydani VA yillik foydani o\'zgartiradi. Yalpi foydadan pastdagi xarajatdagi xato (kanselyariya, amortizatsiya) faqat yillik foydani o\'zgartiradi.'],
    ['Goods that arrived AFTER the year end but were counted in closing inventory: take their cost out. Assets and profit both fall by the cost (never by the selling price).',
      'Товар, пришедший ПОСЛЕ конца года, но включённый в запасы на конец: уберите его себестоимость. Активы и прибыль падают на себестоимость (никогда не на цену продажи).',
      'Yil oxiridan KEYIN kelgan, lekin yakuniy zaxiraga kiritilgan tovar: uning tannarxini chiqaring. Aktivlar ham, foyda ham tannarx qadar kamayadi (hech qachon sotuv narxi qadar emas).'],
    ['Rent income credited to an asset account: profit rises by the rent when corrected (Dr Asset, Cr Rent income).',
      'Доход от аренды ошибочно отнесён на счёт актива: при исправлении прибыль растёт на сумму аренды (Дт Актив, Кт Доход от аренды).',
      'Ijara daromadi xato bilan aktiv hisobiga yozilgan: tuzatilganda foyda ijara summasiga oshadi (Dt Aktiv, Kt Ijara daromadi).'],
  ],
});
