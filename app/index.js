var express = require('express');
var app = express();
var functions = require('./functions.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send("Hello Stan");
});

app.post('/', function(req, res) {
	try {
		var resContent = functions.processRequest(req.body);
		res.send(resContent);
	} catch (ex) {
		var resContent = functions.buildError();
		res.status(400).send(resContent);
	}
});

app.use(function(err, req, res, next) {
	var resContent = functions.buildError();
	res.status(400).send(resContent);
});

app.listen(80);