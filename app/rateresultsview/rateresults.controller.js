'use strict';
define([
    'angular'
], function(angular) {
    angular.module('findYourRateApp.rateresultscontroller', [])
        .controller('RateResultsCtrl', ['$scope','$location','RetrieveResultsService',function($scope,$location,RetrieveResultsService) {
            $scope.rateResults = RetrieveResultsService.retrieveRateResults();

            $scope.back = function() {
                $scope.path = $location.path('/ratecheck');
                $scope.isSuccessMessageVisible = false;
            };

            $scope.submitApplication = function(){
                $scope.isSuccessMessageVisible = true;
            }

        }]);
});