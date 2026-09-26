import { useCallback, useEffect, useRef, useState } from "react";
import { destinations } from "../../data/destinations";
import "./Destinations.css";

const destinationImages = {
  ikopa: "/images/destinations/Ikopa/facade.jpg",
  mantasoa: "/images/destinations/Mantasoa/cover.jpg",
  hassani: "/images/destinations/Hassani/cover.jpg",
};

const ROTATE_MS = 3000;

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

function Destinations() {
  const reduced = useReducedMotion();

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const autoplay = destinations.length > 1 && !reduced && !paused;

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % destinations.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return undefined;
    timer.current = setInterval(advance, ROTATE_MS);
    return () => clearInterval(timer.current);
  }, [autoplay, advance]);

  return (
    <section className="destinations" id="destinations">

      <div className="destinations__intro">

        <div>
          <span className="destinations__eyebrow">
            Nos destinations
          </span>

          <h2 className="destinations__title">
            Des lieux à découvrir,
            <br />
            pour vivre autrement.
          </h2>
        </div>

        <p className="destinations__description">
          Trois destinations, trois atmosphères.
          Choisissez votre prochaine expérience.
        </p>

      </div>


      <div
        className="destinations__row"
        onMouseLeave={() => setPaused(false)}
      >

        {destinations.map((destination, index) => {
          const isActive = index === active;

          return (
            <a
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className={`destination-panel ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => {
                setPaused(true);
                setActive(index);
              }}
              onFocus={() => {
                setPaused(true);
                setActive(index);
              }}
              onBlur={() => setPaused(false)}
            >

              <img
                className="destination-panel__image"
                src={destinationImages[destination.id]}
                alt={destination.name}
                loading="lazy"
              />

              <div className="destination-panel__overlay" />

              <div className="destination-panel__content">
                <span className="destination-panel__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="destination-panel__location">
                  {destination.location}
                </span>

                <h3 className="destination-panel__name">
                  {destination.name}
                </h3>

                <p className="destination-panel__tagline">
                  {destination.tagline ?? destination.theme}
                </p>

                <span className="destination-panel__link">
                  Découvrir →
                </span>
              </div>

            </a>
          );
        })}

      </div>

      <div className="destinations__dots" role="tablist" aria-label="Destination mise en avant">
        {destinations.map((destination, index) => (
          <button
            key={destination.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={destination.name}
            className={index === active ? "is-active" : ""}
            onClick={() => {
              setPaused(true);
              setActive(index);
            }}
          />
        ))}
      </div>

    </section>
  );
}

export default Destinations;
