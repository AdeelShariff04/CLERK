import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'
import ProposalCreateContent from '@/components/proposalEditCreate/ProposalCreateContent'
import ProposalSent from '@/components/proposalEditCreate/ProposalSent'

const ProposalCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Proposal" to="/proposal/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    {/* <ProposalTable /> */}
                    <ProposalCreateContent />
                  
                </div>
            </div>
            <ProposalSent />
        </>
    )
}

export default ProposalCreate