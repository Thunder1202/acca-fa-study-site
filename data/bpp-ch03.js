'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), sections 3 and 4,
// reworded with new figures. bppRef/bppPage point to BPP's own answer. Day-book and control-account items
// (3.11, 3.12, 3.15, 3.17, 4.1, 4.2, 4.5, 4.18) are left out: Kaplan's 2025-26 text does not teach them.
// 4.17 is left out because Kaplan does not cover its point. Petty cash items are in bpp-ch04.js.
(function () {
  const TOPIC = 'chapter-03';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp03-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const TF = ['True', 'False'];

  const questions = [
    q('3.1', 197, 'single', `The accounting equation can be rearranged in several ways. Which version is correct?`,
      pick([
        'Assets - liabilities - opening capital + drawings = profit',
        'Assets + profit - drawings - liabilities = closing capital',
        'Assets - liabilities - drawings = opening capital + profit',
        'Assets - profit - drawings = closing capital - liabilities',
      ], 0),
`# Step 1: Start from what you know
  Assets - liabilities = closing capital
  Closing capital = opening capital + profit - drawings
# Step 2: Put them together
  Assets - liabilities = opening capital + profit - drawings
# Step 3: Get profit on its own
  Assets - liabilities - opening capital + drawings = profit
= Answer: assets - liabilities - opening capital + drawings = profit
! Drawings reduce capital, so when you move them across the = sign they become a plus.`,
`# Шаг 1: Начнём с известного
  Активы - обязательства = капитал на конец
  Капитал на конец = капитал на начало + прибыль - изъятия
# Шаг 2: Соединим
  Активы - обязательства = капитал на начало + прибыль - изъятия
# Шаг 3: Выразим прибыль
  Активы - обязательства - капитал на начало + изъятия = прибыль
= Ответ: активы - обязательства - капитал на начало + изъятия = прибыль
! Изъятия уменьшают капитал, поэтому при переносе через знак = они становятся плюсом.`,
`# 1-qadam: Ma'lumdan boshlaymiz
  Aktivlar - majburiyatlar = yakuniy kapital
  Yakuniy kapital = boshlang'ich kapital + foyda - olib qo'yishlar
# 2-qadam: Birlashtiramiz
  Aktivlar - majburiyatlar = boshlang'ich kapital + foyda - olib qo'yishlar
# 3-qadam: Foydani alohida chiqaramiz
  Aktivlar - majburiyatlar - boshlang'ich kapital + olib qo'yishlar = foyda
= Javob: aktivlar - majburiyatlar - boshlang'ich kapital + olib qo'yishlar = foyda
! Olib qo'yishlar kapitalni kamaytiradi, shuning uchun = belgisidan o'tganda plyusga aylanadi.`),

    q('3.2', 197, 'single', `Which formula gives a sole trader's profit for the year?`,
      pick([
        'Opening capital + drawings - capital introduced - closing capital',
        'Closing capital + drawings - capital introduced - opening capital',
        'Opening capital - drawings + capital introduced - closing capital',
        'Opening capital - drawings - capital introduced - closing capital',
      ], 1),
`# Step 1: How capital moves in a year
  Closing capital = opening capital + capital introduced + profit - drawings
# Step 2: Get profit on its own
  Profit = closing capital - opening capital - capital introduced + drawings
# Step 3: Check with numbers
  Opening $10,000, introduced $2,000, drawings $3,000, closing $15,000
  Profit = 15,000 + 3,000 - 2,000 - 10,000 = $6,000
  Proof: 10,000 + 2,000 + 6,000 - 3,000 = 15,000
= Answer: closing capital + drawings - capital introduced - opening capital
! BPP's printed key picks "opening capital - drawings + capital introduced - closing capital". With the numbers above that gives -$6,000: the right size but the wrong sign. The formula above is the one that gives profit.`,
`# Шаг 1: Как меняется капитал за год
  Капитал на конец = капитал на начало + вложенный капитал + прибыль - изъятия
# Шаг 2: Выразим прибыль
  Прибыль = капитал на конец - капитал на начало - вложенный капитал + изъятия
# Шаг 3: Проверим числами
  Начало $10 000, вложено $2 000, изъятия $3 000, конец $15 000
  Прибыль = 15 000 + 3 000 - 2 000 - 10 000 = $6 000
  Проверка: 10 000 + 2 000 + 6 000 - 3 000 = 15 000
= Ответ: капитал на конец + изъятия - вложенный капитал - капитал на начало
! В ключе BPP выбран вариант «капитал на начало - изъятия + вложенный капитал - капитал на конец». С теми же числами он даёт -$6 000: верная величина, но не тот знак. Прибыль даёт формула выше.`,
`# 1-qadam: Yil davomida kapital qanday o'zgaradi
  Yakuniy kapital = boshlang'ich kapital + kiritilgan kapital + foyda - olib qo'yishlar
# 2-qadam: Foydani alohida chiqaramiz
  Foyda = yakuniy kapital - boshlang'ich kapital - kiritilgan kapital + olib qo'yishlar
# 3-qadam: Raqamlar bilan tekshiramiz
  Boshi $10 000, kiritilgan $2 000, olib qo'yishlar $3 000, oxiri $15 000
  Foyda = 15 000 + 3 000 - 2 000 - 10 000 = $6 000
  Tekshiruv: 10 000 + 2 000 + 6 000 - 3 000 = 15 000
= Javob: yakuniy kapital + olib qo'yishlar - kiritilgan kapital - boshlang'ich kapital
! BPP kalitida «boshlang'ich kapital - olib qo'yishlar + kiritilgan kapital - yakuniy kapital» tanlangan. Shu raqamlar bilan u -$6 000 beradi: hajmi to'g'ri, ishorasi noto'g'ri. Foydani yuqoridagi formula beradi.`),

    q('3.3', 197, 'single', `A business made a profit of $64,300 this year. The owner paid in new capital of $6,000 and took goods costing $1,900 for private use. Net assets at the start of the year were $92,400. What are net assets at the end of the year?`,
      pick(['$24,000', '$68,400', '$152,600', '$160,800'], 3),
`# Step 1: Change in net assets
  Profit + new capital - drawings
  64,300 + 6,000 - 1,900 = 68,400
# Step 2: Add the change to the opening figure
  92,400 + 68,400 = 160,800
= Answer: $160,800
! Goods taken for private use are drawings, valued at cost. They lower net assets.`,
`# Шаг 1: Изменение чистых активов
  Прибыль + новый капитал - изъятия
  64 300 + 6 000 - 1 900 = 68 400
# Шаг 2: Прибавим к начальной сумме
  92 400 + 68 400 = 160 800
= Ответ: $160 800
! Товары, взятые для личных нужд, — это изъятия по себестоимости. Они уменьшают чистые активы.`,
`# 1-qadam: Sof aktivlar o'zgarishi
  Foyda + yangi kapital - olib qo'yishlar
  64 300 + 6 000 - 1 900 = 68 400
# 2-qadam: Boshlang'ich summaga qo'shamiz
  92 400 + 68 400 = 160 800
= Javob: $160 800
! Shaxsiy maqsadda olingan tovarlar tannarx bo'yicha olib qo'yishdir. Ular sof aktivlarni kamaytiradi.`),

    q('3.4', 197, 'number', `A business made a profit of $41,200 this year. The owner paid in new capital of $7,500 and drew a salary of $650 a month. Net assets at the end of the year were $102,900. What was the owner's capital at the start of the year? (in $)`,
      amount(62000, '$62,000'),
`# Step 1: Drawings for the year
  650 x 12 = 7,800
# Step 2: Change in net assets
  41,200 + 7,500 - 7,800 = 40,900
# Step 3: Work back to the start
  102,900 - 40,900 = 62,000
= Answer: $62,000
! An owner's "salary" is drawings, not an expense. Remember to multiply by 12.`,
`# Шаг 1: Изъятия за год
  650 x 12 = 7 800
# Шаг 2: Изменение чистых активов
  41 200 + 7 500 - 7 800 = 40 900
# Шаг 3: Вернёмся к началу года
  102 900 - 40 900 = 62 000
= Ответ: $62 000
! «Зарплата» владельца — это изъятия, а не расход. Не забудьте умножить на 12.`,
`# 1-qadam: Yillik olib qo'yishlar
  650 x 12 = 7 800
# 2-qadam: Sof aktivlar o'zgarishi
  41 200 + 7 500 - 7 800 = 40 900
# 3-qadam: Yil boshiga qaytamiz
  102 900 - 40 900 = 62 000
= Javob: $62 000
! Egasining «maoshi» xarajat emas, olib qo'yishdir. 12 ga ko'paytirishni unutmang.`),

    q('3.5', 197, 'single', `A sole trader takes goods for their own use. The goods cost $600 and would normally sell for $1,050. Which entry records this?`,
      pick([
        'Dr Inventory $600, Cr Purchases $600',
        'Dr Drawings $600, Cr Purchases $600',
        'Dr Sales $1,050, Cr Drawings $1,050',
        'Dr Drawings $600, Cr Sales $600',
      ], 1),
`# Step 1: What happened
  The owner took goods out of the business. That is drawings.
# Step 2: At what value
  At cost, $600. The selling price does not matter, because nothing was sold.
# Step 3: The entry
  Dr Drawings $600 (capital goes down)
  Cr Purchases $600 (the goods are no longer part of the business's cost of sales)
= Answer: Dr Drawings $600, Cr Purchases $600
! It is not a sale, so the sales account is not touched.`,
`# Шаг 1: Что произошло
  Владелец забрал товар из бизнеса. Это изъятия.
# Шаг 2: По какой стоимости
  По себестоимости, $600. Цена продажи не важна, ведь продажи не было.
# Шаг 3: Проводка
  Дт Изъятия $600 (капитал уменьшается)
  Кт Закупки $600 (товар больше не входит в себестоимость бизнеса)
= Ответ: Дт Изъятия $600, Кт Закупки $600
! Это не продажа, поэтому счёт продаж не затрагивается.`,
`# 1-qadam: Nima bo'ldi
  Egasi biznesdan tovar oldi. Bu olib qo'yish.
# 2-qadam: Qaysi qiymatda
  Tannarx bo'yicha, $600. Sotish narxi muhim emas, chunki sotuv bo'lmadi.
# 3-qadam: Yozuv
  Dt Olib qo'yishlar $600 (kapital kamayadi)
  Kt Xaridlar $600 (tovar endi biznes tannarxiga kirmaydi)
= Javob: Dt Olib qo'yishlar $600, Kt Xaridlar $600
! Bu sotuv emas, shuning uchun sotuv hisobiga tegilmaydi.`),

    q('3.6', 197, 'single', `A business made a profit, but its bank balance went down. Which of these could cause that?`,
      pick([
        'Selling a non-current asset at a loss',
        'Charging depreciation in the statement of profit or loss',
        'Giving customers longer to pay',
        'Taking longer to pay suppliers',
      ], 2),
`Ask of each one: does it make cash go DOWN?
- Selling an asset at a loss: the sale still brings cash IN. The loss only affects profit.
- Depreciation: lowers profit, but no cash moves at all.
- Giving customers longer to pay: sales are made, but the cash arrives later. YES, cash falls.
- Paying suppliers later: cash stays in the bank longer, so the balance goes UP.
= Answer: giving customers longer to pay`,
`Спросим о каждом: уменьшаются ли деньги?
- Продажа актива с убытком: продажа всё равно ПРИНОСИТ деньги. Убыток влияет только на прибыль.
- Амортизация: снижает прибыль, но деньги не движутся.
- Более долгая отсрочка покупателям: продажи есть, а деньги приходят позже. ДА, деньги уменьшаются.
- Более поздняя оплата поставщикам: деньги дольше остаются в банке, остаток РАСТЁТ.
= Ответ: дать покупателям больше времени на оплату`,
`Har biri haqida so'raymiz: pul KAMAYADIMI?
- Aktivni zarar bilan sotish: sotuv baribir pul KELTIRADI. Zarar faqat foydaga ta'sir qiladi.
- Amortizatsiya: foydani kamaytiradi, lekin pul harakatlanmaydi.
- Xaridorlarga ko'proq muddat berish: sotuv bor, pul esa keyin keladi. HA, pul kamayadi.
- Yetkazib beruvchilarga kechroq to'lash: pul bankda uzoqroq turadi, qoldiq OSHADI.
= Javob: xaridorlarga to'lash uchun ko'proq muddat berish`),

    q('3.7', 197, 'single', `A trader's net assets were $145,000 at the start of the year and $176,000 at the end. During the year the trader paid in $30,000 of new capital and took drawings of $41,000. What was the profit or loss for the year?`,
      pick(['$42,000 profit', '$40,000 loss', '$102,000 profit', '$42,000 loss'], 0),
`# Step 1: Change in net assets
  176,000 - 145,000 = 31,000 increase
# Step 2: Explain the change
  Increase = capital introduced + profit - drawings
  31,000 = 30,000 + profit - 41,000
# Step 3: Solve
  Profit = 31,000 - 30,000 + 41,000 = 42,000
= Answer: $42,000 profit
! Drawings took $41,000 out, so the business must have earned it back to still grow.`,
`# Шаг 1: Изменение чистых активов
  176 000 - 145 000 = рост 31 000
# Шаг 2: Объясним изменение
  Рост = вложенный капитал + прибыль - изъятия
  31 000 = 30 000 + прибыль - 41 000
# Шаг 3: Решим
  Прибыль = 31 000 - 30 000 + 41 000 = 42 000
= Ответ: прибыль $42 000
! Изъятия забрали $41 000, значит бизнес должен был заработать их, чтобы всё равно вырасти.`,
`# 1-qadam: Sof aktivlar o'zgarishi
  176 000 - 145 000 = 31 000 o'sish
# 2-qadam: O'zgarishni tushuntiramiz
  O'sish = kiritilgan kapital + foyda - olib qo'yishlar
  31 000 = 30 000 + foyda - 41 000
# 3-qadam: Yechamiz
  Foyda = 31 000 - 30 000 + 41 000 = 42 000
= Javob: $42 000 foyda
! Olib qo'yishlar $41 000 ni olib ketdi, demak biznes baribir o'sishi uchun uni qayta ishlab topgan.`),

    q('3.8', 197, 'single', `A company pays $360 in cash for goods bought today, and pays a supplier $270 for an invoice received last month. Which entries record both payments?`,
      pick([
        'Dr Cash $630, Cr Purchases $630',
        'Dr Purchases $630, Cr Cash $630',
        'Dr Purchases $360, Dr Trade payables $270, Cr Cash $630',
        'Dr Cash $630, Cr Trade payables $270, Cr Purchases $360',
      ], 2),
`# Step 1: The cash purchase
  Dr Purchases $360, Cr Cash $360
# Step 2: Paying last month's invoice
  The purchase was already recorded last month (Dr Purchases, Cr Trade payables).
  Now the debt is paid: Dr Trade payables $270, Cr Cash $270
# Step 3: Put them together
  Dr Purchases $360, Dr Trade payables $270, Cr Cash $630
= Answer: Dr Purchases $360, Dr Trade payables $270, Cr Cash $630
! Debiting purchases with the $270 again would count that purchase twice.`,
`# Шаг 1: Покупка за наличные
  Дт Закупки $360, Кт Деньги $360
# Шаг 2: Оплата счёта прошлого месяца
  Закупка уже записана в прошлом месяце (Дт Закупки, Кт Кредиторы).
  Теперь долг оплачен: Дт Кредиторы $270, Кт Деньги $270
# Шаг 3: Соединим
  Дт Закупки $360, Дт Кредиторы $270, Кт Деньги $630
= Ответ: Дт Закупки $360, Дт Кредиторы $270, Кт Деньги $630
! Если снова записать $270 в дебет закупок, эта закупка будет учтена дважды.`,
`# 1-qadam: Naqd xarid
  Dt Xaridlar $360, Kt Pul $360
# 2-qadam: O'tgan oy hisob-fakturasini to'lash
  Xarid o'tgan oyda yozilgan (Dt Xaridlar, Kt Kreditorlar).
  Endi qarz to'landi: Dt Kreditorlar $270, Kt Pul $270
# 3-qadam: Birlashtiramiz
  Dt Xaridlar $360, Dt Kreditorlar $270, Kt Pul $630
= Javob: Dt Xaridlar $360, Dt Kreditorlar $270, Kt Pul $630
! $270 ni yana xaridlar debetiga yozsak, bu xarid ikki marta hisoblanadi.`),

    q('3.9', 198, 'single', `A trader sells goods on credit for $220. The trader also refunds $180 in cash to a customer who returned goods originally bought for cash. Which entries record both?`,
      pick([
        'Dr Receivables $220, Dr Sales returns $180, Cr Sales $220, Cr Cash $180',
        'Dr Sales $220, Dr Cash $180, Cr Receivables $220, Cr Sales returns $180',
        'Dr Receivables $400, Cr Sales $220, Cr Sales returns $180',
        'Dr Sales returns $180, Dr Sales $220, Cr Cash $400',
      ], 0),
`# Step 1: The credit sale
  Dr Receivables $220, Cr Sales $220
# Step 2: The cash refund for returned goods
  Dr Sales returns $180, Cr Cash $180
  The goods were sold for cash, so the customer gets cash back. Receivables are not involved.
= Answer: Dr Receivables $220, Dr Sales returns $180, Cr Sales $220, Cr Cash $180`,
`# Шаг 1: Продажа в кредит
  Дт Дебиторы $220, Кт Продажи $220
# Шаг 2: Возврат денег за возвращённый товар
  Дт Возвраты продаж $180, Кт Деньги $180
  Товар продавали за наличные, поэтому покупатель получает деньги. Дебиторы не затрагиваются.
= Ответ: Дт Дебиторы $220, Дт Возвраты продаж $180, Кт Продажи $220, Кт Деньги $180`,
`# 1-qadam: Kreditga sotuv
  Dt Debitorlar $220, Kt Sotuv $220
# 2-qadam: Qaytarilgan tovar uchun pulni qaytarish
  Dt Sotuv qaytarishlari $180, Kt Pul $180
  Tovar naqdga sotilgan, shuning uchun xaridor pulni qaytarib oladi. Debitorlarga tegilmaydi.
= Javob: Dt Debitorlar $220, Dt Sotuv qaytarishlari $180, Kt Sotuv $220, Kt Pul $180`),

    q('3.10', 198, 'single', `A business sends faulty goods back to its supplier. Which document should go with them?`,
      pick(['Debit note', 'Remittance advice', 'Purchase invoice', 'Credit note'], 0),
`Match each document to who sends it and why.
- Debit note: made by the CUSTOMER, lists the goods sent back. YES.
- Remittance advice: sent with a payment, not with returned goods.
- Purchase invoice: the supplier's request for payment.
- Credit note: issued by the SUPPLIER in reply, after it accepts the return.
= Answer: debit note`,
`Сопоставим каждый документ с тем, кто его отправляет и зачем.
- Дебет-нота: составляет ПОКУПАТЕЛЬ, в ней перечислен возвращаемый товар. ДА.
- Платёжное уведомление: отправляют вместе с оплатой, а не с возвратом.
- Счёт поставщика: запрос поставщика на оплату.
- Кредит-нота: выдаёт ПОСТАВЩИК в ответ, когда принимает возврат.
= Ответ: дебет-нота`,
`Har bir hujjatni kim va nima uchun yuborishiga moslaymiz.
- Debet-nota: XARIDOR tuzadi, unda qaytarilgan tovar ko'rsatiladi. HA.
- To'lov xabarnomasi: to'lov bilan yuboriladi, qaytarish bilan emas.
- Xarid hisob-fakturasi: yetkazib beruvchining to'lov so'rovi.
- Kredit-nota: qaytarishni qabul qilgach, YETKAZIB BERUVCHI javoban beradi.
= Javob: debet-nota`),

    q('3.13', 198, 'single', `This is a company's vehicles (cost) account at 30 June. What opening balance goes into the trial balance on 1 July?`,
      { table: { head: ['Debit', '$', 'Credit', '$'], rows: [
        ['Balance b/d', '132,400', 'Disposal', '71,800'],
        ['Additions', '96,300', 'Balance c/d', '156,900'],
        ['Total', '228,700', 'Total', '228,700'],
      ] }, ...pick(['$228,700 debit', '$228,700 credit', '$156,900 credit', '$156,900 debit'], 3) },
`# Step 1: Find the closing balance
  The balance c/d is $156,900. It sits on the credit side only to make the totals agree.
# Step 2: Bring it down
  It comes down on the opposite side, the debit side, as balance b/d.
# Step 3: Check it makes sense
  Vehicles are an asset, and assets have debit balances.
= Answer: $156,900 debit
! $228,700 is just the column total, not a balance.`,
`# Шаг 1: Найдём конечный остаток
  Остаток c/d — $156 900. Он стоит в кредите только для того, чтобы итоги сошлись.
# Шаг 2: Перенесём его
  Он переносится на противоположную сторону, в дебет, как остаток b/d.
# Шаг 3: Проверим смысл
  Транспорт — актив, а у активов дебетовый остаток.
= Ответ: $156 900 дебет
! $228 700 — это просто итог колонки, а не остаток.`,
`# 1-qadam: Yakuniy qoldiqni topamiz
  c/d qoldiq — $156 900. U kreditda faqat jamlar teng bo'lishi uchun turadi.
# 2-qadam: Uni o'tkazamiz
  U qarama-qarshi tomonga, debetga, b/d qoldiq sifatida o'tadi.
# 3-qadam: Mantiqni tekshiramiz
  Transport — aktiv, aktivlarning qoldig'i esa debet.
= Javob: $156 900 debet
! $228 700 shunchaki ustun jami, qoldiq emas.`),

    q('3.14', 198, 'single', `This is a company's trade payables account for the year to 30 September. What was the trade payables balance in the trial balance at the START of that year?`,
      { table: { head: ['Debit', '$', 'Credit', '$'], rows: [
        ['Cash at bank', '25,400', 'Balance b/d', '17,300'],
        ['Balance c/d', '14,500', 'Purchases', '22,600'],
        ['Total', '39,900', 'Total', '39,900'],
      ] }, ...pick(['$17,300 debit', '$17,300 credit', '$14,500 debit', '$14,500 credit'], 1) },
`# Step 1: Which figure is the start of the year?
  Balance b/d is the balance brought in at the start: $17,300.
  Balance c/d ($14,500) is the closing balance.
# Step 2: Which side?
  It sits on the credit side. Payables are a liability, and liabilities have credit balances.
= Answer: $17,300 credit`,
`# Шаг 1: Какая сумма — начало года?
  Остаток b/d — это остаток на начало: $17 300.
  Остаток c/d ($14 500) — это остаток на конец.
# Шаг 2: Какая сторона?
  Он стоит в кредите. Кредиторы — обязательство, а у обязательств кредитовый остаток.
= Ответ: $17 300 кредит`,
`# 1-qadam: Qaysi summa yil boshi?
  b/d qoldiq — yil boshidagi qoldiq: $17 300.
  c/d qoldiq ($14 500) — yakuniy qoldiq.
# 2-qadam: Qaysi tomon?
  U kreditda turadi. Kreditorlar — majburiyat, majburiyatlarning qoldig'i esa kredit.
= Javob: $17 300 kredit`),

    q('3.16', 198, 'matrix', `Is each statement true or false?`,
      grid(TF, [
        ['A debit records an increase in liabilities.', 1],
        ['A debit records a decrease in assets.', 1],
        ['A credit records an increase in liabilities.', 0],
        ['A credit records a decrease in capital.', 1],
      ]),
`Rule: a debit increases assets and decreases liabilities and capital. A credit increases liabilities and capital and decreases assets.
- Debit = increase in liabilities: FALSE, a debit decreases them.
- Debit = decrease in assets: FALSE, a debit increases them.
- Credit = increase in liabilities: TRUE.
- Credit = decrease in capital: FALSE, a credit increases capital.`,
`Правило: дебет увеличивает активы и уменьшает обязательства и капитал. Кредит увеличивает обязательства и капитал и уменьшает активы.
- Дебет = рост обязательств: НЕВЕРНО, дебет их уменьшает.
- Дебет = уменьшение активов: НЕВЕРНО, дебет их увеличивает.
- Кредит = рост обязательств: ВЕРНО.
- Кредит = уменьшение капитала: НЕВЕРНО, кредит капитал увеличивает.`,
`Qoida: debet aktivlarni oshiradi, majburiyat va kapitalni kamaytiradi. Kredit majburiyat va kapitalni oshiradi, aktivlarni kamaytiradi.
- Debet = majburiyatlar o'sishi: NOTO'G'RI, debet ularni kamaytiradi.
- Debet = aktivlar kamayishi: NOTO'G'RI, debet ularni oshiradi.
- Kredit = majburiyatlar o'sishi: TO'G'RI.
- Kredit = kapital kamayishi: NOTO'G'RI, kredit kapitalni oshiradi.`),

    q('4.3', 199, 'single', `A company buys goods on credit for $380 from one supplier. It also returns $520 of goods, bought on credit last month, to another supplier. Which entries record both, in total?`,
      pick([
        'Dr Purchases $380, Dr Purchase returns $520, Cr Cash $380, Cr Trade payables $520',
        'Dr Purchases $380, Dr Trade payables $520, Cr Purchase returns $900',
        'Dr Purchases $380, Dr Trade payables $140, Cr Purchase returns $520',
        'Dr Purchase returns $520, Dr Purchases $380, Cr Trade payables $900',
      ], 2),
`# Step 1: The credit purchase
  Dr Purchases $380, Cr Trade payables $380
# Step 2: The return
  Dr Trade payables $520, Cr Purchase returns $520
# Step 3: Combine the trade payables lines
  Debit 520 - credit 380 = net debit 140
  Dr Purchases $380, Dr Trade payables $140, Cr Purchase returns $520
= Answer: Dr Purchases $380, Dr Trade payables $140, Cr Purchase returns $520
! Check: debits 380 + 140 = 520 = credits.`,
`# Шаг 1: Закупка в кредит
  Дт Закупки $380, Кт Кредиторы $380
# Шаг 2: Возврат
  Дт Кредиторы $520, Кт Возвраты закупок $520
# Шаг 3: Свернём строки по кредиторам
  Дебет 520 - кредит 380 = чистый дебет 140
  Дт Закупки $380, Дт Кредиторы $140, Кт Возвраты закупок $520
= Ответ: Дт Закупки $380, Дт Кредиторы $140, Кт Возвраты закупок $520
! Проверка: дебет 380 + 140 = 520 = кредит.`,
`# 1-qadam: Kreditga xarid
  Dt Xaridlar $380, Kt Kreditorlar $380
# 2-qadam: Qaytarish
  Dt Kreditorlar $520, Kt Xarid qaytarishlari $520
# 3-qadam: Kreditorlar satrlarini birlashtiramiz
  Debet 520 - kredit 380 = sof debet 140
  Dt Xaridlar $380, Dt Kreditorlar $140, Kt Xarid qaytarishlari $520
= Javob: Dt Xaridlar $380, Dt Kreditorlar $140, Kt Xarid qaytarishlari $520
! Tekshiruv: debet 380 + 140 = 520 = kredit.`),

    q('4.4', 200, 'single', `A business receives cash from a credit customer for an invoice issued three weeks ago. It also receives cash from a cash sale today. Which entries record both?`,
      pick([
        'Dr Cash, Cr Sales',
        'Dr Cash, Cr Sales, Cr Trade receivables',
        'Dr Sales, Cr Cash',
        'Dr Trade receivables, Dr Sales, Cr Cash',
      ], 1),
`# Step 1: Cash from the credit customer
  The sale was recorded three weeks ago (Dr Receivables, Cr Sales).
  Now the debt is settled: Dr Cash, Cr Trade receivables.
# Step 2: The cash sale
  Dr Cash, Cr Sales.
= Answer: Dr Cash, Cr Sales, Cr Trade receivables
! Crediting sales for the credit customer's payment would count that sale twice.`,
`# Шаг 1: Деньги от покупателя в кредит
  Продажа записана три недели назад (Дт Дебиторы, Кт Продажи).
  Теперь долг погашен: Дт Деньги, Кт Дебиторы.
# Шаг 2: Продажа за наличные
  Дт Деньги, Кт Продажи.
= Ответ: Дт Деньги, Кт Продажи, Кт Дебиторы
! Если записать оплату покупателя в кредит продаж, продажа будет учтена дважды.`,
`# 1-qadam: Kredit xaridoridan pul
  Sotuv uch hafta oldin yozilgan (Dt Debitorlar, Kt Sotuv).
  Endi qarz yopildi: Dt Pul, Kt Debitorlar.
# 2-qadam: Naqd sotuv
  Dt Pul, Kt Sotuv.
= Javob: Dt Pul, Kt Sotuv, Kt Debitorlar
! Kredit xaridorining to'lovini sotuv kreditiga yozsak, sotuv ikki marta hisoblanadi.`),

    q('4.6', 200, 'matrix', `Is each statement about the cash book true or false?`,
      grid(TF, [
        ['A debit entry in the cash book increases an overdraft.', 1],
        ['A debit entry in the cash book increases a positive bank balance.', 0],
      ]),
`A debit in the cash book is money coming IN.
- Money coming in REDUCES an overdraft: FALSE.
- Money coming in INCREASES a positive balance: TRUE.`,
`Дебет в кассовой книге — это поступление денег.
- Поступление УМЕНЬШАЕТ овердрафт: НЕВЕРНО.
- Поступление УВЕЛИЧИВАЕТ положительный остаток: ВЕРНО.`,
`Kassa kitobidagi debet — pul KIRIMI.
- Kirim overdraftni KAMAYTIRADI: NOTO'G'RI.
- Kirim musbat qoldiqni OSHIRADI: TO'G'RI.`),

    q('4.7', 200, 'single', `All entries for the year are in this trade payables account, but it has not been balanced off yet. What is the closing balance?`,
      { table: { head: ['Debit', '$', 'Credit', '$'], rows: [
        ['Cash at bank', '88,640', 'Balance b/d', '213,570'],
        ['', '', 'Purchases', '297,180'],
      ] }, ...pick(['$422,110 debit', '$510,750 debit', '$422,110 credit', '$510,750 credit'], 2) },
`# Step 1: Add up each side
  Credit: 213,570 + 297,180 = 510,750
  Debit: 88,640
# Step 2: The difference is the balance
  510,750 - 88,640 = 422,110
# Step 3: Which side?
  Credits are bigger, so it is a credit balance, as you expect for a liability.
= Answer: $422,110 credit
! $510,750 is the total of the credit side, not the balance.`,
`# Шаг 1: Сложим каждую сторону
  Кредит: 213 570 + 297 180 = 510 750
  Дебет: 88 640
# Шаг 2: Разница и есть остаток
  510 750 - 88 640 = 422 110
# Шаг 3: Какая сторона?
  Кредит больше, значит остаток кредитовый, как и должно быть у обязательства.
= Ответ: $422 110 кредит
! $510 750 — итог кредитовой стороны, а не остаток.`,
`# 1-qadam: Har bir tomonni qo'shamiz
  Kredit: 213 570 + 297 180 = 510 750
  Debet: 88 640
# 2-qadam: Farq — bu qoldiq
  510 750 - 88 640 = 422 110
# 3-qadam: Qaysi tomon?
  Kredit katta, demak qoldiq kredit, majburiyatda shunday bo'lishi kerak.
= Javob: $422 110 kredit
! $510 750 — kredit tomon jami, qoldiq emas.`),

    q('4.8', 200, 'single', `Trade receivables were $12,000 at the start of the year and $10,500 at the end. Total cash received in the year was $93,000, which includes $6,000 from cash sales. What were the credit sales for the year?`,
      pick(['$85,500', '$88,500', '$91,500', '$79,500'], 0),
`# Step 1: Cash from credit customers only
  93,000 - 6,000 = 87,000
# Step 2: Rebuild the receivables account
  Opening 12,000 + credit sales = cash received 87,000 + closing 10,500
# Step 3: Solve
  Credit sales = 87,000 + 10,500 - 12,000 = 85,500
= Answer: $85,500
! Take the cash sales out first. They never went through receivables.`,
`# Шаг 1: Деньги только от покупателей в кредит
  93 000 - 6 000 = 87 000
# Шаг 2: Восстановим счёт дебиторов
  Начало 12 000 + продажи в кредит = получено 87 000 + конец 10 500
# Шаг 3: Решим
  Продажи в кредит = 87 000 + 10 500 - 12 000 = 85 500
= Ответ: $85 500
! Сначала уберите продажи за наличные. Они не проходили через дебиторов.`,
`# 1-qadam: Faqat kredit xaridorlaridan pul
  93 000 - 6 000 = 87 000
# 2-qadam: Debitorlar hisobini tiklaymiz
  Boshi 12 000 + kreditga sotuv = olingan 87 000 + oxiri 10 500
# 3-qadam: Yechamiz
  Kreditga sotuv = 87 000 + 10 500 - 12 000 = 85 500
= Javob: $85 500
! Avval naqd sotuvlarni chiqarib tashlang. Ular debitorlar orqali o'tmagan.`),

    q('4.9', 200, 'single', `A customer buys goods for $140. They pay $60 in cash now and will pay the other $80 in 30 days. What entry does the CUSTOMER make in its own books?`,
      pick([
        'Dr Cash $60, Cr Payables $80, Cr Purchases $140',
        'Dr Payables $80, Dr Cash $60, Cr Purchases $140',
        'Dr Purchases $140, Cr Payables $80, Cr Cash $60',
        'Dr Purchases $140, Cr Cash $140',
      ], 2),
`# Step 1: Whose books?
  The customer's. For them this is a purchase.
# Step 2: The entries
  Dr Purchases $140 (the full cost of the goods)
  Cr Cash $60 (paid now)
  Cr Payables $80 (still owed)
= Answer: Dr Purchases $140, Cr Payables $80, Cr Cash $60
! Check: debits 140 = credits 60 + 80.`,
`# Шаг 1: Чьи книги?
  Покупателя. Для него это закупка.
# Шаг 2: Проводки
  Дт Закупки $140 (полная стоимость товара)
  Кт Деньги $60 (оплачено сейчас)
  Кт Кредиторы $80 (ещё должен)
= Ответ: Дт Закупки $140, Кт Кредиторы $80, Кт Деньги $60
! Проверка: дебет 140 = кредит 60 + 80.`,
`# 1-qadam: Kimning daftari?
  Xaridorning. Uning uchun bu xarid.
# 2-qadam: Yozuvlar
  Dt Xaridlar $140 (tovarning to'liq qiymati)
  Kt Pul $60 (hozir to'langan)
  Kt Kreditorlar $80 (hali qarz)
= Javob: Dt Xaridlar $140, Kt Kreditorlar $80, Kt Pul $60
! Tekshiruv: debet 140 = kredit 60 + 80.`),

    q('4.10', 200, 'single', `Iron Co sells goods for $310 to Copper Co, which will pay in 45 days. How does IRON CO record this?`,
      pick([
        'Dr Receivables $310, Cr Sales $310',
        'Dr Sales $310, Cr Receivables $310',
        'Dr Purchases $310, Cr Payables $310',
        'Dr Payables $310, Cr Purchases $310',
      ], 0),
`# Step 1: Whose books?
  Iron Co is the seller, so this is a credit sale.
# Step 2: The entry
  Dr Receivables $310 (Copper Co owes the money)
  Cr Sales $310 (income earned)
= Answer: Dr Receivables $310, Cr Sales $310
! Purchases and payables are what Copper Co, the buyer, would record.`,
`# Шаг 1: Чьи книги?
  Iron Co — продавец, значит это продажа в кредит.
# Шаг 2: Проводка
  Дт Дебиторы $310 (Copper Co должна деньги)
  Кт Продажи $310 (заработан доход)
= Ответ: Дт Дебиторы $310, Кт Продажи $310
! Закупки и кредиторов записала бы Copper Co, покупатель.`,
`# 1-qadam: Kimning daftari?
  Iron Co — sotuvchi, demak bu kreditga sotuv.
# 2-qadam: Yozuv
  Dt Debitorlar $310 (Copper Co pul qarzdor)
  Kt Sotuv $310 (daromad topildi)
= Javob: Dt Debitorlar $310, Kt Sotuv $310
! Xaridlar va kreditorlarni xaridor Copper Co yozadi.`),

    q('4.11', 200, 'single', `For March: sales $52,000, purchases $27,000, sales returns $3,000 and purchase returns $1,500. Inventory was $4,000 at both the start and the end of the month. What is the gross profit for March?`,
      pick(['$23,500', '$26,500', '$25,000', '$20,500'], 0),
`# Step 1: Net sales
  52,000 - 3,000 sales returns = 49,000
# Step 2: Cost of sales
  Opening inventory 4,000 + purchases 27,000 - purchase returns 1,500 - closing inventory 4,000 = 25,500
# Step 3: Gross profit
  49,000 - 25,500 = 23,500
= Answer: $23,500
! Sales returns come off sales. Purchase returns come off purchases. Swapping them gives $26,500.`,
`# Шаг 1: Чистые продажи
  52 000 - 3 000 возвраты продаж = 49 000
# Шаг 2: Себестоимость продаж
  Запасы на начало 4 000 + закупки 27 000 - возвраты закупок 1 500 - запасы на конец 4 000 = 25 500
# Шаг 3: Валовая прибыль
  49 000 - 25 500 = 23 500
= Ответ: $23 500
! Возвраты продаж вычитают из продаж. Возвраты закупок — из закупок. Если перепутать, выйдет $26 500.`,
`# 1-qadam: Sof sotuv
  52 000 - 3 000 sotuv qaytarishlari = 49 000
# 2-qadam: Sotuv tannarxi
  Boshlang'ich zaxira 4 000 + xaridlar 27 000 - xarid qaytarishlari 1 500 - yakuniy zaxira 4 000 = 25 500
# 3-qadam: Yalpi foyda
  49 000 - 25 500 = 23 500
= Javob: $23 500
! Sotuv qaytarishlari sotuvdan, xarid qaytarishlari xaridlardan ayiriladi. Almashtirsangiz $26 500 chiqadi.`),

    q('4.12', 201, 'single', `A trial balance shows trade receivables of $68,420 and an allowance for receivables of $3,960. How are these shown in the statement of financial position?`,
      pick([
        'An asset of $64,460',
        'An asset of $68,420 and a liability of $3,960',
        'A liability of $64,460',
        'A liability of $68,420 and an asset of $3,960',
      ], 0),
`# Step 1: What the allowance is
  It is the part of receivables not expected to be collected. It is not a debt the business owes.
# Step 2: Net it off
  68,420 - 3,960 = 64,460, shown under current assets
= Answer: an asset of $64,460
! The allowance has a credit balance, but it is not a liability. It reduces the asset.`,
`# Шаг 1: Что такое резерв
  Это часть дебиторки, которую не ожидают получить. Это не долг бизнеса.
# Шаг 2: Свернём
  68 420 - 3 960 = 64 460, в составе оборотных активов
= Ответ: актив $64 460
! У резерва кредитовый остаток, но это не обязательство. Он уменьшает актив.`,
`# 1-qadam: Zaxira nima
  Bu undirilishi kutilmaydigan debitorlik qismi. Bu biznesning qarzi emas.
# 2-qadam: Ayiramiz
  68 420 - 3 960 = 64 460, joriy aktivlar tarkibida
= Javob: $64 460 aktiv
! Zaxiraning qoldig'i kredit, lekin u majburiyat emas. U aktivni kamaytiradi.`),

    q('4.13', 201, 'single', `A trial balance lists debit balances and credit balances. Which statement is correct?`,
      pick([
        'Every debit balance is an expense.',
        'Assets have debit balances.',
        'Liabilities have debit balances.',
        'Income is listed with the debit balances.',
      ], 1),
`Recall which side each kind of balance sits on.
- Debit balances: assets, expenses and drawings. So not every debit is an expense.
- Credit balances: liabilities, income and capital.
= Answer: assets have debit balances`,
`Вспомним, на какой стороне стоит каждый вид остатка.
- Дебетовые остатки: активы, расходы и изъятия. Значит, не каждый дебет — расход.
- Кредитовые остатки: обязательства, доходы и капитал.
= Ответ: у активов дебетовый остаток`,
`Har bir qoldiq turi qaysi tomonda turishini eslaymiz.
- Debet qoldiqlar: aktivlar, xarajatlar va olib qo'yishlar. Demak, har bir debet xarajat emas.
- Kredit qoldiqlar: majburiyatlar, daromadlar va kapital.
= Javob: aktivlarning qoldig'i debet`),

    q('4.14', 201, 'single', `At 31 March a trader has a bank loan of $9,200 and $815 in their bank account. How are these shown in the opening trial balance on 1 April?`,
      pick(['Debit $8,385', 'Credit $8,385', 'Credit $9,200 and debit $815', 'Debit $9,200 and credit $815'], 2),
`# Step 1: The loan
  Money owed, so a liability: credit $9,200.
# Step 2: The bank balance
  Money held, so an asset: debit $815.
# Step 3: Can they be netted?
  No. They are separate accounts, an asset and a liability, and each is shown on its own.
= Answer: credit $9,200 and debit $815`,
`# Шаг 1: Кредит банка
  Деньги к возврату, значит обязательство: кредит $9 200.
# Шаг 2: Остаток в банке
  Деньги в наличии, значит актив: дебет $815.
# Шаг 3: Можно ли свернуть?
  Нет. Это разные счета, актив и обязательство, и каждый показывают отдельно.
= Ответ: кредит $9 200 и дебет $815`,
`# 1-qadam: Bank krediti
  Qaytariladigan pul, demak majburiyat: kredit $9 200.
# 2-qadam: Bankdagi qoldiq
  Mavjud pul, demak aktiv: debet $815.
# 3-qadam: Ayirib bo'ladimi?
  Yo'q. Bular alohida hisoblar, aktiv va majburiyat, har biri alohida ko'rsatiladi.
= Javob: kredit $9 200 va debet $815`),

    q('4.15', 201, 'single', `A trader's ledger balances at 31 October are: sales $231,650; opening inventory $11,280; purchases $128,470; expenses $29,915; non-current assets (carrying amount) $58,340; receivables $27,605; payables $15,230; cash at bank $2,410; capital $11,140. What is the total of the debit balances?`,
      pick(['$255,610', '$245,645', '$269,160', '$258,020'], 3),
`# Step 1: Pick out the debits
  Opening inventory 11,280
  Purchases 128,470
  Expenses 29,915
  Non-current assets 58,340
  Receivables 27,605
  Cash at bank 2,410
# Step 2: Add them up
  11,280 + 128,470 + 29,915 + 58,340 + 27,605 + 2,410 = 258,020
# Step 3: Check against the credits
  Sales 231,650 + payables 15,230 + capital 11,140 = 258,020. They agree.
= Answer: $258,020`,
`# Шаг 1: Выберем дебетовые
  Запасы на начало 11 280
  Закупки 128 470
  Расходы 29 915
  Внеоборотные активы 58 340
  Дебиторы 27 605
  Деньги в банке 2 410
# Шаг 2: Сложим
  11 280 + 128 470 + 29 915 + 58 340 + 27 605 + 2 410 = 258 020
# Шаг 3: Сверим с кредитом
  Продажи 231 650 + кредиторы 15 230 + капитал 11 140 = 258 020. Сходится.
= Ответ: $258 020`,
`# 1-qadam: Debetlarni ajratamiz
  Boshlang'ich zaxira 11 280
  Xaridlar 128 470
  Xarajatlar 29 915
  Uzoq muddatli aktivlar 58 340
  Debitorlar 27 605
  Bankdagi pul 2 410
# 2-qadam: Qo'shamiz
  11 280 + 128 470 + 29 915 + 58 340 + 27 605 + 2 410 = 258 020
# 3-qadam: Kredit bilan solishtiramiz
  Sotuv 231 650 + kreditorlar 15 230 + kapital 11 140 = 258 020. Mos keldi.
= Javob: $258 020`),

    q('4.16', 201, 'single', `A trial balance includes: machinery at cost $14,300; accumulated depreciation $9,620; inventory $6,480; trade receivables $12,935; trade payables $8,410; bank overdraft $1,940; cash at bank $230. What is the total of current assets?`,
      pick(['$19,645', '$19,415', '$17,705', '$24,325'], 0),
`# Step 1: Pick out the current assets
  Inventory 6,480
  Trade receivables 12,935
  Cash at bank 230
# Step 2: Add them up
  6,480 + 12,935 + 230 = 19,645
= Answer: $19,645
! Machinery is a non-current asset. The overdraft is a current liability and is not deducted here.`,
`# Шаг 1: Выберем оборотные активы
  Запасы 6 480
  Дебиторы 12 935
  Деньги в банке 230
# Шаг 2: Сложим
  6 480 + 12 935 + 230 = 19 645
= Ответ: $19 645
! Оборудование — внеоборотный актив. Овердрафт — краткосрочное обязательство, его здесь не вычитают.`,
`# 1-qadam: Joriy aktivlarni ajratamiz
  Zaxira 6 480
  Debitorlar 12 935
  Bankdagi pul 230
# 2-qadam: Qo'shamiz
  6 480 + 12 935 + 230 = 19 645
= Javob: $19 645
! Uskuna — uzoq muddatli aktiv. Overdraft — joriy majburiyat, bu yerda ayirilmaydi.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
