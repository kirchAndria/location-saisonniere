export const destinations = [
  // ============================================================
  // JARDIN DE L'IKOPA
  // ============================================================
  {
    id: "ikopa",

    name: "Jardin de l'Ikopa",
    location: "Anosizato Est",
    theme: "Nature en ville, bien-être et sport",
    currency: "MGA",

    status: "active",

    accommodation: {
      type: "Appartements",

      items: [
        {
          id: "ikopa-f4",
          name: "Appartement F4",
          type: "Appartement",

          area: "139,05 m²",

          capacity: null,

          rooms: [
            "Chambre 1 — placard encastré, balcon côté rue",
            "Chambre 2 — identique à la chambre 1, WC commun aux deux chambres",
            "Chambre parentale — grand dressing, salle d'eau avec WC, sans balcon"
          ],

          features: [
            "Cuisine ouverte sur le salon",
            "Buanderie",
            "WC visiteurs"
          ],

          floor: "1er étage",

          price: null,
          priceStatus: "to_confirm"
        }
      ],

      additional: [
        "Villas annoncées mais détails non disponibles"
      ]
    },

    facilities: [
      "Piscine chauffée",
      "Salle de sport",
      "Tennis",
      "Basketball",
      "Pétanque",
      "Soins et massages",
      "Salle de réunion",
      "Jardin",
      "Sécurité 24h/24 et 7j/7",
      "Kit anti-délestage",
      "Eau et électricité indépendantes"
    ],

    activities: [
      {
        id: "pool",
        name: "Piscine chauffée",
        category: "Bien-être",
        schedule: "Tous les jours, 08h00–20h00",

        pricing: [
          {
            label: "Résident",
            amount: 250000,
            currency: "MGA",
            unit: "mois"
          },
          {
            label: "Externe",
            amount: 300000,
            currency: "MGA",
            unit: "mois"
          }
        ]
      },

      {
        id: "aquagym",
        name: "Aquagym",
        category: "Bien-être",
        schedule: "Mercredi, vendredi et samedi, 18h00–19h00",

        pricing: [
          {
            amount: 300000,
            currency: "MGA",
            unit: "mois"
          }
        ]
      },

      {
        id: "gym",
        name: "Salle de sport",
        category: "Sport",
        schedule: "Lun., mer., ven., sam. 6h–20h · Mar., jeu. 6h–19h · Dim. 6h–15h",

        pricing: [
          {
            label: "Résident",
            amount: 210000,
            currency: "MGA",
            unit: "mois"
          },
          {
            label: "Externe",
            amount: 400000,
            currency: "MGA",
            unit: "mois"
          }
        ]
      },

      {
        id: "tennis",
        name: "Tennis",
        category: "Sport",
        schedule: "Tous les jours, 09h00–19h00",

        pricing: [
          {
            amount: 200000,
            currency: "MGA",
            unit: "mois"
          }
        ]
      },

      {
        id: "zumba-kids",
        name: "Zumba Kids",
        category: "Sport",
        schedule: "Mercredi et samedi, 15h00–16h00",

        pricing: [
          {
            amount: 75000,
            currency: "MGA",
            unit: "mois"
          }
        ],

        scheduleStatus: "to_confirm"
      },

      {
        id: "une-heure-pour-vous",
        name: "Une heure pour vous",
        category: "Bien-être",
        schedule: "Sur réservation",

        pricing: [
          {
            amount: 110000,
            currency: "MGA",
            unit: "mois"
          }
        ]
      },

      {
        id: "basket",
        name: "Basketball",
        category: "Sport",
        schedule: "Sur réservation",
        pricing: null,
        priceStatus: "to_confirm"
      },

      {
        id: "petanque",
        name: "Pétanque",
        category: "Sport",
        schedule: "Sur réservation",
        pricing: null,
        priceStatus: "to_confirm"
      },

      {
        id: "massage",
        name: "Massages et soins esthétiques",
        category: "Bien-être",
        schedule: "Réservation 2 jours à l'avance",
        pricing: null,
        priceStatus: "to_confirm"
      }
    ],

    groups: [
      {
        id: "relaxation-half-day",
        name: "Demi-journée détente",
        category: "Groupes & entreprises",

        capacity: "8–10 personnes",

        pricing: {
          amount: 100000,
          currency: "MGA",
          unit: "personne"
        }
      },

      {
        id: "seminar",
        name: "Séminaire",
        category: "Groupes & entreprises",

        capacity: "8–10 personnes",

        pricing: {
          amount: 150000,
          currency: "MGA",
          unit: "personne"
        }
      },

      {
        id: "private-space",
        name: "Location privée salle / terrain",
        category: "Événement",

        pricing: [
          {
            duration: "4h",
            amount: 350000,
            currency: "MGA"
          },
          {
            duration: "8h",
            amount: 700000,
            currency: "MGA"
          }
        ]
      },

      {
        id: "private-pool",
        name: "Piscine privée",
        category: "Événement",

        pricing: {
          duration: "4h",
          amount: 350000,
          currency: "MGA"
        }
      }
    ],

    contacts: {
      accommodation: [
        "+261 34 72 078 60",
        "+261 38 16 152 53"
      ],

      activities: [
        "+261 34 893 25 45"
      ],

      events: [
        "+261 38 10 053 00"
      ]
    },

    toConfirm: [
      "Orthographe exacte de la localisation : Anosizato Est",
      "Présence exacte d'un spa",
      "Détails et tarifs des villas",
      "Type de location des appartements/villas",
      "Tarifs du basketball et de la pétanque",
      "Tarifs des massages et soins",
      "Horaire exact de certaines activités"
    ]
  },


  // ============================================================
  // LAKE HOUSE MANTASOA
  // ============================================================
  {
    id: "mantasoa",

    name: "Lake House Mantasoa",
    location: "Mantasoa",
    theme: "Lac, déconnexion et cohésion",
    currency: "MGA",

    status: "active",

    accommodation: {
      type: "Maison + chalet",

      mainHouse: {
        name: "Maison principale",

        capacity: null,

        rooms: [
          "3 chambres",
          "3 salles de bain",
          "1 grande pièce avec 4 lits doubles",
          "2 chambres avec 1 lit double chacune"
        ],

        features: [
          "Cuisine équipée",
          "Barbecue",
          "Vue sur le lac",
          "Grande terrasse panoramique"
        ]
      },

      chalet: {
        name: "Chalet",

        capacity: null,

        features: [
          "Salon",
          "Balcon",
          "Vue sur le lac",
          "Cuisine équipée",
          "Canapé-lit",
          "Air hockey",
          "Piano"
        ],

        accommodationStatus: "to_confirm"
      },

      included: [
        "Accès privé au lac",
        "Parking pour 4 voitures",
        "Groupe électrogène",
        "Réservoir d'eau",
        "Espace détente",
        "2 membres du personnel"
      ],

      price: null,
      priceStatus: "to_confirm"
    },

    facilities: [
      "Accès privé au lac",
      "Coin feu",
      "Parking",
      "Aire de jeux pour enfants",
      "Smart TV avec Netflix",
      "Jeux de société",
      "Livres"
    ],

    activities: [
      {
        id: "petanque",
        name: "Pétanque",
        category: "Loisir",
        included: true
      },

      {
        id: "air-hockey",
        name: "Air hockey",
        category: "Loisir",
        included: true
      },

      {
        id: "foosball",
        name: "Baby-foot",
        category: "Loisir",
        included: true
      },

      {
        id: "bike",
        name: "Balade à vélo",
        category: "Nature",
        included: true
      },

      {
        id: "boat",
        name: "Bateau vers le parc Nosy Soa",
        category: "Nature",
        capacity: 12,
        pricing: null,
        priceStatus: "to_confirm"
      },

      {
        id: "chef",
        name: "Chef privé",
        category: "Service",

        pricing: {
          amount: 50000,
          currency: "MGA",
          unit: "jour"
        }
      },

      {
        id: "massage",
        name: "Massage",
        category: "Bien-être",
        pricing: null,
        priceStatus: "to_confirm"
      },

      {
        id: "foodbox",
        name: "Foodbox",
        category: "Service",
        pricing: null,
        priceStatus: "to_confirm"
      }
    ],

    groups: [
      {
        id: "relaxation-day",
        name: "Journée relaxation / cohésion",

        schedule: "09h00–17h00",

        capacity: 20,

        pricing: {
          amount: 1800000,
          currency: "MGA",
          unit: "groupe"
        },

        pricePerPerson: {
          amount: 90000,
          currency: "MGA"
        }
      },

      {
        id: "premium-day",
        name: "Journée premium avec croisière",

        schedule: "09h00–17h00",

        capacity: 20,

        pricing: {
          amount: 3000000,
          currency: "MGA",
          unit: "groupe"
        },

        pricePerPerson: {
          amount: 150000,
          currency: "MGA"
        }
      },

      {
        id: "team-building",
        name: "Team building résidentiel",

        duration: "1 nuit",

        capacity: 12,

        pricing: {
          amount: 3600000,
          currency: "MGA",
          unit: "groupe"
        },

        pricePerPerson: {
          amount: 300000,
          currency: "MGA"
        }
      },

      {
        id: "premium-team-building",
        name: "Team building premium",

        duration: "1 nuit",

        capacity: 12,

        pricing: {
          amount: 4500000,
          currency: "MGA",
          unit: "groupe"
        },

        pricePerPerson: {
          amount: 375000,
          currency: "MGA"
        }
      }
    ],

    schedule: {
      arrival: "À partir de 10h30",
      departure: "Au plus tard à 11h le lendemain"
    },

    contacts: {
      central: [
        "+261 38 10 053 00",
        "+261 34 893 25 45"
      ]
    },

    toConfirm: [
      "Tarif classique de la maison / nuitée",
      "Capacité exacte pour une réservation classique",
      "Rôle du chalet comme hébergement",
      "Formule 4 manquante dans les documents",
      "Nature de l'apéritif coucher de soleil puisque l'alcool est interdit",
      "Tarif du massage",
      "Tarif du bateau",
      "Tarif de la foodbox",
      "Email exact",
      "Coordonnées affichées dans certains documents"
    ]
  },


  // ============================================================
  // HASSANI BEACH
  // ============================================================
  {
    id: "hassani",

    name: "Hassani Beach",
    location: "Foulpointe - Tamatave",
    theme: "Mer, piscine et farniente",
    currency: "EUR",

    status: "active",

    accommodation: {
      type: "Villa",

      capacity: 12,

      rooms: [
        "4 chambres climatisées",
        "4 salles de bain privées",
        "1 salle d'eau visiteurs"
      ],

      features: [
        "Grand salon",
        "2 cuisines entièrement équipées",
        "Terrasse aménagée",
        "Wi-Fi",
        "Parking sécurisé",
        "Environnement calme et sécurisé"
      ],

      exterior: [
        "Piscine privée",
        "Grand jardin tropical",
        "Trampoline",
        "Balançoires",
        "Coin feu",
        "Accès direct à la mer"
      ],

      price: {
        amount: 400,
        currency: "EUR",
        unit: "nuit"
      },

      priceStatus: "to_confirm"
    },

    facilities: [
      "Piscine privée",
      "Jardin tropical",
      "Accès direct à la mer",
      "Wi-Fi",
      "Parking sécurisé",
      "Coin feu",
      "Trampoline",
      "Balançoires"
    ],

    activities: [
      {
        id: "sunrise-yoga",
        name: "Yoga au lever du soleil",
        category: "Bien-être",
        status: "to_confirm"
      },

      {
        id: "kayak",
        name: "Kayak à proximité",
        category: "Nature",
        status: "to_confirm"
      },

      {
        id: "landscape-photography",
        name: "Photographie de paysage",
        category: "Expérience",
        status: "to_confirm"
      }
    ],

    groups: [],

    contacts: {
      central: [
        "+261 38 10 053 00",
        "+261 34 893 25 45"
      ]
    },

    slogan: "Quand luxe et liberté se rencontrent les pieds dans l'eau",

    toConfirm: [
      "400 € : vérifier s'il s'agit bien du tarif de la villa entière",
      "Conditions du tarif : saison, nombre de nuits minimum, etc.",
      "Configuration exacte des lits",
      "Activités yoga, kayak et photographie",
      "Identifiants Instagram et Facebook",
      "Règles de séjour"
    ]
  }
];