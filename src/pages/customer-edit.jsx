import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import CustomerFormContent from '@/components/forms/customer-form'

const CustomersEdit = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Customer" to="/customer/edit" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <CustomerFormContent isEdit />
                </div>
            </div>
        </>
    )
}

export default CustomersEdit