const chaiAssertionsCount: Chai.ChaiPlugin = (_chai, utils) => {
  let assertionsCount = 0;
  let expectsCount = 0;
  let expectedAssertionsCount = null;
  let expectedExpectsCount = null;
  let checkAssertions = false;
  let checkExpects = false;

  utils.overwriteMethod(_chai.Assertion.prototype, 'assert', function (_super) {
    return function () {
      assertionsCount++;
      return _super.apply(this, arguments); // eslint-disable-line prefer-rest-params
    };
  });

  utils.overwriteMethod(_chai, 'expect', function (_super) {
    return function () {
      expectsCount++;
      return _super.apply(this, arguments); // eslint-disable-line prefer-rest-params
    };
  });

  utils.addMethod(_chai.Assertion, 'resetAssertsCheck', function () {
    assertionsCount = 0;
    expectsCount = 0;
    expectedAssertionsCount = null;
    expectedExpectsCount = null;
    checkAssertions = false;
    checkExpects = false;
  });

  utils.addMethod(
    _chai.Assertion,
    'expectAssertions',
    function (assertionsCount) {
      expectedAssertionsCount = assertionsCount;
      checkAssertions = true;
    }
  );

  utils.addMethod(_chai.Assertion, 'expectExpects', function (expectsCount) {
    expectedExpectsCount = expectsCount;
    checkExpects = true;
  });

  utils.addMethod(_chai.Assertion, 'checkAssertionsCount', function () {
    if (checkAssertions) {
      new _chai.Assertion(
        assertionsCount,
        'Actual assertions count is not equal to expected'
      ).to.be.equal(expectedAssertionsCount);
    }
  });

  utils.addMethod(_chai.Assertion, 'checkExpectsCount', function () {
    if (checkExpects) {
      new _chai.Assertion(
        expectsCount,
        'Actual expects count is not equal to expected'
      ).to.be.equal(expectedExpectsCount);
    }
  });
};

export default chaiAssertionsCount;
