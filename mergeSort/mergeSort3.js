//第二个优化方案,在js中好像反而更慢了
const Sort = require('../sort')

function mergesort(){}

function F() {}
F.prototype = Sort.prototype;
mergesort.prototype = new F();

mergesort.prototype.sort = function(arr){
    __mergesort(arr,0,arr.length-1);
}

function __mergesort(arr,l,r){
    //对归并到小于15长度的数组进行插入排序
    if(l-r<=15){
        for(let i=l;i<=r;i++){
            let e = arr[i];
            let index =i;
            for(let j=i;j>0&&arr[j-1]>e;j--){
                arr[j] = arr[j-1];
                index--;
            }
            arr[index] = e;
        }
        return;
    }
    let mid = Math.floor((l+r)/2);
    __mergesort(arr,i,mid);
    __mergesort(arr,mid+1,r);
    if(arr[mid]>arr[mid+1])
        __merge(arr,l,mid,r);
}

function __merge(arr,l,mid,r){
    let aux = [];
    for(let i=l;i<=r;i++){
        aux.push(arr[i]);
    }
    let i=l,j=mid+1;
    for(let k=l;k<=r;k++){
        if(i>mid){
            arr[k] = aux[j-l];
            j++;
        }else if(j>r){
            arr[k] = aux[i-l];
            i++;
        }else if(aux[j-l]>aux[i-l]){
            arr[k] = aux[i-l];
            i++;
        }else{
            arr[k] = aux[j-l];
            j++;
        }
    }

}

module.exports = mergesort;
