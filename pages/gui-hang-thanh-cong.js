import Footer from "../components/footer"
import {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressCard, faAngleLeft, faThumbTack, faPlus} from '@fortawesome/free-solid-svg-icons'
import {address, createContact, createOrderDelivery, districts, feeShop, provinces, wards} from '../lib/ajax_gomdon'
import Image from "next/image";

export default function GuiHangThanhCong() {
    return (
        <div id="main">
            <div className="container">
                <div className="contents-login">
                    <div className="head_col">
                        <div className="head_title">
                            <span></span>
                            <h3 className="title18">Gửi hàng thành công</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="login_logo">
                                <div className="images">
                                    <Image src="/images/logo.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain"/>
                                </div>
                            </div>
                            <div className="pro_col9_shipping">
                                <div className="txt_shipping_col">
                                    Gửi hàng thành công
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
