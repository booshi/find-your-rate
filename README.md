# About

Loan Rate Finder Application calculates the interest rate and monthly payment options from one to five years when
a borrower provides his Credit Score and Loan amount. Click [here](https://github.com/booshi/find-your-rate#interest-rate-calculation) for APR calculations.

This application is built with

* AngularJS 1.4.x
* RequireJS 2.1.x
* ExpressJS 4.7.2
* nedb - in memory database for NodeJS
* Karma for unit testing
* Protractor for end2end testing
* Mocha framework
* Chai - BDD Assertion library 
* SuperTest for HTTP assertions

## Installation

    git clone git@https://github.com/booshi/find-your-rate
    cd find-your-rate
    npm install

## Running

    npm start

## Testing

    # Run client side unit tests automatically whenever app changes
    npm test
    
    # Client side Unit tests coverage is available under 'coverage' folder for each component
    
    # Unit tests coverage can be viewed at 
    http://localhost:63342/find-your-rate/coverage/Chrome%2043.0.2357%20%28Mac%20OS%20X%2010.9.5%29/index.html
    
    # Run end to end tests (requires web server to be running)
    npm run protractor

    # Run server side Unit tests
    npm run test_server

## Note    
    
This is a fork of [Angular Seed](https://github.com/angular/angular-seed) with full RequireJS

## Interest Rate Calculation

The interest rate is calculated as follows:

```
Interest Rate = 5.05 * (Interest rate for corresponding loan grade)
```

***LOAN GRADE*** - computed based on the credit score

A - Poor (<600)

B - Fair (600-660)

C - Good (660-720)

D - Excellent(720+)

***APR***  -  5.05 * (Interest Rates for each loan grade)

A - Poor (<600) - 3.5%

B - Fair (600-660) - 3.0%

C - Good (660-720) - 2.5%

D - Excellent(720+) - 1.5%

***Loan Limits*** - The limit for each application based on the Loan Grade:

A - 5000 - 10000

B - 10000 - 15000

C - 15000 - 25000

D - 25000 - 35000

Terms available are : 12 months, 24 months, 36 months, 48 months and 60 months

## Examples :

### Input:

Loan Amount Requested - 30000, Credit score - 600

### Expected Output:

Your loan application is not approved. Please contact us at 1-800-GET-LOANS for more details.

### Input:

Loan Amount Requested - 30000, Credit score - 730

### Expected Output :

Interest Rate = 5.05 * 1.25 = 7.56

Interest Amount = 2272.5
Total Amount : 32272.5

60 months : Monthly payment : 537.88
48 months : Monthly payment : 672.34
36 months : Monthly payment : 896.46
24 months : Monthly payment : 1344.69
12 months : Monthly payment : 2689.38
