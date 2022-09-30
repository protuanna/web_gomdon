let axios = require('axios');
import * as https from "https";
const Axios = axios.create({
    //baseURL: window.location.origin,

    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        /*
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        */
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

Axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

module.exports = Axios;
