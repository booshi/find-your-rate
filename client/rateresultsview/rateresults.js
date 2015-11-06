'use strict';

define([
	'angular',
	'angularRoute',
	'ratecheckview/ratecheck.services',
    './rateresults.controller'
], function(angular) {
	angular.module('findYourRateApp.rateresults', ['ngRoute', 'findYourRateApp.ratecheckservice',
        'findYourRateApp.rateresultscontroller'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/rateresultsview', {
			templateUrl: 'rateresultsview/rateresults.html',
			controller: 'RateResultsCtrl'
		});
	}])
});