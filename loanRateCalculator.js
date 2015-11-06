/**
 * Created by BooshithaKrishnan on 11/4/15.
 */
'use strict'

var LoanOffer = require('./models/LoanOffer');
var rsvp = require('rsvp');

var getOffers = function (borrowerModel) {
    var creditScore = borrowerModel.creditscore;
    var amount = borrowerModel.amount;
    if (!(amount || creditScore)) {
        return undefined;
    }
    return (function (borrowModel) {
        return rsvp.resolve(borrowModel.creditscore);
    })(borrowerModel)
        .then(calculateLoanGrade)
        .then(calculateAPR.bind(undefined, amount))
        .then(calculateLoanOffers.bind(undefined, amount));
}

var calculateLoanOffers = function (amount, interestRate) {
    var interestAmount = precise_round((amount * interestRate) / 100, 2);
    var totalAmount = parseInt(amount) + parseInt(interestAmount);

    var loanOfferTerms = [];
    for (var i = 1; i < 6; i++) {
        loanOfferTerms.push(calculateRateForEachTerm(totalAmount, i * 12));
    }

    var loanOffer = new LoanOffer(amount, precise_round(interestRate,2), interestAmount, loanOfferTerms);
    return loanOffer;
}

var calculateRateForEachTerm = function (amount, termInMonths) {
    var offerForEachTerm = {};
    offerForEachTerm.loanOfferTerm = termInMonths;
    offerForEachTerm.amount = precise_round(amount / termInMonths, 2);
    return offerForEachTerm;
}

var calculateLoanGrade = function (creditScore) {
    if (creditScore < 300 || creditScore > 850) {
        throw new Error('Unable to calculate Loan Grade');
    }
    switch (true) {
        case (creditScore < 600) :
            return 'A';
        case (creditScore >= 600 && creditScore < 660):
            return 'B';
        case (creditScore >= 660 && creditScore < 720):
            return 'C';
        case (creditScore >= 720):
            return 'D';
    }
    console.log('Unable to calculateLoanGrade ');
    throw new Error('Unable to calculate Loan Grade');
}

var calculateAPR = function (amount, loanGrade) {
    var baseRate = 5.05;
    if (amount < 5000 || amount > 35000) {
        throw new Error('Unable to calculate APR');
    }
    var grade = loanGrade;
    switch (grade) {
        case 'A':
            if (amount <= 10000) {
                return baseRate * 3.5;
            }
            break;
        case 'B':
            if (amount <= 15000) {
                return baseRate * 3.0;
            }
            break;
        case 'C':
            if (amount <= 25000) {
                return baseRate * 2.5;
            }
            break;
        case 'D':
            if (amount <= 35000) {
                return baseRate * 1.5;
            }
            break;
    }
    console.log('Unable to calculateAPR ');
    throw new Error('Unable to calculate APR');
}

/**
 * Courtesy : Stackoverflow
 * @param num
 * @param decimals
 * @returns {string}
 */
var precise_round = function (num, decimals) {
    var sign = num >= 0 ? 1 : -1;
    return (Math.round((num * Math.pow(10, decimals)) + (sign * 0.001)) / Math.pow(10, decimals)).toFixed(decimals);
}


module.exports = getOffers;