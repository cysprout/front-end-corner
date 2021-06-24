// Array
// =========
// 1.initial
let arr = new Array(1);
let arr1 = [];

// ==========
// 2.operate
let temp = arr[0];
arr[2] = 100;
// Output:
// in chrome: (3) [empty × 2, 100]
// 比较一下 for...in 和 for 对 arr 遍历的结果
// 比较一下 Array.prototype.forEach 和 for，关键字break、continue的作用

// =========
// 3.methods
arr.push()  // 末尾 <-
arr.pop()   // 末尾 ->
arr.shift() // 开头 ->
arr.unshift() // 开头 <-，实质：首先要空出数组里第一个元素的位置，把所有的元素向右移动一位。
arr.splice() // 3参，任意位置删除/添加

// 例子，splice
arr = [1,2,3,4,5,6]
// case1：删除4，5
arr.splice(3,2) // [1,2,3,6]
// case2：再插入4，5到原来位置
arr.splice(3,0,4,5) // [1,2,3,4,5,6]

// 几个特别的方法一定要讲，为什么呢，因为这个涉及到函数式编程
arr.map()
arr.filter()
arr.reduce()
arr.join

// 例子 map
// 偶数函数
const isEven = x => x % 2 === 0;
arr.map(isEven) // [false, true, false, true, false, true]
arr.filter(isEven) // [2,4,6]

const initialValue = 0;
arr.reduce((accumulator,currentValue,index,array) => accumulator + currentValue, initialValue); // 21，累加器，“卷纸带”，“滚雪球”

[1,2,3,4].join(',') //1,2,3,4

// [排序方法]，因为涉及到后面有算法章节，我们来看看数组内置的有什么
arr.sort()
arr.revert()

// 例子，sort，对数字，特别是字符串
function compare(a, b) {
    if (a < b) {
  return -1; }
    if (a > b) {
      return 1;
   }7 // a必须等于b
  return 0;
  }
[2,5,3,4,6,10,1].sort(compare); // [1,2,3,4,5,6]

// 对字符串sort
['Bob','anan','Jason','bill'].sort(); //["Bob", "Jason", "anan", "bill"] 
// 解释：B-66 J-74 a-97 b-98
// 自然而然，要用String.prototype.toLowerCase

// [搜索方法]，也是算法的缘故
arr.indexOf()
arr.lastIndexOf()
arr.find()
arr.findIndex() 
// 例子，findIndex
[1,2,3,4].find(isEven) // 2
[1,2,3,4].findIndex(isEven) // 1

arr.includes() // ES 7新增
[1,2,3,4].includes(4) // true


// ===========
// 4.多维数组
// 创建二维数组
arr = [[00,01],[10,11]]
// 或者
arr = [];
arr[0] = [];
arr[0][0] = '00';
arr[0][1] = '01';
arr[1] = [];
arr[1][0] = '10';
arr[1][1] = '11';

// 二维数组迭代
for (let i = 0; i < arr.length; i++) {
    const outer = arr[i];
    for (let j = 0; j < outer.length; j++) {
        const element = outer[j];
        console.log(`(${i},${j})`, element)
    }
}
// Output:
// (0,0) 00
// (0,1) 10
// (1,0) 10
// (1,1) 11

// 三维数组创建
// 假设我们要创建一个 3 × 3 × 3 的矩阵，每一格里包 含矩阵的 i(行)、j(列)及 z(深度)坐标
const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
          matrix3x3x3[i][j][z] = `${i}${j}${z}`;
        }
    }
}
console.log(matrix3x3x3)

// 三维数组迭代
for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
      for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(`(${i},${j},${z})`,matrix3x3x3[i][j][z]);
        }
    }
}


