---
marp: true
theme: gaia
_class: lead
paginate: true
---

### nodejs基础

---
#### nodejs课程主要内容

- node环境搭建
- 模块
- I/O操作
- 简单使用 express 框架
- 实践：做一个c/s聊天工具

---
1. 环境

目前Node.js的最新版本：v16.3.0，稳定版本：v14.8.0

- 安装 nvm（推荐）
- `node` 命令行（环境）
- npm（node package manager）

参阅文档： https://www.yuque.com/docs/share/1746fe5a-731c-487a-8d4b-e297e0810e62?# 《nvm管理node版本》

---
2. 模块

在Node环境中，一个.js文件就称之为一个模块
如果 A.js
```js
const greet = ()=>{...}
module.exports = {
    greet
};
```
那么 main.js 引入 A 模块
```js
const {greet} = require('./A.js')
const A1 = require('./A') // 可以省略js，但是相对目录是需要的
```
---
```js
const A2 = require('A') // Error
// Node会依次在内置模块、全局模块和当前模块下查找A.js

greet();
A.greet();

```

总结：这种模块加载机制被称为CommonJS规范。那么模块中变量不会冲突的原理是什么？
`(function(exports, module){...})() ` 
这就是 IIFE，立即调用函数表达式，也叫做自执行匿名函数

---
**提问**：
在 A.js 中，如果想要导出模块，使用`exports = greet`不能成功导出 greet 函数，但是`exports.greet = greet`却可以，这是什么原因？

---
3. I/O：fs文件系统

3.1 创建、写入、读取、删除，示例 demo-fs.js

- write

- read

- rm

- 同步异步 -Sync

---
3.2 stream

- 创建流
```js
const {createReadStream} = require('fs')
const readsteam = createReadStream('1.txt')

readsteam.on('data', function (chunk) {/* ... */});

readsteam.on('end', function () {/* ... */});

readsteam.on('error', function (err) {/* ... */);
```

- pipe：一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe
---
3.3 同步异步
同步版本：
```exp
fs.readSync(fd, buffer, [options])
```
异步版本：
```exp
fs.read(fd, [options,] callback)
```

---
*try catch捕获同步错误
```js
const { appendFileSync } = require('fs');

try {
  appendFileSync('message.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* 处理错误 */
}
```

---
4. 简单使用 express 框架

```sh
cd express_app

npx express-generator （npm v5.2.0+支持）（默认视图引擎是jade）
# or
npx express-generator --view=pug express_pug
cd myapp
npm install
```
`express.static(root, [options])`

- 访问静态资源的根目录 root
- 作为隐藏真实路径
eg：http://localhost:3000/static/images/740296.png

---
手动使用 express
```sh
node demo-simpleapp.js
```

更多详情例子代码参照官网：
- [express examples](http://expressjs.com/en/starter/examples.html)

---
5. c/s 聊天小工具

5.1 net模块
net 模块用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）

5.2 http 模块
创建 HTTP 服务器和客户端，而 HTTP 是网络上传输HTML的协议，用于浏览器和服务器的通信。

- request对象
- response对象

---
创建本地 http 服务器
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
});


server.listen(8000);

console.log('Server is running at http://127.0.0.1:8080/');
```
---
更多 nodejs 小白入门，可以参阅 [Node.js专业中文社区 新手入门](https://cnodejs.org/getstart)

