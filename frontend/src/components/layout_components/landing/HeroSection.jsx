import HeroSectionCSS from "./HeroSection.module.css";
import {Link} from "react-router-dom"

function HeroSection() {
  return (
    <section className={HeroSectionCSS.featurepage}>
      <div className={HeroSectionCSS.text} style={{marginTop: "15rem",padding: "5px"}}>
      <p
        style={{
          fontWeight: "bolder",
          fontSize: "80px",
          fontFamily: "Audrey, sans-serif",
          
        }
      
      }
      
      >
        Write Award-Winning Scripts
      </p>
      </div>
      
      <div className={HeroSectionCSS.button}>
        <Link to="/login">
            Get Started
        </Link>
      </div>
    </section>
    
  );
}
export default HeroSection;
