import Footer from "../components/footer"
import {useState, useEffect} from "react"

import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faAngleLeft, faEdit} from "@fortawesome/free-solid-svg-icons";
import {order_detail} from "../lib/api_gomdon";
import Image from "next/image";

export default function TraCuuDonHang({order}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    const [detail, setDetail] = useState(order.data)
    function format_date(ti) {
        let t = new Date(ti);
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();
        let hours = ('0' + t.getHours()).slice(-2);
        let minutes = ('0' + t.getMinutes()).slice(-2);
        let seconds = ('0' + t.getSeconds()).slice(-2);
        return `${date}/${month}/${year}`;
    }
    function format_time(ti) {
        let t = new Date(ti);
        let date = ('0' + t.getDate()).slice(-2);
        let month = ('0' + (t.getMonth() + 1)).slice(-2);
        let year = t.getFullYear();
        let hours = ('0' + t.getHours()).slice(-2);
        let minutes = ('0' + t.getMinutes()).slice(-2);
        let seconds = ('0' + t.getSeconds()).slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }
    let logs = detail.logs;
    let html_logs = []
    if(logs.length > 0) {
        logs.sort(function(a, b) {
            var keyA = new Date(a.created_at),
                keyB = new Date(b.created_at);
            // Compare the 2 dates
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        });
        logs.forEach(function (item, index){
            html_logs.push(
                <div className={index == 0 ? "item-route active" : "item-route"} key={index}>
                    <div className="date">
                        <p>{format_date(item.created_at)}</p>
                        <p>{format_time(item.created_at)}</p>
                    </div>
                    {/*<div className="tick"></div>*/}
                    <p className="title16">{ item.status_description}</p>
                </div>
            )
        })
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
                                <h3 className="title18">Chi tiết chuyển phát</h3>
                                <span></span>
                            </div>
                        </div>
                        <div className="html_single_delivery">
                            <div className="content">
                                <div className="item-logo">
                                    <Image src="/images/logo.png" alt="" width="150px" height="150px"/>
                                </div>
                                <div className="title-item title26">{detail.id}</div>
                                <div className="tp_to">
                                    <div className="honest">
                                        <div className="city">{ detail.source_province}</div>
                                        <div className="name">{ detail.source_name}</div>
                                    </div>
                                    <div className="go">---></div>
                                    <div className="honest">
                                        <div className="city">{ detail.dest_province}</div>
                                        <div className="name">{ detail.dest_name}</div>
                                    </div>
                                </div>
                                <div className="route-content">
                                    {html_logs}
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
