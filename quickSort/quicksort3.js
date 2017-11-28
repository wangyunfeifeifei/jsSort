//双路快排
const Sort = require('../sort');

function quicksort() {}

function F(){}
F.prototype = Sort.prototype;
quicksort.prototype = new F();

quicksort.prototype.sort = function(arr) {
    __quicksort(arr,0,arr.length-1);
}

function __quicksort(arr, l, r) {
    if(l>=r)return;
    let p = __patition(arr,l,r);
    __quicksort(arr,l,p);
    __quicksort(arr,p+1,r);
}

function __patition(arr,l,r) { 
    let t = Math.floor(Math.random()*(r-l+1)) +l;
    [arr[l],arr[t]] = [arr[t],arr[l]];
    let i = l+1;
    let j = r;
    let v = arr[l];
    while(true){
        while(arr[i]<=v&&i<r)i++;//找到第一个比v大的数
        while(arr[j]>=v&&j>l)j--;//找到第一个比v小的数
        if(i>=j)break;
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    [arr[l],arr[j]] = [arr[j],arr[l]];
    return j;
}

module.exports = quicksort;
