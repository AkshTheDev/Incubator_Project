import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DashboardSidebar.module.css';
import DashboardSidebarPages from './DashboardSidebarPages';
import { first } from 'slate';
import {
  LayoutDashboard,
  FileText,
  Folder,
  HelpCircle,
  Users,
  Gift,
} from 'lucide-react'; 

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function DashboardSidebar() {
  // const user = {
  //   firstName: 'Sakshi',
  //   lastName: 'Shah',
  // };

  // const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  // const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <>
      <div className={styles.dashboardSidebar}>

      <nav className={styles.nav}>
        <NavLink to="/dashboard/DashboardSidebarPages" className={styles.navLink}>
          <LayoutDashboard className={styles.icon} size={18} />
        Dashboard
        </NavLink>
        <NavLink to="/dashboard" className={styles.navLink}>
          <FileText className={styles.icon} size={18} />
        Scripts
        </NavLink>
        <NavLink to="/dashboard" className={styles.navLink}>
          <Folder className={styles.icon} size={18} />
        Projects
        </NavLink>
        <NavLink to="/dashboard" className={styles.navLink}>
          <HelpCircle className={styles.icon} size={18} />
        Support
        </NavLink>
        <NavLink to="/dashboard" className={styles.navLink}>
          <Users className={styles.icon} size={18} />
        Community
        </NavLink>
        <NavLink to="/dashboard" className={styles.navLink}>
          <Gift className={styles.icon} size={18} />
        Refer a friend
        </NavLink>

      </nav>
      </div>
    </>  
  );
}

export default DashboardSidebar;