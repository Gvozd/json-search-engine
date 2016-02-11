import {fork} from 'child_process';

run('./traverse/setup', './traverse');
async function run(setupModuleName, moduleName) {
  'use strict';
  var setupModule = require(setupModuleName),
    module = require(moduleName),
    results = {},
    qwe = k=>[k].concat(results[k]).join('\t')
    ;
  for(var setupMethod in setupModule) {
    if('function' === typeof setupModule[setupMethod]) {
      for (var method in module) {
        if ('function' === typeof module[method]) {
          results[method] = await runTask(setupModuleName, setupMethod, moduleName, method);
        }
      }
      console.log(
        setupMethod + '\n' +
        Object.keys(results)
          .map(qwe)
          .join('\n')
      );
    }
  }
}

function runTask(setupModuleName, setupMethod, moduleName, method) {
  'use strict';
  return new Promise(function(resolve) {
    fork('./runner')
      .on('message', (m) => {
        resolve(m);
      })
      .send({count: 1000, run: [moduleName, method], setup: [setupModuleName, setupMethod]});
  });
}