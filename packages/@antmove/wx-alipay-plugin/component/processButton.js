module.exports = function(ast, fileInfo) {
  if (ast.type === 'icon') {
    processTypeAttrStyle(ast, 'icon')
  }
  if (ast.type !== 'button') {
    return false
  }

  processTypeAttrStyle(ast)
}

function processTypeAttrStyle(ast, prefix = '') {
  /**
   * type style
   */

  if (ast.props.type) {
    if (!ast.props.class) {
      ast.props.class = {
        type: 'unknown',
        value: [''],
      }
    }

    ast.props.class.value[0] += ` ${prefix}${ast.props.type.value[0]}-style`
  }

  if (ast.props.size) {
    if (!ast.props.class) {
      ast.props.class = {
        type: 'unknown',
        value: [''],
      }
    }

    ast.props.class.value[0] += ` ${ast.props.size.value[0]}-style`
  }
}
