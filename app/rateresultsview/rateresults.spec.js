/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('findYourRateApp.rateresults module', function() {

		beforeEach(module('findYourRateApp.rateresults'));

		describe('rateresults controller', function(){

			it('should ....', inject(function($controller) {
			//spec body
			var rateResultsCtrl = $controller('RateResultsCtrl', { $scope: {} });
			expect(rateResultsCtrl).toBeDefined();
		}));

		});
	});
});