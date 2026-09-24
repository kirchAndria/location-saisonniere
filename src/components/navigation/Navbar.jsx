import { useEffect, useState } from "react";
import { site } from "../../data/site";
import "./Navbar.css";

// overHero : la navbar est transparente au-dessus du Hero,
// puis devient blanc chaud dès qu'on descend (ou sur les autres pages).
function Navbar({ overHero = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overHero || scrolled;

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

        <a href="/booking" className="navbar__booking">
          Réserver
        </a>
      </div>
    </header>
  );
}

export default Navbar;