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
    db.findOne({hello: req.params.email}, function (err, response) {

    });
});


router.post('/rates', function (req, res) {
    db.insert(req.body, function (err, resp) {
        var loanOffers = utils(req.body);
        if(loanOffers){
            loanOffers.then(function (response) {
                res.json(response);
            }).catch(function (error) {
                var errorMessage = {error : error.message};
                res.json(errorMessage);
                console.log('error ' + error.message);
            });
        }else{
            var errorMessage = {error : 'Unable to calculate loan offers'};
            res.json(errorMessage);
        }

    });

});

module.exports = router;



