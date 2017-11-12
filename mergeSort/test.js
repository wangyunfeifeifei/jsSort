const mergesort = require('./mergeSort4');

let ms = new mergesort();

let n = 1000000;
let arr = ms.generateRandomArray(n,0,n);
ms.speedTest(ms,arr);
ms.show(arr);
