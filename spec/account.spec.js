const Account = require('../lib/account')

describe('Account', () => {
  let account
  let firstDate
  let mockDepositTransaction
  let mockWithdrawalTransaction

  beforeEach(() => {
    account = new Account()
    firstDate = new Date("2023-01-10")
    mockDepositTransaction = {
      type: "credit",
      amount: 100.00,
      date: firstDate,
      balanceAfterTransaction: account.balance + this.amount
    }
    mockWithdrawalTransaction = {
      type: "debit",
      amount: 30.00,
      date: firstDate,
      balanceAfterTransaction: account.balance - this.amount
    }
  })

  describe('the initialisation of a new bank account', () => {
    
    it('initialises with a balance of zero', () => {
      expect(account.balance).toEqual(0)
    })

    it("adds a deposit amount of 100 to the balance", () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      expect(account.balance).toEqual(100)
    })

  })
})