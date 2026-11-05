module.exports = {
  ...require('./p19q.js'),
  sections: [
    {
      simple: [
`When one company CONTROLS another, they form a group. The one in control is the parent; the one controlled is the subsidiary. Control usually means owning more than 50% of the voting shares, because then you can outvote everyone else.

IFRS 10 says control needs three things together: power over the company, exposure to its returns (such as dividends), and the ability to use that power to change those returns.

If the parent owns less than 100%, the other shareholders are the non-controlling interest (NCI). The group then prepares one set of consolidated statements, as if it were a single business.`,
`Когда одна компания КОНТРОЛИРУЕТ другую, они образуют группу. Контролирующая — материнская, контролируемая — дочерняя. Контроль обычно означает владение более 50% голосующих акций: тогда вы перевешиваете всех остальных.

IFRS 10 говорит, что для контроля нужны три вещи вместе: власть над компанией, подверженность её доходам (например, дивидендам) и способность использовать власть, чтобы влиять на эти доходы.

Если материнская владеет меньше чем 100%, остальные акционеры — неконтролирующая доля (NCI). Группа готовит один комплект консолидированной отчётности, как будто это один бизнес.`,
`Bir kompaniya boshqasini NAZORAT qilsa, ular guruh hosil qiladi. Nazorat qiluvchi — bosh kompaniya, nazorat qilinuvchi — sho'ba kompaniya. Nazorat odatda ovoz beruvchi aksiyalarning 50% dan ko'piga egalikni bildiradi: shunda boshqalarni ovozda yengasiz.

IFRS 10 nazorat uchun uch narsa birga kerak deydi: kompaniya ustidan hokimiyat, uning daromadlariga ta'sirchanlik (masalan, dividendlar) va bu daromadlarga ta'sir qilish uchun hokimiyatdan foydalanish qobiliyati.

Bosh kompaniya 100% dan kam egalik qilsa, qolgan aksiyadorlar nazoratsiz ulush (NCI). Guruh bitta konsolidatsiyalangan hisobot tayyorlaydi, go'yo u bitta biznes.`],
      example: [
`On 1 April 20X6 Shop Co buys 80% of the shares of Bake Co, so it can supply its own bread.
# Who is who
  Shop Co owns more than 50%: it is the PARENT
  Bake Co is controlled: it is the SUBSIDIARY
# The other 20%
  The bakery's founder keeps 20%: the NON-CONTROLLING INTEREST
# What changes
  From now on Shop Co must prepare group (consolidated) accounts
= Over 50% of the votes = control = a group.`,
`1 апреля 20X6 Shop Co покупает 80% акций Bake Co, чтобы снабжать себя хлебом.
# Кто есть кто
  Shop Co владеет более 50%: это МАТЕРИНСКАЯ компания
  Bake Co под контролем: это ДОЧЕРНЯЯ компания
# Остальные 20%
  Основатель пекарни сохраняет 20%: НЕКОНТРОЛИРУЮЩАЯ ДОЛЯ
# Что меняется
  Отныне Shop Co должна готовить групповую (консолидированную) отчётность
= Более 50% голосов = контроль = группа.`,
`20X6 yil 1 aprelda Shop Co o'zini non bilan ta'minlash uchun Bake Co aksiyalarining 80% ini sotib oladi.
# Kim kim
  Shop Co 50% dan ko'piga ega: u BOSH kompaniya
  Bake Co nazorat ostida: u SHO'BA kompaniya
# Qolgan 20%
  Novvoyxona asoschisi 20% ni saqlaydi: NAZORATSIZ ULUSH
# Nima o'zgaradi
  Endi Shop Co guruh (konsolidatsiyalangan) hisobotini tayyorlashi kerak
= Ovozlarning 50% dan ko'pi = nazorat = guruh.`],
    },
    {
      simple: [
`The group statement shows everything the parent CONTROLS. So:

- Add the parent's and subsidiary's assets and liabilities line by line, in FULL, even if the parent owns only 80%.
- Remove the parent's "investment in subsidiary" and put goodwill in its place.
- Show only the PARENT's share capital and share premium.
- Show the outside owners' part as one line in equity: the NCI.

Use five workings, always in the same order: W1 group structure, W2 the subsidiary's net assets, W3 goodwill, W4 NCI, W5 group retained earnings.`,
`Групповой отчёт показывает всё, что материнская КОНТРОЛИРУЕТ. Поэтому:

- Складываем активы и обязательства материнской и дочерней построчно, ПОЛНОСТЬЮ, даже если материнская владеет лишь 80%.
- Убираем «инвестицию в дочернюю» материнской и ставим вместо неё гудвил.
- Показываем только акционерный капитал и эмиссионный доход МАТЕРИНСКОЙ.
- Долю внешних владельцев показываем одной строкой в капитале: NCI.

Используем пять расчётов, всегда в одном порядке: W1 структура группы, W2 чистые активы дочерней, W3 гудвил, W4 NCI, W5 нераспределённая прибыль группы.`,
`Guruh hisoboti bosh kompaniya NAZORAT qiladigan hamma narsani ko'rsatadi. Shuning uchun:

- Bosh va sho'ba kompaniyalarning aktiv va majburiyatlarini qatorma-qator, TO'LIQ qo'shamiz, hatto bosh kompaniya faqat 80% ga ega bo'lsa ham.
- Bosh kompaniyaning «sho'baga investitsiya»sini olib tashlab, o'rniga gudvil qo'yamiz.
- Faqat BOSH kompaniyaning ustav kapitali va emissiya daromadini ko'rsatamiz.
- Tashqi egalar ulushini kapitalda bitta qator qilib ko'rsatamiz: NCI.

Besh hisob-kitobdan har doim bir xil tartibda foydalanamiz: W1 guruh tuzilmasi, W2 sho'ba sof aktivlari, W3 gudvil, W4 NCI, W5 guruh taqsimlanmagan foydasi.`],
      example: [
`Group property, plant and equipment at 31 December 20X6.
# Add both in full
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Add the fair value uplift
  Bake Co's land was worth $500 more than its book value when bought: + $500
# Group figure
  $13,000 + $500 = $13,500
= All of Bake Co's assets go in, not 80% of them. Share capital shown is Shop Co's only.`,
`Основные средства группы на 31 декабря 20X6.
# Складываем обе полностью
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Прибавляем дооценку до справедливой стоимости
  Земля Bake Co при покупке стоила на $500 больше балансовой: + $500
# Цифра группы
  $13,000 + $500 = $13,500
= Включаем все активы Bake Co, а не 80% из них. Акционерный капитал — только Shop Co.`,
`20X6 yil 31 dekabrdagi guruh asosiy vositalari.
# Ikkalasini to'liq qo'shamiz
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Adolatli qiymat oshishini qo'shamiz
  Sotib olinganda Bake Co yeri balans qiymatidan $500 qimmat edi: + $500
# Guruh soni
  $13,000 + $500 = $13,500
= Bake Co aktivlarining 80% i emas, hammasi kiradi. Ustav kapitali faqat Shop Co niki.`],
    },
    {
      simple: [
`Goodwill is the extra paid for a business above the value of its separate assets: its name, customers and trained staff.

Goodwill = what the parent paid + fair value of the NCI - fair value of the subsidiary's net assets at the date of purchase.

- If the parent pays in its own shares, value them at their MARKET price, not nominal value.
- Value the subsidiary's assets at FAIR value: add any uplift (for example on land).
- If bought part-way through the year, find the reserves on the purchase date: opening reserves + profit for the months before it.`,
`Гудвил — переплата за бизнес сверх стоимости его отдельных активов: имя, покупатели, обученный персонал.

Гудвил = что заплатила материнская + справедливая стоимость NCI - справедливая стоимость чистых активов дочерней на дату покупки.

- Если материнская платит своими акциями, оценивайте их по РЫНОЧНОЙ цене, а не по номиналу.
- Активы дочерней — по СПРАВЕДЛИВОЙ стоимости: прибавьте дооценку (например, земли).
- Если покупка в середине года, найдите резервы на дату покупки: резервы на начало + прибыль за месяцы до неё.`,
`Gudvil — biznes uchun alohida aktivlari qiymatidan ortiq to'langan summa: nomi, mijozlari va o'qitilgan xodimlari.

Gudvil = bosh kompaniya to'lagani + NCI adolatli qiymati - xarid sanasidagi sho'ba sof aktivlarining adolatli qiymati.

- Bosh kompaniya o'z aksiyalari bilan to'lasa, ularni nominal emas, BOZOR narxida baholang.
- Sho'ba aktivlarini ADOLATLI qiymatda baholang: har qanday oshishni qo'shing (masalan, yer).
- Yil o'rtasida sotib olinsa, xarid sanasidagi rezervlarni toping: boshlang'ich rezervlar + undan oldingi oylar foydasi.`],
      example: [
`Shop Co buys 80% of Bake Co on 1 April 20X6.
# What Shop Co paid
  Cash $2,400 + 200 of its own $1 shares worth $4 each ($800) = $3,200
  Shop Co records: Dr Investment $800, Cr Share capital $200, Cr Share premium $600
# Bake Co's reserves on 1 April
  $1,800 on 1 January + 3/12 x profit $800 = $1,800 + $200 = $2,000
# Bake Co's net assets at fair value on 1 April
  Share capital $1,000 + reserves $2,000 + land uplift $500 = $3,500
# Goodwill
  Paid $3,200 + NCI fair value $750 - net assets $3,500 = $450
= Goodwill $450: an intangible asset in the group statement.`,
`Shop Co покупает 80% Bake Co 1 апреля 20X6.
# Что заплатила Shop Co
  Деньги $2,400 + 200 своих акций по $1 стоимостью $4 каждая ($800) = $3,200
  Shop Co записывает: Дт Инвестиция $800, Кт Акционерный капитал $200, Кт Эмиссионный доход $600
# Резервы Bake Co на 1 апреля
  $1,800 на 1 января + 3/12 x прибыль $800 = $1,800 + $200 = $2,000
# Чистые активы Bake Co по справедливой стоимости на 1 апреля
  Акционерный капитал $1,000 + резервы $2,000 + дооценка земли $500 = $3,500
# Гудвил
  Заплачено $3,200 + справедливая стоимость NCI $750 - чистые активы $3,500 = $450
= Гудвил $450: нематериальный актив в отчёте группы.`,
`Shop Co 20X6 yil 1 aprelda Bake Co ning 80% ini sotib oladi.
# Shop Co nima to'ladi
  Pul $2,400 + har biri $4 turadigan 200 ta o'z $1 lik aksiyasi ($800) = $3,200
  Shop Co yozadi: Dt Investitsiya $800, Kt Ustav kapitali $200, Kt Emissiya daromadi $600
# Bake Co ning 1 apreldagi rezervlari
  1 yanvarda $1,800 + 3/12 x foyda $800 = $1,800 + $200 = $2,000
# Bake Co ning 1 apreldagi adolatli qiymatdagi sof aktivlari
  Ustav kapitali $1,000 + rezervlar $2,000 + yer oshishi $500 = $3,500
# Gudvil
  To'langan $3,200 + NCI adolatli qiymati $750 - sof aktivlar $3,500 = $450
= Gudvil $450: guruh hisobotidagi nomoddiy aktiv.`],
    },
    {
      simple: [
`Profits the subsidiary made BEFORE the parent bought it belong to the old owners. They are not group profits.

Profits made AFTER the purchase are shared:
- The parent's % goes into group retained earnings.
- The NCI's % goes to the NCI.

Post-acquisition change = subsidiary's net assets now - net assets at purchase.
NCI = NCI fair value at purchase + NCI % x post-acquisition change.
Group retained earnings = parent's own retained earnings + parent % x post-acquisition change.`,
`Прибыль, которую дочерняя получила ДО покупки материнской, принадлежит старым владельцам. Это не прибыль группы.

Прибыль ПОСЛЕ покупки делится:
- Доля материнской идёт в нераспределённую прибыль группы.
- Доля NCI идёт в NCI.

Изменение после покупки = чистые активы дочерней сейчас - чистые активы на дату покупки.
NCI = справедливая стоимость NCI при покупке + % NCI x изменение после покупки.
Нераспределённая прибыль группы = собственная прибыль материнской + % материнской x изменение после покупки.`,
`Sho'ba kompaniya bosh kompaniya sotib olishidan OLDIN topgan foyda eski egalarga tegishli. Bu guruh foydasi emas.

Xariddan KEYINGI foyda bo'linadi:
- Bosh kompaniya ulushi guruh taqsimlanmagan foydasiga boradi.
- NCI ulushi NCI ga boradi.

Xariddan keyingi o'zgarish = sho'baning hozirgi sof aktivlari - xarid paytidagi sof aktivlari.
NCI = xarid paytidagi NCI adolatli qiymati + NCI % x xariddan keyingi o'zgarish.
Guruh taqsimlanmagan foydasi = bosh kompaniyaning o'z foydasi + bosh kompaniya % x xariddan keyingi o'zgarish.`],
      example: [
`Bake Co at 31 December 20X6.
# W2: net assets now
  Share capital $1,000 + reserves $2,600 + land uplift $500 = $4,100
  Less unsold profit on bread sold to Shop Co (next section): - $100 = $4,000
# Post-acquisition change
  $4,000 now - $3,500 at purchase = $500
# W4: NCI
  $750 + 20% x $500 = $850
# W5: group retained earnings
  Shop Co's own $6,000 + 80% x $500 = $6,400
= The $2,000 of reserves at purchase stays out of group retained earnings.`,
`Bake Co на 31 декабря 20X6.
# W2: чистые активы сейчас
  Акционерный капитал $1,000 + резервы $2,600 + дооценка земли $500 = $4,100
  Минус нереализованная прибыль по хлебу, проданному Shop Co (следующий раздел): - $100 = $4,000
# Изменение после покупки
  $4,000 сейчас - $3,500 при покупке = $500
# W4: NCI
  $750 + 20% x $500 = $850
# W5: нераспределённая прибыль группы
  Собственная Shop Co $6,000 + 80% x $500 = $6,400
= Резервы $2,000 на дату покупки не входят в нераспределённую прибыль группы.`,
`20X6 yil 31 dekabrda Bake Co.
# W2: hozirgi sof aktivlar
  Ustav kapitali $1,000 + rezervlar $2,600 + yer oshishi $500 = $4,100
  Minus Shop Co ga sotilgan nonning sotilmagan foydasi (keyingi bo'lim): - $100 = $4,000
# Xariddan keyingi o'zgarish
  Hozir $4,000 - xarid paytida $3,500 = $500
# W4: NCI
  $750 + 20% x $500 = $850
# W5: guruh taqsimlanmagan foydasi
  Shop Co ning o'zi $6,000 + 80% x $500 = $6,400
= Xarid paytidagi $2,000 rezerv guruh taqsimlanmagan foydasiga kirmaydi.`],
    },
    {
      simple: [
`A group cannot owe money to itself or make a profit selling to itself.

- Money owed between group companies: cancel it from BOTH receivables and payables.
- Goods sold inside the group and still unsold at the year end: the profit in them is unrealised (PURP). Take it off group inventory.

Who bears the PURP? If the PARENT sold the goods, take it all off group retained earnings (W5). If the SUBSIDIARY sold them, take it off the subsidiary's net assets now (W2), so the NCI shares it.

Mark-up is on cost: profit = price x mark-up / (100 + mark-up). Margin is on price: profit = price x margin.`,
`Группа не может быть должна сама себе или получать прибыль от продаж самой себе.

- Долги между компаниями группы: вычеркните их И из дебиторов, И из кредиторов.
- Товар, проданный внутри группы и не проданный на конец года: прибыль в нём нереализована (PURP). Вычтите её из запасов группы.

Кто несёт PURP? Если продавала МАТЕРИНСКАЯ, вычтите всё из нераспределённой прибыли группы (W5). Если продавала ДОЧЕРНЯЯ, вычтите из её текущих чистых активов (W2), чтобы NCI разделила её.

Наценка — от себестоимости: прибыль = цена x наценка / (100 + наценка). Маржа — от цены: прибыль = цена x маржа.`,
`Guruh o'ziga qarzdor bo'la olmaydi va o'ziga sotib foyda ola olmaydi.

- Guruh kompaniyalari orasidagi qarz: uni debitorlardan HAM, kreditorlardan HAM chiqaring.
- Guruh ichida sotilgan va yil oxirida sotilmay qolgan tovar: undagi foyda amalga oshmagan (PURP). Uni guruh zaxirasidan ayiring.

PURP ni kim ko'taradi? Agar BOSH kompaniya sotgan bo'lsa, hammasini guruh taqsimlanmagan foydasidan (W5) ayiring. Agar SHO'BA sotgan bo'lsa, uning hozirgi sof aktivlaridan (W2) ayiring, shunda NCI ham baham ko'radi.

Ustama tannarxdan: foyda = narx x ustama / (100 + ustama). Marja narxdan: foyda = narx x marja.`],
      example: [
`Bake Co sells bread to Shop Co for $600, at a 50% mark-up on cost.
# Profit in the sale
  $600 x 50/150 = $200
# Unrealised part
  Half is still unsold at the year end: $200 x 1/2 = $100
# Where it goes
  Group inventory: - $100
  Bake Co (the subsidiary) was the seller: take $100 off its net assets in W2, so the NCI bears 20%
# Money owed inside the group
  Shop Co owes Bake Co $150: take $150 off group receivables AND group payables
= PURP $100; intra-group balance $150 cancelled.`,
`Bake Co продаёт хлеб Shop Co за $600 с наценкой 50% на себестоимость.
# Прибыль в продаже
  $600 x 50/150 = $200
# Нереализованная часть
  Половина не продана на конец года: $200 x 1/2 = $100
# Куда идёт
  Запасы группы: - $100
  Продавала Bake Co (дочерняя): вычитаем $100 из её чистых активов в W2, NCI несёт 20%
# Долг внутри группы
  Shop Co должна Bake Co $150: вычитаем $150 из дебиторов И кредиторов группы
= PURP $100; внутригрупповой остаток $150 исключён.`,
`Bake Co Shop Co ga nonni tannarxga 50% ustama bilan $600 ga sotadi.
# Sotuvdagi foyda
  $600 x 50/150 = $200
# Amalga oshmagan qism
  Yarmi yil oxirida sotilmagan: $200 x 1/2 = $100
# Qayerga boradi
  Guruh zaxirasi: - $100
  Sotuvchi Bake Co (sho'ba): W2 da uning sof aktivlaridan $100 ayiramiz, NCI 20% ni ko'taradi
# Guruh ichidagi qarz
  Shop Co Bake Co ga $150 qarz: guruh debitorlaridan HAM, kreditorlaridan HAM $150 ayiramiz
= PURP $100; guruh ichidagi $150 qoldiq chiqarildi.`],
    },
  ],
  terms: {
    'Parent': ['Shop Co owns 80% of Bake Co, so Shop Co is the parent.', 'Shop Co владеет 80% Bake Co, значит Shop Co — материнская.', 'Shop Co Bake Co ning 80% iga ega, demak Shop Co bosh kompaniya.'],
    'Subsidiary': ['Bake Co, 80% owned and controlled by Shop Co.', 'Bake Co, на 80% принадлежит Shop Co и контролируется ею.', 'Bake Co, 80% i Shop Co ga tegishli va u nazorat qiladi.'],
    'Control': ['Owning 80% of the votes lets Shop Co choose Bake Co\'s board and its dividends.', 'Владея 80% голосов, Shop Co выбирает совет директоров Bake Co и её дивиденды.', 'Ovozlarning 80% iga ega bo\'lib, Shop Co Bake Co kengashini va dividendlarini tanlaydi.'],
    'Non-controlling interest (NCI)': ['The bakery founder\'s 20%: $750 at purchase, $850 at the year end.', '20% основателя пекарни: $750 при покупке, $850 на конец года.', 'Novvoyxona asoschisining 20% i: xaridda $750, yil oxirida $850.'],
    'Consolidated financial statements': ['One statement of financial position for Shop Co and Bake Co together.', 'Один отчёт о финансовом положении для Shop Co и Bake Co вместе.', 'Shop Co va Bake Co uchun birgalikda bitta moliyaviy holat hisoboti.'],
    'Goodwill': ['$3,200 paid + $750 NCI - $3,500 net assets = $450.', 'Заплачено $3,200 + NCI $750 - чистые активы $3,500 = $450.', 'To\'langan $3,200 + NCI $750 - sof aktivlar $3,500 = $450.'],
    'Fair value': ['Land in the books at $2,000 but worth $2,500 today: fair value $2,500.', 'Земля по книгам $2,000, но сегодня стоит $2,500: справедливая стоимость $2,500.', 'Kitobda $2,000 lik yer bugun $2,500 turadi: adolatli qiymat $2,500.'],
    'Pre-acquisition profits': ['Bake Co\'s $2,000 of reserves on the day Shop Co bought it.', 'Резервы Bake Co $2,000 в день покупки Shop Co.', 'Shop Co sotib olgan kuni Bake Co ning $2,000 rezervi.'],
    'Unrealised profit (PURP)': ['$100 profit on bread sold by Bake Co to Shop Co and still on Shop Co\'s shelves.', 'Прибыль $100 по хлебу, проданному Bake Co в Shop Co и ещё лежащему на полках Shop Co.', 'Bake Co Shop Co ga sotgan va hali Shop Co javonida turgan nondagi $100 foyda.'],
    'Trade investment': ['Owning 5% of a supplier\'s shares: no control and no significant influence.', 'Владение 5% акций поставщика: ни контроля, ни значительного влияния.', 'Yetkazib beruvchi aksiyalarining 5% iga egalik: na nazorat, na sezilarli ta\'sir.'],
  },
  add: [
    {
      term: ['Consideration', 'Возмещение', 'To\'lov (kompensatsiya)'],
      definition: ['What the parent gives to buy the subsidiary: cash, its own shares at fair value, or both.', 'То, что материнская отдаёт за дочернюю: деньги, свои акции по справедливой стоимости или и то и другое.', 'Bosh kompaniya sho\'bani sotib olish uchun beradigan narsa: pul, adolatli qiymatdagi o\'z aksiyalari yoki ikkalasi.'],
      example: ['Cash $2,400 + 200 shares worth $4 each = $3,200.', 'Деньги $2,400 + 200 акций по $4 = $3,200.', 'Pul $2,400 + har biri $4 lik 200 aksiya = $3,200.'],
    },
    {
      term: ['Post-acquisition profits', 'Прибыль после покупки', 'Xariddan keyingi foyda'],
      definition: ['Profits a subsidiary earns after the parent gains control; they are shared between the group and the NCI.', 'Прибыль дочерней после получения контроля материнской; делится между группой и NCI.', 'Bosh kompaniya nazoratni olgandan keyin sho\'ba topgan foyda; guruh va NCI o\'rtasida bo\'linadi.'],
      example: ['Net assets rose from $3,500 to $4,000: $500, of which the group takes 80% = $400.', 'Чистые активы выросли с $3,500 до $4,000: $500, из них группе 80% = $400.', 'Sof aktivlar $3,500 dan $4,000 ga oshdi: $500, shundan guruhga 80% = $400.'],
    },
  ],
  glossaryOrder: ['Parent', 'Subsidiary', 'Control', 'Non-controlling interest (NCI)', 'Consolidated financial statements', 'Consideration', 'Fair value', 'Goodwill', 'Pre-acquisition profits', 'Post-acquisition profits', 'Unrealised profit (PURP)', 'Trade investment'],
};
