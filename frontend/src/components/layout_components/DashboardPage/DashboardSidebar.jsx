import React from 'react';
import {Link} from 'react-router-dom';
import styles from './DashboardSidebar.module.css';

import {
  LayoutDashboard,
  FileText,
  Folder,
  HelpCircle,
  Users,
  Gift,
} from 'lucide-react'; 


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
        <Link to="/Dashboard" className={styles.navLink}>
          <LayoutDashboard className={styles.icon} size={18} />
        Dashboard
        </Link>
        <Link to="/Dashboard/script" className={styles.navLink}>
          <FileText className={styles.icon} size={18} />
        Scripts
        </Link>
        <Link to="/Dashboard/projects" className={styles.navLink}>
          <Folder className={styles.icon} size={18} />
        Projects
        </Link>
        <Link to="/Dashboard" className={styles.navLink}>
          <HelpCircle className={styles.icon} size={18} />
        Support
        </Link>
        <Link to="/Dashboard" className={styles.navLink}>
          <Users className={styles.icon} size={18} />
        Community
        </Link>
        <Link to="/Dashboard" className={styles.navLink}>
          <Gift className={styles.icon} size={18} />
        Refer a friend
        </Link>

      </nav>
      </div>
    </>  
  );
}

export default DashboardSidebar;