import { use, Assertion } from 'chai';
import chaiAssertionsCount from './src/index';

use(chaiAssertionsCount);

export const mochaHooks = {
  beforeEach() {
    Assertion['resetAssertsCheck']();
  },
  afterEach() {
    Assertion['checkAssertionsCount']();
    Assertion['checkExpectsCount']();
  },
};
