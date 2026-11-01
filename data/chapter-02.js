'use strict';

const chapter02 = {
  id: 'chapter-02',
  titles: {
    en: 'The regulatory framework',
    ru: 'Нормативная база',
    uz: 'Tartibga solish tizimi',
  },
  objectives: [
    { en: 'Explain the purpose of the financial reporting regulatory system', ru: 'Объяснить назначение системы регулирования финансовой отчётности', uz: 'Moliyaviy hisobotni tartibga solish tizimining maqsadini tushuntirish' },
    { en: 'Explain the role of IFRS Accounting Standards', ru: 'Объяснить роль стандартов IFRS', uz: 'IFRS standartlarining rolini tushuntirish' },
    { en: 'Explain what is meant by corporate governance', ru: 'Объяснить, что такое корпоративное управление', uz: 'Korporativ boshqaruv nimani anglatishini tushuntirish' },
    { en: 'Describe the duties and responsibilities of company directors', ru: 'Описать обязанности и ответственность директоров компании', uz: 'Kompaniya direktorlarining burch va mas\'uliyatlarini tavsiflash' },
  ],
  sections: [
    {
      key: {
        en: `- Gives users a basic minimum of comparable, consistent information.
- Builds confidence and controls how directors treat investors.
- Standards alone are not enough: law and market rules are needed too.`,
        ru: `- Даёт пользователям минимум сопоставимой и последовательной информации.
- Укрепляет доверие и регулирует поведение директоров с инвесторами.
- Одних стандартов мало: нужны также законы и рыночные правила.`,
        uz: `- Foydalanuvchilarga taqqoslanadigan va izchil axborot minimumini beradi.
- Ishonchni oshiradi va direktorlarning investorlarga munosabatini tartibga soladi.
- Faqat standartlar yetmaydi: qonun va bozor qoidalari ham kerak.`,
      },
      heading: {
        en: 'Why a regulatory framework is needed',
        ru: 'Зачем нужна нормативная база',
        uz: 'Tartibga solish tizimi nima uchun kerak',
      },
      body: {
        en: `A regulatory framework for financial statements exists to:

- meet users' needs with at least a basic minimum of information
- make information comparable and consistent, which matters more as investment becomes international
- increase users' confidence in financial reporting
- regulate how companies and directors behave towards investors

Accounting standards alone cannot achieve this. Legal and market-based regulation is also needed.

A typical national structure includes national financial reporting standards, national law, market regulations and stock exchange rules. In the UK, for example, the Financial Reporting Council issues standards, the Companies Act 2006 is the main legislation, the Financial Conduct Authority is a market regulator, and the London Stock Exchange sets rules for quoted companies.`,
        ru: `Нормативная база финансовой отчётности существует, чтобы:

- обеспечить пользователей хотя бы минимально необходимой информацией
- сделать информацию сопоставимой и последовательной, что особенно важно по мере того, как инвестиции становятся международными
- повысить доверие пользователей к финансовой отчётности
- регулировать поведение компаний и директоров по отношению к инвесторам

Одних стандартов учёта для этого недостаточно. Нужно также правовое и рыночное регулирование.

Типичная национальная система включает национальные стандарты отчётности, национальное законодательство, рыночное регулирование и правила фондовых бирж. Например, в Великобритании стандарты выпускает Совет по финансовой отчётности (Financial Reporting Council), основной закон — Companies Act 2006, рыночный регулятор — Financial Conduct Authority, а Лондонская фондовая биржа устанавливает правила для котируемых компаний.`,
        uz: `Moliyaviy hisobotni tartibga solish tizimi quyidagilar uchun kerak:

- foydalanuvchilarga kamida zarur minimal axborotni berish
- axborotni taqqoslanadigan va izchil qilish, bu sarmoya xalqarolashgani sari muhimroq bo'ladi
- foydalanuvchilarning moliyaviy hisobotga ishonchini oshirish
- kompaniyalar va direktorlarning investorlarga nisbatan xulqini tartibga solish

Buni faqat buxgalteriya standartlari bilan amalga oshirib bo'lmaydi. Huquqiy va bozor tartibga solishi ham kerak.

Odatiy milliy tizimga milliy hisobot standartlari, milliy qonunlar, bozor qoidalari va fond birjasi qoidalari kiradi. Masalan, Buyuk Britaniyada standartlarni Moliyaviy hisobot kengashi (Financial Reporting Council) chiqaradi, asosiy qonun Companies Act 2006, bozor regulyatori Financial Conduct Authority, London fond birjasi esa kotirovka qilinadigan kompaniyalar uchun qoidalar belgilaydi.`,
      },
      example: {
        en: `Imagine Madina's Mart asks a new investor for money. Without rules, Madina could count unsold inventory as a sale and look far more profitable than a rival shop that counts only real sales. The investor could not trust or compare the two sets of numbers. Regulation gives everyone the same rulebook.`,
        ru: `Представьте, что Madina's Mart просит денег у нового инвестора. Без правил Мадина могла бы считать непроданный товар продажей и выглядеть намного прибыльнее конкурента, который учитывает только реальные продажи. Инвестор не смог бы ни доверять этим цифрам, ни сравнивать их. Регулирование даёт всем одни правила.`,
        uz: `Tasavvur qiling, Madina's Mart yangi investordan pul so'rayapti. Qoidalar bo'lmasa, Madina sotilmagan tovarni sotuv deb hisoblab, faqat haqiqiy sotuvlarni sanaydigan raqib do'kondan ancha foydali ko'rinishi mumkin edi. Investor bu raqamlarga ishona ham, solishtira ham olmasdi. Tartibga solish hammaga bir xil qoida beradi.`,
      },
    },
    {
      key: {
        en: `- Harmonisation: shared rules so readers worldwide can compare companies.
- Not automatic: a country must adopt IFRS for it to apply.
- IFRS do not cover every possible transaction.
- Convergence: updating national standards towards IFRS over time.`,
        ru: `- Гармонизация: общие правила, чтобы читатели в мире могли сравнивать компании.
- Не автоматически: IFRS действуют, только если страна их приняла.
- IFRS охватывают не все возможные операции.
- Сближение: постепенное приведение национальных стандартов к IFRS.`,
        uz: `- Uyg'unlashtirish: dunyo o'quvchilari kompaniyalarni solishtirishi uchun umumiy qoidalar.
- Avtomatik emas: IFRS faqat mamlakat qabul qilsa amal qiladi.
- IFRS barcha operatsiyalarni qamrab olmaydi.
- Yaqinlashish: milliy standartlarni asta-sekin IFRS ga moslashtirish.`,
      },
      heading: {
        en: 'IFRS Accounting Standards and harmonisation',
        ru: 'Стандарты IFRS и гармонизация',
        uz: 'IFRS standartlari va uyg\'unlashtirish',
      },
      body: {
        en: `As business and investment became global, financial reporting moved towards harmonisation, so that a worldwide audience receives consistent and comparable information. If companies used different methods, their accounts would need to be rewritten on the same basis before any fair comparison.

IFRS Accounting Standards are not automatically enforceable in any country. They come from an international body with no international authority, so a country's national standard setter must adopt them before they become enforceable.

The European Union adopted them for all listed entities in 2005. Other adopters include Argentina, Australia, Brazil, Canada, Russia, Mexico, Saudi Arabia and South Africa. The US, China and India are going through convergence, updating national standards over time to become consistent with IFRS Accounting Standards.`,
        ru: `Когда бизнес и инвестиции стали глобальными, финансовая отчётность двинулась к гармонизации (harmonisation), чтобы мировая аудитория получала последовательную и сопоставимую информацию. Если бы компании использовали разные методы, для честного сравнения их отчётность пришлось бы переписывать на единой основе.

Стандарты IFRS не действуют автоматически ни в одной стране. Их выпускает международная организация, не имеющая международной власти, поэтому обязательными они становятся только после принятия национальным органом по стандартам.

Европейский союз принял их для всех котируемых компаний в 2005 году. Среди других принявших стран — Аргентина, Австралия, Бразилия, Канада, Россия, Мексика, Саудовская Аравия и ЮАР. США, Китай и Индия проходят процесс сближения (convergence), постепенно приводя национальные стандарты в соответствие с IFRS.`,
        uz: `Biznes va sarmoya global bo'lgach, moliyaviy hisobot uyg'unlashtirish (harmonisation) tomon yo'naldi, shunda butun dunyo auditoriyasi izchil va taqqoslanadigan axborot oladi. Agar kompaniyalar turli usullardan foydalansa, adolatli solishtirish uchun hisobotlarni bir xil asosda qayta yozish kerak bo'lardi.

IFRS standartlari hech bir mamlakatda avtomatik kuchga kirmaydi. Ularni xalqaro vakolatga ega bo'lmagan xalqaro tashkilot chiqaradi, shuning uchun majburiy bo'lishi uchun mamlakatning milliy standart belgilovchi organi ularni qabul qilishi kerak.

Yevropa Ittifoqi ularni 2005-yilda barcha listingdagi kompaniyalar uchun qabul qilgan. Boshqa qabul qilgan mamlakatlar qatorida Argentina, Avstraliya, Braziliya, Kanada, Rossiya, Meksika, Saudiya Arabistoni va Janubiy Afrika bor. AQSh, Xitoy va Hindiston yaqinlashish (convergence) jarayonidan o'tmoqda, ya'ni milliy standartlarini asta-sekin IFRS ga moslashtirmoqda.`,
      },
      example: {
        en: `A foreign investor considers two household goods chains, one in Tashkent and one in Istanbul. If both report under the same standards, the investor can compare their profits directly. If each uses its own local rules, one set of accounts must be rebuilt before the comparison means anything.`,
        ru: `Иностранный инвестор рассматривает две сети товаров для дома: в Ташкенте и в Стамбуле. Если обе отчитываются по одним стандартам, прибыль можно сравнить напрямую. Если каждая использует свои местные правила, отчётность одной из них придётся пересобрать, прежде чем сравнение будет иметь смысл.`,
        uz: `Xorijiy investor ikkita uy-ro'zg'or buyumlari tarmog'ini ko'rib chiqmoqda: biri Toshkentda, biri Istanbulda. Agar ikkalasi bir xil standartlar bo'yicha hisobot bersa, foydalarini to'g'ridan-to'g'ri solishtirish mumkin. Agar har biri o'z mahalliy qoidalaridan foydalansa, solishtirish ma'noli bo'lishi uchun bittasining hisobotini qayta tuzish kerak.`,
      },
    },
    {
      key: {
        en: `- IFRS Foundation: supervises and funds.
- IASB (the Board): sets the standards.
- IFRS Interpretations Committee (IFRIC): explains how to apply them.
- IFRS Advisory Council: gives advice to the Board and Foundation.
- ISSB: sets sustainability disclosure standards.`,
        ru: `- Фонд IFRS: надзирает и финансирует.
- IASB (Совет): выпускает стандарты.
- Комитет по интерпретациям (IFRIC): разъясняет применение.
- Консультативный совет IFRS: даёт советы Совету и Фонду.
- ISSB: выпускает стандарты раскрытия об устойчивом развитии.`,
        uz: `- IFRS Fondi: nazorat qiladi va moliyalashtiradi.
- IASB (Kengash): standartlarni chiqaradi.
- Talqinlar qo'mitasi (IFRIC): qo'llashni tushuntiradi.
- IFRS Maslahat kengashi: Kengash va Fondga maslahat beradi.
- ISSB: barqarorlik bo'yicha standartlarni chiqaradi.`,
      },
      heading: {
        en: 'The international regulatory bodies',
        ru: 'Международные регулирующие органы',
        uz: 'Xalqaro tartibga soluvchi organlar',
      },
      body: {
        en: `Five bodies are examinable. Learn what each one does:

- IFRS Foundation: the supervisory body. It handles governance and funding through a monitoring board (public accountability) and trustees (governance, strategy and oversight). Its objectives are to develop high-quality, understandable, enforceable and globally accepted standards, promote their rigorous use, consider emerging economies and small and medium-sized entities, and bring about convergence of national and international standards.
- International Accounting Standards Board (the Board, IASB): the independent standard setter. It develops and publishes IFRS Accounting Standards and interpretations developed by the Interpretations Committee. On creation it adopted all existing IAS Standards.
- IFRS Interpretations Committee (IFRIC): reviews widespread accounting issues on a timely basis and gives authoritative guidance, called IFRIC Interpretations. Its meetings are public.
- IFRS Advisory Council: the formal advisory body to the Board and the Foundation. Its members are people affected by the Board's work. It advises on agenda decisions and priorities and gives views on major projects.
- International Sustainability Standards Board (ISSB): formed in 2021 to deliver a global baseline of sustainability disclosure standards that meet investors' information needs.

Exam tip: the Foundation supervises, the Board sets standards, IFRIC interprets them, the Council advises, and the ISSB covers sustainability.`,
        ru: `На экзамене проверяются пять органов. Запомните, что делает каждый:

- Фонд IFRS (IFRS Foundation): надзорный орган. Отвечает за управление и финансирование через наблюдательный совет (публичная подотчётность) и попечителей (управление, стратегия и надзор). Его цели — разрабатывать качественные, понятные, обязательные к применению и признанные во всём мире стандарты, продвигать их строгое применение, учитывать развивающиеся экономики и малые и средние предприятия и добиваться сближения национальных и международных стандартов.
- Совет по международным стандартам финансовой отчётности (the Board, IASB): независимый разработчик стандартов. Разрабатывает и публикует стандарты IFRS и разъяснения Комитета по интерпретациям. При создании принял все действовавшие стандарты IAS.
- Комитет по интерпретациям IFRS (IFRIC): своевременно рассматривает распространённые вопросы учёта и даёт авторитетные разъяснения (IFRIC Interpretations). Его заседания открыты.
- Консультативный совет IFRS (IFRS Advisory Council): официальный совещательный орган при Совете и Фонде. В него входят те, кого затрагивает работа Совета. Он даёт советы по повестке и приоритетам и высказывает мнение о крупных проектах.
- Совет по международным стандартам устойчивого развития (ISSB): создан в 2021 году для разработки глобальной базы стандартов раскрытия информации об устойчивом развитии, отвечающих потребностям инвесторов.

Совет для экзамена: Фонд надзирает, Совет выпускает стандарты, IFRIC разъясняет, Консультативный совет советует, ISSB занимается устойчивым развитием.`,
        uz: `Imtihonda beshta organ tekshiriladi. Har biri nima qilishini yodlang:

- IFRS Fondi (IFRS Foundation): nazorat organi. U boshqaruv va moliyalashtirishni monitoring kengashi (jamoatchilik oldida hisobdorlik) va vasiylar (boshqaruv, strategiya va nazorat) orqali amalga oshiradi. Maqsadlari — sifatli, tushunarli, majburiy qo'llaniladigan va dunyoda tan olingan standartlar ishlab chiqish, ularning qat'iy qo'llanishini targ'ib qilish, rivojlanayotgan iqtisodiyotlar va kichik va o'rta korxonalarni hisobga olish hamda milliy va xalqaro standartlarni yaqinlashtirish.
- Xalqaro buxgalteriya standartlari kengashi (the Board, IASB): mustaqil standart ishlab chiquvchi. U IFRS standartlarini va Talqinlar qo'mitasi ishlab chiqqan talqinlarni tayyorlaydi va chiqaradi. Tashkil topganda amaldagi barcha IAS standartlarini qabul qilgan.
- IFRS Talqinlar qo'mitasi (IFRIC): keng tarqalgan hisob masalalarini o'z vaqtida ko'rib chiqadi va nufuzli ko'rsatmalar beradi (IFRIC Interpretations). Uning yig'ilishlari ochiq.
- IFRS Maslahat kengashi (IFRS Advisory Council): Kengash va Fond huzuridagi rasmiy maslahat organi. Unga Kengash ishi ta'sir qiladigan shaxslar kiradi. U kun tartibi va ustuvorliklar bo'yicha maslahat beradi va yirik loyihalar haqida fikr bildiradi.
- Xalqaro barqarorlik standartlari kengashi (ISSB): 2021-yilda investorlar axborot ehtiyojlariga javob beradigan barqarorlik bo'yicha global asosiy standartlarni yaratish uchun tuzilgan.

Imtihon maslahati: Fond nazorat qiladi, Kengash standart chiqaradi, IFRIC talqin qiladi, Maslahat kengashi maslahat beradi, ISSB barqarorlik bilan shug'ullanadi.`,
      },
      example: {
        en: `Think of a school. The Foundation is the governing body that oversees and funds it. The Board writes the exam rules. IFRIC answers questions when teachers disagree about what a rule means. The Council is the group of parents and teachers giving advice. The ISSB is a new department that sets rules for a new subject.`,
        ru: `Представьте школу. Фонд — это попечители, которые надзирают и финансируют. Совет пишет правила экзаменов. IFRIC отвечает, когда учителя расходятся в понимании правила. Консультативный совет — родители и учителя, дающие советы. ISSB — новое отделение, задающее правила нового предмета.`,
        uz: `Maktabni tasavvur qiling. Fond — nazorat qiluvchi va moliyalashtiruvchi vasiylik kengashi. Kengash imtihon qoidalarini yozadi. IFRIC o'qituvchilar qoida ma'nosida kelisha olmaganda javob beradi. Maslahat kengashi — maslahat beruvchi ota-onalar va o'qituvchilar. ISSB — yangi fan qoidalarini belgilaydigan yangi bo'lim.`,
      },
    },
    {
      key: {
        en: `- Order: subject chosen, exposure draft, public comments, final standard.
- A discussion paper can be issued at any stage.
- Publishing needs a Board vote. The book says 8 of 15; recent IFRS Foundation rules say 9 of 14.`,
        ru: `- Порядок: выбор темы, проект стандарта, комментарии, окончательный стандарт.
- Дискуссионный документ можно выпустить на любом этапе.
- Для публикации нужно голосование Совета. В книге 8 из 15, в недавних правилах Фонда IFRS 9 из 14.`,
        uz: `- Tartib: mavzu tanlash, standart loyihasi, fikrlar, yakuniy standart.
- Muhokama hujjati istalgan bosqichda chiqarilishi mumkin.
- E'lon qilish uchun Kengash ovozi kerak. Kitobda 15 dan 8, IFRS Fondi qoidalarida 14 dan 9.`,
      },
      heading: {
        en: 'How an IFRS Accounting Standard is developed',
        ru: 'Как разрабатывается стандарт IFRS',
        uz: 'IFRS standarti qanday ishlab chiqiladi',
      },
      body: {
        en: `The process runs in this order:

- The Board identifies a subject and appoints an advisory committee.
- The Board publishes an exposure draft, a draft version of the standard, for public comment.
- After considering the comments, the Board publishes the final standard.

At any stage the Board may also issue a discussion paper to encourage comment.

The Study Text states that publishing a standard, exposure draft or IFRIC interpretation requires at least eight votes from the 15 Board members. Recent IFRS Foundation constitutions instead say nine votes from 14 members, so do not rely on the exact number.

National standard setters take part. Many are represented, they can circulate discussion papers and exposure drafts for comment in their own countries, and a major national standard setter normally leads each project.`,
        ru: `Процесс идёт в таком порядке:

- Совет определяет тему и назначает консультативный комитет.
- Совет публикует проект стандарта (exposure draft) для публичного обсуждения.
- Рассмотрев комментарии, Совет публикует окончательный стандарт.

На любом этапе Совет может также выпустить дискуссионный документ (discussion paper), чтобы получить комментарии.

В учебнике указано, что для публикации стандарта, проекта стандарта или интерпретации IFRIC нужно не менее восьми голосов из 15 членов Совета. В недавних редакциях устава Фонда IFRS указано девять голосов из 14, поэтому не полагайтесь на точное число.

Национальные органы по стандартам участвуют в процессе. Многие из них представлены, они могут распространять дискуссионные документы и проекты для обсуждения в своих странах, а крупный национальный орган обычно ведёт каждый проект.`,
        uz: `Jarayon quyidagi tartibda boradi:

- Kengash mavzuni belgilaydi va maslahat qo'mitasini tayinlaydi.
- Kengash jamoatchilik muhokamasi uchun standart loyihasini (exposure draft) e'lon qiladi.
- Fikrlarni ko'rib chiqqach, Kengash yakuniy standartni e'lon qiladi.

Istalgan bosqichda Kengash fikr bildirishga undash uchun muhokama hujjatini (discussion paper) ham chiqarishi mumkin.

Darslikda aytilishicha, standart, standart loyihasi yoki IFRIC talqinini e'lon qilish uchun 15 nafar Kengash a'zosidan kamida sakkiz nafarining ovozi kerak. IFRS Fondi nizomining yaqindagi tahrirlarida esa 14 a'zodan to'qqiz ovoz deyilgan, shuning uchun aniq raqamga tayanmang.

Milliy standart belgilovchi organlar ham ishtirok etadi. Ularning ko'pchiligi vakillik qiladi, muhokama hujjatlari va loyihalarni o'z mamlakatlarida fikr uchun tarqatishi mumkin, yirik milliy organ esa odatda har bir loyihani boshqaradi.`,
      },
      example: {
        en: `Picture retailers worldwide disagreeing over how to account for loyalty points. The Board takes up the subject and publishes a draft. Shops, accountants and auditors comment on it. Only after those comments are considered does the final rule appear, which is why a new standard rarely surprises anyone.`,
        ru: `Представьте, что розничные сети по всему миру расходятся в учёте бонусных баллов. Совет берётся за тему и публикует проект. Магазины, бухгалтеры и аудиторы его комментируют. Только после рассмотрения комментариев выходит окончательное правило, поэтому новый стандарт редко кого-то удивляет.`,
        uz: `Tasavvur qiling, butun dunyodagi chakana savdo tarmoqlari bonus ballarini hisobga olishda kelisha olmayapti. Kengash mavzuni oladi va loyihani e'lon qiladi. Do'konlar, buxgalterlar va auditorlar fikr bildiradi. Fikrlar ko'rib chiqilgandan keyingina yakuniy qoida chiqadi, shuning uchun yangi standart kamdan-kam hollarda kutilmagan bo'ladi.`,
      },
    },
    {
      key: {
        en: `- Shareholders own the company, directors run it: separation of ownership and control.
- Interests can clash, and profit-linked bonuses create a risk of biased statements.
- The fix: good corporate governance plus an independent audit.
- The auditor gives an opinion (true and fair). It is not a guarantee of no errors.`,
        ru: `- Акционеры владеют, директора управляют: разделение собственности и контроля.
- Интересы могут расходиться, а премии от прибыли создают риск предвзятой отчётности.
- Решение: хорошее корпоративное управление и независимый аудит.
- Аудитор даёт мнение (true and fair). Это не гарантия отсутствия ошибок.`,
        uz: `- Aksiyadorlar egalik qiladi, direktorlar boshqaradi: egalik va nazoratning ajralishi.
- Manfaatlar to'qnashishi mumkin, foydaga bog'liq mukofot hisobotni buzish xavfini tug'diradi.
- Yechim: yaxshi korporativ boshqaruv va mustaqil audit.
- Auditor fikr beradi (true and fair). Bu xato yo'qligiga kafolat emas.`,
      },
      heading: {
        en: 'Ownership, control and the external audit',
        ru: 'Собственность, контроль и внешний аудит',
        uz: 'Egalik, nazorat va tashqi audit',
      },
      body: {
        en: `A company registers under national company law and issues shares to its owners. In smaller companies the owners may also be the directors. In large listed companies the shares are held by many individuals and institutions, such as pension funds, who take no part in daily running. Directors are appointed to manage on their behalf. This is the separation of ownership and control.

The problem is that the two sides can conflict. Higher director pay means less profit for shareholders. Directors are also usually rewarded for financial success, which creates a risk of bias in the financial statements and can reduce their credibility.

Two things reduce this risk: effective corporate governance, and an independent audit.

Most countries require an independent, suitably qualified external auditor. The auditor gives shareholders an opinion on whether the statements are fairly stated, or true and fair. This adds credibility, but it is not a guarantee of no errors. It means there is no material misstatement that could lead shareholders to make poor decisions.

Scandals such as Enron, Lehman Brothers, WorldCom, Parmalat and Wells Fargo show how misstated accounts can mislead shareholders and damage trust in financial reporting.`,
        ru: `Компания регистрируется по национальному корпоративному праву и выпускает акции для владельцев. В небольших компаниях владельцы могут быть и директорами. В крупных котируемых компаниях акции принадлежат множеству людей и организаций, например пенсионным фондам, которые не участвуют в повседневном управлении. Управлять от их имени назначают директоров. Это разделение собственности и контроля (separation of ownership and control).

Проблема в том, что интересы сторон могут расходиться. Более высокое вознаграждение директоров означает меньшую прибыль для акционеров. Кроме того, директоров обычно поощряют за финансовый успех, что создаёт риск предвзятости в отчётности и может снизить доверие к ней.

Этот риск снижают две вещи: эффективное корпоративное управление и независимый аудит.

В большинстве стран требуется независимый квалифицированный внешний аудитор. Он даёт акционерам мнение о том, представлена ли отчётность достоверно (fairly stated, или true and fair). Это повышает доверие, но не гарантирует отсутствия ошибок. Это значит, что нет существенного искажения, которое могло бы привести акционеров к неверным решениям.

Скандалы Enron, Lehman Brothers, WorldCom, Parmalat и Wells Fargo показывают, как искажённая отчётность вводит акционеров в заблуждение и подрывает доверие.`,
        uz: `Kompaniya milliy kompaniyalar qonuni bo'yicha ro'yxatdan o'tadi va egalariga aksiya chiqaradi. Kichik kompaniyalarda egalar direktor ham bo'lishi mumkin. Yirik listingdagi kompaniyalarda aksiyalar kundalik boshqaruvda qatnashmaydigan ko'plab shaxslar va pensiya jamg'armalari kabi tashkilotlarga tegishli. Ularning nomidan boshqarish uchun direktorlar tayinlanadi. Bu egalik va nazoratning ajralishi (separation of ownership and control).

Muammo shundaki, tomonlar manfaati to'qnashishi mumkin. Direktorlar maoshining oshishi aksiyadorlar uchun foydaning kamayishini anglatadi. Bundan tashqari, direktorlar odatda moliyaviy muvaffaqiyat uchun taqdirlanadi, bu hisobotda xolislik buzilishi xavfini tug'diradi va unga ishonchni kamaytirishi mumkin.

Bu xavfni ikki narsa kamaytiradi: samarali korporativ boshqaruv va mustaqil audit.

Ko'pchilik mamlakatlarda mustaqil, malakali tashqi auditor talab qilinadi. Auditor aksiyadorlarga hisobot adolatli (fairly stated yoki true and fair) taqdim etilganmi, degan fikrini beradi. Bu ishonchni oshiradi, ammo xato yo'qligiga kafolat emas. Bu aksiyadorlarni noto'g'ri qarorga olib kelishi mumkin bo'lgan muhim buzilish yo'qligini bildiradi.

Enron, Lehman Brothers, WorldCom, Parmalat va Wells Fargo mojarolari buzilgan hisobot aksiyadorlarni qanday chalg'itishi va moliyaviy hisobotga ishonchni yo'qotishini ko'rsatadi.`,
      },
      example: {
        en: `Madina's Mart has grown into Madina's Mart LLC with ten shops. Madina now owns 40% of the shares, and investors own the rest. She hires Rustam as managing director, with a bonus tied to profit. Rustam now has a reason to make profit look higher. The investors cannot check every shop themselves, so an independent auditor reviews the accounts for them.`,
        ru: `Madina's Mart вырос в Madina's Mart LLC с десятью магазинами. Мадине теперь принадлежит 40% акций, остальное — инвесторам. Она нанимает управляющего директора Рустама, чья премия зависит от прибыли. Теперь у Рустама есть причина показывать прибыль выше. Инвесторы не могут сами проверить каждый магазин, поэтому отчётность за них проверяет независимый аудитор.`,
        uz: `Madina's Mart o'nta do'konli Madina's Mart LLC ga aylandi. Endi aksiyalarning 40% Madinaga, qolgani investorlarga tegishli. U Rustamni boshqaruvchi direktor qilib yollaydi, uning mukofoti foydaga bog'liq. Endi Rustamda foydani yuqoriroq ko'rsatish uchun sabab bor. Investorlar har bir do'konni o'zlari tekshira olmaydi, shuning uchun ular uchun hisobotni mustaqil auditor tekshiradi.`,
      },
    },
    {
      key: {
        en: `- Definition: the system by which companies are directed and controlled.
- Purpose: monitor the people who control the owners' resources.
- Aim: better performance and accountability, creating long-term shareholder value.
- Elements: non-executive oversight, internal control, fair pay, fair reporting.
- The annual report is the main route to public oversight.`,
        ru: `- Определение: система, с помощью которой компании направляются и контролируются.
- Цель: наблюдать за теми, кто контролирует ресурсы владельцев.
- Задача: лучшие результаты и подотчётность, долгосрочная стоимость для акционеров.
- Элементы: неисполнительные директора, внутренний контроль, честные оплата и отчётность.
- Годовой отчёт — главный путь общественного контроля.`,
        uz: `- Ta'rif: kompaniyalar yo'naltiriladigan va nazorat qilinadigan tizim.
- Maqsad: egalar resurslarini nazorat qiluvchilarni kuzatish.
- Vazifa: yaxshi natija va hisobdorlik, uzoq muddatli aksiyador qiymati.
- Elementlar: noijrochi direktorlar, ichki nazorat, adolatli maosh va hisobot.
- Yillik hisobot jamoatchilik nazoratining asosiy yo'li.`,
      },
      heading: {
        en: 'What corporate governance is',
        ru: 'Что такое корпоративное управление',
        uz: 'Korporativ boshqaruv nima',
      },
      body: {
        en: `The Cadbury Report 1992 defines corporate governance as "the system by which companies are directed and controlled". This is often extended to include acting in the interests of shareholders and in relation to stakeholders beyond the company. That wider view brings in public duty and corporate social responsibility, and directors must be accountable to those groups too.

The basic purpose is to monitor the people in a company who control the owners' resources and assets.

The primary objective is to improve corporate performance and accountability in creating long-term shareholder value.

The basic elements of sound corporate governance are:

- effective management
- effective systems of internal control
- oversight of management by non-executive directors
- fair appraisal of director performance
- fair remuneration of directors
- fair financial reporting
- constructive relationships with shareholders

Guidance must be reviewed regularly so that it stays relevant to current business practice.`,
        ru: `Доклад Кэдбери 1992 года определяет корпоративное управление как "the system by which companies are directed and controlled" — систему, с помощью которой компании направляются и контролируются. Часто это расширяют до действий в интересах акционеров и с учётом заинтересованных сторон за пределами компании. Такой широкий взгляд включает общественный долг и корпоративную социальную ответственность, и директора должны быть подотчётны и этим группам.

Основная цель — наблюдать за теми в компании, кто контролирует ресурсы и активы владельцев.

Главная задача — улучшать результаты компании и подотчётность при создании долгосрочной стоимости для акционеров.

Основные элементы хорошего корпоративного управления:

- эффективное руководство
- эффективные системы внутреннего контроля
- надзор за руководством со стороны неисполнительных директоров
- справедливая оценка работы директоров
- справедливое вознаграждение директоров
- честная финансовая отчётность
- конструктивные отношения с акционерами

Рекомендации нужно регулярно пересматривать, чтобы они соответствовали современной деловой практике.`,
        uz: `1992-yilgi Cadbury hisobotida korporativ boshqaruv "the system by which companies are directed and controlled" deb ta'riflanadi, ya'ni kompaniyalar yo'naltiriladigan va nazorat qilinadigan tizim. Ko'pincha bu aksiyadorlar manfaatida va kompaniyadan tashqaridagi manfaatdor tomonlarni hisobga olgan holda harakat qilish bilan kengaytiriladi. Bu keng qarash jamoat burchi va korporativ ijtimoiy mas'uliyatni ham qamrab oladi, direktorlar bu guruhlar oldida ham hisobdor bo'lishi kerak.

Asosiy maqsad — kompaniyada egalar resurslari va aktivlarini nazorat qiluvchilarni kuzatish.

Birlamchi vazifa — uzoq muddatli aksiyadorlar qiymatini yaratishda kompaniya natijalari va hisobdorlikni yaxshilash.

Yaxshi korporativ boshqaruvning asosiy elementlari:

- samarali rahbariyat
- samarali ichki nazorat tizimlari
- noijrochi direktorlar tomonidan rahbariyat ustidan nazorat
- direktorlar ishini adolatli baholash
- direktorlarga adolatli haq to'lash
- adolatli moliyaviy hisobot
- aksiyadorlar bilan konstruktiv munosabatlar

Ko'rsatmalar hozirgi biznes amaliyotiga mos bo'lishi uchun muntazam qayta ko'rib chiqilishi kerak.`,
      },
      example: {
        en: `Madina's Mart LLC appoints two non-executive directors who do not run the shops, and they oversee Rustam's work. The board reviews his pay against fair targets, adds a rule that two people must approve large payments, and holds a yearly meeting where shareholders can question management.`,
        ru: `Madina's Mart LLC назначает двух неисполнительных директоров, которые не управляют магазинами и контролируют работу Рустама. Совет проверяет его вознаграждение по справедливым целям, вводит правило, что крупные платежи подтверждают два человека, и проводит ежегодное собрание, где акционеры могут задавать вопросы руководству.`,
        uz: `Madina's Mart LLC do'konlarni boshqarmaydigan ikki noijrochi direktorni tayinlaydi, ular Rustam ishini nazorat qiladi. Kengash uning maoshini adolatli maqsadlar bo'yicha ko'rib chiqadi, yirik to'lovlarni ikki kishi tasdiqlashi qoidasini kiritadi va aksiyadorlar rahbariyatga savol bera oladigan yillik yig'ilish o'tkazadi.`,
      },
    },
    {
      exam: {
        en: `- Responsibility sits with the board together, not one director, and stays there if tasks are delegated.
- No law requires directors to hold an accounting or business qualification.
- Directors are personally liable for losses from fraud or error only if they failed in their duties.`,
        ru: `- Ответственность лежит на всём совете, а не на одном директоре, и остаётся на нём при передаче задач.
- Закон не требует от директоров бухгалтерской или бизнес-квалификации.
- Директора лично отвечают за убытки от мошенничества или ошибок, только если не исполнили обязанности.`,
        uz: `- Javobgarlik bitta direktorda emas, butun kengashda va vazifa topshirilsa ham unda qoladi.
- Qonun direktorlardan buxgalteriya yoki biznes malakasini talab qilmaydi.
- Direktorlar firibgarlik yoki xato zarari uchun faqat burchini bajarmagan bo'lsa shaxsan javob beradi.`,
      },
      key: {
        en: `- Act in good faith, and disclose any conflict of interest.
- The whole board is responsible for controls, records and the statements.
- Directors prepare the statements. Auditors only give an opinion.
- UK: comply or explain (principles). US: Sarbanes-Oxley (law, compulsory).`,
        ru: `- Действовать добросовестно и раскрывать любой конфликт интересов.
- Весь совет отвечает за контроль, учётные записи и отчётность.
- Отчётность готовят директора. Аудиторы только высказывают мнение.
- Великобритания: соблюдай или объясняй (принципы). США: Сарбейнс-Оксли (закон).`,
        uz: `- Vijdonan harakat qilish va har qanday manfaat to'qnashuvini oshkor qilish.
- Nazorat, yozuvlar va hisobot uchun butun kengash javob beradi.
- Hisobotni direktorlar tayyorlaydi. Auditorlar faqat fikr beradi.
- Buyuk Britaniya: bajar yoki tushuntir (tamoyil). AQSh: Sarbanes-Oxley (qonun).`,
      },
      heading: {
        en: 'Duties and responsibilities of directors',
        ru: 'Обязанности и ответственность директоров',
        uz: 'Direktorlarning burch va mas\'uliyatlari',
      },
      body: {
        en: `Directors have general duties:

- a duty of care to act in good faith for the benefit of the company and its shareholders
- a duty of care to avoid conflicts between personal interests and those of the company and its stakeholders, and to disclose any conflict that arises

Law and regulation usually add specific responsibilities:

- establishing and maintaining adequate internal controls to prevent and detect fraud and error
- maintaining adequate accounting records as a basis for the annual financial statements
- preparing annual financial statements that show a true and fair view and comply with laws, regulations and IFRS Accounting Standards
- approving the statements before publication, and distributing or filing them as local law requires

In many countries, directors who fail in these duties may face civil and/or criminal sanctions.

Key exam point: directors, not auditors, are responsible for preparing the financial statements. The auditor gives an opinion on them.

Approaches differ between countries. The UK uses a principles-based "comply or explain" approach. Listed companies report how they applied the UK Corporate Governance Code and explain any departures. The Code covers board leadership and company purpose, division of responsibilities, composition, succession and evaluation, audit, risk and internal control, and remuneration.

The US uses a rules-based approach. The Sarbanes-Oxley Act puts governance into law, so compliance is compulsory and failure can lead to criminal conviction. It requires sound internal control, clear documentation of processes, risks and controls, and evidence that both management and the auditor have evaluated the controls.`,
        ru: `У директоров есть общие обязанности:

- обязанность заботливости: действовать добросовестно на благо компании и акционеров
- обязанность избегать конфликта между личными интересами и интересами компании и заинтересованных сторон, а при возникновении конфликта раскрывать его

Законы и правила обычно добавляют конкретные обязанности:

- создавать и поддерживать надлежащий внутренний контроль для предотвращения и выявления мошенничества и ошибок
- вести надлежащие учётные записи как основу годовой отчётности
- готовить годовую отчётность, дающую достоверное представление (true and fair view) и соответствующую законам, правилам и стандартам IFRS
- утверждать отчётность до публикации и распространять или подавать её согласно местному законодательству

Во многих странах директора, не исполняющие эти обязанности, могут понести гражданскую и/или уголовную ответственность.

Важно для экзамена: за подготовку отчётности отвечают директора, а не аудиторы. Аудитор лишь высказывает мнение о ней.

Подходы в странах различаются. Великобритания использует подход на основе принципов "соблюдай или объясняй" (comply or explain). Котируемые компании сообщают, как применяли Кодекс корпоративного управления Великобритании, и объясняют отклонения. Кодекс охватывает лидерство совета и цель компании, распределение обязанностей, состав, преемственность и оценку, аудит, риски и внутренний контроль, вознаграждение.

США используют подход на основе правил. Закон Сарбейнса-Оксли закрепляет управление в законодательстве, поэтому соблюдение обязательно, а нарушение может привести к уголовному наказанию. Он требует надёжного внутреннего контроля, чёткого документирования процессов, рисков и контролей и подтверждения, что и руководство, и аудитор оценили средства контроля.`,
        uz: `Direktorlarning umumiy burchlari bor:

- g'amxo'rlik burchi: kompaniya va aksiyadorlar manfaati uchun vijdonan harakat qilish
- shaxsiy manfaatlar bilan kompaniya va manfaatdor tomonlar manfaatlari to'qnashuvidan saqlanish va to'qnashuv yuzaga kelsa, uni oshkor qilish

Qonun va qoidalar odatda aniq mas'uliyatlarni qo'shadi:

- firibgarlik va xatolarning oldini olish va aniqlash uchun yetarli ichki nazoratni yaratish va saqlash
- yillik hisobot uchun asos bo'ladigan yetarli hisob yozuvlarini yuritish
- haqqoniy va adolatli ko'rinishni (true and fair view) beradigan hamda qonunlar, qoidalar va IFRS standartlariga mos yillik hisobot tayyorlash
- hisobotni e'lon qilishdan oldin tasdiqlash va mahalliy qonunlarga muvofiq tarqatish yoki topshirish

Ko'p mamlakatlarda bu burchlarni bajarmagan direktorlar fuqarolik va/yoki jinoiy javobgarlikka tortilishi mumkin.

Imtihon uchun muhim: hisobotni tayyorlash uchun auditorlar emas, direktorlar javobgar. Auditor faqat u haqda fikr bildiradi.

Yondashuvlar mamlakatlarda farq qiladi. Buyuk Britaniya tamoyillarga asoslangan "bajar yoki tushuntir" (comply or explain) yondashuvini qo'llaydi. Listingdagi kompaniyalar Buyuk Britaniya korporativ boshqaruv kodeksini qanday qo'llaganini xabar qiladi va og'ishlarni tushuntiradi. Kodeks kengash yetakchiligi va kompaniya maqsadi, mas'uliyatlar taqsimoti, tarkib, vorislik va baholash, audit, xavf va ichki nazorat hamda haq to'lashni qamrab oladi.

AQSh qoidalarga asoslangan yondashuvni qo'llaydi. Sarbanes-Oxley qonuni boshqaruvni qonunga kiritadi, shuning uchun rioya qilish majburiy, buzish esa jinoiy javobgarlikka olib kelishi mumkin. U ishonchli ichki nazoratni, jarayonlar, xavflar va nazoratlarning aniq hujjatlashtirilishini hamda rahbariyat va auditor nazoratlarni baholaganiga dalilni talab qiladi.`,
      },
      example: {
        en: `Rustam's brother owns a delivery company that bids for Madina's Mart's contract. Rustam must disclose this conflict and stay out of the decision. If the accounts contain an error, responsibility for preparing them stays with the directors, even though the auditor signed an opinion.`,
        ru: `Брату Рустама принадлежит служба доставки, которая участвует в тендере на контракт Madina's Mart. Рустам должен раскрыть этот конфликт и не участвовать в решении. Если в отчётности есть ошибка, ответственность за её подготовку остаётся на директорах, даже если аудитор подписал заключение.`,
        uz: `Rustamning akasiga Madina's Mart shartnomasi uchun tanlovda qatnashayotgan yetkazib berish kompaniyasi tegishli. Rustam bu to'qnashuvni oshkor qilishi va qarorda qatnashmasligi kerak. Agar hisobotda xato bo'lsa, auditor o'z fikriga imzo qo'ygan bo'lsa ham, uni tayyorlash uchun javobgarlik direktorlarda qoladi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Harmonisation', ru: 'Гармонизация', uz: 'Uyg\'unlashtirish' }, definition: { en: 'Moving countries towards consistent, comparable financial reporting.', ru: 'Приближение стран к последовательной и сопоставимой отчётности.', uz: 'Mamlakatlarni izchil va taqqoslanadigan hisobotga yaqinlashtirish.' } },
    { term: { en: 'Convergence', ru: 'Сближение', uz: 'Yaqinlashish' }, definition: { en: 'Updating national standards over time to become consistent with IFRS Accounting Standards.', ru: 'Постепенное приведение национальных стандартов в соответствие с IFRS.', uz: 'Milliy standartlarni asta-sekin IFRS ga moslashtirish.' } },
    { term: { en: 'Exposure draft', ru: 'Проект стандарта', uz: 'Standart loyihasi' }, definition: { en: 'A draft version of a standard published for public comment.', ru: 'Черновик стандарта, опубликованный для общественного обсуждения.', uz: 'Jamoatchilik muhokamasi uchun e\'lon qilingan standart qoralamasi.' } },
    { term: { en: 'Separation of ownership and control', ru: 'Разделение собственности и контроля', uz: 'Egalik va nazoratning ajralishi' }, definition: { en: 'Shareholders own the company while directors run it.', ru: 'Акционеры владеют компанией, а директора управляют ею.', uz: 'Aksiyadorlar kompaniyaga egalik qiladi, direktorlar esa uni boshqaradi.' } },
    { term: { en: 'External audit', ru: 'Внешний аудит', uz: 'Tashqi audit' }, definition: { en: 'An independent examination giving an opinion on whether statements are true and fair.', ru: 'Независимая проверка с мнением о достоверности отчётности.', uz: 'Hisobot haqqoniy va adolatli ekanligi haqida fikr beruvchi mustaqil tekshiruv.' } },
    { term: { en: 'Corporate governance', ru: 'Корпоративное управление', uz: 'Korporativ boshqaruv' }, definition: { en: 'The system by which companies are directed and controlled.', ru: 'Система, с помощью которой компании направляются и контролируются.', uz: 'Kompaniyalar yo\'naltiriladigan va nazorat qilinadigan tizim.' } },
    { term: { en: 'Non-executive director', ru: 'Неисполнительный директор', uz: 'Noijrochi direktor' }, definition: { en: 'A board member who oversees management but does not run the business day to day.', ru: 'Член совета, который контролирует руководство, но не управляет бизнесом ежедневно.', uz: 'Rahbariyatni nazorat qiladigan, lekin biznesni kundalik boshqarmaydigan kengash a\'zosi.' } },
    { term: { en: 'Comply or explain', ru: 'Соблюдай или объясняй', uz: 'Bajar yoki tushuntir' }, definition: { en: 'The UK approach: follow the Code or explain any departure.', ru: 'Подход Великобритании: следовать Кодексу или объяснять отклонения.', uz: 'Buyuk Britaniya yondashuvi: Kodeksga amal qilish yoki og\'ishni tushuntirish.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter02;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter02.id] = chapter02;
