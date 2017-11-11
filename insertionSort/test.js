const insertionSort = require('./insertionSort');

let is = new insertionSort();
let n = 10000;
let arr = is.generateRandomArray(n,0,n);
is.speedTest(is,arr);
is.show(arr);
