# BANK Tech Test

## Description

This is a JavaScript app which simulates a simple banking system. It allows a user to create an account, make deposit and withdrawal transactions, and print a statement of account activities.

------

### Technologies Used

- JavaScript
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.

------

### Set up your project 

1. Install node if required, which will execute the javascript, from [here](https://nodejs.org/en/)

2. Fork this [repo](https://github.com/nelsonclaire/bank)

3. `git clone git@github.com:<userName>/bank.git` onto your local machine

## To bundle the javascript files

1. After cloning run `npm install -g esbuild` from [esbuild](https://esbuild.github.io/getting-started/)

2. Run `npm install`

## To install ESLint

1. Run `npm install eslint --save-dev`

2. Install configuration file by running `npm init @eslint/config` (do this after you have package.json installed by running `npm init`)

3. Run `npx eslint yourfile.js` directly in root of your local project


## To run tests

1. After cloning run `npm init -y`

2. Copy into package.json `"build": "esbuild index.js --bundle  --outfile=bundle.js --watch"` under scripts as show below:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "esbuild index.js --bundle  --outfile=bundle.js --watch"
  },
```

3. Run `npm install -g jest` or `npm install --save jest`

4. Run `jest` directly in root of your local project by calling `npm test` to run the tests in your command line


## My Approach

1. Break down into simple steps 

2. Write first unit test 

3. Follow red, green, refactor cycle for each test with commits before a refactor

4. Continue with simple tests 

5. Repeat until basic user story functionality is covered

#### Structure
- Specs: `.test.js`
- Models: `.js`

------

## Problem Breakdown

Link to my [problem breakdown](https://github.com/nelsonclaire/bank/blob/master/problem_breakdown.md)

------

## Specification

### Requirements

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
------

## Original README

[Link to original repo and readme](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)