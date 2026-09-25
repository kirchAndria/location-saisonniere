// ==========================================================
// Contenu éditorial de la page Ikopa (images, notes, inclus).
// Les prix, horaires et contacts viennent de src/data/destinations.js.
//
// PHOTOS : les fichiers actuels sont recadrés depuis des flyers (basse
// résolution). Pour les remplacer par les originaux, il suffit de déposer
// un fichier du même nom dans public/images/destinations/Ikopa/.
// ==========================================================
const IMG = "/images/destinations/Ikopa";

export const ikopaImages = {
  hero: `${IMG}/facade.jpg`,

  // Appartement F4 (image principale, puis deux vues secondaires)
  f4: [
    { src: `${IMG}/f4-kitchen.jpg`, alt: "Cuisine ouverte de l'appartement F4" },
    { src: `${IMG}/f4-living.jpg`, alt: "Séjour de l'appartement F4" },
    { src: `${IMG}/f4-balcony.jpg`, alt: "Balcon de l'appartement F4" },
  ],

  garden: { src: `${IMG}/garden.jpg`, alt: "Jardin du Jardin de l'Ikopa" },

  gallery: [
    { src: `${IMG}/facade.jpg`, alt: "Façade de la résidence", cols: 8, rows: 4 },
    { src: `${IMG}/garden.jpg`, alt: "Jardin et bassin", cols: 4, rows: 2 },
    { src: `${IMG}/gym.jpg`, alt: "Salle de sport", cols: 4, rows: 2 },
    { src: `${IMG}/basket.jpg`, alt: "Terrain de basket", cols: 3, rows: 3 },
    { src: `${IMG}/petanque.jpg`, alt: "Terrain de pétanque", cols: 3, rows: 3 },
    { src: `${IMG}/pool.jpg`, alt: "Piscine chauffée", cols: 3, rows: 3 },
    { src: `${IMG}/tennis.jpg`, alt: "Terrain de tennis", cols: 3, rows: 3 },
  ],
};

// Miniatures des lignes d'activités (par id de destinations.js)
export const activityImages = {
  pool: `${IMG}/pool.jpg`,
  aquagym: `${IMG}/pool.jpg`,
  gym: `${IMG}/gym.jpg`,
  tennis: `${IMG}/tennis.jpg`,
  basket: `${IMG}/basket.jpg`,
  petanque: `${IMG}/petanque.jpg`,
  massage: `${IMG}/massage.jpg`,
};

// Précisions issues du catalogue des activités
export const activityNotes = {
  pool: "Serviettes à disposition · bonnet de bain obligatoire · places limitées aux externes",
  aquagym: "À partir de 15 ans · séances de 40 minutes",
  gym: "Coachs hommes et femmes · accès à la piscine inclus",
  tennis: "Accès au terrain selon disponibilité",
  "zumba-kids": "De 5 à 13 ans · encadré par une coach de Zumba",
  "une-heure-pour-vous": "Marche d'une heure pour les femmes · serviettes et bouteilles d'eau · détails à confirmer",
  massage: "Massages relaxant, énergétique, pierres chaudes, dos · soins du visage, épilations, beauté des mains et des pieds",
};

// Ce que comprennent les formules groupes & entreprises
export const groupIncludes = {
  "relaxation-half-day": [
    "Eau, café et jus, avec mini viennoiseries",
    "Activité team building encadrée par un coach (tennis, pétanque, basket ou aquagym)",
  ],
  seminar: [
    "Salle équipée : vidéoprojecteur, tableau et feutres",
    "Pauses café à 10h et 15h",
    "Accès à un terrain au choix (tennis, pétanque ou basket), encadré",
  ],
  "private-space": [
    "Salle de réunion ou privatisation du terrain sportif",
    "Jusqu'à 10 personnes",
  ],
  "private-pool": [
    "Piscine chauffée privatisée",
    "Jusqu'à 10 personnes",
  ],
};

export const groupPoints = [
  "Cadre naturel et sécurisé",
  "Salle équipée et terrains sur place",
  "Accessible depuis Antananarivo",
];

export const contactBlocks = [
  { key: "accommodation", label: "Hébergement", hint: "Appartements et villas" },
  { key: "activities", label: "Activités", hint: "Piscine, sport et soins" },
  { key: "events", label: "Événements", hint: "Groupes, séminaires et entreprises" },
];

export const contactEmail = "jdikopa.gestionimmo@gmail.com";
