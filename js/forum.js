var outputArray = [];
var string = "";

var threadTitle = "";
var threadCategory = "";
var threadBody = "";

function Forum(threadTitle, threadCategory, threadBody) {
  this.threadTitle = threadTitle;
  this.threadCategory = threadCategory;
  this.threadBody = threadBody;
  // this.outputArray = [];
}

Forum.prototype.printString = function() {
  // outputArray.push(this);
  stringTitle = "Thread title: " + this.threadTitle;
  stringCategory = "Thread Category: " + this.threadCategory;
  stringBody =  "Thread Body: " + this.threadBody;
}

function goodLuck() {
  if (threadCategory === "Gear") {
    $('.gear').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>');
  }
  if (threadCategory === "Cataloged Hunts") {
    $('.catalogedHunts').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>');
  }
  if (threadCategory === "Hunt Ideas") {
    $('.huntIdeas').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>');
  }
  if (threadCategory === "Questions") {
    $('.questions').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>');
  }
  $('#output').text("Your thread has been submitted. Thank You");

};


$(function () {
  $('#thread').submit(function() {
    event.preventDefault();
    threadTitle = $('#threadTitle').val();
    threadCategory = $("input:radio[name=name]:checked").val();
    threadBody = $("#threadBody").val();
    var forumObj = new Forum(threadTitle, threadCategory, threadBody);
    $("input[type=radio]").prop('checked', false);
    $("#threadTitle").val("");
    $("#threadBody").val("");
    forumObj.printString();

    goodLuck();

    $('#gear1').click(function() {
      event.preventDefault();
      $('#gear').show();
      });
    $('#catalogedHunts1').click(function() {
      event.preventDefault();
      $('#catalogedHunts').show();
      });
    $('#huntIdeas1').click(function() {
      event.preventDefault();
      $('#huntIdeas').show();
      });
    $('#questions1').click(function() {
      event.preventDefault();
      $('#questions').show();
      });
});
});
