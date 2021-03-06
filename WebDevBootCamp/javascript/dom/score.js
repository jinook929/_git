// alert('hello')

var p1Button = document.querySelector('#p1Button')
var p2Button = document.querySelector('#p2Button')
var resetButton = document.querySelector('#resetButton')
var p1ScoreDisplay = document.querySelector('#p1ScoreDisplay')
var p2ScoreDisplay = document.querySelector('#p2ScoreDisplay')
var input = document.querySelector('input')
var winningScoreDisplay = document.querySelector('p span')
var p1Score = 0
var p2Score = 0
var winningScore = 5
var gameOver = false

// console.log(p1ScoreDisplay)

p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Score++
        if (p1Score === winningScore) {
            p1ScoreDisplay.classList.add('winner')
            gameOver = true
        }
        p1ScoreDisplay.textContent = p1Score
    }
})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Score++
        if (p2Score === winningScore) {
            p2ScoreDisplay.classList.add('winner')
            gameOver = true
        }
        p2ScoreDisplay.textContent = p2Score
    }
})

resetButton.addEventListener('click', function(){
    reset()
})

function reset () {
    p1Score = 0
    p2Score = 0
    p1ScoreDisplay.textContent = 0
    p2ScoreDisplay.textContent = 0
    p1ScoreDisplay.classList.remove('winner')
    p2ScoreDisplay.classList.remove('winner')
    gameOver = false
}

input.addEventListener ('change', function () {
    winningScoreDisplay.textContent = this.value
    winningScore = Number(this.value)
    reset()
})




// var p1Button = document.querySelector('#p1Button')
// var p2Button = document.querySelector('#p2Button')
// var resetButton = document.querySelector('#resetButton')
// var p1Display = document.getElementById('p1Display')
// var p2Display = document.getElementById('p2Display')
// var winningNumInput = document.querySelector('input')
// var winningSet = document.querySelector('p span')
// var p1Score = 0
// var p2Score = 0
// var winningScore = 5
// var gameOver = false


// p1Button.addEventListener('click', function () {
//     if (!gameOver) {
//         p1Score++
//         if (p1Score === winningScore) {
//             p1Display.classList.add('winner')
//             gameOver = true
//         }
//         p1Display.textContent = p1Score
//     }
// })

// p2Button.addEventListener('click', function () {
//     if (!gameOver) {
//         p2Score++
//         if (p2Score === winningScore) {
//             p2Display.classList.add('winner')
//             gameOver = true
//         }
//         p2Display.textContent = p2Score
//     }
// })

// resetButton.addEventListener('click', function () {
//     reset()
// })

// function reset () {
//     p1Score = 0
//     p2Score = 0
//     p1Display.textContent = 0
//     p2Display.textContent = 0
//     p1Display.classList.remove('winner')
//     p2Display.classList.remove('winner')
//     gameOver = false
// }

// winningNumInput.addEventListener('change', function () {
//     winningSet.textContent = Number(this.value)
//     winningScore = Number(this.value)
//     reset()
// })