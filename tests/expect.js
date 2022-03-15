var chai = require('chai');
var expect = chai.expect;
var Assertion = chai.Assertion;

describe('Expect', function () {
  it('one call', function () {
    Assertion.expectExpects(1);
    expect(1).to.be.equal(1);
  });

  it('two calls', function () {
    Assertion.expectExpects(2);
    expect(1).to.be.equal(1);
    expect('a').to.be.equal('a');
  });

  it('calls in the loop', function () {
    Assertion.expectExpects(5);
    var c = 0;
    for (var i = 0; i < 5; i++) {
      expect(i).to.be.equal(c);
      c++;
    }
  });
});
