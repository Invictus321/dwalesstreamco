// Take the list of shows and filter out the valid shows into a new list
exports.parseRequest = function (body) {
	var payload = body.payload;
	var responseBody = {};
	responseBody.response = [];
	for (var i = 0; i < payload.length; i++) {
		var show = payload[i];
		if (isValid(show)) {
			var responseShow = buildResponseShow(show);
			responseBody.response.push(responseShow);
		}
	}
	return responseBody;
};

// Check if a show is valid by checking that DRM is true and there are more than zero episodes
var isValid = function (show) {
	if (show.drm == true && show.episodeCount > 0) {
		return true;
	} 
	return false;
};

// Create a simplified show object for response
var buildResponseShow = function (show) {
	var responseShow = {};
	responseShow.image = show.image.showImage;
	responseShow.slug = show.slug;
	responseShow.title = show.title;
	return responseShow;
};

// Create error json for response
exports.buildError = function () {
	var errorJson = {};
	errorJson.error = "Could not decode request: JSON parsing failed";
	return errorJson;
};