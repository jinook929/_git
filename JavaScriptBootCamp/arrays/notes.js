// const notes = [{
//     title: 'My morning schedule',
//     body: 'Reading the Bible'
// }, {
//     title: 'My afternoon schedule',
//     body: 'Studying Javascript'
// }, {
//     title: 'My evening schedule',
//     body: 'Training for Web Dev'
// }]

// console.log(notes)
// console.log(notes.pop())
// console.log(notes)
// notes.push({
//     title: 'My new evening schedule',
//     body: 'Some exercise'
// })
// console.log(notes)
// console.log(notes.shift())
// console.log(notes)
// notes.unshift({
//     title: 'My new morning schedule',
//     body: 'Praying'
// })
// console.log(notes)

// notes[2] = {
//     title: 'My revised evening schedule',
//     body: 'Stretching'
// }
// console.log(notes)

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// console.log(notes.indexOf({ title: 'My evening schedule', body: 'Training for Web Dev' }))

// console.log({ title: 'My evening schedule', body: 'Training for Web Dev' } === { title: 'My evening schedule', body: 'Training for Web Dev' })

// console.log(1 === 1)
// console.log('top' === 'top')
// console.log(true === true)

// let someObject = {}
// let anotherObject = someObject
// console.log(someObject === anotherObject)

// const index = notes.findIndex(function(note, index) {
//     // console.log(index)
//     // console.log(note)
//     return note.title.toLowerCase() === 'my afternoon schedule'.toLowerCase()
// })

// console.log(index)

const notes = [{
    title: 'My morning schedule',
    body: 'Reading the Bible'
}, {
    title: 'My afternoon schedule',
    body: 'Studying Javascript'
}, {
    title: 'My evening schedule',
    body: 'Training for Web Dev'
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    console.log(index)
    return notes[index]
}

const note = findNote(notes, 'my evening schedule')
console.log(note)


const lookForNote = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(lookForNote(notes, 'st'))
// ******************************************************

// const found = function(notes, noteTitle) {
//     const note = notes.find(function(note, index) {
//         return noteTitle === note.title
//     })
//     return note
// }

// const lookFor = found(notes, 'My evening schedule')
// console.log(lookFor)

// const found_ = function(notes, noteTitle) {
//     return notes.find(function(note, index) {
//         return noteTitle === note.title
//     })
// }

// const lookFor_ = found_(notes, 'My evening schedule')
// console.log(lookFor_)

// *********************************************************
