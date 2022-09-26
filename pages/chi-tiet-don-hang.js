import Footer from "../components/footer"
import {useState, useEffect} from "react"

import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {order_detail} from "../lib/api_gomdon";

export default function QuanLyDonHang({order}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    const [aryStatus, setAryStatus] = useState(
        {
            1: 'Tạo mới',
            2: 'Hủy',
            3: 'Đã lấy hàng',
            4: 'Đang vận chuyển',
            5: 'Đang giao hàng',
            6: 'Đang chuyển hoàn',
            7: 'Đã giao hàng',
            8: 'Đã chuyển hoàn',
            9: 'Kiện vấn đề',
            10: 'Lấy hàng thất bại'
        })
    function formatMoney(number) {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }
    let detail = []
    if(order.result === true){
        detail = order.data
    }
    console.log(detail)
    if(detail){
        return (
            <div id="main">
                <div className="container">
                    <div className="contents">
                        <div className="head_col">
                            <div className="head_title">
                                <a onClick={() => router.back()}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </a>
                                <h3 className="title18">Chi tiết đơn hàng</h3>
                                <span></span>
                            </div>

                        </div>

                        <div className="content">
                            <div className="ranle">
                                <div className="pro_col9_shipping">
                                    <div className="destination">
                                        <div className="des">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg>
                                            <p className="title16">Đích</p>
                                        </div>
                                        <div className="information">
                                            <div className="info-top">
                                                <div className="info-text name">{ detail.source_name }</div>
                                                <div className="info-text phone">{ detail.source_phone }</div>
                                            </div>
                                            <div className="info-text location_details">{ detail.source_address }</div>
                                            <div className="info-text location">{(detail.source_province || detail.source_district || detail.source_ward) && (detail.source_province + ' ' + detail.source_district + ' ' + detail.source_ward)}</div>
                                        </div>

                                    </div>
                                    <div className="destination">
                                        <div className="sender">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg>
                                            <p className="title16">Nhận</p>
                                        </div>
                                        <div className="information">
                                            <div className="info-top">
                                                <div className="info-text name">{ detail.dest_name }</div>
                                                <div className="info-text phone">{ detail.dest_phone }</div>
                                            </div>
                                            <div className="info-text location_details">{ detail.dest_address }</div>
                                            <div className="info-text location">{(detail.dest_province || detail.dest_district || detail.dest_ward) && (detail.dest_province + ' ' + detail.dest_district + ' ' + detail.dest_ward)}</div>
                                        </div>

                                    </div>
                                    <div className="html_shipping_col">
                                        <div className="titling">
                                            <div className="receiver">
                                                <span className="title16">Trạng thái đơn hàng</span>
                                            </div>
                                            <div className="steps">
                                                <p className="title16"><span className="title18">{ aryStatus[detail.status]}</span></p>
                                            </div>
                                        </div>
                                        <div className="form_product">
                                            <form action="">
                                                <div className="form-field" style={{padding:'0 0 10px 0'}}>
                                                    <div className="title_form title16">Mã đơn hàng:</div>
                                                    <div className="item_unit">
                                                        <span>{ detail.id }</span>
                                                        {/*<div className="unit title16">đ</div>*/}
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Mã vận đơn:</div>
                                                    <div className="item_unit">
                                                        <span>{ detail.partner_code }</span>
                                                        {/*<div className="unit title16">đ</div>*/}
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Tiền thu hộ:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.collect_amount) }</span>
                                                        {/*<div className="unit title16">đ</div>*/}
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Giá trị hàng hóa:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.product_price) }</span>
                                                        {/*<div className="unit title16">đ</div>*/}
                                                    </div>
                                                </div>

                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Phương thức lấy hàng:</div>
                                                    <div className="item_unit">
                                                        <span>{ detail.pickup_type === 2 ? 'Bưu tá tới lấy' : 'Tới bưu cục gửi' }</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Phương thức vận chuyển:</div>
                                                    <div className="item_unit">
                                                        <span>Giao hàng tiết kiệm</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Trọng lượng:</div>
                                                    <div className="item_unit">
                                                        <span>{ Math.round(detail.weight/1000).toFixed(2) } kg</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Dài:</div>
                                                    <div className="item_unit">
                                                        <span>{ Math.round(detail.length/10).toFixed(0) } cm</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Rộng:</div>
                                                    <div className="item_unit">
                                                        <span>{ Math.round(detail.width/10).toFixed(0) } cm</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Cao:</div>
                                                    <div className="item_unit">
                                                        <span>{ Math.round(detail.height/10).toFixed(0) } cm</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Chú thích:</div>
                                                    <div className="item_unit">
                                                        <span>{detail.note }</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Phí thu hộ:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.customer_cod_fee) }</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Phí bảo hiểm:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.customer_insurance_fee) }</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Phí vận chuyển:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.customer_delivery_fee) }</span>
                                                    </div>
                                                </div>
                                                <div className="form-field" style={{padding:'10px 0'}}>
                                                    <div className="title_form title16">Tổng phí tạm tính:</div>
                                                    <div className="item_unit">
                                                        <span>{ formatMoney(detail.customer_total_fee) }</span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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

    return (
        <div>Không tìm thấy đơn hàng</div>
    )

}

export async function getServerSideProps(context) {
    /* const session = await unstable_getServerSession(context.req, context.res, authOptions)
     console.log(session);*/
    return {
        props: {
            order:await order_detail(context.req, context.res, context.query.id),
        },
    }
}
