export const site = {
  name: "PLACEHOLDER",
  description: "Séjours, expériences et événements à Madagascar",

  // "/#destinations" et "/#contact" pointent vers des sections partagées
  // (la sélection de destinations en page d'accueil, le contact en pied
  // de page présent sur toutes les pages) plutôt que vers des routes dédiées.
  navigation: [
    { label: "Destinations", href: "/#destinations" },
    { label: "Expériences", href: "/experiences" },
    { label: "Groupes & entreprises", href: "/groups" },
    { label: "Contact", href: "/#contact" }
  ]
};
