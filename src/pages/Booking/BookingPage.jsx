import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { destinations } from "../../data/destinations";
import "./BookingPage.css";

// Chaque type de demande renvoie vers le bon contact de la destination.
const TYPES = [
  { id: "stay", label: "Séjour", contact: "accommodation" },
  { id: "activity", label: "Activité", contact: "activities" },
  { id: "group", label: "Groupe & événement", contact: "events" },
];

function BookingPage() {
  const [params] = useSearchParams();

  const [type, setType] = useState(
    TYPES.some((t) => t.id === params.get("type")) ? params.get("type") : "stay"
  );
  const [destinationId, setDestinationId] = useState(
    destinations.some((d) => d.id === params.get("destination"))
      ? params.get("destination")
      : destinations[0].id
  );
  const [sent, setSent] = useState(false);

  const destination = destinations.find((d) => d.id === destinationId);
  const current = TYPES.find((t) => t.id === type);
  const phones = destination.contacts?.[current.contact] ?? [];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Démo : aucune donnée n'est envoyée.
    setSent(true);
  };

  return (
    <div className="booking">
      <div className="booking__inner">

        <header className="booking__intro">
          <span>Demande de réservation</span>

          <h1>
            Parlez-nous
            <br />
            de votre projet.
          </h1>

          <p>
            Choisissez le type de demande et la destination. Aucun paiement,
            aucune disponibilité en temps réel : la demande est étudiée par
            l'équipe.
          </p>

          {phones.length > 0 && (
            <p className="booking__phones">
              Pour une réponse directe :{" "}
              {phones.map((phone, i) => (
                <span key={phone}>
                  {i > 0 && " · "}
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </span>
              ))}
            </p>
          )}
        </header>

        {sent ? (
          <div className="booking__done" role="status">
            <h2>Demande prête.</h2>
            <p>
              Mode démonstration : votre demande n'a pas été transmise. Dans la
              version finale, elle serait envoyée à l'équipe de{" "}
              {destination.name}.
            </p>

            <button type="button" className="booking__btn" onClick={() => setSent(false)}>
              Modifier la demande
            </button>
            <Link className="booking__link" to={`/destinations/${destination.id}`}>
              Retour à {destination.name} →
            </Link>
          </div>
        ) : (
          <form className="booking__form" onSubmit={handleSubmit}>

            <fieldset className="booking__types">
              <legend>Type de demande</legend>

              {TYPES.map((t) => (
                <label key={t.id} className={t.id === type ? "is-active" : ""}>
                  <input
                    type="radio"
                    name="type"
                    value={t.id}
                    checked={t.id === type}
                    onChange={() => setType(t.id)}
                  />
                  {t.label}
                </label>
              ))}
            </fieldset>

            <label className="booking__field">
              Destination
              <select value={destinationId} onChange={(e) => setDestinationId(e.target.value)}>
                {destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>

            <div className="booking__row">
              <label className="booking__field">
                Nom
                <input name="name" type="text" autoComplete="name" required />
              </label>

              <label className="booking__field">
                Téléphone
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
            </div>

            <label className="booking__field">
              Dates souhaitées
              <input name="dates" type="text" placeholder="Ex. du 12 au 15 novembre" />
            </label>

            <label className="booking__field">
              {type === "group" ? "Nombre de personnes et projet" : "Message"}
              <textarea name="message" rows="4" />
            </label>

            <button type="submit" className="booking__btn">
              Envoyer la demande
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

export default BookingPage;
