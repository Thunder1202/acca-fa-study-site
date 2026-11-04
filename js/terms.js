'use strict';

// Questions are in English, so Russian and Uzbek text shows the official English exam term
// beside the translated one. The English version of the same block decides which term is meant.
// Pattern words: "*" matches any further letters; a leading "?" marks a word that is shared by
// several terms in one group, used only when the English names just one of them.
(function () {
  const TERMS = [
    // Statements and their parts
    { en: ['statement of financial position', 'SFP'], ru: ['отч*т* о финансовом положени*'], uz: ['moliyaviy holat hisobot*'] },
    { en: ['statement of profit or loss and other comprehensive income', 'statement of profit or loss'], ru: ['отч*т* о прибыл* или убытк*', 'отч*т* о прибыл* и убытк*'], uz: ['foyda yoki zarar hisobot*'] },
    { en: ['statement of changes in equity'], ru: ['отч*т* об изменени* капитал*', 'отч*т* об изменени* в капитал*'], uz: ['kapitaldagi o\'zgarishlar hisobot*', 'kapital o\'zgarishlari hisobot*'] },
    { en: ['statement of cash flows'], ru: ['отч*т* о движени* денежн* средств', 'отч*т* о движени* денег'], uz: ['pul oqimlari to\'g\'risidagi hisobot*', 'pul oqimlari hisobot*'] },
    { en: ['other comprehensive income'], ru: ['проч* совокупн* доход*'], uz: ['boshqa umumlashgan daromad*'] },
    { en: ['total comprehensive income'], ru: ['общ* совокупн* доход*', 'совокупн* доход*'], uz: ['jami umumlashgan daromad*', 'umumlashgan daromad*'] },
    { en: ['notes'], ru: ['примечани*'], uz: ['izoh*'] },
    // Assets
    { en: ['non-current asset*'], ru: ['внеоборотн* актив*'], uz: ['uzoq muddatli aktiv*'] },
    { en: ['current asset*'], ru: ['оборотн* актив*'], uz: ['aylanma aktiv*'] },
    { en: ['property, plant and equipment', 'PPE'], ru: ['основн* средств*'], uz: ['asosiy vosita*'] },
    { en: ['intangible asset*', 'intangibles'], ru: ['нематериальн* актив*'], uz: ['nomoddiy aktiv*'] },
    { en: ['net assets'], ru: ['чист* актив*'], uz: ['sof aktiv*'] },
    { en: ['inventory', 'inventories'], ru: ['запас*'], uz: ['tovar zaxira*', 'zaxira*'] },
    { en: ['trade receivable*', 'receivable*'], ru: ['торгов* дебиторск* задолженност*', 'дебиторск* задолженност*', 'дебитор*'], uz: ['savdo debitor*', 'debitorlik qarz*', 'debitor*'] },
    { en: ['prepayment*', 'prepaid'], ru: ['предоплат*'], uz: ['oldindan to\'lov*', 'oldindan to\'langan*'] },
    { en: ['accrued income'], ru: ['начисленн* доход*'], uz: ['hisoblangan daromad*'] },
    { en: ['cash equivalents'], ru: ['денежн* эквивалент*', 'эквивалент*'], uz: ['pul ekvivalent*', 'ekvivalent*'] },
    { en: ['goodwill'], ru: ['гудвил*'], uz: ['gudvil*'] },
    // Liabilities
    { en: ['current liabilit*'], ru: ['краткосрочн* обязательств*'], uz: ['qisqa muddatli majburiyat*', 'joriy majburiyat*'] },
    { en: ['non-current liabilit*'], ru: ['долгосрочн* обязательств*'], uz: ['uzoq muddatli majburiyat*'] },
    { en: ['trade payable*', 'payable*'], ru: ['торгов* кредиторск* задолженност*', 'кредиторск* задолженност*', 'кредитор*'], uz: ['savdo kreditor*', 'kreditorlik qarz*', 'kreditor*'] },
    { en: ['accrual*', 'accrued expense*'], ru: ['начислени*', 'начисленн* расход*'], uz: ['hisoblangan xarajat*', 'hisoblanganlar*'] },
    { en: ['deferred income', 'prepaid income'], ru: ['доход* будущих периодов', 'отложенн* доход*'], uz: ['kelgusi davr daromad*', 'oldindan olingan daromad*', 'kechiktirilgan daromad*'] },
    { en: ['provision*'], ru: ['?резерв*'], uz: ['?rezerv*'], group: 'reserve' },
    { en: ['contingent liabilit*'], ru: ['условн* обязательств*'], uz: ['shartli majburiyat*'] },
    { en: ['contingent asset*'], ru: ['условн* актив*'], uz: ['shartli aktiv*'] },
    { en: ['legal obligation'], ru: ['правов* обязанност*'], uz: ['huquqiy burch*'] },
    { en: ['constructive obligation'], ru: ['обязанност* из практики'], uz: ['amaliyotdan kelib chiqqan burch*'] },
    { en: ['loan note*'], ru: ['долгов* нот*'], uz: ['qarz nota*'] },
    { en: ['overdraft*'], ru: ['овердрафт*'], uz: ['overdraft*'] },
    // Equity
    { en: ['equity share capital', 'share capital'], ru: ['акционерн* капитал*'], uz: ['aksiya kapital*'] },
    { en: ['share premium'], ru: ['эмиссионн* доход*'], uz: ['emissiya daromad*'] },
    { en: ['retained earnings'], ru: ['нераспредел*нн* прибыл*'], uz: ['taqsimlanmagan foyda*'] },
    { en: ['revaluation surplus'], ru: ['резерв* переоценки'], uz: ['qayta baholash rezerv*'], group: 'reserve' },
    { en: ['reserves'], ru: ['?резерв*'], uz: ['?rezerv*'], group: 'reserve' },
    { en: ['drawings'], ru: ['изъяти*'], uz: ['olib qo\'yish*'] },
    { en: ['ordinary shares', 'equity shares'], ru: ['обыкновенн* акци*'], uz: ['oddiy aksiya*'] },
    { en: ['redeemable preference shares'], ru: ['погашаем* привилегированн* акци*'], uz: ['qaytariladigan imtiyozli aksiya*'] },
    { en: ['irredeemable preference shares'], ru: ['непогашаем* привилегированн* акци*'], uz: ['qaytarilmaydigan imtiyozli aksiya*', 'qaytarilmaydiganlari*'] },
    { en: ['preference shares'], ru: ['привилегированн* акци*'], uz: ['imtiyozli aksiya*'] },
    { en: ['nominal value'], ru: ['номинал*'], uz: ['nominal*'] },
    { en: ['rights issue'], ru: ['выпуск* прав'], uz: ['huquqli chiqarish*'] },
    { en: ['bonus issue'], ru: ['бонусн* выпуск*'], uz: ['bonusli chiqarish*'] },
    { en: ['dividend*'], ru: ['дивиденд*'], uz: ['dividend*'] },
    { en: ['capital employed'], ru: ['задействованн* капитал*'], uz: ['jalb qilingan kapital*'] },
    // Profit and its parts
    { en: ['revenue'], ru: ['выручк*'], uz: ['tushum*'] },
    { en: ['cost of sales'], ru: ['себестоимост*'], uz: ['sotilgan tovar tannarx*', 'tannarx*'] },
    { en: ['gross profit margin'], ru: ['валов* марж*'], uz: ['yalpi foyda marja*'] },
    { en: ['gross profit'], ru: ['валов* прибыл*'], uz: ['yalpi foyda*'] },
    { en: ['operating profit margin'], ru: ['операционн* марж*'], uz: ['operatsion foyda marja*', 'operatsion marja*'] },
    { en: ['operating profit'], ru: ['операционн* прибыл*'], uz: ['operatsion foyda*'] },
    { en: ['profit before income taxes', 'profit before tax'], ru: ['прибыл* до налог*'], uz: ['soliqdan oldingi foyda*'] },
    { en: ['profit for the year'], ru: ['прибыл* за год'], uz: ['yil foyda*'] },
    { en: ['finance cost*', 'interest expense'], ru: ['финансов* расход*'], uz: ['moliyaviy xarajat*'] },
    { en: ['mark-up'], ru: ['наценк*'], uz: ['ustama*'] },
    { en: ['margin'], ru: ['марж*'], uz: ['marja*'] },
    { en: ['carriage inwards', 'carriage in'], ru: ['доставк* от поставщик*'], uz: ['yetkazib beruvchidan tashish*'] },
    { en: ['carriage outwards', 'carriage out'], ru: ['доставк* покупател*'], uz: ['mijozlarga tashish*', 'mijozga tashish*'] },
    // Recording
    { en: ['double entry', 'double-entry'], ru: ['двойн* запис*'], uz: ['ikki yoqlama yozuv*'] },
    { en: ['trial balance'], ru: ['оборотн* ведомост*'], uz: ['sinov balans*'] },
    { en: ['suspense account', 'suspense'], ru: ['сч*т* неясных сумм'], uz: ['vaqtinchalik hisob*'] },
    { en: ['general ledger', 'nominal ledger'], ru: ['главн* книг*'], uz: ['bosh kitob*'] },
    { en: ['journal'], ru: ['журнал*'], uz: ['jurnal*'] },
    { en: ['source document*'], ru: ['первичн* документ*'], uz: ['birlamchi hujjat*'] },
    { en: ['petty cash'], ru: ['мелк* касс*', 'касс*'], uz: ['mayda kassa*', 'kassa*'] },
    { en: ['imprest'], ru: ['имприст*'], uz: ['imprest*'] },
    { en: ['sales returns', 'returns inwards', 'returns inward'], ru: ['возврат* покупател*', 'возврат* продаж*', 'возврат* от покупател*'], uz: ['sotuv qaytarish*'] },
    { en: ['purchase returns', 'purchases returns', 'returns outwards', 'returns outward'], ru: ['возврат* поставщик*', 'возврат* закуп*'], uz: ['xarid qaytarish*'] },
    { en: ['trade discount*'], ru: ['торгов* скидк*'], uz: ['savdo chegirma*'] },
    { en: ['settlement discount*', 'early settlement discount*'], ru: ['скидк* за ранн* оплат*', 'скидк* за досрочн* оплат*'], uz: ['erta to\'lov chegirma*', 'muddatidan oldingi to\'lov chegirma*'] },
    { en: ['discount* received'], ru: ['полученн* скидк*'], uz: ['olingan chegirma*'] },
    { en: ['discount* allowed'], ru: ['предоставленн* скидк*'], uz: ['berilgan chegirma*'] },
    { en: ['sales tax'], ru: ['налог* с продаж'], uz: ['sotuv solig*', 'savdo solig*'] },
    { en: ['output tax'], ru: ['выходн* налог*'], uz: ['chiqish solig*'] },
    { en: ['input tax'], ru: ['входн* налог*'], uz: ['kirish solig*'] },
    { en: ['contra'], ru: ['взаимозач*т*'], uz: ['o\'zaro hisob-kitob*', 'o\'zaro hisob*'] },
    { en: ['credit note'], ru: ['кредит-нот*'], uz: ['kredit-nota*'] },
    { en: ['remittance advice'], ru: ['извещени* об оплате'], uz: ['to\'lov xabarnoma*'] },
    // Non-current assets and inventory valuation
    { en: ['accumulated depreciation'], ru: ['накопленн* амортизаци*'], uz: ['to\'plangan amortizatsiya*'], group: 'amort' },
    { en: ['depreciation'], ru: ['?амортизаци*'], uz: ['?amortizatsiya*'], group: 'amort' },
    { en: ['amortisation'], ru: ['амортизаци* нематериальн* актив*', '?амортизаци*'], uz: ['nomoddiy aktivlar amortizatsiya*', '?amortizatsiya*'], group: 'amort' },
    { en: ['carrying amount'], ru: ['балансов* стоимост*'], uz: ['balans qiymat*'] },
    { en: ['residual value'], ru: ['ликвидационн* стоимост*'], uz: ['tugatish qiymat*'] },
    { en: ['useful life'], ru: ['срок* полезного использования'], uz: ['foydali muddat*'] },
    { en: ['reducing balance'], ru: ['уменьшаем* остатк*', 'уменьшаем* остат*'], uz: ['kamayuvchi qoldiq*'] },
    { en: ['straight line', 'straight-line'], ru: ['линейн*'], uz: ['to\'g\'ri chiziq*'] },
    { en: ['revaluation'], ru: ['переоценк*'], uz: ['qayta baholash*'] },
    { en: ['impairment'], ru: ['обесцене*'], uz: ['qadrsizlan*'] },
    { en: ['disposal*'], ru: ['выбыти*'], uz: ['chiqib ketish*', 'chiqish*'] },
    { en: ['capital expenditure'], ru: ['капитальн* затрат*'], uz: ['kapital xarajat*'] },
    { en: ['revenue expenditure'], ru: ['текущ* затрат*'], uz: ['joriy xarajat*'] },
    { en: ['net realisable value', 'NRV'], ru: ['чист* стоимост* реализации', 'ЧСР'], uz: ['sof sotish qiymat*', 'SSQ'] },
    { en: ['work in progress'], ru: ['незавершённ* производств*', 'незавершенн* производств*'], uz: ['tugallanmagan ishlab chiqarish*'] },
    { en: ['research'], ru: ['исследовани*'], uz: ['tadqiqot*'] },
    { en: ['development'], ru: ['разработк*'], uz: ['ishlanma*'] },
    // Receivables and payables
    { en: ['irrecoverable debt*'], ru: ['безнад*жн* долг*', 'безнад*жн* задолженност*'], uz: ['undirib bo\'lmaydigan qarz*', 'umidsiz qarz*'] },
    { en: ['allowance for receivables', 'allowance'], ru: ['резерв* по дебиторск* задолженност*', 'резерв* по дебитор*', '?резерв*'], uz: ['debitorlik rezerv*', '?rezerv*'], group: 'reserve' },
    { en: ['aged receivables analysis'], ru: ['анализ* дебиторов по срокам'], uz: ['debitorlarni muddatlar bo\'yicha tahlil*'] },
    { en: ['credit limit'], ru: ['кредитн* лимит*'], uz: ['kredit limit*'] },
    { en: ['supplier statement*', 'statement of account'], ru: ['выписк* поставщик*'], uz: ['yetkazib beruvchi ko\'chirma*'] },
    // Bank
    { en: ['bank reconciliation'], ru: ['банковск* сверк*', 'сверк* с банк*'], uz: ['bank solishtirish*'] },
    { en: ['bank statement'], ru: ['банковск* выписк*', 'выписк* банк*'], uz: ['bank ko\'chirma*'] },
    { en: ['unpresented cheque*', 'payments not yet presented'], ru: ['непредъявленн* (?:чек*|платеж*|платёж*)'], uz: ['taqdim etilmagan (?:chek*|to\'lov*)'] },
    { en: ['uncleared lodgement*', 'outstanding lodgement*', 'lodgements not yet cleared'], ru: ['незачисленн* поступлени*'], uz: ['o\'tmagan tushum*'] },
    { en: ['dishonoured cheque*'], ru: ['возвращ*нн* чек*'], uz: ['qaytgan chek*', 'qaytarilgan chek*'] },
    // Errors
    { en: ['error of omission'], ru: ['ошибк* пропуска'], uz: ['tushib qolish xato*'] },
    { en: ['error of commission'], ru: ['ошибк* сч*та'], uz: ['noto\'g\'ri hisob xato*'] },
    { en: ['error of principle'], ru: ['нарушени* принципа'], uz: ['tamoyil xato*'] },
    { en: ['compensating error*'], ru: ['компенсирующ* ошибк*'], uz: ['kompensatsiyalovchi xato*'] },
    { en: ['error of original entry'], ru: ['ошибк* исходной записи'], uz: ['dastlabki yozuv xato*'] },
    { en: ['reversal of entries'], ru: ['обратн* запис*'], uz: ['teskari yozuv*'] },
    // Tax
    { en: ['income tax*'], ru: ['налог* на прибыль'], uz: ['foyda solig*'] },
    { en: ['underprovision', 'under-provision'], ru: ['недоначислени*'], uz: ['kam hisoblangan*'] },
    { en: ['overprovision', 'over-provision'], ru: ['переначислени*'], uz: ['ko\'p hisoblangan*', 'ortiqcha hisoblangan*'] },
    // Concepts and regulation
    { en: ['going concern'], ru: ['непрерывност* деятельност*'], uz: ['uzluksiz*'] },
    { en: ['materiality', 'material'], ru: ['существенн*'], uz: ['muhimlik*'] },
    { en: ['substance over form'], ru: ['приоритет* содержания над формой'], uz: ['shakldan mazmunning ustunlig*', 'mazmunning shakldan ustunlig*'] },
    { en: ['prudence'], ru: ['осмотрительност*'], uz: ['ehtiyotkorlik*'] },
    { en: ['accrual basis', 'accruals basis', 'accrual accounting'], ru: ['метод* начисления', 'принцип* начисления'], uz: ['hisoblash usul*'] },
    { en: ['faithful representation'], ru: ['правдив* представлени*', 'достоверн* представлени*'], uz: ['haqqoniy aks ettirish*', 'ishonchli aks ettirish*'] },
    { en: ['relevance', 'relevant'], ru: ['уместност*', 'уместн*'], uz: ['tegishlilik*', 'ahamiyatlilik*'] },
    { en: ['comparability'], ru: ['сопоставимост*'], uz: ['taqqoslanuvchanlik*', 'solishtiriluvchanlik*'] },
    { en: ['stewardship'], ru: ['управлени* ресурсами'], uz: ['ishonchli boshqaruv*'] },
    { en: ['sole trader*'], ru: ['индивидуальн* предпринимател*'], uz: ['yakka tadbirkor*'] },
    { en: ['partnership*'], ru: ['товариществ*', 'партн*рств*'], uz: ['sheriklik*'] },
    { en: ['limited liability compan*', 'limited liability'], ru: ['ограниченн* ответственност*'], uz: ['mas\'uliyati cheklangan*', 'cheklangan javobgarlik*'] },
    // Events and revenue
    { en: ['adjusting event*'], ru: ['корректирующ* событи*'], uz: ['tuzatuvchi voqea*'] },
    { en: ['non-adjusting event*'], ru: ['некорректирующ* событи*'], uz: ['tuzatmaydigan voqea*'] },
    { en: ['performance obligation*'], ru: ['обязанност* к исполнению'], uz: ['bajarish majburiyat*'] },
    { en: ['transaction price'], ru: ['цен* сделки'], uz: ['bitim narx*'] },
    // Cash flows
    { en: ['operating activities'], ru: ['операционн* деятельност*'], uz: ['operatsion faoliyat*'] },
    { en: ['investing activities'], ru: ['инвестиционн* деятельност*'], uz: ['investitsion faoliyat*'] },
    { en: ['financing activities'], ru: ['финансов* деятельност*'], uz: ['moliyaviy faoliyat*'] },
    { en: ['indirect method'], ru: ['косвенн* метод*'], uz: ['bilvosita usul*'] },
    { en: ['direct method'], ru: ['прям* метод*'], uz: ['to\'g\'ridan-to\'g\'ri usul*'] },
    { en: ['cash generated from operations'], ru: ['деньг* от операций', 'денежн* средств* от операций'], uz: ['operatsiyalardan pul*'] },
    // Interpretation
    { en: ['return on capital employed', 'ROCE'], ru: ['рентабельност* задействованн* капитал*'], uz: ['jalb qilingan kapital rentabellig*'] },
    { en: ['asset turnover', 'net asset turnover'], ru: ['оборачиваемост* (?:чист* )?актив*'], uz: ['(?:sof )?aktivlar aylanma*'] },
    { en: ['current ratio'], ru: ['текущ* ликвидност*'], uz: ['joriy koeffitsient*', 'joriy likvidlik*'] },
    { en: ['quick ratio', 'acid test'], ru: ['быстр* ликвидност*'], uz: ['tezkor koeffitsient*', 'tezkor likvidlik*'] },
    { en: ['inventory days', 'inventory holding period', 'inventory turnover'], ru: ['оборачиваемост* запас*', 'дн* запас*'], uz: ['zaxira kunlar*', 'zaxira aylanma*'] },
    { en: ['receivables days', 'receivables collection period'], ru: ['дн* дебитор*', 'период* погашения дебитор*'], uz: ['debitorlik kunlar*', 'debitorlik muddat*'] },
    { en: ['payables days', 'payables payment period'], ru: ['дн* кредитор*', 'период* оплаты кредитор*'], uz: ['kreditorlik kunlar*', 'kreditorlik muddat*'] },
    { en: ['cash conversion cycle'], ru: ['цикл* оборота денег'], uz: ['pul aylanish sikl*'] },
    { en: ['gearing'], ru: ['финансов* рычаг*', 'рычаг*'], uz: ['moliyaviy leveraj*', 'leveraj*'] },
    { en: ['interest cover'], ru: ['покрыти* процент*'], uz: ['foizlarni qoplash*'] },
    { en: ['liquidity'], ru: ['ликвидност*'], uz: ['likvidlik*'] },
    { en: ['profitability'], ru: ['рентабельност*'], uz: ['rentabellik*'] },
    // Groups
    { en: ['parent'], ru: ['материнск* компани*', 'материнск*'], uz: ['bosh kompaniya*'] },
    { en: ['subsidiar*'], ru: ['дочерн* компани*', 'дочерн*'], uz: ['sho\'ba kompaniya*', 'sho\'ba*'] },
    { en: ['non-controlling interest', 'NCI'], ru: ['неконтролирующ* дол*'], uz: ['nazoratsiz ulush*'] },
    { en: ['consolidated financial statements', 'consolidated'], ru: ['консолидированн* отч*тност*', 'консолидированн*'], uz: ['konsolidatsiyalangan hisobot*', 'konsolidatsiya*'] },
    { en: ['fair value'], ru: ['справедлив* стоимост*'], uz: ['adolatli qiymat*'] },
    { en: ['unrealised profit', 'provision for unrealised profit', 'PURP'], ru: ['нереализованн* прибыл*'], uz: ['amalga oshmagan foyda*'] },
    { en: ['pre-acquisition'], ru: ['до покупки'], uz: ['xariddan oldingi*'] },
    { en: ['post-acquisition'], ru: ['после покупки'], uz: ['xariddan keyingi*'] },
    { en: ['intra-group'], ru: ['внутригруппов*'], uz: ['guruh ichidagi*'] },
    { en: ['associate*'], ru: ['ассоциированн*'], uz: ['assotsiatsiyalangan*'] },
    { en: ['significant influence'], ru: ['значительн* влияни*'], uz: ['sezilarli ta\'sir*'] },
    { en: ['equity method', 'equity accounting'], ru: ['метод* долевого участия'], uz: ['ulushli qatnashish*'] },
    { en: ['trade investment', 'simple investment'], ru: ['прост* вложени*'], uz: ['oddiy sarmoya*'] },
    { en: ['control'], ru: ['контрол*'], uz: ['nazorat*'], skip: [/^nazoratsiz/i] },
    { en: ['incomplete records'], ru: ['неполн* запис*'], uz: ['to\'liq bo\'lmagan yozuv*'] },
  ];

  const LETTER = "[\\p{L}'’]";
  const compiled = new WeakMap();

  function toRegex(pattern) {
    const body = pattern.replace(/^\?/, '').split(' ').map((word) => word
      .replace(/[.+^${}|[\]\\]/g, '\\$&')
      .replace(/’/g, "'")
      .replace(/'/g, "['’]")
      .replace(/\*/g, `${LETTER}*`)).join('\\s+');
    return new RegExp(`(?<!${LETTER})(?:${body})(?!${LETTER})`, 'giu');
  }

  function patterns(term, lang) {
    if (!compiled.has(term)) {
      const make = (list) => list.map((p) => ({ shared: p.startsWith('?'), re: toRegex(p) }));
      compiled.set(term, { en: make(term.en), ru: make(term.ru), uz: make(term.uz) });
    }
    return compiled.get(term)[lang];
  }

  function display(match) {
    return match.replace(/\s+/g, ' ').split(' ').map((w) => (/^[A-Z0-9&]{2,}$/.test(w) ? w : w.toLowerCase())).join(' ');
  }

  function firstMatch(text, list, allowShared, skip = []) {
    for (const { shared, re } of list) {
      if (shared && !allowShared) continue;
      re.lastIndex = 0;
      let m = re.exec(text);
      while (m && skip.some((rule) => rule.test(m[0]))) m = re.exec(text);
      if (m) return { start: m.index, end: m.index + m[0].length, text: m[0] };
    }
    return null;
  }

  // The terms the English version of this block uses, keeping only the longest where two overlap.
  function activeTerms(enText) {
    const found = TERMS.map((term) => ({ term, match: firstMatch(enText, patterns(term, 'en'), true) })).filter((x) => x.match);
    return found.filter((a) => !found.some((b) => b !== a
      && b.match.start <= a.match.start && b.match.end >= a.match.end
      && b.match.end - b.match.start > a.match.end - a.match.start));
  }

  function annotate(text, enText, lang, seen = new Set()) {
    if (lang === 'en' || !text || !enText) return [{ text }];
    const active = activeTerms(enText);
    const groupCount = {};
    for (const { term } of active) if (term.group) groupCount[term.group] = (groupCount[term.group] ?? 0) + 1;
    const lower = text.toLowerCase();
    const hits = [];
    for (const { term, match } of active) {
      const label = display(match.text);
      if (seen.has(label.toLowerCase()) || lower.includes(label.toLowerCase())) continue;
      const hit = firstMatch(text, patterns(term, lang), !term.group || groupCount[term.group] === 1, term.skip);
      if (hit) hits.push({ ...hit, label });
    }
    hits.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
    const kept = [];
    for (const hit of hits) if (!kept.some((k) => hit.start < k.end && hit.end > k.start)) kept.push(hit);
    for (const hit of kept) seen.add(hit.label.toLowerCase());
    const segments = [];
    let at = 0;
    for (const hit of kept) {
      if (hit.start > at) segments.push({ text: text.slice(at, hit.start) });
      segments.push({ text: hit.text, term: hit.label });
      at = hit.end;
    }
    if (at < text.length) segments.push({ text: text.slice(at) });
    return segments.length ? segments : [{ text }];
  }

  const api = { annotate, TERMS, toRegex };
  if (typeof module !== 'undefined') module.exports = api;
  else (globalThis.ACCA ??= {}).terms = api;
})();
