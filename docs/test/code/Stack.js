// Stack 
// 1.create
// 方式：基于数组
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() { 
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }

}
// 上面栈进行操作时大部分的时间复杂度是 O(n)，其中n代表数组的长度

// 2. initial
const s = new Stack();
console.log('s is Empty:',s.isEmpty())
// 再验证其他的

// 方式2：基于对象，
// 考虑的点：占用较少的内存空间，且同意遵循 LIFO （Last-In-First-Out） 原则
// 我们引入 count 属性来帮助我们记录栈的大小
class ObjectStack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) { // {1}
            return undefined;
          }
          this.count--; // {2}
          const result = this.items[this.count]; // {3}
          delete this.items[this.count]; // {4}
          return result; // {5}
    }
    peek() {
        if (this.isEmpty()) { 5
            return undefined;
          }
          return this.items[this.count - 1];
    }
    isEmpty() { 
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[0]}`; // {1}
        for (let i = 1; i < this.count; i++) { // {2}
            objString = `${objString},${this.items[i]}`; // {3}
        }
        return objString;
    }
}
// 上面栈的时间复杂度是 O(1)，toString是例外。

// 关于保护this不被修改
// const stack = new Stack();
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

// 应用举例：10进制 转 二进制
// 题目：10进制数据:123456，转换为2~16进制

function convert (decNumber, base) {
    const remainderStack = new Stack(); //存放余数的栈

    let baseString = '', digits='0123456789ABCDEF', number = decNumber;

    // 合法性
    if(base < 2 || base > 16) {
        return '';
    }

    while (number > 0) {
        const remainder = Math.floor(number % base);
        remainderStack.push(remainder);
        number = Math.floor(number / base);
    }
    while (!remainderStack.isEmpty()) {
        baseString += digits[remainderStack.pop()];
    }
    return baseString
}

convert(100,2) //"1100100"
convert(100,8) // "144"
convert(100,16) // "64"