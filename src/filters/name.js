export default function name(key) {
  'use strict';
  key = String(key);
  return {
    childState: 'name:' + key,
    childFilterFunc: (node, nodeKey) => key === nodeKey
  };
};
