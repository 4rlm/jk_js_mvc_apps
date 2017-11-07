///////////////////////////////on Page Load////////////////////////////////////////////
//Controller - handles loading all my tweets
function handleTweetsOnPageLoad(){
  $("#tweets-container ul").children().remove()
  var promise = fetchTweetsOnPageLoad()
  promise.done(showTweets)
}
//Fetch Model Data
function fetchTweetsOnPageLoad() {
  return $.ajax({
    method: "GET",
    url: "/tweets/recent"
  });
}

function showTweets(tweets){
  $("#tweets-container ul").children().remove()
  for(let i = 0; i < tweets.length; i++ )  {
    let tweet = createTweetLi(tweets[i])
    $("#tweets-container ul").append(tweet)
  }
}

function hashLink(hashes) {
  links = []
  for (let i = 0; i < hashes.length; i++){
    links.push(`<a class="hashtags">#${hashes[i]}</a>`)
  }
  return links
}

function createTweetLi(tweet) {
  let tweetSkeleton = $('#skeleton-tweet').clone()
  let links = tweet.hashtag_names.length > 0 ? hashLink(tweet.hashtag_names): [] ;
  tweetSkeleton.removeAttr( "id" ).removeAttr('style')
  tweetSkeleton.find(".avatar").attr("src",tweet.avatar_url)
  tweetSkeleton.find(".tweet-content .body").text(tweet.content)
  tweetSkeleton.find(".tweet-content .hash").html(links.join(" "))
  tweetSkeleton.find(".tweet-content .full-name").text(tweet.username)
  tweetSkeleton.find(".tweet-content .username").text(tweet.handle)

  let diffMs = new Date() - new Date(tweet.updated_at)
  var days = Math.floor(diffMs / 86400000); // days
  var hrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var mins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  let timeStatus = `${days > 0 ? days.toString() + "d " : "" }${hrs > 0 ? hrs.toString() + "h " : "" }${mins > 0 ? mins.toString() + "m" : "" } `
  tweetSkeleton.find(".tweet-content .timestamp").text(timeStatus)
  return tweetSkeleton
}

$( document ).ready(function() {
  handleTweetsOnPageLoad()
});
