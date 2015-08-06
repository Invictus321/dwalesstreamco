var express = require('express');
var app = express();
var functions = require('./functions.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/', function(req, res) {
	try {
		var resContent = functions.parseRequest(req.body);
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

app.listen(3000);