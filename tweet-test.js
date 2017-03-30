const assert = require("assert");

describe('Tweet', function() {
  describe("Creation with no parameters", function() {
    it("should create a Tweet with sensible default content", function() {
      let tweet = new Tweet();
      assert.ok(tweet.content, "Content should have a default string");
    });

    it("should create a Tweet with sensible default username", function() {
      let tweet = new Tweet();
      assert.ok(tweet.username, "Username should have a default string");
    });

    it("should create a Tweet with an empty tag list", function() {
      let tweet = new Tweet();
      assert.equal(0, tweet.tags.length, "Tag count should initially be 0");
    });
  })

  describe("Creation with invalid parameters", function() {
    it("should throw an error when we send in a long string of a tweet", function() {
      // String#repeat is very handy, recalls String#* from Ruby
      let veryLongString = "thisIsVeryLongContentThatShouldNotBeAllowedInATweet".repeat(3);
      assert.throws(() => {
        new Tweet(veryLongString);
      }, /140 characters/, "Tweets should be capped at 140 characters");
    });
  });

  describe("We should avoid lawsuits with Twitter", function() {
    // String#includes is new to ES6!
    it("should replace all occurrences of Twitter with 'tweety'", function() {
      let t = new Tweet("I hope to not get sued by Twitter");
      assert.ok(!t.content.includes('Twitter'), "Should not RegEx match Twitter");
    });

    it("should replace all occurrences of t.co with 'tweety'", function() {
      let t = new Tweet("I hope to not get sued by Twitter at http://t.co/123455");
      assert.ok(!t.content.includes('t.co'), "Should not RegEx match Twitter");
    });
  });

  describe("Usernames conventions are honored", function() {
    it("prefixes usernames with '@' character", function() {
      let un =  "Byron_tha_Poodle"
      let t = new Tweet(undefined, un);
      assert.equal(t.username, `@${un}`); // This is a template string, one of the best features of ES6!
    });
  });

  describe("Tagging takes 1..n tags", function() {
    it("adds varying number of tags", function() {
      let tagSet = ["foo", "bar", "bat", "boom", "bah"]
      let t = new Tweet;
      t.addTags(...tagSet.slice(0, 3)); // '...' is the spread operator, a feature of ES6
      t.addTags(...tagSet.slice(3));
      assert.deepStrictEqual(tagSet, t.tags, "Tags can be passed in without regard to count");
    });
  });
});
