var chai = require('chai');
var chaiAssertionsCount = require('./index.js');

chai.use(chaiAssertionsCount);

module.exports = {
  beforeEach: function () {
    chai.Assertion.resetAssertsCheck();
  },
  afterEach: function () {
    chai.Assertion.checkAssertionsCount();
    chai.Assertion.checkExpectsCount();
  },
};
