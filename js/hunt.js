function Hunt(huntName, huntOptions, huntDescription) {
  this.huntName = huntName;
  this.huntOptions = [huntOptions];
  this.huntDescription = huntDescription;
}


$(function() {

  $(".createHunt").submit(function(event) {
    event.preventDefault();
    var huntName = $("input#hunt-name").val();
    var huntDifficulty = $("input:radio[name=difficultyCreate]:checked").val();
    var huntDescription = $("textarea#hunt-description").val();
    console.log(huntName);
    console.log(huntDifficulty);
    console.log(huntDescription);
  })

});
