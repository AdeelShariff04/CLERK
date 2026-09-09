import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import SupplierFormContent from '@/components/forms/supplier-form'

const SuppliersEdit = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Supplier" to="/supplier/edit" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <SupplierFormContent isEdit />
                </div>
            </div>
        </>
    )
}

export default SuppliersEdit