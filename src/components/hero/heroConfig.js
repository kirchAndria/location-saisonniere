// ==========================================================
// Configuration du Hero — seul fichier à toucher pour l'alimenter.
//
// AJOUTER UNE PHOTO : déposer  public/images/hero/hero-06.jpg  (puis 07, 08…)
// Aucune modification de code : le Hero détecte les fichiers existants,
// dans l'ordre, jusqu'à `maxSlides`. Les numéros manquants sont ignorés.
// ==========================================================
export const heroConfig = {
  folder: "/images/hero",
  prefix: "hero-",      // hero-01.jpg, hero-02.jpg…
  extension: "jpg",     // "webp" recommandé en production
  maxSlides: 12,        // nombre maximum de fichiers recherchés

  interval: 7000,       // durée d'affichage d'une photo (ms)
  fade: 1800,           // durée du fondu enchaîné (ms)

  // Encadré des destinations (desktop). La ligne de la destination affichée
  // se met en avant quand la légende de la photo porte le même nom (`place`).
  places: [
    { name: "Jardin de l'Ikopa", area: "Anosizato Est" },
    { name: "Lake House Mantasoa", area: "Lac de Mantasoa" },
    { name: "Hassani Beach", area: "Foulpointe, côte Est" },
  ],

  // Légende de chaque photo, indexée par numéro (1 = hero-01).
  // ⚠ Convention par défaut : hero-01 = Mantasoa, hero-02 = Hassani, hero-03 = Ikopa.
  //   Si l'ordre de tes photos est différent, change simplement les numéros.
  //   Pour une 4e photo et plus, ajoute une ligne ; sans ligne, pas de légende.
  //   place    : titre affiché (doit reprendre un nom de `places` pour la mise en avant)
  //   location : sous-titre
  //   alt      : description de la photo (accessibilité), facultatif
  //   focus    : point d'intérêt pour le recadrage, facultatif
  //              ex. "20% 50%" si le sujet est à gauche, "80% 50%" à droite
  captions: {
    1: { place: "Lake House Mantasoa", location: "Mantasoa" },
    2: { place: "Hassani Beach", location: "Foulpointe" },
    3: { place: "Jardin de l'Ikopa", location: "Anosizato" },
  },
};