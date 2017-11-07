function handleTweetSubmission(data)  {
  let hashtags = data.match(/\#\w+/g)
  let newHash= []
  if (hashtags != null)  {
    hashtags.forEach(function(hash) {
      newHash.push(hash.replace(/\#/g,""))
    })
  }
  let promise = $.ajax({
    method: "POST",
    url: "/tweets",
    data: {"tweet":{"content":data,"username":"Joananananana",},"hashtags":newHash}
  })
  return promise
}

function viewNewTweet(tweet)  {
  newTweet = createTweetLi(tweet)
  newTweet.hide()
  $("#tweets-container ul").prepend(newTweet)
  $("#tweets-container ul").children().first().slideDown()
}

$( document ).ready(function() {
  $("#tweet-form").on("submit",function(event){
    event.preventDefault()
    $form = $(this)
    promise = handleTweetSubmission($form.find('#new-tweet').val())
    promise.done(function(response){
      viewNewTweet(response)
      $form.trigger('reset');
    })
  })
});
