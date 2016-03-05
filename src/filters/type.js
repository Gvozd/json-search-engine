export default function type(typeName) {
  'use strict';
  let checker;
  switch (typeName) {
    case 'array':
      checker = node => Array.isArray(node);
      break;
    case 'null':
      checker = node => null === node;
      break;
    default:
      checker = node => typeName === typeof node;
      break;
  }
  return [
    {
      ['type:' + typeName]: {
        checker: checker,
        expectedParentStates: ['']
      }
    },
    'type:' + typeName
  ];
}
