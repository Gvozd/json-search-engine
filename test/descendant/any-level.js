import {expect} from 'chai';
import traverse from '../../src/traverse';
import anyLevel from '../../src/descendant/any-level';

describe.skip('descendant/any-level', function () {
  'use strict';
  it('array', function () {
    expect(traverse(['foo', 123], anyLevel(()=>({ok: true}))))
      .deep.equal([
      ['foo', 123],
      'foo',
      123
    ]);
  });
});
