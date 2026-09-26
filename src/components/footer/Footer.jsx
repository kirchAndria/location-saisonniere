import { site } from "../../data/site";
import { destinations } from "../../data/destinations";
import "./Footer.css";

// Les deux numéros ci-dessous reviennent identiques dans les coordonnées
// de chacune des trois destinations (src/data/destinations.js) : ce sont
// donc les contacts centraux de la plateforme, pas des chiffres inventés.
const GENERAL_PHONES = ["+261 38 10 053 00", "+261 34 893 25 45"];
const GENERAL_EMAIL = "jdikopa.gestionimmo@gmail.com";

const tel = (n) => `tel:${n.replace(/[^\d+]/g, "")}`;

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">

        <div className="site-footer__brand">
          <a href="/" className="site-footer__name">
            {site.name}
          </a>

          <p className="site-footer__tagline">
            {site.description}
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Navigation">
          <span className="site-footer__label">Explorer</span>

          {site.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="site-footer__col" aria-label="Destinations">
          <span className="site-footer__label">Destinations</span>

          {destinations.map((d) => (
            <a key={d.id} href={`/destinations/${d.id}`}>
              {d.name}
            </a>
          ))}
        </nav>

        <div id="contact" className="site-footer__col site-footer__contact">
          <span className="site-footer__label">Contact</span>

          {GENERAL_PHONES.map((n) => (
            <a key={n} href={tel(n)}>
              {n}
            </a>
          ))}

          <a href={`mailto:${GENERAL_EMAIL}`}>{GENERAL_EMAIL}</a>
        </div>

      </div>

      <div className="site-footer__bottom">
        <span>Démonstration commerciale — Madagascar</span>
        <a href="/booking">Demander une réservation →</a>
      </div>
    </footer>
  );
}

export default Footer;
