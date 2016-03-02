import {checkerFuncKey} from './const';
export default function traverse(object, table, needleState) {
  'use strict';
  var needle = [],
    rootStates = []
    ;
  check(['.', '..'], table, rootStates, object, undefined, needleState, needle);
  subTraverse(object, rootStates, table, needleState, needle);
  return needle;
};

function subTraverse(object, parentStates, table, needleState, needle) {
  'use strict';
  if(!object || 'object' !== typeof object) {
    return;
  }
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      let states = [],
        node = object[key];
      check(parentStates, table, states, node, key, needleState, needle);
      subTraverse(node, states, table, needleState, needle);
    }
  }
}

function check(parentStates, table, states, node, key, needleState, needle) {
  'use strict';
  /*eslint-disable guard-for-in */
  for(let i = 0, length = table.length; i < length; i++) {
    let subTable = table[i],
      checker = subTable[checkerFuncKey]
    ;
    if(checker(node, key)) {
      for(var parentState in subTable) {
        if(parentStates.indexOf(parentState) !== -1) {
          states.push(parentState + subTable[parentState]);
        }
      }
    }
  }
  /*eslint-enable */
  for(let i = 0, length = parentStates.length; i < length; i++) {
    let parentState2 = parentStates[i];
    if(/\.\.$/.test(parentState2)) {
      states.push(parentState2);
    }
  }
  if(states.indexOf(needleState) !== -1) {
    needle.push(node);
  }
}
