var string;
var threadTitle;
var threadCategory;
var threadBody;
var responseTitle;
var responseBody;
var responseString;
var responseBody;

function Forum(threadTitle, threadCategory, threadBody) {
  this.threadTitle = threadTitle;
  this.threadCategory = threadCategory;
  this.threadBody = threadBody;
}

function Response(responseTitle, responseBody) {
  this.responseTitle = responseTitle;
  this.responseBody = responseBody;
}

Forum.prototype.printString = function() {
  stringTitle = '<strong>' + '<u>' + "Thread Title" + '</u>' + '</strong>' + ": " + this.threadTitle;
  stringCategory = '<strong>' + '<u>' + "Thread Category" + '</u>' + '</strong>' + ": " + this.threadCategory;
  stringBody =  '<strong>' + '<u>' + "Thread Body" + '</u>' + '</strong>' + ": " + this.threadBody;
}

Response.prototype.printResponse = function() {
  responseString = '<strong>' + '<u>' + "Response Title" + '</u>' + '</strong>' + ": " + this.responseTitle;
  responseBody = '<strong>' + '<u>' + "Response Body" + '</u>' + '</strong>' + ": " + this.responseBody;
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

    // threadTitlesArray.push(threadTitle);
    var forumObj = new Forum(threadTitle, threadCategory, threadBody);
    $("input[type=radio]").prop('checked', false);
    $("#threadTitle").val("");
    $("#threadBody").val("");
    forumObj.printString();
    checker();
  });

  $("#submit1").click(function() {
    responseTitle = $("#responseTitle").val();
    responseBody = $("#responseBody").val();

    var responseObj = new Response(responseTitle, responseBody);

    responseObj.printResponse();
    $('.responseList').append('<li>' + responseString + '<br/>' + responseBody +  '<br/>' + '</li>' + '</br>');
  })

  $('#gear1').click(function() {
    event.preventDefault();
    $('#gear').show();
    $('.responses').show();
    $('#catalogedHunts').hide();
    $('#huntIdeas').hide();
    $('#questions').hide();
  });
  $('#catalogedHunts1').click(function() {
    event.preventDefault();
    $('#catalogedHunts').show();
    $('.responses').show();
    $('#gear').hide();
    $('#huntIdeas').hide();
    $('#questions').hide();
  });
  $('#huntIdeas1').click(function() {
    event.preventDefault();
    $('#huntIdeas').show();
    $('.responses').show();
    $('#gear').hide();
    $('#catalogedHunts').hide();
    $('#questions').hide();
  });
  $('#questions1').click(function() {
    event.preventDefault();
    $('#questions').show();
    $('.responses').show();
    $('#gear').hide();
    $('#catalogedHunts').hide();
    $('#huntIdeas').hide();
  });
});
