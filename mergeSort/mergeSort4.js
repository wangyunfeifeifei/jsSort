const Sort = require('../sort')

//归并排序第三种次优化
function mergesort(){

}

let F = function () {}
F.prototype = Sort.prototype;
mergesort.prototype = new F();

//让所有归并排序直接采用相同一片空间，减少了每次开辟空间对效率的影响
let aux = [];

mergesort.prototype.sort=function(arr)
{
    for(let i = 0;i<arr.length;i++){
        aux[i] = arr[i];
    }
    __mergesort(arr,0,arr.length-1);
}


function __mergesort(arr,l,r) {
    if(l>=r)return;
    let mid = Math.floor((l+r)/2);
    __mergesort(arr,l,mid);
    __mergesort(arr,mid+1,r);
    //两边都是有序的，所以当arr[mid]<arr[mid+1]时，数组已经有序了
    if(arr[mid]>arr[mid+1])
        __merge(arr,l,mid,r);
}


function __merge(arr,l,mid,r){
    for(let i=l;i<=r;i++){
        aux[i] = arr[i];
    }
    let i=l,j=mid+1;
    for(let k=l;k<=r;k++){
        if(i>mid){
            arr[k] = aux[j];
            j++;
        }else if(j>r){
            arr[k] = aux[i];
            i++;
        }else if(aux[i]>aux[j]){
            arr[k] = aux[j];
            j++;
        }else{
            arr[k]= aux[i];
            i++;
        }
    }
}

module.exports = mergesort;
