import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'

function Dashboard() {
  return (
    <>
    <DashboardNavBar/>
    <DashboardSidebar/>
    </>

  )
}

export default Dashboard;