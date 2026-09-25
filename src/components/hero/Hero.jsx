import { useCallback, useEffect, useRef, useState } from "react";
import useHeroSlides from "./useHeroSlides";
import { heroConfig } from "./heroConfig";
import "./Hero.css";

const pad = (n) => String(n).padStart(2, "0");

// Le zoom lent part d'un point différent à chaque photo : plus vivant, jamais répétitif
const ORIGINS = ["50% 50%", "35% 45%", "65% 55%", "50% 65%"];

function useReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        d={dir === "left" ? "M20 12H4m6-6-6 6 6 6" : "M4 12h16m-6-6 6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Slide({ slide, index, state }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // Image déjà en cache : onLoad peut être passé avant l'attache
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth) setLoaded(true);
  }, []);

  return (
    <div className={`hero__slide ${state}`} aria-hidden={state !== "is-active"}>
      <img
        ref={imgRef}
        className={`hero__img${loaded ? " is-loaded" : ""}`}
        src={slide.src}
        alt={slide.alt ?? slide.place ?? ""}
        draggable="false"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          objectPosition: slide.focus || "50% 50%",
          transformOrigin: ORIGINS[index % ORIGINS.length],
        }}
      />
    </div>
  );
}

function Hero() {
  const found = useHeroSlides(); // null = recherche en cours
  const slides = found ?? [];
  const total = slides.length;
  const reduced = useReducedMotion();

  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [mounted, setMounted] = useState(() => new Set([0])); // indices dont l'<img> est chargée
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const leaveTimer = useRef(null);
  const touch = useRef(null);

  const autoplay = total > 1 && !reduced;
  const paused = userPaused || hovering;

  const goTo = useCallback(
    (index) => {
      if (total < 2) return;
      const target = (index + total) % total;
      if (target === current) return;
      setLeaving(current);
      setCurrent(target);
      clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => setLeaving(null), heroConfig.fade + 200);
    },
    [current, total]
  );
  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useEffect(() => () => clearTimeout(leaveTimer.current), []);

  // Chargement progressif : la photo courante, la suivante et la précédente seulement
  useEffect(() => {
    if (!total) return;
    setMounted((set) => {
      const out = new Set(set);
      out.add(current).add((current + 1) % total).add((current - 1 + total) % total);
      return out;
    });
  }, [current, total]);

  // Balayage tactile
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)();
  };

  // La fin de l'animation de la barre de progression déclenche la photo suivante :
  // la pause et le rythme restent ainsi toujours synchronisés.
  const onFillEnd = (e) => {
    if (e.target === e.currentTarget) next();
  };

  const meta = slides[current] || {};
  const activeName = heroConfig.places.some((p) => p.name === meta.place) ? meta.place : null;

  return (
    <section
      className={`hero${reduced ? " hero--reduced" : ""}`}
      data-paused={paused ? "true" : "false"}
      aria-labelledby="hero-title"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        "--hero-interval": `${heroConfig.interval}ms`,
        "--hero-fade": `${heroConfig.fade}ms`,
        "--hero-ken": `${heroConfig.interval + heroConfig.fade}ms`,
      }}
    >
      {/* Photos : fond de secours sobre si /images/hero est vide */}
      <div className="hero__stage" aria-hidden={total === 0 ? "true" : undefined}>
        {slides.map(
          (slide, i) =>
            mounted.has(i) && (
              <Slide
                key={slide.src}
                slide={slide}
                index={i}
                state={i === current ? "is-active" : i === leaving ? "is-leaving" : ""}
              />
            )
        )}
        <div className="hero__shade" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Madagascar / Séjours et expériences</p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line"><span>Des lieux</span></span>
            <span className="hero__line"><span>pour vivre</span></span>
            <span className="hero__line"><span><em>autrement.</em></span></span>
          </h1>

          <p className="hero__text">
            Découvrez des séjours, des expériences et des espaces pensés pour
            vos moments en famille, entre amis ou en équipe.
          </p>

          <div className="hero__actions">
            <a href="#destinations" className="hero__btn hero__btn--primary">
              Explorer les destinations
            </a>
            <a href="/booking" className="hero__btn hero__btn--ghost">
              Réserver
            </a>
          </div>
        </div>

        <div className="hero__side">
          {/* Encadré des destinations (desktop) — la destination affichée est mise en avant */}
          <aside className="hero__places" aria-label="Nos destinations">
            <p className="hero__places-label">Trois destinations</p>
            <ul className="hero__places-list">
              {heroConfig.places.map((place) => {
                const state = place.name === activeName ? " is-active" : activeName ? " is-dim" : "";
                return (
                  <li key={place.name}>
                    <a href="#destinations" className={`hero__place${state}`}>
                      <span className="hero__place-name">{place.name}</span>
                      <span className="hero__place-area">{place.area}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

        {total > 0 && (
          <div className="hero__meta">
            {/* Légende de la photo (optionnelle, définie dans heroConfig.js) */}
            <div className="hero__caption" aria-live={paused || !autoplay ? "polite" : "off"}>
              {meta.place && (
                <p key={current} className="hero__caption-inner">
                  <span className="hero__caption-place">{meta.place}</span>
                  {meta.location && <span className="hero__caption-loc">{meta.location}</span>}
                </p>
              )}
            </div>

            {total > 1 && (
              <div
                className="hero__controls"
                role="group"
                aria-label={`Diaporama, image ${current + 1} sur ${total}`}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onFocus={() => setHovering(true)}
                onBlur={() => setHovering(false)}
              >
                <div className="hero__progress">
                  <span className="hero__count">{pad(current + 1)}</span>
                  <span className="hero__track" aria-hidden="true">
                    {autoplay ? (
                      <span key={current} className="hero__fill" onAnimationEnd={onFillEnd} />
                    ) : (
                      <span
                        className="hero__fill hero__fill--static"
                        style={{ transform: `scaleX(${(current + 1) / total})` }}
                      />
                    )}
                  </span>
                  <span className="hero__count">{pad(total)}</span>
                </div>

                <div className="hero__nav">
                  <button type="button" className="hero__navbtn hero__navbtn--prev" onClick={prev} aria-label="Photo précédente">
                    <Arrow dir="left" />
                  </button>
                  <button type="button" className="hero__navbtn hero__navbtn--next" onClick={next} aria-label="Photo suivante">
                    <Arrow dir="right" />
                  </button>
                  {autoplay && (
                    <button
                      type="button"
                      className="hero__pause"
                      onClick={() => setUserPaused((p) => !p)}
                      aria-label={userPaused ? "Relancer le diaporama" : "Mettre le diaporama en pause"}
                    >
                      {userPaused ? "Lecture" : "Pause"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        </div>
      </div>

      <a href="#destinations" className="hero__scroll">
        <span>Découvrir</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;