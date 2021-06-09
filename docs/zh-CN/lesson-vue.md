---
marp: true
theme: gaia
_class: lead
paginate: true
---

### lesson6(上)
前端框架Vue

---
#### Vue课程主要内容

- 从0开始搭建Vue应用
- Vue简化版
- vue-router的讲解
- 用cli搭建Vue应用
- mock

---
1. 从0开始搭建Vue应用

2. Vue简化版

3. vue-router

3.1 插件引入（两种方式）：
（1）方法一：

index.html
```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

---
（2）方法二：
模块化机制编程（更通用做法）

先 npm 安装：
```sh
npm install vue-router
```
再引入插件：

main.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
---
3.2 注册路由

定义路由

router.js
```js
// vue文件同时也是一个模块
import Foo from './Foo.vue' 

const routes = [
    { path: '/foo', component: Foo },
    // 等等其他路由
]
```
---
创建路由实例
router.js
```js
// 此处的router，和后面的this.$router指代同一个
const router = new VueRouter({
  routes, // (ES6 缩写) 相当于 routes: routes
})
```
---
挂载根实例
main.js
```js
import router from './router'
import App from './App.vue'

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
```
---
3.3 路由导航
（1）声明式：`<router-link :to="...">`
App.vue
```html
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link :to="{ name: 'user', params: { id: 123 }}">Go to User</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```
---
示意图：

---
（2） 编程式：`router.push(...)`
- 路由器 this.\$router
- 当前路由 this.\$route
```js
// Foo.vue
export default {
  computed: {
    username() {
      // 我们可以通过打印 console.dir(this.$route) 看看里面有什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
```
---
（3）router.push 和 router.replace 不同

跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

---
3.5 动态路由
配置参数路由
```js
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
使用路由参数
```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
```
---

路由参数改变，组件的生命周期钩子不会重新执行。
此时，用下面的方法来监听改变：

watch监听
```js
const User = {
  template: '...',
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    }
  }
}
```
---
导航守卫
```js
const User = {
  template: '...',
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
3.6 嵌套路由

定义路由

---
User.vue
```html
<template>
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    // ...生命周期钩子
    // ...路由守卫钩子
}
</script>
```
---
router.js
```js
import User from './User.vue'
import UserHome from './UserHome.vue'
import UserProfile from './UserProfile.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile', component: UserProfile
        },
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome }
      ]
    }
  ]
})
```

---
3.7 命名的路由

举例：
router.js
```js
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', name: 'user', component: User }
  ]
})
```
xxx.vue
```
// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})
```
---
3.8 导航守卫

（1）全局前置守卫
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```
（2）全局解析守卫
router.beforeResolve，在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用

---
（3）全局后置钩子
```js
router.afterEach((to, from) => {
  // ...
})
```
（4）路由独享的守卫
```js
const router = new VueRouter({
  routes: [{
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }]
})
```
---
（5）组件内的守卫
```js
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```
---
3.9 路由懒加载

```js
const Foo = () => import('./Foo.vue')
// 或者
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
```
有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk（需要 Webpack > 2.4）。

router.js
```js
const router = new VueRouter({
  routes: [{ path: '/foo', component: Foo }]
})
```
---

4. 用cli搭建Vue应用

5. mock