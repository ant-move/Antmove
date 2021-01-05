const fs = require('fs')
const path = require('path')
const open = require('open')
const { useReducer } = require('@amove/next')
const globalconfig = require('../../compiler/config/jsonInfo/globalconfig')
const pageconfig = require('../../compiler/config/jsonInfo/pageconfig')
const components = require('../../compiler/config/componentsInfo/index')
const apis = require('../../compiler/config/apiInfo/index')
const openAbility = require('../../compiler/config/apiInfo/openAbility')
const lifeCycleInfo = require('../../compiler/config/lifeCycleInfo')
// const packagepath = path.join(__dirname,'../../../../package.json');
const { report } = require('../reportMethods')

const config = {
  isShow: true,
  pagePath: '/', // /代表项目根目录
  globalconfig,
  pageconfig,
  components,
  apis,
  openAbility,
  lifeCycleInfo,
  // packagepath
}

useReducer({
  compilerLog(node, store) {
    const { _type = '', opts = {} } = node.body
    config.isShow = store.config.env === 'development'
    this.addChild({
      type: _type,
      body: {
        config,
        ...opts,
      },
    })
  },

  // 运行环境
  getSurrounding(node, store) {
    if (!config.isShow) {
      return false
    }
    const result = {
      pcSystem: {
        name: '系统',
        val: process.platform,
      },
      nodeVersion: {
        name: 'nodejs',
        val: process.version,
      },
    }
        
    store.repData.surroundings = result
  },

  getTemplateData(node, store) {
    const { config, fileInfo } = node.body
    const progectname = path.basename(store.config.entry)
    if (!config.isShow) {
      return {}
    }
    const result = {}
    result.type = 'templete'
    result.components = []
    let projectPath = ''
    let pagePath = ''
    if (progectname) {
      pagePath = fileInfo.path.split(progectname)[1] && fileInfo.path.split(progectname)[1].replace(/\\/g, '/').substr(1)
    } else if (fileInfo.path.indexOf('pages') !== -1) {
      projectPath = fileInfo.path.split('pages')[0]
      pagePath = fileInfo.path.split(projectPath)[1].replace(/\\/g, '/')
    } else {
      projectPath = fileInfo.path.split('components')[0]
      pagePath = fileInfo.path.split(projectPath)[1].replace(/\\/g, '/')
    }
    result.status = 1
    fileInfo.ast.forEach((item) => {
      const eleName = item.type
      // 查找规则
      const componentObj = {
        name: '',
        attrs: [],
        doc: '',
      }
      if (config.components.descObject[eleName]) {
        componentObj.name = eleName
        try {
          componentObj.doc = config.components.descObject[eleName].url.alipay || config.components.descObject[eleName].url.target
        } catch (err) {
          componentObj.doc = ''
        }
        for (const key in item.props) {
          const propsObj = config.components.descObject[eleName].props || {}
          const props = propsObj[key]
          if (props && props.status === 2) {
            result.status = 2
            componentObj.attrs.push(key)
          }
        }
                

        // 组件不支持
        if (config.components.descObject[eleName].status === 2) {
          result.status = 3
          componentObj.attrs = ['不支持此组件']
          componentObj.name = eleName
        }
      }
      if (componentObj.attrs.length > 0) {
        let flag = false
        result.components.forEach((item) => {
          if (item.name === eleName) {
            flag = true
            item.attrs = [...new Set(item.attrs.concat(componentObj.attrs))]
          }
        })
        if (!flag) {
          result.components.push(componentObj)
        }
      }
    })
    if (pagePath) {
      const obj = {}
      obj[pagePath] = result
      store.repData.transforms = Object.assign(store.repData.transforms, obj)
    }
  },

  getStyleData(node, store) {
    let { config, pathInfo } = node.body
    if (!config.isShow) {
      return {}
    }
    const result = {}
    result.type = 'wxssModular'
    result.components = []
    pathInfo = pathInfo.replace(/\\/g, '/')
    const pathArr = pathInfo.split('/')
    pathArr.shift()
        
    const pagePath = pathArr.join('/')
        
    result.status = 1
    const obj = {}
    obj[pagePath] = result
    store.repData.transforms = Object.assign(store.repData.transforms, obj)
  },

  statistics(node, store) {
    const { config } = node.body
    const transforms = store.repData.transforms
    if (!config.isShow) {
      return false
    }
    const result = {
      modelAll: 0,
      completely: 0,
      partial: 0,
      notsupport: 0,
    }
    for (const key in transforms) {
      result.modelAll++
      if (transforms[key].status === 1) {
        result.completely++
      } else if (transforms[key].status === 2) {
        result.partial++
      } else {
        result.notsupport++
      }
    }
    store.repData.concept = result
  },

  getScriptData(node, store) {
    let { config, pathInfo, apiObj, wxoriginCode, projectType = 'wx' } = node.body
    if (!config.isShow) {
      return {}
    }
        
    const result = {}
    result.openData = []
    result.status = 1
    result.components = []
    pathInfo = pathInfo.replace(/\\/g, '/')
    const pathArr = pathInfo.split('/')
    pathArr.shift()
    const pagePath = pathArr.join('/')
    if (pagePath === 'app.js') {
      const appLifeArr = getLife(wxoriginCode, 0, config)
      makeLifeData(appLifeArr, 0, result, config)
    }
    // page页面
    if (wxoriginCode.indexOf('Page') !== -1) {
      const pageLifeArr = getLife(wxoriginCode, 1, config)
      makeLifeData(pageLifeArr, 1, result, config)
    }

    if (wxoriginCode.indexOf('Component') !== -1) {
      const compLifeArr = getLife(wxoriginCode, 2, config)
      makeLifeData(compLifeArr, 2, result, config)
    }
    result.type = 'jsModular'
    Object.keys(apiObj).forEach((item) => {
      if (testOpenAbility(item, config)) {
        const opreult = {}
        opreult[`${projectType}.${item}`] = {
          path: pagePath,
          idear: '查看相关文档',
          docpath: config.openAbility[item].alipay || config.openAbility[item].url.target || config.openAbility[item].url.original,
          status: config.openAbility[item].status + 1,
        }
        result.isopen = true
        result.openData.push(opreult)
        return false
      }
            
      const apiresilt = {}
      apiresilt.attrs = []
      try {
        apiresilt.doc = config.apis.descObject[item].url.alipay || config.apis.descObject[item].url.target
      } catch (err) {
        apiresilt.doc = ''
      }
            
      if (config.apis.descObject[item] && config.apis.descObject[item].status === 1) {
        apiresilt.name = `${projectType}.${item}`
        const params = config.apis.descObject[item].body.params || {}
        const propskey = params.props || {}
        const defectArr = []
        const differenceArr = []
        Object.keys(propskey).forEach((prop) => {
          if (propskey[prop].type === 0) {
            defectArr.push(prop)
          } else if (propskey[prop].type !== 7) {
            differenceArr.push(prop)
          }
        })
                
                
        defectArr.length > 0 && apiresilt.attrs.push(`参数${defectArr.join('、')} 缺失`)
        differenceArr.length > 0 && apiresilt.attrs.push(`参数${differenceArr.join('、')} 存在差异`)

        const returnVal = config.apis.descObject[item].body.returnValue || {}
        const returnpropskey = returnVal.props || {}
    
        const retdDefectArr = []
        const retDefectArr = []

        Object.keys(returnpropskey).forEach((prop) => {
          if (returnpropskey[prop].type === 0) {
            retDefectArr.push(prop)
          } else if (returnpropskey[prop].type !== 7) {
            retdDefectArr.push(prop)
          }
        })
                
        retDefectArr.length > 0 && apiresilt.attrs.push(`返回值${retDefectArr.join('、')} 缺失`)
        retdDefectArr.length > 0 && apiresilt.attrs.push(`返回值${retdDefectArr.join('、')} 存在差异`)

        const msg = config.apis.descObject[item].body.msg

        if (apiresilt.attrs.length === 0 && msg) {
          apiresilt.attrs = [msg]
        } else if (apiresilt.attrs.length === 0) {
          apiresilt.attrs = ['部分支持']
        }

        result.components.push(apiresilt)
        if (result.status !== 3) {
          result.status = 2
        }
      } else if (config.apis.descObject[item] && config.apis.descObject[item].status === 2) {
        apiresilt.name = `${projectType}.${item}`
        apiresilt.attrs = ['不支持']
        result.status = 3
        result.components.push(apiresilt)
      }
    })

    const returnData = {}
    returnData[pagePath] = result
    store.repData.transforms = Object.assign(store.repData.transforms, returnData)
  },

  getJsonData(node, store) {
    let { config, pathInfo, content } = node.body
    if (!config.isShow) {
      return false
    }
    const result = {}
    result.type = 'jsonModular'
    result.components = []

    const contentData = JSON.parse(content)
    Object.keys(contentData).forEach((key) => {
      if (pathInfo.indexOf('project.config.json') !== -1) {
        return false
      }
      if (contentData[key]) {
        if (!config.pageconfig[key] || config.pageconfig[key].type === 7) {
          return false
        }
        if (pathInfo.indexOf('pages') !== -1) {
          const jsonData = {
            name: key,
            attrs: [],
            doc: config.pageconfig[key].url.wechat || config.pageconfig[key].url.original,
          }
          if (config.pageconfig[key].status === 2) {
            jsonData.attrs = ['属性不支持']
            result.components.push(jsonData)
          }
        } else {
          // app.json

          if (!config.globalconfig[key] || config.globalconfig[key].type === 7) {
            return false
          }
          const jsonData = {
            name: key,
            attrs: [],
            doc: config.globalconfig[key].url.wechat || config.pageconfig[key].url.original,
          }
          if (config.pageconfig[key].status === 2) {
            jsonData.attrs = ['属性不支持']
            result.components.push(jsonData)
          } else if (config.pageconfig[key].status === 1) {
            if (config.pageconfig[key].props) {
              Object.keys(config.pageconfig[key].props).map((prop) => {
                jsonData.attrs.push(prop)
              })
              result.components.push(jsonData)
            }
          }
        }
      }
    })
        

    pathInfo = pathInfo.replace(/\\/g, '/')
    const pathArr = pathInfo.split('/')
    pathArr.shift()
    const pagePath = pathArr.join('/')
    result.status = 1
    if (result.components.length > 0) {
      result.status = 2
    }

    // 全部不支持
    if (Object.keys(contentData).length === result.components.length && Object.keys(contentData).length !== 0) {
      result.status = 3
    }

    const obj = {}
    obj[pagePath] = result
    store.repData.transforms = Object.assign(store.repData.transforms, obj)
  },

  getOthersFile(node, store) {
    let { url, config } = node.body
    if (!config.isShow) {
      return {}
    }
    const result = {}
    result.type = 'otherModular'
    result.components = []
    url = url.replace(/\\/g, '/')
    result.status = 1
    const obj = {}
    obj[url] = result
    store.repData.transforms = Object.assign(store.repData.transforms, obj)
  },

  writeReportPage(node, store) {
    const { config, distpath, beginTime } = node.body
    const project = store.repProject
    if (!config.isShow) {
      return false
    }
    const tableInfo = {
      项目名称: project.name,
      项目路径: project.path,
      输出路径: project.distPath,
      文件数: String(project.fileNum),
      页面数: String(project.pageNum),
      组件数: String(project.componentNum),
    }
    const nowTime = report(beginTime, {
      showReport: true,
      type: 'computedTime',
    })
    tableInfo['总耗时'] = `${nowTime}ms`
    store.repData.tableInfo = tableInfo
    const dayastr = `let pageData = ${JSON.stringify(store.repData)}`
    const local = path.join(distpath.replace(/\\/g, '/').split('/.config.json')[0])
    const htmlPath = path.join(local, config.pagePath, 'report')
    let dataPath = ''
    const viewPath = path.join(__dirname, './view')
    if (fs.existsSync(htmlPath)) {
      exists(viewPath, htmlPath, copyDir)
    } else {
      fs.mkdirSync(htmlPath)
      exists(viewPath, htmlPath, copyDir)
    }
    dataPath = path.join(htmlPath, 'js', 'data.js')

    if (fs.existsSync(dataPath)) {
      fs.unlinkSync(dataPath)
    }
    fs.writeFileSync(dataPath, dayastr)
    console.log('即将打开日志页面...')
    openBower(local, config)
  },

  findOpenAbility(node, store) {
    const { config, dataType = 'wx' } = node.body
    const repData = store.repData
    if (!config.isShow) {
      return false
    }
    let openArr = []
    for (const key in repData.transforms) {
      if (repData.transforms[key].isopen) {
        openArr = openArr.concat(repData.transforms[key].openData)
      }
    }
    const result = {}
    Object.keys(config.openAbility).forEach((item) => {
      const pathArr = []
      openArr.forEach((its) => {
        if (its[`${dataType}.${item}`]) {
          pathArr.push(its[`${dataType}.${item}`].path)
        }
      })
      if (pathArr.length > 0) {
        result[`${dataType}.${item}`] = {
          pathArr,
          idear: '查看相关文档',
          docpath: config.openAbility[item].url.alipay || config.openAbility[item].url.target || config.openAbility[item].url.original,
          status: config.openAbility[item].status + 1,
        }
      }
    })
        
        
    store.repData.opening = result
  },
    
  getCustomScript(pathInfo) {
    if (!config.isShow) {
      return {}
    }
    const result = {}
    result.type = 'modularWxs'
    result.components = []
    pathInfo = pathInfo.replace(/\\/g, '/')
    const pathArr = pathInfo.split('/')
    pathArr.shift()
        
    const pagePath = pathArr.join('/')
        
    result.status = 1
    const obj = {}
    obj[pagePath] = result
    return obj
  },

  getToolVs(node, store) {
    const vsPath = path.join(__dirname, '../../package.json')
    if (fs.existsSync(vsPath)) {
      store.repData.toolVs = JSON.parse(fs.readFileSync(vsPath)).version
    }
  },

  resDataInit(node, store) {
    store.repData.transforms = {}
    const wd = store.config.preAppData.appJson.window
    const name = wd ? wd.navigationBarTitleText : path.basename(store.config.entry)
    store.repProject = {
      name,
      path: store.config.entry,
      distPath: store.config.dist,
      fileNum: 0,
      pageNum: 0,
      componentNum: 0,
      usetime: '',
    }
  },
})

