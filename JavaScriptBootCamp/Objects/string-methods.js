// let name = ' jinook jung '

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.trim())
// console.log((name.trim()).length)

// let password = 'abc123password098'
// console.log(password.includes('password'))

let isValidPassword = function (newPassword) {
    // console.log(newPassword)
    return newPassword.length > 8 && !newPassword.includes('password')

}

console.log(isValidPassword('abcd123'))
console.log(isValidPassword('abcd12345password'))
console.log(isValidPassword('abcd12345pass'))
