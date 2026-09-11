import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderWidgets  from '@/components/shared/pageHeader/PageHeaderWidgets'
import LatestLeads from '@/components/extracomponents/widgetsTables/LatestLeads'
import TopSelling from '@/components/extracomponents/widgetsTables/TopSelling'
import Remainders from '@/components/extracomponents/widgetsTables/Remainders'
import Tickets from '@/components/extracomponents/widgetsList/Tickets'
import Countries from '@/components/extracomponents/widgetsTables/Countries'
import LeadsStatus from '@/components/extracomponents/widgetsTables/LeadsStatus'
import ContactLeads from '@/components/extracomponents/widgetsTables/ContactLeads'
import Support from '@/components/extracomponents/widgetsTables/Support'
import ProjectsTwo from '@/components/extracomponents/widgetsTables/ProjectsTwo'
import Campaign from '@/components/extracomponents/widgetsTables/Campaign'
import VisitedPages from '@/components/extracomponents/widgetsTables/VisitedPages'
import ProgressTwo from '@/components/extracomponents/widgetsTables/ProgressTwo'
import ProjectTracker from '@/components/extracomponents/widgetsTables/ProjectTracker'
import Tasks from '@/components/extracomponents/widgetsTables/Tasks'
import InvoiceSummary from '@/components/extracomponents/widgetsTables/InvoiceSummary'
import TrafficReports from '@/components/extracomponents/widgetsTables/TrafficReports'
import Store from '@/components/extracomponents/widgetsTables/Store'
import Customers from '@/components/extracomponents/widgetsTables/Customers'
import Orders from '@/components/extracomponents/widgetsTables/Orders'
import Footer from '@/components/shared/Footer'

const WidgetsTables = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderWidgets />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <LatestLeads title={"Leads"} />
                    <TopSelling title={"Top Selling"} />
                    <Remainders title={"Remainders"} />
                    <Tickets title={"Tickets"} paginationShow={true} />
                    <LeadsStatus title={"Leads Status"} />
                    <Countries title={"Countries"} />
                    <ContactLeads title={"Contact Leads"} />
                    <Support title={"Support Inbox"} />
                    <Campaign title={"Campaign"} />
                    <VisitedPages title={"Visited Pages"} />
                    <ProjectsTwo title={"Projects Stats"} className="col-xxl-6" />
                    <ProgressTwo title={"Project Progress"} />
                    <ProjectTracker />
                    <Tasks title={"Latest Tasks"} />
                    <InvoiceSummary title={"Invoice Summary"} />
                    <TrafficReports title={"Traffic Reports"} />
                    <Store title={"Store Overview"}/>
                    <Customers title={"New Customers"}/>
                    <Orders title={"Recent Orders"}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WidgetsTables