/* ════════════════════════════════════════════════════════════════
   JAYPEE — CONFIG / PRODUCTS.JS
   Modifiez ce fichier pour gérer vos produits et photos.

   PHOTO D'ACCUEIL
   ───────────────
   Changez heroImage ci-dessous.
   Mettez votre photo dans le dossier images/ et écrivez son nom.
   Exemple : "images/ma-photo.jpg"

   VERSION
   ───────
   Si les images n'apparaissent pas après une modification,
   changez le numéro de version (ex: "2", "3"...) pour forcer
   le rechargement depuis ce fichier.

   NOMMAGE DES IMAGES
   ──────────────────
   Format : {produit}-{couleur}-{numéro}.jpg
   Exemples :
     luxura-klass-blanc-casse-0.jpg  → 1re photo
     luxura-klass-blanc-casse-1.jpg  → 2e photo
     gourmet-beige-0.jpg
   Placez toutes les images dans le dossier images/
════════════════════════════════════════════════════════════════ */

window.JAYPEE_CONFIG = {
  version:   "1",
  heroImage: "images/accueil.jpg"
};

window.JAYPEE_PRODUCTS = [

  /* ── Luxura Klass — 2000 ML ── */
  {
    id: 0, name: "Luxura Klass", cat: "Récipient Isotherme", cap: "2000 ML",
    badge: "new", filter: "2000",
    desc: "Le Luxura Klass incarne l'excellence de la gamme JAYPEE. Conçu pour les amateurs d'art de vivre raffiné, ce récipient isotherme en acier inoxydable 18/8 de 2000 ml allie élégance architecturale et performance thermique de haute précision.",
    icon: "🍶", photos: [],
    colors: [
      {
        name: "Blanc Cassé", hex: "#f5f0e8",
        images: [
          "images/JAYPEE WEB IMAGESArtboard 1.jpg",
          "images/luxura-klass-blanc-casse-mogcdx52-1.jpg",
          "images/luxura-klass-blanc-casse-mogcdywu-2.jpg"
        ],
        photo: "images/JAYPEE WEB IMAGESArtboard 1.jpg"
      },
      {
        name: "Noir", hex: "#1a1a1a",
        images: [
          "images/luxura-klass-noir-mogce0if-0.jpg",
          "images/luxura-klass-noir-mogce2ka-1.jpg"
        ],
        photo: "images/luxura-klass-noir-mogce0if-0.jpg"
      },
      { name: "Camel", hex: "#c4956a", images: [], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Hermétique sous vide"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Luxura — 1500 ML ── */
  {
    id: 1, name: "Luxura", cat: "Récipient Isotherme", cap: "1500 ML",
    badge: "new", filter: "1500",
    desc: "Le Luxura, version compacte et élégante de la ligne signature JAYPEE. En acier inoxydable de première qualité, il s'impose comme le compagnon idéal des familles modernes.",
    icon: "🍶", photos: [],
    colors: [
      {
        name: "Écru", hex: "#f2ede3",
        images: [
          "images/JAYPEE WEB IMAGESArtboard 2.jpg",
          "images/luxura-ecru-mogcin6v-1.jpg"
        ],
        photo: "images/JAYPEE WEB IMAGESArtboard 2.jpg"
      },
      {
        name: "Noir", hex: "#1a1a1a",
        images: [
          "images/luxura-noir-mogcit52-0.jpg",
          "images/luxura-noir-mogciv78-1.jpg"
        ],
        photo: "images/luxura-noir-mogcit52-0.jpg"
      },
      {
        name: "Camel", hex: "#c4956a",
        images: [
          "images/luxura-camel-mogciyx4-0.jpg",
          "images/luxura-camel-mogcj35y-1.jpg"
        ],
        photo: "images/luxura-camel-mogciyx4-0.jpg"
      }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Hermétique"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Gourmet — 3000 ML ── */
  {
    id: 2, name: "Gourmet", cat: "Récipient Isotherme", cap: "3000 ML",
    badge: null, filter: "3000",
    desc: "Le gourmet  est fait pour les grandes tablées et les repas généreux à la marocaine. Avec ses 3 litres, il conserve la chaleur de vos tajines, couscous et soupes familiales pendant de longues heures.",
    icon: "🥘", photos: [],
    colors: [
      {
        name: "Beige", hex: "#d4c8b0",
        images: [
          "images/gourmet-beige-0.jpg",
          "images/gourmet-beige-2.jpg"
        ],
        photo: "images/gourmet-beige-0.jpg"
      },
      {
        name: "Taupe", hex: "#8e7d6e",
        images: [
          "images/gourmet-taupe-mogcl6t7-0.jpg"
        ],
        photo: "images/gourmet-taupe-mogcl6t7-0.jpg"
      },
      { name: "Vert de gris", hex: "#7d9e8f", images: [], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Couvercle verrouillant"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Gourmet XL — 5000 ML ── */
  {
    id: 3, name: "Gourmet XL", cat: "Récipient Isotherme", cap: "5000 ML",
    badge: null, filter: "3000",
    desc: "Le Gourmet XL s'adresse aux familles nombreuses et aux grandes occasions. Avec 5 litres, c'est le récipient ultime pour vos marmites, harira du Ramadan, et grands plats festifs.",
    icon: "🥘", photos: [],
    colors: [
      {
        name: "Beige", hex: "#d4c8b0",
        images: [
          "images/gourmet-xl-beige-0.jpg",
          "images/gourmet-xl-beige-1.jpg",
          "images/gourmet-xl-beige-2.jpg"
        ],
        photo: "images/gourmet-xl-beige-0.jpg"
      },
      {
        name: "Taupe", hex: "#8e7d6e",
        images: [
          "images/gourmet-xl-taupe-mogdh08r-0.jpg",
          "images/gourmet-xl-taupe-mogdh0b2-1.jpg",
          "images/gourmet-xl-taupe-mogdh0da-2.jpg"
        ],
        photo: "images/gourmet-xl-taupe-mogdh08r-0.jpg"
      },
      {
        name: "Vert de gris", hex: "#7d9e8f",
        images: [
          "images/gourmet-xl-vert-de-gris-mogdh59q-0.jpg",
          "images/gourmet-xl-vert-de-gris-mogdh5bt-1.jpg",
          "images/gourmet-xl-vert-de-gris-mogdh5dd-2.jpg"
        ],
        photo: "images/gourmet-xl-vert-de-gris-mogdh59q-0.jpg"
      }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Couvercle XXL verrouillant"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── HotServe — Set de 3 ── */
  {
    id: 4, name: "HotServe", cat: "Set de 3 Récipients", cap: "800 – 1500 ML",
    badge: "new", filter: "1500",
    desc: "Le HotServe est l'ensemble parfait pour les familles. Ce set de 3 récipients isothermes (800 ml, 1200 ml, 1500 ml) vous offre la flexibilité d'organiser plusieurs plats simultanément.",
    icon: "🍱", photos: [],
    colors: [
      {
        name: "Beige", hex: "#d4c8b0",
        images: [
          "images/images/hotserve-beige-mogecjix-0.jpg",
          "images/images/hotserve-beige-mogecqko-1.jpg"
        ],
        photo: "images/images/hotserve-beige-mogecjix-0.jpg"
      },
      {
        name: "Blanc", hex: "#f5f5f5",
        images: [
          "images/hotserve-blanc-mogdelq3-1.jpg"
        ],
        photo: "images/hotserve-blanc-mogdelq3-1.jpg"
      },
      { name: "Vert clair", hex: "#b8d4b0", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Hermétique x3"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Fabrene — 3000 ML ── */
  {
    id: 5, name: "Fabrene", cat: "Récipient Isotherme", cap: "3000 ML",
    badge: null, filter: "3000",
    desc: "Le Fabrene est une pièce au caractère affirmé. Ses courbes douces et sa silhouette élégante en font une présence remarquable sur n'importe quelle table.",
    icon: "🍶", photos: [],
    colors: [
      { name: "Blanc Cassé", hex: "#f5f0e8", images: [
        "images/1111-1.jpg",
    "images/2222-0.jpg"
      ], photo: "images/1111.jpg" },
      
      { name: "Taupe",       hex: "#8e7d6e", images: ["images/fabrenetaupe-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Hermétique"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Wavelock Ultra — 2000 ML ── */
  {
    id: 6, name: "Wavelock Ultra", cat: "Récipient Isotherme", cap: "2000 ML",
    badge: null, filter: "2000",
    desc: "Le Wavelock Ultra se distingue par son design ondulé et sa prise en main remarquablement confortable. La technologie Wavelock assure une étanchéité absolue.",
    icon: "🍶", photos: [],
    colors: [
      { name: "Beige",        hex: "#d4c8b0", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Bleu",         hex: "#5b7fa8", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Vert de gris", hex: "#7d9e8f", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Wavelock — verrouillage avancé"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── MicroSmart — 1500 ML ── */
  {
    id: 7, name: "MicroSmart", cat: "Récipient Isotherme", cap: "1500 ML",
    badge: null, filter: "1500",
    desc: "Le MicroSmart 1500 est pensé pour les actifs. Son format compact et ses coloris contemporains en font le compagnon idéal du quotidien.",
    icon: "🍶", photos: [],
    colors: [
      { name: "Gris",  hex: "#9a9a9a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Bleu",  hex: "#5b7fa8", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Rouge", hex: "#c0392b", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Smart-Lock"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── MicroSmart Plus — 2000 ML ── */
  {
    id: 8, name: "MicroSmart Plus", cat: "Récipient Isotherme", cap: "2000 ML",
    badge: null, filter: "2000",
    desc: "Le MicroSmart Plus — plus de capacité, toujours autant de praticité. 2 litres avec le système Smart-Lock amélioré.",
    icon: "🍶", photos: [],
    colors: [
      { name: "Taupe", hex: "#8e7d6e", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Blanc", hex: "#f5f5f5", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Beige", hex: "#d4c8b0", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Smart-Lock Plus"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Princeton — 2500 ML ── */
  {
    id: 9, name: "Princeton", cat: "Récipient Isotherme", cap: "2500 ML",
    badge: null, filter: "3000",
    desc: "Le Princeton — noble, distingué, de caractère. Silhouette verticale élancée, 4 coloris soigneusement sélectionnés.",
    icon: "🏆", photos: [],
    colors: [
      { name: "Écru",       hex: "#f2ede3", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Grège",      hex: "#c8bda8", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Camel",      hex: "#c4956a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Vert clair", hex: "#b8d4b0", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Princeton-Lock hermétique"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Kingston — 2500 ML ── */
  {
    id: 10, name: "Kingston", cat: "Récipient Isotherme", cap: "2500 ML",
    badge: null, filter: "3000",
    desc: "Le Kingston — classicisme moderne. Lignes droites, coloris naturels, robustesse et élégance sans ostentation.",
    icon: "🍶", photos: [],
    colors: [
      { name: "Blanc Cassé", hex: "#f5f0e8", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Camel",       hex: "#c4956a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Vert clair",  hex: "#b8d4b0", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Hermétique renforcée"
    },
    features: [
      { ico: "✨", title: "Sans BPA", txt: "Fabriqué à partir de matériaux 100 % alimentaires, sans BPA, garantissant sécurité et bien-être." },
      { ico: "🔒", title: "Excellente rétention de chaleur", txt: "Conçu pour maintenir les aliments chauds et frais plus longtemps, adapté à un usage quotidien et festif." },
      { ico: "✨", title: "Système de verrouillage sécurisé", txt: "Couvercle verrouillable pour éviter les fuites et assurer un transport sûr." },
      { ico: "🌡️", title: "Design premium", txt: "Corps extérieur en PU noir avec finition texturée effet cuir, offrant un aspect moderne et élégant." },
      { ico: "🧼", title: "Entretien simplifié", txt: "Joint amovible, nettoyage en quelques secondes." },
      { ico: "✨", title: "Intérieur durable en inox", txt: "Fabriqué en acier inoxydable de haute qualité, garantissant robustesse et sécurité alimentaire." }
    ]
  },

  /* ── Punch Prime — 650 ML ── */
  {
    id: 11, name: "Punch Prime", cat: "Bouteille Isotherme", cap: "650 ML",
    badge: "new", filter: "1500",
    desc: "Le Punch Prime réinvente votre hydratation. 650 ml en acier inoxydable premium pour les sportifs et les actifs.",
    icon: "🥤", photos: [],
    colors: [
      { name: "Blanc/Noir",   hex: "#1a1a1a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Blanc/Orange", hex: "#d4621a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Beige/Camel",  hex: "#c4956a", images: ["images/gourmet-beige-0.jpg"], photo: null },
      { name: "Blanc/Dots",   hex: "#e8e4dc", images: ["images/gourmet-beige-0.jpg"], photo: null }
    ],
    specs: {
      "Matière": "Acier inoxydable 18/8",
      "Conservation chaud / froid": "7h",
      "Fermeture": "Bouchon twist sécurisé"
    },
    features: [
      { ico: "💧", title: "Bouteille de sport premium", txt: "650 ml pour une hydratation optimale." },
      { ico: "🌡️", title: "Performance thermique",      txt: "8h chaud / 18h froid." },
      { ico: "🎨", title: "4 coloris bicolores",        txt: "Combinaisons uniques pour une identité visuelle forte." },
      { ico: "🔒", title: "Bouchon twist anti-fuite",   txt: "Zéro fuite en toutes circonstances." }
    ]
  }

  /* ── AJOUTER UN NOUVEAU PRODUIT : copiez un bloc ci-dessus,
        changez l'id (prochain numéro libre) et adaptez. ── */

];
