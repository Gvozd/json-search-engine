import unionOr from '../union/or';
export default function directChildren(parentFilter, childFilter) {
  'use strict';
  if('function' !== typeof parentFilter || 'function' !== typeof childFilter) {
    return null;
  }
  return function directChildrenFilter(...args) {
    var {ok, next} = parentFilter(...args);
    return {
      ok: false,
      next: unionOr(directChildren(next, childFilter), ok && childFilter)
    };
  };
};
