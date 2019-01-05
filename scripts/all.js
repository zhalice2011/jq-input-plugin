/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
﻿var promptLanguage;
var urlOfMobile;
var iszhcn;
var ispc;
var mycookiedomain;
var mostPossibleLink = "";
var isMobileVersion = false;

var STYLEID = '1', STATICURL = 'static/', IMGDIR = '/images', VERHASH = '2016050301', charset = 'gbk', discuz_uid = '0', cookiepre = 't7asq_4ad6_', cookiedomain = '.discuz.net', cookiepath = '/', showusercard = '1', attackevasive = '0', disallowfloat = 'newthread|tradeorder|activity|debate', defaultstyle = '', REPORTURL = 'aHR0cDovL3d3dy5kaXNjdXoubmV0Lw==', SITEURL = '', JSPATH = '/scripts/';
if(!isIE()){  //firefox  innerText  define 
      HTMLElement.prototype.__defineGetter__("innerText", 
        function(){ 
          var  anyString  =  ""; 
          var  childS  =  this.childNodes; 
          for(var  i=0;  i <childS.length;  i++)  { 
            if(childS[i].nodeType==1) 
              anyString  +=  childS[i].tagName=="BR"  ?  '\n'  :  childS[i].innerText; 
            else  if(childS[i].nodeType==3) 
              anyString  +=  childS[i].nodeValue; 
          } 
          return  anyString; 
        } 
      ); 
      HTMLElement.prototype.__defineSetter__("innerText", 
        function(sText){ 
          this.textContent=sText; 
        } 
      );
  }



  function processLanguage() {
      if (true == promptLanguage) 
      {
        configLanguage("abc");
      }
      else 
      {
      }
  }

  function configLanguage(targetUrl) {
      hideMenu();
      var url = "/window/language?url={0}";
      url = url.format(targetUrl);
      var v = { 'maxh': 800, 'pos': '00', 'cache': 0 };
      showWindow("Language", url, 'get', -1, v);
  }

function getSelectedRadioButtonListValue(ctrl)
{
    var ret = "";
    var children = ctrl.children("input");
    for (var i = 0; i < children.length; i++)
    {
        var checked = $(children[i]).prop("checked");
        if (true == checked)
        {
            ret = $(children[i]).val();
            break;
        }
    }
    //var ret = ctrl.children("input[prop:checked]").val();
    return ret;
}

function getSelectedDecoroateRadioButtonListValue(ctrl) {
    var ret = "";
    var id = ctrl.attr("id");
    var string = '#' + id + ' input';
    children = $(string);
    for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            ret = $(children[i]).val();
            break;
        }
    }
    return ret;
}


function getSelectedRadioButtonListText(ctrl)
{
    var ret = "";
    var children = ctrl.children("input");
    for (var i = 0; i < children.length; i++)
    {
        var checked = $(children[i]).prop("checked");
        if (true == checked)
        {
            ret = $(children[i]).next().text();
            break;
        }
    }
    return ret;
}


function getSelectedDecoroateRadioButtonListText(ctrl) {
     var ret = "";
     var id = ctrl.attr("id") ;
     var string = '#' + id + ' input';
     children = $(string);
     for (var i = 0; i < children.length; i++) {
        var checked = $(children[i])[0].checked;
        if (true == checked) {
            ret = $(children[i])[0].nextSibling.innerHTML;
            break;
        }
    }
    return ret;
}

function ifCheckBoxListChecked(ctrlid) {
    ret = false; 
    var valueText = ""; //保存checkbox选中值
    var value = "";    
    var expression = '#'+ ctrlid + ' input[type=checkbox]:checked' ;
    $(expression).
    each(function () {
        if (false == ret) {
            value += valueText;
            ret = true;
        }
    }
    );
    return ret ;
}


function ifRadioButtonListChecked(radiobuttonlist)
{
     var ret ;
     ret = false ;
     var inputs = radiobuttonlist.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++)
      {
        if (inputs[i].checked) 
        {
            ret = true ;
            break ;
        }
      }
      return ret ;
 }
         
   function master(id)
  {
   return $('#ctl00_P_' + id) ;
}

function getId(id) {
    return 'ctl00_P_' + id;
}
   
  function $$(id)
  {
    return document.getElementById(id) ;
  }

String.prototype.trim = function() {
    // 用正则表达式将前后空格  
    // 用空字符串替代。  
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

function convert() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if ("text" == inputs[i].type || "password" == inputs[i].type) {
            inputs[i].value = toDBC(inputs[i].value);
            inputs[i].value = inputs[i].value.trim();
            
        }
    }

    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) 
    {
        if ("1" == $(textareas[i]).attr("fullwidth")) {
            continue;
        }
        else {
            var temp = $(textareas[i]).val();
            temp = toDBC(temp);
            temp = temp.trim();
            $(textareas[i]).val(temp)
        }
    }
}

function toDBC(Str) {
    var DBCStr = "";
    for (var i = 0; i < Str.length; i++) {
        var c = Str.charCodeAt(i);
        if (c == 12288) {
            DBCStr += String.fromCharCode(32);
            continue;
        }
        if (c > 65280 && c < 65375) {
            DBCStr += String.fromCharCode(c - 65248);
            continue;
        }
        DBCStr += String.fromCharCode(c);
    }
    return DBCStr;
}



//半角转换为全角函数
   function ToQuanjiao(txtstring)
   {
    var   tmp   =   "";
    
    for(var i=0;i<txtstring.length;i++)
    {  
    if(txtstring.charCodeAt(i)==32)
     { 
     tmp= tmp+  String.fromCharCode(12288);
     continue;
   }
    if(txtstring.charCodeAt(i)<127)
    {
     tmp=tmp+String.fromCharCode(txtstring.charCodeAt(i)+65248);
     continue;
     }    
       tmp += String.fromCharCode(txtstring.charCodeAt(i));
      
   }
   return tmp;     
  }

 function isEmail(email) 
 {
    //regmail=/^\w+@\w+(\.\w+)*$/g;   
    regmail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;   
    return regmail.test(email) ;
 }


function isPostcode(s)   
{
    var number=s;
    var pattern=/^\d{6}$/;   
    if (pattern.test(number))
        return true;  
    else
        return false;
}


function isMobile(s)   
{
    var mobile=s;
    var pattern=/^[0]{0,1}(13|15|18){1}(\d){1}[ ]?[-]?(\d){8,8}$/;   
    if (pattern.test(mobile))
        return true;  
    else
        return false;
}

//检验固定电话

function isfixedphone(s) {
    var number = s;
    var pattern = /^\(0\d{2}\)[- ]?\d{8}$|^0\d{2}[- ]?\d{8}$|^\(0\d{3}\)[- ]?\d{7,8}$|^0\d{3}[- ]?\d{7,8}$/;
    if (pattern.test(number))
        return true;
    else
        return false;
}


//copy url
function CopyURL(obj)
{
	var myHerf = top.location.href;
	var title  = document.title;
	if(window.clipboardData)
	{
	    //alert($(obj).val());
	    var ok = window.clipboardData.setData("Text",$(obj).val());
		if(ok) alert("按Ctrl + V ,粘贴发送给您的好友们吧 ！");
	}else
	{
		//alert("对不起，目前此功能不支持当前浏览器，请直接手动复制！");
	}
}

function SetCookies2(referrer,value)
{
SetCookies(value) ;
window.location = referrer ;
}

function SetShareCookies(value,domain,where)
    {
    	var Days = 360; //此 cookie 将被保存 360 天

    	var exp  = new Date();    //new Date("December 31, 9998");
    	exp.setTime(exp.getTime() + Days*24*60*60*1000);
    	
    	document.cookie = "chome="+ escape (value) + ";expires=" + exp.toGMTString() + ";domain="+domain;
    	if(null!=where&&where.length>0)
    	{
    	    window.location = where ;
    	}
    	else
    	{
    	    window.location = '/' ;
    	}
    	//alert(document.referrer) ;
    }
    

    function SetCookies0(value)
    {
    	var Days = 360; //此 cookie 将被保存 360 天

    	var exp  = new Date();    //new Date("December 31, 9998");
    	exp.setTime(exp.getTime() + Days*24*60*60*1000);
    	var domain = ".lovejiajiaodev.com" ;
    	document.cookie = "home="+ escape (value) + ";expires=" + exp.toGMTString() + ";domain="+domain;
    	//alert(<%=_Domain%>) ;
    	//alert('dd') ;
    	
    	window.location = "/" ;
    	//alert(document.referrer) ;
    }
    
    function getCookie( name ) 
{ 
var start = document.cookie.indexOf( name + "=" ); 
var len = start + name.length + 1; 
if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) { 
return null; 
} 
if ( start == -1 ) return null; 
var end = document.cookie.indexOf( ';', len ); 
if ( end == -1 ) end = document.cookie.length; 
return unescape( document.cookie.substring( len, end ) );
}


function setmycookie(cookieName, cookieValue, seconds) {
    var d = new Date();
    d.setTime(d.getTime() + seconds);
    var expires = "expires=" + d.toUTCString();
    var path = "path=/";
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";" + path + ";" + "domain=" + mycookiedomain;
}

  
  String.prototype.trimleftbrace= function()  
{    
    return this.replace(/(^\(*)|(\(*$)/g, "");  
}

  String.prototype.trimrightbrace= function()  
{    
    return this.replace(/(^\)*)|(\)*$)/g, "");  
}
  
  
  //正则表达式将前后空格  
  //用空字符串替代。    
String.prototype.trim= function()  
{    
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}



  //正则表达式将前逗号
String.prototype.trimcomma= function()  
{    
    return this.replace(/(^,*)|(,*$)/g, "");  
}


String.prototype.format = function()
{
    var args = arguments;
    return this.replace(/\{(\d+)\}/g,               
        function(m,i){
            return args[i];
        });
}


function  isIE(){  //ie? 
      if  (window.navigator.userAgent.toLowerCase().indexOf("msie")>=1) 
        return  true; 
      else 
        return  false; 
} 

function getEvent()
{
 if(document.all)    return window.event;//如果是ie
 func=getEvent.caller;
        while(func!=null){
            var arg0=func.arguments[0];
            if(arg0){if((arg0.constructor==Event || arg0.constructor ==MouseEvent) || (typeof(arg0)=="object" && arg0.preventDefault && arg0.stopPropagation)){return arg0;}            }
            func=func.caller;
        }
       return null;
}


function QueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


   function PreviewImg(imgFile)
{
//新的预览代码，支持 IE6、IE7。
imgFile = "F:\\temp\\F001017.jpg" ;
var newPreview = document.getElementById("newphotoreview");
newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgFile;
newPreview.style.width = "95px";
newPreview.style.height = "95px";
}


   function PreviewImg2(input)
{
//新的预览代码，支持 IE6、IE7。
var imgFile = getFullPath(input) ;
//var imgFile = $(input).attr('name') ;;
//alert(imgFile) ;
//imgFile = "F:\\temp\\F001017.jpg" ;
var newPreview = document.getElementById("newphotoreview");
newPreview.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgFile;
newPreview.style.width = "95px";
newPreview.style.height = "95px";
}


function getFullPath(obj)
{
    if(obj)
    {
        //ie
        if (window.navigator.userAgent.indexOf("MSIE")>=1)
        {
            obj.select();
            return document.selection.createRange().text;
        }
        //firefox
        else if(window.navigator.userAgent.indexOf("Firefox")>=1)
        {
           if(obj.files)
            {
               return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        
        return obj.value;
    }
}



function GetLat(latlon)
{
    var ret = '' ;
    if(''!=latlon)
    {
        var pos = latlon.indexOf(',',0) ;
        if(pos>0)
        {
        ret = latlon.substr(0,pos) ;
        }
    }
    
    return ret ;
}

function GetLon(latlon)
{
    var ret = '' ;
    if(''!=latlon)
    {
        var pos = latlon.indexOf(',',0) ;
        if(pos>0)
        {
        ret = latlon.substr(pos+1) ;
        }
    }
    
    return ret ;
}




function addfavorite(url, title) {
  
	if(!url)
	{
		url = window.location.href;
	}
	if(!title)
	{
		title = document.title;
    }

try {
    window.external.addFavorite(url, title);
} catch (e) {
    try {
        window.sidebar.addPanel(title, url, '');
    } catch (e) {
       alert("请按 Ctrl+D 键添加到收藏夹", 'notice');
    }
}

}


function ifContain(parent, child) {
    if (parent.indexOf(child) >= 0) {
        return true;
    }
    else {
        return false;
    }
}




function mouseOver(row) {
    var old = $(row).css("background-color");
    $(row).attr("old-background-color", old);
    $(row).css("background-color", "#c9e39c");
    //$(row).css("color", "#fff");
}

function mouseOut(row) {

    var old = $(row).attr("old-background-color");
    //alert(old);
    $(row).css("background-color", old);

    //$(row).css("color", "");
}


function parseBoolean(str)
{
    return /^true$/i.test(str);
}



function openLink(link) {
    window.location.href=link;
}

function keywordComplete() {

    var inputValue = '';
    $("#TextBoxKeyword").autocomplete(null, {
        minChars: 1,
        matchCase: false, //不区分大小写
        autoFill: false,
        max: 20,
        width:280,
        url: '/http/search',
        urlparaname: 'keyword',
        scrollHeight: 280,
        formatItem: function (row, i, max, match, term) {
            if (1 == i) {
                mostPossibleLink = row.url;
            }
            var ret = "";

            ret = row.name + " <span class=cgray>(" + row.desc + ")</span>";
            if (1 == i) {
                ret += "搜索";
            }
            return ret;

            if (row.code.indexOf(v) == 0 || row.spell.indexOf(v) == 0) {
                return row.name; //+ " (" + row.code + ")";
            }
            else
                return false;
        },
        formatMatch: function (row, i, max) {
            return row.name; //+ " (" + row.code+")";
        },
        formatResult: function (row) {
            //alert('formatResult') ;
            return row.code;
        },
        onSelected: function (t) {            
            mostPossibleLink = "";
            openLink(t.url);
        },
        reasultSearch: function (row, v)//本场数据自定义查询语法 注意这是我自己新加的事件
        {
            if (row.data.code.indexOf(v) == 0 || row.data.spell.indexOf(v) == 0) {
                return row;
            }
            else
                return false;
        }
    });
}


//return pressed
function processenter() {
    if (document.addEventListener) {
        document.addEventListener("keypress", fireFoxHandler, false);

    } else {
        document.attachEvent("onkeypress", ieHandler);
    }
}

function fireFoxHandler(evt) {
    if (evt.keyCode == 13) {
        //alert('ff');
        document.all['searchbutton'].click();
        //$('#searchbutton').click();
        return false;
    }
}

function ieHandler(evt) {

    if (evt.keyCode == 13) {
        document.all['searchbutton'].click();
        return false;
    }
}


function search() {
    var url = "";
    if ("" != mostPossibleLink) {
        window.location.href = mostPossibleLink;
    }
    else {
        var keyword = $("#TextBoxKeyword").val();
        if (userNameInputTip == keyword || "" == keyword) {
            keyword = "";
            url = "/teacherlist";
        }
        else {
            url = "/teacherlist/keyword" + keyword + "";
        }
        window.location.href = url;
    }
}


//from coordinate.js
function getPosition(e) {
    var left = 0;
    var top = 0;

    while (e.offsetParent) {
        left += e.offsetLeft;
        top += e.offsetTop;
        e = e.offsetParent;
    }

    left += e.offsetLeft;
    top += e.offsetTop;
    return { x: left, y: top };
}

//from jquery.extend.js
$.ajaxWebService = function (url, dataMap, fnSuccess) {
    //alert(url);
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: url,
        data: dataMap,
        dataType: "json",
        success: fnSuccess
    });
}

$.fn.loadUserControl = function (control, page) {
    var $dom = this;
    //alert(control);
    if (page == "" || page == null) {
        page = location.pathname.replace("/", "");
    }

    page += "/RenderUserControl"; //RenderUserControl是PageProxy中的方法，不要轻易修改
    $.ajaxWebService(page, "{control:'" + control + "'}", function (result) {
        $dom.html(result.d);
    });

}

$.fn.maxlength = function () {

    $("textarea[maxlength], input[maxlength]").keypress(function (event) {
        var key = event.which;

        //all keys including return.
        if (key >= 33 || key == 13 || key == 32) {
            var maxLength = $(this).attr("maxlength");
            var length = this.value.length;
            if (length >= maxLength) {
                event.preventDefault();
            }
        }
    });
}


function inputtype() {
    $(".digital").keyup(function () {
        this.value = this.value.replace(/\D/g, '');
    }
    );

    $(".digital").afterpaste(function () {
        this.value = this.value.replace(/\D/g, '');
    }
    );
}


$.fn.ShowSelfTip = function (tip) {
    var $dom = this;

    init();


    $dom.bind("blur", function () { onblur(); });
    $dom.bind("focus", function () { onfocus(); });
    $dom.bind("click", function () { onfocus(); });

    function onblur() {
        if ($dom.val() == '') {
            $dom.val(tip);
            $dom.addClass('cgray');
        }
        else if ($dom.val() == tip) {
            $dom.val(tip);
        }
        else {
            //$dom.val('');
            $dom.removeClass('cgray');
        }
    }


    function onfocus() {
        //alert('dd');
        if ($dom.val() == tip) {
            $dom.val('');
        }
        $dom.removeClass('cgray');
    }


    function init() {
        if ($dom.val() != tip) {
            //$dom.val(tip);
        }

        if ($dom.val() == '') {
            $dom.val(tip);
            $dom.addClass('cgray');
        }
    }
}


$.fn.hoverDelay = function (options) {
    var defaults = {
        hoverDuring: 200,
        outDuring: 200,
        hoverEvent: function () {
            $.noop();
        },
        outEvent: function () {
            $.noop();
        }
    };
    var sets = $.extend(defaults, options || {});
    var hoverTimer, outTimer;
    return $(this).each(function () 
    {
        $(this).hover(function () 
        {
            clearTimeout(outTimer);
            hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
        },
            function () 
            {
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });
    });
 }


 $.fn.showByPart = function () {
     var $dom = this;     
     $dom.bind("keyup", function (event) { onkeyup(event); });

     function onkeyup(e) {

         var currKey = 0, e = e || event;
         currKey = e.keyCode || e.which || e.charCode;
         //alert(currKey);
         if (8 == currKey) {
             return;

         }

         var val = $.trim($dom.val()).replace(/\s/g, '');
         if (val.length <= 8) {
             
             return;
         }
         var val2 = "";

         for (var i = 0; i < val.length; i++) {
             val2 += val.split('')[i];
             if ((i + 1) % 4 == 0) {
                 val2 += ' ';
             }
         }

         var val3 = "";
         val3 = val.replace(/^(\d{3})|(\d{4})/g, "$& ")
         //val3 = val.replace(/^(\d{3})(\d{1,4})(\d{1,4})$/, "$1 $2 $3")

         $dom.val(val3);
     }

 }


$.fn.showQQByPart = function () {
    var $dom = this;
    $dom.bind("keyup", function (event) { onkeyup(event); });
    function onkeyup(e) {
        var currKey = 0, e = e || event;
        currKey = e.keyCode || e.which || e.charCode;
        if (8 == currKey) {
            return;
        }

        var val = $.trim($dom.val()).replace(/\s/g, '');

        var val2 = "";

        for (var i = 0; i < val.length; i++) {
            val2 += val.split('')[i];
            if ((i + 1) % 4 == 0) {
                val2 += ' ';
            }
        }
        $dom.val(val2);
    }
}


/**
* $.float
* @extends jquery.1.4
* @fileOverview 创建一个悬浮层，支持上、下、左、右、右中、左中浮动
* @author 明河共影
* @email mohaiguyan12@126.com
* @version 0.1
* @date 2010-04-18
* Copyright (c) 2010-2010 明河共影
* @example
*    $("#to-right").float({position:"rm"}); //右中位置浮动
*/
jQuery.fn.float = function (settings) {
    if (typeof settings == "object") {
        settings = jQuery.extend({
            //延迟
            delay: 1000,
            //位置偏移
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            style: null, //样式
            width: 100,  //宽度
            height: 200, //高度
            position: "rm" //位置
        }, settings || {});
        var winW = $(window).width();
        var winH = $(window).height();

        //根据参数获取位置数值
        function getPosition($applyTo, position) {
            var _pos = null;
            switch (position) {
                case "rm":
                    $applyTo.data("offset", "right");
                    $applyTo.data("offsetPostion", settings.offset.right);
                    _pos = { right: settings.offset.right, top: winH / 2 - $applyTo.innerHeight() / 2 };
                    break;
                case "lm":
                    $applyTo.data("offset", "left");
                    $applyTo.data("offsetPostion", settings.offset.left);
                    _pos = { left: settings.offset.left, top: winH / 2 - $applyTo.innerHeight() / 2 };
                    break;
                case "rb":
                    _pos = { right: settings.offset.right, top: winH - $applyTo.innerHeight() };
                    break;
                case "lb":
                    _pos = { left: settings.offset.left, top: winH - $applyTo.innerHeight() };
                    break;
                case "l":
                    _pos = { left: settings.offset.left, top: settings.offset.top };
                    break;
                case "r":
                    _pos = { right: settings.offset.right, top: settings.offset.top };
                    break;
                case "t":
                    $applyTo.data("offset", "top");
                    $applyTo.data("offsetPostion", settings.offset.top);
                    _pos = { left: settings.offset.left, top: settings.offset.top };
                    break;
                case "b":
                    $applyTo.data("offset", "bottom");
                    $applyTo.data("offsetPostion", settings.offset.bottom);
                    _pos = { left: settings.offset.left, top: winH - $applyTo.innerHeight() };
                    break;
            }
            return _pos;
        }
        //设置容器位置
        function setPosition($applyTo, position, isUseAnimate) {
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            var _pos = getPosition($applyTo, position);
            _pos.top += scrollTop;
            isUseAnimate && $applyTo.stop().animate(_pos, settings.delay) || $applyTo.css(_pos);
        }
        return this.each(function () {
            var $this = $(this);
            $this.css("position", "absolute");
            settings.style && $this.css(settings.style);
            setPosition($this, settings.position);
            $(this).data("isAllowScroll", true);
            $(window).scroll(function () {
                $this.data("isAllowScroll") && setPosition($this, settings.position, true);
            });
        })
    } else {
        var speed = arguments.length > 1 && arguments[1] || "fast";
        this.each(function () {
            if (settings == "clearOffset") {
                var _c = {};
                if ($(this).data("offset")) {
                    _c[$(this).data("offset")] = 0;
                    $(this).data("isAllowScroll", false);
                    $(this).stop().animate(_c, speed);
                }
            } else if (settings == "addOffset") {
                var _c = {};
                if ($(this).data("offset") && $(this).data("offsetPostion")) {
                    _c[$(this).data("offset")] = $(this).data("offsetPostion");
                    $(this).stop().animate(_c, speed);
                    $(this).data("isAllowScroll", true);
                }

            } else if (settings == "setScrollDisable") {
                $(this).data("isAllowScroll", false);
            } else if (settings == "setScrollUsable") {
                $(this).data("isAllowScroll", true);
            }
        })
    }
};

//from default.js
function initSlide(container, slider, count) {

    var forEach = function (array, callback, thisObject) {
        if (array.forEach) {
            array.forEach(callback, thisObject);
        } else {
            for (var i = 0, len = array.length; i < len; i++) { callback.call(thisObject, array[i], i, array); }
        }
    }

    var st = new SlideTrans(container, slider, count, { Vertical: false });

    var nums = [];
    //插入数字
    for (var i = 0, n = st._count - 1; i <= n; ) {
        (nums[i] = slide$("idNum").appendChild(document.createElement("li"))).innerHTML = ++i;
    }

    forEach(nums, function (o, i) {
        o.onmouseover = function () { o.className = "on"; st.Auto = false; st.Run(i); }
        o.onmouseout = function () { o.className = ""; st.Auto = true; st.Run(); }
    })

    var images = [];
    var idSliderContainer = document.getElementById('idSlider');
    images = idSliderContainer.getElementsByTagName('img');
    //alert(images.length) ;

    forEach(images, function (o, i) {
        o.onmouseover = function () { st.Auto = false; st.Run(i); }
        o.onmouseout = function () { st.Auto = true; st.Run(); }
    })


    st.onStart = function () {
        forEach(nums, function (o, i) { o.className = st.Index == i ? "on" : ""; })
    }
    st.Run();
}


//from slide.js
var slide$ = function (id) {
    return "string" == typeof id ? document.getElementById(id) : id;
};

var Extend = function (destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}

var CurrentStyle = function (element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
}

var Bind = function (object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function () {
        return fun.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var Tween = {
    Quart: {
        easeOut: function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }
    },
    Back: {
        easeOut: function (t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        }
    },
    Bounce: {
        easeOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        }
    }
}


//容器对象,滑动对象,切换数量
var SlideTrans = function (container, slider, count, options) {
    this._slider = slide$(slider);
    this._container = slide$(container); //容器对象
    this._timer = null; //定时器
    this._count = Math.abs(count); //切换数量
    this._target = 0; //目标值
    this._t = this._b = this._c = 0; //tween参数

    this.Index = 0; //当前索引

    this.SetOptions(options);

    this.Auto = !!this.options.Auto;
    this.Duration = Math.abs(this.options.Duration);
    this.Time = Math.abs(this.options.Time);
    this.Pause = Math.abs(this.options.Pause);
    this.Tween = this.options.Tween;
    this.onStart = this.options.onStart;
    this.onFinish = this.options.onFinish;

    var bVertical = !!this.options.Vertical;
    this._css = bVertical ? "top" : "left"; //方向

    //样式设置
    var p = CurrentStyle(this._container).position;
    p == "relative" || p == "absolute" || (this._container.style.position = "relative");
    this._container.style.overflow = "hidden";
    this._slider.style.position = "absolute";

    this.Change = this.options.Change ? this.options.Change :
		this._slider[bVertical ? "offsetHeight" : "offsetWidth"] / this._count;
};
SlideTrans.prototype = {
    //设置默认属性
    SetOptions: function (options) {
        this.options = {//默认值
            Vertical: true, //是否垂直方向（方向不能改）
            Auto: true, //是否自动
            Change: 0, //改变量
            Duration: 50, //滑动持续时间
            Time: 10, //滑动延时
            Pause: 6000, //停顿时间(Auto为true时有效)
            onStart: function () { }, //开始转换时执行
            onFinish: function () { }, //完成转换时执行
            Tween: Tween.Quart.easeOut//tween算子
        };
        Extend(this.options, options || {});
    },
    //开始切换
    Run: function (index) {
        //修正index
        index == undefined && (index = this.Index);
        index < 0 && (index = this._count - 1) || index >= this._count && (index = 0);
        //设置参数
        this._target = -Math.abs(this.Change) * (this.Index = index);
        this._t = 0;
        this._b = parseInt(CurrentStyle(this._slider)[this.options.Vertical ? "top" : "left"]);
        this._c = this._target - this._b;

        this.onStart();
        this.Move();
    },
    //移动
    Move: function () {
        clearTimeout(this._timer);
        //未到达目标继续移动否则进行下一次滑动
        if (this._c && this._t < this.Duration) {
            this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c, this.Duration)));
            this._timer = setTimeout(Bind(this, this.Move), this.Time);
        } else {
            this.MoveTo(this._target);
            this.Auto && (this._timer = setTimeout(Bind(this, this.Next), this.Pause));
        }
    },
    //移动到
    MoveTo: function (i) {
        this._slider.style[this._css] = i + "px";
    },
    //下一个
    Next: function () {
        this.Run(++this.Index);
    },
    //上一个
    Previous: function () {
        this.Run(--this.Index);
    },
    //停止
    Stop: function () {
        clearTimeout(this._timer); this.MoveTo(this._target);
    }
};



/*getqq*/
function getQQ() 
{
    $.ajax({
        url: "/ajax/contactqq",
        type: 'GET', dataType: 'html', timeout: 30000,
        success: function (html) {
            if ("" != html) {
                $('#contactqq').html(html);
            }
        }
    });
}


/*show ajex menu*/
function showAjaxMemu(ctrl) {
    //function ajaxmenu(ctrlObj, timeout, cache, duration, pos, recall, idclass, contentclass)
    var screenHeight = document.documentElement.clientHeight;
    ajaxmenu(ctrl, 1000, 1, 2, '00', null, null, null, { 'maxh': screenHeight });
}

/*baidu map*/
function GetBaiduLon(latlon) {
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(0, pos);
        }
    }

    return ret;
}

function GetBaiduLat(latlon) {
    var ret = '';
    if ('' != latlon) {
        var pos = latlon.indexOf(' ', 0);
        if (pos > 0) {
            ret = latlon.substr(pos + 1);
        }
    }

    return ret;
}

/*end of baidu map*/

function initCommonPageScriptHighLightenMenu() {
    var currUrl = window.location.href;
    var pathName = window.location.pathname;
    if ("" == pathName)
    {
        currUrl = currUrl + "/" + "default";
    }
    else if ("/" == pathName)
    {
        currUrl = currUrl + "default";
    }
    //alert(currUrl);
    currUrl = currUrl.toLowerCase();
    var urls = $(".nav a");
    for (var i = 0; i < urls.length; i++) {
        var itemurl = urls[i].href;
        if (0 == i) 
        {
            //alert(itemurl);
        }
        itemurl = itemurl.toLowerCase();
        if ('' != itemurl) {

            if (currUrl == itemurl) {
                //alert('-');
                $(urls[i]).addClass('currnav');
                break;
            }
        }
    }
}


function initCommonPageScriptLazyLoad() {
    $("img.lazy").lazyload();
}

function initCommonPageScriptMarquee() {
    if ($("#marquee").length > 0) {
        $("#marquee").marquee({ yScroll: "bottom" });
    }
}

function initCommonPageScriptWeixin() {
    if ($("#weixin").length > 0) {
        $("#weixin").hoverDelay(
        {
            hoverDuring: 1000,
            hoverEvent: function () {
                showAjaxMemu($("#weixin").get(0));
                //alert('dd');
            }
        });
    }
}


function initCommonPageScriptQrcode() 
{
    $(".qrall").each(function () {
        var temp = this;
        $(this).hoverDelay(
            {
                hoverDuring: 500,
                hoverEvent: function () {
                    //alert($(temp).html());
                    ajaxmenu(temp, 200, 1, 2, '00', null, null, null, { maxh: 900 });
                }
            }
           );
    }
    );
}


function initCommonPageScriptCompany() {
    $(".welcomecompany").each(function () {
        var temp = this;
        $(this).hoverDelay(
            {
                hoverDuring: 500,
                hoverEvent: function () {
                    //alert($(temp).html());
                    ajaxmenu(temp, 200, 1, 2, '43', null, null, null, { maxh: 900 });
                }
            }
           );
    }
    );
}



function initCommonPageScriptLbs() {
    if ($("#lbs").length > 0) {
        $("#lbs").hoverDelay(
        {
            hoverDuring: 500,
            hoverEvent: function () {
                //ajaxmenu(this, 1000, 1, 2, '00', null, null, null, { maxh: 900 });
                ajaxmenu($("#lbs").get(0), 200, 1, 2, '43', null, null, null, { maxh: 900 });
                //alert('dd');
            }
        });
    }
}


function initCommonPageScriptHistory() {
    if ($(".historylinkTop").length > 0) {
        $(".historylinkTop").hoverDelay(
        {
            hoverDuring: 1000,
            hoverEvent: function () {
                showAjaxMemu($(".historylinkTop").get(0));
            }
        });
    }
}


function initCommonPageScriptFloat() {
    $("#righterbar").float({ position: "rm" });
    $("#bottombar").float({ position: "b" });

    if ($("#liveChatBar").length > 0) {
        $("#liveChatBar").removeClass("hide");
        $("#liveChatBar").float({ position: "lm" });
    }
}

function initAdBanner() {
    $('.topadbanner').unslider
    (
        {
            dots: true
        }
    );
}

function initCommonPageScriptAll() {
    initCommonPageScriptLbs();
    initCommonPageScriptQrcode();
    initCommonPageScriptCompany();
    initCommonPageScriptWeixin();
    initCommonPageScriptHistory();
    initCommonPageScriptHighLightenMenu();
    initCommonPageScriptFloat();
    initCommonPageScriptMarquee();
    initCommonPageScriptLazyLoad();

    initAdBanner();

    gotoTop();

    processLanguage() ;
}

function hideLiveChatBarbody() {
    var barBody = $("#liveChatBarbody");
    var onlinechatcollapsed = $("#onlinechatcollapsed");
    if (barBody.hasClass("hide"))
    {
        barBody.removeClass("hide");
        onlinechatcollapsed.addClass("hide");
    }
    else {
        barBody.addClass("hide");
        onlinechatcollapsed.removeClass("hide");
    }
}


function enableTableHover() {

    $('table.general_table tr').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
}


    //经过变色
$('table.general_table tr').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});



function gotoTop(min_height) {
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<div id="gotoTop"><em>顶部</em></div>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    $("body").append(gotoTop_html);
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function () {
            $('html,body').animate({ scrollTop: 0 }, 1);
        }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function () { },
        function () {         
        });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if (s > min_height) {
            $("#gotoTop").fadeIn(500);
            //alert(document.body.clientWidth);
            //$("#gotoTop").text(document.body.clientWidth);
            //$("#gotoTop").css("margin-left", "465px");
        } else {
            $("#gotoTop").fadeOut(500);
        };
    });
};

