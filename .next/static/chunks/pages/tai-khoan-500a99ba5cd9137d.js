(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return j}});var n=r(3636),a=r(5697),o=r.n(a),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var h=!1;try{h=!0}catch(g){}function v(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var j=i.forwardRef((function(e,t){var r=e.icon,a=e.mask,o=e.symbol,i=e.className,s=e.title,c=e.titleId,u=e.maskId,d=v(r),b=x("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,d=e.fixedWidth,b=e.inverse,y=e.border,m=e.listItem,h=e.flip,v=e.size,x=e.rotation,j=e.pull,O=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":d,"fa-inverse":b,"fa-border":y,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),f(t,"fa-rotate-".concat(x),"undefined"!==typeof x&&null!==x&&0!==x),f(t,"fa-pull-".concat(j),"undefined"!==typeof j&&null!==j),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(O).map((function(e){return O[e]?e:null})).filter((function(e){return e}))}(e)),p(i.split(" ")))),y=x("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform),m=x("mask",v(a)),g=(0,n.qv)(d,l(l(l(l({},b),y),m),{},{symbol:o,title:s,titleId:c,maskId:u}));if(!g)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var w=g.abstract,N={ref:t};return Object.keys(e).forEach((function(t){j.defaultProps.hasOwnProperty(t)||(N[t]=e[t])})),O(w[0],N)}));j.displayName="FontAwesomeIcon",j.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var O=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=u(n,y);return o.attrs.style=l(l({},o.attrs.style),s),t.apply(void 0,[r.tag,l(l({},o.attrs),c)].concat(p(a)))}.bind(null,i.createElement)},7858:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tai-khoan",function(){return r(5894)}])},5894:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),a=r(6151),o=(r(7294),r(7814)),i=r(9417),s=r(1664),l=r.n(s),c=(r(3314),r(3299)),f=r(1163),u=r(5675),p=r.n(u);function d(){var e=(0,c.useSession)(),t=e.data,r=e.status,s="";"authenticated"===r&&(s=t.user.name);(0,f.useRouter)();var u="";return"authenticated"===r&&(console.log(r),u=(0,n.jsxs)("a",{href:"#",title:"",className:"alv_col",onClick:function(){(0,c.signOut)({callbackUrl:"".concat(window.location.origin)})},children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(o.G,{icon:i.HEx})}),(0,n.jsx)("p",{className:"title16",children:"\u0110\u0103ng xu\u1ea5t"})]})),(0,n.jsx)("div",{id:"main",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"contents",children:[(0,n.jsx)("div",{className:"head_col_acc",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"images",children:(0,n.jsx)(p(),{src:"/images/logo.png",alt:"",width:"100%",height:"100%",layout:"responsive",priority:!0})}),(0,n.jsx)("h3",{className:"title18",children:s}),(0,n.jsx)("h3",{className:"title18",children:"C\u1eeda h\xe0ng"})]})}),(0,n.jsx)("div",{className:"content",children:(0,n.jsxs)("div",{className:"ranle",children:[(0,n.jsx)("div",{className:"tab_list_menu",children:(0,n.jsx)(l(),{href:"/phieu-doi-soat",children:(0,n.jsxs)("a",{href:"",title:"",className:"alv_col",children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(o.G,{icon:i.Ozh})}),(0,n.jsx)("p",{className:"title16",children:"Phi\u1ebfu \u0111\u1ed1i so\xe1t"}),(0,n.jsx)("div",{className:"angle-right",children:(0,n.jsx)("i",{className:"fas fa-angle-right"})})]})})}),(0,n.jsx)("div",{className:"tab_list_menu",children:u})]})}),(0,n.jsx)(a.Z,{})]})})})}}},function(e){e.O(0,[976,232,876,217,675,551,774,888,179],(function(){return t=7858,e(e.s=t);var t}));var t=e.O();_N_E=t}]);