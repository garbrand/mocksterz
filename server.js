var express     = require('express');
var bp          = require('body-parser');
var csrf        = require('csurf');
var cookie      = require('cookie-parser');
var session     = require('express-session');

var quote       = require('./services/quote.js');

var app = express();

// Configure CSRF
app.use( cookie() );
app.use( session({secret: "ZORKZORKZORKZORK"}) );
app.use( csrf() );

// x-csrf-token

// Configure
app.use( bp.urlencoded({ extended: true }) );
app.use( bp.json() );

// Routes
app.use( '/', express.static('build') );
app.use( '/sap/opu/odata/sap/ZFNOL_FSCM01_SRV/', quote );
app.use( '/sap/opu/odata/sap/ZSFI_ODATA_FSPM_SRV/PolicySet', quote );

var server = app.listen(80, function() {
    console.log('Listening on port %d', server.address().port);
});