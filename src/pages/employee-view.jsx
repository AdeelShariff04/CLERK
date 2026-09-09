import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import ProfileCard from '@/components/cards/profile-card'
import EmployeeInfoCard from '@/components/cards/employee-infocard'

const EmployeeView = () => {
    return (
        <>
            <PageHeader />
            <div className="main-content">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <ProfileCard type="employee" />
                    </div>
                    <div className="col-md-8 mb-4">
                        <EmployeeInfoCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeView