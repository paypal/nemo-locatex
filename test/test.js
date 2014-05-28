var NemoLocateX = require("../index");
var returnObj = {
	"driver": true,
	"wd": true
};
describe("nemo-locatex ", function () {
	it("should get set up", function (done) {
		NemoLocateX.setup({}, returnObj, function (err, config, returnObj) {
			if (returnObj.locatex) {
				//console.log("user", returnObj.user);
				done()
			} else if (err) {
				done(err)
			} else {
				done(new Error("Didn't get drivex object back"))
			}
		})
	});
});