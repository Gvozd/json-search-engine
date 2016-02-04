export default function name(key) {
  'use strict';
  key = String(key);
  return (node, nodeKey) => ({ok: key === nodeKey});
};
