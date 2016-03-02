import {expect} from 'chai';
import traverse from '../../src/traverse';
import descendants from '../../src/descendant/descendants';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe.skip('descendant/descendants', function () {
  'use strict';
  it('array', function () {
    var arrayParent = anyLevel(type('array'));
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], descendants(type('array'), type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], descendants(type('array'), any())))
      .deep.equal([
      'foo',
      123,
      {a: 'bar', b: 456},
      'bar',
      456
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], descendants(arrayParent, type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], descendants(arrayParent, any())))
      .deep.equal([
      'foo',
      123,
      {a: 'bar', b: 456},
      'bar',
      456
    ]);
  });
});
