/**
 * Created by BooshithaKrishnan on 11/3/15.
 */
/*
 * GET home page.
 */


var express = require('express');
var router = express.Router();
var Datastore = require('../models/models');
var db = new Datastore();

var utils = require('../loanRateCalculator');

router.get('/loanApplication/:email', function (req, res) {
    console.log('Email '+req.params.email);
    console.log('db'+db);
    db.findOne({hello: req.params.email}, function (err, response) {
        console.log('Response '+JSON.stringify(response));
    });
});


router.post('/rates', function (req, res) {
    console.log('req.body '+JSON.stringify(req.body));
    db.insert(req.body, function (err, resp) {
        var loanOffers = utils(req.body);
        console.log(loanOffers)
        loanOffers.then(function (response) {
            console.log('Response '+JSON.stringify(response));
            res.json(response);
        }).catch(function (error) {
            var errorMessage = {error : error.message};
            res.json(errorMessage);
            console.log('error ' + error.message);
        });
    });

});

module.exports = router;



