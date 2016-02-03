import {expect} from 'chai';
import traverse from '../src/traverse';

describe('traverse', function () {
  'use strict';
  describe('array', function () {
    it('plain', function () {
      expect(traverse([1, 2, 3], ()=>true))
        .deep.equal([[1, 2, 3], 1, 2, 3]);
    });
    it('deepter', function () {
      expect(traverse([1, 2, [3, [4, 5], 6], 7], el=>!Array.isArray(el)))
        .deep.equal([1, 2, 3, 4, 5, 6, 7]);
    });
  });
  describe('object', function () {
    it('direct order keys', function () {
      expect(traverse({a: 1, b: 2}, ()=>true))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('reverse order keys', function () {
      expect(traverse({b: 2, a: 1}, ()=>true))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('with sub-objects', function () {
      expect(traverse({a: 1, b: {c: 2}, d: 3}, ()=>true))
        .deep.equal([{a: 1, b: {c: 2}, d: 3}, 1, {c: 2}, 2, 3]);
    });
  });
});
