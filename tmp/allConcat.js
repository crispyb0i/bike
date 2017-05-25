// var googleApiKey = "AIzaSyBgxD_YlbJEGVCId6QXNpAuwnb2idaW2ho"

var apiKey = "49874b8cbe751bf79327504aca07a0eca5635e830ee22976d132738fcc600db4";

$(function(){
  $('#bike').submit(function(event) {
    event.preventDefault();
    $("#bike1").empty()
    var city = $('#city').val();
    var distance = $('#distance').val();
    // var input = $("#bikeId").val()

  $.get("https://bikeindex.org/api/v3/search/count/?location=" + city + "&stolenness=proximity&distance=" + distance + "&appid=" + apiKey).then(function(response){
    console.log(response)

    fillContainer = function(html) {
      $('#bike').text(html);
    };
    $("#bike1").append("<h3># of bikes stolen in your city: " + response.proximity + "</h3>")
    });
  })
});

$(document).ready(function(){
  $('#time').text(moment());
});
