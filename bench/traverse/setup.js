export function uniqueObjects_uniqueKeys(count) {
  'use strict';
  var objs = [];
  for(var i = 0; i < count; i++) {
    objs.push([_generate(2, 2), cb]);
  }
  return objs;
  function cb() {

  }
}

function _generate(width, level) {
  'use strict';
  var obj = {};
  var base = Math.random().toString(16).slice(0,5);
  for(var i = 0; i < width; i++) {
    obj['qwe_' + base + '_'  + i] = level > 1 ?
      _generate(width, level - 1) :
    'asd_' + base + '_' + i;
  }
  return obj;
}