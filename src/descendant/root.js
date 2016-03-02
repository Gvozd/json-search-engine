import {checkerFuncKey} from '../const';
export default function () {
  'use strict';
  return [
    [
      {
        [checkerFuncKey]: (node, key) => key === undefined,
        '.': 'root'
      }
    ],
    '.root'
  ];
}
