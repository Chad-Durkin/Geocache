function Hunt(huntName, huntDifficulty, huntDescription) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
}

function clear() {
  $("input#hunt-name").val("");
  $("textarea#hunt-description").val("");
  $('input[name=huntOptions]').prop('checked', false);
}

$(function() {
var huntsArray = [];

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    var theHunt = new Hunt(huntName, huntDifficulty, huntDescription);
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      theHunt.huntOptions.push(this);

    });
    huntsArray.push(theHunt);
    clear();
    $(".create").hide();
    $(".home").show();
  });

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
