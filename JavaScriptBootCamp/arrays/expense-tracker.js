const account = {
    name: 'Jinook Jung',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalIncome} in income & $${totalExpenses} in expenses.`
    }
}



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Work', 1000)


console.log(account.expenses)
console.log(account.income)
console.log(account.getAccountSummary())




