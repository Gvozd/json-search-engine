import {expect} from 'chai';
import traverse from '../../src/traverse';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';

describe('filters/any', function () {
  'use strict';
  it('array', function () {
    var func = function () {
    };
    expect(traverse(['foo', 123, NaN, undefined, null, {}, func], anyLevel(any())))
      .deep.equal([
      ['foo', 123, NaN, undefined, null, {}, func],
      'foo', 123, NaN, undefined, null, {}, func
    ]);
  });
});
