// import Sort from '../sort'
function mergesort(){

}

function F() {}
F.prototype = Sort.prototype
mergesort.prototype = new F();

mergesort.prototype.sort = function(arr){
    __mergesort(arr,0,arr.length-1)
}

function __mergesort(arr,l,r){
    if(l>=r)return;
    let mid = Math.floor( (l+r)/2);
    __mergesort(arr,l,mid);
    __mergesort(arr,mid+1,r);
    //将mid两边分别有序的数组进行归并操作
    __merge(arr,l,mid,r);

}

//对【l,mid】和【mid+1,r】进行归并
function __merge(arr,l,mid,r){
    let aux = arr.slice(l,r+1);
    let i=l,j=mid+1;
    for(let k=l;k<=r;k++){
        if(i>mid){
            arr[k] = aux[j-l];
            j++;
        }else if(j>r){
            arr[k] = aux[i-l];
            i++;
        }else if(aux[i-l]<aux[j-l]){
            arr[k] = aux[i-l];
            i++;
        }else{
            arr[k] = aux[j-l];
            j++;
        }
    }
}
