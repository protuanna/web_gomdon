import Footer from "../components/footer"
import {useState, useEffect} from "react"
import Link from "next/link"
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faAngleLeft, faEdit} from "@fortawesome/free-solid-svg-icons";
import {order_detail} from "../lib/api_gomdon";
import {
    cancel_order,
    districts,
    print_order,
    provinces,
    update_address_order,
    update_order,
    wards
} from "../lib/ajax_gomdon";

export default function CapNhatDonHang({order}) {
    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }
    const [detail, setDetail] = useState(order.data)
    const [disabled, setDisabled] = useState(false)
    const [open, setOpen] = useState('');
    const [modalIsOpen, setIsOpen] = useState(0)
    const [htmlProvinceSend, setHtmlProvinceSend] = useState([])
    const [activeProvinceSend, setActiveProvinceSend] = useState(1)//1 : province; 2 : district; 3 : ward
    const [provinceId, setProvinceId] = useState(0)
    const [sourceName, setSourceName] = useState(detail.source_name)
    const [errorSourceName, setErrorSourceName] = useState('')
    const [sourcePhone, setSourcePhone] = useState(detail.source_phone)
    const [errorSourcePhone, setErrorSourcePhone] = useState('')
    const [sourceAddress, setSourceAddress] = useState(detail.source_address)
    const [errorSourceAddress, setErrorSourceAddress] = useState('')
    const [sourceProvince, setSourceProvince] = useState(detail.source_province)
    const [errorSourceProvince, setErrorSourceProvince] = useState('')
    const [sourceDistrict, setSourceDistrict] = useState(detail.source_district)
    const [sourceWard, setSourceWard] = useState(detail.source_ward)

    const [destName, setDestName] = useState(detail.dest_name)
    const [errorDestName, setErrorDestName] = useState('')
    const [destPhone, setDestPhone] = useState(detail.dest_phone)
    const [errorDestPhone, setErrorDestPhone] = useState('')
    const [destAddress, setDestAddress] = useState(detail.dest_address)
    const [errorDestAddress, setErrorDestAddress] = useState('')
    const [destProvince, setDestProvince] = useState(detail.dest_province)
    const [errorDestProvince, setErrorDestProvince] = useState('')
    const [destDistrict, setDestDistrict] = useState(detail.dest_district)
    const [destWard, setDestWard] = useState(detail.dest_ward)

    const [productPrice, setProductPrice] = useState(detail.product_price)
    const [collectAmount, setCollectAmount] = useState(detail.collect_amount)
    const [weight, setWeight] = useState((detail.weight/1000).toFixed(2))
    const [height, setHeight] = useState((detail.height/10).toFixed(0))
    const [length, setLength] = useState((detail.length/10).toFixed(0))
    const [width, setWidth] = useState((detail.width/10).toFixed(0))

    useEffect(() => {
        setErrorSourceName('')
    }, [sourceName])
    useEffect(() => {
        setErrorSourcePhone('')
    }, [sourcePhone])
    useEffect(() => {
        setErrorSourceProvince('')
    }, [sourceProvince, sourceWard, sourceDistrict])
    useEffect(() => {
        setErrorSourceAddress('')
    }, [sourceAddress])

    useEffect(() => {
        setErrorDestName('')
    }, [destName])
    useEffect(() => {
        setErrorDestPhone('')
    }, [destPhone])
    useEffect(() => {
        setErrorDestProvince('')
    }, [destProvince, destDistrict, destWard])
    useEffect(() => {
        setErrorDestAddress('')
    }, [destAddress])


    useEffect(() => {
        if (open === 'openSelectProvinceSend' || open === 'openSelectProvinceContactSend' || open === 'openSelectProvinceReceive') {
            openProvinceSend()
        }
    }, [open])

    function activeTabProvinceSend(tab) {
        if (activeProvinceSend === tab) {
            return 'col-lv1 active'
        } else {
            return 'col-lv1'
        }
    }

    function changeTabProvinceSend(tab) {
        if (tab === 1 && activeProvinceSend !== 1) {
            openProvinceSend()
        }
        if (tab === 2 && activeProvinceSend === 3) {
            openDistrictSend(provinceId)
        }
    }

    function openSelectProvinceSend() {
        if (open === 'openSelectProvinceSend') {
            openProvinceSend();
        } else {
            setOpen('openSelectProvinceSend')
        }
    }

    function openSelectProvinceReceive() {
        if (open === 'openSelectProvinceReceive') {
            openProvinceSend();
        } else {
            setOpen('openSelectProvinceReceive')
        }
    }

    async function openProvinceSend() {
        setIsOpen(3)
        setHtmlProvinceSend([])
        setActiveProvinceSend(1)
        let data = await provinces()
        if (data.result === true) {
            let provinces = data.data
            let html_province = []
            provinces.forEach(function (item, index) {
                html_province.push(
                    <a key={index} href="#!" onClick={() => selectProvinceSend(item)} title=""
                       className="address_single">
                        <p>
                            {item.name}
                        </p>
                    </a>
                )
            })
            setHtmlProvinceSend(html_province)
        }
    }

    function selectProvinceSend(province) {
        if (open === 'openSelectProvinceSend') {
            setSourceProvince(province.name)
            setProvinceId(province.id)
            setSourceDistrict('')
            setSourceWard('')
        }
        if (open === 'openSelectProvinceContactSend') {
            setContactProvince(province.name)
            setContactProvinceId(province.id)
            setProvinceId(province.id)
            setContactDistrict('')
            setContactDistrictId(0)
            setContactWard('')
            setContactWardId(0)
        }
        if (open === 'openSelectProvinceReceive') {
            setDestProvince(province.name)
            setProvinceId(province.id)
            setDestDistrict('')
            setDestWard('')
        }
        openDistrictSend(province.id)
    }

    async function openDistrictSend(province_id) {
        setHtmlProvinceSend([])
        setActiveProvinceSend(2)
        let data = await districts(province_id)
        if (data.result === true) {
            let html_province = []
            let districts = data.data
            districts.forEach(function (item, index) {
                html_province.push(
                    <a key={index} href="#!" onClick={() => selectDistrictSend(item)} title=""
                       className="address_single">
                        <p>
                            {item.name}
                        </p>
                    </a>
                )
            })
            setHtmlProvinceSend(html_province)
        }
    }

    function selectDistrictSend(district) {
        if (open === 'openSelectProvinceSend') {
            setSourceDistrict(district.name)
            setSourceWard('')
        }
        if (open === 'openSelectProvinceContactSend') {
            setContactDistrict(district.name)
            setContactDistrictId(district.id)
            setContactWard('')
            setContactWardId(0)
        }
        if (open === 'openSelectProvinceReceive') {
            setDestDistrict(district.name)
            setDestWard('')
        }
        openWardSend(district.id)
    }

    async function openWardSend(district_id) {
        setHtmlProvinceSend([])
        setActiveProvinceSend(3)
        let data = await wards(district_id)
        if (data.result === true) {
            let html_province = []
            let wards = data.data
            wards.forEach(function (item, index) {
                html_province.push(
                    <a key={index} href="#!" onClick={() => selectWardSend(item)} title=""
                       className="address_single">
                        <p>
                            {item.name}
                        </p>
                    </a>
                )
            })
            setHtmlProvinceSend(html_province)
        }
    }

    function selectWardSend(ward) {
        if (open === 'openSelectProvinceSend') {
            setSourceWard(ward.name)
            setIsOpen(0)
        }
        if (open === 'openSelectProvinceContactSend') {
            setContactWard(ward.name)
            setContactWardId(ward.id)
            setIsOpen(2)
        }
        if (open === 'openSelectProvinceReceive') {
            setDestWard(ward.name)
            setIsOpen(0)
        }
    }

    async function updateOrder(){
        if (disabled === false) {
            setDisabled(true)
            let data = {
                collect_amount: collectAmount ? collectAmount : 0,
                weight: weight ? weight * 1000 : 0,
                height: height ? height * 10 : 0,
                length: length ? length * 10 : 0,
                width: width ? width * 10 : 0,
                service_id: 12491,
            }
            let res = await update_order(detail.id, data)
            if (res.result === true) {
                alert('Cập nhật đơn hàng thành công')
            } else {
                alert(res.message)
            }
            setDisabled(false)
        }
    }

    async function updateAddress(type) {
        if (disabled === false) {
            setDisabled(true)
            let data = null;
            let error = 1
            if (type === 1) {
                error = 0
                if (sourceName.trim() === '') {
                    error = 1
                    setErrorSourceName('Vui lòng nhập tên người gửi')
                }
                if (sourcePhone.trim() === '') {
                    error = 1
                    setErrorSourcePhone('Vui lòng nhập số điện thoại người gửi')
                }
                if (sourceProvince.trim() === '' || sourceDistrict.trim() === '' || sourceWard.trim() === '') {
                    error = 1
                    setErrorSourceProvince('Vui lòng nhập đầy đủ địa chỉ')
                }
                if (sourceAddress.trim() === '') {
                    error = 1
                    setErrorSourceAddress('Vui lòng nhập chi tiết địa chỉ')
                }
                data = {
                    name: sourceName,
                    phone: sourcePhone,
                    address: sourceAddress,
                    province: sourceProvince,
                    district: sourceDistrict,
                    ward: sourceWard,
                    address_type: 1
                }
            }
            if (type === 2) {
                error = 0
                if (destName.trim() === '') {
                    error = 1
                    setErrorDestName('Vui lòng nhập tên')
                }
                if (destPhone.trim() === '') {
                    error = 1
                    setErrorDestPhone('Vui lòng nhập số điện thoại')
                }
                if (destProvince.trim() === '' || destDistrict.trim() === '' || destWard.trim() === '') {
                    error = 1
                    setErrorDestProvince('Vui lòng nhập đầy đủ địa chỉ')
                }
                if (destAddress.trim() === '') {
                    error = 1
                    setErrorDestAddress('Vui lòng nhập chi tiết địa chỉ')
                }
                data = {
                    name: destName,
                    phone: destPhone,
                    address: destAddress,
                    province: destProvince,
                    district: destDistrict,
                    ward: destWard,
                    address_type: 2
                }
            }
            if (error === 0) {
                let res = await update_address_order(detail.id, data)
                if (res.result === true) {
                    alert('Cập nhật thông tin địa chỉ thành công')
                } else {
                    alert(res.message)
                }
            }
            setDisabled(false)
        }
    }

    function formatMoney(number) {
        if (number === '' || number === 0) {
            return ''
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function replaceString(value, max = 0) {
        value = value.replace(/\D/g, '')
        value = value.replaceAll('.', '')
        if (parseInt(value) === 0) {
            value = '';
        }
        if (value !== '' && max > 0 && max < value) {
            value = max
        }
        return value
    }

    if (detail && detail.status === 1) {
        if (modalIsOpen === 0) {
            return (
                <div id="main">
                    <div className="container">
                        <div className="contents">
                            <div className="head_col">
                                <div className="head_title">
                                    <a href="#" onClick={() => router.back()}>
                                        <FontAwesomeIcon icon={faAngleLeft}/>
                                    </a>
                                    <h3 className="title18">Cập nhật đơn hàng</h3>
                                    <span></span>
                                </div>
                            </div>
                            <div className="html_add_address">
                                <div className="ranle update_int">
                                    <h3 className="title20 title_int">Người gửi</h3>
                                    <form action="">
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Họ tên <span>:</span></h3>
                                            <input type="text" value={sourceName}
                                                   onChange={(e) => setSourceName(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorSourceName}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Số điện thoại <span>:</span></h3>
                                            <input type="text" value={sourcePhone}
                                                   onChange={(e) => setSourcePhone(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorSourcePhone}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Khu vực chỉ định <span>:</span></h3>
                                            <input type="text"
                                                   value={(sourceProvince || sourceDistrict || sourceWard) && (sourceProvince + ' ' + sourceDistrict + ' ' + sourceWard)}
                                                   onChange={(e) => e.preventDefault()}
                                                   onClick={() => openSelectProvinceSend()}/>
                                        </div>
                                        <div className="label_error">{errorSourceProvince}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Địa chỉ chi tiết<span>:</span></h3>
                                            <input type="text" value={sourceAddress}
                                                   onChange={(e) => setSourceAddress(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorSourceAddress}</div>
                                    </form>
                                    <button className={disabled ? "butt active disabled" : "butt active"}
                                            onClick={() => updateAddress(1)}>
                                        <span>Cập nhật người gửi</span>
                                    </button>
                                </div>
                                <div className="ranle update_int">
                                    <h3 className="title20 title_int">Người nhận</h3>
                                    <form action="">
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Họ tên <span>:</span></h3>
                                            <input type="text" value={destName}
                                                   onChange={(e) => setDestName(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorDestName}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Số điện thoại <span>:</span></h3>
                                            <input type="text" value={destPhone}
                                                   onChange={(e) => setDestPhone(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorDestPhone}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Khu vực chỉ định <span>:</span></h3>
                                            <input type="text"
                                                   value={(destProvince || destDistrict || destWard) && (destProvince + ' ' + destDistrict + ' ' + destWard)}
                                                   onChange={(e) => e.preventDefault()}
                                                   onClick={() => openSelectProvinceReceive()}
                                            />
                                        </div>
                                        <div className="label_error">{errorDestProvince}</div>
                                        <div className="form-field">
                                            <h3 className="title16 title_form">Địa chỉ chi tiết<span>:</span></h3>
                                            <input type="text" value={destAddress}
                                                   onChange={(e) => setDestAddress(e.target.value)}/>
                                        </div>
                                        <div className="label_error">{errorDestAddress}</div>
                                    </form>
                                    <button className={disabled ? "butt active disabled" : "butt active"}
                                            onClick={() => updateAddress(2)}>
                                        <span>Cập nhật người nhận</span>
                                    </button>
                                </div>
                                <div className="ranle int_fact">
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Số đặt hàng</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{detail.id}</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Thời gian tạo đơn</p>
                                        </div>
                                        <div className="item-field">
                                            <div className="flex-item">
                                                <p className="title16">27/09/2022</p>
                                                <p className="title16">10:31:37</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Loại kiện hàng phục vụ</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">Bảo hiểm hàng hóa {detail.product_price} đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field form-wave">
                                        <h3 className="title16 title_form">Số tiền COD<span>:</span></h3>
                                        <span>
                                         <input type="text" style={{textAlign: 'right'}}
                                             /*value={}*/
                                                placeholder="1 - 5.000.000"
                                                value={formatMoney(collectAmount, 0)}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                                onChange={(e) => setCollectAmount(replaceString(e.target.value, 5000000))}
                                         />
                                            <span className="title16 "> đ</span>
                                    </span>

                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phương thức lấy hàng</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{detail.pickup_type === 2 ? "Bưu tá tới lấy" : "Tới bưu cục gửi"}</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phương thức vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">Giao hàng tiết kiệm</p>
                                        </div>
                                    </div>
                                    <div className="form-field form-wave">
                                        <h3 className="title16 title_form">Trọng lượng<span>:</span></h3>
                                        <span>
                                            <input type="number" style={{textAlign: 'right'}}
                                                   value={weight}
                                                   placeholder="0.01 - 80"
                                                   min={0.01}
                                                   max={80}
                                                   onChange={(e) => setWeight((e.target.value < 80) ? e.target.value : 80)}
                                            />
                                        <span className="title16 "> kg</span>
                                        </span>

                                    </div>
                                    <div className="form-field form-wave">
                                        <h3 className="title16 title_form">Dài<span>:</span></h3>
                                        <span>
                                            <input type="text" style={{textAlign: 'right'}}
                                                   value={length}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setLength(replaceString(e.target.value, 150))}
                                            />
                                            <span className="title16 "> cm</span>
                                        </span>
                                    </div>
                                    <div className="form-field form-wave">
                                        <h3 className="title16 title_form">Rộng<span>:</span></h3>
                                        <span>
                                            <input type="text" style={{textAlign: 'right'}}
                                                   value={width}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setWidth(replaceString(e.target.value, 150))}
                                            />
                                            <span className="title16 "> cm</span>
                                        </span>

                                    </div>
                                    <div className="form-field form-wave">
                                        <h3 className="title16 title_form">Cao<span>:</span></h3>
                                        <span>
                                            <input type="text" style={{textAlign: 'right'}}
                                                   value={height}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setHeight(replaceString(e.target.value, 150))}
                                            />
                                            <span className="title16 "> cm</span>
                                        </span>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Chú thích</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{detail.note}</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phí thu hộ</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{formatMoney(detail.customer_cod_fee)} đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phí bảo hiểm</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{formatMoney(detail.customer_insurance_fee)} đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Phí vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{formatMoney(detail.customer_delivery_fee)} đ</p>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Tổng cước phí vận chuyển</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">{formatMoney(detail.customer_total_fee)} đ</p>
                                        </div>
                                    </div>
                                    {/*<div className="form-field">
                                        <div className="item-field">
                                            <p className="title16">Tạm tính</p>
                                        </div>
                                        <div className="item-field">
                                            <p className="title16">24.000 đ</p>
                                        </div>
                                    </div>*/}
                                    <button className={disabled ? "butt active disabled" : "butt active"}
                                            onClick={() => updateOrder()}
                                    >
                                        <span>Cập nhật đơn hàng</span>
                                    </button>
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            )
        }
        if (modalIsOpen === 3) { // chọn địa chỉ người gửi
            return (
                <div id="main">
                    <div className="container">
                        <div className="contents">
                            <div className="head_col">
                                <div className="head_title">
                                    <a href="#!" onClick={() => setIsOpen(0)}>
                                        <FontAwesomeIcon icon={faAngleLeft}/>
                                    </a>
                                    <h3 className="title18">Lựa chọn địa chỉ</h3>
                                    <span></span>
                                </div>
                                {/*<div className="search" id="search">
                                    <form action="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                             viewBox="0 0 18 18"
                                             fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"/>
                                        </svg>
                                        <input type="text" placeholder="Nhập từ khóa tìm kiếm" defaultValue={''}/>
                                    </form>
                                </div>*/}
                                <div className="link_list">
                                    <a href="#!" title="" className={activeTabProvinceSend(1)}
                                       onClick={() => changeTabProvinceSend(1)}>
                                        <span className="title16">TỈNH/THÀNH</span>
                                    </a>
                                    <a href="#!" title="" className={activeTabProvinceSend(2)}
                                       onClick={() => changeTabProvinceSend(2)}>
                                        <span className="title16">QUẬN/HUYỆN</span>
                                    </a>
                                    <a href="#!" title="" className={activeTabProvinceSend(3)}
                                       onClick={() => changeTabProvinceSend(3)}>
                                        <span className="title16">PHƯỜNG/XÃ</span>
                                    </a>
                                </div>
                            </div>
                            <div className="html_guest_col12">
                                <div className="list_address">
                                    {htmlProvinceSend}
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            )
        }
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
            order: await order_detail(context.req, context.res, context.query.id),
        },
    }
}
