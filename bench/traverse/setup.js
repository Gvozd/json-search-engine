export function uniqueObjectsUniqueKeys(count) {
  'use strict';
  var objs = [];
  for(var i = 0; i < count; i++) {
    objs.push([_generate(2, 2, true), cb]);
  }
  return objs;
  function cb() {

  }
}
export function uniqueObjectsSameKeys(count) {
  'use strict';
  var objs = [];
  for(var i = 0; i < count; i++) {
    objs.push([_generate(2, 2), cb]);
  }
  return objs;
  function cb() {

  }
}
export function oneObject(count) {
  'use strict';
  var objs = [],
    obj = _generate(2, 2);
  for(var i = 0; i < count; i++) {
    objs.push([obj, cb]);
  }
  return objs;
  function cb() {

  }
}

export function uniqueObjectsUniqueKeysBigObject(count) {
  'use strict';
  var objs = [];
  for(var i = 0; i < count; i++) {
    objs.push([_generate(4, 4, true), cb]);
  }
  return objs;
  function cb() {

  }
}

export function uniqueObjectsSameKeysBigObject(count) {
  'use strict';
  var objs = [];
  for(var i = 0; i < count; i++) {
    objs.push([_generate(4, 4), cb]);
  }
  return objs;
  function cb() {

  }
}
export function oneBigObject(count) {
  'use strict';
  var objs = [],
    obj = _generate(4, 4);
  for(var i = 0; i < count; i++) {
    objs.push([obj, cb]);
  }
  return objs;
  function cb() {

  }
}

function _generate(width, level, uniqueKeys) {
  'use strict';
  var obj = {};
  var base = uniqueKeys ? Math.random().toString(16).slice(0,5) : 'zxc';
  for(var i = 0; i < width; i++) {
    obj['qwe_' + base + '_'  + i] = level > 1 ?
      _generate(width, level - 1) :
    'asd_' + base + '_' + i;
  }
  return obj;
}