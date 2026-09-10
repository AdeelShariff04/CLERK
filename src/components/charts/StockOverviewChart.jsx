import React, { Fragment } from 'react'
import ReactApexChart from 'react-apexcharts'
import CardHeader from '@/components/shared/CardHeader'
import useCardTitleActions from '@/hooks/useCardTitleActions'
import CardLoader from '@/components/shared/CardLoader'
import { stockOverviewChartData } from '@/utils/chartsLogic/stockOverviewChartData'
import { inventoryData } from '@/utils/fackData/inventoryData'

const colorMap = {
    primary: '#3454D1',
    success: '#25B865',
    warning: '#FF9F43',
    danger: '#D13B4C',
};

const StockOverviewChart = () => {
    const inventoryStatsData = Object.values(
        inventoryData.reduce((acc, item) => {
            const key = item.status;
            if (!acc[key]) {
                acc[key] = { status: key, count: 0, color: item.color };
            }
            acc[key].count += 1;
            return acc;
        }, {})
    );

    const chartOptions = stockOverviewChartData(inventoryStatsData)
    const { refreshKey, isRemoved, isExpanded, handleRefresh, handleExpand, handleDelete } = useCardTitleActions();

    if (isRemoved) {
        return null;
    }

    return (
        <div className="col-xxl-4">
            <div className={`card stretch stretch-full leads-overview ${isExpanded ? "card-expand" : ""} ${refreshKey ? "card-loading" : ""}`}>
                <CardHeader title={"Inventory Status"} refresh={handleRefresh} remove={handleDelete} expanded={handleExpand} />
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center" >
                        <ReactApexChart
                            type='donut'
                            options={chartOptions}
                            series={chartOptions.series}
                            width={300}
                        />
                    </div>
                    {inventoryStatsData.map(({ status, count, color }, index) => (
                        <Fragment key={index}>
                            <hr className="border-dashed mt-1 mb-3" />
                            <div className="hstack justify-content-between">
                                <div className="hstack">
                                    <span
                                        className="me-3 rounded-circle"
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: colorMap[color] || colorMap.primary,
                                            display: 'inline-block',
                                        }}
                                        aria-label={`${status} color`}
                                    />
                                    <span>{status}</span>
                                </div>
                                <div className="fs-11 fw-medium text-uppercase text-muted">{count} Items</div>
                            </div>
                        </Fragment>
                    ))}
                </div>

                <CardLoader refreshKey={refreshKey} />
            </div>
        </div>
    )
}

export default StockOverviewChart
