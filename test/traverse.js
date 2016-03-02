import {expect} from 'chai';
import traverse from '../src/traverse';
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
      expect(traverse(object, ...getRootTable()))
        .deep.equal([object]);
    });
    it('any element', function () {
      expect(traverse(object, ...getAnyTable()))
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
      expect(traverse(object, ...getRootTable()))
        .deep.equal([object]);
    });
    it('any element', function () {
      expect(traverse(object, ...getAnyTable()))
        .deep.equal([object, 1, 2, [3], 3]);
    });
  });

  function getRootTable() {
    return [
      {
        'root': {
          [checkerFuncKey]: (node, key) => key === undefined,
          '.': 'root'
        }
      },
      '.root'
    ];
  }

  function getAnyTable() {
    return [
      {
        any: {
          [checkerFuncKey]: ()=>true,
          '..': 'any'
        }
      },
      '..any'
    ];
  }
});
