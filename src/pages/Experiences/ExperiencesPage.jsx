import { destinations } from "../../data/destinations";

import "./ExperiencesPage.css";

function ExperiencesPage() {
  return (
    <div className="experiences-page">

      <section className="experiences-header">

        <span>Expériences</span>

        <h1>
          Vivre le lieu,
          <br />
          à votre façon.
        </h1>

        <p>
          Sport, bien-être, loisirs et moments de partage :
          découvrez les expériences proposées à travers nos destinations.
        </p>

      </section>


      <section className="experiences-list">

        {destinations.map((destination) => (

          <div key={destination.id}>

            <h2>{destination.name}</h2>

            <p>{destination.theme}</p>

            {destination.activities && (
              <div>

                {destination.activities.map((activity, index) => (

                  <div
                    key={activity.id || index}
                    className="experience-row"
                  >

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{activity.name}</h3>

                      {activity.schedule && (
                        <p>{activity.schedule}</p>
                      )}
                    </div>

                  </div>

                ))}

              </div>
            )}

          </div>

        ))}

      </section>

    </div>
  );
}

export default ExperiencesPage;