import Footer from "../components/footer"
import Loading from "../components/loading"
import {useState, useEffect, useRef} from "react"
import { DateRangePicker, DateRange } from 'react-date-range';
import { vi } from "date-fns/locale";
import {
    bill
} from '../lib/ajax_gomdon'
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function PhieuDoiSoat() {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    /*const{search} = router.query*/
    const [openCal, setOpenCal] = useState(false);
    const dropdown_call = useRef(null);
    const [loading, setLoading] = useState(false);
    const [lastPage, setLastPage] = useState(1);
    const [filter, setFilter] = useState({
        page:1,
        bill_id:'',
        day:'week',
    });
    const [total, setTotal] = useState(0);
    const [orders, setOrders] = useState([]);

    const [selectionRange, setSelectionRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    useEffect(async () => {
        if(filter.page <= lastPage){
            if(filter.page === 1){
                setLoading(true)
            }
            let res = await getOrder();
            if (res.result === true) {
                setTotal(res.meta.total)
                if (res.meta.current_page === 1) {
                    setOrders(res.data)
                    setLoading(false)
                } else {
                    setOrders(orders.concat(res.data))
                }
                setLastPage(res.meta.last_page)
            }
        }
    }, [filter]);

    useEffect(() => {
        // only add the event listener when the dropdown is opened
        if (!openCal) return;
        function handleClick(event) {
            if (dropdown_call.current && !dropdown_call.current.contains(event.target)) {
                setOpenCal(false);
            }
        }
        window.addEventListener("click", handleClick);
        // clean up
        return () => window.removeEventListener("click", handleClick);
    }, [openCal]);

    useEffect(() => {
        window.addEventListener("scroll", loadMore);
    }, []);

    useEffect(() => {
        console.log(selectionRange)
    }, [selectionRange]);

    async function loadMore(){
        if (window.innerHeight + document.documentElement.scrollTop >= document.scrollingElement.scrollHeight) {
            let myEle = document.getElementById("load_more");
            if(myEle){
                myEle.click();
            }
        }
    }

    function sbmDate(){
        setOpenCal(false)
        let startDate = format_day(selectionRange[0].startDate)
        let endDate = format_day(selectionRange[0].endDate)
        let day = startDate + ' - ' + endDate
        setFilter((existingValues) => ({
            ...existingValues,
            day: day,
            page:1
        }))
    }

    async function changeId(search) {
        const delayDebounceFn = setTimeout(() => {
            setFilter((existingValues) => ({
                ...existingValues,
                bill_id: search,
                page:1
            }))
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }

    function getFirstDayOfWeek(d) {
        const date = d ? new Date(d) : new Date();
        const day = date.getDay(); // 👉️ get day of week
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }

    function getFirstDayOfMonth(d){
        const date = d ? new Date(d) : new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    function getLastDayOfMonth(d){
        const date = d ? new Date(d) : new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }

    async function getOrder() {
        let data = {
            page: filter.page,
            limit: 30,
        }
        if(filter.bill_id !== ''){
            data.bill_id = filter.bill_id
        }
        switch (filter.day){
            case 'day':
                data.start_time = parseInt(((new Date()).setHours(0, 0, 0, 0))/1000)
                data.end_time = data.start_time + 86400//parseInt(((new Date()).setHours(0, 0, 0, 0))/1000)
                break
            case 'week':
                data.end_time = parseInt(((new Date()))/1000)
                data.start_time = data.end_time - (7*86400)
                break
            case 'month':
                data.start_time = parseInt(getFirstDayOfMonth().setHours(0, 0, 0, 0)/1000)
                data.end_time = parseInt(getLastDayOfMonth().setHours(0, 0, 0, 0)/1000) + 86400
                break
            default:
                data.start_time = parseInt(new Date(selectionRange[0].startDate).setHours(0, 0, 0, 0)/1000)
                data.end_time = parseInt(new Date(selectionRange[0].endDate).setHours(23, 59, 59, 0)/1000)
        }
        let res = await bill(data)
        console.log(res)
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
        return `${date}/${month}/${year} ${hours}:${minutes}`;
    }

    function format_day(ti) {
        let t = new Date(ti);
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear().toString().substr(-2);
        return `${date}/${month}/${year}`;
    }

    function formatMoney(number) {
        /*if (number === '' || number === 0) {
            return ''
        }*/
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    let html_list = [];
    if (orders.length > 0) {
        orders.forEach(function (item, index) {
            html_list.push(
                <tr key={index}>
                    <td className='text_center'>{item.id}</td>
                    <td className='text_center'>{item.order_count}</td>
                    <td className='text_center'>{ formatMoney(item.total_cod) }</td>
                    <td className='text_center'>{ formatMoney(item.total_fee) }</td>
                    <td className='text_center'>{ formatMoney(item.bank_fee) }</td>
                    <td className='text_center'>{ formatMoney(item.total_customer_payment) }</td>
                    <td className='text_center'>{ formatMoney(item.total_has_payment) }</td>
                    <td className='text_center'>{item.status === 1 ? 'Hoàn thành' : 'Chưa hoàn thành'}</td>
                    <td className='text_center'>{format_date(item.created_time*1000)}</td>
                    <td className='text_center'>{item.payment_time ? format_date(item.payment_time*1000): ''}</td>
                    <td className='text_center'>
                        <Link href={"/chi-tiet-phieu-doi-soat?id="+ item.id} >
                            <a href="" style={{color:'#ED1C2A'}}>Chi tiết</a>
                        </Link>
                    </td>
                </tr>
            )
        })
    } else {
        html_list = (
            <tr>
                <td className='' colSpan={11}>Không có phiếu đối soát nào</td>
            </tr>
        )
    }
    let html_content = (
        <div className={''}>
            <table className={'table_responsive table'} border='none' cellSpacing={0} cellPadding={0} style={{paddingBottom:'30px'}}>
                <thead>
                <tr>
                    <th>Mã đối soát</th>
                    <th>Số lượng đơn hàng</th>
                    <th>Thu hộ</th>
                    <th>Phí vận chuyển</th>
                    <th>Phí chuyển khoản</th>
                    <th>Số tiền cần thu</th>
                    <th>Số tiền đã thanh toán</th>
                    <th>Trạng thái thanh toán</th>
                    <th>Thời gian tạo</th>
                    <th>Thời gian hoàn thành</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {html_list}
                </tbody>
            </table>
        </div>
    )

    if(loading === true){
        html_content = (<Loading/>)
    }

    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <span></span>
                            <h3 className="title18">Phiếu đối soát</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="item_search">
                                <div className="search" id="search">
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                    }}>
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
                                        <input type="text"
                                               id="txt_search"
                                               /*onChange={(e) => {
                                                    setFilter((existingValues) => ({
                                                        ...existingValues,
                                                        orderId: e.target.value,
                                                        page:1
                                                    }))
                                                }}*/
                                               onChange={(e) => {
                                                   changeId(e.target.value)
                                               }}
                                            //value={filter.orderId}
                                            defaultValue={filter.orderId}
                                           placeholder="Nhập mã đối soát"/>
                                    </form>
                                </div>
                                <ul className="extra">
                                    <li>
                                        <label>
                                            <input
                                                className="Dashboard"
                                                name="clothing"
                                                type="radio"
                                                value="day"
                                                checked={filter.day === 'day'}
                                                onChange={() => {
                                                    setFilter((existingValues) => ({
                                                        ...existingValues,
                                                        day: 'day',
                                                        page:1
                                                    }))
                                                }}
                                            />
                                            <div className="item-dm">
                                                <p className="">Hôm nay</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                className="Dashboard"
                                                name="clothing"
                                                type="radio"
                                                value="week"
                                                checked={filter.day === 'week'}
                                                onChange={() => {
                                                    setFilter((existingValues) => ({
                                                        ...existingValues,
                                                        day: 'week',
                                                        page:1
                                                    }))
                                                }}
                                            />
                                            <div className="item-dm">
                                                <p className="">Tuần gần nhất</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                className="Dashboard"
                                                name="clothing"
                                                type="radio"
                                                value="month"
                                                checked={filter.day === 'month'}
                                                onChange={() => {
                                                    setFilter((existingValues) => ({
                                                        ...existingValues,
                                                        day: 'month',
                                                        page:1
                                                    }))
                                                }}
                                            />
                                            <div className="item-dm">
                                                <p className="">Tháng gần nhất</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li style={{position:'relative'}}>
                                        <label>
                                            <div className={(filter.day === 'day' || filter.day === 'week' || filter.day === 'month' ? "item-dm" : "item-dm active")}  onClick={() => {
                                                setOpenCal(!openCal)
                                                /*setFilter((existingValues) => ({
                                                    ...existingValues,
                                                    day: 'day',
                                                    page:1
                                                }))*/
                                            }}>
                                                <p className="">{ (filter.day === 'day' || filter.day === 'week' || filter.day === 'month') ? 'Chọn ngày' :  filter.day}</p>
                                            </div>
                                        </label>
                                        <div ref={dropdown_call} className={openCal ? "cal-box open" : "cal-box"}>
                                            <DateRange
                                                /*editableDateInputs={true}*/
                                                onChange={item => setSelectionRange([item.selection])}
                                                moveRangeOnFirstSelection={false}
                                                showDateDisplay={false}
                                                ranges={selectionRange}
                                                locale={vi}
                                            />
                                            <div className={'btn-select-cal'} onClick={() =>sbmDate()}>Chọn</div>
                                        </div>
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

