function Hunt(huntName, huntDifficulty, huntDescription) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
}

Hunt.prototype = {
  searchHunt: function (searchArray) {
    for(var index = 0; index < searchArray.length; index++)
    {
      for(var i = 0; i < this.huntOptions.length; i++) {
        console.log(this.huntOptions[i] + " hunt option");
        console.log(searchArray[index]+ " search option");
        if(this.huntOptions[i] === searchArray[index]) {
          console.log("append this");
          $("#matched-hunts").append("<li>" + this.huntName + "</li>")
        }
      }
    }
  }
};


// function searchHuntsArray(searchArray, huntsArray) {
// var huntCounter = 0;
//   for(var index = 0; index < huntsArray.length; index++) {
//     for(var index1 = 0; index1 < huntsArray[index].huntOptions.length; index1++) {
//       huntCounter = searchOptionsArray(huntsArray[index].huntOptions, searchArray[index2]);
//     }
//   }
//   if(huntCounter > 0) {
//     $("#matched-hunts").show();
//   } else {
//     $("#no-matches").show();
//   }
// }
//
// function searchOptionsArray(theHunt, searchItem, huntCounter) {
//   for(var index = 0; index < searchArray[index]; index++) {
//     if(searchItem === theHunt.huntOptions[index]) {
//       console.log("Output this hunt to advanced search list");
//       $("#matched-hunts").append("<li>" + huntsArray[index].huntName + "</li>")
//       return huntCounter += 1;
//     }
//   }
//   return huntCounter;
// }

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

    for(var index = 0; index < huntsArray.length; index++) {
      huntsArray[index].searchHunt(searchArray);
    }

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
