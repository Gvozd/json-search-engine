export default function name(key) {
  'use strict';
  key = String(key);
  return {
    childFilterName: 'name:' + key,
    childState: 'name:' + key,
    childFilterFunc: (node, nodeKey) => key === nodeKey
  };
};
