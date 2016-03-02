import {expect} from 'chai';
import traverse from '../src/traverse';
import root from '../src/descendant/root';
import anyLevel from '../src/descendant/any-level';
import any from '../src/filters/any';

describe('traverse', function () {
  'use strict';
  let anyFilter = anyLevel(any()),
    object;
  describe('object', function () {
    beforeEach(function () {
      object = {
        b: 'foo',
        a: 'bar',
        c: {
          d: 'quux'
        }
      };
    });
    it('root element', function () {
      expect(traverse(object, ...root()))
        .deep.equal([object]);
    });
    it('any element', function () {
      expect(traverse(object, ...anyLevel(any())))
        .deep.equal([object, 'foo', 'bar', object.c, 'quux']);
    });
    it('direct order keys', function () {
      expect(traverse({a: 1, b: 2}, ...anyFilter))
        .deep.equal([{a: 1, b: 2}, 1, 2]);
    });
    it('reverse order keys', function () {
      expect(traverse({b: 2, a: 1}, ...anyFilter))
        .deep.equal([{a: 1, b: 2}, 2, 1]);
    });
    it('with sub-objects', function () {
      expect(traverse({a: 1, b: {c: 2}, d: 3}, ...anyFilter))
        .deep.equal([{a: 1, b: {c: 2}, d: 3}, 1, {c: 2}, 2, 3]);
    });
  });

  describe('array', function () {
    beforeEach(function () {
      object = [
        1,
        2,
        [
          3
        ]
      ];
    });

    it('root element', function () {
      expect(traverse(object, ...root()))
        .deep.equal([object]);
    });
    it('any element', function () {
      expect(traverse(object, ...anyLevel(any())))
        .deep.equal([object, 1, 2, [3], 3]);
    });
    it('plain', function () {
      expect(traverse([1, 2, 3], ...anyFilter))
        .deep.equal([[1, 2, 3], 1, 2, 3]);
    });
    //it('deeper', function () {
    //  var notArrayFilter = anyLevel((el)=>({ok: !Array.isArray(el)}));
    //  expect(traverse([1, 2, [3, [4, 5], 6], 7], notArrayFilter))
    //    .deep.equal([1, 2, 3, 4, 5, 6, 7]);
    //});
  });
});
