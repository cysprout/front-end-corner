---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# lesson1
html、css

## HTML
超文本标记语言，HyperText Markup Language的缩写

---

### HTML结构
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

注意：怪异模式和标准模式。其中，`<!DOCTYPE html>` — 文档类型，代表标准模式，在当今作用有限，仅用于保证文档正常读取。

### 标签
1. 标签的结构

元素（Element）：开始标签、结束标签与内容相结合，便是一个完整的元素

---

2. 标签语义化

- 代表性的元素标签有：nav、header、footer、article、section、p、div
注意：p标签是段落（paragraph）

- 其他

    * 多媒体标签与嵌入

    * 表格

    * 表单


---

3. 元素标签分类

- 内联元素；举例，span、a

- 块级元素：举例，div、p

- 设置元素内联、块级样式、隐藏

```css
display: inline; /* 默认。此元素会被显示为内联元素，元素前后没有换行符 */
display: block;  /* 此元素将显示为块级元素，此元素前后会带有换行符 */
display: none;/* 元素隐藏 */
/* 其他设置，如flex等 */
/* flex布局存在兼容性问题，更多请访问：https://www.caniuse.com/?search=flex */

```

---

4. 和css、js的联系

    css描述一个网页的表现与展示效果

    js描述功能与行为

## 练习
处理标题，添加图片或视频，强调内容，创建一个基础表单