function checkLbs(ctrl) {
    $.get("/http/lbs",
                { command: 'check'
                },
                function (data) {
                    var json = eval('(' + data + ')');
                    var callbackfunname = "callbackCheckLbs(json,ctrl)";
                    eval(callbackfunname)
                }
                );
 }

 function callbackCheckLbs(json, ctrl) {
     if ("0" != json.resultId) {
         var url = $(ctrl).attr("href");
         configMyLocation(url);
     }
     else {
         var url = $(ctrl).attr("href");
         window.location = url;
     }
 }


 function configMyLocation(targetUrl) {
     hideMenu();
     var url = "/window/mylocation?url={0}";
     url = url.format(targetUrl);
     var v = { 'maxh': 800, 'pos': '00', 'cache': 0 };
     showWindow("MyLocation", url, 'get', -1, v);
 }
    
 function callbackConfigMyLocation(targetUrl)
 {
     window.location = targetUrl;
 }



 //radiobuttonlist
 function getSelectedRadioButtonListIndex(ctrl) {
     var ret = -1;
     var children;
     var id = ctrl.attr("id");
     var string = '#' + id + ' input';
     children = $(string);
     for (var i = 0; i < children.length; i++) {
         var checked = $(children[i])[0].checked;
         if (true == checked) {
             ret = i;
             break;
         }
     }
     return ret;
 }


 function setSelectedRadioButtonListIndex(id, index, callback) {
     var children;
     var string = '#' + id + ' input';
     children = $(string);
     for (var i = 0; i < children.length; i++) {
         if (i == index) {
             $(children[i])[0].checked = true;
             break;
         }
     }

     if ('' != callback) {
         eval(callback+"()");
     }

     changeRadio($('#' + id)[0]);
 }

 function decroateRadioList(queryObj) {
     var callback = '';
     if (arguments.length > 1) 
     {
         callback = arguments[1];
     }

     var id = queryObj.attr("id");
     var inputString = '#' + id + ' input';
     var inputs = $(inputString);
     var ul = $("<ul class='ul_radiobuttonlist clearfix'></ul>");
     var what = queryObj.append(ul);
     for (var i = 0; i < inputs.length; i++) {
         var tempLabel = $(inputs[i])[0].nextSibling;
         var text = $(tempLabel).html();
         var html = $(inputs[i])[0].outerHTML;
         var liText = "<li id='myli{0}' onclick=setSelectedRadioButtonListIndex('{3}',{0},'{4}')>{1}<span>{2}</span></li>";
         liText = liText.format(i, html,text, id,callback);
         ul.append($(liText));
         $(inputs[i]).remove();
         $(tempLabel).remove();
     }

     adjustWidth(queryObj[0]);
 }

 function changeRadio(self) {
     var id = self.id;
     
     var index = getSelectedRadioButtonListIndex($(self));
     if (-1 != index) {
         var liTemplate = "myli{0}";
         var li = liTemplate.format(index);
         $("#" + id + " #" + li).addClass("current");
         var string = '#' + id + ' input';
         var children = $(string);
         for (var i = 0; i < children.length; i++) {
             if (i != index) {
                 li = liTemplate.format(i);
                 $("#" + id + " #" + li).removeClass("current");
             }
         }
     }
 }

 function adjustWidth(self) {
     var id = self.id;
     var string = $("#" + id + " ul li");
     var lis = $(string);
     var maxWidth = 0;
     var i;
     for (i = 0; i < lis.length; i++) {
         var width = $(lis[i])[0].clientWidth;
         maxWidth = Math.max(maxWidth, width);
     }
     if (maxWidth > 0) {
         for (i = 0; i < lis.length; i++) {
             $(lis[i])[0].style.width = maxWidth + 'px';
         }
     }
 }


 function ifSupportHtml5() {
     var ret = false;
     if (window.applicationCache) {
         ret = true;
     }
     else {
         ret = false;
     }
     return ret;
 }/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $ 
 */
/*
 * update by:fengyan http://eflylab.cnblogs.com
 * 增加FireFox 下中文 的支持 在198 行加了一个BIND 语句
 * 增加对自定义查询结果的支持属性resultSearch
 * 详细内容参见：http://www.cnblogs.com/eflylab/archive/2009/09/18/1569043.html
 */
;(function($) {
	
$.fn.extend({
	autocomplete: function(urlOrData, options) {
	//alert('urlOrData' + urlOrData) ;
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);

		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };
		
		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;
		
		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);
	
	var blockSubmit;
	
	// prevent form submit in opera when selecting with return key
    var opera = /opera/.test(navigator.userAgent.toLowerCase());
	opera && $(input.form).bind("submit.autocomplete", function() {
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});
	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind((opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// a keypress means the input has focus
		// avoids issue where input had focus before the autocomplete was applied
		hasFocus = 1;
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {
		
			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEUP:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageUp();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.PAGEDOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.pageDown();
				} else {
					onChange(0, true);
				}
				break;
			
			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
			case KEY.RETURN:
				if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					event.preventDefault();
					blockSubmit = true;
					return false;
				}
				break;
				
			case KEY.ESC:
				select.hide();
				break;
				
			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?		
		
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
		

	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	}).bind("input", function() {
            // @hack by liqt:support for inputing  chinese characters  in firefox 
            onChange(0, true);
        });
	
	
	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;
		
		var v = selected.result;
		previousValue = v;
		
		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				var seperator = options.multipleSeparator.length;
				var cursorAt = $(input).selection().start;
				var wordAt, progress = 0;
				$.each(words, function(i, word) {
					progress += word.length;
					if (cursorAt <= progress) {
						wordAt = i;
						return false;
					}
					progress += seperator;
				});
				words[wordAt] = v;
				// TODO this should set the cursor to the right position, but it gets overriden somewhere
				//$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
				v = words.join( options.multipleSeparator );
			}
			v += options.multipleSeparator;
		}
		writelog(v) ;
		$input.val(v);
		hideResultsNow();
		//alert(selected.data.code) ;
		$input.trigger("result", [selected.data, selected.value]);
		options.onSelected(selected.data,$input) ;
		return true;
	}
	
	var _timer = {};
	function delay_till_last(id, fn, wait) {
	    if (_timer[id]) {
	        window.clearTimeout(_timer[id]);
	        delete _timer[id];
	    }

	    return _timer[id] = window.setTimeout(function () {
	        fn();
	        delete _timer[id];
	    }, wait);
	}

	function onChange(crap, skipPrevCheck)
	{
	    delay_till_last('input', function () {
	        doOnChange(crap, skipPrevCheck);
	    }, options.debounceDelay);
	}

	function doOnChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		
		var currentValue = $input.val();
		
		if ( !skipPrevCheck && currentValue == previousValue )
			return;
		
		previousValue = currentValue;
		
		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};
	
	function trimWords(value) {
		if (!value)
			return [""];
		if (!options.multiple)
			return [$.trim(value)];
		return $.map(value.split(options.multipleSeparator), function(word) {
			return $.trim(value).length ? $.trim(word) : null;
		});
	}
	
	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		if (words.length == 1) 
			return words[0];
		var cursorAt = $(input).selection().start;
		if (cursorAt == value.length) {
			words = trimWords(value)
		} else {
			words = trimWords(value.replace(value.substring(cursorAt), ""));
		}
		return words[words.length - 1];
	}
	
	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
	writelog('fill' + sValue) ;
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$(input).selection(previousValue.length, previousValue.length + sValue.length);
		}
	};
	
	function writelog(msg)
	{
	    //master('TextBoxMobilePhone').val(msg) ;
	}

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box					
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else {
							$input.val( "" );
							$input.trigger("result", null);
						}
					}
				}
			);
		}
	};
	//系统默认接收数据
	function receiveData(q, data) {
	
	//alert('receiveData') ;
	//alert(hasFocus) ;
	//alert(data) ;
	//master('TextBoxSelfevaluation').val(data) ;
		if ( data && data.length ) {
		//master('TextBoxServiceMode').val('aaaa') ;
		//alert('receiveData ' + data) ;
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
		//master('TextBoxServiceMode').val('aaaabbb') ;
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
			
			
			//alert(term) ;
            term = term.trim() ;
		if (!options.matchCase)
			term = term.toLowerCase();
		
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
		////alert('cache') ;
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			
			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});
			
			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url + '?' + options.urlparaname+'='+encodeURIComponent(term),
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
				    if(''!=data)
				    {
				    //data = data.toJSONString() ;
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
					}
					else{
					}
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};
	
		function parse(data) {
		var parsed = [];
		var json = eval('(' + data + ')');   
		var rows = data.split("},");
		//alert(rows.length) ;
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				parsed[parsed.length] = {
					data: json[i],
					value:json[i],
					result: options.formatResult && options.formatResult(row, row[0]) || json[i].name
				};
			}
		}
		return parsed;
		
	};
	
	function parse0(data) {
	//alert('parse:'+data) ;
		var parsed = [];
		//data =  '[{ name: "深发展A", code: "000001",spell:"sfza" },{ name: "万科A", code: "000002",spell:"wka"},{ name: "ST 国 农", code: "000004",spell:"stgn" }]' ;
		var json = eval('(' + data + ')');   
		//alert(json) ;
		alert(json[1].name) ;
		var rows = data.split("},");
		////alert(rows.length) ;
		alert(rows.length) ;
		for (var i=0; i < rows.length; i++) {
		alert('row:222'+rows[i]) ;	
			var row = $.trim(rows[i]);
			
			if (row) {
			
				row = row.split("|");
			alert('row::ssssssssssssss'+row) ;	
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	debounceDelay: 300,
	matchCase: false,
	matchSubset: true,
	matchContains: false, 
	cacheLength: 10,
	reasultSearch:null,// add by fengyan
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
    scroll: true,
    scrollHeight: 180
};  

$.Autocompleter.Cache = function(options) {
//alert('Cache') ;
	var data = {};
	var length = 0;
	var allData = new Array();// add by fengyan
	function matchSubset(s, sub) {	
		
		if (!options.matchCase) 
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (options.matchContains == "word"){
			i = s.toLowerCase().search("\\b" + sub.toLowerCase());
		}
		
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};
	
	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}
	
	function populate(){
	//alert('populate') ;
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;
		
		// track all options for minChars = 0
		stMatchSets[""] = [];
		
		
		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
			
			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;
				
			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] ) 
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};
			// push the current match into the set list
			stMatchSets[firstChar].push(row);
			//add by fengyan
			allData.push(row);		
			////alert(allData[i].data.spell);
			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);				
			}
		};
		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
////alert($(value)[0].data.spell);
		});
	}
	
	// populate any existing data
	setTimeout(populate, 25);
	
	function flush(){
//alert('flush') ;
		data = {};
		length = 0;
	}
	
	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}				
				return csub;
			} 			
			// if the exact item exists, use it
			//add by fengyan 
			else if(typeof(options.reasultSearch)=="function")
			{
				var csub = [];
				$.each(allData, function(i, row) {
					var ms = options.reasultSearch(row,q);
					if(ms!=null && ms!=false)
					{
						csub.push(ms);
					}
				});
				return csub;			
			}
			else if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
//alert('.Autocompleter.Select') ;
	var CLASSES = {
		ACTIVE: "ac_over"
	};
	
	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;
	
	// Create results
	function init() {
		
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);
	
		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
	            active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
			    $(target(event)).addClass(CLASSES.ACTIVE);            
	        }
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
		    // TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
		    //alert($(input).attr("nofocusonselect"));
			var attrName = "focusonselect";
			var existAttrFocusOnSelect = input.hasAttribute(attrName);
			if (false == existAttrFocusOnSelect || true == $(input).attr(attrName))
			{
			    input.focus();
			}
			
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});
		
		if( options.width > 0 )
			element.css("width", options.width);
			
		needsInit = false;
	} 
	
	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
        var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
        if(options.scroll) {
            var offset = 0;
            listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
            if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
            } else if(offset < list.scrollTop()) {
                list.scrollTop(offset);
            }
        }
	};
	
	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}
	
	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}
	
	function fillList() {
		list.empty();
		//alert('data'+data[0].data) ;
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
		//alert('data[i].data:'+data[i].data) ;
		//alert('data[i].value:'+data[i].value) ;
		
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			//alert('data[i].value '+data[i].data) ;
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}
	
	return {
	
		display: function(d, q) {
		//alert('display') ;
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
            if(options.scroll) {
                list.scrollTop(0);
                list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});
				
                var msie = /msie/.test(navigator.userAgent.toLowerCase());
                if(msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
                    list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
                }
                
            }
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.fn.selection = function(start, end) {
	if (start !== undefined) {
		return this.each(function() {
			if( this.createTextRange ){
				var selRange = this.createTextRange();
				if (end === undefined || start == end) {
					selRange.move("character", start);
					selRange.select();
				} else {
					selRange.collapse(true);
					selRange.moveStart("character", start);
					selRange.moveEnd("character", end);
					selRange.select();
				}
			} else if( this.setSelectionRange ){
				this.setSelectionRange(start, end);
			} else if( this.selectionStart ){
				this.selectionStart = start;
				this.selectionEnd = end;
			}
		});
	}
	var field = this[0];
	if ( field.createTextRange ) {
		var range = document.selection.createRange(),
			orig = field.value,
			teststring = "<->",
			textLength = range.text.length;
		range.text = teststring;
		var caretAt = field.value.indexOf(teststring);
		field.value = orig;
		this.selection(caretAt, caretAt + textLength);
		return {
			start: caretAt,
			end: caretAt + textLength
		}
	} else if( field.selectionStart !== undefined ){
		return {
			start: field.selectionStart,
			end: field.selectionEnd
		}
	}
};

})(jQuery);/*
	[Discuz!] (C)2001-2009 Comsenz Inc.
	This is NOT a freeware, use is subject to license terms

	$Id: common.js 22634 2011-05-16 05:52:08Z monkey $
*/

var BROWSER = {};
var USERAGENT = navigator.userAgent.toLowerCase();
browserVersion({ 'ie': 'msie', 'firefox': '', 'chrome': '', 'opera': '', 'safari': '', 'mozilla': '', 'webkit': '', 'maxthon': '', 'qq': 'qqbrowser' });
if (BROWSER.safari) {
    BROWSER.firefox = true;
}
BROWSER.opera = BROWSER.opera ? opera.version() : 0;

HTMLNODE = document.getElementsByTagName('head')[0].parentNode;
if (BROWSER.ie) {
    BROWSER.iemode = parseInt(typeof document.documentMode != 'undefined' ? document.documentMode : BROWSER.ie);
    HTMLNODE.className = 'ie_all ie' + BROWSER.iemode;
}

var CSSLOADED = [];
var JSLOADED = [];
var JSMENU = [];
JSMENU['active'] = [];
JSMENU['timer'] = [];
JSMENU['drag'] = [];
JSMENU['layer'] = 0;
JSMENU['zIndex'] = { 'win': 200, 'menu': 300, 'dialog': 400, 'prompt': 500 };
JSMENU['float'] = '';
var AJAX = [];
AJAX['url'] = [];
AJAX['stack'] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var CURRENTSTYPE = null;
var discuz_uid = isUndefined(discuz_uid) ? 0 : discuz_uid;
var creditnotice = isUndefined(creditnotice) ? '' : creditnotice;
var cookiedomain = isUndefined(cookiedomain) ? '' : cookiedomain;
var cookiepath = isUndefined(cookiepath) ? '' : cookiepath;
var EXTRAFUNC = [], EXTRASTR = '';
EXTRAFUNC['showmenu'] = [];

var DISCUZCODE = [];
DISCUZCODE['num'] = '-1';
DISCUZCODE['html'] = [];

var USERABOUT_BOX = true;
var USERCARDST = null;
var CLIPBOARDSWFDATA = '';
var NOTICETITLE = [];

if (BROWSER.firefox && window.HTMLElement) {
    HTMLElement.prototype.__defineSetter__('outerHTML', function (sHTML) {
        var r = this.ownerDocument.createRange();
        r.setStartBefore(this);
        var df = r.createContextualFragment(sHTML);
        this.parentNode.replaceChild(df, this);
        return sHTML;
    });

    HTMLElement.prototype.__defineGetter__('outerHTML', function () {
        var attr;
        var attrs = this.attributes;
        var str = '<' + this.tagName.toLowerCase();
        for (var i = 0; i < attrs.length; i++) {
            attr = attrs[i];
            if (attr.specified)
                str += ' ' + attr.name + '="' + attr.value + '"';
        }
        if (!this.canHaveChildren) {
            return str + '>';
        }
        return str + '>' + this.innerHTML + '</' + this.tagName.toLowerCase() + '>';
    });

    HTMLElement.prototype.__defineGetter__('canHaveChildren', function () {
        switch (this.tagName.toLowerCase()) {
            case 'area': case 'base': case 'basefont': case 'col': case 'frame': case 'hr': case 'img': case 'br': case 'input': case 'isindex': case 'link': case 'meta': case 'param':
                return false;
        }
        return true;
    });
}

function discuz$(id) {
    return !id ? null : document.getElementById(id);
}

function $C(classname, ele, tag) {
    var returns = [];
    ele = ele || document;
    tag = tag || '*';
    if (ele.getElementsByClassName) {
        var eles = ele.getElementsByClassName(classname);
        if (tag != '*') {
            for (var i = 0, L = eles.length; i < L; i++) {
                if (eles[i].tagName.toLowerCase() == tag.toLowerCase()) {
                    returns.push(eles[i]);
                }
            }
        } else {
            returns = eles;
        }
    } else {
        eles = ele.getElementsByTagName(tag);
        var pattern = new RegExp("(^|\\s)" + classname + "(\\s|$)");
        for (i = 0, L = eles.length; i < L; i++) {
            if (pattern.test(eles[i].className)) {
                returns.push(eles[i]);
            }
        }
    }
    return returns;
}

