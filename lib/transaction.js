class Transaction {
  constructor(type, amount, date, balanceAfterTransaction) {
    this.type = type,
    this.amount = amount,
    this.date = date,
    this.balanceAfterTransaction = balanceAfterTransaction   
  }
}

module.exports = Transaction