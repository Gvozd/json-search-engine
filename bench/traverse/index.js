export function recursiveForIn(obj, cb) {
  'use strict';
  cb(obj);
  if(!obj || 'object' !== typeof obj) {
    return;
  }
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      recursiveForIn(obj[key], cb);
    }
  }
}

export function recursiveObjectKeys(obj, cb) {
  'use strict';
  cb(obj);
  if(!obj || 'object' !== typeof obj) {
    return;
  }
  var keys = Object.keys(obj);
  for(var i = 0; i < keys.length; i++) {
    recursiveObjectKeys(obj[keys[i]], cb);
  }
}

export function linearForInStacked(obj, cb) {
  'use strict';
  var path = {obj: obj, _prev:{_prev:null}};
  while(path._prev) {
    obj = path.obj;path = path._prev;
    cb(obj);
    if(!obj || 'object' !== typeof obj) {
      continue;
    }
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        path = {_prev: path, obj: obj[key]};
      }
    }
  }
}

export function linearObjectKeys(obj, cb) {
  'use strict';
  var path = [obj],
    keys,
    i;
  while(path.length) {
    obj = path.pop();
    cb(obj);
    if(!obj || 'object' !== typeof obj) {
      continue;
    }
    keys = Object.keys(obj);
    for(i = keys.length - 1; i >= 0 ; i--) {
      path.push(obj[keys[i]]);
    }
  }
}

export function linearForIn(obj, cb) {
  'use strict';
  var path = [obj];
  while(path.length) {
    obj = path.pop();
    cb(obj);
    if(!obj || 'object' !== typeof obj) {
      continue;
    }
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        path.push(obj[key]);
      }
    }
  }
}

export function linearObjectKeysStacked(obj, cb) {
  'use strict';
  var path = {obj: obj, _prev:{_prev:null}},
    keys,
    i;
  while(path._prev) {
    obj = path.obj;path = path._prev;
    cb(obj);
    if(!obj || 'object' !== typeof obj) {
      continue;
    }
    keys = Object.keys(obj);
    for(i = keys.length - 1; i >= 0 ; i--) {
      path = {_prev:path, obj: obj[keys[i]]};
    }
  }
}

export function stringifyTraverse(obj, cb) {
  'use strict';
  JSON.stringify(obj, function(k, v) {
    cb(v);
    return v;
  });
}