'use strict';
define([
	'angular',
	'angularRoute',
	'./ratecheck.controller',
    './ratecheck.services'
], function(angular) {
	angular.module('findYourRateApp.ratecheck', ['ngRoute',
        'findYourRateApp.ratecheckservice','findYourRateApp.ratecheckcontroller'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/ratecheck', {
			templateUrl: 'ratecheckview/ratecheck.html',
			controller: 'RateCheckCtrl'
		});
	}])

});

