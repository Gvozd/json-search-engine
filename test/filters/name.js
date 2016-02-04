import {expect} from 'chai';
import traverse from '../../src/traverse';
import anyLevel from '../../src/descendant/any-level';
import name from '../../src/filters/name';

describe('filters/name', function () {
  'use strict';
  it('object key', function () {
    expect(traverse({a: 123, b: 456}, anyLevel(name('a'))))
      .deep.equal([
      123
    ]);
  });
  it('number array key', function () {
    expect(traverse([123, 456], anyLevel(name(0))))
      .deep.equal([
      123
    ]);
  });
  it('string array key', function () {
    expect(traverse([123, 456], anyLevel(name('0'))))
      .deep.equal([
      123
    ]);
  });
});
