const singleLabels =[
    'input',
    'textarea',
    'switch'
];
module.exports = function (type) {
    if (singleLabels.includes(type)) {
        return true;
    } 
    return false;
};
