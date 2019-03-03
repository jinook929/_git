const secretNum = Math.floor(1 + (100 - 1 + 1) * Math.random())

let guess = Number(prompt('The number is between 1 and 100. Guess what?'))

// while(guess !== secretNum) {
//     guess = Number(prompt(`${guess} is wrong... Give me another guess!`))
// }

while(guess !== secretNum) {
if(guess > secretNum) {
    guess = Number(prompt(`${guess} is too big. Give me a smaller one!`))
} else if(guess < secretNum) {
    guess = Number(prompt(`${guess} is too small. Give me a bigger one!`))
}
}

alert(`Correct! The secret numer was ${guess}. Congratulation!!!`)

console.log(secretNum)
