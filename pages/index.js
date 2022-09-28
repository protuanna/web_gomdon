import HeaderSearch from "../components/header_search";
import Footer from "../components/footer";
import Report from "../components/report";
import { useState } from "react";
import {useSession, signIn} from "next-auth/react"
import {Carousel} from 'react-responsive-carousel';
import Image from 'next/image'
import Link from 'next/link'
import { banners, report } from '../lib/api_gomdon'

export default function Home({ banners , report}) {

    const { data: session, status } = useSession()
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

    let data_banners = banners.data;
    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <HeaderSearch/>
                    </div>
                    <Carousel id="slidein-banner" className={'bann_home owl-carousel owl-theme wow fadeInDown'}
                              autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false}
                              showIndicators={false} showThumbs={false}>
                        {data_banners.map((dt) => (
                            <div className="bg">
                                <img src={dt.image} alt={dt.name}/>
                            </div>
                        ))}
                    </Carousel>
                    <div className="content">
                        <div className="list_order">
                            <Link href="/quan-ly-don-hang">
                                <a href="" title="">
                                    <div className="ordering">
                                        <div className="images">
                                            <Image src="/images/order_icon.png" alt=""  width="100%" height="100%" layout="responsive" objectFit="contain"/>
                                        </div>
                                        <p className="title16">Quản lý đơn hàng</p>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/gui-hang">
                                <a href="" title="">
                                    <div className="ordering">
                                        <div className="images">
                                            <Image src="/images/delivery_icon.png" alt=""  width="100%" height="100%" layout="responsive" objectFit="contain"/>
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