function testOpenAbility(api, config) {
  if (config.openAbility[api]) {
    return true
  }
  return false
}

function copyDir(src, dst) {
  // 读取目录中的所有文件/目录
  const paths = fs.readdirSync(src)
     

  paths.forEach((path) => {
    const _src = `${src}/${path}`
    const _dst = `${dst}/${path}`
    let readable
    let writable

    const st = fs.statSync(_src)

    // 判断是否为文件
    if (st.isFile()) {
      // 创建读取流
      readable = fs.createReadStream(_src)
      // 创建写入流
      writable = fs.createWriteStream(_dst)
      // 通过管道来传输流
      readable.pipe(writable)
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      exists(_src, _dst, copyDir)
    }
  })
}

function exists(src, dst, callback) {
  const exists = fs.existsSync(dst)
  if (exists) {
    callback(src, dst)
  }
  // 不存在
  else {
    fs.mkdirSync(dst)
    callback(src, dst)
  }
}

async function openBower(distpath, config) {
  const pageUrl = path.join(distpath, config.pagePath, 'report/index.html')
  // Opens the url in the default browser
  await open(pageUrl)
}

function getLife(wxoriginCode, num, config) {
  let resultArr = []
  const lifeArr = Object.keys(config.lifeCycleInfo.lifeInfo[num].body)
  lifeArr.forEach((its) => {
    const reg = eval(`/\\w*${its}\\w*/g;`)
    const larr = wxoriginCode.match(reg) || []
    resultArr = resultArr.concat(larr)
  })
  const appLifeArr = []
  resultArr.forEach((item) => {
    if (lifeArr.indexOf(item) !== -1) {
      appLifeArr.push(item)
    }
  })

  return [...new Set(resultArr)]
}

