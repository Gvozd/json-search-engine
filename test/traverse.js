import {expect} from 'chai';
import traverse from '../src/traverse';

describe('traverse', function () {
  'use strict';
  it('array', function () {
    expect(traverse([1, 2, 3], ()=>true))
      .deep.equal([[1, 2, 3], 1, 2, 3]);
  });
  describe('object', function () {
    it('direct keys', function () {
      expect(traverse({a: 1, b: 2}, ()=>true))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('reverse keys', function () {
      expect(traverse({b: 2, a: 1}, ()=>true))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('with sub-objects', function () {
      expect(traverse({a: 1, b: {c: 2}, d:3}, ()=>true))
        .deep.equal([{"a": 1, "b": {"c": 2}, d:3}, 1, {"c": 2}, 2, 3]);
    });
  });
});
