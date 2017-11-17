//三路快排
const Sort = require('../sort');

function quicksort(){}

function F(){}
F.prototype = Sort.prototype;
quicksort.prototype = new F();

quicksort.prototype.sort = function(arr) {
    __quicksort(arr,0,arr.length-1);
}

//这个patition返回两个数，patition左边的小于v右边的大于v中间的等于v，等于v的都已经在正确的位置上了
function __quicksort(arr,l,r) {
    if(l>=r)return;
    let [lt,gt] = __patition(arr,l,r);
    __quicksort(arr,l,lt);
    __quicksort(arr,gt,r);
}

function __patition(arr,l,r) {
    let t = Math.floor(Math.random()*(r-l+1))+l;
    [arr[l],arr[t]] = [arr[t],arr[l]];
    let v = arr[l];
    let lt = l;
    let gt = r;
    let i = l+1;
    while(i <= gt){
        if(arr[i] < v) {
            [arr[i++],arr[lt++]] = [arr[lt],arr[i]];
        }else if(arr[i] > v) {
            [arr[gt--],arr[i]] = [arr[i],arr[gt]];
        }else {
            i++;
        }
    }
    return [lt-1,gt+1];
}

module.exports = quicksort;
