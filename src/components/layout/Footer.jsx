import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
          <a href="/" className="footer__logo">
            PLACEHOLDER
          </a>

          <p>
            Séjours, expériences et événements
            <br />
            dans des lieux d'exception à Madagascar.
          </p>
        </div>

        <div className="footer__column">
          <span>Navigation</span>

          <a href="/">Accueil</a>
          <a href="#destinations">Destinations</a>
          <a href="/experiences">Expériences</a>
          <a href="/groups">Groupes & entreprises</a>
        </div>

        <div className="footer__column">
          <span>Contact</span>

          <a href="#contact">Nous contacter</a>
          <a href="tel:+261347207860">
            +261 34 72 078 60
          </a>
          <a href="tel:+261381615253">
            +261 38 16 152 53
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} PLACEHOLDER
        </span>

        <span>
          Tous droits réservés.
        </span>
      </div>

    </footer>
  );
}

export default Footer;