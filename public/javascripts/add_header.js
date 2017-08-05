function add_header() {
  var key, value;
  if (number_of_headers === 0) {
    key = $("#key").val();
    value = $("#value").val();
  } else {
    key = $("#key" + number_of_headers).val();
    value = $("#value" + number_of_headers).val();
  }

  if(key && value) {
    var cancel_button;    
    if (number_of_headers === 0) {
      <!-- cancel_button = $("<div class=\"col m1\" style=\"margin-top:15px\"><a class=\"btn-floating btn-medium waves-effect waves-light grey\" id=\"header-cancel-button\"><i class=\"material-icons\">cancel</i></a></div>"); -->
      $("#header-add-button").remove();
    } else {
      <!-- cancel_button = $("<div class=\"col m1\" style=\"margin-top:15px\"><a class=\"btn-floating btn-medium waves-effect waves-light grey\" id=\"header-cancel-button" + number_of_headers + "\"><i class=\"material-icons\">cancel</i></a></div>"); -->
      $("#header-add-button" + number_of_headers).remove();
    }

    number_of_headers = number_of_headers + 1;

    var new_div = $("<div class=\"col m5 offset-m1\"><div class=\"input-field\"><input id=\"key" + number_of_headers +  "\" type=\"text\" tabindex=\"1\" name=\"key" + number_of_headers + "\" placeholder=\"key\"></div></div><div class=\"col m5\"><div class=\"input-field\"><input id=\"value" + number_of_headers + "\" type=\"text\" tabindex=\"1\" name=\"value" + number_of_headers + "\" placeholder=\"value\"></div></div><div class=\"col m1\" style=\"margin-top:15px\"><a class=\"btn-floating btn-medium waves-effect waves-light grey\" id=\"header-add-button" + number_of_headers + "\"><i class=\"material-icons\">add</i></a></div>\"");
    
    $('#header-form').append(new_div);
    $("#header-add-button" + number_of_headers).on("click", function(){
      add_header();
    });
  }
}


