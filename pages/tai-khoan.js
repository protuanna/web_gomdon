import Footer from "../components/footer"

import {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSignOut} from '@fortawesome/free-solid-svg-icons'

import {
    ordersDelivery,
} from '../lib/ajax_gomdon'
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Image from "next/image";

export default function TaiKhoan() {
    const {data: session, status} = useSession()
    let name = ''
    let base_url = process.env.NEXT_PUBLIC_BASE_URL;
    if (status === 'authenticated') {
        name = session.user.name
    }
    const router = useRouter()
    console.log(session)
    /*const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }*/




    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col_acc">
                        <div className="">
                            <div className="images">
                                <Image src="/images/logo.png" alt="" width="100%" height="100%" layout="responsive" />
                                {/*<img src="./images/icon/Logo-filnal.png" alt=""/>*/}
                            </div>
                            <h3 className="title18">{name}</h3>
                            <h3 className="title18">Cửa hàng</h3>
                        </div>
                    </div>
                    <div className="content">
                        <div className="ranle">
                            {/*<div className="tab_list_menu">
                                <a href="./tracuugia.html" title="" className="alv_col">
                                    <div className="icon"><i className='fas fa-search'></i></div>
                                    <p className="title16">Tra cứu phí vận chuyển</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="./thongtindiachi.html" title="" className="alv_col">
                                    <div className="icon"><i className='fas fa-map-marker-alt'></i></div>
                                    <p className="title16">Thông tin địa chỉ</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="./tknh.html" title="" className="alv_col">
                                    <div className="icon"><i style={{ fontSize:18 + "px"}} className="fa">&#xf19c;</i></div>
                                    <p className="title16">Tài khoản ngân hàng</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="./phanhoi.html" title="" className="alv_col">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path
                                                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </div>
                                    <p className="title16">Phản hồi khánh hàng</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                            </div>*/}
                            <div className="tab_list_menu">
                                {/*<a href="./gioithieu.html" title="" className="alv_col">
                                    <div className="icon"><i style={{ fontSize:16 + "px"}} className='far'>&#xf022;</i></div>
                                    <p className="title16">Giới thiệu</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="" title="" className="alv_col">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path
                                                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                            <path
                                                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </div>
                                    <p className="title16">Điều khoản người dùng</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="" title="" className="alv_col">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path
                                                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                            <path
                                                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </div>
                                    <p className="title16">Điều khoản khách hàng</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>
                                <a href="./lienhe.html" title="" className="alv_col">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                                            <path
                                                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path
                                                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </div>
                                    <p className="title16">Trung tâm trợ giúp</p>
                                    <div className="angle-right"><i className='fas fa-angle-right'></i></div>
                                </a>*/}
                                <a href="javascript:void(0)" title="" className="alv_col" onClick={() => {
                                    signOut({callbackUrl: `${window.location.origin}`});
                                    //router.push('/')
                                }}>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faSignOut}/>
                                    </div>
                                    <p className="title16">Đăng xuất</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )

}
