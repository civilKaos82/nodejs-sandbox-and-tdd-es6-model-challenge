# Build a NodeJS Sandbox and TDD "drive" an a ES6-model

## Learning Objectives

* Task 6: Construct Node-driven test sandbox in which to run failing tests
* Task 7: Use ES6 to remediate failing unit tests and are introduced to several structures of ES6

## Summary

This challenge will be a bit different than those you've seen previously. Here,
you will be given no skeleton but will find a test script. Your challenge is to
use `node` and `npm` to build up an environment to execute the tests (all will
be shown as "failing"). Thereafter you will have to provide an implementation
which gets the tests to pass. You should use as much ES6 as possible.

While ES5 has a huge install base (presently) you are going to encounter both
in your professional career. Here's your chance to throw off the shackles of
the old and work purely in ES6. **Remember** the goal is *not* to get the tests
passing as quickly as possible: it's to learn how to build Node+NPM apps, to 
practice TDD methodoology, and to explore ES6 so that JavaScript frameworks 
are more easily learned.

### New Technology/Concept

The Unit testing framework we'll use is called [Mocha][]. It's similar to
RSpec, but instead of writing expectations with matchers like `expect()`, we'll
use a simpler matcher library called [assert][] which is built into Node's
_standard library_.

## Releases

### Release 0: Prepare the Directory

Use best practices you have learned today. Be sure to configure your
`.gitignore`.  Install the Mocha package as a local development dependency.
Consult the `yarn add` documentation for how to specify a dependency as
development-only.

### Release 1: Run the Test

Execute [Mocha][mocha] and make sure it sees your tests. You may need to create
sub-directories or move things around. That's fine!

The goal is to have all your failing tests failing loudly and proudly. This
will confirm your environment is correct. Thereafter you can focus on fixing
the tests.

### Release 3: Get Tests Passing!

OK, you've bootstrapped your sandbox now. Implement a `Tweet` class such that
you can get those tests passing. Remember you may need to use `require` to give
the tests what they need to fail in a more meaningful way.

### Stretch Opportunities:

* The command to run Mocha is rather long-winded. You can use `yarn` to store
  long script invocations under an "alias." Check out the documentation for
  `package.json` and see how a "scripts" object might help you. `yarn` is a
  bit like an improved `Gemfile` with `Rakefile` (which defines `rake` tasks)
  powers built-in.
* Add Another class.  Consider adding another class like a User. Could you
  create a new User with 3 Tweets? If a user had an `author_tweet(content)`
  method could you make it create that Tweet instance and stick it in a
  collection of `tweets` belonging to the User? Try TDD driving this new class.
* Explore Mocha. Mocha follows many of the conventions of RSpec. Consider
  refactoring your tests. Do you find yourself instantiating the same variable
  over and over (it is certainly happening in `tweet-test.js`), can you find a
  way to optimize this?
  
  ## Conclusion

This is amazing! In one day you've learned a new language (node) that will help
you learn a new language (ES6) by virtue of tests. You're using your own
brain's output to amp up your brain's power. It's like an endless recursion of
getting smarter with no known base-case for exit :)

[Mocha]: https://mochajs.org
[mocha]: https://mochajs.org
[assert]: https://nodejs.org/api/assert.html
[gitignore]: https://git-scm.com/docs/gitignore
