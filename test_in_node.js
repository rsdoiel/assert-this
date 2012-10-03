//
// Test harness.js running under NodeJS
//
// @author: R. S. Doiel, <rsdoiel@gmail.com>
// copyright (c) 2012 all rights reserved
//
// Released under the Simplified BSD License.
// See: http://opensource.org/licenses/bsd-license.php
//

var path = require("path");
	assert = require("assert");
	harness = require("./harness"),
	called_callbacked = false;

harness.push({callback: function () {
	called_callback = true;
	console.log("\t\t calling callback set in push()");
	harness.completed("testing harness.js harness.push()");
}, label: "testing harness.js harness.push()"});

harness.RunIt(path.basename(module.filename), 10, true);
