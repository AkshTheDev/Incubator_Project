import React from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardNavBar.module.css";
import  HomeIcon from"../../../assets/images/HomeIcon.svg"
import search from "../../../assets/images/SearchIcon.svg"
import bell from "../../../assets/images/NotificationBell.svg"

export default function DashboardNavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/Desktop">
            <img className={styles.icon} src={HomeIcon} alt="home icon" ></img>
        </Link>
        {/* <Link to="/Search"> */}
            <img className={styles.icon} src={search} alt="search icon" ></img>
        {/* </Link> */}
        
        {/* <Link to="/Notification"> */}
            <img className={styles.icon} src = {bell} alt="Notification icon" ></img>
        {/* </Link> */}
      </div>
      {/* <Link to="/CreateScript"> */}
        <button className={styles.navButton}>+Create</button>
      {/* </Link> */}
    </div>
  );
}
