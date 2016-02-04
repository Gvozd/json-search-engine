export default function anyLevel(filter) {
  'use strict';
  return function anyLevelFilter(...args) {
    return {
      ok: filter(...args).ok,
      next: anyLevelFilter
    };
  };
};
