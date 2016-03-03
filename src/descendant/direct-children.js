export default function directChildren([parentTable, needleState], {childState, childFilterFunc}) {
  'use strict';
  parentTable[childState] = parentTable[childState] ||
    {
      checker: childFilterFunc,
      expectedParentStates: []
    };
  parentTable[childState].expectedParentStates.push(needleState + '.');
  return [
    parentTable,
    needleState + '.' + childState
  ];
};
