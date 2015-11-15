/* global describe, it, expect, beforeEach, afterEach, module, inject, browser, element, by */
'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('find your rate client', function () {

    browser.get('index.html');

    it('should automatically redirect to /ratecheck when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/ratecheck");
    });


    describe('ratecheck E2E tests', function () {

        beforeEach(function () {
            browser.get('index.html#/ratecheck');
        });

        it('should have a title', function () {
            expect(browser.getTitle()).toEqual('Find Your Rate App');
        });

        it('should render rate check when user navigates to /ratecheck', function () {
            expect(element.all(by.css('[ng-view] form div fieldset legend')).first().getText()).
                toMatch(/Please enter your details/);
        });

    });


    describe('Rate Check View', function () {

        beforeEach(function () {
            browser.get('index.html#/ratecheck');
        });

        var name = element.all(by.model('user.name'));
        var email = element.all(by.model('user.email'));
        var creditscore = element.all(by.model('user.creditscore'));
        var amount = element.all(by.model('user.amount'));
        var resetLoanForm = element.all(by.id('resetLoanForm'));
        var findYourRate = element.all(by.id('findYourRate'));
        var submitLoanApplication = element.all(by.id('submitLoanApplication'));
        var backToForm = element.all(by.id('backToForm'));
        var successMessage = element.all(by.id('successMessage'));
        var revisedCreditScore = element.all(by.id('revisedCreditScore'));


        function inputData(userName, userEmail,requestedAmount,userCreditScore) {
            name.sendKeys(userName);
            email.sendKeys(userEmail);
            amount.sendKeys(requestedAmount);
            creditscore.sendKeys(userCreditScore);
        }

        it('should display email warning message', function() {
            inputData('testUser', 'testEmail','5000','450');
            expect($('[ng-show=rateCheckForm\\.email\\.\\$error\\.email]').isDisplayed()).toBeTruthy();
        });

        it('should display name warning message', function() {
            inputData('', 'testEmail@gmail.com','6000','450');
            expect($('[ng-show=rateCheckForm\\.name\\.\\$error\\.required]').isDisplayed()).toBeTruthy();
        });

        it('should display credit score warning message', function() {
            inputData('testUser', 'testEmail@gmail.com','6000','22');
            email.click();
            expect(element(by
                .css('input.ng-invalid')).isPresent()).toBe(true);
        });

        it('should display warning message for amount', function() {
            inputData('testUser', 'testEmail@gmail.com','60000','22');
            email.click();
            expect(element(by
                .css('input.ng-invalid')).isPresent()).toBe(true);
        });



        it('should reset the entered values', function() {
            inputData('testUser', 'testEmail@gmail.com','6500','359');
            resetLoanForm.click();
            expect(element(by.model('user.name')).getText()).toEqual('');
            expect(element(by.model('user.creditscore')).getText()).toEqual('');
            expect(element(by.model('user.email')).getText()).toEqual('');
            expect(element(by.model('user.amount')).getText()).toEqual('');
        });

        it('should submit the form values', function() {
            inputData('testUser', 'testEmail@gmail.com','6500','359');
            findYourRate.click();
            expect(element.all(by.css('[ng-view] form div fieldset legend')).first().getText()).
                toMatch(/Please find your approved loan rate below/);
        });

        it('should submit the loan application', function() {
            inputData('testUser', 'testEmail@gmail.com','6500','359');
            findYourRate.click();
            expect(element(by
                .css('div.ng-hide')).isPresent()).toBe(true);
            expect(element.all(by.css('[ng-view] form div fieldset legend')).first().getText()).
                toMatch(/Please find your approved loan rate below/);
            submitLoanApplication.click();
            var successMessageDiv = element.all(by.id('successMessage'));
            expect(successMessageDiv.count()).toBe(1);
            expect(successMessageDiv.get(0).getText()).toEqual('Your application is submitted successfully.');

        });

        it('should deny loan application after credit score update', function() {
            inputData('testUser', 'testEmail@gmail.com','20000','800');
            findYourRate.click();
            expect(element(by
                .css('div.ng-hide')).isPresent()).toBe(true);
            expect(element.all(by.css('[ng-view] form div fieldset legend')).first().getText()).
                toMatch(/Please find your approved loan rate below/);
            creditscore.sendKeys('300');
            submitLoanApplication.click();
            var deniedMessageDiv = element.all(by.id('loanDenied'));
            expect(deniedMessageDiv.count()).toBe(1);
            expect(deniedMessageDiv.get(0).getText()).toEqual('Your loan application is not approved. Please contact us at 1-800-GET-LOANS for more details.');
        });

        it('should return updated rate', function() {
            inputData('testUser', 'testEmail@gmail.com','20000','800');
            findYourRate.click();
            expect(element(by
                .css('div.ng-hide')).isPresent()).toBe(true);
            expect(element.all(by.css('[ng-view] form div fieldset legend')).first().getText()).
                toMatch(/Please find your approved loan rate below/);
            revisedCreditScore.clear();
            revisedCreditScore.sendKeys('670');
            submitLoanApplication.click();

            var successMessageDiv = element.all(by.id('successMessage'));
            expect(successMessageDiv.count()).toBe(1);
            expect(successMessageDiv.get(0).getText()).toEqual('Your application is submitted successfully.');



        });

    });
});
