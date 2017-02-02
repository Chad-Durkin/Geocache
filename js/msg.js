//Business Logic
function Message(title, privacy) {
  this.msgTitle = title;
  this.msgPrivacy = privacy;
  this.msgPassword;
  this.msgBody = [];
  this.msgNumber;
};

function clear() {
  $("input#msg-title").val("");
  $("textarea#msg-body").val("");
};

function checkForPrivate(newMsg) {
   if(newMsg.msgPrivacy === "private") {
     var msgPassword = prompt("Please enter a password for your message");
     newMsg.msgPassword = msgPassword;
   }
   return newMsg;
 };

function returnMsgInfo(msgNumber, msgArray, listId) {
var indexPlaceHolder;
  for(var index = 0; index < msgArray.length; index++)
  {
    if(msgArray[index].msgNumber === msgNumber) {
      if(msgArray[index].msgPrivacy === "private") {
        var passCheck = prompt("Enter the message password");
        if(msgArray[index].msgPassword === passCheck) {
          $(".showMsgBody").empty();
          $(".home").hide();
          $(".create").hide();
          $(".search").hide();
          $(".showMsgTitle").text(msgArray[index].msgTitle);
          $(".showMsgPrivacy").text(msgArray[index].msgPrivacy);
          for(var j = 0; j < msgArray[index].msgBody.length; j++) {
            console.log("other");
            $(".showMsgBody").append("<li>" + msgArray[index].msgBody[j] + "</li>");
          }
          $(".showMsg").show();
          $(".showMsgInput").show
          $(".msgList").remove();
        } else {
          alert("You entered the incorrect password.");
        }
      } else {
          $(".showMsgBody").empty();
          $("textarea#reply-msg-btn").val("");
          $(".home").hide();
          $(".create").hide();
          $(".search").hide();
          $(".showMsgTitle").text(msgArray[index].msgTitle);
          $(".showMsgPrivacy").text(msgArray[index].msgPrivacy);
          for(var i = 0; i < msgArray[index].msgBody.length; i++) {
            console.log("output");
            $(".showMsgBody").append("<li>" + msgArray[index].msgBody[i] + "</li>");
          }
          $(".showMsg").show();
          $(".showMsgInput").show
          $(".msgList").remove();
      }
    }
    indexPlaceHolder = index;
  }
  addMsgReply(indexPlaceHolder, msgArray);
};

function searchMsg(msgName, msgArray) {
  for(var index = 0; index < msgArray.length; index++) {
    if(msgArray[index].msgTitle === msgName) {
      $("#matched-msgs").html("<li class='msgList' id='msgNumber" + msgArray[index].msgNumber + "'> FOUND: " + msgArray[index].msgTitle + " - " + msgArray[index].msgPrivacy + "</li>")
    }
  }
};

function dupMsgName(msgArray, msgName) {
  for(var index = 0; index < msgArray.length; index++) {
    if(msgArray[index].msgTitle === msgName) {
      var newName = prompt("Theres already a message with that name, choose another name!");
      dupMsgName(msgArray, newName);
      if(newName === null) {
        var newName = prompt("Theres already a message with that name, choose another name!");
        dupMsgName(msgArray, newName);
      }
    }
  }
  return msgName;
};

function addMsgReply(index, msgArray) {
  $("#reply-msg-btn").click(function(event) {
    event.preventDefault();
    $("#reply-msg-btn").off();
    $("#reply-msg-btn").on();
    var outputMsg = $("textarea#msg-reply").val();
    msgArray[index].msgBody.push($("textarea#msg-reply").val());
    $(".showMsgBody").append("<li>" + outputMsg + "</li>");
    $(".showMsgInput textarea").val("");
    $(".showMsgInput").hide();
  });
};

//User Logic
$(function() {
var msgArray = [];
var msgCounter = 0;
var indexHold;

  $(".createMessage").submit(function(event) {
    event.preventDefault();
    var msgTitle = $("input#msg-title").val();
    var msgPrivacy = $("input:radio[name=privacy]:checked").val();
    var msgBody = $("textarea#msg-body").val();
    msgTitle = dupMsgName(msgArray, msgTitle);
    var newMsg = new Message(msgTitle, msgPrivacy);
    newMsg.msgBody.push(msgBody);
    newMsg = checkForPrivate(newMsg);
    newMsg.msgNumber = "msgNumber" + msgCounter;
    msgArray.push(newMsg);

    $("#current-messages").append("<li class='msgList' id='msgNumber" + msgCounter + "'>" + newMsg.msgTitle + " - " + newMsg.msgPrivacy + "</li>");
    msgCounter++;
    clear();
    $(".showMsgBody").empty();
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
  $(".showMsgBody").empty();
  $(".msgList").remove();
  $(".showMsg").hide();
  $(".home").hide();
  $(".search").hide();
  $(".create").show();
});

$("#search-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".showMsgBody").empty();
  $(".msgList").remove();
  $(".showMsg").hide();
  $(".home").hide();
  $(".create").hide();
  $(".search").show();
});

$("#home-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".showMsgBody").empty();
  $(".msgList").remove();
  $(".showMsg").hide();
  $(".create").hide();
  $(".search").hide();
  $(".home").show();
});

});
