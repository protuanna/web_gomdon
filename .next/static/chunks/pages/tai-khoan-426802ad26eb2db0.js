(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[652],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return j}});var n=r(3636),o=r(5697),a=r.n(o),i=r(7294);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function m(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var h=!1;try{h=!0}catch(g){}function v(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var j=i.forwardRef((function(e,t){var r=e.icon,o=e.mask,a=e.symbol,i=e.className,s=e.title,c=e.titleId,f=e.maskId,b=v(r),d=O("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,b=e.fixedWidth,d=e.inverse,y=e.border,m=e.listItem,h=e.flip,v=e.size,O=e.rotation,j=e.pull,x=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":b,"fa-inverse":d,"fa-border":y,"fa-li":m,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(v),"undefined"!==typeof v&&null!==v),u(t,"fa-rotate-".concat(O),"undefined"!==typeof O&&null!==O&&0!==O),u(t,"fa-pull-".concat(j),"undefined"!==typeof j&&null!==j),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(e)),p(i.split(" ")))),y=O("transform","string"===typeof e.transform?n.Qc.transform(e.transform):e.transform),m=O("mask",v(o)),g=(0,n.qv)(b,l(l(l(l({},d),y),m),{},{symbol:a,title:s,titleId:c,maskId:f}));if(!g)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var w=g.abstract,N={ref:t};return Object.keys(e).forEach((function(t){j.defaultProps.hasOwnProperty(t)||(N[t]=e[t])})),x(w[0],N)}));j.displayName="FontAwesomeIcon",j.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},j.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var x=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=m(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=f(n,y);return a.attrs.style=l(l({},a.attrs.style),s),t.apply(void 0,[r.tag,l(l({},a.attrs),c)].concat(p(o)))}.bind(null,i.createElement)},7858:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tai-khoan",function(){return r(5894)}])},5894:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),o=r(6151),a=(r(7294),r(7814)),i=r(9417),s=(r(3314),r(3299)),l=r(1163),c=r(5675),u=r.n(c);function f(){var e=(0,s.useSession)(),t=e.data,r="";"authenticated"===e.status&&(r=t.user.name);var c=(0,l.useRouter)();return console.log(t),(0,n.jsx)("div",{id:"main",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"contents",children:[(0,n.jsx)("div",{className:"head_col_acc",children:(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("div",{className:"images",children:(0,n.jsx)(u(),{src:"/images/logo.png",alt:"",width:"100%",height:"100%",layout:"responsive"})}),(0,n.jsx)("h3",{className:"title18",children:r}),(0,n.jsx)("h3",{className:"title18",children:"C\u1eeda h\xe0ng"})]})}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)("div",{className:"ranle",children:(0,n.jsx)("div",{className:"tab_list_menu",children:(0,n.jsxs)("a",{href:"javascript:void(0)",title:"",className:"alv_col",onClick:function(){return(0,s.signOut)(),c.push("/")},children:[(0,n.jsx)("div",{className:"icon",children:(0,n.jsx)(a.G,{icon:i.HEx})}),(0,n.jsx)("p",{className:"title16",children:"\u0110\u0103ng xu\u1ea5t"})]})})})}),(0,n.jsx)(o.Z,{})]})})})}}},function(e){e.O(0,[976,424,217,765,551,774,888,179],(function(){return t=7858,e(e.s=t);var t}));var t=e.O();_N_E=t}]);