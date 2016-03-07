import {expect} from 'chai';
import traverse from '../../src/traverse';
import root from '../../src/filters/root';
import directChildren from '../../src/descendant/direct-children';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe('descendant/direct-children', function () {
  'use strict';
  it('array', function () {
    var arrayParent = type('array');
    expect(traverse(['foo', 123, ['bar', 456]], ...directChildren(root(), type('string'))))
      .deep.equal([
      'foo'
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], ...directChildren(root(), type('number'))))
      .deep.equal([
      123
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], ...directChildren(root(), any())))
      .deep.equal([
      'foo',
      123,
      ['bar', 456]
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], ...directChildren(arrayParent, type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], ...directChildren(arrayParent, any())))
      .deep.equal([
      'foo',
      123,
      ['bar', 456],
      'bar',
      456
    ]);
  });
});
