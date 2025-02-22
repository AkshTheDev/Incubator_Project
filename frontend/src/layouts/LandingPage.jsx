import { Navbar } from "../components";
import { Footer } from "../components";


// import LandingPageCSS from "../pages/LandingPageCSS.module.css";
// import Background from "../assets/images/background.svg";
function LandingPage({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}

export default LandingPage;
