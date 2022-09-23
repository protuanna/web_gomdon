import {useState} from "react";

export default function Report({data}) {
    //const [search, setSearch] = useState('');
    let dt = [];
    let total = 0;
    data.forEach(function (item, index) {
        dt[item.status] = item.total
        total += item.total
    })
    const [report, setReport] = useState(
        [
            {
                label: 'Tạo mới',
                status: 1,
                value: dt[1] ?? 0,
                color: 'red',
                percent: ((dt[1] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Hủy',
                status: 2,
                value: dt[2] ?? 0,
                color: 'red',
                percent: ((dt[2] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đã lấy hàng',
                status: 3,
                value: dt[3] ?? 0,
                color: 'red',
                percent: ((dt[3] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đang vận chuyển',
                status: 4,
                value: dt[4] ?? 0,
                color: 'red',
                percent: ((dt[4] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đang giao hàng',
                status: 5,
                value: dt[5] ?? 0,
                color: 'red',
                percent: ((dt[5] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đang chuyển hoàn',
                status: 6,
                value: dt[6] ?? 0,
                color: 'red',
                percent: ((dt[6] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đã giao hàng',
                status: 7,
                value: dt[7] ?? 0,
                color: 'red',
                percent: ((dt[7] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đã chuyển hoàn',
                status: 8,
                value: dt[8] ?? 0,
                color: 'red',
                percent: ((dt[8] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Kiện vấn đề',
                status: 9,
                value: dt[9] ?? 0,
                color: 'red',
                percent: ((dt[9] ?? 0) * 100 / total).toFixed(2)
            },
            {
                label: 'Đơn lấy hàng thất bại',
                status: 10,
                value: dt[10] ?? 0,
                color: 'red',
                percent: ((dt[10] ?? 0) * 100 / total).toFixed(2)
            },
        ])
    return (
        <div className="html_management_col">
            <div className="title_top">
                <h3 className="title21">Người gửi theo gói quản lý</h3>
            </div>
            {/*<div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
                 style="--value:65"></div>*/}

            <div className="management_information ranle">
                <div className="information">
                    <div className="title_item">
                        <div className="title_info status">Trạng thái</div>
                        <div className="title_info amount">Số lượng</div>
                        <div className="title_info percent">Phần trăm</div>
                    </div>
                    <ul className="">
                        {report.map((dt) => (
                            <li>
                                <div className="status_info status">{dt.label}</div>
                                <div className="amount_info amount">{dt.value}</div>
                                <div className="percent_info percent">{dt.percent}%</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}