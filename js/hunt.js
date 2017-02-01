function Hunt(huntName, huntDifficulty, huntDescription, hunterCounter) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
  this.huntCounter = huntCounter;
}

//Added in comment for commit sake
Hunt.prototype = {
  searchHunt: function (searchArray) {
    var listCounter = 0;
    for(var index = 0; index < searchArray.length; index++)
    {
      for(var i = 0; i < this.huntOptions.length; i++) {
        if(this.huntOptions[i] === searchArray[index]) {
          $("#matched-hunts").append("<li class='listedHunts" + listCounter + "'> <strong>Hunt Name:</strong> <em>" + this.huntName + "</em> <strong>Difficulty:</strong> <em>" + this.huntDifficulty + "</em></li>");
          $(".listedHunts" + listCounter).append("<p> <strong>Description:</strong> <em>" + this.huntDescription + "</em></p>");
          listCounter++;
        }
      }
    }
  }
};

function clear() {
  $("input#hunt-name").val("");
  $("textarea#hunt-description").val("");
  $("input[name=huntOptions]").prop("checked", false);
}

$(function() {
var huntsArray = [];
var listCounter = 1;

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    var huntCounter = "hunt" + listCounter;
    var theHunt = new Hunt(huntName, huntDifficulty, huntDescription, huntCounter);
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      theHunt.huntOptions.push($(this).val());
    });
    huntsArray.push(theHunt);
    clear();
    $(".create").hide();
    $(".home").show();

    $("#current-hunts").append("<li> <strong>Hunt Name:</strong> <em><span class='currentHunts' id='hunt" + listCounter + "'>" + theHunt.huntName + "</span></em> <strong>Difficulty:</strong> <em>" + theHunt.huntDifficulty + "</em></li>");
    $(".currentHuntList" + listCounter).append("<p> <strong>Description:</strong> <em>" + theHunt.huntDescription + "</em></p>");
    listCounter++;
    // $(".currentHunts").click(function(event) {
    //   event.preventDefault();
    //   $(".home").hide();
    //   $(".search").hide();
    //   $(".create").hide();
    // });
  });

  // $(".currentHunts").click(function(event) {
  //   event.preventDefault();
  //   $(".home").hide();
  //   $(".search").hide();
  //   $(".create").hide();
  // });

$(".searchHunt").submit(function(event) {
    event.preventDefault();
    var searchArray = [];
    $("#matched-hunts").empty();
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      searchArray.push($(this).val());
    });
    for(var index = 0; index < huntsArray.length; index++) {
      huntsArray[index].searchHunt(searchArray);
    }
});

  $("#create-sidebar").click(function(event) {
    event.preventDefault();
    clear();
    $("#matched-hunts").empty();
    $(".home").hide();
    $(".search").hide();
    $(".create").show();
  });

  $("#search-sidebar").click(function(event) {
    event.preventDefault();
    clear();
    $("#matched-hunts").empty();
    $(".home").hide();
    $(".create").hide();
    $(".search").show();
  });

  $("#home-sidebar").click(function(event) {
    event.preventDefault();
    clear();
    $("#matched-hunts").empty();
    $(".create").hide();
    $(".search").hide();
    $(".home").show();
  });
});
