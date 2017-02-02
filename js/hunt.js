function Hunt(huntName, huntDifficulty, huntDescription, huntCounter) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
  this.huntCounter = huntCounter;
  this.huntSteps = [];
  this.huntStepsCoords = [];
  this.huntCoordDirection = [];
};

//Added in comment for commit sake
Hunt.prototype = {
  searchHunt: function (searchArray) {
    var listCounter = 0;
    for(var index = 0; index < searchArray.length; index++)
    {
      for(var i = 0; i <= this.huntOptions.length; i++) {
        if(this.huntOptions[i] === searchArray[index] || this.huntDifficulty === searchArray[index]) {
          $("#matched-hunts").append("<li class='listedHunts " + this.huntCounter + "'> <strong>Hunt Name:</strong> <em>" + this.huntName + "</em></li><p><strong>Difficulty:</strong> <em>" + this.huntDifficulty + "</em></p>");
          listCounter++;
          return;
        }
      }
    }
  }
};

function clickSearch(huntsArray) {
  $(".listedHunts").last().click(function(event) {
    event.preventDefault();
    $(".showHuntGearRequired").empty();
    $(".home").hide();
    $(".search").hide();
    $(".create").hide();
    $(".showHuntsSteps").empty();
    for (var index = 0; index < huntsArray.length; index++) {
      console.log($(this).attr('class'));
      if(huntsArray[index].huntCounter === $(this).attr('class').split(' ')[1]) {
        $(".showHuntHeader").text(huntsArray[index].huntName);
        $(".showHuntDifficulty").text("Difficulty: " + huntsArray[index].huntDifficulty);
        huntsArray[index].huntOptions.forEach(function(option) {
          $(".showHuntGearRequired").append("<li>" + option + "</li>");
        })
        console.log("here1");
        $(".showHuntDescription").text(huntsArray[index].huntDescription);
        var stepCoord;
        for(var index2 = 0; index2 < huntsArray[index].huntSteps.length; index2++) {
          console.log("here2");
          stepCoord = "Latitude: " + huntsArray[index].huntCoordDirection[0] + " " + huntsArray[index].huntStepsCoords[index2][0] + "." + huntsArray[index].huntStepsCoords[index2][1] + "˚ Longitude: " + huntsArray[index].huntCoordDirection[1] + " " + huntsArray[index].huntStepsCoords[index2][2] + "." + huntsArray[index].huntStepsCoords[index2][3] + "˚";
          $(".showHuntsSteps").append("<li><strong>Step " + (index2 + 1) + ":</strong> "  + huntsArray[index].huntSteps[index2] + "</li> <li><strong>Step " + (index2 + 1) + " Coords:</strong> " + stepCoord + "</li>");
        }
      }
    }
    $(".showHunt").show();
  });
}

function clickHunt(huntsArray) {
  $(".currentHunts").click(function(event) {
    event.preventDefault();
    $(".showHuntGearRequired").empty();
    $(".home").hide();
    $(".search").hide();
    $(".create").hide();
    $(".showHuntsSteps").empty();
    for (var index = 0; index < huntsArray.length; index++) {
      console.log($(this).attr('class'));
      if(huntsArray[index].huntCounter === $(this).attr('class').split(' ')[1]) {
        $(".showHuntHeader").text(huntsArray[index].huntName);
        $(".showHuntDifficulty").text("Difficulty: " + huntsArray[index].huntDifficulty);
        huntsArray[index].huntOptions.forEach(function(option) {
          $(".showHuntGearRequired").append("<li>" + option + "</li>");
        })
        console.log("here1");
        $(".showHuntDescription").text(huntsArray[index].huntDescription);
        var stepCoord;
        for(var index2 = 0; index2 < huntsArray[index].huntSteps.length; index2++) {
          console.log("here2");
          stepCoord = "Latitude: " + huntsArray[index].huntCoordDirection[0] + " " + huntsArray[index].huntStepsCoords[index2][0] + "." + huntsArray[index].huntStepsCoords[index2][1] + "˚ Longitude: " + huntsArray[index].huntCoordDirection[1] + " " + huntsArray[index].huntStepsCoords[index2][2] + "." + huntsArray[index].huntStepsCoords[index2][3] + "˚";
          $(".showHuntsSteps").append("<li><strong>Step " + (index2 + 1) + ":</strong> "  + huntsArray[index].huntSteps[index2] + "</li> <li><strong>Step " + (index2 + 1) + " Coords:</strong> " + stepCoord + "</li>");
        }
      }
    }
    $(".showHunt").show();
  });
};

