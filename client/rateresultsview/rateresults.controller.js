'use strict';
define([
    'angular'
], function(angular) {
    angular.module('findYourRateApp.rateresultscontroller', [])
        .controller('RateResultsCtrl', ['$scope','$location','RetrieveResultsService',
            function($scope,$location,RetrieveResultsService) {

            $scope.rateResults = RetrieveResultsService.retrieveRateResults();
            $scope.user = RetrieveResultsService.getUser();

            $scope.back = function() {
                $scope.path = $location.path('/ratecheck');
                $scope.isSuccessMessageVisible = false;
                $scope.isLoanDenied = false;
            };

            $scope.submitApplication = function(){
                $scope.isSuccessMessageVisible = true;
                $scope.isLoanDenied = false;
                RetrieveResultsService.getRates.save($scope.user,function(response){
                    if (!response.error) {
                        $scope.isAdded = RetrieveResultsService.updateRateResults(response);
                        if ($scope.isAdded) {
                            $scope.rateResults = RetrieveResultsService.retrieveRateResults();
                        }
                    } else {
                        //$location.path('/ratecheck');
                        $scope.isLoanDenied = true;
                    }
                });

            }

        }]);
});