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
$(".showMsgBody").show();
  for(var index = 0; index < msgArray.length; index++)
  {
    if(msgArray[index].msgNumber === msgNumber) {
      if(msgArray[index].msgPrivacy === "private") {
        var passCheck = prompt("Enter the message password");
        if(msgArray[index].msgPassword === passCheck) {
          $(".home").hide();
          $(".create").hide();
          $(".search").hide();
          $(".showMsgInput").show();
          $(".showMsgTitle").text(msgArray[index].msgTitle);
          $(".showMsgPrivacy").text(msgArray[index].msgPrivacy);
          for(var j = 0; j < msgArray[index].msgBody.length; j++) {
            console.log("other");
            $(".showMsgBody").append("<li>" + msgArray[index].msgBody[j] + "</li>");
          }
          $(".showMsg").show();
          $(".showMsgInput").show

      $(".searchMsgList").remove();
        } else {
          alert("You entered the incorrect password.");
        }
      } else {
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
          $(".showMsgInput").show();

      $(".searchMsgList").remove();
      }
    }
    indexPlaceHolder = index;
  }
  addMsgReply(indexPlaceHolder, msgArray);

};

function searchMsg(msgName, msgArray) {
  for(var index = 0; index < msgArray.length; index++) {
    if(msgArray[index].msgTitle === msgName) {
      $("#matched-msgs").html("<li class='msgList searchMsgList' id='msgNumber" + msgArray[index].msgNumber + "'> FOUND: " + msgArray[index].msgTitle + " - " + msgArray[index].msgPrivacy + "</li>")
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
    // $("#reply-msg-btn").off();
    // $("#reply-msg-btn").on();
    var outputMsg = $("textarea#msg-reply").val();
    msgArray[index].msgBody.push($("textarea#msg-reply").val());
    $(".showMsgBody").append("<li>" + outputMsg + "</li>");
    $(".showMsgInput textarea").val("");
    $(".showMsgInput").hide();
    $("#reply-msg-btn").unbind();
  });
};

//User Logic
$(function() {
var msgArray = [];
var msgCounter = 1;
var indexHold;
var demoMessage = new Message("Big Four Ice Caves", "public");
var demoBody = "So I just recently finished the Big Four Ice Caves hunt and I wanted to create a group message for others with questions about the hunt or if anyone is looking for a mentor/guide. The guy who posted the hunt about the ice caves wasn't kidding when he set the difficulty to master, it was honestly one of the hardest hikes I've ever been on, encountering weather elements and obstacles. If you need any help or questions give me an email at emailmehere@email.com.";
demoMessage.msgBody.push(demoBody);
demoMessage.msgNumber = "msgNumber0";
msgArray.push(demoMessage);
$(".msgList").last().click(function(event) {
  event.preventDefault();
  returnMsgInfo(demoMessage.msgNumber, msgArray, demoMessage.msgNumber);
});


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
  $(".searchMsgList").remove();
  $(".showMsg").hide();
  $(".home").hide();
  $(".search").hide();
  $(".create").show();
});

$("#search-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".showMsgBody").empty();
  $(".searchMsgList").remove();
  $(".showMsg").hide();
  $(".home").hide();
  $(".create").hide();
  $(".search").show();
});

$("#home-sidebar").click(function(event) {
  event.preventDefault();
  clear();
  $(".showMsgBody").empty();
  $(".searchMsgList").remove();
  $(".showMsg").hide();
  $(".create").hide();
  $(".search").hide();
  $(".home").show();
});

});
