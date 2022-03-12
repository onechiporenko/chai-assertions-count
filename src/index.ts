const plugin: Chai.ChaiPlugin = (_chai, utils) => {
  let assertionsCount = 0;
  let expectsCount = 0;
  let assertsCount = 0;
  let expectedAssertionsCount = null;
  let expectedExpectsCount = null;
  let expectedAssertsCount = null;
  let checkAssertions = false;
  let checkAsserts = false;
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

  utils.overwriteMethod(_chai, 'assert', function (_super) {
    return function () {
      assertsCount++;
      return _super.apply(this, arguments); // eslint-disable-line prefer-rest-params
    };
  });
  utils.addMethod(_chai.Assertion, 'resetAssertionsCheck', function () {
    assertionsCount = 0;
    expectsCount = 0;
    assertsCount = 0;
    expectedAssertionsCount = null;
    expectedAssertsCount = null;
    expectedExpectsCount = null;
    checkAssertions = false;
    checkAsserts = false;
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

  utils.addMethod(_chai.Assertion, 'expectAsserts', function (assertsCount) {
    expectedAssertsCount = assertsCount;
    checkAsserts = true;
  });

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

  utils.addMethod(_chai.Assertion, 'checkAssertsCount', function () {
    if (checkAsserts) {
      new _chai.Assertion(
        assertsCount,
        'Actual asserts count is not equal to expected'
      ).to.be.equal(expectedAssertsCount);
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

export default plugin;
