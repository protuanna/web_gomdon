import Footer from "../components/footer"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faAngleLeft, faEdit} from "@fortawesome/free-solid-svg-icons";
import {detail_fee} from "../lib/api_gomdon";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import {useState, useEffect} from "react"

export default function ChiTietDonHang({data}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    let pdf = data.data.url_file;
    console.log(pdf)
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div id="main">
            <div className="container">
                <div className="contents">
                    <div className="head_col">
                        <div className="head_title">
                            <a href="#" onClick={() => router.back()}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </a>
                            <h3 className="title18">Chi tiết phí vận chuyển</h3>
                            <span></span>
                        </div>
                    </div>
                    <div className="html_single_order" style={{height:'100vh',marginBottom:'0px'}}>
                        <embed
                            src={pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                            type="application/pdf"
                            frameBorder="0px"
                            scrolling="none"
                            height="100vh"
                            width="100%"
                            style={{ height:'100%'}}
                        ></embed>
                        {/*<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber}/>
                        </Document>*/}
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
            data:await detail_fee(context.req, context.res),
        },
    }
}
