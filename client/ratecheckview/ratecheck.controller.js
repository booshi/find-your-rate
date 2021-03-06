/**
 * Created by bkrishnan on 11/1/15.
 */
'use strict';
define([
    'angular'
], function (angular) {
    angular.module('findYourRateApp.ratecheckcontroller', [])
        .controller('RateCheckCtrl', ['$scope', '$location',  'RetrieveResultsService',
            function ($scope, $location,  RetrieveResultsService) {
                $scope.master = {"name": "", "email": "", "amount": "", "creditscore": ""};

                $scope.update = function (isValid) {
                    if (isValid) {
                        $scope.isLoanDenied = false;
                        RetrieveResultsService.setUser($scope.user);

                        RetrieveResultsService.getRates.save($scope.user, function (response) {
                            if (!response.error) {
                                $scope.isAdded = RetrieveResultsService.updateRateResults(response);
                                if ($scope.isAdded) {
                                    $location.path('/rateresultsview');
                                }
                            } else {
                                $scope.isLoanDenied = true;
                            }
                        });

                    }

                };

                $scope.reset = function () {
                    $scope.user = angular.copy($scope.master);
                    $scope.isLoanDenied = false;
                };

                $scope.reset();
            }]);
});
