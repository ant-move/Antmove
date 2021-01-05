# 详细了解小程序文件结构

本节以 Todo App 模板小程序为例，介绍高德小程序的文件结构，以及每种文件类型在小程序中的作用。<br />
Todo App 是一个简单的待办事项管理小程序，实现了用户登录、新增自定义待办事项、划除或恢复待办事项的功能。

<iframe src="https://player.youku.com/embed/XNDIyMjM3NjM4NA==?client_id=9666c9da4af9735e&autoplay=false" frameborder="no" allowfullscreen="true"></iframe>

## 全局配置

<a name="app.json"></a>
### app.json

app.json 是小程序的全局配置，用于配置小程序的页面列表、默认窗口标题、导航栏背景色等。更多配置请参见 [文档配置](../framework/app-json-config)。

```json
{
  "pages": [
    "pages/todos/todos",    
    "pages/add-todo/add-todo"
  ],
  "window": {
    "defaultTitle": "Todo App",
    "titleBarColor": "#323239"
  }
}
```

app.acss 定义了全局样式，作用于当前小程序的所有页面。

```css
page {
  flex: 1;
  display: flex;
  background: #323239;
  font-family: "pingFang SC" "pingFang";
}
```

上例中的 page 为框架支持的特殊选择器，会匹配框架提供的页面根节点容器。

### app.js

app.js 用于注册小程序应用，可配置小程序的生命周期，声明全局数据，调用丰富的 API，如以下获取用户授权及获取用户信息 API 等，更多 API 信息请参见 [API 文档](../api)。

```javascript
App({
  // 声明全局数据
  todos[
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 高德小程序', completed: false },
  ],

  userInfo: null,

  // 声明全局方法
  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
      // 调用用户授权 API
      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);
		  // 调用获取用户信息 API
          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
});
```

可以看到，全局的逻辑代码放在 App({})中，声明了全局数据 todos 、 userInfo ，以及全局方法 getUserInfo()。

todos 全局数据中已经存储了一些数据，即 Todo App 小程序中已有的一些待办事项。

全局方法 getUserInfo() 调用了授权 API my.getAuthCode，以及获取用户信息 API my.getAuthUserInfo ，并将获取到的用户信息存储在 userInfo 中。

## 小程序页面

此示例中有两个页面，Todo List 页面和 Add Todo 页面，都位于 pages 目录下。小程序的所有页面路径必须在 app.json 中申明，路径从项目根目录开始且不能包括后缀名，pages 的第一个页面就是小程序的首页。

每一个[页面](../framework/page-introduce) 由同路径下的四种类型文件组成，即 .json 后缀的配置文件，.axml 后缀的模版文件，.acss 后缀的样式文件，.js 后缀的逻辑脚本文件。

### todo List 页面

<a name="todos.json"></a>
#### todos.json

todos.json 用于配置当前页面的窗口表现。此处定义了使用一个自定义组件 add-button ，指定它的组件名称及对应的路径。自定义组件的具体使用后面会讲述。

```json
{
    "usingComponents": {
        "add-button": "/components/add-button/add-button"
    }
}
```

页面配置文件不是必须的。当存在页面配置文件时，各个页面配置项会优先于 app.json 中 window 的同名配置项。当不存在页面配置文件，则直接使用 app.json 中的默认配置。因此，Todo List 页面的标题为 app.json 中指定的 defaultTitle ，即 `Todo App`。

#### todos.axml

todos.axml 为页面结构模版文件：

```html
<view class="page-todos">

  <view class="user">
    <image class="avatar" src="{{user.avatar || '../../assets/logo.png'}}" background-size="cover"></image>
    <view class="nickname">{{user.nickName && user.nickName + '\'s' || 'My'}} Todo List</view>
  </view>

  <view class="todo-items">

    <checkbox-group class="todo-items-group" onChange="onTodoChanged">
      <label a:for="{{todos}}" a:for-item="item" class="todo-item {{item.completed ? 'checked' : ''}}" a:key="*this">
        <checkbox class="todo-item-checkbox" value="{{item.text}}" checked="{{item.completed}}" />
        <text class="todo-item-text">{{item.text}}</text>
      </label>
    </checkbox-group>

  </view>

  <view class="todo-footer">
    <add-button text="Add Todo" onClickMe="addTodo" ></add-button>
  </view>

</view>
```

使用 [`<view/>`](../component/view),[`<image/>`](../component/image),[`<text/>`](../component/text),[`<button/>`](../component/button),[`<label/>`](../component/label),[`<checkbox/>`](../component/checkbox),<br />
来搭建页面结构以及通过 Mustache 语法两对大括号（{{}}）绑定 todos 数据。

- 绑定数据请参见[此文档](../framework/data-binding)
- 绑定事件请参见[此文档](../framework/events)

<a name="todos.js"></a>
#### todos.js

todos.js 是页面的逻辑脚本文件，小程序页面的逻辑代码必需包含在 Page({}) 中。

