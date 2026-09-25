import { destinations } from "../../data/destinations";

import "./GroupsPage.css";

function GroupsPage() {
  const groupDestinations = destinations.filter(
    (destination) =>
      destination.groups &&
      destination.groups.length > 0
  );

  return (
    <div className="groups-page">

      <section className="groups-hero">

        <div className="groups-hero__content">

          <span>Groupes & entreprises</span>

          <h1>
            Réunir une équipe.
            <br />
            Créer un souvenir.
          </h1>

          <p>
            Des lieux pensés pour les séminaires, les journées
            de cohésion et les événements professionnels.
          </p>

        </div>

      </section>


      <section className="groups-intro">

        <span>Une autre façon de travailler ensemble</span>

        <h2>
          Des espaces pour sortir
          <br />
          du cadre habituel.
        </h2>

      </section>


      <section className="groups-destinations">

        {groupDestinations.map((destination, index) => (

          <article
            key={destination.id}
            className="groups-destination"
          >

            <div className="groups-destination__number">
              0{index + 1}
            </div>

            <div className="groups-destination__content">

              <span>
                {destination.location}
              </span>

              <h3>
                {destination.name}
              </h3>

              <p>
                {destination.theme}
              </p>

              <a
                href={`/destinations/${destination.id}`}
              >
                Découvrir la destination
                <span>↗</span>
              </a>

            </div>

            <div className="groups-destination__offers">

              {destination.groups.map((group, groupIndex) => (

                <div
                  key={group.id || groupIndex}
                  className="groups-offer"
                >

                  <span>
                    {group.name}
                  </span>

                  <strong>
                    {group.price || "Sur demande"}
                  </strong>

                </div>

              ))}

            </div>

          </article>

        ))}

      </section>


      <section className="groups-cta">

        <span>Votre projet</span>

        <h2>
          Parlons de votre
          <br />
          prochain événement.
        </h2>

        <a href="/booking?type=group">
          Faire une demande
          <span>↗</span>
        </a>

      </section>

    </div>
  );
}

export default GroupsPage;