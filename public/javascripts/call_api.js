var callAPI = function() {
  var payload = grabFormContent();

  $.ajax({
    url: "api-tester/callapi",
    type: "POST",
    data: JSON.stringify(payload),
    contentType:"application/json; charset=utf-8",
    cache: false,
    success: function(data, textStatus, jqXHR) {
      var response = JSON.stringify(JSON.parse(data.body),null,2);
      var headers = JSON.stringify(data.headers,null,2);
      $("pre#response-area").html(response);
      $("pre#headers-area").html(headers);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
};
