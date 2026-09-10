import React from 'react'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import StatsCards from '@/components/cards/stats-cards'
import MonthlyOverviewChart from '@/components/charts/MonthlyOverviewChart'
import ActivityList from '@/components/cards/activity-listcard'
import TopSellingProduct from '@/components/tables/top-selling'
import StockOverviewChart from '@/components/charts/StockOverviewChart'
import TopCustomersList from '@/components/cards/customer-listcard'
import Footer from '@/components/shared/Footer'

const Dashboard = () => (
    <>
        <PageHeader />
        <div className='main-content'>
            <div className='row'>
                <StatsCards />
                <MonthlyOverviewChart />
                <ActivityList title="Recent Activity" />
                <TopSellingProduct title="Top Selling Products" />
                <StockOverviewChart />
                <TopCustomersList title="Top Customers" />
            </div>
        </div>
        <Footer />
    </>
)

export default Dashboard