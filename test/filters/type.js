import {expect} from 'chai';
import traverse from '../../src/traverse';
import type from '../../src/filters/type';

describe('type', function () {
  'use strict';
  it('array', function () {
    expect(traverse({a: [], b: [1, 2], c: {}}, type('array')))
      .deep.equal([
      [],
      [1, 2]
    ]);
  });
  it('null', function () {
    expect(traverse({a: null, b: [1, 2], c: {}}, type('null')))
      .deep.equal([
      null
    ]);
  });
  it('undefined', function () {
    expect(traverse({a: undefined}, type('undefined')))
      .deep.equal([
      undefined
    ]);
  });
  it('object', function () {
    expect(traverse({a: {}}, type('object')))
      .deep.equal([
      {a: {}},
      {}
    ]);
  });
  it('boolean', function () {
    expect(traverse({a: true, b: false}, type('boolean')))
      .deep.equal([
      true,
      false
    ]);
  });
  it('number', function () {
    expect(traverse({a: 123}, type('number')))
      .deep.equal([
      123
    ]);
  });
  it('string', function () {
    expect(traverse({a: 'foo'}, type('string')))
      .deep.equal([
      'foo'
    ]);
  });
  it('function', function () {
    var func = function func() {
    };
    expect(traverse({a: func}, type('function')))
      .deep.equal([
      func
    ]);
  });
});
