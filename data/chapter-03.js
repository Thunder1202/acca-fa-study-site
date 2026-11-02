'use strict';

const chapter03 = {
  id: 'chapter-03',
  titles: {
    en: 'Double-entry bookkeeping',
    ru: 'Двойная запись',
    uz: 'Ikki yoqlama yozuv',
  },
  objectives: [
    { en: 'Explain the main business documents and what each one is for', ru: 'Объяснять основные деловые документы и назначение каждого', uz: 'Asosiy biznes hujjatlari va har birining vazifasini tushuntirish' },
    { en: 'Apply duality and the accounting equation', ru: 'Применять двойственность и бухгалтерское уравнение', uz: 'Ikki tomonlamalik va hisob tenglamasini qo\'llash' },
    { en: 'Describe the parts of an accounting system, including cloud accounting', ru: 'Описывать части системы учёта, включая облачный учёт', uz: 'Hisob tizimi qismlarini, jumladan bulutli hisobni tavsiflash' },
    { en: 'Record transactions in ledger accounts with debits and credits', ru: 'Записывать операции на счетах дебетом и кредитом', uz: 'Operatsiyalarni hisoblarda debet va kredit bilan yozish' },
    { en: 'Use the journal, including to correct errors', ru: 'Использовать журнал, в том числе для исправления ошибок', uz: 'Jurnaldan, jumladan xatolarni tuzatish uchun foydalanish' },
    { en: 'Balance and close ledger accounts', ru: 'Выводить остатки и закрывать счета', uz: 'Hisoblar qoldig\'ini chiqarish va yopish' },
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
- The main petty cash record is the petty cash voucher. A till receipt is attached to it as evidence.`,
        ru: `- Обычный порядок при покупке: заявка, коммерческое предложение, заказ, накладная, акт приёмки, счёт-фактура, выписка, извещение об оплате.
- Счёт-фактура идёт после акта приёмки. Выписка поставщика приходит позже и подводит итог месяца.
- Уведомление об отгрузке сообщает, что товар в пути, поэтому приходит раньше накладной.
- Накладная — не внутренний документ, так как она приходит от поставщика. Список поставщиков, заказ и акт приёмки хранятся внутри бизнеса.
- Счёт на покупку называет товар, показывает долг поставщику и подтверждает возмещение налога с продаж. Он не показывает долги покупателей.
- Счёт-фактура содержит не только сумму к оплате: товар, дату, сумму без налога, налог и сумму с налогом.
- Главный документ по мелкой кассе — кассовый ваучер. Чек прикладывается к нему как подтверждение.`,
        uz: `- Xarid qilishdagi odatiy tartib: so'rovnoma, narx taklifi, xarid buyurtmasi, yetkazib berish xati, qabul qilish xati, hisob-faktura, ko'chirma, to'lov xabarnomasi.
- Hisob-faktura qabul qilish xatidan keyin keladi. Yetkazib beruvchi ko'chirmasi keyinroq keladi va oyni jamlaydi.
- Xabar xati tovar yo'lda ekanini aytadi, shuning uchun yetkazib berish xatidan oldin keladi.
- Yetkazib berish xati ichki hujjat emas, chunki u yetkazib beruvchidan keladi. Yetkazib beruvchilar ro'yxati, xarid buyurtmasi va qabul qilish xati biznes ichida saqlanadi.
- Xarid hisob-fakturasi tovarni ko'rsatadi, yetkazib beruvchiga qarzni bildiradi va sotuv solig'ini qaytarishga asos bo'ladi. U mijozlar qarzini ko'rsatmaydi.
- Hisob-fakturada faqat summa emas: tovar, sana, soliqsiz summa, soliq va soliqli summa bor.
- Kichik kassaning asosiy hujjati kassa vaucheri. Chek unga dalil sifatida qo'shiladi.`,
      },
      heading: {
        en: 'Business documents',
        ru: 'Деловые документы',
        uz: 'Biznes hujjatlari',
      },
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
        en: `Madina orders 50 kettles from a supplier by sending a purchase order. The kettles arrive with a delivery note listing 50. She counts only 48 and writes that on her goods received note. The supplier's invoice is for 50, so she asks for a credit note covering the 2 missing kettles. At the end of the month she pays, and sends a remittance advice showing which invoice the money covers.`,
        ru: `Мадина заказывает у поставщика 50 чайников, отправив заказ на покупку. Чайники приходят с накладной на 50 штук. Она насчитывает только 48 и записывает это в акт приёмки. Счёт поставщика выписан на 50, поэтому она просит кредит-ноту на 2 недостающих чайника. В конце месяца она платит и отправляет извещение об оплате, где указано, какой счёт покрывают деньги.`,
        uz: `Madina xarid buyurtmasini yuborib, yetkazib beruvchidan 50 ta choynak buyurtma qiladi. Choynaklar 50 ta deb yozilgan yetkazib berish xati bilan keladi. U faqat 48 tasini sanaydi va buni qabul qilish xatiga yozadi. Hisob-faktura 50 taga yozilgan, shuning uchun u yetishmayotgan 2 ta choynak uchun kredit-nota so'raydi. Oy oxirida u to'laydi va pul qaysi hisob-fakturani qoplashini ko'rsatuvchi to'lov xabarnomasini yuboradi.`,
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
- If a sole trader takes goods from inventory for use in the business, Dr Non-current assets, Cr Cost of sales. For private use it is Dr Drawings, Cr Cost of sales.`,
        ru: `- Активы не просто равны обязательствам и не всегда больше их. Капитал — третья часть уравнения.
- Капитал — не актив и не обязательство бизнеса. Считайте его отдельной статьёй.
- Получение долга от покупателя не меняет итог активов: банк растёт, дебиторы падают.
- Оплата поставщику уменьшает и активы, и обязательства. Покупка станка в кредит увеличивает и то, и другое.
- Уравнение показывает влияние операции на активы, обязательства и капитал. Это не отчёт о прибыли.
- Владелец, вносящий автомобиль в бизнес, увеличивает капитал без денег: Дт Транспорт, Кт Капитал.
- Если предприниматель берёт товар из запасов для бизнеса: Дт Внеоборотные активы, Кт Себестоимость продаж. Для личных нужд: Дт Изъятия, Кт Себестоимость продаж.`,
        uz: `- Aktivlar shunchaki majburiyatlarga teng emas va doim ulardan katta ham emas. Kapital tenglamaning uchinchi qismi.
- Kapital biznesning aktivi ham, majburiyati ham emas. Uni alohida modda deb hisoblang.
- Mijozdan qarz olish jami aktivlarni o'zgartirmaydi: bank oshadi, debitorlar kamayadi.
- Yetkazib beruvchiga to'lov aktivlar va majburiyatlarni kamaytiradi. Stanokni nasiyaga olish ikkalasini oshiradi.
- Tenglama operatsiyaning aktivlar, majburiyatlar va kapitalga ta'sirini ko'rsatadi. Bu foyda hisoboti emas.
- Egasi biznesga mashina kiritsa, pulsiz kapital oshadi: Dt Transport, Kt Kapital.
- Yakka tadbirkor zaxiradan tovarni biznes uchun olsa: Dt Uzoq muddatli aktivlar, Kt Sotilgan tovar tannarxi. Shaxsiy maqsadda: Dt Olib qo'yishlar, Kt Sotilgan tovar tannarxi.`,
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
        en: `On day one Madina puts in $8,000 and borrows $3,000: assets $11,000 = equity $8,000 + liabilities $3,000. She buys shelves for $3,000 in cash, so the total stays $11,000. She buys $5,500 of inventory, paying $4,500 and owing $1,000. Assets are now $12,000 = equity $8,000 + liabilities $4,000. Then she sells goods that cost $600 for $1,000 cash. Assets rise by $400 to $12,400, and equity rises by the $400 profit to $8,400. Liabilities stay at $4,000, so the equation still holds.`,
        ru: `В первый день Мадина вносит $8,000 и занимает $3,000: активы $11,000 = капитал $8,000 + обязательства $3,000. Она покупает стеллажи за $3,000 наличными, итог остаётся $11,000. Она покупает запасы на $5,500, платит $4,500 и остаётся должна $1,000. Теперь активы $12,000 = капитал $8,000 + обязательства $4,000. Затем она продаёт товар стоимостью $600 за $1,000 наличными. Активы растут на $400 до $12,400, а капитал — на прибыль $400 до $8,400. Обязательства остаются $4,000, и уравнение сохраняется.`,
        uz: `Birinchi kuni Madina $8,000 kiritadi va $3,000 qarz oladi: aktivlar $11,000 = kapital $8,000 + majburiyatlar $3,000. U $3,000 ga naqd javon sotib oladi, jami $11,000 bo'lib qoladi. U $5,500 lik zaxira oladi, $4,500 to'laydi va $1,000 qarz bo'ladi. Endi aktivlar $12,000 = kapital $8,000 + majburiyatlar $4,000. So'ng u $600 lik tovarni $1,000 ga naqd sotadi. Aktivlar $400 ga oshib $12,400 bo'ladi, kapital esa $400 foydaga oshib $8,400 bo'ladi. Majburiyatlar $4,000 bo'lib qoladi, tenglama saqlanadi.`,
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
      heading: {
        en: 'Accounting systems',
        ru: 'Системы учёта',
        uz: 'Hisob tizimlari',
      },
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
        en: `Madina's till slips and supplier invoices are inputs. Her price list is standing data, because she uses it for every sale until prices change. A special 10% bonus for her assistant in December is not, because it applies once. Her software records the sales and updates the ledger, which are the processes. The trial balance, her annual accounts and the list showing which cafes owe her money are outputs. Her page for Cafe Zamin is a memorandum record.`,
        ru: `Кассовые чеки и счета поставщиков Мадины — это входы. Её прайс-лист — постоянные данные, так как она использует его при каждой продаже, пока цены не изменятся. Особая премия 10% помощнику в декабре — нет, потому что она разовая. Её программа записывает продажи и обновляет книгу — это процессы. Оборотная ведомость, годовая отчётность и список, какие кафе ей должны, — выходы. Её страница по Cafe Zamin — вспомогательная запись.`,
        uz: `Madinaning kassa cheklari va yetkazib beruvchi hisob-fakturalari kirish. Narxlar ro'yxati doimiy ma'lumot, chunki narxlar o'zgarguncha har sotuvda ishlatiladi. Dekabrda yordamchisiga berilgan maxsus 10% mukofot doimiy ma'lumot emas, chunki u bir martalik. Dasturi sotuvlarni yozadi va kitobni yangilaydi, bu jarayonlar. Sinov balansi, yillik hisobot va qaysi kafelar qarzdorligi ro'yxati chiqish. Cafe Zamin sahifasi yordamchi yozuv.`,
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
        en: `Madina moves her records to a cloud package. Her accountant in another district can log in to prepare the year-end accounts, and a payroll bureau can reach the wages section. Her shop assistant can record sales but cannot see what others are paid. When Madina's laptop is stolen, no data is lost, because nothing was stored on it. She does now depend on the provider staying in business and keeping its servers safe.`,
        ru: `Мадина переводит учёт в облачный пакет. Её бухгалтер из другого района может войти и подготовить годовую отчётность, а расчётное бюро получает доступ к разделу зарплаты. Продавец может записывать продажи, но не видит, кому сколько платят. Когда у Мадины крадут ноутбук, данные не теряются, потому что на нём ничего не хранилось. Зато теперь она зависит от того, что поставщик продолжит работу и сохранит серверы в безопасности.`,
        uz: `Madina yozuvlarini bulutli dasturga o'tkazadi. Boshqa tumandagi hisobchisi kirib yillik hisobotni tayyorlay oladi, ish haqi byurosi esa ish haqi bo'limiga kira oladi. Sotuvchi sotuvlarni yoza oladi, lekin kimga qancha to'lanishini ko'rmaydi. Madinaning noutbuki o'g'irlanganda ma'lumot yo'qolmaydi, chunki unda hech narsa saqlanmagan. Endi esa u provayder ishlashda davom etishi va serverlarni xavfsiz saqlashiga bog'liq.`,
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
- Money received for goods returned to a supplier is a receipt. Rental income is a receipt too.`,
        ru: `- Обычные дебетовые остатки: активы и расходы, включая изъятия, предоплаты, транспортные расходы на закупку и продажу и запасы на начало.
- Обычные кредитовые остатки: обязательства, капитал и доходы, включая начисления, доход от аренды, возвраты поставщикам и полученные скидки.
- Доставка закупок (carriage in) входит в себестоимость и снижает валовую прибыль. Доставка продаж (carriage out) — расход ниже валовой прибыли.
- Полученная скидка вычитается из закупок, поэтому снижает себестоимость и повышает валовую прибыль.
- Торговая скидка вычитается до записи. Товар по прайсу $800 минус 5% записывается как $760.
- Пополнение мелкой кассы: Дт Мелкая касса, Кт Банк.
- На счёте банка поступление — дебет, выплата — кредит. Овердрафт на начало — кредитовый остаток.
- Деньги за товар, возвращённый поставщику, — поступление. Доход от аренды — тоже поступление.`,
        uz: `- Odatiy debet qoldiqlar: aktivlar va xarajatlar, jumladan olib qo'yishlar, oldindan to'lovlar, kelish va ketish tashuvi hamda boshlang'ich zaxira.
- Odatiy kredit qoldiqlar: majburiyatlar, kapital va daromad, jumladan hisoblangan xarajatlar, ijara daromadi, xarid qaytarishlari va olingan chegirmalar.
- Kelish tashuvi (carriage in) sotilgan tovar tannarxiga kiradi va yalpi foydani kamaytiradi. Ketish tashuvi (carriage out) yalpi foydadan pastdagi xarajat.
- Olingan chegirma xariddan ayiriladi, shuning uchun tannarxni kamaytiradi va yalpi foydani oshiradi.
- Savdo chegirmasi yozuvdan oldin ayiriladi. Ro'yxat narxi $800 minus 5% bo'lgan tovar $760 yoziladi.
- Kichik kassani to'ldirish: Dt Kichik kassa, Kt Bank.
- Bank hisobida kelgan pul debet, chiqqan pul kredit. Boshlang'ich overdraft kredit qoldiq.
- Yetkazib beruvchiga qaytarilgan tovar uchun olingan pul tushum. Ijara daromadi ham tushum.`,
      },
      heading: {
        en: 'Ledger accounts, debits and credits',
        ru: 'Счета, дебет и кредит',
        uz: 'Hisoblar, debet va kredit',
      },
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
        en: `Here are Madina's day-one entries. Her $8,000: Dr Bank, Cr Capital. The loan: Dr Bank $3,000, Cr Loan $3,000. The shelves: Dr Shelves $3,000, Cr Bank $3,000. The goods: Dr Purchases $5,500, Cr Bank $4,500, Cr Payables $1,000. A later cash sale: Dr Bank $1,000, Cr Sales $1,000. Each entry has equal debits and credits, even the one with three lines.`,
        ru: `Вот записи Мадины за первый день. Её $8,000: Дт Банк, Кт Капитал. Кредит: Дт Банк $3,000, Кт Кредит $3,000. Стеллажи: Дт Стеллажи $3,000, Кт Банк $3,000. Товар: Дт Закупки $5,500, Кт Банк $4,500, Кт Кредиторы $1,000. Позже продажа за наличные: Дт Банк $1,000, Кт Продажи $1,000. В каждой записи дебет равен кредиту, даже в записи из трёх строк.`,
        uz: `Mana Madinaning birinchi kungi yozuvlari. Uning $8,000: Dt Bank, Kt Kapital. Kredit: Dt Bank $3,000, Kt Kredit $3,000. Javonlar: Dt Javonlar $3,000, Kt Bank $3,000. Tovar: Dt Xaridlar $5,500, Kt Bank $4,500, Kt Kreditorlar $1,000. Keyingi naqd sotuv: Dt Bank $1,000, Kt Sotuv $1,000. Har bir yozuvda debet kreditga teng, hatto uch qatorlisida ham.`,
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
      heading: {
        en: 'The journal',
        ru: 'Журнал',
        uz: 'Jurnal',
      },
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
        en: `Madina's new helper records the year's depreciation on her shelves the wrong way round: Dr Accumulated depreciation $300, Cr Depreciation expense $300. The correct entry is the opposite, so $300 must be undone and $300 must be posted. The journal is Dr Depreciation expense $600, Cr Accumulated depreciation $600, with the narrative "to correct depreciation on shelves posted in reverse". After it, the expense shows $300 debit, which is right.`,
        ru: `Новый помощник Мадины записывает годовую амортизацию стеллажей наоборот: Дт Накопленная амортизация $300, Кт Расход по амортизации $300. Правильная запись противоположна, поэтому нужно отменить $300 и записать $300. Журнал: Дт Расход по амортизации $600, Кт Накопленная амортизация $600 с пояснением «исправление обратной записи амортизации стеллажей». После этого расход показывает дебет $300, что верно.`,
        uz: `Madinaning yangi yordamchisi javonlarning yillik amortizatsiyasini teskari yozadi: Dt To'plangan amortizatsiya $300, Kt Amortizatsiya xarajati $300. To'g'ri yozuv buning teskarisi, shuning uchun $300 ni bekor qilish va $300 ni yozish kerak. Jurnal: Dt Amortizatsiya xarajati $600, Kt To'plangan amortizatsiya $600, izoh: "javonlar amortizatsiyasi teskari yozilganini tuzatish". Shundan keyin xarajat $300 debet ko'rsatadi, bu to'g'ri.`,
      },
    },
    {
      key: {
        en: `- Add up both sides and write the larger total on both sides.
- The missing amount on the smaller side is the balance c/f (or c/d).
- Carry it diagonally to the opposite side below the totals as balance b/f (or b/d).
- Income and expense accounts close to profit or loss and restart at nil.
- Asset, liability and equity balances carry forward to the next period.
- Closing capital = opening capital + profit (or - loss) - drawings.`,
        ru: `- Сложите обе стороны и запишите больший итог на обеих.
- Недостающая сумма на меньшей стороне — остаток на конец (c/f или c/d).
- Перенесите её по диагонали под итоги как остаток на начало (b/f или b/d).
- Счета доходов и расходов закрываются на прибыль или убыток и начинаются с нуля.
- Остатки активов, обязательств и капитала переносятся на следующий период.
- Капитал на конец = капитал на начало + прибыль (или - убыток) - изъятия.`,
        uz: `- Ikkala tomonni qo'shing va katta jamni ikkala tomonga yozing.
- Kichik tomondagi yetishmagan summa yakuniy qoldiq (c/f yoki c/d).
- Uni diagonal bo'yicha jamlar ostiga boshlang'ich qoldiq (b/f yoki b/d) qilib o'tkazing.
- Daromad va xarajat hisoblari foyda yoki zararga yopiladi va noldan boshlanadi.
- Aktiv, majburiyat va kapital qoldiqlari keyingi davrga o'tadi.
- Yakuniy kapital = boshlang'ich kapital + foyda (yoki - zarar) - olib qo'yishlar.`,
      },
      exam: {
        en: `- A balance b/f on the debit side is a debit balance, and on the credit side a credit balance.
- If a T-account has items on the wrong side, move each one to the right side first, then balance it.
- To find closing capital from a list of balances: work out the profit or loss from income and expenses, then add it to or take it from opening capital, then take off drawings.
- With no inventory, cost of sales is simply purchases.`,
        ru: `- Остаток b/f на дебетовой стороне — дебетовый, на кредитовой — кредитовый.
- Если в Т-счёте статьи не на той стороне, сначала перенесите каждую на верную, затем выводите остаток.
- Чтобы найти капитал на конец по списку остатков: посчитайте прибыль или убыток из доходов и расходов, прибавьте к капиталу на начало или вычтите, затем вычтите изъятия.
- Если запасов нет, себестоимость — это просто закупки.`,
        uz: `- Debet tomondagi b/f qoldiq debet qoldiq, kredit tomondagisi kredit qoldiq.
- T-hisobda summalar noto'g'ri tomonda bo'lsa, avval har birini to'g'ri tomonga o'tkazing, so'ng qoldiqni chiqaring.
- Qoldiqlar ro'yxatidan yakuniy kapitalni topish: daromad va xarajatlardan foyda yoki zararni hisoblang, boshlang'ich kapitalga qo'shing yoki ayiring, so'ng olib qo'yishlarni ayiring.
- Zaxira bo'lmasa, tannarx shunchaki xaridlar.`,
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
        en: `Madina's bank account after her first days shows debits of capital $8,000, loan $3,000, sales $1,000 and a customer's payment $500, which total $12,500. The credits are shelves $3,000, purchases $4,500, rent $900 and drawings $600, which total $9,000. Write $12,500 on both sides. The credit side needs $3,500 more, so that is the balance c/f. Below the totals, the balance b/f is $3,500 on the debit side, a debit balance, meaning she has $3,500 in the bank. Her $900 rent account has no balance c/f: it closes to profit or loss.`,
        ru: `Счёт банка Мадины после первых дней показывает дебет: капитал $8,000, кредит $3,000, продажи $1,000 и оплата покупателя $500, всего $12,500. Кредит: стеллажи $3,000, закупки $4,500, аренда $900 и изъятия $600, всего $9,000. Запишите $12,500 на обеих сторонах. Кредитовой стороне не хватает $3,500, это balance c/f. Под итогами balance b/f $3,500 на дебетовой стороне: дебетовый остаток, то есть у неё в банке $3,500. Счёт аренды $900 не имеет остатка c/f: он закрывается на прибыль или убыток.`,
        uz: `Madinaning birinchi kunlardan keyingi bank hisobida debet: kapital $8,000, kredit $3,000, sotuv $1,000 va mijoz to'lovi $500, jami $12,500. Kredit: javonlar $3,000, xaridlar $4,500, ijara $900 va olib qo'yishlar $600, jami $9,000. Ikkala tomonga $12,500 yozing. Kredit tomonga yana $3,500 kerak, bu balance c/f. Jamlar ostida balance b/f $3,500 debet tomonda, ya'ni debet qoldiq: bankda $3,500 bor. Uning $900 lik ijara hisobida c/f qoldiq yo'q: u foyda yoki zararga yopiladi.`,
      },
    },
  ],
  glossary: [
    { term: { en: 'Source document', ru: 'Первичный документ', uz: 'Birlamchi hujjat' }, definition: { en: 'A document that is evidence of a transaction and is used to record it.', ru: 'Документ, подтверждающий операцию и используемый для её записи.', uz: 'Operatsiyani tasdiqlaydigan va uni yozish uchun ishlatiladigan hujjat.' } },
    { term: { en: 'Purchase order', ru: 'Заказ на покупку', uz: 'Xarid buyurtmasi' }, definition: { en: 'A request sent to a supplier to supply goods on stated terms.', ru: 'Запрос поставщику поставить товар на указанных условиях.', uz: 'Yetkazib beruvchiga belgilangan shartlarda tovar so\'rab yuboriladigan so\'rov.' } },
    { term: { en: 'Delivery note', ru: 'Накладная', uz: 'Yetkazib berish xati' }, definition: { en: 'A list from the supplier of the goods delivered. Also called a despatch note.', ru: 'Список доставленных товаров от поставщика.', uz: 'Yetkazib beruvchidan yetkazilgan tovarlar ro\'yxati.' } },
    { term: { en: 'Goods received note', ru: 'Акт приёмки', uz: 'Qabul qilish xati' }, definition: { en: 'The buyer\'s own record of what arrived.', ru: 'Собственная запись покупателя о том, что прибыло.', uz: 'Xaridorning nima kelgani haqidagi o\'z yozuvi.' } },
    { term: { en: 'Credit note', ru: 'Кредит-нота', uz: 'Kredit-nota' }, definition: { en: 'A document from the seller cancelling all or part of an invoice.', ru: 'Документ продавца, отменяющий весь счёт или его часть.', uz: 'Sotuvchining hisob-fakturani butunlay yoki qisman bekor qiluvchi hujjati.' } },
    { term: { en: 'Remittance advice', ru: 'Извещение об оплате', uz: 'To\'lov xabarnomasi' }, definition: { en: 'A note from the buyer showing which items a payment covers.', ru: 'Сообщение покупателя о том, какие позиции покрывает платёж.', uz: 'Xaridorning to\'lov qaysi summalarni qoplashi haqidagi xabari.' } },
    { term: { en: 'Duality', ru: 'Двойственность', uz: 'Ikki tomonlamalik' }, definition: { en: 'Every transaction has two equal effects.', ru: 'У каждой операции два равных эффекта.', uz: 'Har bir operatsiyaning ikkita teng ta\'siri bor.' } },
    { term: { en: 'Accounting equation', ru: 'Бухгалтерское уравнение', uz: 'Hisob tenglamasi' }, definition: { en: 'Assets = equity + liabilities.', ru: 'Активы = капитал + обязательства.', uz: 'Aktivlar = kapital + majburiyatlar.' } },
    { term: { en: 'Standing data', ru: 'Постоянные данные', uz: 'Doimiy ma\'lumotlar' }, definition: { en: 'Data used repeatedly for regular transactions, such as price lists and pay rates.', ru: 'Данные, многократно используемые для регулярных операций, например прайсы и ставки оплаты.', uz: 'Muntazam operatsiyalar uchun qayta ishlatiladigan ma\'lumotlar, masalan narxlar va ish haqi stavkalari.' } },
    { term: { en: 'Memorandum records', ru: 'Вспомогательные записи', uz: 'Yordamchi yozuvlar' }, definition: { en: 'Records for management and control that are not part of the double entry.', ru: 'Записи для управления и контроля, не входящие в двойную запись.', uz: 'Ikki yoqlama yozuvga kirmaydigan boshqaruv va nazorat yozuvlari.' } },
    { term: { en: 'Cloud accounting', ru: 'Облачный учёт', uz: 'Bulutli hisob' }, definition: { en: 'Accounting software and data held on remote servers and reached over the internet.', ru: 'Учётные программы и данные на удалённых серверах с доступом через интернет.', uz: 'Masofaviy serverlardagi va internet orqali kiriladigan hisob dasturi va ma\'lumotlari.' } },
    { term: { en: 'General ledger', ru: 'Главная книга', uz: 'Bosh kitob' }, definition: { en: 'All the ledger accounts of a business. Also called the nominal ledger.', ru: 'Все счета бизнеса вместе.', uz: 'Biznesning barcha hisoblari.' } },
    { term: { en: 'Ledger account', ru: 'Счёт', uz: 'Hisob' }, definition: { en: 'A record of all transactions for one asset, liability, equity, income or expense item.', ru: 'Запись всех операций по одному активу, обязательству, капиталу, доходу или расходу.', uz: 'Bitta aktiv, majburiyat, kapital, daromad yoki xarajat bo\'yicha barcha operatsiyalar yozuvi.' } },
    { term: { en: 'Journal', ru: 'Журнал', uz: 'Jurnal' }, definition: { en: 'A record of non-routine entries and corrections of errors.', ru: 'Запись нестандартных операций и исправления ошибок.', uz: 'Nostandart yozuvlar va xatolarni tuzatish qaydi.' } },
    { term: { en: 'Balance c/f and b/f', ru: 'Остаток c/f и b/f', uz: 'c/f va b/f qoldiq' }, definition: { en: 'The closing balance carried forward, and the same amount brought forward as the next opening balance.', ru: 'Остаток на конец, перенесённый вперёд, и та же сумма как остаток на начало следующего периода.', uz: 'O\'tkazilgan yakuniy qoldiq va keyingi boshlang\'ich qoldiq sifatida keltirilgan xuddi shu summa.' } },
  ],
};

if (typeof module !== 'undefined') module.exports = chapter03;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapter03.id] = chapter03;
