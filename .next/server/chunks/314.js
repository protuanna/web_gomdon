"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 3314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$U": () => (/* binding */ districts),
/* harmony export */   "AK": () => (/* binding */ wards),
/* harmony export */   "JI": () => (/* binding */ provinces),
/* harmony export */   "Lk": () => (/* binding */ address),
/* harmony export */   "PC": () => (/* binding */ createOrderDelivery),
/* harmony export */   "aU": () => (/* binding */ feeShop),
/* harmony export */   "hG": () => (/* binding */ ordersDelivery),
/* harmony export */   "rE": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5007);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function address(type, search, page) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/address",
        params: {
            type: type,
            keyword: search,
            page: page,
            limit: 100
        },
        headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function provinces() {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/provinces",
        /*params: { type: type, keyword:search, page:page },*/ headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function districts(province_id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/districts-by-province/" + province_id,
        /*params: { type: type, keyword:search, page:page },*/ headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function wards(district_id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/wards-by-district/" + district_id,
        /*params: { type: type, keyword:search, page:page },*/ headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function createContact(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "https://admin.gomdon.com.vn" + "/api/v2/address/create",
        /*params: { type: type, keyword:search, page:page },*/ data: data,
        headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function feeShop(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "https://admin.gomdon.com.vn" + "/api/v2/order/shop-fee",
        /*params: { type: type, keyword:search, page:page },*/ data: data,
        headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function createOrderDelivery(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "post",
        url: "https://admin.gomdon.com.vn" + "/api/v2/order/create",
        /*params: { type: type, keyword:search, page:page },*/ data: data,
        headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function ordersDelivery(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    let token = session.accessToken;
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/order",
        /*params: { type: type, keyword:search, page:page },*/ params: data,
        headers: {
            Authorization: `Bearer ` + token
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return result;
}


/***/ })

};
;