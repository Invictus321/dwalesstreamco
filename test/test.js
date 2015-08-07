var assert = require('assert');
var request = require('request');
var app = require('../app/index.js');
var requestJson = require('./request.json');
var responseJson = require('./response.json');
var functions = require('../app/functions.js');

describe('StreamCo coding challenge web service', function () {

	var options = {
		uri: 'http://localhost/',
		method: 'POST',
		json: requestJson
	};
	
	it('returns status 200', function (done) {
		request(options, function(error, response, body) {
			assert.equal(response.statusCode, 200);
			done();
		});
	});

	it('returns the test response when sent the test request', function (done) {
		request(options, function(error, response, body) {
			assert.deepEqual(body, responseJson);
			done();
		});
	});

	it('returns an error 400 for junk JSON', function (done) {
		options.json = "hello?isthisthingon?";
		request(options, function(error, response, body) {
			assert.equal(response.statusCode, 400);
			var error = functions.buildError();
			assert.deepEqual(body, error);
			done();
		});
	});
});