/**
 * Created by bkrishnan on 11/1/15.
 */
'use strict';
define([
    'angular'
], function(angular) {
    angular.module('findYourRateApp.ratecheckcontroller', [])
        .controller('RateCheckCtrl', ['$scope',function($scope) {
            $scope.currentState = "success";
            console.log("RateCheckCtrl");
        }]);
});
