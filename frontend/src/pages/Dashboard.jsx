import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import AllScripts from '../components/layout_components/DashboardPage/AllScripts'

function Dashboard() {
  return (
    <>
    <DashboardLayout>
      <AllScripts/>
    </DashboardLayout>
    </>

  )
}

export default Dashboard