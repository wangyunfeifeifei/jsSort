const mergeBU = require('./mergeBU');

let mb = new mergeBU();
let n = 10000
let arr = mb.generateRandomArray(n,0,n);
mb.speedTest(mb,arr);
mb.show(arr);
