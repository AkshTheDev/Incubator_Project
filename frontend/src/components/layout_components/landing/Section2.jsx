import Section2CSS from "./Section2CSS.module.css";

function Section2() {
    return (
        <section className={Section2CSS.container}>
            <h2 className={Section2CSS.heading}>How It Works</h2>
            <div className={Section2CSS.steps}>
                <div className={Section2CSS.step}>
                    <h3>1. Start Writing</h3>
                    <br />
                    <p>Use our AI-powered script editor to format your screenplay instantly.</p>
                </div>
                <div className={Section2CSS.step}>
                    <h3>2. AI Assistance</h3>
                    <br />
                    <p>Get real-time feedback, dialogue suggestions, and structure analysis.</p>
                </div>
                <div className={Section2CSS.step}>
                    <h3>3. Pitch & Share</h3>
                    <br />
                    <p>Submit your script to industry professionals or collaborate with writers.</p>
                </div>
            </div>
        </section>
    );
}

export default Section2;
