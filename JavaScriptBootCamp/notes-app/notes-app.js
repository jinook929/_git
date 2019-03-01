// const p = document.querySelector('p')
// console.log(p)
// p.remove()

const ps = document.querySelectorAll('p')
// // console.log(ps)

ps.forEach(function (p) {
    p.textContent = '*********'
    // console.log(p.textContent)
    // p.remove()
})