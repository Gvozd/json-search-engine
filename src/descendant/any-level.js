import {checkerFuncKey} from '../const';
export default function anyLevel({childFilterName, childState, childFilterFunc}) {
  'use strict';
  var parentTable = {
    [childFilterName]: {
      [checkerFuncKey]: childFilterFunc,
      '..': childState
    }
  };
  return [
    parentTable,
    '..' + childState
  ];
}
