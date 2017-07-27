var expect = require("expect.js");
var proxyquire = require("proxyquire");

var router = require("../../routes/index.js");

describe("routes/index.js", () => {
	it("should have a route for /", (done) => {
		expect(router.stack[0].route.path).to.eql("/");
		done();
	});
	it("should have a route for /contact", (done) => {
		expect(router.stack[1].route.path).to.eql("/contact");
		done();
	});
});
