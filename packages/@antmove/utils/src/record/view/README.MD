# 蚂蚁搬家工具日志页面数据说明

### data.js

#### 说明
data.js是用于记录日志页面展示数据的js,工具在运行过程中，将转码的结果放到这个js中，在转码结束后，我们就可以通过页面直观的查看工具转码的具体结果了
#### 字段说明

| pageData的key值 | 类型 | 说明 |
| --- | --- |--- |
| concept | object |编译结果汇总对象 |
| surroundings | object | 编译的环境信息 |
| transforms | object | 工具处理过文件（主要用于及记录每个文件的处理详情） |
| opening  | object | 处理开放能力的结果 |

#### concept说明

| concept的key值 | 类型 | 说明 |
| --- | --- |--- |
| modelAll | number | 处理文件总数 |
| completely | number | 完全转换数 |
| partial | number | 部分转换数 |
| notsupport  | number | 不支持数 |

例如：
```javascript

const pageData = {
    concept: {
        modelAll: 30,
        completely: 18,
        partial: 11,
        notsupport: 1
    }
}

```
#### surroundings说明

| surroundings的key值 | 类型 | 说明 |
| --- | --- |--- |
| pcSystem | object | 蚂蚁搬家运行的系统信息 |
| nodeVersion | object | nodejs版本信息 |
| version | object | 搬家工具的版本信息 |

以上的参数都是对象，对象有效值有两个：

| key值 | 类型 | 说明 |
| --- | --- |--- |
| name | string | key的含义 |
| val | string | 对应的值 |

例：
```javascript
const pageData = {
    surroundings: {
        pcSystem: {
            name: "系统",
            val: 'mac'
        },
        nodeVersion: {
            name: "nodejs",
            val: '10.0.1'
        },
        version: {
            name: "版本",
            val: '1.0.1'
        },
    }
}
```

#### transforms说明
transforms对象比较特殊，我们将已经处理的文件的路径作为key值，文件的处理详细信息作为值保存；如工具处理了pages/index/index.js,在transforms对象里就生成key为pages/index/index.js的对象
```javascript
{
    'pages/index/index.js': {
         name: 'page/index/index.js',
            type: "jsModular",
            status: 1,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest'],
                    doc: 'https://baidu.com'
                }
            ]
    }
}
```
对应的值为一个对象，用于记录每个文件的基本信息：
| 值的key | 类型 | 说明 |
| --- | --- |--- |
| type | string | 记录处理文件的类型，值有五个有效值：1."jsModular":js文件；2."wxssModular":样式文件；3."templete":模板文件；4."jsonModular":json文件模板；5."otherModular":其他文件 |
| status | number | 处理的程度：值有三个：1/2/3,1：完成，2：文件存在部分兼容部分，需要注意；3：文件中有不支持的组件或者api，注意修改 |
| components | Array | 记录每个文件出现不支持的组件、api等详细信息 |

关于components，他是一个对象数组，对象的包括：

| key | 类型 | 说明 |
| --- | --- |--- |
| name | string | 不支持的组件或者API名称 |
| attrs | string | 不支持的组件属性或者API的支持程度 |
| doc | string | 详细的说明文档地址 |

例如：
```javascript
const pageData = {
    transforms: {
        'page/index/index.js': {
            type: "jsModular",
            status: 1,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest'],
                    doc: 'https://docs.alipay.com/mini/component/canvas'
                }
            ]
        }
    }
}
```

#### opening说明
开放能力的处理结果是一个对象，key值依然是处理的开放能力，对应的值就是处理结果，如处理了开放能力wx.login,就记录一个key为"wx.login"的数据；

```javascript
{
    'wx.login': {
        path: "page/index/index.js",
        idear: "支付宝登录最佳实践",
        status: 2
    }
}
```
对应的值说明：

| key | 类型 | 说明 |
| --- | --- |--- |
| path | string | 出现开放能力的地址 |
| idear | string | 开发者需要去做的方案 |
| status | number | 支持情况：值有1/2/3,1：支持，2：部分支持，3：不支持 |

如：
```javascript
const pageData = {
    opening: {
        'wx.login': {
            path: "page/index/index.js",
            idear: "支付宝登录最佳实践",
            status: 2
        }
    }
}
```

综合案例：

```javascript
var pageData = {
    concept: {
        modelAll: 30,
        completely: 18,
        partial: 11,
        notsupport: 1
    },

    surroundings: {
        pcSystem: {
            name: "系统",
            val: 'mac'
        },
        nodeVersion: {
            name: "nodejs",
            val: '10.0.1'
        },
        version: {
            name: "版本",
            val: '1.0.1'
        },
    },

    transforms: {
        'page/index/index.js': {
            type: "jsModular",
            status: 1,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest'],
                    doc: 'https://docs.alipay.com/mini/component/canvas'
                }
            ]
        },
       
        'page/index/index.wcss': {
            type: "wxssModular",
            status: 2,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest','data'],
                    doc: 'https://docs.alipay.com/mini/component/canvas'
                }
            ]
        },
       
        'page/index/index.wxml': {
            type: "templete",
            status: 3,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest'],
                    doc: 'https://docs.alipay.com/mini/component/canvas'
                }
            ]
        },
       
        'page/index/base.js': {
            type: "jsModular",
            status: 1,
            components: [
                {
                    name: 'canvas',
                    attrs: ['contest'],
                    doc: 'https://docs.alipay.com/mini/component/canvas'
                }
            ]
        }
    },
    opening: {
        'wx.login': {
            path: "page/index/index.js",
            idear: "支付宝登录最佳实践",
            status: 2
        }
    }
};
```













