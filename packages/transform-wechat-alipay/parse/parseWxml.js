/* eslint-disable */

const fs = require('fs');
const P = require('parsimmon');

const lTagArrow = P.string('<');
const rTagArrow = P.string('>');
const endLine = P.string('/');
const doubleQuote = P.string('"');
const singleQuote = P.string("'");
const whitespaces = P.regex(/\s*/).desc('whitespaces');
const Wxml = P.createLanguage({
    Symbol: function () {
        return P.regexp(/[a-zA-Z_-][a-zA-Z0-9_-]*/).desc("symbol");
    },
    StringExpression: function () {
        return P.regexp(/[^<]+/);
    },
    singleQuoteString: function () {
        return P.seqMap(
            singleQuote,
            P.regexp(/[^']*/),
            singleQuote,
            function (r1, r2, r3) {
                return {
                    type: 'single',
                    value: [r2]
                };
            }
        )
    },
    doubleQuoteString: function () {
        return P.seqMap(
            doubleQuote,
            P.regexp(/[^"]*/),
            doubleQuote,
            function (r1, r2, r3) {
                return {
                    type: 'double',
                    value: [r2]
                };
            }
        )
    },
    // Note that Number("10") === 10, Number("9") === 9, etc in JavaScript.
    // This is not a recursive parser. Number(x) is similar to parseInt(x, 10).
    Number: function () {
        return P.regexp(/[0-9]+/)
            .map(Number)
            .desc("number");
    },
    Attr: function () {
        return P.regexp(/[\w-:]+/);
    },
    Attribute: function () {
        return P.seqMap(
            Wxml.Attr,
            P.optWhitespace,
            P.string('='),
            P.optWhitespace,
            Wxml.singleQuoteString
            .or(Wxml.doubleQuoteString),
            whitespaces,
            function (...r) {
                return [r[0], r[4]];
            }
        )
        .or(P.seqMap(
            Wxml.Attr,
            whitespaces,
            function (r1, r2) {
                return [r1, null]
            }
        ));
    },
    ClosingElement: function (r) {
        return P.seqMap(
            lTagArrow,
            r.Symbol,
            whitespaces,
            Wxml.Attribute.many(),
            whitespaces,
            endLine,
            rTagArrow,
            function (r1, r2, r3, r4, r5, r6, r7) {
                let _prop = {};
                r4.forEach(function (el) {
                    _prop[el[0]] = el[1];
                });

                return {
                    typeof: 'wxml.element',
                    key: null,
                    props: _prop,
                    type: r2.toLowerCase()
                };
            }
        )
    },
    textElement: function () {
        return P.seqMap(
            P.optWhitespace,
            // P.string('{{'),
            P.regexp(/[^<]+/),
            P.optWhitespace,
            // P.string('}}'),
            function (...r) {
                return {
                    typeof: 'wxml.element',
                    key: null,
                    value: r[1],
                    type: 'textContent'
                }
            }
        );
    },
    OpeningElement: function (r) {
        return P.seqMap(
            lTagArrow,
            r.Symbol,
            whitespaces,
            Wxml.Attribute.many(),
            whitespaces,
            rTagArrow,
            Wxml.Element.atLeast(1)
                .or(Wxml.StringExpression.or(whitespaces)),
            lTagArrow,
            whitespaces,
            endLine,
            r.Symbol,
            whitespaces,
            rTagArrow,
            function (r1, r2, r3, r4, r5, r6, r7) {
                let _prop = {};
                r4.forEach(function (el) {
                    _prop[el[0]] = el[1];
                });

                return {
                    typeof: 'wxml.element',
                    key: null,
                    props: _prop,
                    type: r2.toLowerCase(),
                    children: r7
                };
            }
        )
    },
    Element: function (r) {
        return P.seqMap(
            whitespaces,
            Wxml.CommentElement.many(),
            // P.seqMap(
            //     Wxml.CommentElement,
            //     P.any,
            //     P.string('-->'),
            //     function (r) {
            //         return r;
            //     }
            // ).many(),
            whitespaces,
            Wxml.ClosingElement
                .or(Wxml.OpeningElement)
                .or(Wxml.textElement),
            whitespaces,
            function (r1, r2, r3, r4, r5) {
                return r4;
            }
        ).atLeast(1);
    },
    CommentElement: function (r) {

        let anyString = P.any.notFollowedBy(P.string('-->'));
        return P.seqMap(
            P.string('<!--'),
            anyString.many(),
            function (...r) {
                return {
                    typeof: 'wxml.Element',
                    type: 'comment',
                    value: r
                };
            }
        )
    },
    newComment: function (r) {
        let anyString = P.any.notFollowedBy(P.seqMap(
            P.any,
            P.string('-->')
        ), function (...r) {
            return r.join('');
        });

        return P.seqMap(
            P.string('<!--'),
            P.optWhitespace,
            anyString.many(),
            P.optWhitespace,
            P.string('-->'),
            function (...r) {
                r[2] = r[2].join('');
                return {
                    typeof: 'wxml.Element',
                    type: 'comment',
                    value: r.join('')
                };
            }
        )
    }
});

function parseString (code) {
    if (!code) return [];
    return Wxml.Element.tryParse(code);
}

let code = `<!-- asdjks-d --jlksjd -->`

function parseFile (filename) {
    return parseString(fs.readFileSync(filename, 'utf8'));
}

module.exports = {
    parseString,
    parseFile
}
