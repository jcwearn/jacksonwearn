var generateCURL = function() {
  var formContent = grabFormContent();
  var url = formContent.url;
  var method = formContent.method;
  var contentType = formContent.contentType;
  var accept = formContent.accept;
  var version = formContent.version;
  var headers = formContent.headers;
  var body = formContent.body;
  
  var cURL = "curl -X " + method +  " -H \"" + "Content-Type"  + ":" + contentType + "\"" + " -H \"" + "Accept"  + ":" + accept + "\"";

  if (version) {
    
  }

  if (headers) {
    var keys = Object.keys(headers);
    keys.forEach(function(key) {
      cURL += " -H \"" + key + ":" + headers[key] + "\" ";
    });
  }

  if (body) {
    cURL += "-d '" + body + "' ";
  }

  cURL += " \"" + url + "\"";

  $("code#curl-area").html(cURL);
};
