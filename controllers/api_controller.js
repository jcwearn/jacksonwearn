var request = require('request');

var APIController = function() {};


APIController.prototype.callAPI = function(api_params, callback) {
  var headers = {
    "accept": api_params.accept,
    "content-type": api_params.contentType
  };

  if(api_params.headers) {
    var keys = Object.keys(api_params.headers);
    keys.forEach(function(key) {
      headers[key] = api_params.headers[key];
    });
  }
  
  var request_params = {
    "method": api_params.method,
    "url": api_params.url,
    "headers": headers
  };

  if (api_params.body && (request_params.method === "POST" || request_params.method === "PUT")) {
    try {
      var body = JSON.parse(api_params.body);
    } catch (e) {
      return callback("Error parsing JSON body!");
    }    
    request_params.body = api_params.body;
  }

  request(request_params, function(error, response, body) {
    if (error) {
      return callback(error, null);
    } else if(response) {
      return callback(null, response);
    } else {
      return callback(new Error("No Results!"), null);
    }
  });
};

module.exports = APIController;
