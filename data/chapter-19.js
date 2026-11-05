'use strict';

const chapter19 = {
  id: 'chapter-19',
  titles: {
    en: 'Consolidated statement of financial position',
    ru: 'Консолидированный отчёт о финансовом положении',
    uz: 'Konsolidatsiyalangan moliyaviy holat hisoboti',
  },
  objectives: [
    {
      en: 'Define parent, subsidiary, control, non-controlling interest and trade investment',
      ru: 'Определять материнскую и дочернюю компанию, контроль, неконтролирующую долю и простое вложение',
      uz: 'Bosh va sho\'ba kompaniya, nazorat, nazoratsiz ulush va oddiy sarmoyani ta\'riflash',
    },
    {
      en: 'Explain why consolidated financial statements are prepared',
      ru: 'Объяснять, зачем готовится консолидированная отчётность',
      uz: 'Konsolidatsiyalangan hisobot nega tuziladi, tushuntirish',
    },
    {
      en: 'Calculate goodwill using the fair value of consideration and net assets',
      ru: 'Рассчитывать гудвил по справедливой стоимости возмещения и чистых активов',
      uz: 'Gudvilni to\'lov va sof aktivlarning adolatli qiymati bo\'yicha hisoblash',
    },
    {
      en: 'Calculate non-controlling interest and group retained earnings',
      ru: 'Рассчитывать неконтролирующую долю и нераспределённую прибыль группы',
      uz: 'Nazoratsiz ulush va guruhning taqsimlanmagan foydasini hisoblash',
    },
    {
      en: 'Adjust for intra-group balances, unrealised profit and mid-year acquisitions',
      ru: 'Корректировать внутригрупповые остатки, нереализованную прибыль и покупку в середине года',
      uz: 'Guruh ichidagi qoldiqlar, amalga oshmagan foyda va yil o\'rtasidagi xaridni tuzatish',
    },
  ],
  sections: [
    {
      key: {
        en: `- A parent controls a subsidiary. Together they form a group.
- Control (IFRS 10) needs power, exposure to variable returns, and the ability to use power to affect them.
- Control usually means owning more than 50% of the voting shares.
- The other shareholders of a subsidiary are the non-controlling interest (NCI).
- IFRS 10 requires one set of consolidated statements showing the group as a single entity.
- An investment with neither control nor significant influence is a trade investment.`,
        ru: `- Материнская компания контролирует дочернюю. Вместе они образуют группу.
- Контроль (IFRS 10): власть, подверженность переменному доходу и способность властью влиять на него.
- Контроль обычно означает владение более 50% голосующих акций.
- Прочие акционеры дочерней компании — неконтролирующая доля (NCI).
- IFRS 10 требует единую консолидированную отчётность, показывающую группу как одно предприятие.
- Вложение без контроля и без значительного влияния — простое (торговое) вложение.`,
        uz: `- Bosh kompaniya sho'ba kompaniyani nazorat qiladi. Birga ular guruh.
- Nazorat (IFRS 10): hokimiyat, o'zgaruvchan daromadga ta'sirchanlik va hokimiyat bilan unga ta'sir qilish qobiliyati.
- Nazorat odatda ovoz beruvchi aksiyalarning 50% dan ko'pi degani.
- Sho'ba kompaniyaning boshqa aksiyadorlari nazoratsiz ulush (NCI).
- IFRS 10 guruhni bitta korxona sifatida ko'rsatuvchi yagona konsolidatsiyalangan hisobotni talab qiladi.
- Nazoratsiz va sezilarli ta'sirsiz sarmoya oddiy (savdo) sarmoya.`,
      },
      exam: {
        en: `- Significant influence is not one of the three elements of control. It is the test for an associate.
- Control can exist with less than 50%, for example by agreement with other shareholders.
- Being able to appoint a majority of the board normally indicates control.
- A trade investment is a financial asset, normally measured at fair value. Dividends received are income.`,
        ru: `- Значительное влияние не входит в три элемента контроля. Это критерий ассоциированной компании.
- Контроль возможен и при доле менее 50%, например по соглашению с другими акционерами.
- Право назначать большинство совета директоров обычно означает контроль.
- Простое вложение — финансовый актив, обычно по справедливой стоимости. Полученные дивиденды — доход.`,
        uz: `- Sezilarli ta'sir nazoratning uch elementidan biri emas. Bu assotsiatsiyalangan kompaniya mezoni.
- Nazorat 50% dan kam ulushda ham bo'lishi mumkin, masalan boshqa aksiyadorlar bilan kelishuv orqali.
- Direktorlar kengashining ko'pchiligini tayinlash huquqi odatda nazoratni bildiradi.
- Oddiy sarmoya moliyaviy aktiv, odatda adolatli qiymatda. Olingan dividendlar daromad.`,
      },
      heading: { en: 'Groups and control', ru: 'Группы и контроль', uz: 'Guruhlar va nazorat' },
      body: {
        en: `A group exists when one entity, the parent, controls another, the subsidiary. IFRS 10 Consolidated Financial Statements says an investor controls an investee when it has all three of: power over the investee, normally through a majority of the voting rights; exposure, or rights, to variable returns from it, such as dividends; and the ability to use its power to affect the amount of those returns.

Control normally comes from holding more than 50% of the equity or voting shares. It can exist with less. A 48% holder may in practice control a company whose other shares are spread among many unconnected people who never vote together. A 45% holder may have an agreement that lets it exercise voting control.

A parent does not need to own every share. If it owns 80%, the other 20% belong to outside shareholders. They keep their rights, such as voting at general meetings, but they cannot control the company. They are the non-controlling interest.

Once a parent controls a subsidiary, its shareholders' investment depends on both companies. IFRS 10 therefore requires consolidated financial statements: one set that combines the assets, liabilities, income and expenses of the parent and its subsidiaries as if they were one entity.`,
        ru: `Группа существует, когда одна компания, материнская, контролирует другую, дочернюю. По IFRS 10 «Консолидированная финансовая отчётность» инвестор контролирует объект инвестиций, если у него есть все три элемента: власть над объектом, обычно через большинство голосов; подверженность переменному доходу от него или права на такой доход, например дивиденды; и способность использовать власть, чтобы влиять на размер этого дохода.

Контроль обычно даёт владение более 50% обыкновенных или голосующих акций. Он возможен и при меньшей доле. Владелец 48% может фактически контролировать компанию, если остальные акции разбросаны среди многих не связанных людей, которые не голосуют вместе. Владелец 45% может иметь соглашение, дающее ему контроль над голосованием.

Материнской компании не нужно владеть всеми акциями. Если у неё 80%, остальные 20% принадлежат внешним акционерам. Они сохраняют свои права, например голос на общих собраниях, но не могут контролировать компанию. Это неконтролирующая доля.

Когда материнская компания контролирует дочернюю, вложение её акционеров зависит от обеих компаний. Поэтому IFRS 10 требует консолидированную отчётность: единый комплект, объединяющий активы, обязательства, доходы и расходы материнской и дочерних компаний так, как если бы это было одно предприятие.`,
        uz: `Guruh bir korxona, bosh kompaniya, boshqasini, sho'ba kompaniyani nazorat qilganda bo'ladi. IFRS 10 «Konsolidatsiyalangan moliyaviy hisobot» ga ko'ra investor quyidagi uchalasiga ega bo'lsa nazorat qiladi: obyekt ustidan hokimiyat, odatda ovozlar ko'pchiligi orqali; undan o'zgaruvchan daromadga, masalan dividendga, ta'sirchanlik yoki huquq; va bu daromad miqdoriga hokimiyat bilan ta'sir qilish qobiliyati.

Nazorat odatda oddiy yoki ovoz beruvchi aksiyalarning 50% dan ko'piga egalikdan keladi. U kamroq ulushda ham bo'lishi mumkin. 48% egasi, qolgan aksiyalar birga ovoz bermaydigan ko'plab bog'liq bo'lmagan odamlarda tarqalgan bo'lsa, amalda kompaniyani nazorat qilishi mumkin. 45% egasining ovoz berishni nazorat qilish imkonini beruvchi kelishuvi bo'lishi mumkin.

Bosh kompaniya barcha aksiyalarga ega bo'lishi shart emas. Agar uning 80% i bo'lsa, qolgan 20% tashqi aksiyadorlarga tegishli. Ular o'z huquqlarini, masalan umumiy yig'ilishda ovoz berishni saqlaydi, lekin kompaniyani nazorat qila olmaydi. Ular nazoratsiz ulush.

Bosh kompaniya sho'bani nazorat qilgach, uning aksiyadorlari sarmoyasi ikkala kompaniyaga bog'liq. Shuning uchun IFRS 10 konsolidatsiyalangan hisobotni talab qiladi: bosh va sho'ba kompaniyalarning aktiv, majburiyat, daromad va xarajatlarini bitta korxona kabi birlashtiruvchi yagona to'plam.`,
      },
      example: {
        en: `On 1 April 20X6 Shop Co buys 80% of the shares of Bake Co, so it can supply its own bread.
# Who is who
  Shop Co owns more than 50%: it is the PARENT
  Bake Co is controlled: it is the SUBSIDIARY
# The other 20%
  The bakery's founder keeps 20%: the NON-CONTROLLING INTEREST
# What changes
  From now on Shop Co must prepare group (consolidated) accounts
= Over 50% of the votes = control = a group.`,
        ru: `1 апреля 20X6 Shop Co покупает 80% акций Bake Co, чтобы снабжать себя хлебом.
# Кто есть кто
  Shop Co владеет более 50%: это МАТЕРИНСКАЯ компания
  Bake Co под контролем: это ДОЧЕРНЯЯ компания
# Остальные 20%
  Основатель пекарни сохраняет 20%: НЕКОНТРОЛИРУЮЩАЯ ДОЛЯ
# Что меняется
  Отныне Shop Co должна готовить групповую (консолидированную) отчётность
= Более 50% голосов = контроль = группа.`,
        uz: `20X6 yil 1 aprelda Shop Co o'zini non bilan ta'minlash uchun Bake Co aksiyalarining 80% ini sotib oladi.
# Kim kim
  Shop Co 50% dan ko'piga ega: u BOSH kompaniya
  Bake Co nazorat ostida: u SHO'BA kompaniya
# Qolgan 20%
  Novvoyxona asoschisi 20% ni saqlaydi: NAZORATSIZ ULUSH
# Nima o'zgaradi
  Endi Shop Co guruh (konsolidatsiyalangan) hisobotini tayyorlashi kerak
= Ovozlarning 50% dan ko'pi = nazorat = guruh.`,
      },
      simple: {
        en: `When one company CONTROLS another, they form a group. The one in control is the parent; the one controlled is the subsidiary. Control usually means owning more than 50% of the voting shares, because then you can outvote everyone else.

IFRS 10 says control needs three things together: power over the company, exposure to its returns (such as dividends), and the ability to use that power to change those returns.

If the parent owns less than 100%, the other shareholders are the non-controlling interest (NCI). The group then prepares one set of consolidated statements, as if it were a single business.`,
        ru: `Когда одна компания КОНТРОЛИРУЕТ другую, они образуют группу. Контролирующая — материнская, контролируемая — дочерняя. Контроль обычно означает владение более 50% голосующих акций: тогда вы перевешиваете всех остальных.

IFRS 10 говорит, что для контроля нужны три вещи вместе: власть над компанией, подверженность её доходам (например, дивидендам) и способность использовать власть, чтобы влиять на эти доходы.

Если материнская владеет меньше чем 100%, остальные акционеры — неконтролирующая доля (NCI). Группа готовит один комплект консолидированной отчётности, как будто это один бизнес.`,
        uz: `Bir kompaniya boshqasini NAZORAT qilsa, ular guruh hosil qiladi. Nazorat qiluvchi — bosh kompaniya, nazorat qilinuvchi — sho'ba kompaniya. Nazorat odatda ovoz beruvchi aksiyalarning 50% dan ko'piga egalikni bildiradi: shunda boshqalarni ovozda yengasiz.

IFRS 10 nazorat uchun uch narsa birga kerak deydi: kompaniya ustidan hokimiyat, uning daromadlariga ta'sirchanlik (masalan, dividendlar) va bu daromadlarga ta'sir qilish uchun hokimiyatdan foydalanish qobiliyati.

Bosh kompaniya 100% dan kam egalik qilsa, qolgan aksiyadorlar nazoratsiz ulush (NCI). Guruh bitta konsolidatsiyalangan hisobot tayyorlaydi, go'yo u bitta biznes.`,
      },
    },
    {
      key: {
        en: `- Add the parent's and subsidiary's assets and liabilities in full, line by line, even if P owns less than 100%.
- Replace the parent's investment in the subsidiary with goodwill.
- Share capital and share premium are the parent's only.
- Show the NCI as a separate line within equity.
- Group retained earnings include only the parent's share of the subsidiary's post-acquisition profits.
- Five workings: group structure, net assets, goodwill, NCI, group retained earnings.`,
        ru: `- Активы и обязательства материнской и дочерней складываются полностью построчно, даже если доля меньше 100%.
- Вложение материнской компании в дочернюю заменяется гудвилом.
- Акционерный капитал и эмиссионный доход — только материнской компании.
- NCI показывается отдельной строкой в капитале.
- Нераспределённая прибыль группы включает лишь долю материнской в прибыли дочерней после покупки.
- Пять расчётов: структура группы, чистые активы, гудвил, NCI, нераспределённая прибыль группы.`,
        uz: `- Bosh va sho'baning aktiv va majburiyatlari, ulush 100% dan kam bo'lsa ham, to'liq qatorma-qator qo'shiladi.
- Bosh kompaniyaning sho'badagi sarmoyasi gudvil bilan almashtiriladi.
- Aksiya kapitali va emissiya daromadi faqat bosh kompaniyaniki.
- NCI kapital ichida alohida qatorda ko'rsatiladi.
- Guruhning taqsimlanmagan foydasiga sho'baning xariddan keyingi foydasidagi bosh ulushi kiradi.
- Besh hisob: guruh tuzilmasi, sof aktivlar, gudvil, NCI, guruhning taqsimlanmagan foydasi.`,
      },
      exam: {
        en: `- Never apportion the subsidiary's assets by the parent's %. A subsidiary owned 75% still adds 100% of its PPE.
- Fair value uplifts at acquisition are added to the asset line, for example land.
- An investment in an associate or another company is not property, plant and equipment.
- The subsidiary's share capital and share premium are the same in both columns of the net assets working.`,
        ru: `- Никогда не делите активы дочерней на долю материнской. Дочерняя на 75% всё равно даёт 100% основных средств.
- Дооценка до справедливой стоимости при покупке добавляется к строке актива, например к земле.
- Вложение в ассоциированную или другую компанию — не основные средства.
- Акционерный капитал и эмиссионный доход дочерней одинаковы в обеих колонках расчёта чистых активов.`,
        uz: `- Sho'ba aktivlarini hech qachon bosh ulushiga bo'lmang. 75% li sho'ba ham asosiy vositalarining 100% ini qo'shadi.
- Xarid paytidagi adolatli qiymatga oshirish aktiv qatoriga, masalan yerga, qo'shiladi.
- Assotsiatsiyalangan yoki boshqa kompaniyadagi sarmoya asosiy vosita emas.
- Sho'baning aksiya kapitali va emissiya daromadi sof aktivlar hisobining ikkala ustunida bir xil.`,
      },
      heading: {
        en: 'The basic method and the five workings',
        ru: 'Основной метод и пять расчётов',
        uz: 'Asosiy usul va besh hisob',
      },
      body: {
        en: `The consolidated statement of financial position shows everything the parent controls. So the assets and liabilities of the parent and subsidiary are added together in full, line by line. They are not cut down to the parent's percentage, even when it owns only part of the subsidiary. The outside shareholders' part is shown instead as one figure, the non-controlling interest, in the equity section.

The parent's own statement shows an investment in the subsidiary. In the group statement this is replaced by the subsidiary's individual assets and liabilities, plus goodwill. Only the parent's share capital and share premium appear, because the subsidiary's share capital is cancelled against the investment.

Work through five standard workings in the same order every time. W1, group structure: who owns what percentage, the NCI percentage, and the date control was gained. W2, net assets of the subsidiary at the acquisition date and at the reporting date. W3, goodwill. W4, non-controlling interest. W5, group retained earnings.

In W2, list share capital, share premium, any revaluation surplus, retained earnings and fair value adjustments. Share capital and share premium should be the same in both columns. The difference between the two totals is the subsidiary's post-acquisition change in net assets, which is shared between the group and the NCI.`,
        ru: `Консолидированный отчёт о финансовом положении показывает всё, что контролирует материнская компания. Поэтому активы и обязательства материнской и дочерней складываются полностью построчно. Их не уменьшают до доли материнской компании, даже если она владеет лишь частью дочерней. Часть внешних акционеров показывается одной суммой — неконтролирующей долей — в разделе капитала.

В отчёте самой материнской компании есть вложение в дочернюю. В отчёте группы оно заменяется отдельными активами и обязательствами дочерней плюс гудвил. Показывается только акционерный капитал и эмиссионный доход материнской, так как капитал дочерней взаимно исключается с вложением.

Каждый раз проходите пять стандартных расчётов в одном порядке. W1, структура группы: доли владения, доля NCI и дата получения контроля. W2, чистые активы дочерней на дату покупки и на отчётную дату. W3, гудвил. W4, неконтролирующая доля. W5, нераспределённая прибыль группы.

В W2 перечислите акционерный капитал, эмиссионный доход, резерв переоценки, если есть, нераспределённую прибыль и корректировки до справедливой стоимости. Капитал и эмиссионный доход должны совпадать в обеих колонках. Разница итогов — изменение чистых активов дочерней после покупки, которое делится между группой и NCI.`,
        uz: `Konsolidatsiyalangan moliyaviy holat hisoboti bosh kompaniya nazorat qiladigan hamma narsani ko'rsatadi. Shuning uchun bosh va sho'baning aktiv va majburiyatlari to'liq, qatorma-qator qo'shiladi. Bosh kompaniya sho'baning faqat bir qismiga ega bo'lsa ham, ular bosh ulushigacha kamaytirilmaydi. Tashqi aksiyadorlar qismi kapital bo'limida bitta summa — nazoratsiz ulush sifatida ko'rsatiladi.

Bosh kompaniyaning o'z hisobotida sho'badagi sarmoya bor. Guruh hisobotida u sho'baning alohida aktiv va majburiyatlari va gudvil bilan almashtiriladi. Faqat bosh kompaniyaning aksiya kapitali va emissiya daromadi ko'rsatiladi, chunki sho'ba kapitali sarmoya bilan o'zaro chiqarib tashlanadi.

Har safar besh standart hisobni bir xil tartibda bajaring. W1, guruh tuzilmasi: kim qancha foizga ega, NCI foizi va nazorat olingan sana. W2, sho'baning xarid sanasi va hisobot sanasidagi sof aktivlari. W3, gudvil. W4, nazoratsiz ulush. W5, guruhning taqsimlanmagan foydasi.

W2 da aksiya kapitali, emissiya daromadi, bo'lsa qayta baholash rezervi, taqsimlanmagan foyda va adolatli qiymat tuzatishlarini yozing. Kapital va emissiya daromadi ikkala ustunda bir xil bo'lishi kerak. Ikki jam farqi sho'ba sof aktivlarining xariddan keyingi o'zgarishi, u guruh va NCI o'rtasida bo'linadi.`,
      },
      example: {
        en: `Group property, plant and equipment at 31 December 20X6.
# Add both in full
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Add the fair value uplift
  Bake Co's land was worth $500 more than its book value when bought: + $500
# Group figure
  $13,000 + $500 = $13,500
= All of Bake Co's assets go in, not 80% of them. Share capital shown is Shop Co's only.`,
        ru: `Основные средства группы на 31 декабря 20X6.
# Складываем обе полностью
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Прибавляем дооценку до справедливой стоимости
  Земля Bake Co при покупке стоила на $500 больше балансовой: + $500
# Цифра группы
  $13,000 + $500 = $13,500
= Включаем все активы Bake Co, а не 80% из них. Акционерный капитал — только Shop Co.`,
        uz: `20X6 yil 31 dekabrdagi guruh asosiy vositalari.
# Ikkalasini to'liq qo'shamiz
  Shop Co $10,000 + Bake Co $3,000 = $13,000
# Adolatli qiymat oshishini qo'shamiz
  Sotib olinganda Bake Co yeri balans qiymatidan $500 qimmat edi: + $500
# Guruh soni
  $13,000 + $500 = $13,500
= Bake Co aktivlarining 80% i emas, hammasi kiradi. Ustav kapitali faqat Shop Co niki.`,
      },
      simple: {
        en: `The group statement shows everything the parent CONTROLS. So:

- Add the parent's and subsidiary's assets and liabilities line by line, in FULL, even if the parent owns only 80%.
- Remove the parent's "investment in subsidiary" and put goodwill in its place.
- Show only the PARENT's share capital and share premium.
- Show the outside owners' part as one line in equity: the NCI.

Use five workings, always in the same order: W1 group structure, W2 the subsidiary's net assets, W3 goodwill, W4 NCI, W5 group retained earnings.`,
        ru: `Групповой отчёт показывает всё, что материнская КОНТРОЛИРУЕТ. Поэтому:

- Складываем активы и обязательства материнской и дочерней построчно, ПОЛНОСТЬЮ, даже если материнская владеет лишь 80%.
- Убираем «инвестицию в дочернюю» материнской и ставим вместо неё гудвил.
- Показываем только акционерный капитал и эмиссионный доход МАТЕРИНСКОЙ.
- Долю внешних владельцев показываем одной строкой в капитале: NCI.

Используем пять расчётов, всегда в одном порядке: W1 структура группы, W2 чистые активы дочерней, W3 гудвил, W4 NCI, W5 нераспределённая прибыль группы.`,
        uz: `Guruh hisoboti bosh kompaniya NAZORAT qiladigan hamma narsani ko'rsatadi. Shuning uchun:

- Bosh va sho'ba kompaniyalarning aktiv va majburiyatlarini qatorma-qator, TO'LIQ qo'shamiz, hatto bosh kompaniya faqat 80% ga ega bo'lsa ham.
- Bosh kompaniyaning «sho'baga investitsiya»sini olib tashlab, o'rniga gudvil qo'yamiz.
- Faqat BOSH kompaniyaning ustav kapitali va emissiya daromadini ko'rsatamiz.
- Tashqi egalar ulushini kapitalda bitta qator qilib ko'rsatamiz: NCI.

Besh hisob-kitobdan har doim bir xil tartibda foydalanamiz: W1 guruh tuzilmasi, W2 sho'ba sof aktivlari, W3 gudvil, W4 NCI, W5 guruh taqsimlanmagan foydasi.`,
      },
    },
    {
      key: {
        en: `- Goodwill = consideration + fair value of NCI - fair value of net assets at acquisition.
- Goodwill is an intangible non-current asset in the group statement.
- Consideration in shares = shares acquired × exchange ratio × fair value of a parent share.
- The parent records it: Dr investment, Cr share capital (nominal), Cr share premium (the rest).
- Net assets at acquisition are at fair value: add any fair value uplift to W2.
- Mid-year: reserves at acquisition = opening reserves + profit to the acquisition date.`,
        ru: `- Гудвил = возмещение + справедливая стоимость NCI - справедливая стоимость чистых активов при покупке.
- Гудвил — нематериальный внеоборотный актив в отчёте группы.
- Возмещение акциями = купленные акции × коэффициент обмена × справедливая стоимость акции материнской.
- Запись у материнской: Дт вложение, Кт акционерный капитал (номинал), Кт эмиссионный доход (остаток).
- Чистые активы при покупке — по справедливой стоимости: дооценка добавляется в W2.
- Покупка в середине года: резервы на дату покупки = резервы на начало + прибыль до даты покупки.`,
        uz: `- Gudvil = to'lov + NCI adolatli qiymati - xarid paytidagi sof aktivlar adolatli qiymati.
- Gudvil guruh hisobotida nomoddiy uzoq muddatli aktiv.
- Aksiya bilan to'lov = olingan aksiyalar × almashtirish nisbati × bosh aksiyaning adolatli qiymati.
- Bosh kompaniya yozuvi: Dt sarmoya, Kt aksiya kapitali (nominal), Kt emissiya daromadi (qolgani).
- Xarid paytidagi sof aktivlar adolatli qiymatda: oshirishni W2 ga qo'shing.
- Yil o'rtasida: xarid paytidagi rezervlar = boshlang'ich rezervlar + xarid sanasigacha foyda.`,
      },
      exam: {
        en: `- Use the number of shares acquired, not the subsidiary's total shares, when valuing consideration.
- Shares with a nominal value of 50c: work out how many there are before using them.
- Profit is assumed to accrue evenly. Count whole months from the acquisition date.
- If reserves at the year end are given, take off the profit earned after acquisition to find reserves at acquisition.
- Goodwill stays at its acquisition figure unless it is impaired. Deferred and contingent consideration are not examinable.`,
        ru: `- При оценке возмещения берите количество купленных акций, а не все акции дочерней.
- Акции номиналом 50c: сначала определите их количество.
- Прибыль считается равномерной. Считайте целые месяцы от даты покупки.
- Если даны резервы на конец года, вычтите прибыль после покупки, чтобы найти резервы на дату покупки.
- Гудвил остаётся по сумме на дату покупки, если нет обесценения. Отсроченное и условное возмещение не входят в экзамен.`,
        uz: `- To'lovni baholashda sho'baning barcha aksiyalarini emas, olingan aksiyalar sonini oling.
- Nominali 50c aksiyalar: avval ularning sonini toping.
- Foyda bir tekis deb hisoblanadi. Xarid sanasidan butun oylarni sanang.
- Yil oxiridagi rezervlar berilsa, xariddan keyingi foydani ayirib, xarid paytidagi rezervlarni toping.
- Gudvil qadrsizlanmasa, xarid paytidagi summasida qoladi. Kechiktirilgan va shartli to'lov imtihonda yo'q.`,
      },
      heading: { en: 'Goodwill and fair values', ru: 'Гудвил и справедливая стоимость', uz: 'Gudvil va adolatli qiymat' },
      body: {
        en: `A business is usually worth more than its separate net assets. The difference is goodwill: reputation, brands, trained staff, customers and suppliers that do not appear in its own statement of financial position. A buyer pays for it because buying a working business is easier than building one from nothing. IFRS 3 Business Combinations requires goodwill to be recognised at the acquisition date as an intangible non-current asset in the group statement.

Goodwill is worked out using fair values. The consideration may be cash, shares in the parent, or both. Shares are valued at the parent's share price at the acquisition date, not at nominal value. If the parent has not yet recorded the issue, it debits the investment with the fair value, credits share capital with the nominal value and credits share premium with the excess. These increases also appear in the group statement.

The subsidiary's assets and liabilities are measured at fair value at acquisition, which is the price that would be received to sell an asset in an orderly transaction (IFRS 13). Carrying amounts, especially of land and buildings, are often out of date. Fair values matter because the group statement must show what the assets cost the group, and because goodwill would otherwise be meaningless. Any uplift is added to both columns of W2 and to the asset line in the group statement.

The non-controlling interest is also measured at fair value at acquisition. This is the full goodwill method: goodwill covers the whole subsidiary, not just the parent's share.

If the subsidiary is bought part-way through the year, its net assets at acquisition must be found at that date. Assume profit is earned evenly, so reserves at acquisition are the opening reserves plus the profit for the months before the purchase.`,
        ru: `Бизнес обычно стоит больше, чем его отдельные чистые активы. Разница — гудвил: репутация, бренды, обученный персонал, клиенты и поставщики, которых нет в его отчёте о финансовом положении. Покупатель платит за это, потому что купить работающий бизнес проще, чем построить с нуля. IFRS 3 «Объединения бизнесов» требует признавать гудвил на дату покупки как нематериальный внеоборотный актив в отчёте группы.

Гудвил считается по справедливой стоимости. Возмещение может быть деньгами, акциями материнской или и тем и другим. Акции оцениваются по цене акции материнской на дату покупки, а не по номиналу. Если материнская ещё не записала выпуск, она дебетует вложение на справедливую стоимость, кредитует акционерный капитал на номинал и эмиссионный доход на превышение. Этот рост показывается и в отчёте группы.

Активы и обязательства дочерней оцениваются по справедливой стоимости на дату покупки — цене, которую получили бы при продаже актива в обычной сделке (IFRS 13). Балансовая стоимость, особенно земли и зданий, часто устарела. Справедливая стоимость важна, так как отчёт группы должен показывать, во сколько активы обошлись группе, а иначе гудвил был бы бессмысленным. Дооценка добавляется в обе колонки W2 и в строку актива в отчёте группы.

Неконтролирующая доля тоже оценивается по справедливой стоимости на дату покупки. Это метод полного гудвила: гудвил охватывает всю дочернюю, а не только долю материнской.

Если дочерняя куплена в середине года, её чистые активы нужно найти на дату покупки. Считается, что прибыль зарабатывается равномерно, поэтому резервы на дату покупки — это резервы на начало плюс прибыль за месяцы до покупки.`,
        uz: `Biznes odatda alohida sof aktivlaridan qimmatroq turadi. Farq gudvil: obro', brendlar, o'qitilgan xodimlar, mijoz va yetkazib beruvchilar, ular o'z moliyaviy holat hisobotida ko'rinmaydi. Xaridor buning uchun to'laydi, chunki ishlab turgan biznesni sotib olish noldan qurishdan osonroq. IFRS 3 «Biznes birlashuvi» gudvilni xarid sanasida guruh hisobotida nomoddiy uzoq muddatli aktiv sifatida tan olishni talab qiladi.

Gudvil adolatli qiymatlar bilan hisoblanadi. To'lov pul, bosh kompaniya aksiyalari yoki ikkalasi bo'lishi mumkin. Aksiyalar nominalda emas, xarid sanasidagi bosh aksiya narxida baholanadi. Bosh kompaniya chiqarishni hali yozmagan bo'lsa, sarmoyani adolatli qiymatda debetlaydi, aksiya kapitalini nominalda va emissiya daromadini ortiqchasida kreditlaydi. Bu o'sish guruh hisobotida ham ko'rinadi.

Sho'baning aktiv va majburiyatlari xarid paytidagi adolatli qiymatda, ya'ni oddiy bitimda aktivni sotishda olinadigan narxda o'lchanadi (IFRS 13). Balans qiymatlari, ayniqsa yer va binolarniki, ko'pincha eskirgan. Adolatli qiymat muhim, chunki guruh hisoboti aktivlar guruhga qanchaga tushganini ko'rsatishi kerak, aks holda gudvil ma'nosiz bo'lardi. Oshirish W2 ning ikkala ustuniga va guruh hisobotidagi aktiv qatoriga qo'shiladi.

Nazoratsiz ulush ham xarid paytidagi adolatli qiymatda o'lchanadi. Bu to'liq gudvil usuli: gudvil faqat bosh ulushini emas, butun sho'bani qamraydi.

Sho'ba yil o'rtasida sotib olinsa, uning sof aktivlarini xarid sanasida topish kerak. Foyda bir tekis topiladi deb hisoblanadi, shuning uchun xarid paytidagi rezervlar boshlang'ich rezervlar plus xariddan oldingi oylar foydasi.`,
      },
      example: {
        en: `Shop Co buys 80% of Bake Co on 1 April 20X6.
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
        ru: `Shop Co покупает 80% Bake Co 1 апреля 20X6.
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
        uz: `Shop Co 20X6 yil 1 aprelda Bake Co ning 80% ini sotib oladi.
# Shop Co nima to'ladi
  Pul $2,400 + har biri $4 turadigan 200 ta o'z $1 lik aksiyasi ($800) = $3,200
  Shop Co yozadi: Dt Investitsiya $800, Kt Ustav kapitali $200, Kt Emissiya daromadi $600
# Bake Co ning 1 apreldagi rezervlari
  1 yanvarda $1,800 + 3/12 x foyda $800 = $1,800 + $200 = $2,000
# Bake Co ning 1 apreldagi adolatli qiymatdagi sof aktivlari
  Ustav kapitali $1,000 + rezervlar $2,000 + yer oshishi $500 = $3,500
# Gudvil
  To'langan $3,200 + NCI adolatli qiymati $750 - sof aktivlar $3,500 = $450
= Gudvil $450: guruh hisobotidagi nomoddiy aktiv.`,
      },
      simple: {
        en: `Goodwill is the extra paid for a business above the value of its separate assets: its name, customers and trained staff.

Goodwill = what the parent paid + fair value of the NCI - fair value of the subsidiary's net assets at the date of purchase.

- If the parent pays in its own shares, value them at their MARKET price, not nominal value.
- Value the subsidiary's assets at FAIR value: add any uplift (for example on land).
- If bought part-way through the year, find the reserves on the purchase date: opening reserves + profit for the months before it.`,
        ru: `Гудвил — переплата за бизнес сверх стоимости его отдельных активов: имя, покупатели, обученный персонал.

Гудвил = что заплатила материнская + справедливая стоимость NCI - справедливая стоимость чистых активов дочерней на дату покупки.

- Если материнская платит своими акциями, оценивайте их по РЫНОЧНОЙ цене, а не по номиналу.
- Активы дочерней — по СПРАВЕДЛИВОЙ стоимости: прибавьте дооценку (например, земли).
- Если покупка в середине года, найдите резервы на дату покупки: резервы на начало + прибыль за месяцы до неё.`,
        uz: `Gudvil — biznes uchun alohida aktivlari qiymatidan ortiq to'langan summa: nomi, mijozlari va o'qitilgan xodimlari.

Gudvil = bosh kompaniya to'lagani + NCI adolatli qiymati - xarid sanasidagi sho'ba sof aktivlarining adolatli qiymati.

- Bosh kompaniya o'z aksiyalari bilan to'lasa, ularni nominal emas, BOZOR narxida baholang.
- Sho'ba aktivlarini ADOLATLI qiymatda baholang: har qanday oshishni qo'shing (masalan, yer).
- Yil o'rtasida sotib olinsa, xarid sanasidagi rezervlarni toping: boshlang'ich rezervlar + undan oldingi oylar foydasi.`,
      },
    },
    {
      key: {
        en: `- Pre-acquisition profits belong to the old owners. They are left out of group reserves.
- Post-acquisition change = subsidiary net assets at the reporting date - net assets at acquisition.
- NCI = fair value of NCI at acquisition + NCI % × post-acquisition change.
- Group retained earnings = parent's retained earnings + parent % × post-acquisition change.
- A later rise in the subsidiary's revaluation surplus goes to group revaluation surplus, not retained earnings.`,
        ru: `- Прибыль до покупки принадлежит прежним владельцам. В резервы группы она не входит.
- Изменение после покупки = чистые активы дочерней на отчётную дату - на дату покупки.
- NCI = справедливая стоимость NCI при покупке + доля NCI × изменение после покупки.
- Нераспределённая прибыль группы = прибыль материнской + доля материнской × изменение после покупки.
- Рост резерва переоценки дочерней после покупки идёт в резерв переоценки группы.`,
        uz: `- Xariddan oldingi foyda eski egalarniki. U guruh rezervlariga kirmaydi.
- Xariddan keyingi o'zgarish = sho'ba hisobot sanasidagi sof aktivlari - xarid paytidagi.
- NCI = xarid paytidagi NCI adolatli qiymati + NCI ulushi × xariddan keyingi o'zgarish.
- Guruhning taqsimlanmagan foydasi = bosh foydasi + bosh ulushi × xariddan keyingi o'zgarish.
- Sho'ba qayta baholash rezervining keyingi o'sishi guruh qayta baholash rezerviga boradi.`,
      },
      exam: {
        en: `- Use the parent's percentage for group reserves and the NCI percentage for the NCI. Don't swap them.
- If the subsidiary had retained losses at acquisition, the post-acquisition change runs from that loss to the closing figure.
- A shareholding bought on the last day of the year gives the group no share of that year's profits.
- The same method applies to other components of equity: the parent's own figure plus its share of the post-acquisition change.`,
        ru: `- Для резервов группы берите долю материнской, для NCI — долю NCI. Не перепутайте.
- Если у дочерней при покупке был накопленный убыток, изменение после покупки считается от этого убытка до суммы на конец.
- Доля, купленная в последний день года, не даёт группе доли прибыли этого года.
- Тот же метод для прочих компонентов капитала: сумма материнской плюс её доля в изменении после покупки.`,
        uz: `- Guruh rezervlari uchun bosh ulushini, NCI uchun NCI ulushini oling. Almashtirmang.
- Sho'bada xarid paytida to'plangan zarar bo'lsa, xariddan keyingi o'zgarish o'sha zarardan yakuniy summagacha.
- Yilning oxirgi kunida olingan ulush guruhga o'sha yil foydasidan ulush bermaydi.
- Boshqa kapital tarkibiy qismlari uchun ham shu usul: bosh summasi plus xariddan keyingi o'zgarishdagi ulushi.`,
      },
      heading: {
        en: 'Non-controlling interest and group reserves',
        ru: 'Неконтролирующая доля и резервы группы',
        uz: 'Nazoratsiz ulush va guruh rezervlari',
      },
      body: {
        en: `Profits the subsidiary had already made when control was gained are pre-acquisition profits. They were earned while the old owners held the shares, so the parent cannot claim them, and they are excluded from group retained earnings. They are effectively bought, and form part of the net assets used in the goodwill working.

Profits earned after the acquisition date are post-acquisition. They were earned under the parent's control, so the parent's percentage of them is added to group retained earnings. The NCI's percentage goes to the NCI.

The non-controlling interest at the reporting date is therefore its fair value at acquisition plus its share of the subsidiary's post-acquisition change in net assets. All the subsidiary's assets and liabilities are added in full above, and this single figure in equity shows how much of them belongs to outside shareholders.

A revaluation surplus in the subsidiary works the same way. The balance at acquisition is pre-acquisition. Any increase afterwards is shared: the group's part is shown as group revaluation surplus, a separate component of equity, and the NCI's part goes to the NCI.`,
        ru: `Прибыль, которую дочерняя уже заработала на момент получения контроля, — прибыль до покупки. Она заработана, пока акциями владели прежние владельцы, поэтому материнская не может на неё претендовать, и она исключается из нераспределённой прибыли группы. По сути она куплена и входит в чистые активы в расчёте гудвила.

Прибыль, заработанная после даты покупки, — прибыль после покупки. Она получена под контролем материнской, поэтому доля материнской прибавляется к нераспределённой прибыли группы. Доля NCI идёт в NCI.

Поэтому неконтролирующая доля на отчётную дату — это её справедливая стоимость при покупке плюс её доля в изменении чистых активов дочерней после покупки. Все активы и обязательства дочерней добавлены полностью, а эта одна сумма в капитале показывает, какая их часть принадлежит внешним акционерам.

Резерв переоценки дочерней работает так же. Остаток на дату покупки — до покупки. Последующий рост делится: часть группы показывается как резерв переоценки группы, отдельный компонент капитала, а часть NCI идёт в NCI.`,
        uz: `Nazorat olingan paytda sho'ba allaqachon topgan foyda xariddan oldingi foyda. U aksiyalar eski egalarda bo'lganda topilgan, shuning uchun bosh kompaniya unga da'vo qila olmaydi va u guruhning taqsimlanmagan foydasidan chiqariladi. Aslida u sotib olingan va gudvil hisobidagi sof aktivlarga kiradi.

Xarid sanasidan keyin topilgan foyda xariddan keyingi foyda. U bosh kompaniya nazoratida topilgan, shuning uchun uning bosh ulushi guruhning taqsimlanmagan foydasiga qo'shiladi. NCI ulushi NCI ga boradi.

Demak, hisobot sanasidagi nazoratsiz ulush xarid paytidagi adolatli qiymati plus sho'ba sof aktivlarining xariddan keyingi o'zgarishidagi ulushi. Sho'baning barcha aktiv va majburiyatlari yuqorida to'liq qo'shilgan, kapitaldagi bu bitta summa ularning qanchasi tashqi aksiyadorlarniki ekanini ko'rsatadi.

Sho'baning qayta baholash rezervi ham shunday ishlaydi. Xarid paytidagi qoldiq xariddan oldingi. Keyingi o'sish bo'linadi: guruh qismi alohida kapital tarkibiy qismi — guruh qayta baholash rezervi sifatida ko'rsatiladi, NCI qismi NCI ga boradi.`,
      },
      example: {
        en: `Bake Co at 31 December 20X6.
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
        ru: `Bake Co на 31 декабря 20X6.
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
        uz: `20X6 yil 31 dekabrda Bake Co.
# W2: hozirgi sof aktivlar
  Ustav kapitali $1,000 + rezervlar $2,600 + yer oshishi $500 = $4,100
  Minus Shop Co ga sotilgan nonning sotilmagan foydasi (keyingi bo'lim): - $100 = $4,000
# Xariddan keyingi o'zgarish
  Hozir $4,000 - xarid paytida $3,500 = $500
# W4: NCI
  $750 + 20% x $500 = $850
# W5: guruh taqsimlanmagan foydasi
  Shop Co ning o'zi $6,000 + 80% x $500 = $6,400
= Xarid paytidagi $2,000 rezerv guruh taqsimlanmagan foydasiga kirmaydi.`,
      },
      simple: {
        en: `Profits the subsidiary made BEFORE the parent bought it belong to the old owners. They are not group profits.

Profits made AFTER the purchase are shared:
- The parent's % goes into group retained earnings.
- The NCI's % goes to the NCI.

Post-acquisition change = subsidiary's net assets now - net assets at purchase.
NCI = NCI fair value at purchase + NCI % x post-acquisition change.
Group retained earnings = parent's own retained earnings + parent % x post-acquisition change.`,
        ru: `Прибыль, которую дочерняя получила ДО покупки материнской, принадлежит старым владельцам. Это не прибыль группы.

Прибыль ПОСЛЕ покупки делится:
- Доля материнской идёт в нераспределённую прибыль группы.
- Доля NCI идёт в NCI.

Изменение после покупки = чистые активы дочерней сейчас - чистые активы на дату покупки.
NCI = справедливая стоимость NCI при покупке + % NCI x изменение после покупки.
Нераспределённая прибыль группы = собственная прибыль материнской + % материнской x изменение после покупки.`,
        uz: `Sho'ba kompaniya bosh kompaniya sotib olishidan OLDIN topgan foyda eski egalarga tegishli. Bu guruh foydasi emas.

Xariddan KEYINGI foyda bo'linadi:
- Bosh kompaniya ulushi guruh taqsimlanmagan foydasiga boradi.
- NCI ulushi NCI ga boradi.

Xariddan keyingi o'zgarish = sho'baning hozirgi sof aktivlari - xarid paytidagi sof aktivlari.
NCI = xarid paytidagi NCI adolatli qiymati + NCI % x xariddan keyingi o'zgarish.
Guruh taqsimlanmagan foydasi = bosh kompaniyaning o'z foydasi + bosh kompaniya % x xariddan keyingi o'zgarish.`,
      },
    },
    {
      key: {
        en: `- Cancel intra-group receivables and payables against each other.
- Unrealised profit is profit on goods sold within the group and still held in inventory at the year end.
- Mark-up is on cost: profit = price × mark-up / (100 + mark-up). Margin is on price: profit = price × margin.
- Reduce group inventory by the unrealised profit (PURP) in every case.
- Parent sells: deduct PURP in full from group retained earnings (W5).
- Subsidiary sells: deduct PURP from its reporting-date net assets (W2), so the NCI shares it.`,
        ru: `- Внутригрупповые дебиторы и кредиторы взаимно исключаются.
- Нереализованная прибыль — прибыль на товарах, проданных внутри группы и остающихся в запасах на конец года.
- Наценка от себестоимости: прибыль = цена × наценка / (100 + наценка). Маржа от цены: прибыль = цена × маржа.
- Во всех случаях запасы группы уменьшаются на нереализованную прибыль (PURP).
- Продаёт материнская: PURP полностью вычитается из прибыли группы (W5).
- Продаёт дочерняя: PURP вычитается из её чистых активов на отчётную дату (W2), и NCI несёт свою часть.`,
        uz: `- Guruh ichidagi debitor va kreditorlar o'zaro chiqarib tashlanadi.
- Amalga oshmagan foyda — guruh ichida sotilib, yil oxirida zaxirada qolgan tovardagi foyda.
- Ustama tannarxdan: foyda = narx × ustama / (100 + ustama). Marja narxdan: foyda = narx × marja.
- Har holda guruh zaxirasi amalga oshmagan foydaga (PURP) kamaytiriladi.
- Bosh sotsa: PURP guruh foydasidan (W5) to'liq ayiriladi.
- Sho'ba sotsa: PURP uning hisobot sanasidagi sof aktivlaridan (W2) ayiriladi, NCI ham ulush oladi.`,
      },
      exam: {
        en: `- Work out the unrealised profit on the goods still held only. Goods already sold outside the group are realised.
- If 40% has been sold on, 60% is still in inventory.
- Cancel the full intra-group balance from both receivables and payables.
- In objective test questions, PURP on a subsidiary's sale can be split directly: parent % to W5, NCI % to W4.`,
        ru: `- Считайте нереализованную прибыль только на остающийся товар. Товар, уже проданный вне группы, реализован.
- Если перепродано 40%, в запасах остаётся 60%.
- Внутригрупповой остаток исключается полностью и из дебиторов, и из кредиторов.
- В тестовых вопросах PURP при продаже дочерней можно сразу разделить: доля материнской в W5, доля NCI в W4.`,
        uz: `- Amalga oshmagan foydani faqat qolgan tovarga hisoblang. Guruhdan tashqariga sotilgan tovar amalga oshgan.
- 40% qayta sotilgan bo'lsa, zaxirada 60% qoladi.
- Guruh ichidagi qoldiqni ham debitor, ham kreditordan to'liq chiqaring.
- Test savollarida sho'ba sotuvidagi PURP ni darhol bo'lish mumkin: bosh ulushi W5 ga, NCI ulushi W4 ga.`,
      },
      heading: {
        en: 'Intra-group balances and unrealised profit',
        ru: 'Внутригрупповые остатки и нереализованная прибыль',
        uz: 'Guruh ichidagi qoldiqlar va amalga oshmagan foyda',
      },
      body: {
        en: `Group companies often trade with each other on credit. One then has a receivable and the other a payable for the same amount. The group cannot owe money to itself, so on consolidation the two balances are cancelled against each other. Otherwise receivables and payables would both be overstated.

A group also cannot make a profit by selling to itself, any more than your right hand can profit by selling to your left. When one group company sells goods to another at a profit, the seller records that profit in its own accounts. If the buyer still holds the goods at the year end, the profit has not been earned from anyone outside the group. It is unrealised and must be removed, and the inventory brought back to its original cost to the group.

First find the profit in the goods still held, using the mark-up or margin given. Then credit group inventory with that amount. The debit depends on who sold the goods. If the parent sold them, the profit is in the parent's own retained earnings, so it is deducted in full in W5. If the subsidiary sold them, the profit is in the subsidiary's retained earnings, so it is deducted from net assets at the reporting date in W2. It then flows through to both W4 and W5 and is shared between the NCI and the group.`,
        ru: `Компании группы часто торгуют друг с другом в кредит. Тогда у одной есть дебитор, а у другой кредитор на ту же сумму. Группа не может быть должна сама себе, поэтому при консолидации эти остатки взаимно исключаются. Иначе и дебиторы, и кредиторы были бы завышены.

Группа также не может получить прибыль, продавая самой себе, так же как правая рука не заработает, продав что-то левой. Когда одна компания группы продаёт товар другой с прибылью, продавец отражает прибыль в своём учёте. Если покупатель ещё держит товар на конец года, прибыль не получена ни от кого вне группы. Она нереализована и должна быть исключена, а запасы возвращены к первоначальной стоимости для группы.

Сначала найдите прибыль в остающемся товаре по данной наценке или марже. Затем кредитуйте запасы группы на эту сумму. Дебет зависит от продавца. Если продавала материнская, прибыль в её нераспределённой прибыли, и она полностью вычитается в W5. Если продавала дочерняя, прибыль в её нераспределённой прибыли, и она вычитается из чистых активов на отчётную дату в W2. Затем она переходит в W4 и W5 и делится между NCI и группой.`,
        uz: `Guruh kompaniyalari ko'pincha bir-biri bilan nasiyaga savdo qiladi. Unda birida debitor, boshqasida o'sha summaga kreditor bo'ladi. Guruh o'ziga qarzdor bo'la olmaydi, shuning uchun konsolidatsiyada bu qoldiqlar o'zaro chiqarib tashlanadi. Aks holda debitorlar ham, kreditorlar ham oshirib ko'rsatilardi.

Guruh o'ziga sotib foyda ham ko'ra olmaydi, xuddi o'ng qo'l chap qo'lga sotib foyda ko'ra olmagani kabi. Bir guruh kompaniyasi boshqasiga tovarni foyda bilan sotganda, sotuvchi foydani o'z hisobida yozadi. Xaridor yil oxirida tovarni hali ushlab tursa, foyda guruhdan tashqaridagi hech kimdan olinmagan. U amalga oshmagan va olib tashlanishi, zaxira esa guruh uchun asl tannarxiga qaytarilishi kerak.

Avval berilgan ustama yoki marja bilan qolgan tovardagi foydani toping. So'ng guruh zaxirasini shu summaga kreditlang. Debet kim sotganiga bog'liq. Bosh kompaniya sotgan bo'lsa, foyda uning taqsimlanmagan foydasida, u W5 da to'liq ayiriladi. Sho'ba sotgan bo'lsa, foyda sho'ba taqsimlanmagan foydasida, u W2 da hisobot sanasidagi sof aktivlardan ayiriladi. So'ng u W4 va W5 ga o'tadi va NCI va guruh o'rtasida bo'linadi.`,
      },
      example: {
        en: `Bake Co sells bread to Shop Co for $600, at a 50% mark-up on cost.
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
        ru: `Bake Co продаёт хлеб Shop Co за $600 с наценкой 50% на себестоимость.
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
        uz: `Bake Co Shop Co ga nonni tannarxga 50% ustama bilan $600 ga sotadi.
# Sotuvdagi foyda
  $600 x 50/150 = $200
# Amalga oshmagan qism
  Yarmi yil oxirida sotilmagan: $200 x 1/2 = $100
# Qayerga boradi
  Guruh zaxirasi: - $100
  Sotuvchi Bake Co (sho'ba): W2 da uning sof aktivlaridan $100 ayiramiz, NCI 20% ni ko'taradi
# Guruh ichidagi qarz
  Shop Co Bake Co ga $150 qarz: guruh debitorlaridan HAM, kreditorlaridan HAM $150 ayiramiz
= PURP $100; guruh ichidagi $150 qoldiq chiqarildi.`,
      },
      simple: {
        en: `A group cannot owe money to itself or make a profit selling to itself.

- Money owed between group companies: cancel it from BOTH receivables and payables.
- Goods sold inside the group and still unsold at the year end: the profit in them is unrealised (PURP). Take it off group inventory.

Who bears the PURP? If the PARENT sold the goods, take it all off group retained earnings (W5). If the SUBSIDIARY sold them, take it off the subsidiary's net assets now (W2), so the NCI shares it.

Mark-up is on cost: profit = price x mark-up / (100 + mark-up). Margin is on price: profit = price x margin.`,
        ru: `Группа не может быть должна сама себе или получать прибыль от продаж самой себе.

- Долги между компаниями группы: вычеркните их И из дебиторов, И из кредиторов.
- Товар, проданный внутри группы и не проданный на конец года: прибыль в нём нереализована (PURP). Вычтите её из запасов группы.

Кто несёт PURP? Если продавала МАТЕРИНСКАЯ, вычтите всё из нераспределённой прибыли группы (W5). Если продавала ДОЧЕРНЯЯ, вычтите из её текущих чистых активов (W2), чтобы NCI разделила её.

Наценка — от себестоимости: прибыль = цена x наценка / (100 + наценка). Маржа — от цены: прибыль = цена x маржа.`,
        uz: `Guruh o'ziga qarzdor bo'la olmaydi va o'ziga sotib foyda ola olmaydi.

- Guruh kompaniyalari orasidagi qarz: uni debitorlardan HAM, kreditorlardan HAM chiqaring.
- Guruh ichida sotilgan va yil oxirida sotilmay qolgan tovar: undagi foyda amalga oshmagan (PURP). Uni guruh zaxirasidan ayiring.

PURP ni kim ko'taradi? Agar BOSH kompaniya sotgan bo'lsa, hammasini guruh taqsimlanmagan foydasidan (W5) ayiring. Agar SHO'BA sotgan bo'lsa, uning hozirgi sof aktivlaridan (W2) ayiring, shunda NCI ham baham ko'radi.

Ustama tannarxdan: foyda = narx x ustama / (100 + ustama). Marja narxdan: foyda = narx x marja.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Parent', ru: 'Материнская компания', uz: 'Bosh kompaniya' },
      definition: {
        en: 'An entity that controls one or more other entities.',
        ru: 'Компания, контролирующая одну или несколько других компаний.',
        uz: 'Bir yoki bir nechta boshqa korxonani nazorat qiluvchi korxona.',
      },
      example: {
        en: 'Shop Co owns 80% of Bake Co, so Shop Co is the parent.',
        ru: 'Shop Co владеет 80% Bake Co, значит Shop Co — материнская.',
        uz: 'Shop Co Bake Co ning 80% iga ega, demak Shop Co bosh kompaniya.',
      },
    },
    {
      term: { en: 'Subsidiary', ru: 'Дочерняя компания', uz: 'Sho\'ba kompaniya' },
      definition: {
        en: 'An entity that is controlled by another entity.',
        ru: 'Компания, контролируемая другой компанией.',
        uz: 'Boshqa korxona tomonidan nazorat qilinadigan korxona.',
      },
      example: {
        en: 'Bake Co, 80% owned and controlled by Shop Co.',
        ru: 'Bake Co, на 80% принадлежит Shop Co и контролируется ею.',
        uz: 'Bake Co, 80% i Shop Co ga tegishli va u nazorat qiladi.',
      },
    },
    {
      term: { en: 'Control', ru: 'Контроль', uz: 'Nazorat' },
      definition: {
        en: 'Power over an investee, exposure to its variable returns, and the ability to use that power to affect them.',
        ru: 'Власть над объектом, подверженность его переменному доходу и способность властью влиять на этот доход.',
        uz: 'Obyekt ustidan hokimiyat, uning o\'zgaruvchan daromadiga ta\'sirchanlik va hokimiyat bilan unga ta\'sir qilish qobiliyati.',
      },
      example: {
        en: 'Owning 80% of the votes lets Shop Co choose Bake Co\'s board and its dividends.',
        ru: 'Владея 80% голосов, Shop Co выбирает совет директоров Bake Co и её дивиденды.',
        uz: 'Ovozlarning 80% iga ega bo\'lib, Shop Co Bake Co kengashini va dividendlarini tanlaydi.',
      },
    },
    {
      term: { en: 'Non-controlling interest (NCI)', ru: 'Неконтролирующая доля (NCI)', uz: 'Nazoratsiz ulush (NCI)' },
      definition: {
        en: 'The part of a subsidiary\'s equity not owned by the parent.',
        ru: 'Часть капитала дочерней компании, не принадлежащая материнской.',
        uz: 'Sho\'ba kapitalining bosh kompaniyaga tegishli bo\'lmagan qismi.',
      },
      example: {
        en: 'The bakery founder\'s 20%: $750 at purchase, $850 at the year end.',
        ru: '20% основателя пекарни: $750 при покупке, $850 на конец года.',
        uz: 'Novvoyxona asoschisining 20% i: xaridda $750, yil oxirida $850.',
      },
    },
    {
      term: {
        en: 'Consolidated financial statements',
        ru: 'Консолидированная отчётность',
        uz: 'Konsolidatsiyalangan hisobot',
      },
      definition: {
        en: 'Financial statements of a group presented as those of a single economic entity.',
        ru: 'Отчётность группы, представленная как отчётность одного экономического субъекта.',
        uz: 'Guruhning bitta iqtisodiy subyekt hisoboti sifatida taqdim etilgan hisoboti.',
      },
      example: {
        en: 'One statement of financial position for Shop Co and Bake Co together.',
        ru: 'Один отчёт о финансовом положении для Shop Co и Bake Co вместе.',
        uz: 'Shop Co va Bake Co uchun birgalikda bitta moliyaviy holat hisoboti.',
      },
    },
    {
      term: { en: 'Consideration', ru: 'Возмещение', uz: 'To\'lov (kompensatsiya)' },
      definition: {
        en: 'What the parent gives to buy the subsidiary: cash, its own shares at fair value, or both.',
        ru: 'То, что материнская отдаёт за дочернюю: деньги, свои акции по справедливой стоимости или и то и другое.',
        uz: 'Bosh kompaniya sho\'bani sotib olish uchun beradigan narsa: pul, adolatli qiymatdagi o\'z aksiyalari yoki ikkalasi.',
      },
      example: {
        en: 'Cash $2,400 + 200 shares worth $4 each = $3,200.',
        ru: 'Деньги $2,400 + 200 акций по $4 = $3,200.',
        uz: 'Pul $2,400 + har biri $4 lik 200 aksiya = $3,200.',
      },
    },
    {
      term: { en: 'Fair value', ru: 'Справедливая стоимость', uz: 'Adolatli qiymat' },
      definition: {
        en: 'The price that would be received to sell an asset, or paid to transfer a liability, in an orderly transaction.',
        ru: 'Цена, которую получили бы при продаже актива или заплатили бы при передаче обязательства в обычной сделке.',
        uz: 'Oddiy bitimda aktivni sotishda olinadigan yoki majburiyatni o\'tkazishda to\'lanadigan narx.',
      },
      example: {
        en: 'Land in the books at $2,000 but worth $2,500 today: fair value $2,500.',
        ru: 'Земля по книгам $2,000, но сегодня стоит $2,500: справедливая стоимость $2,500.',
        uz: 'Kitobda $2,000 lik yer bugun $2,500 turadi: adolatli qiymat $2,500.',
      },
    },
    {
      term: { en: 'Goodwill', ru: 'Гудвил', uz: 'Gudvil' },
      definition: {
        en: 'Consideration plus fair value of NCI, less the fair value of net assets acquired.',
        ru: 'Возмещение плюс справедливая стоимость NCI минус справедливая стоимость приобретённых чистых активов.',
        uz: 'To\'lov plus NCI adolatli qiymati minus olingan sof aktivlar adolatli qiymati.',
      },
      example: {
        en: '$3,200 paid + $750 NCI - $3,500 net assets = $450.',
        ru: 'Заплачено $3,200 + NCI $750 - чистые активы $3,500 = $450.',
        uz: 'To\'langan $3,200 + NCI $750 - sof aktivlar $3,500 = $450.',
      },
    },
    {
      term: { en: 'Pre-acquisition profits', ru: 'Прибыль до покупки', uz: 'Xariddan oldingi foyda' },
      definition: {
        en: 'A subsidiary\'s reserves at the date control was gained. They are not part of group reserves.',
        ru: 'Резервы дочерней на дату получения контроля. Они не входят в резервы группы.',
        uz: 'Nazorat olingan sanadagi sho\'ba rezervlari. Ular guruh rezervlariga kirmaydi.',
      },
      example: {
        en: 'Bake Co\'s $2,000 of reserves on the day Shop Co bought it.',
        ru: 'Резервы Bake Co $2,000 в день покупки Shop Co.',
        uz: 'Shop Co sotib olgan kuni Bake Co ning $2,000 rezervi.',
      },
    },
    {
      term: { en: 'Post-acquisition profits', ru: 'Прибыль после покупки', uz: 'Xariddan keyingi foyda' },
      definition: {
        en: 'Profits a subsidiary earns after the parent gains control; they are shared between the group and the NCI.',
        ru: 'Прибыль дочерней после получения контроля материнской; делится между группой и NCI.',
        uz: 'Bosh kompaniya nazoratni olgandan keyin sho\'ba topgan foyda; guruh va NCI o\'rtasida bo\'linadi.',
      },
      example: {
        en: 'Net assets rose from $3,500 to $4,000: $500, of which the group takes 80% = $400.',
        ru: 'Чистые активы выросли с $3,500 до $4,000: $500, из них группе 80% = $400.',
        uz: 'Sof aktivlar $3,500 dan $4,000 ga oshdi: $500, shundan guruhga 80% = $400.',
      },
    },
    {
      term: { en: 'Unrealised profit (PURP)', ru: 'Нереализованная прибыль (PURP)', uz: 'Amalga oshmagan foyda (PURP)' },
      definition: {
        en: 'Profit on intra-group sales of goods still held in the group\'s inventory at the year end.',
        ru: 'Прибыль от внутригрупповых продаж товара, который остаётся в запасах группы на конец года.',
        uz: 'Yil oxirida guruh zaxirasida qolgan tovarning guruh ichidagi sotuvidan foyda.',
      },
      example: {
        en: '$100 profit on bread sold by Bake Co to Shop Co and still on Shop Co\'s shelves.',
        ru: 'Прибыль $100 по хлебу, проданному Bake Co в Shop Co и ещё лежащему на полках Shop Co.',
        uz: 'Bake Co Shop Co ga sotgan va hali Shop Co javonida turgan nondagi $100 foyda.',
      },
    },
    {
      term: { en: 'Trade investment', ru: 'Простое вложение', uz: 'Oddiy sarmoya' },
      definition: {
        en: 'A shareholding giving neither control nor significant influence, held as a financial asset.',
        ru: 'Доля, не дающая ни контроля, ни значительного влияния, учитываемая как финансовый актив.',
        uz: 'Na nazorat, na sezilarli ta\'sir beruvchi, moliyaviy aktiv sifatida hisoblanadigan ulush.',
      },
      example: {
        en: 'Owning 5% of a supplier\'s shares: no control and no significant influence.',
        ru: 'Владение 5% акций поставщика: ни контроля, ни значительного влияния.',
        uz: 'Yetkazib beruvchi aksiyalarining 5% iga egalik: na nazorat, na sezilarli ta\'sir.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter19;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter19.id] = chapter19;
