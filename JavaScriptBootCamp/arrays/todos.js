const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Do a new project')
todos.shift()

console.log(`You have ${todos.length} todos.`)
// console.log(todos)


todos.forEach(function (x, y) {
    // console.log(y + 1)
    console.log(`${y + 1}. You ${x.toLowerCase()}.`)
})

console.log(todos)

// *************************************************
let sum = 0

for (let i = 1; i <= 20; i++) {
    // console.log(i)
    sum = sum + i
    console.log(`${i} => ${sum}`)
}

for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`)
}

for (let i = todos.length -1; i >= 0; i--) {
    console.log(todos[i])
}