module.exports = function (originCode) {
    if (/\s*Behavior/.test(originCode)||/=Behavior/.test(originCode)) {

        originCode = `function Behavior (behavior) {
            return behavior;
        }\n ${originCode} ` ;
        
    }


    return originCode;
};

 