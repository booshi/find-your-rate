/* global module */
"use strict";

module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            {pattern: 'client/bower_components/angular/angular.js', included: false},
            {pattern: 'client/bower_components/angular-route/angular-route.js', included: false},
            {pattern: 'client/bower_components/angular-mocks/angular-mocks.js', included: false},
            {pattern: 'client/bower_components/angular-resource/angular-resource.js', included: false},
            {pattern: 'client/components/**/*.js', included: false},
            {pattern: 'client/rate*view/**/*.js', included: false},
            {pattern: 'client/client.js', included: false},
            'client/require-config.js'
        ],


        autoWatch: true,

        frameworks: ['jasmine', 'requirejs'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-requirejs',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            'client/rate*view/**/*.js': 'coverage'
        },

        reporters : ['coverage'],

        coverageReporter : {
            type : 'html',
            dir : 'coverage/',
            file : 'coverage.html'
        }

    });
};
