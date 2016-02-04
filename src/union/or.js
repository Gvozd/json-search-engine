export default function unionOr(...filters) {
  'use strict';
  filters = filters
    .filter(func => 'function' === typeof func);
  if (filters.length === 0) {
    return () => ({ok: false});
  }
  if (filters.length === 1) {
    return filters[0];
  }
  return function unionOrFilter(...args) {
    var result = filters
      .map(func => func(...args));
    return {
      ok: result.some(({ok}) => ok),
      next: unionOr(...result.map(({next})=>next))
    };
  };
};