function _attachEvent(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj : eventobj;
    if (obj.addEventListener) {
        obj.addEventListener(evt, func, false);
    } else if (eventobj.attachEvent) {
        obj.attachEvent('on' + evt, func);
    }
}

function _detachEvent(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj : eventobj;
    if (obj.removeEventListener) {
        obj.removeEventListener(evt, func, false);
    } else if (eventobj.detachEvent) {
        obj.detachEvent('on' + evt, func);
    }
}

function browserVersion(types) {
    var other = 1;
    for (i in types) {
        var v = types[i] ? types[i] : i;
        if (USERAGENT.indexOf(v) != -1) {
            var re = new RegExp(v + '(\\/|\\s)([\\d\\.]+)', 'ig');
            var matches = re.exec(USERAGENT);
            var ver = matches != null ? matches[2] : 0;
            other = ver !== 0 && v != 'mozilla' ? 0 : other;
        } else {
            var ver = 0;
        }
        eval('BROWSER.' + i + '= ver');
    }
    BROWSER.other = other;
}

function getEvent() {
    if (document.all) return window.event;
    func = getEvent.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof (arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

function isUndefined(variable) {
    return typeof variable == 'undefined' ? true : false;
}

function in_array(needle, haystack) {
    if (typeof needle == 'string' || typeof needle == 'number') {
        for (var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}

function trim(str) {
    return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}

function strlen(str) {
    return (BROWSER.ie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

function mb_strlen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
    }
    return len;
}

function mb_cutstr(str, maxlen, dot) {
    var len = 0;
    var ret = '';
    var dot = !dot ? '...' : '';
    maxlen = maxlen - dot.length;
    for (var i = 0; i < str.length; i++) {
        len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
        if (len > maxlen) {
            ret += dot;
            break;
        }
        ret += str.substr(i, 1);
    }
    return ret;
}

function preg_replace(search, replace, str, regswitch) {
    var regswitch = !regswitch ? 'ig' : regswitch;
    var len = search.length;
    for (var i = 0; i < len; i++) {
        re = new RegExp(search[i], regswitch);
        str = str.replace(re, typeof replace == 'string' ? replace : (replace[i] ? replace[i] : replace[0]));
    }
    return str;
}

function htmlspecialchars(str) {
    return preg_replace(['&', '<', '>', '"'], ['&amp;', '&lt;', '&gt;', '&quot;'], str);
}

function display(id) {
    var obj = discuz$(id);
    if (obj.style.visibility) {
        obj.style.visibility = obj.style.visibility == 'visible' ? 'hidden' : 'visible';
    } else {
        obj.style.display = obj.style.display == '' ? 'none' : '';
    }
}

function checkall(form, prefix, checkall) {
    var checkall = checkall ? checkall : 'chkall';
    count = 0;
    for (var i = 0; i < form.elements.length; i++) {
        var e = form.elements[i];
        if (e.name && e.name != checkall && (!prefix || (prefix && e.name.match(prefix)))) {
            e.checked = form.elements[checkall].checked;
            if (e.checked) {
                count++;
            }
        }
    }
    return count;
}

function setcookie(cookieName, cookieValue, seconds, path, domain, secure) {
    var expires = new Date();
    if (cookieValue == '' || seconds < 0) {
        cookieValue = '';
        seconds = -2592000;
    }
    expires.setTime(expires.getTime() + seconds * 1000);
    domain = !domain ? cookiedomain : domain;
    path = !path ? cookiepath : path;
    document.cookie = escape(cookiepre + cookieName) + '=' + escape(cookieValue)
		+ (expires ? '; expires=' + expires.toGMTString() : '')
		+ (path ? '; path=' + path : '/')
		+ (domain ? '; domain=' + domain : '')
		+ (secure ? '; secure' : '');
}

function getcookie(name, nounescape) {
    name = cookiepre + name;
    var cookie_start = document.cookie.indexOf(name);
    var cookie_end = document.cookie.indexOf(";", cookie_start);
    if (cookie_start == -1) {
        return '';
    } else {
        var v = document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length));
        return !nounescape ? unescape(v) : v;
    }
}

function Ajax(recvType, waitId) {

    for (var stackId = 0; stackId < AJAX['stack'].length && AJAX['stack'][stackId] != 0; stackId++);
    AJAX['stack'][stackId] = 1;

    var aj = new Object();

    aj.loading = '请稍候...';
    aj.recvType = recvType ? recvType : 'XML';
    aj.waitId = waitId ? discuz$(waitId) : null;

    aj.resultHandle = null;
    aj.sendString = '';
    aj.targetUrl = '';
    aj.stackId = 0;
    aj.stackId = stackId;

    aj.setLoading = function (loading) {
        if (typeof loading !== 'undefined' && loading !== null) aj.loading = loading;
    };

    aj.setRecvType = function (recvtype) {
        aj.recvType = recvtype;
    };

    aj.setWaitId = function (waitid) {
        aj.waitId = typeof waitid == 'object' ? waitid : discuz$(waitid);
    };

    aj.createXMLHttpRequest = function () {
        var request = false;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
            if (request.overrideMimeType) {
                request.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) {
            var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
            for (var i = 0; i < versions.length; i++) {
                try {
                    request = new ActiveXObject(versions[i]);
                    if (request) {
                        return request;
                    }
                } catch (e) { }
            }
        }
        return request;
    };

    aj.XMLHttpRequest = aj.createXMLHttpRequest();
    aj.showLoading = function () {
        if (aj.waitId && (aj.XMLHttpRequest.readyState != 4 || aj.XMLHttpRequest.status != 200)) {
            aj.waitId.style.display = 'block';
            aj.waitId.innerHTML = '<span><img src="' + IMGDIR + '/loading.gif" class="vm"> ' + aj.loading + '</span>';
        }
    };

    aj.processHandle = function () {
        if (aj.XMLHttpRequest.readyState == 4 && aj.XMLHttpRequest.status == 200) {
            for (k in AJAX['url']) {
                if (AJAX['url'][k] == aj.targetUrl) {
                    AJAX['url'][k] = null;
                }
            }
            if (aj.waitId) {
                aj.waitId.style.display = 'none';
            }

            //alert(aj.XMLHttpRequest.responseText);
            aj.resultHandle(aj.XMLHttpRequest.responseText, aj);

            //			if(aj.recvType == 'HTML') {
            //				aj.resultHandle(aj.XMLHttpRequest.responseText, aj);
            //			} else if(aj.recvType == 'XML') {
            //				if(!aj.XMLHttpRequest.responseXML || !aj.XMLHttpRequest.responseXML.lastChild || aj.XMLHttpRequest.responseXML.lastChild.localName == 'parsererror') {
            //					aj.resultHandle('<a href="' + aj.targetUrl + '" target="_blank" style="color:red">内部错误，无法显示此内容</a>' , aj);
            //				} else {
            //					aj.resultHandle(aj.XMLHttpRequest.responseXML.lastChild.firstChild.nodeValue, aj);
            //				}
            //			}
            AJAX['stack'][aj.stackId] = 0;
        }
    };

    aj.get = function (targetUrl, resultHandle) {
        targetUrl = hostconvert(targetUrl);
        setTimeout(function () { aj.showLoading() }, 250);
        if (in_array(targetUrl, AJAX['url'])) {
            return false;
        } else {
            AJAX['url'].push(targetUrl);
        }
        aj.targetUrl = targetUrl;
        aj.XMLHttpRequest.onreadystatechange = aj.processHandle;
        aj.resultHandle = resultHandle;
        var attackevasive = isUndefined(attackevasive) ? 0 : attackevasive;
        var delay = attackevasive & 1 ? (aj.stackId + 1) * 1001 : 100;
        if (window.XMLHttpRequest) {
            setTimeout(function () {
                aj.XMLHttpRequest.open('GET', aj.targetUrl);
                aj.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                aj.XMLHttpRequest.send(null);
            }, delay);
        } else {
            setTimeout(function () {
                aj.XMLHttpRequest.open("GET", targetUrl, true);
                aj.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                aj.XMLHttpRequest.send();
            }, delay);
        }
    };
    aj.post = function (targetUrl, sendString, resultHandle) {
        targetUrl = hostconvert(targetUrl);
        setTimeout(function () { aj.showLoading() }, 250);
        if (in_array(targetUrl, AJAX['url'])) {
            return false;
        } else {
            AJAX['url'].push(targetUrl);
        }
        aj.targetUrl = targetUrl;
        aj.sendString = sendString;
        aj.XMLHttpRequest.onreadystatechange = aj.processHandle;
        aj.resultHandle = resultHandle;
        aj.XMLHttpRequest.open('POST', targetUrl);
        aj.XMLHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        aj.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        aj.XMLHttpRequest.send(aj.sendString);
    };
    return aj;
}

function getHost(url) {
    var host = "null";
    if (typeof url == "undefined" || null == url) {
        url = window.location.href;
    }
    var regex = /^\w+\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined" && null != match) {
        host = match[1];
    }
    return host;
}

function hostconvert(url) {
    if (!url.match(/^https?:\/\//)) url = SITEURL + url;
    var url_host = getHost(url);
    var cur_host = getHost().toLowerCase();
    if (url_host && cur_host != url_host) {
        url = url.replace(url_host, cur_host);
    }
    return url;
}

function newfunction(func) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
    return function (event) {
        doane(event);
        window[func].apply(window, args);
        return false;
    }
}

function evalscript(s) {
    if (s.indexOf('<script') == -1) return s;
    var p = /<script[^\>]*?>([^\x00]*?)<\/script>/ig;
    var arr = [];
    while (arr = p.exec(s)) {
        var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
        var arr1 = [];
        arr1 = p1.exec(arr[0]);
        if (arr1) {
            appendscript(arr1[1], '', arr1[2], arr1[3]);
        } else {
            p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
            arr1 = p1.exec(arr[0]);
            appendscript('', arr1[2], arr1[1].indexOf('reload=') != -1);
        }
    }
    return s;
}

var safescripts = {}, evalscripts = [];
function safescript(id, call, seconds, times, timeoutcall, endcall, index) {
    seconds = seconds || 1000;
    times = times || 0;
    var checked = true;
    try {
        if (typeof call == 'function') {
            call();
        } else {
            eval(call);
        }
    } catch (e) {
        checked = false;
    }
    if (!checked) {
        if (!safescripts[id] || !index) {
            safescripts[id] = safescripts[id] || [];
            safescripts[id].push({
                'times': 0,
                'si': setInterval(function () {
                    safescript(id, call, seconds, times, timeoutcall, endcall, safescripts[id].length);
                }, seconds)
            });
        } else {
            index = (index || 1) - 1;
            safescripts[id][index]['times']++;
            if (safescripts[id][index]['times'] >= times) {
                clearInterval(safescripts[id][index]['si']);
                if (typeof timeoutcall == 'function') {
                    timeoutcall();
                } else {
                    eval(timeoutcall);
                }
            }
        }
    } else {
        try {
            index = (index || 1) - 1;
            if (safescripts[id][index]['si']) {
                clearInterval(safescripts[id][index]['si']);
            }
            if (typeof endcall == 'function') {
                endcall();
            } else {
                eval(endcall);
            }
        } catch (e) { }
    }
}

function $F(func, args, script) {
    var run = function () {
        var argc = args.length, s = '';
        for (i = 0; i < argc; i++) {
            s += ',args[' + i + ']';
        }
        eval('var check = typeof ' + func + ' == \'function\'');
        if (check) {
            eval(func + '(' + s.substr(1) + ')');
        } else {
            setTimeout(function () { checkrun(); }, 50);
        }
    };
    var checkrun = function () {
        if (JSLOADED[src]) {
            run();
        } else {
            setTimeout(function () { checkrun(); }, 50);
        }
    };
    script = script || 'common_extra';
    src = JSPATH + script + '.js?' + VERHASH;
    if (!JSLOADED[src]) {
        appendscript(src);
    }
    checkrun();
}

function appendscript(src, text, reload, charset) {
    var id = hash(src + text);
    if (!reload && in_array(id, evalscripts)) return;
    if (reload && discuz$(id)) {
        discuz$(id).parentNode.removeChild(discuz$(id));
    }

    evalscripts.push(id);
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset : (BROWSER.firefox ? document.characterSet : document.charset);
    try {
        if (src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function () {
                scriptNode.onloadDone = true;
                JSLOADED[src] = 1;
            };
            scriptNode.onreadystatechange = function () {
                if ((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    JSLOADED[src] = 1;
                }
            };
        } else if (text) {
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch (e) { }
}

function stripscript(s) {
    return s.replace(/<script.*?>.*?<\/script>/ig, '');
}

function ajaxupdateevents(obj, tagName) {
    tagName = tagName ? tagName : 'A';
    var objs = obj.getElementsByTagName(tagName);
    for (k in objs) {
        var o = objs[k];
        ajaxupdateevent(o);
    }
}

function ajaxupdateevent(o) {
    if (typeof o == 'object' && o.getAttribute) {
        if (o.getAttribute('ajaxtarget')) {
            if (!o.id) o.id = Math.random();
            var ajaxevent = o.getAttribute('ajaxevent') ? o.getAttribute('ajaxevent') : 'click';
            var ajaxurl = o.getAttribute('ajaxurl') ? o.getAttribute('ajaxurl') : o.href;
            _attachEvent(o, ajaxevent, newfunction('ajaxget', ajaxurl, o.getAttribute('ajaxtarget'), o.getAttribute('ajaxwaitid'), o.getAttribute('ajaxloading'), o.getAttribute('ajaxdisplay')));
            if (o.getAttribute('ajaxfunc')) {
                o.getAttribute('ajaxfunc').match(/(\w+)\((.+?)\)/);
                _attachEvent(o, ajaxevent, newfunction(RegExp.$1, RegExp.$2));
            }
        }
    }
}

function ajaxget(url, showid, waitid, loading, display, recall) {
    waitid = typeof waitid == 'undefined' || waitid === null ? showid : waitid;
    var x = new Ajax();
    x.setLoading(loading);
    x.setWaitId(waitid);
    x.display = typeof display == 'undefined' || display == null ? '' : display;
    x.showId = discuz$(showid);

    if (url.substr(strlen(url) - 1) == '#') {
        url = url.substr(0, strlen(url) - 1);
        x.autogoto = 1;
    }

    var url = url + '&inajax=1&ajaxtarget=' + showid;
    x.get(url, function (s, x) {
        //alert('s=' + s);
        var evaled = false;
        if (s.indexOf('ajaxerror') != -1) {
            evalscript(s);
            evaled = true;
        }
        if (!evaled && (typeof ajaxerror == 'undefined' || !ajaxerror)) {
            if (x.showId) {
                x.showId.style.display = x.display;
                //alert('render');
                ajaxinnerhtml(x.showId, s);
                ajaxupdateevents(x.showId);
                if (x.autogoto) scroll(0, x.showId.offsetTop);
            }
        }

        ajaxerror = null;
        if (recall && typeof recall == 'function') {
            recall();
        } else if (recall) {
            eval(recall);
        }
        if (!evaled) evalscript(s);
    });
}

function ajaxpost(formid, showid, waitid, showidclass, submitbtn, recall) {
    var waitid = typeof waitid == 'undefined' || waitid === null ? showid : (waitid !== '' ? waitid : '');
    var showidclass = !showidclass ? '' : showidclass;
    var ajaxframeid = 'ajaxframe';
    var ajaxframe = discuz$(ajaxframeid);
    var formtarget = discuz$(formid).target;

    var handleResult = function () {
        var s = '';
        var evaled = false;

        showloading('none');
        try {
            s = discuz$(ajaxframeid).contentWindow.document.XMLDocument.text;
        } catch (e) {
            try {
                s = discuz$(ajaxframeid).contentWindow.document.documentElement.firstChild.wholeText;
            } catch (e) {
                try {
                    s = discuz$(ajaxframeid).contentWindow.document.documentElement.firstChild.nodeValue;
                } catch (e) {
                    s = '内部错误，无法显示此内容';
                }
            }
        }
        if (s != '' && s.indexOf('ajaxerror') != -1) {
            evalscript(s);
            evaled = true;
        }
        if (showidclass) {
            if (showidclass != 'onerror') {
                discuz$(showid).className = showidclass;
            } else {
                showError(s);
                ajaxerror = true;
            }
        }
        if (submitbtn) {
            submitbtn.disabled = false;
        }
        if (!evaled && (typeof ajaxerror == 'undefined' || !ajaxerror)) {
            ajaxinnerhtml(discuz$(showid), s);
        }
        ajaxerror = null;
        if (discuz$(formid)) discuz$(formid).target = formtarget;
        if (typeof recall == 'function') {
            recall();
        } else {
            eval(recall);
        }
        if (!evaled) evalscript(s);
        ajaxframe.loading = 0;
        discuz$('append_parent').removeChild(ajaxframe.parentNode);
    };
    if (!ajaxframe) {
        var div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = '<iframe name="' + ajaxframeid + '" id="' + ajaxframeid + '" loading="1"></iframe>';
        discuz$('append_parent').appendChild(div);
        ajaxframe = discuz$(ajaxframeid);
    } else if (ajaxframe.loading) {
        return false;
    }

    _attachEvent(ajaxframe, 'load', handleResult);

    showloading();
    discuz$(formid).target = ajaxframeid;
    var action = discuz$(formid).getAttribute('action');
    action = hostconvert(action);
    discuz$(formid).action = action.replace(/\&inajax\=1/g, '') + '&inajax=1';
    discuz$(formid).submit();
    if (submitbtn) {
        submitbtn.disabled = true;
    }
    doane();
    return false;
}

function ajaxmenu(ctrlObj, timeout, cache, duration, pos, recall, idclass, contentclass, v) {
    if (!ctrlObj.getAttribute('mid')) {
        var ctrlid = ctrlObj.id;
        if (!ctrlid) {
            ctrlObj.id = 'ajaxid_' + Math.random();
        }
    } else {
        var ctrlid = ctrlObj.getAttribute('mid');
        if (!ctrlObj.id) {
            ctrlObj.id = 'ajaxid_' + Math.random();
        }
    }
    var menuid = ctrlid + '_menu';
    var menu = discuz$(menuid);
    if (isUndefined(timeout)) timeout = 3000;
    if (isUndefined(cache)) cache = 1;
    if (isUndefined(pos)) pos = '43';
    if (isUndefined(duration)) duration = timeout > 0 ? 0 : 3;
    if (isUndefined(idclass)) idclass = 'p_pop';
    if (isUndefined(contentclass)) contentclass = 'p_opt';

    var maxh = isUndefined(v['maxh']) ? 600 : v['maxh'];

    var func = function () {
        showMenu({ 'ctrlid': ctrlObj.id, 'menuid': menuid, 'duration': duration, 'timeout': timeout, 'pos': pos, 'cache': cache, 'layer': 2, 'maxh': maxh });
        if (typeof recall == 'function') {
            recall();
        } else {
            eval(recall);
        }
    };

    if (menu) {
        if (menu.style.display == '') {
            var refresh = ctrlObj.getAttribute('refresh');
            if (1 == refresh) {
                var url = (!isUndefined(ctrlObj.href) ? ctrlObj.href : ctrlObj.attributes['href'].value);
                url += (url.indexOf('?') != -1 ? '&' : '?') + 'ajaxmenu=1';
                ajaxget(url, menuid + '_content', 'ajaxwaitid', '', '', func);
            }
            else {
                hideMenu(menuid);
            }
        } else {
            func();
        }
    } else {
        menu = document.createElement('div');
        menu.id = menuid;
        menu.style.display = 'none';
        menu.className = idclass;
        menu.innerHTML = '<div class="' + contentclass + '" id="' + menuid + '_content"></div>';
        discuz$('append_parent').appendChild(menu);
        var url = (!isUndefined(ctrlObj.href) ? ctrlObj.href : ctrlObj.attributes['href'].value);
        url += (url.indexOf('?') != -1 ? '&' : '?') + 'ajaxmenu=1';
        ajaxget(url, menuid + '_content', 'ajaxwaitid', '', '', func);
    }
    doane();
}

function hash(string, length) {
    var length = length ? length : 32;
    var start = 0;
    var i = 0;
    var result = '';
    filllen = length - string.length % length;
    for (i = 0; i < filllen; i++) {
        string += "0";
    }
    while (start < string.length) {
        result = stringxor(result, string.substr(start, length));
        start += length;
    }
    return result;
}

function stringxor(s1, s2) {
    var s = '';
    var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var max = Math.max(s1.length, s2.length);
    for (var i = 0; i < max; i++) {
        var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
        s += hash.charAt(k % 52);
    }
    return s;
}

function showPreview(val, id) {
    var showObj = discuz$(id);
    if (showObj) {
        showObj.innerHTML = val.replace(/\n/ig, "<bupdateseccoder />");
    }
}

function showloading(display, waiting) {
    var display = display ? display : 'block';
    var waiting = waiting ? waiting : '请稍候...';
    discuz$('ajaxwaitid').innerHTML = waiting;
    discuz$('ajaxwaitid').style.padding = "50px";
    discuz$('ajaxwaitid').style.background = "#5F6164";
    discuz$('ajaxwaitid').style.display = display;
}

function trimform(s) {
    var result;
    result = s.replace(/<form.*?>/ig, '');
    result = result.replace(/<\/form>/ig, '');
    return result;

}


function ajaxinnerhtml(showid, s) {
    //alert(showid);
    //alert(showid.tagName);
    //result = str.replace(/<form.*?>/ig, '');
    //result = result.replace(/<\/form>/ig, '');

    //alert(s);

    s = trimform(s);

    if (showid.tagName != 'TBODY') {

        showid.innerHTML = s;
    } else {
        while (showid.firstChild) {
            showid.firstChild.parentNode.removeChild(showid.firstChild);
        }
        var div1 = document.createElement('DIV');
        div1.id = showid.id + '_div';
        div1.innerHTML = '<table><tbody id="' + showid.id + '_tbody">' + s + '</tbody></table>';
        discuz$('append_parent').appendChild(div1);
        var trs = div1.getElementsByTagName('TR');
        var l = trs.length;
        for (var i = 0; i < l; i++) {
            showid.appendChild(trs[0]);
        }
        var inputs = div1.getElementsByTagName('INPUT');
        var l = inputs.length;
        for (var i = 0; i < l; i++) {
            showid.appendChild(inputs[0]);
        }
        div1.parentNode.removeChild(div1);
        //alert('no');
    }
}

function doane(event, preventDefault, stopPropagation) {
    var preventDefault = isUndefined(preventDefault) ? 1 : preventDefault;
    var stopPropagation = isUndefined(stopPropagation) ? 1 : stopPropagation;
    e = event ? event : window.event;
    if (!e) {
        e = getEvent();
    }
    if (!e) {
        return null;
    }
    if (preventDefault) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
    if (stopPropagation) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
    return e;
}

function loadcss(cssname) {
    if (!CSSLOADED[cssname]) {
        if (!discuz$('css_' + cssname)) {
            css = document.createElement('link');
            css.id = 'css_' + cssname,
			css.type = 'text/css';
            css.rel = 'stylesheet';
            css.href = 'data/cache/style_' + STYLEID + '_' + cssname + '.css?' + VERHASH;
            var headNode = document.getElementsByTagName("head")[0];
            headNode.appendChild(css);
        } else {
            discuz$('css_' + cssname).href = 'data/cache/style_' + STYLEID + '_' + cssname + '.css?' + VERHASH;
        }
        CSSLOADED[cssname] = 1;
    }
}

function showMenu(v) {
    var ctrlid = isUndefined(v['ctrlid']) ? v : v['ctrlid'];
    var showid = isUndefined(v['showid']) ? ctrlid : v['showid'];
    var menuid = isUndefined(v['menuid']) ? showid + '_menu' : v['menuid'];
    var ctrlObj = discuz$(ctrlid);
    var menuObj = discuz$(menuid);
    if (!menuObj) return;
    var mtype = isUndefined(v['mtype']) ? 'menu' : v['mtype'];
    var evt = isUndefined(v['evt']) ? 'mouseover' : v['evt'];
    var pos = isUndefined(v['pos']) ? '43' : v['pos'];
    var layer = isUndefined(v['layer']) ? 1 : v['layer'];
    var duration = isUndefined(v['duration']) ? 2 : v['duration'];
    var timeout = isUndefined(v['timeout']) ? 250 : v['timeout'];
    var maxh = isUndefined(v['maxh']) ? 600 : v['maxh'];
    var cache = isUndefined(v['cache']) ? 1 : v['cache'];
    var drag = isUndefined(v['drag']) ? '' : v['drag'];
    var dragobj = drag && discuz$(drag) ? discuz$(drag) : menuObj;
    var fade = isUndefined(v['fade']) ? 0 : v['fade'];
    var cover = isUndefined(v['cover']) ? 0 : v['cover'];
    var zindex = isUndefined(v['zindex']) ? JSMENU['zIndex']['menu'] : v['zindex'];
    var ctrlclass = isUndefined(v['ctrlclass']) ? '' : v['ctrlclass'];
    var winhandlekey = isUndefined(v['win']) ? '' : v['win'];
    zindex = cover ? zindex + 500 : zindex;
    if (typeof JSMENU['active'][layer] == 'undefined') {
        JSMENU['active'][layer] = [];
    }


    if (menuObj.parentNode != discuz$('append_parent')) {
        discuz$('append_parent').appendChild(menuObj);
    }

    for (i in EXTRAFUNC['showmenu']) {
        try {
            eval(EXTRAFUNC['showmenu'][i] + '()');
        } catch (e) { }
    }

    if (evt == 'click' && in_array(menuid, JSMENU['active'][layer]) && mtype != 'win') {
        hideMenu(menuid, mtype);
        return;
    }
    if (mtype == 'menu') {
        hideMenu(layer, mtype);
    }

    if (ctrlObj) {
        if (!ctrlObj.getAttribute('initialized')) {
            ctrlObj.setAttribute('initialized', true);
            ctrlObj.unselectable = true;

            ctrlObj.outfunc = typeof ctrlObj.onmouseout == 'function' ? ctrlObj.onmouseout : null;
            ctrlObj.onmouseout = function () {
                if (this.outfunc) this.outfunc();
                if (duration < 3 && !JSMENU['timer'][menuid]) {
                    JSMENU['timer'][menuid] = setTimeout(function () {
                        hideMenu(menuid, mtype);
                    }, timeout);
                }
            };

            ctrlObj.overfunc = typeof ctrlObj.onmouseover == 'function' ? ctrlObj.onmouseover : null;
            ctrlObj.onmouseover = function (e) {
                doane(e);
                if (this.overfunc) this.overfunc();
                if (evt == 'click') {
                    clearTimeout(JSMENU['timer'][menuid]);
                    JSMENU['timer'][menuid] = null;
                } else {
                    for (var i in JSMENU['timer']) {
                        if (JSMENU['timer'][i]) {
                            clearTimeout(JSMENU['timer'][i]);
                            JSMENU['timer'][i] = null;
                        }
                    }
                }
            };
        }
    }

    if (!menuObj.getAttribute('initialized')) {
        menuObj.setAttribute('initialized', true);
        menuObj.ctrlkey = ctrlid;
        menuObj.mtype = mtype;
        menuObj.layer = layer;
        menuObj.cover = cover;
        if (ctrlObj && ctrlObj.getAttribute('fwin')) { menuObj.scrolly = true; }
        menuObj.style.position = 'absolute';
        menuObj.style.zIndex = zindex + layer;
        menuObj.onclick = function (e) {
            return doane(e, 0, 1);
        };
        if (duration < 3) {
            if (duration > 1) {
                menuObj.onmouseover = function () {
                    clearTimeout(JSMENU['timer'][menuid]);
                    JSMENU['timer'][menuid] = null;
                };
            }
            if (duration != 1) {
                menuObj.onmouseout = function () {
                    JSMENU['timer'][menuid] = setTimeout(function () {
                        hideMenu(menuid, mtype);
                    }, timeout);
                };
            }
        }
        if (cover) {
            var coverObj = document.createElement('div');
            coverObj.id = menuid + '_cover';
            coverObj.style.position = 'absolute';
            coverObj.style.zIndex = menuObj.style.zIndex - 1;
            coverObj.style.left = coverObj.style.top = '0px';
            coverObj.style.width = '100%';
            coverObj.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
            coverObj.style.backgroundColor = '#000';
            coverObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=50)';
            coverObj.style.opacity = 0.5;
            coverObj.onclick = function () { hideMenu(); };
            discuz$('append_parent').appendChild(coverObj);
            _attachEvent(window, 'load', function () {
                coverObj.style.height = Math.max(document.documentElement.clientHeight, document.body.offsetHeight) + 'px';
            }, document);
        }
    }
    if (drag) {
        dragobj.style.cursor = 'move';
        dragobj.onmousedown = function (event) { try { dragMenu(menuObj, event, 1); } catch (e) { } };
    }

    if (cover) discuz$(menuid + '_cover').style.display = '';
    if (fade) {
        var O = 0;
        var fadeIn = function (O) {
            if (O > 100) {
                clearTimeout(fadeInTimer);
                return;
            }
            menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
            menuObj.style.opacity = O / 100;
            O += 20;
            var fadeInTimer = setTimeout(function () {
                fadeIn(O);
            }, 40);
        };
        fadeIn(O);
        menuObj.fade = true;
    } else {
        menuObj.fade = false;
    }
    menuObj.style.display = '';
    if (ctrlObj && ctrlclass) {
        ctrlObj.className += ' ' + ctrlclass;
        menuObj.setAttribute('ctrlid', ctrlid);
        menuObj.setAttribute('ctrlclass', ctrlclass);
    }
    if (pos != '*') {
        setMenuPosition(showid, menuid, pos);
    }
    if (BROWSER.ie && BROWSER.ie < 7 && winhandlekey && discuz$('fwin_' + winhandlekey)) {
        discuz$(menuid).style.left = (parseInt(discuz$(menuid).style.left) - parseInt(discuz$('fwin_' + winhandlekey).style.left)) + 'px';
        discuz$(menuid).style.top = (parseInt(discuz$(menuid).style.top) - parseInt(discuz$('fwin_' + winhandlekey).style.top)) + 'px';
    }
    if (maxh && menuObj.scrollHeight > maxh) {
        menuObj.style.height = maxh + 'px';
        if (BROWSER.opera) {
            menuObj.style.overflow = 'auto';
        } else {
            menuObj.style.overflowY = 'auto';
        }
    }

    if (!duration) {
        setTimeout('hideMenu(\'' + menuid + '\', \'' + mtype + '\')', timeout);
    }

    if (!in_array(menuid, JSMENU['active'][layer])) JSMENU['active'][layer].push(menuid);
    menuObj.cache = cache;
    if (layer > JSMENU['layer']) {
        JSMENU['layer'] = layer;
    }
}
var delayShowST = null;
function delayShow(ctrlObj, call, time) {
    if (typeof ctrlObj == 'object') {
        var ctrlid = ctrlObj.id;
        call = call || function () { showMenu(ctrlid); };
    }
    var time = isUndefined(time) ? 500 : time;
    delayShowST = setTimeout(function () {
        if (typeof call == 'function') {
            call();
        } else {
            eval(call);
        }
    }, time);
    if (!ctrlObj.delayinit) {
        _attachEvent(ctrlObj, 'mouseout', function () { clearTimeout(delayShowST); });
        ctrlObj.delayinit = 1;
    }
}

var dragMenuDisabled = false;
function dragMenu(menuObj, e, op) {
    e = e ? e : window.event;
    if (op == 1) {
        if (dragMenuDisabled || in_array(e.target ? e.target.tagName : e.srcElement.tagName, ['TEXTAREA', 'INPUT', 'BUTTON', 'SELECT'])) {
            return;
        }
        JSMENU['drag'] = [e.clientX, e.clientY];
        JSMENU['drag'][2] = parseInt(menuObj.style.left);
        JSMENU['drag'][3] = parseInt(menuObj.style.top);
        document.onmousemove = function (e) { try { dragMenu(menuObj, e, 2); } catch (err) { } };
        document.onmouseup = function (e) { try { dragMenu(menuObj, e, 3); } catch (err) { } };
        doane(e);
    } else if (op == 2 && JSMENU['drag'][0]) {
        var menudragnow = [e.clientX, e.clientY];
        menuObj.style.left = (JSMENU['drag'][2] + menudragnow[0] - JSMENU['drag'][0]) + 'px';
        menuObj.style.top = (JSMENU['drag'][3] + menudragnow[1] - JSMENU['drag'][1]) + 'px';
        doane(e);
    } else if (op == 3) {
        JSMENU['drag'] = [];
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
function setMenuPosition(showid, menuid, pos) {
    var showObj = discuz$(showid);
    var menuObj = menuid ? discuz$(menuid) : discuz$(showid + '_menu');
    if (isUndefined(pos) || !pos) pos = '43';
    var basePoint = parseInt(pos.substr(0, 1));
    var direction = parseInt(pos.substr(1, 1));
    var important = pos.indexOf('!') != -1 ? 1 : 0;
    var sxy = 0, sx = 0, sy = 0, sw = 0, sh = 0, ml = 0, mt = 0, mw = 0, mcw = 0, mh = 0, mch = 0, bpl = 0, bpt = 0;

    if (!menuObj || (basePoint > 0 && !showObj)) return;
    if (showObj) {
        sxy = fetchOffset(showObj);
        sx = sxy['left'];
        sy = sxy['top'];
        sw = showObj.offsetWidth;
        sh = showObj.offsetHeight;
    }
    mw = menuObj.offsetWidth;
    mcw = menuObj.clientWidth;
    mh = menuObj.offsetHeight;
    mch = menuObj.clientHeight;

    switch (basePoint) {
        case 1:
            bpl = sx;
            bpt = sy;
            break;
        case 2:
            bpl = sx + sw;
            bpt = sy;
            break;
        case 3:
            bpl = sx + sw;
            bpt = sy + sh;
            break;
        case 4:
            bpl = sx;
            bpt = sy + sh;
            break;
    }
    switch (direction) {
        case 0:
            menuObj.style.left = (screen.width - menuObj.clientWidth) / 2 + 'px';
            mt = (document.documentElement.clientHeight - menuObj.clientHeight) / 2;
            break;
        case 1:
            ml = bpl - mw;
            mt = bpt - mh;
            break;
        case 2:
            ml = bpl;
            mt = bpt - mh;
            break;
        case 3:
            ml = bpl;
            mt = bpt;
            break;
        case 4:
            ml = bpl - mw;
            mt = bpt;
            break;
    }
    var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    if (!important) {
        if (in_array(direction, [1, 4]) && ml < 0) {
            ml = bpl;
            if (in_array(basePoint, [1, 4])) ml += sw;
        } else if (ml + mw > scrollLeft + document.body.clientWidth && sx >= mw) {
            ml = bpl - mw;
            if (in_array(basePoint, [2, 3])) {
                ml -= sw;
            } else if (basePoint == 4) {
                ml += sw;
            }
        }
        if (in_array(direction, [1, 2]) && mt < 0) {
            mt = bpt;
            if (in_array(basePoint, [1, 2])) mt += sh;
        } else if (mt + mh > scrollTop + document.documentElement.clientHeight && sy >= mh) {
            mt = bpt - mh;
            if (in_array(basePoint, [3, 4])) mt -= sh;
        }
    }
    if (pos.substr(0, 3) == '210') {
        ml += 69 - sw / 2;
        mt -= 5;
        if (showObj.tagName == 'TEXTAREA') {
            ml -= sw / 2;
            mt += sh / 2;
        }
    }
    if (direction == 0 || menuObj.scrolly) {
        if (BROWSER.ie && BROWSER.ie < 7) {
            if (direction == 0) mt += scrollTop;
        } else {
            if (menuObj.scrolly) mt -= scrollTop;
            menuObj.style.position = 'fixed';
        }
    }

    if (mt < 0) mt = 0;

    if (ml) menuObj.style.left = ml + 'px';
    if (mt) menuObj.style.top = mt + 'px';
    if (direction == 0 && BROWSER.ie && !document.documentElement.clientHeight) {
        menuObj.style.position = 'absolute';
        menuObj.style.top = (document.body.clientHeight - menuObj.clientHeight) / 2 + 'px';
    }
    if (menuObj.style.clip && !BROWSER.opera) {
        menuObj.style.clip = 'rect(auto, auto, auto, auto)';
    }
}

function hideMenu(attr, mtype) {
    attr = isUndefined(attr) ? '' : attr;
    mtype = isUndefined(mtype) ? 'menu' : mtype;
    if (attr == '') {
        for (var i = 1; i <= JSMENU['layer']; i++) {
            hideMenu(i, mtype);
        }
        return;
    } else if (typeof attr == 'number') {
        for (var j in JSMENU['active'][attr]) {
            hideMenu(JSMENU['active'][attr][j], mtype);
        }
        return;
    } else if (typeof attr == 'string') {
        var menuObj = discuz$(attr);
        if (!menuObj || (mtype && menuObj.mtype != mtype)) return;
        var ctrlObj = '', ctrlclass = '';
        if ((ctrlObj = discuz$(menuObj.getAttribute('ctrlid'))) && (ctrlclass = menuObj.getAttribute('ctrlclass'))) {
            var reg = new RegExp(' ' + ctrlclass);
            ctrlObj.className = ctrlObj.className.replace(reg, '');
        }
        clearTimeout(JSMENU['timer'][attr]);
        var hide = function () {
            if (menuObj.cache) {
                if (menuObj.style.visibility != 'hidden') {
                    menuObj.style.display = 'none';
                    if (menuObj.cover) discuz$(attr + '_cover').style.display = 'none';
                }
            } else {
                menuObj.parentNode.removeChild(menuObj);
                if (menuObj.cover) discuz$(attr + '_cover').parentNode.removeChild(discuz$(attr + '_cover'));
            }
            var tmp = [];
            for (var k in JSMENU['active'][menuObj.layer]) {
                if (attr != JSMENU['active'][menuObj.layer][k]) tmp.push(JSMENU['active'][menuObj.layer][k]);
            }
            JSMENU['active'][menuObj.layer] = tmp;
        };
        if (menuObj.fade) {
            var O = 100;
            var fadeOut = function (O) {
                if (O == 0) {
                    clearTimeout(fadeOutTimer);
                    hide();
                    return;
                }
                menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
                menuObj.style.opacity = O / 100;
                O -= 20;
                var fadeOutTimer = setTimeout(function () {
                    fadeOut(O);
                }, 40);
            };
            fadeOut(O);
        } else {
            hide();
        }
    }
}

function getCurrentStyle(obj, cssproperty, csspropertyNS) {
    if (obj.style[cssproperty]) {
        return obj.style[cssproperty];
    }
    if (obj.currentStyle) {
        return obj.currentStyle[cssproperty];
    } else if (document.defaultView.getComputedStyle(obj, null)) {
        var currentStyle = document.defaultView.getComputedStyle(obj, null);
        var value = currentStyle.getPropertyValue(csspropertyNS);
        if (!value) {
            value = currentStyle[cssproperty];
        }
        return value;
    } else if (window.getComputedStyle) {
        var currentStyle = window.getComputedStyle(obj, "");
        return currentStyle.getPropertyValue(csspropertyNS);
    }
}

function fetchOffset(obj, mode) {
    var left_offset = 0, top_offset = 0, mode = !mode ? 0 : mode;

    if (obj.getBoundingClientRect && !mode) {
        var rect = obj.getBoundingClientRect();
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
        if (document.documentElement.dir == 'rtl') {
            scrollLeft = scrollLeft + document.documentElement.clientWidth - document.documentElement.scrollWidth;
        }
        left_offset = rect.left + scrollLeft - document.documentElement.clientLeft;
        top_offset = rect.top + scrollTop - document.documentElement.clientTop;
    }
    if (left_offset <= 0 || top_offset <= 0) {
        left_offset = obj.offsetLeft;
        top_offset = obj.offsetTop;
        while ((obj = obj.offsetParent) != null) {
            position = getCurrentStyle(obj, 'position', 'position');
            if (position == 'relative') {
                continue;
            }
            left_offset += obj.offsetLeft;
            top_offset += obj.offsetTop;
        }
    }
    return { 'left': left_offset, 'top': top_offset };
}

function showTip(ctrlobj) {
    $F('_showTip', arguments);
}

function showPrompt(ctrlid, evt, msg, timeout) {
    $F('_showPrompt', arguments);
}

function showCreditPrompt() {
    $F('_showCreditPrompt', []);
}

var showDialogST = null;
function showDialog(msg, mode, t, func, cover, funccancel, leftmsg, confirmtxt, canceltxt, closetime, locationtime) {
    clearTimeout(showDialogST);
    cover = isUndefined(cover) ? (mode == 'info' ? 0 : 1) : cover;
    leftmsg = isUndefined(leftmsg) ? '' : leftmsg;
    mode = in_array(mode, ['confirm', 'notice', 'info', 'right']) ? mode : 'alert';
    var menuid = 'fwin_dialog';
    var menuObj = discuz$(menuid);
    confirmtxtdefault = '确定';
    closetime = isUndefined(closetime) ? '' : closetime;
    closefunc = function () {
        if (typeof func == 'function') func();
        else eval(func);
        hideMenu(menuid, 'dialog');
    };
    if (closetime) {
        leftmsg = closetime + ' 秒后窗口关闭';
        showDialogST = setTimeout(closefunc, closetime * 1000);
    }
    locationtime = isUndefined(locationtime) ? '' : locationtime;
    if (locationtime) {
        leftmsg = locationtime + ' 秒后页面跳转';
        showDialogST = setTimeout(closefunc, locationtime * 1000);
        confirmtxtdefault = '立即跳转';
    }
    confirmtxt = confirmtxt ? confirmtxt : confirmtxtdefault;
    canceltxt = canceltxt ? canceltxt : '取消';

    if (menuObj) hideMenu('fwin_dialog', 'dialog');
    menuObj = document.createElement('div');
    menuObj.style.display = 'none';
    menuObj.className = 'fwinmask';
    menuObj.id = menuid;
    discuz$('append_parent').appendChild(menuObj);
    var hidedom = '';
    if (!BROWSER.ie) {
        hidedom = '<style type="text/css">object{visibility:hidden;}</style>';
    }
    var s = hidedom + '<table cellpadding="0" cellspacing="0" class="fwin"><tr><td class="t_l"></td><td class="t_c"></td><td class="t_r"></td></tr><tr><td class="m_l">&nbsp;&nbsp;</td><td class="m_c"><h3 class="flb"><em>';
    s += t ? t : '提示信息';
    s += '</em><span><a href="javascript:;" id="fwin_dialog_close" class="flbc" onclick="hideMenu(\'' + menuid + '\', \'dialog\')" title="关闭">关闭</a></span></h3>';
    if (mode == 'info') {
        s += msg ? msg : '';
    } else {
        s += '<div class="c altw"><div class="' + (mode == 'alert' ? 'alert_error' : (mode == 'right' ? 'alert_right' : 'alert_info')) + '" sytle="vertical-align:middle;"><p sytle="vertical-align:middle;">' + msg + '</p></div></div>';
        s += '<p class="o pns">' + (leftmsg ? '<span class="z xg1">' + leftmsg + '</span>' : '') + '<button id="fwin_dialog_submit" value="true" class="smallbutton"><strong>' + confirmtxt + '</strong></button>';
        s += mode == 'confirm' ? '<button id="fwin_dialog_cancel" value="true" class="pn" onclick="hideMenu(\'' + menuid + '\', \'dialog\')"><strong>' + canceltxt + '</strong></button>' : '';
        s += '</p>';
    }
    s += '</td><td class="m_r"></td></tr><tr><td class="b_l"></td><td class="b_c"></td><td class="b_r"></td></tr></table>';
    menuObj.innerHTML = s;
    if (discuz$('fwin_dialog_submit')) discuz$('fwin_dialog_submit').onclick = function () {
        if (typeof func == 'function') func();
        else eval(func);
        hideMenu(menuid, 'dialog');
    };
    if (discuz$('fwin_dialog_cancel')) {
        discuz$('fwin_dialog_cancel').onclick = function () {
            if (typeof funccancel == 'function') funccancel();
            else eval(funccancel);
            hideMenu(menuid, 'dialog');
        };
        discuz$('fwin_dialog_close').onclick = discuz$('fwin_dialog_cancel').onclick;
    }
    showMenu({ 'mtype': 'dialog', 'menuid': menuid, 'duration': 3, 'pos': '00', 'zindex': JSMENU['zIndex']['dialog'], 'cache': 0, 'cover': cover });
    try {
        if (discuz$('fwin_dialog_submit')) discuz$('fwin_dialog_submit').focus();
    } catch (e) { }
}

function showWindow(k, url, mode, cache, menuv) {
    mode = isUndefined(mode) ? 'get' : mode;
    cache = isUndefined(cache) ? 1 : cache;
    var menuid = 'fwin_' + k;
    var menuObj = discuz$(menuid);
    var drag = null;
    var loadingst = null;
    var hidedom = '';

    if (disallowfloat && disallowfloat.indexOf(k) != -1) {
        if (BROWSER.ie) url += (url.indexOf('?') != -1 ? '&' : '?') + 'referer=' + escape(location.href);
        location.href = url;
        doane();
        return;
    }

    var fetchContent = function () {
        if (mode == 'get') {
            menuObj.url = url;
            url += (url.search(/\?/) > 0 ? '&' : '?') + 'infloat=yes&handlekey=' + k;
            url += cache == -1 ? '&t=' + (+new Date()) : '';
            ajaxget(url, 'fwin_content_' + k, null, '', '', function () { initMenu(); show(); });
        } else if (mode == 'post') {
            menuObj.act = discuz$(url).action;
            ajaxpost(url, 'fwin_content_' + k, '', '', '', function () { initMenu(); show(); });
        }
        if (parseInt(BROWSER.ie) != 6) {
            loadingst = setTimeout(function () { showDialog('', 'info', '<img src="' + IMGDIR + '/loading.gif"> waiting...') }, 500);
        }
    };
    var initMenu = function () {
        clearTimeout(loadingst);
        var objs = menuObj.getElementsByTagName('*');
        var fctrlidinit = false;
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].id) {
                objs[i].setAttribute('fwin', k);
            }
            if (objs[i].className == 'flb' && !fctrlidinit) {
                if (!objs[i].id) objs[i].id = 'fctrl_' + k;
                drag = objs[i].id;
                fctrlidinit = true;
            }
        }
    };
    var show = function () {
        hideMenu('fwin_dialog', 'dialog');
        v = { 'mtype': 'win', 'menuid': menuid, 'duration': 3, 'pos': '00', 'zindex': JSMENU['zIndex']['win'], 'drag': typeof drag == null ? '' : drag, 'cache': cache };
        for (k in menuv) {
            v[k] = menuv[k];
        }
        showMenu(v);
    };

    if (!menuObj) {
        menuObj = document.createElement('div');
        menuObj.id = menuid;
        menuObj.className = 'fwinmask';
        menuObj.style.display = 'none';
        discuz$('append_parent').appendChild(menuObj);
        evt = ' style="cursor:move" onmousedown="dragMenu(discuz$(\'' + menuid + '\'), event, 1)" ondblclick="hideWindow(\'' + k + '\')"';
        if (!BROWSER.ie) {
            hidedom = '<style type="text/css">object{visibility:hidden;}</style>';
        }
        //alert('c1');
        var body = "";
        //alert(isMobileVersion);
        //var needFrame = menuv.needFrame;
        var needFrame = isUndefined(menuv['needFrame']) ? 1 : menuv['needFrame'];
        //alert(needFrame);
        if (false == isMobileVersion && needFrame) {
            body = '<table cellpadding="0" cellspacing="0" class="fwin"><tr><td class="t_l"></td><td class="t_c"' + evt + '></td><td class="t_r"></td></tr><tr><td class="m_l"' + evt + ')">&nbsp;&nbsp;</td><td class="m_c" id="fwin_content_' + k + '">'
			+ '</td><td class="m_r"' + evt + '"></td></tr><tr><td class="b_l"></td><td class="b_c"' + evt + '></td><td class="b_r"></td></tr></table>';
        }
        else {
            body = '<table cellpadding="0" cellspacing="0" class="fwin"><tr><td class="m_c" id="fwin_content_' + k + '">'
        + '</td></tr></table>';
        }

        menuObj.innerHTML = hidedom + body;

        if (mode == 'html') {
            discuz$('fwin_content_' + k).innerHTML = url;
            initMenu();
            show();
        } else {
            fetchContent();
        }
    } else if ((mode == 'get' && (url != menuObj.url || cache != 1)) || (mode == 'post' && discuz$(url).action != menuObj.act)) {
        fetchContent();
    } else {
        show();
    }
    doane();
}

function showError(msg) {
    var p = /<script[^\>]*?>([^\x00]*?)<\/script>/ig;
    msg = msg.replace(p, '');
    if (msg !== '') {
        showDialog(msg, 'alert', '错误信息', null, true, null, '', '', '', 3);
    }
}

function hideWindow(k, all, clear) {
    all = isUndefined(all) ? 1 : all;
    clear = isUndefined(clear) ? 1 : clear;
    hideMenu('fwin_' + k, 'win');
    if (clear && discuz$('fwin_' + k)) {
        discuz$('append_parent').removeChild(discuz$('fwin_' + k));
    }
    if (all) {
        hideMenu();
    }
}

function AC_FL_RunContent() {
    var str = '';
    var ret = AC_GetArgs(arguments, "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    if (BROWSER.ie && !BROWSER.opera) {
        str += '<object ';
        for (var i in ret.objAttrs) {
            str += i + '="' + ret.objAttrs[i] + '" ';
        }
        str += '>';
        for (var i in ret.params) {
            str += '<param name="' + i + '" value="' + ret.params[i] + '" /> ';
        }
        str += '</object>';
    } else {
        str += '<embed ';
        for (var i in ret.embedAttrs) {
            str += i + '="' + ret.embedAttrs[i] + '" ';
        }
        str += '></embed>';
    }
    return str;
}

function AC_GetArgs(args, classid, mimeType) {
    var ret = new Object();
    ret.embedAttrs = new Object();
    ret.params = new Object();
    ret.objAttrs = new Object();
    for (var i = 0; i < args.length; i = i + 2) {
        var currArg = args[i].toLowerCase();
        switch (currArg) {
            case "classid": break;
            case "pluginspage": ret.embedAttrs[args[i]] = 'http://www.macromedia.com/go/getflashplayer'; break;
            case "src": ret.embedAttrs[args[i]] = args[i + 1]; ret.params["movie"] = args[i + 1]; break;
            case "codebase": ret.objAttrs[args[i]] = 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0'; break;
            case "onafterupdate": case "onbeforeupdate": case "onblur": case "oncellchange": case "onclick": case "ondblclick": case "ondrag": case "ondragend":
            case "ondragenter": case "ondragleave": case "ondragover": case "ondrop": case "onfinish": case "onfocus": case "onhelp": case "onmousedown":
            case "onmouseup": case "onmouseover": case "onmousemove": case "onmouseout": case "onkeypress": case "onkeydown": case "onkeyup": case "onload":
            case "onlosecapture": case "onpropertychange": case "onreadystatechange": case "onrowsdelete": case "onrowenter": case "onrowexit": case "onrowsinserted": case "onstart":
            case "onscroll": case "onbeforeeditfocus": case "onactivate": case "onbeforedeactivate": case "ondeactivate": case "type":
            case "id": ret.objAttrs[args[i]] = args[i + 1]; break;
            case "width": case "height": case "align": case "vspace": case "hspace": case "class": case "title": case "accesskey": case "name":
            case "tabindex": ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1]; break;
            default: ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
        }
    }
    ret.objAttrs["classid"] = classid;
    if (mimeType) {
        ret.embedAttrs["type"] = mimeType;
    }
    return ret;
}

function simulateSelect(selectId, widthvalue) {
    var selectObj = discuz$(selectId);
    if (!selectObj) return;
    if (BROWSER.other) {
        if (selectObj.getAttribute('change')) {
            selectObj.onchange = function () { eval(selectObj.getAttribute('change')); }
        }
        return;
    }
    var widthvalue = widthvalue ? widthvalue : 70;
    var defaultopt = selectObj.options[0] ? selectObj.options[0].innerHTML : '';
    var defaultv = '';
    var menuObj = document.createElement('div');
    var ul = document.createElement('ul');
    var handleKeyDown = function (e) {
        e = BROWSER.ie ? event : e;
        if (e.keyCode == 40 || e.keyCode == 38) doane(e);
    };
    var selectwidth = (selectObj.getAttribute('width', i) ? selectObj.getAttribute('width', i) : widthvalue) + 'px';
    var tabindex = selectObj.getAttribute('tabindex', i) ? selectObj.getAttribute('tabindex', i) : 1;

    for (var i = 0; i < selectObj.options.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = selectObj.options[i].innerHTML;
        li.k_id = i;
        li.k_value = selectObj.options[i].value;
        if (selectObj.options[i].selected) {
            defaultopt = selectObj.options[i].innerHTML;
            defaultv = selectObj.options[i].value;
            li.className = 'current';
            selectObj.setAttribute('selecti', i);
        }
        li.onclick = function () {
            if (discuz$(selectId + '_ctrl').innerHTML != this.innerHTML) {
                var lis = menuObj.getElementsByTagName('li');
                lis[discuz$(selectId).getAttribute('selecti')].className = '';
                this.className = 'current';
                discuz$(selectId + '_ctrl').innerHTML = this.innerHTML;
                discuz$(selectId).setAttribute('selecti', this.k_id);
                discuz$(selectId).options.length = 0;
                discuz$(selectId).options[0] = new Option('', this.k_value);
                eval(selectObj.getAttribute('change'));
            }
            hideMenu(menuObj.id);
            return false;
        };
        ul.appendChild(li);
    }

    selectObj.options.length = 0;
    selectObj.options[0] = new Option('', defaultv);
    selectObj.style.display = 'none';
    selectObj.outerHTML += '<a href="javascript:;" id="' + selectId + '_ctrl" style="width:' + selectwidth + '" tabindex="' + tabindex + '">' + defaultopt + '</a>';

    menuObj.id = selectId + '_ctrl_menu';
    menuObj.className = 'sltm';
    menuObj.style.display = 'none';
    menuObj.style.width = selectwidth;
    menuObj.appendChild(ul);
    discuz$('append_parent').appendChild(menuObj);

    discuz$(selectId + '_ctrl').onclick = function (e) {
        discuz$(selectId + '_ctrl_menu').style.width = selectwidth;
        showMenu({ 'ctrlid': (selectId == 'loginfield' ? 'account' : selectId + '_ctrl'), 'menuid': selectId + '_ctrl_menu', 'evt': 'click', 'pos': '43' });
        doane(e);
    };
    discuz$(selectId + '_ctrl').onfocus = menuObj.onfocus = function () {
        _attachEvent(document.body, 'keydown', handleKeyDown);
    };
    discuz$(selectId + '_ctrl').onblur = menuObj.onblur = function () {
        _detachEvent(document.body, 'keydown', handleKeyDown);
    };
    discuz$(selectId + '_ctrl').onkeyup = function (e) {
        e = e ? e : window.event;
        value = e.keyCode;
        if (value == 40 || value == 38) {
            if (menuObj.style.display == 'none') {
                discuz$(selectId + '_ctrl').onclick();
            } else {
                lis = menuObj.getElementsByTagName('li');
                selecti = selectObj.getAttribute('selecti');
                lis[selecti].className = '';
                if (value == 40) {
                    selecti = parseInt(selecti) + 1;
                } else if (value == 38) {
                    selecti = parseInt(selecti) - 1;
                }
                if (selecti < 0) {
                    selecti = lis.length - 1
                } else if (selecti > lis.length - 1) {
                    selecti = 0;
                }
                lis[selecti].className = 'current';
                selectObj.setAttribute('selecti', selecti);
                lis[selecti].parentNode.scrollTop = lis[selecti].offsetTop;
            }
        } else if (value == 13) {
            var lis = menuObj.getElementsByTagName('li');
            lis[selectObj.getAttribute('selecti')].onclick();
        } else if (value == 27) {
            hideMenu(menuObj.id);
        }
    };
}

function switchTab(prefix, current, total, activeclass) {
    $F('_switchTab', arguments);
}

function imageRotate(imgid, direct) {
    $F('_imageRotate', arguments);
}

function thumbImg(obj, method) {
    if (!obj) {
        return;
    }
    obj.onload = null;
    file = obj.src;
    zw = obj.offsetWidth;
    zh = obj.offsetHeight;
    if (zw < 2) {
        if (!obj.id) {
            obj.id = 'img_' + Math.random();
        }
        setTimeout("thumbImg(discuz$('" + obj.id + "'), " + method + ")", 100);
        return;
    }
    zr = zw / zh;
    method = !method ? 0 : 1;
    if (method) {
        fixw = obj.getAttribute('_width');
        fixh = obj.getAttribute('_height');
        if (zw > fixw) {
            zw = fixw;
            zh = zw / zr;
        }
        if (zh > fixh) {
            zh = fixh;
            zw = zh * zr;
        }
    } else {
        fixw = typeof imagemaxwidth == 'undefined' ? '600' : imagemaxwidth;
        if (zw > fixw) {
            zw = fixw;
            zh = zw / zr;
            obj.style.cursor = 'pointer';
            if (!obj.onclick) {
                obj.onclick = function () {
                    zoom(obj, obj.src);
                };
            }
        }
    }
    obj.width = zw;
    obj.height = zh;
}

var zoomstatus = 1;
function zoom(obj, zimg, nocover, pn) {
    $F('_zoom', arguments);
}

function showselect(obj, inpid, t, rettype) {
    $F('_showselect', arguments);
}

function showColorBox(ctrlid, layer, k, bgcolor) {
    $F('_showColorBox', arguments);
}

function ctrlEnter(event, btnId, onlyEnter) {
    if (isUndefined(onlyEnter)) onlyEnter = 0;
    if ((event.ctrlKey || onlyEnter) && event.keyCode == 13) {
        discuz$(btnId).click();
        return false;
    }
    return true;
}

function parseurl(str, mode, parsecode) {
    if (isUndefined(parsecode)) parsecode = true;
    if (parsecode) str = str.replace(/\s*\[code\]([\s\S]+?)\[\/code\]\s*/ig, function ($1, $2) { return codetag($2); });
    str = str.replace(/([^>=\]"'\/@]|^)((((https?|ftp|gopher|news|telnet|rtsp|mms|callto|bctp|ed2k|thunder|qqdl|synacast):\/\/))([\w\-]+\.)*[:\.@\-\w\u4e00-\u9fa5]+\.([\.a-zA-Z0-9]+|\u4E2D\u56FD|\u7F51\u7EDC|\u516C\u53F8)((\?|\/|:)+[\w\.\/=\?%\-&;~`@':+!#]*)*)/ig, mode == 'html' ? '$1<a href="$2" target="_blank">$2</a>' : '$1[url]$2[/url]');
    str = str.replace(/([^\w>=\]"'\/@]|^)((www\.)([\w\-]+\.)*[:\.@\-\w\u4e00-\u9fa5]+\.([\.a-zA-Z0-9]+|\u4E2D\u56FD|\u7F51\u7EDC|\u516C\u53F8)((\?|\/|:)+[\w\.\/=\?%\-&;~`@':+!#]*)*)/ig, mode == 'html' ? '$1<a href="$2" target="_blank">$2</a>' : '$1[url]$2[/url]');
    str = str.replace(/([^\w->=\]:"'\.\/]|^)(([\-\.\w]+@[\.\-\w]+(\.\w+)+))/ig, mode == 'html' ? '$1<a href="mailto:$2">$2</a>' : '$1[email]$2[/email]');
    if (parsecode) {
        for (var i = 0; i <= DISCUZCODE['num']; i++) {
            str = str.replace("[\tDISCUZ_CODE_" + i + "\t]", DISCUZCODE['html'][i]);
        }
    }
    return str;
}

function codetag(text) {
    DISCUZCODE['num']++;
    if (typeof wysiwyg != 'undefined' && wysiwyg) text = text.replace(/<br[^\>]*>/ig, '\n').replace(/<(\/|)[A-Za-z].*?>/ig, '');
    DISCUZCODE['html'][DISCUZCODE['num']] = '[code]' + text + '[/code]';
    return '[\tDISCUZ_CODE_' + DISCUZCODE['num'] + '\t]';
}

function saveUserdata(name, data) {
    if (BROWSER.ie) {
        if (data.length < 54889) {
            with (document.documentElement) {
                setAttribute("value", data);
                save('Discuz_' + name);
            }
        }
    } else if (window.localStorage) {
        localStorage.setItem('Discuz_' + name, data);
    } else if (window.sessionStorage) {
        sessionStorage.setItem('Discuz_' + name, data);
    }
    setcookie('clearUserdata', '', -1);
}

function loadUserdata(name) {
    if (BROWSER.ie) {
        with (document.documentElement) {
            load('Discuz_' + name);
            return getAttribute("value");
        }
    } else if (window.localStorage) {
        return localStorage.getItem('Discuz_' + name);
    } else if (window.sessionStorage) {
        return sessionStorage.getItem('Discuz_' + name);
    }
}

function initTab(frameId, type) {
    $F('_initTab', arguments);
}

function openDiy() {
    window.location.href = ((window.location.href + '').replace(/[\?\&]diy=yes/g, '').split('#')[0] + (window.location.search && window.location.search.indexOf('?diy=yes') < 0 ? '&diy=yes' : '?diy=yes'));
}

function hasClass(elem, className) {
    return elem.className && (" " + elem.className + " ").indexOf(" " + className + " ") != -1;
}

function runslideshow() {
    $F('_runslideshow', []);
}

function toggle_collapse(objname, noimg, complex, lang) {
    $F('_toggle_collapse', arguments);
}

function updatestring(str1, str2, clear) {
    str2 = '_' + str2 + '_';
    return clear ? str1.replace(str2, '') : (str1.indexOf(str2) == -1 ? str1 + str2 : str1);
}

function getClipboardData() {
    window.document.clipboardswf.SetVariable('str', CLIPBOARDSWFDATA);
}

function setCopy(text, msg) {
    $F('_setCopy', arguments);
}

function copycode(obj) {
    $F('_copycode', arguments);
}

function showdistrict(container, elems, totallevel, changelevel) {
    $F('_showdistrict', arguments);
}

function setDoodle(fid, oid, url, tid, from) {
    $F('_setDoodle', arguments);
}


function initSearchmenu(searchform) {
    var searchtxt = discuz$(searchform + '_txt');
    if (!searchtxt) {
        searchtxt = discuz$(searchform);
    }
    var tclass = searchtxt.className;
    searchtxt.className = tclass + ' xg1';
    searchtxt.onfocus = function () {
        if (searchtxt.value == '请输入搜索内容') {
            searchtxt.value = '';
            searchtxt.className = tclass;
        }
    };
    searchtxt.onblur = function () {
        if (searchtxt.value == '') {
            searchtxt.value = '请输入搜索内容';
            searchtxt.className = tclass + ' xg1';
        }
    };
    if (!discuz$(searchform + '_type_menu')) return false;
    var o = discuz$(searchform + '_type');
    var a = discuz$(searchform + '_type_menu').getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].className == 'curtype') {
            o.innerHTML = a[i].innerHTML;
            discuz$(searchform + '_mod').value = a[i].rel;
        }
        a[i].onclick = function () {
            o.innerHTML = this.innerHTML;
            discuz$(searchform + '_mod').value = this.rel;
        };
    }
}

function searchFocus(obj) {
    if (obj.value == '请输入搜索内容') {
        obj.value = '';
    }
}

function extstyle(css) {
    $F('_extstyle', arguments);
}

function widthauto(obj) {
    $F('_widthauto', arguments);
}

var secST = new Array();
function updatesecqaa(idhash) {
    $F('_updatesecqaa', arguments);
}

function updateseccode(idhash, play) {
    $F('_updateseccode', arguments);
}

function checksec(type, idhash, showmsg, recall) {
    $F('_checksec', arguments);
}

function createPalette(colorid, id, func) {
    $F('_createPalette', arguments);
}

function cardInit() {
    var cardShow = function (obj) {
        if (BROWSER.ie && BROWSER.ie < 7 && obj.href.indexOf('username') != -1) {
            return;
        }
        pos = obj.getAttribute('c') == '1' ? '43' : obj.getAttribute('c');
        USERCARDST = setTimeout(function () { ajaxmenu(obj, 500, 1, 2, pos, null, 'p_pop card'); }, 250);
    };
    var a = document.body.getElementsByTagName('a');
    for (var i = 0; i < a.length; i++) {
        if (a[i].getAttribute('c')) {
            a[i].setAttribute('mid', hash(a[i].href));
            a[i].onmouseover = function () { cardShow(this) };
            a[i].onmouseout = function () { clearTimeout(USERCARDST); };
        }
    }
}

function navShow(id) {
    var mnobj = discuz$('snav_mn_' + id);
    if (!mnobj) {
        return;
    }
    var uls = discuz$('mu').getElementsByTagName('ul');
    for (i = 0; i < uls.length; i++) {
        if (uls[i].className != 'cl current') {
            uls[i].style.display = 'none';
        }
    }
    if (mnobj.className != 'cl current') {
        showMenu({ 'ctrlid': 'mn_' + id, 'menuid': 'snav_mn_' + id, 'pos': '*' });
        mnobj.className = 'cl floatmu';
        mnobj.style.width = (discuz$('nv').clientWidth) + 'px';
        mnobj.style.display = '';
    }
}

function strLenCalc(obj, checklen, maxlen) {
    var v = obj.value, charlen = 0, maxlen = !maxlen ? 200 : maxlen, curlen = maxlen, len = strlen(v);
    for (var i = 0; i < v.length; i++) {
        if (v.charCodeAt(i) < 0 || v.charCodeAt(i) > 255) {
            curlen -= charset == 'utf-8' ? 2 : 1;
        }
    }
    if (curlen >= len) {
        discuz$(checklen).innerHTML = curlen - len;
    } else {
        obj.value = mb_cutstr(v, maxlen, true);
    }
}

function noticeTitle() {
    NOTICETITLE = { 'State': 0, 'oldTitle': document.title, flashNumber: 0, sleep: 15 };
    if (!getcookie('noticeTitle')) {
        window.setInterval('noticeTitleFlash();', 500);
    } else {
        window.setTimeout('noticeTitleFlash();', 500);
    }
    setcookie('noticeTitle', 1, 600);
}

function noticeTitleFlash() {
    if (NOTICETITLE.flashNumber < 5 || NOTICETITLE.flashNumber > 4 && !NOTICETITLE['State']) {
        document.title = (NOTICETITLE['State'] ? '【　　　】' : '【新提醒】') + NOTICETITLE['oldTitle'];
        NOTICETITLE['State'] = !NOTICETITLE['State'];
    }
    NOTICETITLE.flashNumber = NOTICETITLE.flashNumber < NOTICETITLE.sleep ? ++NOTICETITLE.flashNumber : 0;
}

function relatedlinks(rlinkmsgid) {
    $F('_relatedlinks', arguments);
}

function con_handle_response(response) {
    return response;
}

function showTopLink() {
    if (discuz$('ft')) {
        var viewPortHeight = parseInt(document.documentElement.clientHeight);
        var scrollHeight = parseInt(document.body.getBoundingClientRect().top);
        var basew = parseInt(discuz$('ft').clientWidth);
        var sw = discuz$('scrolltop').clientWidth;
        if (basew < 1000) {
            var left = parseInt(fetchOffset(discuz$('ft'))['left']);
            left = left < sw ? left * 2 - sw : left;
            discuz$('scrolltop').style.left = (basew + left) + 'px';
        } else {
            discuz$('scrolltop').style.left = 'auto';
            discuz$('scrolltop').style.right = 0;
        }

        if (BROWSER.ie && BROWSER.ie < 7) {
            discuz$('scrolltop').style.top = viewPortHeight - scrollHeight - 150 + 'px';
        }
        if (scrollHeight < -100) {
            discuz$('scrolltop').style.visibility = 'visible';
        } else {
            discuz$('scrolltop').style.visibility = 'hidden';
        }
    }
}

function showCreditmenu() {
    $F('_showCreditmenu', []);
}

function showUpgradeinfo() {
    showMenu({ 'ctrlid': 'g_upmine', 'pos': '21' });
}

function addFavorite(url, title) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, '');
        } catch (e) {
            showDialog("请按 Ctrl+D 键添加到收藏夹", 'notice');
        }
    }
}

function setHomepage(sURL) {
    if (BROWSER.ie) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(sURL);
    } else {
        showDialog("非 IE 浏览器请手动将本站设为首页", 'notice');
        doane();
    }
}

