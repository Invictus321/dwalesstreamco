var assert = require('assert');
var service = require('../index.js');
var request = require('request');

describe("StreamCo web service", function () {
	var url = "http://localhost:3000/";
	it('returns status 200', function (done) {
		request(url, function(error, response, body) {
			assert.equal(response.statusCode, 200);
			done();
		});
	});
	it('returns "Hello Stan"', function (done) {
		request(url, function(error, response, body) {
			assert.equal(body, 'Hello Stan');
			done();
		});
	});
});