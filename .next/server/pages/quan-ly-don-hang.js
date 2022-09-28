"use strict";
(() => {
var exports = {};
exports.id = 296;
exports.ids = [296];
exports.modules = {

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loader-spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: "100%",
                height: "100vh",
                textAlign: "center",
                verticalAlign: "middle"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-loader-spinner'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                width: "200",
                color: "#ed1c2a"
            })
        })
    });
}


/***/ }),

/***/ 2217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuanLyDonHang)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3314);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);








function QuanLyDonHang() {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    if (status === "unauthenticated") {
        router.push("/login");
    }
    const { id  } = router.query;
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const dropdown = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { 0: orderStatus , 1: setOrderStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: htmlStatus , 1: setHtmlStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: lastPage , 1: setLastPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: filter , 1: setFilter  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        page: 1,
        type: 1,
        orderId: "",
        day: "week",
        status: 0
    });
    const { 0: total , 1: setTotal  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: orders , 1: setOrders  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: aryStatus , 1: setAryStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        "1": "Tạo mới",
        "2": "Hủy",
        "3": "Đ\xe3 lấy h\xe0ng",
        "4": "Đang vận chuyển",
        "5": "Đang giao h\xe0ng",
        "6": "Đang chuyển ho\xe0n",
        "7": "Đ\xe3 giao h\xe0ng",
        "8": "Đ\xe3 trả h\xe0ng",
        "9": "Kiện vấn đề",
        "10": "Lấy h\xe0ng thất bại"
    });
    const { 0: report , 1: setReport  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([
        {
            label: "Tạo mới",
            status: 1,
            color: "red"
        },
        {
            label: "Hủy",
            status: 2,
            color: "red"
        },
        {
            label: "Đ\xe3 lấy h\xe0ng",
            status: 3,
            color: "red"
        },
        {
            label: "Đang vận chuyển",
            status: 4,
            color: "red"
        },
        {
            label: "Đang giao h\xe0ng",
            status: 5,
            color: "red"
        },
        {
            label: "Đang chuyển ho\xe0n",
            status: 6,
            color: "red"
        },
        {
            label: "Đ\xe3 giao h\xe0ng",
            status: 7,
            color: "red"
        },
        {
            label: "Đ\xe3 trả h\xe0ng",
            status: 8,
            color: "red"
        },
        {
            label: "Kiện vấn đề",
            status: 9,
            color: "red"
        },
        {
            label: "Đơn lấy h\xe0ng thất bại",
            status: 10,
            color: "red"
        }, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(async ()=>{
        if (filter.page <= lastPage) {
            if (filter.page === 1) {
                setLoading(true);
            }
            let res = await getOrder();
            if (res.result === true) {
                setTotal(res.meta.total);
                if (res.meta.current_page === 1) {
                    setOrders(res.data);
                    setLoading(false);
                } else {
                    setOrders(orders.concat(res.data));
                }
                setLastPage(res.meta.last_page);
            }
        }
    }, [
        filter
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        // only add the event listener when the dropdown is opened
        if (!open) return;
        function handleClick(event) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setOpen(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return ()=>window.removeEventListener("click", handleClick);
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        window.addEventListener("scroll", loadMore);
    }, []);
    async function loadMore() {
        if (window.innerHeight + document.documentElement.scrollTop >= document.scrollingElement.scrollHeight) {
            let myEle = document.getElementById("load_more");
            if (myEle) {
                myEle.click();
            }
        //document.getElementById('load_more').click();
        }
    }
    async function changeId(search) {
        const delayDebounceFn = setTimeout(()=>{}, 500);
        return ()=>clearTimeout(delayDebounceFn);
    }
    function getFirstDayOfWeek(d) {
        const date = d ? new Date(d) : new Date();
        const day = date.getDay(); // 👉️ get day of week
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
    function getFirstDayOfMonth(d) {
        const date = d ? new Date(d) : new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    function getLastDayOfMonth(d) {
        const date = d ? new Date(d) : new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    async function getOrder() {
        let data = {
            page: filter.page,
            type: filter.type === 1 ? "1,3" : "2",
            limit: 30
        };
        if (filter.orderId !== "") {
            data.id = filter.orderId;
        }
        if (filter.status !== 0) {
            data.status = filter.status;
        }
        if (filter.day === "day") {
            data.start_time = parseInt(new Date().setHours(0, 0, 0, 0) / 1000);
            data.end_time = data.start_time + 86400 //parseInt(((new Date()).setHours(0, 0, 0, 0))/1000)
            ;
        }
        if (filter.day === "week") {
            data.end_time = parseInt(new Date() / 1000);
            data.start_time = data.end_time - 7 * 86400;
        }
        if (filter.day === "month") {
            data.start_time = parseInt(getFirstDayOfMonth().setHours(0, 0, 0, 0) / 1000);
            data.end_time = parseInt(getLastDayOfMonth().setHours(0, 0, 0, 0) / 1000) + 86400;
        }
        let res = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_4__/* .ordersDelivery */ .hG)(data);
        return res;
    }
    function format_date(ti) {
        let t = new Date(ti);
        let date = ("0" + t.getDate()).slice(-2);
        let month = ("0" + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();
        let hours = ("0" + t.getHours()).slice(-2);
        let minutes = ("0" + t.getMinutes()).slice(-2);
        let seconds = ("0" + t.getSeconds()).slice(-2);
        return `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    }
    let html_content = [];
    if (orders.length > 0) {
        orders.forEach(function(item, index) {
            html_content.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: "/chi-tiet-don-hang?id=" + item.id,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "",
                    title: "",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "item_single",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "new new_" + item.status,
                                children: aryStatus[item.status]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                className: "title16",
                                children: [
                                    "M\xe3 vận đơn: ",
                                    item.partner_code
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "tp_to",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "honest",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: item.source_name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "city",
                                                children: item.source_province
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "----->"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "honest",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "name",
                                                children: item.dest_name
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "city",
                                                children: item.dest_province
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "title15 bold",
                                children: [
                                    item.source_district,
                                    " [",
                                    item.source_name,
                                    "], Được gửi đến [",
                                    item.dest_name,
                                    "]"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "title12",
                                children: [
                                    "Thời gian tạo đơn ",
                                    format_date(item.created_at)
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "title12",
                                children: [
                                    "Thời gian cập nhật ",
                                    format_date(item.updated_at)
                                ]
                            })
                        ]
                    })
                })
            }, item.id));
        });
    } else {
        html_content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                textAlign: "center"
            },
            children: "Danh s\xe1ch trống"
        });
    }
    if (loading === true) {
        html_content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    }
    let html_status = [];
    Object.keys(aryStatus).forEach(function(key) {
        html_status.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            onClick: ()=>setOrderStatus(orderStatus === key ? 0 : key),
            className: orderStatus === key ? "active" : "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item-dm",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "",
                        children: aryStatus[key]
                    })
                })
            })
        }, key));
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let html_status = [];
        Object.keys(aryStatus).forEach(function(key) {
            html_status.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "Dashboard",
                            name: "clothing",
                            type: "radio",
                            value: key,
                            checked: orderStatus === key,
                            onChange: ()=>{
                                setOrderStatus(key);
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "item-dm",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "",
                                children: aryStatus[key]
                            })
                        })
                    ]
                })
            }, key));
        });
        setHtmlStatus(html_status);
    }, [
        orderStatus
    ]);
    /*aryStatus.forEach(function (item,index){
        console.log(item,index)
    })*/ return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "main",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contents",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "head_col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "head_title",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "title18",
                                        children: "Quản l\xfd đơn h\xe0ng"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "profil_col3_locsanpham",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "fill-wrapper rotate-menu",
                                                onClick: ()=>setOpen(!open),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "filter",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "26",
                                                        height: "26",
                                                        fill: "currentColor",
                                                        className: "bi bi-funnel",
                                                        viewBox: "0 0 16 16",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                ref: dropdown,
                                                className: open ? "main_fill open" : "main_fill",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "tabel",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "list-danhmuc",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "label wow fadeInLeft",
                                                            "data-wow-delay": "0.3s",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "danhmuc-sp active",
                                                                    htmlFor: "show_01",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "item_title",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                            className: "",
                                                                            children: "Trạng th\xe1i"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "item_fields",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                            className: "extra",
                                                                            children: html_status
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "item-btn",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: "butt",
                                                                                    onClick: ()=>{
                                                                                        setOpen(false);
                                                                                        setOrderStatus(0);
                                                                                        setFilter((existingValues)=>({
                                                                                                ...existingValues,
                                                                                                status: 0,
                                                                                                page: 1
                                                                                            }));
                                                                                    },
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "Đặt lại"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                    className: "butt active",
                                                                                    onClick: ()=>{
                                                                                        setOpen(false);
                                                                                        setFilter((existingValues)=>({
                                                                                                ...existingValues,
                                                                                                status: orderStatus,
                                                                                                page: 1
                                                                                            }));
                                                                                    },
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: "X\xe1c nhận"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pws-list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            setFilter((existingValues)=>({
                                                    ...existingValues,
                                                    type: 1,
                                                    page: 1
                                                }));
                                        },
                                        title: "",
                                        className: filter.type === 1 ? "title15 pws-title active" : "title15 pws-title",
                                        children: "H\xe0ng gửi"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>{
                                            setFilter((existingValues)=>({
                                                    ...existingValues,
                                                    type: 2,
                                                    page: 1
                                                }));
                                        },
                                        title: "",
                                        className: filter.type === 2 ? "title15 pws-title active" : "title15 pws-title",
                                        children: "H\xe0ng nhận"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "content",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ranle",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item_search",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "search",
                                            id: "search",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                onSubmit: (e)=>{
                                                    e.preventDefault();
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "16",
                                                        height: "16",
                                                        fill: "currentColor",
                                                        className: "bi bi-qr-code-scan",
                                                        viewBox: "0 0 16 16",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M12 9h2V8h-2v1Z"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        id: "txt_search",
                                                        onChange: (e)=>{
                                                            setFilter((existingValues)=>({
                                                                    ...existingValues,
                                                                    orderId: e.target.value,
                                                                    page: 1
                                                                }));
                                                        },
                                                        value: filter.orderId,
                                                        //defaultValue={filter.orderId}
                                                        placeholder: "Tra cứu m\xe3 đơn h\xe0ng / m\xe3 vận đơn"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "extra",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "Dashboard",
                                                                name: "clothing",
                                                                type: "radio",
                                                                value: "day",
                                                                checked: filter.day === "day",
                                                                onChange: ()=>{
                                                                    setFilter((existingValues)=>({
                                                                            ...existingValues,
                                                                            day: "day",
                                                                            page: 1
                                                                        }));
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "",
                                                                    children: "H\xf4m nay"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "Dashboard",
                                                                name: "clothing",
                                                                type: "radio",
                                                                value: "week",
                                                                checked: filter.day === "week",
                                                                onChange: ()=>{
                                                                    setFilter((existingValues)=>({
                                                                            ...existingValues,
                                                                            day: "week",
                                                                            page: 1
                                                                        }));
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "",
                                                                    children: "Tuần gần nhất"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "Dashboard",
                                                                name: "clothing",
                                                                type: "radio",
                                                                value: "month",
                                                                checked: filter.day === "month",
                                                                onChange: ()=>{
                                                                    setFilter((existingValues)=>({
                                                                            ...existingValues,
                                                                            day: "month",
                                                                            page: 1
                                                                        }));
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "",
                                                                    children: "Th\xe1ng gần nhất"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pro_col9_sanpham",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list_single_code",
                                        children: [
                                            html_content,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    "display": "none"
                                                },
                                                id: "load_more",
                                                onClick: ()=>{
                                                    setFilter((existingValues)=>({
                                                            ...existingValues,
                                                            page: filter.page + 1
                                                        }));
                                                },
                                                children: "new page"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "Group_cancel",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "btn_print",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                href: "/in-don-hang",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "butt active",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "In số lượng lớn"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,551], () => (__webpack_exec__(2217)));
module.exports = __webpack_exports__;

})();