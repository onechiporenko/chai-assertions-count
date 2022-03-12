/// <reference types="chai" />
// Merge namespace with global chai
declare global {
  namespace Chai {
    interface AssertionStatic {
      resetAssertionsCheck(): void;
      expectAssertions(assertionsCount: number): void;
      expectAsserts(assertsCount: number): void;
      expectExpects(expectsCount: number): void;
      checkAssertionsCount(): void;
      checkAssertsCount(): void;
      checkExpectsCount(): void;
    }
  }
}

declare const chaiAssertionsCount: Chai.ChaiPlugin;
declare namespace chaiAssertionsCount { }
export = chaiAssertionsCount;