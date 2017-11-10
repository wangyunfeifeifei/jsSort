//归并排序第一次优化
function mergesort(){

}

let F = function () {}
F.prototype = Sort.prototype;
mergesort.prototype = new F();

mergesort.prototype.sort=function(arr)
{
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
        }else if(aux[i-l]>aux[j-l]){
            arr[k] = aux[j-l];
            j++;
        }else{
            arr[k]= aux[i-l];
            i++;
        }
    }
}
