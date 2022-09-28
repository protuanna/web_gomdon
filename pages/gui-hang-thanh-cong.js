import Footer from "../components/footer"
import {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressCard, faAngleLeft, faThumbTack, faPlus} from '@fortawesome/free-solid-svg-icons'
import {
    print_order
} from '../lib/ajax_gomdon'
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Link from "next/link";
import dynamic from 'next/dynamic'

/*const DynamicHeader = dynamic(() => import('print-js'), {
    ssr : false,
})*/

export default function GuiHangThanhCong() {
    const {data: session, status} = useSession()
    const router = useRouter()
    const {id} = router.query
    if (status === 'unauthenticated') {
        router.push('/login')
    }

    async function printTrigger() {
        let res = await print_order({'ids': id})
        console.log(res)
        if (res.result === true) {
            (await import('print-js'))
            printJS(res.data)
        } else {
            alert(res.message)
        }

    }

    return (
        <div id="main">
            <div className="container">
                <div className="contents-login">
                    <div className="head_col">
                        <div className="head_title">
                            <a onClick={() => router.back()}>
                                <FontAwesomeIcon icon={faAngleLeft}/>
                            </a>
                            <h3 className="title18">Kết quả gửi kiện</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="login_logo" style={{marginTop: '30px'}}>
                                <div className="images">
                                    <Image src="/images/delivery_success.jpg" alt="" width="50px" height="50px" priority
                                           layout="responsive" objectFit="contain"/>
                                </div>
                            </div>
                            <div className="pro_col9_shipping">
                                {/*<div className="txt_shipping_col">
                                    Tạo đơn hàng thành công
                                </div>*/}
                                <div className="html_shipping_col">
                                    <div style={{textAlign: 'center', marginBottom: '10px', color: '#04cc66'}}>
                                        ĐƠN HÀNG ĐÃ LÊN THÀNH CÔNG
                                    </div>
                                    <div style={{textAlign: 'center', lineHeight: '30px'}}>
                                        <i>Đối với khu vực cấp thành phố bưu tá sẽ đến lấy hàng trong ngày hoặc chậm
                                            nhất ngày hôm sau nếu lên đơn sau 16h</i>
                                    </div>
                                    <div style={{textAlign: 'center', lineHeight: '30px'}}>
                                        <i>Đối với cấp phường xã bưu tá sẽ đến lấy hàng chậm nhất tối đa 72h</i>
                                    </div>
                                    <div  onClick={() => printTrigger()} title="" className="butt"
                                       style={{marginTop: '15px',cursor:'pointer'}}>
                                        <span>In</span>
                                    </div>

                                    <Link href={"/chi-tiet-don-hang?id=" + id}>
                                        <a href="" title="" className="butt"
                                           style={{marginTop: '15px'}}>
                                            <span>Tra cứu đơn hàng</span>
                                        </a>
                                    </Link>
                                    <Link href={"/gui-hang"}>
                                        <a href="" title="" className="butt active"
                                           style={{marginTop: '15px'}}>
                                            <span>Tạo thêm đơn hàng</span>
                                        </a>
                                    </Link>
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
