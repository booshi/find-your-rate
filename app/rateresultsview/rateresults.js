'use strict';

define([
	'angular',
	'angularRoute',
	'components/version/version'
], function(angular) {
	angular.module('findYourRateApp.rateresults', ['ngRoute', 'findYourRateApp.version'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/rateresultsview', {
			templateUrl: 'rateresultsview/rateresults.html',
			controller: 'RateResultsCtrl'
		});
	}])
	// We can load the controller only when needed from an external file
	.controller('RateResultsCtrl', ['$scope', '$injector', function($scope, $injector) {
		require(['rateresultsview/rateresultsviewctrl2'], function(rateresultsviewctrl2) {
			// injector method takes an array of modules as the first argument
			// if you want your controller to be able to use components from
			// any of your other modules, make sure you include it together with 'ng'
			// Furthermore we need to pass on the $scope as it's unique to this controller
			$injector.invoke(rateresultsviewctrl2, this, {'$scope': $scope});
		});
	}]);
});