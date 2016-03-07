import {expect} from 'chai';
import traverse from '../../src/traverse';
import descendants from '../../src/descendant/descendants';
import root from '../../src/filters/root';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe('descendant/descendants', function () {
  'use strict';
  it('array', function () {
    var arrayParent = type('array');
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], ...descendants(root(), type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], ...descendants(root(), any())))
      .deep.equal([
      'foo',
      123,
      {a: 'bar', b: 456},
      'bar',
      456
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], ...descendants(arrayParent, type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, {a: 'bar', b: 456}], ...descendants(arrayParent, any())))
      .deep.equal([
      'foo',
      123,
      {a: 'bar', b: 456},
      'bar',
      456
    ]);
  });
});
