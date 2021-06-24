// 介绍：数组的数据结构有一个缺点，那就是 (在大多数语言中)数组的大小是固定的，从数组的起点或中间插入或移 除项的成本很高，因为需要移动元素。
// (尽管我们已经学过，JavaScript 有来自 Array 类的方法 可以帮我们做这些事，但背后的情况同样如此。)

// Node，表示我们想要添加到链表中的项
class Node {
    constructor(element) {
      this.element = element;
      this.next = undefined;
    }
}
// tools function
function defaultEquals(a, b) {
    return a === b;
}

// LinkedList
class LinkedList {
    constructor(equalsFn = defaultEquals) {
      this.count = 0; // {2}
      this.head = undefined; // {3}
      this.equalsFn = equalsFn; // {4}
    }
    push(element) {
        const node = new Node(element); // {1}
        let current; // {2}
        if (this.head == null) { // {3}
            this.head = node;
        } else {
            current = this.head; // {4}
            while (current.next != null) { // {5} 获得最后一项
                current = current.next;
            }
            // 将其 next 赋为新元素，建立链接
            current.next = node; // {6}
        }
            this.count++; //{7}
    }
    insert(element,index) {
        if (index >= 0 && index <= this.count) { // {1}
            const node = new Node(element);
            if (index === 0) { // 在第一个位置添加
                const current = this.head;
                node.next = current; // {2}
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1); // {3}
                const current = previous.next; // {4}
                node.next = current; // {5}
                previous.next = node; // {6}
            }
            this.count++; // 更新链表的长度 return true;
        }
      return false; // {7}
    }
    removeAt(element) {
        // 检查越界值
        if (index >= 0 && index < this.count) { // {1}
            let current = this.head; // {2}
            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--; // {9}
            return current.element;
        }
        return undefined; // {10}
    }
    remove(index) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { // {1}
          let node = this.head; // {2}
          for (let i = 0; i < index && node != null; i++) { // {3}
            node = node.next;
          }
          return node; // {4}
        }
        return undefined; // {5}
    }
    indexOf(element) {
        let current = this.head; // {1}
        for (let i = 0; i < this.count && current != null; i++) { // {2}
            if (this.equalsFn(element, current.element)) { // {3}
                return i; // {4}
            }
            current = current.next; // {5}
        }
        return -1; // {6}
    }
    getHead() {
        return this.head;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    toString() {
        if (this.isEmpty()) { // {1}
            return '';
        }
        let objString = `${this.head.element}`; // {2}
        let current = this.head.next; // {3}
        for (let i = 1; i < this.size() && current != null; i++) { // {4}
          objString = `${objString},${current.element}`;
          current = current.next;
        }
        return objString; // {5}
      }
}

//双向链表，在单向链表中只要控制一个 next 指针，而双向链表则要同时控制 next 和 prev(previous，前一个)这两个指针
// 继承单向链表LinkedList，可以构造出DoublyLinkedList类，此处不作具体实现。