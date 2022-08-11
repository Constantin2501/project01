const banner = document.querySelector('.adv')
const books = document.querySelectorAll('.books')
const book = document.querySelectorAll('.book')
const body = document.querySelectorAll('body')
const bookh2 = document.querySelectorAll('.book a')
const li = document.querySelectorAll('.book li')
const newChapter = document.createElement('li')



document.body.style.backgroundImage = 'url(./image/adv.jpg)'
banner.remove()
books[0].prepend(book[1])
books[0].append(book[2])
book[3].before(book[4])
bookh2[4].textContent = 'Книга 3. this и Прототипы Объектов'
li[6].after(li[5])
li[4].before(li[6])
li[6].after(li[8])
li[48].before(li[55])
li[48].before(li[49])
li[48].before(li[50])
newChapter.textContent = 'Глава 8: За пределами ES6'
li[25].after(newChapter)







