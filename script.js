
const appData = {
 title: '',
 screens: '',
 screenPrice: 0,
 adaptive: true,
 rollback: 10,
 fullPrice: 0,
 servicePercentPrice: 0,
 allServicePrices: 0,
 service1: '',
 service2: '',
 asking: function() {
  appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
  appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

  do {
    appData.screenPrice = prompt('Сколько будет стоить данная работа?')
  } while (!isNumber(appData.screenPrice)) 

  appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  }


}



const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}




const getAllServicePrices = function() {
  let sum = 0

  for (let i = 0; i < 2; i++) {
    let price = 0

    if  (i === 0) {
      appData.service1 = prompt('Какой дополнительный тип услуги нужен?')
    } else if (i === 1) {
      appData.service2 = prompt('Какой дополнительный тип услуги нужен?')
    }

    do {
      price = +prompt('Сколько это будет стоить?')
    } while (!isNumber(price))

    sum += price
  }

  return sum
}



function getFullPrice() {
  return +appData.screenPrice + appData.allServicePrices
}

function getServicePercentPrices() {
  return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
}


function getTitle() {
  return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
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





appData.asking()
appData.allServicePrices = getAllServicePrices()
appData.fullPrice = getFullPrice()
appData.servicePercentPrice = getServicePercentPrices()
appData.title = getTitle()

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);







