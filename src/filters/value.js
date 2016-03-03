var uniqueCounter = 0;
export default function value(val) {
  'use strict';
  uniqueCounter++;
  return {
    childState: 'type:' + uniqueCounter + ':' + JSON.stringify(val),
    childFilterFunc: node => val === node
  };
};
