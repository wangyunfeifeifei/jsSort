const fs = require('fs')
const heapSort = require('./heapSort/heapsort1')
const quickSort = require('./quickSort/quicksort3')
const mergeSort = require('./mergeSort/mergeSort4')

const hs = new heapSort()
const qs = new quickSort()
const ms = new mergeSort()

let result = {}

for(let n=1000;n<=1000000;n*=10) {
    let arr = hs.generateRandomArray(n,0,n);
    let arr2 = hs.copyArr(arr);
    let arr3 = hs.copyArr(arr);
    console.log(`--------------------n=${n}:-----------------------`)
    console.log("堆排序:")
    hs.speedTest(hs,arr);
    console.log("快速排序");
    qs.speedTest(qs,arr2);
    console.log("归并排序");
    ms.speedTest(ms,arr3);

    result[`${n}`] = arr;
}

fs.exists('./result.json',(exists) => {
    if(!exists) {
        fs.writeFile('result.json',JSON.stringify(result),(err) => {
            if(err)throw err;
            console.log('result saved');
        })
    }
})
