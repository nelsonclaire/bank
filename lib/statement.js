class Statement {
  constructor(account) {
    this.account = account
  }

  print () {
    let rowsOfStatement = []
    this.account.listOfTransactions().forEach((transaction) => {
      rowsOfStatement.push(this.transactionFormatter(transaction))
    })
    rowsOfStatement.push("date || credit || debit || balance")
    return rowsOfStatement.reverse().join("\n")
  }

  transactionFormatter (transaction) {
    if (transaction.type === "credit") {
      return `${transaction.date} || ${transaction.amount} || || ${transaction.balanceAfterTransaction}`
    } else {
      return `${transaction.date} || || ${transaction.amount} || ${transaction.balanceAfterTransaction}`
    }
  }
}

module.exports = Statement