function makeLifeData(lifeArr, num, result, config) {
  lifeArr.forEach((key) => {
    const body = config.lifeCycleInfo.lifeInfo[num].body[key]
    const lifeResilt = {}

    if (body && body.status === 1) {
      try {
        lifeResilt.doc = body.url.alipay || body.url.wechat || body.url.target
      } catch (err) {
        lifeResilt.doc = ''
      }

      lifeResilt.name = key
     
      lifeResilt.attrs = []
      const defectArrattrs = []
      const retdDefectArr = []
      Object.keys(body.body.returnValue.props).forEach((prop) => {
        if (body.body.returnValue.props[prop].type === 0) {
          defectArrattrs.push(prop)
        } else if (body.body.returnValue.props[prop].type !== 7) {
          retdDefectArr.push(prop)
        }
        if (result.status !== 3) {
          if (body.status === 1) {
            result.status = 2
          }
                     
          if (body.status === 2) {
            result.status = 3
          }
        }
      })


      defectArrattrs.length > 0 && lifeResilt.attrs.push(`参数${defectArrattrs.join('、')} 缺失`)
      retdDefectArr.length > 0 && lifeResilt.attrs.push(`参数${retdDefectArr.join('、')} 存在差异`)

      if (lifeResilt.attrs.length === 0) {
        lifeResilt.attrs = ['部分支持']
      }
           
      result.components.push(lifeResilt)
    } else if (body && body.status === 2) {
      try {
        lifeResilt.doc = body.url.alipay || body.url.wechat || body.url.target
      } catch (err) {
        lifeResilt.doc = ''
      }
      lifeResilt.name = key
      lifeResilt.attrs = ['不支持']
      result.components.push(lifeResilt)
    }
  })
}

