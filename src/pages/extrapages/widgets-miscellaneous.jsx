import React from 'react'
import PageHeaderWidgets  from '@/components/shared/pageHeader/PageHeaderWidgets'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import ProjectDateLineMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/ProjectDateLineMiscellaneous'
import ProjectAssingeMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/ProjectAssingeMiscellaneous'
import ProjectTimeMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/ProjectTimeMiscellaneous'
import GoalMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/GoalMiscellaneous'
import Progress from '@/components/extracomponents/widgetsList/Progress'
import ForecasRevenuetMiscellaneousTwo from '@/components/extracomponents/widgetsMiscellaneous/ForecastRevenueMiscellaneousTwo'
import EstimateMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/EstimateMiscellaneous'
import SellingStatusMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/SellingStatusMiscellaneous'
import ConversionStatusMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/ConversionStatusMiscellaneous'
import TrafficSourceMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/TrafficSourceMiscellaneous'
import SalesMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/SalesMiscellaneous'
import CommentMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/CommentMiscellaneous'
import StatusMiscellaneous from '@/components/extracomponents/widgetsMiscellaneous/StatusMiscellaneous'
import Footer from '@/components/shared/Footer'
import { productsData } from '@/utils/fackData/extrafackdata/productsData'

const WidgetsMiscellaneous = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderWidgets />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <ProjectDateLineMiscellaneous />
                    <ProjectAssingeMiscellaneous />
                    <Progress title={"Tasks Progress"} btnFooter={true}/>
                    <GoalMiscellaneous />
                    <ForecasRevenuetMiscellaneousTwo/>
                    <ProjectTimeMiscellaneous />
                    <SellingStatusMiscellaneous/>
                    <ConversionStatusMiscellaneous/>
                    <TrafficSourceMiscellaneous/>
                    <SalesMiscellaneous dataList={productsData}/>
                    <CommentMiscellaneous/>
                    <StatusMiscellaneous/>
                    <EstimateMiscellaneous/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WidgetsMiscellaneous