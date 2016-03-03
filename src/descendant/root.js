export default function root() {
  'use strict';
  return [
    {
      'root': {
        checker: (node, key) => key === undefined,
        expectedParentStates: ['.']
      }
    },
    '.root'
  ];
}
