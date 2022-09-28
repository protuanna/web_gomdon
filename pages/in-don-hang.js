import Footer from "../components/footer"
import Loading from "../components/loading"
import {useState, useEffect, useRef} from "react"

import {
    print_order,
} from '../lib/ajax_gomdon'
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Link from "next/link";
import {api_orders} from "../lib/api_gomdon";

export default function InDonHang({result}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    let orders = [];
    if(result.result === true){
        orders = result.data
    }

    const [ids, setIds] = useState([]);

    const handleSelect = (event) => {
        const id = event.target.value;
        console.log(id )
        console.log(event.target.checked)
        if (!ids.includes(id)) {
            setIds([...ids, id]);
        } else {
            setIds(
                ids.filter((selectedId) => {
                    return selectedId !== id;
                })
            );
        }
    };

    const handleSelectAll = () => {
        if (ids.length < orders.length) {
            setIds(orders.map(({ id }) => id));
        } else {
            setIds([]);
        }
    };

    async function printTrigger() {
        if(ids.length > 0){
            let res = await print_order({'ids': ids.join(',')})
            console.log(res)
            if (res.result === true) {
                (await import('print-js'))
                printJS(res.data)
            } else {
                alert(res.message)
            }
        }else {
            alert('Vui lòng chọn hóa đơn cần in')
        }


    }



    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <h3 className="title18">In đơn hàng</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="pro_col9_sanpham">
                                <div className="list_single_code">
                                    {orders.map(({ id, partner_code, source_name , source_province, dest_name, dest_province}) => {
                                        return (

                                            <label className="" key={id}>
                                                <div className={ids.includes((id).toString()) ? "item_single active" : "item_single"}>
                                                    <div className="print_item" style={{marginBottom:"10px"}}>
                                                        <input className="Dashboard"
                                                               name="clothing"
                                                               type="checkbox"
                                                               value={id}
                                                               checked={ids.includes(id)}
                                                               onChange={handleSelect}
                                                        />
                                                        <span className="item-dm">Mã vận đơn: {partner_code}</span>
                                                    </div>
                                                    <div className="tp_to">
                                                        <div className="honest">
                                                            <div className="name">{source_name}</div>
                                                            <div className="city">{source_province}</div>
                                                        </div>
                                                        <span>-----&gt;</span>
                                                        <div className="honest">
                                                            <div className="name">{dest_name}</div>
                                                            <div className="city">{dest_province}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        );
                                    })}
                                    {/*{html_content}*/}
                                </div>
                                {/*<p className="title16 load_text">Đã tải hết danh sách</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="Group_mobile" style={{bottom: '70px'}}>
                        <div className="total_amount">

                            <div className="provisional">
                                <label>
                                    <input className="Dashboard"
                                           name="clothing"
                                           type="checkbox"
                                           checked={ids.length === orders.length}
                                           onChange={handleSelectAll}
                                    />
                                    <div className="item-dm">
                                        <p className="title16">Chọn tất cả</p>
                                    </div>
                                </label>
                                <div className="synthetic">
                                    <button className="butt active" style={{ width:'100%'}} onClick={() => printTrigger()}>
                                        <span>In</span>
                                    </button>
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
            result:await api_orders(context.req, context.res, {status:1, limit: 1000}),
        },
    }
}
