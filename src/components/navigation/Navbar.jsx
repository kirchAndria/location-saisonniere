import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { site } from "../../data/site";
import "./Navbar.css";

// overHero : la navbar est transparente au-dessus du Hero,
// puis devient blanc chaud dès qu'on descend (ou sur les autres pages).
function Navbar({ overHero = false }) {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const solid = !overHero || scrolled;

  /*
   * Gestion du clic sur "Destinations".
   *
   * Si on est déjà sur l'accueil :
   * → on descend directement vers la section.
   *
   * Si on est sur une autre page :
   * → on revient à l'accueil puis on descend vers la section.
   */
  const handleDestinationsClick = (event) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById("destinations");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    /*
     * On attend que la page d'accueil soit montée
     * avant de chercher la section.
     */
    setTimeout(() => {
      const section = document.getElementById("destinations");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header
      className={`navbar ${
        solid ? "navbar--solid" : "navbar--clear"
      }`}
    >
      <div className="navbar__container">

        {/* =================================================
            LOGO
            ================================================= */}

        <Link to="/" className="navbar__brand">
          {site.name}
        </Link>


        {/* =================================================
            NAVIGATION
            ================================================= */}

        <nav
          className="navbar__links"
          aria-label="Navigation principale"
        >

          {site.navigation.map((item) => {
  if (
    item.href === "/destinations" ||
    item.href === "/contact"
  ) {
    const sectionId =
      item.href === "/destinations"
        ? "destinations"
        : "contact";

    const handleSectionClick = (event) => {
      event.preventDefault();

      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        return;
      }

      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    };

    return (
      <a
        key={item.href}
        href={`#${sectionId}`}
        className="navbar__link"
        onClick={handleSectionClick}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      key={item.href}
      to={item.href}
      className={`navbar__link ${
        location.pathname === item.href
          ? "navbar__link--active"
          : ""
      }`}
    >
      {item.label}
    </Link>
  );
})}
        </nav>


        {/* =================================================
            RÉSERVATION
            ================================================= */}

        <Link
          to="/booking"
          className="navbar__booking"
        >
          Réserver
        </Link>

      </div>
    </header>
  );
}

export default Navbar;