// Chapter 10: facts the Kaplan and BPP questions test that the visible lesson did not state.
module.exports = require('./facts.js')(10, {
  3: [
    ['Total expense for the year = debts written off + increase in allowance (or - decrease) - debts recovered. If the answer is negative, it is a credit (income).',
      'Общий расход за год = списанные долги + рост резерва (или - снижение) - возвращённые долги. Если ответ отрицательный, это кредит (доход).',
      'Yillik umumiy xarajat = hisobdan chiqarilgan qarzlar + zaxira o\'sishi (yoki - kamayishi) - qaytarilgan qarzlar. Javob manfiy bo\'lsa, bu kredit (daromad).'],
    ['Some questions set the allowance as a % of receivables. Take the % of receivables AFTER the write-offs, never before.',
      'Иногда резерв задают как % от дебиторки. Берите % от дебиторки ПОСЛЕ списаний, никогда не до.',
      'Ba\'zan zaxira debitorlikning foizi sifatida beriladi. Foizni hisobdan chiqarishdan KEYINGI debitorlikdan oling, hech qachon oldingisidan emas.'],
    ['"The new allowance is 25% higher than last year\'s": last year = new / 1.25. "$6,000 is one quarter higher than now": now = $6,000 / 1.25 = $4,800, so the increase is $1,200.',
      '«Новый резерв на 25% больше прошлогоднего»: прошлый = новый / 1,25. «$6,000 на четверть больше текущего»: текущий = $6,000 / 1,25 = $4,800, значит рост $1,200.',
      '"Yangi zaxira o\'tgan yilgidan 25% ko\'p": o\'tgan yilgi = yangi / 1,25. "$6,000 hozirgidan chorak ko\'p": hozirgi = $6,000 / 1,25 = $4,800, demak o\'sish $1,200.'],
    ['An increase in the allowance posted as a decrease (or the other way round) puts profit and net receivables wrong by TWICE the amount.',
      'Рост резерва, проведённый как снижение (или наоборот), искажает прибыль и чистую дебиторку на ДВОЙНУЮ сумму.',
      'Zaxira o\'sishi kamayish sifatida yozilsa (yoki aksincha), foyda va sof debitorlik IKKI BARAVAR summaga noto\'g\'ri bo\'ladi.'],
    ['Setting up an allowance for the first time: Dr Irrecoverable debts expense, Cr Allowance for receivables, for the whole amount.',
      'Первое создание резерва: Дт Расход по безнадёжным долгам, Кт Резерв по дебиторке, на всю сумму.',
      'Zaxirani birinchi marta yaratish: Dt Umidsiz qarzlar xarajati, Kt Debitorlik zaxirasi, butun summaga.'],
  ],
});
