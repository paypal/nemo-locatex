var assert = require('chai').assert;
var Nemo = require('nemo');
var Locatex = require("../index");
var returnObj = {
	"driver": true,
	"wd": true
};
describe("nemo-locatex ", function () {

	it('should setup with nemo', function(done) {
		var nemo = Nemo({
		  "driver": {
		    "browser": "phantomjs"
			},
			'plugins': {
	        'locatex': {
	          'module': 'path:../../index'
	        }
	      }
		}, function (err) {
		  if (err) {
			  throw 'Error during Nemo setup';
		  }
		  assert.isObject(nemo, 'nemo is an object');
		  assert.isDefined(nemo.driver, 'driver is defined');
		  assert.isDefined(nemo.wd, 'wd is defined');
		  assert.isDefined(nemo.locatex, 'locatex is defined');
		  assert.isFunction(nemo.locatex, 'locatex is a function');
		  nemo.driver.quit();
		  done();
		});
	})

	it("should get set up", function (done) {
		var nemo = {};
		Locatex.setup(nemo, function () {
			assert.isObject(nemo, 'nemo is an object');
			assert.isFunction(nemo.locatex, 'locatex is a function');
			done();
		})
	});
});
