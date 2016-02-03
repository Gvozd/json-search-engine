import {expect} from 'chai';
import traverse from '../../src/traverse';
import value from '../../src/filters/value';

describe('filters/any', function () {
  'use strict';
  it('number value', function () {
    expect(traverse([123, 456, '123'], value(123)))
      .deep.equal([
      123
    ]);
  });
  it('string value', function () {
    expect(traverse([123, 456, '123'], value('123')))
      .deep.equal([
      '123'
    ]);
  });
});
