const quicksort = require('./quicksort4');

let qs = new quicksort();
let n = 1000000;
let arr = qs.generateRandomArray(n,0,n);
qs.speedTest(qs,arr);
qs.show(arr);
