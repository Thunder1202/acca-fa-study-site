'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 26 (incomplete
// records), reworded with new figures. bppRef/bppPage point to BPP's own answer. BPP's answers use "control
// accounts"; here the same working is shown as the receivables and payables ledger accounts Kaplan uses.
// Left out as repeats: 26.13 and 26.15 (same skill as 26.1).
(function () {
  const TOPIC = 'chapter-16';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp16-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });

  const questions = [
    q('26.1', 253, 'single', `A business has: opening inventory $294,600; purchases $812,000; closing inventory $318,400. Gross profit is always 30% of sales. What is sales revenue for the year?`,
      pick(['$1,126,000', '$1,024,660', '$788,200', '$1,182,300'], 0),
`# Step 1: Cost of sales
  294,600 + 812,000 - 318,400 = 788,200
# Step 2: Cost of sales as a % of sales
  Margin 30%, so cost of sales = 70% of sales
# Step 3: Sales
  788,200 / 0.70 = 1,126,000
= Answer: $1,126,000
! 788,200 x 1.30 = 1,024,660 treats 30% as a mark-up on cost. It is a margin on SALES.`,
`# Шаг 1: Себестоимость продаж
  294 600 + 812 000 - 318 400 = 788 200
# Шаг 2: Себестоимость как % продаж
  Маржа 30%, значит себестоимость = 70% продаж
# Шаг 3: Продажи
  788 200 / 0,70 = 1 126 000
= Ответ: $1 126 000
! 788 200 x 1,30 = 1 024 660 — это наценка на себестоимость. Здесь маржа от ПРОДАЖ.`,
`# 1-qadam: Sotuv tannarxi
  294 600 + 812 000 - 318 400 = 788 200
# 2-qadam: Tannarx sotuvning necha %
  Marja 30%, demak tannarx = sotuvning 70%
# 3-qadam: Sotuv
  788 200 / 0,70 = 1 126 000
= Javob: $1 126 000
! 788 200 x 1,30 = 1 024 660 — bu tannarxga ustama. Bu yerda SOTUVdan marja.`),

    q('26.2', 253, 'single', `No accounting records were kept. Which calculation gives an acceptable figure for the trader's profit for the period?`,
      pick([
        'Closing net assets + drawings - capital introduced - opening net assets',
        'Closing net assets - drawings + capital introduced - opening net assets',
        'Closing net assets - drawings - capital introduced - opening net assets',
        'Closing net assets + drawings + capital introduced - opening net assets',
      ], 0),
`# Step 1: What changes net assets?
  Closing = opening + capital introduced + profit - drawings
# Step 2: Get profit on its own
  Profit = closing - opening - capital introduced + drawings
= Answer: closing net assets + drawings - capital introduced - opening net assets
! Drawings took value OUT, so add them back. New capital put value IN without any profit, so take it off.`,
`# Шаг 1: Что меняет чистые активы?
  Конец = начало + вложенный капитал + прибыль - изъятия
# Шаг 2: Выразим прибыль
  Прибыль = конец - начало - вложенный капитал + изъятия
= Ответ: чистые активы на конец + изъятия - вложенный капитал - чистые активы на начало
! Изъятия ВЫВЕЛИ ценность, их прибавляют назад. Новый капитал ВНЁС ценность без прибыли, его вычитают.`,
`# 1-qadam: Sof aktivlarni nima o'zgartiradi?
  Oxiri = boshi + kiritilgan kapital + foyda - olib qo'yishlar
# 2-qadam: Foydani alohida chiqaramiz
  Foyda = oxiri - boshi - kiritilgan kapital + olib qo'yishlar
= Javob: yakuniy sof aktivlar + olib qo'yishlar - kiritilgan kapital - boshlang'ich sof aktivlar
! Olib qo'yishlar qiymatni CHIQARGAN, ular qaytarib qo'shiladi. Yangi kapital foydasiz qiymat KIRITGAN, u ayiriladi.`),

    q('26.3', 253, 'single', `A shop owner sets prices to earn a gross profit of 35% of sales. All sales are for cash. She thinks a staff member is stealing cash. For the month, recorded sales are $142,800 and cost of sales (correct) is $96,200. How much cash could have been taken?`,
      pick(['$5,200', '$3,380', '$46,600', 'It cannot be worked out from this information'], 0),
`# Step 1: What sales SHOULD be
  Cost of sales is 65% of sales: 96,200 / 0.65 = 148,000
# Step 2: Compare with what was recorded
  148,000 - 142,800 = 5,200
= Answer: $5,200`,
`# Шаг 1: Какими ДОЛЖНЫ быть продажи
  Себестоимость = 65% продаж: 96 200 / 0,65 = 148 000
# Шаг 2: Сравним с записанным
  148 000 - 142 800 = 5 200
= Ответ: $5 200`,
`# 1-qadam: Sotuv qancha BO'LISHI kerak
  Tannarx sotuvning 65%: 96 200 / 0,65 = 148 000
# 2-qadam: Yozilgani bilan solishtiramiz
  148 000 - 142 800 = 5 200
= Javob: $5 200`),

    q('26.4', 253, 'number', `A sole trader without full records gives these figures for the year: receivables at the start $95,000 and at the end $128,000; payables at the start $48,000 and at the end $61,500; cash received from customers $512,400; cash paid to suppliers $236,500; discounts received $2,300; irrecoverable debts written off $3,700; a $1,800 balance owed by a customer who is also a supplier was set off (contra) against the amount owed to him. What is sales revenue? (in $)`,
      amount(550900, '$550,900'),
`Rebuild the receivables account. Sales is the missing figure.
# Step 1: Credits (what reduced receivables)
  Cash received 512,400 + irrecoverable debts 3,700 + contra 1,800 + closing balance 128,000 = 645,900
# Step 2: Debits
  Opening balance 95,000 + sales ?
# Step 3: Solve
  Sales = 645,900 - 95,000 = 550,900
= Answer: $550,900`,
`Восстановим счёт дебиторов. Продажи — недостающая сумма.
# Шаг 1: Кредит (что уменьшило дебиторов)
  Получено 512 400 + безнадёжные долги 3 700 + взаимозачёт 1 800 + остаток на конец 128 000 = 645 900
# Шаг 2: Дебет
  Остаток на начало 95 000 + продажи ?
# Шаг 3: Решим
  Продажи = 645 900 - 95 000 = 550 900
= Ответ: $550 900`,
`Debitorlar hisobini tiklaymiz. Sotuv — yetishmayotgan summa.
# 1-qadam: Kredit (debitorlarni nima kamaytirdi)
  Olingan 512 400 + umidsiz qarzlar 3 700 + o'zaro hisob 1 800 + yakuniy qoldiq 128 000 = 645 900
# 2-qadam: Debet
  Boshlang'ich qoldiq 95 000 + sotuv ?
# 3-qadam: Yechamiz
  Sotuv = 645 900 - 95 000 = 550 900
= Javob: $550 900`),

    q('26.5', 254, 'single', `Same trader as the last question. What figure goes into the statement of profit or loss for purchases?`,
      pick(['$254,100', '$251,800', '$252,300', '$250,000'], 0),
`Rebuild the payables account. Purchases is the missing figure.
# Step 1: Debits (what reduced payables)
  Cash paid 236,500 + discounts received 2,300 + contra 1,800 + closing balance 61,500 = 302,100
# Step 2: Credits
  Opening balance 48,000 + purchases ?
# Step 3: Solve
  Purchases = 302,100 - 48,000 = 254,100
= Answer: $254,100
! The contra appears in BOTH accounts: it reduces what the customer owes and what is owed to him as a supplier.`,
`Восстановим счёт кредиторов. Закупки — недостающая сумма.
# Шаг 1: Дебет (что уменьшило кредиторов)
  Оплачено 236 500 + полученные скидки 2 300 + взаимозачёт 1 800 + остаток на конец 61 500 = 302 100
# Шаг 2: Кредит
  Остаток на начало 48 000 + закупки ?
# Шаг 3: Решим
  Закупки = 302 100 - 48 000 = 254 100
= Ответ: $254 100
! Взаимозачёт есть в ОБОИХ счетах: он уменьшает и долг покупателя, и наш долг ему как поставщику.`,
`Kreditorlar hisobini tiklaymiz. Xaridlar — yetishmayotgan summa.
# 1-qadam: Debet (kreditorlarni nima kamaytirdi)
  To'langan 236 500 + olingan chegirmalar 2 300 + o'zaro hisob 1 800 + yakuniy qoldiq 61 500 = 302 100
# 2-qadam: Kredit
  Boshlang'ich qoldiq 48 000 + xaridlar ?
# 3-qadam: Yechamiz
  Xaridlar = 302 100 - 48 000 = 254 100
= Javob: $254 100
! O'zaro hisob IKKALA hisobda bor: u xaridor qarzini ham, unga yetkazib beruvchi sifatidagi qarzimizni ham kamaytiradi.`),

    q('26.6', 254, 'single', `A trader adds 25% to cost to set her selling prices. On the last day of the year a fire destroyed much of her inventory. Her figures: sales $240,000; opening inventory at cost $150,000; purchases $210,000; inventory left after the fire, at cost, $120,000. What inventory was lost in the fire?`,
      pick(['$48,000', '$60,000', '$72,000', '$30,000'], 0),
`# Step 1: What cost of sales SHOULD be
  Mark-up 25% on cost, so sales = 125% of cost
  240,000 / 1.25 = 192,000
# Step 2: Inventory that should be left
  150,000 + 210,000 - 192,000 = 168,000
# Step 3: Compare with what is left
  168,000 - 120,000 = 48,000
= Answer: $48,000
! Using 25% as a margin (240,000 x 75% = 180,000) gives the $60,000 trap.`,
`# Шаг 1: Какой ДОЛЖНА быть себестоимость
  Наценка 25% на себестоимость, продажи = 125% себестоимости
  240 000 / 1,25 = 192 000
# Шаг 2: Сколько запасов должно остаться
  150 000 + 210 000 - 192 000 = 168 000
# Шаг 3: Сравним с оставшимся
  168 000 - 120 000 = 48 000
= Ответ: $48 000
! Если взять 25% как маржу (240 000 x 75% = 180 000), выйдет ловушка $60 000.`,
`# 1-qadam: Tannarx qancha BO'LISHI kerak
  Tannarxga 25% ustama, sotuv = tannarxning 125%
  240 000 / 1,25 = 192 000
# 2-qadam: Qancha zaxira qolishi kerak
  150 000 + 210 000 - 192 000 = 168 000
# 3-qadam: Qolgani bilan solishtiramiz
  168 000 - 120 000 = 48 000
= Javob: $48 000
! 25% ni marja deb olsangiz (240 000 x 75% = 180 000), $60 000 tuzog'i chiqadi.`),

    q('26.7', 254, 'single', `A fire on 31 March destroyed some of a company's inventory and its records. Inventory on 1 March $264,000; March sales $520,000; March purchases $348,000; inventory still in good condition $175,000. Gross profit is normally 20% of sales. What inventory was lost?`,
      pick(['$21,000', '$104,000', '$437,000', '$65,000'], 0),
`# Step 1: Expected cost of sales
  Cost = 80% of sales: 520,000 x 80% = 416,000
# Step 2: Inventory that should be left
  264,000 + 348,000 - 416,000 = 196,000
# Step 3: Compare with what is left
  196,000 - 175,000 = 21,000
= Answer: $21,000`,
`# Шаг 1: Ожидаемая себестоимость
  Себестоимость = 80% продаж: 520 000 x 80% = 416 000
# Шаг 2: Сколько должно остаться
  264 000 + 348 000 - 416 000 = 196 000
# Шаг 3: Сравним с оставшимся
  196 000 - 175 000 = 21 000
= Ответ: $21 000`,
`# 1-qadam: Kutilgan tannarx
  Tannarx = sotuvning 80%: 520 000 x 80% = 416 000
# 2-qadam: Qancha qolishi kerak
  264 000 + 348 000 - 416 000 = 196 000
# 3-qadam: Qolgani bilan solishtiramiz
  196 000 - 175 000 = 21 000
= Javob: $21 000`),

    q('26.8', 254, 'single', `A business's bank balance rose by $420,000 in the year. In the same year it issued shares for $800,000, repaid a loan of $500,000, bought non-current assets for $260,000 and charged depreciation of $90,000. Working capital other than the bank rose by $310,000. What was profit for the year?`,
      pick(['$600,000', '$690,000', '$510,000', '$910,000'], 0),
`Work from profit to the change in the bank balance, then solve for profit.
# Step 1: The link
  Profit + depreciation (no cash) + share issue - loan repaid - assets bought - rise in working capital = rise in bank
# Step 2: Put in the figures
  Profit + 90,000 + 800,000 - 500,000 - 260,000 - 310,000 = 420,000
  Profit - 180,000 = 420,000
# Step 3: Solve
  Profit = 600,000
= Answer: $600,000`,
`Свяжем прибыль с изменением банка и найдём прибыль.
# Шаг 1: Связь
  Прибыль + амортизация (без денег) + выпуск акций - погашение займа - покупка активов - рост оборотного капитала = рост банка
# Шаг 2: Подставим
  Прибыль + 90 000 + 800 000 - 500 000 - 260 000 - 310 000 = 420 000
  Прибыль - 180 000 = 420 000
# Шаг 3: Решим
  Прибыль = 600 000
= Ответ: $600 000`,
`Foydani bank o'zgarishi bilan bog'lab, foydani topamiz.
# 1-qadam: Bog'lanish
  Foyda + amortizatsiya (pulsiz) + aksiya chiqarish - qarz qaytarish - aktiv xaridi - aylanma kapital o'sishi = bank o'sishi
# 2-qadam: Raqamlarni qo'yamiz
  Foyda + 90 000 + 800 000 - 500 000 - 260 000 - 310 000 = 420 000
  Foyda - 180 000 = 420 000
# 3-qadam: Yechamiz
  Foyda = 600 000
= Javob: $600 000`),

    q('26.9', 255, 'single', `A sole trader's profit for the year was $41,800, after deducting "wages" of $150 a week (52 weeks) paid to himself. He also put his home phone bill through the business: $500 plus sales tax at 20%. He is registered for sales tax, so only the net $500 was charged in profit or loss. His capital at the start of the year was $9,200. What is his capital at the end of the year?`,
      pick(['$50,900', '$51,000', '$43,100', '$58,800'], 0),
`# Step 1: Correct the profit
  Owner's wages are drawings, not an expense: + 7,800
  The private phone bill is not a business expense: + 500
  Correct profit: 41,800 + 7,800 + 500 = 50,100
# Step 2: Drawings
  Wages 7,800 + phone bill including tax 600 = 8,400
  The $100 tax cannot be reclaimed, because the bill was not a business cost.
# Step 3: Closing capital
  9,200 + 50,100 - 8,400 = 50,900
= Answer: $50,900
! A quicker route: 9,200 + 41,800 - 100 = 50,900. Moving the wages and the $500 changes profit and drawings by the same amount, so only the $100 tax is left over.`,
`# Шаг 1: Исправим прибыль
  «Зарплата» владельца — изъятия, а не расход: + 7 800
  Личный телефон — не расход бизнеса: + 500
  Верная прибыль: 41 800 + 7 800 + 500 = 50 100
# Шаг 2: Изъятия
  Зарплата 7 800 + телефон с налогом 600 = 8 400
  Налог $100 возместить нельзя, ведь счёт не был затратой бизнеса.
# Шаг 3: Капитал на конец
  9 200 + 50 100 - 8 400 = 50 900
= Ответ: $50 900
! Короткий путь: 9 200 + 41 800 - 100 = 50 900. Перенос зарплаты и $500 меняет прибыль и изъятия на одну сумму, остаётся только налог $100.`,
`# 1-qadam: Foydani tuzatamiz
  Egasining «maoshi» — olib qo'yish, xarajat emas: + 7 800
  Shaxsiy telefon biznes xarajati emas: + 500
  To'g'ri foyda: 41 800 + 7 800 + 500 = 50 100
# 2-qadam: Olib qo'yishlar
  Maosh 7 800 + soliq bilan telefon 600 = 8 400
  $100 soliqni qaytarib bo'lmaydi, chunki hisob biznes xarajati emas edi.
# 3-qadam: Yakuniy kapital
  9 200 + 50 100 - 8 400 = 50 900
= Javob: $50 900
! Qisqa yo'l: 9 200 + 41 800 - 100 = 50 900. Maosh va $500 ni ko'chirish foyda va olib qo'yishlarni bir xil summaga o'zgartiradi, faqat $100 soliq qoladi.`),

    q('26.10', 255, 'number', `A trader without proper records gives these figures for the year: payables at the start $142,600 and at the end $158,300; payments to suppliers $913,700; cash refunds received from suppliers $3,100; discounts received $12,400; goods costing $1,500 taken from inventory for her own use. What figure for purchases goes into her financial statements? (in $)`,
      amount(937200, '$937,200'),
`# Step 1: Rebuild the payables account
  Debits: payments 913,700 + discounts 12,400 + closing balance 158,300 = 1,084,400
  Credits: opening balance 142,600 + refunds received 3,100 + purchases ?
  Purchases on credit = 1,084,400 - 142,600 - 3,100 = 938,700
# Step 2: Goods taken by the owner
  Dr Drawings 1,500, Cr Purchases 1,500
  938,700 - 1,500 = 937,200
= Answer: $937,200
! A cash refund FROM a supplier puts money back in, so it sits on the opposite side to payments.`,
`# Шаг 1: Восстановим счёт кредиторов
  Дебет: оплачено 913 700 + скидки 12 400 + остаток на конец 158 300 = 1 084 400
  Кредит: остаток на начало 142 600 + возвраты от поставщиков 3 100 + закупки ?
  Закупки в кредит = 1 084 400 - 142 600 - 3 100 = 938 700
# Шаг 2: Товары, взятые владельцем
  Дт Изъятия 1 500, Кт Закупки 1 500
  938 700 - 1 500 = 937 200
= Ответ: $937 200
! Возврат денег ОТ поставщика — поступление, он стоит на стороне, противоположной платежам.`,
`# 1-qadam: Kreditorlar hisobini tiklaymiz
  Debet: to'langan 913 700 + chegirmalar 12 400 + yakuniy qoldiq 158 300 = 1 084 400
  Kredit: boshlang'ich qoldiq 142 600 + yetkazib beruvchidan qaytgan pul 3 100 + xaridlar ?
  Kreditga xaridlar = 1 084 400 - 142 600 - 3 100 = 938 700
# 2-qadam: Egasi olgan tovarlar
  Dt Olib qo'yishlar 1 500, Kt Xaridlar 1 500
  938 700 - 1 500 = 937 200
= Javob: $937 200
! Yetkazib beruvchiDAN qaytgan pul — kirim, u to'lovlarga qarama-qarshi tomonda turadi.`),

    q('26.11', 255, 'single', `A trader sets prices for a gross profit of 25% of sales. For the year: opening inventory $186,000; closing inventory $201,500; purchases $642,300; purchase returns $38,800. What are sales for the year?`,
      pick(['$784,000', '$735,000', '$835,733', '$588,000'], 0),
`# Step 1: Cost of sales
  186,000 + 642,300 - 38,800 - 201,500 = 588,000
# Step 2: Sales
  Cost of sales is 75% of sales: 588,000 / 0.75 = 784,000
= Answer: $784,000
! Forgetting the purchase returns gives the $835,733 trap.`,
`# Шаг 1: Себестоимость продаж
  186 000 + 642 300 - 38 800 - 201 500 = 588 000
# Шаг 2: Продажи
  Себестоимость = 75% продаж: 588 000 / 0,75 = 784 000
= Ответ: $784 000
! Если забыть возвраты закупок, выйдет ловушка $835 733.`,
`# 1-qadam: Sotuv tannarxi
  186 000 + 642 300 - 38 800 - 201 500 = 588 000
# 2-qadam: Sotuv
  Tannarx sotuvning 75%: 588 000 / 0,75 = 784 000
= Javob: $784 000
! Xarid qaytarishlarini unutsangiz, $835 733 tuzog'i chiqadi.`),

    q('26.12', 255, 'single', `In a sole trader's first year: cash received from credit customers and paid into the bank $296,400; expenses paid out of customers' cash before banking $5,200; cash sales $84,700; irrecoverable debts written off $4,900; receivables at the year end nil. What is sales revenue?`,
      pick(['$391,200', '$381,100', '$296,400', '$386,300'], 0),
`Add up every way a sale was settled or written off.
# Step 1: Credit sales
  Banked 296,400 + spent before banking 5,200 + written off 4,900 = 306,500
  No opening or closing receivables, so this is all of credit sales.
# Step 2: Add cash sales
  306,500 + 84,700 = 391,200
= Answer: $391,200
! Customer cash spent before it reached the bank was still received from customers.`,
`Сложим все способы погашения или списания продаж.
# Шаг 1: Продажи в кредит
  В банк 296 400 + потрачено до банка 5 200 + списано 4 900 = 306 500
  Дебиторов на начало и конец нет, значит это все продажи в кредит.
# Шаг 2: Прибавим продажи за наличные
  306 500 + 84 700 = 391 200
= Ответ: $391 200
! Деньги покупателей, потраченные до банка, всё равно получены от покупателей.`,
`Sotuv yopilgan yoki hisobdan chiqarilgan barcha yo'llarni qo'shamiz.
# 1-qadam: Kreditga sotuv
  Bankka 296 400 + bankkacha sarflangan 5 200 + hisobdan chiqarilgan 4 900 = 306 500
  Boshida va oxirida debitor yo'q, demak bu barcha kreditga sotuv.
# 2-qadam: Naqd sotuvni qo'shamiz
  306 500 + 84 700 = 391 200
= Javob: $391 200
! Bankka yetmasdan sarflangan xaridor puli baribir xaridorlardan olingan.`),

    q('26.14', 255, 'single', `On 31 December a fire destroyed all of a company's inventory. Inventory on 1 December $31,500; December purchases $52,800; December sales $70,500; gross profit is normally 40% of sales. How much inventory was destroyed?`,
      pick(['$42,000', '$28,200', '$13,800', '$49,800'], 0),
`# Step 1: Cost of December's sales
  Cost = 60% of sales: 70,500 x 60% = 42,300
# Step 2: Inventory that should be left
  31,500 + 52,800 - 42,300 = 42,000
# Step 3: All of it was destroyed
= Answer: $42,000`,
`# Шаг 1: Себестоимость продаж декабря
  Себестоимость = 60% продаж: 70 500 x 60% = 42 300
# Шаг 2: Сколько должно остаться
  31 500 + 52 800 - 42 300 = 42 000
# Шаг 3: Всё это уничтожено
= Ответ: $42 000`,
`# 1-qadam: Dekabr sotuvi tannarxi
  Tannarx = sotuvning 60%: 70 500 x 60% = 42 300
# 2-qadam: Qancha qolishi kerak
  31 500 + 52 800 - 42 300 = 42 000
# 3-qadam: Hammasi yo'q bo'lgan
= Javob: $42 000`),

    q('26.16', 256, 'single', `A trader keeps no records. Net assets were $185,000 at the start of the year and $352,000 at the end. Drawings were $41,000 and she put in new capital of $90,000. What was her profit for the year?`,
      pick(['$118,000', '$298,000', '$36,000', '$216,000'], 0),
`# Step 1: Change in net assets
  352,000 - 185,000 = 167,000
# Step 2: Profit
  Change + drawings - capital introduced
  167,000 + 41,000 - 90,000 = 118,000
= Answer: $118,000`,
`# Шаг 1: Изменение чистых активов
  352 000 - 185 000 = 167 000
# Шаг 2: Прибыль
  Изменение + изъятия - вложенный капитал
  167 000 + 41 000 - 90 000 = 118 000
= Ответ: $118 000`,
`# 1-qadam: Sof aktivlar o'zgarishi
  352 000 - 185 000 = 167 000
# 2-qadam: Foyda
  O'zgarish + olib qo'yishlar - kiritilgan kapital
  167 000 + 41 000 - 90 000 = 118 000
= Javob: $118 000`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
