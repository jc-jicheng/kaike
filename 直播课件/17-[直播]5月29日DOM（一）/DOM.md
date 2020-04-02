# 异步专题
## 上节课难点知识总结
- Promise 基础使用
- Async 和 Await

## 课堂主题
DOM

## 课堂目标
1. 掌握 DOM 各个不同的节点类型
2. 掌握 DOM 节点之前的关系
3. 熟练使用 DOM 节点的相关操作

## 正课内容

### Promise 对象
ES6的Promise对象是一个构造函数，用来生成Promise实例。
所谓Promise对象，就是代表了未来某个将要发生的事件（通常是一个异步操作）。
它的好处在于，有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

#### Promise 基本语法

new Promise(function(resolve,reject){

})

#### Promise 内部状态
- Pending 在等待(异步流程执行中)
- Fulfilled(标准)||Resolved 执行成功 - 调用resolve之后改变
- Rejected 执行失败 - 调用 reject 之后改变
#### then
   
promise.then(onFulfilled,onRejected) 

参数：
    onFulfilled
        当Promise变成接受状态（fulfillment）时，该参数作为回调函数被调用（参考： Function）。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果传入的 onFulfilled 参数类型不是函数，则会在内部被替换为(x) => x ，即原样返回 promise 最终结果的函数

    onRejected
        当Promise变成拒绝状态（rejection ）时，该参数作为回调函数被调用（参考： Function）。该函数有一个参数,，即拒绝的原因（the rejection reason）。

返回值：
    当一个Promise完成（fulfilled）或者失败（rejected），返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回：
        - 如果then中的回调函数返回一个值，那么then返回的Promise将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
        - 如果then中的回调函数没有返回值，那么then返回的Promise将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
        - 如果then中的回调函数抛出一个错误，那么then返回的Promise将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
        - 如果then中的回调函数返回一个已经是接受状态的Promise，那么then返回的Promise也会成为接受状态，并且将那个Promise的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
        - 如果then中的回调函数返回一个已经是拒绝状态的Promise，那么then返回的Promise也会成为拒绝状态，并且将那个Promise的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
        - 如果then中的回调函数返回一个未定状态（pending）的Promise，那么then返回Promise的状态也是未定的，并且它的终态与那个Promise的终态相同；同时，它变为终态时调用的回调函数参数与那个Promise变为终态时的回调函数的参数是相同的。

#### Promise.reject
Promise.reject(reason) 返回一个状态为 Rejected 的 Promise 对象

参数：
    reason 失败原因

#### Promise​.resolve
Promise.resolve(value) 返回一个状态为 resolved 的 Promise 对象

参数：
    value  将被Promise对象解析的参数


#### Promise.catch
	捕获前一个promise抛出的错误

#### Promise.all

    Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例，当所有Promise都成功的时候，整个Promise.all才成功

#### Promise.race

    与Promise.all方法类似将多个promise包装成一个新的promise实例
    但是其中有一项的状态发生改变新的实例的状态就会随着改变


### 错误捕获
try{

}catch(err){

}

### DOM 文档对象模型
简单来说 就是定义了对文档相关操作

## DOM关系
- childNodes 子节点
- children 子元素 
- firstChild 第0个子节点
- firstElementChild 第0个子元素
- lastChild 最后一个子节点
- lastElementChild 最后一个子元素
- nextSibling 下一个兄弟节点
- nextElementSibling 下一个兄弟元素
- previousSibling 上一个兄弟节点
- previousElementSibling 上一个兄弟元素
- parentNode 父节点
- offsetParent 定位父级

## 节点操作

### 创建节点
语法：element document.createElement("tagName"); 创建一个节点
参数：tagName 标签名称
返回值：创建好的节点

### 向页面中添加节点
- el.appendChild(node)  在元素的末尾添加一个子级
- el.insertBefore(newNode,oldNode) 在 oldNode 前边添加入 newNode 
- 在使用 appendChild 和 insertBefore时，如果添加是一个页面上已经存在的节点，会先从原位置删除，然后在添加到新的位置去。

### 替换节点
- parent.replaceChild(newNode,oldNode) 替换子元素

### 删除节点
- el parent.removeChild(el) 删除掉某个子元素
- node.remove();

### 克隆节点
- node.cloneNode(deep) 
    - deep: 默认为false
    - deep 为 true, 克隆元素及属性，以及元素的内容和后代
    - deep 为 false, 只克隆元素本身，及它的属性

### 学员管理系统

## 总结
- DOM 的节点关系
- DOM 的节点操作

## 练习
完整实现本次课的案例

## 下节课预告
- DOM 方法总结


