(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{7814:function(e,t,n){"use strict";n.d(t,{G:function(){return g}});var r=n(3636),a=n(5697),s=n.n(a),i=n(7294);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var m=["style"];function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=p(t.slice(0,r)),s=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=s:e[a]=s,e}),{})}var v=!1;try{v=!0}catch(w){}function y(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var g=i.forwardRef((function(e,t){var n=e.icon,a=e.mask,s=e.symbol,i=e.className,l=e.title,c=e.titleId,f=e.maskId,h=y(n),p=x("classes",[].concat(d(function(e){var t,n=e.beat,r=e.fade,a=e.beatFade,s=e.bounce,i=e.shake,l=e.flash,o=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,p=e.inverse,m=e.border,b=e.listItem,v=e.flip,y=e.size,x=e.rotation,g=e.pull,j=(u(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":s,"fa-shake":i,"fa-flash":l,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":m,"fa-li":b,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(y),"undefined"!==typeof y&&null!==y),u(t,"fa-rotate-".concat(x),"undefined"!==typeof x&&null!==x&&0!==x),u(t,"fa-pull-".concat(g),"undefined"!==typeof g&&null!==g),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map((function(e){return j[e]?e:null})).filter((function(e){return e}))}(e)),d(i.split(" ")))),m=x("transform","string"===typeof e.transform?r.Qc.transform(e.transform):e.transform),b=x("mask",y(a)),w=(0,r.qv)(h,o(o(o(o({},p),m),b),{},{symbol:s,title:l,titleId:c,maskId:f}));if(!w)return function(){var e;!v&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",h),null;var O=w.abstract,N={ref:t};return Object.keys(e).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(N[t]=e[t])})),j(O[0],N)}));g.displayName="FontAwesomeIcon",g.propTypes={beat:s().bool,border:s().bool,beatFade:s().bool,bounce:s().bool,className:s().string,fade:s().bool,flash:s().bool,mask:s().oneOfType([s().object,s().array,s().string]),maskId:s().string,fixedWidth:s().bool,inverse:s().bool,flip:s().oneOf([!0,!1,"horizontal","vertical","both"]),icon:s().oneOfType([s().object,s().array,s().string]),listItem:s().bool,pull:s().oneOf(["right","left"]),pulse:s().bool,rotation:s().oneOf([0,90,180,270]),shake:s().bool,size:s().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:s().bool,spinPulse:s().bool,spinReverse:s().bool,symbol:s().oneOfType([s().bool,s().string]),title:s().string,titleId:s().string,transform:s().oneOfType([s().string,s().object]),swapOpacity:s().bool},g.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),s=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=b(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[p(t)]=r}return e}),{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=f(r,m);return s.attrs.style=o(o({},s.attrs.style),l),t.apply(void 0,[n.tag,o(o({},s.attrs),c)].concat(d(a)))}.bind(null,i.createElement)},9478:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tra-cuu-don-hang",function(){return n(7283)}])},6151:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(7294),s=n(1664),i=n.n(s),l=n(3299),o=n(1163);function c(){var e=(0,l.useSession)(),t=(e.data,e.status,(0,o.useRouter)().route),n=(0,a.useState)("/"===t?"active":""),s=n[0],c=(n[1],(0,a.useState)("/gui-hang"===t||"/gui-hang-thanh-cong"===t?"active":"")),u=c[0],f=(c[1],(0,a.useState)("/quan-ly-don-hang"===t||"/chi-tiet-don-hang"===t?"active":"")),d=f[0],h=(f[1],(0,a.useState)("/tai-khoan"===t?"active":"")),p=h[0];h[1];return(0,r.jsx)("div",{className:"Group_mobile",children:(0,r.jsxs)("ul",{className:"form",children:[(0,r.jsx)("li",{className:"",children:(0,r.jsx)(i(),{href:"/",children:(0,r.jsxs)("a",{className:s,children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"currentColor",children:(0,r.jsx)("path",{d:"M19 22.7501H5C4.44772 22.7501 4 22.3024 4 21.7501V13.7501H2L11.292 4.45711C11.4796 4.26933 11.7341 4.16382 11.9995 4.16382C12.2649 4.16382 12.5194 4.26933 12.707 4.45711L22 13.7501H20V21.7501C20 22.3024 19.5523 22.7501 19 22.7501ZM10 15.7501H14V20.7501H18V12.5781L12 6.5781L6 12.5781V20.7501H10V15.7501Z"})}),(0,r.jsx)("span",{children:"Trang ch\u1ee7"})]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/gui-hang",children:(0,r.jsxs)("a",{title:"",className:u,children:[(0,r.jsx)("svg",{style:{fontSize:"18px"},width:"20",height:"20",className:"svg-inline--fa fa-paper-plane fa-w-16","aria-hidden":"true",focusable:"false","data-prefix":"fa","data-icon":"paper-plane",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","data-fa-i2svg":"",children:(0,r.jsx)("path",{fill:"currentColor",d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"})}),(0,r.jsx)("span",{children:"G\u1eedi h\xe0ng"})]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/quan-ly-don-hang",children:(0,r.jsxs)("a",{title:"",className:d,children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-receipt-cutoff",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"}),(0,r.jsx)("path",{d:"M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"})]}),(0,r.jsx)("span",{children:"Qu\u1ea3n l\xfd \u0111\u01a1n h\xe0ng"})]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/tai-khoan",children:(0,r.jsxs)("a",{title:"",className:p,children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-person",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})}),(0,r.jsx)("span",{children:"T\xe0i kho\u1ea3n"})]})})})]})})}},7283:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return d},default:function(){return h}});var r=n(5893),a=n(6151),s=n(7294),i=n(3299),l=n(1163),o=n(7814),c=n(9417),u=n(5675),f=n.n(u),d=!0;function h(e){var t=e.order,n=function(e){var t=new Date(e),n=("0"+t.getDate()).slice(-2),r=("0"+(t.getMonth()+1)).slice(-2),a=t.getFullYear();("0"+t.getHours()).slice(-2),("0"+t.getMinutes()).slice(-2),("0"+t.getSeconds()).slice(-2);return"".concat(n,"/").concat(r,"/").concat(a)},u=function(e){var t=new Date(e),n=(("0"+t.getDate()).slice(-2),("0"+(t.getMonth()+1)).slice(-2),t.getFullYear(),("0"+t.getHours()).slice(-2)),r=("0"+t.getMinutes()).slice(-2),a=("0"+t.getSeconds()).slice(-2);return"".concat(n,":").concat(r,":").concat(a)},d=(0,i.useSession)(),h=(d.data,d.status),p=(0,l.useRouter)();"unauthenticated"===h&&p.push("/login");var m=(0,s.useState)(t.data),b=m[0],v=(m[1],b.logs),y=[];return v.length>0&&(v.sort((function(e,t){var n=new Date(e.created_at),r=new Date(t.created_at);return n>r?-1:n<r?1:0})),v.forEach((function(e,t){y.push((0,r.jsxs)("div",{className:0==t?"item-route active":"item-route",children:[(0,r.jsxs)("div",{className:"date",children:[(0,r.jsx)("p",{children:n(e.created_at)}),(0,r.jsx)("p",{children:u(e.created_at)})]}),(0,r.jsx)("p",{className:"title16",children:e.status_description})]},t))}))),b?(0,r.jsx)("div",{id:"main",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"contents",children:[(0,r.jsx)("div",{className:"head_col",children:(0,r.jsxs)("div",{className:"head_title",children:[(0,r.jsx)("a",{href:"#",onClick:function(){return p.back()},children:(0,r.jsx)(o.G,{icon:c.EyR})}),(0,r.jsx)("h3",{className:"title18",children:"Chi ti\u1ebft chuy\u1ec3n ph\xe1t"}),(0,r.jsx)("span",{})]})}),(0,r.jsx)("div",{className:"html_single_delivery",children:(0,r.jsxs)("div",{className:"content",children:[(0,r.jsx)("div",{className:"item-logo",children:(0,r.jsx)(f(),{src:"/images/logo.png",alt:"",width:"150px",height:"150px"})}),(0,r.jsx)("div",{className:"title-item title26",children:b.id}),(0,r.jsxs)("div",{className:"tp_to",children:[(0,r.jsxs)("div",{className:"honest",children:[(0,r.jsx)("div",{className:"city",children:b.source_province}),(0,r.jsx)("div",{className:"name",children:b.source_name})]}),(0,r.jsx)("div",{className:"go",children:"---\x3e"}),(0,r.jsxs)("div",{className:"honest",children:[(0,r.jsx)("div",{className:"city",children:b.dest_province}),(0,r.jsx)("div",{className:"name",children:b.dest_name})]})]}),(0,r.jsx)("div",{className:"route-content",children:y})]})}),(0,r.jsx)(a.Z,{})]})})}):(0,r.jsx)("div",{children:"Kh\xf4ng t\xecm th\u1ea5y \u0111\u01a1n h\xe0ng"})}}},function(e){e.O(0,[976,424,765,774,888,179],(function(){return t=9478,e(e.s=t);var t}));var t=e.O();_N_E=t}]);