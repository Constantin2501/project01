

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice
let rollback

switch (true) {
  case fullPrice >= 30000:
    servicePercentPrice = Math.floor(fullPrice - (fullPrice / 100 * 10))
    console.log('Даем скидку в 10%')
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    servicePercentPrice = Math.floor(fullPrice - (fullPrice / 100 * 5))
    console.log('Даем скидку в 5%')
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log('скидка не предусмотрена')
    break;
  case fullPrice < 0:
    console.log('Что то пошло не так')
    break;
}


console.log(servicePercentPrice)



// console.log(typeof title)
// console.log(typeof fullPrice)
// console.log(typeof adaptive)
// console.log(screens.length)
// console.log('"Стоимость разработки сайта' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани"' + ' ' + 'и "Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани"')
// console.log(screens.toLowerCase().split(","))
// console.log(fullPrice * rollback / 100)



