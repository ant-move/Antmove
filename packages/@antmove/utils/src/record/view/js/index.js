'use strict'

  

/* eslint-disable no-undef */
window.onload = function() {
  pageLoad() // 初始化页面

  fileInfo() // 页面转换详情

  maskClose() // 关闭弹窗
}

function pageLoad() {
  projectResult()
  concepteleMade() // 汇总
  temelatetable()
  openingMade()
  supportiveness()
  footerMade()
}
// 汇总
function concepteleMade() {
  let conceptele = ''
  conceptele = `<div class="itembox">\n                    <div class="topname">\u603B\u6570</div>\n                    <div class="botval">${pageData.concept.modelAll}</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u5B8C\u5168\u8F6C\u6362<i class="iconfont icon-zhengque"></i></div>\n                    <div class="botval">${pageData.concept.completely}</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u90E8\u5206\u8F6C\u6362<i class="iconfont icon-warning"></i></div>\n                    <div class="botval">${pageData.concept.partial}</div>\n                </div>\n                <div class="itembox">\n                    <div class="topname">\u4E0D\u652F\u6301<i class="iconfont icon-cuowu"></i></div>\n                    <div class="botval">${pageData.concept.notsupport}</div>\n                </div>`
  const circleBox = document.querySelector('.rep-allbox')
  circleBox.innerHTML = conceptele
}

function fileDetails(templete, type) {
  const liItemObj = {
    templete: '模板文件',
    jsonModular: 'json文件',
    otherModular: '其他文件',
    jsModular: '脚本文件',
    wxssModular: '样式文件',
    modularWxs: '自定义脚本',
    unsupported: '不支持文件',
    supportPart: '部分支持',
  }
  let keyArr = Object.keys(templete)
  if (keyArr.length === 0) {
    return false
  }
  const tabBox = document.querySelector('.tab-box')
  const ulBox = tabBox.querySelector('.ul')
  const firstLi = ulBox.querySelectorAll('li')[0]
  if (firstLi) {
    firstLi.classList.add('actived')
  }
  const liItem = document.createElement('li')
  liItem.classList.add('tab-item')
  liItem.setAttribute('data-type', type)
  liItem.innerHTML = liItemObj[type]

  ulBox.appendChild(liItem)
  const cardBox = tabBox.querySelector('.card-box')
  const firstCard = cardBox.querySelectorAll('.table-info')[0]
  if (firstCard) {
    firstCard.classList.add('actived')
  }
  const tableInfo = document.createElement('div')
  tableInfo.classList.add('table-info')
  tableInfo.classList.add(type)

  const table = document.createElement('table')
  table.classList.add('table')
  const thead = document.createElement('thead')
  thead.classList.add('table-head')
  thead.innerHTML = '<tr class="pages">\n                            <th>\u6587\u4EF6\u8DEF\u5F84</th>\n                            <th>\u8F6C\u6362\u7ED3\u679C</th>\n                        </tr>'
  const tbody = document.createElement('tbody')
  let tbodyData = ''
  let unsupportedNum = 0

  // 排序
  const warningArr = []
  const errorArr = []
  const successArr = []
  keyArr.forEach((key) => {
    if (templete[key].status === 1) {
      successArr.push(key)
    } else if (templete[key].status === 2) {
      warningArr.push(key)
    } else if (templete[key].status === 3) {
      errorArr.push(key)
    }
  })

  keyArr = errorArr.concat(warningArr).concat(successArr)

  let spanColor = 'warn'
  keyArr.forEach((key) => {
    let icon = ''
    if (templete[key].status === 1) {
      icon = '<i class="iconfont icon-zhengque"></i>'
    } else if (templete[key].status === 2) {
      icon = '<i class="iconfont icon-warning"></i>'
    } else if (templete[key].status === 3) {
      icon = '<i class="iconfont icon-cuowu"></i>'
    }

    tbodyData = `${tbodyData}<tr>\n                        <td class="file-path">\n                            ${key}\n                        </td>\n                        \n                        <td class="apges">\n                            ${icon}\n                        </td>\n                    </tr>`

    if (templete[key].supportType && templete[key].supportType !== 1) {
      unsupportedNum++
    }

    if (templete[key].supportType === 3) {
      spanColor = 'err'
    }
  })

  tbody.innerHTML = tbodyData
  const span = document.createElement('span')
  span.classList.add('num')

  liItem.appendChild(span)
  unsupportedNum = unsupportedNum || ''
  spanColor = unsupportedNum ? spanColor : 'none'
  span.innerHTML = unsupportedNum
  span.classList.add(spanColor)
  table.appendChild(thead)
  table.appendChild(tbody)
  tableInfo.appendChild(table)
  cardBox.appendChild(tableInfo)

  liItem.addEventListener('click', () => {
    ulBox.querySelectorAll('li').forEach((ele) => {
      ele.classList.remove('actived')
    })

    cardBox.querySelectorAll('.table-info').forEach((ele) => {
      ele.classList.remove('actived')
    })

    const cardName = liItem.getAttribute('data-type')
    cardBox.querySelector(`.${cardName}`).classList.add('actived')
    liItem.classList.add('actived')
  })
}

