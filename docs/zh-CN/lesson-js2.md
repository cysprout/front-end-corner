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

- 数据类型
- js基本特性

---
1. 数据类型

6种简单数据类型（基本）：
Undefined、Null、Boolean、Number、String和Symbol。

对象，数组（复杂）
Object、Array。

---
2. js基本特性

（1）弱类型
（2）对象
（3）函数
（4）作用域和作用域链
（5）闭包
（6）IIFE，模块模式
（7）原型和原型链
（8）this
（9）继承

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

举例：
```js
let lang = {};
lang.name = "javascript";
console.log(lang["name"])
```

---
*扩展：
- setter，set语法将对象属性绑定到要调用的函数，这就是setter；
- getter，get语法将对象属性绑定到查询该属性时将被调用的函数。


setter语法如下：

```exp
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```
Vue2.x版本数据响应式的实现，正是利用Object.defineProperty方法，把传入的响应式对象属性，转为setter，getter，这也是为什么vue中data属性要在一开始定义，中途添加的属性要使用Vue.set方法添加新属性的setter/getter。

---
举例：
```js
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);
// expected output: Array ["EN", "FA"]
```

---
5. 函数

（1）函数定义

函数声明和字面量方式

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
（3）arguments对象

函数的实际参数会被保存在一个类似数组的arguments对象中。

arguments有数组的特性，可以中括号下标获取参数，也有length属性返回参数个数。

---
（4）函数调用

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

- 函数名
- arguments.callee（废弃方法不推荐）
- 作用域下的一个指向该函数的变量名


---
（5）扩展知识：IIFE（ 立即调用函数表达式，匿名自执行函数）

同样IIFE也利用了函数作用域特性的。

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
6. 作用域与作用域链

**什么是作用域？**
JavaScript 中的作用域就是词法 作用域。
词法作用域是一套关于引擎如何寻找变量以及会在何处找到变量的规 则。词法作用域最重要的特征是它的定义过程发生在代码的书写阶段

**什么是作用域链呢？**
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
7. 闭包

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。

（1）闭包产生的过程：JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

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
（2）闭包的一般用途：

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
（3）性能问题

如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。

---
8. IIFE，模块模式

IIFE，立即调用函数表达式，这是一个被称为 自执行匿名函数 的设计模式。

语法如下：
```js
(function () {
    statements
})();
```
---
IIFE和闭包的组合：

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
9. 原型和原型链
（1）原型

原型，在javascript中，函数可以有属性。 每个函数都有一个特殊的属性叫作原型（prototype）

对象原型，每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。上面提到的原型，更准确的说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。可以通过`Object.getPrototypeOf(obj)`或者已被弃用的`__proto__`（内置原型指向）属性获得获取原型。

---
（2）原型链

特别注意：原型链可以通过内置原型指向__proto__查看链式关系，一直到达Object.\__proto__，也就是null

举例：

---
![chain-to-null](./images/chain-to-null.png)

---
看下面的代码和输出：
```js
var a={"a":1}, b, c={c:3};
var b = Object.create(a);
b.b=2
Object.setPrototypeOf(c,b);
console.log(c)
```
---
![devtool-proto-chain](./images/devtool-proto-chain.jpg)

---
如果是一个函数，如何修改原型：
举例：
```js
// 构造器及其属性定义

function Test(a,b,c,d) {
  // 属性定义
};

// 定义第一个方法

Test.prototype.x = function () { ... }

// 定义第二个方法

Test.prototype.y = function () { ... }

// 等等……
```

---
那么我们现在，通过`new Test`来获取修改原型之后的实例对象了。

如果是一个对象，如何修改原型：

ES6可以使用`Object.setPrototype()`或者在创建时使用`Object.create()`。

在ES5中，我们那么可以使用Object.setPrototype的polyfill版本 ，
实现如下：

---
```js
if (!Object.setPrototypeOf) {
    // 仅适用于Chrome和FireFox，在IE中不工作：
     Object.prototype.setPrototypeOf = function(obj, proto) {
         if(obj.__proto__) {
             obj.__proto__ = proto;
             return obj;
         } else {
             // 如果你想返回 prototype of Object.create(null):
             var Fn = function() {
                 for (var key in obj) {
                     Object.defineProperty(this, key, {
                         value: obj[key],
                     });
                 }
             };
             Fn.prototype = proto;
             return new Fn();
         }
     }
}
```

---
补充：
*下面有一张图来描述构造函数、原型和实例的关系：

![prototype-chain-relationship](./images/prototype-chain-relationship.png)

---
关系总结:

每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是 另一个类型的实例呢?那就意味着这个原型本身有一个内部指针指向 另一个原型，相应地另一个原型也有一个指针指向另一个构造函数。这样就在实例和原型之间构造了一条原型链。

---
8. this
this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。这有点像动态作用域。

this指向误区：
- this 理解成指向函数自身❌
- this 指向函数的作用域❌


---
举例：
```js
function foo(num) {
    console.log( "foo: " + num );
    // 记录 foo 被调用的次数
    this.count++;
 }
foo.count = 0;
foo(1);// foo 被调用时传入1

console.log( foo.count );
console.log(window.count)
```
---


确定this绑定的四种情况
- 默认绑定
如果使用严格模式(strict mode)，那么全局对象将无法使用默认绑定，因此 this 会绑定 到 undefined:
- 隐式绑定（绑定上下文对象）
当函数引 用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。
- 显式绑定（bind、apply、call）
- new绑定

在使用es6的箭头函数时，箭头函数不使用 this 的四种标准规则，而是根据外层(函数或者全局)作用域来决 定 this。

---
10. 继承

什么是继承？

继承是面向对象编程中讨论最多的话题。实现继承是ECMAScript唯一支持的继承方式，而这主要是通过原型链实现的。

- 原型链继承
- new继承
- es6中使用class语法糖，用extends关键字继承
`class ChildClass extends ParentClass { ... }`
