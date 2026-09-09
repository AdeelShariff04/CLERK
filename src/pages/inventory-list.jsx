import React from 'react'
import InventoryList from '@/components/tables/inventory-list'
import HeaderList from '@/components/shared/pageHeader/HeaderList'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const Home = () => (
    <>
        <PageHeader>
            <HeaderList listName="Product" to="/inventory/add" />
        </PageHeader>
        <div className='main-content'>
            <InventoryList title={"Inventory List"} />
        </div>
        <Footer />
    </>
)

export default Home