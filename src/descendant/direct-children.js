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
  //if ('function' !== typeof parentFilter || 'function' !== typeof childFilter) {
  //  return null;
  //}
  //return function directChildrenFilter(...args) {
  //  var {ok, next} = parentFilter(...args);
  //  return {
  //    ok: false,
  //    next: unionOr(directChildren(next, childFilter), ok && childFilter)
  //  };
  //};
};
