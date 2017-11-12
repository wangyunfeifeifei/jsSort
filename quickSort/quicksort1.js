const Sort = require('../sort');

function quicksort() {}

function F() {}
F.prototype = Sort.prototype;
quicksort.prototype =  new F();

function __partition(arr,l,r){
    let v = arr[l];
    //使【l,j-1】小于v,[j+1,i)大于V
    let j = l;
    for(let i=l;i<=r;i++){
        if(arr[i]<v){
            [arr[j+1],arr[i]] = [arr[i],arr[j+1]];
            j++;
        }
    }
    [arr[j],arr[l]] = [arr[l],arr[j]];
    return j;
}

function __quicksort(arr,l,r){
    if(l>=r)return;
    let p = __partition(arr,l,r);
    __quicksort(arr,l,p);
    __quicksort(arr,p+1,r);
}

quicksort.prototype.sort = function(arr){
    __quicksort(arr,0,arr.length-1);
}

module.exports = quicksort;
