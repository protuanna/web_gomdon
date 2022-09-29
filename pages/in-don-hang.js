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
import Swal from "sweetalert2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

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
    let init = []
    orders.forEach(function (item, index) {
        let id = item.id
        init[id] = false
    })
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(init);

    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };

    const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
                newState[inputName] = value;
            }
            return newState;
        });
    };

    useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
            if (checked[inputName] === false) {
                allChecked = false;
            }
        }
        if (allChecked) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
    }, [checked]);

    async function printTrigger() {
        let ids = [];
        for (const inputName in checked) {
            if (checked[inputName] === true) {
                ids.push(inputName)
            }
        }
        if(ids.length > 0){
            let res = await print_order({'ids': ids.join(',')})
            if (res.result === true) {
                (await import('print-js'))
                printJS(res.data)
            } else {
                Swal.fire(res.message)
            }
        }else {
            Swal.fire('Vui lòng chọn hóa đơn cần in')
        }


    }



    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <a onClick={() => router.back()}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
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
                                                <div className= "item_single">
                                                    <div className="print_item" style={{marginBottom:"10px"}}>
                                                        <input
                                                               type="checkbox"
                                                               name={id}
                                                               checked={checked[id]}
                                                               onChange={() => toggleCheck(id)}
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
                                    <input
                                           type="checkbox"
                                           onChange={(event) => selectAll(event.target.checked)}
                                           checked={checkedAll}
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
