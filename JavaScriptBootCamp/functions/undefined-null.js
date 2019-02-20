let name
// name = 'jen'

if(name === undefined) {
    console.log('Please provide a name!')
} else {
    console.log(name)
}

console.log('--------------------------------')

let square = function(num) {
    // num = num
    console.log(num)
}

square() // <= first undefined [undefined function argument]
let result = square() // <= second undefined [default function return when undefined argument used]
console.log(result) // <= third undefined

console.log('--------------------------------')

let age = 44

age = undefined

console.log(age)

age = null

console.log(age)