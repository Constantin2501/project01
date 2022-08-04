let title
let screens
let screenPrice
let adaptive
let servicePrice1
let servicePrice2
let rollback = 10
let fullPrice
let servicePercentPrice
let allServicePrices



const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}


const asking = function() {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
  screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

  screenPrice = prompt('Сколько будет стоить данная работа?')

  while (!isNumber(screenPrice)) {
    screenPrice = prompt('Сколько будет стоить данная работа?')
  }

  adaptive = confirm('Нужен ли адаптив на сайте?')
}


const showTypeOf = function(variable) {
  console.log(variable, typeof variable)
}


const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%'
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%'
  } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что то пошло не так'
  }   
}


const getAllServicePrices = function() {
  let sum = 0

  for (let i = 0; i < 2; i++) {

    if  (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?')
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?')
    }

    sum += +prompt('Сколько это будет стоить?')
  }

  return sum
  // return servicePrice1 + servicePrice2
}

function getFullPrice() {
  return screenPrice + allServicePrices
}

function getTitle() {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
  }

function getServicePercentPrices() {
  servicePercentPrice = screenPrice + servicePrice1 + servicePrice2
}


asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getAllServicePrices()
title = getTitle()


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log('allServicePrices', allServicePrices)


console.log(getRollbackMessage(fullPrice))
console.log(typeof title)
console.log(typeof screenPrice)
console.log(typeof adaptive)


console.log(screens.length)
console.log(servicePercentPrice)

console.log('"Стоимость разработки сайта' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани"' + ' ' + 'и "Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани"')