function openingMade() {
  const openingData = pageData.opening
  const keyArr = Object.keys(openingData)
  if (keyArr.length === 0) {
    return false
  }
  const tabBox = document.querySelector('.tab-box')
  const ulBox = tabBox.querySelector('.ul')
  const firstLi = ulBox.querySelectorAll('li')[0]
  if (firstLi) {
    firstLi.classList.add('actived')
  }
  const liItem = document.createElement('li')

  const span = document.createElement('span')
  span.classList.add('num')
  liItem.classList.add('tab-item')
  liItem.setAttribute('data-type', 'openability')
  liItem.innerHTML = '开放能力'

  ulBox.appendChild(liItem)
  const cardBox = tabBox.querySelector('.card-box')
  const firstCard = cardBox.querySelectorAll('.table-info')[0]
  if (firstCard) {
    firstCard.classList.add('actived')
  }
  const tableInfo = document.createElement('div')
  tableInfo.classList.add('table-info')
  tableInfo.classList.add('openability')

  const table = document.createElement('table')
  table.classList.add('table')
  const thead = document.createElement('thead')
  thead.classList.add('table-head')
  thead.innerHTML = '<tr>\n                            <th>\u80FD\u529B\u540D\u79F0</th>\n                            <th>\u9875\u9762\u8DEF\u5F84</th>\n                            <th>\u5982\u4F55\u89E3\u51B3</th>\n                            <th>\u8F6C\u6362\u7ED3\u679C</th>\n                        </tr>'
  const tbody = document.createElement('tbody')
  let tbodyData = ''

  let unsupportedNum = 0
  let spanColor = 'warn'
  // 排序
  const zhengqueArr = keyArr.filter((key) => {
    return openingData[key].status === 1
  })

  const warningArr = keyArr.filter((key) => {
    return openingData[key].status === 2
  })

  const cuowuArr = keyArr.filter((key) => {
    return openingData[key].status === 3
  })

  const newKeyArr = cuowuArr.concat(warningArr, zhengqueArr)

  newKeyArr.forEach((key) => {
    let icon = ''
    if (openingData[key].status === 1) {
      icon = '<i class="iconfont icon-zhengque"></i>'
    } else if (openingData[key].status === 2) {
      icon = '<i class="iconfont icon-warning"></i>'
    } else if (openingData[key].status === 3) {
      icon = '<i class="iconfont icon-cuowu"></i>'
    }

    tbodyData = `${tbodyData}<tr>\n                        <td>${key}</td>\n                        <td>${openingData[key].pathArr.join('、')}</td>\n                        <td>\n                            <div class="show-instruct" data-path="${openingData[key].docpath}">\n                                \u67E5\u770B\u76F8\u5173\u80FD\u529B\n                            </div>\n                        </td>\n                        \n                        <td class="apges">\n                            ${icon}\n                        </td>\n                    </tr>`
    if (openingData[key].status !== 1) {
      unsupportedNum++
    }
    if (openingData[key].status === 3) {
      spanColor = 'err'
    }
  })

  unsupportedNum = unsupportedNum || ''
  spanColor = unsupportedNum ? spanColor : 'none'
  span.innerText = unsupportedNum
  span.classList.add(spanColor)
  liItem.appendChild(span)

  tbody.innerHTML = tbodyData

  table.appendChild(thead)
  table.appendChild(tbody)
  tableInfo.appendChild(table)
  cardBox.appendChild(tableInfo)

  liItem.addEventListener('click', () => {
    ulBox.querySelectorAll('li').forEach((ele) => {
      ele.classList.remove('actived')
    })

    cardBox.querySelectorAll('.table-info').forEach((ele) => {
      ele.classList.remove('actived')
    })

    cardBox.querySelector('.openability').classList.add('actived')
    liItem.classList.add('actived')

    cardBox.querySelectorAll('.show-instruct').forEach((ele) => {
      ele.addEventListener('click', () => {
        const path = ele.getAttribute('data-path')
        window.location.href = path
      })
    })
  })
}

