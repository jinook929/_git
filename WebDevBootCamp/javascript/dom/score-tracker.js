alert('Connected!!!')

var p1btn = document.querySelector('#p1btn')
var p2btn = document.querySelector('#p2btn')
var resetbtn = document.querySelector('#resetbtn')
var p1ScoreDisplay = document.querySelector('#p1ScoreDisplay')
var p2ScoreDisplay = document.querySelector('#p2ScoreDisplay')
var input = document.querySelector('input')
var playingTo = document.querySelector('p span')
var p1Score = 0
var p2Score = 0
var gameOver = false
var winningScore = 5

p1btn.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++
    if (p1Score === winningScore) {
      p1ScoreDisplay.classList.add('winner')
      gameOver = true
    }
    p1ScoreDisplay.textContent = p1Score
  }
})

p2btn.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++
    if (p2Score === winningScore) {
      p2ScoreDisplay.classList.add('winner')
      gameOver = true
    }
    p2ScoreDisplay.textContent = p2Score
  }
})

resetbtn.addEventListener('click', function () {
  reset()
})

function reset() {
  p1Score = 0
  p2Score = 0
  p1ScoreDisplay.textContent = 0
  p2ScoreDisplay.textContent = 0
  p1ScoreDisplay.classList.remove('winner')
  p2ScoreDisplay.classList.remove('winner')
  gameOver = false
}

input.addEventListener('change', function () {
  winningScore = Number(this.value)
  playingTo.textContent = this.value
  reset()
})
