var string;
var threadTitle;
var threadCategory;
var threadBody;
var threadTitlesArray = [];
var responseTitle;
var responseBody;

function Forum(threadTitle, threadCategory, threadBody) {
  this.threadTitle = threadTitle;
  this.threadCategory = threadCategory;
  this.threadBody = threadBody;
}

Forum.prototype.printString = function() {
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

function responser() {
  for (var i = 0; i <= threadTitlesArray.length - 1; i++)
  if (threadTitlesArray[i] === responseTitle) {
    $('.textTitle').append(responseTitle);
    $('.textBody').append(responseBody);
  }
};

$(function () {
  $('#thread').submit(function() {
    event.preventDefault();
    threadTitle = $('#threadTitle').val();
    threadCategory = $("input:radio[name=name]:checked").val();
    threadBody = $("#threadBody").val();
    threadTitlesArray.push(threadTitle);
    var forumObj = new Forum(threadTitle, threadCategory, threadBody);
    $("input[type=radio]").prop('checked', false);
    $("#threadTitle").val("");
    $("#threadBody").val("");
    forumObj.printString();
    checker();
  });

  $("#responseClick").click(function() {
    responseTitle = $("#responseTitle").val();
    responseBody = $("#responseBody").val();
    responser();
    '<br/>'
  });

  $('#gear1').click(function() {
    event.preventDefault();
    $('#gear').show();
    $('.display').show();
    $('#catalogedHunts').hide();
    $('#huntIdeas').hide();
    $('#questions').hide();
  });
  $('#catalogedHunts1').click(function() {
    event.preventDefault();
    $('#catalogedHunts').show();
    $('.display').show();
    $('#gear').hide();
    $('#huntIdeas').hide();
    $('#questions').hide();
  });
  $('#huntIdeas1').click(function() {
    event.preventDefault();
    $('#huntIdeas').show();
    $('.display').show();
    $('#gear').hide();
    $('#catalogedHunts').hide();
    $('#questions').hide();
  });
  $('#questions1').click(function() {
    event.preventDefault();
    $('#questions').show();
    $('.display').show();
    $('#gear').hide();
    $('#catalogedHunts').hide();
    $('#huntIdeas').hide();
  });
});
