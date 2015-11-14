/**
 * Created by bkrishnan on 11/1/15.
 */
'use strict';
define([
    'angular','angularResource'
], function(angular) {

    angular.module('findYourRateApp.ratecheckservice', ['ngResource'])
        .service('RetrieveResultsService',['$resource',function($resource){
            var rateResults = {};
            var user = {"name": "", "email": "", "amount": "", "creditscore": ""};

            var updateRateResults = function (obj){
                if(obj !== undefined && obj !== ''){
                    rateResults = obj;
                    return true;
                }
                return false;
            }

            var retrieveRateResults = function(){
                return rateResults;
            };

            var setUser = function(userObj){
                user = userObj;
            };

            var getUser= function(){
                return user;
            };



            var getRates = $resource('loanOffers/rates', {},
                {
                    query: {method: 'GET', params: {}, isArray: false},
                    post :{method:'POST'}
                });

            return{
                updateRateResults : updateRateResults,
                retrieveRateResults : retrieveRateResults,
                getRates : getRates,
                getUser : getUser,
                setUser : setUser
            }
        }]);
});
