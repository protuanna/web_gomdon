import { useState } from "react";
import Link from 'next/link'
import {useSession} from "next-auth/react"
import { useRouter } from 'next/router'
import Script from "next/script";

export default function Footer() {
    const { data: session, status } = useSession()
    let embed = '';
    if(status === 'authenticated'){
        let user = session.user;
        embed = (
            <>

                <Script src="https://chat.gomdon.com.vn/js/min/jquery.min.js?lang=vi"></Script>
                <Script id="sbinit" src="https://chat.gomdon.com.vn/js/main.js?lang=vi"></Script>
                <Script id="aecommerce-user">
                    var SB_AECOMMERCE_ACTIVE_USER = {user.id};
                    console.log({user.id})
                </Script>
            </>
        )
    }
    const router = useRouter()
    let routerName = router.route
    const [activeHome, setActiveHome] = useState(routerName === '/' ? 'active' : '');
    const [activeDelivery, setActiveDelivery] = useState((routerName === '/gui-hang' || routerName === '/gui-hang-thanh-cong') ? 'active' : '');
    const [activeOrder, setActiveOrder] = useState((routerName === '/quan-ly-don-hang' || routerName === '/chi-tiet-don-hang') ? 'active' : '');
    const [activeAccount, setActiveAccount] = useState(routerName === '/tai-khoan' ? 'active' : '');
    return (
        <>
            <div className="Group_mobile">
                <ul className="form">
                    <li className="">
                        <Link href="/">
                            <a className={ activeHome }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                     fill="currentColor">
                                    <path
                                        d="M19 22.7501H5C4.44772 22.7501 4 22.3024 4 21.7501V13.7501H2L11.292 4.45711C11.4796 4.26933 11.7341 4.16382 11.9995 4.16382C12.2649 4.16382 12.5194 4.26933 12.707 4.45711L22 13.7501H20V21.7501C20 22.3024 19.5523 22.7501 19 22.7501ZM10 15.7501H14V20.7501H18V12.5781L12 6.5781L6 12.5781V20.7501H10V15.7501Z"/>
                                </svg>
                                <span>Trang chủ</span>
                            </a>
                        </Link>

                    </li>
                    <li>
                        <Link href="/gui-hang">
                            <a title="" className={ activeDelivery }>
                                <svg style={{ fontSize: '18px' }} width="20" height="20" className="svg-inline--fa fa-paper-plane fa-w-16"
                                     aria-hidden="true" focusable="false" data-prefix="fa" data-icon="paper-plane"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                    <path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                                </svg>
                                <span>Gửi hàng</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/quan-ly-don-hang">
                            <a title="" className={ activeOrder }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-receipt-cutoff" viewBox="0 0 16 16">
                                    <path
                                        d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
                                    <path
                                        d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z"/>
                                </svg>
                                <span>Quản lý đơn hàng</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tai-khoan">
                            <a title="" className={ activeAccount }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                </svg>
                                <span>Tài khoản</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            {embed}
        </>
    )
}
