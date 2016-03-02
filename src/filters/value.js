var uniqueCounter = 0;
export default function value(val) {
  'use strict';
  uniqueCounter++;
  return {
    childFilterName: 'type:' + uniqueCounter + ':' + JSON.stringify(val),
    childState: 'type:' + uniqueCounter + ':' + JSON.stringify(val),
    childFilterFunc: node => val === node
  };
};
