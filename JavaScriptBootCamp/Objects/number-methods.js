// let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


// let min = 1
// let max = 6
// let randomNum = Math.floor(min + (max - min + 1) * Math.random())
// console.log(randomNum)

// // let theNum = function (randomNum) {
// //     let x = min + (max - min + 1) * randomNum
// //     return Math.floor(x)
// // }
// // console.log(theNum(randomNum))

// let guess = function (number) {
//     return number === randomNum
// }

// console.log(guess(5))

let guessTheNumber = function (guess) {
    let min = 1
    let max = 6
    let randomNumber = Math.floor(min + (max - min + 1) * Math.random())
    console.log(randomNumber)
    return guess === randomNumber
}

console.log(guessTheNumber(5))