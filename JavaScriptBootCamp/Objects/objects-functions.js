let firstBook = {
    title: '1984',
    author: 'George Orwell',
    pages: 326
}

let secondBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pages: 723
}

let getBookInfo = function(book) {
    console.log(`${book.title} by ${book.author}`)
}

getBookInfo(firstBook)
getBookInfo(secondBook)

// --------------------------------

let fahrenheit = 74

let celsius = function(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
} 

let kelvin = function(celsius) {
    return ((fahrenheit - 32) * 5 / 9) + 273.15
}

let temp = {
    f: fahrenheit,
    c: celsius(fahrenheit),
    k: kelvin(fahrenheit)
}

 console.log(temp)

//  -------------------------------

let convertTemp = function(fahren) {
    return {
        fahren: fahren,
        cels: (fahren- 32) * 5 / 9,
        kel: ((fahren - 32) * 5 / 9) + 273.15
    }
}

let temps = convertTemp(32)
console.log(temps)
