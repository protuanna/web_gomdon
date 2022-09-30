"use strict";
(() => {
var exports = {};
exports.id = 710;
exports.ids = [710];
exports.modules = {

/***/ 9735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CapNhatDonHang),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4563);
/* harmony import */ var _lib_api_gomdon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8893);
/* harmony import */ var _lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3314);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function CapNhatDonHang({ order  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    if (status === "unauthenticated") {
        router.push("/login");
    }
    const { 0: detail , 1: setDetail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(order.data);
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: modalIsOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: htmlProvinceSend , 1: setHtmlProvinceSend  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: activeProvinceSend , 1: setActiveProvinceSend  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1) //1 : province; 2 : district; 3 : ward
    ;
    const { 0: provinceId , 1: setProvinceId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: sourceName , 1: setSourceName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_name);
    const { 0: errorSourceName , 1: setErrorSourceName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: sourcePhone , 1: setSourcePhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_phone);
    const { 0: errorSourcePhone , 1: setErrorSourcePhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: sourceAddress , 1: setSourceAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_address);
    const { 0: errorSourceAddress , 1: setErrorSourceAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: sourceProvince , 1: setSourceProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_province);
    const { 0: errorSourceProvince , 1: setErrorSourceProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: sourceDistrict , 1: setSourceDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_district);
    const { 0: sourceWard , 1: setSourceWard  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.source_ward);
    const { 0: destName , 1: setDestName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_name);
    const { 0: errorDestName , 1: setErrorDestName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: destPhone , 1: setDestPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_phone);
    const { 0: errorDestPhone , 1: setErrorDestPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: destAddress , 1: setDestAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_address);
    const { 0: errorDestAddress , 1: setErrorDestAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: destProvince , 1: setDestProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_province);
    const { 0: errorDestProvince , 1: setErrorDestProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: destDistrict , 1: setDestDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_district);
    const { 0: destWard , 1: setDestWard  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.dest_ward);
    const { 0: productPrice , 1: setProductPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.product_price);
    const { 0: collectAmount , 1: setCollectAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(detail.collect_amount);
    const { 0: weight , 1: setWeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((detail.weight / 1000).toFixed(2));
    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((detail.height / 10).toFixed(0));
    const { 0: length , 1: setLength  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((detail.length / 10).toFixed(0));
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((detail.width / 10).toFixed(0));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorSourceName("");
    }, [
        sourceName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorSourcePhone("");
    }, [
        sourcePhone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorSourceProvince("");
    }, [
        sourceProvince,
        sourceWard,
        sourceDistrict
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorSourceAddress("");
    }, [
        sourceAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorDestName("");
    }, [
        destName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorDestPhone("");
    }, [
        destPhone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorDestProvince("");
    }, [
        destProvince,
        destDistrict,
        destWard
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setErrorDestAddress("");
    }, [
        destAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (open === "openSelectProvinceSend" || open === "openSelectProvinceContactSend" || open === "openSelectProvinceReceive") {
            openProvinceSend();
        }
    }, [
        open
    ]);
    function activeTabProvinceSend(tab) {
        if (activeProvinceSend === tab) {
            return "col-lv1 active";
        } else {
            return "col-lv1";
        }
    }
    function changeTabProvinceSend(tab) {
        if (tab === 1 && activeProvinceSend !== 1) {
            openProvinceSend();
        }
        if (tab === 2 && activeProvinceSend === 3) {
            openDistrictSend(provinceId);
        }
    }
    function openSelectProvinceSend() {
        if (open === "openSelectProvinceSend") {
            openProvinceSend();
        } else {
            setOpen("openSelectProvinceSend");
        }
    }
    function openSelectProvinceReceive() {
        if (open === "openSelectProvinceReceive") {
            openProvinceSend();
        } else {
            setOpen("openSelectProvinceReceive");
        }
    }
    async function openProvinceSend() {
        setIsOpen(3);
        setHtmlProvinceSend([]);
        setActiveProvinceSend(1);
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__/* .provinces */ .JI)();
        if (data.result === true) {
            let provinces1 = data.data;
            let html_province = [];
            provinces1.forEach(function(item, index) {
                html_province.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#!",
                    onClick: ()=>selectProvinceSend(item),
                    title: "",
                    className: "address_single",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: item.name
                    })
                }, index));
            });
            setHtmlProvinceSend(html_province);
        }
    }
    function selectProvinceSend(province) {
        if (open === "openSelectProvinceSend") {
            setSourceProvince(province.name);
            setProvinceId(province.id);
            setSourceDistrict("");
            setSourceWard("");
        }
        if (open === "openSelectProvinceContactSend") {
            setContactProvince(province.name);
            setContactProvinceId(province.id);
            setProvinceId(province.id);
            setContactDistrict("");
            setContactDistrictId(0);
            setContactWard("");
            setContactWardId(0);
        }
        if (open === "openSelectProvinceReceive") {
            setDestProvince(province.name);
            setProvinceId(province.id);
            setDestDistrict("");
            setDestWard("");
        }
        openDistrictSend(province.id);
    }
    async function openDistrictSend(province_id) {
        setHtmlProvinceSend([]);
        setActiveProvinceSend(2);
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__/* .districts */ .$U)(province_id);
        if (data.result === true) {
            let html_province = [];
            let districts1 = data.data;
            districts1.forEach(function(item, index) {
                html_province.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#!",
                    onClick: ()=>selectDistrictSend(item),
                    title: "",
                    className: "address_single",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: item.name
                    })
                }, index));
            });
            setHtmlProvinceSend(html_province);
        }
    }
    function selectDistrictSend(district) {
        if (open === "openSelectProvinceSend") {
            setSourceDistrict(district.name);
            setSourceWard("");
        }
        if (open === "openSelectProvinceContactSend") {
            setContactDistrict(district.name);
            setContactDistrictId(district.id);
            setContactWard("");
            setContactWardId(0);
        }
        if (open === "openSelectProvinceReceive") {
            setDestDistrict(district.name);
            setDestWard("");
        }
        openWardSend(district.id);
    }
    async function openWardSend(district_id) {
        setHtmlProvinceSend([]);
        setActiveProvinceSend(3);
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__/* .wards */ .AK)(district_id);
        if (data.result === true) {
            let html_province = [];
            let wards1 = data.data;
            wards1.forEach(function(item, index) {
                html_province.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#!",
                    onClick: ()=>selectWardSend(item),
                    title: "",
                    className: "address_single",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: item.name
                    })
                }, index));
            });
            setHtmlProvinceSend(html_province);
        }
    }
    function selectWardSend(ward) {
        if (open === "openSelectProvinceSend") {
            setSourceWard(ward.name);
            setIsOpen(0);
        }
        if (open === "openSelectProvinceContactSend") {
            setContactWard(ward.name);
            setContactWardId(ward.id);
            setIsOpen(2);
        }
        if (open === "openSelectProvinceReceive") {
            setDestWard(ward.name);
            setIsOpen(0);
        }
    }
    async function updateOrder() {
        if (disabled === false) {
            setDisabled(true);
            let data = {
                collect_amount: collectAmount ? collectAmount : 0,
                weight: weight ? weight * 1000 : 0,
                height: height ? height * 10 : 0,
                length: length ? length * 10 : 0,
                width: width ? width * 10 : 0,
                service_id: 12491
            };
            let res = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__/* .update_order */ .G0)(detail.id, data);
            if (res.result === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Cập nhật đơn h\xe0ng th\xe0nh c\xf4ng");
            } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire(res.message);
            }
            setDisabled(false);
        }
    }
    async function updateAddress(type) {
        if (disabled === false) {
            setDisabled(true);
            let data = null;
            let error = 1;
            if (type === 1) {
                error = 0;
                if (sourceName.trim() === "") {
                    error = 1;
                    setErrorSourceName("Vui l\xf2ng nhập t\xean người gửi");
                }
                if (sourcePhone.trim() === "") {
                    error = 1;
                    setErrorSourcePhone("Vui l\xf2ng nhập số điện thoại người gửi");
                }
                if (sourceProvince.trim() === "" || sourceDistrict.trim() === "" || sourceWard.trim() === "") {
                    error = 1;
                    setErrorSourceProvince("Vui l\xf2ng nhập đầy đủ địa chỉ");
                }
                if (sourceAddress.trim() === "") {
                    error = 1;
                    setErrorSourceAddress("Vui l\xf2ng nhập chi tiết địa chỉ");
                }
                data = {
                    name: sourceName,
                    phone: sourcePhone,
                    address: sourceAddress,
                    province: sourceProvince,
                    district: sourceDistrict,
                    ward: sourceWard,
                    address_type: 1
                };
            }
            if (type === 2) {
                error = 0;
                if (destName.trim() === "") {
                    error = 1;
                    setErrorDestName("Vui l\xf2ng nhập t\xean");
                }
                if (destPhone.trim() === "") {
                    error = 1;
                    setErrorDestPhone("Vui l\xf2ng nhập số điện thoại");
                }
                if (destProvince.trim() === "" || destDistrict.trim() === "" || destWard.trim() === "") {
                    error = 1;
                    setErrorDestProvince("Vui l\xf2ng nhập đầy đủ địa chỉ");
                }
                if (destAddress.trim() === "") {
                    error = 1;
                    setErrorDestAddress("Vui l\xf2ng nhập chi tiết địa chỉ");
                }
                data = {
                    name: destName,
                    phone: destPhone,
                    address: destAddress,
                    province: destProvince,
                    district: destDistrict,
                    ward: destWard,
                    address_type: 2
                };
            }
            if (error === 0) {
                let res = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_9__/* .update_address_order */ .Y7)(detail.id, data);
                if (res.result === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire("Cập nhật th\xf4ng tin địa chỉ th\xe0nh c\xf4ng");
                } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default().fire(res.message);
                }
            }
            setDisabled(false);
        }
    }
    function formatMoney(number) {
        if (number === "" || number === 0) {
            return "";
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    function replaceString(value, max = 0) {
        value = value.replace(/\D/g, "");
        value = value.replaceAll(".", "");
        if (parseInt(value) === 0) {
            value = "";
        }
        if (value !== "" && max > 0 && max < value) {
            value = max;
        }
        return value;
    }
    if (detail && detail.status === 1) {
        if (modalIsOpen === 0) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "main",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contents",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "head_col",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "head_title",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            onClick: ()=>router.back(),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faAngleLeft
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "title18",
                                            children: "Cập nhật đơn h\xe0ng"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "html_add_address",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ranle update_int",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "title20 title_int",
                                                children: "Người gửi"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                action: "",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Họ t\xean ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: sourceName,
                                                                onChange: (e)=>setSourceName(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorSourceName
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Số điện thoại ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: sourcePhone,
                                                                onChange: (e)=>setSourcePhone(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorSourcePhone
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Khu vực chỉ định ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: (sourceProvince || sourceDistrict || sourceWard) && sourceProvince + " " + sourceDistrict + " " + sourceWard,
                                                                onChange: (e)=>e.preventDefault(),
                                                                onClick: ()=>openSelectProvinceSend()
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorSourceProvince
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Địa chỉ chi tiết",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: sourceAddress,
                                                                onChange: (e)=>setSourceAddress(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorSourceAddress
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: disabled ? "butt active disabled" : "butt active",
                                                onClick: ()=>updateAddress(1),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Cập nhật người gửi"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ranle update_int",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "title20 title_int",
                                                children: "Người nhận"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                action: "",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Họ t\xean ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: destName,
                                                                onChange: (e)=>setDestName(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorDestName
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Số điện thoại ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: destPhone,
                                                                onChange: (e)=>setDestPhone(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorDestPhone
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Khu vực chỉ định ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: (destProvince || destDistrict || destWard) && destProvince + " " + destDistrict + " " + destWard,
                                                                onChange: (e)=>e.preventDefault(),
                                                                onClick: ()=>openSelectProvinceReceive()
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorDestProvince
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "form-field",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                                className: "title16 title_form",
                                                                children: [
                                                                    "Địa chỉ chi tiết",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: ":"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: destAddress,
                                                                onChange: (e)=>setDestAddress(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "label_error",
                                                        children: errorDestAddress
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: disabled ? "butt active disabled" : "butt active",
                                                onClick: ()=>updateAddress(2),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Cập nhật người nhận"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ranle int_fact",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Số đặt h\xe0ng"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: detail.id
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Thời gian tạo đơn"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex-item",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "27/09/2022"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "10:31:37"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Loại kiện h\xe0ng phục vụ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "title16",
                                                            children: [
                                                                "Bảo hiểm h\xe0ng h\xf3a ",
                                                                detail.product_price,
                                                                " đ"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field form-wave",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Số tiền COD",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                /*value={}*/ placeholder: "1 - 5.000.000",
                                                                value: formatMoney(collectAmount, 0),
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setCollectAmount(replaceString(e.target.value, 5000000))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "title16 ",
                                                                children: " đ"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Phương thức lấy h\xe0ng"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: detail.pickup_type === 2 ? "Bưu t\xe1 tới lấy" : "Tới bưu cục gửi"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Phương thức vận chuyển"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Giao h\xe0ng tiết kiệm"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field form-wave",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Trọng lượng",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "number",
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                value: weight,
                                                                placeholder: "0.01 - 80",
                                                                min: 0.01,
                                                                max: 80,
                                                                onChange: (e)=>setWeight(e.target.value < 80 ? e.target.value : 80)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "title16 ",
                                                                children: " kg"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field form-wave",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "D\xe0i",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                value: length,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setLength(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "title16 ",
                                                                children: " cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field form-wave",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Rộng",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                value: width,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setWidth(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "title16 ",
                                                                children: " cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field form-wave",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Cao",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                value: height,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setHeight(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "title16 ",
                                                                children: " cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Ch\xfa th\xedch"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: detail.note
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Ph\xed thu hộ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "title16",
                                                            children: [
                                                                formatMoney(detail.customer_cod_fee),
                                                                " đ"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Ph\xed bảo hiểm"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "title16",
                                                            children: [
                                                                formatMoney(detail.customer_insurance_fee),
                                                                " đ"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Ph\xed vận chuyển"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "title16",
                                                            children: [
                                                                formatMoney(detail.customer_delivery_fee),
                                                                " đ"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "title16",
                                                            children: "Tổng cước ph\xed vận chuyển"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "item-field",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                            className: "title16",
                                                            children: [
                                                                formatMoney(detail.customer_total_fee),
                                                                " đ"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: disabled ? "butt active disabled" : "butt active",
                                                onClick: ()=>updateOrder(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Cập nhật đơn h\xe0ng"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            });
        }
        if (modalIsOpen === 3) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                onClick: ()=>setIsOpen(0),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faAngleLeft
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "title18",
                                                children: "Lựa chọn địa chỉ"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "link_list",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                title: "",
                                                className: activeTabProvinceSend(1),
                                                onClick: ()=>changeTabProvinceSend(1),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "title16",
                                                    children: "TỈNH/TH\xc0NH"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                title: "",
                                                className: activeTabProvinceSend(2),
                                                onClick: ()=>changeTabProvinceSend(2),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "title16",
                                                    children: "QUẬN/HUYỆN"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                title: "",
                                                className: activeTabProvinceSend(3),
                                                onClick: ()=>changeTabProvinceSend(3),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "title16",
                                                    children: "PHƯỜNG/X\xc3"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "html_guest_col12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "list_address",
                                    children: htmlProvinceSend
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        ]
                    })
                })
            });
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Kh\xf4ng t\xecm thấy đơn h\xe0ng"
    });
};
async function getServerSideProps(context) {
    /* const session = await unstable_getServerSession(context.req, context.res, authOptions)
     console.log(session);*/ return {
        props: {
            order: await (0,_lib_api_gomdon__WEBPACK_IMPORTED_MODULE_8__/* .order_detail */ .zQ)(context.req, context.res, context.query.id)
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

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
var __webpack_exports__ = __webpack_require__.X(0, [377,952,964,664,595,314,893], () => (__webpack_exec__(9735)));
module.exports = __webpack_exports__;

})();