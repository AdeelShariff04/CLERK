import React from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderWidgets  from '@/components/shared/pageHeader/PageHeaderWidgets'
import Schedule from '@/components/extracomponents/widgetsList/Schedule'
import Project from '@/components/extracomponents/widgetsList/Project'
import Progress from '@/components/extracomponents/widgetsList/Progress'
import Meeting from '@/components/extracomponents/widgetsList/Meeting'
import Todos from '@/components/extracomponents/widgetsList/Todos'
import Trending from '@/components/extracomponents/widgetsList/Trending'
import Accounts from '@/components/extracomponents/widgetsList/Accounts'
import Notifications from '@/components/extracomponents/widgetsList/Notifications'
import Feedback from '@/components/extracomponents/widgetsList/Feedback'
import Activity from '@/components/extracomponents/widgetsList/Activity'
import ActivityTwo from '@/components/extracomponents/widgetsList/ActivityTwo'
import Profile from '@/components/extracomponents/widgetsList/Profile'
import Socal from '@/components/extracomponents/widgetsList/Social'
import Suggestions from '@/components/extracomponents/widgetsList/Suggestions'
import Browser from '@/components/extracomponents/widgetsList/Browser'
import Tickets from '@/components/extracomponents/widgetsList/Tickets'
import Upgrade from '@/components/extracomponents/widgetsList/Upgrade'
import ScheduleTwo from '@/components/extracomponents/widgetsList/ScheduleTwo'
import InvoiceOverview from '@/components/extracomponents/widgetsList/InvoiceOverview'
import ProjectLeads from '@/components/extracomponents/widgetsList/ProjectLeads'
import { upcomingEventsData } from '@/utils/fackData/extrafackdata/upcomingEventsData'
import Footer from '@/components/shared/Footer'
import UsersList from '@/components/extracomponents/widgetsList/UsersList'

const WidgetsLists = () => {
    return (
        <>
            <PageHeader >
                <PageHeaderWidgets />
            </PageHeader>
            <div className='main-content'>
                <div className='row'>
                    <Schedule title={"Schedule"} />
                    <Project title={"Project"} borderShow={true} cardYSpaceClass={"hrozintioal-card"} />
                    <Progress title={"Progress"} footerShow={true} />
                    <Meeting title={"Meeting"} />
                    <UsersList title={"Users"} />
                    <Todos title={"Todos"} />
                    <Trending title={"Trending"} />
                    <Accounts title={"Accounts"} />
                    <Notifications title={"Notifications"} />
                    <Feedback title={"Feedback"} />
                    <Activity title={"Activity"} />
                    <ActivityTwo title={"Activity"} />
                    <div className="col-xxl-4 col-lg-6">
                        <Profile />
                    </div>
                    <Socal title={"Socal"}/>
                    <Suggestions title={"Suggestions"}/>
                    <Browser title={"Browser"}/>
                    <Tickets title={"Tickets"}/>
                    <Upgrade/>
                    <ScheduleTwo title={"Upcoming Activities"} data={upcomingEventsData} />
                    <InvoiceOverview title={"Invoice Overview"}/>
                    <ProjectLeads/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default WidgetsLists