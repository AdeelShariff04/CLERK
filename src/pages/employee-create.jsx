import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import EmployeeFormContent from '@/components/forms/employee-form'

const EmployeeCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Employee" to="/employees/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <EmployeeFormContent />
                </div>
            </div>
        </>
    )
}

export default EmployeeCreate