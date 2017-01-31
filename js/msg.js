//Business Logic
function Message(title, privacy, body) {
  this.msgTitle = title;
  this.msgPrivacy = privacy;
  this.msgPassword;
  this.msgBody = body;
}







function checkForPrivate(newMsg) {
   if(newMsg.msgPrivacy === "private") {
     var msgPassword = prompt("Please enter a password for your message");
     newMsg.msgPassword = msgPassword;
   }
   return newMsg;
 }



//User Logic
$(function() {
var msgArray = [];

  $(".createMessage").submit(function(event) {
    event.preventDefault();
    var msgTitle = $("input#msg-title").val();
    var msgPrivacy = $("input:radio[name=privacy]:checked").val();
    var msgBody = $("textarea#msg-body").val();
    var newMsg = new Message(msgTitle, msgPrivacy, msgBody);
    newMsg = checkForPrivate(newMsg);
    msgArray.push(newMsg);



  })


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
