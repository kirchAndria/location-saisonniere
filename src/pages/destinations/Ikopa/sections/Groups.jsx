import { Link } from "react-router-dom";
import { groupIncludes, groupPoints } from "../ikopaContent";
import { formatPrices } from "../format";

function Groups({ data }) {
  return (
    <section id="groups" className="ik-groups">
      <div className="ik-groups__inner">
        <header className="ik-head ik-head--light">
          <span className="ik-eyebrow">Groupes &amp; entreprises</span>
          <h2>
            Séminaires,
            <br />
            équipes, <em>événements</em>.
          </h2>
          <p>
            Quatre formules pour les groupes de 8 à 10 personnes : PME,
            associations et équipes.
          </p>
        </header>

        <div className="ik-offers">
          {data.groups.map((offer, index) => (
            <article key={offer.id} className="ik-offer">
              <span className="ik-offer__index">0{index + 1}</span>

              <h3>{offer.name}</h3>

              <div className="ik-offer__prices">
                {formatPrices(offer.pricing).map((price) => (
                  <p key={price.text + price.unit}>
                    <strong>{price.text}</strong>
                    <i>{price.unit}</i>
                  </p>
                ))}
              </div>

              {offer.capacity && <p className="ik-offer__capacity">{offer.capacity}</p>}

              <ul>
                {(groupIncludes[offer.id] || []).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <footer className="ik-groups__footer">
          <ul className="ik-groups__points">
            {groupPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Link className="ik-btn ik-btn--light" to="/booking?type=group&destination=ikopa">
            Demander un devis
          </Link>
        </footer>
      </div>
    </section>
  );
}

export default Groups;
