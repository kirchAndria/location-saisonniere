import { useParams } from "react-router-dom";

import IkopaPage from "./Ikopa/IkopaPage";
import MantasoaPage from "./Mantasoa/MantasoaPage";
import HassaniPage from "./Hassani/HassaniPage";

const PAGES = {
  ikopa: IkopaPage,
  mantasoa: MantasoaPage,
  hassani: HassaniPage,
};

function DestinationPage() {
  const { id } = useParams();
  const Page = PAGES[id];

  if (Page) {
    return <Page />;
  }

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

export default DestinationPage;
