function Hunt(huntName, huntDifficulty, huntDescription) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
}

function searchHunts(searchArray, huntsArray) {
  for(var index = 0; index < huntsArray.length; index++) {
    for(var index1 = 0; index1 < searchArray.length; index1++) {
      for(var index2 = 0; index2 < huntsArray[index].huntOptions.length; index2++) {
        if(searchArray[index1] === huntsArray[index].huntOptions[index2]) {
          console.log("Output this hunt to advanced search list");
        }
      }
    }
  }
}

function clear() {
  $("input#hunt-name").val("");
  $("textarea#hunt-description").val("");
  $('input[name=huntOptions]').prop('checked', false);
}

$(function() {
var huntsArray = [];
var searchArray = [];

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    var theHunt = new Hunt(huntName, huntDifficulty, huntDescription);
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      theHunt.huntOptions.push($(this).val());
    });
    huntsArray.push(theHunt);
    clear();
    $(".create").hide();
    $(".home").show();
  });

$(".searchHunt").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      searchArray.push($(this).val());
    });
    console.log(searchArray.length);
    searchHunts(searchArray, huntsArray);

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
