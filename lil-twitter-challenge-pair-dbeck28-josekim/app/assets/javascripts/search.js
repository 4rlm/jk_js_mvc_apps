function handleSearch(searchTerm)  {
  return $.ajax({
    method:"get",
    url: "/tweets/search/"+searchTerm
  })
}

function successful(response) {
  showTweets(response)
  $form.trigger('reset');
  $form.find("input").attr("style","")
}
function failure(){
  $form.find("input").attr("style","background-color:red")
}

$( document ).ready(function() {
  $("#search-form").on("submit",function(event){
    event.preventDefault()
    $form = $(this)
    promise = handleSearch($form.find("input").val())
    promise.done(successful)
    promise.fail(failure)
  })
});
