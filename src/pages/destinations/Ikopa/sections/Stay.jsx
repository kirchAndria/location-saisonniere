import { Link } from "react-router-dom";
import { ikopaImages } from "../ikopaContent";
import { money } from "../format";

function Stay({ data }) {
  const f4 = data.accommodation.items[0];
  const [main, ...more] = ikopaImages.f4;

  return (
    <section id="stay" className="ik-section">
      <header className="ik-head">
        <span className="ik-eyebrow">Hébergements</span>
        <h2>
          Séjourner
          <br />
          à l'<em>Ikopa</em>.
        </h2>
      </header>

      <article className="ik-stay">
        <div className="ik-stay__photos">
          <img className="ik-stay__main" src={main.src} alt={main.alt} loading="lazy" />

          <div className="ik-stay__more">
            {more.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
            ))}
          </div>
        </div>

        <div className="ik-stay__info">
          <small className="ik-eyebrow">Appartement · {f4.floor}</small>
          <h3>{f4.name}</h3>

          <dl className="ik-facts">
            <div>
              <dt>Surface</dt>
              <dd>{f4.area}</dd>
            </div>
            <div>
              <dt>Étage</dt>
              <dd>{f4.floor}</dd>
            </div>
            <div>
              <dt>Chambres</dt>
              <dd>{f4.rooms.length}</dd>
            </div>
          </dl>

          <ul className="ik-tags">
            {f4.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <ul className="ik-rooms">
            {f4.rooms.map((room) => {
              const [title, detail] = room.split(" — ");
              return (
                <li key={room}>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </li>
              );
            })}
          </ul>

          <div className="ik-stay__footer">
            <p className="ik-price">
              {f4.price ? money(f4.price) : "Tarif sur demande"}
            </p>

            <Link className="ik-btn" to="/booking?type=stay&destination=ikopa">
              Demander une réservation
            </Link>
          </div>

          <p className="ik-note">
            Des villas sont également proposées. Les détails sont communiqués sur demande.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Stay;
