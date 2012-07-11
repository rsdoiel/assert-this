assert-this
===========

A simple assertion library for testing JavaScript code in the browser.  It is inspired by Node's assert module.

## Using assert-this

Building JavaScript tests to run in the browser requires three files - an HTML page to invoke your 
JavaScript library; your JavaScript tests;  and your library you're testing. 

## Example

In the following example
the JavaScript file that needs tests is named *mylib.js*.  The html wrapper page is called *test_mylib.js*.
The test script is named *test_mylib.js*.

### HTML Wrapper

All the HTML wrapper page needs to do is load *assert-this.js*, your test JavaScript code and your library.

  <!DOCTYPE html>
  <html>
    <head>
      <title>Test mylib.js</title>
    </head>
    <body>
      <h1>Test mylib.js</h1>
      <h2>Loading assert-this</h2>
      <script src="assert-this"></script>
      <h2>Loading test_mylib.js</h2>
      <script src="test_mylib.js"></script>
      <h2>Loading mylib.js</h2>
      <script src="mylib.js"></script>
      <h2>Loading complete</h2>
    </body>
  </html>

This will load your JS and if console.log is available write the output of the tests 
to the JavaScript console (e.g. you'reusing Chrome or Firefox) or append to the page 
if console is not available.

### Your test

This is what *test_mylib.js* would look like. For our demo mylib.js has one function. 
This is an example of testing it.

  // test_mylib.js - This is the test to demostrate assert-this.js usage.
  // This test is assumed to be run from an HTML page in the browser and
  // that assert-this.js has already been loaded as well as the library
  // we'll be testing.
  
  // Here's a simple test for myAdd function from mylib.js
  assert.equal(myAdd(1,1), 2, "One plus one should equal two");

### the demo library

*mylib.js* a demo function to test.

  // mylib.js - This is a demo library to show how assert-this.js
  // might be used.

  // Add two numbers
  var myAdd = function (a, b) {
    return a + b;
  };


