import NavbarCSS from "./Navbar.module.css";
import arrow from "../../assets/images/arrow.svg";
import logo from "../../assets/images/logo.svg";
import { useState,useEffect } from "react";
function Navbar() {
  const[isSticky,SetisSticky] = useState(false);
  useEffect(()=>{
    const handlescroll = ()=>{
      if(window.scrollY>50){
        SetisSticky(true);
      }
      else{
        SetisSticky(false);
      }
    }
    window.addEventListener("scroll",handlescroll)
    return ()=>{
      window.removeEventListener("scroll",handlescroll)
    }
  })
  const links = ["About", "Pricing", "Support"]; 
  return (
    <div className={`${NavbarCSS.header} ${isSticky ? NavbarCSS.sticky : ""}`}>
      <div>
        <a href="./blank">
          <img src={logo} alt="logo was here" className={NavbarCSS.logo} />
        </a>
      </div>

      <nav className={NavbarCSS.navcontainer}>
        <ul className={NavbarCSS.listbox}>
          {links.map((item,index) => {
            return (
              <div className={NavbarCSS.listshadow} key={index}>
                <a href="blank"> <li>{item}</li></a>
               
              </div>
            );
          })}
        </ul>

        <div className={NavbarCSS.buttonbox}>
          <a href="blank">
            <div>Contact us</div>

            <div className={NavbarCSS.iconbox}>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
