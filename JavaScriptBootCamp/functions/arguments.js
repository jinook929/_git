let add = function(a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

console.log('--------------------------------')

let getScoreText = function (name = 'No_Name', score = 0) {
    return 'Name: ' + name + ' // Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

console.log('--------------------------------')

let tipCalculator = function(total, tipPercent = .15) {
    let tp = total * tipPercent
    console.log(`A ${tipPercent * 100}% tip on $${total} would be $${tp}`)
        // 'tip formula: ' + total + ' * ' + tipPercent + '%')
    return tp
}

let x = [40, .2]
let tips = tipCalculator(x[0], x[1])
// console.log('Tip is ' + tp)

console.log('--------------------------------')

console.log('Andrew')
console.log(`Tip is $${tips}~`)

console.log('--------------------------------')

let tipCal = function(total, tipPercent = .15) {
    console.log(`Tip formula: ${total} * ${tipPercent}%`)
    return total * tipPercent
}

let ti = tipCal(52, .2)
console.log(`Your tip is $${tips}.`)

console.log('--------------------------------')

let name = ['Jinook', 'Sunmi']
console.log(`My name is ${name}.`)