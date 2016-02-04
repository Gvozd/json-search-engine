import unionOr from '../union/or';
import anyLevel from './any-level';
export default function descendants(parentFilter, childFilter) {
  'use strict';
  if ('function' !== typeof parentFilter || 'function' !== typeof childFilter) {
    return null;
  }
  childFilter = anyLevel(childFilter);
  return function descendantsFilter(...args) {
    var {ok, next} = parentFilter(...args);
    return {
      ok: false,
      next: unionOr(descendants(next, childFilter), ok && childFilter)
    };
  };
};
