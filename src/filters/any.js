export default function any() {
  'use strict';
  return [
    {
      'any': {
        checker: () => true,
        expectedParentStates: ['']
      }
    },
    'any'
  ];
}
