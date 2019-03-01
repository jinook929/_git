const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(0, 5, {
    task: 'Read Bible',
    completed: true
}, {
        task: 'Pray',
        completed: false
    }, {
        task: 'Exercise',
        completed: true
    }, {
        task: 'Javascript',
        completed: false
    }, {
        task: 'Web Dev',
        completed: true
    })

    const sortTodos = function (todos) {
        todos.sort(function (a,b) {
            if (a.completed < b.completed) {
                return -1
            } else if (b.completed < a.completed) {
                return 1
            } else {
                return 0
            }
        })
    }

console.log(todos)
sortTodos(todos)
console.log(todos)

// const findNote = function (todos, isCompleted) {
//     return todos.filter(function (todo) {
//         return todo.completed === isCompleted
//     })
// }

// console.log(findNote(todos,true))
// console.log('********')
// const ifComplete = findNote(todos, false)
// console.log(ifComplete)


// if (todos[1].completed === false) {
//     console.log(todos[1])
// }


// console.log(todos[1].completed === true)

// todos.forEach(function(task, index) {
//     console.log(index)
//     console.log(task)
// })

// z = [true, false, true, false, true]
// const y = todos[1].completed
// console.log(y)
// const deleteTask = function(tasks, taskTitle) {
//     const index = todos.findIndex(function(todo, index) {
//     return todo.task.toLowerCase() === taskTitle.toLowerCase()
//     })
//     console.log(index)
//     console.log(todos[index])
//     if (index >-1) {todos.splice(index, 1)}
// }

// const leftToDo = function (todos, ifComplete) {
//     const willdo = todos.filter(function(todo, index)) {
//         if (todo.completed === ifComplete) {
//             return willDo 
//         }
//     }
// }

// console.log(leftToDo(todos, 'false'))


// let findTodo 

// findTodo = deleteTask(todos, 'exercises')
// console.log(todos)

// findTodo = deleteTask(todos, 'exercise')
// console.log(todos)
// *************************************************

// todos.splice(2, 1)
// todos.push('Do a new project')
// todos.shift()

// console.log(`You have ${todos.length} todos.`)
// // console.log(todos)


// todos.forEach(function (x, y) {
//     // console.log(y + 1)
//     console.log(`${y + 1}. You ${x.toLowerCase()}.`)
// })

// console.log(todos)

// *************************************************
let sum = 0

// for (let i = 1; i <= 10; i++) {
//     // console.log(i)
//     sum = sum + i
//     console.log(`${i} => ${sum}`)
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }

// for (let i = todos.length -1; i >= 0; i--) {
//     console.log(todos[i])
// }