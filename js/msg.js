//Business Logic












//User Logic
$(function() {


  $("#create-sidebar").click(function(event) {
  event.preventDefault();
  $(".home").hide();
  $(".search").hide();
  $(".create").show();
});

$("#search-sidebar").click(function(event) {
  event.preventDefault();
  $(".home").hide();
  $(".create").hide();
  $(".search").show();
});

$("#home-sidebar").click(function(event) {
  event.preventDefault();
  $(".create").hide();
  $(".search").hide();
  $(".home").show();
});

});
