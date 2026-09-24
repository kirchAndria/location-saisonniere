import "./ExperienceChoice.css";

function ExperienceChoice() {
  return (
    <section className="experience-choice">
      <div className="experience-choice__intro">
        <span className="experience-choice__eyebrow">
          Vivre l'expérience
        </span>

        <h2 className="experience-choice__title">
          Des moments pensés
          <br />
          pour chaque occasion.
        </h2>

        <p className="experience-choice__description">
          Que vous cherchiez une escapade en famille, un séjour entre amis
          ou un moment de cohésion avec votre équipe, découvrez des lieux
          adaptés à votre expérience.
        </p>
      </div>

      <div className="experience-choice__grid">

        {/* SÉJOURS PRIVÉS */}
        <a
          href="#destinations"
          className="experience-choice__card experience-choice__card--private"
        >
          <div className="experience-choice__image" />

          <div className="experience-choice__overlay" />

          <div className="experience-choice__content">
            <span className="experience-choice__number">01</span>

            <div>
              <p className="experience-choice__category">
                Séjours privés
              </p>

              <h3>
                En famille
                <br />
                ou entre amis.
              </h3>

              <span className="experience-choice__link">
                Découvrir les destinations →
              </span>
            </div>
          </div>
        </a>

        {/* GROUPES & ENTREPRISES */}
        <a
          href="#groups"
          className="experience-choice__card experience-choice__card--groups"
        >
          <div className="experience-choice__image" />

          <div className="experience-choice__overlay" />

          <div className="experience-choice__content">
            <span className="experience-choice__number">02</span>

            <div>
              <p className="experience-choice__category">
                Groupes & entreprises
              </p>

              <h3>
                Réunir une équipe.
                <br />
                Créer un souvenir.
              </h3>

              <span className="experience-choice__link">
                Découvrir les offres →
              </span>
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}

export default ExperienceChoice;