export default function traverse(object, filter) {
  'use strict';
  var path = [object],
    result = [],
    curElement,
    keys,
    i;
  while (path.length) {
    curElement = path.pop();
    if (filter(curElement)) {
      result.push(curElement);
    }
    if (!curElement || 'object' !== typeof curElement) {
      continue;
    }
    keys = Object.keys(curElement)
      .sort((a, b) => a.localeCompare(b));
    for (i = keys.length - 1; i >= 0; i--) {
      path.push(curElement[keys[i]]);
    }
  }
  return result;
};
