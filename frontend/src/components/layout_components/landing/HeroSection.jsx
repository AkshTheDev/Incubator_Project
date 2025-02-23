import HeroSectionCSS from "./HeroSection.module.css";
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
        <a href="/blank">
            Get Started
        </a>
      </div>
    </section>
  );
}
export default HeroSection;
