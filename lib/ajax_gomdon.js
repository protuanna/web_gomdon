import Axios from './axios';
import { getSession } from "next-auth/react"

export async function address(data){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'get',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/address',
            params: data,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function provinces(){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function districts(province_id){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}

}

export async function wards(district_id){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}
}


export async function createContact(data){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}

}

export async function feeShop(data){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function createOrderDelivery(data){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function ordersDelivery(data){
    const session = await getSession();
    if(session !== null){
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
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function cancel_order(id){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/cancel/' + id,
            /*params: { type: type, keyword:search, page:page },*/
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Hủy đơn hàng thất bại"}
        });
        return result;
    }
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function print_order(data){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/print',
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
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function update_address_order(id, data){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/update-address/'+id,
            data:data,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Cập nhật dữ liệu k thành công"}
        });
        return result;
    }
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function update_order(id, data){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'post',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/update/'+id,
            data:data,
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Cập nhật dữ liệu k thành công"}
        });
        return result;
    }
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function detailOrdersDelivery(id){
    const session = await getSession();
    if(session !== null){
        let token = session.accessToken;
        let result = await Axios({
            method: 'get',
            url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/order/' + id,
            /*params: { type: type, keyword:search, page:page },*/
            /*params:data,*/
            headers: { Authorization: `Bearer ` + token},
        }).then(function (response) {
            return response.data;
        }).catch(function (error) {
            return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
        });
        return result;
    }
    return {result: false, message: "Vui lòng đăng nhập"}
}

export async function search_address(data){
    let result = await Axios({
        method: 'get',
        url: process.env.NEXT_PUBLIC_GOMDON_API_URI+'/api/v2/address/search',
        params:data
        /*params: { type: type, keyword:search, page:page },*/
        /*params:data,*/
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        return error.response.data ?? {result: false, message: "Lấy dữ liệu k thành công"}
    });
    return result;
}




