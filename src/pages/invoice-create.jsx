import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import InvoiceFormContent from '@/components/forms/invoice-form'

const PaymentCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Invoice" to="/invoice/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    {/* <PaymentTable /> */}
                    <InvoiceFormContent />
                </div>
            </div>
        </>
    )
}

export default PaymentCreate