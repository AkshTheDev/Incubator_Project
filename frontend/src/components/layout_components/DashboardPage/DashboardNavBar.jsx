import React, { useState }from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./DashboardNavBar.module.css";
import  HomeIcon from"../../../assets/images/HomeIcon.svg"
import search from "../../../assets/images/SearchIcon.svg"
import bell from "../../../assets/images/NotificationBell.svg"
import CreateScriptModal from "../CreateScriptModal";
import { logout } from "../../../api/logout";

export default function DashboardNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handlelogout = async()=>{
      try{
        const response = await logout()
        console.log(response)
        navigate("/login")
      }
      catch(error){
        console.log(error)
      }
    }
    const handleCreateScript = () => {
      console.log("Create script button clicked");
      setIsOpen(true);
    }

    const handleCloseModal = () => {
      setIsOpen(false);
    }

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link to="/Desktop">
            <img className={styles.icon} src={HomeIcon} alt="home icon" ></img>
        </Link>
            <img className={styles.icon} src={search} alt="search icon" ></img>
        
            <img className={styles.icon} src = {bell} alt="Notification icon" ></img>
      </div>
      <div className={styles.btns}>

        <button className={styles.navButton} onClick={handlelogout}>Logout</button>
        <button className={styles.navButton} onClick={handleCreateScript}>+ Create</button>
      </div>

      {isOpen && (
        
        <CreateScriptModal onClose={handleCloseModal}/>
      
      )}
      
    </div>
  );
}
