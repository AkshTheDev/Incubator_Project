  import FooterCSS from './Footer.module.css'
function Footer() {
    return (
      <footer className={FooterCSS.MainContainer}>
        <div className={FooterCSS.footerTop}>
          <img src="\src\assets\images\logo.svg" alt="Website Logo" style={{width: "9rem"}} />
          <p style={{fontWeight: "500", color: "rgb(81, 119, 208)"}}>Your go-to platform for Scriptwriting.</p>
        </div>
  
        <div >
            <ul className={FooterCSS.footerLinks}>
                <li> <a href="/about">About</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact</a></li>
                <li> <a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
        </div>
  
        <div >
            <ul className={FooterCSS.social}>
                <li> <a href="https://twitter.com/yourpage">Twitter</a></li>
                <li> <a href="https://linkedin.com/company/yourpage">LinkedIn</a></li>
            </ul> 
        </div>
  
        <div className={FooterCSS.bottom}>
          <p>© 2025 Scrippy. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  