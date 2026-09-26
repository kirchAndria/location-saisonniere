import { Link } from "react-router-dom";

import { destinations } from "../../data/destinations";
import { formatPrices } from "../destinations/format";

import "../../styles/destination-hero.css";
import "../../styles/destination-sections.css";
import "./GroupsPage.css";

const STEPS = [
  { n: "01", title: "Réunir", text: "Choisissez la destination et la formule adaptée à votre groupe." },
  { n: "02", title: "Organiser", text: "Nous confirmons les disponibilités, le format et le devis." },
  { n: "03", title: "Vivre l'expérience", text: "Séminaire, team building ou journée de cohésion, sur place." },
];

const OFFERING_DESTINATIONS = destinations.filter((d) => d.groups && d.groups.length > 0);
const OTHER_DESTINATIONS = destinations.filter((d) => !d.groups || d.groups.length === 0);

function GroupsPage() {
  return (
    <div className="dest-page gr-page">

      <header className="gr-header">
        <span className="d-eyebrow">Groupes &amp; entreprises</span>

        <h1>
          Réunir une équipe,
          <br />
          créer un <em>souvenir</em>.
        </h1>

        <p>
          Séminaires, journées de cohésion et team building : les formules
          disponibles à Ikopa et à Mantasoa.
        </p>
      </header>

      <section className="gr-steps">
        {STEPS.map((step) => (
          <div key={step.n} className="gr-step">
            <span>{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      {OFFERING_DESTINATIONS.map((destination) => (
        <section
          key={destination.id}
          id={destination.id}
          className="d-section gr-destination"
        >
          <header className="d-head d-head--tight">
            <span className="d-eyebrow">{destination.location}</span>
            <h2>{destination.name}</h2>
          </header>

          <div className="d-offers gr-offers">
            {destination.groups.map((offer, index) => {
              const groupPrice = formatPrices(offer.pricing)[0];
              const perPersonPrice = Array.isArray(offer.pricing)
                ? formatPrices(offer.pricing)
                : offer.pricePerPerson
                ? formatPrices({ ...offer.pricePerPerson, unit: "personne" })
                : [];

              return (
                <article key={offer.id} className="d-offer">
                  <span className="d-offer__index">0{index + 1}</span>

                  <h3>{offer.name}</h3>

                  <div className="d-offer__prices">
                    {Array.isArray(offer.pricing) ? (
                      formatPrices(offer.pricing).map((p) => (
                        <p key={p.text + p.unit}>
                          <strong>{p.text}</strong>
                          <i>{p.unit}</i>
                        </p>
                      ))
                    ) : groupPrice ? (
                      <p>
                        <strong>{groupPrice.text}</strong>
                        <i>{groupPrice.unit}</i>
                      </p>
                    ) : (
                      <p className="d-muted">Sur demande</p>
                    )}

                    {offer.pricePerPerson && (
                      <p className="gr-perperson">soit {perPersonPrice[0]?.text} / personne</p>
                    )}
                  </div>

                  <ul>
                    {offer.schedule && <li>{offer.schedule}</li>}
                    {offer.duration && <li>{offer.duration}</li>}
                    {offer.capacity && (
                      <li>
                        {typeof offer.capacity === "string" ? offer.capacity : `Jusqu'à ${offer.capacity} personnes`}
                      </li>
                    )}
                  </ul>
                </article>
              );
            })}
          </div>

          <footer className="gr-destination__footer">
            <Link className="d-btn" to={`/booking?type=group&destination=${destination.id}`}>
              Demander un devis — {destination.name}
            </Link>

            <Link className="gr-link" to={`/destinations/${destination.id}`}>
              Voir la destination →
            </Link>
          </footer>
        </section>
      ))}

      {OTHER_DESTINATIONS.length > 0 && (
        <section className="d-section d-section--tint">
          <p className="d-note gr-note">
            {OTHER_DESTINATIONS.map((d) => d.name).join(", ")} :
            les formules groupes &amp; entreprises ne sont pas encore disponibles.
          </p>
        </section>
      )}

      <section className="d-final">
        <span className="d-eyebrow">Un projet d'événement ?</span>

        <h2>
          Parlons de
          <br />
          votre <em>événement</em>.
        </h2>

        <Link className="d-btn d-btn--light" to="/booking?type=group">
          Parler de mon événement
        </Link>
      </section>

    </div>
  );
}

export default GroupsPage;
