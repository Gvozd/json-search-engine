import {expect} from 'chai';
import traverse from '../../src/traverse';
import root from '../../src/descendant/root';

describe('descendant/root', function () {
  'use strict';
  it('object', function () {
    var object = {foo: 'bar'};
    expect(traverse(object, ...root()))
      .deep.equal([object]);
  });
  it('array', function () {
    var object = ['foo', 'bar'];
    expect(traverse(object, ...root()))
      .deep.equal([object]);
  });
});
