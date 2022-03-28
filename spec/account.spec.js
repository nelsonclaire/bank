const Account = require('../lib/account')

describe('Account', () => {
  let account

  beforeEach(() => {
    account = new Account()
  })

  describe('the initialisation of a new bank account', () => {
    
    it('initialises with a balance of zero', () => {
      expect(account.balance).toEqual(0)
    })

  })
})