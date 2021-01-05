# 数据类型

sjs 目前支持如下数据类型：

- **string**: 字符串
- **boolean**: 布尔值
- **number**: 数值
- **object**: 对象
- **function**: 函数
- **array**: 数组
- **date**: 日期
- **regexp**: 正则表达式

## 判断数据类型

sjs 提供了 constructor 与 typeof 两种方式判断数据类型。

### constructor

```javascript
const number = 10
console.log(number.constructor) // "Number"
const string = 'str'
console.log(string.constructor) // "String"
const boolean = true
console.log(boolean.constructor) // "Boolean"
const object = {}
console.log(object.constructor) // "Object"
const func = function() {}
console.log(func.constructor) // "Function"
const array = []
console.log(array.constructor) // "Array"
const date = getDate()
console.log(date.constructor) // "Date"
const regexp = getRegExp()
console.log(regexp.constructor) // "RegExp"
```

### typeof

```javascript
const num = 100
const bool = false
const obj = {}
const func = function() {}
const array = []
const date = getDate()
const regexp = getRegExp()
console.log(typeof num) // 'number'
console.log(typeof bool) // 'boolean'
console.log(typeof obj) // 'object'
console.log(typeof func) // 'function'
console.log(typeof array) // 'object'
console.log(typeof date) // 'object'
console.log(typeof regexp) // 'object'
console.log(typeof undefined) // 'undefined'
console.log(typeof null) // 'object'
```

## string

### 语法

```
'hello amap';
"hello taobao";
```

es6 语法

```javascript
// 字符串模板
const a = 'hello'
const str = `${a} amap`
```

### 属性

- `constructor`: 返回值  `"String"`
- `length`

> 除 constructor 外属性的具体含义请参考 ES5 标准。

### 方法

- toString
- valueOf
- charAt
- charCodeAt
- concat
- indexOf
- lastIndexOf
- localeCompare
- match
- replace
- search
- slice
- split
- substring
- toLowerCase
- toLocaleLowerCase
- toUpperCase
- toLocaleUpperCase
- trim

> 具体使用请参考 ES5 标准。

## number

### 语法

```javascript
const num = 10
const PI = 3.141592653589793
```

### 属性

- `constructor`: 返回值`"Number"`

### 方法

- toString
- toLocaleString
- valueOf
- toFixed
- toExponential
- toPrecision

> 具体使用请参考 ES5 标准。

## boolean

布尔值只有两个特定的值：true 和 false。

### 语法

```javascript
const a = true
```

### 属性

- `constructor`: 返回值`"Boolean"`

### 方法

- toString
- valueOf

> 具体使用请参考 ES5 标准。

## object

### 语法

```javascript
var o = {} // 生成一个新的空对象
// 生成一个新的非空对象
o = {
  str: 'str', // 对象的 key 可以是字符串
  constVar: 2, // 对象的 key 也可以是符合变量定义规则的标识符
  val: {}, // 对象的 value 可以是任何类型
}
// 对象属性的读操作
console.log(1 === o['string'])
console.log(2 === o.constVar)
// 对象属性的写操作
o['string']++
o['string'] += 10
o.constVar++
o.constVar += 10
// 对象属性的读操作
console.log(12 === o['string'])
console.log(13 === o.constVar)
```

es6 语法：

```javascript
// 支持
let a = 2
o = {
  a, // 对象属性
  b() {}, // 对象方法
}
const { a, b, c: d, e = 'default' } = { a: 1, b: 2, c: 3 } // 对象解构赋值 & default
const { a, ...other } = { a: 1, b: 2, c: 3 } // 对象解构赋值
const f = { ...others } // 对象解构
```

### 属性

- `constructor`: 返回值`"Object"`

```javascript
console.log('Object' === { a: 2, b: '5' }.constructor)
```

### 方法

- toString：返回字符串  `"[object Object]"`。

## function

### 语法

```javascript
// 方法 1：函数声明
function a(x) {
  return x
}
// 方法 2：函数表达式
var b = function(x) {
  return x
}
// 方法 3：箭头函数
const double = (x) => x * 2
function f(x = 2) {} // 函数参数默认
function g({ name: n = 'xiaoming', ...other } = {}) {} // 函数参数解构赋值
function h([a, b] = []) {} // 函数参数解构赋值
// 匿名函数、闭包
var c = function(x) {
  return function() {
    return x
  }
}
var d = c(25)
console.log(25 === d())
```

