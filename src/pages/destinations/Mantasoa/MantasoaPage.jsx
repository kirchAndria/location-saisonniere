import { Link } from "react-router-dom";

import { destinations } from "../../../data/destinations";
import { formatPrices, telHref } from "../format";

import "../../../styles/destination-hero.css";
import "../../../styles/destination-sections.css";
import "./MantasoaPage.css";

const IMG = "/images/destinations/Mantasoa";
// La résidence Jardin de l'Ikopa gère aussi Mantasoa : les mêmes photos
// (jardin/chalet) reviennent dans experiences/, ce sont les seules
// disponibles pour l'instant.
const COVER = `${IMG}/cover.jpg`;
const LOUNGE = "/images/experiences/gemi-01.jpg";
const FIRE = "/images/experiences/gemi-02.jpg";

const mantasoa = destinations.find((d) => d.id === "mantasoa");

const EXPLORE = [
  {
    key: "stay",
    label: "Hébergement",
    title: "Séjourner au bord du lac",
    text: "La maison principale et son chalet, face à l'eau.",
    href: "#stay",
  },
  {
    key: "live",
    label: "Sur place",
    title: "Vivre l'instant",
    text: "Loisirs inclus, nature et services sur demande.",
    href: "#live",
  },
  {
    key: "groups",
    label: "Professionnels",
    title: "Réunir une équipe",
    text: "Journées de cohésion et team building résidentiel.",
    href: "#groups",
  },
];

const INCLUDED_ACTIVITIES = mantasoa.activities.filter((a) => a.included);
const OPTIONAL_ACTIVITIES = mantasoa.activities.filter((a) => !a.included);

