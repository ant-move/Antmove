const RenderMD = {
    render (...p) {
        return p.join('');
    },
    h1 (text) {
        return '# ' + text + '\n';
    },
    h2 (text) {
        return '## ' + text + '\n';
    },
    h3 (text) {
        return '### ' + text + '\n';
    },
    h4 (text) {
        return '#### ' + text + '\n';
    },
    h5 (text) {
        return '##### ' + text + '\n';
    },
    table (header = [], content = []) {
        let _str = '';
        let _border = '';

        header.forEach(function (text) {
            if (!_str) {
                _str += '| ';
                _border += '| ';
            }
            _str += text;
            _str += ' |';

            _border += ' :---- |';
        });

        _str += '\n';
        _border += '\n';
        _str += _border;

        content.forEach(function (text ,index) {
            if (content.length > 0) {
                _str += '| ';
            }
            _str += text;
            let isMultiple = !((index+1) % header.length) ;
            if (isMultiple) {
                _str += ' |';
                _str += '\n';
            }
        });
        _str += '\n';

        return _str;
    },
    a (text, link) {
        return `[${text}](${link})`;
    },
    img (link, alt) {
        return `[${alt}](${link})`;
    },
    list (items = []) {
        let _str = '';

        items.forEach(function (item) {
            _str += '* ' + item + '\n';
        });

        return _str + '\n';
    }
};

module.exports = RenderMD;