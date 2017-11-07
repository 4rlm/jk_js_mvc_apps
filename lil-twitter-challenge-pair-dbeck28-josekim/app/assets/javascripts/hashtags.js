///////////////////////////////Hash Tag on Load //////////////////////////////////////////
function handleTweetTagsOnLoad()  {
  $("#trends-container ul").children().remove()
  promise = fetchTweetTagsOnLoad()
  promise.done(showTweetTagsOnLoad)
}

function fetchTweetTagsOnLoad() {
  return $.ajax({
    method: "GET",
    url: "/hashtags/popular"
  })
}

function showTweetTagsOnLoad(hashTags) {
  for(let i = 0; i < 10; i++ )  {
    let liElement = `<li><a class="hashtags">#${hashTags[i].name}</a></li>`
    $("#trends-container ul").append(liElement)
  }
}

$( document ).ready(function() {
  handleTweetTagsOnLoad()
  $(".container ul").on("click",".hashtags", function(event){
    event.preventDefault()
    searchTerm = $(this).text()
    console.log(searchTerm.slice(1,searchTerm.length))
    promise = handleSearch(searchTerm.slice(1,searchTerm.length))
    promise.done(showTweets)
  })
});
