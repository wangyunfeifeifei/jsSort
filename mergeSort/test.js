const mergesort = require('./mergeSort2');

let ms = new mergesort();

let n = 10000;
let arr = ms.generateRandomArray(n,0,n);
ms.speedTest(ms,arr);
ms.show(arr);
