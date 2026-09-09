import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import CustomersViewHeader from '@/components/customersView/CustomersViewHeader'
import ProfileCard from '@/components/cards/profile-card'
import CustomerHistoryCard from '@/components/cards/customer-historycard'

const CustomersView = () => {
    return (
        <>
            <PageHeader>
                <CustomersViewHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <div className="col-md-4 mb-4">
                        <ProfileCard type="customer" />
                    </div>
                    <div className="col-md-8 mb-4">
                        <CustomerHistoryCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersView