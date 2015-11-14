/*global module, inject */
'use strict';

define(['../app', 'angularMocks'], function (app) {

    describe('findYourRateApp.ratecheck module', function () {
        var myCustomEquality = function (first, second) {
            if (typeof first == "string" && typeof second == "string") {
                return first[0] == second[1];
            }
        };


        var scope, form, ctrl;

        beforeEach(module('findYourRateApp.ratecheck'));

        beforeEach(function () {
            jasmine.addCustomEqualityTester(myCustomEquality);
        });

        describe('ratecheck controller', function () {
            var scope, ctrl;

            beforeEach(inject(function ($controller) {
                scope = {};
                ctrl = $controller('RateCheckCtrl', {$scope: scope});
            }));

            it('should have the controller', function () {
                expect(ctrl).toBeDefined();
            });


        });

        describe('RateCheckCtrl', function () {
            var scope, ctrl, $httpBackend;
            beforeEach(module('findYourRateApp.ratecheck'));

            var rateCheckResults = function () {
                console.log('here');
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

            beforeEach(inject(function ($rootScope, $controller, $injector) {
                scope = $rootScope.$new();

                $httpBackend = $injector.get('$httpBackend');
                ctrl = $controller('RateCheckCtrl', {
                    $scope: scope,
                    'RateCheckService': {
                        query: function () {
                            return rateCheckResults();
                        },
                        save: function () {
                            $httpBackend.when('POST', '/loanOffers/rates')
                                .respond(rateCheckResults());
                        }
                    },
                    'RetrieveResultsService': {
                        updateRateResults: function () {
                            return true;
                        }
                    }
                });
            }));


            it('should return default "user" model with name,email,account and credit score', function () {
                expect(scope.user).toEqual({"name": "", "email": "", "amount": "", "creditscore": ""});
            });

            it('should return "rate results" model as undefined', function () {
                expect(scope.rateResults).not.toBeDefined();
            });

            it('should "reset" the form', function () {
                var user = {name: '', email: '', creditscore: '', amount: ''};
                scope.reset(form);
                expect(scope.user).toEqual(jasmine.objectContaining(user));
            });

            it('should not submit the data', function () {
                scope.update(false);
                expect(scope.isAdded).not.toBeDefined();
                expect(scope.isLoanDenied).toEqual(false);
            });

            it('should submit the form', function () {
                var user = {name: 'testUser', email: 'test@gmail.com', creditscore: 700, amount: 8000};
                scope.user = user;
                scope.update(true);
                expect(scope.isLoanDenied).toEqual(false);
            });

        });


        describe('ratecheck services', function () {
            it('should have the rate check service defined', inject(function (RateCheckService) {
                expect(RateCheckService).toBeDefined();
            }));

        });

        describe('retrieve results service', function () {
            var rateCheckResults = function () {
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

            it('should have the retrieve results service defined', inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
            }));

            it('should return false for empty object', inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
                var updateRateResults = RetrieveResultsService.updateRateResults(undefined);
                expect(updateRateResults).toEqual(false);
                updateRateResults = RetrieveResultsService.updateRateResults('');
                expect(updateRateResults).toEqual(false);
                updateRateResults = RetrieveResultsService.updateRateResults({});
                expect(updateRateResults).toEqual(true);

            }));

            it('should return true for valid object', inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
                var obj = rateCheckResults();
                var updateRateResults = RetrieveResultsService.updateRateResults(obj);
                expect(updateRateResults).toEqual(true);
            }));

            it('should retrieve an empty object', inject(function (RetrieveResultsService) {
                expect(RetrieveResultsService).toBeDefined();
                var obj = rateCheckResults();
                var updatedRates = RetrieveResultsService.retrieveRateResults();
                expect(updatedRates).toEqual({});
            }));



        });

    });
});
