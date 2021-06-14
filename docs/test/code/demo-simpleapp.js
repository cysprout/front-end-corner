const express = require('express');
// express 实例
const app = express();

// app 常用的 get方法
app.get('/', function (req, res) {
  res.send('Hello World! Simple app.');
});

// 监听本地的 3000 端口
app.listen(4000, function () {
  console.log('app is listening at port 4000');
});