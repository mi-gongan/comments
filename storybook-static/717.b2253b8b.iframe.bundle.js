/*! For license information please see 717.b2253b8b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[717],{"./node_modules/@base2/pretty-print-object/dist/index.js":function(__unused_webpack_module,exports){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};Object.defineProperty(exports,"__esModule",{value:!0});var seen=[];exports.prettyPrint=function prettyPrint(input,options,pad){void 0===pad&&(pad="");var tokens,combinedOptions=__assign(__assign({},{indent:"\t",singleQuotes:!0}),options);tokens=void 0===combinedOptions.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad,indent:pad+combinedOptions.indent}:{newLine:"@@__PRETTY_PRINT_NEW_LINE__@@",newLineOrSpace:"@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",pad:"@@__PRETTY_PRINT_PAD__@@",indent:"@@__PRETTY_PRINT_INDENT__@@"};var expandWhiteSpace=function(string){if(void 0===combinedOptions.inlineCharacterLimit)return string;var oneLined=string.replace(new RegExp(tokens.newLine,"g"),"").replace(new RegExp(tokens.newLineOrSpace,"g")," ").replace(new RegExp(tokens.pad+"|"+tokens.indent,"g"),"");return oneLined.length<=combinedOptions.inlineCharacterLimit?oneLined:string.replace(new RegExp(tokens.newLine+"|"+tokens.newLineOrSpace,"g"),"\n").replace(new RegExp(tokens.pad,"g"),pad).replace(new RegExp(tokens.indent,"g"),pad+combinedOptions.indent)};if(-1!==seen.indexOf(input))return'"[Circular]"';if(null==input||"number"==typeof input||"boolean"==typeof input||"function"==typeof input||"symbol"==typeof input||function isRegexp(value){return"[object RegExp]"===Object.prototype.toString.call(value)}(input))return String(input);if(input instanceof Date)return"new Date('"+input.toISOString()+"')";if(Array.isArray(input)){if(0===input.length)return"[]";seen.push(input);var ret="["+tokens.newLine+input.map((function(el,i){var eol=input.length-1===i?tokens.newLine:","+tokens.newLineOrSpace,value=prettyPrint(el,combinedOptions,pad+combinedOptions.indent);return combinedOptions.transform&&(value=combinedOptions.transform(input,i,value)),tokens.indent+value+eol})).join("")+tokens.pad+"]";return seen.pop(),expandWhiteSpace(ret)}if(function isObj(value){var type=typeof value;return null!==value&&("object"===type||"function"===type)}(input)){var objKeys_1=__spreadArrays(Object.keys(input),function getOwnEnumPropSymbols(object){return Object.getOwnPropertySymbols(object).filter((function(keySymbol){return Object.prototype.propertyIsEnumerable.call(object,keySymbol)}))}(input));if(combinedOptions.filter&&(objKeys_1=objKeys_1.filter((function(el){return combinedOptions.filter&&combinedOptions.filter(input,el)}))),0===objKeys_1.length)return"{}";seen.push(input);ret="{"+tokens.newLine+objKeys_1.map((function(el,i){var eol=objKeys_1.length-1===i?tokens.newLine:","+tokens.newLineOrSpace,isSymbol="symbol"==typeof el,isClassic=!isSymbol&&/^[a-z$_][a-z$_0-9]*$/i.test(el.toString()),key=isSymbol||isClassic?el:prettyPrint(el,combinedOptions),value=prettyPrint(input[el],combinedOptions,pad+combinedOptions.indent);return combinedOptions.transform&&(value=combinedOptions.transform(input,el,value)),tokens.indent+String(key)+": "+value+eol})).join("")+tokens.pad+"}";return seen.pop(),expandWhiteSpace(ret)}return input=String(input).replace(/[\r\n]/g,(function(x){return"\n"===x?"\\n":"\\r"})),combinedOptions.singleQuotes?"'"+(input=input.replace(/\\?'/g,"\\'"))+"'":'"'+(input=input.replace(/"/g,'\\"'))+'"'}},"./node_modules/@storybook/addon-actions/dist/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var mod,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,src_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(src_exports,{ADDON_ID:()=>ADDON_ID,CLEAR_ID:()=>CLEAR_ID,CYCLIC_KEY:()=>CYCLIC_KEY,EVENT_ID:()=>EVENT_ID,PANEL_ID:()=>PANEL_ID,PARAM_KEY:()=>PARAM_KEY,action:()=>action,actions:()=>actions,config:()=>config,configureActions:()=>configureActions}),module.exports=(mod=src_exports,((to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to})(__defProp({},"__esModule",{value:!0}),mod));var PARAM_KEY="actions",ADDON_ID="storybook/actions",PANEL_ID=`${ADDON_ID}/panel`,EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=`${ADDON_ID}/action-clear`,CYCLIC_KEY="$___storybook.isCyclic",import_uuid=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/index.js"),import_preview_api=__webpack_require__("@storybook/preview-api"),config={depth:10,clearOnStoryChange:!0,limit:50},configureActions=(options={})=>{Object.assign(config,options)},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=null==viewDescriptor?void 0:viewDescriptor.value;return"object"==typeof view&&"Window"===(null==view?void 0:view.constructor.name)&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){let channel=import_preview_api.addons.getChannel(),id=(0,import_uuid.v4)(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject}},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"NIL",{enumerable:!0,get:function get(){return _nil.default}}),Object.defineProperty(exports,"parse",{enumerable:!0,get:function get(){return _parse.default}}),Object.defineProperty(exports,"stringify",{enumerable:!0,get:function get(){return _stringify.default}}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function get(){return _v.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function get(){return _v2.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function get(){return _v3.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function get(){return _v4.default}}),Object.defineProperty(exports,"validate",{enumerable:!0,get:function get(){return _validate.default}}),Object.defineProperty(exports,"version",{enumerable:!0,get:function get(){return _version.default}});var _v=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v1.js")),_v2=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v3.js")),_v3=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v4.js")),_v4=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v5.js")),_nil=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/nil.js")),_version=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/version.js")),_validate=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/validate.js")),_stringify=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/stringify.js")),_parse=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/parse.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/md5.js":(__unused_webpack_module,exports)=>{"use strict";function getOutputLength(inputLength8){return 14+(inputLength8+64>>>9<<4)+1}function safeAdd(x,y){const lsw=(65535&x)+(65535&y);return(x>>16)+(y>>16)+(lsw>>16)<<16|65535&lsw}function md5cmn(q,a,b,x,s,t){return safeAdd(function bitRotateLeft(num,cnt){return num<<cnt|num>>>32-cnt}(safeAdd(safeAdd(a,q),safeAdd(x,t)),s),b)}function md5ff(a,b,c,d,x,s,t){return md5cmn(b&c|~b&d,a,b,x,s,t)}function md5gg(a,b,c,d,x,s,t){return md5cmn(b&d|c&~d,a,b,x,s,t)}function md5hh(a,b,c,d,x,s,t){return md5cmn(b^c^d,a,b,x,s,t)}function md5ii(a,b,c,d,x,s,t){return md5cmn(c^(b|~d),a,b,x,s,t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function md5(bytes){if("string"==typeof bytes){const msg=unescape(encodeURIComponent(bytes));bytes=new Uint8Array(msg.length);for(let i=0;i<msg.length;++i)bytes[i]=msg.charCodeAt(i)}return function md5ToHexEncodedArray(input){const output=[],length32=32*input.length,hexTab="0123456789abcdef";for(let i=0;i<length32;i+=8){const x=input[i>>5]>>>i%32&255,hex=parseInt(hexTab.charAt(x>>>4&15)+hexTab.charAt(15&x),16);output.push(hex)}return output}(function wordsToMd5(x,len){x[len>>5]|=128<<len%32,x[getOutputLength(len)-1]=len;let a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(let i=0;i<x.length;i+=16){const olda=a,oldb=b,oldc=c,oldd=d;a=md5ff(a,b,c,d,x[i],7,-680876936),d=md5ff(d,a,b,c,x[i+1],12,-389564586),c=md5ff(c,d,a,b,x[i+2],17,606105819),b=md5ff(b,c,d,a,x[i+3],22,-1044525330),a=md5ff(a,b,c,d,x[i+4],7,-176418897),d=md5ff(d,a,b,c,x[i+5],12,1200080426),c=md5ff(c,d,a,b,x[i+6],17,-1473231341),b=md5ff(b,c,d,a,x[i+7],22,-45705983),a=md5ff(a,b,c,d,x[i+8],7,1770035416),d=md5ff(d,a,b,c,x[i+9],12,-1958414417),c=md5ff(c,d,a,b,x[i+10],17,-42063),b=md5ff(b,c,d,a,x[i+11],22,-1990404162),a=md5ff(a,b,c,d,x[i+12],7,1804603682),d=md5ff(d,a,b,c,x[i+13],12,-40341101),c=md5ff(c,d,a,b,x[i+14],17,-1502002290),b=md5ff(b,c,d,a,x[i+15],22,1236535329),a=md5gg(a,b,c,d,x[i+1],5,-165796510),d=md5gg(d,a,b,c,x[i+6],9,-1069501632),c=md5gg(c,d,a,b,x[i+11],14,643717713),b=md5gg(b,c,d,a,x[i],20,-373897302),a=md5gg(a,b,c,d,x[i+5],5,-701558691),d=md5gg(d,a,b,c,x[i+10],9,38016083),c=md5gg(c,d,a,b,x[i+15],14,-660478335),b=md5gg(b,c,d,a,x[i+4],20,-405537848),a=md5gg(a,b,c,d,x[i+9],5,568446438),d=md5gg(d,a,b,c,x[i+14],9,-1019803690),c=md5gg(c,d,a,b,x[i+3],14,-187363961),b=md5gg(b,c,d,a,x[i+8],20,1163531501),a=md5gg(a,b,c,d,x[i+13],5,-1444681467),d=md5gg(d,a,b,c,x[i+2],9,-51403784),c=md5gg(c,d,a,b,x[i+7],14,1735328473),b=md5gg(b,c,d,a,x[i+12],20,-1926607734),a=md5hh(a,b,c,d,x[i+5],4,-378558),d=md5hh(d,a,b,c,x[i+8],11,-2022574463),c=md5hh(c,d,a,b,x[i+11],16,1839030562),b=md5hh(b,c,d,a,x[i+14],23,-35309556),a=md5hh(a,b,c,d,x[i+1],4,-1530992060),d=md5hh(d,a,b,c,x[i+4],11,1272893353),c=md5hh(c,d,a,b,x[i+7],16,-155497632),b=md5hh(b,c,d,a,x[i+10],23,-1094730640),a=md5hh(a,b,c,d,x[i+13],4,681279174),d=md5hh(d,a,b,c,x[i],11,-358537222),c=md5hh(c,d,a,b,x[i+3],16,-722521979),b=md5hh(b,c,d,a,x[i+6],23,76029189),a=md5hh(a,b,c,d,x[i+9],4,-640364487),d=md5hh(d,a,b,c,x[i+12],11,-421815835),c=md5hh(c,d,a,b,x[i+15],16,530742520),b=md5hh(b,c,d,a,x[i+2],23,-995338651),a=md5ii(a,b,c,d,x[i],6,-198630844),d=md5ii(d,a,b,c,x[i+7],10,1126891415),c=md5ii(c,d,a,b,x[i+14],15,-1416354905),b=md5ii(b,c,d,a,x[i+5],21,-57434055),a=md5ii(a,b,c,d,x[i+12],6,1700485571),d=md5ii(d,a,b,c,x[i+3],10,-1894986606),c=md5ii(c,d,a,b,x[i+10],15,-1051523),b=md5ii(b,c,d,a,x[i+1],21,-2054922799),a=md5ii(a,b,c,d,x[i+8],6,1873313359),d=md5ii(d,a,b,c,x[i+15],10,-30611744),c=md5ii(c,d,a,b,x[i+6],15,-1560198380),b=md5ii(b,c,d,a,x[i+13],21,1309151649),a=md5ii(a,b,c,d,x[i+4],6,-145523070),d=md5ii(d,a,b,c,x[i+11],10,-1120210379),c=md5ii(c,d,a,b,x[i+2],15,718787259),b=md5ii(b,c,d,a,x[i+9],21,-343485551),a=safeAdd(a,olda),b=safeAdd(b,oldb),c=safeAdd(c,oldc),d=safeAdd(d,oldd)}return[a,b,c,d]}(function bytesToWords(input){if(0===input.length)return[];const length8=8*input.length,output=new Uint32Array(getOutputLength(length8));for(let i=0;i<length8;i+=8)output[i>>5]|=(255&input[i/8])<<i%32;return output}(bytes),8*bytes.length))};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/native.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/nil.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default="00000000-0000-0000-0000-000000000000"},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/parse.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/validate.js"));var _default=function parse(uuid){if(!(0,_validate.default)(uuid))throw TypeError("Invalid UUID");let v;const arr=new Uint8Array(16);return arr[0]=(v=parseInt(uuid.slice(0,8),16))>>>24,arr[1]=v>>>16&255,arr[2]=v>>>8&255,arr[3]=255&v,arr[4]=(v=parseInt(uuid.slice(9,13),16))>>>8,arr[5]=255&v,arr[6]=(v=parseInt(uuid.slice(14,18),16))>>>8,arr[7]=255&v,arr[8]=(v=parseInt(uuid.slice(19,23),16))>>>8,arr[9]=255&v,arr[10]=(v=parseInt(uuid.slice(24,36),16))/1099511627776&255,arr[11]=v/4294967296&255,arr[12]=v>>>24&255,arr[13]=v>>>16&255,arr[14]=v>>>8&255,arr[15]=255&v,arr};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/regex.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/rng.js":(__unused_webpack_module,exports)=>{"use strict";let getRandomValues;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)};const rnds8=new Uint8Array(16)},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/sha1.js":(__unused_webpack_module,exports)=>{"use strict";function f(s,x,y,z){switch(s){case 0:return x&y^~x&z;case 1:case 3:return x^y^z;case 2:return x&y^x&z^y&z}}function ROTL(x,n){return x<<n|x>>>32-n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=function sha1(bytes){const K=[1518500249,1859775393,2400959708,3395469782],H=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof bytes){const msg=unescape(encodeURIComponent(bytes));bytes=[];for(let i=0;i<msg.length;++i)bytes.push(msg.charCodeAt(i))}else Array.isArray(bytes)||(bytes=Array.prototype.slice.call(bytes));bytes.push(128);const l=bytes.length/4+2,N=Math.ceil(l/16),M=new Array(N);for(let i=0;i<N;++i){const arr=new Uint32Array(16);for(let j=0;j<16;++j)arr[j]=bytes[64*i+4*j]<<24|bytes[64*i+4*j+1]<<16|bytes[64*i+4*j+2]<<8|bytes[64*i+4*j+3];M[i]=arr}M[N-1][14]=8*(bytes.length-1)/Math.pow(2,32),M[N-1][14]=Math.floor(M[N-1][14]),M[N-1][15]=8*(bytes.length-1)&4294967295;for(let i=0;i<N;++i){const W=new Uint32Array(80);for(let t=0;t<16;++t)W[t]=M[i][t];for(let t=16;t<80;++t)W[t]=ROTL(W[t-3]^W[t-8]^W[t-14]^W[t-16],1);let a=H[0],b=H[1],c=H[2],d=H[3],e=H[4];for(let t=0;t<80;++t){const s=Math.floor(t/20),T=ROTL(a,5)+f(s,b,c,d)+e+K[s]+W[t]>>>0;e=d,d=c,c=ROTL(b,30)>>>0,b=a,a=T}H[0]=H[0]+a>>>0,H[1]=H[1]+b>>>0,H[2]=H[2]+c>>>0,H[3]=H[3]+d>>>0,H[4]=H[4]+e>>>0}return[H[0]>>24&255,H[0]>>16&255,H[0]>>8&255,255&H[0],H[1]>>24&255,H[1]>>16&255,H[1]>>8&255,255&H[1],H[2]>>24&255,H[2]>>16&255,H[2]>>8&255,255&H[2],H[3]>>24&255,H[3]>>16&255,H[3]>>8&255,255&H[3],H[4]>>24&255,H[4]>>16&255,H[4]>>8&255,255&H[4]]};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/stringify.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.unsafeStringify=unsafeStringify;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/validate.js"));const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}var _default=function stringify(arr,offset=0){const uuid=unsafeStringify(arr,offset);if(!(0,_validate.default)(uuid))throw TypeError("Stringified UUID is invalid");return uuid};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v1.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rng=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/rng.js")),_stringify=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/stringify.js");let _nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;var _default=function v1(options,buf,offset){let i=buf&&offset||0;const b=buf||new Array(16);let node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){const seedBytes=options.random||(options.rng||_rng.default)();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}let msecs=void 0!==options.msecs?options.msecs:Date.now(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1;const dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;const tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;const tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(let n=0;n<6;++n)b[i+n]=node[n];return buf||(0,_stringify.unsafeStringify)(b)};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v3.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v35.js")),_md=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/md5.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=(0,_v.default)("v3",48,_md.default);exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v35.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.URL=exports.DNS=void 0,exports.default=function v35(name,version,hashfunc){function generateUUID(value,namespace,buf,offset){var _namespace;if("string"==typeof value&&(value=function stringToBytes(str){str=unescape(encodeURIComponent(str));const bytes=[];for(let i=0;i<str.length;++i)bytes.push(str.charCodeAt(i));return bytes}(value)),"string"==typeof namespace&&(namespace=(0,_parse.default)(namespace)),16!==(null===(_namespace=namespace)||void 0===_namespace?void 0:_namespace.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let bytes=new Uint8Array(16+value.length);if(bytes.set(namespace),bytes.set(value,namespace.length),bytes=hashfunc(bytes),bytes[6]=15&bytes[6]|version,bytes[8]=63&bytes[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=bytes[i];return buf}return(0,_stringify.unsafeStringify)(bytes)}try{generateUUID.name=name}catch(err){}return generateUUID.DNS=DNS,generateUUID.URL=URL,generateUUID};var _stringify=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/stringify.js"),_parse=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/parse.js"));const DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=DNS;const URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8";exports.URL=URL},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v4.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _native=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/native.js")),_rng=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/rng.js")),_stringify=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/stringify.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=function v4(options,buf,offset){if(_native.default.randomUUID&&!buf&&!options)return _native.default.randomUUID();const rnds=(options=options||{}).random||(options.rng||_rng.default)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return(0,_stringify.unsafeStringify)(rnds)};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v5.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _v=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/v35.js")),_sha=_interopRequireDefault(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/sha1.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=(0,_v.default)("v5",80,_sha.default);exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/validate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _regex=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/regex.js"));var _default=function validate(uuid){return"string"==typeof uuid&&_regex.default.test(uuid)};exports.default=_default},"./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/version.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _validate=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/commonjs-browser/validate.js"));var _default=function version(uuid){if(!(0,_validate.default)(uuid))throw TypeError("Invalid UUID");return parseInt(uuid.slice(14,15),16)};exports.default=_default},"./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{argsEnhancers:()=>argsEnhancers});var ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`;const esm_browser_native={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let getRandomValues;const rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const byteToHex=[];for(let i=0;i<256;++i)byteToHex.push((i+256).toString(16).slice(1));function unsafeStringify(arr,offset=0){return(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase()}const esm_browser_v4=function v4(options,buf,offset){if(esm_browser_native.randomUUID&&!buf&&!options)return esm_browser_native.randomUUID();const rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(let i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return unsafeStringify(rnds)};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=esm_browser_v4(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions}}=context;return actions?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,parameters:{actions}}=context;if(!actions||actions.disable||!actions.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name)),acc)),{})}]},"./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globals:()=>globals,parameters:()=>parameters});var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),external_STORYBOOK_MODULE_CLIENT_LOGGER_=__webpack_require__("@storybook/client-logger"),{document:chunk_GRJZJKJ4_document,window:chunk_GRJZJKJ4_window}=dist.global,clearStyles=selector=>{(Array.isArray(selector)?selector:[selector]).forEach(clearStyle)},clearStyle=selector=>{let element=chunk_GRJZJKJ4_document.getElementById(selector);element&&element.parentElement.removeChild(element)},external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),decorators=[(StoryFn,context)=>{let{globals:globals2,parameters:parameters2}=context,gridParameters=parameters2.backgrounds.grid,isActive=!0===globals2.backgrounds?.grid&&!0!==gridParameters.disable,{cellAmount,cellSize,opacity}=gridParameters,isInDocs="docs"===context.viewMode,defaultOffset=void 0===parameters2.layout||"padded"===parameters2.layout?16:0,offsetX=gridParameters.offsetX??(isInDocs?20:defaultOffset),offsetY=gridParameters.offsetY??(isInDocs?20:defaultOffset),gridStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>`\n      ${"docs"===context.viewMode?`#anchor--${context.id} .docs-story`:".sb-show-main"} {\n        background-size: ${[`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize*cellAmount}px ${cellSize*cellAmount}px`,`${cellSize}px ${cellSize}px`,`${cellSize}px ${cellSize}px`].join(", ")} !important;\n        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;\n        background-blend-mode: difference !important;\n        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),\n         linear-gradient(rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px),\n         linear-gradient(90deg, rgba(130, 130, 130, ${opacity/2}) 1px, transparent 1px) !important;\n      }\n    `),[cellSize]);return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let selectorId="docs"===context.viewMode?`addon-backgrounds-grid-docs-${context.id}`:"addon-backgrounds-grid";isActive?((selector,css)=>{let existingStyle=chunk_GRJZJKJ4_document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else{let style=chunk_GRJZJKJ4_document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css,chunk_GRJZJKJ4_document.head.appendChild(style)}})(selectorId,gridStyles):clearStyles(selectorId)}),[isActive,gridStyles,context]),StoryFn()},(StoryFn,context)=>{let{globals:globals2,parameters:parameters2}=context,globalsBackgroundColor=globals2.backgrounds?.value,backgroundsConfig=parameters2.backgrounds,selectedBackgroundColor=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>backgroundsConfig.disable?"transparent":((currentSelectedValue,backgrounds=[],defaultName)=>{if("transparent"===currentSelectedValue)return"transparent";if(backgrounds.find((background=>background.value===currentSelectedValue)))return currentSelectedValue;let defaultBackground=backgrounds.find((background=>background.name===defaultName));if(defaultBackground)return defaultBackground.value;if(defaultName){let availableColors=backgrounds.map((background=>background.name)).join(", ");external_STORYBOOK_MODULE_CLIENT_LOGGER_.logger.warn(esm.Z`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `)}return"transparent"})(globalsBackgroundColor,backgroundsConfig.values,backgroundsConfig.default)),[backgroundsConfig,globalsBackgroundColor]),isActive=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>selectedBackgroundColor&&"transparent"!==selectedBackgroundColor),[selectedBackgroundColor]),selector="docs"===context.viewMode?`#anchor--${context.id} .docs-story`:".sb-show-main",backgroundStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>`\n      ${selector} {\n        background: ${selectedBackgroundColor} !important;\n        ${chunk_GRJZJKJ4_window.matchMedia("(prefers-reduced-motion: reduce)").matches?"":"transition: background-color 0.3s;"}\n      }\n    `),[selectedBackgroundColor,selector]);return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let selectorId="docs"===context.viewMode?`addon-backgrounds-docs-${context.id}`:"addon-backgrounds-color";isActive?((selector,css,storyId)=>{let existingStyle=chunk_GRJZJKJ4_document.getElementById(selector);if(existingStyle)existingStyle.innerHTML!==css&&(existingStyle.innerHTML=css);else{let style=chunk_GRJZJKJ4_document.createElement("style");style.setAttribute("id",selector),style.innerHTML=css;let gridStyleSelector="addon-backgrounds-grid"+(storyId?`-docs-${storyId}`:""),existingGridStyle=chunk_GRJZJKJ4_document.getElementById(gridStyleSelector);existingGridStyle?existingGridStyle.parentElement.insertBefore(style,existingGridStyle):chunk_GRJZJKJ4_document.head.appendChild(style)}})(selectorId,backgroundStyles,"docs"===context.viewMode?context.id:null):clearStyles(selectorId)}),[isActive,backgroundStyles,context]),StoryFn()}],parameters={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},globals={backgrounds:null}},"./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{parameters:()=>parameters});var parameters={docs:{renderer:async()=>{let{DocsRenderer}=await __webpack_require__.e(125).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/dist/DocsRenderer-3PUGWF3O.mjs"));return new DocsRenderer}}}},"./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{highlightObject:()=>highlightObject,highlightStyle:()=>highlightStyle});var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:preview_document}=dist.global,highlightStyle=(color="#FF4785",style="dashed")=>`\n  outline: 2px ${style} ${color};\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n`,highlightObject=color=>({outline:`2px dashed ${color}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),resetHighlight=()=>{let sheetToBeRemoved=preview_document.getElementById("storybookHighlight");sheetToBeRemoved&&sheetToBeRemoved.parentNode?.removeChild(sheetToBeRemoved)};channel.on(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,resetHighlight),channel.on("storybook/highlight/reset",resetHighlight),channel.on("storybook/highlight/add",(infos=>{resetHighlight();let elements=Array.from(new Set(infos.elements)),sheet=preview_document.createElement("style");sheet.setAttribute("id","storybookHighlight"),sheet.innerHTML=elements.map((target=>`${target}{\n          ${highlightStyle(infos.color,infos.style)}\n         }`)).join(" "),preview_document.head.appendChild(sheet)}))},"./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globals:()=>globals});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),isProduction=!0,prefix="Invariant failed";function invariant(condition,message){if(!condition){if(isProduction)throw new Error(prefix);var provided="function"==typeof message?message():message,value=provided?"".concat(prefix,": ").concat(provided):prefix;throw new Error(value)}}function getDocumentWidthAndHeight(){let container=dist.global.document.documentElement,height=Math.max(container.scrollHeight,container.offsetHeight);return{width:Math.max(container.scrollWidth,container.offsetWidth),height}}function setCanvasWidthAndHeight(canvas,context,{width,height}){canvas.style.width=`${width}px`,canvas.style.height=`${height}px`;let scale=dist.global.window.devicePixelRatio;canvas.width=Math.floor(width*scale),canvas.height=Math.floor(height*scale),context.scale(scale,scale)}var state={};function init(){state.canvas||(state=function createCanvas(){let canvas=dist.global.document.createElement("canvas");canvas.id="storybook-addon-measure";let context=canvas.getContext("2d");invariant(null!=context);let{width,height}=getDocumentWidthAndHeight();return setCanvasWidthAndHeight(canvas,context,{width,height}),canvas.style.position="absolute",canvas.style.left="0",canvas.style.top="0",canvas.style.zIndex="2147483647",canvas.style.pointerEvents="none",dist.global.document.body.appendChild(canvas),{canvas,context,width,height}}())}function clear(){state.context&&state.context.clearRect(0,0,state.width??0,state.height??0)}var colors={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},labelPadding=6;function roundedRect(context,{x,y,w,h,r}){x-=w/2,y-=h/2,w<2*r&&(r=w/2),h<2*r&&(r=h/2),context.beginPath(),context.moveTo(x+r,y),context.arcTo(x+w,y,x+w,y+h,r),context.arcTo(x+w,y+h,x,y+h,r),context.arcTo(x,y+h,x,y,r),context.arcTo(x,y,x+w,y,r),context.closePath()}function textWithRect(context,type,{x,y,w,h},text){return roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),roundedRect(context,{x,y,w,h,r:3}),context.fillStyle=`${colors[type]}dd`,context.fill(),context.strokeStyle=colors[type],context.stroke(),context.fillStyle=colors.text,context.fillText(text,x,y),{x,y,w,h}}function configureText(context,text){context.font="600 12px monospace",context.textBaseline="middle",context.textAlign="center";let metrics=context.measureText(text),actualHeight=metrics.actualBoundingBoxAscent+metrics.actualBoundingBoxDescent;return{w:metrics.width+2*labelPadding,h:actualHeight+2*labelPadding}}function drawLabel(context,measurements,{type,position="center",text},prevRect,external=!1){let{x,y}=function positionCoordinate(position,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom,x=left+border.left+padding.left,y=top+border.top+padding.top;return"top"===position?x+=contentWidth/2:"right"===position?(x+=contentWidth,y+=contentHeight/2):"bottom"===position?(x+=contentWidth/2,y+=contentHeight):"left"===position?y+=contentHeight/2:"center"===position&&(x+=contentWidth/2,y+=contentHeight/2),{x,y}}(position,measurements),{offsetX,offsetY}=function offset(type,position,{margin,border,padding},labelPaddingSize,external){let shift=dir=>0,offsetX=0,offsetY=0,locationMultiplier=external?1:.5,labelPaddingShift=external?2*labelPaddingSize:0;return"padding"===type?shift=dir=>padding[dir]*locationMultiplier+labelPaddingShift:"border"===type?shift=dir=>padding[dir]+border[dir]*locationMultiplier+labelPaddingShift:"margin"===type&&(shift=dir=>padding[dir]+border[dir]+margin[dir]*locationMultiplier+labelPaddingShift),"top"===position?offsetY=-shift("top"):"right"===position?offsetX=shift("right"):"bottom"===position?offsetY=shift("bottom"):"left"===position&&(offsetX=-shift("left")),{offsetX,offsetY}}(type,position,measurements,labelPadding+1,external);x+=offsetX,y+=offsetY;let{w,h}=configureText(context,text);if(prevRect&&function collide(a,b){return Math.abs(a.x-b.x)<Math.abs(a.w+b.w)/2&&Math.abs(a.y-b.y)<Math.abs(a.h+b.h)/2}({x,y,w,h},prevRect)){let adjusted=function overlapAdjustment(position,currentRect,prevRect){return"top"===position?currentRect.y=prevRect.y-prevRect.h-labelPadding:"right"===position?currentRect.x=prevRect.x+prevRect.w/2+labelPadding+currentRect.w/2:"bottom"===position?currentRect.y=prevRect.y+prevRect.h+labelPadding:"left"===position&&(currentRect.x=prevRect.x-prevRect.w/2-labelPadding-currentRect.w/2),{x:currentRect.x,y:currentRect.y}}(position,{x,y,w,h},prevRect);x=adjusted.x,y=adjusted.y}return textWithRect(context,type,{x,y,w,h},text)}function drawFloatingLabel(context,measurements,{type,text}){let{floatingAlignment:floatingAlignment2,extremities}=measurements,x=extremities[floatingAlignment2.x],y=extremities[floatingAlignment2.y],{w,h}=configureText(context,text),{offsetX,offsetY}=function floatingOffset(alignment,{w,h}){let deltaW=.5*w+labelPadding,deltaH=.5*h+labelPadding;return{offsetX:("left"===alignment.x?-1:1)*deltaW,offsetY:("top"===alignment.y?-1:1)*deltaH}}(floatingAlignment2,{w,h});return x+=offsetX,y+=offsetY,textWithRect(context,type,{x,y,w,h},text)}function drawStack(context,measurements,stack,external){let rects=[];stack.forEach(((l,idx)=>{let rect=external&&"center"===l.position?drawFloatingLabel(context,measurements,l):drawLabel(context,measurements,l,rects[idx-1],external);rects[idx]=rect}))}var colors2={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},SMALL_NODE_SIZE=30;function pxToNumber(px){return parseInt(px.replace("px",""),10)}function round(value){return Number.isInteger(value)?value:value.toFixed(2)}function filterZeroValues(labels){return labels.filter((l=>0!==l.text&&"0"!==l.text))}function floatingAlignment(extremities){let windowExtremities_top=dist.global.window.scrollY,windowExtremities_bottom=dist.global.window.scrollY+dist.global.window.innerHeight,windowExtremities_left=dist.global.window.scrollX,windowExtremities_right=dist.global.window.scrollX+dist.global.window.innerWidth,distances_top=Math.abs(windowExtremities_top-extremities.top),distances_bottom=Math.abs(windowExtremities_bottom-extremities.bottom);return{x:Math.abs(windowExtremities_left-extremities.left)>Math.abs(windowExtremities_right-extremities.right)?"left":"right",y:distances_top>distances_bottom?"top":"bottom"}}function drawBoxModel(element){return context=>{if(element&&context){let measurements=function measureElement(element){let style=dist.global.getComputedStyle(element),{top,left,right,bottom,width,height}=element.getBoundingClientRect(),{marginTop,marginBottom,marginLeft,marginRight,paddingTop,paddingBottom,paddingLeft,paddingRight,borderBottomWidth,borderTopWidth,borderLeftWidth,borderRightWidth}=style;top+=dist.global.window.scrollY,left+=dist.global.window.scrollX,bottom+=dist.global.window.scrollY,right+=dist.global.window.scrollX;let margin={top:pxToNumber(marginTop),bottom:pxToNumber(marginBottom),left:pxToNumber(marginLeft),right:pxToNumber(marginRight)},padding={top:pxToNumber(paddingTop),bottom:pxToNumber(paddingBottom),left:pxToNumber(paddingLeft),right:pxToNumber(paddingRight)},border={top:pxToNumber(borderTopWidth),bottom:pxToNumber(borderBottomWidth),left:pxToNumber(borderLeftWidth),right:pxToNumber(borderRightWidth)},extremities={top:top-margin.top,bottom:bottom+margin.bottom,left:left-margin.left,right:right+margin.right};return{margin,padding,border,top,left,bottom,right,width,height,extremities,floatingAlignment:floatingAlignment(extremities)}}(element),marginLabels=function drawMargin(context,{margin,width,height,top,left,bottom,right}){let marginHeight=height+margin.bottom+margin.top;return context.fillStyle=colors2.margin,context.fillRect(left,top-margin.top,width,margin.top),context.fillRect(right,top-margin.top,margin.right,marginHeight),context.fillRect(left,bottom,width,margin.bottom),context.fillRect(left-margin.left,top-margin.top,margin.left,marginHeight),filterZeroValues([{type:"margin",text:round(margin.top),position:"top"},{type:"margin",text:round(margin.right),position:"right"},{type:"margin",text:round(margin.bottom),position:"bottom"},{type:"margin",text:round(margin.left),position:"left"}])}(context,measurements),paddingLabels=function drawPadding(context,{padding,border,width,height,top,left,bottom,right}){let paddingWidth=width-border.left-border.right,paddingHeight=height-padding.top-padding.bottom-border.top-border.bottom;return context.fillStyle=colors2.padding,context.fillRect(left+border.left,top+border.top,paddingWidth,padding.top),context.fillRect(right-padding.right-border.right,top+padding.top+border.top,padding.right,paddingHeight),context.fillRect(left+border.left,bottom-padding.bottom-border.bottom,paddingWidth,padding.bottom),context.fillRect(left+border.left,top+padding.top+border.top,padding.left,paddingHeight),filterZeroValues([{type:"padding",text:padding.top,position:"top"},{type:"padding",text:padding.right,position:"right"},{type:"padding",text:padding.bottom,position:"bottom"},{type:"padding",text:padding.left,position:"left"}])}(context,measurements),borderLabels=function drawBorder(context,{border,width,height,top,left,bottom,right}){let borderHeight=height-border.top-border.bottom;return context.fillStyle=colors2.border,context.fillRect(left,top,width,border.top),context.fillRect(left,bottom-border.bottom,width,border.bottom),context.fillRect(left,top+border.top,border.left,borderHeight),context.fillRect(right-border.right,top+border.top,border.right,borderHeight),filterZeroValues([{type:"border",text:border.top,position:"top"},{type:"border",text:border.right,position:"right"},{type:"border",text:border.bottom,position:"bottom"},{type:"border",text:border.left,position:"left"}])}(context,measurements),contentLabels=function drawContent(context,{padding,border,width,height,top,left}){let contentWidth=width-border.left-border.right-padding.left-padding.right,contentHeight=height-padding.top-padding.bottom-border.top-border.bottom;return context.fillStyle=colors2.content,context.fillRect(left+border.left+padding.left,top+border.top+padding.top,contentWidth,contentHeight),[{type:"content",position:"center",text:`${round(contentWidth)} x ${round(contentHeight)}`}]}(context,measurements);!function labelStacks(context,measurements,labels,externalLabels){let stacks=labels.reduce(((acc,l)=>(Object.prototype.hasOwnProperty.call(acc,l.position)||(acc[l.position]=[]),acc[l.position]?.push(l),acc)),{});stacks.top&&drawStack(context,measurements,stacks.top,externalLabels),stacks.right&&drawStack(context,measurements,stacks.right,externalLabels),stacks.bottom&&drawStack(context,measurements,stacks.bottom,externalLabels),stacks.left&&drawStack(context,measurements,stacks.left,externalLabels),stacks.center&&drawStack(context,measurements,stacks.center,externalLabels)}(context,measurements,[...contentLabels,...paddingLabels,...borderLabels,...marginLabels],measurements.width<=3*SMALL_NODE_SIZE||measurements.height<=SMALL_NODE_SIZE)}}}function drawSelectedElement(element){!function draw(callback){clear(),callback(state.context)}(drawBoxModel(element))}var nodeAtPointerRef,pointer={x:0,y:0};function findAndDrawElement(x,y){nodeAtPointerRef=((x,y)=>{let element=dist.global.document.elementFromPoint(x,y),crawlShadows=node=>{if(node&&node.shadowRoot){let nestedElement=node.shadowRoot.elementFromPoint(x,y);return node.isEqualNode(nestedElement)?node:nestedElement.shadowRoot?crawlShadows(nestedElement):nestedElement}return node};return crawlShadows(element)||element})(x,y),drawSelectedElement(nodeAtPointerRef)}var decorators=[(StoryFn,context)=>{let{measureEnabled}=context.globals;return(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let onPointerMove=event=>{window.requestAnimationFrame((()=>{event.stopPropagation(),pointer.x=event.clientX,pointer.y=event.clientY}))};return document.addEventListener("pointermove",onPointerMove),()=>{document.removeEventListener("pointermove",onPointerMove)}}),[]),(0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{let onResize=()=>{window.requestAnimationFrame((()=>{!function rescale(){invariant(state.canvas,"Canvas should exist in the state."),invariant(state.context,"Context should exist in the state."),setCanvasWidthAndHeight(state.canvas,state.context,{width:0,height:0});let{width,height}=getDocumentWidthAndHeight();setCanvasWidthAndHeight(state.canvas,state.context,{width,height}),state.width=width,state.height=height}()}))};return"story"===context.viewMode&&measureEnabled&&(document.addEventListener("pointerover",(event=>{window.requestAnimationFrame((()=>{event.stopPropagation(),findAndDrawElement(event.clientX,event.clientY)}))})),init(),window.addEventListener("resize",onResize),findAndDrawElement(pointer.x,pointer.y)),()=>{window.removeEventListener("resize",onResize),function destroy(){state.canvas&&(clear(),state.canvas.parentNode?.removeChild(state.canvas),state={})}()}}),[measureEnabled,context.viewMode]),StoryFn()}],globals={measureEnabled:!1}},"./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globals:()=>globals});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),clearStyles=selector=>{(Array.isArray(selector)?selector:[selector]).forEach(clearStyle)},clearStyle=input=>{let selector="string"==typeof input?input:input.join(""),element=dist.global.document.getElementById(selector);element&&element.parentElement&&element.parentElement.removeChild(element)};var decorators=[(StoryFn,context)=>{let{globals:globals2}=context,isActive=[!0,"true"].includes(globals2.outline),isInDocs="docs"===context.viewMode,outlineStyles=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useMemo)((()=>function outlineCSS(selector){return esm.Z`
    ${selector} body {
      outline: 1px solid #2980b9 !important;
    }

    ${selector} article {
      outline: 1px solid #3498db !important;
    }

    ${selector} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${selector} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${selector} section {
      outline: 1px solid #66b8da !important;
    }

    ${selector} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${selector} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${selector} h1 {
      outline: 1px solid #162544 !important;
    }

    ${selector} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${selector} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${selector} h4 {
      outline: 1px solid #449baf !important;
    }

    ${selector} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${selector} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${selector} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${selector} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${selector} div {
      outline: 1px solid #036cdb !important;
    }

    ${selector} p {
      outline: 1px solid #ac050b !important;
    }

    ${selector} hr {
      outline: 1px solid #ff063f !important;
    }

    ${selector} pre {
      outline: 1px solid #850440 !important;
    }

    ${selector} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${selector} ol {
      outline: 1px solid #ff050c !important;
    }

    ${selector} ul {
      outline: 1px solid #d90416 !important;
    }

    ${selector} li {
      outline: 1px solid #d90416 !important;
    }

    ${selector} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${selector} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${selector} dd {
      outline: 1px solid #e80174 !important;
    }

    ${selector} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${selector} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${selector} table {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} thead {
      outline: 1px solid #98daca !important;
    }

    ${selector} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${selector} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${selector} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${selector} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${selector} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${selector} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${selector} button {
      outline: 1px solid #da8301 !important;
    }

    ${selector} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${selector} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${selector} form {
      outline: 1px solid #d23600 !important;
    }

    ${selector} input {
      outline: 1px solid #fca600 !important;
    }

    ${selector} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${selector} label {
      outline: 1px solid #ee8900 !important;
    }

    ${selector} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${selector} meter {
      outline: 1px solid #e8630c !important;
    }

    ${selector} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${selector} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${selector} output {
      outline: 1px solid #ff9619 !important;
    }

    ${selector} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${selector} select {
      outline: 1px solid #e26e0f !important;
    }

    ${selector} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${selector} details {
      outline: 1px solid #33848f !important;
    }

    ${selector} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${selector} command {
      outline: 1px solid #438da1 !important;
    }

    ${selector} menu {
      outline: 1px solid #449da6 !important;
    }

    ${selector} del {
      outline: 1px solid #bf0000 !important;
    }

    ${selector} ins {
      outline: 1px solid #400000 !important;
    }

    ${selector} img {
      outline: 1px solid #22746b !important;
    }

    ${selector} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${selector} embed {
      outline: 1px solid #98daca !important;
    }

    ${selector} object {
      outline: 1px solid #00cc99 !important;
    }

    ${selector} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${selector} video {
      outline: 1px solid #6ee866 !important;
    }

    ${selector} audio {
      outline: 1px solid #027353 !important;
    }

    ${selector} source {
      outline: 1px solid #012426 !important;
    }

    ${selector} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${selector} track {
      outline: 1px solid #59a600 !important;
    }

    ${selector} map {
      outline: 1px solid #7be500 !important;
    }

    ${selector} area {
      outline: 1px solid #305900 !important;
    }

    ${selector} a {
      outline: 1px solid #ff62ab !important;
    }

    ${selector} em {
      outline: 1px solid #800b41 !important;
    }

    ${selector} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${selector} i {
      outline: 1px solid #803156 !important;
    }

    ${selector} b {
      outline: 1px solid #cc1169 !important;
    }

    ${selector} u {
      outline: 1px solid #ff0430 !important;
    }

    ${selector} s {
      outline: 1px solid #f805e3 !important;
    }

    ${selector} small {
      outline: 1px solid #d107b2 !important;
    }

    ${selector} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${selector} q {
      outline: 1px solid #240018 !important;
    }

    ${selector} cite {
      outline: 1px solid #64003c !important;
    }

    ${selector} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${selector} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${selector} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${selector} time {
      outline: 1px solid #d6606d !important;
    }

    ${selector} code {
      outline: 1px solid #e04251 !important;
    }

    ${selector} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${selector} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${selector} var {
      outline: 1px solid #d90047 !important;
    }

    ${selector} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${selector} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${selector} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${selector} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${selector} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${selector} rp {
      outline: 1px solid #803e49 !important;
    }

    ${selector} span {
      outline: 1px solid #cc2643 !important;
    }

    ${selector} br {
      outline: 1px solid #db687d !important;
    }

    ${selector} wbr {
      outline: 1px solid #db175b !important;
//# sourceMappingURL=717.b2253b8b.iframe.bundle.js.map