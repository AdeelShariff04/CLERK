import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import InventoryFormContent from '@/components/forms/inventory-form'

const InventoryEdit = () => {
    return (
        <>
            <PageHeader>
                {/* <PaymentHeader /> */}
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <InventoryFormContent />
                </div>
            </div>
        </>
    )
}

export default InventoryEdit