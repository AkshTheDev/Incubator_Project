import CardCSS from "./Card.module.css";
function Card({ name, feedback, role }) {
  return (
    <div className={CardCSS.Container}>
      <div>
        <h3 className={CardCSS.name}>{name}</h3>
        <p className={CardCSS.role}>{role}</p>
        <p className={CardCSS.feedback}>"{feedback}"</p>
      </div>
    </div>
  );
}
export default Card;
