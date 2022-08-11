const title = document.getElementsByTagName('h1')
console.log(title[0]);
const handlerBtn = document.getElementsByClassName('handler_btn')
console.log(handlerBtn);
const screenBtn = document.querySelector('.screen-btn')
console.log(screenBtn);
const otherItems1 = document.querySelectorAll('.percent')
console.log(otherItems1);
const otherItems2 = document.querySelectorAll('.number')
console.log(otherItems2);
const inputType = document.querySelector('.rollback input[type="range"]')
console.log(inputType);
const span = document.querySelector('.rollback .range-value')
console.log(span);
const totalInput = document.getElementsByClassName('total-input')
for (let i = 0; i < totalInput.length; i++) {
  const element = totalInput[i];
  console.log(element)
}
let screen = document.querySelectorAll('.screen')
console.log(screen);









// const appData = {
//  title: '',
//  screens: [],
//  screenPrice: 0,
//  adaptive: true,
//  rollback: 10,
//  fullPrice: 0,
//  servicePercentPrice: 0,
//  allServicePrices: 0,
//  services: {},
//  asking: function() {
//   do {
//     appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
//   } while (appData.isNumber(appData.title))

//   for (let i = 0; i < 2; i++) {
//     let name
//     let price = 0

//     do {
//       name = prompt('Какие типы экранов нужно разработать?')
//     } while (appData.isNumber(name))

//     do {
//       price = prompt('Сколько будет стоить данная работа?')
//     } while (!appData.isNumber(price)) 


//     appData.screens.push({id: i, name: name, price: price})
//   }

//   for (let i = 0; i < 2; i++) {
//     let name
//     let price = 0

//     do {
//       name = prompt('Какой дополнительный тип услуги нужен?')
//     } while (appData.isNumber(name))

//     do {
//       price = +prompt('Сколько это будет стоить?')
//     } while (!appData.isNumber(price))

//     appData.services[name] = +price
//   }

//     appData.adaptive = confirm('Нужен ли адаптив на сайте?')
//   },

//   addPrices: function() {
//     for (let screen of appData.screens) {
//       appData.screenPrice += +screen.price
//     }

//     for(let key in appData.services) {
//       appData.allServicePrices += appData.services[key]
//     }
//   },

//   isNumber: function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)
//   },

//   getFullPrice: function() {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices
//   },

//   getServicePercentPrices: function() {
//     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
//   },

//   getTitle: function() {
//     appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
//   },

//   getRollbackMessage: function(price) {
//     if (price >= 30000) {
//       return 'Даем скидку в 10%'
//     } else if (price >= 15000 && price < 30000) {
//       return 'Даем скидку в 5%'
//     } else if (price >= 0 && price < 15000) {
//       return 'Скидка не предусмотрена'
//     } else {
//       return 'Что то пошло не так'
//     }   
//   },

//   logger: function() {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.screens);
//   },
  
//   start: function() {
//     appData.asking()
//     appData.addPrices()
//     appData.getFullPrice()
//     appData.getServicePercentPrices()
//     appData.getTitle()

//     appData.logger()
//   }

// }







// appData.start()








