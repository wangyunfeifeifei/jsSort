const heapsort = require('./heapsort1');

let hs = new heapsort();
let n = 1000000;
let arr = hs.generateRandomArray(n,0,n);
hs.speedTest(hs,arr);
// hs.show(arr);
