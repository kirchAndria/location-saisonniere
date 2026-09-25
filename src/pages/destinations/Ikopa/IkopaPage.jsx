import { destinations } from "../../../data/destinations";
import { ikopaImages } from "./ikopaContent";

import Stay from "./sections/Stay";
import Activities from "./sections/Activities";
import Facilities from "./sections/Facilities";
import Groups from "./sections/Groups";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import FinalCta from "./sections/FinalCta";

import "./IkopaPage.css";
import "./IkopaSections.css";

const ikopa = destinations.find((destination) => destination.id === "ikopa");

function IkopaPage() {
  return (
    <div className="ikopa-page">

      {/* HERO */}
      <section className="ikopa-hero">

        <img
          className="ikopa-hero__image"
          src={ikopaImages.hero}
          alt="Jardin de l'Ikopa"
        />

        <div className="ikopa-hero__overlay" />

        <div className="ikopa-hero__content">

          <span className="ikopa-hero__eyebrow">
            Anosizato Est · Antananarivo
          </span>

          <h1 className="ikopa-hero__title">
            Jardin
            <br />
            de l'<em>Ikopa</em>
          </h1>

          <p className="ikopa-hero__description">
            Nature en ville, bien-être et sport.
          </p>

        </div>

        <div className="ikopa-hero__scroll">
          <span>Découvrir le lieu</span>
          <span className="ikopa-hero__scroll-line" />
        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="ikopa-intro">

        <div className="ikopa-intro__label">
          Le lieu
        </div>

        <div className="ikopa-intro__content">

          <h2>
            Un espace pensé
            <br />
            pour vivre <em>autrement</em>.
          </h2>

          <p>
            Le Jardin de l'Ikopa est une résidence située à
            Anosizato, réunissant hébergement, sport, bien-être
            et espaces dédiés aux groupes et aux entreprises.
          </p>

        </div>

      </section>


      {/* EXPERIENCE CHOICE */}
      <section className="ikopa-choice">

        <div className="ikopa-choice__intro">

          <span>
            Explorer l'Ikopa
          </span>

          <h2>
            Une destination,
            <br />
            plusieurs façons de la <em>vivre</em>.
          </h2>

        </div>


        <div className="ikopa-choice__grid">

          <a href="#stay" className="ikopa-choice__card">
            <span>01</span>

            <div>
              <small>Hébergement</small>
              <h3>Séjourner</h3>
              <p>
                Découvrez les appartements et les espaces
                disponibles au sein de la résidence.
              </p>
            </div>

            <strong>→</strong>
          </a>


          <a href="#activities" className="ikopa-choice__card">
            <span>02</span>

            <div>
              <small>Sport & bien-être</small>
              <h3>Vivre sur place</h3>
              <p>
                Piscine, sport, tennis et soins pour profiter
                pleinement du lieu.
              </p>
            </div>

            <strong>→</strong>
          </a>


          <a href="#groups" className="ikopa-choice__card">
            <span>03</span>

            <div>
              <small>Professionnels</small>
              <h3>Entreprises & événements</h3>
              <p>
                Des espaces et formules conçus pour les groupes,
                séminaires et moments de cohésion.
              </p>
            </div>

            <strong>→</strong>
          </a>

        </div>

      </section>


      {/* SECTIONS DÉTAILLÉES */}
      <Stay data={ikopa} />
      <Activities data={ikopa} />
      <Facilities data={ikopa} />
      <Groups data={ikopa} />
      <Gallery />
      <Contact data={ikopa} />
      <FinalCta />

    </div>
  );
}

export default IkopaPage;