function MantasoaPage() {
  return (
    <div className="dest-page ms-page">

      {/* HERO */}
      <section className="dest-hero ms-hero">
        <img className="dest-hero__image" src={COVER} alt="Chalet de Lake House Mantasoa au crépuscule" />
        <div className="dest-hero__overlay" />

        <div className="dest-hero__content">
          <p className="dest-hero__eyebrow">{mantasoa.location} · Madagascar</p>

          <h1 className="dest-hero__title">
            Lake House
            <br />
            <em>Mantasoa</em>
          </h1>

          <p className="dest-hero__description">{mantasoa.theme}.</p>
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
            Une maison privée,
            <br />
            face au <em>lac</em>.
          </h2>

          <p>
            Lake House Mantasoa réunit une maison principale et un chalet
            au bord du lac de Mantasoa, pensés pour la déconnexion et les
            moments à plusieurs : accès privé au lac, coin feu et grande
            terrasse panoramique.
          </p>
        </div>
      </section>

      {/* EXPLORER */}
      <section className="dest-choice">
        <div className="dest-choice__intro">
          <span>Explorer Mantasoa</span>
          <h2>
            Une maison,
            <br />
            plusieurs façons de la <em>vivre</em>.
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
        <header className="d-head">
          <span className="d-eyebrow">Hébergement</span>
          <h2>
            La maison
            <br />
            et le <em>chalet</em>.
          </h2>
        </header>

        <div className="ms-lodging">
          <article className="ms-lodging__card">
            <img src={FIRE} alt="Soirée au coin du feu à Lake House Mantasoa" loading="lazy" />

            <div>
              <h3>{mantasoa.accommodation.mainHouse.name}</h3>

              <ul className="d-lines">
                {mantasoa.accommodation.mainHouse.rooms.map((room) => (
                  <li key={room}>{room}</li>
                ))}
              </ul>

              <div className="ms-tags">
                {mantasoa.accommodation.mainHouse.features.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>
          </article>

          <article className="ms-lodging__card">
            <img src={LOUNGE} alt="Salon du chalet de Lake House Mantasoa" loading="lazy" />

            <div>
              <h3>
                {mantasoa.accommodation.chalet.name}
                {mantasoa.accommodation.chalet.accommodationStatus === "to_confirm" && (
                  <span className="d-flag">Rôle à confirmer</span>
                )}
              </h3>

              <div className="ms-tags">
                {mantasoa.accommodation.chalet.features.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              <p className="d-note">
                Le chalet est présenté comme un espace de vie annexe ;
                sa disponibilité comme hébergement à part reste à confirmer.
              </p>
            </div>
          </article>
        </div>

        <div className="ms-included">
          <h3 className="d-subtitle">Inclus dans le séjour</h3>

          <ul className="d-lines">
            {mantasoa.accommodation.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ms-stay-footer">
          <p className="d-price">Tarif sur demande</p>

          <Link className="d-btn" to="/booking?type=stay&destination=mantasoa">
            Demander une réservation
          </Link>
        </div>
      </section>

      {/* ACTIVITÉS & SERVICES */}
      <section id="live" className="d-section d-section--tint">
        <header className="d-head">
          <span className="d-eyebrow">Sur place</span>
          <h2>
            Loisirs inclus
            <br />
            &amp; services en <em>option</em>.
          </h2>
        </header>

        <h3 className="d-subtitle">Inclus, sans supplément</h3>

        <div className="ms-tags ms-tags--lg">
          {INCLUDED_ACTIVITIES.map((a) => (
            <span key={a.id}>{a.name}</span>
          ))}
        </div>

        <h3 className="d-subtitle">Services sur demande</h3>

        <ul className="ms-services">
          {OPTIONAL_ACTIVITIES.map((a) => {
            const prices = formatPrices(a.pricing);
            return (
              <li key={a.id} className="ms-service">
                <span className="ms-service__name">{a.name}</span>

                {prices.length > 0 ? (
                  <span className="ms-service__price">
                    {prices.map((p) => (
                      <span key={p.text}>
                        <strong>{p.text}</strong>
                        <i>{p.unit}</i>
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className="ms-service__price d-muted">Sur demande</span>
                )}
              </li>
            );
          })}
        </ul>

        <p className="d-note">
          Capacité du bateau : jusqu'à {mantasoa.activities.find((a) => a.id === "boat")?.capacity} personnes.
          Tarifs non confirmés indiqués « sur demande ».
        </p>
      </section>

      {/* ÉQUIPEMENTS */}
      <section className="d-section">
        <div className="d-facilities">
          <img className="d-facilities__image" src={COVER} alt="Extérieur de Lake House Mantasoa" loading="lazy" />

          <div>
            <header className="d-head d-head--tight">
              <span className="d-eyebrow">Équipements</span>
              <h2>
                Tout pour se
                <br />
                sentir chez <em>soi</em>.
              </h2>
            </header>

            <ul className="d-lines">
              {mantasoa.facilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GROUPES & ENTREPRISES */}
      <section id="groups" className="d-groups">
        <header className="d-head d-head--light">
          <span className="d-eyebrow">Groupes &amp; entreprises</span>
          <h2>
            Cohésion,
            <br />
            au bord de l'<em>eau</em>.
          </h2>
          <p>Quatre formules, de la journée détente au team building résidentiel.</p>
        </header>

        <div className="d-offers">
          {mantasoa.groups.map((offer, index) => {
            const groupPrice = formatPrices(offer.pricing)[0];
            const perPerson = offer.pricePerPerson
              ? formatPrices({ ...offer.pricePerPerson, unit: "personne" })[0]
              : null;

            return (
              <article key={offer.id} className="d-offer">
                <span className="d-offer__index">0{index + 1}</span>

                <h3>{offer.name}</h3>

                <div className="d-offer__prices">
                  {groupPrice && (
                    <p>
                      <strong>{groupPrice.text}</strong>
                      <i>{groupPrice.unit}</i>
                    </p>
                  )}
                  {perPerson && (
                    <p className="ms-offer__perperson">
                      soit {perPerson.text} / personne
                    </p>
                  )}
                </div>

                <ul>
                  {offer.schedule && <li>{offer.schedule}</li>}
                  {offer.duration && <li>{offer.duration}</li>}
                  {offer.capacity && <li>Jusqu'à {offer.capacity} personnes</li>}
                </ul>
              </article>
            );
          })}
        </div>

        <footer className="d-groups__footer">
          <p className="d-note" style={{ color: "rgba(244, 236, 223, 0.72)" }}>
            Groupes de 8 à 20 personnes selon la formule
          </p>

          <Link className="d-btn d-btn--light" to="/booking?type=group&destination=mantasoa">
            Demander un devis
          </Link>
        </footer>
      </section>

      {/* GALERIE */}
      <section className="d-section">
        <header className="d-head">
          <span className="d-eyebrow">Galerie</span>
          <h2>
            Le lac
            <br />
            en <em>images</em>.
          </h2>
        </header>

        <div className="ms-gallery">
          <img src={COVER} alt="Chalet de Lake House Mantasoa" loading="lazy" />
          <img src={FIRE} alt="Soirée au coin du feu" loading="lazy" />
          <img src={LOUNGE} alt="Salon du chalet" loading="lazy" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-mantasoa" className="d-section d-section--tint">
        <div className="d-contact">
          <header className="d-head d-head--tight">
            <span className="d-eyebrow">Localisation &amp; contact</span>
            <h2>
              Mantasoa,
              <br />
              <em>Madagascar</em>.
            </h2>
          </header>

          <div className="ms-contact">
            {mantasoa.contacts.central.map((n) => (
              <a key={n} href={telHref(n)}>
                {n}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="d-final">
        <span className="d-eyebrow">Lake House Mantasoa</span>

        <h2>
          Préparer
          <br />
          votre <em>escale</em>.
        </h2>

        <p>Séjour ou événement d'équipe : indiquez votre demande et l'équipe reviendra vers vous.</p>

        <Link className="d-btn d-btn--light" to="/booking?destination=mantasoa">
          Demander une réservation
        </Link>
      </section>

    </div>
  );
}

export default MantasoaPage;
