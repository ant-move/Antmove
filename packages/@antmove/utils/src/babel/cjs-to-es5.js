const template = require("@babel/template");
const defineHelper = template.program({ placeholderPattern: false });

/**
 * require语法转成import
 * @example
 * 微信端源码
 * const foo2 = require('./util.wxs');
 * const { foo3 } = require('./util.wxs');
 * const foo4 = require('./tool.wxs').add;
 *
 * 编译后
 *
 * import antmove_1_module from './util.sjs'
 * import antmove_2_module from './tool.sjs'
 *
 * const foo2 = antmove_1_module;
 * const { foo3 } = antmove_1_module;
 * const foo4 = antmove_2_module.baz;
 */
function requireToImport(body, deps) {
  let code = []

  for (let moduleName in deps) {
    code.push(`import ${deps[moduleName]} from '${moduleName}'`)
  }

  const importAst = defineHelper(code.join('\n'))();

  body.unshift.apply(body, importAst.body);
}

/**
 * module.exports编译成export default
 * @example
 * 微信端源码
 * module.exports = { add: add , bar: bar }
 * module.exports.msg = 'value'
 *
 * 编译后
 *
 * var _moduleExports = {}
 *
 * _moduleExports = { add: add , bar: bar }
 * _moduleExports.msg = 'value'
 *
 * export default _moduleExports
 */
function moduleExportsToExportDefault(body) {
  const defineVar = defineHelper(`var antmove_export = {}`)();
  const exportDefault = defineHelper("export default antmove_export;")();

  body.unshift.apply(body, defineVar.body);
  body.push.apply(body, exportDefault.body);
}

function cjsToes({ types: t }) {
  return {
    pre() {
      this.deps = {}
      this.depsCount = 1
    },
    visitor: {
      CallExpression(path) {
        let caller = path.get("callee");

        if (
          caller.isIdentifier() &&
          caller.node.name === "require" &&
          t.isStringLiteral(path.node.arguments[0])
        ) {
          const moduleName = path.node.arguments[0].value
          let moduleVariable = this.deps[moduleName]

          if (!moduleVariable) {
            moduleVariable = `antmove_${this.depsCount++}_module`
            this.deps[moduleName] = moduleVariable
          }

          path.replaceWith(t.Identifier(moduleVariable))
        }
      },
      MemberExpression(path) {
        // module.exports
        if (
          path.get("object.name").node === "module" &&
          path.get("property.name").node === "exports"
        ) {
          path.replaceWith(t.Identifier("antmove_export"));
        }
      },
    },
    post(state) {
      const body = state.ast.program.body

      requireToImport(body, this.deps)
      moduleExportsToExportDefault(body);
    },
  };
}

module.exports = cjsToes