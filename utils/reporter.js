'use strict';
/**
 * Jasmine Reporter
 */
var myReporter = function() {

    this.jasmineStarted = function(suiteInfo) {
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
    },

    this.suiteStarted = function(result) {

        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    this.specStarted = function(result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },

    this.specDone = function(result) {
        console.log('Spec: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {

            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },

    this.suiteDone = function(result) {

        console.log('Suite: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {

            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },
    this.jasmineDone = function() {
        console.log('Finished suite');
    }
};

module.exports = new myReporter();
