var express     = require('express');
var mock        = require('./quote-mock.js');
var app         = express();

var name = 'Quote Service';

function log(dir, data) {
	// console.log('%s:\t %s:\t', name, dir, data, '\n');
	console.log('%s %s:\t %s\t', name, dir, data.method, data.body);
};

app.use('/', function(req, res) {
	console.log(req.body);

	res.set('X-CSRF-Token', req.csrfToken() );

	// log('in',  req);
	// log('out', res);

	res.json(mock);
});

module.exports = app;