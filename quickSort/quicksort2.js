const Sort = require('../sort');

function quicksort(){}

function F() {}
F.prototype = Sort.prototype;
quicksort.prototype = new F();

quicksort.prototype.sort = function(arr){
    __quicksort(arr,0,arr.length-1);
}

function __quicksort(arr,l,r) {
    if(l>=r)return;
    let p = __patition(arr,l,r);
    __quicksort(arr,l,p);
    __quicksort(arr,p+1,r);
}

function __patition(arr,l,r) {
    let j = l;
    //以随机位置为参考点，有效降低了快排变成o(N*N)效率排序的概率
    let t =Math.floor( Math.random()%(r-l+1)+l );
    [arr[l],arr[t]] = [arr[t],arr[l]];
    let e = arr[l];

    for(let i=l;i<=r;i++) {
        if(arr[i]<e){
            [arr[j+1],arr[i]] = [arr[i],arr[j+1]];
            j++;
        }
    }
    [arr[j],arr[l]] = [arr[l],arr[j]];
    return j;
}

module.exports = quicksort;
