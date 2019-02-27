let myAccount = {
    name: 'Jinook Jung',
    expenses: 0,
    income: 0

}

// let income = 

let expenses = function(amount) {
    return myAccount.expenses = myAccount.expenses + amount
}

let income = function(amount) {
    return myAccount.income = myAccount.income + amount
}

let isBalance = function(account) {
    return `The balance of ${myAccount.name}'s account is $${myAccount.income - myAccount.expenses}. $${myAccount.income} in income & $${myAccount.expenses} in expenses.`
}


console.log(myAccount)
income(2000)
console.log(myAccount)
expenses(50)
console.log(myAccount)
expenses(175)
console.log(myAccount)
console.log(isBalance(myAccount))