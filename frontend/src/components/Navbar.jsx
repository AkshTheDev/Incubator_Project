import NavbarCSS from "../components/Navbar.module.css";
import arrow from "../images/arrow.svg";
import logo from "../images/logo.svg";
function Navbar() {
  return (
    <div className={NavbarCSS.header}>
        <div>
             <a href="./blank">
                <img src={logo} alt="logo was here" className={NavbarCSS.logo}/>
            </a>
        </div>
     

      <nav className={NavbarCSS.navcontainer}>
        <ul className={NavbarCSS.listbox}>
          <div className={NavbarCSS.listshadow}>
            <li>About</li>
          </div>
          <div className={NavbarCSS.listshadow}>
            <li>Pricing</li>
          </div>
          <div className={NavbarCSS.listshadow}>
            <li>Support</li>
          </div>
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
