import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

import { and, BooleanExpression, not, or } from '../src';

// import clean from './util/clean';

@suite("Template API")
export class TemplateAPITest {
  @test "Boolean expressions"() {
    let boolExpr: BooleanExpression<number> = and(1, or(2, 3), not(4));
    assert.deepEqual(boolExpr, {
      and: [
        1,
        {or: [2,3]},
        {not: 4}
      ]
    });
  }
}