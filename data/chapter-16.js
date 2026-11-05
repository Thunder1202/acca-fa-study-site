'use strict';

const chapter16 = {
  id: 'chapter-16',
  titles: { en: 'Incomplete records', ru: 'Неполные записи', uz: 'To\'liq bo\'lmagan yozuvlar' },
  objectives: [
    {
      en: 'Use the accounting equation to find a missing profit',
      ru: 'Использовать бухгалтерское уравнение, чтобы найти неизвестную прибыль',
      uz: 'Yetishmagan foydani hisob tenglamasi bilan topish',
    },
    {
      en: 'Use ledger accounts to find missing figures',
      ru: 'Использовать счета, чтобы найти недостающие суммы',
      uz: 'Yetishmagan summalarni hisoblar bilan topish',
    },
    {
      en: 'Use cash and bank summaries',
      ru: 'Использовать сводки кассы и банка',
      uz: 'Kassa va bank jamlanmalaridan foydalanish',
    },
    {
      en: 'Use margin and mark-up to find missing figures',
      ru: 'Использовать маржу и наценку для нахождения сумм',
      uz: 'Yetishmagan summalarni marja va ustama bilan topish',
    },
    {
      en: 'Calculate and record lost inventory',
      ru: 'Рассчитывать и отражать потерянные запасы',
      uz: 'Yo\'qolgan zaxirani hisoblash va qayd etish',
    },
  ],
  sections: [
    {
      key: {
        en: `- Incomplete records means some of the figures are missing or lost.
- Four tools: the accounting equation, ledger accounts, cash summaries and profit ratios.
- If almost nothing was kept, use the accounting equation.
- Net assets = capital, so the change in net assets reveals profit.
- Closing net assets = opening net assets + capital introduced + profit - drawings.
- Drawings include goods taken as well as cash taken.`,
        ru: `- Неполные записи: часть цифр отсутствует или утеряна.
- Четыре инструмента: уравнение, счета, сводки денег и показатели прибыли.
- Если записей почти нет, используйте бухгалтерское уравнение.
- Чистые активы = капитал, поэтому их изменение показывает прибыль.
- Чистые активы на конец = на начало + внесённый капитал + прибыль - изъятия.
- Изъятия включают товар и деньги.`,
        uz: `- To'liq bo'lmagan yozuvlar: ba'zi raqamlar yo'q yoki yo'qolgan.
- To'rt vosita: tenglama, hisoblar, pul jamlanmalari va foyda ko'rsatkichlari.
- Deyarli yozuv bo'lmasa, hisob tenglamasini ishlating.
- Sof aktivlar = kapital, shuning uchun ularning o'zgarishi foydani ko'rsatadi.
- Yakuniy sof aktivlar = boshlang'ich + kiritilgan kapital + foyda - olib qo'yishlar.
- Olib qo'yishlar pul va tovarni o'z ichiga oladi.`,
      },
      exam: {
        en: `- For a company: closing retained earnings = opening retained earnings + profit - dividends.
- Total assets = share capital + retained earnings + other reserves + total liabilities.
- Lottery winnings or other money the owner puts in are capital introduced, not profit.
- Work out opening and closing net assets first, then rearrange.`,
        ru: `- Для компании: нераспределённая прибыль на конец = на начало + прибыль - дивиденды.
- Итог активов = акционерный капитал + нераспределённая прибыль + прочие резервы + итог обязательств.
- Выигрыш в лотерею и другие деньги владельца — внесённый капитал, а не прибыль.
- Сначала найдите чистые активы на начало и конец, затем преобразуйте формулу.`,
        uz: `- Kompaniya uchun: yakuniy taqsimlanmagan foyda = boshlang'ich + foyda - dividendlar.
- Jami aktivlar = aksiya kapitali + taqsimlanmagan foyda + boshqa rezervlar + jami majburiyatlar.
- Lotereya yutug'i va egasi kiritgan boshqa pul foyda emas, kiritilgan kapital.
- Avval boshlang'ich va yakuniy sof aktivlarni toping, keyin formulani o'zgartiring.`,
      },
      heading: {
        en: 'Using the accounting equation',
        ru: 'Использование бухгалтерского уравнения',
        uz: 'Hisob tenglamasidan foydalanish',
      },
      body: {
        en: `When preparing accounts you may not have everything you need. Records may be poor, or lost in a fire or a computer failure. You then use the best information available and work out what is missing. There are four approaches: the accounting equation, the balancing figure in a ledger account, cash and bank data, and profit ratios.

If very little was recorded, it may only be possible to find profit for the year. The accounting equation says assets equal equity plus liabilities. By valuing closing assets and liabilities you find closing equity. If you also know the opening figure, the change must be explained by profit, new capital and what the owner took out.

For a company the same idea uses retained earnings. Find closing retained earnings from assets, liabilities and share capital. Compare it with last year's figure, adjust for dividends, and what remains is the profit or loss.`,
        ru: `При подготовке отчётности может не хватать данных. Записи могут быть плохими или утраченными при пожаре или сбое компьютера. Тогда используют лучшую доступную информацию и находят недостающее. Подходов четыре: бухгалтерское уравнение, балансирующая цифра на счёте, данные денег и банка и показатели прибыли.

Если записано очень мало, можно найти только прибыль за год. Уравнение говорит: активы равны капиталу плюс обязательства. Оценив активы и обязательства на конец, вы находите капитал на конец. Если известна и цифра на начало, изменение объясняется прибылью, новым капиталом и тем, что взял владелец.

Для компании та же идея работает через нераспределённую прибыль. Найдите её на конец из активов, обязательств и акционерного капитала. Сравните с прошлым годом, учтите дивиденды, и останется прибыль или убыток.`,
        uz: `Hisobot tayyorlashda hamma narsa bo'lmasligi mumkin. Yozuvlar yomon yoki yong'in yoxud kompyuter buzilishida yo'qolgan bo'lishi mumkin. Unda mavjud eng yaxshi ma'lumotdan foydalanib, yetishmaganini topasiz. To'rt yondashuv bor: hisob tenglamasi, hisobdagi balanslovchi summa, pul va bank ma'lumotlari va foyda ko'rsatkichlari.

Juda oz yozuv bo'lsa, faqat yil foydasini topish mumkin. Tenglama aktivlar kapital plus majburiyatlarga teng deydi. Yakuniy aktiv va majburiyatlarni baholab, yakuniy kapitalni topasiz. Boshlang'ich raqam ham ma'lum bo'lsa, o'zgarish foyda, yangi kapital va egasi olgani bilan tushuntiriladi.

Kompaniya uchun xuddi shu g'oya taqsimlanmagan foyda orqali ishlaydi. Uni aktivlar, majburiyatlar va aksiya kapitalidan toping. O'tgan yil bilan solishtiring, dividendlarni hisobga oling, qolgani foyda yoki zarar.`,
      },
      example: {
        en: `A flood ruined a market stall owner's records for one year.
# What we know
  Net assets at the start $15,000, at the end $19,000
  The owner paid in $2,000 of savings and took out $6,000
# The capital line
  Opening $15,000 + paid in $2,000 + profit - taken out $6,000 = closing $19,000
# Solve for profit
  $19,000 - $15,000 - $2,000 + $6,000 = $8,000
= Profit for the year: $8,000`,
        ru: `Наводнение испортило записи владельца рыночного прилавка за год.
# Что известно
  Чистые активы на начало $15,000, на конец $19,000
  Владелец внёс $2,000 сбережений и забрал $6,000
# Строка капитала
  Начало $15,000 + внесено $2,000 + прибыль - забрано $6,000 = конец $19,000
# Находим прибыль
  $19,000 - $15,000 - $2,000 + $6,000 = $8,000
= Прибыль за год: $8,000`,
        uz: `Suv toshqini bozor rastasi egasining bir yillik yozuvlarini buzdi.
# Nima ma'lum
  Boshidagi sof aktivlar $15,000, oxiridagi $19,000
  Egasi $2,000 jamg'armani kiritdi va $6,000 oldi
# Kapital qatori
  Boshi $15,000 + kiritilgan $2,000 + foyda - olingan $6,000 = oxiri $19,000
# Foydani topamiz
  $19,000 - $15,000 - $2,000 + $6,000 = $8,000
= Yil foydasi: $8,000`,
      },
      simple: {
        en: `Sometimes the records are poor or lost (a fire, a flood, a broken computer). You still have to find the missing figures. Four tools help: the accounting equation, a T-account, cash records and profit percentages.

If almost nothing was kept, use the accounting equation. Capital equals net assets. So if you know net assets at the start and the end, the change is explained by three things: profit, money the owner put in, and money or goods the owner took out.`,
        ru: `Иногда записи плохие или утеряны (пожар, наводнение, сломанный компьютер). Недостающие цифры всё равно нужно найти. Помогают четыре инструмента: уравнение баланса, T-счёт, кассовые записи и процент прибыли.

Если почти ничего не сохранилось, используйте уравнение баланса. Капитал равен чистым активам. Если знать чистые активы на начало и конец, изменение объясняют три вещи: прибыль, деньги, внесённые владельцем, и деньги или товар, взятые владельцем.`,
        uz: `Ba'zan yozuvlar yomon yoki yo'qolgan (yong'in, suv toshqini, buzilgan kompyuter). Yetishmayotgan sonlarni baribir topish kerak. To'rt vosita yordam beradi: buxgalteriya tenglamasi, T-hisob, kassa yozuvlari va foyda foizlari.

Agar deyarli hech narsa saqlanmagan bo'lsa, buxgalteriya tenglamasidan foydalaning. Kapital sof aktivlarga teng. Boshi va oxiridagi sof aktivlarni bilsangiz, o'zgarishni uch narsa tushuntiradi: foyda, egasi kiritgan pul va egasi olgan pul yoki tovar.`,
      },
    },
    {
      key: {
        en: `- Set up a T-account and let the missing figure be the balancing amount.
- Receivables give credit sales or cash received from customers.
- Payables give credit purchases or cash paid to suppliers.
- Cash and bank accounts give drawings, cash sales or money stolen.
- Revenue = credit sales + cash sales.
- An expense = amount paid + closing accrual - opening accrual, with prepayments the other way.`,
        ru: `- Составьте Т-счёт, и недостающая сумма будет балансирующей.
- Дебиторы дают продажи в кредит или деньги от покупателей.
- Кредиторы дают закупки в кредит или выплаты поставщикам.
- Счета кассы и банка дают изъятия, продажи за наличные или украденное.
- Выручка = продажи в кредит + за наличные.
- Расход = уплачено + начисление на конец - на начало, с предоплатой наоборот.`,
        uz: `- T-hisob tuzing, yetishmagan summa balanslovchi bo'ladi.
- Debitorlar nasiya sotuv yoki mijozlardan pulni beradi.
- Kreditorlar nasiya xarid yoki yetkazib beruvchilarga to'lovni beradi.
- Kassa va bank hisoblari olib qo'yish, naqd sotuv yoki o'g'irlanganni beradi.
- Tushum = nasiya sotuv + naqd sotuv.
- Xarajat = to'langan + yakuniy hisoblangan - boshlang'ich, oldindan to'lovda teskari.`,
      },
      exam: {
        en: `- If the information cannot be split between cash and credit, use a total receivables or total payables account.
- Remember the items beyond sales and receipts: contras, discounts allowed, interest charged and irrecoverable debts.
- Interest charged on overdue accounts is a debit in receivables. Do not count it as a sale.
- Discounts allowed that were not expected to be taken mean sales were recorded gross, so they are a credit in receivables.
- Closing inventory is not in the cash paid to suppliers calculation. Find purchases first, then use payables.`,
        ru: `- Если данные нельзя разделить на наличные и кредит, используйте общий счёт дебиторов или кредиторов.
- Помните о статьях кроме продаж и поступлений: взаимозачёты, предоставленные скидки, проценты, безнадёжные долги.
- Проценты за просрочку — дебет дебиторов. Не считайте их продажей.
- Скидки, которых не ожидали, значат, что продажи записаны полной суммой, поэтому это кредит дебиторов.
- Запасы на конец не входят в расчёт выплат поставщикам. Сначала найдите закупки, затем используйте кредиторов.`,
        uz: `- Ma'lumotni naqd va nasiyaga ajratib bo'lmasa, umumiy debitorlar yoki kreditorlar hisobini ishlating.
- Sotuv va tushumdan tashqari moddalarni eslang: o'zaro hisob-kitob, berilgan chegirmalar, foiz, undirib bo'lmaydigan qarzlar.
- Kechikkan hisoblarga foiz debitorlarda debet. Uni sotuv deb hisoblamang.
- Kutilmagan chegirmalar sotuv yalpi yozilganini bildiradi, shuning uchun debitorlarda kredit.
- Yakuniy zaxira yetkazib beruvchilarga to'lov hisobiga kirmaydi. Avval xaridni toping, so'ng kreditorlarni ishlating.`,
      },
      heading: { en: 'The ledger account approach', ru: 'Подход через счета', uz: 'Hisoblar orqali yondashuv' },
      body: {
        en: `When some transactions are known but others are not, a T-account can find what is missing. Enter everything you do know, and the figure needed to make both sides agree is the answer.

The receivables account usually gives credit sales or receipts from credit customers. The payables account gives credit purchases or payments to suppliers. The bank account may give drawings or money stolen, and the cash in hand account may give cash sales or cash stolen.

Sometimes cash and credit figures cannot be separated. Then use total accounts. Put all sales on the debit side of total receivables and all money received on the credit side.

Expenses work the same way. Take rent or electricity, for example. Start with the cash paid. Deduct an opening accrual, which belongs to last year, and add a closing accrual. Add an opening prepayment, which is used this year, and deduct a closing prepayment. T-accounts or simple equations both work.`,
        ru: `Если часть операций известна, а часть нет, Т-счёт находит недостающее. Внесите всё известное, и сумма, уравнивающая стороны, будет ответом.

Счёт дебиторов обычно даёт продажи в кредит или поступления от покупателей. Счёт кредиторов — закупки в кредит или выплаты поставщикам. Счёт банка может дать изъятия или украденные деньги, а счёт кассы — продажи за наличные или украденные наличные.

Иногда наличные и кредит не разделить. Тогда используйте общие счета. Все продажи — в дебет общих дебиторов, все полученные деньги — в кредит.

Расходы работают так же. Например, аренда или электричество. Начните с уплаченных денег. Вычтите начисление на начало, оно относится к прошлому году, и прибавьте начисление на конец. Прибавьте предоплату на начало, она используется в этом году, и вычтите предоплату на конец. Подходят и Т-счета, и простые уравнения.`,
        uz: `Ba'zi operatsiyalar ma'lum, boshqalari noma'lum bo'lsa, T-hisob yetishmaganini topadi. Bilgan hamma narsani kiriting, ikki tomonni tenglashtiradigan summa javobdir.

Debitorlar hisobi odatda nasiya sotuv yoki mijozlardan tushumni beradi. Kreditorlar hisobi nasiya xarid yoki yetkazib beruvchilarga to'lovni beradi. Bank hisobi olib qo'yish yoki o'g'irlangan pulni, kassa hisobi naqd sotuv yoki o'g'irlangan naqdni berishi mumkin.

Ba'zan naqd va nasiyani ajratib bo'lmaydi. Unda umumiy hisoblardan foydalaning. Barcha sotuv umumiy debitorlar debetiga, olingan barcha pul kreditiga.

Xarajatlar ham shunday ishlaydi. Masalan ijara yoki elektr. To'langan puldan boshlang. Boshlang'ich hisoblanganni ayiring, u o'tgan yilga tegishli, yakuniy hisoblanganni qo'shing. Boshlang'ich oldindan to'lovni qo'shing, u shu yil ishlatiladi, yakuniy oldindan to'lovni ayiring. T-hisob ham, oddiy tenglama ham ishlaydi.`,
      },
      example: {
        en: `A small shop's missing figures.
# Credit sales from the receivables account
  Customers owed $1,400 at the start and $1,900 at the end
  Cash received from them $8,200; goods returned $300
  Credit sales = closing $1,900 + received $8,200 + returns $300 - opening $1,400 = $9,000
# Total revenue
  Credit sales $9,000 + cash sales $15,000 = $24,000
# Electricity expense
  Paid $3,900; $300 owing at the start (last year's); $500 owing at the end (this year's)
  $3,900 - $300 + $500 = $4,100
= Revenue $24,000; electricity $4,100`,
        ru: `Недостающие цифры небольшого магазина.
# Продажи в кредит по счёту дебиторов
  Покупатели должны $1,400 на начало и $1,900 на конец
  Получено от них $8,200; возвращено товара $300
  Продажи в кредит = конец $1,900 + получено $8,200 + возвраты $300 - начало $1,400 = $9,000
# Общая выручка
  Продажи в кредит $9,000 + продажи за наличные $15,000 = $24,000
# Расход на электричество
  Уплачено $3,900; долг $300 на начало (прошлого года); долг $500 на конец (этого года)
  $3,900 - $300 + $500 = $4,100
= Выручка $24,000; электричество $4,100`,
        uz: `Kichik do'konning yetishmayotgan sonlari.
# Debitorlar hisobidan kreditga sotuv
  Mijozlar boshida $1,400, oxirida $1,900 qarz
  Ulardan olingan pul $8,200; qaytarilgan tovar $300
  Kreditga sotuv = oxiri $1,900 + olingan $8,200 + qaytarish $300 - boshi $1,400 = $9,000
# Jami tushum
  Kreditga sotuv $9,000 + naqd sotuv $15,000 = $24,000
# Elektr xarajati
  To'langan $3,900; boshida $300 qarz (o'tgan yilniki); oxirida $500 qarz (shu yilniki)
  $3,900 - $300 + $500 = $4,100
= Tushum $24,000; elektr $4,100`,
      },
      simple: {
        en: `When you know most of the movements in an account but one is missing, draw the T-account. Fill in everything you know. The amount needed to make both sides equal is the missing figure (the balancing figure).

- Receivables account: finds credit sales, or cash received from customers.
- Payables account: finds credit purchases, or cash paid to suppliers.
- Cash and bank: finds drawings, cash sales or money stolen.

Expenses work the same way: cash paid, then adjust for accruals and prepayments at the start and end.`,
        ru: `Если известно большинство движений по счёту, а одного не хватает, нарисуйте T-счёт. Внесите всё, что знаете. Сумма, нужная для равенства сторон, и есть недостающая цифра (балансирующая).

- Счёт дебиторов: находит продажи в кредит или деньги от покупателей.
- Счёт кредиторов: находит закупки в кредит или оплату поставщикам.
- Касса и банк: находят изъятия, продажи за наличные или украденные деньги.

С расходами так же: уплаченная сумма, затем поправки на начисления и предоплаты на начало и конец.`,
        uz: `Hisobdagi harakatlarning ko'pi ma'lum, bittasi yetishmasa, T-hisob chizing. Bilgan hamma narsani yozing. Ikki tomonni tenglashtirish uchun kerak bo'lgan summa yetishmayotgan son (balanslovchi summa).

- Debitorlar hisobi: kreditga sotuvni yoki mijozlardan olingan pulni topadi.
- Kreditorlar hisobi: kreditga xaridni yoki yetkazib beruvchilarga to'lovni topadi.
- Kassa va bank: olib qo'yish, naqd sotuv yoki o'g'irlangan pulni topadi.

Xarajatlar ham shunday: to'langan summa, keyin boshi va oxiridagi hisoblangan va oldindan to'langanlarga tuzatish.`,
      },
    },
    {
      key: {
        en: `- Bank statements and paying-in slips let you rebuild cash flows.
- Separate money in the till from money at the bank.
- Till: opening + cash sales = banked + cash spent + drawings + stolen + closing.
- Bank: opening + receipts = payments + closing.
- Watch for an opening overdraft, which is a negative starting balance.
- Items banked include non-sales receipts, which must be removed to find sales.`,
        ru: `- Выписки банка и бланки взноса помогают восстановить денежные потоки.
- Разделяйте деньги в кассе и в банке.
- Касса: на начало + продажи = сдано в банк + потрачено + изъятия + украдено + на конец.
- Банк: на начало + поступления = выплаты + на конец.
- Учитывайте овердрафт на начало: это отрицательный начальный остаток.
- Сданное в банк включает поступления не от продаж, их нужно убрать.`,
        uz: `- Bank ko'chirmalari va topshirish varaqalari pul oqimini tiklashga yordam beradi.
- Kassadagi va bankdagi pulni ajrating.
- Kassa: boshlang'ich + sotuv = bankka + sarflangan + olib qo'yilgan + o'g'irlangan + yakuniy.
- Bank: boshlang'ich + tushum = to'lovlar + yakuniy.
- Boshlang'ich overdraftga e'tibor bering: bu manfiy boshlanish.
- Bankka topshirilgan sotuvdan bo'lmagan tushumlarni o'z ichiga oladi, ular olib tashlanadi.`,
      },
      exam: {
        en: `- All cash sales: revenue = amounts banked + wages and other costs paid from the till + drawings from the till + closing cash - opening cash - other receipts banked.
- Cash paid to suppliers = opening payables + purchases - closing payables.
- If only total payments are known: receipts = closing cash + payments - opening cash.
- From receipts, go on to sales using receivables: sales = receipts + closing receivables - opening receivables.
- Irrecoverable debts found after a list of balances are taken off closing receivables.`,
        ru: `- Все продажи за наличные: выручка = сдано в банк + зарплата и расходы из кассы + изъятия из кассы + наличные на конец - на начало - прочие сданные поступления.
- Выплаты поставщикам = кредиторы на начало + закупки - кредиторы на конец.
- Если известны только итоговые выплаты: поступления = деньги на конец + выплаты - на начало.
- От поступлений к продажам через дебиторов: продажи = поступления + дебиторы на конец - на начало.
- Безнадёжные долги, найденные после списка остатков, вычитаются из дебиторов на конец.`,
        uz: `- Hamma sotuv naqd: tushum = bankka topshirilgan + kassadan ish haqi va xarajatlar + kassadan olib qo'yish + yakuniy naqd - boshlang'ich - boshqa topshirilgan tushumlar.
- Yetkazib beruvchilarga to'lov = boshlang'ich kreditorlar + xaridlar - yakuniy kreditorlar.
- Faqat jami to'lovlar ma'lum bo'lsa: tushumlar = yakuniy pul + to'lovlar - boshlang'ich.
- Tushumdan debitorlar orqali sotuvga: sotuv = tushumlar + yakuniy debitorlar - boshlang'ich.
- Ro'yxatdan keyin topilgan undirib bo'lmaydigan qarzlar yakuniy debitorlardan ayiriladi.`,
      },
      heading: {
        en: 'Using cash and bank summaries',
        ru: 'Использование сводок кассы и банка',
        uz: 'Kassa va bank jamlanmalaridan foydalanish',
      },
      body: {
        en: `Even when ledgers are lost, an entity can usually rebuild its cash inflows and outflows from bank statements and paying-in slips. A small retailer such as a newsagent takes much of its sales in notes and coins, pays some costs such as casual wages from the till, and banks the rest.

The cash at bank account records money received from customers, amounts banked from the till, other income, payments to suppliers, expenses and drawings. The cash in hand account records cash sales, other cash income, sundry cash expenses, amounts banked, and any money lost or stolen.

The method is the same as for any account: enter what you know and find the balancing figure. Care is needed with an account that starts overdrawn, because that opening balance is on the credit side.

Cash data then feeds into the ledger accounts. If you know total receipts and cash sales, the rest must have come from credit customers, and that figure goes into the receivables account to find credit sales.`,
        ru: `Даже если книги утрачены, компания обычно может восстановить денежные потоки по выпискам банка и бланкам взноса. Небольшой магазин, например газетный киоск, получает значительную часть продаж наличными, платит часть расходов, например разовую зарплату, из кассы, а остальное сдаёт в банк.

Счёт банка отражает деньги от покупателей, сдачу из кассы, прочие доходы, выплаты поставщикам, расходы и изъятия. Счёт кассы отражает продажи за наличные, прочие наличные доходы, мелкие расходы, сданные суммы и потерянные или украденные деньги.

Метод тот же, что и для любого счёта: внесите известное и найдите балансирующую цифру. Осторожнее со счётом, начинающимся с овердрафта: этот остаток стоит в кредите.

Данные о деньгах затем идут в счета. Если известны все поступления и продажи за наличные, остальное пришло от покупателей в кредит, и эта сумма идёт на счёт дебиторов для нахождения продаж в кредит.`,
        uz: `Kitoblar yo'qolsa ham, korxona odatda pul oqimini bank ko'chirmalari va topshirish varaqalaridan tiklay oladi. Gazeta do'koni kabi kichik chakana sotuvchi sotuvining katta qismini naqd oladi, tasodifiy ish haqi kabi xarajatlarni kassadan to'laydi, qolganini bankka topshiradi.

Bank hisobi mijozlardan pul, kassadan topshirilgan summa, boshqa daromad, yetkazib beruvchilarga to'lov, xarajatlar va olib qo'yishlarni yozadi. Kassa hisobi naqd sotuv, boshqa naqd daromad, mayda xarajatlar, topshirilgan summalar va yo'qolgan yoki o'g'irlangan pulni yozadi.

Usul har qanday hisobdagi kabi: bilganni kiriting va balanslovchi summani toping. Overdraft bilan boshlanadigan hisobga ehtiyot bo'ling, bu qoldiq kredit tomonda.

Pul ma'lumotlari keyin hisoblarga o'tadi. Jami tushum va naqd sotuv ma'lum bo'lsa, qolgani nasiya mijozlardan kelgan va bu summa nasiya sotuvni topish uchun debitorlar hisobiga yoziladi.`,
      },
      example: {
        en: `A shop's till for the year.
# What went OUT of the till
  Banked $18,000 + wages paid from the till $2,500 + owner took $1,000 = $21,500
# Cash left at the end
  $300
# Cash there at the start
  $200 (this was not a sale)
# Cash sales fill the gap
  $21,500 + $300 - $200 = $21,600
= Cash sales: $21,600`,
        ru: `Касса магазина за год.
# Что УШЛО из кассы
  Сдано в банк $18,000 + зарплата из кассы $2,500 + владелец забрал $1,000 = $21,500
# Деньги на конец
  $300
# Деньги на начало
  $200 (это не продажа)
# Продажи за наличные закрывают разницу
  $21,500 + $300 - $200 = $21,600
= Продажи за наличные: $21,600`,
        uz: `Do'kon kassasi bir yil uchun.
# Kassadan nima CHIQDI
  Bankka $18,000 + kassadan ish haqi $2,500 + egasi olgani $1,000 = $21,500
# Oxirida qolgan pul
  $300
# Boshida bo'lgan pul
  $200 (bu sotuv emas)
# Naqd sotuv farqni yopadi
  $21,500 + $300 - $200 = $21,600
= Naqd sotuv: $21,600`,
      },
      simple: {
        en: `Even with no ledgers, bank statements show what went in and out of the bank. A small shop also keeps cash in the till: it takes cash sales, pays some costs from the till, and banks the rest.

Treat the till like an account:
  Cash at the start + cash sales = money banked + costs paid from the till + owner's drawings + cash at the end

If cash sales are the missing figure, everything else tells you what they must be. Take care if the bank starts overdrawn: that opening balance is negative.`,
        ru: `Даже без книг банковские выписки показывают, что пришло и ушло со счёта. У небольшого магазина есть ещё касса: в неё поступают продажи за наличные, из неё платят часть расходов, остальное сдают в банк.

Считайте кассу счётом:
  Деньги на начало + продажи за наличные = сдано в банк + расходы из кассы + изъятия владельца + деньги на конец

Если не хватает продаж за наличные, всё остальное показывает, какими они должны быть. Осторожно, если банк начинается с овердрафта: начальный остаток отрицательный.`,
        uz: `Kitoblar bo'lmasa ham, bank ko'chirmalari bankka nima kirib-chiqqanini ko'rsatadi. Kichik do'konda kassa ham bor: unga naqd sotuv tushadi, undan ba'zi xarajatlar to'lanadi, qolgani bankka topshiriladi.

Kassani hisob deb oling:
  Boshidagi pul + naqd sotuv = bankka topshirilgan + kassadan xarajatlar + egasining olib qo'yishi + oxiridagi pul

Agar naqd sotuv yetishmasa, qolgan hamma narsa u qancha bo'lishi kerakligini aytadi. Bank overdraft bilan boshlansa ehtiyot bo'ling: boshlang'ich qoldiq manfiy.`,
      },
    },
    {
      key: {
        en: `- Margin: gross profit as a % of sales.
- Mark-up: gross profit as a % of cost of sales.
- 25% margin: sales 100, cost of sales 75, gross profit 25.
- 25% mark-up: sales 125, cost of sales 100, gross profit 25.
- Set up the column, then fill in the amount you know.
- A 20% margin and a 25% mark-up describe the same business.`,
        ru: `- Маржа: валовая прибыль в % от продаж.
- Наценка: валовая прибыль в % от себестоимости.
- Маржа 25%: продажи 100, себестоимость 75, прибыль 25.
- Наценка 25%: продажи 125, себестоимость 100, прибыль 25.
- Составьте столбец и заполните известную сумму.
- Маржа 20% и наценка 25% описывают один и тот же бизнес.`,
        uz: `- Marja: yalpi foyda sotuvning % sifatida.
- Ustama: yalpi foyda tannarxning % sifatida.
- 25% marja: sotuv 100, tannarx 75, foyda 25.
- 25% ustama: sotuv 125, tannarx 100, foyda 25.
- Ustun tuzing va ma'lum summani to'ldiring.
- 20% marja va 25% ustama bir xil biznesni tasvirlaydi.`,
      },
      exam: {
        en: `- Check the word in the question. Margin is on sales, and mark-up is on cost.
- To test a mark-up, divide gross profit by cost of sales, not by sales.
- A 40% mark-up means sales are 140% of cost.
- Sales less sales returns is net sales, and purchases less purchase returns is net purchases.
- Gross margin can be found from a count after the year end: sales at cost = opening inventory + purchases - later inventory.`,
        ru: `- Проверьте слово в задаче. Маржа — от продаж, наценка — от себестоимости.
- Чтобы проверить наценку, делите валовую прибыль на себестоимость, а не на продажи.
- Наценка 40% значит, что продажи — 140% от себестоимости.
- Продажи минус возвраты — чистые продажи, закупки минус возвраты — чистые закупки.
- Маржу можно найти из пересчёта после конца года: продажи по себестоимости = запасы на начало + закупки - запасы позже.`,
        uz: `- Masaladagi so'zni tekshiring. Marja sotuvdan, ustama tannarxdan.
- Ustamani tekshirish uchun yalpi foydani sotuvga emas, tannarxga bo'ling.
- 40% ustama sotuv tannarxning 140% ekanini bildiradi.
- Sotuv minus qaytarishlar sof sotuv, xaridlar minus qaytarishlar sof xaridlar.
- Marjani yil oxiridan keyingi sanashdan topish mumkin: tannarxdagi sotuv = boshlang'ich zaxira + xaridlar - keyingi zaxira.`,
      },
      heading: { en: 'Margin and mark-up', ru: 'Маржа и наценка', uz: 'Marja va ustama' },
      body: {
        en: `Gross profit can be expressed against sales or against cost of sales, and the two measures give different percentages for the same trade.

If sales are $5,000 and cost of sales is $4,000, gross profit is $1,000. The gross profit margin is 1,000 / 5,000 = 20%. The mark-up is 1,000 / 4,000 = 25%.

These relationships can be set out in columns. With a margin, sales are 100%, and cost of sales and gross profit share it. With a mark-up, cost of sales is 100%, and sales are 100% plus the mark-up.

If you know the percentage and any one of sales, cost of sales or gross profit, you can find the other two.

Cost of sales also equals opening inventory plus purchases less closing inventory, so the same working can reveal purchases or inventory.`,
        ru: `Валовую прибыль можно выражать к продажам или к себестоимости, и для одной и той же торговли получаются разные проценты.

Если продажи $5,000, а себестоимость $4,000, валовая прибыль $1,000. Маржа: 1,000 / 5,000 = 20%. Наценка: 1,000 / 4,000 = 25%.

Эти отношения можно показать столбцами. При марже продажи — 100%, а себестоимость и прибыль делят их. При наценке себестоимость — 100%, а продажи — 100% плюс наценка.

Зная процент и одну из сумм (продажи, себестоимость или прибыль), можно найти две другие.

Себестоимость также равна запасам на начало плюс закупки минус запасы на конец, поэтому тот же расчёт может показать закупки или запасы.`,
        uz: `Yalpi foydani sotuvga yoki tannarxga nisbatan ifodalash mumkin va bir xil savdo uchun turli foizlar chiqadi.

Sotuv $5,000, tannarx $4,000 bo'lsa, yalpi foyda $1,000. Marja: 1,000 / 5,000 = 20%. Ustama: 1,000 / 4,000 = 25%.

Bu nisbatlarni ustunlarda ko'rsatish mumkin. Marjada sotuv 100%, tannarx va foyda uni bo'lishadi. Ustamada tannarx 100%, sotuv esa 100% plus ustama.

Foiz va sotuv, tannarx yoki foydadan birini bilsangiz, qolgan ikkitasini topasiz.

Tannarx boshlang'ich zaxira plus xaridlar minus yakuniy zaxiraga ham teng, shuning uchun xuddi shu hisob xarid yoki zaxirani ko'rsatishi mumkin.`,
      },
      example: {
        en: `A shop buys a jacket for $300 and adds a 20% mark-up.
# Mark-up: cost is 100%
  Selling price: $300 x 120% = $360
  Gross profit: $360 - $300 = $60
# The same jacket as a margin: sales is 100%
  $60 / $360 = 16.7%
= The profit is $60 either way. 20% mark-up and 16.7% margin describe the same sale.`,
        ru: `Магазин покупает куртку за $300 и делает наценку 20%.
# Наценка: себестоимость — 100%
  Цена продажи: $300 x 120% = $360
  Валовая прибыль: $360 - $300 = $60
# Та же куртка как маржа: продажи — 100%
  $60 / $360 = 16.7%
= Прибыль $60 в обоих случаях. Наценка 20% и маржа 16.7% описывают одну продажу.`,
        uz: `Do'kon kurtkani $300 ga oladi va 20% ustama qo'yadi.
# Ustama: tannarx 100%
  Sotish narxi: $300 x 120% = $360
  Yalpi foyda: $360 - $300 = $60
# Shu kurtka marja sifatida: sotuv 100%
  $60 / $360 = 16.7%
= Foyda ikkala holda $60. 20% ustama va 16.7% marja bitta sotuvni tasvirlaydi.`,
      },
      simple: {
        en: `Both measure gross profit as a percentage, but against a different base.
- Margin: gross profit out of SALES. Sales = 100%.
- Mark-up: gross profit added on top of COST. Cost = 100%.

Draw a little table. For a 25% margin: sales 100, cost 75, profit 25. For a 25% mark-up: cost 100, profit 25, sales 125. Then put in the one figure you know and scale the rest. Read the question carefully: margin and mark-up give different answers.`,
        ru: `Оба показывают валовую прибыль в процентах, но от разной базы.
- Маржа: валовая прибыль от ПРОДАЖ. Продажи = 100%.
- Наценка: валовая прибыль сверху на СЕБЕСТОИМОСТЬ. Себестоимость = 100%.

Нарисуйте маленькую таблицу. Для маржи 25%: продажи 100, себестоимость 75, прибыль 25. Для наценки 25%: себестоимость 100, прибыль 25, продажи 125. Затем подставьте известную цифру и пересчитайте остальные. Читайте вопрос внимательно: маржа и наценка дают разные ответы.`,
        uz: `Ikkalasi ham yalpi foydani foizda o'lchaydi, lekin boshqa asosga nisbatan.
- Marja: SOTUVdan yalpi foyda. Sotuv = 100%.
- Ustama: TANNARX ustiga qo'shilgan yalpi foyda. Tannarx = 100%.

Kichik jadval chizing. 25% marja uchun: sotuv 100, tannarx 75, foyda 25. 25% ustama uchun: tannarx 100, foyda 25, sotuv 125. Keyin bilgan bitta sonni qo'yib, qolganini hisoblang. Savolni diqqat bilan o'qing: marja va ustama turli javob beradi.`,
      },
    },
    {
      key: {
        en: `- Find cost of sales from sales and the margin or mark-up.
- Closing inventory = opening inventory + purchases - cost of sales.
- Lost inventory = what should be there - what was counted.
- Insured: Dr Insurance claim (current asset), Cr Cost of sales.
- Not insured: Dr Expense in profit or loss, Cr Cost of sales.
- Lost inventory is valued at cost, never at selling price.`,
        ru: `- Найдите себестоимость из продаж и маржи или наценки.
- Запасы на конец = на начало + закупки - себестоимость.
- Потерянные запасы = что должно быть - что насчитано.
- Застраховано: Дт Страховое требование (оборотный актив), Кт Себестоимость.
- Не застраховано: Дт Расход в прибыли или убытке, Кт Себестоимость.
- Потерянные запасы оцениваются по стоимости, а не по цене продажи.`,
        uz: `- Tannarxni sotuv va marja yoki ustamadan toping.
- Yakuniy zaxira = boshlang'ich + xaridlar - tannarx.
- Yo'qolgan zaxira = bo'lishi kerak - sanalgan.
- Sug'urtalangan: Dt Sug'urta da'vosi (aylanma aktiv), Kt Tannarx.
- Sug'urtalanmagan: Dt Foyda yoki zarardagi xarajat, Kt Tannarx.
- Yo'qolgan zaxira sotuv narxida emas, tannarxda baholanadi.`,
      },
      exam: {
        en: `- Credit cost of sales in both cases, because those goods were not sold.
- If insured, the cost, not the selling price, is recoverable from the insurer.
- An unsigned policy is invalid, so treat the loss as uninsured.
- If the fire destroyed all the inventory, the amount lost is the whole of what should have been there.`,
        ru: `- В обоих случаях кредит себестоимости, так как этот товар не продан.
- При страховании возмещается стоимость, а не цена продажи.
- Неподписанный полис недействителен, поэтому убыток не застрахован.
- Если пожар уничтожил все запасы, потеря равна всему, что должно было быть.`,
        uz: `- Ikkala holda tannarx kreditlanadi, chunki bu tovar sotilmagan.
- Sug'urtada sotuv narxi emas, tannarx qoplanadi.
- Imzolanmagan polis haqiqiy emas, zarar sug'urtalanmagan.
- Yong'in butun zaxirani yo'q qilsa, yo'qotish bo'lishi kerak bo'lgan hamma narsa.`,
      },
      heading: {
        en: 'Missing and lost inventory',
        ru: 'Недостающие и потерянные запасы',
        uz: 'Yetishmagan va yo\'qolgan zaxira',
      },
      body: {
        en: `Many businesses did not traditionally keep a detailed accounting record of inventory, and a year-end value was found separately. The methods in this chapter can work out inventory too. Margin or mark-up gives cost of sales. Ledgers and cash records give purchases. Together they give opening or closing inventory.

The same working finds goods lost in a fire or a flood, or through theft. Work out what closing inventory should be, then deduct what is actually there.

In the ledger, inventory is removed from cost of sales because those goods were not sold. The other side depends on insurance. If insured, the cost is recoverable, so the debit goes to a current asset for the insurance claim. If not, the debit is an expense in profit or loss.`,
        ru: `Многие бизнесы традиционно не вели подробный учёт запасов, и стоимость на конец года определялась отдельно. Методы этой главы могут найти и запасы. Маржа или наценка дают себестоимость. Книги и записи денег дают закупки. Вместе они дают запасы на начало или конец.

Тот же расчёт находит товар, потерянный при пожаре, наводнении или краже. Определите, какими должны быть запасы на конец, и вычтите то, что есть.

В учёте запасы убираются из себестоимости, так как товар не продан. Другая сторона зависит от страховки. Если застраховано, стоимость возмещается, и дебет идёт на оборотный актив — страховое требование. Если нет, дебет — расход в прибыли или убытке.`,
        uz: `Ko'p bizneslar an'anaviy ravishda zaxiraning batafsil hisobini yuritmagan, yil oxiri qiymati alohida aniqlangan. Bu bob usullari zaxirani ham topadi. Marja yoki ustama tannarxni beradi. Kitob va pul yozuvlari xaridni beradi. Birgalikda boshlang'ich yoki yakuniy zaxirani beradi.

Xuddi shu hisob yong'in, toshqin yoki o'g'irlikda yo'qolgan tovarni topadi. Yakuniy zaxira qancha bo'lishi kerakligini aniqlang, so'ng bor narsani ayiring.

Hisobda zaxira tannarxdan olinadi, chunki bu tovar sotilmagan. Ikkinchi tomon sug'urtaga bog'liq. Sug'urtalangan bo'lsa, tannarx qoplanadi va debet sug'urta da'vosi aylanma aktiviga yoziladi. Aks holda debet foyda yoki zarardagi xarajat.`,
      },
      example: {
        en: `A flood hits a shop's storeroom. The margin is 25%.
# Cost of sales
  Sales $5,000; cost is 75% of sales: $5,000 x 75% = $3,750
# What should be there
  Opening inventory $600 + purchases $4,000 - cost of sales $3,750 = $850
# What is lost
  Counted $500, so $850 - $500 = $350 lost (at cost)
# The entry
  Insured: Dr Insurance claim $350, Cr Cost of sales $350
  Not insured: Dr Expense $350, Cr Cost of sales $350
= Loss: $350 at cost, never at selling price.`,
        ru: `Наводнение затопило склад магазина. Маржа 25%.
# Себестоимость
  Продажи $5,000; себестоимость — 75% продаж: $5,000 x 75% = $3,750
# Что должно быть
  Запасы на начало $600 + закупки $4,000 - себестоимость $3,750 = $850
# Что потеряно
  Пересчитано $500, значит $850 - $500 = $350 потеряно (по стоимости)
# Запись
  Застраховано: Дт Требование к страховщику $350, Кт Себестоимость $350
  Без страховки: Дт Расход $350, Кт Себестоимость $350
= Потеря: $350 по стоимости, никогда по цене продажи.`,
        uz: `Suv toshqini do'kon omborini bosdi. Marja 25%.
# Tannarx
  Sotuv $5,000; tannarx sotuvning 75% i: $5,000 x 75% = $3,750
# Nima bo'lishi kerak
  Boshlang'ich zaxira $600 + xaridlar $4,000 - tannarx $3,750 = $850
# Nima yo'qolgan
  Sanalgan $500, demak $850 - $500 = $350 yo'qolgan (tannarxda)
# Yozuv
  Sug'urtalangan: Dt Sug'urta talabi $350, Kt Tannarx $350
  Sug'urtasiz: Dt Xarajat $350, Kt Tannarx $350
= Yo'qotish: $350 tannarxda, hech qachon sotish narxida emas.`,
      },
      simple: {
        en: `You can work out what inventory SHOULD be, even if no one counted it:
  Opening inventory + purchases - cost of sales = closing inventory
Cost of sales comes from sales and the margin or mark-up.

If goods were lost (fire, flood, theft), the loss is what should be there minus what is actually there, valued at COST. Take the lost goods out of cost of sales, because they were not sold. If insured, the other side is an insurance claim (an asset); if not, it is an expense.`,
        ru: `Можно рассчитать, какими ДОЛЖНЫ быть запасы, даже если их не пересчитали:
  Запасы на начало + закупки - себестоимость = запасы на конец
Себестоимость находят из продаж и маржи или наценки.

Если товар утерян (пожар, наводнение, кража), потеря = что должно быть минус что есть на самом деле, по СТОИМОСТИ. Уберите потерянный товар из себестоимости, ведь он не продан. Если есть страховка, другая сторона — требование к страховщику (актив); если нет — расход.`,
        uz: `Hech kim sanamagan bo'lsa ham, zaxira qancha BO'LISHI kerakligini hisoblash mumkin:
  Boshlang'ich zaxira + xaridlar - tannarx = yakuniy zaxira
Tannarx sotuv va marja yoki ustamadan topiladi.

Agar tovar yo'qolsa (yong'in, suv toshqini, o'g'irlik), yo'qotish = bo'lishi kerak bo'lgani minus haqiqatda bori, TANNARXda. Yo'qolgan tovarni tannarxdan chiqaring, chunki u sotilmagan. Sug'urta bo'lsa, ikkinchi tomon sug'urta talabi (aktiv); bo'lmasa, xarajat.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Incomplete records', ru: 'Неполные записи', uz: 'To\'liq bo\'lmagan yozuvlar' },
      definition: {
        en: 'Accounting records where some information is missing or lost.',
        ru: 'Учётные записи, где часть информации отсутствует или утеряна.',
        uz: 'Ba\'zi ma\'lumot yo\'q yoki yo\'qolgan hisob yozuvlari.',
      },
      example: {
        en: 'A stall owner kept only bank statements; the sales book was lost in a flood.',
        ru: 'Владелец прилавка сохранил только банковские выписки; книга продаж утонула при наводнении.',
        uz: 'Rasta egasi faqat bank ko\'chirmalarini saqlagan; sotuv daftari suv toshqinida yo\'qolgan.',
      },
    },
    {
      term: { en: 'Balancing figure', ru: 'Балансирующая цифра', uz: 'Balanslovchi summa' },
      definition: {
        en: 'The amount needed to make both sides of an account agree.',
        ru: 'Сумма, уравнивающая обе стороны счёта.',
        uz: 'Hisobning ikki tomonini tenglashtiruvchi summa.',
      },
      example: {
        en: 'Receivables: $1,900 + $8,200 + $300 - $1,400 = $9,000 of credit sales.',
        ru: 'Дебиторы: $1,900 + $8,200 + $300 - $1,400 = $9,000 продаж в кредит.',
        uz: 'Debitorlar: $1,900 + $8,200 + $300 - $1,400 = $9,000 kreditga sotuv.',
      },
    },
    {
      term: { en: 'Gross profit margin', ru: 'Валовая маржа', uz: 'Yalpi foyda marjasi' },
      definition: {
        en: 'Gross profit as a percentage of sales.',
        ru: 'Валовая прибыль в процентах от продаж.',
        uz: 'Yalpi foyda sotuvning foizi sifatida.',
      },
      example: {
        en: 'Sell for $100, cost $75: margin $25 / $100 = 25%.',
        ru: 'Продажа за $100, себестоимость $75: маржа $25 / $100 = 25%.',
        uz: '$100 ga sotish, tannarx $75: marja $25 / $100 = 25%.',
      },
    },
    {
      term: { en: 'Mark-up', ru: 'Наценка', uz: 'Ustama' },
      definition: {
        en: 'Gross profit as a percentage of cost of sales.',
        ru: 'Валовая прибыль в процентах от себестоимости.',
        uz: 'Yalpi foyda tannarxning foizi sifatida.',
      },
      example: {
        en: 'Cost $100, sell for $125: mark-up $25 / $100 = 25%.',
        ru: 'Себестоимость $100, продажа за $125: наценка $25 / $100 = 25%.',
        uz: 'Tannarx $100, $125 ga sotish: ustama $25 / $100 = 25%.',
      },
    },
    {
      term: { en: 'Total receivables account', ru: 'Общий счёт дебиторов', uz: 'Umumiy debitorlar hisobi' },
      definition: {
        en: 'A working that puts all sales and all receipts together when cash and credit cannot be split.',
        ru: 'Расчёт, объединяющий все продажи и поступления, если наличные и кредит не разделить.',
        uz: 'Naqd va nasiyani ajratib bo\'lmaganda barcha sotuv va tushumlarni birlashtiruvchi hisob-kitob.',
      },
      example: {
        en: 'All sales $24,000 on one side, all money received on the other, because cash and credit sales cannot be split.',
        ru: 'Все продажи $24,000 с одной стороны, все поступления с другой, так как наличные и кредитные продажи не разделить.',
        uz: 'Barcha sotuv $24,000 bir tomonda, barcha tushumlar boshqasida, chunki naqd va kredit sotuvni ajratib bo\'lmaydi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter16;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter16.id] = chapter16;
