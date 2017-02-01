//Business Logic
function Message(title, privacy, body) {
  this.msgTitle = title;
  this.msgPrivacy = privacy;
  this.msgPassword;
  this.msgBody = body;
  this.msgNumber;
}

function clear() {
  $("input#msg-title").val("");
  $("textarea#msg-body").val("");
}

function checkForPrivate(newMsg) {
   if(newMsg.msgPrivacy === "private") {
     var msgPassword = prompt("Please enter a password for your message");
     newMsg.msgPassword = msgPassword;
   }
   return newMsg;
 };

function returnMsgInfo(msgNumber, msgArray, listId) {
  for(var index = 0; index < msgArray.length; index++)
  {
    if(msgArray[index].msgNumber === msgNumber) {
      if(msgArray[index].msgPrivacy === "private") {
        var passCheck = prompt("Enter the message password");
        if(msgArray[index].msgPassword === passCheck) {
          $(listId).children().toggle();
        } else {
          alert("You entered the incorrect password.");
        }
      } else {
        $(listId).children().toggle();
      }
    }
  }
}

function searchMsg(msgName, msgArray) {
  console.log("here");
  for(var index = 0; index < msgArray.length; index++) {
    console.log("here1");
    console.log(msgArray[index].msgName);
    if(msgArray[index].msgTitle === msgName) {
      console.log("here2");
      $("#matched-msgs").html("<li class='msgList' id='msgNumber" + msgArray[index].msgNumber + "'> FOUND: " + msgArray[index].msgTitle + " - " + msgArray[index].msgPrivacy + "</li>")
    }
  }
}

//User Logic
$(function() {
var msgArray = [];
var msgCounter = 0;

  $(".createMessage").submit(function(event) {
    event.preventDefault();
    var msgTitle = $("input#msg-title").val();
    var msgPrivacy = $("input:radio[name=privacy]:checked").val();
    var msgBody = $("textarea#msg-body").val();
    var newMsg = new Message(msgTitle, msgPrivacy, msgBody);
    newMsg = checkForPrivate(newMsg);
    newMsg.msgNumber = "msgNumber" + msgCounter;
    msgArray.push(newMsg);

    $("#current-messages").append("<li class='msgList' id='msgNumber" + msgCounter + "'>" + newMsg.msgTitle + " - " + newMsg.msgPrivacy + "</li>");
    $("#msgNumber" + msgCounter).append("<p class='msgDescription' id='msgDescription" + msgCounter + "'> Message: " + newMsg.msgBody + "</p>");
    msgCounter++;
    clear();
    $(".create").hide();
    $(".search").hide();
    $(".home").show();
    $(".msgList").last().click(function(event) {
      event.preventDefault();
      returnMsgInfo(this.id, msgArray, this);
    });

    $(".searchMessage").submit(function(event) {
      event.preventDefault();
      var msgName = $("input#search-name").val();
      searchMsg(msgName, msgArray);
    })
  });

  $("#create-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".home").hide();
  $(".search").hide();
  $(".create").show();
});

$("#search-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".home").hide();
  $(".create").hide();
  $(".search").show();
});

$("#home-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".create").hide();
  $(".search").hide();
  $(".home").show();
});

});
