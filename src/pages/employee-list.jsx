import React from 'react'
import EmployeeList from '@/components/tables/employee-list'
import HeaderList from '@/components/shared/pageHeader/HeaderList'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import Footer from '@/components/shared/Footer'

const EmployeesList = () => {
    return (
        <>
            <PageHeader>
                <HeaderList listName="Employee" to="/employees/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <EmployeeList title={"All Employees"}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EmployeesList