var Tweet = function(username, content) {
  this.username = username;
  this.content = content;
  this.errorMessages = [];
};

Tweet.prototype.isValid = function() {
  if (this.content.length > 140) {
    this.errorMessages.push("The tweet is over 140 characters");
  }
  if (this.content.match(/twitter/g)) {
    this.errorMessages.push("Warning: The word 'twitter' will be replaced with the word 'tweety'");
  }
  if (this.content.match(/t.co\S*/)) {
    this.errorMessages.push("Warning: All urls to twitter will be removed");
  }

  if (this.errorMessages.length === 0) {
    return true;
  } else {
    return false;
  }
};

Tweet.prototype.sanitizeTweet = function() {
  this.content = this.content.replace(/twitter/g, "tweety").replace(/t.co\S*/, "").substring(0,140);

  if (!this.username.match(/^@/)) {
    this.username = "@" + this.username;
  }
};