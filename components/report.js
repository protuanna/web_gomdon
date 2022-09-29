import {useState, useRef, useEffect} from "react";
import Chart from "chart.js/auto";


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
                percent: ((dt[1] ?? 0) * 100 / total).toFixed(2),
                color: '#228B22'
            },
            {
                label: 'Hủy',
                status: 2,
                value: dt[2] ?? 0,
                percent: ((dt[2] ?? 0) * 100 / total).toFixed(2),
                color: '#BEBEBE'

            },
            {
                label: 'Đã lấy hàng',
                status: 3,
                value: dt[3] ?? 0,
                percent: ((dt[3] ?? 0) * 100 / total).toFixed(2),
                color: '#FF0000'
            },
            {
                label: 'Đang vận chuyển',
                status: 4,
                value: dt[4] ?? 0,
                percent: ((dt[4] ?? 0) * 100 / total).toFixed(2),
                color: '#4CAEE3'
            },
            {
                label: 'Đang giao hàng',
                status: 5,
                value: dt[5] ?? 0,
                percent: ((dt[5] ?? 0) * 100 / total).toFixed(2),
                color: '#FF8C00'
            },
            {
                label: 'Đang chuyển hoàn',
                status: 6,
                value: dt[6] ?? 0,
                percent: ((dt[6] ?? 0) * 100 / total).toFixed(2),
                color: '#4169E1'
            },
            {
                label: 'Đã giao hàng',
                status: 7,
                value: dt[7] ?? 0,
                percent: ((dt[7] ?? 0) * 100 / total).toFixed(2),
                color: '#20B2AA'
            },
            {
                label: 'Đã trả hàng',
                status: 8,
                value: dt[8] ?? 0,
                percent: ((dt[8] ?? 0) * 100 / total).toFixed(2),
                color: '#9966FF'
            },
            {
                label: 'Kiện vấn đề',
                status: 9,
                value: dt[9] ?? 0,
                percent: ((dt[9] ?? 0) * 100 / total).toFixed(2),
                color: '#FF69B4'
            },
            {
                label: 'Đơn lấy hàng thất bại',
                status: 10,
                value: dt[10] ?? 0,
                percent: ((dt[10] ?? 0) * 100 / total).toFixed(2),
                color: '#607C8E'
            },
        ])


    const canvasEl = useRef(null);

    useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        /*const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);
        */
        let lbl = []
        let dt = []
        let col = []
        report.forEach(function (item,index){
            lbl.push(item.label)
            dt.push(item.value)
            col.push(item.color)
        })
        const data = {
            labels: lbl,
            datasets: [{
                label: 'Thống kê trạng thái đơn hàng',
                data: dt,
                backgroundColor: col,
                hoverOffset: 4
            }]
        };
        const config = {
            type: 'pie',
            data: data,
        };
        const myLineChart = new Chart(ctx, config);

        return function cleanup() {
            myLineChart.destroy();
        };
    });

    return (
        <div className="html_management_col">
            <div className="title_top">
                <h3 className="title21">Người gửi theo dõi quản lý</h3>
            </div>
            {/*<div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"
                 style="--value:65"></div>*/}
            <div style={{width:'60%',margin:'0 auto 30px'}}>
                <canvas id="myChart" ref={canvasEl} height="40vh" width="80vw">chart</canvas>
            </div>
            <div className="management_information ranle">
                <div className="information">
                    <div className="title_item">
                        <div className="title_info status">Trạng thái</div>
                        <div className="title_info amount">Số lượng</div>
                        <div className="title_info percent">Phần trăm</div>
                    </div>
                    <ul className="">
                        {report.map((dt) => (
                            <li key={dt.status}>
                                <div className={"status_info status status_" + dt.status}>{dt.label}</div>
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
