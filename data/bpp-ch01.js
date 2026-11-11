'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), sections 1 and 2,
// reworded. bppRef/bppPage point to BPP's own answer. Regulation and governance items are in bpp-ch02.js.
(function () {
  const TOPIC = 'chapter-01';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp01-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const grid = (columns, rows) => ({ columns, rows: rows.map(([text, correctIndex]) => ({ text, correctIndex })) });
  const TF = ['True', 'False'];

  const questions = [
    q('1.2', 193, 'single', `Which groups are most likely to use the financial statements of a sole trader? (1) The shareholders of the business. (2) The business's bank manager. (3) The tax authorities. (4) Investment analysts.`,
      pick(['1 and 2 only', '2 and 3 only', '3 and 4 only', '1, 2 and 3 only'], 1),
`Think about who deals with a one-person business.
- (1) Shareholders: a sole trader has no shares, so there are none.
- (2) The bank manager: lends to the business, so needs the figures. YES.
- (3) The tax authorities: tax the owner's profit, so need the figures. YES.
- (4) Investment analysts: study listed companies, not small sole traders.
= Answer: 2 and 3 only`,
`Подумаем, кто имеет дело с бизнесом одного человека.
- (1) Акционеры: у ИП нет акций, значит их нет.
- (2) Менеджер банка: кредитует бизнес, ему нужны цифры. ДА.
- (3) Налоговая: облагает прибыль владельца, ей нужны цифры. ДА.
- (4) Инвестиционные аналитики: изучают котируемые компании, а не мелких ИП.
= Ответ: только 2 и 3`,
`Bir kishilik biznes bilan kim ishlashini o'ylaymiz.
- (1) Aksiyadorlar: yakka tadbirkorda aksiya yo'q, demak ular yo'q.
- (2) Bank menejeri: biznesga qarz beradi, sonlar kerak. HA.
- (3) Soliq organi: egasining foydasiga soliq soladi, sonlar kerak. HA.
- (4) Investitsiya tahlilchilari: listingdagi kompaniyalarni o'rganadi, kichik tadbirkorlarni emas.
= Javob: faqat 2 va 3`),

    q('1.3', 193, 'matrix', `State whether each statement is true or false.`,
      grid(TF, [
        ['A supplier selling on credit only cares about the statement of financial position, which shows the current state of affairs', 1],
        ['Financial statements aim to give information about assets, liabilities, equity, income and expenses that helps users judge future net cash flows and how well management has looked after the resources', 0],
      ]),
`Check each statement.
- Supplier only cares about the financial position: FALSE. A supplier also needs to judge the FUTURE, to know the business can keep paying.
- The objective of financial statements: TRUE. This is the Conceptual Framework's own wording: future cash flows and stewardship.`,
`Проверим каждое утверждение.
- Поставщика интересует только финансовое положение: НЕВЕРНО. Поставщику нужно оценить и БУДУЩЕЕ, чтобы знать, что бизнес сможет платить и дальше.
- Цель финансовой отчётности: ВЕРНО. Это формулировка Концептуальной основы: будущие денежные потоки и управление ресурсами.`,
`Har bir fikrni tekshiramiz.
- Yetkazib beruvchini faqat moliyaviy holat qiziqtiradi: NOTO'G'RI. Yetkazib beruvchi biznes to'lashda davom eta olishini bilish uchun KELAJAKNI ham baholashi kerak.
- Moliyaviy hisobotning maqsadi: TO'G'RI. Bu Konseptual asosning o'z so'zlari: kelgusi pul oqimlari va resurslarni boshqarish.`),

    q('1.4', 193, 'single', `Which of these are advantages of trading as a limited liability company? (1) It is easier to raise finance, because more shares can be issued for cash. (2) It is riskier than being a sole trader, because shareholders are liable for all the business's debts while a sole trader is liable only up to what he invested.`,
      pick(['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 0),
`Check each statement.
- (1) Issuing more shares raises cash: a real advantage of a company. TRUE.
- (2) It has liability the wrong way round. Shareholders lose at most what they paid for their shares; it is the SOLE TRADER who is liable for all the debts. FALSE.
= Answer: 1 only`,
`Проверим каждое утверждение.
- (1) Выпуск новых акций привлекает деньги: реальное преимущество компании. ВЕРНО.
- (2) Ответственность перепутана. Акционеры теряют не больше, чем заплатили за акции; за все долги отвечает именно ИП. НЕВЕРНО.
= Ответ: только 1`,
`Har bir fikrni tekshiramiz.
- (1) Yangi aksiya chiqarish pul jalb qiladi: kompaniyaning haqiqiy afzalligi. TO'G'RI.
- (2) Javobgarlik teskari aytilgan. Aksiyadorlar aksiyalarga to'laganidan ortiq yo'qotmaydi; barcha qarzlar uchun YAKKA TADBIRKOR javob beradi. NOTO'G'RI.
= Javob: faqat 1`),

    q('1.7', 193, 'single', `Which statement correctly describes what the statement of financial position contains?`,
      pick([
        'A list of ledger balances in debit and credit columns',
        'All the assets owned and all the liabilities owed by a business',
        'The income earned and the expenses incurred over a period',
        'The cash a company generated and used in a period',
      ], 1),
`The statement of financial position is a photo of ONE day: what the business has and what it owes.
- Ledger balances in two columns: that is a trial balance.
- Assets and liabilities: RIGHT.
- Income and expenses over a period: the statement of profit or loss.
- Cash generated and used: the statement of cash flows.
= Answer: all the assets owned and all the liabilities owed`,
`Отчёт о финансовом положении — снимок ОДНОГО дня: что есть у бизнеса и что он должен.
- Остатки счетов в двух колонках: это оборотная ведомость.
- Активы и обязательства: ВЕРНО.
- Доходы и расходы за период: отчёт о прибыли или убытке.
- Полученные и потраченные деньги: отчёт о движении денежных средств.
= Ответ: все активы и все обязательства бизнеса`,
`Moliyaviy holat hisoboti BIR kunning surati: biznesda nima bor va nima qarzi bor.
- Ikki ustundagi hisob qoldiqlari: bu sinov balansi.
- Aktivlar va majburiyatlar: TO'G'RI.
- Davr daromad va xarajatlari: foyda yoki zarar hisoboti.
- Olingan va sarflangan pul: pul oqimlari hisoboti.
= Javob: biznesning barcha aktivlari va barcha majburiyatlari`),

    q('1.8', 193, 'single', `Which statement correctly describes what the statement of profit or loss contains?`,
      pick([
        'A list of ledger balances in debit and credit columns',
        'All the assets owned and all the liabilities owed by a business',
        'The income earned and the expenses incurred over a period',
        'The cash a company generated and used in a period',
      ], 2),
`The statement of profit or loss is a film of a whole PERIOD: what was earned and what was used up to earn it.
- Ledger balances: a trial balance.
- Assets and liabilities: the statement of financial position.
- Income and expenses over a period: RIGHT.
- Cash generated and used: the statement of cash flows.
= Answer: the income earned and the expenses incurred over a period`,
`Отчёт о прибыли или убытке — фильм за весь ПЕРИОД: что заработано и что потрачено для этого.
- Остатки счетов: оборотная ведомость.
- Активы и обязательства: отчёт о финансовом положении.
- Доходы и расходы за период: ВЕРНО.
- Полученные и потраченные деньги: отчёт о движении денежных средств.
= Ответ: доходы и расходы за период`,
`Foyda yoki zarar hisoboti butun DAVR filmi: nima topilgan va buning uchun nima sarflangan.
- Hisob qoldiqlari: sinov balansi.
- Aktivlar va majburiyatlar: moliyaviy holat hisoboti.
- Davr daromad va xarajatlari: TO'G'RI.
- Olingan va sarflangan pul: pul oqimlari hisoboti.
= Javob: davr daromadlari va xarajatlari`),

    q('1.9', 193, 'single', `Which of these are true of an ordinary partnership? (1) Each partner's exposure to the debts is limited. (2) By law, its financial statements must be published. (3) The partnership is not a separate legal person from its partners.`,
      pick(['1 and 2 only', '2 and 3 only', '3 only', '1, 2 and 3'], 2),
`Check each statement.
- (1) Limited exposure: FALSE. Ordinary partners are liable for all the debts, because the business is not separate from them.
- (2) Must publish its statements: FALSE. It must keep records, but need not make them public (only a limited liability partnership must).
- (3) Not a separate legal person: TRUE.
= Answer: 3 only`,
`Проверим каждое утверждение.
- (1) Ограниченная ответственность: НЕВЕРНО. Обычные партнёры отвечают по всем долгам, так как бизнес от них не отделён.
- (2) Обязана публиковать отчётность: НЕВЕРНО. Учёт вести нужно, но публиковать не обязательно (только партнёрство с ограниченной ответственностью).
- (3) Не отдельное юридическое лицо: ВЕРНО.
= Ответ: только 3`,
`Har bir fikrni tekshiramiz.
- (1) Cheklangan javobgarlik: NOTO'G'RI. Oddiy sheriklar barcha qarzlar uchun javob beradi, chunki biznes ulardan alohida emas.
- (2) Hisobotni e'lon qilishi shart: NOTO'G'RI. Hisob yuritishi kerak, lekin e'lon qilish shart emas (faqat mas'uliyati cheklangan sheriklikda shart).
- (3) Alohida yuridik shaxs emas: TO'G'RI.
= Javob: faqat 3`),

    q('1.15', 194, 'single', `Which of these is a benefit of running a business as a sole trader?`,
      pick([
        'If the business makes a loss, partners share it instead of the sole trader alone',
        'Any business debts that the business assets cannot cover are paid from the owner\'s private resources',
        'If the business makes a profit, all of it belongs to the sole trader',
        'The sole trader is not liable for the debts of the business',
      ], 2),
`A sole trader owns the business alone: all the profit, and all the risk.
- Partners share losses: a sole trader has no partners.
- Debts paid from private resources: true, but that is a DRAWBACK, not a benefit.
- All the profit belongs to the owner: a real benefit. RIGHT.
- Not liable for the debts: false; liability is unlimited.
= Answer: all the profit belongs to the sole trader`,
`ИП владеет бизнесом один: вся прибыль и весь риск.
- Партнёры делят убытки: у ИП нет партнёров.
- Долги оплачиваются из личных средств: правда, но это НЕДОСТАТОК, а не преимущество.
- Вся прибыль принадлежит владельцу: реальное преимущество. ВЕРНО.
- Не отвечает по долгам: неверно, ответственность неограниченная.
= Ответ: вся прибыль принадлежит ИП`,
`Yakka tadbirkor biznesga yolg'iz egalik qiladi: butun foyda ham, butun xavf ham.
- Sheriklar zararni bo'lishadi: yakka tadbirkorda sherik yo'q.
- Qarzlar shaxsiy mablag'dan to'lanadi: to'g'ri, lekin bu KAMCHILIK, afzallik emas.
- Butun foyda egasiga tegishli: haqiqiy afzallik. TO'G'RI.
- Qarzlar uchun javob bermaydi: noto'g'ri, javobgarlik cheklanmagan.
= Javob: butun foyda yakka tadbirkorga tegishli`),

    q('1.16', 194, 'single', `Which of these is a benefit of incorporation (forming a company)?`,
      pick([
        'The shareholders are not personally liable for the company\'s debts',
        'The directors must file the accounts with the registrar by a set date',
        'A company must follow company law, while unincorporated businesses need not',
        'The company\'s tax charge must be shown in its statement of profit or loss',
      ], 0),
`A benefit is something that HELPS the owners.
- Shareholders not personally liable: the main benefit of a company. RIGHT.
- Filing accounts by a deadline: a duty, a cost of being a company.
- Following company law: also a duty, not a benefit.
- Showing the tax charge: a reporting rule, not a benefit.
= Answer: shareholders are not personally liable for the company's debts`,
`Преимущество — то, что ПОМОГАЕТ владельцам.
- Акционеры лично не отвечают: главное преимущество компании. ВЕРНО.
- Сдача отчётности к сроку: обязанность, издержка компании.
- Соблюдение закона о компаниях: тоже обязанность, а не преимущество.
- Показ налога: правило отчётности, а не преимущество.
= Ответ: акционеры лично не отвечают по долгам компании`,
`Afzallik — egalarga YORDAM beradigan narsa.
- Aksiyadorlar shaxsan javob bermaydi: kompaniyaning asosiy afzalligi. TO'G'RI.
- Hisobotni muddatida topshirish: majburiyat, kompaniya bo'lish xarajati.
- Kompaniyalar qonuniga rioya qilish: bu ham majburiyat, afzallik emas.
- Soliqni ko'rsatish: hisobot qoidasi, afzallik emas.
= Javob: aksiyadorlar kompaniya qarzlari uchun shaxsan javob bermaydi`),

    q('1.17', 194, 'matrix', `State whether each statement is true or false.`,
      grid(TF, [
        ['Sole traders and partnerships are unincorporated, which means the law treats the business and its owners as separate', 1],
        ['Money a sole trader takes out of the business for personal use is called drawings', 0],
      ]),
`Check each statement.
- Unincorporated means legally separate: FALSE. Unincorporated means there is NO legal separation between the business and its owners. (The accounts still keep them apart, under the business entity concept.)
- Money taken for personal use is drawings: TRUE.`,
`Проверим каждое утверждение.
- Без регистрации юрлица значит юридически отдельно: НЕВЕРНО. Это значит, что юридически бизнес и владельцы НЕ разделены. (В учёте их всё равно разделяют по принципу обособленности.)
- Деньги на личные нужды — это изъятия: ВЕРНО.`,
`Har bir fikrni tekshiramiz.
- Yuridik shaxs emas degani huquqan alohida degani: NOTO'G'RI. Bu biznes va egalari huquqan AJRATILMAGAN degani. (Hisobda esa ular baribir alohida yuritiladi, alohidalik tamoyiliga ko'ra.)
- Shaxsiy ehtiyojga olingan pul — olib qo'yish: TO'G'RI.`),

    q('2.1', 195, 'single', `The owner of a business takes goods from inventory for personal use. Which accounting concept applies?`,
      pick(['Materiality', 'Accruals', 'Going concern', 'Business entity'], 3),
`The accounts are about the BUSINESS, not the owner as a person. Goods the owner takes home have left the business, so they are drawings.
- Materiality: about size.
- Accruals: about timing.
- Going concern: about the business continuing.
- Business entity: keeps the owner's private affairs separate. RIGHT.
= Answer: business entity`,
`Отчётность — о БИЗНЕСЕ, а не о владельце как человеке. Товар, унесённый домой, покинул бизнес, значит это изъятия.
- Существенность: о размере.
- Начисление: о времени.
- Непрерывность: о продолжении деятельности.
- Обособленность бизнеса: отделяет личные дела владельца. ВЕРНО.
= Ответ: обособленность бизнеса`,
`Hisobot egasi haqida emas, BIZNES haqida. Egasi uyga olib ketgan tovar biznesdan chiqqan, demak bu olib qo'yish.
- Muhimlik: hajm haqida.
- Hisoblash: vaqt haqida.
- Uzluksizlik: biznes davom etishi haqida.
- Biznesning alohidaligi: egasining shaxsiy ishlarini ajratadi. TO'G'RI.
= Javob: biznesning alohidaligi`),

    q('2.2', 195, 'single', `Revenue is recorded when goods or services are supplied to the customer, and costs are recorded when goods or services are received. Which concept is this?`,
      pick(['Business entity', 'Materiality', 'Accruals', 'Duality'], 2),
`Recording things when they HAPPEN, not when the cash moves, is the accruals concept.
- Business entity: about keeping the owner separate.
- Materiality: about size.
- Duality: every transaction has two sides.
= Answer: accruals`,
`Запись по факту СОБЫТИЯ, а не движения денег, — это принцип начисления.
- Обособленность: об отделении владельца.
- Существенность: о размере.
- Двойственность: у каждой операции две стороны.
= Ответ: начисление`,
`Pul harakatiga emas, VOQEA sodir bo'lganda yozish — hisoblash tamoyili.
- Alohidalik: egani ajratish haqida.
- Muhimlik: hajm haqida.
- Ikkiyoqlamalik: har bir operatsiyaning ikki tomoni bor.
= Javob: hisoblash`),

    q('2.3', 195, 'single', `Which concept says that information matters if leaving it out or getting it wrong could influence users of the financial statements?`,
      pick(['Consistency', 'Accruals', 'Materiality', 'Going concern'], 2),
`"Could it change a user's decision?" is the test of materiality.
= Answer: materiality
! Common trap: materiality is about the effect of an item, not about whether it can be touched or how big it is in dollars alone.`,
`«Может ли это изменить решение пользователя?» — это проверка существенности.
= Ответ: существенность
! Частая ошибка: существенность — о влиянии статьи, а не о том, можно ли её потрогать, и не только о сумме в долларах.`,
`«Bu foydalanuvchi qarorini o'zgartira oladimi?» — muhimlik sinovi.
= Javob: muhimlik
! Ko'p uchraydigan xato: muhimlik moddaning ta'siri haqida, uni ushlash mumkinligi yoki faqat dollar summasi haqida emas.`),

    q('2.4', 195, 'single', `According to the Conceptual Framework, which TWO of these are part of faithful representation? (1) Neutrality. (2) Relevance. (3) Fair presentation. (4) Freedom from material error.`,
      pick(['1 and 2', '2 and 3', '1 and 4', '3 and 4'], 2),
`Faithful representation means information is complete, NEUTRAL and FREE FROM MATERIAL ERROR.
- (1) Neutrality: part of it. YES.
- (2) Relevance: the OTHER fundamental characteristic, not part of this one.
- (3) Fair presentation: not one of the parts listed by the Framework.
- (4) Free from material error: part of it. YES.
= Answer: 1 and 4`,
`Правдивое представление означает: полнота, НЕЙТРАЛЬНОСТЬ и ОТСУТСТВИЕ СУЩЕСТВЕННЫХ ОШИБОК.
- (1) Нейтральность: часть. ДА.
- (2) Уместность: ДРУГАЯ фундаментальная характеристика, не часть этой.
- (3) Достоверное представление: не входит в перечень Основы.
- (4) Без существенных ошибок: часть. ДА.
= Ответ: 1 и 4`,
`Haqqoniy aks ettirish: to'liqlik, BETARAFLIK va MUHIM XATOLARDAN XOLILIK.
- (1) Betaraflik: qismi. HA.
- (2) Dolzarblik: BOSHQA asosiy xususiyat, bu qismi emas.
- (3) Adolatli taqdim etish: Asos ro'yxatida yo'q.
- (4) Muhim xatolardan xoli: qismi. HA.
= Javob: 1 va 4`),

    q('2.5', 195, 'single', `Which concept means that similar items should be treated in a similar way?`,
      pick(['Conformity', 'Accruals', 'Matching', 'Consistency'], 3),
`Treating similar items the same way, and keeping presentation the same from one period to the next, is consistency.
- Conformity: not an accounting concept in the Framework.
- Accruals and matching: about recording income and costs in the right period.
= Answer: consistency
! Presentation may change only if an IFRS requires it, the business changes significantly, or a new presentation is clearly more suitable.`,
`Одинаковый учёт похожих статей и неизменное представление от периода к периоду — это последовательность.
- Соответствие: не принцип Основы.
- Начисление и соотнесение: о правильном периоде доходов и расходов.
= Ответ: последовательность
! Менять представление можно, только если этого требует IFRS, бизнес существенно изменился или новое представление явно уместнее.`,
`O'xshash moddalarni bir xil yuritish va taqdimotni davrdan davrga saqlash — izchillik.
- Muvofiqlik: Asos tamoyili emas.
- Hisoblash va moslashtirish: daromad va xarajatni to'g'ri davrga yozish haqida.
= Javob: izchillik
! Taqdimotni faqat IFRS talab qilsa, biznes jiddiy o'zgarsa yoki yangi taqdimot aniq mosroq bo'lsa o'zgartirish mumkin.`),

    q('2.6', 195, 'single', `Which TWO of these are qualitative characteristics of financial information under the Conceptual Framework? (1) Relevance. (2) Consistency. (3) Faithful representation. (4) Accuracy.`,
      pick(['1 and 2', '2 and 4', '3 and 4', '1 and 3'], 3),
`The two FUNDAMENTAL characteristics are relevance and faithful representation.
- (2) Consistency: a concept, not on the list of qualitative characteristics.
- (4) Accuracy: not on the list either.
= Answer: 1 and 3`,
`Две ФУНДАМЕНТАЛЬНЫЕ характеристики — уместность и правдивое представление.
- (2) Последовательность: принцип, а не качественная характеристика.
- (4) Точность: тоже не в списке.
= Ответ: 1 и 3`,
`Ikki ASOSIY xususiyat — dolzarblik va haqqoniy aks ettirish.
- (2) Izchillik: tamoyil, sifat xususiyati emas.
- (4) Aniqlik: bu ham ro'yxatda yo'q.
= Javob: 1 va 3`),

    q('2.7', 195, 'single', `Which statement describes the qualitative characteristic of faithful representation?`,
      pick([
        'Revenue earned must be matched with the costs of earning it',
        'Information reaches decision-makers in time to influence their decisions',
        'Presentation and classification stay the same from one period to the next',
        'Financial information is complete, neutral and free from error',
      ], 3),
`Each option describes a different idea.
- Matching revenue and costs: accruals.
- In time to influence decisions: timeliness.
- Same presentation each period: consistency.
- Complete, neutral and free from error: faithful representation. RIGHT.
= Answer: complete, neutral and free from error`,
`Каждый вариант описывает другую идею.
- Соотнесение доходов и затрат: начисление.
- Вовремя для решений: своевременность.
- Одинаковое представление каждый период: последовательность.
- Полная, нейтральная, без ошибок: правдивое представление. ВЕРНО.
= Ответ: полная, нейтральная и без ошибок`,
`Har bir variant boshqa g'oyani tasvirlaydi.
- Daromad va xarajatni moslashtirish: hisoblash.
- Qarorga ta'sir qilish uchun o'z vaqtida: o'z vaqtidalik.
- Har davr bir xil taqdimot: izchillik.
- To'liq, betaraf va xatosiz: haqqoniy aks ettirish. TO'G'RI.
= Javob: to'liq, betaraf va xatosiz`),

    q('2.8', 195, 'single', `Which, if any, of these comments are correct under the Conceptual Framework? (1) Financial statements always treat the business as a separate entity. (2) Materiality means only items with a physical existence can be assets. (3) Provisions are estimates, so they can be adjusted to make results look better to investors.`,
      pick(['1 only', '2 only', '3 only', 'None of them'], 0),
`Check each comment.
- (1) The business is treated as separate from its owners: TRUE (business entity concept).
- (2) Materiality is about whether an item could change decisions, not about physical existence. FALSE.
- (3) Adjusting estimates to please investors is bias; it breaks neutrality. FALSE.
= Answer: 1 only`,
`Проверим каждое утверждение.
- (1) Бизнес учитывается отдельно от владельцев: ВЕРНО (обособленность).
- (2) Существенность — о влиянии на решения, а не о физическом существовании. НЕВЕРНО.
- (3) Подгонять оценки под инвесторов — предвзятость, нарушение нейтральности. НЕВЕРНО.
= Ответ: только 1`,
`Har bir fikrni tekshiramiz.
- (1) Biznes egalaridan alohida yuritiladi: TO'G'RI (alohidalik).
- (2) Muhimlik qarorga ta'sir haqida, jismoniy mavjudlik haqida emas. NOTO'G'RI.
- (3) Baholarni investorlarga moslash — xolislikni buzish. NOTO'G'RI.
= Javob: faqat 1`),

    q('2.9', 195, 'single', `Which statements are correct? (1) The accruals concept records transactions when cash or its equivalent is received or paid. (2) Information is material if leaving it out or misstating it could influence users' economic decisions. (3) Faithful representation may require material information to be left out when an exact figure is hard to establish.`,
      pick(['1 only', '1 and 2 only', '2 only', '2 and 3 only'], 2),
`Check each statement.
- (1) Recording on cash is the OPPOSITE of accruals. FALSE.
- (2) The definition of materiality. TRUE.
- (3) Faithful representation allows reasonable estimates; it does not require material items to be left out. FALSE.
= Answer: 2 only`,
`Проверим каждое утверждение.
- (1) Запись по деньгам — ПРОТИВОПОЛОЖНОСТЬ начисления. НЕВЕРНО.
- (2) Определение существенности. ВЕРНО.
- (3) Правдивое представление допускает разумные оценки и не требует исключать существенное. НЕВЕРНО.
= Ответ: только 2`,
`Har bir fikrni tekshiramiz.
- (1) Pul bo'yicha yozish — hisoblashning TESKARISI. NOTO'G'RI.
- (2) Muhimlik ta'rifi. TO'G'RI.
- (3) Haqqoniy aks ettirish oqilona baholarga ruxsat beradi, muhim moddani chiqarishni talab qilmaydi. NOTO'G'RI.
= Javob: faqat 2`),

    q('2.10', 195, 'single', `The Conceptual Framework gives six qualitative characteristics of financial information. Which list is correct?`,
      pick([
        'Relevance, faithful representation, comparability, verifiability, timeliness, understandability',
        'Accuracy, faithful representation, comparability, verifiability, timeliness, understandability',
        'Relevance, faithful representation, consistency, verifiability, timeliness, understandability',
        'Relevance, comparability, consistency, verifiability, timeliness, understandability',
      ], 0),
`Learn the lists: 2 fundamental (relevance, faithful representation) and 4 enhancing (comparability, verifiability, timeliness, understandability).
- The second list swaps relevance for "accuracy".
- The third and fourth put in "consistency", which is not a qualitative characteristic.
= Answer: relevance, faithful representation, comparability, verifiability, timeliness, understandability`,
`Выучите списки: 2 фундаментальные (уместность, правдивое представление) и 4 усиливающие (сопоставимость, проверяемость, своевременность, понятность).
- Во втором списке уместность заменена «точностью».
- В третьем и четвёртом есть «последовательность», а это не качественная характеристика.
= Ответ: уместность, правдивое представление, сопоставимость, проверяемость, своевременность, понятность`,
`Ro'yxatlarni yodlang: 2 ta asosiy (dolzarblik, haqqoniy aks ettirish) va 4 ta kuchaytiruvchi (taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik).
- Ikkinchi ro'yxatda dolzarblik «aniqlik» bilan almashtirilgan.
- Uchinchi va to'rtinchisida «izchillik» bor, bu sifat xususiyati emas.
= Javob: dolzarblik, haqqoniy aks ettirish, taqqoslanuvchanlik, tekshiriluvchanlik, o'z vaqtidalik, tushunarlilik`),

    q('2.11', 195, 'single', `Which ONE of these is NOT a qualitative characteristic of financial information under the Conceptual Framework?`,
      pick(['Faithful representation', 'Relevance', 'Timeliness', 'Accruals'], 3),
`Three options are on the list of six; one is a different kind of idea.
- Faithful representation and relevance: fundamental.
- Timeliness: enhancing.
- Accruals: a basis of accounting, not a qualitative characteristic. RIGHT.
= Answer: accruals`,
`Три варианта есть в списке из шести; один — идея другого рода.
- Правдивое представление и уместность: фундаментальные.
- Своевременность: усиливающая.
- Начисление: метод учёта, а не качественная характеристика. ВЕРНО.
= Ответ: начисление`,
`Uchta variant oltitalik ro'yxatda bor; bittasi boshqa turdagi g'oya.
- Haqqoniy aks ettirish va dolzarblik: asosiy.
- O'z vaqtidalik: kuchaytiruvchi.
- Hisoblash: hisob usuli, sifat xususiyati emas. TO'G'RI.
= Javob: hisoblash`),

    q('2.12', 195, 'single', `According to the Conceptual Framework, which of these is NOT an objective of financial statements?`,
      pick([
        'Giving information about the financial position of a business',
        'Giving information about the performance of a business',
        'Helping users assess how well management has used the resources, to support decisions',
        'Giving reliable investment advice',
      ], 3),
`Financial statements give INFORMATION that users then use to make their own decisions.
- Financial position, performance and management's stewardship: all objectives.
- Investment advice: the statements do not tell anyone what to buy. RIGHT.
= Answer: giving reliable investment advice`,
`Финансовая отчётность даёт ИНФОРМАЦИЮ, а решения пользователи принимают сами.
- Финансовое положение, результаты и управление ресурсами: всё это цели.
- Инвестиционный совет: отчётность не говорит, что покупать. ВЕРНО.
= Ответ: давать надёжные инвестиционные советы`,
`Moliyaviy hisobot MA'LUMOT beradi, qarorni esa foydalanuvchilar o'zi qabul qiladi.
- Moliyaviy holat, natijalar va boshqaruv sifati: hammasi maqsad.
- Investitsiya maslahati: hisobot nima sotib olishni aytmaydi. TO'G'RI.
= Javob: ishonchli investitsiya maslahatini berish`),

    q('2.13', 196, 'matrix', `State whether each statement is correct or incorrect.`,
      grid(['Correct', 'Incorrect'], [
        ['Companies must never change the presentation or classification of items, even when the nature of their operations changes significantly', 1],
        ['Companies should create provisions in good years, to use in difficult years and smooth their profits', 1],
      ]),
`Check each statement.
- Never change presentation: INCORRECT. A change is allowed if the operations change significantly, an IFRS requires it, or a new presentation is more suitable.
- Provisions to smooth profits: INCORRECT. Provisions may only be made when IAS 37's conditions are met; smoothing profits is not allowed.`,
`Проверим каждое утверждение.
- Никогда не менять представление: НЕВЕРНО. Можно, если деятельность существенно изменилась, этого требует IFRS или новое представление уместнее.
- Резервы для сглаживания прибыли: НЕВЕРНО. Резерв создают только при условиях IAS 37; сглаживать прибыль нельзя.`,
`Har bir fikrni tekshiramiz.
- Taqdimotni hech qachon o'zgartirmaslik: NOTO'G'RI. Faoliyat jiddiy o'zgarsa, IFRS talab qilsa yoki yangi taqdimot mosroq bo'lsa mumkin.
- Foydani tekislash uchun rezervlar: NOTO'G'RI. Rezerv faqat IAS 37 shartlari bajarilganda yaratiladi; foydani tekislash mumkin emas.`),

    q('2.14', 196, 'single', `Which statement about prudence is correct?`,
      pick([
        'Prudence requires assets to be carried at their lowest possible value',
        'Under prudence, income is not recognised until the cash is received',
        'A prudent decision always means lower expenditure',
        'Prudence does not allow liabilities to be overstated',
      ], 3),
`Prudence is caution when judging under uncertainty. It is part of neutrality, so it does not allow anything to be overstated OR understated.
- Assets at the lowest possible value: that would be understating, which is bias.
- Income only when cash arrives: that is cash accounting, not prudence.
- Lower expenditure: prudence says nothing about spending less.
- No overstating liabilities: RIGHT.
= Answer: prudence does not allow liabilities to be overstated`,
`Осмотрительность — осторожность при неопределённости. Это часть нейтральности, она не допускает ни завышения, ни занижения.
- Активы по наименьшей стоимости: это занижение, то есть предвзятость.
- Доход только при получении денег: это кассовый метод, а не осмотрительность.
- Меньше расходов: осмотрительность ничего не говорит о тратах.
- Не завышать обязательства: ВЕРНО.
= Ответ: осмотрительность не допускает завышения обязательств`,
`Ehtiyotkorlik — noaniqlikda baholashdagi ehtiyot. U betaraflikning qismi, hech narsani oshirib ham, kamaytirib ham ko'rsatishga yo'l qo'ymaydi.
- Aktivlar eng past qiymatda: bu kamaytirish, ya'ni xolislikni buzish.
- Daromad faqat pul kelganda: bu kassa usuli, ehtiyotkorlik emas.
- Kamroq xarajat: ehtiyotkorlik sarflash haqida hech narsa demaydi.
- Majburiyatlarni oshirmaslik: TO'G'RI.
= Javob: ehtiyotkorlik majburiyatlarni oshirib ko'rsatishga yo'l qo'ymaydi`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
