class Heap {
    //私有
    _shiftUp(key) {
        while(key > 1 && this.data[key] > this.data[Math.floor(key/2)]) {
            [this.data[key],this.data[Math.floor(key/2)]] = [this.data[Math.floor(key/2)],this.data[key]];

            key = Math.floor(key/2);
        }
    }

    _shiftDown(key) {
        while(2*key <= this.count) {
            let j = key * 2;
            if(this.data[j] < this.data[j+1] && j+1 <=this.count) {
                j++;
            }
            if(this.data[key] >= this.data[j])break;

            [this.data[key],this.data[j]] = [this.data[j],this.data[key]];

            key = j;
        }
    }
    //公有
    constructor() {
        this.data = [];
        this.data.push(' ');//我们使堆从1开始，0位放一空元素
        this.count = 0;
    }

    isEmpty() {
        return count == 0;
    }

    insert(value) {
        this.count ++;
        this.data.push(value);
        this._shiftUp(this.count);
    }

    extractMax() {
        let ret = this.data[1];
        [this.data[1],this.data[this.count]] = [this.data[this.count],this.data[1]];
        this.count --;
        this._shiftDown(1);
        return ret;
    }
}

module.exports = Heap;
