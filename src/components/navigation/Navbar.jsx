import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../../data/site";
import "./Navbar.css";

// La navbar est transparente au-dessus du Hero de l'accueil,
// puis devient blanc chaud dès qu'on descend (ou sur les autres pages).
function Navbar() {
  const { pathname } = useLocation();
  const overHero = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !overHero || scrolled || open;

  return (
    <header className={`navbar ${solid ? "navbar--solid" : "navbar--clear"}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          {site.name}
        </a>

        <nav className="navbar__links" aria-label="Navigation principale">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="/booking" className="navbar__booking">
            Réserver
          </a>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="navbar-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="navbar-mobile"
        className={`navbar__mobile ${open ? "is-open" : ""}`}
        aria-label="Navigation (mobile)"
      >
        {site.navigation.map((item) => (
          <a key={item.href} href={item.href} className="navbar__mobile-link">
            {item.label}
          </a>
        ))}

        <a href="/booking" className="navbar__mobile-booking">
          Réserver
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
