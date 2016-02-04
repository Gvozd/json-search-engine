import {expect} from 'chai';
import traverse from '../../src/traverse';
import anyLevel from '../../src/descendant/any-level';
import value from '../../src/filters/value';

describe('filters/value', function () {
  'use strict';
  it('number value', function () {
    expect(traverse([123, 456, '123'], anyLevel(value(123))))
      .deep.equal([
      123
    ]);
  });
  it('string value', function () {
    expect(traverse([123, 456, '123'], anyLevel(value('123'))))
      .deep.equal([
      '123'
    ]);
  });
});
