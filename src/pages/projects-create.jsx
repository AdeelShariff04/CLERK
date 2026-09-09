import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import ProjectCreateContent from '@/components/projectsCreate/ProjectCreateContent'
import HeaderInner from '@/components/shared/pageHeader/HeaderInner'

const ProjectsCreate = () => {
    return (
        <>
            <PageHeader>
                <HeaderInner listName="Project" to="/projects/create" />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <ProjectCreateContent />
                </div>
            </div>

        </>
    )
}

export default ProjectsCreate