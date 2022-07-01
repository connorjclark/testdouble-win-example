import * as td from 'testdouble';

td.replaceEsm('./module.js', {runMe: () => 'replaced'});

const {runMe} = await import('./module.js')

console.log(runMe());
