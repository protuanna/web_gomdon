(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,u=n(7273).Z,a=r(n(7294)),f=n(6273),l=n(2725),c=n(3462),i=n(1018),s=n(7190),p=n(1210),d=n(8684),v="undefined"!==typeof a.default.useTransition,y={};function h(e,t,n,o){if(e&&f.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;y[t+"%"+n+(r?"%"+r:"")]=!0}}var b=a.default.forwardRef((function(e,t){var n,r=e.href,b=e.as,_=e.children,g=e.prefetch,C=e.passHref,m=e.replace,R=e.soft,x=e.shallow,M=e.scroll,O=e.locale,L=e.onClick,j=e.onMouseEnter,E=e.onTouchStart,P=e.legacyBehavior,T=void 0===P?!0!==Boolean(!1):P,k=u(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!T||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var w=!1!==g,I=o(v?a.default.useTransition():[],2)[1],S=a.default.useContext(c.RouterContext),U=a.default.useContext(i.AppRouterContext);U&&(S=U);var D,A=a.default.useMemo((function(){var e=o(f.resolveHref(S,r,!0),2),t=e[0],n=e[1];return{href:t,as:b?f.resolveHref(S,b):n||t}}),[S,r,b]),B=A.href,H=A.as,N=a.default.useRef(B),Z=a.default.useRef(H);T&&(D=a.default.Children.only(n));var K=T?D&&"object"===typeof D&&D.ref:t,W=o(s.useIntersection({rootMargin:"200px"}),3),q=W[0],G=W[1],z=W[2],F=a.default.useCallback((function(e){Z.current===H&&N.current===B||(z(),Z.current=H,N.current=B),q(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[H,K,B,z,q]);a.default.useEffect((function(){var e=G&&w&&f.isLocalURL(B),t="undefined"!==typeof O?O:S&&S.locale,n=y[B+"%"+H+(t?"%"+t:"")];e&&!n&&h(S,B,H,{locale:t})}),[H,B,G,O,w,S]);var V={ref:F,onClick:function(e){T||"function"!==typeof L||L(e),T&&D.props&&"function"===typeof D.props.onClick&&D.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,u,a,l,c,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&f.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?r?"softReplace":"softPush":r?"replace":"push"](n):t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:l})};i?i(s):s()}}(e,S,B,H,m,R,x,M,O,U?I:void 0)},onMouseEnter:function(e){T||"function"!==typeof j||j(e),T&&D.props&&"function"===typeof D.props.onMouseEnter&&D.props.onMouseEnter(e),f.isLocalURL(B)&&h(S,B,H,{priority:!0})},onTouchStart:function(e){T||"function"!==typeof E||E(e),T&&D.props&&"function"===typeof D.props.onTouchStart&&D.props.onTouchStart(e),f.isLocalURL(B)&&h(S,B,H,{priority:!0})}};if(!T||C||"a"===D.type&&!("href"in D.props)){var Y="undefined"!==typeof O?O:S&&S.locale,J=S&&S.isLocaleDomain&&p.getDomainLocale(H,Y,S.locales,S.domainLocales);V.href=J||d.addBasePath(l.addLocale(H,Y,S&&S.defaultLocale))}return T?a.default.cloneElement(D,V):a.default.createElement("a",Object.assign({},k,V),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,i=r.useRef(),s=o(r.useState(!1),2),p=s[0],d=s[1],v=o(r.useState(null),2),y=v[0],h=v[1];r.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),c||p)return;return y&&y.tagName&&(i.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=f.get(o)))return t;var r=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:r},l.push(n),f.set(n,t),t}(n),r=o.id,u=o.observer,a=o.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),f.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(y,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,c,n,t,p]);var b=r.useCallback((function(){d(!1)}),[]);return[h,p,b]};var r=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var u=o.default.createContext(null);t.LayoutRouterContext=u;var a=o.default.createContext(null);t.GlobalLayoutRouterContext=a},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},4298:function(e,t,n){n(699)},2703:function(e,t,n){"use strict";var o=n(414);function r(){}function u(){}u.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,u,a){if(a!==o){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);