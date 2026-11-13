'use strict';

const chapter03 = {
  id: 'chapter-03',
  titles: { en: 'Double-entry bookkeeping', ru: 'Двойная запись', uz: 'Ikki yoqlama yozuv' },
  objectives: [
    {
      en: 'Explain the main business documents and what each one is for',
      ru: 'Объяснять основные деловые документы и назначение каждого',
      uz: 'Asosiy biznes hujjatlari va har birining vazifasini tushuntirish',
    },
    {
      en: 'Apply duality and the accounting equation',
      ru: 'Применять двойственность и бухгалтерское уравнение',
      uz: 'Ikki tomonlamalik va hisob tenglamasini qo\'llash',
    },
    {
      en: 'Describe the parts of an accounting system, including cloud accounting',
      ru: 'Описывать части системы учёта, включая облачный учёт',
      uz: 'Hisob tizimi qismlarini, jumladan bulutli hisobni tavsiflash',
    },
    {
      en: 'Record transactions in ledger accounts with debits and credits',
      ru: 'Записывать операции на счетах дебетом и кредитом',
      uz: 'Operatsiyalarni hisoblarda debet va kredit bilan yozish',
    },
    {
      en: 'Use the journal, including to correct errors',
      ru: 'Использовать журнал, в том числе для исправления ошибок',
      uz: 'Jurnaldan, jumladan xatolarni tuzatish uchun foydalanish',
    },
    {
      en: 'Balance and close ledger accounts',
      ru: 'Выводить остатки и закрывать счета',
      uz: 'Hisoblar qoldig\'ini chiqarish va yopish',
    },
  ],
  sections: [
    {
      key: {
        en: `- Purchase order: sent to a supplier to ask for goods on stated terms.
- Delivery note: comes from the supplier with the goods and lists what was sent.
- Goods received note: written by the buyer to record what actually arrived.
- Invoice: the seller's request for payment. The buyer calls it a purchase invoice.
- Credit note: the seller cancels all or part of an invoice.
- Remittance advice: the buyer tells the seller which items are being paid.`,
        ru: `- Заказ на покупку: отправляется поставщику, чтобы запросить товар на указанных условиях.
- Накладная: приходит от поставщика с товаром и перечисляет отправленное.
- Акт приёмки: покупатель фиксирует, что фактически прибыло.
- Счёт-фактура: запрос продавца на оплату. Покупатель называет его счётом на покупку.
- Кредит-нота: продавец отменяет весь счёт или его часть.
- Извещение об оплате: покупатель сообщает продавцу, какие позиции оплачиваются.`,
        uz: `- Xarid buyurtmasi: yetkazib beruvchiga belgilangan shartlarda tovar so'rab yuboriladi.
- Yetkazib berish xati: tovar bilan birga keladi va nima yuborilganini ko'rsatadi.
- Qabul qilish xati: xaridor aslida nima kelganini yozib qo'yadi.
- Hisob-faktura: sotuvchining to'lov so'rovi. Xaridor uni xarid hisob-fakturasi deydi.
- Kredit-nota: sotuvchi hisob-fakturani butunlay yoki qisman bekor qiladi.
- To'lov xabarnomasi: xaridor sotuvchiga qaysi summalar to'lanayotganini aytadi.`,
      },
      exam: {
        en: `- Usual order when buying: requisition, quotation, purchase order, delivery note, goods received note, invoice, statement, remittance advice.
- The invoice follows the goods received note. A supplier statement comes later and sums up the month.
- An advice note says goods are on the way, so it arrives before the delivery note.
- The delivery note is not an internal document, because it comes from the supplier. The supplier list, purchase order and goods received note are kept inside the business.
- A purchase invoice identifies the goods, shows what is owed to the supplier and supports the sales tax claim. It does not show what customers owe.
- An invoice shows more than the amount due: goods, date, net amount, sales tax and gross amount.
- The main petty cash record is the petty cash voucher. A till receipt is attached to it as evidence.
- Sending faulty goods back to a supplier: the buyer sends a DEBIT NOTE with them. The supplier then answers with a credit note.`,
        ru: `- Обычный порядок при покупке: заявка, коммерческое предложение, заказ, накладная, акт приёмки, счёт-фактура, выписка, извещение об оплате.
- Счёт-фактура идёт после акта приёмки. Выписка поставщика приходит позже и подводит итог месяца.
- Уведомление об отгрузке сообщает, что товар в пути, поэтому приходит раньше накладной.
- Накладная — не внутренний документ, так как она приходит от поставщика. Список поставщиков, заказ и акт приёмки хранятся внутри бизнеса.
- Счёт на покупку называет товар, показывает долг поставщику и подтверждает возмещение налога с продаж. Он не показывает долги покупателей.
- Счёт-фактура содержит не только сумму к оплате: товар, дату, сумму без налога, налог и сумму с налогом.
- Главный документ по мелкой кассе — кассовый ваучер. Чек прикладывается к нему как подтверждение.
- При возврате бракованного товара поставщику покупатель отправляет вместе с ним ДЕБЕТОВОЕ АВИЗО (debit note). Поставщик в ответ выписывает кредит-ноту.`,
        uz: `- Xarid qilishdagi odatiy tartib: so'rovnoma, narx taklifi, xarid buyurtmasi, yetkazib berish xati, qabul qilish xati, hisob-faktura, ko'chirma, to'lov xabarnomasi.
- Hisob-faktura qabul qilish xatidan keyin keladi. Yetkazib beruvchi ko'chirmasi keyinroq keladi va oyni jamlaydi.
- Xabar xati tovar yo'lda ekanini aytadi, shuning uchun yetkazib berish xatidan oldin keladi.
- Yetkazib berish xati ichki hujjat emas, chunki u yetkazib beruvchidan keladi. Yetkazib beruvchilar ro'yxati, xarid buyurtmasi va qabul qilish xati biznes ichida saqlanadi.
- Xarid hisob-fakturasi tovarni ko'rsatadi, yetkazib beruvchiga qarzni bildiradi va sotuv solig'ini qaytarishga asos bo'ladi. U mijozlar qarzini ko'rsatmaydi.
- Hisob-fakturada faqat summa emas: tovar, sana, soliqsiz summa, soliq va soliqli summa bor.
- Kichik kassaning asosiy hujjati kassa vaucheri. Chek unga dalil sifatida qo'shiladi.
- Nuqsonli tovarni yetkazib beruvchiga qaytarishda xaridor u bilan birga DEBET XABARNOMASINI (debit note) yuboradi. Yetkazib beruvchi javoban kredit-nota beradi.`,
      },
      heading: { en: 'Business documents', ru: 'Деловые документы', uz: 'Biznes hujjatlari' },
      body: {
        en: `Most transactions create a source document showing that the transaction happened, when it happened and how much it was for. The accountant works from these documents, so it helps to know who writes each one and who receives it.

When a business buys goods, an employee first fills in a purchase requisition, which a responsible person approves. A quotation may be used to compare prices from suppliers. A purchase order then goes to the chosen supplier. The goods arrive with a delivery note, also called a despatch note, and the buyer writes a goods received note as proof of what arrived. The buyer checks these against each other and against the supplier's invoice.

When a business sells, a customer's sales order leads to a despatch note and a sales invoice. The invoice is the request for payment and is normally numbered in sequence.

Several documents deal with what happens next. A credit note reduces what a customer owes, usually after goods are returned. A debit note is raised by the customer and refers to the expected credit note. A supplier statement sums up the past month's items so that the customer can check the amount claimed. A remittance advice goes with a payment or announces it, and a receipt confirms that the money arrived.`,
        ru: `Большинство операций создают первичный документ: он показывает, что операция была, когда и на какую сумму. Бухгалтер работает с этими документами, поэтому полезно знать, кто составляет каждый и кто получает.

Когда бизнес покупает товар, сотрудник сначала заполняет заявку на закупку, которую утверждает ответственное лицо. Коммерческое предложение помогает сравнить цены поставщиков. Затем выбранному поставщику уходит заказ на покупку. Товар прибывает с накладной (отгрузочным документом), а покупатель составляет акт приёмки как доказательство полученного. Покупатель сверяет эти документы друг с другом и со счётом поставщика.

Когда бизнес продаёт, заказ покупателя ведёт к отгрузочной накладной и счёту-фактуре. Счёт — это запрос на оплату, обычно с последовательным номером.

Несколько документов относятся к дальнейшим событиям. Кредит-нота уменьшает долг покупателя, обычно после возврата товара. Дебет-нота составляется покупателем и ссылается на ожидаемую кредит-ноту. Выписка поставщика подводит итог позициям за прошлый месяц, чтобы покупатель проверил заявленную сумму. Извещение об оплате идёт вместе с платежом или сообщает о нём, а квитанция подтверждает получение денег.`,
        uz: `Ko'pchilik operatsiyalar birlamchi hujjat yaratadi: u operatsiya bo'lganini, qachon va qancha summaga ekanini ko'rsatadi. Hisobchi shu hujjatlar bilan ishlaydi, shuning uchun har birini kim yozishi va kim olishini bilish foydali.

Biznes tovar sotib olganda, xodim avval xarid so'rovnomasini to'ldiradi va mas'ul shaxs tasdiqlaydi. Narx taklifi yetkazib beruvchilar narxini solishtirishga yordam beradi. So'ng tanlangan yetkazib beruvchiga xarid buyurtmasi yuboriladi. Tovar yetkazib berish xati bilan keladi, xaridor esa nima kelganini tasdiqlash uchun qabul qilish xatini yozadi. Xaridor bu hujjatlarni bir-biri va yetkazib beruvchining hisob-fakturasi bilan solishtiradi.

Biznes sotganda, mijoz buyurtmasi yuk xati va sotuv hisob-fakturasiga olib keladi. Hisob-faktura to'lov so'rovi bo'lib, odatda ketma-ket raqamlanadi.

Bir nechta hujjat keyingi voqealarga tegishli. Kredit-nota mijoz qarzini kamaytiradi, odatda tovar qaytarilganda. Debet-notani mijoz tuzadi va u kutilayotgan kredit-notaga ishora qiladi. Yetkazib beruvchi ko'chirmasi o'tgan oy summalarini jamlaydi, shunda mijoz talab qilingan summani tekshiradi. To'lov xabarnomasi to'lov bilan birga boradi yoki u haqda xabar beradi, kvitansiya esa pul kelganini tasdiqlaydi.`,
      },
      example: {
        en: `You order 50 kettles for your shop.
# 1. Purchase order (you send it)
  "Please send 50 kettles at $20 each."
# 2. Delivery note (comes with the goods)
  The supplier's note says 50 kettles were sent.
# 3. Goods received note (you write it)
  You count only 48, so you write 48.
# 4. Invoice (the supplier sends it)
  It asks for 50 × $20 = $1,000.
# 5. Credit note (the supplier sends it after you complain)
  It cancels 2 × $20 = $40, so you now owe $960.
# 6. Remittance advice (you send it with the payment)
  "This $960 pays invoice 1234."`,
        ru: `Вы заказываете 50 чайников для магазина.
# 1. Заказ на покупку (отправляете вы)
  «Пришлите 50 чайников по $20.»
# 2. Накладная (приходит с товаром)
  В накладной поставщика 50 чайников.
# 3. Акт приёмки (пишете вы)
  Вы насчитали только 48 и пишете 48.
# 4. Счёт-фактура (присылает поставщик)
  В нём 50 × $20 = $1,000.
# 5. Кредит-нота (поставщик присылает после вашей жалобы)
  Она отменяет 2 × $20 = $40, теперь вы должны $960.
# 6. Извещение об оплате (отправляете вместе с платежом)
  «Эти $960 оплачивают счёт 1234.»`,
        uz: `Do'koningiz uchun 50 ta choynak buyurtma qilasiz.
# 1. Xarid buyurtmasi (siz yuborasiz)
  «Har biri $20 dan 50 ta choynak yuboring.»
# 2. Yetkazib berish xati (tovar bilan keladi)
  Yetkazib beruvchi xatida 50 ta choynak.
# 3. Qabul qilish xati (siz yozasiz)
  Faqat 48 tani sanadingiz va 48 deb yozasiz.
# 4. Hisob-faktura (yetkazib beruvchi yuboradi)
  Unda 50 × $20 = $1,000.
# 5. Kredit-nota (shikoyatingizdan keyin yetkazib beruvchi yuboradi)
  U 2 × $20 = $40 ni bekor qiladi, endi $960 qarzsiz.
# 6. To'lov xabarnomasi (to'lov bilan yuborasiz)
  «Bu $960 1234-hisob-fakturani to'laydi.»`,
      },
      simple: {
        en: `Every time a business buys or sells, a piece of paper (or a screen) is created to prove it happened. These are source documents, and the accountant records the transactions from them.

When buying, the usual order is: you send a purchase order, the goods arrive with the supplier's delivery note, you write a goods received note saying what really arrived, then the supplier sends an invoice asking to be paid. A credit note cancels part of an invoice, and a remittance advice tells the supplier what your payment covers.`,
        ru: `Каждый раз, когда бизнес покупает или продаёт, появляется бумага (или экран), доказывающая, что это произошло. Это первичные документы, и бухгалтер записывает операции по ним.

При покупке обычный порядок такой: вы отправляете заказ на покупку, товар приходит с накладной поставщика, вы пишете акт приёмки о том, что пришло на самом деле, затем поставщик присылает счёт-фактуру с просьбой оплатить. Кредит-нота отменяет часть счёта, а извещение об оплате сообщает поставщику, что покрывает ваш платёж.`,
        uz: `Biznes har safar sotib olganda yoki sotganda, bu sodir bo'lganini isbotlovchi qog'oz (yoki ekran) paydo bo'ladi. Bular birlamchi hujjatlar, buxgalter operatsiyalarni ular asosida yozadi.

Sotib olishda odatiy tartib: siz xarid buyurtmasini yuborasiz, tovar yetkazib beruvchining yetkazib berish xati bilan keladi, siz haqiqatda nima kelganini qabul qilish xatiga yozasiz, keyin yetkazib beruvchi to'lovni so'rab hisob-faktura yuboradi. Kredit-nota hisob-fakturaning bir qismini bekor qiladi, to'lov xabarnomasi esa to'lovingiz nimani qoplashini aytadi.`,
      },
    },
    {
      key: {
        en: `- Duality: every transaction has two equal effects.
- Assets = equity + liabilities, at every moment.
- Equity is what is left for the owner: assets less liabilities, also called net assets.
- Profit increases equity. Expenses, losses and drawings reduce it.
- A new asset comes from less of another asset, a new liability or more capital.
- Records are kept for the business, not the owner. This is the business entity concept.`,
        ru: `- Двойственность: у каждой операции два равных эффекта.
- Активы = капитал + обязательства, в любой момент.
- Капитал — то, что остаётся владельцу: активы минус обязательства, или чистые активы.
- Прибыль увеличивает капитал. Расходы, убытки и изъятия уменьшают его.
- Новый актив появляется за счёт другого актива, нового обязательства или капитала.
- Учёт ведётся для бизнеса, а не для владельца. Это концепция отдельного предприятия.`,
        uz: `- Ikki tomonlamalik: har bir operatsiyaning ikkita teng ta'siri bor.
- Aktivlar = kapital + majburiyatlar, istalgan paytda.
- Kapital — egasiga qoladigan qism: aktivlar minus majburiyatlar, ya'ni sof aktivlar.
- Foyda kapitalni oshiradi. Xarajatlar, zararlar va olib qo'yishlar kamaytiradi.
- Yangi aktiv boshqa aktiv, yangi majburiyat yoki qo'shimcha kapital hisobiga keladi.
- Hisob egasi uchun emas, biznes uchun yuritiladi. Bu alohidalik tamoyili.`,
      },
      exam: {
        en: `- Assets do not simply equal liabilities, and assets are not always greater than liabilities. Capital is the third part of the equation.
- Capital is neither an asset nor a liability of the business. Treat it as its own item.
- Collecting a customer's debt leaves total assets the same: bank goes up, receivables go down.
- Paying a supplier lowers both assets and liabilities. Buying a machine on credit raises both.
- The equation shows the effect of a transaction on assets, liabilities and capital. It is not a statement of profit.
- An owner who puts a car into the business adds capital without any cash: Dr Motor vehicle, Cr Capital.
- If a sole trader takes goods from inventory for use in the business, Dr Non-current assets, Cr Cost of sales. For private use it is Dr Drawings, Cr Cost of sales.
- Net assets = capital. So: closing net assets = opening net assets + capital introduced + profit - drawings.
- Turned round to find profit: profit = closing net assets - opening net assets + drawings - capital introduced. A negative answer is a loss.
- Drawings include a "salary" the owner pays themself ($650 a month = $7,800 a year) and goods taken for private use. A sole trader has no salary expense for themself.
- Goods taken by the owner are recorded at COST, not selling price: Dr Drawings, Cr Purchases (cost of sales).
- Profit but less cash? Giving customers longer to pay does it (receivables rise). Depreciation and a loss on sale use no cash at all.`,
        ru: `- Активы не просто равны обязательствам и не всегда больше их. Капитал — третья часть уравнения.
- Капитал — не актив и не обязательство бизнеса. Считайте его отдельной статьёй.
- Получение долга от покупателя не меняет итог активов: банк растёт, дебиторы падают.
- Оплата поставщику уменьшает и активы, и обязательства. Покупка станка в кредит увеличивает и то, и другое.
- Уравнение показывает влияние операции на активы, обязательства и капитал. Это не отчёт о прибыли.
- Владелец, вносящий автомобиль в бизнес, увеличивает капитал без денег: Дт Транспорт, Кт Капитал.
- Если предприниматель берёт товар из запасов для бизнеса: Дт Внеоборотные активы, Кт Себестоимость продаж. Для личных нужд: Дт Изъятия, Кт Себестоимость продаж.
- Чистые активы = капитал. Поэтому: чистые активы на конец = чистые активы на начало + внесённый капитал + прибыль - изъятия.
- Чтобы найти прибыль, переставим: прибыль = чистые активы на конец - на начало + изъятия - внесённый капитал. Отрицательный ответ — убыток.
- Изъятия включают «зарплату», которую владелец платит себе ($650 в месяц = $7 800 в год), и товар, взятый для себя. У предпринимателя нет расхода на зарплату самому себе.
- Товар, взятый владельцем, отражают по СЕБЕСТОИМОСТИ, а не по цене продажи: Дт Изъятия, Кт Закупки (себестоимость продаж).
- Прибыль есть, а денег меньше? Так бывает, если дать покупателям больше времени на оплату (растёт дебиторка). Амортизация и убыток от продажи вообще не тратят денег.`,
        uz: `- Aktivlar shunchaki majburiyatlarga teng emas va doim ulardan katta ham emas. Kapital tenglamaning uchinchi qismi.
- Kapital biznesning aktivi ham, majburiyati ham emas. Uni alohida modda deb hisoblang.
- Mijozdan qarz olish jami aktivlarni o'zgartirmaydi: bank oshadi, debitorlar kamayadi.
- Yetkazib beruvchiga to'lov aktivlar va majburiyatlarni kamaytiradi. Stanokni nasiyaga olish ikkalasini oshiradi.
- Tenglama operatsiyaning aktivlar, majburiyatlar va kapitalga ta'sirini ko'rsatadi. Bu foyda hisoboti emas.
- Egasi biznesga mashina kiritsa, pulsiz kapital oshadi: Dt Transport, Kt Kapital.
- Yakka tadbirkor zaxiradan tovarni biznes uchun olsa: Dt Uzoq muddatli aktivlar, Kt Sotilgan tovar tannarxi. Shaxsiy maqsadda: Dt Olib qo'yishlar, Kt Sotilgan tovar tannarxi.
- Sof aktivlar = kapital. Demak: yakuniy sof aktivlar = boshlang'ich sof aktivlar + kiritilgan kapital + foyda - olib qo'yishlar.
- Foydani topish uchun almashtiramiz: foyda = yakuniy sof aktivlar - boshlang'ich + olib qo'yishlar - kiritilgan kapital. Manfiy javob zarar demakdir.
- Olib qo'yishlarga egasining o'ziga to'laydigan "maoshi" (oyiga $650 = yiliga $7 800) va shaxsiy foydalanish uchun olingan tovar kiradi. Yakka tadbirkorda o'ziga maosh xarajati bo'lmaydi.
- Egasi olgan tovar SOTUV narxida emas, TANNARXDA yoziladi: Dt Olib qo'yishlar, Kt Xaridlar (sotilgan tovar tannarxi).
- Foyda bor, pul esa kamaygan? Xaridorlarga to'lash uchun ko'proq vaqt berilsa shunday bo'ladi (debitorlik oshadi). Amortizatsiya va sotuvdan zarar umuman pul sarflamaydi.`,
      },
      heading: {
        en: 'Duality and the accounting equation',
        ru: 'Двойственность и бухгалтерское уравнение',
        uz: 'Ikki tomonlamalik va hisob tenglamasi',
      },
      body: {
        en: `Double-entry bookkeeping rests on one idea: each transaction changes two things by the same amount. Paying rent lowers cash and adds an expense. Selling on credit adds a receivable and adds sales. Because both sides are always recorded, the records stay in balance.

The accounting equation says that assets equal equity plus liabilities. Equity, or capital, is the owner's remaining interest once all liabilities are settled. It is also the owner's net investment in the business, which is why it equals net assets. The equation can be rearranged, for example to equity = assets - liabilities.

Expenses reduce equity and profits increase it, because every gain or loss in the end belongs to the owner. Buying an asset for cash only changes the form of the assets, so the totals do not move. Taking a loan adds an asset and a liability together.

Selling goods is a good test. Suppose goods costing $300 are sold for $400 on credit. Receivables rise by $400 and inventory falls by $300, so assets go up by $100. Equity goes up by the same $100, which is the profit.`,
        ru: `Двойная запись строится на одной идее: каждая операция меняет две вещи на одну сумму. Оплата аренды уменьшает деньги и добавляет расход. Продажа в кредит добавляет дебитора и добавляет продажи. Так как записываются обе стороны, учёт всегда сбалансирован.

Бухгалтерское уравнение гласит: активы равны капиталу плюс обязательства. Капитал — это оставшаяся доля владельца после погашения всех обязательств. Это также чистые вложения владельца в бизнес, поэтому он равен чистым активам. Уравнение можно переставлять, например: капитал = активы - обязательства.

Расходы уменьшают капитал, а прибыль увеличивает его, потому что любая прибыль или убыток в итоге принадлежит владельцу. Покупка актива за деньги меняет только форму активов, поэтому итоги не двигаются. Получение кредита добавляет актив и обязательство одновременно.

Хороший пример — продажа товара. Допустим, товар стоимостью $300 продан за $400 в кредит. Дебиторы растут на $400, запасы падают на $300, поэтому активы растут на $100. Капитал растёт на те же $100, и это прибыль.`,
        uz: `Ikki yoqlama yozuv bitta g'oyaga tayanadi: har bir operatsiya ikki narsani bir xil summaga o'zgartiradi. Ijara to'lash pulni kamaytiradi va xarajat qo'shadi. Nasiyaga sotish debitor va sotuv qo'shadi. Ikkala tomon doim yozilgani uchun hisob muvozanatda turadi.

Hisob tenglamasi aktivlar kapital plus majburiyatlarga teng deydi. Kapital — barcha majburiyatlar to'langandan keyin egasiga qoladigan ulush. Bu egasining biznesdagi sof sarmoyasi ham, shuning uchun u sof aktivlarga teng. Tenglamani o'zgartirish mumkin, masalan: kapital = aktivlar - majburiyatlar.

Xarajatlar kapitalni kamaytiradi, foyda esa oshiradi, chunki har qanday foyda yoki zarar oxir-oqibat egasiniki. Aktivni pulga sotib olish faqat aktivlar shaklini o'zgartiradi, shuning uchun jami summalar o'zgarmaydi. Kredit olish aktiv va majburiyatni birga qo'shadi.

Tovar sotish yaxshi misol. $300 lik tovar nasiyaga $400 ga sotildi deylik. Debitorlar $400 ga oshadi, zaxira $300 ga kamayadi, demak aktivlar $100 ga oshadi. Kapital ham xuddi shu $100 ga oshadi, bu foyda.`,
      },
      example: {
        en: `Follow a small shop through four steps. The equation must balance after each one.
# 1. You put in $8,000 and borrow $3,000
  Assets: cash $11,000 = capital $8,000 + loan $3,000
# 2. You buy shelves for $3,000 cash
  Cash goes down $3,000, shelves go up $3,000. Assets are still $11,000.
# 3. You buy goods for $5,500: pay $4,500, owe $1,000
  Assets $12,000 = capital $8,000 + liabilities $4,000 (loan $3,000 + supplier $1,000)
# 4. You sell goods that cost $600 for $1,000 cash
  Goods go down $600, cash goes up $1,000, so assets go up $400 to $12,400
  The $400 profit goes to capital: $8,000 + $400 = $8,400
= Check: $12,400 = $8,400 + $4,000. It still balances.`,
        ru: `Проследим за небольшим магазином в четыре шага. После каждого уравнение должно сходиться.
# 1. Вы вкладываете $8,000 и занимаете $3,000
  Активы: деньги $11,000 = капитал $8,000 + заём $3,000
# 2. Покупаете полки за $3,000 наличными
  Деньги уменьшаются на $3,000, полки растут на $3,000. Активы всё ещё $11,000.
# 3. Покупаете товар на $5,500: платите $4,500, должны $1,000
  Активы $12,000 = капитал $8,000 + обязательства $4,000 (заём $3,000 + поставщик $1,000)
# 4. Продаёте товар себестоимостью $600 за $1,000 наличными
  Товар уменьшается на $600, деньги растут на $1,000, значит активы растут на $400 до $12,400
  Прибыль $400 идёт в капитал: $8,000 + $400 = $8,400
= Проверка: $12,400 = $8,400 + $4,000. Всё сходится.`,
        uz: `Kichik do'konni to'rt qadamda kuzatamiz. Har biridan keyin tenglama mos kelishi kerak.
# 1. $8,000 qo'yasiz va $3,000 qarz olasiz
  Aktivlar: pul $11,000 = kapital $8,000 + qarz $3,000
# 2. Javonlarni $3,000 naqd pulga olasiz
  Pul $3,000 kamayadi, javonlar $3,000 oshadi. Aktivlar hamon $11,000.
# 3. $5,500 lik tovar olasiz: $4,500 to'laysiz, $1,000 qarz qolasiz
  Aktivlar $12,000 = kapital $8,000 + majburiyatlar $4,000 (qarz $3,000 + yetkazib beruvchi $1,000)
# 4. Tannarxi $600 bo'lgan tovarni $1,000 naqdga sotasiz
  Tovar $600 kamayadi, pul $1,000 oshadi, demak aktivlar $400 oshib $12,400 bo'ladi
  $400 foyda kapitalga qo'shiladi: $8,000 + $400 = $8,400
= Tekshiruv: $12,400 = $8,400 + $4,000. Mos keladi.`,
      },
      simple: {
        en: `Every transaction changes two things by the same amount. This is duality.

That is why this always stays true: what the business has (assets) = what it owes to others (liabilities) + what belongs to the owner (capital). Profit makes capital bigger. Expenses, losses and drawings make it smaller.`,
        ru: `Каждая операция меняет две вещи на одну и ту же сумму. Это двойственность.

Поэтому всегда верно: что есть у бизнеса (активы) = что он должен другим (обязательства) + что принадлежит владельцу (капитал). Прибыль увеличивает капитал. Расходы, убытки и изъятия его уменьшают.`,
        uz: `Har bir operatsiya ikki narsani bir xil summaga o'zgartiradi. Bu ikki yoqlamalik.

Shuning uchun doim to'g'ri: biznesda nima bor (aktivlar) = boshqalarga nima qarz (majburiyatlar) + egasiga nima tegishli (kapital). Foyda kapitalni oshiradi. Xarajatlar, zararlar va olib qo'yishlar kamaytiradi.`,
      },
    },
    {
      key: {
        en: `- Every accounting system has inputs, then processes, then outputs.
- Inputs: source documents and standing data.
- Standing data is used again and again: price lists, pay rates, tax rates, customer details.
- Processes: recording, calculating, classifying, summarising, updating the ledgers.
- Outputs: the trial balance, financial statements and reports such as aged receivables.
- Memorandum records, such as each customer's account, sit outside the double entry.`,
        ru: `- В каждой системе учёта есть входы, затем процессы, затем выходы.
- Входы: первичные документы и постоянные данные.
- Постоянные данные используются снова и снова: прайсы, ставки оплаты, налогов, данные клиентов.
- Процессы: запись, расчёт, классификация, обобщение, обновление книг.
- Выходы: оборотная ведомость, отчётность и отчёты, например анализ дебиторов по срокам.
- Вспомогательные записи, например счёт каждого покупателя, вне двойной записи.`,
        uz: `- Har bir hisob tizimida kirish, so'ng jarayon, so'ng chiqish bor.
- Kirish: birlamchi hujjatlar va doimiy ma'lumotlar.
- Doimiy ma'lumotlar qayta-qayta ishlatiladi: narxlar, ish haqi, soliq stavkalari, mijozlar.
- Jarayonlar: yozish, hisoblash, tasniflash, jamlash, kitoblarni yangilash.
- Chiqish: sinov balansi, moliyaviy hisobot va debitorlar muddati tahlili kabi hisobotlar.
- Yordamchi yozuvlar, masalan har bir mijoz hisobi, ikki yoqlama yozuvdan tashqarida.`,
      },
      exam: {
        en: `- Source documents include sales and purchase invoices, credit notes, paying-in slips, payroll totals, petty cash summaries, bank summaries and journals.
- A paying-in slip is a source document because it shows the money put into the bank.
- Delivery notes and goods received notes show quantities, not money, so they are not source documents for financial transactions.
- A supplier statement only sums up earlier items, so it is not a source document either.
- Overtime hours, a bonus or a one-off deduction are not standing data, because they change each time.
- The aged receivables analysis and payslips are outputs, not processes or inputs.
- In the FA exam, memorandum records are assumed to update at the same time as the general ledger, and the bank account is assumed not to be integrated.
- Records serve the owner (managing, controlling, reconciling bank and cash, investment decisions) and outsiders (lenders, creditors, tax authorities, the public).`,
        ru: `- Первичные документы: счета на продажу и покупку, кредит-ноты, бланки взноса в банк, итоги по зарплате, сводки мелкой кассы, сводки банка и журналы.
- Бланк взноса — первичный документ, так как показывает деньги, внесённые в банк.
- Накладные и акты приёмки показывают количество, а не деньги, поэтому не являются первичными документами финансовых операций.
- Выписка поставщика лишь обобщает прежние позиции, поэтому тоже не является им.
- Сверхурочные часы, премия или разовое удержание — не постоянные данные, так как меняются каждый раз.
- Анализ дебиторов по срокам и расчётные листки — выходы, а не процессы и не входы.
- На экзамене FA считается, что вспомогательные записи обновляются одновременно с главной книгой, а банковский счёт не интегрирован.
- Записи служат владельцу (управление, контроль, сверка банка и кассы, инвестиционные решения) и внешним сторонам (кредиторы, поставщики, налоговые органы, общество).`,
        uz: `- Birlamchi hujjatlar: sotuv va xarid hisob-fakturalari, kredit-notalar, bankka pul topshirish varaqalari, ish haqi jamlari, kichik kassa va bank jamlanmalari hamda jurnallar.
- Bankka pul topshirish varaqasi birlamchi hujjat, chunki bankka kiritilgan pulni ko'rsatadi.
- Yetkazib berish xati va qabul qilish xati pul emas, miqdorni ko'rsatadi, shuning uchun moliyaviy operatsiyalarning birlamchi hujjati emas.
- Yetkazib beruvchi ko'chirmasi faqat oldingi summalarni jamlaydi, shuning uchun u ham birlamchi hujjat emas.
- Qo'shimcha soatlar, mukofot yoki bir martalik ushlab qolish doimiy ma'lumot emas, chunki har safar o'zgaradi.
- Debitorlar muddati tahlili va ish haqi varaqalari chiqish, jarayon yoki kirish emas.
- FA imtihonida yordamchi yozuvlar bosh kitob bilan bir vaqtda yangilanadi va bank hisobi integratsiyalanmagan deb qabul qilinadi.
- Yozuvlar egasiga (boshqarish, nazorat, bank va kassani solishtirish, investitsiya qarorlari) va tashqi tomonlarga (kreditorlar, soliq organlari, jamoatchilik) xizmat qiladi.`,
      },
      heading: { en: 'Accounting systems', ru: 'Системы учёта', uz: 'Hisob tizimlari' },
      body: {
        en: `A business of any size has an accounting system with the same three parts. Inputs go in, processes work on them, and outputs come out. This order does not change.

Inputs are source documents and standing data. Not every business document updates the accounts. A supplier statement sums up items already recorded, and a remittance advice only gives information about a payment.

Processing may happen in real time, as each transaction takes place, or in batches, for example once a day. The system calculates and classifies the data and updates the general ledger. Each source document is coded with at least two ledger accounts, and more if sales tax is involved or an invoice covers several kinds of cost.

Outputs include the trial balance, the financial statements and reports for managers. Memorandum records help run the business and are not part of the double entry. They include each customer's and supplier's own account, inventory usage reports and payroll analyses. A credit controller uses them to see who is overdue, and they show which suppliers are due for payment.

Financial records matter inside and outside the business. Inside, the owner uses them to manage and control it, to reconcile bank and cash, and to decide about investing. Outside, lenders and creditors use them to judge a credit or loan application, the tax authorities use them, and the public may read them to see the business's impact on the community.`,
        ru: `У бизнеса любого размера система учёта состоит из тех же трёх частей. Входы поступают, процессы их обрабатывают, выходы выдаются. Этот порядок не меняется.

Входы — это первичные документы и постоянные данные. Не каждый деловой документ обновляет учёт. Выписка поставщика обобщает уже записанные позиции, а извещение об оплате лишь сообщает о платеже.

Обработка может идти в реальном времени, по мере операций, или партиями, например раз в день. Система считает и классифицирует данные и обновляет главную книгу. Каждому первичному документу присваиваются как минимум два счёта, а больше, если есть налог с продаж или счёт покрывает несколько видов затрат.

Выходы включают оборотную ведомость, финансовую отчётность и отчёты для менеджеров. Вспомогательные записи помогают вести бизнес и не входят в двойную запись. Это счета каждого покупателя и поставщика, отчёты об использовании запасов и анализ зарплаты. Кредитный контролёр видит по ним, кто просрочил оплату, и они показывают, каким поставщикам пора платить.

Финансовые записи важны внутри и вне бизнеса. Внутри владелец использует их для управления и контроля, сверки банка и кассы и решений об инвестициях. Вне бизнеса кредиторы оценивают по ним заявку на кредит, налоговые органы используют их, а общество может читать их, чтобы увидеть влияние бизнеса на сообщество.`,
        uz: `Har qanday hajmdagi biznesda hisob tizimi xuddi shu uch qismdan iborat. Kirishlar tushadi, jarayonlar ularni ishlaydi, chiqishlar beriladi. Bu tartib o'zgarmaydi.

Kirishlar — birlamchi hujjatlar va doimiy ma'lumotlar. Har bir biznes hujjati hisobni yangilamaydi. Yetkazib beruvchi ko'chirmasi allaqachon yozilgan summalarni jamlaydi, to'lov xabarnomasi esa faqat to'lov haqida ma'lumot beradi.

Ishlov berish real vaqtda, operatsiya bo'lishi bilan, yoki to'plamlarda, masalan kuniga bir marta bo'lishi mumkin. Tizim ma'lumotni hisoblaydi, tasniflaydi va bosh kitobni yangilaydi. Har bir birlamchi hujjatga kamida ikkita hisob kodi beriladi, sotuv solig'i bo'lsa yoki hisob-faktura bir necha xil xarajatni qamrasa ko'proq.

Chiqishlarga sinov balansi, moliyaviy hisobot va menejerlar uchun hisobotlar kiradi. Yordamchi yozuvlar biznesni boshqarishga yordam beradi va ikki yoqlama yozuvga kirmaydi. Bular har bir mijoz va yetkazib beruvchi hisobi, zaxira ishlatilishi hisobotlari va ish haqi tahlillari. Kredit nazoratchisi ular orqali kim kechikkanini ko'radi, ular qaysi yetkazib beruvchiga to'lash vaqti kelganini ham ko'rsatadi.

Moliyaviy yozuvlar biznes ichida ham, tashqarisida ham muhim. Ichkarida egasi ulardan boshqarish va nazorat, bank va kassani solishtirish hamda investitsiya qarorlari uchun foydalanadi. Tashqarida kreditorlar kredit arizasini baholaydi, soliq organlari foydalanadi, jamoatchilik esa biznesning jamiyatga ta'sirini ko'rish uchun o'qishi mumkin.`,
      },
      example: {
        en: `A small cafe's system.

- Input: today's till slips and a supplier's invoice for milk.
- Standing data: the menu price list, used for every sale until prices change. A one-off December bonus for a waiter is not standing data.
- Process: the software adds up the day's sales and updates the ledger.
- Output: the trial balance, the year's accounts, and a list of which offices owe the cafe for catering.
- Memorandum record: the separate page showing what one office owes.`,
        ru: `Система небольшого кафе.

- Вход: сегодняшние чеки кассы и счёт поставщика за молоко.
- Постоянные данные: прайс-лист меню, который используется для каждой продажи, пока цены не изменятся. Разовый декабрьский бонус официанту — не постоянные данные.
- Процесс: программа суммирует продажи дня и обновляет главную книгу.
- Выход: оборотная ведомость, годовая отчётность и список офисов, которые должны кафе за кейтеринг.
- Вспомогательная запись: отдельная страница с долгом одного офиса.`,
        uz: `Kichik kafe tizimi.

- Kirish: bugungi kassa cheklari va yetkazib beruvchining sut uchun hisob-fakturasi.
- Doimiy ma'lumot: menyu narxlari ro'yxati, narxlar o'zgarguncha har bir sotuvda ishlatiladi. Ofitsiantga dekabrdagi bir martalik bonus doimiy ma'lumot emas.
- Jarayon: dastur kunlik sotuvni qo'shadi va bosh kitobni yangilaydi.
- Natija: sinov balansi, yillik hisobot va kafega ovqat yetkazish uchun qarz ofislar ro'yxati.
- Yordamchi yozuv: bitta ofis qarzini ko'rsatuvchi alohida sahifa.`,
      },
      simple: {
        en: `Every accounting system, from a notebook to big software, works the same way: inputs go in, processes work on them, outputs come out.

- Inputs: source documents (invoices, receipts) and standing data (things used again and again, like a price list).
- Processes: recording, calculating, sorting and updating the ledger.
- Outputs: the trial balance, the financial statements and reports.

Memorandum records, like each customer's own account, help run the business but are not part of the double entry.`,
        ru: `Любая учётная система, от тетради до большой программы, работает одинаково: входы поступают, процессы их обрабатывают, выходы получаются.

- Входы: первичные документы (счета, чеки) и постоянные данные (то, что используется снова и снова, например прайс-лист).
- Процессы: запись, расчёт, сортировка и обновление главной книги.
- Выходы: оборотная ведомость, финансовая отчётность и отчёты.

Вспомогательные записи, например отдельный счёт каждого покупателя, помогают управлять бизнесом, но не входят в двойную запись.`,
        uz: `Har qanday hisob tizimi, daftardan katta dasturgacha, bir xil ishlaydi: kirish ma'lumotlari kiradi, jarayonlar ularni ishlaydi, natijalar chiqadi.

- Kirish: birlamchi hujjatlar (hisob-fakturalar, cheklar) va doimiy ma'lumotlar (qayta-qayta ishlatiladigan narsa, masalan narxlar ro'yxati).
- Jarayonlar: yozish, hisoblash, saralash va bosh kitobni yangilash.
- Natijalar: sinov balansi, moliyaviy hisobot va hisobotlar.

Yordamchi yozuvlar, masalan har bir mijozning alohida hisobi, biznesni boshqarishga yordam beradi, lekin ikki yoqlama yozuvga kirmaydi.`,
      },
    },
    {
      key: {
        en: `- Off-the-shelf software: cheap and reliable, but may not fit the business exactly.
- Customised software: fits exactly, but riskier if poorly designed or tested.
- Integrated systems also handle inventory, human resources and payroll.
- Cloud accounting: software and data sit on remote servers, reached over the internet.
- Many users can log in at any time from any place.
- Screens may show columns or +/-, but double-entry principles stay the same.`,
        ru: `- Готовые программы: дешёвые и надёжные, но могут не подходить бизнесу точно.
- Заказные программы: подходят точно, но рискованнее при плохой разработке или тестах.
- Интегрированные системы также ведут запасы, кадры и зарплату.
- Облачный учёт: программы и данные на удалённых серверах, доступ через интернет.
- Много пользователей могут входить в любое время из любого места.
- На экране могут быть столбцы или +/-, но принципы двойной записи те же.`,
        uz: `- Tayyor dastur: arzon va ishonchli, lekin biznesga aniq mos kelmasligi mumkin.
- Buyurtma dastur: aniq mos keladi, lekin yomon ishlansa yoki sinalsa xavfliroq.
- Integratsiyalangan tizimlar zaxira, kadrlar va ish haqini ham yuritadi.
- Bulutli hisob: dastur va ma'lumotlar masofaviy serverlarda, internet orqali kiriladi.
- Ko'p foydalanuvchi istalgan vaqtda, istalgan joydan kira oladi.
- Ekranda ustunlar yoki +/- bo'lishi mumkin, lekin ikki yoqlama yozuv tamoyili o'zgarmaydi.`,
      },
      exam: {
        en: `- Cloud computing is access to software and data storage on remote servers over the internet. Cloud accounting applies that to accounting.
- It is more than any computerised system, it is not only for working from home, and it does not need special computer knowledge.
- An accountant, auditor or payroll bureau can be given remote access to the data they need.
- Not all staff can see everything. Access to payroll data, for example, is usually limited.
- Advantages: no software to install or protect on each machine, easy to scale up or down, easy sharing, no physical server to maintain, better recovery if a laptop is lost.
- Disadvantages: reliance on the provider's survival, risk of cyber-attack or servers going down, unauthorised access by provider staff, and the need to check it meets data protection rules.`,
        ru: `- Облачные вычисления — это доступ к программам и хранилищу на удалённых серверах через интернет. Облачный учёт применяет это к бухгалтерии.
- Это не просто любая компьютерная система, не только работа из дома, и особых компьютерных знаний не требует.
- Бухгалтеру, аудитору или расчётному бюро можно дать удалённый доступ к нужным данным.
- Не всем сотрудникам видно всё. Доступ к данным о зарплате обычно ограничен.
- Преимущества: не нужно ставить и защищать программы на каждом компьютере, легко масштабировать, легко делиться, нет физического сервера, лучше восстановление при потере ноутбука.
- Недостатки: зависимость от выживания поставщика, риск кибератаки или сбоя серверов, несанкционированный доступ персонала поставщика, необходимость проверять соблюдение правил о защите данных.`,
        uz: `- Bulutli hisoblash — internet orqali masofaviy serverlardagi dastur va ma'lumotlar omboriga kirish. Bulutli hisob buni buxgalteriyaga qo'llaydi.
- Bu shunchaki kompyuter tizimi emas, faqat uydan ishlash uchun ham emas va maxsus kompyuter bilimi talab qilmaydi.
- Hisobchi, auditor yoki ish haqi byurosiga kerakli ma'lumotga masofadan kirish berilishi mumkin.
- Hamma xodim hamma narsani ko'rmaydi. Ish haqi ma'lumotlariga kirish odatda cheklangan.
- Afzalliklar: har kompyuterga dastur o'rnatish va himoyalash kerak emas, hajmni oson o'zgartirish, oson ulashish, jismoniy server yo'q, noutbuk yo'qolganda oson tiklash.
- Kamchiliklar: provayderning faoliyatiga bog'liqlik, kiberhujum yoki server to'xtashi xavfi, provayder xodimlarining ruxsatsiz kirishi, ma'lumotlarni himoya qilish qoidalarini tekshirish zarurati.`,
      },
      heading: {
        en: 'Computer systems and cloud accounting',
        ru: 'Компьютерные системы и облачный учёт',
        uz: 'Kompyuter tizimlari va bulutli hisob',
      },
      body: {
        en: `Early computer systems only added things up faster. Today there are inexpensive off-the-shelf packages, built by experienced people and updated regularly, though a standard package may not meet one business's exact needs. Larger businesses may have software tailored to their specification, which fits well but carries more operational risk if it is not properly designed, tested and installed.

Integrated systems link accounting with other parts of the business. Inventory management links to purchasing and sales. Human resources records may cover annual leave, training and appraisals. Payroll links to human resources so that new starters and leavers are paid correctly.

Computer screens may show columns or plus and minus signs rather than T-accounts and the words debit and credit. Only the presentation changes. The double-entry principles do not.

Cloud accounting lets outside firms into chosen parts of the system. Auditors can reach the data for the audit, a payroll bureau can prepare wages and pay slips, and a supplier may see production schedules so that it can deliver on time.`,
        ru: `Ранние компьютерные системы только быстрее считали итоги. Сегодня есть недорогие готовые пакеты, созданные опытными людьми и регулярно обновляемые, хотя стандартный пакет может не отвечать точным нуждам бизнеса. У крупных компаний могут быть программы по их заказу: они хорошо подходят, но несут больший операционный риск при плохой разработке, тестировании или установке.

Интегрированные системы связывают учёт с другими частями бизнеса. Управление запасами связано с закупками и продажами. Кадровые записи могут охватывать отпуска, обучение и оценки. Зарплата связана с кадрами, чтобы новым и уходящим сотрудникам платили верно.

На экранах могут быть столбцы или знаки плюс и минус, а не Т-счета и слова дебет и кредит. Меняется только представление. Принципы двойной записи не меняются.

Облачный учёт открывает внешним фирмам выбранные части системы. Аудиторы получают данные для аудита, расчётное бюро готовит зарплату и листки, а поставщик может видеть производственные графики, чтобы доставлять вовремя.`,
        uz: `Dastlabki kompyuter tizimlari faqat tezroq jamlardi. Bugun tajribali odamlar yaratgan va muntazam yangilanadigan arzon tayyor dasturlar bor, ammo standart dastur biznesning aniq ehtiyojiga mos kelmasligi mumkin. Yirik bizneslarda o'z talabiga moslangan dastur bo'lishi mumkin, u yaxshi mos keladi, lekin to'g'ri ishlab chiqilmasa, sinalmasa va o'rnatilmasa ko'proq operatsion xavf tug'diradi.

Integratsiyalangan tizimlar hisobni biznesning boshqa qismlari bilan bog'laydi. Zaxira boshqaruvi xarid va sotuv bilan bog'lanadi. Kadrlar yozuvlari ta'til, o'qish va baholashni qamrashi mumkin. Ish haqi kadrlar bilan bog'lanadi, shunda yangi kelgan va ketgan xodimlarga to'g'ri to'lanadi.

Ekranda T-hisoblar va debet, kredit so'zlari o'rniga ustunlar yoki plus va minus belgilari bo'lishi mumkin. Faqat ko'rinish o'zgaradi. Ikki yoqlama yozuv tamoyillari o'zgarmaydi.

Bulutli hisob tashqi firmalarga tizimning tanlangan qismlariga kirish beradi. Auditorlar audit uchun ma'lumot oladi, ish haqi byurosi ish haqi va varaqalarni tayyorlaydi, yetkazib beruvchi esa o'z vaqtida yetkazish uchun ishlab chiqarish jadvalini ko'rishi mumkin.`,
      },
      example: {
        en: `A shop moves its accounts to the cloud.

- Its accountant in another city logs in to prepare the year-end accounts.
- A payroll firm can reach the wages section only.
- The shop assistant can record sales but cannot see anyone's pay.
- The owner's laptop is stolen, but no data is lost, because nothing was stored on it.

The downside: the shop now depends on the cloud provider staying in business and keeping its servers safe.`,
        ru: `Магазин переводит учёт в облако.

- Его бухгалтер из другого города входит, чтобы подготовить годовую отчётность.
- Фирма по зарплате видит только раздел заработной платы.
- Продавец может записывать продажи, но не видит чужих зарплат.
- У владельца украли ноутбук, но данные не пропали: на нём ничего не хранилось.

Минус: теперь магазин зависит от того, продолжит ли облачный провайдер работать и защищать свои серверы.`,
        uz: `Do'kon hisobini bulutga ko'chiradi.

- Boshqa shahardagi buxgalteri yil oxiri hisobotini tayyorlash uchun kiradi.
- Ish haqi firmasi faqat ish haqi bo'limini ko'radi.
- Sotuvchi sotuvni yoza oladi, lekin boshqalarning maoshini ko'ra olmaydi.
- Egasining noutbuki o'g'irlandi, lekin ma'lumot yo'qolmadi: unda hech narsa saqlanmagan edi.

Kamchiligi: do'kon endi bulut provayderi ishlashda davom etishi va serverlarini himoya qilishiga bog'liq.`,
      },
      simple: {
        en: `Software can be bought ready-made (cheap and reliable, but may not fit perfectly) or built for one business (fits exactly, but riskier).

Cloud accounting means the software and data live on the internet, not on your computer. Many people can log in from anywhere at any time, and you control who sees what. Screens may show plus and minus instead of debit and credit, but the double-entry rules stay the same.`,
        ru: `Программу можно купить готовую (дёшево и надёжно, но может подойти не идеально) или сделать под один бизнес (подходит точно, но рискованнее).

Облачный учёт — программа и данные хранятся в интернете, а не на вашем компьютере. Многие могут войти откуда угодно в любое время, и вы решаете, кто что видит. На экране может быть плюс и минус вместо дебета и кредита, но правила двойной записи те же.`,
        uz: `Dasturni tayyor holda sotib olish (arzon va ishonchli, lekin to'liq mos kelmasligi mumkin) yoki bitta biznes uchun yaratish (aniq mos, lekin xavfliroq) mumkin.

Bulutli hisob — dastur va ma'lumotlar kompyuteringizda emas, internetda saqlanadi. Ko'p odam istalgan joydan istalgan vaqtda kira oladi, kim nimani ko'rishini siz hal qilasiz. Ekranda debet va kredit o'rniga plyus va minus bo'lishi mumkin, lekin ikki yoqlama yozuv qoidalari o'sha-o'sha.`,
      },
    },
    {
      key: {
        en: `- General (nominal) ledger: all the ledger accounts of the business together.
- A ledger account records one asset, liability, equity, income or expense item.
- Debit is the left side of a T-account. Credit is the right side.
- DEAD: Debits increase Expenses, Assets and Drawings.
- CLIC: Credits increase Liabilities, Income and Capital.
- To decrease an account, post to its opposite side.`,
        ru: `- Главная книга: все счета бизнеса вместе.
- Счёт записывает один актив, обязательство, капитал, доход или расход.
- Дебет — левая сторона Т-счёта. Кредит — правая.
- DEAD: дебет увеличивает расходы (Expenses), активы (Assets) и изъятия (Drawings).
- CLIC: кредит увеличивает обязательства (Liabilities), доходы (Income) и капитал (Capital).
- Чтобы уменьшить счёт, записывайте на противоположную сторону.`,
        uz: `- Bosh kitob: biznesning barcha hisoblari birgalikda.
- Hisob bitta aktiv, majburiyat, kapital, daromad yoki xarajatni yozadi.
- Debet — T-hisobning chap tomoni. Kredit — o'ng tomoni.
- DEAD: debet xarajatlar (Expenses), aktivlar (Assets) va olib qo'yishlarni (Drawings) oshiradi.
- CLIC: kredit majburiyatlar (Liabilities), daromad (Income) va kapitalni (Capital) oshiradi.
- Hisobni kamaytirish uchun qarama-qarshi tomonga yozing.`,
      },
      exam: {
        en: `- Normal debit balances: assets and expenses, including drawings, prepayments, carriage in, carriage out and opening inventory.
- Normal credit balances: liabilities, capital and income, including accruals, rental income, purchase returns and discounts received.
- Carriage in is part of cost of sales, so it lowers gross profit. Carriage out is an expense below gross profit.
- Discount received is netted off purchases, so it lowers cost of sales and raises gross profit.
- A trade discount comes off before anything is recorded. Goods listed at $800 less 5% are recorded at $760.
- Topping up petty cash: Dr Petty cash, Cr Bank.
- In the bank account, money in is a debit and money out is a credit. An opening overdraft is a credit balance.
- Money received for goods returned to a supplier is a receipt. Rental income is a receipt too.
- Common entries: cash purchase Dr Purchases, Cr Cash. Credit purchase Dr Purchases, Cr Payables. Paying a supplier Dr Payables, Cr Cash.
- Cash sale Dr Cash, Cr Sales. Credit sale Dr Receivables, Cr Sales. A credit customer pays Dr Cash, Cr Receivables.
- Returns: a customer returns goods Dr Sales returns, Cr Cash (or Receivables). We return goods to a supplier Dr Payables (or Cash), Cr Purchase returns.
- One sale, two books: the SELLER records Dr Receivables, Cr Sales. The BUYER records Dr Purchases, Cr Payables. Read whose books the question asks about.
- In the cash book a debit raises a positive bank balance and REDUCES an overdraft. A credit does the opposite.
- Gross profit with returns: (sales - sales returns) - (opening inventory + purchases - purchase returns - closing inventory).`,
        ru: `- Обычные дебетовые остатки: активы и расходы, включая изъятия, предоплаты, транспортные расходы на закупку и продажу и запасы на начало.
- Обычные кредитовые остатки: обязательства, капитал и доходы, включая начисления, доход от аренды, возвраты поставщикам и полученные скидки.
- Доставка закупок (carriage in) входит в себестоимость и снижает валовую прибыль. Доставка продаж (carriage out) — расход ниже валовой прибыли.
- Полученная скидка вычитается из закупок, поэтому снижает себестоимость и повышает валовую прибыль.
- Торговая скидка вычитается до записи. Товар по прайсу $800 минус 5% записывается как $760.
- Пополнение мелкой кассы: Дт Мелкая касса, Кт Банк.
- На счёте банка поступление — дебет, выплата — кредит. Овердрафт на начало — кредитовый остаток.
- Деньги за товар, возвращённый поставщику, — поступление. Доход от аренды — тоже поступление.
- Частые проводки: покупка за наличные Дт Закупки, Кт Касса. Покупка в кредит Дт Закупки, Кт Кредиторы. Оплата поставщику Дт Кредиторы, Кт Касса.
- Продажа за наличные Дт Касса, Кт Выручка. Продажа в кредит Дт Дебиторы, Кт Выручка. Покупатель в кредит платит: Дт Касса, Кт Дебиторы.
- Возвраты: покупатель вернул товар Дт Возвраты продаж, Кт Касса (или Дебиторы). Мы вернули товар поставщику Дт Кредиторы (или Касса), Кт Возвраты закупок.
- Одна продажа, два учёта: ПРОДАВЕЦ пишет Дт Дебиторы, Кт Выручка. ПОКУПАТЕЛЬ пишет Дт Закупки, Кт Кредиторы. Смотрите, чей учёт спрашивают.
- В кассовой книге дебет увеличивает положительный остаток в банке и УМЕНЬШАЕТ овердрафт. Кредит — наоборот.
- Валовая прибыль с возвратами: (выручка - возвраты продаж) - (запасы на начало + закупки - возвраты закупок - запасы на конец).`,
        uz: `- Odatiy debet qoldiqlar: aktivlar va xarajatlar, jumladan olib qo'yishlar, oldindan to'lovlar, kelish va ketish tashuvi hamda boshlang'ich zaxira.
- Odatiy kredit qoldiqlar: majburiyatlar, kapital va daromad, jumladan hisoblangan xarajatlar, ijara daromadi, xarid qaytarishlari va olingan chegirmalar.
- Kelish tashuvi (carriage in) sotilgan tovar tannarxiga kiradi va yalpi foydani kamaytiradi. Ketish tashuvi (carriage out) yalpi foydadan pastdagi xarajat.
- Olingan chegirma xariddan ayiriladi, shuning uchun tannarxni kamaytiradi va yalpi foydani oshiradi.
- Savdo chegirmasi yozuvdan oldin ayiriladi. Ro'yxat narxi $800 minus 5% bo'lgan tovar $760 yoziladi.
- Kichik kassani to'ldirish: Dt Kichik kassa, Kt Bank.
- Bank hisobida kelgan pul debet, chiqqan pul kredit. Boshlang'ich overdraft kredit qoldiq.
- Yetkazib beruvchiga qaytarilgan tovar uchun olingan pul tushum. Ijara daromadi ham tushum.
- Ko'p uchraydigan yozuvlar: naqd xarid Dt Xaridlar, Kt Kassa. Nasiya xarid Dt Xaridlar, Kt Kreditorlar. Yetkazib beruvchiga to'lov Dt Kreditorlar, Kt Kassa.
- Naqd sotuv Dt Kassa, Kt Sotuv. Nasiya sotuv Dt Debitorlar, Kt Sotuv. Nasiya xaridor to'laydi: Dt Kassa, Kt Debitorlar.
- Qaytarishlar: xaridor tovarni qaytardi Dt Sotuv qaytarishlari, Kt Kassa (yoki Debitorlar). Biz yetkazib beruvchiga qaytardik Dt Kreditorlar (yoki Kassa), Kt Xarid qaytarishlari.
- Bitta sotuv, ikki hisob: SOTUVCHI Dt Debitorlar, Kt Sotuv yozadi. XARIDOR Dt Xaridlar, Kt Kreditorlar yozadi. Savol kimning hisobi haqida ekanini o'qing.
- Kassa kitobida debet ijobiy bank qoldig'ini oshiradi va overdraftni KAMAYTIRADI. Kredit buning aksini qiladi.
- Qaytarishlar bilan yalpi foyda: (sotuv - sotuv qaytarishlari) - (boshlang'ich zaxira + xaridlar - xarid qaytarishlari - yakuniy zaxira).`,
      },
      heading: { en: 'Ledger accounts, debits and credits', ru: 'Счета, дебет и кредит', uz: 'Hisoblar, debet va kredit' },
      body: {
        en: `Transactions are classified by the elements of the financial statements and posted to ledger accounts. There is one account each for sales, purchases, rent, receivables, payables and so on, with no limit on how many a business may have. The whole set is the general ledger, also called the nominal ledger, and the trial balance and financial statements are built from it.

Each account is drawn as a large T. The left side is the debit (Dr) and the right side is the credit (Cr). Every transaction touches at least two accounts: one is debited and the other credited with the same amount.

Which side to use depends on the type of account. Increases in assets, expenses and drawings go on the debit side. Increases in liabilities, income and capital go on the credit side. A decrease goes on the opposite side. DEAD CLIC is an easy way to remember this.

There are four steps to record a transaction. Name the accounts affected. Decide whether each is going up or down. Decide which is the debit and which the credit. Check that the two amounts agree.

The exam may show a T-account and ask you to finish it or to spot what is wrong with it.`,
        ru: `Операции классифицируются по элементам финансовой отчётности и записываются на счета. Есть отдельный счёт для продаж, закупок, аренды, дебиторов, кредиторов и так далее, без ограничения их числа. Весь набор — это главная книга, из неё строятся оборотная ведомость и отчётность.

Каждый счёт изображают большой буквой Т. Левая сторона — дебет (Дт), правая — кредит (Кт). Каждая операция затрагивает минимум два счёта: один дебетуется, другой кредитуется на ту же сумму.

Какую сторону использовать, зависит от типа счёта. Увеличение активов, расходов и изъятий идёт в дебет. Увеличение обязательств, доходов и капитала идёт в кредит. Уменьшение идёт на противоположную сторону. DEAD CLIC помогает это запомнить.

Запись операции состоит из четырёх шагов. Назовите затронутые счета. Определите, растёт каждый или падает. Решите, что дебет, а что кредит. Проверьте, что суммы равны.

На экзамене могут показать Т-счёт и попросить закончить его или найти ошибку.`,
        uz: `Operatsiyalar moliyaviy hisobot elementlari bo'yicha tasniflanadi va hisoblarga yoziladi. Sotuv, xarid, ijara, debitorlar, kreditorlar va boshqalar uchun alohida hisob bor, ularning soni cheklanmagan. Butun to'plam bosh kitob bo'lib, sinov balansi va moliyaviy hisobot undan tuziladi.

Har bir hisob katta T harfi shaklida chiziladi. Chap tomon debet (Dt), o'ng tomon kredit (Kt). Har bir operatsiya kamida ikki hisobga tegadi: biri debetlanadi, ikkinchisi xuddi shu summaga kreditlanadi.

Qaysi tomon ishlatilishi hisob turiga bog'liq. Aktivlar, xarajatlar va olib qo'yishlarning o'sishi debetga yoziladi. Majburiyatlar, daromad va kapitalning o'sishi kreditga yoziladi. Kamayish qarama-qarshi tomonga yoziladi. DEAD CLIC buni eslashga yordam beradi.

Operatsiyani yozish to'rt qadamdan iborat. Tegishli hisoblarni aniqlang. Har biri oshyaptimi yoki kamayaptimi, hal qiling. Qaysi biri debet, qaysi biri kredit ekanini aniqlang. Summalar tengligini tekshiring.

Imtihonda T-hisob ko'rsatilib, uni tugatish yoki xatoni topish so'ralishi mumkin.`,
      },
      example: {
        en: `Five transactions for a new shop. For each: which accounts, up or down, then debit and credit.
# 1. Owner puts in $8,000
  Bank (asset) up = Dr Bank $8,000. Capital up = Cr Capital $8,000
# 2. Bank lends $3,000
  Bank up = Dr Bank $3,000. Loan (liability) up = Cr Loan $3,000
# 3. Buy shelves for $3,000 from the bank
  Shelves (asset) up = Dr Shelves $3,000. Bank down = Cr Bank $3,000
# 4. Buy goods for $5,500: pay $4,500, owe $1,000
  Dr Purchases $5,500. Cr Bank $4,500 and Cr Payables $1,000
# 5. Sell goods for $1,000 cash
  Bank up = Dr Bank $1,000. Sales (income) up = Cr Sales $1,000
= Check: in every entry, debits equal credits, even when there are three lines.`,
        ru: `Пять операций нового магазина. Для каждой: какие счета, растут или уменьшаются, затем дебет и кредит.
# 1. Владелец вносит $8,000
  Банк (актив) растёт = Дт Банк $8,000. Капитал растёт = Кт Капитал $8,000
# 2. Банк даёт заём $3,000
  Банк растёт = Дт Банк $3,000. Заём (обязательство) растёт = Кт Заём $3,000
# 3. Покупаем полки за $3,000 с банковского счёта
  Полки (актив) растут = Дт Полки $3,000. Банк уменьшается = Кт Банк $3,000
# 4. Покупаем товар на $5,500: платим $4,500, должны $1,000
  Дт Закупки $5,500. Кт Банк $4,500 и Кт Кредиторы $1,000
# 5. Продаём товар за $1,000 наличными
  Банк растёт = Дт Банк $1,000. Продажи (доход) растут = Кт Продажи $1,000
= Проверка: в каждой проводке дебет равен кредиту, даже если строк три.`,
        uz: `Yangi do'konning beshta operatsiyasi. Har biri uchun: qaysi hisoblar, oshadimi yoki kamayadimi, keyin debet va kredit.
# 1. Egasi $8,000 qo'yadi
  Bank (aktiv) oshadi = Dt Bank $8,000. Kapital oshadi = Kt Kapital $8,000
# 2. Bank $3,000 qarz beradi
  Bank oshadi = Dt Bank $3,000. Qarz (majburiyat) oshadi = Kt Qarz $3,000
# 3. Javonlarni bankdan $3,000 ga olamiz
  Javonlar (aktiv) oshadi = Dt Javonlar $3,000. Bank kamayadi = Kt Bank $3,000
# 4. $5,500 lik tovar: $4,500 to'laymiz, $1,000 qarz qolamiz
  Dt Xaridlar $5,500. Kt Bank $4,500 va Kt Kreditorlar $1,000
# 5. Tovarni $1,000 naqdga sotamiz
  Bank oshadi = Dt Bank $1,000. Sotuv (daromad) oshadi = Kt Sotuv $1,000
= Tekshiruv: har bir yozuvda debet kreditga teng, qator uchta bo'lsa ham.`,
      },
      simple: {
        en: `Each item (cash, sales, rent...) has its own account, drawn as a big T. The left side is the debit, the right side is the credit. Every transaction goes on the debit side of one account and the credit side of another, with the same amount.

Use DEAD CLIC to know which side makes an account go UP:
- DEAD: Debit increases Expenses, Assets and Drawings.
- CLIC: Credit increases Liabilities, Income and Capital.
To make an account go DOWN, use the other side.`,
        ru: `У каждой статьи (деньги, продажи, аренда...) свой счёт в виде большой буквы T. Левая сторона — дебет, правая — кредит. Каждая операция записывается в дебет одного счёта и в кредит другого на одну сумму.

DEAD CLIC подскажет, какая сторона УВЕЛИЧИВАЕТ счёт:
- DEAD: дебет увеличивает расходы (Expenses), активы (Assets) и изъятия (Drawings).
- CLIC: кредит увеличивает обязательства (Liabilities), доходы (Income) и капитал (Capital).
Чтобы УМЕНЬШИТЬ счёт, используйте другую сторону.`,
        uz: `Har bir modda (pul, sotuv, ijara...) katta T shaklidagi o'z hisobiga ega. Chap tomon — debet, o'ng tomon — kredit. Har bir operatsiya bir hisobning debetiga va boshqasining kreditiga bir xil summada yoziladi.

DEAD CLIC qaysi tomon hisobni OSHIRISHINI eslatadi:
- DEAD: debet xarajatlar (Expenses), aktivlar (Assets) va olib qo'yishlarni (Drawings) oshiradi.
- CLIC: kredit majburiyatlar (Liabilities), daromad (Income) va kapitalni (Capital) oshiradi.
Hisobni KAMAYTIRISH uchun boshqa tomondan foydalaning.`,
      },
    },
    {
      key: {
        en: `- The journal records non-routine entries and the correction of errors.
- Typical uses: depreciation, irrecoverable debts, allowances, accruals, closing inventory.
- Each journal shows the debit, the credit, the amount and a short narrative.
- To fix an error: see what was posted, see what should be posted, then post the difference.
- If debit and credit were swapped, the correction is twice the amount.
- If only one side is wrong, correct only that side.`,
        ru: `- Журнал записывает нестандартные операции и исправление ошибок.
- Обычно это амортизация, безнадёжные долги, резервы, начисления, запасы на конец.
- В каждой записи журнала есть дебет, кредит, сумма и краткое пояснение.
- Для исправления: посмотрите, что записано, что должно быть, и запишите разницу.
- Если дебет и кредит перепутаны, исправление равно двойной сумме.
- Если неверна одна сторона, исправьте только её.`,
        uz: `- Jurnal nostandart yozuvlar va xatolar tuzatilishini qayd etadi.
- Odatda: amortizatsiya, undirib bo'lmaydigan qarzlar, rezervlar, hisoblanganlar, yakuniy zaxira.
- Har bir jurnal yozuvida debet, kredit, summa va qisqa izoh bor.
- Xatoni tuzatish: nima yozilganini, nima bo'lishi kerakligini ko'ring va farqni yozing.
- Agar debet va kredit almashgan bo'lsa, tuzatish ikki baravar summa bo'ladi.
- Faqat bir tomon xato bo'lsa, faqat shuni tuzating.`,
      },
      exam: {
        en: `- These are false: the journal records all bank and cash transactions, all accounting transactions, or all credit sales. It does record corrections and year-end adjustments.
- The exam may ask for the journal of any transaction, even one that would not normally go through the journal.
- Depreciation is Dr Depreciation expense, Cr Accumulated depreciation. Never credit the asset account itself.
- Depreciation posted the wrong way round by $5,000: Dr Depreciation expense $10,000, Cr Accumulated depreciation $10,000.
- Purchases posted the wrong way round by $3,200: Dr Purchases $6,400, Cr Payables $6,400.
- Allowance increase wrongly debited to receivables: Dr Irrecoverable debts expense, Cr Receivables. The allowance credit was right and stays.
- Disposal proceeds wrongly credited to revenue: Dr Revenue, Cr Disposal account. The bank debit was right.
- Settlement discount received: Dr Payables, Cr Discount received.`,
        ru: `- Неверно, что журнал записывает все банковские и кассовые операции, все операции или все продажи в кредит. Он записывает исправления и корректировки на конец года.
- На экзамене могут спросить запись журнала по любой операции, даже если обычно она не идёт через журнал.
- Амортизация: Дт Расход по амортизации, Кт Накопленная амортизация. Никогда не кредитуйте сам счёт актива.
- Амортизация $5,000 записана наоборот: Дт Расход по амортизации $10,000, Кт Накопленная амортизация $10,000.
- Закупки $3,200 записаны наоборот: Дт Закупки $6,400, Кт Кредиторы $6,400.
- Рост резерва ошибочно в дебет дебиторов: Дт Расход по безнадёжным долгам, Кт Дебиторы. Кредит резерва был верен и остаётся.
- Выручка от выбытия ошибочно в кредит продаж: Дт Выручка, Кт Счёт выбытия. Дебет банка был верен.
- Полученная скидка за раннюю оплату: Дт Кредиторы, Кт Полученная скидка.`,
        uz: `- Jurnal barcha bank va kassa operatsiyalarini, barcha operatsiyalarni yoki barcha nasiya sotuvlarni yozadi, degan gaplar noto'g'ri. U tuzatishlar va yil oxiri tuzatishlarini yozadi.
- Imtihonda istalgan operatsiya jurnali so'ralishi mumkin, hatto odatda jurnaldan o'tmasa ham.
- Amortizatsiya: Dt Amortizatsiya xarajati, Kt To'plangan amortizatsiya. Aktiv hisobining o'zini hech qachon kreditlamang.
- $5,000 amortizatsiya teskari yozilgan: Dt Amortizatsiya xarajati $10,000, Kt To'plangan amortizatsiya $10,000.
- $3,200 xarid teskari yozilgan: Dt Xaridlar $6,400, Kt Kreditorlar $6,400.
- Rezerv o'sishi xato debitorlarga debetlangan: Dt Undirib bo'lmaydigan qarzlar xarajati, Kt Debitorlar. Rezerv krediti to'g'ri edi va qoladi.
- Chiqib ketish tushumi xato sotuvga kreditlangan: Dt Tushum, Kt Chiqib ketish hisobi. Bank debeti to'g'ri edi.
- Olingan muddatidan oldingi to'lov chegirmasi: Dt Kreditorlar, Kt Olingan chegirma.`,
      },
      heading: { en: 'The journal', ru: 'Журнал', uz: 'Jurnal' },
      body: {
        en: `The journal is the record of entries that do not come through normal processing. Many relate to the year end. Examples are writing off irrecoverable debts, changing the allowance for receivables, accruals and prepayments, depreciation and amortisation, buying and disposing of non-current assets, closing inventory, and correcting errors, including clearing a suspense account.

These are often called manual journals. In the FA exam the bank and cash system is assumed not to be integrated, so a manual journal is what posts bank and cash totals to the general ledger.

A computerised system effectively makes journal entries itself. Raising a sales invoice debits receivables and credits sales. Processing a supplier's invoice debits purchases and credits payables.

A journal shows the accounts, the amounts and a brief narrative explaining why. It may also show who prepared it and who approved it. The journal is not a part of the general ledger: its entries are posted to the ledger accounts.

To correct an error, first write down what was posted. Then write down what should have been posted. The journal is whatever turns the first into the second.`,
        ru: `Журнал — это запись операций, которые не проходят через обычную обработку. Многие относятся к концу года. Примеры: списание безнадёжных долгов, изменение резерва по дебиторам, начисления и предоплаты, амортизация, покупка и выбытие внеоборотных активов, запасы на конец и исправление ошибок, включая закрытие счёта неясных сумм.

Их часто называют ручными журналами. На экзамене FA считается, что система банка и кассы не интегрирована, поэтому итоги банка и кассы попадают в главную книгу через ручной журнал.

Компьютерная система по сути сама делает журнальные записи. Выставление счёта покупателю дебетует дебиторов и кредитует продажи. Обработка счёта поставщика дебетует закупки и кредитует кредиторов.

Запись журнала показывает счета, суммы и краткое пояснение причины. Может также показывать, кто подготовил и кто утвердил. Журнал не является частью главной книги: его записи переносятся на счета.

Чтобы исправить ошибку, сначала запишите, что было проведено. Затем запишите, что должно было быть. Журнал — это то, что превращает первое во второе.`,
        uz: `Jurnal — oddiy ishlov berishdan o'tmaydigan yozuvlar qaydi. Ko'pchiligi yil oxiriga tegishli. Misollar: undirib bo'lmaydigan qarzlarni yozib yuborish, debitorlar rezervini o'zgartirish, hisoblangan va oldindan to'langan xarajatlar, amortizatsiya, uzoq muddatli aktivlarni sotib olish va chiqarish, yakuniy zaxira va xatolarni tuzatish, jumladan vaqtinchalik hisobni yopish.

Ularni ko'pincha qo'lda yoziladigan jurnallar deyishadi. FA imtihonida bank va kassa tizimi integratsiyalanmagan deb qabul qilinadi, shuning uchun bank va kassa jamlari bosh kitobga qo'lda jurnal orqali o'tadi.

Kompyuter tizimi aslida jurnal yozuvlarini o'zi qiladi. Mijozga hisob-faktura yozish debitorlarni debetlaydi va sotuvni kreditlaydi. Yetkazib beruvchi hisob-fakturasini ishlash xaridlarni debetlaydi va kreditorlarni kreditlaydi.

Jurnal yozuvi hisoblar, summalar va sababini tushuntiruvchi qisqa izohni ko'rsatadi. Kim tayyorlagani va kim tasdiqlagani ham ko'rsatilishi mumkin. Jurnal bosh kitobning qismi emas: uning yozuvlari hisoblarga o'tkaziladi.

Xatoni tuzatish uchun avval nima yozilganini qayd eting. So'ng nima yozilishi kerak edi, shuni yozing. Jurnal birinchisini ikkinchisiga aylantiradigan yozuvdir.`,
      },
      example: {
        en: `A helper records $300 of depreciation the wrong way round.
# 1. What was posted
  Dr Accumulated depreciation $300, Cr Depreciation expense $300
# 2. What should have been posted
  Dr Depreciation expense $300, Cr Accumulated depreciation $300
# 3. The fix
  First undo the wrong entry ($300), then post the right one ($300)
  Dr Depreciation expense $600, Cr Accumulated depreciation $600
= After the fix, the expense shows $300 debit, which is correct.
! Note: "to correct depreciation posted in reverse". Swapped sides always need double the amount.`,
        ru: `Помощник провёл амортизацию $300 наоборот.
# 1. Что провели
  Дт Накопленная амортизация $300, Кт Расход на амортизацию $300
# 2. Что надо было провести
  Дт Расход на амортизацию $300, Кт Накопленная амортизация $300
# 3. Исправление
  Сначала отменяем неверную запись ($300), затем проводим верную ($300)
  Дт Расход на амортизацию $600, Кт Накопленная амортизация $600
= После исправления расход показывает дебет $300, это верно.
! Пояснение: «исправление амортизации, проведённой наоборот». Перепутанные стороны всегда требуют двойной суммы.`,
        uz: `Yordamchi $300 amortizatsiyani teskari yozdi.
# 1. Nima yozilgan
  Dt To'plangan amortizatsiya $300, Kt Amortizatsiya xarajati $300
# 2. Nima yozilishi kerak edi
  Dt Amortizatsiya xarajati $300, Kt To'plangan amortizatsiya $300
# 3. Tuzatish
  Avval noto'g'ri yozuvni bekor qilamiz ($300), keyin to'g'risini yozamiz ($300)
  Dt Amortizatsiya xarajati $600, Kt To'plangan amortizatsiya $600
= Tuzatishdan keyin xarajat $300 debet ko'rsatadi, bu to'g'ri.
! Izoh: «teskari yozilgan amortizatsiyani tuzatish». Almashgan tomonlar doim ikki baravar summani talab qiladi.`,
      },
      simple: {
        en: `The journal is a diary for unusual entries: year-end adjustments like depreciation, and fixing mistakes. Each journal shows the debit, the credit, the amount and a short note saying why.

To fix a mistake, use three steps: write what was posted, write what should have been posted, and post whatever turns the first into the second. If both sides were swapped, the fix is double the amount.`,
        ru: `Журнал — дневник для необычных записей: корректировок на конец года, например амортизации, и исправления ошибок. В каждой записи журнала есть дебет, кредит, сумма и короткое пояснение, зачем.

Чтобы исправить ошибку, сделайте три шага: запишите, что провели, запишите, что надо было провести, и проведите то, что превращает первое во второе. Если стороны перепутали, исправление — двойная сумма.`,
        uz: `Jurnal — g'ayrioddiy yozuvlar kundaligi: amortizatsiya kabi yil oxiri tuzatishlari va xatolarni to'g'rilash. Har bir jurnal yozuvida debet, kredit, summa va nima uchunligi haqida qisqa izoh bor.

Xatoni tuzatish uchun uch qadam: nima yozilganini yozing, nima yozilishi kerak edi, yozing, va birinchisini ikkinchisiga aylantiradigan yozuvni kiriting. Ikki tomon almashib ketgan bo'lsa, tuzatish ikki baravar summa.`,
      },
    },
    {
      key: {
        en: `- Add up both sides and write the larger total on both sides.
- The missing amount on the smaller side is the balance c/f (or c/d).
- Carry it diagonally to the opposite side below the totals as balance b/f (or b/d).
- Income and expense accounts close to profit or loss and restart at nil.
- Asset, liability and equity balances carry forward to the next period.
- Closing capital = opening capital + capital introduced + profit (or - loss) - drawings.`,
        ru: `- Сложите обе стороны и запишите больший итог на обеих.
- Недостающая сумма на меньшей стороне — остаток на конец (c/f или c/d).
- Перенесите её по диагонали под итоги как остаток на начало (b/f или b/d).
- Счета доходов и расходов закрываются на прибыль или убыток и начинаются с нуля.
- Остатки активов, обязательств и капитала переносятся на следующий период.
- Капитал на конец = капитал на начало + вложенный капитал + прибыль (или - убыток) - изъятия.`,
        uz: `- Ikkala tomonni qo'shing va katta jamni ikkala tomonga yozing.
- Kichik tomondagi yetishmagan summa yakuniy qoldiq (c/f yoki c/d).
- Uni diagonal bo'yicha jamlar ostiga boshlang'ich qoldiq (b/f yoki b/d) qilib o'tkazing.
- Daromad va xarajat hisoblari foyda yoki zararga yopiladi va noldan boshlanadi.
- Aktiv, majburiyat va kapital qoldiqlari keyingi davrga o'tadi.
- Yakuniy kapital = boshlang'ich kapital + kiritilgan kapital + foyda (yoki - zarar) - olib qo'yishlar.`,
      },
      exam: {
        en: `- A balance b/f on the debit side is a debit balance, and on the credit side a credit balance.
- If a T-account has items on the wrong side, move each one to the right side first, then balance it.
- To find closing capital from a list of balances: work out the profit or loss from income and expenses, then add it to or take it from opening capital, then take off drawings.
- With no inventory, cost of sales is simply purchases.
- Finding a missing figure from an account: credit sales = closing receivables + cash from credit customers - opening receivables. Take cash sales out of total cash first.
- Trial balance: debit side = assets, expenses, drawings. Credit side = liabilities, capital, income, and accumulated depreciation and the allowance for receivables.
- A loan and money in the bank are shown separately (credit loan, debit bank), never netted. The allowance for receivables IS taken off receivables: one asset, receivables less allowance.
- Current assets = inventory + receivables + cash at bank. Machinery is non-current, and an overdraft is a liability.`,
        ru: `- Остаток b/f на дебетовой стороне — дебетовый, на кредитовой — кредитовый.
- Если в Т-счёте статьи не на той стороне, сначала перенесите каждую на верную, затем выводите остаток.
- Чтобы найти капитал на конец по списку остатков: посчитайте прибыль или убыток из доходов и расходов, прибавьте к капиталу на начало или вычтите, затем вычтите изъятия.
- Если запасов нет, себестоимость — это просто закупки.
- Найти недостающую сумму по счёту: продажи в кредит = дебиторка на конец + деньги от покупателей в кредит - дебиторка на начало. Сначала уберите из общей суммы денег продажи за наличные.
- Пробный баланс: дебет = активы, расходы, изъятия. Кредит = обязательства, капитал, доходы, а также накопленная амортизация и резерв по дебиторке.
- Кредит и деньги в банке показывают отдельно (кредит — заём, дебет — банк), без взаимозачёта. А резерв ВЫЧИТАЮТ из дебиторки: один актив, дебиторка минус резерв.
- Оборотные активы = запасы + дебиторка + деньги в банке. Оборудование — внеоборотный актив, а овердрафт — обязательство.`,
        uz: `- Debet tomondagi b/f qoldiq debet qoldiq, kredit tomondagisi kredit qoldiq.
- T-hisobda summalar noto'g'ri tomonda bo'lsa, avval har birini to'g'ri tomonga o'tkazing, so'ng qoldiqni chiqaring.
- Qoldiqlar ro'yxatidan yakuniy kapitalni topish: daromad va xarajatlardan foyda yoki zararni hisoblang, boshlang'ich kapitalga qo'shing yoki ayiring, so'ng olib qo'yishlarni ayiring.
- Zaxira bo'lmasa, tannarx shunchaki xaridlar.
- Hisobdan yetishmayotgan summani topish: nasiya sotuv = yakuniy debitorlik + nasiya xaridorlardan pul - boshlang'ich debitorlik. Avval umumiy puldan naqd sotuvni chiqarib tashlang.
- Sinov balansi: debet = aktivlar, xarajatlar, olib qo'yishlar. Kredit = majburiyatlar, kapital, daromadlar, hamda jamg'arilgan amortizatsiya va debitorlik zaxirasi.
- Kredit va bankdagi pul alohida ko'rsatiladi (kredit — qarz, debet — bank), o'zaro hisoblanmaydi. Debitorlik zaxirasi esa debitorlikdan AYIRILADI: bitta aktiv, debitorlik minus zaxira.
- Joriy aktivlar = zaxira + debitorlik + bankdagi pul. Uskunalar uzoq muddatli aktiv, overdraft esa majburiyat.`,
      },
      heading: {
        en: 'Balancing and closing ledger accounts',
        ru: 'Вывод остатков и закрытие счетов',
        uz: 'Hisoblar qoldig\'ini chiqarish va yopish',
      },
      body: {
        en: `At the end of a period each account is balanced. Software does this automatically, but you need to know the method. Total both sides and find the larger. Write that total on both sides. On the side that falls short, insert the balancing figure and call it balance c/f (carried forward) or c/d (carried down). Then bring it down on the opposite side, under the total, as balance b/f (brought forward) or b/d (brought down).

The two kinds of account are treated differently. Income and expense accounts feed the statement of profit or loss. They show no balance c/f. Instead, the balancing figure goes on the smaller side, labelled profit or loss, which leaves the account at nil, ready for the next period.

Asset, liability and equity accounts are carried forward. Their closing balances go into the statement of financial position and become the opening balances of the next period. The bank balance at the end of one day is the bank balance at the start of the next.`,
        ru: `В конце периода по каждому счёту выводится остаток. Программа делает это сама, но метод нужно знать. Сложите обе стороны и найдите большую. Запишите этот итог на обеих сторонах. На стороне, где не хватает, поставьте балансирующую цифру и назовите её balance c/f (перенесено) или c/d. Затем опустите её на противоположную сторону под итогом как balance b/f (принесено) или b/d.

Два вида счетов обрабатываются по-разному. Счета доходов и расходов идут в отчёт о прибыли или убытке. Остатка c/f у них нет. Балансирующая цифра ставится на меньшую сторону с подписью «прибыль или убыток», и счёт обнуляется для следующего периода.

Счета активов, обязательств и капитала переносятся. Их остатки на конец идут в отчёт о финансовом положении и становятся остатками на начало следующего периода. Остаток банка в конце одного дня — это остаток в начале следующего.`,
        uz: `Davr oxirida har bir hisob qoldig'i chiqariladi. Dastur buni o'zi qiladi, lekin usulni bilish kerak. Ikkala tomonni qo'shing va kattasini toping. Shu jamni ikkala tomonga yozing. Yetishmagan tomonga balanslovchi summani qo'ying va uni balance c/f (o'tkazildi) yoki c/d deb nomlang. So'ng uni qarama-qarshi tomonga, jam ostiga balance b/f (keltirildi) yoki b/d qilib tushiring.

Ikki xil hisob turlicha ishlanadi. Daromad va xarajat hisoblari foyda yoki zarar hisobotiga kiradi. Ularda c/f qoldiq bo'lmaydi. Balanslovchi summa kichik tomonga "foyda yoki zarar" deb yoziladi, shunda hisob nolga tushib, keyingi davrga tayyor bo'ladi.

Aktiv, majburiyat va kapital hisoblari keyingi davrga o'tadi. Yakuniy qoldiqlar moliyaviy holat hisobotiga kiradi va keyingi davrning boshlang'ich qoldig'i bo'ladi. Bir kun oxiridagi bank qoldig'i keyingi kun boshidagi qoldiqdir.`,
      },
      example: {
        en: `Balance a shop's bank account after its first weeks.
# 1. Add the debit side (money in)
  Capital $8,000 + loan $3,000 + sales $1,000 + customer $500 = $12,500
# 2. Add the credit side (money out)
  Shelves $3,000 + purchases $4,500 + rent $900 + drawings $600 = $9,000
# 3. Write the bigger total ($12,500) on both sides
  The credit side is short by $12,500 - $9,000 = $3,500
  So write "Balance c/f $3,500" on the credit side
# 4. Bring it down on the other side
  "Balance b/f $3,500" on the debit side, under the totals
= A debit balance of $3,500: the shop has $3,500 in the bank.
The $900 rent account is not carried forward. It closes to profit or loss.`,
        ru: `Закроем банковский счёт магазина после первых недель.
# 1. Сложим дебет (деньги пришли)
  Капитал $8,000 + заём $3,000 + продажи $1,000 + покупатель $500 = $12,500
# 2. Сложим кредит (деньги ушли)
  Полки $3,000 + закупки $4,500 + аренда $900 + изъятия $600 = $9,000
# 3. Пишем большую сумму ($12,500) на обеих сторонах
  Кредиту не хватает $12,500 - $9,000 = $3,500
  Значит пишем «Остаток c/f $3,500» на кредите
# 4. Переносим вниз на другую сторону
  «Остаток b/f $3,500» на дебете, под итогами
= Дебетовый остаток $3,500: у магазина $3,500 в банке.
Счёт аренды $900 не переносится. Он закрывается на прибыль или убыток.`,
        uz: `Do'konning bank hisobini birinchi haftalardan keyin balanslaymiz.
# 1. Debetni qo'shamiz (kirgan pul)
  Kapital $8,000 + qarz $3,000 + sotuv $1,000 + mijoz $500 = $12,500
# 2. Kreditni qo'shamiz (chiqqan pul)
  Javonlar $3,000 + xaridlar $4,500 + ijara $900 + olib qo'yish $600 = $9,000
# 3. Kattaroq jamini ($12,500) ikkala tomonga yozamiz
  Kreditga $12,500 - $9,000 = $3,500 yetmaydi
  Demak kreditga «c/f qoldiq $3,500» yozamiz
# 4. Boshqa tomonga pastga olib tushamiz
  Debetga, jamlar ostiga «b/f qoldiq $3,500»
= $3,500 debet qoldiq: do'konning bankda $3,500 puli bor.
$900 ijara hisobi o'tkazilmaydi. U foyda yoki zararga yopiladi.`,
      },
      simple: {
        en: `At the end of a period you "balance" each account to see what is left in it.

Add up both sides. Write the bigger total on both sides. The gap on the smaller side is the balance c/f (carried forward). Write it again under the totals on the other side as balance b/f (brought forward): that is the opening balance for next time.

Income and expense accounts are different: they are emptied into profit or loss and start again at zero.`,
        ru: `В конце периода каждый счёт «закрывают», чтобы увидеть, что на нём осталось.

Сложите обе стороны. Напишите большую сумму на обеих сторонах. Разница на меньшей стороне — остаток c/f (перенесён). Запишите его ещё раз под итогами на другой стороне как остаток b/f (принесён): это начальный остаток на следующий период.

Счета доходов и расходов другие: они переносятся в прибыль или убыток и начинают снова с нуля.`,
        uz: `Davr oxirida har bir hisobda nima qolganini ko'rish uchun u «balanslanadi».

Ikki tomonni qo'shing. Kattaroq jamini ikkala tomonga yozing. Kichik tomondagi farq — c/f qoldiq (o'tkazilgan). Uni jamlardan pastda boshqa tomonga b/f qoldiq (olib kelingan) sifatida qayta yozing: bu keyingi davrning boshlang'ich qoldig'i.

Daromad va xarajat hisoblari boshqacha: ular foyda yoki zararga o'tkaziladi va yana noldan boshlanadi.`,
      },
    },
  ],
  glossary: [
    {
      term: { en: 'Source document', ru: 'Первичный документ', uz: 'Birlamchi hujjat' },
      definition: {
        en: 'A document that is evidence of a transaction and is used to record it.',
        ru: 'Документ, подтверждающий операцию и используемый для её записи.',
        uz: 'Operatsiyani tasdiqlaydigan va uni yozish uchun ishlatiladigan hujjat.',
      },
      example: {
        en: 'A supplier\'s invoice for $1,000 of kettles is the evidence used to record the purchase.',
        ru: 'Счёт поставщика за чайники на $1,000 — основание для записи покупки.',
        uz: 'Yetkazib beruvchining $1,000 lik choynaklar uchun hisob-fakturasi xaridni yozish uchun asos.',
      },
    },
    {
      term: { en: 'Purchase order', ru: 'Заказ на покупку', uz: 'Xarid buyurtmasi' },
      definition: {
        en: 'A request sent to a supplier to supply goods on stated terms.',
        ru: 'Запрос поставщику поставить товар на указанных условиях.',
        uz: 'Yetkazib beruvchiga belgilangan shartlarda tovar so\'rab yuboriladigan so\'rov.',
      },
      example: {
        en: '"Please send 50 kettles at $20 each, delivery by Friday."',
        ru: '«Пришлите 50 чайников по $20, доставка до пятницы.»',
        uz: '«Har biri $20 dan 50 ta choynak yuboring, juma kuniga qadar.»',
      },
    },
    {
      term: { en: 'Delivery note', ru: 'Накладная', uz: 'Yetkazib berish xati' },
      definition: {
        en: 'A list from the supplier of the goods delivered. Also called a despatch note.',
        ru: 'Список доставленных товаров от поставщика.',
        uz: 'Yetkazib beruvchidan yetkazilgan tovarlar ro\'yxati.',
      },
      example: {
        en: 'The box of kettles arrives with a slip saying "50 kettles".',
        ru: 'Коробка с чайниками приходит с листком «50 чайников».',
        uz: 'Choynaklar qutisi «50 ta choynak» degan qog\'oz bilan keladi.',
      },
    },
    {
      term: { en: 'Goods received note', ru: 'Акт приёмки', uz: 'Qabul qilish xati' },
      definition: {
        en: 'The buyer\'s own record of what arrived.',
        ru: 'Собственная запись покупателя о том, что прибыло.',
        uz: 'Xaridorning nima kelgani haqidagi o\'z yozuvi.',
      },
      example: {
        en: 'You count the kettles, find 48, and write "48 received".',
        ru: 'Вы пересчитываете чайники, находите 48 и пишете «получено 48».',
        uz: 'Choynaklarni sanab, 48 ta topasiz va «48 ta qabul qilindi» deb yozasiz.',
      },
    },
    {
      term: { en: 'Invoice', ru: 'Счёт-фактура', uz: 'Hisob-faktura' },
      definition: {
        en: 'The seller\'s request for payment, showing the goods, the date, the amount and any sales tax.',
        ru: 'Запрос продавца об оплате с товаром, датой, суммой и налогом с продаж.',
        uz: 'Sotuvchining tovar, sana, summa va sotuv solig\'i ko\'rsatilgan to\'lov so\'rovi.',
      },
      example: {
        en: '"50 kettles × $20 = $1,000, please pay within 30 days."',
        ru: '«50 чайников × $20 = $1,000, оплатите в течение 30 дней.»',
        uz: '«50 ta choynak × $20 = $1,000, 30 kun ichida to\'lang.»',
      },
    },
    {
      term: { en: 'Credit note', ru: 'Кредит-нота', uz: 'Kredit-nota' },
      definition: {
        en: 'A document from the seller cancelling all or part of an invoice.',
        ru: 'Документ продавца, отменяющий весь счёт или его часть.',
        uz: 'Sotuvchining hisob-fakturani butunlay yoki qisman bekor qiluvchi hujjati.',
      },
      example: {
        en: 'The supplier sends a note taking $40 off the invoice for 2 missing kettles.',
        ru: 'Поставщик присылает документ, снимающий $40 со счёта за 2 недостающих чайника.',
        uz: 'Yetkazib beruvchi yetishmagan 2 ta choynak uchun hisobdan $40 ni olib tashlovchi hujjat yuboradi.',
      },
    },
    {
      term: { en: 'Remittance advice', ru: 'Извещение об оплате', uz: 'To\'lov xabarnomasi' },
      definition: {
        en: 'A note from the buyer showing which items a payment covers.',
        ru: 'Сообщение покупателя о том, какие позиции покрывает платёж.',
        uz: 'Xaridorning to\'lov qaysi summalarni qoplashi haqidagi xabari.',
      },
      example: {
        en: '"This payment of $960 settles invoice 1234."',
        ru: '«Этот платёж $960 оплачивает счёт 1234.»',
        uz: '«Bu $960 lik to\'lov 1234-hisob-fakturani yopadi.»',
      },
    },
    {
      term: { en: 'Duality', ru: 'Двойственность', uz: 'Ikki tomonlamalik' },
      definition: {
        en: 'Every transaction has two equal effects.',
        ru: 'У каждой операции два равных эффекта.',
        uz: 'Har bir operatsiyaning ikkita teng ta\'siri bor.',
      },
      example: {
        en: 'Buying a $3,000 shelf with cash: shelves go up $3,000 and cash goes down $3,000.',
        ru: 'Покупка полки за $3,000 наличными: полки +$3,000, деньги -$3,000.',
        uz: '$3,000 lik javonni naqdga olish: javonlar +$3,000, pul -$3,000.',
      },
    },
    {
      term: { en: 'Accounting equation', ru: 'Бухгалтерское уравнение', uz: 'Hisob tenglamasi' },
      definition: {
        en: 'Assets = equity + liabilities.',
        ru: 'Активы = капитал + обязательства.',
        uz: 'Aktivlar = kapital + majburiyatlar.',
      },
      example: {
        en: 'Assets $12,000 = capital $8,000 + liabilities $4,000.',
        ru: 'Активы $12,000 = капитал $8,000 + обязательства $4,000.',
        uz: 'Aktivlar $12,000 = kapital $8,000 + majburiyatlar $4,000.',
      },
    },
    {
      term: { en: 'Capital', ru: 'Капитал', uz: 'Kapital' },
      definition: {
        en: 'What the business owes its owner: money put in plus profits kept, less drawings.',
        ru: 'Что бизнес «должен» владельцу: вложенные деньги плюс оставленная прибыль минус изъятия.',
        uz: 'Biznesning egasiga «qarzi»: qo\'yilgan pul plus qoldirilgan foyda minus olib qo\'yishlar.',
      },
      example: {
        en: 'Put in $8,000 + profit $400 - drawings $600 = capital $7,800.',
        ru: 'Вложено $8,000 + прибыль $400 - изъятия $600 = капитал $7,800.',
        uz: 'Qo\'yilgan $8,000 + foyda $400 - olib qo\'yish $600 = kapital $7,800.',
      },
    },
    {
      term: { en: 'Receivable', ru: 'Дебиторская задолженность', uz: 'Debitorlik qarzi' },
      definition: {
        en: 'Money that a customer owes the business for goods or services already supplied.',
        ru: 'Деньги, которые покупатель должен бизнесу за уже поставленные товары или услуги.',
        uz: 'Mijozning allaqachon berilgan tovar yoki xizmat uchun biznesga qarzi.',
      },
      example: {
        en: 'You sell $400 of goods on credit. Until the customer pays, you have a $400 receivable.',
        ru: 'Вы продали товар на $400 в кредит. Пока покупатель не заплатит, у вас дебиторская задолженность $400.',
        uz: '$400 lik tovarni nasiyaga sotdingiz. Mijoz to\'lamaguncha, sizda $400 debitorlik qarzi bor.',
      },
    },
    {
      term: { en: 'Payable', ru: 'Кредиторская задолженность', uz: 'Kreditorlik qarzi' },
      definition: {
        en: 'Money the business owes a supplier for goods or services already received.',
        ru: 'Деньги, которые бизнес должен поставщику за уже полученные товары или услуги.',
        uz: 'Biznesning allaqachon olingan tovar yoki xizmat uchun yetkazib beruvchiga qarzi.',
      },
      example: {
        en: 'You buy $1,000 of goods and pay only $600. The other $400 is a payable.',
        ru: 'Вы купили товар на $1,000 и заплатили только $600. Остальные $400 — кредиторская задолженность.',
        uz: '$1,000 lik tovar olib, faqat $600 to\'ladingiz. Qolgan $400 — kreditorlik qarzi.',
      },
    },
    {
      term: { en: 'Standing data', ru: 'Постоянные данные', uz: 'Doimiy ma\'lumotlar' },
      definition: {
        en: 'Data used repeatedly for regular transactions, such as price lists and pay rates.',
        ru: 'Данные, многократно используемые для регулярных операций, например прайсы и ставки оплаты.',
        uz: 'Muntazam operatsiyalar uchun qayta ishlatiladigan ma\'lumotlar, masalan narxlar va ish haqi stavkalari.',
      },
      example: {
        en: 'The menu price list, used for every sale until prices change.',
        ru: 'Прайс-лист меню, который используется для каждой продажи, пока цены не изменятся.',
        uz: 'Narxlar o\'zgarguncha har bir sotuvda ishlatiladigan menyu narxlari ro\'yxati.',
      },
    },
    {
      term: { en: 'Memorandum records', ru: 'Вспомогательные записи', uz: 'Yordamchi yozuvlar' },
      definition: {
        en: 'Records for management and control that are not part of the double entry.',
        ru: 'Записи для управления и контроля, не входящие в двойную запись.',
        uz: 'Ikki yoqlama yozuvga kirmaydigan boshqaruv va nazorat yozuvlari.',
      },
      example: {
        en: 'The page showing that one office owes the cafe $250.',
        ru: 'Страница, где видно, что один офис должен кафе $250.',
        uz: 'Bitta ofis kafega $250 qarzligini ko\'rsatuvchi sahifa.',
      },
    },
    {
      term: { en: 'Cloud accounting', ru: 'Облачный учёт', uz: 'Bulutli hisob' },
      definition: {
        en: 'Accounting software and data held on remote servers and reached over the internet.',
        ru: 'Учётные программы и данные на удалённых серверах с доступом через интернет.',
        uz: 'Masofaviy serverlardagi va internet orqali kiriladigan hisob dasturi va ma\'lumotlari.',
      },
      example: {
        en: 'Your accountant logs in from another city to see the same figures you see.',
        ru: 'Ваш бухгалтер из другого города входит и видит те же цифры, что и вы.',
        uz: 'Boshqa shahardagi buxgalteringiz kirib, siz ko\'rgan raqamlarni ko\'radi.',
      },
    },
    {
      term: { en: 'General ledger', ru: 'Главная книга', uz: 'Bosh kitob' },
      definition: {
        en: 'All the ledger accounts of a business. Also called the nominal ledger.',
        ru: 'Все счета бизнеса вместе.',
        uz: 'Biznesning barcha hisoblari.',
      },
      example: {
        en: 'All the accounts together: bank, sales, rent, capital, loan and the rest.',
        ru: 'Все счета вместе: банк, продажи, аренда, капитал, заём и остальные.',
        uz: 'Barcha hisoblar birga: bank, sotuv, ijara, kapital, qarz va boshqalar.',
      },
    },
    {
      term: { en: 'Ledger account', ru: 'Счёт', uz: 'Hisob' },
      definition: {
        en: 'A record of all transactions for one asset, liability, equity, income or expense item.',
        ru: 'Запись всех операций по одному активу, обязательству, капиталу, доходу или расходу.',
        uz: 'Bitta aktiv, majburiyat, kapital, daromad yoki xarajat bo\'yicha barcha operatsiyalar yozuvi.',
      },
      example: {
        en: 'The rent account lists every rent payment in the year.',
        ru: 'Счёт аренды содержит каждый платёж за аренду за год.',
        uz: 'Ijara hisobida yil davomidagi har bir ijara to\'lovi bor.',
      },
    },
    {
      term: { en: 'Double entry', ru: 'Двойная запись', uz: 'Ikki yoqlama yozuv' },
      definition: {
        en: 'Recording every transaction twice, as a debit in one account and an equal credit in another.',
        ru: 'Запись каждой операции дважды: дебет одного счёта и равный кредит другого.',
        uz: 'Har bir operatsiyani ikki marta yozish: bir hisob debeti va boshqa hisobning teng krediti.',
      },
      example: {
        en: 'Paying $900 rent: Dr Rent $900, Cr Bank $900.',
        ru: 'Оплата аренды $900: Дт Аренда $900, Кт Банк $900.',
        uz: '$900 ijara to\'lash: Dt Ijara $900, Kt Bank $900.',
      },
    },
    {
      term: { en: 'Debit and credit', ru: 'Дебет и кредит', uz: 'Debet va kredit' },
      definition: {
        en: 'The two sides of a ledger account: debit on the left, credit on the right. Debits increase expenses, assets and drawings. Credits increase liabilities, income and capital.',
        ru: 'Две стороны счёта: дебет слева, кредит справа. Дебет увеличивает расходы, активы и изъятия. Кредит увеличивает обязательства, доходы и капитал.',
        uz: 'Hisobning ikki tomoni: debet chapda, kredit o\'ngda. Debet xarajatlar, aktivlar va olib qo\'yishlarni oshiradi. Kredit majburiyatlar, daromad va kapitalni oshiradi.',
      },
      example: {
        en: 'A $1,000 cash sale: Dr Bank $1,000 (an asset goes up), Cr Sales $1,000 (income goes up).',
        ru: 'Продажа за $1,000 наличными: Дт Банк $1,000 (актив растёт), Кт Продажи $1,000 (доход растёт).',
        uz: '$1,000 naqd sotuv: Dt Bank $1,000 (aktiv oshadi), Kt Sotuv $1,000 (daromad oshadi).',
      },
    },
    {
      term: { en: 'Journal', ru: 'Журнал', uz: 'Jurnal' },
      definition: {
        en: 'A record of non-routine entries and corrections of errors.',
        ru: 'Запись нестандартных операций и исправления ошибок.',
        uz: 'Nostandart yozuvlar va xatolarni tuzatish qaydi.',
      },
      example: {
        en: '"Dr Depreciation expense $600, Cr Accumulated depreciation $600: to correct an entry posted in reverse."',
        ru: '«Дт Расход на амортизацию $600, Кт Накопленная амортизация $600: исправление записи, проведённой наоборот.»',
        uz: '«Dt Amortizatsiya xarajati $600, Kt To\'plangan amortizatsiya $600: teskari yozilgan yozuvni tuzatish.»',
      },
    },
    {
      term: { en: 'Balance c/f and b/f', ru: 'Остаток c/f и b/f', uz: 'c/f va b/f qoldiq' },
      definition: {
        en: 'The closing balance carried forward, and the same amount brought forward as the next opening balance.',
        ru: 'Остаток на конец, перенесённый вперёд, и та же сумма как остаток на начало следующего периода.',
        uz: 'O\'tkazilgan yakuniy qoldiq va keyingi boshlang\'ich qoldiq sifatida keltirilgan xuddi shu summa.',
      },
      example: {
        en: 'The bank account ends the month with $3,500 c/f, which starts next month as $3,500 b/f.',
        ru: 'Банковский счёт заканчивает месяц с $3,500 c/f, а следующий месяц начинается с $3,500 b/f.',
        uz: 'Bank hisobi oyni $3,500 c/f bilan tugatadi, keyingi oy $3,500 b/f bilan boshlanadi.',
      },
    },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter03;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter03.id] = chapter03;
