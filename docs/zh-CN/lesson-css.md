---
marp: true
theme: gaia
_class: lead
paginate: true
---
### lesson1（下）
html、css

---
#### CSS课程主要内容

1. 特性，引入方式，权重优先级
2. 盒模型，IE盒子
3. 布局方式
4. box-sizing
5. 解决常见的CSS相关问题

---
#### CSS标准
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

---
5. 默认样式
浏览器的默认样式——当开发者没有指定样式时，浏览器通过这些最简单的样式使页面具有基本可读性。

6. 用途
用于给文档添加样式、布局等。文档是由标记语言组织起来的文本文件 —— HTML 是最常见的标记语言, 但你可能也听说过其他可标记语言，如 SVG 或 XML。

---
7. CSS模块分类
CSS 由许多模块(modules) 构成，比如Backgrounds and Borders 就是一个模块。如果，你注意到某个属性和另外一些属性的相似点，并且它们可能确实是相同的格式。如上文中的 Backgrounds and Borders 模块 — 你会发现 background-color 和 border-color 这两个属性在逻辑上相通。并且它也确实如此。

---
8. 浏览器加载网页中CSS参与的简化步骤
![浏览器加载简化步骤](../images/rendering.svg)
更多请访问，MDN链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works

---
#### 盒模型

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

什么是粘性定位？当一个元素被指定了position: sticky时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了position: fixed一样。

ElementUI组件库的吸顶或者吸底效果就是该属性的具体应用。

---
#### box-sizing
布局和包含块

---
#### 浏览器兼容的问题
访问，https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Howto