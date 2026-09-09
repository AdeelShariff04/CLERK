import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import LeadsCreateContent from '@/components/leadsViewCreate/LeadsCreateContent'

const LeadsCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Lead" to="/leads/create" />
            </PageHeader>

            <div className='main-content'>
                <div className='row'>
                    <LeadsCreateContent/>
                </div>
            </div>
        </>
    )
}

export default LeadsCreate