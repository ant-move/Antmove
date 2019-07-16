module.exports = function (originCode) {
    if (/ Behavior/.test(originCode)||/=Behavior/.test(originCode)) {

        originCode = originCode.replace (/\.properties/g,".props");


        originCode = `function Behavior (behavior) {
            return behavior;
        }\n ${originCode} ` ;
        
    }


    return originCode;
};

 