export default function type(typeName) {
  'use strict';
  switch (typeName) {
    case 'array':
      return node => ({ok: Array.isArray(node)});
    case 'null':
      return node => ({ok: null === node});
    default:
      return node => ({ok: typeName === typeof node});
  }
};
