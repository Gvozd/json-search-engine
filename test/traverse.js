import {expect} from 'chai';
import traverse from '../src/traverse';
import anyLevel from '../src/descendant/any-level';

describe('traverse', function () {
  'use strict';
  var anyFilter = anyLevel(()=>({ok: true}));
  describe('array', function () {
    it('plain', function () {
      expect(traverse([1, 2, 3], anyFilter))
        .deep.equal([[1, 2, 3], 1, 2, 3]);
    });
    it('deeper', function () {
      var notArrayFilter = anyLevel((el)=>({ok: !Array.isArray(el)}));
      expect(traverse([1, 2, [3, [4, 5], 6], 7], notArrayFilter))
        .deep.equal([1, 2, 3, 4, 5, 6, 7]);
    });
  });
  describe('object', function () {
    it('direct order keys', function () {
      expect(traverse({a: 1, b: 2}, anyFilter))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('reverse order keys', function () {
      expect(traverse({b: 2, a: 1}, anyFilter))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('with sub-objects', function () {
      expect(traverse({a: 1, b: {c: 2}, d: 3}, anyFilter))
        .deep.equal([{a: 1, b: {c: 2}, d: 3}, 1, {c: 2}, 2, 3]);
    });
  });
});
