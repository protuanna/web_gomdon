"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 201:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let axios = __webpack_require__(2167);
//import * as https from "https";
const Axios = axios.create({
    //baseURL: window.location.origin,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json"
    }
});
Axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});
module.exports = Axios;


/***/ }),

/***/ 4737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ _nextauth_authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./lib/axios.js
var axios = __webpack_require__(201);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
;// CONCATENATED MODULE: ./lib/api_gomdon.js



async function login(phone, password) {
    let res = await axios_default()({
        method: "post",
        url: process.env.GOMDON_API_URI + "/api/v2/auth/login",
        data: {
            phone: phone,
            password: password
        }
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        console.log(error);
        return {
            result: false,
            message: "Đăng nhập kh\xf4ng th\xe0nh c\xf4ng"
        };
    });
    return res;
}
async function user(req, res) {
    let session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        let token = session.accessToken;
        let result = await Axios({
            method: "get",
            url: process.env.GOMDON_API_URI + "/api/v2/auth/user",
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
    return null;
}
async function banners() {
    console.log(process.env.GOMDON_API_URI);
    let res = await Axios({
        method: "get",
        url: process.env.GOMDON_API_URI + "/api/v2/banner"
    }).then(function(response) {
        return response.data;
    }).catch(function(error) {
        return {
            result: false,
            message: "Lấy dữ liệu k th\xe0nh c\xf4ng"
        };
    });
    return res;
}
async function report(req, res) {
    let session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        let token = session.accessToken;
        let result = await Axios({
            method: "get",
            url: process.env.GOMDON_API_URI + "/api/v2/order/report",
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
    return null;
}
/*export async function address(token, type, search){
    let result = await Axios({
        method: 'get',
        url: process.env.GOMDON_API_URI+'/api/v2/address',
        params: { type: type, keyword:search },
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function orders(token, type, search){
    let result = await Axios({
        method: 'get',
        url: process.env.GOMDON_API_URI+'/api/v2/address',
        params: { type: type, keyword:search },
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}*/ async function api_orders(req, res, data) {
    let session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        let token = session.accessToken;
        let result = await Axios({
            method: "get",
            url: "https://admin.gomdon.com.vn" + "/api/v2/order",
            params: data,
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
    return null;
}
async function order_detail(req, res, id) {
    let session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        let token = session.accessToken;
        let result = await Axios({
            method: "get",
            url: process.env.GOMDON_API_URI + "/api/v2/order/" + id,
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
    return null;
}
async function detail_fee(req, res) {
    let session = await unstable_getServerSession(req, res, authOptions);
    if (session) {
        let token = session.accessToken;
        let result = await Axios({
            method: "get",
            url: process.env.GOMDON_API_URI + "/api/v2/user_manual?type=delivery",
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
    return null;
}

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



const _nextauth_authOptions = {
    // Configure one or more authentication providers
    providers: [
        credentials_default()({
            id: "username-login",
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "098999999"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials, req) {
                let result = await login(credentials.username, credentials.password);
                if (result.result === true) {
                    let data = result.data;
                    if (data.user.type === "customer") {
                        return {
                            id: data.user.id,
                            phone: data.user.phone,
                            name: data.user.name,
                            access_token: data.access_token
                        };
                    }
                    result.message = "T\xe0i khoản kh\xf4ng tồn tại";
                }
                throw new Error(result.message);
            }
        })
    ],
    secret: "WaV+XXE/Vfca6SXUndN3fE4wZHTHrkfbKxztwv3SjdM=",
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt ({ token , user , account , profile  }) {
            if (user) {
                user && (token.user = {
                    id: user.id,
                    phone: user.phone,
                    name: user.name
                });
                token.accessToken = user.access_token;
            }
            return token;
        },
        async session ({ session , token , user  }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            return session;
        },
        async redirect ({ url , baseUrl  }) {
            console.log(url, baseUrl);
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(_nextauth_authOptions));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4737));
module.exports = __webpack_exports__;

})();