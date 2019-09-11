const config = require('../config');

module.exports = function (ast, fileInfo) {
    let dev = config.isDev();
    if (ast.type === 'icon') processTypeAttrStyle(ast, 'icon');
    if (ast.type !== 'button') return false;

    processTypeAttrStyle(ast)
    /**
     * open-type UserInfo
     */
    let props = ast.props;
    if (props['open-type'] && (props.bindgetuserinfo || props.bindgetphonenumber)) {
        try {
            let compilePropsObj = {
                bindgetuserinfo: {
                    type: 'userInfo',
                    wrapFnName: 'getUserInfoWrap'
                },
                bindgetphonenumber: {
                    type: 'phoneNumber',
                    wrapFnName: 'getPhoneNumberWrap'
                }
            };

            Object.keys(props)
                .forEach(function (key) {
                    if (!compilePropsObj[key]) return false;
                    let val = props['open-type'].value[0];
            
                    let eventName = '';
                    let scopeType = compilePropsObj[key].type;
                    let propObj = props[key];
                    eventName = props[key].value[0];

                    fileInfo.tplInfo = fileInfo.tplInfo || {};
                    fileInfo.tplInfo.button = fileInfo.tplInfo.button || [];
                    fileInfo.tplInfo.button.push(
                        {
                            type: 'button',
                            'open-type': val,
                            bindFnName: eventName,
                            wrapFnName: compilePropsObj[key].wrapFnName,
                            scope: scopeType
                        }
                    );
                    fileInfo.parent.tplInfo = {
                        ...fileInfo.parent.tplInfo,
                        ...fileInfo.tplInfo
                    };
                    
                    if (!props['open-type'].value[0].match(/{{/g)) {
                        props['open-type'].value[0] = 'getAuthorize';
                    }
                   
                    props.onGetAuthorize = JSON.parse(JSON.stringify(propObj));
                    props.scope = JSON.parse(JSON.stringify(propObj));
                    props.scope.value[0] = scopeType;
                    delete props[key];
                });
        } catch (error) {
            if (!dev) return false;
            console.log('[generate button Error]: ', fileInfo.dist);
        }
    }
};

function processTypeAttrStyle (ast, prefix ='') {
    /**
     * type style
     */

    if (ast.props.type) {
        if (!ast.props.class) {
            ast.props.class = {
                type: 'unknown',
                value: ['']
            }
        }

        ast.props.class.value[0] += (' ' + prefix + ast.props.type.value[0] + '-style');
    }

    if (ast.props.size) {
        if (!ast.props.class) {
            ast.props.class = {
                type: 'unknown',
                value: ['']
            }
        }

        ast.props.class.value[0] += (' ' + ast.props.size.value[0] + '-style');
    }
}