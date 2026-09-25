import { ikopaImages } from "../ikopaContent";

// Les lignes « techniques » sont présentées à part, sans les gonfler.
const SERVICE = /sécurité|délestage|indépendantes/i;

function Facilities({ data }) {
  const onSite = data.facilities.filter((item) => !SERVICE.test(item));
  const services = data.facilities.filter((item) => SERVICE.test(item));

  return (
    <section className="ik-section">
      <div className="ik-facilities">
        <img
          className="ik-facilities__image"
          src={ikopaImages.garden.src}
          alt={ikopaImages.garden.alt}
          loading="lazy"
        />

        <div className="ik-facilities__content">
          <header className="ik-head ik-head--tight">
            <span className="ik-eyebrow">Équipements &amp; services</span>
            <h2>
              Tout est
              <br />
              sur place.
            </h2>
          </header>

          <h3 className="ik-subtitle">Sur place</h3>
          <ul className="ik-lines">
            {onSite.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="ik-subtitle">Confort &amp; sécurité</h3>
          <ul className="ik-lines">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
