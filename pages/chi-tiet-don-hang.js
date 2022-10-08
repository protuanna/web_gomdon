import Footer from "../components/footer"
import {useState, useEffect} from "react"
import Link from "next/link"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faAngleLeft, faEdit} from "@fortawesome/free-solid-svg-icons";
import {order_detail} from "../lib/api_gomdon";
import {cancel_order, print_order} from "../lib/ajax_gomdon";
import Swal from "sweetalert2";

export default function ChiTietDonHang({order}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    const [detail, setDetail] = useState(order.data)
    const [disabled, setDisabled] = useState(false)
    const [aryStatus, setAryStatus] = useState(
        {
            1: 'Tạo mới',
            2: 'Hủy',
            3: 'Đã lấy hàng',
            4: 'Đang vận chuyển',
            5: 'Đang giao hàng',
            6: 'Đang chuyển hoàn',
            7: 'Đã giao hàng',
            8: 'Đã trả hàng',
            9: 'Kiện vấn đề',
            10: 'Lấy hàng thất bại'
        })
    function formatMoney(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    function format_date(ti) {
        let t = new Date(ti);
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();

        return `${date}/${month}/${year}`;
    }
    function format_time(ti) {
        let t = new Date(ti);
        let hours = ('0' + t.getHours()).slice(-2);
        let minutes = ('0' + t.getMinutes()).slice(-2);
        let seconds = ('0' + t.getSeconds()).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }

    async function cancelOrder(){
        console.log(detail, 22)
        if(disabled === false){
            setDisabled(true)

            let result = await cancel_order(detail.id)
            setDisabled(true)
            if (result.result === true) {
                setDetail((existingValues) => ({
                    ...existingValues,
                    status: 2,
                }))
            }
            setDisabled(false)
        }
    }

    async function printTrigger() {
        let res = await print_order({'ids': detail.id})
        console.log(res)
        if (res.result === true) {
            (await import('print-js'))
            printJS(res.data)
        } else {
            Swal.fire(res.message)
        }

    }

    function copy(text) {
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = text;
        //input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
        Swal.fire("Đã copy : " + text);
    }

    let btn_cancel = ''
    let btn_edit = (<span></span>)
    if(detail.status === 1 || detail.status === 10){
        btn_cancel = (
            <div className="Group_cancel">
                <div className="btn_print">
                    <button className={disabled ? "butt active disabled" : "butt active"} onClick={() => cancelOrder()}>
                        <span>Hủy đơn</span>
                    </button>
                </div>
            </div>
        )
        btn_edit = (
            <Link href={"/cap-nhat-don-hang?id=" + detail.id} >
                <a href="" className="edit-fa">
                    <FontAwesomeIcon icon={faEdit}/>
                </a>
            </Link>
        )
    }
    if(detail){
        return (
            <div id="main">
                <div className="container">
                    <div className="contents">
                        <div className="head_col">
                            <div className="head_title">
                                <a href="#" onClick={() => router.back()}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </a>
                                <h3 className="title18">Chi tiết đơn hàng</h3>
                                {btn_edit}
                            </div>
                        </div>
                        <div className="html_single_order">
                            <div className="bann-red">
                                <div className="border-top"></div>
                                <div className="receipt">
                                    <div className="content">
                                        <div className="item-content">
                                            <div className="item-bil">
                                                <h3 className={"title18 status_" + detail.status}>{ aryStatus[detail.status]}</h3>
                                                {/*<p className="title15">Đang đi lấy hàng</p>*/}
                                            </div>
                                            <div className="btn_flex">
                                                <button className="btn-in" onClick={() => printTrigger()}>
                                                    <span>in</span>
                                                </button>
                                                <Link href={'/tra-cuu-don-hang?id=' + detail.id}>
                                                    <button className="btn-tc">
                                                        <span>tra cứu</span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="item-content flex-item">
                                            <div className="single_code">
                                                <h3 className="title18">Mã vận đơn</h3>
                                                <p className="title16">{ detail.partner_code }</p>
                                            </div>
                                            <button className="btn-cop" onClick={() => copy(detail.partner_code)}>
                                                <span>copy</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-page">
                                <div className="title">
                                    <h3 className="title18">Chi tiết đơn hàng</h3>
                                </div>
                                <div className="list_information">
                                    <div className="information">
                                        <div style={{ display:'flex'}}>
                                            <div className="" style={{marginTop:'66px', color:'rgb(0, 101, 224)'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                </svg>
                                            </div>

                                            <div className="item_info">
                                                <div className="int-item">
                                                    <p className="title16">{ detail.source_name }</p>
                                                    <p className="title16">{ detail.source_phone }</p>
                                                </div>
                                                <p className="title16">{ detail.source_address }</p>
                                                <p className="title16">{(detail.source_province || detail.source_district || detail.source_ward) && (detail.source_province + ' ' + detail.source_district + ' ' + detail.source_ward)}</p>
                                            </div>
                                        </div>
                                        <a href={"tel:" + detail.source_phone} title="" className="tell"  style={{ marginTop:'66px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="information">
                                        <div style={{ display:'flex'}}>
                                            <div className="" style={{marginTop:'66px', color:'rgb(224, 49, 0)'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                </svg>
                                            </div>
                                            <div className="item_info">
                                                <div className="int-item">
                                                    <p className="title16">{ detail.dest_name }</p>
                                                    <p className="title16">{ detail.dest_phone }</p>
                                                </div>
                                                <p className="title16">{ detail.dest_address }</p>
                                                <p className="title16">{(detail.dest_province || detail.dest_district || detail.dest_ward) && (detail.dest_province + ' ' + detail.dest_district + ' ' + detail.dest_ward)}</p>
                                            </div>
                                        </div>
                                        <a href={"tel:" + detail.dest_phone} title="" className="tell" style={{ marginTop:'66px'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                <path
                                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="form-content">
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Số đặt hàng</p>
                                        </div>
                                        <div className="item-field item-flex">
                                            <p className="title16">{detail.id}</p>
                                            <button className="btn-cop" onClick={() => copy(detail.id)}>
                                                <span>copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Thời gian tạo đơn</p>
                                        </div>
                                        <div className="item-field">
                                            <div className="flex-item">
                                                <p className="title16">{format_date(detail.created_at)}</p>
                                                <p className="title16">{format_time(detail.created_at)}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Loại kiện hàng phục vụ</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">Tiền thu hộ { formatMoney(detail.collect_amount) } đ</p>
                                            <p className="title16">Bảo hiểm hàng hóa { formatMoney(detail.product_price) } đ</p>
                                        </div>
                                    </div>

                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phương thức lấy hàng</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ detail.pickup_type === 2 ? 'Bưu tá tới lấy' : 'Tới bưu cục gửi' }</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phương thức vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">Giao hàng tiết kiệm</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Trọng lượng</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ Math.round(detail.weight/1000).toFixed(2) } kg</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Dài</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ Math.round(detail.length/10).toFixed(0) } cm</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Rộng</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ Math.round(detail.width/10).toFixed(0) } cm</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Cao</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ Math.round(detail.height/10).toFixed(0) } cm</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Chú thích</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ detail.note}</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phí dịch vụ</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">Phí thu hộ { formatMoney(detail.customer_cod_fee) } đ</p>
                                            <p className="title16">Phí bảo hiểm { formatMoney(detail.customer_insurance_fee) } đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phí vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ formatMoney(detail.customer_delivery_fee) } đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Tổng cước phí vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ formatMoney(detail.customer_total_fee) } đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Tạm tính</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{ formatMoney(detail.customer_total_fee) } đ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {btn_cancel}

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
