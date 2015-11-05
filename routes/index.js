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

var doc2 = { hello: 'world'
    , secondTable : 'willItWork?'
};

db.insert(doc2, function (err, newDoc) {
    console.log('Inserted :) ')
    // Callback is optional
    // newDoc is the newly inserted document, including its _id
    // newDoc has no key called notToBeSaved since its value was undefined
});

router.get('/test/getDataFromDB', function (req, res) {
    console.log(req.query.hello)
    db.findOne({hello: req.query.hello}, function (err, doc) {
        console.log(JSON.stringify(doc));
        res.json(doc);
        // doc is the document Mars
        // If no document is found, doc is null
    });
});


router.post('/test/getDataFromDB', function (req, res) {
    console.log("RequestBody "+ req.body)
    db.insert(req.body, function (err, doc) {
        console.log("After Insertion "+ JSON.stringify(doc));
        res.json(doc);
    });

});

module.exports = router;



