import {checkerFuncKey} from '../const';
export default function root() {
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
