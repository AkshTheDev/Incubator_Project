import React from 'react'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'
import Style from './ProjectsLayout.module.css'
function ProjectsLayout({children}) {
  return (
    <>
      <DashboardNavBar/>
      <div className={Style.div2}>
        <DashboardSidebar/>
        {children}
      </div>
    </>
  )
}

export default ProjectsLayout