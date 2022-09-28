import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { getCsrfToken } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"
import {useSession, signIn, signOut} from "next-auth/react"
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Login({csrfToken}) {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [username_error, setUsernameError] = useState("");
    const [password, setPassword] = useState("");
    const [password_error, setPasswordError] = useState("");
    console.log(status);
    if(status === 'authenticated'){
        //signOut()
        router.push('/')
        return ('Loading ...')
    }
    if(status === 'loading'){
        return ('Loading ...')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!username){
            setUsernameError('Vui lòng nhập thông tin tài khoản')
            return;
        }
        if(!password){
            setPasswordError('Vui lòng nhập mật khẩu')
            return;
        }
        let res = await signIn("username-login", { username, password , redirect:false});
        if(res.error){
            setUsernameError(res.error)
        }
    };

    return (
        <div id="main">
            <div className="container">
                <div className="contents-login">
                    <div className="head_col">
                        <div className="head_title">
                            {/*<Link href='/' >*/}
                                <a onClick={() => router.back()}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </a>
                            {/*</Link>*/}
                            <h3 className="title18">Đăng nhập</h3>
                            <span></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="ranle">
                            <div className="login_logo">
                                <div className="images">
                                    <Image src="/images/logo.png" alt="" width="100%" height="100%" layout="responsive" objectFit="contain"/>
                                </div>
                            </div>
                            <div className="pro_col9_shipping">
                                <div className="html_shipping_col">
                                    <form method="post" onSubmit={handleSubmit}>
                                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                        <div className="form-group">
                                            <div className="form-field">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Số điện thoại"
                                                    onChange={(e) => {setUsername(e.target.value);setUsernameError('')}}
                                                    value={username}
                                                />
                                            </div>
                                            <div className="label_error">{username_error}</div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-field">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Mật khẩu"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    value={password}
                                                />
                                            </div>
                                            <div className="label_error">{password_error}</div>
                                        </div>
                                        <button type="submit" title="" className="butt active mt-15">
                                            <span>Đăng nhập</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}
