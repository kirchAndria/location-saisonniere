import { destinations } from "../../data/destinations";
import "./Destinations.css";

const destinationImages = {
  ikopa: "/images/destinations/Ikopa/facade.jpg",
  mantasoa: "/images/destinations/Mantasoa/cover.jpg",
  hassani: "/images/destinations/Hassani/cover.jpg",
};

function Destinations() {
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


      <div className="destinations__grid">

        {destinations.map((destination, index) => (

          <a
            key={destination.id}
            href={`/destinations/${destination.id}`}
            className={`destination-card ${
              index === 0 ? "destination-card--featured" : ""
            }`}
          >

            {/* IMAGE */}
            <div className="destination-card__image">

              <img
                src={destinationImages[destination.id]}
                alt={destination.name}
              />

            </div>


            {/* OVERLAY */}
            <div className="destination-card__overlay" />


            {/* CONTENT */}
            <div className="destination-card__content">

              <span className="destination-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>


              <div>

                <span className="destination-card__location">
                  {destination.location}
                </span>

                <h3 className="destination-card__name">
                  {destination.name}
                </h3>

                <p className="destination-card__tagline">
                  {destination.tagline ?? destination.theme}
                </p>

                <span className="destination-card__link">
                  Découvrir →
                </span>

              </div>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}

export default Destinations;