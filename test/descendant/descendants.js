import {expect} from 'chai';
import traverse from '../../src/traverse';
import descendants from '../../src/descendant/descendants';
import root from '../../src/descendant/root';
import any from '../../src/filters/any';
import type from '../../src/filters/type';

describe('descendant/descendants', function () {
  'use strict';
  it('array', function () {
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
  });
});
