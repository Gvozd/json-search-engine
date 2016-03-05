var uniqueCounter = 0;
export default function value(val) {
  'use strict';
  uniqueCounter++;
  let type = 'type:' + uniqueCounter + ':' + JSON.stringify(val);
  return [
    {
      [type]: {
        checker: node => val === node,
        expectedParentStates: ['']
      }
    },
    type
  ];
};
