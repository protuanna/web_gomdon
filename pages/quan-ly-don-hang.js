import Footer from "../components/footer"
import {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressCard, faAngleLeft, faThumbTack, faPlus} from '@fortawesome/free-solid-svg-icons'
import InfiniteScroll from 'react-infinite-scroller';

import {
    ordersDelivery,
} from '../lib/ajax_gomdon'
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function QuanLyDonHang() {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }

    const [day, setDay] = useState('');
   // const [type, setType] = useState(1);
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [lastPage, setLastPage] = useState(1);
    const [filter, setFilter] = useState({
        page:1,
        type:1
    });
    const [total, setTotal] = useState(0);
    const [orders, setOrders] = useState([]);
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
    const [report, setReport] = useState(
        [
            {
                label: 'Tạo mới',
                status: 1,
                color: 'red',
            },
            {
                label: 'Hủy',
                status: 2,
                color: 'red',
            },
            {
                label: 'Đã lấy hàng',
                status: 3,
                color: 'red',
            },
            {
                label: 'Đang vận chuyển',
                status: 4,
                color: 'red',
            },
            {
                label: 'Đang giao hàng',
                status: 5,
                color: 'red',
            },
            {
                label: 'Đang chuyển hoàn',
                status: 6,
                color: 'red',
            },
            {
                label: 'Đã giao hàng',
                status: 7,
                color: 'red',
            },
            {
                label: 'Đã chuyển hoàn',
                status: 8,
                color: 'red',
            },
            {
                label: 'Kiện vấn đề',
                status: 9,
                color: 'red',
            },
            {
                label: 'Đơn lấy hàng thất bại',
                status: 10,
                color: 'red',
            },
        ])
    useEffect(async () => {
        {
            //if(page !== 1){
               // console.log(page, '333')
            if(filter.page <= lastPage){
                let res = await getOrder();
                console.log(res)
                if (res.result === true) {
                    setTotal(res.meta.total)
                    if (res.meta.current_page === 1) {
                        setOrders(res.data)
                    } else {
                        setOrders(orders.concat(res.data))
                    }
                    setLastPage(res.meta.last_page)
                }
            }
            //}
        }
    }, [filter]);

    /*useEffect(async () => {
        {
            if(page === 1){
                console.log(page, '3434')
                let res = await getOrder();
                console.log(res)
                if (res.result === true) {
                    setTotal(res.meta.total)
                    if (res.meta.current_page === 1) {
                        setOrders(res.data)
                    } else {
                        setOrders(orders.concat(res.data))
                    }
                }
            }else {
                setPage(1);
            }
        }
    }, [type]);*/

    useEffect(() => {
        window.addEventListener("scroll", loadMore);
    }, []);

    async function loadMore(){
        if (window.innerHeight + document.documentElement.scrollTop >= document.scrollingElement.scrollHeight) {
            document.getElementById('load_more').click();
        }
    }


    async function getOrder() {
        let data = {
            page: filter.page,
            limit: 30
        }
        let res = await ordersDelivery(data)
        return res
    }

    function format_date(ti) {
        let t = new Date(ti);
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();
        let hours = ('0' + t.getHours()).slice(-2);
        let minutes = ('0' + t.getMinutes()).slice(-2);
        let seconds = ('0' + t.getSeconds()).slice(-2);
        return `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    }

    let html_content = []
    if (orders) {
        orders.forEach(function (item, index) {
            html_content.push(
                <a href="" title="">
                    <div className="item_single">
                        <div className="new">{aryStatus[item.status]}</div>
                        <h5 className="title16">Mã vận đơn: {item.partner_code}</h5>
                        <div className="tp_to">
                            <div className="honest">
                                <div className="name">{item.source_name}</div>
                                <div className="city">{item.source_province}</div>
                            </div>
                            ----->
                            <div className="honest">
                                <div className="name">{item.dest_name}</div>
                                <div className="city">{item.dest_province}</div>
                            </div>
                        </div>
                        <p className="title15 bold">{item.source_district} [{item.source_name}], Được gửi đến
                            [{item.dest_name}]</p>
                        <p className="title12">Thời gian tạo đơn {format_date(item.created_at)}</p>
                        <p className="title12">Thời gian cập nhật {format_date(item.updated_at)}</p>
                    </div>
                </a>
            )
        })
    }
    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <h3 className="title18">Quản lý đơn hàng</h3>
                            <div className="profil_col3_locsanpham">
                                <div className="fill-wrapper">
                                    <div className="filter">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                             fill="currentColor"
                                             className="bi bi-funnel" viewBox="0 0 16 16">
                                            <path
                                                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="main_fill">
                                    <div className="tabel">
                                        <div className="list-danhmuc">
                                            <div className="label wow fadeInLeft" data-wow-delay="0.3s">
                                                <label className="danhmuc-sp active" htmlFor="show_01">
                                                    <div className="item_title">
                                                        <h3 className="">Trạng thái</h3>
                                                    </div>
                                                </label>
                                                <input id="show_01" className="show_form" name="" type="checkbox"
                                                       checked="checkbox"/>
                                                <div className="item_fields">
                                                    <ul className="extra">
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Tạo mới</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đã lấy hàng</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đang vận chuyển</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đang giao hàng</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đang chuyển hàng</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đã giao hàng</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Đã trả hàng</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Kiện vấn đề</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label>
                                                                <input className="Dashboard" name="clothing"
                                                                       type="radio"/>
                                                                <div className="item-dm">
                                                                    <p className="">Hủy</p>
                                                                </div>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    <div className="item-btn">
                                                        <button className="butt">
                                                            <span>Đặt lại</span>
                                                        </button>
                                                        <button className="butt active">
                                                            <span>Xác nhận</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pws-list">
                            <a href="javascript:void(0)" onClick={() => {
                                setFilter((existingValues) => ({
                                    ...existingValues,
                                    type: 1,
                                    page: 1
                                }))
                            }} title="" className={filter.type === 1 ? "title15 pws-title active" : "title15 pws-title"}>Hàng gửi</a>
                            <a href="javascript:void(0)" onClick={() => {
                                setFilter((existingValues) => ({
                                    ...existingValues,
                                    type: 2,
                                    page:1
                                }))
                            }} title="" className={filter.type === 2 ? "title15 pws-title active" : "title15 pws-title"}>Hàng nhận</a>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="item_search">
                                <div className="search" id="search">
                                    <form action="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-qr-code-scan" viewBox="0 0 16 16">
                                            <path
                                                d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                                            <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                                            <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                                            <path
                                                d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                                            <path d="M12 9h2V8h-2v1Z"/>
                                        </svg>
                                        <input type="text" placeholder="Tra cứu mã đơn hàng / mã vận đơn"/>
                                    </form>
                                </div>
                                <ul className="extra">
                                    <li>
                                        <label>
                                            <input className="Dashboard" name="clothing" type="radio" checked/>
                                            <div className="item-dm">
                                                <p className="">Hôm nay</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input className="Dashboard" name="clothing" type="radio"/>
                                            <div className="item-dm">
                                                <p className="">Tuần gần nhất</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input className="Dashboard" name="clothing" type="radio"/>
                                            <div className="item-dm">
                                                <p className="">Tháng gần nhất</p>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="pro_col9_sanpham">
                                <div className="list_single_code">
                                    {html_content}
                                    <div style={{"display":"none"}} id="load_more" onClick={() => {
                                        setFilter((existingValues) => ({
                                            ...existingValues,
                                            page: filter.page + 1,
                                        }))
                                    }}>new page</div>
                                </div>
                                {/*<p className="title16 load_text">Đã tải hết danh sách</p>*/}
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </div>
    )

}
