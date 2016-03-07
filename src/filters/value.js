export default function value(val) {
  'use strict';
  const type = typeof val;
  if (val && 'object' === type ||
    'function' === type ||
    'symbol' === type) {
    throw new Error('tmp deprecated');
  }
  const typeName = String(JSON.stringify(val));
  return [
    {
      [typeName]: {
        checker: checkerValue,
        checkerArgs: val,
        expectedParentStates: ['']
      }
    },
    typeName
  ];
};
function checkerValue(node) {
  'use strict';
  return this.checkerArgs === node;
}