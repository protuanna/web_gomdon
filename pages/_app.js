import Layout from '../components/layout'
import Head from "next/head";
import { SessionProvider } from "next-auth/react"
import '../styles/css/site/font.css'
import '../styles/css/site/reset.css'
import '../styles/css/site/styles.css'
import '../styles/css/site/main.css'
import '../styles/css/site/gen/index.css'
import '../styles/css/site/gen/guihang.css'
import '../styles/css/site/gen/content_page.css'
import '../styles/css/site/gen/quanlydonhang.css'
import '../styles/css/site/gen/taikhoan.css'
import '../styles/css/site/gen/page_detail.css'
import '../styles/css/site/gen/phieudoisoat.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
config.autoAddCss = false



import { useState } from "react";
import AppContext from "../AppContext";

export default function App({ Component,  pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <AppContext.Provider
                value={{
                    state: {

                    },
                    //setLanguageSelected: setLanguageSelected,
                }}
            >
                <Head>
                    <meta name="keywords" content=""/>
                    <meta name="description"
                              content="Gom Đơn Express giúp bạn  tối đa hóa doanh thu nếu bạn muốn một đối tác vận chuyển đáng tin cậy hỗ trợ xuất sắc ở mọi nơi bạn cần."/>
                    <meta property="og:url" content="https://www.gomdon.com.vn"/>
                    <meta property="og:title" content="GOMDON Express"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/images/logo-share.png"/>
                        <meta property="og:description"
                              content="Gom Đơn Express giúp bạn  tối đa hóa doanh thu nếu bạn muốn một đối tác vận chuyển đáng tin cậy hỗ trợ xuất sắc ở mọi nơi bạn cần."/>
                    <link rel="shortcut icon" href="/favicon.png" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        </SessionProvider>
    );
}
