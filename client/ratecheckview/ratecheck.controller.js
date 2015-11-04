/**
 * Created by bkrishnan on 11/1/15.
 */
'use strict';
define([
    'angular'
], function (angular) {
    angular.module('findYourRateApp.ratecheckcontroller', [])
        .controller('RateCheckCtrl', ['$scope', '$location', 'RateCheckService', 'RetrieveResultsService',
            function ($scope, $location, RateCheckService, RetrieveResultsService) {
                $scope.master = {"name": "", "email": "","amount":"", "creditscore": ""};

                $scope.update = function () {
                    $scope.rateResults = RateCheckService.query();
                    $scope.isAdded = RetrieveResultsService.updateRateResults($scope.rateResults);
                    if($scope.isAdded){
                        $location.path('/rateresultsview');
                    }

                };

                $scope.reset = function () {
                    $scope.user = angular.copy($scope.master);
                };

                $scope.reset();
            }]);
});
