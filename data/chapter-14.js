'use strict';

const chapter14 = {
  id: 'chapter-14',
  titles: {
    en: 'The trial balance, errors and suspense accounts',
    ru: 'Оборотная ведомость, ошибки и счета неясных сумм',
    uz: 'Sinov balansi, xatolar va vaqtinchalik hisoblar',
  },
  objectives: [
    { en: 'Describe the purpose of a trial balance and extract one', ru: 'Описывать цель оборотной ведомости и составлять её', uz: 'Sinov balansining maqsadini tavsiflash va uni tuzish' },
    { en: 'Identify errors a trial balance would and would not show', ru: 'Определять ошибки, которые оборотная ведомость показывает и не показывает', uz: 'Sinov balansi ko\'rsatadigan va ko\'rsatmaydigan xatolarni aniqlash' },
    { en: 'Prepare journals to correct errors', ru: 'Составлять журналы для исправления ошибок', uz: 'Xatolarni tuzatish uchun jurnallar tuzish' },
    { en: 'Use and clear a suspense account', ru: 'Использовать и закрывать счёт неясных сумм', uz: 'Vaqtinchalik hisobdan foydalanish va uni yopish' },
    { en: 'Calculate the effect of errors on profit and net assets', ru: 'Рассчитывать влияние ошибок на прибыль и чистые активы', uz: 'Xatolarning foyda va sof aktivlarga ta\'sirini hisoblash' },
  ],
  sections: [
    {
      key: {
        en: `- A trial balance lists all ledger balances, in debit and credit columns.
- Total debits should equal total credits.
- It is a control: it shows that equal debits and credits were recorded.
- A balancing trial balance does not prove the records are error-free.
- It is not one of the financial statements given to shareholders.
- Year-end adjustments are made after it, so its figures are not final.`,
        ru: `- Оборотная ведомость перечисляет все остатки в столбцах дебета и кредита.
- Итог дебета должен равняться итогу кредита.
- Это контроль: она показывает, что записаны равные дебет и кредит.
- Сошедшаяся ведомость не доказывает отсутствие ошибок.
- Она не входит в отчётность для акционеров.
- Корректировки на конец года делаются после неё, поэтому её цифры не окончательны.`,
        uz: `- Sinov balansi barcha qoldiqlarni debet va kredit ustunlarida sanaydi.
- Jami debet jami kreditga teng bo'lishi kerak.
- Bu nazorat: teng debet va kredit yozilganini ko'rsatadi.
- Mos kelgan sinov balansi xato yo'qligini isbotlamaydi.
- U aksiyadorlarga beriladigan moliyaviy hisobotlardan emas.
- Yil oxiri tuzatishlari undan keyin qilinadi, raqamlari yakuniy emas.`,
      },
      exam: {
        en: `- Limits of a trial balance: its figures are not final, it does not reveal errors of commission, and it does not show which accounts hold an error.
- Its main purpose is to show that the ledger holds debit and credit entries of equal value.
- Debit side: assets, expenses, drawings, sales returns. Credit side: liabilities, capital, income, purchase returns, discounts received, allowance for receivables, accumulated depreciation.
- A bank overdraft is a credit. Carriage in and opening inventory are debits.
- If one figure is missing, total each side and take the difference.
- If items sit in the wrong column, re-sort them and add up one side. The difference line then disappears.
- Year-end effect on net assets: closing inventory raises them. Depreciation, irrecoverable debts and deferred income lower them.
- Depreciation by reducing balance is a % of cost less brought-forward depreciation. The trial balance gives both figures.
- The trial balance shows what was paid, so rent due of 12 x $2,400 less $26,000 paid gives an accrual of $2,800.`,
        ru: `- Ограничения ведомости: цифры не окончательны, ошибки ошибочного счёта не видны, не показано, на каких счетах ошибка.
- Главная цель — показать, что в книге дебет и кредит равны.
- Дебет: активы, расходы, изъятия, возвраты покупателей. Кредит: обязательства, капитал, доходы, возвраты поставщикам, полученные скидки, резерв по дебиторам, накопленная амортизация.
- Овердрафт — кредит. Доставка закупок и запасы на начало — дебет.
- Если нет одной цифры, сложите каждую сторону и возьмите разницу.
- Если статьи не в том столбце, пересортируйте их и сложите одну сторону. Разница исчезнет.
- Влияние на чистые активы в конце года: запасы на конец их повышают. Амортизация, безнадёжные долги и доходы будущих периодов снижают.
- Амортизация по уменьшаемому остатку — % от стоимости минус накопленная на начало. Обе цифры есть в ведомости.
- Ведомость показывает, что уплачено: аренда 12 x $2,400 минус уплаченные $26,000 даёт начисление $2,800.`,
        uz: `- Sinov balansi cheklovlari: raqamlari yakuniy emas, noto'g'ri hisob xatolarini ko'rsatmaydi, xato qaysi hisobda ekanini aytmaydi.
- Asosiy maqsadi kitobda debet va kredit teng ekanini ko'rsatish.
- Debet: aktivlar, xarajatlar, olib qo'yishlar, sotuv qaytarishlari. Kredit: majburiyatlar, kapital, daromad, xarid qaytarishlari, olingan chegirmalar, debitorlar rezervi, to'plangan amortizatsiya.
- Overdraft kredit. Kelish tashuvi va boshlang'ich zaxira debet.
- Bitta raqam yetishmasa, har tomonni qo'shing va farqni oling.
- Moddalar noto'g'ri ustunda bo'lsa, qayta ajrating va bir tomonni qo'shing. Farq yo'qoladi.
- Yil oxiri sof aktivlarga ta'siri: yakuniy zaxira oshiradi. Amortizatsiya, undirib bo'lmaydigan qarzlar va kelgusi davr daromadi kamaytiradi.
- Kamayuvchi qoldiq amortizatsiyasi — qiymat minus boshlang'ich to'plangan amortizatsiyaning foizi. Ikkalasi sinov balansida bor.
- Sinov balansi to'langanini ko'rsatadi: 12 x $2,400 ijara minus to'langan $26,000 = $2,800 hisoblangan.`,
      },
      heading: {
        en: 'The trial balance',
        ru: 'Оборотная ведомость',
        uz: 'Sinov balansi',
      },
      body: {
        en: `When the ledger accounts have been balanced at the year end, the closing balances are listed in a trial balance, with debits in one column and credits in the other. Because every transaction has equal debits and credits, the two totals should agree. If they do not, the difference is shown as a suspense account.

The trial balance is a control that helps show the balances reported are reliable. It is also a working stage: after it come the year-end adjustments, then the statement of profit or loss and the statement of financial position.

A trial balance can hold any number of accounts. The layout usually runs through income and expenses, then assets, equity and liabilities. In the debit column you find assets and expenses. In the credit column you find liabilities, equity and income.

An agreed trial balance is useful but limited. It proves only that equal debits and credits were recorded. It does not show that they were put in the right accounts or were the right amounts.`,
        ru: `Когда счета закрыты на конец года, остатки перечисляются в оборотной ведомости: дебет в одном столбце, кредит в другом. Так как у каждой операции равные дебет и кредит, итоги должны совпасть. Если нет, разница показывается как счёт неясных сумм.

Оборотная ведомость — контроль, показывающий надёжность остатков. Это и рабочий этап: после неё идут корректировки на конец года, затем отчёт о прибыли или убытке и отчёт о финансовом положении.

В ведомости может быть любое число счетов. Обычно сначала доходы и расходы, затем активы, капитал и обязательства. В дебете активы и расходы. В кредите обязательства, капитал и доходы.

Сошедшаяся ведомость полезна, но ограничена. Она доказывает только равенство дебета и кредита. Она не показывает, что они на нужных счетах и в нужных суммах.`,
        uz: `Hisoblar yil oxirida balanslangach, yakuniy qoldiqlar sinov balansida sanaladi: debetlar bir ustunda, kreditlar boshqasida. Har bir operatsiyada debet va kredit teng bo'lgani uchun ikki jam mos kelishi kerak. Aks holda farq vaqtinchalik hisob sifatida ko'rsatiladi.

Sinov balansi qoldiqlar ishonchliligini ko'rsatishga yordam beruvchi nazorat. Bu ish bosqichi ham: undan keyin yil oxiri tuzatishlari, so'ng foyda yoki zarar hisoboti va moliyaviy holat hisoboti keladi.

Sinov balansida istalgan sondagi hisob bo'lishi mumkin. Odatda avval daromad va xarajatlar, keyin aktivlar, kapital va majburiyatlar. Debet ustunida aktivlar va xarajatlar. Kredit ustunida majburiyatlar, kapital va daromad.

Mos kelgan sinov balansi foydali, lekin cheklangan. U faqat teng debet va kredit yozilganini isbotlaydi. Ular to'g'ri hisoblarda va to'g'ri summalarda ekanini ko'rsatmaydi.`,
      },
      example: {
        en: `Madina's trial balance after her first days lists debits of bank $3,500, shelves $3,000, purchases $5,500, rent $900, drawings $600 and receivables $400. The credits are capital $8,000, loan $3,000, payables $1,000 and sales $1,900. Both columns total $13,900, so equal debits and credits have been recorded. It does not prove there are no mistakes.`,
        ru: `Оборотная ведомость Мадины после первых дней: дебет — банк $3,500, стеллажи $3,000, закупки $5,500, аренда $900, изъятия $600 и дебиторы $400. Кредит — капитал $8,000, кредит $3,000, кредиторы $1,000 и продажи $1,900. Оба столбца дают $13,900, значит, равные дебет и кредит записаны. Отсутствие ошибок это не доказывает.`,
        uz: `Madinaning birinchi kunlardan keyingi sinov balansi: debet — bank $3,500, javonlar $3,000, xaridlar $5,500, ijara $900, olib qo'yishlar $600 va debitorlar $400. Kredit — kapital $8,000, kredit $3,000, kreditorlar $1,000 va sotuv $1,900. Ikkala ustun $13,900, demak teng debet va kredit yozilgan. Bu xato yo'qligini isbotlamaydi.`,
      },
    },
    {
      key: {
        en: `- Omission: the transaction was left out completely.
- Commission: the right amount in the wrong account of the same type.
- Principle: the wrong type of account, such as an asset posted as an expense.
- Compensating: two errors cancel each other out.
- Original entry: the wrong amount was used for both sides.
- Reversal: the right accounts and amount, on the wrong sides.`,
        ru: `- Пропуск: операция не записана совсем.
- Ошибочный счёт: верная сумма на неверном счёте того же типа.
- Нарушение принципа: неверный тип счёта, например актив как расход.
- Компенсирующие: две ошибки гасят друг друга.
- Исходная запись: неверная сумма с обеих сторон.
- Обратная запись: верные счета и сумма, но перепутаны стороны.`,
        uz: `- Tushib qolish: operatsiya umuman yozilmagan.
- Noto'g'ri hisob: to'g'ri summa o'sha turdagi boshqa hisobda.
- Tamoyil: noto'g'ri tur, masalan aktiv xarajat sifatida.
- Kompensatsiyalovchi: ikki xato bir-birini qoplaydi.
- Dastlabki yozuv: ikkala tomonda noto'g'ri summa.
- Teskari yozuv: hisob va summa to'g'ri, tomonlar almashgan.`,
      },
      exam: {
        en: `- None of these six errors stops the trial balance from agreeing.
- A non-current asset debited to purchases is an error of principle.
- To correct any error, ask what should have been posted, what was posted, and what fixes the gap.
- If one side of an entry is not mentioned, assume it was correct.
- Reversal needs twice the amount. Dr Sales $200, Cr Bank $200 for a sale is fixed by Dr Bank $400, Cr Sales $400.
- If the wrong sales tax treatment was used on a purchase, the fix is between purchases and sales tax. Payables stay at the gross amount.
- Find the tax from a gross figure: $900 at 20% has tax of $900 x 20/120 = $150.
- A contra posted the wrong way round doubles both errors, but it leaves profit and net assets unchanged.
- Sales tax on a repair stays where it is if only the net cost was capitalised in error.`,
        ru: `- Ни одна из шести ошибок не мешает ведомости сойтись.
- Внеоборотный актив в дебете закупок — нарушение принципа.
- Чтобы исправить ошибку, спросите: что должно быть, что записано и что закроет разницу.
- Если сторона записи не упомянута, считайте её верной.
- Обратная запись требует двойной суммы. Дт Продажи $200, Кт Банк $200 исправляется Дт Банк $400, Кт Продажи $400.
- Если налог по закупке учтён неверно, исправление идёт между закупками и налогом. Кредиторы остаются с налогом.
- Налог из суммы с налогом: $900 при 20% даёт $900 x 20/120 = $150.
- Взаимозачёт наоборот удваивает обе ошибки, но не меняет прибыль и чистые активы.
- Налог с ремонта остаётся на месте, если ошибочно капитализирована только чистая стоимость.`,
        uz: `- Bu olti xatoning hech biri sinov balansi mos kelishiga to'sqinlik qilmaydi.
- Xaridlarga debetlangan uzoq muddatli aktiv tamoyil xatosi.
- Xatoni tuzatish uchun so'rang: nima yozilishi kerak edi, nima yozildi, farqni nima yopadi.
- Yozuvning bir tomoni aytilmagan bo'lsa, to'g'ri deb hisoblang.
- Teskari yozuv ikki baravar summa talab qiladi. Sotuv uchun Dt Sotuv $200, Kt Bank $200 Dt Bank $400, Kt Sotuv $400 bilan tuzatiladi.
- Xaridda soliq noto'g'ri bo'lsa, tuzatish xaridlar va soliq orasida. Kreditorlar soliqli summada qoladi.
- Soliqli summadan soliq: $900, 20% da $900 x 20/120 = $150.
- Teskari o'zaro hisob-kitob ikkala xatoni ikki baravar qiladi, lekin foyda va sof aktivlarni o'zgartirmaydi.
- Faqat soliqsiz qiymat xato kapitallashtirilgan bo'lsa, ta'mir solig'i joyida qoladi.`,
      },
      heading: {
        en: 'Errors the trial balance does not show',
        ru: 'Ошибки, которых не видно в ведомости',
        uz: 'Sinov balansi ko\'rsatmaydigan xatolar',
      },
      body: {
        en: `Six kinds of error leave the trial balance in agreement, because equal debits and credits were still recorded.

An error of omission means a transaction was not recorded at all. An error of commission means it went to the wrong account of the right kind, such as rates posted to wages. An error of principle breaks an accounting rule, such as a new asset debited to repairs. Compensating errors are two that cancel out, such as an expense $90 too high and another $90 too low. An error of original entry uses the wrong amount throughout, such as $985 entered as $859. A reversal of entries uses the right accounts and amount but swaps the sides.

To correct any of them, take three steps. Write down what the entry should have been. Write down what was actually done. The correction is whatever turns the second into the first. Assume that anything not mentioned was recorded correctly.

Some errors found in manual systems cannot happen in a computerised one, because the software will not accept one-sided or unequal entries. Miscasting an account or missing a balance from the trial balance belong to manual systems too.`,
        ru: `Шесть видов ошибок оставляют ведомость сошедшейся, так как равные дебет и кредит всё же записаны.

Ошибка пропуска — операция не записана совсем. Ошибка счёта — она попала на неверный счёт того же типа, например налог на имущество на зарплату. Нарушение принципа — нарушено правило учёта, например новый актив в дебете ремонта. Компенсирующие ошибки — две взаимно гасящиеся, например один расход на $90 выше, другой на $90 ниже. Ошибка исходной записи — неверная сумма везде, например $985 как $859. Обратная запись — верные счета и сумма, но перепутаны стороны.

Для исправления сделайте три шага. Запишите, какой должна быть запись. Запишите, что сделано фактически. Исправление — то, что превращает второе в первое. Считайте, что всё не упомянутое записано верно.

Некоторые ошибки ручных систем невозможны в компьютерных, так как программа не примет односторонние или неравные записи. Ошибки сложения счёта или пропуск остатка в ведомости тоже относятся к ручным системам.`,
        uz: `Olti xil xato sinov balansini mos holda qoldiradi, chunki teng debet va kredit baribir yozilgan.

Tushib qolish xatosi — operatsiya umuman yozilmagan. Noto'g'ri hisob xatosi — u to'g'ri turdagi boshqa hisobga tushgan, masalan mulk solig'i ish haqiga. Tamoyil xatosi hisob qoidasini buzadi, masalan yangi aktiv ta'mirga debetlangan. Kompensatsiyalovchi xatolar bir-birini qoplaydi, masalan bir xarajat $90 yuqori, boshqasi $90 past. Dastlabki yozuv xatosi hamma joyda noto'g'ri summa, masalan $985 o'rniga $859. Teskari yozuvda hisob va summa to'g'ri, tomonlar almashgan.

Tuzatish uchun uch qadam qiling. Yozuv qanday bo'lishi kerak edi, yozing. Aslida nima qilinganini yozing. Tuzatish ikkinchisini birinchisiga aylantiradi. Aytilmagan narsa to'g'ri yozilgan deb hisoblang.

Qo'lda yuritiladigan tizimdagi ba'zi xatolar kompyuterda bo'lmaydi, chunki dastur bir tomonlama yoki teng bo'lmagan yozuvni qabul qilmaydi. Hisobni noto'g'ri qo'shish yoki sinov balansida qoldiqni tushirib qoldirish ham qo'lda yuritishga xos.`,
      },
      example: {
        en: `Madina's helper buys a new freezer for $3,000 and posts Dr Repairs $3,000, Cr Bank $3,000. The trial balance still agrees, but this is an error of principle. It should be Dr Freezer, Cr Bank. Bank is right, so only the debit moves: Dr Freezer $3,000, Cr Repairs $3,000. In the same month a $400 insurance payment went to rent, which is an error of commission: Dr Insurance $400, Cr Rent $400.`,
        ru: `Помощник Мадины покупает морозильник за $3,000 и проводит Дт Ремонт $3,000, Кт Банк $3,000. Ведомость сходится, но это нарушение принципа. Нужно Дт Морозильник, Кт Банк. Банк верен, переносится только дебет: Дт Морозильник $3,000, Кт Ремонт $3,000. В том же месяце оплата страховки $400 попала на аренду, это ошибка счёта: Дт Страховка $400, Кт Аренда $400.`,
        uz: `Madinaning yordamchisi $3,000 ga yangi muzlatgich oladi va Dt Ta'mir $3,000, Kt Bank $3,000 yozadi. Sinov balansi mos keladi, lekin bu tamoyil xatosi. Dt Muzlatgich, Kt Bank bo'lishi kerak. Bank to'g'ri, faqat debet ko'chadi: Dt Muzlatgich $3,000, Kt Ta'mir $3,000. Shu oyda $400 sug'urta to'lovi ijaraga tushgan, bu noto'g'ri hisob xatosi: Dt Sug'urta $400, Kt Ijara $400.`,
      },
    },
    {
      key: {
        en: `- A suspense account holds a debit or credit until the right account is known.
- It is used when the bookkeeper is unsure where an entry belongs.
- It is also used if a source document is wrong, or entries do not balance.
- Only one suspense account is needed, whatever the number of errors.
- The balance can be a debit or a credit.
- It must be cleared before the final accounts are prepared.`,
        ru: `- Счёт неясных сумм держит дебет или кредит, пока не известен нужный счёт.
- Его используют, когда бухгалтер не знает, куда отнести запись.
- Также при ошибке в первичном документе или несходящихся записях.
- Нужен один такой счёт при любом числе ошибок.
- Остаток может быть дебетовым или кредитовым.
- Он должен быть закрыт до итоговой отчётности.`,
        uz: `- Vaqtinchalik hisob to'g'ri hisob aniqlanguncha debet yoki kreditni saqlaydi.
- Hisobchi yozuv qayerga tegishliligini bilmaganda ishlatiladi.
- Birlamchi hujjat xato bo'lsa yoki yozuvlar mos kelmasa ham ishlatiladi.
- Xatolar soni qancha bo'lsa ham bitta shunday hisob kerak.
- Qoldiq debet yoki kredit bo'lishi mumkin.
- U yakuniy hisobotdan oldin yopilishi kerak.`,
      },
      exam: {
        en: `- To clear suspense, decide which side was recorded correctly. The entry in suspense is the side that went astray, and the correction moves it to the right account.
- If the correct side was a credit, the suspense balance is a debit, and it is cleared by Cr Suspense.
- A wrong account with an equal debit and credit needs no suspense account. Nor does removing a duplicated transaction.
- An increase in the allowance with the credit done: Dr Irrecoverable debts expense, Cr Suspense.
- Modifying a machine to make it more productive is capital: Dr Non-current assets, Cr Suspense.
- Shares issued at a premium with the difference in suspense: Dr Suspense, Cr Share premium.
- A debt recovered after write-off, with the bank entry done: Dr Suspense, Cr Irrecoverable debts.
- A transfer of excess depreciation with the debit done: Dr Suspense, Cr Retained earnings.
- Discount received with the payables entry done: Dr Suspense, Cr Discount received.
- Writing off a debt: the credit goes to receivables.
- A debit suspense balance appears when credits exceed debits, such as a rent payment credited to rent as well as to cash, or a debit balance left out of the trial balance.`,
        ru: `- Чтобы закрыть счёт, решите, какая сторона записана верно. На счёте неясных сумм стоит потерянная сторона, а исправление переносит её на верный счёт.
- Если верной была кредитовая сторона, остаток — дебетовый, и закрывается Кт Счёт неясных сумм.
- Неверный счёт с равными дебетом и кредитом не требует счёта неясных сумм. Как и удаление дублированной операции.
- Рост резерва с уже сделанным кредитом: Дт Расход по безнадёжным долгам, Кт Счёт неясных сумм.
- Доработка станка для роста выработки — капитальная: Дт Внеоборотные активы, Кт Счёт неясных сумм.
- Акции с премией и разница на этом счёте: Дт Счёт неясных сумм, Кт Эмиссионный доход.
- Возврат списанного долга при уже сделанной записи банка: Дт Счёт неясных сумм, Кт Безнадёжные долги.
- Перенос избыточной амортизации с уже сделанным дебетом: Дт Счёт неясных сумм, Кт Нераспределённая прибыль.
- Полученная скидка с уже сделанной записью кредиторов: Дт Счёт неясных сумм, Кт Полученная скидка.
- При списании долга кредит идёт в дебиторы.
- Дебетовый остаток появляется, когда кредит больше дебета: например, оплата аренды в кредите аренды и денег, или дебетовый остаток пропущен в ведомости.`,
        uz: `- Hisobni yopish uchun qaysi tomon to'g'ri yozilganini hal qiling. Vaqtinchalik hisobda yo'qolgan tomon turadi, tuzatish uni to'g'ri hisobga ko'chiradi.
- To'g'ri tomon kredit bo'lsa, qoldiq debet va Kt Vaqtinchalik hisob bilan yopiladi.
- Teng debet va kreditli noto'g'ri hisob vaqtinchalik hisob talab qilmaydi. Takror operatsiyani olib tashlash ham.
- Kredit bajarilgan rezerv o'sishi: Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Vaqtinchalik hisob.
- Stanokni unumdorroq qilish kapital: Dt Uzoq muddatli aktivlar, Kt Vaqtinchalik hisob.
- Mukofotli aksiyalar, farq shu hisobda: Dt Vaqtinchalik hisob, Kt Emissiya daromadi.
- Yozib yuborilgan qarz qaytgan, bank yozilgan: Dt Vaqtinchalik hisob, Kt Undirib bo'lmaydigan qarzlar.
- Debet bajarilgan ortiqcha amortizatsiya o'tkazmasi: Dt Vaqtinchalik hisob, Kt Taqsimlanmagan foyda.
- Kreditorlar yozilgan olingan chegirma: Dt Vaqtinchalik hisob, Kt Olingan chegirma.
- Qarzni yozib yuborishda kredit debitorlarga yoziladi.
- Debet qoldiq kredit debetdan oshganda paydo bo'ladi: masalan ijara to'lovi ijara va pulga kreditlangan yoki debet qoldiq sinov balansiga kirmagan.`,
      },
      heading: {
        en: 'Suspense accounts',
        ru: 'Счета неясных сумм',
        uz: 'Vaqtinchalik hisoblar',
      },
      body: {
        en: `A suspense account is a temporary home for a debit or credit until there is enough information to put it in the right account.

There are three situations in a computerised system. The bookkeeper may not know where one part of a transaction belongs, so it is posted to suspense until the destination is known. The bookkeeper may spot an error on a source document, such as an invoice where quantity times price does not equal the total, and may post the difference to suspense so that the invoice can be processed. Or the bookkeeper may record two or more debits, or credits, with no matching entry, and balance the transaction through suspense pending investigation.

A suspense account is treated as a statement of financial position account until it is cleared. It must be cleared before the annual financial statements are prepared.

To clear it, work through each item with the same three questions. What should the entry have been? What was posted? What is the journal to correct it? Any correction that touches suspense is posted to the suspense account until the balance is nil. Remember that not every error found will affect suspense.`,
        ru: `Счёт неясных сумм — временное место для дебета или кредита, пока нет данных, чтобы отнести их на нужный счёт.

В компьютерной системе есть три ситуации. Бухгалтер может не знать, куда отнести часть операции, и записывает её на этот счёт до выяснения. Он может заметить ошибку в первичном документе, например количество на цену не равно итогу, и отнести разницу на этот счёт, чтобы обработать счёт. Или он может записать два и более дебета либо кредита без пары и сбалансировать операцию через этот счёт до проверки.

Счёт неясных сумм считается счётом отчёта о финансовом положении до закрытия. Он должен быть закрыт до годовой отчётности.

Чтобы закрыть его, разберите каждую статью теми же тремя вопросами. Какой должна быть запись? Что проведено? Какой журнал исправит? Каждое исправление, затрагивающее этот счёт, проводится по нему, пока остаток не станет нулевым. Помните, что не каждая найденная ошибка влияет на него.`,
        uz: `Vaqtinchalik hisob debet yoki kredit uchun to'g'ri hisobga qo'yish uchun yetarli ma'lumot bo'lguncha vaqtinchalik joy.

Kompyuter tizimida uch holat bor. Hisobchi operatsiyaning bir qismi qayerga tegishliligini bilmasligi mumkin va aniqlanguncha shu hisobga yozadi. U birlamchi hujjatda xatoni ko'rishi mumkin, masalan miqdor ko'paytma narx jamiga teng emas, va hisob-fakturani ishlash uchun farqni shu hisobga yozadi. Yoki u juftsiz ikki yoki undan ko'p debet yoxud kredit yozib, tekshiruvgacha operatsiyani shu hisob orqali balanslaydi.

Vaqtinchalik hisob yopilguncha moliyaviy holat hisobi hisoblanadi. U yillik moliyaviy hisobotdan oldin yopilishi kerak.

Yopish uchun har bir moddani o'sha uch savol bilan ko'ring. Yozuv qanday bo'lishi kerak edi? Nima yozilgan? Qaysi jurnal tuzatadi? Shu hisobga tegadigan har bir tuzatish qoldiq nol bo'lguncha unga yoziladi. Topilgan har bir xato unga ta'sir qilmasligini unutmang.`,
      },
      example: {
        en: `Madina's helper pays $650 for a display stand but is unsure where it goes, so posts Dr Suspense, Cr Bank. Then $200 arrives at the bank from an unknown source: Dr Bank, Cr Suspense. Suspense has a debit balance of $450. Madina finds the stand is an asset, so Dr Fixtures $650, Cr Suspense $650. The $200 was a customer paying a debt, so Dr Suspense $200, Cr Receivables $200. Suspense is now nil.`,
        ru: `Помощник Мадины платит $650 за витрину, но не знает, куда её отнести, и проводит Дт Счёт неясных сумм, Кт Банк. Затем в банк приходят $200 из неизвестного источника: Дт Банк, Кт Счёт неясных сумм. На счёте дебетовый остаток $450. Мадина выясняет, что витрина — актив: Дт Оборудование $650, Кт Счёт неясных сумм $650. $200 — оплата покупателя: Дт Счёт неясных сумм $200, Кт Дебиторы $200. Счёт теперь нулевой.`,
        uz: `Madinaning yordamchisi vitrina uchun $650 to'laydi, lekin qayerga yozishni bilmaydi va Dt Vaqtinchalik hisob, Kt Bank yozadi. So'ng bankka noma'lum manbadan $200 keladi: Dt Bank, Kt Vaqtinchalik hisob. Hisobda $450 debet qoldiq. Madina vitrina aktiv ekanini aniqlaydi: Dt Jihozlar $650, Kt Vaqtinchalik hisob $650. $200 mijoz to'lovi: Dt Vaqtinchalik hisob $200, Kt Debitorlar $200. Hisob endi nol.`,
      },
    },
    {
      key: {
        en: `- Profit changes only if a correction touches one income or expense account.
- Debit to profit or loss: profit falls. Credit to profit or loss: profit rises.
- Both sides in the statement of financial position: profit does not change.
- Both sides in profit or loss: total profit does not change.
- Suspense counts as a statement of financial position account.
- Revaluations affect other comprehensive income, not profit.`,
        ru: `- Прибыль меняется, только если исправление затрагивает один счёт доходов или расходов.
- Дебет в прибыли или убытке: прибыль падает. Кредит: растёт.
- Обе стороны в отчёте о финансовом положении: прибыль не меняется.
- Обе стороны в прибыли или убытке: итог не меняется.
- Счёт неясных сумм считается счётом отчёта о финансовом положении.
- Переоценка влияет на прочий совокупный доход, а не на прибыль.`,
        uz: `- Foyda faqat tuzatish bitta daromad yoki xarajat hisobiga tegsa o'zgaradi.
- Foyda yoki zararga debet: foyda kamayadi. Kredit: oshadi.
- Ikkala tomon moliyaviy holatda: foyda o'zgarmaydi.
- Ikkala tomon foyda yoki zararda: jami foyda o'zgarmaydi.
- Vaqtinchalik hisob moliyaviy holat hisobi sanaladi.
- Qayta baholash foydaga emas, boshqa umumlashgan daromadga ta'sir qiladi.`,
      },
      exam: {
        en: `- Asset posted as an expense: add back the cost, then deduct a year's depreciation on it.
- Closing inventory written down to NRV reduces profit by the fall in value.
- A cash receipt from a customer that was omitted does not affect profit.
- Writing off a debt already fully allowed for does not change profit again. The cost was recorded when the allowance was made.
- Drawings do not affect profit.
- Rental income shown as interest income leaves profit unchanged, because both are income.
- A sales invoice raised $1,000 too high reduces revenue and profit by $1,000 when corrected.
- A customer deposit for goods not yet sent is deferred income, a current liability, not revenue.
- The non-current part of a loan stays outside current liabilities, but interest accrued on it is current.`,
        ru: `- Актив, записанный как расход: прибавьте стоимость и вычтите годовую амортизацию.
- Списание запасов до ЧСР снижает прибыль на падение стоимости.
- Пропущенное поступление от покупателя на прибыль не влияет.
- Списание долга, полностью покрытого резервом, прибыль не меняет. Расход записан при создании резерва.
- Изъятия на прибыль не влияют.
- Доход от аренды, показанный как проценты, не меняет прибыль: оба — доход.
- Счёт покупателю, выписанный на $1,000 больше, при исправлении снижает выручку и прибыль на $1,000.
- Депозит покупателя за неотгруженный товар — доходы будущих периодов, краткосрочное обязательство, а не выручка.
- Долгосрочная часть кредита не входит в краткосрочные обязательства, а начисленные проценты входят.`,
        uz: `- Xarajat sifatida yozilgan aktiv: qiymatni qo'shing, yillik amortizatsiyani ayiring.
- Yakuniy zaxirani SSQ ga tushirish foydani qiymat pasayishiga kamaytiradi.
- Tushib qolgan mijoz to'lovi foydaga ta'sir qilmaydi.
- To'liq rezerv qilingan qarzni yozib yuborish foydani yana o'zgartirmaydi. Xarajat rezerv tuzilganda yozilgan.
- Olib qo'yishlar foydaga ta'sir qilmaydi.
- Foiz sifatida ko'rsatilgan ijara daromadi foydani o'zgartirmaydi, ikkalasi daromad.
- $1,000 ortiq yozilgan sotuv hisob-fakturasi tuzatilganda tushum va foydani $1,000 ga kamaytiradi.
- Hali yuborilmagan tovar uchun mijoz depoziti kelgusi davr daromadi, qisqa muddatli majburiyat, tushum emas.
- Kreditning uzoq muddatli qismi qisqa muddatli majburiyatga kirmaydi, hisoblangan foiz esa kiradi.`,
      },
      heading: {
        en: 'How corrections change profit',
        ru: 'Как исправления меняют прибыль',
        uz: 'Tuzatishlar foydani qanday o\'zgartiradi',
      },
      body: {
        en: `A correcting journal may change draft profit, depending on which accounts it touches. If both sides are statement of financial position accounts, profit does not move. If a statement of profit or loss account is debited, profit falls. If one is credited, profit rises. If both sides are in profit or loss, the two effects cancel and total profit is the same, though individual lines change.

A suspense account counts as a statement of financial position account. So Dr Suspense, Cr Insurance raises profit, while Dr Payables, Cr Suspense does not change it.

Corrections can also affect other comprehensive income, but in the FA exam only journals for the revaluation of property, plant and equipment do this.

An extreme case shows why the trial balance is not enough. If a $1,000 cash sale is posted as Dr Non-current assets, Cr Trade payables, the trial balance agrees. Yet non-current assets and payables are overstated, cash and revenue are understated, and profit is $1,000 too low. The fix is Dr Cash at bank, Cr Non-current assets, and Dr Trade payables, Cr Revenue.`,
        ru: `Исправляющий журнал может менять черновую прибыль в зависимости от затронутых счетов. Если обе стороны — счета отчёта о финансовом положении, прибыль не меняется. Если дебетуется счёт прибыли или убытка, она падает. Если кредитуется, растёт. Если обе стороны в прибыли или убытке, влияния гасятся, итог тот же, хотя строки меняются.

Счёт неясных сумм считается счётом отчёта о финансовом положении. Поэтому Дт Счёт неясных сумм, Кт Страховка повышает прибыль, а Дт Кредиторы, Кт Счёт неясных сумм не меняет её.

Исправления могут затрагивать и прочий совокупный доход, но на экзамене FA только журналы по переоценке основных средств.

Крайний случай показывает, почему ведомости мало. Если продажа за $1,000 наличными проведена как Дт Внеоборотные активы, Кт Торговые кредиторы, ведомость сойдётся. Но активы и кредиторы завышены, деньги и выручка занижены, а прибыль меньше на $1,000. Исправление: Дт Банк, Кт Внеоборотные активы и Дт Торговые кредиторы, Кт Выручка.`,
        uz: `Tuzatish jurnali qaysi hisoblarga tegishiga qarab qoralama foydani o'zgartirishi mumkin. Ikkala tomon moliyaviy holat hisoblari bo'lsa, foyda o'zgarmaydi. Foyda yoki zarar hisobi debetlansa, foyda kamayadi. Kreditlansa, oshadi. Ikkala tomon foyda yoki zararda bo'lsa, ta'sirlar qoplanadi, jami foyda bir xil, lekin qatorlar o'zgaradi.

Vaqtinchalik hisob moliyaviy holat hisobi sanaladi. Shuning uchun Dt Vaqtinchalik hisob, Kt Sug'urta foydani oshiradi, Dt Kreditorlar, Kt Vaqtinchalik hisob esa o'zgartirmaydi.

Tuzatishlar boshqa umumlashgan daromadga ham ta'sir qilishi mumkin, lekin FA imtihonida faqat asosiy vositalarni qayta baholash jurnallari.

Chekka holat sinov balansi nega yetarli emasligini ko'rsatadi. $1,000 naqd sotuv Dt Uzoq muddatli aktivlar, Kt Savdo kreditorlari deb yozilsa, sinov balansi mos keladi. Lekin aktivlar va kreditorlar oshgan, pul va tushum kamaygan, foyda $1,000 past. Tuzatish: Dt Bank, Kt Uzoq muddatli aktivlar va Dt Savdo kreditorlari, Kt Tushum.`,
      },
      example: {
        en: `Madina's draft profit is $8,000. The $3,000 freezer posted to repairs is corrected: repairs fall, so profit rises by $3,000. It now needs depreciation of 20%, which is $600, so profit falls by $600. The $400 of insurance moved out of rent has no effect, because both are expenses. A $500 customer receipt that was omitted has no effect, because bank and receivables are not in profit or loss. Revised profit is $8,000 + $3,000 - $600 = $10,400.`,
        ru: `Черновая прибыль Мадины $8,000. Морозильник на $3,000 в ремонте исправлен: ремонт падает, прибыль растёт на $3,000. Теперь нужна амортизация 20%, это $600, и прибыль падает на $600. Перенос страховки $400 с аренды не влияет, так как оба — расходы. Пропущенное поступление от покупателя $500 не влияет: банк и дебиторы не в прибыли или убытке. Исправленная прибыль: $8,000 + $3,000 - $600 = $10,400.`,
        uz: `Madinaning qoralama foydasi $8,000. Ta'mirga yozilgan $3,000 lik muzlatgich tuzatildi: ta'mir kamayadi, foyda $3,000 oshadi. Endi 20% amortizatsiya kerak, bu $600, foyda $600 kamayadi. $400 sug'urtani ijaradan ko'chirish ta'sir qilmaydi, ikkalasi xarajat. Tushib qolgan $500 mijoz to'lovi ta'sir qilmaydi: bank va debitorlar foyda yoki zararda emas. Tuzatilgan foyda: $8,000 + $3,000 - $600 = $10,400.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Trial balance', ru: 'Оборотная ведомость', uz: 'Sinov balansi' }, definition: { en: 'A list of ledger balances in debit and credit columns.', ru: 'Список остатков счетов в столбцах дебета и кредита.', uz: 'Hisob qoldiqlarining debet va kredit ustunlaridagi ro\'yxati.' } },
    { term: { en: 'Error of omission', ru: 'Ошибка пропуска', uz: 'Tushib qolish xatosi' }, definition: { en: 'A transaction left out of the records completely.', ru: 'Операция полностью не записана.', uz: 'Operatsiya umuman yozilmagan.' } },
    { term: { en: 'Error of commission', ru: 'Ошибка счёта', uz: 'Noto\'g\'ri hisob xatosi' }, definition: { en: 'An entry made in the wrong account of the right type.', ru: 'Запись на неверном счёте верного типа.', uz: 'To\'g\'ri turdagi boshqa hisobga yozuv.' } },
    { term: { en: 'Error of principle', ru: 'Нарушение принципа', uz: 'Tamoyil xatosi' }, definition: { en: 'An entry that breaks an accounting principle, such as treating an asset as an expense.', ru: 'Запись, нарушающая принцип учёта, например актив как расход.', uz: 'Hisob tamoyilini buzuvchi yozuv, masalan aktivni xarajat qilish.' } },
    { term: { en: 'Compensating error', ru: 'Компенсирующая ошибка', uz: 'Kompensatsiyalovchi xato' }, definition: { en: 'Two errors that cancel each other out.', ru: 'Две ошибки, гасящие друг друга.', uz: 'Bir-birini qoplaydigan ikki xato.' } },
    { term: { en: 'Error of original entry', ru: 'Ошибка исходной записи', uz: 'Dastlabki yozuv xatosi' }, definition: { en: 'The wrong amount used for both sides of an entry.', ru: 'Неверная сумма с обеих сторон записи.', uz: 'Yozuvning ikkala tomonida noto\'g\'ri summa.' } },
    { term: { en: 'Reversal of entries', ru: 'Обратная запись', uz: 'Teskari yozuv' }, definition: { en: 'The right accounts and amount, with debit and credit swapped.', ru: 'Верные счета и сумма, но дебет и кредит перепутаны.', uz: 'Hisob va summa to\'g\'ri, debet va kredit almashgan.' } },
    { term: { en: 'Suspense account', ru: 'Счёт неясных сумм', uz: 'Vaqtinchalik hisob' }, definition: { en: 'A temporary account for entries until their right place is known.', ru: 'Временный счёт для записей, пока не известно их место.', uz: 'Yozuvlar to\'g\'ri joyi aniqlanguncha turadigan vaqtinchalik hisob.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter14;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter14.id] = chapter14;
