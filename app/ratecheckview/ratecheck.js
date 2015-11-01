'use strict';
define([
	'angular',
	'angularRoute',
	'./ratecheck.controller'
], function(angular) {
	angular.module('findYourRateApp.ratecheck', ['ngRoute','findYourRateApp.ratecheckcontroller'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/ratecheck', {
			templateUrl: 'ratecheckview/ratecheck.html',
			controller: 'RateCheckCtrl'
		});
	}])

});

