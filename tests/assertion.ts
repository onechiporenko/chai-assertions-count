import { expect, Assertion } from 'chai';

describe('Assertion', () => {
  it('one', () => {
    Assertion['expectAssertions'](1);
    expect(1).to.be.equal(1);
  });

  it('two', () => {
    Assertion['expectAssertions'](2);
    expect(1).to.be.equal(1);
    expect('a').to.be.equal('a');
  });

  it('one expect with two assertions', () => {
    Assertion['expectAssertions'](2);
    expect([]).to.have.property('length', 0);
  });
});
