

// let title = 'project01'
// let screens = 'Простые, Сложные, Интерактивные'
// let screenPrice = 10
// let rollback = 50
// let fullPrice = 100
// let adaptive = true
// let service1 = ''
// let service2 = ''
// let servicePrice1 = 0
// let servicePrice2 = 0
// let servicePercentPrice = 0


// // title = prompt('Как называется ваш проект?')
// // screens = prompt('Какие типы экранов нужно разработать?')

// // switch (screens) {
// //   case 'простые':
// //     break;
// //   case 'сложные':
// //     break;
// //   case 'интерактивные':
// //     break;
// //   default:
// //     alert('Выберите тип экрана: простые, сложные, интерактивные');
// // }

// // screenPrice = +prompt('Сколько будет стоить данная работа?')
// // adaptive = confirm('Нужен ли адаптив на сайте?')
// // service1 = prompt('Какой дополнительный тип услуги нужен?')
// // servicePrice1 = +prompt('Сколько это будет стоить?')
// // service2 = prompt('Какой дополнительный тип услуги нужен?')
// // servicePrice2 = +prompt('Сколько это будет стоить?')
// fullPrice = screenPrice + servicePrice1 + servicePrice2


let fullPrice = 30000
let servicePercentPrice = 0

switch (fullPrice) {
  case fullPrice >= 30000:
    servicePercentPrice = Math.floor(fullPrice - (fullPrice / 100 * 10))
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    servicePercentPrice = Math.floor(fullPrice - (fullPrice / 100 * 5))
    break;
  case fullPrice < 15000 && fullPrice >= 0:
    console.log('скидка не предусмотрена')
    break;
  case fullPrice < 0:
    console.log('Что то пошло не так')
    break;
}

console.log(servicePercentPrice)


// console.log(title)
// console.log(screens)
// console.log(screenPrice)
// console.log(adaptive)
// console.log(service1)
// console.log(servicePrice1)
// console.log(service2)
// console.log(servicePrice2)
// console.log(fullPrice)
// console.log(servicePercentPrice)









// console.log(typeof title)
// console.log(typeof fullPrice)
// console.log(typeof adaptive)
// console.log(screens.length)
// console.log('"Стоимость разработки сайта' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани"' + ' ' + 'и "Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани"')
// console.log(screens.toLowerCase().split(","))
// console.log(fullPrice * rollback / 100)



