import React from 'react'
import CustomerList from '@/components/tables/customer-list'
import HeaderList from '@/components/shared/pageHeader/HeaderList'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const CustomersList = () => {
    return (
        <>
            <PageHeader>
                <HeaderList listName="Customer" to="/customers/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <CustomerList title={"New Customers"}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomersList