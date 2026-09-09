import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import InventoryFormContent from '@/components/forms/inventory-form'

const InventoryView = () => {
    return (
        <>
            <PageHeader>
                {/* <PaymentHeader /> */}
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <InventoryFormContent readOnly />
                </div>
            </div>
        </>
    )
}

export default InventoryView