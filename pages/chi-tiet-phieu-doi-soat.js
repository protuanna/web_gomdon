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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {bill_detail} from "../lib/api_gomdon";

export default function ChiTietPhieuDoiSoat({resBill}) {
    console.log(resBill)

    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }

    /*const{search} = router.query*/

    const [orders, setOrders] = useState(resBill.data.orders ?? []);
    const [bill, setBill] = useState(resBill.data.bill ?? [])
    console.log(bill)

    /*async function changeId(search) {
        const delayDebounceFn = setTimeout(() => {
            setFilter((existingValues) => ({
                ...existingValues,
                bill_id: search,
                page:1
            }))
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }*/




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

    function formatMoney(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    let html_list = [];
    if (orders.length > 0) {
        orders.forEach(function (item, index) {
            html_list.push(
                <tr key={index}>
                    <td className='text_center'>{item.partner_code}</td>
                    <td className='text_center'>{ formatMoney(item.collect_amount) }</td>
                    <td className='text_center'>{ formatMoney(item.customer_total_fee) }</td>
                    <td className='text_center'>{format_date(item.created_time*1000)}</td>
                </tr>
            )
        })
    } else {
        html_list = (
            <tr>
                <td className='' colSpan={4}>Kh??ng c?? ????n h??ng n??o</td>
            </tr>
        )
    }
    let html_content = (
        <div>
            <table className={'table'} border='none' cellSpacing={0} cellPadding={0} style={{paddingBottom:'30px'}}>
                <thead>
                <tr>
                    <th style={{ width:'25%'}}>M?? v???n ????n</th>
                    <th style={{ width:'25%'}}>Thu h???</th>
                    <th style={{ width:'25%'}}>Ph?? v???n chuy???n</th>
                    <th style={{ width:'25%'}}>Th???i gian t???o</th>
                </tr>
                </thead>
                <tbody>
                {html_list}
                </tbody>
            </table>
        </div>
    )

    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <a href="#" onClick={() => router.back()}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <h3 className="title18">Chi ti???t phi???u ?????i so??t {}</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="item_search">

                                <ul className="extra">
                                    <li style={{width:'33.33%'}}>
                                        <label>
                                            <div className="item-rp">
                                                <p style={{color:'green'}} className="">Thu h???</p>
                                                <br/>
                                                <p className=""><b>{ formatMoney(bill.total_cod) }</b></p>
                                            </div>
                                        </label>
                                    </li>
                                    <li style={{width:'33.33%'}}>
                                        <label>
                                            <div className="item-rp">
                                                <p style={{color:'green'}} className="">Ph?? v???n chuy???n</p>
                                                <br/>
                                                <p className=""><b>{ formatMoney(bill.total_fee) }</b></p>
                                            </div>
                                        </label>
                                    </li>
                                    <li style={{width:'33.33%'}}>
                                        <label>
                                            <div className="item-rp">
                                                <p style={{color:'green'}} className="">C???n thu</p>
                                                <br/>
                                                <p className=""><b>{ formatMoney(bill.total_payment) }</b></p>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <div className="pro_col9_sanpham">
                                <div className="list_single_code">
                                    {html_content}

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

export async function getServerSideProps(context) {
    /* const session = await unstable_getServerSession(context.req, context.res, authOptions)
     console.log(session);*/
    return {
        props: {
            resBill:await bill_detail(context.req, context.res, context.query.id),
        },
    }
}

