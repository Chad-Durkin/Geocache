var outputArray = [];

function Forum(threadTitle, threadCategory, threadBody) {
  this.threadTitle = threadTitle;
  this.threadCategory = threadCategory;
  this.threadBody = threadBody;
  // this.outputArray = [];
}

Forum.prototype.outputArray = function() {
  outputArray.push(this);
}


$(function () {
  $('#thread').submit(function() {
    event.preventDefault();

    var threadTitle = $('#threadTitle').val();
    var threadCategory = $("input:radio[name=name]:checked").val();
    var threadBody = $("#threadBody").val();
    var forumObj = new Forum(threadTitle, threadCategory, threadBody);
    $("input[type=radio]").prop('checked', false);
    $("#threadTitle").val("");
    $("#threadBody").val("");
    forumObj.outputArray();

    console.log(outputArray);

  });
});
