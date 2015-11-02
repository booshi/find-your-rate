/* global module */
"use strict";

module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            {pattern: 'app/bower_components/angular/angular.js', included: false},
            {pattern: 'app/bower_components/angular-route/angular-route.js', included: false},
            {pattern: 'app/bower_components/angular-mocks/angular-mocks.js', included: false},
            {pattern: 'app/bower_components/angular-resource/angular-resource.js', included: false},
            {pattern: 'app/bower_components/angular-animate/angular-animate.js', included: false},
            {pattern: 'app/components/**/*.js', included: false},
            {pattern: 'app/*/**/*.js', included: false},
            {pattern: 'app/app.js', included: false},
            'app/require-config.js'
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
            'app/*/**/*.js': 'coverage'
        },

        reporters : ['coverage'],

        coverageReporter : {
            type : 'html',
            dir : 'coverage/',
            file : 'coverage.html'
        }

    });
};
