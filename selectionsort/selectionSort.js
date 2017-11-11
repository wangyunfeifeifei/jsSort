const Sort = require('../sort')
function SelectionSort(){}

var F = function(){}
F.prototype = Sort.prototype;
SelectionSort.prototype = new F();

SelectionSort.prototype.sort = function(arr){
    var n = arr.length;
    for(var i=0;i<n;i++){
        var minIndex = i;
        for(var j=i+1;j<n;j++){
            if(this.less(arr[j],arr[minIndex])){
                minIndex = j;
            }
        }
        this.exch(arr,i,minIndex);
    }
}

module.exports= SelectionSort;
