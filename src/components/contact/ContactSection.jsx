import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__container">

        <div className="contact-section__intro">
          <span className="contact-section__eyebrow">
            Une question ?
          </span>

          <h2 className="contact-section__title">
            Parlons de
            <br />
            votre prochaine expérience.
          </h2>

          <p className="contact-section__description">
            Une question sur une destination, un séjour ou une offre
            pour votre équipe ? Envoyez-nous votre demande et nous
            reviendrons vers vous.
          </p>

          <div className="contact-section__infos">

            <div className="contact-section__info">
              <span>Réservations</span>
              <a href="tel:+261347207860">
                +261 34 72 078 60
              </a>
              <a href="tel:+261381615253">
                +261 38 16 152 53
              </a>
            </div>

            <div className="contact-section__info">
              <span>Événements & groupes</span>
              <a href="tel:+261381005300">
                +261 38 10 053 00
              </a>
            </div>

            <div className="contact-section__info">
              <span>Activités</span>
              <a href="tel:+261348932545">
                +261 34 893 25 45
              </a>
            </div>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="contact-form__row">

            <label className="contact-form__field">
              <span>Votre nom</span>
              <input
                type="text"
                name="name"
                placeholder="Nom et prénom"
              />
            </label>

            <label className="contact-form__field">
              <span>Téléphone</span>
              <input
                type="tel"
                name="phone"
                placeholder="+261 ..."
              />
            </label>

          </div>

          <label className="contact-form__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
            />
          </label>

          <label className="contact-form__field">
            <span>Votre demande</span>

            <select name="subject" defaultValue="">
              <option value="" disabled>
                Sélectionner une demande
              </option>
              <option value="stay">
                Séjour / hébergement
              </option>
              <option value="activity">
                Activité / bien-être
              </option>
              <option value="group">
                Groupe / entreprise
              </option>
              <option value="other">
                Autre demande
              </option>
            </select>
          </label>

          <label className="contact-form__field">
            <span>Message</span>

            <textarea
              name="message"
              rows="5"
              placeholder="Parlez-nous de votre projet..."
            />
          </label>

          <button type="submit" className="contact-form__submit">
            Envoyer ma demande
            <span>→</span>
          </button>
        </form>

      </div>
    </section>
  );
}

export default ContactSection;