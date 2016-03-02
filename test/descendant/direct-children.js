import {expect} from 'chai';
import traverse from '../../src/traverse';
import directChildren from '../../src/descendant/direct-children';
import anyLevel from '../../src/descendant/any-level';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe.skip('descendant/direct-children', function () {
  'use strict';
  it('array', function () {
    var arrayParent = anyLevel(type('array'));
    expect(traverse(['foo', 123, ['bar', 456]], directChildren(type('array'), type('string'))))
      .deep.equal([
      'foo'
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], directChildren(type('array'), any())))
      .deep.equal([
      'foo',
      123,
      ['bar', 456]
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], directChildren(arrayParent, type('string'))))
      .deep.equal([
      'foo',
      'bar'
    ]);
    expect(traverse(['foo', 123, ['bar', 456]], directChildren(arrayParent, any())))
      .deep.equal([
      'foo',
      123,
      ['bar', 456],
      'bar',
      456
    ]);
  });
});