function smilies_show(id, smcols, seditorkey) {
    $F('_smilies_show', arguments, 'smilies');
}

if (typeof IN_ADMINCP == 'undefined') {
    if (creditnotice != '' && getcookie('creditnotice')) {
        _attachEvent(window, 'load', showCreditPrompt, document);
    }
    if (typeof showusercard != 'undefined' && showusercard == 1) {
        _attachEvent(window, 'load', cardInit, document);
    }
}

if (BROWSER.ie) {
    document.documentElement.addBehavior("#default#userdata");
}

function myAlert(tip) {
    showDialog(tip, 'notice', '操作提示信息', null, 0, null, '', ''//confirm text
        , ''//concal text
        , 3//close time
        , 0//locationtime
        );
}/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.1
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);
/*!
 * Marquee jQuery Plug-in
 *
 * Copyright 2009 Giva, Inc. (http://www.givainc.com/labs/) 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * 	http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Date: 2009-05-20
 * Rev:  1.0.01
 */
;(function($){
	// set the version of the link select
	$.marquee = {version: "1.0.01"};
	
	$.fn.marquee = function(options) {
		var method = typeof arguments[0] == "string" && arguments[0];
		var args = method && Array.prototype.slice.call(arguments, 1) || arguments;
		// get a reference to the first marquee found
		var self = (this.length == 0) ? null : $.data(this[0], "marquee");
		
		// if a method is supplied, execute it for non-empty results
		if( self && method && this.length ){

			// if request a copy of the object, return it			
			if( method.toLowerCase() == "object" ) return self;
			// if method is defined, run it and return either it's results or the chain
			else if( self[method] ){
				// define a result variable to return to the jQuery chain
				var result;
				this.each(function (i){
					// apply the method to the current element
					var r = $.data(this, "marquee")[method].apply(self, args);
					// if first iteration we need to check if we're done processing or need to add it to the jquery chain
					if( i == 0 && r ){
						// if this is a jQuery item, we need to store them in a collection
						if( !!r.jquery ){
							result = $([]).add(r);
						// otherwise, just store the result and stop executing
						} else {
							result = r;
							// since we're a non-jQuery item, just cancel processing further items
							return false;
						}
					// keep adding jQuery objects to the results
					} else if( !!r && !!r.jquery ){
						result = result.add(r);
					}
				});

				// return either the results (which could be a jQuery object) or the original chain
				return result || this;
			// everything else, return the chain
			} else return this;
		// initializing request
		} else {
			// create a new marquee for each object found
			return this.each(function (){
				new $.Marquee(this, options);
			});
		};
	};

	$.Marquee = function (marquee, options){
		options = $.extend({}, $.Marquee.defaults, options);
		
		var self = this, $marquee = $(marquee), $lis = $marquee.find("> li"), current = -1, hard_paused = false, paused = false, loop_count = 0;

		// store a reference to this marquee
		$.data($marquee[0], "marquee", self);
		
		// pause the marquee
		this.pause = function (){
			// mark as hard pause (no resume on hover)
			hard_paused = true;
			// pause scrolling
			pause();
		}
		
		// resume the marquee
		this.resume = function (){
			// mark as hard pause (no resume on hover)
			hard_paused = false;
			// resume scrolling
			resume();
		}
		
		// update the marquee
		this.update = function (){
			var iCurrentCount = $lis.length;

			// update the line items
			$lis = $marquee.find("> li");
			
			// if we only have one item, show the next item by resuming playback (which will scroll to the next item)
			if( iCurrentCount <= 1 ) resume();
		}

		// code to introduce the new marquee message
		function show(i){
			// if we're already scrolling an item, stop processing
			if( $lis.filter("." + options.cssShowing).length > 0 ) return false;
			
			var $li = $lis.eq(i);
			
			// run the beforeshow callback
			if( $.isFunction(options.beforeshow) ) options.beforeshow.apply(self, [$marquee, $li]);

			var params = {
				top: (options.yScroll == "top" ? "-" : "+") + $li.outerHeight() + "px"
				, left: 0
			};
			
			$marquee.data("marquee.showing", true);
			$li.addClass(options.cssShowing);
	
			$li.css(params).animate({top: "0px"}, options.showSpeed, options.fxEasingShow, function (){ 
				// run the show callback
				if( $.isFunction(options.show) ) options.show.apply(self, [$marquee, $li]);
				$marquee.data("marquee.showing", false);
				scroll($li);
			});
		}

		// keep the message on the screen for the user to read, scrolling long messages
		function scroll($li, delay){
			// if paused, stop processing
			if( paused == true ) return false;

			// get the delay speed
			delay = delay || options.pauseSpeed;
			// if	item is wider than marquee, then scroll
			if( doScroll($li) ){
				setTimeout(function (){
					// if paused, stop processing (we need to check to see if the pause state has changed)
					if( paused == true ) return false;

					var width = $li.outerWidth(), endPos = width * -1, curPos = parseInt($li.css("left"), 10);

					// scroll the message to the left					
					$li.animate({left: endPos + "px"}, ((width + curPos) * options.scrollSpeed), options.fxEasingScroll, function (){ finish($li); });
				}, delay);
			} else if ( $lis.length > 1 ){
				setTimeout(function (){
					// if paused, stop processing (we need to check to see if the pause state has changed)
					if( paused == true ) return false;

					// scroll the message down
					$li.animate({top: (options.yScroll == "top" ? "+" : "-") + $marquee.innerHeight() + "px"}, options.showSpeed, options.fxEasingScroll);
					// finish showing this message
					finish($li);
				}, delay);
			}
			
		}
		
		function finish($li){
			// run the aftershow callback, only after we've displayed the first option
			if( $.isFunction(options.aftershow) ) options.aftershow.apply(self, [$marquee, $li]);
			
			// mark that we're done scrolling this element
			$li.removeClass(options.cssShowing);
			
			// show the next message
			showNext();
		}

		// this function will pause the current animation
		function pause(){
			// mark the message as paused
			paused = true;
			// don't stop animation if we're just beginning to show the marquee message
			if( $marquee.data("marquee.showing") != true ){
				// we must dequeue() the animation to ensure that it does indeed stop animation
				$lis.filter("." + options.cssShowing).dequeue().stop();
			}
		}
		
		// this function will resume the previous animation
		function resume(){
			// mark the message as resumed
			paused = false;
			// don't resume animation if we haven't completed introducing the message
			if( $marquee.data("marquee.showing") != true ) scroll($lis.filter("." + options.cssShowing), 1);
		}

		// determine if we should pause on hover
		if( options.pauseOnHover ){
			$marquee.hover(
				function (){
					// if hard paused, prevent hover events
					if( hard_paused ) return false;
					// pause scrolling
					pause();
				}
				, function (){
					// if hard paused, prevent hover events
					if( hard_paused ) return false;
					// resume scrolling
					resume();
				}
			);
		}
		
		// determines if the message needs to be scrolled to read
		function doScroll($li){
			return ($li.outerWidth() > $marquee.innerWidth());
		}

		// show the next message in the queue		
		function showNext(){
			// increase the current counter (starts at -1, to indicate a new marquee beginning)
			current++;
			
			// if we only have 1 entry and it doesn't need to scroll, just cancel processing
			if( current >= $lis.length ){
				// if we've reached our loop count, cancel processing
				if( !isNaN(options.loop) && options.loop > 0 && (++loop_count >= options.loop ) ) return false;
				current = 0;
			} 
			
			// show the next message
			show(current);
		}
		
		// run the init callback
		if( $.isFunction(options.init) ) options.init.apply(self, [$marquee, options]);
		
		// show the first item
		showNext();
	};

	$.Marquee.defaults = {
		  yScroll: "top"                          // the position of the marquee initially scroll (can be either "top" or "bottom")
		, showSpeed: 850                          // the speed of to animate the initial dropdown of the messages
		, scrollSpeed: 12                         // the speed of the scrolling (keep number low)
		, pauseSpeed: 5000                        // the time to wait before showing the next message or scrolling current message
		, pauseOnHover: true                      // determine if we should pause on mouse hover
		, loop: -1                                // determine how many times to loop through the marquees (#'s < 0 = infinite)
		, fxEasingShow: "swing"                   // the animition easing to use when showing a new marquee
		, fxEasingScroll: "linear"                // the animition easing to use when showing a new marquee

		// define the class statements
		, cssShowing: "marquee-showing"

		// event handlers
		, init: null                              // callback that occurs when a marquee is initialized
		, beforeshow: null                        // callback that occurs before message starts scrolling on screen
		, show: null                              // callback that occurs when a new marquee message is displayed
		, aftershow: null                         // callback that occurs after the message has scrolled
	};

})(jQuery);
/**
 *   Unslider by @idiot and @damirfoy
 *   Contributors:
 *   - @ShamoX
 *
 */

