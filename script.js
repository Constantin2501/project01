let title = 'project01'
let screens = 'Простые, Сложные, Интерактивные'
let screenPrice = 10
let rollback = 50
let fullPrice = 100
let adaptive = true

console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)
console.log(screens.length)
console.log('"Стоимость разработки сайта' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани"' + ' ' + 'и "Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани"')
console.log(screens.toLowerCase().split(","))
console.log(fullPrice * rollback / 100)

