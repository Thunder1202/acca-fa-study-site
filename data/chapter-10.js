'use strict';

const chapter10 = {
  id: 'chapter-10',
  titles: { en: 'Receivables', ru: 'Дебиторская задолженность', uz: 'Debitorlik qarzi' },
  objectives: [
    { en: 'Explain and identify examples of receivables', ru: 'Объяснять и приводить примеры дебиторской задолженности', uz: 'Debitorlik qarzini tushuntirish va misollar keltirish' },
    { en: 'Understand the purpose of an aged receivables analysis', ru: 'Понимать назначение анализа дебиторской задолженности по срокам', uz: 'Debitorlik qarzini muddatlar bo\'yicha tahlil qilish maqsadini tushunish' },
    { en: 'Record irrecoverable debts and debts later recovered', ru: 'Отражать безнадёжные долги и позднее возвращённые долги', uz: 'Undirib bo\'lmaydigan qarzlarni va keyin qaytarilgan qarzlarni qayd etish' },
    { en: 'Record adjustments to the allowance for receivables', ru: 'Отражать корректировки резерва по дебиторской задолженности', uz: 'Debitorlik qarzi rezervi tuzatishlarini qayd etish' },
    { en: 'Identify the effect on profit and net assets', ru: 'Определять влияние на прибыль и чистые активы', uz: 'Foyda va sof aktivlarga ta\'sirini aniqlash' },
  ],
  sections: [
    {
      key: {
        en: `- Receivables: amounts owed to the business. Mostly trade receivables from credit sales.
- Debits: opening balance, credit sales, dishonoured cheques, refunds, interest charged.
- Credits: returns, cash received, irrecoverable debts, contras, discounts allowed.
- The closing balance goes into the statement of financial position.
- The control account agrees to the total of the customer accounts.`,
        ru: `- Дебиторская задолженность: суммы, которые должны бизнесу. В основном торговая, от продаж в кредит.
- Дебет: сальдо на начало, продажи в кредит, возвращённые чеки, возвраты денег, начисленные проценты.
- Кредит: возвраты, полученные деньги, безнадёжные долги, взаимозачёты, предоставленные скидки.
- Остаток на конец идёт в отчёт о финансовом положении.
- Контрольный счёт совпадает с суммой счетов покупателей.`,
        uz: `- Debitorlik qarzi: biznesga qarzdor summalar. Asosan nasiya sotuvdan savdo debitorligi.
- Debet: boshlang'ich qoldiq, nasiya sotuv, qaytgan cheklar, qaytarilgan pul, hisoblangan foiz.
- Kredit: qaytarishlar, olingan pul, undirib bo'lmaydigan qarzlar, o'zaro hisob-kitob, berilgan chegirmalar.
- Yakuniy qoldiq moliyaviy holat hisobotiga kiradi.
- Nazorat hisobi mijozlar hisoblari yig'indisiga teng.`,
      },
      exam: {
        en: `- Cash sales never go through the receivables account. Discounts received and the allowance for receivables do not belong there either.
- A contra reduces receivables: Dr Payables, Cr Receivables.
- A discount allowed that was not expected when the invoice was issued is deducted from the receivable. If it was expected, the receivable was already recorded net of it.
- To find cash received from credit customers, work back from the opening balance, credit sales, write-offs, contras and the closing balance.`,
        ru: `- Продажи за наличные никогда не проходят через счёт дебиторов. Полученные скидки и резерв по дебиторской задолженности там тоже не нужны.
- Взаимозачёт уменьшает дебиторов: Дт Кредиторы, Кт Дебиторы.
- Предоставленная скидка, которую не ожидали при выставлении счёта, вычитается из долга. Если ожидали, долг уже записан за вычетом неё.
- Чтобы найти деньги, полученные от покупателей в кредит, считайте от сальдо на начало, продаж в кредит, списаний, взаимозачётов и сальдо на конец.`,
        uz: `- Naqd sotuvlar hech qachon debitorlar hisobidan o'tmaydi. Olingan chegirmalar va debitorlik rezervi ham u yerga tegishli emas.
- O'zaro hisob-kitob debitorlarni kamaytiradi: Dt Kreditorlar, Kt Debitorlar.
- Hisob-faktura berilganda kutilmagan berilgan chegirma qarzdan ayiriladi. Kutilgan bo'lsa, qarz allaqachon undan keyin yozilgan.
- Nasiya mijozlardan olingan pulni topish uchun boshlang'ich qoldiq, nasiya sotuv, yozib yuborishlar, o'zaro hisob-kitob va yakuniy qoldiqdan orqaga hisoblang.`,
      },
      heading: {
        en: 'Trade receivables in the ledger',
        ru: 'Торговая дебиторская задолженность в книге',
        uz: 'Savdo debitorligi kitobda',
      },
      body: {
        en: `Examples of receivables include amounts from credit sales (trade receivables), refunds of sales tax or business income tax, and insurance claims agreed but not yet paid.

The trade receivables account in the general ledger shows, on the debit side, the opening balance, credit sales, dishonoured cheques (the payment has not in fact been received), refunds of customers' credit balances, and any interest charged on overdue amounts. On the credit side it shows sales returns, cash received, irrecoverable debts, and contras with payables (where the business both sells to and buys from the same customer, so an agreed amount is offset: Dr Payables, Cr Receivables). The closing balance goes into the statement of financial position.

The individual customer accounts are memorandum-only and are updated with the same information, so the total of the customer accounts should equal the ledger account. Any difference is found by a reconciliation.`,
        ru: `Примеры дебиторской задолженности: суммы по продажам в кредит (торговая дебиторская задолженность), возврат налога с продаж или налога на прибыль и согласованные, но ещё не выплаченные страховые требования.

Счёт торговой дебиторской задолженности в главной книге показывает по дебету сальдо на начало, продажи в кредит, возвращённые чеки (платёж по факту не получен), возвраты кредитовых сальдо покупателей и проценты за просрочку. По кредиту — возвраты проданного, полученные деньги, безнадёжные долги и взаимозачёты с кредиторами (когда бизнес и продаёт, и покупает у одного клиента, поэтому согласованная сумма зачитывается: Дт Кредиторы, Кт Дебиторы). Остаток на конец идёт в отчёт о финансовом положении.

Счета отдельных покупателей — вспомогательные, они обновляются теми же данными, поэтому сумма счетов покупателей должна равняться счёту в книге. Расхождение находят сверкой.`,
        uz: `Debitorlik qarzi misollari: nasiya sotuvdan summalar (savdo debitorligi), sotuv solig'i yoki foyda solig'ining qaytarilishi va kelishilgan, lekin hali to'lanmagan sug'urta da'volari.

Bosh kitobdagi savdo debitorligi hisobi debet tomonda boshlang'ich qoldiqni, nasiya sotuvni, qaytgan cheklarni (to'lov aslida olinmagan), mijozlar kredit qoldiqlarini qaytarishni va kechikkan summalarga hisoblangan foizni ko'rsatadi. Kredit tomonda sotuv qaytarishlarini, olingan pulni, undirib bo'lmaydigan qarzlarni va kreditorlar bilan o'zaro hisob-kitobni (biznes bir mijozga ham sotsa, ham undan xarid qilsa, kelishilgan summa o'zaro hisobga olinadi: Dt Kreditorlar, Kt Debitorlar). Yakuniy qoldiq moliyaviy holat hisobotiga kiradi.

Alohida mijoz hisoblari yordamchi bo'lib, xuddi shu ma'lumot bilan yangilanadi, shuning uchun mijoz hisoblari yig'indisi kitobdagi hisobga teng bo'lishi kerak. Farq solishtirish orqali topiladi.`,
      },
      example: {
        en: `Madina's Mart sells to cafes on credit. Cafe Zamin owes $2,000 at the start of the year. During the year Madina sells it $9,000 more on credit, and one of its cheques for $500 is returned unpaid by its bank. Cafe Zamin also supplies her with paper bags worth $300, so they agree a contra. Each of these shows on Cafe Zamin's account and in the total receivables account.`,
        ru: `Madina's Mart продаёт кафе в кредит. Кафе Zamin должно $2,000 в начале года. За год Мадина продаёт ему ещё на $9,000 в кредит, а один его чек на $500 банк возвращает неоплаченным. Кафе Zamin также поставляет ей бумажные пакеты на $300, поэтому они соглашаются на взаимозачёт. Всё это видно на счёте кафе Zamin и в общем счёте дебиторов.`,
        uz: `Madina's Mart kafelarga nasiyaga sotadi. Zamin kafesi yil boshida $2,000 qarzdor. Yil davomida Madina unga yana $9,000 lik nasiya sotadi va uning $500 lik cheki banki tomonidan to'lanmay qaytariladi. Zamin kafesi unga $300 lik qog'oz paketlar ham yetkazadi, shuning uchun ular o'zaro hisob-kitobga kelishadi. Bularning barchasi Zamin kafesi hisobida va umumiy debitorlar hisobida ko'rinadi.`,
      },
    },
    {
      key: {
        en: `- Credit sale: Dr Trade receivables, Cr Sales revenue when goods or services are supplied.
- Benefits of credit: new markets, more sales, customer loyalty.
- Costs of credit: interest lost, weaker cash flow, chasing late payers, irrecoverable debts.
- Aged receivables analysis: lists each customer's debt by age, so overdue ones are followed up.
- Credit limit: the most a customer can owe. It reduces the risk of loss.`,
        ru: `- Продажа в кредит: Дт Торговая дебиторская задолженность, Кт Выручка при поставке товаров или услуг.
- Плюсы кредита: новые рынки, больше продаж, лояльность клиентов.
- Минусы кредита: потеря процентов, слабее денежный поток, погоня за должниками, безнадёжные долги.
- Анализ по срокам: перечисляет долги каждого клиента по возрасту, чтобы просроченные отслеживались.
- Кредитный лимит: наибольшая сумма долга клиента. Снижает риск убытка.`,
        uz: `- Nasiya sotuv: tovar yoki xizmat yetkazilganda Dt Savdo debitorligi, Kt Sotuv tushumi.
- Nasiya afzalliklari: yangi bozorlar, ko'proq sotuv, mijozlar sadoqati.
- Nasiya xarajatlari: yo'qotilgan foiz, zaiflashgan pul oqimi, kechiktirganlarni quvish, undirib bo'lmaydigan qarzlar.
- Muddatlar bo'yicha tahlil: har bir mijoz qarzini yoshi bo'yicha ko'rsatadi, shunda kechikkanlar kuzatiladi.
- Kredit limiti: mijoz qarzdor bo'lishi mumkin bo'lgan eng ko'p summa. U zarar xavfini kamaytiradi.`,
      },
      exam: {
        en: `- Selling on credit does not improve cash flow. It can make it worse, because customers pay late and some never pay.
- An aged analysis helps credit control and also helps calculate the year-end allowance. Separate records hold the credit approvals and limits.
- A credit limit manages the risk of loss from credit customers who cannot pay. It has nothing to do with cash customers or inventory.`,
        ru: `- Продажи в кредит не улучшают денежный поток. Они могут его ухудшить, так как клиенты платят поздно, а некоторые вообще не платят.
- Анализ по срокам помогает кредитному контролю и расчёту резерва на конец года. Одобрения и лимиты кредита хранятся отдельно.
- Кредитный лимит управляет риском убытка от клиентов, не способных заплатить. Он не связан с клиентами за наличные или запасами.`,
        uz: `- Nasiyaga sotish pul oqimini yaxshilamaydi. U uni yomonlashtirishi mumkin, chunki mijozlar kech to'laydi, ba'zilari umuman to'lamaydi.
- Muddatlar bo'yicha tahlil kredit nazoratiga va yil oxiridagi rezervni hisoblashga yordam beradi. Kredit ruxsatlari va limitlari alohida yuritiladi.
- Kredit limiti to'lay olmaydigan nasiya mijozlaridan zarar xavfini boshqaradi. U naqd mijozlar yoki zaxiralarga aloqador emas.`,
      },
      heading: {
        en: 'Credit sales and credit control',
        ru: 'Продажи в кредит и кредитный контроль',
        uz: 'Nasiya sotuv va kredit nazorati',
      },
      body: {
        en: `A cash sale is Dr Cash at bank, Cr Sales revenue. A credit sale is recorded when the right to the income is earned, usually on delivery: Dr Trade receivables, Cr Sales revenue, with the customer's account updated at the same time. When the customer pays, Dr Cash at bank, Cr Trade receivables. Typical credit periods are 30 to 60 days.

Credit helps a business enter new markets, increase sales and build loyalty. It also costs interest lost by being paid later, can weaken cash flow, takes time and money to chase overdue accounts, and brings a risk of irrecoverable debts.

An aged receivables analysis, drawn from the customer accounts, lists how much each customer owes and how long it has been outstanding. Credit control uses it to follow up overdue amounts. Prompt collection improves cash flow and reduces irrecoverable debts. A credit limit for each customer caps the amount of credit given, which reduces the risk of loss, helps build trust with new customers and forms part of credit control.`,
        ru: `Продажа за наличные: Дт Деньги в банке, Кт Выручка. Продажа в кредит отражается, когда заработано право на доход, обычно при поставке: Дт Торговая дебиторская задолженность, Кт Выручка, и одновременно обновляется счёт покупателя. Когда клиент платит: Дт Деньги в банке, Кт Торговая дебиторская задолженность. Обычные кредитные сроки — от 30 до 60 дней.

Кредит помогает выйти на новые рынки, увеличить продажи и добиться лояльности. Он также стоит потерянных процентов из-за более позднего платежа, может ослабить денежный поток, требует времени и денег на просроченные счета и несёт риск безнадёжных долгов.

Анализ дебиторов по срокам, составленный по счетам клиентов, показывает, сколько должен каждый клиент и как давно. Кредитный контроль использует его для работы с просрочкой. Быстрый сбор улучшает денежный поток и снижает безнадёжные долги. Кредитный лимит для каждого клиента ограничивает выданный кредит, снижает риск убытка, помогает выстроить доверие с новыми клиентами и входит в кредитный контроль.`,
        uz: `Naqd sotuv: Dt Bankdagi pul, Kt Sotuv tushumi. Nasiya sotuv daromadga huquq topilganda, odatda yetkazib berishda yoziladi: Dt Savdo debitorligi, Kt Sotuv tushumi, shu bilan birga mijoz hisobi yangilanadi. Mijoz to'lasa: Dt Bankdagi pul, Kt Savdo debitorligi. Odatiy kredit muddati 30 dan 60 kungacha.

Nasiya biznesga yangi bozorlarga chiqishga, sotuvni oshirishga va sadoqatni mustahkamlashga yordam beradi. U yana kechroq to'lov tufayli yo'qotilgan foizga tushadi, pul oqimini zaiflashtirishi mumkin, kechikkan hisoblarni quvish vaqt va pul talab qiladi va undirib bo'lmaydigan qarz xavfini keltiradi.

Mijoz hisoblaridan tuzilgan debitorlarni muddatlar bo'yicha tahlil qilish har bir mijoz qancha qarzdor va qancha vaqtdan beri ekanini ko'rsatadi. Kredit nazorati undan kechikkan summalarni kuzatish uchun foydalanadi. Tez undirish pul oqimini yaxshilaydi va undirib bo'lmaydigan qarzlarni kamaytiradi. Har bir mijoz uchun kredit limiti berilgan kreditni cheklaydi, zarar xavfini kamaytiradi, yangi mijozlar bilan ishonch o'rnatishga yordam beradi va kredit nazoratining bir qismi.`,
      },
      example: {
        en: `When Madina delivers $3,000 of goods to Cafe Zamin, she records Dr Trade receivables $3,000, Cr Sales revenue $3,000. Her monthly aged list shows Cafe Zamin owes $1,200 that is 60 days old. She phones them before the debt grows. Cafe Zamin's credit limit is $4,000, so she will not deliver more once it owes that amount.`,
        ru: `Когда Мадина поставляет в кафе Zamin товары на $3,000, она делает проводку Дт Торговая дебиторская задолженность $3,000, Кт Выручка $3,000. Её ежемесячный список по срокам показывает, что кафе Zamin должно $1,200 со сроком 60 дней. Она звонит им, пока долг не вырос. Кредитный лимит кафе Zamin — $4,000, поэтому она не будет поставлять больше, когда оно задолжает эту сумму.`,
        uz: `Madina Zamin kafesiga $3,000 lik tovar yetkazganda, Dt Savdo debitorligi $3,000, Kt Sotuv tushumi $3,000 yozadi. Uning oylik muddatlar ro'yxati Zamin kafesi 60 kunlik $1,200 qarzdor ekanini ko'rsatadi. U qarz o'smasdan oldin ularga qo'ng'iroq qiladi. Zamin kafesining kredit limiti $4,000, shuning uchun shuncha qarz bo'lganda u ko'proq yetkazmaydi.`,
      },
    },
    {
      key: {
        en: `- Irrecoverable debt: highly unlikely to be received, so it is removed from receivables.
- Dr Irrecoverable debts expense, Cr Trade receivables. It reduces profit and net assets.
- The original sale stays in revenue. Only the expense is added.
- Debt recovered later: Dr Bank, Cr Irrecoverable debts expense.`,
        ru: `- Безнадёжный долг: получение крайне маловероятно, поэтому он убирается из дебиторской задолженности.
- Дт Расход по безнадёжным долгам, Кт Торговая дебиторская задолженность. Уменьшает прибыль и чистые активы.
- Исходная продажа остаётся в выручке. Добавляется только расход.
- Долг, возвращённый позже: Дт Банк, Кт Расход по безнадёжным долгам.`,
        uz: `- Undirib bo'lmaydigan qarz: olinishi juda ehtimoldan yiroq, shuning uchun debitorlikdan chiqariladi.
- Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Savdo debitorligi. Foyda va sof aktivlarni kamaytiradi.
- Dastlabki sotuv tushumda qoladi. Faqat xarajat qo'shiladi.
- Keyin qaytgan qarz: Dt Bank, Kt Undirib bo'lmaydigan qarzlar xarajati.`,
      },
      exam: {
        en: `- A debt that was already covered by an allowance is still written off with Dr Irrecoverable debts expense, Cr Receivables. The allowance is reviewed separately at the year end.
- When a debt is recovered after write-off, the credit cannot go to receivables, because the debt is no longer there.
- Some businesses keep a separate irrecoverable debts recovered account.`,
        ru: `- Долг, уже покрытый резервом, всё равно списывается проводкой Дт Расход по безнадёжным долгам, Кт Дебиторы. Резерв пересматривается отдельно в конце года.
- Когда долг возвращается после списания, кредит нельзя отнести на дебиторов, так как долга там уже нет.
- Некоторые компании ведут отдельный счёт возвращённых безнадёжных долгов.`,
        uz: `- Rezerv bilan allaqachon qoplangan qarz baribir Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Debitorlar bilan yozib yuboriladi. Rezerv yil oxirida alohida ko'rib chiqiladi.
- Qarz yozib yuborilgandan keyin qaytsa, kreditni debitorlarga yozib bo'lmaydi, chunki qarz u yerda endi yo'q.
- Ba'zi bizneslar qaytgan undirib bo'lmaydigan qarzlar uchun alohida hisob yuritadi.`,
      },
      heading: {
        en: 'Irrecoverable debts and recoveries',
        ru: 'Безнадёжные долги и их возврат',
        uz: 'Undirib bo\'lmaydigan qarzlar va ularning qaytishi',
      },
      body: {
        en: `Under the accruals concept a sale is recognised whether or not the customer pays. Sometimes a customer cannot or will not pay, for example when it is in formal insolvency proceedings. If it is highly unlikely that the debt will be received, it is an irrecoverable debt and is written off.

Prudently, the debt is removed from the receivables account and the loss is shown as an expense: Dr Irrecoverable debts expense, Cr Trade receivables. It is also removed from the customer's memorandum account. The original sale is left alone, because when it was made cash was expected.

If a written-off debt is later paid, in whole or in part, the normal entry Dr Bank, Cr Receivables cannot be used, because the debt has already been taken out of receivables. The net effect of the two transactions is Dr Bank, Cr Irrecoverable debts expense, which reverses the expense recorded earlier. In a computerised system the receipt is first posted automatically against receivables, and a manual journal then moves the credit to the irrecoverable debts expense account.`,
        ru: `По принципу начисления продажа признаётся независимо от того, платит ли клиент. Иногда клиент не может или не хочет платить, например при формальной процедуре банкротства. Если получение долга крайне маловероятно, это безнадёжный долг, и его списывают.

Осмотрительно долг убирается со счёта дебиторов, а убыток показывается расходом: Дт Расход по безнадёжным долгам, Кт Торговая дебиторская задолженность. Он убирается и из вспомогательного счёта клиента. Исходная продажа не меняется, потому что при её совершении ожидались деньги.

Если списанный долг позже оплачен полностью или частично, обычную проводку Дт Банк, Кт Дебиторы использовать нельзя, так как долг уже убран из дебиторов. Итог двух операций: Дт Банк, Кт Расход по безнадёжным долгам, что сторнирует ранее отражённый расход. В компьютерной системе поступление сначала автоматически относится на дебиторов, а затем ручная проводка переносит кредит на счёт расхода по безнадёжным долгам.`,
        uz: `Hisoblash tamoyiliga ko'ra sotuv mijoz to'lasa ham, to'lamasa ham tan olinadi. Ba'zan mijoz to'lay olmaydi yoki to'lamaydi, masalan rasmiy bankrotlik jarayonida. Qarz olinishi juda ehtimoldan yiroq bo'lsa, u undirib bo'lmaydigan qarz va yozib yuboriladi.

Ehtiyotkorlik bilan qarz debitorlar hisobidan olib tashlanadi, zarar esa xarajat sifatida ko'rsatiladi: Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Savdo debitorligi. U mijozning yordamchi hisobidan ham olib tashlanadi. Dastlabki sotuvga tegilmaydi, chunki u amalga oshganda pul kutilgan edi.

Yozib yuborilgan qarz keyin to'liq yoki qisman to'lansa, odatdagi Dt Bank, Kt Debitorlar yozuvidan foydalanib bo'lmaydi, chunki qarz allaqachon debitorlikdan chiqarilgan. Ikki operatsiyaning sof natijasi Dt Bank, Kt Undirib bo'lmaydigan qarzlar xarajati, bu oldin yozilgan xarajatni qaytaradi. Kompyuter tizimida kirim avval avtomatik debitorlarga yoziladi, so'ng qo'lda yozuv kreditni undirib bo'lmaydigan qarzlar xarajati hisobiga o'tkazadi.`,
      },
      example: {
        en: `Cafe Aziz owes Madina $800 and is declared bankrupt. She writes it off: Dr Irrecoverable debts expense $800, Cr Trade receivables $800. Her sales revenue still includes the $800 sale. Months later the bankruptcy pays $300 to its creditors. She records Dr Bank $300, Cr Irrecoverable debts expense $300, so the net cost of the bad debt falls to $500.`,
        ru: `Кафе Aziz должно Мадине $800 и объявлено банкротом. Она списывает долг: Дт Расход по безнадёжным долгам $800, Кт Торговая дебиторская задолженность $800. Её выручка по-прежнему включает продажу на $800. Через несколько месяцев при банкротстве кредиторам выплачивают $300. Она делает проводку Дт Банк $300, Кт Расход по безнадёжным долгам $300, и чистая стоимость безнадёжного долга падает до $500.`,
        uz: `Aziz kafesi Madinaga $800 qarzdor va bankrot deb e'lon qilindi. U uni yozib yuboradi: Dt Undirib bo'lmaydigan qarzlar xarajati $800, Kt Savdo debitorligi $800. Uning sotuv tushumi hamon $800 lik sotuvni o'z ichiga oladi. Bir necha oy o'tib bankrotlik kreditorlarga $300 to'laydi. U Dt Bank $300, Kt Undirib bo'lmaydigan qarzlar xarajati $300 yozadi, shunda yomon qarzning sof narxi $500 ga tushadi.`,
      },
    },
    {
      key: {
        en: `- Allowance: for debts that may not be paid, but are not yet written off.
- Only for specific receivables with objective evidence, such as overdue, disputed or the customer in difficulty.
- Set it up: Dr Irrecoverable debts expense, Cr Allowance for receivables.
- Only the movement goes to profit or loss: closing allowance - opening allowance.
- Statement of financial position: receivables less the allowance.`,
        ru: `- Резерв: для долгов, которые могут не быть оплачены, но ещё не списаны.
- Только по конкретным долгам при объективных признаках: просрочка, спор или трудности клиента.
- Создаётся: Дт Расход по безнадёжным долгам, Кт Резерв по дебиторской задолженности.
- В прибыль или убыток идёт только изменение: резерв на конец - резерв на начало.
- Отчёт о финансовом положении: дебиторы минус резерв.`,
        uz: `- Rezerv: to'lanmasligi mumkin, lekin hali yozib yuborilmagan qarzlar uchun.
- Faqat aniq qarzlar uchun, ob'ektiv dalil bilan: kechikkan, bahsli yoki mijoz qiyinchilikda.
- Yaratish: Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Debitorlik rezervi.
- Foyda yoki zararga faqat o'zgarish o'tadi: yakuniy rezerv - boshlang'ich rezerv.
- Moliyaviy holat hisoboti: debitorlar minus rezerv.`,
      },
      exam: {
        en: `- Steps: write off irrecoverable debts; take the receivables balance after the write-offs; set the allowance required; compare with the opening allowance; charge or credit the difference; deduct the closing allowance in the statement of financial position.
- Only one irrecoverable debts expense account is needed for write-offs, recoveries and allowance movements.
- A fall in the allowance is a credit to the expense account, so it increases profit. A rise in the allowance reduces profit and net current assets.
- The allowance does not change the receivables ledger balance.`,
        ru: `- Шаги: списать безнадёжные долги; взять сальдо дебиторов после списаний; определить нужный резерв; сравнить с резервом на начало; отнести разницу в расход или доход; вычесть резерв на конец в отчёте о финансовом положении.
- Для списаний, возвратов и изменения резерва нужен только один счёт расхода по безнадёжным долгам.
- Уменьшение резерва — кредит на счёт расхода, поэтому прибыль растёт. Увеличение резерва уменьшает прибыль и чистые оборотные активы.
- Резерв не меняет остаток счёта дебиторов в книге.`,
        uz: `- Qadamlar: undirib bo'lmaydigan qarzlarni yozib yuboring; yozib yuborishdan keyingi debitorlar qoldig'ini oling; kerakli rezervni belgilang; boshlang'ich rezerv bilan solishtiring; farqni xarajat yoki daromadga yozing; moliyaviy holat hisobotida yakuniy rezervni ayiring.
- Yozib yuborish, qaytarish va rezerv o'zgarishi uchun faqat bitta undirib bo'lmaydigan qarzlar xarajati hisobi kerak.
- Rezervning kamayishi xarajat hisobiga kredit, shuning uchun foyda oshadi. Rezervning oshishi foyda va sof joriy aktivlarni kamaytiradi.
- Rezerv debitorlar kitob qoldig'ini o'zgartirmaydi.`,
      },
      heading: {
        en: 'The allowance for receivables',
        ru: 'Резерв по дебиторской задолженности',
        uz: 'Debitorlik qarzi rezervi',
      },
      body: {
        en: `Some debts cause concern but are not yet regarded as irrecoverable. Prudence says to recognise the possible loss in profit or loss, but the receivable must stay in the accounts in case the customer pays. So an allowance is created. It is a credit balance that is netted against trade receivables in the statement of financial position, giving a net figure for receivables that are probably recoverable.

The allowance should cover only specific amounts, where there is objective evidence that a particular receivable may not be recovered in part or in full: the customer is in financial difficulty, is disputing the invoice, or payment is already overdue.

The entry to set one up is Dr Irrecoverable debts expense, Cr Allowance for receivables. If there is already an allowance, only the movement is charged: the closing allowance less the opening allowance. An increase is an expense, and a decrease is a credit to the irrecoverable debts expense account.

The working order is: write off irrecoverable debts; calculate the receivables balance after the write-offs; find the allowance now required; compare it with the opening allowance; account for the difference; and deduct the closing allowance from receivables in the statement of financial position.`,
        ru: `Некоторые долги вызывают опасения, но ещё не считаются безнадёжными. Осмотрительность требует признать возможный убыток в прибыли или убытке, но дебиторская задолженность остаётся в учёте на случай оплаты клиентом. Поэтому создаётся резерв. Это кредитовое сальдо, которое вычитается из торговой дебиторской задолженности в отчёте о финансовом положении, давая чистую сумму вероятно возвращаемых долгов.

Резерв должен покрывать только конкретные суммы при объективных признаках, что конкретный долг может быть не возвращён полностью или частично: клиент в финансовых затруднениях, оспаривает счёт или платёж уже просрочен.

Проводка для создания: Дт Расход по безнадёжным долгам, Кт Резерв по дебиторской задолженности. Если резерв уже есть, начисляется только изменение: резерв на конец минус резерв на начало. Увеличение — расход, а уменьшение — кредит на счёт расхода по безнадёжным долгам.

Порядок расчёта: списать безнадёжные долги; рассчитать сальдо дебиторов после списаний; найти нужный резерв; сравнить с резервом на начало; отразить разницу; вычесть резерв на конец из дебиторов в отчёте о финансовом положении.`,
        uz: `Ba'zi qarzlar xavotir tug'diradi, lekin hali undirib bo'lmaydigan hisoblanmaydi. Ehtiyotkorlik mumkin bo'lgan zararni foyda yoki zararda tan olishni aytadi, lekin mijoz to'lasa, debitorlik qarzi hisobda qolishi kerak. Shuning uchun rezerv yaratiladi. Bu kredit qoldiq bo'lib, moliyaviy holat hisobotida savdo debitorligidan ayiriladi va ehtimol undiriladigan debitorlarning sof summasini beradi.

Rezerv faqat aniq summalarni qoplashi kerak, bunda ma'lum qarz to'liq yoki qisman undirilmasligi mumkinligiga ob'ektiv dalil bo'lishi kerak: mijoz moliyaviy qiyinchilikda, hisob-fakturani bahslashmoqda yoki to'lov allaqachon kechikkan.

Yaratish yozuvi: Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Debitorlik rezervi. Rezerv allaqachon mavjud bo'lsa, faqat o'zgarish yoziladi: yakuniy rezerv minus boshlang'ich rezerv. Oshish xarajat, kamayish esa undirib bo'lmaydigan qarzlar xarajati hisobiga kredit.

Ish tartibi: undirib bo'lmaydigan qarzlarni yozib yuboring; yozib yuborishdan keyingi debitorlar qoldig'ini hisoblang; endi kerakli rezervni toping; boshlang'ich rezerv bilan solishtiring; farqni hisobga oling; moliyaviy holat hisobotida yakuniy rezervni debitorlardan ayiring.`,
      },
      example: {
        en: `At year end Madina's receivables are $15,000 before adjustments. Cafe Aziz's $800 is written off, leaving $14,200. A cafe disputes a $500 invoice, so she sets the allowance at $500. The old allowance was $200, so the movement is $300. The irrecoverable debts expense is $800 + $300 = $1,100. The statement of financial position shows receivables $14,200 less allowance $500 = $13,700.`,
        ru: `На конец года дебиторы Мадины составляют $15,000 до корректировок. Долг кафе Aziz на $800 списывается, остаётся $14,200. Одно кафе оспаривает счёт на $500, поэтому она устанавливает резерв $500. Прежний резерв был $200, значит, изменение $300. Расход по безнадёжным долгам $800 + $300 = $1,100. В отчёте о финансовом положении дебиторы $14,200 минус резерв $500 = $13,700.`,
        uz: `Yil oxirida Madinaning debitorlari tuzatishlardan oldin $15,000. Aziz kafesining $800 yozib yuboriladi, $14,200 qoladi. Bir kafe $500 lik hisob-fakturani bahslashmoqda, shuning uchun u rezervni $500 qiladi. Eski rezerv $200 edi, demak o'zgarish $300. Undirib bo'lmaydigan qarzlar xarajati $800 + $300 = $1,100. Moliyaviy holat hisobotida debitorlar $14,200 minus rezerv $500 = $13,700.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Trade receivable', ru: 'Торговая дебиторская задолженность', uz: 'Savdo debitorligi' }, definition: { en: 'An amount owed by a customer for goods or services sold on credit.', ru: 'Сумма, которую должен клиент за товары или услуги, проданные в кредит.', uz: 'Nasiyaga sotilgan tovar yoki xizmat uchun mijoz qarzi.' } },
    { term: { en: 'Contra', ru: 'Взаимозачёт', uz: 'O\'zaro hisob-kitob' }, definition: { en: 'Offsetting what a customer owes against what the business owes the same party.', ru: 'Зачёт того, что клиент должен, против того, что бизнес должен этой же стороне.', uz: 'Mijoz qarzini biznesning shu tomonga qarzi bilan o\'zaro hisobga olish.' } },
    { term: { en: 'Aged receivables analysis', ru: 'Анализ дебиторов по срокам', uz: 'Debitorlarni muddatlar bo\'yicha tahlil' }, definition: { en: 'A list of what each customer owes and how long it has been outstanding.', ru: 'Список того, сколько должен каждый клиент и как давно.', uz: 'Har bir mijoz qancha qarzdor va qancha vaqtdan beri ekanini ko\'rsatuvchi ro\'yxat.' } },
    { term: { en: 'Credit limit', ru: 'Кредитный лимит', uz: 'Kredit limiti' }, definition: { en: 'The maximum credit a business will give to a customer.', ru: 'Наибольший кредит, который бизнес предоставит клиенту.', uz: 'Biznes mijozga beradigan eng ko\'p kredit.' } },
    { term: { en: 'Irrecoverable debt', ru: 'Безнадёжный долг', uz: 'Undirib bo\'lmaydigan qarz' }, definition: { en: 'A debt that is, or is considered to be, uncollectable. It is written off.', ru: 'Долг, который не будет или считается невозможным получить. Списывается.', uz: 'Undirib bo\'lmaydigan yoki shunday deb hisoblanadigan qarz. Yozib yuboriladi.' } },
    { term: { en: 'Allowance for receivables', ru: 'Резерв по дебиторской задолженности', uz: 'Debitorlik rezervi' }, definition: { en: 'A credit balance for specific debts that may not be paid, netted off receivables.', ru: 'Кредитовое сальдо по конкретным долгам, которые могут быть не оплачены, вычитается из дебиторов.', uz: 'To\'lanmasligi mumkin aniq qarzlar uchun kredit qoldiq, debitorlardan ayiriladi.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter10;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter10.id] = chapter10;
