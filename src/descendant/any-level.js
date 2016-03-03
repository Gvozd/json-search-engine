export default function anyLevel({childState, childFilterFunc}) {
  'use strict';
  var parentTable = {
    [childState]: {
      checker: childFilterFunc,
      expectedParentStates: ['..']
    }
  };
  return [
    parentTable,
    '..' + childState
  ];
}