function supportiveness() {
  const supportPart = {}
  const unsupported = {}
  Object.keys(pageData.transforms).forEach((key) => {
    if (pageData.transforms[key].status === 2) {
      supportPart[key] = pageData.transforms[key]
    }

    if (pageData.transforms[key].status === 3) {
      unsupported[key] = pageData.transforms[key]
    }
  })
  fileDetails(supportPart, 'supportPart')
  fileDetails(unsupported, 'unsupported')
}

function temelatetable() {
  const templete = {}
  const jsModular = {}
  const wxssModular = {}
  const jsonModular = {}
  const modularWxs = {}
  const otherModular = {}
  for (const key in pageData.transforms) {
    if (pageData.transforms[key].type === 'templete') {
      templete[key] = Object.assign({}, pageData.transforms[key])
      templete[key].supportType = templete[key].status
    } else if (pageData.transforms[key].type === 'jsModular') {
      jsModular[key] = Object.assign({}, pageData.transforms[key])
      jsModular[key].supportType = jsModular[key].status
    } else if (pageData.transforms[key].type === 'wxssModular') {
      wxssModular[key] = Object.assign({}, pageData.transforms[key])
      wxssModular[key].supportType = wxssModular[key].status
    } else if (pageData.transforms[key].type === 'jsonModular') {
      jsonModular[key] = Object.assign({}, pageData.transforms[key])
      jsonModular[key].supportType = jsonModular[key].status
    } else if (pageData.transforms[key].type === 'otherModular') {
      otherModular[key] = Object.assign({}, pageData.transforms[key])
      otherModular[key].supportType = otherModular[key].status
    } else if (pageData.transforms[key].type === 'modularWxs') {
      modularWxs[key] = Object.assign({}, pageData.transforms[key])
      modularWxs[key].supportType = modularWxs[key].status
    }
  }
  fileDetails(templete, 'templete')
  fileDetails(jsModular, 'jsModular')
  fileDetails(wxssModular, 'wxssModular')
  fileDetails(jsonModular, 'jsonModular')
  fileDetails(otherModular, 'otherModular')
  fileDetails(modularWxs, 'modularWxs')
}

