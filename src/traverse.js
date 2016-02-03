export default function traverse(object, filter) {
  'use strict';
  var path = [{node: object, key: ''}],
    result = []
    ;
  while (path.length) {
    let curElement = path.pop(),
      curNode = curElement.node,
      curKey = curElement.key
      ;
    if (filter(curNode, curKey)) {
      result.push(curNode);
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
        key: key
      });
    }
  }
  return result;
};
