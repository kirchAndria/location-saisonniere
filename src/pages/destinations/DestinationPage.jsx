import { useParams } from "react-router-dom";

import IkopaPage from "./Ikopa/IkopaPage";

const destinationNames = {
  mantasoa: "Lake House Mantasoa",
  hassani: "Hassani Beach",
};

function DestinationPage() {
  const { id } = useParams();

  // Ikopa possède déjà sa vraie page
  if (id === "ikopa") {
    return <IkopaPage />;
  }

  // Pages temporaires pour les autres destinations
  const destinationName = destinationNames[id];

  if (!destinationName) {
    return (
      <section className="destination-placeholder">
        <span>Destination</span>

        <h1>Destination introuvable</h1>

        <p>
          Cette destination n'existe pas sur la plateforme.
        </p>

        <a href="/">
          Retour à l'accueil →
        </a>
      </section>
    );
  }

  return (
    <section className="destination-placeholder">
      <span>À découvrir prochainement</span>

      <h1>{destinationName}</h1>

      <p>
        Cette destination est actuellement en préparation.
        Revenez bientôt pour découvrir son univers,
        ses hébergements et ses expériences.
      </p>

      <a href="/">
        Retour aux destinations →
      </a>
    </section>
  );
}

export default DestinationPage;