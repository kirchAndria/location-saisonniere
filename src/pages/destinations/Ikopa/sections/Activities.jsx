import { useRef } from "react";
import { Link } from "react-router-dom";

import { activityImages, activityNotes } from "../ikopaContent";
import { formatPrices } from "../format";

const CATEGORIES = ["Bien-être", "Sport"];

const pad = (n) => String(n).padStart(2, "0");

function ActivityCard({ activity, index }) {
  const image = activityImages[activity.id];
  const note = activityNotes[activity.id];
  const prices = formatPrices(activity.pricing);

  return (
    <article className="ik-activity-card">
      <div className="ik-activity-card__image">
        {image ? (
          <img
            src={image}
            alt={activity.name}
            loading={index < 3 ? "eager" : "lazy"}
          />
        ) : (
          <div
            className="ik-activity-card__image-empty"
            aria-hidden="true"
          />
        )}

        <div className="ik-activity-card__overlay" />

        <span className="ik-activity-card__arrow">
          ↗
        </span>
      </div>

      <div className="ik-activity-card__content">

        <div>
          <p className="ik-activity-card__label">
            <span>{pad(index + 1)}</span>
            {activity.category}
          </p>

          <h3>{activity.name}</h3>

          {activity.schedule && (
            <p className="ik-activity-card__schedule">
              {activity.schedule}

              {activity.scheduleStatus === "to_confirm" && (
                <em>À confirmer</em>
              )}
            </p>
          )}

          {note && (
            <p className="ik-activity-card__note">
              {note}
            </p>
          )}
        </div>

        <div className="ik-activity-card__prices">

          {prices.length === 0 ? (
            <span className="ik-activity-card__request">
              Tarif sur demande
            </span>
          ) : (
            prices.map((price, priceIndex) => (
              <span
                key={`${activity.id}-${price.label || "price"}-${priceIndex}`}
                className="ik-activity-card__price"
              >
                {price.label && (
                  <small>{price.label}</small>
                )}

                <strong>{price.text}</strong>

                {price.unit && (
                  <i>{price.unit}</i>
                )}
              </span>
            ))
          )}

        </div>

      </div>
    </article>
  );
}

function Activities({ data }) {
  const carouselRef = useRef(null);

  const activities = data.activities.filter((activity) =>
    CATEGORIES.includes(activity.category)
  );

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.72;

    carouselRef.current.scrollBy({
      left: direction * amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="activities" className="ik-section ik-section--tint ik-section--bleed">

      <header className="ik-head ik-activities-head">

        <div>
          <span className="ik-eyebrow">
            Expériences &amp; activités
          </span>

          <h2>
            Vivre
            <br />
            sur <em>place</em>.
          </h2>

          <p>
            Sport, bien-être et loisirs pour profiter pleinement
            du Jardin de l'Ikopa.
          </p>
        </div>

        <div className="ik-activities-controls">

          <button
            type="button"
            className="ik-carousel-button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Activités précédentes"
          >
            ←
          </button>

          <button
            type="button"
            className="ik-carousel-button"
            onClick={() => scrollCarousel(1)}
            aria-label="Activités suivantes"
          >
            →
          </button>

        </div>

      </header>


      <div
        ref={carouselRef}
        className="ik-activities-carousel"
      >
        {activities.map((activity, index) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            index={index}
          />
        ))}
      </div>


      <footer className="ik-activities__footer">

        <p className="ik-note">
          Tarifs en ariary. Certaines informations peuvent être
          soumises à confirmation.
        </p>

        <Link
          className="ik-btn ik-btn--ghost"
          to="/booking?type=activity&destination=ikopa"
        >
          Réserver une activité
        </Link>

      </footer>

    </section>
  );
}

export default Activities;
