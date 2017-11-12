const quicksort = require('./quicksort1');

let qs = new quicksort();
let n = 10000;
let arr = qs.generateRandomArray(n,0,n);
qs.speedTest(qs,arr);
qs.show(arr);
