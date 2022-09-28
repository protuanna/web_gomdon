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
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
                    <link rel="shortcut icon" href="/favicon.png" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppContext.Provider>
        </SessionProvider>
    );
}
