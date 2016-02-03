export default function name(key) {
  'use strict';
  return (node, nodeKey) => key === nodeKey;
};
