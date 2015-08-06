var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello Stan');
});

app.listen(3000);