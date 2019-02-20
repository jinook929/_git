let fahrenheit = [95, 32, 14]

let celsius = function(fahrenheit) {
    let converted = (fahrenheit - 32) * 5 / 9

    if(converted <= 0) {
        let isFreezing = true
        console.log('Is it freezing outside? ' + isFreezing)
        console.log('It is ' + converted + ' degree celsius.')
        console.log(' ')
    } else {
        let isFreezing = false
        console.log('Is it freezing outside? ' + isFreezing)
        console.log('It is ' + converted + ' degree celsius.')
        console.log(' ')
    }

    return converted
}

// let dataOne = celsius(95)
let dataOne = celsius(fahrenheit[0])
let dataTwo = celsius(fahrenheit[1])
let dataThree = celsius(fahrenheit[2])

// console.log('It is ' + dataOne + ' degree celsius.')
// console.log('It is' + celsius(fahrenheit[0]) + ' degree celsius.')
// console.log(celsius(fahrenheit[1]))
// console.log(celsius(fahrenheit[2]))
// console.log(fahrenheit[0] + 'ºF is ' + dataOne + 'ºC.'), 32, 14
// console.log(fahrenheit[1] + 'ºF is ' + dataTwo + 'ºC.') converted