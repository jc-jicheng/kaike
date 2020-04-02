# BOM 浏览器对象模型

## 上节课内容总结
获取滚动条距离：
document.body.scrollTop/document.documentElement.scrollTop
document.body.scrollLeft/document.documentElement.scrollLeft
window.scrollY/window.scrollX
window.scrollTo()

获取可视区尺寸:
window.innerWidth/window.innerHeight
window.documentElement.clientWidth/window.documentElement.clientHeight

获取页面尺寸:
document.documentElement.scrollWidth/document.documentElement.scrollHeight

### hash
location 对象
hash 哈希值
onhashchange
hash 路由
## 课堂主题
BOM (browers object model) 浏览器对象模型 

## 课堂目标
1.  深入理解路由的意义
2.  通过招聘面板实战完善hash路由
3.  学习  history.state 和 pushstate ，理解 history 路由原理

## 正课内容
### hash 和 hashchange
### 实战：招聘面板
### history

- pushState(state,title[,url])

    state: 状态对象state是一个JavaScript对象，通过pushState () 创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate事件就会被触发，且该事件的state属性包含该历史记录条目状态对象的副本。

    title: Firefox 目前忽略这个参数，但未来可能会用到。在此处传一个空字符串应该可以安全的防范未来这个方法的更改。或者，你可以为跳转的state传递一个短标题。

    URL: 该参数定义了新的历史URL记录。注意，调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前URL处理。新URL必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前URL。

- popstate
    pushState 修改历史记录不会触发 popstate

- state 
    history.state 获取存入的信息

### 本节课需要大家掌握
1. hash hashChange
2. 数据的分页
3. history

路由本身是一项扩展内容，大家可以是自身情况而定，也可以学员 vue 或 react 之后，再来尝试

## 课程总结
BOM 

## 练习
1. 把今天的讲的案例自己实现一遍

## 预习视频
事件相关视频

## 下节课预告
- 事件监听
- 事件代理
- 取消默认事件
- 鼠标位置获取
- 右键菜单


