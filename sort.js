function Sort(){

}

Sort.prototype.sort =  function(arr){
    throw new Error("请在子类实现该方法")
}

//打印数组
Sort.prototype.show=function(arr)
{
   console.log(arr);
}
//判断a是否小于b
Sort.prototype.less=function(a,b){
    return a<b;
}

//交换I和j位置上的元素
Sort.prototype.exch = function(arr,i,j){
    //这里使用了es6的解构赋值，不懂请看es6
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

//判断是否已经排好序了
Sort.prototype.isSorted = function(arr){
    for(var i=1,n=arr.length;i<n;i++){
        if(this.less(arr[i],arr[i-1]))return false;
    }
    return true;
}

//生成随机数组 n为数组长度，范围是[rangeL.rangeR]
Sort.prototype.generateRandomArray=function(n,rangeL,rangeR){
    var arr=[];
    for(var i=0;i<n;i++){
        arr[i] =Math.floor(Math.random()*(rangeR-rangeL+1)+rangeL);
    }
    return arr;
}

Sort.prototype.speedTest=function(sortObject,arr){
    var start = new Date().getTime();
    sortObject.sort(arr)
    var end = new Date().getTime();
    console.log("运行时间"+(end-start)+'ms');
}

module.exports=Sort;
