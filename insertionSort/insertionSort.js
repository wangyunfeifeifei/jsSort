const Sort = require('../sort');

function insertionsort(){

}

var F = function(){}
F.prototype = Sort.prototype;
insertionsort.prototype = new F();

insertionsort.prototype.sort = function(arr){
    var n = arr.length;
    for(var i=1;i<n;i++){
        var e = arr[i];
        var index = i;
        //前面数组已经有序，找到适合自己的位置然后插入，没必要每次第都交换，在找到第一个比自己小的位置之前，只需将前面那个数往后挪就行了
        for(var j=i;j>0&&arr[j-1]>e;j--){
            arr[j] = arr[j-1];
            index --;
        }
        arr[index] = e;
    }
}

module.exports = insertionsort;