function addStep(stepCounter) {
  console.log("here");
  $("#step-div").append("<div class='step" + stepCounter + "'><div class='row'><br><div class='col-md-12'><div class='form-group'><h4>Step " + stepCounter + ": </h4><input type='text' class='form-control steps' name='steps' id='step" + stepCounter + "' required></div></div></div><div class='row'><div class='col-md-5'><div class='form-group'><h4>Latitude: </h4><select class='form-control compass'><option>N</option><option>S</option></select><input type='number' class='form-control degreesPre coords' name='coord" + stepCounter + "' required><p class='coordPeriod'>.</p><input type='number' class='form-control degreesPost coords' name='coord" + stepCounter + "' required><p class='coordDegree'>˚</p></div></div><div class='col-md-5'><div class='form-group'><h4>Longitude: </h4><select class='form-control compass'><option>E</option><option>W</option></select><input type='number' class='form-control step1Coords degreesPre coords' name='coord" + stepCounter + "' required><p class='coordPeriod'>.</p><input type='number' class='form-control step1Coords degreesPost coords' name='coord" + stepCounter + "' required><p class='coordDegree'>˚</p></div></div></div></div>");
  return stepCounter += 1;
};

function clear(stepCounter) {
  $("input#hunt-name").val("");
  $("textarea#hunt-description").val("");
  $("input[name=huntOptions]").prop("checked", false);
  $("input#step1").val("");
  $("input[name=coord1]").val("");
  for(var index = stepCounter - 1; index > 1; index--) {
    $(".step" + index).remove();
  }
  stepCounter = 2;
  return stepCounter;
};

$(function() {
var huntsArray = [];
var listCounter = 2;
var stepCounter = 2;
var eachStep = 1;
var demoHunt = new Hunt("Demo Hunt!", "Journeyman", "This is our demo hunt! We will fill in a more appropriate description for it later, but right now we are giving you, the user, an idea of what you will be able to see on this site and use on this site, but for now this will be an overview or a basic description of this hunt, some expectations, some advice, what you will be seeing or doing on this hunt, and anything else the hunt create feels useful for the people who wants to choose to do his hunt.", "hunt0");
huntsArray.push(demoHunt);
var snoqualmieHunt = new Hunt("Snoqualmie Falls Hike", "Journeyman", "On this hike to the beautiful Snoqualmie Falls you will encounter a few obstacles! There has been reports of a brown bear in the area so make sure you bring your Bear Spray or a Firearm. There are a few hills and some rocks you will have to hike over but other than that you should make it to the falls easy peasy.", "hunt1");
snoqualmieHunt.huntSteps.push("To start drive to the parking lot a few miles near the base of the falls, you can find it easy with a quick google search.");
snoqualmieHunt.huntSteps.push("Make your way towards a pile of rocks that you will want to keep an eye out for, this is the half way marker for this hike.");
snoqualmieHunt.huntCoordDirection.push("N");
snoqualmieHunt.huntCoordDirection.push("W");
snoqualmieHunt.huntStepsCoords.push([12, 345, 123, 456]);
snoqualmieHunt.huntStepsCoords.push([13, 523, 125, 234]);
snoqualmieHunt.huntOptions.push("Hiking Boots");
snoqualmieHunt.huntOptions.push("Backpack");
snoqualmieHunt.huntOptions.push("Bear Spray");
huntsArray.push(snoqualmieHunt);

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    var huntCounter = "hunt" + listCounter;
    var huntStepCounter = 0;
    var theHunt = new Hunt(huntName, huntDifficulty, huntDescription, huntCounter);
    $("input:checkbox[name=huntOptions]:checked").each(function() {
      theHunt.huntOptions.push($(this).val());
    });
    theHunt.huntCoordDirection.push($("#latCompass").val());
    theHunt.huntCoordDirection.push($("#longCompass").val());
    var coordArray = [];
    $("input[name=steps]").each(function() {
      theHunt.huntSteps.push($(this).val());
      coordArray = [];

      $("input[name=coord" + eachStep + "]").each(function() {
        coordArray.push($(this).val());
      })
      eachStep++;
      theHunt.huntStepsCoords.push(coordArray);
    })
    huntsArray.push(theHunt);
    stepCounter = clear(stepCounter);
    stepCounter = 2;
    $(".create").hide();
    $(".home").show();

    $("#current-hunts").append("<li> <strong>Hunt Name:</strong> <em><span class='currentHunts hunt" + listCounter + "'>" + theHunt.huntName + "</span></em></li><p><strong>Difficulty:</strong> <em>" + theHunt.huntDifficulty + "</em></p><p><strong>Description:</strong> <em>" + theHunt.huntDescription + "</em></p>");
    listCounter++;
    clickHunt(huntsArray);
  });

  $("#add-step").click(function(event) {
    event.preventDefault();
    stepCounter = addStep(stepCounter);
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
    clickSearch(huntsArray);
});

  $("#create-sidebar").click(function(event) {
    event.preventDefault();
    stepCounter = clear(stepCounter);
    $("#matched-hunts").empty();
    $(".showHunt").hide();
    $(".home").hide();
    $(".search").hide();
    $(".create").show();
  });

  $("#search-sidebar").click(function(event) {
    event.preventDefault();
    stepCounter = clear(stepCounter);
    $("#matched-hunts").empty();
    $(".showHunt").hide();
    $(".home").hide();
    $(".create").hide();
    $(".search").show();
  });

  $("#home-sidebar").click(function(event) {
    event.preventDefault();
    stepCounter = clear(stepCounter);
    $("#matched-hunts").empty();
    $(".showHunt").hide();
    $(".create").hide();
    $(".search").hide();
    $(".home").show();
  });
});
