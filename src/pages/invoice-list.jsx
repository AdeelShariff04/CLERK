import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderList from '@/components/shared/pageHeader/HeaderList'
import Footer from '@/components/shared/Footer'
import InvoiceList from '@/components/tables/invoice-list'

const PaymentList = () => {
    return (
        <>
            <PageHeader>
                <HeaderList listName="Invoice" to="/invoice/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <InvoiceList />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PaymentList