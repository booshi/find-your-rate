/*global module, inject */
'use strict';

define(['app', 'angularMocks'], function(app) {
	describe('findYourRateApp.ratecheck module', function() {

		beforeEach(module('findYourRateApp.ratecheck'));

		describe('ratecheck controller', function() {
			it('should ....', inject(function($controller) {
				//spec body
				var view1Ctrl = $controller('RateCheckCtrl', { $scope: {} });
				expect(view1Ctrl).toBeDefined();
			}));
		});
	});
});