import Axios from './axios';
import { getSession } from "next-auth/react"

export async function address(type, search, page){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/address',
        params: { type: type, keyword:search, page:page, limit:100 },
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function provinces(){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/provinces',
        /*params: { type: type, keyword:search, page:page },*/
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function districts(province_id){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/districts-by-province/'+province_id,
        /*params: { type: type, keyword:search, page:page },*/
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function wards(district_id){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/wards-by-district/'+district_id,
        /*params: { type: type, keyword:search, page:page },*/
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}


export async function createContact(data){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/address/create',
        /*params: { type: type, keyword:search, page:page },*/
        data:data,
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function feeShop(data){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/shop-fee',
        /*params: { type: type, keyword:search, page:page },*/
        data:data,
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function createOrderDelivery(data){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'post',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/create',
        /*params: { type: type, keyword:search, page:page },*/
        data:data,
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}

export async function ordersDelivery(data){
    const session = await getSession();
    let token = session.accessToken;
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order',
        /*params: { type: type, keyword:search, page:page },*/
        params:data,
        headers: { Authorization: `Bearer ` + token},
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}





