import React,{useState} from 'react'
import styles from './Dashboard.module.css';
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'
import {
  Search,
  Cloud,
  List,
  LayoutGrid,
  MoreHorizontal,
} from "lucide-react";

function Dashboard() {
  const [view, setview] = useState("list");
  const [sortBy, setsortBy] = useState("last edited");

  const files = []
  return (
    <>
      <DashboardNavBar/>
      <DashboardSidebar/>
    <div className={styles.dashboard}>
      <div className={styles.dashboardContainer}>
        <h1 className={styles.title}>Dashboard</h1>

        <div className={styles.searchWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search scripts..."
            className={styles.searchBar}
          />
        </div>
      </div>
    </div>
    </>

  );
}

export default Dashboard;