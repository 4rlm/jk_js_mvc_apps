describe("tweets", function() {
  describe("constructor function", function() {
    it("makes a tweet", function() {
      var tweet = new Tweet("rojo", "This is my tweeet");
      expect(tweet.constructor).toBe(Tweet);
    });

    it("only allows 140 characters for the content", function() {
      var content = "Hello! This is my tweet. I am supposed to ramble until my tweet is more that a hundred and forty characters. What else can I say? I like turtles"
      var tweet = new Tweet("rojo", content);
      tweet.sanitizeTweet();
      expect(tweet.content.length).toEqual(140);
    });
  });

  describe("content requirements", function() {
    it("cannot contain the word twitter", function() {
      var content = "Hello! This is my twitter. I am supposed to twitter until my tweet is more that a hundred and forty twitter."
      var tweet = new Tweet("rojo", content);
      tweet.sanitizeTweet();
      expect(tweet.content).not.toContain("twitter");
    });

    it("cannot contain the url link to twitter", function() {
      var content = "Hello! This is my twitter. I am supposed to twitter until my tweet t.co/user/hello yea buddy"
      var tweet = new Tweet("rojo", content);
      tweet.sanitizeTweet();
      expect(tweet.content).not.toContain("t.co/user/hello");
    });

    it("will convert string username to @username", function() {
      var content = "Hello! This is my twitter. I am supposed to twitter until my tweet t.co/user/hello yea buddy"
      var tweet = new Tweet("rojo", content);
      tweet.sanitizeTweet();
      expect(tweet.username).toEqual("@rojo");
    });
  });

  describe("isValid method", function() {
    it("will return true if the tweets content matches requirements", function() {
      var tweet = new Tweet("rojo", "This is my tweeet");
      expect(tweet.isValid()).toEqual(true);
    });

    it("will return false if the tweets content does not match requirements", function() {
      var content = "Hello! This is my twitter. I am supposed to twitter until my tweet t.co/user/hello I like turtles"
      var tweet = new Tweet("rojo", content);
      expect(tweet.isValid()).toEqual(false);
    });
  });

  describe("error messages", function() {
    it("will not return empty if tweet is invalid", function() {
      var content = "Hello! This is my twitter. I am supposed to twitter until my tweet t.co/user/hello I like turtles"
      var tweet = new Tweet("rojo", content);
      tweet.isValid();
      expect(tweet.errorMessages).not.toEqual([]);
    });
  });
});