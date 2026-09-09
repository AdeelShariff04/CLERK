import React from 'react'
import SupplierList from '@/components/tables/supplier-list'
import HeaderList from '@/components/shared/pageHeader/HeaderList'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const SupplierListPage = () => (
    <>
        <PageHeader>
            <HeaderList listName="Supplier" to="/supplier/add" />
        </PageHeader>
        <div className='main-content'>
            <SupplierList />
        </div>
        <Footer />
    </>
)

export default SupplierListPage