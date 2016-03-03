export default function type(typeName) {
  'use strict';
  switch (typeName) {
    case 'array':
      return {
        childState: 'type:' + typeName,
        childFilterFunc: node => Array.isArray(node)
      };
    case 'null':
      return {
        childState: 'type:' + typeName,
        childFilterFunc: node => null === node
      };
    default:
      return {
        childState: 'type:' + typeName,
        childFilterFunc: node => typeName === typeof node
      };
  }
}
