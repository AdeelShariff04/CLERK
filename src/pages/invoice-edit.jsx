import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import InvoiceFormContent from '@/components/forms/invoice-form'

const PaymentEdit = () => {
    return (
        <>
            <PageHeader>
                {/* <PaymentHeader /> */}
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    {/* <PaymentTable /> */}
                    <InvoiceFormContent isEdit />
                </div>
            </div>
        </>
    )
}

export default PaymentEdit