import { Link } from "react-router-dom";

function FinalCta() {
  return (
    <section className="ik-final">
      <span className="ik-eyebrow">Jardin de l'Ikopa</span>

      <h2>
        Préparer
        <br />
        votre <em>séjour</em>.
      </h2>

      <p>
        Séjour, activité ou événement : indiquez votre demande et l'équipe
        reviendra vers vous.
      </p>

      <Link className="ik-btn ik-btn--light" to="/booking?destination=ikopa">
        Demander une réservation
      </Link>
    </section>
  );
}

export default FinalCta;
