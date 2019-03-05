var button = document.querySelector('button')

button.addEventListener('click', function () {
    document.body.classList.toggle('purple')
})

// var isWhite = true

// button.addEventListener('click', function () {
//     if(isWhite) {
//         document.body.style.background = 'purple'
//     } else {
//         document.body.style.background = 'white'
//     }
//     isWhite = !isWhite
// })