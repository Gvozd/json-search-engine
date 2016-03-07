import {expect} from 'chai';
import traverse from '../../src/traverse';
import directChildren from '../../src/descendant/direct-children';
import root from '../../src/filters/root';
import type from '../../src/filters/type';

describe('filters/type', function () {
  'use strict';
  it('array', function () {
    expect(traverse({a: [], b: [1, 2], c: {}}, ...directChildren(root(), type('array'))))
      .deep.equal([
      [],
      [1, 2]
    ]);
  });
  it('null', function () {
    expect(traverse({a: null, b: [1, 2], c: {}}, ...directChildren(root(), type('null'))))
      .deep.equal([
      null
    ]);
  });
  it('undefined', function () {
    expect(traverse({a: undefined}, ...directChildren(root(), type('undefined'))))
      .deep.equal([
      undefined
    ]);
  });
  it('object', function () {
    expect(traverse({a: {b: 123}}, ...directChildren(root(), type('object'))))
      .deep.equal([
      {b: 123}
    ]);
  });
  it('boolean', function () {
    expect(traverse({a: true, b: false}, ...directChildren(root(), type('boolean'))))
      .deep.equal([
      true,
      false
    ]);
  });
  it('number', function () {
    expect(traverse({a: 123}, ...directChildren(root(), type('number'))))
      .deep.equal([
      123
    ]);
  });
  it('string', function () {
    expect(traverse({a: 'foo'}, ...directChildren(root(), type('string'))))
      .deep.equal([
      'foo'
    ]);
  });
  it('function', function () {
    var func = function func() {
    };
    expect(traverse({a: func}, ...directChildren(root(), type('function'))))
      .deep.equal([
      func
    ]);
  });
});
