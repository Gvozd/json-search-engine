export default function root() {
  'use strict';
  return [
    {
      'root': {
        checker: checkerRoot,
        expectedParentStates: ['']
      }
    },
    'root'
  ];
}
function checkerRoot(node, key) {
  'use strict';
  return key === undefined;
}