# Chai Assertions Count

> Plugin for ChaiJS allows checking how many assertions or expects were run per each test.

## Why do we need to check it?

Let's look at the test:

```js
import InstanceGenerator from '../lib/instances-generator';

describe('suite #1', () => {
  it('test #1', () => {
    class S1T1A {
      /* Other props and methods are skipped */
      /**
       * I'm called after any instance of S1T1A is created
       */
      afterCreate(...args) {
        // I need to check `args` here
        // expect(args)... 
      }
    }
    InstanceGenerator.create(S1T1A, 3); // create 3 instances of S1T1A
  });
});
```

Test looks pretty dummy, but its main idea that it's not possible to figure out was `afterCreate` called or not without dummy flag. It must be initialized on the top of the test. Then it must be toggle inside `afterCreate` and another `expect` must be added at the end of the test.

Tests becomes less readable.

Better way is to check how many `expect` were done.

## Install

```shell
npm i -D chai-assertions-count
```

or

```shell
yarn add -D chai-assertions-count
```

## Plugin

Use this plugin as you would all other Chai plugins.

```js
const chai = require('chai');
const chaiAssertionsCount = require('chai-assertions-count');

chai.use(chaiAssertionsCount);
```

## Usage

Usage example with [mochajs](https://mochajs.org/).

Create a file called `mocha-hooks.mjs` and add it to your tests command:

```shell
mocha -r "./mocha-hooks.mjs" "tests/**/*.js"
```

Content `mocha-hooks.mjs` may be next:

```js
import chai from 'chai';
import chaiAssertionsCount from 'chai-assertions-count';

chai.use(chaiAssertionsCount);

export const mochaHooks = {
  beforeEach() {
    chai.Assertion.resetAssertsCheck();
  },
  afterEach() {
    // you don't need all of them
    chai.Assertion.checkAssertionsCount();
    chai.Assertion.checkExpectsCount();
  }
};
```

Method `resetAssertsCheck` just drops internal counters and **must** be used before each test.

Method `checkExpectsCount` calculated how many times `chai.expect` was called. Use it in case when your tests use [Expect](https://www.chaijs.com/guide/styles/#expect) style.

Method `checkAssertionsCount` calculated how many assertions were done. Main difference between this method and previous one is that single `expect` may do more than one `assertion`. Example below illustrates this:

```js
import chai from 'chai';

describe('suite #2', () => {
  it('test #1', () => {
    chai.Assertion.expectAssertions(3);
    chai.Assertion.expectExpects(2);
    
    expect(1).to.be.equal(1);
    expect([]).to.have.property('length', 0);
  });
});
```

Here are **two** expects and we "expect" that two of them will be executed. In the same time there are **three** assertions "under the hood". First `expect` has a single assertion. However, second `expect` has two of them. First one checks that property `length` exists and another one checks its value. So, be aware with `expectAssertions` counter.

Method `expectExpects` can cover most cases, so `expectAssertions` won't be used in 99.9%.