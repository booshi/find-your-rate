'use strict'

var rateCalculator = require('./../../loanRateCalculator');
var expect = require('chai').expect;

describe('loan Rate calculator', function () {
    this.timeout(30000);
    it('should return valid response', function testPath(done) {
        var borrowerModel = {"name": "testUser", "email": "a@b.c", "amount": 5500, "creditscore": 700};
        var loanOffers = rateCalculator(borrowerModel);
        loanOffers.then(function (response) {
            expect(response).to.not.be.null;
            done();
        });

    });

    it('should throw credit score undefined error', function testPath(done) {
        var err = new Error('Unable to calculate Loan Grade');
        expect(rateCalculator).to.throw(undefined);
        done();
    });

    it(' throws credit score error', function() {
        var borrowerModel = {"name": "testUser", "email": "a@b.c", "amount": 5500, "creditscore": 1000};
        var ctrl = rateCalculator(borrowerModel);
        ctrl.then(function (response) {
            expect(response).to.not.be.null;
            done();
        },function(err){
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Unable to calculate Loan Grade');
            done();
        });
    });

    it('throws loan amount error', function() {
        var borrowerModel = {"name": "testUser", "email": "a@b.c", "amount": 55500, "creditscore": 800};
        var loanOffers = rateCalculator(borrowerModel);
        loanOffers.then(function (response) {
            expect(response).to.not.be.null;
            done();
        },function(err){
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Unable to calculate APR');
            done();
        });
    });

    it('throws loan denied error', function() {
        var borrowerModel = {"name": "testUser", "email": "a@b.c", "amount": 35000, "creditscore": 300};
        var loanOffers = rateCalculator(borrowerModel);
        loanOffers.then(function (response) {
            console.log(JSON.stringify(response));
            expect(response).to.not.be.null;
            done();
        },function(err){
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Unable to calculate APR');
            done();
        });
    });

    it('throws loan denied error', function() {
        var borrowerModel = {"name": "testUser", "email": "a@b.c", "amount": 30000, "creditscore": 730};
        var loanOffers = rateCalculator(borrowerModel);
        loanOffers.then(function (response) {
            expect(response).to.not.be.null;
            expect(response.requestedAmount).to.equal(30000);
            expect(response.nominalApr).to.equal(7.58);
            expect(response.interestAmount).to.equal(2272.50);
            expect(response.loanOfferTerms).to.not.be.null;


            done();
        },function(err){
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Unable to calculate APR');
            done();
        });
    });
});
