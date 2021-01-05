module.exports = function(ast, coverViewTest) {
  let children = []
  const alowwedArr = ['cover-view', 'cover-image', 'textContent']
  testCoverView(ast, children)
  children = [...new Set(children)]
  if (children.length > 0) {
    Object.keys(coverViewTest).forEach((key) => {
      const componentsData = {}
      componentsData.name = 'cover-view'
      componentsData.attrs = []
      children.forEach((ele) => {
        if (alowwedArr.indexOf(ele) === -1) {
          componentsData.attrs.push(`子组件不支持 ${ele} `)
          if (coverViewTest[key].status !== 3) {
            coverViewTest[key].status = 3
          }
          coverViewTest[key].components.push(componentsData)
        }
      })
    })
  }
}

function testCoverView(ast, children) {
  if (ast && ast instanceof Array) {
    ast.forEach((item) => {
      let times = 0
      if (item.type && item.type.indexOf('cover-view') !== -1) {
        times++
      }
      if (times > 0) {
        if (item.children && item.children[0]) {
          findChildEles(item.children[0], children)
        }
      } else if (item.children && item.children[0]) {
        testCoverView(item.children[0], children)
      }
    })
  }
}

function findChildEles(arr, children) {
  if (arr && arr instanceof Array) {
    arr.forEach((item) => {
      if (item.type) {
        children.push(item.type)
      }
      if (item.children && item.children[0]) {
        findChildEles(item.children[0], children)
      }
    })
  }
}
