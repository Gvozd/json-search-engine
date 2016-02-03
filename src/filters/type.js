export default function type(typeName) {
  'use strict';
  switch(typeName) {
    case 'array':
      return node => Array.isArray(node);
    case 'null':
      return node => null === node;
    default:
      return node => typeName === typeof node;
  }
};

