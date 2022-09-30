"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/header_search.js
//import { useState } from "react";

function HeaderSearch() {
    //const [search, setSearch] = useState('');
    return /*#__PURE__*/ _jsxs("div", {
        className: "searching",
        children: [
            /*#__PURE__*/ _jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-qr-code-scan",
                viewBox: "0 0 16 16",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M12 9h2V8h-2v1Z"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "search-head",
                id: "search",
                children: /*#__PURE__*/ _jsxs("form", {
                    action: "",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ _jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "currentColor",
                            children: /*#__PURE__*/ _jsx("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"
                            })
                        }),
                        /*#__PURE__*/ _jsx("input", {
                            type: "text",
                            placeholder: "Tra cứu m\xe3 đơn h\xe0ng / m\xe3 vận đơn"
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(6151);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "chart.js/auto"
const auto_namespaceObject = require("chart.js/auto");
var auto_default = /*#__PURE__*/__webpack_require__.n(auto_namespaceObject);
;// CONCATENATED MODULE: ./components/report.js



function Report({ data  }) {
    //const [search, setSearch] = useState('');
    let dt = [];
    let total = 0;
    data.forEach(function(item, index) {
        dt[item.status] = item.total;
        total += item.total;
    });
    const { 0: report , 1: setReport  } = (0,external_react_.useState)([
        {
            label: "Tạo mới",
            status: 1,
            value: dt[1] ?? 0,
            percent: ((dt[1] ?? 0) * 100 / total).toFixed(2),
            color: "#228B22"
        },
        {
            label: "Hủy",
            status: 2,
            value: dt[2] ?? 0,
            percent: ((dt[2] ?? 0) * 100 / total).toFixed(2),
            color: "#BEBEBE"
        },
        {
            label: "Đ\xe3 lấy h\xe0ng",
            status: 3,
            value: dt[3] ?? 0,
            percent: ((dt[3] ?? 0) * 100 / total).toFixed(2),
            color: "#FF0000"
        },
        {
            label: "Đang vận chuyển",
            status: 4,
            value: dt[4] ?? 0,
            percent: ((dt[4] ?? 0) * 100 / total).toFixed(2),
            color: "#4CAEE3"
        },
        {
            label: "Đang giao h\xe0ng",
            status: 5,
            value: dt[5] ?? 0,
            percent: ((dt[5] ?? 0) * 100 / total).toFixed(2),
            color: "#FF8C00"
        },
        {
            label: "Đang chuyển ho\xe0n",
            status: 6,
            value: dt[6] ?? 0,
            percent: ((dt[6] ?? 0) * 100 / total).toFixed(2),
            color: "#4169E1"
        },
        {
            label: "Đ\xe3 giao h\xe0ng",
            status: 7,
            value: dt[7] ?? 0,
            percent: ((dt[7] ?? 0) * 100 / total).toFixed(2),
            color: "#20B2AA"
        },
        {
            label: "Đ\xe3 trả h\xe0ng",
            status: 8,
            value: dt[8] ?? 0,
            percent: ((dt[8] ?? 0) * 100 / total).toFixed(2),
            color: "#9966FF"
        },
        {
            label: "Kiện vấn đề",
            status: 9,
            value: dt[9] ?? 0,
            percent: ((dt[9] ?? 0) * 100 / total).toFixed(2),
            color: "#FF69B4"
        },
        {
            label: "Đơn lấy h\xe0ng thất bại",
            status: 10,
            value: dt[10] ?? 0,
            percent: ((dt[10] ?? 0) * 100 / total).toFixed(2),
            color: "#607C8E"
        }, 
    ]);
    const canvasEl = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const ctx = canvasEl.current.getContext("2d");
        /*const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);
        */ let lbl = [];
        let dt = [];
        let col = [];
        report.forEach(function(item, index) {
            lbl.push(item.label);
            dt.push(item.value);
            col.push(item.color);
        });
        const data = {
            labels: lbl,
            datasets: [
                {
                    label: "Thống k\xea trạng th\xe1i đơn h\xe0ng",
                    data: dt,
                    backgroundColor: col,
                    hoverOffset: 4
                }
            ]
        };
        const config = {
            type: "pie",
            data: data
        };
        const myLineChart = new (auto_default())(ctx, config);
        return function cleanup() {
            myLineChart.destroy();
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "html_management_col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "title_top",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "title21",
                    children: "Người gửi theo d\xf5i quản l\xfd"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "60%",
                    margin: "0 auto 30px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                    id: "myChart",
                    ref: canvasEl,
                    height: "40vh",
                    width: "80vw",
                    children: "chart"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "management_information ranle",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "information",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "title_item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title_info status",
                                    children: "Trạng th\xe1i"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title_info amount",
                                    children: "Số lượng"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title_info percent",
                                    children: "Phần trăm"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "",
                            children: report.map((dt)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "status_info status status_" + dt.status,
                                            children: dt.label
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "amount_info amount",
                                            children: dt.value
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "percent_info percent",
                                            children: [
                                                dt.percent,
                                                "%"
                                            ]
                                        })
                                    ]
                                }, dt.status))
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/api_gomdon.js + 1 modules
var api_gomdon = __webpack_require__(8893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./lib/ajax_gomdon.js
var ajax_gomdon = __webpack_require__(3314);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
;// CONCATENATED MODULE: ./pages/index.js













function Home({ banners , report  }) {
    const { data: session , status  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    const { 0: search , 1: setSearch  } = (0,external_react_.useState)("");
    /*const [delivery, setDelivery] = useState((status==="authenticated")?'/delivery':'/login');
    const [order, setOrder] = useState((status==="authenticated")?'/order':'/login');*/ let html = "";
    if (status === "authenticated") {
        let data_report = report.data;
        html = /*#__PURE__*/ jsx_runtime_.jsx(Report, {
            data: data_report
        });
    } else {
        html = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "login_content",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lbl_login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: "Đăng nhập để truy vấn đơn h\xe0ng"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "btn_login",
                        children: "Đăng nhập"
                    })
                })
            ]
        });
    }
    function searchOrder(e) {
        e.preventDefault();
        getOrder();
    }
    async function getOrder() {
        let res = await (0,ajax_gomdon/* detailOrdersDelivery */.DJ)(search);
        if (res.result === true) {
            let or = res.data;
            router.push({
                pathname: "/chi-tiet-don-hang",
                query: {
                    id: or.id
                }
            });
        } else {
            external_sweetalert2_default().fire("Kh\xf4ng t\xecm thấy th\xf4ng tin đơn h\xe0ng");
        }
    }
    let data_banners = banners.result === true ? banners.data : [];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "main",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contents",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "head_col",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "searching",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-qr-code-scan",
                                    viewBox: "0 0 16 16",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 9h2V8h-2v1Z"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "search-head",
                                    id: "search",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        action: "",
                                        onSubmit: (e)=>searchOrder(e),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "text",
                                                placeholder: "Tra cứu m\xe3 đơn h\xe0ng / m\xe3 vận đơn",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value)
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_responsive_carousel_namespaceObject.Carousel, {
                        id: "slidein-banner",
                        className: "bann_home owl-carousel owl-theme wow fadeInDown",
                        autoPlay: true,
                        infiniteLoop: true,
                        showArrows: false,
                        showStatus: false,
                        showIndicators: false,
                        showThumbs: false,
                        children: data_banners.map((dt)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: dt.image,
                                    alt: dt.name
                                })
                            }, dt.name))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "list_order",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/quan-ly-don-hang",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            title: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ordering",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "images",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/order_icon.png",
                                                            alt: "",
                                                            width: "100%",
                                                            height: "100%",
                                                            layout: "responsive",
                                                            objectFit: "contain",
                                                            priority: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "title16",
                                                        children: "Quản l\xfd đơn h\xe0ng"
                                                    })
                                                ]
                                            })
                                        })
                                    }, "quan-ly-don-hang"),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/gui-hang",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            title: "",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "ordering",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "images",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            src: "/images/delivery_icon.png",
                                                            alt: "",
                                                            width: "100%",
                                                            height: "100%",
                                                            layout: "responsive",
                                                            objectFit: "contain",
                                                            priority: true
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "title16",
                                                        children: "Gửi h\xe0ng"
                                                    })
                                                ]
                                            })
                                        })
                                    }, "gui-hang")
                                ]
                            }),
                            html
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
                ]
            })
        })
    });
};
async function getServerSideProps(context) {
    /* const session = await unstable_getServerSession(context.req, context.res, authOptions)
    console.log(session);*/ return {
        props: {
            banners: await (0,api_gomdon/* banners */.Ty)(),
            report: await (0,api_gomdon/* report */.Hj)(context.req, context.res)
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 271:
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664,675,595,314,893], () => (__webpack_exec__(9978)));
module.exports = __webpack_exports__;

})();