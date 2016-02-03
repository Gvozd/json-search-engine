import {expect} from 'chai';
import traverse from '../../src/traverse';
import name from '../../src/filters/name';

describe('filters/name', function () {
  'use strict';
  it('object key', function () {
    expect(traverse({a: 123, b: 456}, name('a')))
      .deep.equal([
      123
    ]);
  });
});
