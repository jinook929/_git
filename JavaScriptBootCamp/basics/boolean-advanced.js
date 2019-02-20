console.log(' ')
console.log('..l.o.g..m.e.s.s.a.g.e..s.t.a.r.t.s.. ')
console.log(' ')

let isAccountLocked = false
let userRole = 'admin'

isAccountLocked ? console.log('Is accout locked') : console.log('Welcome!')

console.log(' ')
console.log('-------------------------------------')
console.log(' ')

if(isAccountLocked) {
    console.log('Is account locked...')
} else if(userRole === 'admin') {
    console.log('Welcome, Admin~')
} else {
    console.log('Welcome~')
}

console.log(' ')
console.log('-------------------------------------')
console.log(' Challenge Time ')

let temp = 70

if(temp <= 32) {
    console.log('It is freezing outside!')
} else if(temp >= 100) {
    console.log('It is hot outside!')
} else {
    console.log('Go for it. It is pretty nice^^~')
}