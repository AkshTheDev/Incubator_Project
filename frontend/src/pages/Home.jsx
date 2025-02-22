import { HeroSection, Section2, Section3 } from "../components";
import LandingPage from "../layouts/LandingPage";

function Home(){
    return(
        <LandingPage>
            <HeroSection/>
            <Section2/>
            <Section3/>
        </LandingPage>

    )
}
export default Home