module.exports = ({types: t}) => ({
    visitor: {
        CallExpression (path) {
            if (
                t.isIdentifier(path.node.callee, {name: 'require'}) &&
          t.isStringLiteral(path.node.arguments[0]) &&
          path.node.arguments.length === 1
            ) {
                const program = path.findParent(t.isProgram);
                const dependencyName = path.node.arguments[0].value;
  
                // Scenario:
                // var foo = require('bar')
  
                if (
                    t.isVariableDeclarator(path.parentPath.node) &&
            t.isIdentifier(path.parentPath.node.id)
                ) {
                    const assignedName = path.parentPath.node.id.name;
  
                    if (t.isVariableDeclaration(path.parentPath.parentPath.node)) {
                        const importName = path.scope.generateUidIdentifier(assignedName);
                        program.node.body.unshift(
                            t.importDeclaration(
                                [t.importDefaultSpecifier(
                                    importName
                                )],
                                t.stringLiteral(dependencyName)
                            )
                        );
                        path.parentPath.node.init = importName;
                    }
                }
  
                // Scenario:
                // var foo = require('bar').baz;
                // TODO: Support chained member expressions like require('foo').bar.baz.lol
  
                else if (
                    t.isMemberExpression(path.parentPath.node, {computed: false})
                ) {
                    const memberExpressionPath = path.parentPath;
                    const propertyName = memberExpressionPath.node.property;
  
                    if (
                        t.isVariableDeclarator(memberExpressionPath.parentPath.node) &&
              t.isIdentifier(memberExpressionPath.parentPath.node.id)
                    ) {
                        const variableDeclarator = memberExpressionPath.parentPath.node;
                        const assignedName = memberExpressionPath.parentPath.node.id;
  
                        if (t.isVariableDeclaration(memberExpressionPath.parentPath.parentPath.node)) {
                            const importName = path.scope.generateUidIdentifierBasedOnNode(assignedName);
  
                            variableDeclarator.init = importName;
  
                            program.node.body.unshift(
                                t.importDeclaration(
                                    [t.importSpecifier(
                                        importName,
                                        propertyName
                                    )],
                                    t.stringLiteral(dependencyName)
                                )
                            );
                        }
                    }
                }
            }
        },
  
        MemberExpression (path) {
            if (
                t.isIdentifier(path.node.object, {name: 'module'}) &&
          t.isIdentifier(path.node.property, {name: 'exports'})
            ) {
                if (
                    t.isAssignmentExpression(path.parentPath.node) &&
            t.isExpressionStatement(path.parentPath.parentPath.node)
                ) {
                    const assignmentExpression = path.parentPath;
  
                    // Scenario:
                    // module.exports = require('foo');
  
                    if (
                        t.isCallExpression(assignmentExpression.node.right) &&
              t.isIdentifier(assignmentExpression.node.right.callee, {name: 'require'}) &&
              t.isStringLiteral(assignmentExpression.node.right.arguments[0]) &&
              assignmentExpression.node.right.arguments.length === 1
                    ) {
                        assignmentExpression.parentPath.replaceWith(
  
                            // Output:
                            // export { default } from 'foo'
  
                            t.exportNamedDeclaration(
                                null,
                                [t.exportSpecifier(
                                    t.identifier('default'),
                                    t.identifier('default')
                                )],
                                assignmentExpression.node.right.arguments[0]
                            )
  
                            // Output:
                            // export * from 'foo'
  
                            // t.exportAllDeclaration(
                            //   assignmentExpression.node.right.arguments[0]
                            // )
                        );
                    }
  
                    // Scenario:
                    // module.exports = bar;
  
                    else if (t.isExpression(assignmentExpression.node.right)) {
                        assignmentExpression.parentPath.replaceWith(
                            t.exportDefaultDeclaration(
                                assignmentExpression.node.right
                            )
                        );
                    }
                }
  
                else if (
                    t.isMemberExpression(path.parentPath.node)
                ) {
                    const subMemberExpression = path.parentPath;
                    const namedExport = subMemberExpression.node.property;
  
                    if (
                        t.isAssignmentExpression(subMemberExpression.parentPath.node) &&
              t.isExpressionStatement(subMemberExpression.parentPath.parentPath.node)
                    ) {
                        const assignmentExpression = subMemberExpression.parentPath;
  
                        // Scenario:
                        // module.exports.foo = require('bar');
  
                        if (
                            t.isCallExpression(assignmentExpression.node.right) &&
                t.isIdentifier(assignmentExpression.node.right.callee, {name: 'require'}) &&
                t.isStringLiteral(assignmentExpression.node.right.arguments[0]) &&
                assignmentExpression.node.right.arguments.length === 1
                        ) {
                            assignmentExpression.parentPath.replaceWith(
                                t.exportNamedDeclaration(
                                    null,
                                    [t.exportSpecifier(
                                        t.identifier('default'),
                                        namedExport
                                    )],
                                    assignmentExpression.node.right.arguments[0]
                                )
                            );
                        }
  
                        // Scenario:
                        // module.exports.foo = bar;
  
                        else if (t.isExpression(assignmentExpression.node.right)) {
                            assignmentExpression.parentPath.replaceWith(
                                t.exportNamedDeclaration(
                                    t.variableDeclaration(
                                        'var',
                                        [t.variableDeclarator(
                                            namedExport,
                                            assignmentExpression.node.right
                                        )]
                                    ),
                                    []
                                )
                            );
                        }
                    }
                }
            }
  
            else if (
                t.isIdentifier(path.node.object, {name: 'exports'}) &&
          t.isAssignmentExpression(path.parentPath.node)
            ) {
                const assignmentExpression = path.parentPath;
                const namedExport = path.node.property;
  
                // Scenario:
                // exports.foo = require('bar');
  
                if (
                    t.isCallExpression(assignmentExpression.node.right) &&
            t.isIdentifier(assignmentExpression.node.right.callee, {name: 'require'}) &&
            t.isStringLiteral(assignmentExpression.node.right.arguments[0]) &&
            assignmentExpression.node.right.arguments.length === 1
                ) {
                    assignmentExpression.parentPath.replaceWith(
                        t.exportNamedDeclaration(
                            null,
                            [t.exportSpecifier(
                                t.identifier('default'),
                                namedExport
                            )],
                            assignmentExpression.node.right.arguments[0]
                        )
                    );
                }
          
                else if (t.isExpression(assignmentExpression.node.right)) {
  
                    // Scenario:
                    // exports.default = bar;
  
                    if (t.isIdentifier(namedExport, {name: 'default'})) {
                        assignmentExpression.parentPath.replaceWith(
                            t.exportDefaultDeclaration(
                                assignmentExpression.node.right
                            )
                        );
                    }
  
                    // Scenario:
                    // exports.foo = bar;
  
                    else {
                        assignmentExpression.parentPath.replaceWith(
                            t.exportNamedDeclaration(
                                t.variableDeclaration(
                                    'var',
                                    [t.variableDeclarator(
                                        namedExport,
                                        assignmentExpression.node.right
                                    )]
                                ),
                                []
                            )
                        );
                    }
                }
            }
        }
    }
});
  