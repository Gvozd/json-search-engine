export default function any() {
  'use strict';
  return [
    {
      'any': {
        checker: checkerAny,
        expectedParentStates: ['']
      }
    },
    'any'
  ];
}
function checkerAny() {
  'use strict';
  return true;
}
