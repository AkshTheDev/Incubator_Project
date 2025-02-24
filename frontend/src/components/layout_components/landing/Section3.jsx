import Section3CSS from "./Section3.module.css";
import Card from "../../../UI/Card"; 


function Section3() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This scriptwriting tool is a game changer! The AI suggestions are incredibly helpful.",
      role: "Screenwriter",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love how intuitive the platform is. The formatting automation saves so much time!",
      role: "Filmmaker",
    },
    {
      name: "David Johnson",
      feedback:
        "Great for collaboration! The AI-powered analysis really improves my storytelling.",
      role: "Producer",
    },
    {
        name: "David Johnson",
        feedback:
          "Great for collaboration! The AI-powered analysis really improves my storytelling.",
        role: "Producer",
      },
  ];
  const testimonials2 = [
    {
      name: "John Doe",
      feedback:
        "This scriptwriting tool is a game changer! The AI suggestions are incredibly helpful.",
      role: "Screenwriter",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love how intuitive the platform is. The formatting automation saves so much time!",
      role: "Filmmaker",
    },
    {
      name: "David Johnson",
      feedback:
        "Great for collaboration! The AI-powered analysis really improves my storytelling.",
      role: "Producer",
    },
    {
        name: "David Johnson",
        feedback:
          "Great for collaboration! The AI-powered analysis really improves my storytelling.",
        role: "Producer",
      },
  ];

  return (
    <section className={Section3CSS.section3}>
      <div className={Section3CSS.textbox}>
        <span className={Section3CSS.text}>What our clients have to say</span>
      </div>
      <div className={Section3CSS.cardcontainer}>
        <div className={Section3CSS.verticaldiv}>
          <div className={Section3CSS.cardbox}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                name={testimonial.name}
                feedback={testimonial.feedback}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
        <div className={Section3CSS.verticaldiv}>
        <div className={Section3CSS.cardbox}>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                name={testimonial.name}
                feedback={testimonial.feedback}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
