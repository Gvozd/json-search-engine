export default function descendants([parentTable, parentNeedleState], [childTable, childNeedleState]) {
  'use strict';
  const appendToParent = state => parentNeedleState + '..' + state;
  for (let type in childTable) {// eslint-disable-line guard-for-in
    parentTable[type] = parentTable[type] || {
        checker: childTable[type].checker,
        expectedParentStates: []
      };
    parentTable[type].expectedParentStates =
      parentTable[type].expectedParentStates.concat(
        childTable[type].expectedParentStates.map(appendToParent)
      );
  }
  return [
    parentTable,
    parentNeedleState + '..' + childNeedleState
  ];
};
