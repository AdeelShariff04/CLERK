import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import InventoryFormContent from '@/components/forms/inventory-form'

const InventoryCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Product" to="/inventory/add" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <InventoryFormContent />
                </div>
            </div>
        </>
    )
}

export default InventoryCreate