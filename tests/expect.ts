import { expect, Assertion } from 'chai';

describe('Expect', () => {
  it('one call', () => {
    Assertion['expectExpects'](1);
    expect(1).to.be.equal(1);
  });

  it('two calls', () => {
    Assertion['expectExpects'](2);
    expect(1).to.be.equal(1);
    expect('a').to.be.equal('a');
  });

  it('calls in the loop', () => {
    Assertion['expectExpects'](5);
    let c = 0;
    for (let i = 0; i < 5; i++) {
      expect(i).to.be.equal(c);
      c++;
    }
  });
});
