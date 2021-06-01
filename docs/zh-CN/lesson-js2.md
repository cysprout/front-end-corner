---
marp: true
theme: gaia
_class: lead
paginate: true
---

### lesson2（下）
javascript

---
#### js课程主要内容
**主题**：数据结构定义、js基本特性

- 数据结构
- js基本特性

---
1. 数据结构

6种简单数据类型
对象，数组

栈、队列、树

图*、链表*


---
2. js基本特性

（1）弱类型
（2）对象
（3）函数
（4）作用域和作用域链
（5）闭包
（6）IIFE
（7）模块模式
（8）原型和原型链
（9）this
（10 继承和行为委托

---
3. 弱类型

变量可以用于保存任何类型的数据。
```
var message = "hi";
message = 100; // 合法，但不推荐
```

---
4. 对象

（1）对象显式创建

new操作符和Object构造函数
```js
let lang = new Object();
p.name = "javascript";
```

---

对象字面量表示法（更流行的方式）
```js
let Lang = {
    name: "javascript"
};
```
或者
```js
let language = {};
language.name = "javascript";

```

---
（2）对象属性存取

属性一般是通过点语法来存取的，这也是面向对象语言的惯例，
但也可以使用中括号来存取属性。
```js
let lang = {};
lang.name = "javascript";
console.log(lang["name"])
```

---
5. 函数

（1）函数定义（略）

我们在前面已经讲过。

（2）函数提升


```js
func(2) // 输出 2
function(arg) {
    console.log(arg)
}
```

---
注意：函数提升仅适用于函数声明，而不适用于函数表达式

```js
//  下面写法是错误的：
exp(2)  // Uncaught ReferenceError: Cannot access 'exp' before initialization
const exp = function{}; 
```

---
（3）函数调用

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

- 函数名
- arguments.callee
- 作用域下的一个指向该函数的变量名

对第二种方法 arguments.callee，举例：
```js
[1, 2, 3, 4, 5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```
---

（4）函数作用域

在函数内定义的变量不能在函数之外的任何地方访问

（5）闭包

闭包产生的过程：JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。


---
举例：
```js
function foo() {
    const str = "bar in foo";
    return function bar() {
        return str;
    }
}

var fun = foo();
fun(); // "bar in foo"
```
---
（6）扩展知识：IIFE

同样利用函数作用域特性的，还有 IIFE（ 立即调用函数表达式）

外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。
```js
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...

  return function () {
    return secureCode;
  };
})();

getCode();    // Returns the secret code
```
---

（7）arguments对象

函数的实际参数会被保存在一个类似数组的arguments对象中。

arguments有数组的特性，可以中括号下标获取参数，也有length属性返回参数个数。

---
6. 作用域

- 作用域

在创建函数的时候，会创建作用域，并且只有函数内部可以访问。

- 作用域链

作用域从函数内层到函数外层，层层嵌套，更近的作用域有更高的优先权。这种层次关系称为作用域链。
链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。

---
举例：
```js
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
```

---
7. "继承"和委托

什么是继承？

继承是面向对象编程中讨论最多的话题。实现继承是ECMAScript唯一支持的继承方式，而这主要是通过原型链实现的。

---
下面有一张图来描述这个关系：

![prototype-chain-relationship](./images/prototype-chain-relationship.png)

---
*构造函数、原型和实例的关系:

每个构造函数都有一个原型对象，原型有一 个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是 另一个类型的实例呢?那就意味着这个原型本身有一个内部指针指向 另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。

---
对象的行为委托

举例：对象b可以使用a上定义的方法
```js
var a = {
    say: function() {
        console.log('Hello!');
    }
}

// 第一种方式，方法引用
var b = {
    say:a.say
}
b.say() // Hello
b.say = function() {console.log('你好！')}
console.log(b)
console.log(a)
```

---
```JS
// 第二种方式，委托方式：
var b = Object.create(a);
b.say() // Hello
```

---
8. 闭包

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。

（1）闭包的一般用途：

用闭包模拟私有方法，进行数据隐藏和封装。

像下面的这样，使用闭包来定义公共函数，并令其可以访问私有函数和变量。这个方式也称为 模块模式（module pattern）：

---
```js
var Counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
})();

console.log(Counter.value()); /* logs 0 */
Counter.increment();
Counter.increment();
console.log(Counter.value()); /* logs 2 */
Counter.decrement();
console.log(Counter.value()); /* logs 1 */
```

---
（2）性能问题

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

