// Chapter 9: facts the Kaplan and BPP questions test that the visible lesson did not state.
module.exports = require('./facts.js')(9, {
  1: [
    ['Full expense formula: cash paid + opening prepayment - closing prepayment + closing accrual - opening accrual.',
      'Полная формула расхода: оплачено + предоплата на начало - предоплата на конец + начисление на конец - начисление на начало.',
      'Xarajatning to\'liq formulasi: to\'langan + boshidagi oldindan to\'lov - oxiridagi oldindan to\'lov + oxiridagi hisoblangan - boshidagi hisoblangan.'],
    ['Items held in stock (heating oil, fuel): expense = cash paid + opening stock - closing stock + closing amount owed - opening amount owed.',
      'Если есть запас (топливо для отопления, бензин): расход = оплачено + запас на начало - запас на конец + долг на конец - долг на начало.',
      'Zaxirada saqlanadigan narsalar (isitish yoqilg\'isi, benzin): xarajat = to\'langan + boshidagi zaxira - oxiridagi zaxira + oxiridagi qarz - boshidagi qarz.'],
    ['If the bills for each part of the year are given, the expense is simply the total of those bills. The payments only decide the accrual or prepayment.',
      'Если даны счета за каждую часть года, расход — просто сумма этих счетов. Платежи решают только, будет начисление или предоплата.',
      'Agar yilning har bir qismi uchun hisoblar berilgan bo\'lsa, xarajat shunchaki shu hisoblar yig\'indisi. To\'lovlar faqat hisoblangan yoki oldindan to\'lovni belgilaydi.'],
    ['A missed accrual: profit falls by the accrual and net assets fall by the same amount (a new liability).',
      'Пропущенное начисление: прибыль падает на его сумму, и чистые активы падают на столько же (новое обязательство).',
      'Tushib qolgan hisoblangan xarajat: foyda shu summaga kamayadi va sof aktivlar ham shuncha kamayadi (yangi majburiyat).'],
  ],
  2: [
    ['A missed prepayment: profit rises by the prepayment and net assets rise by the same amount (a new asset). Draft profit - missed accrual + missed prepayment = corrected profit.',
      'Пропущенная предоплата: прибыль растёт на её сумму, и чистые активы растут на столько же (новый актив). Черновая прибыль - пропущенное начисление + пропущенная предоплата = исправленная прибыль.',
      'Tushib qolgan oldindan to\'lov: foyda shu summaga oshadi va sof aktivlar ham shuncha oshadi (yangi aktiv). Dastlabki foyda - tushib qolgan hisoblangan + tushib qolgan oldindan to\'lov = to\'g\'rilangan foyda.'],
    ['One bill can hold both: a standing charge paid in ADVANCE (part may be a prepayment) and usage paid in ARREARS (the unbilled part is an accrual). Work each part separately.',
      'В одном счёте может быть и то, и другое: абонентская плата ВПЕРЁД (часть может быть предоплатой) и потребление ЗАДНИМ числом (невыставленная часть — начисление). Считайте каждую часть отдельно.',
      'Bitta hisobda ikkalasi bo\'lishi mumkin: OLDINDAN to\'lanadigan abonent to\'lovi (bir qismi oldindan to\'lov bo\'lishi mumkin) va KEYIN to\'lanadigan iste\'mol (hisob chiqarilmagan qismi hisoblangan xarajat). Har qismni alohida hisoblang.'],
  ],
  3: [
    ['Full income formula: cash received + closing accrued income - opening accrued income + opening prepaid income - closing prepaid income.',
      'Полная формула дохода: получено + начисленный доход на конец - на начало + доход, полученный авансом, на начало - на конец.',
      'Daromadning to\'liq formulasi: olingan + oxiridagi hisoblangan daromad - boshidagi + boshidagi oldindan olingan daromad - oxiridagi.'],
    ['In an income account a DEBIT balance is accrued income (owed to you) and a CREDIT balance is prepaid income (received in advance).',
      'На счёте дохода ДЕБЕТОВОЕ сальдо — начисленный доход (вам должны), а КРЕДИТОВОЕ — доход, полученный авансом.',
      'Daromad hisobida DEBET qoldig\'i hisoblangan daromad (sizga qarzdor), KREDIT qoldig\'i esa oldindan olingan daromad.'],
  ],
});
