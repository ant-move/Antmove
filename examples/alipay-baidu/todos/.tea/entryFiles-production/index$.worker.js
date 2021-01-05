/*BUGME_START*/
const __BUGME_START__ = 1;
(()=>{let CircularJSON=JSON;const originalAddEventListener=self.addEventListener,replacer=(e,t)=>void 0===t?"©undefined":null===t?"©null":t===-1/0?"©- Infinity":t===1/0?"©Infinity":"number"==typeof t&&isNaN(t)?"©NaN":"function"==typeof t?"©function":t;try{CircularJSON=eval('(function(JSON,RegExp){var specialChar="~",safeSpecialChar="\\\\x"+("0"+specialChar.charCodeAt(0).toString(16)).slice(-2),escapedSafeSpecialChar="\\\\"+safeSpecialChar,specialCharRG=new RegExp(safeSpecialChar,"g"),safeSpecialCharRG=new RegExp(escapedSafeSpecialChar,"g"),safeStartWithSpecialCharRG=new RegExp("(?:^|([^\\\\\\\\]))"+escapedSafeSpecialChar),indexOf=[].indexOf||function(v){for(var i=this.length;i--&&this[i]!==v;);return i},$String=String;function generateReplacer(value,replacer,resolve){var doNotIgnore=false,inspect=!!replacer,path=[],all=[value],seen=[value],mapp=[resolve?specialChar:"[Circular]"],last=value,lvl=1,i,fn;if(inspect){fn=typeof replacer==="object"?function(key,value){return key!==""&&replacer.indexOf(key)<0?void 0:value}:replacer}return function(key,value){if(inspect)value=fn.call(this,key,value);if(doNotIgnore){if(last!==this){i=lvl-indexOf.call(all,this)-1;lvl-=i;all.splice(lvl,all.length);path.splice(lvl-1,path.length);last=this}if(typeof value==="object"&&value){if(indexOf.call(all,value)<0){all.push(last=value)}lvl=all.length;i=indexOf.call(seen,value);if(i<0){i=seen.push(value)-1;if(resolve){path.push((""+key).replace(specialCharRG,safeSpecialChar));mapp[i]=specialChar+path.join(specialChar)}else{mapp[i]=mapp[0]}}else{value=mapp[i]}}else{if(typeof value==="string"&&resolve){value=value.replace(safeSpecialChar,escapedSafeSpecialChar).replace(specialChar,safeSpecialChar)}}}else{doNotIgnore=true}return value}}function retrieveFromPath(current,keys){for(var i=0,length=keys.length;i<length;current=current[keys[i++].replace(safeSpecialCharRG,specialChar)]);return current}function generateReviver(reviver){return function(key,value){var isString=typeof value==="string";if(isString&&value.charAt(0)===specialChar){return new $String(value.slice(1))}if(key==="")value=regenerate(value,value,{});if(isString)value=value.replace(safeStartWithSpecialCharRG,"$1"+specialChar).replace(escapedSafeSpecialChar,safeSpecialChar);return reviver?reviver.call(this,key,value):value}}function regenerateArray(root,current,retrieve){for(var i=0,length=current.length;i<length;i++){current[i]=regenerate(root,current[i],retrieve)}return current}function regenerateObject(root,current,retrieve){for(var key in current){if(current.hasOwnProperty(key)){current[key]=regenerate(root,current[key],retrieve)}}return current}function regenerate(root,current,retrieve){return current instanceof Array?regenerateArray(root,current,retrieve):current instanceof $String?current.length?retrieve.hasOwnProperty(current)?retrieve[current]:retrieve[current]=retrieveFromPath(root,current.split(specialChar)):root:current instanceof Object?regenerateObject(root,current,retrieve):current}var CircularJSON={stringify:function stringify(value,replacer,space,doNotResolve){return CircularJSON.parser.stringify(value,generateReplacer(value,replacer,!doNotResolve),space)},parse:function parse(text,reviver){return CircularJSON.parser.parse(text,generateReviver(reviver))},parser:JSON};return CircularJSON})(JSON,RegExp)')}catch(e){console.error(e)}const OriginalFunction=Function,OriginalFetch=self.fetch,OriginalBridgeCall=self.AlipayJSBridge&&self.AlipayJSBridge.call,callInternalAPI=(e,t)=>{const n={data:{method:e,param:t},action:"internalAPI"},o=encodeURIComponent(JSON.stringify(n));OriginalFetch?OriginalFetch(`https://alipay.kylinBridge/?data=${o}`,{mode:"no-cors"}).then(()=>{}).catch(()=>{}):OriginalBridgeCall("internalAPI",{method:e,param:t})},eventHandler=e=>{try{if(e.fromVConsoleToWorker){const{requestId:t}=e;if("exec"===e.method){const n=e=>callInternalAPI("tinyDebugConsole",{type:"msgFromWorkerToVConsole",content:CircularJSON.stringify({requestId:t,returnValue:e},replacer)});try{new OriginalFunction("requestId","sendBack",`\n              var res = ${e.script};\n              console.log(res);\n            `)(t,n)}catch(e){console.error(`${e.name}:${e.message}`)}}}}catch(e){}};setTimeout(()=>{self.document&&self.document.addEventListener("push",e=>{try{eventHandler(JSON.parse(e.data.param.content))}catch(e){}}),originalAddEventListener&&originalAddEventListener("push",e=>{try{const t=JSON.parse(JSON.parse(e.data.text()).param.data.content);eventHandler(t)}catch(e){}})},10),["log","info","error","debug","warn"].forEach(e=>{const t=`o${e}`;console[t]||(console[t]=console[e],console[e]=(...n)=>{let o;console[t](...n);try{o=CircularJSON.stringify(n.map(e=>e instanceof Error?`${e.name}: ${e.message}`:e),replacer)}catch(e){return void console.error(`${e.name}: ${e.message}`)}callInternalAPI("tinyDebugConsole",{content:o,type:`console_${e}`})})})})();
const __BUGME_END__ = 1;
/*BUGME_END*/if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../components/add-button/add-button');
require('../../pages/index/index');
require('../../pages/todos/todos');
require('../../pages/add-todo/add-todo');
require('../../pages/animation/animation');
require('../../pages/map/map');
require('../../pages/file/file');
require('../../pages/lifeCircle/lifeCircle');
require('../../pages/form/form');
require('../../pages/chooseAddress/chooseAddress');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}