import {checkerFuncKey} from '../const';
export default function () {
  'use strict';
  return [
    {
      'root': {
        [checkerFuncKey]: (node, key) => key === undefined,
        '.': 'root'
      }
    },
    '.root'
  ];
}
