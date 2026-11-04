'use strict';

// Explanations use step lines: "# " a step, two spaces a line of working, "= " the result, "! " a trap.
(function () {
  const TOPIC = 'chapter-03';
  const questions = [
    {
      id: 'ch03-q59',
      kitRef: 59,
      topicId: 'chapter-03',
      type: 'single',
      text: 'What is a purchase order mainly used for?',
      explanation: {
        en: `A purchase order goes FROM the buyer TO a supplier, asking for goods on the terms written in it.
- Telling a supplier a payment was made: that is a remittance advice.
- Asking a supplier to supply goods on its terms: this is the purchase order.
- Confirming to a customer what they will get: that would come from a seller, not a buyer.
- Setting out the price charged for goods already sent: that is an invoice.
= Answer: to ask a supplier to supply goods on the terms it states`,
        ru: `Заказ на покупку идёт ОТ покупателя К поставщику с просьбой поставить товар на указанных условиях.
- Сообщить поставщику, что оплата сделана: это извещение об оплате.
- Попросить поставщика поставить товар на условиях заказа: это и есть заказ на покупку.
- Подтвердить покупателю, что он получит: это шло бы от продавца, а не от покупателя.
- Указать цену за уже отправленный товар: это счёт-фактура.
= Ответ: попросить поставщика поставить товар на указанных в нём условиях`,
        uz: `Xarid buyurtmasi xaridordan yetkazib beruvchiga yuboriladi va unda yozilgan shartlarda tovar so'raladi.
- Yetkazib beruvchiga to'lov qilinganini aytish: bu to'lov xabarnomasi.
- Yetkazib beruvchidan buyurtma shartlarida tovar so'rash: bu xarid buyurtmasi.
- Mijozga nima olishini tasdiqlash: bu xaridordan emas, sotuvchidan keladi.
- Yuborilgan tovar narxini ko'rsatish: bu hisob-faktura.
= Javob: yetkazib beruvchidan unda ko'rsatilgan shartlarda tovar yetkazishni so'rash`,
      },
      options: [
        'To tell a supplier that a payment has been made',
        'To ask a supplier to supply goods on the terms it states',
        'To confirm to a customer the goods they will receive',
        'To set out the price a supplier has charged for goods already sent',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q60',
      kitRef: 60,
      topicId: 'chapter-03',
      type: 'single',
      text: 'What does a goods despatched note (delivery note) do?',
      explanation: {
        en: `A delivery (despatch) note travels WITH the goods, from the supplier to the customer, and lists what is in the box.
- Customer sending faulty goods back: that would go with returned goods, not a delivery.
- Customer telling the supplier what to send: that is a purchase order.
- Supplier promising goods later: that is an advice note, which comes before delivery.
- Supplier listing the type and quantity delivered: this is the delivery note.
= Answer: a supplier uses it to list the type and quantity of goods delivered to a customer`,
        ru: `Накладная едет ВМЕСТЕ с товаром от поставщика к покупателю и перечисляет, что в коробке.
- Покупатель возвращает брак: это сопровождало бы возврат, а не доставку.
- Покупатель сообщает поставщику, что прислать: это заказ на покупку.
- Поставщик обещает товар позже: это уведомление, оно приходит до доставки.
- Поставщик перечисляет вид и количество доставленного: это и есть накладная.
= Ответ: поставщик перечисляет в ней вид и количество товара, доставленного покупателю`,
        uz: `Yetkazib berish xati tovar BILAN birga yetkazib beruvchidan mijozga boradi va qutida nima borligini sanaydi.
- Mijoz nuqsonli tovarni qaytaradi: bu yetkazib berish emas, qaytarish bilan boradi.
- Mijoz yetkazib beruvchiga nima yuborishni aytadi: bu xarid buyurtmasi.
- Yetkazib beruvchi tovarni keyinroq va'da qiladi: bu ogohlantirish xati, yetkazishdan oldin keladi.
- Yetkazib beruvchi yetkazilgan tovar turi va sonini sanaydi: bu yetkazib berish xati.
= Javob: yetkazib beruvchi unda mijozga yetkazilgan tovar turi va sonini sanaydi`,
      },
      options: [
        'A customer uses it to send faulty goods back to a supplier',
        'A customer uses it to tell a supplier what goods to send',
        'A supplier uses it to promise goods at a future date',
        'A supplier uses it to list the type and quantity of goods delivered to a customer',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch03-q61',
      kitRef: 61,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which statement best defines an invoice?',
      explanation: {
        en: `An invoice is the seller saying "please pay me". It goes from the business to its customer.
- Sent to a customer to request payment: correct.
- Sent to a supplier to confirm goods arrived: that is a goods received note, and it stays inside the business.
- Shows only the unpaid amount / nothing except the total: too narrow. An invoice also shows the goods, the date, the net amount, sales tax and the gross amount.
= Answer: a document a business sends to a customer to request payment for goods or services provided`,
        ru: `Счёт-фактура — продавец говорит «пожалуйста, заплатите». Он идёт от бизнеса к покупателю.
- Отправляется покупателю с просьбой оплатить: верно.
- Отправляется поставщику, чтобы подтвердить получение: это акт приёмки, он остаётся внутри бизнеса.
- Показывает только неоплаченную сумму / только итог: слишком узко. В счёте ещё товар, дата, сумма без налога, налог с продаж и сумма с налогом.
= Ответ: документ, который бизнес отправляет покупателю с просьбой оплатить товары или услуги`,
        uz: `Hisob-faktura — sotuvchining «iltimos, to'lang» degani. U biznesdan mijozga boradi.
- Mijozga to'lov so'rab yuboriladi: to'g'ri.
- Tovar kelganini tasdiqlash uchun yetkazib beruvchiga: bu qabul qilish xati, u biznes ichida qoladi.
- Faqat to'lanmagan summa / faqat jami: juda tor. Hisob-fakturada tovar, sana, soliqsiz summa, sotuv solig'i va soliqli summa ham bor.
= Javob: biznes mijozga tovar yoki xizmat uchun to'lov so'rab yuboradigan hujjat`,
      },
      options: [
        'A document a business sends to a customer to request payment for goods or services provided',
        'A document a business sends to a supplier to confirm goods were received',
        'A document a business sends to a customer showing only the amount unpaid',
        'A document that shows nothing except the total to be paid',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch03-q62',
      kitRef: 62,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Why does a business issue a credit note?',
      explanation: {
        en: `A credit note makes the customer owe LESS. It cancels all or part of an invoice, usually because goods came back or were damaged.
# Example
  Invoice for 50 kettles: $1,000. Two arrive broken.
  Credit note for 2 × $20 = $40, so the customer now owes $960.
- "Acknowledges a credit sale": a credit sale is shown by the invoice itself.
- Deposit or creditworthiness: nothing to do with credit notes.
= Answer: to cancel all or part of a sales invoice`,
        ru: `Кредит-нота уменьшает долг покупателя. Она отменяет весь счёт или его часть, обычно из-за возврата или брака.
# Пример
  Счёт за 50 чайников: $1,000. Два пришли разбитыми.
  Кредит-нота на 2 × $20 = $40, теперь покупатель должен $960.
- «Подтверждает продажу в кредит»: продажу в кредит показывает сам счёт.
- Задаток или кредитоспособность: к кредит-ноте не относятся.
= Ответ: отменить весь счёт или его часть`,
        uz: `Kredit-nota mijoz qarzini KAMAYTIRADI. U odatda qaytarish yoki nuqson tufayli hisob-fakturaning hammasini yoki bir qismini bekor qiladi.
# Misol
  50 ta choynak uchun hisob: $1,000. Ikkitasi singan keldi.
  2 × $20 = $40 lik kredit-nota, endi mijoz $960 qarz.
- «Nasiya sotuvni tasdiqlaydi»: nasiya sotuvni hisob-fakturaning o'zi ko'rsatadi.
- Avans yoki kredit qobiliyati: kredit-notaga aloqasi yo'q.
= Javob: sotuv hisob-fakturasining hammasini yoki bir qismini bekor qilish`,
      },
      options: [
        'To acknowledge a sale made on credit',
        'To record a deposit paid for goods',
        'To cancel all or part of a sales invoice',
        'To report how creditworthy a new customer is',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q63',
      kitRef: 63,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is NOT an internal purchasing document of the buying business?',
      explanation: {
        en: `"Internal" means written and kept inside the buying business. Look for the one that comes from outside.
- Goods received note: written by the buyer when goods arrive. Internal.
- Purchase order: written by the buyer. Internal (a copy is sent out).
- Delivery note: written by the SUPPLIER and arrives with the goods. Not internal.
- Supplier list: the buyer's own list of approved suppliers. Internal.
= Answer: delivery note`,
        ru: `«Внутренний» — составлен и хранится внутри бизнеса-покупателя. Ищите тот, что пришёл снаружи.
- Акт приёмки: пишет покупатель при получении товара. Внутренний.
- Заказ на покупку: пишет покупатель. Внутренний (копию отправляют).
- Накладная: пишет ПОСТАВЩИК, приходит с товаром. Не внутренний.
- Список поставщиков: собственный список покупателя. Внутренний.
= Ответ: накладная`,
        uz: `«Ichki» — xaridor biznesi ichida yozilgan va saqlanadigan. Tashqaridan kelganini qidiring.
- Qabul qilish xati: tovar kelganda xaridor yozadi. Ichki.
- Xarid buyurtmasi: xaridor yozadi. Ichki (nusxasi yuboriladi).
- Yetkazib berish xati: YETKAZIB BERUVCHI yozadi, tovar bilan keladi. Ichki emas.
- Yetkazib beruvchilar ro'yxati: xaridorning o'z ro'yxati. Ichki.
= Javob: yetkazib berish xati`,
      },
      options: ['Goods received note', 'Purchase order', 'Delivery note', 'Supplier list'],
      correctIndex: 2,
    },
    {
      id: 'ch03-q64',
      kitRef: 64,
      topicId: 'chapter-03',
      type: 'single',
      text: 'What is a remittance advice for?',
      explanation: {
        en: `A remittance advice goes with a payment (or announces it) and tells the supplier exactly what the money is for.
# Example
  "This $960 pays invoice 1234." The supplier now knows which invoice to clear.
- Which goods were received: a goods received note.
- Confirming payment arrived: a receipt.
- Announcing goods were sent: an advice note.
= Answer: to show which items are now being paid`,
        ru: `Извещение об оплате сопровождает платёж (или сообщает о нём) и говорит поставщику, за что именно деньги.
# Пример
  «Эти $960 оплачивают счёт 1234.» Поставщик знает, какой счёт закрыть.
- Какой товар получен: акт приёмки.
- Подтверждение, что деньги пришли: квитанция.
- Сообщение, что товар отправлен: уведомление об отправке.
= Ответ: показать, какие позиции сейчас оплачиваются`,
        uz: `To'lov xabarnomasi to'lov bilan birga boradi (yoki u haqda xabar beradi) va pul aynan nima uchunligini aytadi.
# Misol
  «Bu $960 1234-hisob-fakturani to'laydi.» Yetkazib beruvchi qaysi hisobni yopishni biladi.
- Qanday tovar olingan: qabul qilish xati.
- Pul kelganini tasdiqlash: kvitansiya.
- Tovar yuborilgani haqida xabar: ogohlantirish xati.
= Javob: hozir qaysi moddalar to'lanayotganini ko'rsatish`,
      },
      options: [
        'To show which goods were received',
        'To show which items are now being paid',
        'To confirm that a payment has arrived',
        'To announce that goods have been sent',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q65',
      kitRef: 65,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these are purposes of a purchase invoice? (1) To support the claim for sales tax. (2) To identify the goods bought. (3) To show the amount owed to the supplier. (4) To show the amount owed by a customer.',
      explanation: {
        en: `A purchase invoice is one YOUR SUPPLIER sends YOU. Ask what it can tell you.
- (1) Supports your sales tax claim: yes, it shows the tax you paid.
- (2) Identifies the goods bought: yes.
- (3) Shows what you owe the supplier: yes.
- (4) Shows what a customer owes you: no. Your customers have nothing to do with a supplier's invoice.
= Answer: 1, 2 and 3 only`,
        ru: `Счёт на покупку присылает ВАМ ВАШ поставщик. Спросите, что он может сообщить.
- (1) Подтверждает возмещение налога с продаж: да, в нём виден уплаченный налог.
- (2) Указывает купленный товар: да.
- (3) Показывает ваш долг поставщику: да.
- (4) Показывает долг покупателя перед вами: нет. Ваши покупатели к счёту поставщика отношения не имеют.
= Ответ: только 1, 2 и 3`,
        uz: `Xarid hisob-fakturasini SIZGA yetkazib beruvchingiz yuboradi. U nimani aytishi mumkinligini so'rang.
- (1) Sotuv solig'ini qaytarishni tasdiqlaydi: ha, unda to'langan soliq ko'rinadi.
- (2) Sotib olingan tovarni ko'rsatadi: ha.
- (3) Yetkazib beruvchiga qarzingizni ko'rsatadi: ha.
- (4) Mijozning sizga qarzini ko'rsatadi: yo'q. Mijozlaringizning yetkazib beruvchi hisobiga aloqasi yo'q.
= Javob: faqat 1, 2 va 3`,
      },
      options: ['2 and 3 only', '1, 2 and 3 only', '1 and 2 only', '1, 2, 3 and 4'],
      correctIndex: 1,
    },
    {
      id: 'ch03-q66',
      kitRef: 66,
      topicId: 'chapter-03',
      type: 'single',
      text: 'In the usual buying process, which document comes after the goods received note?',
      explanation: {
        en: `Put the buying steps in order and find what follows the goods received note.
# The usual order
  Requisition, quotation, purchase order, advice note, delivery note, goods received note, INVOICE, statement, remittance advice
- The advice note and delivery note come before the goods received note.
- The statement comes at the end of the month.
= Answer: invoice
Once the goods are in and recorded, the next step is being charged for them.`,
        ru: `Расставьте шаги покупки по порядку и найдите, что идёт после акта приёмки.
# Обычный порядок
  Заявка, предложение цены, заказ, уведомление, накладная, акт приёмки, СЧЁТ, выписка, извещение об оплате
- Уведомление и накладная идут до акта приёмки.
- Выписка приходит в конце месяца.
= Ответ: счёт-фактура
Когда товар получен и записан, следующий шаг — счёт за него.`,
        uz: `Xarid bosqichlarini tartibga keltirib, qabul qilish xatidan keyin nima kelishini toping.
# Odatiy tartib
  Talabnoma, narx taklifi, buyurtma, ogohlantirish xati, yetkazib berish xati, qabul qilish xati, HISOB-FAKTURA, ko'chirma, to'lov xabarnomasi
- Ogohlantirish va yetkazib berish xatlari qabul qilish xatidan oldin.
- Ko'chirma oy oxirida keladi.
= Javob: hisob-faktura
Tovar kelib yozilgach, keyingi qadam uning uchun hisob.`,
      },
      options: ['Statement', 'Delivery note', 'Advice note', 'Invoice'],
      correctIndex: 3,
    },
    {
      id: 'ch03-q67',
      kitRef: 67,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Rano receives a document from Oasis Office Supplies asking her to pay for six boxes of paper delivered last week. What is this document to Rano?',
      explanation: {
        en: `Ask two questions: who is Rano, and what is the document asking for?
- Rano bought the paper, so she is the buyer.
- The document asks her to pay. A supplier asking a buyer to pay is an invoice, and to the buyer it is a PURCHASE invoice.
- Receipt: comes after paying. Credit note: reduces the debt. Goods received note: Rano's own internal record.
= Answer: a purchase invoice`,
        ru: `Задайте два вопроса: кто Рано и о чём просит документ?
- Рано купила бумагу, значит она покупатель.
- Документ просит её заплатить. Поставщик просит покупателя заплатить — это счёт, а для покупателя это счёт НА ПОКУПКУ.
- Квитанция: после оплаты. Кредит-нота: уменьшает долг. Акт приёмки: внутренняя запись самой Рано.
= Ответ: счёт на покупку`,
        uz: `Ikki savol bering: Rano kim va hujjat nimani so'raydi?
- Rano qog'ozni sotib olgan, demak u xaridor.
- Hujjat undan to'lashni so'raydi. Yetkazib beruvchining xaridordan to'lov so'rashi — hisob-faktura, xaridor uchun esa XARID hisob-fakturasi.
- Kvitansiya: to'lovdan keyin. Kredit-nota: qarzni kamaytiradi. Qabul qilish xati: Ranoning o'z ichki yozuvi.
= Javob: xarid hisob-fakturasi`,
      },
      options: ['A purchase invoice', 'A credit note', 'A goods received note', 'A receipt'],
      correctIndex: 0,
    },
    {
      id: 'ch03-q68',
      kitRef: 68,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which document is the main record of a petty cash payment?',
      explanation: {
        en: `Every petty cash payment needs one signed, authorised slip that the bookkeeper records from. That is the petty cash voucher.
- Till receipt: only evidence, stapled to the voucher.
- A staff I.O.U.: money should not be lent out of petty cash.
- Supplier invoice: used for credit purchases, not small cash payments.
= Answer: a petty cash voucher`,
        ru: `Для каждой выплаты из мелкой кассы нужен один подписанный, утверждённый листок, по которому делают запись. Это расходный ордер мелкой кассы.
- Кассовый чек: только доказательство, его прикрепляют к ордеру.
- Расписка сотрудника: давать в долг из мелкой кассы нельзя.
- Счёт поставщика: для покупок в кредит, а не мелких наличных расходов.
= Ответ: расходный ордер мелкой кассы`,
        uz: `Mayda kassadan har bir to'lov uchun yozuv asosi bo'ladigan bitta imzolangan, tasdiqlangan varaqa kerak. Bu mayda kassa orderi.
- Kassa cheki: faqat dalil, orderga biriktiriladi.
- Xodim tilxati: mayda kassadan qarz berilmaydi.
- Yetkazib beruvchi hisob-fakturasi: kichik naqd to'lovlar uchun emas, nasiya xaridlar uchun.
= Javob: mayda kassa orderi`,
      },
      options: ['A petty cash voucher', 'A till receipt', 'A staff I.O.U.', 'A supplier invoice'],
      correctIndex: 0,
    },
    {
      id: 'ch03-q69',
      kitRef: 69,
      topicId: 'chapter-03',
      type: 'single',
      text: 'A bookkeeper wants to enter a cash banking in the bank ledger account. Which document is a source document for this?',
      explanation: {
        en: `A source document must show MONEY. Which one records cash going into the bank?
- Goods received note and delivery note: show quantities of goods, not money.
- Paying-in slip: shows exactly how much was paid into the bank. Yes.
- Supplier statement: only sums up items already recorded.
= Answer: paying-in slip`,
        ru: `Первичный документ должен показывать ДЕНЬГИ. Какой из них фиксирует внесение денег в банк?
- Акт приёмки и накладная: показывают количество товара, а не деньги.
- Приходный ордер банка (paying-in slip): показывает, сколько внесли в банк. Да.
- Выписка поставщика: лишь суммирует уже записанное.
= Ответ: приходный ордер банка`,
        uz: `Birlamchi hujjat PULNI ko'rsatishi kerak. Qaysi biri bankka pul topshirilganini qayd etadi?
- Qabul qilish va yetkazib berish xatlari: pulni emas, tovar sonini ko'rsatadi.
- Bankka pul topshirish varaqasi (paying-in slip): bankka qancha topshirilganini ko'rsatadi. Ha.
- Yetkazib beruvchi ko'chirmasi: faqat yozilganlarni jamlaydi.
= Javob: bankka pul topshirish varaqasi`,
      },
      options: ['Goods received note', 'Delivery note', 'Paying-in slip', 'Supplier statement'],
      correctIndex: 2,
    },
    {
      id: 'ch03-q70',
      kitRef: 70,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Sami runs a shop selling printers as a sole trader. Sami takes one printer from the storeroom to use permanently in the shop office. What is the double entry?',
      explanation: {
        en: `Follow the printer. It stops being goods for sale and becomes equipment the shop keeps using.
# Step 1: What goes up?
  Equipment used in the business = non-current assets. Debit it.
# Step 2: What goes down?
  Goods for sale. Remove the printer's cost from cost of sales: credit cost of sales.
= Answer: Dr Non-current assets, Cr Cost of sales
! Common trap: drawings. Drawings are only for things the OWNER takes for private use. This printer stays in the business.`,
        ru: `Следите за принтером. Он перестаёт быть товаром для продажи и становится оборудованием магазина.
# Шаг 1: Что растёт?
  Оборудование для бизнеса = внеоборотные активы. Дебетуем.
# Шаг 2: Что уменьшается?
  Товар для продажи. Убираем стоимость принтера из себестоимости: кредит себестоимости.
= Ответ: Дт Внеоборотные активы, Кт Себестоимость
! Частая ошибка: изъятия. Изъятия — только то, что ВЛАДЕЛЕЦ берёт для личных нужд. Этот принтер остаётся в бизнесе.`,
        uz: `Printerni kuzating. U sotiladigan tovar bo'lmay qoladi va do'kon uskunasiga aylanadi.
# 1-qadam: Nima oshadi?
  Biznes uskunasi = uzoq muddatli aktivlar. Debetlaymiz.
# 2-qadam: Nima kamayadi?
  Sotiladigan tovar. Printer tannarxini sotilgan tovar tannarxidan chiqaramiz: tannarxni kreditlaymiz.
= Javob: Dt Uzoq muddatli aktivlar, Kt Tannarx
! Ko'p uchraydigan xato: olib qo'yishlar. Olib qo'yish — faqat EGASI shaxsiy ehtiyoj uchun olgan narsa. Bu printer biznesda qoladi.`,
      },
      options: [
        'Dr Cost of sales, Cr Drawings',
        'Dr Non-current assets, Cr Cost of sales',
        'Dr Drawings, Cr Cost of sales',
        'Dr Cost of sales, Cr Non-current assets',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q71',
      kitRef: 71,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which pair of balances would appear on the same side of a trial balance?',
      explanation: {
        en: `Use DEAD CLIC to give each item its side: assets, expenses and drawings are debits; liabilities, income and capital are credits.
- Drawings (debit) and trade payables (credit): different sides.
- Carriage inwards (expense, debit) and prepayments (asset, debit): SAME side.
- Carriage outwards (expense, debit) and rental income (income, credit): different.
- Opening inventory (asset, debit) and discounts received (income, credit): different.
= Answer: carriage inwards and prepayments`,
        ru: `С помощью DEAD CLIC определите сторону каждой статьи: активы, расходы и изъятия — дебет; обязательства, доходы и капитал — кредит.
- Изъятия (дебет) и торговые кредиторы (кредит): разные стороны.
- Доставка от поставщика (расход, дебет) и предоплаты (актив, дебет): ОДНА сторона.
- Доставка покупателям (расход, дебет) и доход от аренды (доход, кредит): разные.
- Начальные запасы (актив, дебет) и полученные скидки (доход, кредит): разные.
= Ответ: доставка от поставщика и предоплаты`,
        uz: `DEAD CLIC yordamida har bir moddaning tomonini aniqlang: aktivlar, xarajatlar va olib qo'yishlar — debet; majburiyatlar, daromad va kapital — kredit.
- Olib qo'yishlar (debet) va savdo kreditorlari (kredit): turli tomon.
- Yetkazib beruvchidan tashish (xarajat, debet) va oldindan to'lovlar (aktiv, debet): BIR tomon.
- Mijozlarga tashish (xarajat, debet) va ijara daromadi (daromad, kredit): turli.
- Boshlang'ich zaxira (aktiv, debet) va olingan chegirmalar (daromad, kredit): turli.
= Javob: yetkazib beruvchidan tashish va oldindan to'lovlar`,
      },
      options: [
        'Drawings and trade payables',
        'Carriage inwards and prepayments',
        'Carriage outwards and rental income',
        'Opening inventory and discounts received',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q72',
      kitRef: 72,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which balances does double entry normally produce in the general ledger?',
      explanation: {
        en: `This is DEAD CLIC.
# DEAD: debit balances
  Drawings, Expenses, Assets
# CLIC: credit balances
  Liabilities, Income (revenue), Capital
Only one option matches: debits are assets and expenses; credits are liabilities, capital and revenues.
= Answer: Debit: assets and expenses. Credit: liabilities, capital and revenues`,
        ru: `Это DEAD CLIC.
# DEAD: дебетовые остатки
  Изъятия, расходы, активы
# CLIC: кредитовые остатки
  Обязательства, доходы (выручка), капитал
Подходит только один вариант: дебет — активы и расходы; кредит — обязательства, капитал и выручка.
= Ответ: Дебет: активы и расходы. Кредит: обязательства, капитал и выручка`,
        uz: `Bu DEAD CLIC.
# DEAD: debet qoldiqlar
  Olib qo'yishlar, xarajatlar, aktivlar
# CLIC: kredit qoldiqlar
  Majburiyatlar, daromad (tushum), kapital
Faqat bitta variant mos: debet — aktivlar va xarajatlar; kredit — majburiyatlar, kapital va tushum.
= Javob: Debet: aktivlar va xarajatlar. Kredit: majburiyatlar, kapital va tushum`,
      },
      options: [
        'Debit: assets and revenues. Credit: liabilities, capital and expenses',
        'Debit: assets and expenses. Credit: liabilities, capital and revenues',
        'Debit: assets, expenses and capital. Credit: liabilities and revenues',
        'Debit: revenues, capital and liabilities. Credit: assets and expenses',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q73',
      kitRef: 73,
      topicId: 'chapter-03',
      type: 'single',
      text: 'A business tops up its petty cash float with $150 from the bank. What is the entry?',
      explanation: {
        en: `$150 moves from the bank into the petty cash tin. Both are assets.
# Step 1: Petty cash goes up
  An asset going up is a debit: Dr Petty cash $150
# Step 2: Bank goes down
  An asset going down is a credit: Cr Bank $150
= Answer: Dr Petty cash, Cr Bank
! Common trap: drawings. The owner takes nothing for themselves here.`,
        ru: `$150 переходят из банка в мелкую кассу. Оба — активы.
# Шаг 1: Мелкая касса растёт
  Рост актива — дебет: Дт Мелкая касса $150
# Шаг 2: Банк уменьшается
  Уменьшение актива — кредит: Кт Банк $150
= Ответ: Дт Мелкая касса, Кт Банк
! Частая ошибка: изъятия. Владелец здесь ничего себе не берёт.`,
        uz: `$150 bankdan mayda kassaga o'tadi. Ikkalasi ham aktiv.
# 1-qadam: Mayda kassa oshadi
  Aktiv oshishi — debet: Dt Mayda kassa $150
# 2-qadam: Bank kamayadi
  Aktiv kamayishi — kredit: Kt Bank $150
= Javob: Dt Mayda kassa, Kt Bank
! Ko'p uchraydigan xato: olib qo'yishlar. Egasi bu yerda o'ziga hech narsa olmaydi.`,
      },
      options: [
        'Dr Bank, Cr Petty cash',
        'Dr Drawings, Cr Bank',
        'Dr Petty cash, Cr Bank',
        'Dr Drawings, Cr Petty cash',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q74',
      kitRef: 74,
      topicId: 'chapter-03',
      type: 'single',
      text: 'A draft statement of profit or loss shows the figures below. The following have not yet been recorded: carriage in $2,700, discounts received $4,500 and carriage out $2,250. What are the revised gross profit and operating profit?',
      explanation: {
        en: `First decide where each new item goes. Carriage in and discounts received belong in cost of sales (so they change gross profit). Carriage out is an expense below gross profit.
# Step 1: Revised gross profit
  Start: $141,800
  Carriage in makes buying dearer, so cost of sales goes UP: - $2,700
  Discount received makes buying cheaper, so cost of sales goes DOWN: + $4,500
  $141,800 - $2,700 + $4,500 = $143,600
# Step 2: Revised operating profit
  Gross profit $143,600 - operating expenses $88,000 - carriage out $2,250
  = $53,350
= Answer: gross profit $143,600; operating profit $53,350
! Common traps: putting carriage out in cost of sales gives $136,850. Taking the discount off instead of adding it gives $44,350.`,
        ru: `Сначала решите, куда идёт каждая новая статья. Доставка от поставщика и полученные скидки входят в себестоимость (меняют валовую прибыль). Доставка покупателям — расход ниже валовой прибыли.
# Шаг 1: Новая валовая прибыль
  Начало: $141,800
  Доставка от поставщика удорожает закупки, себестоимость РАСТЁТ: - $2,700
  Полученная скидка удешевляет закупки, себестоимость ПАДАЕТ: + $4,500
  $141,800 - $2,700 + $4,500 = $143,600
# Шаг 2: Новая операционная прибыль
  Валовая прибыль $143,600 - операционные расходы $88,000 - доставка покупателям $2,250
  = $53,350
= Ответ: валовая прибыль $143,600; операционная прибыль $53,350
! Частые ошибки: доставка покупателям в себестоимости даёт $136,850. Скидка вычтена вместо прибавления — $44,350.`,
        uz: `Avval har bir yangi modda qayerga borishini hal qiling. Yetkazib beruvchidan tashish va olingan chegirmalar tannarxga kiradi (yalpi foydani o'zgartiradi). Mijozlarga tashish — yalpi foydadan pastdagi xarajat.
# 1-qadam: Yangi yalpi foyda
  Boshi: $141,800
  Yetkazib beruvchidan tashish xaridni qimmatlashtiradi, tannarx OSHADI: - $2,700
  Olingan chegirma xaridni arzonlashtiradi, tannarx KAMAYADI: + $4,500
  $141,800 - $2,700 + $4,500 = $143,600
# 2-qadam: Yangi operatsion foyda
  Yalpi foyda $143,600 - operatsion xarajatlar $88,000 - mijozlarga tashish $2,250
  = $53,350
= Javob: yalpi foyda $143,600; operatsion foyda $53,350
! Ko'p uchraydigan xatolar: mijozlarga tashishni tannarxga qo'yish $136,850 beradi. Chegirmani qo'shish o'rniga ayirish $44,350 beradi.`,
      },
      options: [
        'Gross profit $136,850; operating profit $53,350',
        'Gross profit $136,850; operating profit $44,350',
        'Gross profit $143,600; operating profit $44,350',
        'Gross profit $143,600; operating profit $53,350',
      ],
      correctIndex: 3,
      table: {
        head: ['Draft', '$'],
        rows: [
          ['Revenue', '312,000'],
          ['Opening inventory', '15,600'],
          ['Purchases', '171,000'],
          ['Closing inventory', '(16,400)'],
          ['Cost of sales', '(170,200)'],
          ['Gross profit', '141,800'],
          ['Operating expenses', '(88,000)'],
          ['Operating profit', '53,800'],
        ],
      },
    },
    {
      id: 'ch03-q75',
      kitRef: 75,
      topicId: 'chapter-03',
      type: 'number',
      text: 'Gulnora started June with $2,340 at the bank. In June: (1) she withdrew $250 a week for four weeks for living costs; (2) a customer paid for goods with a list price of $800 less 5% trade discount; (3) a credit customer paid $550; (4) she banked $1,450 from vending machines. What is the bank balance carried forward?',
      explanation: {
        en: `Go through June: money in raises the balance, money out lowers it.
# Step 1: Opening balance
  $2,340
# Step 2: Money in
  Cash customer: list price $800 less 5% trade discount = $800 × 95% = $760
  Credit customer: $550
  Vending machines: $1,450
  Total in: $760 + $550 + $1,450 = $2,760
# Step 3: Money out
  Drawings: $250 × 4 weeks = $1,000
= Answer: $2,340 + $2,760 - $1,000 = $4,100
! Common trap: banking the full $800. A trade discount comes off before anyone pays, so only $760 arrives.`,
        ru: `Пройдём по июню: приход увеличивает остаток, расход уменьшает.
# Шаг 1: Начальный остаток
  $2,340
# Шаг 2: Приход
  Покупатель за наличные: прайс $800 минус торговая скидка 5% = $800 × 95% = $760
  Покупатель в кредит: $550
  Торговые автоматы: $1,450
  Всего приход: $760 + $550 + $1,450 = $2,760
# Шаг 3: Расход
  Изъятия: $250 × 4 недели = $1,000
= Ответ: $2,340 + $2,760 - $1,000 = $4,100
! Частая ошибка: записать все $800. Торговая скидка вычитается до оплаты, поэтому приходит только $760.`,
        uz: `Iyunni ko'rib chiqamiz: kirim qoldiqni oshiradi, chiqim kamaytiradi.
# 1-qadam: Boshlang'ich qoldiq
  $2,340
# 2-qadam: Kirim
  Naqd mijoz: narx $800 minus 5% savdo chegirmasi = $800 × 95% = $760
  Nasiya mijoz: $550
  Avtomatlar: $1,450
  Jami kirim: $760 + $550 + $1,450 = $2,760
# 3-qadam: Chiqim
  Olib qo'yishlar: $250 × 4 hafta = $1,000
= Javob: $2,340 + $2,760 - $1,000 = $4,100
! Ko'p uchraydigan xato: to'liq $800 ni yozish. Savdo chegirmasi to'lovdan oldin ayiriladi, shuning uchun faqat $760 keladi.`,
      },
      correctValue: 4100,
      answerText: '$4,100',
    },
    {
      id: 'ch03-q76',
      kitRef: 76,
      topicId: 'chapter-03',
      type: 'number',
      text: 'The bank account below contains items on the wrong side. After correcting it, what is the balance carried forward?',
      explanation: {
        en: `In the bank account, money IN is a debit and money OUT is a credit. Move every item to its right side, then balance.
# Step 1: Money in (debit side)
  Cash refund for goods returned: $80
  Rental income received: $1,500
  Receipts from customers: $5,300
  Total: $6,880
# Step 2: Money out (credit side)
  Opening overdraft (money already owed to the bank): $1,620
  Payments to credit suppliers: $1,150
  Petty cash top-up: $60
  Electricity: $900
  Total: $3,730
= Answer: balance c/f = $6,880 - $3,730 = $3,150
! Common trap: an opening overdraft is a credit balance. It is not money you have.`,
        ru: `В банковском счёте приход — дебет, расход — кредит. Перенесите каждую строку на правильную сторону и закройте счёт.
# Шаг 1: Приход (дебет)
  Возврат денег за возвращённый товар: $80
  Полученная аренда: $1,500
  Поступления от покупателей: $5,300
  Итого: $6,880
# Шаг 2: Расход (кредит)
  Начальный овердрафт (деньги, уже должные банку): $1,620
  Платежи поставщикам: $1,150
  Пополнение мелкой кассы: $60
  Электричество: $900
  Итого: $3,730
= Ответ: остаток c/f = $6,880 - $3,730 = $3,150
! Частая ошибка: начальный овердрафт — кредитовый остаток. Это не ваши деньги.`,
        uz: `Bank hisobida kirim — debet, chiqim — kredit. Har bir qatorni to'g'ri tomonga o'tkazib, hisobni balanslang.
# 1-qadam: Kirim (debet)
  Qaytarilgan tovar uchun pul: $80
  Olingan ijara: $1,500
  Mijozlardan tushum: $5,300
  Jami: $6,880
# 2-qadam: Chiqim (kredit)
  Boshlang'ich overdraft (bankka allaqachon qarz pul): $1,620
  Yetkazib beruvchilarga to'lovlar: $1,150
  Mayda kassani to'ldirish: $60
  Elektr: $900
  Jami: $3,730
= Javob: c/f qoldiq = $6,880 - $3,730 = $3,150
! Ko'p uchraydigan xato: boshlang'ich overdraft — kredit qoldiq. Bu sizning pulingiz emas.`,
      },
      correctValue: 3150,
      answerText: '$3,150',
      table: {
        head: ['Debit side', '$', 'Credit side', '$'],
        rows: [
          ['Overdraft at start of month', '1,620', 'Returns of goods bought for cash', '80'],
          ['Top-up of petty cash', '60', 'Payments to credit suppliers', '1,150'],
          ['Receipts from customers', '5,300', 'Rental income', '1,500'],
          ['', '', 'Electricity bill paid', '900'],
          ['', '', 'Balance c/f', '3,350'],
          ['Total', '6,980', 'Total', '6,980'],
        ],
      },
    },
    {
      id: 'ch03-q77',
      kitRef: 77,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Bobur starts a delivery business by transferring a van he already owns, valued at $6,000, into the business. Which entry is correct?',
      explanation: {
        en: `No cash moves, but the business gains a van and the owner has invested more.
# Step 1: The business gains an asset
  Van up = Dr Van $6,000
# Step 2: The owner has put more into the business
  Capital up = Cr Capital $6,000
= Answer: Dr Van $6,000, Cr Capital $6,000
! Common trap: drawings are what an owner takes OUT. Here the owner puts something IN.`,
        ru: `Деньги не движутся, но у бизнеса появляется фургон, а владелец вложил больше.
# Шаг 1: У бизнеса новый актив
  Фургон растёт = Дт Фургон $6,000
# Шаг 2: Владелец вложил больше
  Капитал растёт = Кт Капитал $6,000
= Ответ: Дт Фургон $6,000, Кт Капитал $6,000
! Частая ошибка: изъятия — это то, что владелец ЗАБИРАЕТ. Здесь владелец ВНОСИТ.`,
        uz: `Pul harakatlanmaydi, lekin biznesda furgon paydo bo'ladi va egasi ko'proq qo'ygan.
# 1-qadam: Biznesda yangi aktiv
  Furgon oshadi = Dt Furgon $6,000
# 2-qadam: Egasi ko'proq qo'ydi
  Kapital oshadi = Kt Kapital $6,000
= Javob: Dt Furgon $6,000, Kt Kapital $6,000
! Ko'p uchraydigan xato: olib qo'yish — egasi OLADIGAN narsa. Bu yerda egasi QO'YADI.`,
      },
      options: [
        'Dr Capital $6,000, Cr Van $6,000',
        'Dr Van $6,000, Cr Capital $6,000',
        'Dr Drawings $6,000, Cr Van $6,000',
        'Dr Van $6,000, Cr Drawings $6,000',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q78',
      kitRef: 78,
      topicId: 'chapter-03',
      type: 'matrix',
      text: 'State whether each statement about the journal is true or false.',
      explanation: {
        en: `The journal is only for UNUSUAL entries. Normal day-to-day transactions go through the normal records.
- Every bank and cash transaction: FALSE. These go through the cash book.
- Every accounting transaction: FALSE. Most are routine.
- Corrections of errors and year-end adjustments: TRUE. This is what the journal is for.
- Every credit sale: FALSE. These go through the sales records.`,
        ru: `Журнал — только для НЕОБЫЧНЫХ записей. Обычные ежедневные операции проходят через обычные записи.
- Все банковские и кассовые операции: НЕВЕРНО. Они идут через кассовую книгу.
- Все учётные операции: НЕВЕРНО. Большинство обычные.
- Исправление ошибок и корректировки на конец года: ВЕРНО. Для этого журнал и нужен.
- Все продажи в кредит: НЕВЕРНО. Они идут через учёт продаж.`,
        uz: `Jurnal faqat G'AYRIODDIY yozuvlar uchun. Oddiy kundalik operatsiyalar oddiy yozuvlar orqali o'tadi.
- Barcha bank va kassa operatsiyalari: NOTO'G'RI. Ular kassa kitobi orqali o'tadi.
- Barcha hisob operatsiyalari: NOTO'G'RI. Ko'pchiligi oddiy.
- Xatolarni tuzatish va yil oxiri tuzatishlari: TO'G'RI. Jurnal shuning uchun kerak.
- Barcha nasiya sotuvlar: NOTO'G'RI. Ular sotuv yozuvlari orqali o'tadi.`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'The journal records every bank and cash transaction', correctIndex: 1 },
        { text: 'The journal records every accounting transaction', correctIndex: 1 },
        { text: 'The journal records corrections of errors and year-end adjustments', correctIndex: 0 },
        { text: 'The journal records every sale made on credit', correctIndex: 1 },
      ],
    },
    {
      id: 'ch03-q79',
      kitRef: 79,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Dilshod posted the year\'s depreciation on motor vehicles as Dr Accumulated depreciation $6,200, Cr Depreciation expense $6,200. Which journal corrects this?',
      explanation: {
        en: `Use the three steps for fixing an error.
# Step 1: What was posted
  Dr Accumulated depreciation $6,200, Cr Depreciation expense $6,200
# Step 2: What should have been posted
  Dr Depreciation expense $6,200, Cr Accumulated depreciation $6,200
# Step 3: The fix
  Undo the wrong entry ($6,200) and post the right one ($6,200)
  $6,200 + $6,200 = $12,400 on each side
= Answer: Dr Depreciation expense $12,400, Cr Accumulated depreciation $12,400
! Common trap: posting only $6,200. That just cancels the error and leaves no depreciation at all.`,
        ru: `Используйте три шага исправления ошибки.
# Шаг 1: Что провели
  Дт Накопленная амортизация $6,200, Кт Расход на амортизацию $6,200
# Шаг 2: Что надо было провести
  Дт Расход на амортизацию $6,200, Кт Накопленная амортизация $6,200
# Шаг 3: Исправление
  Отменяем неверную запись ($6,200) и проводим верную ($6,200)
  $6,200 + $6,200 = $12,400 на каждой стороне
= Ответ: Дт Расход на амортизацию $12,400, Кт Накопленная амортизация $12,400
! Частая ошибка: провести только $6,200. Это лишь отменит ошибку, и амортизации не будет вовсе.`,
        uz: `Xatoni tuzatishning uch qadamidan foydalaning.
# 1-qadam: Nima yozilgan
  Dt To'plangan amortizatsiya $6,200, Kt Amortizatsiya xarajati $6,200
# 2-qadam: Nima yozilishi kerak edi
  Dt Amortizatsiya xarajati $6,200, Kt To'plangan amortizatsiya $6,200
# 3-qadam: Tuzatish
  Noto'g'ri yozuvni bekor qilamiz ($6,200) va to'g'risini yozamiz ($6,200)
  $6,200 + $6,200 = har tomonda $12,400
= Javob: Dt Amortizatsiya xarajati $12,400, Kt To'plangan amortizatsiya $12,400
! Ko'p uchraydigan xato: faqat $6,200 yozish. Bu xatoni bekor qiladi xolos, amortizatsiya umuman qolmaydi.`,
      },
      options: [
        'Dr Depreciation expense $12,400, Cr Accumulated depreciation $12,400',
        'Dr Motor vehicles $6,200, Cr Accumulated depreciation $6,200',
        'Dr Depreciation expense $6,200, Cr Accumulated depreciation $6,200',
        'Dr Accumulated depreciation $12,400, Cr Depreciation expense $12,400',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch03-q80',
      kitRef: 80,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Lola recorded an increase in the allowance for receivables as Dr Receivables $3,800, Cr Allowance for receivables $3,800. Which journal corrects this?',
      explanation: {
        en: `Compare what was posted with what should have been posted. Only change what is wrong.
# Step 1: What was posted
  Dr Receivables $3,800, Cr Allowance for receivables $3,800
# Step 2: What should have been posted
  Dr Irrecoverable debts expense $3,800, Cr Allowance for receivables $3,800
# Step 3: Compare
  The credit to the allowance is right. Leave it alone.
  The debit is in the wrong account: take it OUT of receivables (credit) and put it INTO the expense (debit)
= Answer: Dr Irrecoverable debts expense, Cr Receivables`,
        ru: `Сравните, что провели, с тем, что нужно было. Меняйте только неверное.
# Шаг 1: Что провели
  Дт Дебиторы $3,800, Кт Резерв по дебиторам $3,800
# Шаг 2: Что надо было провести
  Дт Расход по безнадёжным долгам $3,800, Кт Резерв по дебиторам $3,800
# Шаг 3: Сравниваем
  Кредит резерва верный. Не трогаем.
  Дебет не на том счёте: убираем его С дебиторов (кредит) и ставим НА расход (дебет)
= Ответ: Дт Расход по безнадёжным долгам, Кт Дебиторы`,
        uz: `Nima yozilganini nima yozilishi kerakligi bilan solishtiring. Faqat noto'g'risini o'zgartiring.
# 1-qadam: Nima yozilgan
  Dt Debitorlar $3,800, Kt Debitorlik rezervi $3,800
# 2-qadam: Nima yozilishi kerak edi
  Dt Umidsiz qarzlar xarajati $3,800, Kt Debitorlik rezervi $3,800
# 3-qadam: Solishtiramiz
  Rezerv krediti to'g'ri. Unga tegmaymiz.
  Debet noto'g'ri hisobda: uni debitorlardan CHIQARAMIZ (kredit) va xarajatga QO'YAMIZ (debet)
= Javob: Dt Umidsiz qarzlar xarajati, Kt Debitorlar`,
      },
      options: [
        'Dr Allowance for receivables, Cr Irrecoverable debts expense',
        'Dr Receivables, Cr Irrecoverable debts expense',
        'Dr Irrecoverable debts expense, Cr Receivables',
        'Dr Irrecoverable debts expense, Cr Allowance for receivables',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q81',
      kitRef: 81,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Akmal recorded $3,100 received on the sale of a machine as Dr Bank $3,100, Cr Revenue $3,100. Which journal corrects this?',
      explanation: {
        en: `Compare what was posted with what should have been posted.
# Step 1: What was posted
  Dr Bank $3,100, Cr Revenue $3,100
# Step 2: What should have been posted
  Dr Bank $3,100, Cr Disposal of machinery $3,100 (selling a machine is not a sale of goods)
# Step 3: Compare
  The bank debit is right: the money did arrive. Leave it.
  The credit is in the wrong place: take it out of revenue (debit) and put it into disposals (credit)
= Answer: Dr Revenue $3,100, Cr Disposal of machinery $3,100`,
        ru: `Сравните, что провели, с тем, что нужно было.
# Шаг 1: Что провели
  Дт Банк $3,100, Кт Выручка $3,100
# Шаг 2: Что надо было провести
  Дт Банк $3,100, Кт Выбытие оборудования $3,100 (продажа станка — не продажа товара)
# Шаг 3: Сравниваем
  Дебет банка верный: деньги пришли. Не трогаем.
  Кредит не там: убираем из выручки (дебет) и ставим в выбытие (кредит)
= Ответ: Дт Выручка $3,100, Кт Выбытие оборудования $3,100`,
        uz: `Nima yozilganini nima yozilishi kerakligi bilan solishtiring.
# 1-qadam: Nima yozilgan
  Dt Bank $3,100, Kt Tushum $3,100
# 2-qadam: Nima yozilishi kerak edi
  Dt Bank $3,100, Kt Uskuna chiqishi $3,100 (dastgoh sotish — tovar sotish emas)
# 3-qadam: Solishtiramiz
  Bank debeti to'g'ri: pul keldi. Tegmaymiz.
  Kredit noto'g'ri joyda: tushumdan chiqaramiz (debet) va chiqish hisobiga qo'yamiz (kredit)
= Javob: Dt Tushum $3,100, Kt Uskuna chiqishi $3,100`,
      },
      options: [
        'Dr Revenue $3,100, Cr Disposal of machinery $3,100',
        'Dr Revenue $3,100, Cr Bank $3,100',
        'Dr Accumulated depreciation $3,100, Cr Disposal of machinery $3,100',
        'Dr Disposal of machinery $3,100, Cr Machinery $3,100',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch03-q82',
      kitRef: 82,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which journal records the year\'s depreciation of $4,200 on buildings?',
      explanation: {
        en: `Depreciation is the part of the building's cost used up this year.
# Step 1: The expense
  It is a cost of the year, so debit it in profit or loss: Dr Depreciation expense $4,200
# Step 2: The other side
  Credit accumulated depreciation, which builds up year by year: Cr Accumulated depreciation $4,200
= Answer: Dr Depreciation expense $4,200, Cr Accumulated depreciation $4,200
! Common trap: crediting the buildings account. The cost stays untouched so you can always see what the building cost.`,
        ru: `Амортизация — часть стоимости здания, использованная за этот год.
# Шаг 1: Расход
  Это расход года, дебетуем в прибыли или убытке: Дт Расход на амортизацию $4,200
# Шаг 2: Вторая сторона
  Кредитуем накопленную амортизацию, которая растёт год за годом: Кт Накопленная амортизация $4,200
= Ответ: Дт Расход на амортизацию $4,200, Кт Накопленная амортизация $4,200
! Частая ошибка: кредитовать счёт здания. Стоимость не трогают, чтобы всегда было видно, сколько здание стоило.`,
        uz: `Amortizatsiya — binoning bu yil ishlatilgan qiymati qismi.
# 1-qadam: Xarajat
  Bu yil xarajati, foyda yoki zararda debetlaymiz: Dt Amortizatsiya xarajati $4,200
# 2-qadam: Ikkinchi tomon
  Yildan yilga to'planadigan amortizatsiyani kreditlaymiz: Kt To'plangan amortizatsiya $4,200
= Javob: Dt Amortizatsiya xarajati $4,200, Kt To'plangan amortizatsiya $4,200
! Ko'p uchraydigan xato: bino hisobini kreditlash. Qiymatga tegilmaydi, shunda bino qancha turgani doim ko'rinadi.`,
      },
      options: [
        'Dr Depreciation expense $4,200, Cr Accumulated depreciation $4,200',
        'Dr Depreciation expense $4,200, Cr Buildings $4,200',
        'Dr Accumulated depreciation $4,200, Cr Depreciation expense $4,200',
        'Dr Buildings $4,200, Cr Accumulated depreciation $4,200',
      ],
      correctIndex: 0,
    },
    {
      id: 'ch03-q83',
      kitRef: 83,
      topicId: 'chapter-03',
      type: 'single',
      text: 'A business takes a settlement discount of $340 from a credit supplier. Which entry records the discount?',
      explanation: {
        en: `You owed a supplier, and they let you pay $340 less.
# Step 1: What you owe goes down
  A liability going down is a debit: Dr Payables $340
# Step 2: The $340 you saved is a gain
  Income going up is a credit: Cr Discount received $340
= Answer: Dr Payables $340, Cr Discount received $340
! Common trap: crediting revenue. Revenue is for sales to customers, not discounts from suppliers.`,
        ru: `Вы были должны поставщику, а он разрешил заплатить на $340 меньше.
# Шаг 1: Ваш долг уменьшается
  Уменьшение обязательства — дебет: Дт Кредиторы $340
# Шаг 2: Сэкономленные $340 — доход
  Рост дохода — кредит: Кт Полученные скидки $340
= Ответ: Дт Кредиторы $340, Кт Полученные скидки $340
! Частая ошибка: кредитовать выручку. Выручка — от продаж покупателям, а не скидки от поставщиков.`,
        uz: `Siz yetkazib beruvchiga qarz edingiz, u $340 kam to'lashga ruxsat berdi.
# 1-qadam: Qarzingiz kamayadi
  Majburiyat kamayishi — debet: Dt Kreditorlar $340
# 2-qadam: Tejalgan $340 — daromad
  Daromad oshishi — kredit: Kt Olingan chegirmalar $340
= Javob: Dt Kreditorlar $340, Kt Olingan chegirmalar $340
! Ko'p uchraydigan xato: tushumni kreditlash. Tushum — mijozlarga sotuvdan, yetkazib beruvchi chegirmasidan emas.`,
      },
      options: [
        'Dr Discount received $340, Cr Payables $340',
        'Dr Payables $340, Cr Revenue $340',
        'Dr Discount received $340, Cr Bank $340',
        'Dr Payables $340, Cr Discount received $340',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch03-q84',
      kitRef: 84,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Komil recorded a credit purchase as Dr Payables $2,900, Cr Purchases $2,900. Which journal corrects this?',
      explanation: {
        en: `Both sides were the wrong way round.
# Step 1: What was posted
  Dr Payables $2,900, Cr Purchases $2,900
# Step 2: What should have been posted
  Dr Purchases $2,900, Cr Payables $2,900
# Step 3: The fix
  Undo the wrong entry ($2,900) and post the right one ($2,900): $5,800
= Answer: Dr Purchases $5,800, Cr Payables $5,800
! Common trap: posting only $2,900, which just cancels the error.`,
        ru: `Обе стороны перепутаны.
# Шаг 1: Что провели
  Дт Кредиторы $2,900, Кт Закупки $2,900
# Шаг 2: Что надо было провести
  Дт Закупки $2,900, Кт Кредиторы $2,900
# Шаг 3: Исправление
  Отменяем неверное ($2,900) и проводим верное ($2,900): $5,800
= Ответ: Дт Закупки $5,800, Кт Кредиторы $5,800
! Частая ошибка: провести только $2,900, что лишь отменит ошибку.`,
        uz: `Ikkala tomon ham teskari yozilgan.
# 1-qadam: Nima yozilgan
  Dt Kreditorlar $2,900, Kt Xaridlar $2,900
# 2-qadam: Nima yozilishi kerak edi
  Dt Xaridlar $2,900, Kt Kreditorlar $2,900
# 3-qadam: Tuzatish
  Noto'g'risini bekor qilamiz ($2,900) va to'g'risini yozamiz ($2,900): $5,800
= Javob: Dt Xaridlar $5,800, Kt Kreditorlar $5,800
! Ko'p uchraydigan xato: faqat $2,900 yozish, bu xatoni bekor qiladi xolos.`,
      },
      options: [
        'Dr Purchases $2,900, Cr Payables $2,900',
        'Dr Purchases $2,900, Cr Suspense $2,900',
        'Dr Purchases $5,800, Cr Payables $5,800',
        'Dr Purchases $2,900, Cr Receivables $2,900',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q85',
      kitRef: 85,
      topicId: 'chapter-03',
      type: 'number',
      text: 'Timur used the balances below to prepare financial statements at 30 April 20X3. The business holds no inventory, and no further adjustments are needed. What is closing capital at 30 April 20X3?',
      explanation: {
        en: `Closing capital = opening capital + profit (or - loss) - drawings. So first find the profit or loss.
# Step 1: Profit or loss for the year
  Revenue: $26,000
  Expenses: purchases $21,400 + rent $6,100 + interest $900 + heat and light $5,700 = $34,100
  $26,000 - $34,100 = a LOSS of $8,100
# Step 2: Closing capital
  Opening capital $15,000 - loss $8,100 - drawings $5,200 = $1,700
= Answer: $1,700
# Check with net assets
  Receivables $7,000 - loan $3,500 - overdraft $1,800 = $1,700. The same.
! There is no inventory, so cost of sales is simply purchases.`,
        ru: `Капитал на конец = капитал на начало + прибыль (или - убыток) - изъятия. Значит сначала найдите прибыль или убыток.
# Шаг 1: Прибыль или убыток за год
  Выручка: $26,000
  Расходы: закупки $21,400 + аренда $6,100 + проценты $900 + отопление и свет $5,700 = $34,100
  $26,000 - $34,100 = УБЫТОК $8,100
# Шаг 2: Капитал на конец
  Капитал на начало $15,000 - убыток $8,100 - изъятия $5,200 = $1,700
= Ответ: $1,700
# Проверка через чистые активы
  Дебиторы $7,000 - заём $3,500 - овердрафт $1,800 = $1,700. То же самое.
! Запасов нет, поэтому себестоимость — это просто закупки.`,
        uz: `Yakuniy kapital = boshlang'ich kapital + foyda (yoki - zarar) - olib qo'yishlar. Demak avval foyda yoki zararni toping.
# 1-qadam: Yil foydasi yoki zarari
  Tushum: $26,000
  Xarajatlar: xaridlar $21,400 + ijara $6,100 + foiz $900 + isitish va yorug'lik $5,700 = $34,100
  $26,000 - $34,100 = $8,100 ZARAR
# 2-qadam: Yakuniy kapital
  Boshlang'ich kapital $15,000 - zarar $8,100 - olib qo'yishlar $5,200 = $1,700
= Javob: $1,700
# Sof aktivlar orqali tekshiruv
  Debitorlar $7,000 - qarz $3,500 - overdraft $1,800 = $1,700. Xuddi shu.
! Zaxira yo'q, shuning uchun tannarx shunchaki xaridlar.`,
      },
      correctValue: 1700,
      answerText: '$1,700',
      table: {
        head: ['Balance', 'Dr $', 'Cr $'],
        rows: [
          ['Receivables', '7,000', ''],
          ['Bank loan', '', '3,500'],
          ['Bank overdraft', '', '1,800'],
          ['Drawings', '5,200', ''],
          ['Capital at 1 May 20X2', '', '15,000'],
          ['Purchases and revenue', '21,400', '26,000'],
          ['Rent', '6,100', ''],
          ['Bank interest', '900', ''],
          ['Heat and light', '5,700', ''],
          ['Total', '46,300', '46,300'],
        ],
      },
    },
    {
      id: 'ch03-q86',
      kitRef: 86,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is the accounting equation?',
      explanation: {
        en: `Everything the business has must have come from someone: either the owner (capital) or outsiders (liabilities).
= Answer: assets = capital + liabilities
- "Assets = capital" or "assets = liabilities": each leaves one source out.
- "Assets = liabilities - capital": the sign is wrong.`,
        ru: `Всё, что есть у бизнеса, откуда-то взялось: от владельца (капитал) или от посторонних (обязательства).
= Ответ: активы = капитал + обязательства
- «Активы = капитал» или «активы = обязательства»: каждый вариант пропускает один источник.
- «Активы = обязательства - капитал»: неверный знак.`,
        uz: `Biznesdagi hamma narsa qayerdandir kelgan: egasidan (kapital) yoki begonalardan (majburiyatlar).
= Javob: aktivlar = kapital + majburiyatlar
- «Aktivlar = kapital» yoki «aktivlar = majburiyatlar»: har biri bitta manbani tushirib qoldiradi.
- «Aktivlar = majburiyatlar - kapital»: belgi noto'g'ri.`,
      },
      options: [
        'Assets = capital',
        'Assets = liabilities',
        'Assets = capital + liabilities',
        'Assets = liabilities - capital',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q87',
      kitRef: 87,
      topicId: 'chapter-03',
      type: 'single',
      text: 'What does the accounting equation show?',
      explanation: {
        en: `The equation has three parts: assets, liabilities and capital. So it shows how a transaction changes those three.
- Effect on profit: that is the statement of profit or loss. Profit only reaches the equation through capital.
- Assets and income, or expenses and liabilities: each pair leaves out part of the equation.
= Answer: the effect of a transaction on assets, liabilities and the owner's capital`,
        ru: `В уравнении три части: активы, обязательства и капитал. Поэтому оно показывает, как операция меняет эти три.
- Влияние на прибыль: это отчёт о прибыли или убытке. Прибыль попадает в уравнение только через капитал.
- Активы и доходы или расходы и обязательства: каждая пара пропускает часть уравнения.
= Ответ: влияние операции на активы, обязательства и капитал владельца`,
        uz: `Tenglama uch qismdan iborat: aktivlar, majburiyatlar va kapital. Shuning uchun u operatsiya shu uchtasini qanday o'zgartirishini ko'rsatadi.
- Foydaga ta'siri: bu foyda yoki zarar hisoboti. Foyda tenglamaga faqat kapital orqali kiradi.
- Aktivlar va daromad yoki xarajatlar va majburiyatlar: har bir juftlik tenglamaning bir qismini tushirib qoldiradi.
= Javob: operatsiyaning aktivlar, majburiyatlar va egasi kapitaliga ta'siri`,
      },
      options: [
        'The effect of a transaction on profit for the year',
        'The effect of a transaction on assets, liabilities and the owner\'s capital',
        'The effect of a transaction on assets and income',
        'The effect of a transaction on expenses and liabilities',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q88',
      kitRef: 88,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which transaction leaves total assets unchanged?',
      explanation: {
        en: `Test each one: what goes up and what goes down?
- Owner pays in cash: bank up, capital up. Assets go UP.
- A customer pays what they owe: bank up $100, receivables down $100. Both are assets, so the total stays the SAME.
- Paying a supplier: bank down, payables down. Assets go DOWN.
- Buying a machine on credit: machine up, payables up. Assets go UP.
= Answer: a credit customer pays the amount owed`,
        ru: `Проверьте каждый: что растёт, а что падает?
- Владелец вносит деньги: банк растёт, капитал растёт. Активы РАСТУТ.
- Покупатель платит долг: банк +$100, дебиторы -$100. Оба — активы, итог НЕ МЕНЯЕТСЯ.
- Оплата поставщику: банк падает, кредиторы падают. Активы ПАДАЮТ.
- Покупка станка в кредит: станок растёт, кредиторы растут. Активы РАСТУТ.
= Ответ: покупатель оплачивает свой долг`,
        uz: `Har birini tekshiring: nima oshadi, nima kamayadi?
- Egasi pul qo'yadi: bank oshadi, kapital oshadi. Aktivlar OSHADI.
- Mijoz qarzini to'laydi: bank +$100, debitorlar -$100. Ikkalasi aktiv, jami O'ZGARMAYDI.
- Yetkazib beruvchiga to'lov: bank kamayadi, kreditorlar kamayadi. Aktivlar KAMAYADI.
- Dastgohni nasiyaga olish: dastgoh oshadi, kreditorlar oshadi. Aktivlar OSHADI.
= Javob: nasiya mijoz qarzini to'laydi`,
      },
      options: [
        'The owner pays cash into the business',
        'A credit customer pays the amount owed',
        'The business pays a credit supplier what it owes',
        'The business buys a machine on credit',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q89',
      kitRef: 89,
      topicId: 'chapter-03',
      type: 'matrix',
      text: 'State whether each statement about the accounting equation is true or false.',
      explanation: {
        en: `Remember the equation has THREE parts: assets = capital + liabilities.
- Assets always equal liabilities: FALSE. That forgets capital.
- Assets always greater than liabilities: FALSE. A business making big losses can owe more than it has.
- Capital is an asset: FALSE. Capital is a separate third part.
- Capital is a liability: FALSE. It is treated as its own item, what the business owes its owner.`,
        ru: `Помните: в уравнении ТРИ части: активы = капитал + обязательства.
- Активы всегда равны обязательствам: НЕВЕРНО. Забыт капитал.
- Активы всегда больше обязательств: НЕВЕРНО. Бизнес с большими убытками может быть должен больше, чем имеет.
- Капитал — актив: НЕВЕРНО. Капитал — отдельная третья часть.
- Капитал — обязательство: НЕВЕРНО. Это отдельная статья, «долг» бизнеса перед владельцем.`,
        uz: `Eslang: tenglamada UCH qism bor: aktivlar = kapital + majburiyatlar.
- Aktivlar doim majburiyatlarga teng: NOTO'G'RI. Kapital unutilgan.
- Aktivlar doim majburiyatlardan ko'p: NOTO'G'RI. Katta zarar ko'rgan biznes borligidan ko'p qarz bo'lishi mumkin.
- Kapital — aktiv: NOTO'G'RI. Kapital — alohida uchinchi qism.
- Kapital — majburiyat: NOTO'G'RI. Bu alohida modda, biznesning egasiga «qarzi».`,
      },
      columns: ['True', 'False'],
      rows: [
        { text: 'Total assets always equal total liabilities', correctIndex: 1 },
        { text: 'Total assets are always greater than total liabilities', correctIndex: 1 },
        { text: 'The owner\'s capital is one of the business\'s assets', correctIndex: 1 },
        { text: 'The owner\'s capital is one of the business\'s liabilities', correctIndex: 1 },
      ],
    },
    {
      id: 'ch03-q90',
      kitRef: 90,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is an input to an accounting system?',
      explanation: {
        en: `Inputs go INTO the system; outputs come OUT of it.
- Purchase invoices: source documents that go in. Input.
- Financial statements, payslips and the trial balance: all produced by the system. Outputs.
= Answer: purchase invoices`,
        ru: `Входы ПОСТУПАЮТ в систему, выходы ВЫХОДЯТ из неё.
- Счета на покупку: первичные документы, они поступают. Вход.
- Финансовая отчётность, расчётные листки и оборотная ведомость: всё это делает система. Выходы.
= Ответ: счета на покупку`,
        uz: `Kirish ma'lumotlari tizimga KIRADI, natijalar undan CHIQADI.
- Xarid hisob-fakturalari: kiradigan birlamchi hujjatlar. Kirish.
- Moliyaviy hisobot, hisob varaqalari va sinov balansi: hammasini tizim chiqaradi. Natijalar.
= Javob: xarid hisob-fakturalari`,
      },
      options: ['Purchase invoices', 'Financial statements', 'Employee payslips', 'The trial balance'],
      correctIndex: 0,
    },
    {
      id: 'ch03-q91',
      kitRef: 91,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is a source document for financial transactions?',
      explanation: {
        en: `A source document for a FINANCIAL transaction must show an amount of money that changes the accounts.
- Paying-in slip: shows money paid into the bank. Yes.
- Goods received note and delivery note: quantities only, no money.
- Supplier statement: only lists items already recorded.
= Answer: paying-in slip`,
        ru: `Первичный документ ФИНАНСОВОЙ операции должен показывать сумму денег, меняющую учёт.
- Приходный ордер банка: показывает внесённые в банк деньги. Да.
- Акт приёмки и накладная: только количество, без денег.
- Выписка поставщика: лишь перечисляет уже записанное.
= Ответ: приходный ордер банка`,
        uz: `MOLIYAVIY operatsiya birlamchi hujjati hisobni o'zgartiradigan pul summasini ko'rsatishi kerak.
- Bankka pul topshirish varaqasi: bankka topshirilgan pulni ko'rsatadi. Ha.
- Qabul qilish va yetkazib berish xatlari: faqat son, pul yo'q.
- Yetkazib beruvchi ko'chirmasi: faqat yozilganlarni sanaydi.
= Javob: bankka pul topshirish varaqasi`,
      },
      options: ['Paying-in slip', 'Goods received note', 'Statement of account from a supplier', 'Delivery note'],
      correctIndex: 0,
    },
    {
      id: 'ch03-q92',
      kitRef: 92,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is standing data when processing the monthly payroll?',
      explanation: {
        en: `Standing data is used again and again without changing. Which payroll item is the same every month?
- A one-off loan deduction: happens once. Not standing.
- This month's overtime hours: change every month. Not standing.
- A bonus for some staff: one-off. Not standing.
- Standard rates of pay: the same every month until a pay rise. Standing data.
= Answer: the standard rates of pay`,
        ru: `Постоянные данные используются снова и снова без изменений. Какая статья зарплаты одинакова каждый месяц?
- Разовое удержание за заём: один раз. Не постоянные.
- Сверхурочные часы этого месяца: меняются каждый месяц. Не постоянные.
- Бонус части сотрудников: разовый. Не постоянные.
- Стандартные ставки оплаты: одинаковы каждый месяц до повышения. Постоянные данные.
= Ответ: стандартные ставки оплаты`,
        uz: `Doimiy ma'lumot o'zgarmasdan qayta-qayta ishlatiladi. Ish haqining qaysi moddasi har oy bir xil?
- Qarz uchun bir martalik ushlab qolish: bir marta. Doimiy emas.
- Shu oydagi qo'shimcha soatlar: har oy o'zgaradi. Doimiy emas.
- Ba'zi xodimlarga bonus: bir martalik. Doimiy emas.
- Standart ish haqi stavkalari: oshirilguncha har oy bir xil. Doimiy ma'lumot.
= Javob: standart ish haqi stavkalari`,
      },
      options: [
        'A one-off deduction for a staff loan',
        'Overtime hours worked this month',
        'A bonus paid to selected staff',
        'The standard rates of pay',
      ],
      correctIndex: 3,
    },
    {
      id: 'ch03-q93',
      kitRef: 93,
      topicId: 'chapter-03',
      type: 'single',
      text: 'What is the correct order of activities in an accounting system?',
      explanation: {
        en: `You cannot work on data before it arrives, and you cannot produce results before the work is done.
# The order
  1. Inputs (documents go in)
  2. Processes (the system records and calculates)
  3. Outputs (reports come out)
= Answer: inputs, then processes, then outputs`,
        ru: `Нельзя обработать данные до их поступления и нельзя получить результат до обработки.
# Порядок
  1. Входы (документы поступают)
  2. Процессы (система записывает и считает)
  3. Выходы (выходят отчёты)
= Ответ: входы, затем процессы, затем выходы`,
        uz: `Ma'lumot kelmasdan uni ishlab bo'lmaydi, ishlamasdan natija olib bo'lmaydi.
# Tartib
  1. Kirish (hujjatlar kiradi)
  2. Jarayonlar (tizim yozadi va hisoblaydi)
  3. Natijalar (hisobotlar chiqadi)
= Javob: kirish, keyin jarayonlar, keyin natijalar`,
      },
      options: [
        'Outputs, then inputs, then processes',
        'Inputs, then processes, then outputs',
        'Processes, then inputs, then outputs',
        'Processes, then outputs, then inputs',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q94',
      kitRef: 94,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is NOT a process in an accounting system?',
      explanation: {
        en: `A process is something the system DOES. An output is something it PRODUCES.
- Updating ledger accounts: a process.
- Recording sales tax: a process.
- The aged analysis of receivables: a report the system produces, so an OUTPUT.
- Calculating balances: a process.
= Answer: the aged analysis of receivables`,
        ru: `Процесс — то, что система ДЕЛАЕТ. Выход — то, что она ВЫДАЁТ.
- Обновление счетов главной книги: процесс.
- Запись налога с продаж: процесс.
- Анализ дебиторов по срокам: отчёт, который выдаёт система, то есть ВЫХОД.
- Расчёт остатков: процесс.
= Ответ: анализ дебиторов по срокам`,
        uz: `Jarayon — tizim QILADIGAN narsa. Natija — u CHIQARADIGAN narsa.
- Bosh kitob hisoblarini yangilash: jarayon.
- Sotuv solig'ini yozish: jarayon.
- Debitorlarni muddatlar bo'yicha tahlili: tizim chiqaradigan hisobot, ya'ni NATIJA.
- Qoldiqlarni hisoblash: jarayon.
= Javob: debitorlarni muddatlar bo'yicha tahlili`,
      },
      options: [
        'Updating general ledger accounts',
        'Recording sales tax on transactions',
        'The aged analysis of receivables',
        'Calculating account balances',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q95',
      kitRef: 95,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is an output of a computerised accounting system?',
      explanation: {
        en: `Sort each into input, process or output.
- Pay rates: standing data, an input.
- The trial balance: produced by the system, an OUTPUT.
- Customer account details: standing data, an input.
- Summarising expenses: something the system does, a process.
= Answer: the trial balance`,
        ru: `Отнесите каждое к входу, процессу или выходу.
- Ставки оплаты: постоянные данные, вход.
- Оборотная ведомость: выдаётся системой, ВЫХОД.
- Данные счёта покупателя: постоянные данные, вход.
- Обобщение расходов: действие системы, процесс.
= Ответ: оборотная ведомость`,
        uz: `Har birini kirish, jarayon yoki natijaga ajrating.
- Ish haqi stavkalari: doimiy ma'lumot, kirish.
- Sinov balansi: tizim chiqaradi, NATIJA.
- Mijoz hisobi ma'lumotlari: doimiy ma'lumot, kirish.
- Xarajatlarni jamlash: tizim harakati, jarayon.
= Javob: sinov balansi`,
      },
      options: ['Pay rates', 'The trial balance', 'Customer account details', 'Summarising the expenses incurred'],
      correctIndex: 1,
    },
    {
      id: 'ch03-q96',
      kitRef: 96,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which statement defines cloud accounting?',
      explanation: {
        en: `The key words for cloud accounting are "remote servers", "many users" and "any time".
- Any computerised system: too broad. A program on one office computer is not the cloud.
- Many users reaching software and data on remote servers at any time: correct.
- Lets staff work from home: only one possible benefit, not the definition.
- Needs advanced computer skills: false.
= Answer: a system that gives many users access at any time to accounting software and data held on remote servers`,
        ru: `Ключевые слова облачного учёта: «удалённые серверы», «много пользователей» и «в любое время».
- Любая компьютерная система: слишком широко. Программа на одном офисном компьютере — не облако.
- Много пользователей в любое время получают доступ к программе и данным на удалённых серверах: верно.
- Позволяет работать из дома: лишь одно возможное преимущество, не определение.
- Нужны продвинутые компьютерные навыки: неверно.
= Ответ: система, дающая многим пользователям в любое время доступ к учётной программе и данным на удалённых серверах`,
        uz: `Bulutli hisobning kalit so'zlari: «masofaviy serverlar», «ko'p foydalanuvchi» va «istalgan vaqtda».
- Har qanday kompyuter tizimi: juda keng. Bitta ofis kompyuteridagi dastur bulut emas.
- Ko'p foydalanuvchi istalgan vaqtda masofaviy serverlardagi dastur va ma'lumotlarga kiradi: to'g'ri.
- Uydan ishlashga imkon beradi: faqat bitta mumkin bo'lgan afzallik, ta'rif emas.
- Ilg'or kompyuter ko'nikmalari kerak: noto'g'ri.
= Javob: ko'p foydalanuvchiga istalgan vaqtda masofaviy serverlardagi hisob dasturi va ma'lumotlarga kirish imkonini beruvchi tizim`,
      },
      options: [
        'Any accounting system run on a computer',
        'A system that gives many users access at any time to accounting software and data held on remote servers',
        'A system that lets staff work from home',
        'A system that only people with advanced computer skills can use',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q97',
      kitRef: 97,
      topicId: 'chapter-03',
      type: 'matrix',
      text: 'State whether each statement about cloud accounting is true or false.',
      explanation: {
        en: `Cloud access is shared, but controlled.
- An outside accountant or auditor can be given access: TRUE. That is one of the big advantages.
- Every employee sees all the data: FALSE. Access is limited. Pay details, for example, are usually seen only by payroll staff.`,
        ru: `Доступ в облаке общий, но контролируемый.
- Внешнему бухгалтеру или аудитору можно дать доступ: ВЕРНО. Это одно из главных преимуществ.
- Каждый сотрудник видит все данные: НЕВЕРНО. Доступ ограничен. Например, зарплаты обычно видят только сотрудники расчёта зарплаты.`,
        uz: `Bulutda kirish umumiy, lekin nazorat ostida.
- Tashqi buxgalter yoki auditorga kirish berish mumkin: TO'G'RI. Bu asosiy afzalliklardan biri.
- Har bir xodim barcha ma'lumotni ko'radi: NOTO'G'RI. Kirish cheklangan. Masalan, maoshlarni odatda faqat ish haqi xodimlari ko'radi.`,
      },
      columns: ['True', 'False'],
      rows: [
        {
          text: 'An outside accountant or auditor can be given remote access to the data they need',
          correctIndex: 0,
        },
        { text: 'Every employee is given access to all the data in the system', correctIndex: 1 },
      ],
    },
    {
      id: 'ch03-q98',
      kitRef: 98,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which statement best explains why financial records should be kept?',
      explanation: {
        en: `Records serve two groups: the owner inside the business, and outsiders such as lenders and the tax office.
- Every option with the word "only" leaves one group out.
- Decisions by the owner AND information for outsiders when appropriate: covers both.
= Answer: so that the owner can make decisions and give information to interested outside parties when appropriate`,
        ru: `Записи служат двум группам: владельцу внутри бизнеса и посторонним, например кредиторам и налоговой.
- Каждый вариант со словом «только» исключает одну группу.
- Решения владельца И информация для посторонних, когда нужно: охватывает обе.
= Ответ: чтобы владелец принимал решения и давал информацию заинтересованным сторонам, когда это уместно`,
        uz: `Yozuvlar ikki guruhga xizmat qiladi: biznes ichidagi egasiga va qarz beruvchilar, soliq idorasi kabi begonalarga.
- «Faqat» so'zi bor har bir variant bitta guruhni chiqarib tashlaydi.
- Egasining qarorlari VA kerak bo'lganda begonalarga ma'lumot: ikkalasini qamraydi.
= Javob: egasi qaror qabul qilishi va kerak bo'lganda manfaatdor tashqi tomonlarga ma'lumot berishi uchun`,
      },
      options: [
        'Only so that the owner can make management and control decisions',
        'Only so that the owner can work out any tax due',
        'So that the owner can make decisions and give information to interested outside parties when appropriate',
        'Only so that the owner can give information to outsiders',
      ],
      correctIndex: 2,
    },
    {
      id: 'ch03-q99',
      kitRef: 99,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is NOT a reason for an owner to keep financial records for INTERNAL use?',
      explanation: {
        en: `Note the words NOT and INTERNAL. Find the reason that serves outsiders.
- Managing and controlling the business: internal.
- Information for the general public: EXTERNAL, so this is the answer.
- Reconciling bank and cash: internal.
- Investment decisions about the business: internal.
= Answer: to give information that may interest the general public`,
        ru: `Обратите внимание на слова NOT и INTERNAL. Найдите причину, которая служит посторонним.
- Управлять и контролировать бизнес: внутреннее.
- Информация для широкой публики: ВНЕШНЕЕ, это и есть ответ.
- Сверять банк и кассу: внутреннее.
- Решения об инвестициях в бизнес: внутреннее.
= Ответ: дать информацию, которая может интересовать широкую публику`,
        uz: `NOT va INTERNAL so'zlariga e'tibor bering. Begonalarga xizmat qiladigan sababni toping.
- Biznesni boshqarish va nazorat qilish: ichki.
- Keng jamoatchilik uchun ma'lumot: TASHQI, javob shu.
- Bank va kassani solishtirish: ichki.
- Biznesga investitsiya qarorlari: ichki.
= Javob: keng jamoatchilikni qiziqtirishi mumkin bo'lgan ma'lumot berish`,
      },
      options: [
        'To manage and control the business',
        'To give information that may interest the general public',
        'To reconcile the bank and cash balances',
        'To make investment decisions about the business',
      ],
      correctIndex: 1,
    },
    {
      id: 'ch03-q100',
      kitRef: 100,
      topicId: 'chapter-03',
      type: 'single',
      text: 'Which of these is NOT a reason for an owner to keep financial records for EXTERNAL use?',
      explanation: {
        en: `Note the words NOT and EXTERNAL. Find the reason that serves the owner inside the business.
- Information for the tax authorities: external.
- Supporting loan applications: external (for lenders).
- Making investment decisions about the business: the owner's own decision, INTERNAL. This is the answer.
- Letting the public judge the business's impact: external.
= Answer: to make investment decisions about the business`,
        ru: `Обратите внимание на слова NOT и EXTERNAL. Найдите причину, которая служит владельцу внутри бизнеса.
- Информация для налоговой: внешнее.
- Поддержка заявок на заём: внешнее (для кредиторов).
- Решения об инвестициях в бизнес: решение самого владельца, ВНУТРЕННЕЕ. Это ответ.
- Дать публике оценить влияние бизнеса: внешнее.
= Ответ: принимать решения об инвестициях в бизнес`,
        uz: `NOT va EXTERNAL so'zlariga e'tibor bering. Biznes ichidagi egasiga xizmat qiladigan sababni toping.
- Soliq idorasi uchun ma'lumot: tashqi.
- Qarz arizalarini qo'llab-quvvatlash: tashqi (qarz beruvchilar uchun).
- Biznesga investitsiya qarorlari: egasining o'z qarori, ICHKI. Javob shu.
- Jamoatchilikka biznes ta'sirini baholashga imkon berish: tashqi.
= Javob: biznesga investitsiya qarorlarini qabul qilish`,
      },
      options: [
        'To give the tax authorities relevant information',
        'To support credit and loan applications to lenders',
        'To make investment decisions about the business',
        'To let the public judge the impact of the business on the community',
      ],
      correctIndex: 2,
    },
  ];

  if (typeof module !== 'undefined') module.exports = questions;
  else ((globalThis.ACCA ??= {}).questions ??= {})[TOPIC] = questions;
})();
