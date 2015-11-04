'use strict';

define([
	'angular',
	'angularRoute',
	'ratecheckview/ratecheck',
	'rateresultsview/rateresults'
], function(angular, angularRoute, ratecheckview, rateresults) {
	// Declare client level module which depends on views, and components
	return angular.module('findYourRateApp', [
		'ngRoute',
		'findYourRateApp.ratecheck',
		'findYourRateApp.rateresults'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/ratecheck'});
	}]);
});

