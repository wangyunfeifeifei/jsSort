const Sort = require('../sort')

function shellsort(){}

function F() {}
F.prototype = Sort.prototype;
shellsort.prototype = new F();

shellsort.prototype.sort = function(arr){
    let n = arr.length;
    let h = 1;
    while(h < Math.floor(n/3)) {
        h = h*3+1;
    }
    while(h>=1){
        //当h降到1时，就是一个插入排序，
        //h》1时的操作是将数组变得近乎有序
        //近乎有序的数组插入排序的效率将会非常高
        for(let i = h;i<n;i++){
            for(let j = i;j>=h&&arr[j]<arr[j-h];j-=h){
                this.exch(arr,j,j-h);
            }
        }
        h = Math.floor(h/3);
    }
}

module.exports = shellsort;
