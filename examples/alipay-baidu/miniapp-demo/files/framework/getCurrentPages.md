# getCurrentPages 方法

`getCurrentPages()` 方法用于获取当前页面栈的实例，返回页面数组栈。第一个元素为首页，最后一个元素为当前页面。

框架以栈的形式维护当前的所有页面。路由切换与页面栈的关系如下：

| 路由方式 | 页面栈表现 |
| :--- | :--- |
| 初始化 | 新页面入栈 |
| 打开新页面 | 新页面入栈 |
| 页面重定向 | 当前页面出栈，新页面入栈 |
| 页面返回 | 当前页面出栈 |
| Tab 切换 | 页面全部出栈，只留下新的 Tab 页面 |


下面代码可以用于检测当前页面栈是否具有 5 层页面深度。

```javascript
if (getCurrentPages().length === 5) {
      my.redirectTo({
        url: '/pages/logs/logs'
      });
    } else {
      my.navigateTo({
        url: '/pages/index/index'
      });
    }
```

**注意：** 不要尝试修改页面栈，会导致路由以及页面状态错误。
