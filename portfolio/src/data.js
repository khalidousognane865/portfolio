// ============================================================
// 👋 Contenu du portfolio — Khalidou Sognane
//    Seul fichier à modifier pour mettre à jour le contenu.
// ============================================================

export const profile = {
  name: "Khalidou Sognane",
  title: "AI / LLM Engineer",
  subtitle:
    "J'ai conçu un système RAG multimodal de bout en bout pour l'éducation\net je maîtrise la chaîne complète : ingestion, vectorisation, orchestration LLM, déploiement.",
  location: "Dakar, Sénégal",
  email: "khalidousognane@gmail.com",
  github: "https://github.com/khalidousognane865",
  linkedin: "https://www.linkedin.com/in/khalidou-sognane-a71a76272/",
  cvUrl: "/cv.pdf",              // ← place ton CV (export PDF) dans /public/cv.pdf
  photo: "/photo.jpg",           // ← optionnel : place une photo dans /public/photo.jpg
  available: true,
};

// Compétences groupées par domaine — présentées en badges,
// sans pourcentage (un niveau auto-déclaré ne se défend pas en entretien ;
// ce sont les projets ci-dessous qui prouvent le niveau réel).
export const skills = [
  {
    category: "IA Générative & LLM",
    items: [
      "LangChain", "RAG", "FAISS / ChromaDB", "Hugging Face",
      "Prompt Engineering", "Mistral", "VLM",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "Python", "PySpark", "SQL", "Apache Airflow",
      "Apache Kafka", "Apache NiFi", "PostgreSQL", "Docker",
    ],
  },
  {
    category: "ML & Déploiement",
    items: [
      "Scikit-learn", "TensorFlow / Keras", "FastAPI",
      "Power BI", "AWS (S3, EMR)", "Git / GitHub",
    ],
  },
];

// Uniquement des projets terminés — chacun défendable en entretien.
// ⚠️ Les liens github/demo ci-dessous sont à corriger avec tes vraies URLs.
export const projects = [
  {
    id: 1,
    title: "Système RAG Multimodal & Agent IA Éducatif",
    description:
      "Système tutoriel basé sur les programmes officiels de collège (6ème–3ème). Ingestion PDF/images (PyMuPDF), chunking sémantique, vectorisation FAISS/ChromaDB, génération via Mistral orchestrée avec LangChain, et module VLM pour l'interprétation d'images pédagogiques.",
    tags: ["LangChain", "Mistral", "FAISS", "ChromaDB", "Gradio", "PyMuPDF", "VLM"],
    github: "https://github.com/khalidousognane865/rag-education-agent",
    demo: "",
    featured: true,
    metrics: [
      { label: "MRR", value: "0,945" },
      { label: "NDCG", value: "0,883" },
      { label: "Faithfulness", value: "0,910" },
      { label: "Hallucination", value: "1,05 %" },
    ],
  },
  {
    id: 2,
    title: "Analyse des Ventes Retail — Pipeline ETL & Power BI",
    description:
      "Pipeline de données complet sur 1 million de transactions retail : nettoyage Python/Pandas, chargement PostgreSQL via Docker, segmentation RFM des clients et dashboard Power BI interactif 6 pages.",
    tags: ["Python", "Pandas", "PostgreSQL", "Docker", "Power BI", "RFM"],
    github: "https://github.com/khalidousognane865/retail-sales-etl",
    demo: "",
    featured: false,
  },
  {
    id: 3,
    title: "Pipeline Big Data Streaming — Application Taxi",
    description:
      "Backend temps réel d'estimation de distance et de prix de trajets. Ingestion de flux continus via Kafka, transformation avec NiFi, indexation géospatiale Elasticsearch et monitoring via dashboard Kibana tolérant aux pannes.",
    tags: ["PySpark", "Apache Kafka", "Apache NiFi", "Elasticsearch", "Kibana"],
    github: "https://github.com/khalidousognane865/taxi-streaming-pipeline",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    title: "Analyse des Trajets Citibike NYC",
    description:
      "Traitement et transformation de plus de 10 millions de trajets réels sur cluster distribué AWS EMR. Analyse descriptive des volumes temporels et des durées moyennes pour identifier les stations sous-capacitaires.",
    tags: ["PySpark", "AWS EMR", "AWS S3", "Hue"],
    github: "https://github.com/khalidousognane865/citibike-nyc-emr",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "Prédiction de Risques Cardiovasculaires",
    description:
      "Étude et comparaison d'algorithmes de classification (Régression Logistique, SVM, Random Forest) sur un jeu de données médicales réelles, avec optimisation de la précision sur la classe minoritaire.",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    github: "https://github.com/khalidousognane865/cardio-risk-prediction",
    demo: "",
    featured: false,
  },
];

// Timeline — formation et expériences mêlées, ordre reverse-chronologique.
export const experience = [
  {
    year: "7 – 13 juin 2026",
    title: "Enquêteur Terrain",
    org: "Millennium Challenge Account (MCA) · Kaolack",
    type: "Expérience",
    description:
      "Collecte et traitement de données quantitatives et qualitatives sur le terrain ; contrôle qualité des questionnaires et remontée des données dans les délais impartis.",
  },
  {
    year: "Avril – Juin 2026",
    title: "Prestataire Télé-enquêteur",
    org: "Ipsos Sénégal",
    type: "Expérience",
    description:
      "Enquêtes d'opinion et de satisfaction client par téléphone auprès de panels représentatifs ; saisie et vérification des données selon les standards méthodologiques Ipsos.",
  },
  {
    year: "2024 – 2026",
    title: "Master 2 — Ingénierie des Données & IA",
    org: "Université Iba Der Thiam, Thiès · Mention Bien",
    type: "Formation",
    description:
      "Mémoire : conception et architecture end-to-end d'un système RAG multimodal et d'un agent IA pour l'éducation, avec réduction rigoureuse des hallucinations.",
  },
  {
    year: "2023 – 2024",
    title: "Master 1 — Science des Données",
    org: "Université Iba Der Thiam, Thiès · Major de promotion",
    type: "Formation",
    description:
      "Spécialisation Big Data, calcul distribué et streaming (PySpark, Kafka, NiFi) appliqués à des cas réels.",
  },
  {
    year: "2021 – 2023",
    title: "Assistant Pédagogique & Tuteur Universitaire",
    org: "Université Assane Seck, Ziguinchor",
    type: "Expérience",
    description:
      "Tutorat en Algorithmique et Programmation pour les promotions L1/L2 ; accompagnement des nouveaux étudiants.",
  },
  {
    year: "2019 – 2023",
    title: "Licence MPI — Spécialité Informatique",
    org: "Université Assane Seck, Ziguinchor · Major de promotion L3",
    type: "Formation",
    description:
      "Bases solides en algorithmique, structures de données et mathématiques.",
  },
];
