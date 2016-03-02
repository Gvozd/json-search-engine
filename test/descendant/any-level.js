import {expect} from 'chai';
import traverse from '../../src/traverse';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe('descendant/any-level', function () {
  'use strict';
  it('array', function () {
    expect(traverse(['foo', 123], ...anyLevel(any())))
      .deep.equal([
      ['foo', 123],
      'foo',
      123
    ]);
  });
  it('object', function () {
    expect(traverse({foo: 'bar', 'baz': 123}, ...anyLevel(any())))
      .deep.equal([
      {foo: 'bar', 'baz': 123},
      'bar',
      123
    ]);
  });
  it('simple value', function () {
    expect(traverse('foo', ...anyLevel(any())))
      .deep.equal(['foo']);
    expect(traverse('foo', ...anyLevel(type('string'))))
      .deep.equal(['foo']);
    expect(traverse('foo', ...anyLevel(type('number'))))
      .deep.equal([]);
  });
});
