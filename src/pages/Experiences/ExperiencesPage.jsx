import { Link } from "react-router-dom";

import { experiences } from "../../data/experiences";
import { destinations } from "../../data/destinations";

import "../../styles/destination-hero.css";
import "../../styles/destination-sections.css";
import "./ExperiencesPage.css";

const destinationById = Object.fromEntries(destinations.map((d) => [d.id, d]));

const STATUS_LABEL = {
  to_confirm: "À confirmer",
  partially_to_confirm: "Certaines expériences à confirmer",
  not_available: "Pas encore disponible",
};

function ExperiencesPage() {
  return (
    <div className="dest-page xp-page">

      <header className="xp-header">
        <span className="d-eyebrow">Expériences</span>

        <h1>
          Découvrir,
          <br />
          destination par <em>destination</em>.
        </h1>

        <p>
          Bien-être, sport, nature, groupes & entreprises : un aperçu de ce qui
          se vit à Ikopa, Mantasoa et Hassani.
        </p>
      </header>

      {experiences.map((category) => (
        <section key={category.id} id={category.id} className="d-section xp-category">
          <header className="d-head d-head--tight">
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </header>

          <div className="xp-columns">
            {category.items.map((item) => {
              const destination = destinationById[item.destination];
              const empty = item.experiences.length === 0;

              return (
                <article key={item.destination} className="xp-column">
                  <h3>
                    <Link to={`/destinations/${item.destination}`}>
                      {destination?.name ?? item.destination}
                    </Link>
                  </h3>

                  {item.status && (
                    <p className="d-flag xp-column__status">
                      {STATUS_LABEL[item.status] ?? item.status}
                    </p>
                  )}

                  {empty ? (
                    <p className="d-note">Aucune expérience de cette catégorie pour le moment.</p>
                  ) : (
                    <ul className="xp-tags">
                      {item.experiences.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="d-final">
        <span className="d-eyebrow">Envie d'en vivre une ?</span>

        <h2>
          Demander
          <br />
          une <em>réservation</em>.
        </h2>

        <Link className="d-btn d-btn--light" to="/booking">
          Demander une réservation
        </Link>
      </section>

    </div>
  );
}

export default ExperiencesPage;
