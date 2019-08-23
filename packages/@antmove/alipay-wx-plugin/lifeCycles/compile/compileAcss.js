const fs = require('fs-extra');
const { prettierCode } = require('@antmove/utils');
const generateAppCssStyle = require('../../generate/generateApp.css.js');
const css = require('css');
const Base64 = require('js-base64').Base64;
const path = require('path');

module.exports = function (fileInfo, ctx) {
    fileInfo.dist = fileInfo.dist.replace(/\.acss/, '.wxss');
    let cssContent = fs.readFileSync(fileInfo.path, 'utf8') || '';
    cssContent = cssContent.replace(/\.acss"/g, '.wxss"');
    cssContent = cssContent.replace(/\..+\s+\*/, function (a) {
        a = a.trim().slice(0, a.length - 1);
        return a;
    });
    if (fileInfo.deep === 0 || fileInfo.filename === 'app.acss') {
        cssContent = generateAppCssStyle(cssContent, ctx.output);
    }

    cssContent = processUrl(cssContent, ctx, fileInfo);

    cssContent = prettierCode(cssContent, 'scss');
    fs.outputFileSync(fileInfo.dist, cssContent);
};

/**
 * process Css
 */
function processUrl (code, ctx) {
    let entry = ctx.entry;
    code = css.parse(code);
    let rules = code.stylesheet.rules;
    rules.forEach(el => {
        if (el.type === 'rule') {
            el.declarations
                .map(function (dec) {
                    if (dec.property === 'background' || dec.property === 'background-image') {
                        let reg = dec.value.match(/url\(['|"]*(\/.+)\)/);
                        
                        if (reg) {
                            let img = path.join(entry, reg[1]);
                            img = img.replace(/['|"]/, '');
                            try {
                                let str = fs.readFileSync(img, 'utf8');
                                let base64 = Base64.encode(str);
                                dec.value = dec.value.replace(/url\(['|"]*(\/.+)\)/, function (...$) {
                                    let type = $[1].split('.');
                                    type = type.pop();
                                    type = type.replace(/['|"]/, '');

                                    return `url(data:image/${type};base64,${base64})`;
                                });
                            } catch (err) {
                                console.error('[Error]: no such file, open ' + img);
                            }
                        }
                    }

                    return dec;
                });
        }
    });

    return css.stringify(code);
}