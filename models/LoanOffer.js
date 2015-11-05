/**
 * Created by BooshithaKrishnan on 11/4/15.
 */
'use strict'

var LoanOffer= function (amount,apr,interestAmount,loanOfferTerms){
    this.requestedAmount = amount;
    this.nominalApr = apr;
    this.interestAmount = interestAmount;
    this.loanOfferTerms = loanOfferTerms;
}

module.exports = LoanOffer;