"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 3314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$U": () => (/* binding */ districts),
/* harmony export */   "AK": () => (/* binding */ wards),
/* harmony export */   "DJ": () => (/* binding */ detailOrdersDelivery),
/* harmony export */   "G0": () => (/* binding */ update_order),
/* harmony export */   "Gd": () => (/* binding */ cancel_order),
/* harmony export */   "JI": () => (/* binding */ provinces),
/* harmony export */   "LD": () => (/* binding */ bill),
/* harmony export */   "Lk": () => (/* binding */ address),
/* harmony export */   "PC": () => (/* binding */ createOrderDelivery),
/* harmony export */   "Y7": () => (/* binding */ update_address_order),
/* harmony export */   "aU": () => (/* binding */ feeShop),
/* harmony export */   "bG": () => (/* binding */ sendMessage),
/* harmony export */   "h7": () => (/* binding */ print_order),
/* harmony export */   "hG": () => (/* binding */ ordersDelivery),
/* harmony export */   "ms": () => (/* binding */ search_address),
/* harmony export */   "rE": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5007);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);


async function address(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "get",
            url: "https://admin.gomdon.com.vn" + "/api/v2/address",
            params: data,
            headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function provinces() {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function districts(province_id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function wards(district_id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function createContact(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function feeShop(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function createOrderDelivery(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function ordersDelivery(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
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
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function bill(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "get",
            url: "https://admin.gomdon.com.vn" + "/api/v2/bill",
            /*params: { type: type, keyword:search, page:page },*/ params: data,
            headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function cancel_order(id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order/cancel/" + id,
            /*params: { type: type, keyword:search, page:page },*/ headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "H???y ????n h\xe0ng th???t b???i"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function print_order(data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order/print",
            /*params: { type: type, keyword:search, page:page },*/ data: data,
            headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function update_address_order(id, data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order/update-address/" + id,
            data: data,
            headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "C???p nh???t d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function update_order(id, data) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order/update/" + id,
            data: data,
            headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "C???p nh???t d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function detailOrdersDelivery(id) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    if (session !== null) {
        let token = session.accessToken;
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "get",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order/" + id,
            /*params: { type: type, keyword:search, page:page },*/ /*params:data,*/ headers: {
                Authorization: `Bearer ` + token
            }
        }).then(function(response) {
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "L???y d??? li???u k th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}
async function search_address(data) {
    let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "https://admin.gomdon.com.vn" + "/api/v2/address/search",
        params: data
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return error.response.data ?? {
            result: false,
            qessage: "L???y d??? li???u k th\xe0nh c\xf4ng"
        };
    });
    return result;
}
async function sendMessage(message) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();
    console.log(session);
    if (session !== null) {
        let user_id = session.user.id;
        var bodyFormData = new FormData();
        bodyFormData.append("token", "6e22d72026bcc4722ff96eb8c780eb2ef90784cc");
        bodyFormData.append("function", "send-message-aecommerce");
        bodyFormData.append("aecommerce_id", user_id);
        bodyFormData.append("message", message);
        let result = await _axios__WEBPACK_IMPORTED_MODULE_0___default()({
            method: "post",
            url: "https://chat.gomdon.com.vn" + "/include/api.php",
            data: bodyFormData
        }).then(function(response) {
            console.log(response);
            return response.data;
        }).catch(function(error) {
            return error.response.data ?? {
                result: false,
                message: "G???i tin nh???n kh\xf4ng th\xe0nh c\xf4ng"
            };
        });
        return result;
    }
    return {
        result: false,
        message: "Vui l\xf2ng ????ng nh???p"
    };
}


/***/ })

};
;