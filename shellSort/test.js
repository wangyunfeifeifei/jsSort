const shellsort = require('./shellSort');

let ss = new shellsort()
let n = 100000;
let arr = ss.generateRandomArray(n,0,n);
ss.speedTest(ss,arr);
ss.show(arr);
