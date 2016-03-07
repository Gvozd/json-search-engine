export default function type(typeName) {
  'use strict';
  return [
    {
      ['type:' + typeName]: {
        checker: checkers[typeName],
        expectedParentStates: ['']
      }
    },
    'type:' + typeName
  ];
}
const checkers = (function () {
  'use strict';
  return {
    'array': node => Array.isArray(node),
    'null': node => null === node,
    'undefined': node => 'undefined' === typeof node,
    'object': node => 'object' === typeof node,
    'boolean': node => 'boolean' === typeof node,
    'number': node => 'number' === typeof node,
    'string': node => 'string' === typeof node,
    'symbol': node => 'symbol' === typeof node,
    'function': node => 'function' === typeof node
  };
})();
