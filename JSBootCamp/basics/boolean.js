console.log(' ')
console.log('...log message starts here... ')
console.log(' ')

let temp = 101
let isFreezing = temp <= 32

if(isFreezing) {
    console.log(temp + ' degree~ ' + 'It is freezing outside!')
} else if(temp >=100) {
    console.log(temp + ' degree~ ' +'It is too hot outside!')
} else {
    console.log(temp + ' degree~ ' +'It is OK outside!')
}

console.log(' ')
console.log('-------------------------------------')
console.log(' ')

let age = 44
let isChild = age <= 7
let isSenior = age >= 65

console.log('Is this person a child? ' + isChild)
console.log('Is this person a senior? ' + isSenior)

if(isChild === true) {
    console.log('Child Discount')
} else if(isSenior === true) {
    console.log('Senior Discount')
} else {
    console.log('Regular Price')
}

if(isChild) {
    console.log('Child Discount~')
} else if(isSenior) {
    console.log('Senior Discount~')
} else {
    console.log('Regular Price~')
}

switch(isChild) {
    case true:
        console.log('Child Discount!!!');
        break;
    case false:
        switch(isSenior) {
            case true:
            console.log('Senior Discount!!!')
            break
            default:
                console.log('Regular Price!!!')
        }
        break    
}

console.log(' ')
console.log('-------------------------------------')
console.log(' ')

if(age <= 7) {
    console.log('Child Discount^^')
} else if(age >= 65) {
    console.log('Senior Discount^^')
} else {
    console.log('Regular Price^^')
}