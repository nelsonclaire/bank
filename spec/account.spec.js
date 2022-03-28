const Account = require('../lib/account')

describe('Account', () => {
  let account
  let firstDate
  let mockDepositTransaction
  let mockWithdrawalTransaction

  beforeEach(() => {
    account = new Account()
    firstDate = "10/01/2023"
    secondDate = "11/01/2023"
    mockDepositTransaction = {
      type: 'credit',
      amount: 100.00,
      date: firstDate,
      balanceAfterTransaction: account.balance + this.amount
    }
    mockWithdrawalTransaction = {
      type: 'debit',
      amount: 30.00,
      date: firstDate,
      balanceAfterTransaction: account.balance - this.amount
    }
  })

  describe('the initialisation of a new bank account', () => {
    
    it('initialises with a balance of zero', () => {
      expect(account.balance).toEqual(0)
    })

    it('adds a deposit amount of 100 to the balance', () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      expect(account.balance).toEqual(100)
    })

    it('can subtract a withdrawal amount of 30 from a balance of 100', () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      account.withdraw(30, secondDate, mockWithdrawalTransaction)
      expect(account.balance).toEqual(70)
    })
  
    it('records the date of a deposit', () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      expect(account.listOfTransactions()[0].date).toEqual('10/01/2023')
    })
  
    it('records the date of a withdrawal', () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      account.withdraw(50, secondDate, mockWithdrawalTransaction)
      expect(account.listOfTransactions()[1].date).toEqual('11/01/2023')
    })
  
    it('adds a deposit and a withdrawal to the list of transactions', () => {
      account.deposit(100, firstDate, mockDepositTransaction)
      account.withdraw(50, secondDate, mockWithdrawalTransaction)
      expect(account.listOfTransactions().length).toEqual(2)
    })

  })

})