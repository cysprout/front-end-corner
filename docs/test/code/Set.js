class Set{
    constructor() {
        this.items = {};
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element; // {1}
            return true;
          }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]; // {1}
            return true;
          }
        return false;
    }
    has(element) {
        // 不使用this.items.hasOwnProperty(element)，是因为ESlint检测不通过
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    clear() {
        this.items = {};
    }
    size() {
        return Object.keys(this.items).length;
    }
    values() {
        return Object.values(this.items);
    }
 }

 // test
 const set = new Set()
 set.add(1);
 set.add(2);
 console.log(set.values());
 console.log(set.size());