import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import InvoiceFormContent from '@/components/forms/invoice-form'

const PaymentView = () => {
    return (
        <>
            <PageHeader>
                {/* <PaymentHeader /> */}
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

export default PaymentView