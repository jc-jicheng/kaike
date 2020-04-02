# 移动端事件
## 上节课内容总结
- 移动端touch事件 
  - touchstart
  - touchmove
  - touchend
  - touch 事件 和 mouse 事件的区别
  - 事件点透
    - mouse 事件的延迟问题
  - 阻止默认事件
    - 阻止 touchstart 事件带来的影响
    - 阻止 touchmove 事件带来的影响
- TouchEvent 对象详解
  - touches 屏幕上的手指列表
  - targetTouches 元素上的手指列表
  - changedTouches 触发当前事件的手指列表
- 案例：移动端滑屏切换的幻灯片

## 本节课目标
- 掌握重力加速度
- 掌握摇一摇功能实现
- 了解什么是函数防抖与函数节流

## 本节课知识点
- orientationchange 监听横竖屏切换
- window.orientation 检测手机横竖屏
- devicemotion 监听手机加速度发生变化
  - acceleration 手机加速度检测
  - accelerationIncludingGravity 手机重力加速度检测
  - 案例: 方块移动
    - IOS 和 安卓的兼容处理
    `
      function getIos(){
          var u = window.navigator.userAgent;
          return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
    `
- 扩展：函数防抖和函数节流
  - 函数防抖[debounce]
    - 希望函数只执行一次，哪怕我进行了多次调用
      `
        function debounce(fn) {
          var timer
          var _self = fn
          return function() {
            clearTimeout(timer)
            var args = arguments // fn所需要的参数
            var _me = this // 当前的this
            timer = setTimeout(function() {
              _self.call(_me, args)
            }, 200)
          }
        }
      `
  - 函数节流[throttle]
    - 让函数保持在一个可接受的固定频率执行
      `
        function throttle(fn, interval) {
          var _self = fn;
          var firstTime = true
          var timer;
          return function() {
            var args = arguments
            var _me = this
            if (firstTime) {
              _self.call(_me, args)
            }
            if (timer) {
              return false
            }

            timer = setTimeout(function() {
              clearTimeout(timer)
              timer = null
              _self.call(_me, args)
            }, interval || 500)
          }
        }
      `
- 案例：摇一摇功能实现
## 扩展内容
- deviceorientation 手机倾斜角度检测
  - e.beta
  - e.gamma
  - e.alpha
- 案例：随着手机旋转的小方块

## 下阶段讲师
钟毅

高级全栈工程师，5 年前后端 php 开发经验，6 年前端开发经验，包含 5 年研发教学经历。涉及PHP、symfony、laravel，Node.js、Express、KOA，MySQL、MongoDB 等，前端 Angular、Vue、React 开发框架，以及 webpack 工程化相关技术，参与过《前端HTML+CSS修炼之道》一书的内容编写。



