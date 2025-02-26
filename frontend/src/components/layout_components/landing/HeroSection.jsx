import HeroSectionCSS from "./HeroSection.module.css";
import {Link} from "react-router-dom"

function HeroSection() {
  return (
    <section className={HeroSectionCSS.featurepage}>
      <span
        style={{
          fontWeight: "bolder",
          fontSize: "80px",
          fontFamily: "Audrey, sans-serif",
          paddingTop: "15rem",
        }}
      >
        Write Award-Winning Scripts
      </span>
      <div className={HeroSectionCSS.button}>
        <Link to="/login">
            Get Started
        </Link>
      </div>
    </section>
    
  );
}
export default HeroSection;
