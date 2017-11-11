const Sort = require('../sort');

//自底向上归并排序
function mergeBU() {}

function F() {}
F.prototype = Sort.prototype;
mergeBU.prototype = new F();

mergeBU.prototype.sort = function(arr){
    for(let sz =1;sz<arr.length;sz+=sz){
        for(let i=0;i+sz<arr.length;i+=sz+sz){
            // if(arr[i+sz-1]>arr[i+sz])
                __merge(arr,i,i+sz-1,Math.min(i+sz+sz-1,arr.length-1));
        }
    }
}

function __merge(arr,l,mid,r){
    let aux = []
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
        }else if(aux[i-l]>aux[j-l]){
            arr[k] = aux[j-l];
            j++;
        }else{
            arr[k] = aux[i-l];
            i++;
        }
    }
}

module.exports = mergeBU;
