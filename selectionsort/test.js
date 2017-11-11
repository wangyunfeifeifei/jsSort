const selectionsort = require('./selectionSort');

let ss = new selectionsort();

let n =10000;
let arr = ss.generateRandomArray(n,0,n);

ss.speedTest(ss,arr);
ss.show(arr);
