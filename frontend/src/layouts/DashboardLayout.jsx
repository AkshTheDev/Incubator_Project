import React from 'react'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'
import Style from './DashboardLayout.module.css'
import Component from '../components/layout_components/DashboardPage/Components'
function DashboardLayout(files,sortBy, setsortBy, viewMode, setViewMode, onRename, onDelete) {
  return (
    <>
      <DashboardNavBar/>
      <div className={Style.div2}>
        <DashboardSidebar/>
        <Component
          files={files}
          sortBy={sortBy}
          setsortBy={setsortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onRename={onRename}
          onDelete={onDelete}
        />
      </div>
    </>
   

  )
}

export default DashboardLayout