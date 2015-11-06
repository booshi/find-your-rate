/*global module, inject */
'use strict';

define(['../app', 'angularMocks'], function (app) {
    describe('findYourRateApp.rateresults module', function () {

        describe('RateResultsCtrl controller', function () {
            var scope, ctrl;

            beforeEach(inject(function ($controller) {
                scope = {};
                ctrl = $controller('RateResultsCtrl', {$scope: scope});
            }));

            it('should have the controller', function () {
                expect(ctrl).toBeDefined();
            });


        });
        beforeEach(module('findYourRateApp.rateresults'));
        describe('RateResultsCtrl', function () {
            var scope, ctrl;

            var rateResults = function(){
                return {
                    "requestedAmount": 30000,
                    "nominalApr": 7.56,
                    "interestAmount": 2272.5,
                    "loanOfferTerms": [
                        {
                            "loanOfferTerm": "60",
                            "amount": 537.88
                        },
                        {
                            "loanOfferTerm": "48",
                            "amount": 672.34
                        },
                        {
                            "loanOfferTerm": "36",
                            "amount": 896.46
                        },
                        {
                            "loanOfferTerm": "24",
                            "amount": 1344.69
                        },
                        {
                            "loanOfferTerm": "12",
                            "amount": 2689.38
                        }
                    ]
                };
            }


            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('RateResultsCtrl', {
                    $scope: scope,
                    'RetrieveResultsService':{
                        updateRateResults : function(){
                            return true;
                        },
                        retrieveRateResults : function(){
                            return rateResults();
                        }
                    }
                });
            }));

            it('should return undefined results',inject(function (RetrieveResultsService)  {
                expect(scope.rateResults).toEqual(jasmine.objectContaining(rateResults()));
            }));

            it('should have the retrieve results service defined',inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
            }));

            it('should have the retrieve results service defined',inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
                var updateRateResults = RetrieveResultsService.updateRateResults(rateResults());
                expect(updateRateResults).toEqual(true);
                expect(scope.rateResults).toBeDefined();
            }));

            it('should return to location /ratecheck', inject(function ($controller) {
                scope.back();
                expect(scope.path.$$path).toEqual('/ratecheck');
            }));

            it('should return to location /ratecheck', inject(function ($controller) {
                scope.submitApplication();
                expect(scope.isSuccessMessageVisible).toEqual(true);
            }));

        });

    });
});