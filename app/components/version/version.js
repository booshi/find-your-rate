'use strict';

define(['angular', 'components/version/version-directive', 'components/version/interpolate-filter'],
	function(angular, versionDirective, interpolateFilter) {
		angular.module('findYourRateApp.version', [
		  'findYourRateApp.version.interpolate-filter',
		  'findYourRateApp.version.version-directive'
		])
		.value('version', '0.3');
});