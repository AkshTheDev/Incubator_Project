import NavbarCSS from "../components/Navbar.module.css";
import arrow from "../images/arrow.svg";
import logo from "../images/logo.svg";
function Navbar() {
  const links = ["About", "Pricing", "Support"];
  return (
    <div className={NavbarCSS.header}>
      <div>
        <a href="./blank">
          <img src={logo} alt="logo was here" className={NavbarCSS.logo} />
        </a>
      </div>

      <nav className={NavbarCSS.navcontainer}>
        <ul className={NavbarCSS.listbox}>
          {links.map((item) => {
            return (
              <div className={NavbarCSS.listshadow}>
                <li>{item}</li>
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
