import {expect} from 'chai';
import traverse from '../src/traverse';
import root from '../src/descendant/root';
import anyLevel from '../src/descendant/any-level';
import any from '../src/filters/any';
import {checkerFuncKey} from '../src/const';

describe('traverse', function () {
  'use strict';
  let object;
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
  });
});