function fileInfo() {
  const mask = document.querySelector('.mask')
  const maskTitle = mask.querySelector('.title')
  const pagePath = document.querySelectorAll('.file-path')
  const tableBox = mask.querySelector('.table-box')
  pagePath.forEach((ele) => {
    ele.addEventListener('click', () => {
      if (pageData.transforms[ele.innerText].type === 'templete') {
        tableBox.querySelector('#col1').innerText = '组件名'
        tableBox.querySelector('#col2').innerText = '不支持'
      } else if (pageData.transforms[ele.innerText].type === 'jsModular') {
        tableBox.querySelector('#col1').innerText = 'api/生命周期'
        tableBox.querySelector('#col2').innerText = '不支持的部分(参数/返回值)'
      } else if (pageData.transforms[ele.innerText].type === 'otherModular') {
        if (ele.innerText.indexOf('.js') !== -1) {
          tableBox.querySelector('#col1').innerText = 'api/生命周期'
          tableBox.querySelector('#col2').innerText = '不支持的部分(参数/返回值)'
        } else {
          tableBox.querySelector('#col1').style = 'display:none'
          tableBox.querySelector('#col2').style = 'display:none'
          tableBox.querySelector('#col3').style = 'display:none'
        }
      } else if (pageData.transforms[ele.innerText].type === 'jsonModular') {
        tableBox.querySelector('#col1').innerText = '属性名称'
        tableBox.querySelector('#col2').innerText = '支持程度'
        if (ele.innerText === 'app.json') {
          tableBox.querySelector('#col2').innerText = '不支持子属性'
        }
      }

      maskTitle.innerText = ele.innerText
      const myTbody = tableBox.querySelector('tbody')
      if (pageData.transforms[ele.innerText].components.length > 0) {
        pageData.transforms[ele.innerText].components.forEach((item) => {
          const newtr = document.createElement('tr')
          let newtrStr = ''
          let opations = ''
          item.attrs.forEach((its) => {
            opations += `<div class="opation-item">\n                                        ${its}\n                                    </div>`
          })

          if (item.doc) {
            if (item.doc !== '无') {
              newtrStr += `<td class="name">\n                                    ${item.name}\n                                </td>\n                                <td class="opations">\n                                    ${opations}\n                                </td>\n                                <td class="result" path="${item.doc}">\n                                    \u5E2E\u52A9\u6587\u6863\n                                </td>`
            } else {
              newtrStr += `<td class="name">\n                                    ${item.name}\n                                </td>\n                                <td class="opations">\n                                    ${opations}\n                                </td>\n                                <td class="unsupported" path="">\n                                    \u6682\u4E0D\u652F\u6301\uFF0C\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F\n                                </td>`
            }
          } else {
            newtrStr += `<td class="name">\n                                    ${item.name}\n                                </td>\n                                <td class="opations">\n                                    ${opations}\n                                </td>\n                                <td class="unsupported">\n                                   \u6682\u4E0D\u652F\u6301\uFF0C\u8BF7\u5C1D\u8BD5\u5176\u4ED6\u5B9E\u73B0\u65B9\u5F0F\n                                </td>`
          }
          newtr.innerHTML = newtrStr

          myTbody.appendChild(newtr)
        })
      } else {
        let newtrStr = ''
        const newtr = document.createElement('tr')
        newtrStr = '<td class="name" colspan="3">\n                                \u5B8C\u6574\u652F\u6301\n                                </td>'
        newtr.innerHTML = newtrStr
        myTbody.appendChild(newtr)
      }

      mask.classList.remove('hide')

      const helpDoc = mask.querySelectorAll('.result')
      helpDoc.forEach((_ele) => {
        _ele.addEventListener('click', function() {
          const path = this.getAttribute('path')
          window.open(path)
        })
      })
    })
  })
}

function maskClose() {
  const mask = document.querySelector('.mask')
  const tableBox = mask.querySelector('.table-box')
  mask.querySelector('.close').addEventListener('click', () => {
    tableBox.querySelector('table').innerHTML = '<thead>\n                                                        <tr>\n                                                            <th class="name header" id="col1">\u7EC4\u4EF6\u540D</th>\n                                                            <th class="opations header"  id="col2">\u4E0D\u652F\u6301</th>\n                                                            <th class="result header"  id="col3">\u5982\u4F55\u89E3\u51B3</th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                    </tbody>'
    mask.classList.add('hide')
  })
}

function projectResult() {
  const myProject = document.querySelector('#project')
  const surroundings = {}
  let tableInfo = ''
  for (const key in pageData.surroundings) {
    if (pageData.surroundings.hasOwnProperty(key)) {
      surroundings[pageData.surroundings[key].name] = pageData.surroundings[key].val
    }
  }
  pageData.tableInfo = Object.assign(pageData.tableInfo, surroundings)

  Object.keys(pageData.tableInfo).forEach((key) => {
    tableInfo = `${tableInfo}<tr>\n                                    <td class="text-left">\n                                        ${key}\n                                    </td>\n                                    <td class="text-right">\n                                        ${pageData.tableInfo[key]}\n                                    </td>\n                                </tr>`
  })
  myProject.querySelector('tbody').innerHTML = tableInfo
}

function footerMade() {
  document.querySelector('.foot-cont').innerText = `Power by Antmove v${pageData.toolVs}`
}
