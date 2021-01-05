const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/crud/crud"
    }
}); // 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database.html

const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "基本操作",
            path: "page/cloud/pages/crud/crud"
        };
    },

    data: {
        openid: "",
        todoListFetched: false,
        todoList: [],
        searchContent: "",
        newContent: "",
        filtered: false,
        loading: false
    },

    onLoad() {
        if (app.globalData.openid) {
            this.setData({
                openid: app.globalData.openid
            });
            this.queryTodoList();
        } else {
            _my.showLoading({
                title: "正在初始化..."
            });

            app.getUserOpenIdViaCloud()
                .then(openid => {
                    this.setData({
                        openid
                    });

                    _my.hideLoading();

                    this.queryTodoList();
                    return openid;
                })
                .catch(err => {
                    console.error(err);

                    _my.hideLoading();

                    _my.showToast({
                        icon: "none",
                        title: "初始化失败，请检查网络"
                    });
                });
        }
    },

    onShow() {
        if (this.data.openid) {
            this.queryTodoList();
        }
    },

    createTodo() {
        if (this.data.loading) {
            return;
        }

        const { newContent } = this.data;

        if (!newContent) {
            return;
        }

        this.setData({
            loading: true
        });

        const db = _my.cloud.database();

        db.collection("todos").add({
            data: {
                description: newContent,
                done: false
            },
            success: res => {
                // 在返回结果中会包含新创建的记录的 _id
                this.setData({
                    todoList: [
                        ...this.data.todoList,
                        {
                            _id: res._id,
                            _openid: this.data.openid,
                            description: newContent,
                            done: false
                        }
                    ],
                    newContent: ""
                });

                _my.showToast({
                    title: "新增记录成功"
                });

                console.log("[数据库] [新增记录] 成功，记录 _id: ", res._id);
            },
            fail: err => {
                _my.showToast({
                    icon: "none",
                    title: "新增记录失败"
                });

                console.error("[数据库] [新增记录] 失败：", err);
            },
            complete: () => {
                this.setData({
                    loading: false
                });
            }
        });
    },

    queryTodoList() {
        _my.showLoading({
            title: "正在查询..."
        });

        const db = _my.cloud.database();

        db.collection("todos")
            .where({
                _openid: this.data.openid
            })
            .get({
                success: res => {
                    this.setData({
                        todoListFetched: true,
                        todoList: res.data,
                        filtered: false
                    });
                    console.log("[数据库] [查询记录] 成功: ", res);
                },
                fail: err => {
                    _my.showToast({
                        icon: "none",
                        title: "查询记录失败"
                    });

                    console.error("[数据库] [查询记录] 失败：", err);
                },
                complete: () => {
                    _my.hideLoading();
                }
            });
    },

    searchTodo() {
        const { searchContent } = this.data;

        if (!searchContent) {
            this.queryTodoList();
            return;
        }

        const db = _my.cloud.database();

        let descriptionCondition = searchContent;
        const execResult = /^\/([\s\S]*)\//.exec(searchContent);

        if (execResult) {
            const reStr = execResult[1].trim().replace(/\s+/g, "|");
            descriptionCondition = db.RegExp({
                regexp: reStr
            });
        }

        _my.showLoading({
            title: "正在查询..."
        });

        db.collection("todos")
            .where({
                _openid: this.data.openid,
                description: descriptionCondition
            })
            .get({
                success: res => {
                    this.setData({
                        todoList: res.data,
                        filtered: true
                    });
                    console.log("[数据库] [查询记录] 成功: ", res);
                },
                fail: err => {
                    _my.showToast({
                        icon: "none",
                        title: "查询记录失败"
                    });

                    console.error("[数据库] [查询记录] 失败：", err);
                },
                complete: () => {
                    _my.hideLoading();
                }
            });
    },

    toggleComplete(e) {
        if (this.data.loading) {
            return;
        }

        const { id: todoId, index } = e.currentTarget.dataset;
        const todo = this.data.todoList[index];
        this.setData({
            loading: true
        });

        const db = _my.cloud.database();

        db.collection("todos")
            .doc(todoId)
            .update({
                data: {
                    done: !todo.done
                },
                success: () => {
                    this.setData({
                        [`todoList[${index}].done`]: !todo.done
                    });
                },
                fail: err => {
                    _my.showToast({
                        icon: "none",
                        title: "更新失败"
                    });

                    console.error("[数据库] [更新记录] 失败：", err);
                },
                complete: () => {
                    this.setData({
                        loading: false
                    });
                }
            });
    },

    toDetail(e) {
        const { id: todoId } = e.currentTarget.dataset;

        _my.navigateTo({
            url: `/page/cloud/pages/crud-detail/crud-detail?todoId=${todoId}`
        });
    },

    onInputSearchContent(e) {
        this.setData({
            searchContent: e.detail.value
        });
    },

    onInputNewContent(e) {
        this.setData({
            newContent: e.detail.value
        });
    }
});
