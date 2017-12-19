const Sort  = require('../sort');
const Heap = require('./Heap')

//基础堆排序
function heapsort() {}

function F(){}
F.prototype = Sort.prototype;
heapsort.prototype = new F();

heapsort.prototype.sort = function(arr) {
    let heap = new Heap();
    for(let i=0;i<arr.length;i++) {
        heap.insert(arr[i]);
    }
    for(let i=arr.length-1;i>=0;i--) {
        arr[i] = heap.extractMax();
    }
}

module.exports = heapsort;
