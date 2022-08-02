// const lang = (language) => {
//   if (language === 'ru') {
//     console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье')
//   }
//   else if (language === 'en')
//   console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
// }

// lang('ru')


const namePerson = (name) => {
  name === 'Артем' ? console.log('директор') : (name === 'Александр' ? console.log('преподаватель') : console.log('студент'))
 
  
}

namePerson('Артем')