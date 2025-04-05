import React from 'react'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'
function DashboardLayout({children}) {
  return (
    <>
      <DashboardNavBar/>
      <DashboardSidebar/>
      {children}
    </>
   

  )
}

export default DashboardLayout