export default function name(key) {
  'use strict';
  key = String(key);
  return [
    {
      ['name:' + key]: {
        checker: (node, nodeKey) => key === nodeKey,
        expectedParentStates: ['']
      }
    },
    'name:' + key
  ];
};
