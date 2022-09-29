import Footer from "../components/footer"
import Loading from "../components/loading"
import {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAddressCard, faAngleLeft, faThumbTack, faPlus} from '@fortawesome/free-solid-svg-icons'
import {address, createContact, createOrderDelivery, districts, feeShop, provinces, wards} from '../lib/ajax_gomdon'
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";


export default function GuiHang() {

    const {data: session, status} = useSession()
    const router = useRouter()
    if (status === 'unauthenticated') {
        router.push('/login')
    }

    const [type, setType] = useState(1)
    const [step, setStep] = useState(1)
    const [totalAddressSend, setTotalAddressSend] = useState('')
    const [htmlAddressSend, setHtmlAddressSend] = useState([])
    const [htmlProvinceSend, setHtmlProvinceSend] = useState([])
    const [activeProvinceSend, setActiveProvinceSend] = useState(1)//1 : province; 2 : district; 3 : ward
    const [modalIsOpen, setIsOpen] = useState(0)// 1 : modal address ; 2 : modal create address ; 3 : modal province
    const [action, setAction] = useState('');
    const [open, setOpen] = useState('');
    const [policy, setPolicy] = useState(0);


    const [serviceId, setServiceId] = useState(12491)
    const [pickupType, setPickupType] = useState(2)
    const [productName, setProductName] = useState('')
    const [errorProductName, setErrorProductName] = useState('')
    const [productNumber, setProductNumber] = useState(1)
    const [productPrice, setProductPrice] = useState('')
    const [collectAmount, setCollectAmount] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [fee, setFee] = useState('')
    const [note, setNote] = useState('')
    const [disabled, setDisabled] = useState(false)

    const [sourceName, setSourceName] = useState('')
    const [errorSourceName, setErrorSourceName] = useState('')
    const [sourcePhone, setSourcePhone] = useState('')
    const [errorSourcePhone, setErrorSourcePhone] = useState('')
    const [sourceAddress, setSourceAddress] = useState('')
    const [errorSourceAddress, setErrorSourceAddress] = useState('')
    const [sourceProvince, setSourceProvince] = useState('')
    const [errorSourceProvince, setErrorSourceProvince] = useState('')
    const [provinceId, setProvinceId] = useState(0)
    const [sourceDistrict, setSourceDistrict] = useState('')
    const [sourceWard, setSourceWard] = useState('')

    const [destName, setDestName] = useState('')
    const [errorDestName, setErrorDestName] = useState('')
    const [destPhone, setDestPhone] = useState('')
    const [errorDestPhone, setErrorDestPhone] = useState('')
    const [destAddress, setDestAddress] = useState('')
    const [errorDestAddress, setErrorDestAddress] = useState('')
    const [destProvince, setDestProvince] = useState('')
    const [errorDestProvince, setErrorDestProvince] = useState('')
    const [destDistrict, setDestDistrict] = useState('')
    const [destWard, setDestWard] = useState('')

    const [contactName, setContactName] = useState('')
    const [errorContactName, setErrorContactName] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [errorContactPhone, setErrorContactPhone] = useState('')
    const [contactAddress, setContactAddress] = useState('')
    const [errorContactAddress, setErrorContactAddress] = useState('')
    const [contactProvinceId, setContactProvinceId] = useState(0)
    const [contactProvince, setContactProvince] = useState('')
    const [errorContactProvince, setErrorContactProvince] = useState('')
    const [contactDistrictId, setContactDistrictId] = useState(0)
    const [contactDistrict, setContactDistrict] = useState('')
    const [contactWardId, setContactWardId] = useState(0)
    const [contactWard, setContactWard] = useState('')
    const [contactDefault, setContactDefault] = useState(0)

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
        setErrorContactName('')
    }, [contactName])
    useEffect(() => {
        setErrorContactPhone('')
    }, [contactPhone])
    useEffect(() => {
        setErrorContactProvince('')
    }, [contactProvince, contactDistrict, contactWard])
    useEffect(() => {
        setErrorContactAddress('')
    }, [contactAddress])

    useEffect(() => {
        setErrorProductName('')
    }, [productName])

    let title = ''
    switch (type) {
        case 1:
            title = 'Người gửi'
            break
        case 2:
            title = 'Thông tin người mua'
            break
        case 3:
            title = 'Thông tin shop'
            break
    }

    let title_two = ''
    switch (type) {
        case 1:
            title_two = 'Người nhận'
            break
        case 3:
            title_two = 'Thông tin người mua'
            break
        case 2:
            title_two = 'Thông tin shop'
            break
    }
    /*useEffect(() => {
        changeAddress('')
    }, [goStep]);*/
    /*function changeAddressReceive(){

        changeAddress('')
    }*/
    useEffect(() => {
        if (action === 'openAddressSend' || action === 'openAddressReceive') {
            changeAddressSend()
        }
    }, [action])

    useEffect(() => {
        if (open === 'openSelectProvinceSend' || open === 'openSelectProvinceContactSend' || open === 'openSelectProvinceReceive') {
            openProvinceSend()
        }
    }, [open])

    function openAddressSend() {
        if (action === 'openAddressSend') {
            changeAddressSend()
        } else {
            setAction('openAddressSend')
        }
    }

    function openAddressReceive() {
        if (action === 'openAddressReceive') {
            changeAddressSend()
        } else {
            setAction('openAddressReceive')
        }
    }

    function changeAddressSend() {
        loadAddressSend('')
        setIsOpen(1);
    }

    async function loadAddressSend(search) {
        setHtmlAddressSend(
            <Loading/>
        )
        setTotalAddressSend('')
        const delayDebounceFn = setTimeout(() => {
            renderAddressSend(search)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }

    async function renderAddressSend(search) {
        let total = 0
        let html_address = []
        let contact_type = (((type === 1 || type === 3) && action === 'openAddressSend') || type === 2 && action === 'openAddressReceive') ? 'send' : 'receive';
        let data = await address(contact_type, search, 1)
        if (data.result === true) {
            let address = data.data
            total = data.meta.total
            address.forEach(function (item, index) {
                html_address.push(
                    <a href="#!" key={index}  onClick={() => selectAddressSend(item)} title=""
                       className="guest_single">
                        <div className="guesting">
                            {item.set_default === 1 &&
                            <div className="icon-pushpin">
                                <FontAwesomeIcon icon={faThumbTack}/>
                            </div>
                            }
                            <div className="flex_guest">
                                <div className="text-guest name title16">{item.name}</div>
                                <div className="text-guest phone title16">{item.phone}</div>
                            </div>
                            <h5 className="title16">{item.address}</h5>
                            <h5 className="title16">{item.province_name + ' '}{item.district_name + ' '}{item.ward_name}</h5>
                        </div>
                    </a>
                )
            })
        }
        setHtmlAddressSend(html_address)
        setTotalAddressSend(total)
        //setIsOpen(1)
    }

    function selectAddressSend(item) {
        if (action === 'openAddressSend') {
            setSourceName(item.name)
            setSourcePhone(item.phone)
            setSourceAddress(item.address)
            setSourceProvince(item.province_name)
            setSourceDistrict(item.district_name)
            setSourceWard(item.ward_name)
        }
        if (action === 'openAddressReceive') {
            setDestName(item.name)
            setDestPhone(item.phone)
            setDestAddress(item.address)
            setDestProvince(item.province_name)
            setDestDistrict(item.district_name)
            setDestWard(item.ward_name)
        }
        setIsOpen(0)
    }

    function openNewContactSend() {
        setIsOpen(2)
        setContactName('')
        setErrorContactName('')
        setContactPhone('')
        setErrorContactPhone('')
        setContactProvince('')
        setContactProvinceId(0)
        setErrorContactProvince('')
        setContactDistrict('')
        setContactDistrictId(0)
        setContactWard('')
        setContactWardId(0)
        setContactAddress('')
        setErrorContactAddress('')
    }

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

    async function openProvinceContact() {
        if (open === 'openSelectProvinceContactSend') {
            openProvinceSend()
        } else {
            setOpen('openSelectProvinceContactSend')
        }
    }

    async function addNewContactSend() {
        if(disabled === false){
            setDisabled(true)
            let error = 0
            if (contactName.trim() === '') {
                error = 1
                setErrorContactName('Vui lòng nhập tên')
            }
            if (contactPhone.trim() === '') {
                error = 1
                setErrorContactPhone('Vui lòng nhập số điện thoại')
            }
            if (contactProvince.trim() === '' || contactDistrict.trim() === '' || contactWard.trim() === '') {
                error = 1
                setErrorContactProvince('Vui lòng nhập đầy đủ địa chỉ')
            }
            if (contactAddress.trim() === '') {
                error = 1
                setErrorContactAddress('Vui lòng nhập chi tiết địa chỉ')
            }
            if (error === 0) {
                let contact_type = (((type === 1 || type === 3) && action === 'openAddressSend') || type === 2 && action === 'openAddressReceive') ? 'send' : 'receive';
                let data = {
                    name: contactName,
                    phone: contactPhone,
                    address: contactAddress,
                    province_id: contactProvinceId,
                    district_id: contactDistrictId,
                    ward_id: contactWardId,
                    type: contact_type,
                    set_default: contactDefault
                }
                let result = await createContact(data)
                if (result.result === true) {
                    if (action === 'openAddressSend') {
                        openAddressSend()
                    }
                    if (action === 'openAddressReceive') {
                        openAddressReceive()
                    }
                }

            }
            setDisabled(false)
        }

    }

    function nextStepOne() {
        let error = 0
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
        if (error === 0) {
            setStep(2)
        }
    }

    function nextStepTwo() {
        let error = 0
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
        if (error === 0) {
            setStep(3)
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

    useEffect(() => {
        loadFeeShop()
    }, [productPrice, collectAmount, weight, height, width, length])

    function loadFeeShop() {
        setFee('-')
        const delayFeeFn = setTimeout(() => {
            getFeeShop()
        }, 500)
        return () => clearTimeout(delayFeeFn)
    }

    async function getFeeShop() {
        let data = {
            collect_amount: collectAmount ? collectAmount : 0,
            product_price: productPrice ? productPrice : 0,
            weight: weight ? weight * 1000 : 0,
            height: height ? height * 10 : 0,
            length: length ? length * 10 : 0,
            width: width ? width * 10 : 0
        }
        console.log(data)
        let res = await feeShop(data);
        if (res.result === true) {
            setFee(res.data)
        } else {
            setFee('-')
        }
    }

    async function createOrder() {
        console.log(disabled)
        if (disabled === false) {
            setDisabled(true)
            let error = 0
            if (productName.trim() === '') {
                error = 1
                setErrorProductName('Vui lòng nhập tên sản phẩm')
            }
            if (!policy) {
                Swal.fire('Vui lòng chấp nhận điều khoản của chúng tôi')
                error = 1;
            }
            if (error === 0) {
                let data = {
                    product_name: productName,
                    product_number: productNumber,
                    product_price: productPrice ? productPrice : 0,
                    collect_amount: collectAmount ? collectAmount : 0,
                    weight: weight ? weight * 1000 : 0,
                    height: height ? height * 10 : 0,
                    length: length ? length * 10 : 0,
                    width: width ? width * 10 : 0,
                    type: type,
                    pickup_type: pickupType,
                    service_id: serviceId,
                    note: note,
                    source_name: sourceName,
                    source_phone: sourcePhone,
                    source_province: sourceProvince,
                    source_district: sourceDistrict,
                    source_ward: sourceWard,
                    source_address: sourceAddress,
                    dest_name: destName,
                    dest_phone: destPhone,
                    dest_province: destProvince,
                    dest_district: destDistrict,
                    dest_ward: destWard,
                    dest_address: destAddress
                }
                let res = await createOrderDelivery(data)
                if(res.result === true){
                    let or = res.data
                    router.push({
                        pathname: '/gui-hang-thanh-cong',
                        query:{id:or.id}
                    })
                }else {
                    Swal.fire(res.message)
                    setDisabled(false)
                }
            }else {
                setDisabled(false)
            }
        }
    }

    let content = ''
    let content_sum = ''
    if (step === 1) {
        content = (
            <div className="content">
                <div className="ranle">
                    <div className="pro_col9_shipping">
                        <div className="html_shipping_col">
                            <div className="titling">
                                <div className="sender">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" className="bi bi-geo-alt-fill"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    <span className="title16">{title}</span>
                                </div>
                                <div className="steps">
                                    <p className="title16">Bước <span className="title18">1</span> /3</p>
                                    <a href="#!" onClick={() => openAddressSend()}>
                                        <FontAwesomeIcon icon={faAddressCard}/>
                                    </a>
                                </div>
                            </div>
                            <form action="">
                                <div className="form-field">
                                    <input type="text" value={sourcePhone} placeholder="Số điện thoại *"
                                           onChange={(e) => setSourcePhone(e.target.value)}/>
                                </div>
                                <div className="label_error">{errorSourcePhone}</div>
                                <div className="form-field">
                                    <input type="text" value={sourceName} placeholder="Họ và tên *"
                                           onChange={(e) => setSourceName(e.target.value)}/>
                                </div>
                                <div className="label_error">{errorSourceName}</div>
                                <div className="form-field">
                                    <input type="text"
                                           value={(sourceProvince || sourceDistrict || sourceWard) && (sourceProvince + ' ' + sourceDistrict + ' ' + sourceWard)}
                                           onChange={(e) => e.preventDefault()}
                                           placeholder="Địa chỉ *" onClick={() => openSelectProvinceSend()}/>
                                </div>
                                <div className="label_error">{errorSourceProvince}</div>
                                <div className="form-field">
                                    <input type="text" value={sourceAddress} placeholder="Chi tiết địa chỉ *"
                                           onChange={(e) => setSourceAddress(e.target.value)}/>
                                </div>
                                <div className="label_error">{errorSourceAddress}</div>
                            </form>
                            <a href="#!" title="" className="butt active" onClick={() => nextStepOne()}>
                                <span>Tiếp tục</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (step === 2) {
        content = (
            <div className="content">
                <div className="ranle">
                    <div className="pro_col9_shipping">
                        <div className="destination">
                            <div className="des">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <p className="title16">Đích</p>
                            </div>
                            <div className="information" style={{cursor: 'pointer'}} onClick={() => setStep(1)}>
                                <div className="info-top">
                                    <div className="info-text name">{sourceName}</div>
                                    <div className="info-text phone">{sourcePhone}</div>
                                </div>
                                <div className="info-text location_details">{sourceAddress}</div>
                                <div
                                    className="info-text location">{(sourceProvince || sourceDistrict || sourceWard) && (sourceProvince + ' ' + sourceDistrict + ' ' + sourceWard)}</div>
                            </div>
                            <div className="address-card" style={{cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={faAddressCard} onClick={() => openAddressSend()}/>
                            </div>
                        </div>
                        <div className="html_shipping_col">
                            <div className="titling">
                                <div className="receiver">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                    </svg>
                                    <span className="title16">{title_two}</span>
                                </div>
                                <div className="steps">
                                    <p className="title16">Bước <span className="title18">2</span> /3</p>
                                    <FontAwesomeIcon icon={faAddressCard} style={{cursor: 'pointer'}}
                                                     onClick={() => openAddressReceive()}/>
                                </div>
                            </div>
                            <form action="">
                                <div className="form-field">
                                    <input type="text" value={destPhone} placeholder="Số điện thoại *"
                                           onChange={(e) => setDestPhone(e.target.value)}/>
                                </div>
                                <div className="label_error">{errorDestPhone}</div>
                                <div className="form-field">
                                    <input type="text" value={destName} onChange={(e) => setDestName(e.target.value)}
                                           placeholder="Họ và tên *"/>
                                </div>
                                <div className="label_error">{errorDestName}</div>
                                <div className="form-field">
                                    <input type="text"
                                           value={(destProvince || destDistrict || destWard) && (destProvince + ' ' + destDistrict + ' ' + destWard)}
                                           placeholder="Địa chỉ *" onChange={(e) => e.preventDefault()} onClick={() => openSelectProvinceReceive()}/>
                                </div>
                                <div className="label_error">{errorDestProvince}</div>
                                <div className="form-field">
                                    <input type="text" value={destAddress}
                                           onChange={(e) => setDestAddress(e.target.value)}
                                           placeholder="Chi tiết địa chỉ *"/>
                                </div>
                                <div className="label_error">{errorDestAddress}</div>
                            </form>
                            <a href="#!" onClick={() => nextStepTwo()} title="" className="butt active">
                                <span>Tiếp tục</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (step === 3) {
        content = (
            <div className="content content_2">
                <div className="ranle">
                    <div className="pro_col9_shipping">
                        <div className="destination">
                            <div className="des">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <p className="title16">Đích</p>
                            </div>
                            <div className="information" style={{cursor: 'pointer'}} onClick={() => setStep(1)}>
                                <div className="info-top">
                                    <div className="info-text name">{sourceName}</div>
                                    <div className="info-text phone">{sourcePhone}</div>
                                </div>
                                <div className="info-text location_details">{sourceAddress}</div>
                                <div
                                    className="info-text location">{(sourceProvince || sourceDistrict || sourceWard) && (sourceProvince + ' ' + sourceDistrict + ' ' + sourceWard)}</div>
                            </div>
                            <div className="address-card" style={{cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={faAddressCard} onClick={() => openAddressSend()}/>
                            </div>
                        </div>
                        <div className="destination">
                            <div className="sender">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                <p className="title16">Nhận</p>
                            </div>
                            <div className="information" style={{cursor: 'pointer'}} onClick={() => setStep(2)}>
                                <div className="info-top">
                                    <div className="info-text name">{destName}</div>
                                    <div className="info-text phone">{destPhone}</div>
                                </div>
                                <div className="info-text location_details">{destAddress}</div>
                                <div
                                    className="info-text location">{(destProvince || destDistrict || destWard) && (destProvince + ' ' + destDistrict + ' ' + destWard)}</div>
                            </div>
                            <div className="address-card" style={{cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={faAddressCard} onClick={() => openAddressReceive()}/>
                            </div>
                        </div>
                        <div className="html_shipping_col">
                            <div className="titling">
                                <div className="receiver">
                                    <span className="title16">Phương thức vận chuyển</span>
                                </div>
                                <div className="steps">
                                    <p className="title16">Bước <span className="title18">3</span> /3</p>
                                    {/*<i className='far fa-address-card'></i>*/}
                                </div>
                            </div>
                            <div className="type_business">
                                <p className="title16 tingle">Phương thức giao hàng</p>
                                <ul className="extra">
                                    <li>
                                        <label>
                                            <input
                                                className="Dashboard"
                                                name="service_id"
                                                type="radio"
                                                value="12491"
                                                checked={serviceId === 12491}
                                                onChange={() => setServiceId(12491)}
                                            />
                                            <div className="item-dm">
                                                <p className="title16">Tiết kiệm</p>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="type_business">
                                <p className="title16 tingle">Phương thức lấy hàng</p>
                                <ul className="extra">
                                    <li>
                                        <label>
                                            <input className="Dashboard"
                                                   name="pickup_type"
                                                   type="radio"
                                                   value="2"
                                                   checked={pickupType === 2}
                                                   onChange={() => setPickupType(2)}
                                            />
                                            <div className="item-dm">
                                                <p className="title16">Bưu tá tới lấy</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input className="Dashboard"
                                                   name="pickup_type"
                                                   type="radio"
                                                   value="1"
                                                   checked={pickupType === 1}
                                                   onChange={() => setPickupType(1)}
                                            />
                                            <div className="item-dm">
                                                <p className="title16">Tới bưu cục gửi</p>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="form_product">
                                <form action="">
                                    <div className="form-field">
                                        <input type="text" value={productName} placeholder="Tên sản phẩm *"
                                               onChange={(e) => setProductName(e.target.value)}/>
                                    </div>
                                    <div className="label_error">{errorProductName}</div>
                                    <div className="form-field">
                                        <div className="title_form title16">Bảo hiểm hàng hóa:</div>
                                        <div className="item_unit">
                                            <input type="text" value={formatMoney(productPrice, 0)}
                                                   placeholder="1 - 5.000.000"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setProductPrice(replaceString(e.target.value, 5000000))}
                                            />
                                            <div className="unit title16">đ</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="title_form title16">Số tiền COD:</div>
                                        <div className="item_unit">
                                            <input type="text" value={formatMoney(collectAmount, 0)}
                                                   placeholder="1 - 5.000.000"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setCollectAmount(replaceString(e.target.value, 5000000))}
                                            />
                                            <div className="unit title16">đ</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="title_form title16">Trọng lượng:</div>
                                        <div className="item_unit">
                                            <input type="number"
                                                   value={weight}
                                                   placeholder="0.01 - 80"
                                                   min={0.01}
                                                   max={80}
                                                /*onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}*/
                                                   onChange={(e) => setWeight((e.target.value < 80) ? e.target.value : 80)}
                                            />
                                            <div className="unit title16">kg</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="title_form title16">Dài:</div>
                                        <div className="item_unit">
                                            <input type="text"
                                                   value={length}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setLength(replaceString(e.target.value, 150))}
                                            />
                                            <div className="unit title16">cm</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="title_form title16">Rộng:</div>
                                        <div className="item_unit">
                                            <input type="text"
                                                   value={width}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setWidth(replaceString(e.target.value, 150))}
                                            />
                                            <div className="unit title16">cm</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <div className="title_form title16">Cao:</div>
                                        <div className="item_unit">
                                            <input type="text"
                                                   value={height}
                                                   placeholder="0 - 150"
                                                   onKeyPress={(event) => {
                                                       if (!/[0-9]/.test(event.key)) {
                                                           event.preventDefault();
                                                       }
                                                   }}
                                                   onChange={(e) => setHeight(replaceString(e.target.value, 150))}
                                            />
                                            <div className="unit title16">cm</div>
                                        </div>
                                    </div>
                                    <div className="form-field">
                                        <textarea value={note} onChange={(e) => setNote(e.target.value)} cols="30"
                                                  rows="3" placeholder="Chú thích"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        content_sum = (
            <div className="Group_mobile" style={{bottom: '70px'}}>
                <div className="total_amount">
                    <input id="show_comment_form" className="" name="" type="checkbox" defaultValue={''}/>
                    <div className="price_list">
                        <ul>
                            <li>
                                <p className="text-disi title16">Tạm tính</p>
                                <p className="text-price title18 bold">{formatMoney(fee)} <span>đ</span></p>
                            </li>
                            <li>
                                <p className="text-disi title16">Tổng cước vận chuyển</p>
                                <p className="text-price title18">{formatMoney(fee)} <span>đ</span></p>
                            </li>
                            <li>
                                <p className="text-disi title16">Thuế VAT <span>[Giá đã bao gồm thuế]</span>
                                </p>
                                <p className="text-price title18">0 <span>đ</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className="provisional">
                        <label>
                            <input className="Dashboard"
                                   name="clothing"
                                   type="checkbox"
                                   defaultChecked={policy}
                                   onChange={() => setPolicy((policy === 1) ? 0 : 1)}
                            />
                            <div className="item-dm">
                                <p className="title16">Tôi đồng ý điều khoản người
                                    dùng</p>
                            </div>
                        </label>
                        <div className="synthetic">
                            <div className="item-visi">
                                <div className="text-visi">
                                    <div className="flex-visi title16">Tạm tính: <p>{formatMoney(fee)} <span>đ</span>
                                    </p>
                                    </div>
                                    <label htmlFor="show_comment_form">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-caret-up-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                        </svg>
                                    </label>
                                </div>
                                <p className="text-ship">Phí vận chuyển người gửi trả sẽ trừ tiền COD</p>
                            </div>
                            <button className={disabled ? "butt active disabled" : "butt active"}
                                    onClick={() => createOrder()}>
                                <span>Gửi</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (modalIsOpen === 0) {
        return (
            <div id="main">
                <div className="container">
                    <div className="contents">
                        <div className="head_col">
                            <div className="head_title">
                                <span></span>
                                <h3 className="title18">Gửi hàng</h3>
                                <span></span>
                            </div>
                            <div className="type_business">
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <span className="title16 tingle">Loại đơn theo nghiệp vụ</span>
                                    <Link href="/chi-tiet-phi-van-chuyen">
                                        <span className="title16 tingle" style={{cursor:'pointer',color:'red'}}>Chi tiết phí vận chuyển</span>
                                    </Link>
                                </div>
                                <ul className="extra">
                                    <li>
                                        <label>
                                            <input className="Dashboard"
                                                   type="radio"
                                                   value="1"
                                                   checked={type === 1}
                                                   onChange={(e) => {
                                                       setType(1)
                                                   }}/>
                                            <div className="item-dm">
                                                <p className="title16">Đơn phổ thông</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input className="Dashboard"
                                                   type="radio"
                                                   value="2"
                                                   checked={type === 3}
                                                   onChange={(e) => {
                                                       setType(3)
                                                   }}/>
                                            <div className="item-dm">
                                                <p className="title16">Đơn đổi hàng</p>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input className="Dashboard"
                                                   type="radio"
                                                   value="1"
                                                   checked={type === 2}
                                                   onChange={(e) => {
                                                       setType(2)
                                                   }}/>
                                            <div className="item-dm">
                                                <p className="title16">Đơn thu hồi</p>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {content}
                        {content_sum}
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
    if (modalIsOpen === 1) { // chọn contact người gửi
        return (
            <div id="main">
                <div className="container">
                    <div className="contents">
                        <div className="head_col">
                            <div className="head_title">
                                <a href="#!" onClick={() => setIsOpen(0)}>
                                    <FontAwesomeIcon icon={faAngleLeft}/>
                                </a>
                                <h3 className="title18">Thông tin địa chỉ</h3>
                                <span>
                                    <a href="#!" onClick={() => openNewContactSend()} title=""
                                       className="plus">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </a>
                                </span>

                            </div>

                            <div className="search" id="search">
                                <form action="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                         fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M17.5893 16.5227L14.5291 13.3863L14.5307 13.3814C15.7032 11.9286 16.3426 10.1122 16.341 8.23907C16.3409 6.61419 15.8644 5.02562 14.9714 3.67313C14.0784 2.32063 12.8089 1.26458 11.3224 0.637769C9.83587 0.0109578 8.19878 -0.158631 6.61697 0.150326C5.03515 0.459284 3.57922 1.23299 2.43225 2.37417C1.28528 3.51535 0.498479 4.97304 0.17078 6.56396C-0.15692 8.15487 -0.0108875 9.80799 0.590514 11.3154C1.19192 12.8229 2.22184 14.1173 3.55077 15.0361C4.87971 15.9548 6.44833 16.4568 8.05939 16.4789C9.93479 16.4833 11.7567 15.8486 13.2294 14.6776L16.2025 17.7637C16.2886 17.8455 16.3905 17.9086 16.5019 17.949C16.6133 17.9893 16.7317 18.006 16.8497 17.9981C16.9678 17.9902 17.083 17.9577 17.188 17.9029C17.2931 17.848 17.3858 17.7719 17.4604 17.6792C18.0901 17.01 17.5893 16.5227 17.5893 16.5227ZM11.5648 13.529C10.5311 14.2437 9.31098 14.6343 8.05778 14.6516C6.36096 14.6633 4.72902 13.9948 3.52088 12.7932C2.31274 11.5915 1.62734 9.95515 1.61542 8.24394C1.61522 6.97999 1.9856 5.7442 2.67998 4.69197C3.37435 3.63974 4.36173 2.81805 5.51793 2.33022C6.67414 1.8424 7.94756 1.71022 9.17806 1.95032C10.4086 2.19041 11.5412 2.79206 12.4335 3.6796C13.3259 4.56713 13.9381 5.70094 14.1932 6.93843C14.4483 8.17592 14.3348 9.46185 13.8672 10.6345C13.3995 11.8072 12.5985 12.8142 11.5648 13.529ZM4.34065 6.77527L5.87092 7.38367L5.87075 7.3841C5.64605 7.94959 5.65513 8.58118 5.896 9.13999C6.13693 9.69894 6.59004 10.1393 7.15564 10.3642L6.54723 11.8944C5.77738 11.5883 5.12886 11.0498 4.68691 10.3617C4.57117 10.1815 4.46961 9.99107 4.38373 9.79184C4.29786 9.59262 4.22913 9.388 4.1776 9.18014C3.98079 8.38635 4.03457 7.54512 4.34065 6.77527Z"/>
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Tìm kiếm theo số điện thoại"
                                        autoFocus
                                        autoComplete='off'
                                        onChange={(e) => {
                                            loadAddressSend(e.target.value)
                                        }}
                                    />
                                </form>
                            </div>
                            <div className="suming">Tổng: <span>{totalAddressSend}</span></div>
                        </div>
                        <div className="html_guest_col12">
                            <div className="list_guest">
                                {htmlAddressSend}
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
    if (modalIsOpen === 2) { // thêm contact người gửi
        return (
            <div id="main">
                <div className="container">
                    <div className="contents">
                        <div className="head_col">
                            <div className="head_title">
                                <a href="#!" onClick={() => {
                                    setIsOpen(1)
                                }}>
                                    <FontAwesomeIcon icon={faAngleLeft}/>
                                </a>
                                <h3 className="title18">Thêm địa chỉ</h3>
                                <span></span>
                            </div>
                        </div>
                        <div className="html_add_address">
                            <div className="ranle">
                                <form action="">
                                    <div className="form-field">
                                        <h3 className="title16 title_form">Họ tên <span>:</span></h3>
                                        <input type="text" value={contactName} placeholder=""
                                               onChange={(e) => setContactName(e.target.value)}/>
                                    </div>
                                    <div className="label_error">{errorContactName}</div>
                                    <div className="form-field">
                                        <h3 className="title16 title_form">Số điện thoại <span>:</span></h3>
                                        <input type="text" value={contactPhone} placeholder=""
                                               onChange={(e) => setContactPhone(e.target.value)}/>
                                    </div>
                                    <div className="label_error">{errorContactPhone}</div>
                                    <div className="form-field">
                                        <h3 className="title16 title_form">Địa chỉ <span>:</span></h3>
                                        <input type="text"
                                               value={(contactProvince || contactDistrict || contactWard) && (contactProvince + ' ' + contactDistrict + ' ' + contactWard)}
                                               placeholder="" onChange={(e) => e.preventDefault()} onClick={() => openProvinceContact()}/>
                                    </div>
                                    <div className="label_error">{errorContactProvince}</div>
                                    <div className="form-field">
                                        <h3 className="title16 title_form">Địa chỉ chi tiết <span>:</span></h3>
                                        <input type="text" value={contactAddress} placeholder=""
                                               onChange={(e) => setContactAddress(e.target.value)}/>
                                    </div>
                                    <div className="label_error">{errorContactAddress}</div>
                                    <div className="form-field" style={{borderBottom: 'none'}}>
                                        <h3 className="title16 title_form">Mặc định</h3>
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={contactDefault}
                                                   onChange={() => setContactDefault((contactDefault === 1) ? 0 : 1)}/>
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                </form>
                                <a href="#!" title="" className={disabled ? "butt active disabled" : "butt active"}
                                   onClick={() => addNewContactSend()}>
                                    <span>Xác nhận</span>
                                </a>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
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
