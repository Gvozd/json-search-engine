import {expect} from 'chai';
import traverse from '../../src/traverse';
import unionOr from '../../src/union/or';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';
import type from '../../src/filters/type';
import name from '../../src/filters/name';

describe('union/or', function () {
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
    expect(traverse(['foo', 123], unionOr(anyLevel(any()))))
      .deep.equal([['foo', 123], 'foo', 123]);
    expect(traverse(['foo', 123], unionOr(anyLevel(type('string')))))
      .deep.equal(['foo']);
  });
  it('2 filters', function () {
    expect(traverse(['foo', 123], unionOr(anyLevel(any()), anyLevel(type('string')))))
      .deep.equal([['foo', 123], 'foo', 123]);
    expect(traverse(['foo', 123], unionOr(anyLevel(type('string')), anyLevel(type('string')))))
      .deep.equal(['foo']);
    expect(traverse(['foo', 123], unionOr(anyLevel(type('string')), anyLevel(name('1')))))
      .deep.equal(['foo', 123]);
  });
});
