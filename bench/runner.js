process.on('message', ({count, run: [module, method], setup: [setupModuleName, setupMethod]}) => {
  'use strict';
  var setupFunc = require(setupModuleName)[setupMethod],
    func = require(module)[method],
    result = [];
  for(let i = 0; i < 10; i++) {
    let tmpResults = [];
    for(let j = 0; j < 20; j++) {
      tmpResults.push(run(setupFunc, func, count));
    }
    result.push(tmpResults.reduce(max));
  }
  process.send(result);
  process.exit();
});

function run(setupFunc, func, count) {
  'use strict';
  var objs = setupFunc(count),
    i;
  var start = process.hrtime();
  for (i = 0; i < count; i++) {
    let tmp = objs.pop();
    func(tmp[0], tmp[1]);
  }
  var tmp = process.hrtime(start);
  var t1 = tmp[0] + tmp[1] / (1000 * 1000 * 1000);
  return count / t1;
}

function max(a, b) {
  'use strict';
  return Math.max(a, b);
}