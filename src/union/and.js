export default function unionAnd(...filters) {
  'use strict';
  filters = filters
    .filter(func => 'function' === typeof func);
  if (filters.length === 0) {
    return () => ({ok: false});
  }
  if (filters.length === 1) {
    return filters[0];
  }
  return function anyLevelFilter(...args) {
    var result = filters
      .map(func => func(...args));
    return {
      ok: result.every(({ok}) => ok),
      next: unionAnd(...result.map(({next})=>next))
    };
  };
};
