export const stockOverviewChartData = (statusData = []) => {
    const colorMap = {
        primary: '#3454D1',
        success: '#25B865',
        warning: '#FF9F43',
        danger: '#D13B4C',
    }

    const labels = statusData.map((item) => item.status)
    const series = statusData.map((item) => item.count)
    const colors = statusData.map((item) => colorMap[item.color] || '#3454D1')

    const chartOptions = {
        chart: { width: 300, type: "donut" },
        dataLabels: {
            enabled: !1
        },
        labels,
        series,
        stroke: { width: 0 },
        legend: { show: !1 },
        colors,
        plotOptions: {
            pie: {
                donut: {
                    size: "80%"
                }
            }
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return `${e} Items`;
                },
            },
            style: { fontSize: "11px", fontFamily: "Inter" },
        },
    }
    return chartOptions
}