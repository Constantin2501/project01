const stringFunction = (string) => {

  if (typeof string !== 'string') {
    console.log('ВВедена не строка');
  } else {
    string = string.trim()
  }
  
  if (string.length > 30) {
    string = string.substr(0, 30) + '...'
  }

  console.log(string)

}

stringFunction()





