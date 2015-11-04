'use strict';

define([
	'angular',
	'angularRoute',
	'components/version/version',
    'ratecheckview/ratecheck.services',
    './rateresults.controller'
], function(angular) {
	angular.module('findYourRateApp.rateresults', ['ngRoute', 'findYourRateApp.version','findYourRateApp.ratecheckservice',
        'findYourRateApp.rateresultscontroller'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/rateresultsview', {
			templateUrl: 'rateresultsview/rateresults.html',
			controller: 'RateResultsCtrl'
		});
	}])
});