# 事件详解（三）
## 课程目标
- 碰撞检测
- 框选实现
- 常用事件汇总
- 表单常用事件
- 自定义事件

## 正课内容
- 拖拽画框
- 碰撞检测
    - 检测所有不碰撞的情况剩余为碰撞
- 框选
- 常用表单事件汇总：
    focus、blur、change、input、submit
- 常用表单方法汇总：
    focus()、blur()、select()、submit()
- 案例：自定义提示信息

- 自定义事件：
new Event(typeArg, eventInit)
    typeArg 事件名称
    eventInit
        "bubbles"，可选，Boolean类型，默认值为 false，表示该事件是否冒泡。
dispatchEvent(event)

## 总结
- 事件监听
    target.addEventListener(type, listener[, options|useCapture]) 添加事件监听
    type 事件类型 (click、mouseover等，注意这里不加on)
    listener 事件处理函数
    可选参数：
        options 配置对象
            capture:  Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
            once:  Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
            passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
        useCapture Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
- 取消事件监听 removeEventListener(type, listener[, options|useCapture])
- 常用事件汇总：
    - 鼠标事件：mouseover、mouseout、mouseenter、mouseleave、mousedown、mouseup、mousemove、click、dblclick、mousewheel、DOMMouseScroll
    - 键盘事件：keydown、keyup
    - 表单事件：change、input、focus、blur、submit
    - 其他事件：load、resize、selectstart、scroll、contextmenu
- 事件流：事件捕获 --> 事件源 --> 事件冒泡
- 默认事件（默认行为）
- 事件对象
    - e.target 事件源
    - e.clientX/e.clientY、e.pageX/e.pageY 鼠标位置获取
    - e.preventDefault() 阻止默认事件
    - e.stopPagation() 阻止冒泡
    - e.keyCode 获取按键
    - e.ctrlKey、e.shiftKey、e.altKey 
    - e.button 获取鼠标按键
    - e.wheelDelta 和 e.detail
- 事件代理
- 拖拽
- 自定义滚动条   
    - 滚动滑块的高度比例换算：
        滚动滑块的高度/滚动条轨道 == 内容的可见高度/内容高度
        滚动滑块的高度 = 滚动条轨道 * (内容的可见高度/内容高度)
    - 内容滑动距离比例换算:
        滑块移动距离/滑块移动最大距离 == -内容移动距离/内容移动最大距离
        内容移动距离 = -内容移动最大距离* (滑块移动距离/滑块移动最大距离)

## 下节课预告
1）工厂模式
2）new运算符
3）构造函数
4）原型prototype
5）面相对象和面相过程编程
6）类和对象

## 下节课的讲师
余维海
web全栈工程师，由后端到前端，曾致力于将本地OA及ERP互联网化的开发与研究工作，为企业提供一体化定制服务。6年互联网工作经验，3年教学经验，教学期间参与教学及研发任务，所带学员就职于知名互联网企业。参与《web前端开发项目化教程》一书的编写工作。精通后端语言php、nodejs后端框架thinkphp、前端框架vuejs、reactjs、avalonjs、reactnative、微信小程序、微信公众号开发等等。


