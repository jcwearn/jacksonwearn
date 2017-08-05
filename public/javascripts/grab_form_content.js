var grabFormContent = function() {
  var url = $("input#api-route").val();
  var method = $("select#method").val();
  var contentType = $("select#content-type").val();
  var accept = $("select#accept").val();
  var version = $("input#version").val();
  var body = $("textarea#body").val();
  
  var headers = getHeaders();

  var formContent = {
    "url": url,
    "method": method,
    "contentType": contentType,
    "accept": contentType,
    "version": version,
    "headers": headers,
    "body": body
  };

  return formContent;
};

function getHeaders() {
  var keys = [];
  var values = [];
  var headers = {};
  $('[id^="key"]').each(function() {
    var key = $(this).val();
    if(key) {
      keys.push(key);
    }
  });

  $('[id^="value"]').each(function() {
    var value = $(this).val();
    if(value) {
      values.push(value);
    }
  });

  for(var i = 0; i < keys.length; i++) {
    if(keys[i] && values[i])
      headers[keys[i]] = values[i];
  }
  
  return headers;
}
