// set up ========================
var express  = require('express');
var app      = express();                               // create our app w/ express
//Middleware
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

app.use(express.static('client'));                 // set the static files location
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var routes = require('./routes');
app.use('/loanOffers',routes);


// listen (start app with node server.js) ======================================
app.set('port', (process.env.PORT || 8080));

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('app listening at port %s', port);
});
module.exports = server;





