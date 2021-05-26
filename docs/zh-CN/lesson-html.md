---
marp: true
theme: gaia
_class: lead
paginate: true
---
### lesson1（上）
html入门

---
#### HTML课程主要内容
讲授方式：从整体到局部，讲注意H5声明

- HTML规范
- 标签和元素
- 多媒体与嵌入技术
- HTML属性
- html、css和js
- 浏览器加载过程

---
#### HTML规范
1.HTML5结构
（使用IDE快捷生成：空的html写入!或html:5，输入Tab）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
---

注意：html分为怪异模式和标准模式，在怪异模式下，排版会模拟 Navigator 4 与 Internet Explorer 5 的非标准行为。
而`<!DOCTYPE html>`表示标准模式，它被置于 HTML 文件的顶端，是HTML5所推荐的方式，仅用于保证文档被正常读取。

---
2. HTML早期标准
早期的HTML(大约1991年2月)
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
注意：在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，能自动检测错误和其他有用的东西。
HTML5 不基于 SGML，所以不需要引用 DTD。

---
3. HTML5新增章节元素
HTML5新增了几个新元素，\<article>、\<section>、\<nav> 、\<aside>、\<footer> 和 \<header>

HTML4中：使用文档中章节和子章节的概念去描述文档结构。然而文档结构定义和其隐含的大纲算法非常粗糙而且造成了很多问题

在HTML5中，通过这些标签解决这一系列问题：

- section 
表示一个包含在HTML文档中的独立部分，它没有更具体的语义元素来表示，一般来说会有包含一个标题

---
- aiticle
章节元素，如果元素的内容作为一个独立的有意义的集合，\<article>元素可能是更好的选择，可能包含一个或多个\<section>
- aside
章节元素，包含那些不是大纲的特殊章节, 与文档有关的, 就像广告块和解释区域
- nav
章节元素，链接集合的nav元素，常用于目录
- *footer
包含网站相关信息的footer元素
- *header
包含网站相关信息的header元素

---
#### 标签、元素
1. 标签的结构
![element](../images/element.png)

元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素
使用方式：元素可以嵌套使用，一定要遵循正确的打开和关闭规则

---
2. 属性
![attribute](../images/attribute.png)

有时你会看到没有值的属性，它是合法的。这些属性被称为布尔属性

只有下面的写法是合法的
```
<div itemscope> This is valid HTML but invalid XML. </div>
<div itemscope=itemscope> This is also valid HTML but invalid XML. </div>
<div itemscope=""> This is valid HTML and also valid XML. </div>
<div itemscope="itemscope"> This is also valid HTML and XML, but perhaps a bit verbose. </div>
```

---
3. 元素分类

- 块级元素：以块的形式展现。举例，div、p

- 内联元素；出现在块级元素中并环绕文档内容的一小部分。不会导致文本换行。举例，span、a、em、strong

---
注意：在这里提到的“块”和“内联”，不应该与`盒模型`中的同名术语相混淆. 尽管他们默认是相关的，但改变CSS显示类型并不会改变元素的分类，也不会影响它可以包含和被包含于哪些元素。防止这种混淆也是HTML5摒弃这些术语的原因之一

---
4. 标签语义化
敬畏语义，做到正确选用元素
我们需要确保使用了正确的元素来给予内容正确的意思、作用以及外形。更重要的是，它的语义值将以多种方式被使用，比如通过搜索引擎和屏幕阅读器。

- 代表性的元素标签有：nav、header、footer、main、aside、article、section、p、ol、ul、li

- 强调<em/>
    <em/>浏览器默认风格为斜体，但你不应该纯粹使用这个标签来获得斜体风格，为了获得斜体风格，你应该使用<span>元素和一些CSS，或者是<i>元素

---
- 重点强调<strong/>
浏览器默认风格为粗体，但你不应该纯粹使用这个标签来获得粗体风格，为了获得粗体风格，你应该使用<span>元素和一些CSS，或者是 <b> 元素
- 斜体、粗体、下划线
    * <i> 被用来传达传统上用斜体表达的意义：外国文字，分类名称，技术术语，一种思想……
    * <b> 被用来传达传统上用粗体表达的意义：关键字，产品名称，引导句……
    * <u> 被用来传达传统上用下划线表达的意义：专有名词，拼写错误……

---
5. 无语义元素
有时候你可能只想将一组元素作为一个单独的实体来修饰来响应单一的用 CSS 或 JavaScript。应配合使用 class 属性提供一些标签，使这些元素能易于查询。

\<div> 和 \<span>，块级无语义元素和内联的（inline）无语义元素

\<br> 和 \<hr>，换行和水平分割线

---
#### 多媒体与嵌入

<video id="video" controls="" preload="none" poster="http://media.w3.org/2010/05/sintel/poster.png">
  <source id="mp4" src="../videos/yuanshen.mp4" type="video/mp4">
</video>

[点击查看效果](../videos/yuanshen.mp4)

在页面中嵌入许多不同类型的内容： <iframe>, <embed> 和 <object> 元素，<iframe> 用来嵌入其他网页，而另外两者可以帮助你嵌入 PDF, SVG, 甚至是 Flash

---
#### 在HTML中包含特殊字符

|原义字符|等价字符引用|
|-|-|
|<|\&lt;|
|>|\&gt;|
|"|\&quot;|
|'|\&apos;|
|&|\&amp;|

---
#### 和css、js的联系

html超文本标记语言，HyperText Markup Language缩写形式

css描述一个网页的表现与展示效果

js描述功能与行为

---
#### 练习
1. 处理标题，添加图片或视频，强调内容，创建一个基础表单

2. 写信

[点击查看效果](../images/letter.jpeg)

3. 浏览器加载过程
从浏览器拿到页面开始，到页面出现完整内容之间的过程