export default function type(typeName) {
  'use strict';
  switch (typeName) {
    case 'array':
      return {
        childFilterName: 'type:' + typeName,
        childState: 'type:' + typeName,
        childFilterFunc: node => Array.isArray(node)
      };
    case 'null':
      return {
        childFilterName: 'type:' + typeName,
        childState: 'type:' + typeName,
        childFilterFunc: node => null === node
      };
    default:
      return {
        childFilterName: 'type:' + typeName,
        childState: 'type:' + typeName,
        childFilterFunc: node => typeName === typeof node
      };
  }
}
