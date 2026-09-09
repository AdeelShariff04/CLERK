import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import CustomerFormContent from '@/components/forms/customer-form'

const CustomersCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Customer" to="/customers/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <CustomerFormContent />
                </div>
            </div>
        </>
    )
}

export default CustomersCreate