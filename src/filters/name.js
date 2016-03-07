export default function name(key) {
  'use strict';
  key = String(key);
  return [
    {
      ['name:' + key]: {
        checker: checkerName,
        checkerArgs: key,
        expectedParentStates: ['']
      }
    },
    'name:' + key
  ];
};

function checkerName(node, key) {
  'use strict';
  return this.checkerArgs === key;
}
