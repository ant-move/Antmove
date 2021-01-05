const app = getApp();

Page({
  data: {
    index: 0,
    activeTab: 0,
    list: [1,2,4,5,6,7]
  },

  onLoad() {
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
  },

  onShow() {
    this.setData({ todos: app.todos });
  },

  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    }));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
  onport(e) {
    console.log('页面',e)
  }
});
