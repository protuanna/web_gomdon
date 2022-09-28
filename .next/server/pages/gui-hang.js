"use strict";
(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
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

/***/ 7468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GuiHang)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4563);
/* harmony import */ var _lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3314);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function GuiHang() {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    if (status === "unauthenticated") {
        router.push("/login");
    }
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: step , 1: setStep  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: totalAddressSend , 1: setTotalAddressSend  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: htmlAddressSend , 1: setHtmlAddressSend  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: htmlProvinceSend , 1: setHtmlProvinceSend  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const { 0: activeProvinceSend , 1: setActiveProvinceSend  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1) //1 : province; 2 : district; 3 : ward
    ;
    const { 0: modalIsOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0) // 1 : modal address ; 2 : modal create address ; 3 : modal province
    ;
    const { 0: action , 1: setAction  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: policy , 1: setPolicy  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: serviceId , 1: setServiceId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12491);
    const { 0: pickupType , 1: setPickupType  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2);
    const { 0: productName , 1: setProductName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorProductName , 1: setErrorProductName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: productNumber , 1: setProductNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const { 0: productPrice , 1: setProductPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: collectAmount , 1: setCollectAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: weight , 1: setWeight  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: height , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: length , 1: setLength  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: fee , 1: setFee  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: note , 1: setNote  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: sourceName , 1: setSourceName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorSourceName , 1: setErrorSourceName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sourcePhone , 1: setSourcePhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorSourcePhone , 1: setErrorSourcePhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sourceAddress , 1: setSourceAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorSourceAddress , 1: setErrorSourceAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sourceProvince , 1: setSourceProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorSourceProvince , 1: setErrorSourceProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: provinceId , 1: setProvinceId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: sourceDistrict , 1: setSourceDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: sourceWard , 1: setSourceWard  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destName , 1: setDestName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorDestName , 1: setErrorDestName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destPhone , 1: setDestPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorDestPhone , 1: setErrorDestPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destAddress , 1: setDestAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorDestAddress , 1: setErrorDestAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destProvince , 1: setDestProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorDestProvince , 1: setErrorDestProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destDistrict , 1: setDestDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: destWard , 1: setDestWard  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactName , 1: setContactName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorContactName , 1: setErrorContactName  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactPhone , 1: setContactPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorContactPhone , 1: setErrorContactPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactAddress , 1: setContactAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorContactAddress , 1: setErrorContactAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactProvinceId , 1: setContactProvinceId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: contactProvince , 1: setContactProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: errorContactProvince , 1: setErrorContactProvince  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactDistrictId , 1: setContactDistrictId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: contactDistrict , 1: setContactDistrict  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactWardId , 1: setContactWardId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const { 0: contactWard , 1: setContactWard  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: contactDefault , 1: setContactDefault  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorSourceName("");
    }, [
        sourceName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorSourcePhone("");
    }, [
        sourcePhone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorSourceProvince("");
    }, [
        sourceProvince,
        sourceWard,
        sourceDistrict
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorSourceAddress("");
    }, [
        sourceAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorDestName("");
    }, [
        destName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorDestPhone("");
    }, [
        destPhone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorDestProvince("");
    }, [
        destProvince,
        destDistrict,
        destWard
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorDestAddress("");
    }, [
        destAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorContactName("");
    }, [
        contactName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorContactPhone("");
    }, [
        contactPhone
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorContactProvince("");
    }, [
        contactProvince,
        contactDistrict,
        contactWard
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorContactAddress("");
    }, [
        contactAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setErrorProductName("");
    }, [
        productName
    ]);
    let title = "";
    switch(type){
        case 1:
            title = "Người gửi";
            break;
        case 2:
            title = "Th\xf4ng tin người mua";
            break;
        case 3:
            title = "Th\xf4ng tin shop";
            break;
    }
    let title_two = "";
    switch(type){
        case 1:
            title_two = "Người nhận";
            break;
        case 2:
            title_two = "Th\xf4ng tin người mua";
            break;
        case 3:
            title_two = "Th\xf4ng tin shop";
            break;
    }
    /*useEffect(() => {
        changeAddress('')
    }, [goStep]);*/ /*function changeAddressReceive(){

        changeAddress('')
    }*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (action === "openAddressSend" || action === "openAddressReceive") {
            changeAddressSend();
        }
    }, [
        action
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (open === "openSelectProvinceSend" || open === "openSelectProvinceContactSend" || open === "openSelectProvinceReceive") {
            openProvinceSend();
        }
    }, [
        open
    ]);
    function openAddressSend() {
        if (action === "openAddressSend") {
            changeAddressSend();
        } else {
            setAction("openAddressSend");
        }
    }
    function openAddressReceive() {
        if (action === "openAddressReceive") {
            changeAddressSend();
        } else {
            setAction("openAddressReceive");
        }
    }
    function changeAddressSend() {
        loadAddressSend("");
        setIsOpen(1);
    }
    async function loadAddressSend(search) {
        setHtmlAddressSend(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_loading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}));
        setTotalAddressSend("");
        const delayDebounceFn = setTimeout(()=>{
            renderAddressSend(search);
        }, 500);
        return ()=>clearTimeout(delayDebounceFn);
    }
    async function renderAddressSend(search) {
        let total = 0;
        let html_address = [];
        let contact_type = (type === 1 || type === 3) && action === "openAddressSend" || type === 2 && action === "openAddressReceive" ? "send" : "receive";
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .address */ .Lk)(contact_type, search, 1);
        if (data.result === true) {
            let address1 = data.data;
            total = data.meta.total;
            address1.forEach(function(item, index) {
                html_address.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "#!",
                    onClick: ()=>selectAddressSend(item),
                    title: "",
                    className: "guest_single",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "guesting",
                        children: [
                            item.set_default === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "icon-pushpin",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faThumbTack
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex_guest",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-guest name title16",
                                        children: item.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-guest phone title16",
                                        children: item.phone
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                className: "title16",
                                children: item.address
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                className: "title16",
                                children: [
                                    item.province_name + " ",
                                    item.district_name + " ",
                                    item.ward_name
                                ]
                            })
                        ]
                    })
                }, index));
            });
        }
        setHtmlAddressSend(html_address);
        setTotalAddressSend(total);
    //setIsOpen(1)
    }
    function selectAddressSend(item) {
        if (action === "openAddressSend") {
            setSourceName(item.name);
            setSourcePhone(item.phone);
            setSourceAddress(item.address);
            setSourceProvince(item.province_name);
            setSourceDistrict(item.district_name);
            setSourceWard(item.ward_name);
        }
        if (action === "openAddressReceive") {
            setDestName(item.name);
            setDestPhone(item.phone);
            setDestAddress(item.address);
            setDestProvince(item.province_name);
            setDestDistrict(item.district_name);
            setDestWard(item.ward_name);
        }
        setIsOpen(0);
    }
    function openNewContactSend() {
        setIsOpen(2);
        setContactName("");
        setErrorContactName("");
        setContactPhone("");
        setErrorContactPhone("");
        setContactProvince("");
        setContactProvinceId(0);
        setErrorContactProvince("");
        setContactDistrict("");
        setContactDistrictId(0);
        setContactWard("");
        setContactWardId(0);
        setContactAddress("");
        setErrorContactAddress("");
    }
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
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .provinces */ .JI)();
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
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .districts */ .$U)(province_id);
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
        let data = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .wards */ .AK)(district_id);
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
    async function openProvinceContact() {
        if (open === "openSelectProvinceContactSend") {
            openProvinceSend();
        } else {
            setOpen("openSelectProvinceContactSend");
        }
    }
    async function addNewContactSend() {
        if (disabled === false) {
            setDisabled(true);
            let error = 0;
            if (contactName.trim() === "") {
                error = 1;
                setErrorContactName("Vui l\xf2ng nhập t\xean");
            }
            if (contactPhone.trim() === "") {
                error = 1;
                setErrorContactPhone("Vui l\xf2ng nhập số điện thoại");
            }
            if (contactProvince.trim() === "" || contactDistrict.trim() === "" || contactWard.trim() === "") {
                error = 1;
                setErrorContactProvince("Vui l\xf2ng nhập đầy đủ địa chỉ");
            }
            if (contactAddress.trim() === "") {
                error = 1;
                setErrorContactAddress("Vui l\xf2ng nhập chi tiết địa chỉ");
            }
            if (error === 0) {
                let contact_type = (type === 1 || type === 3) && action === "openAddressSend" || type === 2 && action === "openAddressReceive" ? "send" : "receive";
                let data = {
                    name: contactName,
                    phone: contactPhone,
                    address: contactAddress,
                    province_id: contactProvinceId,
                    district_id: contactDistrictId,
                    ward_id: contactWardId,
                    type: contact_type,
                    set_default: contactDefault
                };
                let result = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .createContact */ .rE)(data);
                if (result.result === true) {
                    if (action === "openAddressSend") {
                        openAddressSend();
                    }
                    if (action === "openAddressReceive") {
                        openAddressReceive();
                    }
                }
            }
            setDisabled(false);
        }
    }
    function nextStepOne() {
        let error = 0;
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
        if (error === 0) {
            setStep(2);
        }
    }
    function nextStepTwo() {
        let error = 0;
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
        if (error === 0) {
            setStep(3);
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
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        loadFeeShop();
    }, [
        productPrice,
        collectAmount,
        weight,
        height,
        width,
        length
    ]);
    function loadFeeShop() {
        setFee("-");
        const delayFeeFn = setTimeout(()=>{
            getFeeShop();
        }, 500);
        return ()=>clearTimeout(delayFeeFn);
    }
    async function getFeeShop() {
        let data = {
            collect_amount: collectAmount ? collectAmount : 0,
            product_price: productPrice ? productPrice : 0,
            weight: weight ? weight * 1000 : 0,
            height: height ? height * 10 : 0,
            length: length ? length * 10 : 0,
            width: width ? width * 10 : 0
        };
        console.log(data);
        let res = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .feeShop */ .aU)(data);
        if (res.result === true) {
            setFee(res.data);
        } else {
            setFee("-");
        }
    }
    async function createOrder() {
        console.log(disabled);
        if (disabled === false) {
            setDisabled(true);
            let error = 0;
            if (productName.trim() === "") {
                error = 1;
                setErrorProductName("Vui l\xf2ng nhập t\xean sản phẩm");
            }
            if (!policy) {
                alert("Vui l\xf2ng chấp nhận điều khoản của ch\xfang t\xf4i");
                error = 1;
            }
            if (error === 0) {
                let data = {
                    product_name: productName,
                    product_number: productNumber,
                    product_price: productPrice ? productPrice : 0,
                    collect_amount: collectAmount ? collectAmount : 0,
                    weight: weight ? weight * 1000 : 0,
                    height: height ? height * 10 : 0,
                    length: length ? length * 10 : 0,
                    width: width ? width * 10 : 0,
                    type: type,
                    pickup_type: pickupType,
                    service_id: serviceId,
                    note: note,
                    source_name: sourceName,
                    source_phone: sourcePhone,
                    source_province: sourceProvince,
                    source_district: sourceDistrict,
                    source_ward: sourceWard,
                    source_address: sourceAddress,
                    dest_name: destName,
                    dest_phone: destPhone,
                    dest_province: destProvince,
                    dest_district: destDistrict,
                    dest_ward: destWard,
                    dest_address: destAddress
                };
                let res = await (0,_lib_ajax_gomdon__WEBPACK_IMPORTED_MODULE_6__/* .createOrderDelivery */ .PC)(data);
                if (res.result === true) {
                    let or = res.data;
                    router.push({
                        pathname: "/gui-hang-thanh-cong",
                        query: {
                            id: or.id
                        }
                    });
                } else {
                    alert(res.message);
                    setDisabled(false);
                }
            } else {
                setDisabled(false);
            }
        }
    }
    let content = "";
    let content_sum = "";
    if (step === 1) {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ranle",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pro_col9_shipping",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "html_shipping_col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "titling",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sender",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "16",
                                                height: "16",
                                                fill: "currentColor",
                                                className: "bi bi-geo-alt-fill",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title16",
                                                children: title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "steps",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "title16",
                                                children: [
                                                    "Bước ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title18",
                                                        children: "1"
                                                    }),
                                                    " /3"
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                onClick: ()=>openAddressSend(),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAddressCard
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                action: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-field",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: sourcePhone,
                                            placeholder: "Số điện thoại *",
                                            onChange: (e)=>setSourcePhone(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label_error",
                                        children: errorSourcePhone
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-field",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: sourceName,
                                            placeholder: "Họ v\xe0 t\xean *",
                                            onChange: (e)=>setSourceName(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label_error",
                                        children: errorSourceName
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-field",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: (sourceProvince || sourceDistrict || sourceWard) && sourceProvince + " " + sourceDistrict + " " + sourceWard,
                                            onChange: (e)=>e.preventDefault(),
                                            placeholder: "Địa chỉ *",
                                            onClick: ()=>openSelectProvinceSend()
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label_error",
                                        children: errorSourceProvince
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-field",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            value: sourceAddress,
                                            placeholder: "Chi tiết địa chỉ *",
                                            onChange: (e)=>setSourceAddress(e.target.value)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "label_error",
                                        children: errorSourceAddress
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#!",
                                title: "",
                                className: "butt active",
                                onClick: ()=>nextStepOne(),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Tiếp tục"
                                })
                            })
                        ]
                    })
                })
            })
        });
    }
    if (step === 2) {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ranle",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pro_col9_shipping",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "destination",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "des",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-geo-alt-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16",
                                            children: "Đ\xedch"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "information",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setStep(1),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-top",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text name",
                                                    children: sourceName
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text phone",
                                                    children: sourcePhone
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location_details",
                                            children: sourceAddress
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location",
                                            children: (sourceProvince || sourceDistrict || sourceWard) && sourceProvince + " " + sourceDistrict + " " + sourceWard
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "address-card",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAddressCard,
                                        onClick: ()=>openAddressSend()
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "html_shipping_col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "titling",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "receiver",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-geo-alt-fill",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "title16",
                                                    children: title_two
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "steps",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "title16",
                                                    children: [
                                                        "Bước ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "title18",
                                                            children: "2"
                                                        }),
                                                        " /3"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAddressCard,
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    onClick: ()=>openAddressReceive()
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    action: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-field",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: destPhone,
                                                placeholder: "Số điện thoại *",
                                                onChange: (e)=>setDestPhone(e.target.value)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label_error",
                                            children: errorDestPhone
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-field",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: destName,
                                                onChange: (e)=>setDestName(e.target.value),
                                                placeholder: "Họ v\xe0 t\xean *"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label_error",
                                            children: errorDestName
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-field",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: (destProvince || destDistrict || destWard) && destProvince + " " + destDistrict + " " + destWard,
                                                placeholder: "Địa chỉ *",
                                                onChange: (e)=>e.preventDefault(),
                                                onClick: ()=>openSelectProvinceReceive()
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label_error",
                                            children: errorDestProvince
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "form-field",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                value: destAddress,
                                                onChange: (e)=>setDestAddress(e.target.value),
                                                placeholder: "Chi tiết địa chỉ *"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "label_error",
                                            children: errorDestAddress
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#!",
                                    onClick: ()=>nextStepTwo(),
                                    title: "",
                                    className: "butt active",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Tiếp tục"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
    if (step === 3) {
        content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content content_2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ranle",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pro_col9_shipping",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "destination",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "des",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-geo-alt-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16",
                                            children: "Đ\xedch"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "information",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setStep(1),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-top",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text name",
                                                    children: sourceName
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text phone",
                                                    children: sourcePhone
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location_details",
                                            children: sourceAddress
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location",
                                            children: (sourceProvince || sourceDistrict || sourceWard) && sourceProvince + " " + sourceDistrict + " " + sourceWard
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "address-card",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAddressCard,
                                        onClick: ()=>openAddressSend()
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "destination",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "sender",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-geo-alt-fill",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16",
                                            children: "Nhận"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "information",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>setStep(2),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "info-top",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text name",
                                                    children: destName
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "info-text phone",
                                                    children: destPhone
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location_details",
                                            children: destAddress
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "info-text location",
                                            children: (destProvince || destDistrict || destWard) && destProvince + " " + destDistrict + " " + destWard
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "address-card",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAddressCard,
                                        onClick: ()=>openAddressReceive()
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "html_shipping_col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "titling",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "receiver",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "title16",
                                                children: "Phương thức vận chuyển"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "steps",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "title16",
                                                children: [
                                                    "Bước ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "title18",
                                                        children: "3"
                                                    }),
                                                    " /3"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "type_business",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16 tingle",
                                            children: "Phương thức giao h\xe0ng"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "extra",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            className: "Dashboard",
                                                            name: "service_id",
                                                            type: "radio",
                                                            value: "12491",
                                                            checked: serviceId === 12491,
                                                            onChange: ()=>setServiceId(12491)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "item-dm",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "title16",
                                                                children: "Tiết kiệm"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "type_business",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16 tingle",
                                            children: "Phương thức lấy h\xe0ng"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "extra",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "Dashboard",
                                                                name: "pickup_type",
                                                                type: "radio",
                                                                value: "2",
                                                                checked: pickupType === 2,
                                                                onChange: ()=>setPickupType(2)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "Bưu t\xe1 tới lấy"
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
                                                                name: "pickup_type",
                                                                type: "radio",
                                                                value: "1",
                                                                checked: pickupType === 1,
                                                                onChange: ()=>setPickupType(1)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "Tới bưu cục gửi"
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
                                    className: "form_product",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        action: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-field",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "text",
                                                    value: productName,
                                                    placeholder: "T\xean sản phẩm *",
                                                    onChange: (e)=>setProductName(e.target.value)
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label_error",
                                                children: errorProductName
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "Bảo hiểm h\xe0ng h\xf3a:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: formatMoney(productPrice, 0),
                                                                placeholder: "1 - 5.000.000",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setProductPrice(replaceString(e.target.value, 5000000))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "đ"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "Số tiền COD:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: formatMoney(collectAmount, 0),
                                                                placeholder: "1 - 5.000.000",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setCollectAmount(replaceString(e.target.value, 5000000))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "đ"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "Trọng lượng:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "number",
                                                                value: weight,
                                                                placeholder: "0.01 - 80",
                                                                min: 0.01,
                                                                max: 80,
                                                                /*onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}*/ onChange: (e)=>setWeight(e.target.value < 80 ? e.target.value : 80)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "kg"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "D\xe0i:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: length,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setLength(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "Rộng:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: width,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setWidth(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "title_form title16",
                                                        children: "Cao:"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item_unit",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "text",
                                                                value: height,
                                                                placeholder: "0 - 150",
                                                                onKeyPress: (event)=>{
                                                                    if (!/[0-9]/.test(event.key)) {
                                                                        event.preventDefault();
                                                                    }
                                                                },
                                                                onChange: (e)=>setHeight(replaceString(e.target.value, 150))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "unit title16",
                                                                children: "cm"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "form-field",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    value: note,
                                                    onChange: (e)=>setNote(e.target.value),
                                                    cols: "30",
                                                    rows: "3",
                                                    placeholder: "Ch\xfa th\xedch"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        });
        content_sum = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "Group_mobile",
            style: {
                bottom: "70px"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "total_amount",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "show_comment_form",
                        className: "",
                        name: "",
                        type: "checkbox",
                        defaultValue: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "price_list",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-disi title16",
                                            children: "Tạm t\xednh"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-price title18 bold",
                                            children: [
                                                formatMoney(fee),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "đ"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-disi title16",
                                            children: "Tổng cước vận chuyển"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-price title18",
                                            children: [
                                                formatMoney(fee),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "đ"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-disi title16",
                                            children: [
                                                "Thuế VAT ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "[Gi\xe1 đ\xe3 bao gồm thuế]"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-price title18",
                                            children: [
                                                "0 ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "đ"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "provisional",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "Dashboard",
                                        name: "clothing",
                                        type: "checkbox",
                                        defaultChecked: policy,
                                        onChange: ()=>setPolicy(policy === 1 ? 0 : 1)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item-dm",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16",
                                            children: "T\xf4i đồng \xfd điều khoản người d\xf9ng"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "synthetic",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "item-visi",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-visi",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-visi title16",
                                                        children: [
                                                            "Tạm t\xednh: ",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                children: [
                                                                    formatMoney(fee),
                                                                    " ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: "đ"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "show_comment_form",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "16",
                                                            height: "16",
                                                            fill: "currentColor",
                                                            className: "bi bi-caret-up-fill",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-ship",
                                                children: "Ph\xed vận chuyển người gửi trả sẽ trừ tiền COD"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: disabled ? "butt active disabled" : "butt active",
                                        onClick: ()=>createOrder(),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Gửi"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
    if (modalIsOpen === 0) {
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "title18",
                                            children: "Gửi h\xe0ng"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "type_business",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "title16 tingle",
                                            children: "Loại đơn theo nghiệp vụ"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "extra",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                className: "Dashboard",
                                                                type: "radio",
                                                                value: "1",
                                                                checked: type === 1,
                                                                onChange: (e)=>{
                                                                    setType(1);
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "Đơn phổ th\xf4ng"
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
                                                                type: "radio",
                                                                value: "2",
                                                                checked: type === 3,
                                                                onChange: (e)=>{
                                                                    setType(3);
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "Đơn đổi h\xe0ng"
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
                                                                type: "radio",
                                                                value: "1",
                                                                checked: type === 2,
                                                                onChange: (e)=>{
                                                                    setType(2);
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "item-dm",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "title16",
                                                                    children: "Đơn thu hồi"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        content,
                        content_sum,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            })
        });
    }
    if (modalIsOpen === 1) {
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
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "title18",
                                            children: "Th\xf4ng tin địa chỉ"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#!",
                                                onClick: ()=>openNewContactSend(),
                                                title: "",
                                                className: "plus",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPlus
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "search",
                                    id: "search",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        action: "",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                placeholder: "T\xecm kiếm theo số điện thoại",
                                                autoFocus: true,
                                                autoComplete: "off",
                                                onChange: (e)=>{
                                                    loadAddressSend(e.target.value);
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "suming",
                                    children: [
                                        "Tổng: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: totalAddressSend
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "html_guest_col12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "list_guest",
                                children: htmlAddressSend
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    ]
                })
            })
        });
    }
    if (modalIsOpen === 2) {
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
                                        href: "#!",
                                        onClick: ()=>{
                                            setIsOpen(1);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "title18",
                                        children: "Th\xeam địa chỉ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "html_add_address",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "ranle",
                                children: [
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
                                                        value: contactName,
                                                        placeholder: "",
                                                        onChange: (e)=>setContactName(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label_error",
                                                children: errorContactName
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
                                                        value: contactPhone,
                                                        placeholder: "",
                                                        onChange: (e)=>setContactPhone(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label_error",
                                                children: errorContactPhone
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Địa chỉ ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        value: (contactProvince || contactDistrict || contactWard) && contactProvince + " " + contactDistrict + " " + contactWard,
                                                        placeholder: "",
                                                        onChange: (e)=>e.preventDefault(),
                                                        onClick: ()=>openProvinceContact()
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label_error",
                                                children: errorContactProvince
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "title16 title_form",
                                                        children: [
                                                            "Địa chỉ chi tiết ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: ":"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        value: contactAddress,
                                                        placeholder: "",
                                                        onChange: (e)=>setContactAddress(e.target.value)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "label_error",
                                                children: errorContactAddress
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-field",
                                                style: {
                                                    borderBottom: "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "title16 title_form",
                                                        children: "Mặc định"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "switch",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "checkbox",
                                                                defaultChecked: contactDefault,
                                                                onChange: ()=>setContactDefault(contactDefault === 1 ? 0 : 1)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "slider round"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#!",
                                        title: "",
                                        className: disabled ? "butt active disabled" : "butt active",
                                        onClick: ()=>addNewContactSend(),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "X\xe1c nhận"
                                        })
                                    })
                                ]
                            })
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
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft
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

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,551], () => (__webpack_exec__(7468)));
module.exports = __webpack_exports__;

})();