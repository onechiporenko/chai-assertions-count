var chai = require('chai');
var expect = chai.expect;
var Assertion = chai.Assertion;

describe('Assertion', function () {
  it('one', function () {
    Assertion['expectAssertions'](1);
    expect(1).to.be.equal(1);
  });

  it('two', function () {
    Assertion['expectAssertions'](2);
    expect(1).to.be.equal(1);
    expect('a').to.be.equal('a');
  });

  it('one expect with two assertions', function () {
    Assertion['expectAssertions'](2);
    expect([]).to.have.property('length', 0);
  });
});
