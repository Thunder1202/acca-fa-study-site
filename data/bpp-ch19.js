'use strict';

// Extra practice from the BPP Practice & Revision Kit (exams Sept 2024 - Aug 2025), section 35 (consolidated
// statement of financial position items), reworded with new figures. bppRef/bppPage point to BPP's own answer.
// Profit or loss and associate items are in bpp-ch20.js. Left out: 35.13 (it rests on the IAS 27 "at cost"
// option in separate statements, which Kaplan's text does not teach).
(function () {
  const TOPIC = 'chapter-19';
  const q = (bppRef, bppPage, type, text, spec, en, ru, uz) => ({ id: `bpp19-${bppRef}`, bppRef, bppPage, topicId: TOPIC, type, text, ...spec, explanation: { en, ru, uz } });
  const pick = (options, correctIndex) => ({ options, correctIndex });
  const two = (options, correctIndices) => ({ options, correctIndices });
  const amount = (correctValue, answerText) => ({ correctValue, answerText });
  const CASE = 'P Co bought 80,000 of S Co\'s 100,000 $1 shares for $250,000. At that date S Co\'s retained earnings were $70,000, its assets were at fair value, and the fair value of the non-controlling interest (NCI) was $55,000. Three years later S Co\'s retained earnings are $130,000 and P Co\'s are $190,000.';

  const questions = [
    q('35.1', 268, 'single', `${CASE} What is goodwill in the consolidated statement of financial position?`,
      pick(['$135,000', '$80,000', '$114,000', '$195,000'], 0),
`# Step 1: Consideration plus NCI
  250,000 + 55,000 = 305,000
# Step 2: Less S Co's net assets at acquisition
  Share capital 100,000 + retained earnings 70,000 = 170,000
# Step 3: Goodwill
  305,000 - 170,000 = 135,000
= Answer: $135,000
! Use net assets AT ACQUISITION, not today's.`,
`# Шаг 1: Возмещение плюс NCI
  250 000 + 55 000 = 305 000
# Шаг 2: Минус чистые активы S Co на дату покупки
  Капитал 100 000 + нераспределённая прибыль 70 000 = 170 000
# Шаг 3: Гудвил
  305 000 - 170 000 = 135 000
= Ответ: $135 000
! Берите чистые активы НА ДАТУ ПОКУПКИ, а не сегодняшние.`,
`# 1-qadam: To'lov plyus NCI
  250 000 + 55 000 = 305 000
# 2-qadam: Minus S Co ning xarid sanasidagi sof aktivlari
  Kapital 100 000 + taqsimlanmagan foyda 70 000 = 170 000
# 3-qadam: Gudvill
  305 000 - 170 000 = 135 000
= Javob: $135 000
! Bugungi emas, XARID SANASIDAGI sof aktivlarni oling.`),

    q('35.2', 269, 'single', `${CASE} What is the non-controlling interest in the consolidated statement of financial position?`,
      pick(['$67,000', '$55,000', '$81,000', '$61,000'], 0),
`# Step 1: S Co's profit since acquisition
  130,000 - 70,000 = 60,000
# Step 2: NCI share (20%)
  60,000 x 20% = 12,000
# Step 3: NCI
  Fair value at acquisition 55,000 + 12,000 = 67,000
= Answer: $67,000`,
`# Шаг 1: Прибыль S Co после покупки
  130 000 - 70 000 = 60 000
# Шаг 2: Доля NCI (20%)
  60 000 x 20% = 12 000
# Шаг 3: NCI
  Справедливая стоимость на дату покупки 55 000 + 12 000 = 67 000
= Ответ: $67 000`,
`# 1-qadam: S Co ning xariddan keyingi foydasi
  130 000 - 70 000 = 60 000
# 2-qadam: NCI ulushi (20%)
  60 000 x 20% = 12 000
# 3-qadam: NCI
  Xarid sanasidagi adolatli qiymat 55 000 + 12 000 = 67 000
= Javob: $67 000`),

    q('35.3', 269, 'number', `${CASE} What are consolidated retained earnings? (in $)`,
      amount(238000, '$238,000'),
`# Step 1: Parent's own retained earnings
  190,000
# Step 2: Group share of S Co's post-acquisition profit
  (130,000 - 70,000) x 80% = 48,000
# Step 3: Total
  190,000 + 48,000 = 238,000
= Answer: $238,000`,
`# Шаг 1: Собственная нераспределённая прибыль материнской
  190 000
# Шаг 2: Доля группы в прибыли S Co после покупки
  (130 000 - 70 000) x 80% = 48 000
# Шаг 3: Итог
  190 000 + 48 000 = 238 000
= Ответ: $238 000`,
`# 1-qadam: Ona kompaniyaning o'z taqsimlanmagan foydasi
  190 000
# 2-qadam: S Co ning xariddan keyingi foydasidagi guruh ulushi
  (130 000 - 70 000) x 80% = 48 000
# 3-qadam: Jami
  190 000 + 48 000 = 238 000
= Javob: $238 000`),

    q('35.4', 269, 'single', `Which of these are subsidiaries of A Co? X Co: A Co owns 60% of X Co's non-voting preference shares. Y Co: A Co has four directors on Y Co's board, each with 10 votes, out of 60 votes in total. Z Co: A Co owns 70% of Z Co's ordinary shares; Z Co is abroad and pays tax there.`,
      pick(['X Co, Y Co and Z Co', 'X Co and Z Co', 'Y Co and Z Co', 'X Co and Y Co'], 2),
`A subsidiary is an entity the parent CONTROLS.
- X Co: non-voting shares give no control. NOT a subsidiary.
- Y Co: 40 of 60 board votes is a majority, so A Co controls the board. SUBSIDIARY.
- Z Co: 70% of the votes gives control. Being abroad does not matter. SUBSIDIARY.
= Answer: Y Co and Z Co`,
`Дочерняя компания — та, которую материнская КОНТРОЛИРУЕТ.
- X Co: акции без права голоса контроля не дают. НЕ дочерняя.
- Y Co: 40 из 60 голосов совета — большинство, A Co контролирует совет. ДОЧЕРНЯЯ.
- Z Co: 70% голосов дают контроль. То, что она за рубежом, неважно. ДОЧЕРНЯЯ.
= Ответ: Y Co и Z Co`,
`Sho'ba korxona — ona kompaniya NAZORAT qiladigan korxona.
- X Co: ovozsiz aksiyalar nazorat bermaydi. Sho'ba EMAS.
- Y Co: 60 dan 40 ovoz — ko'pchilik, A Co kengashni nazorat qiladi. SHO'BA.
- Z Co: 70% ovoz nazorat beradi. Chet elda ekani ahamiyatsiz. SHO'BA.
= Javob: Y Co va Z Co`),

    q('35.5', 269, 'single', `H Co bought 75% of S Co's shares for $360,000 on 1 January. At that date S Co had share capital $200,000, share premium $40,000 and retained earnings $90,000; the fair value of the NCI was $110,000. S Co made a profit of $48,000 in the year. What is goodwill at 31 December?`,
      pick(['$140,000', '$30,000', '$112,500', '$180,000'], 0),
`# Step 1: Consideration plus NCI
  360,000 + 110,000 = 470,000
# Step 2: Net assets at acquisition
  200,000 + 40,000 + 90,000 = 330,000
# Step 3: Goodwill
  470,000 - 330,000 = 140,000
= Answer: $140,000
! Share premium is part of net assets. Leaving it out gives the $180,000 trap.`,
`# Шаг 1: Возмещение плюс NCI
  360 000 + 110 000 = 470 000
# Шаг 2: Чистые активы на дату покупки
  200 000 + 40 000 + 90 000 = 330 000
# Шаг 3: Гудвил
  470 000 - 330 000 = 140 000
= Ответ: $140 000
! Эмиссионный доход входит в чистые активы. Без него выходит ловушка $180 000.`,
`# 1-qadam: To'lov plyus NCI
  360 000 + 110 000 = 470 000
# 2-qadam: Xarid sanasidagi sof aktivlar
  200 000 + 40 000 + 90 000 = 330 000
# 3-qadam: Gudvill
  470 000 - 330 000 = 140 000
= Javob: $140 000
! Emissiya daromadi sof aktivlarga kiradi. Usiz $180 000 tuzog'i chiqadi.`),

    q('35.6', 269, 'single', `Same group as the last question (75% bought; NCI fair value at acquisition $110,000; S Co's profit since acquisition $48,000). What is the NCI at 31 December?`,
      pick(['$122,000', '$110,000', '$134,000', '$94,500'], 0),
`# Step 1: NCI share of post-acquisition profit
  48,000 x 25% = 12,000
# Step 2: NCI
  110,000 + 12,000 = 122,000
= Answer: $122,000`,
`# Шаг 1: Доля NCI в прибыли после покупки
  48 000 x 25% = 12 000
# Шаг 2: NCI
  110 000 + 12 000 = 122 000
= Ответ: $122 000`,
`# 1-qadam: Xariddan keyingi foydadagi NCI ulushi
  48 000 x 25% = 12 000
# 2-qadam: NCI
  110 000 + 12 000 = 122 000
= Javob: $122 000`),

    q('35.7', 270, 'single', `P Co bought 100% of S Co on 1 July. S Co has share capital of $300,000; its retained earnings were $120,000 on 1 January, and it made a profit of $60,000 in the year, earned evenly. Goodwill was $45,000. What did P Co pay?`,
      pick(['$495,000', '$465,000', '$525,000', '$450,000'], 0),
`# Step 1: Retained earnings at acquisition (1 July)
  120,000 + 60,000 x 6/12 = 150,000
# Step 2: Net assets at acquisition
  300,000 + 150,000 = 450,000
# Step 3: Cost
  100% owned, so no NCI: cost = net assets + goodwill
  450,000 + 45,000 = 495,000
= Answer: $495,000
! Include the profit earned BEFORE 1 July: it is pre-acquisition.`,
`# Шаг 1: Нераспределённая прибыль на дату покупки (1 июля)
  120 000 + 60 000 x 6/12 = 150 000
# Шаг 2: Чистые активы на дату покупки
  300 000 + 150 000 = 450 000
# Шаг 3: Стоимость
  100% владения, NCI нет: стоимость = чистые активы + гудвил
  450 000 + 45 000 = 495 000
= Ответ: $495 000
! Учтите прибыль ДО 1 июля: она до покупки.`,
`# 1-qadam: Xarid sanasidagi taqsimlanmagan foyda (1 iyul)
  120 000 + 60 000 x 6/12 = 150 000
# 2-qadam: Xarid sanasidagi sof aktivlar
  300 000 + 150 000 = 450 000
# 3-qadam: Narx
  100% egalik, NCI yo'q: narx = sof aktivlar + gudvill
  450 000 + 45 000 = 495 000
= Javob: $495 000
! 1 iyulgacha topilgan foydani qo'shing: u xariddan oldingi.`),

    q('35.9', 270, 'single', `P Co has owned 100% of S Co since S Co was set up. P Co's retained earnings are $380,000 and S Co's are $95,000. In the year S Co sold goods to P Co for $36,000 at a mark-up of 20%, and P Co still holds all of them. What are consolidated retained earnings?`,
      pick(['$469,000', '$475,000', '$467,800', '$463,000'], 0),
`# Step 1: Unrealised profit in P Co's inventory
  Mark-up 20% on cost: 36,000 x 20/120 = 6,000
# Step 2: Consolidated retained earnings
  380,000 + 95,000 - 6,000 = 469,000
= Answer: $469,000
! 36,000 x 20% = 7,200 treats the mark-up as a margin. Use 20/120.`,
`# Шаг 1: Нереализованная прибыль в запасах P Co
  Наценка 20% на себестоимость: 36 000 x 20/120 = 6 000
# Шаг 2: Консолидированная нераспределённая прибыль
  380 000 + 95 000 - 6 000 = 469 000
= Ответ: $469 000
! 36 000 x 20% = 7 200 — это маржа, а не наценка. Берите 20/120.`,
`# 1-qadam: P Co zaxirasidagi amalga oshmagan foyda
  Tannarxga 20% ustama: 36 000 x 20/120 = 6 000
# 2-qadam: Konsolidatsiyalangan taqsimlanmagan foyda
  380 000 + 95 000 - 6 000 = 469 000
= Javob: $469 000
! 36 000 x 20% = 7 200 — bu marja, ustama emas. 20/120 oling.`),

    q('35.10', 270, 'single', `P Co bought 80% of S Co's $150,000 share capital for $420,000 when S Co's retained earnings were $180,000. At that date S Co's land was worth $40,000 more than its carrying amount. The fair value of the NCI was $95,000. What is the goodwill?`,
      pick(['$145,000', '$185,000', '$50,000', '$124,000'], 0),
`# Step 1: Consideration plus NCI
  420,000 + 95,000 = 515,000
# Step 2: Net assets at FAIR value
  150,000 + 180,000 + 40,000 fair value uplift = 370,000
# Step 3: Goodwill
  515,000 - 370,000 = 145,000
= Answer: $145,000`,
`# Шаг 1: Возмещение плюс NCI
  420 000 + 95 000 = 515 000
# Шаг 2: Чистые активы по СПРАВЕДЛИВОЙ стоимости
  150 000 + 180 000 + 40 000 дооценка = 370 000
# Шаг 3: Гудвил
  515 000 - 370 000 = 145 000
= Ответ: $145 000`,
`# 1-qadam: To'lov plyus NCI
  420 000 + 95 000 = 515 000
# 2-qadam: ADOLATLI qiymatdagi sof aktivlar
  150 000 + 180 000 + 40 000 qayta baholash = 370 000
# 3-qadam: Gudvill
  515 000 - 370 000 = 145 000
= Javob: $145 000`),

    q('35.12', 270, 'multi', `Which TWO statements are correct?`,
      two([
        'A Co owns 30% of B Co\'s ordinary shares, so B Co is an associate of A Co.',
        'C Co can appoint 5 of the 8 directors of D Co, so C Co controls D Co.',
        'E Co has the power to direct F Co\'s financial and operating policies, so F Co is an associate of E Co.',
        'G Co owns 15% of H Co, but by agreement controls H Co\'s policies, so H Co is an associate of G Co.',
      ], [0, 1]),
`- 30% of the votes: significant influence is presumed (20%-50%). ASSOCIATE. CORRECT.
- Appointing most of the board gives control. CORRECT.
- Power to direct the policies is CONTROL, so F Co is a subsidiary, not an associate.
- Control by agreement also makes H Co a subsidiary, whatever the shareholding.
= Answer: the first two`,
`- 30% голосов: значительное влияние предполагается (20%-50%). АССОЦИИРОВАННАЯ. ВЕРНО.
- Назначение большинства совета даёт контроль. ВЕРНО.
- Власть управлять политикой — это КОНТРОЛЬ, F Co дочерняя, а не ассоциированная.
- Контроль по соглашению тоже делает H Co дочерней, какова бы ни была доля.
= Ответ: первые два`,
`- 30% ovoz: sezilarli ta'sir taxmin qilinadi (20%-50%). ASSOTSIATSIYALANGAN. TO'G'RI.
- Kengash ko'pchiligini tayinlash nazorat beradi. TO'G'RI.
- Siyosatni boshqarish huquqi — NAZORAT, F Co sho'ba, assotsiatsiyalangan emas.
- Kelishuv bo'yicha nazorat ham H Co ni sho'ba qiladi, ulushdan qat'i nazar.
= Javob: birinchi ikkitasi`),

    q('35.14', 271, 'single', `Which statements about parents and subsidiaries are correct? (1) A parent may consolidate a company in which it holds less than 50% of the ordinary shares, in some circumstances. (2) Goodwill on consolidation appears in the parent's OWN statement of financial position. (3) Consolidated financial statements look past the legal form and show the group as if it were a single entity.`,
      pick(['1 and 2 only', '1 and 3 only', '2 and 3 only', '3 only'], 1),
`- (1) TRUE. Control can come from other means, such as the power to appoint most of the board.
- (2) FALSE. Goodwill appears only in the CONSOLIDATED statements. The parent's own accounts show the investment at cost.
- (3) TRUE. This is substance over form: the group is reported as one economic entity.
= Answer: 1 and 3 only`,
`- (1) ВЕРНО. Контроль может давать и другое, например право назначать большинство совета.
- (2) НЕВЕРНО. Гудвил есть только в КОНСОЛИДИРОВАННОЙ отчётности. В отчётности самой материнской — инвестиция по себестоимости.
- (3) ВЕРНО. Это приоритет сущности над формой: группа как единое экономическое целое.
= Ответ: только 1 и 3`,
`- (1) TO'G'RI. Nazorat boshqa yo'l bilan ham bo'lishi mumkin, masalan kengash ko'pchiligini tayinlash.
- (2) NOTO'G'RI. Gudvill faqat KONSOLIDATSIYALANGAN hisobotda. Ona kompaniyaning o'z hisobotida investitsiya tannarxda.
- (3) TO'G'RI. Bu mohiyatning shakldan ustunligi: guruh yagona iqtisodiy birlik sifatida.
= Javob: faqat 1 va 3`),

    q('35.15', 271, 'single', `P Co holds: 60% of the voting rights in Q Co; 25% of the voting rights in R Co plus the right to appoint or remove all R Co's directors; 15% of the voting rights in S Co plus 85% of its non-voting preference shares. Which are subsidiaries of P Co?`,
      pick(['Q Co, R Co and S Co', 'Q Co and S Co only', 'R Co and S Co only', 'Q Co and R Co only'], 3),
`- Q Co: a majority of the votes. SUBSIDIARY.
- R Co: controlling the whole board gives control. SUBSIDIARY.
- S Co: non-voting shares give no say, and 15% of the votes is not control. NOT a subsidiary.
= Answer: Q Co and R Co only`,
`- Q Co: большинство голосов. ДОЧЕРНЯЯ.
- R Co: контроль над всем советом даёт контроль. ДОЧЕРНЯЯ.
- S Co: акции без голоса не дают права голоса, а 15% голосов — не контроль. НЕ дочерняя.
= Ответ: только Q Co и R Co`,
`- Q Co: ovozlarning ko'pchiligi. SHO'BA.
- R Co: butun kengashni nazorat qilish nazorat beradi. SHO'BA.
- S Co: ovozsiz aksiyalar ovoz bermaydi, 15% ovoz esa nazorat emas. Sho'ba EMAS.
= Javob: faqat Q Co va R Co`),

    q('35.17', 271, 'single', `P Co bought 600,000 of S Co's 800,000 $0.50 shares (share capital $400,000). At that date S Co's retained earnings were $220,000 and its revaluation surplus $30,000; the NCI was valued at $160,000. Goodwill was $85,000. What did P Co pay?`,
      pick(['$575,000', '$735,000', '$650,000', '$405,000'], 0),
`# Step 1: Net assets at acquisition
  400,000 + 220,000 + 30,000 = 650,000
# Step 2: The goodwill formula
  Goodwill = consideration + NCI - net assets
  85,000 = consideration + 160,000 - 650,000
# Step 3: Solve
  Consideration = 85,000 + 650,000 - 160,000 = 575,000
= Answer: $575,000`,
`# Шаг 1: Чистые активы на дату покупки
  400 000 + 220 000 + 30 000 = 650 000
# Шаг 2: Формула гудвила
  Гудвил = возмещение + NCI - чистые активы
  85 000 = возмещение + 160 000 - 650 000
# Шаг 3: Решим
  Возмещение = 85 000 + 650 000 - 160 000 = 575 000
= Ответ: $575 000`,
`# 1-qadam: Xarid sanasidagi sof aktivlar
  400 000 + 220 000 + 30 000 = 650 000
# 2-qadam: Gudvill formulasi
  Gudvill = to'lov + NCI - sof aktivlar
  85 000 = to'lov + 160 000 - 650 000
# 3-qadam: Yechamiz
  To'lov = 85 000 + 650 000 - 160 000 = 575 000
= Javob: $575 000`),

    q('35.18', 271, 'single', `P Co owns 100% of S Co. At the year end S Co's tangible non-current assets are land $600,000 and plant $380,000. At acquisition the land's fair value was $70,000 more than its carrying amount. P Co's own tangible non-current assets are $1,480,000. What goes into the consolidated statement of financial position?`,
      pick(['$2,530,000', '$2,460,000', '$1,550,000', '$2,600,000'], 0),
`# Step 1: Add both companies in full
  1,480,000 + 600,000 + 380,000 = 2,460,000
# Step 2: Add the fair value uplift
  Land does not depreciate, so all 70,000 is still there.
  2,460,000 + 70,000 = 2,530,000
= Answer: $2,530,000`,
`# Шаг 1: Сложим обе компании полностью
  1 480 000 + 600 000 + 380 000 = 2 460 000
# Шаг 2: Прибавим дооценку
  Земля не амортизируется, все 70 000 остаются.
  2 460 000 + 70 000 = 2 530 000
= Ответ: $2 530 000`,
`# 1-qadam: Ikkala kompaniyani to'liq qo'shamiz
  1 480 000 + 600 000 + 380 000 = 2 460 000
# 2-qadam: Qayta baholashni qo'shamiz
  Yer amortizatsiya qilinmaydi, butun 70 000 qoladi.
  2 460 000 + 70 000 = 2 530 000
= Javob: $2 530 000`),

    q('35.19', 271, 'single', `P Co owns 80% of S Co. At the year end: P Co's receivables $72,000 and payables $41,000; S Co's receivables $45,000 and payables $52,000. These include $25,000 that S Co owes P Co for goods. What are consolidated receivables and payables?`,
      pick([
        'Receivables $92,000; payables $68,000',
        'Receivables $117,000; payables $93,000',
        'Receivables $67,000; payables $43,000',
        'Receivables $92,000; payables $93,000',
      ], 0),
`The group cannot owe money to itself, so the intra-group balance is cancelled on BOTH sides.
# Step 1: Receivables
  72,000 + 45,000 - 25,000 = 92,000
# Step 2: Payables
  41,000 + 52,000 - 25,000 = 68,000
= Answer: receivables $92,000; payables $68,000
! Cancel 100% of the balance, even though P Co owns only 80%.`,
`Группа не может быть должна сама себе, поэтому внутригрупповой остаток исключают С ОБЕИХ сторон.
# Шаг 1: Дебиторы
  72 000 + 45 000 - 25 000 = 92 000
# Шаг 2: Кредиторы
  41 000 + 52 000 - 25 000 = 68 000
= Ответ: дебиторы $92 000; кредиторы $68 000
! Исключают 100% остатка, хотя P Co владеет лишь 80%.`,
`Guruh o'ziga qarzdor bo'lolmaydi, shuning uchun guruh ichidagi qoldiq IKKALA tomondan chiqariladi.
# 1-qadam: Debitorlar
  72 000 + 45 000 - 25 000 = 92 000
# 2-qadam: Kreditorlar
  41 000 + 52 000 - 25 000 = 68 000
= Javob: debitorlar $92 000; kreditorlar $68 000
! P Co faqat 80% ga egalik qilsa ham, qoldiqning 100% chiqariladi.`),

    q('35.20', 272, 'number', `P Co bought 75% of S Co when S Co's retained earnings were $50,000; the fair value of the NCI was $30,000. At the year end S Co's retained earnings are $82,000. In the year S Co sold goods to P Co for $24,000, including a profit of $8,000; 25% of them are still in P Co's inventory. What is the NCI at the year end? (in $)`,
      amount(37500, '$37,500'),
`# Step 1: Unrealised profit
  8,000 x 25% = 2,000. S Co made the sale, so it reduces S Co's profit.
# Step 2: S Co's adjusted post-acquisition profit
  82,000 - 50,000 - 2,000 = 30,000
# Step 3: NCI
  30,000 + 25% x 30,000 = 30,000 + 7,500 = 37,500
= Answer: $37,500
! When the SUBSIDIARY is the seller, the NCI shares in the unrealised profit adjustment.`,
`# Шаг 1: Нереализованная прибыль
  8 000 x 25% = 2 000. Продавала S Co, значит уменьшается прибыль S Co.
# Шаг 2: Скорректированная прибыль S Co после покупки
  82 000 - 50 000 - 2 000 = 30 000
# Шаг 3: NCI
  30 000 + 25% x 30 000 = 30 000 + 7 500 = 37 500
= Ответ: $37 500
! Когда продаёт ДОЧЕРНЯЯ, NCI участвует в корректировке нереализованной прибыли.`,
`# 1-qadam: Amalga oshmagan foyda
  8 000 x 25% = 2 000. Sotuvchi S Co, demak S Co foydasi kamayadi.
# 2-qadam: S Co ning tuzatilgan xariddan keyingi foydasi
  82 000 - 50 000 - 2 000 = 30 000
# 3-qadam: NCI
  30 000 + 25% x 30 000 = 30 000 + 7 500 = 37 500
= Javob: $37 500
! SHO'BA sotganda, NCI amalga oshmagan foyda tuzatishida ishtirok etadi.`),

    q('35.21', 272, 'single', `P Co bought 80% of S Co on 1 October. For the year to 31 December: P Co's retained earnings at the year end are $720,000; S Co's retained earnings were $300,000 on 1 January and $360,000 on 31 December, with profit earned evenly. What are consolidated retained earnings at 31 December?`,
      pick(['$732,000', '$768,000', '$735,000', '$1,008,000'], 0),
`# Step 1: S Co's profit since acquisition
  60,000 for the year x 3/12 (October to December) = 15,000
# Step 2: Group share
  15,000 x 80% = 12,000
# Step 3: Consolidated retained earnings
  720,000 + 12,000 = 732,000
= Answer: $732,000`,
`# Шаг 1: Прибыль S Co после покупки
  60 000 за год x 3/12 (октябрь-декабрь) = 15 000
# Шаг 2: Доля группы
  15 000 x 80% = 12 000
# Шаг 3: Консолидированная нераспределённая прибыль
  720 000 + 12 000 = 732 000
= Ответ: $732 000`,
`# 1-qadam: S Co ning xariddan keyingi foydasi
  Yillik 60 000 x 3/12 (oktyabr-dekabr) = 15 000
# 2-qadam: Guruh ulushi
  15 000 x 80% = 12 000
# 3-qadam: Konsolidatsiyalangan taqsimlanmagan foyda
  720 000 + 12 000 = 732 000
= Javob: $732 000`),

    q('35.24', 272, 'single', `P Co bought 15 million of S Co's 20 million $1 shares. It paid with its own shares: 3 P Co shares for every 5 S Co shares. A P Co share was worth $4.20 that day. What is the fair value of the consideration?`,
      pick(['$37.8 million', '$63 million', '$50.4 million', '$105 million'], 0),
`# Step 1: P Co shares issued
  15 million x 3/5 = 9 million
# Step 2: Their value
  9 million x $4.20 = $37.8 million
= Answer: $37.8 million
! Count only the shares P Co actually bought (15 million), not all 20 million.`,
`# Шаг 1: Выпущено акций P Co
  15 млн x 3/5 = 9 млн
# Шаг 2: Их стоимость
  9 млн x $4,20 = $37,8 млн
= Ответ: $37,8 млн
! Считайте только купленные акции (15 млн), а не все 20 млн.`,
`# 1-qadam: Chiqarilgan P Co aksiyalari
  15 mln x 3/5 = 9 mln
# 2-qadam: Ularning qiymati
  9 mln x $4,20 = $37,8 mln
= Javob: $37,8 mln
! Faqat sotib olingan aksiyalarni (15 mln) hisoblang, barcha 20 mln ni emas.`),
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).bpp ??= {})[TOPIC] = questions;
})();
