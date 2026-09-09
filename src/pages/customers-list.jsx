import React from 'react'
import CustomersTable from '@/components/customers/CustomersTable'
import CustomersHeader from '@/components/customers/CustomersHeader'
import Customers from '@/components/widgetsTables/Customers'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const CustomersList = () => {
    return (
        <>
            <PageHeader>
                <CustomersHeader />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <Customers title={"New Customers"}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomersList