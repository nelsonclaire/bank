Bank Problem Breakdown
======================

## Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Solution 

### Object Model

Object | Messages
--------------- | --------------------
Client | 
Account | deposit(amount, date)
Account | withdraw(amount, date)
Account | printStatement()


### User Interaction

1. Create a new bank account with default balance of 0.
2. Call a deposit method on the account with a value (and date of today).
3. Call a withdraw method on the account with a value (and date of today).
4. Print a statement showing all activity on the account.

------

## Simple steps to build my first tests and beyond

1. New bank account is a type of Account

2. New bank account has a balance of 0

3. Depositing 100 makes a balance = 100

4. Depositing 100, then withdrawing 30 leaves a balance = 70

5. Check it records the date of a deposit

6. Check it records the date of a withdrawal

7. Printing a statement shows all the activity on the account
    
### Edge cases

TBC