(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,l=e.unoptimized,c=void 0!==l&&l,m=e.priority,h=void 0!==m&&m,w=e.loading,k=e.lazyRoot,_=void 0===k?null:k,j=e.lazyBoundary,I=e.className,O=e.quality,R=e.width,L=e.height,C=e.style,P=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,T=e.placeholder,W=void 0===T?"empty":T,B=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),M=d.useContext(p.ImageConfigContext),U=d.useMemo((function(){var e=y||M||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[M]),Z=D,V=i?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(V=Z.layout),delete Z.layout);var F=x;if("loader"in Z){if(Z.loader){var H=Z.loader;F=function(e){e.config;var t=s(e,["config"]);return H(t)}}delete Z.loader}var G="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(L=L||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!h&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Q=!1);b.has(t)&&(Q=!1);U.unoptimized&&(c=!0);var Y,K=o(d.useState(!1),2),X=K[0],$=K[1],ee=o(g.useIntersection({rootRef:_,rootMargin:j||"200px",disabled:!Q}),3),te=ee[0],ie=ee[1],ne=ee[2],oe=!Q||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},re={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q},se=A(R),de=A(L),ue=A(O);0;var fe=Object.assign({},C,ce),ge="blur"!==W||X?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof de){var pe=de/se,me=isNaN(pe)?"100%":"".concat(100*pe,"%");"responsive"===V?(ae.display="block",ae.position="relative",le=!0,re.paddingTop=me):"intrinsic"===V?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",le=!0,re.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===V&&(ae.display="inline-block",ae.position="relative",ae.width=se,ae.height=de)}else 0;var he={src:v,srcSet:void 0,sizes:void 0};oe&&(he=S({config:U,src:t,unoptimized:c,layout:V,width:se,quality:ue,sizes:i,loader:F}));var ye=t;0;var be;0;var ve=(n(be={},"imagesrcset",he.srcSet),n(be,"imagesizes",he.sizes),n(be,"crossOrigin",Z.crossOrigin),be),we=d.default.useLayoutEffect,ze=d.useRef(N),Se=d.useRef(t);d.useEffect((function(){ze.current=N}),[N]),we((function(){Se.current!==t&&(ne(),Se.current=t)}),[ne,t]);var Ae=r({isLazy:Q,imgAttributes:he,heightInt:de,widthInt:se,qualityInt:ue,layout:V,className:I,imgStyle:fe,blurStyle:ge,loading:w,config:U,unoptimized:c,placeholder:W,loader:F,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:i},Z);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},le?d.default.createElement("span",{style:re},Y?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,d.default.createElement(E,Object.assign({},Ae))),h?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},ve))):null)};var r=i(6495).Z,l=i(2648).Z,c=i(1598).Z,s=i(7273).Z,d=c(i(7294)),u=l(i(5443)),f=i(9309),g=i(7190),p=i(9977),m=(i(3794),i(2392));function h(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(h(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(h(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(h(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var d,u=.01*(d=Math).min.apply(d,a(s));return{widths:r.filter((function(e){return e>=o[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,c),u=d.widths,f=d.kind,g=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:u[g]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function k(e,t,i,n,o,a){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}})))}var E=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,p=e.srcString,m=e.config,h=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,A=e.onError,x=(e.isVisible,e.noscriptSizes),E=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":o,className:a,style:r({},l,c),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,p,0,f,b,v)}),[w,p,o,f,b,v]),onLoad:function(e){k(e.currentTarget,p,0,f,b,v),z&&z(e)},onError:function(e){"blur"===f&&v(!0),A&&A(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},E,S({config:m,src:p,unoptimized:h,layout:o,width:i,quality:n,sizes:x,loader:y}),{decoding:"async","data-nimg":o,style:l,className:a,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(8045)},2703:function(e,t,i){"use strict";var n=i(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,i,o,a,r){if(r!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return i.PropTypes=i,i}},5697:function(e,t,i){e.exports=i(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);