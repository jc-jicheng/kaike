# 事件详解（二）

## 上节课重点知识回顾
- 事件监听
    - target.addEventListener("type",fn,是否捕获);
    - target.removeEventListener("type",fn,是否捕获);
- 事件流
    - 事件流顺序：捕获 -> 事件源 -> 冒泡
    - 事件冒泡：当元素触发事件之后，事件会从目标元素开始由下至上逐级依次传播，直到window对象为止，在传递过程中元素也有对应的事件就会执行，这个过程就是冒泡。
    - 事件捕获：当我们触发一个事件的时候，window 会最先收到消息，会逐级下捕获事件具体发生在哪个元素上，在捕获的过程中，如果元素有对象事件，就会执行
- 事件对象
    - e.target 事件源
    - e.bubbles 是否冒泡
    - e.stopPropagation() 和 e.cancelBubble = true 取消冒泡
- 事件代理
    事件代理(事件委托)：利用冒泡机制将事件统一委托在父级上执行，在通过事件源获取到相关元素   - 优点：1)减少事件注册，节省内存; 2)可以给将来的元素添加事件
    - 缺点：1)建议就近委托，否则会导致浏览器频繁的调用处理函数;2)容易出现误判，所以写好相应判断        
## 课程目标
- 了解什么是默认事件以及怎么阻止默认事件
- 掌握怎么获取鼠标位置
- 自定义右键菜单怎么设置
- 实现放大镜效果
- 拖拽的原理是怎样的
## 正课内容
- 右键菜单事件 - contextmenu
- 默认行为和阻止默认行为
    - e.preventDefault()、return false
    - addEventListener 的 options
        options 配置对象
        capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
        once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
        passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
- 获取鼠标位置
    - e.clientX/e.clientY、e.pageX/e.pageY
- 实例：自定义右键菜单
- 实例：放大镜
- 实例：拖拽

## 扩展
    自定义滚动条

## 总结

## 今天练习
- 完成自定义右键菜单
- 完成放大镜
- 完成拖拽功能

## 下节课预告
- 鼠标滚轮事件
- 完整版自定义滚动条
- 键盘事件
- 碰撞检测