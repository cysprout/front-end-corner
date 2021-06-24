class DoubleEndedQueue{
    constructor() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }
    addFront(element)  {
        if (this.isEmpty()) { // {1}
            this.addBack(element);
          } else if (this.lowestCount > 0) { // {2}
            this.lowestCount--;
            this.items[this.lowestCount] = element;
          } else {
            for (let i = this.count; i > 0; i--) { // {3}
              this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element; // {4}
        }
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront() { // 这就是 Queue 的 dequeue 方法
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // {1}
        delete this.items[this.lowestCount]; // {2}
        this.lowestCount++; // {3}
        return result; // {4}
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.count-1]; // {1}
        delete this.items[this.count-1]; // {2}
        this.count--; // {3}
        return result; // {4}
    }
    peekFront() {
        return this.items[this.lowestCount];
    }
    peekBack() {
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }
    size() {
        return this.count - this.lowestCount;
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

const deque = new DoubleEndedQueue();
console.log(deque.isEmpty()); // 输出true
deque.addBack('John');
deque.addFront('Jack');
console.log(deque.toString()); // Jack, John

// 使用双端队列来检查一个短语是否为回文
// 回文就是正反都能读通的单词、词组、数或一系列字符的序列

function isPalindrome(str) {

    if(str === undefined || str === null ||
        (str !== null && str.length === 0)) { // {1}
            return false;
    }

    const deque = new DoubleEndedQueue(); // {2}
    const lowerString = str.toLocaleLowerCase().split(' ').join('');

    let isEqual = true;
    let firstChar, lastChar;

    for (let i = 0; i < lowerString.length; i++) { // {4}
        deque.addBack(lowerString.charAt(i));
    }

      while (deque.size() > 1 && isEqual) { // {5}
        firstChar = deque.removeFront(); // {6}
        lastChar = deque.removeBack(); // {7}
        if (firstChar !== lastChar) {
          isEqual = false; // {8}
        }
    }
      return isEqual;
}

// test
isPalindrome('madam') //false
isPalindrome('10101010') // false