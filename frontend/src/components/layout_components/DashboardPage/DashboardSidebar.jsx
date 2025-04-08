import React from 'react'
import Style from './DashboardSidebar.module.css'
function DashboardSidebar() {
  return (
    <div className={Style.container}> 
    <div className={Style.box}>
      <i class="fa-regular fa-floppy-disk"></i>
      <span>Saved Scripts</span>
    </div>
    </div>
  )
}

export default DashboardSidebar