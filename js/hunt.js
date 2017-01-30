function Hunt(huntName, huntDifficulty, huntDescription) {
  this.huntName = huntName;
  this.huntDifficulty = huntDifficulty;
  this.huntOptions = [];
  this.huntDescription = huntDescription;
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
    })
    huntsArray.push(theHunt);
    console.log(theHunt);
    console.log(huntsArray);
  })

});
