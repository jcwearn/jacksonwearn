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
      $("code#response-area").html(response);
      $("code#headers-area").html(headers);
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }
  });
};
