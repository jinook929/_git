let restaurant = {
    name: 'ABS',
    guestCapacity: 75,
    guestCount: 0,
    seatAvailibility: function (numberOfGuests) {
        let guestTotal = this.guestCount + numberOfGuests
        return guestTotal <= this.guestCapacity
    },
    guestsComing: function(numberOfGuests) {
        this.guestCount = this.guestCount + numberOfGuests
    },
    guestsLeaving: function(numberOfGuests) {
        this.guestCount = this.guestCount - numberOfGuests
    }
    // guestsComing: function (numberOfGuests) {
    // this.guestCount = this.guestCount + numberOfGuests
    // },
    // guestsLeaving: function (numberOfGuests) {
    // this.guestCount = this.guestCount - numberOfGuests
}

// let guestsComing = function (store, numberOfGuests) {
//     store.guestCount = store.guestCount + numberOfGuests
// }

// let guestsLeaving = function (store, numberOfGuests) {
//     store.guestCount = store.guestCount - numberOfGuests
// }

console.log(restaurant)


restaurant.guestsComing(50)
console.log(restaurant.seatAvailibility(7))
console.log(`There are ${restaurant.guestCapacity - restaurant.guestCount} seats available now.`)

restaurant.guestsComing(12)
console.log(restaurant.seatAvailibility(7))
console.log(`There are ${restaurant.guestCapacity - restaurant.guestCount} seats available now.`)

restaurant.guestsComing(12)
console.log(restaurant.seatAvailibility(7))
console.log(`There are ${restaurant.guestCapacity - restaurant.guestCount} seats available now.`)

restaurant.guestsLeaving(6)
console.log(restaurant.seatAvailibility(7))
console.log(`There are ${restaurant.guestCapacity - restaurant.guestCount} seats available now.`)



// console.log(restaurant.seatAvailibility)
// guestsComing(restaurant, 12)
// console.log(restaurant)
// guestsComing(restaurant, 12)
// console.log(restaurant)
// guestsLeaving(restaurant, 5)
// console.log(restaurant)
// guestsLeaving(restaurant, 2)
// console.log(restaurant)
// guestsComing(restaurant, 2)
// console.log(restaurant)



// *******************************************

// let restaurant = {
//     name: 'ABS',
//     guestCapacity: 75,
//     guestCount: 0
// }

// let guestsComing = function (store, numberOfGuests) {
//     store.guestCount = store.guestCount + numberOfGuests
// }

// let guestsLeaving = function (store, numberOfGuests) {
//     store.guestCount = store.guestCount - numberOfGuests
// }

// let seatAvailibility = function (store, numberOfGuests) {
//     let guestTotal = store.guestCount + numberOfGuests
//     if(guestTotal > store.guestCapacity) {
//         return false
//     } else {
//         return true
//     }
// }

// guestsComing(restaurant, 50)
// console.log(restaurant)
// guestsComing(restaurant, 12)
// console.log(restaurant)
// guestsComing(restaurant, 12)
// console.log(restaurant)
// guestsLeaving(restaurant, 5)
// console.log(restaurant)
// guestsLeaving(restaurant, 2)
// console.log(restaurant)
// guestsComing(restaurant, 2)
// console.log(restaurant)

// console.log(seatAvailibility(restaurant, 7))