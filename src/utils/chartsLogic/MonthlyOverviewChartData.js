export const MonthlyOverviewChartData = () => {
    const chartOption = {
        chart: {
            height: 370,
            type: "area",
            stacked: !1,
            toolbar: {
                show: !1
            },
        },
        xaxis: {
            categories: ["JAN/26", "FEB/26", "MAR/26", "APR/26", "MAY/26", "JUN/26"],
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                style: {
                    fontSize: "11px",
                    colors: "#64748b"
                }
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: {
                formatter: function (e) {
                    return +e + "K";
                },
                offsetX: -15,
                offsetY: 0,
                style: {
                    fontSize: "11px",
                    colors: "#64748b"
                },
            },
        },
        stroke: {
            curve: "smooth",
            width: [1, 1, 1, 1],
            dashArray: [3, 3, 3, 3],
            lineCap: "round"
        },
        grid: {
            padding: {
                left: 10,
                right: 0,
            },
            strokeDashArray: 3,
            borderColor: "#ebebf3",
            row: {
                colors: ["#ebebf3", "transparent"],
                opacity: 0.02
            },
        },
        legend: {
            show: !1
        },
        colors: ["#3454d1", "#25b865", "#d13b4c", "#f59e0b"],
        dataLabels: {
            enabled: !1
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.3,
                stops: [0, 90, 100]
            }
        },
        series: [
            { name: "Total Sales", data: [42, 58, 51, 68, 73, 82], type: "area" },
            { name: "Total Profit", data: [24, 31, 27, 35, 33, 39], type: "area" },
            { name: "Total Expense", data: [18, 27, 24, 33, 40, 43], type: "area" },
            { name: "Total Purchase", data: [38, 45, 49, 54, 60, 66], type: "area" },
        ],
        tooltip: {
            y: {
                formatter: function (e) {
                    return +e + "K";
                },
            },
            style: { fontSize: "12px", fontFamily: "Inter" },
        },
    }

    return chartOption
}