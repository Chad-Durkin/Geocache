function Hunt(huntName, huntDifficulty, huntDescription, huntCounter) {
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
        if(this.huntOptions[i] === searchArray[index] || this.huntDifficulty === searchArray[index]) {
          $("#matched-hunts").append("<li class='listedHunts" + listCounter + "'> <strong>Hunt Name:</strong> <em>" + this.huntName + "</em> <strong>Difficulty:</strong> <em>" + this.huntDifficulty + "</em></li>");
          $(".listedHunts" + listCounter).append("<p> <strong>Description:</strong> <em>" + this.huntDescription + "</em></p>");
          listCounter++;
          return;
        }
      }
    }
  }
};

function clickHunt(huntsArray) {
  $(".currentHunts").last().click(function(event) {
    event.preventDefault();
    $(".showHuntGearRequired").empty();
    $(".home").hide();
    $(".search").hide();
    $(".create").hide();
    for (var index = 0; index < huntsArray.length; index++) {
      if(huntsArray[index].huntCounter === this.id) {
        $(".showHuntHeader").text(huntsArray[index].huntName);
        $(".showHuntDifficulty").text("Difficulty: " + huntsArray[index].huntDifficulty);
        huntsArray[index].huntOptions.forEach(function(option) {
          $(".showHuntGearRequired").append("<li>" + option + "</li>");
        })
        $(".showHuntDescription").text(huntsArray[index].huntDescription);
      }
    }
    $(".showHunt").show();
  });
}
function clear() {
  $("input#hunt-name").val("");
  $("textarea#hunt-description").val("");
  $("input[name=huntOptions]").prop("checked", false);
}

$(function() {
var huntsArray = [];
var listCounter = 1;
var demoHunt = new Hunt("Demo Hunt! Check out the teams hunt for you!", "Journeyman", "This is our demo hunt! We will fill in a more appropriate description for it later, but right now we are giving you, the user, an idea of what you will be able to see on this site and use on this site, but for now this will be an overview or a basic description of this hunt, some expectations, some advice, what you will be seeing or doing on this hunt, and anything else the hunt create feels useful for the people who wants to choose to do his hunt.", "hunt0");
huntsArray.push(demoHunt);

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    var huntCounter = "hunt" + listCounter;
    console.log(huntCounter);
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
    clickHunt(huntsArray);
  });

  clickHunt(huntsArray);

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
    $(".showHunt").hide();
    $(".home").hide();
    $(".search").hide();
    $(".create").show();
  });

  $("#search-sidebar").click(function(event) {
    event.preventDefault();
    clear();
    $("#matched-hunts").empty();
    $(".showHunt").hide();
    $(".home").hide();
    $(".create").hide();
    $(".search").show();
  });

  $("#home-sidebar").click(function(event) {
    event.preventDefault();
    clear();
    $("#matched-hunts").empty();
    $(".showHunt").hide();
    $(".create").hide();
    $(".search").hide();
    $(".home").show();
  });
});
