export default function anyLevel([table, needleState]) {
  'use strict';
  for (let type in table) {// eslint-disable-line guard-for-in
    table[type].expectedParentStates =
      table[type].expectedParentStates.map(state => '..' + state);
  }
  return [
    table,
    '..' + needleState
  ];
}
