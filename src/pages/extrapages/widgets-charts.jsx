import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderWidgets  from '@/components/shared/pageHeader/PageHeaderWidgets'
import SiteOverviewChart from '@/components/extracomponents/widgetsCharts/SiteOverviewChart'
import EstimateBarChat from '@/components/extracomponents/widgetsCharts/EstimateBarChart'
import EstimateAreaChart from '@/components/extracomponents/widgetsCharts/EstimateAreaChart'
import EstimateAreaChartTwo from '@/components/extracomponents/widgetsCharts/EstimateAreaChartTwo'
import TasksOverviewChart from '@/components/extracomponents/widgetsCharts/TasksOverviewChart'
import InquiryChannelChart from '@/components/extracomponents/widgetsCharts/InquiryChannelChart'
import InquiryTrackingChart from '@/components/extracomponents/widgetsCharts/InquiryTrackingChart'
import TimeLoggedChart from '@/components/extracomponents/widgetsCharts/TimeLoggedChart'
import BillableTimeChart from '@/components/extracomponents/widgetsCharts/BillableTimeCart'
import LeadsOverviewChart from '@/components/extracomponents/widgetsCharts/LeadsOverviewChart'
import VisitorsOverviewChart from '@/components/extracomponents/widgetsCharts/VisitorsOverviewChart'
import TopCountryChart from '@/components/extracomponents/widgetsCharts/TopCountryChart'
import WebAnalyticsChart from '@/components/extracomponents/widgetsCharts/WebAnalyticsChart'
import BilledAreaChart from '@/components/extracomponents/widgetsCharts/BilledAreaChart'
import SalesPipelineChart from '@/components/extracomponents/widgetsCharts/SalesPipelineChart'
import DeviceUseChart from '@/components/extracomponents/widgetsCharts/DeviceUseChart'
import ProjectReportChart from '@/components/extracomponents/widgetsCharts/ProjectReportChart'
import TimeSpentChart from '@/components/extracomponents/widgetsCharts/TimeSpentChart'
import VisitorsChart from '@/components/extracomponents/widgetsCharts/VisitorsChart'
import TopCountryBarChart from '@/components/extracomponents/widgetsCharts/TopCountriyBarChart'
import EstimateBarChartTwo from '@/components/extracomponents/widgetsCharts/EstimateBarChartTwo'
import PerformanceCandlestickChart from '@/components/extracomponents/widgetsCharts/PerformanceCandlestickChart'
import Footer from '@/components/shared/Footer'
import PaymentRecordChartTwo from '@/components/extracomponents/widgetsCharts/PaymentRecordChartTwo'

const WidgetsCharts = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderWidgets />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewChart />
                    <EstimateBarChat />
                    <EstimateAreaChart />
                    <EstimateAreaChartTwo />
                    <TasksOverviewChart />
                    <InquiryTrackingChart />
                    <InquiryChannelChart />
                    <TimeLoggedChart />
                    <BillableTimeChart />
                    <PaymentRecordChartTwo />
                    <LeadsOverviewChart chartHeight={290} isFooterShow={true}/>
                    <VisitorsOverviewChart />
                    <TopCountryChart />
                    <WebAnalyticsChart />
                    <BilledAreaChart />
                    <SalesPipelineChart />
                    <DeviceUseChart />
                    <ProjectReportChart />
                    <TimeSpentChart />
                    <VisitorsChart />
                    <TopCountryBarChart />
                    <EstimateBarChartTwo />
                    <PerformanceCandlestickChart />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WidgetsCharts