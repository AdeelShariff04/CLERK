import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import EmployeeFormContent from '@/components/forms/employee-form'

const EmployeesEdit = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Employee" to="/employee/edit" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <EmployeeFormContent isEdit />
                </div>
            </div>
        </>
    )
}

export default EmployeesEdit