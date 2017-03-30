# Built a NodeJS sandbox and TDD "drive" an a ES6-model

## Learning Objectives

* Initialize and protect a project's git repository per best practices
* Create an introductory NodeJS application
* Utilize the the npm ecosystem
* Use ES6 to build out a JavaScript implementation that passes tests written in Mocha

## Summary

This challenge will be a bit different than those you've seen previously. Here,
you will be given no skeleton but will find a test script. Your challenge is to
use `node` and `npm` to build up an environment to execute the tests (all will
be shown as "failing"). Thereafter you will have to provide an implementation
which gets the tests to pass. You should use as much ES6 as possible.

While ES5 has a huge install base (presently) you are going to encounter both
in your professional career. Here's your chance to throw off the shackles of
the old and work purely in ES6. **Remember** the goal is *not* to get the tests
passing: it's to learn how to build Node+NPM apps, to practice TDD
methodoology, and to explore ES6 so that JavaScript frameworks are more easily
learned.

### New Technology/Concept

We're going to use NodeJS, a JavaScript runtime built on V8 and its package
ecosystem, `npm`. You can think of these as being analagous to Ruby and
Rubygems.

The Unit testing framework we'll use is called [Mocha][]. It's similar to
RSpec, but instead of writing expectations with matchers like `expect()`, we'll
use a simpler matcher library called [assert][] which is built into Node's
_standard library_.

## Releases

### Pre-release: Validate Node Environment

Ensure that you have `node` and `npm` working. You should be able to execute
`-v` to get the version on both `node` and `npm`.

    ➜  ~ node -v
    v7.7.4
    ➜  ~ npm -v
    4.1.2

If you encounter trouble with this, seek help.

### Release 0: Description

Create a new directory and initialize it for `git` usage.  Install the Mocha
package as a local development dependency. Execute the test framework from the
local binary and validate it works.

Now that you have a package installed, you should also add a [`.gitignore`][gitignore] to
your project. Because node creates _local_ copies of all the packages on which
it depends if you use `git add .` you will add **megabytes** of unnecessary
data.

Make your first commit on this project now.

### Release 1: Add Failing Tests

If you're going to TDD a model, you'll usually write one test at a time. Write
a failing test, make it a passing test, clean up the implementation code,
commit, move on.

In a slight variation, we've provided you all of the tests in this repo in
[./tweet-test.js](./tweet-test.js). Have Mocha run this test suite
(collection). You should have nothing but failing tests. Nowhere to go but up
:).

### Release 2: Optimize Workflow

You're going to run these tests over and over. Is your command line for
executing `tweet-test` pretty gross? If so, look into how you might make `npm
test` execute Mocha for you. In Sinatra / Rails you have `rake` to do this work
for you. In Node-land you're going to need to write this yourself.

### Release 3: Get Tests Passing!

OK, you've bootstrapped your sandbox now. Implement a `Tweet` class such that
you can get those tests passing.

### Stretch Opportunities:

* Add Another class.  Consider adding another class like a User. Could you
  create a new User with 3 Tweets? If a user had an `author_tweet(content)`
  method could you make it create that Tweet instance and stick it in a
  collection of `tweets` belonging to the User? Try TDD driving this new class.
* Explore Mocha. Mocha follows many of the conventions of RSpec. Consider
  refactoring your tests. Do you find yourself instantiating the same variable
  over and over (it is certainly happening in `tweet-test.js`), can you find a
  way to optimize this?

## Conclusion

You've done something very important. You've bootstrapped your development
environment and built a model. With these capabilities you can quite literally
build any app you've built at DBC in NodeJS. Sudoku? A Sinatra-style webserver
that only serves JSON endpoints? It's possible.

[Mocha]: https://mochajs.org
[assert]: https://nodejs.org/api/assert.html
[gitignore]: https://git-scm.com/docs/gitignore
