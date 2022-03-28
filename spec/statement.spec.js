const Statement= require('../lib/statement')
const Account = require("../lib/account.js");
const Transaction = require("../lib/transaction.js");

describe('Statement', () => {
  let account
  let statement
  let firstDate
  let mockDepositTransaction
  let mockWithdrawalTransaction

  beforeEach(() => {
    account = new Account(Transaction);
    statement = new Statement(account)
    firstDate = "10/01/2023"
    secondDate = "13/01/2023"
    thirdDate = "14/01/2023"
    mockDepositTransaction = {
      type: 'credit',
      amount: 1000.00,
      date: firstDate,
      balanceAfterTransaction: account.balance + this.amount
    }
    mockWithdrawalTransaction = {
      type: 'debit',
      amount: 500.00,
      date: thirdDate,
      balanceAfterTransaction: account.balance - this.amount
    }
  })

  describe('the formatting of a statement', () => {
    
    it('can generate a statement of a single deposit transaction', () => {
      account.deposit(1000, firstDate, mockDepositTransaction)
      // expect(statement.print()).toEqual("date || credit || debit || balance\r\n10/01/2023 || 1000.00 || || 1000.00"
      // );
      expect(statement.print()).toEqual("date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00"
      );
    })

    it('can generate a statement of two deposit transactions', () => {
      mockDepositTransaction1 = {
        type: 'credit',
        amount: 2000.00,
        date: secondDate,
        balanceAfterTransaction: account.balance + this.amount
      }
      account.deposit(1000, firstDate, mockDepositTransaction)
      account.deposit(2000, secondDate, mockDepositTransaction1)
      expect(statement.print()).toBe(
        "date || credit || debit || balance\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00"
      );
    })

    it('can generate a statement of two deposit transactions and one withdrawal transaction', () => {
      mockDepositTransaction1 = {
        type: 'credit',
        amount: 2000.00,
        date: secondDate,
        balanceAfterTransaction: account.balance + this.amount
      }
      account.deposit(1000, firstDate, mockDepositTransaction)
      account.deposit(2000, secondDate, mockDepositTransaction1)
      account.withdraw(500, thirdDate, mockWithdrawalTransaction)
      expect(statement.print()).toBe(
        "date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00"
      );
    })

  })
  
})