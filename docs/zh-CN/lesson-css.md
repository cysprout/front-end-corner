---
marp: true
theme: gaia
_class: lead
paginate: true
---
### lesson1（下）
CSS入门


---
#### CSS课程主要内容
讲授方式：从整体到局部，从单个到多个组合，讲向后兼容

1. 特性，引入方式，权重优先级
2. 盒模型，IE盒子
3. 布局方式
4. box-sizing
5. 解决常见的CSS相关问题

---
#### CSS标准、特性
1. 定义
是用来指定文档如何展示给用户的一门语言。

2. 标准
由 W3C 规范 实现跨浏览器的标准化，现状CSS2.1 是推荐标准， CSS3 分成多个小模块且正在标准化中。

3. 引入方式，有三种：
- 元素属性内联
- 标签嵌入
- 外部资源引入

---
4. 优先级
优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定

（1）以下选择器类型的优先级是递增的：

类型选择器（例如，h1）和伪元素（例如，::before）
类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
ID 选择器（例如，#example）。

---
（2）其他情况，

给元素添加的内联样式 (例如，style="font-weight:bold") 总会覆盖外部样式表的任何样式 ，因此可看作是具有最高的优先级

（3）!important例外规则
此声明将覆盖任何其他声明。虽然，从技术上讲，!important 与优先级无关，但它与最终的结果直接相关。使用 !important 是一个坏习惯

想要更形象的了解优先级关系，访问链接：https://specifishity.com/

---
5. 默认样式
浏览器的默认样式——当开发者没有指定样式时，浏览器通过这些最简单的样式使页面具有基本可读性。

6. 用途
用于给文档添加样式、布局等。文档是由标记语言组织起来的文本文件 —— HTML 是最常见的标记语言, 但你可能也听说过其他可标记语言，如 SVG 或 XML。

---
7. CSS模块分类
CSS 由许多模块(modules) 构成，比如Backgrounds and Borders 就是一个模块。如果，你注意到某个属性和另外一些属性的相似点，并且它们可能确实是相同的格式。如上文中的 Backgrounds and Borders 模块 — 你会发现 background-color 和 border-color 这两个属性在逻辑上相通。并且它也确实如此。

---
8. 浏览器加载网页过程（CSS参与的）简化步骤
![浏览器加载简化步骤](../images/rendering.svg)
更多内容，请访问链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works

---
#### 盒模型
![box-mode](../images/box-model.png)

在浏览器dev-tools中：

---

![box-model-devtools](../images/box-model-devtools.png)

---
#### CSS布局
- 正常布局流
- display属性
- 弹性盒子
- 网格
- 浮动
- 定位
- CSS 表格布局
- 多列布局

---
1. 正常布局流
normal flow，指的是不对页面进行任何布局控制时，浏览器默认的HTML布局方式。

2.display属性
设置元素内联、块级样式（隐藏）

```css
display: inline; /* 默认。此元素会被显示为内联元素，元素前后没有换行符 */
display: block;  /* 此元素将显示为块级元素，此元素前后会带有换行符 */
display: none;/* 元素隐藏 */
/* 其他设置，如flex等，改变正常布局流 */
/* flex布局存在兼容性问题，更多请访问：https://www.caniuse.com/?search=flex */

```

---
1. 弹性盒子
flexbox，用于设计横向或纵向的布局

2. 网格布局
grid，布局则被设计用于同时在两个维度上把元素按行和列排列整齐

3. 浮动
float，会改变该元素本身和在正常布局流（normal flow）中跟随它的其他元素的行为

---
4. 定位
position，正常布局流中，默认为 static ，使用其它值会引起元素不同的布局方式，例如将元素固定到浏览器视口的左上角

注意：定位，也可以被设置成我们不常用的粘性定位。

粘性定位(sticky positioning)是最后一种我们能够使用的定位方式，其他的常见定位方式如静态、相对、绝对、固定定位四种。

---
**什么是粘性定位？**
当一个元素被指定了position: sticky时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了position: fixed一样。

ElementUI组件库的吸顶或者吸底效果就是该属性的具体应用。

---
#### box-sizing
定义了 user agent 应该如何计算一个元素的总宽度和总高度

盒子宽度和高度会 **加上** 设置的边框和内边距值，取决于属性设置
- border-box    加上
- content-box   不加上

---
#### 浏览器兼容的问题
更多内容，请访问链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Howto