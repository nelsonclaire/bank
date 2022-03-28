const Transaction = require('./transaction')

class Account {
  constructor () {
    this.balance = 0
    this.transactions = []   
  }

  deposit (amount, date, transaction) {
    amount,
    date,
    transaction = new Transaction("credit", amount.toFixed(2), date, (this.balance + amount).toFixed(2))
    this.balance += amount
    this.transactions.push(transaction)
    return this
  }

  withdraw (amount, date, transaction) {
    amount,
    date,
    transaction = new Transaction("debit", amount.toFixed(2), date, (this.balance - amount).toFixed(2))
    this.balance -= amount
    this.transactions.push(transaction)
    return this
  }

  listOfTransactions () {
    return this.transactions
  }
}

module.exports = Account
