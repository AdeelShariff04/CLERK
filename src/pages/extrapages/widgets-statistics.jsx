import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderWidgets  from '@/components/shared/pageHeader/PageHeaderWidgets'
import SiteOverviewStatistics from '@/components/extracomponents/widgetsStatistics/SiteOverviewStatistics'
import EstimateStatistics from '@/components/extracomponents/widgetsStatistics/EstimateStatistics'
import EstimateStatisticsTwo from '@/components/extracomponents/widgetsStatistics/EstimateStatisticsTwo'
import UserOverviewStatistics from '@/components/extracomponents/widgetsStatistics/UserOverviewStatistics'
import LeadsStatistics from '@/components/extracomponents/widgetsStatistics/LeadsStatistics'
import TimeStatistics from '@/components/extracomponents/widgetsStatistics/TimeStatistics'
import EstimateStatisticsThree from '@/components/extracomponents/widgetsStatistics/EstimateStatisticsThree'
import PaymentStatistics from '@/components/extracomponents/widgetsStatistics/PaymentStatistics'
import CustomersStatistics from '@/components/extracomponents/widgetsStatistics/CustomersStatistics'
import ProjectsStatistics from '@/components/extracomponents/widgetsStatistics/ProjectsStatistics'
import LeadsStatisticsTwo from '@/components/extracomponents/widgetsStatistics/LeadsStatisticsTwo'
import TimeStatisticsTwo from '@/components/extracomponents/widgetsStatistics/TimeStatisticsTwo'
import OrdersStatistics from '@/components/extracomponents/widgetsStatistics/OrdersStatistics'
import UserOverviewStatisticsTwo from '@/components/extracomponents/widgetsStatistics/UserOverviewStatisticsTwo'
import ProjectsStatisticsTwo from '@/components/extracomponents/widgetsStatistics/ProjectsStatisticsTwo'
import UserOverviewStatisticsThree from '@/components/extracomponents/widgetsStatistics/UserOverviewStatisticsThree'
import SocilMediaStatistics from '@/components/extracomponents/widgetsStatistics/SocilMediaStatistics'
import Footer from '@/components/shared/Footer'

const WidgetsStatistics = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderWidgets />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SiteOverviewStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <EstimateStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <EstimateStatisticsTwo />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <UserOverviewStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <LeadsStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <TimeStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <EstimateStatisticsThree />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <PaymentStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <CustomersStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <ProjectsStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <LeadsStatisticsTwo />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <TimeStatisticsTwo />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <OrdersStatistics />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <UserOverviewStatisticsTwo />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <ProjectsStatisticsTwo />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <UserOverviewStatisticsThree />
                    <hr className="border-top-dashed mt-4 mb-5 mx-3" />
                    <SocilMediaStatistics />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WidgetsStatistics