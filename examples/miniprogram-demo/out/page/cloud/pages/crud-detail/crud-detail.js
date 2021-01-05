const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/crud-detail/crud-detail"
    }
});
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
        todoId: "",
        description: "",
        done: false,
        updating: false,
        deleting: false
    },

    onLoad(options) {
        const { todoId } = options;
        this.setData({
            todoId
        });

        if (app.globalData.openid) {
            this.setData({
                openid: app.globalData.openid
            });
            this.queryTodo();
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

                    this.queryTodo();
                    return openid;
                })
                .catch(err => {
                    console.error(err);

                    _my.hideLoading();
                });
        }
    },

    queryTodo() {
        _my.showLoading({
            title: "正在查询..."
        });

        const db = _my.cloud.database();

        db.collection("todos")
            .doc(this.data.todoId)
            .get({
                success: res => {
                    this.setData({
                        description: res.data.description,
                        done: res.data.done
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

    updateTodo() {
        if (this.data.updating || !this.data.todoId) {
            return;
        }

        const { todoId, description } = this.data;

        if (!description) {
            return;
        }

        this.setData({
            updating: true
        });

        const db = _my.cloud.database();

        db.collection("todos")
            .doc(todoId)
            .update({
                data: {
                    description
                },
                success: () => {
                    console.log("he");

                    _my.showToast({
                        title: "更新成功"
                    });

                    _my.navigateBack();
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
                        updating: false
                    });
                }
            });
    },

    removeTodo() {
        if (this.data.deleting || !this.data.todoId) {
            return;
        }

        const { todoId } = this.data;
        this.setData({
            deleting: true
        });

        const db = _my.cloud.database();

        db.collection("todos")
            .doc(todoId)
            .remove({
                success: () => {
                    _my.showToast({
                        title: "删除成功"
                    });

                    _my.navigateBack();
                },
                fail: err => {
                    _my.showToast({
                        icon: "none",
                        title: "删除失败"
                    });

                    console.error("[数据库] [删除记录] 失败：", err);
                },
                complete: () => {
                    this.setData({
                        deleting: false
                    });
                }
            });
    },

    onInputContent(e) {
        this.setData({
            description: e.detail.value
        });
    }
});
