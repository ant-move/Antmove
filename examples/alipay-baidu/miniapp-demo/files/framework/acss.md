# ACSS 语法参考

ACSS 是一套样式语言，用于描述 AXML 的组件样式，决定 AXML 的组件的显示效果。

为适应广大前端开发者，ACSS 同系统 CSS 规则完全一致，100% 可以用。同时为更适合开发小程序，对 CSS 进行了扩充。


## rpx

rpx（responsive pixel）可以根据屏幕宽度进行自适应，规定屏幕宽为 750rpx。以 Apple iPhone6 为例，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素。

| 设备         | rpx 换算 px（屏幕宽度 / 750） | px 换算 rpx（750 / 屏幕宽度） |
| ------------ | ----------------------------- | ----------------------------- |
| iPhone5      | 1rpx = 0.42px                 | 1px = 2.34rpx                 |
| iPhone6      | 1rpx = 0.5px                  | 1px = 2rpx                    |
| iPhone6 Plus | 1rpx = 0.552px                | 1px = 1.81rpx                 |


## 样式导入

使用`@import`语句可以导入外联样式表，`@import` 后需要加上外联样式表相对路径，用`;`表示结束。

**示例代码：**

```css
/** button.acss **/
.sm-button {
  padding: 5px;
}
```

```css
/** app.acss **/
@import './button.acss';
.md-button {
  padding: 15px;
}
```

导入路径支持从 node_modules 目录载入第三方模块，例如 page.acss:

```css
@import './button.acss'; /*相对路径*/
@import '/button.acss'; /*项目绝对路径*/
@import 'third-party/page.acss'; /*第三方 npm 包路径*/
```

## 内联样式

组件上支持使用 `style`、`class` 属性来控制样式。


### style 属性

用于接收动态样式，样式在运行时会进行解析。行内样式不支持`!important` 优先级规则。

```html
<view style="color:{{color}};" />
```

### class 属性

用于接收静态样式，属性值是样式规则中类选择器名（样式类名）的集合，样式类名不需要带上`.`，多个类名间以空格分隔。请静态样式写进 class 中，避免将静态样式写进 style 中，以免影响渲染速度。

```html
<view class="my-awesome-view" />
```


## 选择器

同 CSS3 保持一致。

**注意：**

- `.a-`, `.am-` 开头的类选择器为系统组件占用，不可使用。
- 不支持属性选择器。


## 全局样式与局部样式

- app.acss 中的样式为全局样式，作用于每一个页面。
- 页面文件夹内的 .acss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.acss 中相同的选择器。


## 本地资源引用

ACSS 文件里的本地资源引用请使用绝对路径的方式，不支持相对路径引用。例如：

```css
/* 支持 */
background-image: url('/images/amap.png');
/* 不支持 */
background-image: url('./images/amap.png');
```
