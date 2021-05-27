---
marp: true
theme: gaia
_class: lead
paginate: true
---
### javascript（上）

日期：2021-05-27

编写：VX团队

---
#### js课程主要内容
**主题**：bom模型

- 浏览器对象模型
- window对象的双重身份
- 浏览器窗口
- 

---
1. 浏览器对象模型
BOM，Browser Object Model

浏览器功能对象，是使用JavaScript开发Web应用程序的核心。
而window对象是BOM的核心和载体。

2. window对象
浏览器的实例对象，表示一个包含DOM文档的窗口。
它的双重身份
- ECMAScript 规定的Global对象
- 浏览器窗口的JavaScript接口

---
3. 浏览器窗口
分为父级浏览上下文，顶级浏览上下文。通过嵌套iframe元素可以实现