(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3589)}])},3589:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSP:function(){return x},default:function(){return g}});a(7568),a(4051);var l=a(5893);var s=a(6151),t=a(7294),i=a(9217);function r(e){var n,a,s,r,h,o,c,d,u,v,m,x,g,j,p,f,C,N,_,w,b=e.data,Z=[],y=0;b.length>0&&b.forEach((function(e,n){Z[e.status]=e.total,y+=e.total}));var F=(0,t.useState)([{label:"T\u1ea1o m\u1edbi",status:1,value:null!==(n=Z[1])&&void 0!==n?n:0,percent:y>0?(100*(null!==(a=Z[1])&&void 0!==a?a:0)/y).toFixed(2):0,color:"#228B22"},{label:"H\u1ee7y",status:2,value:null!==(s=Z[2])&&void 0!==s?s:0,percent:y>0?(100*(null!==(r=Z[2])&&void 0!==r?r:0)/y).toFixed(2):0,color:"#BEBEBE"},{label:"\u0110\xe3 l\u1ea5y h\xe0ng",status:3,value:null!==(h=Z[3])&&void 0!==h?h:0,percent:y>0?(100*(null!==(o=Z[3])&&void 0!==o?o:0)/y).toFixed(2):0,color:"#FF0000"},{label:"\u0110ang v\u1eadn chuy\u1ec3n",status:4,value:null!==(c=Z[4])&&void 0!==c?c:0,percent:y>0?(100*(null!==(d=Z[4])&&void 0!==d?d:0)/y).toFixed(2):0,color:"#4CAEE3"},{label:"\u0110ang giao h\xe0ng",status:5,value:null!==(u=Z[5])&&void 0!==u?u:0,percent:y>0?(100*(null!==(v=Z[5])&&void 0!==v?v:0)/y).toFixed(2):0,color:"#FF8C00"},{label:"\u0110ang chuy\u1ec3n ho\xe0n",status:6,value:null!==(m=Z[6])&&void 0!==m?m:0,percent:y>0?(100*(null!==(x=Z[6])&&void 0!==x?x:0)/y).toFixed(2):0,color:"#4169E1"},{label:"\u0110\xe3 giao h\xe0ng",status:7,value:null!==(g=Z[7])&&void 0!==g?g:0,percent:y>0?(100*(null!==(j=Z[7])&&void 0!==j?j:0)/y).toFixed(2):0,color:"#20B2AA"},{label:"\u0110\xe3 tr\u1ea3 h\xe0ng",status:8,value:null!==(p=Z[8])&&void 0!==p?p:0,percent:y>0?(100*(null!==(f=Z[8])&&void 0!==f?f:0)/y).toFixed(2):0,color:"#9966FF"},{label:"Ki\u1ec7n v\u1ea5n \u0111\u1ec1",status:9,value:null!==(C=Z[9])&&void 0!==C?C:0,percent:y>0?(100*(null!==(N=Z[9])&&void 0!==N?N:0)/y).toFixed(2):0,color:"#FF69B4"},{label:"\u0110\u01a1n l\u1ea5y h\xe0ng th\u1ea5t b\u1ea1i",status:10,value:null!==(_=Z[10])&&void 0!==_?_:0,percent:y>0?(100*(null!==(w=Z[10])&&void 0!==w?w:0)/y).toFixed(2):0,color:"#607C8E"}]),E=F[0],H=(F[1],(0,t.useRef)(null));return(0,t.useEffect)((function(){var e=H.current.getContext("2d"),n=[],a=[],l=[];E.forEach((function(e,s){n.push(e.label),a.push(e.value),l.push(e.color)}));var s={type:"pie",data:{labels:n,datasets:[{label:"Th\u1ed1ng k\xea tr\u1ea1ng th\xe1i \u0111\u01a1n h\xe0ng",data:a,backgroundColor:l,hoverOffset:4}]}},t=new i.Z(e,s);return function(){t.destroy()}})),(0,l.jsxs)("div",{className:"html_management_col",children:[(0,l.jsx)("div",{className:"title_top",children:(0,l.jsx)("h3",{className:"title21",children:"Ng\u01b0\u1eddi g\u1eedi theo d\xf5i qu\u1ea3n l\xfd"})}),(0,l.jsx)("div",{style:{width:"60%",margin:"0 auto 30px"},children:(0,l.jsx)("canvas",{id:"myChart",ref:H,height:"40vh",width:"80vw",children:"chart"})}),(0,l.jsx)("div",{className:"management_information ranle",children:(0,l.jsxs)("div",{className:"information",children:[(0,l.jsxs)("div",{className:"title_item",children:[(0,l.jsx)("div",{className:"title_info status",children:"Tr\u1ea1ng th\xe1i"}),(0,l.jsx)("div",{className:"title_info amount",children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,l.jsx)("div",{className:"title_info percent",children:"Ph\u1ea7n tr\u0103m"})]}),(0,l.jsx)("ul",{className:"",children:E.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"status_info status status_"+e.status,children:e.label}),(0,l.jsx)("div",{className:"amount_info amount",children:e.value}),(0,l.jsxs)("div",{className:"percent_info percent",children:[e.percent,"%"]})]},e.status)}))})]})})]})}var h=a(3299),o=a(615),c=a(5675),d=a.n(c),u=a(1664),v=a.n(u),m=a(1163),x=(a(3314),a(6455),!0);function g(e){var n=e.banners,a=e.report,i=(0,h.useSession)(),c=(i.data,i.status),u=(0,m.useRouter)(),x=(0,t.useState)(""),g=x[0],j=x[1],p="";if("authenticated"===c){var f=!0===a.result?a.data:[];p=(0,l.jsx)(r,{data:f})}else p=(0,l.jsxs)("div",{className:"login_content",children:[(0,l.jsx)("div",{className:"lbl_login",children:(0,l.jsx)("strong",{children:"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 truy v\u1ea5n \u0111\u01a1n h\xe0ng"})}),(0,l.jsx)(v(),{href:"/login",children:(0,l.jsx)("div",{className:"btn_login",children:"\u0110\u0103ng nh\u1eadp"})})]});var C=!0===n.result?n.data:[];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{id:"main",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"contents",children:[(0,l.jsx)("div",{className:"head_col",children:(0,l.jsxs)("div",{className:"searching",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-qr-code-scan",viewBox:"0 0 16 16",children:[(0,l.jsx)("path",{d:"M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"}),(0,l.jsx)("path",{d:"M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"}),(0,l.jsx)("path",{d:"M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"}),(0,l.jsx)("path",{d:"M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"}),(0,l.jsx)("path",{d:"M12 9h2V8h-2v1Z"})]}),(0,l.jsx)("div",{className:"search-head",id:"search",children:(0,l.jsxs)("form",{action:"",onSubmit:function(e){return function(e){e.preventDefault(),u.push({pathname:"quan-ly-don-hang",query:{search:g}})}(e)},children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"})}),(0,l.jsx)("input",{type:"text",placeholder:"Nh\u1eadp m\xe3 v\u1eadn \u0111\u01a1n, S\u0110T, t\xean kh\xe1ch h\xe0ng",value:g,onChange:function(e){return j(e.target.value)}})]})})]})}),(0,l.jsx)(o.lr,{id:"slidein-banner",className:"bann_home owl-carousel owl-theme wow fadeInDown",autoPlay:!0,infiniteLoop:!0,showArrows:!1,showStatus:!1,showIndicators:!1,showThumbs:!1,children:C.map((function(e){return(0,l.jsx)("div",{className:"bg",children:(0,l.jsx)("img",{src:e.image,alt:e.name})},e.name)}))}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"list_order",children:[(0,l.jsx)(v(),{href:"/quan-ly-don-hang",children:(0,l.jsx)("a",{href:"",title:"",children:(0,l.jsxs)("div",{className:"ordering",children:[(0,l.jsx)("div",{className:"images",children:(0,l.jsx)(d(),{src:"/images/order_icon.png",alt:"",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,l.jsx)("p",{className:"title16",children:"Qu\u1ea3n l\xfd \u0111\u01a1n h\xe0ng"})]})})},"quan-ly-don-hang"),(0,l.jsx)(v(),{href:"/gui-hang",children:(0,l.jsx)("a",{href:"",title:"",children:(0,l.jsxs)("div",{className:"ordering",children:[(0,l.jsx)("div",{className:"images",children:(0,l.jsx)(d(),{src:"/images/delivery_icon.png",alt:"",width:"100%",height:"100%",layout:"responsive",objectFit:"contain",priority:!0})}),(0,l.jsx)("p",{className:"title16",children:"G\u1eedi h\xe0ng"})]})})},"gui-hang")]}),p]}),(0,l.jsx)(s.Z,{})]})})})})}}},function(e){e.O(0,[757,232,876,217,455,675,229,551,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);