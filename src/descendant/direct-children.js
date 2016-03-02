import {checkerFuncKey} from '../const';
export default function directChildren([parentTable, needleState], {childFilterName, childState, childFilterFunc}) {
  'use strict';
  parentTable[childFilterName] = parentTable[childFilterName] ||
    {
      [checkerFuncKey]: childFilterFunc
    };
  parentTable[childFilterName][needleState + '.'] = childState;
  return [
    parentTable,
    needleState + '.' + childState
  ];
};
