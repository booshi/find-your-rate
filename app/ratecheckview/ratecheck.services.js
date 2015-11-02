/**
 * Created by bkrishnan on 11/1/15.
 */
'use strict';
define([
    'angular','angularResource'
], function(angular) {

    angular.module('findYourRateApp.ratecheckservice', ['ngResource'])
        .factory('RateCheckService', ['$resource',function($resource) {
            return $resource('rateresults/user.json', {},
                {
                    query: {method: 'GET', params: {}, isArray: false}
                });
        }])

        .service('RetrieveResultsService',[function(){
            var rateResults = {};

            var updateRateResults = function (obj){
                if(obj !== undefined && obj !== ''){
                    rateResults = obj;
                    return true;
                }
                return false;
            }

            var retrieveRateResults = function(){
                return rateResults;
            }

            return{
                updateRateResults : updateRateResults,
                retrieveRateResults : retrieveRateResults
            }

        }]);




    ;
});