(function($, f) {
	var Unslider = function() {
		//  Object clone
		var _ = this;

		//  Set some options
		_.o = {
			speed: 500,     // animation speed, false for no transition (integer or boolean)
			delay: 3000,    // delay between slides, false for no autoplay (integer or boolean)
			init: 0,        // init delay, false for no delay (integer or boolean)
			pause: !f,      // pause on hover (boolean)
			loop: !f,       // infinitely looping (boolean)
			keys: f,        // keyboard shortcuts (boolean)
			dots: f,        // display dots pagination (boolean)
			arrows: f,      // display prev/next arrows (boolean)
			prev: '&larr;', // text or html inside prev button (string)
			next: '&rarr;', // same as for prev option
			fluid: f,       // is it a percentage width? (boolean)
			starting: f,    // invoke before animation (function with argument)
			complete: f,    // invoke after animation (function with argument)
			items: '>ul',   // slides container selector
			item: '>li',    // slidable items selector
			easing: 'swing',// easing function to use for animation
			autoplay: true  // enable autoplay on initialisation
		};

		_.init = function(el, o) {
			//  Check whether we're passing any options in to Unslider
			_.o = $.extend(_.o, o);

			_.el = el;
			_.ul = el.find(_.o.items);
			_.max = [el.outerWidth() | 0, el.outerHeight() | 0];
			_.li = _.ul.find(_.o.item).each(function(index) {
				var me = $(this),
					width = me.outerWidth(),
					height = me.outerHeight();

				//  Set the max values
				if (width > _.max[0]) _.max[0] = width;
				if (height > _.max[1]) _.max[1] = height;
			});


			//  Cached vars
			var o = _.o,
				ul = _.ul,
				li = _.li,
				len = li.length;

			//  Current indeed
			_.i = 0;

			//  Set the main element
			el.css({width: _.max[0], height: li.first().outerHeight(), overflow: 'hidden'});

			//  Set the relative widths
			ul.css({position: 'relative', left: 0, width: (len * 100) + '%'});
			if(o.fluid) {
				li.css({'float': 'left', width: (100 / len) + '%'});
			} else {
				li.css({'float': 'left', width: (_.max[0]) + 'px'});
			}

			//  Autoslide
			o.autoplay && setTimeout(function() {
				if (o.delay | 0) {
					_.play();

					if (o.pause) {
						el.on('mouseover mouseout', function(e) {
							_.stop();
							e.type === 'mouseout' && _.play();
						});
					};
				};
			}, o.init | 0);

			//  Keypresses
			if (o.keys) {
				$(document).keydown(function(e) {
					switch(e.which) {
						case 37:
							_.prev(); // Left
							break;
						case 39:
							_.next(); // Right
							break;
						case 27:
							_.stop(); // Esc
							break;
					};
				});
			};

			//  Dot pagination
			o.dots && nav('dot');

			//  Arrows support
			o.arrows && nav('arrow');

			//  Patch for fluid-width sliders. Screw those guys.
			o.fluid && $(window).resize(function() {
				_.r && clearTimeout(_.r);

				_.r = setTimeout(function() {
					var styl = {height: li.eq(_.i).outerHeight()},
						width = el.outerWidth();

					ul.css(styl);
					styl['width'] = Math.min(Math.round((width / el.parent().width()) * 100), 100) + '%';
					el.css(styl);
					li.css({ width: width + 'px' });
				}, 50);
			}).resize();

			//  Move support
			if ($.event.special['move'] || $.Event('move')) {
				el.on('movestart', function(e) {
					if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
						e.preventDefault();
					}else{
						el.data("left", _.ul.offset().left / el.width() * 100);
					}
				}).on('move', function(e) {
					var left = 100 * e.distX / el.width();
				        var leftDelta = 100 * e.deltaX / el.width();
					_.ul[0].style.left = parseInt(_.ul[0].style.left.replace("%", ""))+leftDelta+"%";

					_.ul.data("left", left);
				}).on('moveend', function(e) {
					var left = _.ul.data("left");
					if (Math.abs(left) > 30){
						var i = left > 0 ? _.i-1 : _.i+1;
						if (i < 0 || i >= len) i = _.i;
						_.to(i);
					}else{
						_.to(_.i);
					}
				});
			};

			return _;
		};

		//  Move Unslider to a slide index
		_.to = function(index, callback) {
			if (_.t) {
				_.stop();
				_.play();
	                }
			var o = _.o,
				el = _.el,
				ul = _.ul,
				li = _.li,
				current = _.i,
				target = li.eq(index);

			$.isFunction(o.starting) && !callback && o.starting(el, li.eq(current));

			//  To slide or not to slide
			if ((!target.length || index < 0) && o.loop === f) return;

			//  Check if it's out of bounds
			if (!target.length) index = 0;
			if (index < 0) index = li.length - 1;
			target = li.eq(index);
			target.removeClass("hide");
			var speed = callback ? 5 : o.speed | 0,
				easing = o.easing,
				obj = {height: target.outerHeight()};

			if (!ul.queue('fx').length) {
				//  Handle those pesky dots
				el.find('.dot').eq(index).addClass('active').siblings().removeClass('active');

				el.animate(obj, speed, easing) && ul.animate($.extend({left: '-' + index + '00%'}, obj), speed, easing, function(data) {
					_.i = index;

					$.isFunction(o.complete) && !callback && o.complete(el, target);
				});
			};
		};

		//  Autoplay functionality
		_.play = function() {
			_.t = setInterval(function() {
				_.to(_.i + 1);
			}, _.o.delay | 0);
		};

		//  Stop autoplay
		_.stop = function() {
			_.t = clearInterval(_.t);
			return _;
		};

		//  Move to previous/next slide
		_.next = function() {
			return _.stop().to(_.i + 1);
		};

		_.prev = function() {
			return _.stop().to(_.i - 1);
		};

		//  Create dots and arrows
		function nav(name, html) {
			if (name == 'dot') {
				html = '<ol class="dots">';
					$.each(_.li, function(index) {
						html += '<li class="' + (index === _.i ? name + ' active' : name) + '">' + ++index + '</li>';
					});
				html += '</ol>';
			} else {
				html = '<div class="';
				html = html + name + 's">' + html + name + ' prev">' + _.o.prev + '</div>' + html + name + ' next">' + _.o.next + '</div></div>';
			};

			_.el.addClass('has-' + name + 's').append(html).find('.' + name).click(function() {
				var me = $(this);
				me.hasClass('dot') ? _.stop().to(me.index()) : me.hasClass('prev') ? _.prev() : _.next();
			});
		};
	};

	//  Create a jQuery plugin
	$.fn.unslider = function(o) {
		var len = this.length;

		//  Enable multiple-slider support
		return this.each(function(index) {
			//  Cache a copy of $(this), so it
			var me = $(this),
				key = 'unslider' + (len > 1 ? '-' + ++index : ''),
				instance = (new Unslider).init(me, o);

			//  Invoke an Unslider instance
			me.data(key, instance).data('key', key);
		});
	};

	Unslider.version = "1.0.0";
})(jQuery, false);
