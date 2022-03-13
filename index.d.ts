/// <reference types="chai" />
// Merge namespace with global chai
declare global {
  namespace Chai {
    interface AssertionStatic {
      resetAssertsCheck(): void;
      expectAssertions(assertionsCount: number): void;
      expectExpects(expectsCount: number): void;
      checkAssertionsCount(): void;
      checkExpectsCount(): void;
    }
  }
}

declare const chaiAssertionsCount: Chai.ChaiPlugin;
export = chaiAssertionsCount;