function 中可以使用 `arguments` 关键字。

```javascript
var a = function() {
  console.log(2 === arguments.length)
  console.log(1 === arguments[0])
  console.log(2 === arguments[1])
}
a(1, 2)
```

输出：

```
true
true
true
```

### 属性

- `constructor`: 返回值`"Function"`
- `length`：返回函数的形参个数

### 方法

- toString：返回字符串  `"[function Function]"`。

### 示例

```javascript
var f = function(a, b) {}
console.log('Function' === f.constructor)
console.log('[function Function]' === f.toString())
console.log(2 === f.length)
```

输出：

```
true
true
true
```

## array

### 语法

```javascript
var a = [] // 空数组
a = [5, '5', {}, function() {}] // 非空数组，数组元素可以是任何类型
const [b, , c, d = 5] = [1, 2, 3] // 数组解构赋值 & 默认值
const [e, ...other] = [1, 2, 3] // 数组解构赋值
const f = [...other] // 数组解构
```

### 属性

- `constructor`: 返回值`"Array"`
- `length`

> 除 constructor 外属性的具体含义请参考 ES5 标准。

### 方法

- toString
- concat
- join
- pop
- push
- reverse
- shift
- slice
- sort
- splice
- unshift
- indexOf
- lastIndexOf
- every
- some
- forEach
- map
- filter
- reduce
- reduceRight

> 具体使用请参考 ES5 标准。

## date

### 语法

生成 date 对象需要使用 `getDate` 函数, 返回一个当前时间的对象。

```javascript
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

### 参数

- `milliseconds`: 从 1970 年 1 月 1 日 00:00:00 UTC 开始计算的毫秒数
- `datestring`: 日期字符串，其格式为："month day, year hours:minutes:seconds"

### 属性

- `constructor`: 返回值`"Date"`

### 方法

- toString
- toDateString
- toTimeString
- toLocaleString
- toLocaleDateString
- toLocaleTimeString
- valueOf
- getTime
- getFullYear
- getUTCFullYear
- getMonth
- getUTCMonth
- getDate
- getUTCDate
- getDay
- getUTCDay
- getHours
- getUTCHours
- getMinutes
- getUTCMinutes
- getSeconds
- getUTCSeconds
- getMilliseconds
- getUTCMilliseconds
- getTimezoneOffset
- setTime
- setMilliseconds
- setUTCMilliseconds
- setSeconds
- setUTCSeconds
- setMinutes
- setUTCMinutes
- setHours
- setUTCHours
- setDate
- setUTCDate
- setMonth
- setUTCMonth
- setFullYear
- setUTCFullYear
- toUTCString
- toISOString
- toJSON

> 具体使用请参考 ES5 标准。

### 示例

```javascript
let date = getDate() //返回当前时间对象
date = getDate(1500000000000)
// Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)
date = getDate('2016-6-29')
// Fri June 29 2016 00:00:00 GMT+0800 (中国标准时间)
date = getDate(2017, 6, 14, 10, 40, 0, 0)
// Fri Jul 14 2017 10:40:00 GMT+0800 (中国标准时间)
```

## regexp

### 语法

生成 regexp 对象需要使用 getRegExp 函数。

```javascript
getRegExp(pattern[, flags])
```

### 参数

- pattern: 正则的内容。
- flags：修饰符。只能包含以下字符:

  - `g`: global
  - `i`: ignoreCase
  - `m`: multiline

### 属性

- constructor：返回字符串  `"RegExp"`。
- global
- ignoreCase
- lastIndex
- multiline
- source

> 除 constructor 外属性的具体含义请参考 ES5 标准。

### 方法

- exec
- test
- toString

> 具体使用请参考 ES5 标准。

### 示例

```javascript
var reg = getRegExp('name', 'img')
console.log('name' === reg.source)
console.log(true === reg.global)
console.log(true === reg.ignoreCase)
console.log(true === reg.multiline)
```
