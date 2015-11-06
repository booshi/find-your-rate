# About

Loan Rate Finder Application calculates the interest rate and monthly payment options from one to five years when
a borrower provides his Credit Score and Loan amount. Click [here](.#interest-rate-calculation) for APR calculations.

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

LOAN GRADE - Based on the credit score

A - Poor (<600) 
B - Fair (600-660)
C - Good (660-720)
D - Excellent(720+)

APR  =  5.05 * (Interest Rates for each loan grade)

A - Poor (<600) - 3.5%
B - Fair (600-660) - 3.0%
C - Good (660-720) - 2.5%
D - Excellent(720+) - 1.5%

Loan Limits - The limit for each application based on the Loan Grade:

A - 5000 - 10000
B - 10000 - 15000
C - 15000 - 25000
D - 25000 - 35000

Terms available are : 12 months, 24 months, 36 months, 48 months and 60 months


