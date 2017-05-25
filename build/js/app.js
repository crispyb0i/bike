(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
