import {expect} from 'chai';
import traverse from '../../src/traverse';
import unionOr from '../../src/union/or';
import any from '../../src/filters/any';
import type from '../../src/filters/type';
import name from '../../src/filters/name';

describe.skip('union/or', function () {
  'use strict';
  describe('0 filters', function () {
    it('no args', function () {
      expect(traverse(['foo', 123], unionOr()))
        .deep.equal([]);
    });
    it('not-filter args', function () {
      expect(traverse(['foo', 123], unionOr('foo', 123)))
        .deep.equal([]);
    });
  });
  it('1 filter', function () {
    expect(traverse(['foo', 123], unionOr(any())))
      .deep.equal([['foo', 123], 'foo', 123]);
    expect(traverse(['foo', 123], unionOr(type('string'))))
      .deep.equal(['foo']);
  });
  it('2 filters', function () {
    expect(traverse(['foo', 123], unionOr(any(), type('string'))))
      .deep.equal([['foo', 123], 'foo', 123]);
    expect(traverse(['foo', 123], unionOr(type('string'), type('string'))))
      .deep.equal(['foo']);
    expect(traverse(['foo', 123], unionOr(type('string'), name('1'))))
      .deep.equal(['foo', 123]);
  });
});
