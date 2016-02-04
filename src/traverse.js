export default function traverse(object, mainFilter) {
  'use strict';
  var path = [{node: object, key: '', next: mainFilter}],
    result = []
    ;
  while (path.length) {
    let curElement = path.pop(),
      {node: curNode, key: curKey, next: curFilter} = curElement,
      {ok, next} = curFilter(curNode, curKey)
      ;
    if (ok) {
      result.push(curNode);
    }
    if ('function' !== typeof next) {
      continue;
    }
    if (!curNode || 'object' !== typeof curNode) {
      continue;
    }
    let keys = Object.keys(curNode)
      .sort((a, b) => a.localeCompare(b));
    for (let i = keys.length - 1; i >= 0; i--) {
      let key = keys[i];
      path.push({
        node: curNode[key],
        key: key,
        next: next
      });
    }
  }
  return result;
};
