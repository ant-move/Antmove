const path = require('path')
const fs = require('fs-extra')
const parseTpl = require('../../parse/parse')

const customComponent = {}

module.exports = function(fileInfo) {
  return scopeStyle(fileInfo)
}

/**
 *
 * @param {*} fileInfo - 对应的 wxml 文件信息
 */
function scopeStyle(fileInfo) {
  const dirname = fileInfo.dirname.split(path.sep).pop()
  const basename = fileInfo.basename
  let classPrefix = ''
  let classPrefixDisplay = 'block'
  const componentName = `${dirname}-${basename}`

  function setClassName(_componentName) {
    const bool = customComponent[_componentName]
    if (!bool) {
      classPrefix = _componentName
    } else {
      let str = String(Number(new Date()))
      str = `-${str.substr(0, 2)}`
      _componentName += setClassName(_componentName + str)
    }

    return _componentName
  }

  classPrefix = setClassName(componentName)

  let _ast = parseTpl.parseString(`
    <view class='${classPrefix} {{className}}' style='{{style}}'></view>
    `)

  /**
   * isComponent
   */
  if (isComponent(fileInfo)) {
    const tplPath = `${fileInfo.dirname}/${fileInfo.basename}.wxml`
    const ast = parseTpl.parseFile(tplPath)
    let bool = true

    ast.forEach((node) => {
      if (node && node.props && node.props['unscope-style']) {
        bool = false
        delete node.props['unscope-style']
      }

      if (node && node.props && node.props['is-inline']) {
        const inlineStyle = {
          'inline-block': 'inline-block',
          'inline-flex': 'inline-flex',
          inline: 'inline',
        }
        classPrefixDisplay
          = inlineStyle[node.props['is-inline'].value[0]] || 'inline-block'
        _ast = parseTpl.parseString(`
        <view class='${classPrefix} {{className}}' style="{{style}}"></view>
        `)
        delete node.props['is-inline']
      }
    })

    if (!bool) {
      return false
    }
    // _ast[0].props.class.value.push("{{className}}");
    _ast[0].children = [ast]
    // let originClass = prop.class;
    // ast.forEach(function (node) {
    //     /**
    //      * 忽略非容器标签
    //      */
    //     let tagObj = {
    //         wxs: true,
    //         include: true
    //     };

    //     if (tagObj[ast.type]) return false;
    //     node.props = node.props || {};
    //     node.props.class = node.props.class || prop.class;
    //     originClass = JSON.parse(JSON.stringify(node.props.class));

    //     node.props.class.value[0] = node.props.class.value[0].split(/\s+/)
    //         .map((classname) =>{
    //             return classname + '-' + classPrefix;
    //         });
    //     node.props.class.value[0] = node.props.class.value[0].join(' ');

    //     node.props.class.value[0] = node.props.class.value[0] + ' ' + classPrefix;
    // });

    fileInfo.ast = _ast
    // originClass.classPrefix = classPrefix;
    return {
      classPrefix,
      classPrefixDisplay,
    }
  }
  return false
}

function isComponent(fileInfo) {
  const jsonPath = `${fileInfo.dirname}/${fileInfo.basename}.json`

  if (!fs.pathExistsSync(jsonPath)) {
    return false
  }
  const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
  return jsonContent.component
}
