import Axios from './axios';
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../pages/api/auth/[...nextauth]"

export async function login(phone, password) {
    let res = await Axios({
        method: 'post',
        url: process.env.GOMDON_API_URI+'/api/v2/auth/login',
        data: {
            phone: phone,
            password: password
        }
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error)
        return {result: false, message: "Đăng nhập không thành công"}
    });
    return res;
}

export async function banners(){
    console.log(process.env.GOMDON_API_URI)
    let res = await Axios({
        method: 'get',
        url: process.env.GOMDON_API_URI+'/api/v2/banner',
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return res;
}

export async function report(req,res){
    let session = await unstable_getServerSession(req, res, authOptions)
    if(session){
        let token = session.accessToken;

        let result = await Axios({
            method: 'get',
            url: process.env.GOMDON_API_URI+'/api/v2/order/report',
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return  null

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
}*/

export async function api_orders(req, res, data){
    let session = await unstable_getServerSession(req, res, authOptions)
    if(session){
        let token = session.accessToken;
        let result = await Axios({
            method: 'get',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order',
            params:data,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return  null
}

export async function order_detail(req, res, id){
    let session = await unstable_getServerSession(req, res, authOptions)
    if(session){
        let token = session.accessToken;
        let result = await Axios({
            method: 'get',
            url: process.env.GOMDON_API_URI+'/api/v2/order/' + id ,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return  null
}

export async function detail_fee(req, res){
    let session = await unstable_getServerSession(req, res, authOptions)
    if(session){
        let token = session.accessToken;
        let result = await Axios({
            method: 'get',
            url: process.env.GOMDON_API_URI+'/api/v2/user_manual?type=delivery' ,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return  null
}

