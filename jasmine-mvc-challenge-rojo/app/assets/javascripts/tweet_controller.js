$(document).ready(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    var username = $("#username").val();
    var content = $("content").val();
    var tweet = new Tweet(username, content);
    
    $.post("/tweets", $(this).serialize()).done(function(response) {
      console.log(response);
    });
  })
});