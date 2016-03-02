import {expect} from 'chai';
import traverse from '../../src/traverse';
import unionAnd from '../../src/union/and';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';
import type from '../../src/filters/type';
import name from '../../src/filters/name';

describe.skip('union/and', function () {
  'use strict';
  describe('0 filters', function () {
    it('no args', function () {
      expect(traverse(['foo', 123], unionAnd()))
        .deep.equal([]);
    });
    it('not-filter args', function () {
      expect(traverse(['foo', 123], unionAnd('foo', 123)))
        .deep.equal([]);
    });
  });
  it('1 filter', function () {
    expect(traverse(['foo', 123], unionAnd(anyLevel(any()))))
      .deep.equal([['foo', 123], 'foo', 123]);
    expect(traverse(['foo', 123], unionAnd(anyLevel(type('string')))))
      .deep.equal(['foo']);
  });
  it('2 filters', function () {
    expect(traverse(['foo', 123], unionAnd(anyLevel(any()), anyLevel(type('string')))))
      .deep.equal(['foo']);
    expect(traverse(['foo', 123], unionAnd(anyLevel(type('string')), anyLevel(type('string')))))
      .deep.equal(['foo']);
    expect(traverse(['foo', 123], unionAnd(anyLevel(any()), anyLevel(name('0')))))
      .deep.equal(['foo']);
  });
});
