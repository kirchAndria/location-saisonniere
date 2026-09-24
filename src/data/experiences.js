export const experiences = [
  // ============================================================
  // BIEN-ÊTRE
  // ============================================================
  {
    id: "wellness",

    title: "Bien-être",

    description:
      "Des moments dédiés à la détente, aux soins et à la relaxation.",

    destinations: [
      "ikopa",
      "mantasoa",
      "hassani"
    ],

    items: [
      {
        destination: "ikopa",
        experiences: [
          "Piscine chauffée",
          "Aquagym",
          "Salle de sport",
          "Massages et soins esthétiques",
          "Une heure pour vous"
        ]
      },

      {
        destination: "mantasoa",
        experiences: [
          "Espace détente",
          "Massage",
          "Déconnexion au bord du lac"
        ]
      },

      {
        destination: "hassani",
        experiences: [
          "Piscine privée",
          "Yoga au lever du soleil"
        ],

        status: "partially_to_confirm"
      }
    ]
  },


  // ============================================================
  // SPORT
  // ============================================================
  {
    id: "sport",

    title: "Sport",

    description:
      "Des activités sportives et de loisirs pour profiter pleinement du séjour.",

    destinations: [
      "ikopa",
      "mantasoa"
    ],

    items: [
      {
        destination: "ikopa",
        experiences: [
          "Tennis",
          "Basketball",
          "Pétanque",
          "Salle de sport",
          "Aquagym",
          "Zumba Kids"
        ]
      },

      {
        destination: "mantasoa",
        experiences: [
          "Balade à vélo",
          "Pétanque",
          "Air hockey",
          "Baby-foot"
        ]
      },

      {
        destination: "hassani",
        experiences: [
          "Kayak à proximité"
        ],

        status: "to_confirm"
      }
    ]
  },


  // ============================================================
  // NATURE
  // ============================================================
  {
    id: "nature",

    title: "Nature",

    description:
      "Des expériences dans des environnements propices à la déconnexion.",

    destinations: [
      "ikopa",
      "mantasoa",
      "hassani"
    ],

    items: [
      {
        destination: "ikopa",
        experiences: [
          "Jardin",
          "Nature en ville"
        ]
      },

      {
        destination: "mantasoa",
        experiences: [
          "Accès privé au lac",
          "Balade à vélo",
          "Bateau vers le parc Nosy Soa",
          "Vue sur le lac",
          "Coucher de soleil"
        ]
      },

      {
        destination: "hassani",
        experiences: [
          "Accès direct à la mer",
          "Jardin tropical",
          "Kayak à proximité",
          "Photographie de paysage"
        ],

        status: "partially_to_confirm"
      }
    ]
  },


  // ============================================================
  // GROUPES & ENTREPRISES
  // ============================================================
  {
    id: "groups",

    title: "Groupes & entreprises",

    description:
      "Des formules adaptées aux séminaires, équipes, team building et événements.",

    destinations: [
      "ikopa",
      "mantasoa"
    ],

    items: [
      {
        destination: "ikopa",
        experiences: [
          "Demi-journée détente",
          "Séminaire",
          "Location privée de salle ou terrain",
          "Piscine privée"
        ]
      },

      {
        destination: "mantasoa",
        experiences: [
          "Journée relaxation / cohésion",
          "Journée premium avec croisière",
          "Team building résidentiel",
          "Team building premium"
        ]
      },

      {
        destination: "hassani",
        experiences: [],

        status: "not_available"
      }
    ]
  }
];