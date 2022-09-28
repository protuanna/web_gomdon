import HeaderSearch from "../components/header_search";
import Footer from "../components/footer";
import Report from "../components/report";
import { useState } from "react";
import {useSession, signIn} from "next-auth/react"
import {Carousel} from 'react-responsive-carousel';
import Image from 'next/image'
import Link from 'next/link'
import { banners, report } from '../lib/api_gomdon'
import {useRouter} from "next/router"
import {detailOrdersDelivery} from '../lib/ajax_gomdon'

export default function Home({ banners , report}) {

    const { data: session, status } = useSession()
    const router = useRouter()
    const [search, setSearch] = useState('')
    /*const [delivery, setDelivery] = useState((status==="authenticated")?'/delivery':'/login');
    const [order, setOrder] = useState((status==="authenticated")?'/order':'/login');*/
    let html  = '';
    if(status === 'authenticated'){
        let data_report = report.data;
        html = (
            <Report data={data_report}/>
        )
    }else {
        html = (
            <div className="login_content">
                <div className="lbl_login"><strong>Đăng nhập để truy vấn đơn hàng</strong></div>
                <Link href="/login">
                    <div className="btn_login">
                        Đăng nhập
                    </div>
                </Link>
            </div>
        )
    }

    function searchOrder(e){
        e.preventDefault()
        getOrder()
    }

    async function getOrder(){
        let res = await detailOrdersDelivery(search)
        if(res.result === true){
            let or = res.data
            router.push({
                pathname: '/chi-tiet-don-hang',
                query:{id:or.id}
            })
        }else {
            alert('Không tìm thấy thông tin đơn hàng')
        }
    }

    let data_banners = banners.data;
    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="searching">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-qr-code-scan" viewBox="0 0 16 16">
                                <path
                                    d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                                <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                                <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                                <path
                                    d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                                <path d="M12 9h2V8h-2v1Z"/>
                            </svg>
                            <div className="search-head" id="search">
                                <form action="" onSubmit={(e) => searchOrder(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"/>
                                    </svg>
                                    <input type="text" placeholder="Tra cứu mã đơn hàng / mã vận đơn" value={search} onChange={(e) => setSearch(e.target.value)}/>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Carousel id="slidein-banner" className={'bann_home owl-carousel owl-theme wow fadeInDown'}
                              autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}
                              showIndicators={false} showThumbs={false}>
                        {data_banners.map((dt) => (
                            <div className="bg" key={dt.name}>
                                <img src={dt.image} alt={dt.name}/>
                            </div>
                        ))}
                    </Carousel>
                    <div className="content">
                        <div className="list_order">
                            <Link href="/quan-ly-don-hang" key={'quan-ly-don-hang'}>
                                <a href="" title="">
                                    <div className="ordering">
                                        <div className="images">
                                            <Image src="/images/order_icon.png" alt=""  width="100%" height="100%" layout="responsive" objectFit="contain" priority/>
                                        </div>
                                        <p className="title16">Quản lý đơn hàng</p>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/gui-hang" key={'gui-hang'}>
                                <a href="" title="">
                                    <div className="ordering">
                                        <div className="images">
                                            <Image src="/images/delivery_icon.png" alt=""  width="100%" height="100%" layout="responsive" objectFit="contain" priority/>
                                        </div>
                                        <p className="title16">Gửi hàng</p>
                                    </div>
                                </a>
                            </Link>
                        </div>

                        { html }


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
            banners:await banners(),
            report: await report(context.req, context.res)
        },
    }
}