```javascript
// 获取全局 app 实例
const app = getApp();

Page({
  // 声明页面数据
  data: {}
  // 监听生命周期回调 onLoad
  onLoad() {
    // 获取用户信息并存储数据
    app.getUserInfo().then(
      user => this.setData({
        user,
      }),
    );
  },
  // 监听生命周期回调 onShow
  onShow() {
    // 设置全局数据到当前页面数据
    this.setData({ todos: app.todos });
  },
  // 事件处理函数
  onTodoChanged(e) {
    // 修改全局数据
    const checkedTodos = e.detail.value;
    app.setTodos(app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    })));
    this.setData({ todos: app.todos });
  },
  addTodo() {
    // 进行页面跳转
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
```

在这个文件中可实现：

- 监听并处理页面的生命周期函数 `onShow` `onLoad`
- 获取小程序实例以及其他页面实例 `getApp` `getCurrentPages`
- 声明并处理数据 `data`
- 响应页面交互事件，调用 API 等
- 这里需要注意的是 `app.todos` 是来自 app.js 中全局的变量定义

#### todos.acss

todos.acss 定义页面局部样式。指定 todos.axml 中不同元素的样式，包括位置、背景颜色、字体、字体颜色等。 ACSS 语法参见 [样式](../framework/page-acss-config) 文档。页面的 .acss 文件不是必须的，但对于相同选择器，页面局部样式会覆盖 app.acss 全局样式。

```css
.page-todos {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
}

.user {
  display: flex;
  flex-shrink: 0;
  padding: 30px;
  color: #FFF;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 130rpx;
  height: 130rpx;
  border-radius: 50%;
  background-color: #FFF;
  align-self: center;
}

.nickname {
  padding-top: 40rpx;
  text-align: center;
  font-size: 40rpx;
  font-weight: 100;
}

.todo-items {
  flex-grow: 1;
  font-size: 34rpx;
  padding: 50rpx 120rpx;
  color: #0EFFD6;
  overflow: auto;
}

.todo-items-group {
  display: flex;
  flex-direction: column;
}

.todo-item {
  position: relative;
  margin-bottom: 50rpx;
  padding-left:80rpx;
  line-height: 70rpx;
  height: 80rpx;
  box-sizing: border-box;
  border: 2px solid rgb(14, 255, 214);
  border-radius: 100rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space:nowrap; */

  transition: border 0.2s;
}

.todo-item:last-child {
  margin-bottom: 0;
}

.todo-item::before {
  content: '';
  position: absolute;
  left: 12rpx;
  margin-right: 20rpx;
  width: 45rpx;
  height: 45rpx;
  background-color: rgba(14, 222, 255, 0.3);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);

  transition: background-color 0.2s;
}

.todo-item::after {
  content: '';
  position: absolute;
  left: 29rpx;
  width: 8rpx;
  height: 18rpx;
  top: 50%;
  transform: translateY(-60%) rotate(38deg);
  border: 4rpx solid #FFF;
  border-width: 0 4rpx 4rpx 0;
  opacity: 0;

  transition: opacity 0.2s;
}

.todo-item-checkbox {
  display: none;
}

.checked .todo-item-text {
  text-decoration: line-through;
  color: #1AA0B8;
}

.checked.todo-item {
  border: 2px solid rgba(14, 222, 255, 0.2);
}

.checked.todo-item::before {
  background-color: rgba(14, 222, 255, 0.2);
}

.checked.todo-item::after {
  opacity: 1;
}

.todo-footer {
  flex-shrink: 0;
  padding: 50rpx 0 100rpx;
  font-size: 48rpx;
  font-weight: 200;
  text-align: center;
}
```

### Add Todo 页面

add-todo.json 声明自定义组件名称和路径：

<a name="add-todo.json"></a>
#### add-todo.json

```json
{
    "usingComponents": {
        "add-button": "/components/add-button/add-button"
    }
}
```

<a name="add-todo.axml"></a>
#### add-todo.axml

add-todo.axml 为页面结构模版文件：

```html
<view class="page-add-todo">

  <view class="add-todo">
    <input
      class="add-todo-input"
      placeholder="What needs to be done?"
      onBlur="onBlur"
      value="{{inputValue}}"
    />
  </view>

  <view class="todo-footer">
    <add-button text="Add Todo" onClickMe="add" ></add-button>
  </view>

</view>
```

此页面的两个核心功能为：

1. 使用[`<input/>`](../component/input) 组件接收用户输入。
2. `<add-button>`是一个[自定义组件](../framework/custom-component-overview)，可将一些功能完整的代码封装为自定义组件，便于在其他地方复用。

<a name="add-todo.js"></a>
#### add-todo.js

add-todo.js 页面逻辑代码：

```javascript
const app = getApp();

Page({
  data: {
    inputValue: '',
  },

  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  add() {
    app.todos = app.todos.concat([
      {
        text: this.data.inputValue,
        compeleted: false,
      },
    ]);

    my.navigateBack();
  },
});
```

<a name="add-todo.acss"></a>
#### add-todo.acss

add-todo.acss 同 todos.acss 用法一致，不再赘述。

## 上传并发布

小程序开发完成后，可进行 [发布上线](../introduce/release)。
