let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

console.log('--------------------------------')

let square = function(num) {
    let result = num ** 2
    return result
}

let value = square(3)
let anotherValue = square(10)
console.log(value + ' = ' + square(3))
console.log(anotherValue + ' =' + square(10))

console.log('--------------------------------')

let x = [3, 6, 9, 10]
// square(3)
// square(6)
// square(9)
// square(10)
x.push(99)
x.unshift(100)

console.log(x)
for(i=0; i < x.length; i++) {
    let z = [square(x[i])]
    console.log(x[i] + ' squared => ' + z)
}

console.log('--------------------------------')

let celsius = function(fahrenheit) {
    let converted = (fahrenheit - 32) * 5 / 9
    return converted
}

let fahrenheit = [32, 68]
let dataOne = celsius(fahrenheit[0])
let dataTwo = celsius(fahrenheit[1])

console.log(celsius(fahrenheit[0]))
console.log(celsius(fahrenheit[1]))
console.log(fahrenheit[0] + 'ºF is ' + dataOne + 'ºC.')
console.log(fahrenheit[1] + 'ºF is ' + dataTwo + 'ºC.')

