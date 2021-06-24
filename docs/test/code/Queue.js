// Queue
// 1. create array-based
class Queue1 {
    constructor() {
        this.items = [];
    }
    enqueue(element) {}
    dequeue() {}
    peek() {}
    size() {}
    isEmpty() {}
    clear() {}
    toString() {}
}

// 2. create object-based，更高效
class Queue {
    constructor() {
        this.count = 0;
        this.items = {};
        this.lowestCount = 0; // 追踪第一个元素，这里回想下 Stack object-based，我们根据 this.items[this.count] 就能跟踪到栈顶元素
    }
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // {1} //  跟踪出队元素result
        delete this.items[this.lowestCount]; // {2}
        this.lowestCount++; // {3}
        return result; // {4}
    }
    peek() { // 查看队列头元素
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
          objString = `${objString},${this.items[i]}`;
        }
        return objString;
      }
}