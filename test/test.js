
var main = require("../index.js");

describe("unit tests for index.js", function() {

    it("testing inputs for inc()", function() {
       main.demo(1,1,1);
       main.demo(0,0,0);
    });

});
