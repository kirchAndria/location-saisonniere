import { Link } from "react-router-dom";

import { destinations } from "../../../data/destinations";
import { telHref } from "../format";

import "../../../styles/destination-hero.css";
import "../../../styles/destination-sections.css";
import "./HassaniPage.css";

const IMG = "/images/destinations/Hassani";
const COVER = `${IMG}/cover.jpg`;
// Seconde photo confirmée de la villa (aérienne, piscine et océan) :
// même complexe que cover.jpg, cadrage différent.
const AERIAL = "/images/hero/hero-06.jpg";

const hassani = destinations.find((d) => d.id === "hassani");

const EXPLORE = [
  {
    key: "stay",
    label: "Villa",
    title: "Séjourner en villa",
    text: "Jusqu'à 12 personnes, à quelques pas de la mer.",
    href: "#stay",
  },
  {
    key: "live",
    label: "Sur place",
    title: "Profiter du lieu",
    text: "Piscine, jardin tropical et accès direct à la plage.",
    href: "#live",
  },
];

function HassaniPage() {
  return (
    <div className="dest-page hb-page">

      {/* HERO */}
      <section className="dest-hero hb-hero">
        <img className="dest-hero__image" src={AERIAL} alt="Villa Hassani Beach, piscine face à l'océan" />
        <div className="dest-hero__overlay" />

        <div className="dest-hero__content">
          <p className="dest-hero__eyebrow">{hassani.location}</p>

          <h1 className="dest-hero__title">
            Hassani
            <br />
            <em>Beach</em>
          </h1>

          <p className="dest-hero__description">{hassani.slogan}.</p>
        </div>

        <a href="#intro" className="dest-hero__scroll">
          <span>Découvrir</span>
          <i aria-hidden="true" />
        </a>
      </section>

      {/* INTRO */}
      <section id="intro" className="dest-intro">
        <span className="dest-intro__label">Le lieu</span>

        <div className="dest-intro__content">
          <h2>
            Une villa privée,
            <br />
            les pieds dans l'<em>eau</em>.
          </h2>

          <p>
            Hassani Beach est une villa de {hassani.accommodation.capacity} personnes à
            Foulpointe, avec piscine privée, jardin tropical et accès direct
            à la mer — pensée pour les séjours en famille ou entre amis.
          </p>
        </div>
      </section>

      {/* EXPLORER */}
      <section className="dest-choice">
        <div className="dest-choice__intro">
          <span>Explorer Hassani</span>
          <h2>
            Une villa,
            <br />
            deux façons de la <em>vivre</em>.
          </h2>
        </div>

        <div className="dest-choice__grid" data-count={EXPLORE.length}>
          {EXPLORE.map((card, index) => (
            <a key={card.key} href={card.href} className="dest-choice__card">
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <small>{card.label}</small>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>

              <strong>→</strong>
            </a>
          ))}
        </div>
      </section>

      {/* HÉBERGEMENT */}
      <section id="stay" className="d-section">
        <div className="hb-stay">
          <div className="hb-stay__photos">
            <img className="hb-stay__main" src={COVER} alt="Villa Hassani Beach et son jardin" loading="lazy" />
          </div>

          <div className="hb-stay__info">
            <span className="d-eyebrow">Villa · {hassani.accommodation.capacity} personnes</span>

            <h2>
              Villa
              <br />
              <em>Hassani</em>
            </h2>

            <h3 className="d-subtitle">Intérieur</h3>
            <ul className="d-lines">
              {[...hassani.accommodation.rooms, ...hassani.accommodation.features].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="d-subtitle">Extérieur</h3>
            <ul className="d-lines">
              {hassani.accommodation.exterior.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="hb-stay__footer">
              <p className="d-price">
                {hassani.accommodation.price.amount}{" "}
                {hassani.accommodation.price.currency === "EUR" ? "€" : hassani.accommodation.price.currency}
                {" "}/ {hassani.accommodation.price.unit}
                <span className="d-flag">Tarif à confirmer</span>
              </p>

              <Link className="d-btn" to="/booking?type=stay&destination=hassani">
                Demander une réservation
              </Link>
            </div>

            <p className="d-note">
              Conditions (saison, durée minimum de séjour) non confirmées à ce jour.
            </p>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCES MENTIONNÉES */}
      <section id="live" className="d-section d-section--tint">
        <header className="d-head">
          <span className="d-eyebrow">Expériences</span>
          <h2>
            Mentionnées,
            <br />
            à <em>confirmer</em>.
          </h2>
          <p>
            Ces expériences ont été évoquées pour Hassani Beach mais ne sont pas
            encore des services officiellement disponibles.
          </p>
        </header>

        <ul className="hb-experiences">
          {hassani.activities.map((activity) => (
            <li key={activity.id}>
              <span>{activity.name}</span>
              <span className="d-flag">Expérience mentionnée — à confirmer</span>
            </li>
          ))}
        </ul>
      </section>

      {/* GALERIE */}
      <section className="d-section">
        <header className="d-head">
          <span className="d-eyebrow">Galerie</span>
          <h2>
            La villa
            <br />
            en <em>images</em>.
          </h2>
        </header>

        <div className="hb-gallery">
          <img src={COVER} alt="Jardin et piscine de la villa Hassani Beach" loading="lazy" />
          <img src={AERIAL} alt="Vue aérienne de la villa Hassani Beach" loading="lazy" />
        </div>

        <p className="d-note">D'autres photos seront ajoutées prochainement.</p>
      </section>

      {/* CONTACT */}
      <section className="d-section d-section--tint">
        <div className="d-contact">
          <header className="d-head d-head--tight">
            <span className="d-eyebrow">Localisation &amp; contact</span>
            <h2>
              Foulpointe,
              <br />
              côte <em>Est</em>.
            </h2>
          </header>

          <div className="hb-contact">
            {hassani.contacts.central.map((n) => (
              <a key={n} href={telHref(n)}>
                {n}
              </a>
            ))}

            <p className="d-note">
              Un événement à organiser ? Les formules groupes &amp; entreprises
              ne sont pas encore disponibles à Hassani —{" "}
              <Link to="/groups">découvrez-les à Ikopa et Mantasoa</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="d-final">
        <span className="d-eyebrow">Hassani Beach</span>

        <h2>
          Préparer
          <br />
          votre <em>séjour</em>.
        </h2>

        <p>Indiquez vos dates et le nombre de personnes, l'équipe reviendra vers vous.</p>

        <Link className="d-btn d-btn--light" to="/booking?destination=hassani">
          Demander une réservation
        </Link>
      </section>

    </div>
  );
}

export default HassaniPage;
