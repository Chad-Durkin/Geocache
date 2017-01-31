var outputArray = [];

function Forum(threadTitle, threadCategory, threadBody) {
  this.threadTitle = threadTitle;
  this.threadCategory = threadCategory;
  this.threadBody = threadBody;
  this.outputArray = [];
}

Forum.prototype.outputArray = function() {
  this.outputArray.push(this);
}


$(function () {
  $('#thread').submit(function() {
    event.preventDefault();
    var threadTitle = $('#threadTitle').val();
    var threadCategory = $("input:radio[name=name]:checked").val();
    var threadBody = $("#threadBody").val();

    var forumObj = new Forum(threadTitle, threadCategory, threadBody);

    forumObj.outputArray();

    console.log(forumObj.outputArray);

  });
});
