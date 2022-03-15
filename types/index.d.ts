/// <reference types="chai" /
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

declare function chaiAssertionsCount (chai: any, utils: any): void;
export = chaiAssertionsCount;
