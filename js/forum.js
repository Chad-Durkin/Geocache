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
  stringTitle = '<strong>' + '<u>' + "Thread Title" + '</u>' + '</strong>' + ": " + this.threadTitle;
  stringCategory = '<strong>' + '<u>' + "Thread Category" + '</u>' + '</strong>' + ": " + this.threadCategory;
  stringBody =  '<strong>' + '<u>' + "Thread Body" + '</u>' + '</strong>' + ": " + this.threadBody;
}

function checker() {
  if (threadCategory === "Gear") {
    $('.gear').append('<li>' + stringTitle  + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>' + '</br>');
  }
  if (threadCategory === "Cataloged Hunts") {
    $('.catalogedHunts').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>' + '</br>');
  }
  if (threadCategory === "Hunt Ideas") {
    $('.huntIdeas').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>' + '</br>');
  }
  if (threadCategory === "Questions") {
    $('.questions').append('<li>' + stringTitle + '<br/>' + stringCategory +  '<br/>' + stringBody + '</li>' + '</br>');
  }
  $('#output').text("Your thread has been submitted. Thank You.");

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

    checker();

    $('#gear1').click(function() {
      event.preventDefault();
      $('#gear').show();
      $('#catalogedHunts').hide();
      $('#huntIdeas').hide();
      $('#questions').hide();
      });
    $('#catalogedHunts1').click(function() {
      event.preventDefault();
      $('#catalogedHunts').show();
      $('#gear').hide();
      $('#huntIdeas').hide();
      $('#questions').hide();
      });
    $('#huntIdeas1').click(function() {
      event.preventDefault();
      $('#huntIdeas').show();
      $('#gear').hide();
      $('#catalogedHunts').hide();
      $('#questions').hide();
      });
    $('#questions1').click(function() {
      event.preventDefault();
      $('#questions').show();
      $('#gear').hide();
      $('#catalogedHunts').hide();
      $('#huntIdeas').hide();
      });
});
});
