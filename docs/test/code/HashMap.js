// tools function
function defaultToString(item) {
    if (item === null) {
      return 'NULL';
    } else if (item === undefined) {
      return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
      return `${item}`;
    }
    return item.toString(); // {1}
}
class ValuePair {
    constructor(key,value) {
        this.key = key;
        this.value = value;
      }
      toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}
// HashMap
class HashMap {
    constructor(toStrFn = defaultToString) {
      this.toStrFn = toStrFn;
      this.table = {};
    }
    put(key, value) {
        if (key != null && value != null) { // {1}
            const position = this.hashCode(key); // {2}
            this.table[position] = new ValuePair(key, value); // {3}
            return true;
        }
        return false;
    }
    get(key) {
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }
    // loselose散列函数，是一种常见的散列函数
    // 原理是简单地将每个键值中的每个字母的 ASCII 值相加，由该值得到散列表中的对应地址
    loseloseHashCode(key) {
        if (typeof key === 'number') { // {1}
            return key;
        }
        const tableKey = this.toStrFn(key); // {2}
        let hash = 0; // {3}
        for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i); // {4}
        }
        return hash % 37; // {5}
    }
    hashCode(key) {
        return this.loseloseHashCode(key);
    }
    remove(key) {
        const hash = this.hashCode(key); // {1}
        const valuePair = this.table[hash]; // {2}
        if (valuePair != null) {
          delete this.table[hash]; // {3}
          return true;
        }
        return false;
    }
}

const hash = new HashMap();
hash.put('Alice', '20');
hash.put('John', '24');
console.log(hash.hashCode('Alice') + ' - Alice');
console.log(hash.hashCode('John') + ' - John');